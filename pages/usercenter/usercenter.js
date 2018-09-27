var app = getApp();
var Util = require("../../utils/util.js");
var that = this;
Page({
  data:{
      userN:'',
      passW:'',
      sendInfo: ''
  },
  bindMobilelInput:function(e){    
    this.setData({ userN: e.detail.value })
  },
  bindPasswordInput:function(e){
    this.setData({passW: e.detail.value})
  },
  login:function(e){    
    var that = this;
    if (this.data.userN.length==0) {
       wx.showToast({
         title: '手机号不能为空',
         icon:'none',
         duration:2000
       })
       return;
    }
    if (this.data.passW.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    wx.showToast({
      title:'登录请求中',
      icon:'loading',
      duration:10000
    });
    console.log(this.data.userN),
    console.log(this.data.passW),     
    //网络请求开始
    wx.request({
      url: 'http://www.wanchongchong.com/index.php?g=dlios&m=api&a=checkUserLogin',
      method:'post',
      data: Util.json2Form({ username: this.data.userN, password: this.data.passW}),
      header:{
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
          wx.hideToast();
        if (res.data.errmsg =="success"){
          //进行一些用户状态的存储
          var data=res.data.data;
          console.log(data);
          wx.showToast({
            title: '登录成功!',
            icon: 'success',
            duration: 2000
          })
         /* that.setData({
            userN: '',
            passw:''
          });*/
          //跳转页面
          /*wx.redirectTo({
            url: '../../pages/index/index',
          });*/
          wx.switchTab({
            url: '../../pages/index/index',
            success: function () {
              console.log("called switchtab.");
            }
          });
        }else{
          wx.showModal({
            title: '登录失败',  
            content: '请检查您填写的用户信息',
            showCancel:false,
            success:function(res){
              //回调函数
            }
          })
        }
      }
    });
  }


})