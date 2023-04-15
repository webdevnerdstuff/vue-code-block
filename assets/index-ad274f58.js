function sc(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const r=Object.getOwnPropertyDescriptor(a,s);r&&Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Us(e,n){const t=Object.create(null),a=e.split(",");for(let s=0;s<a.length;s++)t[a[s]]=!0;return n?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function Tn(e){if(re(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],s=Pe(a)?ic(a):Tn(a);if(s)for(const r in s)n[r]=s[r]}return n}else{if(Pe(e))return e;if(Ee(e))return e}}const rc=/;(?![^(]*\))/g,oc=/:([^]+)/,lc=/\/\*.*?\*\//gs;function ic(e){const n={};return e.replace(lc,"").split(rc).forEach(t=>{if(t){const a=t.split(oc);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Se(e){let n="";if(Pe(e))n=e;else if(re(e))for(let t=0;t<e.length;t++){const a=Se(e[t]);a&&(n+=a+" ")}else if(Ee(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uc=Us(cc);function Jo(e){return!!e||e===""}function hc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=Pa(e[a],n[a]);return t}function Pa(e,n){if(e===n)return!0;let t=Mr(e),a=Mr(n);if(t||a)return t&&a?e.getTime()===n.getTime():!1;if(t=Mt(e),a=Mt(n),t||a)return e===n;if(t=re(e),a=re(n),t||a)return t&&a?hc(e,n):!1;if(t=Ee(e),a=Ee(n),t||a){if(!t||!a)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),i=n.hasOwnProperty(o);if(l&&!i||!l&&i||!Pa(e[o],n[o]))return!1}}return String(e)===String(n)}function Zo(e,n){return e.findIndex(t=>Pa(t,n))}const xe=e=>Pe(e)?e:e==null?"":re(e)||Ee(e)&&(e.toString===el||!he(e.toString))?JSON.stringify(e,Xo,2):String(e),Xo=(e,n)=>n&&n.__v_isRef?Xo(e,n.value):it(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,s])=>(t[`${a} =>`]=s,t),{})}:Fa(n)?{[`Set(${n.size})`]:[...n.values()]}:Ee(n)&&!re(n)&&!nl(n)?String(n):n,Te={},lt=[],rn=()=>{},gc=()=>!1,dc=/^on[^a-z]/,Ba=e=>dc.test(e),Hs=e=>e.startsWith("onUpdate:"),Ve=Object.assign,qs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},fc=Object.prototype.hasOwnProperty,be=(e,n)=>fc.call(e,n),re=Array.isArray,it=e=>Kt(e)==="[object Map]",Fa=e=>Kt(e)==="[object Set]",Mr=e=>Kt(e)==="[object Date]",he=e=>typeof e=="function",Pe=e=>typeof e=="string",Mt=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",Qo=e=>Ee(e)&&he(e.then)&&he(e.catch),el=Object.prototype.toString,Kt=e=>el.call(e),pc=e=>Kt(e).slice(8,-1),nl=e=>Kt(e)==="[object Object]",Ws=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pa=Us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},bc=/-(\w)/g,dn=Da(e=>e.replace(bc,(n,t)=>t?t.toUpperCase():"")),mc=/\B([A-Z])/g,mt=Da(e=>e.replace(mc,"-$1").toLowerCase()),za=Da(e=>e.charAt(0).toUpperCase()+e.slice(1)),as=Da(e=>e?`on${za(e)}`:""),$t=(e,n)=>!Object.is(e,n),ba=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},_a=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},ps=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let $r;const yc=()=>$r||($r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Xe;class tl{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!n&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Xe;try{return Xe=this,n()}finally{Xe=t}}}on(){Xe=this}off(){Xe=this.parent}stop(n){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function al(e){return new tl(e)}function vc(e,n=Xe){n&&n.active&&n.effects.push(e)}function sl(){return Xe}function jc(e){Xe&&Xe.cleanups.push(e)}const Gs=e=>{const n=new Set(e);return n.w=0,n.n=0,n},rl=e=>(e.w&Mn)>0,ol=e=>(e.n&Mn)>0,_c=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Mn},wc=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const s=n[a];rl(s)&&!ol(s)?s.delete(e):n[t++]=s,s.w&=~Mn,s.n&=~Mn}n.length=t}},wa=new WeakMap;let wt=0,Mn=1;const bs=30;let nn;const Kn=Symbol(""),ms=Symbol("");class Vs{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,vc(this,a)}run(){if(!this.active)return this.fn();let n=nn,t=An;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=nn,nn=this,An=!0,Mn=1<<++wt,wt<=bs?_c(this):Ir(this),this.fn()}finally{wt<=bs&&wc(this),Mn=1<<--wt,nn=this.parent,An=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(Ir(this),this.onStop&&this.onStop(),this.active=!1)}}function Ir(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let An=!0;const ll=[];function yt(){ll.push(An),An=!1}function vt(){const e=ll.pop();An=e===void 0?!0:e}function Je(e,n,t){if(An&&nn){let a=wa.get(e);a||wa.set(e,a=new Map);let s=a.get(t);s||a.set(t,s=Gs()),il(s)}}function il(e,n){let t=!1;wt<=bs?ol(e)||(e.n|=Mn,t=!rl(e)):t=!e.has(nn),t&&(e.add(nn),nn.deps.push(e))}function bn(e,n,t,a,s,r){const o=wa.get(e);if(!o)return;let l=[];if(n==="clear")l=[...o.values()];else if(t==="length"&&re(e)){const i=Number(a);o.forEach((c,u)=>{(u==="length"||u>=i)&&l.push(c)})}else switch(t!==void 0&&l.push(o.get(t)),n){case"add":re(e)?Ws(t)&&l.push(o.get("length")):(l.push(o.get(Kn)),it(e)&&l.push(o.get(ms)));break;case"delete":re(e)||(l.push(o.get(Kn)),it(e)&&l.push(o.get(ms)));break;case"set":it(e)&&l.push(o.get(Kn));break}if(l.length===1)l[0]&&ys(l[0]);else{const i=[];for(const c of l)c&&i.push(...c);ys(Gs(i))}}function ys(e,n){const t=re(e)?e:[...e];for(const a of t)a.computed&&Rr(a);for(const a of t)a.computed||Rr(a)}function Rr(e,n){(e!==nn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function kc(e,n){var t;return(t=wa.get(e))===null||t===void 0?void 0:t.get(n)}const xc=Us("__proto__,__v_isRef,__isVue"),cl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt)),Ec=Ks(),Sc=Ks(!1,!0),Tc=Ks(!0),Lr=Cc();function Cc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=me(this);for(let r=0,o=this.length;r<o;r++)Je(a,"get",r+"");const s=a[n](...t);return s===-1||s===!1?a[n](...t.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){yt();const a=me(this)[n].apply(this,t);return vt(),a}}),e}function Ac(e){const n=me(this);return Je(n,"has",e),n.hasOwnProperty(e)}function Ks(e=!1,n=!1){return function(a,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return n;if(s==="__v_raw"&&r===(e?n?Wc:fl:n?dl:gl).get(a))return a;const o=re(a);if(!e){if(o&&be(Lr,s))return Reflect.get(Lr,s,r);if(s==="hasOwnProperty")return Ac}const l=Reflect.get(a,s,r);return(Mt(s)?cl.has(s):xc(s))||(e||Je(a,"get",s),n)?l:Re(l)?o&&Ws(s)?l:l.value:Ee(l)?e?pl(l):Ha(l):l}}const Oc=ul(),Nc=ul(!0);function ul(e=!1){return function(t,a,s,r){let o=t[a];if(gt(o)&&Re(o)&&!Re(s))return!1;if(!e&&(!ka(s)&&!gt(s)&&(o=me(o),s=me(s)),!re(t)&&Re(o)&&!Re(s)))return o.value=s,!0;const l=re(t)&&Ws(a)?Number(a)<t.length:be(t,a),i=Reflect.set(t,a,s,r);return t===me(r)&&(l?$t(s,o)&&bn(t,"set",a,s):bn(t,"add",a,s)),i}}function Mc(e,n){const t=be(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&bn(e,"delete",n,void 0),a}function $c(e,n){const t=Reflect.has(e,n);return(!Mt(n)||!cl.has(n))&&Je(e,"has",n),t}function Ic(e){return Je(e,"iterate",re(e)?"length":Kn),Reflect.ownKeys(e)}const hl={get:Ec,set:Oc,deleteProperty:Mc,has:$c,ownKeys:Ic},Rc={get:Tc,set(e,n){return!0},deleteProperty(e,n){return!0}},Lc=Ve({},hl,{get:Sc,set:Nc}),Ys=e=>e,Ua=e=>Reflect.getPrototypeOf(e);function Xt(e,n,t=!1,a=!1){e=e.__v_raw;const s=me(e),r=me(n);t||(n!==r&&Je(s,"get",n),Je(s,"get",r));const{has:o}=Ua(s),l=a?Ys:t?Xs:It;if(o.call(s,n))return l(e.get(n));if(o.call(s,r))return l(e.get(r));e!==s&&e.get(n)}function Qt(e,n=!1){const t=this.__v_raw,a=me(t),s=me(e);return n||(e!==s&&Je(a,"has",e),Je(a,"has",s)),e===s?t.has(e):t.has(e)||t.has(s)}function ea(e,n=!1){return e=e.__v_raw,!n&&Je(me(e),"iterate",Kn),Reflect.get(e,"size",e)}function Pr(e){e=me(e);const n=me(this);return Ua(n).has.call(n,e)||(n.add(e),bn(n,"add",e,e)),this}function Br(e,n){n=me(n);const t=me(this),{has:a,get:s}=Ua(t);let r=a.call(t,e);r||(e=me(e),r=a.call(t,e));const o=s.call(t,e);return t.set(e,n),r?$t(n,o)&&bn(t,"set",e,n):bn(t,"add",e,n),this}function Fr(e){const n=me(this),{has:t,get:a}=Ua(n);let s=t.call(n,e);s||(e=me(e),s=t.call(n,e)),a&&a.call(n,e);const r=n.delete(e);return s&&bn(n,"delete",e,void 0),r}function Dr(){const e=me(this),n=e.size!==0,t=e.clear();return n&&bn(e,"clear",void 0,void 0),t}function na(e,n){return function(a,s){const r=this,o=r.__v_raw,l=me(o),i=n?Ys:e?Xs:It;return!e&&Je(l,"iterate",Kn),o.forEach((c,u)=>a.call(s,i(c),i(u),r))}}function ta(e,n,t){return function(...a){const s=this.__v_raw,r=me(s),o=it(r),l=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,c=s[e](...a),u=t?Ys:n?Xs:It;return!n&&Je(r,"iterate",i?ms:Kn),{next(){const{value:f,done:g}=c.next();return g?{value:f,done:g}:{value:l?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function wn(e){return function(...n){return e==="delete"?!1:this}}function Pc(){const e={get(r){return Xt(this,r)},get size(){return ea(this)},has:Qt,add:Pr,set:Br,delete:Fr,clear:Dr,forEach:na(!1,!1)},n={get(r){return Xt(this,r,!1,!0)},get size(){return ea(this)},has:Qt,add:Pr,set:Br,delete:Fr,clear:Dr,forEach:na(!1,!0)},t={get(r){return Xt(this,r,!0)},get size(){return ea(this,!0)},has(r){return Qt.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:na(!0,!1)},a={get(r){return Xt(this,r,!0,!0)},get size(){return ea(this,!0)},has(r){return Qt.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:na(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ta(r,!1,!1),t[r]=ta(r,!0,!1),n[r]=ta(r,!1,!0),a[r]=ta(r,!0,!0)}),[e,t,n,a]}const[Bc,Fc,Dc,zc]=Pc();function Js(e,n){const t=n?e?zc:Dc:e?Fc:Bc;return(a,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(be(t,s)&&s in a?t:a,s,r)}const Uc={get:Js(!1,!1)},Hc={get:Js(!1,!0)},qc={get:Js(!0,!1)},gl=new WeakMap,dl=new WeakMap,fl=new WeakMap,Wc=new WeakMap;function Gc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vc(e){return e.__v_skip||!Object.isExtensible(e)?0:Gc(pc(e))}function Ha(e){return gt(e)?e:Zs(e,!1,hl,Uc,gl)}function Kc(e){return Zs(e,!1,Lc,Hc,dl)}function pl(e){return Zs(e,!0,Rc,qc,fl)}function Zs(e,n,t,a,s){if(!Ee(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=Vc(e);if(o===0)return e;const l=new Proxy(e,o===2?a:t);return s.set(e,l),l}function On(e){return gt(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function ka(e){return!!(e&&e.__v_isShallow)}function bl(e){return On(e)||gt(e)}function me(e){const n=e&&e.__v_raw;return n?me(n):e}function dt(e){return _a(e,"__v_skip",!0),e}const It=e=>Ee(e)?Ha(e):e,Xs=e=>Ee(e)?pl(e):e;function ml(e){An&&nn&&(e=me(e),il(e.dep||(e.dep=Gs())))}function yl(e,n){e=me(e);const t=e.dep;t&&ys(t)}function Re(e){return!!(e&&e.__v_isRef===!0)}function ke(e){return Yc(e,!1)}function Yc(e,n){return Re(e)?e:new Jc(e,n)}class Jc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:me(n),this._value=t?n:It(n)}get value(){return ml(this),this._value}set value(n){const t=this.__v_isShallow||ka(n)||gt(n);n=t?n:me(n),$t(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:It(n),yl(this))}}function b(e){return Re(e)?e.value:e}const Zc={get:(e,n,t)=>b(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const s=e[n];return Re(s)&&!Re(t)?(s.value=t,!0):Reflect.set(e,n,t,a)}};function vl(e){return On(e)?e:new Proxy(e,Zc)}function Xc(e){const n=re(e)?new Array(e.length):{};for(const t in e)n[t]=eu(e,t);return n}class Qc{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return kc(me(this._object),this._key)}}function eu(e,n,t){const a=e[n];return Re(a)?a:new Qc(e,n,t)}var jl;class nu{constructor(n,t,a,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[jl]=!1,this._dirty=!0,this.effect=new Vs(n,()=>{this._dirty||(this._dirty=!0,yl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const n=me(this);return ml(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}jl="__v_isReadonly";function tu(e,n,t=!1){let a,s;const r=he(e);return r?(a=e,s=rn):(a=e.get,s=e.set),new nu(a,s,r||!s,t)}function Nn(e,n,t,a){let s;try{s=a?e(...a):e()}catch(r){qa(r,n,t)}return s}function on(e,n,t,a){if(he(e)){const r=Nn(e,n,t,a);return r&&Qo(r)&&r.catch(o=>{qa(o,n,t)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(on(e[r],n,t,a));return s}function qa(e,n,t,a=!0){const s=n?n.vnode:null;if(n){let r=n.parent;const o=n.proxy,l=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,l)===!1)return}r=r.parent}const i=n.appContext.config.errorHandler;if(i){Nn(i,null,10,[e,o,l]);return}}au(e,t,s,a)}function au(e,n,t,a=!0){console.error(e)}let Rt=!1,vs=!1;const qe=[];let hn=0;const ct=[];let fn=null,Un=0;const _l=Promise.resolve();let Qs=null;function wl(e){const n=Qs||_l;return e?n.then(this?e.bind(this):e):n}function su(e){let n=hn+1,t=qe.length;for(;n<t;){const a=n+t>>>1;Lt(qe[a])<e?n=a+1:t=a}return n}function er(e){(!qe.length||!qe.includes(e,Rt&&e.allowRecurse?hn+1:hn))&&(e.id==null?qe.push(e):qe.splice(su(e.id),0,e),kl())}function kl(){!Rt&&!vs&&(vs=!0,Qs=_l.then(El))}function ru(e){const n=qe.indexOf(e);n>hn&&qe.splice(n,1)}function ou(e){re(e)?ct.push(...e):(!fn||!fn.includes(e,e.allowRecurse?Un+1:Un))&&ct.push(e),kl()}function zr(e,n=Rt?hn+1:0){for(;n<qe.length;n++){const t=qe[n];t&&t.pre&&(qe.splice(n,1),n--,t())}}function xl(e){if(ct.length){const n=[...new Set(ct)];if(ct.length=0,fn){fn.push(...n);return}for(fn=n,fn.sort((t,a)=>Lt(t)-Lt(a)),Un=0;Un<fn.length;Un++)fn[Un]();fn=null,Un=0}}const Lt=e=>e.id==null?1/0:e.id,lu=(e,n)=>{const t=Lt(e)-Lt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function El(e){vs=!1,Rt=!0,qe.sort(lu);const n=rn;try{for(hn=0;hn<qe.length;hn++){const t=qe[hn];t&&t.active!==!1&&Nn(t,null,14)}}finally{hn=0,qe.length=0,xl(),Rt=!1,Qs=null,(qe.length||ct.length)&&El()}}function iu(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||Te;let s=t;const r=n.startsWith("update:"),o=r&&n.slice(7);if(o&&o in a){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:g}=a[u]||Te;g&&(s=t.map(_=>Pe(_)?_.trim():_)),f&&(s=t.map(ps))}let l,i=a[l=as(n)]||a[l=as(dn(n))];!i&&r&&(i=a[l=as(mt(n))]),i&&on(i,e,6,s);const c=a[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,on(c,e,6,s)}}function Sl(e,n,t=!1){const a=n.emitsCache,s=a.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!he(e)){const i=c=>{const u=Sl(c,n,!0);u&&(l=!0,Ve(o,u))};!t&&n.mixins.length&&n.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!l?(Ee(e)&&a.set(e,null),null):(re(r)?r.forEach(i=>o[i]=null):Ve(o,r),Ee(e)&&a.set(e,o),o)}function Wa(e,n){return!e||!Ba(n)?!1:(n=n.slice(2).replace(/Once$/,""),be(e,n[0].toLowerCase()+n.slice(1))||be(e,mt(n))||be(e,n))}let De=null,Ga=null;function xa(e){const n=De;return De=e,Ga=e&&e.type.__scopeId||null,n}function Tl(e){Ga=e}function Cl(){Ga=null}function pn(e,n=De,t){if(!n||e._n)return e;const a=(...s)=>{a._d&&Jr(-1);const r=xa(n);let o;try{o=e(...s)}finally{xa(r),a._d&&Jr(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function ss(e){const{type:n,vnode:t,proxy:a,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:i,emit:c,render:u,renderCache:f,data:g,setupState:_,ctx:j,inheritAttrs:y}=e;let x,C;const m=xa(e);try{if(t.shapeFlag&4){const w=s||a;x=un(u.call(w,w,f,r,_,g,j)),C=i}else{const w=n;x=un(w.length>1?w(r,{attrs:i,slots:l,emit:c}):w(r,null)),C=n.props?i:cu(i)}}catch(w){St.length=0,qa(w,e,1),x=W($n)}let p=x;if(C&&y!==!1){const w=Object.keys(C),{shapeFlag:k}=p;w.length&&k&7&&(o&&w.some(Hs)&&(C=uu(C,o)),p=ft(p,C))}return t.dirs&&(p=ft(p),p.dirs=p.dirs?p.dirs.concat(t.dirs):t.dirs),t.transition&&(p.transition=t.transition),x=p,xa(m),x}const cu=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ba(t))&&((n||(n={}))[t]=e[t]);return n},uu=(e,n)=>{const t={};for(const a in e)(!Hs(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function hu(e,n,t){const{props:a,children:s,component:r}=e,{props:o,children:l,patchFlag:i}=n,c=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&i>=0){if(i&1024)return!0;if(i&16)return a?Ur(a,o,c):!!o;if(i&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(o[g]!==a[g]&&!Wa(c,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:a===o?!1:a?o?Ur(a,o,c):!0:!!o;return!1}function Ur(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const r=a[s];if(n[r]!==e[r]&&!Wa(t,r))return!0}return!1}function gu({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const du=e=>e.__isSuspense;function fu(e,n){n&&n.pendingBranch?re(e)?n.effects.push(...e):n.effects.push(e):ou(e)}function Sn(e,n){if(Ie){let t=Ie.provides;const a=Ie.parent&&Ie.parent.provides;a===t&&(t=Ie.provides=Object.create(a)),t[e]=n}}function te(e,n,t=!1){const a=Ie||De;if(a){const s=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return t&&he(n)?n.call(a.proxy):n}}const aa={};function ut(e,n,t){return Al(e,n,t)}function Al(e,n,{immediate:t,deep:a,flush:s,onTrack:r,onTrigger:o}=Te){const l=sl()===(Ie==null?void 0:Ie.scope)?Ie:null;let i,c=!1,u=!1;if(Re(e)?(i=()=>e.value,c=ka(e)):On(e)?(i=()=>e,a=!0):re(e)?(u=!0,c=e.some(p=>On(p)||ka(p)),i=()=>e.map(p=>{if(Re(p))return p.value;if(On(p))return Wn(p);if(he(p))return Nn(p,l,2)})):he(e)?n?i=()=>Nn(e,l,2):i=()=>{if(!(l&&l.isUnmounted))return f&&f(),on(e,l,3,[g])}:i=rn,n&&a){const p=i;i=()=>Wn(p())}let f,g=p=>{f=C.onStop=()=>{Nn(p,l,4)}},_;if(Ft)if(g=rn,n?t&&on(n,l,3,[i(),u?[]:void 0,g]):i(),s==="sync"){const p=rh();_=p.__watcherHandles||(p.__watcherHandles=[])}else return rn;let j=u?new Array(e.length).fill(aa):aa;const y=()=>{if(C.active)if(n){const p=C.run();(a||c||(u?p.some((w,k)=>$t(w,j[k])):$t(p,j)))&&(f&&f(),on(n,l,3,[p,j===aa?void 0:u&&j[0]===aa?[]:j,g]),j=p)}else C.run()};y.allowRecurse=!!n;let x;s==="sync"?x=y:s==="post"?x=()=>Ye(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),x=()=>er(y));const C=new Vs(i,x);n?t?y():j=C.run():s==="post"?Ye(C.run.bind(C),l&&l.suspense):C.run();const m=()=>{C.stop(),l&&l.scope&&qs(l.scope.effects,C)};return _&&_.push(m),m}function pu(e,n,t){const a=this.proxy,s=Pe(e)?e.includes(".")?Ol(a,e):()=>a[e]:e.bind(a,a);let r;he(n)?r=n:(r=n.handler,t=n);const o=Ie;pt(this);const l=Al(s,r.bind(a),t);return o?pt(o):Yn(),l}function Ol(e,n){const t=n.split(".");return()=>{let a=e;for(let s=0;s<t.length&&a;s++)a=a[t[s]];return a}}function Wn(e,n){if(!Ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Re(e))Wn(e.value,n);else if(re(e))for(let t=0;t<e.length;t++)Wn(e[t],n);else if(Fa(e)||it(e))e.forEach(t=>{Wn(t,n)});else if(nl(e))for(const t in e)Wn(e[t],n);return e}function Pn(e){return he(e)?{setup:e,name:e.name}:e}const xt=e=>!!e.type.__asyncLoader,Nl=e=>e.type.__isKeepAlive;function bu(e,n){Ml(e,"a",n)}function mu(e,n){Ml(e,"da",n)}function Ml(e,n,t=Ie){const a=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Va(n,a,t),t){let s=t.parent;for(;s&&s.parent;)Nl(s.parent.vnode)&&yu(a,n,t,s),s=s.parent}}function yu(e,n,t,a){const s=Va(n,e,a,!0);Il(()=>{qs(a[n],s)},t)}function Va(e,n,t=Ie,a=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;yt(),pt(t);const l=on(n,t,e,o);return Yn(),vt(),l});return a?s.unshift(r):s.push(r),r}}const jn=e=>(n,t=Ie)=>(!Ft||e==="sp")&&Va(e,(...a)=>n(...a),t),nr=jn("bm"),$l=jn("m"),vu=jn("bu"),ju=jn("u"),_u=jn("bum"),Il=jn("um"),wu=jn("sp"),ku=jn("rtg"),xu=jn("rtc");function Eu(e,n=Ie){Va("ec",e,n)}function Bn(e,n){const t=De;if(t===null)return e;const a=Ja(t)||t.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[o,l,i,c=Te]=n[r];o&&(he(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(l),s.push({dir:o,instance:a,value:l,oldValue:void 0,arg:i,modifiers:c}))}return e}function Fn(e,n,t,a){const s=e.dirs,r=n&&n.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let i=l.dir[a];i&&(yt(),on(i,t,8,[e.el,l,e,n]),vt())}}const Rl="components";function Ze(e,n){return Tu(Rl,e,!0,n)||e}const Su=Symbol();function Tu(e,n,t=!0,a=!1){const s=De||Ie;if(s){const r=s.type;if(e===Rl){const l=eh(r,!1);if(l&&(l===n||l===dn(n)||l===za(dn(n))))return r}const o=Hr(s[e]||r[e],n)||Hr(s.appContext[e],n);return!o&&a?r:o}}function Hr(e,n){return e&&(e[n]||e[dn(n)]||e[za(dn(n))])}function Zn(e,n,t,a){let s;const r=t&&t[a];if(re(e)||Pe(e)){s=new Array(e.length);for(let o=0,l=e.length;o<l;o++)s[o]=n(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=n(o+1,o,void 0,r&&r[o])}else if(Ee(e))if(e[Symbol.iterator])s=Array.from(e,(o,l)=>n(o,l,void 0,r&&r[l]));else{const o=Object.keys(e);s=new Array(o.length);for(let l=0,i=o.length;l<i;l++){const c=o[l];s[l]=n(e[c],c,l,r&&r[l])}}else s=[];return t&&(t[a]=s),s}function rs(e,n,t={},a,s){if(De.isCE||De.parent&&xt(De.parent)&&De.parent.isCE)return n!=="default"&&(t.name=n),W("slot",t,a&&a());let r=e[n];r&&r._c&&(r._d=!1),Z();const o=r&&Ll(r(t)),l=Bt(Oe,{key:t.key||o&&o.key||`_${n}`},o||(a?a():[]),o&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Ll(e){return e.some(n=>Sa(n)?!(n.type===$n||n.type===Oe&&!Ll(n.children)):!0)?e:null}const js=e=>e?Kl(e)?Ja(e)||e.proxy:js(e.parent):null,Et=Ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>js(e.parent),$root:e=>js(e.root),$emit:e=>e.emit,$options:e=>tr(e),$forceUpdate:e=>e.f||(e.f=()=>er(e.update)),$nextTick:e=>e.n||(e.n=wl.bind(e.proxy)),$watch:e=>pu.bind(e)}),os=(e,n)=>e!==Te&&!e.__isScriptSetup&&be(e,n),Cu={get({_:e},n){const{ctx:t,setupState:a,data:s,props:r,accessCache:o,type:l,appContext:i}=e;let c;if(n[0]!=="$"){const _=o[n];if(_!==void 0)switch(_){case 1:return a[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(os(a,n))return o[n]=1,a[n];if(s!==Te&&be(s,n))return o[n]=2,s[n];if((c=e.propsOptions[0])&&be(c,n))return o[n]=3,r[n];if(t!==Te&&be(t,n))return o[n]=4,t[n];_s&&(o[n]=0)}}const u=Et[n];let f,g;if(u)return n==="$attrs"&&Je(e,"get",n),u(e);if((f=l.__cssModules)&&(f=f[n]))return f;if(t!==Te&&be(t,n))return o[n]=4,t[n];if(g=i.config.globalProperties,be(g,n))return g[n]},set({_:e},n,t){const{data:a,setupState:s,ctx:r}=e;return os(s,n)?(s[n]=t,!0):a!==Te&&be(a,n)?(a[n]=t,!0):be(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:s,propsOptions:r}},o){let l;return!!t[o]||e!==Te&&be(e,o)||os(n,o)||(l=r[0])&&be(l,o)||be(a,o)||be(Et,o)||be(s.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:be(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let _s=!0;function Au(e){const n=tr(e),t=e.proxy,a=e.ctx;_s=!1,n.beforeCreate&&qr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:i,inject:c,created:u,beforeMount:f,mounted:g,beforeUpdate:_,updated:j,activated:y,deactivated:x,beforeDestroy:C,beforeUnmount:m,destroyed:p,unmounted:w,render:k,renderTracked:O,renderTriggered:R,errorCaptured:U,serverPrefetch:z,expose:ee,inheritAttrs:ce,components:je,directives:ve,filters:pe}=n;if(c&&Ou(c,a,null,e.appContext.config.unwrapInjectedRef),o)for(const B in o){const D=o[B];he(D)&&(a[B]=D.bind(t))}if(s){const B=s.call(t,t);Ee(B)&&(e.data=Ha(B))}if(_s=!0,r)for(const B in r){const D=r[B],J=he(D)?D.bind(t,t):he(D.get)?D.get.bind(t,t):rn,se=!he(D)&&he(D.set)?D.set.bind(t):rn,de=Me({get:J,set:se});Object.defineProperty(a,B,{enumerable:!0,configurable:!0,get:()=>de.value,set:le=>de.value=le})}if(l)for(const B in l)Pl(l[B],a,t,B);if(i){const B=he(i)?i.call(t):i;Reflect.ownKeys(B).forEach(D=>{Sn(D,B[D])})}u&&qr(u,e,"c");function M(B,D){re(D)?D.forEach(J=>B(J.bind(t))):D&&B(D.bind(t))}if(M(nr,f),M($l,g),M(vu,_),M(ju,j),M(bu,y),M(mu,x),M(Eu,U),M(xu,O),M(ku,R),M(_u,m),M(Il,w),M(wu,z),re(ee))if(ee.length){const B=e.exposed||(e.exposed={});ee.forEach(D=>{Object.defineProperty(B,D,{get:()=>t[D],set:J=>t[D]=J})})}else e.exposed||(e.exposed={});k&&e.render===rn&&(e.render=k),ce!=null&&(e.inheritAttrs=ce),je&&(e.components=je),ve&&(e.directives=ve)}function Ou(e,n,t=rn,a=!1){re(e)&&(e=ws(e));for(const s in e){const r=e[s];let o;Ee(r)?"default"in r?o=te(r.from||s,r.default,!0):o=te(r.from||s):o=te(r),Re(o)&&a?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):n[s]=o}}function qr(e,n,t){on(re(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Pl(e,n,t,a){const s=a.includes(".")?Ol(t,a):()=>t[a];if(Pe(e)){const r=n[e];he(r)&&ut(s,r)}else if(he(e))ut(s,e.bind(t));else if(Ee(e))if(re(e))e.forEach(r=>Pl(r,n,t,a));else{const r=he(e.handler)?e.handler.bind(t):n[e.handler];he(r)&&ut(s,r,e)}}function tr(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(n);let i;return l?i=l:!s.length&&!t&&!a?i=n:(i={},s.length&&s.forEach(c=>Ea(i,c,o,!0)),Ea(i,n,o)),Ee(n)&&r.set(n,i),i}function Ea(e,n,t,a=!1){const{mixins:s,extends:r}=n;r&&Ea(e,r,t,!0),s&&s.forEach(o=>Ea(e,o,t,!0));for(const o in n)if(!(a&&o==="expose")){const l=Nu[o]||t&&t[o];e[o]=l?l(e[o],n[o]):n[o]}return e}const Nu={data:Wr,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:zn,directives:zn,watch:$u,provide:Wr,inject:Mu};function Wr(e,n){return n?e?function(){return Ve(he(e)?e.call(this,this):e,he(n)?n.call(this,this):n)}:n:e}function Mu(e,n){return zn(ws(e),ws(n))}function ws(e){if(re(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ge(e,n){return e?[...new Set([].concat(e,n))]:n}function zn(e,n){return e?Ve(Ve(Object.create(null),e),n):n}function $u(e,n){if(!e)return n;if(!n)return e;const t=Ve(Object.create(null),e);for(const a in n)t[a]=Ge(e[a],n[a]);return t}function Iu(e,n,t,a=!1){const s={},r={};_a(r,Ya,1),e.propsDefaults=Object.create(null),Bl(e,n,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=a?s:Kc(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ru(e,n,t,a){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=me(s),[i]=e.propsOptions;let c=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(Wa(e.emitsOptions,g))continue;const _=n[g];if(i)if(be(r,g))_!==r[g]&&(r[g]=_,c=!0);else{const j=dn(g);s[j]=ks(i,l,j,_,e,!1)}else _!==r[g]&&(r[g]=_,c=!0)}}}else{Bl(e,n,s,r)&&(c=!0);let u;for(const f in l)(!n||!be(n,f)&&((u=mt(f))===f||!be(n,u)))&&(i?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=ks(i,l,f,void 0,e,!0)):delete s[f]);if(r!==l)for(const f in r)(!n||!be(n,f))&&(delete r[f],c=!0)}c&&bn(e,"set","$attrs")}function Bl(e,n,t,a){const[s,r]=e.propsOptions;let o=!1,l;if(n)for(let i in n){if(pa(i))continue;const c=n[i];let u;s&&be(s,u=dn(i))?!r||!r.includes(u)?t[u]=c:(l||(l={}))[u]=c:Wa(e.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,o=!0)}if(r){const i=me(t),c=l||Te;for(let u=0;u<r.length;u++){const f=r[u];t[f]=ks(s,i,f,c[f],e,!be(c,f))}}return o}function ks(e,n,t,a,s,r){const o=e[t];if(o!=null){const l=be(o,"default");if(l&&a===void 0){const i=o.default;if(o.type!==Function&&he(i)){const{propsDefaults:c}=s;t in c?a=c[t]:(pt(s),a=c[t]=i.call(null,n),Yn())}else a=i}o[0]&&(r&&!l?a=!1:o[1]&&(a===""||a===mt(t))&&(a=!0))}return a}function Fl(e,n,t=!1){const a=n.propsCache,s=a.get(e);if(s)return s;const r=e.props,o={},l=[];let i=!1;if(!he(e)){const u=f=>{i=!0;const[g,_]=Fl(f,n,!0);Ve(o,g),_&&l.push(..._)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!i)return Ee(e)&&a.set(e,lt),lt;if(re(r))for(let u=0;u<r.length;u++){const f=dn(r[u]);Gr(f)&&(o[f]=Te)}else if(r)for(const u in r){const f=dn(u);if(Gr(f)){const g=r[u],_=o[f]=re(g)||he(g)?{type:g}:Object.assign({},g);if(_){const j=Yr(Boolean,_.type),y=Yr(String,_.type);_[0]=j>-1,_[1]=y<0||j<y,(j>-1||be(_,"default"))&&l.push(f)}}}const c=[o,l];return Ee(e)&&a.set(e,c),c}function Gr(e){return e[0]!=="$"}function Vr(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Kr(e,n){return Vr(e)===Vr(n)}function Yr(e,n){return re(n)?n.findIndex(t=>Kr(t,e)):he(n)&&Kr(n,e)?0:-1}const Dl=e=>e[0]==="_"||e==="$stable",ar=e=>re(e)?e.map(un):[un(e)],Lu=(e,n,t)=>{if(n._n)return n;const a=pn((...s)=>ar(n(...s)),t);return a._c=!1,a},zl=(e,n,t)=>{const a=e._ctx;for(const s in e){if(Dl(s))continue;const r=e[s];if(he(r))n[s]=Lu(s,r,a);else if(r!=null){const o=ar(r);n[s]=()=>o}}},Ul=(e,n)=>{const t=ar(n);e.slots.default=()=>t},Pu=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=me(n),_a(n,"_",t)):zl(n,e.slots={})}else e.slots={},n&&Ul(e,n);_a(e.slots,Ya,1)},Bu=(e,n,t)=>{const{vnode:a,slots:s}=e;let r=!0,o=Te;if(a.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:(Ve(s,n),!t&&l===1&&delete s._):(r=!n.$stable,zl(n,s)),o=n}else n&&(Ul(e,n),o={default:1});if(r)for(const l in s)!Dl(l)&&!(l in o)&&delete s[l]};function Hl(){return{app:null,config:{isNativeTag:gc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fu=0;function Du(e,n){return function(a,s=null){he(a)||(a=Object.assign({},a)),s!=null&&!Ee(s)&&(s=null);const r=Hl(),o=new Set;let l=!1;const i=r.app={_uid:Fu++,_component:a,_props:s,_container:null,_context:r,_instance:null,version:oh,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&he(c.install)?(o.add(c),c.install(i,...u)):he(c)&&(o.add(c),c(i,...u))),i},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),i},component(c,u){return u?(r.components[c]=u,i):r.components[c]},directive(c,u){return u?(r.directives[c]=u,i):r.directives[c]},mount(c,u,f){if(!l){const g=W(a,s);return g.appContext=r,u&&n?n(g,c):e(g,c,f),l=!0,i._container=c,c.__vue_app__=i,Ja(g.component)||g.component.proxy}},unmount(){l&&(e(null,i._container),delete i._container.__vue_app__)},provide(c,u){return r.provides[c]=u,i}};return i}}function xs(e,n,t,a,s=!1){if(re(e)){e.forEach((g,_)=>xs(g,n&&(re(n)?n[_]:n),t,a,s));return}if(xt(a)&&!s)return;const r=a.shapeFlag&4?Ja(a.component)||a.component.proxy:a.el,o=s?null:r,{i:l,r:i}=e,c=n&&n.r,u=l.refs===Te?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==i&&(Pe(c)?(u[c]=null,be(f,c)&&(f[c]=null)):Re(c)&&(c.value=null)),he(i))Nn(i,l,12,[o,u]);else{const g=Pe(i),_=Re(i);if(g||_){const j=()=>{if(e.f){const y=g?be(f,i)?f[i]:u[i]:i.value;s?re(y)&&qs(y,r):re(y)?y.includes(r)||y.push(r):g?(u[i]=[r],be(f,i)&&(f[i]=u[i])):(i.value=[r],e.k&&(u[e.k]=i.value))}else g?(u[i]=o,be(f,i)&&(f[i]=o)):_&&(i.value=o,e.k&&(u[e.k]=o))};o?(j.id=-1,Ye(j,t)):j()}}}const Ye=fu;function zu(e){return Uu(e)}function Uu(e,n){const t=yc();t.__VUE__=!0;const{insert:a,remove:s,patchProp:r,createElement:o,createText:l,createComment:i,setText:c,setElementText:u,parentNode:f,nextSibling:g,setScopeId:_=rn,insertStaticContent:j}=e,y=(d,v,S,$=null,N=null,T=null,q=!1,P=null,L=!!v.dynamicChildren)=>{if(d===v)return;d&&!_t(d,v)&&($=ue(d),le(d,N,T,!0),d=null),v.patchFlag===-2&&(L=!1,v.dynamicChildren=null);const{type:F,ref:V,shapeFlag:K}=v;switch(F){case Ka:x(d,v,S,$);break;case $n:C(d,v,S,$);break;case ma:d==null&&m(v,S,$,q);break;case Oe:je(d,v,S,$,N,T,q,P,L);break;default:K&1?k(d,v,S,$,N,T,q,P,L):K&6?ve(d,v,S,$,N,T,q,P,L):(K&64||K&128)&&F.process(d,v,S,$,N,T,q,P,L,fe)}V!=null&&N&&xs(V,d&&d.ref,T,v||d,!v)},x=(d,v,S,$)=>{if(d==null)a(v.el=l(v.children),S,$);else{const N=v.el=d.el;v.children!==d.children&&c(N,v.children)}},C=(d,v,S,$)=>{d==null?a(v.el=i(v.children||""),S,$):v.el=d.el},m=(d,v,S,$)=>{[d.el,d.anchor]=j(d.children,v,S,$,d.el,d.anchor)},p=({el:d,anchor:v},S,$)=>{let N;for(;d&&d!==v;)N=g(d),a(d,S,$),d=N;a(v,S,$)},w=({el:d,anchor:v})=>{let S;for(;d&&d!==v;)S=g(d),s(d),d=S;s(v)},k=(d,v,S,$,N,T,q,P,L)=>{q=q||v.type==="svg",d==null?O(v,S,$,N,T,q,P,L):z(d,v,N,T,q,P,L)},O=(d,v,S,$,N,T,q,P)=>{let L,F;const{type:V,props:K,shapeFlag:X,transition:E,dirs:A}=d;if(L=d.el=o(d.type,T,K&&K.is,K),X&8?u(L,d.children):X&16&&U(d.children,L,null,$,N,T&&V!=="foreignObject",q,P),A&&Fn(d,null,$,"created"),R(L,d,d.scopeId,q,$),K){for(const H in K)H!=="value"&&!pa(H)&&r(L,H,null,K[H],T,d.children,$,N,G);"value"in K&&r(L,"value",null,K.value),(F=K.onVnodeBeforeMount)&&cn(F,$,d)}A&&Fn(d,null,$,"beforeMount");const I=(!N||N&&!N.pendingBranch)&&E&&!E.persisted;I&&E.beforeEnter(L),a(L,v,S),((F=K&&K.onVnodeMounted)||I||A)&&Ye(()=>{F&&cn(F,$,d),I&&E.enter(L),A&&Fn(d,null,$,"mounted")},N)},R=(d,v,S,$,N)=>{if(S&&_(d,S),$)for(let T=0;T<$.length;T++)_(d,$[T]);if(N){let T=N.subTree;if(v===T){const q=N.vnode;R(d,q,q.scopeId,q.slotScopeIds,N.parent)}}},U=(d,v,S,$,N,T,q,P,L=0)=>{for(let F=L;F<d.length;F++){const V=d[F]=P?En(d[F]):un(d[F]);y(null,V,v,S,$,N,T,q,P)}},z=(d,v,S,$,N,T,q)=>{const P=v.el=d.el;let{patchFlag:L,dynamicChildren:F,dirs:V}=v;L|=d.patchFlag&16;const K=d.props||Te,X=v.props||Te;let E;S&&Dn(S,!1),(E=X.onVnodeBeforeUpdate)&&cn(E,S,v,d),V&&Fn(v,d,S,"beforeUpdate"),S&&Dn(S,!0);const A=N&&v.type!=="foreignObject";if(F?ee(d.dynamicChildren,F,P,S,$,A,T):q||D(d,v,P,null,S,$,A,T,!1),L>0){if(L&16)ce(P,v,K,X,S,$,N);else if(L&2&&K.class!==X.class&&r(P,"class",null,X.class,N),L&4&&r(P,"style",K.style,X.style,N),L&8){const I=v.dynamicProps;for(let H=0;H<I.length;H++){const oe=I[H],ye=K[oe],ge=X[oe];(ge!==ye||oe==="value")&&r(P,oe,ye,ge,N,d.children,S,$,G)}}L&1&&d.children!==v.children&&u(P,v.children)}else!q&&F==null&&ce(P,v,K,X,S,$,N);((E=X.onVnodeUpdated)||V)&&Ye(()=>{E&&cn(E,S,v,d),V&&Fn(v,d,S,"updated")},$)},ee=(d,v,S,$,N,T,q)=>{for(let P=0;P<v.length;P++){const L=d[P],F=v[P],V=L.el&&(L.type===Oe||!_t(L,F)||L.shapeFlag&70)?f(L.el):S;y(L,F,V,null,$,N,T,q,!0)}},ce=(d,v,S,$,N,T,q)=>{if(S!==$){if(S!==Te)for(const P in S)!pa(P)&&!(P in $)&&r(d,P,S[P],null,q,v.children,N,T,G);for(const P in $){if(pa(P))continue;const L=$[P],F=S[P];L!==F&&P!=="value"&&r(d,P,F,L,q,v.children,N,T,G)}"value"in $&&r(d,"value",S.value,$.value)}},je=(d,v,S,$,N,T,q,P,L)=>{const F=v.el=d?d.el:l(""),V=v.anchor=d?d.anchor:l("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:E}=v;E&&(P=P?P.concat(E):E),d==null?(a(F,S,$),a(V,S,$),U(v.children,S,V,N,T,q,P,L)):K>0&&K&64&&X&&d.dynamicChildren?(ee(d.dynamicChildren,X,S,N,T,q,P),(v.key!=null||N&&v===N.subTree)&&ql(d,v,!0)):D(d,v,S,V,N,T,q,P,L)},ve=(d,v,S,$,N,T,q,P,L)=>{v.slotScopeIds=P,d==null?v.shapeFlag&512?N.ctx.activate(v,S,$,q,L):pe(v,S,$,N,T,q,L):we(d,v,L)},pe=(d,v,S,$,N,T,q)=>{const P=d.component=Ju(d,$,N);if(Nl(d)&&(P.ctx.renderer=fe),Zu(P),P.asyncDep){if(N&&N.registerDep(P,M),!d.el){const L=P.subTree=W($n);C(null,L,v,S)}return}M(P,d,v,S,N,T,q)},we=(d,v,S)=>{const $=v.component=d.component;if(hu(d,v,S))if($.asyncDep&&!$.asyncResolved){B($,v,S);return}else $.next=v,ru($.update),$.update();else v.el=d.el,$.vnode=v},M=(d,v,S,$,N,T,q)=>{const P=()=>{if(d.isMounted){let{next:V,bu:K,u:X,parent:E,vnode:A}=d,I=V,H;Dn(d,!1),V?(V.el=A.el,B(d,V,q)):V=A,K&&ba(K),(H=V.props&&V.props.onVnodeBeforeUpdate)&&cn(H,E,V,A),Dn(d,!0);const oe=ss(d),ye=d.subTree;d.subTree=oe,y(ye,oe,f(ye.el),ue(ye),d,N,T),V.el=oe.el,I===null&&gu(d,oe.el),X&&Ye(X,N),(H=V.props&&V.props.onVnodeUpdated)&&Ye(()=>cn(H,E,V,A),N)}else{let V;const{el:K,props:X}=v,{bm:E,m:A,parent:I}=d,H=xt(v);if(Dn(d,!1),E&&ba(E),!H&&(V=X&&X.onVnodeBeforeMount)&&cn(V,I,v),Dn(d,!0),K&&Fe){const oe=()=>{d.subTree=ss(d),Fe(K,d.subTree,d,N,null)};H?v.type.__asyncLoader().then(()=>!d.isUnmounted&&oe()):oe()}else{const oe=d.subTree=ss(d);y(null,oe,S,$,d,N,T),v.el=oe.el}if(A&&Ye(A,N),!H&&(V=X&&X.onVnodeMounted)){const oe=v;Ye(()=>cn(V,I,oe),N)}(v.shapeFlag&256||I&&xt(I.vnode)&&I.vnode.shapeFlag&256)&&d.a&&Ye(d.a,N),d.isMounted=!0,v=S=$=null}},L=d.effect=new Vs(P,()=>er(F),d.scope),F=d.update=()=>L.run();F.id=d.uid,Dn(d,!0),F()},B=(d,v,S)=>{v.component=d;const $=d.vnode.props;d.vnode=v,d.next=null,Ru(d,v.props,$,S),Bu(d,v.children,S),yt(),zr(),vt()},D=(d,v,S,$,N,T,q,P,L=!1)=>{const F=d&&d.children,V=d?d.shapeFlag:0,K=v.children,{patchFlag:X,shapeFlag:E}=v;if(X>0){if(X&128){se(F,K,S,$,N,T,q,P,L);return}else if(X&256){J(F,K,S,$,N,T,q,P,L);return}}E&8?(V&16&&G(F,N,T),K!==F&&u(S,K)):V&16?E&16?se(F,K,S,$,N,T,q,P,L):G(F,N,T,!0):(V&8&&u(S,""),E&16&&U(K,S,$,N,T,q,P,L))},J=(d,v,S,$,N,T,q,P,L)=>{d=d||lt,v=v||lt;const F=d.length,V=v.length,K=Math.min(F,V);let X;for(X=0;X<K;X++){const E=v[X]=L?En(v[X]):un(v[X]);y(d[X],E,S,null,N,T,q,P,L)}F>V?G(d,N,T,!0,!1,K):U(v,S,$,N,T,q,P,L,K)},se=(d,v,S,$,N,T,q,P,L)=>{let F=0;const V=v.length;let K=d.length-1,X=V-1;for(;F<=K&&F<=X;){const E=d[F],A=v[F]=L?En(v[F]):un(v[F]);if(_t(E,A))y(E,A,S,null,N,T,q,P,L);else break;F++}for(;F<=K&&F<=X;){const E=d[K],A=v[X]=L?En(v[X]):un(v[X]);if(_t(E,A))y(E,A,S,null,N,T,q,P,L);else break;K--,X--}if(F>K){if(F<=X){const E=X+1,A=E<V?v[E].el:$;for(;F<=X;)y(null,v[F]=L?En(v[F]):un(v[F]),S,A,N,T,q,P,L),F++}}else if(F>X)for(;F<=K;)le(d[F],N,T,!0),F++;else{const E=F,A=F,I=new Map;for(F=A;F<=X;F++){const He=v[F]=L?En(v[F]):un(v[F]);He.key!=null&&I.set(He.key,F)}let H,oe=0;const ye=X-A+1;let ge=!1,ae=0;const Ue=new Array(ye);for(F=0;F<ye;F++)Ue[F]=0;for(F=E;F<=K;F++){const He=d[F];if(oe>=ye){le(He,N,T,!0);continue}let ln;if(He.key!=null)ln=I.get(He.key);else for(H=A;H<=X;H++)if(Ue[H-A]===0&&_t(He,v[H])){ln=H;break}ln===void 0?le(He,N,T,!0):(Ue[ln-A]=F+1,ln>=ae?ae=ln:ge=!0,y(He,v[ln],S,null,N,T,q,P,L),oe++)}const nt=ge?Hu(Ue):lt;for(H=nt.length-1,F=ye-1;F>=0;F--){const He=A+F,ln=v[He],Nr=He+1<V?v[He+1].el:$;Ue[F]===0?y(null,ln,S,Nr,N,T,q,P,L):ge&&(H<0||F!==nt[H]?de(ln,S,Nr,2):H--)}}},de=(d,v,S,$,N=null)=>{const{el:T,type:q,transition:P,children:L,shapeFlag:F}=d;if(F&6){de(d.component.subTree,v,S,$);return}if(F&128){d.suspense.move(v,S,$);return}if(F&64){q.move(d,v,S,fe);return}if(q===Oe){a(T,v,S);for(let K=0;K<L.length;K++)de(L[K],v,S,$);a(d.anchor,v,S);return}if(q===ma){p(d,v,S);return}if($!==2&&F&1&&P)if($===0)P.beforeEnter(T),a(T,v,S),Ye(()=>P.enter(T),N);else{const{leave:K,delayLeave:X,afterLeave:E}=P,A=()=>a(T,v,S),I=()=>{K(T,()=>{A(),E&&E()})};X?X(T,A,I):I()}else a(T,v,S)},le=(d,v,S,$=!1,N=!1)=>{const{type:T,props:q,ref:P,children:L,dynamicChildren:F,shapeFlag:V,patchFlag:K,dirs:X}=d;if(P!=null&&xs(P,null,S,d,!0),V&256){v.ctx.deactivate(d);return}const E=V&1&&X,A=!xt(d);let I;if(A&&(I=q&&q.onVnodeBeforeUnmount)&&cn(I,v,d),V&6)Ne(d.component,S,$);else{if(V&128){d.suspense.unmount(S,$);return}E&&Fn(d,null,v,"beforeUnmount"),V&64?d.type.remove(d,v,S,N,fe,$):F&&(T!==Oe||K>0&&K&64)?G(F,v,S,!1,!0):(T===Oe&&K&384||!N&&V&16)&&G(L,v,S),$&&ze(d)}(A&&(I=q&&q.onVnodeUnmounted)||E)&&Ye(()=>{I&&cn(I,v,d),E&&Fn(d,null,v,"unmounted")},S)},ze=d=>{const{type:v,el:S,anchor:$,transition:N}=d;if(v===Oe){_e(S,$);return}if(v===ma){w(d);return}const T=()=>{s(S),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(d.shapeFlag&1&&N&&!N.persisted){const{leave:q,delayLeave:P}=N,L=()=>q(S,T);P?P(d.el,T,L):L()}else T()},_e=(d,v)=>{let S;for(;d!==v;)S=g(d),s(d),d=S;s(v)},Ne=(d,v,S)=>{const{bum:$,scope:N,update:T,subTree:q,um:P}=d;$&&ba($),N.stop(),T&&(T.active=!1,le(q,d,v,S)),P&&Ye(P,v),Ye(()=>{d.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},G=(d,v,S,$=!1,N=!1,T=0)=>{for(let q=T;q<d.length;q++)le(d[q],v,S,$,N)},ue=d=>d.shapeFlag&6?ue(d.component.subTree):d.shapeFlag&128?d.suspense.next():g(d.anchor||d.el),Le=(d,v,S)=>{d==null?v._vnode&&le(v._vnode,null,null,!0):y(v._vnode||null,d,v,null,null,null,S),zr(),xl(),v._vnode=d},fe={p:y,um:le,m:de,r:ze,mt:pe,mc:U,pc:D,pbc:ee,n:ue,o:e};let We,Fe;return n&&([We,Fe]=n(fe)),{render:Le,hydrate:We,createApp:Du(Le,We)}}function Dn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function ql(e,n,t=!1){const a=e.children,s=n.children;if(re(a)&&re(s))for(let r=0;r<a.length;r++){const o=a[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=En(s[r]),l.el=o.el),t||ql(o,l)),l.type===Ka&&(l.el=o.el)}}function Hu(e){const n=e.slice(),t=[0];let a,s,r,o,l;const i=e.length;for(a=0;a<i;a++){const c=e[a];if(c!==0){if(s=t[t.length-1],e[s]<c){n[a]=s,t.push(a);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,e[t[l]]<c?r=l+1:o=l;c<e[t[r]]&&(r>0&&(n[a]=t[r-1]),t[r]=a)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}const qu=e=>e.__isTeleport,Oe=Symbol(void 0),Ka=Symbol(void 0),$n=Symbol(void 0),ma=Symbol(void 0),St=[];let an=null;function Z(e=!1){St.push(an=e?null:[])}function Wu(){St.pop(),an=St[St.length-1]||null}let Pt=1;function Jr(e){Pt+=e}function Wl(e){return e.dynamicChildren=Pt>0?an||lt:null,Wu(),Pt>0&&an&&an.push(e),e}function ne(e,n,t,a,s,r){return Wl(h(e,n,t,a,s,r,!0))}function Bt(e,n,t,a,s){return Wl(W(e,n,t,a,s,!0))}function Sa(e){return e?e.__v_isVNode===!0:!1}function _t(e,n){return e.type===n.type&&e.key===n.key}const Ya="__vInternal",Gl=({key:e})=>e??null,ya=({ref:e,ref_key:n,ref_for:t})=>e!=null?Pe(e)||Re(e)||he(e)?{i:De,r:e,k:n,f:!!t}:e:null;function h(e,n=null,t=null,a=0,s=null,r=e===Oe?0:1,o=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Gl(n),ref:n&&ya(n),scopeId:Ga,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return l?(rr(i,t),r&128&&e.normalize(i)):t&&(i.shapeFlag|=Pe(t)?8:16),Pt>0&&!o&&an&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&an.push(i),i}const W=Gu;function Gu(e,n=null,t=null,a=0,s=null,r=!1){if((!e||e===Su)&&(e=$n),Sa(e)){const l=ft(e,n,!0);return t&&rr(l,t),Pt>0&&!r&&an&&(l.shapeFlag&6?an[an.indexOf(e)]=l:an.push(l)),l.patchFlag|=-2,l}if(nh(e)&&(e=e.__vccOpts),n){n=Vu(n);let{class:l,style:i}=n;l&&!Pe(l)&&(n.class=Se(l)),Ee(i)&&(bl(i)&&!re(i)&&(i=Ve({},i)),n.style=Tn(i))}const o=Pe(e)?1:du(e)?128:qu(e)?64:Ee(e)?4:he(e)?2:0;return h(e,n,t,a,s,o,r,!0)}function Vu(e){return e?bl(e)||Ya in e?Ve({},e):e:null}function ft(e,n,t=!1){const{props:a,ref:s,patchFlag:r,children:o}=e,l=n?Tt(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gl(l),ref:n&&n.ref?t&&s?re(s)?s.concat(ya(n)):[s,ya(n)]:ya(n):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Oe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ie(e=" ",n=0){return W(Ka,null,e,n)}function sr(e,n){const t=W(ma,null,e);return t.staticCount=n,t}function Qe(e="",n=!1){return n?(Z(),Bt($n,null,e)):W($n,null,e)}function un(e){return e==null||typeof e=="boolean"?W($n):re(e)?W(Oe,null,e.slice()):typeof e=="object"?En(e):W(Ka,null,String(e))}function En(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function rr(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(re(n))t=16;else if(typeof n=="object")if(a&65){const s=n.default;s&&(s._c&&(s._d=!1),rr(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!(Ya in n)?n._ctx=De:s===3&&De&&(De.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else he(n)?(n={default:n,_ctx:De},t=32):(n=String(n),a&64?(t=16,n=[ie(n)]):t=8);e.children=n,e.shapeFlag|=t}function Tt(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const s in a)if(s==="class")n.class!==a.class&&(n.class=Se([n.class,a.class]));else if(s==="style")n.style=Tn([n.style,a.style]);else if(Ba(s)){const r=n[s],o=a[s];o&&r!==o&&!(re(r)&&r.includes(o))&&(n[s]=r?[].concat(r,o):o)}else s!==""&&(n[s]=a[s])}return n}function cn(e,n,t,a=null){on(e,n,7,[t,a])}const Ku=Hl();let Yu=0;function Ju(e,n,t){const a=e.type,s=(n?n.appContext:e.appContext)||Ku,r={uid:Yu++,vnode:e,type:a,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fl(a,s),emitsOptions:Sl(a,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:a.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=iu.bind(null,r),e.ce&&e.ce(r),r}let Ie=null;const Vl=()=>Ie||De,pt=e=>{Ie=e,e.scope.on()},Yn=()=>{Ie&&Ie.scope.off(),Ie=null};function Kl(e){return e.vnode.shapeFlag&4}let Ft=!1;function Zu(e,n=!1){Ft=n;const{props:t,children:a}=e.vnode,s=Kl(e);Iu(e,t,s,n),Pu(e,a);const r=s?Xu(e,n):void 0;return Ft=!1,r}function Xu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=dt(new Proxy(e.ctx,Cu));const{setup:a}=t;if(a){const s=e.setupContext=a.length>1?Jl(e):null;pt(e),yt();const r=Nn(a,e,0,[e.props,s]);if(vt(),Yn(),Qo(r)){if(r.then(Yn,Yn),n)return r.then(o=>{Zr(e,o,n)}).catch(o=>{qa(o,e,0)});e.asyncDep=r}else Zr(e,r,n)}else Yl(e,n)}function Zr(e,n,t){he(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ee(n)&&(e.setupState=vl(n)),Yl(e,t)}let Xr;function Yl(e,n,t){const a=e.type;if(!e.render){if(!n&&Xr&&!a.render){const s=a.template||tr(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:i}=a,c=Ve(Ve({isCustomElement:r,delimiters:l},o),i);a.render=Xr(s,c)}}e.render=a.render||rn}pt(e),yt(),Au(e),vt(),Yn()}function Qu(e){return new Proxy(e.attrs,{get(n,t){return Je(e,"get","$attrs"),n[t]}})}function Jl(e){const n=a=>{e.exposed=a||{}};let t;return{get attrs(){return t||(t=Qu(e))},slots:e.slots,emit:e.emit,expose:n}}function Ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vl(dt(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Et)return Et[t](e)},has(n,t){return t in n||t in Et}}))}function eh(e,n=!0){return he(e)?e.displayName||e.name:e.name||n&&e.__name}function nh(e){return he(e)&&"__vccOpts"in e}const Me=(e,n)=>tu(e,n,Ft);function th(){return ah().slots}function ah(){const e=Vl();return e.setupContext||(e.setupContext=Jl(e))}function Zl(e,n,t){const a=arguments.length;return a===2?Ee(n)&&!re(n)?Sa(n)?W(e,null,[n]):W(e,n):W(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Sa(t)&&(t=[t]),W(e,n,t))}const sh=Symbol(""),rh=()=>te(sh),oh="3.2.47",lh="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,Qr=Hn&&Hn.createElement("template"),ih={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const s=n?Hn.createElementNS(lh,e):Hn.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,s,r){const o=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qr.innerHTML=a?`<svg>${e}</svg>`:e;const l=Qr.content;if(a){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}n.insertBefore(l,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function ch(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function uh(e,n,t){const a=e.style,s=Pe(t);if(t&&!s){if(n&&!Pe(n))for(const r in n)t[r]==null&&Es(a,r,"");for(const r in t)Es(a,r,t[r])}else{const r=a.display;s?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=r)}}const eo=/\s*!important$/;function Es(e,n,t){if(re(t))t.forEach(a=>Es(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=hh(e,n);eo.test(t)?e.setProperty(mt(a),t.replace(eo,""),"important"):e[a]=t}}const no=["Webkit","Moz","ms"],ls={};function hh(e,n){const t=ls[n];if(t)return t;let a=dn(n);if(a!=="filter"&&a in e)return ls[n]=a;a=za(a);for(let s=0;s<no.length;s++){const r=no[s]+a;if(r in e)return ls[n]=r}return n}const to="http://www.w3.org/1999/xlink";function gh(e,n,t,a,s){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(to,n.slice(6,n.length)):e.setAttributeNS(to,n,t);else{const r=uc(n);t==null||r&&!Jo(t)?e.removeAttribute(n):e.setAttribute(n,r?"":t)}}function dh(e,n,t,a,s,r,o){if(n==="innerHTML"||n==="textContent"){a&&o(a,s,r),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const i=t??"";(e.value!==i||e.tagName==="OPTION")&&(e.value=i),t==null&&e.removeAttribute(n);return}let l=!1;if(t===""||t==null){const i=typeof e[n];i==="boolean"?t=Jo(t):t==null&&i==="string"?(t="",l=!0):i==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(n)}function qn(e,n,t,a){e.addEventListener(n,t,a)}function fh(e,n,t,a){e.removeEventListener(n,t,a)}function ph(e,n,t,a,s=null){const r=e._vei||(e._vei={}),o=r[n];if(a&&o)o.value=a;else{const[l,i]=bh(n);if(a){const c=r[n]=vh(a,s);qn(e,l,c,i)}else o&&(fh(e,l,o,i),r[n]=void 0)}}const ao=/(?:Once|Passive|Capture)$/;function bh(e){let n;if(ao.test(e)){n={};let a;for(;a=e.match(ao);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mt(e.slice(2)),n]}let is=0;const mh=Promise.resolve(),yh=()=>is||(mh.then(()=>is=0),is=Date.now());function vh(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;on(jh(a,t.value),n,5,[a])};return t.value=e,t.attached=yh(),t}function jh(e,n){if(re(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>s=>!s._stopped&&a&&a(s))}else return n}const so=/^on[a-z]/,_h=(e,n,t,a,s=!1,r,o,l,i)=>{n==="class"?ch(e,a,s):n==="style"?uh(e,t,a):Ba(n)?Hs(n)||ph(e,n,t,a,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):wh(e,n,a,s))?dh(e,n,a,r,o,l,i):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),gh(e,n,a,s))};function wh(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&so.test(n)&&he(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||so.test(n)&&Pe(t)?!1:n in e}const Ta=e=>{const n=e.props["onUpdate:modelValue"]||!1;return re(n)?t=>ba(n,t):n};function kh(e){e.target.composing=!0}function ro(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const tt={created(e,{modifiers:{lazy:n,trim:t,number:a}},s){e._assign=Ta(s);const r=a||s.props&&s.props.type==="number";qn(e,n?"change":"input",o=>{if(o.target.composing)return;let l=e.value;t&&(l=l.trim()),r&&(l=ps(l)),e._assign(l)}),t&&qn(e,"change",()=>{e.value=e.value.trim()}),n||(qn(e,"compositionstart",kh),qn(e,"compositionend",ro),qn(e,"change",ro))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:s}},r){if(e._assign=Ta(r),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(s||e.type==="number")&&ps(e.value)===n))return;const o=n??"";e.value!==o&&(e.value=o)}},xh={deep:!0,created(e,n,t){e._assign=Ta(t),qn(e,"change",()=>{const a=e._modelValue,s=Eh(e),r=e.checked,o=e._assign;if(re(a)){const l=Zo(a,s),i=l!==-1;if(r&&!i)o(a.concat(s));else if(!r&&i){const c=[...a];c.splice(l,1),o(c)}}else if(Fa(a)){const l=new Set(a);r?l.add(s):l.delete(s),o(l)}else o(Xl(e,r))})},mounted:oo,beforeUpdate(e,n,t){e._assign=Ta(t),oo(e,n,t)}};function oo(e,{value:n,oldValue:t},a){e._modelValue=n,re(n)?e.checked=Zo(n,a.props.value)>-1:Fa(n)?e.checked=n.has(a.props.value):n!==t&&(e.checked=Pa(n,Xl(e,!0)))}function Eh(e){return"_value"in e?e._value:e.value}function Xl(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Sh=Ve({patchProp:_h},ih);let lo;function Th(){return lo||(lo=zu(Sh))}const Ch=(...e)=>{const n=Th().createApp(...e),{mount:t}=n;return n.mount=a=>{const s=Ah(a);if(!s)return;const r=n._component;!he(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n};function Ah(e){return Pe(e)?document.querySelector(e):e}var Oh=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ql;const Za=e=>Ql=e,ei=Symbol();function Ss(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ct;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ct||(Ct={}));function Nh(){const e=al(!0),n=e.run(()=>ke({}));let t=[],a=[];const s=dt({install(r){Za(s),s._a=r,r.provide(ei,s),r.config.globalProperties.$pinia=s,a.forEach(o=>t.push(o)),a=[]},use(r){return!this._a&&!Oh?a.push(r):t.push(r),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return s}const ni=()=>{};function io(e,n,t,a=ni){e.push(n);const s=()=>{const r=e.indexOf(n);r>-1&&(e.splice(r,1),a())};return!t&&sl()&&jc(s),s}function at(e,...n){e.slice().forEach(t=>{t(...n)})}function Ts(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,a)=>e.set(a,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const a=n[t],s=e[t];Ss(s)&&Ss(a)&&e.hasOwnProperty(t)&&!Re(a)&&!On(a)?e[t]=Ts(s,a):e[t]=a}return e}const Mh=Symbol();function $h(e){return!Ss(e)||!e.hasOwnProperty(Mh)}const{assign:xn}=Object;function Ih(e){return!!(Re(e)&&e.effect)}function Rh(e,n,t,a){const{state:s,actions:r,getters:o}=n,l=t.state.value[e];let i;function c(){l||(t.state.value[e]=s?s():{});const u=Xc(t.state.value[e]);return xn(u,r,Object.keys(o||{}).reduce((f,g)=>(f[g]=dt(Me(()=>{Za(t);const _=t._s.get(e);return o[g].call(_,_)})),f),{}))}return i=ti(e,c,n,t,a,!0),i}function ti(e,n,t={},a,s,r){let o;const l=xn({actions:{}},t),i={deep:!0};let c,u,f=dt([]),g=dt([]),_;const j=a.state.value[e];!r&&!j&&(a.state.value[e]={}),ke({});let y;function x(R){let U;c=u=!1,typeof R=="function"?(R(a.state.value[e]),U={type:Ct.patchFunction,storeId:e,events:_}):(Ts(a.state.value[e],R),U={type:Ct.patchObject,payload:R,storeId:e,events:_});const z=y=Symbol();wl().then(()=>{y===z&&(c=!0)}),u=!0,at(f,U,a.state.value[e])}const C=r?function(){const{state:U}=t,z=U?U():{};this.$patch(ee=>{xn(ee,z)})}:ni;function m(){o.stop(),f=[],g=[],a._s.delete(e)}function p(R,U){return function(){Za(a);const z=Array.from(arguments),ee=[],ce=[];function je(we){ee.push(we)}function ve(we){ce.push(we)}at(g,{args:z,name:R,store:k,after:je,onError:ve});let pe;try{pe=U.apply(this&&this.$id===e?this:k,z)}catch(we){throw at(ce,we),we}return pe instanceof Promise?pe.then(we=>(at(ee,we),we)).catch(we=>(at(ce,we),Promise.reject(we))):(at(ee,pe),pe)}}const w={_p:a,$id:e,$onAction:io.bind(null,g),$patch:x,$reset:C,$subscribe(R,U={}){const z=io(f,R,U.detached,()=>ee()),ee=o.run(()=>ut(()=>a.state.value[e],ce=>{(U.flush==="sync"?u:c)&&R({storeId:e,type:Ct.direct,events:_},ce)},xn({},i,U)));return z},$dispose:m},k=Ha(w);a._s.set(e,k);const O=a._e.run(()=>(o=al(),o.run(()=>n())));for(const R in O){const U=O[R];if(Re(U)&&!Ih(U)||On(U))r||(j&&$h(U)&&(Re(U)?U.value=j[R]:Ts(U,j[R])),a.state.value[e][R]=U);else if(typeof U=="function"){const z=p(R,U);O[R]=z,l.actions[R]=U}}return xn(k,O),xn(me(k),O),Object.defineProperty(k,"$state",{get:()=>a.state.value[e],set:R=>{x(U=>{xn(U,R)})}}),a._p.forEach(R=>{xn(k,o.run(()=>R({store:k,app:a._a,pinia:a,options:l})))}),j&&r&&t.hydrate&&t.hydrate(k.$state,j),c=!0,u=!0,k}function Lh(e,n,t){let a,s;const r=typeof n=="function";typeof e=="string"?(a=e,s=r?t:n):(s=e,a=e.id);function o(l,i){const c=Vl();return l=l||c&&te(ei,null),l&&Za(l),l=Ql,l._s.has(a)||(r?ti(a,n,s,l):Rh(a,s,l)),l._s.get(a)}return o.$id=a,o}const Ph="vue3-code-block",ai="2.0.0-beta.1",Bh="Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.",Fh="dist/vue3-code-block.js",Dh="dist/vue3-code-block.es.js",zh="dist/types/index.d.ts",Uh={dev:"vite",watch:"pnpm dev",play:"sh src/playground/configs/build.sh && vite",bundle:"rollup -c --bundleConfigAsCjs",build:"vite build",predeploy:"npm run build",deploy:"gh-pages -d docs",prepublishOnly:"npm run bundle",lint:"eslint src/**/*.{ts,vue} --max-warnings 4"},Hh={node:"19.0.1"},qh="WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)",Wh=[{type:"paypal",url:"https://paypal.me/webdevnerdstuff"},{type:"patreon",url:"https://www.patreon.com/WebDevNerdStuff"}],Gh="MIT",Vh=["dist/*","LICENSE.md","README.md"],Kh="https://github.com/webdevnerdstuff/vue3-code-block",Yh={url:"https://github.com/webdevnerdstuff/vue3-code-block/issues"},Jh="https://webdevnerdstuff.github.io/vue3-code-block/",Zh=["vue3-code-block","code","pre","highlight","syntax","vue","vue3","prism","prismjs","highlightjs","highlight.js","component","javascript","typescript","neon bunny","webdevnerdstuff","wdns"],Xh={vue:"^3.2.47"},Qh={"highlight.js":"^11.7.0",prismjs:"^1.29.0","ua-parser-js":"^1.0.35"},eg={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@fortawesome/fontawesome-svg-core":"^6.4.0","@fortawesome/free-brands-svg-icons":"^6.4.0","@fortawesome/free-solid-svg-icons":"^6.4.0","@fortawesome/vue-fontawesome":"^3.0.3","@rollup/plugin-alias":"^5.0.0","@rollup/plugin-commonjs":"^24.0.1","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.2","@rollup/plugin-terser":"^0.4.1","@types/node":"^18.15.11","@types/prismjs":"^1.26.0","@typescript-eslint/eslint-plugin":"^5.57.1","@typescript-eslint/parser":"^5.57.1","@vitejs/plugin-vue":"^4.1.0","@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-eslint":"^5.0.8","@vue/cli-service":"^5.0.8","@vue/compiler-sfc":"^3.2.47","@vue/eslint-config-typescript":"^11.0.2",autoprefixer:"^10.4.13",eslint:"^8.38.0","eslint-config-prettier":"^8.8.0","eslint-plugin-import":"^2.27.5","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.10.0","gh-pages":"^5.0.0",husky:"^8.0.3","lint-staged":"^13.2.1",pinia:"^2.0.34",postcss:"^8.4.21","postcss-html":"^1.5.0","postcss-scss":"^4.0.6",prettier:"^2.8.7",rollup:"^3.20.2","rollup-plugin-copy":"^3.4.0","rollup-plugin-polyfill-node":"^0.12.0","rollup-plugin-postcss":"^4.0.2","rollup-plugin-scss":"^4.0.0","rollup-plugin-typescript2":"^0.34.1",sass:"^1.61.0",stylelint:"^15.4.0","stylelint-config-standard":"^32.0.0","stylelint-order":"^6.0.2","stylelint-scss":"^4.6.0",typescript:"^5.0.4",vite:"^4.2.1","vite-plugin-babel":"^1.1.3","vite-plugin-eslint":"^1.8.1","vite-plugin-stylelint":"^4.2.0",vue:"^3.2.47","vue-tsc":"^1.2.0"},or={name:Ph,version:ai,description:Bh,private:!1,main:Fh,module:Dh,types:zh,scripts:Uh,engines:Hh,"lint-staged":{"src/**/*.{js,ts,vue}":["npm run lint"]},author:qh,funding:Wh,license:Gh,files:Vh,repository:Kh,bugs:Yh,homepage:Jh,keywords:Zh,peerDependencies:Xh,dependencies:Qh,devDependencies:eg},ng=[{label:"Default",value:"default"},{label:"Coy",value:"coy"},{label:"Dark",value:"dark"},{label:"Funky",value:"funky"},{label:"Night Owl (Prism Themes Repo)",value:"themes-night-owl"},{label:"Okaidia",value:"okaidia"},{label:"Solarizedlight",value:"solarizedlight"},{label:"Tomorrow",value:"tomorrow"},{label:"Twilight",value:"twilight"}],tg=[{label:"Default",value:"default"},{label:"A11y Dark",value:"a11y-dark"},{label:"A11y Light",value:"a11y-light"},{label:"Agate",value:"agate"},{label:"An Old Hope",value:"an-old-hope"},{label:"Android Studio",value:"androidstudio"},{label:"Arduino Light",value:"arduino-light"},{label:"Arta",value:"arta"},{label:"Ascetic",value:"ascetic"},{label:"Atom One Dark Reasonable",value:"atom-one-dark-reasonable"},{label:"Atom One Dark",value:"atom-one-dark"},{label:"Atom One Light",value:"atom-one-light"},{label:"Brown Paper",value:"brown-paper"},{label:"Base16 One Dark",value:"base16-onedark"},{label:"CodePen Embed",value:"codepen-embed"},{label:"Color Brewer",value:"color-brewer"},{label:"Dark",value:"dark"},{label:"DeviBeans",value:"devibeans"},{label:"Docco",value:"docco"},{label:"Far",value:"far"},{label:"Felipec",value:"felipec"},{label:"Foundation",value:"foundation"},{label:"Github Dark Dimmed",value:"github-dark-dimmed"},{label:"Github Dark",value:"github-dark"},{label:"Github",value:"github"},{label:"GML",value:"gml"},{label:"Google Code",value:"googlecode"},{label:"Gradient Dark",value:"gradient-dark"},{label:"Gradient Light",value:"gradient-light"},{label:"Grayscale",value:"grayscale"},{label:"Hybrid",value:"hybrid"},{label:"Idea",value:"idea"},{label:"IntelliJ Light",value:"intellij-light"},{label:"IR Black",value:"ir-black"},{label:"ISBL Editor Dark",value:"isbl-editor-dark"},{label:"ISBL Editor Light",value:"isbl-editor-light"},{label:"Kimbie Dark",value:"kimbie-dark"},{label:"Kimbie Light",value:"kimbie-light"},{label:"Lightfair",value:"lightfair"},{label:"Lioshi",value:"lioshi"},{label:"Magula",value:"magula"},{label:"Mono Blue",value:"mono-blue"},{label:"Monokai Sublime",value:"monokai-sublime"},{label:"Monokai",value:"monokai"},{label:"Night Owl",value:"night-owl"},{label:"NNFX Dark",value:"nnfx-dark"},{label:"NNFX- Light",value:"nnfx-light"},{label:"Nord",value:"nord"},{label:"Obsidian",value:"obsidian"},{label:"Panda Syntax Dark",value:"panda-syntax-dark"},{label:"Panda Syntax Light",value:"panda-syntax-light"},{label:"Paraiso Dark",value:"paraiso-dark"},{label:"Paraiso Light",value:"paraiso-light"},{label:"Pojoaque",value:"pojoaque"},{label:"PureBasic",value:"purebasic"},{label:"Qt Creator Dark",value:"qtcreator-dark"},{label:"Qt Creator Light",value:"qtcreator-light"},{label:"Rainbow",value:"rainbow"},{label:"RouterOS",value:"routeros"},{label:"School Book",value:"school-book"},{label:"Shades of Purple",value:"shades-of-purple"},{label:"Srcery",value:"srcery"},{label:"Stack Overflow Dark",value:"stackoverflow-dark"},{label:"Stack Overflow Light",value:"stackoverflow-light"},{label:"Sunburst",value:"sunburst"},{label:"Tokyo Night Dark",value:"tokyo-night-dark"},{label:"Tokyo Night Light",value:"tokyo-night-light"},{label:"Tomorrow Night Blue",value:"tomorrow-night-blue"},{label:"Tomorrow Night Bright",value:"tomorrow-night-bright"},{label:"VS",value:"vs"},{label:"VS 2015",value:"vs2015"},{label:"Xcode",value:"xcode"},{label:"xt256",value:"xt256"}],si=or.dependencies,ri=or.name,co=si.prismjs.replace("^",""),uo=si["highlight.js"].replace("^",""),sa=`https://github.com/webdevnerdstuff/${ri}`,ag={changeLog:`${sa}/blob/main/CHANGELOG.md`,contribute:`${sa}/tree/main/src/plugin/styles`,github:sa,githubProfile:"https://github.com/webdevnerdstuff",license:`${sa}/blob/main/LICENSE.md`,neonBunnyTheme:"https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny",npm:`https://www.npmjs.com/package/${ri}`,uaParser:"https://www.npmjs.com/package/ua-parser-js",vueJs:"https://vuejs.org/"},sg={cdn:`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${uo}/build/styles/`,homepage:"https://highlightjs.org/",themes:`https://github.com/highlightjs/highlight.js/tree/${uo}/src/styles`},rg={cdn:`https://cdn.jsdelivr.net/gh/PrismJS/prism@${co}/themes/`,homepage:"https://prismjs.com/",prismThemes:`https://github.com/PrismJS/prism/tree/v${co}/themes`,themes:"https://github.com/PrismJS/prism-themes"},og={prism:{label:"PrismJS",id:"prism"},highlightjs:{label:"Highlight.js",id:"highlightjs"}},lg=[{label:"Neon Bunny",value:"neon-bunny"},{label:"Neon Bunny - Carrot",value:"neon-bunny-carrot"}],lr=Lh("core",{actions:{setLocalStorage(e){const n=localStorage.getItem(this.storageName),t=e??n;return localStorage.setItem(this.storageName,t),t},setTheme(e,n){let t=e;return t==="toggle"&&(t=n!=="dark"?"dark":"light"),document.documentElement.setAttribute("data-bs-theme",t),localStorage.setItem("theme",t),t}},getters:{getLocalStorage:e=>()=>localStorage.getItem(e.storageName)},state:()=>({highlightJsLinks:sg,highlightThemes:tg,libraries:og,links:ag,neonBunnyThemes:lg,package:or,prismLinks:rg,prismThemes:ng,storageName:"vue3-code-block-library"})}),ig="/vue3-code-block/assets/vue-5532db34.svg",cg={class:"row mb-5"},ug=h("h2",null,"Change Log",-1),hg=[ug],gg={class:"col-12"},dg=["href"],fg={__name:"ChangeLogSection",setup(e){const n=te("styleData"),t=te("links");return(a,s)=>(Z(),ne("div",cg,[h("div",{class:Se(b(n).h2ColClass)},hg,2),h("div",gg,[h("a",{href:b(t).changeLog,target:"_blank"},"CHANGELOG.md",8,dg)])]))}};const ir=(e,n)=>{const t=e.__vccOpts||e;for(const[a,s]of n)t[a]=s;return t},cr=e=>(Tl("data-v-465828f6"),e=e(),Cl(),e),pg={class:"row mb-5"},bg=cr(()=>h("h2",null,"CSS Variables",-1)),mg=[bg],yg=cr(()=>h("div",{class:"col-12 mb-3"},[h("p",null,[ie(" You can find all CSS variables defined in the "),h("code",null,"src/plugin/styles/cssVariables.css"),ie(" file. Colors are using "),h("code",null,"hsl"),ie(" values. ")])],-1)),vg={class:"col-12 mb-3"},jg={class:"table-responsive"},_g={class:"table"},wg=cr(()=>h("thead",null,[h("tr",null,[h("th",{width:"auto"},"Name"),h("th",null,"Value")])],-1)),kg={key:0,class:"text-success-emphasis bg-success-subtle"},xg={colspan:"2"},Eg={key:0,class:"text-dark-emphasis bg-dark-subtle",colspan:"2",valign:"top"},Sg={class:"td-nowrap",valign:"top"},Tg={key:0},Cg={key:1,valign:"top"},Ag={key:2,valign:"top"},Og={__name:"CssVariablesSection",setup(e){const n=te("styleData"),t=[{name:"Neon Bunny Theme Colors",header:!0,items:[{name:"neon-bunny",subHeader:!0},{name:"--v-cb-tab-neon-bunny",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-icon",hsl:"207 100% 52%"},{name:"--v-cb-tab-neon-bunny-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-icon-failed",hsl:"3 100% 58%"},{name:"neon-bunny-carrot",subHeader:!0},{name:"--v-cb-tab-neon-bunny-carrot",hsl:"0 0% 0%"},{name:"--v-cb-tab-neon-bunny-carrot-text",hsl:"0 0% 100%"},{name:"--v-cb-tab-neon-bunny-carrot-icon",hsl:"292 100% 50%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-success",hsl:"119 100% 51%"},{name:"--v-cb-tab-neon-bunny-carrot-icon-failed",hsl:"3 100% 58%"}]}];return(a,s)=>(Z(),ne("div",pg,[h("div",{class:Se(b(n).h2ColClass)},mg,2),yg,h("div",vg,[h("div",jg,[h("table",_g,[wg,(Z(),ne(Oe,null,Zn(t,r=>h("tbody",{key:r.name},[r.header?(Z(),ne("tr",kg,[h("th",xg,xe(r.name),1)])):Qe("",!0),(Z(!0),ne(Oe,null,Zn(r.items,o=>(Z(),ne("tr",{key:o},[o.subHeader?(Z(),ne("td",Eg,[h("strong",null,[h("em",null,xe(o.name),1)])])):(Z(),ne(Oe,{key:1},[h("td",Sg,xe(o.name),1),o.hsl?(Z(),ne("td",Tg,[o.hsl?(Z(),ne("span",{key:0,class:"color-swatch",style:Tn(`background-color: hsl(${o.hsl});`)},null,4)):Qe("",!0),ie(" "+xe(o.hsl),1)])):o.code?(Z(),ne("td",Cg,[h("code",null,xe(o.code),1)])):(Z(),ne("td",Ag,xe(o.value),1))],64))]))),128))])),64))])])])]))}},Ng=ir(Og,[["__scopeId","data-v-465828f6"]]),Mg={class:"row mb-5"},$g=h("h2",null,"Dependencies",-1),Ig=[$g],Rg={class:"col-12"},Lg=["href"],Pg=h("br",null,null,-1),Bg=["href"],Fg=h("br",null,null,-1),Dg=["href"],zg=h("br",null,null,-1),Ug=["href"],Hg={__name:"DependenciesSection",setup(e){const n=te("highlightJsLinks"),t=te("links"),a=te("prismLinks"),s=te("styleData");return(r,o)=>(Z(),ne("div",Mg,[h("div",{class:Se(b(s).h2ColClass)},Ig,2),h("div",Rg,[h("a",{href:b(a).homepage,target:"_blank"},"PrismJS",8,Lg),Pg,h("a",{href:b(n).homepage,target:"_blank"},"Highlight.js",8,Bg),Fg,h("a",{href:b(t).vueJs,target:"_blank"},"Vue 3",8,Dg),zg,h("a",{href:b(t).uaParser,target:"_blank"},"UAParser.js",8,Ug)])]))}};var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ur={exports:{}};function hr(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&hr(t)}),e}ur.exports=hr;ur.exports.default=hr;class ho{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function oi(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Cn(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const s in a)t[s]=a[s]}),t}const qg="</span>",go=e=>!!e.scope||e.sublanguage&&e.language,Wg=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,s)=>`${a}${"_".repeat(s+1)}`)].join(" ")}return`${n}${e}`};class Gg{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=oi(n)}openNode(n){if(!go(n))return;let t="";n.sublanguage?t=`language-${n.language}`:t=Wg(n.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(n){go(n)&&(this.buffer+=qg)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const fo=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class gr{constructor(){this.rootNode=fo(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=fo({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{gr._collapse(t)}))}}class Vg extends gr{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const a=n.root;a.sublanguage=!0,a.language=t,this.add(a)}toHTML(){return new Gg(this,this.options).value()}finalize(){return!0}}function Dt(e){return e?typeof e=="string"?e:e.source:null}function li(e){return et("(?=",e,")")}function Kg(e){return et("(?:",e,")*")}function Yg(e){return et("(?:",e,")?")}function et(...e){return e.map(t=>Dt(t)).join("")}function Jg(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function dr(...e){return"("+(Jg(e).capture?"":"?:")+e.map(a=>Dt(a)).join("|")+")"}function ii(e){return new RegExp(e.toString()+"|").exec("").length-1}function Zg(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Xg=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function fr(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const s=t;let r=Dt(a),o="";for(;r.length>0;){const l=Xg.exec(r);if(!l){o+=r;break}o+=r.substring(0,l.index),r=r.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?o+="\\"+String(Number(l[1])+s):(o+=l[0],l[0]==="("&&t++)}return o}).map(a=>`(${a})`).join(n)}const Qg=/\b\B/,ci="[a-zA-Z]\\w*",pr="[a-zA-Z_]\\w*",ui="\\b\\d+(\\.\\d+)?",hi="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",gi="\\b(0b[01]+)",ed="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",nd=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=et(n,/.*\b/,e.binary,/\b.*/)),Cn({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},zt={begin:"\\\\[\\s\\S]",relevance:0},td={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[zt]},ad={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[zt]},sd={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Xa=function(e,n,t={}){const a=Cn({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=dr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:et(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},rd=Xa("//","$"),od=Xa("/\\*","\\*/"),ld=Xa("#","$"),id={scope:"number",begin:ui,relevance:0},cd={scope:"number",begin:hi,relevance:0},ud={scope:"number",begin:gi,relevance:0},hd={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[zt,{begin:/\[/,end:/\]/,relevance:0,contains:[zt]}]}]},gd={scope:"title",begin:ci,relevance:0},dd={scope:"title",begin:pr,relevance:0},fd={begin:"\\.\\s*"+pr,relevance:0},pd=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ra=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Qg,IDENT_RE:ci,UNDERSCORE_IDENT_RE:pr,NUMBER_RE:ui,C_NUMBER_RE:hi,BINARY_NUMBER_RE:gi,RE_STARTERS_RE:ed,SHEBANG:nd,BACKSLASH_ESCAPE:zt,APOS_STRING_MODE:td,QUOTE_STRING_MODE:ad,PHRASAL_WORDS_MODE:sd,COMMENT:Xa,C_LINE_COMMENT_MODE:rd,C_BLOCK_COMMENT_MODE:od,HASH_COMMENT_MODE:ld,NUMBER_MODE:id,C_NUMBER_MODE:cd,BINARY_NUMBER_MODE:ud,REGEXP_MODE:hd,TITLE_MODE:gd,UNDERSCORE_TITLE_MODE:dd,METHOD_GUARD:fd,END_SAME_AS_BEGIN:pd});function bd(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function md(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function yd(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=bd,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function vd(e,n){Array.isArray(e.illegal)&&(e.illegal=dr(...e.illegal))}function jd(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function _d(e,n){e.relevance===void 0&&(e.relevance=1)}const wd=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=et(t.beforeMatch,li(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},kd=["of","and","for","in","not","or","if","then","parent","list","value"],xd="keyword";function di(e,n,t=xd){const a=Object.create(null);return typeof e=="string"?s(t,e.split(" ")):Array.isArray(e)?s(t,e):Object.keys(e).forEach(function(r){Object.assign(a,di(e[r],n,r))}),a;function s(r,o){n&&(o=o.map(l=>l.toLowerCase())),o.forEach(function(l){const i=l.split("|");a[i[0]]=[r,Ed(i[0],i[1])]})}}function Ed(e,n){return n?Number(n):Sd(e)?0:1}function Sd(e){return kd.includes(e.toLowerCase())}const po={},Jn=e=>{console.error(e)},bo=(e,...n)=>{console.log(`WARN: ${e}`,...n)},st=(e,n)=>{po[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),po[`${e}/${n}`]=!0)},Ca=new Error;function fi(e,n,{key:t}){let a=0;const s=e[t],r={},o={};for(let l=1;l<=n.length;l++)o[l+a]=s[l],r[l+a]=!0,a+=ii(n[l-1]);e[t]=o,e[t]._emit=r,e[t]._multi=!0}function Td(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Jn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ca;if(typeof e.beginScope!="object"||e.beginScope===null)throw Jn("beginScope must be object"),Ca;fi(e,e.begin,{key:"beginScope"}),e.begin=fr(e.begin,{joinWith:""})}}function Cd(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Jn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ca;if(typeof e.endScope!="object"||e.endScope===null)throw Jn("endScope must be object"),Ca;fi(e,e.end,{key:"endScope"}),e.end=fr(e.end,{joinWith:""})}}function Ad(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Od(e){Ad(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Td(e),Cd(e)}function Nd(e){function n(o,l){return new RegExp(Dt(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,i){i.position=this.position++,this.matchIndexes[this.matchAt]=i,this.regexes.push([i,l]),this.matchAt+=ii(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(i=>i[1]);this.matcherRe=n(fr(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const i=this.matcherRe.exec(l);if(!i)return null;const c=i.findIndex((f,g)=>g>0&&f!==void 0),u=this.matchIndexes[c];return i.splice(0,c),Object.assign(i,u)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const i=new t;return this.rules.slice(l).forEach(([c,u])=>i.addRule(c,u)),i.compile(),this.multiRegexes[l]=i,i}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,i){this.rules.push([l,i]),i.type==="begin"&&this.count++}exec(l){const i=this.getMatcher(this.regexIndex);i.lastIndex=this.lastIndex;let c=i.exec(l);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(l)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function s(o){const l=new a;return o.contains.forEach(i=>l.addRule(i.begin,{rule:i,type:"begin"})),o.terminatorEnd&&l.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&l.addRule(o.illegal,{type:"illegal"}),l}function r(o,l){const i=o;if(o.isCompiled)return i;[md,jd,Od,wd].forEach(u=>u(o,l)),e.compilerExtensions.forEach(u=>u(o,l)),o.__beforeBegin=null,[yd,vd,_d].forEach(u=>u(o,l)),o.isCompiled=!0;let c=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=di(o.keywords,e.case_insensitive)),i.keywordPatternRe=n(c,!0),l&&(o.begin||(o.begin=/\B|\b/),i.beginRe=n(i.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(i.endRe=n(i.end)),i.terminatorEnd=Dt(i.end)||"",o.endsWithParent&&l.terminatorEnd&&(i.terminatorEnd+=(o.end?"|":"")+l.terminatorEnd)),o.illegal&&(i.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(u){return Md(u==="self"?o:u)})),o.contains.forEach(function(u){r(u,i)}),o.starts&&r(o.starts,l),i.matcher=s(i),i}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Cn(e.classNameAliases||{}),r(e)}function pi(e){return e?e.endsWithParent||pi(e.starts):!1}function Md(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return Cn(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:pi(e)?Cn(e,{starts:e.starts?Cn(e.starts):null}):Object.isFrozen(e)?Cn(e):e}var $d="11.7.0";class Id extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const cs=oi,mo=Cn,yo=Symbol("nomatch"),Rd=7,Ld=function(e){const n=Object.create(null),t=Object.create(null),a=[];let s=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Vg};function i(M){return l.noHighlightRe.test(M)}function c(M){let B=M.className+" ";B+=M.parentNode?M.parentNode.className:"";const D=l.languageDetectRe.exec(B);if(D){const J=z(D[1]);return J||(bo(r.replace("{}",D[1])),bo("Falling back to no-highlight mode for this block.",M)),J?D[1]:"no-highlight"}return B.split(/\s+/).find(J=>i(J)||z(J))}function u(M,B,D){let J="",se="";typeof B=="object"?(J=M,D=B.ignoreIllegals,se=B.language):(st("10.7.0","highlight(lang, code, ...args) has been deprecated."),st("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),se=M,J=B),D===void 0&&(D=!0);const de={code:J,language:se};pe("before:highlight",de);const le=de.result?de.result:f(de.language,de.code,D);return le.code=de.code,pe("after:highlight",le),le}function f(M,B,D,J){const se=Object.create(null);function de(E,A){return E.keywords[A]}function le(){if(!T.keywords){P.addText(L);return}let E=0;T.keywordPatternRe.lastIndex=0;let A=T.keywordPatternRe.exec(L),I="";for(;A;){I+=L.substring(E,A.index);const H=S.case_insensitive?A[0].toLowerCase():A[0],oe=de(T,H);if(oe){const[ye,ge]=oe;if(P.addText(I),I="",se[H]=(se[H]||0)+1,se[H]<=Rd&&(F+=ge),ye.startsWith("_"))I+=A[0];else{const ae=S.classNameAliases[ye]||ye;P.addKeyword(A[0],ae)}}else I+=A[0];E=T.keywordPatternRe.lastIndex,A=T.keywordPatternRe.exec(L)}I+=L.substring(E),P.addText(I)}function ze(){if(L==="")return;let E=null;if(typeof T.subLanguage=="string"){if(!n[T.subLanguage]){P.addText(L);return}E=f(T.subLanguage,L,!0,q[T.subLanguage]),q[T.subLanguage]=E._top}else E=_(L,T.subLanguage.length?T.subLanguage:null);T.relevance>0&&(F+=E.relevance),P.addSublanguage(E._emitter,E.language)}function _e(){T.subLanguage!=null?ze():le(),L=""}function Ne(E,A){let I=1;const H=A.length-1;for(;I<=H;){if(!E._emit[I]){I++;continue}const oe=S.classNameAliases[E[I]]||E[I],ye=A[I];oe?P.addKeyword(ye,oe):(L=ye,le(),L=""),I++}}function G(E,A){return E.scope&&typeof E.scope=="string"&&P.openNode(S.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(P.addKeyword(L,S.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),L=""):E.beginScope._multi&&(Ne(E.beginScope,A),L="")),T=Object.create(E,{parent:{value:T}}),T}function ue(E,A,I){let H=Zg(E.endRe,I);if(H){if(E["on:end"]){const oe=new ho(E);E["on:end"](A,oe),oe.isMatchIgnored&&(H=!1)}if(H){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return ue(E.parent,A,I)}function Le(E){return T.matcher.regexIndex===0?(L+=E[0],1):(X=!0,0)}function fe(E){const A=E[0],I=E.rule,H=new ho(I),oe=[I.__beforeBegin,I["on:begin"]];for(const ye of oe)if(ye&&(ye(E,H),H.isMatchIgnored))return Le(A);return I.skip?L+=A:(I.excludeBegin&&(L+=A),_e(),!I.returnBegin&&!I.excludeBegin&&(L=A)),G(I,E),I.returnBegin?0:A.length}function We(E){const A=E[0],I=B.substring(E.index),H=ue(T,E,I);if(!H)return yo;const oe=T;T.endScope&&T.endScope._wrap?(_e(),P.addKeyword(A,T.endScope._wrap)):T.endScope&&T.endScope._multi?(_e(),Ne(T.endScope,E)):oe.skip?L+=A:(oe.returnEnd||oe.excludeEnd||(L+=A),_e(),oe.excludeEnd&&(L=A));do T.scope&&P.closeNode(),!T.skip&&!T.subLanguage&&(F+=T.relevance),T=T.parent;while(T!==H.parent);return H.starts&&G(H.starts,E),oe.returnEnd?0:A.length}function Fe(){const E=[];for(let A=T;A!==S;A=A.parent)A.scope&&E.unshift(A.scope);E.forEach(A=>P.openNode(A))}let d={};function v(E,A){const I=A&&A[0];if(L+=E,I==null)return _e(),0;if(d.type==="begin"&&A.type==="end"&&d.index===A.index&&I===""){if(L+=B.slice(A.index,A.index+1),!s){const H=new Error(`0 width match regex (${M})`);throw H.languageName=M,H.badRule=d.rule,H}return 1}if(d=A,A.type==="begin")return fe(A);if(A.type==="illegal"&&!D){const H=new Error('Illegal lexeme "'+I+'" for mode "'+(T.scope||"<unnamed>")+'"');throw H.mode=T,H}else if(A.type==="end"){const H=We(A);if(H!==yo)return H}if(A.type==="illegal"&&I==="")return 1;if(K>1e5&&K>A.index*3)throw new Error("potential infinite loop, way more iterations than matches");return L+=I,I.length}const S=z(M);if(!S)throw Jn(r.replace("{}",M)),new Error('Unknown language: "'+M+'"');const $=Nd(S);let N="",T=J||$;const q={},P=new l.__emitter(l);Fe();let L="",F=0,V=0,K=0,X=!1;try{for(T.matcher.considerAll();;){K++,X?X=!1:T.matcher.considerAll(),T.matcher.lastIndex=V;const E=T.matcher.exec(B);if(!E)break;const A=B.substring(V,E.index),I=v(A,E);V=E.index+I}return v(B.substring(V)),P.closeAllNodes(),P.finalize(),N=P.toHTML(),{language:M,value:N,relevance:F,illegal:!1,_emitter:P,_top:T}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:M,value:cs(B),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:V,context:B.slice(V-100,V+100),mode:E.mode,resultSoFar:N},_emitter:P};if(s)return{language:M,value:cs(B),illegal:!1,relevance:0,errorRaised:E,_emitter:P,_top:T};throw E}}function g(M){const B={value:cs(M),illegal:!1,relevance:0,_top:o,_emitter:new l.__emitter(l)};return B._emitter.addText(M),B}function _(M,B){B=B||l.languages||Object.keys(n);const D=g(M),J=B.filter(z).filter(ce).map(_e=>f(_e,M,!1));J.unshift(D);const se=J.sort((_e,Ne)=>{if(_e.relevance!==Ne.relevance)return Ne.relevance-_e.relevance;if(_e.language&&Ne.language){if(z(_e.language).supersetOf===Ne.language)return 1;if(z(Ne.language).supersetOf===_e.language)return-1}return 0}),[de,le]=se,ze=de;return ze.secondBest=le,ze}function j(M,B,D){const J=B&&t[B]||D;M.classList.add("hljs"),M.classList.add(`language-${J}`)}function y(M){let B=null;const D=c(M);if(i(D))return;if(pe("before:highlightElement",{el:M,language:D}),M.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(M)),l.throwUnescapedHTML))throw new Id("One of your code blocks includes unescaped HTML.",M.innerHTML);B=M;const J=B.textContent,se=D?u(J,{language:D,ignoreIllegals:!0}):_(J);M.innerHTML=se.value,j(M,D,se.language),M.result={language:se.language,re:se.relevance,relevance:se.relevance},se.secondBest&&(M.secondBest={language:se.secondBest.language,relevance:se.secondBest.relevance}),pe("after:highlightElement",{el:M,result:se,text:J})}function x(M){l=mo(l,M)}const C=()=>{w(),st("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function m(){w(),st("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let p=!1;function w(){if(document.readyState==="loading"){p=!0;return}document.querySelectorAll(l.cssSelector).forEach(y)}function k(){p&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",k,!1);function O(M,B){let D=null;try{D=B(e)}catch(J){if(Jn("Language definition for '{}' could not be registered.".replace("{}",M)),s)Jn(J);else throw J;D=o}D.name||(D.name=M),n[M]=D,D.rawDefinition=B.bind(null,e),D.aliases&&ee(D.aliases,{languageName:M})}function R(M){delete n[M];for(const B of Object.keys(t))t[B]===M&&delete t[B]}function U(){return Object.keys(n)}function z(M){return M=(M||"").toLowerCase(),n[M]||n[t[M]]}function ee(M,{languageName:B}){typeof M=="string"&&(M=[M]),M.forEach(D=>{t[D.toLowerCase()]=B})}function ce(M){const B=z(M);return B&&!B.disableAutodetect}function je(M){M["before:highlightBlock"]&&!M["before:highlightElement"]&&(M["before:highlightElement"]=B=>{M["before:highlightBlock"](Object.assign({block:B.el},B))}),M["after:highlightBlock"]&&!M["after:highlightElement"]&&(M["after:highlightElement"]=B=>{M["after:highlightBlock"](Object.assign({block:B.el},B))})}function ve(M){je(M),a.push(M)}function pe(M,B){const D=M;a.forEach(function(J){J[D]&&J[D](B)})}function we(M){return st("10.7.0","highlightBlock will be removed entirely in v12.0"),st("10.7.0","Please use highlightElement now."),y(M)}Object.assign(e,{highlight:u,highlightAuto:_,highlightAll:w,highlightElement:y,highlightBlock:we,configure:x,initHighlighting:C,initHighlightingOnLoad:m,registerLanguage:O,unregisterLanguage:R,listLanguages:U,getLanguage:z,registerAliases:ee,autoDetection:ce,inherit:mo,addPlugin:ve}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString=$d,e.regex={concat:et,lookahead:li,either:dr,optional:Yg,anyNumberOfTimes:Kg};for(const M in ra)typeof ra[M]=="object"&&ur.exports(ra[M]);return Object.assign(e,ra),e};var Ut=Ld({}),Pd=Ut;Ut.HighlightJS=Ut;Ut.default=Ut;const us=Pd;function Bd(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],s={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Fd(e){const n=e.regex,t=/(?![A-Za-z0-9])(?![$])/,a=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,t),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,t),r={scope:"variable",match:"\\$+"+a},o={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null}),c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(l)}),u=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(l)}),f=`[ 	
]`,g={scope:"string",variants:[c,i,u]},_={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},j=["false","null","true"],y=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],x=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],m={keyword:y,literal:(je=>{const ve=[];return je.forEach(pe=>{ve.push(pe),pe.toLowerCase()===pe?ve.push(pe.toUpperCase()):ve.push(pe.toLowerCase())}),ve})(j),built_in:x},p=je=>je.map(ve=>ve.replace(/\|\d+$/,"")),w={variants:[{match:[/new/,n.concat(f,"+"),n.concat("(?!",p(x).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},k=n.concat(a,"\\b(?!\\()"),O={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),k],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),k],scope:{1:"title.class",3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},R={scope:"attr",match:n.concat(a,n.lookahead(":"),n.lookahead(/(?!::)/))},U={relevance:0,begin:/\(/,end:/\)/,keywords:m,contains:[R,r,O,e.C_BLOCK_COMMENT_MODE,g,_,w]},z={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",p(y).join("\\b|"),"|",p(x).join("\\b|"),"\\b)"),a,n.concat(f,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[U]};U.contains.push(z);const ee=[R,O,e.C_BLOCK_COMMENT_MODE,g,_,w],ce={begin:n.concat(/#\[\s*/,s),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:j,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:j,keyword:["new","array"]},contains:["self",...ee]},...ee,{scope:"meta",match:s}]};return{case_insensitive:!1,keywords:m,contains:[ce,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},o,{scope:"variable.language",match:/\$this\b/},r,z,O,{match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},w,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:m,contains:["self",r,O,e.C_BLOCK_COMMENT_MODE,g,_]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},g,_]}}const Aa="[A-Za-z$_][0-9A-Za-z$_]*",bi=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],mi=["true","false","null","undefined","NaN","Infinity"],yi=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],vi=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ji=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],_i=["arguments","this","super","console","window","document","localStorage","module","global"],wi=[].concat(ji,yi,vi);function Dd(e){const n=e.regex,t=(B,{after:D})=>{const J="</"+B[0].slice(1);return B.input.indexOf(J,D)!==-1},a=Aa,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,D)=>{const J=B[0].length+B.index,se=B.input[J];if(se==="<"||se===","){D.ignoreMatch();return}se===">"&&(t(B,{after:J})||D.ignoreMatch());let de;const le=B.input.substring(J);if(de=le.match(/^\s*=/)){D.ignoreMatch();return}if((de=le.match(/^\s+extends\s+/))&&de.index===0){D.ignoreMatch();return}}},l={$pattern:Aa,keyword:bi,literal:mi,built_in:wi,"variable.language":_i},i="[0-9](_?[0-9])*",c=`\\.(${i})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${i})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},_={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},j={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,j,y,{match:/\$\d+/},f];g.contains=m.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(m)});const p=[].concat(C,g.contains),w=p.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(p)}]),k={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w},O={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...yi,...vi]}},U={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},z={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[k],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(B){return n.concat("(?!",B.join("|"),")")}const je={match:n.concat(/\b/,ce([...ji,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},pe={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},k]},we="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(we)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[k]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),U,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,j,y,C,{match:/\$\d+/},f,R,{className:"attr",begin:a+n.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:we,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[k,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[k]},je,ee,O,pe,{match:/\$[(.]/}]}}function zd(e){const n=Dd(e),t=Aa,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},r={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],i={$pattern:Aa,keyword:bi.concat(l),literal:mi,built_in:wi.concat(a),"variable.language":_i},c={className:"meta",begin:"@"+t},u=(g,_,j)=>{const y=g.contains.findIndex(x=>x.label===_);if(y===-1)throw new Error("can not find mode to replace");g.contains.splice(y,1,j)};Object.assign(n.keywords,i),n.exports.PARAMS_CONTAINS.push(c),n.contains=n.contains.concat([c,s,r]),u(n,"shebang",e.SHEBANG()),u(n,"use_strict",o);const f=n.contains.find(g=>g.label==="func.def");return f.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}const Ud=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Additional Languages")])],-1),Hd={id:"additional-languages-json-usage-example",class:"row mb-4"},qd={class:"col-12"},Wd={id:"additional-languages-ts-usage-example",class:"row mb-4"},Gd={class:"col-12"},Vd={id:"additional-languages-ts-example",class:"row mb-4"},Kd={class:"col-12"},Yd={id:"additional-languages-json-example",class:"row mb-4"},Jd={class:"col-12"},Zd={class:"col-12"},Xd={id:"additional-languages-php-usage-example",class:"row mb-4"},Qd={class:"col-12"},ef={id:"additional-languages-php-example",class:"row mb-4"},nf={class:"col-12"},tf={__name:"AdditionalLangExamples",setup(e){us.registerLanguage("json",Bd),us.registerLanguage("php",Fd),us.registerLanguage("typescript",zd);const n=te("selectedLibrary"),t=te("selectedTheme"),a={prism:{json:`<template>
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
<\/script>`}},s=`class Person {
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
person.sayHello();`,r=`{
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
`,o=`<?php

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
?>`;return(l,i)=>{const c=Ze("CodeBlock");return Z(),ne("div",null,[Ud,h("div",Hd,[h("div",qd,[h("p",null,xe(b(n).label)+" does not load all languages by default. In order to use additional languages you will need to import that languages component. ",1)])]),h("div",Wd,[h("div",Gd,[W(c,{code:a[b(n).id].typescript,highlightjs:b(n).id==="highlightjs",label:`Example of using ${b(n).label} to highlight TypeScript`,lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),h("div",Vd,[h("div",Kd,[W(c,{code:s,highlightjs:b(n).id==="highlightjs",label:"TypeScript",lang:"typescript",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])]),h("div",Yd,[h("div",Jd,[W(c,{code:a[b(n).id].json,highlightjs:b(n).id==="highlightjs",label:`Example of using ${b(n).label} to highlight JSON`,lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","label","prismjs","theme"])]),h("div",Zd,[W(c,{code:r,highlightjs:b(n).id==="highlightjs",indent:2,label:"JSON",lang:"json",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])]),h("div",Xd,[h("div",Qd,[W(c,{code:a[b(n).id].php,highlightjs:b(n).id==="highlightjs",label:`Example of using ${b(n).label} to highlight PHP`,lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","label","prismjs","theme"])])]),h("div",ef,[h("div",nf,[W(c,{code:o,height:"500px",highlightjs:b(n).id==="highlightjs",indent:2,label:"PHP",lang:"php",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])])])}}},af=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Browser Window")])],-1),sf={id:"browser-window-example",class:"row mb-4"},rf={class:"col-12"},of={__name:"BrowserWindowExamples",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a={prism:`<CodeBlock
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
/>`};return(s,r)=>{const o=Ze("CodeBlock");return Z(),ne("div",null,[af,h("div",sf,[h("div",rf,[W(o,{"browser-window":!0,code:a[b(n).id],highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},lf=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Copy Button")])],-1),cf={id:"button-example",class:"row mb-4"},uf={class:"col-12"},hf={id:"persistent-button-example",class:"row mb-4"},gf={class:"col-12"},df={__name:"ButtonExamples",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a={prism:{btn:`<CodeBlock
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
/>`}};return(s,r)=>{const o=Ze("CodeBlock");return Z(),ne("div",null,[lf,h("div",cf,[h("div",uf,[W(o,{code:a[b(n).id].btn,highlightjs:b(n).id==="highlightjs",label:"Visible on hover",lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","prismjs","theme"])])]),h("div",hf,[h("div",gf,[W(o,{code:a[b(n).id].btnPersist,highlightjs:b(n).id==="highlightjs",label:"Persistent Copy Button",lang:"html","persistent-copy-button":"",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},null,8,["code","highlightjs","prismjs","theme"])])])])}}},ki=`/**
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
`,ff=`/**
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
`,pf=`/**
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

.hljs.language-html .hljs-tag .hljs-attr,
.hljs .language-html .hljs-tag .hljs-attr {
 color: var(--neon-bunny-html-tag-attr);
}

.hljs.language-css,
.hljs .language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in,
.hljs .language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char,
.hljs .language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment,
.hljs .language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag,
.hljs .language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword,
.hljs .language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal,
.hljs .language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number,
.hljs .language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator,
.hljs .language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params,
.hljs .language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property,
.hljs .language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation,
.hljs .language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp,
.hljs .language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string,
.hljs .language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst,
.hljs .language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol,
.hljs .language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title,
.hljs .language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_,
.hljs .language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__,
.hljs .language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_,
.hljs .language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__,
.hljs .language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type,
.hljs .language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable,
.hljs .language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_,
.hljs .language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_,
.hljs .language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta,
.hljs .language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_,
.hljs .language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_,
.hljs .language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_,
.hljs .language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr,
.hljs .language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute,
.hljs .language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name,
.hljs .language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section,
.hljs .language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag,
.hljs .language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet,
.hljs .language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code,
.hljs .language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis,
.hljs .language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula,
.hljs .language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link,
.hljs .language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote,
.hljs .language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong,
.hljs .language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector,
.hljs .language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr,
.hljs .language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class,
.hljs .language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id,
.hljs .language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo,
.hljs .language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag,
.hljs .language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition,
.hljs .language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion,
.hljs .language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-json .hljs-punctuation,
.hljs .language-json .hljs-punctuation {
 color: var(--neon-bunny-json-punctuation);
}

.hljs.language-javascript, .hljs.language-js,
.hljs .language-javascript,
.hljs .language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in,
.hljs .language-javascript .hljs-built_in,
.hljs .language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char,
.hljs .language-javascript .hljs-char,
.hljs .language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment,
.hljs .language-javascript .hljs-comment,
.hljs .language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag,
.hljs .language-javascript .hljs-doctag,
.hljs .language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword,
.hljs .language-javascript .hljs-keyword,
.hljs .language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal,
.hljs .language-javascript .hljs-literal,
.hljs .language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number,
.hljs .language-javascript .hljs-number,
.hljs .language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator,
.hljs .language-javascript .hljs-operator,
.hljs .language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params,
.hljs .language-javascript .hljs-params,
.hljs .language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_,
.hljs .language-javascript .hljs-params .hljs-variable.language_,
.hljs .language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property,
.hljs .language-javascript .hljs-property,
.hljs .language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation,
.hljs .language-javascript .hljs-punctuation,
.hljs .language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp,
.hljs .language-javascript .hljs-regexp,
.hljs .language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string,
.hljs .language-javascript .hljs-string,
.hljs .language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst,
.hljs .language-javascript .hljs-subst,
.hljs .language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol,
.hljs .language-javascript .hljs-symbol,
.hljs .language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title,
.hljs .language-javascript .hljs-title,
.hljs .language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_,
.hljs .language-javascript .hljs-title.class_,
.hljs .language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__,
.hljs .language-javascript .hljs-title.class_.inherited__,
.hljs .language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_,
.hljs .language-javascript .hljs-title.function_,
.hljs .language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__,
.hljs .language-javascript .hljs-title.function_.invoke__,
.hljs .language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type,
.hljs .language-javascript .hljs-type,
.hljs .language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable,
.hljs .language-javascript .hljs-variable,
.hljs .language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_,
.hljs .language-javascript .hljs-variable.constant_,
.hljs .language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_,
.hljs .language-javascript .hljs-variable.language_,
.hljs .language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta,
.hljs .language-javascript .hljs-meta,
.hljs .language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_,
.hljs .language-javascript .hljs-meta.prompt_,
.hljs .language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_,
.hljs .language-javascript .hljs-meta.keyword_,
.hljs .language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_,
.hljs .language-javascript .hljs-meta.string_,
.hljs .language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr,
.hljs .language-javascript .hljs-attr,
.hljs .language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute,
.hljs .language-javascript .hljs-attribute,
.hljs .language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name,
.hljs .language-javascript .hljs-name,
.hljs .language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section,
.hljs .language-javascript .hljs-section,
.hljs .language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag,
.hljs .language-javascript .hljs-tag,
.hljs .language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet,
.hljs .language-javascript .hljs-bullet,
.hljs .language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code,
.hljs .language-javascript .hljs-code,
.hljs .language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis,
.hljs .language-javascript .hljs-emphasis,
.hljs .language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula,
.hljs .language-javascript .hljs-formula,
.hljs .language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link,
.hljs .language-javascript .hljs-link,
.hljs .language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote,
.hljs .language-javascript .hljs-quote,
.hljs .language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong,
.hljs .language-javascript .hljs-strong,
.hljs .language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector,
.hljs .language-javascript .hljs-selector,
.hljs .language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr,
.hljs .language-javascript .hljs-selector-attr,
.hljs .language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class,
.hljs .language-javascript .hljs-selector-class,
.hljs .language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id,
.hljs .language-javascript .hljs-selector-id,
.hljs .language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo,
.hljs .language-javascript .hljs-selector-pseudo,
.hljs .language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag,
.hljs .language-javascript .hljs-selector-tag,
.hljs .language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition,
.hljs .language-javascript .hljs-addition,
.hljs .language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion,
.hljs .language-javascript .hljs-deletion,
.hljs .language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php,
.hljs .language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in,
.hljs .language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char,
.hljs .language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title,
.hljs .language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword,
.hljs .language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment,
.hljs .language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag,
.hljs .language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title,
.hljs .language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword,
.hljs .language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal,
.hljs .language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number,
.hljs .language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator,
.hljs .language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params,
.hljs .language-php .hljs-params {
 color: var(--neon-bunny-php-params);
 font-style: italic;
}

.hljs.language-php .hljs-params .hljs-variable,
.hljs .language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property,
.hljs .language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation,
.hljs .language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp,
.hljs .language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string,
.hljs .language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst,
.hljs .language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol,
.hljs .language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title,
.hljs .language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_,
.hljs .language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
 font-style: italic;
}

.hljs.language-php .hljs-title.class_.inherited__,
.hljs .language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_,
.hljs .language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__,
.hljs .language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type,
.hljs .language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable,
.hljs .language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_,
.hljs .language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_,
.hljs .language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta,
.hljs .language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_,
.hljs .language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_,
.hljs .language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_,
.hljs .language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr,
.hljs .language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute,
.hljs .language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name,
.hljs .language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section,
.hljs .language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag,
.hljs .language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet,
.hljs .language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code,
.hljs .language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis,
.hljs .language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula,
.hljs .language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link,
.hljs .language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote,
.hljs .language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong,
.hljs .language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector,
.hljs .language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr,
.hljs .language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class,
.hljs .language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id,
.hljs .language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo,
.hljs .language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag,
.hljs .language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition,
.hljs .language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion,
.hljs .language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}
`,bf=`/**
* MIT License
* Copyright (c) 2023 WebDevNerdStuff
* WebDevNerdStuff Neon Bunny Carrot
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
 /* -------------------------------------------------- HTML */
 --neon-bunny-html-tag-attr: var(--neon-bunny-orange-light);
 /* -------------------------------------------------- CSS */
 --neon-bunny-css: var(--neon-bunny-teal);
 /* ------------------------- General purpose */
 --neon-bunny-css-builtin: var(--neon-bunny-orange);
 /* ------------------------- Meta */
 --neon-bunny-css-meta: var(--neon-bunny-red);
 /* ------------------------- Tags, attributes, configs */
 --neon-bunny-css-attribute: var(--neon-bunny-pink);
 /* -------------------------------------------------- JSON */
 --neon-bunny-json-punctuation: var(--neon-bunny-white);
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

.hljs.language-html .hljs-tag .hljs-attr,
.hljs .language-html .hljs-tag .hljs-attr {
 color: var(--neon-bunny-html-tag-attr);
}

.hljs.language-css,
.hljs .language-css {
 color: var(--neon-bunny-css);
}

.hljs.language-css .hljs-built_in,
.hljs .language-css .hljs-built_in {
 color: var(--neon-bunny-css-builtin);
}

.hljs.language-css .hljs-char,
.hljs .language-css .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-css .hljs-comment,
.hljs .language-css .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-css .hljs-doctag,
.hljs .language-css .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-css .hljs-keyword,
.hljs .language-css .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-css .hljs-literal,
.hljs .language-css .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-css .hljs-number,
.hljs .language-css .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-css .hljs-operator,
.hljs .language-css .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-css .hljs-params,
.hljs .language-css .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-css .hljs-property,
.hljs .language-css .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-css .hljs-punctuation,
.hljs .language-css .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-css .hljs-regexp,
.hljs .language-css .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-css .hljs-string,
.hljs .language-css .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-css .hljs-subst,
.hljs .language-css .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-css .hljs-symbol,
.hljs .language-css .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-css .hljs-title,
.hljs .language-css .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-css .hljs-title.class_,
.hljs .language-css .hljs-title.class_ {
 color: var(--neon-bunny-title-class);
}

.hljs.language-css .hljs-title.class_.inherited__,
.hljs .language-css .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-css .hljs-title.function_,
.hljs .language-css .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-css .hljs-title.function_.invoke__,
.hljs .language-css .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-css .hljs-type,
.hljs .language-css .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-css .hljs-variable,
.hljs .language-css .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-css .hljs-variable.constant_,
.hljs .language-css .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-css .hljs-variable.language_,
.hljs .language-css .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-css .hljs-meta,
.hljs .language-css .hljs-meta {
 color: var(--neon-bunny-css-meta);
}

.hljs.language-css .hljs-meta.prompt_,
.hljs .language-css .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-css .hljs-meta.keyword_,
.hljs .language-css .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-css .hljs-meta.string_,
.hljs .language-css .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-css .hljs-attr,
.hljs .language-css .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-css .hljs-attribute,
.hljs .language-css .hljs-attribute {
 color: var(--neon-bunny-css-attribute);
}

.hljs.language-css .hljs-name,
.hljs .language-css .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-css .hljs-section,
.hljs .language-css .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-css .hljs-tag,
.hljs .language-css .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-css .hljs-bullet,
.hljs .language-css .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-css .hljs-code,
.hljs .language-css .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-css .hljs-emphasis,
.hljs .language-css .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-css .hljs-formula,
.hljs .language-css .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-css .hljs-link,
.hljs .language-css .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-css .hljs-quote,
.hljs .language-css .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-css .hljs-strong,
.hljs .language-css .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-css .hljs-selector,
.hljs .language-css .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-css .hljs-selector-attr,
.hljs .language-css .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-css .hljs-selector-class,
.hljs .language-css .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-css .hljs-selector-id,
.hljs .language-css .hljs-selector-id {
 color: var(--neon-bunny-css-selector-id);
}

.hljs.language-css .hljs-selector-pseudo,
.hljs .language-css .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-css .hljs-selector-tag,
.hljs .language-css .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-css .hljs-addition,
.hljs .language-css .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-css .hljs-deletion,
.hljs .language-css .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-json .hljs-punctuation,
.hljs .language-json .hljs-punctuation {
 color: var(--neon-bunny-json-punctuation);
}

.hljs.language-javascript, .hljs.language-js,
.hljs .language-javascript,
.hljs .language-js {
 color: var(--neon-bunny-js);
}

.hljs.language-javascript .hljs-built_in, .hljs.language-js .hljs-built_in,
.hljs .language-javascript .hljs-built_in,
.hljs .language-js .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-javascript .hljs-char, .hljs.language-js .hljs-char,
.hljs .language-javascript .hljs-char,
.hljs .language-js .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-javascript .hljs-comment, .hljs.language-js .hljs-comment,
.hljs .language-javascript .hljs-comment,
.hljs .language-js .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-javascript .hljs-doctag, .hljs.language-js .hljs-doctag,
.hljs .language-javascript .hljs-doctag,
.hljs .language-js .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-javascript .hljs-keyword, .hljs.language-js .hljs-keyword,
.hljs .language-javascript .hljs-keyword,
.hljs .language-js .hljs-keyword {
 color: var(--neon-bunny-keyword);
}

.hljs.language-javascript .hljs-literal, .hljs.language-js .hljs-literal,
.hljs .language-javascript .hljs-literal,
.hljs .language-js .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-javascript .hljs-number, .hljs.language-js .hljs-number,
.hljs .language-javascript .hljs-number,
.hljs .language-js .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-javascript .hljs-operator, .hljs.language-js .hljs-operator,
.hljs .language-javascript .hljs-operator,
.hljs .language-js .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-javascript .hljs-params, .hljs.language-js .hljs-params,
.hljs .language-javascript .hljs-params,
.hljs .language-js .hljs-params {
 color: var(--neon-bunny-params);
 font-style: italic;
}

.hljs.language-javascript .hljs-params .hljs-variable.language_, .hljs.language-js .hljs-params .hljs-variable.language_,
.hljs .language-javascript .hljs-params .hljs-variable.language_,
.hljs .language-js .hljs-params .hljs-variable.language_ {
 color: var(--neon-bunny-js-params-variable-language);
}

.hljs.language-javascript .hljs-property, .hljs.language-js .hljs-property,
.hljs .language-javascript .hljs-property,
.hljs .language-js .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-javascript .hljs-punctuation, .hljs.language-js .hljs-punctuation,
.hljs .language-javascript .hljs-punctuation,
.hljs .language-js .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-javascript .hljs-regexp, .hljs.language-js .hljs-regexp,
.hljs .language-javascript .hljs-regexp,
.hljs .language-js .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-javascript .hljs-string, .hljs.language-js .hljs-string,
.hljs .language-javascript .hljs-string,
.hljs .language-js .hljs-string {
 color: var(--neon-bunny-string);
}

.hljs.language-javascript .hljs-subst, .hljs.language-js .hljs-subst,
.hljs .language-javascript .hljs-subst,
.hljs .language-js .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-javascript .hljs-symbol, .hljs.language-js .hljs-symbol,
.hljs .language-javascript .hljs-symbol,
.hljs .language-js .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-javascript .hljs-title, .hljs.language-js .hljs-title,
.hljs .language-javascript .hljs-title,
.hljs .language-js .hljs-title {
 color: var(--neon-bunny-title);
}

.hljs.language-javascript .hljs-title.class_, .hljs.language-js .hljs-title.class_,
.hljs .language-javascript .hljs-title.class_,
.hljs .language-js .hljs-title.class_ {
 color: var(--neon-bunny-js-title-class);
}

.hljs.language-javascript .hljs-title.class_.inherited__, .hljs.language-js .hljs-title.class_.inherited__,
.hljs .language-javascript .hljs-title.class_.inherited__,
.hljs .language-js .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-javascript .hljs-title.function_, .hljs.language-js .hljs-title.function_,
.hljs .language-javascript .hljs-title.function_,
.hljs .language-js .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-javascript .hljs-title.function_.invoke__, .hljs.language-js .hljs-title.function_.invoke__,
.hljs .language-javascript .hljs-title.function_.invoke__,
.hljs .language-js .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-title-function-invoke);
}

.hljs.language-javascript .hljs-type, .hljs.language-js .hljs-type,
.hljs .language-javascript .hljs-type,
.hljs .language-js .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-javascript .hljs-variable, .hljs.language-js .hljs-variable,
.hljs .language-javascript .hljs-variable,
.hljs .language-js .hljs-variable {
 color: var(--neon-bunny-variable);
}

.hljs.language-javascript .hljs-variable.constant_, .hljs.language-js .hljs-variable.constant_,
.hljs .language-javascript .hljs-variable.constant_,
.hljs .language-js .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-javascript .hljs-variable.language_, .hljs.language-js .hljs-variable.language_,
.hljs .language-javascript .hljs-variable.language_,
.hljs .language-js .hljs-variable.language_ {
 color: var(--neon-bunny-js-variable-language);
}

.hljs.language-javascript .hljs-meta, .hljs.language-js .hljs-meta,
.hljs .language-javascript .hljs-meta,
.hljs .language-js .hljs-meta {
 color: var(--neon-bunny-meta);
}

.hljs.language-javascript .hljs-meta.prompt_, .hljs.language-js .hljs-meta.prompt_,
.hljs .language-javascript .hljs-meta.prompt_,
.hljs .language-js .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-javascript .hljs-meta.keyword_, .hljs.language-js .hljs-meta.keyword_,
.hljs .language-javascript .hljs-meta.keyword_,
.hljs .language-js .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-javascript .hljs-meta.string_, .hljs.language-js .hljs-meta.string_,
.hljs .language-javascript .hljs-meta.string_,
.hljs .language-js .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-javascript .hljs-attr, .hljs.language-js .hljs-attr,
.hljs .language-javascript .hljs-attr,
.hljs .language-js .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-javascript .hljs-attribute, .hljs.language-js .hljs-attribute,
.hljs .language-javascript .hljs-attribute,
.hljs .language-js .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-javascript .hljs-name, .hljs.language-js .hljs-name,
.hljs .language-javascript .hljs-name,
.hljs .language-js .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-javascript .hljs-section, .hljs.language-js .hljs-section,
.hljs .language-javascript .hljs-section,
.hljs .language-js .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-javascript .hljs-tag, .hljs.language-js .hljs-tag,
.hljs .language-javascript .hljs-tag,
.hljs .language-js .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-javascript .hljs-bullet, .hljs.language-js .hljs-bullet,
.hljs .language-javascript .hljs-bullet,
.hljs .language-js .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-javascript .hljs-code, .hljs.language-js .hljs-code,
.hljs .language-javascript .hljs-code,
.hljs .language-js .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-javascript .hljs-emphasis, .hljs.language-js .hljs-emphasis,
.hljs .language-javascript .hljs-emphasis,
.hljs .language-js .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-javascript .hljs-formula, .hljs.language-js .hljs-formula,
.hljs .language-javascript .hljs-formula,
.hljs .language-js .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-javascript .hljs-link, .hljs.language-js .hljs-link,
.hljs .language-javascript .hljs-link,
.hljs .language-js .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-javascript .hljs-quote, .hljs.language-js .hljs-quote,
.hljs .language-javascript .hljs-quote,
.hljs .language-js .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-javascript .hljs-strong, .hljs.language-js .hljs-strong,
.hljs .language-javascript .hljs-strong,
.hljs .language-js .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-javascript .hljs-selector, .hljs.language-js .hljs-selector,
.hljs .language-javascript .hljs-selector,
.hljs .language-js .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-javascript .hljs-selector-attr, .hljs.language-js .hljs-selector-attr,
.hljs .language-javascript .hljs-selector-attr,
.hljs .language-js .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-javascript .hljs-selector-class, .hljs.language-js .hljs-selector-class,
.hljs .language-javascript .hljs-selector-class,
.hljs .language-js .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-javascript .hljs-selector-id, .hljs.language-js .hljs-selector-id,
.hljs .language-javascript .hljs-selector-id,
.hljs .language-js .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-javascript .hljs-selector-pseudo, .hljs.language-js .hljs-selector-pseudo,
.hljs .language-javascript .hljs-selector-pseudo,
.hljs .language-js .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-javascript .hljs-selector-tag, .hljs.language-js .hljs-selector-tag,
.hljs .language-javascript .hljs-selector-tag,
.hljs .language-js .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-javascript .hljs-addition, .hljs.language-js .hljs-addition,
.hljs .language-javascript .hljs-addition,
.hljs .language-js .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-javascript .hljs-deletion, .hljs.language-js .hljs-deletion,
.hljs .language-javascript .hljs-deletion,
.hljs .language-js .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

.hljs.language-php,
.hljs .language-php {
 color: var(--neon-bunny-php);
}

.hljs.language-php .hljs-built_in,
.hljs .language-php .hljs-built_in {
 color: var(--neon-bunny-builtin);
}

.hljs.language-php .hljs-char,
.hljs .language-php .hljs-char {
 color: var(--neon-bunny-char);
}

.hljs.language-php .hljs-class .hljs-title,
.hljs .language-php .hljs-class .hljs-title {
 color: var(--neon-bunny-php-class-title) !important;
}

.hljs.language-php .hljs-class .hljs-keyword,
.hljs .language-php .hljs-class .hljs-keyword {
 color: var(--neon-bunny-php-class-keyword);
}

.hljs.language-php .hljs-comment,
.hljs .language-php .hljs-comment {
 color: var(--neon-bunny-comment);
}

.hljs.language-php .hljs-doctag,
.hljs .language-php .hljs-doctag {
 color: var(--neon-bunny-doctag);
}

.hljs.language-php .hljs-function .hljs-title,
.hljs .language-php .hljs-function .hljs-title {
 color: var(--neon-bunny-php-function-title);
}

.hljs.language-php .hljs-keyword,
.hljs .language-php .hljs-keyword {
 color: var(--neon-bunny-php-keyword);
}

.hljs.language-php .hljs-literal,
.hljs .language-php .hljs-literal {
 color: var(--neon-bunny-literal);
}

.hljs.language-php .hljs-number,
.hljs .language-php .hljs-number {
 color: var(--neon-bunny-number);
}

.hljs.language-php .hljs-operator,
.hljs .language-php .hljs-operator {
 color: var(--neon-bunny-operator);
}

.hljs.language-php .hljs-params,
.hljs .language-php .hljs-params {
 color: var(--neon-bunny-php-params);
}

.hljs.language-php .hljs-params .hljs-variable,
.hljs .language-php .hljs-params .hljs-variable {
 color: var(--neon-bunny-php-params-variable);
}

.hljs.language-php .hljs-property,
.hljs .language-php .hljs-property {
 color: var(--neon-bunny-property);
}

.hljs.language-php .hljs-punctuation,
.hljs .language-php .hljs-punctuation {
 color: var(--neon-bunny-punctuation);
}

.hljs.language-php .hljs-regexp,
.hljs .language-php .hljs-regexp {
 color: var(--neon-bunny-regex);
}

.hljs.language-php .hljs-string,
.hljs .language-php .hljs-string {
 color: var(--neon-bunny-php-string);
}

.hljs.language-php .hljs-subst,
.hljs .language-php .hljs-subst {
 color: var(--neon-bunny-subst);
}

.hljs.language-php .hljs-symbol,
.hljs .language-php .hljs-symbol {
 color: var(--neon-bunny-symbol);
}

.hljs.language-php .hljs-title,
.hljs .language-php .hljs-title {
 color: var(--neon-bunny-php-title);
}

.hljs.language-php .hljs-title.class_,
.hljs .language-php .hljs-title.class_ {
 color: var(--neon-bunny-php-title-class);
}

.hljs.language-php .hljs-title.class_.inherited__,
.hljs .language-php .hljs-title.class_.inherited__ {
 color: var(--neon-bunny-title-class-inherited);
}

.hljs.language-php .hljs-title.function_,
.hljs .language-php .hljs-title.function_ {
 color: var(--neon-bunny-title-function);
}

.hljs.language-php .hljs-title.function_.invoke__,
.hljs .language-php .hljs-title.function_.invoke__ {
 color: var(--neon-bunny-php-title-function-invoke);
}

.hljs.language-php .hljs-type,
.hljs .language-php .hljs-type {
 color: var(--neon-bunny-type);
}

.hljs.language-php .hljs-variable,
.hljs .language-php .hljs-variable {
 color: var(--neon-bunny-php-variable);
}

.hljs.language-php .hljs-variable.constant_,
.hljs .language-php .hljs-variable.constant_ {
 color: var(--neon-bunny-variable-constant);
}

.hljs.language-php .hljs-variable.language_,
.hljs .language-php .hljs-variable.language_ {
 color: var(--neon-bunny-variable-language);
}

.hljs.language-php .hljs-meta,
.hljs .language-php .hljs-meta {
 color: var(--neon-bunny-php-meta);
}

.hljs.language-php .hljs-meta.prompt_,
.hljs .language-php .hljs-meta.prompt_ {
 color: var(--neon-bunny-meta-prompt);
}

.hljs.language-php .hljs-meta.keyword_,
.hljs .language-php .hljs-meta.keyword_ {
 color: var(--neon-bunny-meta-keyword);
}

.hljs.language-php .hljs-meta.string_,
.hljs .language-php .hljs-meta.string_ {
 color: var(--neon-bunny-meta-string);
}

.hljs.language-php .hljs-attr,
.hljs .language-php .hljs-attr {
 color: var(--neon-bunny-attr);
}

.hljs.language-php .hljs-attribute,
.hljs .language-php .hljs-attribute {
 color: var(--neon-bunny-attribute);
}

.hljs.language-php .hljs-name,
.hljs .language-php .hljs-name {
 color: var(--neon-bunny-name);
}

.hljs.language-php .hljs-section,
.hljs .language-php .hljs-section {
 color: var(--neon-bunny-section);
}

.hljs.language-php .hljs-tag,
.hljs .language-php .hljs-tag {
 color: var(--neon-bunny-tag);
}

.hljs.language-php .hljs-bullet,
.hljs .language-php .hljs-bullet {
 color: var(--neon-bunny-bullet);
}

.hljs.language-php .hljs-code,
.hljs .language-php .hljs-code {
 color: var(--neon-bunny-code);
}

.hljs.language-php .hljs-emphasis,
.hljs .language-php .hljs-emphasis {
 color: var(--neon-bunny-emphasis);
 font-style: italic;
}

.hljs.language-php .hljs-formula,
.hljs .language-php .hljs-formula {
 color: var(--neon-bunny-formula);
}

.hljs.language-php .hljs-link,
.hljs .language-php .hljs-link {
 color: var(--neon-bunny-link);
}

.hljs.language-php .hljs-quote,
.hljs .language-php .hljs-quote {
 color: var(--neon-bunny-quote);
}

.hljs.language-php .hljs-strong,
.hljs .language-php .hljs-strong {
 color: var(--neon-bunny-strong);
 font-weight: bold;
}

.hljs.language-php .hljs-selector,
.hljs .language-php .hljs-selector {
 color: var(--neon-bunny-selector);
}

.hljs.language-php .hljs-selector-attr,
.hljs .language-php .hljs-selector-attr {
 color: var(--neon-bunny-selector-attr);
}

.hljs.language-php .hljs-selector-class,
.hljs .language-php .hljs-selector-class {
 color: var(--neon-bunny-selector-class);
}

.hljs.language-php .hljs-selector-id,
.hljs .language-php .hljs-selector-id {
 color: var(--neon-bunny-selector-id);
}

.hljs.language-php .hljs-selector-pseudo,
.hljs .language-php .hljs-selector-pseudo {
 color: var(--neon-bunny-selector-pseudo);
}

.hljs.language-php .hljs-selector-tag,
.hljs .language-php .hljs-selector-tag {
 color: var(--neon-bunny-selector-tag);
}

.hljs.language-php .hljs-addition,
.hljs .language-php .hljs-addition {
 color: var(--neon-bunny-addition);
}

.hljs.language-php .hljs-deletion,
.hljs .language-php .hljs-deletion {
 color: var(--neon-bunny-deletion);
}

`,mf=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Languages")])],-1),yf={id:"lang-js-examples",class:"row mb-4"},vf={class:"col-12"},jf={id:"lang-vue-examples",class:"row mb-4"},_f={class:"col-12"},wf={id:"lang-css-examples",class:"row mb-4"},kf={class:"col-12"},xf={id:"lang-html-examples",class:"row mb-4"},Ef={class:"col-12"},Sf={id:"lang-svg-examples",class:"row mb-4"},Tf={class:"col-12"},Cf={__name:"LangExamples",setup(e){const n=te("codeBlockOptions"),t=te("selectedLibrary"),a=te("selectedTheme"),s=`<template>
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
`,o=ki,l=`<!DOCTYPE html>
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
`,i=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`;return(c,u)=>{const f=Ze("CodeBlock");return Z(),ne("div",null,[mf,h("div",yf,[h("div",vf,[W(f,{code:r,highlightjs:b(t).id==="highlightjs",label:"JavaScript",lang:"javascript","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),h("div",jf,[h("div",_f,[W(f,{code:s,highlightjs:b(t).id==="highlightjs",label:"Vue (using lang = html)",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),h("div",wf,[h("div",kf,[W(f,{code:b(o),highlightjs:b(t).id==="highlightjs",label:"CSS",lang:"css","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),h("div",xf,[h("div",Ef,[W(f,{code:l,highlightjs:b(t).id==="highlightjs",label:"HTML",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","max-height","prismjs","theme"])])]),h("div",Sf,[h("div",Tf,[W(f,{code:i,highlightjs:b(t).id==="highlightjs",label:"SVG",lang:"svg",prismjs:b(t).id==="prism",tabs:!1,theme:b(a)},null,8,["highlightjs","prismjs","theme"])])])])}}},Af=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Other Prop Examples")])],-1),Of={id:"radius-example",class:"row mb-4"},Nf={class:"col-12"},Mf={id:"copy-text-example",class:"row mb-4"},$f={class:"col-12"},If={id:"run-text-example",class:"row mb-4"},Rf={class:"col-12"},Lf={id:"floating-tabs-example",class:"row mb-4"},Pf={class:"col-12"},Bf={class:"form-check form-switch ms-1"},Ff={class:"boolean-style"},Df={id:"height-example",class:"row mb-4"},zf={class:"col-12"},Uf={id:"height-example",class:"row mb-4"},Hf={class:"col-12"},qf={id:"indent-example",class:"row mb-4"},Wf={class:"col-12"},Gf={__name:"OtherExamples",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a=ke("0 1em"),s=ke("Copy Text"),r=ke(!0),o=ke("200"),l=ke(2),i=ke("Run"),c=ke("0.25rem"),u={prism:{copyBlockRadius:`<CodeBlock
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
</CodeBlock>`}},f=`{
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
`;function g(){alert("Run Text Code Example Function")}return(_,j)=>{const y=Ze("CodeBlock");return Z(),ne("div",null,[Af,h("div",Of,[h("div",Nf,[W(y,{code:u[b(n).id].copyBlockRadius,"code-block-radius":a.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",theme:b(t)},{label:pn(()=>[ie(" codeBlockRadius: "),Bn(h("input",{"onUpdate:modelValue":j[0]||(j[0]=x=>a.value=x),class:"form-control",type:"text"},null,512),[[tt,a.value]])]),_:1},8,["code","code-block-radius","highlightjs","prismjs","theme"])])]),h("div",Mf,[h("div",$f,[W(y,{code:u[b(n).id].copyText,"copy-tab":"",copyText:s.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:"",theme:b(t)},{label:pn(()=>[ie(" copyText: "),Bn(h("input",{"onUpdate:modelValue":j[1]||(j[1]=x=>s.value=x),class:"form-control",type:"text"},null,512),[[tt,s.value]])]),_:1},8,["code","copyText","highlightjs","prismjs","theme"])])]),h("div",If,[h("div",Rf,[W(y,{code:u[b(n).id].runText,"copy-tab":!1,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism","run-tab":"",runText:i.value,tabs:"",theme:b(t),onRun:g},{label:pn(()=>[ie(" runText: "),Bn(h("input",{"onUpdate:modelValue":j[2]||(j[2]=x=>i.value=x),class:"form-control",type:"text"},null,512),[[tt,i.value]])]),_:1},8,["code","highlightjs","prismjs","runText","theme"])])]),h("div",Lf,[h("div",Pf,[W(y,{code:u[b(n).id].floatingTabs,"floating-tabs":r.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:"",theme:b(t)},{label:pn(()=>[h("div",Bf,[Bn(h("input",{"onUpdate:modelValue":j[3]||(j[3]=x=>r.value=x),checked:"",class:"form-check-input",role:"switch",type:"checkbox"},null,512),[[xh,r.value]]),h("label",null,[ie(" floatingTabs = "),h("span",Ff,xe(r.value),1)])])]),_:1},8,["code","floating-tabs","highlightjs","prismjs","theme"])])]),h("div",Df,[h("div",zf,[W(y,{code:u[b(n).id].height,height:o.value,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},{label:pn(()=>[ie(" height: "),Bn(h("input",{"onUpdate:modelValue":j[4]||(j[4]=x=>o.value=x),class:"form-control",type:"number"},null,512),[[tt,o.value]])]),_:1},8,["code","height","highlightjs","prismjs","theme"])])]),h("div",Uf,[h("div",Hf,[W(y,{code:u[b(n).id].tabGap,highlightjs:b(n).id==="highlightjs",lang:"html",prismjs:b(n).id==="prism","run-tab":!0,"tab-gap":c.value,tabs:"",theme:b(t)},{label:pn(()=>[ie(" tabGap: "),Bn(h("input",{"onUpdate:modelValue":j[5]||(j[5]=x=>c.value=x),class:"form-control",type:"text"},null,512),[[tt,c.value]])]),_:1},8,["code","highlightjs","prismjs","tab-gap","theme"])])]),h("div",qf,[h("div",Wf,[W(y,{code:f,highlightjs:b(n).id==="highlightjs",indent:l.value,lang:"json",prismjs:b(n).id==="prism",tabs:!1,theme:b(t)},{label:pn(()=>[ie(" indent (json): "),Bn(h("input",{"onUpdate:modelValue":j[6]||(j[6]=x=>l.value=x),class:"form-control",type:"number"},null,512),[[tt,l.value]])]),_:1},8,["highlightjs","indent","prismjs","theme"])])])])}}},Vf=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Plugins")])],-1),Kf={key:0,id:"plugin-example",class:"row mb-4"},Yf=sr('<div class="col-12"><p> PrismJS does not load all plugins by default. In order to use additional plugins you will need to import them. Please note that not all plugins may work with this component. </p><p>Tested Plugins that do work include:</p><ul><li><a href="https://prismjs.com/plugins/autolinker/" target="_blank"> autolinker </a></li><li><a href="https://prismjs.com/plugins/command-line/" target="_blank"> command-line </a></li><li><a href="https://prismjs.com/plugins/line-highlight/" target="_blank"> line-highlight </a></li><li><a href="https://prismjs.com/plugins/line-numbers/" target="_blank"> line-numbers </a></li><li><a href="https://prismjs.com/plugins/match-braces/" target="_blank"> match-braces </a></li><li><a href="https://prismjs.com/plugins/show-invisibles/" target="_blank"> show-invisibles </a></li></ul></div>',1),Jf={class:"col-12"},Zf=h("a",{href:"https://prismjs.com/plugins/line-numbers/",target:"_blank"},"line-numbers",-1),Xf={key:1,id:"plugin-example",class:"row mb-4"},Qf=h("div",{class:"col-12"},[h("p",null," Vue3 CodeBlock currently does not support the Highlight.js plugin API. ")],-1),ep=[Qf],np={__name:"PluginExamples",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a=`<template>
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
<\/script>`;return(s,r)=>{const o=Ze("CodeBlock");return Z(),ne("div",null,[Vf,b(n).id==="prism"?(Z(),ne("div",Kf,[Yf,h("div",Jf,[W(o,{class:"line-numbers",code:a,lang:"html","prism-plugin":"",prismjs:"",tabs:!1,theme:b(t)},{label:pn(()=>[ie(" Example using the "),Zf,ie(" Plugin ")]),_:1},8,["theme"])])])):(Z(),ne("div",Xf,ep))])}}},tp=h("div",{class:"row mb-2"},[h("div",{class:"col-12"},[h("h5",null,"Tabs")])],-1),ap={id:"tab-copy-example",class:"row mb-4"},sp={class:"col-12"},rp={id:"tab-run-example",class:"row mb-4"},op={class:"col-12"},lp={id:"tab-both-example",class:"row mb-4"},ip={class:"col-12"},cp={__name:"TabExamples",setup(e){const n=te("codeBlockOptions"),t=te("selectedLibrary"),a=te("selectedTheme"),s={prism:{copy:`<CodeBlock
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
<\/script>`}};function r(){alert("Run Code Tab")}function o(){alert("Copy & Run Code Tabs")}return(l,i)=>{const c=Ze("CodeBlock");return Z(),ne("div",null,[tp,h("div",ap,[h("div",sp,[W(c,{code:s[b(t).id].copy,"copy-tab":"",highlightjs:b(t).id==="highlightjs",label:"Copy Code Tab",lang:"html",prismjs:b(t).id==="prism","run-tab":!1,tabs:"",theme:b(a)},null,8,["code","highlightjs","prismjs","theme"])])]),h("div",rp,[h("div",op,[W(c,{code:s[b(t).id].run,"copy-tab":!1,highlightjs:b(t).id==="highlightjs",label:"Run Code Tab",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism","run-tab":"",tabs:"",theme:b(a),onRun:r},null,8,["code","highlightjs","max-height","prismjs","theme"])])]),h("div",lp,[h("div",ip,[W(c,{code:s[b(t).id].both,highlightjs:b(t).id==="highlightjs",label:"Copy & Run Code Tabs",lang:"html","max-height":b(n).preHeight,prismjs:b(t).id==="prism","run-tab":!0,tabs:"",theme:b(a),onRun:o},null,8,["code","highlightjs","max-height","prismjs","theme"])])])])}}};var Oa={},up={get exports(){return Oa},set exports(e){Oa=e}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},l={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function m(p){return p instanceof i?new i(p.type,m(p.content),p.alias):Array.isArray(p)?p.map(m):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++r}),m.__id},clone:function m(p,w){w=w||{};var k,O;switch(l.util.type(p)){case"Object":if(O=l.util.objId(p),w[O])return w[O];k={},w[O]=k;for(var R in p)p.hasOwnProperty(R)&&(k[R]=m(p[R],w));return k;case"Array":return O=l.util.objId(p),w[O]?w[O]:(k=[],w[O]=k,p.forEach(function(U,z){k[z]=m(U,w)}),k);default:return p}},getLanguage:function(m){for(;m;){var p=s.exec(m.className);if(p)return p[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,p){m.className=m.className.replace(RegExp(s,"gi"),""),m.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(m){var p=document.getElementsByTagName("script");for(var w in p)if(p[w].src==m)return p[w]}return null}},isActive:function(m,p,w){for(var k="no-"+p;m;){var O=m.classList;if(O.contains(p))return!0;if(O.contains(k))return!1;m=m.parentElement}return!!w}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(m,p){var w=l.util.clone(l.languages[m]);for(var k in p)w[k]=p[k];return w},insertBefore:function(m,p,w,k){k=k||l.languages;var O=k[m],R={};for(var U in O)if(O.hasOwnProperty(U)){if(U==p)for(var z in w)w.hasOwnProperty(z)&&(R[z]=w[z]);w.hasOwnProperty(U)||(R[U]=O[U])}var ee=k[m];return k[m]=R,l.languages.DFS(l.languages,function(ce,je){je===ee&&ce!=m&&(this[ce]=R)}),R},DFS:function m(p,w,k,O){O=O||{};var R=l.util.objId;for(var U in p)if(p.hasOwnProperty(U)){w.call(p,U,p[U],k||U);var z=p[U],ee=l.util.type(z);ee==="Object"&&!O[R(z)]?(O[R(z)]=!0,m(z,w,null,O)):ee==="Array"&&!O[R(z)]&&(O[R(z)]=!0,m(z,w,U,O))}}},plugins:{},highlightAll:function(m,p){l.highlightAllUnder(document,m,p)},highlightAllUnder:function(m,p,w){var k={callback:w,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),l.hooks.run("before-all-elements-highlight",k);for(var O=0,R;R=k.elements[O++];)l.highlightElement(R,p===!0,k.callback)},highlightElement:function(m,p,w){var k=l.util.getLanguage(m),O=l.languages[k];l.util.setLanguage(m,k);var R=m.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(R,k);var U=m.textContent,z={element:m,language:k,grammar:O,code:U};function ee(je){z.highlightedCode=je,l.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,l.hooks.run("after-highlight",z),l.hooks.run("complete",z),w&&w.call(z.element)}if(l.hooks.run("before-sanity-check",z),R=z.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!z.code){l.hooks.run("complete",z),w&&w.call(z.element);return}if(l.hooks.run("before-highlight",z),!z.grammar){ee(l.util.encode(z.code));return}if(p&&a.Worker){var ce=new Worker(l.filename);ce.onmessage=function(je){ee(je.data)},ce.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else ee(l.highlight(z.code,z.grammar,z.language))},highlight:function(m,p,w){var k={code:m,grammar:p,language:w};if(l.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=l.tokenize(k.code,k.grammar),l.hooks.run("after-tokenize",k),i.stringify(l.util.encode(k.tokens),k.language)},tokenize:function(m,p){var w=p.rest;if(w){for(var k in w)p[k]=w[k];delete p.rest}var O=new f;return g(O,O.head,m),u(m,O,p,O.head,0),j(O)},hooks:{all:{},add:function(m,p){var w=l.hooks.all;w[m]=w[m]||[],w[m].push(p)},run:function(m,p){var w=l.hooks.all[m];if(!(!w||!w.length))for(var k=0,O;O=w[k++];)O(p)}},Token:i};a.Prism=l;function i(m,p,w,k){this.type=m,this.content=p,this.alias=w,this.length=(k||"").length|0}i.stringify=function m(p,w){if(typeof p=="string")return p;if(Array.isArray(p)){var k="";return p.forEach(function(ee){k+=m(ee,w)}),k}var O={type:p.type,content:m(p.content,w),tag:"span",classes:["token",p.type],attributes:{},language:w},R=p.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(O.classes,R):O.classes.push(R)),l.hooks.run("wrap",O);var U="";for(var z in O.attributes)U+=" "+z+'="'+(O.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+U+">"+O.content+"</"+O.tag+">"};function c(m,p,w,k){m.lastIndex=p;var O=m.exec(w);if(O&&k&&O[1]){var R=O[1].length;O.index+=R,O[0]=O[0].slice(R)}return O}function u(m,p,w,k,O,R){for(var U in w)if(!(!w.hasOwnProperty(U)||!w[U])){var z=w[U];z=Array.isArray(z)?z:[z];for(var ee=0;ee<z.length;++ee){if(R&&R.cause==U+","+ee)return;var ce=z[ee],je=ce.inside,ve=!!ce.lookbehind,pe=!!ce.greedy,we=ce.alias;if(pe&&!ce.pattern.global){var M=ce.pattern.toString().match(/[imsuy]*$/)[0];ce.pattern=RegExp(ce.pattern.source,M+"g")}for(var B=ce.pattern||ce,D=k.next,J=O;D!==p.tail&&!(R&&J>=R.reach);J+=D.value.length,D=D.next){var se=D.value;if(p.length>m.length)return;if(!(se instanceof i)){var de=1,le;if(pe){if(le=c(B,J,m,ve),!le||le.index>=m.length)break;var G=le.index,ze=le.index+le[0].length,_e=J;for(_e+=D.value.length;G>=_e;)D=D.next,_e+=D.value.length;if(_e-=D.value.length,J=_e,D.value instanceof i)continue;for(var Ne=D;Ne!==p.tail&&(_e<ze||typeof Ne.value=="string");Ne=Ne.next)de++,_e+=Ne.value.length;de--,se=m.slice(J,_e),le.index-=J}else if(le=c(B,0,se,ve),!le)continue;var G=le.index,ue=le[0],Le=se.slice(0,G),fe=se.slice(G+ue.length),We=J+se.length;R&&We>R.reach&&(R.reach=We);var Fe=D.prev;Le&&(Fe=g(p,Fe,Le),J+=Le.length),_(p,Fe,de);var d=new i(U,je?l.tokenize(ue,je):ue,we,ue);if(D=g(p,Fe,d),fe&&g(p,D,fe),de>1){var v={cause:U+","+ee,reach:We};u(m,p,w,D.prev,J,v),R&&v.reach>R.reach&&(R.reach=v.reach)}}}}}}function f(){var m={value:null,prev:null,next:null},p={value:null,prev:m,next:null};m.next=p,this.head=m,this.tail=p,this.length=0}function g(m,p,w){var k=p.next,O={value:w,prev:p,next:k};return p.next=O,k.prev=O,m.length++,O}function _(m,p,w){for(var k=p.next,O=0;O<w&&k!==m.tail;O++)k=k.next;p.next=k,k.prev=p,m.length-=O}function j(m){for(var p=[],w=m.head.next;w!==m.tail;)p.push(w.value),w=w.next;return p}if(!a.document)return a.addEventListener&&(l.disableWorkerMessageHandler||a.addEventListener("message",function(m){var p=JSON.parse(m.data),w=p.language,k=p.code,O=p.immediateClose;a.postMessage(l.highlight(k,l.languages[w],w)),O&&a.close()},!1)),l;var y=l.util.currentScript();y&&(l.filename=y.src,y.hasAttribute("data-manual")&&(l.manual=!0));function x(){l.manual||l.highlightAll()}if(!l.manual){var C=document.readyState;C==="loading"||C==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return l}(n);e.exports&&(e.exports=t),typeof Cs<"u"&&(Cs.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(s,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var i={};i[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,s){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:t.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var r=a.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",s=function(y,x){return"✖ Error "+y+" while fetching file: "+x},r="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",i="loading",c="loaded",u="failed",f="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+i+'"])';function g(y,x,C){var m=new XMLHttpRequest;m.open("GET",y,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?x(m.responseText):m.status>=400?C(s(m.status,m.statusText)):C(r))},m.send(null)}function _(y){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(x){var C=Number(x[1]),m=x[2],p=x[3];return m?p?[C,Number(p)]:[C,void 0]:[C,C]}}t.hooks.add("before-highlightall",function(y){y.selector+=", "+f}),t.hooks.add("before-sanity-check",function(y){var x=y.element;if(x.matches(f)){y.code="",x.setAttribute(l,i);var C=x.appendChild(document.createElement("CODE"));C.textContent=a;var m=x.getAttribute("data-src"),p=y.language;if(p==="none"){var w=(/\.(\w+)$/.exec(m)||[,"none"])[1];p=o[w]||w}t.util.setLanguage(C,p),t.util.setLanguage(x,p);var k=t.plugins.autoloader;k&&k.loadLanguages(p),g(m,function(O){x.setAttribute(l,c);var R=_(x.getAttribute("data-range"));if(R){var U=O.split(/\r\n?|\n/g),z=R[0],ee=R[1]==null?U.length:R[1];z<0&&(z+=U.length),z=Math.max(0,Math.min(z-1,U.length)),ee<0&&(ee+=U.length),ee=Math.max(0,Math.min(ee,U.length)),O=U.slice(z,ee).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(z+1))}C.textContent=O,t.highlightElement(C)},function(O){x.setAttribute(l,u),C.textContent=O})}}),t.plugins.fileHighlight={highlight:function(x){for(var C=(x||document).querySelectorAll(f),m=0,p;p=C[m++];)t.highlightElement(p)}};var j=!1;t.fileHighlight=function(){j||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),j=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(up);const hp=Oa,gp=sc({__proto__:null,default:hp},[Oa]),dp={class:"mb-5"},fp=h("div",{class:"row"},[h("div",{class:"col-12 mb-3"},[h("h2",null,"Examples")])],-1),pp={__name:"ExamplesSection",setup(e){return(n,t)=>(Z(),ne("div",dp,[fp,W(b(Cf),{id:"lang-examples"}),W(b(tf),{id:"add-lang-examples"}),W(b(np),{id:"plugin-examples"}),W(b(cp),{id:"tab-examples"}),W(b(df),{id:"copy-button-examples"}),W(b(of),{id:"browser-window-examples"}),W(b(Gf),{id:"other-prop-examples"})]))}},bp={class:"row mb-5"},mp=h("h2",null,"Events",-1),yp=[mp],vp={class:"col-12 mb-3"},jp={class:"table-responsive"},_p={class:"table table-striped"},wp=h("thead",null,[h("tr",null,[h("th",null,"Name"),h("th",null,"Description")])],-1),kp={valign:"top"},xp={valign:"top"},Ep={__name:"EventsSection",setup(e){const n=te("styleData"),t={run:{description:"The event emitted when the run tab is clicked."},"update:copy-status":{description:"The event emitted when the copy status is updated."}};return(a,s)=>(Z(),ne("div",bp,[h("div",{class:Se(b(n).h2ColClass)},yp,2),h("div",vp,[h("div",jp,[h("table",_p,[wp,h("tbody",null,[(Z(),ne(Oe,null,Zn(t,(r,o)=>h("tr",{key:r},[h("td",kp,xe(o),1),h("td",xp,xe(r.description),1)])),64))])])])])]))}},Sp={class:"row mb-5"},Tp=h("h2",null,"Installation",-1),Cp=[Tp],Ap={class:"col-12 mb-4"},Op={class:"col-12"},Np={__name:"InstallationSection",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a=te("styleData"),s="pnpm add vue3-code-block",r="npm i vue3-code-block";return(o,l)=>{const i=Ze("CodeBlock");return Z(),ne("div",Sp,[h("div",{class:Se(b(a).h2ColClass)},Cp,2),h("div",Ap,[W(i,{code:s,highlightjs:b(n).id==="highlightjs",label:"Using pnpm:",lang:"plain",prismjs:b(n).id==="prism","show-run":!1,tabs:!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])]),h("div",Op,[W(i,{code:r,highlightjs:b(n).id==="highlightjs",label:"Using npm:",lang:"plain",prismjs:b(n).id==="prism","show-run":!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])])}}},Mp={class:"row mb-5"},$p=h("h2",null,"License",-1),Ip=[$p],Rp={class:"col-12"},Lp=h("p",null,[ie(" Copyright © 2023 WebDevNerdStuff "),h("br"),ie(" Licensed under the MIT license. ")],-1),Pp=["href"],Bp={__name:"LicenseSection",setup(e){const n=te("styleData"),t=te("links");return(a,s)=>(Z(),ne("div",Mp,[h("div",{class:Se(b(n).h2ColClass)},Ip,2),h("div",Rp,[Lp,h("p",null,[h("a",{href:b(t).license,target:"_blank"}," LICENSE.md ",8,Pp)])])]))}};const xi=e=>(Tl("data-v-ff35c56a"),e=e(),Cl(),e),Fp={class:"row mb-5"},Dp=xi(()=>h("h2",null,"Props",-1)),zp=[Dp],Up={class:"col-12 mb-3"},Hp={class:"table-responsive"},qp={class:"table table-striped"},Wp=xi(()=>h("thead",null,[h("tr",null,[h("th",null,"Name"),h("th",null,"Type"),h("th",null,"Default"),h("th",null,"Description")])],-1)),Gp=["id"],Vp={class:"prop-type",valign:"top"},Kp={class:"prop-default",valign:"top"},Yp=["innerHTML"],Jp={__name:"PropsSection",setup(e){const n=te("styleData"),t=te("prismLinks"),a=te("highlightJsLinks"),s={browserWindow:{type:"Boolean",required:!1,default:!1,description:"To give the code block a browser window look."},code:{type:"[Object, Array, String, Number]",required:!0,default:"",description:"The code to be displayed in the code block."},codeBlockRadius:{type:"String",required:!1,default:"0.5rem",description:"The border radius of the code block."},copyButton:{type:Boolean,required:!1,default:!0,description:"To show a copy button within the code block"},copyIcons:{type:"Boolean",required:!1,default:!0,description:"To show the copy icons on the copy code tab."},copyTab:{type:"Boolean",required:!1,default:!0,description:"To show the copy code tab."},copyFailedText:{type:"String",required:!1,default:"Copy failed!",description:"The text to be displayed when the code copy failed."},copyText:{type:"String",required:!1,default:"Copy Code",description:"The text to be displayed on the copy tab."},copySuccessText:{type:"String",required:!1,default:"Copied!",description:"The text to be displayed when the code copy was successful."},floatingTabs:{type:"Boolean",required:!1,default:!0,description:"To make the tabs float on top of the code block."},height:{type:"[String, Number]",required:!1,default:"auto",description:"The height of the code block."},highlightjs:{type:"Boolean",required:!1,default:"false",description:"Specifies that the Highlight.js library should be used."},indent:{type:"Number",required:!1,default:4,description:"The number of spaces to indent the code for json."},label:{type:"String",required:!1,default:"",description:"The label to be displayed on the code block."},lang:{type:"String",required:!1,default:"javascript",description:"The language of the code."},maxHeight:{type:"[String, Number]",required:!1,default:"auto",description:"The max height of the code block."},persistentCopyButton:{type:"Boolean",required:!1,default:!1,description:"To show a persistent copy button within the code block"},prismjs:{type:"Boolean",required:!1,default:"true",description:"Specifies that the PrismJS library should be used."},prismPlugin:{type:"Boolean",required:!1,default:"false",description:"Specifies that a PrismJS plugin is being used. This is needed for the plugin to work properly."},runTab:{type:"Boolean",required:!1,default:!1,description:"To show the run tab."},tabGap:{type:"String",required:!1,default:"0.25rem",description:"The gap between the tabs."},tabs:{type:"Boolean",required:!1,default:!1,description:"To show the tabs. This will show/hide all tabs."},theme:{type:"[String, Boolean]",required:!1,id:"props-theme-option",default:"neon-bunny",description:`<p>The theme to be used for the code block. Available options include:</p>
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
		`}};return(r,o)=>(Z(),ne("div",Fp,[h("div",{class:Se(b(n).h2ColClass)},zp,2),h("div",Up,[h("div",Hp,[h("table",qp,[Wp,h("tbody",null,[(Z(),ne(Oe,null,Zn(s,(l,i)=>h("tr",{key:l},[h("td",{id:l==null?void 0:l.id,valign:"top"},xe(i),9,Gp),h("td",Vp,xe(l.type),1),h("td",Kp,xe(l.default),1),h("td",{valign:"top",innerHTML:l.description},null,8,Yp)])),64))])])])])]))}},Zp=ir(Jp,[["__scopeId","data-v-ff35c56a"]]),Xp={class:"row mb-5"},Qp=h("h2",null,"Slots",-1),eb=[Qp],nb={class:"col-12 mb-3"},tb={class:"table-responsive"},ab={class:"table table-striped"},sb=h("thead",null,[h("tr",null,[h("th",null,"Name"),h("th",null,"Description")])],-1),rb={valign:"top"},ob={valign:"top"},lb={__name:"SlotsSection",setup(e){const n=te("styleData"),t={copyButton:{description:"Slot for the copy button inside the code block of the component."},label:{description:"Slot for the label of the component."},tabs:{description:"Slot for the tabs of the component."}};return(a,s)=>(Z(),ne("div",Xp,[h("div",{class:Se(b(n).h2ColClass)},eb,2),h("div",nb,[h("div",tb,[h("table",ab,[sb,h("tbody",null,[(Z(),ne(Oe,null,Zn(t,(r,o)=>h("tr",{key:r},[h("td",rb,xe(o),1),h("td",ob,xe(r.description),1)])),64))])])])])]))}},ib={class:"row mb-5"},cb=h("h2",null,"Register Component",-1),ub=[cb],hb={class:"col-12"},gb={__name:"RegisterSection",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a=te("styleData"),s=`import { createApp } from 'vue';
import CodeBlock from 'vue3-code-block';

createApp()
  .use(CodeBlock)
  .mount('#app');`;return(r,o)=>{const l=Ze("CodeBlock");return Z(),ne("div",ib,[h("div",{class:Se(b(a).h2ColClass)},ub,2),h("div",hb,[W(l,{code:s,highlightjs:b(n).id==="highlightjs",lang:"javascript",prismjs:b(n).id==="prism","show-run":!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])])])}}},db={class:"row mb-5"},fb=h("h2",null,"Themes",-1),pb=[fb],bb={class:"col-12"},mb=h("p",null," There are a few options for theming the code block. Using the components built in method allows you to be able to dynamically change the theme easily. If you choose, you can also use your own custom theme. ",-1),yb=h("code",null,"neon-bunny",-1),vb=h("code",null,"neon-bunny-carrot",-1),jb=["href"],_b=["href"],wb=h("a",{href:"#props-theme-option"},"theme",-1),kb=h("code",null,"fetch",-1),xb=["href"],Eb={key:0},Sb=h("code",null,"base16",-1),Tb=h("code",null,"node_modules",-1),Cb=h("code",null,"theme",-1),Ab={key:2},Ob=["href"],Nb=h("p",null,[ie(" Alternatively you can import the theme into your css/sass/scss. Make sure to set the "),h("code",null,"theme"),ie(" prop to false to avoid it conflicting with the default theme. ")],-1),Mb={__name:"ThemesSection",setup(e){const n=te("links"),t=te("prismLinks"),a=te("highlightJsLinks"),s=te("selectedLibrary"),r=te("selectedTheme"),o=te("styleData"),l={prism:{bunnyTheme:`<CodeBlock
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
/>`}},i=`<div class="alert alert-primary my-2" role="alert">
Not all tab &amp; icon styles for these themes are built into the component.<br />If
you would like to contribute to add tab/icon styles for a theme not
included, you can find instructions located
<a href="${n.contribute}" target="_blank">here</a>.
</div>`;return(c,u)=>{const f=Ze("CodeBlock");return Z(),ne("div",db,[h("div",{class:Se(b(o).h2ColClass)},pb,2),h("div",bb,[mb,h("p",null,[ie(" The first way is to use one of the two custom themes ("),yb,ie(", "),vb,ie(") built into the component that are based off of my own VSCode "),h("a",{href:b(n).neonBunnyTheme,target:"_blank"},"Neon Bunny Theme",8,jb),ie(". ")]),W(f,{code:l[b(s).id].bunnyTheme,highlightjs:b(s).id==="highlightjs",label:"Using the Neon Bunny Themes",lang:"html",prismjs:b(s).id==="prism",theme:b(r)},null,8,["code","highlightjs","prismjs","theme"]),h("p",null,[ie(" Another other is to use the main "),h("a",{href:b(s).id==="prism"?b(t).homepage:b(a).homepage,target:"_blank"},xe(b(s).label),9,_b),ie(" themes. If you use the component to load the theme, you just need to set the "),wb,ie(" prop to the desired theme. When you load it this way, the component will use a "),kb,ie(" call to load them themes from the "),h("a",{href:b(s).id==="prism"?b(t).cdn:b(a).cdn,target:"_blank"},"jsDelivr CDN",8,xb),ie(". Fetching the "+xe(b(s).label)+" themes from a CDN was the best method I could figure out at this time to dynamically load the themes, while making it easier for you to use them. You can also link to another CDN of your choice. ",1)]),W(f,{code:l[b(s).id].themeProp,highlightjs:b(s).id==="highlightjs",label:"Using the theme prop",lang:"html",prismjs:b(s).id==="prism",theme:b(r)},null,8,["code","highlightjs","prismjs","theme"]),b(s).id==="highlightjs"?(Z(),ne("p",Eb,[ie(" You can also use the "),Sb,ie(" styles. "),h("span",{innerHTML:i})])):Qe("",!0),b(s).id==="highlightjs"?(Z(),Bt(f,{key:1,code:l[b(s).id].base16,highlightjs:!0,label:"Using a base16 theme",lang:"html",prismjs:!1,theme:b(r)},null,8,["code","theme"])):Qe("",!0),h("p",null,[ie(" You can also load the themes the traditional way of importing them directly from the "+xe(b(s).label)+" package in ",1),Tb,ie(". Make sure to set the "),Cb,ie(" prop to false to avoid it conflicting with the default theme. ")]),b(s).id==="prism"?(Z(),ne("p",Ab,[ie(" Themes from their "),h("a",{href:b(t).themes,target:"_blank"},"Prism themes",8,Ob),ie(" repository can be used this way as well. "),h("span",{innerHTML:i})])):Qe("",!0),W(f,{code:l[b(s).id].importJs,highlightjs:b(s).id==="highlightjs",label:"Using import (javascript)",lang:"html",prismjs:b(s).id==="prism",theme:b(r)},null,8,["code","highlightjs","prismjs","theme"]),Nb,W(f,{code:l[b(s).id].importCss,highlightjs:b(s).id==="highlightjs",label:"Using import (css/sass/scss)",lang:"html",prismjs:b(s).id==="prism",theme:b(r)},null,8,["code","highlightjs","prismjs","theme"])])])}}},$b={class:"row mb-5"},Ib=h("h2",null,"Usage",-1),Rb=[Ib],Lb={class:"col-12"},Pb={class:"col-12"},Bb={__name:"UsageSection",setup(e){const n=te("selectedLibrary"),t=te("selectedTheme"),a=te("styleData"),s=`<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
</template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo)\`;
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

  alert(foo)\`;
<\/script>`;function o(){alert("bar")}return(l,i)=>{const c=Ze("CodeBlock");return Z(),ne("div",$b,[h("div",{class:Se(b(a).h2ColClass)},Rb,2),h("div",Lb,[W(c,{code:s,highlightjs:b(n).id==="highlightjs",label:"My Code",lang:"html",prismjs:b(n).id==="prism","show-run":!1,theme:b(t)},null,8,["highlightjs","prismjs","theme"])]),h("div",Pb,[W(c,{code:r,highlightjs:b(n).id==="highlightjs",label:"Run My Code",lang:"html",prismjs:b(n).id==="prism","run-tab":"",tabs:"",theme:b(t),onRun:o},null,8,["highlightjs","prismjs","theme"])])])}}};(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){function n(t,a){return"___"+t.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,r){if(t.language===a){var o=t.tokenStack=[];t.code=t.code.replace(s,function(l){if(typeof r=="function"&&!r(l))return l;for(var i=o.length,c;t.code.indexOf(c=n(a,i))!==-1;)++i;return o[i]=l,c}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language!==a||!t.tokenStack)return;t.grammar=e.languages[a];var s=0,r=Object.keys(t.tokenStack);function o(l){for(var i=0;i<l.length&&!(s>=r.length);i++){var c=l[i];if(typeof c=="string"||c.content&&typeof c.content=="string"){var u=r[s],f=t.tokenStack[u],g=typeof c=="string"?c:c.content,_=n(a,u),j=g.indexOf(_);if(j>-1){++s;var y=g.substring(0,j),x=new e.Token(a,e.tokenize(f,t.grammar),"language-"+a,f),C=g.substring(j+_.length),m=[];y&&m.push.apply(m,o([y])),m.push(x),C&&m.push.apply(m,o([C])),typeof c=="string"?l.splice.apply(l,[i,1].concat(m)):c.content=m}}else c.content&&o(c.content)}return l}o(t.tokens)}}})})(Prism);(function(e){var n=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,s=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,r=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:n,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:s,punctuation:r};var o={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},l=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:o}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:o}}];e.languages.insertBefore("php","variable",{string:l,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:n,string:l,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:a,operator:s,punctuation:r}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(i){if(/<\?/.test(i.code)){var c=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(i,"php",c)}}),e.hooks.add("after-tokenize",function(i){e.languages["markup-templating"].tokenizePlaceholders(i,"php")})})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(o,l){if(!(o.tagName!=="PRE"||!o.classList.contains(e))){var i=o.querySelector(".line-numbers-rows");if(i){var c=parseInt(o.getAttribute("data-start"),10)||1,u=c+(i.children.length-1);l<c&&(l=c),l>u&&(l=u);var f=l-c;return i.children[f]}}},resize:function(o){a([o])},assumeViewportIndependence:!0};function a(o){if(o=o.filter(function(i){var c=s(i),u=c["white-space"];return u==="pre-wrap"||u==="pre-line"}),o.length!=0){var l=o.map(function(i){var c=i.querySelector("code"),u=i.querySelector(".line-numbers-rows");if(!(!c||!u)){var f=i.querySelector(".line-numbers-sizer"),g=c.textContent.split(n);f||(f=document.createElement("span"),f.className="line-numbers-sizer",c.appendChild(f)),f.innerHTML="0",f.style.display="block";var _=f.getBoundingClientRect().height;return f.innerHTML="",{element:i,lines:g,lineHeights:[],oneLinerHeight:_,sizer:f}}}).filter(Boolean);l.forEach(function(i){var c=i.sizer,u=i.lines,f=i.lineHeights,g=i.oneLinerHeight;f[u.length-1]=void 0,u.forEach(function(_,j){if(_&&_.length>1){var y=c.appendChild(document.createElement("span"));y.style.display="block",y.textContent=_}else f[j]=g})}),l.forEach(function(i){for(var c=i.sizer,u=i.lineHeights,f=0,g=0;g<u.length;g++)u[g]===void 0&&(u[g]=c.children[f++].getBoundingClientRect().height)}),l.forEach(function(i){var c=i.sizer,u=i.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",i.lineHeights.forEach(function(f,g){u.children[g].style.height=f+"px"})})}}function s(o){return o?window.getComputedStyle?getComputedStyle(o):o.currentStyle||null:null}var r=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(o){if(o.code){var l=o.element,i=l.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!l.querySelector(".line-numbers-rows")&&Prism.util.isActive(l,e)){l.classList.remove(e),i.classList.add(e);var c=o.code.match(n),u=c?c.length+1:1,f,g=new Array(u+1).join("<span></span>");f=document.createElement("span"),f.setAttribute("aria-hidden","true"),f.className="line-numbers-rows",f.innerHTML=g,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),o.element.appendChild(f),a([i]),Prism.hooks.run("line-numbers",o)}}}),Prism.hooks.add("line-numbers",function(o){o.plugins=o.plugins||{},o.plugins.lineNumbers=!0})})();const Fb={class:"container mb-5"},Db=h("div",{class:"row mb-4"},[h("div",{class:"col-12 text-center"},[h("img",{alt:"Vue",class:"vue-logo",src:ig})])],-1),zb={class:"row mb-3"},Ub=h("div",{class:"col-12 text-center"},[h("h1",null,"Vue 3 CodeBlock")],-1),Hb={class:"col-12 text-center"},qb={class:"badge bg-secondary rounded-pill"},Wb={class:"container mb-5"},Gb={class:"row"},Vb={class:"col-12"},Kb=["href"],Yb=["href"],Jb=h("hr",null,null,-1),Zb={class:"row"},Xb={class:"col-12 mb-3"},Qb=h("h5",null,"Switch between PrismJS and Highlight.js",-1),em={class:"d-inline-flex align-items-center px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"},nm={class:"col-12 col-md-3 mb-3"},tm=["selected","value"],am={class:"row"},sm={class:"col-12 col-md-3"},rm=h("label",{class:"form-label",for:"theme-selection-select"},"Select Theme:",-1),om=["selected","value"],lm={class:"container"},im=Pn({__name:"DemoPage",emits:["changedLibrary"],setup(e,{emit:n}){const t=te("highlightJsLinks"),a=te("prismLinks"),s=lr(),r=ke("prism"),o=s.libraries,l=s.highlightThemes,i=s.neonBunnyThemes,c=s.prismThemes,u=ke(null),f=ke(o.prism),g=ke("neon-bunny");nr(()=>{r.value=s.getLocalStorage()??s.setLocalStorage("prism"),_(r.value)}),u.value=[...i,...c],Sn("selectedTheme",g),Sn("selectedLibrary",f),r.value==="highlightjs"&&(u.value=[...i,...l],f.value=o.highlightjs);function _(y){if(r.value=y,f.value=o[y],g.value="neon-bunny",s.setLocalStorage(r.value),n("changedLibrary",f),y==="prism"){u.value=[...i,...c];return}u.value=[...i,...l]}function j(y){g.value=y}return(y,x)=>{const C=Ze("fa-icon");return Z(),ne(Oe,null,[h("div",Fb,[Db,h("div",zb,[Ub,h("div",Hb,[h("span",qb,xe(b(ai)),1)])])]),h("div",Wb,[h("div",Gb,[h("div",Vb,[h("p",null,[ie(" The Vue 3 CodeBlock component leverages the power of "),h("a",{href:b(a).homepage,target:"_blank"},"PrismJS",8,Kb),ie(" or "),h("a",{href:b(t).homepage,target:"_blank"},"Highlight.js",8,Yb),ie(" to provide syntax highlighting for code blocks within your application. The component takes a prop, which is the code to be highlighted, and uses PrismJS or Highlight.js to render the code with syntax highlighting. The component supports a variety of programming languages and can be customized with different themes to match your application's design. With this component, your users can display their code snippets with ease and clarity, making it easier to share and collaborate on code within your application. ")])])]),Jb,h("div",Zb,[h("div",Xb,[Qb,h("small",em,[W(C,{class:"text-success me-1",icon:"fa-solid fa-circle-info"}),ie(" This will also update the examples and documentation below. ")])]),h("div",nm,[h("select",{"aria-label":"Library Selection",class:"form-select",onChange:x[0]||(x[0]=m=>_(m.target.value))},[(Z(!0),ne(Oe,null,Zn(b(o),m=>(Z(),ne("option",{key:m,selected:r.value===m.id,value:m.id},xe(m.label),9,tm))),128))],32)])]),h("div",am,[h("div",sm,[rm,h("select",{id:"theme-selection-select","aria-label":"Theme Selection",class:"form-select",onChange:x[1]||(x[1]=m=>j(m.target.value))},[(Z(!0),ne(Oe,null,Zn(u.value,m=>(Z(),ne("option",{key:m,selected:g.value===m.value,value:m.value},xe(m.label),9,om))),128))],32)])])]),h("div",lm,[W(b(Np),{id:"ul-installation"}),W(b(gb),{id:"ul-register-plugin"}),W(b(Bb),{id:"ul-usage"}),W(b(Zp),{id:"ul-props"}),W(b(Mb),{id:"ul-themes"}),W(b(Ep),{id:"ul-events"}),W(b(lb),{id:"ul-slots"}),W(b(pp),{id:"ul-examples"}),W(b(Ng),{id:"ul-css-vars"}),W(b(Hg),{id:"ul-dependencies"}),W(b(fg),{id:"ul-change-log"}),W(b(Bp),{id:"ul-license"})])],64)}}});const cm={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-black mb-5"},um={class:"container"},hm=h("a",{class:"navbar-brand",href:"/vue3-code-block/"},"Vue 3 CodeBlock",-1),gm=h("button",{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",class:"navbar-toggler","data-bs-target":"#navbarSupportedContent","data-bs-toggle":"collapse",type:"button"},[h("span",{class:"navbar-toggler-icon"})],-1),dm={id:"navbarSupportedContent",class:"collapse navbar-collapse"},fm={class:"navbar-nav me-auto mb-2 mb-lg-0"},pm={class:"nav-item"},bm={"aria-current":"page",class:"nav-link active",href:"/vue3-code-block/"},mm={key:0,class:"nav-item dropdown"},ym=h("a",{id:"docs-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Docs ",-1),vm=sr('<ul aria-labelledby="docs-dropdown" class="dropdown-menu dropdown-menu-dark"><li><a class="dropdown-item" href="#ul-installation"> Installation </a></li><li><a class="dropdown-item" href="#ul-register-plugin">Register Component</a></li><li><a class="dropdown-item" href="#ul-props">Props</a></li><li><a class="dropdown-item" href="#ul-themes">Themes</a></li><li><a class="dropdown-item" href="#ul-events">Events</a></li><li><a class="dropdown-item" href="#ul-slots">Slots</a></li><li><a class="dropdown-item" href="#ul-examples">Examples</a></li><li><a class="dropdown-item" href="#ul-css-vars">CSS Variables</a></li><li><hr class="dropdown-divider"></li><li><h6 class="dropdown-header">Info</h6></li><li><a class="dropdown-item" href="#ul-dependencies"> Dependencies </a></li><li><a class="dropdown-item" href="#ul-change-log">Change Log</a></li><li><a class="dropdown-item" href="#ul-license">License</a></li></ul>',1),jm=[ym,vm],_m={key:1,class:"nav-item dropdown"},wm=h("a",{id:"examples-dropdown","aria-expanded":"false",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button"}," Examples ",-1),km=sr('<ul aria-labelledby="examples-dropdown" class="dropdown-menu dropdown-menu-dark"><li><a class="dropdown-item" href="#lang-examples">Languages</a></li><li><a class="dropdown-item" href="#add-lang-examples"> Additional Languages </a></li><li><a class="dropdown-item" href="#plugin-examples">Plugins</a></li><li><a class="dropdown-item" href="#tab-examples">Tabs</a></li><li><a class="dropdown-item" href="#copy-button-examples"> Copy Button </a></li><li><a class="dropdown-item" href="#browser-window-examples"> Browser Window </a></li><li><a class="dropdown-item" href="#other-prop-examples"> Other Props </a></li></ul>',1),xm=[wm,km],Em={class:"d-flex my-2 me-2"},Sm=["href"],Tm={class:"d-flex"},Cm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Am={class:"nav-item"},Om=["href"],Nm={class:"nav-item"},Mm=["href"],$m={class:"nav-item d-flex align-items-center ms-2"},Im={__name:"NavBar",props:{isPlayground:{type:Boolean,default:!1},selectedLibrary:{type:Object,required:!0}},setup(e){const n=te("links"),t=te("prismLinks"),a=te("highlightJsLinks"),s=lr(),r=localStorage.getItem("theme"),o=ke(r),l=()=>r||"dark",i=function(c){o.value=s.setTheme(c,o.value)};return i(l()),(c,u)=>{const f=Ze("fa-icon");return Z(),ne("nav",cm,[h("div",um,[hm,gm,h("div",dm,[h("ul",fm,[h("li",pm,[h("a",bm,[W(f,{icon:"fa-solid fa-house"})])]),e.isPlayground?Qe("",!0):(Z(),ne("li",mm,jm)),e.isPlayground?Qe("",!0):(Z(),ne("li",_m,xm))]),h("div",Em,[h("a",{href:e.selectedLibrary.id==="prism"?b(t).homepage:b(a).homepage,target:"_blank"},[h("span",{class:Se(["badge",e.selectedLibrary.id==="prism"?"badge-prism":"badge-highlightjs"])},xe(e.selectedLibrary.label)+" Active",3)],8,Sm)]),h("div",Tm,[h("ul",Cm,[h("li",Am,[h("a",{class:"nav-link",href:b(n).github,target:"_blank"},[W(f,{icon:"fa-brands fa-github"}),ie(" GitHub ")],8,Om)]),h("li",Nm,[h("a",{class:"nav-link",href:b(n).npm,target:"_blank"},[W(f,{icon:"fa-brands fa-npm"}),ie(" Package ")],8,Mm)]),h("li",$m,[W(f,{class:Se(["theme-switch fa-fw",o.value==="dark"?"moon":"sun"]),icon:o.value==="dark"?"fa-moon":"fa-sun",onClick:u[0]||(u[0]=g=>i("toggle"))},null,8,["class","icon"])])])])])])])}}},Rm={class:"footer-container container-fluid"},Lm={class:"container py-2"},Pm={class:"d-flex flex-wrap justify-content-between align-items-center my-2"},Bm={class:"text-muted col-md-4 d-flex align-items-center"},Fm=["href"],Dm={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},zm={class:"ms-3"},Um=["href"],Hm={class:"ms-3"},qm=["href"],Wm=Pn({__name:"FooterBar",setup(e){const n=te("links"),t=new Date().getFullYear();return(a,s)=>{const r=Ze("fa-icon");return Z(),ne("div",Rm,[h("div",Lm,[h("footer",Pm,[h("div",Bm,[ie(" © "+xe(b(t))+" ",1),h("a",{class:"text-muted btn btn-link d-flex-inline ps-2",href:b(n).githubProfile,target:"_blank"},"WebDevNerdStuff",8,Fm)]),h("ul",Dm,[h("li",zm,[h("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:b(n).github,role:"button",target:"_blank"},[W(r,{icon:"fa-brands fa-github"})],8,Um)]),h("li",Hm,[h("a",{class:"text-muted btn btn-link d-flex justify-content-center align-items-center",href:b(n).npm,role:"button",target:"_blank"},[W(r,{icon:"fa-brands fa-npm"})],8,qm)])])])])])}}});const Gm=Pn({__name:"App",setup(e){Sn("styleData",{h2ColClass:"col-12 mb-4",fieldWidth:{maxWidth:"100%",width:"300px"}});const n=lr(),t=ke({});Sn("links",n.links),Sn("highlightJsLinks",n.highlightJsLinks),Sn("prismLinks",n.prismLinks);const a=ke({browserWindow:!1,preHeight:"30em"});Sn("codeBlockOptions",a);function s(r){t.value=r.value}return(r,o)=>(Z(),ne(Oe,null,[W(Im,{"selected-library":t.value},null,8,["selected-library"]),W(im,{onChangedLibrary:s}),W(Wm)],64))}}),Vm="modulepreload",Km=function(e){return"/vue3-code-block/"+e},vo={},jo=function(n,t,a){if(!t||t.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=Km(r),r in vo)return;vo[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!a)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Vm,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Na={},Ym={get exports(){return Na},set exports(e){Na=e}};(function(e,n){(function(t,a){var s="1.0.35",r="",o="?",l="function",i="undefined",c="object",u="string",f="major",g="model",_="name",j="type",y="vendor",x="version",C="architecture",m="console",p="mobile",w="tablet",k="smarttv",O="wearable",R="embedded",U=350,z="Amazon",ee="Apple",ce="ASUS",je="BlackBerry",ve="Browser",pe="Chrome",we="Edge",M="Firefox",B="Google",D="Huawei",J="LG",se="Microsoft",de="Motorola",le="Opera",ze="Samsung",_e="Sharp",Ne="Sony",G="Xiaomi",ue="Zebra",Le="Facebook",fe="Chromium OS",We="Mac OS",Fe=function(E,A){var I={};for(var H in E)A[H]&&A[H].length%2===0?I[H]=A[H].concat(E[H]):I[H]=E[H];return I},d=function(E){for(var A={},I=0;I<E.length;I++)A[E[I].toUpperCase()]=E[I];return A},v=function(E,A){return typeof E===u?S(A).indexOf(S(E))!==-1:!1},S=function(E){return E.toLowerCase()},$=function(E){return typeof E===u?E.replace(/[^\d\.]/g,r).split(".")[0]:a},N=function(E,A){if(typeof E===u)return E=E.replace(/^\s\s*/,r),typeof A===i?E:E.substring(0,U)},T=function(E,A){for(var I=0,H,oe,ye,ge,ae,Ue;I<A.length&&!ae;){var nt=A[I],He=A[I+1];for(H=oe=0;H<nt.length&&!ae&&nt[H];)if(ae=nt[H++].exec(E),ae)for(ye=0;ye<He.length;ye++)Ue=ae[++oe],ge=He[ye],typeof ge===c&&ge.length>0?ge.length===2?typeof ge[1]==l?this[ge[0]]=ge[1].call(this,Ue):this[ge[0]]=ge[1]:ge.length===3?typeof ge[1]===l&&!(ge[1].exec&&ge[1].test)?this[ge[0]]=Ue?ge[1].call(this,Ue,ge[2]):a:this[ge[0]]=Ue?Ue.replace(ge[1],ge[2]):a:ge.length===4&&(this[ge[0]]=Ue?ge[3].call(this,Ue.replace(ge[1],ge[2])):a):this[ge]=Ue||a;I+=2}},q=function(E,A){for(var I in A)if(typeof A[I]===c&&A[I].length>0){for(var H=0;H<A[I].length;H++)if(v(A[I][H],E))return I===o?a:I}else if(v(A[I],E))return I===o?a:I;return E},P={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},L={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},F={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[x,[_,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[x,[_,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[_,x],[/opios[\/ ]+([\w\.]+)/i],[x,[_,le+" Mini"]],[/\bopr\/([\w\.]+)/i],[x,[_,le]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[_,x],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[x,[_,"UC"+ve]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[x,[_,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[x,[_,"WeChat"]],[/konqueror\/([\w\.]+)/i],[x,[_,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[x,[_,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[x,[_,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[_,/(.+)/,"$1 Secure "+ve],x],[/\bfocus\/([\w\.]+)/i],[x,[_,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[x,[_,le+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[x,[_,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[x,[_,"Dolphin"]],[/coast\/([\w\.]+)/i],[x,[_,le+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[x,[_,"MIUI "+ve]],[/fxios\/([-\w\.]+)/i],[x,[_,M]],[/\bqihu|(qi?ho?o?|360)browser/i],[[_,"360 "+ve]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[_,/(.+)/,"$1 "+ve],x],[/(comodo_dragon)\/([\w\.]+)/i],[[_,/_/g," "],x],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[_,x],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[_],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[_,Le],x],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[_,x],[/\bgsa\/([\w\.]+) .*safari\//i],[x,[_,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[x,[_,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[x,[_,pe+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[_,pe+" WebView"],x],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[x,[_,"Android "+ve]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[_,x],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[x,[_,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[x,_],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[_,[x,q,P]],[/(webkit|khtml)\/([\w\.]+)/i],[_,x],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[_,"Netscape"],x],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[x,[_,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[_,x],[/(cobalt)\/([\w\.]+)/i],[_,[x,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[C,"amd64"]],[/(ia32(?=;))/i],[[C,S]],[/((?:i[346]|x)86)[;\)]/i],[[C,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/windows (ce|mobile); ppc;/i],[[C,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[C,/ower/,r,S]],[/(sun4\w)[;\)]/i],[[C,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[C,S]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[g,[y,ze],[j,w]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[g,[y,ze],[j,p]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[g,[y,ee],[j,p]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[g,[y,ee],[j,w]],[/(macintosh);/i],[g,[y,ee]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[g,[y,_e],[j,p]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[g,[y,D],[j,w]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[g,[y,D],[j,p]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[g,/_/g," "],[y,G],[j,p]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[g,/_/g," "],[y,G],[j,w]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[g,[y,"OPPO"],[j,p]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[g,[y,"Vivo"],[j,p]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[g,[y,"Realme"],[j,p]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[g,[y,de],[j,p]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[g,[y,de],[j,w]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[g,[y,J],[j,w]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[g,[y,J],[j,p]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[g,[y,"Lenovo"],[j,w]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[g,/_/g," "],[y,"Nokia"],[j,p]],[/(pixel c)\b/i],[g,[y,B],[j,w]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[g,[y,B],[j,p]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[g,[y,Ne],[j,p]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[g,"Xperia Tablet"],[y,Ne],[j,w]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[g,[y,"OnePlus"],[j,p]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[g,[y,z],[j,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[g,/(.+)/g,"Fire Phone $1"],[y,z],[j,p]],[/(playbook);[-\w\),; ]+(rim)/i],[g,y,[j,w]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[g,[y,je],[j,p]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[g,[y,ce],[j,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[g,[y,ce],[j,p]],[/(nexus 9)/i],[g,[y,"HTC"],[j,w]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[y,[g,/_/g," "],[j,p]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[g,[y,"Acer"],[j,w]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[g,[y,"Meizu"],[j,p]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[y,g,[j,p]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[y,g,[j,w]],[/(surface duo)/i],[g,[y,se],[j,w]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[g,[y,"Fairphone"],[j,p]],[/(u304aa)/i],[g,[y,"AT&T"],[j,p]],[/\bsie-(\w*)/i],[g,[y,"Siemens"],[j,p]],[/\b(rct\w+) b/i],[g,[y,"RCA"],[j,w]],[/\b(venue[\d ]{2,7}) b/i],[g,[y,"Dell"],[j,w]],[/\b(q(?:mv|ta)\w+) b/i],[g,[y,"Verizon"],[j,w]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[g,[y,"Barnes & Noble"],[j,w]],[/\b(tm\d{3}\w+) b/i],[g,[y,"NuVision"],[j,w]],[/\b(k88) b/i],[g,[y,"ZTE"],[j,w]],[/\b(nx\d{3}j) b/i],[g,[y,"ZTE"],[j,p]],[/\b(gen\d{3}) b.+49h/i],[g,[y,"Swiss"],[j,p]],[/\b(zur\d{3}) b/i],[g,[y,"Swiss"],[j,w]],[/\b((zeki)?tb.*\b) b/i],[g,[y,"Zeki"],[j,w]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[y,"Dragon Touch"],g,[j,w]],[/\b(ns-?\w{0,9}) b/i],[g,[y,"Insignia"],[j,w]],[/\b((nxa|next)-?\w{0,9}) b/i],[g,[y,"NextBook"],[j,w]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[y,"Voice"],g,[j,p]],[/\b(lvtel\-)?(v1[12]) b/i],[[y,"LvTel"],g,[j,p]],[/\b(ph-1) /i],[g,[y,"Essential"],[j,p]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[g,[y,"Envizen"],[j,w]],[/\b(trio[-\w\. ]+) b/i],[g,[y,"MachSpeed"],[j,w]],[/\btu_(1491) b/i],[g,[y,"Rotor"],[j,w]],[/(shield[\w ]+) b/i],[g,[y,"Nvidia"],[j,w]],[/(sprint) (\w+)/i],[y,g,[j,p]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[y,se],[j,p]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[g,[y,ue],[j,w]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[g,[y,ue],[j,p]],[/smart-tv.+(samsung)/i],[y,[j,k]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[y,ze],[j,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[y,J],[j,k]],[/(apple) ?tv/i],[y,[g,ee+" TV"],[j,k]],[/crkey/i],[[g,pe+"cast"],[y,B],[j,k]],[/droid.+aft(\w)( bui|\))/i],[g,[y,z],[j,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[g,[y,_e],[j,k]],[/(bravia[\w ]+)( bui|\))/i],[g,[y,Ne],[j,k]],[/(mitv-\w{5}) bui/i],[g,[y,G],[j,k]],[/Hbbtv.*(technisat) (.*);/i],[y,g,[j,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[y,N],[g,N],[j,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[j,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[y,g,[j,m]],[/droid.+; (shield) bui/i],[g,[y,"Nvidia"],[j,m]],[/(playstation [345portablevi]+)/i],[g,[y,Ne],[j,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[g,[y,se],[j,m]],[/((pebble))app/i],[y,g,[j,O]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[g,[y,ee],[j,O]],[/droid.+; (glass) \d/i],[g,[y,B],[j,O]],[/droid.+; (wt63?0{2,3})\)/i],[g,[y,ue],[j,O]],[/(quest( 2| pro)?)/i],[g,[y,Le],[j,O]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[y,[j,R]],[/(aeobc)\b/i],[g,[y,z],[j,R]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[g,[j,p]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[g,[j,w]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[j,w]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[j,p]],[/(android[-\w\. ]{0,9});.+buil/i],[g,[y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[x,[_,we+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[x,[_,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[_,x],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[x,_]],os:[[/microsoft (windows) (vista|xp)/i],[_,x],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[_,[x,q,L]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[_,"Windows"],[x,q,L]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[x,/_/g,"."],[_,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[_,We],[x,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[x,_],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[_,x],[/\(bb(10);/i],[x,[_,je]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[x,[_,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[x,[_,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[x,[_,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[x,[_,"watchOS"]],[/crkey\/([\d\.]+)/i],[x,[_,pe+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[_,fe],x],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[_,x],[/(sunos) ?([\w\.\d]*)/i],[[_,"Solaris"],x],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[_,x]]},V=function(E,A){if(typeof E===c&&(A=E,E=a),!(this instanceof V))return new V(E,A).getResult();var I=typeof t!==i&&t.navigator?t.navigator:a,H=E||(I&&I.userAgent?I.userAgent:r),oe=I&&I.userAgentData?I.userAgentData:a,ye=A?Fe(F,A):F,ge=I&&I.userAgent==H;return this.getBrowser=function(){var ae={};return ae[_]=a,ae[x]=a,T.call(ae,H,ye.browser),ae[f]=$(ae[x]),ge&&I&&I.brave&&typeof I.brave.isBrave==l&&(ae[_]="Brave"),ae},this.getCPU=function(){var ae={};return ae[C]=a,T.call(ae,H,ye.cpu),ae},this.getDevice=function(){var ae={};return ae[y]=a,ae[g]=a,ae[j]=a,T.call(ae,H,ye.device),ge&&!ae[j]&&oe&&oe.mobile&&(ae[j]=p),ge&&ae[g]=="Macintosh"&&I&&typeof I.standalone!==i&&I.maxTouchPoints&&I.maxTouchPoints>2&&(ae[g]="iPad",ae[j]=w),ae},this.getEngine=function(){var ae={};return ae[_]=a,ae[x]=a,T.call(ae,H,ye.engine),ae},this.getOS=function(){var ae={};return ae[_]=a,ae[x]=a,T.call(ae,H,ye.os),ge&&!ae[_]&&oe&&oe.platform!="Unknown"&&(ae[_]=oe.platform.replace(/chrome os/i,fe).replace(/macos/i,We)),ae},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return H},this.setUA=function(ae){return H=typeof ae===u&&ae.length>U?N(ae,U):ae,this},this.setUA(H),this};V.VERSION=s,V.BROWSER=d([_,x,f]),V.CPU=d([C]),V.DEVICE=d([g,y,j,m,p,k,w,O,R]),V.ENGINE=V.OS=d([_,x]),e.exports&&(n=e.exports=V),n.UAParser=V;var K=typeof t!==i&&(t.jQuery||t.Zepto);if(K&&!K.ua){var X=new V;K.ua=X.getResult(),K.ua.get=function(){return X.getUA()},K.ua.set=function(E){X.setUA(E);var A=X.getResult();for(var I in A)K.ua[I]=A[I]}}})(typeof window=="object"?window:Cs)})(Ym,Na);const Jm=Na,Zm=h("path",{d:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"},null,-1),Xm=[Zm],Qm=h("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1),ey=[Qm],ny=h("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"},null,-1),ty=[ny],_o=Pn({__name:"StatusIcons",props:{icon:{type:String,required:!0}},setup(e){return(n,t)=>e.icon==="copy"?(Z(),ne("svg",Tt({key:0},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),Xm,16)):e.icon==="success"?(Z(),ne("svg",Tt({key:1},n.$attrs,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}),ey,16)):e.icon==="failed"?(Z(),ne("svg",Tt({key:2},n.$attrs,{viewBox:"0 0 320 512",xmlns:"http://www.w3.org/2000/svg"}),ty,16)):Qe("",!0)}});const ay=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),sy=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],ry=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],oy=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],ly=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],iy=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function cy(e){const n=e.regex,t=ay(e),a={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s="and or not only",r=/@-?\w[\w]*(-\w+)*/,o="[a-zA-Z-][a-zA-Z0-9_-]*",l=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,a,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+o,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+oy.join("|")+")"},{begin:":(:)?("+ly.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+iy.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...l,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...l,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:r},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:s,attribute:ry.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...l,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+sy.join("|")+")\\b"}]}}const wo="[A-Za-z$_][0-9A-Za-z$_]*",uy=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],hy=["true","false","null","undefined","NaN","Infinity"],Ei=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Si=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ti=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],gy=["arguments","this","super","console","window","document","localStorage","module","global"],dy=[].concat(Ti,Ei,Si);function fy(e){const n=e.regex,t=(B,{after:D})=>{const J="</"+B[0].slice(1);return B.input.indexOf(J,D)!==-1},a=wo,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,D)=>{const J=B[0].length+B.index,se=B.input[J];if(se==="<"||se===","){D.ignoreMatch();return}se===">"&&(t(B,{after:J})||D.ignoreMatch());let de;const le=B.input.substring(J);if(de=le.match(/^\s*=/)){D.ignoreMatch();return}if((de=le.match(/^\s+extends\s+/))&&de.index===0){D.ignoreMatch();return}}},l={$pattern:wo,keyword:uy,literal:hy,built_in:dy,"variable.language":gy},i="[0-9](_?[0-9])*",c=`\\.(${i})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${i})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},_={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},j={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,j,y,{match:/\$\d+/},f];g.contains=m.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(m)});const p=[].concat(C,g.contains),w=p.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(p)}]),k={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w},O={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ei,...Si]}},U={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},z={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[k],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(B){return n.concat("(?!",B.join("|"),")")}const je={match:n.concat(/\b/,ce([...Ti,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},pe={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},k]},we="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(we)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[k]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),U,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,j,y,C,{match:/\$\d+/},f,R,{className:"attr",begin:a+n.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:we,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[k,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[k]},je,ee,O,pe,{match:/\$[(.]/}]}}function py(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"string"}),i=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,i,l,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,o,i,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[i]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function by(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const my={class:"v-code-block--button-copy"},yy={class:"v-code-block--button-run"},vy={class:"v-code-block--code"},jy=["textContent"],_y=["innerHTML"],wy=Pn({__name:"CodeBlock",props:{browserWindow:{type:Boolean,required:!1,default:!1},code:{type:[Object,Array,String,Number],required:!0},codeBlockRadius:{type:String,required:!1,default:"0.5rem"},copyButton:{type:Boolean,required:!1,default:!0},copyIcons:{type:Boolean,required:!1,default:!0},copyTab:{type:Boolean,required:!1,default:!0},copyFailedText:{type:String,required:!1,default:"Copy failed!"},copyText:{type:String,required:!1,default:"Copy Code"},copySuccessText:{type:String,required:!1,default:"Copied!"},floatingTabs:{type:Boolean,required:!1,default:!0},height:{type:[String,Number],required:!1,default:"auto"},highlightjs:{type:Boolean,required:!1,default:!1},indent:{type:Number,required:!1,default:2},label:{type:String,required:!1,default:""},lang:{type:String,required:!1,default:"javascript"},maxHeight:{type:[String,Number],required:!1,default:"auto"},prismjs:{type:Boolean,required:!1,default:!1},prismPlugin:{type:Boolean,required:!1,default:!1},persistentCopyButton:{type:Boolean,required:!1,default:!1},runTab:{type:Boolean,required:!1,default:!1},runText:{type:String,required:!1,default:"Run"},tabGap:{type:String,required:!1,default:"0.25rem"},tabs:{type:Boolean,required:!1,default:!1},theme:{type:[String,Boolean],required:!1,default:"neon-bunny"}},emits:["run","update:copy-status"],setup(e,{emit:n}){const t=e,a="11.7.0",s="1.29.0",r="1.9.0",o=th(),l=te("codeBlockGlobalOptions");let i,c;const u=ke(null),f=ke("copy"),g=ke(""),_=ke(!1),j=ke(!1),y=ke(!1),x=ke(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${a}/build/styles`),C=ke(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${s}/themes`),m=ke(`https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@${r}/themes`),p=ke(""),w=ke(""),k=ke(""),O=Me(()=>{let G="";return t.highlightjs&&(G=p.value),t.prismjs&&t.prismPlugin&&(G=u.value),G}),R=Me(()=>{let G=y.value?"v-code-block--mobile":"";return G+=t.prismjs?" v-code-block--prismjs":" v-code-block--highlightjs",G}),U=Me(()=>({width:k.value==="coy"&&j.value===!1?"100%":""})),z=Me(()=>({"v-code-block--code-copy-button":!0,"v-code-block--code-copy-button-mobile":y.value,["v-code-block--code-copy-button-persist"]:t.persistentCopyButton,[`v-code-block--code-copy-button-status-${f.value}`]:!0})),ee=Me(()=>({bottom:t.floatingTabs?"1px":"0",gap:D(t.tabGap)})),ce=Me(()=>{const G=t.highlightjs?"highlightjs":"prism",ue=k.value===""||k.value==="prism"?"default":k.value;return{"v-code-block--me-1":!0,[`v-code-block--tab-${G}-${ue}-icon`]:!0,[`v-code-block--button-copy-icon-status-${f.value}`]:!0,[`v-code-block--tab-${G}-${ue}-icon-status-${f.value}`]:!0}}),je=Me(()=>y.value?"v-code-block--label-mobile":""),ve=Me(()=>{const G=t.codeBlockRadius;let ue=`${G} 0 ${G} ${G}`;(!t.tabs||!t.copyTab&&!t.runTab)&&(ue=G);const Le=k.value!=="funky"?"flex":"block";return{borderRadius:ue,height:D(t.height),maxHeight:D(t.maxHeight),display:Le}}),pe=Me(()=>{const G=t.highlightjs?"highlightjs":"prism",ue=k.value===""||k.value==="prism"?"default":k.value;return{[`v-code-block--tab-${ue}`]:!0,[`v-code-block--tab-${G}-${ue}`]:!0}}),we=Me(()=>({gap:D(t.tabGap)}));ut(t,()=>{t.code&&_e(),(t.theme||t.prismjs||t.highlightjs)&&(M(),k.value=t.theme,se()),t.copyText&&(g.value=t.copyText),t.runText&&(w.value=t.runText)}),nr(()=>{g.value=t.copyText,w.value=t.runText,M()}),$l(()=>{k.value=(l==null?void 0:l.theme)||t.theme,se(),de(),_e()});function M(){if(!t.prismjs&&!t.highlightjs)throw new Error("[vue3-code-block]: You must set either the prismjs or highlightjs props.");if(t.prismjs&&t.highlightjs)throw new Error("[vue3-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");t.highlightjs&&t.prismPlugin&&console.warn("[vue3-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue3-code-block component.")}function B(){if(t.lang==="json"){const G=t.code.toString();u.value=JSON.stringify(JSON.parse(G),null,t.indent);return}u.value=t.code}function D(G,ue="px"){if(!(G==null||G===""))return+G?`${Number(G)}${ue}`:String(G)}function J(){_.value||(_.value=!0,navigator.clipboard.writeText(u.value).then(()=>{g.value=t.copySuccessText,f.value="success",n("update:copy-status",f.value)},G=>{g.value=t.copyFailedText,f.value="failed",n("update:copy-status",f.value),console.error("Copy to clipboard failed: ",G)}),setTimeout(()=>{g.value=t.copyText,f.value="copy",n("update:copy-status",f.value),_.value=!1},3e3))}function se(){let G=null;const ue=t.highlightjs?"highlightjs":"prism",Le=document.getElementsByTagName("head")[0],fe=document.createElement("style"),We=document.body.getAttribute("data-v-code-block-theme");let Fe=`v-code-block--theme-${k.value}-${ue}`,d=!0,v=!0,S="",$="";if(Fe=le(ue,Fe),We===k.value||We===Fe||typeof k.value=="boolean")return;switch(document.body.setAttribute("data-v-code-block-theme",Fe),fe.setAttribute("type","text/css"),fe.setAttribute("data-theme-id",Fe),fe.setAttribute("data-theme","v-code-block--theme-sheet"),k.value){case"neon-bunny":G=ki,v=!1,d=!1,ue==="highlightjs"&&(G=pf);break;case"neon-bunny-carrot":G=ff,v=!1,d=!1,ue==="highlightjs"&&(G=bf);break}if(!v&&!d){ze(),fe.appendChild(document.createTextNode(G)),Le.appendChild(fe);return}const N=le(ue,k.value);switch(ue){case"highlightjs":S=`${N}.min.css`,$=`${x.value}/${S}`;break;case"prism":S=`${N}.css`,k.value==="default"&&(S="prism.css"),$=`${C.value}/prism-${S}`,k.value.includes("themes-")&&($=`${m.value}/${S}`);break;default:S="";break}j.value=!0,fetch($).then(T=>T.text()).then(T=>{ze(),fe.appendChild(document.createTextNode(T)),Le.appendChild(fe),j.value=!1}).catch(T=>{const q=t.highlightjs?"Highlight.js":"PrismJS";console.error(`${q} CDN Error:`,T)})}function de(){const ue=Jm().device;y.value=ue.type==="mobile"}window.addEventListener("orientationchange",()=>{de()});function le(G,ue,Le=!1){let fe=ue;return G==="prism"&&(fe=fe.replace("themes-","prism-"),fe=fe.replace("prism-prism-","prism-"),fe=fe.replace("theme-prism-","theme-"),Le&&(fe=fe.replace("prism-prism-",""),fe=fe.replace("prism-",""))),G==="highlightjs"&&(fe=fe.replace("base16-","base16/")),fe}function ze(){const G=document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');G.length>0&&G.forEach(ue=>{ue.remove()})}function _e(){B(),t.highlightjs&&jo(()=>import("./core-08fb2c16.js"),[]).then(G=>{i=G.default,i.registerLanguage("javascript",fy),i.registerLanguage("css",cy),i.registerLanguage("html",py),i.registerLanguage("plain",by),p.value=i.highlight(u.value,{language:t.lang}).value}).catch(G=>{console.error("Highlight.js import:",{err:G})}),t.prismjs&&jo(()=>Promise.resolve().then(()=>gp),void 0).then(G=>{c=G,p.value=c.highlight(u.value,c.languages[t.lang],t.lang)}).catch(G=>{console.error("PrismJS import:",{err:G})})}function Ne(){n("run")}return(G,ue)=>(Z(),ne("div",{class:Se(["v-code-block v-code-block--mb-5",b(R)])},[e.label||e.tabs||b(o).label||b(o).tabs?(Z(),ne("div",{key:0,class:"v-code-block--header",style:Tn(b(ee))},[h("div",{class:Se(["v-code-block--label v-code-block--pb-1",b(je)])},[b(o).label?rs(G.$slots,"label",{key:0},void 0,!0):(Z(),ne(Oe,{key:1},[ie(xe(t.label),1)],64))],2),h("div",{class:"v-code-block--tabs",style:Tn(b(we))},[b(o).tabs?rs(G.$slots,"tabs",{key:0},void 0,!0):(Z(),ne(Oe,{key:1},[e.copyTab&&e.tabs?(Z(),ne("div",{key:0,class:Se(["v-code-block--tab",b(pe)]),onClick:J},[h("div",my,[e.copyIcons?(Z(),Bt(_o,{key:0,class:Se(["v-code-block--button-copy-icon",b(ce)]),icon:f.value},null,8,["class","icon"])):Qe("",!0),ie(" "+xe(g.value),1)])],2)):Qe("",!0),e.runTab&&e.tabs&&!y.value?(Z(),ne("div",{key:1,class:Se(["v-code-block--tab",b(pe)]),onClick:Ne},[h("div",yy,xe(w.value),1)],2)):Qe("",!0)],64))],4)],4)):Qe("",!0),h("div",vy,[h("div",{class:Se(["v-code-block--code-copy-button",b(z)]),onClick:J},[b(o).copyButton?rs(G.$slots,"copyButton",{key:0},void 0,!0):(Z(),ne(Oe,{key:1},[e.copyButton?(Z(),Bt(_o,{key:0,class:Se(["v-code-block--button-copy-icon",b(ce)]),icon:f.value},null,8,["class","icon"])):Qe("",!0)],64))],2),h("pre",Tt(G.$attrs,{class:`language-${t.lang}`,style:b(ve)}),[ie(""),e.prismPlugin?(Z(),ne("code",{key:0,class:Se(`language-${t.lang} ${e.browserWindow?"v-code-block--code-browser":""} ${e.highlightjs?"hljs":""}`),style:Tn(b(U)),textContent:xe(b(O))},null,14,jy)):(Z(),ne("code",{key:1,class:Se(`language-${t.lang} ${e.browserWindow?"v-code-block--code-browser":""} ${e.highlightjs?"hljs":""}`),style:Tn(b(U)),innerHTML:p.value},null,14,_y)),ie(`
			`)],16)])],2))}});const br=ir(wy,[["__scopeId","data-v-ff2ab413"]]);const ky=(e,n)=>{const t={globalOptions:!0,...n};e.provide("codeBlockGlobalOptions",t),e.component("CodeBlock",br)};br.install=ky;function ko(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ko(Object(t),!0).forEach(function(a){Be(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ko(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ma(e){return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ma(e)}function xy(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function xo(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ey(e,n,t){return n&&xo(e.prototype,n),t&&xo(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function mr(e,n){return Ty(e)||Ay(e,n)||Ci(e,n)||Ny()}function Yt(e){return Sy(e)||Cy(e)||Ci(e)||Oy()}function Sy(e){if(Array.isArray(e))return As(e)}function Ty(e){if(Array.isArray(e))return e}function Cy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ay(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],s=!0,r=!1,o,l;try{for(t=t.call(e);!(s=(o=t.next()).done)&&(a.push(o.value),!(n&&a.length===n));s=!0);}catch(i){r=!0,l=i}finally{try{!s&&t.return!=null&&t.return()}finally{if(r)throw l}}return a}}function Ci(e,n){if(e){if(typeof e=="string")return As(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return As(e,n)}}function As(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Oy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ny(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Eo=function(){},yr={},Ai={},Oi=null,Ni={mark:Eo,measure:Eo};try{typeof window<"u"&&(yr=window),typeof document<"u"&&(Ai=document),typeof MutationObserver<"u"&&(Oi=MutationObserver),typeof performance<"u"&&(Ni=performance)}catch{}var My=yr.navigator||{},So=My.userAgent,To=So===void 0?"":So,In=yr,Ae=Ai,Co=Oi,oa=Ni;In.document;var _n=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",Mi=~To.indexOf("MSIE")||~To.indexOf("Trident/"),la,ia,ca,ua,ha,mn="___FONT_AWESOME___",Os=16,$i="fa",Ii="svg-inline--fa",Xn="data-fa-i2svg",Ns="data-fa-pseudo-element",$y="data-fa-pseudo-element-pending",vr="data-prefix",jr="data-icon",Ao="fontawesome-i2svg",Iy="async",Ry=["HTML","HEAD","STYLE","SCRIPT"],Ri=function(){try{return!0}catch{return!1}}(),Ce="classic",$e="sharp",_r=[Ce,$e];function Jt(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[Ce]}})}var Ht=Jt((la={},Be(la,Ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Be(la,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),la)),qt=Jt((ia={},Be(ia,Ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Be(ia,$e,{solid:"fass",regular:"fasr",light:"fasl"}),ia)),Wt=Jt((ca={},Be(ca,Ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Be(ca,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ca)),Ly=Jt((ua={},Be(ua,Ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Be(ua,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ua)),Py=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Li="fa-layers-text",By=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fy=Jt((ha={},Be(ha,Ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Be(ha,$e,{900:"fass",400:"fasr",300:"fasl"}),ha)),Pi=[1,2,3,4,5,6,7,8,9,10],Dy=Pi.concat([11,12,13,14,15,16,17,18,19,20]),zy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(qt[Ce]).map(Gt.add.bind(Gt));Object.keys(qt[$e]).map(Gt.add.bind(Gt));var Uy=[].concat(_r,Yt(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gn.GROUP,Gn.SWAP_OPACITY,Gn.PRIMARY,Gn.SECONDARY]).concat(Pi.map(function(e){return"".concat(e,"x")})).concat(Dy.map(function(e){return"w-".concat(e)})),At=In.FontAwesomeConfig||{};function Hy(e){var n=Ae.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function qy(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ae&&typeof Ae.querySelector=="function"){var Wy=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wy.forEach(function(e){var n=mr(e,2),t=n[0],a=n[1],s=qy(Hy(t));s!=null&&(At[a]=s)})}var Bi={styleDefault:"solid",familyDefault:"classic",cssPrefix:$i,replacementClass:Ii,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};At.familyPrefix&&(At.cssPrefix=At.familyPrefix);var bt=Y(Y({},Bi),At);bt.autoReplaceSvg||(bt.observeMutations=!1);var Q={};Object.keys(Bi).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(t){bt[e]=t,Ot.forEach(function(a){return a(Q)})},get:function(){return bt[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(n){bt.cssPrefix=n,Ot.forEach(function(t){return t(Q)})},get:function(){return bt.cssPrefix}});In.FontAwesomeConfig=Q;var Ot=[];function Gy(e){return Ot.push(e),function(){Ot.splice(Ot.indexOf(e),1)}}var kn=Os,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vy(e){if(!(!e||!_n)){var n=Ae.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=Ae.head.childNodes,a=null,s=t.length-1;s>-1;s--){var r=t[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return Ae.head.insertBefore(n,a),e}}var Ky="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,n="";e-- >0;)n+=Ky[Math.random()*62|0];return n}function jt(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function wr(e){return e.classList?jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Fi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yy(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Fi(e[t]),'" ')},"").trim()}function Qa(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function kr(e){return e.size!==gn.size||e.x!==gn.x||e.y!==gn.y||e.rotate!==gn.rotate||e.flipX||e.flipY}function Jy(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,s={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),i={transform:"".concat(r," ").concat(o," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:i,path:c}}function Zy(e){var n=e.transform,t=e.width,a=t===void 0?Os:t,s=e.height,r=s===void 0?Os:s,o=e.startCentered,l=o===void 0?!1:o,i="";return l&&Mi?i+="translate(".concat(n.x/kn-a/2,"em, ").concat(n.y/kn-r/2,"em) "):l?i+="translate(calc(-50% + ".concat(n.x/kn,"em), calc(-50% + ").concat(n.y/kn,"em)) "):i+="translate(".concat(n.x/kn,"em, ").concat(n.y/kn,"em) "),i+="scale(".concat(n.size/kn*(n.flipX?-1:1),", ").concat(n.size/kn*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var Xy=`:root, :host {
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
}`;function Di(){var e=$i,n=Ii,t=Q.cssPrefix,a=Q.replacementClass,s=Xy;if(t!==e||a!==n){var r=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");s=s.replace(r,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(a))}return s}var Oo=!1;function hs(){Q.autoAddCss&&!Oo&&(Vy(Di()),Oo=!0)}var Qy={mixout:function(){return{dom:{css:Di,insertCss:hs}}},hooks:function(){return{beforeDOMElementCreation:function(){hs()},beforeI2svg:function(){hs()}}}},yn=In||{};yn[mn]||(yn[mn]={});yn[mn].styles||(yn[mn].styles={});yn[mn].hooks||(yn[mn].hooks={});yn[mn].shims||(yn[mn].shims=[]);var sn=yn[mn],zi=[],ev=function e(){Ae.removeEventListener("DOMContentLoaded",e),$a=1,zi.map(function(n){return n()})},$a=!1;_n&&($a=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),$a||Ae.addEventListener("DOMContentLoaded",ev));function nv(e){_n&&($a?setTimeout(e,0):zi.push(e))}function Zt(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,s=e.children,r=s===void 0?[]:s;return typeof e=="string"?Fi(e):"<".concat(n," ").concat(Yy(a),">").concat(r.map(Zt).join(""),"</").concat(n,">")}function No(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var tv=function(n,t){return function(a,s,r,o){return n.call(t,a,s,r,o)}},gs=function(n,t,a,s){var r=Object.keys(n),o=r.length,l=s!==void 0?tv(t,s):t,i,c,u;for(a===void 0?(i=1,u=n[r[0]]):(i=0,u=a);i<o;i++)c=r[i],u=l(u,n[c],c,n);return u};function av(e){for(var n=[],t=0,a=e.length;t<a;){var s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<a){var r=e.charCodeAt(t++);(r&64512)==56320?n.push(((s&1023)<<10)+(r&1023)+65536):(n.push(s),t--)}else n.push(s)}return n}function Ms(e){var n=av(e);return n.length===1?n[0].toString(16):null}function sv(e,n){var t=e.length,a=e.charCodeAt(n),s;return a>=55296&&a<=56319&&t>n+1&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function Mo(e){return Object.keys(e).reduce(function(n,t){var a=e[t],s=!!a.icon;return s?n[a.iconName]=a.icon:n[t]=a,n},{})}function $s(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,s=a===void 0?!1:a,r=Mo(n);typeof sn.hooks.addPack=="function"&&!s?sn.hooks.addPack(e,Mo(n)):sn.styles[e]=Y(Y({},sn.styles[e]||{}),r),e==="fas"&&$s("fa",n)}var ga,da,fa,rt=sn.styles,rv=sn.shims,ov=(ga={},Be(ga,Ce,Object.values(Wt[Ce])),Be(ga,$e,Object.values(Wt[$e])),ga),xr=null,Ui={},Hi={},qi={},Wi={},Gi={},lv=(da={},Be(da,Ce,Object.keys(Ht[Ce])),Be(da,$e,Object.keys(Ht[$e])),da);function iv(e){return~Uy.indexOf(e)}function cv(e,n){var t=n.split("-"),a=t[0],s=t.slice(1).join("-");return a===e&&s!==""&&!iv(s)?s:null}var Vi=function(){var n=function(r){return gs(rt,function(o,l,i){return o[i]=gs(l,r,{}),o},{})};Ui=n(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var l=r[2].filter(function(i){return typeof i=="number"});l.forEach(function(i){s[i.toString(16)]=o})}return s}),Hi=n(function(s,r,o){if(s[o]=o,r[2]){var l=r[2].filter(function(i){return typeof i=="string"});l.forEach(function(i){s[i]=o})}return s}),Gi=n(function(s,r,o){var l=r[2];return s[o]=o,l.forEach(function(i){s[i]=o}),s});var t="far"in rt||Q.autoFetchSvg,a=gs(rv,function(s,r){var o=r[0],l=r[1],i=r[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(s.names[o]={prefix:l,iconName:i}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:l,iconName:i}),s},{names:{},unicodes:{}});qi=a.names,Wi=a.unicodes,xr=es(Q.styleDefault,{family:Q.familyDefault})};Gy(function(e){xr=es(e.styleDefault,{family:Q.familyDefault})});Vi();function Er(e,n){return(Ui[e]||{})[n]}function uv(e,n){return(Hi[e]||{})[n]}function Vn(e,n){return(Gi[e]||{})[n]}function Ki(e){return qi[e]||{prefix:null,iconName:null}}function hv(e){var n=Wi[e],t=Er("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Rn(){return xr}var Sr=function(){return{prefix:null,iconName:null,rest:[]}};function es(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?Ce:t,s=Ht[a][e],r=qt[a][e]||qt[a][s],o=e in sn.styles?e:null;return r||o||null}var $o=(fa={},Be(fa,Ce,Object.keys(Wt[Ce])),Be(fa,$e,Object.keys(Wt[$e])),fa);function ns(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,s=a===void 0?!1:a,r=(n={},Be(n,Ce,"".concat(Q.cssPrefix,"-").concat(Ce)),Be(n,$e,"".concat(Q.cssPrefix,"-").concat($e)),n),o=null,l=Ce;(e.includes(r[Ce])||e.some(function(c){return $o[Ce].includes(c)}))&&(l=Ce),(e.includes(r[$e])||e.some(function(c){return $o[$e].includes(c)}))&&(l=$e);var i=e.reduce(function(c,u){var f=cv(Q.cssPrefix,u);if(rt[u]?(u=ov[l].includes(u)?Ly[l][u]:u,o=u,c.prefix=u):lv[l].indexOf(u)>-1?(o=u,c.prefix=es(u,{family:l})):f?c.iconName=f:u!==Q.replacementClass&&u!==r[Ce]&&u!==r[$e]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var g=o==="fa"?Ki(c.iconName):{},_=Vn(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||_||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!rt.far&&rt.fas&&!Q.autoFetchSvg&&(c.prefix="fas")}return c},Sr());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&l===$e&&(rt.fass||Q.autoFetchSvg)&&(i.prefix="fass",i.iconName=Vn(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||o==="fa")&&(i.prefix=Rn()||"fas"),i}var gv=function(){function e(){xy(this,e),this.definitions={}}return Ey(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=Y(Y({},t.definitions[l]||{}),o[l]),$s(l,o[l]);var i=Wt[Ce][l];i&&$s(i,o[l]),Vi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(r){var o=s[r],l=o.prefix,i=o.iconName,c=o.icon,u=c[2];t[l]||(t[l]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[l][f]=c)}),t[l][i]=c}),t}}]),e}(),Io=[],ot={},ht={},dv=Object.keys(ht);function fv(e,n){var t=n.mixoutsTo;return Io=e,ot={},Object.keys(ht).forEach(function(a){dv.indexOf(a)===-1&&delete ht[a]}),Io.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(t[o]=s[o]),Ma(s[o])==="object"&&Object.keys(s[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=s[o][l]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(o){ot[o]||(ot[o]=[]),ot[o].push(r[o])})}a.provides&&a.provides(ht)}),t}function Is(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),s=2;s<t;s++)a[s-2]=arguments[s];var r=ot[e]||[];return r.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Qn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var s=ot[e]||[];s.forEach(function(r){r.apply(null,t)})}function vn(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ht[e]?ht[e].apply(null,n):void 0}function Rs(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||Rn();if(n)return n=Vn(t,n)||n,No(Yi.definitions,t,n)||No(sn.styles,t,n)}var Yi=new gv,pv=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,Qn("noAuto")},bv={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _n?(Qn("beforeI2svg",n),vn("pseudoElements2svg",n),vn("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,nv(function(){yv({autoReplaceSvgRoot:t}),Qn("watch",n)})}},mv={icon:function(n){if(n===null)return null;if(Ma(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Vn(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=es(n[0]);return{prefix:a,iconName:Vn(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(Q.cssPrefix,"-"))>-1||n.match(Py))){var s=ns(n.split(" "),{skipLookups:!0});return{prefix:s.prefix||Rn(),iconName:Vn(s.prefix,s.iconName)||s.iconName}}if(typeof n=="string"){var r=Rn();return{prefix:r,iconName:Vn(r,n)||n}}}},en={noAuto:pv,config:Q,dom:bv,parse:mv,library:Yi,findIconDefinition:Rs,toHtml:Zt},yv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?Ae:t;(Object.keys(sn.styles).length>0||Q.autoFetchSvg)&&_n&&Q.autoReplaceSvg&&en.dom.i2svg({node:a})};function ts(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Zt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(_n){var a=Ae.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function vv(e){var n=e.children,t=e.main,a=e.mask,s=e.attributes,r=e.styles,o=e.transform;if(kr(o)&&t.found&&!a.found){var l=t.width,i=t.height,c={x:l/i/2,y:.5};s.style=Qa(Y(Y({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:n}]}function jv(e){var n=e.prefix,t=e.iconName,a=e.children,s=e.attributes,r=e.symbol,o=r===!0?"".concat(n,"-").concat(Q.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},s),{},{id:o}),children:a}]}]}function Tr(e){var n=e.icons,t=n.main,a=n.mask,s=e.prefix,r=e.iconName,o=e.transform,l=e.symbol,i=e.title,c=e.maskId,u=e.titleId,f=e.extra,g=e.watchable,_=g===void 0?!1:g,j=a.found?a:t,y=j.width,x=j.height,C=s==="fak",m=[Q.replacementClass,r?"".concat(Q.cssPrefix,"-").concat(r):""].filter(function(z){return f.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(f.classes).join(" "),p={children:[],attributes:Y(Y({},f.attributes),{},{"data-prefix":s,"data-icon":r,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(x)})},w=C&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/x*16*.0625,"em")}:{};_&&(p.attributes[Xn]=""),i&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(u||Vt())},children:[i]}),delete p.attributes.title);var k=Y(Y({},p),{},{prefix:s,iconName:r,main:t,mask:a,maskId:c,transform:o,symbol:l,styles:Y(Y({},w),f.styles)}),O=a.found&&t.found?vn("generateAbstractMask",k)||{children:[],attributes:{}}:vn("generateAbstractIcon",k)||{children:[],attributes:{}},R=O.children,U=O.attributes;return k.children=R,k.attributes=U,l?jv(k):vv(k)}function Ro(e){var n=e.content,t=e.width,a=e.height,s=e.transform,r=e.title,o=e.extra,l=e.watchable,i=l===void 0?!1:l,c=Y(Y(Y({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});i&&(c[Xn]="");var u=Y({},o.styles);kr(s)&&(u.transform=Zy({transform:s,startCentered:!0,width:t,height:a}),u["-webkit-transform"]=u.transform);var f=Qa(u);f.length>0&&(c.style=f);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),r&&g.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),g}function _v(e){var n=e.content,t=e.title,a=e.extra,s=Y(Y(Y({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),r=Qa(a.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var ds=sn.styles;function Ls(e){var n=e[0],t=e[1],a=e.slice(4),s=mr(a,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Gn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Gn.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:n,height:t,icon:o}}var wv={found:!1,width:512,height:512};function kv(e,n){!Ri&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Ps(e,n){var t=n;return n==="fa"&&Q.styleDefault!==null&&(n=Rn()),new Promise(function(a,s){if(vn("missingIconAbstract"),t==="fa"){var r=Ki(e)||{};e=r.iconName||e,n=r.prefix||n}if(e&&n&&ds[n]&&ds[n][e]){var o=ds[n][e];return a(Ls(o))}kv(e,n),a(Y(Y({},wv),{},{icon:Q.showMissingIcons&&e?vn("missingIconAbstract")||{}:{}}))})}var Lo=function(){},Bs=Q.measurePerformance&&oa&&oa.mark&&oa.measure?oa:{mark:Lo,measure:Lo},kt='FA "6.4.0"',xv=function(n){return Bs.mark("".concat(kt," ").concat(n," begins")),function(){return Ji(n)}},Ji=function(n){Bs.mark("".concat(kt," ").concat(n," ends")),Bs.measure("".concat(kt," ").concat(n),"".concat(kt," ").concat(n," begins"),"".concat(kt," ").concat(n," ends"))},Cr={begin:xv,end:Ji},va=function(){};function Po(e){var n=e.getAttribute?e.getAttribute(Xn):null;return typeof n=="string"}function Ev(e){var n=e.getAttribute?e.getAttribute(vr):null,t=e.getAttribute?e.getAttribute(jr):null;return n&&t}function Sv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function Tv(){if(Q.autoReplaceSvg===!0)return ja.replace;var e=ja[Q.autoReplaceSvg];return e||ja.replace}function Cv(e){return Ae.createElementNS("http://www.w3.org/2000/svg",e)}function Av(e){return Ae.createElement(e)}function Zi(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Cv:Av:t;if(typeof e=="string")return Ae.createTextNode(e);var s=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){s.setAttribute(o,e.attributes[o])});var r=e.children||[];return r.forEach(function(o){s.appendChild(Zi(o,{ceFn:a}))}),s}function Ov(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ja={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(s){t.parentNode.insertBefore(Zi(s),t)}),t.getAttribute(Xn)===null&&Q.keepOriginalSource){var a=Ae.createComment(Ov(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~wr(t).indexOf(Q.replacementClass))return ja.replace(n);var s=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(l,i){return i===Q.replacementClass||i.match(s)?l.toSvg.push(i):l.toNode.push(i),l},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var o=a.map(function(l){return Zt(l)}).join(`
`);t.setAttribute(Xn,""),t.innerHTML=o}};function Bo(e){e()}function Xi(e,n){var t=typeof n=="function"?n:va;if(e.length===0)t();else{var a=Bo;Q.mutateApproach===Iy&&(a=In.requestAnimationFrame||Bo),a(function(){var s=Tv(),r=Cr.begin("mutate");e.map(s),r(),t()})}}var Ar=!1;function Qi(){Ar=!0}function Fs(){Ar=!1}var Ia=null;function Fo(e){if(Co&&Q.observeMutations){var n=e.treeCallback,t=n===void 0?va:n,a=e.nodeCallback,s=a===void 0?va:a,r=e.pseudoElementsCallback,o=r===void 0?va:r,l=e.observeMutationsRoot,i=l===void 0?Ae:l;Ia=new Co(function(c){if(!Ar){var u=Rn();jt(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Po(f.addedNodes[0])&&(Q.searchPseudoElements&&o(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&Q.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Po(f.target)&&~zy.indexOf(f.attributeName))if(f.attributeName==="class"&&Ev(f.target)){var g=ns(wr(f.target)),_=g.prefix,j=g.iconName;f.target.setAttribute(vr,_||u),j&&f.target.setAttribute(jr,j)}else Sv(f.target)&&s(f.target)})}}),_n&&Ia.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nv(){Ia&&Ia.disconnect()}function Mv(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,s){var r=s.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),t}function $v(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",s=ns(wr(e));return s.prefix||(s.prefix=Rn()),n&&t&&(s.prefix=n,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=uv(s.prefix,e.innerText)||Er(s.prefix,Ms(e.innerText))),!s.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function Iv(e){var n=jt(e.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(t?n["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(a||Vt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Rv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Do(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=$v(e),a=t.iconName,s=t.prefix,r=t.rest,o=Iv(e),l=Is("parseNodeAttributes",{},e),i=n.styleParser?Mv(e):[];return Y({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},l)}var Lv=sn.styles;function ec(e){var n=Q.autoReplaceSvg==="nest"?Do(e,{styleParser:!1}):Do(e);return~n.extra.classes.indexOf(Li)?vn("generateLayersText",e,n):vn("generateSvgReplacementMutation",e,n)}var Ln=new Set;_r.map(function(e){Ln.add("fa-".concat(e))});Object.keys(Ht[Ce]).map(Ln.add.bind(Ln));Object.keys(Ht[$e]).map(Ln.add.bind(Ln));Ln=Yt(Ln);function zo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_n)return Promise.resolve();var t=Ae.documentElement.classList,a=function(f){return t.add("".concat(Ao,"-").concat(f))},s=function(f){return t.remove("".concat(Ao,"-").concat(f))},r=Q.autoFetchSvg?Ln:_r.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Lv));r.includes("fa")||r.push("fa");var o=[".".concat(Li,":not([").concat(Xn,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Xn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=jt(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),s("complete");else return Promise.resolve();var i=Cr.begin("onTree"),c=l.reduce(function(u,f){try{var g=ec(f);g&&u.push(g)}catch(_){Ri||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(g){Xi(g,function(){a("active"),a("complete"),s("pending"),typeof n=="function"&&n(),i(),u()})}).catch(function(g){i(),f(g)})})}function Pv(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ec(e).then(function(t){t&&Xi([t],n)})}function Bv(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Rs(n||{}),s=t.mask;return s&&(s=(s||{}).icon?s:Rs(s||{})),e(a,Y(Y({},t),{},{mask:s}))}}var Fv=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,s=a===void 0?gn:a,r=t.symbol,o=r===void 0?!1:r,l=t.mask,i=l===void 0?null:l,c=t.maskId,u=c===void 0?null:c,f=t.title,g=f===void 0?null:f,_=t.titleId,j=_===void 0?null:_,y=t.classes,x=y===void 0?[]:y,C=t.attributes,m=C===void 0?{}:C,p=t.styles,w=p===void 0?{}:p;if(n){var k=n.prefix,O=n.iconName,R=n.icon;return ts(Y({type:"icon"},n),function(){return Qn("beforeDOMElementCreation",{iconDefinition:n,params:t}),Q.autoA11y&&(g?m["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(j||Vt()):(m["aria-hidden"]="true",m.focusable="false")),Tr({icons:{main:Ls(R),mask:i?Ls(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:O,transform:Y(Y({},gn),s),symbol:o,title:g,maskId:u,titleId:j,extra:{attributes:m,styles:w,classes:x}})})}},Dv={mixout:function(){return{icon:Bv(Fv)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=zo,t.nodeCallback=Pv,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,s=a===void 0?Ae:a,r=t.callback,o=r===void 0?function(){}:r;return zo(s,o)},n.generateSvgReplacementMutation=function(t,a){var s=a.iconName,r=a.title,o=a.titleId,l=a.prefix,i=a.transform,c=a.symbol,u=a.mask,f=a.maskId,g=a.extra;return new Promise(function(_,j){Promise.all([Ps(s,l),u.iconName?Ps(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var x=mr(y,2),C=x[0],m=x[1];_([t,Tr({icons:{main:C,mask:m},prefix:l,iconName:s,transform:i,symbol:c,maskId:f,title:r,titleId:o,extra:g,watchable:!0})])}).catch(j)})},n.generateAbstractIcon=function(t){var a=t.children,s=t.attributes,r=t.main,o=t.transform,l=t.styles,i=Qa(l);i.length>0&&(s.style=i);var c;return kr(o)&&(c=vn("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),a.push(c||r.icon),{children:a,attributes:s}}}},zv={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,r=s===void 0?[]:s;return ts({type:"layer"},function(){Qn("beforeDOMElementCreation",{assembler:t,params:a});var o=[];return t(function(l){Array.isArray(l)?l.map(function(i){o=o.concat(i.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(Yt(r)).join(" ")},children:o}]})}}}},Uv={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.title,r=s===void 0?null:s,o=a.classes,l=o===void 0?[]:o,i=a.attributes,c=i===void 0?{}:i,u=a.styles,f=u===void 0?{}:u;return ts({type:"counter",content:t},function(){return Qn("beforeDOMElementCreation",{content:t,params:a}),_v({content:t.toString(),title:r,extra:{attributes:c,styles:f,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(Yt(l))}})})}}}},Hv={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,r=s===void 0?gn:s,o=a.title,l=o===void 0?null:o,i=a.classes,c=i===void 0?[]:i,u=a.attributes,f=u===void 0?{}:u,g=a.styles,_=g===void 0?{}:g;return ts({type:"text",content:t},function(){return Qn("beforeDOMElementCreation",{content:t,params:a}),Ro({content:t,transform:Y(Y({},gn),r),title:l,extra:{attributes:f,styles:_,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(Yt(c))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var s=a.title,r=a.transform,o=a.extra,l=null,i=null;if(Mi){var c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();l=u.width/c,i=u.height/c}return Q.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Ro({content:t.innerHTML,width:l,height:i,transform:r,title:s,extra:o,watchable:!0})])}}},qv=new RegExp('"',"ug"),Uo=[1105920,1112319];function Wv(e){var n=e.replace(qv,""),t=sv(n,0),a=t>=Uo[0]&&t<=Uo[1],s=n.length===2?n[0]===n[1]:!1;return{value:Ms(s?n[0]:n),isSecondary:a||s}}function Ho(e,n){var t="".concat($y).concat(n.replace(":","-"));return new Promise(function(a,s){if(e.getAttribute(t)!==null)return a();var r=jt(e.children),o=r.filter(function(R){return R.getAttribute(Ns)===n})[0],l=In.getComputedStyle(e,n),i=l.getPropertyValue("font-family").match(By),c=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(o&&!i)return e.removeChild(o),a();if(i&&u!=="none"&&u!==""){var f=l.getPropertyValue("content"),g=~["Sharp"].indexOf(i[2])?$e:Ce,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(i[2])?qt[g][i[2].toLowerCase()]:Fy[g][c],j=Wv(f),y=j.value,x=j.isSecondary,C=i[0].startsWith("FontAwesome"),m=Er(_,y),p=m;if(C){var w=hv(y);w.iconName&&w.prefix&&(m=w.iconName,_=w.prefix)}if(m&&!x&&(!o||o.getAttribute(vr)!==_||o.getAttribute(jr)!==p)){e.setAttribute(t,p),o&&e.removeChild(o);var k=Rv(),O=k.extra;O.attributes[Ns]=n,Ps(m,_).then(function(R){var U=Tr(Y(Y({},k),{},{icons:{main:R,mask:Sr()},prefix:_,iconName:p,extra:O,watchable:!0})),z=Ae.createElement("svg");n==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=U.map(function(ee){return Zt(ee)}).join(`
`),e.removeAttribute(t),a()}).catch(s)}else a()}else a()})}function Gv(e){return Promise.all([Ho(e,"::before"),Ho(e,"::after")])}function Vv(e){return e.parentNode!==document.head&&!~Ry.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ns)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qo(e){if(_n)return new Promise(function(n,t){var a=jt(e.querySelectorAll("*")).filter(Vv).map(Gv),s=Cr.begin("searchPseudoElements");Qi(),Promise.all(a).then(function(){s(),Fs(),n()}).catch(function(){s(),Fs(),t()})})}var Kv={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=qo,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,s=a===void 0?Ae:a;Q.searchPseudoElements&&qo(s)}}},Wo=!1,Yv={mixout:function(){return{dom:{unwatch:function(){Qi(),Wo=!0}}}},hooks:function(){return{bootstrap:function(){Fo(Is("mutationObserverCallbacks",{}))},noAuto:function(){Nv()},watch:function(t){var a=t.observeMutationsRoot;Wo?Fs():Fo(Is("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Go=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,s){var r=s.toLowerCase().split("-"),o=r[0],l=r.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},t)},Jv={mixout:function(){return{parse:{transform:function(t){return Go(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-transform");return s&&(t.transform=Go(s)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,s=t.transform,r=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(i," ").concat(c," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},_={outer:l,inner:f,path:g};return{tag:"g",attributes:Y({},_.outer),children:[{tag:"g",attributes:Y({},_.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:Y(Y({},a.icon.attributes),_.path)}]}]}}}},fs={x:0,y:0,width:"100%",height:"100%"};function Vo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Zv(e){return e.tag==="g"?e.children:[e]}var Xv={hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-mask"),r=s?ns(s.split(" ").map(function(o){return o.trim()})):Sr();return r.prefix||(r.prefix=Rn()),t.mask=r,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,s=t.attributes,r=t.main,o=t.mask,l=t.maskId,i=t.transform,c=r.width,u=r.icon,f=o.width,g=o.icon,_=Jy({transform:i,containerWidth:f,iconWidth:c}),j={tag:"rect",attributes:Y(Y({},fs),{},{fill:"white"})},y=u.children?{children:u.children.map(Vo)}:{},x={tag:"g",attributes:Y({},_.inner),children:[Vo(Y({tag:u.tag,attributes:Y(Y({},u.attributes),_.path)},y))]},C={tag:"g",attributes:Y({},_.outer),children:[x]},m="mask-".concat(l||Vt()),p="clip-".concat(l||Vt()),w={tag:"mask",attributes:Y(Y({},fs),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,C]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:Zv(g)},w]};return a.push(k,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(m,")")},fs)}),{children:a,attributes:s}}}},Qv={provides:function(n){var t=!1;In.matchMedia&&(t=In.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:Y(Y({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Y(Y({},r),{},{attributeName:"opacity"}),l={tag:"circle",attributes:Y(Y({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:Y(Y({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:Y(Y({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Y(Y({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:Y(Y({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ej={hooks:function(){return{parseNodeAttributes:function(t,a){var s=a.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return t.symbol=r,t}}}},nj=[Qy,Dv,zv,Uv,Hv,Kv,Yv,Jv,Xv,Qv,ej];fv(nj,{mixoutsTo:en});en.noAuto;var nc=en.config,tj=en.library;en.dom;var Ra=en.parse;en.findIconDefinition;en.toHtml;var aj=en.icon;en.layer;var sj=en.text;en.counter;function Ko(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function tn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ko(Object(t),!0).forEach(function(a){Ke(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ko(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function La(e){return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},La(e)}function Ke(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rj(e,n){if(e==null)return{};var t={},a=Object.keys(e),s,r;for(r=0;r<a.length;r++)s=a[r],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function oj(e,n){if(e==null)return{};var t=rj(e,n),a,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function Ds(e){return lj(e)||ij(e)||cj(e)||uj()}function lj(e){if(Array.isArray(e))return zs(e)}function ij(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cj(e,n){if(e){if(typeof e=="string")return zs(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zs(e,n)}}function zs(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function uj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tc={exports:{}};(function(e){(function(n){var t=function(C,m,p){if(!c(m)||f(m)||g(m)||_(m)||i(m))return m;var w,k=0,O=0;if(u(m))for(w=[],O=m.length;k<O;k++)w.push(t(C,m[k],p));else{w={};for(var R in m)Object.prototype.hasOwnProperty.call(m,R)&&(w[C(R,p)]=t(C,m[R],p))}return w},a=function(C,m){m=m||{};var p=m.separator||"_",w=m.split||/(?=[A-Z])/;return C.split(w).join(p)},s=function(C){return j(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(m,p){return p?p.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},r=function(C){var m=s(C);return m.substr(0,1).toUpperCase()+m.substr(1)},o=function(C,m){return a(C,m).toLowerCase()},l=Object.prototype.toString,i=function(C){return typeof C=="function"},c=function(C){return C===Object(C)},u=function(C){return l.call(C)=="[object Array]"},f=function(C){return l.call(C)=="[object Date]"},g=function(C){return l.call(C)=="[object RegExp]"},_=function(C){return l.call(C)=="[object Boolean]"},j=function(C){return C=C-0,C===C},y=function(C,m){var p=m&&"process"in m?m.process:m;return typeof p!="function"?C:function(w,k){return p(w,C,k)}},x={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(C,m){return t(y(s,m),C)},decamelizeKeys:function(C,m){return t(y(o,m),C,m)},pascalizeKeys:function(C,m){return t(y(r,m),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=x:n.humps=x})(hj)})(tc);var gj=tc.exports,dj=["class","style"];function fj(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),s=gj.camelize(t.slice(0,a)),r=t.slice(a+1).trim();return n[s]=r,n},{})}function pj(e){return e.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function Or(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(i){return Or(i)}),s=Object.keys(e.attributes||{}).reduce(function(i,c){var u=e.attributes[c];switch(c){case"class":i.class=pj(u);break;case"style":i.style=fj(u);break;default:i.attrs[c]=u}return i},{attrs:{},class:{},style:{}});t.class;var r=t.style,o=r===void 0?{}:r,l=oj(t,dj);return Zl(e.tag,tn(tn(tn({},n),{},{class:s.class,style:tn(tn({},s.style),o)},s.attrs),l),a)}var ac=!1;try{ac=!0}catch{}function bj(){if(!ac&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nt(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Ke({},e,n):{}}function mj(e){var n,t=(n={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ke(n,"fa-".concat(e.size),e.size!==null),Ke(n,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ke(n,"fa-pull-".concat(e.pull),e.pull!==null),Ke(n,"fa-swap-opacity",e.swapOpacity),Ke(n,"fa-bounce",e.bounce),Ke(n,"fa-shake",e.shake),Ke(n,"fa-beat",e.beat),Ke(n,"fa-fade",e.fade),Ke(n,"fa-beat-fade",e.beatFade),Ke(n,"fa-flash",e.flash),Ke(n,"fa-spin-pulse",e.spinPulse),Ke(n,"fa-spin-reverse",e.spinReverse),n);return Object.keys(t).map(function(a){return t[a]?a:null}).filter(function(a){return a})}function Yo(e){if(e&&La(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ra.icon)return Ra.icon(e);if(e===null)return null;if(La(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var yj=Pn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var a=t.attrs,s=Me(function(){return Yo(n.icon)}),r=Me(function(){return Nt("classes",mj(n))}),o=Me(function(){return Nt("transform",typeof n.transform=="string"?Ra.transform(n.transform):n.transform)}),l=Me(function(){return Nt("mask",Yo(n.mask))}),i=Me(function(){return aj(s.value,tn(tn(tn(tn({},r.value),o.value),l.value),{},{symbol:n.symbol,title:n.title}))});ut(i,function(u){if(!u)return bj("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var c=Me(function(){return i.value?Or(i.value.abstract[0],{},a):null});return function(){return c.value}}});Pn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(n,t){var a=t.slots,s=nc.familyPrefix,r=Me(function(){return["".concat(s,"-layers")].concat(Ds(n.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Zl("div",{class:r.value},a.default?a.default():[])}}});Pn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(n){return["bottom-left","bottom-right","top-left","top-right"].indexOf(n)>-1}}},setup:function(n,t){var a=t.attrs,s=nc.familyPrefix,r=Me(function(){return Nt("classes",[].concat(Ds(n.counter?["".concat(s,"-layers-counter")]:[]),Ds(n.position?["".concat(s,"-layers-").concat(n.position)]:[])))}),o=Me(function(){return Nt("transform",typeof n.transform=="string"?Ra.transform(n.transform):n.transform)}),l=Me(function(){var c=sj(n.value.toString(),tn(tn({},o.value),r.value)),u=c.abstract;return n.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),i=Me(function(){return Or(l.value,{},a)});return function(){return i.value}}});var vj={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},jj={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},_j={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},wj={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},kj={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},xj={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ej={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"]};tj.add({faCircleInfo:vj,faCopyright:wj,faGithub:xj,faHouse:jj,faMoon:kj,faNpm:Ej,faSun:_j});Ch(Gm).use(br,{}).use(Nh()).component("fa-icon",yj).mount("#app");export{us as H};
