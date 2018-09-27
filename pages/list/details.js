const app = getApp()

Page({

  data: {
    id: '',
    title: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
      title: options.title
    })
  },
})