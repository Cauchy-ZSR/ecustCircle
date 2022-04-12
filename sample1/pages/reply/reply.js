// pages/reply/reply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replies:"",
    replyflag:true,
    inputflag:false,
    chosecontent:'',
    chosename:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('postid', options['id']);
    var postid = wx.getStorageSync('postid');
    wx.request({
      url: 'http://127.0.0.1:8000/forumApi/topic/'+postid+'/',
      data: '',
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          console.log(result.data);
          this.setData({
              chosecontent:result.data.content,
              chosename:result.data.creater.nickname
          })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8000/forumApi/commentlist/'+postid+'/',
      data: '',
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          console.log(result.data);
          this.setData({
              replies: result.data
          })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8000/forumApi/comment/is_read/update/'+wx.getStorageSync('postid'),
      method:'get'
    })
  },
  crtreply:function(e){
      this.setData({
          replyflag : false,
          inputflag : true
      })
  },

  replyto:function(e){
    var inputvalue = e.detail.value.replycontent;
      wx.request({
        url: 'http://127.0.0.1:8000/forumApi/comment/create/',
        data: {
            puber:wx.getStorageSync('usrdata').userNo,
            topicComment:wx.getStorageSync('postid'),
            content:inputvalue
          },
            header: {'content-type':'application/json'},
            method: 'post',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                console.log('成功修改');
                console.log(result.data);
                this.setData({
                    replies: result.data
                })
            },
            fail: ()=>{},
            complete: ()=>{}
      });
      this.setData({
          inputflag:false,
          replyflag:true
      })
  }
})

