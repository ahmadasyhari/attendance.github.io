"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[857],{1285:(e,t,n)=>{var i=n(7908),s=n(1400),r=n(6244);e.exports=function(e){var t=i(this),n=r(t),o=arguments.length,a=s(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,h=void 0===l?n:s(l,n);while(h>a)t[a++]=e;return t}},3290:(e,t,n)=>{var i=n(2109),s=n(1285),r=n(1223);i({target:"Array",proto:!0},{fill:s}),r("fill")},2857:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ca});var i=n(124),s=n(8534),r=(n(9826),n(1539),n(3290),n(7658),n(6252)),o=n(2262),a=n(3577),l=n(5816),h=n(8463),c=n(4444),u=n(3333);const d="@firebase/database",_="1.0.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let p="";function f(e){p=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,c.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,c.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,c.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new g(t)}}catch(t){}return new m},v=y("localStorage"),C=y("sessionStorage"),w=new u.Yd("@firebase/database"),T=function(){let e=1;return function(){return e++}}(),I=function(e){const t=(0,c.dS)(e),n=new c.gQ;n.update(t);const i=n.digest();return c.US.encodeByteArray(i)},k=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=k.apply(null,i):t+="object"===typeof i?(0,c.Wl)(i):i,t+=" "}return t};let b=null,S=!0;const E=function(e,t){(0,c.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(w.logLevel=u["in"].VERBOSE,b=w.log.bind(w),t&&C.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,C.remove("logging_enabled"))},N=function(...e){if(!0===S&&(S=!1,null===b&&!0===C.get("logging_enabled")&&E(!0)),b){const t=k.apply(null,e);b(t)}},P=function(e){return function(...t){N(e,...t)}},x=function(...e){const t="FIREBASE INTERNAL ERROR: "+k(...e);w.error(t)},R=function(...e){const t=`FIREBASE FATAL ERROR: ${k(...e)}`;throw w.error(t),new Error(t)},D=function(...e){const t="FIREBASE WARNING: "+k(...e);w.warn(t)},M=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&D("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},F=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},q=function(e){if((0,c.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},A="[MIN_NAME]",L="[MAX_NAME]",O=function(e,t){if(e===t)return 0;if(e===A||t===L)return-1;if(t===A||e===L)return 1;{const n=X(e),i=X(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},W=function(e,t){return e===t?0:e<t?-1:1},U=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,c.Wl)(t))},H=function(e){if("object"!==typeof e||null===e)return(0,c.Wl)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,c.Wl)(t[i]),n+=":",n+=H(e[t[i]]);return n+="}",n},Y=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function z(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,c.hu)(!F(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,a,l;0===e?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const u=h.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(u.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},V=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},B=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function K(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const G=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,Q=2147483647,X=function(e){if(G.test(e)){const t=Number(e);if(t>=$&&t<=Q)return t}return null},Z=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw D("Exception was thrown by user callback.",e),t}),Math.floor(0))}},J=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ee=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){D(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(N("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',D(e)}}class ie{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ie.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se="5",re="v",oe="s",ae="r",le="f",he=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ce="ls",ue="p",de="ac",_e="websocket",pe="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=v.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&v.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ge(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function me(e,t,n){let i;if((0,c.hu)("string"===typeof t,"typeof type must == string"),(0,c.hu)("object"===typeof n,"typeof params must == object"),t===_e)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==pe)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ge(e)&&(n["ns"]=e.namespace);const s=[];return z(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,c.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,c.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve={},Ce={};function we(e){const t=e.toString();return ve[t]||(ve[t]=new ye),ve[t]}function Te(e,t){const n=e.toString();return Ce[n]||(Ce[n]=t()),Ce[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Z((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="start",be="close",Se="pLPCommand",Ee="pRTLPCB",Ne="id",Pe="pw",xe="ser",Re="cb",De="seg",Me="ts",Fe="d",qe="dframe",Ae=1870,Le=30,Oe=Ae-Le,We=25e3,Ue=3e4;class He{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=P(e),this.stats_=we(t),this.urlFn=e=>(this.appCheckToken&&(e[de]=this.appCheckToken),me(t,pe,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ie(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Ue)),q((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ye(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ke)this.id=n,this.password=i;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ke]="t",e[xe]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Re]=this.scriptTagHolder.uniqueCallbackIdentifier),e[re]=se,this.transportSessionId&&(e[oe]=this.transportSessionId),this.lastSessionId&&(e[ce]=this.lastSessionId),this.applicationId&&(e[ue]=this.applicationId),this.appCheckToken&&(e[de]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&he.test(location.hostname)&&(e[ae]=le);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){He.forceAllow_=!0}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){return!(0,c.Yr)()&&(!!He.forceAllow_||!He.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!V()&&!B())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,c.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,c.h$)(t),i=Y(n,Oe);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,c.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[qe]="t",n[Ne]=e,n[Pe]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,c.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ye{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,c.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=T(),window[Se+this.uniqueCallbackIdentifier]=e,window[Ee+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ye.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){N("frame writing exception"),s.stack&&N(s.stack),N(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||N("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ne]=this.myID,e[Pe]=this.myPW,e[xe]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Le+n.length<=Ae))break;{const e=this.pendingSegs.shift();n=n+"&"+De+i+"="+e.seg+"&"+Me+i+"="+e.ts+"&"+Fe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(We)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,c.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{N("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=16384,je=45e3;let Ve=null;"undefined"!==typeof MozWebSocket?Ve=MozWebSocket:"undefined"!==typeof WebSocket&&(Ve=WebSocket);class Be{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=P(this.connId),this.stats_=we(t),this.connURL=Be.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[re]=se,!(0,c.Yr)()&&"undefined"!==typeof location&&location.hostname&&he.test(location.hostname)&&(r[ae]=le),t&&(r[oe]=t),n&&(r[ce]=n),i&&(r[de]=i),s&&(r[ue]=s),me(e,_e,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,v.set("previous_websocket_failure",!0);try{let e;if((0,c.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${se}/${p}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/attendance.github.io/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ve(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ve&&!Be.forceDisallow_}static previouslyFailed(){return v.isInMemoryStorage||!0===v.get("previous_websocket_failure")}markConnectionHealthy(){v.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,c.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,c.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,c.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Y(t,ze);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(je))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2,Be.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[He,Be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Be&&Be["isAvailable"]();let n=t&&!Be.previouslyFailed();if(e.webSocketOnly&&(t||D("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Be];else{const e=this.transports_=[];for(const t of Ke.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ke.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ke.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge=6e4,$e=5e3,Qe=10240,Xe=102400,Ze="t",Je="d",et="s",tt="r",nt="e",it="o",st="a",rt="n",ot="p",at="h";class lt{constructor(e,t,n,i,s,r,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=P("c:"+this.id+":"),this.transportManager_=new Ke(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=ee((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xe?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qe?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ze in e){const t=e[Ze];t===st?this.upgradeIfSecondaryHealthy_():t===tt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===it&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=U("t",e),n=U("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ot,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:st,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=U("t",e),n=U("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=U(Ze,e);if(Je in e){const n=e[Je];if(t===at){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===rt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===et?this.onConnectionShutdown_(n):t===tt?this.onReset_(n):t===nt?x("Server Error: "+n):t===it?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):x("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),se!==n&&D("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ee((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ge))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ee((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor($e))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ot,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(v.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,c.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){(0,c.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends ct{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,c.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ut}getInitialEvent(e){return(0,c.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=32,_t=768;class pt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ft(){return new pt("")}function gt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function mt(e){return e.pieces_.length-e.pieceNum_}function yt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new pt(e.pieces_,t)}function vt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ct(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function wt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Tt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new pt(t,0)}function It(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof pt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pt(n,0)}function kt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=gt(e),i=gt(t);if(null===n)return t;if(n===i)return bt(yt(e),yt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function St(e,t){if(mt(e)!==mt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Et(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(mt(e)>mt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Nt{constructor(e,t){this.errorPrefix_=t,this.parts_=wt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,c.ug)(this.parts_[n]);Rt(this)}}function Pt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,c.ug)(t),Rt(e)}function xt(e){const t=e.parts_.pop();e.byteLength_-=(0,c.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Rt(e){if(e.byteLength_>_t)throw new Error(e.errorPrefix_+"has a key path longer than "+_t+" bytes ("+e.byteLength_+").");if(e.parts_.length>dt)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dt+") or object contains a cycle "+Dt(e))}function Dt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends ct{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Mt}getInitialEvent(e){return(0,c.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=1e3,qt=3e5,At=3e4,Lt=1.3,Ot=3e4,Wt="server_kill",Ut=3;class Ht extends ht{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ht.nextPersistentConnectionId_++,this.log_=P("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ft,this.maxReconnectDelay_=qt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,c.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ut.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,c.Wl)(s)),(0,c.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new c.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,c.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,c.hu)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];Ht.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,c.r3)(e,"w")){const n=(0,c.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();D(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,c.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,c.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,c.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,c.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):x("Unrecognized action received from server: "+(0,c.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,c.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ft,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ft,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Ot&&(this.reconnectDelay_=Ft),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ht.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){(0,c.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?N("getToken() completed but was canceled"):(N("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new lt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{D(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wt)}),s))}catch(x){this.log_("Failed to get token: "+x),r||(this.repoInfo_.nodeAdmin&&D(x),a())}}}interrupt(e){N("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){N("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,c.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Ft,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>H(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new pt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){N("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ut&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){N("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ut&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,c.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+p.replace(/\./g,"-")]=1,(0,c.uI)()?e["framework.cordova"]=1:(0,c.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ut.getInstance().currentlyOnline();return(0,c.xb)(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0,Ht.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Yt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Yt(A,e),i=new Yt(A,t);return 0!==this.compare(n,i)}minPost(){return Yt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;class Vt extends zt{static get __EMPTY_NODE(){return jt}static set __EMPTY_NODE(e){jt=e}compare(e,t){return O(e.name,t.name)}isDefinedOn(e){throw(0,c.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Yt.MIN}maxPost(){return new Yt(L,jt)}makePost(e,t){return(0,c.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Yt(e,jt)}toString(){return".key"}}const Bt=new Vt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Gt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Gt.RED,this.left=null!=i?i:Qt.EMPTY_NODE,this.right=null!=s?s:Qt.EMPTY_NODE}copy(e,t,n,i,s){return new Gt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Qt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Gt.RED=!0,Gt.BLACK=!1;class $t{copy(e,t,n,i,s){return this}insert(e,t,n){return new Gt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qt{constructor(e,t=Qt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Qt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e,t){return O(e.name,t.name)}function Zt(e,t){return O(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt;function en(e){Jt=e}Qt.EMPTY_NODE=new $t;const tn=function(e){return"number"===typeof e?"number:"+j(e):"string:"+e},nn=function(e){if(e.isLeafNode()){const t=e.val();(0,c.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,c.r3)(t,".sv"),"Priority must be a string or number.")}else(0,c.hu)(e===Jt||e.isEmpty(),"priority of unexpected type.");(0,c.hu)(e===Jt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let sn,rn,on;class an{constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,c.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),nn(this.priorityNode_)}static set __childrenNodeConstructor(e){sn=e}static get __childrenNodeConstructor(){return sn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return kt(e)?this:".priority"===gt(e)?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=gt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,c.hu)(".priority"!==n||1===mt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(yt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=I(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:((0,c.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=an.VALUE_TYPE_ORDER.indexOf(t),s=an.VALUE_TYPE_ORDER.indexOf(n);return(0,c.hu)(i>=0,"Unknown leaf type: "+t),(0,c.hu)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function ln(e){rn=e}function hn(e){on=e}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];class cn extends zt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?O(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Yt.MIN}maxPost(){return new Yt(L,new an("[PRIORITY-POST]",on))}makePost(e,t){const n=rn(e);return new Yt(t,new an("[PRIORITY-POST]",n))}toString(){return".priority"}}const un=new cn,dn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){const t=e=>parseInt(Math.log(e)/dn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Gt(a,o.node,Gt.BLACK,null,null);{const l=parseInt(r/2,10)+t,h=s(t,l),c=s(l+1,i);return o=e[l],a=n?n(o):o,new Gt(a,o.node,Gt.BLACK,h,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),c=e[r],u=n?n(c):c;l(new Gt(u,c.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Gt.BLACK):(a(i,Gt.BLACK),a(i,Gt.RED))}return r},o=new _n(e.length),a=r(o);return new Qt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;const gn={};class mn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,c.hu)(gn&&un,"ChildrenNode.ts has not been loaded"),fn=fn||new mn({".priority":gn},{".priority":un}),fn}get(e){const t=(0,c.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Qt?t:null}hasIndex(e){return(0,c.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,c.hu)(e!==Bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Yt.Wrap);let r,o=s.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?pn(n,e.getCompare()):gn;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const h=Object.assign({},this.indexes_);return h[a]=r,new mn(h,l)}addToIndexes(e,t){const n=(0,c.UI)(this.indexes_,((n,i)=>{const s=(0,c.DV)(this.indexSet_,i);if((0,c.hu)(s,"Missing index implementation for "+i),n===gn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Yt.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),pn(n,s.getCompare())}return gn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Yt(e.name,i))),s.insert(e,e.node)}}));return new mn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,c.UI)(this.indexes_,(n=>{if(n===gn)return n;{const i=t.get(e.name);return i?n.remove(new Yt(e.name,i)):n}}));return new mn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class vn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&nn(this.priorityNode_),this.children_.isEmpty()&&(0,c.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new vn(new Qt(Zt),null,mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new vn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?yn:t}}getChild(e){const t=gt(e);return null===t?this:this.getImmediateChild(t).getChild(yt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,c.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Yt(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?yn:this.priorityNode_;return new vn(i,r,s)}}updateChild(e,t){const n=gt(e);if(null===n)return t;{(0,c.hu)(".priority"!==gt(e)||1===mt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(yt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(un,((r,o)=>{t[r]=o.val(e),n++,s&&vn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+tn(this.getPriority().val())+":"),this.forEachChild(un,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":I(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Yt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Yt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Yt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Yt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Yt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wn?-1:0}withIndex(e){if(e===Bt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(un),n=t.getIterator(un);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Bt?null:this.indexMap_.get(e.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cn extends vn{constructor(){super(new Qt(Zt),vn.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vn.EMPTY_NODE}isEmpty(){return!1}}const wn=new Cn;Object.defineProperties(Yt,{MIN:{value:new Yt(A,vn.EMPTY_NODE)},MAX:{value:new Yt(L,wn)}}),Vt.__EMPTY_NODE=vn.EMPTY_NODE,an.__childrenNodeConstructor=vn,en(wn),hn(wn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tn=!0;function In(e,t=null){if(null===e)return vn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,c.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new an(n,In(t))}if(e instanceof Array||!Tn){let n=vn.EMPTY_NODE;return z(e,((t,i)=>{if((0,c.r3)(e,t)&&"."!==t.substring(0,1)){const e=In(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(In(t))}{const n=[];let i=!1;const s=e;if(z(s,((e,t)=>{if("."!==e.substring(0,1)){const s=In(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Yt(e,s)))}})),0===n.length)return vn.EMPTY_NODE;const r=pn(n,Xt,(e=>e.name),Zt);if(i){const e=pn(n,un.getCompare());return new vn(r,In(t),new mn({".priority":e},{".priority":un}))}return new vn(r,In(t),mn.Default)}}ln(In);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends zt{constructor(e){super(),this.indexPath_=e,(0,c.hu)(!kt(e)&&".priority"!==gt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?O(e.name,t.name):s}makePost(e,t){const n=In(e),i=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Yt(t,i)}maxPost(){const e=vn.EMPTY_NODE.updateChild(this.indexPath_,wn);return new Yt(L,e)}toString(){return wt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends zt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?O(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Yt.MIN}maxPost(){return Yt.MAX}makePost(e,t){const n=In(e);return new Yt(t,n)}toString(){return".value"}}const Sn=new bn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){return{type:"value",snapshotNode:e}}function Nn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Pn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Rn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,c.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Pn(t,o)):(0,c.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(Nn(t,n)):r.trackChildChange(xn(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(un,((e,i)=>{t.hasChild(e)||n.trackChildChange(Pn(e,i))})),t.isLeafNode()||t.forEachChild(un,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(xn(t,i,s))}else n.trackChildChange(Nn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.indexedFilter_=new Dn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Yt(t,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(vn.EMPTY_NODE);const s=this;return t.forEachChild(un,((e,t)=>{s.matches(new Yt(e,t))||(i=i.updateImmediateChild(e,vn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Yt(t,n))||(n=vn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=vn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(vn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),s=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);s?n++:i=i.updateImmediateChild(t.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;(0,c.hu)(o.numChildren()===this.limit_,"");const a=new Yt(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let c=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=c&&(c.name===t||o.hasChild(c.name)))c=i.getChildAfterChild(this.index_,c,this.reverse_);const u=null==c?1:r(c,a),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(xn(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Pn(t,e));const n=o.updateImmediateChild(t,vn.EMPTY_NODE),i=null!=c&&this.rangedFilter_.matches(c);return i?(null!=s&&s.trackChildChange(Nn(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:h&&r(l,a)>=0?(null!=s&&(s.trackChildChange(Pn(l.name,l.node)),s.trackChildChange(Nn(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,vn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=un}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,c.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,c.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,c.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,c.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:L}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,c.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===un}copy(){const e=new qn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(e){return e.loadsAllData()?new Dn(e.getIndex()):e.hasLimit()?new Fn(e):new Mn(e)}function Ln(e){const t={};if(e.isDefault())return t;let n;if(e.index_===un?n="$priority":e.index_===Sn?n="$value":e.index_===Bt?n="$key":((0,c.hu)(e.index_ instanceof kn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,c.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,c.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,c.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,c.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,c.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function On(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==un&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ht{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=P("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,c.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Wn.getListenId_(e,n),o={};this.listens_[r]=o;const a=Ln(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),(0,c.DV)(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Wn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ln(e._queryParams),n=e._path.toString(),i=new c.BH;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,c.xO)(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,c.cI)(o.responseText)}catch(e){D("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&D("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return{value:null,children:new Map}}function Yn(e,t,n){if(kt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=gt(t);e.children.has(i)||e.children.set(i,Hn());const s=e.children.get(i);t=yt(t),Yn(s,t,n)}}function zn(e,t,n){null!==e.value?n(t,e.value):jn(e,((e,i)=>{const s=new pt(t.toString()+"/"+e);zn(i,s,n)}))}function jn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&z(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=1e4,Kn=3e4,Gn=3e5;class $n{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vn(e);const n=Bn+(Kn-Bn)*Math.random();ee(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;z(e,((e,i)=>{i>0&&(0,c.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),ee(this.reportStats_.bind(this),Math.floor(2*Math.random()*Gn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn;function Xn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Qn||(Qn={}));class ei{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Qn.ACK_USER_WRITE,this.source=Xn()}operationForChild(e){if(kt(this.path)){if(null!=this.affectedTree.value)return(0,c.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pt(e));return new ei(ft(),t,this.revert)}}return(0,c.hu)(gt(this.path)===e,"operationForChild called for unrelated child."),new ei(yt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.source=e,this.path=t,this.type=Qn.LISTEN_COMPLETE}operationForChild(e){return kt(this.path)?new ti(this.source,ft()):new ti(this.source,yt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Qn.OVERWRITE}operationForChild(e){return kt(this.path)?new ni(this.source,ft(),this.snap.getImmediateChild(e)):new ni(this.source,yt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Qn.MERGE}operationForChild(e){if(kt(this.path)){const t=this.children.subtree(new pt(e));return t.isEmpty()?null:t.value?new ni(this.source,ft(),t.value):new ii(this.source,ft(),t)}return(0,c.hu)(gt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,yt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(kt(e))return this.isFullyInitialized()&&!this.filtered_;const t=gt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oi(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Rn(t.childName,t.snapshotNode))})),ai(e,s,"child_removed",t,i,n),ai(e,s,"child_added",t,i,n),ai(e,s,"child_moved",r,i,n),ai(e,s,"child_changed",t,i,n),ai(e,s,"value",t,i,n),s}function ai(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>hi(e,t,n))),o.forEach((n=>{const i=li(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function li(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function hi(e,t,n){if(null==t.childName||null==n.childName)throw(0,c.g5)("Should only compare child_ events.");const i=new Yt(t.childName,t.snapshotNode),s=new Yt(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t){return{eventCache:e,serverCache:t}}function ui(e,t,n,i){return ci(new si(t,n,i),e.serverCache)}function di(e,t,n,i){return ci(e.eventCache,new si(t,n,i))}function _i(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function pi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;const gi=()=>(fi||(fi=new Qt(W)),fi);class mi{constructor(e,t=gi()){this.value=e,this.children=t}static fromObject(e){let t=new mi(null);return z(e,((e,n)=>{t=t.set(new pt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ft(),value:this.value};if(kt(e))return null;{const n=gt(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(yt(e),t);if(null!=s){const e=It(new pt(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(kt(e))return this;{const t=gt(e),n=this.children.get(t);return null!==n?n.subtree(yt(e)):new mi(null)}}set(e,t){if(kt(e))return new mi(t,this.children);{const n=gt(e),i=this.children.get(n)||new mi(null),s=i.set(yt(e),t),r=this.children.insert(n,s);return new mi(this.value,r)}}remove(e){if(kt(e))return this.children.isEmpty()?new mi(null):new mi(null,this.children);{const t=gt(e),n=this.children.get(t);if(n){const i=n.remove(yt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new mi(null):new mi(this.value,s)}return this}}get(e){if(kt(e))return this.value;{const t=gt(e),n=this.children.get(t);return n?n.get(yt(e)):null}}setTree(e,t){if(kt(e))return t;{const n=gt(e),i=this.children.get(n)||new mi(null),s=i.setTree(yt(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new mi(this.value,r)}}fold(e){return this.fold_(ft(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(It(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ft(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(kt(e))return null;{const i=gt(e),s=this.children.get(i);return s?s.findOnPath_(yt(e),It(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ft(),t)}foreachOnPath_(e,t,n){if(kt(e))return this;{this.value&&n(t,this.value);const i=gt(e),s=this.children.get(i);return s?s.foreachOnPath_(yt(e),It(t,i),n):new mi(null)}}foreach(e){this.foreach_(ft(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(It(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.writeTree_=e}static empty(){return new yi(new mi(null))}}function vi(e,t,n){if(kt(t))return new yi(new mi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=bt(s,t);return r=r.updateChild(o,n),new yi(e.writeTree_.set(s,r))}{const i=new mi(n),s=e.writeTree_.setTree(t,i);return new yi(s)}}}function Ci(e,t,n){let i=e;return z(n,((e,n)=>{i=vi(i,It(t,e),n)})),i}function wi(e,t){if(kt(t))return yi.empty();{const n=e.writeTree_.setTree(t,new mi(null));return new yi(n)}}function Ti(e,t){return null!=Ii(e,t)}function Ii(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function ki(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(un,((e,n)=>{t.push(new Yt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Yt(e,n.value))})),t}function bi(e,t){if(kt(t))return e;{const n=Ii(e,t);return new yi(null!=n?new mi(n):e.writeTree_.subtree(t))}}function Si(e){return e.writeTree_.isEmpty()}function Ei(e,t){return Ni(ft(),e.writeTree_,t)}function Ni(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,c.hu)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Ni(It(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(It(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t){return Xi(t,e)}function xi(e,t,n,i,s){(0,c.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=vi(e.visibleWrites,t,n)),e.lastWriteId=i}function Ri(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Di(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,c.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;while(s&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Mi(t,i.path)?s=!1:Et(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return Fi(e),!0;if(i.snap)e.visibleWrites=wi(e.visibleWrites,i.path);else{const t=i.children;z(t,(t=>{e.visibleWrites=wi(e.visibleWrites,It(i.path,t))}))}return!0}return!1}function Mi(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(It(e.path,n),t))return!0;return!1}function Fi(e){e.visibleWrites=Ai(e.allWrites,qi,ft()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function qi(e){return e.visible}function Ai(e,t,n){let i=yi.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Et(n,e)?(t=bt(n,e),i=vi(i,t,r.snap)):Et(e,n)&&(t=bt(e,n),i=vi(i,ft(),r.snap.getChild(t)));else{if(!r.children)throw(0,c.g5)("WriteRecord should have .snap or .children");if(Et(n,e))t=bt(n,e),i=Ci(i,t,r.children);else if(Et(e,n))if(t=bt(e,n),kt(t))i=Ci(i,ft(),r.children);else{const e=(0,c.DV)(r.children,gt(t));if(e){const n=e.getChild(yt(t));i=vi(i,ft(),n)}}}}}return i}function Li(e,t,n,i,s){if(i||s){const r=bi(e.visibleWrites,t);if(!s&&Si(r))return n;if(s||null!=n||Ti(r,ft())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Et(e.path,t)||Et(t,e.path))},o=Ai(e.allWrites,r,t),a=n||vn.EMPTY_NODE;return Ei(o,a)}return null}{const i=Ii(e.visibleWrites,t);if(null!=i)return i;{const i=bi(e.visibleWrites,t);if(Si(i))return n;if(null!=n||Ti(i,ft())){const e=n||vn.EMPTY_NODE;return Ei(i,e)}return null}}}function Oi(e,t,n){let i=vn.EMPTY_NODE;const s=Ii(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(un,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=bi(e.visibleWrites,t);return n.forEachChild(un,((e,t)=>{const n=Ei(bi(s,new pt(e)),t);i=i.updateImmediateChild(e,n)})),ki(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=bi(e.visibleWrites,t);return ki(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Wi(e,t,n,i,s){(0,c.hu)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=It(t,n);if(Ti(e.visibleWrites,r))return null;{const t=bi(e.visibleWrites,r);return Si(t)?s.getChild(n):Ei(t,s.getChild(n))}}function Ui(e,t,n,i){const s=It(t,n),r=Ii(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=bi(e.visibleWrites,s);return Ei(t,i.getNode().getImmediateChild(n))}return null}function Hi(e,t){return Ii(e.visibleWrites,t)}function Yi(e,t,n,i,s,r,o){let a;const l=bi(e.visibleWrites,t),h=Ii(l,ft());if(null!=h)a=h;else{if(null==n)return[];a=Ei(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<s)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function zi(){return{visibleWrites:yi.empty(),allWrites:[],lastWriteId:-1}}function ji(e,t,n,i){return Li(e.writeTree,e.treePath,t,n,i)}function Vi(e,t){return Oi(e.writeTree,e.treePath,t)}function Bi(e,t,n,i){return Wi(e.writeTree,e.treePath,t,n,i)}function Ki(e,t){return Hi(e.writeTree,It(e.treePath,t))}function Gi(e,t,n,i,s,r){return Yi(e.writeTree,e.treePath,t,n,i,s,r)}function $i(e,t,n){return Ui(e.writeTree,e.treePath,t,n)}function Qi(e,t){return Xi(It(e.treePath,t),e.writeTree)}function Xi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,c.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,c.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,xn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Pn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Nn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,c.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,xn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const es=new Ji;class ts{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $i(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:pi(this.viewCache_),s=Gi(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){return{filter:e}}function is(e,t){(0,c.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,c.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ss(e,t,n,i,s){const r=new Zi;let o,a;if(n.type===Qn.OVERWRITE){const l=n;l.source.fromUser?o=ls(e,t,l.path,l.snap,i,s,r):((0,c.hu)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!kt(l.path),o=as(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===Qn.MERGE){const l=n;l.source.fromUser?o=cs(e,t,l.path,l.children,i,s,r):((0,c.hu)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ds(e,t,l.path,l.children,i,s,a,r))}else if(n.type===Qn.ACK_USER_WRITE){const a=n;o=a.revert?fs(e,t,a.path,i,s,r):_s(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Qn.LISTEN_COMPLETE)throw(0,c.g5)("Unknown operation type: "+n.type);o=ps(e,t,n.path,i,r)}const l=r.getChanges();return rs(t,o,l),{viewCache:o,changes:l}}function rs(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_i(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(En(_i(t)))}}function os(e,t,n,i,s,r){const o=t.eventCache;if(null!=Ki(i,n))return t;{let a,l;if(kt(n))if((0,c.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=pi(t),s=n instanceof vn?n:vn.EMPTY_NODE,o=Vi(i,s);a=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=ji(i,pi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const h=gt(n);if(".priority"===h){(0,c.hu)(1===mt(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=Bi(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const c=yt(n);let u;if(o.isCompleteForChild(h)){l=t.serverCache.getNode();const e=Bi(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else u=$i(i,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,c,s,r):o.getNode()}}return ui(t,a,o.isFullyInitialized()||kt(n),e.filter.filtersNodes())}}function as(e,t,n,i,s,r,o,a){const l=t.serverCache;let h;const c=o?e.filter:e.filter.getIndexedFilter();if(kt(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),e,null)}else{const e=gt(n);if(!l.isCompleteForPath(n)&&mt(n)>1)return t;const s=yt(n),r=l.getNode().getImmediateChild(e),o=r.updateChild(s,i);h=".priority"===e?c.updatePriority(l.getNode(),o):c.updateChild(l.getNode(),e,o,s,es,null)}const u=di(t,h,l.isFullyInitialized()||kt(n),c.filtersNodes()),d=new ts(s,u,r);return os(e,u,n,s,d,a)}function ls(e,t,n,i,s,r,o){const a=t.eventCache;let l,h;const c=new ts(s,t,r);if(kt(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=ui(t,h,!0,e.filter.filtersNodes());else{const s=gt(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),l=ui(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=yt(n),h=a.getNode().getImmediateChild(s);let u;if(kt(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===vt(r)&&e.getChild(Tt(r)).isEmpty()?e:e.updateChild(r,i):vn.EMPTY_NODE}if(h.equals(u))l=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,c,o);l=ui(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function hs(e,t){return e.eventCache.isCompleteForChild(t)}function cs(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const h=It(n,i);hs(t,gt(h))&&(a=ls(e,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=It(n,i);hs(t,gt(h))||(a=ls(e,a,h,l,s,r,o))})),a}function us(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ds(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,h=t;l=kt(n)?i:new mi(null).setTree(n,i);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),c=us(e,l,i);h=as(e,h,new pt(n),c,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),c=us(e,l,i);h=as(e,h,new pt(n),c,s,r,o,a)}})),h}function _s(e,t,n,i,s,r,o){if(null!=Ki(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(kt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return as(e,t,n,l.getNode().getChild(n),s,r,a,o);if(kt(n)){let i=new mi(null);return l.getNode().forEachChild(Bt,((e,t)=>{i=i.set(new pt(e),t)})),ds(e,t,n,i,s,r,a,o)}return t}{let h=new mi(null);return i.foreach(((e,t)=>{const i=It(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))})),ds(e,t,n,h,s,r,a,o)}}function ps(e,t,n,i,s){const r=t.serverCache,o=di(t,r.getNode(),r.isFullyInitialized()||kt(n),r.isFiltered());return os(e,o,n,i,es,s)}function fs(e,t,n,i,s,r){let o;if(null!=Ki(i,n))return t;{const a=new ts(i,t,s),l=t.eventCache.getNode();let h;if(kt(n)||".priority"===gt(n)){let n;if(t.serverCache.isFullyInitialized())n=ji(i,pi(t));else{const e=t.serverCache.getNode();(0,c.hu)(e instanceof vn,"serverChildren would be complete if leaf node"),n=Vi(i,e)}h=e.filter.updateFullNode(l,n,r)}else{const s=gt(n);let c=$i(i,s,t.serverCache);null==c&&t.serverCache.isCompleteForChild(s)&&(c=l.getImmediateChild(s)),h=null!=c?e.filter.updateChild(l,s,c,yt(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,vn.EMPTY_NODE,yt(n),a,r):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ji(i,pi(t)),o.isLeafNode()&&(h=e.filter.updateFullNode(h,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Ki(i,ft()),ui(t,h,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Dn(n.getIndex()),s=An(n);this.processor_=ns(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(vn.EMPTY_NODE,r.getNode(),null),l=s.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),h=new si(a,r.isFullyInitialized(),i.filtersNodes()),c=new si(l,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=ci(c,h),this.eventGenerator_=new ri(this.query_)}get query(){return this.query_}}function ms(e){return e.viewCache_.serverCache.getNode()}function ys(e){return _i(e.viewCache_)}function vs(e,t){const n=pi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!kt(t)&&!n.getImmediateChild(gt(t)).isEmpty())?n.getChild(t):null}function Cs(e){return 0===e.eventRegistrations_.length}function ws(e,t){e.eventRegistrations_.push(t)}function Ts(e,t,n){const i=[];if(n){(0,c.hu)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Is(e,t,n,i){t.type===Qn.MERGE&&null!==t.source.queryId&&((0,c.hu)(pi(e.viewCache_),"We should always have a full cache before handling merges"),(0,c.hu)(_i(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=ss(e.processor_,s,t,n,i);return is(e.processor_,r.viewCache),(0,c.hu)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,bs(e,r.changes,r.viewCache.eventCache.getNode(),null)}function ks(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(un,((e,t)=>{i.push(Nn(e,t))}))}return n.isFullyInitialized()&&i.push(En(n.getNode())),bs(e,i,n.getNode(),t)}function bs(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return oi(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss,Es;class Ns{constructor(){this.views=new Map}}function Ps(e){(0,c.hu)(!Ss,"__referenceConstructor has already been defined"),Ss=e}function xs(){return(0,c.hu)(Ss,"Reference.ts has not been loaded"),Ss}function Rs(e){return 0===e.views.size}function Ds(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,c.hu)(null!=r,"SyncTree gave us an op for an invalid query."),Is(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Is(r,t,n,i));return s}}function Ms(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=ji(n,s?i:null),r=!1;e?r=!0:i instanceof vn?(e=Vi(n,i),r=!1):(e=vn.EMPTY_NODE,r=!1);const o=ci(new si(e,r,!1),new si(i,s,!1));return new gs(t,o)}return o}function Fs(e,t,n,i,s,r){const o=Ms(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),ws(o,n),ks(o,n)}function qs(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Us(e);if("default"===s)for(const[l,h]of e.views.entries())o=o.concat(Ts(h,n,i)),Cs(h)&&(e.views.delete(l),h.query._queryParams.loadsAllData()||r.push(h.query));else{const t=e.views.get(s);t&&(o=o.concat(Ts(t,n,i)),Cs(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Us(e)&&r.push(new(xs())(t._repo,t._path)),{removed:r,events:o}}function As(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ls(e,t){let n=null;for(const i of e.views.values())n=n||vs(i,t);return n}function Os(e,t){const n=t._queryParams;if(n.loadsAllData())return Hs(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ws(e,t){return null!=Os(e,t)}function Us(e){return null!=Hs(e)}function Hs(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e){(0,c.hu)(!Es,"__referenceConstructor has already been defined"),Es=e}function zs(){return(0,c.hu)(Es,"Reference.ts has not been loaded"),Es}let js=1;class Vs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mi(null),this.pendingWriteTree_=zi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bs(e,t,n,i,s){return xi(e.pendingWriteTree_,t,n,i,s),s?sr(e,new ni(Xn(),t,n)):[]}function Ks(e,t,n=!1){const i=Ri(e.pendingWriteTree_,t),s=Di(e.pendingWriteTree_,t);if(s){let t=new mi(null);return null!=i.snap?t=t.set(ft(),!0):z(i.children,(e=>{t=t.set(new pt(e),!0)})),sr(e,new ei(i.path,t,n))}return[]}function Gs(e,t,n){return sr(e,new ni(Zn(),t,n))}function $s(e,t,n){const i=mi.fromObject(n);return sr(e,new ii(Zn(),t,i))}function Qs(e,t){return sr(e,new ti(Zn(),t))}function Xs(e,t,n){const i=cr(e,n);if(i){const n=ur(i),s=n.path,r=n.queryId,o=bt(s,t),a=new ti(Jn(r),o);return dr(e,s,a)}return[]}function Zs(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Ws(o,t))){const l=qs(o,t,n,i);Rs(o)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const h=l.removed;if(a=l.events,!s){const n=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Us(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=_r(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=ar(e,i);e.listenProvider_.startListening(pr(s),lr(e,s),r.hashFn,r.onComplete)}}}if(!s&&h.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(pr(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(hr(t));e.listenProvider_.stopListening(pr(t),n)}))}fr(e,h)}return a}function Js(e,t,n,i){const s=cr(e,i);if(null!=s){const i=ur(s),r=i.path,o=i.queryId,a=bt(r,t),l=new ni(Jn(o),a,n);return dr(e,r,l)}return[]}function er(e,t,n,i){const s=cr(e,i);if(s){const i=ur(s),r=i.path,o=i.queryId,a=bt(r,t),l=mi.fromObject(n),h=new ii(Jn(o),a,l);return dr(e,r,h)}return[]}function tr(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=bt(e,s);r=r||Ls(t,n),o=o||Us(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||Us(l),r=r||Ls(l,ft())):(l=new Ns,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=r)a=!0;else{a=!1,r=vn.EMPTY_NODE;const t=e.syncPointTree_.subtree(s);t.foreachChild(((e,t)=>{const n=Ls(t,ft());n&&(r=r.updateImmediateChild(e,n))}))}const h=Ws(l,t);if(!h&&!t._queryParams.loadsAllData()){const n=hr(t);(0,c.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=gr();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=Pi(e.pendingWriteTree_,s);let d=Fs(l,t,n,u,r,a);if(!h&&!o&&!i){const n=Os(l,t);d=d.concat(mr(e,t,n))}return d}function nr(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=bt(e,t),s=Ls(n,i);if(s)return s}));return Li(s,t,r,n,i)}function ir(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=bt(e,n);i=i||Ls(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Ls(s,ft()):(s=new Ns,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new si(i,!0,!1):null,a=Pi(e.pendingWriteTree_,t._path),l=Ms(s,t,a,r?o.getNode():vn.EMPTY_NODE,r);return ys(l)}function sr(e,t){return rr(t,e.syncPointTree_,null,Pi(e.pendingWriteTree_,ft()))}function rr(e,t,n,i){if(kt(e.path))return or(e,t,n,i);{const s=t.get(ft());null==n&&null!=s&&(n=Ls(s,ft()));let r=[];const o=gt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Qi(i,o);r=r.concat(rr(a,l,e,t))}return s&&(r=r.concat(Ds(s,e,i,n))),r}}function or(e,t,n,i){const s=t.get(ft());null==n&&null!=s&&(n=Ls(s,ft()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Qi(i,t),l=e.operationForChild(t);l&&(r=r.concat(or(l,s,o,a)))})),s&&(r=r.concat(Ds(s,e,i,n))),r}function ar(e,t){const n=t.query,i=lr(e,n);return{hashFn:()=>{const e=ms(t)||vn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Xs(e,n._path,i):Qs(e,n._path);{const i=K(t,n);return Zs(e,n,null,i)}}}}function lr(e,t){const n=hr(t);return e.queryToTagMap.get(n)}function hr(e){return e._path.toString()+"$"+e._queryIdentifier}function cr(e,t){return e.tagToQueryMap.get(t)}function ur(e){const t=e.indexOf("$");return(0,c.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pt(e.substr(0,t))}}function dr(e,t,n){const i=e.syncPointTree_.get(t);(0,c.hu)(i,"Missing sync point for query tag that we're tracking");const s=Pi(e.pendingWriteTree_,t);return Ds(i,n,s,null)}function _r(e){return e.fold(((e,t,n)=>{if(t&&Us(t)){const e=Hs(t);return[e]}{let e=[];return t&&(e=As(t)),z(n,((t,n)=>{e=e.concat(n)})),e}}))}function pr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(zs())(e._repo,e._path):e}function fr(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=hr(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function gr(){return js++}function mr(e,t,n){const i=t._path,s=lr(e,t),r=ar(e,n),o=e.listenProvider_.startListening(pr(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)(0,c.hu)(!Us(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!kt(e)&&t&&Us(t))return[Hs(t).query];{let e=[];return t&&(e=e.concat(As(t).map((e=>e.query)))),z(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(pr(i),lr(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yr(t)}node(){return this.node_}}class vr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=It(this.path_,e);return new vr(this.syncTree_,t)}node(){return nr(this.syncTree_,this.path_)}}const Cr=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},wr=function(e,t,n){return e&&"object"===typeof e?((0,c.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Tr(e[".sv"],t,n):"object"===typeof e[".sv"]?Ir(e[".sv"],t):void(0,c.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Tr=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,c.hu)(!1,"Unexpected server value: "+e)}},Ir=function(e,t,n){e.hasOwnProperty("increment")||(0,c.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,c.hu)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,c.hu)(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s,o=r.getValue();return"number"!==typeof o?i:o+i},kr=function(e,t,n,i){return Sr(t,new vr(n,e),i)},br=function(e,t,n){return Sr(e,new yr(t),n)};function Sr(e,t,n){const i=e.getPriority().val(),s=wr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=wr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new an(r,In(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new an(s))),i.forEachChild(un,((e,i)=>{const s=Sr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Nr(e,t){let n=t instanceof pt?t:new pt(t),i=e,s=gt(n);while(null!==s){const e=(0,c.DV)(i.node.children,s)||{children:{},childCount:0};i=new Er(s,i,e),n=yt(n),s=gt(n)}return i}function Pr(e){return e.node.value}function xr(e,t){e.node.value=t,Lr(e)}function Rr(e){return e.node.childCount>0}function Dr(e){return void 0===Pr(e)&&!Rr(e)}function Mr(e,t){z(e.node.children,((n,i)=>{t(new Er(n,e,i))}))}function Fr(e,t,n,i){n&&!i&&t(e),Mr(e,(e=>{Fr(e,t,!0,i)})),n&&i&&t(e)}function qr(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ar(e){return new pt(null===e.parent?e.name:Ar(e.parent)+"/"+e.name)}function Lr(e){null!==e.parent&&Or(e.parent,e.name,e)}function Or(e,t,n){const i=Dr(n),s=(0,c.r3)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Lr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Lr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=/[\[\].#$\/\u0000-\u001F\u007F]/,Ur=/[\[\].#$\u0000-\u001F\u007F]/,Hr=10485760,Yr=function(e){return"string"===typeof e&&0!==e.length&&!Wr.test(e)},zr=function(e){return"string"===typeof e&&0!==e.length&&!Ur.test(e)},jr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zr(e)},Vr=function(e,t,n){const i=n instanceof pt?new Nt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Dt(i));if("function"===typeof t)throw new Error(e+"contains a function "+Dt(i)+" with contents = "+t.toString());if(F(t))throw new Error(e+"contains "+t.toString()+" "+Dt(i));if("string"===typeof t&&t.length>Hr/3&&(0,c.ug)(t)>Hr)throw new Error(e+"contains a string greater than "+Hr+" utf8 bytes "+Dt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(z(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Yr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Dt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Pt(i,t),Vr(e,r,i),xt(i)})),n&&s)throw new Error(e+' contains ".value" child '+Dt(i)+" in addition to actual children.")}},Br=function(e,t,n,i){if((!i||void 0!==n)&&!zr(n))throw new Error((0,c.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Kr=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Br(e,t,n,i)},Gr=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Yr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!jr(n))throw new Error((0,c.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||St(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Xr(e,t,n){Qr(e,n),Zr(e,(e=>Et(e,t)||Et(t,e)))}function Zr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Jr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Jr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&N("event: "+n.toString()),Z(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="repo_interrupt",to=25;class no{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $r,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hn(),this.transactionQueueTree_=new Er,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function io(e,t,n){if(e.stats_=we(e.repoInfo_),e.forceRestClient_||J())e.server_=new Wn(e.repoInfo_,((t,n,i,s)=>{oo(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ao(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,c.Wl)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ht(e.repoInfo_,t,((t,n,i,s)=>{oo(e,t,n,i,s)}),(t=>{ao(e,t)}),(t=>{lo(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Te(e.repoInfo_,(()=>new $n(e.stats_,e.server_))),e.infoData_=new Un,e.infoSyncTree_=new Vs({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Gs(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ho(e,"connected",!1),e.serverSyncTree_=new Vs({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Xr(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function so(e){const t=e.infoData_.getNode(new pt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ro(e){return Cr({timestamp:so(e)})}function oo(e,t,n,i,s){e.dataUpdateCount++;const r=new pt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=(0,c.UI)(n,(e=>In(e)));o=er(e.serverSyncTree_,r,t,s)}else{const t=In(n);o=Js(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,c.UI)(n,(e=>In(e)));o=$s(e.serverSyncTree_,r,t)}else{const t=In(n);o=Gs(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=vo(e,r)),Xr(e.eventQueue_,a,o)}function ao(e,t){ho(e,"connected",t),!1===t&&_o(e)}function lo(e,t){z(t,((t,n)=>{ho(e,t,n)}))}function ho(e,t,n){const i=new pt("/.info/"+t),s=In(n);e.infoData_.updateSnapshot(i,s);const r=Gs(e.infoSyncTree_,i,s);Xr(e.eventQueue_,i,r)}function co(e){return e.nextWriteId_++}function uo(e,t,n){const i=ir(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=In(i).withIndex(t._queryParams.getIndex());let r;if(tr(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Gs(e.serverSyncTree_,t._path,s);else{const n=lr(e.serverSyncTree_,t);r=Js(e.serverSyncTree_,t._path,s,n)}return Xr(e.eventQueue_,t._path,r),Zs(e.serverSyncTree_,t,n,null,!0),s}),(n=>(fo(e,"get for query "+(0,c.Wl)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function _o(e){fo(e,"onDisconnectEvents");const t=ro(e),n=Hn();zn(e.onDisconnect_,ft(),((i,s)=>{const r=kr(i,s,e.serverSyncTree_,t);Yn(n,i,r)}));let i=[];zn(n,ft(),((t,n)=>{i=i.concat(Gs(e.serverSyncTree_,t,n));const s=bo(e,t);vo(e,s)})),e.onDisconnect_=Hn(),Xr(e.eventQueue_,ft(),i)}function po(e){e.persistentConnection_&&e.persistentConnection_.interrupt(eo)}function fo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),N(n,...t)}function go(e,t,n){return nr(e.serverSyncTree_,t,n)||vn.EMPTY_NODE}function mo(e,t=e.transactionQueueTree_){if(t||ko(e,t),Pr(t)){const n=To(e,t);(0,c.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&yo(e,Ar(t),n)}else Rr(t)&&Mr(t,(t=>{mo(e,t)}))}function yo(e,t,n){const i=n.map((e=>e.currentWriteId)),s=go(e,t,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const e=n[h];(0,c.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=bt(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{fo(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ks(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ko(e,Nr(e.transactionQueueTree_,t)),mo(e,e.transactionQueueTree_),Xr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Z(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{D("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}vo(e,t)}}),o)}function vo(e,t){const n=wo(e,t),i=Ar(n),s=To(e,n);return Co(e,s,i),i}function Co(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const r=t[a],l=bt(n,r.path);let h,u=!1;if((0,c.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)u=!0,h=r.abortReason,s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=to)u=!0,h="maxretry",s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0));else{const n=go(e,r.path,o);r.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Vr("transaction failed: Data returned ",i,r.path);let t=In(i);const a="object"===typeof i&&null!=i&&(0,c.r3)(i,".priority");a||(t=t.updatePriority(n.getPriority()));const l=r.currentWriteId,h=ro(e),u=br(t,n,h);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=u,r.currentWriteId=co(e),o.splice(o.indexOf(l),1),s=s.concat(Bs(e.serverSyncTree_,r.path,u,r.currentWriteId,r.applyLocally)),s=s.concat(Ks(e.serverSyncTree_,l,!0))}else u=!0,h="nodata",s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0))}Xr(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}ko(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)Z(i[a]);mo(e,e.transactionQueueTree_)}function wo(e,t){let n,i=e.transactionQueueTree_;n=gt(t);while(null!==n&&void 0===Pr(i))i=Nr(i,n),t=yt(t),n=gt(t);return i}function To(e,t){const n=[];return Io(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Io(e,t,n){const i=Pr(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Mr(t,(t=>{Io(e,t,n)}))}function ko(e,t){const n=Pr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,xr(t,n.length>0?n:void 0)}Mr(t,(t=>{ko(e,t)}))}function bo(e,t){const n=Ar(wo(e,t)),i=Nr(e.transactionQueueTree_,t);return qr(i,(t=>{So(e,t)})),So(e,i),Fr(i,(t=>{So(e,t)})),n}function So(e,t){const n=Pr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,c.hu)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,c.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ks(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?xr(t,void 0):n.length=r+1,Xr(e.eventQueue_,Ar(t),s);for(let e=0;e<i.length;e++)Z(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function No(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):D(`Invalid query segment '${n}' in query '${e}'`)}return t}const Po=function(e,t){const n=xo(e),i=n.namespace;"firebase.com"===n.domain&&R(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||R("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||M();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new fe(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new pt(n.pathString)}},xo=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"===typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=Eo(e.substring(c,u)));const d=No(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;const _=t.slice(0,h);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},Ro="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,c.Wl)(this.snapshot.exportVal())}}class Mo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,c.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return kt(this._path)?null:vt(this._path)}get ref(){return new Ao(this._repo,this._path)}get _queryIdentifier(){const e=On(this._queryParams),t=H(e);return"{}"===t?"default":t}get _queryObject(){return On(this._queryParams)}isEqual(e){if(e=(0,c.m9)(e),!(e instanceof qo))return!1;const t=this._repo===e._repo,n=St(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ct(this._path)}}class Ao extends qo{constructor(e,t){super(e,t,new qn,!1)}get parent(){const e=Tt(this._path);return null===e?null:new Ao(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Lo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pt(e),n=Wo(this.ref,e);return new Lo(this._node.getChild(t),n,un)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Lo(n,Wo(this.ref,t),un))))}hasChild(e){const t=new pt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Oo(e,t){return e=(0,c.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Wo(e._root,t):e._root}function Wo(e,t){return e=(0,c.m9)(e),null===gt(e._path)?Kr("child","path",t,!1):Br("child","path",t,!1),new Ao(e._repo,It(e._path,t))}function Uo(e){e=(0,c.m9)(e);const t=new Fo((()=>{})),n=new Ho(t);return uo(e._repo,e,n).then((t=>new Lo(t,new Ao(e._repo,e._path),e._queryParams.getIndex())))}class Ho{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Do("value",this,new Lo(e.snapshotNode,new Ao(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Mo(this,e,t):null}matches(e){return e instanceof Ho&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}Ps(Ao),Ys(Ao);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yo="FIREBASE_DATABASE_EMULATOR_HOST",zo={};let jo=!1;function Vo(e,t,n,i){e.repoInfo_=new fe(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function Bo(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||R("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),N("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Po(r,s),h=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/attendance.github.io/"}[Yo]),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,l=Po(r,s),h=l.repoInfo):o=!l.repoInfo.secure;const c=s&&o?new ie(ie.OWNER):new ne(e.name,e.options,t);Gr("Invalid Firebase Database URL",l),kt(l.path)||R("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Go(h,e,c,new te(e.name,n));return new $o(u,e)}function Ko(e,t){const n=zo[t];n&&n[e.key]===e||R(`Database ${t}(${e.repoInfo_}) has already been deleted.`),po(e),delete n[e.key]}function Go(e,t,n,i){let s=zo[t.name];s||(s={},zo[t.name]=s);let r=s[e.toURLString()];return r&&R("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new no(e,jo,n,i),s[e.toURLString()]=r,r}class $o{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(io(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ao(this._repo,ft())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ko(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&R("Cannot call "+e+" on a deleted database.")}}function Qo(e=(0,l.Mq)(),t){const n=(0,l.qX)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,c.P0)("database");e&&Xo(n,...e)}return n}function Xo(e,t,n,i={}){e=(0,c.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&R("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&R('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ie(ie.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,c.Sg)(i.mockUserToken,e.app.options.projectId);r=new ie(t)}Vo(s,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(e){f(l.Jn),(0,l.Xd)(new h.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Bo(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),(0,l.KN)(d,_,e),(0,l.KN)(d,_,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ht.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Zo();var Jo=n(1684),ea=n(2201),ta=function(e){return(0,r.dD)("data-v-dc6839de"),e=e(),(0,r.Cn)(),e},na=ta((function(){return(0,r._)("br",null,null,-1)})),ia=ta((function(){return(0,r._)("br",null,null,-1)})),sa=ta((function(){return(0,r._)("br",null,null,-1)})),ra=ta((function(){return(0,r._)("br",null,null,-1)})),oa=ta((function(){return(0,r._)("br",null,null,-1)}));const aa={__name:"SoalSoal",setup:function(e){var t=(0,o.iH)(!1),n=function(e){t.value=e},l=(0,ea.tv)(),h=Qo(),c=(0,o.iH)([]),u=(0,o.iH)(0),d=(0,o.iH)(null),_=(0,o.iH)(0),p=(0,r.Fl)((function(){return l.currentRoute.value.params.menuId})),f=(0,r.Fl)((function(){return c.value[u.value]})),g=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n,s,r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Oo(h,"menus"),e.prev=1,e.next=4,Uo(t);case 4:n=e.sent,s=n.val(),s?(r=s.find((function(e){return e.id===p.value})),r?(c.value=r.questions||[],m()):console.error("Selected menu not found")):console.error("Menus data not found"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.error("Error loading questions from Firebase:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){u.value=0,d.value=null,_.value=0};(0,r.bv)((0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:case"end":return e.stop()}}),e)}))));var y=function(){null!==d.value&&(C.value[u.value]=d.value),d.value===f.value.correctAnswer&&_.value++,u.value++,u.value>=c.value.length&&(u.value=c.value.length),d.value=C.value[u.value]||null},v=(0,o.iH)([]),C=(0,o.iH)([]),w=(0,o.iH)(Array(c.value.length).fill(!1)),T=function(e){null!==d.value&&(C.value[u.value]=d.value,w.value[u.value]=d.value===f.value.correctAnswer),v.value.push(e),u.value=e,d.value=C.value[e]||null,n(!1);for(var t=0;t<w.value.length;t++)w.value[t]=C.value[t]===c.value[t].correctAnswer};console.log("answeredQuestions:",w.value);var I=function(){return _.value},k=function(){console.log("Finish Quiz - Score:",_.value),console.log("Quiz Selesai!"),console.log("Menu ID:",p.value),console.log("Filtered Questions:",c.value),console.log("Selected Questions:",v.value),console.log("Selected Answers:",C.value),l.push("/")};return function(e,i){return(0,r.wg)(),(0,r.j4)((0,o.SU)(Jo._i),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Gu),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.sr),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.wd),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Latihan Soal")]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.W2),{class:"ion-padding"},{default:(0,r.w5)((function(){return[na,ia,sa,ra,oa,(0,r._)("h1",null,"Menu Latihan Id: "+(0,a.zw)(p.value),1),f.value?((0,r.wg)(),(0,r.j4)((0,o.SU)(Jo.PM),{key:0},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Zi),null,{default:(0,r.w5)((function(){return[(0,r.Uk)(" Pertanyaan "+(0,a.zw)(u.value+1)+" dari "+(0,a.zw)(c.value.length),1)]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.FN),null,{default:(0,r.w5)((function(){return[(0,r._)("p",null,(0,a.zw)(f.value.text),1),(0,r.Wm)((0,o.SU)(Jo.q_),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.se),{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=function(e){return d.value=e})},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.value.options,(function(e,t){return(0,r.wg)(),(0,r.j4)((0,o.SU)(Jo.Ie),{key:t},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e),1)]})),_:2},1024),(0,r.Wm)((0,o.SU)(Jo.B7),{value:e},null,8,["value"])]})),_:2},1024)})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.YG),{onClick:y,expand:"full",disabled:null===d.value},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Selanjutnya ")]})),_:1},8,["disabled"])]})),_:1})):c.value.length>0&&u.value===c.value.length?((0,r.wg)(),(0,r.j4)((0,o.SU)(Jo.PM),{key:1},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Zi),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Quiz Selesai!")]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.FN),null,{default:(0,r.w5)((function(){return[(0,r._)("p",null,"Skor Anda: "+(0,a.zw)(I())+"/"+(0,a.zw)(c.value.length),1)]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.YG),{expand:"full",onClick:k},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Selesai ")]})),_:1})]})),_:1})):((0,r.wg)(),(0,r.j4)((0,o.SU)(Jo.PM),{key:2},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Zi),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Belum Ada Pertanyaan")]})),_:1})]})),_:1})),(0,r.Wm)((0,o.SU)(Jo.YG),{expand:"block",onClick:i[1]||(i[1]=function(e){return n(!0)})},{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilih Pertanyaan")]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.ki),{"is-open":t.value},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Gu),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.sr),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.wd),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("List Pertanyaan")]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.Sm),{slot:"end"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.YG),{onClick:i[2]||(i[2]=function(e){return n(!1)})},{default:(0,r.w5)((function(){return[(0,r.Uk)("Close")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)((0,o.SU)(Jo.W2),{class:"ion-padding"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.q_),null,{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.value,(function(e,t){return(0,r.wg)(),(0,r.j4)((0,o.SU)(Jo.Ie),{key:t,onClick:function(e){return T(t)}},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(Jo.Q$),{class:(0,a.C_)({answered:w.value[t],unanswered:!w.value[t]})},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.text),1)]})),_:2},1032,["class"])]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),_:1})]})),_:1},8,["is-open"])]})),_:1})]})),_:1})}}};var la=n(3744);const ha=(0,la.Z)(aa,[["__scopeId","data-v-dc6839de"]]),ca=ha}}]);
//# sourceMappingURL=857.2e420441.js.map