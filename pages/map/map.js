Page({

    handleLocation:function(){
        wx.getLocation({
            type:"wgs84",
            success:function(res){
                var latitude = res.latitude;
                var longitude = res.longitude;
                var accuracy = res.accuracy;
                wx.openLocation({
                    latitude:latitude,
                    longitude:longitude,
                    scale:28
                })
            }
        })
    }

})