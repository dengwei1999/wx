//index.js
//获取应用实例
var app = getApp();
var Logger = require("../../utils/Logger.js");
Page({
  data:{
    username:"Deng wei",
    userid:"1000",
    show:true,
    flag:"5",
    userinfo:{
      "username":"dengyiming",
      "age":"1",
    },
    item: {
      index: 1,
      msg: 'this is a template',
      time: '2018-09-21'
    },
    item2: {
      index: 2,
      msg: 'this is a template',
      time: '2018-09-22'
    },
  },
  clickMe: function () {
    this.setData({ msg: "你点击了我" })
  },
  onLoad:function(){

  },
  onShow:function(){
    app.globalData.userInfo = "wxopen.club";
    Logger.PrintLog("execute index onShow");
  },
  tapMessage:function(event){
    console.log(event);
    console.log("data="+event.target.dataset.userid);
    console.log("data=" + event.target.dataset.userName);
  },
  handleTap1:function(){
    console.log("handTap1");
  },
  handleTap2: function () {
    console.log("handTap2");
  },
  handleTap3: function () {
    console.log("handTap3");
  }
})