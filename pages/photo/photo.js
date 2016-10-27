Page({

    data:{
        imgs:{},
        record:"点击录音"
    }
    ,

    handleImg:function(){
        var _this=this;
        wx.chooseImage({
            count:10,
            success:function(res){
                res=res.tempFilePaths;
                console.log(res);
               _this.setData({
                   imgs:res
               })
            }
        })
    }
    ,
    handleRecord:function(){
        var _this=this;
        var tempFilePath='';
        if(_this.data.record=="点击录音"){
             _this.setData({
                record:"正在录音"
             });
            wx.startRecord({
                success:function(res){
                    tempFilePath = res.tempFilePath
                    wx.playVoice({
                        filePath: tempFilePath,
                        complete: function(){
                             _this.setData({
                            record:"开始录音"
                            });
                        }
                     })
             
                }
            })
        }
    }
    ,
    handleCompass:function(){
        wx.onCompassChange(function(res){
            console.log(res);
        })
    },
    handlesystem:function(){
        wx.getSystemInfo({
            success:function(res){
                console.log(res.model)
                console.log(res.pixelRatio)
                console.log(res.windowWidth)
                console.log(res.windowHeight)
                console.log(res.language)
                console.log(res.version)
            }
        })
    }

})