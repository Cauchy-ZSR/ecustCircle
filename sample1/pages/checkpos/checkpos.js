// pages/checkpos/checkpos.js
Page({
  usrnameinput:function(e){
    this.setData({
      usrname:e.detail.value
    });
    wx.setStorageSync('usrname',e.detail.value);
  },

  passwordinput:function(e){
    this.setData({
      password:e.detail.value
    });
    wx.setStorageSync('password',e.detail.value);
  },

  login:function(){
    var usrname = wx.getStorageSync('usrname');
    var password = wx.getStorageSync('password');
    wx.request({
      url: 'http://127.0.0.1:8000/userApi/user/retrieve/'+usrname+'/',//修改
      data: '',
      header: {'content-type':'application/json'},
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
          wx.setStorageSync('usrdata',res.data);
          //修改： 验证登录 转向论坛界面
          if(usrname == res.data.userNo && password == res.data.password){
          console.log('228');
            wx.switchTab({
              url: '../me/me',
            })
          }
          
      },
      fail: ()=>{},
      complete: ()=>{}
  });
  },
  /**
   * 页面的初始数据
   */
  data: {
    usrname:"",
    password:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})