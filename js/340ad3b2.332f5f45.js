(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["340ad3b2"],{"4bc8":function(t,a,e){},"6e53":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sp_header"},[e("div",{staticClass:"sp_header-content"},[e("h3",[t._v(t._s(t.title)+" ")]),e("p",{staticClass:"sp_header-description"},[t._v(t._s(t.description))])]),e("div",{staticClass:"sp_header-img"},[e("img",{attrs:{src:t.img,alt:""}})])])},i=[],s={name:"header component",props:["title","img","description"]},r=s,c=(e("8427"),e("2877")),o=Object(c["a"])(r,n,i,!1,null,"07a948f9",null);a["default"]=o.exports},8427:function(t,a,e){"use strict";var n=e("4bc8"),i=e.n(n);i.a},b41f:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sp_lesson"},[e("div",{staticClass:"sp_btn-back-wrap"},[e("div",{staticClass:"sp_btn-back"},[e("q-btn",{attrs:{flat:"",color:"secondary",icon:"reply",label:"назад"},on:{click:function(a){return t.$router.back()}}})],1)]),e("header_content",{staticStyle:{background:"#263238"},attrs:{title:t.titlePage,img:t.titleImg,description:t.descriptionPage}}),e("div",{staticClass:"q-pa-md"},[e("q-btn",{staticClass:"q-mb-md",staticStyle:{width:"250px"},attrs:{loading:t.loading1,percentage:t.percentage1,color:"primary"},on:{click:function(a){return t.startComputing(1)}},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-gears",{staticClass:"on-left"}),t._v("\n        Оновлення...\n      ")]},proxy:!0}])},[t._v("\n      Оновити програму\n      ")]),[e("div",{staticClass:"q-mb-md",staticStyle:{"max-width":"450px",width:"100%"}},[e("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[e("q-expansion-item",{attrs:{"expand-icon-toggle":"","expand-separator":"",icon:"help_outline",label:"Підтримка та контакти",caption:""}},[e("q-card",[e("q-card-section",[e("p",[t._v(" Розробник програмного забезпечення - Сергій Гаврилюк!")]),e("p",[e("b",[t._v(" havryliuk.serhii@gmail.com ")])])])],1)],1)],1)],1)],[e("div",{staticClass:"q-mb-md",staticStyle:{"max-width":"450px",width:"100%"}},[e("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[e("q-expansion-item",{attrs:{"expand-icon-toggle":"","expand-separator":"",icon:"copyright",label:"Copyright",caption:""}},[e("q-card",[e("q-card-section",[e("p",[t._v('\n                  Дане програмне забезпечення є складовою частиною методичних матеріалів, що поширюються в мережі "Company Name" для забезпечення роботи викладачів за курсом Робототехныка Mindstorms. Воно містить матеріали для проведення занять з курсу Курс «Робототехніка Mindstorms.\n                ')]),e("p",[t._v('\n                  Всі матеріали захищені авторським правом відповідно до законодавства України і призначені для використання лише у "Company Name".\n                ')])])],1)],1)],1)],1)]],2)],1)},i=[],s={data:function(){return{name:"Settings",titlePage_en:"Settings.",titlePage_ukr:"Налаштування",titlePage:"Налаштування",titleImg:"",descriptionPage:"",urlDownloadProgram_1:"",urlDownloadProgram_2:"",loading1:!1,percentage1:0}},methods:{startComputing:function(t){var a=this;this["loading".concat(t)]=!0,this["percentage".concat(t)]=0,this["interval".concat(t)]=setInterval((function(){a["percentage".concat(t)]+=Math.floor(8*Math.random()+10),a["percentage".concat(t)]>=100&&(clearInterval(a["interval".concat(t)]),a["loading".concat(t)]=!1,document.location.reload())}),700)}},components:{header_content:e("6e53").default}},r=s,c=e("2877"),o=Object(c["a"])(r,n,i,!1,null,"84b0e57a",null);a["default"]=o.exports}}]);