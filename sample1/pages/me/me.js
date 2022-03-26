Page({
  data:{
    position:"",
    number: "",
    sex:"",
    email:"",
    userinfo:{},
    firstuse:false,
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
      
    this.setData({userinfo});
  },

  onLoad(){
    var position="学生";
    var number = "88888888";
    var sex = "男";
    var email = "ecust_***@163.com";
    this.setData({
      position,number,sex,email
    })
    wx.setStorageSync('position', position);
    wx.setStorageSync('number', number);
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    
  },

  jmptochange:function(){
    wx.navigateTo({
      url: '../../pages/change/change?position=' + this.data.position + '&number=' + this.data.number + '&sex=' + this.data.sex + '&email=' + this.data.email,
    })
  },

  jmptocomplete:function(){
    wx.navigateTo({
      url: '../../pages/complete/complete',
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log('信息！！！！！！！：'+res.userInfo)
        wx.setStorageSync('userinfo', res.userInfo);
        wx.request({
          url: 'http://127.0.0.1:8000/userApi/user/retrieve/'+res.userInfo.nickName+'/',
          data: '',
          header: {'content-type':'application/json'},
          method: 'get',
          dataType: 'json',
          responseType: 'text',
          success: (result)=>{
              console.log('成功修改');
              console.log(result.data.code);
              var firstflag = result.data.code;
              if(firstflag == 404){
                var firstuse = true;
                this.setData({
                  firstuse
                })
                console.log(this.data.firstuse);
              }
              else{
                var position = result.data.identity;
                var number = result.data.userNo;
                var sexjudge = result.data.sex;
                if(sexjudge){
                  var sex = '男';
                }
                else{
                  var sex = '女';
                }
                var email = result.data.email;
                this.setData({
                  position,number,sex,email
                })
              }
          },
          fail: ()=>{},
          complete: ()=>{}
      });     

      },
    })
 
  },

  getUserInfo(e) {
 
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
     
    })
  
    
  },
})