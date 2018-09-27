Page({
  data: {
    feeds: [],
    page: 1
  },
  onLoad: function () {
    var that = this;
    this.getFeeds(that.data.page);
  },
  onReachBottom: function () {
    wx.showLoading({
      title: '加载更多文章',
    })
    var that = this;
    this.getFeeds(that.data.page);
  },
  getFeeds: function (page) {
    if (page == 1) {
      wx.showLoading({
        title: '加载中',
      })
    }
    var that = this
    wx.request({
      url: 'http://www.wanchongchong.com/index.php?g=dlios&m=api&a=getHuoDong&page=' + page + '&pagesize=10',
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var count = res.data.data.count;
        var res = res.data.data.list;
        console.log("count=" + count);  
        if (count > 1) {
          var feedTemp = that.data.feeds;
          that.setData({
            feeds: feedTemp.concat(res),
            page: page + 1
          })
        } else {
          wx.showToast({
            title: '已经到底了',
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
        if (page >= 1) {
          wx.hideLoading()
        } else {
          //wx.stopPullDownRefresh()
        }
      }
    })
  },
  //单项的点击事件
  tapItem: function (event) {
    var that = this;
    var article = event.currentTarget.dataset.para;
    wx.navigateTo({
      url: "/pages/list/details?id=" + article.id + "&title=" + article.title
    })
  }
})