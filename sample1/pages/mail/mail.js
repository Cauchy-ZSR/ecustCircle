// pages/mail/mail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mail:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
      wx.request({
        url: 'http://127.0.0.1:8000/notifyInfoApi/notify/receive/'+wx.getStorageSync('usrdata').userNo+'/',
        data: '',
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success:(result)=>{
          console.log(result.data);
          var mails = result.data;
          this.setData({
            mail:mails
          })
      }
      })
      
  }
})