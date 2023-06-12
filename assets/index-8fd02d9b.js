function rc(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(a,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Ws(e,n){const t=Object.create(null),a=e.split(",");for(let s=0;s<a.length;s++)t[a[s]]=!0;return n?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Se={},lt=[],on=()=>{},lc=()=>!1,ic=/^on[^a-z]/,Pa=e=>ic.test(e),Vs=e=>e.startsWith("onUpdate:"),Ue=Object.assign,Gs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},cc=Object.prototype.hasOwnProperty,de=(e,n)=>cc.call(e,n),le=Array.isArray,it=e=>Yt(e)==="[object Map]",La=e=>Yt(e)==="[object Set]",Ro=e=>Yt(e)==="[object Date]",ge=e=>typeof e=="function",Pe=e=>typeof e=="string",Mt=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",Qr=e=>xe(e)&&ge(e.then)&&ge(e.catch),el=Object.prototype.toString,Yt=e=>el.call(e),uc=e=>Yt(e).slice(8,-1),nl=e=>Yt(e)==="[object Object]",Ks=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ba=Ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},hc=/-(\w)/g,fn=Ba(e=>e.replace(hc,(n,t)=>t?t.toUpperCase():"")),gc=/\B([A-Z])/g,mt=Ba(e=>e.replace(gc,"-$1").toLowerCase()),Fa=Ba(e=>e.charAt(0).toUpperCase()+e.slice(1)),as=Ba(e=>e?`on${Fa(e)}`:""),It=(e,n)=>!Object.is(e,n),ma=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},wa=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},bs=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Po;const ms=()=>Po||(Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function An(e){if(le(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],s=Pe(a)?bc(a):An(a);if(s)for(const o in s)n[o]=s[o]}return n}else{if(Pe(e))return e;if(xe(e))return e}}const pc=/;(?![^(]*\))/g,fc=/:([^]+)/,dc=/\/\*[^]*?\*\//g;function bc(e){const n={};return e.replace(dc,"").split(pc).forEach(t=>{if(t){const a=t.split(fc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Ce(e){let n="";if(Pe(e))n=e;else if(le(e))for(let t=0;t<e.length;t++){const a=Ce(e[t]);a&&(n+=a+" ")}else if(xe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const mc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yc=Ws(mc);function tl(e){return!!e||e===""}function vc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=Da(e[a],n[a]);return t}function Da(e,n){if(e===n)return!0;let t=Ro(e),a=Ro(n);if(t||a)return t&&a?e.getTime()===n.getTime():!1;if(t=Mt(e),a=Mt(n),t||a)return e===n;if(t=le(e),a=le(n),t||a)return t&&a?vc(e,n):!1;if(t=xe(e),a=xe(n),t||a){if(!t||!a)return!1;const s=Object.keys(e).length,o=Object.keys(n).length;if(s!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),i=n.hasOwnProperty(r);if(l&&!i||!l&&i||!Da(e[r],n[r]))return!1}}return String(e)===String(n)}function al(e,n){return e.findIndex(t=>Da(t,n))}const ke=e=>Pe(e)?e:e==null?"":le(e)||xe(e)&&(e.toString===el||!ge(e.toString))?JSON.stringify(e,sl,2):String(e),sl=(e,n)=>n&&n.__v_isRef?sl(e,n.value):it(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,s])=>(t[`${a} =>`]=s,t),{})}:La(n)?{[`Set(${n.size})`]:[...n.values()]}:xe(n)&&!le(n)&&!nl(n)?String(n):n;let Qe;class ol{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!n&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Qe;try{return Qe=this,n()}finally{Qe=t}}}on(){Qe=this}off(){Qe=this.parent}stop(n){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rl(e){return new ol(e)}function jc(e,n=Qe){n&&n.active&&n.effects.push(e)}function ll(){return Qe}function _c(e){Qe&&Qe.cleanups.push(e)}const Ys=e=>{const n=new Set(e);return n.w=0,n.n=0,n},il=e=>(e.w&In)>0,cl=e=>(e.n&In)>0,wc=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=In},kc=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const s=n[a];il(s)&&!cl(s)?s.delete(e):n[t++]=s,s.w&=~In,s.n&=~In}n.length=t}},ka=new WeakMap;let kt=0,In=1;const ys=30;let tn;const Kn=Symbol(""),vs=Symbol("");class Js{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,jc(this,a)}run(){if(!this.active)return this.fn();let n=tn,t=$n;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=tn,tn=this,$n=!0,In=1<<++kt,kt<=ys?wc(this):Lo(this),this.fn()}finally{kt<=ys&&kc(this),In=1<<--kt,tn=this.parent,$n=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(Lo(this),this.onStop&&this.onStop(),this.active=!1)}}function Lo(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let $n=!0;const ul=[];function yt(){ul.push($n),$n=!1}function vt(){const e=ul.pop();$n=e===void 0?!0:e}function Ze(e,n,t){if($n&&tn){let a=ka.get(e);a||ka.set(e,a=new Map);let s=a.get(t);s||a.set(t,s=Ys()),hl(s)}}function hl(e,n){let t=!1;kt<=ys?cl(e)||(e.n|=In,t=!il(e)):t=!e.has(tn),t&&(e.add(tn),tn.deps.push(e))}function mn(e,n,t,a,s,o){const r=ka.get(e);if(!r)return;let l=[];if(n==="clear")l=[...r.values()];else if(t==="length"&&le(e)){const i=Number(a);r.forEach((c,h)=>{(h==="length"||h>=i)&&l.push(c)})}else switch(t!==void 0&&l.push(r.get(t)),n){case"add":le(e)?Ks(t)&&l.push(r.get("length")):(l.push(r.get(Kn)),it(e)&&l.push(r.get(vs)));break;case"delete":le(e)||(l.push(r.get(Kn)),it(e)&&l.push(r.get(vs)));break;case"set":it(e)&&l.push(r.get(Kn));break}if(l.length===1)l[0]&&js(l[0]);else{const i=[];for(const c of l)c&&i.push(...c);js(Ys(i))}}function js(e,n){const t=le(e)?e:[...e];for(const a of t)a.computed&&Bo(a);for(const a of t)a.computed||Bo(a)}function Bo(e,n){(e!==tn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function xc(e,n){var t;return(t=ka.get(e))==null?void 0:t.get(n)}const Ec=Ws("__proto__,__v_isRef,__isVue"),gl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt)),Cc=Zs(),Sc=Zs(!1,!0),Tc=Zs(!0),Fo=Ac();function Ac(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=be(this);for(let o=0,r=this.length;o<r;o++)Ze(a,"get",o+"");const s=a[n](...t);return s===-1||s===!1?a[n](...t.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){yt();const a=be(this)[n].apply(this,t);return vt(),a}}),e}function Oc(e){const n=be(this);return Ze(n,"has",e),n.hasOwnProperty(e)}function Zs(e=!1,n=!1){return function(a,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return n;if(s==="__v_raw"&&o===(e?n?Vc:ml:n?bl:dl).get(a))return a;const r=le(a);if(!e){if(r&&de(Fo,s))return Reflect.get(Fo,s,o);if(s==="hasOwnProperty")return Oc}const l=Reflect.get(a,s,o);return(Mt(s)?gl.has(s):Ec(s))||(e||Ze(a,"get",s),n)?l:Me(l)?r&&Ks(s)?l:l.value:xe(l)?e?yl(l):Ua(l):l}}const $c=pl(),Nc=pl(!0);function pl(e=!1){return function(t,a,s,o){let r=t[a];if(gt(r)&&Me(r)&&!Me(s))return!1;if(!e&&(!xa(s)&&!gt(s)&&(r=be(r),s=be(s)),!le(t)&&Me(r)&&!Me(s)))return r.value=s,!0;const l=le(t)&&Ks(a)?Number(a)<t.length:de(t,a),i=Reflect.set(t,a,s,o);return t===be(o)&&(l?It(s,r)&&mn(t,"set",a,s):mn(t,"add",a,s)),i}}function Mc(e,n){const t=de(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&mn(e,"delete",n,void 0),a}function Ic(e,n){const t=Reflect.has(e,n);return(!Mt(n)||!gl.has(n))&&Ze(e,"has",n),t}function Rc(e){return Ze(e,"iterate",le(e)?"length":Kn),Reflect.ownKeys(e)}const fl={get:Cc,set:$c,deleteProperty:Mc,has:Ic,ownKeys:Rc},Pc={get:Tc,set(e,n){return!0},deleteProperty(e,n){return!0}},Lc=Ue({},fl,{get:Sc,set:Nc}),Xs=e=>e,za=e=>Reflect.getPrototypeOf(e);function Qt(e,n,t=!1,a=!1){e=e.__v_raw;const s=be(e),o=be(n);t||(n!==o&&Ze(s,"get",n),Ze(s,"get",o));const{has:r}=za(s),l=a?Xs:t?no:Rt;if(r.call(s,n))return l(e.get(n));if(r.call(s,o))return l(e.get(o));e!==s&&e.get(n)}function ea(e,n=!1){const t=this.__v_raw,a=be(t),s=be(e);return n||(e!==s&&Ze(a,"has",e),Ze(a,"has",s)),e===s?t.has(e):t.has(e)||t.has(s)}function na(e,n=!1){return e=e.__v_raw,!n&&Ze(be(e),"iterate",Kn),Reflect.get(e,"size",e)}function Do(e){e=be(e);const n=be(this);return za(n).has.call(n,e)||(n.add(e),mn(n,"add",e,e)),this}function zo(e,n){n=be(n);const t=be(this),{has:a,get:s}=za(t);let o=a.call(t,e);o||(e=be(e),o=a.call(t,e));const r=s.call(t,e);return t.set(e,n),o?It(n,r)&&mn(t,"set",e,n):mn(t,"add",e,n),this}function Uo(e){const n=be(this),{has:t,get:a}=za(n);let s=t.call(n,e);s||(e=be(e),s=t.call(n,e)),a&&a.call(n,e);const o=n.delete(e);return s&&mn(n,"delete",e,void 0),o}function Ho(){const e=be(this),n=e.size!==0,t=e.clear();return n&&mn(e,"clear",void 0,void 0),t}function ta(e,n){return function(a,s){const o=this,r=o.__v_raw,l=be(r),i=n?Xs:e?no:Rt;return!e&&Ze(l,"iterate",Kn),r.forEach((c,h)=>a.call(s,i(c),i(h),o))}}function aa(e,n,t){return function(...a){const s=this.__v_raw,o=be(s),r=it(o),l=e==="entries"||e===Symbol.iterator&&r,i=e==="keys"&&r,c=s[e](...a),h=t?Xs:n?no:Rt;return!n&&Ze(o,"iterate",i?vs:Kn),{next(){const{value:d,done:g}=c.next();return g?{value:d,done:g}:{value:l?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function xn(e){return function(...n){return e==="delete"?!1:this}}function Bc(){const e={get(o){return Qt(this,o)},get size(){return na(this)},has:ea,add:Do,set:zo,delete:Uo,clear:Ho,forEach:ta(!1,!1)},n={get(o){return Qt(this,o,!1,!0)},get size(){return na(this)},has:ea,add:Do,set:zo,delete:Uo,clear:Ho,forEach:ta(!1,!0)},t={get(o){return Qt(this,o,!0)},get size(){return na(this,!0)},has(o){return ea.call(this,o,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:ta(!0,!1)},a={get(o){return Qt(this,o,!0,!0)},get size(){return na(this,!0)},has(o){return ea.call(this,o,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=aa(o,!1,!1),t[o]=aa(o,!0,!1),n[o]=aa(o,!1,!0),a[o]=aa(o,!0,!0)}),[e,t,n,a]}const[Fc,Dc,zc,Uc]=Bc();function Qs(e,n){const t=n?e?Uc:zc:e?Dc:Fc;return(a,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(de(t,s)&&s in a?t:a,s,o)}const Hc={get:Qs(!1,!1)},qc={get:Qs(!1,!0)},Wc={get:Qs(!0,!1)},dl=new WeakMap,bl=new WeakMap,ml=new WeakMap,Vc=new WeakMap;function Gc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kc(e){return e.__v_skip||!Object.isExtensible(e)?0:Gc(uc(e))}function Ua(e){return gt(e)?e:eo(e,!1,fl,Hc,dl)}function Yc(e){return eo(e,!1,Lc,qc,bl)}function yl(e){return eo(e,!0,Pc,Wc,ml)}function eo(e,n,t,a,s){if(!xe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const r=Kc(e);if(r===0)return e;const l=new Proxy(e,r===2?a:t);return s.set(e,l),l}function Nn(e){return gt(e)?Nn(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function xa(e){return!!(e&&e.__v_isShallow)}function vl(e){return Nn(e)||gt(e)}function be(e){const n=e&&e.__v_raw;return n?be(n):e}function Ha(e){return wa(e,"__v_skip",!0),e}const Rt=e=>xe(e)?Ua(e):e,no=e=>xe(e)?yl(e):e;function jl(e){$n&&tn&&(e=be(e),hl(e.dep||(e.dep=Ys())))}function _l(e,n){e=be(e);const t=e.dep;t&&js(t)}function Me(e){return!!(e&&e.__v_isRef===!0)}function we(e){return Jc(e,!1)}function Jc(e,n){return Me(e)?e:new Zc(e,n)}class Zc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:be(n),this._value=t?n:Rt(n)}get value(){return jl(this),this._value}set value(n){const t=this.__v_isShallow||xa(n)||gt(n);n=t?n:be(n),It(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Rt(n),_l(this))}}function p(e){return Me(e)?e.value:e}const Xc={get:(e,n,t)=>p(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const s=e[n];return Me(s)&&!Me(t)?(s.value=t,!0):Reflect.set(e,n,t,a)}};function wl(e){return Nn(e)?e:new Proxy(e,Xc)}function Qc(e){const n=le(e)?new Array(e.length):{};for(const t in e)n[t]=nu(e,t);return n}class eu{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return xc(be(this._object),this._key)}}function nu(e,n,t){const a=e[n];return Me(a)?a:new eu(e,n,t)}class tu{constructor(n,t,a,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Js(n,()=>{this._dirty||(this._dirty=!0,_l(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const n=be(this);return jl(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function au(e,n,t=!1){let a,s;const o=ge(e);return o?(a=e,s=on):(a=e.get,s=e.set),new tu(a,s,o||!s,t)}function Mn(e,n,t,a){let s;try{s=a?e(...a):e()}catch(o){qa(o,n,t)}return s}function rn(e,n,t,a){if(ge(e)){const o=Mn(e,n,t,a);return o&&Qr(o)&&o.catch(r=>{qa(r,n,t)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(rn(e[o],n,t,a));return s}function qa(e,n,t,a=!0){const s=n?n.vnode:null;if(n){let o=n.parent;const r=n.proxy,l=t;for(;o;){const c=o.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,r,l)===!1)return}o=o.parent}const i=n.appContext.config.errorHandler;if(i){Mn(i,null,10,[e,r,l]);return}}su(e,t,s,a)}function su(e,n,t,a=!0){console.error(e)}let Pt=!1,_s=!1;const Ve=[];let gn=0;const ct=[];let dn=null,Un=0;const kl=Promise.resolve();let to=null;function xl(e){const n=to||kl;return e?n.then(this?e.bind(this):e):n}function ou(e){let n=gn+1,t=Ve.length;for(;n<t;){const a=n+t>>>1;Lt(Ve[a])<e?n=a+1:t=a}return n}function ao(e){(!Ve.length||!Ve.includes(e,Pt&&e.allowRecurse?gn+1:gn))&&(e.id==null?Ve.push(e):Ve.splice(ou(e.id),0,e),El())}function El(){!Pt&&!_s&&(_s=!0,to=kl.then(Sl))}function ru(e){const n=Ve.indexOf(e);n>gn&&Ve.splice(n,1)}function lu(e){le(e)?ct.push(...e):(!dn||!dn.includes(e,e.allowRecurse?Un+1:Un))&&ct.push(e),El()}function qo(e,n=Pt?gn+1:0){for(;n<Ve.length;n++){const t=Ve[n];t&&t.pre&&(Ve.splice(n,1),n--,t())}}function Cl(e){if(ct.length){const n=[...new Set(ct)];if(ct.length=0,dn){dn.push(...n);return}for(dn=n,dn.sort((t,a)=>Lt(t)-Lt(a)),Un=0;Un<dn.length;Un++)dn[Un]();dn=null,Un=0}}const Lt=e=>e.id==null?1/0:e.id,iu=(e,n)=>{const t=Lt(e)-Lt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Sl(e){_s=!1,Pt=!0,Ve.sort(iu);const n=on;try{for(gn=0;gn<Ve.length;gn++){const t=Ve[gn];t&&t.active!==!1&&Mn(t,null,14)}}finally{gn=0,Ve.length=0,Cl(),Pt=!1,to=null,(Ve.length||ct.length)&&Sl()}}function cu(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||Se;let s=t;const o=n.startsWith("update:"),r=o&&n.slice(7);if(r&&r in a){const h=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:g}=a[h]||Se;g&&(s=t.map(v=>Pe(v)?v.trim():v)),d&&(s=t.map(bs))}let l,i=a[l=as(n)]||a[l=as(fn(n))];!i&&o&&(i=a[l=as(mt(n))]),i&&rn(i,e,6,s);const c=a[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,rn(c,e,6,s)}}function Tl(e,n,t=!1){const a=n.emitsCache,s=a.get(e);if(s!==void 0)return s;const o=e.emits;let r={},l=!1;if(!ge(e)){const i=c=>{const h=Tl(c,n,!0);h&&(l=!0,Ue(r,h))};!t&&n.mixins.length&&n.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!o&&!l?(xe(e)&&a.set(e,null),null):(le(o)?o.forEach(i=>r[i]=null):Ue(r,o),xe(e)&&a.set(e,r),r)}function Wa(e,n){return!e||!Pa(n)?!1:(n=n.slice(2).replace(/Once$/,""),de(e,n[0].toLowerCase()+n.slice(1))||de(e,mt(n))||de(e,n))}let ze=null,Va=null;function Ea(e){const n=ze;return ze=e,Va=e&&e.type.__scopeId||null,n}function Al(e){Va=e}function Ol(){Va=null}function un(e,n=ze,t){if(!n||e._n)return e;const a=(...s)=>{a._d&&er(-1);const o=Ea(n);let r;try{r=e(...s)}finally{Ea(o),a._d&&er(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function ss(e){const{type:n,vnode:t,proxy:a,withProxy:s,props:o,propsOptions:[r],slots:l,attrs:i,emit:c,render:h,renderCache:d,data:g,setupState:v,ctx:w,inheritAttrs:m}=e;let k,S;const b=Ea(e);try{if(t.shapeFlag&4){const _=s||a;k=hn(h.call(_,_,d,o,v,g,w)),S=i}else{const _=n;k=hn(_.length>1?_(o,{attrs:i,slots:l,emit:c}):_(o,null)),S=n.props?i:uu(i)}}catch(_){Tt.length=0,qa(_,e,1),k=W(Rn)}let y=k;if(S&&m!==!1){const _=Object.keys(S),{shapeFlag:E}=y;_.length&&E&7&&(r&&_.some(Vs)&&(S=hu(S,r)),y=pt(y,S))}return t.dirs&&(y=pt(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),k=y,Ea(b),k}const uu=e=>{let n;for(const t in e)(t==="class"||t==="style"||Pa(t))&&((n||(n={}))[t]=e[t]);return n},hu=(e,n)=>{const t={};for(const a in e)(!Vs(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function gu(e,n,t){const{props:a,children:s,component:o}=e,{props:r,children:l,patchFlag:i}=n,c=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&i>=0){if(i&1024)return!0;if(i&16)return a?Wo(a,r,c):!!r;if(i&8){const h=n.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(r[g]!==a[g]&&!Wa(c,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:a===r?!1:a?r?Wo(a,r,c):!0:!!r;return!1}function Wo(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(n[o]!==e[o]&&!Wa(t,o))return!0}return!1}function pu({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const fu=e=>e.__isSuspense;function du(e,n){n&&n.pendingBranch?le(e)?n.effects.push(...e):n.effects.push(e):lu(e)}const sa={};function ut(e,n,t){return $l(e,n,t)}function $l(e,n,{immediate:t,deep:a,flush:s,onTrack:o,onTrigger:r}=Se){var l;const i=ll()===((l=Re)==null?void 0:l.scope)?Re:null;let c,h=!1,d=!1;if(Me(e)?(c=()=>e.value,h=xa(e)):Nn(e)?(c=()=>e,a=!0):le(e)?(d=!0,h=e.some(_=>Nn(_)||xa(_)),c=()=>e.map(_=>{if(Me(_))return _.value;if(Nn(_))return Wn(_);if(ge(_))return Mn(_,i,2)})):ge(e)?n?c=()=>Mn(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return g&&g(),rn(e,i,3,[v])}:c=on,n&&a){const _=c;c=()=>Wn(_())}let g,v=_=>{g=b.onStop=()=>{Mn(_,i,4)}},w;if(zt)if(v=on,n?t&&rn(n,i,3,[c(),d?[]:void 0,v]):c(),s==="sync"){const _=uh();w=_.__watcherHandles||(_.__watcherHandles=[])}else return on;let m=d?new Array(e.length).fill(sa):sa;const k=()=>{if(b.active)if(n){const _=b.run();(a||h||(d?_.some((E,I)=>It(E,m[I])):It(_,m)))&&(g&&g(),rn(n,i,3,[_,m===sa?void 0:d&&m[0]===sa?[]:m,v]),m=_)}else b.run()};k.allowRecurse=!!n;let S;s==="sync"?S=k:s==="post"?S=()=>Je(k,i&&i.suspense):(k.pre=!0,i&&(k.id=i.uid),S=()=>ao(k));const b=new Js(c,S);n?t?k():m=b.run():s==="post"?Je(b.run.bind(b),i&&i.suspense):b.run();const y=()=>{b.stop(),i&&i.scope&&Gs(i.scope.effects,b)};return w&&w.push(y),y}function bu(e,n,t){const a=this.proxy,s=Pe(e)?e.includes(".")?Nl(a,e):()=>a[e]:e.bind(a,a);let o;ge(n)?o=n:(o=n.handler,t=n);const r=Re;ft(this);const l=$l(s,o.bind(a),t);return r?ft(r):Yn(),l}function Nl(e,n){const t=n.split(".");return()=>{let a=e;for(let s=0;s<t.length&&a;s++)a=a[t[s]];return a}}function Wn(e,n){if(!xe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Me(e))Wn(e.value,n);else if(le(e))for(let t=0;t<e.length;t++)Wn(e[t],n);else if(La(e)||it(e))e.forEach(t=>{Wn(t,n)});else if(nl(e))for(const t in e)Wn(e[t],n);return e}function Fn(e,n){const t=ze;if(t===null)return e;const a=Ja(t)||t.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[r,l,i,c=Se]=n[o];r&&(ge(r)&&(r={mounted:r,updated:r}),r.deep&&Wn(l),s.push({dir:r,instance:a,value:l,oldValue:void 0,arg:i,modifiers:c}))}return e}function Dn(e,n,t,a){const s=e.dirs,o=n&&n.dirs;for(let r=0;r<s.length;r++){const l=s[r];o&&(l.oldValue=o[r].value);let i=l.dir[a];i&&(yt(),rn(i,t,8,[e.el,l,e,n]),vt())}}function jt(e,n){return ge(e)?(()=>Ue({name:e.name},n,{setup:e}))():e}const Ct=e=>!!e.type.__asyncLoader,Ml=e=>e.type.__isKeepAlive;function mu(e,n){Il(e,"a",n)}function yu(e,n){Il(e,"da",n)}function Il(e,n,t=Re){const a=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ga(n,a,t),t){let s=t.parent;for(;s&&s.parent;)Ml(s.parent.vnode)&&vu(a,n,t,s),s=s.parent}}function vu(e,n,t,a){const s=Ga(n,e,a,!0);Pl(()=>{Gs(a[n],s)},t)}function Ga(e,n,t=Re,a=!1){if(t){const s=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...r)=>{if(t.isUnmounted)return;yt(),ft(t);const l=rn(n,t,e,r);return Yn(),vt(),l});return a?s.unshift(o):s.push(o),o}}const _n=e=>(n,t=Re)=>(!zt||e==="sp")&&Ga(e,(...a)=>n(...a),t),so=_n("bm"),Rl=_n("m"),ju=_n("bu"),_u=_n("u"),wu=_n("bum"),Pl=_n("um"),ku=_n("sp"),xu=_n("rtg"),Eu=_n("rtc");function Cu(e,n=Re){Ga("ec",e,n)}const Ll="components";function Xe(e,n){return Tu(Ll,e,!0,n)||e}const Su=Symbol.for("v-ndc");function Tu(e,n,t=!0,a=!1){const s=ze||Re;if(s){const o=s.type;if(e===Ll){const l=rh(o,!1);if(l&&(l===n||l===fn(n)||l===Fa(fn(n))))return o}const r=Vo(s[e]||o[e],n)||Vo(s.appContext[e],n);return!r&&a?o:r}}function Vo(e,n){return e&&(e[n]||e[fn(n)]||e[Fa(fn(n))])}function Zn(e,n,t,a){let s;const o=t&&t[a];if(le(e)||Pe(e)){s=new Array(e.length);for(let r=0,l=e.length;r<l;r++)s[r]=n(e[r],r,void 0,o&&o[r])}else if(typeof e=="number"){s=new Array(e);for(let r=0;r<e;r++)s[r]=n(r+1,r,void 0,o&&o[r])}else if(xe(e))if(e[Symbol.iterator])s=Array.from(e,(r,l)=>n(r,l,void 0,o&&o[l]));else{const r=Object.keys(e);s=new Array(r.length);for(let l=0,i=r.length;l<i;l++){const c=r[l];s[l]=n(e[c],c,l,o&&o[l])}}else s=[];return t&&(t[a]=s),s}function os(e,n,t={},a,s){if(ze.isCE||ze.parent&&Ct(ze.parent)&&ze.parent.isCE)return n!=="default"&&(t.name=n),W("slot",t,a&&a());let o=e[n];o&&o._c&&(o._d=!1),X();const r=o&&Bl(o(t)),l=Dt(Oe,{key:t.key||r&&r.key||`_${n}`},r||(a?a():[]),r&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Bl(e){return e.some(n=>Sa(n)?!(n.type===Rn||n.type===Oe&&!Bl(n.children)):!0)?e:null}const ws=e=>e?Yl(e)?Ja(e)||e.proxy:ws(e.parent):null,St=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ws(e.parent),$root:e=>ws(e.root),$emit:e=>e.emit,$options:e=>oo(e),$forceUpdate:e=>e.f||(e.f=()=>ao(e.update)),$nextTick:e=>e.n||(e.n=xl.bind(e.proxy)),$watch:e=>bu.bind(e)}),rs=(e,n)=>e!==Se&&!e.__isScriptSetup&&de(e,n),Au={get({_:e},n){const{ctx:t,setupState:a,data:s,props:o,accessCache:r,type:l,appContext:i}=e;let c;if(n[0]!=="$"){const v=r[n];if(v!==void 0)switch(v){case 1:return a[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if(rs(a,n))return r[n]=1,a[n];if(s!==Se&&de(s,n))return r[n]=2,s[n];if((c=e.propsOptions[0])&&de(c,n))return r[n]=3,o[n];if(t!==Se&&de(t,n))return r[n]=4,t[n];xs&&(r[n]=0)}}const h=St[n];let d,g;if(h)return n==="$attrs"&&Ze(e,"get",n),h(e);if((d=l.__cssModules)&&(d=d[n]))return d;if(t!==Se&&de(t,n))return r[n]=4,t[n];if(g=i.config.globalProperties,de(g,n))return g[n]},set({_:e},n,t){const{data:a,setupState:s,ctx:o}=e;return rs(s,n)?(s[n]=t,!0):a!==Se&&de(a,n)?(a[n]=t,!0):de(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:s,propsOptions:o}},r){let l;return!!t[r]||e!==Se&&de(e,r)||rs(n,r)||(l=o[0])&&de(l,r)||de(a,r)||de(St,r)||de(s.config.globalProperties,r)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:de(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Ou(){return $u().slots}function $u(){const e=th();return e.setupContext||(e.setupContext=Zl(e))}function ks(e){return le(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function Nu(e,n){const t=ks(e);for(const a in n){if(a.startsWith("__skip"))continue;let s=t[a];s?le(s)||ge(s)?s=t[a]={type:s,default:n[a]}:s.default=n[a]:s===null&&(s=t[a]={default:n[a]}),s&&n[`__skip_${a}`]&&(s.skipFactory=!0)}return t}let xs=!0;function Mu(e){const n=oo(e),t=e.proxy,a=e.ctx;xs=!1,n.beforeCreate&&Go(n.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:l,provide:i,inject:c,created:h,beforeMount:d,mounted:g,beforeUpdate:v,updated:w,activated:m,deactivated:k,beforeDestroy:S,beforeUnmount:b,destroyed:y,unmounted:_,render:E,renderTracked:I,renderTriggered:F,errorCaptured:U,serverPrefetch:R,expose:ee,inheritAttrs:ue,components:ye,directives:ve,filters:me}=n;if(c&&Iu(c,a,null),r)for(const A in r){const N=r[A];ge(N)&&(a[A]=N.bind(t))}if(s){const A=s.call(t,t);xe(A)&&(e.data=Ua(A))}if(xs=!0,o)for(const A in o){const N=o[A],Y=ge(N)?N.bind(t,t):ge(N.get)?N.get.bind(t,t):on,ie=!ge(N)&&ge(N.set)?N.set.bind(t):on,D=De({get:Y,set:ie});Object.defineProperty(a,A,{enumerable:!0,configurable:!0,get:()=>D.value,set:ae=>D.value=ae})}if(l)for(const A in l)Fl(l[A],a,t,A);if(i){const A=ge(i)?i.call(t):i;Reflect.ownKeys(A).forEach(N=>{Tn(N,A[N])})}h&&Go(h,e,"c");function he(A,N){le(N)?N.forEach(Y=>A(Y.bind(t))):N&&A(N.bind(t))}if(he(so,d),he(Rl,g),he(ju,v),he(_u,w),he(mu,m),he(yu,k),he(Cu,U),he(Eu,I),he(xu,F),he(wu,b),he(Pl,_),he(ku,R),le(ee))if(ee.length){const A=e.exposed||(e.exposed={});ee.forEach(N=>{Object.defineProperty(A,N,{get:()=>t[N],set:Y=>t[N]=Y})})}else e.exposed||(e.exposed={});E&&e.render===on&&(e.render=E),ue!=null&&(e.inheritAttrs=ue),ye&&(e.components=ye),ve&&(e.directives=ve)}function Iu(e,n,t=on){le(e)&&(e=Es(e));for(const a in e){const s=e[a];let o;xe(s)?"default"in s?o=se(s.from||a,s.default,!0):o=se(s.from||a):o=se(s),Me(o)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):n[a]=o}}function Go(e,n,t){rn(le(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Fl(e,n,t,a){const s=a.includes(".")?Nl(t,a):()=>t[a];if(Pe(e)){const o=n[e];ge(o)&&ut(s,o)}else if(ge(e))ut(s,e.bind(t));else if(xe(e))if(le(e))e.forEach(o=>Fl(o,n,t,a));else{const o=ge(e.handler)?e.handler.bind(t):n[e.handler];ge(o)&&ut(s,o,e)}}function oo(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(n);let i;return l?i=l:!s.length&&!t&&!a?i=n:(i={},s.length&&s.forEach(c=>Ca(i,c,r,!0)),Ca(i,n,r)),xe(n)&&o.set(n,i),i}function Ca(e,n,t,a=!1){const{mixins:s,extends:o}=n;o&&Ca(e,o,t,!0),s&&s.forEach(r=>Ca(e,r,t,!0));for(const r in n)if(!(a&&r==="expose")){const l=Ru[r]||t&&t[r];e[r]=l?l(e[r],n[r]):n[r]}return e}const Ru={data:Ko,props:Yo,emits:Yo,methods:xt,computed:xt,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:xt,directives:xt,watch:Lu,provide:Ko,inject:Pu};function Ko(e,n){return n?e?function(){return Ue(ge(e)?e.call(this,this):e,ge(n)?n.call(this,this):n)}:n:e}function Pu(e,n){return xt(Es(e),Es(n))}function Es(e){if(le(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ke(e,n){return e?[...new Set([].concat(e,n))]:n}function xt(e,n){return e?Ue(Object.create(null),e,n):n}function Yo(e,n){return e?le(e)&&le(n)?[...new Set([...e,...n])]:Ue(Object.create(null),ks(e),ks(n??{})):n}function Lu(e,n){if(!e)return n;if(!n)return e;const t=Ue(Object.create(null),e);for(const a in n)t[a]=Ke(e[a],n[a]);return t}function Dl(){return{app:null,config:{isNativeTag:lc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bu=0;function Fu(e,n){return function(a,s=null){ge(a)||(a=Ue({},a)),s!=null&&!xe(s)&&(s=null);const o=Dl(),r=new Set;let l=!1;const i=o.app={_uid:Bu++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:hh,get config(){return o.config},set config(c){},use(c,...h){return r.has(c)||(c&&ge(c.install)?(r.add(c),c.install(i,...h)):ge(c)&&(r.add(c),c(i,...h))),i},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),i},component(c,h){return h?(o.components[c]=h,i):o.components[c]},directive(c,h){return h?(o.directives[c]=h,i):o.directives[c]},mount(c,h,d){if(!l){const g=W(a,s);return g.appContext=o,h&&n?n(g,c):e(g,c,d),l=!0,i._container=c,c.__vue_app__=i,Ja(g.component)||g.component.proxy}},unmount(){l&&(e(null,i._container),delete i._container.__vue_app__)},provide(c,h){return o.provides[c]=h,i},runWithContext(c){Bt=i;try{return c()}finally{Bt=null}}};return i}}let Bt=null;function Tn(e,n){if(Re){let t=Re.provides;const a=Re.parent&&Re.parent.provides;a===t&&(t=Re.provides=Object.create(a)),t[e]=n}}function se(e,n,t=!1){const a=Re||ze;if(a||Bt){const s=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:Bt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return t&&ge(n)?n.call(a&&a.proxy):n}}function Du(){return!!(Re||ze||Bt)}function zu(e,n,t,a=!1){const s={},o={};wa(o,Ya,1),e.propsDefaults=Object.create(null),zl(e,n,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);t?e.props=a?s:Yc(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Uu(e,n,t,a){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,l=be(s),[i]=e.propsOptions;let c=!1;if((a||r>0)&&!(r&16)){if(r&8){const h=e.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Wa(e.emitsOptions,g))continue;const v=n[g];if(i)if(de(o,g))v!==o[g]&&(o[g]=v,c=!0);else{const w=fn(g);s[w]=Cs(i,l,w,v,e,!1)}else v!==o[g]&&(o[g]=v,c=!0)}}}else{zl(e,n,s,o)&&(c=!0);let h;for(const d in l)(!n||!de(n,d)&&((h=mt(d))===d||!de(n,h)))&&(i?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=Cs(i,l,d,void 0,e,!0)):delete s[d]);if(o!==l)for(const d in o)(!n||!de(n,d))&&(delete o[d],c=!0)}c&&mn(e,"set","$attrs")}function zl(e,n,t,a){const[s,o]=e.propsOptions;let r=!1,l;if(n)for(let i in n){if(ba(i))continue;const c=n[i];let h;s&&de(s,h=fn(i))?!o||!o.includes(h)?t[h]=c:(l||(l={}))[h]=c:Wa(e.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,r=!0)}if(o){const i=be(t),c=l||Se;for(let h=0;h<o.length;h++){const d=o[h];t[d]=Cs(s,i,d,c[d],e,!de(c,d))}}return r}function Cs(e,n,t,a,s,o){const r=e[t];if(r!=null){const l=de(r,"default");if(l&&a===void 0){const i=r.default;if(r.type!==Function&&!r.skipFactory&&ge(i)){const{propsDefaults:c}=s;t in c?a=c[t]:(ft(s),a=c[t]=i.call(null,n),Yn())}else a=i}r[0]&&(o&&!l?a=!1:r[1]&&(a===""||a===mt(t))&&(a=!0))}return a}function Ul(e,n,t=!1){const a=n.propsCache,s=a.get(e);if(s)return s;const o=e.props,r={},l=[];let i=!1;if(!ge(e)){const h=d=>{i=!0;const[g,v]=Ul(d,n,!0);Ue(r,g),v&&l.push(...v)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!o&&!i)return xe(e)&&a.set(e,lt),lt;if(le(o))for(let h=0;h<o.length;h++){const d=fn(o[h]);Jo(d)&&(r[d]=Se)}else if(o)for(const h in o){const d=fn(h);if(Jo(d)){const g=o[h],v=r[d]=le(g)||ge(g)?{type:g}:Ue({},g);if(v){const w=Qo(Boolean,v.type),m=Qo(String,v.type);v[0]=w>-1,v[1]=m<0||w<m,(w>-1||de(v,"default"))&&l.push(d)}}}const c=[r,l];return xe(e)&&a.set(e,c),c}function Jo(e){return e[0]!=="$"}function Zo(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Xo(e,n){return Zo(e)===Zo(n)}function Qo(e,n){return le(n)?n.findIndex(t=>Xo(t,e)):ge(n)&&Xo(n,e)?0:-1}const Hl=e=>e[0]==="_"||e==="$stable",ro=e=>le(e)?e.map(hn):[hn(e)],Hu=(e,n,t)=>{if(n._n)return n;const a=un((...s)=>ro(n(...s)),t);return a._c=!1,a},ql=(e,n,t)=>{const a=e._ctx;for(const s in e){if(Hl(s))continue;const o=e[s];if(ge(o))n[s]=Hu(s,o,a);else if(o!=null){const r=ro(o);n[s]=()=>r}}},Wl=(e,n)=>{const t=ro(n);e.slots.default=()=>t},qu=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=be(n),wa(n,"_",t)):ql(n,e.slots={})}else e.slots={},n&&Wl(e,n);wa(e.slots,Ya,1)},Wu=(e,n,t)=>{const{vnode:a,slots:s}=e;let o=!0,r=Se;if(a.shapeFlag&32){const l=n._;l?t&&l===1?o=!1:(Ue(s,n),!t&&l===1&&delete s._):(o=!n.$stable,ql(n,s)),r=n}else n&&(Wl(e,n),r={default:1});if(o)for(const l in s)!Hl(l)&&!(l in r)&&delete s[l]};function Ss(e,n,t,a,s=!1){if(le(e)){e.forEach((g,v)=>Ss(g,n&&(le(n)?n[v]:n),t,a,s));return}if(Ct(a)&&!s)return;const o=a.shapeFlag&4?Ja(a.component)||a.component.proxy:a.el,r=s?null:o,{i:l,r:i}=e,c=n&&n.r,h=l.refs===Se?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==i&&(Pe(c)?(h[c]=null,de(d,c)&&(d[c]=null)):Me(c)&&(c.value=null)),ge(i))Mn(i,l,12,[r,h]);else{const g=Pe(i),v=Me(i);if(g||v){const w=()=>{if(e.f){const m=g?de(d,i)?d[i]:h[i]:i.value;s?le(m)&&Gs(m,o):le(m)?m.includes(o)||m.push(o):g?(h[i]=[o],de(d,i)&&(d[i]=h[i])):(i.value=[o],e.k&&(h[e.k]=i.value))}else g?(h[i]=r,de(d,i)&&(d[i]=r)):v&&(i.value=r,e.k&&(h[e.k]=r))};r?(w.id=-1,Je(w,t)):w()}}}const Je=du;function Vu(e){return Gu(e)}function Gu(e,n){const t=ms();t.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:r,createText:l,createComment:i,setText:c,setElementText:h,parentNode:d,nextSibling:g,setScopeId:v=on,insertStaticContent:w}=e,m=(f,j,C,P=null,O=null,B=null,q=!1,T=null,H=!!j.dynamicChildren)=>{if(f===j)return;f&&!wt(f,j)&&(P=Ie(f),ae(f,O,B,!0),f=null),j.patchFlag===-2&&(H=!1,j.dynamicChildren=null);const{type:$,ref:L,shapeFlag:V}=j;switch($){case Ka:k(f,j,C,P);break;case Rn:S(f,j,C,P);break;case ya:f==null&&b(j,C,P,q);break;case Oe:ye(f,j,C,P,O,B,q,T,H);break;default:V&1?E(f,j,C,P,O,B,q,T,H):V&6?ve(f,j,C,P,O,B,q,T,H):(V&64||V&128)&&$.process(f,j,C,P,O,B,q,T,H,$e)}L!=null&&O&&Ss(L,f&&f.ref,B,j||f,!j)},k=(f,j,C,P)=>{if(f==null)a(j.el=l(j.children),C,P);else{const O=j.el=f.el;j.children!==f.children&&c(O,j.children)}},S=(f,j,C,P)=>{f==null?a(j.el=i(j.children||""),C,P):j.el=f.el},b=(f,j,C,P)=>{[f.el,f.anchor]=w(f.children,j,C,P,f.el,f.anchor)},y=({el:f,anchor:j},C,P)=>{let O;for(;f&&f!==j;)O=g(f),a(f,C,P),f=O;a(j,C,P)},_=({el:f,anchor:j})=>{let C;for(;f&&f!==j;)C=g(f),s(f),f=C;s(j)},E=(f,j,C,P,O,B,q,T,H)=>{q=q||j.type==="svg",f==null?I(j,C,P,O,B,q,T,H):R(f,j,O,B,q,T,H)},I=(f,j,C,P,O,B,q,T)=>{let H,$;const{type:L,props:V,shapeFlag:Z,transition:z,dirs:G}=f;if(H=f.el=r(f.type,B,V&&V.is,V),Z&8?h(H,f.children):Z&16&&U(f.children,H,null,P,O,B&&L!=="foreignObject",q,T),G&&Dn(f,null,P,"created"),F(H,f,f.scopeId,q,P),V){for(const M in V)M!=="value"&&!ba(M)&&o(H,M,null,V[M],B,f.children,P,O,fe);"value"in V&&o(H,"value",null,V.value),($=V.onVnodeBeforeMount)&&cn($,P,f)}G&&Dn(f,null,P,"beforeMount");const x=(!O||O&&!O.pendingBranch)&&z&&!z.persisted;x&&z.beforeEnter(H),a(H,j,C),(($=V&&V.onVnodeMounted)||x||G)&&Je(()=>{$&&cn($,P,f),x&&z.enter(H),G&&Dn(f,null,P,"mounted")},O)},F=(f,j,C,P,O)=>{if(C&&v(f,C),P)for(let B=0;B<P.length;B++)v(f,P[B]);if(O){let B=O.subTree;if(j===B){const q=O.vnode;F(f,q,q.scopeId,q.slotScopeIds,O.parent)}}},U=(f,j,C,P,O,B,q,T,H=0)=>{for(let $=H;$<f.length;$++){const L=f[$]=T?Sn(f[$]):hn(f[$]);m(null,L,j,C,P,O,B,q,T)}},R=(f,j,C,P,O,B,q)=>{const T=j.el=f.el;let{patchFlag:H,dynamicChildren:$,dirs:L}=j;H|=f.patchFlag&16;const V=f.props||Se,Z=j.props||Se;let z;C&&zn(C,!1),(z=Z.onVnodeBeforeUpdate)&&cn(z,C,j,f),L&&Dn(j,f,C,"beforeUpdate"),C&&zn(C,!0);const G=O&&j.type!=="foreignObject";if($?ee(f.dynamicChildren,$,T,C,P,G,B):q||N(f,j,T,null,C,P,G,B,!1),H>0){if(H&16)ue(T,j,V,Z,C,P,O);else if(H&2&&V.class!==Z.class&&o(T,"class",null,Z.class,O),H&4&&o(T,"style",V.style,Z.style,O),H&8){const x=j.dynamicProps;for(let M=0;M<x.length;M++){const K=x[M],re=V[K],oe=Z[K];(oe!==re||K==="value")&&o(T,K,re,oe,O,f.children,C,P,fe)}}H&1&&f.children!==j.children&&h(T,j.children)}else!q&&$==null&&ue(T,j,V,Z,C,P,O);((z=Z.onVnodeUpdated)||L)&&Je(()=>{z&&cn(z,C,j,f),L&&Dn(j,f,C,"updated")},P)},ee=(f,j,C,P,O,B,q)=>{for(let T=0;T<j.length;T++){const H=f[T],$=j[T],L=H.el&&(H.type===Oe||!wt(H,$)||H.shapeFlag&70)?d(H.el):C;m(H,$,L,null,P,O,B,q,!0)}},ue=(f,j,C,P,O,B,q)=>{if(C!==P){if(C!==Se)for(const T in C)!ba(T)&&!(T in P)&&o(f,T,C[T],null,q,j.children,O,B,fe);for(const T in P){if(ba(T))continue;const H=P[T],$=C[T];H!==$&&T!=="value"&&o(f,T,$,H,q,j.children,O,B,fe)}"value"in P&&o(f,"value",C.value,P.value)}},ye=(f,j,C,P,O,B,q,T,H)=>{const $=j.el=f?f.el:l(""),L=j.anchor=f?f.anchor:l("");let{patchFlag:V,dynamicChildren:Z,slotScopeIds:z}=j;z&&(T=T?T.concat(z):z),f==null?(a($,C,P),a(L,C,P),U(j.children,C,L,O,B,q,T,H)):V>0&&V&64&&Z&&f.dynamicChildren?(ee(f.dynamicChildren,Z,C,O,B,q,T),(j.key!=null||O&&j===O.subTree)&&Vl(f,j,!0)):N(f,j,C,L,O,B,q,T,H)},ve=(f,j,C,P,O,B,q,T,H)=>{j.slotScopeIds=T,f==null?j.shapeFlag&512?O.ctx.activate(j,C,P,q,H):me(j,C,P,O,B,q,H):_e(f,j,H)},me=(f,j,C,P,O,B,q)=>{const T=f.component=nh(f,P,O);if(Ml(f)&&(T.ctx.renderer=$e),ah(T),T.asyncDep){if(O&&O.registerDep(T,he),!f.el){const H=T.subTree=W(Rn);S(null,H,j,C)}return}he(T,f,j,C,O,B,q)},_e=(f,j,C)=>{const P=j.component=f.component;if(gu(f,j,C))if(P.asyncDep&&!P.asyncResolved){A(P,j,C);return}else P.next=j,ru(P.update),P.update();else j.el=f.el,P.vnode=j},he=(f,j,C,P,O,B,q)=>{const T=()=>{if(f.isMounted){let{next:L,bu:V,u:Z,parent:z,vnode:G}=f,x=L,M;zn(f,!1),L?(L.el=G.el,A(f,L,q)):L=G,V&&ma(V),(M=L.props&&L.props.onVnodeBeforeUpdate)&&cn(M,z,L,G),zn(f,!0);const K=ss(f),re=f.subTree;f.subTree=K,m(re,K,d(re.el),Ie(re),f,O,B),L.el=K.el,x===null&&pu(f,K.el),Z&&Je(Z,O),(M=L.props&&L.props.onVnodeUpdated)&&Je(()=>cn(M,z,L,G),O)}else{let L;const{el:V,props:Z}=j,{bm:z,m:G,parent:x}=f,M=Ct(j);if(zn(f,!1),z&&ma(z),!M&&(L=Z&&Z.onVnodeBeforeMount)&&cn(L,x,j),zn(f,!0),V&&Ge){const K=()=>{f.subTree=ss(f),Ge(V,f.subTree,f,O,null)};M?j.type.__asyncLoader().then(()=>!f.isUnmounted&&K()):K()}else{const K=f.subTree=ss(f);m(null,K,C,P,f,O,B),j.el=K.el}if(G&&Je(G,O),!M&&(L=Z&&Z.onVnodeMounted)){const K=j;Je(()=>cn(L,x,K),O)}(j.shapeFlag&256||x&&Ct(x.vnode)&&x.vnode.shapeFlag&256)&&f.a&&Je(f.a,O),f.isMounted=!0,j=C=P=null}},H=f.effect=new Js(T,()=>ao($),f.scope),$=f.update=()=>H.run();$.id=f.uid,zn(f,!0),$()},A=(f,j,C)=>{j.component=f;const P=f.vnode.props;f.vnode=j,f.next=null,Uu(f,j.props,P,C),Wu(f,j.children,C),yt(),qo(),vt()},N=(f,j,C,P,O,B,q,T,H=!1)=>{const $=f&&f.children,L=f?f.shapeFlag:0,V=j.children,{patchFlag:Z,shapeFlag:z}=j;if(Z>0){if(Z&128){ie($,V,C,P,O,B,q,T,H);return}else if(Z&256){Y($,V,C,P,O,B,q,T,H);return}}z&8?(L&16&&fe($,O,B),V!==$&&h(C,V)):L&16?z&16?ie($,V,C,P,O,B,q,T,H):fe($,O,B,!0):(L&8&&h(C,""),z&16&&U(V,C,P,O,B,q,T,H))},Y=(f,j,C,P,O,B,q,T,H)=>{f=f||lt,j=j||lt;const $=f.length,L=j.length,V=Math.min($,L);let Z;for(Z=0;Z<V;Z++){const z=j[Z]=H?Sn(j[Z]):hn(j[Z]);m(f[Z],z,C,null,O,B,q,T,H)}$>L?fe(f,O,B,!0,!1,V):U(j,C,P,O,B,q,T,H,V)},ie=(f,j,C,P,O,B,q,T,H)=>{let $=0;const L=j.length;let V=f.length-1,Z=L-1;for(;$<=V&&$<=Z;){const z=f[$],G=j[$]=H?Sn(j[$]):hn(j[$]);if(wt(z,G))m(z,G,C,null,O,B,q,T,H);else break;$++}for(;$<=V&&$<=Z;){const z=f[V],G=j[Z]=H?Sn(j[Z]):hn(j[Z]);if(wt(z,G))m(z,G,C,null,O,B,q,T,H);else break;V--,Z--}if($>V){if($<=Z){const z=Z+1,G=z<L?j[z].el:P;for(;$<=Z;)m(null,j[$]=H?Sn(j[$]):hn(j[$]),C,G,O,B,q,T,H),$++}}else if($>Z)for(;$<=V;)ae(f[$],O,B,!0),$++;else{const z=$,G=$,x=new Map;for($=G;$<=Z;$++){const We=j[$]=H?Sn(j[$]):hn(j[$]);We.key!=null&&x.set(We.key,$)}let M,K=0;const re=Z-G+1;let oe=!1,ne=0;const Fe=new Array(re);for($=0;$<re;$++)Fe[$]=0;for($=z;$<=V;$++){const We=f[$];if(K>=re){ae(We,O,B,!0);continue}let ln;if(We.key!=null)ln=x.get(We.key);else for(M=G;M<=Z;M++)if(Fe[M-G]===0&&wt(We,j[M])){ln=M;break}ln===void 0?ae(We,O,B,!0):(Fe[ln-G]=$+1,ln>=ne?ne=ln:oe=!0,m(We,j[ln],C,null,O,B,q,T,H),K++)}const kn=oe?Ku(Fe):lt;for(M=kn.length-1,$=re-1;$>=0;$--){const We=G+$,ln=j[We],Io=We+1<L?j[We+1].el:P;Fe[$]===0?m(null,ln,C,Io,O,B,q,T,H):oe&&(M<0||$!==kn[M]?D(ln,C,Io,2):M--)}}},D=(f,j,C,P,O=null)=>{const{el:B,type:q,transition:T,children:H,shapeFlag:$}=f;if($&6){D(f.component.subTree,j,C,P);return}if($&128){f.suspense.move(j,C,P);return}if($&64){q.move(f,j,C,$e);return}if(q===Oe){a(B,j,C);for(let V=0;V<H.length;V++)D(H[V],j,C,P);a(f.anchor,j,C);return}if(q===ya){y(f,j,C);return}if(P!==2&&$&1&&T)if(P===0)T.beforeEnter(B),a(B,j,C),Je(()=>T.enter(B),O);else{const{leave:V,delayLeave:Z,afterLeave:z}=T,G=()=>a(B,j,C),x=()=>{V(B,()=>{G(),z&&z()})};Z?Z(B,G,x):x()}else a(B,j,C)},ae=(f,j,C,P=!1,O=!1)=>{const{type:B,props:q,ref:T,children:H,dynamicChildren:$,shapeFlag:L,patchFlag:V,dirs:Z}=f;if(T!=null&&Ss(T,null,C,f,!0),L&256){j.ctx.deactivate(f);return}const z=L&1&&Z,G=!Ct(f);let x;if(G&&(x=q&&q.onVnodeBeforeUnmount)&&cn(x,j,f),L&6)je(f.component,C,P);else{if(L&128){f.suspense.unmount(C,P);return}z&&Dn(f,null,j,"beforeUnmount"),L&64?f.type.remove(f,j,C,O,$e,P):$&&(B!==Oe||V>0&&V&64)?fe($,j,C,!1,!0):(B===Oe&&V&384||!O&&L&16)&&fe(H,j,C),P&&Ee(f)}(G&&(x=q&&q.onVnodeUnmounted)||z)&&Je(()=>{x&&cn(x,j,f),z&&Dn(f,null,j,"unmounted")},C)},Ee=f=>{const{type:j,el:C,anchor:P,transition:O}=f;if(j===Oe){pe(C,P);return}if(j===ya){_(f);return}const B=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(f.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:T}=O,H=()=>q(C,B);T?T(f.el,B,H):H()}else B()},pe=(f,j)=>{let C;for(;f!==j;)C=g(f),s(f),f=C;s(j)},je=(f,j,C)=>{const{bum:P,scope:O,update:B,subTree:q,um:T}=f;P&&ma(P),O.stop(),B&&(B.active=!1,ae(q,f,j,C)),T&&Je(T,j),Je(()=>{f.isUnmounted=!0},j),j&&j.pendingBranch&&!j.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===j.pendingId&&(j.deps--,j.deps===0&&j.resolve())},fe=(f,j,C,P=!1,O=!1,B=0)=>{for(let q=B;q<f.length;q++)ae(f[q],j,C,P,O)},Ie=f=>f.shapeFlag&6?Ie(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),qe=(f,j,C)=>{f==null?j._vnode&&ae(j._vnode,null,null,!0):m(j._vnode||null,f,j,null,null,null,C),qo(),Cl(),j._vnode=f},$e={p:m,um:ae,m:D,r:Ee,mt:me,mc:U,pc:N,pbc:ee,n:Ie,o:e};let Be,Ge;return n&&([Be,Ge]=n($e)),{render:qe,hydrate:Be,createApp:Fu(qe,Be)}}function zn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Vl(e,n,t=!1){const a=e.children,s=n.children;if(le(a)&&le(s))for(let o=0;o<a.length;o++){const r=a[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=Sn(s[o]),l.el=r.el),t||Vl(r,l)),l.type===Ka&&(l.el=r.el)}}function Ku(e){const n=e.slice(),t=[0];let a,s,o,r,l;const i=e.length;for(a=0;a<i;a++){const c=e[a];if(c!==0){if(s=t[t.length-1],e[s]<c){n[a]=s,t.push(a);continue}for(o=0,r=t.length-1;o<r;)l=o+r>>1,e[t[l]]<c?o=l+1:r=l;c<e[t[o]]&&(o>0&&(n[a]=t[o-1]),t[o]=a)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=n[r];return t}const Yu=e=>e.__isTeleport,Oe=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),ya=Symbol.for("v-stc"),Tt=[];let an=null;function X(e=!1){Tt.push(an=e?null:[])}function Ju(){Tt.pop(),an=Tt[Tt.length-1]||null}let Ft=1;function er(e){Ft+=e}function Gl(e){return e.dynamicChildren=Ft>0?an||lt:null,Ju(),Ft>0&&an&&an.push(e),e}function te(e,n,t,a,s,o){return Gl(u(e,n,t,a,s,o,!0))}function Dt(e,n,t,a,s){return Gl(W(e,n,t,a,s,!0))}function Sa(e){return e?e.__v_isVNode===!0:!1}function wt(e,n){return e.type===n.type&&e.key===n.key}const Ya="__vInternal",Kl=({key:e})=>e??null,va=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||Me(e)||ge(e)?{i:ze,r:e,k:n,f:!!t}:e:null);function u(e,n=null,t=null,a=0,s=null,o=e===Oe?0:1,r=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Kl(n),ref:n&&va(n),scopeId:Va,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return l?(io(i,t),o&128&&e.normalize(i)):t&&(i.shapeFlag|=Pe(t)?8:16),Ft>0&&!r&&an&&(i.patchFlag>0||o&6)&&i.patchFlag!==32&&an.push(i),i}const W=Zu;function Zu(e,n=null,t=null,a=0,s=null,o=!1){if((!e||e===Su)&&(e=Rn),Sa(e)){const l=pt(e,n,!0);return t&&io(l,t),Ft>0&&!o&&an&&(l.shapeFlag&6?an[an.indexOf(e)]=l:an.push(l)),l.patchFlag|=-2,l}if(lh(e)&&(e=e.__vccOpts),n){n=Xu(n);let{class:l,style:i}=n;l&&!Pe(l)&&(n.class=Ce(l)),xe(i)&&(vl(i)&&!le(i)&&(i=Ue({},i)),n.style=An(i))}const r=Pe(e)?1:fu(e)?128:Yu(e)?64:xe(e)?4:ge(e)?2:0;return u(e,n,t,a,s,r,o,!0)}function Xu(e){return e?vl(e)||Ya in e?Ue({},e):e:null}function pt(e,n,t=!1){const{props:a,ref:s,patchFlag:o,children:r}=e,l=n?At(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kl(l),ref:n&&n.ref?t&&s?le(s)?s.concat(va(n)):[s,va(n)]:va(n):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ce(e=" ",n=0){return W(Ka,null,e,n)}function lo(e,n){const t=W(ya,null,e);return t.staticCount=n,t}function en(e="",n=!1){return n?(X(),Dt(Rn,null,e)):W(Rn,null,e)}function hn(e){return e==null||typeof e=="boolean"?W(Rn):le(e)?W(Oe,null,e.slice()):typeof e=="object"?Sn(e):W(Ka,null,String(e))}function Sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function io(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(le(n))t=16;else if(typeof n=="object")if(a&65){const s=n.default;s&&(s._c&&(s._d=!1),io(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!(Ya in n)?n._ctx=ze:s===3&&ze&&(ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ge(n)?(n={default:n,_ctx:ze},t=32):(n=String(n),a&64?(t=16,n=[ce(n)]):t=8);e.children=n,e.shapeFlag|=t}function At(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const s in a)if(s==="class")n.class!==a.class&&(n.class=Ce([n.class,a.class]));else if(s==="style")n.style=An([n.style,a.style]);else if(Pa(s)){const o=n[s],r=a[s];r&&o!==r&&!(le(o)&&o.includes(r))&&(n[s]=o?[].concat(o,r):r)}else s!==""&&(n[s]=a[s])}return n}function cn(e,n,t,a=null){rn(e,n,7,[t,a])}const Qu=Dl();let eh=0;function nh(e,n,t){const a=e.type,s=(n?n.appContext:e.appContext)||Qu,o={uid:eh++,vnode:e,type:a,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ul(a,s),emitsOptions:Tl(a,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:a.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=cu.bind(null,o),e.ce&&e.ce(o),o}let Re=null;const th=()=>Re||ze;let co,nt,nr="__VUE_INSTANCE_SETTERS__";(nt=ms()[nr])||(nt=ms()[nr]=[]),nt.push(e=>Re=e),co=e=>{nt.length>1?nt.forEach(n=>n(e)):nt[0](e)};const ft=e=>{co(e),e.scope.on()},Yn=()=>{Re&&Re.scope.off(),co(null)};function Yl(e){return e.vnode.shapeFlag&4}let zt=!1;function ah(e,n=!1){zt=n;const{props:t,children:a}=e.vnode,s=Yl(e);zu(e,t,s,n),qu(e,a);const o=s?sh(e,n):void 0;return zt=!1,o}function sh(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Ha(new Proxy(e.ctx,Au));const{setup:a}=t;if(a){const s=e.setupContext=a.length>1?Zl(e):null;ft(e),yt();const o=Mn(a,e,0,[e.props,s]);if(vt(),Yn(),Qr(o)){if(o.then(Yn,Yn),n)return o.then(r=>{tr(e,r,n)}).catch(r=>{qa(r,e,0)});e.asyncDep=o}else tr(e,o,n)}else Jl(e,n)}function tr(e,n,t){ge(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:xe(n)&&(e.setupState=wl(n)),Jl(e,t)}let ar;function Jl(e,n,t){const a=e.type;if(!e.render){if(!n&&ar&&!a.render){const s=a.template||oo(e).template;if(s){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:l,compilerOptions:i}=a,c=Ue(Ue({isCustomElement:o,delimiters:l},r),i);a.render=ar(s,c)}}e.render=a.render||on}ft(e),yt(),Mu(e),vt(),Yn()}function oh(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Ze(e,"get","$attrs"),n[t]}}))}function Zl(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return oh(e)},slots:e.slots,emit:e.emit,expose:n}}function Ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(wl(Ha(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in St)return St[t](e)},has(n,t){return t in n||t in St}}))}function rh(e,n=!0){return ge(e)?e.displayName||e.name:e.name||n&&e.__name}function lh(e){return ge(e)&&"__vccOpts"in e}const De=(e,n)=>au(e,n,zt);function ih(e,n,t){const a=arguments.length;return a===2?xe(n)&&!le(n)?Sa(n)?W(e,null,[n]):W(e,n):W(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Sa(t)&&(t=[t]),W(e,n,t))}const ch=Symbol.for("v-scx"),uh=()=>se(ch),hh="3.3.4",gh="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,sr=Hn&&Hn.createElement("template"),ph={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const s=n?Hn.createElementNS(gh,e):Hn.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,s,o){const r=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{sr.innerHTML=a?`<svg>${e}</svg>`:e;const l=sr.content;if(a){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}n.insertBefore(l,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function fh(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function dh(e,n,t){const a=e.style,s=Pe(t);if(t&&!s){if(n&&!Pe(n))for(const o in n)t[o]==null&&Ts(a,o,"");for(const o in t)Ts(a,o,t[o])}else{const o=a.display;s?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=o)}}const or=/\s*!important$/;function Ts(e,n,t){if(le(t))t.forEach(a=>Ts(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=bh(e,n);or.test(t)?e.setProperty(mt(a),t.replace(or,""),"important"):e[a]=t}}const rr=["Webkit","Moz","ms"],ls={};function bh(e,n){const t=ls[n];if(t)return t;let a=fn(n);if(a!=="filter"&&a in e)return ls[n]=a;a=Fa(a);for(let s=0;s<rr.length;s++){const o=rr[s]+a;if(o in e)return ls[n]=o}return n}const lr="http://www.w3.org/1999/xlink";function mh(e,n,t,a,s){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(lr,n.slice(6,n.length)):e.setAttributeNS(lr,n,t);else{const o=yc(n);t==null||o&&!tl(t)?e.removeAttribute(n):e.setAttribute(n,o?"":t)}}function yh(e,n,t,a,s,o,r){if(n==="innerHTML"||n==="textContent"){a&&r(a,s,o),e[n]=t??"";return}const l=e.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=t;const c=l==="OPTION"?e.getAttribute("value"):e.value,h=t??"";c!==h&&(e.value=h),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=tl(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}function qn(e,n,t,a){e.addEventListener(n,t,a)}function vh(e,n,t,a){e.removeEventListener(n,t,a)}function jh(e,n,t,a,s=null){const o=e._vei||(e._vei={}),r=o[n];if(a&&r)r.value=a;else{const[l,i]=_h(n);if(a){const c=o[n]=xh(a,s);qn(e,l,c,i)}else r&&(vh(e,l,r,i),o[n]=void 0)}}const ir=/(?:Once|Passive|Capture)$/;function _h(e){let n;if(ir.test(e)){n={};let a;for(;a=e.match(ir);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mt(e.slice(2)),n]}let is=0;const wh=Promise.resolve(),kh=()=>is||(wh.then(()=>is=0),is=Date.now());function xh(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;rn(Eh(a,t.value),n,5,[a])};return t.value=e,t.attached=kh(),t}function Eh(e,n){if(le(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>s=>!s._stopped&&a&&a(s))}else return n}const cr=/^on[a-z]/,Ch=(e,n,t,a,s=!1,o,r,l,i)=>{n==="class"?fh(e,a,s):n==="style"?dh(e,t,a):Pa(n)?Vs(n)||jh(e,n,t,a,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Sh(e,n,a,s))?yh(e,n,a,o,r,l,i):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),mh(e,n,a,s))};function Sh(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&cr.test(n)&&ge(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||cr.test(n)&&Pe(t)?!1:n in e}const Ta=e=>{const n=e.props["onUpdate:modelValue"]||!1;return le(n)?t=>ma(n,t):n};function Th(e){e.target.composing=!0}function ur(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const tt={created(e,{modifiers:{lazy:n,trim:t,number:a}},s){e._assign=Ta(s);const o=a||s.props&&s.props.type==="number";qn(e,n?"change":"input",r=>{if(r.target.composing)return;let l=e.value;t&&(l=l.trim()),o&&(l=bs(l)),e._assign(l)}),t&&qn(e,"change",()=>{e.value=e.value.trim()}),n||(qn(e,"compositionstart",Th),qn(e,"compositionend",ur),qn(e,"change",ur))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:s}},o){if(e._assign=Ta(o),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(s||e.type==="number")&&bs(e.value)===n))return;const r=n??"";e.value!==r&&(e.value=r)}},Ah={deep:!0,created(e,n,t){e._assign=Ta(t),qn(e,"change",()=>{const a=e._modelValue,s=Oh(e),o=e.checked,r=e._assign;if(le(a)){const l=al(a,s),i=l!==-1;if(o&&!i)r(a.concat(s));else if(!o&&i){const c=[...a];c.splice(l,1),r(c)}}else if(La(a)){const l=new Set(a);o?l.add(s):l.delete(s),r(l)}else r(Xl(e,o))})},mounted:hr,beforeUpdate(e,n,t){e._assign=Ta(t),hr(e,n,t)}};function hr(e,{value:n,oldValue:t},a){e._modelValue=n,le(n)?e.checked=al(n,a.props.value)>-1:La(n)?e.checked=n.has(a.props.value):n!==t&&(e.checked=Da(n,Xl(e,!0)))}function Oh(e){return"_value"in e?e._value:e.value}function Xl(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const $h=Ue({patchProp:Ch},ph);let gr;function Nh(){return gr||(gr=Vu($h))}const Mh=(...e)=>{const n=Nh().createApp(...e),{mount:t}=n;return n.mount=a=>{const s=Ih(a);if(!s)return;const o=n._component;!ge(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},n};function Ih(e){return Pe(e)?document.querySelector(e):e}var Rh=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ql;const Za=e=>Ql=e,ei=Symbol();function As(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ot;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ot||(Ot={}));function Ph(){const e=rl(!0),n=e.run(()=>we({}));let t=[],a=[];const s=Ha({install(o){Za(s),s._a=o,o.provide(ei,s),o.config.globalProperties.$pinia=s,a.forEach(r=>t.push(r)),a=[]},use(o){return!this._a&&!Rh?a.push(o):t.push(o),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return s}const ni=()=>{};function pr(e,n,t,a=ni){e.push(n);const s=()=>{const o=e.indexOf(n);o>-1&&(e.splice(o,1),a())};return!t&&ll()&&_c(s),s}function at(e,...n){e.slice().forEach(t=>{t(...n)})}const Lh=e=>e();function Os(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,a)=>e.set(a,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const a=n[t],s=e[t];As(s)&&As(a)&&e.hasOwnProperty(t)&&!Me(a)&&!Nn(a)?e[t]=Os(s,a):e[t]=a}return e}const Bh=Symbol();function Fh(e){return!As(e)||!e.hasOwnProperty(Bh)}const{assign:Cn}=Object;function Dh(e){return!!(Me(e)&&e.effect)}function zh(e,n,t,a){const{state:s,actions:o,getters:r}=n,l=t.state.value[e];let i;function c(){l||(t.state.value[e]=s?s():{});const h=Qc(t.state.value[e]);return Cn(h,o,Object.keys(r||{}).reduce((d,g)=>(d[g]=Ha(De(()=>{Za(t);const v=t._s.get(e);return r[g].call(v,v)})),d),{}))}return i=ti(e,c,n,t,a,!0),i}function ti(e,n,t={},a,s,o){let r;const l=Cn({actions:{}},t),i={deep:!0};let c,h,d=[],g=[],v;const w=a.state.value[e];!o&&!w&&(a.state.value[e]={}),we({});let m;function k(U){let R;c=h=!1,typeof U=="function"?(U(a.state.value[e]),R={type:Ot.patchFunction,storeId:e,events:v}):(Os(a.state.value[e],U),R={type:Ot.patchObject,payload:U,storeId:e,events:v});const ee=m=Symbol();xl().then(()=>{m===ee&&(c=!0)}),h=!0,at(d,R,a.state.value[e])}const S=o?function(){const{state:R}=t,ee=R?R():{};this.$patch(ue=>{Cn(ue,ee)})}:ni;function b(){r.stop(),d=[],g=[],a._s.delete(e)}function y(U,R){return function(){Za(a);const ee=Array.from(arguments),ue=[],ye=[];function ve(he){ue.push(he)}function me(he){ye.push(he)}at(g,{args:ee,name:U,store:E,after:ve,onError:me});let _e;try{_e=R.apply(this&&this.$id===e?this:E,ee)}catch(he){throw at(ye,he),he}return _e instanceof Promise?_e.then(he=>(at(ue,he),he)).catch(he=>(at(ye,he),Promise.reject(he))):(at(ue,_e),_e)}}const _={_p:a,$id:e,$onAction:pr.bind(null,g),$patch:k,$reset:S,$subscribe(U,R={}){const ee=pr(d,U,R.detached,()=>ue()),ue=r.run(()=>ut(()=>a.state.value[e],ye=>{(R.flush==="sync"?h:c)&&U({storeId:e,type:Ot.direct,events:v},ye)},Cn({},i,R)));return ee},$dispose:b},E=Ua(_);a._s.set(e,E);const I=a._a&&a._a.runWithContext||Lh,F=a._e.run(()=>(r=rl(),I(()=>r.run(n))));for(const U in F){const R=F[U];if(Me(R)&&!Dh(R)||Nn(R))o||(w&&Fh(R)&&(Me(R)?R.value=w[U]:Os(R,w[U])),a.state.value[e][U]=R);else if(typeof R=="function"){const ee=y(U,R);F[U]=ee,l.actions[U]=R}}return Cn(E,F),Cn(be(E),F),Object.defineProperty(E,"$state",{get:()=>a.state.value[e],set:U=>{k(R=>{Cn(R,U)})}}),a._p.forEach(U=>{Cn(E,r.run(()=>U({store:E,app:a._a,pinia:a,options:l})))}),w&&o&&t.hydrate&&t.hydrate(E.$state,w),c=!0,h=!0,E}function Uh(e,n,t){let a,s;const o=typeof n=="function";typeof e=="string"?(a=e,s=o?t:n):(s=e,a=e.id);function r(l,i){const c=Du();return l=l||(c?se(ei,null):null),l&&Za(l),l=Ql,l._s.has(a)||(o?ti(a,n,s,l):zh(a,s,l)),l._s.get(a)}return r.$id=a,r}const Hh="vue3-code-block",ai="2.2.11",qh="Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.",Wh="dist/vue3-code-block.cjs.js",Vh="dist/vue3-code-block.es.js",Gh="dist/types/index.d.ts",Kh={dev:"vite",watch:"pnpm dev",play:"sh src/playground/configs/build.sh && NODE_ENV=playground vite",sass:"sass --watch --no-source-map src/plugin/themes/scss/:src/plugin/themes/css","sass:min":"sass --style compressed --watch --no-source-map src/plugin/themes/scss/:src/plugin/themes/css/min",build:"vue-tsc && vite build --config vite.build.config.ts","build:docs":"vite build",predeploy:"npm run build",deploy:"gh-pages -d docs",prepublishOnly:"npm run build",lint:"eslint src/**/*.{ts,vue} --max-warnings 4",prepare:"husky install"},Yh={node:"^19.0.1"},Jh="pnpm@7.14.2",Zh="WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)",Xh=[{type:"paypal",url:"https://paypal.me/webdevnerdstuff"},{type:"patreon",url:"https://www.patreon.com/WebDevNerdStuff"}],Qh="MIT",eg=["dist/*","LICENSE.md","README.md"],ng="https://github.com/webdevnerdstuff/vue3-code-block",tg={url:"https://github.com/webdevnerdstuff/vue3-code-block/issues"},ag="https://webdevnerdstuff.github.io/vue3-code-block/",sg=["vue3-code-block","code","pre","highlight","syntax","vue","vue3","prism","prismjs","highlightjs","highlight.js","component","javascript","typescript","neon bunny","webdevnerdstuff","wdns"],og={"highlight.js":"^11.8.0",prismjs:"^1.29.0","ua-parser-js":"^1.0.35",vue:"^3.3.4"},rg={"@babel/core":"^7.22.5","@babel/eslint-parser":"^7.22.5","@fortawesome/fontawesome-svg-core":"^6.4.0","@fortawesome/free-brands-svg-icons":"^6.4.0","@fortawesome/free-solid-svg-icons":"^6.4.0","@fortawesome/vue-fontawesome":"^3.0.3","@rollup/plugin-alias":"^5.0.0","@rollup/plugin-commonjs":"^25.0.1","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.1.0","@rollup/plugin-terser":"^0.4.3","@types/node":"^20.2.6","@types/prismjs":"^1.26.0","@typescript-eslint/eslint-plugin":"^5.59.9","@typescript-eslint/parser":"^5.59.9","@vitejs/plugin-vue":"^4.2.3","@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-eslint":"^5.0.8","@vue/cli-service":"^5.0.8","@vue/compiler-sfc":"^3.3.4","@vue/eslint-config-typescript":"^11.0.3",autoprefixer:"^10.4.13",eslint:"^8.42.0","eslint-config-prettier":"^8.8.0","eslint-plugin-import":"^2.27.5","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.14.1","gh-pages":"^5.0.0",husky:"^8.0.3","lint-staged":"^13.2.2",pinia:"^2.1.3",postcss:"^8.4.24","postcss-html":"^1.5.0","postcss-scss":"^4.0.6",prettier:"^2.8.8",rollup:"^3.24.1","rollup-plugin-copy":"^3.4.0","rollup-plugin-polyfill-node":"^0.12.0","rollup-plugin-postcss":"^4.0.2","rollup-plugin-scss":"^4.0.0","rollup-plugin-typescript2":"^0.34.1",sass:"^1.63.3",stylelint:"^15.7.0","stylelint-config-standard":"^33.0.0","stylelint-order":"^6.0.2","stylelint-scss":"^5.0.1",typescript:"^5.1.3","unplugin-auto-import":"^0.16.4",vite:"^4.3.9","vite-plugin-babel":"^1.1.3","vite-plugin-css-injected-by-js":"^3.1.1","vite-plugin-dts":"^2.3.0","vite-plugin-eslint":"^1.8.1","vite-plugin-static-copy":"^0.16.0","vite-plugin-stylelint":"^4.2.0","vue-tsc":"^1.6.5"},uo={name:Hh,version:ai,description:qh,private:!1,main:Wh,module:Vh,types:Gh,scripts:Kh,engines:Yh,packageManager:Jh,"lint-staged":{"src/**/*.{js,ts,vue}":["npm run lint"]},author:Zh,funding:Xh,license:Qh,files:eg,repository:ng,bugs:tg,homepage:ag,keywords:sg,dependencies:og,devDependencies:rg},lg=[{label:"Default",value:"default"},{label:"Coy",value:"coy"},{label:"Dark",value:"dark"},{label:"Funky",value:"funky"},{label:"Night Owl (Prism Themes Repo)",value:"themes-night-owl"},{label:"Okaidia",value:"okaidia"},{label:"Solarizedlight",value:"solarizedlight"},{label:"Tomorrow",value:"tomorrow"},{label:"Twilight",value:"twilight"}],ig=[{label:"Default",value:"default"},{label:"A11y Dark",value:"a11y-dark"},{label:"A11y Light",value:"a11y-light"},{label:"Agate",value:"agate"},{label:"An Old Hope",value:"an-old-hope"},{label:"Android Studio",value:"androidstudio"},{label:"Arduino Light",value:"arduino-light"},{label:"Arta",value:"arta"},{label:"Ascetic",value:"ascetic"},{label:"Atom One Dark Reasonable",value:"atom-one-dark-reasonable"},{label:"Atom One Dark",value:"atom-one-dark"},{label:"Atom One Light",value:"atom-one-light"},{label:"Brown Paper",value:"brown-paper"},{label:"Base16 One Dark",value:"base16-onedark"},{label:"CodePen Embed",value:"codepen-embed"},{label:"Color Brewer",value:"color-brewer"},{label:"Dark",value:"dark"},{label:"DeviBeans",value:"devibeans"},{label:"Docco",value:"docco"},{label:"Far",value:"far"},{label:"Felipec",value:"felipec"},{label:"Foundation",value:"foundation"},{label:"Github Dark Dimmed",value:"github-dark-dimmed"},{label:"Github Dark",value:"github-dark"},{label:"Github",value:"github"},{label:"GML",value:"gml"},{label:"Google Code",value:"googlecode"},{label:"Gradient Dark",value:"gradient-dark"},{label:"Gradient Light",value:"gradient-light"},{label:"Grayscale",value:"grayscale"},{label:"Hybrid",value:"hybrid"},{label:"Idea",value:"idea"},{label:"IntelliJ Light",value:"intellij-light"},{label:"IR Black",value:"ir-black"},{label:"ISBL Editor Dark",value:"isbl-editor-dark"},{label:"ISBL Editor Light",value:"isbl-editor-light"},{label:"Kimbie Dark",value:"kimbie-dark"},{label:"Kimbie Light",value:"kimbie-light"},{label:"Lightfair",value:"lightfair"},{label:"Lioshi",value:"lioshi"},{label:"Magula",value:"magula"},{label:"Mono Blue",value:"mono-blue"},{label:"Monokai Sublime",value:"monokai-sublime"},{label:"Monokai",value:"monokai"},{label:"Night Owl",value:"night-owl"},{label:"NNFX Dark",value:"nnfx-dark"},{label:"NNFX- Light",value:"nnfx-light"},{label:"Nord",value:"nord"},{label:"Obsidian",value:"obsidian"},{label:"Panda Syntax Dark",value:"panda-syntax-dark"},{label:"Panda Syntax Light",value:"panda-syntax-light"},{label:"Paraiso Dark",value:"paraiso-dark"},{label:"Paraiso Light",value:"paraiso-light"},{label:"Pojoaque",value:"pojoaque"},{label:"PureBasic",value:"purebasic"},{label:"Qt Creator Dark",value:"qtcreator-dark"},{label:"Qt Creator Light",value:"qtcreator-light"},{label:"Rainbow",value:"rainbow"},{label:"RouterOS",value:"routeros"},{label:"School Book",value:"school-book"},{label:"Shades of Purple",value:"shades-of-purple"},{label:"Srcery",value:"srcery"},{label:"Stack Overflow Dark",value:"stackoverflow-dark"},{label:"Stack Overflow Light",value:"stackoverflow-light"},{label:"Sunburst",value:"sunburst"},{label:"Tokyo Night Dark",value:"tokyo-night-dark"},{label:"Tokyo Night Light",value:"tokyo-night-light"},{label:"Tomorrow Night Blue",value:"tomorrow-night-blue"},{label:"Tomorrow Night Bright",value:"tomorrow-night-bright"},{label:"VS",value:"vs"},{label:"VS 2015",value:"vs2015"},{label:"Xcode",value:"xcode"},{label:"xt256",value:"xt256"}],si=uo.dependencies,oi=uo.name,fr=si.prismjs.replace("^",""),dr=si["highlight.js"].replace("^",""),oa=`https://github.com/webdevnerdstuff/${oi}`,cg={changeLog:`${oa}/blob/main/CHANGELOG.md`,contribute:`${oa}/tree/main/src/plugin/styles`,github:oa,githubProfile:"https://github.com/webdevnerdstuff",license:`${oa}/blob/main/LICENSE.md`,neonBunnyTheme:"https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny",npm:`https://www.npmjs.com/package/${oi}`,uaParser:"https://www.npmjs.com/package/ua-parser-js",vueJs:"https://vuejs.org/"},ug={cdn:`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${dr}/build/styles/`,homepage:"https://highlightjs.org/",themes:`https://github.com/highlightjs/highlight.js/tree/${dr}/src/styles`},hg={cdn:`https://cdn.jsdelivr.net/gh/PrismJS/prism@${fr}/themes/`,homepage:"https://prismjs.com/",prismThemes:`https://github.com/PrismJS/prism/tree/v${fr}/themes`,themes:"https://github.com/PrismJS/prism-themes"},gg={prism:{label:"PrismJS",id:"prism"},highlightjs:{label:"Highlight.js",id:"highlightjs"}},pg=[{label:"Neon Bunny",value:"neon-bunny"},{label:"Neon Bunny - Carrot",value:"neon-bunny-carrot"}],ho=Uh("core",{actions:{setLocalStorage(e){const n=localStorage.getItem(this.storageName),t=e??n;return localStorage.setItem(this.storageName,t),t},setTheme(e,n){let t=e;return t==="toggle"&&(t=n!=="dark"?"dark":"light"),document.documentElement.setAttribute("data-bs-theme",t),localStorage.setItem("theme",t),t}},getters:{getLocalStorage:e=>()=>localStorage.getItem(e.storageName)},state:()=>({highlightJsLinks:ug,highlightThemes:ig,libraries:gg,links:cg,neonBunnyThemes:pg,package:uo,prismLinks:hg,prismThemes:lg,storageName:"vue3-code-block-library"})}),fg="/vue3-code-block/assets/vue-5532db34.svg",dg={class:"row mb-5"},bg=u("h2",null,"Change Log",-1),mg=[bg],yg={class:"col-12"},vg=["href"],jg={__name:"ChangeLogSection",setup(e){const n=se("styleData"),t=se("links");return(a,s)=>(X(),te("div",dg,[u("div",{class:Ce(p(n).h2ColClass)},mg,2),u("div",yg,[u("a",{href:p(t).changeLog,target:"_blank"},"CHANGELOG.md",8,vg)])]))}};const go=(e,n)=>{const t=e.__vccOpts||e;for(const[a,s]of n)t[a]=s;return t},po=e=>(Al("data-v-465828f6"),e=e(),Ol(),e),_g={class:"row mb-5"},wg=po(()=>u("h2",null,"CSS Variables",-1)),kg=[wg],xg=po(()=>u("div",{class:"col-12 mb-3"},[u("p",null,[ce(" You can find all CSS variables defined in the "),u("code",null,"src/plugin/styles/cssVariables.css"),ce(" file. Colors are using "),u("code",null,"hsl"),ce(" values. ")])],-1)),Eg={class:"col-12 mb-3"},Cg={class:"table-responsive"},Sg={class:"table"},Tg=po(()=>u("thead",null,[u("tr",null,[u("th",{width:"auto"},"Name"),u("th",null,"Value")])],-1)),Ag={key:0,class:"text-success-emphasis bg-success-subtle"},Og={colspan:"2"},$g={key:0,class:"text-dark-emphasis bg-dark-subtle",colspan:"2",valign:"top"},Ng={class:"td-nowrap",valign:"top"},Mg={key:0},Ig={key:1,valign:"top"},Rg={key:2,valign:"top"},Pg={__name:"CssVariablesSection",setup(e){const n=se("styleData"),t=[{name:"Neon Bunny Theme Colors",header:!0,items:[{name:"neon-bunny",subHeader:!0},{name:"--v-cb-tab-neon-bunny",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-icon",hsl:"207 100% 52%"},{name:"--v-cb-tab-neon-bunny-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-icon-failed",hsl:"3 100% 58%"},{name:"neon-bunny-carrot",subHeader:!0},{name:"--v-cb-tab-neon-bunny-carrot",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-carrot-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-carrot-icon",hsl:"292 100% 50%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-failed",hsl:"3 100% 58%"}]}];return(a,s)=>(X(),te("div",_g,[u("div",{class:Ce(p(n).h2ColClass)},kg,2),xg,u("div",Eg,[u("div",Cg,[u("table",Sg,[Tg,(X(),te(Oe,null,Zn(t,o=>u("tbody",{key:o.name},[o.header?(X(),te("tr",Ag,[u("th",Og,ke(o.name),1)])):en("",!0),(X(!0),te(Oe,null,Zn(o.items,r=>(X(),te("tr",{key:r},[r.subHeader?(X(),te("td",$g,[u("strong",null,[u("em",null,ke(r.name),1)])])):(X(),te(Oe,{key:1},[u("td",Ng,ke(r.name),1),r.hsl?(X(),te("td",Mg,[r.hsl?(X(),te("span",{key:0,class:"color-swatch",style:An(`background-color: hsl(${r.hsl});`)},null,4)):en("",!0),ce(" "+ke(r.hsl),1)])):r.code?(X(),te("td",Ig,[u("code",null,ke(r.code),1)])):(X(),te("td",Rg,ke(r.value),1))],64))]))),128))])),64))])])])]))}},Lg=go(Pg,[["__scopeId","data-v-465828f6"]]),Bg={class:"row mb-5"},Fg=u("h2",null,"Dependencies",-1),Dg=[Fg],zg={class:"col-12"},Ug=["href"],Hg=u("br",null,null,-1),qg=["href"],Wg=u("br",null,null,-1),Vg=["href"],Gg=u("br",null,null,-1),Kg=["href"],Yg={__name:"DependenciesSection",setup(e){const n=se("highlightJsLinks"),t=se("links"),a=se("prismLinks"),s=se("styleData");return(o,r)=>(X(),te("div",Bg,[u("div",{class:Ce(p(s).h2ColClass)},Dg,2),u("div",zg,[u("a",{href:p(a).homepage,target:"_blank"},"PrismJS",8,Ug),Hg,u("a",{href:p(n).homepage,target:"_blank"},"Highlight.js",8,qg),Wg,u("a",{href:p(t).vueJs,target:"_blank"},"Vue 3",8,Vg),Gg,u("a",{href:p(t).uaParser,target:"_blank"},"UAParser.js",8,Kg)])]))}};var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ri={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,r={},l={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function b(y){return y instanceof i?new i(y.type,b(y.content),y.alias):Array.isArray(y)?y.map(b):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(y,_){_=_||{};var E,I;switch(l.util.type(y)){case"Object":if(I=l.util.objId(y),_[I])return _[I];E={},_[I]=E;for(var F in y)y.hasOwnProperty(F)&&(E[F]=b(y[F],_));return E;case"Array":return I=l.util.objId(y),_[I]?_[I]:(E=[],_[I]=E,y.forEach(function(U,R){E[R]=b(U,_)}),E);default:return y}},getLanguage:function(b){for(;b;){var y=s.exec(b.className);if(y)return y[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,y){b.className=b.className.replace(RegExp(s,"gi"),""),b.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(b){var y=document.getElementsByTagName("script");for(var _ in y)if(y[_].src==b)return y[_]}return null}},isActive:function(b,y,_){for(var E="no-"+y;b;){var I=b.classList;if(I.contains(y))return!0;if(I.contains(E))return!1;b=b.parentElement}return!!_}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(b,y){var _=l.util.clone(l.languages[b]);for(var E in y)_[E]=y[E];return _},insertBefore:function(b,y,_,E){E=E||l.languages;var I=E[b],F={};for(var U in I)if(I.hasOwnProperty(U)){if(U==y)for(var R in _)_.hasOwnProperty(R)&&(F[R]=_[R]);_.hasOwnProperty(U)||(F[U]=I[U])}var ee=E[b];return E[b]=F,l.languages.DFS(l.languages,function(ue,ye){ye===ee&&ue!=b&&(this[ue]=F)}),F},DFS:function b(y,_,E,I){I=I||{};var F=l.util.objId;for(var U in y)if(y.hasOwnProperty(U)){_.call(y,U,y[U],E||U);var R=y[U],ee=l.util.type(R);ee==="Object"&&!I[F(R)]?(I[F(R)]=!0,b(R,_,null,I)):ee==="Array"&&!I[F(R)]&&(I[F(R)]=!0,b(R,_,U,I))}}},plugins:{},highlightAll:function(b,y){l.highlightAllUnder(document,b,y)},highlightAllUnder:function(b,y,_){var E={callback:_,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),l.hooks.run("before-all-elements-highlight",E);for(var I=0,F;F=E.elements[I++];)l.highlightElement(F,y===!0,E.callback)},highlightElement:function(b,y,_){var E=l.util.getLanguage(b),I=l.languages[E];l.util.setLanguage(b,E);var F=b.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(F,E);var U=b.textContent,R={element:b,language:E,grammar:I,code:U};function ee(ye){R.highlightedCode=ye,l.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,l.hooks.run("after-highlight",R),l.hooks.run("complete",R),_&&_.call(R.element)}if(l.hooks.run("before-sanity-check",R),F=R.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!R.code){l.hooks.run("complete",R),_&&_.call(R.element);return}if(l.hooks.run("before-highlight",R),!R.grammar){ee(l.util.encode(R.code));return}if(y&&a.Worker){var ue=new Worker(l.filename);ue.onmessage=function(ye){ee(ye.data)},ue.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else ee(l.highlight(R.code,R.grammar,R.language))},highlight:function(b,y,_){var E={code:b,grammar:y,language:_};if(l.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=l.tokenize(E.code,E.grammar),l.hooks.run("after-tokenize",E),i.stringify(l.util.encode(E.tokens),E.language)},tokenize:function(b,y){var _=y.rest;if(_){for(var E in _)y[E]=_[E];delete y.rest}var I=new d;return g(I,I.head,b),h(b,I,y,I.head,0),w(I)},hooks:{all:{},add:function(b,y){var _=l.hooks.all;_[b]=_[b]||[],_[b].push(y)},run:function(b,y){var _=l.hooks.all[b];if(!(!_||!_.length))for(var E=0,I;I=_[E++];)I(y)}},Token:i};a.Prism=l;function i(b,y,_,E){this.type=b,this.content=y,this.alias=_,this.length=(E||"").length|0}i.stringify=function b(y,_){if(typeof y=="string")return y;if(Array.isArray(y)){var E="";return y.forEach(function(ee){E+=b(ee,_)}),E}var I={type:y.type,content:b(y.content,_),tag:"span",classes:["token",y.type],attributes:{},language:_},F=y.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(I.classes,F):I.classes.push(F)),l.hooks.run("wrap",I);var U="";for(var R in I.attributes)U+=" "+R+'="'+(I.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+U+">"+I.content+"</"+I.tag+">"};function c(b,y,_,E){b.lastIndex=y;var I=b.exec(_);if(I&&E&&I[1]){var F=I[1].length;I.index+=F,I[0]=I[0].slice(F)}return I}function h(b,y,_,E,I,F){for(var U in _)if(!(!_.hasOwnProperty(U)||!_[U])){var R=_[U];R=Array.isArray(R)?R:[R];for(var ee=0;ee<R.length;++ee){if(F&&F.cause==U+","+ee)return;var ue=R[ee],ye=ue.inside,ve=!!ue.lookbehind,me=!!ue.greedy,_e=ue.alias;if(me&&!ue.pattern.global){var he=ue.pattern.toString().match(/[imsuy]*$/)[0];ue.pattern=RegExp(ue.pattern.source,he+"g")}for(var A=ue.pattern||ue,N=E.next,Y=I;N!==y.tail&&!(F&&Y>=F.reach);Y+=N.value.length,N=N.next){var ie=N.value;if(y.length>b.length)return;if(!(ie instanceof i)){var D=1,ae;if(me){if(ae=c(A,Y,b,ve),!ae||ae.index>=b.length)break;var fe=ae.index,Ee=ae.index+ae[0].length,pe=Y;for(pe+=N.value.length;fe>=pe;)N=N.next,pe+=N.value.length;if(pe-=N.value.length,Y=pe,N.value instanceof i)continue;for(var je=N;je!==y.tail&&(pe<Ee||typeof je.value=="string");je=je.next)D++,pe+=je.value.length;D--,ie=b.slice(Y,pe),ae.index-=Y}else if(ae=c(A,0,ie,ve),!ae)continue;var fe=ae.index,Ie=ae[0],qe=ie.slice(0,fe),$e=ie.slice(fe+Ie.length),Be=Y+ie.length;F&&Be>F.reach&&(F.reach=Be);var Ge=N.prev;qe&&(Ge=g(y,Ge,qe),Y+=qe.length),v(y,Ge,D);var f=new i(U,ye?l.tokenize(Ie,ye):Ie,_e,Ie);if(N=g(y,Ge,f),$e&&g(y,N,$e),D>1){var j={cause:U+","+ee,reach:Be};h(b,y,_,N.prev,Y,j),F&&j.reach>F.reach&&(F.reach=j.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},y={value:null,prev:b,next:null};b.next=y,this.head=b,this.tail=y,this.length=0}function g(b,y,_){var E=y.next,I={value:_,prev:y,next:E};return y.next=I,E.prev=I,b.length++,I}function v(b,y,_){for(var E=y.next,I=0;I<_&&E!==b.tail;I++)E=E.next;y.next=E,E.prev=y,b.length-=I}function w(b){for(var y=[],_=b.head.next;_!==b.tail;)y.push(_.value),_=_.next;return y}if(!a.document)return a.addEventListener&&(l.disableWorkerMessageHandler||a.addEventListener("message",function(b){var y=JSON.parse(b.data),_=y.language,E=y.code,I=y.immediateClose;a.postMessage(l.highlight(E,l.languages[_],_)),I&&a.close()},!1)),l;var m=l.util.currentScript();m&&(l.filename=m.src,m.hasAttribute("data-manual")&&(l.manual=!0));function k(){l.manual||l.highlightAll()}if(!l.manual){var S=document.readyState;S==="loading"||S==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return l}(n);e.exports&&(e.exports=t),typeof $s<"u"&&($s.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(s,o){var r={};r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};l["language-"+o]={pattern:/[\s\S]+/,inside:t.languages[o]};var i={};i[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,s){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:t.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",s=function(m,k){return"✖ Error "+m+" while fetching file: "+k},o="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",i="loading",c="loaded",h="failed",d="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+i+'"])';function g(m,k,S){var b=new XMLHttpRequest;b.open("GET",m,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?k(b.responseText):b.status>=400?S(s(b.status,b.statusText)):S(o))},b.send(null)}function v(m){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(k){var S=Number(k[1]),b=k[2],y=k[3];return b?y?[S,Number(y)]:[S,void 0]:[S,S]}}t.hooks.add("before-highlightall",function(m){m.selector+=", "+d}),t.hooks.add("before-sanity-check",function(m){var k=m.element;if(k.matches(d)){m.code="",k.setAttribute(l,i);var S=k.appendChild(document.createElement("CODE"));S.textContent=a;var b=k.getAttribute("data-src"),y=m.language;if(y==="none"){var _=(/\.(\w+)$/.exec(b)||[,"none"])[1];y=r[_]||_}t.util.setLanguage(S,y),t.util.setLanguage(k,y);var E=t.plugins.autoloader;E&&E.loadLanguages(y),g(b,function(I){k.setAttribute(l,c);var F=v(k.getAttribute("data-range"));if(F){var U=I.split(/\r\n?|\n/g),R=F[0],ee=F[1]==null?U.length:F[1];R<0&&(R+=U.length),R=Math.max(0,Math.min(R-1,U.length)),ee<0&&(ee+=U.length),ee=Math.max(0,Math.min(ee,U.length)),I=U.slice(R,ee).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(R+1))}S.textContent=I,t.highlightElement(S)},function(I){k.setAttribute(l,h),S.textContent=I})}}),t.plugins.fileHighlight={highlight:function(k){for(var S=(k||document).querySelectorAll(d),b=0,y;y=S[b++];)t.highlightElement(y)}};var w=!1;t.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ri);var li=ri.exports;const Jg=fo(li),Zg=rc({__proto__:null,default:Jg},[li]);function ii(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&ii(t)}),e}class br{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ci(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function On(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const s in a)t[s]=a[s]}),t}const Xg="</span>",mr=e=>!!e.scope,Qg=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,s)=>`${a}${"_".repeat(s+1)}`)].join(" ")}return`${n}${e}`};class ep{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=ci(n)}openNode(n){if(!mr(n))return;const t=Qg(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){mr(n)&&(this.buffer+=Xg)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const yr=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class bo{constructor(){this.rootNode=yr(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=yr({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{bo._collapse(t)}))}}class np extends bo{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new ep(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ut(e){return e?typeof e=="string"?e:e.source:null}function ui(e){return et("(?=",e,")")}function tp(e){return et("(?:",e,")*")}function ap(e){return et("(?:",e,")?")}function et(...e){return e.map(t=>Ut(t)).join("")}function sp(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function mo(...e){return"("+(sp(e).capture?"":"?:")+e.map(a=>Ut(a)).join("|")+")"}function hi(e){return new RegExp(e.toString()+"|").exec("").length-1}function op(e,n){const t=e&&e.exec(n);return t&&t.index===0}const rp=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function yo(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const s=t;let o=Ut(a),r="";for(;o.length>0;){const l=rp.exec(o);if(!l){r+=o;break}r+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?r+="\\"+String(Number(l[1])+s):(r+=l[0],l[0]==="("&&t++)}return r}).map(a=>`(${a})`).join(n)}const lp=/\b\B/,gi="[a-zA-Z]\\w*",vo="[a-zA-Z_]\\w*",pi="\\b\\d+(\\.\\d+)?",fi="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",di="\\b(0b[01]+)",ip="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",cp=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=et(n,/.*\b/,e.binary,/\b.*/)),On({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},Ht={begin:"\\\\[\\s\\S]",relevance:0},up={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ht]},hp={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ht]},gp={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Xa=function(e,n,t={}){const a=On({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=mo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:et(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},pp=Xa("//","$"),fp=Xa("/\\*","\\*/"),dp=Xa("#","$"),bp={scope:"number",begin:pi,relevance:0},mp={scope:"number",begin:fi,relevance:0},yp={scope:"number",begin:di,relevance:0},vp={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Ht,{begin:/\[/,end:/\]/,relevance:0,contains:[Ht]}]}]},jp={scope:"title",begin:gi,relevance:0},_p={scope:"title",begin:vo,relevance:0},wp={begin:"\\.\\s*"+vo,relevance:0},kp=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ra=Object.freeze({__proto__:null,MATCH_NOTHING_RE:lp,IDENT_RE:gi,UNDERSCORE_IDENT_RE:vo,NUMBER_RE:pi,C_NUMBER_RE:fi,BINARY_NUMBER_RE:di,RE_STARTERS_RE:ip,SHEBANG:cp,BACKSLASH_ESCAPE:Ht,APOS_STRING_MODE:up,QUOTE_STRING_MODE:hp,PHRASAL_WORDS_MODE:gp,COMMENT:Xa,C_LINE_COMMENT_MODE:pp,C_BLOCK_COMMENT_MODE:fp,HASH_COMMENT_MODE:dp,NUMBER_MODE:bp,C_NUMBER_MODE:mp,BINARY_NUMBER_MODE:yp,REGEXP_MODE:vp,TITLE_MODE:jp,UNDERSCORE_TITLE_MODE:_p,METHOD_GUARD:wp,END_SAME_AS_BEGIN:kp});function xp(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Ep(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Cp(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=xp,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Sp(e,n){Array.isArray(e.illegal)&&(e.illegal=mo(...e.illegal))}function Tp(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Ap(e,n){e.relevance===void 0&&(e.relevance=1)}const Op=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=et(t.beforeMatch,ui(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},$p=["of","and","for","in","not","or","if","then","parent","list","value"],Np="keyword";function bi(e,n,t=Np){const a=Object.create(null);return typeof e=="string"?s(t,e.split(" ")):Array.isArray(e)?s(t,e):Object.keys(e).forEach(function(o){Object.assign(a,bi(e[o],n,o))}),a;function s(o,r){n&&(r=r.map(l=>l.toLowerCase())),r.forEach(function(l){const i=l.split("|");a[i[0]]=[o,Mp(i[0],i[1])]})}}function Mp(e,n){return n?Number(n):Ip(e)?0:1}function Ip(e){return $p.includes(e.toLowerCase())}const vr={},Jn=e=>{console.error(e)},jr=(e,...n)=>{console.log(`WARN: ${e}`,...n)},st=(e,n)=>{vr[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),vr[`${e}/${n}`]=!0)},Aa=new Error;function mi(e,n,{key:t}){let a=0;const s=e[t],o={},r={};for(let l=1;l<=n.length;l++)r[l+a]=s[l],o[l+a]=!0,a+=hi(n[l-1]);e[t]=r,e[t]._emit=o,e[t]._multi=!0}function Rp(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Jn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Aa;if(typeof e.beginScope!="object"||e.beginScope===null)throw Jn("beginScope must be object"),Aa;mi(e,e.begin,{key:"beginScope"}),e.begin=yo(e.begin,{joinWith:""})}}function Pp(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Jn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Aa;if(typeof e.endScope!="object"||e.endScope===null)throw Jn("endScope must be object"),Aa;mi(e,e.end,{key:"endScope"}),e.end=yo(e.end,{joinWith:""})}}function Lp(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Bp(e){Lp(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Rp(e),Pp(e)}function Fp(e){function n(r,l){return new RegExp(Ut(r),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,i){i.position=this.position++,this.matchIndexes[this.matchAt]=i,this.regexes.push([i,l]),this.matchAt+=hi(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(i=>i[1]);this.matcherRe=n(yo(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const i=this.matcherRe.exec(l);if(!i)return null;const c=i.findIndex((d,g)=>g>0&&d!==void 0),h=this.matchIndexes[c];return i.splice(0,c),Object.assign(i,h)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const i=new t;return this.rules.slice(l).forEach(([c,h])=>i.addRule(c,h)),i.compile(),this.multiRegexes[l]=i,i}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,i){this.rules.push([l,i]),i.type==="begin"&&this.count++}exec(l){const i=this.getMatcher(this.regexIndex);i.lastIndex=this.lastIndex;let c=i.exec(l);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,c=h.exec(l)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function s(r){const l=new a;return r.contains.forEach(i=>l.addRule(i.begin,{rule:i,type:"begin"})),r.terminatorEnd&&l.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&l.addRule(r.illegal,{type:"illegal"}),l}function o(r,l){const i=r;if(r.isCompiled)return i;[Ep,Tp,Bp,Op].forEach(h=>h(r,l)),e.compilerExtensions.forEach(h=>h(r,l)),r.__beforeBegin=null,[Cp,Sp,Ap].forEach(h=>h(r,l)),r.isCompiled=!0;let c=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=bi(r.keywords,e.case_insensitive)),i.keywordPatternRe=n(c,!0),l&&(r.begin||(r.begin=/\B|\b/),i.beginRe=n(i.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(i.endRe=n(i.end)),i.terminatorEnd=Ut(i.end)||"",r.endsWithParent&&l.terminatorEnd&&(i.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(i.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(h){return Dp(h==="self"?r:h)})),r.contains.forEach(function(h){o(h,i)}),r.starts&&o(r.starts,l),i.matcher=s(i),i}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=On(e.classNameAliases||{}),o(e)}function yi(e){return e?e.endsWithParent||yi(e.starts):!1}function Dp(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return On(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:yi(e)?On(e,{starts:e.starts?On(e.starts):null}):Object.isFrozen(e)?On(e):e}var zp="11.8.0";class Up extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const cs=ci,_r=On,wr=Symbol("nomatch"),Hp=7,vi=function(e){const n=Object.create(null),t=Object.create(null),a=[];let s=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:np};function i(A){return l.noHighlightRe.test(A)}function c(A){let N=A.className+" ";N+=A.parentNode?A.parentNode.className:"";const Y=l.languageDetectRe.exec(N);if(Y){const ie=R(Y[1]);return ie||(jr(o.replace("{}",Y[1])),jr("Falling back to no-highlight mode for this block.",A)),ie?Y[1]:"no-highlight"}return N.split(/\s+/).find(ie=>i(ie)||R(ie))}function h(A,N,Y){let ie="",D="";typeof N=="object"?(ie=A,Y=N.ignoreIllegals,D=N.language):(st("10.7.0","highlight(lang, code, ...args) has been deprecated."),st("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),D=A,ie=N),Y===void 0&&(Y=!0);const ae={code:ie,language:D};_e("before:highlight",ae);const Ee=ae.result?ae.result:d(ae.language,ae.code,Y);return Ee.code=ae.code,_e("after:highlight",Ee),Ee}function d(A,N,Y,ie){const D=Object.create(null);function ae(x,M){return x.keywords[M]}function Ee(){if(!T.keywords){$.addText(L);return}let x=0;T.keywordPatternRe.lastIndex=0;let M=T.keywordPatternRe.exec(L),K="";for(;M;){K+=L.substring(x,M.index);const re=O.case_insensitive?M[0].toLowerCase():M[0],oe=ae(T,re);if(oe){const[ne,Fe]=oe;if($.addText(K),K="",D[re]=(D[re]||0)+1,D[re]<=Hp&&(V+=Fe),ne.startsWith("_"))K+=M[0];else{const kn=O.classNameAliases[ne]||ne;fe(M[0],kn)}}else K+=M[0];x=T.keywordPatternRe.lastIndex,M=T.keywordPatternRe.exec(L)}K+=L.substring(x),$.addText(K)}function pe(){if(L==="")return;let x=null;if(typeof T.subLanguage=="string"){if(!n[T.subLanguage]){$.addText(L);return}x=d(T.subLanguage,L,!0,H[T.subLanguage]),H[T.subLanguage]=x._top}else x=v(L,T.subLanguage.length?T.subLanguage:null);T.relevance>0&&(V+=x.relevance),$.__addSublanguage(x._emitter,x.language)}function je(){T.subLanguage!=null?pe():Ee(),L=""}function fe(x,M){x!==""&&($.startScope(M),$.addText(x),$.endScope())}function Ie(x,M){let K=1;const re=M.length-1;for(;K<=re;){if(!x._emit[K]){K++;continue}const oe=O.classNameAliases[x[K]]||x[K],ne=M[K];oe?fe(ne,oe):(L=ne,Ee(),L=""),K++}}function qe(x,M){return x.scope&&typeof x.scope=="string"&&$.openNode(O.classNameAliases[x.scope]||x.scope),x.beginScope&&(x.beginScope._wrap?(fe(L,O.classNameAliases[x.beginScope._wrap]||x.beginScope._wrap),L=""):x.beginScope._multi&&(Ie(x.beginScope,M),L="")),T=Object.create(x,{parent:{value:T}}),T}function $e(x,M,K){let re=op(x.endRe,K);if(re){if(x["on:end"]){const oe=new br(x);x["on:end"](M,oe),oe.isMatchIgnored&&(re=!1)}if(re){for(;x.endsParent&&x.parent;)x=x.parent;return x}}if(x.endsWithParent)return $e(x.parent,M,K)}function Be(x){return T.matcher.regexIndex===0?(L+=x[0],1):(G=!0,0)}function Ge(x){const M=x[0],K=x.rule,re=new br(K),oe=[K.__beforeBegin,K["on:begin"]];for(const ne of oe)if(ne&&(ne(x,re),re.isMatchIgnored))return Be(M);return K.skip?L+=M:(K.excludeBegin&&(L+=M),je(),!K.returnBegin&&!K.excludeBegin&&(L=M)),qe(K,x),K.returnBegin?0:M.length}function f(x){const M=x[0],K=N.substring(x.index),re=$e(T,x,K);if(!re)return wr;const oe=T;T.endScope&&T.endScope._wrap?(je(),fe(M,T.endScope._wrap)):T.endScope&&T.endScope._multi?(je(),Ie(T.endScope,x)):oe.skip?L+=M:(oe.returnEnd||oe.excludeEnd||(L+=M),je(),oe.excludeEnd&&(L=M));do T.scope&&$.closeNode(),!T.skip&&!T.subLanguage&&(V+=T.relevance),T=T.parent;while(T!==re.parent);return re.starts&&qe(re.starts,x),oe.returnEnd?0:M.length}function j(){const x=[];for(let M=T;M!==O;M=M.parent)M.scope&&x.unshift(M.scope);x.forEach(M=>$.openNode(M))}let C={};function P(x,M){const K=M&&M[0];if(L+=x,K==null)return je(),0;if(C.type==="begin"&&M.type==="end"&&C.index===M.index&&K===""){if(L+=N.slice(M.index,M.index+1),!s){const re=new Error(`0 width match regex (${A})`);throw re.languageName=A,re.badRule=C.rule,re}return 1}if(C=M,M.type==="begin")return Ge(M);if(M.type==="illegal"&&!Y){const re=new Error('Illegal lexeme "'+K+'" for mode "'+(T.scope||"<unnamed>")+'"');throw re.mode=T,re}else if(M.type==="end"){const re=f(M);if(re!==wr)return re}if(M.type==="illegal"&&K==="")return 1;if(z>1e5&&z>M.index*3)throw new Error("potential infinite loop, way more iterations than matches");return L+=K,K.length}const O=R(A);if(!O)throw Jn(o.replace("{}",A)),new Error('Unknown language: "'+A+'"');const B=Fp(O);let q="",T=ie||B;const H={},$=new l.__emitter(l);j();let L="",V=0,Z=0,z=0,G=!1;try{if(O.__emitTokens)O.__emitTokens(N,$);else{for(T.matcher.considerAll();;){z++,G?G=!1:T.matcher.considerAll(),T.matcher.lastIndex=Z;const x=T.matcher.exec(N);if(!x)break;const M=N.substring(Z,x.index),K=P(M,x);Z=x.index+K}P(N.substring(Z))}return $.finalize(),q=$.toHTML(),{language:A,value:q,relevance:V,illegal:!1,_emitter:$,_top:T}}catch(x){if(x.message&&x.message.includes("Illegal"))return{language:A,value:cs(N),illegal:!0,relevance:0,_illegalBy:{message:x.message,index:Z,context:N.slice(Z-100,Z+100),mode:x.mode,resultSoFar:q},_emitter:$};if(s)return{language:A,value:cs(N),illegal:!1,relevance:0,errorRaised:x,_emitter:$,_top:T};throw x}}function g(A){const N={value:cs(A),illegal:!1,relevance:0,_top:r,_emitter:new l.__emitter(l)};return N._emitter.addText(A),N}function v(A,N){N=N||l.languages||Object.keys(n);const Y=g(A),ie=N.filter(R).filter(ue).map(je=>d(je,A,!1));ie.unshift(Y);const D=ie.sort((je,fe)=>{if(je.relevance!==fe.relevance)return fe.relevance-je.relevance;if(je.language&&fe.language){if(R(je.language).supersetOf===fe.language)return 1;if(R(fe.language).supersetOf===je.language)return-1}return 0}),[ae,Ee]=D,pe=ae;return pe.secondBest=Ee,pe}function w(A,N,Y){const ie=N&&t[N]||Y;A.classList.add("hljs"),A.classList.add(`language-${ie}`)}function m(A){let N=null;const Y=c(A);if(i(Y))return;if(_e("before:highlightElement",{el:A,language:Y}),A.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(A)),l.throwUnescapedHTML))throw new Up("One of your code blocks includes unescaped HTML.",A.innerHTML);N=A;const ie=N.textContent,D=Y?h(ie,{language:Y,ignoreIllegals:!0}):v(ie);A.innerHTML=D.value,w(A,Y,D.language),A.result={language:D.language,re:D.relevance,relevance:D.relevance},D.secondBest&&(A.secondBest={language:D.secondBest.language,relevance:D.secondBest.relevance}),_e("after:highlightElement",{el:A,result:D,text:ie})}function k(A){l=_r(l,A)}const S=()=>{_(),st("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function b(){_(),st("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let y=!1;function _(){if(document.readyState==="loading"){y=!0;return}document.querySelectorAll(l.cssSelector).forEach(m)}function E(){y&&_()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",E,!1);function I(A,N){let Y=null;try{Y=N(e)}catch(ie){if(Jn("Language definition for '{}' could not be registered.".replace("{}",A)),s)Jn(ie);else throw ie;Y=r}Y.name||(Y.name=A),n[A]=Y,Y.rawDefinition=N.bind(null,e),Y.aliases&&ee(Y.aliases,{languageName:A})}function F(A){delete n[A];for(const N of Object.keys(t))t[N]===A&&delete t[N]}function U(){return Object.keys(n)}function R(A){return A=(A||"").toLowerCase(),n[A]||n[t[A]]}function ee(A,{languageName:N}){typeof A=="string"&&(A=[A]),A.forEach(Y=>{t[Y.toLowerCase()]=N})}function ue(A){const N=R(A);return N&&!N.disableAutodetect}function ye(A){A["before:highlightBlock"]&&!A["before:highlightElement"]&&(A["before:highlightElement"]=N=>{A["before:highlightBlock"](Object.assign({block:N.el},N))}),A["after:highlightBlock"]&&!A["after:highlightElement"]&&(A["after:highlightElement"]=N=>{A["after:highlightBlock"](Object.assign({block:N.el},N))})}function ve(A){ye(A),a.push(A)}function me(A){const N=a.indexOf(A);N!==-1&&a.splice(N,1)}function _e(A,N){const Y=A;a.forEach(function(ie){ie[Y]&&ie[Y](N)})}function he(A){return st("10.7.0","highlightBlock will be removed entirely in v12.0"),st("10.7.0","Please use highlightElement now."),m(A)}Object.assign(e,{highlight:h,highlightAuto:v,highlightAll:_,highlightElement:m,highlightBlock:he,configure:k,initHighlighting:S,initHighlightingOnLoad:b,registerLanguage:I,unregisterLanguage:F,listLanguages:U,getLanguage:R,registerAliases:ee,autoDetection:ue,inherit:_r,addPlugin:ve,removePlugin:me}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString=zp,e.regex={concat:et,lookahead:ui,either:mo,optional:ap,anyNumberOfTimes:tp};for(const A in ra)typeof ra[A]=="object"&&ii(ra[A]);return Object.assign(e,ra),e},dt=vi({});dt.newInstance=()=>vi({});var qp=dt;dt.HighlightJS=dt;dt.default=dt;const us=fo(qp);function Wp(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],s={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Vp(e){const n=e.regex,t=/(?![A-Za-z0-9])(?![$])/,a=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,t),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,t),o={scope:"variable",match:"\\$+"+a},r={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null}),c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(l)}),h={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(l),"on:begin":(ve,me)=>{me.data._beginMatch=ve[1]||ve[2]},"on:end":(ve,me)=>{me.data._beginMatch!==ve[1]&&me.ignoreMatch()}},d=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),g=`[ 	
]`,v={scope:"string",variants:[c,i,h,d]},w={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},m=["false","null","true"],k=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],S=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],y={keyword:k,literal:(ve=>{const me=[];return ve.forEach(_e=>{me.push(_e),_e.toLowerCase()===_e?me.push(_e.toUpperCase()):me.push(_e.toLowerCase())}),me})(m),built_in:S},_=ve=>ve.map(me=>me.replace(/\|\d+$/,"")),E={variants:[{match:[/new/,n.concat(g,"+"),n.concat("(?!",_(S).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},I=n.concat(a,"\\b(?!\\()"),F={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),I],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),I],scope:{1:"title.class",3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},U={scope:"attr",match:n.concat(a,n.lookahead(":"),n.lookahead(/(?!::)/))},R={relevance:0,begin:/\(/,end:/\)/,keywords:y,contains:[U,o,F,e.C_BLOCK_COMMENT_MODE,v,w,E]},ee={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",_(k).join("\\b|"),"|",_(S).join("\\b|"),"\\b)"),a,n.concat(g,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[R]};R.contains.push(ee);const ue=[U,F,e.C_BLOCK_COMMENT_MODE,v,w,E],ye={begin:n.concat(/#\[\s*/,s),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:m,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:m,keyword:["new","array"]},contains:["self",...ue]},...ue,{scope:"meta",match:s}]};return{case_insensitive:!1,keywords:y,contains:[ye,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},r,{scope:"variable.language",match:/\$this\b/},o,ee,F,{match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},E,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:y,contains:["self",o,F,e.C_BLOCK_COMMENT_MODE,v,w]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},v,w]}}const Oa="[A-Za-z$_][0-9A-Za-z$_]*",ji=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],_i=["true","false","null","undefined","NaN","Infinity"],wi=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ki=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],xi=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ei=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ci=[].concat(xi,wi,ki);function Gp(e){const n=e.regex,t=(N,{after:Y})=>{const ie="</"+N[0].slice(1);return N.input.indexOf(ie,Y)!==-1},a=Oa,s={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(N,Y)=>{const ie=N[0].length+N.index,D=N.input[ie];if(D==="<"||D===","){Y.ignoreMatch();return}D===">"&&(t(N,{after:ie})||Y.ignoreMatch());let ae;const Ee=N.input.substring(ie);if(ae=Ee.match(/^\s*=/)){Y.ignoreMatch();return}if((ae=Ee.match(/^\s+extends\s+/))&&ae.index===0){Y.ignoreMatch();return}}},l={$pattern:Oa,keyword:ji,literal:_i,built_in:Ci,"variable.language":Ei},i="[0-9](_?[0-9])*",c=`\\.(${i})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${h})((${c})|\\.)?|(${c}))[eE][+-]?(${i})\\b`},{begin:`\\b(${h})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},w={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},m={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},b={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},y=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,w,m,k,{match:/\$\d+/},d];g.contains=y.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(y)});const _=[].concat(b,g.contains),E=_.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(_)}]),I={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:E},F={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},U={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...wi,...ki]}},R={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ee={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[I],illegal:/%/},ue={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ye(N){return n.concat("(?!",N.join("|"),")")}const ve={match:n.concat(/\b/,ye([...xi,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},me={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},_e={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},I]},he="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",A={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(he)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[I]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:E,CLASS_REFERENCE:U},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),R,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,w,m,k,b,{match:/\$\d+/},d,U,{className:"attr",begin:a+n.lookahead(":"),relevance:0},A,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[b,e.REGEXP_MODE,{className:"function",begin:he,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:E}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:o},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},ee,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[I,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},me,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[I]},ve,ue,F,_e,{match:/\$[(.]/}]}}function Kp(e){const n=Gp(e),t=Oa,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},o={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},r={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],i={$pattern:Oa,keyword:ji.concat(l),literal:_i,built_in:Ci.concat(a),"variable.language":Ei},c={className:"meta",begin:"@"+t},h=(g,v,w)=>{const m=g.contains.findIndex(k=>k.label===v);if(m===-1)throw new Error("can not find mode to replace");g.contains.splice(m,1,w)};Object.assign(n.keywords,i),n.exports.PARAMS_CONTAINS.push(c),n.contains=n.contains.concat([c,s,o]),h(n,"shebang",e.SHEBANG()),h(n,"use_strict",r);const d=n.contains.find(g=>g.label==="func.def");return d.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}const Yp=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Additional Languages")])],-1),Jp={id:"additional-languages-json-usage-example",class:"row mb-4"},Zp={class:"col-12"},Xp={id:"additional-languages-ts-usage-example",class:"row mb-4"},Qp={class:"col-12"},ef={id:"additional-languages-ts-example",class:"row mb-4"},nf={class:"col-12"},tf={id:"additional-languages-json-example",class:"row mb-4"},af={class:"col-12"},sf={class:"col-12"},of={id:"additional-languages-php-usage-example",class:"row mb-4"},rf={class:"col-12"},lf={id:"additional-languages-php-example",class:"row mb-4"},cf={class:"col-12"},uf=`class Person {
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
person.sayHello();`,hf=`{
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
`,gf=`<?php

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
?>`,pf={__name:"AdditionalLangExamples",setup(e){us.registerLanguage("json",Wp),us.registerLanguage("php",Vp),us.registerLanguage("typescript",Kp);const n=se("selectedLibrary"),t=se("selectedTheme"),a={prism:{json:`<template>
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
<\/script>`}};return(s,o)=>{const r=Xe("CodeBlock");return X(),te("div",null,[Yp,u("div",Jp,[u("div",Zp,[u("p",null,ke(p(n).label)+" does not load all languages by default. In order to use additional languages you will need to import that languages component. ",1)])]),u("div",Xp,[u("div",Qp,[W(r,{code:a[p(n).id].typescript,highlightjs:p(n).id==="highlightjs",label:`Example of using ${p(n).label} to highlight TypeScript`,lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),u("div",ef,[u("div",nf,[W(r,{code:uf,highlightjs:p(n).id==="highlightjs",label:"TypeScript",lang:"typescript",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])]),u("div",tf,[u("div",af,[W(r,{code:a[p(n).id].json,highlightjs:p(n).id==="highlightjs",label:`Example of using ${p(n).label} to highlight JSON`,lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","label","prismjs","theme"])]),u("div",sf,[W(r,{code:hf,highlightjs:p(n).id==="highlightjs",indent:2,label:"JSON",lang:"json",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])]),u("div",of,[u("div",rf,[W(r,{code:a[p(n).id].php,highlightjs:p(n).id==="highlightjs",label:`Example of using ${p(n).label} to highlight PHP`,lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),u("div",lf,[u("div",cf,[W(r,{code:gf,height:"500px",highlightjs:p(n).id==="highlightjs",indent:2,label:"PHP",lang:"php",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])])])}}},ff=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Browser Window")])],-1),df={id:"browser-window-example",class:"row mb-4"},bf={class:"col-12"},mf={__name:"BrowserWindowExamples",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme"),a={prism:`<CodeBlock
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
/>`};return(s,o)=>{const r=Xe("CodeBlock");return X(),te("div",null,[ff,u("div",df,[u("div",bf,[W(r,{"browser-window":!0,code:a[p(n).id],highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},yf=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Copy Button")])],-1),vf={id:"button-example",class:"row mb-4"},jf={class:"col-12"},_f={id:"persistent-button-example",class:"row mb-4"},wf={class:"col-12"},kf={__name:"ButtonExamples",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme"),a={prism:{btn:`<CodeBlock
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
/>`}};return(s,o)=>{const r=Xe("CodeBlock");return X(),te("div",null,[yf,u("div",vf,[u("div",jf,[W(r,{code:a[p(n).id].btn,highlightjs:p(n).id==="highlightjs",label:"Visible on hover",lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","prismjs","theme"])])]),u("div",_f,[u("div",wf,[W(r,{code:a[p(n).id].btnPersist,highlightjs:p(n).id==="highlightjs",label:"Persistent Copy Button",lang:"html","persistent-copy-button":"",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},xf=`/**
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
`,Ef=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow: #fef611;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-blue-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-green-neon);--neon-bunny-important: var(--neon-bunny-red);--neon-bunny-inserted: var(--neon-bunny-lime-lighter);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-pink);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-url: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-html-attr-name: var(--neon-bunny-green);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-lime);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-js-keyword: var(--neon-bunny-blue);--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-php-boolean: var(--neon-bunny-blue);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);--neon-bunny-php-class-name: var(--neon-bunny-teal);--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);--neon-bunny-php-function: var(--neon-bunny-green-neon);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);--neon-bunny-php-keyword: var(--neon-bunny-blue);--neon-bunny-php-operator: var(--neon-bunny-purple);--neon-bunny-php-package: var(--neon-bunny-peach);--neon-bunny-php-property: var(--neon-bunny-purple-light);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);--neon-bunny-php-variable: var(--neon-bunny-purple-light)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.constant{color:var(--neon-bunny-constant)}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token.attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value .token.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string .token.string,.language-js .token.template-string .token.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name.return-type{color:var(--neon-bunny-php-class-name-return-type);font-style:italic}.language-php .token.function{color:var(--neon-bunny-php-function)}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint);font-style:italic}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`,Cf=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow: #ffff00;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-purple-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-orange-light);--neon-bunny-important: var(--neon-bunny-pink);--neon-bunny-inserted: var(--neon-bunny-lime);--neon-bunny-keyword: var(--neon-bunny-purple-light);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-orange);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-orange-light);--neon-bunny-punctuation: var(--neon-bunny-orange);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-light);--neon-bunny-symbol: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-url: var(--neon-bunny-orange-darker);--neon-bunny-variable: var(--neon-bunny-orange);--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);--neon-bunny-html-attr-value: var(--neon-bunny-green);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange-darker);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-yellow);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-js-keyword: var(--neon-bunny-magenta);--neon-bunny-js-literal-property: var(--neon-bunny-orange);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-php-boolean: var(--neon-bunny-purple-light);--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);--neon-bunny-php-class-name: var(--neon-bunny-yellow);--neon-bunny-php-double-quote-string: var(--neon-bunny-green);--neon-bunny-php-function: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);--neon-bunny-php-operator: var(--neon-bunny-yellow-light);--neon-bunny-php-package: var(--neon-bunny-yellow);--neon-bunny-php-property: var(--neon-bunny-orange);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);--neon-bunny-php-variable: var(--neon-bunny-orange)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.constant{color:var(--neon-bunny-constant)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token .attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string.string,.language-js .token.template-string.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name .return-type{color:var(--neon-bunny-php-class-name-return-type)}.language-php .token.function{color:var(--neon-bunny-php-function);text-decoration:underline}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint)}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`,Sf=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-darker: #276AFF;--neon-bunny-blue-light-faded: #a5a8ff;--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta-neon: #FF25D9;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #fef611;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-literal: var(--neon-bunny-blue-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-green-darker);--neon-bunny-property: var(--neon-bunny-blue-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-peach-darker);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);--neon-bunny-title-function: var(--neon-bunny-green-neon);--neon-bunny-title: var(--neon-bunny-green-darker);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-blue-light);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-green);--neon-bunny-meta-prompt: var(--neon-bunny-blue-light);--neon-bunny-meta-string: var(--neon-bunny-blue-light);--neon-bunny-meta: var(--neon-bunny-blue-light);--neon-bunny-attr: var(--neon-bunny-green);--neon-bunny-attribute: var(--neon-bunny-green);--neon-bunny-name: var(--neon-bunny-blue-light);--neon-bunny-section: var(--neon-bunny-green);--neon-bunny-tag-attr: var(--neon-bunny-blue-light);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-class: var(--neon-bunny-lime);--neon-bunny-selector-id: var(--neon-bunny-lime);--neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-green);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-pink);--neon-bunny-php: var(--neon-bunny-blue-light);--neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-class-title: var(--neon-bunny-magenta);--neon-bunny-php-function-title: var(--neon-bunny-green-neon);--neon-bunny-php-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-gray-lighter);--neon-bunny-php-string: var(--neon-bunny-yellow);--neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);--neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);--neon-bunny-php-title: var(--neon-bunny-peach);--neon-bunny-php-variable: var(--neon-bunny-purple-light);--neon-bunny-php-meta: var(--neon-bunny-red)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params);font-style:italic}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class);font-style:italic}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`,Tf=`/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #ffff00;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-magenta);--neon-bunny-literal: var(--neon-bunny-purple-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-orange);--neon-bunny-property: var(--neon-bunny-yellow-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-orange);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-orange);--neon-bunny-title-function: var(--neon-bunny-orange-light);--neon-bunny-title: var(--neon-bunny-orange);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-purple-light);--neon-bunny-meta-prompt: var(--neon-bunny-orange);--neon-bunny-meta-string: var(--neon-bunny-orange);--neon-bunny-meta: var(--neon-bunny-orange);--neon-bunny-attr: var(--neon-bunny-orange);--neon-bunny-attribute: var(---neon-bunny-orange);--neon-bunny-name: var(--neon-bunny-orange);--neon-bunny-section: var(--neon-bunny-orange);--neon-bunny-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-orange);--neon-bunny-selector-class: var(--neon-bunny-yellow);--neon-bunny-selector-id: var(--neon-bunny-selector);--neon-bunny-selector-pseudo: var(--neon-bunny-orange);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-js-params-variable-language: var(--neon-bunny-orange);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-yellow);--neon-bunny-php: var(--neon-bunny-white);--neon-bunny-php-class-keyword: var(--neon-bunny-pink);--neon-bunny-php-class-title: var(--neon-bunny-yellow);--neon-bunny-php-function-title: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-yellow);--neon-bunny-php-string: var(--neon-bunny-green-light);--neon-bunny-php-title-class: var(--neon-bunny-yellow);--neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);--neon-bunny-php-title: var(--neon-bunny-white);--neon-bunny-php-variable: var(--neon-bunny-orange);--neon-bunny-php-meta: var(--neon-bunny-pink)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params)}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function);text-decoration:underline}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language);font-style:italic}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params)}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class)}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`,Af=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Languages")])],-1),Of={id:"lang-js-examples",class:"row mb-4"},$f={class:"col-12"},Nf={id:"lang-vue-examples",class:"row mb-4"},Mf={class:"col-12"},If={id:"lang-css-examples",class:"row mb-4"},Rf={class:"col-12"},Pf={id:"lang-html-examples",class:"row mb-4"},Lf={class:"col-12"},Bf={id:"lang-svg-examples",class:"row mb-4"},Ff={class:"col-12"},Df=`<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const greeting = ref('Hello, World!');
<\/script>`,zf=`// Example 1: Creating an array of numbers and finding the sum
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
`,Uf=`<!DOCTYPE html>
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
		syntax highlighting component powered by PrismJS or Highlight.js.">
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
`,Hf=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`,qf={__name:"LangExamples",setup(e){const n=se("codeBlockOptions"),t=se("selectedLibrary"),a=se("selectedTheme"),s=xf;return(o,r)=>{const l=Xe("CodeBlock");return X(),te("div",null,[Af,u("div",Of,[u("div",$f,[W(l,{code:zf,highlightjs:p(t).id==="highlightjs",label:"JavaScript",lang:"javascript","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",Nf,[u("div",Mf,[W(l,{code:Df,highlightjs:p(t).id==="highlightjs",label:"Vue (using lang = html)",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",If,[u("div",Rf,[W(l,{code:p(s),highlightjs:p(t).id==="highlightjs",label:"CSS",lang:"css","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),u("div",Pf,[u("div",Lf,[W(l,{code:Uf,highlightjs:p(t).id==="highlightjs",label:"HTML",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",Bf,[u("div",Ff,[W(l,{code:Hf,highlightjs:p(t).id==="highlightjs",label:"SVG",lang:"svg",prismjs:p(t).id==="prism",tabs:!1,theme:p(a)},null,8,["highlightjs","prismjs","theme"])])])])}}},Wf=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Other Prop Examples")])],-1),Vf={id:"radius-example",class:"row mb-4"},Gf={class:"col-12"},Kf={id:"copy-text-example",class:"row mb-4"},Yf={class:"col-12"},Jf={id:"run-text-example",class:"row mb-4"},Zf={class:"col-12"},Xf={id:"floating-tabs-example",class:"row mb-4"},Qf={class:"col-12"},ed={class:"form-check form-switch ms-1"},nd={class:"boolean-style"},td={id:"height-example",class:"row mb-4"},ad={class:"col-12"},sd={id:"height-example",class:"row mb-4"},od={class:"col-12"},rd={id:"indent-example",class:"row mb-4"},ld={class:"col-12"},id=`{
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
`,cd={__name:"OtherExamples",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme"),a=we("0 1em"),s=we("Copy Text"),o=we(!0),r=we("200"),l=we(2),i=we("Run"),c=we("0.25rem"),h={prism:{copyBlockRadius:`<CodeBlock
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
</CodeBlock>`}};function d(){alert("Run Text Code Example Function")}return(g,v)=>{const w=Xe("CodeBlock");return X(),te("div",null,[Wf,u("div",Vf,[u("div",Gf,[W(w,{code:h[p(n).id].copyBlockRadius,"code-block-radius":a.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",theme:p(t)},{label:un(()=>[ce(" codeBlockRadius: "),Fn(u("input",{"onUpdate:modelValue":v[0]||(v[0]=m=>a.value=m),class:"form-control",type:"text"},null,512),[[tt,a.value]])]),_:1},8,["code","code-block-radius","highlightjs","prismjs","theme"])])]),u("div",Kf,[u("div",Yf,[W(w,{code:h[p(n).id].copyText,"copy-tab":"",copyText:s.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:"",theme:p(t)},{label:un(()=>[ce(" copyText: "),Fn(u("input",{"onUpdate:modelValue":v[1]||(v[1]=m=>s.value=m),class:"form-control",type:"text"},null,512),[[tt,s.value]])]),_:1},8,["code","copyText","highlightjs","prismjs","theme"])])]),u("div",Jf,[u("div",Zf,[W(w,{code:h[p(n).id].runText,"copy-tab":!1,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism","run-tab":"",runText:i.value,tabs:"",theme:p(t),onRun:d},{label:un(()=>[ce(" runText: "),Fn(u("input",{"onUpdate:modelValue":v[2]||(v[2]=m=>i.value=m),class:"form-control",type:"text"},null,512),[[tt,i.value]])]),_:1},8,["code","highlightjs","prismjs","runText","theme"])])]),u("div",Xf,[u("div",Qf,[W(w,{code:h[p(n).id].floatingTabs,"floating-tabs":o.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:"",theme:p(t)},{label:un(()=>[u("div",ed,[Fn(u("input",{"onUpdate:modelValue":v[3]||(v[3]=m=>o.value=m),checked:"",class:"form-check-input",role:"switch",type:"checkbox"},null,512),[[Ah,o.value]]),u("label",null,[ce(" floatingTabs = "),u("span",nd,ke(o.value),1)])])]),_:1},8,["code","floating-tabs","highlightjs","prismjs","theme"])])]),u("div",td,[u("div",ad,[W(w,{code:h[p(n).id].height,height:r.value,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},{label:un(()=>[ce(" height: "),Fn(u("input",{"onUpdate:modelValue":v[4]||(v[4]=m=>r.value=m),class:"form-control",type:"number"},null,512),[[tt,r.value]])]),_:1},8,["code","height","highlightjs","prismjs","theme"])])]),u("div",sd,[u("div",od,[W(w,{code:h[p(n).id].tabGap,highlightjs:p(n).id==="highlightjs",lang:"html",prismjs:p(n).id==="prism","run-tab":!0,"tab-gap":c.value,tabs:"",theme:p(t)},{label:un(()=>[ce(" tabGap: "),Fn(u("input",{"onUpdate:modelValue":v[5]||(v[5]=m=>c.value=m),class:"form-control",type:"text"},null,512),[[tt,c.value]])]),_:1},8,["code","highlightjs","prismjs","tab-gap","theme"])])]),u("div",rd,[u("div",ld,[W(w,{code:id,highlightjs:p(n).id==="highlightjs",indent:l.value,lang:"json",prismjs:p(n).id==="prism",tabs:!1,theme:p(t)},{label:un(()=>[ce(" indent (json): "),Fn(u("input",{"onUpdate:modelValue":v[6]||(v[6]=m=>l.value=m),class:"form-control",type:"number"},null,512),[[tt,l.value]])]),_:1},8,["highlightjs","indent","prismjs","theme"])])])])}}},ud=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Plugins")])],-1),hd={key:0,id:"plugin-example",class:"row mb-4"},gd=lo('<div class="col-12"><p> PrismJS does not load all plugins by default. In order to use additional plugins you will need to import them. Please note that not all plugins may work with this component. </p><p>Tested Plugins that do work include:</p><ul><li><a href="https://prismjs.com/plugins/autolinker/" target="_blank"> autolinker </a></li><li><a href="https://prismjs.com/plugins/command-line/" target="_blank"> command-line </a></li><li><a href="https://prismjs.com/plugins/line-highlight/" target="_blank"> line-highlight </a></li><li><a href="https://prismjs.com/plugins/line-numbers/" target="_blank"> line-numbers </a></li><li><a href="https://prismjs.com/plugins/match-braces/" target="_blank"> match-braces </a></li><li><a href="https://prismjs.com/plugins/show-invisibles/" target="_blank"> show-invisibles </a></li></ul></div>',1),pd={class:"col-12"},fd=u("a",{href:"https://prismjs.com/plugins/line-numbers/",target:"_blank"},"line-numbers",-1),dd={key:1,id:"plugin-example",class:"row mb-4"},bd=u("div",{class:"col-12"},[u("p",null," Vue3 CodeBlock currently does not support the Highlight.js plugin API. ")],-1),md=[bd],yd=`<template>
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
<\/script>`,vd={__name:"PluginExamples",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme");return(a,s)=>{const o=Xe("CodeBlock");return X(),te("div",null,[ud,p(n).id==="prism"?(X(),te("div",hd,[gd,u("div",pd,[W(o,{class:"line-numbers",code:yd,lang:"html","prism-plugin":"",prismjs:"",tabs:!1,theme:p(t)},{label:un(()=>[ce(" Example using the "),fd,ce(" Plugin ")]),_:1},8,["theme"])])])):(X(),te("div",dd,md))])}}},jd=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Tabs")])],-1),_d={id:"tab-copy-example",class:"row mb-4"},wd={class:"col-12"},kd={id:"tab-run-example",class:"row mb-4"},xd={class:"col-12"},Ed={id:"tab-both-example",class:"row mb-4"},Cd={class:"col-12"},Sd={__name:"TabExamples",setup(e){const n=se("codeBlockOptions"),t=se("selectedLibrary"),a=se("selectedTheme"),s={prism:{copy:`<CodeBlock
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
<\/script>`}};function o(){alert("Run Code Tab")}function r(){alert("Copy & Run Code Tabs")}return(l,i)=>{const c=Xe("CodeBlock");return X(),te("div",null,[jd,u("div",_d,[u("div",wd,[W(c,{code:s[p(t).id].copy,"copy-tab":"",highlightjs:p(t).id==="highlightjs",label:"Copy Code Tab",lang:"html",prismjs:p(t).id==="prism","run-tab":!1,tabs:"",theme:p(a)},null,8,["code","highlightjs","prismjs","theme"])])]),u("div",kd,[u("div",xd,[W(c,{code:s[p(t).id].run,"copy-tab":!1,highlightjs:p(t).id==="highlightjs",label:"Run Code Tab",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism","run-tab":"",tabs:"",theme:p(a),onRun:o},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),u("div",Ed,[u("div",Cd,[W(c,{code:s[p(t).id].both,highlightjs:p(t).id==="highlightjs",label:"Copy & Run Code Tabs",lang:"html","max-height":p(n).preHeight,prismjs:p(t).id==="prism","run-tab":!0,tabs:"",theme:p(a),onRun:r},null,8,["code","highlightjs","max-height","prismjs","theme"])])])])}}},Td={class:"mb-5"},Ad=u("div",{class:"row"},[u("div",{class:"col-12 mb-3"},[u("h2",null,"Examples")])],-1),Od={__name:"ExamplesSection",setup(e){return(n,t)=>(X(),te("div",Td,[Ad,W(p(qf),{id:"lang-examples"}),W(p(pf),{id:"add-lang-examples"}),W(p(vd),{id:"plugin-examples"}),W(p(Sd),{id:"tab-examples"}),W(p(kf),{id:"copy-button-examples"}),W(p(mf),{id:"browser-window-examples"}),W(p(cd),{id:"other-prop-examples"})]))}},$d={class:"row mb-5"},Nd=u("h2",null,"Events",-1),Md=[Nd],Id={class:"col-12 mb-3"},Rd={class:"table-responsive"},Pd={class:"table table-striped"},Ld=u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Description")])],-1),Bd={valign:"top"},Fd={valign:"top"},Dd={__name:"EventsSection",setup(e){const n=se("styleData"),t={run:{description:"The event emitted when the run tab is clicked."},"update:copy-status":{description:"The event emitted when the copy status is updated."}};return(a,s)=>(X(),te("div",$d,[u("div",{class:Ce(p(n).h2ColClass)},Md,2),u("div",Id,[u("div",Rd,[u("table",Pd,[Ld,u("tbody",null,[(X(),te(Oe,null,Zn(t,(o,r)=>u("tr",{key:o},[u("td",Bd,ke(r),1),u("td",Fd,ke(o.description),1)])),64))])])])])]))}},zd={class:"row mb-5"},Ud=u("h2",null,"Installation",-1),Hd=[Ud],qd={class:"col-12 mb-4"},Wd={class:"col-12"},Vd="pnpm add vue3-code-block",Gd="npm i vue3-code-block",Kd={__name:"InstallationSection",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme"),a=se("styleData");return(s,o)=>{const r=Xe("CodeBlock");return X(),te("div",zd,[u("div",{class:Ce(p(a).h2ColClass)},Hd,2),u("div",qd,[W(r,{code:Vd,highlightjs:p(n).id==="highlightjs",label:"Using pnpm:",lang:"plain",prismjs:p(n).id==="prism","show-run":!1,tabs:!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])]),u("div",Wd,[W(r,{code:Gd,highlightjs:p(n).id==="highlightjs",label:"Using npm:",lang:"plain",prismjs:p(n).id==="prism","show-run":!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])])}}},Yd={class:"row mb-5"},Jd=u("h2",null,"License",-1),Zd=[Jd],Xd={class:"col-12"},Qd=u("p",null,[ce(" Copyright © 2023 WebDevNerdStuff "),u("br"),ce(" Licensed under the MIT license. ")],-1),eb=["href"],nb={__name:"LicenseSection",setup(e){const n=se("styleData"),t=se("links");return(a,s)=>(X(),te("div",Yd,[u("div",{class:Ce(p(n).h2ColClass)},Zd,2),u("div",Xd,[Qd,u("p",null,[u("a",{href:p(t).license,target:"_blank"}," LICENSE.md ",8,eb)])])]))}};const Si=e=>(Al("data-v-14b6c1b7"),e=e(),Ol(),e),tb={class:"row mb-5"},ab=Si(()=>u("h2",null,"Props",-1)),sb=[ab],ob={class:"col-12 mb-3"},rb={class:"table-responsive"},lb={class:"table table-striped"},ib=Si(()=>u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Type"),u("th",null,"Default"),u("th",null,"Description")])],-1)),cb=["id"],ub={class:"prop-type",valign:"top"},hb={class:"prop-default",valign:"top"},gb=["innerHTML"],pb={__name:"PropsSection",setup(e){const n=se("styleData"),t=se("prismLinks"),a=se("highlightJsLinks"),s={browserWindow:{type:"Boolean",required:!1,default:!1,description:"To give the code block a browser window look."},code:{type:"[Object, Array, String, Number]",required:!0,default:"",description:"The code to be displayed in the code block."},codeBlockRadius:{type:"String",required:!1,default:"0.5rem",description:"The border radius of the code block."},copyButton:{type:Boolean,required:!1,default:!0,description:"To show a copy button within the code block"},copyIcons:{type:"Boolean",required:!1,default:!0,description:"To show the copy icons on the copy code tab."},copyTab:{type:"Boolean",required:!1,default:!0,description:"To show the copy code tab."},copyFailedText:{type:"String",required:!1,default:"Copy failed!",description:"The text to be displayed when the code copy failed."},copyText:{type:"String",required:!1,default:"Copy Code",description:"The text to be displayed on the copy tab."},copySuccessText:{type:"String",required:!1,default:"Copied!",description:"The text to be displayed when the code copy was successful."},floatingTabs:{type:"Boolean",required:!1,default:!0,description:"To make the tabs float on top of the code block."},height:{type:"[String, Number]",required:!1,default:"auto",description:"The height of the code block."},highlightjs:{type:"Boolean",required:!1,default:"false",description:"Specifies that the Highlight.js library should be used."},indent:{type:"Number",required:!1,default:4,description:"The number of spaces to indent the code for json."},label:{type:"String",required:!1,default:"",description:"The label to be displayed on the code block."},lang:{type:"String",required:!1,default:"javascript",description:"The language of the code."},maxHeight:{type:"[String, Number]",required:!1,default:"auto",description:"The max height of the code block."},persistentCopyButton:{type:"Boolean",required:!1,default:!1,description:"To show a persistent copy button within the code block"},prismjs:{type:"Boolean",required:!1,default:"true",description:"Specifies that the PrismJS library should be used."},prismPlugin:{type:"Boolean",required:!1,default:"false",description:"Specifies that a PrismJS plugin is being used. This is needed for the plugin to work properly."},runTab:{type:"Boolean",required:!1,default:!1,description:"To show the run tab."},runText:{type:"String",required:!1,default:"Run",description:"The text to be displayed on the run tab."},tabGap:{type:"String",required:!1,default:"0.25rem",description:"The gap between the tabs."},tabs:{type:"Boolean",required:!1,default:!1,description:"To show the tabs. This will show/hide all tabs."},theme:{type:"[String, Boolean]",required:!1,id:"props-theme-option",default:"neon-bunny",description:`<p>The theme to be used for the code block. Available options include:</p>
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
		`}};return(o,r)=>(X(),te("div",tb,[u("div",{class:Ce(p(n).h2ColClass)},sb,2),u("div",ob,[u("div",rb,[u("table",lb,[ib,u("tbody",null,[(X(),te(Oe,null,Zn(s,(l,i)=>u("tr",{key:l},[u("td",{id:l==null?void 0:l.id,valign:"top"},ke(i),9,cb),u("td",ub,ke(l.type),1),u("td",hb,ke(l.default),1),u("td",{valign:"top",innerHTML:l.description},null,8,gb)])),64))])])])])]))}},fb=go(pb,[["__scopeId","data-v-14b6c1b7"]]),db={class:"row mb-5"},bb=u("h2",null,"Slots",-1),mb=[bb],yb={class:"col-12 mb-3"},vb={class:"table-responsive"},jb={class:"table table-striped"},_b=u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Description")])],-1),wb={valign:"top"},kb={valign:"top"},xb={__name:"SlotsSection",setup(e){const n=se("styleData"),t={copyButton:{description:"Slot for the copy button inside the code block of the component."},label:{description:"Slot for the label of the component."},tabs:{description:"Slot for the tabs of the component."}};return(a,s)=>(X(),te("div",db,[u("div",{class:Ce(p(n).h2ColClass)},mb,2),u("div",yb,[u("div",vb,[u("table",jb,[_b,u("tbody",null,[(X(),te(Oe,null,Zn(t,(o,r)=>u("tr",{key:o},[u("td",wb,ke(r),1),u("td",kb,ke(o.description),1)])),64))])])])])]))}},Eb={class:"row mb-5"},Cb=u("h2",null,"Register Component",-1),Sb=[Cb],Tb={class:"col-12"},Ab=`import { createApp } from 'vue';
import CodeBlock from 'vue3-code-block';

createApp()
  .component('CodeBlock', CodeBlock)
  .mount('#app');`,Ob={__name:"RegisterSection",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme"),a=se("styleData");return(s,o)=>{const r=Xe("CodeBlock");return X(),te("div",Eb,[u("div",{class:Ce(p(a).h2ColClass)},Sb,2),u("div",Tb,[W(r,{code:Ab,highlightjs:p(n).id==="highlightjs",lang:"javascript",prismjs:p(n).id==="prism","show-run":!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])])])}}},$b={class:"row mb-5"},Nb=u("h2",null,"Themes",-1),Mb=[Nb],Ib={class:"col-12"},Rb=u("p",null," There are a few options for theming the code block. Using the components built in method allows you to be able to dynamically change the theme easily. If you choose, you can also use your own custom theme. ",-1),Pb=u("code",null,"neon-bunny",-1),Lb=u("code",null,"neon-bunny-carrot",-1),Bb=["href"],Fb=["href"],Db=u("a",{href:"#props-theme-option"},"theme",-1),zb=u("code",null,"fetch",-1),Ub=["href"],Hb={key:0},qb=u("code",null,"base16",-1),Wb=u("code",null,"node_modules",-1),Vb=u("code",null,"theme",-1),Gb={key:2},Kb=["href"],Yb=u("p",null,[ce(" Alternatively you can import the theme into your css/sass/scss. Make sure to set the "),u("code",null,"theme"),ce(" prop to false to avoid it conflicting with the default theme. ")],-1),Jb=u("code",null,"@use",-1),Zb={__name:"ThemesSection",setup(e){const n=se("links"),t=se("prismLinks"),a=se("highlightJsLinks"),s=se("selectedLibrary"),o=se("selectedTheme"),r=se("styleData"),l={prism:{bunnyTheme:`<CodeBlock
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
</div>`;return(c,h)=>{const d=Xe("CodeBlock");return X(),te("div",$b,[u("div",{class:Ce(p(r).h2ColClass)},Mb,2),u("div",Ib,[Rb,u("p",null,[ce(" The first way is to use one of the two custom themes ("),Pb,ce(", "),Lb,ce(") built into the component that are based off of my own VSCode "),u("a",{href:p(n).neonBunnyTheme,target:"_blank"},"Neon Bunny Theme",8,Bb),ce(". ")]),W(d,{code:l[p(s).id].bunnyTheme,highlightjs:p(s).id==="highlightjs",label:"Using the Neon Bunny Themes",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},null,8,["code","highlightjs","prismjs","theme"]),u("p",null,[ce(" Another other is to use the main "),u("a",{href:p(s).id==="prism"?p(t).homepage:p(a).homepage,target:"_blank"},ke(p(s).label),9,Fb),ce(" themes. If you use the component to load the theme, you just need to set the "),Db,ce(" prop to the desired theme. When you load it this way, the component will use a "),zb,ce(" call to load them themes from the "),u("a",{href:p(s).id==="prism"?p(t).cdn:p(a).cdn,target:"_blank"},"jsDelivr CDN",8,Ub),ce(". Fetching the "+ke(p(s).label)+" themes from a CDN was the best method I could figure out at this time to dynamically load the themes, while making it easier for you to use them. You can also link to another CDN of your choice. ",1)]),W(d,{code:l[p(s).id].themeProp,highlightjs:p(s).id==="highlightjs",label:"Using the theme prop",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},null,8,["code","highlightjs","prismjs","theme"]),p(s).id==="highlightjs"?(X(),te("p",Hb,[ce(" You can also use the "),qb,ce(" styles. "),u("span",{innerHTML:i})])):en("",!0),p(s).id==="highlightjs"?(X(),Dt(d,{key:1,code:l[p(s).id].base16,highlightjs:!0,label:"Using a base16 theme",lang:"html",prismjs:!1,theme:p(o)},null,8,["code","theme"])):en("",!0),u("p",null,[ce(" You can also load the themes the traditional way of importing them directly from the "+ke(p(s).label)+" package in ",1),Wb,ce(". Make sure to set the "),Vb,ce(" prop to false to avoid it conflicting with the default theme. ")]),p(s).id==="prism"?(X(),te("p",Gb,[ce(" Themes from their "),u("a",{href:p(t).themes,target:"_blank"},"Prism themes",8,Kb),ce(" repository can be used this way as well. "),u("span",{innerHTML:i})])):en("",!0),W(d,{code:l[p(s).id].importJs,highlightjs:p(s).id==="highlightjs",label:"Using import (javascript)",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},null,8,["code","highlightjs","prismjs","theme"]),Yb,W(d,{code:l[p(s).id].importCss,highlightjs:p(s).id==="highlightjs",label:"Using <code>@use</code> (css/sass/scss)",lang:"html",prismjs:p(s).id==="prism",theme:p(o)},{label:un(()=>[ce(" Using "),Jb,ce(" (css/sass/scss) ")]),_:1},8,["code","highlightjs","prismjs","theme"])])])}}},Xb={class:"row mb-5"},Qb=u("h2",null,"Usage",-1),em=[Qb],nm={class:"col-12"},tm={class:"col-12"},am=`<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo)\`;
<\/script>`,sm=`<template>
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
<\/script>`,om={__name:"UsageSection",setup(e){const n=se("selectedLibrary"),t=se("selectedTheme"),a=se("styleData");function s(){alert("bar")}return(o,r)=>{const l=Xe("CodeBlock");return X(),te("div",Xb,[u("div",{class:Ce(p(a).h2ColClass)},em,2),u("div",nm,[W(l,{code:am,highlightjs:p(n).id==="highlightjs",label:"My Code",lang:"html",prismjs:p(n).id==="prism","show-run":!1,theme:p(t)},null,8,["highlightjs","prismjs","theme"])]),u("div",tm,[W(l,{code:sm,highlightjs:p(n).id==="highlightjs",label:"Run My Code",lang:"html",prismjs:p(n).id==="prism","run-tab":"",tabs:"",theme:p(t),onRun:s},null,8,["highlightjs","prismjs","theme"])])])}}};(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){function n(t,a){return"___"+t.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,o){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(s,function(l){if(typeof o=="function"&&!o(l))return l;for(var i=r.length,c;t.code.indexOf(c=n(a,i))!==-1;)++i;return r[i]=l,c}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language!==a||!t.tokenStack)return;t.grammar=e.languages[a];var s=0,o=Object.keys(t.tokenStack);function r(l){for(var i=0;i<l.length&&!(s>=o.length);i++){var c=l[i];if(typeof c=="string"||c.content&&typeof c.content=="string"){var h=o[s],d=t.tokenStack[h],g=typeof c=="string"?c:c.content,v=n(a,h),w=g.indexOf(v);if(w>-1){++s;var m=g.substring(0,w),k=new e.Token(a,e.tokenize(d,t.grammar),"language-"+a,d),S=g.substring(w+v.length),b=[];m&&b.push.apply(b,r([m])),b.push(k),S&&b.push.apply(b,r([S])),typeof c=="string"?l.splice.apply(l,[i,1].concat(b)):c.content=b}}else c.content&&r(c.content)}return l}r(t.tokens)}}})})(Prism);(function(e){var n=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,s=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:n,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:s,punctuation:o};var r={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},l=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:r}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:r}}];e.languages.insertBefore("php","variable",{string:l,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:n,string:l,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:a,operator:s,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(i){if(/<\?/.test(i.code)){var c=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(i,"php",c)}}),e.hooks.add("after-tokenize",function(i){e.languages["markup-templating"].tokenizePlaceholders(i,"php")})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(r,l){if(!(r.tagName!=="PRE"||!r.classList.contains(e))){var i=r.querySelector(".line-numbers-rows");if(i){var c=parseInt(r.getAttribute("data-start"),10)||1,h=c+(i.children.length-1);l<c&&(l=c),l>h&&(l=h);var d=l-c;return i.children[d]}}},resize:function(r){a([r])},assumeViewportIndependence:!0};function a(r){if(r=r.filter(function(i){var c=s(i),h=c["white-space"];return h==="pre-wrap"||h==="pre-line"}),r.length!=0){var l=r.map(function(i){var c=i.querySelector("code"),h=i.querySelector(".line-numbers-rows");if(!(!c||!h)){var d=i.querySelector(".line-numbers-sizer"),g=c.textContent.split(n);d||(d=document.createElement("span"),d.className="line-numbers-sizer",c.appendChild(d)),d.innerHTML="0",d.style.display="block";var v=d.getBoundingClientRect().height;return d.innerHTML="",{element:i,lines:g,lineHeights:[],oneLinerHeight:v,sizer:d}}}).filter(Boolean);l.forEach(function(i){var c=i.sizer,h=i.lines,d=i.lineHeights,g=i.oneLinerHeight;d[h.length-1]=void 0,h.forEach(function(v,w){if(v&&v.length>1){var m=c.appendChild(document.createElement("span"));m.style.display="block",m.textContent=v}else d[w]=g})}),l.forEach(function(i){for(var c=i.sizer,h=i.lineHeights,d=0,g=0;g<h.length;g++)h[g]===void 0&&(h[g]=c.children[d++].getBoundingClientRect().height)}),l.forEach(function(i){var c=i.sizer,h=i.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",i.lineHeights.forEach(function(d,g){h.children[g].style.height=d+"px"})})}}function s(r){return r?window.getComputedStyle?getComputedStyle(r):r.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(r){if(r.code){var l=r.element,i=l.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!l.querySelector(".line-numbers-rows")&&Prism.util.isActive(l,e)){l.classList.remove(e),i.classList.add(e);var c=r.code.match(n),h=c?c.length+1:1,d,g=new Array(h+1).join("<span></span>");d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=g,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),r.element.appendChild(d),a([i]),Prism.hooks.run("line-numbers",r)}}}),Prism.hooks.add("line-numbers",function(r){r.plugins=r.plugins||{},r.plugins.lineNumbers=!0})})();const rm={class:"container mb-5"},lm=u("div",{class:"row mb-4"},[u("div",{class:"col-12 text-center"},[u("img",{alt:"Vue",class:"vue-logo",src:fg})])],-1),im={class:"row mb-3"},cm=u("div",{class:"col-12 text-center"},[u("h1",null,"Vue 3 CodeBlock")],-1),um={class:"col-12 text-center"},hm={class:"badge bg-secondary rounded-pill"},gm={class:"container mb-5"},pm={class:"row"},fm={class:"col-12"},dm=["href"],bm=["href"],mm=u("hr",null,null,-1),ym={class:"row"},vm={class:"col-12 mb-3"},jm=u("h5",null,"Switch between PrismJS and Highlight.js",-1),_m={class:"d-inline-flex align-items-center px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"},wm={class:"col-12 col-md-3 mb-3"},km=["selected","value"],xm={class:"row"},Em={class:"col-12 col-md-3"},Cm=u("label",{class:"form-label",for:"theme-selection-select"},"Select Theme:",-1),Sm=["selected","value"],Tm={class:"container"},Am=jt({__name:"DemoPage",emits:["changedLibrary"],setup(e,{emit:n}){const t=se("highlightJsLinks"),a=se("prismLinks"),s=ho(),o=we("prism"),r=s.libraries,l=s.highlightThemes,i=s.neonBunnyThemes,c=s.prismThemes,h=we(null),d=we(r.prism),g=we("neon-bunny");so(()=>{o.value=s.getLocalStorage()??s.setLocalStorage("prism"),v(o.value)}),h.value=[...i,...c],Tn("selectedTheme",g),Tn("selectedLibrary",d),o.value==="highlightjs"&&(h.value=[...i,...l],d.value=r.highlightjs);function v(m){if(o.value=m,d.value=r[m],g.value="neon-bunny",s.setLocalStorage(o.value),n("changedLibrary",d),m==="prism"){h.value=[...i,...c];return}h.value=[...i,...l]}function w(m){g.value=m}return(m,k)=>{const S=Xe("fa-icon");return X(),te(Oe,null,[u("div",rm,[lm,u("div",im,[cm,u("div",um,[u("span",hm,ke(p(ai)),1)])])]),u("div",gm,[u("div",pm,[u("div",fm,[u("p",null,[ce(" The Vue 3 CodeBlock component leverages the power of "),u("a",{href:p(a).homepage,target:"_blank"},"PrismJS",8,dm),ce(" or "),u("a",{href:p(t).homepage,target:"_blank"},"Highlight.js",8,bm),ce(" to provide syntax highlighting for code blocks within your application. The component takes a prop, which is the code to be highlighted, and uses PrismJS or Highlight.js to render the code with syntax highlighting. The component supports a variety of programming languages and can be customized with different themes to match your application's design. With this component, your users can display their code snippets with ease and clarity, making it easier to share and collaborate on code within your application. ")])])]),mm,u("div",ym,[u("div",vm,[jm,u("small",_m,[W(S,{class:"text-success me-1",icon:"fa-solid fa-circle-info"}),ce(" This will also update the examples and documentation below. ")])]),u("div",wm,[u("select",{"aria-label":"Library Selection",class:"form-select",onChange:k[0]||(k[0]=b=>v(b.target.value))},[(X(!0),te(Oe,null,Zn(p(r),b=>(X(),te("option",{key:b,selected:o.value===b.id,value:b.id},ke(b.label),9,km))),128))],32)])]),u("div",xm,[u("div",Em,[Cm,u("select",{id:"theme-selection-select","aria-label":"Theme Selection",class:"form-select",onChange:k[1]||(k[1]=b=>w(b.target.value))},[(X(!0),te(Oe,null,Zn(h.value,b=>(X(),te("option",{key:b,selected:g.value===b.value,value:b.value},ke(b.label),9,Sm))),128))],32)])])]),u("div",Tm,[W(p(Kd),{id:"ul-installation"}),W(p(Ob),{id:"ul-register-plugin"}),W(p(om),{id:"ul-usage"}),W(p(fb),{id:"ul-props"}),W(p(Zb),{id:"ul-themes"}),W(p(Dd),{id:"ul-events"}),W(p(xb),{id:"ul-slots"}),W(p(Od),{id:"ul-examples"}),W(p(Lg),{id:"ul-css-vars"}),W(p(Yg),{id:"ul-dependencies"}),W(p(jg),{id:"ul-change-log"}),W(p(nb),{id:"ul-license"})])],64)}}});const Om={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5"},$m={class:"container"},Nm=u("a",{class:"navbar-brand",href:"/vue3-code-block/"},"Vue 3 CodeBlock",-1),Mm=u("button",{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",class:"navbar-toggler","data-bs-target":"#navbarSupportedContent","data-bs-toggle":"collapse",type:"button"},[u("span",{class:"navbar-toggler-icon"})],-1),Im={id:"navbarSupportedContent",class:"collapse navbar-collapse"},Rm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Pm={class:"nav-item"},Lm={"aria-current":"page",class:"nav-link active",href:"/vue3-code-block/"},Bm={key:0,class:"nav-item dropdown"},Fm=u("a",{id:"docs-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Docs ",-1),Dm=lo('<ul aria-labelledby="docs-dropdown" class="dropdown-menu dropdown-menu-dark"><li><a class="dropdown-item" href="#ul-installation"> Installation </a></li><li><a class="dropdown-item" href="#ul-register-plugin">Register Component</a></li><li><a class="dropdown-item" href="#ul-props">Props</a></li><li><a class="dropdown-item" href="#ul-themes">Themes</a></li><li><a class="dropdown-item" href="#ul-events">Events</a></li><li><a class="dropdown-item" href="#ul-slots">Slots</a></li><li><a class="dropdown-item" href="#ul-examples">Examples</a></li><li><a class="dropdown-item" href="#ul-css-vars">CSS Variables</a></li><li><hr class="dropdown-divider"></li><li><h6 class="dropdown-header">Info</h6></li><li><a class="dropdown-item" href="#ul-dependencies"> Dependencies </a></li><li><a class="dropdown-item" href="#ul-change-log">Change Log</a></li><li><a class="dropdown-item" href="#ul-license">License</a></li></ul>',1),zm=[Fm,Dm],Um={key:1,class:"nav-item dropdown"},Hm=u("a",{id:"examples-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Examples ",-1),qm=lo('<ul aria-labelledby="examples-dropdown" class="dropdown-menu dropdown-menu-dark"><li><a class="dropdown-item" href="#lang-examples">Languages</a></li><li><a class="dropdown-item" href="#add-lang-examples"> Additional Languages </a></li><li><a class="dropdown-item" href="#plugin-examples">Plugins</a></li><li><a class="dropdown-item" href="#tab-examples">Tabs</a></li><li><a class="dropdown-item" href="#copy-button-examples"> Copy Button </a></li><li><a class="dropdown-item" href="#browser-window-examples"> Browser Window </a></li><li><a class="dropdown-item" href="#other-prop-examples"> Other Props </a></li></ul>',1),Wm=[Hm,qm],Vm={class:"d-flex my-2 me-2"},Gm=["href"],Km={class:"d-flex"},Ym={class:"navbar-nav me-auto mb-2 mb-lg-0"},Jm={class:"nav-item"},Zm=["href"],Xm={class:"nav-item"},Qm=["href"],ey={class:"nav-item d-flex align-items-center ms-2"},ny={__name:"NavBar",props:{isPlayground:{type:Boolean,default:!1},selectedLibrary:{type:Object,required:!0}},setup(e){const n=se("links"),t=se("prismLinks"),a=se("highlightJsLinks"),s=ho(),o=localStorage.getItem("theme"),r=we(o),l=()=>o||"dark",i=function(c){r.value=s.setTheme(c,r.value)};return i(l()),(c,h)=>{const d=Xe("fa-icon");return X(),te("nav",Om,[u("div",$m,[Nm,Mm,u("div",Im,[u("ul",Rm,[u("li",Pm,[u("a",Lm,[W(d,{icon:"fa-solid fa-house"})])]),e.isPlayground?en("",!0):(X(),te("li",Bm,zm)),e.isPlayground?en("",!0):(X(),te("li",Um,Wm))]),u("div",Vm,[u("a",{href:e.selectedLibrary.id==="prism"?p(t).homepage:p(a).homepage,target:"_blank"},[u("span",{class:Ce(["badge",e.selectedLibrary.id==="prism"?"badge-prism":"badge-highlightjs"])},ke(e.selectedLibrary.label)+" Active",3)],8,Gm)]),u("div",Km,[u("ul",Ym,[u("li",Jm,[u("a",{class:"nav-link",href:p(n).github,target:"_blank"},[W(d,{icon:"fa-brands fa-github"}),ce(" GitHub ")],8,Zm)]),u("li",Xm,[u("a",{class:"nav-link",href:p(n).npm,target:"_blank"},[W(d,{icon:"fa-brands fa-npm"}),ce(" Package ")],8,Qm)]),u("li",ey,[W(d,{class:Ce(["theme-switch fa-fw",r.value==="dark"?"moon":"sun"]),icon:r.value==="dark"?"fa-moon":"fa-sun",onClick:h[0]||(h[0]=g=>i("toggle"))},null,8,["class","icon"])])])])])])])}}},ty={class:"footer-container container-fluid"},ay={class:"container py-2"},sy={class:"d-flex flex-wrap justify-content-between align-items-center my-2"},oy={class:"text-muted col-md-4 d-flex align-items-center"},ry=["href"],ly={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},iy={class:"ms-3"},cy=["href"],uy={class:"ms-3"},hy=["href"],gy=jt({__name:"FooterBar",setup(e){const n=se("links"),t=new Date().getFullYear();return(a,s)=>{const o=Xe("fa-icon");return X(),te("div",ty,[u("div",ay,[u("footer",sy,[u("div",oy,[ce(" © "+ke(p(t))+" ",1),u("a",{class:"text-muted btn btn-link d-flex-inline ps-2",href:p(n).githubProfile,target:"_blank"},"WebDevNerdStuff",8,ry)]),u("ul",ly,[u("li",iy,[u("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:p(n).github,role:"button",target:"_blank"},[W(o,{icon:"fa-brands fa-github"})],8,cy)]),u("li",uy,[u("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:p(n).npm,role:"button",target:"_blank"},[W(o,{icon:"fa-brands fa-npm"})],8,hy)])])])])])}}});const py=jt({__name:"App",setup(e){Tn("styleData",{h2ColClass:"col-12 mb-4",fieldWidth:{maxWidth:"100%",width:"300px"}});const n=ho(),t=we({});Tn("links",n.links),Tn("highlightJsLinks",n.highlightJsLinks),Tn("prismLinks",n.prismLinks);const a=we({browserWindow:!1,preHeight:"30em"});Tn("codeBlockOptions",a);function s(o){t.value=o.value}return(o,r)=>(X(),te(Oe,null,[W(ny,{"selected-library":t.value},null,8,["selected-library"]),W(Am,{onChangedLibrary:s}),W(gy)],64))}}),fy="modulepreload",dy=function(e){return"/vue3-code-block/"+e},kr={},xr=function(n,t,a){if(!t||t.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=dy(o),o in kr)return;kr[o]=!0;const r=o.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!a)for(let h=s.length-1;h>=0;h--){const d=s[h];if(d.href===o&&(!r||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":fy,r||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),r)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};var Ns={exports:{}};(function(e,n){(function(t,a){var s="1.0.35",o="",r="?",l="function",i="undefined",c="object",h="string",d="major",g="model",v="name",w="type",m="vendor",k="version",S="architecture",b="console",y="mobile",_="tablet",E="smarttv",I="wearable",F="embedded",U=350,R="Amazon",ee="Apple",ue="ASUS",ye="BlackBerry",ve="Browser",me="Chrome",_e="Edge",he="Firefox",A="Google",N="Huawei",Y="LG",ie="Microsoft",D="Motorola",ae="Opera",Ee="Samsung",pe="Sharp",je="Sony",fe="Xiaomi",Ie="Zebra",qe="Facebook",$e="Chromium OS",Be="Mac OS",Ge=function(z,G){var x={};for(var M in z)G[M]&&G[M].length%2===0?x[M]=G[M].concat(z[M]):x[M]=z[M];return x},f=function(z){for(var G={},x=0;x<z.length;x++)G[z[x].toUpperCase()]=z[x];return G},j=function(z,G){return typeof z===h?C(G).indexOf(C(z))!==-1:!1},C=function(z){return z.toLowerCase()},P=function(z){return typeof z===h?z.replace(/[^\d\.]/g,o).split(".")[0]:a},O=function(z,G){if(typeof z===h)return z=z.replace(/^\s\s*/,o),typeof G===i?z:z.substring(0,U)},B=function(z,G){for(var x=0,M,K,re,oe,ne,Fe;x<G.length&&!ne;){var kn=G[x],We=G[x+1];for(M=K=0;M<kn.length&&!ne&&kn[M];)if(ne=kn[M++].exec(z),ne)for(re=0;re<We.length;re++)Fe=ne[++K],oe=We[re],typeof oe===c&&oe.length>0?oe.length===2?typeof oe[1]==l?this[oe[0]]=oe[1].call(this,Fe):this[oe[0]]=oe[1]:oe.length===3?typeof oe[1]===l&&!(oe[1].exec&&oe[1].test)?this[oe[0]]=Fe?oe[1].call(this,Fe,oe[2]):a:this[oe[0]]=Fe?Fe.replace(oe[1],oe[2]):a:oe.length===4&&(this[oe[0]]=Fe?oe[3].call(this,Fe.replace(oe[1],oe[2])):a):this[oe]=Fe||a;x+=2}},q=function(z,G){for(var x in G)if(typeof G[x]===c&&G[x].length>0){for(var M=0;M<G[x].length;M++)if(j(G[x][M],z))return x===r?a:x}else if(j(G[x],z))return x===r?a:x;return z},T={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[k,[v,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[k,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,k],[/opios[\/ ]+([\w\.]+)/i],[k,[v,ae+" Mini"]],[/\bopr\/([\w\.]+)/i],[k,[v,ae]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[v,k],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[k,[v,"UC"+ve]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[k,[v,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[k,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[k,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[k,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[k,[v,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure "+ve],k],[/\bfocus\/([\w\.]+)/i],[k,[v,he+" Focus"]],[/\bopt\/([\w\.]+)/i],[k,[v,ae+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[k,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[k,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[k,[v,ae+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[k,[v,"MIUI "+ve]],[/fxios\/([-\w\.]+)/i],[k,[v,he]],[/\bqihu|(qi?ho?o?|360)browser/i],[[v,"360 "+ve]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1 "+ve],k],[/(comodo_dragon)\/([\w\.]+)/i],[[v,/_/g," "],k],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[v,k],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,qe],k],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[v,k],[/\bgsa\/([\w\.]+) .*safari\//i],[k,[v,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[k,[v,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[k,[v,me+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,me+" WebView"],k],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[k,[v,"Android "+ve]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,k],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[k,[v,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[k,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[k,q,T]],[/(webkit|khtml)\/([\w\.]+)/i],[v,k],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],k],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[k,[v,he+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[v,k],[/(cobalt)\/([\w\.]+)/i],[v,[k,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[S,"amd64"]],[/(ia32(?=;))/i],[[S,C]],[/((?:i[346]|x)86)[;\)]/i],[[S,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[S,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[S,"armhf"]],[/windows (ce|mobile); ppc;/i],[[S,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[S,/ower/,o,C]],[/(sun4\w)[;\)]/i],[[S,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[S,C]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[g,[m,Ee],[w,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[g,[m,Ee],[w,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[g,[m,ee],[w,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[g,[m,ee],[w,_]],[/(macintosh);/i],[g,[m,ee]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[g,[m,pe],[w,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[g,[m,N],[w,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[g,[m,N],[w,y]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[g,/_/g," "],[m,fe],[w,y]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[g,/_/g," "],[m,fe],[w,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[g,[m,"OPPO"],[w,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[g,[m,"Vivo"],[w,y]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[g,[m,"Realme"],[w,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[g,[m,D],[w,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[g,[m,D],[w,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[g,[m,Y],[w,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[g,[m,Y],[w,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[g,[m,"Lenovo"],[w,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[g,/_/g," "],[m,"Nokia"],[w,y]],[/(pixel c)\b/i],[g,[m,A],[w,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[g,[m,A],[w,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[g,[m,je],[w,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[g,"Xperia Tablet"],[m,je],[w,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[g,[m,"OnePlus"],[w,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[g,[m,R],[w,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[g,/(.+)/g,"Fire Phone $1"],[m,R],[w,y]],[/(playbook);[-\w\),; ]+(rim)/i],[g,m,[w,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[g,[m,ye],[w,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[g,[m,ue],[w,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[g,[m,ue],[w,y]],[/(nexus 9)/i],[g,[m,"HTC"],[w,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[g,/_/g," "],[w,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[g,[m,"Acer"],[w,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[g,[m,"Meizu"],[w,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,g,[w,y]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,g,[w,_]],[/(surface duo)/i],[g,[m,ie],[w,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[g,[m,"Fairphone"],[w,y]],[/(u304aa)/i],[g,[m,"AT&T"],[w,y]],[/\bsie-(\w*)/i],[g,[m,"Siemens"],[w,y]],[/\b(rct\w+) b/i],[g,[m,"RCA"],[w,_]],[/\b(venue[\d ]{2,7}) b/i],[g,[m,"Dell"],[w,_]],[/\b(q(?:mv|ta)\w+) b/i],[g,[m,"Verizon"],[w,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[g,[m,"Barnes & Noble"],[w,_]],[/\b(tm\d{3}\w+) b/i],[g,[m,"NuVision"],[w,_]],[/\b(k88) b/i],[g,[m,"ZTE"],[w,_]],[/\b(nx\d{3}j) b/i],[g,[m,"ZTE"],[w,y]],[/\b(gen\d{3}) b.+49h/i],[g,[m,"Swiss"],[w,y]],[/\b(zur\d{3}) b/i],[g,[m,"Swiss"],[w,_]],[/\b((zeki)?tb.*\b) b/i],[g,[m,"Zeki"],[w,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],g,[w,_]],[/\b(ns-?\w{0,9}) b/i],[g,[m,"Insignia"],[w,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[g,[m,"NextBook"],[w,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],g,[w,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],g,[w,y]],[/\b(ph-1) /i],[g,[m,"Essential"],[w,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[g,[m,"Envizen"],[w,_]],[/\b(trio[-\w\. ]+) b/i],[g,[m,"MachSpeed"],[w,_]],[/\btu_(1491) b/i],[g,[m,"Rotor"],[w,_]],[/(shield[\w ]+) b/i],[g,[m,"Nvidia"],[w,_]],[/(sprint) (\w+)/i],[m,g,[w,y]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[m,ie],[w,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[g,[m,Ie],[w,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[g,[m,Ie],[w,y]],[/smart-tv.+(samsung)/i],[m,[w,E]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[m,Ee],[w,E]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,Y],[w,E]],[/(apple) ?tv/i],[m,[g,ee+" TV"],[w,E]],[/crkey/i],[[g,me+"cast"],[m,A],[w,E]],[/droid.+aft(\w)( bui|\))/i],[g,[m,R],[w,E]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[g,[m,pe],[w,E]],[/(bravia[\w ]+)( bui|\))/i],[g,[m,je],[w,E]],[/(mitv-\w{5}) bui/i],[g,[m,fe],[w,E]],[/Hbbtv.*(technisat) (.*);/i],[m,g,[w,E]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,O],[g,O],[w,E]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,E]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,g,[w,b]],[/droid.+; (shield) bui/i],[g,[m,"Nvidia"],[w,b]],[/(playstation [345portablevi]+)/i],[g,[m,je],[w,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[g,[m,ie],[w,b]],[/((pebble))app/i],[m,g,[w,I]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[g,[m,ee],[w,I]],[/droid.+; (glass) \d/i],[g,[m,A],[w,I]],[/droid.+; (wt63?0{2,3})\)/i],[g,[m,Ie],[w,I]],[/(quest( 2| pro)?)/i],[g,[m,qe],[w,I]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[w,F]],[/(aeobc)\b/i],[g,[m,R],[w,F]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[g,[w,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[g,[w,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,y]],[/(android[-\w\. ]{0,9});.+buil/i],[g,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[k,[v,_e+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[k,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,k],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[k,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,k],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[v,[k,q,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[v,"Windows"],[k,q,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[k,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,Be],[k,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[k,v],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[v,k],[/\(bb(10);/i],[k,[v,ye]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[k,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[k,[v,he+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[k,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[k,[v,"watchOS"]],[/crkey\/([\d\.]+)/i],[k,[v,me+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,$e],k],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,k],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],k],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,k]]},L=function(z,G){if(typeof z===c&&(G=z,z=a),!(this instanceof L))return new L(z,G).getResult();var x=typeof t!==i&&t.navigator?t.navigator:a,M=z||(x&&x.userAgent?x.userAgent:o),K=x&&x.userAgentData?x.userAgentData:a,re=G?Ge($,G):$,oe=x&&x.userAgent==M;return this.getBrowser=function(){var ne={};return ne[v]=a,ne[k]=a,B.call(ne,M,re.browser),ne[d]=P(ne[k]),oe&&x&&x.brave&&typeof x.brave.isBrave==l&&(ne[v]="Brave"),ne},this.getCPU=function(){var ne={};return ne[S]=a,B.call(ne,M,re.cpu),ne},this.getDevice=function(){var ne={};return ne[m]=a,ne[g]=a,ne[w]=a,B.call(ne,M,re.device),oe&&!ne[w]&&K&&K.mobile&&(ne[w]=y),oe&&ne[g]=="Macintosh"&&x&&typeof x.standalone!==i&&x.maxTouchPoints&&x.maxTouchPoints>2&&(ne[g]="iPad",ne[w]=_),ne},this.getEngine=function(){var ne={};return ne[v]=a,ne[k]=a,B.call(ne,M,re.engine),ne},this.getOS=function(){var ne={};return ne[v]=a,ne[k]=a,B.call(ne,M,re.os),oe&&!ne[v]&&K&&K.platform!="Unknown"&&(ne[v]=K.platform.replace(/chrome os/i,$e).replace(/macos/i,Be)),ne},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return M},this.setUA=function(ne){return M=typeof ne===h&&ne.length>U?O(ne,U):ne,this},this.setUA(M),this};L.VERSION=s,L.BROWSER=f([v,k,d]),L.CPU=f([S]),L.DEVICE=f([g,m,w,b,y,E,_,I,F]),L.ENGINE=L.OS=f([v,k]),e.exports&&(n=e.exports=L),n.UAParser=L;var V=typeof t!==i&&(t.jQuery||t.Zepto);if(V&&!V.ua){var Z=new L;V.ua=Z.getResult(),V.ua.get=function(){return Z.getUA()},V.ua.set=function(z){Z.setUA(z);var G=Z.getResult();for(var x in G)V.ua[x]=G[x]}}})(typeof window=="object"?window:$s)})(Ns,Ns.exports);var by=Ns.exports;const my=fo(by),yy={browserWindow:!1,code:"",codeBlockRadius:"0.5rem",copyButton:!0,copyIcons:!0,copyTab:!0,copyFailedText:"Copy failed!",copyText:"Copy Code",copySuccessText:"Copied!",floatingTabs:!0,height:"auto",highlightjs:!1,indent:2,label:"",lang:"javascript",maxHeight:"auto",persistentCopyButton:!1,prismjs:!1,prismPlugin:!1,runTab:!1,runText:"Run",tabGap:"0.25rem",tabs:!1,theme:"neon-bunny"},He="v-code-block";function Ti(e){return e===""||e==="prism"?"default":e}function Ai(e){return e?"highlightjs":"prism"}const vy=e=>{const{isMobile:n,isPrism:t}=e;return{[`${He}`]:!0,[`${He}-mb-5`]:!0,[`${He}--mobile`]:p(n),[`${He}--prismjs`]:p(t),[`${He}--highlightjs`]:!p(t)}},jy=e=>{const{copyStatus:n,isMobile:t,persistentCopyButton:a}=e;return{[`${He}--code-copy-button`]:!0,[`${He}--code-copy-button-mobile`]:p(t),[`${He}--code-copy-button-persist`]:p(a),[`${He}--code-copy-button-status-${p(n)}`]:!0}},_y=e=>{const{copyStatus:n,highlightjs:t,useTheme:a}=e,s=Ai(p(t)),o=Ti(p(a));return{[`${He}--button-copy-icon-status-${p(n)}`]:!0,[`${He}--me-1`]:!0,[`${He}--tab-${s}-${o}-icon-status-${p(n)}`]:!0,[`${He}--tab-${s}-${o}-icon`]:!0}},wy=e=>{const{isMobile:n}=e;return{[`${He}--label`]:!0,[`${He}--label-mobile`]:p(n)}},ky=e=>{const{highlightjs:n,useTheme:t}=e,a=Ai(p(n)),s=Ti(p(t));return{[`${He}--tab-${s}`]:!0,[`${He}--tab-${a}-${s}`]:!0}};function $a(e,n="px"){if(!(e==null||e===""||typeof e>"u"))return+e?`${Number(e)}${n}`:String(e)}const xy=e=>{const{isLoading:n,useTheme:t}=e;return{width:p(t)==="coy"&&n===!1?"100%":""}},Ey=e=>{const{floatingTabs:n,tabGap:t}=e;return{bottom:n?"1px":"0",gap:$a(p(t))}},Cy=e=>{const{copyTab:n,height:t,maxHeight:a,radius:s,runTab:o,tabs:r,useTheme:l}=e;let i=`${s} 0 ${s} ${s} !important`;(!p(r)||!p(n)&&!p(o))&&(i=s);const c=p(l)!=="funky"?"flex":"block";return{borderRadius:i,display:c,height:$a(p(t)),maxHeight:$a(p(a)),overflow:"auto"}},Sy=e=>{const{tabGap:n}=e;return{gap:$a(p(n))}},Ty=u("path",{d:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"},null,-1),Ay=[Ty],Oy=u("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1),$y=[Oy],Ny=u("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"},null,-1),My=[Ny],Er=jt({__name:"StatusIcons",props:{icon:{type:String,required:!0}},setup(e){return(n,t)=>e.icon==="copy"?(X(),te("svg",At({key:0},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),Ay,16)):e.icon==="success"?(X(),te("svg",At({key:1},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),$y,16)):e.icon==="failed"?(X(),te("svg",At({key:2},n.$attrs,{viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"}),My,16)):en("",!0)}});function Iy(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const Ry={class:"v-code-block--button-copy"},Py={class:"v-code-block--button-run"},Ly={class:"v-code-block--code"},By=["textContent"],Fy=["innerHTML"],Dy="11.8.0",zy="1.29.0",Uy="1.9.0",Hy=jt({__name:"CodeBlock",props:Nu({browserWindow:{type:Boolean},code:{},codeBlockRadius:{},copyButton:{type:Boolean},copyIcons:{type:Boolean},copyTab:{type:Boolean},copyFailedText:{},copyText:{},copySuccessText:{},floatingTabs:{type:Boolean},globalOptions:{type:Boolean},height:{},highlightjs:{type:Boolean},indent:{},label:{},lang:{},languages:{},maxHeight:{},persistentCopyButton:{type:Boolean},prismjs:{type:Boolean},prismPlugin:{type:Boolean},runTab:{type:Boolean},runText:{},tabGap:{},tabs:{type:Boolean},theme:{type:[String,Boolean]}},{...yy}),emits:["run","update:copy-status"],setup(e,{emit:n}){const t=e,a=Ou();let s,o;const r=we(null),l=we("copy"),i=we(""),c=we(!1),h=we(!1),d=we(!1),g=we(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${Dy}/build/styles`),v=we(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${zy}/themes`),w=we(`https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@${Uy}/themes`),m=we(""),k=we(""),S=we(""),b=De(()=>{let D="";return t.highlightjs&&(D=m.value),t.prismjs&&t.prismPlugin&&(D=r.value),D}),y=De(()=>vy({isMobile:d,isPrism:t.prismjs})),_=De(()=>jy({copyStatus:l,isMobile:d,persistentCopyButton:t.persistentCopyButton})),E=De(()=>_y({copyStatus:l,highlightjs:t.highlightjs,useTheme:S})),I=De(()=>wy({isMobile:d})),F=De(()=>ky({highlightjs:t.highlightjs,useTheme:S})),U=De(()=>xy({isLoading:h,useTheme:S})),R=De(()=>Ey({floatingTabs:t.floatingTabs,tabGap:t.tabGap})),ee=De(()=>Cy({copyTab:t.copyTab,height:t.height,maxHeight:t.maxHeight,radius:t.codeBlockRadius,runTab:t.runTab,tabs:t.tabs,useTheme:S})),ue=De(()=>Sy({tabGap:t.tabGap}));ut(t,()=>{t.code&&Y(),(t.theme||t.prismjs||t.highlightjs)&&(ye(),S.value=t.theme,_e()),t.copyText&&(i.value=t.copyText),t.runText&&(k.value=t.runText)}),so(()=>{i.value=t.copyText,k.value=t.runText,ye()}),Rl(()=>{S.value=t.theme,_e(),he(),Y()});function ye(){if(!t.prismjs&&!t.highlightjs)throw new Error("[vue3-code-block]: You must set either the prismjs or highlightjs props.");if(t.prismjs&&t.highlightjs)throw new Error("[vue3-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");t.highlightjs&&t.prismPlugin&&console.warn("[vue3-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue3-code-block component.")}function ve(){if(t.lang==="json"){const D=t.code.toString();r.value=JSON.stringify(JSON.parse(D),null,t.indent);return}r.value=t.code}function me(){c.value||(c.value=!0,navigator.clipboard.writeText(r.value).then(()=>{i.value=t.copySuccessText,l.value="success",n("update:copy-status",l.value)},D=>{i.value=t.copyFailedText,l.value="failed",n("update:copy-status",l.value),console.error("Copy to clipboard failed: ",D)}),setTimeout(()=>{i.value=t.copyText,l.value="copy",n("update:copy-status",l.value),c.value=!1},3e3))}function _e(){let D="";const ae=t.highlightjs?"highlightjs":"prism",Ee=document.getElementsByTagName("head")[0],pe=document.createElement("style"),je=document.body.getAttribute("data-v-code-block-theme");let fe=`v-code-block--theme-${S.value}-${ae}`,Ie=!0,qe=!0,$e="",Be="";if(fe=A(ae,fe),je===S.value||je===fe||typeof S.value=="boolean")return;switch(document.body.setAttribute("data-v-code-block-theme",fe),pe.setAttribute("type","text/css"),pe.setAttribute("data-theme-id",fe),pe.setAttribute("data-theme","v-code-block--theme-sheet"),S.value){case"neon-bunny":D=Ef,qe=!1,Ie=!1,ae==="highlightjs"&&(D=Sf);break;case"neon-bunny-carrot":D=Cf,qe=!1,Ie=!1,ae==="highlightjs"&&(D=Tf);break}if(!qe&&!Ie){N(),pe.appendChild(document.createTextNode(D)),Ee.appendChild(pe);return}const Ge=A(ae,S.value);switch(ae){case"highlightjs":$e=`${Ge}.min.css`,Be=`${g.value}/${$e}`;break;case"prism":$e=`${Ge}.css`,S.value==="default"?Be=`${v.value}/prism.css`:S.value.includes("themes-")?Be=`${w.value}/${$e}`:Be=`${v.value}/prism-${$e}`;break;default:$e="";break}h.value=!0,fetch(Be).then(f=>f.text()).then(f=>{N(),pe.appendChild(document.createTextNode(f)),Ee.appendChild(pe),h.value=!1}).catch(f=>{const j=t.highlightjs?"Highlight.js":"PrismJS";console.error(`${j} CDN Error:`,f)})}function he(){const ae=my().device;d.value=ae.type==="mobile"}window.addEventListener("orientationchange",()=>{he()});function A(D,ae,Ee=!1){let pe=ae;return D==="prism"&&(pe=pe.replace("themes-","prism-"),pe=pe.replace("prism-prism-","prism-"),pe=pe.replace("theme-prism-","theme-"),Ee&&(pe=pe.replace("prism-prism-",""),pe=pe.replace("prism-",""))),D==="highlightjs"&&(pe=pe.replace("base16-","base16/")),pe}function N(){const D=document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');D.length>0&&D.forEach(ae=>{ae.remove()})}function Y(){ve(),t.highlightjs&&xr(()=>import("./index-df05bfe4.js"),[]).then(D=>{s=D.default,s.registerLanguage("plain",Iy),m.value=s.highlight(r.value,{language:t.lang}).value}).catch(D=>{console.error("Highlight.js import:",{err:D})}),t.prismjs&&xr(()=>Promise.resolve().then(()=>Zg),void 0).then(D=>{o=D.default,m.value=o.highlight(r.value,o.languages[t.lang],t.lang)}).catch(D=>{console.error("PrismJS import:",{err:D})})}function ie(){n("run")}return(D,ae)=>(X(),te("div",{class:Ce(p(y))},[D.label||D.tabs||p(a).label||p(a).tabs?(X(),te("div",{key:0,class:"v-code-block--header",style:An(p(R))},[u("div",{class:Ce(["v-code-block--label v-code-block--pb-1",p(I)])},[p(a).label?os(D.$slots,"label",{key:0},void 0,!0):(X(),te(Oe,{key:1},[ce(ke(t.label),1)],64))],2),u("div",{class:"v-code-block--tabs",style:An(p(ue))},[p(a).tabs?os(D.$slots,"tabs",{key:0},void 0,!0):(X(),te(Oe,{key:1},[D.copyTab&&D.tabs?(X(),te("div",{key:0,class:Ce(["v-code-block--tab",p(F)]),onClick:me},[u("div",Ry,[D.copyIcons?(X(),Dt(Er,{key:0,class:Ce(["v-code-block--button-copy-icon",p(E)]),icon:p(l)},null,8,["class","icon"])):en("",!0),ce(" "+ke(p(i)),1)])],2)):en("",!0),D.runTab&&D.tabs&&!p(d)?(X(),te("div",{key:1,class:Ce(["v-code-block--tab",p(F)]),onClick:ie},[u("div",Py,ke(p(k)),1)],2)):en("",!0)],64))],4)],4)):en("",!0),u("div",Ly,[u("div",{class:Ce(["v-code-block--code-copy-button",p(_)]),onClick:me},[p(a).copyButton?os(D.$slots,"copyButton",{key:0},void 0,!0):(X(),te(Oe,{key:1},[D.copyButton?(X(),Dt(Er,{key:0,class:Ce(["v-code-block--button-copy-icon",p(E)]),icon:p(l)},null,8,["class","icon"])):en("",!0)],64))],2),u("pre",At(D.$attrs,{class:`language-${t.lang}`,style:p(ee)}),[ce("				"),D.prismPlugin?(X(),te("code",{key:0,class:Ce(`language-${t.lang} ${D.browserWindow?"v-code-block--code-browser":""} ${D.highlightjs?"hljs":""}`),style:An(p(U)),textContent:ke(p(b))},null,14,By)):(X(),te("code",{key:1,class:Ce(`language-${t.lang} ${D.browserWindow?"v-code-block--code-browser":""} ${D.highlightjs?"hljs":""}`),style:An(p(U)),innerHTML:p(m)},null,14,Fy)),ce(`
			`)],16)])],2))}});const jo=go(Hy,[["__scopeId","data-v-d71f4907"]]);const qy=e=>{e.component("CodeBlock",jo)};jo.install=qy;function Cr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Cr(Object(t),!0).forEach(function(a){Le(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cr(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Na(e){"@babel/helpers - typeof";return Na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Na(e)}function Wy(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Sr(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Vy(e,n,t){return n&&Sr(e.prototype,n),t&&Sr(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _o(e,n){return Ky(e)||Jy(e,n)||Oi(e,n)||Xy()}function Jt(e){return Gy(e)||Yy(e)||Oi(e)||Zy()}function Gy(e){if(Array.isArray(e))return Ms(e)}function Ky(e){if(Array.isArray(e))return e}function Yy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jy(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],s=!0,o=!1,r,l;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(a.push(r.value),!(n&&a.length===n));s=!0);}catch(i){o=!0,l=i}finally{try{!s&&t.return!=null&&t.return()}finally{if(o)throw l}}return a}}function Oi(e,n){if(e){if(typeof e=="string")return Ms(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ms(e,n)}}function Ms(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Zy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tr=function(){},wo={},$i={},Ni=null,Mi={mark:Tr,measure:Tr};try{typeof window<"u"&&(wo=window),typeof document<"u"&&($i=document),typeof MutationObserver<"u"&&(Ni=MutationObserver),typeof performance<"u"&&(Mi=performance)}catch{}var Qy=wo.navigator||{},Ar=Qy.userAgent,Or=Ar===void 0?"":Ar,Pn=wo,Ae=$i,$r=Ni,la=Mi;Pn.document;var wn=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",Ii=~Or.indexOf("MSIE")||~Or.indexOf("Trident/"),ia,ca,ua,ha,ga,yn="___FONT_AWESOME___",Is=16,Ri="fa",Pi="svg-inline--fa",Xn="data-fa-i2svg",Rs="data-fa-pseudo-element",ev="data-fa-pseudo-element-pending",ko="data-prefix",xo="data-icon",Nr="fontawesome-i2svg",nv="async",tv=["HTML","HEAD","STYLE","SCRIPT"],Li=function(){try{return!0}catch{return!1}}(),Te="classic",Ne="sharp",Eo=[Te,Ne];function Zt(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[Te]}})}var qt=Zt((ia={},Le(ia,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Le(ia,Ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ia)),Wt=Zt((ca={},Le(ca,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Le(ca,Ne,{solid:"fass",regular:"fasr",light:"fasl"}),ca)),Vt=Zt((ua={},Le(ua,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Le(ua,Ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ua)),av=Zt((ha={},Le(ha,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Le(ha,Ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ha)),sv=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Bi="fa-layers-text",ov=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rv=Zt((ga={},Le(ga,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Le(ga,Ne,{900:"fass",400:"fasr",300:"fasl"}),ga)),Fi=[1,2,3,4,5,6,7,8,9,10],lv=Fi.concat([11,12,13,14,15,16,17,18,19,20]),iv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Wt[Te]).map(Gt.add.bind(Gt));Object.keys(Wt[Ne]).map(Gt.add.bind(Gt));var cv=[].concat(Eo,Jt(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(Fi.map(function(e){return"".concat(e,"x")})).concat(lv.map(function(e){return"w-".concat(e)})),$t=Pn.FontAwesomeConfig||{};function uv(e){var n=Ae.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function hv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ae&&typeof Ae.querySelector=="function"){var gv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gv.forEach(function(e){var n=_o(e,2),t=n[0],a=n[1],s=hv(uv(t));s!=null&&($t[a]=s)})}var Di={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ri,replacementClass:Pi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$t.familyPrefix&&($t.cssPrefix=$t.familyPrefix);var bt=J(J({},Di),$t);bt.autoReplaceSvg||(bt.observeMutations=!1);var Q={};Object.keys(Di).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(t){bt[e]=t,Nt.forEach(function(a){return a(Q)})},get:function(){return bt[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(n){bt.cssPrefix=n,Nt.forEach(function(t){return t(Q)})},get:function(){return bt.cssPrefix}});Pn.FontAwesomeConfig=Q;var Nt=[];function pv(e){return Nt.push(e),function(){Nt.splice(Nt.indexOf(e),1)}}var En=Is,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fv(e){if(!(!e||!wn)){var n=Ae.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=Ae.head.childNodes,a=null,s=t.length-1;s>-1;s--){var o=t[s],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=o)}return Ae.head.insertBefore(n,a),e}}var dv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var e=12,n="";e-- >0;)n+=dv[Math.random()*62|0];return n}function _t(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Co(e){return e.classList?_t(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function zi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bv(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(zi(e[t]),'" ')},"").trim()}function Qa(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function So(e){return e.size!==pn.size||e.x!==pn.x||e.y!==pn.y||e.rotate!==pn.rotate||e.flipX||e.flipY}function mv(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,s={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),r="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),i={transform:"".concat(o," ").concat(r," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:i,path:c}}function yv(e){var n=e.transform,t=e.width,a=t===void 0?Is:t,s=e.height,o=s===void 0?Is:s,r=e.startCentered,l=r===void 0?!1:r,i="";return l&&Ii?i+="translate(".concat(n.x/En-a/2,"em, ").concat(n.y/En-o/2,"em) "):l?i+="translate(calc(-50% + ".concat(n.x/En,"em), calc(-50% + ").concat(n.y/En,"em)) "):i+="translate(".concat(n.x/En,"em, ").concat(n.y/En,"em) "),i+="scale(".concat(n.size/En*(n.flipX?-1:1),", ").concat(n.size/En*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var vv=`:root, :host {
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
}`;function Ui(){var e=Ri,n=Pi,t=Q.cssPrefix,a=Q.replacementClass,s=vv;if(t!==e||a!==n){var o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");s=s.replace(o,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(l,".".concat(a))}return s}var Mr=!1;function hs(){Q.autoAddCss&&!Mr&&(fv(Ui()),Mr=!0)}var jv={mixout:function(){return{dom:{css:Ui,insertCss:hs}}},hooks:function(){return{beforeDOMElementCreation:function(){hs()},beforeI2svg:function(){hs()}}}},vn=Pn||{};vn[yn]||(vn[yn]={});vn[yn].styles||(vn[yn].styles={});vn[yn].hooks||(vn[yn].hooks={});vn[yn].shims||(vn[yn].shims=[]);var sn=vn[yn],Hi=[],_v=function e(){Ae.removeEventListener("DOMContentLoaded",e),Ma=1,Hi.map(function(n){return n()})},Ma=!1;wn&&(Ma=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),Ma||Ae.addEventListener("DOMContentLoaded",_v));function wv(e){wn&&(Ma?setTimeout(e,0):Hi.push(e))}function Xt(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,s=e.children,o=s===void 0?[]:s;return typeof e=="string"?zi(e):"<".concat(n," ").concat(bv(a),">").concat(o.map(Xt).join(""),"</").concat(n,">")}function Ir(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var kv=function(n,t){return function(a,s,o,r){return n.call(t,a,s,o,r)}},gs=function(n,t,a,s){var o=Object.keys(n),r=o.length,l=s!==void 0?kv(t,s):t,i,c,h;for(a===void 0?(i=1,h=n[o[0]]):(i=0,h=a);i<r;i++)c=o[i],h=l(h,n[c],c,n);return h};function xv(e){for(var n=[],t=0,a=e.length;t<a;){var s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<a){var o=e.charCodeAt(t++);(o&64512)==56320?n.push(((s&1023)<<10)+(o&1023)+65536):(n.push(s),t--)}else n.push(s)}return n}function Ps(e){var n=xv(e);return n.length===1?n[0].toString(16):null}function Ev(e,n){var t=e.length,a=e.charCodeAt(n),s;return a>=55296&&a<=56319&&t>n+1&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function Rr(e){return Object.keys(e).reduce(function(n,t){var a=e[t],s=!!a.icon;return s?n[a.iconName]=a.icon:n[t]=a,n},{})}function Ls(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,s=a===void 0?!1:a,o=Rr(n);typeof sn.hooks.addPack=="function"&&!s?sn.hooks.addPack(e,Rr(n)):sn.styles[e]=J(J({},sn.styles[e]||{}),o),e==="fas"&&Ls("fa",n)}var pa,fa,da,ot=sn.styles,Cv=sn.shims,Sv=(pa={},Le(pa,Te,Object.values(Vt[Te])),Le(pa,Ne,Object.values(Vt[Ne])),pa),To=null,qi={},Wi={},Vi={},Gi={},Ki={},Tv=(fa={},Le(fa,Te,Object.keys(qt[Te])),Le(fa,Ne,Object.keys(qt[Ne])),fa);function Av(e){return~cv.indexOf(e)}function Ov(e,n){var t=n.split("-"),a=t[0],s=t.slice(1).join("-");return a===e&&s!==""&&!Av(s)?s:null}var Yi=function(){var n=function(o){return gs(ot,function(r,l,i){return r[i]=gs(l,o,{}),r},{})};qi=n(function(s,o,r){if(o[3]&&(s[o[3]]=r),o[2]){var l=o[2].filter(function(i){return typeof i=="number"});l.forEach(function(i){s[i.toString(16)]=r})}return s}),Wi=n(function(s,o,r){if(s[r]=r,o[2]){var l=o[2].filter(function(i){return typeof i=="string"});l.forEach(function(i){s[i]=r})}return s}),Ki=n(function(s,o,r){var l=o[2];return s[r]=r,l.forEach(function(i){s[i]=r}),s});var t="far"in ot||Q.autoFetchSvg,a=gs(Cv,function(s,o){var r=o[0],l=o[1],i=o[2];return l==="far"&&!t&&(l="fas"),typeof r=="string"&&(s.names[r]={prefix:l,iconName:i}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:l,iconName:i}),s},{names:{},unicodes:{}});Vi=a.names,Gi=a.unicodes,To=es(Q.styleDefault,{family:Q.familyDefault})};pv(function(e){To=es(e.styleDefault,{family:Q.familyDefault})});Yi();function Ao(e,n){return(qi[e]||{})[n]}function $v(e,n){return(Wi[e]||{})[n]}function Gn(e,n){return(Ki[e]||{})[n]}function Ji(e){return Vi[e]||{prefix:null,iconName:null}}function Nv(e){var n=Gi[e],t=Ao("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ln(){return To}var Oo=function(){return{prefix:null,iconName:null,rest:[]}};function es(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?Te:t,s=qt[a][e],o=Wt[a][e]||Wt[a][s],r=e in sn.styles?e:null;return o||r||null}var Pr=(da={},Le(da,Te,Object.keys(Vt[Te])),Le(da,Ne,Object.keys(Vt[Ne])),da);function ns(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,s=a===void 0?!1:a,o=(n={},Le(n,Te,"".concat(Q.cssPrefix,"-").concat(Te)),Le(n,Ne,"".concat(Q.cssPrefix,"-").concat(Ne)),n),r=null,l=Te;(e.includes(o[Te])||e.some(function(c){return Pr[Te].includes(c)}))&&(l=Te),(e.includes(o[Ne])||e.some(function(c){return Pr[Ne].includes(c)}))&&(l=Ne);var i=e.reduce(function(c,h){var d=Ov(Q.cssPrefix,h);if(ot[h]?(h=Sv[l].includes(h)?av[l][h]:h,r=h,c.prefix=h):Tv[l].indexOf(h)>-1?(r=h,c.prefix=es(h,{family:l})):d?c.iconName=d:h!==Q.replacementClass&&h!==o[Te]&&h!==o[Ne]&&c.rest.push(h),!s&&c.prefix&&c.iconName){var g=r==="fa"?Ji(c.iconName):{},v=Gn(c.prefix,c.iconName);g.prefix&&(r=null),c.iconName=g.iconName||v||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ot.far&&ot.fas&&!Q.autoFetchSvg&&(c.prefix="fas")}return c},Oo());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&l===Ne&&(ot.fass||Q.autoFetchSvg)&&(i.prefix="fass",i.iconName=Gn(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||r==="fa")&&(i.prefix=Ln()||"fas"),i}var Mv=function(){function e(){Wy(this,e),this.definitions={}}return Vy(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];var r=s.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(l){t.definitions[l]=J(J({},t.definitions[l]||{}),r[l]),Ls(l,r[l]);var i=Vt[Te][l];i&&Ls(i,r[l]),Yi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(o){var r=s[o],l=r.prefix,i=r.iconName,c=r.icon,h=c[2];t[l]||(t[l]={}),h.length>0&&h.forEach(function(d){typeof d=="string"&&(t[l][d]=c)}),t[l][i]=c}),t}}]),e}(),Lr=[],rt={},ht={},Iv=Object.keys(ht);function Rv(e,n){var t=n.mixoutsTo;return Lr=e,rt={},Object.keys(ht).forEach(function(a){Iv.indexOf(a)===-1&&delete ht[a]}),Lr.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(r){typeof s[r]=="function"&&(t[r]=s[r]),Na(s[r])==="object"&&Object.keys(s[r]).forEach(function(l){t[r]||(t[r]={}),t[r][l]=s[r][l]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(r){rt[r]||(rt[r]=[]),rt[r].push(o[r])})}a.provides&&a.provides(ht)}),t}function Bs(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),s=2;s<t;s++)a[s-2]=arguments[s];var o=rt[e]||[];return o.forEach(function(r){n=r.apply(null,[n].concat(a))}),n}function Qn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var s=rt[e]||[];s.forEach(function(o){o.apply(null,t)})}function jn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ht[e]?ht[e].apply(null,n):void 0}function Fs(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Ln();if(n)return n=Gn(t,n)||n,Ir(Zi.definitions,t,n)||Ir(sn.styles,t,n)}var Zi=new Mv,Pv=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,Qn("noAuto")},Lv={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wn?(Qn("beforeI2svg",n),jn("pseudoElements2svg",n),jn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,wv(function(){Fv({autoReplaceSvgRoot:t}),Qn("watch",n)})}},Bv={icon:function(n){if(n===null)return null;if(Na(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Gn(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=es(n[0]);return{prefix:a,iconName:Gn(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(Q.cssPrefix,"-"))>-1||n.match(sv))){var s=ns(n.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ln(),iconName:Gn(s.prefix,s.iconName)||s.iconName}}if(typeof n=="string"){var o=Ln();return{prefix:o,iconName:Gn(o,n)||n}}}},nn={noAuto:Pv,config:Q,dom:Lv,parse:Bv,library:Zi,findIconDefinition:Fs,toHtml:Xt},Fv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?Ae:t;(Object.keys(sn.styles).length>0||Q.autoFetchSvg)&&wn&&Q.autoReplaceSvg&&nn.dom.i2svg({node:a})};function ts(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Xt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(wn){var a=Ae.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Dv(e){var n=e.children,t=e.main,a=e.mask,s=e.attributes,o=e.styles,r=e.transform;if(So(r)&&t.found&&!a.found){var l=t.width,i=t.height,c={x:l/i/2,y:.5};s.style=Qa(J(J({},o),{},{"transform-origin":"".concat(c.x+r.x/16,"em ").concat(c.y+r.y/16,"em")}))}return[{tag:"svg",attributes:s,children:n}]}function zv(e){var n=e.prefix,t=e.iconName,a=e.children,s=e.attributes,o=e.symbol,r=o===!0?"".concat(n,"-").concat(Q.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},s),{},{id:r}),children:a}]}]}function $o(e){var n=e.icons,t=n.main,a=n.mask,s=e.prefix,o=e.iconName,r=e.transform,l=e.symbol,i=e.title,c=e.maskId,h=e.titleId,d=e.extra,g=e.watchable,v=g===void 0?!1:g,w=a.found?a:t,m=w.width,k=w.height,S=s==="fak",b=[Q.replacementClass,o?"".concat(Q.cssPrefix,"-").concat(o):""].filter(function(R){return d.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(d.classes).join(" "),y={children:[],attributes:J(J({},d.attributes),{},{"data-prefix":s,"data-icon":o,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(k)})},_=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/k*16*.0625,"em")}:{};v&&(y.attributes[Xn]=""),i&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(h||Kt())},children:[i]}),delete y.attributes.title);var E=J(J({},y),{},{prefix:s,iconName:o,main:t,mask:a,maskId:c,transform:r,symbol:l,styles:J(J({},_),d.styles)}),I=a.found&&t.found?jn("generateAbstractMask",E)||{children:[],attributes:{}}:jn("generateAbstractIcon",E)||{children:[],attributes:{}},F=I.children,U=I.attributes;return E.children=F,E.attributes=U,l?zv(E):Dv(E)}function Br(e){var n=e.content,t=e.width,a=e.height,s=e.transform,o=e.title,r=e.extra,l=e.watchable,i=l===void 0?!1:l,c=J(J(J({},r.attributes),o?{title:o}:{}),{},{class:r.classes.join(" ")});i&&(c[Xn]="");var h=J({},r.styles);So(s)&&(h.transform=yv({transform:s,startCentered:!0,width:t,height:a}),h["-webkit-transform"]=h.transform);var d=Qa(h);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Uv(e){var n=e.content,t=e.title,a=e.extra,s=J(J(J({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),o=Qa(a.styles);o.length>0&&(s.style=o);var r=[];return r.push({tag:"span",attributes:s,children:[n]}),t&&r.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),r}var ps=sn.styles;function Ds(e){var n=e[0],t=e[1],a=e.slice(4),s=_o(a,1),o=s[0],r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:t,icon:r}}var Hv={found:!1,width:512,height:512};function qv(e,n){!Li&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function zs(e,n){var t=n;return n==="fa"&&Q.styleDefault!==null&&(n=Ln()),new Promise(function(a,s){if(jn("missingIconAbstract"),t==="fa"){var o=Ji(e)||{};e=o.iconName||e,n=o.prefix||n}if(e&&n&&ps[n]&&ps[n][e]){var r=ps[n][e];return a(Ds(r))}qv(e,n),a(J(J({},Hv),{},{icon:Q.showMissingIcons&&e?jn("missingIconAbstract")||{}:{}}))})}var Fr=function(){},Us=Q.measurePerformance&&la&&la.mark&&la.measure?la:{mark:Fr,measure:Fr},Et='FA "6.4.0"',Wv=function(n){return Us.mark("".concat(Et," ").concat(n," begins")),function(){return Xi(n)}},Xi=function(n){Us.mark("".concat(Et," ").concat(n," ends")),Us.measure("".concat(Et," ").concat(n),"".concat(Et," ").concat(n," begins"),"".concat(Et," ").concat(n," ends"))},No={begin:Wv,end:Xi},ja=function(){};function Dr(e){var n=e.getAttribute?e.getAttribute(Xn):null;return typeof n=="string"}function Vv(e){var n=e.getAttribute?e.getAttribute(ko):null,t=e.getAttribute?e.getAttribute(xo):null;return n&&t}function Gv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function Kv(){if(Q.autoReplaceSvg===!0)return _a.replace;var e=_a[Q.autoReplaceSvg];return e||_a.replace}function Yv(e){return Ae.createElementNS("http://www.w3.org/2000/svg",e)}function Jv(e){return Ae.createElement(e)}function Qi(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Yv:Jv:t;if(typeof e=="string")return Ae.createTextNode(e);var s=a(e.tag);Object.keys(e.attributes||[]).forEach(function(r){s.setAttribute(r,e.attributes[r])});var o=e.children||[];return o.forEach(function(r){s.appendChild(Qi(r,{ceFn:a}))}),s}function Zv(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var _a={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(s){t.parentNode.insertBefore(Qi(s),t)}),t.getAttribute(Xn)===null&&Q.keepOriginalSource){var a=Ae.createComment(Zv(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~Co(t).indexOf(Q.replacementClass))return _a.replace(n);var s=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(l,i){return i===Q.replacementClass||i.match(s)?l.toSvg.push(i):l.toNode.push(i),l},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var r=a.map(function(l){return Xt(l)}).join(`
`);t.setAttribute(Xn,""),t.innerHTML=r}};function zr(e){e()}function ec(e,n){var t=typeof n=="function"?n:ja;if(e.length===0)t();else{var a=zr;Q.mutateApproach===nv&&(a=Pn.requestAnimationFrame||zr),a(function(){var s=Kv(),o=No.begin("mutate");e.map(s),o(),t()})}}var Mo=!1;function nc(){Mo=!0}function Hs(){Mo=!1}var Ia=null;function Ur(e){if($r&&Q.observeMutations){var n=e.treeCallback,t=n===void 0?ja:n,a=e.nodeCallback,s=a===void 0?ja:a,o=e.pseudoElementsCallback,r=o===void 0?ja:o,l=e.observeMutationsRoot,i=l===void 0?Ae:l;Ia=new $r(function(c){if(!Mo){var h=Ln();_t(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Dr(d.addedNodes[0])&&(Q.searchPseudoElements&&r(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&Q.searchPseudoElements&&r(d.target.parentNode),d.type==="attributes"&&Dr(d.target)&&~iv.indexOf(d.attributeName))if(d.attributeName==="class"&&Vv(d.target)){var g=ns(Co(d.target)),v=g.prefix,w=g.iconName;d.target.setAttribute(ko,v||h),w&&d.target.setAttribute(xo,w)}else Gv(d.target)&&s(d.target)})}}),wn&&Ia.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xv(){Ia&&Ia.disconnect()}function Qv(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,s){var o=s.split(":"),r=o[0],l=o.slice(1);return r&&l.length>0&&(a[r]=l.join(":").trim()),a},{})),t}function ej(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",s=ns(Co(e));return s.prefix||(s.prefix=Ln()),n&&t&&(s.prefix=n,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=$v(s.prefix,e.innerText)||Ao(s.prefix,Ps(e.innerText))),!s.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function nj(e){var n=_t(e.attributes).reduce(function(s,o){return s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(t?n["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(a||Kt()):(n["aria-hidden"]="true",n.focusable="false")),n}function tj(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=ej(e),a=t.iconName,s=t.prefix,o=t.rest,r=nj(e),l=Bs("parseNodeAttributes",{},e),i=n.styleParser?Qv(e):[];return J({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:i,attributes:r}},l)}var aj=sn.styles;function tc(e){var n=Q.autoReplaceSvg==="nest"?Hr(e,{styleParser:!1}):Hr(e);return~n.extra.classes.indexOf(Bi)?jn("generateLayersText",e,n):jn("generateSvgReplacementMutation",e,n)}var Bn=new Set;Eo.map(function(e){Bn.add("fa-".concat(e))});Object.keys(qt[Te]).map(Bn.add.bind(Bn));Object.keys(qt[Ne]).map(Bn.add.bind(Bn));Bn=Jt(Bn);function qr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wn)return Promise.resolve();var t=Ae.documentElement.classList,a=function(d){return t.add("".concat(Nr,"-").concat(d))},s=function(d){return t.remove("".concat(Nr,"-").concat(d))},o=Q.autoFetchSvg?Bn:Eo.map(function(h){return"fa-".concat(h)}).concat(Object.keys(aj));o.includes("fa")||o.push("fa");var r=[".".concat(Bi,":not([").concat(Xn,"])")].concat(o.map(function(h){return".".concat(h,":not([").concat(Xn,"])")})).join(", ");if(r.length===0)return Promise.resolve();var l=[];try{l=_t(e.querySelectorAll(r))}catch{}if(l.length>0)a("pending"),s("complete");else return Promise.resolve();var i=No.begin("onTree"),c=l.reduce(function(h,d){try{var g=tc(d);g&&h.push(g)}catch(v){Li||v.name==="MissingIcon"&&console.error(v)}return h},[]);return new Promise(function(h,d){Promise.all(c).then(function(g){ec(g,function(){a("active"),a("complete"),s("pending"),typeof n=="function"&&n(),i(),h()})}).catch(function(g){i(),d(g)})})}function sj(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tc(e).then(function(t){t&&ec([t],n)})}function oj(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Fs(n||{}),s=t.mask;return s&&(s=(s||{}).icon?s:Fs(s||{})),e(a,J(J({},t),{},{mask:s}))}}var rj=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,s=a===void 0?pn:a,o=t.symbol,r=o===void 0?!1:o,l=t.mask,i=l===void 0?null:l,c=t.maskId,h=c===void 0?null:c,d=t.title,g=d===void 0?null:d,v=t.titleId,w=v===void 0?null:v,m=t.classes,k=m===void 0?[]:m,S=t.attributes,b=S===void 0?{}:S,y=t.styles,_=y===void 0?{}:y;if(n){var E=n.prefix,I=n.iconName,F=n.icon;return ts(J({type:"icon"},n),function(){return Qn("beforeDOMElementCreation",{iconDefinition:n,params:t}),Q.autoA11y&&(g?b["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(w||Kt()):(b["aria-hidden"]="true",b.focusable="false")),$o({icons:{main:Ds(F),mask:i?Ds(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:I,transform:J(J({},pn),s),symbol:r,title:g,maskId:h,titleId:w,extra:{attributes:b,styles:_,classes:k}})})}},lj={mixout:function(){return{icon:oj(rj)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=qr,t.nodeCallback=sj,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,s=a===void 0?Ae:a,o=t.callback,r=o===void 0?function(){}:o;return qr(s,r)},n.generateSvgReplacementMutation=function(t,a){var s=a.iconName,o=a.title,r=a.titleId,l=a.prefix,i=a.transform,c=a.symbol,h=a.mask,d=a.maskId,g=a.extra;return new Promise(function(v,w){Promise.all([zs(s,l),h.iconName?zs(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var k=_o(m,2),S=k[0],b=k[1];v([t,$o({icons:{main:S,mask:b},prefix:l,iconName:s,transform:i,symbol:c,maskId:d,title:o,titleId:r,extra:g,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(t){var a=t.children,s=t.attributes,o=t.main,r=t.transform,l=t.styles,i=Qa(l);i.length>0&&(s.style=i);var c;return So(r)&&(c=jn("generateAbstractTransformGrouping",{main:o,transform:r,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:s}}}},ij={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,o=s===void 0?[]:s;return ts({type:"layer"},function(){Qn("beforeDOMElementCreation",{assembler:t,params:a});var r=[];return t(function(l){Array.isArray(l)?l.map(function(i){r=r.concat(i.abstract)}):r=r.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(Jt(o)).join(" ")},children:r}]})}}}},cj={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.title,o=s===void 0?null:s,r=a.classes,l=r===void 0?[]:r,i=a.attributes,c=i===void 0?{}:i,h=a.styles,d=h===void 0?{}:h;return ts({type:"counter",content:t},function(){return Qn("beforeDOMElementCreation",{content:t,params:a}),Uv({content:t.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(Jt(l))}})})}}}},uj={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,o=s===void 0?pn:s,r=a.title,l=r===void 0?null:r,i=a.classes,c=i===void 0?[]:i,h=a.attributes,d=h===void 0?{}:h,g=a.styles,v=g===void 0?{}:g;return ts({type:"text",content:t},function(){return Qn("beforeDOMElementCreation",{content:t,params:a}),Br({content:t,transform:J(J({},pn),o),title:l,extra:{attributes:d,styles:v,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(Jt(c))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var s=a.title,o=a.transform,r=a.extra,l=null,i=null;if(Ii){var c=parseInt(getComputedStyle(t).fontSize,10),h=t.getBoundingClientRect();l=h.width/c,i=h.height/c}return Q.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,Br({content:t.innerHTML,width:l,height:i,transform:o,title:s,extra:r,watchable:!0})])}}},hj=new RegExp('"',"ug"),Wr=[1105920,1112319];function gj(e){var n=e.replace(hj,""),t=Ev(n,0),a=t>=Wr[0]&&t<=Wr[1],s=n.length===2?n[0]===n[1]:!1;return{value:Ps(s?n[0]:n),isSecondary:a||s}}function Vr(e,n){var t="".concat(ev).concat(n.replace(":","-"));return new Promise(function(a,s){if(e.getAttribute(t)!==null)return a();var o=_t(e.children),r=o.filter(function(F){return F.getAttribute(Rs)===n})[0],l=Pn.getComputedStyle(e,n),i=l.getPropertyValue("font-family").match(ov),c=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(r&&!i)return e.removeChild(r),a();if(i&&h!=="none"&&h!==""){var d=l.getPropertyValue("content"),g=~["Sharp"].indexOf(i[2])?Ne:Te,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(i[2])?Wt[g][i[2].toLowerCase()]:rv[g][c],w=gj(d),m=w.value,k=w.isSecondary,S=i[0].startsWith("FontAwesome"),b=Ao(v,m),y=b;if(S){var _=Nv(m);_.iconName&&_.prefix&&(b=_.iconName,v=_.prefix)}if(b&&!k&&(!r||r.getAttribute(ko)!==v||r.getAttribute(xo)!==y)){e.setAttribute(t,y),r&&e.removeChild(r);var E=tj(),I=E.extra;I.attributes[Rs]=n,zs(b,v).then(function(F){var U=$o(J(J({},E),{},{icons:{main:F,mask:Oo()},prefix:v,iconName:y,extra:I,watchable:!0})),R=Ae.createElement("svg");n==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=U.map(function(ee){return Xt(ee)}).join(`
`),e.removeAttribute(t),a()}).catch(s)}else a()}else a()})}function pj(e){return Promise.all([Vr(e,"::before"),Vr(e,"::after")])}function fj(e){return e.parentNode!==document.head&&!~tv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Gr(e){if(wn)return new Promise(function(n,t){var a=_t(e.querySelectorAll("*")).filter(fj).map(pj),s=No.begin("searchPseudoElements");nc(),Promise.all(a).then(function(){s(),Hs(),n()}).catch(function(){s(),Hs(),t()})})}var dj={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Gr,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,s=a===void 0?Ae:a;Q.searchPseudoElements&&Gr(s)}}},Kr=!1,bj={mixout:function(){return{dom:{unwatch:function(){nc(),Kr=!0}}}},hooks:function(){return{bootstrap:function(){Ur(Bs("mutationObserverCallbacks",{}))},noAuto:function(){Xv()},watch:function(t){var a=t.observeMutationsRoot;Kr?Hs():Ur(Bs("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Yr=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,s){var o=s.toLowerCase().split("-"),r=o[0],l=o.slice(1).join("-");if(r&&l==="h")return a.flipX=!0,a;if(r&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(r){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},t)},mj={mixout:function(){return{parse:{transform:function(t){return Yr(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-transform");return s&&(t.transform=Yr(s)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,s=t.transform,o=t.containerWidth,r=t.iconWidth,l={transform:"translate(".concat(o/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),h="rotate(".concat(s.rotate," 0 0)"),d={transform:"".concat(i," ").concat(c," ").concat(h)},g={transform:"translate(".concat(r/2*-1," -256)")},v={outer:l,inner:d,path:g};return{tag:"g",attributes:J({},v.outer),children:[{tag:"g",attributes:J({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:J(J({},a.icon.attributes),v.path)}]}]}}}},fs={x:0,y:0,width:"100%",height:"100%"};function Jr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function yj(e){return e.tag==="g"?e.children:[e]}var vj={hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-mask"),o=s?ns(s.split(" ").map(function(r){return r.trim()})):Oo();return o.prefix||(o.prefix=Ln()),t.mask=o,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,s=t.attributes,o=t.main,r=t.mask,l=t.maskId,i=t.transform,c=o.width,h=o.icon,d=r.width,g=r.icon,v=mv({transform:i,containerWidth:d,iconWidth:c}),w={tag:"rect",attributes:J(J({},fs),{},{fill:"white"})},m=h.children?{children:h.children.map(Jr)}:{},k={tag:"g",attributes:J({},v.inner),children:[Jr(J({tag:h.tag,attributes:J(J({},h.attributes),v.path)},m))]},S={tag:"g",attributes:J({},v.outer),children:[k]},b="mask-".concat(l||Kt()),y="clip-".concat(l||Kt()),_={tag:"mask",attributes:J(J({},fs),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,S]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:yj(g)},_]};return a.push(E,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},fs)}),{children:a,attributes:s}}}},jj={provides:function(n){var t=!1;Pn.matchMedia&&(t=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:J(J({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=J(J({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:J(J({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:J(J({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},r),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:J(J({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:J(J({},r),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:J(J({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},_j={hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-symbol"),o=s===null?!1:s===""?!0:s;return t.symbol=o,t}}}},wj=[jv,lj,ij,cj,uj,dj,bj,mj,vj,jj,_j];Rv(wj,{mixoutsTo:nn});nn.noAuto;nn.config;var kj=nn.library;nn.dom;var qs=nn.parse;nn.findIconDefinition;nn.toHtml;var xj=nn.icon;nn.layer;nn.text;nn.counter;function Zr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zr(Object(t),!0).forEach(function(a){Ye(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zr(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ra(e){"@babel/helpers - typeof";return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ra(e)}function Ye(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ej(e,n){if(e==null)return{};var t={},a=Object.keys(e),s,o;for(o=0;o<a.length;o++)s=a[o],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function Cj(e,n){if(e==null)return{};var t=Ej(e,n),a,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var Sj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ac={exports:{}};(function(e){(function(n){var t=function(S,b,y){if(!c(b)||d(b)||g(b)||v(b)||i(b))return b;var _,E=0,I=0;if(h(b))for(_=[],I=b.length;E<I;E++)_.push(t(S,b[E],y));else{_={};for(var F in b)Object.prototype.hasOwnProperty.call(b,F)&&(_[S(F,y)]=t(S,b[F],y))}return _},a=function(S,b){b=b||{};var y=b.separator||"_",_=b.split||/(?=[A-Z])/;return S.split(_).join(y)},s=function(S){return w(S)?S:(S=S.replace(/[\-_\s]+(.)?/g,function(b,y){return y?y.toUpperCase():""}),S.substr(0,1).toLowerCase()+S.substr(1))},o=function(S){var b=s(S);return b.substr(0,1).toUpperCase()+b.substr(1)},r=function(S,b){return a(S,b).toLowerCase()},l=Object.prototype.toString,i=function(S){return typeof S=="function"},c=function(S){return S===Object(S)},h=function(S){return l.call(S)=="[object Array]"},d=function(S){return l.call(S)=="[object Date]"},g=function(S){return l.call(S)=="[object RegExp]"},v=function(S){return l.call(S)=="[object Boolean]"},w=function(S){return S=S-0,S===S},m=function(S,b){var y=b&&"process"in b?b.process:b;return typeof y!="function"?S:function(_,E){return y(_,S,E)}},k={camelize:s,decamelize:r,pascalize:o,depascalize:r,camelizeKeys:function(S,b){return t(m(s,b),S)},decamelizeKeys:function(S,b){return t(m(r,b),S,b)},pascalizeKeys:function(S,b){return t(m(o,b),S)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:n.humps=k})(Sj)})(ac);var Tj=ac.exports,Aj=["class","style"];function Oj(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),s=Tj.camelize(t.slice(0,a)),o=t.slice(a+1).trim();return n[s]=o,n},{})}function $j(e){return e.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function sc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(i){return sc(i)}),s=Object.keys(e.attributes||{}).reduce(function(i,c){var h=e.attributes[c];switch(c){case"class":i.class=$j(h);break;case"style":i.style=Oj(h);break;default:i.attrs[c]=h}return i},{attrs:{},class:{},style:{}});t.class;var o=t.style,r=o===void 0?{}:o,l=Cj(t,Aj);return ih(e.tag,bn(bn(bn({},n),{},{class:s.class,style:bn(bn({},s.style),r)},s.attrs),l),a)}var oc=!1;try{oc=!0}catch{}function Nj(){if(!oc&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ds(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Ye({},e,n):{}}function Mj(e){var n,t=(n={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ye(n,"fa-".concat(e.size),e.size!==null),Ye(n,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ye(n,"fa-pull-".concat(e.pull),e.pull!==null),Ye(n,"fa-swap-opacity",e.swapOpacity),Ye(n,"fa-bounce",e.bounce),Ye(n,"fa-shake",e.shake),Ye(n,"fa-beat",e.beat),Ye(n,"fa-fade",e.fade),Ye(n,"fa-beat-fade",e.beatFade),Ye(n,"fa-flash",e.flash),Ye(n,"fa-spin-pulse",e.spinPulse),Ye(n,"fa-spin-reverse",e.spinReverse),n);return Object.keys(t).map(function(a){return t[a]?a:null}).filter(function(a){return a})}function Xr(e){if(e&&Ra(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qs.icon)return qs.icon(e);if(e===null)return null;if(Ra(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ij=jt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var a=t.attrs,s=De(function(){return Xr(n.icon)}),o=De(function(){return ds("classes",Mj(n))}),r=De(function(){return ds("transform",typeof n.transform=="string"?qs.transform(n.transform):n.transform)}),l=De(function(){return ds("mask",Xr(n.mask))}),i=De(function(){return xj(s.value,bn(bn(bn(bn({},o.value),r.value),l.value),{},{symbol:n.symbol,title:n.title}))});ut(i,function(h){if(!h)return Nj("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var c=De(function(){return i.value?sc(i.value.abstract[0],{},a):null});return function(){return c.value}}}),Rj={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Pj={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Lj={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Bj={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},Fj={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Dj={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},zj={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"]};kj.add({faCircleInfo:Rj,faCopyright:Bj,faGithub:Dj,faHouse:Pj,faMoon:Fj,faNpm:zj,faSun:Lj});Mh(py).use(Ph()).component("CodeBlock",jo).component("fa-icon",Ij).mount("#app");export{qp as c,fo as g};
