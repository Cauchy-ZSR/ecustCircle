// pages/sendmail/sendmail.js
Page({
  data: {
    inputValue:''
  },

  sendmail:function(e){
    var title = e.detail.value.mailtitle;
    var content = e.detail.value.mailcontent;
    console.log(title,content);
    
    wx.navigateBack({//返回

      delta:1
      
      })
  }
})