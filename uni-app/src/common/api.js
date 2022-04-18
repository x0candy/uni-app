import {
  baseUrl
} from './config'
export function topList() {
  return new Promise(function (resolve, reject) {
    let listId = ['3', '0', '2', '1']
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
        for (let i = 0; i < 4; i++) {
          result[i].listId = listId[i]
        }
        resolve(result)
      }
    });
  })
}