function ac(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Ur(e,n){const t=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)t[a[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Tn(e){if(oe(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],r=Pe(a)?ic(a):Tn(a);if(r)for(const o in r)n[o]=r[o]}return n}else{if(Pe(e))return e;if(Ee(e))return e}}const rc=/;(?![^(]*\))/g,oc=/:([^]+)/,sc=/\/\*.*?\*\//gs;function ic(e){const n={};return e.replace(sc,"").split(rc).forEach(t=>{if(t){const a=t.split(oc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Se(e){let n="";if(Pe(e))n=e;else if(oe(e))for(let t=0;t<e.length;t++){const a=Se(e[t]);a&&(n+=a+" ")}else if(Ee(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cc=Ur(lc);function Ks(e){return!!e||e===""}function uc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=Pa(e[a],n[a]);return t}function Pa(e,n){if(e===n)return!0;let t=No(e),a=No(n);if(t||a)return t&&a?e.getTime()===n.getTime():!1;if(t=Mt(e),a=Mt(n),t||a)return e===n;if(t=oe(e),a=oe(n),t||a)return t&&a?uc(e,n):!1;if(t=Ee(e),a=Ee(n),t||a){if(!t||!a)return!1;const r=Object.keys(e).length,o=Object.keys(n).length;if(r!==o)return!1;for(const s in e){const i=e.hasOwnProperty(s),l=n.hasOwnProperty(s);if(i&&!l||!i&&l||!Pa(e[s],n[s]))return!1}}return String(e)===String(n)}function Ys(e,n){return e.findIndex(t=>Pa(t,n))}const xe=e=>Pe(e)?e:e==null?"":oe(e)||Ee(e)&&(e.toString===Xs||!de(e.toString))?JSON.stringify(e,Js,2):String(e),Js=(e,n)=>n&&n.__v_isRef?Js(e,n.value):lt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,r])=>(t[`${a} =>`]=r,t),{})}:Fa(n)?{[`Set(${n.size})`]:[...n.values()]}:Ee(n)&&!oe(n)&&!Qs(n)?String(n):n,Te={},it=[],on=()=>{},dc=()=>!1,fc=/^on[^a-z]/,Ba=e=>fc.test(e),Hr=e=>e.startsWith("onUpdate:"),Ve=Object.assign,qr=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},hc=Object.prototype.hasOwnProperty,be=(e,n)=>hc.call(e,n),oe=Array.isArray,lt=e=>Kt(e)==="[object Map]",Fa=e=>Kt(e)==="[object Set]",No=e=>Kt(e)==="[object Date]",de=e=>typeof e=="function",Pe=e=>typeof e=="string",Mt=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",Zs=e=>Ee(e)&&de(e.then)&&de(e.catch),Xs=Object.prototype.toString,Kt=e=>Xs.call(e),gc=e=>Kt(e).slice(8,-1),Qs=e=>Kt(e)==="[object Object]",Wr=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pa=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},pc=/-(\w)/g,hn=Da(e=>e.replace(pc,(n,t)=>t?t.toUpperCase():"")),bc=/\B([A-Z])/g,mt=Da(e=>e.replace(bc,"-$1").toLowerCase()),za=Da(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Da(e=>e?`on${za(e)}`:""),$t=(e,n)=>!Object.is(e,n),ba=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ja=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},pr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Mo;const mc=()=>Mo||(Mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Xe;class ei{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!n&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Xe;try{return Xe=this,n()}finally{Xe=t}}}on(){Xe=this}off(){Xe=this.parent}stop(n){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ni(e){return new ei(e)}function yc(e,n=Xe){n&&n.active&&n.effects.push(e)}function ti(){return Xe}function vc(e){Xe&&Xe.cleanups.push(e)}const Gr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ai=e=>(e.w&Mn)>0,ri=e=>(e.n&Mn)>0,_c=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Mn},jc=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const r=n[a];ai(r)&&!ri(r)?r.delete(e):n[t++]=r,r.w&=~Mn,r.n&=~Mn}n.length=t}},wa=new WeakMap;let wt=0,Mn=1;const br=30;let en;const Kn=Symbol(""),mr=Symbol("");class Vr{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,yc(this,a)}run(){if(!this.active)return this.fn();let n=en,t=An;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=en,en=this,An=!0,Mn=1<<++wt,wt<=br?_c(this):$o(this),this.fn()}finally{wt<=br&&jc(this),Mn=1<<--wt,en=this.parent,An=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&($o(this),this.onStop&&this.onStop(),this.active=!1)}}function $o(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let An=!0;const oi=[];function yt(){oi.push(An),An=!1}function vt(){const e=oi.pop();An=e===void 0?!0:e}function Je(e,n,t){if(An&&en){let a=wa.get(e);a||wa.set(e,a=new Map);let r=a.get(t);r||a.set(t,r=Gr()),si(r)}}function si(e,n){let t=!1;wt<=br?ri(e)||(e.n|=Mn,t=!ai(e)):t=!e.has(en),t&&(e.add(en),en.deps.push(e))}function bn(e,n,t,a,r,o){const s=wa.get(e);if(!s)return;let i=[];if(n==="clear")i=[...s.values()];else if(t==="length"&&oe(e)){const l=Number(a);s.forEach((c,d)=>{(d==="length"||d>=l)&&i.push(c)})}else switch(t!==void 0&&i.push(s.get(t)),n){case"add":oe(e)?Wr(t)&&i.push(s.get("length")):(i.push(s.get(Kn)),lt(e)&&i.push(s.get(mr)));break;case"delete":oe(e)||(i.push(s.get(Kn)),lt(e)&&i.push(s.get(mr)));break;case"set":lt(e)&&i.push(s.get(Kn));break}if(i.length===1)i[0]&&yr(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);yr(Gr(l))}}function yr(e,n){const t=oe(e)?e:[...e];for(const a of t)a.computed&&Io(a);for(const a of t)a.computed||Io(a)}function Io(e,n){(e!==en||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function wc(e,n){var t;return(t=wa.get(e))===null||t===void 0?void 0:t.get(n)}const kc=Ur("__proto__,__v_isRef,__isVue"),ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt)),xc=Kr(),Ec=Kr(!1,!0),Sc=Kr(!0),Ro=Tc();function Tc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=me(this);for(let o=0,s=this.length;o<s;o++)Je(a,"get",o+"");const r=a[n](...t);return r===-1||r===!1?a[n](...t.map(me)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){yt();const a=me(this)[n].apply(this,t);return vt(),a}}),e}function Cc(e){const n=me(this);return Je(n,"has",e),n.hasOwnProperty(e)}function Kr(e=!1,n=!1){return function(a,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&o===(e?n?qc:fi:n?di:ui).get(a))return a;const s=oe(a);if(!e){if(s&&be(Ro,r))return Reflect.get(Ro,r,o);if(r==="hasOwnProperty")return Cc}const i=Reflect.get(a,r,o);return(Mt(r)?ii.has(r):kc(r))||(e||Je(a,"get",r),n)?i:Re(i)?s&&Wr(r)?i:i.value:Ee(i)?e?hi(i):Ha(i):i}}const Ac=li(),Oc=li(!0);function li(e=!1){return function(t,a,r,o){let s=t[a];if(ft(s)&&Re(s)&&!Re(r))return!1;if(!e&&(!ka(r)&&!ft(r)&&(s=me(s),r=me(r)),!oe(t)&&Re(s)&&!Re(r)))return s.value=r,!0;const i=oe(t)&&Wr(a)?Number(a)<t.length:be(t,a),l=Reflect.set(t,a,r,o);return t===me(o)&&(i?$t(r,s)&&bn(t,"set",a,r):bn(t,"add",a,r)),l}}function Nc(e,n){const t=be(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&bn(e,"delete",n,void 0),a}function Mc(e,n){const t=Reflect.has(e,n);return(!Mt(n)||!ii.has(n))&&Je(e,"has",n),t}function $c(e){return Je(e,"iterate",oe(e)?"length":Kn),Reflect.ownKeys(e)}const ci={get:xc,set:Ac,deleteProperty:Nc,has:Mc,ownKeys:$c},Ic={get:Sc,set(e,n){return!0},deleteProperty(e,n){return!0}},Rc=Ve({},ci,{get:Ec,set:Oc}),Yr=e=>e,Ua=e=>Reflect.getPrototypeOf(e);function Xt(e,n,t=!1,a=!1){e=e.__v_raw;const r=me(e),o=me(n);t||(n!==o&&Je(r,"get",n),Je(r,"get",o));const{has:s}=Ua(r),i=a?Yr:t?Xr:It;if(s.call(r,n))return i(e.get(n));if(s.call(r,o))return i(e.get(o));e!==r&&e.get(n)}function Qt(e,n=!1){const t=this.__v_raw,a=me(t),r=me(e);return n||(e!==r&&Je(a,"has",e),Je(a,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function ea(e,n=!1){return e=e.__v_raw,!n&&Je(me(e),"iterate",Kn),Reflect.get(e,"size",e)}function Lo(e){e=me(e);const n=me(this);return Ua(n).has.call(n,e)||(n.add(e),bn(n,"add",e,e)),this}function Po(e,n){n=me(n);const t=me(this),{has:a,get:r}=Ua(t);let o=a.call(t,e);o||(e=me(e),o=a.call(t,e));const s=r.call(t,e);return t.set(e,n),o?$t(n,s)&&bn(t,"set",e,n):bn(t,"add",e,n),this}function Bo(e){const n=me(this),{has:t,get:a}=Ua(n);let r=t.call(n,e);r||(e=me(e),r=t.call(n,e)),a&&a.call(n,e);const o=n.delete(e);return r&&bn(n,"delete",e,void 0),o}function Fo(){const e=me(this),n=e.size!==0,t=e.clear();return n&&bn(e,"clear",void 0,void 0),t}function na(e,n){return function(a,r){const o=this,s=o.__v_raw,i=me(s),l=n?Yr:e?Xr:It;return!e&&Je(i,"iterate",Kn),s.forEach((c,d)=>a.call(r,l(c),l(d),o))}}function ta(e,n,t){return function(...a){const r=this.__v_raw,o=me(r),s=lt(o),i=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=r[e](...a),d=t?Yr:n?Xr:It;return!n&&Je(o,"iterate",l?mr:Kn),{next(){const{value:p,done:f}=c.next();return f?{value:p,done:f}:{value:i?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function wn(e){return function(...n){return e==="delete"?!1:this}}function Lc(){const e={get(o){return Xt(this,o)},get size(){return ea(this)},has:Qt,add:Lo,set:Po,delete:Bo,clear:Fo,forEach:na(!1,!1)},n={get(o){return Xt(this,o,!1,!0)},get size(){return ea(this)},has:Qt,add:Lo,set:Po,delete:Bo,clear:Fo,forEach:na(!1,!0)},t={get(o){return Xt(this,o,!0)},get size(){return ea(this,!0)},has(o){return Qt.call(this,o,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:na(!0,!1)},a={get(o){return Xt(this,o,!0,!0)},get size(){return ea(this,!0)},has(o){return Qt.call(this,o,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:na(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ta(o,!1,!1),t[o]=ta(o,!0,!1),n[o]=ta(o,!1,!0),a[o]=ta(o,!0,!0)}),[e,t,n,a]}const[Pc,Bc,Fc,Dc]=Lc();function Jr(e,n){const t=n?e?Dc:Fc:e?Bc:Pc;return(a,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(be(t,r)&&r in a?t:a,r,o)}const zc={get:Jr(!1,!1)},Uc={get:Jr(!1,!0)},Hc={get:Jr(!0,!1)},ui=new WeakMap,di=new WeakMap,fi=new WeakMap,qc=new WeakMap;function Wc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gc(e){return e.__v_skip||!Object.isExtensible(e)?0:Wc(gc(e))}function Ha(e){return ft(e)?e:Zr(e,!1,ci,zc,ui)}function Vc(e){return Zr(e,!1,Rc,Uc,di)}function hi(e){return Zr(e,!0,Ic,Hc,fi)}function Zr(e,n,t,a,r){if(!Ee(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const s=Gc(e);if(s===0)return e;const i=new Proxy(e,s===2?a:t);return r.set(e,i),i}function On(e){return ft(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function ka(e){return!!(e&&e.__v_isShallow)}function gi(e){return On(e)||ft(e)}function me(e){const n=e&&e.__v_raw;return n?me(n):e}function ht(e){return ja(e,"__v_skip",!0),e}const It=e=>Ee(e)?Ha(e):e,Xr=e=>Ee(e)?hi(e):e;function pi(e){An&&en&&(e=me(e),si(e.dep||(e.dep=Gr())))}function bi(e,n){e=me(e);const t=e.dep;t&&yr(t)}function Re(e){return!!(e&&e.__v_isRef===!0)}function ke(e){return Kc(e,!1)}function Kc(e,n){return Re(e)?e:new Yc(e,n)}class Yc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:me(n),this._value=t?n:It(n)}get value(){return pi(this),this._value}set value(n){const t=this.__v_isShallow||ka(n)||ft(n);n=t?n:me(n),$t(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:It(n),bi(this))}}function b(e){return Re(e)?e.value:e}const Jc={get:(e,n,t)=>b(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const r=e[n];return Re(r)&&!Re(t)?(r.value=t,!0):Reflect.set(e,n,t,a)}};function mi(e){return On(e)?e:new Proxy(e,Jc)}function Zc(e){const n=oe(e)?new Array(e.length):{};for(const t in e)n[t]=Qc(e,t);return n}class Xc{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return wc(me(this._object),this._key)}}function Qc(e,n,t){const a=e[n];return Re(a)?a:new Xc(e,n,t)}var yi;class eu{constructor(n,t,a,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[yi]=!1,this._dirty=!0,this.effect=new Vr(n,()=>{this._dirty||(this._dirty=!0,bi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const n=me(this);return pi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}yi="__v_isReadonly";function nu(e,n,t=!1){let a,r;const o=de(e);return o?(a=e,r=on):(a=e.get,r=e.set),new eu(a,r,o||!r,t)}function Nn(e,n,t,a){let r;try{r=a?e(...a):e()}catch(o){qa(o,n,t)}return r}function sn(e,n,t,a){if(de(e)){const o=Nn(e,n,t,a);return o&&Zs(o)&&o.catch(s=>{qa(s,n,t)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(sn(e[o],n,t,a));return r}function qa(e,n,t,a=!0){const r=n?n.vnode:null;if(n){let o=n.parent;const s=n.proxy,i=t;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,i)===!1)return}o=o.parent}const l=n.appContext.config.errorHandler;if(l){Nn(l,null,10,[e,s,i]);return}}tu(e,t,r,a)}function tu(e,n,t,a=!0){console.error(e)}let Rt=!1,vr=!1;const qe=[];let dn=0;const ct=[];let gn=null,Un=0;const vi=Promise.resolve();let Qr=null;function _i(e){const n=Qr||vi;return e?n.then(this?e.bind(this):e):n}function au(e){let n=dn+1,t=qe.length;for(;n<t;){const a=n+t>>>1;Lt(qe[a])<e?n=a+1:t=a}return n}function eo(e){(!qe.length||!qe.includes(e,Rt&&e.allowRecurse?dn+1:dn))&&(e.id==null?qe.push(e):qe.splice(au(e.id),0,e),ji())}function ji(){!Rt&&!vr&&(vr=!0,Qr=vi.then(ki))}function ru(e){const n=qe.indexOf(e);n>dn&&qe.splice(n,1)}function ou(e){oe(e)?ct.push(...e):(!gn||!gn.includes(e,e.allowRecurse?Un+1:Un))&&ct.push(e),ji()}function Do(e,n=Rt?dn+1:0){for(;n<qe.length;n++){const t=qe[n];t&&t.pre&&(qe.splice(n,1),n--,t())}}function wi(e){if(ct.length){const n=[...new Set(ct)];if(ct.length=0,gn){gn.push(...n);return}for(gn=n,gn.sort((t,a)=>Lt(t)-Lt(a)),Un=0;Un<gn.length;Un++)gn[Un]();gn=null,Un=0}}const Lt=e=>e.id==null?1/0:e.id,su=(e,n)=>{const t=Lt(e)-Lt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function ki(e){vr=!1,Rt=!0,qe.sort(su);const n=on;try{for(dn=0;dn<qe.length;dn++){const t=qe[dn];t&&t.active!==!1&&Nn(t,null,14)}}finally{dn=0,qe.length=0,wi(),Rt=!1,Qr=null,(qe.length||ct.length)&&ki()}}function iu(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||Te;let r=t;const o=n.startsWith("update:"),s=o&&n.slice(7);if(s&&s in a){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:f}=a[d]||Te;f&&(r=t.map(j=>Pe(j)?j.trim():j)),p&&(r=t.map(pr))}let i,l=a[i=ar(n)]||a[i=ar(hn(n))];!l&&o&&(l=a[i=ar(mt(n))]),l&&sn(l,e,6,r);const c=a[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,sn(c,e,6,r)}}function xi(e,n,t=!1){const a=n.emitsCache,r=a.get(e);if(r!==void 0)return r;const o=e.emits;let s={},i=!1;if(!de(e)){const l=c=>{const d=xi(c,n,!0);d&&(i=!0,Ve(s,d))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!i?(Ee(e)&&a.set(e,null),null):(oe(o)?o.forEach(l=>s[l]=null):Ve(s,o),Ee(e)&&a.set(e,s),s)}function Wa(e,n){return!e||!Ba(n)?!1:(n=n.slice(2).replace(/Once$/,""),be(e,n[0].toLowerCase()+n.slice(1))||be(e,mt(n))||be(e,n))}let De=null,Ga=null;function xa(e){const n=De;return De=e,Ga=e&&e.type.__scopeId||null,n}function Ei(e){Ga=e}function Si(){Ga=null}function pn(e,n=De,t){if(!n||e._n)return e;const a=(...r)=>{a._d&&Yo(-1);const o=xa(n);let s;try{s=e(...r)}finally{xa(o),a._d&&Yo(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function rr(e){const{type:n,vnode:t,proxy:a,withProxy:r,props:o,propsOptions:[s],slots:i,attrs:l,emit:c,render:d,renderCache:p,data:f,setupState:j,ctx:_,inheritAttrs:y}=e;let x,C;const m=xa(e);try{if(t.shapeFlag&4){const w=r||a;x=un(d.call(w,w,p,o,j,f,_)),C=l}else{const w=n;x=un(w.length>1?w(o,{attrs:l,slots:i,emit:c}):w(o,null)),C=n.props?l:lu(l)}}catch(w){St.length=0,qa(w,e,1),x=W($n)}let g=x;if(C&&y!==!1){const w=Object.keys(C),{shapeFlag:k}=g;w.length&&k&7&&(s&&w.some(Hr)&&(C=cu(C,s)),g=gt(g,C))}return t.dirs&&(g=gt(g),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&(g.transition=t.transition),x=g,xa(m),x}const lu=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ba(t))&&((n||(n={}))[t]=e[t]);return n},cu=(e,n)=>{const t={};for(const a in e)(!Hr(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function uu(e,n,t){const{props:a,children:r,component:o}=e,{props:s,children:i,patchFlag:l}=n,c=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return a?zo(a,s,c):!!s;if(l&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(s[f]!==a[f]&&!Wa(c,f))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?zo(a,s,c):!0:!!s;return!1}function zo(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const o=a[r];if(n[o]!==e[o]&&!Wa(t,o))return!0}return!1}function du({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const fu=e=>e.__isSuspense;function hu(e,n){n&&n.pendingBranch?oe(e)?n.effects.push(...e):n.effects.push(e):ou(e)}function Sn(e,n){if(Ie){let t=Ie.provides;const a=Ie.parent&&Ie.parent.provides;a===t&&(t=Ie.provides=Object.create(a)),t[e]=n}}function ne(e,n,t=!1){const a=Ie||De;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&de(n)?n.call(a.proxy):n}}const aa={};function ut(e,n,t){return Ti(e,n,t)}function Ti(e,n,{immediate:t,deep:a,flush:r,onTrack:o,onTrigger:s}=Te){const i=ti()===(Ie==null?void 0:Ie.scope)?Ie:null;let l,c=!1,d=!1;if(Re(e)?(l=()=>e.value,c=ka(e)):On(e)?(l=()=>e,a=!0):oe(e)?(d=!0,c=e.some(g=>On(g)||ka(g)),l=()=>e.map(g=>{if(Re(g))return g.value;if(On(g))return Wn(g);if(de(g))return Nn(g,i,2)})):de(e)?n?l=()=>Nn(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return p&&p(),sn(e,i,3,[f])}:l=on,n&&a){const g=l;l=()=>Wn(g())}let p,f=g=>{p=C.onStop=()=>{Nn(g,i,4)}},j;if(Ft)if(f=on,n?t&&sn(n,i,3,[l(),d?[]:void 0,f]):l(),r==="sync"){const g=od();j=g.__watcherHandles||(g.__watcherHandles=[])}else return on;let _=d?new Array(e.length).fill(aa):aa;const y=()=>{if(C.active)if(n){const g=C.run();(a||c||(d?g.some((w,k)=>$t(w,_[k])):$t(g,_)))&&(p&&p(),sn(n,i,3,[g,_===aa?void 0:d&&_[0]===aa?[]:_,f]),_=g)}else C.run()};y.allowRecurse=!!n;let x;r==="sync"?x=y:r==="post"?x=()=>Ye(y,i&&i.suspense):(y.pre=!0,i&&(y.id=i.uid),x=()=>eo(y));const C=new Vr(l,x);n?t?y():_=C.run():r==="post"?Ye(C.run.bind(C),i&&i.suspense):C.run();const m=()=>{C.stop(),i&&i.scope&&qr(i.scope.effects,C)};return j&&j.push(m),m}function gu(e,n,t){const a=this.proxy,r=Pe(e)?e.includes(".")?Ci(a,e):()=>a[e]:e.bind(a,a);let o;de(n)?o=n:(o=n.handler,t=n);const s=Ie;pt(this);const i=Ti(r,o.bind(a),t);return s?pt(s):Yn(),i}function Ci(e,n){const t=n.split(".");return()=>{let a=e;for(let r=0;r<t.length&&a;r++)a=a[t[r]];return a}}function Wn(e,n){if(!Ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Re(e))Wn(e.value,n);else if(oe(e))for(let t=0;t<e.length;t++)Wn(e[t],n);else if(Fa(e)||lt(e))e.forEach(t=>{Wn(t,n)});else if(Qs(e))for(const t in e)Wn(e[t],n);return e}function Pn(e){return de(e)?{setup:e,name:e.name}:e}const xt=e=>!!e.type.__asyncLoader,Ai=e=>e.type.__isKeepAlive;function pu(e,n){Oi(e,"a",n)}function bu(e,n){Oi(e,"da",n)}function Oi(e,n,t=Ie){const a=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Va(n,a,t),t){let r=t.parent;for(;r&&r.parent;)Ai(r.parent.vnode)&&mu(a,n,t,r),r=r.parent}}function mu(e,n,t,a){const r=Va(n,e,a,!0);Mi(()=>{qr(a[n],r)},t)}function Va(e,n,t=Ie,a=!1){if(t){const r=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;yt(),pt(t);const i=sn(n,t,e,s);return Yn(),vt(),i});return a?r.unshift(o):r.push(o),o}}const _n=e=>(n,t=Ie)=>(!Ft||e==="sp")&&Va(e,(...a)=>n(...a),t),no=_n("bm"),Ni=_n("m"),yu=_n("bu"),vu=_n("u"),_u=_n("bum"),Mi=_n("um"),ju=_n("sp"),wu=_n("rtg"),ku=_n("rtc");function xu(e,n=Ie){Va("ec",e,n)}function Bn(e,n){const t=De;if(t===null)return e;const a=Ja(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[s,i,l,c=Te]=n[o];s&&(de(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(i),r.push({dir:s,instance:a,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function Fn(e,n,t,a){const r=e.dirs,o=n&&n.dirs;for(let s=0;s<r.length;s++){const i=r[s];o&&(i.oldValue=o[s].value);let l=i.dir[a];l&&(yt(),sn(l,t,8,[e.el,i,e,n]),vt())}}const $i="components";function Ze(e,n){return Su($i,e,!0,n)||e}const Eu=Symbol();function Su(e,n,t=!0,a=!1){const r=De||Ie;if(r){const o=r.type;if(e===$i){const i=ed(o,!1);if(i&&(i===n||i===hn(n)||i===za(hn(n))))return o}const s=Uo(r[e]||o[e],n)||Uo(r.appContext[e],n);return!s&&a?o:s}}function Uo(e,n){return e&&(e[n]||e[hn(n)]||e[za(hn(n))])}function Zn(e,n,t,a){let r;const o=t&&t[a];if(oe(e)||Pe(e)){r=new Array(e.length);for(let s=0,i=e.length;s<i;s++)r[s]=n(e[s],s,void 0,o&&o[s])}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=n(s+1,s,void 0,o&&o[s])}else if(Ee(e))if(e[Symbol.iterator])r=Array.from(e,(s,i)=>n(s,i,void 0,o&&o[i]));else{const s=Object.keys(e);r=new Array(s.length);for(let i=0,l=s.length;i<l;i++){const c=s[i];r[i]=n(e[c],c,i,o&&o[i])}}else r=[];return t&&(t[a]=r),r}function or(e,n,t={},a,r){if(De.isCE||De.parent&&xt(De.parent)&&De.parent.isCE)return n!=="default"&&(t.name=n),W("slot",t,a&&a());let o=e[n];o&&o._c&&(o._d=!1),X();const s=o&&Ii(o(t)),i=Bt(Oe,{key:t.key||s&&s.key||`_${n}`},s||(a?a():[]),s&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function Ii(e){return e.some(n=>Sa(n)?!(n.type===$n||n.type===Oe&&!Ii(n.children)):!0)?e:null}const _r=e=>e?Gi(e)?Ja(e)||e.proxy:_r(e.parent):null,Et=Ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>eo(e.update)),$nextTick:e=>e.n||(e.n=_i.bind(e.proxy)),$watch:e=>gu.bind(e)}),sr=(e,n)=>e!==Te&&!e.__isScriptSetup&&be(e,n),Tu={get({_:e},n){const{ctx:t,setupState:a,data:r,props:o,accessCache:s,type:i,appContext:l}=e;let c;if(n[0]!=="$"){const j=s[n];if(j!==void 0)switch(j){case 1:return a[n];case 2:return r[n];case 4:return t[n];case 3:return o[n]}else{if(sr(a,n))return s[n]=1,a[n];if(r!==Te&&be(r,n))return s[n]=2,r[n];if((c=e.propsOptions[0])&&be(c,n))return s[n]=3,o[n];if(t!==Te&&be(t,n))return s[n]=4,t[n];jr&&(s[n]=0)}}const d=Et[n];let p,f;if(d)return n==="$attrs"&&Je(e,"get",n),d(e);if((p=i.__cssModules)&&(p=p[n]))return p;if(t!==Te&&be(t,n))return s[n]=4,t[n];if(f=l.config.globalProperties,be(f,n))return f[n]},set({_:e},n,t){const{data:a,setupState:r,ctx:o}=e;return sr(r,n)?(r[n]=t,!0):a!==Te&&be(a,n)?(a[n]=t,!0):be(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:r,propsOptions:o}},s){let i;return!!t[s]||e!==Te&&be(e,s)||sr(n,s)||(i=o[0])&&be(i,s)||be(a,s)||be(Et,s)||be(r.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:be(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let jr=!0;function Cu(e){const n=to(e),t=e.proxy,a=e.ctx;jr=!1,n.beforeCreate&&Ho(n.beforeCreate,e,"bc");const{data:r,computed:o,methods:s,watch:i,provide:l,inject:c,created:d,beforeMount:p,mounted:f,beforeUpdate:j,updated:_,activated:y,deactivated:x,beforeDestroy:C,beforeUnmount:m,destroyed:g,unmounted:w,render:k,renderTracked:O,renderTriggered:R,errorCaptured:U,serverPrefetch:z,expose:ee,inheritAttrs:ce,components:_e,directives:ve,filters:pe}=n;if(c&&Au(c,a,null,e.appContext.config.unwrapInjectedRef),s)for(const B in s){const D=s[B];de(D)&&(a[B]=D.bind(t))}if(r){const B=r.call(t,t);Ee(B)&&(e.data=Ha(B))}if(jr=!0,o)for(const B in o){const D=o[B],J=de(D)?D.bind(t,t):de(D.get)?D.get.bind(t,t):on,re=!de(D)&&de(D.set)?D.set.bind(t):on,he=Me({get:J,set:re});Object.defineProperty(a,B,{enumerable:!0,configurable:!0,get:()=>he.value,set:ie=>he.value=ie})}if(i)for(const B in i)Ri(i[B],a,t,B);if(l){const B=de(l)?l.call(t):l;Reflect.ownKeys(B).forEach(D=>{Sn(D,B[D])})}d&&Ho(d,e,"c");function M(B,D){oe(D)?D.forEach(J=>B(J.bind(t))):D&&B(D.bind(t))}if(M(no,p),M(Ni,f),M(yu,j),M(vu,_),M(pu,y),M(bu,x),M(xu,U),M(ku,O),M(wu,R),M(_u,m),M(Mi,w),M(ju,z),oe(ee))if(ee.length){const B=e.exposed||(e.exposed={});ee.forEach(D=>{Object.defineProperty(B,D,{get:()=>t[D],set:J=>t[D]=J})})}else e.exposed||(e.exposed={});k&&e.render===on&&(e.render=k),ce!=null&&(e.inheritAttrs=ce),_e&&(e.components=_e),ve&&(e.directives=ve)}function Au(e,n,t=on,a=!1){oe(e)&&(e=wr(e));for(const r in e){const o=e[r];let s;Ee(o)?"default"in o?s=ne(o.from||r,o.default,!0):s=ne(o.from||r):s=ne(o),Re(s)&&a?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):n[r]=s}}function Ho(e,n,t){sn(oe(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ri(e,n,t,a){const r=a.includes(".")?Ci(t,a):()=>t[a];if(Pe(e)){const o=n[e];de(o)&&ut(r,o)}else if(de(e))ut(r,e.bind(t));else if(Ee(e))if(oe(e))e.forEach(o=>Ri(o,n,t,a));else{const o=de(e.handler)?e.handler.bind(t):n[e.handler];de(o)&&ut(r,o,e)}}function to(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,i=o.get(n);let l;return i?l=i:!r.length&&!t&&!a?l=n:(l={},r.length&&r.forEach(c=>Ea(l,c,s,!0)),Ea(l,n,s)),Ee(n)&&o.set(n,l),l}function Ea(e,n,t,a=!1){const{mixins:r,extends:o}=n;o&&Ea(e,o,t,!0),r&&r.forEach(s=>Ea(e,s,t,!0));for(const s in n)if(!(a&&s==="expose")){const i=Ou[s]||t&&t[s];e[s]=i?i(e[s],n[s]):n[s]}return e}const Ou={data:qo,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:zn,directives:zn,watch:Mu,provide:qo,inject:Nu};function qo(e,n){return n?e?function(){return Ve(de(e)?e.call(this,this):e,de(n)?n.call(this,this):n)}:n:e}function Nu(e,n){return zn(wr(e),wr(n))}function wr(e){if(oe(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ge(e,n){return e?[...new Set([].concat(e,n))]:n}function zn(e,n){return e?Ve(Ve(Object.create(null),e),n):n}function Mu(e,n){if(!e)return n;if(!n)return e;const t=Ve(Object.create(null),e);for(const a in n)t[a]=Ge(e[a],n[a]);return t}function $u(e,n,t,a=!1){const r={},o={};ja(o,Ya,1),e.propsDefaults=Object.create(null),Li(e,n,r,o);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);t?e.props=a?r:Vc(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Iu(e,n,t,a){const{props:r,attrs:o,vnode:{patchFlag:s}}=e,i=me(r),[l]=e.propsOptions;let c=!1;if((a||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(Wa(e.emitsOptions,f))continue;const j=n[f];if(l)if(be(o,f))j!==o[f]&&(o[f]=j,c=!0);else{const _=hn(f);r[_]=kr(l,i,_,j,e,!1)}else j!==o[f]&&(o[f]=j,c=!0)}}}else{Li(e,n,r,o)&&(c=!0);let d;for(const p in i)(!n||!be(n,p)&&((d=mt(p))===p||!be(n,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(r[p]=kr(l,i,p,void 0,e,!0)):delete r[p]);if(o!==i)for(const p in o)(!n||!be(n,p))&&(delete o[p],c=!0)}c&&bn(e,"set","$attrs")}function Li(e,n,t,a){const[r,o]=e.propsOptions;let s=!1,i;if(n)for(let l in n){if(pa(l))continue;const c=n[l];let d;r&&be(r,d=hn(l))?!o||!o.includes(d)?t[d]=c:(i||(i={}))[d]=c:Wa(e.emitsOptions,l)||(!(l in a)||c!==a[l])&&(a[l]=c,s=!0)}if(o){const l=me(t),c=i||Te;for(let d=0;d<o.length;d++){const p=o[d];t[p]=kr(r,l,p,c[p],e,!be(c,p))}}return s}function kr(e,n,t,a,r,o){const s=e[t];if(s!=null){const i=be(s,"default");if(i&&a===void 0){const l=s.default;if(s.type!==Function&&de(l)){const{propsDefaults:c}=r;t in c?a=c[t]:(pt(r),a=c[t]=l.call(null,n),Yn())}else a=l}s[0]&&(o&&!i?a=!1:s[1]&&(a===""||a===mt(t))&&(a=!0))}return a}function Pi(e,n,t=!1){const a=n.propsCache,r=a.get(e);if(r)return r;const o=e.props,s={},i=[];let l=!1;if(!de(e)){const d=p=>{l=!0;const[f,j]=Pi(p,n,!0);Ve(s,f),j&&i.push(...j)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return Ee(e)&&a.set(e,it),it;if(oe(o))for(let d=0;d<o.length;d++){const p=hn(o[d]);Wo(p)&&(s[p]=Te)}else if(o)for(const d in o){const p=hn(d);if(Wo(p)){const f=o[d],j=s[p]=oe(f)||de(f)?{type:f}:Object.assign({},f);if(j){const _=Ko(Boolean,j.type),y=Ko(String,j.type);j[0]=_>-1,j[1]=y<0||_<y,(_>-1||be(j,"default"))&&i.push(p)}}}const c=[s,i];return Ee(e)&&a.set(e,c),c}function Wo(e){return e[0]!=="$"}function Go(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Vo(e,n){return Go(e)===Go(n)}function Ko(e,n){return oe(n)?n.findIndex(t=>Vo(t,e)):de(n)&&Vo(n,e)?0:-1}const Bi=e=>e[0]==="_"||e==="$stable",ao=e=>oe(e)?e.map(un):[un(e)],Ru=(e,n,t)=>{if(n._n)return n;const a=pn((...r)=>ao(n(...r)),t);return a._c=!1,a},Fi=(e,n,t)=>{const a=e._ctx;for(const r in e){if(Bi(r))continue;const o=e[r];if(de(o))n[r]=Ru(r,o,a);else if(o!=null){const s=ao(o);n[r]=()=>s}}},Di=(e,n)=>{const t=ao(n);e.slots.default=()=>t},Lu=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=me(n),ja(n,"_",t)):Fi(n,e.slots={})}else e.slots={},n&&Di(e,n);ja(e.slots,Ya,1)},Pu=(e,n,t)=>{const{vnode:a,slots:r}=e;let o=!0,s=Te;if(a.shapeFlag&32){const i=n._;i?t&&i===1?o=!1:(Ve(r,n),!t&&i===1&&delete r._):(o=!n.$stable,Fi(n,r)),s=n}else n&&(Di(e,n),s={default:1});if(o)for(const i in r)!Bi(i)&&!(i in s)&&delete r[i]};function zi(){return{app:null,config:{isNativeTag:dc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bu=0;function Fu(e,n){return function(a,r=null){de(a)||(a=Object.assign({},a)),r!=null&&!Ee(r)&&(r=null);const o=zi(),s=new Set;let i=!1;const l=o.app={_uid:Bu++,_component:a,_props:r,_container:null,_context:o,_instance:null,version:sd,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&de(c.install)?(s.add(c),c.install(l,...d)):de(c)&&(s.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,p){if(!i){const f=W(a,r);return f.appContext=o,d&&n?n(f,c):e(f,c,p),i=!0,l._container=c,c.__vue_app__=l,Ja(f.component)||f.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l}};return l}}function xr(e,n,t,a,r=!1){if(oe(e)){e.forEach((f,j)=>xr(f,n&&(oe(n)?n[j]:n),t,a,r));return}if(xt(a)&&!r)return;const o=a.shapeFlag&4?Ja(a.component)||a.component.proxy:a.el,s=r?null:o,{i,r:l}=e,c=n&&n.r,d=i.refs===Te?i.refs={}:i.refs,p=i.setupState;if(c!=null&&c!==l&&(Pe(c)?(d[c]=null,be(p,c)&&(p[c]=null)):Re(c)&&(c.value=null)),de(l))Nn(l,i,12,[s,d]);else{const f=Pe(l),j=Re(l);if(f||j){const _=()=>{if(e.f){const y=f?be(p,l)?p[l]:d[l]:l.value;r?oe(y)&&qr(y,o):oe(y)?y.includes(o)||y.push(o):f?(d[l]=[o],be(p,l)&&(p[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else f?(d[l]=s,be(p,l)&&(p[l]=s)):j&&(l.value=s,e.k&&(d[e.k]=s))};s?(_.id=-1,Ye(_,t)):_()}}}const Ye=hu;function Du(e){return zu(e)}function zu(e,n){const t=mc();t.__VUE__=!0;const{insert:a,remove:r,patchProp:o,createElement:s,createText:i,createComment:l,setText:c,setElementText:d,parentNode:p,nextSibling:f,setScopeId:j=on,insertStaticContent:_}=e,y=(h,v,S,$=null,N=null,T=null,q=!1,P=null,L=!!v.dynamicChildren)=>{if(h===v)return;h&&!jt(h,v)&&($=ue(h),ie(h,N,T,!0),h=null),v.patchFlag===-2&&(L=!1,v.dynamicChildren=null);const{type:F,ref:V,shapeFlag:K}=v;switch(F){case Ka:x(h,v,S,$);break;case $n:C(h,v,S,$);break;case ma:h==null&&m(v,S,$,q);break;case Oe:_e(h,v,S,$,N,T,q,P,L);break;default:K&1?k(h,v,S,$,N,T,q,P,L):K&6?ve(h,v,S,$,N,T,q,P,L):(K&64||K&128)&&F.process(h,v,S,$,N,T,q,P,L,ge)}V!=null&&N&&xr(V,h&&h.ref,T,v||h,!v)},x=(h,v,S,$)=>{if(h==null)a(v.el=i(v.children),S,$);else{const N=v.el=h.el;v.children!==h.children&&c(N,v.children)}},C=(h,v,S,$)=>{h==null?a(v.el=l(v.children||""),S,$):v.el=h.el},m=(h,v,S,$)=>{[h.el,h.anchor]=_(h.children,v,S,$,h.el,h.anchor)},g=({el:h,anchor:v},S,$)=>{let N;for(;h&&h!==v;)N=f(h),a(h,S,$),h=N;a(v,S,$)},w=({el:h,anchor:v})=>{let S;for(;h&&h!==v;)S=f(h),r(h),h=S;r(v)},k=(h,v,S,$,N,T,q,P,L)=>{q=q||v.type==="svg",h==null?O(v,S,$,N,T,q,P,L):z(h,v,N,T,q,P,L)},O=(h,v,S,$,N,T,q,P)=>{let L,F;const{type:V,props:K,shapeFlag:Z,transition:E,dirs:A}=h;if(L=h.el=s(h.type,T,K&&K.is,K),Z&8?d(L,h.children):Z&16&&U(h.children,L,null,$,N,T&&V!=="foreignObject",q,P),A&&Fn(h,null,$,"created"),R(L,h,h.scopeId,q,$),K){for(const H in K)H!=="value"&&!pa(H)&&o(L,H,null,K[H],T,h.children,$,N,G);"value"in K&&o(L,"value",null,K.value),(F=K.onVnodeBeforeMount)&&cn(F,$,h)}A&&Fn(h,null,$,"beforeMount");const I=(!N||N&&!N.pendingBranch)&&E&&!E.persisted;I&&E.beforeEnter(L),a(L,v,S),((F=K&&K.onVnodeMounted)||I||A)&&Ye(()=>{F&&cn(F,$,h),I&&E.enter(L),A&&Fn(h,null,$,"mounted")},N)},R=(h,v,S,$,N)=>{if(S&&j(h,S),$)for(let T=0;T<$.length;T++)j(h,$[T]);if(N){let T=N.subTree;if(v===T){const q=N.vnode;R(h,q,q.scopeId,q.slotScopeIds,N.parent)}}},U=(h,v,S,$,N,T,q,P,L=0)=>{for(let F=L;F<h.length;F++){const V=h[F]=P?En(h[F]):un(h[F]);y(null,V,v,S,$,N,T,q,P)}},z=(h,v,S,$,N,T,q)=>{const P=v.el=h.el;let{patchFlag:L,dynamicChildren:F,dirs:V}=v;L|=h.patchFlag&16;const K=h.props||Te,Z=v.props||Te;let E;S&&Dn(S,!1),(E=Z.onVnodeBeforeUpdate)&&cn(E,S,v,h),V&&Fn(v,h,S,"beforeUpdate"),S&&Dn(S,!0);const A=N&&v.type!=="foreignObject";if(F?ee(h.dynamicChildren,F,P,S,$,A,T):q||D(h,v,P,null,S,$,A,T,!1),L>0){if(L&16)ce(P,v,K,Z,S,$,N);else if(L&2&&K.class!==Z.class&&o(P,"class",null,Z.class,N),L&4&&o(P,"style",K.style,Z.style,N),L&8){const I=v.dynamicProps;for(let H=0;H<I.length;H++){const se=I[H],ye=K[se],fe=Z[se];(fe!==ye||se==="value")&&o(P,se,ye,fe,N,h.children,S,$,G)}}L&1&&h.children!==v.children&&d(P,v.children)}else!q&&F==null&&ce(P,v,K,Z,S,$,N);((E=Z.onVnodeUpdated)||V)&&Ye(()=>{E&&cn(E,S,v,h),V&&Fn(v,h,S,"updated")},$)},ee=(h,v,S,$,N,T,q)=>{for(let P=0;P<v.length;P++){const L=h[P],F=v[P],V=L.el&&(L.type===Oe||!jt(L,F)||L.shapeFlag&70)?p(L.el):S;y(L,F,V,null,$,N,T,q,!0)}},ce=(h,v,S,$,N,T,q)=>{if(S!==$){if(S!==Te)for(const P in S)!pa(P)&&!(P in $)&&o(h,P,S[P],null,q,v.children,N,T,G);for(const P in $){if(pa(P))continue;const L=$[P],F=S[P];L!==F&&P!=="value"&&o(h,P,F,L,q,v.children,N,T,G)}"value"in $&&o(h,"value",S.value,$.value)}},_e=(h,v,S,$,N,T,q,P,L)=>{const F=v.el=h?h.el:i(""),V=v.anchor=h?h.anchor:i("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:E}=v;E&&(P=P?P.concat(E):E),h==null?(a(F,S,$),a(V,S,$),U(v.children,S,V,N,T,q,P,L)):K>0&&K&64&&Z&&h.dynamicChildren?(ee(h.dynamicChildren,Z,S,N,T,q,P),(v.key!=null||N&&v===N.subTree)&&Ui(h,v,!0)):D(h,v,S,V,N,T,q,P,L)},ve=(h,v,S,$,N,T,q,P,L)=>{v.slotScopeIds=P,h==null?v.shapeFlag&512?N.ctx.activate(v,S,$,q,L):pe(v,S,$,N,T,q,L):we(h,v,L)},pe=(h,v,S,$,N,T,q)=>{const P=h.component=Ju(h,$,N);if(Ai(h)&&(P.ctx.renderer=ge),Zu(P),P.asyncDep){if(N&&N.registerDep(P,M),!h.el){const L=P.subTree=W($n);C(null,L,v,S)}return}M(P,h,v,S,N,T,q)},we=(h,v,S)=>{const $=v.component=h.component;if(uu(h,v,S))if($.asyncDep&&!$.asyncResolved){B($,v,S);return}else $.next=v,ru($.update),$.update();else v.el=h.el,$.vnode=v},M=(h,v,S,$,N,T,q)=>{const P=()=>{if(h.isMounted){let{next:V,bu:K,u:Z,parent:E,vnode:A}=h,I=V,H;Dn(h,!1),V?(V.el=A.el,B(h,V,q)):V=A,K&&ba(K),(H=V.props&&V.props.onVnodeBeforeUpdate)&&cn(H,E,V,A),Dn(h,!0);const se=rr(h),ye=h.subTree;h.subTree=se,y(ye,se,p(ye.el),ue(ye),h,N,T),V.el=se.el,I===null&&du(h,se.el),Z&&Ye(Z,N),(H=V.props&&V.props.onVnodeUpdated)&&Ye(()=>cn(H,E,V,A),N)}else{let V;const{el:K,props:Z}=v,{bm:E,m:A,parent:I}=h,H=xt(v);if(Dn(h,!1),E&&ba(E),!H&&(V=Z&&Z.onVnodeBeforeMount)&&cn(V,I,v),Dn(h,!0),K&&Fe){const se=()=>{h.subTree=rr(h),Fe(K,h.subTree,h,N,null)};H?v.type.__asyncLoader().then(()=>!h.isUnmounted&&se()):se()}else{const se=h.subTree=rr(h);y(null,se,S,$,h,N,T),v.el=se.el}if(A&&Ye(A,N),!H&&(V=Z&&Z.onVnodeMounted)){const se=v;Ye(()=>cn(V,I,se),N)}(v.shapeFlag&256||I&&xt(I.vnode)&&I.vnode.shapeFlag&256)&&h.a&&Ye(h.a,N),h.isMounted=!0,v=S=$=null}},L=h.effect=new Vr(P,()=>eo(F),h.scope),F=h.update=()=>L.run();F.id=h.uid,Dn(h,!0),F()},B=(h,v,S)=>{v.component=h;const $=h.vnode.props;h.vnode=v,h.next=null,Iu(h,v.props,$,S),Pu(h,v.children,S),yt(),Do(),vt()},D=(h,v,S,$,N,T,q,P,L=!1)=>{const F=h&&h.children,V=h?h.shapeFlag:0,K=v.children,{patchFlag:Z,shapeFlag:E}=v;if(Z>0){if(Z&128){re(F,K,S,$,N,T,q,P,L);return}else if(Z&256){J(F,K,S,$,N,T,q,P,L);return}}E&8?(V&16&&G(F,N,T),K!==F&&d(S,K)):V&16?E&16?re(F,K,S,$,N,T,q,P,L):G(F,N,T,!0):(V&8&&d(S,""),E&16&&U(K,S,$,N,T,q,P,L))},J=(h,v,S,$,N,T,q,P,L)=>{h=h||it,v=v||it;const F=h.length,V=v.length,K=Math.min(F,V);let Z;for(Z=0;Z<K;Z++){const E=v[Z]=L?En(v[Z]):un(v[Z]);y(h[Z],E,S,null,N,T,q,P,L)}F>V?G(h,N,T,!0,!1,K):U(v,S,$,N,T,q,P,L,K)},re=(h,v,S,$,N,T,q,P,L)=>{let F=0;const V=v.length;let K=h.length-1,Z=V-1;for(;F<=K&&F<=Z;){const E=h[F],A=v[F]=L?En(v[F]):un(v[F]);if(jt(E,A))y(E,A,S,null,N,T,q,P,L);else break;F++}for(;F<=K&&F<=Z;){const E=h[K],A=v[Z]=L?En(v[Z]):un(v[Z]);if(jt(E,A))y(E,A,S,null,N,T,q,P,L);else break;K--,Z--}if(F>K){if(F<=Z){const E=Z+1,A=E<V?v[E].el:$;for(;F<=Z;)y(null,v[F]=L?En(v[F]):un(v[F]),S,A,N,T,q,P,L),F++}}else if(F>Z)for(;F<=K;)ie(h[F],N,T,!0),F++;else{const E=F,A=F,I=new Map;for(F=A;F<=Z;F++){const He=v[F]=L?En(v[F]):un(v[F]);He.key!=null&&I.set(He.key,F)}let H,se=0;const ye=Z-A+1;let fe=!1,ae=0;const Ue=new Array(ye);for(F=0;F<ye;F++)Ue[F]=0;for(F=E;F<=K;F++){const He=h[F];if(se>=ye){ie(He,N,T,!0);continue}let ln;if(He.key!=null)ln=I.get(He.key);else for(H=A;H<=Z;H++)if(Ue[H-A]===0&&jt(He,v[H])){ln=H;break}ln===void 0?ie(He,N,T,!0):(Ue[ln-A]=F+1,ln>=ae?ae=ln:fe=!0,y(He,v[ln],S,null,N,T,q,P,L),se++)}const nt=fe?Uu(Ue):it;for(H=nt.length-1,F=ye-1;F>=0;F--){const He=A+F,ln=v[He],Oo=He+1<V?v[He+1].el:$;Ue[F]===0?y(null,ln,S,Oo,N,T,q,P,L):fe&&(H<0||F!==nt[H]?he(ln,S,Oo,2):H--)}}},he=(h,v,S,$,N=null)=>{const{el:T,type:q,transition:P,children:L,shapeFlag:F}=h;if(F&6){he(h.component.subTree,v,S,$);return}if(F&128){h.suspense.move(v,S,$);return}if(F&64){q.move(h,v,S,ge);return}if(q===Oe){a(T,v,S);for(let K=0;K<L.length;K++)he(L[K],v,S,$);a(h.anchor,v,S);return}if(q===ma){g(h,v,S);return}if($!==2&&F&1&&P)if($===0)P.beforeEnter(T),a(T,v,S),Ye(()=>P.enter(T),N);else{const{leave:K,delayLeave:Z,afterLeave:E}=P,A=()=>a(T,v,S),I=()=>{K(T,()=>{A(),E&&E()})};Z?Z(T,A,I):I()}else a(T,v,S)},ie=(h,v,S,$=!1,N=!1)=>{const{type:T,props:q,ref:P,children:L,dynamicChildren:F,shapeFlag:V,patchFlag:K,dirs:Z}=h;if(P!=null&&xr(P,null,S,h,!0),V&256){v.ctx.deactivate(h);return}const E=V&1&&Z,A=!xt(h);let I;if(A&&(I=q&&q.onVnodeBeforeUnmount)&&cn(I,v,h),V&6)Ne(h.component,S,$);else{if(V&128){h.suspense.unmount(S,$);return}E&&Fn(h,null,v,"beforeUnmount"),V&64?h.type.remove(h,v,S,N,ge,$):F&&(T!==Oe||K>0&&K&64)?G(F,v,S,!1,!0):(T===Oe&&K&384||!N&&V&16)&&G(L,v,S),$&&ze(h)}(A&&(I=q&&q.onVnodeUnmounted)||E)&&Ye(()=>{I&&cn(I,v,h),E&&Fn(h,null,v,"unmounted")},S)},ze=h=>{const{type:v,el:S,anchor:$,transition:N}=h;if(v===Oe){je(S,$);return}if(v===ma){w(h);return}const T=()=>{r(S),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(h.shapeFlag&1&&N&&!N.persisted){const{leave:q,delayLeave:P}=N,L=()=>q(S,T);P?P(h.el,T,L):L()}else T()},je=(h,v)=>{let S;for(;h!==v;)S=f(h),r(h),h=S;r(v)},Ne=(h,v,S)=>{const{bum:$,scope:N,update:T,subTree:q,um:P}=h;$&&ba($),N.stop(),T&&(T.active=!1,ie(q,h,v,S)),P&&Ye(P,v),Ye(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},G=(h,v,S,$=!1,N=!1,T=0)=>{for(let q=T;q<h.length;q++)ie(h[q],v,S,$,N)},ue=h=>h.shapeFlag&6?ue(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),Le=(h,v,S)=>{h==null?v._vnode&&ie(v._vnode,null,null,!0):y(v._vnode||null,h,v,null,null,null,S),Do(),wi(),v._vnode=h},ge={p:y,um:ie,m:he,r:ze,mt:pe,mc:U,pc:D,pbc:ee,n:ue,o:e};let We,Fe;return n&&([We,Fe]=n(ge)),{render:Le,hydrate:We,createApp:Fu(Le,We)}}function Dn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Ui(e,n,t=!1){const a=e.children,r=n.children;if(oe(a)&&oe(r))for(let o=0;o<a.length;o++){const s=a[o];let i=r[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[o]=En(r[o]),i.el=s.el),t||Ui(s,i)),i.type===Ka&&(i.el=s.el)}}function Uu(e){const n=e.slice(),t=[0];let a,r,o,s,i;const l=e.length;for(a=0;a<l;a++){const c=e[a];if(c!==0){if(r=t[t.length-1],e[r]<c){n[a]=r,t.push(a);continue}for(o=0,s=t.length-1;o<s;)i=o+s>>1,e[t[i]]<c?o=i+1:s=i;c<e[t[o]]&&(o>0&&(n[a]=t[o-1]),t[o]=a)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=n[s];return t}const Hu=e=>e.__isTeleport,Oe=Symbol(void 0),Ka=Symbol(void 0),$n=Symbol(void 0),ma=Symbol(void 0),St=[];let an=null;function X(e=!1){St.push(an=e?null:[])}function qu(){St.pop(),an=St[St.length-1]||null}let Pt=1;function Yo(e){Pt+=e}function Hi(e){return e.dynamicChildren=Pt>0?an||it:null,qu(),Pt>0&&an&&an.push(e),e}function te(e,n,t,a,r,o){return Hi(u(e,n,t,a,r,o,!0))}function Bt(e,n,t,a,r){return Hi(W(e,n,t,a,r,!0))}function Sa(e){return e?e.__v_isVNode===!0:!1}function jt(e,n){return e.type===n.type&&e.key===n.key}const Ya="__vInternal",qi=({key:e})=>e??null,ya=({ref:e,ref_key:n,ref_for:t})=>e!=null?Pe(e)||Re(e)||de(e)?{i:De,r:e,k:n,f:!!t}:e:null;function u(e,n=null,t=null,a=0,r=null,o=e===Oe?0:1,s=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&qi(n),ref:n&&ya(n),scopeId:Ga,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:De};return i?(ro(l,t),o&128&&e.normalize(l)):t&&(l.shapeFlag|=Pe(t)?8:16),Pt>0&&!s&&an&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&an.push(l),l}const W=Wu;function Wu(e,n=null,t=null,a=0,r=null,o=!1){if((!e||e===Eu)&&(e=$n),Sa(e)){const i=gt(e,n,!0);return t&&ro(i,t),Pt>0&&!o&&an&&(i.shapeFlag&6?an[an.indexOf(e)]=i:an.push(i)),i.patchFlag|=-2,i}if(nd(e)&&(e=e.__vccOpts),n){n=Gu(n);let{class:i,style:l}=n;i&&!Pe(i)&&(n.class=Se(i)),Ee(l)&&(gi(l)&&!oe(l)&&(l=Ve({},l)),n.style=Tn(l))}const s=Pe(e)?1:fu(e)?128:Hu(e)?64:Ee(e)?4:de(e)?2:0;return u(e,n,t,a,r,s,o,!0)}function Gu(e){return e?gi(e)||Ya in e?Ve({},e):e:null}function gt(e,n,t=!1){const{props:a,ref:r,patchFlag:o,children:s}=e,i=n?Tt(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&qi(i),ref:n&&n.ref?t&&r?oe(r)?r.concat(ya(n)):[r,ya(n)]:ya(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function le(e=" ",n=0){return W(Ka,null,e,n)}function Vu(e,n){const t=W(ma,null,e);return t.staticCount=n,t}function nn(e="",n=!1){return n?(X(),Bt($n,null,e)):W($n,null,e)}function un(e){return e==null||typeof e=="boolean"?W($n):oe(e)?W(Oe,null,e.slice()):typeof e=="object"?En(e):W(Ka,null,String(e))}function En(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gt(e)}function ro(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(oe(n))t=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),ro(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(Ya in n)?n._ctx=De:r===3&&De&&(De.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else de(n)?(n={default:n,_ctx:De},t=32):(n=String(n),a&64?(t=16,n=[le(n)]):t=8);e.children=n,e.shapeFlag|=t}function Tt(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=Se([n.class,a.class]));else if(r==="style")n.style=Tn([n.style,a.style]);else if(Ba(r)){const o=n[r],s=a[r];s&&o!==s&&!(oe(o)&&o.includes(s))&&(n[r]=o?[].concat(o,s):s)}else r!==""&&(n[r]=a[r])}return n}function cn(e,n,t,a=null){sn(e,n,7,[t,a])}const Ku=zi();let Yu=0;function Ju(e,n,t){const a=e.type,r=(n?n.appContext:e.appContext)||Ku,o={uid:Yu++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pi(a,r),emitsOptions:xi(a,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:a.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=iu.bind(null,o),e.ce&&e.ce(o),o}let Ie=null;const Wi=()=>Ie||De,pt=e=>{Ie=e,e.scope.on()},Yn=()=>{Ie&&Ie.scope.off(),Ie=null};function Gi(e){return e.vnode.shapeFlag&4}let Ft=!1;function Zu(e,n=!1){Ft=n;const{props:t,children:a}=e.vnode,r=Gi(e);$u(e,t,r,n),Lu(e,a);const o=r?Xu(e,n):void 0;return Ft=!1,o}function Xu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=ht(new Proxy(e.ctx,Tu));const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Ki(e):null;pt(e),yt();const o=Nn(a,e,0,[e.props,r]);if(vt(),Yn(),Zs(o)){if(o.then(Yn,Yn),n)return o.then(s=>{Jo(e,s,n)}).catch(s=>{qa(s,e,0)});e.asyncDep=o}else Jo(e,o,n)}else Vi(e,n)}function Jo(e,n,t){de(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ee(n)&&(e.setupState=mi(n)),Vi(e,t)}let Zo;function Vi(e,n,t){const a=e.type;if(!e.render){if(!n&&Zo&&!a.render){const r=a.template||to(e).template;if(r){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:i,compilerOptions:l}=a,c=Ve(Ve({isCustomElement:o,delimiters:i},s),l);a.render=Zo(r,c)}}e.render=a.render||on}pt(e),yt(),Cu(e),vt(),Yn()}function Qu(e){return new Proxy(e.attrs,{get(n,t){return Je(e,"get","$attrs"),n[t]}})}function Ki(e){const n=a=>{e.exposed=a||{}};let t;return{get attrs(){return t||(t=Qu(e))},slots:e.slots,emit:e.emit,expose:n}}function Ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mi(ht(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Et)return Et[t](e)},has(n,t){return t in n||t in Et}}))}function ed(e,n=!0){return de(e)?e.displayName||e.name:e.name||n&&e.__name}function nd(e){return de(e)&&"__vccOpts"in e}const Me=(e,n)=>nu(e,n,Ft);function td(){return ad().slots}function ad(){const e=Wi();return e.setupContext||(e.setupContext=Ki(e))}function Yi(e,n,t){const a=arguments.length;return a===2?Ee(n)&&!oe(n)?Sa(n)?W(e,null,[n]):W(e,n):W(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Sa(t)&&(t=[t]),W(e,n,t))}const rd=Symbol(""),od=()=>ne(rd),sd="3.2.47",id="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,Xo=Hn&&Hn.createElement("template"),ld={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const r=n?Hn.createElementNS(id,e):Hn.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,r,o){const s=t?t.previousSibling:n.lastChild;if(r&&(r===o||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===o||!(r=r.nextSibling)););else{Xo.innerHTML=a?`<svg>${e}</svg>`:e;const i=Xo.content;if(a){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function cd(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function ud(e,n,t){const a=e.style,r=Pe(t);if(t&&!r){if(n&&!Pe(n))for(const o in n)t[o]==null&&Er(a,o,"");for(const o in t)Er(a,o,t[o])}else{const o=a.display;r?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=o)}}const Qo=/\s*!important$/;function Er(e,n,t){if(oe(t))t.forEach(a=>Er(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=dd(e,n);Qo.test(t)?e.setProperty(mt(a),t.replace(Qo,""),"important"):e[a]=t}}const es=["Webkit","Moz","ms"],ir={};function dd(e,n){const t=ir[n];if(t)return t;let a=hn(n);if(a!=="filter"&&a in e)return ir[n]=a;a=za(a);for(let r=0;r<es.length;r++){const o=es[r]+a;if(o in e)return ir[n]=o}return n}const ns="http://www.w3.org/1999/xlink";function fd(e,n,t,a,r){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(ns,n.slice(6,n.length)):e.setAttributeNS(ns,n,t);else{const o=cc(n);t==null||o&&!Ks(t)?e.removeAttribute(n):e.setAttribute(n,o?"":t)}}function hd(e,n,t,a,r,o,s){if(n==="innerHTML"||n==="textContent"){a&&s(a,r,o),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Ks(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}function qn(e,n,t,a){e.addEventListener(n,t,a)}function gd(e,n,t,a){e.removeEventListener(n,t,a)}function pd(e,n,t,a,r=null){const o=e._vei||(e._vei={}),s=o[n];if(a&&s)s.value=a;else{const[i,l]=bd(n);if(a){const c=o[n]=vd(a,r);qn(e,i,c,l)}else s&&(gd(e,i,s,l),o[n]=void 0)}}const ts=/(?:Once|Passive|Capture)$/;function bd(e){let n;if(ts.test(e)){n={};let a;for(;a=e.match(ts);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mt(e.slice(2)),n]}let lr=0;const md=Promise.resolve(),yd=()=>lr||(md.then(()=>lr=0),lr=Date.now());function vd(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;sn(_d(a,t.value),n,5,[a])};return t.value=e,t.attached=yd(),t}function _d(e,n){if(oe(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>r=>!r._stopped&&a&&a(r))}else return n}const as=/^on[a-z]/,jd=(e,n,t,a,r=!1,o,s,i,l)=>{n==="class"?cd(e,a,r):n==="style"?ud(e,t,a):Ba(n)?Hr(n)||pd(e,n,t,a,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):wd(e,n,a,r))?hd(e,n,a,o,s,i,l):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),fd(e,n,a,r))};function wd(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&as.test(n)&&de(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||as.test(n)&&Pe(t)?!1:n in e}const Ta=e=>{const n=e.props["onUpdate:modelValue"]||!1;return oe(n)?t=>ba(n,t):n};function kd(e){e.target.composing=!0}function rs(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const tt={created(e,{modifiers:{lazy:n,trim:t,number:a}},r){e._assign=Ta(r);const o=a||r.props&&r.props.type==="number";qn(e,n?"change":"input",s=>{if(s.target.composing)return;let i=e.value;t&&(i=i.trim()),o&&(i=pr(i)),e._assign(i)}),t&&qn(e,"change",()=>{e.value=e.value.trim()}),n||(qn(e,"compositionstart",kd),qn(e,"compositionend",rs),qn(e,"change",rs))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:r}},o){if(e._assign=Ta(o),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(r||e.type==="number")&&pr(e.value)===n))return;const s=n??"";e.value!==s&&(e.value=s)}},xd={deep:!0,created(e,n,t){e._assign=Ta(t),qn(e,"change",()=>{const a=e._modelValue,r=Ed(e),o=e.checked,s=e._assign;if(oe(a)){const i=Ys(a,r),l=i!==-1;if(o&&!l)s(a.concat(r));else if(!o&&l){const c=[...a];c.splice(i,1),s(c)}}else if(Fa(a)){const i=new Set(a);o?i.add(r):i.delete(r),s(i)}else s(Ji(e,o))})},mounted:os,beforeUpdate(e,n,t){e._assign=Ta(t),os(e,n,t)}};function os(e,{value:n,oldValue:t},a){e._modelValue=n,oe(n)?e.checked=Ys(n,a.props.value)>-1:Fa(n)?e.checked=n.has(a.props.value):n!==t&&(e.checked=Pa(n,Ji(e,!0)))}function Ed(e){return"_value"in e?e._value:e.value}function Ji(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Sd=Ve({patchProp:jd},ld);let ss;function Td(){return ss||(ss=Du(Sd))}const Cd=(...e)=>{const n=Td().createApp(...e),{mount:t}=n;return n.mount=a=>{const r=Ad(a);if(!r)return;const o=n._component;!de(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const s=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},n};function Ad(e){return Pe(e)?document.querySelector(e):e}var Od=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Zi;const Za=e=>Zi=e,Xi=Symbol();function Sr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ct;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ct||(Ct={}));function Nd(){const e=ni(!0),n=e.run(()=>ke({}));let t=[],a=[];const r=ht({install(o){Za(r),r._a=o,o.provide(Xi,r),o.config.globalProperties.$pinia=r,a.forEach(s=>t.push(s)),a=[]},use(o){return!this._a&&!Od?a.push(o):t.push(o),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return r}const Qi=()=>{};function is(e,n,t,a=Qi){e.push(n);const r=()=>{const o=e.indexOf(n);o>-1&&(e.splice(o,1),a())};return!t&&ti()&&vc(r),r}function at(e,...n){e.slice().forEach(t=>{t(...n)})}function Tr(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,a)=>e.set(a,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const a=n[t],r=e[t];Sr(r)&&Sr(a)&&e.hasOwnProperty(t)&&!Re(a)&&!On(a)?e[t]=Tr(r,a):e[t]=a}return e}const Md=Symbol();function $d(e){return!Sr(e)||!e.hasOwnProperty(Md)}const{assign:xn}=Object;function Id(e){return!!(Re(e)&&e.effect)}function Rd(e,n,t,a){const{state:r,actions:o,getters:s}=n,i=t.state.value[e];let l;function c(){i||(t.state.value[e]=r?r():{});const d=Zc(t.state.value[e]);return xn(d,o,Object.keys(s||{}).reduce((p,f)=>(p[f]=ht(Me(()=>{Za(t);const j=t._s.get(e);return s[f].call(j,j)})),p),{}))}return l=el(e,c,n,t,a,!0),l}function el(e,n,t={},a,r,o){let s;const i=xn({actions:{}},t),l={deep:!0};let c,d,p=ht([]),f=ht([]),j;const _=a.state.value[e];!o&&!_&&(a.state.value[e]={}),ke({});let y;function x(R){let U;c=d=!1,typeof R=="function"?(R(a.state.value[e]),U={type:Ct.patchFunction,storeId:e,events:j}):(Tr(a.state.value[e],R),U={type:Ct.patchObject,payload:R,storeId:e,events:j});const z=y=Symbol();_i().then(()=>{y===z&&(c=!0)}),d=!0,at(p,U,a.state.value[e])}const C=o?function(){const{state:U}=t,z=U?U():{};this.$patch(ee=>{xn(ee,z)})}:Qi;function m(){s.stop(),p=[],f=[],a._s.delete(e)}function g(R,U){return function(){Za(a);const z=Array.from(arguments),ee=[],ce=[];function _e(we){ee.push(we)}function ve(we){ce.push(we)}at(f,{args:z,name:R,store:k,after:_e,onError:ve});let pe;try{pe=U.apply(this&&this.$id===e?this:k,z)}catch(we){throw at(ce,we),we}return pe instanceof Promise?pe.then(we=>(at(ee,we),we)).catch(we=>(at(ce,we),Promise.reject(we))):(at(ee,pe),pe)}}const w={_p:a,$id:e,$onAction:is.bind(null,f),$patch:x,$reset:C,$subscribe(R,U={}){const z=is(p,R,U.detached,()=>ee()),ee=s.run(()=>ut(()=>a.state.value[e],ce=>{(U.flush==="sync"?d:c)&&R({storeId:e,type:Ct.direct,events:j},ce)},xn({},l,U)));return z},$dispose:m},k=Ha(w);a._s.set(e,k);const O=a._e.run(()=>(s=ni(),s.run(()=>n())));for(const R in O){const U=O[R];if(Re(U)&&!Id(U)||On(U))o||(_&&$d(U)&&(Re(U)?U.value=_[R]:Tr(U,_[R])),a.state.value[e][R]=U);else if(typeof U=="function"){const z=g(R,U);O[R]=z,i.actions[R]=U}}return xn(k,O),xn(me(k),O),Object.defineProperty(k,"$state",{get:()=>a.state.value[e],set:R=>{x(U=>{xn(U,R)})}}),a._p.forEach(R=>{xn(k,s.run(()=>R({store:k,app:a._a,pinia:a,options:i})))}),_&&o&&t.hydrate&&t.hydrate(k.$state,_),c=!0,d=!0,k}function Ld(e,n,t){let a,r;const o=typeof n=="function";typeof e=="string"?(a=e,r=o?t:n):(r=e,a=e.id);function s(i,l){const c=Wi();return i=i||c&&ne(Xi,null),i&&Za(i),i=Zi,i._s.has(a)||(o?el(a,n,r,i):Rd(a,r,i)),i._s.get(a)}return s.$id=a,s}const Pd="vue3-code-block",nl="2.0.0-beta.1",Bd="Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.",Fd="dist/vue3-code-block.js",Dd="dist/vue3-code-block.es.js",zd="dist/types/index.d.ts",Ud={dev:"vite",watch:"pnpm dev",play:"sh src/playground/configs/build.sh && vite",bundle:"rollup -c --bundleConfigAsCjs",build:"vite build",predeploy:"npm run build",deploy:"gh-pages -d docs",prepublishOnly:"npm run bundle",lint:"eslint src/**/*.{ts,vue} --max-warnings 4"},Hd={node:"19.0.1"},qd="WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)",Wd=[{type:"paypal",url:"https://paypal.me/webdevnerdstuff"},{type:"patreon",url:"https://www.patreon.com/WebDevNerdStuff"}],Gd="MIT",Vd=["dist/*","LICENSE.md","README.md"],Kd="https://github.com/webdevnerdstuff/vue3-code-block",Yd={url:"https://github.com/webdevnerdstuff/vue3-code-block/issues"},Jd="https://webdevnerdstuff.github.io/vue3-code-block/",Zd=["vue3-code-block","code","pre","highlight","syntax","vue","vue3","prism","prismjs","highlightjs","highlight.js","component","javascript","typescript","neon bunny","webdevnerdstuff","wdns"],Xd={vue:"^3.2.47"},Qd={"highlight.js":"^11.7.0",prismjs:"^1.29.0","ua-parser-js":"^1.0.35"},ef={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@fortawesome/fontawesome-svg-core":"^6.4.0","@fortawesome/free-brands-svg-icons":"^6.4.0","@fortawesome/free-solid-svg-icons":"^6.4.0","@fortawesome/vue-fontawesome":"^3.0.3","@rollup/plugin-alias":"^5.0.0","@rollup/plugin-commonjs":"^24.0.1","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.2","@rollup/plugin-terser":"^0.4.1","@types/node":"^18.15.11","@types/prismjs":"^1.26.0","@typescript-eslint/eslint-plugin":"^5.57.1","@typescript-eslint/parser":"^5.57.1","@vitejs/plugin-vue":"^4.1.0","@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-eslint":"^5.0.8","@vue/cli-service":"^5.0.8","@vue/compiler-sfc":"^3.2.47","@vue/eslint-config-typescript":"^11.0.2",autoprefixer:"^10.4.13",eslint:"^8.38.0","eslint-config-prettier":"^8.8.0","eslint-plugin-import":"^2.27.5","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.10.0","gh-pages":"^5.0.0",husky:"^8.0.3","lint-staged":"^13.2.1",pinia:"^2.0.34",postcss:"^8.4.21","postcss-html":"^1.5.0","postcss-scss":"^4.0.6",prettier:"^2.8.7",rollup:"^3.20.2","rollup-plugin-copy":"^3.4.0","rollup-plugin-polyfill-node":"^0.12.0","rollup-plugin-postcss":"^4.0.2","rollup-plugin-scss":"^4.0.0","rollup-plugin-typescript2":"^0.34.1",sass:"^1.61.0",stylelint:"^15.4.0","stylelint-config-standard":"^32.0.0","stylelint-order":"^6.0.2","stylelint-scss":"^4.6.0",typescript:"^5.0.4",vite:"^4.2.1","vite-plugin-babel":"^1.1.3","vite-plugin-eslint":"^1.8.1","vite-plugin-stylelint":"^4.2.0",vue:"^3.2.47","vue-tsc":"^1.2.0"},oo={name:Pd,version:nl,description:Bd,private:!1,main:Fd,module:Dd,types:zd,scripts:Ud,engines:Hd,"lint-staged":{"src/**/*.{js,ts,vue}":["npm run lint"]},author:qd,funding:Wd,license:Gd,files:Vd,repository:Kd,bugs:Yd,homepage:Jd,keywords:Zd,peerDependencies:Xd,dependencies:Qd,devDependencies:ef},nf=[{label:"Default",value:"default"},{label:"Coy",value:"coy"},{label:"Dark",value:"dark"},{label:"Funky",value:"funky"},{label:"Night Owl (Prism Themes Repo)",value:"themes-night-owl"},{label:"Okaidia",value:"okaidia"},{label:"Solarizedlight",value:"solarizedlight"},{label:"Tomorrow",value:"tomorrow"},{label:"Twilight",value:"twilight"}],tf=[{label:"Default",value:"default"},{label:"A11y Dark",value:"a11y-dark"},{label:"A11y Light",value:"a11y-light"},{label:"Agate",value:"agate"},{label:"An Old Hope",value:"an-old-hope"},{label:"Android Studio",value:"androidstudio"},{label:"Arduino Light",value:"arduino-light"},{label:"Arta",value:"arta"},{label:"Ascetic",value:"ascetic"},{label:"Atom One Dark Reasonable",value:"atom-one-dark-reasonable"},{label:"Atom One Dark",value:"atom-one-dark"},{label:"Atom One Light",value:"atom-one-light"},{label:"Brown Paper",value:"brown-paper"},{label:"Base16 One Dark",value:"base16-onedark"},{label:"CodePen Embed",value:"codepen-embed"},{label:"Color Brewer",value:"color-brewer"},{label:"Dark",value:"dark"},{label:"DeviBeans",value:"devibeans"},{label:"Docco",value:"docco"},{label:"Far",value:"far"},{label:"Felipec",value:"felipec"},{label:"Foundation",value:"foundation"},{label:"Github Dark Dimmed",value:"github-dark-dimmed"},{label:"Github Dark",value:"github-dark"},{label:"Github",value:"github"},{label:"GML",value:"gml"},{label:"Google Code",value:"googlecode"},{label:"Gradient Dark",value:"gradient-dark"},{label:"Gradient Light",value:"gradient-light"},{label:"Grayscale",value:"grayscale"},{label:"Hybrid",value:"hybrid"},{label:"Idea",value:"idea"},{label:"IntelliJ Light",value:"intellij-light"},{label:"IR Black",value:"ir-black"},{label:"ISBL Editor Dark",value:"isbl-editor-dark"},{label:"ISBL Editor Light",value:"isbl-editor-light"},{label:"Kimbie Dark",value:"kimbie-dark"},{label:"Kimbie Light",value:"kimbie-light"},{label:"Lightfair",value:"lightfair"},{label:"Lioshi",value:"lioshi"},{label:"Magula",value:"magula"},{label:"Mono Blue",value:"mono-blue"},{label:"Monokai Sublime",value:"monokai-sublime"},{label:"Monokai",value:"monokai"},{label:"Night Owl",value:"night-owl"},{label:"NNFX Dark",value:"nnfx-dark"},{label:"NNFX- Light",value:"nnfx-light"},{label:"Nord",value:"nord"},{label:"Obsidian",value:"obsidian"},{label:"Panda Syntax Dark",value:"panda-syntax-dark"},{label:"Panda Syntax Light",value:"panda-syntax-light"},{label:"Paraiso Dark",value:"paraiso-dark"},{label:"Paraiso Light",value:"paraiso-light"},{label:"Pojoaque",value:"pojoaque"},{label:"PureBasic",value:"purebasic"},{label:"Qt Creator Dark",value:"qtcreator-dark"},{label:"Qt Creator Light",value:"qtcreator-light"},{label:"Rainbow",value:"rainbow"},{label:"RouterOS",value:"routeros"},{label:"School Book",value:"school-book"},{label:"Shades of Purple",value:"shades-of-purple"},{label:"Srcery",value:"srcery"},{label:"Stack Overflow Dark",value:"stackoverflow-dark"},{label:"Stack Overflow Light",value:"stackoverflow-light"},{label:"Sunburst",value:"sunburst"},{label:"Tokyo Night Dark",value:"tokyo-night-dark"},{label:"Tokyo Night Light",value:"tokyo-night-light"},{label:"Tomorrow Night Blue",value:"tomorrow-night-blue"},{label:"Tomorrow Night Bright",value:"tomorrow-night-bright"},{label:"VS",value:"vs"},{label:"VS 2015",value:"vs2015"},{label:"Xcode",value:"xcode"},{label:"xt256",value:"xt256"}],tl=oo.dependencies,al=oo.name,ls=tl.prismjs.replace("^",""),cs=tl["highlight.js"].replace("^",""),ra=`https://github.com/webdevnerdstuff/${al}`,af={changeLog:`${ra}/blob/main/CHANGELOG.md`,contribute:`${ra}/tree/main/src/plugin/styles`,github:ra,githubProfile:"https://github.com/webdevnerdstuff",license:`${ra}/blob/main/LICENSE.md`,neonBunnyTheme:"https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny",npm:`https://www.npmjs.com/package/${al}`,uaParser:"https://www.npmjs.com/package/ua-parser-js",vueJs:"https://vuejs.org/"},rf={cdn:`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${cs}/build/styles/`,homepage:"https://highlightjs.org/",themes:`https://github.com/highlightjs/highlight.js/tree/${cs}/src/styles`},of={cdn:`https://cdn.jsdelivr.net/gh/PrismJS/prism@${ls}/themes/`,homepage:"https://prismjs.com/",prismThemes:`https://github.com/PrismJS/prism/tree/v${ls}/themes`,themes:"https://github.com/PrismJS/prism-themes"},sf={prism:{label:"PrismJS",id:"prism"},highlightjs:{label:"Highlight.js",id:"highlightjs"}},lf=[{label:"Neon Bunny",value:"neon-bunny"},{label:"Neon Bunny - Carrot",value:"neon-bunny-carrot"}],rl=Ld("core",{actions:{setLocalStorage(e){const n=localStorage.getItem(this.storageName),t=e??n;return localStorage.setItem(this.storageName,t),t},setTheme(e,n){let t=e;return t==="toggle"&&(t=n!=="dark"?"dark":"light"),document.documentElement.setAttribute("data-bs-theme",t),localStorage.setItem("theme",t),t}},getters:{getLocalStorage:e=>()=>localStorage.getItem(e.storageName)},state:()=>({highlightJsLinks:rf,highlightThemes:tf,libraries:sf,links:af,neonBunnyThemes:lf,package:oo,prismLinks:of,prismThemes:nf,storageName:"vue3-code-block-library"})}),cf="/vue3-code-block/assets/vue-5532db34.svg",uf={class:"row mb-5"},df=u("h2",null,"Change Log",-1),ff=[df],hf={class:"col-12"},gf=["href"],pf={__name:"ChangeLogSection",setup(e){const n=ne("styleData"),t=ne("links");return(a,r)=>(X(),te("div",uf,[u("div",{class:Se(b(n).h2ColClass)},ff,2),u("div",hf,[u("a",{href:b(t).changeLog,target:"_blank"},"CHANGELOG.md",8,gf)])]))}};const so=(e,n)=>{const t=e.__vccOpts||e;for(const[a,r]of n)t[a]=r;return t},io=e=>(Ei("data-v-465828f6"),e=e(),Si(),e),bf={class:"row mb-5"},mf=io(()=>u("h2",null,"CSS Variables",-1)),yf=[mf],vf=io(()=>u("div",{class:"col-12 mb-3"},[u("p",null,[le(" You can find all CSS variables defined in the "),u("code",null,"src/plugin/styles/cssVariables.css"),le(" file. Colors are using "),u("code",null,"hsl"),le(" values. ")])],-1)),_f={class:"col-12 mb-3"},jf={class:"table-responsive"},wf={class:"table"},kf=io(()=>u("thead",null,[u("tr",null,[u("th",{width:"auto"},"Name"),u("th",null,"Value")])],-1)),xf={key:0,class:"text-success-emphasis bg-success-subtle"},Ef={colspan:"2"},Sf={key:0,class:"text-dark-emphasis bg-dark-subtle",colspan:"2",valign:"top"},Tf={class:"td-nowrap",valign:"top"},Cf={key:0},Af={key:1,valign:"top"},Of={key:2,valign:"top"},Nf={__name:"CssVariablesSection",setup(e){const n=ne("styleData"),t=[{name:"Neon Bunny Theme Colors",header:!0,items:[{name:"neon-bunny",subHeader:!0},{name:"--v-cb-tab-neon-bunny",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-icon",hsl:"207 100% 52%"},{name:"--v-cb-tab-neon-bunny-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-icon-failed",hsl:"3 100% 58%"},{name:"neon-bunny-carrot",subHeader:!0},{name:"--v-cb-tab-neon-bunny-carrot",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-carrot-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-carrot-icon",hsl:"292 100% 50%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-failed",hsl:"3 100% 58%"}]}];return(a,r)=>(X(),te("div",bf,[u("div",{class:Se(b(n).h2ColClass)},yf,2),vf,u("div",_f,[u("div",jf,[u("table",wf,[kf,(X(),te(Oe,null,Zn(t,o=>u("tbody",{key:o.name},[o.header?(X(),te("tr",xf,[u("th",Ef,xe(o.name),1)])):nn("",!0),(X(!0),te(Oe,null,Zn(o.items,s=>(X(),te("tr",{key:s},[s.subHeader?(X(),te("td",Sf,[u("strong",null,[u("em",null,xe(s.name),1)])])):(X(),te(Oe,{key:1},[u("td",Tf,xe(s.name),1),s.hsl?(X(),te("td",Cf,[s.hsl?(X(),te("span",{key:0,class:"color-swatch",style:Tn(`background-color: hsl(${s.hsl});`)},null,4)):nn("",!0),le(" "+xe(s.hsl),1)])):s.code?(X(),te("td",Af,[u("code",null,xe(s.code),1)])):(X(),te("td",Of,xe(s.value),1))],64))]))),128))])),64))])])])]))}},Mf=so(Nf,[["__scopeId","data-v-465828f6"]]),$f={class:"row mb-5"},If=u("h2",null,"Dependencies",-1),Rf=[If],Lf={class:"col-12"},Pf=["href"],Bf=u("br",null,null,-1),Ff=["href"],Df=u("br",null,null,-1),zf=["href"],Uf=u("br",null,null,-1),Hf=["href"],qf={__name:"DependenciesSection",setup(e){const n=ne("highlightJsLinks"),t=ne("links"),a=ne("prismLinks"),r=ne("styleData");return(o,s)=>(X(),te("div",$f,[u("div",{class:Se(b(r).h2ColClass)},Rf,2),u("div",Lf,[u("a",{href:b(a).homepage,target:"_blank"},"PrismJS",8,Pf),Bf,u("a",{href:b(n).homepage,target:"_blank"},"Highlight.js",8,Ff),Df,u("a",{href:b(t).vueJs,target:"_blank"},"Vue 3",8,zf),Uf,u("a",{href:b(t).uaParser,target:"_blank"},"UAParser.js",8,Hf)])]))}};var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lo={exports:{}};function co(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&co(t)}),e}lo.exports=co;lo.exports.default=co;class us{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ol(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Cn(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const r in a)t[r]=a[r]}),t}const Wf="</span>",ds=e=>!!e.scope||e.sublanguage&&e.language,Gf=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,r)=>`${a}${"_".repeat(r+1)}`)].join(" ")}return`${n}${e}`};class Vf{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=ol(n)}openNode(n){if(!ds(n))return;let t="";n.sublanguage?t=`language-${n.language}`:t=Gf(n.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(n){ds(n)&&(this.buffer+=Wf)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const fs=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class uo{constructor(){this.rootNode=fs(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=fs({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{uo._collapse(t)}))}}class Kf extends uo{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const a=n.root;a.sublanguage=!0,a.language=t,this.add(a)}toHTML(){return new Vf(this,this.options).value()}finalize(){return!0}}function Dt(e){return e?typeof e=="string"?e:e.source:null}function sl(e){return et("(?=",e,")")}function Yf(e){return et("(?:",e,")*")}function Jf(e){return et("(?:",e,")?")}function et(...e){return e.map(t=>Dt(t)).join("")}function Zf(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function fo(...e){return"("+(Zf(e).capture?"":"?:")+e.map(a=>Dt(a)).join("|")+")"}function il(e){return new RegExp(e.toString()+"|").exec("").length-1}function Xf(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Qf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ho(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const r=t;let o=Dt(a),s="";for(;o.length>0;){const i=Qf.exec(o);if(!i){s+=o;break}s+=o.substring(0,i.index),o=o.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?s+="\\"+String(Number(i[1])+r):(s+=i[0],i[0]==="("&&t++)}return s}).map(a=>`(${a})`).join(n)}const eh=/\b\B/,ll="[a-zA-Z]\\w*",go="[a-zA-Z_]\\w*",cl="\\b\\d+(\\.\\d+)?",ul="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",dl="\\b(0b[01]+)",nh="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",th=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=et(n,/.*\b/,e.binary,/\b.*/)),Cn({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},zt={begin:"\\\\[\\s\\S]",relevance:0},ah={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[zt]},rh={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[zt]},oh={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Xa=function(e,n,t={}){const a=Cn({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=fo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:et(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},sh=Xa("//","$"),ih=Xa("/\\*","\\*/"),lh=Xa("#","$"),ch={scope:"number",begin:cl,relevance:0},uh={scope:"number",begin:ul,relevance:0},dh={scope:"number",begin:dl,relevance:0},fh={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[zt,{begin:/\[/,end:/\]/,relevance:0,contains:[zt]}]}]},hh={scope:"title",begin:ll,relevance:0},gh={scope:"title",begin:go,relevance:0},ph={begin:"\\.\\s*"+go,relevance:0},bh=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var oa=Object.freeze({__proto__:null,MATCH_NOTHING_RE:eh,IDENT_RE:ll,UNDERSCORE_IDENT_RE:go,NUMBER_RE:cl,C_NUMBER_RE:ul,BINARY_NUMBER_RE:dl,RE_STARTERS_RE:nh,SHEBANG:th,BACKSLASH_ESCAPE:zt,APOS_STRING_MODE:ah,QUOTE_STRING_MODE:rh,PHRASAL_WORDS_MODE:oh,COMMENT:Xa,C_LINE_COMMENT_MODE:sh,C_BLOCK_COMMENT_MODE:ih,HASH_COMMENT_MODE:lh,NUMBER_MODE:ch,C_NUMBER_MODE:uh,BINARY_NUMBER_MODE:dh,REGEXP_MODE:fh,TITLE_MODE:hh,UNDERSCORE_TITLE_MODE:gh,METHOD_GUARD:ph,END_SAME_AS_BEGIN:bh});function mh(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function yh(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function vh(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=mh,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function _h(e,n){Array.isArray(e.illegal)&&(e.illegal=fo(...e.illegal))}function jh(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function wh(e,n){e.relevance===void 0&&(e.relevance=1)}const kh=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=et(t.beforeMatch,sl(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},xh=["of","and","for","in","not","or","if","then","parent","list","value"],Eh="keyword";function fl(e,n,t=Eh){const a=Object.create(null);return typeof e=="string"?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach(function(o){Object.assign(a,fl(e[o],n,o))}),a;function r(o,s){n&&(s=s.map(i=>i.toLowerCase())),s.forEach(function(i){const l=i.split("|");a[l[0]]=[o,Sh(l[0],l[1])]})}}function Sh(e,n){return n?Number(n):Th(e)?0:1}function Th(e){return xh.includes(e.toLowerCase())}const hs={},Jn=e=>{console.error(e)},gs=(e,...n)=>{console.log(`WARN: ${e}`,...n)},rt=(e,n)=>{hs[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),hs[`${e}/${n}`]=!0)},Ca=new Error;function hl(e,n,{key:t}){let a=0;const r=e[t],o={},s={};for(let i=1;i<=n.length;i++)s[i+a]=r[i],o[i+a]=!0,a+=il(n[i-1]);e[t]=s,e[t]._emit=o,e[t]._multi=!0}function Ch(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Jn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ca;if(typeof e.beginScope!="object"||e.beginScope===null)throw Jn("beginScope must be object"),Ca;hl(e,e.begin,{key:"beginScope"}),e.begin=ho(e.begin,{joinWith:""})}}function Ah(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Jn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ca;if(typeof e.endScope!="object"||e.endScope===null)throw Jn("endScope must be object"),Ca;hl(e,e.end,{key:"endScope"}),e.end=ho(e.end,{joinWith:""})}}function Oh(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Nh(e){Oh(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Ch(e),Ah(e)}function Mh(e){function n(s,i){return new RegExp(Dt(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,i]),this.matchAt+=il(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(l=>l[1]);this.matcherRe=n(ho(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(i);if(!l)return null;const c=l.findIndex((p,f)=>f>0&&p!==void 0),d=this.matchIndexes[c];return l.splice(0,c),Object.assign(l,d)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const l=new t;return this.rules.slice(i).forEach(([c,d])=>l.addRule(c,d)),l.compile(),this.multiRegexes[i]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,l){this.rules.push([i,l]),l.type==="begin"&&this.count++}exec(i){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let c=l.exec(i);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,c=d.exec(i)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function r(s){const i=new a;return s.contains.forEach(l=>i.addRule(l.begin,{rule:l,type:"begin"})),s.terminatorEnd&&i.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&i.addRule(s.illegal,{type:"illegal"}),i}function o(s,i){const l=s;if(s.isCompiled)return l;[yh,jh,Nh,kh].forEach(d=>d(s,i)),e.compilerExtensions.forEach(d=>d(s,i)),s.__beforeBegin=null,[vh,_h,wh].forEach(d=>d(s,i)),s.isCompiled=!0;let c=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),c=s.keywords.$pattern,delete s.keywords.$pattern),c=c||/\w+/,s.keywords&&(s.keywords=fl(s.keywords,e.case_insensitive)),l.keywordPatternRe=n(c,!0),i&&(s.begin||(s.begin=/\B|\b/),l.beginRe=n(l.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(l.endRe=n(l.end)),l.terminatorEnd=Dt(l.end)||"",s.endsWithParent&&i.terminatorEnd&&(l.terminatorEnd+=(s.end?"|":"")+i.terminatorEnd)),s.illegal&&(l.illegalRe=n(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(d){return $h(d==="self"?s:d)})),s.contains.forEach(function(d){o(d,l)}),s.starts&&o(s.starts,i),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Cn(e.classNameAliases||{}),o(e)}function gl(e){return e?e.endsWithParent||gl(e.starts):!1}function $h(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return Cn(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:gl(e)?Cn(e,{starts:e.starts?Cn(e.starts):null}):Object.isFrozen(e)?Cn(e):e}var Ih="11.7.0";class Rh extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const cr=ol,ps=Cn,bs=Symbol("nomatch"),Lh=7,Ph=function(e){const n=Object.create(null),t=Object.create(null),a=[];let r=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Kf};function l(M){return i.noHighlightRe.test(M)}function c(M){let B=M.className+" ";B+=M.parentNode?M.parentNode.className:"";const D=i.languageDetectRe.exec(B);if(D){const J=z(D[1]);return J||(gs(o.replace("{}",D[1])),gs("Falling back to no-highlight mode for this block.",M)),J?D[1]:"no-highlight"}return B.split(/\s+/).find(J=>l(J)||z(J))}function d(M,B,D){let J="",re="";typeof B=="object"?(J=M,D=B.ignoreIllegals,re=B.language):(rt("10.7.0","highlight(lang, code, ...args) has been deprecated."),rt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),re=M,J=B),D===void 0&&(D=!0);const he={code:J,language:re};pe("before:highlight",he);const ie=he.result?he.result:p(he.language,he.code,D);return ie.code=he.code,pe("after:highlight",ie),ie}function p(M,B,D,J){const re=Object.create(null);function he(E,A){return E.keywords[A]}function ie(){if(!T.keywords){P.addText(L);return}let E=0;T.keywordPatternRe.lastIndex=0;let A=T.keywordPatternRe.exec(L),I="";for(;A;){I+=L.substring(E,A.index);const H=S.case_insensitive?A[0].toLowerCase():A[0],se=he(T,H);if(se){const[ye,fe]=se;if(P.addText(I),I="",re[H]=(re[H]||0)+1,re[H]<=Lh&&(F+=fe),ye.startsWith("_"))I+=A[0];else{const ae=S.classNameAliases[ye]||ye;P.addKeyword(A[0],ae)}}else I+=A[0];E=T.keywordPatternRe.lastIndex,A=T.keywordPatternRe.exec(L)}I+=L.substring(E),P.addText(I)}function ze(){if(L==="")return;let E=null;if(typeof T.subLanguage=="string"){if(!n[T.subLanguage]){P.addText(L);return}E=p(T.subLanguage,L,!0,q[T.subLanguage]),q[T.subLanguage]=E._top}else E=j(L,T.subLanguage.length?T.subLanguage:null);T.relevance>0&&(F+=E.relevance),P.addSublanguage(E._emitter,E.language)}function je(){T.subLanguage!=null?ze():ie(),L=""}function Ne(E,A){let I=1;const H=A.length-1;for(;I<=H;){if(!E._emit[I]){I++;continue}const se=S.classNameAliases[E[I]]||E[I],ye=A[I];se?P.addKeyword(ye,se):(L=ye,ie(),L=""),I++}}function G(E,A){return E.scope&&typeof E.scope=="string"&&P.openNode(S.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(P.addKeyword(L,S.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),L=""):E.beginScope._multi&&(Ne(E.beginScope,A),L="")),T=Object.create(E,{parent:{value:T}}),T}function ue(E,A,I){let H=Xf(E.endRe,I);if(H){if(E["on:end"]){const se=new us(E);E["on:end"](A,se),se.isMatchIgnored&&(H=!1)}if(H){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return ue(E.parent,A,I)}function Le(E){return T.matcher.regexIndex===0?(L+=E[0],1):(Z=!0,0)}function ge(E){const A=E[0],I=E.rule,H=new us(I),se=[I.__beforeBegin,I["on:begin"]];for(const ye of se)if(ye&&(ye(E,H),H.isMatchIgnored))return Le(A);return I.skip?L+=A:(I.excludeBegin&&(L+=A),je(),!I.returnBegin&&!I.excludeBegin&&(L=A)),G(I,E),I.returnBegin?0:A.length}function We(E){const A=E[0],I=B.substring(E.index),H=ue(T,E,I);if(!H)return bs;const se=T;T.endScope&&T.endScope._wrap?(je(),P.addKeyword(A,T.endScope._wrap)):T.endScope&&T.endScope._multi?(je(),Ne(T.endScope,E)):se.skip?L+=A:(se.returnEnd||se.excludeEnd||(L+=A),je(),se.excludeEnd&&(L=A));do T.scope&&P.closeNode(),!T.skip&&!T.subLanguage&&(F+=T.relevance),T=T.parent;while(T!==H.parent);return H.starts&&G(H.starts,E),se.returnEnd?0:A.length}function Fe(){const E=[];for(let A=T;A!==S;A=A.parent)A.scope&&E.unshift(A.scope);E.forEach(A=>P.openNode(A))}let h={};function v(E,A){const I=A&&A[0];if(L+=E,I==null)return je(),0;if(h.type==="begin"&&A.type==="end"&&h.index===A.index&&I===""){if(L+=B.slice(A.index,A.index+1),!r){const H=new Error(`0 width match regex (${M})`);throw H.languageName=M,H.badRule=h.rule,H}return 1}if(h=A,A.type==="begin")return ge(A);if(A.type==="illegal"&&!D){const H=new Error('Illegal lexeme "'+I+'" for mode "'+(T.scope||"<unnamed>")+'"');throw H.mode=T,H}else if(A.type==="end"){const H=We(A);if(H!==bs)return H}if(A.type==="illegal"&&I==="")return 1;if(K>1e5&&K>A.index*3)throw new Error("potential infinite loop, way more iterations than matches");return L+=I,I.length}const S=z(M);if(!S)throw Jn(o.replace("{}",M)),new Error('Unknown language: "'+M+'"');const $=Mh(S);let N="",T=J||$;const q={},P=new i.__emitter(i);Fe();let L="",F=0,V=0,K=0,Z=!1;try{for(T.matcher.considerAll();;){K++,Z?Z=!1:T.matcher.considerAll(),T.matcher.lastIndex=V;const E=T.matcher.exec(B);if(!E)break;const A=B.substring(V,E.index),I=v(A,E);V=E.index+I}return v(B.substring(V)),P.closeAllNodes(),P.finalize(),N=P.toHTML(),{language:M,value:N,relevance:F,illegal:!1,_emitter:P,_top:T}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:M,value:cr(B),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:V,context:B.slice(V-100,V+100),mode:E.mode,resultSoFar:N},_emitter:P};if(r)return{language:M,value:cr(B),illegal:!1,relevance:0,errorRaised:E,_emitter:P,_top:T};throw E}}function f(M){const B={value:cr(M),illegal:!1,relevance:0,_top:s,_emitter:new i.__emitter(i)};return B._emitter.addText(M),B}function j(M,B){B=B||i.languages||Object.keys(n);const D=f(M),J=B.filter(z).filter(ce).map(je=>p(je,M,!1));J.unshift(D);const re=J.sort((je,Ne)=>{if(je.relevance!==Ne.relevance)return Ne.relevance-je.relevance;if(je.language&&Ne.language){if(z(je.language).supersetOf===Ne.language)return 1;if(z(Ne.language).supersetOf===je.language)return-1}return 0}),[he,ie]=re,ze=he;return ze.secondBest=ie,ze}function _(M,B,D){const J=B&&t[B]||D;M.classList.add("hljs"),M.classList.add(`language-${J}`)}function y(M){let B=null;const D=c(M);if(l(D))return;if(pe("before:highlightElement",{el:M,language:D}),M.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(M)),i.throwUnescapedHTML))throw new Rh("One of your code blocks includes unescaped HTML.",M.innerHTML);B=M;const J=B.textContent,re=D?d(J,{language:D,ignoreIllegals:!0}):j(J);M.innerHTML=re.value,_(M,D,re.language),M.result={language:re.language,re:re.relevance,relevance:re.relevance},re.secondBest&&(M.secondBest={language:re.secondBest.language,relevance:re.secondBest.relevance}),pe("after:highlightElement",{el:M,result:re,text:J})}function x(M){i=ps(i,M)}const C=()=>{w(),rt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function m(){w(),rt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let g=!1;function w(){if(document.readyState==="loading"){g=!0;return}document.querySelectorAll(i.cssSelector).forEach(y)}function k(){g&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",k,!1);function O(M,B){let D=null;try{D=B(e)}catch(J){if(Jn("Language definition for '{}' could not be registered.".replace("{}",M)),r)Jn(J);else throw J;D=s}D.name||(D.name=M),n[M]=D,D.rawDefinition=B.bind(null,e),D.aliases&&ee(D.aliases,{languageName:M})}function R(M){delete n[M];for(const B of Object.keys(t))t[B]===M&&delete t[B]}function U(){return Object.keys(n)}function z(M){return M=(M||"").toLowerCase(),n[M]||n[t[M]]}function ee(M,{languageName:B}){typeof M=="string"&&(M=[M]),M.forEach(D=>{t[D.toLowerCase()]=B})}function ce(M){const B=z(M);return B&&!B.disableAutodetect}function _e(M){M["before:highlightBlock"]&&!M["before:highlightElement"]&&(M["before:highlightElement"]=B=>{M["before:highlightBlock"](Object.assign({block:B.el},B))}),M["after:highlightBlock"]&&!M["after:highlightElement"]&&(M["after:highlightElement"]=B=>{M["after:highlightBlock"](Object.assign({block:B.el},B))})}function ve(M){_e(M),a.push(M)}function pe(M,B){const D=M;a.forEach(function(J){J[D]&&J[D](B)})}function we(M){return rt("10.7.0","highlightBlock will be removed entirely in v12.0"),rt("10.7.0","Please use highlightElement now."),y(M)}Object.assign(e,{highlight:d,highlightAuto:j,highlightAll:w,highlightElement:y,highlightBlock:we,configure:x,initHighlighting:C,initHighlightingOnLoad:m,registerLanguage:O,unregisterLanguage:R,listLanguages:U,getLanguage:z,registerAliases:ee,autoDetection:ce,inherit:ps,addPlugin:ve}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=Ih,e.regex={concat:et,lookahead:sl,either:fo,optional:Jf,anyNumberOfTimes:Yf};for(const M in oa)typeof oa[M]=="object"&&lo.exports(oa[M]);return Object.assign(e,oa),e};var Ut=Ph({}),Bh=Ut;Ut.HighlightJS=Ut;Ut.default=Ut;const ur=Bh;function Fh(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],r={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,r,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Dh(e){const n=e.regex,t=/(?![A-Za-z0-9])(?![$])/,a=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,t),r=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,t),o={scope:"variable",match:"\\$+"+a},s={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},i={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},l=e.inherit(e.APOS_STRING_MODE,{illegal:null}),c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(i)}),d=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(i)}),p=`[ 	
]`,f={scope:"string",variants:[c,l,d]},j={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},_=["false","null","true"],y=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],x=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],m={keyword:y,literal:(_e=>{const ve=[];return _e.forEach(pe=>{ve.push(pe),pe.toLowerCase()===pe?ve.push(pe.toUpperCase()):ve.push(pe.toLowerCase())}),ve})(_),built_in:x},g=_e=>_e.map(ve=>ve.replace(/\|\d+$/,"")),w={variants:[{match:[/new/,n.concat(p,"+"),n.concat("(?!",g(x).join("\\b|"),"\\b)"),r],scope:{1:"keyword",4:"title.class"}}]},k=n.concat(a,"\\b(?!\\()"),O={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),k],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[r,n.concat(/::/,n.lookahead(/(?!class\b)/)),k],scope:{1:"title.class",3:"variable.constant"}},{match:[r,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[r,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},R={scope:"attr",match:n.concat(a,n.lookahead(":"),n.lookahead(/(?!::)/))},U={relevance:0,begin:/\(/,end:/\)/,keywords:m,contains:[R,o,O,e.C_BLOCK_COMMENT_MODE,f,j,w]},z={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",g(y).join("\\b|"),"|",g(x).join("\\b|"),"\\b)"),a,n.concat(p,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[U]};U.contains.push(z);const ee=[R,O,e.C_BLOCK_COMMENT_MODE,f,j,w],ce={begin:n.concat(/#\[\s*/,r),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:_,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:_,keyword:["new","array"]},contains:["self",...ee]},...ee,{scope:"meta",match:r}]};return{case_insensitive:!1,keywords:m,contains:[ce,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},s,{scope:"variable.language",match:/\$this\b/},o,z,O,{match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},w,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:m,contains:["self",o,O,e.C_BLOCK_COMMENT_MODE,f,j]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},f,j]}}const Aa="[A-Za-z$_][0-9A-Za-z$_]*",pl=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],bl=["true","false","null","undefined","NaN","Infinity"],ml=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],yl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],vl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],_l=["arguments","this","super","console","window","document","localStorage","module","global"],jl=[].concat(vl,ml,yl);function zh(e){const n=e.regex,t=(B,{after:D})=>{const J="</"+B[0].slice(1);return B.input.indexOf(J,D)!==-1},a=Aa,r={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,D)=>{const J=B[0].length+B.index,re=B.input[J];if(re==="<"||re===","){D.ignoreMatch();return}re===">"&&(t(B,{after:J})||D.ignoreMatch());let he;const ie=B.input.substring(J);if(he=ie.match(/^\s*=/)){D.ignoreMatch();return}if((he=ie.match(/^\s+extends\s+/))&&he.index===0){D.ignoreMatch();return}}},i={$pattern:Aa,keyword:pl,literal:bl,built_in:jl,"variable.language":_l},l="[0-9](_?[0-9])*",c=`\\.(${l})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},j={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,j,_,y,{match:/\$\d+/},p];f.contains=m.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(m)});const g=[].concat(C,f.contains),w=g.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(g)}]),k={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w},O={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ml,...yl]}},U={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},z={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[k],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(B){return n.concat("(?!",B.join("|"),")")}const _e={match:n.concat(/\b/,ce([...vl,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},pe={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},k]},we="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(we)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[k]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),U,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,j,_,y,C,{match:/\$\d+/},p,R,{className:"attr",begin:a+n.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:we,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:o},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[k,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[k]},_e,ee,O,pe,{match:/\$[(.]/}]}}function Uh(e){const n=zh(e),t=Aa,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},o={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},s={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},i=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],l={$pattern:Aa,keyword:pl.concat(i),literal:bl,built_in:jl.concat(a),"variable.language":_l},c={className:"meta",begin:"@"+t},d=(f,j,_)=>{const y=f.contains.findIndex(x=>x.label===j);if(y===-1)throw new Error("can not find mode to replace");f.contains.splice(y,1,_)};Object.assign(n.keywords,l),n.exports.PARAMS_CONTAINS.push(c),n.contains=n.contains.concat([c,r,o]),d(n,"shebang",e.SHEBANG()),d(n,"use_strict",s);const p=n.contains.find(f=>f.label==="func.def");return p.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}const Hh=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Additional Languages")])],-1),qh={id:"additional-languages-json-usage-example",class:"row mb-4"},Wh={class:"col-12"},Gh={id:"additional-languages-ts-usage-example",class:"row mb-4"},Vh={class:"col-12"},Kh={id:"additional-languages-ts-example",class:"row mb-4"},Yh={class:"col-12"},Jh={id:"additional-languages-json-example",class:"row mb-4"},Zh={class:"col-12"},Xh={class:"col-12"},Qh={id:"additional-languages-php-usage-example",class:"row mb-4"},eg={class:"col-12"},ng={id:"additional-languages-php-example",class:"row mb-4"},tg={class:"col-12"},ag={__name:"AdditionalLangExamples",setup(e){ur.registerLanguage("json",Fh),ur.registerLanguage("php",Dh),ur.registerLanguage("typescript",Uh);const n=ne("selectedLibrary"),t=ne("selectedTheme"),a={prism:{json:`<template>
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
<\/script>`}},r=`class Person {
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
person.sayHello();`,o=`{
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
`,s=`<?php

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
?>`;return(i,l)=>{const c=Ze("CodeBlock");return X(),te("div",null,[Hh,u("div",qh,[u("div",Wh,[u("p",null,xe(b(n).label)+" does not load all languages by default. In order to use additional languages you will need to import that languages component. ",1)])]),u("div",Gh,[u("div",Vh,[W(c,{code:a[b(n).id].typescript,highlightjs:b(n).id==="highlightjs",label:`Example of using ${b(n).label} to highlight TypeScript`,lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),u("div",Kh,[u("div",Yh,[W(c,{code:r,highlightjs:b(n).id==="highlightjs",label:"TypeScript",lang:"typescript",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])]),u("div",Jh,[u("div",Zh,[W(c,{code:a[b(n).id].json,highlightjs:b(n).id==="highlightjs",label:`Example of using ${b(n).label} to highlight JSON`,lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","label","prismjs","theme"])]),u("div",Xh,[W(c,{code:o,highlightjs:b(n).id==="highlightjs",indent:2,label:"JSON",lang:"json",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])]),u("div",Qh,[u("div",eg,[W(c,{code:a[b(n).id].php,highlightjs:b(n).id==="highlightjs",label:`Example of using ${b(n).label} to highlight PHP`,lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),u("div",ng,[u("div",tg,[W(c,{code:s,height:"500px",highlightjs:b(n).id==="highlightjs",indent:2,label:"PHP",lang:"php",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])])])}}},rg=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Browser Window")])],-1),og={id:"browser-window-example",class:"row mb-4"},sg={class:"col-12"},ig={__name:"BrowserWindowExamples",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a={prism:`<CodeBlock
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
/>`};return(r,o)=>{const s=Ze("CodeBlock");return X(),te("div",null,[rg,u("div",og,[u("div",sg,[W(s,{"browser-window":!0,code:a[b(n).id],highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},lg=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Copy Button")])],-1),cg={id:"button-example",class:"row mb-4"},ug={class:"col-12"},dg={id:"persistent-button-example",class:"row mb-4"},fg={class:"col-12"},hg={__name:"ButtonExamples",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a={prism:{btn:`<CodeBlock
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
/>`}};return(r,o)=>{const s=Ze("CodeBlock");return X(),te("div",null,[lg,u("div",cg,[u("div",ug,[W(s,{code:a[b(n).id].btn,highlightjs:b(n).id==="highlightjs",label:"Visible on hover",lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","prismjs","theme"])])]),u("div",dg,[u("div",fg,[W(s,{code:a[b(n).id].btnPersist,highlightjs:b(n).id==="highlightjs",label:"Persistent Copy Button",lang:"html","persistent-copy-button":"",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},wl=`/**
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
`,gg=`/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot Theme
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
`,pg=`/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny
* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
*/
:root {
 --neon-bunny-blue-darker: #276AFF;
 --neon-bunny-blue-light-faded: #a5a8ff;
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
 --neon-bunny-magenta-neon: #FF25D9;
 --neon-bunny-magenta: #df00df;
 --neon-bunny-neon-green: #00ff00;
 --neon-bunny-orange-lighter: #ff8d04;
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
 --neon-bunny-yellow-light-faded: #ffe3b8;
 --neon-bunny-yellow: #fef611;
 /* -------------------------------------------------- Standard */
 /* ------------------------- General purpose */
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class: var(--neon-bunny-magenta);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-doctag: var(--neon-bunny-blue-light);
 --neon-bunny-keyword: var(--neon-bunny-blue);
 --neon-bunny-literal: var(--neon-bunny-blue-light);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-params: var(--neon-bunny-green-darker);
 --neon-bunny-property: var(--neon-bunny-blue-light-faded);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-peach-darker);
 --neon-bunny-subst: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);
 --neon-bunny-title-class: var(--neon-bunny-green-neon);
 --neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);
 --neon-bunny-title-function: var(--neon-bunny-green-neon);
 --neon-bunny-title: var(--neon-bunny-green-darker);
 --neon-bunny-type: var(--neon-bunny-pink);
 --neon-bunny-variable-constant: var(--neon-bunny-green-darker);
 --neon-bunny-variable-language: var(--neon-bunny-blue-light);
 --neon-bunny-variable: var(--neon-bunny-green-darker);
 /* ------------------------- Meta */
 --neon-bunny-meta-keyword: var(--neon-bunny-green);
 --neon-bunny-meta-prompt: var(--neon-bunny-blue-light);
 --neon-bunny-meta-string: var(--neon-bunny-blue-light);
 --neon-bunny-meta: var(--neon-bunny-blue-light);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-attr: var(--neon-bunny-green);
 --neon-bunny-attribute: var(--neon-bunny-green);
 --neon-bunny-name: var(--neon-bunny-blue-light);
 --neon-bunny-section: var(--neon-bunny-green);
 --neon-bunny-tag-attr: var(--neon-bunny-blue-light);
 --neon-bunny-tag: var(--neon-bunny-blue-light);
 /* ------------------------- Text Markup */
 --neon-bunny-bullet: var(--neon-bunny-white);
 --neon-bunny-code: var(--neon-bunny-white);
 --neon-bunny-emphasis: var(--neon-bunny-white);
 --neon-bunny-formula: var(--neon-bunny-white);
 --neon-bunny-link: var(--neon-bunny-orange);
 --neon-bunny-quote: var(--neon-bunny-white);
 --neon-bunny-strong: var(--neon-bunny-white);
 /* ------------------------- CSS */
 --neon-bunny-css-selector-id: var(--neon-bunny-green);
 --neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);
 --neon-bunny-selector-class: var(--neon-bunny-lime);
 --neon-bunny-selector-id: var(--neon-bunny-lime);
 --neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);
 --neon-bunny-selector-tag: var(--neon-bunny-white);
 --neon-bunny-selector: var(--neon-bunny-lime);
 /* ------------------------- Diff */
 --neon-bunny-addition: var(--neon-bunny-green-neon);
 --neon-bunny-deletion: var(--neon-bunny-red);
 /* -------------------------------------------------- HTML */
 --neon-bunny-html-tag-attr: var(--neon-bunny-green);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-purple-light-dim);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JSON */
 --neon-bunny-json-punctuation: var(--neon-bunny-white);
 /* -------------------------------------------------- JavaScript */
 --neon-bunny-js: var(--neon-bunny-green-darker);
 /* ------------------------- General purpose */
 --neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);
 --neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);
 --neon-bunny-js-variable-language: var(--neon-bunny-pink);
 /* -------------------------------------------------- PHP */
 --neon-bunny-php: var(--neon-bunny-blue-light);
 /* ------------------------- General purpose */
 --neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);
 --neon-bunny-php-class-title: var(--neon-bunny-magenta);
 --neon-bunny-php-function-title: var(--neon-bunny-green-neon);
 --neon-bunny-php-keyword: var(--neon-bunny-blue-darker);
 --neon-bunny-php-params-variable: var(--neon-bunny-green-darker);
 --neon-bunny-php-params: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-string: var(--neon-bunny-yellow);
 --neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);
 --neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);
 --neon-bunny-php-title: var(--neon-bunny-peach);
 --neon-bunny-php-variable: var(--neon-bunny-purple-light);
 /* ------------------------- Meta */
 --neon-bunny-php-meta: var(--neon-bunny-red);
}

pre code.hljs {
 display: block;
 overflow-x: auto;
}

code[class*=language-],
pre[class*=language-] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;
 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

code[class*=language-]::selection,
code[class*=language-] ::selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection {
 background: rgba(255, 255, 255, 0.0823529412);
 text-shadow: none;
}

@media print {

 code[class*=language-],
 pre[class*=language-] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*=language-] {
 background: #000000;
 color: white;
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*=language-] {
 background: #000000;
 color: white;
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

/* -------------------------------------------------- Standard */
.hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs-char {
 color: var(--neon-bunny-char);
}

.hljs-comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs-number {
 color: var(--neon-bunny-number);
}

.hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs-property {
 color: var(--neon-bunny-property);
}

.hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs-string {
 color: var(--neon-bunny-string);
}

.hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs-title {
 color: var(--neon-bunny-title);
}

.hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs-type {
 color: var(--neon-bunny-type);
}

.hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs-name {
 color: var(--neon-bunny-name);
}

.hljs-section {
 color: var(--neon-bunny-section);
}

.hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs-tag .hljs-attr {
 color: var(--neon-bunny-tag-attr);
}

.hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs-code {
 color: var(--neon-bunny-code);
}

.hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs-link {
 color: var(--neon-bunny-link);
}

.hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-html .hljs-tag .hljs-attr {
 color: var(--neon-bunny-html-tag-attr);
}

.hljs.language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-json .hljs-punctuation {
 color: var(--neon-bunny-json-punctuation);
}

.hljs.language-javascript, .hljs.language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params {
 color: var(--neon-bunny-php-params);
 font-style: italic;
}

.hljs.language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
 font-style: italic;
}

.hljs.language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`,bg=`/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot Theme
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
 --neon-bunny-orange-lighter: #ff8d04;
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
 --neon-bunny-yellow-light-faded: #ffe3b8;
 --neon-bunny-yellow: #ffff00;
 /* -------------------------------------------------- Standard */
 /* ------------------------- General purpose */
 --neon-bunny-builtin: var(--neon-bunny-purple);
 --neon-bunny-char: var(--neon-bunny-pink);
 --neon-bunny-class: var(--neon-bunny-magenta);
 --neon-bunny-comment: var(--neon-bunny-gray);
 --neon-bunny-doctag: var(--neon-bunny-blue-light);
 --neon-bunny-keyword: var(--neon-bunny-magenta);
 --neon-bunny-literal: var(--neon-bunny-purple-light);
 --neon-bunny-number: var(--neon-bunny-white);
 --neon-bunny-operator: var(--neon-bunny-blue-light);
 --neon-bunny-params: var(--neon-bunny-orange);
 --neon-bunny-property: var(--neon-bunny-yellow-light-faded);
 --neon-bunny-punctuation: var(--neon-bunny-blue);
 --neon-bunny-regex: var(--neon-bunny-peach-light);
 --neon-bunny-string: var(--neon-bunny-green);
 --neon-bunny-subst: var(--neon-bunny-green-darker);
 --neon-bunny-symbol: var(--neon-bunny-pink);
 --neon-bunny-title-class-inherited: var(--neon-bunny-orange);
 --neon-bunny-title-class: var(--neon-bunny-green-neon);
 --neon-bunny-title-function-invoke: var(--neon-bunny-orange);
 --neon-bunny-title-function: var(--neon-bunny-orange-light);
 --neon-bunny-title: var(--neon-bunny-orange);
 --neon-bunny-type: var(--neon-bunny-pink);
 --neon-bunny-variable-constant: var(--neon-bunny-green-darker);
 --neon-bunny-variable-language: var(--neon-bunny-orange);
 --neon-bunny-variable: var(--neon-bunny-green-darker);
 /* ------------------------- Meta */
 --neon-bunny-meta-keyword: var(--neon-bunny-purple-light);
 --neon-bunny-meta-prompt: var(--neon-bunny-orange);
 --neon-bunny-meta-string: var(--neon-bunny-orange);
 --neon-bunny-meta: var(--neon-bunny-orange);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-attr: var(--neon-bunny-orange);
 --neon-bunny-attribute: var(---neon-bunny-orange);
 --neon-bunny-name: var(--neon-bunny-orange);
 --neon-bunny-section: var(--neon-bunny-orange);
 --neon-bunny-tag-attr: var(--neon-bunny-orange-light);
 --neon-bunny-tag: var(--neon-bunny-orange);
 /* ------------------------- Text Markup */
 --neon-bunny-bullet: var(--neon-bunny-white);
 --neon-bunny-code: var(--neon-bunny-white);
 --neon-bunny-emphasis: var(--neon-bunny-white);
 --neon-bunny-formula: var(--neon-bunny-white);
 --neon-bunny-link: var(--neon-bunny-orange);
 --neon-bunny-quote: var(--neon-bunny-white);
 --neon-bunny-strong: var(--neon-bunny-white);
 /* ------------------------- CSS */
 --neon-bunny-css-selector-id: var(--neon-bunny-green);
 --neon-bunny-selector-attr: var(--neon-bunny-orange);
 --neon-bunny-selector-class: var(--neon-bunny-yellow);
 --neon-bunny-selector-id: var(--neon-bunny-selector);
 --neon-bunny-selector-pseudo: var(--neon-bunny-orange);
 --neon-bunny-selector-tag: var(--neon-bunny-white);
 --neon-bunny-selector: var(--neon-bunny-lime);
 /* ------------------------- Diff */
 --neon-bunny-addition: var(--neon-bunny-green-neon);
 --neon-bunny-deletion: var(--neon-bunny-red);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-teal);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JavaScript */
 --neon-bunny-js: var(--neon-bunny-orange);
 /* ------------------------- General purpose */
 --neon-bunny-js-params-variable-language: var(--neon-bunny-orange);
 --neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);
 --neon-bunny-js-variable-language: var(--neon-bunny-yellow);
 /* -------------------------------------------------- PHP */
 --neon-bunny-php: var(--neon-bunny-white);
 /* ------------------------- General purpose */
 --neon-bunny-php-class-keyword: var(--neon-bunny-pink);
 --neon-bunny-php-class-title: var(--neon-bunny-yellow);
 --neon-bunny-php-function-title: var(--neon-bunny-orange-light);
 --neon-bunny-php-keyword: var(--neon-bunny-magenta);
 --neon-bunny-php-params-variable: var(--neon-bunny-green-darker);
 --neon-bunny-php-params: var(--neon-bunny-yellow);
 --neon-bunny-php-string: var(--neon-bunny-green-light);
 --neon-bunny-php-title-class: var(--neon-bunny-yellow);
 --neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);
 --neon-bunny-php-title: var(--neon-bunny-white);
 --neon-bunny-php-variable: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-php-meta: var(--neon-bunny-pink);
}

pre code.hljs {
 display: block;
 overflow-x: auto;
}

code[class*=language-],
pre[class*=language-] {
 -moz-hyphens: none;
 -moz-tab-size: 4;
 -ms-hyphens: none;
 -o-tab-size: 4;
 -webkit-hyphens: none;
 color: var(--neon-bunny-white);
 font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
 hyphens: none;
 line-height: 1.5;
 tab-size: 4;
 text-align: left;
 white-space: pre;
 word-break: normal;
 word-spacing: normal;
 word-wrap: normal;
}

code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection {
 background: rgba(29, 59, 83, 0.99);
 text-shadow: none;
}

code[class*=language-]::selection,
code[class*=language-] ::selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection {
 background: rgba(255, 255, 255, 0.0823529412);
 text-shadow: none;
}

@media print {

 code[class*=language-],
 pre[class*=language-] {
	 text-shadow: none;
 }
}

/* Code blocks */
pre[class*=language-] {
 background: #000000;
 color: white;
 margin: 0.5em 0;
 overflow: auto;
 padding: 1em;
}

:not(pre) > code[class*=language-] {
 background: #000000;
 color: white;
 border-radius: 0.3em;
 padding: 0.1em;
 white-space: normal;
}

.hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs-char {
 color: var(--neon-bunny-char);
}

.hljs-comment {
 color: var(--neon-bunny-comment);
 font-style: italic;
}

.hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs-number {
 color: var(--neon-bunny-number);
}

.hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs-params {
 color: var(--neon-bunny-params);
}

.hljs-property {
 color: var(--neon-bunny-property);
}

.hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs-string {
 color: var(--neon-bunny-string);
}

.hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs-title {
 color: var(--neon-bunny-title);
}

.hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs-title.function_ {
 color: var(--neon-bunny-title-function);
 text-decoration: underline;
}

.hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs-type {
 color: var(--neon-bunny-type);
}

.hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
 font-style: italic;
}

.hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs-name {
 color: var(--neon-bunny-name);
}

.hljs-section {
 color: var(--neon-bunny-section);
}

.hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs-tag .hljs-attr {
 color: var(--neon-bunny-tag-attr);
}

.hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs-code {
 color: var(--neon-bunny-code);
}

.hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs-link {
 color: var(--neon-bunny-link);
}

.hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-javascript, .hljs.language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params {
 color: var(--neon-bunny-php-params);
}

.hljs.language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
}

.hljs.language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`,mg=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Languages")])],-1),yg={id:"lang-js-examples",class:"row mb-4"},vg={class:"col-12"},_g={id:"lang-vue-examples",class:"row mb-4"},jg={class:"col-12"},wg={id:"lang-css-examples",class:"row mb-4"},kg={class:"col-12"},xg={id:"lang-html-examples",class:"row mb-4"},Eg={class:"col-12"},Sg={id:"lang-svg-examples",class:"row mb-4"},Tg={class:"col-12"},Cg={__name:"LangExamples",setup(e){const n=ne("codeBlockOptions"),t=ne("selectedLibrary"),a=ne("selectedTheme"),r=`<template>
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
`,s=wl,i=`<!DOCTYPE html>
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
`,l=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`;return(c,d)=>{const p=Ze("CodeBlock");return X(),te("div",null,[mg,u("div",yg,[u("div",vg,[W(p,{code:o,highlightjs:b(t).id==="highlightjs",label:"JavaScript",lang:"javascript","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",_g,[u("div",jg,[W(p,{code:r,highlightjs:b(t).id==="highlightjs",label:"Vue (using lang = html)",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",wg,[u("div",kg,[W(p,{code:b(s),highlightjs:b(t).id==="highlightjs",label:"CSS",lang:"css","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),u("div",xg,[u("div",Eg,[W(p,{code:i,highlightjs:b(t).id==="highlightjs",label:"HTML",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),u("div",Sg,[u("div",Tg,[W(p,{code:l,highlightjs:b(t).id==="highlightjs",label:"SVG",lang:"svg",prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","prismjs","theme"])])])])}}},Ag=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Other Prop Examples")])],-1),Og={id:"radius-example",class:"row mb-4"},Ng={class:"col-12"},Mg={id:"copy-text-example",class:"row mb-4"},$g={class:"col-12"},Ig={id:"run-text-example",class:"row mb-4"},Rg={class:"col-12"},Lg={id:"floating-tabs-example",class:"row mb-4"},Pg={class:"col-12"},Bg={class:"form-check form-switch ms-1"},Fg={class:"boolean-style"},Dg={id:"height-example",class:"row mb-4"},zg={class:"col-12"},Ug={id:"height-example",class:"row mb-4"},Hg={class:"col-12"},qg={id:"indent-example",class:"row mb-4"},Wg={class:"col-12"},Gg={__name:"OtherExamples",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a=ke("0 1em"),r=ke("Copy Text"),o=ke(!0),s=ke("200"),i=ke(2),l=ke("Run"),c=ke("0.25rem"),d={prism:{copyBlockRadius:`<CodeBlock
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
</CodeBlock>`}},p=`{
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
`;function f(){alert("Run Text Code Example Function")}return(j,_)=>{const y=Ze("CodeBlock");return X(),te("div",null,[Ag,u("div",Og,[u("div",Ng,[W(y,{code:d[b(n).id].copyBlockRadius,"code-block-radius":a.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",theme:b(t)},{label:pn(()=>[le(" codeBlockRadius: "),Bn(u("input",{"onUpdate:modelValue":_[0]||(_[0]=x=>a.value=x),class:"form-control",type:"text"},null,512),[[tt,a.value]])]),_:1},8,["code","code-block-radius","highlightjs","prismjs","theme"])])]),u("div",Mg,[u("div",$g,[W(y,{code:d[b(n).id].copyText,"copy-tab":"",copyText:r.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:"",theme:b(t)},{label:pn(()=>[le(" copyText: "),Bn(u("input",{"onUpdate:modelValue":_[1]||(_[1]=x=>r.value=x),class:"form-control",type:"text"},null,512),[[tt,r.value]])]),_:1},8,["code","copyText","highlightjs","prismjs","theme"])])]),u("div",Ig,[u("div",Rg,[W(y,{code:d[b(n).id].runText,"copy-tab":!1,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism","run-tab":"",runText:l.value,tabs:"",theme:b(t),onRun:f},{label:pn(()=>[le(" runText: "),Bn(u("input",{"onUpdate:modelValue":_[2]||(_[2]=x=>l.value=x),class:"form-control",type:"text"},null,512),[[tt,l.value]])]),_:1},8,["code","highlightjs","prismjs","runText","theme"])])]),u("div",Lg,[u("div",Pg,[W(y,{code:d[b(n).id].floatingTabs,"floating-tabs":o.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:"",theme:b(t)},{label:pn(()=>[u("div",Bg,[Bn(u("input",{"onUpdate:modelValue":_[3]||(_[3]=x=>o.value=x),checked:"",class:"form-check-input",role:"switch",type:"checkbox"},null,512),[[xd,o.value]]),u("label",null,[le(" floatingTabs = "),u("span",Fg,xe(o.value),1)])])]),_:1},8,["code","floating-tabs","highlightjs","prismjs","theme"])])]),u("div",Dg,[u("div",zg,[W(y,{code:d[b(n).id].height,height:s.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},{label:pn(()=>[le(" height: "),Bn(u("input",{"onUpdate:modelValue":_[4]||(_[4]=x=>s.value=x),class:"form-control",type:"number"},null,512),[[tt,s.value]])]),_:1},8,["code","height","highlightjs","prismjs","theme"])])]),u("div",Ug,[u("div",Hg,[W(y,{code:d[b(n).id].tabGap,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism","run-tab":!0,"tab-gap":c.value,tabs:"",theme:b(t)},{label:pn(()=>[le(" tabGap: "),Bn(u("input",{"onUpdate:modelValue":_[5]||(_[5]=x=>c.value=x),class:"form-control",type:"text"},null,512),[[tt,c.value]])]),_:1},8,["code","highlightjs","prismjs","tab-gap","theme"])])]),u("div",qg,[u("div",Wg,[W(y,{code:p,highlightjs:b(n).id==="highlightjs",indent:i.value,lang:"json",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},{label:pn(()=>[le(" indent (json): "),Bn(u("input",{"onUpdate:modelValue":_[6]||(_[6]=x=>i.value=x),class:"form-control",type:"number"},null,512),[[tt,i.value]])]),_:1},8,["highlightjs","indent","prismjs","theme"])])])])}}},Vg=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Plugins")])],-1),Kg={key:0,id:"plugin-example",class:"row mb-4"},Yg=Vu('<div class="col-12"><p> PrismJS does not load all plugins by default. In order to use additional plugins you will need to import them. Please note that not all plugins may work with this component. </p><p>Tested Plugins that do work include:</p><ul><li><a href="https://prismjs.com/plugins/autolinker/" target="_blank"> autolinker </a></li><li><a href="https://prismjs.com/plugins/command-line/" target="_blank"> command-line </a></li><li><a href="https://prismjs.com/plugins/line-highlight/" target="_blank"> line-highlight </a></li><li><a href="https://prismjs.com/plugins/line-numbers/" target="_blank"> line-numbers </a></li><li><a href="https://prismjs.com/plugins/match-braces/" target="_blank"> match-braces </a></li><li><a href="https://prismjs.com/plugins/show-invisibles/" target="_blank"> show-invisibles </a></li></ul></div>',1),Jg={class:"col-12"},Zg=u("a",{href:"https://prismjs.com/plugins/line-numbers/",target:"_blank"},"line-numbers",-1),Xg={key:1,id:"plugin-example",class:"row mb-4"},Qg=u("div",{class:"col-12"},[u("p",null," Vue3 CodeBlock currently does not support the Highlight.js plugin API. ")],-1),ep=[Qg],np={__name:"PluginExamples",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a=`<template>
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
<\/script>`;return(r,o)=>{const s=Ze("CodeBlock");return X(),te("div",null,[Vg,b(n).id==="prism"?(X(),te("div",Kg,[Yg,u("div",Jg,[W(s,{class:"line-numbers",code:a,lang:"html","prism-plugin":"",prismjs:"",tabs:!1,theme:b(t)},{label:pn(()=>[le(" Example using the "),Zg,le(" Plugin ")]),_:1},8,["theme"])])])):(X(),te("div",Xg,ep))])}}},tp=u("div",{class:"row mb-2"},[u("div",{class:"col-12"},[u("h5",null,"Tabs")])],-1),ap={id:"tab-copy-example",class:"row mb-4"},rp={class:"col-12"},op={id:"tab-run-example",class:"row mb-4"},sp={class:"col-12"},ip={id:"tab-both-example",class:"row mb-4"},lp={class:"col-12"},cp={__name:"TabExamples",setup(e){const n=ne("codeBlockOptions"),t=ne("selectedLibrary"),a=ne("selectedTheme"),r={prism:{copy:`<CodeBlock
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
<\/script>`}};function o(){alert("Run Code Tab")}function s(){alert("Copy & Run Code Tabs")}return(i,l)=>{const c=Ze("CodeBlock");return X(),te("div",null,[tp,u("div",ap,[u("div",rp,[W(c,{code:r[b(t).id].copy,"copy-tab":"",highlightjs:b(t).id==="highlightjs",label:"Copy Code Tab",lang:"html",prismjs:b(t).id==="prism","run-tab":!1,tabs:"",theme:b(a)},null,8,["code","highlightjs","prismjs","theme"])])]),u("div",op,[u("div",sp,[W(c,{code:r[b(t).id].run,"copy-tab":!1,highlightjs:b(t).id==="highlightjs",label:"Run Code Tab",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism","run-tab":"",tabs:"",theme:b(a),onRun:o},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),u("div",ip,[u("div",lp,[W(c,{code:r[b(t).id].both,highlightjs:b(t).id==="highlightjs",label:"Copy & Run Code Tabs",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism","run-tab":!0,tabs:"",theme:b(a),onRun:s},null,8,["code","highlightjs","max-height","prismjs","theme"])])])])}}};var Oa={},up={get exports(){return Oa},set exports(e){Oa=e}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,s={},i={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof l?new l(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++o}),m.__id},clone:function m(g,w){w=w||{};var k,O;switch(i.util.type(g)){case"Object":if(O=i.util.objId(g),w[O])return w[O];k={},w[O]=k;for(var R in g)g.hasOwnProperty(R)&&(k[R]=m(g[R],w));return k;case"Array":return O=i.util.objId(g),w[O]?w[O]:(k=[],w[O]=k,g.forEach(function(U,z){k[z]=m(U,w)}),k);default:return g}},getLanguage:function(m){for(;m;){var g=r.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(r,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var w in g)if(g[w].src==m)return g[w]}return null}},isActive:function(m,g,w){for(var k="no-"+g;m;){var O=m.classList;if(O.contains(g))return!0;if(O.contains(k))return!1;m=m.parentElement}return!!w}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(m,g){var w=i.util.clone(i.languages[m]);for(var k in g)w[k]=g[k];return w},insertBefore:function(m,g,w,k){k=k||i.languages;var O=k[m],R={};for(var U in O)if(O.hasOwnProperty(U)){if(U==g)for(var z in w)w.hasOwnProperty(z)&&(R[z]=w[z]);w.hasOwnProperty(U)||(R[U]=O[U])}var ee=k[m];return k[m]=R,i.languages.DFS(i.languages,function(ce,_e){_e===ee&&ce!=m&&(this[ce]=R)}),R},DFS:function m(g,w,k,O){O=O||{};var R=i.util.objId;for(var U in g)if(g.hasOwnProperty(U)){w.call(g,U,g[U],k||U);var z=g[U],ee=i.util.type(z);ee==="Object"&&!O[R(z)]?(O[R(z)]=!0,m(z,w,null,O)):ee==="Array"&&!O[R(z)]&&(O[R(z)]=!0,m(z,w,U,O))}}},plugins:{},highlightAll:function(m,g){i.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,w){var k={callback:w,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),i.hooks.run("before-all-elements-highlight",k);for(var O=0,R;R=k.elements[O++];)i.highlightElement(R,g===!0,k.callback)},highlightElement:function(m,g,w){var k=i.util.getLanguage(m),O=i.languages[k];i.util.setLanguage(m,k);var R=m.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(R,k);var U=m.textContent,z={element:m,language:k,grammar:O,code:U};function ee(_e){z.highlightedCode=_e,i.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,i.hooks.run("after-highlight",z),i.hooks.run("complete",z),w&&w.call(z.element)}if(i.hooks.run("before-sanity-check",z),R=z.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!z.code){i.hooks.run("complete",z),w&&w.call(z.element);return}if(i.hooks.run("before-highlight",z),!z.grammar){ee(i.util.encode(z.code));return}if(g&&a.Worker){var ce=new Worker(i.filename);ce.onmessage=function(_e){ee(_e.data)},ce.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else ee(i.highlight(z.code,z.grammar,z.language))},highlight:function(m,g,w){var k={code:m,grammar:g,language:w};if(i.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=i.tokenize(k.code,k.grammar),i.hooks.run("after-tokenize",k),l.stringify(i.util.encode(k.tokens),k.language)},tokenize:function(m,g){var w=g.rest;if(w){for(var k in w)g[k]=w[k];delete g.rest}var O=new p;return f(O,O.head,m),d(m,O,g,O.head,0),_(O)},hooks:{all:{},add:function(m,g){var w=i.hooks.all;w[m]=w[m]||[],w[m].push(g)},run:function(m,g){var w=i.hooks.all[m];if(!(!w||!w.length))for(var k=0,O;O=w[k++];)O(g)}},Token:l};a.Prism=i;function l(m,g,w,k){this.type=m,this.content=g,this.alias=w,this.length=(k||"").length|0}l.stringify=function m(g,w){if(typeof g=="string")return g;if(Array.isArray(g)){var k="";return g.forEach(function(ee){k+=m(ee,w)}),k}var O={type:g.type,content:m(g.content,w),tag:"span",classes:["token",g.type],attributes:{},language:w},R=g.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(O.classes,R):O.classes.push(R)),i.hooks.run("wrap",O);var U="";for(var z in O.attributes)U+=" "+z+'="'+(O.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+U+">"+O.content+"</"+O.tag+">"};function c(m,g,w,k){m.lastIndex=g;var O=m.exec(w);if(O&&k&&O[1]){var R=O[1].length;O.index+=R,O[0]=O[0].slice(R)}return O}function d(m,g,w,k,O,R){for(var U in w)if(!(!w.hasOwnProperty(U)||!w[U])){var z=w[U];z=Array.isArray(z)?z:[z];for(var ee=0;ee<z.length;++ee){if(R&&R.cause==U+","+ee)return;var ce=z[ee],_e=ce.inside,ve=!!ce.lookbehind,pe=!!ce.greedy,we=ce.alias;if(pe&&!ce.pattern.global){var M=ce.pattern.toString().match(/[imsuy]*$/)[0];ce.pattern=RegExp(ce.pattern.source,M+"g")}for(var B=ce.pattern||ce,D=k.next,J=O;D!==g.tail&&!(R&&J>=R.reach);J+=D.value.length,D=D.next){var re=D.value;if(g.length>m.length)return;if(!(re instanceof l)){var he=1,ie;if(pe){if(ie=c(B,J,m,ve),!ie||ie.index>=m.length)break;var G=ie.index,ze=ie.index+ie[0].length,je=J;for(je+=D.value.length;G>=je;)D=D.next,je+=D.value.length;if(je-=D.value.length,J=je,D.value instanceof l)continue;for(var Ne=D;Ne!==g.tail&&(je<ze||typeof Ne.value=="string");Ne=Ne.next)he++,je+=Ne.value.length;he--,re=m.slice(J,je),ie.index-=J}else if(ie=c(B,0,re,ve),!ie)continue;var G=ie.index,ue=ie[0],Le=re.slice(0,G),ge=re.slice(G+ue.length),We=J+re.length;R&&We>R.reach&&(R.reach=We);var Fe=D.prev;Le&&(Fe=f(g,Fe,Le),J+=Le.length),j(g,Fe,he);var h=new l(U,_e?i.tokenize(ue,_e):ue,we,ue);if(D=f(g,Fe,h),ge&&f(g,D,ge),he>1){var v={cause:U+","+ee,reach:We};d(m,g,w,D.prev,J,v),R&&v.reach>R.reach&&(R.reach=v.reach)}}}}}}function p(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function f(m,g,w){var k=g.next,O={value:w,prev:g,next:k};return g.next=O,k.prev=O,m.length++,O}function j(m,g,w){for(var k=g.next,O=0;O<w&&k!==m.tail;O++)k=k.next;g.next=k,k.prev=g,m.length-=O}function _(m){for(var g=[],w=m.head.next;w!==m.tail;)g.push(w.value),w=w.next;return g}if(!a.document)return a.addEventListener&&(i.disableWorkerMessageHandler||a.addEventListener("message",function(m){var g=JSON.parse(m.data),w=g.language,k=g.code,O=g.immediateClose;a.postMessage(i.highlight(k,i.languages[w],w)),O&&a.close()},!1)),i;var y=i.util.currentScript();y&&(i.filename=y.src,y.hasAttribute("data-manual")&&(i.manual=!0));function x(){i.manual||i.highlightAll()}if(!i.manual){var C=document.readyState;C==="loading"||C==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return i}(n);e.exports&&(e.exports=t),typeof Cr<"u"&&(Cr.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};i["language-"+o]={pattern:/[\s\S]+/,inside:t.languages[o]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",r=function(y,x){return"✖ Error "+y+" while fetching file: "+x},o="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",l="loading",c="loaded",d="failed",p="pre[data-src]:not(["+i+'="'+c+'"]):not(['+i+'="'+l+'"])';function f(y,x,C){var m=new XMLHttpRequest;m.open("GET",y,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?x(m.responseText):m.status>=400?C(r(m.status,m.statusText)):C(o))},m.send(null)}function j(y){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(x){var C=Number(x[1]),m=x[2],g=x[3];return m?g?[C,Number(g)]:[C,void 0]:[C,C]}}t.hooks.add("before-highlightall",function(y){y.selector+=", "+p}),t.hooks.add("before-sanity-check",function(y){var x=y.element;if(x.matches(p)){y.code="",x.setAttribute(i,l);var C=x.appendChild(document.createElement("CODE"));C.textContent=a;var m=x.getAttribute("data-src"),g=y.language;if(g==="none"){var w=(/\.(\w+)$/.exec(m)||[,"none"])[1];g=s[w]||w}t.util.setLanguage(C,g),t.util.setLanguage(x,g);var k=t.plugins.autoloader;k&&k.loadLanguages(g),f(m,function(O){x.setAttribute(i,c);var R=j(x.getAttribute("data-range"));if(R){var U=O.split(/\r\n?|\n/g),z=R[0],ee=R[1]==null?U.length:R[1];z<0&&(z+=U.length),z=Math.max(0,Math.min(z-1,U.length)),ee<0&&(ee+=U.length),ee=Math.max(0,Math.min(ee,U.length)),O=U.slice(z,ee).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(z+1))}C.textContent=O,t.highlightElement(C)},function(O){x.setAttribute(i,d),C.textContent=O})}}),t.plugins.fileHighlight={highlight:function(x){for(var C=(x||document).querySelectorAll(p),m=0,g;g=C[m++];)t.highlightElement(g)}};var _=!1;t.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(up);const dp=Oa,fp=ac({__proto__:null,default:dp},[Oa]),hp={class:"mb-5"},gp=u("div",{class:"row"},[u("div",{class:"col-12 mb-3"},[u("h2",null,"Examples")])],-1),pp={__name:"ExamplesSection",setup(e){return(n,t)=>(X(),te("div",hp,[gp,W(b(Cg),{id:"lang-examples"}),W(b(ag),{id:"add-lang-examples"}),W(b(np),{id:"plugin-examples"}),W(b(cp),{id:"tab-examples"}),W(b(hg),{id:"copy-button-examples"}),W(b(ig),{id:"browser-window-examples"}),W(b(Gg),{id:"other-prop-examples"})]))}},bp={class:"row mb-5"},mp=u("h2",null,"Events",-1),yp=[mp],vp={class:"col-12 mb-3"},_p={class:"table-responsive"},jp={class:"table table-striped"},wp=u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Description")])],-1),kp={valign:"top"},xp={valign:"top"},Ep={__name:"EventsSection",setup(e){const n=ne("styleData"),t={run:{description:"The event emitted when the run tab is clicked."},"update:copy-status":{description:"The event emitted when the copy status is updated."}};return(a,r)=>(X(),te("div",bp,[u("div",{class:Se(b(n).h2ColClass)},yp,2),u("div",vp,[u("div",_p,[u("table",jp,[wp,u("tbody",null,[(X(),te(Oe,null,Zn(t,(o,s)=>u("tr",{key:o},[u("td",kp,xe(s),1),u("td",xp,xe(o.description),1)])),64))])])])])]))}},Sp={class:"row mb-5"},Tp=u("h2",null,"Installation",-1),Cp=[Tp],Ap={class:"col-12 mb-4"},Op={class:"col-12"},Np={__name:"InstallationSection",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a=ne("styleData"),r="pnpm add vue3-code-block",o="npm i vue3-code-block";return(s,i)=>{const l=Ze("CodeBlock");return X(),te("div",Sp,[u("div",{class:Se(b(a).h2ColClass)},Cp,2),u("div",Ap,[W(l,{code:r,highlightjs:b(n).id==="highlightjs",label:"Using pnpm:",lang:"plain",prismjs:b(n).id==="prism","show-run":!1,tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])]),u("div",Op,[W(l,{code:o,highlightjs:b(n).id==="highlightjs",label:"Using npm:",lang:"plain",prismjs:b(n).id==="prism","show-run":!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])])}}},Mp={class:"row mb-5"},$p=u("h2",null,"License",-1),Ip=[$p],Rp={class:"col-12"},Lp=u("p",null,[le(" Copyright © 2023 WebDevNerdStuff "),u("br"),le(" Licensed under the MIT license. ")],-1),Pp=["href"],Bp={__name:"LicenseSection",setup(e){const n=ne("styleData"),t=ne("links");return(a,r)=>(X(),te("div",Mp,[u("div",{class:Se(b(n).h2ColClass)},Ip,2),u("div",Rp,[Lp,u("p",null,[u("a",{href:b(t).license,target:"_blank"}," LICENSE.md ",8,Pp)])])]))}};const kl=e=>(Ei("data-v-ff35c56a"),e=e(),Si(),e),Fp={class:"row mb-5"},Dp=kl(()=>u("h2",null,"Props",-1)),zp=[Dp],Up={class:"col-12 mb-3"},Hp={class:"table-responsive"},qp={class:"table table-striped"},Wp=kl(()=>u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Type"),u("th",null,"Default"),u("th",null,"Description")])],-1)),Gp=["id"],Vp={class:"prop-type",valign:"top"},Kp={class:"prop-default",valign:"top"},Yp=["innerHTML"],Jp={__name:"PropsSection",setup(e){const n=ne("styleData"),t=ne("prismLinks"),a=ne("highlightJsLinks"),r={browserWindow:{type:"Boolean",required:!1,default:!1,description:"To give the code block a browser window look."},code:{type:"[Object, Array, String, Number]",required:!0,default:"",description:"The code to be displayed in the code block."},codeBlockRadius:{type:"String",required:!1,default:"0.5rem",description:"The border radius of the code block."},copyButton:{type:Boolean,required:!1,default:!0,description:"To show a copy button within the code block"},copyIcons:{type:"Boolean",required:!1,default:!0,description:"To show the copy icons on the copy code tab."},copyTab:{type:"Boolean",required:!1,default:!0,description:"To show the copy code tab."},copyFailedText:{type:"String",required:!1,default:"Copy failed!",description:"The text to be displayed when the code copy failed."},copyText:{type:"String",required:!1,default:"Copy Code",description:"The text to be displayed on the copy tab."},copySuccessText:{type:"String",required:!1,default:"Copied!",description:"The text to be displayed when the code copy was successful."},floatingTabs:{type:"Boolean",required:!1,default:!0,description:"To make the tabs float on top of the code block."},height:{type:"[String, Number]",required:!1,default:"auto",description:"The height of the code block."},highlightjs:{type:"Boolean",required:!1,default:"false",description:"Specifies that the Highlight.js library should be used."},indent:{type:"Number",required:!1,default:4,description:"The number of spaces to indent the code for json."},label:{type:"String",required:!1,default:"",description:"The label to be displayed on the code block."},lang:{type:"String",required:!1,default:"javascript",description:"The language of the code."},maxHeight:{type:"[String, Number]",required:!1,default:"auto",description:"The max height of the code block."},persistentCopyButton:{type:"Boolean",required:!1,default:!1,description:"To show a persistent copy button within the code block"},prismjs:{type:"Boolean",required:!1,default:"true",description:"Specifies that the PrismJS library should be used."},prismPlugin:{type:"Boolean",required:!1,default:"false",description:"Specifies that a PrismJS plugin is being used. This is needed for the plugin to work properly."},runTab:{type:"Boolean",required:!1,default:!1,description:"To show the run tab."},tabGap:{type:"String",required:!1,default:"0.25rem",description:"The gap between the tabs."},tabs:{type:"Boolean",required:!1,default:!1,description:"To show the tabs. This will show/hide all tabs."},theme:{type:"[String, Boolean]",required:!1,id:"props-theme-option",default:"neon-bunny",description:`<p>The theme to be used for the code block. Available options include:</p>
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
		`}};return(o,s)=>(X(),te("div",Fp,[u("div",{class:Se(b(n).h2ColClass)},zp,2),u("div",Up,[u("div",Hp,[u("table",qp,[Wp,u("tbody",null,[(X(),te(Oe,null,Zn(r,(i,l)=>u("tr",{key:i},[u("td",{id:i==null?void 0:i.id,valign:"top"},xe(l),9,Gp),u("td",Vp,xe(i.type),1),u("td",Kp,xe(i.default),1),u("td",{valign:"top",innerHTML:i.description},null,8,Yp)])),64))])])])])]))}},Zp=so(Jp,[["__scopeId","data-v-ff35c56a"]]),Xp={class:"row mb-5"},Qp=u("h2",null,"Slots",-1),eb=[Qp],nb={class:"col-12 mb-3"},tb={class:"table-responsive"},ab={class:"table table-striped"},rb=u("thead",null,[u("tr",null,[u("th",null,"Name"),u("th",null,"Description")])],-1),ob={valign:"top"},sb={valign:"top"},ib={__name:"SlotsSection",setup(e){const n=ne("styleData"),t={copyButton:{description:"Slot for the copy button inside the code block of the component."},label:{description:"Slot for the label of the component."},tabs:{description:"Slot for the tabs of the component."}};return(a,r)=>(X(),te("div",Xp,[u("div",{class:Se(b(n).h2ColClass)},eb,2),u("div",nb,[u("div",tb,[u("table",ab,[rb,u("tbody",null,[(X(),te(Oe,null,Zn(t,(o,s)=>u("tr",{key:o},[u("td",ob,xe(s),1),u("td",sb,xe(o.description),1)])),64))])])])])]))}},lb={class:"row mb-5"},cb=u("h2",null,"Register Component",-1),ub=[cb],db={class:"col-12"},fb={__name:"RegisterSection",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a=ne("styleData"),r=`import { createApp } from 'vue';
import CodeBlock from 'vue3-code-block';

createApp()
  .use(CodeBlock)
  .mount('#app');`;return(o,s)=>{const i=Ze("CodeBlock");return X(),te("div",lb,[u("div",{class:Se(b(a).h2ColClass)},ub,2),u("div",db,[W(i,{code:r,highlightjs:b(n).id==="highlightjs",lang:"javascript",prismjs:b(n).id==="prism","show-run":!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])])}}},hb={class:"row mb-5"},gb=u("h2",null,"Themes",-1),pb=[gb],bb={class:"col-12"},mb=u("p",null," There are a few options for theming the code block. Using the components built in method allows you to be able to dynamically change the theme easily. If you choose, you can also use your own custom theme. ",-1),yb=u("code",null,"neon-bunny",-1),vb=u("code",null,"neon-bunny-carrot",-1),_b=["href"],jb=["href"],wb=u("a",{href:"#props-theme-option"},"theme",-1),kb=u("code",null,"fetch",-1),xb=["href"],Eb={key:0},Sb=u("code",null,"base16",-1),Tb=u("code",null,"node_modules",-1),Cb=u("code",null,"theme",-1),Ab={key:2},Ob=["href"],Nb=u("p",null,[le(" Alternatively you can import the theme into your css/sass/scss. Make sure to set the "),u("code",null,"theme"),le(" prop to false to avoid it conflicting with the default theme. ")],-1),Mb={__name:"ThemesSection",setup(e){const n=ne("links"),t=ne("prismLinks"),a=ne("highlightJsLinks"),r=ne("selectedLibrary"),o=ne("selectedTheme"),s=ne("styleData"),i={prism:{bunnyTheme:`<CodeBlock
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
  @import 'prismjs/themes/prism-coy.css';
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
  @import 'highlight.js/styles/base16/onedark.css';
</style>`,importJs:`<script setup>
  import 'highlight.js/styles/base16/onedark.css';
<\/script>`,themeProp:`<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Build in Theming"
  lang="html"
  theme="atom-one-dark"
/>`}},l=`<div class="alert alert-primary my-2" role="alert">
Not all tab &amp; icon styles for these themes are built into the component.<br />If
you would like to contribute to add tab/icon styles for a theme not
included, you can find instructions located
<a href="${n.contribute}" target="_blank">here</a>.
</div>`;return(c,d)=>{const p=Ze("CodeBlock");return X(),te("div",hb,[u("div",{class:Se(b(s).h2ColClass)},pb,2),u("div",bb,[mb,u("p",null,[le(" The first way is to use one of the two custom themes ("),yb,le(", "),vb,le(") built into the component that are based off of my own VSCode "),u("a",{href:b(n).neonBunnyTheme,target:"_blank"},"Neon Bunny Theme",8,_b),le(". ")]),W(p,{code:i[b(r).id].bunnyTheme,highlightjs:b(r).id==="highlightjs",label:"Using the Neon Bunny Themes",lang:"html",prismjs:b(r).id==="prism",theme:b(o)},null,8,["code","highlightjs","prismjs","theme"]),u("p",null,[le(" Another other is to use the main "),u("a",{href:b(r).id==="prism"?b(t).homepage:b(a).homepage,target:"_blank"},xe(b(r).label),9,jb),le(" themes. If you use the component to load the theme, you just need to set the "),wb,le(" prop to the desired theme. When you load it this way, the component will use a "),kb,le(" call to load them themes from the "),u("a",{href:b(r).id==="prism"?b(t).cdn:b(a).cdn,target:"_blank"},"jsDelivr CDN",8,xb),le(". Fetching the "+xe(b(r).label)+" themes from a CDN was the best method I could figure out at this time to dynamically load the themes, while making it easier for you to use them. You can also link to another CDN of your choice. ",1)]),W(p,{code:i[b(r).id].themeProp,highlightjs:b(r).id==="highlightjs",label:"Using the theme prop",lang:"html",prismjs:b(r).id==="prism",theme:b(o)},null,8,["code","highlightjs","prismjs","theme"]),b(r).id==="highlightjs"?(X(),te("p",Eb,[le(" You can also use the "),Sb,le(" styles. "),u("span",{innerHTML:l})])):nn("",!0),b(r).id==="highlightjs"?(X(),Bt(p,{key:1,code:i[b(r).id].base16,highlightjs:!0,label:"Using a base16 theme",lang:"html",prismjs:!1,theme:b(o)},null,8,["code","theme"])):nn("",!0),u("p",null,[le(" You can also load the themes the traditional way of importing them directly from the "+xe(b(r).label)+" package in ",1),Tb,le(". Make sure to set the "),Cb,le(" prop to false to avoid it conflicting with the default theme. ")]),b(r).id==="prism"?(X(),te("p",Ab,[le(" Themes from their "),u("a",{href:b(t).themes,target:"_blank"},"Prism themes",8,Ob),le(" repository can be used this way as well. "),u("span",{innerHTML:l})])):nn("",!0),W(p,{code:i[b(r).id].importJs,highlightjs:b(r).id==="highlightjs",label:"Using import (javascript)",lang:"html",prismjs:b(r).id==="prism",theme:b(o)},null,8,["code","highlightjs","prismjs","theme"]),Nb,W(p,{code:i[b(r).id].importCss,highlightjs:b(r).id==="highlightjs",label:"Using import (css/sass/scss)",lang:"html",prismjs:b(r).id==="prism",theme:b(o)},null,8,["code","highlightjs","prismjs","theme"])])])}}},$b={class:"row mb-5"},Ib=u("h2",null,"Usage",-1),Rb=[Ib],Lb={class:"col-12"},Pb={class:"col-12"},Bb={__name:"UsageSection",setup(e){const n=ne("selectedLibrary"),t=ne("selectedTheme"),a=ne("styleData"),r=`<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo)\`;
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

  alert(foo)\`;
<\/script>`;function s(){alert("bar")}return(i,l)=>{const c=Ze("CodeBlock");return X(),te("div",$b,[u("div",{class:Se(b(a).h2ColClass)},Rb,2),u("div",Lb,[W(c,{code:r,highlightjs:b(n).id==="highlightjs",label:"My Code",lang:"html",prismjs:b(n).id==="prism","show-run":!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])]),u("div",Pb,[W(c,{code:o,highlightjs:b(n).id==="highlightjs",label:"Run My Code",lang:"html",prismjs:b(n).id==="prism","run-tab":"",tabs:"",theme:b(t),onRun:s},null,8,["highlightjs","prismjs","theme"])])])}}};(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){function n(t,a){return"___"+t.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(r,function(i){if(typeof o=="function"&&!o(i))return i;for(var l=s.length,c;t.code.indexOf(c=n(a,l))!==-1;)++l;return s[l]=i,c}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language!==a||!t.tokenStack)return;t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);function s(i){for(var l=0;l<i.length&&!(r>=o.length);l++){var c=i[l];if(typeof c=="string"||c.content&&typeof c.content=="string"){var d=o[r],p=t.tokenStack[d],f=typeof c=="string"?c:c.content,j=n(a,d),_=f.indexOf(j);if(_>-1){++r;var y=f.substring(0,_),x=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),C=f.substring(_+j.length),m=[];y&&m.push.apply(m,s([y])),m.push(x),C&&m.push.apply(m,s([C])),typeof c=="string"?i.splice.apply(i,[l,1].concat(m)):c.content=m}}else c.content&&s(c.content)}return i}s(t.tokens)}}})})(Prism);(function(e){var n=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,r=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:n,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:r,punctuation:o};var s={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},i=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:s}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:s}}];e.languages.insertBefore("php","variable",{string:i,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:n,string:i,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:a,operator:r,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(l){if(/<\?/.test(l.code)){var c=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(l,"php",c)}}),e.hooks.add("after-tokenize",function(l){e.languages["markup-templating"].tokenizePlaceholders(l,"php")})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(s,i){if(!(s.tagName!=="PRE"||!s.classList.contains(e))){var l=s.querySelector(".line-numbers-rows");if(l){var c=parseInt(s.getAttribute("data-start"),10)||1,d=c+(l.children.length-1);i<c&&(i=c),i>d&&(i=d);var p=i-c;return l.children[p]}}},resize:function(s){a([s])},assumeViewportIndependence:!0};function a(s){if(s=s.filter(function(l){var c=r(l),d=c["white-space"];return d==="pre-wrap"||d==="pre-line"}),s.length!=0){var i=s.map(function(l){var c=l.querySelector("code"),d=l.querySelector(".line-numbers-rows");if(!(!c||!d)){var p=l.querySelector(".line-numbers-sizer"),f=c.textContent.split(n);p||(p=document.createElement("span"),p.className="line-numbers-sizer",c.appendChild(p)),p.innerHTML="0",p.style.display="block";var j=p.getBoundingClientRect().height;return p.innerHTML="",{element:l,lines:f,lineHeights:[],oneLinerHeight:j,sizer:p}}}).filter(Boolean);i.forEach(function(l){var c=l.sizer,d=l.lines,p=l.lineHeights,f=l.oneLinerHeight;p[d.length-1]=void 0,d.forEach(function(j,_){if(j&&j.length>1){var y=c.appendChild(document.createElement("span"));y.style.display="block",y.textContent=j}else p[_]=f})}),i.forEach(function(l){for(var c=l.sizer,d=l.lineHeights,p=0,f=0;f<d.length;f++)d[f]===void 0&&(d[f]=c.children[p++].getBoundingClientRect().height)}),i.forEach(function(l){var c=l.sizer,d=l.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",l.lineHeights.forEach(function(p,f){d.children[f].style.height=p+"px"})})}}function r(s){return s?window.getComputedStyle?getComputedStyle(s):s.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(s){if(s.code){var i=s.element,l=i.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,e)){i.classList.remove(e),l.classList.add(e);var c=s.code.match(n),d=c?c.length+1:1,p,f=new Array(d+1).join("<span></span>");p=document.createElement("span"),p.setAttribute("aria-hidden","true"),p.className="line-numbers-rows",p.innerHTML=f,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),s.element.appendChild(p),a([l]),Prism.hooks.run("line-numbers",s)}}}),Prism.hooks.add("line-numbers",function(s){s.plugins=s.plugins||{},s.plugins.lineNumbers=!0})})();const Fb={class:"container mb-5"},Db=u("div",{class:"row mb-4"},[u("div",{class:"col-12 text-center"},[u("img",{alt:"Vue",class:"vue-logo",src:cf})])],-1),zb={class:"row mb-3"},Ub=u("div",{class:"col-12 text-center"},[u("h1",null,"Vue 3 CodeBlock")],-1),Hb={class:"col-12 text-center"},qb={class:"badge bg-secondary rounded-pill"},Wb={class:"container mb-5"},Gb={class:"row"},Vb={class:"col-12"},Kb=["href"],Yb=["href"],Jb=u("hr",null,null,-1),Zb={class:"row"},Xb={class:"col-12 mb-3"},Qb=u("h5",null,"Switch between PrismJS and Highlight.js",-1),em={class:"d-inline-flex align-items-center px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"},nm={class:"col-12 col-md-3 mb-3"},tm=["selected","value"],am={class:"row"},rm={class:"col-12 col-md-3"},om=u("label",{class:"form-label",for:"theme-selection-select"},"Select Theme:",-1),sm=["selected","value"],im={class:"container"},lm=Pn({__name:"DemoPage",emits:["changedLibrary"],setup(e,{emit:n}){const t=ne("highlightJsLinks"),a=ne("prismLinks"),r=rl(),o=ke("prism"),s=r.libraries,i=r.highlightThemes,l=r.neonBunnyThemes,c=r.prismThemes,d=ke(null),p=ke(s.prism),f=ke("neon-bunny");no(()=>{o.value=r.getLocalStorage()??r.setLocalStorage(),j(o.value)}),d.value=[...l,...c],Sn("selectedTheme",f),Sn("selectedLibrary",p),o.value==="highlightjs"&&(d.value=[...l,...i],p.value=s.highlightjs);function j(y){if(o.value=y,p.value=s[y],f.value="neon-bunny",r.setLocalStorage(o.value),n("changedLibrary",p),y==="prism"){d.value=[...l,...c];return}d.value=[...l,...i]}function _(y){f.value=y}return(y,x)=>{const C=Ze("fa-icon");return X(),te(Oe,null,[u("div",Fb,[Db,u("div",zb,[Ub,u("div",Hb,[u("span",qb,xe(b(nl)),1)])])]),u("div",Wb,[u("div",Gb,[u("div",Vb,[u("p",null,[le(" The Vue 3 CodeBlock component leverages the power of "),u("a",{href:b(a).homepage,target:"_blank"},"PrismJS",8,Kb),le(" or "),u("a",{href:b(t).homepage,target:"_blank"},"Highlight.js",8,Yb),le(" to provide syntax highlighting for code blocks within your application. The component takes a prop, which is the code to be highlighted, and uses PrismJS or Highlight.js to render the code with syntax highlighting. The component supports a variety of programming languages and can be customized with different themes to match your application's design. With this component, your users can display their code snippets with ease and clarity, making it easier to share and collaborate on code within your application. ")])])]),Jb,u("div",Zb,[u("div",Xb,[Qb,u("small",em,[W(C,{class:"text-success me-1",icon:"fa-solid fa-circle-info"}),le(" This will also update the examples and documentation below. ")])]),u("div",nm,[u("select",{"aria-label":"Library Selection",class:"form-select",onChange:x[0]||(x[0]=m=>j(m.target.value))},[(X(!0),te(Oe,null,Zn(b(s),m=>(X(),te("option",{key:m,selected:o.value===m.id,value:m.id},xe(m.label),9,tm))),128))],32)])]),u("div",am,[u("div",rm,[om,u("select",{id:"theme-selection-select","aria-label":"Theme Selection",class:"form-select",onChange:x[1]||(x[1]=m=>_(m.target.value))},[(X(!0),te(Oe,null,Zn(d.value,m=>(X(),te("option",{key:m,selected:f.value===m.value,value:m.value},xe(m.label),9,sm))),128))],32)])])]),u("div",im,[W(b(Np),{id:"ul-installation"}),W(b(fb),{id:"ul-register-plugin"}),W(b(Bb),{id:"ul-usage"}),W(b(Zp),{id:"ul-props"}),W(b(Mb),{id:"ul-themes"}),W(b(Ep),{id:"ul-events"}),W(b(ib),{id:"ul-slots"}),W(b(pp),{id:"ul-examples"}),W(b(Mf),{id:"ul-css-vars"}),W(b(qf),{id:"ul-dependencies"}),W(b(pf),{id:"ul-change-log"}),W(b(Bp),{id:"ul-license"})])],64)}}});const cm={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5"},um={class:"container"},dm=u("a",{class:"navbar-brand",href:"/vue3-code-block/"},"Vue 3 CodeBlock",-1),fm=u("button",{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",class:"navbar-toggler","data-bs-target":"#navbarSupportedContent","data-bs-toggle":"collapse",type:"button"},[u("span",{class:"navbar-toggler-icon"})],-1),hm={id:"navbarSupportedContent",class:"collapse navbar-collapse"},gm={class:"navbar-nav me-auto mb-2 mb-lg-0"},pm={class:"nav-item"},bm={"aria-current":"page",class:"nav-link active",href:"/vue3-code-block/"},mm=u("li",{class:"nav-item dropdown"},[u("a",{id:"docs-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Docs "),u("ul",{"aria-labelledby":"docs-dropdown",class:"dropdown-menu dropdown-menu-dark"},[u("li",null,[u("a",{class:"dropdown-item",href:"#ul-installation"}," Installation ")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-register-plugin"},"Register Component")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-props"},"Props")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-themes"},"Themes")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-events"},"Events")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-slots"},"Slots")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-examples"},"Examples")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-css-vars"},"CSS Variables")]),u("li",null,[u("hr",{class:"dropdown-divider"})]),u("li",null,[u("h6",{class:"dropdown-header"},"Info")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-dependencies"}," Dependencies ")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-change-log"},"Change Log")]),u("li",null,[u("a",{class:"dropdown-item",href:"#ul-license"},"License")])])],-1),ym=u("li",{class:"nav-item dropdown"},[u("a",{id:"examples-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Examples "),u("ul",{"aria-labelledby":"examples-dropdown",class:"dropdown-menu dropdown-menu-dark"},[u("li",null,[u("a",{class:"dropdown-item",href:"#lang-examples"},"Languages")]),u("li",null,[u("a",{class:"dropdown-item",href:"#add-lang-examples"}," Additional Languages ")]),u("li",null,[u("a",{class:"dropdown-item",href:"#plugin-examples"},"Plugins")]),u("li",null,[u("a",{class:"dropdown-item",href:"#tab-examples"},"Tabs")]),u("li",null,[u("a",{class:"dropdown-item",href:"#copy-button-examples"}," Copy Button ")]),u("li",null,[u("a",{class:"dropdown-item",href:"#browser-window-examples"}," Browser Window ")]),u("li",null,[u("a",{class:"dropdown-item",href:"#other-prop-examples"}," Other Props ")])])],-1),vm={class:"d-flex my-2 me-2"},_m=["href"],jm={class:"d-flex"},wm={class:"navbar-nav me-auto mb-2 mb-lg-0"},km={class:"nav-item"},xm=["href"],Em={class:"nav-item"},Sm=["href"],Tm={class:"nav-item d-flex align-items-center ms-2"},Cm={__name:"NavBar",props:{selectedLibrary:{type:Object,required:!0}},setup(e){const n=ne("links"),t=ne("prismLinks"),a=ne("highlightJsLinks"),r=localStorage.getItem("theme"),o=ke(r),s=()=>r||"dark",i=function(l){l==="toggle"?o.value=o.value!=="dark"?"dark":"light":o.value=l,document.documentElement.setAttribute("data-bs-theme",o.value),localStorage.setItem("theme",o.value)};return i(s()),(l,c)=>{const d=Ze("fa-icon");return X(),te("nav",cm,[u("div",um,[dm,fm,u("div",hm,[u("ul",gm,[u("li",pm,[u("a",bm,[W(d,{icon:"fa-solid fa-house"})])]),mm,ym]),u("div",vm,[u("a",{href:e.selectedLibrary.id==="prism"?b(t).homepage:b(a).homepage,target:"_blank"},[u("span",{class:Se(["badge",e.selectedLibrary.id==="prism"?"badge-prism":"badge-highlightjs"])},xe(e.selectedLibrary.label)+" Active",3)],8,_m)]),u("div",jm,[u("ul",wm,[u("li",km,[u("a",{class:"nav-link",href:b(n).github,target:"_blank"},[W(d,{icon:"fa-brands fa-github"}),le(" GitHub ")],8,xm)]),u("li",Em,[u("a",{class:"nav-link",href:b(n).npm,target:"_blank"},[W(d,{icon:"fa-brands fa-npm"}),le(" Package ")],8,Sm)]),u("li",Tm,[W(d,{class:Se(["theme-switch fa-fw",o.value==="dark"?"moon":"sun"]),icon:o.value==="dark"?"fa-moon":"fa-sun",onClick:c[0]||(c[0]=p=>i("toggle"))},null,8,["class","icon"])])])])])])])}}},Am={class:"footer-container container-fluid"},Om={class:"container py-2"},Nm={class:"d-flex flex-wrap justify-content-between align-items-center my-2"},Mm={class:"text-muted col-md-4 d-flex align-items-center"},$m=["href"],Im={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},Rm={class:"ms-3"},Lm=["href"],Pm={class:"ms-3"},Bm=["href"],Fm=Pn({__name:"FooterBar",setup(e){const n=ne("links"),t=new Date().getFullYear();return(a,r)=>{const o=Ze("fa-icon");return X(),te("div",Am,[u("div",Om,[u("footer",Nm,[u("div",Mm,[le(" © "+xe(b(t))+" ",1),u("a",{class:"text-muted btn btn-link d-flex-inline ps-2",href:b(n).githubProfile,target:"_blank"},"WebDevNerdStuff",8,$m)]),u("ul",Im,[u("li",Rm,[u("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:b(n).github,role:"button",target:"_blank"},[W(o,{icon:"fa-brands fa-github"})],8,Lm)]),u("li",Pm,[u("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:b(n).npm,role:"button",target:"_blank"},[W(o,{icon:"fa-brands fa-npm"})],8,Bm)])])])])])}}});const Dm=Pn({__name:"App",setup(e){Sn("styleData",{h2ColClass:"col-12 mb-4",fieldWidth:{maxWidth:"100%",width:"300px"}});const n=rl(),t=ke({});Sn("links",n.links),Sn("highlightJsLinks",n.highlightJsLinks),Sn("prismLinks",n.prismLinks);const a=ke({browserWindow:!1,preHeight:"30em"});Sn("codeBlockOptions",a);function r(o){t.value=o.value}return(o,s)=>(X(),te(Oe,null,[W(Cm,{"selected-library":t.value},null,8,["selected-library"]),W(lm,{onChangedLibrary:r}),W(Fm)],64))}}),zm="modulepreload",Um=function(e){return"/vue3-code-block/"+e},ms={},ys=function(n,t,a){if(!t||t.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Um(o),o in ms)return;ms[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(!!a)for(let d=r.length-1;d>=0;d--){const p=r[d];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":zm,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};var Na={},Hm={get exports(){return Na},set exports(e){Na=e}};(function(e,n){(function(t,a){var r="1.0.35",o="",s="?",i="function",l="undefined",c="object",d="string",p="major",f="model",j="name",_="type",y="vendor",x="version",C="architecture",m="console",g="mobile",w="tablet",k="smarttv",O="wearable",R="embedded",U=350,z="Amazon",ee="Apple",ce="ASUS",_e="BlackBerry",ve="Browser",pe="Chrome",we="Edge",M="Firefox",B="Google",D="Huawei",J="LG",re="Microsoft",he="Motorola",ie="Opera",ze="Samsung",je="Sharp",Ne="Sony",G="Xiaomi",ue="Zebra",Le="Facebook",ge="Chromium OS",We="Mac OS",Fe=function(E,A){var I={};for(var H in E)A[H]&&A[H].length%2===0?I[H]=A[H].concat(E[H]):I[H]=E[H];return I},h=function(E){for(var A={},I=0;I<E.length;I++)A[E[I].toUpperCase()]=E[I];return A},v=function(E,A){return typeof E===d?S(A).indexOf(S(E))!==-1:!1},S=function(E){return E.toLowerCase()},$=function(E){return typeof E===d?E.replace(/[^\d\.]/g,o).split(".")[0]:a},N=function(E,A){if(typeof E===d)return E=E.replace(/^\s\s*/,o),typeof A===l?E:E.substring(0,U)},T=function(E,A){for(var I=0,H,se,ye,fe,ae,Ue;I<A.length&&!ae;){var nt=A[I],He=A[I+1];for(H=se=0;H<nt.length&&!ae&&nt[H];)if(ae=nt[H++].exec(E),ae)for(ye=0;ye<He.length;ye++)Ue=ae[++se],fe=He[ye],typeof fe===c&&fe.length>0?fe.length===2?typeof fe[1]==i?this[fe[0]]=fe[1].call(this,Ue):this[fe[0]]=fe[1]:fe.length===3?typeof fe[1]===i&&!(fe[1].exec&&fe[1].test)?this[fe[0]]=Ue?fe[1].call(this,Ue,fe[2]):a:this[fe[0]]=Ue?Ue.replace(fe[1],fe[2]):a:fe.length===4&&(this[fe[0]]=Ue?fe[3].call(this,Ue.replace(fe[1],fe[2])):a):this[fe]=Ue||a;I+=2}},q=function(E,A){for(var I in A)if(typeof A[I]===c&&A[I].length>0){for(var H=0;H<A[I].length;H++)if(v(A[I][H],E))return I===s?a:I}else if(v(A[I],E))return I===s?a:I;return E},P={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},L={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},F={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[x,[j,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[x,[j,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[j,x],[/opios[\/ ]+([\w\.]+)/i],[x,[j,ie+" Mini"]],[/\bopr\/([\w\.]+)/i],[x,[j,ie]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[j,x],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[x,[j,"UC"+ve]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[x,[j,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[x,[j,"WeChat"]],[/konqueror\/([\w\.]+)/i],[x,[j,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[x,[j,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[x,[j,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[j,/(.+)/,"$1 Secure "+ve],x],[/\bfocus\/([\w\.]+)/i],[x,[j,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[x,[j,ie+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[x,[j,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[x,[j,"Dolphin"]],[/coast\/([\w\.]+)/i],[x,[j,ie+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[x,[j,"MIUI "+ve]],[/fxios\/([-\w\.]+)/i],[x,[j,M]],[/\bqihu|(qi?ho?o?|360)browser/i],[[j,"360 "+ve]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[j,/(.+)/,"$1 "+ve],x],[/(comodo_dragon)\/([\w\.]+)/i],[[j,/_/g," "],x],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[j,x],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[j],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[j,Le],x],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[j,x],[/\bgsa\/([\w\.]+) .*safari\//i],[x,[j,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[x,[j,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[x,[j,pe+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[j,pe+" WebView"],x],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[x,[j,"Android "+ve]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[j,x],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[x,[j,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[x,j],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[j,[x,q,P]],[/(webkit|khtml)\/([\w\.]+)/i],[j,x],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[j,"Netscape"],x],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[x,[j,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[j,x],[/(cobalt)\/([\w\.]+)/i],[j,[x,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[C,"amd64"]],[/(ia32(?=;))/i],[[C,S]],[/((?:i[346]|x)86)[;\)]/i],[[C,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/windows (ce|mobile); ppc;/i],[[C,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[C,/ower/,o,S]],[/(sun4\w)[;\)]/i],[[C,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[C,S]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[y,ze],[_,w]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[y,ze],[_,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[f,[y,ee],[_,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[y,ee],[_,w]],[/(macintosh);/i],[f,[y,ee]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[y,je],[_,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[y,D],[_,w]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[y,D],[_,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[y,G],[_,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[y,G],[_,w]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[y,"OPPO"],[_,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[y,"Vivo"],[_,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[y,"Realme"],[_,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[y,he],[_,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[y,he],[_,w]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[y,J],[_,w]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[y,J],[_,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[y,"Lenovo"],[_,w]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[y,"Nokia"],[_,g]],[/(pixel c)\b/i],[f,[y,B],[_,w]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[y,B],[_,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[y,Ne],[_,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[y,Ne],[_,w]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[y,"OnePlus"],[_,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[y,z],[_,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[y,z],[_,g]],[/(playbook);[-\w\),; ]+(rim)/i],[f,y,[_,w]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[y,_e],[_,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[y,ce],[_,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[y,ce],[_,g]],[/(nexus 9)/i],[f,[y,"HTC"],[_,w]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[y,[f,/_/g," "],[_,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[y,"Acer"],[_,w]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[y,"Meizu"],[_,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[y,f,[_,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[y,f,[_,w]],[/(surface duo)/i],[f,[y,re],[_,w]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[y,"Fairphone"],[_,g]],[/(u304aa)/i],[f,[y,"AT&T"],[_,g]],[/\bsie-(\w*)/i],[f,[y,"Siemens"],[_,g]],[/\b(rct\w+) b/i],[f,[y,"RCA"],[_,w]],[/\b(venue[\d ]{2,7}) b/i],[f,[y,"Dell"],[_,w]],[/\b(q(?:mv|ta)\w+) b/i],[f,[y,"Verizon"],[_,w]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[y,"Barnes & Noble"],[_,w]],[/\b(tm\d{3}\w+) b/i],[f,[y,"NuVision"],[_,w]],[/\b(k88) b/i],[f,[y,"ZTE"],[_,w]],[/\b(nx\d{3}j) b/i],[f,[y,"ZTE"],[_,g]],[/\b(gen\d{3}) b.+49h/i],[f,[y,"Swiss"],[_,g]],[/\b(zur\d{3}) b/i],[f,[y,"Swiss"],[_,w]],[/\b((zeki)?tb.*\b) b/i],[f,[y,"Zeki"],[_,w]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[y,"Dragon Touch"],f,[_,w]],[/\b(ns-?\w{0,9}) b/i],[f,[y,"Insignia"],[_,w]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[y,"NextBook"],[_,w]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[y,"Voice"],f,[_,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[y,"LvTel"],f,[_,g]],[/\b(ph-1) /i],[f,[y,"Essential"],[_,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[y,"Envizen"],[_,w]],[/\b(trio[-\w\. ]+) b/i],[f,[y,"MachSpeed"],[_,w]],[/\btu_(1491) b/i],[f,[y,"Rotor"],[_,w]],[/(shield[\w ]+) b/i],[f,[y,"Nvidia"],[_,w]],[/(sprint) (\w+)/i],[y,f,[_,g]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[y,re],[_,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[y,ue],[_,w]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[y,ue],[_,g]],[/smart-tv.+(samsung)/i],[y,[_,k]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[y,ze],[_,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[y,J],[_,k]],[/(apple) ?tv/i],[y,[f,ee+" TV"],[_,k]],[/crkey/i],[[f,pe+"cast"],[y,B],[_,k]],[/droid.+aft(\w)( bui|\))/i],[f,[y,z],[_,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[y,je],[_,k]],[/(bravia[\w ]+)( bui|\))/i],[f,[y,Ne],[_,k]],[/(mitv-\w{5}) bui/i],[f,[y,G],[_,k]],[/Hbbtv.*(technisat) (.*);/i],[y,f,[_,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[y,N],[f,N],[_,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[_,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[y,f,[_,m]],[/droid.+; (shield) bui/i],[f,[y,"Nvidia"],[_,m]],[/(playstation [345portablevi]+)/i],[f,[y,Ne],[_,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[y,re],[_,m]],[/((pebble))app/i],[y,f,[_,O]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[f,[y,ee],[_,O]],[/droid.+; (glass) \d/i],[f,[y,B],[_,O]],[/droid.+; (wt63?0{2,3})\)/i],[f,[y,ue],[_,O]],[/(quest( 2| pro)?)/i],[f,[y,Le],[_,O]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[y,[_,R]],[/(aeobc)\b/i],[f,[y,z],[_,R]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[_,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[_,w]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[_,w]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[_,g]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[x,[j,we+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[x,[j,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[j,x],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[x,j]],os:[[/microsoft (windows) (vista|xp)/i],[j,x],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[j,[x,q,L]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[j,"Windows"],[x,q,L]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[x,/_/g,"."],[j,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[j,We],[x,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[x,j],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[j,x],[/\(bb(10);/i],[x,[j,_e]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[x,[j,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[x,[j,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[x,[j,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[x,[j,"watchOS"]],[/crkey\/([\d\.]+)/i],[x,[j,pe+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[j,ge],x],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[j,x],[/(sunos) ?([\w\.\d]*)/i],[[j,"Solaris"],x],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[j,x]]},V=function(E,A){if(typeof E===c&&(A=E,E=a),!(this instanceof V))return new V(E,A).getResult();var I=typeof t!==l&&t.navigator?t.navigator:a,H=E||(I&&I.userAgent?I.userAgent:o),se=I&&I.userAgentData?I.userAgentData:a,ye=A?Fe(F,A):F,fe=I&&I.userAgent==H;return this.getBrowser=function(){var ae={};return ae[j]=a,ae[x]=a,T.call(ae,H,ye.browser),ae[p]=$(ae[x]),fe&&I&&I.brave&&typeof I.brave.isBrave==i&&(ae[j]="Brave"),ae},this.getCPU=function(){var ae={};return ae[C]=a,T.call(ae,H,ye.cpu),ae},this.getDevice=function(){var ae={};return ae[y]=a,ae[f]=a,ae[_]=a,T.call(ae,H,ye.device),fe&&!ae[_]&&se&&se.mobile&&(ae[_]=g),fe&&ae[f]=="Macintosh"&&I&&typeof I.standalone!==l&&I.maxTouchPoints&&I.maxTouchPoints>2&&(ae[f]="iPad",ae[_]=w),ae},this.getEngine=function(){var ae={};return ae[j]=a,ae[x]=a,T.call(ae,H,ye.engine),ae},this.getOS=function(){var ae={};return ae[j]=a,ae[x]=a,T.call(ae,H,ye.os),fe&&!ae[j]&&se&&se.platform!="Unknown"&&(ae[j]=se.platform.replace(/chrome os/i,ge).replace(/macos/i,We)),ae},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return H},this.setUA=function(ae){return H=typeof ae===d&&ae.length>U?N(ae,U):ae,this},this.setUA(H),this};V.VERSION=r,V.BROWSER=h([j,x,p]),V.CPU=h([C]),V.DEVICE=h([f,y,_,m,g,k,w,O,R]),V.ENGINE=V.OS=h([j,x]),e.exports&&(n=e.exports=V),n.UAParser=V;var K=typeof t!==l&&(t.jQuery||t.Zepto);if(K&&!K.ua){var Z=new V;K.ua=Z.getResult(),K.ua.get=function(){return Z.getUA()},K.ua.set=function(E){Z.setUA(E);var A=Z.getResult();for(var I in A)K.ua[I]=A[I]}}})(typeof window=="object"?window:Cr)})(Hm,Na);const qm=Na,Wm=u("path",{d:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"},null,-1),Gm=[Wm],Vm=u("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1),Km=[Vm],Ym=u("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"},null,-1),Jm=[Ym],vs=Pn({__name:"StatusIcons",props:{icon:{type:String,required:!0}},setup(e){return(n,t)=>e.icon==="copy"?(X(),te("svg",Tt({key:0},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),Gm,16)):e.icon==="success"?(X(),te("svg",Tt({key:1},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),Km,16)):e.icon==="failed"?(X(),te("svg",Tt({key:2},n.$attrs,{viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"}),Jm,16)):nn("",!0)}});const Zm=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),Xm=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Qm=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],ey=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],ny=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],ty=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function ay(e){const n=e.regex,t=Zm(e),a={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},r="and or not only",o=/@-?\w[\w]*(-\w+)*/,s="[a-zA-Z-][a-zA-Z0-9_-]*",i=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,a,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+s,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+ey.join("|")+")"},{begin:":(:)?("+ny.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ty.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...i,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...i,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:r,attribute:Qm.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...i,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Xm.join("|")+")\\b"}]}}const _s="[A-Za-z$_][0-9A-Za-z$_]*",ry=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],oy=["true","false","null","undefined","NaN","Infinity"],xl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],El=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Sl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],sy=["arguments","this","super","console","window","document","localStorage","module","global"],iy=[].concat(Sl,xl,El);function ly(e){const n=e.regex,t=(B,{after:D})=>{const J="</"+B[0].slice(1);return B.input.indexOf(J,D)!==-1},a=_s,r={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,D)=>{const J=B[0].length+B.index,re=B.input[J];if(re==="<"||re===","){D.ignoreMatch();return}re===">"&&(t(B,{after:J})||D.ignoreMatch());let he;const ie=B.input.substring(J);if(he=ie.match(/^\s*=/)){D.ignoreMatch();return}if((he=ie.match(/^\s+extends\s+/))&&he.index===0){D.ignoreMatch();return}}},i={$pattern:_s,keyword:ry,literal:oy,built_in:iy,"variable.language":sy},l="[0-9](_?[0-9])*",c=`\\.(${l})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},j={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,j,_,y,{match:/\$\d+/},p];f.contains=m.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(m)});const g=[].concat(C,f.contains),w=g.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(g)}]),k={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w},O={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...xl,...El]}},U={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},z={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[k],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(B){return n.concat("(?!",B.join("|"),")")}const _e={match:n.concat(/\b/,ce([...Sl,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},pe={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},k]},we="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(we)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[k]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),U,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,j,_,y,C,{match:/\$\d+/},p,R,{className:"attr",begin:a+n.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:we,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:o},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[k,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[k]},_e,ee,O,pe,{match:/\$[(.]/}]}}function cy(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(o,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,l,i,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,s,l,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function uy(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const dy={class:"v-code-block--button-copy"},fy={class:"v-code-block--button-run"},hy={class:"v-code-block--code"},gy=["textContent"],py=["innerHTML"],by=Pn({__name:"CodeBlock",props:{browserWindow:{type:Boolean,required:!1,default:!1},code:{type:[Object,Array,String,Number],required:!0},codeBlockRadius:{type:String,required:!1,default:"0.5rem"},copyButton:{type:Boolean,required:!1,default:!0},copyIcons:{type:Boolean,required:!1,default:!0},copyTab:{type:Boolean,required:!1,default:!0},copyFailedText:{type:String,required:!1,default:"Copy failed!"},copyText:{type:String,required:!1,default:"Copy Code"},copySuccessText:{type:String,required:!1,default:"Copied!"},floatingTabs:{type:Boolean,required:!1,default:!0},height:{type:[String,Number],required:!1,default:"auto"},highlightjs:{type:Boolean,required:!1,default:!1},indent:{type:Number,required:!1,default:2},label:{type:String,required:!1,default:""},lang:{type:String,required:!1,default:"javascript"},maxHeight:{type:[String,Number],required:!1,default:"auto"},prismjs:{type:Boolean,required:!1,default:!1},prismPlugin:{type:Boolean,required:!1,default:!1},persistentCopyButton:{type:Boolean,required:!1,default:!1},runTab:{type:Boolean,required:!1,default:!1},runText:{type:String,required:!1,default:"Run"},tabGap:{type:String,required:!1,default:"0.25rem"},tabs:{type:Boolean,required:!1,default:!1},theme:{type:[String,Boolean],required:!1,default:"neon-bunny"}},emits:["run","update:copy-status"],setup(e,{emit:n}){const t=e,a="11.7.0",r="1.29.0",o="1.9.0",s=td(),i=ne("codeBlockGlobalOptions");let l,c;const d=ke(null),p=ke("copy"),f=ke(""),j=ke(!1),_=ke(!1),y=ke(!1),x=ke(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${a}/build/styles`),C=ke(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${r}/themes`),m=ke(`https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@${o}/themes`),g=ke(""),w=ke(""),k=ke(""),O=Me(()=>{let G="";return t.highlightjs&&(G=g.value),t.prismjs&&t.prismPlugin&&(G=d.value),G}),R=Me(()=>{let G=y.value?"v-code-block--mobile":"";return G+=t.prismjs?" v-code-block--prismjs":" v-code-block--highlightjs",G}),U=Me(()=>({width:k.value==="coy"&&_.value===!1?"100%":""})),z=Me(()=>({"v-code-block--code-copy-button":!0,"v-code-block--code-copy-button-mobile":y.value,["v-code-block--code-copy-button-persist"]:t.persistentCopyButton,[`v-code-block--code-copy-button-status-${p.value}`]:!0})),ee=Me(()=>({bottom:t.floatingTabs?"1px":"0",gap:D(t.tabGap)})),ce=Me(()=>{const G=t.highlightjs?"highlightjs":"prism",ue=k.value===""||k.value==="prism"?"default":k.value;return{"v-code-block--me-1":!0,[`v-code-block--tab-${G}-${ue}-icon`]:!0,[`v-code-block--button-copy-icon-status-${p.value}`]:!0,[`v-code-block--tab-${G}-${ue}-icon-status-${p.value}`]:!0}}),_e=Me(()=>y.value?"v-code-block--label-mobile":""),ve=Me(()=>{const G=t.codeBlockRadius;let ue=`${G} 0 ${G} ${G}`;(!t.tabs||!t.copyTab&&!t.runTab)&&(ue=G);const Le=k.value!=="funky"?"flex":"block";return{borderRadius:ue,height:D(t.height),maxHeight:D(t.maxHeight),display:Le}}),pe=Me(()=>{const G=t.highlightjs?"highlightjs":"prism",ue=k.value===""||k.value==="prism"?"default":k.value;return{[`v-code-block--tab-${ue}`]:!0,[`v-code-block--tab-${G}-${ue}`]:!0}}),we=Me(()=>({gap:D(t.tabGap)}));ut(t,()=>{t.code&&je(),(t.theme||t.prismjs||t.highlightjs)&&(M(),k.value=t.theme,re()),t.copyText&&(f.value=t.copyText),t.runText&&(w.value=t.runText)}),no(()=>{f.value=t.copyText,w.value=t.runText,M()}),Ni(()=>{k.value=(i==null?void 0:i.theme)||t.theme,re(),he(),je()});function M(){if(!t.prismjs&&!t.highlightjs)throw new Error("[vue3-code-block]: You must set either the prismjs or highlightjs props.");if(t.prismjs&&t.highlightjs)throw new Error("[vue3-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");t.highlightjs&&t.prismPlugin&&console.warn("[vue3-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue3-code-block component.")}function B(){if(t.lang==="json"){const G=t.code.toString();d.value=JSON.stringify(JSON.parse(G),null,t.indent);return}d.value=t.code}function D(G,ue="px"){if(!(G==null||G===""))return+G?`${Number(G)}${ue}`:String(G)}function J(){j.value||(j.value=!0,navigator.clipboard.writeText(d.value).then(()=>{f.value=t.copySuccessText,p.value="success",n("update:copy-status",p.value)},G=>{f.value=t.copyFailedText,p.value="failed",n("update:copy-status",p.value),console.error("Copy to clipboard failed: ",G)}),setTimeout(()=>{f.value=t.copyText,p.value="copy",n("update:copy-status",p.value),j.value=!1},3e3))}function re(){let G=null;const ue=t.highlightjs?"highlightjs":"prism",Le=document.getElementsByTagName("head")[0],ge=document.createElement("style"),We=document.body.getAttribute("data-v-code-block-theme");let Fe=`v-code-block--theme-${k.value}-${ue}`,h=!0,v=!0,S="",$="";if(Fe=ie(ue,Fe),We===k.value||We===Fe||typeof k.value=="boolean")return;switch(document.body.setAttribute("data-v-code-block-theme",Fe),ge.setAttribute("type","text/css"),ge.setAttribute("data-theme-id",Fe),ge.setAttribute("data-theme","v-code-block--theme-sheet"),k.value){case"neon-bunny":G=wl,v=!1,h=!1,ue==="highlightjs"&&(G=pg);break;case"neon-bunny-carrot":G=gg,v=!1,h=!1,ue==="highlightjs"&&(G=bg);break}if(!v&&!h){ze(),ge.appendChild(document.createTextNode(G)),Le.appendChild(ge);return}const N=ie(ue,k.value);switch(ue){case"highlightjs":S=`${N}.min.css`,$=`${x.value}/${S}`;break;case"prism":S=`${N}.css`,k.value==="default"&&(S="prism.css"),$=`${C.value}/prism-${S}`,k.value.includes("themes-")&&($=`${m.value}/${S}`);break;default:S="";break}_.value=!0,fetch($).then(T=>T.text()).then(T=>{ze(),ge.appendChild(document.createTextNode(T)),Le.appendChild(ge),_.value=!1}).catch(T=>{const q=t.highlightjs?"Highlight.js":"PrismJS";console.error(`${q} CDN Error:`,T)})}function he(){const ue=qm().device;y.value=ue.type==="mobile"}window.addEventListener("orientationchange",()=>{he()});function ie(G,ue,Le=!1){let ge=ue;return G==="prism"&&(ge=ge.replace("themes-","prism-"),ge=ge.replace("prism-prism-","prism-"),ge=ge.replace("theme-prism-","theme-"),Le&&(ge=ge.replace("prism-prism-",""),ge=ge.replace("prism-",""))),G==="highlightjs"&&(ge=ge.replace("base16-","base16/")),ge}function ze(){const G=document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');G.length>0&&G.forEach(ue=>{ue.remove()})}function je(){B(),t.highlightjs&&ys(()=>import("./core-32e692fb.js"),[]).then(G=>{l=G.default,l.registerLanguage("javascript",ly),l.registerLanguage("css",ay),l.registerLanguage("html",cy),l.registerLanguage("plain",uy),g.value=l.highlight(d.value,{language:t.lang}).value}).catch(G=>{console.error("Highlight.js import:",{err:G})}),t.prismjs&&ys(()=>Promise.resolve().then(()=>fp),void 0).then(G=>{c=G,g.value=c.highlight(d.value,c.languages[t.lang],t.lang)}).catch(G=>{console.error("PrismJS import:",{err:G})})}function Ne(){n("run")}return(G,ue)=>(X(),te("div",{class:Se(["v-code-block v-code-block--mb-5",b(R)])},[e.label||e.tabs||b(s).label||b(s).tabs?(X(),te("div",{key:0,class:"v-code-block--header",style:Tn(b(ee))},[u("div",{class:Se(["v-code-block--label v-code-block--pb-1",b(_e)])},[b(s).label?or(G.$slots,"label",{key:0},void 0,!0):(X(),te(Oe,{key:1},[le(xe(t.label),1)],64))],2),u("div",{class:"v-code-block--tabs",style:Tn(b(we))},[b(s).tabs?or(G.$slots,"tabs",{key:0},void 0,!0):(X(),te(Oe,{key:1},[e.copyTab&&e.tabs?(X(),te("div",{key:0,class:Se(["v-code-block--tab",b(pe)]),onClick:J},[u("div",dy,[e.copyIcons?(X(),Bt(vs,{key:0,class:Se(["v-code-block--button-copy-icon",b(ce)]),icon:p.value},null,8,["class","icon"])):nn("",!0),le(" "+xe(f.value),1)])],2)):nn("",!0),e.runTab&&e.tabs&&!y.value?(X(),te("div",{key:1,class:Se(["v-code-block--tab",b(pe)]),onClick:Ne},[u("div",fy,xe(w.value),1)],2)):nn("",!0)],64))],4)],4)):nn("",!0),u("div",hy,[u("div",{class:Se(["v-code-block--code-copy-button",b(z)]),onClick:J},[b(s).copyButton?or(G.$slots,"copyButton",{key:0},void 0,!0):(X(),te(Oe,{key:1},[e.copyButton?(X(),Bt(vs,{key:0,class:Se(["v-code-block--button-copy-icon",b(ce)]),icon:p.value},null,8,["class","icon"])):nn("",!0)],64))],2),u("pre",Tt(G.$attrs,{class:`language-${t.lang}`,style:b(ve)}),[le(""),e.prismPlugin?(X(),te("code",{key:0,class:Se(`language-${t.lang} ${e.browserWindow?"v-code-block--code-browser":""} ${e.highlightjs?"hljs":""}`),style:Tn(b(U)),textContent:xe(b(O))},null,14,gy)):(X(),te("code",{key:1,class:Se(`language-${t.lang} ${e.browserWindow?"v-code-block--code-browser":""} ${e.highlightjs?"hljs":""}`),style:Tn(b(U)),innerHTML:g.value},null,14,py)),le(`
			`)],16)])],2))}});const po=so(by,[["__scopeId","data-v-ff2ab413"]]);const my=(e,n)=>{const t={globalOptions:!0,...n};e.provide("codeBlockGlobalOptions",t),e.component("CodeBlock",po)};po.install=my;function js(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?js(Object(t),!0).forEach(function(a){Be(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):js(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ma(e){return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ma(e)}function yy(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ws(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function vy(e,n,t){return n&&ws(e.prototype,n),t&&ws(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bo(e,n){return jy(e)||ky(e,n)||Tl(e,n)||Ey()}function Yt(e){return _y(e)||wy(e)||Tl(e)||xy()}function _y(e){if(Array.isArray(e))return Ar(e)}function jy(e){if(Array.isArray(e))return e}function wy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ky(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],r=!0,o=!1,s,i;try{for(t=t.call(e);!(r=(s=t.next()).done)&&(a.push(s.value),!(n&&a.length===n));r=!0);}catch(l){o=!0,i=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(o)throw i}}return a}}function Tl(e,n){if(e){if(typeof e=="string")return Ar(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ar(e,n)}}function Ar(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function xy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ey(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ks=function(){},mo={},Cl={},Al=null,Ol={mark:ks,measure:ks};try{typeof window<"u"&&(mo=window),typeof document<"u"&&(Cl=document),typeof MutationObserver<"u"&&(Al=MutationObserver),typeof performance<"u"&&(Ol=performance)}catch{}var Sy=mo.navigator||{},xs=Sy.userAgent,Es=xs===void 0?"":xs,In=mo,Ae=Cl,Ss=Al,sa=Ol;In.document;var jn=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",Nl=~Es.indexOf("MSIE")||~Es.indexOf("Trident/"),ia,la,ca,ua,da,mn="___FONT_AWESOME___",Or=16,Ml="fa",$l="svg-inline--fa",Xn="data-fa-i2svg",Nr="data-fa-pseudo-element",Ty="data-fa-pseudo-element-pending",yo="data-prefix",vo="data-icon",Ts="fontawesome-i2svg",Cy="async",Ay=["HTML","HEAD","STYLE","SCRIPT"],Il=function(){try{return!0}catch{return!1}}(),Ce="classic",$e="sharp",_o=[Ce,$e];function Jt(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[Ce]}})}var Ht=Jt((ia={},Be(ia,Ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Be(ia,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ia)),qt=Jt((la={},Be(la,Ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Be(la,$e,{solid:"fass",regular:"fasr",light:"fasl"}),la)),Wt=Jt((ca={},Be(ca,Ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Be(ca,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ca)),Oy=Jt((ua={},Be(ua,Ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Be(ua,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ua)),Ny=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Rl="fa-layers-text",My=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$y=Jt((da={},Be(da,Ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Be(da,$e,{900:"fass",400:"fasr",300:"fasl"}),da)),Ll=[1,2,3,4,5,6,7,8,9,10],Iy=Ll.concat([11,12,13,14,15,16,17,18,19,20]),Ry=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(qt[Ce]).map(Gt.add.bind(Gt));Object.keys(qt[$e]).map(Gt.add.bind(Gt));var Ly=[].concat(_o,Yt(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gn.GROUP,Gn.SWAP_OPACITY,Gn.PRIMARY,Gn.SECONDARY]).concat(Ll.map(function(e){return"".concat(e,"x")})).concat(Iy.map(function(e){return"w-".concat(e)})),At=In.FontAwesomeConfig||{};function Py(e){var n=Ae.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function By(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ae&&typeof Ae.querySelector=="function"){var Fy=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fy.forEach(function(e){var n=bo(e,2),t=n[0],a=n[1],r=By(Py(t));r!=null&&(At[a]=r)})}var Pl={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ml,replacementClass:$l,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};At.familyPrefix&&(At.cssPrefix=At.familyPrefix);var bt=Y(Y({},Pl),At);bt.autoReplaceSvg||(bt.observeMutations=!1);var Q={};Object.keys(Pl).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(t){bt[e]=t,Ot.forEach(function(a){return a(Q)})},get:function(){return bt[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(n){bt.cssPrefix=n,Ot.forEach(function(t){return t(Q)})},get:function(){return bt.cssPrefix}});In.FontAwesomeConfig=Q;var Ot=[];function Dy(e){return Ot.push(e),function(){Ot.splice(Ot.indexOf(e),1)}}var kn=Or,fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zy(e){if(!(!e||!jn)){var n=Ae.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=Ae.head.childNodes,a=null,r=t.length-1;r>-1;r--){var o=t[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return Ae.head.insertBefore(n,a),e}}var Uy="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,n="";e-- >0;)n+=Uy[Math.random()*62|0];return n}function _t(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function jo(e){return e.classList?_t(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Bl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hy(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Bl(e[t]),'" ')},"").trim()}function Qa(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function wo(e){return e.size!==fn.size||e.x!==fn.x||e.y!==fn.y||e.rotate!==fn.rotate||e.flipX||e.flipY}function qy(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),i="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(i)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Wy(e){var n=e.transform,t=e.width,a=t===void 0?Or:t,r=e.height,o=r===void 0?Or:r,s=e.startCentered,i=s===void 0?!1:s,l="";return i&&Nl?l+="translate(".concat(n.x/kn-a/2,"em, ").concat(n.y/kn-o/2,"em) "):i?l+="translate(calc(-50% + ".concat(n.x/kn,"em), calc(-50% + ").concat(n.y/kn,"em)) "):l+="translate(".concat(n.x/kn,"em, ").concat(n.y/kn,"em) "),l+="scale(".concat(n.size/kn*(n.flipX?-1:1),", ").concat(n.size/kn*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Gy=`:root, :host {
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
}`;function Fl(){var e=Ml,n=$l,t=Q.cssPrefix,a=Q.replacementClass,r=Gy;if(t!==e||a!==n){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(i,".".concat(a))}return r}var Cs=!1;function dr(){Q.autoAddCss&&!Cs&&(zy(Fl()),Cs=!0)}var Vy={mixout:function(){return{dom:{css:Fl,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},yn=In||{};yn[mn]||(yn[mn]={});yn[mn].styles||(yn[mn].styles={});yn[mn].hooks||(yn[mn].hooks={});yn[mn].shims||(yn[mn].shims=[]);var rn=yn[mn],Dl=[],Ky=function e(){Ae.removeEventListener("DOMContentLoaded",e),$a=1,Dl.map(function(n){return n()})},$a=!1;jn&&($a=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),$a||Ae.addEventListener("DOMContentLoaded",Ky));function Yy(e){jn&&($a?setTimeout(e,0):Dl.push(e))}function Zt(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Bl(e):"<".concat(n," ").concat(Hy(a),">").concat(o.map(Zt).join(""),"</").concat(n,">")}function As(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Jy=function(n,t){return function(a,r,o,s){return n.call(t,a,r,o,s)}},fr=function(n,t,a,r){var o=Object.keys(n),s=o.length,i=r!==void 0?Jy(t,r):t,l,c,d;for(a===void 0?(l=1,d=n[o[0]]):(l=0,d=a);l<s;l++)c=o[l],d=i(d,n[c],c,n);return d};function Zy(e){for(var n=[],t=0,a=e.length;t<a;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<a){var o=e.charCodeAt(t++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}function Mr(e){var n=Zy(e);return n.length===1?n[0].toString(16):null}function Xy(e,n){var t=e.length,a=e.charCodeAt(n),r;return a>=55296&&a<=56319&&t>n+1&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Os(e){return Object.keys(e).reduce(function(n,t){var a=e[t],r=!!a.icon;return r?n[a.iconName]=a.icon:n[t]=a,n},{})}function $r(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,r=a===void 0?!1:a,o=Os(n);typeof rn.hooks.addPack=="function"&&!r?rn.hooks.addPack(e,Os(n)):rn.styles[e]=Y(Y({},rn.styles[e]||{}),o),e==="fas"&&$r("fa",n)}var fa,ha,ga,ot=rn.styles,Qy=rn.shims,ev=(fa={},Be(fa,Ce,Object.values(Wt[Ce])),Be(fa,$e,Object.values(Wt[$e])),fa),ko=null,zl={},Ul={},Hl={},ql={},Wl={},nv=(ha={},Be(ha,Ce,Object.keys(Ht[Ce])),Be(ha,$e,Object.keys(Ht[$e])),ha);function tv(e){return~Ly.indexOf(e)}function av(e,n){var t=n.split("-"),a=t[0],r=t.slice(1).join("-");return a===e&&r!==""&&!tv(r)?r:null}var Gl=function(){var n=function(o){return fr(ot,function(s,i,l){return s[l]=fr(i,o,{}),s},{})};zl=n(function(r,o,s){if(o[3]&&(r[o[3]]=s),o[2]){var i=o[2].filter(function(l){return typeof l=="number"});i.forEach(function(l){r[l.toString(16)]=s})}return r}),Ul=n(function(r,o,s){if(r[s]=s,o[2]){var i=o[2].filter(function(l){return typeof l=="string"});i.forEach(function(l){r[l]=s})}return r}),Wl=n(function(r,o,s){var i=o[2];return r[s]=s,i.forEach(function(l){r[l]=s}),r});var t="far"in ot||Q.autoFetchSvg,a=fr(Qy,function(r,o){var s=o[0],i=o[1],l=o[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(r.names[s]={prefix:i,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});Hl=a.names,ql=a.unicodes,ko=er(Q.styleDefault,{family:Q.familyDefault})};Dy(function(e){ko=er(e.styleDefault,{family:Q.familyDefault})});Gl();function xo(e,n){return(zl[e]||{})[n]}function rv(e,n){return(Ul[e]||{})[n]}function Vn(e,n){return(Wl[e]||{})[n]}function Vl(e){return Hl[e]||{prefix:null,iconName:null}}function ov(e){var n=ql[e],t=xo("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Rn(){return ko}var Eo=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?Ce:t,r=Ht[a][e],o=qt[a][e]||qt[a][r],s=e in rn.styles?e:null;return o||s||null}var Ns=(ga={},Be(ga,Ce,Object.keys(Wt[Ce])),Be(ga,$e,Object.keys(Wt[$e])),ga);function nr(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,o=(n={},Be(n,Ce,"".concat(Q.cssPrefix,"-").concat(Ce)),Be(n,$e,"".concat(Q.cssPrefix,"-").concat($e)),n),s=null,i=Ce;(e.includes(o[Ce])||e.some(function(c){return Ns[Ce].includes(c)}))&&(i=Ce),(e.includes(o[$e])||e.some(function(c){return Ns[$e].includes(c)}))&&(i=$e);var l=e.reduce(function(c,d){var p=av(Q.cssPrefix,d);if(ot[d]?(d=ev[i].includes(d)?Oy[i][d]:d,s=d,c.prefix=d):nv[i].indexOf(d)>-1?(s=d,c.prefix=er(d,{family:i})):p?c.iconName=p:d!==Q.replacementClass&&d!==o[Ce]&&d!==o[$e]&&c.rest.push(d),!r&&c.prefix&&c.iconName){var f=s==="fa"?Vl(c.iconName):{},j=Vn(c.prefix,c.iconName);f.prefix&&(s=null),c.iconName=f.iconName||j||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!ot.far&&ot.fas&&!Q.autoFetchSvg&&(c.prefix="fas")}return c},Eo());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===$e&&(ot.fass||Q.autoFetchSvg)&&(l.prefix="fass",l.iconName=Vn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Rn()||"fas"),l}var sv=function(){function e(){yy(this,e),this.definitions={}}return vy(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){t.definitions[i]=Y(Y({},t.definitions[i]||{}),s[i]),$r(i,s[i]);var l=Wt[Ce][i];l&&$r(l,s[i]),Gl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var s=r[o],i=s.prefix,l=s.iconName,c=s.icon,d=c[2];t[i]||(t[i]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(t[i][p]=c)}),t[i][l]=c}),t}}]),e}(),Ms=[],st={},dt={},iv=Object.keys(dt);function lv(e,n){var t=n.mixoutsTo;return Ms=e,st={},Object.keys(dt).forEach(function(a){iv.indexOf(a)===-1&&delete dt[a]}),Ms.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(t[s]=r[s]),Ma(r[s])==="object"&&Object.keys(r[s]).forEach(function(i){t[s]||(t[s]={}),t[s][i]=r[s][i]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(s){st[s]||(st[s]=[]),st[s].push(o[s])})}a.provides&&a.provides(dt)}),t}function Ir(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];var o=st[e]||[];return o.forEach(function(s){n=s.apply(null,[n].concat(a))}),n}function Qn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=st[e]||[];r.forEach(function(o){o.apply(null,t)})}function vn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return dt[e]?dt[e].apply(null,n):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Rn();if(n)return n=Vn(t,n)||n,As(Kl.definitions,t,n)||As(rn.styles,t,n)}var Kl=new sv,cv=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,Qn("noAuto")},uv={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jn?(Qn("beforeI2svg",n),vn("pseudoElements2svg",n),vn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,Yy(function(){fv({autoReplaceSvgRoot:t}),Qn("watch",n)})}},dv={icon:function(n){if(n===null)return null;if(Ma(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Vn(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=er(n[0]);return{prefix:a,iconName:Vn(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(Q.cssPrefix,"-"))>-1||n.match(Ny))){var r=nr(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Rn(),iconName:Vn(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=Rn();return{prefix:o,iconName:Vn(o,n)||n}}}},Qe={noAuto:cv,config:Q,dom:uv,parse:dv,library:Kl,findIconDefinition:Rr,toHtml:Zt},fv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?Ae:t;(Object.keys(rn.styles).length>0||Q.autoFetchSvg)&&jn&&Q.autoReplaceSvg&&Qe.dom.i2svg({node:a})};function tr(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Zt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(jn){var a=Ae.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function hv(e){var n=e.children,t=e.main,a=e.mask,r=e.attributes,o=e.styles,s=e.transform;if(wo(s)&&t.found&&!a.found){var i=t.width,l=t.height,c={x:i/l/2,y:.5};r.style=Qa(Y(Y({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function gv(e){var n=e.prefix,t=e.iconName,a=e.children,r=e.attributes,o=e.symbol,s=o===!0?"".concat(n,"-").concat(Q.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},r),{},{id:s}),children:a}]}]}function So(e){var n=e.icons,t=n.main,a=n.mask,r=e.prefix,o=e.iconName,s=e.transform,i=e.symbol,l=e.title,c=e.maskId,d=e.titleId,p=e.extra,f=e.watchable,j=f===void 0?!1:f,_=a.found?a:t,y=_.width,x=_.height,C=r==="fak",m=[Q.replacementClass,o?"".concat(Q.cssPrefix,"-").concat(o):""].filter(function(z){return p.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(p.classes).join(" "),g={children:[],attributes:Y(Y({},p.attributes),{},{"data-prefix":r,"data-icon":o,class:m,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(x)})},w=C&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/x*16*.0625,"em")}:{};j&&(g.attributes[Xn]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete g.attributes.title);var k=Y(Y({},g),{},{prefix:r,iconName:o,main:t,mask:a,maskId:c,transform:s,symbol:i,styles:Y(Y({},w),p.styles)}),O=a.found&&t.found?vn("generateAbstractMask",k)||{children:[],attributes:{}}:vn("generateAbstractIcon",k)||{children:[],attributes:{}},R=O.children,U=O.attributes;return k.children=R,k.attributes=U,i?gv(k):hv(k)}function $s(e){var n=e.content,t=e.width,a=e.height,r=e.transform,o=e.title,s=e.extra,i=e.watchable,l=i===void 0?!1:i,c=Y(Y(Y({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[Xn]="");var d=Y({},s.styles);wo(r)&&(d.transform=Wy({transform:r,startCentered:!0,width:t,height:a}),d["-webkit-transform"]=d.transform);var p=Qa(d);p.length>0&&(c.style=p);var f=[];return f.push({tag:"span",attributes:c,children:[n]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function pv(e){var n=e.content,t=e.title,a=e.extra,r=Y(Y(Y({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),o=Qa(a.styles);o.length>0&&(r.style=o);var s=[];return s.push({tag:"span",attributes:r,children:[n]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var hr=rn.styles;function Lr(e){var n=e[0],t=e[1],a=e.slice(4),r=bo(a,1),o=r[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Gn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Gn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:t,icon:s}}var bv={found:!1,width:512,height:512};function mv(e,n){!Il&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Pr(e,n){var t=n;return n==="fa"&&Q.styleDefault!==null&&(n=Rn()),new Promise(function(a,r){if(vn("missingIconAbstract"),t==="fa"){var o=Vl(e)||{};e=o.iconName||e,n=o.prefix||n}if(e&&n&&hr[n]&&hr[n][e]){var s=hr[n][e];return a(Lr(s))}mv(e,n),a(Y(Y({},bv),{},{icon:Q.showMissingIcons&&e?vn("missingIconAbstract")||{}:{}}))})}var Is=function(){},Br=Q.measurePerformance&&sa&&sa.mark&&sa.measure?sa:{mark:Is,measure:Is},kt='FA "6.4.0"',yv=function(n){return Br.mark("".concat(kt," ").concat(n," begins")),function(){return Yl(n)}},Yl=function(n){Br.mark("".concat(kt," ").concat(n," ends")),Br.measure("".concat(kt," ").concat(n),"".concat(kt," ").concat(n," begins"),"".concat(kt," ").concat(n," ends"))},To={begin:yv,end:Yl},va=function(){};function Rs(e){var n=e.getAttribute?e.getAttribute(Xn):null;return typeof n=="string"}function vv(e){var n=e.getAttribute?e.getAttribute(yo):null,t=e.getAttribute?e.getAttribute(vo):null;return n&&t}function _v(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function jv(){if(Q.autoReplaceSvg===!0)return _a.replace;var e=_a[Q.autoReplaceSvg];return e||_a.replace}function wv(e){return Ae.createElementNS("http://www.w3.org/2000/svg",e)}function kv(e){return Ae.createElement(e)}function Jl(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?wv:kv:t;if(typeof e=="string")return Ae.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){r.appendChild(Jl(s,{ceFn:a}))}),r}function xv(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var _a={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(Jl(r),t)}),t.getAttribute(Xn)===null&&Q.keepOriginalSource){var a=Ae.createComment(xv(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~jo(t).indexOf(Q.replacementClass))return _a.replace(n);var r=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(i,l){return l===Q.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var s=a.map(function(i){return Zt(i)}).join(`
`);t.setAttribute(Xn,""),t.innerHTML=s}};function Ls(e){e()}function Zl(e,n){var t=typeof n=="function"?n:va;if(e.length===0)t();else{var a=Ls;Q.mutateApproach===Cy&&(a=In.requestAnimationFrame||Ls),a(function(){var r=jv(),o=To.begin("mutate");e.map(r),o(),t()})}}var Co=!1;function Xl(){Co=!0}function Fr(){Co=!1}var Ia=null;function Ps(e){if(Ss&&Q.observeMutations){var n=e.treeCallback,t=n===void 0?va:n,a=e.nodeCallback,r=a===void 0?va:a,o=e.pseudoElementsCallback,s=o===void 0?va:o,i=e.observeMutationsRoot,l=i===void 0?Ae:i;Ia=new Ss(function(c){if(!Co){var d=Rn();_t(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Rs(p.addedNodes[0])&&(Q.searchPseudoElements&&s(p.target),t(p.target)),p.type==="attributes"&&p.target.parentNode&&Q.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&Rs(p.target)&&~Ry.indexOf(p.attributeName))if(p.attributeName==="class"&&vv(p.target)){var f=nr(jo(p.target)),j=f.prefix,_=f.iconName;p.target.setAttribute(yo,j||d),_&&p.target.setAttribute(vo,_)}else _v(p.target)&&r(p.target)})}}),jn&&Ia.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ev(){Ia&&Ia.disconnect()}function Sv(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,r){var o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),t}function Tv(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=nr(jo(e));return r.prefix||(r.prefix=Rn()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=rv(r.prefix,e.innerText)||xo(r.prefix,Mr(e.innerText))),!r.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Cv(e){var n=_t(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(t?n["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(a||Vt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Av(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bs(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Tv(e),a=t.iconName,r=t.prefix,o=t.rest,s=Cv(e),i=Ir("parseNodeAttributes",{},e),l=n.styleParser?Sv(e):[];return Y({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},i)}var Ov=rn.styles;function Ql(e){var n=Q.autoReplaceSvg==="nest"?Bs(e,{styleParser:!1}):Bs(e);return~n.extra.classes.indexOf(Rl)?vn("generateLayersText",e,n):vn("generateSvgReplacementMutation",e,n)}var Ln=new Set;_o.map(function(e){Ln.add("fa-".concat(e))});Object.keys(Ht[Ce]).map(Ln.add.bind(Ln));Object.keys(Ht[$e]).map(Ln.add.bind(Ln));Ln=Yt(Ln);function Fs(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jn)return Promise.resolve();var t=Ae.documentElement.classList,a=function(p){return t.add("".concat(Ts,"-").concat(p))},r=function(p){return t.remove("".concat(Ts,"-").concat(p))},o=Q.autoFetchSvg?Ln:_o.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Ov));o.includes("fa")||o.push("fa");var s=[".".concat(Rl,":not([").concat(Xn,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(Xn,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=_t(e.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();var l=To.begin("onTree"),c=i.reduce(function(d,p){try{var f=Ql(p);f&&d.push(f)}catch(j){Il||j.name==="MissingIcon"&&console.error(j)}return d},[]);return new Promise(function(d,p){Promise.all(c).then(function(f){Zl(f,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),d()})}).catch(function(f){l(),p(f)})})}function Nv(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ql(e).then(function(t){t&&Zl([t],n)})}function Mv(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Rr(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Rr(r||{})),e(a,Y(Y({},t),{},{mask:r}))}}var $v=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,r=a===void 0?fn:a,o=t.symbol,s=o===void 0?!1:o,i=t.mask,l=i===void 0?null:i,c=t.maskId,d=c===void 0?null:c,p=t.title,f=p===void 0?null:p,j=t.titleId,_=j===void 0?null:j,y=t.classes,x=y===void 0?[]:y,C=t.attributes,m=C===void 0?{}:C,g=t.styles,w=g===void 0?{}:g;if(n){var k=n.prefix,O=n.iconName,R=n.icon;return tr(Y({type:"icon"},n),function(){return Qn("beforeDOMElementCreation",{iconDefinition:n,params:t}),Q.autoA11y&&(f?m["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(_||Vt()):(m["aria-hidden"]="true",m.focusable="false")),So({icons:{main:Lr(R),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:O,transform:Y(Y({},fn),r),symbol:s,title:f,maskId:d,titleId:_,extra:{attributes:m,styles:w,classes:x}})})}},Iv={mixout:function(){return{icon:Mv($v)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Fs,t.nodeCallback=Nv,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,r=a===void 0?Ae:a,o=t.callback,s=o===void 0?function(){}:o;return Fs(r,s)},n.generateSvgReplacementMutation=function(t,a){var r=a.iconName,o=a.title,s=a.titleId,i=a.prefix,l=a.transform,c=a.symbol,d=a.mask,p=a.maskId,f=a.extra;return new Promise(function(j,_){Promise.all([Pr(r,i),d.iconName?Pr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var x=bo(y,2),C=x[0],m=x[1];j([t,So({icons:{main:C,mask:m},prefix:i,iconName:r,transform:l,symbol:c,maskId:p,title:o,titleId:s,extra:f,watchable:!0})])}).catch(_)})},n.generateAbstractIcon=function(t){var a=t.children,r=t.attributes,o=t.main,s=t.transform,i=t.styles,l=Qa(i);l.length>0&&(r.style=l);var c;return wo(s)&&(c=vn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},Rv={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return tr({type:"layer"},function(){Qn("beforeDOMElementCreation",{assembler:t,params:a});var s=[];return t(function(i){Array.isArray(i)?i.map(function(l){s=s.concat(l.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(Yt(o)).join(" ")},children:s}]})}}}},Lv={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,s=a.classes,i=s===void 0?[]:s,l=a.attributes,c=l===void 0?{}:l,d=a.styles,p=d===void 0?{}:d;return tr({type:"counter",content:t},function(){return Qn("beforeDOMElementCreation",{content:t,params:a}),pv({content:t.toString(),title:o,extra:{attributes:c,styles:p,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(Yt(i))}})})}}}},Pv={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?fn:r,s=a.title,i=s===void 0?null:s,l=a.classes,c=l===void 0?[]:l,d=a.attributes,p=d===void 0?{}:d,f=a.styles,j=f===void 0?{}:f;return tr({type:"text",content:t},function(){return Qn("beforeDOMElementCreation",{content:t,params:a}),$s({content:t,transform:Y(Y({},fn),o),title:i,extra:{attributes:p,styles:j,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(Yt(c))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var r=a.title,o=a.transform,s=a.extra,i=null,l=null;if(Nl){var c=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();i=d.width/c,l=d.height/c}return Q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,$s({content:t.innerHTML,width:i,height:l,transform:o,title:r,extra:s,watchable:!0})])}}},Bv=new RegExp('"',"ug"),Ds=[1105920,1112319];function Fv(e){var n=e.replace(Bv,""),t=Xy(n,0),a=t>=Ds[0]&&t<=Ds[1],r=n.length===2?n[0]===n[1]:!1;return{value:Mr(r?n[0]:n),isSecondary:a||r}}function zs(e,n){var t="".concat(Ty).concat(n.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(t)!==null)return a();var o=_t(e.children),s=o.filter(function(R){return R.getAttribute(Nr)===n})[0],i=In.getComputedStyle(e,n),l=i.getPropertyValue("font-family").match(My),c=i.getPropertyValue("font-weight"),d=i.getPropertyValue("content");if(s&&!l)return e.removeChild(s),a();if(l&&d!=="none"&&d!==""){var p=i.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Ce,j=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qt[f][l[2].toLowerCase()]:$y[f][c],_=Fv(p),y=_.value,x=_.isSecondary,C=l[0].startsWith("FontAwesome"),m=xo(j,y),g=m;if(C){var w=ov(y);w.iconName&&w.prefix&&(m=w.iconName,j=w.prefix)}if(m&&!x&&(!s||s.getAttribute(yo)!==j||s.getAttribute(vo)!==g)){e.setAttribute(t,g),s&&e.removeChild(s);var k=Av(),O=k.extra;O.attributes[Nr]=n,Pr(m,j).then(function(R){var U=So(Y(Y({},k),{},{icons:{main:R,mask:Eo()},prefix:j,iconName:g,extra:O,watchable:!0})),z=Ae.createElement("svg");n==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=U.map(function(ee){return Zt(ee)}).join(`
`),e.removeAttribute(t),a()}).catch(r)}else a()}else a()})}function Dv(e){return Promise.all([zs(e,"::before"),zs(e,"::after")])}function zv(e){return e.parentNode!==document.head&&!~Ay.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Us(e){if(jn)return new Promise(function(n,t){var a=_t(e.querySelectorAll("*")).filter(zv).map(Dv),r=To.begin("searchPseudoElements");Xl(),Promise.all(a).then(function(){r(),Fr(),n()}).catch(function(){r(),Fr(),t()})})}var Uv={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Us,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,r=a===void 0?Ae:a;Q.searchPseudoElements&&Us(r)}}},Hs=!1,Hv={mixout:function(){return{dom:{unwatch:function(){Xl(),Hs=!0}}}},hooks:function(){return{bootstrap:function(){Ps(Ir("mutationObserverCallbacks",{}))},noAuto:function(){Ev()},watch:function(t){var a=t.observeMutationsRoot;Hs?Fr():Ps(Ir("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},qs=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),s=o[0],i=o.slice(1).join("-");if(s&&i==="h")return a.flipX=!0,a;if(s&&i==="v")return a.flipY=!0,a;if(i=parseFloat(i),isNaN(i))return a;switch(s){case"grow":a.size=a.size+i;break;case"shrink":a.size=a.size-i;break;case"left":a.x=a.x-i;break;case"right":a.x=a.x+i;break;case"up":a.y=a.y-i;break;case"down":a.y=a.y+i;break;case"rotate":a.rotate=a.rotate+i;break}return a},t)},qv={mixout:function(){return{parse:{transform:function(t){return qs(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-transform");return r&&(t.transform=qs(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,r=t.transform,o=t.containerWidth,s=t.iconWidth,i={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(d)},f={transform:"translate(".concat(s/2*-1," -256)")},j={outer:i,inner:p,path:f};return{tag:"g",attributes:Y({},j.outer),children:[{tag:"g",attributes:Y({},j.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:Y(Y({},a.icon.attributes),j.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ws(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Wv(e){return e.tag==="g"?e.children:[e]}var Gv={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-mask"),o=r?nr(r.split(" ").map(function(s){return s.trim()})):Eo();return o.prefix||(o.prefix=Rn()),t.mask=o,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,r=t.attributes,o=t.main,s=t.mask,i=t.maskId,l=t.transform,c=o.width,d=o.icon,p=s.width,f=s.icon,j=qy({transform:l,containerWidth:p,iconWidth:c}),_={tag:"rect",attributes:Y(Y({},gr),{},{fill:"white"})},y=d.children?{children:d.children.map(Ws)}:{},x={tag:"g",attributes:Y({},j.inner),children:[Ws(Y({tag:d.tag,attributes:Y(Y({},d.attributes),j.path)},y))]},C={tag:"g",attributes:Y({},j.outer),children:[x]},m="mask-".concat(i||Vt()),g="clip-".concat(i||Vt()),w={tag:"mask",attributes:Y(Y({},gr),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,C]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:Wv(f)},w]};return a.push(k,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")")},gr)}),{children:a,attributes:r}}}},Vv={provides:function(n){var t=!1;In.matchMedia&&(t=In.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:Y(Y({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=Y(Y({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:Y(Y({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:Y(Y({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(i),a.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Y(Y({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Kv={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return t.symbol=o,t}}}},Yv=[Vy,Iv,Rv,Lv,Pv,Uv,Hv,qv,Gv,Vv,Kv];lv(Yv,{mixoutsTo:Qe});Qe.noAuto;var ec=Qe.config,Jv=Qe.library;Qe.dom;var Ra=Qe.parse;Qe.findIconDefinition;Qe.toHtml;var Zv=Qe.icon;Qe.layer;var Xv=Qe.text;Qe.counter;function Gs(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function tn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Gs(Object(t),!0).forEach(function(a){Ke(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gs(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function La(e){return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},La(e)}function Ke(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qv(e,n){if(e==null)return{};var t={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function e_(e,n){if(e==null)return{};var t=Qv(e,n),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function Dr(e){return n_(e)||t_(e)||a_(e)||r_()}function n_(e){if(Array.isArray(e))return zr(e)}function t_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function a_(e,n){if(e){if(typeof e=="string")return zr(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zr(e,n)}}function zr(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nc={exports:{}};(function(e){(function(n){var t=function(C,m,g){if(!c(m)||p(m)||f(m)||j(m)||l(m))return m;var w,k=0,O=0;if(d(m))for(w=[],O=m.length;k<O;k++)w.push(t(C,m[k],g));else{w={};for(var R in m)Object.prototype.hasOwnProperty.call(m,R)&&(w[C(R,g)]=t(C,m[R],g))}return w},a=function(C,m){m=m||{};var g=m.separator||"_",w=m.split||/(?=[A-Z])/;return C.split(w).join(g)},r=function(C){return _(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(m,g){return g?g.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},o=function(C){var m=r(C);return m.substr(0,1).toUpperCase()+m.substr(1)},s=function(C,m){return a(C,m).toLowerCase()},i=Object.prototype.toString,l=function(C){return typeof C=="function"},c=function(C){return C===Object(C)},d=function(C){return i.call(C)=="[object Array]"},p=function(C){return i.call(C)=="[object Date]"},f=function(C){return i.call(C)=="[object RegExp]"},j=function(C){return i.call(C)=="[object Boolean]"},_=function(C){return C=C-0,C===C},y=function(C,m){var g=m&&"process"in m?m.process:m;return typeof g!="function"?C:function(w,k){return g(w,C,k)}},x={camelize:r,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(C,m){return t(y(r,m),C)},decamelizeKeys:function(C,m){return t(y(s,m),C,m)},pascalizeKeys:function(C,m){return t(y(o,m),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=x:n.humps=x})(o_)})(nc);var s_=nc.exports,i_=["class","style"];function l_(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),r=s_.camelize(t.slice(0,a)),o=t.slice(a+1).trim();return n[r]=o,n},{})}function c_(e){return e.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function Ao(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return Ao(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=c_(d);break;case"style":l.style=l_(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});t.class;var o=t.style,s=o===void 0?{}:o,i=e_(t,i_);return Yi(e.tag,tn(tn(tn({},n),{},{class:r.class,style:tn(tn({},r.style),s)},r.attrs),i),a)}var tc=!1;try{tc=!0}catch{}function u_(){if(!tc&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nt(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Ke({},e,n):{}}function d_(e){var n,t=(n={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ke(n,"fa-".concat(e.size),e.size!==null),Ke(n,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ke(n,"fa-pull-".concat(e.pull),e.pull!==null),Ke(n,"fa-swap-opacity",e.swapOpacity),Ke(n,"fa-bounce",e.bounce),Ke(n,"fa-shake",e.shake),Ke(n,"fa-beat",e.beat),Ke(n,"fa-fade",e.fade),Ke(n,"fa-beat-fade",e.beatFade),Ke(n,"fa-flash",e.flash),Ke(n,"fa-spin-pulse",e.spinPulse),Ke(n,"fa-spin-reverse",e.spinReverse),n);return Object.keys(t).map(function(a){return t[a]?a:null}).filter(function(a){return a})}function Vs(e){if(e&&La(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ra.icon)return Ra.icon(e);if(e===null)return null;if(La(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var f_=Pn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var a=t.attrs,r=Me(function(){return Vs(n.icon)}),o=Me(function(){return Nt("classes",d_(n))}),s=Me(function(){return Nt("transform",typeof n.transform=="string"?Ra.transform(n.transform):n.transform)}),i=Me(function(){return Nt("mask",Vs(n.mask))}),l=Me(function(){return Zv(r.value,tn(tn(tn(tn({},o.value),s.value),i.value),{},{symbol:n.symbol,title:n.title}))});ut(l,function(d){if(!d)return u_("Could not find one or more icon(s)",r.value,i.value)},{immediate:!0});var c=Me(function(){return l.value?Ao(l.value.abstract[0],{},a):null});return function(){return c.value}}});Pn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(n,t){var a=t.slots,r=ec.familyPrefix,o=Me(function(){return["".concat(r,"-layers")].concat(Dr(n.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Yi("div",{class:o.value},a.default?a.default():[])}}});Pn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(n){return["bottom-left","bottom-right","top-left","top-right"].indexOf(n)>-1}}},setup:function(n,t){var a=t.attrs,r=ec.familyPrefix,o=Me(function(){return Nt("classes",[].concat(Dr(n.counter?["".concat(r,"-layers-counter")]:[]),Dr(n.position?["".concat(r,"-layers-").concat(n.position)]:[])))}),s=Me(function(){return Nt("transform",typeof n.transform=="string"?Ra.transform(n.transform):n.transform)}),i=Me(function(){var c=Xv(n.value.toString(),tn(tn({},s.value),o.value)),d=c.abstract;return n.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=Me(function(){return Ao(i.value,{},a)});return function(){return l.value}}});var h_={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},g_={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},p_={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},b_={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},m_={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},y_={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},v_={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"]};Jv.add({faCircleInfo:h_,faCopyright:b_,faGithub:y_,faHouse:g_,faMoon:m_,faNpm:v_,faSun:p_});Cd(Dm).use(po,{}).use(Nd()).component("fa-icon",f_).mount("#app");export{ur as H};
