(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{3554:function(t,s,i){},"6be2":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),i("div",{staticClass:"container"},[t._m(1),i("h3",{staticClass:"list-title-other"},[t._v("選擇房型")]),i("section",{staticClass:"list-scroll"},[i("a",{staticClass:"list-scroll-single",attrs:{href:"#"},on:{click:function(s){return t.scrollRoom(s,"single")}}},[t._m(2)]),i("a",{staticClass:"list-scroll-double",attrs:{href:"#"},on:{click:function(s){return t.scrollRoom(s,"double")}}},[t._m(3)])]),i("h3",{ref:"single",staticClass:"list-title-other"},[t._v("精選單人房")]),i("div",{staticClass:"list-all row"},[t._l(t.allRooms,function(s){return[1===s.primary.descriptionShort.GuestMin?i("figure",{key:s.id,staticClass:"list-all-item item col-md-6"},[i("div",{staticClass:"item-group",on:{click:function(i){return t.roomHandler(s.id)}}},[i("img",{staticClass:"item-group-pic",attrs:{src:s["rooms-detail"].imageUrl}}),t._m(4,!0)]),i("figcaption",[i("h4",{staticClass:"item-title"},[t._v(t._s(s["rooms-detail"].name))]),i("h4",{staticClass:"item-normal"},[t._v("\n              平日$ "+t._s(t._f("currency")(s["rooms-detail"].normalDayPrice))+"\n            ")]),i("h4",{staticClass:"item-holiday"},[t._v("\n              假日$ "+t._s(t._f("currency")(s["rooms-detail"].holidayPrice))+"\n            ")])])]):t._e()]})],2),i("h3",{ref:"double",staticClass:"list-title-other"},[t._v("精選雙人房")]),i("div",{staticClass:"list-all row"},[t._l(t.allRooms,function(s){return[2===s.primary.descriptionShort.GuestMin?i("figure",{key:s.id,staticClass:"list-all-item item col-md-6"},[i("div",{staticClass:"item-group",on:{click:function(i){return t.roomHandler(s.id)}}},[i("img",{staticClass:"item-group-pic",attrs:{src:s["rooms-detail"].imageUrl}}),t._m(5,!0)]),i("figcaption",[i("h4",{staticClass:"item-title"},[t._v(t._s(s["rooms-detail"].name))]),i("h4",{staticClass:"item-normal"},[t._v("\n              $ "+t._s(s["rooms-detail"].normalDayPrice)+"\n            ")]),i("h4",{staticClass:"item-holiday"},[t._v("\n              $ "+t._s(s["rooms-detail"].holidayPrice)+"\n            ")])])]):t._e()]})],2)])])},l=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"list-pic"},[i("div",{staticClass:"list-pic-bg"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("article",[i("h3",{staticClass:"list-title-other"},[t._v("客房介紹")]),i("p",{staticClass:"list-introduce"},[t._v("\n        全館74間房間內，提供多達65間大坪數的親子四人房間，空間寬敞、乾淨舒適、採光明亮、備品齊全、適合用做家族旅遊、團體旅遊。\n        房內採用大尺寸的平面液晶電視，浴室設計採用古典西洋風格類型，並且在客房內即可享用游泳池。\n      ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-scroll-item"},[i("div",{staticClass:"single-bg"}),i("h4",{staticClass:"single-word"},[t._v("Single")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-scroll-item"},[i("div",{staticClass:"double-bg"}),i("h4",{staticClass:"double-word"},[t._v("Double")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item-group-more"},[i("h4",{staticClass:"item-group-more-word"},[t._v("See More")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item-group-more"},[i("h4",{staticClass:"item-group-more-word"},[t._v("See More")])])}],a={data:function(){return{allRooms:[]}},methods:{roomHandler:function(t){this.$router.push("/room/".concat(t))},scrollRoom:function(t,s){t.preventDefault(),window.scrollTo({top:this.$refs[s].offsetTop,behavior:"smooth"})}},mounted:function(){var t=this;this.$bus.$emit("isLoading",!0),this.$http.get("".concat("https://guarded-castle-26873.herokuapp.com","/rooms")).then(function(s){t.allRooms=s.data.item,t.$bus.$emit("isLoading",!1)})}},o=a,r=(i("d7a2"),i("2877")),c=Object(r["a"])(o,e,l,!1,null,"4b1e83e7",null);s["default"]=c.exports},d7a2:function(t,s,i){"use strict";var e=i("3554"),l=i.n(e);l.a}}]);
//# sourceMappingURL=list.95377e7b.js.map