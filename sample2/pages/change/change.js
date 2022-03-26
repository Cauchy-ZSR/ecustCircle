// pages/change/change.js
Page({



changeinfo:function(e){
  var changesex = e.detail.value.inputsex;
  var changetel = e.detail.value.inputtel;
  var changeemail = e.detail.value.inputemail;
  console.log(changesex);
  var pages = getCurrentPages();
  var prepage = pages[pages.length-2];
  prepage.setData({
      sex : changesex,
      tel : changetel,
      email : changeemail
  })
  console.log(prepage);
  wx.navigateBack({//返回

    delta:1
    
    })
}  ,

  onLoad: function (options) {
    this.setData({
      usrsex:options.sex,
      usrtel:options.tel,
      usremail:options.email
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