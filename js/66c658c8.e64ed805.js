(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["66c658c8"],{"0410":function(t,s,a){},"271a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sp_card-lesson-content col-3",attrs:{flat:"",bordered:""}},[a("q-card",{staticClass:"sp_card-lesson ",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-overline text-orange-9 sp_card-lesson-steps"},[t._v(t._s(t.card.steps))]),a("router-link",{staticClass:"sp_card-lesson-link",attrs:{to:t.card.link}},[a("q-img",{attrs:{src:t.card.img}}),a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs sp_card-lesson-title-wrap"},[a("div",{staticClass:"sp_card-lesson-id"},[t._v(" "+t._s(t.card.id))]),a("div",{staticClass:"sp_card-lesson-title"},[t._v(t._s(t.card.title))])])])],1)],1)],1)},r=[],n={name:"card_lesson component",props:["card"]},c=n,i=(a("7d53"),a("2877")),l=Object(i["a"])(c,e,r,!1,null,"880c5208",null);s["default"]=l.exports},"4bc8":function(t,s,a){},"6e53":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sp_header"},[a("div",{staticClass:"sp_header-content"},[a("h3",[t._v(t._s(t.title)+" ")]),a("p",{staticClass:"sp_header-description"},[t._v(t._s(t.description))])]),a("div",{staticClass:"sp_header-img"},[a("img",{attrs:{src:t.img,alt:""}})])])},r=[],n={name:"header component",props:["title","img","description"]},c=n,i=(a("8427"),a("2877")),l=Object(i["a"])(c,e,r,!1,null,"07a948f9",null);s["default"]=l.exports},"7d53":function(t,s,a){"use strict";var e=a("0410"),r=a.n(e);r.a},8427:function(t,s,a){"use strict";var e=a("4bc8"),r=a.n(e);r.a},fbe1:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sp_lesson"},[a("div",{staticClass:"sp_btn-back-wrap"},[a("div",{staticClass:"sp_btn-back"},[a("q-btn",{attrs:{flat:"",color:"secondary",icon:"reply",label:"назад"},on:{click:function(s){return t.$router.back()}}})],1)]),a("header_content",{attrs:{title:t.titlePage,img:t.titleImg,description:t.descriptionPage}}),a("q-btn",{staticClass:"q-ma-md",attrs:{outline:"",icon:"system_update_alt",color:"primary",label:"Завантажити матеріали заняття",type:"a",href:t.urlDownloadProgram_1}}),a("q-btn",{staticClass:"q-ma-md",attrs:{outline:"",icon:"system_update_alt",color:"primary",label:"Завантажити матеріали заняття",type:"a",href:t.urlDownloadProgram_2}})],1)},r=[],n={data:function(){return{name:"Download",titlePage_en:"Robotics with Python.",titlePage_ukr:"Матеріали для завантаження",titlePage:"Матеріали для завантаження",titleImg:"",descriptionPage:"",urlDownloadProgram_1:"",urlDownloadProgram_2:""}},components:{header_content:a("6e53").default,card:a("271a").default}},c=n,i=a("2877"),l=Object(i["a"])(c,e,r,!1,null,"56c3a064",null);s["default"]=l.exports}}]);