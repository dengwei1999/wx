//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    motto:'hello,body',
    //userInfo:{},
   // hasUserInfo:false,
   // canIUe:wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '',
    })
  },
  onLoad:function(){
    /*
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo:true
      })
    }else if(this.data.canIUse) {
       //由于getUserInfo是网络请求，可能会在Page.onload之后才返回
       //所以此处加入callback以防止这种情况
       app.userInfoReadyCallback = res =>{
         this.setData({
           userInfo:res.userInfo,
           hasUserInfo:true
         })
       }
    }else{
      //在没有open-type=getUserInfo版本的兼容处理
      wx.getUserInfo({
        success:res=>{
          app.globalData.userInfo=res.userInfo
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })
        }
      })
    }*/
  },
 /*getUserInfo:function(e){
   console.log(e)
   app.globalData.userInfo =e.detail.userInfo
   console.log("userinfo=" + e.detail.userInfo.nickName);
   this.setData ({
     userInfo:e.detail.userInfo,
     hasUserInfo:true
   })
 }*/

})