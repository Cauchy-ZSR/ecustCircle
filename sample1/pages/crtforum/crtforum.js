// pages/crtforum/crtforum.js
Page({
  crtforum:function(e){
    var inputforumtitle = e.detail.value.forumtitle;
    var inputforumcontent = e.detail.value.forumcontent;
    var selectedclass = e.detail.value.classname;
    // console.log(inputforumtitle,inputforumcontent);
    wx.request({
      url: 'http://127.0.0.1:8000/forumApi/forum/create/',
      data: {
        name:inputforumtitle,
        intro: inputforumcontent,
        tag:selectedclass,
        creater:wx.getStorageSync('number')
      },
        header: {'content-type':'application/json'},
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            console.log('成功修改');
            wx.setStorageSync('forums', result.data.data);
            wx.switchTab({
                url: '/pages/index/index',
              })
        },
        fail: ()=>{},
        complete: ()=>{}
    });
    
  },
  /**
   * 页面的初始数据
   */
  data: {

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