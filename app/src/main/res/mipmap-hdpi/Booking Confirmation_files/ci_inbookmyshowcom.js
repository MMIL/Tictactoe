var ci_config={
  "loggingUrl":"//log.expertrec.com/v2/collect/",
  "errorUrl":"//err.expertrec.com/v2/collect/",
  "merchant_id":"32e00fdd89d8192beab563e457531971",
  "widget":true,
  "carousel":true,
  "page_type":{"/\\/movies\\/.+\\d{7,}/":{"rec_type":["2"]}},
  "vav":{"position":".//*[@class='movie-synopsis-content-wrapper ']/div[2]","title":"People who Viewed this also Viewed"},
  "style":'.expertrec .slick-slide {height:auto !important; max-width:260px;padding: 0 5px;}.expertrec .slick-slide img{display:block;width: 100%;height:200px;} .expert-content{width:100%;margin: 0 10px;}.expertrec{background: #f4f4f4; padding-right: 40px; zoom: 1;} .expertrec .lined-heading{margin: 5px 2px 20px;font-size: 21px; color:#333;font-weight: bold; font-family: sans-serif;}.expertrec .slick-next,.expertrec .slick-prev {opacity: 1; width:40px; height: 40px;}.expertrec .slick-next{right: -30px;}.expertrec .slick-prev{left: -30px;}.expertrec .slick-prev:before { content: "‹"; color:#999;font-size: 60px;line-height:0;} .expertrec .slick-next:before { content: "›"; color:#999;line-height:0;font-size: 60px;}.expertrec .title{overflow: hidden;white-space: nowrap; color: rgb(89, 85, 81); text-overflow: ellipsis; font-size: 16px; font-weight: 400; color: #333; margin: 0; min-height: 50px; padding: 10px 15px 6px; background-color: #fff; min-height: 50px; max-height: 50px; } .expertrec .language{color: #000; height: 30px; background-color: #fff; padding:0 15px 10px; cursor: default; display: inline-block; font-size: 12px; } .expertrec .release-date{font-size: 13px; color: #fff; background-color: #fff; padding: 10px 15px; height: 40px; max-height: 40px; overflow-y: hidden; background-color: #c02c39; cursor: default;}'
}
var ci_json={"'.*/movies/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}}],"'.*/events/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}},{"onclick_//*[@id='buytickets']/div[1]/div[offset]/div[1]/ul[1]/li[offset]/div[2]/div[offset]/div[1]/span[2]":{"event":"onclick","eventpath":"//*[@id='buytickets']/div[1]/div[offset]/div[1]/ul[1]/li[offset]/div[2]/div[offset]/div[1]/span[2]","serverEvents":[{"event":"2","param":{"item":"current_url","element_len":"//*[@id='buytickets']/div[1]"}}]}}],"'.*/plays/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}},{"onclick_//*[@id='buytickets']/div[1]/div[offset]/div[1]/ul[1]/li[offset]/div[2]/div[offset]/div[1]/span[2]":{"event":"onclick","eventpath":"//*[@id='buytickets']/div[1]/div[offset]/div[1]/ul[1]/li[offset]/div[2]/div[offset]/div[1]/span[2]","serverEvents":[{"event":"2","param":{"item":"current_url","element_len":"//*[@id='buytickets']/div[1]"}}]}}],"'.*/buytickets/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}},{"onclick_//*[@id='prePay']":{"event":"onclick","eventpath":"//*[@id='prePay']","serverEvents":[{"event":"2","param":{"item":"current_url","show_time":"//*[@id='strDate']","language":"//*[@id='strLan']","show_type":"//*[@id='strExp']","show_location":"//*[@id='strVenName']"}}]}}],"/.*\\/events\\/?$/ig":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"100","param":{"item":"current_url"}}]}}],"/.*\\/plays\\/?$/ig":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"100","param":{"item":"current_url"}}]}}],"'.*/sports/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}},{"onclick_//*[@id='buytickets']/div[1]/div[offset]/div[1]/ul[1]/li[offset]/div[2]/div[offset]/div[1]/span[2]":{"event":"onclick","eventpath":"//*[@id='buytickets']/div[1]/div[offset]/div[1]/ul[1]/li[offset]/div[2]/div[offset]/div[1]/span[2]","serverEvents":[{"event":"2","param":{"item":"current_url","element_len":"//*[@id='buytickets']/div[1]"}}]}}],"/.*\\/sport\\/?$/ig":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"100","param":{"item":"current_url"}}]}}],"'.*/giftcards/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}},{"onclick_//*[@id='tMakePayment']":{"event":"onclick","eventpath":"//*[@id='tMakePayment']","serverEvents":[{"event":"2","param":{"item":"current_url"}}]}}],"'.*/offers/.+'":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"1","param":{"item":"current_url"}}]}}],"ci_unknown_pattern":[{"onload_window.onload":{"event":"onload","eventpath":"window.onload","serverEvents":[{"event":"100","param":{"item":"current_url"}}]}}]},
expertrec_widget=window.location.href.split("?")[1];
var expertrec_getItemHTML=function (item, type,ci){
    if(item.url && item.image_url && item.title && (item.releasedate || item.duration ) && item.language){
    	var checkExpertrec=expertrec_widget && expertrec_widget.match("expertrec=true") ? "&expertrec=true" :"",
        html=ci('<div>').css("width","100%").css("background", "#ffffff")
            .append(ci('<a>').attr("href",decodeURIComponent(item.url)+"?cifr="+type+checkExpertrec).css("text-decoration","none")
                .append(ci('<div>').css("border-bottom","2px solid #49ba8e").append(ci('<img>')
                                        .attr("src",decodeURIComponent(item.image_url))
                                        .attr("data-src",decodeURIComponent(item.image_url))
                                        .attr("border","0")
                                        .attr("alt",item.title)
                                        .attr("onerror","this.src='https://xorkut.s3.amazonaws.com/magicrec/images/no_image.jpg'")))
                .append(ci('<div>').append(ci('<div>').addClass("title").html(item.title))
                                   .append(ci('<div>').addClass("language").html(item.language))
                                   .append(ci("<div>").addClass("release-date").html(item.releasedate || item.duration))
                                   .append(ci("<div>").addClass("clear"))
                      ));
        
        return html;
    }else{
      return "";
    }                   
}
try{
    if(expertrec_widget && expertrec_widget.match("expertrec=true")){
    	(function(){
    		var widget = document.createElement("script");
    		widget.async=true;
    		widget.type = "text/javascript";
    		widget.src="//expertrec.com/v2/widget/widget.js"
    		document.getElementsByTagName('head')[0].appendChild(widget);
    	})();
    }
}catch(e){}


