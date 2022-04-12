// pages/sendmail/sendmail.js
Page({
  data: {
    inputValue:''
  },

  sendmail:function(e){
    var title = e.detail.value.mailtitle;
    var content = e.detail.value.mailcontent;
    wx.request({
      url: 'http://127.0.0.1:8000/notifyInfoApi/notify/create/',
      data:{
          title:title,
          content:content,
          sender:wx.getStorageSync('usrdata').userNo,
          range:wx.getStorageSync('forumid')
      },
      method:'post',
      dataType: 'json',
      responseType: 'text',
    })
    
    wx.navigateBack({//返回

      delta:1
      
      })
  }
})