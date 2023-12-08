(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{5202:function(){!function(){"use strict";function applyFocusVisiblePolyfill(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(e){return!!e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList}function focusTriggersKeyboardModality(e){var t=e.type,n=e.tagName;return"INPUT"===n&&!!i[t]&&!e.readOnly||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function addFocusVisibleClass(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function removeFocusVisibleClass(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function onKeyDown(n){n.metaKey||n.altKey||n.ctrlKey||(isValidFocusTarget(e.activeElement)&&addFocusVisibleClass(e.activeElement),t=!0)}function onPointerDown(e){t=!1}function onFocus(e){isValidFocusTarget(e.target)&&(t||focusTriggersKeyboardModality(e.target))&&addFocusVisibleClass(e.target)}function onBlur(e){isValidFocusTarget(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),removeFocusVisibleClass(e.target))}function onVisibilityChange(e){"hidden"===document.visibilityState&&(n&&(t=!0),addInitialPointerMoveListeners())}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function removeInitialPointerMoveListeners(){document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,removeInitialPointerMoveListeners())}document.addEventListener("keydown",onKeyDown,!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",onVisibilityChange,!0),addInitialPointerMoveListeners(),e.addEventListener("focus",onFocus,!0),e.addEventListener("blur",onBlur,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()},394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(4148)}])},4148:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Component}});var o=n(5893);n(5202);var i=n(7294),s=n(6608),a=n(2918),r=n.n(a),d=n(1163);let useClientSideRouting=()=>{let[e,t]=(0,i.useState)(!1),n=(0,i.useRef)(!1),o=(0,d.useRouter)();return(0,i.useEffect)(()=>{o.isReady&&!n.current&&(n.current=!0,o.replace({pathname:window.location.pathname,query:window.location.search.slice(1)}).catch(e=>{t(!0)}))},[o.isReady]),e};var u=n(9008),c=n.n(u);function Component(){let e=useClientSideRouting();return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(i.Fragment,{children:(0,s.oA)(e)?(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(r(),{statusCode:404})}):(0,o.jsx)(i.Fragment,{})}),(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"404 - Not Found"}),(0,o.jsx)("meta",{content:"The page was not found",name:"description"}),(0,o.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},2918:function(e,t,n){e.exports=n(6908)},9008:function(e,t,n){e.exports=n(9201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=394)}),_N_E=e.O()}]);