function ic(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(a,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Vs(e,n){const t=Object.create(null),a=e.split(",");for(let s=0;s<a.length;s++)t[a[s]]=!0;return n?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Se={},ct=[],on=()=>{},cc=()=>!1,uc=/^on[^a-z]/,La=e=>uc.test(e),Gs=e=>e.startsWith("onUpdate:"),qe=Object.assign,Ks=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},hc=Object.prototype.hasOwnProperty,fe=(e,n)=>hc.call(e,n),re=Array.isArray,ut=e=>Jt(e)==="[object Map]",Ba=e=>Jt(e)==="[object Set]",Ro=e=>Jt(e)==="[object Date]",de=e=>typeof e=="function",Le=e=>typeof e=="string",dt=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",el=e=>(Ee(e)||de(e))&&de(e.then)&&de(e.catch),nl=Object.prototype.toString,Jt=e=>nl.call(e),gc=e=>Jt(e).slice(8,-1),tl=e=>Jt(e)==="[object Object]",Ys=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ma=Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},pc=/-(\w)/g,dn=Fa(e=>e.replace(pc,(n,t)=>t?t.toUpperCase():"")),dc=/\B([A-Z])/g,jt=Fa(e=>e.replace(dc,"-$1").toLowerCase()),Da=Fa(e=>e.charAt(0).toUpperCase()+e.slice(1)),ss=Fa(e=>e?`on${Da(e)}`:""),Xn=(e,n)=>!Object.is(e,n),ya=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ka=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},ms=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Po;const ys=()=>Po||(Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function An(e){if(re(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],s=Le(a)?yc(a):An(a);if(s)for(const o in s)n[o]=s[o]}return n}else if(Le(e)||Ee(e))return e}const fc=/;(?![^(]*\))/g,bc=/:([^]+)/,mc=/\/\*[^]*?\*\//g;function yc(e){const n={};return e.replace(mc,"").split(fc).forEach(t=>{if(t){const a=t.split(bc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Ce(e){let n="";if(Le(e))n=e;else if(re(e))for(let t=0;t<e.length;t++){const a=Ce(e[t]);a&&(n+=a+" ")}else if(Ee(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const vc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jc=Vs(vc);function al(e){return!!e||e===""}function _c(e,n){if(e.length!==n.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=za(e[a],n[a]);return t}function za(e,n){if(e===n)return!0;let t=Ro(e),a=Ro(n);if(t||a)return t&&a?e.getTime()===n.getTime():!1;if(t=dt(e),a=dt(n),t||a)return e===n;if(t=re(e),a=re(n),t||a)return t&&a?_c(e,n):!1;if(t=Ee(e),a=Ee(n),t||a){if(!t||!a)return!1;const s=Object.keys(e).length,o=Object.keys(n).length;if(s!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),i=n.hasOwnProperty(r);if(l&&!i||!l&&i||!za(e[r],n[r]))return!1}}return String(e)===String(n)}function sl(e,n){return e.findIndex(t=>za(t,n))}const ke=e=>Le(e)?e:e==null?"":re(e)||Ee(e)&&(e.toString===nl||!de(e.toString))?JSON.stringify(e,ol,2):String(e),ol=(e,n)=>n&&n.__v_isRef?ol(e,n.value):ut(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,s])=>(t[`${a} =>`]=s,t),{})}:Ba(n)?{[`Set(${n.size})`]:[...n.values()]}:Ee(n)&&!re(n)&&!tl(n)?String(n):n;let en;class rl{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=en,!n&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=en;try{return en=this,n()}finally{en=t}}}on(){en=this}off(){en=this.parent}stop(n){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ll(e){return new rl(e)}function wc(e,n=en){n&&n.active&&n.effects.push(e)}function il(){return en}function kc(e){en&&en.cleanups.push(e)}const Js=e=>{const n=new Set(e);return n.w=0,n.n=0,n},cl=e=>(e.w&In)>0,ul=e=>(e.n&In)>0,xc=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=In},Ec=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const s=n[a];cl(s)&&!ul(s)?s.delete(e):n[t++]=s,s.w&=~In,s.n&=~In}n.length=t}},xa=new WeakMap;let Ct=0,In=1;const vs=30;let tn;const Kn=Symbol(""),js=Symbol("");class Zs{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,wc(this,a)}run(){if(!this.active)return this.fn();let n=tn,t=$n;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=tn,tn=this,$n=!0,In=1<<++Ct,Ct<=vs?xc(this):Lo(this),this.fn()}finally{Ct<=vs&&Ec(this),In=1<<--Ct,tn=this.parent,$n=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(Lo(this),this.onStop&&this.onStop(),this.active=!1)}}function Lo(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let $n=!0;const hl=[];function _t(){hl.push($n),$n=!1}function wt(){const e=hl.pop();$n=e===void 0?!0:e}function Xe(e,n,t){if($n&&tn){let a=xa.get(e);a||xa.set(e,a=new Map);let s=a.get(t);s||a.set(t,s=Js()),gl(s)}}function gl(e,n){let t=!1;Ct<=vs?ul(e)||(e.n|=In,t=!cl(e)):t=!e.has(tn),t&&(e.add(tn),tn.deps.push(e))}function mn(e,n,t,a,s,o){const r=xa.get(e);if(!r)return;let l=[];if(n==="clear")l=[...r.values()];else if(t==="length"&&re(e)){const i=Number(a);r.forEach((c,h)=>{(h==="length"||!dt(h)&&h>=i)&&l.push(c)})}else switch(t!==void 0&&l.push(r.get(t)),n){case"add":re(e)?Ys(t)&&l.push(r.get("length")):(l.push(r.get(Kn)),ut(e)&&l.push(r.get(js)));break;case"delete":re(e)||(l.push(r.get(Kn)),ut(e)&&l.push(r.get(js)));break;case"set":ut(e)&&l.push(r.get(Kn));break}if(l.length===1)l[0]&&_s(l[0]);else{const i=[];for(const c of l)c&&i.push(...c);_s(Js(i))}}function _s(e,n){const t=re(e)?e:[...e];for(const a of t)a.computed&&Bo(a);for(const a of t)a.computed||Bo(a)}function Bo(e,n){(e!==tn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Cc(e,n){var t;return(t=xa.get(e))==null?void 0:t.get(n)}const Sc=Vs("__proto__,__v_isRef,__isVue"),pl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dt)),Fo=Tc();function Tc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=be(this);for(let o=0,r=this.length;o<r;o++)Xe(a,"get",o+"");const s=a[n](...t);return s===-1||s===!1?a[n](...t.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){_t();const a=be(this)[n].apply(this,t);return wt(),a}}),e}function Ac(e){const n=be(this);return Xe(n,"has",e),n.hasOwnProperty(e)}class dl{constructor(n=!1,t=!1){this._isReadonly=n,this._shallow=t}get(n,t,a){const s=this._isReadonly,o=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw"&&a===(s?o?Hc:yl:o?ml:bl).get(n))return n;const r=re(n);if(!s){if(r&&fe(Fo,t))return Reflect.get(Fo,t,a);if(t==="hasOwnProperty")return Ac}const l=Reflect.get(n,t,a);return(dt(t)?pl.has(t):Sc(t))||(s||Xe(n,"get",t),o)?l:Ne(l)?r&&Ys(t)?l:l.value:Ee(l)?s?vl(l):Ua(l):l}}class fl extends dl{constructor(n=!1){super(!1,n)}set(n,t,a,s){let o=n[t];if(ft(o)&&Ne(o)&&!Ne(a))return!1;if(!this._shallow&&(!Ea(a)&&!ft(a)&&(o=be(o),a=be(a)),!re(n)&&Ne(o)&&!Ne(a)))return o.value=a,!0;const r=re(n)&&Ys(t)?Number(t)<n.length:fe(n,t),l=Reflect.set(n,t,a,s);return n===be(s)&&(r?Xn(a,o)&&mn(n,"set",t,a):mn(n,"add",t,a)),l}deleteProperty(n,t){const a=fe(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&a&&mn(n,"delete",t,void 0),s}has(n,t){const a=Reflect.has(n,t);return(!dt(t)||!pl.has(t))&&Xe(n,"has",t),a}ownKeys(n){return Xe(n,"iterate",re(n)?"length":Kn),Reflect.ownKeys(n)}}class Oc extends dl{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const $c=new fl,Nc=new Oc,Mc=new fl(!0),Xs=e=>e,Ha=e=>Reflect.getPrototypeOf(e);function ea(e,n,t=!1,a=!1){e=e.__v_raw;const s=be(e),o=be(n);t||(Xn(n,o)&&Xe(s,"get",n),Xe(s,"get",o));const{has:r}=Ha(s),l=a?Xs:t?no:Pt;if(r.call(s,n))return l(e.get(n));if(r.call(s,o))return l(e.get(o));e!==s&&e.get(n)}function na(e,n=!1){const t=this.__v_raw,a=be(t),s=be(e);return n||(Xn(e,s)&&Xe(a,"has",e),Xe(a,"has",s)),e===s?t.has(e):t.has(e)||t.has(s)}function ta(e,n=!1){return e=e.__v_raw,!n&&Xe(be(e),"iterate",Kn),Reflect.get(e,"size",e)}function Do(e){e=be(e);const n=be(this);return Ha(n).has.call(n,e)||(n.add(e),mn(n,"add",e,e)),this}function zo(e,n){n=be(n);const t=be(this),{has:a,get:s}=Ha(t);let o=a.call(t,e);o||(e=be(e),o=a.call(t,e));const r=s.call(t,e);return t.set(e,n),o?Xn(n,r)&&mn(t,"set",e,n):mn(t,"add",e,n),this}function Ho(e){const n=be(this),{has:t,get:a}=Ha(n);let s=t.call(n,e);s||(e=be(e),s=t.call(n,e)),a&&a.call(n,e);const o=n.delete(e);return s&&mn(n,"delete",e,void 0),o}function Uo(){const e=be(this),n=e.size!==0,t=e.clear();return n&&mn(e,"clear",void 0,void 0),t}function aa(e,n){return function(a,s){const o=this,r=o.__v_raw,l=be(r),i=n?Xs:e?no:Pt;return!e&&Xe(l,"iterate",Kn),r.forEach((c,h)=>a.call(s,i(c),i(h),o))}}function sa(e,n,t){return function(...a){const s=this.__v_raw,o=be(s),r=ut(o),l=e==="entries"||e===Symbol.iterator&&r,i=e==="keys"&&r,c=s[e](...a),h=t?Xs:n?no:Pt;return!n&&Xe(o,"iterate",i?js:Kn),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:l?[h(m[0]),h(m[1])]:h(m),done:g}},[Symbol.iterator](){return this}}}}function xn(e){return function(...n){return e==="delete"?!1:this}}function Ic(){const e={get(o){return ea(this,o)},get size(){return ta(this)},has:na,add:Do,set:zo,delete:Ho,clear:Uo,forEach:aa(!1,!1)},n={get(o){return ea(this,o,!1,!0)},get size(){return ta(this)},has:na,add:Do,set:zo,delete:Ho,clear:Uo,forEach:aa(!1,!0)},t={get(o){return ea(this,o,!0)},get size(){return ta(this,!0)},has(o){return na.call(this,o,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:aa(!0,!1)},a={get(o){return ea(this,o,!0,!0)},get size(){return ta(this,!0)},has(o){return na.call(this,o,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=sa(o,!1,!1),t[o]=sa(o,!0,!1),n[o]=sa(o,!1,!0),a[o]=sa(o,!0,!0)}),[e,t,n,a]}const[Rc,Pc,Lc,Bc]=Ic();function Qs(e,n){const t=n?e?Bc:Lc:e?Pc:Rc;return(a,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(fe(t,s)&&s in a?t:a,s,o)}const Fc={get:Qs(!1,!1)},Dc={get:Qs(!1,!0)},zc={get:Qs(!0,!1)},bl=new WeakMap,ml=new WeakMap,yl=new WeakMap,Hc=new WeakMap;function Uc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(e){return e.__v_skip||!Object.isExtensible(e)?0:Uc(gc(e))}function Ua(e){return ft(e)?e:eo(e,!1,$c,Fc,bl)}function Wc(e){return eo(e,!1,Mc,Dc,ml)}function vl(e){return eo(e,!0,Nc,zc,yl)}function eo(e,n,t,a,s){if(!Ee(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const r=qc(e);if(r===0)return e;const l=new Proxy(e,r===2?a:t);return s.set(e,l),l}function Nn(e){return ft(e)?Nn(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function Ea(e){return!!(e&&e.__v_isShallow)}function jl(e){return Nn(e)||ft(e)}function be(e){const n=e&&e.__v_raw;return n?be(n):e}function qa(e){return ka(e,"__v_skip",!0),e}const Pt=e=>Ee(e)?Ua(e):e,no=e=>Ee(e)?vl(e):e;function _l(e){$n&&tn&&(e=be(e),gl(e.dep||(e.dep=Js())))}function wl(e,n){e=be(e);const t=e.dep;t&&_s(t)}function Ne(e){return!!(e&&e.__v_isRef===!0)}function we(e){return Vc(e,!1)}function Vc(e,n){return Ne(e)?e:new Gc(e,n)}class Gc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:be(n),this._value=t?n:Pt(n)}get value(){return _l(this),this._value}set value(n){const t=this.__v_isShallow||Ea(n)||ft(n);n=t?n:be(n),Xn(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Pt(n),wl(this))}}function p(e){return Ne(e)?e.value:e}const Kc={get:(e,n,t)=>p(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const s=e[n];return Ne(s)&&!Ne(t)?(s.value=t,!0):Reflect.set(e,n,t,a)}};function kl(e){return Nn(e)?e:new Proxy(e,Kc)}function xl(e){const n=re(e)?new Array(e.length):{};for(const t in e)n[t]=Jc(e,t);return n}class Yc{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Cc(be(this._object),this._key)}}function Jc(e,n,t){const a=e[n];return Ne(a)?a:new Yc(e,n,t)}class Zc{constructor(n,t,a,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zs(n,()=>{this._dirty||(this._dirty=!0,wl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const n=be(this);return _l(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Xc(e,n,t=!1){let a,s;const o=de(e);return o?(a=e,s=on):(a=e.get,s=e.set),new Zc(a,s,o||!s,t)}function Mn(e,n,t,a){let s;try{s=a?e(...a):e()}catch(o){Wa(o,n,t)}return s}function rn(e,n,t,a){if(de(e)){const o=Mn(e,n,t,a);return o&&el(o)&&o.catch(r=>{Wa(r,n,t)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(rn(e[o],n,t,a));return s}function Wa(e,n,t,a=!0){const s=n?n.vnode:null;if(n){let o=n.parent;const r=n.proxy,l=t;for(;o;){const c=o.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,r,l)===!1)return}o=o.parent}const i=n.appContext.config.errorHandler;if(i){Mn(i,null,10,[e,r,l]);return}}Qc(e,t,s,a)}function Qc(e,n,t,a=!0){console.error(e)}let Lt=!1,ws=!1;const Ge=[];let gn=0;const ht=[];let fn=null,Hn=0;const El=Promise.resolve();let to=null;function Cl(e){const n=to||El;return e?n.then(this?e.bind(this):e):n}function eu(e){let n=gn+1,t=Ge.length;for(;n<t;){const a=n+t>>>1,s=Ge[a],o=Bt(s);o<e||o===e&&s.pre?n=a+1:t=a}return n}function ao(e){(!Ge.length||!Ge.includes(e,Lt&&e.allowRecurse?gn+1:gn))&&(e.id==null?Ge.push(e):Ge.splice(eu(e.id),0,e),Sl())}function Sl(){!Lt&&!ws&&(ws=!0,to=El.then(Al))}function nu(e){const n=Ge.indexOf(e);n>gn&&Ge.splice(n,1)}function tu(e){re(e)?ht.push(...e):(!fn||!fn.includes(e,e.allowRecurse?Hn+1:Hn))&&ht.push(e),Sl()}function qo(e,n=Lt?gn+1:0){for(;n<Ge.length;n++){const t=Ge[n];t&&t.pre&&(Ge.splice(n,1),n--,t())}}function Tl(e){if(ht.length){const n=[...new Set(ht)];if(ht.length=0,fn){fn.push(...n);return}for(fn=n,fn.sort((t,a)=>Bt(t)-Bt(a)),Hn=0;Hn<fn.length;Hn++)fn[Hn]();fn=null,Hn=0}}const Bt=e=>e.id==null?1/0:e.id,au=(e,n)=>{const t=Bt(e)-Bt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Al(e){ws=!1,Lt=!0,Ge.sort(au);const n=on;try{for(gn=0;gn<Ge.length;gn++){const t=Ge[gn];t&&t.active!==!1&&Mn(t,null,14)}}finally{gn=0,Ge.length=0,Tl(),Lt=!1,to=null,(Ge.length||ht.length)&&Al()}}function su(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||Se;let s=t;const o=n.startsWith("update:"),r=o&&n.slice(7);if(r&&r in a){const h=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:g}=a[h]||Se;g&&(s=t.map(v=>Le(v)?v.trim():v)),m&&(s=t.map(ms))}let l,i=a[l=ss(n)]||a[l=ss(dn(n))];!i&&o&&(i=a[l=ss(jt(n))]),i&&rn(i,e,6,s);const c=a[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,rn(c,e,6,s)}}function Ol(e,n,t=!1){const a=n.emitsCache,s=a.get(e);if(s!==void 0)return s;const o=e.emits;let r={},l=!1;if(!de(e)){const i=c=>{const h=Ol(c,n,!0);h&&(l=!0,qe(r,h))};!t&&n.mixins.length&&n.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!o&&!l?(Ee(e)&&a.set(e,null),null):(re(o)?o.forEach(i=>r[i]=null):qe(r,o),Ee(e)&&a.set(e,r),r)}function Va(e,n){return!e||!La(n)?!1:(n=n.slice(2).replace(/Once$/,""),fe(e,n[0].toLowerCase()+n.slice(1))||fe(e,jt(n))||fe(e,n))}let He=null,Ga=null;function Ca(e){const n=He;return He=e,Ga=e&&e.type.__scopeId||null,n}function $l(e){Ga=e}function Nl(){Ga=null}function un(e,n=He,t){if(!n||e._n)return e;const a=(...s)=>{a._d&&er(-1);const o=Ca(n);let r;try{r=e(...s)}finally{Ca(o),a._d&&er(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function os(e){const{type:n,vnode:t,proxy:a,withProxy:s,props:o,propsOptions:[r],slots:l,attrs:i,emit:c,render:h,renderCache:m,data:g,setupState:v,ctx:w,inheritAttrs:y}=e;let k,T;const b=Ca(e);try{if(t.shapeFlag&4){const _=s||a;k=hn(h.call(_,_,m,o,v,g,w)),T=i}else{const _=n;k=hn(_.length>1?_(o,{attrs:i,slots:l,emit:c}):_(o,null)),T=n.props?i:ou(i)}}catch(_){$t.length=0,Wa(_,e,1),k=q(Rn)}let f=k;if(T&&y!==!1){const _=Object.keys(T),{shapeFlag:E}=f;_.length&&E&7&&(r&&_.some(Gs)&&(T=ru(T,r)),f=bt(f,T))}return t.dirs&&(f=bt(f),f.dirs=f.dirs?f.dirs.concat(t.dirs):t.dirs),t.transition&&(f.transition=t.transition),k=f,Ca(b),k}const ou=e=>{let n;for(const t in e)(t==="class"||t==="style"||La(t))&&((n||(n={}))[t]=e[t]);return n},ru=(e,n)=>{const t={};for(const a in e)(!Gs(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function lu(e,n,t){const{props:a,children:s,component:o}=e,{props:r,children:l,patchFlag:i}=n,c=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&i>=0){if(i&1024)return!0;if(i&16)return a?Wo(a,r,c):!!r;if(i&8){const h=n.dynamicProps;for(let m=0;m<h.length;m++){const g=h[m];if(r[g]!==a[g]&&!Va(c,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:a===r?!1:a?r?Wo(a,r,c):!0:!!r;return!1}function Wo(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(n[o]!==e[o]&&!Va(t,o))return!0}return!1}function iu({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Ml="components";function Qe(e,n){return uu(Ml,e,!0,n)||e}const cu=Symbol.for("v-ndc");function uu(e,n,t=!0,a=!1){const s=He||Pe;if(s){const o=s.type;if(e===Ml){const l=th(o,!1);if(l&&(l===n||l===dn(n)||l===Da(dn(n))))return o}const r=Vo(s[e]||o[e],n)||Vo(s.appContext[e],n);return!r&&a?o:r}}function Vo(e,n){return e&&(e[n]||e[dn(n)]||e[Da(dn(n))])}const hu=e=>e.__isSuspense;function gu(e,n){n&&n.pendingBranch?re(e)?n.effects.push(...e):n.effects.push(e):tu(e)}const oa={};function Yn(e,n,t){return Il(e,n,t)}function Il(e,n,{immediate:t,deep:a,flush:s,onTrack:o,onTrigger:r}=Se){var l;const i=il()===((l=Pe)==null?void 0:l.scope)?Pe:null;let c,h=!1,m=!1;if(Ne(e)?(c=()=>e.value,h=Ea(e)):Nn(e)?(c=()=>e,a=!0):re(e)?(m=!0,h=e.some(_=>Nn(_)||Ea(_)),c=()=>e.map(_=>{if(Ne(_))return _.value;if(Nn(_))return Wn(_);if(de(_))return Mn(_,i,2)})):de(e)?n?c=()=>Mn(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return g&&g(),rn(e,i,3,[v])}:c=on,n&&a){const _=c;c=()=>Wn(_())}let g,v=_=>{g=b.onStop=()=>{Mn(_,i,4)}},w;if(Ht)if(v=on,n?t&&rn(n,i,3,[c(),m?[]:void 0,v]):c(),s==="sync"){const _=rh();w=_.__watcherHandles||(_.__watcherHandles=[])}else return on;let y=m?new Array(e.length).fill(oa):oa;const k=()=>{if(b.active)if(n){const _=b.run();(a||h||(m?_.some((E,R)=>Xn(E,y[R])):Xn(_,y)))&&(g&&g(),rn(n,i,3,[_,y===oa?void 0:m&&y[0]===oa?[]:y,v]),y=_)}else b.run()};k.allowRecurse=!!n;let T;s==="sync"?T=k:s==="post"?T=()=>Ze(k,i&&i.suspense):(k.pre=!0,i&&(k.id=i.uid),T=()=>ao(k));const b=new Zs(c,T);n?t?k():y=b.run():s==="post"?Ze(b.run.bind(b),i&&i.suspense):b.run();const f=()=>{b.stop(),i&&i.scope&&Ks(i.scope.effects,b)};return w&&w.push(f),f}function pu(e,n,t){const a=this.proxy,s=Le(e)?e.includes(".")?Rl(a,e):()=>a[e]:e.bind(a,a);let o;de(n)?o=n:(o=n.handler,t=n);const r=Pe;mt(this);const l=Il(s,o.bind(a),t);return r?mt(r):Jn(),l}function Rl(e,n){const t=n.split(".");return()=>{let a=e;for(let s=0;s<t.length&&a;s++)a=a[t[s]];return a}}function Wn(e,n){if(!Ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ne(e))Wn(e.value,n);else if(re(e))for(let t=0;t<e.length;t++)Wn(e[t],n);else if(Ba(e)||ut(e))e.forEach(t=>{Wn(t,n)});else if(tl(e))for(const t in e)Wn(e[t],n);return e}function Fn(e,n){const t=He;if(t===null)return e;const a=Za(t)||t.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[r,l,i,c=Se]=n[o];r&&(de(r)&&(r={mounted:r,updated:r}),r.deep&&Wn(l),s.push({dir:r,instance:a,value:l,oldValue:void 0,arg:i,modifiers:c}))}return e}function Dn(e,n,t,a){const s=e.dirs,o=n&&n.dirs;for(let r=0;r<s.length;r++){const l=s[r];o&&(l.oldValue=o[r].value);let i=l.dir[a];i&&(_t(),rn(i,t,8,[e.el,l,e,n]),wt())}}/*! #__NO_SIDE_EFFECTS__ */function kt(e,n){return de(e)?(()=>qe({name:e.name},n,{setup:e}))():e}const At=e=>!!e.type.__asyncLoader,Pl=e=>e.type.__isKeepAlive;function du(e,n){Ll(e,"a",n)}function fu(e,n){Ll(e,"da",n)}function Ll(e,n,t=Pe){const a=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ka(n,a,t),t){let s=t.parent;for(;s&&s.parent;)Pl(s.parent.vnode)&&bu(a,n,t,s),s=s.parent}}function bu(e,n,t,a){const s=Ka(n,e,a,!0);Fl(()=>{Ks(a[n],s)},t)}function Ka(e,n,t=Pe,a=!1){if(t){const s=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...r)=>{if(t.isUnmounted)return;_t(),mt(t);const l=rn(n,t,e,r);return Jn(),wt(),l});return a?s.unshift(o):s.push(o),o}}const _n=e=>(n,t=Pe)=>(!Ht||e==="sp")&&Ka(e,(...a)=>n(...a),t),so=_n("bm"),Bl=_n("m"),mu=_n("bu"),yu=_n("u"),vu=_n("bum"),Fl=_n("um"),ju=_n("sp"),_u=_n("rtg"),wu=_n("rtc");function ku(e,n=Pe){Ka("ec",e,n)}function Qn(e,n,t,a){let s;const o=t&&t[a];if(re(e)||Le(e)){s=new Array(e.length);for(let r=0,l=e.length;r<l;r++)s[r]=n(e[r],r,void 0,o&&o[r])}else if(typeof e=="number"){s=new Array(e);for(let r=0;r<e;r++)s[r]=n(r+1,r,void 0,o&&o[r])}else if(Ee(e))if(e[Symbol.iterator])s=Array.from(e,(r,l)=>n(r,l,void 0,o&&o[l]));else{const r=Object.keys(e);s=new Array(r.length);for(let l=0,i=r.length;l<i;l++){const c=r[l];s[l]=n(e[c],c,l,o&&o[l])}}else s=[];return t&&(t[a]=s),s}function rs(e,n,t={},a,s){if(He.isCE||He.parent&&At(He.parent)&&He.parent.isCE)return n!=="default"&&(t.name=n),q("slot",t,a&&a());let o=e[n];o&&o._c&&(o._d=!1),Z();const r=o&&Dl(o(t)),l=zt(Oe,{key:t.key||r&&r.key||`_${n}`},r||(a?a():[]),r&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Dl(e){return e.some(n=>Ta(n)?!(n.type===Rn||n.type===Oe&&!Dl(n.children)):!0)?e:null}const ks=e=>e?Zl(e)?Za(e)||e.proxy:ks(e.parent):null,Ot=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ks(e.parent),$root:e=>ks(e.root),$emit:e=>e.emit,$options:e=>oo(e),$forceUpdate:e=>e.f||(e.f=()=>ao(e.update)),$nextTick:e=>e.n||(e.n=Cl.bind(e.proxy)),$watch:e=>pu.bind(e)}),ls=(e,n)=>e!==Se&&!e.__isScriptSetup&&fe(e,n),xu={get({_:e},n){const{ctx:t,setupState:a,data:s,props:o,accessCache:r,type:l,appContext:i}=e;let c;if(n[0]!=="$"){const v=r[n];if(v!==void 0)switch(v){case 1:return a[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if(ls(a,n))return r[n]=1,a[n];if(s!==Se&&fe(s,n))return r[n]=2,s[n];if((c=e.propsOptions[0])&&fe(c,n))return r[n]=3,o[n];if(t!==Se&&fe(t,n))return r[n]=4,t[n];Es&&(r[n]=0)}}const h=Ot[n];let m,g;if(h)return n==="$attrs"&&Xe(e,"get",n),h(e);if((m=l.__cssModules)&&(m=m[n]))return m;if(t!==Se&&fe(t,n))return r[n]=4,t[n];if(g=i.config.globalProperties,fe(g,n))return g[n]},set({_:e},n,t){const{data:a,setupState:s,ctx:o}=e;return ls(s,n)?(s[n]=t,!0):a!==Se&&fe(a,n)?(a[n]=t,!0):fe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:s,propsOptions:o}},r){let l;return!!t[r]||e!==Se&&fe(e,r)||ls(n,r)||(l=o[0])&&fe(l,r)||fe(a,r)||fe(Ot,r)||fe(s.config.globalProperties,r)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:fe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Eu(){return Cu().slots}function Cu(){const e=Xu();return e.setupContext||(e.setupContext=Ql(e))}function xs(e){return re(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function Su(e,n){const t=xs(e);for(const a in n){if(a.startsWith("__skip"))continue;let s=t[a];s?re(s)||de(s)?s=t[a]={type:s,default:n[a]}:s.default=n[a]:s===null&&(s=t[a]={default:n[a]}),s&&n[`__skip_${a}`]&&(s.skipFactory=!0)}return t}let Es=!0;function Tu(e){const n=oo(e),t=e.proxy,a=e.ctx;Es=!1,n.beforeCreate&&Go(n.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:l,provide:i,inject:c,created:h,beforeMount:m,mounted:g,beforeUpdate:v,updated:w,activated:y,deactivated:k,beforeDestroy:T,beforeUnmount:b,destroyed:f,unmounted:_,render:E,renderTracked:R,renderTriggered:F,errorCaptured:H,serverPrefetch:M,expose:ee,inheritAttrs:he,components:_e,directives:me,filters:ye}=n;if(c&&Au(c,a,null),r)for(const A in r){const $=r[A];de($)&&(a[A]=$.bind(t))}if(s){const A=s.call(t,t);Ee(A)&&(e.data=Ua(A))}if(Es=!0,o)for(const A in o){const $=o[A],K=de($)?$.bind(t,t):de($.get)?$.get.bind(t,t):on,le=!de($)&&de($.set)?$.set.bind(t):on,pe=ze({get:K,set:le});Object.defineProperty(a,A,{enumerable:!0,configurable:!0,get:()=>pe.value,set:ue=>pe.value=ue})}if(l)for(const A in l)zl(l[A],a,t,A);if(i){const A=de(i)?i.call(t):i;Reflect.ownKeys(A).forEach($=>{Tn($,A[$])})}h&&Go(h,e,"c");function ge(A,$){re($)?$.forEach(K=>A(K.bind(t))):$&&A($.bind(t))}if(ge(so,m),ge(Bl,g),ge(mu,v),ge(yu,w),ge(du,y),ge(fu,k),ge(ku,H),ge(wu,R),ge(_u,F),ge(vu,b),ge(Fl,_),ge(ju,M),re(ee))if(ee.length){const A=e.exposed||(e.exposed={});ee.forEach($=>{Object.defineProperty(A,$,{get:()=>t[$],set:K=>t[$]=K})})}else e.exposed||(e.exposed={});E&&e.render===on&&(e.render=E),he!=null&&(e.inheritAttrs=he),_e&&(e.components=_e),me&&(e.directives=me)}function Au(e,n,t=on){re(e)&&(e=Cs(e));for(const a in e){const s=e[a];let o;Ee(s)?"default"in s?o=ae(s.from||a,s.default,!0):o=ae(s.from||a):o=ae(s),Ne(o)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):n[a]=o}}function Go(e,n,t){rn(re(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function zl(e,n,t,a){const s=a.includes(".")?Rl(t,a):()=>t[a];if(Le(e)){const o=n[e];de(o)&&Yn(s,o)}else if(de(e))Yn(s,e.bind(t));else if(Ee(e))if(re(e))e.forEach(o=>zl(o,n,t,a));else{const o=de(e.handler)?e.handler.bind(t):n[e.handler];de(o)&&Yn(s,o,e)}}function oo(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(n);let i;return l?i=l:!s.length&&!t&&!a?i=n:(i={},s.length&&s.forEach(c=>Sa(i,c,r,!0)),Sa(i,n,r)),Ee(n)&&o.set(n,i),i}function Sa(e,n,t,a=!1){const{mixins:s,extends:o}=n;o&&Sa(e,o,t,!0),s&&s.forEach(r=>Sa(e,r,t,!0));for(const r in n)if(!(a&&r==="expose")){const l=Ou[r]||t&&t[r];e[r]=l?l(e[r],n[r]):n[r]}return e}const Ou={data:Ko,props:Yo,emits:Yo,methods:St,computed:St,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:St,directives:St,watch:Nu,provide:Ko,inject:$u};function Ko(e,n){return n?e?function(){return qe(de(e)?e.call(this,this):e,de(n)?n.call(this,this):n)}:n:e}function $u(e,n){return St(Cs(e),Cs(n))}function Cs(e){if(re(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ke(e,n){return e?[...new Set([].concat(e,n))]:n}function St(e,n){return e?qe(Object.create(null),e,n):n}function Yo(e,n){return e?re(e)&&re(n)?[...new Set([...e,...n])]:qe(Object.create(null),xs(e),xs(n??{})):n}function Nu(e,n){if(!e)return n;if(!n)return e;const t=qe(Object.create(null),e);for(const a in n)t[a]=Ke(e[a],n[a]);return t}function Hl(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mu=0;function Iu(e,n){return function(a,s=null){de(a)||(a=qe({},a)),s!=null&&!Ee(s)&&(s=null);const o=Hl(),r=new WeakSet;let l=!1;const i=o.app={_uid:Mu++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:lh,get config(){return o.config},set config(c){},use(c,...h){return r.has(c)||(c&&de(c.install)?(r.add(c),c.install(i,...h)):de(c)&&(r.add(c),c(i,...h))),i},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),i},component(c,h){return h?(o.components[c]=h,i):o.components[c]},directive(c,h){return h?(o.directives[c]=h,i):o.directives[c]},mount(c,h,m){if(!l){const g=q(a,s);return g.appContext=o,h&&n?n(g,c):e(g,c,m),l=!0,i._container=c,c.__vue_app__=i,Za(g.component)||g.component.proxy}},unmount(){l&&(e(null,i._container),delete i._container.__vue_app__)},provide(c,h){return o.provides[c]=h,i},runWithContext(c){Ft=i;try{return c()}finally{Ft=null}}};return i}}let Ft=null;function Tn(e,n){if(Pe){let t=Pe.provides;const a=Pe.parent&&Pe.parent.provides;a===t&&(t=Pe.provides=Object.create(a)),t[e]=n}}function ae(e,n,t=!1){const a=Pe||He;if(a||Ft){const s=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:Ft._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return t&&de(n)?n.call(a&&a.proxy):n}}function Ru(){return!!(Pe||He||Ft)}function Pu(e,n,t,a=!1){const s={},o={};ka(o,Ja,1),e.propsDefaults=Object.create(null),Ul(e,n,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);t?e.props=a?s:Wc(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Lu(e,n,t,a){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,l=be(s),[i]=e.propsOptions;let c=!1;if((a||r>0)&&!(r&16)){if(r&8){const h=e.vnode.dynamicProps;for(let m=0;m<h.length;m++){let g=h[m];if(Va(e.emitsOptions,g))continue;const v=n[g];if(i)if(fe(o,g))v!==o[g]&&(o[g]=v,c=!0);else{const w=dn(g);s[w]=Ss(i,l,w,v,e,!1)}else v!==o[g]&&(o[g]=v,c=!0)}}}else{Ul(e,n,s,o)&&(c=!0);let h;for(const m in l)(!n||!fe(n,m)&&((h=jt(m))===m||!fe(n,h)))&&(i?t&&(t[m]!==void 0||t[h]!==void 0)&&(s[m]=Ss(i,l,m,void 0,e,!0)):delete s[m]);if(o!==l)for(const m in o)(!n||!fe(n,m))&&(delete o[m],c=!0)}c&&mn(e,"set","$attrs")}function Ul(e,n,t,a){const[s,o]=e.propsOptions;let r=!1,l;if(n)for(let i in n){if(ma(i))continue;const c=n[i];let h;s&&fe(s,h=dn(i))?!o||!o.includes(h)?t[h]=c:(l||(l={}))[h]=c:Va(e.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,r=!0)}if(o){const i=be(t),c=l||Se;for(let h=0;h<o.length;h++){const m=o[h];t[m]=Ss(s,i,m,c[m],e,!fe(c,m))}}return r}function Ss(e,n,t,a,s,o){const r=e[t];if(r!=null){const l=fe(r,"default");if(l&&a===void 0){const i=r.default;if(r.type!==Function&&!r.skipFactory&&de(i)){const{propsDefaults:c}=s;t in c?a=c[t]:(mt(s),a=c[t]=i.call(null,n),Jn())}else a=i}r[0]&&(o&&!l?a=!1:r[1]&&(a===""||a===jt(t))&&(a=!0))}return a}function ql(e,n,t=!1){const a=n.propsCache,s=a.get(e);if(s)return s;const o=e.props,r={},l=[];let i=!1;if(!de(e)){const h=m=>{i=!0;const[g,v]=ql(m,n,!0);qe(r,g),v&&l.push(...v)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!o&&!i)return Ee(e)&&a.set(e,ct),ct;if(re(o))for(let h=0;h<o.length;h++){const m=dn(o[h]);Jo(m)&&(r[m]=Se)}else if(o)for(const h in o){const m=dn(h);if(Jo(m)){const g=o[h],v=r[m]=re(g)||de(g)?{type:g}:qe({},g);if(v){const w=Qo(Boolean,v.type),y=Qo(String,v.type);v[0]=w>-1,v[1]=y<0||w<y,(w>-1||fe(v,"default"))&&l.push(m)}}}const c=[r,l];return Ee(e)&&a.set(e,c),c}function Jo(e){return e[0]!=="$"}function Zo(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Xo(e,n){return Zo(e)===Zo(n)}function Qo(e,n){return re(n)?n.findIndex(t=>Xo(t,e)):de(n)&&Xo(n,e)?0:-1}const Wl=e=>e[0]==="_"||e==="$stable",ro=e=>re(e)?e.map(hn):[hn(e)],Bu=(e,n,t)=>{if(n._n)return n;const a=un((...s)=>ro(n(...s)),t);return a._c=!1,a},Vl=(e,n,t)=>{const a=e._ctx;for(const s in e){if(Wl(s))continue;const o=e[s];if(de(o))n[s]=Bu(s,o,a);else if(o!=null){const r=ro(o);n[s]=()=>r}}},Gl=(e,n)=>{const t=ro(n);e.slots.default=()=>t},Fu=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=be(n),ka(n,"_",t)):Vl(n,e.slots={})}else e.slots={},n&&Gl(e,n);ka(e.slots,Ja,1)},Du=(e,n,t)=>{const{vnode:a,slots:s}=e;let o=!0,r=Se;if(a.shapeFlag&32){const l=n._;l?t&&l===1?o=!1:(qe(s,n),!t&&l===1&&delete s._):(o=!n.$stable,Vl(n,s)),r=n}else n&&(Gl(e,n),r={default:1});if(o)for(const l in s)!Wl(l)&&r[l]==null&&delete s[l]};function Ts(e,n,t,a,s=!1){if(re(e)){e.forEach((g,v)=>Ts(g,n&&(re(n)?n[v]:n),t,a,s));return}if(At(a)&&!s)return;const o=a.shapeFlag&4?Za(a.component)||a.component.proxy:a.el,r=s?null:o,{i:l,r:i}=e,c=n&&n.r,h=l.refs===Se?l.refs={}:l.refs,m=l.setupState;if(c!=null&&c!==i&&(Le(c)?(h[c]=null,fe(m,c)&&(m[c]=null)):Ne(c)&&(c.value=null)),de(i))Mn(i,l,12,[r,h]);else{const g=Le(i),v=Ne(i);if(g||v){const w=()=>{if(e.f){const y=g?fe(m,i)?m[i]:h[i]:i.value;s?re(y)&&Ks(y,o):re(y)?y.includes(o)||y.push(o):g?(h[i]=[o],fe(m,i)&&(m[i]=h[i])):(i.value=[o],e.k&&(h[e.k]=i.value))}else g?(h[i]=r,fe(m,i)&&(m[i]=r)):v&&(i.value=r,e.k&&(h[e.k]=r))};r?(w.id=-1,Ze(w,t)):w()}}}const Ze=gu;function zu(e){return Hu(e)}function Hu(e,n){const t=ys();t.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:r,createText:l,createComment:i,setText:c,setElementText:h,parentNode:m,nextSibling:g,setScopeId:v=on,insertStaticContent:w}=e,y=(d,j,C,P=null,N=null,B=null,U=!1,S=null,D=!!j.dynamicChildren)=>{if(d===j)return;d&&!Et(d,j)&&(P=Me(d),ue(d,N,B,!0),d=null),j.patchFlag===-2&&(D=!1,j.dynamicChildren=null);const{type:O,ref:L,shapeFlag:W}=j;switch(O){case Ya:k(d,j,C,P);break;case Rn:T(d,j,C,P);break;case va:d==null&&b(j,C,P,U);break;case Oe:_e(d,j,C,P,N,B,U,S,D);break;default:W&1?E(d,j,C,P,N,B,U,S,D):W&6?me(d,j,C,P,N,B,U,S,D):(W&64||W&128)&&O.process(d,j,C,P,N,B,U,S,D,Ie)}L!=null&&N&&Ts(L,d&&d.ref,B,j||d,!j)},k=(d,j,C,P)=>{if(d==null)a(j.el=l(j.children),C,P);else{const N=j.el=d.el;j.children!==d.children&&c(N,j.children)}},T=(d,j,C,P)=>{d==null?a(j.el=i(j.children||""),C,P):j.el=d.el},b=(d,j,C,P)=>{[d.el,d.anchor]=w(d.children,j,C,P,d.el,d.anchor)},f=({el:d,anchor:j},C,P)=>{let N;for(;d&&d!==j;)N=g(d),a(d,C,P),d=N;a(j,C,P)},_=({el:d,anchor:j})=>{let C;for(;d&&d!==j;)C=g(d),s(d),d=C;s(j)},E=(d,j,C,P,N,B,U,S,D)=>{U=U||j.type==="svg",d==null?R(j,C,P,N,B,U,S,D):M(d,j,N,B,U,S,D)},R=(d,j,C,P,N,B,U,S)=>{let D,O;const{type:L,props:W,shapeFlag:X,transition:z,dirs:V}=d;if(D=d.el=r(d.type,B,W&&W.is,W),X&8?h(D,d.children):X&16&&H(d.children,D,null,P,N,B&&L!=="foreignObject",U,S),V&&Dn(d,null,P,"created"),F(D,d,d.scopeId,U,P),W){for(const I in W)I!=="value"&&!ma(I)&&o(D,I,null,W[I],B,d.children,P,N,ie);"value"in W&&o(D,"value",null,W.value),(O=W.onVnodeBeforeMount)&&cn(O,P,d)}V&&Dn(d,null,P,"beforeMount");const x=Uu(N,z);x&&z.beforeEnter(D),a(D,j,C),((O=W&&W.onVnodeMounted)||x||V)&&Ze(()=>{O&&cn(O,P,d),x&&z.enter(D),V&&Dn(d,null,P,"mounted")},N)},F=(d,j,C,P,N)=>{if(C&&v(d,C),P)for(let B=0;B<P.length;B++)v(d,P[B]);if(N){let B=N.subTree;if(j===B){const U=N.vnode;F(d,U,U.scopeId,U.slotScopeIds,N.parent)}}},H=(d,j,C,P,N,B,U,S,D=0)=>{for(let O=D;O<d.length;O++){const L=d[O]=S?Sn(d[O]):hn(d[O]);y(null,L,j,C,P,N,B,U,S)}},M=(d,j,C,P,N,B,U)=>{const S=j.el=d.el;let{patchFlag:D,dynamicChildren:O,dirs:L}=j;D|=d.patchFlag&16;const W=d.props||Se,X=j.props||Se;let z;C&&zn(C,!1),(z=X.onVnodeBeforeUpdate)&&cn(z,C,j,d),L&&Dn(j,d,C,"beforeUpdate"),C&&zn(C,!0);const V=N&&j.type!=="foreignObject";if(O?ee(d.dynamicChildren,O,S,C,P,V,B):U||$(d,j,S,null,C,P,V,B,!1),D>0){if(D&16)he(S,j,W,X,C,P,N);else if(D&2&&W.class!==X.class&&o(S,"class",null,X.class,N),D&4&&o(S,"style",W.style,X.style,N),D&8){const x=j.dynamicProps;for(let I=0;I<x.length;I++){const G=x[I],oe=W[G],se=X[G];(se!==oe||G==="value")&&o(S,G,oe,se,N,d.children,C,P,ie)}}D&1&&d.children!==j.children&&h(S,j.children)}else!U&&O==null&&he(S,j,W,X,C,P,N);((z=X.onVnodeUpdated)||L)&&Ze(()=>{z&&cn(z,C,j,d),L&&Dn(j,d,C,"updated")},P)},ee=(d,j,C,P,N,B,U)=>{for(let S=0;S<j.length;S++){const D=d[S],O=j[S],L=D.el&&(D.type===Oe||!Et(D,O)||D.shapeFlag&70)?m(D.el):C;y(D,O,L,null,P,N,B,U,!0)}},he=(d,j,C,P,N,B,U)=>{if(C!==P){if(C!==Se)for(const S in C)!ma(S)&&!(S in P)&&o(d,S,C[S],null,U,j.children,N,B,ie);for(const S in P){if(ma(S))continue;const D=P[S],O=C[S];D!==O&&S!=="value"&&o(d,S,O,D,U,j.children,N,B,ie)}"value"in P&&o(d,"value",C.value,P.value)}},_e=(d,j,C,P,N,B,U,S,D)=>{const O=j.el=d?d.el:l(""),L=j.anchor=d?d.anchor:l("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:z}=j;z&&(S=S?S.concat(z):z),d==null?(a(O,C,P),a(L,C,P),H(j.children,C,L,N,B,U,S,D)):W>0&&W&64&&X&&d.dynamicChildren?(ee(d.dynamicChildren,X,C,N,B,U,S),(j.key!=null||N&&j===N.subTree)&&Kl(d,j,!0)):$(d,j,C,L,N,B,U,S,D)},me=(d,j,C,P,N,B,U,S,D)=>{j.slotScopeIds=S,d==null?j.shapeFlag&512?N.ctx.activate(j,C,P,U,D):ye(j,C,P,N,B,U,D):xe(d,j,D)},ye=(d,j,C,P,N,B,U)=>{const S=d.component=Zu(d,P,N);if(Pl(d)&&(S.ctx.renderer=Ie),Qu(S),S.asyncDep){if(N&&N.registerDep(S,ge),!d.el){const D=S.subTree=q(Rn);T(null,D,j,C)}return}ge(S,d,j,C,N,B,U)},xe=(d,j,C)=>{const P=j.component=d.component;if(lu(d,j,C))if(P.asyncDep&&!P.asyncResolved){A(P,j,C);return}else P.next=j,nu(P.update),P.update();else j.el=d.el,P.vnode=j},ge=(d,j,C,P,N,B,U)=>{const S=()=>{if(d.isMounted){let{next:L,bu:W,u:X,parent:z,vnode:V}=d,x=L,I;zn(d,!1),L?(L.el=V.el,A(d,L,U)):L=V,W&&ya(W),(I=L.props&&L.props.onVnodeBeforeUpdate)&&cn(I,z,L,V),zn(d,!0);const G=os(d),oe=d.subTree;d.subTree=G,y(oe,G,m(oe.el),Me(oe),d,N,B),L.el=G.el,x===null&&iu(d,G.el),X&&Ze(X,N),(I=L.props&&L.props.onVnodeUpdated)&&Ze(()=>cn(I,z,L,V),N)}else{let L;const{el:W,props:X}=j,{bm:z,m:V,parent:x}=d,I=At(j);if(zn(d,!1),z&&ya(z),!I&&(L=X&&X.onVnodeBeforeMount)&&cn(L,x,j),zn(d,!0),W&&Re){const G=()=>{d.subTree=os(d),Re(W,d.subTree,d,N,null)};I?j.type.__asyncLoader().then(()=>!d.isUnmounted&&G()):G()}else{const G=d.subTree=os(d);y(null,G,C,P,d,N,B),j.el=G.el}if(V&&Ze(V,N),!I&&(L=X&&X.onVnodeMounted)){const G=j;Ze(()=>cn(L,x,G),N)}(j.shapeFlag&256||x&&At(x.vnode)&&x.vnode.shapeFlag&256)&&d.a&&Ze(d.a,N),d.isMounted=!0,j=C=P=null}},D=d.effect=new Zs(S,()=>ao(O),d.scope),O=d.update=()=>D.run();O.id=d.uid,zn(d,!0),O()},A=(d,j,C)=>{j.component=d;const P=d.vnode.props;d.vnode=j,d.next=null,Lu(d,j.props,P,C),Du(d,j.children,C),_t(),qo(),wt()},$=(d,j,C,P,N,B,U,S,D=!1)=>{const O=d&&d.children,L=d?d.shapeFlag:0,W=j.children,{patchFlag:X,shapeFlag:z}=j;if(X>0){if(X&128){le(O,W,C,P,N,B,U,S,D);return}else if(X&256){K(O,W,C,P,N,B,U,S,D);return}}z&8?(L&16&&ie(O,N,B),W!==O&&h(C,W)):L&16?z&16?le(O,W,C,P,N,B,U,S,D):ie(O,N,B,!0):(L&8&&h(C,""),z&16&&H(W,C,P,N,B,U,S,D))},K=(d,j,C,P,N,B,U,S,D)=>{d=d||ct,j=j||ct;const O=d.length,L=j.length,W=Math.min(O,L);let X;for(X=0;X<W;X++){const z=j[X]=D?Sn(j[X]):hn(j[X]);y(d[X],z,C,null,N,B,U,S,D)}O>L?ie(d,N,B,!0,!1,W):H(j,C,P,N,B,U,S,D,W)},le=(d,j,C,P,N,B,U,S,D)=>{let O=0;const L=j.length;let W=d.length-1,X=L-1;for(;O<=W&&O<=X;){const z=d[O],V=j[O]=D?Sn(j[O]):hn(j[O]);if(Et(z,V))y(z,V,C,null,N,B,U,S,D);else break;O++}for(;O<=W&&O<=X;){const z=d[W],V=j[X]=D?Sn(j[X]):hn(j[X]);if(Et(z,V))y(z,V,C,null,N,B,U,S,D);else break;W--,X--}if(O>W){if(O<=X){const z=X+1,V=z<L?j[z].el:P;for(;O<=X;)y(null,j[O]=D?Sn(j[O]):hn(j[O]),C,V,N,B,U,S,D),O++}}else if(O>X)for(;O<=W;)ue(d[O],N,B,!0),O++;else{const z=O,V=O,x=new Map;for(O=V;O<=X;O++){const Ve=j[O]=D?Sn(j[O]):hn(j[O]);Ve.key!=null&&x.set(Ve.key,O)}let I,G=0;const oe=X-V+1;let se=!1,te=0;const De=new Array(oe);for(O=0;O<oe;O++)De[O]=0;for(O=z;O<=W;O++){const Ve=d[O];if(G>=oe){ue(Ve,N,B,!0);continue}let ln;if(Ve.key!=null)ln=x.get(Ve.key);else for(I=V;I<=X;I++)if(De[I-V]===0&&Et(Ve,j[I])){ln=I;break}ln===void 0?ue(Ve,N,B,!0):(De[ln-V]=O+1,ln>=te?te=ln:se=!0,y(Ve,j[ln],C,null,N,B,U,S,D),G++)}const kn=se?qu(De):ct;for(I=kn.length-1,O=oe-1;O>=0;O--){const Ve=V+O,ln=j[Ve],Io=Ve+1<L?j[Ve+1].el:P;De[O]===0?y(null,ln,C,Io,N,B,U,S,D):se&&(I<0||O!==kn[I]?pe(ln,C,Io,2):I--)}}},pe=(d,j,C,P,N=null)=>{const{el:B,type:U,transition:S,children:D,shapeFlag:O}=d;if(O&6){pe(d.component.subTree,j,C,P);return}if(O&128){d.suspense.move(j,C,P);return}if(O&64){U.move(d,j,C,Ie);return}if(U===Oe){a(B,j,C);for(let W=0;W<D.length;W++)pe(D[W],j,C,P);a(d.anchor,j,C);return}if(U===va){f(d,j,C);return}if(P!==2&&O&1&&S)if(P===0)S.beforeEnter(B),a(B,j,C),Ze(()=>S.enter(B),N);else{const{leave:W,delayLeave:X,afterLeave:z}=S,V=()=>a(B,j,C),x=()=>{W(B,()=>{V(),z&&z()})};X?X(B,V,x):x()}else a(B,j,C)},ue=(d,j,C,P=!1,N=!1)=>{const{type:B,props:U,ref:S,children:D,dynamicChildren:O,shapeFlag:L,patchFlag:W,dirs:X}=d;if(S!=null&&Ts(S,null,C,d,!0),L&256){j.ctx.deactivate(d);return}const z=L&1&&X,V=!At(d);let x;if(V&&(x=U&&U.onVnodeBeforeUnmount)&&cn(x,j,d),L&6)je(d.component,C,P);else{if(L&128){d.suspense.unmount(C,P);return}z&&Dn(d,null,j,"beforeUnmount"),L&64?d.type.remove(d,j,C,N,Ie,P):O&&(B!==Oe||W>0&&W&64)?ie(O,j,C,!1,!0):(B===Oe&&W&384||!N&&L&16)&&ie(D,j,C),P&&Y(d)}(V&&(x=U&&U.onVnodeUnmounted)||z)&&Ze(()=>{x&&cn(x,j,d),z&&Dn(d,null,j,"unmounted")},C)},Y=d=>{const{type:j,el:C,anchor:P,transition:N}=d;if(j===Oe){ve(C,P);return}if(j===va){_(d);return}const B=()=>{s(C),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(d.shapeFlag&1&&N&&!N.persisted){const{leave:U,delayLeave:S}=N,D=()=>U(C,B);S?S(d.el,B,D):D()}else B()},ve=(d,j)=>{let C;for(;d!==j;)C=g(d),s(d),d=C;s(j)},je=(d,j,C)=>{const{bum:P,scope:N,update:B,subTree:U,um:S}=d;P&&ya(P),N.stop(),B&&(B.active=!1,ue(U,d,j,C)),S&&Ze(S,j),Ze(()=>{d.isUnmounted=!0},j),j&&j.pendingBranch&&!j.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===j.pendingId&&(j.deps--,j.deps===0&&j.resolve())},ie=(d,j,C,P=!1,N=!1,B=0)=>{for(let U=B;U<d.length;U++)ue(d[U],j,C,P,N)},Me=d=>d.shapeFlag&6?Me(d.component.subTree):d.shapeFlag&128?d.suspense.next():g(d.anchor||d.el),Fe=(d,j,C)=>{d==null?j._vnode&&ue(j._vnode,null,null,!0):y(j._vnode||null,d,j,null,null,null,C),qo(),Tl(),j._vnode=d},Ie={p:y,um:ue,m:pe,r:Y,mt:ye,mc:H,pc:$,pbc:ee,n:Me,o:e};let We,Re;return n&&([We,Re]=n(Ie)),{render:Fe,hydrate:We,createApp:Iu(Fe,We)}}function zn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Uu(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Kl(e,n,t=!1){const a=e.children,s=n.children;if(re(a)&&re(s))for(let o=0;o<a.length;o++){const r=a[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=Sn(s[o]),l.el=r.el),t||Kl(r,l)),l.type===Ya&&(l.el=r.el)}}function qu(e){const n=e.slice(),t=[0];let a,s,o,r,l;const i=e.length;for(a=0;a<i;a++){const c=e[a];if(c!==0){if(s=t[t.length-1],e[s]<c){n[a]=s,t.push(a);continue}for(o=0,r=t.length-1;o<r;)l=o+r>>1,e[t[l]]<c?o=l+1:r=l;c<e[t[o]]&&(o>0&&(n[a]=t[o-1]),t[o]=a)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=n[r];return t}const Wu=e=>e.__isTeleport,Oe=Symbol.for("v-fgt"),Ya=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),$t=[];let an=null;function Z(e=!1){$t.push(an=e?null:[])}function Vu(){$t.pop(),an=$t[$t.length-1]||null}let Dt=1;function er(e){Dt+=e}function Yl(e){return e.dynamicChildren=Dt>0?an||ct:null,Vu(),Dt>0&&an&&an.push(e),e}function Q(e,n,t,a,s,o){return Yl(u(e,n,t,a,s,o,!0))}function zt(e,n,t,a,s){return Yl(q(e,n,t,a,s,!0))}function Ta(e){return e?e.__v_isVNode===!0:!1}function Et(e,n){return e.type===n.type&&e.key===n.key}const Ja="__vInternal",Jl=({key:e})=>e??null,ja=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Le(e)||Ne(e)||de(e)?{i:He,r:e,k:n,f:!!t}:e:null);function u(e,n=null,t=null,a=0,s=null,o=e===Oe?0:1,r=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Jl(n),ref:n&&ja(n),scopeId:Ga,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return l?(io(i,t),o&128&&e.normalize(i)):t&&(i.shapeFlag|=Le(t)?8:16),Dt>0&&!r&&an&&(i.patchFlag>0||o&6)&&i.patchFlag!==32&&an.push(i),i}const q=Gu;function Gu(e,n=null,t=null,a=0,s=null,o=!1){if((!e||e===cu)&&(e=Rn),Ta(e)){const l=bt(e,n,!0);return t&&io(l,t),Dt>0&&!o&&an&&(l.shapeFlag&6?an[an.indexOf(e)]=l:an.push(l)),l.patchFlag|=-2,l}if(ah(e)&&(e=e.__vccOpts),n){n=Ku(n);let{class:l,style:i}=n;l&&!Le(l)&&(n.class=Ce(l)),Ee(i)&&(jl(i)&&!re(i)&&(i=qe({},i)),n.style=An(i))}const r=Le(e)?1:hu(e)?128:Wu(e)?64:Ee(e)?4:de(e)?2:0;return u(e,n,t,a,s,r,o,!0)}function Ku(e){return e?jl(e)||Ja in e?qe({},e):e:null}function bt(e,n,t=!1){const{props:a,ref:s,patchFlag:o,children:r}=e,l=n?Nt(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Jl(l),ref:n&&n.ref?t&&s?re(s)?s.concat(ja(n)):[s,ja(n)]:ja(n):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bt(e.ssContent),ssFallback:e.ssFallback&&bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ce(e=" ",n=0){return q(Ya,null,e,n)}function lo(e,n){const t=q(va,null,e);return t.staticCount=n,t}function Ye(e="",n=!1){return n?(Z(),zt(Rn,null,e)):q(Rn,null,e)}function hn(e){return e==null||typeof e=="boolean"?q(Rn):re(e)?q(Oe,null,e.slice()):typeof e=="object"?Sn(e):q(Ya,null,String(e))}function Sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bt(e)}function io(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(re(n))t=16;else if(typeof n=="object")if(a&65){const s=n.default;s&&(s._c&&(s._d=!1),io(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!(Ja in n)?n._ctx=He:s===3&&He&&(He.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else de(n)?(n={default:n,_ctx:He},t=32):(n=String(n),a&64?(t=16,n=[ce(n)]):t=8);e.children=n,e.shapeFlag|=t}function Nt(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const s in a)if(s==="class")n.class!==a.class&&(n.class=Ce([n.class,a.class]));else if(s==="style")n.style=An([n.style,a.style]);else if(La(s)){const o=n[s],r=a[s];r&&o!==r&&!(re(o)&&o.includes(r))&&(n[s]=o?[].concat(o,r):r)}else s!==""&&(n[s]=a[s])}return n}function cn(e,n,t,a=null){rn(e,n,7,[t,a])}const Yu=Hl();let Ju=0;function Zu(e,n,t){const a=e.type,s=(n?n.appContext:e.appContext)||Yu,o={uid:Ju++,vnode:e,type:a,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ql(a,s),emitsOptions:Ol(a,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:a.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=su.bind(null,o),e.ce&&e.ce(o),o}let Pe=null;const Xu=()=>Pe||He;let co,at,nr="__VUE_INSTANCE_SETTERS__";(at=ys()[nr])||(at=ys()[nr]=[]),at.push(e=>Pe=e),co=e=>{at.length>1?at.forEach(n=>n(e)):at[0](e)};const mt=e=>{co(e),e.scope.on()},Jn=()=>{Pe&&Pe.scope.off(),co(null)};function Zl(e){return e.vnode.shapeFlag&4}let Ht=!1;function Qu(e,n=!1){Ht=n;const{props:t,children:a}=e.vnode,s=Zl(e);Pu(e,t,s,n),Fu(e,a);const o=s?eh(e,n):void 0;return Ht=!1,o}function eh(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=qa(new Proxy(e.ctx,xu));const{setup:a}=t;if(a){const s=e.setupContext=a.length>1?Ql(e):null;mt(e),_t();const o=Mn(a,e,0,[e.props,s]);if(wt(),Jn(),el(o)){if(o.then(Jn,Jn),n)return o.then(r=>{tr(e,r,n)}).catch(r=>{Wa(r,e,0)});e.asyncDep=o}else tr(e,o,n)}else Xl(e,n)}function tr(e,n,t){de(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ee(n)&&(e.setupState=kl(n)),Xl(e,t)}let ar;function Xl(e,n,t){const a=e.type;if(!e.render){if(!n&&ar&&!a.render){const s=a.template||oo(e).template;if(s){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:l,compilerOptions:i}=a,c=qe(qe({isCustomElement:o,delimiters:l},r),i);a.render=ar(s,c)}}e.render=a.render||on}{mt(e),_t();try{Tu(e)}finally{wt(),Jn()}}}function nh(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Xe(e,"get","$attrs"),n[t]}}))}function Ql(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return nh(e)},slots:e.slots,emit:e.emit,expose:n}}function Za(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(kl(qa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Ot)return Ot[t](e)},has(n,t){return t in n||t in Ot}}))}function th(e,n=!0){return de(e)?e.displayName||e.name:e.name||n&&e.__name}function ah(e){return de(e)&&"__vccOpts"in e}const ze=(e,n)=>Xc(e,n,Ht);function sh(e,n,t){const a=arguments.length;return a===2?Ee(n)&&!re(n)?Ta(n)?q(e,null,[n]):q(e,n):q(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Ta(t)&&(t=[t]),q(e,n,t))}const oh=Symbol.for("v-scx"),rh=()=>ae(oh),lh="3.3.8",ih="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,sr=Un&&Un.createElement("template"),ch={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const s=n?Un.createElementNS(ih,e):Un.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>Un.createTextNode(e),createComment:e=>Un.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Un.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,s,o){const r=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{sr.innerHTML=a?`<svg>${e}</svg>`:e;const l=sr.content;if(a){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}n.insertBefore(l,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},uh=Symbol("_vtc");function hh(e,n,t){const a=e[uh];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const gh=Symbol("_vod");function ph(e,n,t){const a=e.style,s=Le(t);if(t&&!s){if(n&&!Le(n))for(const o in n)t[o]==null&&As(a,o,"");for(const o in t)As(a,o,t[o])}else{const o=a.display;s?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),gh in e&&(a.display=o)}}const or=/\s*!important$/;function As(e,n,t){if(re(t))t.forEach(a=>As(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=dh(e,n);or.test(t)?e.setProperty(jt(a),t.replace(or,""),"important"):e[a]=t}}const rr=["Webkit","Moz","ms"],is={};function dh(e,n){const t=is[n];if(t)return t;let a=dn(n);if(a!=="filter"&&a in e)return is[n]=a;a=Da(a);for(let s=0;s<rr.length;s++){const o=rr[s]+a;if(o in e)return is[n]=o}return n}const lr="http://www.w3.org/1999/xlink";function fh(e,n,t,a,s){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(lr,n.slice(6,n.length)):e.setAttributeNS(lr,n,t);else{const o=jc(n);t==null||o&&!al(t)?e.removeAttribute(n):e.setAttribute(n,o?"":t)}}function bh(e,n,t,a,s,o,r){if(n==="innerHTML"||n==="textContent"){a&&r(a,s,o),e[n]=t??"";return}const l=e.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=t;const c=l==="OPTION"?e.getAttribute("value"):e.value,h=t??"";c!==h&&(e.value=h),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=al(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}function qn(e,n,t,a){e.addEventListener(n,t,a)}function mh(e,n,t,a){e.removeEventListener(n,t,a)}const ir=Symbol("_vei");function yh(e,n,t,a,s=null){const o=e[ir]||(e[ir]={}),r=o[n];if(a&&r)r.value=a;else{const[l,i]=vh(n);if(a){const c=o[n]=wh(a,s);qn(e,l,c,i)}else r&&(mh(e,l,r,i),o[n]=void 0)}}const cr=/(?:Once|Passive|Capture)$/;function vh(e){let n;if(cr.test(e)){n={};let a;for(;a=e.match(cr);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),n]}let cs=0;const jh=Promise.resolve(),_h=()=>cs||(jh.then(()=>cs=0),cs=Date.now());function wh(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;rn(kh(a,t.value),n,5,[a])};return t.value=e,t.attached=_h(),t}function kh(e,n){if(re(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>s=>!s._stopped&&a&&a(s))}else return n}const ur=/^on[a-z]/,xh=(e,n,t,a,s=!1,o,r,l,i)=>{n==="class"?hh(e,a,s):n==="style"?ph(e,t,a):La(n)?Gs(n)||yh(e,n,t,a,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Eh(e,n,a,s))?bh(e,n,a,o,r,l,i):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),fh(e,n,a,s))};function Eh(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&ur.test(n)&&de(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||ur.test(n)&&Le(t)?!1:n in e}const Aa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return re(n)?t=>ya(n,t):n};function Ch(e){e.target.composing=!0}function hr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const gt=Symbol("_assign"),st={created(e,{modifiers:{lazy:n,trim:t,number:a}},s){e[gt]=Aa(s);const o=a||s.props&&s.props.type==="number";qn(e,n?"change":"input",r=>{if(r.target.composing)return;let l=e.value;t&&(l=l.trim()),o&&(l=ms(l)),e[gt](l)}),t&&qn(e,"change",()=>{e.value=e.value.trim()}),n||(qn(e,"compositionstart",Ch),qn(e,"compositionend",hr),qn(e,"change",hr))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:s}},o){if(e[gt]=Aa(o),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(s||e.type==="number")&&ms(e.value)===n))return;const r=n??"";e.value!==r&&(e.value=r)}},Sh={deep:!0,created(e,n,t){e[gt]=Aa(t),qn(e,"change",()=>{const a=e._modelValue,s=Th(e),o=e.checked,r=e[gt];if(re(a)){const l=sl(a,s),i=l!==-1;if(o&&!i)r(a.concat(s));else if(!o&&i){const c=[...a];c.splice(l,1),r(c)}}else if(Ba(a)){const l=new Set(a);o?l.add(s):l.delete(s),r(l)}else r(ei(e,o))})},mounted:gr,beforeUpdate(e,n,t){e[gt]=Aa(t),gr(e,n,t)}};function gr(e,{value:n,oldValue:t},a){e._modelValue=n,re(n)?e.checked=sl(n,a.props.value)>-1:Ba(n)?e.checked=n.has(a.props.value):n!==t&&(e.checked=za(n,ei(e,!0)))}function Th(e){return"_value"in e?e._value:e.value}function ei(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Ah=qe({patchProp:xh},ch);let pr;function Oh(){return pr||(pr=zu(Ah))}const $h=(...e)=>{const n=Oh().createApp(...e),{mount:t}=n;return n.mount=a=>{const s=Nh(a);if(!s)return;const o=n._component;!de(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},n};function Nh(e){return Le(e)?document.querySelector(e):e}var Mh=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ni;const Xa=e=>ni=e,ti=Symbol();function Os(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Mt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Mt||(Mt={}));function Ih(){const e=ll(!0),n=e.run(()=>we({}));let t=[],a=[];const s=qa({install(o){Xa(s),s._a=o,o.provide(ti,s),o.config.globalProperties.$pinia=s,a.forEach(r=>t.push(r)),a=[]},use(o){return!this._a&&!Mh?a.push(o):t.push(o),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return s}const ai=()=>{};function dr(e,n,t,a=ai){e.push(n);const s=()=>{const o=e.indexOf(n);o>-1&&(e.splice(o,1),a())};return!t&&il()&&kc(s),s}function ot(e,...n){e.slice().forEach(t=>{t(...n)})}const Rh=e=>e();function $s(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,a)=>e.set(a,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const a=n[t],s=e[t];Os(s)&&Os(a)&&e.hasOwnProperty(t)&&!Ne(a)&&!Nn(a)?e[t]=$s(s,a):e[t]=a}return e}const Ph=Symbol();function Lh(e){return!Os(e)||!e.hasOwnProperty(Ph)}const{assign:Cn}=Object;function Bh(e){return!!(Ne(e)&&e.effect)}function Fh(e,n,t,a){const{state:s,actions:o,getters:r}=n,l=t.state.value[e];let i;function c(){l||(t.state.value[e]=s?s():{});const h=xl(t.state.value[e]);return Cn(h,o,Object.keys(r||{}).reduce((m,g)=>(m[g]=qa(ze(()=>{Xa(t);const v=t._s.get(e);return r[g].call(v,v)})),m),{}))}return i=si(e,c,n,t,a,!0),i}function si(e,n,t={},a,s,o){let r;const l=Cn({actions:{}},t),i={deep:!0};let c,h,m=[],g=[],v;const w=a.state.value[e];!o&&!w&&(a.state.value[e]={}),we({});let y;function k(H){let M;c=h=!1,typeof H=="function"?(H(a.state.value[e]),M={type:Mt.patchFunction,storeId:e,events:v}):($s(a.state.value[e],H),M={type:Mt.patchObject,payload:H,storeId:e,events:v});const ee=y=Symbol();Cl().then(()=>{y===ee&&(c=!0)}),h=!0,ot(m,M,a.state.value[e])}const T=o?function(){const{state:M}=t,ee=M?M():{};this.$patch(he=>{Cn(he,ee)})}:ai;function b(){r.stop(),m=[],g=[],a._s.delete(e)}function f(H,M){return function(){Xa(a);const ee=Array.from(arguments),he=[],_e=[];function me(ge){he.push(ge)}function ye(ge){_e.push(ge)}ot(g,{args:ee,name:H,store:E,after:me,onError:ye});let xe;try{xe=M.apply(this&&this.$id===e?this:E,ee)}catch(ge){throw ot(_e,ge),ge}return xe instanceof Promise?xe.then(ge=>(ot(he,ge),ge)).catch(ge=>(ot(_e,ge),Promise.reject(ge))):(ot(he,xe),xe)}}const _={_p:a,$id:e,$onAction:dr.bind(null,g),$patch:k,$reset:T,$subscribe(H,M={}){const ee=dr(m,H,M.detached,()=>he()),he=r.run(()=>Yn(()=>a.state.value[e],_e=>{(M.flush==="sync"?h:c)&&H({storeId:e,type:Mt.direct,events:v},_e)},Cn({},i,M)));return ee},$dispose:b},E=Ua(_);a._s.set(e,E);const F=(a._a&&a._a.runWithContext||Rh)(()=>a._e.run(()=>(r=ll()).run(n)));for(const H in F){const M=F[H];if(Ne(M)&&!Bh(M)||Nn(M))o||(w&&Lh(M)&&(Ne(M)?M.value=w[H]:$s(M,w[H])),a.state.value[e][H]=M);else if(typeof M=="function"){const ee=f(H,M);F[H]=ee,l.actions[H]=M}}return Cn(E,F),Cn(be(E),F),Object.defineProperty(E,"$state",{get:()=>a.state.value[e],set:H=>{k(M=>{Cn(M,H)})}}),a._p.forEach(H=>{Cn(E,r.run(()=>H({store:E,app:a._a,pinia:a,options:l})))}),w&&o&&t.hydrate&&t.hydrate(E.$state,w),c=!0,h=!0,E}function Dh(e,n,t){let a,s;const o=typeof n=="function";typeof e=="string"?(a=e,s=o?t:n):(s=e,a=e.id);function r(l,i){const c=Ru();return l=l||(c?ae(ti,null):null),l&&Xa(l),l=ni,l._s.has(a)||(o?si(a,n,s,l):Fh(a,s,l)),l._s.get(a)}return r.$id=a,r}const zh="@wdns/vue-code-block",oi="2.2.14",Hh="Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.",Uh={access:"public"},qh="dist/vue-code-block.cjs.js",Wh="dist/vue-code-block.es.js",Vh="dist/types/index.d.ts",Gh={dev:"vite",watch:"pnpm dev",play:"sh src/playground/configs/build.sh && NODE_ENV=playground vite",sass:"sass --watch --no-source-map src/plugin/themes/scss/:src/plugin/themes/css","sass:min":"sass --style compressed --watch --no-source-map src/plugin/themes/scss/:src/plugin/themes/css/min",build:"vue-tsc && vite build --config vite.build.config.ts","build:docs":"vite build",predeploy:"npm run build",deploy:"gh-pages -d docs",prepublishOnly:"npm run build",lint:"eslint src/**/*.{ts,vue} --max-warnings 4",prepare:"husky install"},Kh="pnpm@7.14.2",Yh="WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)",Jh=[{type:"paypal",url:"https://paypal.me/webdevnerdstuff"},{type:"patreon",url:"https://www.patreon.com/WebDevNerdStuff"}],Zh="MIT",Xh=["dist/*","LICENSE.md","README.md"],Qh="https://github.com/webdevnerdstuff/vue-code-block",eg={url:"https://github.com/webdevnerdstuff/vue-code-block/issues"},ng="https://webdevnerdstuff.github.io/vue-code-block/",tg=["vue-code-block","code","pre","highlight","syntax","vue","vue3","prism","prismjs","highlightjs","highlight.js","component","javascript","typescript","neon bunny","webdevnerdstuff","wdns"],ag={"highlight.js":"^11.8.0",prismjs:"^1.29.0","ua-parser-js":"^1.0.35",vue:"^3.3.4"},sg={"@babel/core":"^7.23.3","@babel/eslint-parser":"^7.23.3","@fortawesome/fontawesome-svg-core":"^6.4.2","@fortawesome/free-brands-svg-icons":"^6.4.2","@fortawesome/free-solid-svg-icons":"^6.4.2","@fortawesome/vue-fontawesome":"^3.0.5","@rollup/plugin-alias":"^5.0.1","@rollup/plugin-commonjs":"^25.0.7","@rollup/plugin-json":"^6.0.1","@rollup/plugin-node-resolve":"^15.2.3","@rollup/plugin-terser":"^0.4.4","@types/node":"^20.9.0","@types/prismjs":"^1.26.3","@typescript-eslint/eslint-plugin":"^6.10.0","@typescript-eslint/parser":"^6.10.0","@vitejs/plugin-vue":"^4.4.1","@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-eslint":"^5.0.8","@vue/cli-service":"^5.0.8","@vue/compiler-sfc":"^3.3.8","@vue/eslint-config-typescript":"^12.0.0",autoprefixer:"^10.4.16",eslint:"^8.53.0","eslint-config-prettier":"^9.0.0","eslint-plugin-import":"^2.29.0","eslint-plugin-prettier":"^5.0.1","eslint-plugin-vue":"^9.18.1","gh-pages":"^6.0.0",husky:"^8.0.3","lint-staged":"^15.0.2",pinia:"^2.1.7",postcss:"^8.4.31","postcss-html":"^1.5.0","postcss-scss":"^4.0.9",prettier:"^3.0.3",rollup:"^3.26.3","rollup-plugin-copy":"^3.5.0","rollup-plugin-polyfill-node":"^0.12.0","rollup-plugin-postcss":"^4.0.2","rollup-plugin-scss":"^4.0.0","rollup-plugin-typescript2":"^0.36.0",sass:"^1.69.5",stylelint:"^15.11.0","stylelint-config-standard":"^34.0.0","stylelint-order":"^6.0.2","stylelint-scss":"^5.3.1",typescript:"^5.2.2","unplugin-auto-import":"^0.16.7",vite:"^4.5.0","vite-plugin-babel":"^1.1.3","vite-plugin-css-injected-by-js":"^3.3.0","vite-plugin-dts":"^3.6.3","vite-plugin-eslint":"^1.8.1","vite-plugin-static-copy":"^0.17.0","vite-plugin-stylelint":"^5.2.0","vue-tsc":"^1.8.22"},uo={name:zh,version:oi,description:Hh,private:!1,publishConfig:Uh,main:qh,module:Wh,types:Vh,scripts:Gh,packageManager:Kh,"lint-staged":{"src/**/*.{js,ts,vue}":["npm run lint"]},author:Yh,funding:Jh,license:Zh,files:Xh,repository:Qh,bugs:eg,homepage:ng,keywords:tg,dependencies:ag,devDependencies:sg},og=[{label:"Default",value:"default"},{label:"Coy",value:"coy"},{label:"Dark",value:"dark"},{label:"Funky",value:"funky"},{label:"Night Owl (Prism Themes Repo)",value:"themes-night-owl"},{label:"Okaidia",value:"okaidia"},{label:"Solarizedlight",value:"solarizedlight"},{label:"Tomorrow",value:"tomorrow"},{label:"Twilight",value:"twilight"}],rg=[{label:"Default",value:"default"},{label:"A11y Dark",value:"a11y-dark"},{label:"A11y Light",value:"a11y-light"},{label:"Agate",value:"agate"},{label:"An Old Hope",value:"an-old-hope"},{label:"Android Studio",value:"androidstudio"},{label:"Arduino Light",value:"arduino-light"},{label:"Arta",value:"arta"},{label:"Ascetic",value:"ascetic"},{label:"Atom One Dark Reasonable",value:"atom-one-dark-reasonable"},{label:"Atom One Dark",value:"atom-one-dark"},{label:"Atom One Light",value:"atom-one-light"},{label:"Brown Paper",value:"brown-paper"},{label:"Base16 One Dark",value:"base16-onedark"},{label:"CodePen Embed",value:"codepen-embed"},{label:"Color Brewer",value:"color-brewer"},{label:"Dark",value:"dark"},{label:"DeviBeans",value:"devibeans"},{label:"Docco",value:"docco"},{label:"Far",value:"far"},{label:"Felipec",value:"felipec"},{label:"Foundation",value:"foundation"},{label:"Github Dark Dimmed",value:"github-dark-dimmed"},{label:"Github Dark",value:"github-dark"},{label:"Github",value:"github"},{label:"GML",value:"gml"},{label:"Google Code",value:"googlecode"},{label:"Gradient Dark",value:"gradient-dark"},{label:"Gradient Light",value:"gradient-light"},{label:"Grayscale",value:"grayscale"},{label:"Hybrid",value:"hybrid"},{label:"Idea",value:"idea"},{label:"IntelliJ Light",value:"intellij-light"},{label:"IR Black",value:"ir-black"},{label:"ISBL Editor Dark",value:"isbl-editor-dark"},{label:"ISBL Editor Light",value:"isbl-editor-light"},{label:"Kimbie Dark",value:"kimbie-dark"},{label:"Kimbie Light",value:"kimbie-light"},{label:"Lightfair",value:"lightfair"},{label:"Lioshi",value:"lioshi"},{label:"Magula",value:"magula"},{label:"Mono Blue",value:"mono-blue"},{label:"Monokai Sublime",value:"monokai-sublime"},{label:"Monokai",value:"monokai"},{label:"Night Owl",value:"night-owl"},{label:"NNFX Dark",value:"nnfx-dark"},{label:"NNFX- Light",value:"nnfx-light"},{label:"Nord",value:"nord"},{label:"Obsidian",value:"obsidian"},{label:"Panda Syntax Dark",value:"panda-syntax-dark"},{label:"Panda Syntax Light",value:"panda-syntax-light"},{label:"Paraiso Dark",value:"paraiso-dark"},{label:"Paraiso Light",value:"paraiso-light"},{label:"Pojoaque",value:"pojoaque"},{label:"PureBasic",value:"purebasic"},{label:"Qt Creator Dark",value:"qtcreator-dark"},{label:"Qt Creator Light",value:"qtcreator-light"},{label:"Rainbow",value:"rainbow"},{label:"RouterOS",value:"routeros"},{label:"School Book",value:"school-book"},{label:"Shades of Purple",value:"shades-of-purple"},{label:"Srcery",value:"srcery"},{label:"Stack Overflow Dark",value:"stackoverflow-dark"},{label:"Stack Overflow Light",value:"stackoverflow-light"},{label:"Sunburst",value:"sunburst"},{label:"Tokyo Night Dark",value:"tokyo-night-dark"},{label:"Tokyo Night Light",value:"tokyo-night-light"},{label:"Tomorrow Night Blue",value:"tomorrow-night-blue"},{label:"Tomorrow Night Bright",value:"tomorrow-night-bright"},{label:"VS",value:"vs"},{label:"VS 2015",value:"vs2015"},{label:"Xcode",value:"xcode"},{label:"xt256",value:"xt256"}],ri=uo.dependencies,li=uo.name,lg=li.split("/")[1],fr=ri.prismjs.replace("^",""),br=ri["highlight.js"].replace("^",""),ra=`https://github.com/webdevnerdstuff/${lg}`,ig={changeLog:`${ra}/blob/main/CHANGELOG.md`,contribute:`${ra}/tree/main/src/plugin/styles`,github:ra,githubProfile:"https://github.com/webdevnerdstuff",license:`${ra}/blob/main/LICENSE.md`,neonBunnyTheme:"https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny",npm:`https://www.npmjs.com/package/${li}`,uaParser:"https://www.npmjs.com/package/ua-parser-js",vueJs:"https://vuejs.org/"},cg={cdn:`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${br}/build/styles/`,homepage:"https://highlightjs.org/",themes:`https://github.com/highlightjs/highlight.js/tree/${br}/src/styles`},ug={cdn:`https://cdn.jsdelivr.net/gh/PrismJS/prism@${fr}/themes/`,homepage:"https://prismjs.com/",prismThemes:`https://github.com/PrismJS/prism/tree/v${fr}/themes`,themes:"https://github.com/PrismJS/prism-themes"},hg={prism:{label:"PrismJS",id:"prism"},highlightjs:{label:"Highlight.js",id:"highlightjs"}},gg=[{label:"Neon Bunny",value:"neon-bunny"},{label:"Neon Bunny - Carrot",value:"neon-bunny-carrot"}],ho=Dh("core",{actions:{setLocalStorage(e){const n=localStorage.getItem(this.storageName),t=e??n;return localStorage.setItem(this.storageName,t),t},setTheme(e,n){let t=e;return t==="toggle"&&(t=n!=="dark"?"dark":"light"),document.documentElement.setAttribute("data-bs-theme",t),localStorage.setItem("theme",t),t}},getters:{getLocalStorage:e=>()=>localStorage.getItem(e.storageName)},state:()=>({highlightJsLinks:cg,highlightThemes:rg,libraries:hg,links:ig,neonBunnyThemes:gg,package:uo,prismLinks:ug,prismThemes:og,storageName:"vue-code-block-library"})}),pg="/vue-code-block/assets/vue-5532db34.svg",dg={class:"row mb-5"},fg=u("h2",null,"Change Log",-1),bg=[fg],mg={class:"col-12"},yg=["href"],vg={__name:"ChangeLogSection",setup(e){const n=ae("styleData"),t=ae("links");return(a,s)=>(Z(),Q("div",dg,[u("div",{class:Ce(p(n).h2ColClass)},bg,2),u("div",mg,[u("a",{href:p(t).changeLog,target:"_blank"},"CHANGELOG.md",8,yg)])]))}};const go=(e,n)=>{const t=e.__vccOpts||e;for(const[a,s]of n)t[a]=s;return t},po=e=>($l("data-v-465828f6"),e=e(),Nl(),e),jg={class:"row mb-5"},_g=po(()=>u("h2",null,"CSS Variables",-1)),wg=[_g],kg=po(()=>u("div",{class:"col-12 mb-3"},[u("p",null,[ce(" You can find all CSS variables defined in the "),u("code",null,"src/plugin/styles/cssVariables.css"),ce(" file. Colors are using "),u("code",null,"hsl"),ce(" values. ")])],-1)),xg={class:"col-12 mb-3"},Eg={class:"table-responsive"},Cg={class:"table"},Sg=po(()=>u("thead",null,[u("tr",null,[u("th",{width:"auto"},"Name"),u("th",null,"Value")])],-1)),Tg={key:0,class:"text-success-emphasis bg-success-subtle"},Ag={colspan:"2"},Og={key:0,class:"text-dark-emphasis bg-dark-subtle",colspan:"2",valign:"top"},$g={class:"td-nowrap",valign:"top"},Ng={key:0},Mg={key:1,valign:"top"},Ig={key:2,valign:"top"},Rg={__name:"CssVariablesSection",setup(e){const n=ae("styleData"),t=[{name:"Neon Bunny Theme Colors",header:!0,items:[{name:"neon-bunny",subHeader:!0},{name:"--v-cb-tab-neon-bunny",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-icon",hsl:"207 100% 52%"},{name:"--v-cb-tab-neon-bunny-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-icon-failed",hsl:"3 100% 58%"},{name:"neon-bunny-carrot",subHeader:!0},{name:"--v-cb-tab-neon-bunny-carrot",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-carrot-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-carrot-icon",hsl:"292 100% 50%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-failed",hsl:"3 100% 58%"}]}];return(a,s)=>(Z(),Q("div",jg,[u("div",{class:Ce(p(n).h2ColClass)},wg,2),kg,u("div",xg,[u("div",Eg,[u("table",Cg,[Sg,(Z(),Q(Oe,null,Qn(t,o=>u("tbody",{key:o.name},[o.header?(Z(),Q("tr",Tg,[u("th",Ag,ke(o.name),1)])):Ye("",!0),(Z(!0),Q(Oe,null,Qn(o.items,r=>(Z(),Q("tr",{key:r},[r.subHeader?(Z(),Q("td",Og,[u("strong",null,[u("em",null,ke(r.name),1)])])):(Z(),Q(Oe,{key:1},[u("td",$g,ke(r.name),1),r.hsl?(Z(),Q("td",Ng,[r.hsl?(Z(),Q("span",{key:0,class:"color-swatch",style:An(`background-color: hsl(${r.hsl});`)},null,4)):Ye("",!0),ce(" "+ke(r.hsl),1)])):r.code?(Z(),Q("td",Mg,[u("code",null,ke(r.code),1)])):(Z(),Q("td",Ig,ke(r.value),1))],64))]))),128))])),64))])])])]))}},Pg=go(Rg,[["__scopeId","data-v-465828f6"]]),Lg={class:"row mb-5"},Bg=u("h2",null,"Dependencies",-1),Fg=[Bg],Dg={class:"col-12"},zg=["href"],Hg=u("br",null,null,-1),Ug=["href"],qg=u("br",null,null,-1),Wg=["href"],Vg=u("br",null,null,-1),Gg=["href"],Kg={__name:"DependenciesSection",setup(e){const n=ae("highlightJsLinks"),t=ae("links"),a=ae("prismLinks"),s=ae("styleData");return(o,r)=>(Z(),Q("div",Lg,[u("div",{class:Ce(p(s).h2ColClass)},Fg,2),u("div",Dg,[u("a",{href:p(a).homepage,target:"_blank"},"PrismJS",8,zg),Hg,u("a",{href:p(n).homepage,target:"_blank"},"Highlight.js",8,Ug),qg,u("a",{href:p(t).vueJs,target:"_blank"},"Vue 3",8,Wg),Vg,u("a",{href:p(t).uaParser,target:"_blank"},"UAParser.js",8,Gg)])]))}};var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ii={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,r={},l={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function b(f){return f instanceof i?new i(f.type,b(f.content),f.alias):Array.isArray(f)?f.map(b):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(f,_){_=_||{};var E,R;switch(l.util.type(f)){case"Object":if(R=l.util.objId(f),_[R])return _[R];E={},_[R]=E;for(var F in f)f.hasOwnProperty(F)&&(E[F]=b(f[F],_));return E;case"Array":return R=l.util.objId(f),_[R]?_[R]:(E=[],_[R]=E,f.forEach(function(H,M){E[M]=b(H,_)}),E);default:return f}},getLanguage:function(b){for(;b;){var f=s.exec(b.className);if(f)return f[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,f){b.className=b.className.replace(RegExp(s,"gi"),""),b.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(b){var f=document.getElementsByTagName("script");for(var _ in f)if(f[_].src==b)return f[_]}return null}},isActive:function(b,f,_){for(var E="no-"+f;b;){var R=b.classList;if(R.contains(f))return!0;if(R.contains(E))return!1;b=b.parentElement}return!!_}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(b,f){var _=l.util.clone(l.languages[b]);for(var E in f)_[E]=f[E];return _},insertBefore:function(b,f,_,E){E=E||l.languages;var R=E[b],F={};for(var H in R)if(R.hasOwnProperty(H)){if(H==f)for(var M in _)_.hasOwnProperty(M)&&(F[M]=_[M]);_.hasOwnProperty(H)||(F[H]=R[H])}var ee=E[b];return E[b]=F,l.languages.DFS(l.languages,function(he,_e){_e===ee&&he!=b&&(this[he]=F)}),F},DFS:function b(f,_,E,R){R=R||{};var F=l.util.objId;for(var H in f)if(f.hasOwnProperty(H)){_.call(f,H,f[H],E||H);var M=f[H],ee=l.util.type(M);ee==="Object"&&!R[F(M)]?(R[F(M)]=!0,b(M,_,null,R)):ee==="Array"&&!R[F(M)]&&(R[F(M)]=!0,b(M,_,H,R))}}},plugins:{},highlightAll:function(b,f){l.highlightAllUnder(document,b,f)},highlightAllUnder:function(b,f,_){var E={callback:_,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),l.hooks.run("before-all-elements-highlight",E);for(var R=0,F;F=E.elements[R++];)l.highlightElement(F,f===!0,E.callback)},highlightElement:function(b,f,_){var E=l.util.getLanguage(b),R=l.languages[E];l.util.setLanguage(b,E);var F=b.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(F,E);var H=b.textContent,M={element:b,language:E,grammar:R,code:H};function ee(_e){M.highlightedCode=_e,l.hooks.run("before-insert",M),M.element.innerHTML=M.highlightedCode,l.hooks.run("after-highlight",M),l.hooks.run("complete",M),_&&_.call(M.element)}if(l.hooks.run("before-sanity-check",M),F=M.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!M.code){l.hooks.run("complete",M),_&&_.call(M.element);return}if(l.hooks.run("before-highlight",M),!M.grammar){ee(l.util.encode(M.code));return}if(f&&a.Worker){var he=new Worker(l.filename);he.onmessage=function(_e){ee(_e.data)},he.postMessage(JSON.stringify({language:M.language,code:M.code,immediateClose:!0}))}else ee(l.highlight(M.code,M.grammar,M.language))},highlight:function(b,f,_){var E={code:b,grammar:f,language:_};if(l.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=l.tokenize(E.code,E.grammar),l.hooks.run("after-tokenize",E),i.stringify(l.util.encode(E.tokens),E.language)},tokenize:function(b,f){var _=f.rest;if(_){for(var E in _)f[E]=_[E];delete f.rest}var R=new m;return g(R,R.head,b),h(b,R,f,R.head,0),w(R)},hooks:{all:{},add:function(b,f){var _=l.hooks.all;_[b]=_[b]||[],_[b].push(f)},run:function(b,f){var _=l.hooks.all[b];if(!(!_||!_.length))for(var E=0,R;R=_[E++];)R(f)}},Token:i};a.Prism=l;function i(b,f,_,E){this.type=b,this.content=f,this.alias=_,this.length=(E||"").length|0}i.stringify=function b(f,_){if(typeof f=="string")return f;if(Array.isArray(f)){var E="";return f.forEach(function(ee){E+=b(ee,_)}),E}var R={type:f.type,content:b(f.content,_),tag:"span",classes:["token",f.type],attributes:{},language:_},F=f.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(R.classes,F):R.classes.push(F)),l.hooks.run("wrap",R);var H="";for(var M in R.attributes)H+=" "+M+'="'+(R.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+R.tag+' class="'+R.classes.join(" ")+'"'+H+">"+R.content+"</"+R.tag+">"};function c(b,f,_,E){b.lastIndex=f;var R=b.exec(_);if(R&&E&&R[1]){var F=R[1].length;R.index+=F,R[0]=R[0].slice(F)}return R}function h(b,f,_,E,R,F){for(var H in _)if(!(!_.hasOwnProperty(H)||!_[H])){var M=_[H];M=Array.isArray(M)?M:[M];for(var ee=0;ee<M.length;++ee){if(F&&F.cause==H+","+ee)return;var he=M[ee],_e=he.inside,me=!!he.lookbehind,ye=!!he.greedy,xe=he.alias;if(ye&&!he.pattern.global){var ge=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,ge+"g")}for(var A=he.pattern||he,$=E.next,K=R;$!==f.tail&&!(F&&K>=F.reach);K+=$.value.length,$=$.next){var le=$.value;if(f.length>b.length)return;if(!(le instanceof i)){var pe=1,ue;if(ye){if(ue=c(A,K,b,me),!ue||ue.index>=b.length)break;var ie=ue.index,Y=ue.index+ue[0].length,ve=K;for(ve+=$.value.length;ie>=ve;)$=$.next,ve+=$.value.length;if(ve-=$.value.length,K=ve,$.value instanceof i)continue;for(var je=$;je!==f.tail&&(ve<Y||typeof je.value=="string");je=je.next)pe++,ve+=je.value.length;pe--,le=b.slice(K,ve),ue.index-=K}else if(ue=c(A,0,le,me),!ue)continue;var ie=ue.index,Me=ue[0],Fe=le.slice(0,ie),Ie=le.slice(ie+Me.length),We=K+le.length;F&&We>F.reach&&(F.reach=We);var Re=$.prev;Fe&&(Re=g(f,Re,Fe),K+=Fe.length),v(f,Re,pe);var d=new i(H,_e?l.tokenize(Me,_e):Me,xe,Me);if($=g(f,Re,d),Ie&&g(f,$,Ie),pe>1){var j={cause:H+","+ee,reach:We};h(b,f,_,$.prev,K,j),F&&j.reach>F.reach&&(F.reach=j.reach)}}}}}}function m(){var b={value:null,prev:null,next:null},f={value:null,prev:b,next:null};b.next=f,this.head=b,this.tail=f,this.length=0}function g(b,f,_){var E=f.next,R={value:_,prev:f,next:E};return f.next=R,E.prev=R,b.length++,R}function v(b,f,_){for(var E=f.next,R=0;R<_&&E!==b.tail;R++)E=E.next;f.next=E,E.prev=f,b.length-=R}function w(b){for(var f=[],_=b.head.next;_!==b.tail;)f.push(_.value),_=_.next;return f}if(!a.document)return a.addEventListener&&(l.disableWorkerMessageHandler||a.addEventListener("message",function(b){var f=JSON.parse(b.data),_=f.language,E=f.code,R=f.immediateClose;a.postMessage(l.highlight(E,l.languages[_],_)),R&&a.close()},!1)),l;var y=l.util.currentScript();y&&(l.filename=y.src,y.hasAttribute("data-manual")&&(l.manual=!0));function k(){l.manual||l.highlightAll()}if(!l.manual){var T=document.readyState;T==="loading"||T==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return l}(n);e.exports&&(e.exports=t),typeof Ns<"u"&&(Ns.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(s,o){var r={};r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};l["language-"+o]={pattern:/[\s\S]+/,inside:t.languages[o]};var i={};i[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,s){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:t.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",s=function(y,k){return"✖ Error "+y+" while fetching file: "+k},o="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",i="loading",c="loaded",h="failed",m="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+i+'"])';function g(y,k,T){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?k(b.responseText):b.status>=400?T(s(b.status,b.statusText)):T(o))},b.send(null)}function v(y){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(k){var T=Number(k[1]),b=k[2],f=k[3];return b?f?[T,Number(f)]:[T,void 0]:[T,T]}}t.hooks.add("before-highlightall",function(y){y.selector+=", "+m}),t.hooks.add("before-sanity-check",function(y){var k=y.element;if(k.matches(m)){y.code="",k.setAttribute(l,i);var T=k.appendChild(document.createElement("CODE"));T.textContent=a;var b=k.getAttribute("data-src"),f=y.language;if(f==="none"){var _=(/\.(\w+)$/.exec(b)||[,"none"])[1];f=r[_]||_}t.util.setLanguage(T,f),t.util.setLanguage(k,f);var E=t.plugins.autoloader;E&&E.loadLanguages(f),g(b,function(R){k.setAttribute(l,c);var F=v(k.getAttribute("data-range"));if(F){var H=R.split(/\r\n?|\n/g),M=F[0],ee=F[1]==null?H.length:F[1];M<0&&(M+=H.length),M=Math.max(0,Math.min(M-1,H.length)),ee<0&&(ee+=H.length),ee=Math.max(0,Math.min(ee,H.length)),R=H.slice(M,ee).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(M+1))}T.textContent=R,t.highlightElement(T)},function(R){k.setAttribute(l,h),T.textContent=R})}}),t.plugins.fileHighlight={highlight:function(k){for(var T=(k||document).querySelectorAll(m),b=0,f;f=T[b++];)t.highlightElement(f)}};var w=!1;t.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ii);var ci=ii.exports;const Yg=fo(ci),Jg=ic({__proto__:null,default:Yg},[ci]);function ui(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&ui(t)}),e}class mr{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function hi(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function On(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const s in a)t[s]=a[s]}),t}const Zg="</span>",yr=e=>!!e.scope,Xg=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,s)=>`${a}${"_".repeat(s+1)}`)].join(" ")}return`${n}${e}`};class Qg{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=hi(n)}openNode(n){if(!yr(n))return;const t=Xg(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){yr(n)&&(this.buffer+=Zg)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const vr=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class bo{constructor(){this.rootNode=vr(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=vr({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{bo._collapse(t)}))}}class ep extends bo{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new Qg(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ut(e){return e?typeof e=="string"?e:e.source:null}function gi(e){return tt("(?=",e,")")}function np(e){return tt("(?:",e,")*")}function tp(e){return tt("(?:",e,")?")}function tt(...e){return e.map(t=>Ut(t)).join("")}function ap(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function mo(...e){return"("+(ap(e).capture?"":"?:")+e.map(a=>Ut(a)).join("|")+")"}function pi(e){return new RegExp(e.toString()+"|").exec("").length-1}function sp(e,n){const t=e&&e.exec(n);return t&&t.index===0}const op=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function yo(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const s=t;let o=Ut(a),r="";for(;o.length>0;){const l=op.exec(o);if(!l){r+=o;break}r+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?r+="\\"+String(Number(l[1])+s):(r+=l[0],l[0]==="("&&t++)}return r}).map(a=>`(${a})`).join(n)}const rp=/\b\B/,di="[a-zA-Z]\\w*",vo="[a-zA-Z_]\\w*",fi="\\b\\d+(\\.\\d+)?",bi="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",mi="\\b(0b[01]+)",lp="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ip=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=tt(n,/.*\b/,e.binary,/\b.*/)),On({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},qt={begin:"\\\\[\\s\\S]",relevance:0},cp={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[qt]},up={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[qt]},hp={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Qa=function(e,n,t={}){const a=On({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=mo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:tt(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},gp=Qa("//","$"),pp=Qa("/\\*","\\*/"),dp=Qa("#","$"),fp={scope:"number",begin:fi,relevance:0},bp={scope:"number",begin:bi,relevance:0},mp={scope:"number",begin:mi,relevance:0},yp={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[qt,{begin:/\[/,end:/\]/,relevance:0,contains:[qt]}]},vp={scope:"title",begin:di,relevance:0},jp={scope:"title",begin:vo,relevance:0},_p={begin:"\\.\\s*"+vo,relevance:0},wp=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var la=Object.freeze({__proto__:null,APOS_STRING_MODE:cp,BACKSLASH_ESCAPE:qt,BINARY_NUMBER_MODE:mp,BINARY_NUMBER_RE:mi,COMMENT:Qa,C_BLOCK_COMMENT_MODE:pp,C_LINE_COMMENT_MODE:gp,C_NUMBER_MODE:bp,C_NUMBER_RE:bi,END_SAME_AS_BEGIN:wp,HASH_COMMENT_MODE:dp,IDENT_RE:di,MATCH_NOTHING_RE:rp,METHOD_GUARD:_p,NUMBER_MODE:fp,NUMBER_RE:fi,PHRASAL_WORDS_MODE:hp,QUOTE_STRING_MODE:up,REGEXP_MODE:yp,RE_STARTERS_RE:lp,SHEBANG:ip,TITLE_MODE:vp,UNDERSCORE_IDENT_RE:vo,UNDERSCORE_TITLE_MODE:jp});function kp(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function xp(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Ep(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=kp,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Cp(e,n){Array.isArray(e.illegal)&&(e.illegal=mo(...e.illegal))}function Sp(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Tp(e,n){e.relevance===void 0&&(e.relevance=1)}const Ap=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=tt(t.beforeMatch,gi(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Op=["of","and","for","in","not","or","if","then","parent","list","value"],$p="keyword";function yi(e,n,t=$p){const a=Object.create(null);return typeof e=="string"?s(t,e.split(" ")):Array.isArray(e)?s(t,e):Object.keys(e).forEach(function(o){Object.assign(a,yi(e[o],n,o))}),a;function s(o,r){n&&(r=r.map(l=>l.toLowerCase())),r.forEach(function(l){const i=l.split("|");a[i[0]]=[o,Np(i[0],i[1])]})}}function Np(e,n){return n?Number(n):Mp(e)?0:1}function Mp(e){return Op.includes(e.toLowerCase())}const jr={},Zn=e=>{console.error(e)},_r=(e,...n)=>{console.log(`WARN: ${e}`,...n)},rt=(e,n)=>{jr[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),jr[`${e}/${n}`]=!0)},Oa=new Error;function vi(e,n,{key:t}){let a=0;const s=e[t],o={},r={};for(let l=1;l<=n.length;l++)r[l+a]=s[l],o[l+a]=!0,a+=pi(n[l-1]);e[t]=r,e[t]._emit=o,e[t]._multi=!0}function Ip(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Zn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Oa;if(typeof e.beginScope!="object"||e.beginScope===null)throw Zn("beginScope must be object"),Oa;vi(e,e.begin,{key:"beginScope"}),e.begin=yo(e.begin,{joinWith:""})}}function Rp(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Zn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Oa;if(typeof e.endScope!="object"||e.endScope===null)throw Zn("endScope must be object"),Oa;vi(e,e.end,{key:"endScope"}),e.end=yo(e.end,{joinWith:""})}}function Pp(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Lp(e){Pp(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Ip(e),Rp(e)}function Bp(e){function n(r,l){return new RegExp(Ut(r),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,i){i.position=this.position++,this.matchIndexes[this.matchAt]=i,this.regexes.push([i,l]),this.matchAt+=pi(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(i=>i[1]);this.matcherRe=n(yo(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const i=this.matcherRe.exec(l);if(!i)return null;const c=i.findIndex((m,g)=>g>0&&m!==void 0),h=this.matchIndexes[c];return i.splice(0,c),Object.assign(i,h)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const i=new t;return this.rules.slice(l).forEach(([c,h])=>i.addRule(c,h)),i.compile(),this.multiRegexes[l]=i,i}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,i){this.rules.push([l,i]),i.type==="begin"&&this.count++}exec(l){const i=this.getMatcher(this.regexIndex);i.lastIndex=this.lastIndex;let c=i.exec(l);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,c=h.exec(l)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function s(r){const l=new a;return r.contains.forEach(i=>l.addRule(i.begin,{rule:i,type:"begin"})),r.terminatorEnd&&l.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&l.addRule(r.illegal,{type:"illegal"}),l}function o(r,l){const i=r;if(r.isCompiled)return i;[xp,Sp,Lp,Ap].forEach(h=>h(r,l)),e.compilerExtensions.forEach(h=>h(r,l)),r.__beforeBegin=null,[Ep,Cp,Tp].forEach(h=>h(r,l)),r.isCompiled=!0;let c=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=yi(r.keywords,e.case_insensitive)),i.keywordPatternRe=n(c,!0),l&&(r.begin||(r.begin=/\B|\b/),i.beginRe=n(i.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(i.endRe=n(i.end)),i.terminatorEnd=Ut(i.end)||"",r.endsWithParent&&l.terminatorEnd&&(i.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(i.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(h){return Fp(h==="self"?r:h)})),r.contains.forEach(function(h){o(h,i)}),r.starts&&o(r.starts,l),i.matcher=s(i),i}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=On(e.classNameAliases||{}),o(e)}function ji(e){return e?e.endsWithParent||ji(e.starts):!1}function Fp(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return On(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:ji(e)?On(e,{starts:e.starts?On(e.starts):null}):Object.isFrozen(e)?On(e):e}var Dp="11.9.0";class zp extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const us=hi,wr=On,kr=Symbol("nomatch"),Hp=7,_i=function(e){const n=Object.create(null),t=Object.create(null),a=[];let s=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:ep};function i(A){return l.noHighlightRe.test(A)}function c(A){let $=A.className+" ";$+=A.parentNode?A.parentNode.className:"";const K=l.languageDetectRe.exec($);if(K){const le=M(K[1]);return le||(_r(o.replace("{}",K[1])),_r("Falling back to no-highlight mode for this block.",A)),le?K[1]:"no-highlight"}return $.split(/\s+/).find(le=>i(le)||M(le))}function h(A,$,K){let le="",pe="";typeof $=="object"?(le=A,K=$.ignoreIllegals,pe=$.language):(rt("10.7.0","highlight(lang, code, ...args) has been deprecated."),rt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),pe=A,le=$),K===void 0&&(K=!0);const ue={code:le,language:pe};xe("before:highlight",ue);const Y=ue.result?ue.result:m(ue.language,ue.code,K);return Y.code=ue.code,xe("after:highlight",Y),Y}function m(A,$,K,le){const pe=Object.create(null);function ue(x,I){return x.keywords[I]}function Y(){if(!S.keywords){O.addText(L);return}let x=0;S.keywordPatternRe.lastIndex=0;let I=S.keywordPatternRe.exec(L),G="";for(;I;){G+=L.substring(x,I.index);const oe=N.case_insensitive?I[0].toLowerCase():I[0],se=ue(S,oe);if(se){const[te,De]=se;if(O.addText(G),G="",pe[oe]=(pe[oe]||0)+1,pe[oe]<=Hp&&(W+=De),te.startsWith("_"))G+=I[0];else{const kn=N.classNameAliases[te]||te;ie(I[0],kn)}}else G+=I[0];x=S.keywordPatternRe.lastIndex,I=S.keywordPatternRe.exec(L)}G+=L.substring(x),O.addText(G)}function ve(){if(L==="")return;let x=null;if(typeof S.subLanguage=="string"){if(!n[S.subLanguage]){O.addText(L);return}x=m(S.subLanguage,L,!0,D[S.subLanguage]),D[S.subLanguage]=x._top}else x=v(L,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(W+=x.relevance),O.__addSublanguage(x._emitter,x.language)}function je(){S.subLanguage!=null?ve():Y(),L=""}function ie(x,I){x!==""&&(O.startScope(I),O.addText(x),O.endScope())}function Me(x,I){let G=1;const oe=I.length-1;for(;G<=oe;){if(!x._emit[G]){G++;continue}const se=N.classNameAliases[x[G]]||x[G],te=I[G];se?ie(te,se):(L=te,Y(),L=""),G++}}function Fe(x,I){return x.scope&&typeof x.scope=="string"&&O.openNode(N.classNameAliases[x.scope]||x.scope),x.beginScope&&(x.beginScope._wrap?(ie(L,N.classNameAliases[x.beginScope._wrap]||x.beginScope._wrap),L=""):x.beginScope._multi&&(Me(x.beginScope,I),L="")),S=Object.create(x,{parent:{value:S}}),S}function Ie(x,I,G){let oe=sp(x.endRe,G);if(oe){if(x["on:end"]){const se=new mr(x);x["on:end"](I,se),se.isMatchIgnored&&(oe=!1)}if(oe){for(;x.endsParent&&x.parent;)x=x.parent;return x}}if(x.endsWithParent)return Ie(x.parent,I,G)}function We(x){return S.matcher.regexIndex===0?(L+=x[0],1):(V=!0,0)}function Re(x){const I=x[0],G=x.rule,oe=new mr(G),se=[G.__beforeBegin,G["on:begin"]];for(const te of se)if(te&&(te(x,oe),oe.isMatchIgnored))return We(I);return G.skip?L+=I:(G.excludeBegin&&(L+=I),je(),!G.returnBegin&&!G.excludeBegin&&(L=I)),Fe(G,x),G.returnBegin?0:I.length}function d(x){const I=x[0],G=$.substring(x.index),oe=Ie(S,x,G);if(!oe)return kr;const se=S;S.endScope&&S.endScope._wrap?(je(),ie(I,S.endScope._wrap)):S.endScope&&S.endScope._multi?(je(),Me(S.endScope,x)):se.skip?L+=I:(se.returnEnd||se.excludeEnd||(L+=I),je(),se.excludeEnd&&(L=I));do S.scope&&O.closeNode(),!S.skip&&!S.subLanguage&&(W+=S.relevance),S=S.parent;while(S!==oe.parent);return oe.starts&&Fe(oe.starts,x),se.returnEnd?0:I.length}function j(){const x=[];for(let I=S;I!==N;I=I.parent)I.scope&&x.unshift(I.scope);x.forEach(I=>O.openNode(I))}let C={};function P(x,I){const G=I&&I[0];if(L+=x,G==null)return je(),0;if(C.type==="begin"&&I.type==="end"&&C.index===I.index&&G===""){if(L+=$.slice(I.index,I.index+1),!s){const oe=new Error(`0 width match regex (${A})`);throw oe.languageName=A,oe.badRule=C.rule,oe}return 1}if(C=I,I.type==="begin")return Re(I);if(I.type==="illegal"&&!K){const oe=new Error('Illegal lexeme "'+G+'" for mode "'+(S.scope||"<unnamed>")+'"');throw oe.mode=S,oe}else if(I.type==="end"){const oe=d(I);if(oe!==kr)return oe}if(I.type==="illegal"&&G==="")return 1;if(z>1e5&&z>I.index*3)throw new Error("potential infinite loop, way more iterations than matches");return L+=G,G.length}const N=M(A);if(!N)throw Zn(o.replace("{}",A)),new Error('Unknown language: "'+A+'"');const B=Bp(N);let U="",S=le||B;const D={},O=new l.__emitter(l);j();let L="",W=0,X=0,z=0,V=!1;try{if(N.__emitTokens)N.__emitTokens($,O);else{for(S.matcher.considerAll();;){z++,V?V=!1:S.matcher.considerAll(),S.matcher.lastIndex=X;const x=S.matcher.exec($);if(!x)break;const I=$.substring(X,x.index),G=P(I,x);X=x.index+G}P($.substring(X))}return O.finalize(),U=O.toHTML(),{language:A,value:U,relevance:W,illegal:!1,_emitter:O,_top:S}}catch(x){if(x.message&&x.message.includes("Illegal"))return{language:A,value:us($),illegal:!0,relevance:0,_illegalBy:{message:x.message,index:X,context:$.slice(X-100,X+100),mode:x.mode,resultSoFar:U},_emitter:O};if(s)return{language:A,value:us($),illegal:!1,relevance:0,errorRaised:x,_emitter:O,_top:S};throw x}}function g(A){const $={value:us(A),illegal:!1,relevance:0,_top:r,_emitter:new l.__emitter(l)};return $._emitter.addText(A),$}function v(A,$){$=$||l.languages||Object.keys(n);const K=g(A),le=$.filter(M).filter(he).map(je=>m(je,A,!1));le.unshift(K);const pe=le.sort((je,ie)=>{if(je.relevance!==ie.relevance)return ie.relevance-je.relevance;if(je.language&&ie.language){if(M(je.language).supersetOf===ie.language)return 1;if(M(ie.language).supersetOf===je.language)return-1}return 0}),[ue,Y]=pe,ve=ue;return ve.secondBest=Y,ve}function w(A,$,K){const le=$&&t[$]||K;A.classList.add("hljs"),A.classList.add(`language-${le}`)}function y(A){let $=null;const K=c(A);if(i(K))return;if(xe("before:highlightElement",{el:A,language:K}),A.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",A);return}if(A.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(A)),l.throwUnescapedHTML))throw new zp("One of your code blocks includes unescaped HTML.",A.innerHTML);$=A;const le=$.textContent,pe=K?h(le,{language:K,ignoreIllegals:!0}):v(le);A.innerHTML=pe.value,A.dataset.highlighted="yes",w(A,K,pe.language),A.result={language:pe.language,re:pe.relevance,relevance:pe.relevance},pe.secondBest&&(A.secondBest={language:pe.secondBest.language,relevance:pe.secondBest.relevance}),xe("after:highlightElement",{el:A,result:pe,text:le})}function k(A){l=wr(l,A)}const T=()=>{_(),rt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function b(){_(),rt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let f=!1;function _(){if(document.readyState==="loading"){f=!0;return}document.querySelectorAll(l.cssSelector).forEach(y)}function E(){f&&_()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",E,!1);function R(A,$){let K=null;try{K=$(e)}catch(le){if(Zn("Language definition for '{}' could not be registered.".replace("{}",A)),s)Zn(le);else throw le;K=r}K.name||(K.name=A),n[A]=K,K.rawDefinition=$.bind(null,e),K.aliases&&ee(K.aliases,{languageName:A})}function F(A){delete n[A];for(const $ of Object.keys(t))t[$]===A&&delete t[$]}function H(){return Object.keys(n)}function M(A){return A=(A||"").toLowerCase(),n[A]||n[t[A]]}function ee(A,{languageName:$}){typeof A=="string"&&(A=[A]),A.forEach(K=>{t[K.toLowerCase()]=$})}function he(A){const $=M(A);return $&&!$.disableAutodetect}function _e(A){A["before:highlightBlock"]&&!A["before:highlightElement"]&&(A["before:highlightElement"]=$=>{A["before:highlightBlock"](Object.assign({block:$.el},$))}),A["after:highlightBlock"]&&!A["after:highlightElement"]&&(A["after:highlightElement"]=$=>{A["after:highlightBlock"](Object.assign({block:$.el},$))})}function me(A){_e(A),a.push(A)}function ye(A){const $=a.indexOf(A);$!==-1&&a.splice($,1)}function xe(A,$){const K=A;a.forEach(function(le){le[K]&&le[K]($)})}function ge(A){return rt("10.7.0","highlightBlock will be removed entirely in v12.0"),rt("10.7.0","Please use highlightElement now."),y(A)}Object.assign(e,{highlight:h,highlightAuto:v,highlightAll:_,highlightElement:y,highlightBlock:ge,configure:k,initHighlighting:T,initHighlightingOnLoad:b,registerLanguage:R,unregisterLanguage:F,listLanguages:H,getLanguage:M,registerAliases:ee,autoDetection:he,inherit:wr,addPlugin:me,removePlugin:ye}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString=Dp,e.regex={concat:tt,lookahead:gi,either:mo,optional:tp,anyNumberOfTimes:np};for(const A in la)typeof la[A]=="object"&&ui(la[A]);return Object.assign(e,la),e},yt=_i({});yt.newInstance=()=>_i({});var Up=yt;yt.HighlightJS=yt;yt.default=yt;const hs=fo(Up);function qp(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],s={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Wp(e){const n=e.regex,t=/(?![A-Za-z0-9])(?![$])/,a=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,t),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,t),o={scope:"variable",match:"\\$+"+a},r={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null}),c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(l)}),h={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(l),"on:begin":(me,ye)=>{ye.data._beginMatch=me[1]||me[2]},"on:end":(me,ye)=>{ye.data._beginMatch!==me[1]&&ye.ignoreMatch()}},m=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),g=`[ 	
]`,v={scope:"string",variants:[c,i,h,m]},w={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},y=["false","null","true"],k=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],T=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],f={keyword:k,literal:(me=>{const ye=[];return me.forEach(xe=>{ye.push(xe),xe.toLowerCase()===xe?ye.push(xe.toUpperCase()):ye.push(xe.toLowerCase())}),ye})(y),built_in:T},_=me=>me.map(ye=>ye.replace(/\|\d+$/,"")),E={variants:[{match:[/new/,n.concat(g,"+"),n.concat("(?!",_(T).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},R=n.concat(a,"\\b(?!\\()"),F={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),R],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),R],scope:{1:"title.class",3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},H={scope:"attr",match:n.concat(a,n.lookahead(":"),n.lookahead(/(?!::)/))},M={relevance:0,begin:/\(/,end:/\)/,keywords:f,contains:[H,o,F,e.C_BLOCK_COMMENT_MODE,v,w,E]},ee={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",_(k).join("\\b|"),"|",_(T).join("\\b|"),"\\b)"),a,n.concat(g,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[M]};M.contains.push(ee);const he=[H,F,e.C_BLOCK_COMMENT_MODE,v,w,E],_e={begin:n.concat(/#\[\s*/,s),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:y,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:y,keyword:["new","array"]},contains:["self",...he]},...he,{scope:"meta",match:s}]};return{case_insensitive:!1,keywords:f,contains:[_e,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},r,{scope:"variable.language",match:/\$this\b/},o,ee,F,{match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},E,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:f,contains:["self",o,F,e.C_BLOCK_COMMENT_MODE,v,w]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},v,w]}}const $a="[A-Za-z$_][0-9A-Za-z$_]*",wi=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ki=["true","false","null","undefined","NaN","Infinity"],xi=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Ei=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ci=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Si=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ti=[].concat(Ci,xi,Ei);function Vp(e){const n=e.regex,t=($,{after:K})=>{const le="</"+$[0].slice(1);return $.input.indexOf(le,K)!==-1},a=$a,s={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:($,K)=>{const le=$[0].length+$.index,pe=$.input[le];if(pe==="<"||pe===","){K.ignoreMatch();return}pe===">"&&(t($,{after:le})||K.ignoreMatch());let ue;const Y=$.input.substring(le);if(ue=Y.match(/^\s*=/)){K.ignoreMatch();return}if((ue=Y.match(/^\s+extends\s+/))&&ue.index===0){K.ignoreMatch();return}}},l={$pattern:$a,keyword:wi,literal:ki,built_in:Ti,"variable.language":Si},i="[0-9](_?[0-9])*",c=`\\.(${i})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${h})((${c})|\\.)?|(${c}))[eE][+-]?(${i})\\b`},{begin:`\\b(${h})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},w={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},b={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},f=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,w,y,k,{match:/\$\d+/},m];g.contains=f.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(f)});const _=[].concat(b,g.contains),E=_.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(_)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:E},F={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},H={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...xi,...Ei]}},M={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ee={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},he={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function _e($){return n.concat("(?!",$.join("|"),")")}const me={match:n.concat(/\b/,_e([...Ci,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ye={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},xe={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},ge="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",A={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(ge)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:E,CLASS_REFERENCE:H},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),M,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,w,y,k,b,{match:/\$\d+/},m,H,{className:"attr",begin:a+n.lookahead(":"),relevance:0},A,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[b,e.REGEXP_MODE,{className:"function",begin:ge,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:E}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:o},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},ee,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ye,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},me,he,F,xe,{match:/\$[(.]/}]}}function Gp(e){const n=Vp(e),t=$a,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},o={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},r={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],i={$pattern:$a,keyword:wi.concat(l),literal:ki,built_in:Ti.concat(a),"variable.language":Si},c={className:"meta",begin:"@"+t},h=(g,v,w)=>{const y=g.contains.findIndex(k=>k.label===v);if(y===-1)throw new Error("can not find mode to replace");g.contains.splice(y,1,w)};Object.assign(n.keywords,i),n.exports.PARAMS_CONTAINS.push(c),n.contains=n.contains.concat([c,s,o]),h(n,"shebang",e.SHEBANG()),h(n,"use_strict",r);const m=n.contains.find(g=>g.label==="func.def");return m.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}const Kp=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Additional Languages")])],-1),Yp={key:0,id:"additional-languages-json-usage-example",class:"row mb-4"},Jp={class:"col-12"},Zp={key:1,id:"additional-languages-json-usage-example",class:"row mb-4"},Xp={class:"col-12"},Qp={key:2,id:"additional-languages-ts-usage-example",class:"row mb-4"},ed={class:"col-12"},nd={id:"additional-languages-ts-example",class:"row mb-4"},td={class:"col-12"},ad={key:3,id:"additional-languages-json-usage-example",class:"row mb-4"},sd={class:"col-12"},od={id:"additional-languages-json-example",class:"row mb-4"},rd={class:"col-12"},ld={id:"additional-languages-php-usage-example",class:"row mb-4"},id={class:"col-12"},cd={id:"additional-languages-php-example",class:"row mb-4"},ud={class:"col-12"},hd=`class Person {
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
person.sayHello();`,gd=`{
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
`,pd=`<?php

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
?>`,dd={__name:"AdditionalLangExamples",setup(e){hs.registerLanguage("json",qp),hs.registerLanguage("php",Wp),hs.registerLanguage("typescript",Gp);const n=ae("selectedLibrary"),t=ae("selectedTheme"),a={prism:{json:`<template>
  <CodeBlock
    :code="myCode"
    :indent="2"
    lang="json"
    prismjs
    :tabs="false"
  />
</template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-json';
<\/script>`,typescript:`<template>
  <CodeBlock
    :code="myCode"
    lang="typescript"
    prismjs
    :tabs="false"
  />
</template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
<\/script>`,php:`<template>
  <CodeBlock
    :code="myCode"
    lang="php"
    prismjs
    :tabs="false"
  />
</template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-markup-templating';
  import 'prismjs/components/prism-php';
<\/script>`},highlightjs:{json:`<template>
  <CodeBlock
    :code="myCode"
    highlightjs
    :indent="2"
    lang="json"
    :tabs="false"
  />
</template>

<script setup>
  import hljs from 'highlight.js/lib/core';
  import langJson from 'highlight.js/lib/languages/json';

  hljs.registerLanguage('json', langJson);
<\/script>`,typescript:`<template>
  <CodeBlock
    :code="myCode"
    highlightjs
    lang="typescript"
    :tabs="false"
  />
</template>

<script setup>
  import hljs from 'highlight.js/lib/core';
  import langTypescript from 'highlight.js/lib/languages/typescript';

  hljs.registerLanguage('typescript', langTypescript);
<\/script>`,php:`<template>
  <CodeBlock
    :code="myCode"
    highlightjs
    lang="php"
    :tabs="false"
  />
</template>

<script setup>
  import hljs from 'highlight.js/lib/core';
  import langPhp from 'highlight.js/lib/languages/php';

  hljs.registerLanguage('php', langPhp);
<\/script>`}};return(s,o)=>{const r=Qe("CodeBlock");return Z(),Q("div",null,[Kp,p(n).id==="highlightjs"?(Z(),Q("div",Yp,[u("div",Jp,[u("p",null,ke(p(n).label)+" does not load all languages by default, but this component does. It was the best solution I could come up with as importing additional languages the Highlight.js way, was not working as I had hoped/intended. ",1)])])):(Z(),Q("div",Zp,[u("div",Xp,[u("p",null,ke(p(n).label)+" does not load all languages by default. In order to use additional languages you will need to import that languages component. ",1)])])),p(n).id==="prism"?(Z(),Q("div",Qp,[u("div",ed,[q(r,{code:a[p(n).id].typescript,highlightjs:p(n).id==="highlightjs",label:`Example of using ${p(n).label} to highlight TypeScript`,lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","label","prismjs","theme"])])])):Ye("",!0),u("div",nd,[u("div",td,[q(r,{code:hd,highlightjs:p(n).id==="highlightjs",label:"TypeScript",lang:"typescript",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])]),p(n).id==="prism"?(Z(),Q("div",ad,[u("div",sd,[q(r,{code:a[p(n).id].json,highlightjs:p(n).id==="highlightjs",label:`Example of using ${p(n).label} to highlight JSON`,lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","label","prismjs","theme"])])])):Ye("",!0),u("div",od,[u("div",rd,[q(r,{code:gd,highlightjs:p(n).id==="highlightjs",indent:2,label:"JSON",lang:"json",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])]),u("div",ld,[u("div",id,[q(r,{code:a[p(n).id].php,highlightjs:p(n).id==="highlightjs",label:`Example of using ${p(n).label} to highlight PHP`,lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),u("div",cd,[u("div",ud,[q(r,{code:pd,height:"500px",highlightjs:p(n).id==="highlightjs",indent:2,label:"PHP",lang:"php",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])])])}}},fd=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Browser Window")])],-1),bd={id:"browser-window-example",class:"row mb-4"},md={class:"col-12"},yd={__name:"BrowserWindowExamples",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme"),a={prism:`<CodeBlock
  :browser-window="true"
  :code="myCode"
  lang="javascript"
  prismjs
  :tabs="false"
/>`,highlightjs:`<CodeBlock
  :browser-window="true"
  :code="myCode"
  highlightjs
  lang="javascript"
  :tabs="false"
/>`};return(s,o)=>{const r=Qe("CodeBlock");return Z(),Q("div",null,[fd,u("div",bd,[u("div",md,[q(r,{"browser-window":!0,code:a[p(n).id],highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},vd=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Copy Button")])],-1),jd={id:"button-example",class:"row mb-4"},_d={class:"col-12"},wd={id:"persistent-button-example",class:"row mb-4"},kd={class:"col-12"},xd={__name:"ButtonExamples",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme"),a={prism:{btn:`<CodeBlock
  :code="myCode"
  label="Visible on hover"
  lang="html"
  prismjs
  :tabs="false"
/>`,btnPersist:`<CodeBlock
  :code="myCode"
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  prismjs
  :tabs="false"
/>`},highlightjs:{btn:`<CodeBlock
  :code="myCode"
  highlightjs
  label="Visible on hover"
  lang="html"
  :tabs="false"
/>`,btnPersist:`<CodeBlock
  :code="myCode"
  highlightjs
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  :tabs="false"
/>`}};return(s,o)=>{const r=Qe("CodeBlock");return Z(),Q("div",null,[vd,u("div",jd,[u("div",_d,[q(r,{code:a[p(n).id].btn,highlightjs:p(n).id==="highlightjs",label:"Visible on hover",lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","prismjs","theme"])])]),u("div",wd,[u("div",kd,[q(r,{code:a[p(n).id].btnPersist,highlightjs:p(n).id==="highlightjs",label:"Persistent Copy Button",lang:"html","persistent-copy-button":"",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},Ed=`/**
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
`,Cd=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow: #fef611;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-blue-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-green-neon);--neon-bunny-important: var(--neon-bunny-red);--neon-bunny-inserted: var(--neon-bunny-lime-lighter);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-pink);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-url: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-html-attr-name: var(--neon-bunny-green);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-lime);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-js-keyword: var(--neon-bunny-blue);--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-php-boolean: var(--neon-bunny-blue);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);--neon-bunny-php-class-name: var(--neon-bunny-teal);--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);--neon-bunny-php-function: var(--neon-bunny-green-neon);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);--neon-bunny-php-keyword: var(--neon-bunny-blue);--neon-bunny-php-operator: var(--neon-bunny-purple);--neon-bunny-php-package: var(--neon-bunny-peach);--neon-bunny-php-property: var(--neon-bunny-purple-light);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);--neon-bunny-php-variable: var(--neon-bunny-purple-light)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.constant{color:var(--neon-bunny-constant)}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token.attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value .token.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string .token.string,.language-js .token.template-string .token.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name.return-type{color:var(--neon-bunny-php-class-name-return-type);font-style:italic}.language-php .token.function{color:var(--neon-bunny-php-function)}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint);font-style:italic}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`,Sd=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow: #ffff00;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-purple-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-orange-light);--neon-bunny-important: var(--neon-bunny-pink);--neon-bunny-inserted: var(--neon-bunny-lime);--neon-bunny-keyword: var(--neon-bunny-purple-light);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-orange);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-orange-light);--neon-bunny-punctuation: var(--neon-bunny-orange);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-light);--neon-bunny-symbol: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-url: var(--neon-bunny-orange-darker);--neon-bunny-variable: var(--neon-bunny-orange);--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);--neon-bunny-html-attr-value: var(--neon-bunny-green);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange-darker);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-yellow);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-js-keyword: var(--neon-bunny-magenta);--neon-bunny-js-literal-property: var(--neon-bunny-orange);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-php-boolean: var(--neon-bunny-purple-light);--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);--neon-bunny-php-class-name: var(--neon-bunny-yellow);--neon-bunny-php-double-quote-string: var(--neon-bunny-green);--neon-bunny-php-function: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);--neon-bunny-php-operator: var(--neon-bunny-yellow-light);--neon-bunny-php-package: var(--neon-bunny-yellow);--neon-bunny-php-property: var(--neon-bunny-orange);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);--neon-bunny-php-variable: var(--neon-bunny-orange)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.constant{color:var(--neon-bunny-constant)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token .attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string.string,.language-js .token.template-string.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name .return-type{color:var(--neon-bunny-php-class-name-return-type)}.language-php .token.function{color:var(--neon-bunny-php-function);text-decoration:underline}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint)}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`,Td=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-darker: #276AFF;--neon-bunny-blue-light-faded: #a5a8ff;--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta-neon: #FF25D9;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #fef611;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-literal: var(--neon-bunny-blue-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-green-darker);--neon-bunny-property: var(--neon-bunny-blue-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-peach-darker);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);--neon-bunny-title-function: var(--neon-bunny-green-neon);--neon-bunny-title: var(--neon-bunny-green-darker);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-blue-light);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-green);--neon-bunny-meta-prompt: var(--neon-bunny-blue-light);--neon-bunny-meta-string: var(--neon-bunny-blue-light);--neon-bunny-meta: var(--neon-bunny-blue-light);--neon-bunny-attr: var(--neon-bunny-green);--neon-bunny-attribute: var(--neon-bunny-green);--neon-bunny-name: var(--neon-bunny-blue-light);--neon-bunny-section: var(--neon-bunny-green);--neon-bunny-tag-attr: var(--neon-bunny-blue-light);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-class: var(--neon-bunny-lime);--neon-bunny-selector-id: var(--neon-bunny-lime);--neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-green);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-pink);--neon-bunny-php: var(--neon-bunny-blue-light);--neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-class-title: var(--neon-bunny-magenta);--neon-bunny-php-function-title: var(--neon-bunny-green-neon);--neon-bunny-php-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-gray-lighter);--neon-bunny-php-string: var(--neon-bunny-yellow);--neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);--neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);--neon-bunny-php-title: var(--neon-bunny-peach);--neon-bunny-php-variable: var(--neon-bunny-purple-light);--neon-bunny-php-meta: var(--neon-bunny-red)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params);font-style:italic}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class);font-style:italic}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`,Ad=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #ffff00;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-magenta);--neon-bunny-literal: var(--neon-bunny-purple-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-orange);--neon-bunny-property: var(--neon-bunny-yellow-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-orange);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-orange);--neon-bunny-title-function: var(--neon-bunny-orange-light);--neon-bunny-title: var(--neon-bunny-orange);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-purple-light);--neon-bunny-meta-prompt: var(--neon-bunny-orange);--neon-bunny-meta-string: var(--neon-bunny-orange);--neon-bunny-meta: var(--neon-bunny-orange);--neon-bunny-attr: var(--neon-bunny-orange);--neon-bunny-attribute: var(---neon-bunny-orange);--neon-bunny-name: var(--neon-bunny-orange);--neon-bunny-section: var(--neon-bunny-orange);--neon-bunny-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-orange);--neon-bunny-selector-class: var(--neon-bunny-yellow);--neon-bunny-selector-id: var(--neon-bunny-selector);--neon-bunny-selector-pseudo: var(--neon-bunny-orange);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-js-params-variable-language: var(--neon-bunny-orange);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-yellow);--neon-bunny-php: var(--neon-bunny-white);--neon-bunny-php-class-keyword: var(--neon-bunny-pink);--neon-bunny-php-class-title: var(--neon-bunny-yellow);--neon-bunny-php-function-title: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-yellow);--neon-bunny-php-string: var(--neon-bunny-green-light);--neon-bunny-php-title-class: var(--neon-bunny-yellow);--neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);--neon-bunny-php-title: var(--neon-bunny-white);--neon-bunny-php-variable: var(--neon-bunny-orange);--neon-bunny-php-meta: var(--neon-bunny-pink)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params)}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function);text-decoration:underline}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language);font-style:italic}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params)}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class)}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`,Od=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Languages")])],-1),$d={id:"lang-js-examples",class:"row mb-4"},Nd={class:"col-12"},Md={id:"lang-vue-examples",class:"row mb-4"},Id={class:"col-12"},Rd={id:"lang-css-examples",class:"row mb-4"},Pd={class:"col-12"},Ld={id:"lang-html-examples",class:"row mb-4"},Bd={class:"col-12"},Fd={id:"lang-svg-examples",class:"row mb-4"},Dd={class:"col-12"},zd=`<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const greeting = ref('Hello, World!');
<\/script>`,Hd=`// Example 1: Creating an array of numbers and finding the sum
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
`,Ud=`<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Google tag (gtag.js) -->

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Vue 3 CodeBlock</title>

	<meta name="description"
		content="Vue 3 CodeBlock - Highlight your code with ease using this
		syntax highlighting component powered by PrismJS or Highlight.js." />
	<meta name="keywords"
		content="vue-code-block, code, pre, highlight, syntax, vue, vue3,
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
		syntax highlighting component powered by PrismJS or Highlight.js.">
	<meta property="og:url" content="https://webdevnerdstuff.github.io/vue-code-block/">
	<meta property="og:image" content="https://webdevnerdstuff.github.io/vue-code-block/vue-code-block-social.jpg">
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
`,qd=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`,Wd={__name:"LangExamples",setup(e){const n=ae("codeBlockOptions"),t=ae("selectedLibrary"),a=ae("selectedTheme"),s=Ed;return(o,r)=>{const l=Qe("CodeBlock");return Z(),Q("div",null,[Od,u("div",$d,[u("div",Nd,[q(l,{code:Hd,highlightjs:p(t).id==="highlightjs",label:"JavaScript",lang:"javascript","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",Md,[u("div",Id,[q(l,{code:zd,highlightjs:p(t).id==="highlightjs",label:"Vue (using lang = html)",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",Rd,[u("div",Pd,[q(l,{code:p(s),highlightjs:p(t).id==="highlightjs",label:"CSS",lang:"css","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),u("div",Ld,[u("div",Bd,[q(l,{code:Ud,highlightjs:p(t).id==="highlightjs",label:"HTML",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",Fd,[u("div",Dd,[q(l,{code:qd,highlightjs:p(t).id==="highlightjs",label:"SVG",lang:"svg",prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","prismjs","theme"])])])])}}},Vd=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Other Prop Examples")])],-1),Gd={id:"radius-example",class:"row mb-4"},Kd={class:"col-12"},Yd={id:"copy-text-example",class:"row mb-4"},Jd={class:"col-12"},Zd={id:"run-text-example",class:"row mb-4"},Xd={class:"col-12"},Qd={id:"floating-tabs-example",class:"row mb-4"},ef={class:"col-12"},nf={class:"form-check form-switch ms-1"},tf={class:"boolean-style"},af={id:"height-example",class:"row mb-4"},sf={class:"col-12"},of={id:"height-example",class:"row mb-4"},rf={class:"col-12"},lf={id:"indent-example",class:"row mb-4"},cf={class:"col-12"},uf=`{
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
`,hf={__name:"OtherExamples",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme"),a=we("0 1em"),s=we("Copy Text"),o=we(!0),r=we("200"),l=we(2),i=we("Run"),c=we("0.25rem"),h={prism:{copyBlockRadius:`<CodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  lang="html"
  prismjs
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</CodeBlock>`,copyText:`<CodeBlock
  :code="myCode"
  copy-tab
  :copyText="copyText"
  lang="html"
  prismjs
  tabs
>
  <template #label>
    copyText:
    <input v-model="copyText" type="text" />
  </template>
</CodeBlock>`,runText:`<CodeBlock
  :code="runTextExample"
  :copy-tab="false"
  lang="html"
  run-tab
  :runText="runText"
  prismjs
  tabs
  :theme="selectedTheme"
  @run="runTextCodeExampleFunction"
>
  <template #label>
    runText:
    <input v-model="runText" type="text" />
  </template>
</CodeBlock>`,floatingTabs:`<CodeBlock
  :code="exampleCode"
  :floating-tabs="floatingTabs"
  lang="html"
  prismjs
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
</CodeBlock>`,height:`<CodeBlock
  :code="myCode"
  :height="height"
  lang="html"
  prismjs
  :tabs="false"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</CodeBlock>`,tabGap:`<CodeBlock
  :code="myCode"
  lang="html"
  :run-tab="true"
  prismjs
  :tab-gap="tabGap"
  tabs
>
  <template #label>
    tabGap:
    <input v-model="tabGap" type="text" />
  </template>
</CodeBlock>`},highlightjs:{copyBlockRadius:`<CodeBlock
  :code="myCode"
  :code-block-radius="codeBlockRadius"
  highlightjs
  lang="html"
>
  <template #label>
    codeBlockRadius:
    <input v-model="codeBlockRadius" type="text" />
  </template>
</CodeBlock>`,copyText:`<CodeBlock
  :code="myCode"
  copy-tab
  :copyText="copyText"
  highlightjs
  lang="html"
  tabs
>
  <template #label>
    copyText:
    <input v-model="copyText" type="text" />
  </template>
</CodeBlock>`,runText:`<CodeBlock
  :code="runTextExample"
  :copy-tab="false"
  highlightjs
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
</CodeBlock>`,floatingTabs:`<CodeBlock
  :code="exampleCode"
  :floating-tabs="floatingTabs"
  highlightjs
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
</CodeBlock>`,height:`<CodeBlock
  :code="myCode"
  :height="height"
  highlightjs
  lang="html"
  :tabs="false"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</CodeBlock>`,tabGap:`<CodeBlock
  :code="myCode"
  highlightjs
  lang="html"
  :run-tab="true"
  :tab-gap="tabGap"
  tabs
>
  <template #label>
    tabGap:
    <input v-model="tabGap" type="text" />
  </template>
</CodeBlock>`}};function m(){alert("Run Text Code Example Function")}return(g,v)=>{const w=Qe("CodeBlock");return Z(),Q("div",null,[Vd,u("div",Gd,[u("div",Kd,[q(w,{code:h[p(n).id].copyBlockRadius,"code-block-radius":a.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",theme:p(t)},{label:un(()=>[ce(" codeBlockRadius: "),Fn(u("input",{"onUpdate:modelValue":v[0]||(v[0]=y=>a.value=y),class:"form-control",type:"text"},null,512),[[st,a.value]])]),_:1},8,["code","code-block-radius","highlightjs","prismjs","theme"])])]),u("div",Yd,[u("div",Jd,[q(w,{code:h[p(n).id].copyText,"copy-tab":"",copyText:s.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:"",theme:p(t)},{label:un(()=>[ce(" copyText: "),Fn(u("input",{"onUpdate:modelValue":v[1]||(v[1]=y=>s.value=y),class:"form-control",type:"text"},null,512),[[st,s.value]])]),_:1},8,["code","copyText","highlightjs","prismjs","theme"])])]),u("div",Zd,[u("div",Xd,[q(w,{code:h[p(n).id].runText,"copy-tab":!1,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism","run-tab":"",runText:i.value,tabs:"",theme:p(t),onRun:m},{label:un(()=>[ce(" runText: "),Fn(u("input",{"onUpdate:modelValue":v[2]||(v[2]=y=>i.value=y),class:"form-control",type:"text"},null,512),[[st,i.value]])]),_:1},8,["code","highlightjs","prismjs","runText","theme"])])]),u("div",Qd,[u("div",ef,[q(w,{code:h[p(n).id].floatingTabs,"floating-tabs":o.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:"",theme:p(t)},{label:un(()=>[u("div",nf,[Fn(u("input",{"onUpdate:modelValue":v[3]||(v[3]=y=>o.value=y),checked:"",class:"form-check-input",role:"switch",type:"checkbox"},null,512),[[Sh,o.value]]),u("label",null,[ce(" floatingTabs = "),u("span",tf,ke(o.value),1)])])]),_:1},8,["code","floating-tabs","highlightjs","prismjs","theme"])])]),u("div",af,[u("div",sf,[q(w,{code:h[p(n).id].height,height:r.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},{label:un(()=>[ce(" height: "),Fn(u("input",{"onUpdate:modelValue":v[4]||(v[4]=y=>r.value=y),class:"form-control",type:"number"},null,512),[[st,r.value]])]),_:1},8,["code","height","highlightjs","prismjs","theme"])])]),u("div",of,[u("div",rf,[q(w,{code:h[p(n).id].tabGap,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism","run-tab":!0,"tab-gap":c.value,tabs:"",theme:p(t)},{label:un(()=>[ce(" tabGap: "),Fn(u("input",{"onUpdate:modelValue":v[5]||(v[5]=y=>c.value=y),class:"form-control",type:"text"},null,512),[[st,c.value]])]),_:1},8,["code","highlightjs","prismjs","tab-gap","theme"])])]),u("div",lf,[u("div",cf,[q(w,{code:uf,highlightjs:p(n).id==="highlightjs",indent:l.value,lang:"json",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},{label:un(()=>[ce(" indent (json): "),Fn(u("input",{"onUpdate:modelValue":v[6]||(v[6]=y=>l.value=y),class:"form-control",type:"number"},null,512),[[st,l.value]])]),_:1},8,["highlightjs","indent","prismjs","theme"])])])])}}},gf=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Plugins")])],-1),pf={key:0,id:"plugin-example",class:"row mb-4"},df=lo('<div class="col-12"><p> PrismJS does not load all plugins by default. In order to use additional plugins you will need to import them. Please note that not all plugins may work with this component. </p><p>Tested Plugins that do work include:</p><ul><li><a href="https://prismjs.com/plugins/autolinker/" target="_blank"> autolinker </a></li><li><a href="https://prismjs.com/plugins/command-line/" target="_blank"> command-line </a></li><li><a href="https://prismjs.com/plugins/line-highlight/" target="_blank"> line-highlight </a></li><li><a href="https://prismjs.com/plugins/line-numbers/" target="_blank"> line-numbers </a></li><li><a href="https://prismjs.com/plugins/match-braces/" target="_blank"> match-braces </a></li><li><a href="https://prismjs.com/plugins/show-invisibles/" target="_blank"> show-invisibles </a></li></ul></div>',1),ff={class:"col-12"},bf=u("a",{href:"https://prismjs.com/plugins/line-numbers/",target:"_blank"},"line-numbers",-1),mf={key:1,id:"plugin-example",class:"row mb-4"},yf=u("div",{class:"col-12"},[u("p",null," Vue3 CodeBlock currently does not support the Highlight.js plugin API. ")],-1),vf=[yf],jf=`<template>
  <CodeBlock
    class="line-numbers"
    :code="pluginExample"
    label="line-numbers"
    lang="html"
    prism-plugin
    prismjs
    :tabs="false"
  />
</template>

<script setup>
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
<\/script>`,_f={__name:"PluginExamples",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme");return(a,s)=>{const o=Qe("CodeBlock");return Z(),Q("div",null,[gf,p(n).id==="prism"?(Z(),Q("div",pf,[df,u("div",ff,[q(o,{class:"line-numbers",code:jf,lang:"html","prism-plugin":"",prismjs:"",tabs:!1,theme:p(t)},{label:un(()=>[ce(" Example using the "),bf,ce(" Plugin ")]),_:1},8,["theme"])])])):(Z(),Q("div",mf,vf))])}}},wf=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Tabs")])],-1),kf={id:"tab-copy-example",class:"row mb-4"},xf={class:"col-12"},Ef={id:"tab-run-example",class:"row mb-4"},Cf={class:"col-12"},Sf={id:"tab-both-example",class:"row mb-4"},Tf={class:"col-12"},Af={__name:"TabExamples",setup(e){const n=ae("codeBlockOptions"),t=ae("selectedLibrary"),a=ae("selectedTheme"),s={prism:{copy:`<CodeBlock
  :code="myCode"
  copy-tab
  label="Copy Code Tab"
  lang="javascript"
  prismjs
  :run-tab="false"
  tabs
/>`,run:`<template>
  <CodeBlock
    :code="myCode"
    :copy-tab="false"
    label="Run Code Tab"
    lang="javascript"
    prismjs
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
<\/script>`,both:`<template>
  <CodeBlock
    :code="myCode"
    label="Copy &amp; Run Code Tabs"
    lang="javascript"
    prismjs
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
<\/script>`},highlightjs:{copy:`<CodeBlock
  :code="myCode"
  copy-tab
  highlightjs
  label="Copy Code Tab"
  lang="javascript"
  :run-tab="false"
  tabs
/>`,run:`<template>
  <CodeBlock
    :code="myCode"
    :copy-tab="false"
    highlightjs
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
<\/script>`,both:`<template>
  <CodeBlock
    :code="myCode"
    highlightjs
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
<\/script>`}};function o(){alert("Run Code Tab")}function r(){alert("Copy & Run Code Tabs")}return(l,i)=>{const c=Qe("CodeBlock");return Z(),Q("div",null,[wf,u("div",kf,[u("div",xf,[q(c,{code:s[p(t).id].copy,"copy-tab":"",highlightjs:p(t).id==="highlightjs",label:"Copy Code Tab",lang:"html",prismjs:p(t).id==="prism","run-tab":!1,tabs:"",theme:p(a)},null,8,["code","highlightjs","prismjs","theme"])])]),u("div",Ef,[u("div",Cf,[q(c,{code:s[p(t).id].run,"copy-tab":!1,highlightjs:p(t).id==="highlightjs",label:"Run Code Tab",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism","run-tab":"",tabs:"",theme:p(a),onRun:o},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),u("div",Sf,[u("div",Tf,[q(c,{code:s[p(t).id].both,highlightjs:p(t).id==="highlightjs",label:"Copy & Run Code Tabs",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism","run-tab":!0,tabs:"",theme:p(a),onRun:r},null,8,["code","highlightjs","max-height","prismjs","theme"])])])])}}},Of={class:"mb-5"},$f=u("div",{class:"row"},[u("div",{class:"col-12 mb-3"},[u("h2",null,"Examples")])],-1),Nf={__name:"ExamplesSection",setup(e){return(n,t)=>(Z(),Q("div",Of,[$f,q(p(Wd),{id:"lang-examples"}),q(p(dd),{id:"add-lang-examples"}),q(p(_f),{id:"plugin-examples"}),q(p(Af),{id:"tab-examples"}),q(p(xd),{id:"copy-button-examples"}),q(p(yd),{id:"browser-window-examples"}),q(p(hf),{id:"other-prop-examples"})]))}},Mf={class:"row mb-5"},If=u("h2",null,"Events",-1),Rf=[If],Pf={class:"col-12 mb-3"},Lf={class:"table-responsive"},Bf={class:"table table-striped"},Ff=u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Description")])],-1),Df={valign:"top"},zf={valign:"top"},Hf={__name:"EventsSection",setup(e){const n=ae("styleData"),t={run:{description:"The event emitted when the run tab is clicked."},"update:copy-status":{description:"The event emitted when the copy status is updated."}};return(a,s)=>(Z(),Q("div",Mf,[u("div",{class:Ce(p(n).h2ColClass)},Rf,2),u("div",Pf,[u("div",Lf,[u("table",Bf,[Ff,u("tbody",null,[(Z(),Q(Oe,null,Qn(t,(o,r)=>u("tr",{key:o},[u("td",Df,ke(r),1),u("td",zf,ke(o.description),1)])),64))])])])])]))}},Uf={class:"row mb-5"},qf=u("h2",null,"Installation",-1),Wf=[qf],Vf={class:"col-12 mb-4"},Gf={class:"col-12"},Kf="pnpm add @wdns/vue-code-block",Yf="npm i @wdns/vue-code-block",Jf={__name:"InstallationSection",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme"),a=ae("styleData");return(s,o)=>{const r=Qe("CodeBlock");return Z(),Q("div",Uf,[u("div",{class:Ce(p(a).h2ColClass)},Wf,2),u("div",Vf,[q(r,{code:Kf,highlightjs:p(n).id==="highlightjs",label:"Using pnpm:",lang:"plain",prismjs:p(n).id==="prism","show-run":!1,tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])]),u("div",Gf,[q(r,{code:Yf,highlightjs:p(n).id==="highlightjs",label:"Using npm:",lang:"plain",prismjs:p(n).id==="prism","show-run":!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])])}}},Zf={class:"row mb-5"},Xf=u("h2",null,"License",-1),Qf=[Xf],eb={class:"col-12"},nb=u("p",null,[ce(" Copyright © 2023 WebDevNerdStuff "),u("br"),ce(" Licensed under the MIT license. ")],-1),tb=["href"],ab={__name:"LicenseSection",setup(e){const n=ae("styleData"),t=ae("links");return(a,s)=>(Z(),Q("div",Zf,[u("div",{class:Ce(p(n).h2ColClass)},Qf,2),u("div",eb,[nb,u("p",null,[u("a",{href:p(t).license,target:"_blank"}," LICENSE.md ",8,tb)])])]))}};const Ai=e=>($l("data-v-56396130"),e=e(),Nl(),e),sb={class:"row mb-5"},ob=Ai(()=>u("h2",null,"Props",-1)),rb=[ob],lb={class:"col-12 mb-3"},ib={class:"table-responsive"},cb={class:"table table-striped"},ub=Ai(()=>u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Type"),u("th",null,"Default"),u("th",null,"Description")])],-1)),hb=["id"],gb={class:"prop-type",valign:"top"},pb={class:"prop-default",valign:"top"},db=["innerHTML"],fb={__name:"PropsSection",setup(e){const n=ae("styleData"),t=ae("prismLinks"),a=ae("highlightJsLinks"),s={browserWindow:{type:"boolean",required:!1,default:!1,description:"To give the code block a browser window look."},cssPath:{type:"string | undefined",required:!1,default:"undefined",description:"Used to load the css from a specified location instead of the component using the CDN location. If you want to dynamically change the theme, you will also need to change the theme prop."},code:{type:"object | string | number",required:!0,default:"",description:"The code to be displayed in the code block."},codeBlockRadius:{type:"string",required:!1,default:"0.5rem",description:"The border radius of the code block."},copyButton:{type:"boolean",required:!1,default:!0,description:"To show a copy button within the code block"},copyIcons:{type:"boolean",required:!1,default:!0,description:"To show the copy icons on the copy code tab."},copyTab:{type:"boolean",required:!1,default:!0,description:"To show the copy code tab."},copyFailedText:{type:"string",required:!1,default:"Copy failed!",description:"The text to be displayed when the code copy failed."},copyText:{type:"string",required:!1,default:"Copy Code",description:"The text to be displayed on the copy tab."},copySuccessText:{type:"string",required:!1,default:"Copied!",description:"The text to be displayed when the code copy was successful."},floatingTabs:{type:"boolean",required:!1,default:!0,description:"To make the tabs float on top of the code block."},height:{type:"string | number",required:!1,default:"auto",description:"The height of the code block."},highlightjs:{type:"boolean",required:!1,default:"false",description:"Specifies that the Highlight.js library should be used."},indent:{type:"Number",required:!1,default:4,description:"The number of spaces to indent the code for json."},label:{type:"string",required:!1,default:"",description:"The label to be displayed on the code block."},lang:{type:"string",required:!1,default:"javascript",description:"The language of the code."},maxHeight:{type:"string | number",required:!1,default:"auto",description:"The max height of the code block."},persistentCopyButton:{type:"boolean",required:!1,default:!1,description:"To show a persistent copy button within the code block"},prismjs:{type:"boolean",required:!1,default:"true",description:"Specifies that the PrismJS library should be used."},prismPlugin:{type:"boolean",required:!1,default:"false",description:"Specifies that a PrismJS plugin is being used. This is needed for the plugin to work properly."},runTab:{type:"boolean",required:!1,default:!1,description:"To show the run tab."},runText:{type:"string",required:!1,default:"Run",description:"The text to be displayed on the run tab."},tabGap:{type:"string",required:!1,default:"0.25rem",description:"The gap between the tabs."},tabs:{type:"boolean",required:!1,default:!1,description:"To show the tabs. This will show/hide all tabs."},theme:{type:"string | boolean",required:!1,id:"props-theme-option",default:"neon-bunny",description:`<p>The theme to be used for the code block. Available options include:</p>
		<p>
			<code>false</code> - When you are loading the theme's styles yourself.
		</p>
		<p>
			<strong>Neon Bunny Themes</strong>
			<br />
			<code>neon-bunny</code>
			<br />
			<code>neon-bunny-carrot</code>
		</p>
		<p>
			<a href="${t.prismThemes}" target="_blank">PrismJS Themes</a>
		</p>
		<p>
			<a href="${a.themes}" target="_blank">Highlight.js Themes</a>
		</p>
		`}};return(o,r)=>(Z(),Q("div",sb,[u("div",{class:Ce(p(n).h2ColClass)},rb,2),u("div",lb,[u("div",ib,[u("table",cb,[ub,u("tbody",null,[(Z(),Q(Oe,null,Qn(s,(l,i)=>u("tr",{key:l},[u("td",{id:l==null?void 0:l.id,valign:"top"},ke(i),9,hb),u("td",gb,ke(l.type),1),u("td",pb,ke(l.default),1),u("td",{valign:"top",innerHTML:l.description},null,8,db)])),64))])])])])]))}},bb=go(fb,[["__scopeId","data-v-56396130"]]),mb={class:"row mb-5"},yb=u("h2",null,"Slots",-1),vb=[yb],jb={class:"col-12 mb-3"},_b={class:"table-responsive"},wb={class:"table table-striped"},kb=u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Description")])],-1),xb={valign:"top"},Eb={valign:"top"},Cb={__name:"SlotsSection",setup(e){const n=ae("styleData"),t={copyButton:{description:"Slot for the copy button inside the code block of the component."},label:{description:"Slot for the label of the component."},tabs:{description:"Slot for the tabs of the component."}};return(a,s)=>(Z(),Q("div",mb,[u("div",{class:Ce(p(n).h2ColClass)},vb,2),u("div",jb,[u("div",_b,[u("table",wb,[kb,u("tbody",null,[(Z(),Q(Oe,null,Qn(t,(o,r)=>u("tr",{key:o},[u("td",xb,ke(r),1),u("td",Eb,ke(o.description),1)])),64))])])])])]))}},Sb={class:"row mb-5"},Tb=u("h2",null,"Register Component",-1),Ab=[Tb],Ob={class:"col-12"},$b=`import { createApp } from 'vue';
import CodeBlock from 'vue-code-block';

createApp()
  .component('CodeBlock', CodeBlock)
  .mount('#app');`,Nb={__name:"RegisterSection",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme"),a=ae("styleData");return(s,o)=>{const r=Qe("CodeBlock");return Z(),Q("div",Sb,[u("div",{class:Ce(p(a).h2ColClass)},Ab,2),u("div",Ob,[q(r,{code:$b,highlightjs:p(n).id==="highlightjs",lang:"javascript",prismjs:p(n).id==="prism","show-run":!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])])}}},Mb={class:"row mb-5"},Ib=u("h2",null,"Themes",-1),Rb=[Ib],Pb={class:"col-12"},Lb=u("p",null," There are a few options for theming the code block. Using the components built in method allows you to be able to dynamically change the theme easily. If you choose, you can also use your own custom theme. ",-1),Bb=u("code",null,"neon-bunny",-1),Fb=u("code",null,"neon-bunny-carrot",-1),Db=["href"],zb=["href"],Hb=u("a",{href:"#props-theme-option"},"theme",-1),Ub=u("code",null,"fetch",-1),qb=["href"],Wb={key:0},Vb=u("code",null,"base16",-1),Gb=u("code",null,"node_modules",-1),Kb=u("code",null,"theme",-1),Yb={key:2},Jb=["href"],Zb=u("p",null,[ce(" Alternatively you can import the theme into your css/sass/scss. Make sure to set the "),u("code",null,"theme"),ce(" prop to false to avoid it conflicting with the default theme. ")],-1),Xb=u("code",null,"@use",-1),Qb={__name:"ThemesSection",setup(e){const n=ae("links"),t=ae("prismLinks"),a=ae("highlightJsLinks"),s=ae("selectedLibrary"),o=ae("selectedTheme"),r=ae("styleData"),l={prism:{bunnyTheme:`<CodeBlock
  :code="myCode"
  label="Neon Bunny Theme"
  lang="html"
  :prismjs="true"
  theme="neon-bunny"
/>

<CodeBlock
  :code="myCode"
  label="Neon Bunny Carrot Theme"
  lang="html"
  :prismjs="true"
  theme="neon-bunny-carrot"
/>`,importCss:`<style>
  @use 'prismjs/themes/prism-coy.css';
</style>`,importJs:`<script setup>
  import 'prismjs/themes/prism-coy.css';
<\/script>`,themeProp:`<CodeBlock
  :code="myCode"
  label="Build in Theming"
  lang="html"
  :prismjs="true"
  theme="coy"
/>`},highlightjs:{base16:`<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Build in Theming"
  lang="html"
  theme="base16-onedark"
/>`,bunnyTheme:`<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Neon Bunny Theme"
  lang="html"
  theme="neon-bunny"
/>

<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Neon Bunny Carrot Theme"
  lang="html"
  theme="neon-bunny-carrot"
/>`,importCss:`<style>
  @use 'highlight.js/styles/base16/onedark.css';
</style>`,importJs:`<script setup>
  import 'highlight.js/styles/base16/onedark.css';
<\/script>`,themeProp:`<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Build in Theming"
  lang="html"
  theme="atom-one-dark"
/>`}},i=`<div class="alert alert-primary my-2" role="alert">
Not all tab &amp; icon styles for these themes are built into the component.<br />If
you would like to contribute to add tab/icon styles for a theme not
included, you can find instructions located
<a href="${n.contribute}" target="_blank">here</a>.
</div>`;return(c,h)=>{const m=Qe("CodeBlock");return Z(),Q("div",Mb,[u("div",{class:Ce(p(r).h2ColClass)},Rb,2),u("div",Pb,[Lb,u("p",null,[ce(" The first way is to use one of the two custom themes ("),Bb,ce(", "),Fb,ce(") built into the component that are based off of my own VSCode "),u("a",{href:p(n).neonBunnyTheme,target:"_blank"},"Neon Bunny Theme",8,Db),ce(". ")]),q(m,{code:l[p(s).id].bunnyTheme,highlightjs:p(s).id==="highlightjs",label:"Using the Neon Bunny Themes",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},null,8,["code","highlightjs","prismjs","theme"]),u("p",null,[ce(" Another other is to use the main "),u("a",{href:p(s).id==="prism"?p(t).homepage:p(a).homepage,target:"_blank"},ke(p(s).label),9,zb),ce(" themes. If you use the component to load the theme, you just need to set the "),Hb,ce(" prop to the desired theme. When you load it this way, the component will use a "),Ub,ce(" call to load them themes from the "),u("a",{href:p(s).id==="prism"?p(t).cdn:p(a).cdn,target:"_blank"},"jsDelivr CDN",8,qb),ce(". Fetching the "+ke(p(s).label)+" themes from a CDN was the best method I could figure out at this time to dynamically load the themes, while making it easier for you to use them. You can also link to another CDN of your choice. ",1)]),q(m,{code:l[p(s).id].themeProp,highlightjs:p(s).id==="highlightjs",label:"Using the theme prop",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},null,8,["code","highlightjs","prismjs","theme"]),p(s).id==="highlightjs"?(Z(),Q("p",Wb,[ce(" You can also use the "),Vb,ce(" styles. "),u("span",{innerHTML:i})])):Ye("",!0),p(s).id==="highlightjs"?(Z(),zt(m,{key:1,code:l[p(s).id].base16,highlightjs:!0,label:"Using a base16 theme",lang:"html",prismjs:!1,theme:p(o)},null,8,["code","theme"])):Ye("",!0),u("p",null,[ce(" You can also load the themes the traditional way of importing them directly from the "+ke(p(s).label)+" package in ",1),Gb,ce(". Make sure to set the "),Kb,ce(" prop to false to avoid it conflicting with the default theme. ")]),p(s).id==="prism"?(Z(),Q("p",Yb,[ce(" Themes from their "),u("a",{href:p(t).themes,target:"_blank"},"Prism themes",8,Jb),ce(" repository can be used this way as well. "),u("span",{innerHTML:i})])):Ye("",!0),q(m,{code:l[p(s).id].importJs,highlightjs:p(s).id==="highlightjs",label:"Using import (javascript)",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},null,8,["code","highlightjs","prismjs","theme"]),Zb,q(m,{code:l[p(s).id].importCss,highlightjs:p(s).id==="highlightjs",label:"Using <code>@use</code> (css/sass/scss)",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},{label:un(()=>[ce(" Using "),Xb,ce(" (css/sass/scss) ")]),_:1},8,["code","highlightjs","prismjs","theme"])])])}}},em={class:"row mb-5"},nm=u("h2",null,"Usage",-1),tm=[nm],am={class:"col-12"},sm={class:"col-12"},om=`<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo)\`;
<\/script>`,rm=`<template>
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

  alert(foo)\`;
<\/script>`,lm={__name:"UsageSection",setup(e){const n=ae("selectedLibrary"),t=ae("selectedTheme"),a=ae("styleData");function s(){alert("bar")}return(o,r)=>{const l=Qe("CodeBlock");return Z(),Q("div",em,[u("div",{class:Ce(p(a).h2ColClass)},tm,2),u("div",am,[q(l,{code:om,highlightjs:p(n).id==="highlightjs",label:"My Code",lang:"html",prismjs:p(n).id==="prism","show-run":!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])]),u("div",sm,[q(l,{code:rm,highlightjs:p(n).id==="highlightjs",label:"Run My Code",lang:"html",prismjs:p(n).id==="prism","run-tab":"",tabs:"",theme:p(t),onRun:s},null,8,["highlightjs","prismjs","theme"])])])}}};(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){function n(t,a){return"___"+t.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,o){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(s,function(l){if(typeof o=="function"&&!o(l))return l;for(var i=r.length,c;t.code.indexOf(c=n(a,i))!==-1;)++i;return r[i]=l,c}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language!==a||!t.tokenStack)return;t.grammar=e.languages[a];var s=0,o=Object.keys(t.tokenStack);function r(l){for(var i=0;i<l.length&&!(s>=o.length);i++){var c=l[i];if(typeof c=="string"||c.content&&typeof c.content=="string"){var h=o[s],m=t.tokenStack[h],g=typeof c=="string"?c:c.content,v=n(a,h),w=g.indexOf(v);if(w>-1){++s;var y=g.substring(0,w),k=new e.Token(a,e.tokenize(m,t.grammar),"language-"+a,m),T=g.substring(w+v.length),b=[];y&&b.push.apply(b,r([y])),b.push(k),T&&b.push.apply(b,r([T])),typeof c=="string"?l.splice.apply(l,[i,1].concat(b)):c.content=b}}else c.content&&r(c.content)}return l}r(t.tokens)}}})})(Prism);(function(e){var n=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,s=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:n,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:s,punctuation:o};var r={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},l=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:r}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:r}}];e.languages.insertBefore("php","variable",{string:l,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:n,string:l,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:a,operator:s,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(i){if(/<\?/.test(i.code)){var c=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(i,"php",c)}}),e.hooks.add("after-tokenize",function(i){e.languages["markup-templating"].tokenizePlaceholders(i,"php")})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(r,l){if(!(r.tagName!=="PRE"||!r.classList.contains(e))){var i=r.querySelector(".line-numbers-rows");if(i){var c=parseInt(r.getAttribute("data-start"),10)||1,h=c+(i.children.length-1);l<c&&(l=c),l>h&&(l=h);var m=l-c;return i.children[m]}}},resize:function(r){a([r])},assumeViewportIndependence:!0};function a(r){if(r=r.filter(function(i){var c=s(i),h=c["white-space"];return h==="pre-wrap"||h==="pre-line"}),r.length!=0){var l=r.map(function(i){var c=i.querySelector("code"),h=i.querySelector(".line-numbers-rows");if(!(!c||!h)){var m=i.querySelector(".line-numbers-sizer"),g=c.textContent.split(n);m||(m=document.createElement("span"),m.className="line-numbers-sizer",c.appendChild(m)),m.innerHTML="0",m.style.display="block";var v=m.getBoundingClientRect().height;return m.innerHTML="",{element:i,lines:g,lineHeights:[],oneLinerHeight:v,sizer:m}}}).filter(Boolean);l.forEach(function(i){var c=i.sizer,h=i.lines,m=i.lineHeights,g=i.oneLinerHeight;m[h.length-1]=void 0,h.forEach(function(v,w){if(v&&v.length>1){var y=c.appendChild(document.createElement("span"));y.style.display="block",y.textContent=v}else m[w]=g})}),l.forEach(function(i){for(var c=i.sizer,h=i.lineHeights,m=0,g=0;g<h.length;g++)h[g]===void 0&&(h[g]=c.children[m++].getBoundingClientRect().height)}),l.forEach(function(i){var c=i.sizer,h=i.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",i.lineHeights.forEach(function(m,g){h.children[g].style.height=m+"px"})})}}function s(r){return r?window.getComputedStyle?getComputedStyle(r):r.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(r){if(r.code){var l=r.element,i=l.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!l.querySelector(".line-numbers-rows")&&Prism.util.isActive(l,e)){l.classList.remove(e),i.classList.add(e);var c=r.code.match(n),h=c?c.length+1:1,m,g=new Array(h+1).join("<span></span>");m=document.createElement("span"),m.setAttribute("aria-hidden","true"),m.className="line-numbers-rows",m.innerHTML=g,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),r.element.appendChild(m),a([i]),Prism.hooks.run("line-numbers",r)}}}),Prism.hooks.add("line-numbers",function(r){r.plugins=r.plugins||{},r.plugins.lineNumbers=!0})})();const im={class:"container mb-5"},cm=u("div",{class:"row mb-4"},[u("div",{class:"col-12 text-center"},[u("img",{alt:"Vue",class:"vue-logo",src:pg})])],-1),um={class:"row mb-3"},hm=u("div",{class:"col-12 text-center"},[u("h1",null,"Vue 3 CodeBlock")],-1),gm={class:"col-12 text-center"},pm={class:"badge bg-secondary rounded-pill"},dm={class:"container mb-5"},fm={class:"row"},bm={class:"col-12"},mm=["href"],ym=["href"],vm=u("hr",null,null,-1),jm={class:"row"},_m={class:"col-12 mb-3"},wm=u("h5",null,"Switch between PrismJS and Highlight.js",-1),km={class:"d-inline-flex align-items-center px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"},xm={class:"col-12 col-md-3 mb-3"},Em=["selected","value"],Cm={class:"row"},Sm={class:"col-12 col-md-3"},Tm=u("label",{class:"form-label",for:"theme-selection-select"},"Select Theme:",-1),Am=["selected","value"],Om={class:"container"},$m=kt({__name:"DemoPage",emits:["changedLibrary"],setup(e,{emit:n}){const t=ae("highlightJsLinks"),a=ae("prismLinks"),s=ho(),o=we("prism"),r=s.libraries,l=s.highlightThemes,i=s.neonBunnyThemes,c=s.prismThemes,h=we(null),m=we(r.prism),g=we("neon-bunny");so(()=>{o.value=s.getLocalStorage()??s.setLocalStorage("prism"),w(o.value)});const v=n;h.value=[...i,...c],Tn("selectedTheme",g),Tn("selectedLibrary",m),o.value==="highlightjs"&&(h.value=[...i,...l],m.value=r.highlightjs);function w(k){if(o.value=k,m.value=r[k],g.value="neon-bunny",s.setLocalStorage(o.value),v("changedLibrary",m),k==="prism"){h.value=[...i,...c];return}h.value=[...i,...l]}function y(k){g.value=k}return(k,T)=>{const b=Qe("fa-icon");return Z(),Q(Oe,null,[u("div",im,[cm,u("div",um,[hm,u("div",gm,[u("span",pm,ke(p(oi)),1)])])]),u("div",dm,[u("div",fm,[u("div",bm,[u("p",null,[ce(" The Vue 3 CodeBlock component leverages the power of "),u("a",{href:p(a).homepage,target:"_blank"},"PrismJS",8,mm),ce(" or "),u("a",{href:p(t).homepage,target:"_blank"},"Highlight.js",8,ym),ce(" to provide syntax highlighting for code blocks within your application. The component takes a prop, which is the code to be highlighted, and uses PrismJS or Highlight.js to render the code with syntax highlighting. The component supports a variety of programming languages and can be customized with different themes to match your application's design. With this component, your users can display their code snippets with ease and clarity, making it easier to share and collaborate on code within your application. ")])])]),vm,u("div",jm,[u("div",_m,[wm,u("small",km,[q(b,{class:"text-success me-1",icon:"fa-solid fa-circle-info"}),ce(" This will also update the examples and documentation below. ")])]),u("div",xm,[u("select",{"aria-label":"Library Selection",class:"form-select",onChange:T[0]||(T[0]=f=>w(f.target.value))},[(Z(!0),Q(Oe,null,Qn(p(r),f=>(Z(),Q("option",{key:f,selected:o.value===f.id,value:f.id},ke(f.label),9,Em))),128))],32)])]),u("div",Cm,[u("div",Sm,[Tm,u("select",{id:"theme-selection-select","aria-label":"Theme Selection",class:"form-select",onChange:T[1]||(T[1]=f=>y(f.target.value))},[(Z(!0),Q(Oe,null,Qn(h.value,f=>(Z(),Q("option",{key:f,selected:g.value===f.value,value:f.value},ke(f.label),9,Am))),128))],32)])])]),u("div",Om,[q(p(Jf),{id:"ul-installation"}),q(p(Nb),{id:"ul-register-plugin"}),q(p(lm),{id:"ul-usage"}),q(p(bb),{id:"ul-props"}),q(p(Qb),{id:"ul-themes"}),q(p(Hf),{id:"ul-events"}),q(p(Cb),{id:"ul-slots"}),q(p(Nf),{id:"ul-examples"}),q(p(Pg),{id:"ul-css-vars"}),q(p(Kg),{id:"ul-dependencies"}),q(p(vg),{id:"ul-change-log"}),q(p(ab),{id:"ul-license"})])],64)}}});const Nm={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5"},Mm={class:"container"},Im=u("a",{class:"navbar-brand",href:"/vue-code-block/"},"Vue 3 CodeBlock",-1),Rm=u("button",{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",class:"navbar-toggler","data-bs-target":"#navbarSupportedContent","data-bs-toggle":"collapse",type:"button"},[u("span",{class:"navbar-toggler-icon"})],-1),Pm={id:"navbarSupportedContent",class:"collapse navbar-collapse"},Lm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Bm={class:"nav-item"},Fm={"aria-current":"page",class:"nav-link active",href:"/vue-code-block/"},Dm={key:0,class:"nav-item dropdown"},zm=u("a",{id:"docs-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Docs ",-1),Hm=lo('<ul aria-labelledby="docs-dropdown" class="dropdown-menu dropdown-menu-dark"><li><a class="dropdown-item" href="#ul-installation"> Installation </a></li><li><a class="dropdown-item" href="#ul-register-plugin">Register Component</a></li><li><a class="dropdown-item" href="#ul-props">Props</a></li><li><a class="dropdown-item" href="#ul-themes">Themes</a></li><li><a class="dropdown-item" href="#ul-events">Events</a></li><li><a class="dropdown-item" href="#ul-slots">Slots</a></li><li><a class="dropdown-item" href="#ul-examples">Examples</a></li><li><a class="dropdown-item" href="#ul-css-vars">CSS Variables</a></li><li><hr class="dropdown-divider"></li><li><h6 class="dropdown-header">Info</h6></li><li><a class="dropdown-item" href="#ul-dependencies"> Dependencies </a></li><li><a class="dropdown-item" href="#ul-change-log">Change Log</a></li><li><a class="dropdown-item" href="#ul-license">License</a></li></ul>',1),Um=[zm,Hm],qm={key:1,class:"nav-item dropdown"},Wm=u("a",{id:"examples-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Examples ",-1),Vm=lo('<ul aria-labelledby="examples-dropdown" class="dropdown-menu dropdown-menu-dark"><li><a class="dropdown-item" href="#lang-examples">Languages</a></li><li><a class="dropdown-item" href="#add-lang-examples"> Additional Languages </a></li><li><a class="dropdown-item" href="#plugin-examples">Plugins</a></li><li><a class="dropdown-item" href="#tab-examples">Tabs</a></li><li><a class="dropdown-item" href="#copy-button-examples"> Copy Button </a></li><li><a class="dropdown-item" href="#browser-window-examples"> Browser Window </a></li><li><a class="dropdown-item" href="#other-prop-examples"> Other Props </a></li></ul>',1),Gm=[Wm,Vm],Km={class:"d-flex my-2 me-2"},Ym=["href"],Jm={class:"d-flex"},Zm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Xm={class:"nav-item"},Qm=["href"],ey={class:"nav-item"},ny=["href"],ty={class:"nav-item d-flex align-items-center ms-2"},ay={__name:"NavBar",props:{isPlayground:{type:Boolean,default:!1},selectedLibrary:{type:Object,required:!0}},setup(e){const n=ae("links"),t=ae("prismLinks"),a=ae("highlightJsLinks"),s=ho(),o=localStorage.getItem("theme"),r=we(o),l=()=>o||"dark",i=function(c){r.value=s.setTheme(c,r.value)};return i(l()),(c,h)=>{const m=Qe("fa-icon");return Z(),Q("nav",Nm,[u("div",Mm,[Im,Rm,u("div",Pm,[u("ul",Lm,[u("li",Bm,[u("a",Fm,[q(m,{icon:"fa-solid fa-house"})])]),e.isPlayground?Ye("",!0):(Z(),Q("li",Dm,Um)),e.isPlayground?Ye("",!0):(Z(),Q("li",qm,Gm))]),u("div",Km,[u("a",{href:e.selectedLibrary.id==="prism"?p(t).homepage:p(a).homepage,target:"_blank"},[u("span",{class:Ce(["badge",e.selectedLibrary.id==="prism"?"badge-prism":"badge-highlightjs"])},ke(e.selectedLibrary.label)+" Active",3)],8,Ym)]),u("div",Jm,[u("ul",Zm,[u("li",Xm,[u("a",{class:"nav-link",href:p(n).github,target:"_blank"},[q(m,{icon:"fa-brands fa-github"}),ce(" GitHub ")],8,Qm)]),u("li",ey,[u("a",{class:"nav-link",href:p(n).npm,target:"_blank"},[q(m,{icon:"fa-brands fa-npm"}),ce(" Package ")],8,ny)]),u("li",ty,[q(m,{class:Ce(["theme-switch fa-fw",r.value==="dark"?"moon":"sun"]),icon:r.value==="dark"?"fa-moon":"fa-sun",onClick:h[0]||(h[0]=g=>i("toggle"))},null,8,["class","icon"])])])])])])])}}},sy={class:"footer-container container-fluid"},oy={class:"container py-2"},ry={class:"d-flex flex-wrap justify-content-between align-items-center my-2"},ly={class:"text-muted col-md-4 d-flex align-items-center"},iy=["href"],cy={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},uy={class:"ms-3"},hy=["href"],gy={class:"ms-3"},py=["href"],dy=kt({__name:"FooterBar",setup(e){const n=ae("links"),t=new Date().getFullYear();return(a,s)=>{const o=Qe("fa-icon");return Z(),Q("div",sy,[u("div",oy,[u("footer",ry,[u("div",ly,[ce(" © "+ke(p(t))+" ",1),u("a",{class:"text-muted btn btn-link d-flex-inline ps-2",href:p(n).githubProfile,target:"_blank"},"WebDevNerdStuff",8,iy)]),u("ul",cy,[u("li",uy,[u("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:p(n).github,role:"button",target:"_blank"},[q(o,{icon:"fa-brands fa-github"})],8,hy)]),u("li",gy,[u("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:p(n).npm,role:"button",target:"_blank"},[q(o,{icon:"fa-brands fa-npm"})],8,py)])])])])])}}});const fy=kt({__name:"App",setup(e){Tn("styleData",{h2ColClass:"col-12 mb-4",fieldWidth:{maxWidth:"100%",width:"300px"}});const n=ho(),t=we({});Tn("links",n.links),Tn("highlightJsLinks",n.highlightJsLinks),Tn("prismLinks",n.prismLinks);const a=we({browserWindow:!1,preHeight:"30em"});Tn("codeBlockOptions",a);function s(o){t.value=o.value}return(o,r)=>(Z(),Q(Oe,null,[q(ay,{"selected-library":t.value},null,8,["selected-library"]),q($m,{onChangedLibrary:s}),q(dy)],64))}}),by="modulepreload",my=function(e){return"/vue-code-block/"+e},xr={},Er=function(n,t,a){if(!t||t.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=my(o),o in xr)return;xr[o]=!0;const r=o.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!a)for(let h=s.length-1;h>=0;h--){const m=s[h];if(m.href===o&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":by,r||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),r)return new Promise((h,m)=>{c.addEventListener("load",h),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};var Ms={exports:{}};(function(e,n){(function(t,a){var s="1.0.37",o="",r="?",l="function",i="undefined",c="object",h="string",m="major",g="model",v="name",w="type",y="vendor",k="version",T="architecture",b="console",f="mobile",_="tablet",E="smarttv",R="wearable",F="embedded",H=500,M="Amazon",ee="Apple",he="ASUS",_e="BlackBerry",me="Browser",ye="Chrome",xe="Edge",ge="Firefox",A="Google",$="Huawei",K="LG",le="Microsoft",pe="Motorola",ue="Opera",Y="Samsung",ve="Sharp",je="Sony",ie="Xiaomi",Me="Zebra",Fe="Facebook",Ie="Chromium OS",We="Mac OS",Re=function(z,V){var x={};for(var I in z)V[I]&&V[I].length%2===0?x[I]=V[I].concat(z[I]):x[I]=z[I];return x},d=function(z){for(var V={},x=0;x<z.length;x++)V[z[x].toUpperCase()]=z[x];return V},j=function(z,V){return typeof z===h?C(V).indexOf(C(z))!==-1:!1},C=function(z){return z.toLowerCase()},P=function(z){return typeof z===h?z.replace(/[^\d\.]/g,o).split(".")[0]:a},N=function(z,V){if(typeof z===h)return z=z.replace(/^\s\s*/,o),typeof V===i?z:z.substring(0,H)},B=function(z,V){for(var x=0,I,G,oe,se,te,De;x<V.length&&!te;){var kn=V[x],Ve=V[x+1];for(I=G=0;I<kn.length&&!te&&kn[I];)if(te=kn[I++].exec(z),te)for(oe=0;oe<Ve.length;oe++)De=te[++G],se=Ve[oe],typeof se===c&&se.length>0?se.length===2?typeof se[1]==l?this[se[0]]=se[1].call(this,De):this[se[0]]=se[1]:se.length===3?typeof se[1]===l&&!(se[1].exec&&se[1].test)?this[se[0]]=De?se[1].call(this,De,se[2]):a:this[se[0]]=De?De.replace(se[1],se[2]):a:se.length===4&&(this[se[0]]=De?se[3].call(this,De.replace(se[1],se[2])):a):this[se]=De||a;x+=2}},U=function(z,V){for(var x in V)if(typeof V[x]===c&&V[x].length>0){for(var I=0;I<V[x].length;I++)if(j(V[x][I],z))return x===r?a:x}else if(j(V[x],z))return x===r?a:x;return z},S={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},D={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},O={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[k,[v,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[k,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,k],[/opios[\/ ]+([\w\.]+)/i],[k,[v,ue+" Mini"]],[/\bopr\/([\w\.]+)/i],[k,[v,ue]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[k,[v,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[v,k],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[k,[v,"UC"+me]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[k,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[k,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[k,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[k,[v,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[k,[v,"Smart Lenovo "+me]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure "+me],k],[/\bfocus\/([\w\.]+)/i],[k,[v,ge+" Focus"]],[/\bopt\/([\w\.]+)/i],[k,[v,ue+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[k,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[k,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[k,[v,ue+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[k,[v,"MIUI "+me]],[/fxios\/([-\w\.]+)/i],[k,[v,ge]],[/\bqihu|(qi?ho?o?|360)browser/i],[[v,"360 "+me]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1 "+me],k],[/samsungbrowser\/([\w\.]+)/i],[k,[v,Y+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[v,/_/g," "],k],[/metasr[\/ ]?([\d\.]+)/i],[k,[v,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[v,"Sogou Mobile"],k],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[v,k],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,Fe],k],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[v,k],[/\bgsa\/([\w\.]+) .*safari\//i],[k,[v,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[k,[v,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[k,[v,ye+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,ye+" WebView"],k],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[k,[v,"Android "+me]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,k],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[k,[v,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[k,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[k,U,S]],[/(webkit|khtml)\/([\w\.]+)/i],[v,k],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],k],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[k,[v,ge+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[v,k],[/(cobalt)\/([\w\.]+)/i],[v,[k,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[T,"amd64"]],[/(ia32(?=;))/i],[[T,C]],[/((?:i[346]|x)86)[;\)]/i],[[T,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[T,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[T,"armhf"]],[/windows (ce|mobile); ppc;/i],[[T,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[T,/ower/,o,C]],[/(sun4\w)[;\)]/i],[[T,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[T,C]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[g,[y,Y],[w,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[g,[y,Y],[w,f]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[g,[y,ee],[w,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[g,[y,ee],[w,_]],[/(macintosh);/i],[g,[y,ee]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[g,[y,ve],[w,f]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[g,[y,$],[w,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[g,[y,$],[w,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[g,/_/g," "],[y,ie],[w,f]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[g,/_/g," "],[y,ie],[w,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[g,[y,"OPPO"],[w,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[g,[y,"Vivo"],[w,f]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[g,[y,"Realme"],[w,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[g,[y,pe],[w,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[g,[y,pe],[w,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[g,[y,K],[w,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[g,[y,K],[w,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[g,[y,"Lenovo"],[w,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[g,/_/g," "],[y,"Nokia"],[w,f]],[/(pixel c)\b/i],[g,[y,A],[w,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[g,[y,A],[w,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[g,[y,je],[w,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[g,"Xperia Tablet"],[y,je],[w,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[g,[y,"OnePlus"],[w,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[g,[y,M],[w,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[g,/(.+)/g,"Fire Phone $1"],[y,M],[w,f]],[/(playbook);[-\w\),; ]+(rim)/i],[g,y,[w,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[g,[y,_e],[w,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[g,[y,he],[w,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[g,[y,he],[w,f]],[/(nexus 9)/i],[g,[y,"HTC"],[w,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[y,[g,/_/g," "],[w,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[g,[y,"Acer"],[w,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[g,[y,"Meizu"],[w,f]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[g,[y,"Ulefone"],[w,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[y,g,[w,f]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[y,g,[w,_]],[/(surface duo)/i],[g,[y,le],[w,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[g,[y,"Fairphone"],[w,f]],[/(u304aa)/i],[g,[y,"AT&T"],[w,f]],[/\bsie-(\w*)/i],[g,[y,"Siemens"],[w,f]],[/\b(rct\w+) b/i],[g,[y,"RCA"],[w,_]],[/\b(venue[\d ]{2,7}) b/i],[g,[y,"Dell"],[w,_]],[/\b(q(?:mv|ta)\w+) b/i],[g,[y,"Verizon"],[w,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[g,[y,"Barnes & Noble"],[w,_]],[/\b(tm\d{3}\w+) b/i],[g,[y,"NuVision"],[w,_]],[/\b(k88) b/i],[g,[y,"ZTE"],[w,_]],[/\b(nx\d{3}j) b/i],[g,[y,"ZTE"],[w,f]],[/\b(gen\d{3}) b.+49h/i],[g,[y,"Swiss"],[w,f]],[/\b(zur\d{3}) b/i],[g,[y,"Swiss"],[w,_]],[/\b((zeki)?tb.*\b) b/i],[g,[y,"Zeki"],[w,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[y,"Dragon Touch"],g,[w,_]],[/\b(ns-?\w{0,9}) b/i],[g,[y,"Insignia"],[w,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[g,[y,"NextBook"],[w,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[y,"Voice"],g,[w,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[y,"LvTel"],g,[w,f]],[/\b(ph-1) /i],[g,[y,"Essential"],[w,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[g,[y,"Envizen"],[w,_]],[/\b(trio[-\w\. ]+) b/i],[g,[y,"MachSpeed"],[w,_]],[/\btu_(1491) b/i],[g,[y,"Rotor"],[w,_]],[/(shield[\w ]+) b/i],[g,[y,"Nvidia"],[w,_]],[/(sprint) (\w+)/i],[y,g,[w,f]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[y,le],[w,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[g,[y,Me],[w,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[g,[y,Me],[w,f]],[/smart-tv.+(samsung)/i],[y,[w,E]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[y,Y],[w,E]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[y,K],[w,E]],[/(apple) ?tv/i],[y,[g,ee+" TV"],[w,E]],[/crkey/i],[[g,ye+"cast"],[y,A],[w,E]],[/droid.+aft(\w+)( bui|\))/i],[g,[y,M],[w,E]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[g,[y,ve],[w,E]],[/(bravia[\w ]+)( bui|\))/i],[g,[y,je],[w,E]],[/(mitv-\w{5}) bui/i],[g,[y,ie],[w,E]],[/Hbbtv.*(technisat) (.*);/i],[y,g,[w,E]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[y,N],[g,N],[w,E]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,E]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[y,g,[w,b]],[/droid.+; (shield) bui/i],[g,[y,"Nvidia"],[w,b]],[/(playstation [345portablevi]+)/i],[g,[y,je],[w,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[g,[y,le],[w,b]],[/((pebble))app/i],[y,g,[w,R]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[g,[y,ee],[w,R]],[/droid.+; (glass) \d/i],[g,[y,A],[w,R]],[/droid.+; (wt63?0{2,3})\)/i],[g,[y,Me],[w,R]],[/(quest( 2| pro)?)/i],[g,[y,Fe],[w,R]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[y,[w,F]],[/(aeobc)\b/i],[g,[y,M],[w,F]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[g,[w,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[g,[w,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,f]],[/(android[-\w\. ]{0,9});.+buil/i],[g,[y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[k,[v,xe+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[k,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,k],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[k,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,k],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[v,[k,U,D]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[k,U,D],[v,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[k,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,We],[k,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[k,v],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[v,k],[/\(bb(10);/i],[k,[v,_e]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[k,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[k,[v,ge+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[k,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[k,[v,"watchOS"]],[/crkey\/([\d\.]+)/i],[k,[v,ye+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,Ie],k],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,k],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],k],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,k]]},L=function(z,V){if(typeof z===c&&(V=z,z=a),!(this instanceof L))return new L(z,V).getResult();var x=typeof t!==i&&t.navigator?t.navigator:a,I=z||(x&&x.userAgent?x.userAgent:o),G=x&&x.userAgentData?x.userAgentData:a,oe=V?Re(O,V):O,se=x&&x.userAgent==I;return this.getBrowser=function(){var te={};return te[v]=a,te[k]=a,B.call(te,I,oe.browser),te[m]=P(te[k]),se&&x&&x.brave&&typeof x.brave.isBrave==l&&(te[v]="Brave"),te},this.getCPU=function(){var te={};return te[T]=a,B.call(te,I,oe.cpu),te},this.getDevice=function(){var te={};return te[y]=a,te[g]=a,te[w]=a,B.call(te,I,oe.device),se&&!te[w]&&G&&G.mobile&&(te[w]=f),se&&te[g]=="Macintosh"&&x&&typeof x.standalone!==i&&x.maxTouchPoints&&x.maxTouchPoints>2&&(te[g]="iPad",te[w]=_),te},this.getEngine=function(){var te={};return te[v]=a,te[k]=a,B.call(te,I,oe.engine),te},this.getOS=function(){var te={};return te[v]=a,te[k]=a,B.call(te,I,oe.os),se&&!te[v]&&G&&G.platform!="Unknown"&&(te[v]=G.platform.replace(/chrome os/i,Ie).replace(/macos/i,We)),te},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return I},this.setUA=function(te){return I=typeof te===h&&te.length>H?N(te,H):te,this},this.setUA(I),this};L.VERSION=s,L.BROWSER=d([v,k,m]),L.CPU=d([T]),L.DEVICE=d([g,y,w,b,f,E,_,R,F]),L.ENGINE=L.OS=d([v,k]),e.exports&&(n=e.exports=L),n.UAParser=L;var W=typeof t!==i&&(t.jQuery||t.Zepto);if(W&&!W.ua){var X=new L;W.ua=X.getResult(),W.ua.get=function(){return X.getUA()},W.ua.set=function(z){X.setUA(z);var V=X.getResult();for(var x in V)W.ua[x]=V[x]}}})(typeof window=="object"?window:Ns)})(Ms,Ms.exports);var yy=Ms.exports;const vy=fo(yy),jy={browserWindow:!1,cssPath:void 0,code:"",codeBlockRadius:"0.5rem",copyButton:!0,copyIcons:!0,copyTab:!0,copyFailedText:"Copy failed!",copyText:"Copy Code",copySuccessText:"Copied!",floatingTabs:!0,height:"auto",highlightjs:!1,indent:2,label:"",lang:"javascript",maxHeight:"auto",persistentCopyButton:!1,prismjs:!1,prismPlugin:!1,runTab:!1,runText:"Run",tabGap:"0.25rem",tabs:!1,theme:"neon-bunny"},Ue="v-code-block";function Oi(e){return e===""||e==="prism"?"default":e}function $i(e){return e?"highlightjs":"prism"}const _y=e=>{const{isMobile:n,isPrism:t}=e;return{[`${Ue}`]:!0,[`${Ue}-mb-5`]:!0,[`${Ue}--mobile`]:p(n),[`${Ue}--prismjs`]:p(t),[`${Ue}--highlightjs`]:!p(t)}},wy=e=>{const{copyStatus:n,isMobile:t,persistentCopyButton:a}=e;return{[`${Ue}--code-copy-button`]:!0,[`${Ue}--code-copy-button-mobile`]:p(t),[`${Ue}--code-copy-button-persist`]:p(a),[`${Ue}--code-copy-button-status-${p(n)}`]:!0}},ky=e=>{const{copyStatus:n,highlightjs:t,useTheme:a}=e,s=$i(p(t)),o=Oi(p(a));return{[`${Ue}--button-copy-icon-status-${p(n)}`]:!0,[`${Ue}--me-1`]:!0,[`${Ue}--tab-${s}-${o}-icon-status-${p(n)}`]:!0,[`${Ue}--tab-${s}-${o}-icon`]:!0}},xy=e=>{const{isMobile:n}=e;return{[`${Ue}--label`]:!0,[`${Ue}--label-mobile`]:p(n)}},Ey=e=>{const{highlightjs:n,useTheme:t}=e,a=$i(p(n)),s=Oi(p(t));return{[`${Ue}--tab-${s}`]:!0,[`${Ue}--tab-${a}-${s}`]:!0}};function Na(e,n="px"){if(!(e==null||e===""||typeof e>"u"))return+e?`${Number(e)}${n}`:String(e)}const Cy=e=>{const{isLoading:n,useTheme:t}=e;return{width:p(t)==="coy"&&n===!1?"100%":""}},Sy=e=>{const{floatingTabs:n,tabGap:t}=e;return{bottom:n?"1px":"0",gap:Na(p(t))}},Ty=e=>{const{copyTab:n,height:t,maxHeight:a,radius:s,runTab:o,tabs:r,useTheme:l}=e;let i=`${s} 0 ${s} ${s} !important`;(!p(r)||!p(n)&&!p(o))&&(i=s);const c=p(l)!=="funky"?"flex":"block";return{borderRadius:i,display:c,height:Na(p(t)),maxHeight:Na(p(a)),overflow:"auto"}},Ay=e=>{const{tabGap:n}=e;return{gap:Na(p(n))}},Oy=u("path",{d:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"},null,-1),$y=[Oy],Ny=u("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1),My=[Ny],Iy=u("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"},null,-1),Ry=[Iy],Cr=kt({__name:"StatusIcons",props:{icon:{type:String,required:!0}},setup(e){return(n,t)=>e.icon==="copy"?(Z(),Q("svg",Nt({key:0},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),$y,16)):e.icon==="success"?(Z(),Q("svg",Nt({key:1},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),My,16)):e.icon==="failed"?(Z(),Q("svg",Nt({key:2},n.$attrs,{viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"}),Ry,16)):Ye("",!0)}});function Py(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const Ly={class:"v-code-block--button-copy"},By={class:"v-code-block--button-run"},Fy={class:"v-code-block--code"},Dy=["textContent"],zy=["innerHTML"],Hy="11.8.0",Uy="1.29.0",qy="1.9.0",Wy=kt({__name:"CodeBlock",props:Su({browserWindow:{type:Boolean},cssPath:{},code:{},codeBlockRadius:{},copyButton:{type:Boolean},copyIcons:{type:Boolean},copyTab:{type:Boolean},copyFailedText:{},copyText:{},copySuccessText:{},floatingTabs:{type:Boolean},globalOptions:{type:Boolean},height:{},highlightjs:{type:Boolean},indent:{},label:{},lang:{},languages:{},maxHeight:{},persistentCopyButton:{type:Boolean},prismjs:{type:Boolean},prismPlugin:{type:Boolean},runTab:{type:Boolean},runText:{},tabGap:{},tabs:{type:Boolean},theme:{type:[String,Boolean]}},{...jy}),emits:["run","update:copy-status"],setup(e,{emit:n}){const t=n,a=Eu(),s=e;let o,r;const l=we(null),i=we("copy"),c=we(""),h=we(!1),m=we(!1),g=we(!1),v=we(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${Hy}/build/styles`),w=we(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${Uy}/themes`),y=we(`https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@${qy}/themes`),k=we(""),T=we(""),b=we(""),{cssPath:f}=xl(s),_=ze(()=>{let Y="";return s.highlightjs&&(Y=k.value),s.prismjs&&s.prismPlugin&&(Y=l.value),Y}),E=ze(()=>_y({isMobile:g,isPrism:s.prismjs})),R=ze(()=>wy({copyStatus:i,isMobile:g,persistentCopyButton:s.persistentCopyButton})),F=ze(()=>ky({copyStatus:i,highlightjs:s.highlightjs,useTheme:b})),H=ze(()=>xy({isMobile:g})),M=ze(()=>Ey({highlightjs:s.highlightjs,useTheme:b})),ee=ze(()=>Cy({isLoading:m,useTheme:b})),he=ze(()=>Sy({floatingTabs:s.floatingTabs,tabGap:s.tabGap})),_e=ze(()=>Ty({copyTab:s.copyTab,height:s.height,maxHeight:s.maxHeight,radius:s.codeBlockRadius,runTab:s.runTab,tabs:s.tabs,useTheme:b})),me=ze(()=>Ay({tabGap:s.tabGap}));Yn(s,()=>{s.code&&pe(),(s.theme||s.prismjs||s.highlightjs)&&(ye(),b.value=s.theme,A()),s.copyText&&(c.value=s.copyText),s.runText&&(T.value=s.runText)}),Yn(()=>f.value,()=>{A()}),so(()=>{c.value=s.copyText,T.value=s.runText,ye()}),Bl(()=>{b.value=s.theme,A(),$(),pe()});function ye(){if(!s.prismjs&&!s.highlightjs)throw new Error("[vue-code-block]: You must set either the prismjs or highlightjs props.");if(s.prismjs&&s.highlightjs)throw new Error("[vue-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");s.highlightjs&&s.prismPlugin&&console.warn("[vue-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue-code-block component.")}function xe(){if(s.lang==="json"){const Y=s.code.toString();l.value=JSON.stringify(JSON.parse(Y),null,s.indent);return}l.value=s.code}function ge(){h.value||(h.value=!0,navigator.clipboard.writeText(l.value).then(()=>{c.value=s.copySuccessText,i.value="success",t("update:copy-status",i.value)},Y=>{c.value=s.copyFailedText,i.value="failed",t("update:copy-status",i.value),console.error("Copy to clipboard failed: ",Y)}),setTimeout(()=>{c.value=s.copyText,i.value="copy",t("update:copy-status",i.value),h.value=!1},3e3))}function A(){let Y="";const ve=s.highlightjs?"highlightjs":"prism",je=document.getElementsByTagName("head")[0],ie=document.createElement("style"),Me=document.body.getAttribute("data-v-code-block-theme");let Fe=`v-code-block--theme-${b.value}-${ve}`,Ie=!0,We=!0,Re="",d="";if(Fe=K(ve,Fe),Me===b.value||Me===Fe||typeof b.value=="boolean")return;switch(document.body.setAttribute("data-v-code-block-theme",Fe),ie.setAttribute("type","text/css"),ie.setAttribute("data-theme-id",Fe),ie.setAttribute("data-theme","v-code-block--theme-sheet"),b.value){case"neon-bunny":Y=Cd,We=!1,Ie=!1,ve==="highlightjs"&&(Y=Td);break;case"neon-bunny-carrot":Y=Sd,We=!1,Ie=!1,ve==="highlightjs"&&(Y=Ad);break}if(!We&&!Ie){le(),ie.appendChild(document.createTextNode(Y)),je.appendChild(ie);return}const j=K(ve,b.value);if(typeof f.value<"u")d=f.value;else switch(ve){case"highlightjs":Re=`${j}.min.css`,d=`${v.value}/${Re}`;break;case"prism":Re=`${j}.css`,b.value==="default"?d=`${w.value}/prism.css`:b.value.includes("themes-")?d=`${y.value}/${Re}`:d=`${w.value}/prism-${Re}`;break;default:Re="";break}m.value=!0,fetch(d).then(C=>C.text()).then(C=>{le(),ie.appendChild(document.createTextNode(C)),je.appendChild(ie),m.value=!1}).catch(C=>{const P=s.highlightjs?"Highlight.js":"PrismJS";console.error(`${P} CDN Error:`,C)})}function $(){const ve=vy().device;g.value=ve.type==="mobile"}window.addEventListener("orientationchange",()=>{$()});function K(Y,ve,je=!1){let ie=ve;return Y==="prism"&&(ie=ie.replace("themes-","prism-"),ie=ie.replace("prism-prism-","prism-"),ie=ie.replace("theme-prism-","theme-"),je&&(ie=ie.replace("prism-prism-",""),ie=ie.replace("prism-",""))),Y==="highlightjs"&&(ie=ie.replace("base16-","base16/")),ie}function le(){const Y=document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');Y.length>0&&Y.forEach(ve=>{ve.remove()})}function pe(){xe(),s.highlightjs&&Er(()=>import("./index-78d015a1.js"),[]).then(Y=>{o=Y.default,o.registerLanguage("plain",Py),k.value=o.highlight(l.value,{language:s.lang}).value}).catch(Y=>{console.error("Highlight.js import:",{err:Y})}),s.prismjs&&Er(()=>Promise.resolve().then(()=>Jg),void 0).then(Y=>{r=Y.default,k.value=r.highlight(l.value,r.languages[s.lang],s.lang)}).catch(Y=>{console.error("PrismJS import:",{err:Y})})}function ue(){t("run")}return(Y,ve)=>(Z(),Q("div",{class:Ce(p(E))},[Y.label||Y.tabs||p(a).label||p(a).tabs?(Z(),Q("div",{key:0,class:"v-code-block--header",style:An(p(he))},[u("div",{class:Ce(["v-code-block--label v-code-block--pb-1",p(H)])},[p(a).label?rs(Y.$slots,"label",{key:0},void 0,!0):(Z(),Q(Oe,{key:1},[ce(ke(s.label),1)],64))],2),u("div",{class:"v-code-block--tabs",style:An(p(me))},[p(a).tabs?rs(Y.$slots,"tabs",{key:0},void 0,!0):(Z(),Q(Oe,{key:1},[Y.copyTab&&Y.tabs?(Z(),Q("div",{key:0,class:Ce(["v-code-block--tab",p(M)]),onClick:ge},[u("div",Ly,[Y.copyIcons?(Z(),zt(Cr,{key:0,class:Ce(["v-code-block--button-copy-icon",p(F)]),icon:p(i)},null,8,["class","icon"])):Ye("",!0),ce(" "+ke(p(c)),1)])],2)):Ye("",!0),Y.runTab&&Y.tabs&&!p(g)?(Z(),Q("div",{key:1,class:Ce(["v-code-block--tab",p(M)]),onClick:ue},[u("div",By,ke(p(T)),1)],2)):Ye("",!0)],64))],4)],4)):Ye("",!0),u("div",Fy,[u("div",{class:Ce(["v-code-block--code-copy-button",p(R)]),onClick:ge},[p(a).copyButton?rs(Y.$slots,"copyButton",{key:0},void 0,!0):(Z(),Q(Oe,{key:1},[Y.copyButton?(Z(),zt(Cr,{key:0,class:Ce(["v-code-block--button-copy-icon",p(F)]),icon:p(i)},null,8,["class","icon"])):Ye("",!0)],64))],2),u("pre",Nt(Y.$attrs,{class:`language-${s.lang}`,style:p(_e)}),[ce("				"),Y.prismPlugin?(Z(),Q("code",{key:0,class:Ce(`language-${s.lang} ${Y.browserWindow?"v-code-block--code-browser":""} ${Y.highlightjs?"hljs":""}`),style:An(p(ee)),textContent:ke(p(_))},null,14,Dy)):(Z(),Q("code",{key:1,class:Ce(`language-${s.lang} ${Y.browserWindow?"v-code-block--code-browser":""} ${Y.highlightjs?"hljs":""}`),style:An(p(ee)),innerHTML:p(k)},null,14,zy)),ce(`
			`)],16)])],2))}});const jo=go(Wy,[["__scopeId","data-v-ecb0c03b"]]);const Vy=e=>{e.component("CodeBlock",jo)};jo.install=Vy;function Sr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Sr(Object(t),!0).forEach(function(a){Be(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Sr(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ma(e){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ma(e)}function Gy(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Tr(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ky(e,n,t){return n&&Tr(e.prototype,n),t&&Tr(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _o(e,n){return Jy(e)||Xy(e,n)||Ni(e,n)||ev()}function Zt(e){return Yy(e)||Zy(e)||Ni(e)||Qy()}function Yy(e){if(Array.isArray(e))return Is(e)}function Jy(e){if(Array.isArray(e))return e}function Zy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xy(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],s=!0,o=!1,r,l;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(a.push(r.value),!(n&&a.length===n));s=!0);}catch(i){o=!0,l=i}finally{try{!s&&t.return!=null&&t.return()}finally{if(o)throw l}}return a}}function Ni(e,n){if(e){if(typeof e=="string")return Is(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Is(e,n)}}function Is(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Qy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ev(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ar=function(){},wo={},Mi={},Ii=null,Ri={mark:Ar,measure:Ar};try{typeof window<"u"&&(wo=window),typeof document<"u"&&(Mi=document),typeof MutationObserver<"u"&&(Ii=MutationObserver),typeof performance<"u"&&(Ri=performance)}catch{}var nv=wo.navigator||{},Or=nv.userAgent,$r=Or===void 0?"":Or,Pn=wo,Ae=Mi,Nr=Ii,ia=Ri;Pn.document;var wn=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",Pi=~$r.indexOf("MSIE")||~$r.indexOf("Trident/"),ca,ua,ha,ga,pa,yn="___FONT_AWESOME___",Rs=16,Li="fa",Bi="svg-inline--fa",et="data-fa-i2svg",Ps="data-fa-pseudo-element",tv="data-fa-pseudo-element-pending",ko="data-prefix",xo="data-icon",Mr="fontawesome-i2svg",av="async",sv=["HTML","HEAD","STYLE","SCRIPT"],Fi=function(){try{return!0}catch{return!1}}(),Te="classic",$e="sharp",Eo=[Te,$e];function Xt(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[Te]}})}var Wt=Xt((ca={},Be(ca,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Be(ca,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ca)),Vt=Xt((ua={},Be(ua,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Be(ua,$e,{solid:"fass",regular:"fasr",light:"fasl"}),ua)),Gt=Xt((ha={},Be(ha,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Be(ha,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ha)),ov=Xt((ga={},Be(ga,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Be(ga,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ga)),rv=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Di="fa-layers-text",lv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,iv=Xt((pa={},Be(pa,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Be(pa,$e,{900:"fass",400:"fasr",300:"fasl"}),pa)),zi=[1,2,3,4,5,6,7,8,9,10],cv=zi.concat([11,12,13,14,15,16,17,18,19,20]),uv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kt=new Set;Object.keys(Vt[Te]).map(Kt.add.bind(Kt));Object.keys(Vt[$e]).map(Kt.add.bind(Kt));var hv=[].concat(Eo,Zt(Kt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(zi.map(function(e){return"".concat(e,"x")})).concat(cv.map(function(e){return"w-".concat(e)})),It=Pn.FontAwesomeConfig||{};function gv(e){var n=Ae.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function pv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ae&&typeof Ae.querySelector=="function"){var dv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dv.forEach(function(e){var n=_o(e,2),t=n[0],a=n[1],s=pv(gv(t));s!=null&&(It[a]=s)})}var Hi={styleDefault:"solid",familyDefault:"classic",cssPrefix:Li,replacementClass:Bi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};It.familyPrefix&&(It.cssPrefix=It.familyPrefix);var vt=J(J({},Hi),It);vt.autoReplaceSvg||(vt.observeMutations=!1);var ne={};Object.keys(Hi).forEach(function(e){Object.defineProperty(ne,e,{enumerable:!0,set:function(t){vt[e]=t,Rt.forEach(function(a){return a(ne)})},get:function(){return vt[e]}})});Object.defineProperty(ne,"familyPrefix",{enumerable:!0,set:function(n){vt.cssPrefix=n,Rt.forEach(function(t){return t(ne)})},get:function(){return vt.cssPrefix}});Pn.FontAwesomeConfig=ne;var Rt=[];function fv(e){return Rt.push(e),function(){Rt.splice(Rt.indexOf(e),1)}}var En=Rs,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bv(e){if(!(!e||!wn)){var n=Ae.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=Ae.head.childNodes,a=null,s=t.length-1;s>-1;s--){var o=t[s],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=o)}return Ae.head.insertBefore(n,a),e}}var mv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){for(var e=12,n="";e-- >0;)n+=mv[Math.random()*62|0];return n}function xt(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Co(e){return e.classList?xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ui(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yv(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Ui(e[t]),'" ')},"").trim()}function es(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function So(e){return e.size!==pn.size||e.x!==pn.x||e.y!==pn.y||e.rotate!==pn.rotate||e.flipX||e.flipY}function vv(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,s={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),r="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),i={transform:"".concat(o," ").concat(r," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:i,path:c}}function jv(e){var n=e.transform,t=e.width,a=t===void 0?Rs:t,s=e.height,o=s===void 0?Rs:s,r=e.startCentered,l=r===void 0?!1:r,i="";return l&&Pi?i+="translate(".concat(n.x/En-a/2,"em, ").concat(n.y/En-o/2,"em) "):l?i+="translate(calc(-50% + ".concat(n.x/En,"em), calc(-50% + ").concat(n.y/En,"em)) "):i+="translate(".concat(n.x/En,"em, ").concat(n.y/En,"em) "),i+="scale(".concat(n.size/En*(n.flipX?-1:1),", ").concat(n.size/En*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var _v=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
}`;function qi(){var e=Li,n=Bi,t=ne.cssPrefix,a=ne.replacementClass,s=_v;if(t!==e||a!==n){var o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");s=s.replace(o,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(l,".".concat(a))}return s}var Ir=!1;function gs(){ne.autoAddCss&&!Ir&&(bv(qi()),Ir=!0)}var wv={mixout:function(){return{dom:{css:qi,insertCss:gs}}},hooks:function(){return{beforeDOMElementCreation:function(){gs()},beforeI2svg:function(){gs()}}}},vn=Pn||{};vn[yn]||(vn[yn]={});vn[yn].styles||(vn[yn].styles={});vn[yn].hooks||(vn[yn].hooks={});vn[yn].shims||(vn[yn].shims=[]);var sn=vn[yn],Wi=[],kv=function e(){Ae.removeEventListener("DOMContentLoaded",e),Ia=1,Wi.map(function(n){return n()})},Ia=!1;wn&&(Ia=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),Ia||Ae.addEventListener("DOMContentLoaded",kv));function xv(e){wn&&(Ia?setTimeout(e,0):Wi.push(e))}function Qt(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,s=e.children,o=s===void 0?[]:s;return typeof e=="string"?Ui(e):"<".concat(n," ").concat(yv(a),">").concat(o.map(Qt).join(""),"</").concat(n,">")}function Rr(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Ev=function(n,t){return function(a,s,o,r){return n.call(t,a,s,o,r)}},ps=function(n,t,a,s){var o=Object.keys(n),r=o.length,l=s!==void 0?Ev(t,s):t,i,c,h;for(a===void 0?(i=1,h=n[o[0]]):(i=0,h=a);i<r;i++)c=o[i],h=l(h,n[c],c,n);return h};function Cv(e){for(var n=[],t=0,a=e.length;t<a;){var s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<a){var o=e.charCodeAt(t++);(o&64512)==56320?n.push(((s&1023)<<10)+(o&1023)+65536):(n.push(s),t--)}else n.push(s)}return n}function Ls(e){var n=Cv(e);return n.length===1?n[0].toString(16):null}function Sv(e,n){var t=e.length,a=e.charCodeAt(n),s;return a>=55296&&a<=56319&&t>n+1&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function Pr(e){return Object.keys(e).reduce(function(n,t){var a=e[t],s=!!a.icon;return s?n[a.iconName]=a.icon:n[t]=a,n},{})}function Bs(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,s=a===void 0?!1:a,o=Pr(n);typeof sn.hooks.addPack=="function"&&!s?sn.hooks.addPack(e,Pr(n)):sn.styles[e]=J(J({},sn.styles[e]||{}),o),e==="fas"&&Bs("fa",n)}var da,fa,ba,lt=sn.styles,Tv=sn.shims,Av=(da={},Be(da,Te,Object.values(Gt[Te])),Be(da,$e,Object.values(Gt[$e])),da),To=null,Vi={},Gi={},Ki={},Yi={},Ji={},Ov=(fa={},Be(fa,Te,Object.keys(Wt[Te])),Be(fa,$e,Object.keys(Wt[$e])),fa);function $v(e){return~hv.indexOf(e)}function Nv(e,n){var t=n.split("-"),a=t[0],s=t.slice(1).join("-");return a===e&&s!==""&&!$v(s)?s:null}var Zi=function(){var n=function(o){return ps(lt,function(r,l,i){return r[i]=ps(l,o,{}),r},{})};Vi=n(function(s,o,r){if(o[3]&&(s[o[3]]=r),o[2]){var l=o[2].filter(function(i){return typeof i=="number"});l.forEach(function(i){s[i.toString(16)]=r})}return s}),Gi=n(function(s,o,r){if(s[r]=r,o[2]){var l=o[2].filter(function(i){return typeof i=="string"});l.forEach(function(i){s[i]=r})}return s}),Ji=n(function(s,o,r){var l=o[2];return s[r]=r,l.forEach(function(i){s[i]=r}),s});var t="far"in lt||ne.autoFetchSvg,a=ps(Tv,function(s,o){var r=o[0],l=o[1],i=o[2];return l==="far"&&!t&&(l="fas"),typeof r=="string"&&(s.names[r]={prefix:l,iconName:i}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:l,iconName:i}),s},{names:{},unicodes:{}});Ki=a.names,Yi=a.unicodes,To=ns(ne.styleDefault,{family:ne.familyDefault})};fv(function(e){To=ns(e.styleDefault,{family:ne.familyDefault})});Zi();function Ao(e,n){return(Vi[e]||{})[n]}function Mv(e,n){return(Gi[e]||{})[n]}function Gn(e,n){return(Ji[e]||{})[n]}function Xi(e){return Ki[e]||{prefix:null,iconName:null}}function Iv(e){var n=Yi[e],t=Ao("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ln(){return To}var Oo=function(){return{prefix:null,iconName:null,rest:[]}};function ns(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?Te:t,s=Wt[a][e],o=Vt[a][e]||Vt[a][s],r=e in sn.styles?e:null;return o||r||null}var Lr=(ba={},Be(ba,Te,Object.keys(Gt[Te])),Be(ba,$e,Object.keys(Gt[$e])),ba);function ts(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,s=a===void 0?!1:a,o=(n={},Be(n,Te,"".concat(ne.cssPrefix,"-").concat(Te)),Be(n,$e,"".concat(ne.cssPrefix,"-").concat($e)),n),r=null,l=Te;(e.includes(o[Te])||e.some(function(c){return Lr[Te].includes(c)}))&&(l=Te),(e.includes(o[$e])||e.some(function(c){return Lr[$e].includes(c)}))&&(l=$e);var i=e.reduce(function(c,h){var m=Nv(ne.cssPrefix,h);if(lt[h]?(h=Av[l].includes(h)?ov[l][h]:h,r=h,c.prefix=h):Ov[l].indexOf(h)>-1?(r=h,c.prefix=ns(h,{family:l})):m?c.iconName=m:h!==ne.replacementClass&&h!==o[Te]&&h!==o[$e]&&c.rest.push(h),!s&&c.prefix&&c.iconName){var g=r==="fa"?Xi(c.iconName):{},v=Gn(c.prefix,c.iconName);g.prefix&&(r=null),c.iconName=g.iconName||v||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!lt.far&&lt.fas&&!ne.autoFetchSvg&&(c.prefix="fas")}return c},Oo());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&l===$e&&(lt.fass||ne.autoFetchSvg)&&(i.prefix="fass",i.iconName=Gn(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||r==="fa")&&(i.prefix=Ln()||"fas"),i}var Rv=function(){function e(){Gy(this,e),this.definitions={}}return Ky(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];var r=s.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(l){t.definitions[l]=J(J({},t.definitions[l]||{}),r[l]),Bs(l,r[l]);var i=Gt[Te][l];i&&Bs(i,r[l]),Zi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(o){var r=s[o],l=r.prefix,i=r.iconName,c=r.icon,h=c[2];t[l]||(t[l]={}),h.length>0&&h.forEach(function(m){typeof m=="string"&&(t[l][m]=c)}),t[l][i]=c}),t}}]),e}(),Br=[],it={},pt={},Pv=Object.keys(pt);function Lv(e,n){var t=n.mixoutsTo;return Br=e,it={},Object.keys(pt).forEach(function(a){Pv.indexOf(a)===-1&&delete pt[a]}),Br.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(r){typeof s[r]=="function"&&(t[r]=s[r]),Ma(s[r])==="object"&&Object.keys(s[r]).forEach(function(l){t[r]||(t[r]={}),t[r][l]=s[r][l]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(r){it[r]||(it[r]=[]),it[r].push(o[r])})}a.provides&&a.provides(pt)}),t}function Fs(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),s=2;s<t;s++)a[s-2]=arguments[s];var o=it[e]||[];return o.forEach(function(r){n=r.apply(null,[n].concat(a))}),n}function nt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var s=it[e]||[];s.forEach(function(o){o.apply(null,t)})}function jn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return pt[e]?pt[e].apply(null,n):void 0}function Ds(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Ln();if(n)return n=Gn(t,n)||n,Rr(Qi.definitions,t,n)||Rr(sn.styles,t,n)}var Qi=new Rv,Bv=function(){ne.autoReplaceSvg=!1,ne.observeMutations=!1,nt("noAuto")},Fv={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wn?(nt("beforeI2svg",n),jn("pseudoElements2svg",n),jn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;ne.autoReplaceSvg===!1&&(ne.autoReplaceSvg=!0),ne.observeMutations=!0,xv(function(){zv({autoReplaceSvgRoot:t}),nt("watch",n)})}},Dv={icon:function(n){if(n===null)return null;if(Ma(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Gn(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=ns(n[0]);return{prefix:a,iconName:Gn(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(ne.cssPrefix,"-"))>-1||n.match(rv))){var s=ts(n.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ln(),iconName:Gn(s.prefix,s.iconName)||s.iconName}}if(typeof n=="string"){var o=Ln();return{prefix:o,iconName:Gn(o,n)||n}}}},nn={noAuto:Bv,config:ne,dom:Fv,parse:Dv,library:Qi,findIconDefinition:Ds,toHtml:Qt},zv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?Ae:t;(Object.keys(sn.styles).length>0||ne.autoFetchSvg)&&wn&&ne.autoReplaceSvg&&nn.dom.i2svg({node:a})};function as(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Qt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(wn){var a=Ae.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Hv(e){var n=e.children,t=e.main,a=e.mask,s=e.attributes,o=e.styles,r=e.transform;if(So(r)&&t.found&&!a.found){var l=t.width,i=t.height,c={x:l/i/2,y:.5};s.style=es(J(J({},o),{},{"transform-origin":"".concat(c.x+r.x/16,"em ").concat(c.y+r.y/16,"em")}))}return[{tag:"svg",attributes:s,children:n}]}function Uv(e){var n=e.prefix,t=e.iconName,a=e.children,s=e.attributes,o=e.symbol,r=o===!0?"".concat(n,"-").concat(ne.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},s),{},{id:r}),children:a}]}]}function $o(e){var n=e.icons,t=n.main,a=n.mask,s=e.prefix,o=e.iconName,r=e.transform,l=e.symbol,i=e.title,c=e.maskId,h=e.titleId,m=e.extra,g=e.watchable,v=g===void 0?!1:g,w=a.found?a:t,y=w.width,k=w.height,T=s==="fak",b=[ne.replacementClass,o?"".concat(ne.cssPrefix,"-").concat(o):""].filter(function(M){return m.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(m.classes).join(" "),f={children:[],attributes:J(J({},m.attributes),{},{"data-prefix":s,"data-icon":o,class:b,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(k)})},_=T&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/k*16*.0625,"em")}:{};v&&(f.attributes[et]=""),i&&(f.children.push({tag:"title",attributes:{id:f.attributes["aria-labelledby"]||"title-".concat(h||Yt())},children:[i]}),delete f.attributes.title);var E=J(J({},f),{},{prefix:s,iconName:o,main:t,mask:a,maskId:c,transform:r,symbol:l,styles:J(J({},_),m.styles)}),R=a.found&&t.found?jn("generateAbstractMask",E)||{children:[],attributes:{}}:jn("generateAbstractIcon",E)||{children:[],attributes:{}},F=R.children,H=R.attributes;return E.children=F,E.attributes=H,l?Uv(E):Hv(E)}function Fr(e){var n=e.content,t=e.width,a=e.height,s=e.transform,o=e.title,r=e.extra,l=e.watchable,i=l===void 0?!1:l,c=J(J(J({},r.attributes),o?{title:o}:{}),{},{class:r.classes.join(" ")});i&&(c[et]="");var h=J({},r.styles);So(s)&&(h.transform=jv({transform:s,startCentered:!0,width:t,height:a}),h["-webkit-transform"]=h.transform);var m=es(h);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function qv(e){var n=e.content,t=e.title,a=e.extra,s=J(J(J({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),o=es(a.styles);o.length>0&&(s.style=o);var r=[];return r.push({tag:"span",attributes:s,children:[n]}),t&&r.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),r}var ds=sn.styles;function zs(e){var n=e[0],t=e[1],a=e.slice(4),s=_o(a,1),o=s[0],r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat(ne.cssPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ne.cssPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(ne.cssPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:t,icon:r}}var Wv={found:!1,width:512,height:512};function Vv(e,n){!Fi&&!ne.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Hs(e,n){var t=n;return n==="fa"&&ne.styleDefault!==null&&(n=Ln()),new Promise(function(a,s){if(jn("missingIconAbstract"),t==="fa"){var o=Xi(e)||{};e=o.iconName||e,n=o.prefix||n}if(e&&n&&ds[n]&&ds[n][e]){var r=ds[n][e];return a(zs(r))}Vv(e,n),a(J(J({},Wv),{},{icon:ne.showMissingIcons&&e?jn("missingIconAbstract")||{}:{}}))})}var Dr=function(){},Us=ne.measurePerformance&&ia&&ia.mark&&ia.measure?ia:{mark:Dr,measure:Dr},Tt='FA "6.4.2"',Gv=function(n){return Us.mark("".concat(Tt," ").concat(n," begins")),function(){return ec(n)}},ec=function(n){Us.mark("".concat(Tt," ").concat(n," ends")),Us.measure("".concat(Tt," ").concat(n),"".concat(Tt," ").concat(n," begins"),"".concat(Tt," ").concat(n," ends"))},No={begin:Gv,end:ec},_a=function(){};function zr(e){var n=e.getAttribute?e.getAttribute(et):null;return typeof n=="string"}function Kv(e){var n=e.getAttribute?e.getAttribute(ko):null,t=e.getAttribute?e.getAttribute(xo):null;return n&&t}function Yv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(ne.replacementClass)}function Jv(){if(ne.autoReplaceSvg===!0)return wa.replace;var e=wa[ne.autoReplaceSvg];return e||wa.replace}function Zv(e){return Ae.createElementNS("http://www.w3.org/2000/svg",e)}function Xv(e){return Ae.createElement(e)}function nc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Zv:Xv:t;if(typeof e=="string")return Ae.createTextNode(e);var s=a(e.tag);Object.keys(e.attributes||[]).forEach(function(r){s.setAttribute(r,e.attributes[r])});var o=e.children||[];return o.forEach(function(r){s.appendChild(nc(r,{ceFn:a}))}),s}function Qv(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var wa={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(s){t.parentNode.insertBefore(nc(s),t)}),t.getAttribute(et)===null&&ne.keepOriginalSource){var a=Ae.createComment(Qv(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~Co(t).indexOf(ne.replacementClass))return wa.replace(n);var s=new RegExp("".concat(ne.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(l,i){return i===ne.replacementClass||i.match(s)?l.toSvg.push(i):l.toNode.push(i),l},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var r=a.map(function(l){return Qt(l)}).join(`
`);t.setAttribute(et,""),t.innerHTML=r}};function Hr(e){e()}function tc(e,n){var t=typeof n=="function"?n:_a;if(e.length===0)t();else{var a=Hr;ne.mutateApproach===av&&(a=Pn.requestAnimationFrame||Hr),a(function(){var s=Jv(),o=No.begin("mutate");e.map(s),o(),t()})}}var Mo=!1;function ac(){Mo=!0}function qs(){Mo=!1}var Ra=null;function Ur(e){if(Nr&&ne.observeMutations){var n=e.treeCallback,t=n===void 0?_a:n,a=e.nodeCallback,s=a===void 0?_a:a,o=e.pseudoElementsCallback,r=o===void 0?_a:o,l=e.observeMutationsRoot,i=l===void 0?Ae:l;Ra=new Nr(function(c){if(!Mo){var h=Ln();xt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!zr(m.addedNodes[0])&&(ne.searchPseudoElements&&r(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&ne.searchPseudoElements&&r(m.target.parentNode),m.type==="attributes"&&zr(m.target)&&~uv.indexOf(m.attributeName))if(m.attributeName==="class"&&Kv(m.target)){var g=ts(Co(m.target)),v=g.prefix,w=g.iconName;m.target.setAttribute(ko,v||h),w&&m.target.setAttribute(xo,w)}else Yv(m.target)&&s(m.target)})}}),wn&&Ra.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ej(){Ra&&Ra.disconnect()}function nj(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,s){var o=s.split(":"),r=o[0],l=o.slice(1);return r&&l.length>0&&(a[r]=l.join(":").trim()),a},{})),t}function tj(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",s=ts(Co(e));return s.prefix||(s.prefix=Ln()),n&&t&&(s.prefix=n,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=Mv(s.prefix,e.innerText)||Ao(s.prefix,Ls(e.innerText))),!s.iconName&&ne.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function aj(e){var n=xt(e.attributes).reduce(function(s,o){return s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return ne.autoA11y&&(t?n["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(a||Yt()):(n["aria-hidden"]="true",n.focusable="false")),n}function sj(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=tj(e),a=t.iconName,s=t.prefix,o=t.rest,r=aj(e),l=Fs("parseNodeAttributes",{},e),i=n.styleParser?nj(e):[];return J({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:i,attributes:r}},l)}var oj=sn.styles;function sc(e){var n=ne.autoReplaceSvg==="nest"?qr(e,{styleParser:!1}):qr(e);return~n.extra.classes.indexOf(Di)?jn("generateLayersText",e,n):jn("generateSvgReplacementMutation",e,n)}var Bn=new Set;Eo.map(function(e){Bn.add("fa-".concat(e))});Object.keys(Wt[Te]).map(Bn.add.bind(Bn));Object.keys(Wt[$e]).map(Bn.add.bind(Bn));Bn=Zt(Bn);function Wr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wn)return Promise.resolve();var t=Ae.documentElement.classList,a=function(m){return t.add("".concat(Mr,"-").concat(m))},s=function(m){return t.remove("".concat(Mr,"-").concat(m))},o=ne.autoFetchSvg?Bn:Eo.map(function(h){return"fa-".concat(h)}).concat(Object.keys(oj));o.includes("fa")||o.push("fa");var r=[".".concat(Di,":not([").concat(et,"])")].concat(o.map(function(h){return".".concat(h,":not([").concat(et,"])")})).join(", ");if(r.length===0)return Promise.resolve();var l=[];try{l=xt(e.querySelectorAll(r))}catch{}if(l.length>0)a("pending"),s("complete");else return Promise.resolve();var i=No.begin("onTree"),c=l.reduce(function(h,m){try{var g=sc(m);g&&h.push(g)}catch(v){Fi||v.name==="MissingIcon"&&console.error(v)}return h},[]);return new Promise(function(h,m){Promise.all(c).then(function(g){tc(g,function(){a("active"),a("complete"),s("pending"),typeof n=="function"&&n(),i(),h()})}).catch(function(g){i(),m(g)})})}function rj(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sc(e).then(function(t){t&&tc([t],n)})}function lj(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ds(n||{}),s=t.mask;return s&&(s=(s||{}).icon?s:Ds(s||{})),e(a,J(J({},t),{},{mask:s}))}}var ij=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,s=a===void 0?pn:a,o=t.symbol,r=o===void 0?!1:o,l=t.mask,i=l===void 0?null:l,c=t.maskId,h=c===void 0?null:c,m=t.title,g=m===void 0?null:m,v=t.titleId,w=v===void 0?null:v,y=t.classes,k=y===void 0?[]:y,T=t.attributes,b=T===void 0?{}:T,f=t.styles,_=f===void 0?{}:f;if(n){var E=n.prefix,R=n.iconName,F=n.icon;return as(J({type:"icon"},n),function(){return nt("beforeDOMElementCreation",{iconDefinition:n,params:t}),ne.autoA11y&&(g?b["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(w||Yt()):(b["aria-hidden"]="true",b.focusable="false")),$o({icons:{main:zs(F),mask:i?zs(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:R,transform:J(J({},pn),s),symbol:r,title:g,maskId:h,titleId:w,extra:{attributes:b,styles:_,classes:k}})})}},cj={mixout:function(){return{icon:lj(ij)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Wr,t.nodeCallback=rj,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,s=a===void 0?Ae:a,o=t.callback,r=o===void 0?function(){}:o;return Wr(s,r)},n.generateSvgReplacementMutation=function(t,a){var s=a.iconName,o=a.title,r=a.titleId,l=a.prefix,i=a.transform,c=a.symbol,h=a.mask,m=a.maskId,g=a.extra;return new Promise(function(v,w){Promise.all([Hs(s,l),h.iconName?Hs(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var k=_o(y,2),T=k[0],b=k[1];v([t,$o({icons:{main:T,mask:b},prefix:l,iconName:s,transform:i,symbol:c,maskId:m,title:o,titleId:r,extra:g,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(t){var a=t.children,s=t.attributes,o=t.main,r=t.transform,l=t.styles,i=es(l);i.length>0&&(s.style=i);var c;return So(r)&&(c=jn("generateAbstractTransformGrouping",{main:o,transform:r,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:s}}}},uj={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,o=s===void 0?[]:s;return as({type:"layer"},function(){nt("beforeDOMElementCreation",{assembler:t,params:a});var r=[];return t(function(l){Array.isArray(l)?l.map(function(i){r=r.concat(i.abstract)}):r=r.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(ne.cssPrefix,"-layers")].concat(Zt(o)).join(" ")},children:r}]})}}}},hj={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.title,o=s===void 0?null:s,r=a.classes,l=r===void 0?[]:r,i=a.attributes,c=i===void 0?{}:i,h=a.styles,m=h===void 0?{}:h;return as({type:"counter",content:t},function(){return nt("beforeDOMElementCreation",{content:t,params:a}),qv({content:t.toString(),title:o,extra:{attributes:c,styles:m,classes:["".concat(ne.cssPrefix,"-layers-counter")].concat(Zt(l))}})})}}}},gj={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,o=s===void 0?pn:s,r=a.title,l=r===void 0?null:r,i=a.classes,c=i===void 0?[]:i,h=a.attributes,m=h===void 0?{}:h,g=a.styles,v=g===void 0?{}:g;return as({type:"text",content:t},function(){return nt("beforeDOMElementCreation",{content:t,params:a}),Fr({content:t,transform:J(J({},pn),o),title:l,extra:{attributes:m,styles:v,classes:["".concat(ne.cssPrefix,"-layers-text")].concat(Zt(c))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var s=a.title,o=a.transform,r=a.extra,l=null,i=null;if(Pi){var c=parseInt(getComputedStyle(t).fontSize,10),h=t.getBoundingClientRect();l=h.width/c,i=h.height/c}return ne.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,Fr({content:t.innerHTML,width:l,height:i,transform:o,title:s,extra:r,watchable:!0})])}}},pj=new RegExp('"',"ug"),Vr=[1105920,1112319];function dj(e){var n=e.replace(pj,""),t=Sv(n,0),a=t>=Vr[0]&&t<=Vr[1],s=n.length===2?n[0]===n[1]:!1;return{value:Ls(s?n[0]:n),isSecondary:a||s}}function Gr(e,n){var t="".concat(tv).concat(n.replace(":","-"));return new Promise(function(a,s){if(e.getAttribute(t)!==null)return a();var o=xt(e.children),r=o.filter(function(F){return F.getAttribute(Ps)===n})[0],l=Pn.getComputedStyle(e,n),i=l.getPropertyValue("font-family").match(lv),c=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(r&&!i)return e.removeChild(r),a();if(i&&h!=="none"&&h!==""){var m=l.getPropertyValue("content"),g=~["Sharp"].indexOf(i[2])?$e:Te,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(i[2])?Vt[g][i[2].toLowerCase()]:iv[g][c],w=dj(m),y=w.value,k=w.isSecondary,T=i[0].startsWith("FontAwesome"),b=Ao(v,y),f=b;if(T){var _=Iv(y);_.iconName&&_.prefix&&(b=_.iconName,v=_.prefix)}if(b&&!k&&(!r||r.getAttribute(ko)!==v||r.getAttribute(xo)!==f)){e.setAttribute(t,f),r&&e.removeChild(r);var E=sj(),R=E.extra;R.attributes[Ps]=n,Hs(b,v).then(function(F){var H=$o(J(J({},E),{},{icons:{main:F,mask:Oo()},prefix:v,iconName:f,extra:R,watchable:!0})),M=Ae.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=H.map(function(ee){return Qt(ee)}).join(`
`),e.removeAttribute(t),a()}).catch(s)}else a()}else a()})}function fj(e){return Promise.all([Gr(e,"::before"),Gr(e,"::after")])}function bj(e){return e.parentNode!==document.head&&!~sv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ps)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Kr(e){if(wn)return new Promise(function(n,t){var a=xt(e.querySelectorAll("*")).filter(bj).map(fj),s=No.begin("searchPseudoElements");ac(),Promise.all(a).then(function(){s(),qs(),n()}).catch(function(){s(),qs(),t()})})}var mj={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Kr,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,s=a===void 0?Ae:a;ne.searchPseudoElements&&Kr(s)}}},Yr=!1,yj={mixout:function(){return{dom:{unwatch:function(){ac(),Yr=!0}}}},hooks:function(){return{bootstrap:function(){Ur(Fs("mutationObserverCallbacks",{}))},noAuto:function(){ej()},watch:function(t){var a=t.observeMutationsRoot;Yr?qs():Ur(Fs("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Jr=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,s){var o=s.toLowerCase().split("-"),r=o[0],l=o.slice(1).join("-");if(r&&l==="h")return a.flipX=!0,a;if(r&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(r){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},t)},vj={mixout:function(){return{parse:{transform:function(t){return Jr(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-transform");return s&&(t.transform=Jr(s)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,s=t.transform,o=t.containerWidth,r=t.iconWidth,l={transform:"translate(".concat(o/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),h="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(i," ").concat(c," ").concat(h)},g={transform:"translate(".concat(r/2*-1," -256)")},v={outer:l,inner:m,path:g};return{tag:"g",attributes:J({},v.outer),children:[{tag:"g",attributes:J({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:J(J({},a.icon.attributes),v.path)}]}]}}}},fs={x:0,y:0,width:"100%",height:"100%"};function Zr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function jj(e){return e.tag==="g"?e.children:[e]}var _j={hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-mask"),o=s?ts(s.split(" ").map(function(r){return r.trim()})):Oo();return o.prefix||(o.prefix=Ln()),t.mask=o,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,s=t.attributes,o=t.main,r=t.mask,l=t.maskId,i=t.transform,c=o.width,h=o.icon,m=r.width,g=r.icon,v=vv({transform:i,containerWidth:m,iconWidth:c}),w={tag:"rect",attributes:J(J({},fs),{},{fill:"white"})},y=h.children?{children:h.children.map(Zr)}:{},k={tag:"g",attributes:J({},v.inner),children:[Zr(J({tag:h.tag,attributes:J(J({},h.attributes),v.path)},y))]},T={tag:"g",attributes:J({},v.outer),children:[k]},b="mask-".concat(l||Yt()),f="clip-".concat(l||Yt()),_={tag:"mask",attributes:J(J({},fs),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,T]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:jj(g)},_]};return a.push(E,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(b,")")},fs)}),{children:a,attributes:s}}}},wj={provides:function(n){var t=!1;Pn.matchMedia&&(t=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:J(J({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=J(J({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:J(J({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:J(J({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},r),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:J(J({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:J(J({},r),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:J(J({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},kj={hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-symbol"),o=s===null?!1:s===""?!0:s;return t.symbol=o,t}}}},xj=[wv,cj,uj,hj,gj,mj,yj,vj,_j,wj,kj];Lv(xj,{mixoutsTo:nn});nn.noAuto;nn.config;var Ej=nn.library;nn.dom;var Ws=nn.parse;nn.findIconDefinition;nn.toHtml;var Cj=nn.icon;nn.layer;nn.text;nn.counter;function Xr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Xr(Object(t),!0).forEach(function(a){Je(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xr(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Pa(e){"@babel/helpers - typeof";return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pa(e)}function Je(e,n,t){return n=Oj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Sj(e,n){if(e==null)return{};var t={},a=Object.keys(e),s,o;for(o=0;o<a.length;o++)s=a[o],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function Tj(e,n){if(e==null)return{};var t=Sj(e,n),a,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function Aj(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Oj(e){var n=Aj(e,"string");return typeof n=="symbol"?n:String(n)}var $j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oc={exports:{}};(function(e){(function(n){var t=function(T,b,f){if(!c(b)||m(b)||g(b)||v(b)||i(b))return b;var _,E=0,R=0;if(h(b))for(_=[],R=b.length;E<R;E++)_.push(t(T,b[E],f));else{_={};for(var F in b)Object.prototype.hasOwnProperty.call(b,F)&&(_[T(F,f)]=t(T,b[F],f))}return _},a=function(T,b){b=b||{};var f=b.separator||"_",_=b.split||/(?=[A-Z])/;return T.split(_).join(f)},s=function(T){return w(T)?T:(T=T.replace(/[\-_\s]+(.)?/g,function(b,f){return f?f.toUpperCase():""}),T.substr(0,1).toLowerCase()+T.substr(1))},o=function(T){var b=s(T);return b.substr(0,1).toUpperCase()+b.substr(1)},r=function(T,b){return a(T,b).toLowerCase()},l=Object.prototype.toString,i=function(T){return typeof T=="function"},c=function(T){return T===Object(T)},h=function(T){return l.call(T)=="[object Array]"},m=function(T){return l.call(T)=="[object Date]"},g=function(T){return l.call(T)=="[object RegExp]"},v=function(T){return l.call(T)=="[object Boolean]"},w=function(T){return T=T-0,T===T},y=function(T,b){var f=b&&"process"in b?b.process:b;return typeof f!="function"?T:function(_,E){return f(_,T,E)}},k={camelize:s,decamelize:r,pascalize:o,depascalize:r,camelizeKeys:function(T,b){return t(y(s,b),T)},decamelizeKeys:function(T,b){return t(y(r,b),T,b)},pascalizeKeys:function(T,b){return t(y(o,b),T)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:n.humps=k})($j)})(oc);var Nj=oc.exports,Mj=["class","style"];function Ij(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),s=Nj.camelize(t.slice(0,a)),o=t.slice(a+1).trim();return n[s]=o,n},{})}function Rj(e){return e.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function rc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(i){return rc(i)}),s=Object.keys(e.attributes||{}).reduce(function(i,c){var h=e.attributes[c];switch(c){case"class":i.class=Rj(h);break;case"style":i.style=Ij(h);break;default:i.attrs[c]=h}return i},{attrs:{},class:{},style:{}});t.class;var o=t.style,r=o===void 0?{}:o,l=Tj(t,Mj);return sh(e.tag,bn(bn(bn({},n),{},{class:s.class,style:bn(bn({},s.style),r)},s.attrs),l),a)}var lc=!1;try{lc=!0}catch{}function Pj(){if(!lc&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bs(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Je({},e,n):{}}function Lj(e){var n,t=(n={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Je(n,"fa-".concat(e.size),e.size!==null),Je(n,"fa-rotate-".concat(e.rotation),e.rotation!==null),Je(n,"fa-pull-".concat(e.pull),e.pull!==null),Je(n,"fa-swap-opacity",e.swapOpacity),Je(n,"fa-bounce",e.bounce),Je(n,"fa-shake",e.shake),Je(n,"fa-beat",e.beat),Je(n,"fa-fade",e.fade),Je(n,"fa-beat-fade",e.beatFade),Je(n,"fa-flash",e.flash),Je(n,"fa-spin-pulse",e.spinPulse),Je(n,"fa-spin-reverse",e.spinReverse),n);return Object.keys(t).map(function(a){return t[a]?a:null}).filter(function(a){return a})}function Qr(e){if(e&&Pa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ws.icon)return Ws.icon(e);if(e===null)return null;if(Pa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Bj=kt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var a=t.attrs,s=ze(function(){return Qr(n.icon)}),o=ze(function(){return bs("classes",Lj(n))}),r=ze(function(){return bs("transform",typeof n.transform=="string"?Ws.transform(n.transform):n.transform)}),l=ze(function(){return bs("mask",Qr(n.mask))}),i=ze(function(){return Cj(s.value,bn(bn(bn(bn({},o.value),r.value),l.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});Yn(i,function(h){if(!h)return Pj("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var c=ze(function(){return i.value?rc(i.value.abstract[0],{},a):null});return function(){return c.value}}}),Fj={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Dj={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},zj={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Hj={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},Uj={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},qj={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Wj={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"]};Ej.add({faCircleInfo:Fj,faCopyright:Hj,faGithub:qj,faHouse:Dj,faMoon:Uj,faNpm:Wj,faSun:zj});$h(fy).use(Ih()).component("CodeBlock",jo).component("fa-icon",Bj).mount("#app");export{Up as c,fo as g};
