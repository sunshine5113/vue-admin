import{_ as u,d as F,o as E,c as e,B as C}from"./index.13b91343.js";const a=F({setup(){}}),t={class:"layout-container"},d=C("<h1 data-v-28de8743>\u8DEF\u7531\u83DC\u5355\u914D\u7F6E</h1><article data-v-28de8743><section data-v-28de8743><p data-v-28de8743>\u8DEF\u7531\u914D\u7F6E\u662F\u6574\u4E2A\u7CFB\u7EDF\u7684\u6838\u5FC3\u90E8\u5206\uFF0C\u6574\u4E2A\u67B6\u6784\u7684\u8BBE\u8BA1\u57FA\u4E8E\u52A8\u6001\u8DEF\u7531\u7684\u6982\u5FF5\uFF0C\u628A\u8DEF\u7531\u5206\u4E3A\u4E86<b data-v-28de8743>\u57FA\u7840\u8DEF\u7531</b>\uFF08\u5305\u62EC\u4E86404\u8DEF\u7531\u3001401\u8DEF\u7531\u3001\u767B\u5F55\u8DEF\u7531\uFF09+<b data-v-28de8743>\u9875\u9762\u8DEF\u7531</b>\uFF08\u6587\u6863\u8DEF\u7531\u3001\u9996\u9875\u3001\u7EC4\u4EF6\u3001\u9875\u9762\u7B49\u7B49\uFF09\u3002 \u57FA\u7840\u8DEF\u7531\u662F\u5728\u7CFB\u7EDF\u4E00\u8FDB\u5165\u5C31\u8FDB\u884C\u521D\u59CB\u5316\u597D\u7684\uFF0C\u800C\u9875\u9762\u8DEF\u7531\u662F\u5728\u7CFB\u7EDF\u767B\u5F55\u4E4B\u540E\u624D\u4F1A\u52A0\u5165\u5230\u9875\u9762\u4E2D\uFF0C\u6709\u6548\u5730\u675C\u7EDD\u4E86\u672A\u6388\u6743\u8BBF\u95EE\u7B49\u95EE\u9898\u3002</p><p data-v-28de8743>\u6240\u6709\u8DEF\u7531\u9700\u8981\u5173\u6CE8\u7684\u6838\u5FC3\u9875\u9762\u4E3A\uFF1A<b data-v-28de8743>router/index.ts</b>\uFF08js\u7248\u672C\u4E3Arouter/index.js\u6587\u4EF6\uFF09, \u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u9762\u5305\u542B\u4E86\u8DEF\u7531\u7684\u6240\u6709\u914D\u7F6E\uFF0C\u5305\u62EC\u4E86\u767B\u5F55\u62E6\u622A\u3001\u52A8\u6001\u8DEF\u7531\u6DFB\u52A0\u7684\u903B\u8F91\u7B49\u3002</p><p data-v-28de8743>\u5F53\u4F60\u9700\u8981\u7531\u540E\u53F0\u6765\u63A7\u5236\u8DEF\u7531\u7684\u65F6\u5019\uFF0C\u8FD9\u65F6\u5019\u4F60\u5C31\u53EF\u4EE5\u5148\u8BF7\u6C42\u540E\u53F0\u8DEF\u7531\u63A5\u53E3\uFF0C\u7136\u540E\u62FF\u540E\u53F0\u751F\u6210\u7684\u6743\u9650\u8DEF\u7531\u6570\u636E\u6765\u5BF9\u6BD4\u672C\u5730\u52A8\u6001\u8DEF\u7531<b data-v-28de8743>asyncRoutes\u53D8\u91CF</b>\uFF0C\u7136\u540E\u5373\u53EF\u751F\u6210\u4F60\u81EA\u5DF1\u7684\u8DEF\u7531\uFF0C\u5305\u62EC\u4E86\u81EA\u5B9A\u4E49\u540D\u79F0\u3001\u81EA\u5B9A\u4E49\u8DEF\u5F84 \u3001\u81EA\u5B9A\u4E49\u56FE\u6807\u3001\u81EA\u5B9A\u4E49\u8DEF\u7531\u5C42\u7EA7\u7B49\u3002</p><h3 data-v-28de8743>\u5E38\u7528\u914D\u7F6E\u53C2\u6570\u6E05\u5355</h3><ul data-v-28de8743><li data-v-28de8743>path: \u8DEF\u7531\u5730\u5740\uFF0C\u5FC5\u586B\u9879</li><li data-v-28de8743>component: \u4F7F\u7528\u7684\u7EC4\u4EF6\uFF0C\u5FC5\u586B\u9879</li><li data-v-28de8743>redirect: \u91CD\u5B9A\u5411\u5730\u5740\uFF0C\u975E\u5FC5\u586B</li><li data-v-28de8743>alwayShow: \u5E03\u5C14\u7C7B\u578B\uFF0C\u5F53\u5B50\u7EA7\u53EA\u6709\u4E00\u4E2A\u65F6\uFF0C\u662F\u5426\u5C55\u793A\u7236\u7EA7\u83DC\u5355\uFF0Ctrue\u8868\u793A\u603B\u662F\u5C55\u793A\uFF0Cfalse\u8868\u793A\u4E0D\u5C55\u793A\uFF0C\u9ED8\u8BA4\u4E3Afalse</li><li data-v-28de8743>meta: \u57FA\u7840\u5143\u6570\u636E\uFF0C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u62EC\u4E86\u4E0B\u5217\u5C5E\u6027 <ul data-v-28de8743><li data-v-28de8743>title: \u975E\u56FD\u9645\u5316\u7248\u672C\u4E3A<b data-v-28de8743>\u6807\u9898</b>\uFF0C\u56FD\u9645\u5316\u7248\u672C\u4E3A\u53EF\u4F9B<b data-v-28de8743>$t\u51FD\u6570</b>\u8C03\u7528\u7684<b data-v-28de8743>\u5BF9\u8C61\u5C42\u7EA7\u5B57\u7B26\u4E32</b>\uFF0C\u5FC5\u586B\u9879</li><li data-v-28de8743>icon: \u56FE\u6807\uFF0C\u975E\u5FC5\u586B</li><li data-v-28de8743>cache: \u5E03\u5C14\u7C7B\u578B\uFF0C\u662F\u5426\u5F00\u542F\u7F13\u5B58\u529F\u80FD\uFF0Ctrue\u8868\u793A\u5F00\u542F\uFF0Cfalse\u8868\u793A\u5173\u95ED\uFF0C\u9ED8\u8BA4\u4E3Afalse, \u975E\u5FC5\u586B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u5728\u4E8C\u7EA7\u83DC\u5355\u4E0A\u4F7F\u7528\uFF0C\u6682\u4E0D\u652F\u6301\u4E09\u7EA7\u53CA\u4E09\u7EA7\u4EE5\u4E0A\u83DC\u5355\u4F7F\u7528\uFF08\u793E\u533A\u96BE\u9898\uFF0C\u6709\u5F85\u89E3\u51B3\uFF09</li><li data-v-28de8743>\u81EA\u5B9A\u4E49\u5143\u6570\u636E\uFF0C\u7528\u4E8E\u5728\u5176\u5B83\u5B9A\u5236\u5316\u573A\u666F\u4F7F\u7528</li></ul></li><li data-v-28de8743>children: \u5B50\u8DEF\u7531\uFF08\u5982\u679C\u9700\u8981\u5B50\u8DEF\u7531\uFF0C\u7236\u7EA7\u7684comonent\u9700\u8981\u4E3ALayout\u7EC4\u4EF6/Menu\u7EC4\u4EF6\uFF08\u5728router/modules/menu.ts\u6587\u4EF6\u4E2D\u6709\u793A\u8303\uFF09/\u81EA\u5B9A\u4E49\u7236\u7EA7\u7EC4\u4EF6\uFF09</li></ul></section></article>",2),A=[d];function B(D,i,l,o,s,n){return E(),e("div",t,A)}var v=u(a,[["render",B],["__scopeId","data-v-28de8743"]]);export{v as default};
