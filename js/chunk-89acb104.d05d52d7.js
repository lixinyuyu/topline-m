(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89acb104"],{"159b":function(t,e,r){var o=r("da84"),n=r("fdbc"),c=r("17c2"),i=r("9112");for(var a in n){var s=o[a],f=s&&s.prototype;if(f&&f.forEach!==c)try{i(f,"forEach",c)}catch(u){f.forEach=c}}},"17c2":function(t,e,r){"use strict";var o=r("b727").forEach,n=r("b301");t.exports=n("forEach")?function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},6586:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-avatar"},[r("van-nav-bar",{staticStyle:{color:"#fff"},attrs:{slot:"cover",border:!1,title:"个人头像","left-arrow":""},on:{"click-left":function(e){return t.$router.back()},"click-right":function(e){return t.$refs.file.click()}},slot:"cover",scopedSlots:t._u([{key:"right",fn:function(){return[r("van-icon",{attrs:{name:"ellipsis"}})]},proxy:!0}])}),r("van-image-preview",{attrs:{images:t.images,asyncClose:"",showIndex:!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),r("input",{ref:"file",attrs:{type:"file",hidden:"",accept:"image/*"},on:{change:t.onFileChange}}),r("van-popup",{staticStyle:{height:"100%","background-color":"#000"},attrs:{position:"bottom"},model:{value:t.isCropShow,callback:function(e){t.isCropShow=e},expression:"isCropShow"}},[t.isCropShow?r("img-cropper",{ref:"img-cropper",attrs:{src:t.cropImage}}):t._e(),r("div",{staticClass:"crop-bottom"},[r("span",{on:{click:function(e){t.isCropShow=!1}}},[t._v("取消")]),r("span",{on:{click:t.onCropConfirm}},[t._v("完成")])])],1)],1)},n=[],c=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("d62c")),i={name:"UserAvatar",components:{ImgCropper:c["a"]},props:{},data:function(){return{show:!0,images:[this.$route.query.src],isCropShow:!1,cropImage:""}},computed:{file:function(){return this.$refs.file}},watch:{},created:function(){},mounted:function(){},methods:{onCropConfirm:function(){},onFileChange:function(){var t=URL.createObjectURL(this.file.files[0]);this.cropImage=t,this.isCropShow=!0}}},a=i,s=(r("7be4"),r("2877")),f=Object(s["a"])(a,o,n,!1,null,"7d143b02",null);e["default"]=f.exports},"7be4":function(t,e,r){"use strict";var o=r("dd93"),n=r.n(o);n.a},ade3:function(t,e,r){"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return o}))},b64b:function(t,e,r){var o=r("23e7"),n=r("7b0b"),c=r("df75"),i=r("d039"),a=i((function(){c(1)}));o({target:"Object",stat:!0,forced:a},{keys:function(t){return c(n(t))}})},dbb4:function(t,e,r){var o=r("23e7"),n=r("83ab"),c=r("56ef"),i=r("fc6a"),a=r("06cf"),s=r("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,o=i(t),n=a.f,f=c(o),u={},p=0;while(f.length>p)r=n(o,e=f[p++]),void 0!==r&&s(u,e,r);return u}})},dd93:function(t,e,r){},e439:function(t,e,r){var o=r("23e7"),n=r("d039"),c=r("fc6a"),i=r("06cf").f,a=r("83ab"),s=n((function(){i(1)})),f=!a||s;o({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})}}]);
//# sourceMappingURL=chunk-89acb104.d05d52d7.js.map