// require('shelljs')
// import { rm, cp } from 'shelljs' // shell命令插件
// import rm from 'rimraf'
import del from 'del'
import fs from 'fs'
import path from 'path'
import gulp from 'gulp'
import scss from 'gulp-sass' // scss编译插件
import buffer from 'vinyl-buffer' // 将流转换成buffer
import spritesmith from 'gulp.spritesmith' // 雪碧图合并插件
import merge from 'merge-stream' // 合并流插件
import imagemin from 'gulp-imagemin' // 图片压缩插件
import runSequence from 'run-sequence' // gulp流程控制插件

const spritesPath = path.join(__dirname, 'src/common/assets/sprites') // 雪碧图总目录
const scssPath = path.join(__dirname, 'src/common/assets/styles')
const spritesArray = []

/*
*
* collectSpritesTask 雪碧图合并
*
* */
const filesList = []
fs.readdirSync(spritesPath).forEach(name => {
  const spritesFolder = path.join(spritesPath, `${name}`) // 雪碧图子目录
  const stats = fs.lstatSync(spritesFolder)
  if (stats.isFile() && /.png$/.test(name)) {
    filesList.push(spritesFolder)
  } else if (stats.isDirectory() && fs.readdirSync(spritesFolder).length) {
    const gulpTask = `sprites:${name}`
    spritesArray.push(gulpTask)
    gulp.task(gulpTask, () => {
      const spritesData = gulp.src(path.join(spritesFolder, '*.png'))
        .pipe(spritesmith({
          imgName: `${name}_icon.png`,
          imgPath: `/images/${name}_icon.png`,
          cssName: `_${name}_icon.scss`
        }))
      const cssStream = spritesData.css
        .pipe(gulp.dest(scssPath)) // 雪碧图定位scss文件输出目录
      const imgStream = spritesData.img
        .pipe(buffer())
        .pipe(imagemin([
          imagemin.optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest(path.join(__dirname, 'static/images')))
      return merge(cssStream, imgStream)
    })
  }
})
if (filesList.length) {
  spritesArray.push('sprites:app')
  gulp.task('sprites:app', () => {
    // const spritesData = gulp.src(path.join(spritesPath, '*.png'))
    const spritesData = gulp.src(filesList)
      .pipe(spritesmith({
        imgName: 'app_icon.png',
        imgPath: '/images/app_icon.png',
        cssName: '_app_icon.scss'
      }))
    spritesData.css
      .pipe(gulp.dest(scssPath)) // 雪碧图定位scss文件输出目录
    spritesData.img
      .pipe(buffer())
      // .pipe(imagemin({
      //   optimizationLevel: 7, // 类型: Number 默认: 3 取值范围: 0-7(优化登记)
      //   use: [pngquant()] // 使用pngquant深度压缩png图片的imagemin插件
      // }))
      .pipe(imagemin([
        imagemin.optipng({ optimizationLevel: 5 })
      ]))
      .pipe(gulp.dest(path.join(__dirname, 'static/images')))
  })
}

gulp.task('sprites', spritesArray)

/*
*
* 公共scss文件编译
*
* */
gulp.task('scss', () => {
  return gulp.src(path.join(scssPath, '*.scss'))
    .pipe(scss({
      outputStyle: 'compressed'
    })).on('error', scss.logError)
    .pipe(gulp.dest(path.join(__dirname, 'static/styles')))
})

gulp.task('styles:sprites', ['sprites'], () => {
  return gulp.src(path.join(scssPath, '*.scss'))
    .pipe(scss({
      outputStyle: 'compressed'
    })).on('error', scss.logError)
    .pipe(gulp.dest(path.join(__dirname, 'static/styles')))
})

gulp.task('images', () => {
  return gulp.src(path.join(__dirname, 'src/assets/images/**'))
    .pipe(buffer())
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({ plugins: [{ removeViewBox: true }] })
    ]))
    .pipe(gulp.dest(path.join(__dirname, 'static/images/')))
})

/*
 * 复制第三方模块到static目录
 * */
// gulp.task('copy', () => {
//   return cp('-R', 'third_party/*', 'static/third_party/')
// })
gulp.task('copy', () => {
  return gulp.src('third_party/**')
    .pipe(gulp.dest('static/third_party'))
})

/*
 * 删除static目录下的文件，为重新构建准备
 * */
gulp.task('clean', () => {
  // return rm('-rf', 'static/*')
  return del(['static/**'])
})

gulp.task('structure', () => {
  runSequence('clean', ['copy', 'images', 'sprites'], 'scss')
})

gulp.task('default', ['structure'])
