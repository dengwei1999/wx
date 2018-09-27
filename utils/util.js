function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}
module.exports = {
  json2Form: json2Form,
} 
/*
var pageObject = {
  onLoad: function () {
    wx.showToast({
      title: '成功',  //标题
      icon: 'loading',  //图标，支持"success"、"loading"
      image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon
      duration: 2000000, //提示的延迟时间，单位毫秒，默认：1500
      mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
      success: function () { }, //接口调用成功的回调函数
      fail: function () { },  //接口调用失败的回调函数
      complete: function () { } //接口调用结束的回调函数
    })
  }
}

wx.showLoading({
  title: '加载中...',
})

wx.request({
  url: ...,
  ...,
  success: (res) => {
  },
  fail: () => {},
  complete: () => {
    wx.hideLoading()
  }
})

wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
*/