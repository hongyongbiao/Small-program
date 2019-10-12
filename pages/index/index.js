//index.js
//获取应用实例
const app = getApp()

const fileData=require('../../utils/data.js')

const fetch = require('../../utils/fetch.js')

Page({
  data:{
    banner_url:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    vertical:false,
    navTopItems:fileData.getIndexNavData(),
    curNavId:1,
    curIndex:0,
    colors: ["red", "red", "red", "red","red"],
    navSelectionItems:[],
    arrItem:[]
  },
  //实现navbar切换
  switchTap:function(res){
    //console.log(e)
    let id = res.currentTarget.dataset.id;
    let index = res.currentTarget.dataset.index;

    this.setData({
      curNavId:id,
      curIndex:index
    })
    //console.log(this.data.curNavId)
    fetch('product/list?page=' + this.data.curNavId).then(res => {
      this.setData({ navSelectionItems: res.data.message })
      //console.log(this.data.navSelectionItems)
    })
  },
  //加载更多
  loadMore:function(res){
    //console.log(e,'加载到底部')
    //console.log(this.data.navSelectionItems)
      wx.showToast({
        title: '正在加载...',
        icon:'loading',
        duration:1000
      })
      this.setData({
        curNavId: this.data.curNavId + 1
      })
      fetch('product/list?page=' + this.data.curNavId).then(res => {
       //console.log(res)
        this.setData({ 
            arrItem:res.data.message,
            navSelectionItems: this.data.navSelectionItems.concat(this.data.arrItem)
           })
      })
  },
  //跳转到详情
  navigateDetail(res){
    //console.log(res)
    const id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
      success: function(res) {
       // wx.showNavigationBarLoading();
        wx.setNavigationBarTitle({
          title: 'Product Details',
        })
        // setTimeout(function(){
        //   wx.hideNavigationBarLoading();
        // },2000)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function () {

    fetch('banner').then(res =>{
      this.setData({ banner_url: res.data.message })
      //console.log(this.data.banner_url)
    })

    fetch('product/list?page=' + this.data.curNavId ).then(res=>{
      this.setData({ navSelectionItems: res.data.message })
      //console.log(this.data.navSelectionItems)
    })
    //加载弹窗
    wx.showToast({
      title: '正在加载...',
      icon:'loading',
      duration:1000,
      mask:true
    })

    this.setData({
      list:this.data.navSelectionItems
    })

  }
})
