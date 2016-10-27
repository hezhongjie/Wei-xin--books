//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    currentIndex:0,
    isHidden:false,
    userInfo: {},
    books:[],
    isIndex1HiddenLoading:true,
    isIndex2HiddenLoading:false,
    isIndex3HiddenLoading:false
  },

  onLoad: function () {
    var _this=this;
    setTimeout(function(){
        console.log(1);
         wx.request({
          url:"http://localhost/books.json",
          success:function(result){
              console.log(result);
              result=result.data.books;
              // console.log("result="+result);
              _this.setData({
                books:result,
                isHidden:true
              });
          }
         })
    },2000);
  
  },

//在次加载

  handleLoadingAgin:function(){
    this.setData({
      isIndex1HiddenLoading:false
    })
  var _this=this;
    setTimeout(function(){
        console.log(1);
         wx.request({
          url:"http://localhost/books.json",
          success:function(result){
              var res=_this.data.books;
              result=result.data.books;
              result=result.concat(res);
              // console.log("result="+result);
              _this.setData({
                books:result,
                isIndex1HiddenLoading:true
              });
          }
         })
    },2000);
  }
,

// tab点击切换
handleNav:function(ev){
  // console.log("123");
  this.setData({
    currentIndex:ev.target.dataset.item
  })
},
handleSwiperChange:function(ev){
  this.setData({
     currentIndex:ev.detail.current
   })
},
// 试读
  handleRead:function(ev){
    wx.navigateTo({
      url:"../detail/detail"
    })
  }

})
