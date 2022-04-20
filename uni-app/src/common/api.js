import {
  baseUrl
} from './config'
export function topList() {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: `${baseUrl}/toplist/detail`, //仅为示例，并非真实接口地址。
      data: {
        text: 'uni.request'
      },
      method: 'GET',
      success: (res) => {
        let result = []
        result = res.data.list
        result.length = 4
        resolve(result)
      }
    });
  })
}

export function list(listId) {
  return uni.request({
    url: `${baseUrl}/playlist/detail?id=${listId}`,
    method: 'GET'
  })
}