module.exports = (url,data)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `http://192.168.0.101:3000/${url}`,
      success: resolve,
      fail:reject
    })
  })
}