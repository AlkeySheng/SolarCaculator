(function(t){function a(a){for(var i,s,o=a[0],c=a[1],l=a[2],u=0,g=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&g.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(a);while(g.length)g.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e46ed74a"}[t]+".js"}function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var i=new Promise((function(a,i){e=n[t]=[a,i]}));a.push(e[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=n[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,e[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var p=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"13ed":function(t,a,e){},"20ed":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);var i=e("2b0e"),n=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tabbar-item",{attrs:{icon:"balance-o",replace:"",to:"/"}},[t._v("光伏造价")]),a("van-tabbar-item",{attrs:{icon:"comment",replace:"",to:"/test"}},[t._v("说明")])],1),a("router-view")],1)},r=[],s=(e("a52c"),e("2ed4")),o=(e("537a"),e("ac28"));i["a"].use(o["a"]),i["a"].use(s["a"]);var c={data(){return{active:0}}},l=c,u=(e("c8f5"),e("2877")),p=Object(u["a"])(l,n,r,!1,null,null,null),g=p.exports,v=e("8c4f"),m=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("van-tabs",{model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[a("van-tab",{attrs:{title:"彩钢瓦"}}),a("van-tab",{attrs:{title:"混凝土"}}),a("van-tab",{attrs:{title:"光伏车棚"}})],1),a(t.currentComponent,{tag:"component"})],1)},d=[],h=(e("bda7"),e("5e46")),f=(e("da3c"),e("0b33")),y=function(){var t=this,a=t._self._c;return a("div",{staticClass:"price-calculator"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"-20px"}},[a("van-cell-group",{staticStyle:{"margin-bottom":"3px"},attrs:{inset:"",title:"参考标准"}},[a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"屋顶面积（平方米）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.roofArea,callback:function(a){t.roofArea=a},expression:"roofArea"}}),a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"屋顶高度（米）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.height,callback:function(a){t.height=a},expression:"height"}}),a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"装机规模（kWp）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.installCapacityN,callback:function(a){t.installCapacityN=a},expression:"installCapacityN"}})],1),a("span",{staticStyle:{"text-align":"center",color:"#969799","font-size":"13.8px"}},[t._v("基本配置 单瓦造价(元/W)")]),a("van-grid",{staticClass:"custom-grid",staticStyle:{"margin-top":"3px","margin-bottom":"-6px"},attrs:{border:!0,"column-num":4}},[a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("组件")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("CEE集采价格按照调价公式高于市场价较多，根据与入围供应商沟通得知，目前集采是按照竞价模式，各家报价基本按照市场价报。含税含运市场价约0.7元/W")}}},[t._v("0.7000")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("逆变器")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("华为110kW逆变器集采价格0.158元/W，50kW、30kW等其他规格按市场价走，分别约0.186元/W、0.2元/W。其他如阳光电源、固德威等基本按照市场价走，约0.16元/W，按照容配比1.2计算，约0.14元/W")}}},[t._v("0.1400")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("电缆")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("直流电缆选用PV1-F-1*4，交流电缆选用ZR-YJV22-3*95+1*50，逆变器9个，单个逆变器交流电缆用量100m")}}},[t._v("0.2542")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("支架")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("常规彩钢瓦场景")}}},[t._v("0.1000")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("施工（含接地、桥架等）")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("含接地、桥架等辅材，人工0.19左右，机械费0.02左右，材料费0.1左右")}}},[t._v("0.3000")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("通讯组网及视频监控系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0225")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("云监控系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("基础功能、测点调试")}}},[t._v("0.0333")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("清洗消防系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("水管")}}},[t._v("0.0023")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("设计费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0300")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("荷载验算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0167")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("设计评审费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0007")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("建设管理费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.1034")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("监理费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0323")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("结算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0088")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("决算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0131")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("总计")]),a("van-tag",{attrs:{type:"danger",round:""},on:{click:function(a){return t.showPriceToast("基本配置单价总计")}}},[t._v(t._s(t.baseP.toFixed(4)))])],1)],1),a("van-cell-group",{staticStyle:{"margin-bottom":"10px","padding-top":"-2px","margin-top":"0px"},attrs:{title:"可选配置 单瓦造价(元/W)"}},[a("van-cell",{staticStyle:{padding:"5px"},attrs:{center:""}},[a("van-radio-group",{staticClass:"radio-group",attrs:{direction:"horizontal"},model:{value:t.voltageAccess,callback:function(a){t.voltageAccess=a},expression:"voltageAccess"}},[a("van-radio",{attrs:{name:t.lowVoltageAccess,"checked-color":"#07c160"},on:{click:function(a){t.totalPrice=null}}},[t._v("低压接入"),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.lowVoltageAccessMessage)}}},[t._v(t._s(t.lowVoltageAccess.toFixed(4)))])],1),a("van-radio",{attrs:{name:t.highVoltageAccess,"checked-color":"#07c160"},on:{click:function(a){t.totalPrice=null}}},[t._v("高压接入"),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.highVoltageAccessMessage)}}},[t._v(t._s(t.highVoltageAccess.toFixed(4))+" ")])],1)],1)],1),a("van-cell",{staticClass:"custom-cell",staticStyle:{padding:"5px"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-switch",{staticStyle:{"margin-right":"20px"},attrs:{size:"22","active-color":"#07c160"},on:{change:function(a){t.totalPrice=null}},model:{value:t.roofRenewal,callback:function(a){t.roofRenewal=a},expression:"roofRenewal"}})]},proxy:!0},{key:"title",fn:function(){return[a("div",{staticClass:"title-container"},[a("span",{staticClass:"custom-title",staticStyle:{"margin-left":"-7em"}},[t._v("屋面换新 ")]),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.roofRenewalM)}}},[t._v(t._s(t.roofRenewalP.toFixed(4)))])],1)]},proxy:!0}])}),a("van-cell",{staticStyle:{padding:"5px"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-switch",{staticStyle:{"margin-right":"20px"},attrs:{size:"22","active-color":"#07c160"},on:{change:function(a){t.totalPrice=null}},model:{value:t.roofStrengthening,callback:function(a){t.roofStrengthening=a},expression:"roofStrengthening"}})]},proxy:!0},{key:"title",fn:function(){return[a("span",{staticClass:"custom-title",staticStyle:{"margin-left":"-7em"}},[t._v("加固费用 ")]),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.roofStrengtheningM)}}},[t._v(t._s(t.roofStrengtheningP.toFixed(4)))])]},proxy:!0}])}),a("van-cell",{staticStyle:{padding:"5px"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-switch",{staticStyle:{"margin-right":"20px"},attrs:{size:"22","active-color":"#07c160"},on:{change:function(a){t.totalPrice=null}},model:{value:t.waterproofing,callback:function(a){t.waterproofing=a},expression:"waterproofing"}})]},proxy:!0},{key:"title",fn:function(){return[a("span",{staticClass:"custom-title",staticStyle:{"margin-left":"-7em"}},[t._v("防水费用 ")]),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.waterproofingM)}}},[t._v(t._s(t.waterproofingP.toFixed(4)))])]},proxy:!0}])})],1),a("van-button",{attrs:{type:"primary",block:"",round:""},on:{click:t.calculatePrice}},[t._v("计算造价")]),t.totalPrice?a("div",{staticClass:"result"},[a("van-submit-bar",{staticClass:"custom-submit-bar",attrs:{disabled:"",price:t.totalPrice,"suffix-label":"万元","button-color":"white"}})],1):t._e()],1)])},_=[],b=(e("0ec5"),e("21ab")),w=(e("3df5"),e("2830")),k=(e("b000"),e("1a23")),P=(e("c194"),e("7744")),C=(e("e7e5"),e("d399")),x=(e("5f1a"),e("a3e2")),S=(e("66b9"),e("b650")),A=(e("be39"),e("efa0")),T=(e("0500"),e("4feb")),V=(e("0653"),e("34e9")),W=(e("be7f"),e("565f")),M=(e("5246"),e("6b41")),j=(e("a44c"),e("e27c")),O=(e("4ddd"),e("9f14"));i["a"].use(O["a"]),i["a"].use(j["a"]),i["a"].use(M["a"]),i["a"].use(W["a"]),i["a"].use(V["a"]),i["a"].use(T["a"]),i["a"].use(A["a"]),i["a"].use(S["a"]),i["a"].use(x["a"]),i["a"].use(C["a"]),i["a"].use(P["a"]),i["a"].use(k["a"]),i["a"].use(w["a"]),i["a"].use(b["a"]);var F={name:"Home",components:{},methods:{showPriceToast(t){Object(C["a"])({message:t,duration:2e3,position:"bottom"})},showActionSheet(t,a){this.show=!0,this.currentActionSheetTitle=t,this.currentActionSheetComponent=a},calculatePrice(){const t=this.installCapacity*this.baseP;let a=0;this.voltageAccess&&(a+=this.installCapacity*this.voltageAccess),this.roofRenewal&&(a+=this.installCapacity*this.roofRenewalP),this.roofStrengthening&&(a+=this.installCapacity*this.roofStrengtheningP),this.waterproofing&&(a+=this.installCapacity*this.waterproofingP),this.totalPrice=t+a}},data(){return{roofArea:"10000",height:"15",installCapacity:12e3,installCapacityN:1200,baseP:1.757188878,lowVoltageAccess:.04333333,lowVoltageAccessMessage:"低压并网柜 400*2+200*1",highVoltageAccess:1.29166666666667,highVoltageAccessMessage:"价格按河南地区考虑，若高压接入，需配备1600kVA变压器以及二次设备,按高压就近接入。若项目在其他区域，具体造价一事一议",voltageAccess:.04333333,roofRenewal:!1,roofRenewalP:.666666666666667,roofRenewalM:"参照平芝项目彩钢瓦屋面换新费用，约80元/平方，寿命可达25年",roofStrengthening:!1,roofStrengtheningP:.18,roofStrengtheningM:"参照平芝项目，各场景加固方案不同费用差别较大，若涉及加固，一事一议",waterproofing:!1,waterproofingP:.458333333333333,waterproofingM:"5/10/20年，35/55/95元/平方米/，取10年计。",totalPrice:null,active:0,show:!1,currentActionSheetTitle:"",currentActionSheetComponent:""}}},R=F,N=(e("88ba"),Object(u["a"])(R,y,_,!1,null,"57858527",null)),z=N.exports,E=function(){var t=this,a=t._self._c;return a("div",{staticClass:"price-calculator"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"-20px"}},[a("van-cell-group",{staticStyle:{"margin-bottom":"3px"},attrs:{inset:"",title:"参考标准"}},[a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"屋顶面积（平方米）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.roofArea,callback:function(a){t.roofArea=a},expression:"roofArea"}}),a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"屋顶高度（米）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.height,callback:function(a){t.height=a},expression:"height"}}),a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"装机规模（kWp）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.installCapacityN,callback:function(a){t.installCapacityN=a},expression:"installCapacityN"}})],1),a("span",{staticStyle:{"text-align":"center",color:"#969799","font-size":"13.8px"}},[t._v("基本配置 单瓦造价(元/W)")]),a("van-grid",{staticClass:"custom-grid",staticStyle:{"margin-top":"8px","margin-bottom":"0px"},attrs:{border:!0,"column-num":4}},[a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("组件")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("CEE集采价格按照调价公式高于市场价较多，根据与入围供应商沟通得知，目前集采是按照竞价模式，各家报价基本按照市场价报。含税含运市场价约0.7元/W")}}},[t._v("0.7000")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("逆变器")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("华为110kW逆变器集采价格0.158元/W，50kW、30kW等其他规格按市场价走，分别约0.186元/W、0.2元/W。其他如阳光电源、固德威等基本按照市场价走，约0.16元/W，按照容配比1.2计算，约0.14元/W")}}},[t._v("0.1400")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("电缆")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("直流电缆选用PV1-F-1*4，交流电缆选用ZR-YJV22-3*95+1*50，逆变器8个，单个逆变器交流电缆用量50m")}}},[t._v("0.1800")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("支架")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("常规混凝土配重方式安装，特殊场景光伏棚形式根据具体情况一事一议")}}},[t._v("0.2600")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("施工（含接地、桥架等）")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("含接地、桥架等辅材，人工0.2左右，机械费0.04左右，材料费0.15左右")}}},[t._v("0.3900")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("通讯组网及视频监控系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0270")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("云监控系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("基础功能、测点调试")}}},[t._v("0.0400")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("清洗消防系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("水管、水泵")}}},[t._v("0.0027")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("设计费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0300")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("荷载验算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0800")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("设计评审费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0007")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("建设管理费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.1392")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("监理费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0436")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("结算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0084")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("决算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0125")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("总计")]),a("van-tag",{attrs:{type:"danger",round:""},on:{click:function(a){return t.showPriceToast("基本配置单价总计")}}},[t._v(t._s(t.baseP.toFixed(4)))])],1)],1),a("van-cell-group",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"可选配置 单瓦造价(元/W)"}},[a("van-cell",{staticStyle:{padding:"10px"},attrs:{center:""}},[a("van-radio-group",{staticClass:"radio-group",attrs:{direction:"horizontal"},model:{value:t.voltageAccess,callback:function(a){t.voltageAccess=a},expression:"voltageAccess"}},[a("van-radio",{attrs:{name:t.lowVoltageAccess,"checked-color":"#07c160"},on:{click:function(a){t.totalPrice=null}}},[t._v("低压接入"),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.lowVoltageAccessMessage)}}},[t._v(t._s(t.lowVoltageAccess.toFixed(4)))])],1),a("van-radio",{attrs:{name:t.highVoltageAccess,"checked-color":"#07c160"},on:{click:function(a){t.totalPrice=null}}},[t._v("高压接入"),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.highVoltageAccessMessage)}}},[t._v(t._s(t.highVoltageAccess.toFixed(4))+" ")])],1)],1)],1),a("van-cell",{scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-switch",{staticStyle:{"margin-right":"20px"},attrs:{size:"24","active-color":"#07c160"},on:{change:function(a){t.totalPrice=null}},model:{value:t.waterproofing,callback:function(a){t.waterproofing=a},expression:"waterproofing"}})]},proxy:!0},{key:"title",fn:function(){return[a("span",{staticClass:"custom-title",staticStyle:{"margin-left":"-7em"}},[t._v("防水费用 ")]),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.waterproofingM)}}},[t._v(t._s(t.waterproofingP.toFixed(4)))])]},proxy:!0}])})],1),a("van-button",{attrs:{type:"primary",block:"",round:""},on:{click:t.calculatePrice}},[t._v("计算造价")]),t.totalPrice?a("div",{staticClass:"result"},[a("van-submit-bar",{staticClass:"custom-submit-bar",attrs:{disabled:"",price:t.totalPrice,"suffix-label":"万元","button-color":"white"}})],1):t._e()],1)])},H=[];i["a"].use(O["a"]),i["a"].use(j["a"]),i["a"].use(M["a"]),i["a"].use(W["a"]),i["a"].use(V["a"]),i["a"].use(T["a"]),i["a"].use(A["a"]),i["a"].use(S["a"]),i["a"].use(x["a"]),i["a"].use(C["a"]),i["a"].use(P["a"]),i["a"].use(k["a"]),i["a"].use(w["a"]),i["a"].use(b["a"]);var J={name:"Home",components:{},methods:{showPriceToast(t){Object(C["a"])({message:t,duration:2e3,position:"bottom"})},showActionSheet(t,a){this.show=!0,this.currentActionSheetTitle=t,this.currentActionSheetComponent=a},calculatePrice(){const t=this.installCapacity*this.baseP;let a=0;this.voltageAccess&&(a+=this.installCapacity*this.voltageAccess),this.waterproofing&&(a+=this.installCapacity*this.waterproofingP),this.totalPrice=t+a}},data(){return{roofArea:"10000",height:"30 (4层)",installCapacity:1e4,installCapacityN:1e3,baseP:2.05408163,lowVoltageAccess:.049,lowVoltageAccessMessage:"低压并网柜 400*2+100*1",highVoltageAccess:1.55,highVoltageAccessMessage:"价格按河南地区考虑，若高压接入，需配备1600kVA变压器以及二次设备,按高压就近接入。若项目在其他区域，具体造价一事一议。",voltageAccess:.049,roofRenewal:!1,roofRenewalP:.666666666666667,roofRenewalM:"参照平芝项目彩钢瓦屋面换新费用，约80元/平方，寿命可达25年",roofStrengthening:!1,roofStrengtheningP:.18,roofStrengtheningM:"参照平芝项目，各场景加固方案不同费用差别较大，若涉及加固，一事一议",waterproofing:!1,waterproofingP:.55,waterproofingM:"5/10/20年，35/55/95元/平方米/，取10年计。",totalPrice:null,active:0,show:!1,currentActionSheetTitle:"",currentActionSheetComponent:""}}},Y=J,Z=(e("6d95"),Object(u["a"])(Y,E,H,!1,null,"7213b519",null)),G=Z.exports,L=function(){var t=this,a=t._self._c;return a("div",{staticClass:"price-calculator"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"-20px"}},[a("van-cell-group",{staticStyle:{"margin-bottom":"3px"},attrs:{inset:"",title:"参考标准"}},[a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"屋顶面积（平方米）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.roofArea,callback:function(a){t.roofArea=a},expression:"roofArea"}}),a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"车位标准","label-width":"12em","input-align":"right",readonly:""},model:{value:t.height,callback:function(a){t.height=a},expression:"height"}}),a("van-field",{staticStyle:{padding:"3px"},attrs:{label:"装机规模（kWp）","label-width":"12em","input-align":"right",readonly:""},model:{value:t.installCapacityN,callback:function(a){t.installCapacityN=a},expression:"installCapacityN"}})],1),a("span",{staticStyle:{"text-align":"center",color:"#969799","font-size":"13.8px"}},[t._v("基本配置 单瓦造价(元/W)")]),a("van-grid",{staticClass:"custom-grid",staticStyle:{"margin-top":"8px","margin-bottom":"0px"},attrs:{border:!0,"column-num":4}},[a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("组件")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("CEE集采价格按照调价公式高于市场价较多，根据与入围供应商沟通得知，目前集采是按照竞价模式，各家报价基本按照市场价报。含税含运市场价约0.7元/W")}}},[t._v("0.7000")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("逆变器")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("华为110kW逆变器集采价格0.158元/W，50kW、30kW等其他规格按市场价走，分别约0.186元/W、0.2元/W。其他如阳光电源、固德威等基本按照市场价走，约0.16元/W，按照容配比1.2计算，约0.14元/W")}}},[t._v("0.1400")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("电缆")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("直流电缆选用PV1-F-1*4，交流电缆选用ZR-YJV22-3*95+1*50，逆变器10个，单个逆变器交流电缆用量50m")}}},[t._v("0.1577")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("支架")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("常规家用汽车车位，常规型钢结构车棚")}}},[t._v("1.2000")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("施工（含接地、桥架等）")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("含接地、桥架等辅材，人工0.19左右，机械费0.02左右，材料费0.1左右")}}},[t._v("0.3400")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("通讯组网及视频监控系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0238")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("云监控系统")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("基础功能、测点调试")}}},[t._v("0.0308")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("设计费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0300")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("设计评审费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0007")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("建设管理费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.1378")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("监理费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0431")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("结算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0094")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("决算费")]),a("van-tag",{attrs:{type:"primary",round:""},on:{click:function(a){return t.showPriceToast("无说明")}}},[t._v("0.0140")])],1),a("van-grid-item",{staticClass:"custom-grid-item"},[a("span",[t._v("总计")]),a("van-tag",{attrs:{type:"danger",round:""},on:{click:function(a){return t.showPriceToast("基本配置单价总计")}}},[t._v(t._s(t.baseP.toFixed(4)))])],1)],1),a("van-cell-group",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"可选配置 单瓦造价(元/W)"}},[a("van-cell",{staticStyle:{padding:"10px"},attrs:{center:""}},[a("van-radio-group",{staticClass:"radio-group",attrs:{direction:"horizontal"},model:{value:t.voltageAccess,callback:function(a){t.voltageAccess=a},expression:"voltageAccess"}},[a("van-radio",{attrs:{name:t.lowVoltageAccess,"checked-color":"#07c160"},on:{click:function(a){t.totalPrice=null}}},[t._v("低压接入"),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.lowVoltageAccessMessage)}}},[t._v(t._s(t.lowVoltageAccess.toFixed(4)))])],1),a("van-radio",{attrs:{name:t.highVoltageAccess,"checked-color":"#07c160"},on:{click:function(a){t.totalPrice=null}}},[t._v("高压接入"),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.highVoltageAccessMessage)}}},[t._v(t._s(t.highVoltageAccess.toFixed(4))+" ")])],1)],1)],1),a("van-cell",{scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-switch",{staticStyle:{"margin-right":"20px"},attrs:{size:"24","active-color":"#07c160"},on:{change:function(a){t.totalPrice=null}},model:{value:t.roofStrengthening,callback:function(a){t.roofStrengthening=a},expression:"roofStrengthening"}})]},proxy:!0},{key:"title",fn:function(){return[a("span",{staticClass:"custom-title",staticStyle:{"margin-left":"-7em"}},[t._v("地面硬化 ")]),a("van-tag",{attrs:{mark:"",type:"primary"},on:{click:function(a){return t.showPriceToast(t.roofStrengtheningM)}}},[t._v(t._s(t.roofStrengtheningP.toFixed(4)))])]},proxy:!0}])})],1),a("van-button",{attrs:{type:"primary",block:"",round:""},on:{click:t.calculatePrice}},[t._v("计算造价")]),t.totalPrice?a("div",{staticClass:"result"},[a("van-submit-bar",{staticClass:"custom-submit-bar",attrs:{disabled:"",price:t.totalPrice,"suffix-label":"万元","button-color":"white"}})],1):t._e()],1)])},q=[];i["a"].use(O["a"]),i["a"].use(j["a"]),i["a"].use(M["a"]),i["a"].use(W["a"]),i["a"].use(V["a"]),i["a"].use(T["a"]),i["a"].use(A["a"]),i["a"].use(S["a"]),i["a"].use(x["a"]),i["a"].use(C["a"]),i["a"].use(P["a"]),i["a"].use(k["a"]),i["a"].use(w["a"]),i["a"].use(b["a"]);var $={name:"Home",components:{},methods:{showPriceToast(t){Object(C["a"])({message:t,duration:2e3,position:"bottom"})},showActionSheet(t,a){this.show=!0,this.currentActionSheetTitle=t,this.currentActionSheetComponent=a},calculatePrice(){const t=this.installCapacity*this.baseP;let a=0;this.voltageAccess&&(a+=this.installCapacity*this.voltageAccess),this.roofStrengthening&&(a+=this.installCapacity*this.roofStrengtheningP),this.totalPrice=t+a}},data(){return{roofArea:"10000",height:"家用汽车车位",installCapacity:13e3,installCapacityN:1300,baseP:2.82730267,lowVoltageAccess:.04230769,lowVoltageAccessMessage:"低压并网柜 400*2+300*1",highVoltageAccess:1.21538462,highVoltageAccessMessage:"价格按河南地区考虑，若高压接入，需配备1600kVA变压器以及二次设备,按高压就近接入。若项目在其他区域，具体造价一事一议",voltageAccess:.04230769,roofStrengthening:!1,roofStrengtheningP:.61538462,roofStrengtheningM:"地面硬化参考价80元/㎡",totalPrice:null,active:0,show:!1,currentActionSheetTitle:"",currentActionSheetComponent:""}}},B=$,D=(e("631d"),Object(u["a"])(B,L,q,!1,null,"cb4376ba",null)),I=D.exports;i["a"].use(f["a"]),i["a"].use(h["a"]);var K={name:"Home",components:{CGW:z,HNT:G,GFCP:I},methods:{},computed:{currentComponent(){return this.components[this.activeTab]}},data(){return{activeTab:0,components:[z,G,I]}}},Q=K,U=(e("9213"),Object(u["a"])(Q,m,d,!1,null,null,null)),X=U.exports,tt=function(){var t=this,a=t._self._c;return a("div",{staticClass:"about-page"},[a("div",{staticClass:"content",staticStyle:{"text-align":"left"}},[a("van-cell-group",[a("van-cell",{attrs:{title:"应用名称",value:"光伏电站参考造价"}}),a("van-cell",{attrs:{title:"版本",value:"1.0.0"}}),a("van-cell",{attrs:{title:"联系我",value:"alkeysheng@gmail.com"}}),a("van-cell",{attrs:{title:"版权所有",value:"© 2025"}})],1),t._m(0)],1)])},at=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"description"},[a("h3",[t._v("应用介绍")]),a("p",[t._v(" 这是一个用于计算光伏电站参考造价的应用。根据预设的屋顶面积、装机规模，可以快速获取相应光伏电站的估算造价。 ")]),a("p",[t._v(" 本应用基于参考价格和标准配置进行计算，实际造价可能会因项目具体情况而有所不同。 ")])])}],et={name:"About"},it=et,nt=(e("efdc"),Object(u["a"])(it,tt,at,!1,null,"0a3a0748",null)),rt=nt.exports;i["a"].use(v["a"]);const st=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:()=>e.e("about").then(e.bind(null,"f820"))},{path:"/test",name:"test",component:rt}],ot=new v["a"]({routes:st});var ct=ot;i["a"].config.productionTip=!1,new i["a"]({router:ct,render:t=>t(g)}).$mount("#app")},"631d":function(t,a,e){"use strict";e("13ed")},"6d95":function(t,a,e){"use strict";e("dec6")},"70c4":function(t,a,e){},8620:function(t,a,e){},"88ba":function(t,a,e){"use strict";e("20ed")},"8a43":function(t,a,e){},9213:function(t,a,e){"use strict";e("8a43")},c8f5:function(t,a,e){"use strict";e("8620")},dec6:function(t,a,e){},efdc:function(t,a,e){"use strict";e("70c4")}});
//# sourceMappingURL=app.a3bd6f85.js.map