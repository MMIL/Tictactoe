function fnClSur(e,n,a,i,r,s,o){try{var t="";"clSur"==e?t="C":"SkipSur"==e&&(t="N"),BMS.Misc.fnAjax({data:{cmd:"SAVENPSDATA",data:{emailId:i,mobile:r,transId:n,response:"NA",eventType:o,reason:"",action:t,token:"",appCode:strAppCode,surveyId:1}},dataType:"JSON",type:"POST",success:function(n){"undefined"!=typeof npsMobFlag&&npsMobFlag===!0?"clSur"==e?window.location="?cmd=cancel":"SkipSur"==e&&(window.location="?cmd=skip"):BMS.Misc.modal("dRatConf",!1)},url:global.getDataUrl+"?cmd=NEWSURVEY"})}catch(d){BMS.Misc.modal("dRatConf",!1)}}function fnShowSurvey(e,n){try{BMS.Misc.fnAjax({data:{surveyId:1,emailId:e,mobile:n,cmd:"CHECKSURVEY"},dataType:"JSON",type:"POST",success:function(e){if("Y"==e.data.survey&&0==e.error.code){if("undefined"==typeof npsMobFlag||npsMobFlag!==!0){BMS.Misc.modal("dRatConf",!0),$("#ans li input[type='radio']").unbind("click"),$("#ans li input[type='radio']").click(function(){$("#ans span").removeClass("_active"),$("#ans #npsAns_"+$(this).val()+" span").addClass("_active"),$("#errSurvey").hide(),$(this).val()>=1&&$(this).val()<=6?$("#npsLowReason").show():$("#npsLowReason").hide(),$(this).val()>=7&&$(this).val()<=8?($("#npsMediumFeedback").show(),$("#txtMediumFeedback").focus()):$("#npsMediumFeedback").hide()});var n="",a="",i="";if(e.data.options[0].low.length>0)for(var r in e.data.options[0].low[0])n+="<option value='"+r+"'>"+e.data.options[0].low[0][r]+"</option>";if($("#selNpsLowReason").html(n),e.data.options[0].medium.length>0)for(var s in e.data.options[0].medium[0])a+="<option value='"+s+"'>"+e.data.options[0].medium[0][s]+"</option>";if($("#selNpsMediumReason").html(a),e.data.options[0].high.length>0)for(var o in e.data.options[0].high[0])i+="<option value='"+o+"'>"+e.data.options[0].high[0][o]+"</option>";return void $("#selNpsHighReason").html(i)}BMS.Misc.modal("dRatConf",!0),$("#ans li input[type='radio']").unbind("click"),$("#ans li input[type='radio']").click(function(){$("#errSurvey").hide(),$(this).val()>=1&&$(this).val()<=6?$("#npsLowReason").show():$("#npsLowReason").hide(),$(this).val()>=7&&$(this).val()<=8?($("#npsMediumFeedback").show(),$("#txtMediumFeedback").focus()):$("#npsMediumFeedback").hide()})}else"N"==e.data.survey&&"undefined"!=typeof npsMobFlag&&npsMobFlag===!0&&(window.location="?cmd=hide")},url:global.getDataUrl+"?cmd=NEWSURVEY",error:function(e){void 0}})}catch(a){void 0}}function fnSSur(e,n,a,i,r,s){try{$("#errSurvey").hide();var o={},t={};if(""==$("#ans input[name='rating']:checked").val()||void 0==$("#ans input[name='rating']:checked").val())return void BMS.Misc.fnSCusErrDisplay("errSurvey","Please rate to complete the survey.","e");var d=parseInt($("#ans input[name='rating']:checked").val(),10);if(d>=1&&6>=d&&1==$("#selNpsLowReason").val())return void BMS.Misc.fnSCusErrDisplay("errSurvey","Please select the areas we need to improve upon","e");if(d>=7&&8>=d&&1==$("#selNpsMediumReason").val())return void BMS.Misc.fnSCusErrDisplay("errSurvey","Please select the areas we need to improve upon","e");o.source1=$.trim($("#question").text()),t.response1=$("#ans input[name='rating']:checked").val(),$("#btnSurveyCancel").hide(),$("#btnSurveySubmit").html("Processing...").removeAttr("onclick");var l=t.response1,c="";d>=1&&6>=d?c=$("#selNpsLowReason").val():d>=7&&8>=d&&(c=$("#selNpsMediumReason").val()),BMS.Misc.fnAjax({data:{cmd:"SAVENPSDATA",data:{emailId:a,mobile:i,transId:e,response:l,eventType:s,reason:c,action:"S",token:"",appCode:strAppCode,surveyId:1}},dataType:"JSON",type:"POST",success:function(e){var n="";"undefined"!=typeof npsMobFlag&&npsMobFlag===!0?window.location="?cmd=rate&rating="+l:($("#question").hide(),n='<div><span style="font-size:24px;line-height:30px;">Thank you.</span><div class="sbmt_nxt"><a href="javascript:;" style="font-size:15px;padding:5px;" class="button yellow" onClick=\'BMS.Misc.modal("dRatConf", false);\'>Close</a></div></div>'),$("#head1").html(""),$("#sucSurvey").html(n)},url:global.getDataUrl+"?cmd=NEWSURVEY"})}catch(f){BMS.Misc.modal("dRatConf",!1)}}var conf={};conf.strQty=strQuantity,conf.fnPgLd=function(){try{conf.ActionBusy=$("[data-id=actions-div]"),$("[data-role=mobile]").keydown(function(e){for(var n=e.which?e.which:e.keyCode,a=[8,13,46,37,38,39,40,9],i=48;57>=i;i++)a.push(i);for(var i=96;105>=i;i++)a.push(i);return $.inArray(n,a)>-1?!0:e.ctrlKey?!0:!1}),"undefined"!=typeof strVenueCode&&"undefined"!=typeof lngSessionId&&strVenueCode&&lngSessionId&&(BMS.Storage.set({name:"userCine",key:"lastVC",value:strVenueCode,storage:"C"}),BMS.Storage.set({name:"userCine",key:"lastSID",value:lngSessionId,storage:"C"}))}catch(e){BMS.Misc.fnErr({fnName:"conf.fnPgLd",err:e})}},conf.fnInviteFriend=function(){try{if(!(conf.strQty>1))return void BMS.Misc.fnSCusErrDisplay("errDiv1","You've exceeded max no. of invitees","e");var e=$("#dInvite-friends");$("#dIFriends-wrap").append(e.clone(!0)),--conf.strQty}catch(n){BMS.Misc.fnErr({fnName:"conf.fnInviteFriend",err:n})}},conf.fnInitInviteModal=function(){try{for(var e=$("#dIFriends-wrap #dInvite-friends"),n=1;n<e.length;n++)$(e[n]).remove();conf.strQty=strQuantity,BMS.Misc.modal("invite",!0)}catch(a){BMS.Misc.fnErr({fnName:"conf.fnInitInviteModal",err:a})}},conf.sendInviteMail=function(){try{var e=$("#customerName").val(),n=[];n=$("#dIFriends-wrap #dInvite-friends");var a="";a="|";for(var i=0,r=0;r<n.length;r++){if($frdName=$(n[r]).find("input").eq(1),$frdNum=$(n[r]).find("input").eq(2),$frdMail=$(n[r]).find("input").eq(3),void 0,""===e||e==$frdName.attr("placeholder"))return void BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter your name!","e");if(!BMS.Validate.chkName(e))return void BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter a valid name!","e");if(a+="NAME="+e+"|",""===$frdName.val()||$frdName.val()==$frdName.attr("placeholder"))return void BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter your friends name!","e");if(!BMS.Validate.chkName($frdName.val()))return void BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter a valid name!","e");if(a+="NAME"+(i+1)+"="+$frdName.val(),""===$frdNum.val()||$frdNum.val()==$frdNum.attr("placeholder"))return void BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter your friends mobile!","e");if(!BMS.Validate.mob($frdNum.val()))return void BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter a valid mobile!","e");if(a+="|MOBILE"+(i+1)+"="+$frdNum.val()+"|",""!==$frdMail.val()){if(!BMS.Validate.email($frdMail.val()))return BMS.Misc.fnSCusErrDisplay("errDiv1","Please enter your friends valid email address!","e"),void $frdMail.focus();a+="MAIL"+(i+1)+"="+$frdMail.val()+"|"}i++}BMS.Misc.fnDoSecureTrans({transId:lngTransId,cmd:"INVITEGUESTS",venCode:"",p1:strBookingId,p2:a,fnCC:function(){$(".popover-event-name").html("Success"),$("#popover-rating-msg").html("You Friend(s) have been invited"),BMS.Misc.modal("review-rating-response",!0)},fnEC:function(e){BMS.Misc.fnErr({fnName:"conf.sendInviteMail",err:s})}})}catch(s){BMS.Misc.fnErr({fnName:conf.sendInviteMail,err:s})}},conf.fnResendConf=function(){try{BMS.Misc.fnBusy(!0,conf.ActionBusy),BMS.Misc.fnDoSecureTrans({cmd:"RESENDCONFIRMATIONMAIL",transId:lngTransId,p2:strMemberEmail,p3:strMemberMobile,blnSupp:!1,fnCC:function(){BMS.Misc.fnBusy(!1,conf.ActionBusy),$(".popover-event-name").html("Success"),$("#popover-rating-msg").html("Confirmation sent successfully"),BMS.Misc.modal("review-rating-response",!0)},fnEC:function(){BMS.Misc.fnBusy(!1,conf.ActionBusy)}})}catch(e){BMS.Misc.fnErr({fnName:"conf.fnResendConf",err:e})}},conf.showOrderSummary=function(){var e=$(".total .__text"),n=$(".__summary");"block"==n.css("display")?(n.slideUp(),e.find(".icon-minus").css("display","none"),e.find(".icon-plus").css("display","inline-block")):(n.slideDown(),e.find(".icon-minus").css("display","inline-block"),e.find(".icon-plus").css("display","none"))},$(document).ready(function(){window.navigator.userAgent.indexOf("MSIE ")>0&&$("input[placeholder], textarea[placeholder]").each(function(e,n){$(n).setAltText({text:$(n).attr("placeholder")})}),conf.fnPgLd()}),conf.fnPayUnpaidTrans=function(){try{BMS.Storage.set({name:"lngTransId",value:lngSessionId,storage:"C"}),BMS.Storage.set({name:"BOOKINGID",value:strBookingId,storage:"C"}),BMS.Misc.fnGoTo("https://"+location.host+"/payment/?cid="+strVenueCode+"&sid="+lngSessionId+"ety="+strEventType)}catch(e){BMS.Misc.fnErr({fnName:"conf.fnPayUnpaidTrans",fnParams:arguments,err:e})}},conf.fnCancelUnpaidTrans=function(){try{confirm("Are you sure you want to cancel this unpaid transaction?")&&BMS.Misc.fnDoSecureTrans({AppC:pay.AppC,transId:lngTransId,cmd:"CANCELUNPAIDBOOK",venCode:strVenueCode,p1:lngBookingId,p3:BMS.Storage.get({name:"ld",key:"MEMBERID",storage:"C"}),p4:strBookingId,p5:strVenueCode,p6:"",fnCC:function(e){void 0},fnEC:function(n){BMS.Misc.fnErr({fnName:"conf.fnCancelUnpaidTrans",err:e})}})}catch(e){BMS.Misc.fnErr({fnName:"conf.fnCancelUnpaidTrans",err:e})}};