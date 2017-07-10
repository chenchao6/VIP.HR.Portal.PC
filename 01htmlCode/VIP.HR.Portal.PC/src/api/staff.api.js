import fetch from './fetch'

// 获取广告列表
export function getBanners() {
  return fetch({
    url: '/api/Banner/GetBanners',
    method: 'get'
  })
}

// 获取活动列表
export function getEvents(data) {
    return fetch({
        url: '/api/Event/GetEvent',
        method: 'post',
        data
    })
}

// 获取社团列表
export function getAllGroups() {
    return fetch({
        url: '/api/Community/GetAllGroups',
        method: 'get'
    })
}
