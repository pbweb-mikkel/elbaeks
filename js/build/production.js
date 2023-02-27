!function(c,l,g,b){"use strict";if(c.console=c.console||{info:function(t){}},g)if(g.fn.fancybox)console.info("fancyBox already initialized");else{var t,e,n,o,a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:g.noop,beforeLoad:g.noop,afterLoad:g.noop,beforeShow:g.noop,afterShow:g.noop,beforeClose:g.noop,afterClose:g.noop,onActivate:g.noop,onDeactivate:g.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},i=g(c),s=g(l),r=0,f=c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.oRequestAnimationFrame||function(t){return c.setTimeout(t,1e3/60)},d=c.cancelAnimationFrame||c.webkitCancelAnimationFrame||c.mozCancelAnimationFrame||c.oCancelAnimationFrame||function(t){c.clearTimeout(t)},u=function(){var t,e=l.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(e.style[t]!==b)return n[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var n=g.extend(!0,{},t,e);return g.each(e,function(t,e){g.isArray(e)&&(n[t]=e)}),n},m=function(t,e,n){var o=this;o.opts=h({index:n},g.fancybox.defaults),g.isPlainObject(e)&&(o.opts=h(o.opts,e)),g.fancybox.isMobile&&(o.opts=h(o.opts,o.opts.mobile)),o.id=o.opts.id||++r,o.currIndex=parseInt(o.opts.index,10)||0,o.prevIndex=null,o.prevPos=null,o.currPos=0,o.firstRun=!0,o.group=[],o.slides={},o.addContent(t),o.group.length&&o.init()};g.extend(m.prototype,{init:function(){var e,n,o=this,a=o.group[o.currIndex].opts;a.closeExisting&&g.fancybox.close(!0),g("body").addClass("fancybox-active"),!g.fancybox.getInstance()&&!1!==a.hideScrollbar&&!g.fancybox.isMobile&&l.body.scrollHeight>c.innerHeight&&(g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(c.innerWidth-l.documentElement.clientWidth)+"px;}</style>"),g("body").addClass("compensate-for-scrollbar")),n="",g.each(a.buttons,function(t,e){n+=a.btnTpl[e]||""}),e=g(o.translate(o,a.baseTpl.replace("{{buttons}}",n).replace("{{arrows}}",a.btnTpl.arrowLeft+a.btnTpl.arrowRight))).attr("id","fancybox-container-"+o.id).addClass(a.baseClass).data("FancyBox",o).appendTo(a.parentEl),o.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){o.$refs[t]=e.find(".fancybox-"+t)}),o.trigger("onInit"),o.activate(),o.jumpTo(o.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return n[e]===b?t:n[e]})},addContent:function(t){var e,l=this,n=g.makeArray(t);g.each(n,function(t,e){var n,o,a,i,s,r={},c={};g.isPlainObject(e)?c=(r=e).opts||e:"object"===g.type(e)&&g(e).length?(c=(n=g(e)).data()||{},(c=g.extend(!0,{},c,c.options)).$orig=n,r.src=l.opts.src||c.src||n.attr("href"),r.type||r.src||(r.type="inline",r.src=e)):r={type:"html",src:e+""},r.opts=g.extend(!0,{},l.opts,c),g.isArray(c.buttons)&&(r.opts.buttons=c.buttons),g.fancybox.isMobile&&r.opts.mobile&&(r.opts=h(r.opts,r.opts.mobile)),o=r.type||r.opts.type,i=r.src||"",!o&&i&&((a=i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(o="video",r.opts.video.format||(r.opts.video.format="video/"+("ogv"===a[1]?"ogg":a[1]))):i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?o="image":i.match(/\.(pdf)((\?|#).*)?$/i)?(o="iframe",r=g.extend(!0,r,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===i.charAt(0)&&(o="inline")),o?r.type=o:l.trigger("objectNeedsType",r),r.contentType||(r.contentType=-1<g.inArray(r.type,["html","inline","ajax"])?"html":r.type),r.index=l.group.length,"auto"==r.opts.smallBtn&&(r.opts.smallBtn=-1<g.inArray(r.type,["html","inline","ajax"])),"auto"===r.opts.toolbar&&(r.opts.toolbar=!r.opts.smallBtn),r.$thumb=r.opts.$thumb||null,r.opts.$trigger&&r.index===l.opts.index&&(r.$thumb=r.opts.$trigger.find("img:first"),r.$thumb.length&&(r.opts.$orig=r.opts.$trigger)),r.$thumb&&r.$thumb.length||!r.opts.$orig||(r.$thumb=r.opts.$orig.find("img:first")),r.$thumb&&!r.$thumb.length&&(r.$thumb=null),r.thumb=r.opts.thumb||(r.$thumb?r.$thumb[0].src:null),"function"===g.type(r.opts.caption)&&(r.opts.caption=r.opts.caption.apply(e,[l,r])),"function"===g.type(l.opts.caption)&&(r.opts.caption=l.opts.caption.apply(e,[l,r])),r.opts.caption instanceof g||(r.opts.caption=r.opts.caption===b?"":r.opts.caption+""),"ajax"===r.type&&1<(s=i.split(/\s+/,2)).length&&(r.src=s.shift(),r.opts.filter=s.shift()),r.opts.modal&&(r.opts=g.extend(!0,r.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),l.group.push(r)}),Object.keys(l.slides).length&&(l.updateControls(),(e=l.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),i.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(o.requestId&&d(o.requestId),o.requestId=f(function(){o.update(t)})):(o.current&&"iframe"===o.current.type&&o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update(t)},g.fancybox.isMobile?600:250))}),s.on("keydown.fb",function(t){var e=(g.fancybox?g.fancybox.getInstance():null).current,n=t.keyCode||t.which;if(9!=n){if(!(!e.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||g(t.target).is("input,textarea,video,audio,select")))return 8===n||27===n?(t.preventDefault(),void o.close(t)):37===n||38===n?(t.preventDefault(),void o.previous()):39===n||40===n?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,n)}else e.opts.trapFocus&&o.focus(t)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=c.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){i.off("orientationchange.fb resize.fb"),s.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),this.idleInterval&&(c.clearInterval(this.idleInterval),this.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,o){var e,n,a,i,s,r,c,l,d,u=this,f=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),!(a=u.current?u.current.opts.loop:u.opts.loop)&&(t<0||f<=t))return!1;if(e=u.firstRun=!Object.keys(u.slides).length,s=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,i=u.createSlide(t),1<f&&((a||i.index<f-1)&&u.createSlide(t+1),(a||0<i.index)&&u.createSlide(t-1)),u.current=i,u.currIndex=i.index,u.currPos=i.pos,u.trigger("beforeShow",e),u.updateControls(),i.forcedDuration=b,g.isNumeric(o)?i.forcedDuration=o:o=i.opts[e?"animationDuration":"transitionDuration"],o=parseInt(o,10),n=u.isMoved(i),i.$slide.addClass("fancybox-slide--current"),e)return i.opts.animationEffect&&o&&u.$refs.container.css("transition-duration",o+"ms"),u.$refs.container.addClass("fancybox-is-open").trigger("focus"),u.loadSlide(i),void u.preload("image");r=g.fancybox.getTranslate(s.$slide),c=g.fancybox.getTranslate(u.$refs.stage),g.each(u.slides,function(t,e){g.fancybox.stop(e.$slide,!0)}),s.pos!==i.pos&&(s.isComplete=!1),s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),n?(d=r.left-(s.pos*r.width+s.pos*s.opts.gutter),g.each(u.slides,function(t,e){e.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var n=e.pos*r.width+e.pos*e.opts.gutter;g.fancybox.setTranslate(e.$slide,{top:0,left:n-c.left+d}),e.pos!==i.pos&&e.$slide.addClass("fancybox-slide--"+(e.pos>i.pos?"next":"previous")),p(e.$slide),g.fancybox.animate(e.$slide,{top:0,left:(e.pos-i.pos)*r.width+(e.pos-i.pos)*e.opts.gutter},o,function(){e.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),e.pos===u.currPos&&u.complete()})})):o&&i.opts.transitionEffect&&(l="fancybox-animated fancybox-fx-"+i.opts.transitionEffect,s.$slide.addClass("fancybox-slide--"+(s.pos>i.pos?"next":"previous")),g.fancybox.animate(s.$slide,l,o,function(){s.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),i.isLoaded?u.revealContent(i):u.loadSlide(i),u.preload("image")}},createSlide:function(t){var e,n,o=this;return n=(n=t%o.group.length)<0?o.group.length+n:n,!o.slides[t]&&o.group[n]&&(e=g('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),o.slides[t]=g.extend(!0,{},o.group[n],{pos:t,$slide:e,isLoaded:!1}),o.updateSlide(o.slides[t])),o.slides[t]},scaleToActual:function(t,e,n){var o,a,i,s,r,c=this,l=c.current,d=l.$content,u=g.fancybox.getTranslate(l.$slide).width,f=g.fancybox.getTranslate(l.$slide).height,p=l.width,h=l.height;c.isAnimating||c.isMoved()||!d||"image"!=l.type||!l.isLoaded||l.hasError||(c.isAnimating=!0,g.fancybox.stop(d),t=t===b?.5*u:t,e=e===b?.5*f:e,(o=g.fancybox.getTranslate(d)).top-=g.fancybox.getTranslate(l.$slide).top,o.left-=g.fancybox.getTranslate(l.$slide).left,s=p/o.width,r=h/o.height,a=.5*u-.5*p,i=.5*f-.5*h,u<p&&(0<(a=o.left*s-(t*s-t))&&(a=0),a<u-p&&(a=u-p)),f<h&&(0<(i=o.top*r-(e*r-e))&&(i=0),i<f-h&&(i=f-h)),c.updateCursor(p,h),g.fancybox.animate(d,{top:i,left:a,scaleX:s,scaleY:r},n||366,function(){c.isAnimating=!1}),c.SlideShow&&c.SlideShow.isActive&&c.SlideShow.stop())},scaleToFit:function(t){var e,n=this,o=n.current,a=o.$content;n.isAnimating||n.isMoved()||!a||"image"!=o.type||!o.isLoaded||o.hasError||(n.isAnimating=!0,g.fancybox.stop(a),e=n.getFitPos(o),n.updateCursor(e.width,e.height),g.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){n.isAnimating=!1}))},getFitPos:function(t){var e,n,o,a,i=t.$content,s=t.$slide,r=t.width||t.opts.width,c=t.height||t.opts.height,l={};return!!(t.isLoaded&&i&&i.length)&&(e=g.fancybox.getTranslate(this.$refs.stage).width,n=g.fancybox.getTranslate(this.$refs.stage).height,e-=parseFloat(s.css("paddingLeft"))+parseFloat(s.css("paddingRight"))+parseFloat(i.css("marginLeft"))+parseFloat(i.css("marginRight")),n-=parseFloat(s.css("paddingTop"))+parseFloat(s.css("paddingBottom"))+parseFloat(i.css("marginTop"))+parseFloat(i.css("marginBottom")),r&&c||(r=e,c=n),e-.5<(r*=o=Math.min(1,e/r,n/c))&&(r=e),n-.5<(c*=o)&&(c=n),"image"===t.type?(l.top=Math.floor(.5*(n-c))+parseFloat(s.css("paddingTop")),l.left=Math.floor(.5*(e-r))+parseFloat(s.css("paddingLeft"))):"video"===t.contentType&&(r/(a=t.opts.width&&t.opts.height?r/c:t.opts.ratio||16/9)<c?c=r/a:c*a<r&&(r=c*a)),l.width=r,l.height=c,l)},update:function(n){var o=this;g.each(o.slides,function(t,e){o.updateSlide(e,n)})},updateSlide:function(t,e){var n=this,o=t&&t.$content,a=t.width||t.opts.width,i=t.height||t.opts.height,s=t.$slide;n.adjustCaption(t),o&&(a||i||"video"===t.contentType)&&!t.hasError&&(g.fancybox.stop(o),g.fancybox.setTranslate(o,n.getFitPos(t)),t.pos===n.currPos&&(n.isAnimating=!1,n.updateCursor())),n.adjustLayout(t),s.length&&(s.trigger("refresh"),t.pos===n.currPos&&n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",s.get(0).scrollHeight>s.get(0).clientHeight)),n.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,n=e.current,o=n.$slide;!e.isClosing&&n&&(o.siblings().css({transform:"",opacity:""}),o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),g.fancybox.animate(o,{top:0,left:0,opacity:1},t===b?0:t,function(){o.css({transform:"",opacity:""}),n.isComplete||e.complete()},!1))},isMoved:function(t){var e,n,o=t||this.current;return!!o&&(n=g.fancybox.getTranslate(this.$refs.stage),e=g.fancybox.getTranslate(o.$slide),!o.$slide.hasClass("fancybox-animated")&&(.5<Math.abs(e.top-n.top)||.5<Math.abs(e.left-n.left)))},updateCursor:function(t,e){var n,o,a=this,i=a.current,s=a.$refs.container;i&&!a.isClosing&&a.Guestures&&(s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=!!(n=a.canPan(t,e))||a.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),g("[data-fancybox-zoom]").prop("disabled",!o),n?s.addClass("fancybox-can-pan"):o&&("zoom"===i.opts.clickContent||g.isFunction(i.opts.clickContent)&&"zoom"==i.opts.clickContent(i))?s.addClass("fancybox-can-zoomIn"):i.opts.touch&&(i.opts.touch.vertical||1<a.group.length)&&"video"!==i.contentType&&s.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this.current;if(e&&!this.isClosing&&"image"===e.type&&!e.hasError){if(!e.isLoaded)return!0;if((t=this.getFitPos(e))&&(e.width>t.width||e.height>t.height))return!0}return!1},isScaledDown:function(t,e){var n=!1,o=this.current,a=o.$content;return t!==b&&e!==b?n=t<o.width&&e<o.height:a&&(n=(n=g.fancybox.getTranslate(a)).width<o.width&&n.height<o.height),n},canPan:function(t,e){var n=this.current,o=null,a=!1;return"image"===n.type&&(n.isComplete||t&&e)&&!n.hasError&&(a=this.getFitPos(n),t!==b&&e!==b?o={width:t,height:e}:n.isComplete&&(o=g.fancybox.getTranslate(n.$content)),o&&a&&(a=1.5<Math.abs(o.width-a.width)||1.5<Math.abs(o.height-a.height))),a},loadSlide:function(n){var t,e,o,a=this;if(!n.isLoading&&!n.isLoaded){if(!(n.isLoading=!0)===a.trigger("beforeLoad",n))return n.isLoading=!1;switch(t=n.type,(e=n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass),t){case"image":a.setImage(n);break;case"iframe":a.setIframe(n);break;case"html":a.setContent(n,n.src||n.content);break;case"video":a.setContent(n,n.opts.video.tpl.replace(/\{\{src\}\}/gi,n.src).replace("{{format}}",n.opts.videoFormat||n.opts.video.format||"").replace("{{poster}}",n.thumb||""));break;case"inline":g(n.src).length?a.setContent(n,g(n.src)):a.setError(n);break;case"ajax":a.showLoading(n),o=g.ajax(g.extend({},n.opts.ajax.settings,{url:n.src,success:function(t,e){"success"===e&&a.setContent(n,t)},error:function(t,e){t&&"abort"!==e&&a.setError(n)}})),e.one("onReset",function(){o.abort()});break;default:a.setError(n)}return!0}},setImage:function(e){var t,n=this;setTimeout(function(){var t=e.$image;n.isClosing||!e.isLoading||t&&t.length&&t[0].complete||e.hasError||n.showLoading(e)},50),n.checkSrcset(e),e.$content=g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&e.thumb&&(e.width=e.opts.width,e.height=e.opts.height,(t=l.createElement("img")).onerror=function(){g(this).remove(),e.$ghost=null},t.onload=function(){n.afterLoad(e)},e.$ghost=g(t).addClass("fancybox-image").appendTo(e.$content).attr("src",e.thumb)),n.setBigImage(e)},checkSrcset:function(t){var e,n,o,a,i=t.opts.srcset||t.opts.image.srcset;if(i){o=c.devicePixelRatio||1,a=c.innerWidth*o,(n=i.split(",").map(function(t){var o={};return t.trim().split(/\s+/).forEach(function(t,e){var n=parseInt(t.substring(0,t.length-1),10);if(0===e)return o.url=t;n&&(o.value=n,o.postfix=t[t.length-1])}),o})).sort(function(t,e){return t.value-e.value});for(var s=0;s<n.length;s++){var r=n[s];if("w"===r.postfix&&r.value>=a||"x"===r.postfix&&r.value>=o){e=r;break}}!e&&n.length&&(e=n[n.length-1]),e&&(t.src=e.url,t.width&&t.height&&"w"==e.postfix&&(t.height=t.width/t.height*e.value,t.width=e.value),t.opts.srcset=i)}},setBigImage:function(e){var n=this,t=l.createElement("img"),o=g(t);e.$image=o.one("error",function(){n.setError(e)}).one("load",function(){var t;e.$ghost||(n.resolveImageSlideSize(e,this.naturalWidth,this.naturalHeight),n.afterLoad(e)),n.isClosing||(e.opts.srcset&&((t=e.opts.sizes)&&"auto"!==t||(t=(1<e.width/e.height&&1<i.width()/i.height()?"100":Math.round(e.width/e.height*100))+"vw"),o.attr("sizes",t).attr("srcset",e.opts.srcset)),e.$ghost&&setTimeout(function(){e.$ghost&&!n.isClosing&&e.$ghost.hide()},Math.min(300,Math.max(1e3,e.height/1600))),n.hideLoading(e))}).addClass("fancybox-image").attr("src",e.src).appendTo(e.$content),(t.complete||"complete"==t.readyState)&&o.naturalWidth&&o.naturalHeight?o.trigger("load"):t.error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),a=parseInt(t.opts.height,10);t.width=e,t.height=n,0<o&&(t.width=o,t.height=Math.floor(o*n/e)),0<a&&(t.width=Math.floor(a*e/n),t.height=a)},setIframe:function(a){var i,e=this,s=a.opts.iframe,r=a.$slide;a.$content=g('<div class="fancybox-content'+(s.preload?" fancybox-is-hidden":"")+'"></div>').css(s.css).appendTo(r),r.addClass("fancybox-slide--"+a.contentType),a.$iframe=i=g(s.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(s.attr).appendTo(a.$content),s.preload?(e.showLoading(a),i.on("load.fb error.fb",function(t){this.isReady=1,a.$slide.trigger("refresh"),e.afterLoad(a)}),r.on("refresh.fb",function(){var t,e=a.$content,n=s.css.width,o=s.css.height;if(1===i[0].isReady){try{t=i.contents().find("body")}catch(t){}t&&t.length&&t.children().length&&(r.css("overflow","visible"),e.css({width:"100%","max-width":"100%",height:"9999px"}),n===b&&(n=Math.ceil(Math.max(t[0].clientWidth,t.outerWidth(!0)))),e.css("width",n||"").css("max-width",""),o===b&&(o=Math.ceil(Math.max(t[0].clientHeight,t.outerHeight(!0)))),e.css("height",o||""),r.css("overflow","auto")),e.removeClass("fancybox-is-hidden")}})):e.afterLoad(a),i.attr("src",a.src),r.one("onReset",function(){try{g(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}g(this).off("refresh.fb").empty(),a.isLoaded=!1,a.isRevealed=!1})},setContent:function(t,e){this.isClosing||(this.hideLoading(t),t.$content&&g.fancybox.stop(t.$content),t.$slide.empty(),function(t){return t&&t.hasOwnProperty&&t instanceof g}(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=g("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===g.type(e)&&(e=g("<div>").append(g.trim(e)).contents()),t.opts.filter&&(e=g("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){g(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(g(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),g(e).appendTo(t.$slide),g(e).is("video,audio")&&(g(e).addClass("fancybox-video"),g(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||g(e).attr("width"),t.opts.height=t.opts.height||g(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){(t=t||this.current)&&!t.$spinner&&(t.$spinner=g(this.translate(this,this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){(t=t||this.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=g(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,a=o.opts.caption,i=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",i),i&&a&&a.length&&(o.pos!==n.currPos?((e=s.clone().appendTo(s.parent())).children().eq(0).empty().html(a),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,a,i=t||this.current;i.isLoaded&&!0!==i.opts.disableLayoutFix&&(i.$content.css("margin-bottom",""),i.$content.outerHeight()>i.$slide.height()+.5&&(o=i.$slide[0].style["padding-bottom"],a=i.$slide.css("padding-bottom"),0<parseFloat(a)&&(e=i.$slide[0].scrollHeight,i.$slide.css("padding-bottom",0),Math.abs(e-i.$slide[0].scrollHeight)<1&&(n=a),i.$slide.css("padding-bottom",o))),i.$content.css("margin-bottom",n))},revealContent:function(t){var e,n,o,a,i=this,s=t.$slide,r=!1,c=!1,l=i.isMoved(t),d=t.isRevealed;return t.isRevealed=!0,e=t.opts[i.firstRun?"animationEffect":"transitionEffect"],o=t.opts[i.firstRun?"animationDuration":"transitionDuration"],o=parseInt(t.forcedDuration===b?o:t.forcedDuration,10),!l&&t.pos===i.currPos&&o||(e=!1),"zoom"===e&&(t.pos===i.currPos&&o&&"image"===t.type&&!t.hasError&&(c=i.getThumbPos(t))?r=i.getFitPos(t):e="fade"),"zoom"===e?(i.isAnimating=!0,r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,"auto"==(a=t.opts.zoomOpacity)&&(a=.1<Math.abs(t.width/t.height-c.width/c.height)),a&&(c.opacity=.1,r.opacity=1),g.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),c),p(t.$content),void g.fancybox.animate(t.$content,r,o,function(){i.isAnimating=!1,i.complete()})):(i.updateSlide(t),e?(g.fancybox.stop(s),n="fancybox-slide--"+(t.pos>=i.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,s.addClass(n).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(s),"image"!==t.type&&t.$content.hide().show(0),void g.fancybox.animate(s,"fancybox-slide--current",o,function(){s.removeClass(n).css({transform:"",opacity:""}),t.pos===i.currPos&&i.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),d||!l||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===i.currPos&&i.complete())))},getThumbPos:function(t){var e,n,o,a,i,s,r=t.$thumb;return!(!r||!function(t){var e,n;return!(!t||t.ownerDocument!==l)&&(g(".fancybox-container").css("pointer-events","none"),e={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},n=l.elementFromPoint(e.x,e.y)===t,g(".fancybox-container").css("pointer-events",""),n)}(r[0]))&&(n=g.fancybox.getTranslate(r),o=parseFloat(r.css("border-top-width")||0),a=parseFloat(r.css("border-right-width")||0),i=parseFloat(r.css("border-bottom-width")||0),s=parseFloat(r.css("border-left-width")||0),e={top:n.top+o,left:n.left+s,width:n.width-a-s,height:n.height-o-i,scaleX:1,scaleY:1},0<n.width&&0<n.height&&e)},complete:function(){var t,n=this,e=n.current,o={};!n.isMoved()&&e.isLoaded&&(e.isComplete||(e.isComplete=!0,e.$slide.siblings().trigger("onReset"),n.preload("inline"),p(e.$slide),e.$slide.addClass("fancybox-slide--complete"),g.each(n.slides,function(t,e){e.pos>=n.currPos-1&&e.pos<=n.currPos+1?o[e.pos]=e:e&&(g.fancybox.stop(e.$slide),e.$slide.off().remove())}),n.slides=o),n.isAnimating=!1,n.updateCursor(),n.trigger("afterShow"),e.opts.video.autoStart&&e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),n.next()}),e.opts.autoFocus&&"html"===e.contentType&&((t=e.$content.find("input[autofocus]:enabled:visible:first")).length?t.trigger("focus"):n.focus(null,!0)),e.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],(e=o.slides[o.currPos-1])&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,e){var n,o,a=this,i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");a.isClosing||((n=(n=!t&&a.current&&a.current.isComplete?a.current.$slide.find("*:visible"+(e?":not(.fancybox-close-small)":"")):a.$refs.container.find("*:visible")).filter(i).filter(function(){return"hidden"!==g(this).css("visibility")&&!g(this).hasClass("disabled")})).length?(o=n.index(l.activeElement),t&&t.shiftKey?(o<0||0==o)&&(t.preventDefault(),n.eq(n.length-1).trigger("focus")):(o<0||o==n.length-1)&&(t&&t.preventDefault(),n.eq(0).trigger("focus"))):a.$refs.container.trigger("focus"))},activate:function(){var e=this;g(".fancybox-container").each(function(){var t=g(this).data("FancyBox");t&&t.id!==e.id&&!t.isClosing&&(t.trigger("onDeactivate"),t.removeEvents(),t.isVisible=!1)}),e.isVisible=!0,(e.current||e.isIdle)&&(e.update(),e.updateControls()),e.trigger("onActivate"),e.addEvents()},close:function(t,e){function n(){d.cleanUp(t)}var o,a,i,s,r,c,l,d=this,u=d.current;return!d.isClosing&&(!(d.isClosing=!0)===d.trigger("beforeClose",t)?(d.isClosing=!1,f(function(){d.update()}),!1):(d.removeEvents(),i=u.$content,o=u.opts.animationEffect,a=g.isNumeric(e)?e:o?u.opts.animationDuration:0,u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?g.fancybox.stop(u.$slide):o=!1,u.$slide.siblings().trigger("onReset").remove(),a&&d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",a+"ms"),d.hideLoading(u),d.hideControls(!0),d.updateCursor(),"zoom"!==o||i&&a&&"image"===u.type&&!d.isMoved()&&!u.hasError&&(l=d.getThumbPos(u))||(o="fade"),"zoom"===o?(g.fancybox.stop(i),c={top:(s=g.fancybox.getTranslate(i)).top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},"auto"==(r=u.opts.zoomOpacity)&&(r=.1<Math.abs(u.width/u.height-l.width/l.height)),r&&(l.opacity=0),g.fancybox.setTranslate(i,c),p(i),g.fancybox.animate(i,l,a,n)):o&&a?g.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,a,n):!0===t?setTimeout(n,a):n(),!0))},cleanUp:function(t){var e,n,o,a=this,i=a.current.opts.$orig;a.current.$slide.trigger("onReset"),a.$refs.container.empty().remove(),a.trigger("afterClose",t),a.current.opts.backFocus&&(i&&i.length&&i.is(":visible")||(i=a.$trigger),i&&i.length&&(n=c.scrollX,o=c.scrollY,i.trigger("focus"),g("html, body").scrollTop(o).scrollLeft(n))),a.current=null,(e=g.fancybox.getInstance())?e.activate():(g("body").removeClass("fancybox-active compensate-for-scrollbar"),g("#fancybox-style-noscroll").remove())},trigger:function(t,e){var n,o=Array.prototype.slice.call(arguments,1),a=this,i=e&&e.opts?e:a.current;if(i?o.unshift(i):i=a,o.unshift(a),g.isFunction(i.opts[t])&&(n=i.opts[t].apply(i,o)),!1===n)return n;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",o):s.trigger(t+".fb",o)},updateControls:function(){var t=this,e=t.current,n=e.index,o=t.$refs.container,a=t.$refs.caption,i=e.opts.caption;e.$slide.trigger("refresh"),i&&i.length?(t.$caption=a).children().eq(0).html(i):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),o.find("[data-fancybox-count]").html(t.group.length),o.find("[data-fancybox-index]").html(n+1),o.find("[data-fancybox-prev]").prop("disabled",!e.opts.loop&&n<=0),o.find("[data-fancybox-next]").prop("disabled",!e.opts.loop&&n>=t.group.length-1),"image"===e.type?o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",e.opts.image.src||e.src).show():e.opts.toolbar&&o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),g(l.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=["infobar","toolbar","nav"];!t&&this.current.opts.preventCaptionOverlap||e.push("caption"),this.$refs.container.removeClass(e.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&1<t.group.length)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&1<t.group.length)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),g.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),n=Array.prototype.slice.call(arguments,1);return e instanceof m&&("string"===g.type(t)?e[t].apply(e,n):"function"===g.type(t)&&t.apply(e,n),e)},open:function(t,e,n){return new m(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),s.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(t=l.createElement("div"),c.getComputedStyle&&c.getComputedStyle(t)&&c.getComputedStyle(t).getPropertyValue("transform")&&!(l.documentMode&&l.documentMode<11)),getTranslate:function(t){var e;return!(!t||!t.length)&&{top:(e=t[0].getBoundingClientRect()).top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))}},setTranslate:function(t,e){var n="",o={};if(t&&e)return e.left===b&&e.top===b||(n=(e.left===b?t.position().left:e.left)+"px, "+(e.top===b?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==b&&e.scaleY!==b?n+=" scale("+e.scaleX+", "+e.scaleY+")":e.scaleX!==b&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),e.opacity!==b&&(o.opacity=e.opacity),e.width!==b&&(o.width=e.width),e.height!==b&&(o.height=e.height),t.css(o)},animate:function(e,n,o,a,i){var s,r=this;g.isFunction(o)&&(a=o,o=null),r.stop(e),s=r.getTranslate(e),e.on(u,function(t){t&&t.originalEvent&&(!e.is(t.originalEvent.target)||"z-index"==t.originalEvent.propertyName)||(r.stop(e),g.isNumeric(o)&&e.css("transition-duration",""),g.isPlainObject(n)?n.scaleX!==b&&n.scaleY!==b&&r.setTranslate(e,{top:n.top,left:n.left,width:s.width*n.scaleX,height:s.height*n.scaleY,scaleX:1,scaleY:1}):!0!==i&&e.removeClass(n),g.isFunction(a)&&a(t))}),g.isNumeric(o)&&e.css("transition-duration",o+"ms"),g.isPlainObject(n)?(n.scaleX!==b&&n.scaleY!==b&&(delete n.width,delete n.height,e.parent().hasClass("fancybox-slide--image")&&e.parent().addClass("fancybox-is-scaling")),g.fancybox.setTranslate(e,n)):e.addClass(n),e.data("timer",setTimeout(function(){e.trigger(u)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(u),t.off(u).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},g.fn.fancybox=function(t){var e;return(e=(t=t||{}).selector||!1)?g("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},y):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},y),this},s.on("click.fb-start","[data-fancybox]",y),s.on("click.fb-start","[data-fancybox-trigger]",function(t){g('[data-fancybox="'+g(this).attr("data-fancybox-trigger")+'"]').eq(g(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:g(this)})}),e=".fancybox-button",n="fancybox-focus",o=null,s.on("mousedown mouseup focus blur",e,function(t){switch(t.type){case"mousedown":o=g(this);break;case"mouseup":o=null;break;case"focusin":g(e).removeClass(n),g(this).is(o)||g(this).is("[disabled]")||g(this).addClass(n);break;case"focusout":g(e).removeClass(n)}})}function y(t,e){var n,o,a,i=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),n=e.$target||g(t.currentTarget).trigger("blur"),(a=g.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(n)||(i=e.selector?g(e.selector):(o=n.attr("data-fancybox")||"")?(i=t.data?t.data.items:[]).length?i.filter('[data-fancybox="'+o+'"]'):g('[data-fancybox="'+o+'"]'):[n],(s=g(i).index(n))<0&&(s=0),(a=g.fancybox.open(i,e,s)).$trigger=n))}}(window,document,jQuery),function(p){"use strict";function h(n,t,e){if(n)return e=e||"","object"===p.type(e)&&(e=p.param(e,!0)),p.each(t,function(t,e){n=n.replace("$"+t,e||"")}),e.length&&(n+=(0<n.indexOf("?")?"&":"?")+e),n}var o={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&0<t[12].indexOf("layer=c")?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};p(document).on("objectNeedsType.fb",function(t,e,a){var n,i,s,r,c,l,d,u=a.src||"",f=!1;n=p.extend(!0,{},o,a.opts.media),p.each(n,function(t,e){if(s=u.match(e.matcher)){if(f=e.type,d=t,l={},e.paramPlace&&s[e.paramPlace]){"?"==(c=s[e.paramPlace])[0]&&(c=c.substring(1)),c=c.split("&");for(var n=0;n<c.length;++n){var o=c[n].split("=",2);2==o.length&&(l[o[0]]=decodeURIComponent(o[1].replace(/\+/g," ")))}}return r=p.extend(!0,{},e.params,a.opts[t],l),u="function"===p.type(e.url)?e.url.call(this,s,r,a):h(e.url,s,r),i="function"===p.type(e.thumb)?e.thumb.call(this,s,r,a):h(e.thumb,s),"youtube"===t?u=u.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===t&&(u=u.replace("&%23","#")),!1}}),f?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=i),"iframe"===f&&(a.opts=p.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),p.extend(a,{type:f,src:u,origSrc:a.src,contentSource:d,contentType:"image"===f?"image":"gmap_place"==d||"gmap_search"==d?"map":"video"})):u&&(a.type=a.opts.defaultType)});var a={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;this[t].loaded?setTimeout(function(){n.done(t)}):this[t].loading||(this[t].loading=!0,(e=document.createElement("script")).type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(t){var e,n;"youtube"===t&&delete window.onYouTubeIframeAPIReady,(e=p.fancybox.getInstance())&&(n=e.current.$content.find("iframe"),"youtube"===t&&void 0!==YT&&YT?new YT.Player(n.attr("id"),{events:{onStateChange:function(t){0==t.data&&e.next()}}}):"vimeo"===t&&void 0!==Vimeo&&Vimeo&&new Vimeo.Player(n).on("ended",function(){e.next()}))}};p(document).on({"afterShow.fb":function(t,e,n){1<e.group.length&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&a.load(n.contentSource)}})}(jQuery),function(g,c,b){"use strict";function d(t){var e=[];for(var n in t=(t=t.originalEvent||t||g.e).touches&&t.touches.length?t.touches:t.changedTouches&&t.changedTouches.length?t.changedTouches:[t])t[n].pageX?e.push({x:t[n].pageX,y:t[n].pageY}):t[n].clientX&&e.push({x:t[n].clientX,y:t[n].clientY});return e}function m(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0}function l(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||b.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,n=t[0].attributes,o=n.length;e<o;e++)if("data-fancybox-"===n[e].nodeName.substr(0,14))return!0;return!1}function u(t){for(var e,n,o,a,i,s=!1;e=t.get(0),void 0,n=g.getComputedStyle(e)["overflow-y"],o=g.getComputedStyle(e)["overflow-x"],a=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth,!(s=a||i)&&(t=t.parent()).length&&!t.hasClass("fancybox-stage")&&!t.is("body"););return s}function n(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",b.proxy(e,"ontouchstart"))}var y=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||function(t){return g.setTimeout(t,1e3/60)},v=g.cancelAnimationFrame||g.webkitCancelAnimationFrame||g.mozCancelAnimationFrame||g.oCancelAnimationFrame||function(t){g.clearTimeout(t)};n.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),b(c).off(".fb.touch"),t.requestId&&(v(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},n.prototype.ontouchstart=function(t){var e=this,n=b(t.target),o=e.instance,a=o.current,i=a.$slide,s=a.$content,r="touchstart"==t.type;if(r&&e.$container.off("mousedown.fb.touch"),(!t.originalEvent||2!=t.originalEvent.button)&&i.length&&n.length&&!l(n)&&!l(n.parent())&&(n.is("img")||!(t.originalEvent.clientX>n[0].clientWidth+n.offset().left))){if(!a||o.isAnimating||a.$slide.hasClass("fancybox-animated"))return t.stopPropagation(),void t.preventDefault();e.realPoints=e.startPoints=d(t),e.startPoints.length&&(a.touch&&t.stopPropagation(),e.startEvent=t,e.canTap=!0,e.$target=n,e.$content=s,e.opts=a.opts.touch,e.isPanning=!1,e.isSwiping=!1,e.isZooming=!1,e.isScrolling=!1,e.canPan=o.canPan(),e.startTime=(new Date).getTime(),e.distanceX=e.distanceY=e.distance=0,e.canvasWidth=Math.round(i[0].clientWidth),e.canvasHeight=Math.round(i[0].clientHeight),e.contentLastPos=null,e.contentStartPos=b.fancybox.getTranslate(e.$content)||{top:0,left:0},e.sliderStartPos=b.fancybox.getTranslate(i),e.stagePos=b.fancybox.getTranslate(o.$refs.stage),e.sliderStartPos.top-=e.stagePos.top,e.sliderStartPos.left-=e.stagePos.left,e.contentStartPos.top-=e.stagePos.top,e.contentStartPos.left-=e.stagePos.left,b(c).off(".fb.touch").on(r?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",b.proxy(e,"ontouchend")).on(r?"touchmove.fb.touch":"mousemove.fb.touch",b.proxy(e,"ontouchmove")),b.fancybox.isMobile&&c.addEventListener("scroll",e.onscroll,!0),((e.opts||e.canPan)&&(n.is(e.$stage)||e.$stage.find(n).length)||(n.is(".fancybox-image")&&t.preventDefault(),b.fancybox.isMobile&&n.parents(".fancybox-caption").length))&&(e.isScrollable=u(n)||u(n.parent()),b.fancybox.isMobile&&e.isScrollable||t.preventDefault(),1!==e.startPoints.length&&!a.hasError||(e.canPan?(b.fancybox.stop(e.$content),e.isPanning=!0):e.isSwiping=!0,e.$container.addClass("fancybox-is-grabbing")),2===e.startPoints.length&&"image"===a.type&&(a.isLoaded||a.$ghost)&&(e.canTap=!1,e.isSwiping=!1,e.isPanning=!1,e.isZooming=!0,b.fancybox.stop(e.$content),e.centerPointStartX=.5*(e.startPoints[0].x+e.startPoints[1].x)-b(g).scrollLeft(),e.centerPointStartY=.5*(e.startPoints[0].y+e.startPoints[1].y)-b(g).scrollTop(),e.percentageOfImageAtPinchPointX=(e.centerPointStartX-e.contentStartPos.left)/e.contentStartPos.width,e.percentageOfImageAtPinchPointY=(e.centerPointStartY-e.contentStartPos.top)/e.contentStartPos.height,e.startDistanceBetweenFingers=m(e.startPoints[0],e.startPoints[1]))))}},n.prototype.onscroll=function(t){this.isScrolling=!0,c.removeEventListener("scroll",this.onscroll,!0)},n.prototype.ontouchmove=function(t){var e=this;void 0===t.originalEvent.buttons||0!==t.originalEvent.buttons?e.isScrolling?e.canTap=!1:(e.newPoints=d(t),(e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=m(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=m(e.newPoints[0],e.startPoints[0],"y"),e.distance=m(e.newPoints[0],e.startPoints[0]),0<e.distance&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))):e.ontouchend(t)},n.prototype.onSwipe=function(t){var e,a=this,i=a.instance,n=a.isSwiping,o=a.sliderStartPos.left||0;if(!0!==n)"x"==n&&(0<a.distanceX&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?o+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?o-=Math.pow(-a.distanceX,.8):o+=a.distanceX),a.sliderLastPos={top:"x"==n?0:a.sliderStartPos.top+a.distanceY,left:o},a.requestId&&(v(a.requestId),a.requestId=null),a.requestId=y(function(){a.sliderLastPos&&(b.each(a.instance.slides,function(t,e){var n=e.pos-a.instance.currPos;b.fancybox.setTranslate(e.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+n*a.canvasWidth+n*e.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))});else if(10<Math.abs(a.distance)){if(a.canTap=!1,i.group.length<2&&a.opts.vertical?a.isSwiping="y":i.isDragging||!1===a.opts.vertical||"auto"===a.opts.vertical&&800<b(g).width()?a.isSwiping="x":(e=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=45<e&&e<135?"y":"x"),"y"===a.isSwiping&&b.fancybox.isMobile&&a.isScrollable)return void(a.isScrolling=!0);i.isDragging=a.isSwiping,a.startPoints=a.newPoints,b.each(i.slides,function(t,e){var n,o;b.fancybox.stop(e.$slide),n=b.fancybox.getTranslate(e.$slide),o=b.fancybox.getTranslate(i.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===i.current.pos&&(a.sliderStartPos.top=n.top-o.top,a.sliderStartPos.left=n.left-o.left),b.fancybox.setTranslate(e.$slide,{top:n.top-o.top,left:n.left-o.left})}),i.SlideShow&&i.SlideShow.isActive&&i.SlideShow.stop()}},n.prototype.onPan=function(){var t=this;m(t.newPoints[0],t.realPoints[0])<(b.fancybox.isMobile?10:5)?t.startPoints=t.newPoints:(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&v(t.requestId),t.requestId=y(function(){b.fancybox.setTranslate(t.$content,t.contentLastPos)}))},n.prototype.limitMovement=function(){var t,e,n,o,a,i,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return a=r<h?f+l:f,i=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),0<l&&t<a&&(a=t-1+Math.pow(-t+f+l,.8)||0),l<0&&a<n&&(a=n+1-Math.pow(n-f-l,.8)||0),0<d&&e<i&&(i=e-1+Math.pow(-e+p+d,.8)||0),d<0&&i<o&&(i=o+1-Math.pow(o-p-d,.8)||0),{top:i,left:a}},n.prototype.limitPosition=function(t,e,n,o){var a=this.canvasWidth,i=this.canvasHeight;return t=a<n?(t=0<t?0:t)<a-n?a-n:t:Math.max(0,a/2-n/2),{top:e=i<o?(e=0<e?0:e)<i-o?i-o:e:Math.max(0,i/2-o/2),left:t}},n.prototype.onZoom=function(){var t=this,e=t.contentStartPos,n=e.width,o=e.height,a=e.left,i=e.top,s=m(t.newPoints[0],t.newPoints[1])/t.startDistanceBetweenFingers,r=Math.floor(n*s),c=Math.floor(o*s),l=(n-r)*t.percentageOfImageAtPinchPointX,d=(o-c)*t.percentageOfImageAtPinchPointY,u=(t.newPoints[0].x+t.newPoints[1].x)/2-b(g).scrollLeft(),f=(t.newPoints[0].y+t.newPoints[1].y)/2-b(g).scrollTop(),p=u-t.centerPointStartX,h={top:i+(d+(f-t.centerPointStartY)),left:a+(l+p),scaleX:s,scaleY:s};t.canTap=!1,t.newWidth=r,t.newHeight=c,t.contentLastPos=h,t.requestId&&v(t.requestId),t.requestId=y(function(){b.fancybox.setTranslate(t.$content,t.contentLastPos)})},n.prototype.ontouchend=function(t){var e=this,n=e.isSwiping,o=e.isPanning,a=e.isZooming,i=e.isScrolling;if(e.endPoints=d(t),e.dMs=Math.max((new Date).getTime()-e.startTime,1),e.$container.removeClass("fancybox-is-grabbing"),b(c).off(".fb.touch"),c.removeEventListener("scroll",e.onscroll,!0),e.requestId&&(v(e.requestId),e.requestId=null),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.isScrolling=!1,e.instance.isDragging=!1,e.canTap)return e.onTap(t);e.speed=100,e.velocityX=e.distanceX/e.dMs*.5,e.velocityY=e.distanceY/e.dMs*.5,o?e.endPanning():a?e.endZooming():e.endSwiping(n,i)},n.prototype.endSwiping=function(t,e){var n=this,o=!1,a=n.instance.group.length,i=Math.abs(n.distanceX),s="x"==t&&1<a&&(130<n.dMs&&10<i||50<i);n.sliderLastPos=null,"y"==t&&!e&&50<Math.abs(n.distanceY)?(b.fancybox.animate(n.instance.current.$slide,{top:n.sliderStartPos.top+n.distanceY+150*n.velocityY,opacity:0},200),o=n.instance.close(!0,250)):s&&0<n.distanceX?o=n.instance.previous(300):s&&n.distanceX<0&&(o=n.instance.next(300)),!1!==o||"x"!=t&&"y"!=t||n.instance.centerSlide(200),n.$container.removeClass("fancybox-is-sliding")},n.prototype.endPanning=function(){var t,e,n,o=this;o.contentLastPos&&(e=!1===o.opts.momentum||350<o.dMs?(t=o.contentLastPos.left,o.contentLastPos.top):(t=o.contentLastPos.left+500*o.velocityX,o.contentLastPos.top+500*o.velocityY),(n=o.limitPosition(t,e,o.contentStartPos.width,o.contentStartPos.height)).width=o.contentStartPos.width,n.height=o.contentStartPos.height,b.fancybox.animate(o.$content,n,366))},n.prototype.endZooming=function(){var t,e,n,o,a=this,i=a.instance.current,s=a.newWidth,r=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,o={top:e=a.contentLastPos.top,left:t,width:s,height:r,scaleX:1,scaleY:1},b.fancybox.setTranslate(a.$content,o),s<a.canvasWidth&&r<a.canvasHeight?a.instance.scaleToFit(150):s>i.width||r>i.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(n=a.limitPosition(t,e,s,r),b.fancybox.animate(a.$content,n,150)))},n.prototype.onTap=function(n){function t(t){var e=s.opts[t];if(b.isFunction(e)&&(e=e.apply(i,[s,n])),e)switch(e){case"close":i.close(o.startEvent);break;case"toggleControls":i.toggleControls();break;case"next":i.next();break;case"nextOrClose":1<i.group.length?i.next():i.close(o.startEvent);break;case"zoom":"image"==s.type&&(s.isLoaded||s.$ghost)&&(i.canPan()?i.scaleToFit():i.isScaledDown()?i.scaleToActual(c,l):i.group.length<2&&i.close(o.startEvent))}}var e,o=this,a=b(n.target),i=o.instance,s=i.current,r=n&&d(n)||o.startPoints,c=r[0]?r[0].x-b(g).scrollLeft()-o.stagePos.left:0,l=r[0]?r[0].y-b(g).scrollTop()-o.stagePos.top:0;if((!n.originalEvent||2!=n.originalEvent.button)&&(a.is("img")||!(c>a[0].clientWidth+a.offset().left))){if(a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(a.is(".fancybox-slide"))e="Slide";else{if(!i.current.$content||!i.current.$content.find(a).addBack().filter(a).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,50<Math.abs(c-o.tapX)||50<Math.abs(l-o.tapY))return this;t("dblclick"+e)}else o.tapX=c,o.tapY=l,s.opts["dblclick"+e]&&s.opts["dblclick"+e]!==s.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,i.isAnimating||t("click"+e)},500):t("click"+e);return this}},b(c).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new n(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(s,r){"use strict";r.extend(!0,r.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});function n(t){this.instance=t,this.init()}r.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,e=t.instance,n=e.group[e.currIndex].opts.slideShow;t.$button=e.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),e.group.length<2||!n?t.$button.hide():n.progress&&(t.$progress=r('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))},set:function(t){var e=this,n=e.instance,o=n.current;o&&(!0===t||o.opts.loop||n.currIndex<n.group.length-1)?e.isActive&&"video"!==o.contentType&&(e.$progress&&r.fancybox.animate(e.$progress.show(),{scaleX:1},o.opts.slideShow.speed),e.timer=setTimeout(function(){n.current.opts.loop||n.current.index!=n.group.length-1?n.next():n.jumpTo(0)},o.opts.slideShow.speed)):(e.stop(),n.idleSecondsCounter=0,n.showControls())},clear:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&this.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){this.isActive?this.stop():this.start()}}),r(s).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var a=e&&e.SlideShow;o?a&&n.opts.slideShow.autoStart&&a.start():a&&a.isActive&&a.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.SlideShow;!i||!n.opts.slideShow||80!==a&&32!==a||r(s.activeElement).is("button,a,input")||(o.preventDefault(),i.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),r(s).on("visibilitychange",function(){var t=r.fancybox.getInstance(),e=t&&t.SlideShow;e&&e.isActive&&(s.hidden?e.clear():e.set())})}(document,jQuery),function(i,n){"use strict";var o=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],e={},n=0;n<t.length;n++){var o=t[n];if(o&&o[1]in i){for(var a=0;a<o.length;a++)e[t[0][a]]=o[a];return e}}return!1}();if(o){var a={request:function(t){(t=t||i.documentElement)[o.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)},exit:function(){i[o.exitFullscreen]()},toggle:function(t){t=t||i.documentElement,this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(i[o.fullscreenElement])},enabled:function(){return Boolean(i[o.fullscreenEnabled])}};n.extend(!0,n.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),n(i).on(o.fullscreenchange,function(){var t=a.isFullscreen(),e=n.fancybox.getInstance();e&&(e.current&&"image"===e.current.type&&e.isAnimating&&(e.isAnimating=!1,e.update(!0,!0,0),e.isComplete||e.complete()),e.trigger("onFullscreenChange",t),e.$refs.container.toggleClass("fancybox-is-fullscreen",t),e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}n(i).on({"onInit.fb":function(t,e){o?e&&e.group[e.currIndex].opts.fullScreen?(e.$refs.container.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),a.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&a.request(),e.FullScreen=a):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide():e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,a){e&&e.FullScreen&&70===a&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&a.exit()}})}(document,jQuery),function(t,i){"use strict";var s="fancybox-thumbs",r=s+"-active";i.fancybox.defaults=i.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},i.fancybox.defaults);function o(t){this.init(t)}i.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,(t.Thumbs=e).$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var a=0,i=n.length;a<i&&(n[a].thumb&&o++,!(1<o));a++);1<o&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var n,t=this,e=t.instance,o=t.opts.parentEl,a=[];t.$grid||(t.$grid=i('<div class="'+s+" "+s+"-"+t.opts.axis+'"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o)),t.$grid.on("click","a",function(){e.jumpTo(i(this).attr("data-index"))})),t.$list||(t.$list=i('<div class="'+s+'__list">').appendTo(t.$grid)),i.each(e.group,function(t,e){(n=e.thumb)||"image"!==e.type||(n=e.src),a.push('<a href="javascript:;" tabindex="0" data-index="'+t+'"'+(n&&n.length?' style="background-image:url('+n+')"':'class="fancybox-thumbs-missing"')+"></a>")}),t.$list[0].innerHTML=a.join(""),"x"===t.opts.axis&&t.$list.width(parseInt(t.$grid.css("padding-right"),10)+e.group.length*t.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,a=o.$list,i=o.$grid;o.instance.current&&(n=(e=a.children().removeClass(r).filter('[data-index="'+o.instance.current.index+'"]').addClass(r)).position(),"y"===o.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<i.scrollLeft()||n.left>i.scrollLeft()+(i.width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),i(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e)).isActive&&!0===n.opts.autoStart&&n.show()},"beforeShow.fb":function(t,e,n,o){var a=e&&e.Thumbs;a&&a.isVisible&&a.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.Thumbs;i&&i.isActive&&71===a&&(o.preventDefault(),i.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,a){"use strict";a.extend(!0,a.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),a(t).on("click","[data-fancybox-share]",function(){var t,e,n=a.fancybox.getInstance(),o=n.current||null;o&&("function"===a.type(o.opts.share.url)&&(t=o.opts.share.url.apply(o,[n,o])),e=o.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===o.type?encodeURIComponent(o.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}(t)).replace(/\{\{descr\}\}/g,n.$caption?encodeURIComponent(n.$caption.text()):""),a.fancybox.open({src:n.translate(n,e),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){n.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(i,s,a){"use strict";function r(){var t=i.location.hash.substr(1),e=t.split("-"),n=1<e.length&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||1;return{hash:t,index:n<1?1:n,gallery:e.join("-")}}function e(t){""!==t.gallery&&a("[data-fancybox='"+a.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function c(t){var e,n;return!!t&&(""!==(n=(e=t.current?t.current.opts:t.opts).hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}a.escapeSelector||(a.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),a(function(){!1!==a.fancybox.defaults.hash&&(a(s).on({"onInit.fb":function(t,e){var n,o;!1!==e.group[e.currIndex].opts.hash&&(n=r(),(o=c(e))&&n.gallery&&o==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(t,e,n,o){var a;n&&!1!==n.opts.hash&&(a=c(e))&&(e.currentHash=a+(1<e.group.length?"-"+(n.index+1):""),i.location.hash!=="#"+e.currentHash&&(o&&!e.origHash&&(e.origHash=i.location.hash),e.hashTimer&&clearTimeout(e.hashTimer),e.hashTimer=setTimeout(function(){"replaceState"in i.history?(i.history[o?"pushState":"replaceState"]({},s.title,i.location.pathname+i.location.search+"#"+e.currentHash),o&&(e.hasCreatedHistory=!0)):i.location.hash=e.currentHash,e.hashTimer=null},300)))},"beforeClose.fb":function(t,e,n){n&&!1!==n.opts.hash&&(clearTimeout(e.hashTimer),e.currentHash&&e.hasCreatedHistory?i.history.back():e.currentHash&&("replaceState"in i.history?i.history.replaceState({},s.title,i.location.pathname+i.location.search+(e.origHash||"")):i.location.hash=e.origHash),e.currentHash=null)}}),a(i).on("hashchange.fb",function(){var t=r(),o=null;a.each(a(".fancybox-container").get().reverse(),function(t,e){var n=a(e).data("FancyBox");if(n&&n.currentHash)return o=n,!1}),o?o.currentHash===t.gallery+"-"+t.index||1===t.index&&o.currentHash==t.gallery||(o.currentHash=null,o.close()):""!==t.gallery&&e(t)}),setTimeout(function(){a.fancybox.getInstance()||e(r())},50))})}(window,document,jQuery),function(t,e){"use strict";var a=(new Date).getTime();e(t).on({"onInit.fb":function(t,o,e){o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var e=o.current,n=(new Date).getTime();o.group.length<2||!1===e.opts.wheel||"auto"===e.opts.wheel&&"image"!==e.type||(t.preventDefault(),t.stopPropagation(),e.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,n-a<250||(a=n,o[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery),jQuery('[data-fancybox="property-gallery"]').fancybox({idleTime:!1,loop:!0,baseClass:"property-gallery-modal",margin:0,gutter:0,protect:!0,thumbs:{hideOnClose:!1,parentEl:".fancybox-outer"},buttons:["zoom","fullScreen","thumbs","close"],touch:{vertical:!1},animationEffect:"fade",animationDuration:300});var galleryItem=document.getElementById("drawing-item-1"),galleryItemIndex=jQuery(".property-gallery__item").index(galleryItem);jQuery(".launch-gallery-drawing").attr("data-fancybox-index",galleryItemIndex);
//# sourceMappingURL=fancybox.js.map

/*! lazysizes - v5.3.0 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
var ajax = {};
ajax.x = function() {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {}
    }
    return xhr;
};

ajax.send = function(url, callback, method, data, async) {
    if (async ===undefined) {
        async = true;
    }
    var x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            callback(x.responseText);
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data);
};

ajax.post = function(url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), async);
};

ajax.get = function(url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'GET', query.join('&'), async);
};

var forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, array[i], i); // passes back stuff we need
    }
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}
let defaultTransitionLeave = (container) => {gsap.timeline().to(container, {duration:0.4, autoAlpha:0});};
let defaultTransitionEnter = (container) =>  {gsap.timeline().from(container, {duration: 0.4,autoAlpha:0});};
function setup_map() {
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;
    var house = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    //console.log(house);
    var map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true,
        zoom: 14,
        center: house,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#523735"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#c9b2a6"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#dcd2be"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ae9e90"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#93817c"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#a5b076"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#447530"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fdfcf8"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f8c967"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e9bc62"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e98d58"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#db8555"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#806b63"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8f7d77"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b9d3c2"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#92998d"
                }]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: house,
        map: map
    });
}

let cookie_block = () => {

    var script = document.createElement("script");
    script.src = "https://report.cookie-script.com/r/9faa8035a8cb6d2ea37dcd81d664a637.js";
    script.setAttribute('data-cookiescriptreport', 'report');
    document.getElementById('cookieBlock').appendChild(script);

};

let searchProperties = () => {

    let search = document.querySelector('.searchPropertyBlock__input');
    let allCards = document.querySelectorAll('.singleBoligCard');

    search.addEventListener('input', (e) => {

        e.preventDefault();
        let value = search.value.toLowerCase();
        let matches = 0;

        if (document.getElementById('searchPropertyNoMatches')) {
            document.getElementById('searchPropertyNoMatches').style.display = 'none';
        }

        if (value == '') {

            forEach(allCards, (el) => {
                el.classList.remove('hiddenBoligCard');
                matches++;
            });

        } else {

            forEach(allCards, (el) => {
                el.classList.remove('hiddenBoligCard');
            });

            forEach(allCards, (el) => {
                let address = el.getAttribute('data-address').toLowerCase();
                if (!address.includes(value)) {
                    el.classList.add('hiddenBoligCard');
                } else {
                    matches++;
                }
            });

            if (matches === 0) {
                searchNoMatches();
            }

        }

    });

};

let bolig_setup = () => {

    let boligHero = document.querySelector('.boligHero');
    let readMore = document.querySelector('.readAllText');

    readMore.addEventListener('click', (e) => {

        e.preventDefault();
        gsap.to('.hiddenText', { autoAlpha: 0, duration: 0.3 });

    });

    bolig_sliders();
    setup_map();
    setup_bolig_popups();
    setup_bolig_calendar();
    bolig_setup_magnifier();
    gallery_setup();

    let singleNavMap = document.getElementById('seeMap');

    if (singleNavMap) {
        singleNavMap.addEventListener('click', (e) => {
            e.preventDefault();

            remove_hero_classes();
            document.querySelector('#boligMap').classList.add('activeMainSlider');

            // remove_nav_classes();
            singleNavMap.classList.add('singleNav--active');

            // gsap.set('.boligHeroGalleryNav, .boligHeroPlanNav', { display:'none' });
            gsap.to(window, { duration: 0.3, scrollTo: "#bolig" });

            // document.body.classList.add('stickyHeader');
            // boligHero.classList.remove('boligHero--activeNav');
            if (document.getElementById('boligVideo')) document.getElementById('boligVideo').pause();
        });
    }

    let singleNavBilleder = document.getElementById('singleNavBilleder');

    if (singleNavBilleder) {
        singleNavBilleder.addEventListener('click', (e) => {
            e.preventDefault();
            var ww = window.innerWidth;
            if(ww < 1200 && document.getElementById('property-gallery')){
                jQuery('#image-item-1').trigger('click');
            }else {
                remove_hero_classes();
                document.querySelector('.boligPhotoGallery').classList.add('activeMainSlider');

                // remove_nav_classes();
                singleNavBilleder.classList.add('singleNav--active');

                // gsap.set('.boligHeroPlanNav', { display: 'none' });
                // gsap.set('.boligHeroGalleryNav', { display:'block' });
                gsap.to(window, {duration: 0.5, scrollTo: "#bolig"});
                // boligHero.classList.add('boligHero--activeNav');
            }
            if (document.getElementById('boligVideo')) document.getElementById('boligVideo').pause();

        });
    }


    let singleNavPlan = document.getElementById('singleNavPlan');

    if (singleNavPlan) {
        singleNavPlan.addEventListener('click', (e) => {
            e.preventDefault();
            var ww = window.innerWidth;
            if(ww < 1200 && document.getElementById('property-gallery')){
                jQuery('#drawing-item-1').trigger('click');
            }else{
                remove_hero_classes();
                document.querySelector('.boligPlanGallery').classList.add('activeMainSlider');

                // remove_nav_classes();
                singleNavPlan.classList.add('singleNav--active');

                // gsap.set('.boligHeroGalleryNav', { display:'none' });
                // gsap.set('.boligHeroPlanNav', { display:'block' });
                gsap.to(window, { duration: 0.5, scrollTo: "#bolig" });
                // boligHero.classList.add('boligHero--activeNav');
            }
            if (document.getElementById('boligVideo')) document.getElementById('boligVideo').pause();
        });
    }



    let singleNavVideo = document.getElementById('singleNavVideo');

    if (singleNavVideo) {
        singleNavVideo.addEventListener('click', (e) => {
            e.preventDefault();

            remove_hero_classes();

            document.querySelector('.boligVideoMain').classList.add('activeMainSlider');

            // remove_nav_classes();

            gsap.to(window, { duration: 0.5, scrollTo: "#bolig" });
            document.getElementById('boligVideo').play();

        });
    }


    // let singleNavBillederClose = document.querySelectorAll('.closeBoligNavigation');

    // forEach(singleNavBillederClose, (el) => {

    //     el.addEventListener('click', (e) => {
    //         e.preventDefault();
    // gsap.set('.boligHeroGalleryNav, .boligHeroPlanNav', { display:'none' });
    // boligHero.classList.remove('boligHero--activeNav');
    // });

    // document.body.classList.add('stickyHeader');

    // });

};

let gallery_setup = () => {
    // ======= Gallery =======
    console.log('setting up fancybox');
    jQuery('[data-fancybox="property-gallery"]').fancybox({
        idleTime  : false,
        loop 	  : true,
        baseClass : 'property-gallery-modal',
        margin    : 0,
        gutter    : 0,
        protect   : true,
        thumbs    : {
            hideOnClose : false,
            parentEl    : '.fancybox-outer'
        },
        buttons: [
            "zoom",
            //"share",
            //"slideShow",
            "fullScreen",
            //"download",
            "thumbs",
            "close"
        ],
        touch : {
            vertical : false
        },
        animationEffect   : "fade",
        animationDuration : 300
    });


// Assign index attribute to floor plan button
    var galleryItem = document.getElementById('drawing-item-1');
    var galleryItemIndex = jQuery(".property-gallery__item").index(galleryItem);

    jQuery('.launch-gallery-drawing').attr('data-fancybox-index', galleryItemIndex);
};

let bolig_setup_magnifier = () => {

    let all = document.getElementsByClassName("zoomD"),
        lightbox = document.getElementById("lightbox");
        
    if(!lightbox) return;

    if (all.length > 0) {
        forEach(all, (i) => {
            i.onclick = () => {
                // let clone = i.cloneNode();
                var img = new Image();
                img.src = i.getAttribute('src');
                img.setAttribute("draggable", false);
                img.onload = function() {

                    let tempWidth = this.width * 1.2;
                    let tempHeight = this.height * 1.2;
                    let imgTop = (tempHeight - window.innerHeight) / 2;
                    // if()

                    gsap.set(img, {top: imgTop, width:tempWidth + 'px', height: tempHeight + 'px', maxWidth:tempWidth + 'px'});
                    let scrollWidth = (tempWidth - lightbox.offsetWidth) / 2;
                    let scrollHeight = (tempHeight - lightbox.offsetHeight) / 2;
                    setTimeout(function(){lightbox.scrollTo(scrollWidth, scrollHeight);}, 10);

                    // clone.className = "";
                    lightbox.innerHTML = "";
                    lightbox.appendChild(img);
                    lightbox.className = "show";
                    gsap.set('html', {overflow:'hidden'});
                };
            };
        });
    }

    let grabbed = false;

    lightbox.onclick = () => {
        if(!grabbed){
            lightbox.className = "";
            gsap.set('html', {overflow:'auto'});
        }
    };

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    // console.log(pos);
    const mouseDownHandler = function (e) {
        pos = {
            // The current scroll
            left: lightbox.scrollLeft,
            top: lightbox.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        lightbox.addEventListener('mousemove', mouseMoveHandler);
        lightbox.addEventListener('mouseup', mouseUpHandler);
        lightbox.style.cursor = 'grabbing';
    };

    lightbox.addEventListener('mousedown', mouseDownHandler);

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        lightbox.scrollTop = pos.top - dy;
        lightbox.scrollLeft = pos.left - dx;

        grabbed = true;
    };

    // const mouseDownHandler = function(e) {
    //     // Change the cursor and prevent user from selecting the text
    //     lightbox.style.cursor = 'grabbing';
    //     lightbox.style.userSelect = 'none';
    // };

    const mouseUpHandler = function () {
        lightbox.removeEventListener('mousemove', mouseMoveHandler);
        lightbox.removeEventListener('mouseup', mouseUpHandler);

        lightbox.style.cursor = 'grab';
        lightbox.style.removeProperty('user-select');

        setTimeout(function(){ grabbed = false; }, 50);
    };

};

let setup_bolig_calendar = () => {

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    flatpickr('#bestilCalendar', {
        inline: true,
        minDate: tomorrow,
        dateFormat: "d-m-Y",
        locale: {
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ["Søn", "Man", "Tir", "Ons", "Tors", "Fre", "Lør"],
                longhand: [
                    "Søndag",
                    "Mandag",
                    "Tirsdag",
                    "Onsdag",
                    "Ttorsdag",
                    "Fredag",
                    "Lørdag",
                ],
            },

            months: {
                shorthand: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Maj",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Okt",
                    "Nov",
                    "Dec",
                ],
                longhand: [
                    "Januar",
                    "Februar",
                    "Marts",
                    "April",
                    "Maj",
                    "Juni",
                    "Juli",
                    "August",
                    "September",
                    "Oktober",
                    "November",
                    "December",
                ],
            },
        },
        onChange: function(selectedDates, dateStr, instance) {
            let dateInput = document.getElementById('date');
            dateInput.setAttribute('value', dateStr);

            /*let selectBox = document.getElementById('tider');
            while (selectBox.options.length) selectBox.remove(0);
            get_calendar(dateStr);*/
        }
    });

};

let get_calendar = date => {

    caseKey = document.getElementById('caseKey').value;
    let realtor = document.querySelector('#caseRealtor').value;

    ajax.post(
        admin.ajaxUrl, {
            action: 'calendar_times',
            nonce: admin.nonce,
            date,
            caseKey,
            realtor
        },
        function(data) {

            let response = JSON.parse(data);
            let selectBox = document.getElementById('tider');

            while (selectBox.options.length) selectBox.remove(0);

            if (Object.keys(response.data).length > 0) {
                forEach(Object.entries(response.data), (time, key) => {

                    let option = document.createElement("option");
                    option.text = time[1];
                    option.value = date + ' ' + time[1];
                    selectBox.appendChild(option);
                });

            } else {
                let option = document.createElement("option");
                option.text = 'Ingen tider';
                option.value = '';
                selectBox.appendChild(option);
            }
        }
    );

};

let setup_bolig_popups = () => {

    let close = document.querySelectorAll('.closeModal, .boligModalWrap__overlay');

    if(close.length > 0){
        forEach(close, (item) => {

            item.addEventListener('click', (e) => {

                e.preventDefault();
                let modal = item.closest('.boligModalWrap');
                gsap.set(modal, { pointerEvents: 'none' });
                gsap.to(modal, { autoAlpha: 0, duration: 0.3 });

            });

        });
    }

    let opener = document.querySelectorAll('.openPopup');

    if(opener.length > 0){
        forEach(opener, (item) => {

            item.addEventListener('click', (e) => {

                e.preventDefault();
                let target = item.getAttribute('data-target');
                gsap.set('#' + target, { pointerEvents: 'all' });
                gsap.to('#' + target, { autoAlpha: 1, duration: 0.3 });

            });

        });
    }

    setup_form_popup();

};

let setup_form_popup = () => {

    salgsopstilling_form_fn();
    givbud_form_fn();
    fremvisning_form_fn();
    openhouse_form_fn();
};

let skuffesalg_form_fn = () => {

    let skuffesalg_form = document.getElementById('skuffesalg_form');

    skuffesalg_form.addEventListener('submit', (e) => {

        e.preventDefault();
        let realtor = '';

        if (document.querySelector('#skuffesalg_form input[name="realtor"]:checked')) {
            realtor = document.querySelector('#skuffesalg_form input[name="realtor"]:checked').value;
        }

        let data = {
            'name': skuffesalg_form.querySelector('#navn').value,
            'address': skuffesalg_form.querySelector('#address').value,
            'email': skuffesalg_form.querySelector('#email').value,
            'addressID': skuffesalg_form.querySelector('#addressID').value,
            'mobile': skuffesalg_form.querySelector('#telefon').value,
            'onsker': skuffesalg_form.querySelector('#onsker').value,
            'area': skuffesalg_form.querySelector('#countryCode').value,
            'consentIdGlobal':skuffesalg_form.querySelector('input[name="consentIdGlobal"]').value,
            'shopNo': 99,
            'realtor': realtor,
        };

        gsap.to('#skuffesalg_form .button', { autoAlpha: 0, duration: 0.2 });
        gsap.to('#skuffesalg_form .successText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        gsap.to('#skuffesalg_form .errorText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        document.getElementById('vurdering-loading').style.display = 'block';

        ajax.post(
            admin.ajaxUrl, {
                action: 'skuffesalg_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
                data = JSON.parse(data);
                document.getElementById('vurdering-loading').style.display = 'none';
                if (data.success) {
                    gsap.to('#skuffesalg_form .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                } else {
                    gsap.to('#skuffesalg_form .errorText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                }
            }
        );

    });

};

let vurderingForm_form_fn = () => {
    let opener = document.querySelector('.openPopup');

    if(opener){
        opener.addEventListener('click', (e) => {
            e.preventDefault();
            let target = opener.getAttribute('data-target');
            console.log(target);
            gsap.set('#' + target, { pointerEvents: 'all' });
            gsap.to('#' + target, { autoAlpha: 1, duration: 0.3 });

        });
    }

    let close = document.querySelectorAll('.closeModal, .boligModalWrap__overlay');
    if(close || close.length > 0){
        forEach(close, (item) => {

            item.addEventListener('click', (e) => {

                e.preventDefault();
                let modal = item.closest('.boligModalWrap');
                gsap.set(modal, { pointerEvents: 'none' });
                gsap.to(modal, { autoAlpha: 0, duration: 0.3 });

            });

        });
    }


    let vurdering_form = document.getElementById('vurdering_form');

    vurdering_form.addEventListener('submit', (e) => {

        e.preventDefault();
        let realtor = '';

        if (document.querySelector('#vurdering_form input[name="realtor"]:checked')) {
            realtor = document.querySelector('#vurdering_form input[name="realtor"]:checked').value;
        }

        let data = {
            'name': vurdering_form.querySelector('#navn').value,
            'address': vurdering_form.querySelector('#address').value,
            'addressID': vurdering_form.querySelector('#addressID').value,
            'mobile': vurdering_form.querySelector('#telefon').value,
            'area': vurdering_form.querySelector('#countryCode').value,
            'email': vurdering_form.querySelector('#email').value,
            'realtor': realtor,
            'onsker': vurdering_form.querySelector('#onsker').value,
            'consentIdGlobal':vurdering_form.querySelector('input[name="consentIdGlobal"]').value,
            'shopNo': 99,
        };

        gsap.to('#vurdering .button', { autoAlpha: 0, duration: 0.2 });
        document.getElementById('vurdering-loading').style.display = 'block';
        ajax.post(
            admin.ajaxUrl, {
                action: 'vurdering_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
                data = JSON.parse(data);
                document.getElementById('vurdering-loading').style.display = 'none';
                if (data.success) {
                    gsap.to('#vurdering .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                } else {
                    gsap.to('#vurdering .errorText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                }
            }
        );

    });

};

let fremvisning_form_fn = () => {


    let fremvisning_form = document.getElementById('fremvisning_form');

    if(!fremvisning_form) return false;

    fremvisning_form.addEventListener('submit', (e) => {

        e.preventDefault();
        let realtor = '';
/*
        if (document.querySelector('#fremvisning_form input[name="realtor"]:checked')) {
            realtor = document.querySelector('#fremvisning_form input[name="realtor"]:checked').value;
        }
 */
        //gsap.set('#tider', { clearProps: 'borderColor' });

        /*if (document.getElementById('tider').value == '') {
            gsap.to('#tider', { borderColor: '#ba4646' });
            return;
        }*/

        let data = {
            'name': fremvisning_form.querySelector('#navn').value,
            'mobile': fremvisning_form.querySelector('#telefon').value,
            'area': fremvisning_form.querySelector('#countryCode').value,
            'email': fremvisning_form.querySelector('#email').value,
            'komentar': fremvisning_form.querySelector('#onsker').value,
            'address': fremvisning_form.querySelector('#address').value ? fremvisning_form.querySelector('#address').value : fremvisning_form.querySelector('#address-autocomplete').value,
            //'realtor': realtor,
            'date': document.getElementById('date').value,
            'consentIdGlobal':fremvisning_form.querySelector('input[name="consentIdGlobal"]').value,
            'shopNo': document.getElementById('shopNo').value,
            'caseNo': document.getElementById('caseNo').value,
        };

        gsap.to('#fremvisning .button', { autoAlpha: 0, duration: 0.2 });
        gsap.to('#fremvisning .successText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        gsap.to('#fremvisning .errorText', { autoAlpha: 0, duration: 0.3 }, 0.1);

        document.getElementById('fremvisning-loading').style.display = 'block';

        ajax.post(
            admin.ajaxUrl, {
                action: 'fremvisning_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
                data = JSON.parse(data);
                document.getElementById('fremvisning-loading').style.display = 'none';
                if (data.success) {
                    gsap.to('#fremvisning .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                } else {
                    gsap.to('#fremvisning .errorText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                }
            }
        );

    });
};

let givbud_form_fn = () => {

    let givbud_form = document.getElementById('givbudForm');

    if(!givbud_form) return false;

    givbud_form.addEventListener('submit', (e) => {

        e.preventDefault();

        let data = {
            'name': givbud_form.querySelector('#navn').value,
            'mobile': givbud_form.querySelector('#telefon').value,
            'area': givbud_form.querySelector('#countryCode').value,
            'email': givbud_form.querySelector('#email').value,
            'makeABid': givbud_form.querySelector('#bid').value,
            'komentar': givbud_form.querySelector('#onsker').value,
            'consentIdGlobal':givbud_form.querySelector('input[name="consentIdGlobal"]').value,
            'caseNo': document.getElementById('caseNo').value,
            'shopNo': document.getElementById('shopNo').value,
        };

        gsap.to('#givBud .button', { autoAlpha: 0, duration: 0.2 });
        gsap.to('#givBud .successText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        gsap.to('#givBud .errorText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        document.getElementById('givbud-loading').style.display = 'block';
        ajax.post(
            admin.ajaxUrl, {
                action: 'givbud_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
                data = JSON.parse(data);
                console.log(data);
                document.getElementById('givbud-loading').style.display = 'none';
                if (data.success) {
                    gsap.to('#givBud .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                } else {
                    gsap.to('#givBud .errorText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                }
            }
        );

    });

};

let salgsopstilling_form_fn = () => {

    let salgsopstilling_form = document.getElementById('salgsopstilling_form');

    if(!salgsopstilling_form) return false;

    salgsopstilling_form.addEventListener('submit', (e) => {

        e.preventDefault();

        let data = {
            'name': salgsopstilling_form.querySelector('#navn').value,
            'mobile': salgsopstilling_form.querySelector('#telefon').value,
            'area': salgsopstilling_form.querySelector('#countryCode').value,
            'email': salgsopstilling_form.querySelector('#email').value,
            'bestil_agree' : salgsopstilling_form.querySelector('#bestil_agree').checked,
            'caseNo': document.getElementById('caseNo').value,
            'shopNo': document.getElementById('shopNo').value,
            'consentIdGlobalWithContact':salgsopstilling_form.querySelector('input[name="consentIdGlobalWithContact"]').value,
            'consentIdGlobalWithoutContact':salgsopstilling_form.querySelector('input[name="consentIdGlobalWithoutContact"]').value,
        };
        if (document.getElementById('salgsopstilling_file').value) {
            window.open(document.getElementById('salgsopstilling_file').value, '_blank');
        }

        gsap.to('#salgsopstilling .button', { autoAlpha: 0, duration: 0.2 });

        gsap.to('#salgsopstilling .successText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        gsap.to('#salgsopstilling .errorText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        document.getElementById('salgsopstilling-loading').style.display = 'block';

        ajax.post(
            admin.ajaxUrl, {
                action: 'salgsopstilling_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
                data = JSON.parse(data);
                document.getElementById('salgsopstilling-loading').style.display = 'none';
                if (data.success) {
                    gsap.to('#salgsopstilling .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                } else {
                    gsap.to('#salgsopstilling .errorText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                    gsap.to('#salgsopstilling .button', { autoAlpha: 1, duration: 0.2 });
                    //document.getElementById('salgsopstilling-loading').style.display = 'none';
                }
            }
        );

    });

};


let openhouse_form_fn = () => {

    let openhouse_form = document.getElementById('openhouse_form');

    if(!openhouse_form) return false;

    openhouse_form.addEventListener('submit', (e) => {

        e.preventDefault();

        let data = {
            'name': openhouse_form.querySelector('#navn').value,
            'mobile': openhouse_form.querySelector('#telefon').value,
            'area': openhouse_form.querySelector('#countryCode').value,
            'email': openhouse_form.querySelector('#email').value,
            'komentar': openhouse_form.querySelector('#onsker').value,
            'address': openhouse_form.querySelector('#address').value ? openhouse_form.querySelector('#address').value : openhouse_form.querySelector('#address-autocomplete').value,
            'openHouseId':openhouse_form.querySelector('input[name="openHouseId"]').value,
            'openHouseStartTime':openhouse_form.querySelector('input[name="openHouseStartTime"]').value,
            'consentIdGlobal':openhouse_form.querySelector('input[name="consentIdGlobal"]').value,
            'caseNo': document.getElementById('caseNo').value,
            'shopNo': document.getElementById('shopNo').value,
        };

        gsap.to('#openHouseSignup .button', { autoAlpha: 0, duration: 0.2 });
        gsap.to('#openHouseSignup .successText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        gsap.to('#openHouseSignup .errorText', { autoAlpha: 0, duration: 0.3 }, 0.1);
        document.getElementById('openhouse-loading').style.display = 'block';

        ajax.post(
            admin.ajaxUrl, {
                action: 'openhouse_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
                data = JSON.parse(data);
                document.getElementById('openhouse-loading').style.display = 'none';
                if(data.success){
                    gsap.to('#openHouseSignup .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                }else{
                    gsap.to('#openHouseSignup .errorText', { autoAlpha: 1, duration: 0.3 }, 0.1);
                }
            }
        );

    });

};

let kobertkartotek_form_fn = () => {

    let kobertkartotek_form = document.getElementById('kobertkartotekForm');

    let textAreas = document.querySelectorAll('.singleField__textarea');
    forEach(textAreas, (area) => {

        let text = area.querySelector('textarea');
        let label = area.querySelector('.textareaLabel');

        text.addEventListener('focus', () => {

            gsap.set(label, { display: 'none' });

        });

        text.addEventListener('focusout', () => {

            if (text.value == "") {
                gsap.set(label, { display: 'block' });
            }

        });

        label.addEventListener('click', () => {

            text.focus();

        });

    });

    let singleDropdown = document.querySelectorAll('.singleSelect');

    forEach(singleDropdown, (el) => {

        let dropdownItems = el.querySelectorAll('li');
        let selected = el.querySelector('.singleSelect__selected');
        let selectedSpan = selected.querySelector('span');
        let isMultiple = el.classList.contains('singleSelect--multiple');

        el.addEventListener('mouseover', () => {

            if (window.innerWidth > 767) {
                el.classList.add('singleSelect--active');
            }

        });

        el.addEventListener('mouseleave', () => {

            if (window.innerWidth > 767) {
                el.classList.remove('singleSelect--active');
            }

        });

        selected.addEventListener('click', () => {

            if (el.classList.contains('singleSelect--active')) {
                el.classList.remove('singleSelect--active');
            } else {
                forEach(singleDropdown, (singleSelectDropdown) => {
                    singleSelectDropdown.classList.remove('singleSelect--active');
                });
                el.classList.add('singleSelect--active');
            }

        });

        forEach(dropdownItems, (item) => {

            item.addEventListener('click', (e) => {

                e.preventDefault();
                if (isMultiple) {

                    item.classList.toggle('selectedItem');
                    let found = 0;
                    let selectedString = '';
                    forEach(dropdownItems, (singleLi) => {

                        if (singleLi.classList.contains('selectedItem')) {
                            selectedString += singleLi.getAttribute('data-value') + ", ";
                            found++;
                        }

                    });

                    if (found == 0) {
                        selectedSpan.innerHTML = selected.getAttribute('data-text');
                        el.previousElementSibling.value = '';
                    } else {
                        selectedString = selectedString.slice(0, -2);
                        selectedSpan.innerHTML = selectedString;
                        el.previousElementSibling.value = selectedString;
                    }

                } else {
                    el.classList.remove('singleSelect--active');
                    let value = item.getAttribute('data-value');
                    selectedSpan.innerHTML = item.innerHTML;
                    el.previousElementSibling.value = value;
                }

            });

        });

    });


    kobertkartotek_form.addEventListener('submit', (e) => {

        e.preventDefault();

        var array = [];
        var checkboxes = document.querySelectorAll('.kobert__checkbox input[type=checkbox]:checked');

        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value);
        }

        let data = {
            'name': kobertkartotek_form.querySelector('#navn').value,
            'mobile': kobertkartotek_form.querySelector('#telefon').value,
            'area': kobertkartotek_form.querySelector('#countryCode').value,
            'email': kobertkartotek_form.querySelector('#email').value,
            //'onsker' : kobertkartotek_form.querySelector('#onsker').value,
            'fortal': kobertkartotek_form.querySelector('#fortal').value,
            'storrelse': kobertkartotek_form.querySelector('#storrelse').value,
            'grundstorrelse': kobertkartotek_form.querySelector('#grundstorrelse').value,
            //'rooms' : kobertkartotek_form.querySelector('#rooms').value,
            'kontaktpris': kobertkartotek_form.querySelector('#kontaktpris').value,
            'beliggenhed': kobertkartotek_form.querySelector('#beliggenhed').value,
            'address': kobertkartotek_form.querySelector('#address').value,
            'ejendomstyper': array,
        };

        gsap.to('#kobertkartotekForm .button', { autoAlpha: 0, duration: 0.2 });
        gsap.to('#kobertkartotekForm .successText', { autoAlpha: 1, duration: 0.3 }, 0.1);

        ajax.post(
            admin.ajaxUrl, {
                action: 'kobertkartotek_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
            }
        );

    });

};

let remove_hero_classes = () => {

    let allButtons = document.querySelectorAll('.boligHeroItem');
    forEach(allButtons, (el) => {
        if (el.classList.contains('activeMainSlider')) el.classList.remove('activeMainSlider');
    });

};


let mobile_menu = () => {
    mobileEnabled = true;
    gsap.utils.toArray('.menu-item-has-children').forEach(menuItem => {

        // if (menuItem.classList.contains('disableMain') && width < 1199) {
        if (width < 1199) {
            const contentHeight = menuItem.getElementsByClassName('sub-menu')[0].offsetHeight + 67 + 'px';

            menuItem.addEventListener('click', function(e) {
                e.preventDefault();
                if (menuItem.classList.contains('submenu--open')) {
                    menuItem.classList.remove('submenu--open');
                    gsap.to(menuItem, { maxHeight: '67px', duration: 0.3 });
                } else {
                    menuItem.classList.add('submenu--open');
                    gsap.to(menuItem, { maxHeight: contentHeight, duration: 0.3 });
                }
            });

        }

    });
};

let bolig_sliders = () => {

    if (document.querySelector('.boligPhotoGallery')) {

        let boligPhotoGallery = new Splide('.boligPhotoGallery', {
            type: 'slide',
            autoplay: false,
            perPage: 1,
            drag:true,
            perMove: 1,
            flickMaxPages: 1,
            flickPower: 100,
            snap: true,
            arrows: true,
            pagination: false,
            breakpoints: {
                991: {
                    pagination: false,
                    arrows: true
                },
                576: {
                    pagination: false,
                    arrows: true
                }
            }
        });

        boligPhotoGallery.mount();

        boligPhotoGallery.on('active', function() {
            setTimeout(() => {
                if (document.querySelector('.boligPhotoGallery .is-active video')) {
                    document.querySelector('.boligHero').classList.remove('boligHero--activeNav');
                }
            }, 100);
        });

    }

    if (document.querySelector('.boligPlanGallery')) {

        let boligPlanGallery = new Splide('.boligPlanGallery', {
            type: 'slide',
            autoplay: false,
            perPage: 1,
            perMove: 1,
            flickMaxPages: 1,
            arrows: true,
            pagination: false,
            breakpoints: {
                991: {
                    pagination: true,
                    arrows: false
                },
                576: {
                    pagination: false,
                    arrows: false
                }
            }
        });

        // let boligPlanGalleryNavigation = new Splide('.boligPlanGalleryNavigation', {
        //     fixedWidth: 200,
        //     fixedHeight: 96,
        //     gap: 10,
        //     rewind: true,
        //     pagination: false,
        //     cover: true,
        //     isNavigation: true,
        //     arrows: false,
        //     breakpoints: {
        //         992: {
        //             fixedWidth: 150,
        //             fixedHeight: 70,
        //         },
        //     },
        // });

        // boligPlanGallery.sync(boligPlanGalleryNavigation);
        boligPlanGallery.mount();
        // boligPlanGalleryNavigation.mount();
    }

};

let change_menu = () => {


    if (document.querySelector('.heroWrap')) {
        // document.body.classList.add('stickyHeader');
        document.body.classList.add('home');
    } else {
        // document.body.classList.remove('stickyHeader');
        document.body.classList.remove('home');
    }

    if (document.getElementById('noInstaBlock')) {
        document.body.classList.add('noInstaBody');
    } else {
        document.body.classList.remove('noInstaBody');
    }

    if (document.getElementById('bolig')) {
        if (window.innerWidth >= 1200) {
            document.body.classList.add('mobileMenuPage');
            gsap.set('.menu-menu-container', { autoAlpha: 0 });
        }
    } else {
        if (window.innerWidth >= 1200) {
            document.body.classList.remove('mobileMenuPage');
            gsap.set('.menu-menu-container', { autoAlpha: 1 });
        } else {
            gsap.set('.menu-menu-container', { autoAlpha: 0 });
        }
    }
    if (window.innerWidth < 1200) {
        gsap.set('.menu-menu-container', { autoAlpha: 0 });
    }

    document.body.classList.remove('menuOpened');

};

let hero_setup = () => {

    if (navigator.userAgent.indexOf("Lighthouse") !== -1) {
        gsap.to('.hero', { y: 0, autoAlpha: 1, duration: 1 }, 0.5);
    } else {
        hero_player();
        hero_sizing();
        window.addEventListener('resize', hero_sizing, true);

    }

};

let hero_player = () => {

    const iframe = document.getElementById('fullVideo');
    const muteButton = document.querySelector('.homeHero');

    let options = {
        loop: true,
        muted: true,
        controls: false,
        autoplay: false,
        autopause: false
    };

    const player = new Vimeo.Player(iframe, options);

    player.on('loaded', function() {
        player.play();
    });

    player.on('bufferend', function() {
        gsap.set('.heroWrap iframe', { autoAlpha: 1 });
        gsap.set('.heroPlaceholderImage', { autoAlpha: 0 });
    });

    muteButton.addEventListener('click', () => {

        muteButton.classList.toggle('homeHero--sound');

        if (muteButton.classList.contains('homeHero--sound')) {
            player.setVolume(1);
        } else {
            player.setVolume(0);
        }

    });

};

let hero_sizing = () => {

    let heroWrap = document.querySelector('.heroWrap');
    let ratio = window.innerHeight / window.innerWidth;
    if (!heroWrap) return;
    heroWrap.classList.remove('videoDefault', 'videoLarge', 'videoLarge2', 'videoLarge3');
    if (ratio > 1.5) {
        heroWrap.classList.add('videoLarge2');
    } else if (ratio > 0.7) {
        heroWrap.classList.add('videoLarge3');
    } else if (ratio > 0.5625) {
        heroWrap.classList.add('videoLarge');
    } else {
        heroWrap.classList.add('videoDefault');
    }
};

let setup_share_widget = () => {

    if (window.innerWidth > 767) {

        let widget = document.getElementById('share_post_widget');
        let height = widget.offsetHeight + (window.innerHeight * 0.15) - 20 + 'px';

        ScrollTrigger.create({
            trigger: ".postContent",
            start: "top 15%",
            end: "bottom =+" + height,
            pin: "#share_post_widget",
            anticipatePin: 1,
            scrub: true
        });

    }

};

let setup_post_social = () => {

    if (window.innerWidth > 767) {
        setup_share_widget();

        window.addEventListener('resize', function(event) {
            setup_share_widget();
        }, true);

    }

    var getWindowOptions = function() {
        var width = 500;
        var height = 350;
        var left = (window.innerWidth / 2) - (width / 2);
        var top = (window.innerHeight / 2) - (height / 2);

        return [
            'resizable,scrollbars,status',
            'height=' + height,
            'width=' + width,
            'left=' + left,
            'top=' + top,
        ].join();
    };


    /*    var twitterBtn = document.querySelector('.twitter_share');
        var text = encodeURIComponent(document.title);
        var shareUrlTwitter = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;
        twitterBtn.href = shareUrlTwitter; // 1

        twitterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var win = window.open(shareUrlTwitter, 'ShareOnTwitter', getWindowOptions());
            win.opener = null; // 2
        });*/

    var facebookBtn = document.querySelector('.fb_share');
    var shareUrlFacebook = 'https://www.facebook.com/sharer.php?u=' + window.location.href;
    facebookBtn.href = shareUrlFacebook; // 1

    facebookBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var win = window.open(shareUrlFacebook, 'facebook-share-dialog', getWindowOptions());
        win.opener = null; // 2
    });

    var linkedinBtn = document.querySelector('.linkedin_share');
    var shareUrlLinkedin = 'https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href;
    linkedinBtn.href = shareUrlLinkedin; // 1

    linkedinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var win = window.open(shareUrlLinkedin, 'linkedin', getWindowOptions());
        win.opener = null; // 2
    });


};

function instagram_slider() {

    new Splide('.instagramSlider', {
        type: 'slide',
        autoplay: false,
        perPage: 1,
        arrows: false,
        pagination: false,
        gap: 17,
        padding: { right: 30 },
        breakpoints: {
            767: {
                perPage: 1
            },
            991: {
                perPage: 2
            },
            1200: {
                perPage: 3
            },
            9999: {
                destroy: true
            },
        }
    }).mount();

}

let header = () => {

    let hamburger = document.getElementById('hamburger');
    let menuItems = document.querySelectorAll('#menu-menu a');

    gsap.set('.headerBar, .burgerContainer', { autoAlpha: 1 });

    hamburger.addEventListener('click', (e) => {

        e.preventDefault();

        if (document.body.classList.contains('menuOpened')) {
            document.body.classList.remove('menuOpened');
            gsap.to('.menu-menu-container', { autoAlpha: 0, duration: 0.2 });
        } else {
            document.body.classList.add('menuOpened');
            gsap.to('.menu-menu-container', { autoAlpha: 1, duration: 0.3 });
        }

        hamburger.setAttribute('aria-expanded', document.body.classList.contains('menuOpened'));

    });

    let logo = document.querySelector('.headerBar__logo');
    logo.addEventListener('click', () => {

        if (document.body.classList.contains('menuOpened')) {
            document.body.classList.remove('menuOpened');
            if (window.innerWidth < 1200) {
                gsap.to('.menu-menu-container', { autoAlpha: 0, duration: 0.2 });
            }
        }


    });

    forEach(menuItems, (item) => {

        item.addEventListener('click', () => {

            if (!item.parentElement.classList.contains('menu-item-has-children')) {
                document.body.classList.remove('menuOpened');
                if (window.innerWidth < 1200) {
                    gsap.to('.menu-menu-container', { autoAlpha: 0, duration: 0.2 });
                }
            }

        });

    });



    let mobileDrop = document.querySelectorAll('.menu-item-has-children > a');
    forEach(mobileDrop, (item) => {

        item.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();
            // if(e.target.classList.contains('menu-item-has-children')){
            item.parentElement.classList.toggle('openSubmenu');
            // }

        });

    });

    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st == 0) {
            document.body.classList.remove('scrollBottom');
            document.body.classList.remove('scrollTop');
        } else if (st > lastScrollTop) {
            if (!document.body.classList.contains('scrollBottom') && (!document.body.classList.contains('menuOpened'))) {
                document.body.classList.remove('scrollTop');
                document.body.classList.add('scrollBottom');
            }
        } else if (st < lastScrollTop && !document.body.classList.contains('menuOpened')) {
            if (!document.body.classList.contains('scrollTop')) {
                document.body.classList.remove('scrollBottom');
                document.body.classList.add('scrollTop');
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

};

//Define the request number
let ajax_id = 0;

function autocompleteEvent(e) {

}

let autoCompleteFields = () => {

    let fields = document.querySelectorAll('.singleField--autocomplete');

    document.addEventListener('click', (e) => {

        forEach(fields, (singleField) => {

            if (!singleField.classList.contains('singleField--singleComplete') && !singleField.contains(e.target) && singleField.classList.contains('inputShowFront')) {
                singleField.classList.remove('inputShowFront');
                gsap.set('.autocompleteList', { display: 'none' });
            }

        });

    });

    forEach(fields, (el) => {

        let list = el.querySelector('.autocompleteList');
        let input = el.querySelector('.valueAutocomplete');
        let currentValues = el.querySelector('.currentValueEntered');
        let realValue = el.querySelector('.realValue');
        let idValue = el.querySelector('#addressID');
        let action = el.getAttribute('data-action');
        let singleFill = el.classList.contains('singleField--singleComplete');


        currentValues.addEventListener('click', (e) => {

            if (e.target.nodeName == "SPAN") {
                let temp = e.target.innerHTML + ', ';
                realValue.value = realValue.value.replace(temp, '');
                e.target.remove();
                if (el.classList.contains('singleField--singleComplete')) {
                    el.classList.add('inputShowFront');
                    input.focus();
                }
                if ((realValue.value == '') && (input.classList.contains('beliggenhed'))) {
                    currentValues.innerHTML = 'Skriv postummer eller by – gerne flere';
                }
            } else {
                el.classList.add('inputShowFront');
                input.focus();
            }

            if (!el.classList.contains('singleField--singleComplete')) {
                if (realValue.value == "") {
                    el.classList.add('selectLocationUpper');
                } else {
                    el.classList.remove('selectLocationUpper');
                }
            }

        });


        input.addEventListener('input', (e) => {
            let value = input.value;

            if (value !== '') {
                let url = '';
                if (action == 'locations') {
                    url = admin.ajaxUrl + "?action=get_locations&search=" + value;
                } else {
                    url = "https://api.dataforsyningen.dk/" + action + "/autocomplete?q=" + value;
                }

                //Set the request number.
                ajax_id++;
                let local_ajax_id = ajax_id;

                ajax.get(
                    url, {},
                    function(data) {
                        //Check the local request number. If not matching, abort
                        if (local_ajax_id !== ajax_id) {
                            return false;
                        }
                        let html = '';
                        let json = JSON.parse(data);
                        if (action == "postnumre") {
                            if (el.classList.contains('singleField--autocompleteFull')) {
                                forEach(json, (code) => {
                                    html += "<li data-dawa-id=\""+code.adresse.id+"\">" + code.tekst + "</li>";
                                });
                            } else {
                                forEach(json, (code) => {
                                    html += "<li>" + code.postnummer.nr + "</li>";
                                });
                            }
                        } else if (action == "supplerendebynavne2") {
                            forEach(json, (code) => {
                                html += "<li>" + code.tekst + "</li>";
                            });
                        } else if (action == "adresser") {
                            forEach(json, (code) => {
                                html += "<li data-dawa-id=\""+code.adresse.id+"\">" + code.tekst + "</li>";
                            });
                        } else if (action == "locations") {
                            forEach(json, (code) => {
                                html += "<li data-id='" + code.label + "'>" + code.label + "</li>";
                            });
                        }

                        list.innerHTML = html;
                        if (html == '') {
                            gsap.set('.autocompleteList', { display: 'none' });
                        } else {
                            gsap.set(list, { display: 'block' });

                            forEach(list.querySelectorAll('li'), (singleLi) => {
                                singleLi.addEventListener('click', () => {
                                    let temp = '<span>' + singleLi.innerHTML + '</span>';
                                    if (action == 'locations') {
                                        if (!realValue.value) {
                                            currentValues.innerHTML = '';
                                        }
                                        currentValues.innerHTML += temp;
                                        realValue.value += singleLi.getAttribute('data-id') + ',';
                                    } else {
                                        if (singleFill) {
                                            currentValues.innerHTML = temp;
                                            realValue.value = singleLi.innerHTML;
                                            idValue.value = singleLi.getAttribute('data-dawa-id');
                                        } else {
                                            if (realValue.value == '') {
                                                currentValues.innerHTML = temp;
                                                realValue.value = singleLi.innerHTML + ', ';
                                            } else {
                                                currentValues.innerHTML += temp;
                                                realValue.value += singleLi.innerHTML + ', ';
                                            }
                                        }
                                    }

                                    el.classList.remove('inputShowFront');
                                    gsap.set('.autocompleteList', { display: 'none' });
                                    input.value = '';
                                });
                            });
                        }
                    }
                );

            } else {
                list.innerHTML = '';
                gsap.set('.autocompleteList', { display: 'none' });
            }

        });

    });

};

if (document.getElementById('propertySearch')) {
    //document.getElementById('propertySearch').addEventListener('input',propertySearch);
}
/*
function propertySearch(e){
    var input = e.target.value.toLowerCase();
    var cards = document.getElementsByClassName('singleBoligCard');
    var matches = 0;
    if(document.getElementById('searchPropertyNoMatches')) {
        document.getElementById('searchPropertyNoMatches').style.display = 'none';
    }
    forEach(cards, (card) =>{

       var address = card.getAttribute('data-address').toLowerCase();
       if(input){
           if(address.indexOf(input) > -1){
               card.style.display = 'block';
               matches++;
           }else{
               card.style.display = 'none';
           }
       }else{
           card.style.display = 'block';
           matches++;
       }
    });
    if(matches === 0){
        searchNoMatches();
    }
}*/

function searchNoMatches() {

    if (document.getElementById('searchPropertyNoMatches')) {
        document.getElementById('searchPropertyNoMatches').style.display = 'block';
    }

    var cards = document.getElementsByClassName('singleBoligCard');
    forEach(cards, (card) => {
        card.classList.remove('hiddenBoligCard');
    });
}
let width = window.innerWidth;
let lastScrollTop = 0;
/*
barba.use(barbaPrefetch);

barba.init({
	// debug: true,
	timeout: 5000,
	views: [

		{
			namespace: 'default',
			afterEnter: function afterEnter(data) {
				init();
			},
			beforeLeave: function enter(data){

			}

		},

	],
	transitions: [
		{
			name: 'default-transition',
			async leave(data) {
			    await defaultTransitionLeave(data.current.container);
			},
			async enter(data) {
				data.current.container.remove();
				await defaultTransitionEnter(data.next.container);
			}
		}
	]
});

barba.hooks.enter(({ current, next }) => {
    window.scrollTo(0, 0);
});
*/
function init(){
	
    change_menu();
	if(document.querySelector('.heroWrap')) hero_setup();
	if(document.getElementById('bolig')) bolig_setup();
	if(document.getElementById('share_post_widget')) setup_post_social();
	if(document.getElementById('kobertkartotekForm')) kobertkartotek_form_fn();
	if(document.getElementById('vurdering_form')) vurderingForm_form_fn();
	if(document.getElementById('skuffesalg_form')) skuffesalg_form_fn();
	if(document.getElementById('cookieBlock')) cookie_block();
	if(document.querySelector('.singleField--autocomplete')) autoCompleteFields();
	if(document.querySelector('.searchPropertyBlock__input')) searchProperties();
}
init();
header();
instagram_slider();

window.addEventListener('resize', change_menu, true);