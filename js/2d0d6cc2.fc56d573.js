(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d6cc2"],{"73a1":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-pa-md inv-lesson"},[l("q-btn",{staticClass:"sp_btn-close",attrs:{round:"",dense:"",flat:"",color:"red",icon:"close",label:""},on:{click:function(t){return e.$router.back()}}}),l("div",{staticClass:"q-pa-md ies-slider-container",on:{keyup:e.handleKeyup}},[l("q-carousel",{ref:"carousel",staticClass:"sp_carousel",attrs:{swipeable:"",fullscreen:e.fullscreen,"transition-prev":"jump-right","transition-next":"jump-left","control-color":"primary",padding:"",height:"750px"},on:{"update:fullscreen":function(t){e.fullscreen=t}},scopedSlots:e._u([{key:"control",fn:function(){return[l("q-carousel-control",{attrs:{position:"bottom-right",offset:[80,10]}},[l("q-btn",{attrs:{pqsh:"",round:"",dense:"",color:"white","text-color":"primary",icon:e.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){e.fullscreen=!e.fullscreen}}},[l("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[25,25]}},[l("strong",[e._v("На весь екран")])])],1)],1),l("q-carousel-control",{attrs:{position:"bottom-left",offset:[10,220]}},[l("q-btn",{staticStyle:{"font-size":"2.5rem"},attrs:{flat:"",push:"",round:"",dense:"",color:"primary","text-color":"blue",icon:"keyboard_arrow_left"},on:{click:e.eventClickPrevCarousel}},[l("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle",offset:[10,10]}},[l("strong",[e._v("Попередній слайд")])])],1)],1),l("q-carousel-control",{attrs:{position:"bottom-right",offset:[10,220]}},[l("q-btn",{staticStyle:{"font-size":"2.5rem"},attrs:{flat:"",push:"",round:"",dense:"",color:"primary","text-color":"blue",icon:"keyboard_arrow_right"},on:{click:e.eventClickNextCarousel}},[l("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle",offset:[10,10]}},[l("strong",[e._v("Наступний слайд")])])],1)],1)]},proxy:!0}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.totalSlides,(function(t,o){return l("q-carousel-slide",{attrs:{name:o,"img-src":e.urlFolder+e.nameSlide+t+e.typeImg}})})),1),[l("div",{staticClass:"q-pa-md"},[l("q-badge",{staticClass:"sp_slider-number",staticStyle:{"font-size":"1rem"},attrs:{color:"blue"}},[e._v("\n             "+e._s(e.valueSlider+1)+" / "+e._s(e.totalSlides)+"\n          ")]),l("q-slider",{attrs:{color:"blue",min:0,max:this.totalSlideForRange},on:{input:e.changeSlider},model:{value:e.valueSlider,callback:function(t){e.valueSlider=t},expression:"valueSlider"}})],1)]],2)],1)},s=[],r={data:function(){return{urlFolder:"statics/img/presentations/sem-2/lesson-2/",nameSlide:"slide-",typeImg:".PNG",totalSlides:39,totalSlideForRange:38,slider_range:0,slide:0,valueSlider:0,fullscreen:!1,urlDownloadProgram_1:""}},methods:{eventClickPrevCarousel:function(e){this.valueSlider>=1&&this.valueSlider--,this.changeSlider(this.valueSlider)},eventClickNextCarousel:function(e){this.valueSlider<this.totalSlides-1&&this.valueSlider++,this.changeSlider(this.valueSlider)},handleKeyup:function(e){},changeSlider:function(e){this.slide=e},eventNextPrevSlide:function(e){if(!e.target.className||"q-focus-helper"===e.target.className||"BODY"===e.target.nodeName)switch(e.keyCode){case 37:this.eventClickPrevCarousel();break;case 39:this.eventClickNextCarousel();break;default:}}},created:function(){window.addEventListener("keyup",this.eventNextPrevSlide)},beforeMount:function(){}},i=r,n=l("2877"),a=Object(n["a"])(i,o,s,!1,null,"feb20af8",null);t["default"]=a.exports}}]);