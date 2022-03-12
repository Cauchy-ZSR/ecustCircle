Page({
  data:{
    position:"学生",
    number: "88888888",
    sex:"男",
    tel:"158****7163",
    email:"ecust_***@163.com"
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];
      
    this.setData({userinfo,collectNums:collect.length});
      
  },
  jmptochange:function(){
    wx.navigateTo({
      url: '../../pages/change/change?position=' + this.data.position + '&number=' + this.data.number + '&sex=' + this.data.sex + '&tel=' + this.data.tel + '&email=' + this.data.email,
    })
  }
})