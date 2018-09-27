//second.js
//获取应用实例
var app = getApp();
var Logger = require("../../utils/Logger.js");
Page({
  data: {
    array:[{message:"hello"},{message:"herman"},{message:"php"}],
    arrayNames:["dengwei","dengyiming","dengke"],
   
  },
  onLoad: function () {

  },
  onShow: function () {
    app.globalData.userInfo = "wxopen.club";
    Logger.PrintLog("execute second onShow");
  }
})