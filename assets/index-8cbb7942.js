(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function _o(e,n){const t=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)t[a[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}function An(e){if(Q(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],o=Ae(a)?Hi(a):An(a);if(o)for(const r in o)n[r]=o[r]}return n}else{if(Ae(e))return e;if(ue(e))return e}}const Bi=/;(?![^(]*\))/g,Li=/:([^]+)/,Di=/\/\*.*?\*\//gs;function Hi(e){const n={};return e.replace(Di,"").split(Bi).forEach(t=>{if(t){const a=t.split(Li);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function we(e){let n="";if(Ae(e))n=e;else if(Q(e))for(let t=0;t<e.length;t++){const a=we(e[t]);a&&(n+=a+" ")}else if(ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Ui="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qi=_o(Ui);function us(e){return!!e||e===""}function Wi(e,n){if(e.length!==n.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=ka(e[a],n[a]);return t}function ka(e,n){if(e===n)return!0;let t=rr(e),a=rr(n);if(t||a)return t&&a?e.getTime()===n.getTime():!1;if(t=xt(e),a=xt(n),t||a)return e===n;if(t=Q(e),a=Q(n),t||a)return t&&a?Wi(e,n):!1;if(t=ue(e),a=ue(n),t||a){if(!t||!a)return!1;const o=Object.keys(e).length,r=Object.keys(n).length;if(o!==r)return!1;for(const s in e){const i=e.hasOwnProperty(s),l=n.hasOwnProperty(s);if(i&&!l||!i&&l||!ka(e[s],n[s]))return!1}}return String(e)===String(n)}function fs(e,n){return e.findIndex(t=>ka(t,n))}const Ce=e=>Ae(e)?e:e==null?"":Q(e)||ue(e)&&(e.toString===ms||!ee(e.toString))?JSON.stringify(e,ds,2):String(e),ds=(e,n)=>n&&n.__v_isRef?ds(e,n.value):Zn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,o])=>(t[`${a} =>`]=o,t),{})}:_a(n)?{[`Set(${n.size})`]:[...n.values()]}:ue(n)&&!Q(n)&&!bs(n)?String(n):n,de={},Xn=[],Qe=()=>{},Vi=()=>!1,Yi=/^on[^a-z]/,wa=e=>Yi.test(e),xo=e=>e.startsWith("onUpdate:"),Le=Object.assign,Co=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ki=Object.prototype.hasOwnProperty,ae=(e,n)=>Ki.call(e,n),Q=Array.isArray,Zn=e=>Mt(e)==="[object Map]",_a=e=>Mt(e)==="[object Set]",rr=e=>Mt(e)==="[object Date]",ee=e=>typeof e=="function",Ae=e=>typeof e=="string",xt=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",ps=e=>ue(e)&&ee(e.then)&&ee(e.catch),ms=Object.prototype.toString,Mt=e=>ms.call(e),Gi=e=>Mt(e).slice(8,-1),bs=e=>Mt(e)==="[object Object]",Ao=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ea=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Ji=/-(\w)/g,cn=xa(e=>e.replace(Ji,(n,t)=>t?t.toUpperCase():"")),Xi=/\B([A-Z])/g,it=xa(e=>e.replace(Xi,"-$1").toLowerCase()),Ca=xa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ra=xa(e=>e?`on${Ca(e)}`:""),Ct=(e,n)=>!Object.is(e,n),na=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ia=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Ka=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let sr;const Zi=()=>sr||(sr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ke;class Qi{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!n&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Ke;try{return Ke=this,n()}finally{Ke=t}}}on(){Ke=this}off(){Ke=this.parent}stop(n){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function el(e,n=Ke){n&&n.active&&n.effects.push(e)}function nl(){return Ke}const So=e=>{const n=new Set(e);return n.w=0,n.n=0,n},gs=e=>(e.w&$n)>0,hs=e=>(e.n&$n)>0,tl=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=$n},al=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const o=n[a];gs(o)&&!hs(o)?o.delete(e):n[t++]=o,o.w&=~$n,o.n&=~$n}n.length=t}},Ga=new WeakMap;let pt=0,$n=1;const Ja=30;let Ge;const Un=Symbol(""),Xa=Symbol("");class To{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,el(this,a)}run(){if(!this.active)return this.fn();let n=Ge,t=Sn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Ge,Ge=this,Sn=!0,$n=1<<++pt,pt<=Ja?tl(this):ir(this),this.fn()}finally{pt<=Ja&&al(this),$n=1<<--pt,Ge=this.parent,Sn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(ir(this),this.onStop&&this.onStop(),this.active=!1)}}function ir(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Sn=!0;const ys=[];function lt(){ys.push(Sn),Sn=!1}function ct(){const e=ys.pop();Sn=e===void 0?!0:e}function Ue(e,n,t){if(Sn&&Ge){let a=Ga.get(e);a||Ga.set(e,a=new Map);let o=a.get(t);o||a.set(t,o=So()),vs(o)}}function vs(e,n){let t=!1;pt<=Ja?hs(e)||(e.n|=$n,t=!gs(e)):t=!e.has(Ge),t&&(e.add(Ge),Ge.deps.push(e))}function mn(e,n,t,a,o,r){const s=Ga.get(e);if(!s)return;let i=[];if(n==="clear")i=[...s.values()];else if(t==="length"&&Q(e)){const l=Number(a);s.forEach((u,f)=>{(f==="length"||f>=l)&&i.push(u)})}else switch(t!==void 0&&i.push(s.get(t)),n){case"add":Q(e)?Ao(t)&&i.push(s.get("length")):(i.push(s.get(Un)),Zn(e)&&i.push(s.get(Xa)));break;case"delete":Q(e)||(i.push(s.get(Un)),Zn(e)&&i.push(s.get(Xa)));break;case"set":Zn(e)&&i.push(s.get(Un));break}if(i.length===1)i[0]&&Za(i[0]);else{const l=[];for(const u of i)u&&l.push(...u);Za(So(l))}}function Za(e,n){const t=Q(e)?e:[...e];for(const a of t)a.computed&&lr(a);for(const a of t)a.computed||lr(a)}function lr(e,n){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ol=_o("__proto__,__v_isRef,__isVue"),ks=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xt)),rl=$o(),sl=$o(!1,!0),il=$o(!0),cr=ll();function ll(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=re(this);for(let r=0,s=this.length;r<s;r++)Ue(a,"get",r+"");const o=a[n](...t);return o===-1||o===!1?a[n](...t.map(re)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){lt();const a=re(this)[n].apply(this,t);return ct(),a}}),e}function cl(e){const n=re(this);return Ue(n,"has",e),n.hasOwnProperty(e)}function $o(e=!1,n=!1){return function(a,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&r===(e?n?Al:As:n?Cs:xs).get(a))return a;const s=Q(a);if(!e){if(s&&ae(cr,o))return Reflect.get(cr,o,r);if(o==="hasOwnProperty")return cl}const i=Reflect.get(a,o,r);return(xt(o)?ks.has(o):ol(o))||(e||Ue(a,"get",o),n)?i:Ne(i)?s&&Ao(o)?i:i.value:ue(i)?e?Ss(i):Po(i):i}}const ul=ws(),fl=ws(!0);function ws(e=!1){return function(t,a,o,r){let s=t[a];if(tt(s)&&Ne(s)&&!Ne(o))return!1;if(!e&&(!la(o)&&!tt(o)&&(s=re(s),o=re(o)),!Q(t)&&Ne(s)&&!Ne(o)))return s.value=o,!0;const i=Q(t)&&Ao(a)?Number(a)<t.length:ae(t,a),l=Reflect.set(t,a,o,r);return t===re(r)&&(i?Ct(o,s)&&mn(t,"set",a,o):mn(t,"add",a,o)),l}}function dl(e,n){const t=ae(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&mn(e,"delete",n,void 0),a}function pl(e,n){const t=Reflect.has(e,n);return(!xt(n)||!ks.has(n))&&Ue(e,"has",n),t}function ml(e){return Ue(e,"iterate",Q(e)?"length":Un),Reflect.ownKeys(e)}const _s={get:rl,set:ul,deleteProperty:dl,has:pl,ownKeys:ml},bl={get:il,set(e,n){return!0},deleteProperty(e,n){return!0}},gl=Le({},_s,{get:sl,set:fl}),Eo=e=>e,Aa=e=>Reflect.getPrototypeOf(e);function Bt(e,n,t=!1,a=!1){e=e.__v_raw;const o=re(e),r=re(n);t||(n!==r&&Ue(o,"get",n),Ue(o,"get",r));const{has:s}=Aa(o),i=a?Eo:t?jo:At;if(s.call(o,n))return i(e.get(n));if(s.call(o,r))return i(e.get(r));e!==o&&e.get(n)}function Lt(e,n=!1){const t=this.__v_raw,a=re(t),o=re(e);return n||(e!==o&&Ue(a,"has",e),Ue(a,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function Dt(e,n=!1){return e=e.__v_raw,!n&&Ue(re(e),"iterate",Un),Reflect.get(e,"size",e)}function ur(e){e=re(e);const n=re(this);return Aa(n).has.call(n,e)||(n.add(e),mn(n,"add",e,e)),this}function fr(e,n){n=re(n);const t=re(this),{has:a,get:o}=Aa(t);let r=a.call(t,e);r||(e=re(e),r=a.call(t,e));const s=o.call(t,e);return t.set(e,n),r?Ct(n,s)&&mn(t,"set",e,n):mn(t,"add",e,n),this}function dr(e){const n=re(this),{has:t,get:a}=Aa(n);let o=t.call(n,e);o||(e=re(e),o=t.call(n,e)),a&&a.call(n,e);const r=n.delete(e);return o&&mn(n,"delete",e,void 0),r}function pr(){const e=re(this),n=e.size!==0,t=e.clear();return n&&mn(e,"clear",void 0,void 0),t}function Ht(e,n){return function(a,o){const r=this,s=r.__v_raw,i=re(s),l=n?Eo:e?jo:At;return!e&&Ue(i,"iterate",Un),s.forEach((u,f)=>a.call(o,l(u),l(f),r))}}function Ut(e,n,t){return function(...a){const o=this.__v_raw,r=re(o),s=Zn(r),i=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=o[e](...a),f=t?Eo:n?jo:At;return!n&&Ue(r,"iterate",l?Xa:Un),{next(){const{value:v,done:m}=u.next();return m?{value:v,done:m}:{value:i?[f(v[0]),f(v[1])]:f(v),done:m}},[Symbol.iterator](){return this}}}}function wn(e){return function(...n){return e==="delete"?!1:this}}function hl(){const e={get(r){return Bt(this,r)},get size(){return Dt(this)},has:Lt,add:ur,set:fr,delete:dr,clear:pr,forEach:Ht(!1,!1)},n={get(r){return Bt(this,r,!1,!0)},get size(){return Dt(this)},has:Lt,add:ur,set:fr,delete:dr,clear:pr,forEach:Ht(!1,!0)},t={get(r){return Bt(this,r,!0)},get size(){return Dt(this,!0)},has(r){return Lt.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Ht(!0,!1)},a={get(r){return Bt(this,r,!0,!0)},get size(){return Dt(this,!0)},has(r){return Lt.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Ht(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ut(r,!1,!1),t[r]=Ut(r,!0,!1),n[r]=Ut(r,!1,!0),a[r]=Ut(r,!0,!0)}),[e,t,n,a]}const[yl,vl,kl,wl]=hl();function Oo(e,n){const t=n?e?wl:kl:e?vl:yl;return(a,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(ae(t,o)&&o in a?t:a,o,r)}const _l={get:Oo(!1,!1)},xl={get:Oo(!1,!0)},Cl={get:Oo(!0,!1)},xs=new WeakMap,Cs=new WeakMap,As=new WeakMap,Al=new WeakMap;function Sl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tl(e){return e.__v_skip||!Object.isExtensible(e)?0:Sl(Gi(e))}function Po(e){return tt(e)?e:Fo(e,!1,_s,_l,xs)}function $l(e){return Fo(e,!1,gl,xl,Cs)}function Ss(e){return Fo(e,!0,bl,Cl,As)}function Fo(e,n,t,a,o){if(!ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const s=Tl(e);if(s===0)return e;const i=new Proxy(e,s===2?a:t);return o.set(e,i),i}function Qn(e){return tt(e)?Qn(e.__v_raw):!!(e&&e.__v_isReactive)}function tt(e){return!!(e&&e.__v_isReadonly)}function la(e){return!!(e&&e.__v_isShallow)}function Ts(e){return Qn(e)||tt(e)}function re(e){const n=e&&e.__v_raw;return n?re(n):e}function $s(e){return ia(e,"__v_skip",!0),e}const At=e=>ue(e)?Po(e):e,jo=e=>ue(e)?Ss(e):e;function Es(e){Sn&&Ge&&(e=re(e),vs(e.dep||(e.dep=So())))}function Os(e,n){e=re(e);const t=e.dep;t&&Za(t)}function Ne(e){return!!(e&&e.__v_isRef===!0)}function Oe(e){return El(e,!1)}function El(e,n){return Ne(e)?e:new Ol(e,n)}class Ol{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:re(n),this._value=t?n:At(n)}get value(){return Es(this),this._value}set value(n){const t=this.__v_isShallow||la(n)||tt(n);n=t?n:re(n),Ct(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:At(n),Os(this))}}function E(e){return Ne(e)?e.value:e}const Pl={get:(e,n,t)=>E(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const o=e[n];return Ne(o)&&!Ne(t)?(o.value=t,!0):Reflect.set(e,n,t,a)}};function Ps(e){return Qn(e)?e:new Proxy(e,Pl)}var Fs;class Fl{constructor(n,t,a,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Fs]=!1,this._dirty=!0,this.effect=new To(n,()=>{this._dirty||(this._dirty=!0,Os(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const n=re(this);return Es(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Fs="__v_isReadonly";function jl(e,n,t=!1){let a,o;const r=ee(e);return r?(a=e,o=Qe):(a=e.get,o=e.set),new Fl(a,o,r||!o,t)}function Tn(e,n,t,a){let o;try{o=a?e(...a):e()}catch(r){Sa(r,n,t)}return o}function en(e,n,t,a){if(ee(e)){const r=Tn(e,n,t,a);return r&&ps(r)&&r.catch(s=>{Sa(s,n,t)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(en(e[r],n,t,a));return o}function Sa(e,n,t,a=!0){const o=n?n.vnode:null;if(n){let r=n.parent;const s=n.proxy,i=t;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,s,i)===!1)return}r=r.parent}const l=n.appContext.config.errorHandler;if(l){Tn(l,null,10,[e,s,i]);return}}Il(e,t,o,a)}function Il(e,n,t,a=!0){console.error(e)}let St=!1,Qa=!1;const ze=[];let sn=0;const et=[];let dn=null,Nn=0;const js=Promise.resolve();let Io=null;function Ml(e){const n=Io||js;return e?n.then(this?e.bind(this):e):n}function zl(e){let n=sn+1,t=ze.length;for(;n<t;){const a=n+t>>>1;Tt(ze[a])<e?n=a+1:t=a}return n}function Mo(e){(!ze.length||!ze.includes(e,St&&e.allowRecurse?sn+1:sn))&&(e.id==null?ze.push(e):ze.splice(zl(e.id),0,e),Is())}function Is(){!St&&!Qa&&(Qa=!0,Io=js.then(zs))}function Nl(e){const n=ze.indexOf(e);n>sn&&ze.splice(n,1)}function Rl(e){Q(e)?et.push(...e):(!dn||!dn.includes(e,e.allowRecurse?Nn+1:Nn))&&et.push(e),Is()}function mr(e,n=St?sn+1:0){for(;n<ze.length;n++){const t=ze[n];t&&t.pre&&(ze.splice(n,1),n--,t())}}function Ms(e){if(et.length){const n=[...new Set(et)];if(et.length=0,dn){dn.push(...n);return}for(dn=n,dn.sort((t,a)=>Tt(t)-Tt(a)),Nn=0;Nn<dn.length;Nn++)dn[Nn]();dn=null,Nn=0}}const Tt=e=>e.id==null?1/0:e.id,Bl=(e,n)=>{const t=Tt(e)-Tt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function zs(e){Qa=!1,St=!0,ze.sort(Bl);const n=Qe;try{for(sn=0;sn<ze.length;sn++){const t=ze[sn];t&&t.active!==!1&&Tn(t,null,14)}}finally{sn=0,ze.length=0,Ms(),St=!1,Io=null,(ze.length||et.length)&&zs()}}function Ll(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||de;let o=t;const r=n.startsWith("update:"),s=r&&n.slice(7);if(s&&s in a){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:v,trim:m}=a[f]||de;m&&(o=t.map(k=>Ae(k)?k.trim():k)),v&&(o=t.map(Ka))}let i,l=a[i=Ra(n)]||a[i=Ra(cn(n))];!l&&r&&(l=a[i=Ra(it(n))]),l&&en(l,e,6,o);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,en(u,e,6,o)}}function Ns(e,n,t=!1){const a=n.emitsCache,o=a.get(e);if(o!==void 0)return o;const r=e.emits;let s={},i=!1;if(!ee(e)){const l=u=>{const f=Ns(u,n,!0);f&&(i=!0,Le(s,f))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(ue(e)&&a.set(e,null),null):(Q(r)?r.forEach(l=>s[l]=null):Le(s,r),ue(e)&&a.set(e,s),s)}function Ta(e,n){return!e||!wa(n)?!1:(n=n.slice(2).replace(/Once$/,""),ae(e,n[0].toLowerCase()+n.slice(1))||ae(e,it(n))||ae(e,n))}let Pe=null,$a=null;function ca(e){const n=Pe;return Pe=e,$a=e&&e.type.__scopeId||null,n}function zo(e){$a=e}function No(){$a=null}function pn(e,n=Pe,t){if(!n||e._n)return e;const a=(...o)=>{a._d&&xr(-1);const r=ca(n);let s;try{s=e(...o)}finally{ca(r),a._d&&xr(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function Ba(e){const{type:n,vnode:t,proxy:a,withProxy:o,props:r,propsOptions:[s],slots:i,attrs:l,emit:u,render:f,renderCache:v,data:m,setupState:k,ctx:w,inheritAttrs:h}=e;let _,A;const b=ca(e);try{if(t.shapeFlag&4){const y=o||a;_=rn(f.call(y,y,v,r,k,m,w)),A=l}else{const y=n;_=rn(y.length>1?y(r,{attrs:l,slots:i,emit:u}):y(r,null)),A=n.props?l:Dl(l)}}catch(y){vt.length=0,Sa(y,e,1),_=z(En)}let d=_;if(A&&h!==!1){const y=Object.keys(A),{shapeFlag:C}=d;y.length&&C&7&&(s&&y.some(xo)&&(A=Hl(A,s)),d=ot(d,A))}return t.dirs&&(d=ot(d),d.dirs=d.dirs?d.dirs.concat(t.dirs):t.dirs),t.transition&&(d.transition=t.transition),_=d,ca(b),_}const Dl=e=>{let n;for(const t in e)(t==="class"||t==="style"||wa(t))&&((n||(n={}))[t]=e[t]);return n},Hl=(e,n)=>{const t={};for(const a in e)(!xo(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function Ul(e,n,t){const{props:a,children:o,component:r}=e,{props:s,children:i,patchFlag:l}=n,u=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return a?br(a,s,u):!!s;if(l&8){const f=n.dynamicProps;for(let v=0;v<f.length;v++){const m=f[v];if(s[m]!==a[m]&&!Ta(u,m))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?br(a,s,u):!0:!!s;return!1}function br(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const r=a[o];if(n[r]!==e[r]&&!Ta(t,r))return!0}return!1}function ql({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Wl=e=>e.__isSuspense;function Vl(e,n){n&&n.pendingBranch?Q(e)?n.effects.push(...e):n.effects.push(e):Rl(e)}function bt(e,n){if(xe){let t=xe.provides;const a=xe.parent&&xe.parent.provides;a===t&&(t=xe.provides=Object.create(a)),t[e]=n}}function te(e,n,t=!1){const a=xe||Pe;if(a){const o=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&ee(n)?n.call(a.proxy):n}}const qt={};function gt(e,n,t){return Rs(e,n,t)}function Rs(e,n,{immediate:t,deep:a,flush:o,onTrack:r,onTrigger:s}=de){const i=nl()===(xe==null?void 0:xe.scope)?xe:null;let l,u=!1,f=!1;if(Ne(e)?(l=()=>e.value,u=la(e)):Qn(e)?(l=()=>e,a=!0):Q(e)?(f=!0,u=e.some(d=>Qn(d)||la(d)),l=()=>e.map(d=>{if(Ne(d))return d.value;if(Qn(d))return Ln(d);if(ee(d))return Tn(d,i,2)})):ee(e)?n?l=()=>Tn(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return v&&v(),en(e,i,3,[m])}:l=Qe,n&&a){const d=l;l=()=>Ln(d())}let v,m=d=>{v=A.onStop=()=>{Tn(d,i,4)}},k;if(Et)if(m=Qe,n?t&&en(n,i,3,[l(),f?[]:void 0,m]):l(),o==="sync"){const d=Bc();k=d.__watcherHandles||(d.__watcherHandles=[])}else return Qe;let w=f?new Array(e.length).fill(qt):qt;const h=()=>{if(A.active)if(n){const d=A.run();(a||u||(f?d.some((y,C)=>Ct(y,w[C])):Ct(d,w)))&&(v&&v(),en(n,i,3,[d,w===qt?void 0:f&&w[0]===qt?[]:w,m]),w=d)}else A.run()};h.allowRecurse=!!n;let _;o==="sync"?_=h:o==="post"?_=()=>He(h,i&&i.suspense):(h.pre=!0,i&&(h.id=i.uid),_=()=>Mo(h));const A=new To(l,_);n?t?h():w=A.run():o==="post"?He(A.run.bind(A),i&&i.suspense):A.run();const b=()=>{A.stop(),i&&i.scope&&Co(i.scope.effects,A)};return k&&k.push(b),b}function Yl(e,n,t){const a=this.proxy,o=Ae(e)?e.includes(".")?Bs(a,e):()=>a[e]:e.bind(a,a);let r;ee(n)?r=n:(r=n.handler,t=n);const s=xe;rt(this);const i=Rs(o,r.bind(a),t);return s?rt(s):qn(),i}function Bs(e,n){const t=n.split(".");return()=>{let a=e;for(let o=0;o<t.length&&a;o++)a=a[t[o]];return a}}function Ln(e,n){if(!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ne(e))Ln(e.value,n);else if(Q(e))for(let t=0;t<e.length;t++)Ln(e[t],n);else if(_a(e)||Zn(e))e.forEach(t=>{Ln(t,n)});else if(bs(e))for(const t in e)Ln(e[t],n);return e}function ut(e){return ee(e)?{setup:e,name:e.name}:e}const ht=e=>!!e.type.__asyncLoader,Ls=e=>e.type.__isKeepAlive;function Kl(e,n){Ds(e,"a",n)}function Gl(e,n){Ds(e,"da",n)}function Ds(e,n,t=xe){const a=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ea(n,a,t),t){let o=t.parent;for(;o&&o.parent;)Ls(o.parent.vnode)&&Jl(a,n,t,o),o=o.parent}}function Jl(e,n,t,a){const o=Ea(n,e,a,!0);qs(()=>{Co(a[n],o)},t)}function Ea(e,n,t=xe,a=!1){if(t){const o=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;lt(),rt(t);const i=en(n,t,e,s);return qn(),ct(),i});return a?o.unshift(r):o.push(r),r}}const yn=e=>(n,t=xe)=>(!Et||e==="sp")&&Ea(e,(...a)=>n(...a),t),Hs=yn("bm"),Us=yn("m"),Xl=yn("bu"),Zl=yn("u"),Ql=yn("bum"),qs=yn("um"),ec=yn("sp"),nc=yn("rtg"),tc=yn("rtc");function ac(e,n=xe){Ea("ec",e,n)}function jn(e,n){const t=Pe;if(t===null)return e;const a=Fa(t)||t.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[s,i,l,u=de]=n[r];s&&(ee(s)&&(s={mounted:s,updated:s}),s.deep&&Ln(i),o.push({dir:s,instance:a,value:i,oldValue:void 0,arg:l,modifiers:u}))}return e}function In(e,n,t,a){const o=e.dirs,r=n&&n.dirs;for(let s=0;s<o.length;s++){const i=o[s];r&&(i.oldValue=r[s].value);let l=i.dir[a];l&&(lt(),en(l,t,8,[e.el,i,e,n]),ct())}}const Ws="components";function We(e,n){return rc(Ws,e,!0,n)||e}const oc=Symbol();function rc(e,n,t=!0,a=!1){const o=Pe||xe;if(o){const r=o.type;if(e===Ws){const i=Ic(r,!1);if(i&&(i===n||i===cn(n)||i===Ca(cn(n))))return r}const s=gr(o[e]||r[e],n)||gr(o.appContext[e],n);return!s&&a?r:s}}function gr(e,n){return e&&(e[n]||e[cn(n)]||e[Ca(cn(n))])}function at(e,n,t,a){let o;const r=t&&t[a];if(Q(e)||Ae(e)){o=new Array(e.length);for(let s=0,i=e.length;s<i;s++)o[s]=n(e[s],s,void 0,r&&r[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,r&&r[s])}else if(ue(e))if(e[Symbol.iterator])o=Array.from(e,(s,i)=>n(s,i,void 0,r&&r[i]));else{const s=Object.keys(e);o=new Array(s.length);for(let i=0,l=s.length;i<l;i++){const u=s[i];o[i]=n(e[u],u,i,r&&r[i])}}else o=[];return t&&(t[a]=o),o}function La(e,n,t={},a,o){if(Pe.isCE||Pe.parent&&ht(Pe.parent)&&Pe.parent.isCE)return n!=="default"&&(t.name=n),z("slot",t,a&&a());let r=e[n];r&&r._c&&(r._d=!1),K();const s=r&&Vs(r(t)),i=fa(ye,{key:t.key||s&&s.key||`_${n}`},s||(a?a():[]),s&&e._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Vs(e){return e.some(n=>da(n)?!(n.type===En||n.type===ye&&!Vs(n.children)):!0)?e:null}const eo=e=>e?ai(e)?Fa(e)||e.proxy:eo(e.parent):null,yt=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>eo(e.parent),$root:e=>eo(e.root),$emit:e=>e.emit,$options:e=>Ro(e),$forceUpdate:e=>e.f||(e.f=()=>Mo(e.update)),$nextTick:e=>e.n||(e.n=Ml.bind(e.proxy)),$watch:e=>Yl.bind(e)}),Da=(e,n)=>e!==de&&!e.__isScriptSetup&&ae(e,n),sc={get({_:e},n){const{ctx:t,setupState:a,data:o,props:r,accessCache:s,type:i,appContext:l}=e;let u;if(n[0]!=="$"){const k=s[n];if(k!==void 0)switch(k){case 1:return a[n];case 2:return o[n];case 4:return t[n];case 3:return r[n]}else{if(Da(a,n))return s[n]=1,a[n];if(o!==de&&ae(o,n))return s[n]=2,o[n];if((u=e.propsOptions[0])&&ae(u,n))return s[n]=3,r[n];if(t!==de&&ae(t,n))return s[n]=4,t[n];no&&(s[n]=0)}}const f=yt[n];let v,m;if(f)return n==="$attrs"&&Ue(e,"get",n),f(e);if((v=i.__cssModules)&&(v=v[n]))return v;if(t!==de&&ae(t,n))return s[n]=4,t[n];if(m=l.config.globalProperties,ae(m,n))return m[n]},set({_:e},n,t){const{data:a,setupState:o,ctx:r}=e;return Da(o,n)?(o[n]=t,!0):a!==de&&ae(a,n)?(a[n]=t,!0):ae(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:o,propsOptions:r}},s){let i;return!!t[s]||e!==de&&ae(e,s)||Da(n,s)||(i=r[0])&&ae(i,s)||ae(a,s)||ae(yt,s)||ae(o.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ae(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let no=!0;function ic(e){const n=Ro(e),t=e.proxy,a=e.ctx;no=!1,n.beforeCreate&&hr(n.beforeCreate,e,"bc");const{data:o,computed:r,methods:s,watch:i,provide:l,inject:u,created:f,beforeMount:v,mounted:m,beforeUpdate:k,updated:w,activated:h,deactivated:_,beforeDestroy:A,beforeUnmount:b,destroyed:d,unmounted:y,render:C,renderTracked:S,renderTriggered:N,errorCaptured:G,serverPrefetch:B,expose:ne,inheritAttrs:le,components:Te,directives:Fe,filters:qe}=n;if(u&&lc(u,a,null,e.appContext.config.unwrapInjectedRef),s)for(const oe in s){const J=s[oe];ee(J)&&(a[oe]=J.bind(t))}if(o){const oe=o.call(t,t);ue(oe)&&(e.data=Po(oe))}if(no=!0,r)for(const oe in r){const J=r[oe],fe=ee(J)?J.bind(t,t):ee(J.get)?J.get.bind(t,t):Qe,$e=!ee(J)&&ee(J.set)?J.set.bind(t):Qe,Ee=ke({get:fe,set:$e});Object.defineProperty(a,oe,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:se=>Ee.value=se})}if(i)for(const oe in i)Ys(i[oe],a,t,oe);if(l){const oe=ee(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(J=>{bt(J,oe[J])})}f&&hr(f,e,"c");function be(oe,J){Q(J)?J.forEach(fe=>oe(fe.bind(t))):J&&oe(J.bind(t))}if(be(Hs,v),be(Us,m),be(Xl,k),be(Zl,w),be(Kl,h),be(Gl,_),be(ac,G),be(tc,S),be(nc,N),be(Ql,b),be(qs,y),be(ec,B),Q(ne))if(ne.length){const oe=e.exposed||(e.exposed={});ne.forEach(J=>{Object.defineProperty(oe,J,{get:()=>t[J],set:fe=>t[J]=fe})})}else e.exposed||(e.exposed={});C&&e.render===Qe&&(e.render=C),le!=null&&(e.inheritAttrs=le),Te&&(e.components=Te),Fe&&(e.directives=Fe)}function lc(e,n,t=Qe,a=!1){Q(e)&&(e=to(e));for(const o in e){const r=e[o];let s;ue(r)?"default"in r?s=te(r.from||o,r.default,!0):s=te(r.from||o):s=te(r),Ne(s)&&a?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):n[o]=s}}function hr(e,n,t){en(Q(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ys(e,n,t,a){const o=a.includes(".")?Bs(t,a):()=>t[a];if(Ae(e)){const r=n[e];ee(r)&&gt(o,r)}else if(ee(e))gt(o,e.bind(t));else if(ue(e))if(Q(e))e.forEach(r=>Ys(r,n,t,a));else{const r=ee(e.handler)?e.handler.bind(t):n[e.handler];ee(r)&&gt(o,r,e)}}function Ro(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:s}}=e.appContext,i=r.get(n);let l;return i?l=i:!o.length&&!t&&!a?l=n:(l={},o.length&&o.forEach(u=>ua(l,u,s,!0)),ua(l,n,s)),ue(n)&&r.set(n,l),l}function ua(e,n,t,a=!1){const{mixins:o,extends:r}=n;r&&ua(e,r,t,!0),o&&o.forEach(s=>ua(e,s,t,!0));for(const s in n)if(!(a&&s==="expose")){const i=cc[s]||t&&t[s];e[s]=i?i(e[s],n[s]):n[s]}return e}const cc={data:yr,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:zn,directives:zn,watch:fc,provide:yr,inject:uc};function yr(e,n){return n?e?function(){return Le(ee(e)?e.call(this,this):e,ee(n)?n.call(this,this):n)}:n:e}function uc(e,n){return zn(to(e),to(n))}function to(e){if(Q(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Be(e,n){return e?[...new Set([].concat(e,n))]:n}function zn(e,n){return e?Le(Le(Object.create(null),e),n):n}function fc(e,n){if(!e)return n;if(!n)return e;const t=Le(Object.create(null),e);for(const a in n)t[a]=Be(e[a],n[a]);return t}function dc(e,n,t,a=!1){const o={},r={};ia(r,Pa,1),e.propsDefaults=Object.create(null),Ks(e,n,o,r);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);t?e.props=a?o:$l(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function pc(e,n,t,a){const{props:o,attrs:r,vnode:{patchFlag:s}}=e,i=re(o),[l]=e.propsOptions;let u=!1;if((a||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let v=0;v<f.length;v++){let m=f[v];if(Ta(e.emitsOptions,m))continue;const k=n[m];if(l)if(ae(r,m))k!==r[m]&&(r[m]=k,u=!0);else{const w=cn(m);o[w]=ao(l,i,w,k,e,!1)}else k!==r[m]&&(r[m]=k,u=!0)}}}else{Ks(e,n,o,r)&&(u=!0);let f;for(const v in i)(!n||!ae(n,v)&&((f=it(v))===v||!ae(n,f)))&&(l?t&&(t[v]!==void 0||t[f]!==void 0)&&(o[v]=ao(l,i,v,void 0,e,!0)):delete o[v]);if(r!==i)for(const v in r)(!n||!ae(n,v))&&(delete r[v],u=!0)}u&&mn(e,"set","$attrs")}function Ks(e,n,t,a){const[o,r]=e.propsOptions;let s=!1,i;if(n)for(let l in n){if(ea(l))continue;const u=n[l];let f;o&&ae(o,f=cn(l))?!r||!r.includes(f)?t[f]=u:(i||(i={}))[f]=u:Ta(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,s=!0)}if(r){const l=re(t),u=i||de;for(let f=0;f<r.length;f++){const v=r[f];t[v]=ao(o,l,v,u[v],e,!ae(u,v))}}return s}function ao(e,n,t,a,o,r){const s=e[t];if(s!=null){const i=ae(s,"default");if(i&&a===void 0){const l=s.default;if(s.type!==Function&&ee(l)){const{propsDefaults:u}=o;t in u?a=u[t]:(rt(o),a=u[t]=l.call(null,n),qn())}else a=l}s[0]&&(r&&!i?a=!1:s[1]&&(a===""||a===it(t))&&(a=!0))}return a}function Gs(e,n,t=!1){const a=n.propsCache,o=a.get(e);if(o)return o;const r=e.props,s={},i=[];let l=!1;if(!ee(e)){const f=v=>{l=!0;const[m,k]=Gs(v,n,!0);Le(s,m),k&&i.push(...k)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!l)return ue(e)&&a.set(e,Xn),Xn;if(Q(r))for(let f=0;f<r.length;f++){const v=cn(r[f]);vr(v)&&(s[v]=de)}else if(r)for(const f in r){const v=cn(f);if(vr(v)){const m=r[f],k=s[v]=Q(m)||ee(m)?{type:m}:Object.assign({},m);if(k){const w=_r(Boolean,k.type),h=_r(String,k.type);k[0]=w>-1,k[1]=h<0||w<h,(w>-1||ae(k,"default"))&&i.push(v)}}}const u=[s,i];return ue(e)&&a.set(e,u),u}function vr(e){return e[0]!=="$"}function kr(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function wr(e,n){return kr(e)===kr(n)}function _r(e,n){return Q(n)?n.findIndex(t=>wr(t,e)):ee(n)&&wr(n,e)?0:-1}const Js=e=>e[0]==="_"||e==="$stable",Bo=e=>Q(e)?e.map(rn):[rn(e)],mc=(e,n,t)=>{if(n._n)return n;const a=pn((...o)=>Bo(n(...o)),t);return a._c=!1,a},Xs=(e,n,t)=>{const a=e._ctx;for(const o in e){if(Js(o))continue;const r=e[o];if(ee(r))n[o]=mc(o,r,a);else if(r!=null){const s=Bo(r);n[o]=()=>s}}},Zs=(e,n)=>{const t=Bo(n);e.slots.default=()=>t},bc=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=re(n),ia(n,"_",t)):Xs(n,e.slots={})}else e.slots={},n&&Zs(e,n);ia(e.slots,Pa,1)},gc=(e,n,t)=>{const{vnode:a,slots:o}=e;let r=!0,s=de;if(a.shapeFlag&32){const i=n._;i?t&&i===1?r=!1:(Le(o,n),!t&&i===1&&delete o._):(r=!n.$stable,Xs(n,o)),s=n}else n&&(Zs(e,n),s={default:1});if(r)for(const i in o)!Js(i)&&!(i in s)&&delete o[i]};function Qs(){return{app:null,config:{isNativeTag:Vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hc=0;function yc(e,n){return function(a,o=null){ee(a)||(a=Object.assign({},a)),o!=null&&!ue(o)&&(o=null);const r=Qs(),s=new Set;let i=!1;const l=r.app={_uid:hc++,_component:a,_props:o,_container:null,_context:r,_instance:null,version:Lc,get config(){return r.config},set config(u){},use(u,...f){return s.has(u)||(u&&ee(u.install)?(s.add(u),u.install(l,...f)):ee(u)&&(s.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,v){if(!i){const m=z(a,o);return m.appContext=r,f&&n?n(m,u):e(m,u,v),i=!0,l._container=u,u.__vue_app__=l,Fa(m.component)||m.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l}};return l}}function oo(e,n,t,a,o=!1){if(Q(e)){e.forEach((m,k)=>oo(m,n&&(Q(n)?n[k]:n),t,a,o));return}if(ht(a)&&!o)return;const r=a.shapeFlag&4?Fa(a.component)||a.component.proxy:a.el,s=o?null:r,{i,r:l}=e,u=n&&n.r,f=i.refs===de?i.refs={}:i.refs,v=i.setupState;if(u!=null&&u!==l&&(Ae(u)?(f[u]=null,ae(v,u)&&(v[u]=null)):Ne(u)&&(u.value=null)),ee(l))Tn(l,i,12,[s,f]);else{const m=Ae(l),k=Ne(l);if(m||k){const w=()=>{if(e.f){const h=m?ae(v,l)?v[l]:f[l]:l.value;o?Q(h)&&Co(h,r):Q(h)?h.includes(r)||h.push(r):m?(f[l]=[r],ae(v,l)&&(v[l]=f[l])):(l.value=[r],e.k&&(f[e.k]=l.value))}else m?(f[l]=s,ae(v,l)&&(v[l]=s)):k&&(l.value=s,e.k&&(f[e.k]=s))};s?(w.id=-1,He(w,t)):w()}}}const He=Vl;function vc(e){return kc(e)}function kc(e,n){const t=Zi();t.__VUE__=!0;const{insert:a,remove:o,patchProp:r,createElement:s,createText:i,createComment:l,setText:u,setElementText:f,parentNode:v,nextSibling:m,setScopeId:k=Qe,insertStaticContent:w}=e,h=(p,g,x,$=null,T=null,P=null,M=!1,F=null,j=!!g.dynamicChildren)=>{if(p===g)return;p&&!dt(p,g)&&($=Re(p),se(p,T,P,!0),p=null),g.patchFlag===-2&&(j=!1,g.dynamicChildren=null);const{type:O,ref:q,shapeFlag:L}=g;switch(O){case Oa:_(p,g,x,$);break;case En:A(p,g,x,$);break;case ta:p==null&&b(g,x,$,M);break;case ye:Te(p,g,x,$,T,P,M,F,j);break;default:L&1?C(p,g,x,$,T,P,M,F,j):L&6?Fe(p,g,x,$,T,P,M,F,j):(L&64||L&128)&&O.process(p,g,x,$,T,P,M,F,j,Ye)}q!=null&&T&&oo(q,p&&p.ref,P,g||p,!g)},_=(p,g,x,$)=>{if(p==null)a(g.el=i(g.children),x,$);else{const T=g.el=p.el;g.children!==p.children&&u(T,g.children)}},A=(p,g,x,$)=>{p==null?a(g.el=l(g.children||""),x,$):g.el=p.el},b=(p,g,x,$)=>{[p.el,p.anchor]=w(p.children,g,x,$,p.el,p.anchor)},d=({el:p,anchor:g},x,$)=>{let T;for(;p&&p!==g;)T=m(p),a(p,x,$),p=T;a(g,x,$)},y=({el:p,anchor:g})=>{let x;for(;p&&p!==g;)x=m(p),o(p),p=x;o(g)},C=(p,g,x,$,T,P,M,F,j)=>{M=M||g.type==="svg",p==null?S(g,x,$,T,P,M,F,j):B(p,g,T,P,M,F,j)},S=(p,g,x,$,T,P,M,F)=>{let j,O;const{type:q,props:L,shapeFlag:V,transition:I,dirs:U}=p;if(j=p.el=s(p.type,P,L&&L.is,L),V&8?f(j,p.children):V&16&&G(p.children,j,null,$,T,P&&q!=="foreignObject",M,F),U&&In(p,null,$,"created"),N(j,p,p.scopeId,M,$),L){for(const Y in L)Y!=="value"&&!ea(Y)&&r(j,Y,null,L[Y],P,p.children,$,T,he);"value"in L&&r(j,"value",null,L.value),(O=L.onVnodeBeforeMount)&&on(O,$,p)}U&&In(p,null,$,"beforeMount");const D=(!T||T&&!T.pendingBranch)&&I&&!I.persisted;D&&I.beforeEnter(j),a(j,g,x),((O=L&&L.onVnodeMounted)||D||U)&&He(()=>{O&&on(O,$,p),D&&I.enter(j),U&&In(p,null,$,"mounted")},T)},N=(p,g,x,$,T)=>{if(x&&k(p,x),$)for(let P=0;P<$.length;P++)k(p,$[P]);if(T){let P=T.subTree;if(g===P){const M=T.vnode;N(p,M,M.scopeId,M.slotScopeIds,T.parent)}}},G=(p,g,x,$,T,P,M,F,j=0)=>{for(let O=j;O<p.length;O++){const q=p[O]=F?xn(p[O]):rn(p[O]);h(null,q,g,x,$,T,P,M,F)}},B=(p,g,x,$,T,P,M)=>{const F=g.el=p.el;let{patchFlag:j,dynamicChildren:O,dirs:q}=g;j|=p.patchFlag&16;const L=p.props||de,V=g.props||de;let I;x&&Mn(x,!1),(I=V.onVnodeBeforeUpdate)&&on(I,x,g,p),q&&In(g,p,x,"beforeUpdate"),x&&Mn(x,!0);const U=T&&g.type!=="foreignObject";if(O?ne(p.dynamicChildren,O,F,x,$,U,P):M||J(p,g,F,null,x,$,U,P,!1),j>0){if(j&16)le(F,g,L,V,x,$,T);else if(j&2&&L.class!==V.class&&r(F,"class",null,V.class,T),j&4&&r(F,"style",L.style,V.style,T),j&8){const D=g.dynamicProps;for(let Y=0;Y<D.length;Y++){const ie=D[Y],ve=L[ie],R=V[ie];(R!==ve||ie==="value")&&r(F,ie,ve,R,T,p.children,x,$,he)}}j&1&&p.children!==g.children&&f(F,g.children)}else!M&&O==null&&le(F,g,L,V,x,$,T);((I=V.onVnodeUpdated)||q)&&He(()=>{I&&on(I,x,g,p),q&&In(g,p,x,"updated")},$)},ne=(p,g,x,$,T,P,M)=>{for(let F=0;F<g.length;F++){const j=p[F],O=g[F],q=j.el&&(j.type===ye||!dt(j,O)||j.shapeFlag&70)?v(j.el):x;h(j,O,q,null,$,T,P,M,!0)}},le=(p,g,x,$,T,P,M)=>{if(x!==$){if(x!==de)for(const F in x)!ea(F)&&!(F in $)&&r(p,F,x[F],null,M,g.children,T,P,he);for(const F in $){if(ea(F))continue;const j=$[F],O=x[F];j!==O&&F!=="value"&&r(p,F,O,j,M,g.children,T,P,he)}"value"in $&&r(p,"value",x.value,$.value)}},Te=(p,g,x,$,T,P,M,F,j)=>{const O=g.el=p?p.el:i(""),q=g.anchor=p?p.anchor:i("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:I}=g;I&&(F=F?F.concat(I):I),p==null?(a(O,x,$),a(q,x,$),G(g.children,x,q,T,P,M,F,j)):L>0&&L&64&&V&&p.dynamicChildren?(ne(p.dynamicChildren,V,x,T,P,M,F),(g.key!=null||T&&g===T.subTree)&&ei(p,g,!0)):J(p,g,x,q,T,P,M,F,j)},Fe=(p,g,x,$,T,P,M,F,j)=>{g.slotScopeIds=F,p==null?g.shapeFlag&512?T.ctx.activate(g,x,$,M,j):qe(g,x,$,T,P,M,j):un(p,g,j)},qe=(p,g,x,$,T,P,M)=>{const F=p.component=Ec(p,$,T);if(Ls(p)&&(F.ctx.renderer=Ye),Pc(F),F.asyncDep){if(T&&T.registerDep(F,be),!p.el){const j=F.subTree=z(En);A(null,j,g,x)}return}be(F,p,g,x,T,P,M)},un=(p,g,x)=>{const $=g.component=p.component;if(Ul(p,g,x))if($.asyncDep&&!$.asyncResolved){oe($,g,x);return}else $.next=g,Nl($.update),$.update();else g.el=p.el,$.vnode=g},be=(p,g,x,$,T,P,M)=>{const F=()=>{if(p.isMounted){let{next:q,bu:L,u:V,parent:I,vnode:U}=p,D=q,Y;Mn(p,!1),q?(q.el=U.el,oe(p,q,M)):q=U,L&&na(L),(Y=q.props&&q.props.onVnodeBeforeUpdate)&&on(Y,I,q,U),Mn(p,!0);const ie=Ba(p),ve=p.subTree;p.subTree=ie,h(ve,ie,v(ve.el),Re(ve),p,T,P),q.el=ie.el,D===null&&ql(p,ie.el),V&&He(V,T),(Y=q.props&&q.props.onVnodeUpdated)&&He(()=>on(Y,I,q,U),T)}else{let q;const{el:L,props:V}=g,{bm:I,m:U,parent:D}=p,Y=ht(g);if(Mn(p,!1),I&&na(I),!Y&&(q=V&&V.onVnodeBeforeMount)&&on(q,D,g),Mn(p,!0),L&&tn){const ie=()=>{p.subTree=Ba(p),tn(L,p.subTree,p,T,null)};Y?g.type.__asyncLoader().then(()=>!p.isUnmounted&&ie()):ie()}else{const ie=p.subTree=Ba(p);h(null,ie,x,$,p,T,P),g.el=ie.el}if(U&&He(U,T),!Y&&(q=V&&V.onVnodeMounted)){const ie=g;He(()=>on(q,D,ie),T)}(g.shapeFlag&256||D&&ht(D.vnode)&&D.vnode.shapeFlag&256)&&p.a&&He(p.a,T),p.isMounted=!0,g=x=$=null}},j=p.effect=new To(F,()=>Mo(O),p.scope),O=p.update=()=>j.run();O.id=p.uid,Mn(p,!0),O()},oe=(p,g,x)=>{g.component=p;const $=p.vnode.props;p.vnode=g,p.next=null,pc(p,g.props,$,x),gc(p,g.children,x),lt(),mr(),ct()},J=(p,g,x,$,T,P,M,F,j=!1)=>{const O=p&&p.children,q=p?p.shapeFlag:0,L=g.children,{patchFlag:V,shapeFlag:I}=g;if(V>0){if(V&128){$e(O,L,x,$,T,P,M,F,j);return}else if(V&256){fe(O,L,x,$,T,P,M,F,j);return}}I&8?(q&16&&he(O,T,P),L!==O&&f(x,L)):q&16?I&16?$e(O,L,x,$,T,P,M,F,j):he(O,T,P,!0):(q&8&&f(x,""),I&16&&G(L,x,$,T,P,M,F,j))},fe=(p,g,x,$,T,P,M,F,j)=>{p=p||Xn,g=g||Xn;const O=p.length,q=g.length,L=Math.min(O,q);let V;for(V=0;V<L;V++){const I=g[V]=j?xn(g[V]):rn(g[V]);h(p[V],I,x,null,T,P,M,F,j)}O>q?he(p,T,P,!0,!1,L):G(g,x,$,T,P,M,F,j,L)},$e=(p,g,x,$,T,P,M,F,j)=>{let O=0;const q=g.length;let L=p.length-1,V=q-1;for(;O<=L&&O<=V;){const I=p[O],U=g[O]=j?xn(g[O]):rn(g[O]);if(dt(I,U))h(I,U,x,null,T,P,M,F,j);else break;O++}for(;O<=L&&O<=V;){const I=p[L],U=g[V]=j?xn(g[V]):rn(g[V]);if(dt(I,U))h(I,U,x,null,T,P,M,F,j);else break;L--,V--}if(O>L){if(O<=V){const I=V+1,U=I<q?g[I].el:$;for(;O<=V;)h(null,g[O]=j?xn(g[O]):rn(g[O]),x,U,T,P,M,F,j),O++}}else if(O>V)for(;O<=L;)se(p[O],T,P,!0),O++;else{const I=O,U=O,D=new Map;for(O=U;O<=V;O++){const Me=g[O]=j?xn(g[O]):rn(g[O]);Me.key!=null&&D.set(Me.key,O)}let Y,ie=0;const ve=V-U+1;let R=!1,kn=0;const Ie=new Array(ve);for(O=0;O<ve;O++)Ie[O]=0;for(O=I;O<=L;O++){const Me=p[O];if(ie>=ve){se(Me,T,P,!0);continue}let an;if(Me.key!=null)an=D.get(Me.key);else for(Y=U;Y<=V;Y++)if(Ie[Y-U]===0&&dt(Me,g[Y])){an=Y;break}an===void 0?se(Me,T,P,!0):(Ie[an-U]=O+1,an>=kn?kn=an:R=!0,h(Me,g[an],x,null,T,P,M,F,j),ie++)}const Yn=R?wc(Ie):Xn;for(Y=Yn.length-1,O=ve-1;O>=0;O--){const Me=U+O,an=g[Me],or=Me+1<q?g[Me+1].el:$;Ie[O]===0?h(null,an,x,or,T,P,M,F,j):R&&(Y<0||O!==Yn[Y]?Ee(an,x,or,2):Y--)}}},Ee=(p,g,x,$,T=null)=>{const{el:P,type:M,transition:F,children:j,shapeFlag:O}=p;if(O&6){Ee(p.component.subTree,g,x,$);return}if(O&128){p.suspense.move(g,x,$);return}if(O&64){M.move(p,g,x,Ye);return}if(M===ye){a(P,g,x);for(let L=0;L<j.length;L++)Ee(j[L],g,x,$);a(p.anchor,g,x);return}if(M===ta){d(p,g,x);return}if($!==2&&O&1&&F)if($===0)F.beforeEnter(P),a(P,g,x),He(()=>F.enter(P),T);else{const{leave:L,delayLeave:V,afterLeave:I}=F,U=()=>a(P,g,x),D=()=>{L(P,()=>{U(),I&&I()})};V?V(P,U,D):D()}else a(P,g,x)},se=(p,g,x,$=!1,T=!1)=>{const{type:P,props:M,ref:F,children:j,dynamicChildren:O,shapeFlag:q,patchFlag:L,dirs:V}=p;if(F!=null&&oo(F,null,x,p,!0),q&256){g.ctx.deactivate(p);return}const I=q&1&&V,U=!ht(p);let D;if(U&&(D=M&&M.onVnodeBeforeUnmount)&&on(D,g,p),q&6)je(p.component,x,$);else{if(q&128){p.suspense.unmount(x,$);return}I&&In(p,null,g,"beforeUnmount"),q&64?p.type.remove(p,g,x,T,Ye,$):O&&(P!==ye||L>0&&L&64)?he(O,g,x,!1,!0):(P===ye&&L&384||!T&&q&16)&&he(j,g,x),$&&X(p)}(U&&(D=M&&M.onVnodeUnmounted)||I)&&He(()=>{D&&on(D,g,p),I&&In(p,null,g,"unmounted")},x)},X=p=>{const{type:g,el:x,anchor:$,transition:T}=p;if(g===ye){ce(x,$);return}if(g===ta){y(p);return}const P=()=>{o(x),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:F}=T,j=()=>M(x,P);F?F(p.el,P,j):j()}else P()},ce=(p,g)=>{let x;for(;p!==g;)x=m(p),o(p),p=x;o(g)},je=(p,g,x)=>{const{bum:$,scope:T,update:P,subTree:M,um:F}=p;$&&na($),T.stop(),P&&(P.active=!1,se(M,p,g,x)),F&&He(F,g),He(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},he=(p,g,x,$=!1,T=!1,P=0)=>{for(let M=P;M<p.length;M++)se(p[M],g,x,$,T)},Re=p=>p.shapeFlag&6?Re(p.component.subTree):p.shapeFlag&128?p.suspense.next():m(p.anchor||p.el),fn=(p,g,x)=>{p==null?g._vnode&&se(g._vnode,null,null,!0):h(g._vnode||null,p,g,null,null,null,x),mr(),Ms(),g._vnode=p},Ye={p:h,um:se,m:Ee,r:X,mt:qe,mc:G,pc:J,pbc:ne,n:Re,o:e};let nn,tn;return n&&([nn,tn]=n(Ye)),{render:fn,hydrate:nn,createApp:yc(fn,nn)}}function Mn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function ei(e,n,t=!1){const a=e.children,o=n.children;if(Q(a)&&Q(o))for(let r=0;r<a.length;r++){const s=a[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=xn(o[r]),i.el=s.el),t||ei(s,i)),i.type===Oa&&(i.el=s.el)}}function wc(e){const n=e.slice(),t=[0];let a,o,r,s,i;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(o=t[t.length-1],e[o]<u){n[a]=o,t.push(a);continue}for(r=0,s=t.length-1;r<s;)i=r+s>>1,e[t[i]]<u?r=i+1:s=i;u<e[t[r]]&&(r>0&&(n[a]=t[r-1]),t[r]=a)}}for(r=t.length,s=t[r-1];r-- >0;)t[r]=s,s=n[s];return t}const _c=e=>e.__isTeleport,ye=Symbol(void 0),Oa=Symbol(void 0),En=Symbol(void 0),ta=Symbol(void 0),vt=[];let Xe=null;function K(e=!1){vt.push(Xe=e?null:[])}function xc(){vt.pop(),Xe=vt[vt.length-1]||null}let $t=1;function xr(e){$t+=e}function ni(e){return e.dynamicChildren=$t>0?Xe||Xn:null,xc(),$t>0&&Xe&&Xe.push(e),e}function Z(e,n,t,a,o,r){return ni(c(e,n,t,a,o,r,!0))}function fa(e,n,t,a,o){return ni(z(e,n,t,a,o,!0))}function da(e){return e?e.__v_isVNode===!0:!1}function dt(e,n){return e.type===n.type&&e.key===n.key}const Pa="__vInternal",ti=({key:e})=>e??null,aa=({ref:e,ref_key:n,ref_for:t})=>e!=null?Ae(e)||Ne(e)||ee(e)?{i:Pe,r:e,k:n,f:!!t}:e:null;function c(e,n=null,t=null,a=0,o=null,r=e===ye?0:1,s=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ti(n),ref:n&&aa(n),scopeId:$a,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Pe};return i?(Lo(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=Ae(t)?8:16),$t>0&&!s&&Xe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Xe.push(l),l}const z=Cc;function Cc(e,n=null,t=null,a=0,o=null,r=!1){if((!e||e===oc)&&(e=En),da(e)){const i=ot(e,n,!0);return t&&Lo(i,t),$t>0&&!r&&Xe&&(i.shapeFlag&6?Xe[Xe.indexOf(e)]=i:Xe.push(i)),i.patchFlag|=-2,i}if(Mc(e)&&(e=e.__vccOpts),n){n=Ac(n);let{class:i,style:l}=n;i&&!Ae(i)&&(n.class=we(i)),ue(l)&&(Ts(l)&&!Q(l)&&(l=Le({},l)),n.style=An(l))}const s=Ae(e)?1:Wl(e)?128:_c(e)?64:ue(e)?4:ee(e)?2:0;return c(e,n,t,a,o,s,r,!0)}function Ac(e){return e?Ts(e)||Pa in e?Le({},e):e:null}function ot(e,n,t=!1){const{props:a,ref:o,patchFlag:r,children:s}=e,i=n?oa(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&ti(i),ref:n&&n.ref?t&&o?Q(o)?o.concat(aa(n)):[o,aa(n)]:aa(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ye?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ot(e.ssContent),ssFallback:e.ssFallback&&ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ge(e=" ",n=0){return z(Oa,null,e,n)}function Sc(e,n){const t=z(ta,null,e);return t.staticCount=n,t}function Cn(e="",n=!1){return n?(K(),fa(En,null,e)):z(En,null,e)}function rn(e){return e==null||typeof e=="boolean"?z(En):Q(e)?z(ye,null,e.slice()):typeof e=="object"?xn(e):z(Oa,null,String(e))}function xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ot(e)}function Lo(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Q(n))t=16;else if(typeof n=="object")if(a&65){const o=n.default;o&&(o._c&&(o._d=!1),Lo(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(Pa in n)?n._ctx=Pe:o===3&&Pe&&(Pe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ee(n)?(n={default:n,_ctx:Pe},t=32):(n=String(n),a&64?(t=16,n=[ge(n)]):t=8);e.children=n,e.shapeFlag|=t}function oa(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const o in a)if(o==="class")n.class!==a.class&&(n.class=we([n.class,a.class]));else if(o==="style")n.style=An([n.style,a.style]);else if(wa(o)){const r=n[o],s=a[o];s&&r!==s&&!(Q(r)&&r.includes(s))&&(n[o]=r?[].concat(r,s):s)}else o!==""&&(n[o]=a[o])}return n}function on(e,n,t,a=null){en(e,n,7,[t,a])}const Tc=Qs();let $c=0;function Ec(e,n,t){const a=e.type,o=(n?n.appContext:e.appContext)||Tc,r={uid:$c++,vnode:e,type:a,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gs(a,o),emitsOptions:Ns(a,o),emit:null,emitted:null,propsDefaults:de,inheritAttrs:a.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Ll.bind(null,r),e.ce&&e.ce(r),r}let xe=null;const Oc=()=>xe||Pe,rt=e=>{xe=e,e.scope.on()},qn=()=>{xe&&xe.scope.off(),xe=null};function ai(e){return e.vnode.shapeFlag&4}let Et=!1;function Pc(e,n=!1){Et=n;const{props:t,children:a}=e.vnode,o=ai(e);dc(e,t,o,n),bc(e,a);const r=o?Fc(e,n):void 0;return Et=!1,r}function Fc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=$s(new Proxy(e.ctx,sc));const{setup:a}=t;if(a){const o=e.setupContext=a.length>1?ri(e):null;rt(e),lt();const r=Tn(a,e,0,[e.props,o]);if(ct(),qn(),ps(r)){if(r.then(qn,qn),n)return r.then(s=>{Cr(e,s,n)}).catch(s=>{Sa(s,e,0)});e.asyncDep=r}else Cr(e,r,n)}else oi(e,n)}function Cr(e,n,t){ee(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ue(n)&&(e.setupState=Ps(n)),oi(e,t)}let Ar;function oi(e,n,t){const a=e.type;if(!e.render){if(!n&&Ar&&!a.render){const o=a.template||Ro(e).template;if(o){const{isCustomElement:r,compilerOptions:s}=e.appContext.config,{delimiters:i,compilerOptions:l}=a,u=Le(Le({isCustomElement:r,delimiters:i},s),l);a.render=Ar(o,u)}}e.render=a.render||Qe}rt(e),lt(),ic(e),ct(),qn()}function jc(e){return new Proxy(e.attrs,{get(n,t){return Ue(e,"get","$attrs"),n[t]}})}function ri(e){const n=a=>{e.exposed=a||{}};let t;return{get attrs(){return t||(t=jc(e))},slots:e.slots,emit:e.emit,expose:n}}function Fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ps($s(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in yt)return yt[t](e)},has(n,t){return t in n||t in yt}}))}function Ic(e,n=!0){return ee(e)?e.displayName||e.name:e.name||n&&e.__name}function Mc(e){return ee(e)&&"__vccOpts"in e}const ke=(e,n)=>jl(e,n,Et);function zc(){return Nc().slots}function Nc(){const e=Oc();return e.setupContext||(e.setupContext=ri(e))}function si(e,n,t){const a=arguments.length;return a===2?ue(n)&&!Q(n)?da(n)?z(e,null,[n]):z(e,n):z(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&da(t)&&(t=[t]),z(e,n,t))}const Rc=Symbol(""),Bc=()=>te(Rc),Lc="3.2.47",Dc="http://www.w3.org/2000/svg",Rn=typeof document<"u"?document:null,Sr=Rn&&Rn.createElement("template"),Hc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const o=n?Rn.createElementNS(Dc,e):Rn.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>Rn.createTextNode(e),createComment:e=>Rn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,o,r){const s=t?t.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===r||!(o=o.nextSibling)););else{Sr.innerHTML=a?`<svg>${e}</svg>`:e;const i=Sr.content;if(a){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Uc(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function qc(e,n,t){const a=e.style,o=Ae(t);if(t&&!o){if(n&&!Ae(n))for(const r in n)t[r]==null&&ro(a,r,"");for(const r in t)ro(a,r,t[r])}else{const r=a.display;o?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=r)}}const Tr=/\s*!important$/;function ro(e,n,t){if(Q(t))t.forEach(a=>ro(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=Wc(e,n);Tr.test(t)?e.setProperty(it(a),t.replace(Tr,""),"important"):e[a]=t}}const $r=["Webkit","Moz","ms"],Ha={};function Wc(e,n){const t=Ha[n];if(t)return t;let a=cn(n);if(a!=="filter"&&a in e)return Ha[n]=a;a=Ca(a);for(let o=0;o<$r.length;o++){const r=$r[o]+a;if(r in e)return Ha[n]=r}return n}const Er="http://www.w3.org/1999/xlink";function Vc(e,n,t,a,o){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Er,n.slice(6,n.length)):e.setAttributeNS(Er,n,t);else{const r=qi(n);t==null||r&&!us(t)?e.removeAttribute(n):e.setAttribute(n,r?"":t)}}function Yc(e,n,t,a,o,r,s){if(n==="innerHTML"||n==="textContent"){a&&s(a,o,r),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=us(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}function Bn(e,n,t,a){e.addEventListener(n,t,a)}function Kc(e,n,t,a){e.removeEventListener(n,t,a)}function Gc(e,n,t,a,o=null){const r=e._vei||(e._vei={}),s=r[n];if(a&&s)s.value=a;else{const[i,l]=Jc(n);if(a){const u=r[n]=Qc(a,o);Bn(e,i,u,l)}else s&&(Kc(e,i,s,l),r[n]=void 0)}}const Or=/(?:Once|Passive|Capture)$/;function Jc(e){let n;if(Or.test(e)){n={};let a;for(;a=e.match(Or);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),n]}let Ua=0;const Xc=Promise.resolve(),Zc=()=>Ua||(Xc.then(()=>Ua=0),Ua=Date.now());function Qc(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;en(eu(a,t.value),n,5,[a])};return t.value=e,t.attached=Zc(),t}function eu(e,n){if(Q(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>o=>!o._stopped&&a&&a(o))}else return n}const Pr=/^on[a-z]/,nu=(e,n,t,a,o=!1,r,s,i,l)=>{n==="class"?Uc(e,a,o):n==="style"?qc(e,t,a):wa(n)?xo(n)||Gc(e,n,t,a,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):tu(e,n,a,o))?Yc(e,n,a,r,s,i,l):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Vc(e,n,a,o))};function tu(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&Pr.test(n)&&ee(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Pr.test(n)&&Ae(t)?!1:n in e}const pa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Q(n)?t=>na(n,t):n};function au(e){e.target.composing=!0}function Fr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Kn={created(e,{modifiers:{lazy:n,trim:t,number:a}},o){e._assign=pa(o);const r=a||o.props&&o.props.type==="number";Bn(e,n?"change":"input",s=>{if(s.target.composing)return;let i=e.value;t&&(i=i.trim()),r&&(i=Ka(i)),e._assign(i)}),t&&Bn(e,"change",()=>{e.value=e.value.trim()}),n||(Bn(e,"compositionstart",au),Bn(e,"compositionend",Fr),Bn(e,"change",Fr))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:o}},r){if(e._assign=pa(r),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(o||e.type==="number")&&Ka(e.value)===n))return;const s=n??"";e.value!==s&&(e.value=s)}},ou={deep:!0,created(e,n,t){e._assign=pa(t),Bn(e,"change",()=>{const a=e._modelValue,o=ru(e),r=e.checked,s=e._assign;if(Q(a)){const i=fs(a,o),l=i!==-1;if(r&&!l)s(a.concat(o));else if(!r&&l){const u=[...a];u.splice(i,1),s(u)}}else if(_a(a)){const i=new Set(a);r?i.add(o):i.delete(o),s(i)}else s(ii(e,r))})},mounted:jr,beforeUpdate(e,n,t){e._assign=pa(t),jr(e,n,t)}};function jr(e,{value:n,oldValue:t},a){e._modelValue=n,Q(n)?e.checked=fs(n,a.props.value)>-1:_a(n)?e.checked=n.has(a.props.value):n!==t&&(e.checked=ka(n,ii(e,!0)))}function ru(e){return"_value"in e?e._value:e.value}function ii(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const su=Le({patchProp:nu},Hc);let Ir;function iu(){return Ir||(Ir=vc(su))}const lu=(...e)=>{const n=iu().createApp(...e),{mount:t}=n;return n.mount=a=>{const o=cu(a);if(!o)return;const r=n._component;!ee(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const s=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},n};function cu(e){return Ae(e)?document.querySelector(e):e}const uu="vue3-code-block",fu="1.0.3",du="/vue3-code-block/assets/vue-5532db34.svg",pu={class:"row mb-5"},mu=c("h2",null,"Change Log",-1),bu=[mu],gu={class:"col-12"},hu=["href"],yu={__name:"ChangeLogSection",setup(e){const n=te("styleData"),t=te("links");return(a,o)=>(K(),Z("div",pu,[c("div",{class:we(E(n).h2ColClass)},bu,2),c("div",gu,[c("a",{href:E(t).changeLog,target:"_blank"},"CHANGELOG.md",8,hu)])]))}};const ja=(e,n)=>{const t=e.__vccOpts||e;for(const[a,o]of n)t[a]=o;return t},Do=e=>(zo("data-v-2840fb55"),e=e(),No(),e),vu={class:"row mb-5"},ku=Do(()=>c("h2",null,"CSS Variables",-1)),wu=[ku],_u=Do(()=>c("div",{class:"col-12 mb-3"},[c("p",null,[ge(" All CSS variables are defined in the "),c("code",null,"src/plugin/styles/cssVariables.css"),ge(" file. Colors are using "),c("code",null,"hsl"),ge(" values. ")])],-1)),xu={class:"col-12 mb-3"},Cu={class:"table-responsive"},Au={class:"table table-striped"},Su=Do(()=>c("thead",null,[c("tr",null,[c("th",{width:"auto"},"Name"),c("th",null,"Value")])],-1)),Tu={key:0,class:"tbody-header-row"},$u={colspan:"2"},Eu={key:0,colspan:"2",valign:"top"},Ou={class:"td-nowrap",valign:"top"},Pu={key:0},Fu={key:1,valign:"top"},ju={key:2,valign:"top"},Iu={__name:"CssVariablesSection",setup(e){const n=te("styleData"),t=[{name:"Typography",header:!0,items:[{name:"--v-cb-font",value:`system-ui, -apple-system, 'Segoe UI', 'Roboto',
		'Helvetica Neue', 'Arial', 'Noto Sans', 'Liberation Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`},{name:"--v-cb-label-font",code:"var(--v-cb-font)"},{name:"--v-cb-tab-font",code:"var(--v-cb-font)"}]},{name:"Neon Bunny Theme Colors",header:!0,items:[{name:"neon-bunny",subHeader:!0},{name:"--v-cb-tab-neon-bunny",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-neon-bunny-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-neon-bunny-icon",hsl:"207, 100%, 52%"},{name:"--v-cb-tab-neon-bunny-icon-success",hsl:"119, 100%, 51%"},{name:"--v-cb-tab-neon-bunny-icon-failed",hsl:"3, 100%, 58%"},{name:"neon-bunny-carrot",subHeader:!0},{name:"--v-cb-tab-neon-bunny-carrot",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-neon-bunny-carrot-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-neon-bunny-carrot-icon",hsl:"292, 100%, 50%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-success",hsl:"119, 100%, 51%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-failed",hsl:"3, 100%, 58%"}]},{name:"Prism Theme Colors",header:!0,items:[{name:"default",subHeader:!0},{name:"--v-cb-tab-prism-default-bkg",hsl:"24, 20%, 95%"},{name:"--v-cb-tab-prism-default-text",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-prism-default-icon",hsl:"198, 100%, 33%"},{name:"--v-cb-tab-prism-default-icon-success",hsl:"80, 100%, 30%"},{name:"--v-cb-tab-prism-default-icon-failed",hsl:"348, 68%, 58%"},{name:"coy",subHeader:!0},{name:"--v-cb-tab-prism-coy-bkg",hsl:"205, 59%, 50%"},{name:"--v-cb-tab-prism-coy-text",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-prism-coy-icon",hsl:"195, 76%, 41%"},{name:"--v-cb-tab-prism-coy-icon-success",hsl:"80, 100%, 30%"},{name:"--v-cb-tab-prism-coy-icon-failed",hsl:"0, 64%, 48%"},{name:"dark",subHeader:!0},{name:"--v-cb-tab-prism-dark-bkg",hsl:"30, 20%, 25%"},{name:"--v-cb-tab-prism-dark-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-prism-dark-border",hsl:"30, 20%, 40%"},{name:"--v-cb-tab-prism-dark-icon",hsl:"40, 90%, 60%"},{name:"--v-cb-tab-prism-dark-icon-success",hsl:"75, 70%, 60%"},{name:"--v-cb-tab-prism-dark-icon-failed",hsl:"0, 100%, 50%"},{name:"funky",subHeader:!0},{name:"--v-cb-tab-prism-funky-bkg",hsl:"0, 0%, 80%"},{name:"--v-cb-tab-prism-funky-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-prism-funky-dark",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-prism-funky-icon",hsl:"328, 100%, 54%"},{name:"--v-cb-tab-prism-funky-icon-success",hsl:"80, 61%, 50%"},{name:"--v-cb-tab-prism-funky-icon-failed",hsl:"0, 100%, 50%"},{name:"okaidia",subHeader:!0},{name:"--v-cb-tab-prism-okaidia-bkg",hsl:"70, 8%, 15%"},{name:"--v-cb-tab-prism-okaidia-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-prism-okaidia-icon",hsl:"190, 81%, 67%"},{name:"--v-cb-tab-prism-okaidia-icon-success",hsl:"80, 76%, 53%"},{name:"--v-cb-tab-prism-okaidia-icon-failed",hsl:"338, 95%, 56%"},{name:"solarizedlight",subHeader:!0},{name:"--v-cb-tab-prism-solarizedlight-bkg",hsl:"44, 87%, 94%"},{name:"--v-cb-tab-prism-solarizedlight-text",hsl:"196, 13%, 45%"},{name:"--v-cb-tab-prism-solarizedlight-icon",hsl:"175, 59%, 40%"},{name:"--v-cb-tab-prism-solarizedlight-icon-success",hsl:"68, 100%, 30%"},{name:"--v-cb-tab-prism-solarizedlight-icon-failed",hsl:"18, 80%, 44%"},{name:"tomorrow",subHeader:!0},{name:"--v-cb-tab-prism-tomorrow-bkg",hsl:"0, 0%, 18%"},{name:"--v-cb-tab-prism-tomorrow-text",hsl:"0, 0%, 80%"},{name:"--v-cb-tab-prism-tomorrow-icon",hsl:"299, 34%, 70%"},{name:"--v-cb-tab-prism-tomorrow-icon-success",hsl:"143, 39%, 64%"},{name:"--v-cb-tab-prism-tomorrow-icon-failed",hsl:"358, 65%, 68%"},{name:"twilight",subHeader:!0},{name:"--v-cb-tab-prism-twilight-bkg",hsl:"0, 0%, 8%"},{name:"--v-cb-tab-prism-twilight-text",hsl:"0, 0%, 80%"},{name:"--v-cb-tab-prism-twilight-border",hsl:"0, 0%, 33%"},{name:"--v-cb-tab-prism-twilight-icon",hsl:"53, 89%, 79%"},{name:"--v-cb-tab-prism-twilight-icon-success",hsl:"76, 21%, 52%"},{name:"--v-cb-tab-prism-twilight-icon-failed",hsl:"14, 58%, 55%"}]}];return(a,o)=>(K(),Z("div",vu,[c("div",{class:we(E(n).h2ColClass)},wu,2),_u,c("div",xu,[c("div",Cu,[c("table",Au,[Su,(K(),Z(ye,null,at(t,r=>c("tbody",{key:r.name},[r.header?(K(),Z("tr",Tu,[c("th",$u,Ce(r.name),1)])):Cn("",!0),(K(!0),Z(ye,null,at(r.items,s=>(K(),Z("tr",{key:s},[s.subHeader?(K(),Z("td",Eu,[c("strong",null,[c("em",null,Ce(s.name),1)])])):(K(),Z(ye,{key:1},[c("td",Ou,Ce(s.name),1),s.hsl?(K(),Z("td",Pu,[s.hsl?(K(),Z("span",{key:0,class:"color-swatch",style:An(`background-color: hsl(${s.hsl});`)},null,4)):Cn("",!0),ge(" "+Ce(s.hsl),1)])):s.code?(K(),Z("td",Fu,[c("code",null,Ce(s.code),1)])):(K(),Z("td",ju,Ce(s.value),1))],64))]))),128))])),64))])])])]))}},Mu=ja(Iu,[["__scopeId","data-v-2840fb55"]]),zu={class:"row mb-5"},Nu=c("h2",null,"Dependencies",-1),Ru=[Nu],Bu={class:"col-12"},Lu=["href"],Du=c("br",null,null,-1),Hu=["href"],Uu=c("br",null,null,-1),qu=["href"],Wu={__name:"DependenciesSection",setup(e){const n=te("styleData"),t=te("links");return(a,o)=>(K(),Z("div",zu,[c("div",{class:we(E(n).h2ColClass)},Ru,2),c("div",Bu,[c("a",{href:E(t).prism,target:"_blank"},"Prism",8,Lu),Du,c("a",{href:E(t).vueJs,target:"_blank"},"Vue 3",8,Hu),Uu,c("a",{href:E(t).uaParser,target:"_blank"},"UAParser.js",8,qu)])]))}},Vu=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Additional Languages")])],-1),Yu=c("div",{id:"additional-languages-json-usage-example",class:"row mb-4"},[c("div",{class:"col-12"},[c("p",null," PrismJS does not load all languages by default. In order to use additional languages you will need to import that languages component. ")])],-1),Ku={id:"additional-languages-ts-usage-example",class:"row mb-4"},Gu={class:"col-12"},Ju={id:"additional-languages-ts-example",class:"row mb-4"},Xu={class:"col-12"},Zu={id:"additional-languages-json-example",class:"row mb-4"},Qu={class:"col-12"},ef={class:"col-12"},nf={id:"additional-languages-php-usage-example",class:"row mb-4"},tf={class:"col-12"},af={id:"additional-languages-php-example",class:"row mb-4"},of={class:"col-12"},rf={__name:"AdditionalLangExamples",setup(e){const n=te("selectedTheme"),t=`<template>
  <CodeBlock
    :code="myCode"
    lang="typescript"
    :tabs="false"
  />
</template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
<\/script>`,a=`class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello() {
    console.log(\`Hello, my name is \${this.name} and I'm \${this.age} years old.\`);
  }
}

const person = new Person("John Doe", 30);
person.sayHello();`,o=`<template>
  <CodeBlock
    :code="myCode"
    :indent="2"
    lang="json"
    :tabs="false"
  />
</template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-json';
<\/script>`,r=`{
  "name": "John Doe",
  "age": 30,
  "isMarried": false,
  "hobbies": ["reading", "hiking", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
`,s=`<template>
  <CodeBlock
    :code="myCode"
    lang="php"
    :tabs="false"
  />
</template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-markup-templating';
  import 'prismjs/components/prism-php';
<\/script>`,i=`<?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use Inertia\\Inertia;
use Illuminate\\Http\\JsonResponse;
use App\\HttpControllers\\Controller;
use App\\HttpRequests\\DestroyUserRequest;
use App\\HttpRequests\\StoreUserRequest;
use App\\HttpRequests\\UpdateUserRequest;
use App\\HttpResources\\UserResource;

class UserController extends Controller
{
	/**
	 * Users
	 *
	 * @return \\Inertia\\Response
	 */
	public function index()
	{
		$users = User::get();

		return Inertia::render('Users/Index', [
			'currentPage'	=> 'Site Options',
			'users'			=> $users,
		]);
	}


	/**
	 * Store User.
	 *
	 */
	public function store(StoreUserRequest $request): JsonResponse
	{
		$validated = $request->validated();

		$user = [
			'name'	=> $validated['name'],
			'email'	=> $validated['email'],
		];

		$user = User::create($user);

		$response = [
			'err'   => !$user,
			'msg'   => $user ? 'success' : 'error',
			'user'  => new UserResource($user),
		];

		return response()->json($response);
	}


	/**
	 * Update User
	 */
	public function update(UpdateUserRequest $request, User $userModel): JsonResponse
	{
		$validated  = $request->validated();
		$user       = $userModel->withTrashed()->find($validated['id']);

		$user->updated_by = auth()->id();

		if ($validated['deletedAt'] === 'activate')
		{
			$user->restore();
		}
		else
		{
			$user->name		= $validated['name'];
			$user->email	= $validated['email'];

			$user->update($validated);
		}

		$response = [
			'err'			=> !$user,
			'msg'			=> $user ? 'success' : 'error',
			'siteOption'	=> new UserResource($user),
		];

		return response()->json($response);
	}


	/**
	 * Remove User
	 */
	public function destroy(DestroyUserRequest $request, User $userModel): JsonResponse
	{
		$validated	= $request->validated();
		$user 		= $userModel->findOrFail($validated['id']);

		$user->updated_by = auth()->id();

		$results = $user->delete();

		return response()->json([
			'err'			=> !$results,
			'status'		=> $results ? 'success' : 'error',
			'siteOption'	=> new UserResource($user),
		]);
	}
}
?>`;return(l,u)=>{const f=We("CodeBlock");return K(),Z("div",null,[Vu,Yu,c("div",Ku,[c("div",Gu,[z(f,{code:t,label:"Example of using PrismJS to highlight TypeScript",lang:"html",tabs:!1,theme:E(n)},null,8,["theme"])])]),c("div",Ju,[c("div",Xu,[z(f,{code:a,label:"TypeScript",lang:"typescript",tabs:!1,theme:E(n)},null,8,["theme"])])]),c("div",Zu,[c("div",Qu,[z(f,{code:o,label:"Example of using PrismJS to highlight JSON",lang:"html",tabs:!1,theme:E(n)},null,8,["theme"])]),c("div",ef,[z(f,{code:r,indent:2,label:"JSON",lang:"json",tabs:!1,theme:E(n)},null,8,["theme"])])]),c("div",nf,[c("div",tf,[z(f,{code:s,label:"Example of using PrismJS to highlight PHP",lang:"html",tabs:!1,theme:E(n)},null,8,["theme"])])]),c("div",af,[c("div",of,[z(f,{code:i,height:"500px",indent:2,label:"PHP",lang:"php",tabs:!1,theme:E(n)},null,8,["theme"])])])])}}},sf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Browser Window")])],-1),lf={id:"browser-window-example",class:"row mb-4"},cf={class:"col-12"},uf={__name:"BrowserWindowExamples",setup(e){const n=te("selectedTheme"),t=`<CodeBlock
  :browser-window="true"
  :code="myCode"
  lang="javascript"
  :tabs="false"
/>`;return(a,o)=>{const r=We("CodeBlock");return K(),Z("div",null,[sf,c("div",lf,[c("div",cf,[z(r,{"browser-window":!0,code:t,lang:"html",tabs:!1,theme:E(n)},null,8,["theme"])])])])}}},ff=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Copy Button")])],-1),df={id:"button-example",class:"row mb-4"},pf={class:"col-12"},mf={id:"persistent-button-example",class:"row mb-4"},bf={class:"col-12"},gf={__name:"ButtonExamples",setup(e){const n=te("selectedTheme"),t=`<CodeBlock
  :code="myCode"
  label="Visible on hover"
  lang="html"
  :tabs="false"
/>`,a=`<CodeBlock
  :code="myCode"
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  :tabs="false"
/>`;return(o,r)=>{const s=We("CodeBlock");return K(),Z("div",null,[ff,c("div",df,[c("div",pf,[z(s,{code:t,label:"Visible on hover",lang:"html",tabs:!1,theme:E(n)},null,8,["theme"])])]),c("div",mf,[c("div",bf,[z(s,{code:a,label:"Persistent Copy Button",lang:"html","persistent-copy-button":"",tabs:!1,theme:E(n)},null,8,["theme"])])])])}}},hf=`
/**
 * MIT License
 * Copyright (c) 2023 WebDevNerdStuff
 * WebDevNerdStuff Neon Bunny
 * VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
 */

:root {
	--neon-bunny-blue-light: #2492ff;
	--neon-bunny-blue: #0b93ff;
	--neon-bunny-gray-lighter: #aaa;
	--neon-bunny-gray: #7f817e;
	--neon-bunny-green-darker-darker: #008b05;
	--neon-bunny-green-darker: #2bb71d;
	--neon-bunny-green-light: #2bb71d;
	--neon-bunny-green-neon: #0aff04;
	--neon-bunny-green: #00d205;
	--neon-bunny-lime-lighter: #c3e88d;
	--neon-bunny-lime: #b2ff02;
	--neon-bunny-magenta: #df00df;
	--neon-bunny-neon-green: #0f0;
	--neon-bunny-orange: #e58100;
	--neon-bunny-peach-darker: #ffb46a;
	--neon-bunny-peach-light: #ffe4a6;
	--neon-bunny-peach: #ffcb6b;
	--neon-bunny-pink: #ff1190;
	--neon-bunny-purple-light-dim: #c792ea;
	--neon-bunny-purple-light: #d285cc;
	--neon-bunny-purple: #ea03ff;
	--neon-bunny-red: #ff3229;
	--neon-bunny-salmon: #ff6f5b;
	--neon-bunny-teal: #80fcff;
	--neon-bunny-white: #fff;
	--neon-bunny-yellow: #fef611;

	/* Standard */
	--neon-bunny-atrule: var(--neon-bunny-peach);
	--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
	--neon-bunny-attr-value: var(--neon-bunny-peach);
	--neon-bunny-boolean: var(--neon-bunny-blue-light);
	--neon-bunny-builtin: var(--neon-bunny-purple);
	--neon-bunny-cdata: var(--neon-bunny-gray);
	--neon-bunny-char: var(--neon-bunny-pink);
	--neon-bunny-class-name: var(--neon-bunny-peach);
	--neon-bunny-comment: var(--neon-bunny-gray);
	--neon-bunny-constant: var(--neon-bunny-green-darker);
	--neon-bunny-deleted: var(--neon-bunny-red);
	--neon-bunny-entity: var(--neon-bunny-peach);
	--neon-bunny-function: var(--neon-bunny-green-neon);
	--neon-bunny-important: var(--neon-bunny-red);
	--neon-bunny-inserted: var(--neon-bunny-lime-lighter);
	--neon-bunny-keyword: var(--neon-bunny-blue);
	--neon-bunny-namespace: var(--neon-bunny-peach);
	--neon-bunny-number: var(--neon-bunny-white);
	--neon-bunny-operator: var(--neon-bunny-blue-light);
	--neon-bunny-prolog: var(--neon-bunny-gray);
	--neon-bunny-property: var(--neon-bunny-pink);
	--neon-bunny-punctuation: var(--neon-bunny-blue);
	--neon-bunny-regex: var(--neon-bunny-peach-light);
	--neon-bunny-string: var(--neon-bunny-green-darker);
	--neon-bunny-symbol: var(--neon-bunny-pink);
	--neon-bunny-tag: var(--neon-bunny-blue-light);
	--neon-bunny-url: var(--neon-bunny-orange);
	--neon-bunny-variable: var(--neon-bunny-green-darker);

	/* HTML */
	--neon-bunny-html-attr-name: var(--neon-bunny-green);
	--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);
	--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);

	/* CSS */
	--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
	--neon-bunny-css-atrule: var(--neon-bunny-white);
	--neon-bunny-css-function: var(--neon-bunny-orange);
	--neon-bunny-css-property: var(--neon-bunny-pink);
	--neon-bunny-css-punctuation: var(--neon-bunny-white);
	--neon-bunny-css-selector: var(--neon-bunny-lime);
	--neon-bunny-css-string: var(--neon-bunny-green-light);
	--neon-bunny-css: var(--neon-bunny-purple-light-dim);

	/* JS */
	--neon-bunny-js-keyword: var(--neon-bunny-blue);
	--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);
	--neon-bunny-js-operator: var(--neon-bunny-blue-light);
	--neon-bunny-js-punctuation: var(--neon-bunny-white);
	--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js: var(--neon-bunny-green-darker);

	/* PHP */
	--neon-bunny-php-boolean: var(--neon-bunny-blue);
	--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);
	--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);
	--neon-bunny-php-class-name: var(--neon-bunny-teal);
	--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);
	--neon-bunny-php-function: var(--neon-bunny-green-neon);
	--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);
	--neon-bunny-php-keyword: var(--neon-bunny-blue);
	--neon-bunny-php-operator: var(--neon-bunny-purple);
	--neon-bunny-php-package: var(--neon-bunny-peach);
	--neon-bunny-php-property: var(--neon-bunny-purple-light);
	--neon-bunny-php-punctuation: var(--neon-bunny-white);
	--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);
	--neon-bunny-php-variable: var(--neon-bunny-purple-light);
}

code[class*='language-'],
pre[class*='language-'] {
	color: var(--neon-bunny-white);
	font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	-moz-hyphens: none;
	-ms-hyphens: none;
	-webkit-hyphens: none;
	hyphens: none;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	text-align: left;
	white-space: pre;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
	background: rgba(29, 59, 83, 0.99);
	text-shadow: none;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
	background: #ffffff15;
	text-shadow: none;
}

@media print {
	code[class*='language-'],
	pre[class*='language-'] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*='language-'] {
	margin: 0.5em 0;
	overflow: auto;
	padding: 1em;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
	background: #000;
	color: white;
}

:not(pre) > code[class*='language-'] {
	border-radius: 0.3em;
	padding: 0.1em;
	white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
	color: var(--neon-bunny-atrule);
}

.token.attr-name {
	color: var(--neon-bunny-attr-name);
}

.token.attr-value {
	color: var(--neon-bunny-attr-value);
}

.token.bold {
	font-weight: bold;
}

.token.boolean {
	color: var(--neon-bunny-boolean);
}

.token.builtin {
	color: var(--neon-bunny-builtin);
}

.token.cdata {
	color: var(--neon-bunny-cdata);
	font-style: italic;
}

.token.char {
	color: var(--neon-bunny-char);
}

.token.class-name {
	color: var(--neon-bunny-class-name);
}

.token.constant {
	color: var(--neon-bunny-constant);
}

.token.comment {
	color: var(--neon-bunny-comment);
	font-style: italic;
}

.token.deleted {
	color: var(--neon-bunny-deleted);
}

.token.entity {
	color: var(--neon-bunny-entity);
}

.token.function {
	color: var(--neon-bunny-function);
}

.token.important {
	color: var(--neon-bunny-important);
	font-style: italic;
}

.token.inserted {
	color: var(--neon-bunny-inserted);
}

.token.italic {
	font-style: italic;
}

.token.keyword {
	color: var(--neon-bunny-keyword);
}

.namespace {
	color: var(--neon-bunny-namespace);
}

.token.number {
	color: var(--neon-bunny-number);
}

.token.operator {
	color: var(--neon-bunny-operator);
}

.token.prolog {
	color: var(--neon-bunny-prolog);
	font-style: italic;
}

.token.property {
	color: var(--neon-bunny-property);
}

.token.punctuation {
	color: var(--neon-bunny-punctuation);
}

.token.regex {
	color: var(--neon-bunny-regex);
}

.token.string {
	color: var(--neon-bunny-string);
}

.token.symbol {
	color: var(--neon-bunny-symbol);
}

.token.tag {
	color: var(--neon-bunny-tag);
}

.token.url {
	color: var(--neon-bunny-url);
	text-decoration: underline;
}

.token.variable {
	color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
	color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
	color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
	color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
	color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
	color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
	color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
	color: var(--neon-bunny-css-function);
}

.language-css .token.property {
	color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
	color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
	color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
	color: var(--neon-bunny-css-string);
	font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
	color: var(--neon-bunny-js) !important;
	font-style: italic;
}

.language-javascript span,
.language-js span {
	font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
	color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
	color: var(--neon-bunny-js-literal-property);
	font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
	color: var(--neon-bunny-js-operator);
	font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
	color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
	color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
	color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
	color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
	color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
	color: var(--neon-bunny-php-class-name-return-type);
	font-style: italic;
}

.language-php .token.function {
	color: var(--neon-bunny-php-function);
}

.language-php .token.keyword {
	color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
	color: var(--neon-bunny-php-keyword-type-hint);
	font-style: italic;
}

.language-php .token.operator {
	color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
	color: var(--neon-bunny-php-package);
}

.language-php .token.property {
	color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
	color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
	color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
	color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
	color: var(--neon-bunny-php-variable);
}
`,yf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Languages")])],-1),vf={id:"lang-js-examples",class:"row mb-4"},kf={class:"col-12"},wf={id:"lang-vue-examples",class:"row mb-4"},_f={class:"col-12"},xf={id:"lang-css-examples",class:"row mb-4"},Cf={class:"col-12"},Af={id:"lang-html-examples",class:"row mb-4"},Sf={class:"col-12"},Tf={id:"lang-svg-examples",class:"row mb-4"},$f={class:"col-12"},Ef={__name:"LangExamples",setup(e){const n=te("codeBlockOptions"),t=te("selectedTheme"),a=`<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const greeting = ref('Hello, World!');
<\/script>`,o=`// Example 1: Creating an array of numbers and finding the sum
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num);
console.log(sum); // Output: 15

// Example 2: Converting a string to uppercase
const greeting = 'hello world';
const uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting); // Output: HELLO WORLD

// Example 3: Generating a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // Output: A random number between 1 and 10

// Example 4: Checking if a number is even or odd
const num = 4;
if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
} // Output: Even

// Example 5: Fetching data from an API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
// Output: The JSON data for the TODO with ID 1 from the API
`,r=hf,s=`<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Google tag (gtag.js) -->

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Vue 3 CodeBlock</title>

	<meta name="description"
		content="Vue 3 CodeBlock - Highlight your code with ease using this
		syntax highlighting component powered by PrismJS." />
	<meta name="keywords"
		content="vue3-code-block, code, pre, highlight, syntax, vue, vue3,
		component, javascript, neon bunny, webdevnerdstuff, wdns" />
	<meta name="author" content="WebDevNerdStuff & Bunnies... lots and lots
	of bunnies!" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#f01d7f" />

	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Vue 3 CodeBlock">
	<meta property="og:description"
		content="Vue 3 CodeBlock - Highlight your code with ease using this
		syntax highlighting component powered by PrismJS.">
	<meta property="og:url" content="https://webdevnerdstuff.github.io/vue3-code-block/">
	<meta property="og:image" content="https://webdevnerdstuff.github.io/vue3-code-block/vue3-code-block-social.jpg">
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Henny+Penny&family=Indie+Flower&display=swap" rel="stylesheet">

	<link rel="icon" type="image/svg+xml" href="/vue.svg" />
</head>

<body>
	<div id="app"></div>
	<script type="module" src="/src/main.ts"><\/script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"><\/script>
</body>

</html>
`,i=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`;return(l,u)=>{const f=We("CodeBlock");return K(),Z("div",null,[yf,c("div",vf,[c("div",kf,[z(f,{code:o,label:"JavaScript",lang:"javascript","max-height":E(n).preHeight,tabs:!1,theme:E(t)},null,8,["max-height","theme"])])]),c("div",wf,[c("div",_f,[z(f,{code:a,label:"Vue (using lang = html)",lang:"html","max-height":E(n).preHeight,tabs:!1,theme:E(t)},null,8,["max-height","theme"])])]),c("div",xf,[c("div",Cf,[z(f,{code:E(r),label:"CSS",lang:"css","max-height":E(n).preHeight,tabs:!1,theme:E(t)},null,8,["code","max-height","theme"])])]),c("div",Af,[c("div",Sf,[z(f,{code:s,label:"HTML",lang:"html","max-height":E(n).preHeight,tabs:!1,theme:E(t)},null,8,["max-height","theme"])])]),c("div",Tf,[c("div",$f,[z(f,{code:i,label:"SVG",lang:"svg",tabs:!1,theme:E(t)},null,8,["theme"])])])])}}},Of=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Other Prop Examples")])],-1),Pf={id:"radius-example",class:"row mb-4"},Ff={class:"col-12"},jf={id:"copy-text-example",class:"row mb-4"},If={class:"col-12"},Mf={id:"run-text-example",class:"row mb-4"},zf={class:"col-12"},Nf={id:"floating-tabs-example",class:"row mb-4"},Rf={class:"col-12"},Bf={class:"form-check form-switch ms-1"},Lf={class:"boolean-style"},Df={id:"height-example",class:"row mb-4"},Hf={class:"col-12"},Uf={id:"height-example",class:"row mb-4"},qf={class:"col-12"},Wf={id:"indent-example",class:"row mb-4"},Vf={class:"col-12"},Yf={__name:"OtherExamples",setup(e){const n=te("selectedTheme"),t=Oe("0 1em"),a=Oe("Copy Text"),o=Oe(!0),r=Oe("200"),s=Oe(2),i=Oe("Run"),l=Oe("0.25rem"),u=`<CodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  lang="html"
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</CodeBlock>`,f=`<CodeBlock
  :code="myCode"
  copy-tab
  :copyText="copyText"
  lang="html"
  tabs
>
  <template #label>
    copyText:
    <input v-model="copyText" type="text" />
  </template>
</CodeBlock>`,v=`<CodeBlock
  :code="runTextExample"
  :copy-tab="false"
  lang="html"
  run-tab
  :runText="runText"
  tabs
  :theme="selectedTheme"
  @run="runTextCodeExampleFunction"
>
  <template #label>
    runText:
    <input v-model="runText" type="text" />
  </template>
</CodeBlock>`,m=`<CodeBlock
  :code="exampleCode"
  :floating-tabs="floatingTabs"
  lang="html"
  tabs
>
  <template #label>
    <input
      v-model="floatingTabs"
      checked
      type="checkbox"
    />
    <label>
      floatingTabs =
      <span class="boolean-style">{{ floatingTabs }}</span>
    </label>
  </template>
</CodeBlock>`,k=`<CodeBlock
  :code="myCode"
  :height="height"
  lang="html"
  :tabs="false"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</CodeBlock>`,w=`<CodeBlock
  :code="myCode"
  lang="html"
  :run-tab="true"
  :tab-gap="tabGap"
  tabs
>
  <template #label>
    tabGap:
    <input v-model="tabGap" type="text" />
  </template>
</CodeBlock>`,h=`{
  "name": "John Doe",
  "age": 30,
  "isMarried": false,
  "hobbies": ["reading", "hiking", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
`;function _(){alert("Run Text Code Example Function")}return(A,b)=>{const d=We("CodeBlock");return K(),Z("div",null,[Of,c("div",Pf,[c("div",Ff,[z(d,{code:u,"code-block-radius":t.value,lang:"html",theme:E(n)},{label:pn(()=>[ge(" codeBlockRadius: "),jn(c("input",{"onUpdate:modelValue":b[0]||(b[0]=y=>t.value=y),class:"form-control",type:"text"},null,512),[[Kn,t.value]])]),_:1},8,["code-block-radius","theme"])])]),c("div",jf,[c("div",If,[z(d,{code:f,"copy-tab":"",copyText:a.value,lang:"html",tabs:"",theme:E(n)},{label:pn(()=>[ge(" copyText: "),jn(c("input",{"onUpdate:modelValue":b[1]||(b[1]=y=>a.value=y),class:"form-control",type:"text"},null,512),[[Kn,a.value]])]),_:1},8,["copyText","theme"])])]),c("div",Mf,[c("div",zf,[z(d,{code:v,"copy-tab":!1,lang:"html","run-tab":"",runText:i.value,tabs:"",theme:E(n),onRun:_},{label:pn(()=>[ge(" runText: "),jn(c("input",{"onUpdate:modelValue":b[2]||(b[2]=y=>i.value=y),class:"form-control",type:"text"},null,512),[[Kn,i.value]])]),_:1},8,["runText","theme"])])]),c("div",Nf,[c("div",Rf,[z(d,{code:m,"floating-tabs":o.value,lang:"html",tabs:"",theme:E(n)},{label:pn(()=>[c("div",Bf,[jn(c("input",{"onUpdate:modelValue":b[3]||(b[3]=y=>o.value=y),checked:"",class:"form-check-input",role:"switch",type:"checkbox"},null,512),[[ou,o.value]]),c("label",null,[ge(" floatingTabs = "),c("span",Lf,Ce(o.value),1)])])]),_:1},8,["floating-tabs","theme"])])]),c("div",Df,[c("div",Hf,[z(d,{code:k,height:r.value,lang:"html",tabs:!1,theme:E(n)},{label:pn(()=>[ge(" height: "),jn(c("input",{"onUpdate:modelValue":b[4]||(b[4]=y=>r.value=y),class:"form-control",type:"number"},null,512),[[Kn,r.value]])]),_:1},8,["height","theme"])])]),c("div",Uf,[c("div",qf,[z(d,{code:w,lang:"html","run-tab":!0,"tab-gap":l.value,tabs:"",theme:E(n)},{label:pn(()=>[ge(" tabGap: "),jn(c("input",{"onUpdate:modelValue":b[5]||(b[5]=y=>l.value=y),class:"form-control",type:"text"},null,512),[[Kn,l.value]])]),_:1},8,["tab-gap","theme"])])]),c("div",Wf,[c("div",Vf,[z(d,{code:h,indent:s.value,lang:"json",tabs:!1,theme:E(n)},{label:pn(()=>[ge(" indent (json): "),jn(c("input",{"onUpdate:modelValue":b[6]||(b[6]=y=>s.value=y),class:"form-control",type:"number"},null,512),[[Kn,s.value]])]),_:1},8,["indent","theme"])])])])}}},Kf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Plugins")])],-1),Gf={id:"plugin-example",class:"row mb-4"},Jf=Sc('<div class="col-12"><p> PrismJS does not load all plugins by default. In order to use additional plugins you will need to import them. Please note that not all plugins may work with this component. </p><p>Tested Plugins that do work include:</p><ul><li><a href="https://prismjs.com/plugins/autolinker/" target="_blank"> autolinker </a></li><li><a href="https://prismjs.com/plugins/inline-color/" target="_blank"> inline-color </a></li><li><a href="https://prismjs.com/plugins/line-numbers/" target="_blank"> line-numbers </a></li><li><a href="https://prismjs.com/plugins/match-braces/" target="_blank"> match-braces </a></li><li><a href="https://prismjs.com/plugins/show-invisibles/" target="_blank"> show-invisibles </a></li></ul></div>',1),Xf={class:"col-12"},Zf=c("a",{href:"https://prismjs.com/plugins/line-numbers/",target:"_blank"},"line-numbers",-1),Qf={__name:"PluginExamples",setup(e){const n=te("selectedTheme"),t=`<template>
  <CodeBlock
    class="line-numbers"
    :code="pluginExample"
    label="line-numbers"
    lang="html"
    :tabs="false"
  />
</template>

<script setup>
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
<\/script>`;return(a,o)=>{const r=We("CodeBlock");return K(),Z("div",null,[Kf,c("div",Gf,[Jf,c("div",Xf,[z(r,{class:"line-numbers",code:t,lang:"html",tabs:!1,theme:E(n)},{label:pn(()=>[ge(" Example using the "),Zf,ge(" Plugin ")]),_:1},8,["theme"])])])])}}},ed=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Tabs")])],-1),nd={id:"tab-copy-example",class:"row mb-4"},td={class:"col-12"},ad={id:"tab-run-example",class:"row mb-4"},od={class:"col-12"},rd={id:"tab-both-example",class:"row mb-4"},sd={class:"col-12"},id={__name:"TabExamples",setup(e){const n=te("codeBlockOptions"),t=te("selectedTheme"),a=`<CodeBlock
  :code="myCode"
  copy-tab
  label="Copy Code Tab"
  lang="javascript"
  :run-tab="false"
  tabs
/>`,o=`<template>
  <CodeBlock
    :code="myCode"
    :copy-tab="false"
    label="Run Code Tab"
    lang="javascript"
    run-tab
    tabs
    @run="runMyCodeFunction"
  />
</template>

<script setup>
  function runMyCodeFunction() {
    const message = 'Run Code Tab';
    alert(message);
  }
<\/script>`,r=`<template>
  <CodeBlock
    :code="myCode"
    label="Copy &amp; Run Code Tabs"
    lang="javascript"
    :run-tab="true"
    tabs
    @run="runMyOtherCodeFunction"
  />
</template>

<script setup>
  function runMyCodeFunction() {
    const message = 'bar';
    alert(message);
  }
<\/script>`;function s(){alert("Run Code Tab")}function i(){alert("Copy & Run Code Tabs")}return(l,u)=>{const f=We("CodeBlock");return K(),Z("div",null,[ed,c("div",nd,[c("div",td,[z(f,{code:a,"copy-tab":"",label:"Copy Code Tab",lang:"html","run-tab":!1,tabs:"",theme:E(t)},null,8,["theme"])])]),c("div",ad,[c("div",od,[z(f,{code:o,"copy-tab":!1,label:"Run Code Tab",lang:"html","max-height":E(n).preHeight,"run-tab":"",tabs:"",theme:E(t),onRun:s},null,8,["max-height","theme"])])]),c("div",rd,[c("div",sd,[z(f,{code:r,label:"Copy & Run Code Tabs",lang:"html","max-height":E(n).preHeight,"run-tab":!0,tabs:"",theme:E(t),onRun:i},null,8,["max-height","theme"])])])])}}},ld=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Testing")])],-1),cd={id:"copy-example",class:"row mb-4"},ud={class:"col-12"},fd={__name:"TestingExamples",setup(e){const n=te("selectedTheme"),t=`
<?php

namespace AppHttpControllers;

use AppModelsUser;
use InertiaInertia;
use IlluminateHttpJsonResponse;
use AppHttpControllersController;
use AppHttpRequestsDestroyUserRequest;
use AppHttpRequestsStoreUserRequest;
use AppHttpRequestsUpdateUserRequest;
use AppHttpResourcesUserResource;

class UserController extends Controller
{

	/**
	 * Users
	 *
	 * @return InertiaResponse
	 */
	public function index()
	{
		$users = User::get();

		return Inertia::render('Users/Index', [
			'currentPage'   => 'Site Options',
			'users'          => $users,
		]);
	}


	/**
	 * Store User.
	 *
	 */
	public function store(StoreUserRequest $request): JsonResponse
	{
		$validated = $request->validated();

		$user = [
			'name'	=> $validated['name'],
			'email'	=> $validated['email'],
		];

		$user = User::create($user);

		$response = [
			'err'   => !$user,
			'msg'   => $user ? 'success' : 'error',
			'user'  => new UserResource($user),
		];

		return response()->json($response);
	}


	/**
	 * Update User
	 */
	public function update(UpdateUserRequest $request, User $userModel): JsonResponse
	{
		$validated  = $request->validated();
		$user       = $userModel->withTrashed()->find($validated['id']);

		$user->updated_by = auth()->id();

		if ($validated['deletedAt'] === 'activate')
		{
			$user->restore();
		}
		else
		{
			$user->name		= $validated['name'];
			$user->email	= $validated['email'];

			$user->update($validated);
		}

		$response = [
			'err'       => !$user,
			'msg'       => $user ? 'success' : 'error',
			'siteOption'   => new UserResource($user),
		];

		return response()->json($response);
	}


	/**
	 * Remove User
	 */
	public function destroy(DestroyUserRequest $request, User $userModel): JsonResponse
	{
		$validated	= $request->validated();
		$user 		= $userModel->findOrFail($validated['id']);

		$user->updated_by = auth()->id();

		$results = $user->delete();

		return response()->json([
			'err'			=> !$results,
			'status'		=> $results ? 'success' : 'error',
			'siteOption'	=> new UserResource($user),
		]);
	}
}
`;return(a,o)=>{const r=We("CodeBlock");return K(),Z("div",null,[ld,c("div",cd,[c("div",ud,[z(r,{code:t,"copy-button":"",lang:"php",theme:E(n)},null,8,["theme"])])])])}}},dd={class:"mb-5"},pd=c("div",{class:"row"},[c("div",{class:"col-12 mb-3"},[c("h2",null,"Examples")])],-1),md={__name:"ExamplesSection",setup(e){return(n,t)=>(K(),Z("div",dd,[pd,z(E(Ef),{id:"lang-examples"}),z(E(rf),{id:"add-lang-examples"}),z(E(Qf),{id:"plugin-examples"}),z(E(id),{id:"tab-examples"}),z(E(gf),{id:"copy-button-examples"}),z(E(uf),{id:"browser-window-examples"}),z(E(Yf),{id:"other-prop-examples"})]))}},bd={class:"row mb-5"},gd=c("h2",null,"Events",-1),hd=[gd],yd={class:"col-12 mb-3"},vd={class:"table-responsive"},kd={class:"table table-striped"},wd=c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Description")])],-1),_d={valign:"top"},xd={valign:"top"},Cd={__name:"EventsSection",setup(e){const n=te("styleData"),t={run:{description:"The event emitted when the run tab is clicked."},"update:copy-status":{description:"The event emitted when the copy status is updated."}};return(a,o)=>(K(),Z("div",bd,[c("div",{class:we(E(n).h2ColClass)},hd,2),c("div",yd,[c("div",vd,[c("table",kd,[wd,c("tbody",null,[(K(),Z(ye,null,at(t,(r,s)=>c("tr",{key:r},[c("td",_d,Ce(s),1),c("td",xd,Ce(r.description),1)])),64))])])])])]))}},Ad={},Sd={class:"row mb-5"},Td=c("div",{class:"col-12 text-center"},null,-1),$d=[Td];function Ed(e,n){return K(),Z("div",Sd,$d)}const Od=ja(Ad,[["render",Ed]]),Pd={class:"row mb-5"},Fd=c("h2",null,"Installation",-1),jd=[Fd],Id={class:"col-12 mb-4"},Md={class:"col-12"},zd={__name:"InstallationSection",setup(e){const n=te("styleData"),t=te("selectedTheme"),a="pnpm add vue3-code-block",o="npm i vue3-code-block";return(r,s)=>{const i=We("CodeBlock");return K(),Z("div",Pd,[c("div",{class:we(E(n).h2ColClass)},jd,2),c("div",Id,[z(i,{code:a,label:"Using pnpm:",lang:"plain","show-run":!1,theme:E(t)},null,8,["theme"])]),c("div",Md,[z(i,{code:o,label:"Using npm:",lang:"plain","show-run":!1,theme:E(t)},null,8,["theme"])])])}}},Nd={class:"row mb-5"},Rd=c("h2",null,"License",-1),Bd=[Rd],Ld={class:"col-12"},Dd=c("p",null,[ge(" Copyright © 2023 WebDevNerdStuff "),c("br"),ge(" Licensed under the MIT license. ")],-1),Hd=["href"],Ud={__name:"LicenseSection",setup(e){const n=te("styleData"),t=te("links");return(a,o)=>(K(),Z("div",Nd,[c("div",{class:we(E(n).h2ColClass)},Bd,2),c("div",Ld,[Dd,c("p",null,[c("a",{href:E(t).license,target:"_blank"}," LICENSE.md ",8,Hd)])])]))}};const li=e=>(zo("data-v-296c1161"),e=e(),No(),e),qd={class:"row mb-5"},Wd=li(()=>c("h2",null,"Props",-1)),Vd=[Wd],Yd={class:"col-12 mb-3"},Kd={class:"table-responsive"},Gd={class:"table table-striped"},Jd=li(()=>c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Type"),c("th",null,"Default"),c("th",null,"Description")])],-1)),Xd={valign:"top"},Zd={class:"prop-type",valign:"top"},Qd={class:"prop-default",valign:"top"},ep=["innerHTML"],np={__name:"PropsSection",setup(e){const n=te("styleData"),t={browserWindow:{type:"Boolean",required:!1,default:!1,description:"To give the code block a browser window look."},code:{type:"[Object, Array, String, Number]",required:!0,default:"",description:"The code to be displayed in the code block."},codeBlockRadius:{type:"String",required:!1,default:"0.5rem",description:"The border radius of the code block."},copyButton:{type:Boolean,required:!1,default:!0,description:"To show a copy button within the code block"},copyIcons:{type:"Boolean",required:!1,default:!0,description:"To show the copy icons on the copy code tab."},copyTab:{type:"Boolean",required:!1,default:!0,description:"To show the copy code tab."},copyFailedText:{type:"String",required:!1,default:"Copy failed!",description:"The text to be displayed when the code copy failed."},copyText:{type:"String",required:!1,default:"Copy Code",description:"The text to be displayed on the copy tab."},copySuccessText:{type:"String",required:!1,default:"Copied!",description:"The text to be displayed when the code copy was successful."},floatingTabs:{type:"Boolean",required:!1,default:!0,description:"To make the tabs float on top of the code block."},height:{type:"[String, Number]",required:!1,default:"auto",description:"The height of the code block."},indent:{type:"Number",required:!1,default:4,description:"The number of spaces to indent the code for json."},label:{type:"String",required:!1,default:"",description:"The label to be displayed on the code block."},lang:{type:"String",required:!1,default:"javascript",description:"The language of the code."},maxHeight:{type:"[String, Number]",required:!1,default:"auto",description:"The max height of the code block."},persistentCopyButton:{type:"Boolean",required:!1,default:!1,description:"To show a persistent copy button within the code block"},runTab:{type:"Boolean",required:!1,default:!1,description:"To show the run tab."},tabGap:{type:"String",required:!1,default:"0.25rem",description:"The gap between the tabs."},tabs:{type:"Boolean",required:!1,default:!1,description:"To show the tabs. This will show/hide all tabs."},theme:{type:"[String, Boolean]",required:!1,default:"neon-bunny",description:`<p>The theme to be used for the code block. Available options include:</p>
		<p>
			<strong>Neon Bunny Themes</strong>
			<br />
			<code>neon-bunny</code>
			<br />
			<code>neon-bunny-carrot</code>
		</p>
		<p>
			<strong>Prism Themes</strong>
			<br />
			<code>default</code>
			<br />
			<code>prism</code>
			<br />
			<code>coy</code>
			<br />
			<code>dark</code>
			<br />
			<code>funky</code>
			<br />
			<code>okaidia</code>
			<br />
			<code>solarizedlight</code>
			<br />
			<code>tomorrow</code>
			<br />
			<code>twilight</code>
		</p>
		`}};return(a,o)=>(K(),Z("div",qd,[c("div",{class:we(E(n).h2ColClass)},Vd,2),c("div",Yd,[c("div",Kd,[c("table",Gd,[Jd,c("tbody",null,[(K(),Z(ye,null,at(t,(r,s)=>c("tr",{key:r},[c("td",Xd,Ce(s),1),c("td",Zd,Ce(r.type),1),c("td",Qd,Ce(r.default),1),c("td",{valign:"top",innerHTML:r.description},null,8,ep)])),64))])])])])]))}},tp=ja(np,[["__scopeId","data-v-296c1161"]]),ap={class:"row mb-5"},op=c("h2",null,"Slots",-1),rp=[op],sp={class:"col-12 mb-3"},ip={class:"table-responsive"},lp={class:"table table-striped"},cp=c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Description")])],-1),up={valign:"top"},fp={valign:"top"},dp={__name:"SlotsSection",setup(e){const n=te("styleData"),t={copyButton:{description:"Slot for the copy button of the component."},label:{description:"Slot for the label of the component."},tabs:{description:"Slot for the tabs of the component."}};return(a,o)=>(K(),Z("div",ap,[c("div",{class:we(E(n).h2ColClass)},rp,2),c("div",sp,[c("div",ip,[c("table",lp,[cp,c("tbody",null,[(K(),Z(ye,null,at(t,(r,s)=>c("tr",{key:r},[c("td",up,Ce(s),1),c("td",fp,Ce(r.description),1)])),64))])])])])]))}},pp={class:"row mb-5"},mp=c("h2",null,"Register Component",-1),bp=[mp],gp={class:"col-12"},hp={__name:"RegisterSection",setup(e){const n=te("styleData"),t=te("selectedTheme"),a=`import { createApp } from 'vue';
import CodeBlock from 'vue3-code-block';

createApp()
  .use(CodeBlock)
  .mount('#app');`;return(o,r)=>{const s=We("CodeBlock");return K(),Z("div",pp,[c("div",{class:we(E(n).h2ColClass)},bp,2),c("div",gp,[z(s,{code:a,label:"",lang:"javascript","show-run":!1,theme:E(t)},null,8,["theme"])])])}}},yp={class:"row mb-5"},vp=c("h2",null,"Usage",-1),kp=[vp],wp={class:"col-12"},_p={class:"col-12"},xp={__name:"UsageSection",setup(e){const n=te("styleData"),t=te("selectedTheme"),a=`<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo);
<\/script>`,o=`<template>
  <CodeBlock
    :code="runCode"
    label="Run My Code"
    lang="html"
    run-tab
    @run="runMyCode"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  alert(foo);
<\/script>`;function r(){alert("bar")}return(s,i)=>{const l=We("CodeBlock");return K(),Z("div",yp,[c("div",{class:we(E(n).h2ColClass)},kp,2),c("div",wp,[z(l,{code:a,label:"My Code",lang:"html","show-run":!1,theme:E(t)},null,8,["theme"])]),c("div",_p,[z(l,{code:o,label:"Run My Code",lang:"html","run-tab":"",tabs:"",theme:E(t),onRun:r},null,8,["theme"])])])}}};var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},io={},Cp={get exports(){return io},set exports(e){io=e}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,s={},i={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function b(d){return d instanceof l?new l(d.type,b(d.content),d.alias):Array.isArray(d)?d.map(b):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++r}),b.__id},clone:function b(d,y){y=y||{};var C,S;switch(i.util.type(d)){case"Object":if(S=i.util.objId(d),y[S])return y[S];C={},y[S]=C;for(var N in d)d.hasOwnProperty(N)&&(C[N]=b(d[N],y));return C;case"Array":return S=i.util.objId(d),y[S]?y[S]:(C=[],y[S]=C,d.forEach(function(G,B){C[B]=b(G,y)}),C);default:return d}},getLanguage:function(b){for(;b;){var d=o.exec(b.className);if(d)return d[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,d){b.className=b.className.replace(RegExp(o,"gi"),""),b.classList.add("language-"+d)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(b){var d=document.getElementsByTagName("script");for(var y in d)if(d[y].src==b)return d[y]}return null}},isActive:function(b,d,y){for(var C="no-"+d;b;){var S=b.classList;if(S.contains(d))return!0;if(S.contains(C))return!1;b=b.parentElement}return!!y}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(b,d){var y=i.util.clone(i.languages[b]);for(var C in d)y[C]=d[C];return y},insertBefore:function(b,d,y,C){C=C||i.languages;var S=C[b],N={};for(var G in S)if(S.hasOwnProperty(G)){if(G==d)for(var B in y)y.hasOwnProperty(B)&&(N[B]=y[B]);y.hasOwnProperty(G)||(N[G]=S[G])}var ne=C[b];return C[b]=N,i.languages.DFS(i.languages,function(le,Te){Te===ne&&le!=b&&(this[le]=N)}),N},DFS:function b(d,y,C,S){S=S||{};var N=i.util.objId;for(var G in d)if(d.hasOwnProperty(G)){y.call(d,G,d[G],C||G);var B=d[G],ne=i.util.type(B);ne==="Object"&&!S[N(B)]?(S[N(B)]=!0,b(B,y,null,S)):ne==="Array"&&!S[N(B)]&&(S[N(B)]=!0,b(B,y,G,S))}}},plugins:{},highlightAll:function(b,d){i.highlightAllUnder(document,b,d)},highlightAllUnder:function(b,d,y){var C={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var S=0,N;N=C.elements[S++];)i.highlightElement(N,d===!0,C.callback)},highlightElement:function(b,d,y){var C=i.util.getLanguage(b),S=i.languages[C];i.util.setLanguage(b,C);var N=b.parentElement;N&&N.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(N,C);var G=b.textContent,B={element:b,language:C,grammar:S,code:G};function ne(Te){B.highlightedCode=Te,i.hooks.run("before-insert",B),B.element.innerHTML=B.highlightedCode,i.hooks.run("after-highlight",B),i.hooks.run("complete",B),y&&y.call(B.element)}if(i.hooks.run("before-sanity-check",B),N=B.element.parentElement,N&&N.nodeName.toLowerCase()==="pre"&&!N.hasAttribute("tabindex")&&N.setAttribute("tabindex","0"),!B.code){i.hooks.run("complete",B),y&&y.call(B.element);return}if(i.hooks.run("before-highlight",B),!B.grammar){ne(i.util.encode(B.code));return}if(d&&a.Worker){var le=new Worker(i.filename);le.onmessage=function(Te){ne(Te.data)},le.postMessage(JSON.stringify({language:B.language,code:B.code,immediateClose:!0}))}else ne(i.highlight(B.code,B.grammar,B.language))},highlight:function(b,d,y){var C={code:b,grammar:d,language:y};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),l.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(b,d){var y=d.rest;if(y){for(var C in y)d[C]=y[C];delete d.rest}var S=new v;return m(S,S.head,b),f(b,S,d,S.head,0),w(S)},hooks:{all:{},add:function(b,d){var y=i.hooks.all;y[b]=y[b]||[],y[b].push(d)},run:function(b,d){var y=i.hooks.all[b];if(!(!y||!y.length))for(var C=0,S;S=y[C++];)S(d)}},Token:l};a.Prism=i;function l(b,d,y,C){this.type=b,this.content=d,this.alias=y,this.length=(C||"").length|0}l.stringify=function b(d,y){if(typeof d=="string")return d;if(Array.isArray(d)){var C="";return d.forEach(function(ne){C+=b(ne,y)}),C}var S={type:d.type,content:b(d.content,y),tag:"span",classes:["token",d.type],attributes:{},language:y},N=d.alias;N&&(Array.isArray(N)?Array.prototype.push.apply(S.classes,N):S.classes.push(N)),i.hooks.run("wrap",S);var G="";for(var B in S.attributes)G+=" "+B+'="'+(S.attributes[B]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+G+">"+S.content+"</"+S.tag+">"};function u(b,d,y,C){b.lastIndex=d;var S=b.exec(y);if(S&&C&&S[1]){var N=S[1].length;S.index+=N,S[0]=S[0].slice(N)}return S}function f(b,d,y,C,S,N){for(var G in y)if(!(!y.hasOwnProperty(G)||!y[G])){var B=y[G];B=Array.isArray(B)?B:[B];for(var ne=0;ne<B.length;++ne){if(N&&N.cause==G+","+ne)return;var le=B[ne],Te=le.inside,Fe=!!le.lookbehind,qe=!!le.greedy,un=le.alias;if(qe&&!le.pattern.global){var be=le.pattern.toString().match(/[imsuy]*$/)[0];le.pattern=RegExp(le.pattern.source,be+"g")}for(var oe=le.pattern||le,J=C.next,fe=S;J!==d.tail&&!(N&&fe>=N.reach);fe+=J.value.length,J=J.next){var $e=J.value;if(d.length>b.length)return;if(!($e instanceof l)){var Ee=1,se;if(qe){if(se=u(oe,fe,b,Fe),!se||se.index>=b.length)break;var he=se.index,X=se.index+se[0].length,ce=fe;for(ce+=J.value.length;he>=ce;)J=J.next,ce+=J.value.length;if(ce-=J.value.length,fe=ce,J.value instanceof l)continue;for(var je=J;je!==d.tail&&(ce<X||typeof je.value=="string");je=je.next)Ee++,ce+=je.value.length;Ee--,$e=b.slice(fe,ce),se.index-=fe}else if(se=u(oe,0,$e,Fe),!se)continue;var he=se.index,Re=se[0],fn=$e.slice(0,he),Ye=$e.slice(he+Re.length),nn=fe+$e.length;N&&nn>N.reach&&(N.reach=nn);var tn=J.prev;fn&&(tn=m(d,tn,fn),fe+=fn.length),k(d,tn,Ee);var p=new l(G,Te?i.tokenize(Re,Te):Re,un,Re);if(J=m(d,tn,p),Ye&&m(d,J,Ye),Ee>1){var g={cause:G+","+ne,reach:nn};f(b,d,y,J.prev,fe,g),N&&g.reach>N.reach&&(N.reach=g.reach)}}}}}}function v(){var b={value:null,prev:null,next:null},d={value:null,prev:b,next:null};b.next=d,this.head=b,this.tail=d,this.length=0}function m(b,d,y){var C=d.next,S={value:y,prev:d,next:C};return d.next=S,C.prev=S,b.length++,S}function k(b,d,y){for(var C=d.next,S=0;S<y&&C!==b.tail;S++)C=C.next;d.next=C,C.prev=d,b.length-=S}function w(b){for(var d=[],y=b.head.next;y!==b.tail;)d.push(y.value),y=y.next;return d}if(!a.document)return a.addEventListener&&(i.disableWorkerMessageHandler||a.addEventListener("message",function(b){var d=JSON.parse(b.data),y=d.language,C=d.code,S=d.immediateClose;a.postMessage(i.highlight(C,i.languages[y],y)),S&&a.close()},!1)),i;var h=i.util.currentScript();h&&(i.filename=h.src,h.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var A=document.readyState;A==="loading"||A==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(n);e.exports&&(e.exports=t),typeof so<"u"&&(so.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(o,r){var s={};s["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};i["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var l={};l[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,o){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:t.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var r=a.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",o=function(h,_){return"✖ Error "+h+" while fetching file: "+_},r="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",l="loading",u="loaded",f="failed",v="pre[data-src]:not(["+i+'="'+u+'"]):not(['+i+'="'+l+'"])';function m(h,_,A){var b=new XMLHttpRequest;b.open("GET",h,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?_(b.responseText):b.status>=400?A(o(b.status,b.statusText)):A(r))},b.send(null)}function k(h){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(_){var A=Number(_[1]),b=_[2],d=_[3];return b?d?[A,Number(d)]:[A,void 0]:[A,A]}}t.hooks.add("before-highlightall",function(h){h.selector+=", "+v}),t.hooks.add("before-sanity-check",function(h){var _=h.element;if(_.matches(v)){h.code="",_.setAttribute(i,l);var A=_.appendChild(document.createElement("CODE"));A.textContent=a;var b=_.getAttribute("data-src"),d=h.language;if(d==="none"){var y=(/\.(\w+)$/.exec(b)||[,"none"])[1];d=s[y]||y}t.util.setLanguage(A,d),t.util.setLanguage(_,d);var C=t.plugins.autoloader;C&&C.loadLanguages(d),m(b,function(S){_.setAttribute(i,u);var N=k(_.getAttribute("data-range"));if(N){var G=S.split(/\r\n?|\n/g),B=N[0],ne=N[1]==null?G.length:N[1];B<0&&(B+=G.length),B=Math.max(0,Math.min(B-1,G.length)),ne<0&&(ne+=G.length),ne=Math.max(0,Math.min(ne,G.length)),S=G.slice(B,ne).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(B+1))}A.textContent=S,t.highlightElement(A)},function(S){_.setAttribute(i,f),A.textContent=S})}}),t.plugins.fileHighlight={highlight:function(_){for(var A=(_||document).querySelectorAll(v),b=0,d;d=A[b++];)t.highlightElement(d)}};var w=!1;t.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Cp);const Mr=io;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){function n(t,a){return"___"+t.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(o,function(i){if(typeof r=="function"&&!r(i))return i;for(var l=s.length,u;t.code.indexOf(u=n(a,l))!==-1;)++l;return s[l]=i,u}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language!==a||!t.tokenStack)return;t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);function s(i){for(var l=0;l<i.length&&!(o>=r.length);l++){var u=i[l];if(typeof u=="string"||u.content&&typeof u.content=="string"){var f=r[o],v=t.tokenStack[f],m=typeof u=="string"?u:u.content,k=n(a,f),w=m.indexOf(k);if(w>-1){++o;var h=m.substring(0,w),_=new e.Token(a,e.tokenize(v,t.grammar),"language-"+a,v),A=m.substring(w+k.length),b=[];h&&b.push.apply(b,s([h])),b.push(_),A&&b.push.apply(b,s([A])),typeof u=="string"?i.splice.apply(i,[l,1].concat(b)):u.content=b}}else u.content&&s(u.content)}return i}s(t.tokens)}}})})(Prism);(function(e){var n=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,o=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,r=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:n,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:o,punctuation:r};var s={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},i=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:s}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:s}}];e.languages.insertBefore("php","variable",{string:i,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:n,string:i,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:a,operator:o,punctuation:r}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(l){if(/<\?/.test(l.code)){var u=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(l,"php",u)}}),e.hooks.add("after-tokenize",function(l){e.languages["markup-templating"].tokenizePlaceholders(l,"php")})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(s,i){if(!(s.tagName!=="PRE"||!s.classList.contains(e))){var l=s.querySelector(".line-numbers-rows");if(l){var u=parseInt(s.getAttribute("data-start"),10)||1,f=u+(l.children.length-1);i<u&&(i=u),i>f&&(i=f);var v=i-u;return l.children[v]}}},resize:function(s){a([s])},assumeViewportIndependence:!0};function a(s){if(s=s.filter(function(l){var u=o(l),f=u["white-space"];return f==="pre-wrap"||f==="pre-line"}),s.length!=0){var i=s.map(function(l){var u=l.querySelector("code"),f=l.querySelector(".line-numbers-rows");if(!(!u||!f)){var v=l.querySelector(".line-numbers-sizer"),m=u.textContent.split(n);v||(v=document.createElement("span"),v.className="line-numbers-sizer",u.appendChild(v)),v.innerHTML="0",v.style.display="block";var k=v.getBoundingClientRect().height;return v.innerHTML="",{element:l,lines:m,lineHeights:[],oneLinerHeight:k,sizer:v}}}).filter(Boolean);i.forEach(function(l){var u=l.sizer,f=l.lines,v=l.lineHeights,m=l.oneLinerHeight;v[f.length-1]=void 0,f.forEach(function(k,w){if(k&&k.length>1){var h=u.appendChild(document.createElement("span"));h.style.display="block",h.textContent=k}else v[w]=m})}),i.forEach(function(l){for(var u=l.sizer,f=l.lineHeights,v=0,m=0;m<f.length;m++)f[m]===void 0&&(f[m]=u.children[v++].getBoundingClientRect().height)}),i.forEach(function(l){var u=l.sizer,f=l.element.querySelector(".line-numbers-rows");u.style.display="none",u.innerHTML="",l.lineHeights.forEach(function(v,m){f.children[m].style.height=v+"px"})})}}function o(s){return s?window.getComputedStyle?getComputedStyle(s):s.currentStyle||null:null}var r=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(s){if(s.code){var i=s.element,l=i.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,e)){i.classList.remove(e),l.classList.add(e);var u=s.code.match(n),f=u?u.length+1:1,v,m=new Array(f+1).join("<span></span>");v=document.createElement("span"),v.setAttribute("aria-hidden","true"),v.className="line-numbers-rows",v.innerHTML=m,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),s.element.appendChild(v),a([l]),Prism.hooks.run("line-numbers",s)}}}),Prism.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})})();const Ap={class:"container mb-5"},Sp=c("div",{class:"row mb-4"},[c("div",{class:"col-12 text-center"},[c("img",{alt:"Vue",class:"vue-logo",src:du})])],-1),Tp={class:"row mb-3"},$p=c("div",{class:"col-12 text-center"},[c("h1",null,"Vue 3 CodeBlock")],-1),Ep={class:"col-12 text-center"},Op={class:"badge bg-secondary rounded-pill"},Pp={class:"container mb-5"},Fp={class:"row"},jp={class:"col-12"},Ip=["href"],Mp={class:"row"},zp={class:"col-12 col-md-3"},Np=c("label",{class:"form-label",for:"theme-selection-select"},"Switch Theme:",-1),Rp=["selected","value"],Bp={key:0,class:"container"},Lp={key:1,class:"container"},Dp={__name:"DemoPage",setup(e){const n=te("links"),t=Oe(!1),a=Oe("neon-bunny"),o=[{label:"Neon Bunny",value:"neon-bunny"},{label:"Neon Bunny - Carrot",value:"neon-bunny-carrot"},{label:"Prism Default",value:"default"},{label:"Coy",value:"coy"},{label:"Dark",value:"dark"},{label:"Funky",value:"funky"},{label:"Okaidia",value:"okaidia"},{label:"Solarizedlight",value:"solarizedlight"},{label:"Tomorrow",value:"tomorrow"},{label:"Twilight",value:"twilight"}];bt("selectedTheme",a);function r(s){a.value=s}return(s,i)=>(K(),Z(ye,null,[c("div",Ap,[Sp,c("div",Tp,[$p,c("div",Ep,[c("span",Op,Ce(E(fu)),1)])])]),c("div",Pp,[c("div",Fp,[c("div",jp,[c("p",null,[ge(" The Vue 3 CodeBlock component leverages the power of "),c("a",{href:E(n).prism,target:"_blank"},"PrismJS",8,Ip),ge(" to provide syntax highlighting for code blocks within your application. The component takes a prop, which is the code to be highlighted, and uses PrismJS to render the code with syntax highlighting. The component supports a variety of programming languages and can be customized with different themes to match your application's design. With this component, your users can display their code snippets with ease and clarity, making it easier to share and collaborate on code within your application. ")])])]),c("div",Mp,[c("div",zp,[Np,c("select",{id:"theme-selection-select","aria-label":"Theme Selection",class:"form-select",onChange:i[0]||(i[0]=l=>r(l.target.value))},[(K(),Z(ye,null,at(o,l=>c("option",{key:l,selected:a.value===l.value,value:l.value},Ce(l.label),9,Rp)),64))],32)])])]),t.value?(K(),Z("div",Lp,[z(E(fd))])):(K(),Z("div",Bp,[z(E(zd),{id:"ul-installation"}),z(E(hp),{id:"ul-register-plugin"}),z(E(xp),{id:"ul-usage"}),z(E(tp),{id:"ul-props"}),z(E(Cd),{id:"ul-events"}),z(E(dp),{id:"ul-slots"}),z(E(md),{id:"ul-examples"}),z(E(Mu),{id:"ul-css-vars"}),z(E(Wu),{id:"ul-dependencies"}),z(E(yu),{id:"ul-change-log"}),z(E(Ud),{id:"ul-license"}),z(E(Od))]))],64))}};const Hp={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5"},Up={class:"container"},qp=c("a",{class:"navbar-brand",href:"/vue3-code-block/"},"Vue 3 CodeBlock",-1),Wp=c("button",{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",class:"navbar-toggler","data-bs-target":"#navbarSupportedContent","data-bs-toggle":"collapse",type:"button"},[c("span",{class:"navbar-toggler-icon"})],-1),Vp={id:"navbarSupportedContent",class:"collapse navbar-collapse"},Yp={class:"navbar-nav me-auto mb-2 mb-lg-0"},Kp={class:"nav-item"},Gp={"aria-current":"page",class:"nav-link active",href:"/vue3-code-block/"},Jp=c("li",{class:"nav-item dropdown"},[c("a",{id:"docs-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Docs "),c("ul",{"aria-labelledby":"docs-dropdown",class:"dropdown-menu dropdown-menu-dark"},[c("li",null,[c("a",{class:"dropdown-item",href:"#ul-installation"}," Installation ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-register-plugin"},"Register Component")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-props"},"Props")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-events"},"Events")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-slots"},"Slots")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-examples"},"Examples")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-css-vars"},"CSS Variables")]),c("li",null,[c("hr",{class:"dropdown-divider"})]),c("li",null,[c("h6",{class:"dropdown-header"},"Info")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-dependencies"}," Dependencies ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-change-log"},"Change Log")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-license"},"License")])])],-1),Xp=c("li",{class:"nav-item dropdown"},[c("a",{id:"examples-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Examples "),c("ul",{"aria-labelledby":"examples-dropdown",class:"dropdown-menu dropdown-menu-dark"},[c("li",null,[c("a",{class:"dropdown-item",href:"#lang-examples"},"Languages")]),c("li",null,[c("a",{class:"dropdown-item",href:"#add-lang-examples"}," Additional Languages ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#plugin-examples"},"Plugins")]),c("li",null,[c("a",{class:"dropdown-item",href:"#tab-examples"},"Tabs")]),c("li",null,[c("a",{class:"dropdown-item",href:"#copy-button-examples"}," Copy Button ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#browser-window-examples"}," Browser Window ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#other-prop-examples"}," Other Props ")])])],-1),Zp={class:"d-flex"},Qp={class:"navbar-nav me-auto mb-2 mb-lg-0"},em={class:"nav-item"},nm=["href"],tm={class:"nav-item"},am=["href"],om={__name:"NavBar",setup(e){const n=te("links");return(t,a)=>{const o=We("fa-icon");return K(),Z("nav",Hp,[c("div",Up,[qp,Wp,c("div",Vp,[c("ul",Yp,[c("li",Kp,[c("a",Gp,[z(o,{icon:"fa-solid fa-house"})])]),Jp,Xp]),c("div",Zp,[c("ul",Qp,[c("li",em,[c("a",{class:"nav-link",href:E(n).github,target:"_blank"},[z(o,{icon:"fa-brands fa-github"}),ge(" GitHub ")],8,nm)]),c("li",tm,[c("a",{class:"nav-link",href:E(n).npm,target:"_blank"},[z(o,{icon:"fa-brands fa-npm"}),ge(" Package ")],8,am)])])])])])])}}},rm={class:"footer-container container-fluid"},sm={class:"container py-2"},im={class:"d-flex flex-wrap justify-content-between align-items-center my-2"},lm={class:"col-md-4 d-flex align-items-center"},cm={class:"mb-3 mb-md-0 text-muted"},um={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},fm={class:"ms-3"},dm=["href"],pm={class:"ms-3"},mm=["href"],bm=ut({__name:"FooterBar",setup(e){const n=te("links"),t=new Date().getFullYear();return(a,o)=>{const r=We("fa-icon");return K(),Z("div",rm,[c("div",sm,[c("footer",im,[c("div",lm,[c("span",cm," © "+Ce(E(t))+" WebDevNerdStuff ",1)]),c("ul",um,[c("li",fm,[c("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:E(n).github,role:"button",target:"_blank"},[z(r,{icon:"fa-brands fa-github"})],8,dm)]),c("li",pm,[c("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:E(n).npm,role:"button",target:"_blank"},[z(r,{icon:"fa-brands fa-npm"})],8,mm)])])])])])}}});const gm=ut({__name:"App",setup(e){bt("styleData",{h2ColClass:"col-12 mb-4",fieldWidth:{maxWidth:"100%",width:"300px"}});const n=uu,t=`https://github.com/webdevnerdstuff/${n}`,a={changeLog:`${t}/blob/main/CHANGELOG.md`,docs:`https://webdevnerdstuff.github.io/${n}/`,github:t,license:`${t}/blob/main/LICENSE.md`,neonBunnyTheme:"https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny",npm:`https://www.npmjs.com/package/${n}`,prism:"https://prismjs.com/",uaParser:"https://www.npmjs.com/package/ua-parser-js",vueJs:"https://vuejs.org/"};bt("links",a);const o=Oe({browserWindow:!1,preHeight:"30em"});return bt("codeBlockOptions",o),(r,s)=>(K(),Z(ye,null,[z(om),z(Dp),z(bm)],64))}}),hm=`/**
 * MIT License
 * Copyright (c) 2023 WebDevNerdStuff
 * WebDevNerdStuff Neon Bunny - Carrot
 * VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
 */

:root {
	--neon-bunny-blue-light: #2492ff;
	--neon-bunny-blue: #0b93ff;
	--neon-bunny-gray: #7f817e;
	--neon-bunny-green-darker-darker: #008b05;
	--neon-bunny-green-darker: #2bb71d;
	--neon-bunny-green-light: #7cd47d;
	--neon-bunny-green: #00d205;
	--neon-bunny-lime: #c3e88d;
	--neon-bunny-magenta: #dd00ff;
	--neon-bunny-orange-darker: #e58100;
	--neon-bunny-orange-light: #ffc266;
	--neon-bunny-orange: #ff9900;
	--neon-bunny-peach-light: #ffe4a6;
	--neon-bunny-peach: #ffcb6b;
	--neon-bunny-pink: #ff1190;
	--neon-bunny-purple-light-dim: #c792ea;
	--neon-bunny-purple-light: #da96df;
	--neon-bunny-purple: #ea03ff;
	--neon-bunny-red: #ff5370;
	--neon-bunny-teal: #00EEFF;
	--neon-bunny-white: #fff;
	--neon-bunny-yellow-light: #ffffa2;
	--neon-bunny-yellow: #ffff00;

	/* Standard */
	--neon-bunny-atrule: var(--neon-bunny-peach);
	--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
	--neon-bunny-attr-value: var(--neon-bunny-peach);
	--neon-bunny-boolean: var(--neon-bunny-purple-light);
	--neon-bunny-builtin: var(--neon-bunny-purple);
	--neon-bunny-cdata: var(--neon-bunny-gray);
	--neon-bunny-char: var(--neon-bunny-pink);
	--neon-bunny-class-name: var(--neon-bunny-peach);
	--neon-bunny-comment: var(--neon-bunny-gray);
	--neon-bunny-constant: var(--neon-bunny-green-darker);
	--neon-bunny-deleted: var(--neon-bunny-red);
	--neon-bunny-entity: var(--neon-bunny-peach);
	--neon-bunny-function: var(--neon-bunny-orange-light);
	--neon-bunny-important: var(--neon-bunny-pink);
	--neon-bunny-inserted: var(--neon-bunny-lime);
	--neon-bunny-keyword: var(--neon-bunny-purple-light);
	--neon-bunny-namespace: var(--neon-bunny-peach);
	--neon-bunny-number: var(--neon-bunny-white);
	--neon-bunny-operator: var(--neon-bunny-orange);
	--neon-bunny-prolog: var(--neon-bunny-gray);
	--neon-bunny-property: var(--neon-bunny-orange-light);
	--neon-bunny-punctuation: var(--neon-bunny-orange);
	--neon-bunny-regex: var(--neon-bunny-peach-light);
	--neon-bunny-string: var(--neon-bunny-green-light);
	--neon-bunny-symbol: var(--neon-bunny-orange-light);
	--neon-bunny-tag: var(--neon-bunny-orange);
	--neon-bunny-url: var(--neon-bunny-orange-darker);
	--neon-bunny-variable: var(--neon-bunny-orange);

	/* HTML */
	--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);
	--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);
	--neon-bunny-html-attr-value: var(--neon-bunny-green);

	/* CSS */
	--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
	--neon-bunny-css-atrule: var(--neon-bunny-white);
	--neon-bunny-css-function: var(--neon-bunny-orange-darker);
	--neon-bunny-css-property: var(--neon-bunny-pink);
	--neon-bunny-css-punctuation: var(--neon-bunny-white);
	--neon-bunny-css-selector: var(--neon-bunny-yellow);
	--neon-bunny-css-string: var(--neon-bunny-green-light);
	--neon-bunny-css: var(--neon-bunny-teal);

	/* JS */
	--neon-bunny-js-keyword: var(--neon-bunny-magenta);
	--neon-bunny-js-literal-property: var(--neon-bunny-orange);
	--neon-bunny-js-operator: var(--neon-bunny-blue-light);
	--neon-bunny-js-punctuation: var(--neon-bunny-white);
	--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js: var(--neon-bunny-orange);

	/* PHP */
	--neon-bunny-php-boolean: var(--neon-bunny-purple-light);
	--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);
	--neon-bunny-php-class-name: var(--neon-bunny-yellow);
	--neon-bunny-php-double-quote-string: var(--neon-bunny-green);
	--neon-bunny-php-function: var(--neon-bunny-orange-light);
	--neon-bunny-php-keyword: var(--neon-bunny-magenta);
	--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);
	--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);
	--neon-bunny-php-operator: var(--neon-bunny-yellow-light);
	--neon-bunny-php-package: var(--neon-bunny-yellow);
	--neon-bunny-php-property: var(--neon-bunny-orange);
	--neon-bunny-php-punctuation: var(--neon-bunny-white);
	--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);
	--neon-bunny-php-variable: var(--neon-bunny-orange);
}

code[class*="language-"],
pre[class*="language-"] {
	-moz-hyphens: none;
	-moz-tab-size: 4;
	-ms-hyphens: none;
	-o-tab-size: 4;
	-webkit-hyphens: none;

	color: var(--neon-bunny-white);
	font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
	font-size: 1em;
	hyphens: none;
	line-height: 1.5;
	tab-size: 4;
	text-align: left;
	white-space: pre;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
	background: rgba(29, 59, 83, 0.99);
	text-shadow: none;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
	background: #ffffff15;
	text-shadow: none;
}

@media print {

	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	margin: 0.5em 0;
	overflow: auto;
	padding: 1em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #000000;
	color: white;
}

:not(pre) > code[class*="language-"] {
	border-radius: 0.3em;
	padding: 0.1em;
	white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
	color: var(--neon-bunny-atrule);
}

.token.attr-name {
	color: var(--neon-bunny-attr-name);
}

.token.attr-value {
	color: var(--neon-bunny-attr-value);
}

.token.bold {
	font-weight: bold;
}

.token.boolean {
	color: var(--neon-bunny-boolean);
}

.token.builtin {
	color: var(--neon-bunny-builtin);
}

.token.cdata {
	color: var(--neon-bunny-cdata);
	font-style: italic;
}

.token.char {
	color: var(--neon-bunny-char);
}

.token.class-name {
	color: var(--neon-bunny-class-name);
}

.token.constant {
	color: var(--neon-bunny-constant);
}

.token.comment {
	color: var(--neon-bunny-comment);
	font-style: italic;
}

.token.deleted {
	color: var(--neon-bunny-deleted);
}

.token.entity {
	color: var(--neon-bunny-entity);
}

.token.function {
	color: var(--neon-bunny-function);
}

.token.important {
	color: var(--neon-bunny-important);
	font-style: italic;
}

.token.inserted {
	color: var(--neon-bunny-inserted);
}

.token.italic {
	font-style: italic;
}

.token.keyword {
	color: var(--neon-bunny-keyword);
}

.namespace {
	color: var(--neon-bunny-namespace);
}

.token.number {
	color: var(--neon-bunny-number);
}

.token.operator {
	color: var(--neon-bunny-operator);
}

.token.prolog {
	color: var(--neon-bunny-prolog);
	font-style: italic;
}

.token.property {
	color: var(--neon-bunny-property);
}

.token.punctuation {
	color: var(--neon-bunny-punctuation);
}

.token.regex {
	color: var(--neon-bunny-regex);
}

.token.string {
	color: var(--neon-bunny-string);
}

.token.symbol {
	color: var(--neon-bunny-symbol);
}

.token.tag {
	color: var(--neon-bunny-tag);
}

.token.url {
	color: var(--neon-bunny-url);
	text-decoration: underline;
}

.token.variable {
	color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
	color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
	color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
	color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
	color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
	color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
	color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
	color: var(--neon-bunny-css-function);
}

.language-css .token.property {
	color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
	color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
	color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
	color: var(--neon-bunny-css-string);
	font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
	color: var(--neon-bunny-js) !important;
	font-style: italic;
}

.language-javascript span,
.language-js span {
	font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
	color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
	color: var(--neon-bunny-js-literal-property);
	font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
	color: var(--neon-bunny-js-operator);
	font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
	color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
	color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
	color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
	color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
	color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
	color: var(--neon-bunny-php-class-name-return-type);
}

.language-php .token.function {
	color: var(--neon-bunny-php-function);
	text-decoration: underline;
}

.language-php .token.keyword {
	color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
	color: var(--neon-bunny-php-keyword-type-hint);
}

.language-php .token.operator {
	color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
	color: var(--neon-bunny-php-package);
}

.language-php .token.property {
	color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
	color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
	color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
	color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
	color: var(--neon-bunny-php-variable);
}
`,ym=`/**
 * MIT License
 * Copyright (c) 2023 WebDevNerdStuff
 * WebDevNerdStuff Neon Bunny
 * VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
 */

:root {
	--neon-bunny-blue-light: #2492ff;
	--neon-bunny-blue: #0b93ff;
	--neon-bunny-gray-lighter: #aaa;
	--neon-bunny-gray: #7f817e;
	--neon-bunny-green-darker-darker: #008b05;
	--neon-bunny-green-darker: #2bb71d;
	--neon-bunny-green-light: #2bb71d;
	--neon-bunny-green-neon: #0aff04;
	--neon-bunny-green: #00d205;
	--neon-bunny-lime-lighter: #c3e88d;
	--neon-bunny-lime: #b2ff02;
	--neon-bunny-magenta: #df00df;
	--neon-bunny-neon-green: #00ff00;
	--neon-bunny-orange: #e58100;
	--neon-bunny-peach-darker: #ffb46a;
	--neon-bunny-peach-light: #ffe4a6;
	--neon-bunny-peach: #ffcb6b;
	--neon-bunny-pink: #ff1190;
	--neon-bunny-purple-light-dim: #c792ea;
	--neon-bunny-purple-light: #d285cc;
	--neon-bunny-purple: #ea03ff;
	--neon-bunny-red: #ff3229;
	--neon-bunny-salmon: #ff6f5b;
	--neon-bunny-teal: #80fcff;
	--neon-bunny-white: #fff;
	--neon-bunny-yellow: #fef611;

	/* Standard */
	--neon-bunny-atrule: var(--neon-bunny-peach);
	--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);
	--neon-bunny-attr-value: var(--neon-bunny-peach);
	--neon-bunny-boolean: var(--neon-bunny-blue-light);
	--neon-bunny-builtin: var(--neon-bunny-purple);
	--neon-bunny-cdata: var(--neon-bunny-gray);
	--neon-bunny-char: var(--neon-bunny-pink);
	--neon-bunny-class-name: var(--neon-bunny-peach);
	--neon-bunny-comment: var(--neon-bunny-gray);
	--neon-bunny-constant: var(--neon-bunny-green-darker);
	--neon-bunny-deleted: var(--neon-bunny-red);
	--neon-bunny-entity: var(--neon-bunny-peach);
	--neon-bunny-function: var(--neon-bunny-green-neon);
	--neon-bunny-important: var(--neon-bunny-red);
	--neon-bunny-inserted: var(--neon-bunny-lime-lighter);
	--neon-bunny-keyword: var(--neon-bunny-blue);
	--neon-bunny-namespace: var(--neon-bunny-peach);
	--neon-bunny-number: var(--neon-bunny-white);
	--neon-bunny-operator: var(--neon-bunny-blue-light);
	--neon-bunny-prolog: var(--neon-bunny-gray);
	--neon-bunny-property: var(--neon-bunny-pink);
	--neon-bunny-punctuation: var(--neon-bunny-blue);
	--neon-bunny-regex: var(--neon-bunny-peach-light);
	--neon-bunny-string: var(--neon-bunny-green-darker);
	--neon-bunny-symbol: var(--neon-bunny-pink);
	--neon-bunny-tag: var(--neon-bunny-blue-light);
	--neon-bunny-url: var(--neon-bunny-orange);
	--neon-bunny-variable: var(--neon-bunny-green-darker);

	/* HTML */
	--neon-bunny-html-attr-name: var(--neon-bunny-green);
	--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);
	--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);

	/* CSS */
	--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);
	--neon-bunny-css-atrule: var(--neon-bunny-white);
	--neon-bunny-css-function: var(--neon-bunny-orange);
	--neon-bunny-css-property: var(--neon-bunny-pink);
	--neon-bunny-css-punctuation: var(--neon-bunny-white);
	--neon-bunny-css-selector: var(--neon-bunny-lime);
	--neon-bunny-css-string: var(--neon-bunny-green-light);
	--neon-bunny-css: var(--neon-bunny-purple-light-dim);

	/* JS */
	--neon-bunny-js-keyword: var(--neon-bunny-blue);
	--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);
	--neon-bunny-js-operator: var(--neon-bunny-blue-light);
	--neon-bunny-js-punctuation: var(--neon-bunny-white);
	--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);
	--neon-bunny-js: var(--neon-bunny-green-darker);

	/* PHP */
	--neon-bunny-php-boolean: var(--neon-bunny-blue);
	--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);
	--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);
	--neon-bunny-php-class-name: var(--neon-bunny-teal);
	--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);
	--neon-bunny-php-function: var(--neon-bunny-green-neon);
	--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);
	--neon-bunny-php-keyword: var(--neon-bunny-blue);
	--neon-bunny-php-operator: var(--neon-bunny-purple);
	--neon-bunny-php-package: var(--neon-bunny-peach);
	--neon-bunny-php-property: var(--neon-bunny-purple-light);
	--neon-bunny-php-punctuation: var(--neon-bunny-white);
	--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);
	--neon-bunny-php-variable: var(--neon-bunny-purple-light);
}

code[class*="language-"],
pre[class*="language-"] {
	-moz-hyphens: none;
	-moz-tab-size: 4;
	-ms-hyphens: none;
	-o-tab-size: 4;
	-webkit-hyphens: none;

	color: var(--neon-bunny-white);
	font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
	font-size: 1em;
	hyphens: none;
	line-height: 1.5;
	tab-size: 4;
	text-align: left;
	white-space: pre;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
	background: rgba(29, 59, 83, 0.99);
	text-shadow: none;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
	background: #ffffff15;
	text-shadow: none;
}

@media print {

	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	margin: 0.5em 0;
	overflow: auto;
	padding: 1em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #000000;
	color: white;
}

:not(pre) > code[class*="language-"] {
	border-radius: 0.3em;
	padding: 0.1em;
	white-space: normal;
}

/* -------------------------------------------------- Standard */
.token.atrule {
	color: var(--neon-bunny-atrule);
}

.token.attr-name {
	color: var(--neon-bunny-attr-name);
}

.token.attr-value {
	color: var(--neon-bunny-attr-value);
}

.token.bold {
	font-weight: bold;
}

.token.boolean {
	color: var(--neon-bunny-boolean);
}

.token.builtin {
	color: var(--neon-bunny-builtin);
}

.token.cdata {
	color: var(--neon-bunny-cdata);
	font-style: italic;
}

.token.char {
	color: var(--neon-bunny-char);
}

.token.class-name {
	color: var(--neon-bunny-class-name);
}

.token.constant {
	color: var(--neon-bunny-constant);
}

.token.comment {
	color: var(--neon-bunny-comment);
	font-style: italic;
}

.token.deleted {
	color: var(--neon-bunny-deleted);
}

.token.entity {
	color: var(--neon-bunny-entity);
}

.token.function {
	color: var(--neon-bunny-function);
}

.token.important {
	color: var(--neon-bunny-important);
	font-style: italic;
}

.token.inserted {
	color: var(--neon-bunny-inserted);
}

.token.italic {
	font-style: italic;
}

.token.keyword {
	color: var(--neon-bunny-keyword);
}

.namespace {
	color: var(--neon-bunny-namespace);
}

.token.number {
	color: var(--neon-bunny-number);
}

.token.operator {
	color: var(--neon-bunny-operator);
}

.token.prolog {
	color: var(--neon-bunny-prolog);
	font-style: italic;
}

.token.property {
	color: var(--neon-bunny-property);
}

.token.punctuation {
	color: var(--neon-bunny-punctuation);
}

.token.regex {
	color: var(--neon-bunny-regex);
}

.token.string {
	color: var(--neon-bunny-string);
}

.token.symbol {
	color: var(--neon-bunny-symbol);
}

.token.tag {
	color: var(--neon-bunny-tag);
}

.token.url {
	color: var(--neon-bunny-url);
	text-decoration: underline;
}

.token.variable {
	color: var(--neon-bunny-variable);
}

/* -------------------------------------------------- HTML */
.language-html .token.attr-name {
	color: var(--neon-bunny-html-attr-name);
}

.language-html .token.attr-value {
	color: var(--neon-bunny-html-attr-value);
}

.language-html .token.attr-value .token.punctuation {
	color: var(--neon-bunny-html-attr-value-punctuation);
}

/* -------------------------------------------------- CSS */
.language-css {
	color: var(--neon-bunny-css) !important;
}

.language-css .token.atrule {
	color: var(--neon-bunny-css-atrule);
}

.language-css .token.atrule .token.rule {
	color: var(--neon-bunny-css-atrule-rule);
}

.language-css .token.function {
	color: var(--neon-bunny-css-function);
}

.language-css .token.property {
	color: var(--neon-bunny-css-property);
}

.language-css .token.punctuation {
	color: var(--neon-bunny-css-punctuation);
}

.language-css .token.selector {
	color: var(--neon-bunny-css-selector);
}

.language-css .token.string,
.style .token.string {
	color: var(--neon-bunny-css-string);
	font-style: italic;
}

/* -------------------------------------------------- JavaScript */
.language-javascript,
.language-js {
	color: var(--neon-bunny-js) !important;
	font-style: italic;
}

.language-javascript span,
.language-js span {
	font-style: normal;
}

.language-javascript .token.keyword,
.language-js .token.keyword {
	color: var(--neon-bunny-js-keyword);
}

.language-javascript .token.literal-property.property,
.language-js .token.literal-property.property {
	color: var(--neon-bunny-js-literal-property);
	font-style: italic;
}

.language-javascript .token.operator,
.language-js .token.operator {
	color: var(--neon-bunny-js-operator);
	font-style: italic;
}

.language-javascript .token.punctuation,
.language-js .token.punctuation {
	color: var(--neon-bunny-js-punctuation);
}

.language-javascript .token.template-string .token.string,
.language-js .token.template-string .token.string {
	color: var(--neon-bunny-js-template-string-string);
}

/* -------------------------------------------------- PHP */
.language-php .token.boolean {
	color: var(--neon-bunny-boolean);
}

.language-php .token.class-name {
	color: var(--neon-bunny-php-class-name);
}

.language-php .token.class-name-definition.class-name {
	color: var(--neon-bunny-php-class-name-definition-class-name);
}

.language-php .token.class-name.return-type {
	color: var(--neon-bunny-php-class-name-return-type);
	font-style: italic;
}

.language-php .token.function {
	color: var(--neon-bunny-php-function);
}

.language-php .token.keyword {
	color: var(--neon-bunny-php-keyword);
}

.language-php .token.keyword.type-hint {
	color: var(--neon-bunny-php-keyword-type-hint);
	font-style: italic;
}

.language-php .token.operator {
	color: var(--neon-bunny-php-operator);
}

.language-php .token.package {
	color: var(--neon-bunny-php-package);
}

.language-php .token.property {
	color: var(--neon-bunny-php-property);
}

.language-php .token.punctuation {
	color: var(--neon-bunny-php-punctuation);
}

.language-php .token.string.double-quoted-string {
	color: var(--neon-bunny-php-double-quote-string);
}

.language-php .token.string.single-quoted-string {
	color: var(--neon-bunny-php-single-quote-string);
}

.language-php .token.variable {
	color: var(--neon-bunny-php-variable);
}
`,vm=`/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	/* This background color was intended by the author of this theme. */
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`,km=`/**
 * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);
 * @author Tim  Shedor
 */

code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	position: relative;
	margin: .5em 0;
	overflow: visible;
	padding: 1px;
}

pre[class*="language-"] > code {
	position: relative;
	z-index: 1;
	border-left: 10px solid #358ccb;
	box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;
	background-color: #fdfdfd;
	background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
	background-size: 3em 3em;
	background-origin: content-box;
	background-attachment: local;
}

code[class*="language-"] {
	max-height: inherit;
	height: inherit;
	padding: 0 1em;
	display: block;
	overflow: auto;
}

/* Margin bottom to accommodate shadow */
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background-color: #fdfdfd;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	margin-bottom: 1em;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	position: relative;
	padding: .2em;
	border-radius: 0.3em;
	color: #c92c2c;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: inline;
	white-space: normal;
}

pre[class*="language-"]:before,
pre[class*="language-"]:after {
	content: '';
	display: block;
	position: absolute;
	bottom: 0.75em;
	left: 0.18em;
	width: 40%;
	height: 20%;
	max-height: 13em;
	box-shadow: 0px 13px 8px #979797;
	-webkit-transform: rotate(-2deg);
	-moz-transform: rotate(-2deg);
	-ms-transform: rotate(-2deg);
	-o-transform: rotate(-2deg);
	transform: rotate(-2deg);
}

pre[class*="language-"]:after {
	right: 0.75em;
	left: auto;
	-webkit-transform: rotate(2deg);
	-moz-transform: rotate(2deg);
	-ms-transform: rotate(2deg);
	-o-transform: rotate(2deg);
	transform: rotate(2deg);
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #7D8B99;
}

.token.punctuation {
	color: #5F6364;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted {
	color: #c92c2c;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.function,
.token.builtin,
.token.inserted {
	color: #2f9c0a;
}

.token.operator,
.token.entity,
.token.url,
.token.variable {
	color: #a67f59;
	background: rgba(255, 255, 255, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.class-name {
	color: #1990b8;
}

.token.regex,
.token.important {
	color: #e90;
}

.language-css .token.string,
.style .token.string {
	color: #a67f59;
	background: rgba(255, 255, 255, 0.5);
}

.token.important {
	font-weight: normal;
}

.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.namespace {
	opacity: .7;
}

@media screen and (max-width: 767px) {
	pre[class*="language-"]:before,
	pre[class*="language-"]:after {
		bottom: 14px;
		box-shadow: none;
	}

}

/* Plugin styles: Line Numbers */
pre[class*="language-"].line-numbers.line-numbers {
	padding-left: 0;
}

pre[class*="language-"].line-numbers.line-numbers code {
	padding-left: 3.8em;
}

pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows {
	left: 0;
}

/* Plugin styles: Line Highlight */
pre[class*="language-"][data-line] {
	padding-top: 0;
	padding-bottom: 0;
	padding-left: 0;
}
pre[data-line] code {
	position: relative;
	padding-left: 4em;
}
pre .line-highlight {
	margin-top: 0;
}
`,wm=`/**
 * prism.js Dark theme for JavaScript, CSS and HTML
 * Based on the slides of the talk “/Reg(exp){2}lained/”
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	color: white;
	background: none;
	text-shadow: 0 -.1em .2em black;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

pre[class*="language-"],
:not(pre) > code[class*="language-"] {
	background: hsl(30, 20%, 25%);
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border: .3em solid hsl(30, 20%, 40%);
	border-radius: .5em;
	box-shadow: 1px 1px .5em black inset;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .15em .2em .05em;
	border-radius: .3em;
	border: .13em solid hsl(30, 20%, 40%);
	box-shadow: 1px 1px .3em -.1em black inset;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: hsl(30, 20%, 50%);
}

.token.punctuation {
	opacity: .7;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
	color: hsl(350, 40%, 70%);
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: hsl(75, 70%, 60%);
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: hsl(40, 90%, 60%);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: hsl(350, 40%, 70%);
}

.token.regex,
.token.important {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.deleted {
	color: red;
}
`,_m=`/**
 * prism.js Funky theme
 * Based on “Polyfilling the gaps” talk slides http://lea.verou.me/polyfilling-the-gaps/
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: .4em .8em;
	margin: .5em 0;
	overflow: auto;
	background: url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');
	background-size: 1em 1em;
}

code[class*="language-"] {
	background: black;
	color: white;
	box-shadow: -.3em 0 0 .3em black, .3em 0 0 .3em black;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .2em;
	border-radius: .3em;
	box-shadow: none;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #aaa;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
	color: #0cf;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
	color: yellow;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.token.variable,
.token.inserted {
	color: yellowgreen;
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: deeppink;
}

.token.regex,
.token.important {
	color: orange;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.deleted {
	color: red;
}

/* Plugin styles: Diff Highlight */
pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix),
pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix) {
	background-color: rgba(255, 0, 0, .3);
	display: inline;
}

pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix),
pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix) {
	background-color: rgba(0, 255, 128, .3);
	display: inline;
}
`,xm=`/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #8292a2;
}

.token.punctuation {
	color: #f8f8f2;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`,Cm=`/*
 Solarized Color Schemes originally by Ethan Schoonover
 http://ethanschoonover.com/solarized

 Ported for PrismJS by Hector Matos
 Website: https://krakendev.io
 Twitter Handle: https://twitter.com/allonsykraken)
*/

/*
SOLARIZED HEX
--------- -------
base03    #002b36
base02    #073642
base01    #586e75
base00    #657b83
base0     #839496
base1     #93a1a1
base2     #eee8d5
base3     #fdf6e3
yellow    #b58900
orange    #cb4b16
red       #dc322f
magenta   #d33682
violet    #6c71c4
blue      #268bd2
cyan      #2aa198
green     #859900
*/

code[class*="language-"],
pre[class*="language-"] {
	color: #657b83; /* base00 */
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;

	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	background: #073642; /* base02 */
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	background: #073642; /* base02 */
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background-color: #fdf6e3; /* base3 */
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #93a1a1; /* base1 */
}

.token.punctuation {
	color: #586e75; /* base01 */
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #268bd2; /* blue */
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.url,
.token.inserted {
	color: #2aa198; /* cyan */
}

.token.entity {
	color: #657b83; /* base00 */
	background: #eee8d5; /* base2 */
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #859900; /* green */
}

.token.function,
.token.class-name {
	color: #b58900; /* yellow */
}

.token.regex,
.token.important,
.token.variable {
	color: #cb4b16; /* orange */
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`,Am=`/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #ccc;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;

}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #999;
}

.token.punctuation {
	color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
	color: #e2777a;
}

.token.function-name {
	color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
	color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
	color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
	color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
	color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
	color: #67cdcc;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.inserted {
	color: green;
}
`,Sm=`/**
 * prism.js Twilight theme
 * Based (more or less) on the Twilight theme originally of Textmate fame.
 * @author Remy Bach
 */
code[class*="language-"],
pre[class*="language-"] {
	color: white;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	text-shadow: 0 -.1em .2em black;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"],
:not(pre) > code[class*="language-"] {
	background: hsl(0, 0%, 8%); /* #141414 */
}

/* Code blocks */
pre[class*="language-"] {
	border-radius: .5em;
	border: .3em solid hsl(0, 0%, 33%); /* #282A2B */
	box-shadow: 1px 1px .5em black inset;
	margin: .5em 0;
	overflow: auto;
	padding: 1em;
}

pre[class*="language-"]::-moz-selection {
	/* Firefox */
	background: hsl(200, 4%, 16%); /* #282A2B */
}

pre[class*="language-"]::selection {
	/* Safari */
	background: hsl(200, 4%, 16%); /* #282A2B */
}

/* Text Selection colour */
pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	border-radius: .3em;
	border: .13em solid hsl(0, 0%, 33%); /* #545454 */
	box-shadow: 1px 1px .3em -.1em black inset;
	padding: .15em .2em .05em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: hsl(0, 0%, 47%); /* #777777 */
}

.token.punctuation {
	opacity: .7;
}

.token.namespace {
	opacity: .7;
}

.token.tag,
.token.boolean,
.token.number,
.token.deleted {
	color: hsl(14, 58%, 55%); /* #CF6A4C */
}

.token.keyword,
.token.property,
.token.selector,
.token.constant,
.token.symbol,
.token.builtin {
	color: hsl(53, 89%, 79%); /* #F9EE98 */
}

.token.attr-name,
.token.attr-value,
.token.string,
.token.char,
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable,
.token.inserted {
	color: hsl(76, 21%, 52%); /* #8F9D6A */
}

.token.atrule {
	color: hsl(218, 22%, 55%); /* #7587A6 */
}

.token.regex,
.token.important {
	color: hsl(42, 75%, 65%); /* #E9C062 */
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

/* Markup */
.language-markup .token.tag,
.language-markup .token.attr-name,
.language-markup .token.punctuation {
	color: hsl(33, 33%, 52%); /* #AC885B */
}

/* Make the tokens sit above the line highlight so the colours don't look faded. */
.token {
	position: relative;
	z-index: 1;
}

.line-highlight.line-highlight {
	background: hsla(0, 0%, 33%, 0.25); /* #545454 */
	background: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
	border-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */
	border-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */
	margin-top: 0.75em; /* Same as .prism’s padding-top */
	z-index: 0;
}

.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	background-color: hsl(215, 15%, 59%); /* #8794A6 */
	color: hsl(24, 20%, 95%); /* #F5F2F0 */
}
`;var ma={},Tm={get exports(){return ma},set exports(e){ma=e}};(function(e,n){(function(t,a){var o="1.0.34",r="",s="?",i="function",l="undefined",u="object",f="string",v="major",m="model",k="name",w="type",h="vendor",_="version",A="architecture",b="console",d="mobile",y="tablet",C="smarttv",S="wearable",N="embedded",G=350,B="Amazon",ne="Apple",le="ASUS",Te="BlackBerry",Fe="Browser",qe="Chrome",un="Edge",be="Firefox",oe="Google",J="Huawei",fe="LG",$e="Microsoft",Ee="Motorola",se="Opera",X="Samsung",ce="Sharp",je="Sony",he="Xiaomi",Re="Zebra",fn="Facebook",Ye="Chromium OS",nn="Mac OS",tn=function(I,U){var D={};for(var Y in I)U[Y]&&U[Y].length%2===0?D[Y]=U[Y].concat(I[Y]):D[Y]=I[Y];return D},p=function(I){for(var U={},D=0;D<I.length;D++)U[I[D].toUpperCase()]=I[D];return U},g=function(I,U){return typeof I===f?x(U).indexOf(x(I))!==-1:!1},x=function(I){return I.toLowerCase()},$=function(I){return typeof I===f?I.replace(/[^\d\.]/g,r).split(".")[0]:a},T=function(I,U){if(typeof I===f)return I=I.replace(/^\s\s*/,r),typeof U===l?I:I.substring(0,G)},P=function(I,U){for(var D=0,Y,ie,ve,R,kn,Ie;D<U.length&&!kn;){var Yn=U[D],Me=U[D+1];for(Y=ie=0;Y<Yn.length&&!kn&&Yn[Y];)if(kn=Yn[Y++].exec(I),kn)for(ve=0;ve<Me.length;ve++)Ie=kn[++ie],R=Me[ve],typeof R===u&&R.length>0?R.length===2?typeof R[1]==i?this[R[0]]=R[1].call(this,Ie):this[R[0]]=R[1]:R.length===3?typeof R[1]===i&&!(R[1].exec&&R[1].test)?this[R[0]]=Ie?R[1].call(this,Ie,R[2]):a:this[R[0]]=Ie?Ie.replace(R[1],R[2]):a:R.length===4&&(this[R[0]]=Ie?R[3].call(this,Ie.replace(R[1],R[2])):a):this[R]=Ie||a;D+=2}},M=function(I,U){for(var D in U)if(typeof U[D]===u&&U[D].length>0){for(var Y=0;Y<U[D].length;Y++)if(g(U[D][Y],I))return D===s?a:D}else if(g(U[D],I))return D===s?a:D;return I},F={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},j={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},O={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[_,[k,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[_,[k,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[k,_],[/opios[\/ ]+([\w\.]+)/i],[_,[k,se+" Mini"]],[/\bopr\/([\w\.]+)/i],[_,[k,se]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[k,_],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[_,[k,"UC"+Fe]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[_,[k,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[_,[k,"WeChat"]],[/konqueror\/([\w\.]+)/i],[_,[k,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[_,[k,"IE"]],[/yabrowser\/([\w\.]+)/i],[_,[k,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[k,/(.+)/,"$1 Secure "+Fe],_],[/\bfocus\/([\w\.]+)/i],[_,[k,be+" Focus"]],[/\bopt\/([\w\.]+)/i],[_,[k,se+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[_,[k,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[_,[k,"Dolphin"]],[/coast\/([\w\.]+)/i],[_,[k,se+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[_,[k,"MIUI "+Fe]],[/fxios\/([-\w\.]+)/i],[_,[k,be]],[/\bqihu|(qi?ho?o?|360)browser/i],[[k,"360 "+Fe]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[k,/(.+)/,"$1 "+Fe],_],[/(comodo_dragon)\/([\w\.]+)/i],[[k,/_/g," "],_],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[k,_],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[k],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[k,fn],_],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[k,_],[/\bgsa\/([\w\.]+) .*safari\//i],[_,[k,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[_,[k,qe+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[k,qe+" WebView"],_],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[_,[k,"Android "+Fe]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[k,_],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[_,[k,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[_,k],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[k,[_,M,F]],[/(webkit|khtml)\/([\w\.]+)/i],[k,_],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[k,"Netscape"],_],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[_,[k,be+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[k,_],[/(cobalt)\/([\w\.]+)/i],[k,[_,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[A,"amd64"]],[/(ia32(?=;))/i],[[A,x]],[/((?:i[346]|x)86)[;\)]/i],[[A,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[A,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[A,"armhf"]],[/windows (ce|mobile); ppc;/i],[[A,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[A,/ower/,r,x]],[/(sun4\w)[;\)]/i],[[A,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[A,x]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[m,[h,X],[w,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[m,[h,X],[w,d]],[/\((ip(?:hone|od)[\w ]*);/i],[m,[h,ne],[w,d]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[m,[h,ne],[w,y]],[/(macintosh);/i],[m,[h,ne]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[m,[h,ce],[w,d]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[m,[h,J],[w,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[m,[h,J],[w,d]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[m,/_/g," "],[h,he],[w,d]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[m,/_/g," "],[h,he],[w,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[m,[h,"OPPO"],[w,d]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[m,[h,"Vivo"],[w,d]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[m,[h,"Realme"],[w,d]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[m,[h,Ee],[w,d]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[m,[h,Ee],[w,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[m,[h,fe],[w,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[m,[h,fe],[w,d]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[m,[h,"Lenovo"],[w,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[m,/_/g," "],[h,"Nokia"],[w,d]],[/(pixel c)\b/i],[m,[h,oe],[w,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[m,[h,oe],[w,d]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[m,[h,je],[w,d]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[m,"Xperia Tablet"],[h,je],[w,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[m,[h,"OnePlus"],[w,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[m,[h,B],[w,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[m,/(.+)/g,"Fire Phone $1"],[h,B],[w,d]],[/(playbook);[-\w\),; ]+(rim)/i],[m,h,[w,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[m,[h,Te],[w,d]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[m,[h,le],[w,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[m,[h,le],[w,d]],[/(nexus 9)/i],[m,[h,"HTC"],[w,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[m,/_/g," "],[w,d]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[m,[h,"Acer"],[w,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[m,[h,"Meizu"],[w,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,m,[w,d]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,m,[w,y]],[/(surface duo)/i],[m,[h,$e],[w,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[m,[h,"Fairphone"],[w,d]],[/(u304aa)/i],[m,[h,"AT&T"],[w,d]],[/\bsie-(\w*)/i],[m,[h,"Siemens"],[w,d]],[/\b(rct\w+) b/i],[m,[h,"RCA"],[w,y]],[/\b(venue[\d ]{2,7}) b/i],[m,[h,"Dell"],[w,y]],[/\b(q(?:mv|ta)\w+) b/i],[m,[h,"Verizon"],[w,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[m,[h,"Barnes & Noble"],[w,y]],[/\b(tm\d{3}\w+) b/i],[m,[h,"NuVision"],[w,y]],[/\b(k88) b/i],[m,[h,"ZTE"],[w,y]],[/\b(nx\d{3}j) b/i],[m,[h,"ZTE"],[w,d]],[/\b(gen\d{3}) b.+49h/i],[m,[h,"Swiss"],[w,d]],[/\b(zur\d{3}) b/i],[m,[h,"Swiss"],[w,y]],[/\b((zeki)?tb.*\b) b/i],[m,[h,"Zeki"],[w,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],m,[w,y]],[/\b(ns-?\w{0,9}) b/i],[m,[h,"Insignia"],[w,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[m,[h,"NextBook"],[w,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],m,[w,d]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],m,[w,d]],[/\b(ph-1) /i],[m,[h,"Essential"],[w,d]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[m,[h,"Envizen"],[w,y]],[/\b(trio[-\w\. ]+) b/i],[m,[h,"MachSpeed"],[w,y]],[/\btu_(1491) b/i],[m,[h,"Rotor"],[w,y]],[/(shield[\w ]+) b/i],[m,[h,"Nvidia"],[w,y]],[/(sprint) (\w+)/i],[h,m,[w,d]],[/(kin\.[onetw]{3})/i],[[m,/\./g," "],[h,$e],[w,d]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[m,[h,Re],[w,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[m,[h,Re],[w,d]],[/smart-tv.+(samsung)/i],[h,[w,C]],[/hbbtv.+maple;(\d+)/i],[[m,/^/,"SmartTV"],[h,X],[w,C]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,fe],[w,C]],[/(apple) ?tv/i],[h,[m,ne+" TV"],[w,C]],[/crkey/i],[[m,qe+"cast"],[h,oe],[w,C]],[/droid.+aft(\w)( bui|\))/i],[m,[h,B],[w,C]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[m,[h,ce],[w,C]],[/(bravia[\w ]+)( bui|\))/i],[m,[h,je],[w,C]],[/(mitv-\w{5}) bui/i],[m,[h,he],[w,C]],[/Hbbtv.*(technisat) (.*);/i],[h,m,[w,C]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,T],[m,T],[w,C]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,C]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,m,[w,b]],[/droid.+; (shield) bui/i],[m,[h,"Nvidia"],[w,b]],[/(playstation [345portablevi]+)/i],[m,[h,je],[w,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[m,[h,$e],[w,b]],[/((pebble))app/i],[h,m,[w,S]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[m,[h,ne],[w,S]],[/droid.+; (glass) \d/i],[m,[h,oe],[w,S]],[/droid.+; (wt63?0{2,3})\)/i],[m,[h,Re],[w,S]],[/(quest( 2| pro)?)/i],[m,[h,fn],[w,S]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[w,N]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[m,[w,d]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[m,[w,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,d]],[/(android[-\w\. ]{0,9});.+buil/i],[m,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[_,[k,un+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[_,[k,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[k,_],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[_,k]],os:[[/microsoft (windows) (vista|xp)/i],[k,_],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[k,[_,M,j]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[k,"Windows"],[_,M,j]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[_,/_/g,"."],[k,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[k,nn],[_,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[_,k],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[k,_],[/\(bb(10);/i],[_,[k,Te]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[_,[k,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[_,[k,be+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[_,[k,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[_,[k,"watchOS"]],[/crkey\/([\d\.]+)/i],[_,[k,qe+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[k,Ye],_],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[k,_],[/(sunos) ?([\w\.\d]*)/i],[[k,"Solaris"],_],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[k,_]]},q=function(I,U){if(typeof I===u&&(U=I,I=a),!(this instanceof q))return new q(I,U).getResult();var D=typeof t!==l&&t.navigator?t.navigator:a,Y=I||(D&&D.userAgent?D.userAgent:r),ie=D&&D.userAgentData?D.userAgentData:a,ve=U?tn(O,U):O;return this.getBrowser=function(){var R={};return R[k]=a,R[_]=a,P.call(R,Y,ve.browser),R[v]=$(R[_]),D&&D.brave&&typeof D.brave.isBrave==i&&(R[k]="Brave"),R},this.getCPU=function(){var R={};return R[A]=a,P.call(R,Y,ve.cpu),R},this.getDevice=function(){var R={};return R[h]=a,R[m]=a,R[w]=a,P.call(R,Y,ve.device),!R[w]&&ie&&ie.mobile&&(R[w]=d),R[m]=="Macintosh"&&D&&typeof D.standalone!==l&&D.maxTouchPoints&&D.maxTouchPoints>2&&(R[m]="iPad",R[w]=y),R},this.getEngine=function(){var R={};return R[k]=a,R[_]=a,P.call(R,Y,ve.engine),R},this.getOS=function(){var R={};return R[k]=a,R[_]=a,P.call(R,Y,ve.os),!R[k]&&ie&&ie.platform!="Unknown"&&(R[k]=ie.platform.replace(/chrome os/i,Ye).replace(/macos/i,nn)),R},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return Y},this.setUA=function(R){return Y=typeof R===f&&R.length>G?T(R,G):R,this},this.setUA(Y),this};q.VERSION=o,q.BROWSER=p([k,_,v]),q.CPU=p([A]),q.DEVICE=p([m,h,w,b,d,C,y,S,N]),q.ENGINE=q.OS=p([k,_]),e.exports&&(n=e.exports=q),n.UAParser=q;var L=typeof t!==l&&(t.jQuery||t.Zepto);if(L&&!L.ua){var V=new q;L.ua=V.getResult(),L.ua.get=function(){return V.getUA()},L.ua.set=function(I){V.setUA(I);var U=V.getResult();for(var D in U)L.ua[D]=U[D]}}})(typeof window=="object"?window:so)})(Tm,ma);const $m=ma;const Em={name:"StatusIcons",props:{icon:{type:String,required:!0}},setup(e){return{props:e}}},Ho=e=>(zo("data-v-e6235730"),e=e(),No(),e),Om=Ho(()=>c("path",{d:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"},null,-1)),Pm=[Om],Fm=Ho(()=>c("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1)),jm=[Fm],Im=Ho(()=>c("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"},null,-1)),Mm=[Im];function zm(e,n,t,a,o,r){return t.icon==="copy"?(K(),Z("svg",oa({key:0},e.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),Pm,16)):t.icon==="success"?(K(),Z("svg",oa({key:1},e.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),jm,16)):t.icon==="failed"?(K(),Z("svg",oa({key:2},e.$attrs,{viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"}),Mm,16)):Cn("",!0)}const zr=ja(Em,[["render",zm],["__scopeId","data-v-e6235730"]]),Nm={class:"v-code-block--button-copy"},Rm={class:"v-code-block--button-run"},Bm={class:"v-code-block--code"},Lm=["innerHTML"],Uo=ut({__name:"CodeBlock",props:{browserWindow:{type:Boolean,required:!1,default:!1},code:{type:[Object,Array,String,Number],required:!0},codeBlockRadius:{type:String,required:!1,default:"0.5rem"},copyButton:{type:Boolean,required:!1,default:!0},copyIcons:{type:Boolean,required:!1,default:!0},copyTab:{type:Boolean,required:!1,default:!0},copyFailedText:{type:String,required:!1,default:"Copy failed!"},copyText:{type:String,required:!1,default:"Copy Code"},copySuccessText:{type:String,required:!1,default:"Copied!"},floatingTabs:{type:Boolean,required:!1,default:!0},height:{type:[String,Number],required:!1,default:"auto"},indent:{type:Number,required:!1,default:2},label:{type:String,required:!1,default:""},lang:{type:String,required:!1,default:"javascript"},maxHeight:{type:[String,Number],required:!1,default:"auto"},persistentCopyButton:{type:Boolean,required:!1,default:!1},runTab:{type:Boolean,required:!1,default:!1},runText:{type:String,required:!1,default:"Run"},tabGap:{type:String,required:!1,default:"0.25rem"},tabs:{type:Boolean,required:!1,default:!1},theme:{type:[String,Boolean],required:!1,default:"neon-bunny"}},emits:["run","update:copy-status"],setup(e,{emit:n}){const t=e,a=Object.assign({"./themes/neon-bunny-carrot.css":hm}),o=Object.assign({"./themes/neon-bunny.css":ym}),r=Object.assign({"/node_modules/prismjs/themes/prism.css":vm}),s=Object.assign({"/node_modules/prismjs/themes/prism-coy.css":km}),i=Object.assign({"/node_modules/prismjs/themes/prism-dark.css":wm}),l=Object.assign({"/node_modules/prismjs/themes/prism-funky.css":_m}),u=Object.assign({"/node_modules/prismjs/themes/prism-okaidia.css":xm}),f=Object.assign({"/node_modules/prismjs/themes/prism-solarizedlight.css":Cm}),v=Object.assign({"/node_modules/prismjs/themes/prism-tomorrow.css":Am}),m=Object.assign({"/node_modules/prismjs/themes/prism-twilight.css":Sm}),k=zc(),w=te("codeBlockGlobalOptions"),h=Oe(""),_=Oe(null),A=Oe(!1),b=Oe("copy"),d=Oe(!1),y=Oe(""),C="v-code-block--theme",S=Oe(""),N=ke(()=>d.value?"v-code-block--mobile":""),G=ke(()=>({width:S.value==="coy"?"100%":""})),B=ke(()=>({"v-code-block--code-copy-button":!0,"v-code-block--code-copy-button-mobile":d.value,["v-code-block--code-copy-button-persist"]:t.persistentCopyButton,[`v-code-block--code-copy-button-status-${b.value}`]:!0})),ne=ke(()=>({bottom:t.floatingTabs?"1px":"0",gap:J(t.tabGap)})),le=ke(()=>{const X=S.value===""||S.value==="prism"?"default":S.value;return{"v-code-block--me-1":!0,[`v-code-block--tab-${X}-icon`]:!0,[`v-code-block--button-copy-icon-status-${b.value}`]:!0,[`v-code-block--tab-${X}-icon-status-${b.value}`]:!0}}),Te=ke(()=>d.value?"v-code-block--label-mobile":""),Fe=ke(()=>{const X=t.codeBlockRadius;let ce=`${X} 0 ${X} ${X}`;(!t.tabs||!t.copyTab&&!t.runTab)&&(ce=X);const je=S.value!=="funky"?"flex":"block";return{borderRadius:ce,height:J(t.height),maxHeight:J(t.maxHeight),display:je}}),qe=ke(()=>(oe(),Mr.highlight(_.value,Mr.languages[t.lang],t.lang))),un=ke(()=>({[`v-code-block--tab-${S.value===""||S.value==="prism"?"default":S.value}`]:!0})),be=ke(()=>({gap:J(t.tabGap)}));gt(t,()=>{t.theme&&(S.value=t.theme,$e()),t.copyText&&(h.value=t.copyText),t.runText&&(y.value=t.runText)}),Hs(()=>{h.value=t.copyText,y.value=t.runText}),Us(()=>{S.value=(w==null?void 0:w.theme)||t.theme,$e(),Ee()});function oe(){if(t.lang==="json"){const X=t.code.toString();_.value=JSON.stringify(JSON.parse(X),null,t.indent);return}_.value=t.code}function J(X,ce="px"){if(!(X==null||X===""))return+X?`${Number(X)}${ce}`:String(X)}function fe(){A.value||(A.value=!0,navigator.clipboard.writeText(_.value).then(()=>{h.value=t.copySuccessText,b.value="success",n("update:copy-status",b.value)},X=>{h.value=t.copyFailedText,b.value="failed",n("update:copy-status",b.value),console.error("Copy to clipboard failed: ",X)}),setTimeout(()=>{h.value=t.copyText,b.value="copy",n("update:copy-status",b.value),A.value=!1},3e3))}function $e(){let X=null;const ce=document.getElementById(C),je=document.getElementsByTagName("head")[0],he=document.createElement("style");switch(ce&&ce.remove(),S.value){case"neon-bunny":X=o;break;case"neon-bunny-carrot":X=a;break;case"coy":X=s;break;case"dark":X=i;break;case"funky":X=l;break;case"okaidia":X=u;break;case"solarizedlight":X=f;break;case"tomorrow":X=v;break;case"twilight":X=m;break;case"default":case"prism":X=r;break;default:X=r;break}const Re=Object.keys(X)[0];X=X[Re],he.setAttribute("type","text/css"),he.id=C,he.appendChild(document.createTextNode(X)),je.appendChild(he)}function Ee(){const ce=$m().device;d.value=ce.type==="mobile"}window.addEventListener("orientationchange",()=>{Ee()});function se(){n("run")}return(X,ce)=>(K(),Z("div",{class:we(["v-code-block v-code-block--mb-5",E(N)])},[e.label||e.tabs||E(k).label||E(k).tabs?(K(),Z("div",{key:0,class:"v-code-block--header",style:An(E(ne))},[c("div",{class:we(["v-code-block--label v-code-block--pb-1",E(Te)])},[E(k).label?La(X.$slots,"label",{key:0}):(K(),Z(ye,{key:1},[ge(Ce(t.label),1)],64))],2),c("div",{class:"v-code-block--tabs",style:An(E(be))},[E(k).tabs?La(X.$slots,"tabs",{key:0}):(K(),Z(ye,{key:1},[e.copyTab&&e.tabs?(K(),Z("div",{key:0,class:we(["v-code-block--tab",E(un)]),onClick:fe},[c("div",Nm,[e.copyIcons?(K(),fa(zr,{key:0,class:we(["v-code-block--button-copy-icon",E(le)]),icon:b.value},null,8,["class","icon"])):Cn("",!0),ge(" "+Ce(h.value),1)])],2)):Cn("",!0),e.runTab&&e.tabs&&!d.value?(K(),Z("div",{key:1,class:we(["v-code-block--tab",E(un)]),onClick:se},[c("div",Rm,Ce(y.value),1)],2)):Cn("",!0)],64))],4)],4)):Cn("",!0),c("div",Bm,[c("div",{class:we(["v-code-block--code-copy-button",E(B)]),onClick:fe},[E(k).copyButton?La(X.$slots,"copyButton",{key:0}):(K(),Z(ye,{key:1},[e.copyButton?(K(),fa(zr,{key:0,class:we(["v-code-block--button-copy-icon",E(le)]),icon:b.value},null,8,["class","icon"])):Cn("",!0)],64))],2),c("pre",{class:we(`language-${t.lang}`),style:An(E(Fe))},[ge(""),c("code",{class:we(`language-${t.lang} ${e.browserWindow?"v-code-block--code-browser":""}`),style:An(E(G)),innerHTML:E(qe)},null,14,Lm),ge(`
			`)],6)])],2))}});const Dm=(e,n)=>{const t={globalOptions:!0,...n};e.provide("codeBlockGlobalOptions",t),e.component("CodeBlock",Uo)};Uo.install=Dm;function Nr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Nr(Object(t),!0).forEach(function(a){Se(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nr(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function ba(e){return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ba(e)}function Hm(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Rr(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Um(e,n,t){return n&&Rr(e.prototype,n),t&&Rr(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function qo(e,n){return Wm(e)||Ym(e,n)||ci(e,n)||Gm()}function zt(e){return qm(e)||Vm(e)||ci(e)||Km()}function qm(e){if(Array.isArray(e))return lo(e)}function Wm(e){if(Array.isArray(e))return e}function Vm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ym(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],o=!0,r=!1,s,i;try{for(t=t.call(e);!(o=(s=t.next()).done)&&(a.push(s.value),!(n&&a.length===n));o=!0);}catch(l){r=!0,i=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(r)throw i}}return a}}function ci(e,n){if(e){if(typeof e=="string")return lo(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return lo(e,n)}}function lo(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Km(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Br=function(){},Wo={},ui={},fi=null,di={mark:Br,measure:Br};try{typeof window<"u"&&(Wo=window),typeof document<"u"&&(ui=document),typeof MutationObserver<"u"&&(fi=MutationObserver),typeof performance<"u"&&(di=performance)}catch{}var Jm=Wo.navigator||{},Lr=Jm.userAgent,Dr=Lr===void 0?"":Lr,On=Wo,me=ui,Hr=fi,Wt=di;On.document;var vn=!!me.documentElement&&!!me.head&&typeof me.addEventListener=="function"&&typeof me.createElement=="function",pi=~Dr.indexOf("MSIE")||~Dr.indexOf("Trident/"),Vt,Yt,Kt,Gt,Jt,bn="___FONT_AWESOME___",co=16,mi="fa",bi="svg-inline--fa",Wn="data-fa-i2svg",uo="data-fa-pseudo-element",Xm="data-fa-pseudo-element-pending",Vo="data-prefix",Yo="data-icon",Ur="fontawesome-i2svg",Zm="async",Qm=["HTML","HEAD","STYLE","SCRIPT"],gi=function(){try{return!0}catch{return!1}}(),pe="classic",_e="sharp",Ko=[pe,_e];function Nt(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[pe]}})}var Ot=Nt((Vt={},Se(Vt,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Se(Vt,_e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Vt)),Pt=Nt((Yt={},Se(Yt,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Se(Yt,_e,{solid:"fass",regular:"fasr"}),Yt)),Ft=Nt((Kt={},Se(Kt,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Se(Kt,_e,{fass:"fa-solid",fasr:"fa-regular"}),Kt)),eb=Nt((Gt={},Se(Gt,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Se(Gt,_e,{"fa-solid":"fass","fa-regular":"fasr"}),Gt)),nb=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,hi="fa-layers-text",tb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ab=Nt((Jt={},Se(Jt,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Se(Jt,_e,{900:"fass",400:"fasr"}),Jt)),yi=[1,2,3,4,5,6,7,8,9,10],ob=yi.concat([11,12,13,14,15,16,17,18,19,20]),rb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jt=new Set;Object.keys(Pt[pe]).map(jt.add.bind(jt));Object.keys(Pt[_e]).map(jt.add.bind(jt));var sb=[].concat(Ko,zt(jt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dn.GROUP,Dn.SWAP_OPACITY,Dn.PRIMARY,Dn.SECONDARY]).concat(yi.map(function(e){return"".concat(e,"x")})).concat(ob.map(function(e){return"w-".concat(e)})),kt=On.FontAwesomeConfig||{};function ib(e){var n=me.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function lb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(me&&typeof me.querySelector=="function"){var cb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cb.forEach(function(e){var n=qo(e,2),t=n[0],a=n[1],o=lb(ib(t));o!=null&&(kt[a]=o)})}var vi={styleDefault:"solid",familyDefault:"classic",cssPrefix:mi,replacementClass:bi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kt.familyPrefix&&(kt.cssPrefix=kt.familyPrefix);var st=H(H({},vi),kt);st.autoReplaceSvg||(st.observeMutations=!1);var W={};Object.keys(vi).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(t){st[e]=t,wt.forEach(function(a){return a(W)})},get:function(){return st[e]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(n){st.cssPrefix=n,wt.forEach(function(t){return t(W)})},get:function(){return st.cssPrefix}});On.FontAwesomeConfig=W;var wt=[];function ub(e){return wt.push(e),function(){wt.splice(wt.indexOf(e),1)}}var _n=co,ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fb(e){if(!(!e||!vn)){var n=me.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=me.head.childNodes,a=null,o=t.length-1;o>-1;o--){var r=t[o],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return me.head.insertBefore(n,a),e}}var db="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function It(){for(var e=12,n="";e-- >0;)n+=db[Math.random()*62|0];return n}function ft(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Go(e){return e.classList?ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ki(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pb(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(ki(e[t]),'" ')},"").trim()}function Ia(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Jo(e){return e.size!==ln.size||e.x!==ln.x||e.y!==ln.y||e.rotate!==ln.rotate||e.flipX||e.flipY}function mb(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,o={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),i="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(r," ").concat(s," ").concat(i)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:l,path:u}}function bb(e){var n=e.transform,t=e.width,a=t===void 0?co:t,o=e.height,r=o===void 0?co:o,s=e.startCentered,i=s===void 0?!1:s,l="";return i&&pi?l+="translate(".concat(n.x/_n-a/2,"em, ").concat(n.y/_n-r/2,"em) "):i?l+="translate(calc(-50% + ".concat(n.x/_n,"em), calc(-50% + ").concat(n.y/_n,"em)) "):l+="translate(".concat(n.x/_n,"em, ").concat(n.y/_n,"em) "),l+="scale(".concat(n.size/_n*(n.flipX?-1:1),", ").concat(n.size/_n*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var gb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wi(){var e=mi,n=bi,t=W.cssPrefix,a=W.replacementClass,o=gb;if(t!==e||a!==n){var r=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(n),"g");o=o.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(i,".".concat(a))}return o}var qr=!1;function qa(){W.autoAddCss&&!qr&&(fb(wi()),qr=!0)}var hb={mixout:function(){return{dom:{css:wi,insertCss:qa}}},hooks:function(){return{beforeDOMElementCreation:function(){qa()},beforeI2svg:function(){qa()}}}},gn=On||{};gn[bn]||(gn[bn]={});gn[bn].styles||(gn[bn].styles={});gn[bn].hooks||(gn[bn].hooks={});gn[bn].shims||(gn[bn].shims=[]);var Ze=gn[bn],_i=[],yb=function e(){me.removeEventListener("DOMContentLoaded",e),ga=1,_i.map(function(n){return n()})},ga=!1;vn&&(ga=(me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(me.readyState),ga||me.addEventListener("DOMContentLoaded",yb));function vb(e){vn&&(ga?setTimeout(e,0):_i.push(e))}function Rt(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,o=e.children,r=o===void 0?[]:o;return typeof e=="string"?ki(e):"<".concat(n," ").concat(pb(a),">").concat(r.map(Rt).join(""),"</").concat(n,">")}function Wr(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var kb=function(n,t){return function(a,o,r,s){return n.call(t,a,o,r,s)}},Wa=function(n,t,a,o){var r=Object.keys(n),s=r.length,i=o!==void 0?kb(t,o):t,l,u,f;for(a===void 0?(l=1,f=n[r[0]]):(l=0,f=a);l<s;l++)u=r[l],f=i(f,n[u],u,n);return f};function wb(e){for(var n=[],t=0,a=e.length;t<a;){var o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<a){var r=e.charCodeAt(t++);(r&64512)==56320?n.push(((o&1023)<<10)+(r&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}function fo(e){var n=wb(e);return n.length===1?n[0].toString(16):null}function _b(e,n){var t=e.length,a=e.charCodeAt(n),o;return a>=55296&&a<=56319&&t>n+1&&(o=e.charCodeAt(n+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function Vr(e){return Object.keys(e).reduce(function(n,t){var a=e[t],o=!!a.icon;return o?n[a.iconName]=a.icon:n[t]=a,n},{})}function po(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,o=a===void 0?!1:a,r=Vr(n);typeof Ze.hooks.addPack=="function"&&!o?Ze.hooks.addPack(e,Vr(n)):Ze.styles[e]=H(H({},Ze.styles[e]||{}),r),e==="fas"&&po("fa",n)}var Xt,Zt,Qt,Gn=Ze.styles,xb=Ze.shims,Cb=(Xt={},Se(Xt,pe,Object.values(Ft[pe])),Se(Xt,_e,Object.values(Ft[_e])),Xt),Xo=null,xi={},Ci={},Ai={},Si={},Ti={},Ab=(Zt={},Se(Zt,pe,Object.keys(Ot[pe])),Se(Zt,_e,Object.keys(Ot[_e])),Zt);function Sb(e){return~sb.indexOf(e)}function Tb(e,n){var t=n.split("-"),a=t[0],o=t.slice(1).join("-");return a===e&&o!==""&&!Sb(o)?o:null}var $i=function(){var n=function(r){return Wa(Gn,function(s,i,l){return s[l]=Wa(i,r,{}),s},{})};xi=n(function(o,r,s){if(r[3]&&(o[r[3]]=s),r[2]){var i=r[2].filter(function(l){return typeof l=="number"});i.forEach(function(l){o[l.toString(16)]=s})}return o}),Ci=n(function(o,r,s){if(o[s]=s,r[2]){var i=r[2].filter(function(l){return typeof l=="string"});i.forEach(function(l){o[l]=s})}return o}),Ti=n(function(o,r,s){var i=r[2];return o[s]=s,i.forEach(function(l){o[l]=s}),o});var t="far"in Gn||W.autoFetchSvg,a=Wa(xb,function(o,r){var s=r[0],i=r[1],l=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(o.names[s]={prefix:i,iconName:l}),typeof s=="number"&&(o.unicodes[s.toString(16)]={prefix:i,iconName:l}),o},{names:{},unicodes:{}});Ai=a.names,Si=a.unicodes,Xo=Ma(W.styleDefault,{family:W.familyDefault})};ub(function(e){Xo=Ma(e.styleDefault,{family:W.familyDefault})});$i();function Zo(e,n){return(xi[e]||{})[n]}function $b(e,n){return(Ci[e]||{})[n]}function Hn(e,n){return(Ti[e]||{})[n]}function Ei(e){return Ai[e]||{prefix:null,iconName:null}}function Eb(e){var n=Si[e],t=Zo("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Pn(){return Xo}var Qo=function(){return{prefix:null,iconName:null,rest:[]}};function Ma(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?pe:t,o=Ot[a][e],r=Pt[a][e]||Pt[a][o],s=e in Ze.styles?e:null;return r||s||null}var Yr=(Qt={},Se(Qt,pe,Object.keys(Ft[pe])),Se(Qt,_e,Object.keys(Ft[_e])),Qt);function za(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,o=a===void 0?!1:a,r=(n={},Se(n,pe,"".concat(W.cssPrefix,"-").concat(pe)),Se(n,_e,"".concat(W.cssPrefix,"-").concat(_e)),n),s=null,i=pe;(e.includes(r[pe])||e.some(function(u){return Yr[pe].includes(u)}))&&(i=pe),(e.includes(r[_e])||e.some(function(u){return Yr[_e].includes(u)}))&&(i=_e);var l=e.reduce(function(u,f){var v=Tb(W.cssPrefix,f);if(Gn[f]?(f=Cb[i].includes(f)?eb[i][f]:f,s=f,u.prefix=f):Ab[i].indexOf(f)>-1?(s=f,u.prefix=Ma(f,{family:i})):v?u.iconName=v:f!==W.replacementClass&&f!==r[pe]&&f!==r[_e]&&u.rest.push(f),!o&&u.prefix&&u.iconName){var m=s==="fa"?Ei(u.iconName):{},k=Hn(u.prefix,u.iconName);m.prefix&&(s=null),u.iconName=m.iconName||k||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!Gn.far&&Gn.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},Qo());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===_e&&(Gn.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=Hn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Pn()||"fas"),l}var Ob=function(){function e(){Hm(this,e),this.definitions={}}return Um(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];var s=o.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){t.definitions[i]=H(H({},t.definitions[i]||{}),s[i]),po(i,s[i]);var l=Ft[pe][i];l&&po(l,s[i]),$i()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var o=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(o).map(function(r){var s=o[r],i=s.prefix,l=s.iconName,u=s.icon,f=u[2];t[i]||(t[i]={}),f.length>0&&f.forEach(function(v){typeof v=="string"&&(t[i][v]=u)}),t[i][l]=u}),t}}]),e}(),Kr=[],Jn={},nt={},Pb=Object.keys(nt);function Fb(e,n){var t=n.mixoutsTo;return Kr=e,Jn={},Object.keys(nt).forEach(function(a){Pb.indexOf(a)===-1&&delete nt[a]}),Kr.forEach(function(a){var o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(function(s){typeof o[s]=="function"&&(t[s]=o[s]),ba(o[s])==="object"&&Object.keys(o[s]).forEach(function(i){t[s]||(t[s]={}),t[s][i]=o[s][i]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){Jn[s]||(Jn[s]=[]),Jn[s].push(r[s])})}a.provides&&a.provides(nt)}),t}function mo(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];var r=Jn[e]||[];return r.forEach(function(s){n=s.apply(null,[n].concat(a))}),n}function Vn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var o=Jn[e]||[];o.forEach(function(r){r.apply(null,t)})}function hn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return nt[e]?nt[e].apply(null,n):void 0}function bo(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Pn();if(n)return n=Hn(t,n)||n,Wr(Oi.definitions,t,n)||Wr(Ze.styles,t,n)}var Oi=new Ob,jb=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Vn("noAuto")},Ib={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vn?(Vn("beforeI2svg",n),hn("pseudoElements2svg",n),hn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,vb(function(){zb({autoReplaceSvgRoot:t}),Vn("watch",n)})}},Mb={icon:function(n){if(n===null)return null;if(ba(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Hn(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ma(n[0]);return{prefix:a,iconName:Hn(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(W.cssPrefix,"-"))>-1||n.match(nb))){var o=za(n.split(" "),{skipLookups:!0});return{prefix:o.prefix||Pn(),iconName:Hn(o.prefix,o.iconName)||o.iconName}}if(typeof n=="string"){var r=Pn();return{prefix:r,iconName:Hn(r,n)||n}}}},Ve={noAuto:jb,config:W,dom:Ib,parse:Mb,library:Oi,findIconDefinition:bo,toHtml:Rt},zb=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?me:t;(Object.keys(Ze.styles).length>0||W.autoFetchSvg)&&vn&&W.autoReplaceSvg&&Ve.dom.i2svg({node:a})};function Na(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Rt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(vn){var a=me.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Nb(e){var n=e.children,t=e.main,a=e.mask,o=e.attributes,r=e.styles,s=e.transform;if(Jo(s)&&t.found&&!a.found){var i=t.width,l=t.height,u={x:i/l/2,y:.5};o.style=Ia(H(H({},r),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:o,children:n}]}function Rb(e){var n=e.prefix,t=e.iconName,a=e.children,o=e.attributes,r=e.symbol,s=r===!0?"".concat(n,"-").concat(W.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},o),{},{id:s}),children:a}]}]}function er(e){var n=e.icons,t=n.main,a=n.mask,o=e.prefix,r=e.iconName,s=e.transform,i=e.symbol,l=e.title,u=e.maskId,f=e.titleId,v=e.extra,m=e.watchable,k=m===void 0?!1:m,w=a.found?a:t,h=w.width,_=w.height,A=o==="fak",b=[W.replacementClass,r?"".concat(W.cssPrefix,"-").concat(r):""].filter(function(B){return v.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(v.classes).join(" "),d={children:[],attributes:H(H({},v.attributes),{},{"data-prefix":o,"data-icon":r,class:b,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(_)})},y=A&&!~v.classes.indexOf("fa-fw")?{width:"".concat(h/_*16*.0625,"em")}:{};k&&(d.attributes[Wn]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(f||It())},children:[l]}),delete d.attributes.title);var C=H(H({},d),{},{prefix:o,iconName:r,main:t,mask:a,maskId:u,transform:s,symbol:i,styles:H(H({},y),v.styles)}),S=a.found&&t.found?hn("generateAbstractMask",C)||{children:[],attributes:{}}:hn("generateAbstractIcon",C)||{children:[],attributes:{}},N=S.children,G=S.attributes;return C.children=N,C.attributes=G,i?Rb(C):Nb(C)}function Gr(e){var n=e.content,t=e.width,a=e.height,o=e.transform,r=e.title,s=e.extra,i=e.watchable,l=i===void 0?!1:i,u=H(H(H({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});l&&(u[Wn]="");var f=H({},s.styles);Jo(o)&&(f.transform=bb({transform:o,startCentered:!0,width:t,height:a}),f["-webkit-transform"]=f.transform);var v=Ia(f);v.length>0&&(u.style=v);var m=[];return m.push({tag:"span",attributes:u,children:[n]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function Bb(e){var n=e.content,t=e.title,a=e.extra,o=H(H(H({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),r=Ia(a.styles);r.length>0&&(o.style=r);var s=[];return s.push({tag:"span",attributes:o,children:[n]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var Va=Ze.styles;function go(e){var n=e[0],t=e[1],a=e.slice(4),o=qo(a,1),r=o[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Dn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Dn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Dn.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:n,height:t,icon:s}}var Lb={found:!1,width:512,height:512};function Db(e,n){!gi&&!W.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function ho(e,n){var t=n;return n==="fa"&&W.styleDefault!==null&&(n=Pn()),new Promise(function(a,o){if(hn("missingIconAbstract"),t==="fa"){var r=Ei(e)||{};e=r.iconName||e,n=r.prefix||n}if(e&&n&&Va[n]&&Va[n][e]){var s=Va[n][e];return a(go(s))}Db(e,n),a(H(H({},Lb),{},{icon:W.showMissingIcons&&e?hn("missingIconAbstract")||{}:{}}))})}var Jr=function(){},yo=W.measurePerformance&&Wt&&Wt.mark&&Wt.measure?Wt:{mark:Jr,measure:Jr},mt='FA "6.3.0"',Hb=function(n){return yo.mark("".concat(mt," ").concat(n," begins")),function(){return Pi(n)}},Pi=function(n){yo.mark("".concat(mt," ").concat(n," ends")),yo.measure("".concat(mt," ").concat(n),"".concat(mt," ").concat(n," begins"),"".concat(mt," ").concat(n," ends"))},nr={begin:Hb,end:Pi},ra=function(){};function Xr(e){var n=e.getAttribute?e.getAttribute(Wn):null;return typeof n=="string"}function Ub(e){var n=e.getAttribute?e.getAttribute(Vo):null,t=e.getAttribute?e.getAttribute(Yo):null;return n&&t}function qb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function Wb(){if(W.autoReplaceSvg===!0)return sa.replace;var e=sa[W.autoReplaceSvg];return e||sa.replace}function Vb(e){return me.createElementNS("http://www.w3.org/2000/svg",e)}function Yb(e){return me.createElement(e)}function Fi(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Vb:Yb:t;if(typeof e=="string")return me.createTextNode(e);var o=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){o.setAttribute(s,e.attributes[s])});var r=e.children||[];return r.forEach(function(s){o.appendChild(Fi(s,{ceFn:a}))}),o}function Kb(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var sa={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(o){t.parentNode.insertBefore(Fi(o),t)}),t.getAttribute(Wn)===null&&W.keepOriginalSource){var a=me.createComment(Kb(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~Go(t).indexOf(W.replacementClass))return sa.replace(n);var o=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(i,l){return l===W.replacementClass||l.match(o)?i.toSvg.push(l):i.toNode.push(l),i},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(i){return Rt(i)}).join(`
`);t.setAttribute(Wn,""),t.innerHTML=s}};function Zr(e){e()}function ji(e,n){var t=typeof n=="function"?n:ra;if(e.length===0)t();else{var a=Zr;W.mutateApproach===Zm&&(a=On.requestAnimationFrame||Zr),a(function(){var o=Wb(),r=nr.begin("mutate");e.map(o),r(),t()})}}var tr=!1;function Ii(){tr=!0}function vo(){tr=!1}var ha=null;function Qr(e){if(Hr&&W.observeMutations){var n=e.treeCallback,t=n===void 0?ra:n,a=e.nodeCallback,o=a===void 0?ra:a,r=e.pseudoElementsCallback,s=r===void 0?ra:r,i=e.observeMutationsRoot,l=i===void 0?me:i;ha=new Hr(function(u){if(!tr){var f=Pn();ft(u).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Xr(v.addedNodes[0])&&(W.searchPseudoElements&&s(v.target),t(v.target)),v.type==="attributes"&&v.target.parentNode&&W.searchPseudoElements&&s(v.target.parentNode),v.type==="attributes"&&Xr(v.target)&&~rb.indexOf(v.attributeName))if(v.attributeName==="class"&&Ub(v.target)){var m=za(Go(v.target)),k=m.prefix,w=m.iconName;v.target.setAttribute(Vo,k||f),w&&v.target.setAttribute(Yo,w)}else qb(v.target)&&o(v.target)})}}),vn&&ha.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gb(){ha&&ha.disconnect()}function Jb(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,o){var r=o.split(":"),s=r[0],i=r.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),t}function Xb(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",o=za(Go(e));return o.prefix||(o.prefix=Pn()),n&&t&&(o.prefix=n,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=$b(o.prefix,e.innerText)||Zo(o.prefix,fo(e.innerText))),!o.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function Zb(e){var n=ft(e.attributes).reduce(function(o,r){return o.name!=="class"&&o.name!=="style"&&(o[r.name]=r.value),o},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return W.autoA11y&&(t?n["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(a||It()):(n["aria-hidden"]="true",n.focusable="false")),n}function Qb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function es(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Xb(e),a=t.iconName,o=t.prefix,r=t.rest,s=Zb(e),i=mo("parseNodeAttributes",{},e),l=n.styleParser?Jb(e):[];return H({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:s}},i)}var eg=Ze.styles;function Mi(e){var n=W.autoReplaceSvg==="nest"?es(e,{styleParser:!1}):es(e);return~n.extra.classes.indexOf(hi)?hn("generateLayersText",e,n):hn("generateSvgReplacementMutation",e,n)}var Fn=new Set;Ko.map(function(e){Fn.add("fa-".concat(e))});Object.keys(Ot[pe]).map(Fn.add.bind(Fn));Object.keys(Ot[_e]).map(Fn.add.bind(Fn));Fn=zt(Fn);function ns(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vn)return Promise.resolve();var t=me.documentElement.classList,a=function(v){return t.add("".concat(Ur,"-").concat(v))},o=function(v){return t.remove("".concat(Ur,"-").concat(v))},r=W.autoFetchSvg?Fn:Ko.map(function(f){return"fa-".concat(f)}).concat(Object.keys(eg));r.includes("fa")||r.push("fa");var s=[".".concat(hi,":not([").concat(Wn,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(Wn,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=ft(e.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),o("complete");else return Promise.resolve();var l=nr.begin("onTree"),u=i.reduce(function(f,v){try{var m=Mi(v);m&&f.push(m)}catch(k){gi||k.name==="MissingIcon"&&console.error(k)}return f},[]);return new Promise(function(f,v){Promise.all(u).then(function(m){ji(m,function(){a("active"),a("complete"),o("pending"),typeof n=="function"&&n(),l(),f()})}).catch(function(m){l(),v(m)})})}function ng(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mi(e).then(function(t){t&&ji([t],n)})}function tg(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:bo(n||{}),o=t.mask;return o&&(o=(o||{}).icon?o:bo(o||{})),e(a,H(H({},t),{},{mask:o}))}}var ag=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,o=a===void 0?ln:a,r=t.symbol,s=r===void 0?!1:r,i=t.mask,l=i===void 0?null:i,u=t.maskId,f=u===void 0?null:u,v=t.title,m=v===void 0?null:v,k=t.titleId,w=k===void 0?null:k,h=t.classes,_=h===void 0?[]:h,A=t.attributes,b=A===void 0?{}:A,d=t.styles,y=d===void 0?{}:d;if(n){var C=n.prefix,S=n.iconName,N=n.icon;return Na(H({type:"icon"},n),function(){return Vn("beforeDOMElementCreation",{iconDefinition:n,params:t}),W.autoA11y&&(m?b["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(w||It()):(b["aria-hidden"]="true",b.focusable="false")),er({icons:{main:go(N),mask:l?go(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:S,transform:H(H({},ln),o),symbol:s,title:m,maskId:f,titleId:w,extra:{attributes:b,styles:y,classes:_}})})}},og={mixout:function(){return{icon:tg(ag)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=ns,t.nodeCallback=ng,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,o=a===void 0?me:a,r=t.callback,s=r===void 0?function(){}:r;return ns(o,s)},n.generateSvgReplacementMutation=function(t,a){var o=a.iconName,r=a.title,s=a.titleId,i=a.prefix,l=a.transform,u=a.symbol,f=a.mask,v=a.maskId,m=a.extra;return new Promise(function(k,w){Promise.all([ho(o,i),f.iconName?ho(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var _=qo(h,2),A=_[0],b=_[1];k([t,er({icons:{main:A,mask:b},prefix:i,iconName:o,transform:l,symbol:u,maskId:v,title:r,titleId:s,extra:m,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(t){var a=t.children,o=t.attributes,r=t.main,s=t.transform,i=t.styles,l=Ia(i);l.length>0&&(o.style=l);var u;return Jo(s)&&(u=hn("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(u||r.icon),{children:a,attributes:o}}}},rg={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.classes,r=o===void 0?[]:o;return Na({type:"layer"},function(){Vn("beforeDOMElementCreation",{assembler:t,params:a});var s=[];return t(function(i){Array.isArray(i)?i.map(function(l){s=s.concat(l.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(zt(r)).join(" ")},children:s}]})}}}},sg={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.title,r=o===void 0?null:o,s=a.classes,i=s===void 0?[]:s,l=a.attributes,u=l===void 0?{}:l,f=a.styles,v=f===void 0?{}:f;return Na({type:"counter",content:t},function(){return Vn("beforeDOMElementCreation",{content:t,params:a}),Bb({content:t.toString(),title:r,extra:{attributes:u,styles:v,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(zt(i))}})})}}}},ig={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.transform,r=o===void 0?ln:o,s=a.title,i=s===void 0?null:s,l=a.classes,u=l===void 0?[]:l,f=a.attributes,v=f===void 0?{}:f,m=a.styles,k=m===void 0?{}:m;return Na({type:"text",content:t},function(){return Vn("beforeDOMElementCreation",{content:t,params:a}),Gr({content:t,transform:H(H({},ln),r),title:i,extra:{attributes:v,styles:k,classes:["".concat(W.cssPrefix,"-layers-text")].concat(zt(u))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var o=a.title,r=a.transform,s=a.extra,i=null,l=null;if(pi){var u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return W.autoA11y&&!o&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Gr({content:t.innerHTML,width:i,height:l,transform:r,title:o,extra:s,watchable:!0})])}}},lg=new RegExp('"',"ug"),ts=[1105920,1112319];function cg(e){var n=e.replace(lg,""),t=_b(n,0),a=t>=ts[0]&&t<=ts[1],o=n.length===2?n[0]===n[1]:!1;return{value:fo(o?n[0]:n),isSecondary:a||o}}function as(e,n){var t="".concat(Xm).concat(n.replace(":","-"));return new Promise(function(a,o){if(e.getAttribute(t)!==null)return a();var r=ft(e.children),s=r.filter(function(N){return N.getAttribute(uo)===n})[0],i=On.getComputedStyle(e,n),l=i.getPropertyValue("font-family").match(tb),u=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(s&&!l)return e.removeChild(s),a();if(l&&f!=="none"&&f!==""){var v=i.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?_e:pe,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pt[m][l[2].toLowerCase()]:ab[m][u],w=cg(v),h=w.value,_=w.isSecondary,A=l[0].startsWith("FontAwesome"),b=Zo(k,h),d=b;if(A){var y=Eb(h);y.iconName&&y.prefix&&(b=y.iconName,k=y.prefix)}if(b&&!_&&(!s||s.getAttribute(Vo)!==k||s.getAttribute(Yo)!==d)){e.setAttribute(t,d),s&&e.removeChild(s);var C=Qb(),S=C.extra;S.attributes[uo]=n,ho(b,k).then(function(N){var G=er(H(H({},C),{},{icons:{main:N,mask:Qo()},prefix:k,iconName:d,extra:S,watchable:!0})),B=me.createElement("svg");n==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=G.map(function(ne){return Rt(ne)}).join(`
`),e.removeAttribute(t),a()}).catch(o)}else a()}else a()})}function ug(e){return Promise.all([as(e,"::before"),as(e,"::after")])}function fg(e){return e.parentNode!==document.head&&!~Qm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(uo)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function os(e){if(vn)return new Promise(function(n,t){var a=ft(e.querySelectorAll("*")).filter(fg).map(ug),o=nr.begin("searchPseudoElements");Ii(),Promise.all(a).then(function(){o(),vo(),n()}).catch(function(){o(),vo(),t()})})}var dg={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=os,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,o=a===void 0?me:a;W.searchPseudoElements&&os(o)}}},rs=!1,pg={mixout:function(){return{dom:{unwatch:function(){Ii(),rs=!0}}}},hooks:function(){return{bootstrap:function(){Qr(mo("mutationObserverCallbacks",{}))},noAuto:function(){Gb()},watch:function(t){var a=t.observeMutationsRoot;rs?vo():Qr(mo("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ss=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,o){var r=o.toLowerCase().split("-"),s=r[0],i=r.slice(1).join("-");if(s&&i==="h")return a.flipX=!0,a;if(s&&i==="v")return a.flipY=!0,a;if(i=parseFloat(i),isNaN(i))return a;switch(s){case"grow":a.size=a.size+i;break;case"shrink":a.size=a.size-i;break;case"left":a.x=a.x-i;break;case"right":a.x=a.x+i;break;case"up":a.y=a.y-i;break;case"down":a.y=a.y+i;break;case"rotate":a.rotate=a.rotate+i;break}return a},t)},mg={mixout:function(){return{parse:{transform:function(t){return ss(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-transform");return o&&(t.transform=ss(o)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,o=t.transform,r=t.containerWidth,s=t.iconWidth,i={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),u="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),f="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(l," ").concat(u," ").concat(f)},m={transform:"translate(".concat(s/2*-1," -256)")},k={outer:i,inner:v,path:m};return{tag:"g",attributes:H({},k.outer),children:[{tag:"g",attributes:H({},k.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:H(H({},a.icon.attributes),k.path)}]}]}}}},Ya={x:0,y:0,width:"100%",height:"100%"};function is(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function bg(e){return e.tag==="g"?e.children:[e]}var gg={hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-mask"),r=o?za(o.split(" ").map(function(s){return s.trim()})):Qo();return r.prefix||(r.prefix=Pn()),t.mask=r,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,o=t.attributes,r=t.main,s=t.mask,i=t.maskId,l=t.transform,u=r.width,f=r.icon,v=s.width,m=s.icon,k=mb({transform:l,containerWidth:v,iconWidth:u}),w={tag:"rect",attributes:H(H({},Ya),{},{fill:"white"})},h=f.children?{children:f.children.map(is)}:{},_={tag:"g",attributes:H({},k.inner),children:[is(H({tag:f.tag,attributes:H(H({},f.attributes),k.path)},h))]},A={tag:"g",attributes:H({},k.outer),children:[_]},b="mask-".concat(i||It()),d="clip-".concat(i||It()),y={tag:"mask",attributes:H(H({},Ya),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,A]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:bg(m)},y]};return a.push(C,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(b,")")},Ya)}),{children:a,attributes:o}}}},hg={provides:function(n){var t=!1;On.matchMedia&&(t=On.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],o={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:H(H({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=H(H({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:H(H({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:H(H({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(i),a.push({tag:"path",attributes:H(H({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:H(H({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:H(H({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},yg={hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-symbol"),r=o===null?!1:o===""?!0:o;return t.symbol=r,t}}}},vg=[hb,og,rg,sg,ig,dg,pg,mg,gg,hg,yg];Fb(vg,{mixoutsTo:Ve});Ve.noAuto;var zi=Ve.config,kg=Ve.library;Ve.dom;var ya=Ve.parse;Ve.findIconDefinition;Ve.toHtml;var wg=Ve.icon;Ve.layer;var _g=Ve.text;Ve.counter;function ls(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function Je(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ls(Object(t),!0).forEach(function(a){De(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ls(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function va(e){return va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},va(e)}function De(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xg(e,n){if(e==null)return{};var t={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Cg(e,n){if(e==null)return{};var t=xg(e,n),a,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function ko(e){return Ag(e)||Sg(e)||Tg(e)||$g()}function Ag(e){if(Array.isArray(e))return wo(e)}function Sg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tg(e,n){if(e){if(typeof e=="string")return wo(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wo(e,n)}}function wo(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function $g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ni={exports:{}};(function(e){(function(n){var t=function(A,b,d){if(!u(b)||v(b)||m(b)||k(b)||l(b))return b;var y,C=0,S=0;if(f(b))for(y=[],S=b.length;C<S;C++)y.push(t(A,b[C],d));else{y={};for(var N in b)Object.prototype.hasOwnProperty.call(b,N)&&(y[A(N,d)]=t(A,b[N],d))}return y},a=function(A,b){b=b||{};var d=b.separator||"_",y=b.split||/(?=[A-Z])/;return A.split(y).join(d)},o=function(A){return w(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(b,d){return d?d.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},r=function(A){var b=o(A);return b.substr(0,1).toUpperCase()+b.substr(1)},s=function(A,b){return a(A,b).toLowerCase()},i=Object.prototype.toString,l=function(A){return typeof A=="function"},u=function(A){return A===Object(A)},f=function(A){return i.call(A)=="[object Array]"},v=function(A){return i.call(A)=="[object Date]"},m=function(A){return i.call(A)=="[object RegExp]"},k=function(A){return i.call(A)=="[object Boolean]"},w=function(A){return A=A-0,A===A},h=function(A,b){var d=b&&"process"in b?b.process:b;return typeof d!="function"?A:function(y,C){return d(y,A,C)}},_={camelize:o,decamelize:s,pascalize:r,depascalize:s,camelizeKeys:function(A,b){return t(h(o,b),A)},decamelizeKeys:function(A,b){return t(h(s,b),A,b)},pascalizeKeys:function(A,b){return t(h(r,b),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=_:n.humps=_})(Eg)})(Ni);var Og=Ni.exports,Pg=["class","style"];function Fg(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),o=Og.camelize(t.slice(0,a)),r=t.slice(a+1).trim();return n[o]=r,n},{})}function jg(e){return e.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function ar(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return ar(l)}),o=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.class=jg(f);break;case"style":l.style=Fg(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});t.class;var r=t.style,s=r===void 0?{}:r,i=Cg(t,Pg);return si(e.tag,Je(Je(Je({},n),{},{class:o.class,style:Je(Je({},o.style),s)},o.attrs),i),a)}var Ri=!1;try{Ri=!0}catch{}function Ig(){if(!Ri&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _t(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?De({},e,n):{}}function Mg(e){var n,t=(n={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},De(n,"fa-".concat(e.size),e.size!==null),De(n,"fa-rotate-".concat(e.rotation),e.rotation!==null),De(n,"fa-pull-".concat(e.pull),e.pull!==null),De(n,"fa-swap-opacity",e.swapOpacity),De(n,"fa-bounce",e.bounce),De(n,"fa-shake",e.shake),De(n,"fa-beat",e.beat),De(n,"fa-fade",e.fade),De(n,"fa-beat-fade",e.beatFade),De(n,"fa-flash",e.flash),De(n,"fa-spin-pulse",e.spinPulse),De(n,"fa-spin-reverse",e.spinReverse),n);return Object.keys(t).map(function(a){return t[a]?a:null}).filter(function(a){return a})}function cs(e){if(e&&va(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ya.icon)return ya.icon(e);if(e===null)return null;if(va(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zg=ut({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var a=t.attrs,o=ke(function(){return cs(n.icon)}),r=ke(function(){return _t("classes",Mg(n))}),s=ke(function(){return _t("transform",typeof n.transform=="string"?ya.transform(n.transform):n.transform)}),i=ke(function(){return _t("mask",cs(n.mask))}),l=ke(function(){return wg(o.value,Je(Je(Je(Je({},r.value),s.value),i.value),{},{symbol:n.symbol,title:n.title}))});gt(l,function(f){if(!f)return Ig("Could not find one or more icon(s)",o.value,i.value)},{immediate:!0});var u=ke(function(){return l.value?ar(l.value.abstract[0],{},a):null});return function(){return u.value}}});ut({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(n,t){var a=t.slots,o=zi.familyPrefix,r=ke(function(){return["".concat(o,"-layers")].concat(ko(n.fixedWidth?["".concat(o,"-fw")]:[]))});return function(){return si("div",{class:r.value},a.default?a.default():[])}}});ut({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(n){return["bottom-left","bottom-right","top-left","top-right"].indexOf(n)>-1}}},setup:function(n,t){var a=t.attrs,o=zi.familyPrefix,r=ke(function(){return _t("classes",[].concat(ko(n.counter?["".concat(o,"-layers-counter")]:[]),ko(n.position?["".concat(o,"-layers-").concat(n.position)]:[])))}),s=ke(function(){return _t("transform",typeof n.transform=="string"?ya.transform(n.transform):n.transform)}),i=ke(function(){var u=_g(n.value.toString(),Je(Je({},s.value),r.value)),f=u.abstract;return n.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=ke(function(){return ar(i.value,{},a)});return function(){return l.value}}});var Ng={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Rg={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},Bg={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Lg={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"]};kg.add({faCopyright:Rg,faGithub:Bg,faHouse:Ng,faNpm:Lg});lu(gm).use(Uo,{theme:"neon-bunny"}).component("fa-icon",zg).mount("#app");
