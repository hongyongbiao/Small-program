// pages/new/new.js
const fetch = require('../../utils/fetch.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_url:[],
    new_list:[],
    arrItem:[],
    page:1,
  },
  //跳转到新闻详情
  newDetail(res){
    //console.log(res)
    const id=res.currentTarget.dataset.id
    wx.navigateTo({
      url: `../new_detail/new_detail?id=${id}`,
      success:function(){
        wx.setNavigationBarTitle({
          title: 'New Article',
        })
      }
    })
  },
  //加载更多
  loadMore(){
    wx.showToast({
      title:'正在加载...',
      icon:'loading',
      duration:1000
    })
    this.setData({
      page: this.data.page + 1
    })
    fetch('new/newlist?page=' + this.data.page).then(res => {
      //console.log(res)
      this.setData({
        arrItem: res.data.message,
        new_list: this.data.new_list.concat(this.data.arrItem)
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch('banner').then(res=>{
      //console.log(res)
      this.setData({
        banner_url: res.data.message
      })
      //console.log(this.data.banner_url)
    })
    fetch('new/newlist').then(res=>{
      this.setData({
        new_list:res.data.message
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})