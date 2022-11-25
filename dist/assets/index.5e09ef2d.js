import{o as ne,c as je,u as tr,a as nr,b as ar,i as ir,d as sr}from"./index.a3ccb60a.js";function or(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $e={exports:{}},ae={exports:{}},ke=function(r,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return r.apply(t,n)}},ur=ke,w=Object.prototype.toString;function ie(e){return Array.isArray(e)}function re(e){return typeof e>"u"}function fr(e){return e!==null&&!re(e)&&e.constructor!==null&&!re(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Ie(e){return w.call(e)==="[object ArrayBuffer]"}function lr(e){return w.call(e)==="[object FormData]"}function cr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Ie(e.buffer),r}function dr(e){return typeof e=="string"}function hr(e){return typeof e=="number"}function Fe(e){return e!==null&&typeof e=="object"}function T(e){if(w.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function pr(e){return w.call(e)==="[object Date]"}function mr(e){return w.call(e)==="[object File]"}function vr(e){return w.call(e)==="[object Blob]"}function He(e){return w.call(e)==="[object Function]"}function yr(e){return Fe(e)&&He(e.pipe)}function br(e){return w.call(e)==="[object URLSearchParams]"}function Er(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function wr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function se(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ie(e))for(var t=0,a=e.length;t<a;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function te(){var e={};function r(n,i){T(e[i])&&T(n)?e[i]=te(e[i],n):T(n)?e[i]=te({},n):ie(n)?e[i]=n.slice():e[i]=n}for(var t=0,a=arguments.length;t<a;t++)se(arguments[t],r);return e}function Rr(e,r,t){return se(r,function(n,i){t&&typeof n=="function"?e[i]=ur(n,t):e[i]=n}),e}function Cr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var p={isArray:ie,isArrayBuffer:Ie,isBuffer:fr,isFormData:lr,isArrayBufferView:cr,isString:dr,isNumber:hr,isObject:Fe,isPlainObject:T,isUndefined:re,isDate:pr,isFile:mr,isBlob:vr,isFunction:He,isStream:yr,isURLSearchParams:br,isStandardBrowserEnv:wr,forEach:se,merge:te,extend:Rr,trim:Er,stripBOM:Cr},x=p;function he(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Me=function(r,t,a){if(!t)return r;var n;if(a)n=a(t);else if(x.isURLSearchParams(t))n=t.toString();else{var i=[];x.forEach(t,function(l,d){l===null||typeof l>"u"||(x.isArray(l)?d=d+"[]":l=[l],x.forEach(l,function(s){x.isDate(s)?s=s.toISOString():x.isObject(s)&&(s=JSON.stringify(s)),i.push(he(d)+"="+he(s))}))}),n=i.join("&")}if(n){var u=r.indexOf("#");u!==-1&&(r=r.slice(0,u)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Sr=p;function U(){this.handlers=[]}U.prototype.use=function(r,t,a){return this.handlers.push({fulfilled:r,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};U.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};U.prototype.forEach=function(r){Sr.forEach(this.handlers,function(a){a!==null&&r(a)})};var xr=U,Or=p,qr=function(r,t){Or.forEach(r,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[i])})},Je=function(r,t,a,n,i){return r.config=t,a&&(r.code=a),r.request=n,r.response=i,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$,pe;function ze(){if(pe)return $;pe=1;var e=Je;return $=function(t,a,n,i,u){var o=new Error(t);return e(o,a,n,i,u)},$}var k,me;function gr(){if(me)return k;me=1;var e=ze();return k=function(t,a,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):a(e("Request failed with status code "+n.status,n.config,null,n.request,n))},k}var I,ve;function Ar(){if(ve)return I;ve=1;var e=p;return I=e.isStandardBrowserEnv()?function(){return{write:function(a,n,i,u,o,l){var d=[];d.push(a+"="+encodeURIComponent(n)),e.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),e.isString(u)&&d.push("path="+u),e.isString(o)&&d.push("domain="+o),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(a){var n=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),I}var F,ye;function _r(){return ye||(ye=1,F=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}),F}var H,be;function Nr(){return be||(be=1,H=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r}),H}var M,Ee;function Tr(){if(Ee)return M;Ee=1;var e=_r(),r=Nr();return M=function(a,n){return a&&!e(n)?r(a,n):n},M}var J,we;function Pr(){if(we)return J;we=1;var e=p,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return J=function(a){var n={},i,u,o;return a&&e.forEach(a.split(`
`),function(d){if(o=d.indexOf(":"),i=e.trim(d.substr(0,o)).toLowerCase(),u=e.trim(d.substr(o+1)),i){if(n[i]&&r.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([u]):n[i]=n[i]?n[i]+", "+u:u}}),n},J}var V,Re;function Ur(){if(Re)return V;Re=1;var e=p;return V=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),n;function i(u){var o=u;return t&&(a.setAttribute("href",o),o=a.href),a.setAttribute("href",o),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=i(window.location.href),function(o){var l=e.isString(o)?i(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),V}var z,Ce;function L(){if(Ce)return z;Ce=1;function e(r){this.message=r}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,z=e,z}var X,Se;function xe(){if(Se)return X;Se=1;var e=p,r=gr(),t=Ar(),a=Me,n=Tr(),i=Pr(),u=Ur(),o=ze(),l=Ve,d=L();return X=function(s){return new Promise(function(m,q){var g=s.data,A=s.headers,_=s.responseType,C;function fe(){s.cancelToken&&s.cancelToken.unsubscribe(C),s.signal&&s.signal.removeEventListener("abort",C)}e.isFormData(g)&&delete A["Content-Type"];var f=new XMLHttpRequest;if(s.auth){var Ze=s.auth.username||"",er=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";A.Authorization="Basic "+btoa(Ze+":"+er)}var le=n(s.baseURL,s.url);f.open(s.method.toUpperCase(),a(le,s.params,s.paramsSerializer),!0),f.timeout=s.timeout;function ce(){if(!!f){var y="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,S=!_||_==="text"||_==="json"?f.responseText:f.response,R={data:S,status:f.status,statusText:f.statusText,headers:y,config:s,request:f};r(function(j){m(j),fe()},function(j){q(j),fe()},R),f=null}}if("onloadend"in f?f.onloadend=ce:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(ce)},f.onabort=function(){!f||(q(o("Request aborted",s,"ECONNABORTED",f)),f=null)},f.onerror=function(){q(o("Network Error",s,null,f)),f=null},f.ontimeout=function(){var S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded",R=s.transitional||l;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),q(o(S,s,R.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",f)),f=null},e.isStandardBrowserEnv()){var de=(s.withCredentials||u(le))&&s.xsrfCookieName?t.read(s.xsrfCookieName):void 0;de&&(A[s.xsrfHeaderName]=de)}"setRequestHeader"in f&&e.forEach(A,function(S,R){typeof g>"u"&&R.toLowerCase()==="content-type"?delete A[R]:f.setRequestHeader(R,S)}),e.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),_&&_!=="json"&&(f.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&f.addEventListener("progress",s.onDownloadProgress),typeof s.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",s.onUploadProgress),(s.cancelToken||s.signal)&&(C=function(y){!f||(q(!y||y&&y.type?new d("canceled"):y),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(C),s.signal&&(s.signal.aborted?C():s.signal.addEventListener("abort",C))),g||(g=null),f.send(g)})},X}var h=p,Oe=qr,Lr=Je,Br=Ve,Dr={"Content-Type":"application/x-www-form-urlencoded"};function qe(e,r){!h.isUndefined(e)&&h.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function jr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=xe()),e}function $r(e,r,t){if(h.isString(e))try{return(r||JSON.parse)(e),h.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(e)}var B={transitional:Br,adapter:jr(),transformRequest:[function(r,t){return Oe(t,"Accept"),Oe(t,"Content-Type"),h.isFormData(r)||h.isArrayBuffer(r)||h.isBuffer(r)||h.isStream(r)||h.isFile(r)||h.isBlob(r)?r:h.isArrayBufferView(r)?r.buffer:h.isURLSearchParams(r)?(qe(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString()):h.isObject(r)||t&&t["Content-Type"]==="application/json"?(qe(t,"application/json"),$r(r)):r}],transformResponse:[function(r){var t=this.transitional||B.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&h.isString(r)&&r.length)try{return JSON.parse(r)}catch(u){if(i)throw u.name==="SyntaxError"?Lr(u,this,"E_JSON_PARSE"):u}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(r){B.headers[r]={}});h.forEach(["post","put","patch"],function(r){B.headers[r]=h.merge(Dr)});var oe=B,kr=p,Ir=oe,Fr=function(r,t,a){var n=this||Ir;return kr.forEach(a,function(u){r=u.call(n,r,t)}),r},W,ge;function Xe(){return ge||(ge=1,W=function(r){return!!(r&&r.__CANCEL__)}),W}var Ae=p,K=Fr,Hr=Xe(),Mr=oe,Jr=L();function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Jr("canceled")}var Vr=function(r){G(r),r.headers=r.headers||{},r.data=K.call(r,r.data,r.headers,r.transformRequest),r.headers=Ae.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Ae.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||Mr.adapter;return t(r).then(function(n){return G(r),n.data=K.call(r,n.data,n.headers,r.transformResponse),n},function(n){return Hr(n)||(G(r),n&&n.response&&(n.response.data=K.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},v=p,We=function(r,t){t=t||{};var a={};function n(c,s){return v.isPlainObject(c)&&v.isPlainObject(s)?v.merge(c,s):v.isPlainObject(s)?v.merge({},s):v.isArray(s)?s.slice():s}function i(c){if(v.isUndefined(t[c])){if(!v.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function u(c){if(!v.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(v.isUndefined(t[c])){if(!v.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function l(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return v.forEach(Object.keys(r).concat(Object.keys(t)),function(s){var E=d[s]||i,m=E(s);v.isUndefined(m)&&E!==l||(a[s]=m)}),a},Y,_e;function Ke(){return _e||(_e=1,Y={version:"0.26.1"}),Y}var zr=Ke().version,ue={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ue[e]=function(a){return typeof a===e||"a"+(r<1?"n ":" ")+e}});var Ne={};ue.transitional=function(r,t,a){function n(i,u){return"[Axios v"+zr+"] Transitional option '"+i+"'"+u+(a?". "+a:"")}return function(i,u,o){if(r===!1)throw new Error(n(u," has been removed"+(t?" in "+t:"")));return t&&!Ne[u]&&(Ne[u]=!0,console.warn(n(u," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(i,u,o):!0}};function Xr(e,r,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var a=Object.keys(e),n=a.length;n-- >0;){var i=a[n],u=r[i];if(u){var o=e[i],l=o===void 0||u(o,i,e);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Wr={assertOptions:Xr,validators:ue},Ge=p,Kr=Me,Te=xr,Pe=Vr,D=We,Ye=Wr,O=Ye.validators;function N(e){this.defaults=e,this.interceptors={request:new Te,response:new Te}}N.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=D(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&Ye.assertOptions(a,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(i=i&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});var o;if(!i){var l=[Pe,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(u),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=t;n.length;){var c=n.shift(),s=n.shift();try{d=c(d)}catch(E){s(E);break}}try{o=Pe(d)}catch(E){return Promise.reject(E)}for(;u.length;)o=o.then(u.shift(),u.shift());return o};N.prototype.getUri=function(r){return r=D(this.defaults,r),Kr(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};Ge.forEach(["delete","get","head","options"],function(r){N.prototype[r]=function(t,a){return this.request(D(a||{},{method:r,url:t,data:(a||{}).data}))}});Ge.forEach(["post","put","patch"],function(r){N.prototype[r]=function(t,a,n){return this.request(D(n||{},{method:r,url:t,data:a}))}});var Gr=N,Q,Ue;function Yr(){if(Ue)return Q;Ue=1;var e=L();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(u){a=u});var n=this;this.promise.then(function(i){if(!!n._listeners){var u,o=n._listeners.length;for(u=0;u<o;u++)n._listeners[u](i);n._listeners=null}}),this.promise.then=function(i){var u,o=new Promise(function(l){n.subscribe(l),u=l}).then(i);return o.cancel=function(){n.unsubscribe(u)},o},t(function(u){n.reason||(n.reason=new e(u),a(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]},r.prototype.unsubscribe=function(a){if(!!this._listeners){var n=this._listeners.indexOf(a);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var a,n=new r(function(u){a=u});return{token:n,cancel:a}},Q=r,Q}var Z,Le;function Qr(){return Le||(Le=1,Z=function(r){return function(a){return r.apply(null,a)}}),Z}var ee,Be;function Zr(){if(Be)return ee;Be=1;var e=p;return ee=function(t){return e.isObject(t)&&t.isAxiosError===!0},ee}var De=p,et=ke,P=Gr,rt=We,tt=oe;function Qe(e){var r=new P(e),t=et(P.prototype.request,r);return De.extend(t,P.prototype,r),De.extend(t,r),t.create=function(n){return Qe(rt(e,n))},t}var b=Qe(tt);b.Axios=P;b.Cancel=L();b.CancelToken=Yr();b.isCancel=Xe();b.VERSION=Ke().version;b.all=function(r){return Promise.all(r)};b.spread=Qr();b.isAxiosError=Zr();ae.exports=b;ae.exports.default=b;(function(e){e.exports=ae.exports})($e);const nt=or($e.exports);console.log("'/prod-api\u2018");const at=nt.create({baseURL:"/api",timeout:5e3}),it=()=>at({url:"/category "}),st={__name:"index",setup(e){return(async()=>{const t=await it();console.log(t)})(),(t,a)=>(ne(),je("div",null,"\u6211\u662F\u79FB\u52A8\u7AEF\u4E0B\u7684navigation"))}},ot={__name:"index",setup(e){return(r,t)=>tr(ir)?(ne(),nr(st,{key:0})):ar("",!0)}},ft={__name:"index",setup(e){return(r,t)=>(ne(),je("div",null,[sr(ot)]))}};export{ft as default};