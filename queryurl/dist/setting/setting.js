System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(e,t){var r={},i={};return{setters:[function(e){r.React=e.React},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=r},756:e=>{"use strict";e.exports=i}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var n={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(n),a.d(n,{__set_webpack_public_path__:()=>o,default:()=>i});var e=a(891);const t={_widgetLabel:"Query url params",selectMapWidget:"Select Map Widget:"};var r=a(756);function i(i){return e.React.createElement("div",{className:"widget-setting-js-api-widget-wrapper"},e.React.createElement(r.SettingSection,{className:"map-selector-section",title:i.intl.formatMessage({id:"selectMapWidget",defaultMessage:t.selectMapWidget})},e.React.createElement(r.MapWidgetSelector,{onSelect:e=>{i.onSettingChange({id:i.id,useMapWidgetIds:e})},useMapWidgetIds:i.useMapWidgetIds})))}function o(e){a.p=e}})(),n})())}}}));