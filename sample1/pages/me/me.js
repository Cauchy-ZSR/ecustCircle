Page({
  data:{
    position:"",
    number: "",
    sex:"",
    tel:"",
    email:"",
    userinfo:{},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    existunread:false,
    islogin:true,
  },

  onShow:function(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo});
    var position=wx.getStorageSync('usrdata').identity;
    var number = wx.getStorageSync('usrdata').userNo;
    var sex = wx.getStorageSync('usrdata').sex;
    var tel = "158****7163";
    var email = wx.getStorageSync('usrdata').email;
    this.setData({
      position,number,sex,tel,email
    })
    wx.setStorageSync('position', position);
    wx.setStorageSync('number', number);
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    };
    wx.request({
    url: 'http://127.0.0.1:8000/forumApi/comment/is_read/'+wx.getStorageSync('usrdata').userNo,
    data: '',
    method: 'get',
     dataType: 'json',
    responseType: 'text',
    success:(result)=>{
        console.log('?'+this.data.existunread);
        console.log(result.data.code);
        if(result.data.code=='201'){
            this.setData({
                existunread : true
            })
        }
        else{
            this.setData({
                existunread:false
            })
        }
    }
    })
  },

  jmptochange:function(){
    wx.navigateTo({
      url: '../change/change?position=' + this.data.position + '&number=' + this.data.number + '&sex=' + this.data.sex + '&email=' + this.data.email,
    })
  },

  jmptocomplete:function(){
    wx.navigateTo({
      url: '../complete/complete',
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
                wx.setStorageSync('number', number);
                var sexjudge = result.data.sex;
                if(sexjudge){
                  var sex = '男';
                }
                else{
                  var sex = '女';
                }
                var email = result.data.email;
                var islogin = true;
                this.setData({
                  position,number,sex,email,islogin
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