// pages/user/user.js

Page({
  data: {

    markers: [{
      iconPath: "/images/location.png",
      id: 0,
      latitude: 22.595784,
      longitude: 113.9994,
      width: 20,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 113.9994,
        latitude: 22.595784
      }, {
        longitude: 113.9994,
        latitude: 22.595784
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/map.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  }
})