// pages/change/change.js
Page({



    changeinfo:function(e){
      var  completeposition = e.detail.value.inputposition;
      var  completenumber = e.detail.value.inputnumber;
      var completesex = e.detail.value.inputsex;
      var  completeemail = e.detail.value.inputemail;
      var  completetel = e.detail.value.inputtel;
      var nickname = wx.getStorageSync('userinfo').nickName;
      console.log(nickname.nickName);
      wx.request({
        url: 'http://127.0.0.1:8000/userApi/user/create/',
        data: {
        userNo:completenumber,
        nickname:nickname,
        // sex: true,
        phone: completetel,
        email:completeemail,    
        identity:completeposition,
        },
        header: {'content-type':'application/json'},
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            
        },
        fail: ()=>{},
        complete: ()=>{}
    })
      wx.navigateBack({//返回
    
        delta:1
        
        })
    }  ,
    

    
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