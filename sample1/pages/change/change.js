// pages/change/change.js
Page({
data:{
 usrposition:'',
 usrnumber:'',
 usrsex:'',
 usremail:''
},


changeinfo:function(e){
  var changesex = e.detail.value.inputsex;
  var changeemail = e.detail.value.inputemail;
  var nickname = wx.getStorageInfoSync('nickname');
  wx.request({
    url: 'http://127.0.0.1:8000/userApi/user/create/',
    data: {
    userNo:this.data.usrposition,
    nickname:nickname,
    sex: changesex,
    email:changeemail,    
    identity:this.data.usrposition,
    },
    header: {'content-type':'application/json'},
    method: 'post',
    dataType: 'json',
    responseType: 'text',
    success: (result)=>{
        console.log('成功修改');
    },
    fail: ()=>{},
    complete: ()=>{}
})
  wx.navigateBack({//返回

    delta:1
    
    })
}  ,

  onLoad: function (options) {
    this.setData({
      usrposition:options.position,
      usrnumber:options.number,
      usrsex:options.sex,
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