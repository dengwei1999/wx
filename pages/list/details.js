// pages/list/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    article: '',
    myrich: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: options.id
    });
    this.getArticle(that.data.id);
  },

  getArticle: function (id) {
    wx.showLoading({
      title: '加载中',
    });
    var that = this
    wx.request({
      url: 'http://www.wanchongchong.com/index.php?g=ios&m=api&a=getNewsContent&id=' + id,
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var errmsg = res.data.errmsg;
        var res = res.data.data;
        if (errmsg=="success"){
          that.setData({
            article: res,
            myrich: res.content
          })
        }else{
          wx.showToast({
            title: '服务器异常1',
            duration: 1500
          })
        }        
      },
      fail: function () {
        wx.showToast({
          title: '服务器异常',
          duration: 1500
        })
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  }
})