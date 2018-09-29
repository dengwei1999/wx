const APP_ID = 'wx34762491412e1186';//输入小程序appid  
const APP_SECRET = '7f856cc6f3f61098d58b391fc3c562b8';//输入小程序app_secret  
var OPEN_ID = ''//储存获取到openid  
var SESSION_KEY = ''//储存获取到session_key 
const app = getApp()
Page({
  data:{
    markers:[{
      iconPath:"../../images/mark_bs.png",
      id:0,
      latitude:39.907354,
      longitude:116.397557,
      width:19,
      height:33
    }],
    nickName:'',
    province:'',
    city:'',
    openid2: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var openid2 = app.globalData.openid;
    var userInfo = app.globalData.userInfo;

    this.setData({ 
      openid2: openid2,
      openid: openid2,
      nickName: userInfo.nickName,
      province: userInfo.province,
      city: userInfo.city
      });
  },
  getUserInfo: function () {//同意授权，获取用户信息，encryptedData是加密字符串，里面包含unionid和openid信息
    var that = this;
    wx.getUserInfo({
      withCredentials: true,//此处设为true，才会返回encryptedData等敏感信息
      success: res => {       
       // var jsondata = JSON.parse(res.rawData);
       // console.log("jsondata="+jsondata);        
        app.globalData.userInfo = res.userInfo;
        app.globalData.encryptedData = res.encryptedData;
        console.log("userInfo=" + app.globalData.userInfo);
        console.log("encryptedData=" + app.globalData.encryptedData);
        that.setData({
          nickName: res.userInfo.nickName,
          province: res.userInfo.province,
          city: res.userInfo.city
        })
      }
    })
  },
  getOpenIdTap: function () {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          //获取openid接口  
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: APP_ID,
            secret: APP_SECRET,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function (res) {
            console.log(res.data)
            OPEN_ID = res.data.openid;//获取到的openid  
            SESSION_KEY = res.data.session_key;//获取到session_key  
            //console.log(OPEN_ID.length)
            //console.log(SESSION_KEY.length)           
            that.setData({
              openid:res.data.openid,
              //openid: res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),
              session_key: res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)
            })
          }
        })
      }
    })
  }  
})