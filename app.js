//app.js
App({
  onLaunch: function () {
    this.getOpenId()
    this.getUserInfo()
    /*if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }    */ 
  },
  //获取openid
    getOpenId: function (cb) {
    var that = this
    if (this.globalData.openid) {
      typeof cb == "function" && cb(this.globalData.openid)
    } else {
      wx.login({
        success: function (res) {
         console.log(res.code);//(1)如果登录成功打印code值
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://tui.9wan.cn/wxapp/api.php',
              data: {
                code: res.code//将code值传入php中
              },
              success: function (result) {
                console.log(result);//传入成功code值返回过来
                var res = result.data
                that.globalData.openid = res.openid
                that.globalData.session_key = res.session_key
                console.log("openid="+res.openid);
                typeof cb == "function" && cb(that.globalData.openid);
                typeof cb == "function" && cb(that.globalData.session_key);
              }
            })
          } else {
            conso1e.log('获取用户登录态失败!' + res.errM3g)
          }
        }
      });
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              that.globalData.userInfo = res.userInfo;
              console.log(res.userInfo);
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          })
        }
      })
    }
  },
  globalData : {
    userInfo: null,
    encryptedData: null,
    openid: '',
    session_key: ''
  }
})
