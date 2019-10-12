//首页导航
function getIndexNavData(){
  const arr=[
    {
      id:1,
      icon:'../../images/icon_1.jpg',
      title:'DAC/AOC Cables'
    },
    {
      id: 2,
      icon: '../../images/icon_2.jpg',
      title: '40G Transceivers'
    },
    {
      id: 3,
      icon: '../../images/icon_3.jpg',
      title: '100G Transceivers'
    }
  ]
  return arr
}

function getIndexNavSectionData(callback){
  wx.request({
    url: 'http://localhost:3000/product/list',
    success: function (res){
      callback(res)
    }
  })
}

module.exports={
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData
}