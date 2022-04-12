// index.js
// 获取应用实例
const app = getApp()
var choseid;
Page({
  data: {
    leftmenulist:[],
    choseid:1,
    rightcontent:[]
  },

  onShow:function(){
    console.log('刷新');
    if(wx.getStorageSync('forums')){
        console.log('存');
        let leftmenulist=wx.getStorageSync('forums');
        let rightcontent = leftmenulist[1]['children'];
        console.log()
        this.setData({
            leftmenulist,
            rightcontent
        })
    }
    wx.request({
        url: 'http://127.0.0.1:8000/forumApi/forum/',
        data: '',
        method: 'get',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            // console.log('request');
            
            let leftmenulist=result.data.data;
            let rightcontent = leftmenulist[1]['children'];
            // console.log(rightcontent);
            this.setData({
                leftmenulist,
                rightcontent
              })
            console.log('页面');
            console.log(rightcontent);
        }
      })
  },


  selectclass(e){
    const  index   = e.currentTarget.dataset.index;
    let rightcontent = this.data.leftmenulist[index].children;
    const choseid = index;
    wx.setStorageSync('choseid', choseid);
    this.setData({
      rightcontent,
      choseid
    })
  },

  jmptocrtforum(){  
    wx.navigateTo({
      url: '/pages/crtforum/crtforum',
    })
  },


})


