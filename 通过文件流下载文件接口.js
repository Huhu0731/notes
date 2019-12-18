// 文件下载接口
export const exportLog = (params) => {
    return request({
        url: prefix + '/cmis-enroll/enrollChangeSync/exportLog',
        method: 'post',
        data: params,
        responseType: 'blob'
    })
}