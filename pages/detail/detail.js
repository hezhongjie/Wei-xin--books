Page({
    data:{
        text:"",
        isHidden:false,
        isLoadingAginHidden:true
    }
    ,

    onShow:function(){
        console.log(1-1);
        var _this=this;
        if(this.data.text==""){
           setTimeout(function() {
                wx.request({
                url:"http://localhost/text.json",
                success:function(result){
                    console.log(result);
                    result=result.data.text[0];      
                    _this.setData({
                        text:result+_this.data.text,
                        isHidden:true
                    })
                }
              })
            }, 2000);           
        }
    }
    ,
    handleLoadingAgin:function(){
        this.setData({
            isLoadingAginHidden:false
        });
        var _this=this;
        setTimeout(function() {
            console.log(11);
                wx.request({
                url:"http://localhost/text.json",
                success:function(result){
                    console.log(result);
                    result=result.data.text[0];      
                    _this.setData({
                        text:result+_this.data.text,
                        isLoadingAginHidden:true
                    })
                }
              })
        }, 2000);
       
    }
})