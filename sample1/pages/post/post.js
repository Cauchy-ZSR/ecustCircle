// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position:"",
    number:"",
    authorizednumber:"19001902",
    id:"",
    posts:"",
    interestornot:'关注',
    interestflag:false
  },

  onLoad:function(options){
    wx.setStorageSync('forumid', options['id']);
  },
  onShow: function () {
    let position = wx.getStorageSync('position');
    let number = wx.getStorageSync('number');
    let forumid = wx.getStorageSync('forumid');
    this.setData({
      position,
      number,
      forumid
    });
    wx.request({
      url: 'http://127.0.0.1:8000/forumApi/topiclist/'+forumid,
      data: '',
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          
          this.setData({
              posts:result.data
          });
          console.log(this.data.posts);
      }
    });
    //接口 是否已关注
    wx.request({
      url: 'http://127.0.0.1:8000/forumApi/membership/check/',
      data:{
          postid:wx.getStorageSync('forumid'),
          userid: wx.getStorageSync('usrname')
      },
      method:'post',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          console.log(result.data)
          if(result.data.code == 200){
              this.setData({
                  interestflag:true,
                  interestornot:'已关注'
              })
          }
      }
    })
  },

  jmptocrtpost(){
    wx.navigateTo({
      url: '/pages/crtpost/crtpost',
    })
  },

  jmptosend:function(){
    wx.navigateTo({
      url: '../../pages/sendmail/sendmail'
    })
  },

  interested:function(){
    //   var interestflag = this.data.interestflag;
    //   if(interestflag == false){
    //     var interestornot = '已关注';
    //   }
    //   else{
    //       var interestornot = '关注';
    //   }
    //   this.setData({
    //       interestornot:interestornot,
    //       interestflag: !interestflag
    //   })
      if(this.data.interestflag == true){
          console.log('执行删除');
          wx.request({
            url: 'http://127.0.0.1:8000/forumApi/membership/delete/',
            data:{
                postid:wx.getStorageSync('forumid'),
                userid: wx.getStorageSync('usrname')
            },
            method:'delete',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                this.setData({
                    interestornot:'关注',
                    interestflag: false
                })
            }
          })
      }
      else{
          console.log('创建');
        wx.request({
            url: 'http://127.0.0.1:8000/forumApi/membership/create/',
            data:{
                postid:wx.getStorageSync('forumid'),
                userid: wx.getStorageSync('usrname')
            },
            method:'post',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                this.setData({
                    interestornot:'已关注',
                    interestflag: true
                })
            }
          })
      }
  }

})