//third.js
var app=getApp();
var that =this;
Page({
  data:{
    newsdata:''
  },
  loadData:function(){
    var that = this;
    wx.showToast({
      title:'发送请求中',
      icon:'loading',
      duration:10000
    });
    wx.request({
      url: 'http://www.wanchongchong.com/index.php?g=dlios&m=api&a=getDailianAdslist',
      method:"GET",
      header:{
          'content-type':'application/json'
      },
      success:function(res){
        wx.hideToast();
        console.log(res.data);
        var errmsg = res.data.errmsg;
        if (errmsg =="success"){
          that.setData({
            newsdata: res.data.data
          });
        }else{
          wx.showModal({
            title: '请求失败',
            content: '请检查网络状态',
            showCancel:false,
            success:function(res){
              //回调
            }
          })
        }       
      }
    })
  }
})