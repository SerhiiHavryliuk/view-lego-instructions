(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["39735753"],{"0410":function(e,t,a){},"271a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sp_card-lesson-content col-3",attrs:{flat:"",bordered:""}},[a("q-card",{staticClass:"sp_card-lesson ",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-overline text-orange-9 sp_card-lesson-steps"},[e._v(e._s(e.card.steps))]),a("router-link",{staticClass:"sp_card-lesson-link",attrs:{to:e.card.link}},[a("q-img",{attrs:{src:e.card.img}}),a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs sp_card-lesson-title-wrap"},[a("div",{staticClass:"sp_card-lesson-id"},[e._v(" "+e._s(e.card.id))]),a("div",{staticClass:"sp_card-lesson-title"},[e._v(e._s(e.card.title))])])])],1)],1)],1)},r=[],i={name:"card_lesson component",props:["card"]},c=i,n=(a("7d53"),a("2877")),o=Object(n["a"])(c,s,r,!1,null,"880c5208",null);t["default"]=o.exports},"4bc8":function(e,t,a){},"6e53":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sp_header"},[a("div",{staticClass:"sp_header-content"},[a("h3",[e._v(e._s(e.title)+" ")]),a("p",{staticClass:"sp_header-description"},[e._v(e._s(e.description))])]),a("div",{staticClass:"sp_header-img"},[a("img",{attrs:{src:e.img,alt:""}})])])},r=[],i={name:"header component",props:["title","img","description"]},c=i,n=(a("8427"),a("2877")),o=Object(n["a"])(c,s,r,!1,null,"07a948f9",null);t["default"]=o.exports},"7d53":function(e,t,a){"use strict";var s=a("0410"),r=a.n(s);r.a},8427:function(e,t,a){"use strict";var s=a("4bc8"),r=a.n(s);r.a},"8b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md",staticStyle:{"margin-top":"-16px"}},[a("header_content",{attrs:{title:e.titlePage,img:e.titleImg}}),a("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[a("q-tabs",{staticClass:"text-primary",attrs:{"narrow-indicator":"",dense:"",align:"justify"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{ripple:!1,name:"semester_1",icon:"filter_1",label:"Семестр 1"}}),a("q-tab",{attrs:{ripple:!1,name:"semester_2",icon:"filter_2",label:"Семестр 2"}}),a("q-tab",{attrs:{ripple:!1,name:"additional_materials",icon:"view_module",label:"Додаткові матеріали"}})],1)],1),a("q-tab-panels",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"semester_1"}},[a("q-breadcrumbs",{staticClass:"blue-grey-8",staticStyle:{"font-size":"1.5rem"},scopedSlots:e._u([{key:"separator",fn:function(){return[a("q-icon",{attrs:{size:"1.5em",name:"chevron_right",color:"primary"}})]},proxy:!0}])},[a("q-breadcrumbs-el",{attrs:{label:"Перший семестр. Початковий рівень.",icon:"widgets"}})],1),a("div",[[a("div",{staticClass:"q-pa-md row items-start"},e._l(e.list_lessons_sem_1,(function(e){return a("card",{attrs:{card:e}})})),1)]],2)],1),a("q-tab-panel",{attrs:{name:"semester_2"}},[a("q-breadcrumbs",{staticClass:"blue-grey-8",staticStyle:{"font-size":"1.5rem"},scopedSlots:e._u([{key:"separator",fn:function(){return[a("q-icon",{attrs:{size:"1.5em",name:"chevron_right",color:"primary"}})]},proxy:!0}])},[a("q-breadcrumbs-el",{attrs:{label:"Другий семестр. Поглиблений рівень.",icon:"widgets"}})],1),a("div",[[a("div",{staticClass:"q-pa-md row items-start"},e._l(e.list_lessons_sem_2,(function(e){return a("card",{attrs:{card:e}})})),1)]],2)],1),a("q-tab-panel",{attrs:{name:"additional_materials"}},[a("div",{staticClass:"text-h6"},[e._v("Додаткові матеріали")]),[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"1000px"}},[a("q-toggle",{staticClass:"q-mb-md",attrs:{label:"Teachers mode"},on:{input:function(t){return e.SwitchOnTeacherMode()}},model:{value:e.teacherMode,callback:function(t){e.teacherMode=t},expression:"teacherMode"}}),a("q-dialog",{attrs:{persistent:""},model:{value:e.teacherModePasswordDialog,callback:function(t){e.teacherModePasswordDialog=t},expression:"teacherModePasswordDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Введіть пароль для доступу в Teachers Mode")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",type:"password",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkPassTeacherMode()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("q-banner",{directives:[{name:"show",rawName:"v-show",value:e.invalidPassMessage,expression:"invalidPassMessage"}],staticClass:"text-white bg-red"},[e._v("\n                  Пароль не вірний! Спробуйте ще раз! =)\n                ")]),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Закрити"},on:{click:function(t){return e.cancelTeacherMode()}}}),a("q-btn",{attrs:{flat:"",label:"OK"},on:{click:function(t){return e.checkPassTeacherMode()}}})],1)],1)],1),a("q-dialog",{model:{value:e.teacherMaterialsDialog,callback:function(t){e.teacherMaterialsDialog=t},expression:"teacherMaterialsDialog"}},[a("q-card",{staticClass:"spike-materials"},[a("q-card-section",{staticClass:"row items-center q-pb-none"},[a("div",{staticClass:"text-h6"},[e._v("Матеріали для викладача")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:function(t){return e.cancelTeacherMode()}}})],1),a("teacher_materials")],1)],1)],1)]],2)],1)],1)},r=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(i),n=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={computed:l({},Object(n["c"])("list_lessons_semester_1",["list_lessons_sem_1"]),{},Object(n["c"])("list_lessons_semester_2",["list_lessons_sem_2"])),data:function(){return{tab:"semester_1",titlePage:"LEGO MINDSTORMS Education EV3",titleImg:"statics/index/index.png",teacherMode:!1,teacherModePasswordDialog:!1,password:"",teacherMaterials:!1,invalidPassMessage:!1,teacherMaterialsDialog:!1}},mounted:function(){console.log("------------------------------------------------------------------------------------------------------"),console.log(this.$sem_1)},methods:{SwitchOnTeacherMode:function(){console.log("Serhii, toggle SwitchOnTeacherMode"),this.teacherMaterials?(this.teacherModePasswordDialog=!1,this.teacherMaterials=!1):this.teacherModePasswordDialog=!0},checkPassTeacherMode:function(){var e=this;console.log("Serhii, toggle SwitchOnTeacherMode"),this.$axios.get("https://developer-web-online-6d6a9.firebaseio.com/passTeacherMode.json").then((function(t){console.log("Ajax response!"),e.data=t.data,e.password===t.data?(console.log("Pass status OK"),e.teacherMaterials=!0,e.invalidPassMessage=!1,e.teacherModePasswordDialog=!1,e.password="",e.teacherMaterialsDialog=!0):(e.invalidPassMessage=!0,console.log("Pass status Invalid Pass"))})).catch((function(){e.$q.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))},cancelTeacherMode:function(){console.log("cancelTeacherMode()"),this.teacherMode=!1,this.invalidPassMessage=!1,this.password="",this.right=!1}},components:{header_content:a("6e53").default,card:a("271a").default,teacher_materials:a("bcc2").default}},p=d,u=a("2877"),m=Object(u["a"])(p,s,r,!1,null,null,null);t["default"]=m.exports},bcc2:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card-section",[[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"700px","min-width":"540px"}})]],2)},r=[],i={name:"Teacher materials component"},c=i,n=a("2877"),o=Object(n["a"])(c,s,r,!1,null,"44cae2ec",null);t["default"]=o.exports}}]);