System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/list-tree","jimu-ui/basic/item-selector","jimu-core/react"],(function(e,t){var a={},n={},r={},o={},s={},i={};return{setters:[function(e){a.Immutable=e.Immutable,a.React=e.React,a.classNames=e.classNames,a.css=e.css,a.getAppStore=e.getAppStore,a.i18n=e.i18n,a.jsx=e.jsx},function(e){n.Button=e.Button,n.Checkbox=e.Checkbox,n.Link=e.Link,n.Switch=e.Switch,n.TextInput=e.TextInput,n.defaultMessages=e.defaultMessages},function(e){r.SettingRow=e.SettingRow,r.SettingSection=e.SettingSection},function(e){o.List=e.List,o.TreeItemActionType=e.TreeItemActionType},function(e){s.ItemCategory=e.ItemCategory},function(e){i.useCallback=e.useCallback}],execute:function(){e((()=>{var e={371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},357:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6ZM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1Zm0 3V1H5v2h6Zm1.895 1h-9.79l.8 11h8.19l.8-11Z" fill="#000"></path></svg>'},397:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-7.676 2.228H7.34c-.213-1.138.621-2.13 1.375-3.025C9.28 6.532 9.8 5.914 9.8 5.328 9.8 4.5 9.2 3.9 7.976 3.9c-.816 0-1.572.36-2.268 1.092l-.648-.6C5.852 3.552 6.788 3 8.096 3c1.692 0 2.772.864 2.772 2.244 0 .864-.652 1.628-1.3 2.387-.71.831-1.413 1.655-1.244 2.597Zm.3 2.172c0 .48-.348.792-.768.792-.432 0-.78-.312-.78-.792 0-.48.348-.804.78-.804.42 0 .768.324.768.804Z" fill="#000"></path></svg>'},891:e=>{"use strict";e.exports=a},315:e=>{"use strict";e.exports=i},726:e=>{"use strict";e.exports=n},756:e=>{"use strict";e.exports=r},878:e=>{"use strict";e.exports=s},587:e=>{"use strict";e.exports=o}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var c={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(c),l.d(c,{default:()=>k});var e=l(891),t=l(726),a=l(756);const n={wayOfAddingData:"Way of adding data",selectFromAccount:"Select from account",inputUrl:"Input URL",uploadFiles:"Upload files",emptyListMessage:"Empty list message",defaultPlaceholderText:"There is currently no added data.",curateACollection:"Curate a collection"};class r{constructor(t){this.db=null,this.closed=!1,this.dbName=function(t){var a,n;return`exb-${(null===(a=window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(n=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===n?void 0:n.appId:(0,e.getAppStore)().getState().appId}-add-data-${t}-cache`}(t),this.storeName="added-data"}init(){return indexedDB?Promise.resolve().then((()=>{const e=indexedDB.open(this.dbName);return e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(this.storeName)||t.createObjectStore(this.storeName)},o(e)})).then((e=>{this.closed?e.close():this.db=e})):Promise.reject()}initialized(){return null!=this.db}close(){this.db&&(this.db.close(),this.db=null),this.closed=!0}put(e,t){return null==this.db?Promise.reject("indexedb:not-initialized"):o(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(t,e)).then()}putAll(e){if(null==this.db)return Promise.reject("indexedb:not-initialized");const t=this.db.transaction([this.storeName],"readwrite");return e.forEach((e=>{t.objectStore(this.storeName).put(e.value,e.key)})),s(t)}get(e){return null==this.db?Promise.reject("indexedb:not-initialized"):o(this.db.transaction([this.storeName],"readonly").objectStore(this.storeName).get(e))}getAll(){return null==this.db?Promise.reject("indexedb:not-initialized"):o(this.db.transaction([this.storeName],"readonly").objectStore(this.storeName).getAll())}delete(e){return null==this.db?Promise.reject("indexedb:not-initialized"):o(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(e))}deleteAll(e){if(null==this.db)return Promise.reject("indexedb:not-initialized");const t=this.db.transaction([this.storeName],"readwrite");return e.forEach((e=>{t.objectStore(this.storeName).delete(e)})),s(t)}clear(){return null==this.db?Promise.reject("indexedb:not-initialized"):o(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).clear())}destroy(){this.db&&this.db.deleteObjectStore(this.storeName),this.close()}}function o(e){return new Promise(((t,a)=>{"done"===e.readyState?null!=e.error?a(e.error):t(e.result):(e.onsuccess=()=>{t(e.result)},e.onerror=()=>{a(e.error)})}))}function s(e){return new Promise(((t,a)=>{e.oncomplete=()=>{t()},e.onerror=()=>{a(e.error)},e.onabort=()=>{a(e.error)}}))}var i=l(587),d=l(878),m=l(397),u=l.n(m);const g=t=>{const a=window.SVG,{className:n}=t,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",n);return a?e.React.createElement(a,Object.assign({className:o,src:u()},r)):e.React.createElement("svg",Object.assign({className:o},r))};var p=l(357),b=l.n(p);const h=t=>{const a=window.SVG,{className:n}=t,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",n);return a?e.React.createElement(a,Object.assign({className:o,src:b()},r)):e.React.createElement("svg",Object.assign({className:o},r))};var f=l(216),y=l.n(f);const j=t=>{const a=window.SVG,{className:n}=t,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",n);return a?e.React.createElement(a,Object.assign({className:o,src:y()},r)):e.React.createElement("svg",Object.assign({className:o},r))};var w=l(371),x=l.n(w);const v=t=>{const a=window.SVG,{className:n}=t,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",n);return a?e.React.createElement(a,Object.assign({className:o,src:x()},r)):e.React.createElement("svg",Object.assign({className:o},r))},{useMemo:O,useState:C,useRef:I,useEffect:S}=e.React,N=a=>{const{enabled:n,label:r="",showIcons:o,canDelete:s,defaultLabel:i,onEnabledChange:l,onDelete:c,onLabelChange:d,translate:m}=a,u=I(),[g,p]=C(!1),b=()=>{g||p(!0)};S((()=>{var e;g&&u.current&&(null===(e=u.current)||void 0===e||e.focus())}),[g]);const[f,y]=C(r);return S((()=>{y(r)}),[r]),(0,e.jsx)("div",{className:"d-flex align-items-center pr-1",css:e.css`height: 2rem`},(0,e.jsx)("div",{className:"d-flex align-items-center mb-0 flex-grow-1",css:e.css`padding-left: 0.125rem`},(0,e.jsx)(t.Checkbox,{className:"mr-2",checked:n,onChange:l}),(0,e.jsx)("div",{className:"flex-grow-1",onDoubleClick:b,css:!g&&e.css`max-width: ${s?"7.125rem":"8.525rem"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap`},g?(0,e.jsx)(t.TextInput,{css:e.css`height: 1.5rem; max-width: ${s?"7.125rem":"8.525rem"}`,size:"sm",ref:u,value:f,onAcceptValue:e=>{p(!1),d(e)},onChange:e=>{y(e.target.value)},placeholder:i}):(0,e.jsx)(e.React.Fragment,null,r||i))),o&&!g&&(0,e.jsx)(t.Button,{className:"p-0 mx-1",size:"sm",type:"tertiary",icon:!0,onClick:b,"aria-label":m("rename")},(0,e.jsx)(j,{size:"m"})),o&&g&&(0,e.jsx)(t.Button,{className:"p-0 mx-1",size:"sm",type:"tertiary",icon:!0,onClick:()=>{p(!1)},"aria-label":m("done")},(0,e.jsx)(v,{size:"m"})),o&&s&&(0,e.jsx)(t.Button,{className:"p-0 mr-1",size:"sm",type:"tertiary",icon:!0,onClick:c,"aria-label":m("deleteOption")},(0,e.jsx)(h,{size:"m"})))};function A(n){const{intl:r,theme:o,itemCategoryInfo:s,defaultLabel:i,onEnabledChange:l,onCustomLabelChange:c,onCuratedFilterChange:m,onDelete:u,translate:p}=n,{type:b,enabled:h,customLabel:f}=s,y=O((()=>b===d.ItemCategory.Curated),[b]),[j,w]=C(!1),[x,v]=C("");return S((()=>{v(s.curatedFilter||"")}),[s.curatedFilter]),(0,e.jsx)("div",{className:"flex-grow-1",css:e.css`flex-basis: 0;`,onMouseOver:()=>{w(!0)},onMouseOut:()=>{w(!1)}},(0,e.jsx)(a.SettingSection,{title:(0,e.jsx)(N,{enabled:h,label:f,showIcons:j,canDelete:y,defaultLabel:i,onEnabledChange:l,onDelete:u,onLabelChange:c,translate:p}),className:"p-0 m-0 flex-grow-1",role:"group",css:e.css`flex-basis: 0`,"aria-label":f||i},y&&(0,e.jsx)(a.SettingRow,{flow:"wrap",className:"mt-1",css:e.css`
              line-height: 1.5rem;
              .jimu-widget-setting--row-label {
                margin-bottom: 0.375rem;
              }
            `,label:(0,e.jsx)("div",{className:"d-flex align-items-center"},p("curatedFilter"),(0,e.jsx)(t.Link,{to:"https://doc.arcgis.com/en/arcgis-online/reference/advanced-search.htm",icon:!0,target:"_blank","aria-label":p("help"),css:e.css`
                    padding: 0 !important;
                    .svg-component{
                      margin-right: 0;
                      color: ${o.colors.palette.dark[400]};
                    }
                    :hover {
                      .svg-component{
                        color: ${o.colors.black};
                      }
                    }
                  `},(0,e.jsx)(g,{autoFlip:!e.i18n.isSameLanguage(null==r?void 0:r.locale,"he")})))},(0,e.jsx)(t.TextInput,{className:"flex-grow-1 mb-2 pr-2","data-draggable":"true",size:"sm",type:"text",value:x,onPointerDown:e=>{e.stopPropagation()},onAcceptValue:m,onChange:e=>{v(e.target.value)},title:s.curatedFilter}))))}var P=l(750),M=l.n(P);const L=t=>{const a=window.SVG,{className:n}=t,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",n);return a?e.React.createElement(a,Object.assign({className:o,src:M()},r)):e.React.createElement("svg",Object.assign({className:o},r))};var T=l(315);const{useEffect:R,useRef:B}=e.React,k=o=>{const{onSettingChange:s,id:l,config:c,theme:m,intl:u}=o,g=((e,t)=>(0,T.useCallback)((a=>t.intl?t.intl.formatMessage({id:a,defaultMessage:e[a]}):a),[]))(n,t.defaultMessages),p=B(null);R((()=>(p.current=new r(l),p.current.init().catch((e=>{console.error("Failed to read cache.",e)})),()=>{p.current.close()})),[l]);const b=(...e)=>{s(...e),p.current.initialized()&&p.current.clear()},h=t=>{const a=t.target.value,n="disableAddBySearch"===a;if(!0===c[a]){const t=n?c.without(a).merge({itemCategoriesInfo:(0,e.Immutable)([{type:d.ItemCategory.MyContent,customLabel:"",enabled:!0,id:d.ItemCategory.MyContent},{type:d.ItemCategory.MyGroup,customLabel:"",enabled:!0,id:d.ItemCategory.MyGroup},{type:d.ItemCategory.MyOrganization,customLabel:"",enabled:!0,id:d.ItemCategory.MyOrganization},{type:d.ItemCategory.Public,customLabel:"",enabled:!0,id:d.ItemCategory.Public},{type:d.ItemCategory.LivingAtlas,customLabel:"",enabled:!0,id:d.ItemCategory.LivingAtlas}])}):c.without(a);b({id:l,config:Object.assign({},t)})}else b({id:l,config:Object.assign(Object.assign({},n?c.without("itemCategoriesInfo"):c),{[a]:!0})})},f=(e,t,a)=>{const n=[...c.itemCategoriesInfo.asMutable({deep:!0})];n[a]=Object.assign(Object.assign({},n[a]),{[t]:e}),b({id:l,config:Object.assign(Object.assign({},c),{itemCategoriesInfo:n})})},y=(e=>new Map([[d.ItemCategory.MyContent,e("myContent")],[d.ItemCategory.MyGroup,e("myGroup")],[d.ItemCategory.MyOrganization,e("myOrganization")],[d.ItemCategory.Public,e("public")],[d.ItemCategory.LivingAtlas,e("livingAtlas")],[d.ItemCategory.Curated,e("curated")]]))(g),j=B(1);return R((()=>{if(c.itemCategoriesInfo){const e=c.itemCategoriesInfo.filter((e=>e.type===d.ItemCategory.Curated)).map((e=>e.id)),t=e.length?Math.max(...e.map((e=>Number(e.split("_")[1])))):0;j.current=t+1||1}}),[]),(0,e.jsx)("div",{className:"widget-setting-add-data jimu-widget-setting",css:E},(0,e.jsx)(a.SettingSection,{className:"border-0 way-of-add-data-section",role:"group",title:g("wayOfAddingData"),"aria-label":g("wayOfAddingData")},(0,e.jsx)(a.SettingRow,{className:"way-of-add-data-row",label:g("selectFromAccount")},(0,e.jsx)(t.Switch,{onChange:h,value:"disableAddBySearch",checked:!c.disableAddBySearch,"aria-label":g("selectFromAccount")})),!c.disableAddBySearch&&c.itemCategoriesInfo&&(0,e.jsx)(a.SettingRow,{className:"account-config-row"},(0,e.jsx)(i.List,{className:"search-config-list w-100",size:"sm",itemsJson:c.itemCategoriesInfo.asMutable().map(((e,t)=>({itemStateDetailContent:e,itemKey:e.id}))),dndEnabled:!0,onUpdateItem:(t,a)=>{if(t.updateType!==i.TreeItemActionType.HandleDidDrop)return;const[,n]=t.itemJsons,r=n.map((e=>e.itemStateDetailContent));r.map((e=>e.id)).join(",")!==c.itemCategoriesInfo.map((e=>e.id)).join(",")&&b({id:l,config:Object.assign(Object.assign({},c),{itemCategoriesInfo:r.map((t=>(0,e.Immutable)(t)))})})},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:i.TreeItemActionType.RenderOverrideItem,children:[{name:i.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:i.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:i.TreeItemActionType.RenderOverrideItemBody,children:[{name:i.TreeItemActionType.RenderOverrideItemDragHandle},{name:i.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(t,a)=>{const{itemJsons:n}=a.props,r=n[0],o=n[1];return s=r.itemStateDetailContent,i=o.indexOf(r),(0,e.jsx)(A,{intl:u,theme:m,itemCategoryInfo:s,defaultLabel:y.get(s.type),onEnabledChange:(e,t)=>{f(t,"enabled",i)},onCustomLabelChange:e=>{f(e,"customLabel",i)},onCuratedFilterChange:e=>{f(e,"curatedFilter",i)},onDelete:()=>{(e=>{const t=[...c.itemCategoriesInfo.asMutable()];t.splice(e,1),b({id:l,config:Object.assign(Object.assign({},c),{itemCategoriesInfo:t})})})(i)},translate:g});var s,i}})),!c.disableAddBySearch&&(0,e.jsx)(a.SettingRow,{className:"account-config-row"},(0,e.jsx)(t.Button,{className:"w-100 my-2",type:"secondary","aria-label":g("curateACollection"),onClick:()=>{b({id:l,config:Object.assign(Object.assign({},c),{itemCategoriesInfo:[...c.itemCategoriesInfo,{type:d.ItemCategory.Curated,customLabel:"",enabled:!0,curatedFilter:"",id:`${d.ItemCategory.Curated}_${j.current}`}]})}),j.current=j.current+1}},(0,e.jsx)(L,null),g("curateACollection"))),(0,e.jsx)(a.SettingRow,{className:"way-of-add-data-row mt-3",label:g("inputUrl")},(0,e.jsx)(t.Switch,{onChange:h,value:"disableAddByUrl",checked:!c.disableAddByUrl,"aria-label":g("inputUrl")})),(0,e.jsx)(a.SettingRow,{className:"way-of-add-data-row",label:g("uploadFiles")},(0,e.jsx)(t.Switch,{onChange:h,value:"disableAddByFile",checked:!c.disableAddByFile,"aria-label":g("uploadFiles")}))),(0,e.jsx)(a.SettingSection,{className:"border-0 pt-0",role:"group",title:g("emptyListMessage"),"aria-label":g("emptyListMessage")},(0,e.jsx)(t.TextInput,{title:c.placeholderText||g("defaultPlaceholderText"),"aria-label":c.placeholderText||g("defaultPlaceholderText"),size:"sm",defaultValue:c.placeholderText,placeholder:g("defaultPlaceholderText"),onAcceptValue:e=>{b({id:l,config:Object.assign(Object.assign({},c),{placeholderText:e})})}})))},E=e.css`
  .search-config-list {
    margin-top: 0.75rem;
  }
  .way-of-add-data-section {
    .way-of-add-data-row {
      padding: 0.5rem 0.5rem 0.5rem 0.625rem;
      background-color: var(--light-400);
    }
    .account-config-row {
      margin: 0;
      padding: 0 0.5rem;
      background-color: var(--light-400);
    }
    .jimu-tree-item .jimu-tree-item__body {
      flex-wrap: nowrap;
      align-items: flex-start;
      .jimu-tree-item__drag-handle {
        margin-top: 0.5rem
      }
    }
  }
`})(),c})())}}}));