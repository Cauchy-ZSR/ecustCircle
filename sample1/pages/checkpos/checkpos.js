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
    usrname = wx.getStorageSync('usrname');
    password = wx.getStorageSync('password');
    wx.request({
      url: 'http://127.0.0.1:8000/userApi/user/retrieve/'+res.usrname+'/',//修改
      data: '',
      header: {'content-type':'application/json'},
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          console.log(result.data.code);
          //修改： 验证登录 转向论坛界面
          if(usrname == res.usrname && password ==res.password){
            wx.navigateTo({
              url: '/pages/index/index',
              success: function(res){
                // success
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
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