if(typeof(TopUp)=="undefined"){var scriptElement=(function deriveScriptElement(){var c="tu_dummy_script";document.write('<script id="'+c+'"><\/script>');var b=document.getElementById(c);var a=b.previousSibling;b.parentNode.removeChild(b);return a}());var scriptHost=(function deriveScriptHost(){var a=scriptElement.getAttribute("src");return a.match(/^\w+\:\/\//)?a.match(/^\w+\:\/\/[^\/]*\//)[0]:""}());TopUp=(function(){var m=false,i=null,d=[],y=false,v=null,r=null,D=null,R=null;var l={layout:"dashboard",effect:"transform",resizable:1},Q={};var j=function(){jQuery.extend({keys:function(W){var V=[];for(var U in W){if(W.hasOwnProperty(U)){V.push(U)}}return V},ie:jQuery.browser.msie,ie6:jQuery.browser.msie&&parseInt(jQuery.browser.version,10)==6,ie7:jQuery.browser.msie&&parseInt(jQuery.browser.version,10)>=7,ff2:jQuery.browser.mozilla&&parseFloat(jQuery.browser.version)<1.9});jQuery.fn.extend({id:function(){if(!this.is("[id]")){var V="";var U=0;do{V="element_"+U++}while(jQuery("#"+V).length);jQuery(this).attr("id",V)}return jQuery(this).attr("id")},bubbleDetect:function(U,X){var V=null;var W=this;jQuery.each(U.split(X||","),function(Z,aa){var Y=jQuery.trim(aa);if(jQuery(Y).index(W)!=-1){V={element:jQuery(W),selector:Y}}});return V||(W.parent()[0]?jQuery(W.parent()[0]).bubbleDetect(U,X):null)},center:function(){var U={top:parseInt((jQuery(window).height()-this.outerHeight())/2,10)+jQuery(window).scrollTop(),left:parseInt((jQuery(window).width()-this.outerWidth())/2,10)+jQuery(window).scrollLeft(),position:"absolute"};this.css(U);return this},lockDimensions:function(){this.css({width:this.outerWidth(),height:this.outerHeight()});return this},unlockDimensions:function(){this.css({width:"auto",height:"auto"});return this},centerWrap:function(V){var X={width:this.outerWidth(),height:this.outerHeight()},Z={width:0,height:0},W=0;W=V.outerWidth()-X.width;if(Z.width<W){Z.width=W}W=V.outerHeight()-X.height;if(Z.height<W){Z.height=W}var Y=this.offset();var U={top:Y.top-(Z.height===0?0:parseInt(Z.height/2,10)),left:Y.left-(Z.width===0?0:parseInt(Z.width/2,10)),width:this.width()+Z.width,height:this.height()+Z.height};if(v.x){U.left=v.x-parseInt((U.width-V.outerWidth())/2,10)}if(v.y){U.top=v.y-parseInt((U.height-V.outerHeight())/2,10)}jQuery("#tu_center_wrapper").css(U);jQuery("#tu_centered_content").append(this);this.css({top:"auto",left:"auto",width:"auto",height:"auto",display:"inline-block",position:"relative"});if(jQuery.ff2){this.css({display:"table"})}if(jQuery.ie){this.css({display:"inline"})}jQuery("#tu_center_wrapper").show();return this},removeCenterWrap:function(){var U=jQuery("#tu_center_wrapper").offset();var V={width:jQuery("#tu_center_wrapper").outerWidth()-this.outerWidth(),height:jQuery("#tu_center_wrapper").outerHeight()-this.outerHeight()};this.css({top:U.top+parseInt(V.height/2,10),left:U.left+parseInt(V.width/2,10),position:"absolute"}).appendTo("body");jQuery("#tu_center_wrapper").hide();return this},draggable:function(V){var U=this;this.mousedown(function(W){if(V&&V.only&&!jQuery(W.target).is(V.only)){return}W.preventDefault();var Y=U.offset();var X={top:W.pageY-Y.top,left:W.pageX-Y.left};jQuery("body").addClass("te_dragging");jQuery("*").bind("mousemove.draggable",function(Z){U.css({top:Z.pageY-X.top,left:Z.pageX-X.left})})});jQuery("#top_up").mouseup(function(W){jQuery("body").removeClass("te_dragging");jQuery("*").unbind("mousemove.draggable")})}})};var x=function(){var V=TopUp.host+TopUp.images_path;var X='<style type="text/css" media="screen">.te_overflow{overflow:hidden !important}.te_dragging{cursor:move !important}#tu_overlay,.te_top_up{top:0;left:0}#tu_overlay{width:100%;height:100%;position:fixed;z-index:999}#temp_up{top:-9999px;z-index:-1}.te_transparent{opacity:0}.te_shaded{opacity:.65;background:black}.te_scrollable{overflow:auto}.te_top_up{position:absolute;z-index:1000}.te_top_up a{border:0}.te_top_up a:hover{border:0}.te_top_up .ui-resizable-se{position:absolute !important;background-color:transparent !important;border:0 !important}.te_wrapper{position:relative}.te_title{width:100%;color:white;font-family:"Lucida Grande", "Arial";font-size:11px;position:absolute;text-align:center;z-index:1001}.te_frame,#tu_center_wrapper{border-collapse:collapse}.te_frame tr,.te_frame td{margin:0;padding:0}.te_frame .te_left,.te_frame .te_middle,.te_frame .te_right{padding:0}.te_controls{position:absolute;z-index:1001}.te_close_link,.te_previous_link,.te_next_link{cursor:pointer}.te_close_link{position:absolute;z-index:1002}.te_previous_link,.te_next_link{display:block;float:left}#tu_center_wrapper{position:absolute;z-index:1000}#tu_loader{width:100%;height:100%;position:absolute;background:url('+V+"loader.gif) no-repeat 50% 50%;z-index:1003} #top_up .te_dashboard .ui-resizable-se{width:10px !important;height:10px !important;bottom:12px !important;right:10px !important;background-image:url("+V+"dashboard/sprite.png) !important;background-position:0 0 !important}.te_dashboard .te_title{top:-9px;font-weight:bold}.te_dashboard .te_corner,.te_dashboard .te_rib{background-image:url("+V+"dashboard/sprite.png)}.te_dashboard .te_top,.te_dashboard .te_bottom{height:20px}.te_dashboard .te_left_filler{width:20px}.te_dashboard .te_right_filler{width:19px}.te_dashboard .te_middle .te_middle{background:url("+V+"dashboard/middle.png)}.te_dashboard .te_top .te_left{background-position:-17px -29px}.te_dashboard .te_top .te_middle{background-position:0 -71px}.te_dashboard .te_top .te_right{background-position:-33px -29px}.te_dashboard .te_middle .te_left{background-position:-17px -232px}.te_dashboard .te_middle .te_right{background-position:-33px -232px}.te_dashboard .te_bottom .te_left{background-position:-17px -47px}.te_dashboard .te_bottom .te_middle{background-position:-17px -89px}.te_dashboard .te_bottom .te_right{background-position:-33px -47px}.te_dashboard .te_content{margin:-11px -12px -11px -13px}.te_dashboard .te_controls{left:50%;width:63px;height:29px;margin-left:-33px;padding-left:5px;bottom:35px;background-image:url("+V+"dashboard/sprite.png);background-position:0 -178px}.te_dashboard .te_previous_link,.te_dashboard .te_next_link{width:31px;height:29px;background-image:url("+V+"dashboard/sprite.png)}.te_dashboard .te_previous_link{background-position:66px -113px}.te_dashboard .te_next_link{background-position:30px -113px}.te_dashboard .te_previous_link:hover{background-position:66px -142px}.te_dashboard .te_next_link:hover{background-position:30px -142px}.te_dashboard .te_close_link{width:28px;height:26px;top:-1px;right:-6px;background-image:url("+V+"dashboard/sprite.png);background-position:-20px 0} #top_up .te_quicklook .ui-resizable-se{width:10px !important;height:10px !important;bottom:12px !important;right:9px !important;background-image:url("+V+"quicklook/sprite.png) !important;background-position:-75px -181px !important}.te_quicklook .te_title{top:6px}.te_quicklook .te_corner,.te_quicklook .te_rib{background-image:url("+V+"quicklook/sprite.png)}.te_quicklook .te_top{height:24px}.te_quicklook .te_bottom{height:56px}.te_quicklook .te_left_filler,.te_quicklook .te_right_filler{width:12px}.te_quicklook .te_middle .te_middle{background:url("+V+"quicklook/middle.png)}.te_quicklook .te_top .te_left{background-position:0 0}.te_quicklook .te_top .te_middle{background-position:0 -30px}.te_quicklook .te_top .te_right{background-position:12px 0}.te_quicklook .te_middle .te_left{background-position:0 -181px}.te_quicklook .te_middle .te_right{background-position:12px -181px}.te_quicklook .te_bottom .te_left{background-position:0 -122px}.te_quicklook .te_bottom .te_middle{background-position:0 -61px}.te_quicklook .te_bottom .te_right{background-position:12px -122px}.te_quicklook .te_content{margin:0 -7px}.te_quicklook .te_controls{left:50%;width:66px;margin-left:-33px;bottom:18px}.te_quicklook .te_previous_link,.te_quicklook .te_next_link{width:31px;height:29px;margin:0 1px;background-image:url("+V+"quicklook/sprite.png)}.te_quicklook .te_previous_link{background-position:89px -195px}.te_quicklook .te_next_link{background-position:52px -195px}.te_quicklook .te_previous_link:hover{background-position:89px -226px}.te_quicklook .te_next_link:hover{background-position:52px -226px}.te_quicklook .te_close_link{width:13px;height:13px;top:7px;left:9px;background-image:url("+V+"quicklook/sprite.png);background-position:-24px -181px}</style>";var Z='<style type="text/css" media="screen">.te_dashboard .te_content{margin-bottom:-14px}</style>';var U='<style type="text/css" media="screen">.te_dashboard .te_content{margin-bottom:-13px}.te_dashboard .te_controls{width:65px;padding-left:3px}.te_dashboard .te_top .te_left,.te_dashboard .te_top .te_middle,.te_dashboard .te_top .te_right{background-image:none}.te_dashboard .te_middle .te_left,.te_dashboard .te_middle .te_right{background-image:none}.te_dashboard .te_bottom .te_left,.te_dashboard .te_bottom .te_middle,.te_dashboard .te_bottom .te_right{background-image:none}.te_dashboard .te_controls,.te_dashboard .te_previous_link,.te_dashboard .te_next_link,.te_dashboard .te_close_link{background-image:none}.te_dashboard .te_top .te_left{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/top_left.png" , sizingMethod="crop" )}.te_dashboard .te_top .te_middle{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/top_middle.png" , sizingMethod="scale")}.te_dashboard .te_top .te_right{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/top_right.png" , sizingMethod="crop" )}.te_dashboard .te_middle .te_left{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/middle_left.png" , sizingMethod="scale")}.te_dashboard .te_middle .te_middle{filter:alpha(opacity = 75);background:black}.te_dashboard .te_middle .te_right{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/middle_right.png" , sizingMethod="scale")}.te_dashboard .te_bottom .te_left{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/bottom_left.png" , sizingMethod="crop" )}.te_dashboard .te_bottom .te_middle{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/bottom_middle.png", sizingMethod="scale")}.te_dashboard .te_bottom .te_right{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/bottom_right.png" , sizingMethod="crop" )}.te_dashboard .te_controls{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/controls.png" , sizingMethod="crop" )}.te_dashboard .te_previous_link{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/previous.png" , sizingMethod="crop" )}.te_dashboard .te_next_link{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/next.png" , sizingMethod="crop" )}.te_dashboard .te_close_link{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'dashboard/close_link.png" , sizingMethod="crop" )} .te_quicklook .te_bottom{height:55px}.te_quicklook .te_controls{width:67px}.te_quicklook .te_top .te_left,.te_quicklook .te_top .te_middle,.te_quicklook .te_top .te_right{background-image:none}.te_quicklook .te_middle .te_left,.te_quicklook .te_middle .te_right{background-image:none}.te_quicklook .te_bottom .te_left,.te_quicklook .te_bottom .te_middle,.te_quicklook .te_bottom .te_right{background-image:none}.te_quicklook .te_previous_link,.te_quicklook .te_next_link,.te_quicklook .te_close_link{background-image:none}.te_quicklook .te_top .te_left{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/top_left.png" , sizingMethod="crop" )}.te_quicklook .te_top .te_middle{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/top_middle.png" , sizingMethod="scale")}.te_quicklook .te_top .te_right{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/top_right.png" , sizingMethod="crop" )}.te_quicklook .te_middle .te_left{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/middle_left.png" , sizingMethod="scale")}.te_quicklook .te_middle .te_middle{filter:alpha(opacity = 70);background:black}.te_quicklook .te_middle .te_right{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/middle_right.png" , sizingMethod="scale")}.te_quicklook .te_bottom .te_left{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/bottom_left.png" , sizingMethod="crop" )}.te_quicklook .te_bottom .te_middle{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/bottom_middle.png", sizingMethod="scale")}.te_quicklook .te_bottom .te_right{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/bottom_right.png" , sizingMethod="crop" )}.te_quicklook .te_previous_link{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/previous.png" , sizingMethod="crop" )}.te_quicklook .te_next_link{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/next.png" , sizingMethod="crop" )}.te_quicklook .te_close_link{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+V+'quicklook/close_link.png" , sizingMethod="crop" )}</style>';var Y='<style type="text/css" media="screen">#tu_overlay{top:expression((ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px");left:expression((ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px");position:absolute}.te_transparent{filter:alpha(opacity = 0)}.te_shaded{filter:alpha(opacity = 65)}.te_content{position:relative;zoom:1}</style>';var W='<div id="tu_overlay" onclick="TopUp.overlayClose()" style="display: none"></div><div id="top_up" class="te_top_up" style="display: none"><div class="te_wrapper"><div class="te_title"></div><table class="te_frame"><tr class="te_top"><td class="te_left te_corner"><div class="te_left_filler"></div></td><td class="te_middle te_rib"></td><td class="te_right te_corner"><div class="te_right_filler"></div></td></tr><tr class="te_middle"><td class="te_left te_rib"></td><td class="te_middle"><div class="te_content"><!-- Content --></div></td><td class="te_right te_rib"></td></tr><tr class="te_bottom"><td class="te_left te_corner"></td><td class="te_middle te_rib"></td><td class="te_right te_corner"></td></tr></table><div class="te_controls" style="display: none"><a class="te_previous_link" onclick="TopUp.previous()"></a><a class="te_next_link" onclick="TopUp.next()"></a></div><a class="te_close_link" onclick="TopUp.close()" style="display: none"></a></div></div><div id="temp_up" class="te_top_up te_transparent"><div class="te_wrapper"><div class="te_title"></div><table class="te_frame"><tr class="te_top"><td class="te_left te_corner"><div class="te_left_filler"></div></td><td class="te_middle te_rib"></td><td class="te_right te_corner"><div class="te_right_filler"></div></td></tr><tr class="te_middle"><td class="te_left te_rib"></td><td class="te_middle"><div class="te_content"><!-- Content --></div></td><td class="te_right te_rib"></td></tr><tr class="te_bottom"><td class="te_left te_corner"></td><td class="te_middle te_rib"></td><td class="te_right te_corner"></td></tr></table><div class="te_controls" style="display: none"><a class="te_previous_link" onclick="TopUp.previous()"></a><a class="te_next_link" onclick="TopUp.next()"></a></div><a class="te_close_link" onclick="TopUp.close()" style="display: none"></a></div></div><table id="tu_center_wrapper" style="display: none"><tr valign="middle"><td id="tu_centered_content" align="center"><!-- Top ups --></td></tr></table><div id="tu_loader" style="display: none"></div>';if(!jQuery("head").length){jQuery(document.body).before("<head></head>")}jQuery(X).prependTo("head");if(jQuery.ie7){jQuery(Z).insertAfter("head > style:first")}if(jQuery.ie6){jQuery(U).insertAfter("head > style:first")}if(jQuery.ie){jQuery(Y).insertAfter("head > style:first")}jQuery(W).appendTo("body")};var g=function(){var U=["[class*=x]"];jQuery.each(["db","ql","image","html","dom","iframe","ajax","script"],function(V,W){U.push("[class*=_"+W+"]")});i=jQuery.merge([".top_up","[toptions]","[class^=tu_]:"+U.join(",")],jQuery.keys(Q)).join();jQuery(i).bind("click",C);jQuery(document).bind("keypress",p)};var c=function(U){return jQuery.ie7?1:U};var C=function(U){TopUp.displayTopUp(jQuery(U.target));return false};var p=function(U){if(jQuery("#top_up").is(":hidden")||jQuery(U.target).is(":input")){return}switch(U.keyCode){case 27:TopUp.close();break;case 37:TopUp.previous();break;case 39:TopUp.next();break}};var s=function(V,W){var U=jQuery.extend({},{topUp:"#"+V.element.id(),preset:V.selector});jQuery.each(V.element.attr("class").split(/\s/),function(X,Y){if(Y.match(/^tu_/)){jQuery.each(Y.replace(/^tu_/,"").split("_"),function(Z,aa){switch(aa){case"db":case"ql":U.layout={db:"dashboard",ql:"quicklook"}[aa];break;case"image":case"html":case"dom":case"iframe":case"ajax":case"script":U.type=aa;break;default:if(aa.match(/\dx\d/)){U.width=aa.split("x")[0];U.height=aa.split("x")[1]}}})}});if(V.element.is("[toptions]")){jQuery.each(V.element.attr("toptions").split(","),function(Y,Z){var X=Z.split("=");U[jQuery.trim(X[0])]=jQuery.trim(X[1])})}if(U.noGroup&&parseInt(U.noGroup,10)==1){U.group=null}if(W){U=jQuery.extend(U,W)}return U};var F=function(V,X,W){var U=jQuery.extend({},l);if(X){if(Q[X.preset]){U=jQuery.extend(U,Q[X.preset])}U=jQuery.extend(U,X)}if(W){U.reference=U.reference?jQuery(U.reference):V;if(!U.type){U.type=e(V)}if(k(U)){U.resizable=0}v=jQuery.extend({},U)}return U};var e=function(U){if(U.toLowerCase().match(/\.(gif|jpg|jpeg|png)$/)){return"image"}if(U.toLowerCase().match(/\.(swf)$/)){return"flash"}if(U.toLowerCase().match(/\.(flv)$/)){return"flashvideo"}if(U.toLowerCase().match(/\.(aif|aiff|aac|au|bmp|gsm|mov|mid|midi|mpg|mpeg|m4a|m4v|mp4|psd|qt|qtif|qif|qti|snd|tif|tiff|wav|3g2|3gp|wbmp)$/)){return"quicktime"}if(U.toLowerCase().match(/\.(ra|ram|rm|rpm|rv|smi|smil)$/)){return"realplayer"}if(U.toLowerCase().match(/\.(asf|avi|wma|wmv)$/)){return"windowsmedia"}return"ajax"};var k=function(U){return jQuery.inArray((U||v).type,["flash","flashvideo","quicktime","realplayer","windowsmedia"])!=-1};var a=function(){if(v.group){if(r&&r.name==v.group){return}r={name:v.group,items:jQuery([])};jQuery.each(jQuery(i),function(V,W){if(!jQuery(W).is("[tu_group]")){jQuery(W).attr("tu_group",F(null,s(jQuery(W).bubbleDetect(i))).group)}if(jQuery(W).attr("tu_group")==r.name){r.items=r.items.add(W)}});var U=jQuery.map(r.items,function(W,V){return"#"+jQuery(W).id()});D=v.topUp?jQuery.inArray(v.topUp,U):-1}else{r=null}};var N=function(U){if(r===null){return}D=D+U;if(D<0){D=r.items.length-1}if(D>r.items.length-1){D=0}TopUp.displayTopUp(r.items[D])};var S=function(){jQuery("#top_up .te_frame").resizable("destroy");jQuery("#top_up .te_title").fadeOut(c(200));if(!(r&&r.items.length>1)){jQuery("#top_up .te_controls").fadeOut(c(200))}jQuery(".te_wrapper").attr("class","te_wrapper te_"+v.layout);jQuery(".te_frame,.te_content").unlockDimensions();if(parseInt(v.shaded,10)==1){jQuery("#tu_overlay").addClass("te_shaded")}else{jQuery("#tu_overlay").removeClass("te_shaded")}if((parseInt(v.modal,10)==1)||(parseInt(v.shaded,10)==1)||(parseInt(v.overlayClose,10)==1)){jQuery("#tu_overlay").show()}else{jQuery("#tu_overlay").hide()}};var A=function(){f();switch(v.type){case"image":v.content=new Image();jQuery(v.content).load(function(){v.content=jQuery(this);M()}).attr("src",v.reference);break;case"flash":case"flashvideo":case"quicktime":case"realplayer":case"windowsmedia":b(v.type,v.reference,v.width,v.height);break;case"iframe":v.content=jQuery('<iframe src="'+v.reference+'" frameborder="0" border="0"></iframe>');break;case"html":case"dom":v.content=jQuery(v.reference);break;case"ajax":case"script":v.content=null;jQuery.ajax({url:v.reference,type:(parseInt(v.post,10)==1)?"POST":"GET",cache:false,async:false,data:v.parameters,dataType:(v.type=="ajax")?"html":"script",success:M})}if(jQuery.inArray(v.type,["html","dom","iframe"])!=-1){M()}};var b=function(ac,U,V,af){if(!jQuery.ie){switch(v.type){case"flash":K();break;case"flashvideo":I();break;case"quicktime":q();break;case"realplayer":z();break;case"windowsmedia":u();break}return}var ag={width:V,height:af},W={src:U},ab=null,ad=null,Z=null,aa=null;switch(ac){case"flash":case"flashvideo":ab="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";Z="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0";ad="application/x-shockwave-flash";aa="http://get.adobe.com/flashplayer/";break;case"quicktime":ab="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";Z="http://www.apple.com/qtactivex/qtplugin.cab";ad="video/quicktime";aa="http://www.apple.com/quicktime/download/";W.scale="aspect";W.bgcolor="black";W.showlogo="false";W.autoplay="true";break;case"realplayer":ab="clsid:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA";ad="audio/x-pn-realaudio-plugin";aa="http://www.real.com/freeplayer/?rppr=rnwk";W.controls="imagewindow";W.console="one";W.autostart="true";W.nojava="true";break;case"windowsmedia":ab="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6";Z="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701";ad="application/x-oleobject";aa="http://www.microsoft.com/Windows/MediaPlayer/";W.filename=U;W.animationatstart="true";W.transparentatstart="true";W.autostart="true";W.showcontrols="true";W.showstatusbar="true";W.windowlessvideo="true";break}if(ac=="flashvideo"){W.flashvars="file="+U+"&autostart=true";U=TopUp.host+TopUp.players_path+"flvplayer.swf";W.src=U;W.movie=U}ag.codebase=Z;if(window.ActiveXObject){ag.classid=ab;ag.data=U}var X="";for(var ae in W){X+=" "+J("param",{name:ae,value:W[ae]})}W.width=V;W.height=af;W.mimetype=ad;W.pluginspage=aa;var Y=document.createElement("div");Y.innerHTML=J("object",ag)+X+J("embed",W)+"</embed></object>";v.content=jQuery(Y);M()};var J=function(X,U){var W="<"+X;for(var V in U){W+=" "+V+"='"+U[V]+"'"}return W+">"};var K=function(){var U=jQuery("<object></object>").attr({width:v.width,height:v.height,classid:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",codebase:"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0",style:"display: none"});U.append(jQuery("<param></param>").attr({name:"src",value:v.reference}));U.append(jQuery("<embed></embed>").attr({src:v.reference,width:v.width,height:v.height,type:"application/x-shockwave-flash",pluginspage:"http://get.adobe.com/flashplayer/"}));v.content=jQuery("<div></div>").attr({width:v.width,height:v.height});v.content.append(U);M()};var I=function(){var U=jQuery("<object></object>").attr({width:v.width,height:v.height,classid:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",codebase:"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0",style:"display: none"});U.append(jQuery("<param></param>").attr({name:"movie",value:TopUp.host+TopUp.players_path+"flvplayer.swf"}));U.append(jQuery("<param></param>").attr({name:"flashvars",value:"file="+v.reference+"&autostart=true"}));U.append(jQuery("<embed></embed>").attr({src:TopUp.host+TopUp.players_path+"flvplayer.swf",width:v.width,height:v.height,flashvars:"file="+v.reference+"&autostart=true",type:"application/x-shockwave-flash",pluginspage:"http://get.adobe.com/flashplayer/"}));v.content=jQuery("<div></div>").attr({width:v.width,height:v.height});v.content.append(U);M()};var q=function(){var U=jQuery("<object></object>").attr({width:v.width,height:v.height,classid:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",codebase:"http://www.apple.com/qtactivex/qtplugin.cab",style:"display: none"});U.append(jQuery("<param></param>").attr({name:"src",value:v.reference}));U.append(jQuery("<param></param>").attr({name:"scale",value:"aspect"}));U.append(jQuery("<param></param>").attr({name:"bgcolor",value:"black"}));U.append(jQuery("<param></param>").attr({name:"showlogo",value:"false"}));U.append(jQuery("<param></param>").attr({name:"autoplay",value:"true"}));U.append(jQuery("<embed></embed>").attr({src:v.reference,width:v.width,height:v.height,scale:"aspect",bgcolor:"black",showlogo:"false",autoplay:"true",type:"video/quicktime",pluginspage:"http://www.apple.com/quicktime/download/"}));v.content=jQuery("<div></div>").attr({width:v.width,height:v.height,style:"background: black"});v.content.append(U);M()};var z=function(){var U=jQuery("<object></object>").attr({width:v.width,height:v.height,classid:"clsid:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA",style:"display: none"});U.append(jQuery("<param></param>").attr({name:"src",value:v.reference}));U.append(jQuery("<param></param>").attr({name:"controls",value:"imagewindow"}));U.append(jQuery("<param></param>").attr({name:"console",value:"one"}));U.append(jQuery("<param></param>").attr({name:"autostart",value:"true"}));U.append(jQuery("<embed></embed>").attr({src:v.reference,width:v.width,height:v.height,controls:"imagewindow",console:"one",autostart:"true",nojava:"true",type:"audio/x-pn-realaudio-plugin",pluginspage:"http://www.real.com/freeplayer/?rppr=rnwk"}));v.content=jQuery("<div></div>").attr({width:v.width,height:v.height});v.content.append(U);M()};var u=function(){q()};var M=function(U){o();if(U){v.content=jQuery(U)}switch(v.type){case"image":case"iframe":v.resize=v.content;jQuery(".te_content").removeClass("te_scrollable");break;default:v.resize=jQuery("#temp_up .te_content");jQuery(".te_content").addClass("te_scrollable")}if(jQuery("#top_up").is(":hidden")){G()}else{w()}};var f=function(){var U=jQuery("#top_up");if(jQuery("#top_up").is(":hidden")){U=jQuery(v.topUp);if(!U.length){U=jQuery(document)}else{if(U.children().length>0){U=jQuery(U.children()[0])}}}try{var V={top:U.offset().top,left:U.offset().left,width:U.outerWidth(),height:U.outerHeight()}}catch(W){var V={top:jQuery(window).scrollTop(),left:jQuery(window).scrollLeft(),width:parseInt(jQuery(window).width()/2),height:parseInt(jQuery(window).height()/2)}}jQuery("#tu_loader").css(V).show()};var o=function(){jQuery("#tu_loader").hide()};var G=function(){h();H();T("top_up");jQuery("#top_up").center();if(v.x){jQuery("#top_up").css({left:parseInt(v.x,10)})}if(v.y){jQuery("#top_up").css({top:parseInt(v.y,10)})}switch(v.effect){case"appear":case"fade":jQuery("#top_up").fadeIn(c(300),n);break;case"switch":case"clip":jQuery("#top_up").show("clip",{direction:"vertical"},500,n);break;default:var V=jQuery(v.topUp);if(V.children().length>0){V=jQuery(V.children()[0])}var U=jQuery("#top_up").find(".te_content");var W=v.topUp?jQuery.extend({width:V.outerWidth(),height:V.outerHeight()},V.offset()):{top:parseInt(jQuery(window).height()/2)-parseInt(U.height()/2)+jQuery(window).scrollTop(),left:parseInt(jQuery(window).width()/2)-parseInt(U.width()/2)+jQuery(window).scrollLeft(),width:10,height:10};B("from",W,n)}};var w=function(V){var U=jQuery("#top_up .te_content").lockDimensions().wrapInner("<div></div>").children();U.fadeOut(c(250),function(){T("temp_up");U.remove();if(V){V.apply([],[jQuery("#top_up .te_content").id()])}else{O();h()}H();jQuery("#top_up").centerWrap(jQuery("#temp_up"));var W={width:jQuery("#temp_up .te_content").outerWidth(),height:jQuery("#temp_up .te_content").outerHeight()};jQuery("#top_up .te_content").animate(W,400,function(){T("top_up");jQuery("#top_up").removeCenterWrap();n()})})};var h=function(){v.content.appendTo("#temp_up .te_content")};var T=function(V){var U=V=="top_up"?"temp_up":"top_up";jQuery("#"+U+" .te_content").children().appendTo("#"+V+" .te_content");if(V=="top_up"){jQuery("#top_up .te_content").css({width:jQuery("#temp_up .te_content").css("width"),height:jQuery("#temp_up .te_content").css("height")})}};var O=function(){jQuery(".te_content").children().remove()};var B=function(ab,V,ae){var ad=jQuery("#top_up");var Z=ad.find(".te_content");if(ab=="from"){ad.addClass("te_transparent").show()}var aa=ad.offset();var W=Z.offset();var X={width:ad.width()-Z.width(),height:ad.height()-Z.height()};V.top-=W.top-aa.top;V.left-=W.left-aa.left;var ac={top:ad.css("top"),left:ad.css("left"),width:ad.outerWidth(),height:ad.outerHeight()};var U={to:ab=="from"?ac:V,duration:500};if(ab=="from"){U.to.width-=X.width;U.to.height-=X.height}var Y=function(){var af=ab=="to"?function(){ad.fadeOut(c(250),ae).removeClass("te_overflow")}:function(){ae.apply();ad.removeClass("te_overflow")};ad.animate({top:U.to.top,left:U.to.left},U.duration);v.content.animate({width:U.to.width,height:U.to.height},U.duration,af)};if(ab=="from"){ad.css({top:V.top,left:V.left});v.content.css({width:V.width,height:V.height});jQuery(".te_top_up,.te_content").unlockDimensions();ad.hide().addClass("te_overflow").removeClass("te_transparent").fadeIn(c(300),Y)}else{Y.apply()}};var n=function(){var V=c(500);if(parseInt(v.resizable,10)==1){var U={stop:function(){jQuery("#top_up .te_frame").css({width:"auto",height:"auto"})},handles:"se",minWidth:200,minHeight:75,alsoResize:"#"+v.resize.id(),aspectRatio:v.type=="image"};jQuery("#top_up .te_frame").resizable(U)}if(jQuery.ie6){jQuery("#top_up .te_title").css("width",jQuery("#top_up").width())}jQuery("#top_up .te_title").html(v.title||"").fadeIn(V);if(r&&r.items.length>1&&jQuery("#top_up .te_controls").is(":hidden")){if(jQuery.ie6){jQuery("#top_up .te_controls").show()}else{jQuery("#top_up .te_controls").fadeIn(V)}}if(jQuery("#top_up .te_close_link").is(":hidden")){if(jQuery.ie6){jQuery("#top_up .te_close_link").show()}else{jQuery("#top_up .te_close_link").fadeIn(V)}}P();jQuery(".te_top_up,.te_content").unlockDimensions();if(k()){v.content.find("object").show()}if(v.ondisplay){v.ondisplay.apply(this,[jQuery("#top_up .te_content"),R])}y=false};var H=function(V){var U=V?null:t;if(!V){v.resize.unlockDimensions();if(jQuery.inArray(v.type,["image","iframe"])!=-1){jQuery("#temp_up .te_content").unlockDimensions()}V={};if(v.width){V.width=parseInt(v.width,10)}if(v.height){V.height=parseInt(v.height,10)}if(jQuery.ie6){jQuery("#top_up .te_title").css("width",jQuery("#temp_up").outerWidth())}}v.resize.css(V);if(U){U.apply()}};var t=function(){if(jQuery("#temp_up").outerHeight()<=jQuery(window).height()-4){return}var U=jQuery("#temp_up").outerHeight()-jQuery("#temp_up .te_content").height(),V={height:jQuery(window).height()-4-U};if(v.type=="image"){V.width=parseInt(v.content.width()*(V.height/v.content.height()),10)}H(V)};var P=function(){var W=jQuery("#top_up").offset();var V={width:jQuery("#top_up").outerWidth(),height:jQuery("#top_up").outerHeight()};var U={};if(W.top-jQuery(window).scrollTop()<2){U.top=jQuery(window).scrollTop()+2}else{if(W.top+V.height-jQuery(window).scrollTop()>jQuery(window).height()-2){U.top=jQuery(window).scrollTop()+jQuery(window).height()-V.height-2}}if(W.left-jQuery(window).scrollLeft()<2){U.left=jQuery(window).scrollLeft()+2}else{if(W.left+V.width-jQuery(window).scrollLeft()>jQuery(window).width()-2){U.left=jQuery(window).scrollLeft()+jQuery(window).width()-V.width-24}}if(jQuery.keys(U).length>0){jQuery("#top_up").animate(U,300)}};var L=function(W){var V=c(250);var U=function(){E(W)};jQuery("#top_up .te_title").fadeOut(V);jQuery("#top_up .te_controls").fadeOut(V);if(k()){v.content.find("object").hide()}if(jQuery.ie){jQuery("#top_up .te_close_link").hide();U.apply()}else{jQuery("#top_up .te_close_link").fadeOut(V,U)}};var E=function(Y){var X=function(){if(Y){Y.apply(this,[jQuery("#top_up .te_content"),R])}if(v.onclose){v.onclose.apply(this,[jQuery("#top_up .te_content"),R])}O();T("temp_up")};switch(v.effect){case"appear":case"fade":jQuery("#top_up").fadeOut(c(300),X);break;case"switch":case"clip":jQuery("#top_up").hide("clip",{direction:"vertical"},400,X);break;default:var V=jQuery(v.topUp);if(V.children().length>0){V=jQuery(V.children()[0])}var U=jQuery("#top_up").find(".te_content");var W=v.topUp?jQuery.extend({width:V.outerWidth(),height:V.outerHeight()},V.offset()):{top:parseInt(jQuery(window).height()/2)+jQuery(window).scrollTop(),left:parseInt(jQuery(window).width()/2)+jQuery(window).scrollLeft(),width:10,height:10};B("to",W,X)}jQuery("#tu_overlay").hide()};return{host:scriptHost,images_path:"images/top_up/",players_path:"players/",data:R,init:function(){if(m){return false}try{jQuery(document).ready(function(){j();x();g();jQuery("#top_up").draggable({only:".te_title,.te_top *,.te_bottom *"});jQuery.each(d,function(V,W){W.apply()})});jQuery(window).unload(function(){jQuery("*").unbind();jQuery("#top_up .te_frame").resizable("destroy")});m=true}catch(U){}},defaultPreset:function(U){l=jQuery.extend(l,U)},addPresets:function(U){Q=jQuery.extend(Q,U)},ready:function(U){d.push(U)},rebind:function(){g()},displayTopUp:function(V,X){var W=jQuery(V).bubbleDetect(i);var U=s(W,jQuery.extend(X||{},{trigger:"#"+jQuery(V).id()}));TopUp.display(W.element.attr("href"),U)},display:function(U,V){if(y){return false}try{y=true;R={};F(U,V,true);a();S();A()}catch(W){y=false;alert("Sorry, but the following error occured:\n\n"+W)}},update:function(U){if(jQuery("#top_up").is(":hidden")){return}v.type="html";v.resize=jQuery("#temp_up .te_content");jQuery(".te_content").addClass("te_scrollable");w(U||function(){})},previous:function(){N(-1)},next:function(){N(1)},overlayClose:function(){if(parseInt(v.overlayClose,10)==1){TopUp.close()}},close:function(U){if(jQuery("#top_up").is(":visible")){L(U)}}}}());(function(){var b=[];if(typeof(jQuery)=="undefined"){b.push("all")}else{if(!jQuery.ui||!jQuery.ui.resizable){b.push("uic-resizable")}if(!jQuery.effects||!jQuery.effects.clip){b.push("fxc-clip")}}if(b.length==0){TopUp.init()}else{var a=scriptElement.getAttribute("src").replace(/(development\/)?top_up(\-min)?\.js.*$/,"jquery/"+b.join(".")+".js");document.write('<script src="'+a+'" type="text/javascript" onload="TopUp.init()" onreadystatechange="TopUp.init()"><\/script>')}}())};