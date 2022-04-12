// pages/mail/mail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
      wx.request({
        url: 'http://127.0.0.1:8000/forumApi/comment/detail/is_read/'+wx.getStorageSync('usrdata').userNo,
        data: '',
    method: 'get',
     dataType: 'json',
    responseType: 'text',
    success:(result)=>{
        this.setData({
            mail:result.data
        })
        console.log(result.data);
    }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
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