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

            remove_hero_classes();
            document.querySelector('.boligPhotoGallery').classList.add('activeMainSlider');

            // remove_nav_classes();
            singleNavBilleder.classList.add('singleNav--active');

            // gsap.set('.boligHeroPlanNav', { display: 'none' });
            // gsap.set('.boligHeroGalleryNav', { display:'block' });
            gsap.to(window, { duration: 0.5, scrollTo: "#bolig" });
            // boligHero.classList.add('boligHero--activeNav');
            if (document.getElementById('boligVideo')) document.getElementById('boligVideo').pause();

        });
    }


    let singleNavPlan = document.getElementById('singleNavPlan');

    if (singleNavPlan) {
        singleNavPlan.addEventListener('click', (e) => {
            e.preventDefault();

            remove_hero_classes();
            document.querySelector('.boligPlanGallery').classList.add('activeMainSlider');

            // remove_nav_classes();
            singleNavPlan.classList.add('singleNav--active');

            // gsap.set('.boligHeroGalleryNav', { display:'none' });
            // gsap.set('.boligHeroPlanNav', { display:'block' });
            gsap.to(window, { duration: 0.5, scrollTo: "#bolig" });
            // boligHero.classList.add('boligHero--activeNav');
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
            'openHouseId':openhouse_form.querySelector('input[name="openHouseId"]').value,
            'openHouseStartTime':openhouse_form.querySelector('input[name="openHouseStartTime"]').value,
            'consentIdGlobal':openhouse_form.querySelector('input[name="consentIdGlobal"]').value,
            'caseNo': document.getElementById('caseNo').value,
            'shopNo': document.getElementById('shopNo').value,
        };

        gsap.to('#openHouseSignup .button', { autoAlpha: 0, duration: 0.2 });

        ajax.post(
            admin.ajaxUrl, {
                action: 'openhouse_submit',
                nonce: admin.nonce,
                data: JSON.stringify(data)
            },
            function(data) {
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