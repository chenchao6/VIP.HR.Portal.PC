let  common ={
    langs:['zh-CN', 'en-US'],
    defaultLang:'zh-CN',
    enLange(json){
        let newJson={};
        for(let key in json){
            newJson[key]=key;
        }
        return newJson;  
    },
    init(json){
        let locale=localStorage.getItem('hrlang');  //获得本地缓存的数据  
        if(!this.langs.includes(locale)){  //如果不包含 就显示默认
            locale = this.defaultLang;
        }
        localStorage.setItem('hrlang',locale);  //本地缓存起来
        if(locale=='zh-CN'){  //如果是中文
            return json;
        }else{
            return this.enLange(json);
        }
        
    }
}
export default common;