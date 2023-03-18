(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function wr(e,t){const n=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)n[a[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Ct(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],r=Ae(a)?Us(a):Ct(a);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Ae(e))return e;if(ce(e))return e}}const Ls=/;(?![^(]*\))/g,Ds=/:([^]+)/,Hs=/\/\*.*?\*\//gs;function Us(e){const t={};return e.replace(Hs,"").split(Ls).forEach(n=>{if(n){const a=n.split(Ds);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function ve(e){let t="";if(Ae(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const a=ve(e[n]);a&&(t+=a+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const qs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ws=wr(qs);function ui(e){return!!e||e===""}function Vs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=wa(e[a],t[a]);return n}function wa(e,t){if(e===t)return!0;let n=ro(e),a=ro(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=xn(e),a=xn(t),n||a)return e===t;if(n=Q(e),a=Q(t),n||a)return n&&a?Vs(e,t):!1;if(n=ce(e),a=ce(t),n||a){if(!n||!a)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const s=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(s&&!l||!s&&l||!wa(e[i],t[i]))return!1}}return String(e)===String(t)}function fi(e,t){return e.findIndex(n=>wa(n,t))}const ke=e=>Ae(e)?e:e==null?"":Q(e)||ce(e)&&(e.toString===mi||!ne(e.toString))?JSON.stringify(e,di,2):String(e),di=(e,t)=>t&&t.__v_isRef?di(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,r])=>(n[`${a} =>`]=r,n),{})}:xa(t)?{[`Set(${t.size})`]:[...t.values()]}:ce(t)&&!Q(t)&&!bi(t)?String(t):t,ue={},Xt=[],Qe=()=>{},Ys=()=>!1,Ks=/^on[^a-z]/,ka=e=>Ks.test(e),kr=e=>e.startsWith("onUpdate:"),je=Object.assign,xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gs=Object.prototype.hasOwnProperty,re=(e,t)=>Gs.call(e,t),Q=Array.isArray,Zt=e=>Mn(e)==="[object Map]",xa=e=>Mn(e)==="[object Set]",ro=e=>Mn(e)==="[object Date]",ne=e=>typeof e=="function",Ae=e=>typeof e=="string",xn=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",pi=e=>ce(e)&&ne(e.then)&&ne(e.catch),mi=Object.prototype.toString,Mn=e=>mi.call(e),Js=e=>Mn(e).slice(8,-1),bi=e=>Mn(e)==="[object Object]",Cr=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xs=/-(\w)/g,lt=Ca(e=>e.replace(Xs,(t,n)=>n?n.toUpperCase():"")),Zs=/\B([A-Z])/g,ln=Ca(e=>e.replace(Zs,"-$1").toLowerCase()),Aa=Ca(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ba=Ca(e=>e?`on${Aa(e)}`:""),Cn=(e,t)=>!Object.is(e,t),na=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},la=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ka=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oo;const Qs=()=>oo||(oo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ke;class el{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this._active){let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function tl(e,t=Ke){t&&t.active&&t.effects.push(e)}function nl(){return Ke}const Ar=e=>{const t=new Set(e);return t.w=0,t.n=0,t},hi=e=>(e.w&St)>0,gi=e=>(e.n&St)>0,al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=St},rl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let a=0;a<t.length;a++){const r=t[a];hi(r)&&!gi(r)?r.delete(e):t[n++]=r,r.w&=~St,r.n&=~St}t.length=n}},Ga=new WeakMap;let pn=0,St=1;const Ja=30;let Ge;const Ht=Symbol(""),Xa=Symbol("");class $r{constructor(t,n=null,a){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tl(this,a)}run(){if(!this.active)return this.fn();let t=Ge,n=At;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ge,Ge=this,At=!0,St=1<<++pn,pn<=Ja?al(this):io(this),this.fn()}finally{pn<=Ja&&rl(this),St=1<<--pn,Ge=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(io(this),this.onStop&&this.onStop(),this.active=!1)}}function io(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let At=!0;const vi=[];function cn(){vi.push(At),At=!1}function un(){const e=vi.pop();At=e===void 0?!0:e}function De(e,t,n){if(At&&Ge){let a=Ga.get(e);a||Ga.set(e,a=new Map);let r=a.get(n);r||a.set(n,r=Ar()),yi(r)}}function yi(e,t){let n=!1;pn<=Ja?gi(e)||(e.n|=St,n=!hi(e)):n=!e.has(Ge),n&&(e.add(Ge),Ge.deps.push(e))}function dt(e,t,n,a,r,o){const i=Ga.get(e);if(!i)return;let s=[];if(t==="clear")s=[...i.values()];else if(n==="length"&&Q(e)){const l=Number(a);i.forEach((u,f)=>{(f==="length"||f>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(i.get(n)),t){case"add":Q(e)?Cr(n)&&s.push(i.get("length")):(s.push(i.get(Ht)),Zt(e)&&s.push(i.get(Xa)));break;case"delete":Q(e)||(s.push(i.get(Ht)),Zt(e)&&s.push(i.get(Xa)));break;case"set":Zt(e)&&s.push(i.get(Ht));break}if(s.length===1)s[0]&&Za(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Za(Ar(l))}}function Za(e,t){const n=Q(e)?e:[...e];for(const a of n)a.computed&&so(a);for(const a of n)a.computed||so(a)}function so(e,t){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ol=wr("__proto__,__v_isRef,__isVue"),_i=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xn)),il=Sr(),sl=Sr(!1,!0),ll=Sr(!0),lo=cl();function cl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const a=ie(this);for(let o=0,i=this.length;o<i;o++)De(a,"get",o+"");const r=a[t](...n);return r===-1||r===!1?a[t](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cn();const a=ie(this)[t].apply(this,n);return un(),a}}),e}function ul(e){const t=ie(this);return De(t,"has",e),t.hasOwnProperty(e)}function Sr(e=!1,t=!1){return function(a,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?$l:Ai:t?Ci:xi).get(a))return a;const i=Q(a);if(!e){if(i&&re(lo,r))return Reflect.get(lo,r,o);if(r==="hasOwnProperty")return ul}const s=Reflect.get(a,r,o);return(xn(r)?_i.has(r):ol(r))||(e||De(a,"get",r),t)?s:Ne(s)?i&&Cr(r)?s:s.value:ce(s)?e?$i(s):Or(s):s}}const fl=wi(),dl=wi(!0);function wi(e=!1){return function(n,a,r,o){let i=n[a];if(nn(i)&&Ne(i)&&!Ne(r))return!1;if(!e&&(!ca(r)&&!nn(r)&&(i=ie(i),r=ie(r)),!Q(n)&&Ne(i)&&!Ne(r)))return i.value=r,!0;const s=Q(n)&&Cr(a)?Number(a)<n.length:re(n,a),l=Reflect.set(n,a,r,o);return n===ie(o)&&(s?Cn(r,i)&&dt(n,"set",a,r):dt(n,"add",a,r)),l}}function pl(e,t){const n=re(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&n&&dt(e,"delete",t,void 0),a}function ml(e,t){const n=Reflect.has(e,t);return(!xn(t)||!_i.has(t))&&De(e,"has",t),n}function bl(e){return De(e,"iterate",Q(e)?"length":Ht),Reflect.ownKeys(e)}const ki={get:il,set:fl,deleteProperty:pl,has:ml,ownKeys:bl},hl={get:ll,set(e,t){return!0},deleteProperty(e,t){return!0}},gl=je({},ki,{get:sl,set:dl}),Tr=e=>e,$a=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,a=!1){e=e.__v_raw;const r=ie(e),o=ie(t);n||(t!==o&&De(r,"get",t),De(r,"get",o));const{has:i}=$a(r),s=a?Tr:n?Fr:An;if(i.call(r,t))return s(e.get(t));if(i.call(r,o))return s(e.get(o));e!==r&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,a=ie(n),r=ie(e);return t||(e!==r&&De(a,"has",e),De(a,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Hn(e,t=!1){return e=e.__v_raw,!t&&De(ie(e),"iterate",Ht),Reflect.get(e,"size",e)}function co(e){e=ie(e);const t=ie(this);return $a(t).has.call(t,e)||(t.add(e),dt(t,"add",e,e)),this}function uo(e,t){t=ie(t);const n=ie(this),{has:a,get:r}=$a(n);let o=a.call(n,e);o||(e=ie(e),o=a.call(n,e));const i=r.call(n,e);return n.set(e,t),o?Cn(t,i)&&dt(n,"set",e,t):dt(n,"add",e,t),this}function fo(e){const t=ie(this),{has:n,get:a}=$a(t);let r=n.call(t,e);r||(e=ie(e),r=n.call(t,e)),a&&a.call(t,e);const o=t.delete(e);return r&&dt(t,"delete",e,void 0),o}function po(){const e=ie(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Un(e,t){return function(a,r){const o=this,i=o.__v_raw,s=ie(i),l=t?Tr:e?Fr:An;return!e&&De(s,"iterate",Ht),i.forEach((u,f)=>a.call(r,l(u),l(f),o))}}function qn(e,t,n){return function(...a){const r=this.__v_raw,o=ie(r),i=Zt(o),s=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=r[e](...a),f=n?Tr:t?Fr:An;return!t&&De(o,"iterate",l?Xa:Ht),{next(){const{value:g,done:m}=u.next();return m?{value:g,done:m}:{value:s?[f(g[0]),f(g[1])]:f(g),done:m}},[Symbol.iterator](){return this}}}}function _t(e){return function(...t){return e==="delete"?!1:this}}function vl(){const e={get(o){return Ln(this,o)},get size(){return Hn(this)},has:Dn,add:co,set:uo,delete:fo,clear:po,forEach:Un(!1,!1)},t={get(o){return Ln(this,o,!1,!0)},get size(){return Hn(this)},has:Dn,add:co,set:uo,delete:fo,clear:po,forEach:Un(!1,!0)},n={get(o){return Ln(this,o,!0)},get size(){return Hn(this,!0)},has(o){return Dn.call(this,o,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Un(!0,!1)},a={get(o){return Ln(this,o,!0,!0)},get size(){return Hn(this,!0)},has(o){return Dn.call(this,o,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=qn(o,!1,!1),n[o]=qn(o,!0,!1),t[o]=qn(o,!1,!0),a[o]=qn(o,!0,!0)}),[e,n,t,a]}const[yl,_l,wl,kl]=vl();function Er(e,t){const n=t?e?kl:wl:e?_l:yl;return(a,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(re(n,r)&&r in a?n:a,r,o)}const xl={get:Er(!1,!1)},Cl={get:Er(!1,!0)},Al={get:Er(!0,!1)},xi=new WeakMap,Ci=new WeakMap,Ai=new WeakMap,$l=new WeakMap;function Sl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tl(e){return e.__v_skip||!Object.isExtensible(e)?0:Sl(Js(e))}function Or(e){return nn(e)?e:Pr(e,!1,ki,xl,xi)}function El(e){return Pr(e,!1,gl,Cl,Ci)}function $i(e){return Pr(e,!0,hl,Al,Ai)}function Pr(e,t,n,a,r){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Tl(e);if(i===0)return e;const s=new Proxy(e,i===2?a:n);return r.set(e,s),s}function Qt(e){return nn(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function nn(e){return!!(e&&e.__v_isReadonly)}function ca(e){return!!(e&&e.__v_isShallow)}function Si(e){return Qt(e)||nn(e)}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Ti(e){return la(e,"__v_skip",!0),e}const An=e=>ce(e)?Or(e):e,Fr=e=>ce(e)?$i(e):e;function Ei(e){At&&Ge&&(e=ie(e),yi(e.dep||(e.dep=Ar())))}function Oi(e,t){e=ie(e);const n=e.dep;n&&Za(n)}function Ne(e){return!!(e&&e.__v_isRef===!0)}function Ce(e){return Ol(e,!1)}function Ol(e,t){return Ne(e)?e:new Pl(e,t)}class Pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ie(t),this._value=n?t:An(t)}get value(){return Ei(this),this._value}set value(t){const n=this.__v_isShallow||ca(t)||nn(t);t=n?t:ie(t),Cn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:An(t),Oi(this))}}function T(e){return Ne(e)?e.value:e}const Fl={get:(e,t,n)=>T(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const r=e[t];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(e,t,n,a)}};function Pi(e){return Qt(e)?e:new Proxy(e,Fl)}var Fi;class Il{constructor(t,n,a,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Fi]=!1,this._dirty=!0,this.effect=new $r(t,()=>{this._dirty||(this._dirty=!0,Oi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const t=ie(this);return Ei(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Fi="__v_isReadonly";function Nl(e,t,n=!1){let a,r;const o=ne(e);return o?(a=e,r=Qe):(a=e.get,r=e.set),new Il(a,r,o||!r,n)}function $t(e,t,n,a){let r;try{r=a?e(...a):e()}catch(o){Sa(o,t,n)}return r}function et(e,t,n,a){if(ne(e)){const o=$t(e,t,n,a);return o&&pi(o)&&o.catch(i=>{Sa(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(et(e[o],t,n,a));return r}function Sa(e,t,n,a=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,s=n;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,i,s)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){$t(l,null,10,[e,i,s]);return}}Ml(e,n,r,a)}function Ml(e,t,n,a=!0){console.error(e)}let $n=!1,Qa=!1;const Ie=[];let it=0;const en=[];let ut=null,jt=0;const Ii=Promise.resolve();let Ir=null;function jl(e){const t=Ir||Ii;return e?t.then(this?e.bind(this):e):t}function Rl(e){let t=it+1,n=Ie.length;for(;t<n;){const a=t+n>>>1;Sn(Ie[a])<e?t=a+1:n=a}return t}function Nr(e){(!Ie.length||!Ie.includes(e,$n&&e.allowRecurse?it+1:it))&&(e.id==null?Ie.push(e):Ie.splice(Rl(e.id),0,e),Ni())}function Ni(){!$n&&!Qa&&(Qa=!0,Ir=Ii.then(ji))}function Bl(e){const t=Ie.indexOf(e);t>it&&Ie.splice(t,1)}function zl(e){Q(e)?en.push(...e):(!ut||!ut.includes(e,e.allowRecurse?jt+1:jt))&&en.push(e),Ni()}function mo(e,t=$n?it+1:0){for(;t<Ie.length;t++){const n=Ie[t];n&&n.pre&&(Ie.splice(t,1),t--,n())}}function Mi(e){if(en.length){const t=[...new Set(en)];if(en.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,a)=>Sn(n)-Sn(a)),jt=0;jt<ut.length;jt++)ut[jt]();ut=null,jt=0}}const Sn=e=>e.id==null?1/0:e.id,Ll=(e,t)=>{const n=Sn(e)-Sn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ji(e){Qa=!1,$n=!0,Ie.sort(Ll);const t=Qe;try{for(it=0;it<Ie.length;it++){const n=Ie[it];n&&n.active!==!1&&$t(n,null,14)}}finally{it=0,Ie.length=0,Mi(),$n=!1,Ir=null,(Ie.length||en.length)&&ji()}}function Dl(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||ue;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in a){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:g,trim:m}=a[f]||ue;m&&(r=n.map(w=>Ae(w)?w.trim():w)),g&&(r=n.map(Ka))}let s,l=a[s=Ba(t)]||a[s=Ba(lt(t))];!l&&o&&(l=a[s=Ba(ln(t))]),l&&et(l,e,6,r);const u=a[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,et(u,e,6,r)}}function Ri(e,t,n=!1){const a=t.emitsCache,r=a.get(e);if(r!==void 0)return r;const o=e.emits;let i={},s=!1;if(!ne(e)){const l=u=>{const f=Ri(u,t,!0);f&&(s=!0,je(i,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!s?(ce(e)&&a.set(e,null),null):(Q(o)?o.forEach(l=>i[l]=null):je(i,o),ce(e)&&a.set(e,i),i)}function Ta(e,t){return!e||!ka(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,ln(t))||re(e,t))}let Oe=null,Ea=null;function ua(e){const t=Oe;return Oe=e,Ea=e&&e.type.__scopeId||null,t}function Mr(e){Ea=e}function jr(){Ea=null}function ft(e,t=Oe,n){if(!t||e._n)return e;const a=(...r)=>{a._d&&xo(-1);const o=ua(t);let i;try{i=e(...r)}finally{ua(o),a._d&&xo(1)}return i};return a._n=!0,a._c=!0,a._d=!0,a}function za(e){const{type:t,vnode:n,proxy:a,withProxy:r,props:o,propsOptions:[i],slots:s,attrs:l,emit:u,render:f,renderCache:g,data:m,setupState:w,ctx:_,inheritAttrs:y}=e;let k,A;const b=ua(e);try{if(n.shapeFlag&4){const v=r||a;k=ot(f.call(v,v,g,o,w,m,_)),A=l}else{const v=t;k=ot(v.length>1?v(o,{attrs:l,slots:s,emit:u}):v(o,null)),A=t.props?l:Hl(l)}}catch(v){yn.length=0,Sa(v,e,1),k=j(Tt)}let p=k;if(A&&y!==!1){const v=Object.keys(A),{shapeFlag:C}=p;v.length&&C&7&&(i&&v.some(kr)&&(A=Ul(A,i)),p=rn(p,A))}return n.dirs&&(p=rn(p),p.dirs=p.dirs?p.dirs.concat(n.dirs):n.dirs),n.transition&&(p.transition=n.transition),k=p,ua(b),k}const Hl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ka(n))&&((t||(t={}))[n]=e[n]);return t},Ul=(e,t)=>{const n={};for(const a in e)(!kr(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function ql(e,t,n){const{props:a,children:r,component:o}=e,{props:i,children:s,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?bo(a,i,u):!!i;if(l&8){const f=t.dynamicProps;for(let g=0;g<f.length;g++){const m=f[g];if(i[m]!==a[m]&&!Ta(u,m))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:a===i?!1:a?i?bo(a,i,u):!0:!!i;return!1}function bo(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const o=a[r];if(t[o]!==e[o]&&!Ta(n,o))return!0}return!1}function Wl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vl=e=>e.__isSuspense;function Yl(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):zl(e)}function bn(e,t){if(we){let n=we.provides;const a=we.parent&&we.parent.provides;a===n&&(n=we.provides=Object.create(a)),n[e]=t}}function ae(e,t,n=!1){const a=we||Oe;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ne(t)?t.call(a.proxy):t}}const Wn={};function hn(e,t,n){return Bi(e,t,n)}function Bi(e,t,{immediate:n,deep:a,flush:r,onTrack:o,onTrigger:i}=ue){const s=nl()===(we==null?void 0:we.scope)?we:null;let l,u=!1,f=!1;if(Ne(e)?(l=()=>e.value,u=ca(e)):Qt(e)?(l=()=>e,a=!0):Q(e)?(f=!0,u=e.some(p=>Qt(p)||ca(p)),l=()=>e.map(p=>{if(Ne(p))return p.value;if(Qt(p))return zt(p);if(ne(p))return $t(p,s,2)})):ne(e)?t?l=()=>$t(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return g&&g(),et(e,s,3,[m])}:l=Qe,t&&a){const p=l;l=()=>zt(p())}let g,m=p=>{g=A.onStop=()=>{$t(p,s,4)}},w;if(En)if(m=Qe,t?n&&et(t,s,3,[l(),f?[]:void 0,m]):l(),r==="sync"){const p=Lc();w=p.__watcherHandles||(p.__watcherHandles=[])}else return Qe;let _=f?new Array(e.length).fill(Wn):Wn;const y=()=>{if(A.active)if(t){const p=A.run();(a||u||(f?p.some((v,C)=>Cn(v,_[C])):Cn(p,_)))&&(g&&g(),et(t,s,3,[p,_===Wn?void 0:f&&_[0]===Wn?[]:_,m]),_=p)}else A.run()};y.allowRecurse=!!t;let k;r==="sync"?k=y:r==="post"?k=()=>Le(y,s&&s.suspense):(y.pre=!0,s&&(y.id=s.uid),k=()=>Nr(y));const A=new $r(l,k);t?n?y():_=A.run():r==="post"?Le(A.run.bind(A),s&&s.suspense):A.run();const b=()=>{A.stop(),s&&s.scope&&xr(s.scope.effects,A)};return w&&w.push(b),b}function Kl(e,t,n){const a=this.proxy,r=Ae(e)?e.includes(".")?zi(a,e):()=>a[e]:e.bind(a,a);let o;ne(t)?o=t:(o=t.handler,n=t);const i=we;on(this);const s=Bi(r,o.bind(a),n);return i?on(i):Ut(),s}function zi(e,t){const n=t.split(".");return()=>{let a=e;for(let r=0;r<n.length&&a;r++)a=a[n[r]];return a}}function zt(e,t){if(!ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ne(e))zt(e.value,t);else if(Q(e))for(let n=0;n<e.length;n++)zt(e[n],t);else if(xa(e)||Zt(e))e.forEach(n=>{zt(n,t)});else if(bi(e))for(const n in e)zt(e[n],t);return e}function Vt(e){return ne(e)?{setup:e,name:e.name}:e}const gn=e=>!!e.type.__asyncLoader,Li=e=>e.type.__isKeepAlive;function Gl(e,t){Di(e,"a",t)}function Jl(e,t){Di(e,"da",t)}function Di(e,t,n=we){const a=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Oa(t,a,n),n){let r=n.parent;for(;r&&r.parent;)Li(r.parent.vnode)&&Xl(a,t,n,r),r=r.parent}}function Xl(e,t,n,a){const r=Oa(t,e,a,!0);qi(()=>{xr(a[t],r)},n)}function Oa(e,t,n=we,a=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;cn(),on(n);const s=et(t,n,e,i);return Ut(),un(),s});return a?r.unshift(o):r.push(o),o}}const ht=e=>(t,n=we)=>(!En||e==="sp")&&Oa(e,(...a)=>t(...a),n),Hi=ht("bm"),Ui=ht("m"),Zl=ht("bu"),Ql=ht("u"),ec=ht("bum"),qi=ht("um"),tc=ht("sp"),nc=ht("rtg"),ac=ht("rtc");function rc(e,t=we){Oa("ec",e,t)}function Ft(e,t){const n=Oe;if(n===null)return e;const a=Ia(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,s,l,u=ue]=t[o];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&zt(s),r.push({dir:i,instance:a,value:s,oldValue:void 0,arg:l,modifiers:u}))}return e}function It(e,t,n,a){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const s=r[i];o&&(s.oldValue=o[i].value);let l=s.dir[a];l&&(cn(),et(l,n,8,[e.el,s,e,t]),un())}}const Wi="components";function qe(e,t){return ic(Wi,e,!0,t)||e}const oc=Symbol();function ic(e,t,n=!0,a=!1){const r=Oe||we;if(r){const o=r.type;if(e===Wi){const s=Mc(o,!1);if(s&&(s===t||s===lt(t)||s===Aa(lt(t))))return o}const i=ho(r[e]||o[e],t)||ho(r.appContext[e],t);return!i&&a?o:i}}function ho(e,t){return e&&(e[t]||e[lt(t)]||e[Aa(lt(t))])}function an(e,t,n,a){let r;const o=n&&n[a];if(Q(e)||Ae(e)){r=new Array(e.length);for(let i=0,s=e.length;i<s;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(ce(e))if(e[Symbol.iterator])r=Array.from(e,(i,s)=>t(i,s,void 0,o&&o[s]));else{const i=Object.keys(e);r=new Array(i.length);for(let s=0,l=i.length;s<l;s++){const u=i[s];r[s]=t(e[u],u,s,o&&o[s])}}else r=[];return n&&(n[a]=r),r}function La(e,t,n={},a,r){if(Oe.isCE||Oe.parent&&gn(Oe.parent)&&Oe.parent.isCE)return t!=="default"&&(n.name=t),j("slot",n,a&&a());let o=e[t];o&&o._c&&(o._d=!1),J();const i=o&&Vi(o(n)),s=da(be,{key:n.key||i&&i.key||`_${t}`},i||(a?a():[]),i&&e._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),o&&o._c&&(o._d=!0),s}function Vi(e){return e.some(t=>pa(t)?!(t.type===Tt||t.type===be&&!Vi(t.children)):!0)?e:null}const er=e=>e?as(e)?Ia(e)||e.proxy:er(e.parent):null,vn=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>er(e.parent),$root:e=>er(e.root),$emit:e=>e.emit,$options:e=>Rr(e),$forceUpdate:e=>e.f||(e.f=()=>Nr(e.update)),$nextTick:e=>e.n||(e.n=jl.bind(e.proxy)),$watch:e=>Kl.bind(e)}),Da=(e,t)=>e!==ue&&!e.__isScriptSetup&&re(e,t),sc={get({_:e},t){const{ctx:n,setupState:a,data:r,props:o,accessCache:i,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const w=i[t];if(w!==void 0)switch(w){case 1:return a[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Da(a,t))return i[t]=1,a[t];if(r!==ue&&re(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&re(u,t))return i[t]=3,o[t];if(n!==ue&&re(n,t))return i[t]=4,n[t];tr&&(i[t]=0)}}const f=vn[t];let g,m;if(f)return t==="$attrs"&&De(e,"get",t),f(e);if((g=s.__cssModules)&&(g=g[t]))return g;if(n!==ue&&re(n,t))return i[t]=4,n[t];if(m=l.config.globalProperties,re(m,t))return m[t]},set({_:e},t,n){const{data:a,setupState:r,ctx:o}=e;return Da(r,t)?(r[t]=n,!0):a!==ue&&re(a,t)?(a[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:r,propsOptions:o}},i){let s;return!!n[i]||e!==ue&&re(e,i)||Da(t,i)||(s=o[0])&&re(s,i)||re(a,i)||re(vn,i)||re(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let tr=!0;function lc(e){const t=Rr(e),n=e.proxy,a=e.ctx;tr=!1,t.beforeCreate&&go(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:s,provide:l,inject:u,created:f,beforeMount:g,mounted:m,beforeUpdate:w,updated:_,activated:y,deactivated:k,beforeDestroy:A,beforeUnmount:b,destroyed:p,unmounted:v,render:C,renderTracked:E,renderTriggered:R,errorCaptured:X,serverPrefetch:z,expose:te,inheritAttrs:le,components:xe,directives:Te,filters:Re}=t;if(u&&cc(u,a,null,e.appContext.config.unwrapInjectedRef),i)for(const ee in i){const Y=i[ee];ne(Y)&&(a[ee]=Y.bind(n))}if(r){const ee=r.call(n,n);ce(ee)&&(e.data=Or(ee))}if(tr=!0,o)for(const ee in o){const Y=o[ee],pe=ne(Y)?Y.bind(n,n):ne(Y.get)?Y.get.bind(n,n):Qe,Ee=!ne(Y)&&ne(Y.set)?Y.set.bind(n):Qe,_e=ge({get:pe,set:Ee});Object.defineProperty(a,ee,{enumerable:!0,configurable:!0,get:()=>_e.value,set:oe=>_e.value=oe})}if(s)for(const ee in s)Yi(s[ee],a,n,ee);if(l){const ee=ne(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(Y=>{bn(Y,ee[Y])})}f&&go(f,e,"c");function K(ee,Y){Q(Y)?Y.forEach(pe=>ee(pe.bind(n))):Y&&ee(Y.bind(n))}if(K(Hi,g),K(Ui,m),K(Zl,w),K(Ql,_),K(Gl,y),K(Jl,k),K(rc,X),K(ac,E),K(nc,R),K(ec,b),K(qi,v),K(tc,z),Q(te))if(te.length){const ee=e.exposed||(e.exposed={});te.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:pe=>n[Y]=pe})})}else e.exposed||(e.exposed={});C&&e.render===Qe&&(e.render=C),le!=null&&(e.inheritAttrs=le),xe&&(e.components=xe),Te&&(e.directives=Te)}function cc(e,t,n=Qe,a=!1){Q(e)&&(e=nr(e));for(const r in e){const o=e[r];let i;ce(o)?"default"in o?i=ae(o.from||r,o.default,!0):i=ae(o.from||r):i=ae(o),Ne(i)&&a?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function go(e,t,n){et(Q(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yi(e,t,n,a){const r=a.includes(".")?zi(n,a):()=>n[a];if(Ae(e)){const o=t[e];ne(o)&&hn(r,o)}else if(ne(e))hn(r,e.bind(n));else if(ce(e))if(Q(e))e.forEach(o=>Yi(o,t,n,a));else{const o=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(o)&&hn(r,o,e)}}function Rr(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,s=o.get(t);let l;return s?l=s:!r.length&&!n&&!a?l=t:(l={},r.length&&r.forEach(u=>fa(l,u,i,!0)),fa(l,t,i)),ce(t)&&o.set(t,l),l}function fa(e,t,n,a=!1){const{mixins:r,extends:o}=t;o&&fa(e,o,n,!0),r&&r.forEach(i=>fa(e,i,n,!0));for(const i in t)if(!(a&&i==="expose")){const s=uc[i]||n&&n[i];e[i]=s?s(e[i],t[i]):t[i]}return e}const uc={data:vo,props:Mt,emits:Mt,methods:Mt,computed:Mt,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:Mt,directives:Mt,watch:dc,provide:vo,inject:fc};function vo(e,t){return t?e?function(){return je(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function fc(e,t){return Mt(nr(e),nr(t))}function nr(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function Mt(e,t){return e?je(je(Object.create(null),e),t):t}function dc(e,t){if(!e)return t;if(!t)return e;const n=je(Object.create(null),e);for(const a in t)n[a]=Me(e[a],t[a]);return n}function pc(e,t,n,a=!1){const r={},o={};la(o,Fa,1),e.propsDefaults=Object.create(null),Ki(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=a?r:El(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function mc(e,t,n,a){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,s=ie(r),[l]=e.propsOptions;let u=!1;if((a||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let g=0;g<f.length;g++){let m=f[g];if(Ta(e.emitsOptions,m))continue;const w=t[m];if(l)if(re(o,m))w!==o[m]&&(o[m]=w,u=!0);else{const _=lt(m);r[_]=ar(l,s,_,w,e,!1)}else w!==o[m]&&(o[m]=w,u=!0)}}}else{Ki(e,t,r,o)&&(u=!0);let f;for(const g in s)(!t||!re(t,g)&&((f=ln(g))===g||!re(t,f)))&&(l?n&&(n[g]!==void 0||n[f]!==void 0)&&(r[g]=ar(l,s,g,void 0,e,!0)):delete r[g]);if(o!==s)for(const g in o)(!t||!re(t,g))&&(delete o[g],u=!0)}u&&dt(e,"set","$attrs")}function Ki(e,t,n,a){const[r,o]=e.propsOptions;let i=!1,s;if(t)for(let l in t){if(ta(l))continue;const u=t[l];let f;r&&re(r,f=lt(l))?!o||!o.includes(f)?n[f]=u:(s||(s={}))[f]=u:Ta(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,i=!0)}if(o){const l=ie(n),u=s||ue;for(let f=0;f<o.length;f++){const g=o[f];n[g]=ar(r,l,g,u[g],e,!re(u,g))}}return i}function ar(e,t,n,a,r,o){const i=e[n];if(i!=null){const s=re(i,"default");if(s&&a===void 0){const l=i.default;if(i.type!==Function&&ne(l)){const{propsDefaults:u}=r;n in u?a=u[n]:(on(r),a=u[n]=l.call(null,t),Ut())}else a=l}i[0]&&(o&&!s?a=!1:i[1]&&(a===""||a===ln(n))&&(a=!0))}return a}function Gi(e,t,n=!1){const a=t.propsCache,r=a.get(e);if(r)return r;const o=e.props,i={},s=[];let l=!1;if(!ne(e)){const f=g=>{l=!0;const[m,w]=Gi(g,t,!0);je(i,m),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!l)return ce(e)&&a.set(e,Xt),Xt;if(Q(o))for(let f=0;f<o.length;f++){const g=lt(o[f]);yo(g)&&(i[g]=ue)}else if(o)for(const f in o){const g=lt(f);if(yo(g)){const m=o[f],w=i[g]=Q(m)||ne(m)?{type:m}:Object.assign({},m);if(w){const _=ko(Boolean,w.type),y=ko(String,w.type);w[0]=_>-1,w[1]=y<0||_<y,(_>-1||re(w,"default"))&&s.push(g)}}}const u=[i,s];return ce(e)&&a.set(e,u),u}function yo(e){return e[0]!=="$"}function _o(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function wo(e,t){return _o(e)===_o(t)}function ko(e,t){return Q(t)?t.findIndex(n=>wo(n,e)):ne(t)&&wo(t,e)?0:-1}const Ji=e=>e[0]==="_"||e==="$stable",Br=e=>Q(e)?e.map(ot):[ot(e)],bc=(e,t,n)=>{if(t._n)return t;const a=ft((...r)=>Br(t(...r)),n);return a._c=!1,a},Xi=(e,t,n)=>{const a=e._ctx;for(const r in e){if(Ji(r))continue;const o=e[r];if(ne(o))t[r]=bc(r,o,a);else if(o!=null){const i=Br(o);t[r]=()=>i}}},Zi=(e,t)=>{const n=Br(t);e.slots.default=()=>n},hc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ie(t),la(t,"_",n)):Xi(t,e.slots={})}else e.slots={},t&&Zi(e,t);la(e.slots,Fa,1)},gc=(e,t,n)=>{const{vnode:a,slots:r}=e;let o=!0,i=ue;if(a.shapeFlag&32){const s=t._;s?n&&s===1?o=!1:(je(r,t),!n&&s===1&&delete r._):(o=!t.$stable,Xi(t,r)),i=t}else t&&(Zi(e,t),i={default:1});if(o)for(const s in r)!Ji(s)&&!(s in i)&&delete r[s]};function Qi(){return{app:null,config:{isNativeTag:Ys,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vc=0;function yc(e,t){return function(a,r=null){ne(a)||(a=Object.assign({},a)),r!=null&&!ce(r)&&(r=null);const o=Qi(),i=new Set;let s=!1;const l=o.app={_uid:vc++,_component:a,_props:r,_container:null,_context:o,_instance:null,version:Dc,get config(){return o.config},set config(u){},use(u,...f){return i.has(u)||(u&&ne(u.install)?(i.add(u),u.install(l,...f)):ne(u)&&(i.add(u),u(l,...f))),l},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),l},component(u,f){return f?(o.components[u]=f,l):o.components[u]},directive(u,f){return f?(o.directives[u]=f,l):o.directives[u]},mount(u,f,g){if(!s){const m=j(a,r);return m.appContext=o,f&&t?t(m,u):e(m,u,g),s=!0,l._container=u,u.__vue_app__=l,Ia(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return o.provides[u]=f,l}};return l}}function rr(e,t,n,a,r=!1){if(Q(e)){e.forEach((m,w)=>rr(m,t&&(Q(t)?t[w]:t),n,a,r));return}if(gn(a)&&!r)return;const o=a.shapeFlag&4?Ia(a.component)||a.component.proxy:a.el,i=r?null:o,{i:s,r:l}=e,u=t&&t.r,f=s.refs===ue?s.refs={}:s.refs,g=s.setupState;if(u!=null&&u!==l&&(Ae(u)?(f[u]=null,re(g,u)&&(g[u]=null)):Ne(u)&&(u.value=null)),ne(l))$t(l,s,12,[i,f]);else{const m=Ae(l),w=Ne(l);if(m||w){const _=()=>{if(e.f){const y=m?re(g,l)?g[l]:f[l]:l.value;r?Q(y)&&xr(y,o):Q(y)?y.includes(o)||y.push(o):m?(f[l]=[o],re(g,l)&&(g[l]=f[l])):(l.value=[o],e.k&&(f[e.k]=l.value))}else m?(f[l]=i,re(g,l)&&(g[l]=i)):w&&(l.value=i,e.k&&(f[e.k]=i))};i?(_.id=-1,Le(_,n)):_()}}}const Le=Yl;function _c(e){return wc(e)}function wc(e,t){const n=Qs();n.__VUE__=!0;const{insert:a,remove:r,patchProp:o,createElement:i,createText:s,createComment:l,setText:u,setElementText:f,parentNode:g,nextSibling:m,setScopeId:w=Qe,insertStaticContent:_}=e,y=(d,h,x,S=null,$=null,P=null,M=!1,F=null,I=!!h.dynamicChildren)=>{if(d===h)return;d&&!dn(d,h)&&(S=Ue(d),oe(d,$,P,!0),d=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:O,ref:q,shapeFlag:L}=h;switch(O){case Pa:k(d,h,x,S);break;case Tt:A(d,h,x,S);break;case aa:d==null&&b(h,x,S,M);break;case be:xe(d,h,x,S,$,P,M,F,I);break;default:L&1?C(d,h,x,S,$,P,M,F,I):L&6?Te(d,h,x,S,$,P,M,F,I):(L&64||L&128)&&O.process(d,h,x,S,$,P,M,F,I,Ye)}q!=null&&$&&rr(q,d&&d.ref,P,h||d,!h)},k=(d,h,x,S)=>{if(d==null)a(h.el=s(h.children),x,S);else{const $=h.el=d.el;h.children!==d.children&&u($,h.children)}},A=(d,h,x,S)=>{d==null?a(h.el=l(h.children||""),x,S):h.el=d.el},b=(d,h,x,S)=>{[d.el,d.anchor]=_(d.children,h,x,S,d.el,d.anchor)},p=({el:d,anchor:h},x,S)=>{let $;for(;d&&d!==h;)$=m(d),a(d,x,S),d=$;a(h,x,S)},v=({el:d,anchor:h})=>{let x;for(;d&&d!==h;)x=m(d),r(d),d=x;r(h)},C=(d,h,x,S,$,P,M,F,I)=>{M=M||h.type==="svg",d==null?E(h,x,S,$,P,M,F,I):z(d,h,$,P,M,F,I)},E=(d,h,x,S,$,P,M,F)=>{let I,O;const{type:q,props:L,shapeFlag:V,transition:N,dirs:U}=d;if(I=d.el=i(d.type,P,L&&L.is,L),V&8?f(I,d.children):V&16&&X(d.children,I,null,S,$,P&&q!=="foreignObject",M,F),U&&It(d,null,S,"created"),R(I,d,d.scopeId,M,S),L){for(const G in L)G!=="value"&&!ta(G)&&o(I,G,null,L[G],P,d.children,S,$,Se);"value"in L&&o(I,"value",null,L.value),(O=L.onVnodeBeforeMount)&&rt(O,S,d)}U&&It(d,null,S,"beforeMount");const D=(!$||$&&!$.pendingBranch)&&N&&!N.persisted;D&&N.beforeEnter(I),a(I,h,x),((O=L&&L.onVnodeMounted)||D||U)&&Le(()=>{O&&rt(O,S,d),D&&N.enter(I),U&&It(d,null,S,"mounted")},$)},R=(d,h,x,S,$)=>{if(x&&w(d,x),S)for(let P=0;P<S.length;P++)w(d,S[P]);if($){let P=$.subTree;if(h===P){const M=$.vnode;R(d,M,M.scopeId,M.slotScopeIds,$.parent)}}},X=(d,h,x,S,$,P,M,F,I=0)=>{for(let O=I;O<d.length;O++){const q=d[O]=F?kt(d[O]):ot(d[O]);y(null,q,h,x,S,$,P,M,F)}},z=(d,h,x,S,$,P,M)=>{const F=h.el=d.el;let{patchFlag:I,dynamicChildren:O,dirs:q}=h;I|=d.patchFlag&16;const L=d.props||ue,V=h.props||ue;let N;x&&Nt(x,!1),(N=V.onVnodeBeforeUpdate)&&rt(N,x,h,d),q&&It(h,d,x,"beforeUpdate"),x&&Nt(x,!0);const U=$&&h.type!=="foreignObject";if(O?te(d.dynamicChildren,O,F,x,S,U,P):M||Y(d,h,F,null,x,S,U,P,!1),I>0){if(I&16)le(F,h,L,V,x,S,$);else if(I&2&&L.class!==V.class&&o(F,"class",null,V.class,$),I&4&&o(F,"style",L.style,V.style,$),I&8){const D=h.dynamicProps;for(let G=0;G<D.length;G++){const se=D[G],he=L[se],B=V[se];(B!==he||se==="value")&&o(F,se,he,B,$,d.children,x,S,Se)}}I&1&&d.children!==h.children&&f(F,h.children)}else!M&&O==null&&le(F,h,L,V,x,S,$);((N=V.onVnodeUpdated)||q)&&Le(()=>{N&&rt(N,x,h,d),q&&It(h,d,x,"updated")},S)},te=(d,h,x,S,$,P,M)=>{for(let F=0;F<h.length;F++){const I=d[F],O=h[F],q=I.el&&(I.type===be||!dn(I,O)||I.shapeFlag&70)?g(I.el):x;y(I,O,q,null,S,$,P,M,!0)}},le=(d,h,x,S,$,P,M)=>{if(x!==S){if(x!==ue)for(const F in x)!ta(F)&&!(F in S)&&o(d,F,x[F],null,M,h.children,$,P,Se);for(const F in S){if(ta(F))continue;const I=S[F],O=x[F];I!==O&&F!=="value"&&o(d,F,O,I,M,h.children,$,P,Se)}"value"in S&&o(d,"value",x.value,S.value)}},xe=(d,h,x,S,$,P,M,F,I)=>{const O=h.el=d?d.el:s(""),q=h.anchor=d?d.anchor:s("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:N}=h;N&&(F=F?F.concat(N):N),d==null?(a(O,x,S),a(q,x,S),X(h.children,x,q,$,P,M,F,I)):L>0&&L&64&&V&&d.dynamicChildren?(te(d.dynamicChildren,V,x,$,P,M,F),(h.key!=null||$&&h===$.subTree)&&es(d,h,!0)):Y(d,h,x,q,$,P,M,F,I)},Te=(d,h,x,S,$,P,M,F,I)=>{h.slotScopeIds=F,d==null?h.shapeFlag&512?$.ctx.activate(h,x,S,M,I):Re(h,x,S,$,P,M,I):vt(d,h,I)},Re=(d,h,x,S,$,P,M)=>{const F=d.component=Oc(d,S,$);if(Li(d)&&(F.ctx.renderer=Ye),Fc(F),F.asyncDep){if($&&$.registerDep(F,K),!d.el){const I=F.subTree=j(Tt);A(null,I,h,x)}return}K(F,d,h,x,$,P,M)},vt=(d,h,x)=>{const S=h.component=d.component;if(ql(d,h,x))if(S.asyncDep&&!S.asyncResolved){ee(S,h,x);return}else S.next=h,Bl(S.update),S.update();else h.el=d.el,S.vnode=h},K=(d,h,x,S,$,P,M)=>{const F=()=>{if(d.isMounted){let{next:q,bu:L,u:V,parent:N,vnode:U}=d,D=q,G;Nt(d,!1),q?(q.el=U.el,ee(d,q,M)):q=U,L&&na(L),(G=q.props&&q.props.onVnodeBeforeUpdate)&&rt(G,N,q,U),Nt(d,!0);const se=za(d),he=d.subTree;d.subTree=se,y(he,se,g(he.el),Ue(he),d,$,P),q.el=se.el,D===null&&Wl(d,se.el),V&&Le(V,$),(G=q.props&&q.props.onVnodeUpdated)&&Le(()=>rt(G,N,q,U),$)}else{let q;const{el:L,props:V}=h,{bm:N,m:U,parent:D}=d,G=gn(h);if(Nt(d,!1),N&&na(N),!G&&(q=V&&V.onVnodeBeforeMount)&&rt(q,D,h),Nt(d,!0),L&&nt){const se=()=>{d.subTree=za(d),nt(L,d.subTree,d,$,null)};G?h.type.__asyncLoader().then(()=>!d.isUnmounted&&se()):se()}else{const se=d.subTree=za(d);y(null,se,x,S,d,$,P),h.el=se.el}if(U&&Le(U,$),!G&&(q=V&&V.onVnodeMounted)){const se=h;Le(()=>rt(q,D,se),$)}(h.shapeFlag&256||D&&gn(D.vnode)&&D.vnode.shapeFlag&256)&&d.a&&Le(d.a,$),d.isMounted=!0,h=x=S=null}},I=d.effect=new $r(F,()=>Nr(O),d.scope),O=d.update=()=>I.run();O.id=d.uid,Nt(d,!0),O()},ee=(d,h,x)=>{h.component=d;const S=d.vnode.props;d.vnode=h,d.next=null,mc(d,h.props,S,x),gc(d,h.children,x),cn(),mo(),un()},Y=(d,h,x,S,$,P,M,F,I=!1)=>{const O=d&&d.children,q=d?d.shapeFlag:0,L=h.children,{patchFlag:V,shapeFlag:N}=h;if(V>0){if(V&128){Ee(O,L,x,S,$,P,M,F,I);return}else if(V&256){pe(O,L,x,S,$,P,M,F,I);return}}N&8?(q&16&&Se(O,$,P),L!==O&&f(x,L)):q&16?N&16?Ee(O,L,x,S,$,P,M,F,I):Se(O,$,P,!0):(q&8&&f(x,""),N&16&&X(L,x,S,$,P,M,F,I))},pe=(d,h,x,S,$,P,M,F,I)=>{d=d||Xt,h=h||Xt;const O=d.length,q=h.length,L=Math.min(O,q);let V;for(V=0;V<L;V++){const N=h[V]=I?kt(h[V]):ot(h[V]);y(d[V],N,x,null,$,P,M,F,I)}O>q?Se(d,$,P,!0,!1,L):X(h,x,S,$,P,M,F,I,L)},Ee=(d,h,x,S,$,P,M,F,I)=>{let O=0;const q=h.length;let L=d.length-1,V=q-1;for(;O<=L&&O<=V;){const N=d[O],U=h[O]=I?kt(h[O]):ot(h[O]);if(dn(N,U))y(N,U,x,null,$,P,M,F,I);else break;O++}for(;O<=L&&O<=V;){const N=d[L],U=h[V]=I?kt(h[V]):ot(h[V]);if(dn(N,U))y(N,U,x,null,$,P,M,F,I);else break;L--,V--}if(O>L){if(O<=V){const N=V+1,U=N<q?h[N].el:S;for(;O<=V;)y(null,h[O]=I?kt(h[O]):ot(h[O]),x,U,$,P,M,F,I),O++}}else if(O>V)for(;O<=L;)oe(d[O],$,P,!0),O++;else{const N=O,U=O,D=new Map;for(O=U;O<=V;O++){const Fe=h[O]=I?kt(h[O]):ot(h[O]);Fe.key!=null&&D.set(Fe.key,O)}let G,se=0;const he=V-U+1;let B=!1,yt=0;const Pe=new Array(he);for(O=0;O<he;O++)Pe[O]=0;for(O=N;O<=L;O++){const Fe=d[O];if(se>=he){oe(Fe,$,P,!0);continue}let at;if(Fe.key!=null)at=D.get(Fe.key);else for(G=U;G<=V;G++)if(Pe[G-U]===0&&dn(Fe,h[G])){at=G;break}at===void 0?oe(Fe,$,P,!0):(Pe[at-U]=O+1,at>=yt?yt=at:B=!0,y(Fe,h[at],x,null,$,P,M,F,I),se++)}const Yt=B?kc(Pe):Xt;for(G=Yt.length-1,O=he-1;O>=0;O--){const Fe=U+O,at=h[Fe],ao=Fe+1<q?h[Fe+1].el:S;Pe[O]===0?y(null,at,x,ao,$,P,M,F,I):B&&(G<0||O!==Yt[G]?_e(at,x,ao,2):G--)}}},_e=(d,h,x,S,$=null)=>{const{el:P,type:M,transition:F,children:I,shapeFlag:O}=d;if(O&6){_e(d.component.subTree,h,x,S);return}if(O&128){d.suspense.move(h,x,S);return}if(O&64){M.move(d,h,x,Ye);return}if(M===be){a(P,h,x);for(let L=0;L<I.length;L++)_e(I[L],h,x,S);a(d.anchor,h,x);return}if(M===aa){p(d,h,x);return}if(S!==2&&O&1&&F)if(S===0)F.beforeEnter(P),a(P,h,x),Le(()=>F.enter(P),$);else{const{leave:L,delayLeave:V,afterLeave:N}=F,U=()=>a(P,h,x),D=()=>{L(P,()=>{U(),N&&N()})};V?V(P,U,D):D()}else a(P,h,x)},oe=(d,h,x,S=!1,$=!1)=>{const{type:P,props:M,ref:F,children:I,dynamicChildren:O,shapeFlag:q,patchFlag:L,dirs:V}=d;if(F!=null&&rr(F,null,x,d,!0),q&256){h.ctx.deactivate(d);return}const N=q&1&&V,U=!gn(d);let D;if(U&&(D=M&&M.onVnodeBeforeUnmount)&&rt(D,h,d),q&6)Ve(d.component,x,S);else{if(q&128){d.suspense.unmount(x,S);return}N&&It(d,null,h,"beforeUnmount"),q&64?d.type.remove(d,h,x,$,Ye,S):O&&(P!==be||L>0&&L&64)?Se(O,h,x,!1,!0):(P===be&&L&384||!$&&q&16)&&Se(I,h,x),S&&Be(d)}(U&&(D=M&&M.onVnodeUnmounted)||N)&&Le(()=>{D&&rt(D,h,d),N&&It(d,null,h,"unmounted")},x)},Be=d=>{const{type:h,el:x,anchor:S,transition:$}=d;if(h===be){He(x,S);return}if(h===aa){v(d);return}const P=()=>{r(x),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(d.shapeFlag&1&&$&&!$.persisted){const{leave:M,delayLeave:F}=$,I=()=>M(x,P);F?F(d.el,P,I):I()}else P()},He=(d,h)=>{let x;for(;d!==h;)x=m(d),r(d),d=x;r(h)},Ve=(d,h,x)=>{const{bum:S,scope:$,update:P,subTree:M,um:F}=d;S&&na(S),$.stop(),P&&(P.active=!1,oe(M,d,h,x)),F&&Le(F,h),Le(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Se=(d,h,x,S=!1,$=!1,P=0)=>{for(let M=P;M<d.length;M++)oe(d[M],h,x,S,$)},Ue=d=>d.shapeFlag&6?Ue(d.component.subTree):d.shapeFlag&128?d.suspense.next():m(d.anchor||d.el),ct=(d,h,x)=>{d==null?h._vnode&&oe(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,x),mo(),Mi(),h._vnode=d},Ye={p:y,um:oe,m:_e,r:Be,mt:Re,mc:X,pc:Y,pbc:te,n:Ue,o:e};let tt,nt;return t&&([tt,nt]=t(Ye)),{render:ct,hydrate:tt,createApp:yc(ct,tt)}}function Nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function es(e,t,n=!1){const a=e.children,r=t.children;if(Q(a)&&Q(r))for(let o=0;o<a.length;o++){const i=a[o];let s=r[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[o]=kt(r[o]),s.el=i.el),n||es(i,s)),s.type===Pa&&(s.el=i.el)}}function kc(e){const t=e.slice(),n=[0];let a,r,o,i,s;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(r=n[n.length-1],e[r]<u){t[a]=r,n.push(a);continue}for(o=0,i=n.length-1;o<i;)s=o+i>>1,e[n[s]]<u?o=s+1:i=s;u<e[n[o]]&&(o>0&&(t[a]=n[o-1]),n[o]=a)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const xc=e=>e.__isTeleport,be=Symbol(void 0),Pa=Symbol(void 0),Tt=Symbol(void 0),aa=Symbol(void 0),yn=[];let Xe=null;function J(e=!1){yn.push(Xe=e?null:[])}function Cc(){yn.pop(),Xe=yn[yn.length-1]||null}let Tn=1;function xo(e){Tn+=e}function ts(e){return e.dynamicChildren=Tn>0?Xe||Xt:null,Cc(),Tn>0&&Xe&&Xe.push(e),e}function Z(e,t,n,a,r,o){return ts(c(e,t,n,a,r,o,!0))}function da(e,t,n,a,r){return ts(j(e,t,n,a,r,!0))}function pa(e){return e?e.__v_isVNode===!0:!1}function dn(e,t){return e.type===t.type&&e.key===t.key}const Fa="__vInternal",ns=({key:e})=>e??null,ra=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ae(e)||Ne(e)||ne(e)?{i:Oe,r:e,k:t,f:!!n}:e:null;function c(e,t=null,n=null,a=0,r=null,o=e===be?0:1,i=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ns(t),ref:t&&ra(t),scopeId:Ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Oe};return s?(zr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),Tn>0&&!i&&Xe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Xe.push(l),l}const j=Ac;function Ac(e,t=null,n=null,a=0,r=null,o=!1){if((!e||e===oc)&&(e=Tt),pa(e)){const s=rn(e,t,!0);return n&&zr(s,n),Tn>0&&!o&&Xe&&(s.shapeFlag&6?Xe[Xe.indexOf(e)]=s:Xe.push(s)),s.patchFlag|=-2,s}if(jc(e)&&(e=e.__vccOpts),t){t=$c(t);let{class:s,style:l}=t;s&&!Ae(s)&&(t.class=ve(s)),ce(l)&&(Si(l)&&!Q(l)&&(l=je({},l)),t.style=Ct(l))}const i=Ae(e)?1:Vl(e)?128:xc(e)?64:ce(e)?4:ne(e)?2:0;return c(e,t,n,a,r,i,o,!0)}function $c(e){return e?Si(e)||Fa in e?je({},e):e:null}function rn(e,t,n=!1){const{props:a,ref:r,patchFlag:o,children:i}=e,s=t?oa(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ns(s),ref:t&&t.ref?n&&r?Q(r)?r.concat(ra(t)):[r,ra(t)]:ra(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function me(e=" ",t=0){return j(Pa,null,e,t)}function Sc(e,t){const n=j(aa,null,e);return n.staticCount=t,n}function xt(e="",t=!1){return t?(J(),da(Tt,null,e)):j(Tt,null,e)}function ot(e){return e==null||typeof e=="boolean"?j(Tt):Q(e)?j(be,null,e.slice()):typeof e=="object"?kt(e):j(Pa,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rn(e)}function zr(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(a&65){const r=t.default;r&&(r._c&&(r._d=!1),zr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Fa in t)?t._ctx=Oe:r===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),a&64?(n=16,t=[me(t)]):n=8);e.children=t,e.shapeFlag|=n}function oa(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const r in a)if(r==="class")t.class!==a.class&&(t.class=ve([t.class,a.class]));else if(r==="style")t.style=Ct([t.style,a.style]);else if(ka(r)){const o=t[r],i=a[r];i&&o!==i&&!(Q(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=a[r])}return t}function rt(e,t,n,a=null){et(e,t,7,[n,a])}const Tc=Qi();let Ec=0;function Oc(e,t,n){const a=e.type,r=(t?t.appContext:e.appContext)||Tc,o={uid:Ec++,vnode:e,type:a,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new el(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gi(a,r),emitsOptions:Ri(a,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:a.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Dl.bind(null,o),e.ce&&e.ce(o),o}let we=null;const Pc=()=>we||Oe,on=e=>{we=e,e.scope.on()},Ut=()=>{we&&we.scope.off(),we=null};function as(e){return e.vnode.shapeFlag&4}let En=!1;function Fc(e,t=!1){En=t;const{props:n,children:a}=e.vnode,r=as(e);pc(e,n,r,t),hc(e,a);const o=r?Ic(e,t):void 0;return En=!1,o}function Ic(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ti(new Proxy(e.ctx,sc));const{setup:a}=n;if(a){const r=e.setupContext=a.length>1?os(e):null;on(e),cn();const o=$t(a,e,0,[e.props,r]);if(un(),Ut(),pi(o)){if(o.then(Ut,Ut),t)return o.then(i=>{Co(e,i,t)}).catch(i=>{Sa(i,e,0)});e.asyncDep=o}else Co(e,o,t)}else rs(e,t)}function Co(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Pi(t)),rs(e,n)}let Ao;function rs(e,t,n){const a=e.type;if(!e.render){if(!t&&Ao&&!a.render){const r=a.template||Rr(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:l}=a,u=je(je({isCustomElement:o,delimiters:s},i),l);a.render=Ao(r,u)}}e.render=a.render||Qe}on(e),cn(),lc(e),un(),Ut()}function Nc(e){return new Proxy(e.attrs,{get(t,n){return De(e,"get","$attrs"),t[n]}})}function os(e){const t=a=>{e.exposed=a||{}};let n;return{get attrs(){return n||(n=Nc(e))},slots:e.slots,emit:e.emit,expose:t}}function Ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pi(Ti(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)},has(t,n){return n in t||n in vn}}))}function Mc(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function jc(e){return ne(e)&&"__vccOpts"in e}const ge=(e,t)=>Nl(e,t,En);function Rc(){return Bc().slots}function Bc(){const e=Pc();return e.setupContext||(e.setupContext=os(e))}function is(e,t,n){const a=arguments.length;return a===2?ce(t)&&!Q(t)?pa(t)?j(e,null,[t]):j(e,t):j(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&pa(n)&&(n=[n]),j(e,t,n))}const zc=Symbol(""),Lc=()=>ae(zc),Dc="3.2.47",Hc="http://www.w3.org/2000/svg",Rt=typeof document<"u"?document:null,$o=Rt&&Rt.createElement("template"),Uc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const r=t?Rt.createElementNS(Hc,e):Rt.createElement(e,n?{is:n}:void 0);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{$o.innerHTML=a?`<svg>${e}</svg>`:e;const s=$o.content;if(a){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function qc(e,t,n){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wc(e,t,n){const a=e.style,r=Ae(n);if(n&&!r){if(t&&!Ae(t))for(const o in t)n[o]==null&&or(a,o,"");for(const o in n)or(a,o,n[o])}else{const o=a.display;r?t!==n&&(a.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=o)}}const So=/\s*!important$/;function or(e,t,n){if(Q(n))n.forEach(a=>or(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Vc(e,t);So.test(n)?e.setProperty(ln(a),n.replace(So,""),"important"):e[a]=n}}const To=["Webkit","Moz","ms"],Ha={};function Vc(e,t){const n=Ha[t];if(n)return n;let a=lt(t);if(a!=="filter"&&a in e)return Ha[t]=a;a=Aa(a);for(let r=0;r<To.length;r++){const o=To[r]+a;if(o in e)return Ha[t]=o}return t}const Eo="http://www.w3.org/1999/xlink";function Yc(e,t,n,a,r){if(a&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Eo,t.slice(6,t.length)):e.setAttributeNS(Eo,t,n);else{const o=Ws(t);n==null||o&&!ui(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Kc(e,t,n,a,r,o,i){if(t==="innerHTML"||t==="textContent"){a&&i(a,r,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ui(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Bt(e,t,n,a){e.addEventListener(t,n,a)}function Gc(e,t,n,a){e.removeEventListener(t,n,a)}function Jc(e,t,n,a,r=null){const o=e._vei||(e._vei={}),i=o[t];if(a&&i)i.value=a;else{const[s,l]=Xc(t);if(a){const u=o[t]=eu(a,r);Bt(e,s,u,l)}else i&&(Gc(e,s,i,l),o[t]=void 0)}}const Oo=/(?:Once|Passive|Capture)$/;function Xc(e){let t;if(Oo.test(e)){t={};let a;for(;a=e.match(Oo);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ln(e.slice(2)),t]}let Ua=0;const Zc=Promise.resolve(),Qc=()=>Ua||(Zc.then(()=>Ua=0),Ua=Date.now());function eu(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;et(tu(a,n.value),t,5,[a])};return n.value=e,n.attached=Qc(),n}function tu(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>r=>!r._stopped&&a&&a(r))}else return t}const Po=/^on[a-z]/,nu=(e,t,n,a,r=!1,o,i,s,l)=>{t==="class"?qc(e,a,r):t==="style"?Wc(e,n,a):ka(t)?kr(t)||Jc(e,t,n,a,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):au(e,t,a,r))?Kc(e,t,a,o,i,s,l):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Yc(e,t,a,r))};function au(e,t,n,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&Po.test(t)&&ne(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Po.test(t)&&Ae(n)?!1:t in e}const ma=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>na(t,n):t};function ru(e){e.target.composing=!0}function Fo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Kt={created(e,{modifiers:{lazy:t,trim:n,number:a}},r){e._assign=ma(r);const o=a||r.props&&r.props.type==="number";Bt(e,t?"change":"input",i=>{if(i.target.composing)return;let s=e.value;n&&(s=s.trim()),o&&(s=Ka(s)),e._assign(s)}),n&&Bt(e,"change",()=>{e.value=e.value.trim()}),t||(Bt(e,"compositionstart",ru),Bt(e,"compositionend",Fo),Bt(e,"change",Fo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:a,number:r}},o){if(e._assign=ma(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||a&&e.value.trim()===t||(r||e.type==="number")&&Ka(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},ou={deep:!0,created(e,t,n){e._assign=ma(n),Bt(e,"change",()=>{const a=e._modelValue,r=iu(e),o=e.checked,i=e._assign;if(Q(a)){const s=fi(a,r),l=s!==-1;if(o&&!l)i(a.concat(r));else if(!o&&l){const u=[...a];u.splice(s,1),i(u)}}else if(xa(a)){const s=new Set(a);o?s.add(r):s.delete(r),i(s)}else i(ss(e,o))})},mounted:Io,beforeUpdate(e,t,n){e._assign=ma(n),Io(e,t,n)}};function Io(e,{value:t,oldValue:n},a){e._modelValue=t,Q(t)?e.checked=fi(t,a.props.value)>-1:xa(t)?e.checked=t.has(a.props.value):t!==n&&(e.checked=wa(t,ss(e,!0)))}function iu(e){return"_value"in e?e._value:e.value}function ss(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const su=je({patchProp:nu},Uc);let No;function lu(){return No||(No=_c(su))}const cu=(...e)=>{const t=lu().createApp(...e),{mount:n}=t;return t.mount=a=>{const r=uu(a);if(!r)return;const o=t._component;!ne(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function uu(e){return Ae(e)?document.querySelector(e):e}const fu="vue3-code-block",du="1.0.14-beta.0",pu="/vue3-code-block/assets/vue-5532db34.svg",mu={class:"row mb-5"},bu=c("h2",null,"Change Log",-1),hu=[bu],gu={class:"col-12"},vu=["href"],yu={__name:"ChangeLogSection",setup(e){const t=ae("styleData"),n=ae("links");return(a,r)=>(J(),Z("div",mu,[c("div",{class:ve(T(t).h2ColClass)},hu,2),c("div",gu,[c("a",{href:T(n).changeLog,target:"_blank"},"CHANGELOG.md",8,vu)])]))}};const jn=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n},Lr=e=>(Mr("data-v-2840fb55"),e=e(),jr(),e),_u={class:"row mb-5"},wu=Lr(()=>c("h2",null,"CSS Variables",-1)),ku=[wu],xu=Lr(()=>c("div",{class:"col-12 mb-3"},[c("p",null,[me(" All CSS variables are defined in the "),c("code",null,"src/plugin/styles/cssVariables.css"),me(" file. Colors are using "),c("code",null,"hsl"),me(" values. ")])],-1)),Cu={class:"col-12 mb-3"},Au={class:"table-responsive"},$u={class:"table table-striped"},Su=Lr(()=>c("thead",null,[c("tr",null,[c("th",{width:"auto"},"Name"),c("th",null,"Value")])],-1)),Tu={key:0,class:"tbody-header-row"},Eu={colspan:"2"},Ou={key:0,colspan:"2",valign:"top"},Pu={class:"td-nowrap",valign:"top"},Fu={key:0},Iu={key:1,valign:"top"},Nu={key:2,valign:"top"},Mu={__name:"CssVariablesSection",setup(e){const t=ae("styleData"),n=[{name:"Typography",header:!0,items:[{name:"--v-cb-font",value:`system-ui, -apple-system, 'Segoe UI', 'Roboto',
		'Helvetica Neue', 'Arial', 'Noto Sans', 'Liberation Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`},{name:"--v-cb-label-font",code:"var(--v-cb-font)"},{name:"--v-cb-tab-font",code:"var(--v-cb-font)"}]},{name:"Neon Bunny Theme Colors",header:!0,items:[{name:"neon-bunny",subHeader:!0},{name:"--v-cb-tab-neon-bunny",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-neon-bunny-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-neon-bunny-icon",hsl:"207, 100%, 52%"},{name:"--v-cb-tab-neon-bunny-icon-success",hsl:"119, 100%, 51%"},{name:"--v-cb-tab-neon-bunny-icon-failed",hsl:"3, 100%, 58%"},{name:"neon-bunny-carrot",subHeader:!0},{name:"--v-cb-tab-neon-bunny-carrot",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-neon-bunny-carrot-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-neon-bunny-carrot-icon",hsl:"292, 100%, 50%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-success",hsl:"119, 100%, 51%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-failed",hsl:"3, 100%, 58%"}]},{name:"Prism Theme Colors",header:!0,items:[{name:"default",subHeader:!0},{name:"--v-cb-tab-prism-default-bkg",hsl:"24, 20%, 95%"},{name:"--v-cb-tab-prism-default-text",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-prism-default-icon",hsl:"198, 100%, 33%"},{name:"--v-cb-tab-prism-default-icon-success",hsl:"80, 100%, 30%"},{name:"--v-cb-tab-prism-default-icon-failed",hsl:"348, 68%, 58%"},{name:"coy",subHeader:!0},{name:"--v-cb-tab-prism-coy-bkg",hsl:"205, 59%, 50%"},{name:"--v-cb-tab-prism-coy-text",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-prism-coy-icon",hsl:"195, 76%, 41%"},{name:"--v-cb-tab-prism-coy-icon-success",hsl:"80, 100%, 30%"},{name:"--v-cb-tab-prism-coy-icon-failed",hsl:"0, 64%, 48%"},{name:"dark",subHeader:!0},{name:"--v-cb-tab-prism-dark-bkg",hsl:"30, 20%, 25%"},{name:"--v-cb-tab-prism-dark-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-prism-dark-border",hsl:"30, 20%, 40%"},{name:"--v-cb-tab-prism-dark-icon",hsl:"40, 90%, 60%"},{name:"--v-cb-tab-prism-dark-icon-success",hsl:"75, 70%, 60%"},{name:"--v-cb-tab-prism-dark-icon-failed",hsl:"0, 100%, 50%"},{name:"funky",subHeader:!0},{name:"--v-cb-tab-prism-funky-bkg",hsl:"0, 0%, 80%"},{name:"--v-cb-tab-prism-funky-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-prism-funky-dark",hsl:"0, 0%, 0%"},{name:"--v-cb-tab-prism-funky-icon",hsl:"328, 100%, 54%"},{name:"--v-cb-tab-prism-funky-icon-success",hsl:"80, 61%, 50%"},{name:"--v-cb-tab-prism-funky-icon-failed",hsl:"0, 100%, 50%"},{name:"okaidia",subHeader:!0},{name:"--v-cb-tab-prism-okaidia-bkg",hsl:"70, 8%, 15%"},{name:"--v-cb-tab-prism-okaidia-text",hsl:"0, 0%, 100%"},{name:"--v-cb-tab-prism-okaidia-icon",hsl:"190, 81%, 67%"},{name:"--v-cb-tab-prism-okaidia-icon-success",hsl:"80, 76%, 53%"},{name:"--v-cb-tab-prism-okaidia-icon-failed",hsl:"338, 95%, 56%"},{name:"solarizedlight",subHeader:!0},{name:"--v-cb-tab-prism-solarizedlight-bkg",hsl:"44, 87%, 94%"},{name:"--v-cb-tab-prism-solarizedlight-text",hsl:"196, 13%, 45%"},{name:"--v-cb-tab-prism-solarizedlight-icon",hsl:"175, 59%, 40%"},{name:"--v-cb-tab-prism-solarizedlight-icon-success",hsl:"68, 100%, 30%"},{name:"--v-cb-tab-prism-solarizedlight-icon-failed",hsl:"18, 80%, 44%"},{name:"tomorrow",subHeader:!0},{name:"--v-cb-tab-prism-tomorrow-bkg",hsl:"0, 0%, 18%"},{name:"--v-cb-tab-prism-tomorrow-text",hsl:"0, 0%, 80%"},{name:"--v-cb-tab-prism-tomorrow-icon",hsl:"299, 34%, 70%"},{name:"--v-cb-tab-prism-tomorrow-icon-success",hsl:"143, 39%, 64%"},{name:"--v-cb-tab-prism-tomorrow-icon-failed",hsl:"358, 65%, 68%"},{name:"twilight",subHeader:!0},{name:"--v-cb-tab-prism-twilight-bkg",hsl:"0, 0%, 8%"},{name:"--v-cb-tab-prism-twilight-text",hsl:"0, 0%, 80%"},{name:"--v-cb-tab-prism-twilight-border",hsl:"0, 0%, 33%"},{name:"--v-cb-tab-prism-twilight-icon",hsl:"53, 89%, 79%"},{name:"--v-cb-tab-prism-twilight-icon-success",hsl:"76, 21%, 52%"},{name:"--v-cb-tab-prism-twilight-icon-failed",hsl:"14, 58%, 55%"}]}];return(a,r)=>(J(),Z("div",_u,[c("div",{class:ve(T(t).h2ColClass)},ku,2),xu,c("div",Cu,[c("div",Au,[c("table",$u,[Su,(J(),Z(be,null,an(n,o=>c("tbody",{key:o.name},[o.header?(J(),Z("tr",Tu,[c("th",Eu,ke(o.name),1)])):xt("",!0),(J(!0),Z(be,null,an(o.items,i=>(J(),Z("tr",{key:i},[i.subHeader?(J(),Z("td",Ou,[c("strong",null,[c("em",null,ke(i.name),1)])])):(J(),Z(be,{key:1},[c("td",Pu,ke(i.name),1),i.hsl?(J(),Z("td",Fu,[i.hsl?(J(),Z("span",{key:0,class:"color-swatch",style:Ct(`background-color: hsl(${i.hsl});`)},null,4)):xt("",!0),me(" "+ke(i.hsl),1)])):i.code?(J(),Z("td",Iu,[c("code",null,ke(i.code),1)])):(J(),Z("td",Nu,ke(i.value),1))],64))]))),128))])),64))])])])]))}},ju=jn(Mu,[["__scopeId","data-v-2840fb55"]]),Ru={class:"row mb-5"},Bu=c("h2",null,"Dependencies",-1),zu=[Bu],Lu={class:"col-12"},Du=["href"],Hu=c("br",null,null,-1),Uu=["href"],qu=c("br",null,null,-1),Wu=["href"],Vu={__name:"DependenciesSection",setup(e){const t=ae("styleData"),n=ae("links");return(a,r)=>(J(),Z("div",Ru,[c("div",{class:ve(T(t).h2ColClass)},zu,2),c("div",Lu,[c("a",{href:T(n).prism,target:"_blank"},"Prism",8,Du),Hu,c("a",{href:T(n).vueJs,target:"_blank"},"Vue 3",8,Uu),qu,c("a",{href:T(n).uaParser,target:"_blank"},"UAParser.js",8,Wu)])]))}},Yu=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Additional Languages")])],-1),Ku=c("div",{id:"additional-languages-json-usage-example",class:"row mb-4"},[c("div",{class:"col-12"},[c("p",null," PrismJS does not load all languages by default. In order to use additional languages you will need to import that languages component. ")])],-1),Gu={id:"additional-languages-ts-usage-example",class:"row mb-4"},Ju={class:"col-12"},Xu={id:"additional-languages-ts-example",class:"row mb-4"},Zu={class:"col-12"},Qu={id:"additional-languages-json-example",class:"row mb-4"},ef={class:"col-12"},tf={class:"col-12"},nf={id:"additional-languages-php-usage-example",class:"row mb-4"},af={class:"col-12"},rf={id:"additional-languages-php-example",class:"row mb-4"},of={class:"col-12"},sf={__name:"AdditionalLangExamples",setup(e){const t=ae("selectedTheme"),n=`<template>
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
person.sayHello();`,r=`<template>
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
<\/script>`,o=`{
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
`,i=`<template>
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
<\/script>`,s=`<?php

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
?>`;return(l,u)=>{const f=qe("CodeBlock");return J(),Z("div",null,[Yu,Ku,c("div",Gu,[c("div",Ju,[j(f,{code:n,label:"Example of using PrismJS to highlight TypeScript",lang:"html",tabs:!1,theme:T(t)},null,8,["theme"])])]),c("div",Xu,[c("div",Zu,[j(f,{code:a,label:"TypeScript",lang:"typescript",tabs:!1,theme:T(t)},null,8,["theme"])])]),c("div",Qu,[c("div",ef,[j(f,{code:r,label:"Example of using PrismJS to highlight JSON",lang:"html",tabs:!1,theme:T(t)},null,8,["theme"])]),c("div",tf,[j(f,{code:o,indent:2,label:"JSON",lang:"json",tabs:!1,theme:T(t)},null,8,["theme"])])]),c("div",nf,[c("div",af,[j(f,{code:i,label:"Example of using PrismJS to highlight PHP",lang:"html",tabs:!1,theme:T(t)},null,8,["theme"])])]),c("div",rf,[c("div",of,[j(f,{code:s,height:"500px",indent:2,label:"PHP",lang:"php",tabs:!1,theme:T(t)},null,8,["theme"])])])])}}},lf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Browser Window")])],-1),cf={id:"browser-window-example",class:"row mb-4"},uf={class:"col-12"},ff={__name:"BrowserWindowExamples",setup(e){const t=ae("selectedTheme"),n=`<CodeBlock
  :browser-window="true"
  :code="myCode"
  lang="javascript"
  :tabs="false"
/>`;return(a,r)=>{const o=qe("CodeBlock");return J(),Z("div",null,[lf,c("div",cf,[c("div",uf,[j(o,{"browser-window":!0,code:n,lang:"html",tabs:!1,theme:T(t)},null,8,["theme"])])])])}}},df=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Copy Button")])],-1),pf={id:"button-example",class:"row mb-4"},mf={class:"col-12"},bf={id:"persistent-button-example",class:"row mb-4"},hf={class:"col-12"},gf={__name:"ButtonExamples",setup(e){const t=ae("selectedTheme"),n=`<CodeBlock
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
/>`;return(r,o)=>{const i=qe("CodeBlock");return J(),Z("div",null,[df,c("div",pf,[c("div",mf,[j(i,{code:n,label:"Visible on hover",lang:"html",tabs:!1,theme:T(t)},null,8,["theme"])])]),c("div",bf,[c("div",hf,[j(i,{code:a,label:"Persistent Copy Button",lang:"html","persistent-copy-button":"",tabs:!1,theme:T(t)},null,8,["theme"])])])])}}},ls=`
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
`,vf=`/**
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
`,yf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Languages")])],-1),_f={id:"lang-js-examples",class:"row mb-4"},wf={class:"col-12"},kf={id:"lang-vue-examples",class:"row mb-4"},xf={class:"col-12"},Cf={id:"lang-css-examples",class:"row mb-4"},Af={class:"col-12"},$f={id:"lang-html-examples",class:"row mb-4"},Sf={class:"col-12"},Tf={id:"lang-svg-examples",class:"row mb-4"},Ef={class:"col-12"},Of={__name:"LangExamples",setup(e){const t=ae("codeBlockOptions"),n=ae("selectedTheme"),a=`<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const greeting = ref('Hello, World!');
<\/script>`,r=`// Example 1: Creating an array of numbers and finding the sum
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
`,o=ls,i=`<!DOCTYPE html>
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
`,s=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`;return(l,u)=>{const f=qe("CodeBlock");return J(),Z("div",null,[yf,c("div",_f,[c("div",wf,[j(f,{code:r,label:"JavaScript",lang:"javascript","max-height":T(t).preHeight,tabs:!1,theme:T(n)},null,8,["max-height","theme"])])]),c("div",kf,[c("div",xf,[j(f,{code:a,label:"Vue (using lang = html)",lang:"html","max-height":T(t).preHeight,tabs:!1,theme:T(n)},null,8,["max-height","theme"])])]),c("div",Cf,[c("div",Af,[j(f,{code:T(o),label:"CSS",lang:"css","max-height":T(t).preHeight,tabs:!1,theme:T(n)},null,8,["code","max-height","theme"])])]),c("div",$f,[c("div",Sf,[j(f,{code:i,label:"HTML",lang:"html","max-height":T(t).preHeight,tabs:!1,theme:T(n)},null,8,["max-height","theme"])])]),c("div",Tf,[c("div",Ef,[j(f,{code:s,label:"SVG",lang:"svg",tabs:!1,theme:T(n)},null,8,["theme"])])])])}}},Pf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Other Prop Examples")])],-1),Ff={id:"radius-example",class:"row mb-4"},If={class:"col-12"},Nf={id:"copy-text-example",class:"row mb-4"},Mf={class:"col-12"},jf={id:"run-text-example",class:"row mb-4"},Rf={class:"col-12"},Bf={id:"floating-tabs-example",class:"row mb-4"},zf={class:"col-12"},Lf={class:"form-check form-switch ms-1"},Df={class:"boolean-style"},Hf={id:"height-example",class:"row mb-4"},Uf={class:"col-12"},qf={id:"height-example",class:"row mb-4"},Wf={class:"col-12"},Vf={id:"indent-example",class:"row mb-4"},Yf={class:"col-12"},Kf={__name:"OtherExamples",setup(e){const t=ae("selectedTheme"),n=Ce("0 1em"),a=Ce("Copy Text"),r=Ce(!0),o=Ce("200"),i=Ce(2),s=Ce("Run"),l=Ce("0.25rem"),u=`<CodeBlock
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
</CodeBlock>`,g=`<CodeBlock
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
</CodeBlock>`,w=`<CodeBlock
  :code="myCode"
  :height="height"
  lang="html"
  :tabs="false"
>
  <template #label>
    height:
    <input v-model="height" type="number" />
  </template>
</CodeBlock>`,_=`<CodeBlock
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
</CodeBlock>`,y=`{
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
`;function k(){alert("Run Text Code Example Function")}return(A,b)=>{const p=qe("CodeBlock");return J(),Z("div",null,[Pf,c("div",Ff,[c("div",If,[j(p,{code:u,"code-block-radius":n.value,lang:"html",theme:T(t)},{label:ft(()=>[me(" codeBlockRadius: "),Ft(c("input",{"onUpdate:modelValue":b[0]||(b[0]=v=>n.value=v),class:"form-control",type:"text"},null,512),[[Kt,n.value]])]),_:1},8,["code-block-radius","theme"])])]),c("div",Nf,[c("div",Mf,[j(p,{code:f,"copy-tab":"",copyText:a.value,lang:"html",tabs:"",theme:T(t)},{label:ft(()=>[me(" copyText: "),Ft(c("input",{"onUpdate:modelValue":b[1]||(b[1]=v=>a.value=v),class:"form-control",type:"text"},null,512),[[Kt,a.value]])]),_:1},8,["copyText","theme"])])]),c("div",jf,[c("div",Rf,[j(p,{code:g,"copy-tab":!1,lang:"html","run-tab":"",runText:s.value,tabs:"",theme:T(t),onRun:k},{label:ft(()=>[me(" runText: "),Ft(c("input",{"onUpdate:modelValue":b[2]||(b[2]=v=>s.value=v),class:"form-control",type:"text"},null,512),[[Kt,s.value]])]),_:1},8,["runText","theme"])])]),c("div",Bf,[c("div",zf,[j(p,{code:m,"floating-tabs":r.value,lang:"html",tabs:"",theme:T(t)},{label:ft(()=>[c("div",Lf,[Ft(c("input",{"onUpdate:modelValue":b[3]||(b[3]=v=>r.value=v),checked:"",class:"form-check-input",role:"switch",type:"checkbox"},null,512),[[ou,r.value]]),c("label",null,[me(" floatingTabs = "),c("span",Df,ke(r.value),1)])])]),_:1},8,["floating-tabs","theme"])])]),c("div",Hf,[c("div",Uf,[j(p,{code:w,height:o.value,lang:"html",tabs:!1,theme:T(t)},{label:ft(()=>[me(" height: "),Ft(c("input",{"onUpdate:modelValue":b[4]||(b[4]=v=>o.value=v),class:"form-control",type:"number"},null,512),[[Kt,o.value]])]),_:1},8,["height","theme"])])]),c("div",qf,[c("div",Wf,[j(p,{code:_,lang:"html","run-tab":!0,"tab-gap":l.value,tabs:"",theme:T(t)},{label:ft(()=>[me(" tabGap: "),Ft(c("input",{"onUpdate:modelValue":b[5]||(b[5]=v=>l.value=v),class:"form-control",type:"text"},null,512),[[Kt,l.value]])]),_:1},8,["tab-gap","theme"])])]),c("div",Vf,[c("div",Yf,[j(p,{code:y,indent:i.value,lang:"json",tabs:!1,theme:T(t)},{label:ft(()=>[me(" indent (json): "),Ft(c("input",{"onUpdate:modelValue":b[6]||(b[6]=v=>i.value=v),class:"form-control",type:"number"},null,512),[[Kt,i.value]])]),_:1},8,["indent","theme"])])])])}}},Gf=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Plugins")])],-1),Jf={id:"plugin-example",class:"row mb-4"},Xf=Sc('<div class="col-12"><p> PrismJS does not load all plugins by default. In order to use additional plugins you will need to import them. Please note that not all plugins may work with this component. </p><p>Tested Plugins that do work include:</p><ul><li><a href="https://prismjs.com/plugins/autolinker/" target="_blank"> autolinker </a></li><li><a href="https://prismjs.com/plugins/inline-color/" target="_blank"> inline-color </a></li><li><a href="https://prismjs.com/plugins/line-numbers/" target="_blank"> line-numbers </a></li><li><a href="https://prismjs.com/plugins/match-braces/" target="_blank"> match-braces </a></li><li><a href="https://prismjs.com/plugins/show-invisibles/" target="_blank"> show-invisibles </a></li></ul></div>',1),Zf={class:"col-12"},Qf=c("a",{href:"https://prismjs.com/plugins/line-numbers/",target:"_blank"},"line-numbers",-1),ed={__name:"PluginExamples",setup(e){const t=ae("selectedTheme"),n=`<template>
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
<\/script>`;return(a,r)=>{const o=qe("CodeBlock");return J(),Z("div",null,[Gf,c("div",Jf,[Xf,c("div",Zf,[j(o,{class:"line-numbers",code:n,lang:"html",tabs:!1,theme:T(t)},{label:ft(()=>[me(" Example using the "),Qf,me(" Plugin ")]),_:1},8,["theme"])])])])}}},td=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Tabs")])],-1),nd={id:"tab-copy-example",class:"row mb-4"},ad={class:"col-12"},rd={id:"tab-run-example",class:"row mb-4"},od={class:"col-12"},id={id:"tab-both-example",class:"row mb-4"},sd={class:"col-12"},ld={__name:"TabExamples",setup(e){const t=ae("codeBlockOptions"),n=ae("selectedTheme"),a=`<CodeBlock
  :code="myCode"
  copy-tab
  label="Copy Code Tab"
  lang="javascript"
  :run-tab="false"
  tabs
/>`,r=`<template>
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
<\/script>`,o=`<template>
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
<\/script>`;function i(){alert("Run Code Tab")}function s(){alert("Copy & Run Code Tabs")}return(l,u)=>{const f=qe("CodeBlock");return J(),Z("div",null,[td,c("div",nd,[c("div",ad,[j(f,{code:a,"copy-tab":"",label:"Copy Code Tab",lang:"html","run-tab":!1,tabs:"",theme:T(n)},null,8,["theme"])])]),c("div",rd,[c("div",od,[j(f,{code:r,"copy-tab":!1,label:"Run Code Tab",lang:"html","max-height":T(t).preHeight,"run-tab":"",tabs:"",theme:T(n),onRun:i},null,8,["max-height","theme"])])]),c("div",id,[c("div",sd,[j(f,{code:o,label:"Copy & Run Code Tabs",lang:"html","max-height":T(t).preHeight,"run-tab":!0,tabs:"",theme:T(n),onRun:s},null,8,["max-height","theme"])])])])}}},cd=c("div",{class:"row mb-2"},[c("div",{class:"col-12"},[c("h5",null,"Testing")])],-1),ud={id:"copy-example",class:"row mb-4"},fd={class:"col-12"},dd={__name:"TestingExamples",setup(e){const t=ae("selectedTheme"),n=`
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
`;return(a,r)=>{const o=qe("CodeBlock");return J(),Z("div",null,[cd,c("div",ud,[c("div",fd,[j(o,{code:n,"copy-button":"",lang:"php",theme:T(t)},null,8,["theme"])])])])}}},pd={class:"mb-5"},md=c("div",{class:"row"},[c("div",{class:"col-12 mb-3"},[c("h2",null,"Examples")])],-1),bd={__name:"ExamplesSection",setup(e){return(t,n)=>(J(),Z("div",pd,[md,j(T(Of),{id:"lang-examples"}),j(T(sf),{id:"add-lang-examples"}),j(T(ed),{id:"plugin-examples"}),j(T(ld),{id:"tab-examples"}),j(T(gf),{id:"copy-button-examples"}),j(T(ff),{id:"browser-window-examples"}),j(T(Kf),{id:"other-prop-examples"})]))}},hd={class:"row mb-5"},gd=c("h2",null,"Events",-1),vd=[gd],yd={class:"col-12 mb-3"},_d={class:"table-responsive"},wd={class:"table table-striped"},kd=c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Description")])],-1),xd={valign:"top"},Cd={valign:"top"},Ad={__name:"EventsSection",setup(e){const t=ae("styleData"),n={run:{description:"The event emitted when the run tab is clicked."},"update:copy-status":{description:"The event emitted when the copy status is updated."}};return(a,r)=>(J(),Z("div",hd,[c("div",{class:ve(T(t).h2ColClass)},vd,2),c("div",yd,[c("div",_d,[c("table",wd,[kd,c("tbody",null,[(J(),Z(be,null,an(n,(o,i)=>c("tr",{key:o},[c("td",xd,ke(i),1),c("td",Cd,ke(o.description),1)])),64))])])])])]))}},$d={},Sd={class:"row mb-5"},Td=c("div",{class:"col-12 text-center"},null,-1),Ed=[Td];function Od(e,t){return J(),Z("div",Sd,Ed)}const Pd=jn($d,[["render",Od]]),Fd={class:"row mb-5"},Id=c("h2",null,"Installation",-1),Nd=[Id],Md={class:"col-12 mb-4"},jd={class:"col-12"},Rd={__name:"InstallationSection",setup(e){const t=ae("styleData"),n=ae("selectedTheme"),a="pnpm add vue3-code-block",r="npm i vue3-code-block";return(o,i)=>{const s=qe("CodeBlock");return J(),Z("div",Fd,[c("div",{class:ve(T(t).h2ColClass)},Nd,2),c("div",Md,[j(s,{code:a,label:"Using pnpm:",lang:"plain","show-run":!1,theme:T(n)},null,8,["theme"])]),c("div",jd,[j(s,{code:r,label:"Using npm:",lang:"plain","show-run":!1,theme:T(n)},null,8,["theme"])])])}}},Bd={class:"row mb-5"},zd=c("h2",null,"License",-1),Ld=[zd],Dd={class:"col-12"},Hd=c("p",null,[me(" Copyright © 2023 WebDevNerdStuff "),c("br"),me(" Licensed under the MIT license. ")],-1),Ud=["href"],qd={__name:"LicenseSection",setup(e){const t=ae("styleData"),n=ae("links");return(a,r)=>(J(),Z("div",Bd,[c("div",{class:ve(T(t).h2ColClass)},Ld,2),c("div",Dd,[Hd,c("p",null,[c("a",{href:T(n).license,target:"_blank"}," LICENSE.md ",8,Ud)])])]))}};const cs=e=>(Mr("data-v-296c1161"),e=e(),jr(),e),Wd={class:"row mb-5"},Vd=cs(()=>c("h2",null,"Props",-1)),Yd=[Vd],Kd={class:"col-12 mb-3"},Gd={class:"table-responsive"},Jd={class:"table table-striped"},Xd=cs(()=>c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Type"),c("th",null,"Default"),c("th",null,"Description")])],-1)),Zd={valign:"top"},Qd={class:"prop-type",valign:"top"},ep={class:"prop-default",valign:"top"},tp=["innerHTML"],np={__name:"PropsSection",setup(e){const t=ae("styleData"),n={browserWindow:{type:"Boolean",required:!1,default:!1,description:"To give the code block a browser window look."},code:{type:"[Object, Array, String, Number]",required:!0,default:"",description:"The code to be displayed in the code block."},codeBlockRadius:{type:"String",required:!1,default:"0.5rem",description:"The border radius of the code block."},copyButton:{type:Boolean,required:!1,default:!0,description:"To show a copy button within the code block"},copyIcons:{type:"Boolean",required:!1,default:!0,description:"To show the copy icons on the copy code tab."},copyTab:{type:"Boolean",required:!1,default:!0,description:"To show the copy code tab."},copyFailedText:{type:"String",required:!1,default:"Copy failed!",description:"The text to be displayed when the code copy failed."},copyText:{type:"String",required:!1,default:"Copy Code",description:"The text to be displayed on the copy tab."},copySuccessText:{type:"String",required:!1,default:"Copied!",description:"The text to be displayed when the code copy was successful."},floatingTabs:{type:"Boolean",required:!1,default:!0,description:"To make the tabs float on top of the code block."},height:{type:"[String, Number]",required:!1,default:"auto",description:"The height of the code block."},indent:{type:"Number",required:!1,default:4,description:"The number of spaces to indent the code for json."},label:{type:"String",required:!1,default:"",description:"The label to be displayed on the code block."},lang:{type:"String",required:!1,default:"javascript",description:"The language of the code."},maxHeight:{type:"[String, Number]",required:!1,default:"auto",description:"The max height of the code block."},persistentCopyButton:{type:"Boolean",required:!1,default:!1,description:"To show a persistent copy button within the code block"},runTab:{type:"Boolean",required:!1,default:!1,description:"To show the run tab."},tabGap:{type:"String",required:!1,default:"0.25rem",description:"The gap between the tabs."},tabs:{type:"Boolean",required:!1,default:!1,description:"To show the tabs. This will show/hide all tabs."},theme:{type:"[String, Boolean]",required:!1,default:"neon-bunny",description:`<p>The theme to be used for the code block. Available options include:</p>
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
		`}};return(a,r)=>(J(),Z("div",Wd,[c("div",{class:ve(T(t).h2ColClass)},Yd,2),c("div",Kd,[c("div",Gd,[c("table",Jd,[Xd,c("tbody",null,[(J(),Z(be,null,an(n,(o,i)=>c("tr",{key:o},[c("td",Zd,ke(i),1),c("td",Qd,ke(o.type),1),c("td",ep,ke(o.default),1),c("td",{valign:"top",innerHTML:o.description},null,8,tp)])),64))])])])])]))}},ap=jn(np,[["__scopeId","data-v-296c1161"]]),rp={class:"row mb-5"},op=c("h2",null,"Slots",-1),ip=[op],sp={class:"col-12 mb-3"},lp={class:"table-responsive"},cp={class:"table table-striped"},up=c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Description")])],-1),fp={valign:"top"},dp={valign:"top"},pp={__name:"SlotsSection",setup(e){const t=ae("styleData"),n={copyButton:{description:"Slot for the copy button of the component."},label:{description:"Slot for the label of the component."},tabs:{description:"Slot for the tabs of the component."}};return(a,r)=>(J(),Z("div",rp,[c("div",{class:ve(T(t).h2ColClass)},ip,2),c("div",sp,[c("div",lp,[c("table",cp,[up,c("tbody",null,[(J(),Z(be,null,an(n,(o,i)=>c("tr",{key:o},[c("td",fp,ke(i),1),c("td",dp,ke(o.description),1)])),64))])])])])]))}},mp={class:"row mb-5"},bp=c("h2",null,"Register Component",-1),hp=[bp],gp={class:"col-12"},vp={__name:"RegisterSection",setup(e){const t=ae("styleData"),n=ae("selectedTheme"),a=`import { createApp } from 'vue';
import CodeBlock from 'vue3-code-block';

createApp()
  .use(CodeBlock)
  .mount('#app');`;return(r,o)=>{const i=qe("CodeBlock");return J(),Z("div",mp,[c("div",{class:ve(T(t).h2ColClass)},hp,2),c("div",gp,[j(i,{code:a,label:"",lang:"javascript","show-run":!1,theme:T(n)},null,8,["theme"])])])}}},yp={class:"row mb-5"},_p=c("h2",null,"Usage",-1),wp=[_p],kp={class:"col-12"},xp={class:"col-12"},Cp={__name:"UsageSection",setup(e){const t=ae("styleData"),n=ae("selectedTheme"),a=`<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo);
<\/script>`,r=`<template>
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
<\/script>`;function o(){alert("bar")}return(i,s)=>{const l=qe("CodeBlock");return J(),Z("div",yp,[c("div",{class:ve(T(t).h2ColClass)},wp,2),c("div",kp,[j(l,{code:a,label:"My Code",lang:"html","show-run":!1,theme:T(n)},null,8,["theme"])]),c("div",xp,[j(l,{code:r,label:"Run My Code",lang:"html","run-tab":"",tabs:"",theme:T(n),onRun:o},null,8,["theme"])])])}}};var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sr={},Ap={get exports(){return sr},set exports(e){sr=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function b(p){return p instanceof l?new l(p.type,b(p.content),p.alias):Array.isArray(p)?p.map(b):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(p,v){v=v||{};var C,E;switch(s.util.type(p)){case"Object":if(E=s.util.objId(p),v[E])return v[E];C={},v[E]=C;for(var R in p)p.hasOwnProperty(R)&&(C[R]=b(p[R],v));return C;case"Array":return E=s.util.objId(p),v[E]?v[E]:(C=[],v[E]=C,p.forEach(function(X,z){C[z]=b(X,v)}),C);default:return p}},getLanguage:function(b){for(;b;){var p=r.exec(b.className);if(p)return p[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,p){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(b){var p=document.getElementsByTagName("script");for(var v in p)if(p[v].src==b)return p[v]}return null}},isActive:function(b,p,v){for(var C="no-"+p;b;){var E=b.classList;if(E.contains(p))return!0;if(E.contains(C))return!1;b=b.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(b,p){var v=s.util.clone(s.languages[b]);for(var C in p)v[C]=p[C];return v},insertBefore:function(b,p,v,C){C=C||s.languages;var E=C[b],R={};for(var X in E)if(E.hasOwnProperty(X)){if(X==p)for(var z in v)v.hasOwnProperty(z)&&(R[z]=v[z]);v.hasOwnProperty(X)||(R[X]=E[X])}var te=C[b];return C[b]=R,s.languages.DFS(s.languages,function(le,xe){xe===te&&le!=b&&(this[le]=R)}),R},DFS:function b(p,v,C,E){E=E||{};var R=s.util.objId;for(var X in p)if(p.hasOwnProperty(X)){v.call(p,X,p[X],C||X);var z=p[X],te=s.util.type(z);te==="Object"&&!E[R(z)]?(E[R(z)]=!0,b(z,v,null,E)):te==="Array"&&!E[R(z)]&&(E[R(z)]=!0,b(z,v,X,E))}}},plugins:{},highlightAll:function(b,p){s.highlightAllUnder(document,b,p)},highlightAllUnder:function(b,p,v){var C={callback:v,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),s.hooks.run("before-all-elements-highlight",C);for(var E=0,R;R=C.elements[E++];)s.highlightElement(R,p===!0,C.callback)},highlightElement:function(b,p,v){var C=s.util.getLanguage(b),E=s.languages[C];s.util.setLanguage(b,C);var R=b.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(R,C);var X=b.textContent,z={element:b,language:C,grammar:E,code:X};function te(xe){z.highlightedCode=xe,s.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,s.hooks.run("after-highlight",z),s.hooks.run("complete",z),v&&v.call(z.element)}if(s.hooks.run("before-sanity-check",z),R=z.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!z.code){s.hooks.run("complete",z),v&&v.call(z.element);return}if(s.hooks.run("before-highlight",z),!z.grammar){te(s.util.encode(z.code));return}if(p&&a.Worker){var le=new Worker(s.filename);le.onmessage=function(xe){te(xe.data)},le.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else te(s.highlight(z.code,z.grammar,z.language))},highlight:function(b,p,v){var C={code:b,grammar:p,language:v};if(s.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=s.tokenize(C.code,C.grammar),s.hooks.run("after-tokenize",C),l.stringify(s.util.encode(C.tokens),C.language)},tokenize:function(b,p){var v=p.rest;if(v){for(var C in v)p[C]=v[C];delete p.rest}var E=new g;return m(E,E.head,b),f(b,E,p,E.head,0),_(E)},hooks:{all:{},add:function(b,p){var v=s.hooks.all;v[b]=v[b]||[],v[b].push(p)},run:function(b,p){var v=s.hooks.all[b];if(!(!v||!v.length))for(var C=0,E;E=v[C++];)E(p)}},Token:l};a.Prism=s;function l(b,p,v,C){this.type=b,this.content=p,this.alias=v,this.length=(C||"").length|0}l.stringify=function b(p,v){if(typeof p=="string")return p;if(Array.isArray(p)){var C="";return p.forEach(function(te){C+=b(te,v)}),C}var E={type:p.type,content:b(p.content,v),tag:"span",classes:["token",p.type],attributes:{},language:v},R=p.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(E.classes,R):E.classes.push(R)),s.hooks.run("wrap",E);var X="";for(var z in E.attributes)X+=" "+z+'="'+(E.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+X+">"+E.content+"</"+E.tag+">"};function u(b,p,v,C){b.lastIndex=p;var E=b.exec(v);if(E&&C&&E[1]){var R=E[1].length;E.index+=R,E[0]=E[0].slice(R)}return E}function f(b,p,v,C,E,R){for(var X in v)if(!(!v.hasOwnProperty(X)||!v[X])){var z=v[X];z=Array.isArray(z)?z:[z];for(var te=0;te<z.length;++te){if(R&&R.cause==X+","+te)return;var le=z[te],xe=le.inside,Te=!!le.lookbehind,Re=!!le.greedy,vt=le.alias;if(Re&&!le.pattern.global){var K=le.pattern.toString().match(/[imsuy]*$/)[0];le.pattern=RegExp(le.pattern.source,K+"g")}for(var ee=le.pattern||le,Y=C.next,pe=E;Y!==p.tail&&!(R&&pe>=R.reach);pe+=Y.value.length,Y=Y.next){var Ee=Y.value;if(p.length>b.length)return;if(!(Ee instanceof l)){var _e=1,oe;if(Re){if(oe=u(ee,pe,b,Te),!oe||oe.index>=b.length)break;var Se=oe.index,Be=oe.index+oe[0].length,He=pe;for(He+=Y.value.length;Se>=He;)Y=Y.next,He+=Y.value.length;if(He-=Y.value.length,pe=He,Y.value instanceof l)continue;for(var Ve=Y;Ve!==p.tail&&(He<Be||typeof Ve.value=="string");Ve=Ve.next)_e++,He+=Ve.value.length;_e--,Ee=b.slice(pe,He),oe.index-=pe}else if(oe=u(ee,0,Ee,Te),!oe)continue;var Se=oe.index,Ue=oe[0],ct=Ee.slice(0,Se),Ye=Ee.slice(Se+Ue.length),tt=pe+Ee.length;R&&tt>R.reach&&(R.reach=tt);var nt=Y.prev;ct&&(nt=m(p,nt,ct),pe+=ct.length),w(p,nt,_e);var d=new l(X,xe?s.tokenize(Ue,xe):Ue,vt,Ue);if(Y=m(p,nt,d),Ye&&m(p,Y,Ye),_e>1){var h={cause:X+","+te,reach:tt};f(b,p,v,Y.prev,pe,h),R&&h.reach>R.reach&&(R.reach=h.reach)}}}}}}function g(){var b={value:null,prev:null,next:null},p={value:null,prev:b,next:null};b.next=p,this.head=b,this.tail=p,this.length=0}function m(b,p,v){var C=p.next,E={value:v,prev:p,next:C};return p.next=E,C.prev=E,b.length++,E}function w(b,p,v){for(var C=p.next,E=0;E<v&&C!==b.tail;E++)C=C.next;p.next=C,C.prev=p,b.length-=E}function _(b){for(var p=[],v=b.head.next;v!==b.tail;)p.push(v.value),v=v.next;return p}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(b){var p=JSON.parse(b.data),v=p.language,C=p.code,E=p.immediateClose;a.postMessage(s.highlight(C,s.languages[v],v)),E&&a.close()},!1)),s;var y=s.util.currentScript();y&&(s.filename=y.src,y.hasAttribute("data-manual")&&(s.manual=!0));function k(){s.manual||s.highlightAll()}if(!s.manual){var A=document.readyState;A==="loading"||A==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return s}(t);e.exports&&(e.exports=n),typeof ir<"u"&&(ir.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,o){var i={};i["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};s["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",r=function(y,k){return"✖ Error "+y+" while fetching file: "+k},o="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",l="loading",u="loaded",f="failed",g="pre[data-src]:not(["+s+'="'+u+'"]):not(['+s+'="'+l+'"])';function m(y,k,A){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?k(b.responseText):b.status>=400?A(r(b.status,b.statusText)):A(o))},b.send(null)}function w(y){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(k){var A=Number(k[1]),b=k[2],p=k[3];return b?p?[A,Number(p)]:[A,void 0]:[A,A]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+g}),n.hooks.add("before-sanity-check",function(y){var k=y.element;if(k.matches(g)){y.code="",k.setAttribute(s,l);var A=k.appendChild(document.createElement("CODE"));A.textContent=a;var b=k.getAttribute("data-src"),p=y.language;if(p==="none"){var v=(/\.(\w+)$/.exec(b)||[,"none"])[1];p=i[v]||v}n.util.setLanguage(A,p),n.util.setLanguage(k,p);var C=n.plugins.autoloader;C&&C.loadLanguages(p),m(b,function(E){k.setAttribute(s,u);var R=w(k.getAttribute("data-range"));if(R){var X=E.split(/\r\n?|\n/g),z=R[0],te=R[1]==null?X.length:R[1];z<0&&(z+=X.length),z=Math.max(0,Math.min(z-1,X.length)),te<0&&(te+=X.length),te=Math.max(0,Math.min(te,X.length)),E=X.slice(z,te).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(z+1))}A.textContent=E,n.highlightElement(A)},function(E){k.setAttribute(s,f),A.textContent=E})}}),n.plugins.fileHighlight={highlight:function(k){for(var A=(k||document).querySelectorAll(g),b=0,p;p=A[b++];)n.highlightElement(p)}};var _=!1;n.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ap);const Mo=sr;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){function t(n,a){return"___"+n.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,o){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(r,function(s){if(typeof o=="function"&&!o(s))return s;for(var l=i.length,u;n.code.indexOf(u=t(a,l))!==-1;)++l;return i[l]=s,u}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language!==a||!n.tokenStack)return;n.grammar=e.languages[a];var r=0,o=Object.keys(n.tokenStack);function i(s){for(var l=0;l<s.length&&!(r>=o.length);l++){var u=s[l];if(typeof u=="string"||u.content&&typeof u.content=="string"){var f=o[r],g=n.tokenStack[f],m=typeof u=="string"?u:u.content,w=t(a,f),_=m.indexOf(w);if(_>-1){++r;var y=m.substring(0,_),k=new e.Token(a,e.tokenize(g,n.grammar),"language-"+a,g),A=m.substring(_+w.length),b=[];y&&b.push.apply(b,i([y])),b.push(k),A&&b.push.apply(b,i([A])),typeof u=="string"?s.splice.apply(s,[l,1].concat(b)):u.content=b}}else u.content&&i(u.content)}return s}i(n.tokens)}}})})(Prism);(function(e){var t=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,n=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,r=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:t,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:r,punctuation:o};var i={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},s=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:i}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:i}}];e.languages.insertBefore("php","variable",{string:s,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:t,string:s,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,number:a,operator:r,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(l){if(/<\?/.test(l.code)){var u=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(l,"php",u)}}),e.hooks.add("after-tokenize",function(l){e.languages["markup-templating"].tokenizePlaceholders(l,"php")})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(i,s){if(!(i.tagName!=="PRE"||!i.classList.contains(e))){var l=i.querySelector(".line-numbers-rows");if(l){var u=parseInt(i.getAttribute("data-start"),10)||1,f=u+(l.children.length-1);s<u&&(s=u),s>f&&(s=f);var g=s-u;return l.children[g]}}},resize:function(i){a([i])},assumeViewportIndependence:!0};function a(i){if(i=i.filter(function(l){var u=r(l),f=u["white-space"];return f==="pre-wrap"||f==="pre-line"}),i.length!=0){var s=i.map(function(l){var u=l.querySelector("code"),f=l.querySelector(".line-numbers-rows");if(!(!u||!f)){var g=l.querySelector(".line-numbers-sizer"),m=u.textContent.split(t);g||(g=document.createElement("span"),g.className="line-numbers-sizer",u.appendChild(g)),g.innerHTML="0",g.style.display="block";var w=g.getBoundingClientRect().height;return g.innerHTML="",{element:l,lines:m,lineHeights:[],oneLinerHeight:w,sizer:g}}}).filter(Boolean);s.forEach(function(l){var u=l.sizer,f=l.lines,g=l.lineHeights,m=l.oneLinerHeight;g[f.length-1]=void 0,f.forEach(function(w,_){if(w&&w.length>1){var y=u.appendChild(document.createElement("span"));y.style.display="block",y.textContent=w}else g[_]=m})}),s.forEach(function(l){for(var u=l.sizer,f=l.lineHeights,g=0,m=0;m<f.length;m++)f[m]===void 0&&(f[m]=u.children[g++].getBoundingClientRect().height)}),s.forEach(function(l){var u=l.sizer,f=l.element.querySelector(".line-numbers-rows");u.style.display="none",u.innerHTML="",l.lineHeights.forEach(function(g,m){f.children[m].style.height=g+"px"})})}}function r(i){return i?window.getComputedStyle?getComputedStyle(i):i.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){n.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(i){if(i.code){var s=i.element,l=s.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!s.querySelector(".line-numbers-rows")&&Prism.util.isActive(s,e)){s.classList.remove(e),l.classList.add(e);var u=i.code.match(t),f=u?u.length+1:1,g,m=new Array(f+1).join("<span></span>");g=document.createElement("span"),g.setAttribute("aria-hidden","true"),g.className="line-numbers-rows",g.innerHTML=m,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),i.element.appendChild(g),a([l]),Prism.hooks.run("line-numbers",i)}}}),Prism.hooks.add("line-numbers",function(i){i.plugins=i.plugins||{},i.plugins.lineNumbers=!0})})();const $p={class:"container mb-5"},Sp=c("div",{class:"row mb-4"},[c("div",{class:"col-12 text-center"},[c("img",{alt:"Vue",class:"vue-logo",src:pu})])],-1),Tp={class:"row mb-3"},Ep=c("div",{class:"col-12 text-center"},[c("h1",null,"Vue 3 CodeBlock")],-1),Op={class:"col-12 text-center"},Pp={class:"badge bg-secondary rounded-pill"},Fp={class:"container mb-5"},Ip={class:"row"},Np={class:"col-12"},Mp=["href"],jp={class:"row"},Rp={class:"col-12 col-md-3"},Bp=c("label",{class:"form-label",for:"theme-selection-select"},"Switch Theme:",-1),zp=["selected","value"],Lp={key:0,class:"container"},Dp={key:1,class:"container"},Hp={__name:"DemoPage",setup(e){const t=ae("links"),n=Ce(!1),a=Ce("neon-bunny"),r=[{label:"Neon Bunny",value:"neon-bunny"},{label:"Neon Bunny - Carrot",value:"neon-bunny-carrot"},{label:"Prism Default",value:"default"},{label:"Coy",value:"coy"},{label:"Dark",value:"dark"},{label:"Funky",value:"funky"},{label:"Okaidia",value:"okaidia"},{label:"Solarizedlight",value:"solarizedlight"},{label:"Tomorrow",value:"tomorrow"},{label:"Twilight",value:"twilight"}];bn("selectedTheme",a);function o(i){a.value=i}return(i,s)=>(J(),Z(be,null,[c("div",$p,[Sp,c("div",Tp,[Ep,c("div",Op,[c("span",Pp,ke(T(du)),1)])])]),c("div",Fp,[c("div",Ip,[c("div",Np,[c("p",null,[me(" The Vue 3 CodeBlock component leverages the power of "),c("a",{href:T(t).prism,target:"_blank"},"PrismJS",8,Mp),me(" to provide syntax highlighting for code blocks within your application. The component takes a prop, which is the code to be highlighted, and uses PrismJS to render the code with syntax highlighting. The component supports a variety of programming languages and can be customized with different themes to match your application's design. With this component, your users can display their code snippets with ease and clarity, making it easier to share and collaborate on code within your application. ")])])]),c("div",jp,[c("div",Rp,[Bp,c("select",{id:"theme-selection-select","aria-label":"Theme Selection",class:"form-select",onChange:s[0]||(s[0]=l=>o(l.target.value))},[(J(),Z(be,null,an(r,l=>c("option",{key:l,selected:a.value===l.value,value:l.value},ke(l.label),9,zp)),64))],32)])])]),n.value?(J(),Z("div",Dp,[j(T(dd))])):(J(),Z("div",Lp,[j(T(Rd),{id:"ul-installation"}),j(T(vp),{id:"ul-register-plugin"}),j(T(Cp),{id:"ul-usage"}),j(T(ap),{id:"ul-props"}),j(T(Ad),{id:"ul-events"}),j(T(pp),{id:"ul-slots"}),j(T(bd),{id:"ul-examples"}),j(T(ju),{id:"ul-css-vars"}),j(T(Vu),{id:"ul-dependencies"}),j(T(yu),{id:"ul-change-log"}),j(T(qd),{id:"ul-license"}),j(T(Pd))]))],64))}};const Up={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5"},qp={class:"container"},Wp=c("a",{class:"navbar-brand",href:"/vue3-code-block/"},"Vue 3 CodeBlock",-1),Vp=c("button",{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",class:"navbar-toggler","data-bs-target":"#navbarSupportedContent","data-bs-toggle":"collapse",type:"button"},[c("span",{class:"navbar-toggler-icon"})],-1),Yp={id:"navbarSupportedContent",class:"collapse navbar-collapse"},Kp={class:"navbar-nav me-auto mb-2 mb-lg-0"},Gp={class:"nav-item"},Jp={"aria-current":"page",class:"nav-link active",href:"/vue3-code-block/"},Xp=c("li",{class:"nav-item dropdown"},[c("a",{id:"docs-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Docs "),c("ul",{"aria-labelledby":"docs-dropdown",class:"dropdown-menu dropdown-menu-dark"},[c("li",null,[c("a",{class:"dropdown-item",href:"#ul-installation"}," Installation ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-register-plugin"},"Register Component")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-props"},"Props")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-events"},"Events")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-slots"},"Slots")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-examples"},"Examples")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-css-vars"},"CSS Variables")]),c("li",null,[c("hr",{class:"dropdown-divider"})]),c("li",null,[c("h6",{class:"dropdown-header"},"Info")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-dependencies"}," Dependencies ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-change-log"},"Change Log")]),c("li",null,[c("a",{class:"dropdown-item",href:"#ul-license"},"License")])])],-1),Zp=c("li",{class:"nav-item dropdown"},[c("a",{id:"examples-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Examples "),c("ul",{"aria-labelledby":"examples-dropdown",class:"dropdown-menu dropdown-menu-dark"},[c("li",null,[c("a",{class:"dropdown-item",href:"#lang-examples"},"Languages")]),c("li",null,[c("a",{class:"dropdown-item",href:"#add-lang-examples"}," Additional Languages ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#plugin-examples"},"Plugins")]),c("li",null,[c("a",{class:"dropdown-item",href:"#tab-examples"},"Tabs")]),c("li",null,[c("a",{class:"dropdown-item",href:"#copy-button-examples"}," Copy Button ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#browser-window-examples"}," Browser Window ")]),c("li",null,[c("a",{class:"dropdown-item",href:"#other-prop-examples"}," Other Props ")])])],-1),Qp={class:"d-flex"},em={class:"navbar-nav me-auto mb-2 mb-lg-0"},tm={class:"nav-item"},nm=["href"],am={class:"nav-item"},rm=["href"],om={__name:"NavBar",setup(e){const t=ae("links");return(n,a)=>{const r=qe("fa-icon");return J(),Z("nav",Up,[c("div",qp,[Wp,Vp,c("div",Yp,[c("ul",Kp,[c("li",Gp,[c("a",Jp,[j(r,{icon:"fa-solid fa-house"})])]),Xp,Zp]),c("div",Qp,[c("ul",em,[c("li",tm,[c("a",{class:"nav-link",href:T(t).github,target:"_blank"},[j(r,{icon:"fa-brands fa-github"}),me(" GitHub ")],8,nm)]),c("li",am,[c("a",{class:"nav-link",href:T(t).npm,target:"_blank"},[j(r,{icon:"fa-brands fa-npm"}),me(" Package ")],8,rm)])])])])])])}}},im={class:"footer-container container-fluid"},sm={class:"container py-2"},lm={class:"d-flex flex-wrap justify-content-between align-items-center my-2"},cm={class:"col-md-4 d-flex align-items-center"},um={class:"mb-3 mb-md-0 text-muted"},fm={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},dm={class:"ms-3"},pm=["href"],mm={class:"ms-3"},bm=["href"],hm=Vt({__name:"FooterBar",setup(e){const t=ae("links"),n=new Date().getFullYear();return(a,r)=>{const o=qe("fa-icon");return J(),Z("div",im,[c("div",sm,[c("footer",lm,[c("div",cm,[c("span",um," © "+ke(T(n))+" WebDevNerdStuff ",1)]),c("ul",fm,[c("li",dm,[c("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:T(t).github,role:"button",target:"_blank"},[j(o,{icon:"fa-brands fa-github"})],8,pm)]),c("li",mm,[c("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:T(t).npm,role:"button",target:"_blank"},[j(o,{icon:"fa-brands fa-npm"})],8,bm)])])])])])}}});const gm=Vt({__name:"App",setup(e){bn("styleData",{h2ColClass:"col-12 mb-4",fieldWidth:{maxWidth:"100%",width:"300px"}});const t=fu,n=`https://github.com/webdevnerdstuff/${t}`,a={changeLog:`${n}/blob/main/CHANGELOG.md`,docs:`https://webdevnerdstuff.github.io/${t}/`,github:n,license:`${n}/blob/main/LICENSE.md`,neonBunnyTheme:"https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny",npm:`https://www.npmjs.com/package/${t}`,prism:"https://prismjs.com/",uaParser:"https://www.npmjs.com/package/ua-parser-js",vueJs:"https://vuejs.org/"};bn("links",a);const r=Ce({browserWindow:!1,preHeight:"30em"});return bn("codeBlockOptions",r),(o,i)=>(J(),Z(be,null,[j(om),j(Hp),j(hm)],64))}});var ba={},vm={get exports(){return ba},set exports(e){ba=e}};(function(e,t){(function(n,a){var r="1.0.34",o="",i="?",s="function",l="undefined",u="object",f="string",g="major",m="model",w="name",_="type",y="vendor",k="version",A="architecture",b="console",p="mobile",v="tablet",C="smarttv",E="wearable",R="embedded",X=350,z="Amazon",te="Apple",le="ASUS",xe="BlackBerry",Te="Browser",Re="Chrome",vt="Edge",K="Firefox",ee="Google",Y="Huawei",pe="LG",Ee="Microsoft",_e="Motorola",oe="Opera",Be="Samsung",He="Sharp",Ve="Sony",Se="Xiaomi",Ue="Zebra",ct="Facebook",Ye="Chromium OS",tt="Mac OS",nt=function(N,U){var D={};for(var G in N)U[G]&&U[G].length%2===0?D[G]=U[G].concat(N[G]):D[G]=N[G];return D},d=function(N){for(var U={},D=0;D<N.length;D++)U[N[D].toUpperCase()]=N[D];return U},h=function(N,U){return typeof N===f?x(U).indexOf(x(N))!==-1:!1},x=function(N){return N.toLowerCase()},S=function(N){return typeof N===f?N.replace(/[^\d\.]/g,o).split(".")[0]:a},$=function(N,U){if(typeof N===f)return N=N.replace(/^\s\s*/,o),typeof U===l?N:N.substring(0,X)},P=function(N,U){for(var D=0,G,se,he,B,yt,Pe;D<U.length&&!yt;){var Yt=U[D],Fe=U[D+1];for(G=se=0;G<Yt.length&&!yt&&Yt[G];)if(yt=Yt[G++].exec(N),yt)for(he=0;he<Fe.length;he++)Pe=yt[++se],B=Fe[he],typeof B===u&&B.length>0?B.length===2?typeof B[1]==s?this[B[0]]=B[1].call(this,Pe):this[B[0]]=B[1]:B.length===3?typeof B[1]===s&&!(B[1].exec&&B[1].test)?this[B[0]]=Pe?B[1].call(this,Pe,B[2]):a:this[B[0]]=Pe?Pe.replace(B[1],B[2]):a:B.length===4&&(this[B[0]]=Pe?B[3].call(this,Pe.replace(B[1],B[2])):a):this[B]=Pe||a;D+=2}},M=function(N,U){for(var D in U)if(typeof U[D]===u&&U[D].length>0){for(var G=0;G<U[D].length;G++)if(h(U[D][G],N))return D===i?a:D}else if(h(U[D],N))return D===i?a:D;return N},F={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},I={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},O={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[k,[w,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[k,[w,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[w,k],[/opios[\/ ]+([\w\.]+)/i],[k,[w,oe+" Mini"]],[/\bopr\/([\w\.]+)/i],[k,[w,oe]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[w,k],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[k,[w,"UC"+Te]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[k,[w,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[k,[w,"WeChat"]],[/konqueror\/([\w\.]+)/i],[k,[w,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[k,[w,"IE"]],[/yabrowser\/([\w\.]+)/i],[k,[w,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[w,/(.+)/,"$1 Secure "+Te],k],[/\bfocus\/([\w\.]+)/i],[k,[w,K+" Focus"]],[/\bopt\/([\w\.]+)/i],[k,[w,oe+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[k,[w,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[k,[w,"Dolphin"]],[/coast\/([\w\.]+)/i],[k,[w,oe+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[k,[w,"MIUI "+Te]],[/fxios\/([-\w\.]+)/i],[k,[w,K]],[/\bqihu|(qi?ho?o?|360)browser/i],[[w,"360 "+Te]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[w,/(.+)/,"$1 "+Te],k],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],k],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[w,k],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[w],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[w,ct],k],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[w,k],[/\bgsa\/([\w\.]+) .*safari\//i],[k,[w,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[k,[w,Re+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[w,Re+" WebView"],k],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[k,[w,"Android "+Te]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[w,k],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[k,[w,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[k,w],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[w,[k,M,F]],[/(webkit|khtml)\/([\w\.]+)/i],[w,k],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[w,"Netscape"],k],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[k,[w,K+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[w,k],[/(cobalt)\/([\w\.]+)/i],[w,[k,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[A,"amd64"]],[/(ia32(?=;))/i],[[A,x]],[/((?:i[346]|x)86)[;\)]/i],[[A,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[A,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[A,"armhf"]],[/windows (ce|mobile); ppc;/i],[[A,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[A,/ower/,o,x]],[/(sun4\w)[;\)]/i],[[A,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[A,x]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[m,[y,Be],[_,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[m,[y,Be],[_,p]],[/\((ip(?:hone|od)[\w ]*);/i],[m,[y,te],[_,p]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[m,[y,te],[_,v]],[/(macintosh);/i],[m,[y,te]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[m,[y,He],[_,p]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[m,[y,Y],[_,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[m,[y,Y],[_,p]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[m,/_/g," "],[y,Se],[_,p]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[m,/_/g," "],[y,Se],[_,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[m,[y,"OPPO"],[_,p]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[m,[y,"Vivo"],[_,p]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[m,[y,"Realme"],[_,p]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[m,[y,_e],[_,p]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[m,[y,_e],[_,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[m,[y,pe],[_,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[m,[y,pe],[_,p]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[m,[y,"Lenovo"],[_,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[m,/_/g," "],[y,"Nokia"],[_,p]],[/(pixel c)\b/i],[m,[y,ee],[_,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[m,[y,ee],[_,p]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[m,[y,Ve],[_,p]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[m,"Xperia Tablet"],[y,Ve],[_,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[m,[y,"OnePlus"],[_,p]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[m,[y,z],[_,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[m,/(.+)/g,"Fire Phone $1"],[y,z],[_,p]],[/(playbook);[-\w\),; ]+(rim)/i],[m,y,[_,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[m,[y,xe],[_,p]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[m,[y,le],[_,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[m,[y,le],[_,p]],[/(nexus 9)/i],[m,[y,"HTC"],[_,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[y,[m,/_/g," "],[_,p]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[m,[y,"Acer"],[_,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[m,[y,"Meizu"],[_,p]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[y,m,[_,p]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[y,m,[_,v]],[/(surface duo)/i],[m,[y,Ee],[_,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[m,[y,"Fairphone"],[_,p]],[/(u304aa)/i],[m,[y,"AT&T"],[_,p]],[/\bsie-(\w*)/i],[m,[y,"Siemens"],[_,p]],[/\b(rct\w+) b/i],[m,[y,"RCA"],[_,v]],[/\b(venue[\d ]{2,7}) b/i],[m,[y,"Dell"],[_,v]],[/\b(q(?:mv|ta)\w+) b/i],[m,[y,"Verizon"],[_,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[m,[y,"Barnes & Noble"],[_,v]],[/\b(tm\d{3}\w+) b/i],[m,[y,"NuVision"],[_,v]],[/\b(k88) b/i],[m,[y,"ZTE"],[_,v]],[/\b(nx\d{3}j) b/i],[m,[y,"ZTE"],[_,p]],[/\b(gen\d{3}) b.+49h/i],[m,[y,"Swiss"],[_,p]],[/\b(zur\d{3}) b/i],[m,[y,"Swiss"],[_,v]],[/\b((zeki)?tb.*\b) b/i],[m,[y,"Zeki"],[_,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[y,"Dragon Touch"],m,[_,v]],[/\b(ns-?\w{0,9}) b/i],[m,[y,"Insignia"],[_,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[m,[y,"NextBook"],[_,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[y,"Voice"],m,[_,p]],[/\b(lvtel\-)?(v1[12]) b/i],[[y,"LvTel"],m,[_,p]],[/\b(ph-1) /i],[m,[y,"Essential"],[_,p]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[m,[y,"Envizen"],[_,v]],[/\b(trio[-\w\. ]+) b/i],[m,[y,"MachSpeed"],[_,v]],[/\btu_(1491) b/i],[m,[y,"Rotor"],[_,v]],[/(shield[\w ]+) b/i],[m,[y,"Nvidia"],[_,v]],[/(sprint) (\w+)/i],[y,m,[_,p]],[/(kin\.[onetw]{3})/i],[[m,/\./g," "],[y,Ee],[_,p]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[m,[y,Ue],[_,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[m,[y,Ue],[_,p]],[/smart-tv.+(samsung)/i],[y,[_,C]],[/hbbtv.+maple;(\d+)/i],[[m,/^/,"SmartTV"],[y,Be],[_,C]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[y,pe],[_,C]],[/(apple) ?tv/i],[y,[m,te+" TV"],[_,C]],[/crkey/i],[[m,Re+"cast"],[y,ee],[_,C]],[/droid.+aft(\w)( bui|\))/i],[m,[y,z],[_,C]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[m,[y,He],[_,C]],[/(bravia[\w ]+)( bui|\))/i],[m,[y,Ve],[_,C]],[/(mitv-\w{5}) bui/i],[m,[y,Se],[_,C]],[/Hbbtv.*(technisat) (.*);/i],[y,m,[_,C]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[y,$],[m,$],[_,C]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[_,C]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[y,m,[_,b]],[/droid.+; (shield) bui/i],[m,[y,"Nvidia"],[_,b]],[/(playstation [345portablevi]+)/i],[m,[y,Ve],[_,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[m,[y,Ee],[_,b]],[/((pebble))app/i],[y,m,[_,E]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[m,[y,te],[_,E]],[/droid.+; (glass) \d/i],[m,[y,ee],[_,E]],[/droid.+; (wt63?0{2,3})\)/i],[m,[y,Ue],[_,E]],[/(quest( 2| pro)?)/i],[m,[y,ct],[_,E]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[y,[_,R]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[m,[_,p]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[m,[_,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[_,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[_,p]],[/(android[-\w\. ]{0,9});.+buil/i],[m,[y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[k,[w,vt+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[k,[w,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[w,k],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[k,w]],os:[[/microsoft (windows) (vista|xp)/i],[w,k],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[w,[k,M,I]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,"Windows"],[k,M,I]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[k,/_/g,"."],[w,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[w,tt],[k,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[k,w],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[w,k],[/\(bb(10);/i],[k,[w,xe]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[k,[w,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[k,[w,K+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[k,[w,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[k,[w,"watchOS"]],[/crkey\/([\d\.]+)/i],[k,[w,Re+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[w,Ye],k],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[w,k],[/(sunos) ?([\w\.\d]*)/i],[[w,"Solaris"],k],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[w,k]]},q=function(N,U){if(typeof N===u&&(U=N,N=a),!(this instanceof q))return new q(N,U).getResult();var D=typeof n!==l&&n.navigator?n.navigator:a,G=N||(D&&D.userAgent?D.userAgent:o),se=D&&D.userAgentData?D.userAgentData:a,he=U?nt(O,U):O;return this.getBrowser=function(){var B={};return B[w]=a,B[k]=a,P.call(B,G,he.browser),B[g]=S(B[k]),D&&D.brave&&typeof D.brave.isBrave==s&&(B[w]="Brave"),B},this.getCPU=function(){var B={};return B[A]=a,P.call(B,G,he.cpu),B},this.getDevice=function(){var B={};return B[y]=a,B[m]=a,B[_]=a,P.call(B,G,he.device),!B[_]&&se&&se.mobile&&(B[_]=p),B[m]=="Macintosh"&&D&&typeof D.standalone!==l&&D.maxTouchPoints&&D.maxTouchPoints>2&&(B[m]="iPad",B[_]=v),B},this.getEngine=function(){var B={};return B[w]=a,B[k]=a,P.call(B,G,he.engine),B},this.getOS=function(){var B={};return B[w]=a,B[k]=a,P.call(B,G,he.os),!B[w]&&se&&se.platform!="Unknown"&&(B[w]=se.platform.replace(/chrome os/i,Ye).replace(/macos/i,tt)),B},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return G},this.setUA=function(B){return G=typeof B===f&&B.length>X?$(B,X):B,this},this.setUA(G),this};q.VERSION=r,q.BROWSER=d([w,k,g]),q.CPU=d([A]),q.DEVICE=d([m,y,_,b,p,C,v,E,R]),q.ENGINE=q.OS=d([w,k]),e.exports&&(t=e.exports=q),t.UAParser=q;var L=typeof n!==l&&(n.jQuery||n.Zepto);if(L&&!L.ua){var V=new q;L.ua=V.getResult(),L.ua.get=function(){return V.getUA()},L.ua.set=function(N){V.setUA(N);var U=V.getResult();for(var D in U)L.ua[D]=U[D]}}})(typeof window=="object"?window:ir)})(vm,ba);const ym=ba,Dr=e=>(Mr("data-v-c2769628"),e=e(),jr(),e),_m=Dr(()=>c("path",{d:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"},null,-1)),wm=[_m],km=Dr(()=>c("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1)),xm=[km],Cm=Dr(()=>c("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"},null,-1)),Am=[Cm],$m=Vt({__name:"StatusIcons",props:{icon:{type:String,required:!0}},setup(e){return(t,n)=>e.icon==="copy"?(J(),Z("svg",oa({key:0},t.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),wm,16)):e.icon==="success"?(J(),Z("svg",oa({key:1},t.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),xm,16)):e.icon==="failed"?(J(),Z("svg",oa({key:2},t.$attrs,{viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"}),Am,16)):xt("",!0)}});const jo=jn($m,[["__scopeId","data-v-c2769628"]]),Sm={class:"v-code-block--button-copy"},Tm={class:"v-code-block--button-run"},Em={class:"v-code-block--code"},Om=["innerHTML"],Pm=Vt({__name:"CodeBlock",props:{browserWindow:{type:Boolean,required:!1,default:!1},code:{type:[Object,Array,String,Number],required:!0},codeBlockRadius:{type:String,required:!1,default:"0.5rem"},copyButton:{type:Boolean,required:!1,default:!0},copyIcons:{type:Boolean,required:!1,default:!0},copyTab:{type:Boolean,required:!1,default:!0},copyFailedText:{type:String,required:!1,default:"Copy failed!"},copyText:{type:String,required:!1,default:"Copy Code"},copySuccessText:{type:String,required:!1,default:"Copied!"},floatingTabs:{type:Boolean,required:!1,default:!0},height:{type:[String,Number],required:!1,default:"auto"},indent:{type:Number,required:!1,default:2},label:{type:String,required:!1,default:""},lang:{type:String,required:!1,default:"javascript"},maxHeight:{type:[String,Number],required:!1,default:"auto"},persistentCopyButton:{type:Boolean,required:!1,default:!1},runTab:{type:Boolean,required:!1,default:!1},runText:{type:String,required:!1,default:"Run"},tabGap:{type:String,required:!1,default:"0.25rem"},tabs:{type:Boolean,required:!1,default:!1},theme:{type:[String,Boolean],required:!1,default:"neon-bunny"}},emits:["run","update:copy-status"],setup(e,{emit:t}){const n=e,a="1.29.0",r=Rc(),o=ae("codeBlockGlobalOptions"),i=Ce(null),s=Ce("copy"),l=Ce(""),u=Ce(!1),f=Ce(!1),g=Ce(!1),m=Ce(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${a}/themes`),w=Ce(""),_=Ce(""),y=ge(()=>g.value?"v-code-block--mobile":""),k=ge(()=>({width:_.value==="coy"&&f.value===!1?"100%":""})),A=ge(()=>({"v-code-block--code-copy-button":!0,"v-code-block--code-copy-button-mobile":g.value,["v-code-block--code-copy-button-persist"]:n.persistentCopyButton,[`v-code-block--code-copy-button-status-${s.value}`]:!0})),b=ge(()=>({bottom:n.floatingTabs?"1px":"0",gap:te(n.tabGap)})),p=ge(()=>{const K=_.value===""||_.value==="prism"?"default":_.value;return{"v-code-block--me-1":!0,[`v-code-block--tab-${K}-icon`]:!0,[`v-code-block--button-copy-icon-status-${s.value}`]:!0,[`v-code-block--tab-${K}-icon-status-${s.value}`]:!0}}),v=ge(()=>g.value?"v-code-block--label-mobile":""),C=ge(()=>{const K=n.codeBlockRadius;let ee=`${K} 0 ${K} ${K}`;(!n.tabs||!n.copyTab&&!n.runTab)&&(ee=K);const Y=_.value!=="funky"?"flex":"block";return{borderRadius:ee,height:te(n.height),maxHeight:te(n.maxHeight),display:Y}}),E=ge(()=>(z(),Mo.highlight(i.value,Mo.languages[n.lang],n.lang))),R=ge(()=>({[`v-code-block--tab-${_.value===""||_.value==="prism"?"default":_.value}`]:!0})),X=ge(()=>({gap:te(n.tabGap)}));hn(n,()=>{n.theme&&(_.value=n.theme,xe()),n.copyText&&(l.value=n.copyText),n.runText&&(w.value=n.runText)}),Hi(()=>{l.value=n.copyText,w.value=n.runText}),Ui(()=>{_.value=(o==null?void 0:o.theme)||n.theme,xe(),Te()});function z(){if(n.lang==="json"){const K=n.code.toString();i.value=JSON.stringify(JSON.parse(K),null,n.indent);return}i.value=n.code}function te(K,ee="px"){if(!(K==null||K===""))return+K?`${Number(K)}${ee}`:String(K)}function le(){u.value||(u.value=!0,navigator.clipboard.writeText(i.value).then(()=>{l.value=n.copySuccessText,s.value="success",t("update:copy-status",s.value)},K=>{l.value=n.copyFailedText,s.value="failed",t("update:copy-status",s.value),console.error("Copy to clipboard failed: ",K)}),setTimeout(()=>{l.value=n.copyText,s.value="copy",t("update:copy-status",s.value),u.value=!1},3e3))}function xe(){let K=null;const ee=document.getElementsByTagName("head")[0],Y=document.createElement("style"),pe=`v-code-block--theme-${_.value}`,Ee=document.body.getAttribute("data-v-code-block-theme");let _e=!0,oe="";if(Ee!==_.value){switch(document.body.setAttribute("data-v-code-block-theme",`${_.value}`),Y.setAttribute("type","text/css"),Y.setAttribute("data-theme-id",pe),Y.setAttribute("data-theme","v-code-block--theme-sheet"),_.value){case"neon-bunny":K=ls,_e=!1;break;case"neon-bunny-carrot":K=vf,_e=!1;break;case"default":case"prism":_e=!0,oe="prism.css";break;default:_e=!0,oe=`prism-${_.value}.css`;break}if(!_e){Re(),Y.appendChild(document.createTextNode(K)),ee.appendChild(Y);return}f.value=!0,fetch(`${m.value}/${oe}`).then(Be=>Be.text()).then(Be=>{Re(),Y.appendChild(document.createTextNode(Be)),ee.appendChild(Y),f.value=!1}).catch(Be=>{console.error("PrismJS CDN Error:",Be)})}}function Te(){const ee=ym().device;g.value=ee.type==="mobile"}window.addEventListener("orientationchange",()=>{Te()});function Re(){const K=document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');K.length>0&&K.forEach(ee=>{ee.remove()})}function vt(){t("run")}return(K,ee)=>(J(),Z("div",{class:ve(["v-code-block v-code-block--mb-5",T(y)])},[e.label||e.tabs||T(r).label||T(r).tabs?(J(),Z("div",{key:0,class:"v-code-block--header",style:Ct(T(b))},[c("div",{class:ve(["v-code-block--label v-code-block--pb-1",T(v)])},[T(r).label?La(K.$slots,"label",{key:0},void 0,!0):(J(),Z(be,{key:1},[me(ke(n.label),1)],64))],2),c("div",{class:"v-code-block--tabs",style:Ct(T(X))},[T(r).tabs?La(K.$slots,"tabs",{key:0},void 0,!0):(J(),Z(be,{key:1},[e.copyTab&&e.tabs?(J(),Z("div",{key:0,class:ve(["v-code-block--tab",T(R)]),onClick:le},[c("div",Sm,[e.copyIcons?(J(),da(jo,{key:0,class:ve(["v-code-block--button-copy-icon",T(p)]),icon:s.value},null,8,["class","icon"])):xt("",!0),me(" "+ke(l.value),1)])],2)):xt("",!0),e.runTab&&e.tabs&&!g.value?(J(),Z("div",{key:1,class:ve(["v-code-block--tab",T(R)]),onClick:vt},[c("div",Tm,ke(w.value),1)],2)):xt("",!0)],64))],4)],4)):xt("",!0),c("div",Em,[c("div",{class:ve(["v-code-block--code-copy-button",T(A)]),onClick:le},[T(r).copyButton?La(K.$slots,"copyButton",{key:0},void 0,!0):(J(),Z(be,{key:1},[e.copyButton?(J(),da(jo,{key:0,class:ve(["v-code-block--button-copy-icon",T(p)]),icon:s.value},null,8,["class","icon"])):xt("",!0)],64))],2),c("pre",{class:ve(`language-${n.lang}`),style:Ct(T(C))},[me(""),c("code",{class:ve(`language-${n.lang} ${e.browserWindow?"v-code-block--code-browser":""}`),style:Ct(T(k)),innerHTML:T(E)},null,14,Om),me(`
			`)],6)])],2))}});const Hr=jn(Pm,[["__scopeId","data-v-e11f6650"]]);const Fm=(e,t)=>{const n={globalOptions:!0,...t};e.provide("codeBlockGlobalOptions",n),e.component("CodeBlock",Hr)};Hr.install=Fm;function Ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ro(Object(n),!0).forEach(function(a){$e(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ro(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ha(e){return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ha(e)}function Im(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bo(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Nm(e,t,n){return t&&Bo(e.prototype,t),n&&Bo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ur(e,t){return jm(e)||Bm(e,t)||us(e,t)||Lm()}function Rn(e){return Mm(e)||Rm(e)||us(e)||zm()}function Mm(e){if(Array.isArray(e))return lr(e)}function jm(e){if(Array.isArray(e))return e}function Rm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function us(e,t){if(e){if(typeof e=="string")return lr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(e,t)}}function lr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function zm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zo=function(){},qr={},fs={},ds=null,ps={mark:zo,measure:zo};try{typeof window<"u"&&(qr=window),typeof document<"u"&&(fs=document),typeof MutationObserver<"u"&&(ds=MutationObserver),typeof performance<"u"&&(ps=performance)}catch{}var Dm=qr.navigator||{},Lo=Dm.userAgent,Do=Lo===void 0?"":Lo,Et=qr,de=fs,Ho=ds,Vn=ps;Et.document;var gt=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",ms=~Do.indexOf("MSIE")||~Do.indexOf("Trident/"),Yn,Kn,Gn,Jn,Xn,pt="___FONT_AWESOME___",cr=16,bs="fa",hs="svg-inline--fa",qt="data-fa-i2svg",ur="data-fa-pseudo-element",Hm="data-fa-pseudo-element-pending",Wr="data-prefix",Vr="data-icon",Uo="fontawesome-i2svg",Um="async",qm=["HTML","HEAD","STYLE","SCRIPT"],gs=function(){try{return!0}catch{return!1}}(),fe="classic",ye="sharp",Yr=[fe,ye];function Bn(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[fe]}})}var On=Bn((Yn={},$e(Yn,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),$e(Yn,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Yn)),Pn=Bn((Kn={},$e(Kn,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$e(Kn,ye,{solid:"fass",regular:"fasr"}),Kn)),Fn=Bn((Gn={},$e(Gn,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$e(Gn,ye,{fass:"fa-solid",fasr:"fa-regular"}),Gn)),Wm=Bn((Jn={},$e(Jn,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$e(Jn,ye,{"fa-solid":"fass","fa-regular":"fasr"}),Jn)),Vm=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,vs="fa-layers-text",Ym=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Km=Bn((Xn={},$e(Xn,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$e(Xn,ye,{900:"fass",400:"fasr"}),Xn)),ys=[1,2,3,4,5,6,7,8,9,10],Gm=ys.concat([11,12,13,14,15,16,17,18,19,20]),Jm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=new Set;Object.keys(Pn[fe]).map(In.add.bind(In));Object.keys(Pn[ye]).map(In.add.bind(In));var Xm=[].concat(Yr,Rn(In),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lt.GROUP,Lt.SWAP_OPACITY,Lt.PRIMARY,Lt.SECONDARY]).concat(ys.map(function(e){return"".concat(e,"x")})).concat(Gm.map(function(e){return"w-".concat(e)})),_n=Et.FontAwesomeConfig||{};function Zm(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var eb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];eb.forEach(function(e){var t=Ur(e,2),n=t[0],a=t[1],r=Qm(Zm(n));r!=null&&(_n[a]=r)})}var _s={styleDefault:"solid",familyDefault:"classic",cssPrefix:bs,replacementClass:hs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_n.familyPrefix&&(_n.cssPrefix=_n.familyPrefix);var sn=H(H({},_s),_n);sn.autoReplaceSvg||(sn.observeMutations=!1);var W={};Object.keys(_s).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(n){sn[e]=n,wn.forEach(function(a){return a(W)})},get:function(){return sn[e]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(t){sn.cssPrefix=t,wn.forEach(function(n){return n(W)})},get:function(){return sn.cssPrefix}});Et.FontAwesomeConfig=W;var wn=[];function tb(e){return wn.push(e),function(){wn.splice(wn.indexOf(e),1)}}var wt=cr,st={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nb(e){if(!(!e||!gt)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return de.head.insertBefore(t,a),e}}var ab="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nn(){for(var e=12,t="";e-- >0;)t+=ab[Math.random()*62|0];return t}function fn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kr(e){return e.classList?fn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ws(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rb(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ws(e[n]),'" ')},"").trim()}function Na(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Gr(e){return e.size!==st.size||e.x!==st.x||e.y!==st.y||e.rotate!==st.rotate||e.flipX||e.flipY}function ob(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function ib(e){var t=e.transform,n=e.width,a=n===void 0?cr:n,r=e.height,o=r===void 0?cr:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&ms?l+="translate(".concat(t.x/wt-a/2,"em, ").concat(t.y/wt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/wt,"em), calc(-50% + ").concat(t.y/wt,"em)) "):l+="translate(".concat(t.x/wt,"em, ").concat(t.y/wt,"em) "),l+="scale(".concat(t.size/wt*(t.flipX?-1:1),", ").concat(t.size/wt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var sb=`:root, :host {
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
}`;function ks(){var e=bs,t=hs,n=W.cssPrefix,a=W.replacementClass,r=sb;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var qo=!1;function qa(){W.autoAddCss&&!qo&&(nb(ks()),qo=!0)}var lb={mixout:function(){return{dom:{css:ks,insertCss:qa}}},hooks:function(){return{beforeDOMElementCreation:function(){qa()},beforeI2svg:function(){qa()}}}},mt=Et||{};mt[pt]||(mt[pt]={});mt[pt].styles||(mt[pt].styles={});mt[pt].hooks||(mt[pt].hooks={});mt[pt].shims||(mt[pt].shims=[]);var Ze=mt[pt],xs=[],cb=function e(){de.removeEventListener("DOMContentLoaded",e),ga=1,xs.map(function(t){return t()})},ga=!1;gt&&(ga=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),ga||de.addEventListener("DOMContentLoaded",cb));function ub(e){gt&&(ga?setTimeout(e,0):xs.push(e))}function zn(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?ws(e):"<".concat(t," ").concat(rb(a),">").concat(o.map(zn).join(""),"</").concat(t,">")}function Wo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fb=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Wa=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?fb(n,r):n,l,u,f;for(a===void 0?(l=1,f=t[o[0]]):(l=0,f=a);l<i;l++)u=o[l],f=s(f,t[u],u,t);return f};function db(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function fr(e){var t=db(e);return t.length===1?t[0].toString(16):null}function pb(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Vo(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=Vo(t);typeof Ze.hooks.addPack=="function"&&!r?Ze.hooks.addPack(e,Vo(t)):Ze.styles[e]=H(H({},Ze.styles[e]||{}),o),e==="fas"&&dr("fa",t)}var Zn,Qn,ea,Gt=Ze.styles,mb=Ze.shims,bb=(Zn={},$e(Zn,fe,Object.values(Fn[fe])),$e(Zn,ye,Object.values(Fn[ye])),Zn),Jr=null,Cs={},As={},$s={},Ss={},Ts={},hb=(Qn={},$e(Qn,fe,Object.keys(On[fe])),$e(Qn,ye,Object.keys(On[ye])),Qn);function gb(e){return~Xm.indexOf(e)}function vb(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!gb(r)?r:null}var Es=function(){var t=function(o){return Wa(Gt,function(i,s,l){return i[l]=Wa(s,o,{}),i},{})};Cs=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),As=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),Ts=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in Gt||W.autoFetchSvg,a=Wa(mb,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});$s=a.names,Ss=a.unicodes,Jr=Ma(W.styleDefault,{family:W.familyDefault})};tb(function(e){Jr=Ma(e.styleDefault,{family:W.familyDefault})});Es();function Xr(e,t){return(Cs[e]||{})[t]}function yb(e,t){return(As[e]||{})[t]}function Dt(e,t){return(Ts[e]||{})[t]}function Os(e){return $s[e]||{prefix:null,iconName:null}}function _b(e){var t=Ss[e],n=Xr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ot(){return Jr}var Zr=function(){return{prefix:null,iconName:null,rest:[]}};function Ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?fe:n,r=On[a][e],o=Pn[a][e]||Pn[a][r],i=e in Ze.styles?e:null;return o||i||null}var Yo=(ea={},$e(ea,fe,Object.keys(Fn[fe])),$e(ea,ye,Object.keys(Fn[ye])),ea);function ja(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(t={},$e(t,fe,"".concat(W.cssPrefix,"-").concat(fe)),$e(t,ye,"".concat(W.cssPrefix,"-").concat(ye)),t),i=null,s=fe;(e.includes(o[fe])||e.some(function(u){return Yo[fe].includes(u)}))&&(s=fe),(e.includes(o[ye])||e.some(function(u){return Yo[ye].includes(u)}))&&(s=ye);var l=e.reduce(function(u,f){var g=vb(W.cssPrefix,f);if(Gt[f]?(f=bb[s].includes(f)?Wm[s][f]:f,i=f,u.prefix=f):hb[s].indexOf(f)>-1?(i=f,u.prefix=Ma(f,{family:s})):g?u.iconName=g:f!==W.replacementClass&&f!==o[fe]&&f!==o[ye]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var m=i==="fa"?Os(u.iconName):{},w=Dt(u.prefix,u.iconName);m.prefix&&(i=null),u.iconName=m.iconName||w||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!Gt.far&&Gt.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},Zr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ye&&(Gt.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=Dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Ot()||"fas"),l}var wb=function(){function e(){Im(this,e),this.definitions={}}return Nm(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=H(H({},n.definitions[s]||{}),i[s]),dr(s,i[s]);var l=Fn[fe][s];l&&dr(l,i[s]),Es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(g){typeof g=="string"&&(n[s][g]=u)}),n[s][l]=u}),n}}]),e}(),Ko=[],Jt={},tn={},kb=Object.keys(tn);function xb(e,t){var n=t.mixoutsTo;return Ko=e,Jt={},Object.keys(tn).forEach(function(a){kb.indexOf(a)===-1&&delete tn[a]}),Ko.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),ha(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){Jt[i]||(Jt[i]=[]),Jt[i].push(o[i])})}a.provides&&a.provides(tn)}),n}function pr(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=Jt[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function Wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Jt[e]||[];r.forEach(function(o){o.apply(null,n)})}function bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return tn[e]?tn[e].apply(null,t):void 0}function mr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ot();if(t)return t=Dt(n,t)||t,Wo(Ps.definitions,n,t)||Wo(Ze.styles,n,t)}var Ps=new wb,Cb=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Wt("noAuto")},Ab={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gt?(Wt("beforeI2svg",t),bt("pseudoElements2svg",t),bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,ub(function(){Sb({autoReplaceSvgRoot:n}),Wt("watch",t)})}},$b={icon:function(t){if(t===null)return null;if(ha(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Ma(t[0]);return{prefix:a,iconName:Dt(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(W.cssPrefix,"-"))>-1||t.match(Vm))){var r=ja(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ot(),iconName:Dt(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=Ot();return{prefix:o,iconName:Dt(o,t)||t}}}},We={noAuto:Cb,config:W,dom:Ab,parse:$b,library:Ps,findIconDefinition:mr,toHtml:zn},Sb=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?de:n;(Object.keys(Ze.styles).length>0||W.autoFetchSvg)&&gt&&W.autoReplaceSvg&&We.dom.i2svg({node:a})};function Ra(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return zn(a)})}}),Object.defineProperty(e,"node",{get:function(){if(gt){var a=de.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Tb(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(Gr(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=Na(H(H({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Eb(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(W.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},r),{},{id:i}),children:a}]}]}function Qr(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,g=e.extra,m=e.watchable,w=m===void 0?!1:m,_=a.found?a:n,y=_.width,k=_.height,A=r==="fak",b=[W.replacementClass,o?"".concat(W.cssPrefix,"-").concat(o):""].filter(function(z){return g.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(g.classes).join(" "),p={children:[],attributes:H(H({},g.attributes),{},{"data-prefix":r,"data-icon":o,class:b,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(k)})},v=A&&!~g.classes.indexOf("fa-fw")?{width:"".concat(y/k*16*.0625,"em")}:{};w&&(p.attributes[qt]=""),l&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||Nn())},children:[l]}),delete p.attributes.title);var C=H(H({},p),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:s,styles:H(H({},v),g.styles)}),E=a.found&&n.found?bt("generateAbstractMask",C)||{children:[],attributes:{}}:bt("generateAbstractIcon",C)||{children:[],attributes:{}},R=E.children,X=E.attributes;return C.children=R,C.attributes=X,s?Eb(C):Tb(C)}function Go(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,u=H(H(H({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[qt]="");var f=H({},i.styles);Gr(r)&&(f.transform=ib({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var g=Na(f);g.length>0&&(u.style=g);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Ob(e){var t=e.content,n=e.title,a=e.extra,r=H(H(H({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Na(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Va=Ze.styles;function br(e){var t=e[0],n=e[1],a=e.slice(4),r=Ur(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Lt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Lt.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var Pb={found:!1,width:512,height:512};function Fb(e,t){!gs&&!W.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function hr(e,t){var n=t;return t==="fa"&&W.styleDefault!==null&&(t=Ot()),new Promise(function(a,r){if(bt("missingIconAbstract"),n==="fa"){var o=Os(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Va[t]&&Va[t][e]){var i=Va[t][e];return a(br(i))}Fb(e,t),a(H(H({},Pb),{},{icon:W.showMissingIcons&&e?bt("missingIconAbstract")||{}:{}}))})}var Jo=function(){},gr=W.measurePerformance&&Vn&&Vn.mark&&Vn.measure?Vn:{mark:Jo,measure:Jo},mn='FA "6.3.0"',Ib=function(t){return gr.mark("".concat(mn," ").concat(t," begins")),function(){return Fs(t)}},Fs=function(t){gr.mark("".concat(mn," ").concat(t," ends")),gr.measure("".concat(mn," ").concat(t),"".concat(mn," ").concat(t," begins"),"".concat(mn," ").concat(t," ends"))},eo={begin:Ib,end:Fs},ia=function(){};function Xo(e){var t=e.getAttribute?e.getAttribute(qt):null;return typeof t=="string"}function Nb(e){var t=e.getAttribute?e.getAttribute(Wr):null,n=e.getAttribute?e.getAttribute(Vr):null;return t&&n}function Mb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function jb(){if(W.autoReplaceSvg===!0)return sa.replace;var e=sa[W.autoReplaceSvg];return e||sa.replace}function Rb(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function Bb(e){return de.createElement(e)}function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Rb:Bb:n;if(typeof e=="string")return de.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(Is(i,{ceFn:a}))}),r}function zb(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Is(r),n)}),n.getAttribute(qt)===null&&W.keepOriginalSource){var a=de.createComment(zb(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Kr(n).indexOf(W.replacementClass))return sa.replace(t);var r=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===W.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return zn(s)}).join(`
`);n.setAttribute(qt,""),n.innerHTML=i}};function Zo(e){e()}function Ns(e,t){var n=typeof t=="function"?t:ia;if(e.length===0)n();else{var a=Zo;W.mutateApproach===Um&&(a=Et.requestAnimationFrame||Zo),a(function(){var r=jb(),o=eo.begin("mutate");e.map(r),o(),n()})}}var to=!1;function Ms(){to=!0}function vr(){to=!1}var va=null;function Qo(e){if(Ho&&W.observeMutations){var t=e.treeCallback,n=t===void 0?ia:t,a=e.nodeCallback,r=a===void 0?ia:a,o=e.pseudoElementsCallback,i=o===void 0?ia:o,s=e.observeMutationsRoot,l=s===void 0?de:s;va=new Ho(function(u){if(!to){var f=Ot();fn(u).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!Xo(g.addedNodes[0])&&(W.searchPseudoElements&&i(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&W.searchPseudoElements&&i(g.target.parentNode),g.type==="attributes"&&Xo(g.target)&&~Jm.indexOf(g.attributeName))if(g.attributeName==="class"&&Nb(g.target)){var m=ja(Kr(g.target)),w=m.prefix,_=m.iconName;g.target.setAttribute(Wr,w||f),_&&g.target.setAttribute(Vr,_)}else Mb(g.target)&&r(g.target)})}}),gt&&va.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lb(){va&&va.disconnect()}function Db(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Hb(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=ja(Kr(e));return r.prefix||(r.prefix=Ot()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=yb(r.prefix,e.innerText)||Xr(r.prefix,fr(e.innerText))),!r.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ub(e){var t=fn(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return W.autoA11y&&(n?t["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(a||Nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function qb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:st,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hb(e),a=n.iconName,r=n.prefix,o=n.rest,i=Ub(e),s=pr("parseNodeAttributes",{},e),l=t.styleParser?Db(e):[];return H({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:st,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Wb=Ze.styles;function js(e){var t=W.autoReplaceSvg==="nest"?ei(e,{styleParser:!1}):ei(e);return~t.extra.classes.indexOf(vs)?bt("generateLayersText",e,t):bt("generateSvgReplacementMutation",e,t)}var Pt=new Set;Yr.map(function(e){Pt.add("fa-".concat(e))});Object.keys(On[fe]).map(Pt.add.bind(Pt));Object.keys(On[ye]).map(Pt.add.bind(Pt));Pt=Rn(Pt);function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gt)return Promise.resolve();var n=de.documentElement.classList,a=function(g){return n.add("".concat(Uo,"-").concat(g))},r=function(g){return n.remove("".concat(Uo,"-").concat(g))},o=W.autoFetchSvg?Pt:Yr.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Wb));o.includes("fa")||o.push("fa");var i=[".".concat(vs,":not([").concat(qt,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(qt,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=fn(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=eo.begin("onTree"),u=s.reduce(function(f,g){try{var m=js(g);m&&f.push(m)}catch(w){gs||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,g){Promise.all(u).then(function(m){Ns(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(m){l(),g(m)})})}function Vb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;js(e).then(function(n){n&&Ns([n],t)})}function Yb(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:mr(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:mr(r||{})),e(a,H(H({},n),{},{mask:r}))}}var Kb=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?st:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,g=n.title,m=g===void 0?null:g,w=n.titleId,_=w===void 0?null:w,y=n.classes,k=y===void 0?[]:y,A=n.attributes,b=A===void 0?{}:A,p=n.styles,v=p===void 0?{}:p;if(t){var C=t.prefix,E=t.iconName,R=t.icon;return Ra(H({type:"icon"},t),function(){return Wt("beforeDOMElementCreation",{iconDefinition:t,params:n}),W.autoA11y&&(m?b["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(_||Nn()):(b["aria-hidden"]="true",b.focusable="false")),Qr({icons:{main:br(R),mask:l?br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:E,transform:H(H({},st),r),symbol:i,title:m,maskId:f,titleId:_,extra:{attributes:b,styles:v,classes:k}})})}},Gb={mixout:function(){return{icon:Yb(Kb)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ti,n.nodeCallback=Vb,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?de:a,o=n.callback,i=o===void 0?function(){}:o;return ti(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,f=a.mask,g=a.maskId,m=a.extra;return new Promise(function(w,_){Promise.all([hr(r,s),f.iconName?hr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var k=Ur(y,2),A=k[0],b=k[1];w([n,Qr({icons:{main:A,mask:b},prefix:s,iconName:r,transform:l,symbol:u,maskId:g,title:o,titleId:i,extra:m,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=Na(s);l.length>0&&(r.style=l);var u;return Gr(i)&&(u=bt("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Jb={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Ra({type:"layer"},function(){Wt("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Rn(o)).join(" ")},children:i}]})}}}},Xb={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,f=a.styles,g=f===void 0?{}:f;return Ra({type:"counter",content:n},function(){return Wt("beforeDOMElementCreation",{content:n,params:a}),Ob({content:n.toString(),title:o,extra:{attributes:u,styles:g,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Rn(s))}})})}}}},Zb={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?st:r,i=a.title,s=i===void 0?null:i,l=a.classes,u=l===void 0?[]:l,f=a.attributes,g=f===void 0?{}:f,m=a.styles,w=m===void 0?{}:m;return Ra({type:"text",content:n},function(){return Wt("beforeDOMElementCreation",{content:n,params:a}),Go({content:n,transform:H(H({},st),o),title:s,extra:{attributes:g,styles:w,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Rn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(ms){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return W.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Go({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},Qb=new RegExp('"',"ug"),ni=[1105920,1112319];function eh(e){var t=e.replace(Qb,""),n=pb(t,0),a=n>=ni[0]&&n<=ni[1],r=t.length===2?t[0]===t[1]:!1;return{value:fr(r?t[0]:t),isSecondary:a||r}}function ai(e,t){var n="".concat(Hm).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=fn(e.children),i=o.filter(function(R){return R.getAttribute(ur)===t})[0],s=Et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ym),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&f!=="none"&&f!==""){var g=s.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?ye:fe,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[m][l[2].toLowerCase()]:Km[m][u],_=eh(g),y=_.value,k=_.isSecondary,A=l[0].startsWith("FontAwesome"),b=Xr(w,y),p=b;if(A){var v=_b(y);v.iconName&&v.prefix&&(b=v.iconName,w=v.prefix)}if(b&&!k&&(!i||i.getAttribute(Wr)!==w||i.getAttribute(Vr)!==p)){e.setAttribute(n,p),i&&e.removeChild(i);var C=qb(),E=C.extra;E.attributes[ur]=t,hr(b,w).then(function(R){var X=Qr(H(H({},C),{},{icons:{main:R,mask:Zr()},prefix:w,iconName:p,extra:E,watchable:!0})),z=de.createElement("svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=X.map(function(te){return zn(te)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function th(e){return Promise.all([ai(e,"::before"),ai(e,"::after")])}function nh(e){return e.parentNode!==document.head&&!~qm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ur)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ri(e){if(gt)return new Promise(function(t,n){var a=fn(e.querySelectorAll("*")).filter(nh).map(th),r=eo.begin("searchPseudoElements");Ms(),Promise.all(a).then(function(){r(),vr(),t()}).catch(function(){r(),vr(),n()})})}var ah={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ri,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?de:a;W.searchPseudoElements&&ri(r)}}},oi=!1,rh={mixout:function(){return{dom:{unwatch:function(){Ms(),oi=!0}}}},hooks:function(){return{bootstrap:function(){Qo(pr("mutationObserverCallbacks",{}))},noAuto:function(){Lb()},watch:function(n){var a=n.observeMutationsRoot;oi?vr():Qo(pr("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ii=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},oh={mixout:function(){return{parse:{transform:function(n){return ii(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=ii(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),g={transform:"".concat(l," ").concat(u," ").concat(f)},m={transform:"translate(".concat(i/2*-1," -256)")},w={outer:s,inner:g,path:m};return{tag:"g",attributes:H({},w.outer),children:[{tag:"g",attributes:H({},w.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:H(H({},a.icon.attributes),w.path)}]}]}}}},Ya={x:0,y:0,width:"100%",height:"100%"};function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ih(e){return e.tag==="g"?e.children:[e]}var sh={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?ja(r.split(" ").map(function(i){return i.trim()})):Zr();return o.prefix||(o.prefix=Ot()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,f=o.icon,g=i.width,m=i.icon,w=ob({transform:l,containerWidth:g,iconWidth:u}),_={tag:"rect",attributes:H(H({},Ya),{},{fill:"white"})},y=f.children?{children:f.children.map(si)}:{},k={tag:"g",attributes:H({},w.inner),children:[si(H({tag:f.tag,attributes:H(H({},f.attributes),w.path)},y))]},A={tag:"g",attributes:H({},w.outer),children:[k]},b="mask-".concat(s||Nn()),p="clip-".concat(s||Nn()),v={tag:"mask",attributes:H(H({},Ya),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,A]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:ih(m)},v]};return a.push(C,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(b,")")},Ya)}),{children:a,attributes:r}}}},lh={provides:function(t){var n=!1;Et.matchMedia&&(n=Et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:H(H({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=H(H({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:H(H({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:H(H({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:H(H({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:H(H({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:H(H({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ch={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},uh=[lb,Gb,Jb,Xb,Zb,ah,rh,oh,sh,lh,ch];xb(uh,{mixoutsTo:We});We.noAuto;var Rs=We.config,fh=We.library;We.dom;var ya=We.parse;We.findIconDefinition;We.toHtml;var dh=We.icon;We.layer;var ph=We.text;We.counter;function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(a){ze(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function _a(e){return _a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_a(e)}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mh(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function bh(e,t){if(e==null)return{};var n=mh(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function yr(e){return hh(e)||gh(e)||vh(e)||yh()}function hh(e){if(Array.isArray(e))return _r(e)}function gh(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vh(e,t){if(e){if(typeof e=="string")return _r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _r(e,t)}}function _r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function yh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bs={exports:{}};(function(e){(function(t){var n=function(A,b,p){if(!u(b)||g(b)||m(b)||w(b)||l(b))return b;var v,C=0,E=0;if(f(b))for(v=[],E=b.length;C<E;C++)v.push(n(A,b[C],p));else{v={};for(var R in b)Object.prototype.hasOwnProperty.call(b,R)&&(v[A(R,p)]=n(A,b[R],p))}return v},a=function(A,b){b=b||{};var p=b.separator||"_",v=b.split||/(?=[A-Z])/;return A.split(v).join(p)},r=function(A){return _(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(b,p){return p?p.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},o=function(A){var b=r(A);return b.substr(0,1).toUpperCase()+b.substr(1)},i=function(A,b){return a(A,b).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},u=function(A){return A===Object(A)},f=function(A){return s.call(A)=="[object Array]"},g=function(A){return s.call(A)=="[object Date]"},m=function(A){return s.call(A)=="[object RegExp]"},w=function(A){return s.call(A)=="[object Boolean]"},_=function(A){return A=A-0,A===A},y=function(A,b){var p=b&&"process"in b?b.process:b;return typeof p!="function"?A:function(v,C){return p(v,A,C)}},k={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(A,b){return n(y(r,b),A)},decamelizeKeys:function(A,b){return n(y(i,b),A,b)},pascalizeKeys:function(A,b){return n(y(o,b),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:t.humps=k})(_h)})(Bs);var wh=Bs.exports,kh=["class","style"];function xh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=wh.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return t[r]=o,t},{})}function Ch(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function no(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return no(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.class=Ch(f);break;case"style":l.style=xh(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,i=o===void 0?{}:o,s=bh(n,kh);return is(e.tag,Je(Je(Je({},t),{},{class:r.class,style:Je(Je({},r.style),i)},r.attrs),s),a)}var zs=!1;try{zs=!0}catch{}function Ah(){if(!zs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ze({},e,t):{}}function $h(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ze(t,"fa-".concat(e.size),e.size!==null),ze(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ze(t,"fa-pull-".concat(e.pull),e.pull!==null),ze(t,"fa-swap-opacity",e.swapOpacity),ze(t,"fa-bounce",e.bounce),ze(t,"fa-shake",e.shake),ze(t,"fa-beat",e.beat),ze(t,"fa-fade",e.fade),ze(t,"fa-beat-fade",e.beatFade),ze(t,"fa-flash",e.flash),ze(t,"fa-spin-pulse",e.spinPulse),ze(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function ci(e){if(e&&_a(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ya.icon)return ya.icon(e);if(e===null)return null;if(_a(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Sh=Vt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=ge(function(){return ci(t.icon)}),o=ge(function(){return kn("classes",$h(t))}),i=ge(function(){return kn("transform",typeof t.transform=="string"?ya.transform(t.transform):t.transform)}),s=ge(function(){return kn("mask",ci(t.mask))}),l=ge(function(){return dh(r.value,Je(Je(Je(Je({},o.value),i.value),s.value),{},{symbol:t.symbol,title:t.title}))});hn(l,function(f){if(!f)return Ah("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=ge(function(){return l.value?no(l.value.abstract[0],{},a):null});return function(){return u.value}}});Vt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var a=n.slots,r=Rs.familyPrefix,o=ge(function(){return["".concat(r,"-layers")].concat(yr(t.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return is("div",{class:o.value},a.default?a.default():[])}}});Vt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var a=n.attrs,r=Rs.familyPrefix,o=ge(function(){return kn("classes",[].concat(yr(t.counter?["".concat(r,"-layers-counter")]:[]),yr(t.position?["".concat(r,"-layers-").concat(t.position)]:[])))}),i=ge(function(){return kn("transform",typeof t.transform=="string"?ya.transform(t.transform):t.transform)}),s=ge(function(){var u=ph(t.value.toString(),Je(Je({},i.value),o.value)),f=u.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=ge(function(){return no(s.value,{},a)});return function(){return l.value}}});var Th={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Eh={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},Oh={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ph={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"]};fh.add({faCopyright:Eh,faGithub:Oh,faHouse:Th,faNpm:Ph});cu(gm).use(Hr,{theme:"neon-bunny"}).component("fa-icon",Sh).mount("#app");
