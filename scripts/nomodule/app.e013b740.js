!function(){"use strict";var t={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(t.arrayBuffer)var e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&e.indexOf(Object.prototype.toString.call(t))>-1};function o(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function i(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function s(t){this.map={},t instanceof s?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function a(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function u(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){var o;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:t.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:t.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():t.arrayBuffer&&t.blob&&((o=e)&&DataView.prototype.isPrototypeOf(o))?(this._bodyArrayBuffer=u(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||r(e))?this._bodyArrayBuffer=u(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t,e,r,o=a(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}s.prototype.append=function(t,e){t=o(t),e=n(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},s.prototype.delete=function(t){delete this.map[o(t)]},s.prototype.get=function(t){return t=o(t),this.has(t)?this.map[t]:null},s.prototype.has=function(t){return this.map.hasOwnProperty(o(t))},s.prototype.set=function(t,e){this.map[o(t)]=n(e)},s.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},s.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),i(t)},s.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),i(t)},s.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),i(t)},t.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var f=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function d(t,e){var r,o,n=(e=e||{}).body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),f.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function y(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new s(e.headers),this.url=e.url||"",this._initBody(t)}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},l.call(d.prototype),l.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];y.redirect=function(t,e){if(-1===b.indexOf(e))throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})};var m,g=self.DOMException;try{new g}catch(t){(g=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),g.prototype.constructor=g}function v(e,r){return new Promise(function(o,n){var i=new d(e,r);if(i.signal&&i.signal.aborted)return n(new g("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new s,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;o(new y(n,r))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.onabort=function(){n(new g("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&t.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",h)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}v.polyfill=!0,self.fetch||(self.fetch=v,self.Headers=s,self.Request=d,self.Response=y),"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){var e=t.Element.prototype,r=Object,o=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},n=Array.prototype.indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e;return-1},i=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},s=function(t,e){if(""===e)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return n.call(t,e)},a=function(t){for(var e=o.call(t.getAttribute("class")||""),r=e?e.split(/\s+/):[],n=0,i=r.length;n<i;n++)this.push(r[n]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},h=a.prototype=[],c=function(){return new a(this)};if(i.prototype=Error.prototype,h.item=function(t){return this[t]||null},h.contains=function(t){return-1!==s(this,t+="")},h.add=function(){var t,e=arguments,r=0,o=e.length,n=!1;do{t=e[r]+"",-1===s(this,t)&&(this.push(t),n=!0)}while(++r<o);n&&this._updateClassName()},h.remove=function(){var t,e,r=arguments,o=0,n=r.length,i=!1;do{for(t=r[o]+"",e=s(this,t);-1!==e;)this.splice(e,1),i=!0,e=s(this,t)}while(++o<n);i&&this._updateClassName()},h.toggle=function(t,e){t+="";var r=this.contains(t),o=r?!0!==e&&"remove":!1!==e&&"add";return o&&this[o](t),!0===e||!1===e?e:!r},h.toString=function(){return this.join(" ")},r.defineProperty){var u={get:c,enumerable:!0,configurable:!0};try{r.defineProperty(e,"classList",u)}catch(t){void 0!==t.number&&-2146823252!==t.number||(u.enumerable=!1,r.defineProperty(e,"classList",u))}}else r.prototype.__defineGetter__&&e.__defineGetter__("classList",c)}}(window.self),function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var r,o=arguments.length;for(r=0;r<o;r++)t=arguments[r],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:r.call(this,t)}}t=null}()),function(){if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document;r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]})},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(window,"resize",this._checkForIntersections,!0),o(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,n(window,"resize",this._checkForIntersections,!0),n(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),r=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(o){var n=o.element,s=i(n),a=this._rootContainsTarget(n),h=o.entry,c=t&&a&&this._computeTargetAndRootIntersection(n,r),u=o.entry=new e({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:s,rootBounds:r,intersectionRect:c});h?t&&a?this._hasCrossedThreshold(h,u)&&this._queuedEntries.push(u):h&&h.isIntersecting&&this._queuedEntries.push(u):this._queuedEntries.push(u)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(e,r){if("none"!=window.getComputedStyle(e).display){for(var o,n,s,h,c,u,l,f,d=i(e),p=a(e),y=!1;!y;){var b=null,m=1==p.nodeType?window.getComputedStyle(p):{};if("none"==m.display)return;if(p==this.root||p==t?(y=!0,b=r):p!=t.body&&p!=t.documentElement&&"visible"!=m.overflow&&(b=i(p)),b&&(o=b,n=d,s=void 0,h=void 0,c=void 0,u=void 0,l=void 0,f=void 0,s=Math.max(o.top,n.top),h=Math.min(o.bottom,n.bottom),c=Math.max(o.left,n.left),u=Math.min(o.right,n.right),f=h-s,!(d=(l=u-c)>=0&&f>=0&&{top:s,bottom:h,left:c,right:u,width:l,height:f})))break;p=a(p)}return d}},r.prototype._getRootRect=function(){var e;if(this.root)e=i(this.root);else{var r=t.documentElement,o=t.body;e={top:0,left:0,right:r.clientWidth||o.clientWidth,width:r.clientWidth||o.clientWidth,bottom:r.clientHeight||o.clientHeight,height:r.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100}),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},r.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==o)for(var n=0;n<this.thresholds.length;n++){var i=this.thresholds[n];if(i==r||i==o||i<r!=i<o)return!0}},r.prototype._rootIsInDom=function(){return!this.root||s(t,this.root)},r.prototype._rootContainsTarget=function(e){return s(this.root||t,e)},r.prototype._registerInstance=function(){},r.prototype._unregisterInstance=function(){},window.IntersectionObserver=r,window.IntersectionObserverEntry=e}function e(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,o=this.intersectionRect,n=o.width*o.height;this.intersectionRatio=r?Number((n/r).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var r,o,n,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,n=null,function(){n||(n=setTimeout(function(){r(),n=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(t,e,r,o){"function"==typeof t.addEventListener?t.addEventListener(e,r,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function n(t,e,r,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function i(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function s(t,e){for(var r=e;r;){if(r==t)return!0;r=a(r)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(),(m=Object.freeze({}))&&m.default,console.log("Hello, world!")}();
//# sourceMappingURL=app.e013b740.js.map
