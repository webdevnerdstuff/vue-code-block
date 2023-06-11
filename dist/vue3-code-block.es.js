import Xo from "ua-parser-js";
/**
 * @name vue3-code-block
 * @version 2.1.2
 * @description Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vue3-code-block/
 * @repository https://github.com/webdevnerdstuff/vue3-code-block
 * @license MIT License
 */
function Qo(n, e) {
  const a = /* @__PURE__ */ Object.create(null), o = n.split(",");
  for (let t = 0; t < o.length; t++)
    a[o[t]] = !0;
  return e ? (t) => !!a[t.toLowerCase()] : (t) => !!a[t];
}
const yn = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Yo = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ee = () => {
}, nt = /^on[^a-z]/, et = (n) => nt.test(n), tn = Object.assign, at = (n, e) => {
  const a = n.indexOf(e);
  a > -1 && n.splice(a, 1);
}, ot = Object.prototype.hasOwnProperty, V = (n, e) => ot.call(n, e), S = Array.isArray, Dn = (n) => Re(n) === "[object Map]", Za = (n) => Re(n) === "[object Set]", P = (n) => typeof n == "function", cn = (n) => typeof n == "string", na = (n) => typeof n == "symbol", J = (n) => n !== null && typeof n == "object", tt = (n) => J(n) && P(n.then) && P(n.catch), Ka = Object.prototype.toString, Re = (n) => Ka.call(n), Ja = (n) => Re(n).slice(8, -1), Xa = (n) => Re(n) === "[object Object]", ea = (n) => cn(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Qa = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (a) => e[a] || (e[a] = n(a));
}, Ya = Qa((n) => n.charAt(0).toUpperCase() + n.slice(1)), lt = Qa((n) => n ? `on${Ya(n)}` : ""), le = (n, e) => !Object.is(n, e), st = (n, e, a) => {
  Object.defineProperty(n, e, { configurable: !0, enumerable: !1, value: a });
};
let da;
const Ue = () => da || (da = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cn(n) {
  if (S(n)) {
    const e = {};
    for (let a = 0; a < n.length; a++) {
      const o = n[a], t = cn(o) ? ct(o) : Cn(o);
      if (t)
        for (const l in t)
          e[l] = t[l];
    }
    return e;
  }
  return cn(n) || J(n) ? n : void 0;
}
const rt = /;(?![^(]*\))/g, ut = /:([^]+)/, it = /\/\*[^]*?\*\//g;
function ct(n) {
  const e = {};
  return n.replace(it, "").split(rt).forEach((a) => {
    if (a) {
      const o = a.split(ut);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function sn(n) {
  let e = "";
  if (cn(n))
    e = n;
  else if (S(n))
    for (let a = 0; a < n.length; a++) {
      const o = sn(n[a]);
      o && (e += o + " ");
    }
  else if (J(n))
    for (const a in n)
      n[a] && (e += a + " ");
  return e.trim();
}
const he = (n) => cn(n) ? n : n == null ? "" : S(n) || J(n) && (n.toString === Ka || !P(n.toString)) ? JSON.stringify(n, no, 2) : String(n), no = (n, e) => e && e.__v_isRef ? no(n, e.value) : Dn(e) ? { [`Map(${e.size})`]: [...e.entries()].reduce((a, [o, t]) => (a[`${o} =>`] = t, a), {}) } : Za(e) ? { [`Set(${e.size})`]: [...e.values()] } : !J(e) || S(e) || Xa(e) ? e : String(e);
function ya(n, ...e) {
  console.warn(`[Vue warn] ${n}`, ...e);
}
let eo;
const se = (n) => {
  const e = new Set(n);
  return e.w = 0, e.n = 0, e;
}, ao = (n) => (n.w & xn) > 0, oo = (n) => (n.n & xn) > 0, Fe = /* @__PURE__ */ new WeakMap();
let Yn = 0, xn = 1;
const qe = 30;
let Y;
const In = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), We = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class to {
  constructor(e, a = null, o) {
    this.fn = e, this.scheduler = a, this.active = !0, this.deps = [], this.parent = void 0, function(t, l = eo) {
      l && l.active && l.effects.push(t);
    }(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = Y, a = Sn;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = Y, Y = this, Sn = !0, xn = 1 << ++Yn, Yn <= qe ? (({ deps: o }) => {
        if (o.length)
          for (let t = 0; t < o.length; t++)
            o[t].w |= xn;
      })(this) : va(this), this.fn();
    } finally {
      Yn <= qe && ((o) => {
        const { deps: t } = o;
        if (t.length) {
          let l = 0;
          for (let s = 0; s < t.length; s++) {
            const r = t[s];
            ao(r) && !oo(r) ? r.delete(o) : t[l++] = r, r.w &= ~xn, r.n &= ~xn;
          }
          t.length = l;
        }
      })(this), xn = 1 << --Yn, Y = this.parent, Sn = a, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Y === this ? this.deferStop = !0 : this.active && (va(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function va(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let a = 0; a < e.length; a++)
      e[a].delete(n);
    e.length = 0;
  }
}
let Sn = !0;
const lo = [];
function aa() {
  lo.push(Sn), Sn = !1;
}
function oa() {
  const n = lo.pop();
  Sn = n === void 0 || n;
}
function G(n, e, a) {
  if (Sn && Y) {
    let o = Fe.get(n);
    o || Fe.set(n, o = /* @__PURE__ */ new Map());
    let t = o.get(a);
    t || o.set(a, t = se()), Ge(t, process.env.NODE_ENV !== "production" ? { effect: Y, target: n, type: e, key: a } : void 0);
  }
}
function Ge(n, e) {
  let a = !1;
  Yn <= qe ? oo(n) || (n.n |= xn, a = !ao(n)) : a = !n.has(Y), a && (n.add(Y), Y.deps.push(n), process.env.NODE_ENV !== "production" && Y.onTrack && Y.onTrack(tn({ effect: Y }, e)));
}
function Tn(n, e, a, o, t, l) {
  const s = Fe.get(n);
  if (!s)
    return;
  let r = [];
  if (e === "clear")
    r = [...s.values()];
  else if (a === "length" && S(n)) {
    const c = Number(o);
    s.forEach((p, u) => {
      (u === "length" || u >= c) && r.push(p);
    });
  } else
    switch (a !== void 0 && r.push(s.get(a)), e) {
      case "add":
        S(n) ? ea(a) && r.push(s.get("length")) : (r.push(s.get(In)), Dn(n) && r.push(s.get(We)));
        break;
      case "delete":
        S(n) || (r.push(s.get(In)), Dn(n) && r.push(s.get(We)));
        break;
      case "set":
        Dn(n) && r.push(s.get(In));
    }
  const i = process.env.NODE_ENV !== "production" ? { target: n, type: e, key: a, newValue: o, oldValue: t, oldTarget: l } : void 0;
  if (r.length === 1)
    r[0] && (process.env.NODE_ENV !== "production" ? qn(r[0], i) : qn(r[0]));
  else {
    const c = [];
    for (const p of r)
      p && c.push(...p);
    process.env.NODE_ENV !== "production" ? qn(se(c), i) : qn(se(c));
  }
}
function qn(n, e) {
  const a = S(n) ? n : [...n];
  for (const o of a)
    o.computed && fa(o, e);
  for (const o of a)
    o.computed || fa(o, e);
}
function fa(n, e) {
  (n !== Y || n.allowRecurse) && (process.env.NODE_ENV !== "production" && n.onTrigger && n.onTrigger(tn({ effect: n }, e)), n.scheduler ? n.scheduler() : n.run());
}
const gt = Qo("__proto__,__v_isRef,__isVue"), so = new Set(Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(na)), ht = ta(), pt = ta(!0), bt = ta(!0, !0), ma = jt();
function jt() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...a) {
      const o = w(this);
      for (let l = 0, s = this.length; l < s; l++)
        G(o, "get", l + "");
      const t = o[e](...a);
      return t === -1 || t === !1 ? o[e](...a.map(w)) : t;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...a) {
      aa();
      const o = w(this)[e].apply(this, a);
      return oa(), o;
    };
  }), n;
}
function dt(n) {
  const e = w(this);
  return G(e, "has", n), e.hasOwnProperty(n);
}
function ta(n = !1, e = !1) {
  return function(a, o, t) {
    if (o === "__v_isReactive")
      return !n;
    if (o === "__v_isReadonly")
      return n;
    if (o === "__v_isShallow")
      return e;
    if (o === "__v_raw" && t === (n ? e ? go : co : e ? St : io).get(a))
      return a;
    const l = S(a);
    if (!n) {
      if (l && V(ma, o))
        return Reflect.get(ma, o, t);
      if (o === "hasOwnProperty")
        return dt;
    }
    const s = Reflect.get(a, o, t);
    return (na(o) ? so.has(o) : gt(o)) ? s : (n || G(a, "get", o), e ? s : K(s) ? l && ea(o) ? s : s.value : J(s) ? n ? po(s) : ho(s) : s);
  };
}
function yt(n = !1) {
  return function(e, a, o, t) {
    let l = e[a];
    if ($n(l) && K(l) && !K(o))
      return !1;
    if (!n && (Ne(o) || $n(o) || (l = w(l), o = w(o)), !S(e) && K(l) && !K(o)))
      return l.value = o, !0;
    const s = S(e) && ea(a) ? Number(a) < e.length : V(e, a), r = Reflect.set(e, a, o, t);
    return e === w(t) && (s ? le(o, l) && Tn(e, "set", a, o, l) : Tn(e, "add", a, o)), r;
  };
}
const vt = { get: ht, set: yt(), deleteProperty: function(n, e) {
  const a = V(n, e), o = n[e], t = Reflect.deleteProperty(n, e);
  return t && a && Tn(n, "delete", e, void 0, o), t;
}, has: function(n, e) {
  const a = Reflect.has(n, e);
  return na(e) && so.has(e) || G(n, "has", e), a;
}, ownKeys: function(n) {
  return G(n, "iterate", S(n) ? "length" : In), Reflect.ownKeys(n);
} }, ro = { get: pt, set: (n, e) => (process.env.NODE_ENV !== "production" && ya(`Set operation on key "${String(e)}" failed: target is readonly.`, n), !0), deleteProperty: (n, e) => (process.env.NODE_ENV !== "production" && ya(`Delete operation on key "${String(e)}" failed: target is readonly.`, n), !0) }, ft = tn({}, ro, { get: bt }), la = (n) => n, Ce = (n) => Reflect.getPrototypeOf(n);
function pe(n, e, a = !1, o = !1) {
  const t = w(n = n.__v_raw), l = w(e);
  a || (e !== l && G(t, "get", e), G(t, "get", l));
  const { has: s } = Ce(t), r = o ? la : a ? ua : re;
  return s.call(t, e) ? r(n.get(e)) : s.call(t, l) ? r(n.get(l)) : void (n !== t && n.get(e));
}
function be(n, e = !1) {
  const a = this.__v_raw, o = w(a), t = w(n);
  return e || (n !== t && G(o, "has", n), G(o, "has", t)), n === t ? a.has(n) : a.has(n) || a.has(t);
}
function je(n, e = !1) {
  return n = n.__v_raw, !e && G(w(n), "iterate", In), Reflect.get(n, "size", n);
}
function _a(n) {
  n = w(n);
  const e = w(this);
  return Ce(e).has.call(e, n) || (e.add(n), Tn(e, "add", n, n)), this;
}
function ka(n, e) {
  e = w(e);
  const a = w(this), { has: o, get: t } = Ce(a);
  let l = o.call(a, n);
  l ? process.env.NODE_ENV !== "production" && uo(a, o, n) : (n = w(n), l = o.call(a, n));
  const s = t.call(a, n);
  return a.set(n, e), l ? le(e, s) && Tn(a, "set", n, e, s) : Tn(a, "add", n, e), this;
}
function wa(n) {
  const e = w(this), { has: a, get: o } = Ce(e);
  let t = a.call(e, n);
  t ? process.env.NODE_ENV !== "production" && uo(e, a, n) : (n = w(n), t = a.call(e, n));
  const l = o ? o.call(e, n) : void 0, s = e.delete(n);
  return t && Tn(e, "delete", n, void 0, l), s;
}
function Ea() {
  const n = w(this), e = n.size !== 0, a = process.env.NODE_ENV !== "production" ? Dn(n) ? new Map(n) : new Set(n) : void 0, o = n.clear();
  return e && Tn(n, "clear", void 0, void 0, a), o;
}
function de(n, e) {
  return function(a, o) {
    const t = this, l = t.__v_raw, s = w(l), r = e ? la : n ? ua : re;
    return !n && G(s, "iterate", In), l.forEach((i, c) => a.call(o, r(i), r(c), t));
  };
}
function ye(n, e, a) {
  return function(...o) {
    const t = this.__v_raw, l = w(t), s = Dn(l), r = n === "entries" || n === Symbol.iterator && s, i = n === "keys" && s, c = t[n](...o), p = a ? la : e ? ua : re;
    return !e && G(l, "iterate", i ? We : In), { next() {
      const { value: u, done: f } = c.next();
      return f ? { value: u, done: f } : { value: r ? [p(u[0]), p(u[1])] : p(u), done: f };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function wn(n) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const a = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${Ya(n)} operation ${a}failed: target is readonly.`, w(this));
    }
    return n !== "delete" && this;
  };
}
function mt() {
  const n = { get(t) {
    return pe(this, t);
  }, get size() {
    return je(this);
  }, has: be, add: _a, set: ka, delete: wa, clear: Ea, forEach: de(!1, !1) }, e = { get(t) {
    return pe(this, t, !1, !0);
  }, get size() {
    return je(this);
  }, has: be, add: _a, set: ka, delete: wa, clear: Ea, forEach: de(!1, !0) }, a = { get(t) {
    return pe(this, t, !0);
  }, get size() {
    return je(this, !0);
  }, has(t) {
    return be.call(this, t, !0);
  }, add: wn("add"), set: wn("set"), delete: wn("delete"), clear: wn("clear"), forEach: de(!0, !1) }, o = { get(t) {
    return pe(this, t, !0, !0);
  }, get size() {
    return je(this, !0);
  }, has(t) {
    return be.call(this, t, !0);
  }, add: wn("add"), set: wn("set"), delete: wn("delete"), clear: wn("clear"), forEach: de(!0, !0) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((t) => {
    n[t] = ye(t, !1, !1), a[t] = ye(t, !0, !1), e[t] = ye(t, !1, !0), o[t] = ye(t, !0, !0);
  }), [n, a, e, o];
}
const [_t, kt, wt, Et] = mt();
function sa(n, e) {
  const a = e ? n ? Et : wt : n ? kt : _t;
  return (o, t, l) => t === "__v_isReactive" ? !n : t === "__v_isReadonly" ? n : t === "__v_raw" ? o : Reflect.get(V(a, t) && t in o ? a : o, t, l);
}
const xt = { get: sa(!1, !1) }, Nt = { get: sa(!0, !1) }, Ot = { get: sa(!0, !0) };
function uo(n, e, a) {
  const o = w(a);
  if (o !== a && e.call(n, o)) {
    const t = Ja(n);
    console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${t === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const io = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
function ho(n) {
  return $n(n) ? n : ra(n, !1, vt, xt, io);
}
function po(n) {
  return ra(n, !0, ro, Nt, co);
}
function ve(n) {
  return ra(n, !0, ft, Ot, go);
}
function ra(n, e, a, o, t) {
  if (!J(n))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && (!e || !n.__v_isReactive))
    return n;
  const l = t.get(n);
  if (l)
    return l;
  const s = (r = n).__v_skip || !Object.isExtensible(r) ? 0 : function(c) {
    switch (c) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(Ja(r));
  var r;
  if (s === 0)
    return n;
  const i = new Proxy(n, s === 2 ? o : a);
  return t.set(n, i), i;
}
function zn(n) {
  return $n(n) ? zn(n.__v_raw) : !(!n || !n.__v_isReactive);
}
function $n(n) {
  return !(!n || !n.__v_isReadonly);
}
function Ne(n) {
  return !(!n || !n.__v_isShallow);
}
function ze(n) {
  return zn(n) || $n(n);
}
function w(n) {
  const e = n && n.__v_raw;
  return e ? w(e) : n;
}
const re = (n) => J(n) ? ho(n) : n, ua = (n) => J(n) ? po(n) : n;
function bo(n) {
  Sn && Y && (n = w(n), process.env.NODE_ENV !== "production" ? Ge(n.dep || (n.dep = se()), { target: n, type: "get", key: "value" }) : Ge(n.dep || (n.dep = se())));
}
function jo(n, e) {
  const a = (n = w(n)).dep;
  a && (process.env.NODE_ENV !== "production" ? qn(a, { target: n, type: "set", key: "value", newValue: e }) : qn(a));
}
function K(n) {
  return !(!n || n.__v_isRef !== !0);
}
function ln(n) {
  return function(e, a) {
    return K(e) ? e : new Tt(e, a);
  }(n, !1);
}
class Tt {
  constructor(e, a) {
    this.__v_isShallow = a, this.dep = void 0, this.__v_isRef = !0, this._rawValue = a ? e : w(e), this._value = a ? e : re(e);
  }
  get value() {
    return bo(this), this._value;
  }
  set value(e) {
    const a = this.__v_isShallow || Ne(e) || $n(e);
    e = a ? e : w(e), le(e, this._rawValue) && (this._rawValue = e, this._value = a ? e : re(e), jo(this, e));
  }
}
function _(n) {
  return K(n) ? n.value : n;
}
const $t = { get: (n, e, a) => _(Reflect.get(n, e, a)), set: (n, e, a, o) => {
  const t = n[e];
  return K(t) && !K(a) ? (t.value = a, !0) : Reflect.set(n, e, a, o);
} };
class Mt {
  constructor(e, a, o, t) {
    this._setter = a, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new to(e, () => {
      this._dirty || (this._dirty = !0, jo(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !t, this.__v_isReadonly = o;
  }
  get value() {
    const e = w(this);
    return bo(e), !e._dirty && e._cacheable || (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
const Rn = [];
function M(n, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  aa();
  const a = Rn.length ? Rn[Rn.length - 1].component : null, o = a && a.appContext.config.warnHandler, t = function() {
    let l = Rn[Rn.length - 1];
    if (!l)
      return [];
    const s = [];
    for (; l; ) {
      const r = s[0];
      r && r.vnode === l ? r.recurseCount++ : s.push({ vnode: l, recurseCount: 0 });
      const i = l.component && l.component.parent;
      l = i && i.vnode;
    }
    return s;
  }();
  if (o)
    Bn(o, a, 11, [n + e.join(""), a && a.proxy, t.map(({ vnode: l }) => `at <${Aa(a, l.type)}>`).join(`
`), t]);
  else {
    const l = [`[Vue warn]: ${n}`, ...e];
    t.length && l.push(`
`, ...function(s) {
      const r = [];
      return s.forEach((i, c) => {
        r.push(...c === 0 ? [] : [`
`], ...function({ vnode: p, recurseCount: u }) {
          const f = u > 0 ? `... (${u} recursive calls)` : "", E = !!p.component && p.component.parent == null, T = ` at <${Aa(p.component, p.type, E)}`, N = ">" + f;
          return p.props ? [T, ...Rt(p.props), N] : [T + N];
        }(i));
      }), r;
    }(t)), console.warn(...l);
  }
  oa();
}
function Rt(n) {
  const e = [], a = Object.keys(n);
  return a.slice(0, 3).forEach((o) => {
    e.push(...yo(o, n[o]));
  }), a.length > 3 && e.push(" ..."), e;
}
function yo(n, e, a) {
  return cn(e) ? (e = JSON.stringify(e), a ? e : [`${n}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? a ? e : [`${n}=${e}`] : K(e) ? (e = yo(n, w(e.value), !0), a ? e : [`${n}=Ref<`, e, ">"]) : P(e) ? [`${n}=fn${e.name ? `<${e.name}>` : ""}`] : (e = w(e), a ? e : [`${n}=`, e]);
}
const Ze = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
function Bn(n, e, a, o) {
  let t;
  try {
    t = o ? n(...o) : n();
  } catch (l) {
    vo(l, e, a);
  }
  return t;
}
function ae(n, e, a, o) {
  if (P(n)) {
    const l = Bn(n, e, a, o);
    return l && tt(l) && l.catch((s) => {
      vo(s, e, a);
    }), l;
  }
  const t = [];
  for (let l = 0; l < n.length; l++)
    t.push(ae(n[l], e, a, o));
  return t;
}
function vo(n, e, a, o = !0) {
  const t = e ? e.vnode : null;
  if (e) {
    let l = e.parent;
    const s = e.proxy, r = process.env.NODE_ENV !== "production" ? Ze[a] : a;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let p = 0; p < c.length; p++)
          if (c[p](n, s, r) === !1)
            return;
      }
      l = l.parent;
    }
    const i = e.appContext.config.errorHandler;
    if (i)
      return void Bn(i, null, 10, [n, s, r]);
  }
  (function(l, s, r, i = !0) {
    if (process.env.NODE_ENV !== "production") {
      const p = Ze[s];
      if (r && (c = r, Rn.push(c)), M("Unhandled error" + (p ? ` during execution of ${p}` : "")), r && Rn.pop(), i)
        throw l;
      console.error(l);
    } else
      console.error(l);
    var c;
  })(n, a, t, o);
}
let Oe = !1, Ke = !1;
const hn = [];
let Nn = 0;
const Wn = [];
let dn = null, En = 0;
const fo = Promise.resolve();
let ia = null;
const Ct = 100;
function At(n) {
  const e = ia || fo;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function ca(n) {
  hn.length && hn.includes(n, Oe && n.allowRecurse ? Nn + 1 : Nn) || (n.id == null ? hn.push(n) : hn.splice(function(e) {
    let a = Nn + 1, o = hn.length;
    for (; a < o; ) {
      const t = a + o >>> 1;
      ue(hn[t]) < e ? a = t + 1 : o = t;
    }
    return a;
  }(n.id), 0, n), mo());
}
function mo() {
  Oe || Ke || (Ke = !0, ia = fo.then(ko));
}
function _o(n) {
  S(n) ? Wn.push(...n) : dn && dn.includes(n, n.allowRecurse ? En + 1 : En) || Wn.push(n), mo();
}
const ue = (n) => n.id == null ? 1 / 0 : n.id, Dt = (n, e) => {
  const a = ue(n) - ue(e);
  if (a === 0) {
    if (n.pre && !e.pre)
      return -1;
    if (e.pre && !n.pre)
      return 1;
  }
  return a;
};
function ko(n) {
  Ke = !1, Oe = !0, process.env.NODE_ENV !== "production" && (n = n || /* @__PURE__ */ new Map()), hn.sort(Dt);
  const e = process.env.NODE_ENV !== "production" ? (a) => xa(n, a) : ee;
  try {
    for (Nn = 0; Nn < hn.length; Nn++) {
      const a = hn[Nn];
      if (a && a.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(a))
          continue;
        Bn(a, null, 14);
      }
    }
  } finally {
    Nn = 0, hn.length = 0, function(a) {
      if (Wn.length) {
        const o = [...new Set(Wn)];
        if (Wn.length = 0, dn)
          return void dn.push(...o);
        for (dn = o, process.env.NODE_ENV !== "production" && (a = a || /* @__PURE__ */ new Map()), dn.sort((t, l) => ue(t) - ue(l)), En = 0; En < dn.length; En++)
          process.env.NODE_ENV !== "production" && xa(a, dn[En]) || dn[En]();
        dn = null, En = 0;
      }
    }(n), Oe = !1, ia = null, (hn.length || Wn.length) && ko(n);
  }
}
function xa(n, e) {
  if (n.has(e)) {
    const a = n.get(e);
    if (a > Ct) {
      const o = e.ownerInstance, t = o && Do(o.type);
      return M(`Maximum recursive updates exceeded${t ? ` in component <${t}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    }
    n.set(e, a + 1);
  } else
    n.set(e, 1);
}
const Kn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ue().__VUE_HMR_RUNTIME__ = { createRecord: Be(function(n, e) {
  return fe.has(n) ? !1 : (fe.set(n, { initialDef: Jn(e), instances: /* @__PURE__ */ new Set() }), !0);
}), rerender: Be(function(n, e) {
  const a = fe.get(n);
  a && (a.initialDef.render = e, [...a.instances].forEach((o) => {
    e && (o.render = e, Jn(o.type).render = e), o.renderCache = [], o.update();
  }));
}), reload: Be(function(n, e) {
  const a = fe.get(n);
  if (!a)
    return;
  e = Jn(e), Na(a.initialDef, e);
  const o = [...a.instances];
  for (const t of o) {
    const l = Jn(t.type);
    Kn.has(l) || (l !== a.initialDef && Na(l, e), Kn.add(l)), t.appContext.propsCache.delete(t.type), t.appContext.emitsCache.delete(t.type), t.appContext.optionsCache.delete(t.type), t.ceReload ? (Kn.add(l), t.ceReload(e.styles), Kn.delete(l)) : t.parent ? ca(t.parent.update) : t.appContext.reload ? t.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  _o(() => {
    for (const t of o)
      Kn.delete(Jn(t.type));
  });
}) });
const fe = /* @__PURE__ */ new Map();
function Jn(n) {
  return Io(n) ? n.__vccOpts : n;
}
function Na(n, e) {
  tn(n, e);
  for (const a in n)
    a === "__file" || a in e || delete n[a];
}
function Be(n) {
  return (e, a) => {
    try {
      return n(e, a);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let en = null, It = null;
const me = {};
function wo(n, e, { immediate: a, deep: o, flush: t, onTrack: l, onTrigger: s } = yn) {
  var r;
  process.env.NODE_ENV === "production" || e || (a !== void 0 && M('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && M('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const i = (d) => {
    M("Invalid watch source: ", d, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, c = eo === ((r = vn) == null ? void 0 : r.scope) ? vn : null;
  let p, u, f = !1, E = !1;
  if (K(n) ? (p = () => n.value, f = Ne(n)) : zn(n) ? (p = () => n, o = !0) : S(n) ? (E = !0, f = n.some((d) => zn(d) || Ne(d)), p = () => n.map((d) => K(d) ? d.value : zn(d) ? Gn(d) : P(d) ? Bn(d, c, 2) : void (process.env.NODE_ENV !== "production" && i(d)))) : P(n) ? p = e ? () => Bn(n, c, 2) : () => {
    if (!c || !c.isUnmounted)
      return u && u(), ae(n, c, 3, [N]);
  } : (p = ee, process.env.NODE_ENV !== "production" && i(n)), e && o) {
    const d = p;
    p = () => Gn(d());
  }
  let T, N = (d) => {
    u = g.onStop = () => {
      Bn(d, c, 4);
    };
  };
  if (Ao) {
    if (N = ee, e ? a && ae(e, c, 3, [p(), E ? [] : void 0, N]) : p(), t !== "sync")
      return ee;
    {
      const d = Kt();
      T = d.__watcherHandles || (d.__watcherHandles = []);
    }
  }
  let L = E ? new Array(n.length).fill(me) : me;
  const $ = () => {
    if (g.active)
      if (e) {
        const d = g.run();
        (o || f || (E ? d.some((A, R) => le(A, L[R])) : le(d, L))) && (u && u(), ae(e, c, 3, [d, L === me ? void 0 : E && L[0] === me ? [] : L, N]), L = d);
      } else
        g.run();
  };
  let nn;
  $.allowRecurse = !!e, t === "sync" ? nn = $ : t === "post" ? nn = () => $a($, c && c.suspense) : ($.pre = !0, c && ($.id = c.uid), nn = () => ca($));
  const g = new to(p, nn);
  process.env.NODE_ENV !== "production" && (g.onTrack = l, g.onTrigger = s), e ? a ? $() : L = g.run() : t === "post" ? $a(g.run.bind(g), c && c.suspense) : g.run();
  const y = () => {
    g.stop(), c && c.scope && at(c.scope.effects, g);
  };
  return T && T.push(y), y;
}
function zt(n, e, a) {
  const o = this.proxy, t = cn(n) ? n.includes(".") ? function(i, c) {
    const p = c.split(".");
    return () => {
      let u = i;
      for (let f = 0; f < p.length && u; f++)
        u = u[p[f]];
      return u;
    };
  }(o, n) : () => o[n] : n.bind(o, o);
  let l;
  P(e) ? l = e : (l = e.handler, a = e);
  const s = vn;
  Qe(this);
  const r = wo(t, l.bind(o), a);
  return s ? Qe(s) : Co(), r;
}
function Gn(n, e) {
  if (!J(n) || n.__v_skip || (e = e || /* @__PURE__ */ new Set()).has(n))
    return n;
  if (e.add(n), K(n))
    Gn(n.value, e);
  else if (S(n))
    for (let a = 0; a < n.length; a++)
      Gn(n[a], e);
  else if (Za(n) || Dn(n))
    n.forEach((a) => {
      Gn(a, e);
    });
  else if (Xa(n))
    for (const a in n)
      Gn(n[a], e);
  return n;
}
function Eo(n, e) {
  return P(n) ? (() => tn({ name: n.name }, e, { setup: n }))() : n;
}
const xo = (n) => (e, a = vn) => function(o, t, l = vn, s = !1) {
  if (l) {
    const r = l[o] || (l[o] = []), i = t.__weh || (t.__weh = (...c) => {
      if (l.isUnmounted)
        return;
      aa(), Qe(l);
      const p = ae(t, l, o, c);
      return Co(), oa(), p;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
  process.env.NODE_ENV !== "production" && M(`${lt(Ze[o].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}(n, (...o) => e(...o), a), Bt = xo("bm"), Pt = xo("m"), Vt = Symbol.for("v-ndc");
function Pe(n, e, a = {}, o, t) {
  if (en.isCE || en.parent && en.parent.type.__asyncLoader && en.parent.isCE)
    return e !== "default" && (a.name = e), Ae("slot", a, o && o());
  let l = n[e];
  process.env.NODE_ENV !== "production" && l && l.length > 1 && (M("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), l = () => []), l && l._c && (l._d = !1), Z();
  const s = l && No(l(a)), r = $e(Pn, { key: a.key || s && s.key || `_${e}` }, s || (o ? o() : []), s && n._ === 1 ? 64 : -2);
  return !t && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), l && l._c && (l._d = !0), r;
}
function No(n) {
  return n.some((e) => !To(e) || e.type !== Te && !(e.type === Pn && !No(e.children))) ? n : null;
}
const Je = (n) => n ? 4 & n.vnode.shapeFlag ? function(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy((o = e.exposed, st(o, "__v_skip", !0), zn(a = o) ? a : new Proxy(a, $t)), { get: (t, l) => l in t ? t[l] : l in oe ? oe[l](e) : void 0, has: (t, l) => l in t || l in oe }));
  var a, o;
}(n) || n.proxy : Je(n.parent) : null, oe = tn(/* @__PURE__ */ Object.create(null), { $: (n) => n, $el: (n) => n.vnode.el, $data: (n) => n.data, $props: (n) => process.env.NODE_ENV !== "production" ? ve(n.props) : n.props, $attrs: (n) => process.env.NODE_ENV !== "production" ? ve(n.attrs) : n.attrs, $slots: (n) => process.env.NODE_ENV !== "production" ? ve(n.slots) : n.slots, $refs: (n) => process.env.NODE_ENV !== "production" ? ve(n.refs) : n.refs, $parent: (n) => Je(n.parent), $root: (n) => Je(n.root), $emit: (n) => n.emit, $options: (n) => function(e) {
  const a = e.type, { mixins: o, extends: t } = a, { mixins: l, optionsCache: s, config: { optionMergeStrategies: r } } = e.appContext, i = s.get(a);
  let c;
  return i ? c = i : l.length || o || t ? (c = {}, l.length && l.forEach((p) => Se(c, p, r, !0)), Se(c, a, r)) : c = a, J(a) && s.set(a, c), c;
}(n), $forceUpdate: (n) => n.f || (n.f = () => ca(n.update)), $nextTick: (n) => n.n || (n.n = At.bind(n.proxy)), $watch: (n) => zt.bind(n) }), Ve = (n, e) => n !== yn && !n.__isScriptSetup && V(n, e), Lt = { get({ _: n }, e) {
  const { ctx: a, setupState: o, data: t, props: l, accessCache: s, type: r, appContext: i } = n;
  if (process.env.NODE_ENV !== "production" && e === "__isVue")
    return !0;
  let c;
  if (e[0] !== "$") {
    const E = s[e];
    if (E !== void 0)
      switch (E) {
        case 1:
          return o[e];
        case 2:
          return t[e];
        case 4:
          return a[e];
        case 3:
          return l[e];
      }
    else {
      if (Ve(o, e))
        return s[e] = 1, o[e];
      if (t !== yn && V(t, e))
        return s[e] = 2, t[e];
      if ((c = n.propsOptions[0]) && V(c, e))
        return s[e] = 3, l[e];
      if (a !== yn && V(a, e))
        return s[e] = 4, a[e];
      s[e] = 0;
    }
  }
  const p = oe[e];
  let u, f;
  return p ? (e === "$attrs" ? (G(n, "get", e), process.env.NODE_ENV) : process.env.NODE_ENV !== "production" && e === "$slots" && G(n, "get", e), p(n)) : (u = r.__cssModules) && (u = u[e]) ? u : a !== yn && V(a, e) ? (s[e] = 4, a[e]) : (f = i.config.globalProperties, V(f, e) ? f[e] : void (process.env.NODE_ENV === "production" || !en || cn(e) && e.indexOf("__v") === 0 || (t !== yn && ((E) => E === "_" || E === "$")(e[0]) && V(t, e) ? M(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : n === en && M(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))));
}, set({ _: n }, e, a) {
  const { data: o, setupState: t, ctx: l } = n;
  return Ve(t, e) ? (t[e] = a, !0) : process.env.NODE_ENV !== "production" && t.__isScriptSetup && V(t, e) ? (M(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : o !== yn && V(o, e) ? (o[e] = a, !0) : V(n.props, e) ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in n ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && e in n.appContext.config.globalProperties ? Object.defineProperty(l, e, { enumerable: !0, configurable: !0, value: a }) : l[e] = a, !0);
}, has({ _: { data: n, setupState: e, accessCache: a, ctx: o, appContext: t, propsOptions: l } }, s) {
  let r;
  return !!a[s] || n !== yn && V(n, s) || Ve(e, s) || (r = l[0]) && V(r, s) || V(o, s) || V(oe, s) || V(t.config.globalProperties, s);
}, defineProperty(n, e, a) {
  return a.get != null ? n._.accessCache[e] = 0 : V(a, "value") && this.set(n, e, a.value, null), Reflect.defineProperty(n, e, a);
} };
function Ht() {
  return function() {
    const n = qt();
    return process.env.NODE_ENV === "production" || n || M("useContext() called without active instance."), n.setupContext || (n.setupContext = function(e) {
      const a = (o) => {
        if (process.env.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), o != null)) {
          let t = typeof o;
          t === "object" && (S(o) ? t = "array" : K(o) && (t = "ref")), t !== "object" && M(`expose() should be passed a plain object, received ${t}.`);
        }
        e.exposed = o || {};
      };
      return process.env.NODE_ENV !== "production" ? Object.freeze({ get attrs() {
        return Ca(e);
      }, get slots() {
        return function(o) {
          return o.slotsProxy || (o.slotsProxy = new Proxy(o.slots, { get: (t, l) => (G(o, "get", "$slots"), t[l]) }));
        }(e);
      }, get emit() {
        return (o, ...t) => e.emit(o, ...t);
      }, expose: a }) : { get attrs() {
        return Ca(e);
      }, slots: e.slots, emit: e.emit, expose: a };
    }(n));
  }().slots;
}
function Xe(n) {
  return S(n) ? n.reduce((e, a) => (e[a] = null, e), {}) : n;
}
function Se(n, e, a, o = !1) {
  const { mixins: t, extends: l } = e;
  l && Se(n, l, a, !0), t && t.forEach((s) => Se(n, s, a, !0));
  for (const s in e)
    if (o && s === "expose")
      process.env.NODE_ENV !== "production" && M('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const r = Ut[s] || a && a[s];
      n[s] = r ? r(n[s], e[s]) : e[s];
    }
  return n;
}
process.env.NODE_ENV !== "production" && (Lt.ownKeys = (n) => (M("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(n)));
const Ut = { data: Oa, props: Ta, emits: Ta, methods: Xn, computed: Xn, beforeCreate: Q, created: Q, beforeMount: Q, mounted: Q, beforeUpdate: Q, updated: Q, beforeDestroy: Q, beforeUnmount: Q, destroyed: Q, unmounted: Q, activated: Q, deactivated: Q, errorCaptured: Q, serverPrefetch: Q, components: Xn, directives: Xn, watch: function(n, e) {
  if (!n)
    return e;
  if (!e)
    return n;
  const a = tn(/* @__PURE__ */ Object.create(null), n);
  for (const o in e)
    a[o] = Q(n[o], e[o]);
  return a;
}, provide: Oa, inject: function(n, e) {
  return Xn(Sa(n), Sa(e));
} };
function Oa(n, e) {
  return e ? n ? function() {
    return tn(P(n) ? n.call(this, this) : n, P(e) ? e.call(this, this) : e);
  } : e : n;
}
function Sa(n) {
  if (S(n)) {
    const e = {};
    for (let a = 0; a < n.length; a++)
      e[n[a]] = n[a];
    return e;
  }
  return n;
}
function Q(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function Xn(n, e) {
  return n ? tn(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function Ta(n, e) {
  return n ? S(n) && S(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : tn(/* @__PURE__ */ Object.create(null), Xe(n), Xe(e ?? {})) : e;
}
function Oo(n, e, a = !1) {
  const o = vn || en;
  if (o) {
    const t = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : null._context.provides;
    if (t && n in t)
      return t[n];
    if (arguments.length > 1)
      return a && P(e) ? e.call(o && o.proxy) : e;
    process.env.NODE_ENV !== "production" && M(`injection "${String(n)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const $a = function(n, e) {
  e && e.pendingBranch ? S(n) ? e.effects.push(...n) : e.effects.push(n) : _o(n);
}, Pn = Symbol.for("v-fgt"), Ft = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), Ee = [];
let pn = null;
function Z(n = !1) {
  Ee.push(pn = n ? null : []);
}
function So(n) {
  return n.dynamicChildren = pn || Yo, Ee.pop(), pn = Ee[Ee.length - 1] || null, pn && pn.push(n), n;
}
function rn(n, e, a, o, t, l) {
  return So(un(n, e, a, o, t, l, !0));
}
function $e(n, e, a, o, t) {
  return So(Ae(n, e, a, o, t, !0));
}
function To(n) {
  return !!n && n.__v_isVNode === !0;
}
const $o = "__vInternal", Mo = ({ key: n }) => n ?? null, xe = ({ ref: n, ref_key: e, ref_for: a }) => (typeof n == "number" && (n = "" + n), n != null ? cn(n) || K(n) || P(n) ? { i: en, r: n, k: e, f: !!a } : n : null);
function un(n, e = null, a = null, o = 0, t = null, l = n === Pn ? 0 : 1, s = !1, r = !1) {
  const i = { __v_isVNode: !0, __v_skip: !0, type: n, props: e, key: e && Mo(e), ref: e && xe(e), scopeId: It, slotScopeIds: null, children: a, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: l, patchFlag: o, dynamicProps: t, dynamicChildren: null, appContext: null, ctx: en };
  return r ? (ga(i, a), 128 & l && n.normalize(i)) : a && (i.shapeFlag |= cn(a) ? 8 : 16), process.env.NODE_ENV !== "production" && i.key != i.key && M("VNode created with invalid key (NaN). VNode type:", i.type), !s && pn && (i.patchFlag > 0 || 6 & l) && i.patchFlag !== 32 && pn.push(i), i;
}
const Ae = process.env.NODE_ENV !== "production" ? (...n) => Ma(...n) : Ma;
function Ma(n, e = null, a = null, o = 0, t = null, l = !1) {
  if (n && n !== Vt || (process.env.NODE_ENV === "production" || n || M(`Invalid vnode type when creating vnode: ${n}.`), n = Te), To(n)) {
    const r = Me(n, e, !0);
    return a && ga(r, a), !l && pn && (6 & r.shapeFlag ? pn[pn.indexOf(n)] = r : pn.push(r)), r.patchFlag |= -2, r;
  }
  if (Io(n) && (n = n.__vccOpts), e) {
    e = function(c) {
      return c ? ze(c) || $o in c ? tn({}, c) : c : null;
    }(e);
    let { class: r, style: i } = e;
    r && !cn(r) && (e.class = sn(r)), J(i) && (ze(i) && !S(i) && (i = tn({}, i)), e.style = Cn(i));
  }
  const s = cn(n) ? 1 : ((r) => r.__isSuspense)(n) ? 128 : ((r) => r.__isTeleport)(n) ? 64 : J(n) ? 4 : P(n) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && 4 & s && ze(n) && M("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, n = w(n)), un(n, e, a, o, t, s, l, !0);
}
function Me(n, e, a = !1) {
  const { props: o, ref: t, patchFlag: l, children: s } = n, r = e ? te(o || {}, e) : o;
  return { __v_isVNode: !0, __v_skip: !0, type: n.type, props: r, key: r && Mo(r), ref: e && e.ref ? a && t ? S(t) ? t.concat(xe(e)) : [t, xe(e)] : xe(e) : t, scopeId: n.scopeId, slotScopeIds: n.slotScopeIds, children: process.env.NODE_ENV !== "production" && l === -1 && S(s) ? s.map(Ro) : s, target: n.target, targetAnchor: n.targetAnchor, staticCount: n.staticCount, shapeFlag: n.shapeFlag, patchFlag: e && n.type !== Pn ? l === -1 ? 16 : 16 | l : l, dynamicProps: n.dynamicProps, dynamicChildren: n.dynamicChildren, appContext: n.appContext, dirs: n.dirs, transition: n.transition, component: n.component, suspense: n.suspense, ssContent: n.ssContent && Me(n.ssContent), ssFallback: n.ssFallback && Me(n.ssFallback), el: n.el, anchor: n.anchor, ctx: n.ctx, ce: n.ce };
}
function Ro(n) {
  const e = Me(n);
  return S(n.children) && (e.children = n.children.map(Ro)), e;
}
function ne(n = " ", e = 0) {
  return Ae(Ft, null, n, e);
}
function Fn(n = "", e = !1) {
  return e ? (Z(), $e(Te, null, n)) : Ae(Te, null, n);
}
function ga(n, e) {
  let a = 0;
  const { shapeFlag: o } = n;
  if (e == null)
    e = null;
  else if (S(e))
    a = 16;
  else if (typeof e == "object") {
    if (65 & o) {
      const t = e.default;
      return void (t && (t._c && (t._d = !1), ga(n, t()), t._c && (t._d = !0)));
    }
    {
      a = 32;
      const t = e._;
      t || $o in e ? t === 3 && en && (en.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024)) : e._ctx = en;
    }
  } else
    P(e) ? (e = { default: e, _ctx: en }, a = 32) : (e = String(e), 64 & o ? (a = 16, e = [ne(e)]) : a = 8);
  n.children = e, n.shapeFlag |= a;
}
function te(...n) {
  const e = {};
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    for (const t in o)
      if (t === "class")
        e.class !== o.class && (e.class = sn([e.class, o.class]));
      else if (t === "style")
        e.style = Cn([e.style, o.style]);
      else if (et(t)) {
        const l = e[t], s = o[t];
        !s || l === s || S(l) && l.includes(s) || (e[t] = l ? [].concat(l, s) : s);
      } else
        t !== "" && (e[t] = o[t]);
  }
  return e;
}
let vn = null;
const qt = () => vn || en;
let ha, Hn, Ra = "__VUE_INSTANCE_SETTERS__";
(Hn = Ue()[Ra]) || (Hn = Ue()[Ra] = []), Hn.push((n) => vn = n), ha = (n) => {
  Hn.length > 1 ? Hn.forEach((e) => e(n)) : Hn[0](n);
};
const Qe = (n) => {
  ha(n), n.scope.on();
}, Co = () => {
  vn && vn.scope.off(), ha(null);
};
let Ao = !1;
function Ca(n) {
  return n.attrsProxy || (n.attrsProxy = new Proxy(n.attrs, process.env.NODE_ENV !== "production" ? { get: (e, a) => (G(n, "get", "$attrs"), e[a]), set: () => (M("setupContext.attrs is readonly."), !1), deleteProperty: () => (M("setupContext.attrs is readonly."), !1) } : { get: (e, a) => (G(n, "get", "$attrs"), e[a]) }));
}
const Wt = /(?:^|[-_])(\w)/g, Gt = (n) => n.replace(Wt, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Do(n, e = !0) {
  return P(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function Aa(n, e, a = !1) {
  let o = Do(e);
  if (!o && e.__file) {
    const t = e.__file.match(/([^/\\]+)\.\w+$/);
    t && (o = t[1]);
  }
  if (!o && n && n.parent) {
    const t = (l) => {
      for (const s in l)
        if (l[s] === e)
          return s;
    };
    o = t(n.components || n.parent.type.components) || t(n.appContext.components);
  }
  return o ? Gt(o) : a ? "App" : "Anonymous";
}
function Io(n) {
  return P(n) && "__vccOpts" in n;
}
const jn = (n, e) => function(a, o, t = !1) {
  let l, s;
  const r = P(a);
  r ? (l = a, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ee) : (l = a.get, s = a.set);
  const i = new Mt(l, s, r || !s, t);
  return process.env.NODE_ENV !== "production" && o && !t && (i.effect.onTrack = o.onTrack, i.effect.onTrigger = o.onTrigger), i;
}(n, e, Ao), Zt = Symbol.for("v-scx"), Kt = () => {
  {
    const n = Oo(Zt);
    return n || process.env.NODE_ENV !== "production" && M("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), n;
  }
};
function Le(n) {
  return !(!n || !n.__v_isShallow);
}
process.env.NODE_ENV !== "production" && function() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const n = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, a = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, t = { header: (u) => J(u) ? u.__isVue ? ["div", n, "VueInstance"] : K(u) ? ["div", {}, ["span", n, p(u)], "<", r(u.value), ">"] : zn(u) ? ["div", {}, ["span", n, Le(u) ? "ShallowReactive" : "Reactive"], "<", r(u), ">" + ($n(u) ? " (readonly)" : "")] : $n(u) ? ["div", {}, ["span", n, Le(u) ? "ShallowReadonly" : "Readonly"], "<", r(u), ">"] : null : null, hasBody: (u) => u && u.__isVue, body(u) {
    if (u && u.__isVue)
      return ["div", {}, ...l(u.$)];
  } };
  function l(u) {
    const f = [];
    u.type.props && u.props && f.push(s("props", w(u.props))), u.setupState !== yn && f.push(s("setup", u.setupState)), u.data !== yn && f.push(s("data", w(u.data)));
    const E = i(u, "computed");
    E && f.push(s("computed", E));
    const T = i(u, "inject");
    return T && f.push(s("injected", T)), f.push(["div", {}, ["span", { style: o.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: u }]]), f;
  }
  function s(u, f) {
    return f = tn({}, f), Object.keys(f).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, u], ["div", { style: "padding-left:1.25em" }, ...Object.keys(f).map((E) => ["div", {}, ["span", o, E + ": "], r(f[E], !1)])]] : ["span", {}];
  }
  function r(u, f = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", a, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : J(u) ? ["object", { object: f ? w(u) : u }] : ["span", a, String(u)];
  }
  function i(u, f) {
    const E = u.type;
    if (P(E))
      return;
    const T = {};
    for (const N in u.ctx)
      c(E, N, f) && (T[N] = u.ctx[N]);
    return T;
  }
  function c(u, f, E) {
    const T = u[E];
    return !!(S(T) && T.includes(f) || J(T) && f in T) || !(!u.extends || !c(u.extends, f, E)) || !(!u.mixins || !u.mixins.some((N) => c(N, f, E))) || void 0;
  }
  function p(u) {
    return Le(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(t) : window.devtoolsFormatters = [t];
}();
const W = "v-code-block";
function Da(n) {
  return n === "" || n === "prism" ? "default" : n;
}
function Ia(n) {
  return n ? "highlightjs" : "prism";
}
function _e(n, e = "px") {
  if (n != null && n !== "" && n !== void 0)
    return +n ? `${Number(n)}${e}` : String(n);
}
const Jt = [un("path", { d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" }, null, -1)], Xt = [un("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, null, -1)], Qt = [un("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, null, -1)], za = Eo({ __name: "StatusIcons", props: { icon: { type: String, required: !0 } }, setup: (n) => (e, a) => n.icon === "copy" ? (Z(), rn("svg", te({ key: 0 }, e.$attrs, { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" }), Jt, 16)) : n.icon === "success" ? (Z(), rn("svg", te({ key: 1 }, e.$attrs, { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" }), Xt, 16)) : n.icon === "failed" ? (Z(), rn("svg", te({ key: 2 }, e.$attrs, { viewBox: "0 0 320 512", xmlns: "http://www.w3.org/2000/svg" }), Qt, 16)) : Fn("", !0) });
function Yt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function zo(n) {
  return n instanceof Map ? n.clear = n.delete = n.set = function() {
    throw new Error("map is read-only");
  } : n instanceof Set && (n.add = n.clear = n.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(n), Object.getOwnPropertyNames(n).forEach((e) => {
    const a = n[e], o = typeof a;
    o !== "object" && o !== "function" || Object.isFrozen(a) || zo(a);
  }), n;
}
class Ba {
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function Bo(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function On(n, ...e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const o in n)
    a[o] = n[o];
  return e.forEach(function(o) {
    for (const t in o)
      a[t] = o[t];
  }), a;
}
const Pa = (n) => !!n.scope;
class nl {
  constructor(e, a) {
    this.buffer = "", this.classPrefix = a.classPrefix, e.walk(this);
  }
  addText(e) {
    this.buffer += Bo(e);
  }
  openNode(e) {
    if (!Pa(e))
      return;
    const a = ((o, { prefix: t }) => {
      if (o.startsWith("language:"))
        return o.replace("language:", "language-");
      if (o.includes(".")) {
        const l = o.split(".");
        return [`${t}${l.shift()}`, ...l.map((s, r) => `${s}${"_".repeat(r + 1)}`)].join(" ");
      }
      return `${t}${o}`;
    })(e.scope, { prefix: this.classPrefix });
    this.span(a);
  }
  closeNode(e) {
    Pa(e) && (this.buffer += "</span>");
  }
  value() {
    return this.buffer;
  }
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const Va = (n = {}) => {
  const e = { children: [] };
  return Object.assign(e, n), e;
};
class pa {
  constructor() {
    this.rootNode = Va(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(e) {
    this.top.children.push(e);
  }
  openNode(e) {
    const a = Va({ scope: e });
    this.add(a), this.stack.push(a);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); )
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  static _walk(e, a) {
    return typeof a == "string" ? e.addText(a) : a.children && (e.openNode(a), a.children.forEach((o) => this._walk(e, o)), e.closeNode(a)), e;
  }
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((a) => typeof a == "string") ? e.children = [e.children.join("")] : e.children.forEach((a) => {
      pa._collapse(a);
    }));
  }
}
class el extends pa {
  constructor(e) {
    super(), this.options = e;
  }
  addText(e) {
    e !== "" && this.add(e);
  }
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  __addSublanguage(e, a) {
    const o = e.root;
    a && (o.scope = `language:${a}`), this.add(o);
  }
  toHTML() {
    return new nl(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function ie(n) {
  return n ? typeof n == "string" ? n : n.source : null;
}
function Po(n) {
  return Vn("(?=", n, ")");
}
function al(n) {
  return Vn("(?:", n, ")*");
}
function ol(n) {
  return Vn("(?:", n, ")?");
}
function Vn(...n) {
  return n.map((e) => ie(e)).join("");
}
function ba(...n) {
  return "(" + (function(a) {
    const o = a[a.length - 1];
    return typeof o == "object" && o.constructor === Object ? (a.splice(a.length - 1, 1), o) : {};
  }(n).capture ? "" : "?:") + n.map((a) => ie(a)).join("|") + ")";
}
function Vo(n) {
  return new RegExp(n.toString() + "|").exec("").length - 1;
}
const tl = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ye(n, { joinWith: e }) {
  let a = 0;
  return n.map((o) => {
    a += 1;
    const t = a;
    let l = ie(o), s = "";
    for (; l.length > 0; ) {
      const r = tl.exec(l);
      if (!r) {
        s += l;
        break;
      }
      s += l.substring(0, r.index), l = l.substring(r.index + r[0].length), r[0][0] === "\\" && r[1] ? s += "\\" + String(Number(r[1]) + t) : (s += r[0], r[0] === "(" && a++);
    }
    return s;
  }).map((o) => `(${o})`).join(e);
}
const Lo = "[a-zA-Z]\\w*", ja = "[a-zA-Z_]\\w*", Ho = "\\b\\d+(\\.\\d+)?", Uo = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Fo = "\\b(0b[01]+)", ce = { begin: "\\\\[\\s\\S]", relevance: 0 }, ll = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [ce] }, sl = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [ce] }, De = function(n, e, a = {}) {
  const o = On({ scope: "comment", begin: n, end: e, contains: [] }, a);
  o.contains.push({ scope: "doctag", begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: !0, relevance: 0 });
  const t = ba("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
  return o.contains.push({ begin: Vn(/[ ]+/, "(", t, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), o;
}, rl = De("//", "$"), ul = De("/\\*", "\\*/"), il = De("#", "$"), cl = { scope: "number", begin: Ho, relevance: 0 }, gl = { scope: "number", begin: Uo, relevance: 0 }, hl = { scope: "number", begin: Fo, relevance: 0 }, pl = { begin: /(?=\/[^/\n]*\/)/, contains: [{ scope: "regexp", begin: /\//, end: /\/[gimuy]*/, illegal: /\n/, contains: [ce, { begin: /\[/, end: /\]/, relevance: 0, contains: [ce] }] }] }, bl = { scope: "title", begin: Lo, relevance: 0 }, jl = { scope: "title", begin: ja, relevance: 0 }, dl = { begin: "\\.\\s*" + ja, relevance: 0 };
var ke = Object.freeze({ __proto__: null, MATCH_NOTHING_RE: /\b\B/, IDENT_RE: Lo, UNDERSCORE_IDENT_RE: ja, NUMBER_RE: Ho, C_NUMBER_RE: Uo, BINARY_NUMBER_RE: Fo, RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", SHEBANG: (n = {}) => {
  const e = /^#![ ]*\//;
  return n.binary && (n.begin = Vn(e, /.*\b/, n.binary, /\b.*/)), On({ scope: "meta", begin: e, end: /$/, relevance: 0, "on:begin": (a, o) => {
    a.index !== 0 && o.ignoreMatch();
  } }, n);
}, BACKSLASH_ESCAPE: ce, APOS_STRING_MODE: ll, QUOTE_STRING_MODE: sl, PHRASAL_WORDS_MODE: { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, COMMENT: De, C_LINE_COMMENT_MODE: rl, C_BLOCK_COMMENT_MODE: ul, HASH_COMMENT_MODE: il, NUMBER_MODE: cl, C_NUMBER_MODE: gl, BINARY_NUMBER_MODE: hl, REGEXP_MODE: pl, TITLE_MODE: bl, UNDERSCORE_TITLE_MODE: jl, METHOD_GUARD: dl, END_SAME_AS_BEGIN: function(n) {
  return Object.assign(n, { "on:begin": (e, a) => {
    a.data._beginMatch = e[1];
  }, "on:end": (e, a) => {
    a.data._beginMatch !== e[1] && a.ignoreMatch();
  } });
} });
function yl(n, e) {
  n.input[n.index - 1] === "." && e.ignoreMatch();
}
function vl(n, e) {
  n.className !== void 0 && (n.scope = n.className, delete n.className);
}
function fl(n, e) {
  e && n.beginKeywords && (n.begin = "\\b(" + n.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", n.__beforeBegin = yl, n.keywords = n.keywords || n.beginKeywords, delete n.beginKeywords, n.relevance === void 0 && (n.relevance = 0));
}
function ml(n, e) {
  Array.isArray(n.illegal) && (n.illegal = ba(...n.illegal));
}
function _l(n, e) {
  if (n.match) {
    if (n.begin || n.end)
      throw new Error("begin & end are not supported with match");
    n.begin = n.match, delete n.match;
  }
}
function kl(n, e) {
  n.relevance === void 0 && (n.relevance = 1);
}
const wl = (n, e) => {
  if (!n.beforeMatch)
    return;
  if (n.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const a = Object.assign({}, n);
  Object.keys(n).forEach((o) => {
    delete n[o];
  }), n.keywords = a.keywords, n.begin = Vn(a.beforeMatch, Po(a.begin)), n.starts = { relevance: 0, contains: [Object.assign(a, { endsParent: !0 })] }, n.relevance = 0, delete a.beforeMatch;
}, El = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], xl = "keyword";
function qo(n, e, a = xl) {
  const o = /* @__PURE__ */ Object.create(null);
  return typeof n == "string" ? t(a, n.split(" ")) : Array.isArray(n) ? t(a, n) : Object.keys(n).forEach(function(l) {
    Object.assign(o, qo(n[l], e, l));
  }), o;
  function t(l, s) {
    e && (s = s.map((r) => r.toLowerCase())), s.forEach(function(r) {
      const i = r.split("|");
      o[i[0]] = [l, Nl(i[0], i[1])];
    });
  }
}
function Nl(n, e) {
  return e ? Number(e) : function(a) {
    return El.includes(a.toLowerCase());
  }(n) ? 0 : 1;
}
const La = {}, An = (n) => {
  console.error(n);
}, Ha = (n, ...e) => {
  console.log(`WARN: ${n}`, ...e);
}, Un = (n, e) => {
  La[`${n}/${e}`] || (console.log(`Deprecated as of ${n}. ${e}`), La[`${n}/${e}`] = !0);
}, we = new Error();
function Ua(n, e, { key: a }) {
  let o = 0;
  const t = n[a], l = {}, s = {};
  for (let r = 1; r <= e.length; r++)
    s[r + o] = t[r], l[r + o] = !0, o += Vo(e[r - 1]);
  n[a] = s, n[a]._emit = l, n[a]._multi = !0;
}
function Ol(n) {
  (function(e) {
    e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
  })(n), typeof n.beginScope == "string" && (n.beginScope = { _wrap: n.beginScope }), typeof n.endScope == "string" && (n.endScope = { _wrap: n.endScope }), function(e) {
    if (Array.isArray(e.begin)) {
      if (e.skip || e.excludeBegin || e.returnBegin)
        throw An("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), we;
      if (typeof e.beginScope != "object" || e.beginScope === null)
        throw An("beginScope must be object"), we;
      Ua(e, e.begin, { key: "beginScope" }), e.begin = Ye(e.begin, { joinWith: "" });
    }
  }(n), function(e) {
    if (Array.isArray(e.end)) {
      if (e.skip || e.excludeEnd || e.returnEnd)
        throw An("skip, excludeEnd, returnEnd not compatible with endScope: {}"), we;
      if (typeof e.endScope != "object" || e.endScope === null)
        throw An("endScope must be object"), we;
      Ua(e, e.end, { key: "endScope" }), e.end = Ye(e.end, { joinWith: "" });
    }
  }(n);
}
function Sl(n) {
  function e(t, l) {
    return new RegExp(ie(t), "m" + (n.case_insensitive ? "i" : "") + (n.unicodeRegex ? "u" : "") + (l ? "g" : ""));
  }
  class a {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    addRule(l, s) {
      s.position = this.position++, this.matchIndexes[this.matchAt] = s, this.regexes.push([s, l]), this.matchAt += Vo(l) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const l = this.regexes.map((s) => s[1]);
      this.matcherRe = e(Ye(l, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    exec(l) {
      this.matcherRe.lastIndex = this.lastIndex;
      const s = this.matcherRe.exec(l);
      if (!s)
        return null;
      const r = s.findIndex((c, p) => p > 0 && c !== void 0), i = this.matchIndexes[r];
      return s.splice(0, r), Object.assign(s, i);
    }
  }
  class o {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    getMatcher(l) {
      if (this.multiRegexes[l])
        return this.multiRegexes[l];
      const s = new a();
      return this.rules.slice(l).forEach(([r, i]) => s.addRule(r, i)), s.compile(), this.multiRegexes[l] = s, s;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(l, s) {
      this.rules.push([l, s]), s.type === "begin" && this.count++;
    }
    exec(l) {
      const s = this.getMatcher(this.regexIndex);
      s.lastIndex = this.lastIndex;
      let r = s.exec(l);
      if (this.resumingScanAtSamePosition() && !(r && r.index === this.lastIndex)) {
        const i = this.getMatcher(0);
        i.lastIndex = this.lastIndex + 1, r = i.exec(l);
      }
      return r && (this.regexIndex += r.position + 1, this.regexIndex === this.count && this.considerAll()), r;
    }
  }
  if (n.compilerExtensions || (n.compilerExtensions = []), n.contains && n.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return n.classNameAliases = On(n.classNameAliases || {}), function t(l, s) {
    const r = l;
    if (l.isCompiled)
      return r;
    [vl, _l, Ol, wl].forEach((c) => c(l, s)), n.compilerExtensions.forEach((c) => c(l, s)), l.__beforeBegin = null, [fl, ml, kl].forEach((c) => c(l, s)), l.isCompiled = !0;
    let i = null;
    return typeof l.keywords == "object" && l.keywords.$pattern && (l.keywords = Object.assign({}, l.keywords), i = l.keywords.$pattern, delete l.keywords.$pattern), i = i || /\w+/, l.keywords && (l.keywords = qo(l.keywords, n.case_insensitive)), r.keywordPatternRe = e(i, !0), s && (l.begin || (l.begin = /\B|\b/), r.beginRe = e(r.begin), l.end || l.endsWithParent || (l.end = /\B|\b/), l.end && (r.endRe = e(r.end)), r.terminatorEnd = ie(r.end) || "", l.endsWithParent && s.terminatorEnd && (r.terminatorEnd += (l.end ? "|" : "") + s.terminatorEnd)), l.illegal && (r.illegalRe = e(l.illegal)), l.contains || (l.contains = []), l.contains = [].concat(...l.contains.map(function(c) {
      return function(p) {
        return p.variants && !p.cachedVariants && (p.cachedVariants = p.variants.map(function(u) {
          return On(p, { variants: null }, u);
        })), p.cachedVariants ? p.cachedVariants : Wo(p) ? On(p, { starts: p.starts ? On(p.starts) : null }) : Object.isFrozen(p) ? On(p) : p;
      }(c === "self" ? l : c);
    })), l.contains.forEach(function(c) {
      t(c, r);
    }), l.starts && t(l.starts, s), r.matcher = function(c) {
      const p = new o();
      return c.contains.forEach((u) => p.addRule(u.begin, { rule: u, type: "begin" })), c.terminatorEnd && p.addRule(c.terminatorEnd, { type: "end" }), c.illegal && p.addRule(c.illegal, { type: "illegal" }), p;
    }(r), r;
  }(n);
}
function Wo(n) {
  return !!n && (n.endsWithParent || Wo(n.starts));
}
class Tl extends Error {
  constructor(e, a) {
    super(e), this.name = "HTMLInjectionError", this.html = a;
  }
}
const He = Bo, Fa = On, qa = Symbol("nomatch"), Go = function(n) {
  const e = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null), o = [];
  let t = !0;
  const l = "Could not find the language '{}', did you forget to load/include a language module?", s = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let r = { ignoreUnescapedHTML: !1, throwUnescapedHTML: !1, noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-", cssSelector: "pre code", languages: null, __emitter: el };
  function i(g) {
    return r.noHighlightRe.test(g);
  }
  function c(g, y, d) {
    let A = "", R = "";
    typeof y == "object" ? (A = g, d = y.ignoreIllegals, R = y.language) : (Un("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Un("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), R = g, A = y), d === void 0 && (d = !0);
    const z = { code: A, language: R };
    nn("before:highlight", z);
    const B = z.result ? z.result : p(z.language, z.code, d);
    return B.code = z.code, nn("after:highlight", B), B;
  }
  function p(g, y, d, A) {
    const R = /* @__PURE__ */ Object.create(null);
    function z() {
      if (!h.keywords)
        return void m.addText(k);
      let j = 0;
      h.keywordPatternRe.lastIndex = 0;
      let v = h.keywordPatternRe.exec(k), x = "";
      for (; v; ) {
        x += k.substring(j, v.index);
        const I = F.case_insensitive ? v[0].toLowerCase() : v[0], q = (O = I, h.keywords[O]);
        if (q) {
          const [_n, Ie] = q;
          if (m.addText(x), x = "", R[I] = (R[I] || 0) + 1, R[I] <= 7 && (X += Ie), _n.startsWith("_"))
            x += v[0];
          else {
            const ge = F.classNameAliases[_n] || _n;
            H(v[0], ge);
          }
        } else
          x += v[0];
        j = h.keywordPatternRe.lastIndex, v = h.keywordPatternRe.exec(k);
      }
      var O;
      x += k.substring(j), m.addText(x);
    }
    function B() {
      h.subLanguage != null ? function() {
        if (k === "")
          return;
        let j = null;
        if (typeof h.subLanguage == "string") {
          if (!e[h.subLanguage])
            return void m.addText(k);
          j = p(h.subLanguage, k, !0, C[h.subLanguage]), C[h.subLanguage] = j._top;
        } else
          j = u(k, h.subLanguage.length ? h.subLanguage : null);
        h.relevance > 0 && (X += j.relevance), m.__addSublanguage(j._emitter, j.language);
      }() : z(), k = "";
    }
    function H(j, v) {
      j !== "" && (m.startScope(v), m.addText(j), m.endScope());
    }
    function D(j, v) {
      let x = 1;
      const O = v.length - 1;
      for (; x <= O; ) {
        if (!j._emit[x]) {
          x++;
          continue;
        }
        const I = F.classNameAliases[j[x]] || j[x], q = v[x];
        I ? H(q, I) : (k = q, z(), k = ""), x++;
      }
    }
    function U(j, v) {
      return j.scope && typeof j.scope == "string" && m.openNode(F.classNameAliases[j.scope] || j.scope), j.beginScope && (j.beginScope._wrap ? (H(k, F.classNameAliases[j.beginScope._wrap] || j.beginScope._wrap), k = "") : j.beginScope._multi && (D(j.beginScope, v), k = "")), h = Object.create(j, { parent: { value: h } }), h;
    }
    function Mn(j, v, x) {
      let O = function(I, q) {
        const _n = I && I.exec(q);
        return _n && _n.index === 0;
      }(j.endRe, x);
      if (O) {
        if (j["on:end"]) {
          const I = new Ba(j);
          j["on:end"](v, I), I.isMatchIgnored && (O = !1);
        }
        if (O) {
          for (; j.endsParent && j.parent; )
            j = j.parent;
          return j;
        }
      }
      if (j.endsWithParent)
        return Mn(j.parent, v, x);
    }
    function bn(j) {
      return h.matcher.regexIndex === 0 ? (k += j[0], 1) : (on = !0, 0);
    }
    function kn(j) {
      const v = j[0], x = y.substring(j.index), O = Mn(h, j, x);
      if (!O)
        return qa;
      const I = h;
      h.endScope && h.endScope._wrap ? (B(), H(v, h.endScope._wrap)) : h.endScope && h.endScope._multi ? (B(), D(h.endScope, j)) : I.skip ? k += v : (I.returnEnd || I.excludeEnd || (k += v), B(), I.excludeEnd && (k = v));
      do
        h.scope && m.closeNode(), h.skip || h.subLanguage || (X += h.relevance), h = h.parent;
      while (h !== O.parent);
      return O.starts && U(O.starts, j), I.returnEnd ? 0 : v.length;
    }
    let gn = {};
    function fn(j, v) {
      const x = v && v[0];
      if (k += j, x == null)
        return B(), 0;
      if (gn.type === "begin" && v.type === "end" && gn.index === v.index && x === "") {
        if (k += y.slice(v.index, v.index + 1), !t) {
          const O = new Error(`0 width match regex (${g})`);
          throw O.languageName = g, O.badRule = gn.rule, O;
        }
        return 1;
      }
      if (gn = v, v.type === "begin")
        return function(O) {
          const I = O[0], q = O.rule, _n = new Ba(q), Ie = [q.__beforeBegin, q["on:begin"]];
          for (const ge of Ie)
            if (ge && (ge(O, _n), _n.isMatchIgnored))
              return bn(I);
          return q.skip ? k += I : (q.excludeBegin && (k += I), B(), q.returnBegin || q.excludeBegin || (k = I)), U(q, O), q.returnBegin ? 0 : I.length;
        }(v);
      if (v.type === "illegal" && !d) {
        const O = new Error('Illegal lexeme "' + x + '" for mode "' + (h.scope || "<unnamed>") + '"');
        throw O.mode = h, O;
      }
      if (v.type === "end") {
        const O = kn(v);
        if (O !== qa)
          return O;
      }
      if (v.type === "illegal" && x === "")
        return 1;
      if (mn > 1e5 && mn > 3 * v.index)
        throw new Error("potential infinite loop, way more iterations than matches");
      return k += x, x.length;
    }
    const F = N(g);
    if (!F)
      throw An(l.replace("{}", g)), new Error('Unknown language: "' + g + '"');
    const Ln = Sl(F);
    let b = "", h = A || Ln;
    const C = {}, m = new r.__emitter(r);
    (function() {
      const j = [];
      for (let v = h; v !== F; v = v.parent)
        v.scope && j.unshift(v.scope);
      j.forEach((v) => m.openNode(v));
    })();
    let k = "", X = 0, an = 0, mn = 0, on = !1;
    try {
      if (F.__emitTokens)
        F.__emitTokens(y, m);
      else {
        for (h.matcher.considerAll(); ; ) {
          mn++, on ? on = !1 : h.matcher.considerAll(), h.matcher.lastIndex = an;
          const j = h.matcher.exec(y);
          if (!j)
            break;
          const v = fn(y.substring(an, j.index), j);
          an = j.index + v;
        }
        fn(y.substring(an));
      }
      return m.finalize(), b = m.toHTML(), { language: g, value: b, relevance: X, illegal: !1, _emitter: m, _top: h };
    } catch (j) {
      if (j.message && j.message.includes("Illegal"))
        return { language: g, value: He(y), illegal: !0, relevance: 0, _illegalBy: { message: j.message, index: an, context: y.slice(an - 100, an + 100), mode: j.mode, resultSoFar: b }, _emitter: m };
      if (t)
        return { language: g, value: He(y), illegal: !1, relevance: 0, errorRaised: j, _emitter: m, _top: h };
      throw j;
    }
  }
  function u(g, y) {
    y = y || r.languages || Object.keys(e);
    const d = function(D) {
      const U = { value: He(D), illegal: !1, relevance: 0, _top: s, _emitter: new r.__emitter(r) };
      return U._emitter.addText(D), U;
    }(g), A = y.filter(N).filter($).map((D) => p(D, g, !1));
    A.unshift(d);
    const R = A.sort((D, U) => {
      if (D.relevance !== U.relevance)
        return U.relevance - D.relevance;
      if (D.language && U.language) {
        if (N(D.language).supersetOf === U.language)
          return 1;
        if (N(U.language).supersetOf === D.language)
          return -1;
      }
      return 0;
    }), [z, B] = R, H = z;
    return H.secondBest = B, H;
  }
  function f(g) {
    let y = null;
    const d = function(z) {
      let B = z.className + " ";
      B += z.parentNode ? z.parentNode.className : "";
      const H = r.languageDetectRe.exec(B);
      if (H) {
        const D = N(H[1]);
        return D || (Ha(l.replace("{}", H[1])), Ha("Falling back to no-highlight mode for this block.", z)), D ? H[1] : "no-highlight";
      }
      return B.split(/\s+/).find((D) => i(D) || N(D));
    }(g);
    if (i(d))
      return;
    if (nn("before:highlightElement", { el: g, language: d }), g.children.length > 0 && (r.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(g)), r.throwUnescapedHTML))
      throw new Tl("One of your code blocks includes unescaped HTML.", g.innerHTML);
    y = g;
    const A = y.textContent, R = d ? c(A, { language: d, ignoreIllegals: !0 }) : u(A);
    g.innerHTML = R.value, function(z, B, H) {
      const D = B && a[B] || H;
      z.classList.add("hljs"), z.classList.add(`language-${D}`);
    }(g, d, R.language), g.result = { language: R.language, re: R.relevance, relevance: R.relevance }, R.secondBest && (g.secondBest = { language: R.secondBest.language, relevance: R.secondBest.relevance }), nn("after:highlightElement", { el: g, result: R, text: A });
  }
  let E = !1;
  function T() {
    if (document.readyState === "loading")
      return void (E = !0);
    document.querySelectorAll(r.cssSelector).forEach(f);
  }
  function N(g) {
    return g = (g || "").toLowerCase(), e[g] || e[a[g]];
  }
  function L(g, { languageName: y }) {
    typeof g == "string" && (g = [g]), g.forEach((d) => {
      a[d.toLowerCase()] = y;
    });
  }
  function $(g) {
    const y = N(g);
    return y && !y.disableAutodetect;
  }
  function nn(g, y) {
    const d = g;
    o.forEach(function(A) {
      A[d] && A[d](y);
    });
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
    E && T();
  }, !1), Object.assign(n, { highlight: c, highlightAuto: u, highlightAll: T, highlightElement: f, highlightBlock: function(g) {
    return Un("10.7.0", "highlightBlock will be removed entirely in v12.0"), Un("10.7.0", "Please use highlightElement now."), f(g);
  }, configure: function(g) {
    r = Fa(r, g);
  }, initHighlighting: () => {
    T(), Un("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  }, initHighlightingOnLoad: function() {
    T(), Un("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }, registerLanguage: function(g, y) {
    let d = null;
    try {
      d = y(n);
    } catch (A) {
      if (An("Language definition for '{}' could not be registered.".replace("{}", g)), !t)
        throw A;
      An(A), d = s;
    }
    d.name || (d.name = g), e[g] = d, d.rawDefinition = y.bind(null, n), d.aliases && L(d.aliases, { languageName: g });
  }, unregisterLanguage: function(g) {
    delete e[g];
    for (const y of Object.keys(a))
      a[y] === g && delete a[y];
  }, listLanguages: function() {
    return Object.keys(e);
  }, getLanguage: N, registerAliases: L, autoDetection: $, inherit: Fa, addPlugin: function(g) {
    (function(y) {
      y["before:highlightBlock"] && !y["before:highlightElement"] && (y["before:highlightElement"] = (d) => {
        y["before:highlightBlock"](Object.assign({ block: d.el }, d));
      }), y["after:highlightBlock"] && !y["after:highlightElement"] && (y["after:highlightElement"] = (d) => {
        y["after:highlightBlock"](Object.assign({ block: d.el }, d));
      });
    })(g), o.push(g);
  }, removePlugin: function(g) {
    const y = o.indexOf(g);
    y !== -1 && o.splice(y, 1);
  } }), n.debugMode = function() {
    t = !1;
  }, n.safeMode = function() {
    t = !0;
  }, n.versionString = "11.8.0", n.regex = { concat: Vn, lookahead: Po, either: ba, optional: ol, anyNumberOfTimes: al };
  for (const g in ke)
    typeof ke[g] == "object" && zo(ke[g]);
  return Object.assign(n, ke), n;
}, Zn = Go({});
Zn.newInstance = () => Go({});
var $l = Zn;
Zn.HighlightJS = Zn, Zn.default = Zn;
const Qn = Yt($l), Ml = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], Rl = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], Cl = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], Al = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], Dl = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
function Il(n) {
  const e = n.regex, a = ((t) => ({ IMPORTANT: { scope: "meta", begin: "!important" }, BLOCK_COMMENT: t.C_BLOCK_COMMENT_MODE, HEXCOLOR: { scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ }, FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ }, ATTRIBUTE_SELECTOR_MODE: { scope: "selector-attr", begin: /\[/, end: /\]/, illegal: "$", contains: [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE] }, CSS_NUMBER_MODE: { scope: "number", begin: t.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", relevance: 0 }, CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ } }))(n), o = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];
  return { name: "CSS", case_insensitive: !0, illegal: /[=|'\$]/, keywords: { keyframePosition: "from to" }, classNameAliases: { keyframePosition: "selector-tag" }, contains: [a.BLOCK_COMMENT, { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, a.CSS_NUMBER_MODE, { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 }, { className: "selector-class", begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*", relevance: 0 }, a.ATTRIBUTE_SELECTOR_MODE, { className: "selector-pseudo", variants: [{ begin: ":(" + Cl.join("|") + ")" }, { begin: ":(:)?(" + Al.join("|") + ")" }] }, a.CSS_VARIABLE, { className: "attribute", begin: "\\b(" + Dl.join("|") + ")\\b" }, { begin: /:/, end: /[;}{]/, contains: [a.BLOCK_COMMENT, a.HEXCOLOR, a.IMPORTANT, a.CSS_NUMBER_MODE, ...o, { begin: /(url|data-uri)\(/, end: /\)/, relevance: 0, keywords: { built_in: "url data-uri" }, contains: [...o, { className: "string", begin: /[^)]/, endsWithParent: !0, excludeEnd: !0 }] }, a.FUNCTION_DISPATCH] }, { begin: e.lookahead(/@/), end: "[{;]", relevance: 0, illegal: /:/, contains: [{ className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ }, { begin: /\s/, endsWithParent: !0, excludeEnd: !0, relevance: 0, keywords: { $pattern: /[a-z-]+/, keyword: "and or not only", attribute: Rl.join(" ") }, contains: [{ begin: /[a-z-]+(?=:)/, className: "attribute" }, ...o, a.CSS_NUMBER_MODE] }] }, { className: "selector-tag", begin: "\\b(" + Ml.join("|") + ")\\b" }] };
}
const Wa = "[A-Za-z$_][0-9A-Za-z$_]*", zl = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], Bl = ["true", "false", "null", "undefined", "NaN", "Infinity"], Zo = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], Ko = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], Jo = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], Pl = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"], Vl = [].concat(Jo, Zo, Ko);
function Ll(n) {
  const e = n.regex, a = Wa, o = "<>", t = "</>", l = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (bn, kn) => {
    const gn = bn[0].length + bn.index, fn = bn.input[gn];
    if (fn === "<" || fn === ",")
      return void kn.ignoreMatch();
    let F;
    fn === ">" && (((b, { after: h }) => {
      const C = "</" + b[0].slice(1);
      return b.input.indexOf(C, h) !== -1;
    })(bn, { after: gn }) || kn.ignoreMatch());
    const Ln = bn.input.substring(gn);
    ((F = Ln.match(/^\s*=/)) || (F = Ln.match(/^\s+extends\s+/)) && F.index === 0) && kn.ignoreMatch();
  } }, s = { $pattern: Wa, keyword: zl, literal: Bl, built_in: Vl, "variable.language": Pl }, r = "[0-9](_?[0-9])*", i = `\\.(${r})`, c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = { className: "number", variants: [{ begin: `(\\b(${c})((${i})|\\.)?|(${i}))[eE][+-]?(${r})\\b` }, { begin: `\\b(${c})\\b((${i})\\b|\\.)?|(${i})\\b` }, { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" }, { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" }, { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, { begin: "\\b0[0-7]+n?\\b" }], relevance: 0 }, u = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: s, contains: [] }, f = { begin: "html`", end: "", starts: { end: "`", returnEnd: !1, contains: [n.BACKSLASH_ESCAPE, u], subLanguage: "xml" } }, E = { begin: "css`", end: "", starts: { end: "`", returnEnd: !1, contains: [n.BACKSLASH_ESCAPE, u], subLanguage: "css" } }, T = { begin: "gql`", end: "", starts: { end: "`", returnEnd: !1, contains: [n.BACKSLASH_ESCAPE, u], subLanguage: "graphql" } }, N = { className: "string", begin: "`", end: "`", contains: [n.BACKSLASH_ESCAPE, u] }, L = { className: "comment", variants: [n.COMMENT(/\/\*\*(?!\/)/, "\\*/", { relevance: 0, contains: [{ begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }, { className: "type", begin: "\\{", end: "\\}", excludeEnd: !0, excludeBegin: !0, relevance: 0 }, { className: "variable", begin: a + "(?=\\s*(-)|$)", endsParent: !0, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] }), n.C_BLOCK_COMMENT_MODE, n.C_LINE_COMMENT_MODE] }, $ = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE, f, E, T, N, { match: /\$\d+/ }, p];
  u.contains = $.concat({ begin: /\{/, end: /\}/, keywords: s, contains: ["self"].concat($) });
  const nn = [].concat(L, u.contains), g = nn.concat([{ begin: /\(/, end: /\)/, keywords: s, contains: ["self"].concat(nn) }]), y = { className: "params", begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: s, contains: g }, d = { variants: [{ match: [/class/, /\s+/, a, /\s+/, /extends/, /\s+/, e.concat(a, "(", e.concat(/\./, a), ")*")], scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" } }, { match: [/class/, /\s+/, a], scope: { 1: "keyword", 3: "title.class" } }] }, A = { relevance: 0, match: e.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: "title.class", keywords: { _: [...Zo, ...Ko] } }, R = { variants: [{ match: [/function/, /\s+/, a, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [y], illegal: /%/ }, z = { match: e.concat(/\b/, (B = [...Jo, "super", "import"], e.concat("(?!", B.join("|"), ")")), a, e.lookahead(/\(/)), className: "title.function", relevance: 0 };
  var B;
  const H = { begin: e.concat(/\./, e.lookahead(e.concat(a, /(?![0-9A-Za-z$_(])/))), end: a, excludeBegin: !0, keywords: "prototype", className: "property", relevance: 0 }, D = { match: [/get|set/, /\s+/, a, /(?=\()/], className: { 1: "keyword", 3: "title.function" }, contains: [{ begin: /\(\)/ }, y] }, U = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + n.UNDERSCORE_IDENT_RE + ")\\s*=>", Mn = { match: [/const|var|let/, /\s+/, a, /\s*/, /=\s*/, /(async\s*)?/, e.lookahead(U)], keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [y] };
  return { name: "JavaScript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: s, exports: { PARAMS_CONTAINS: g, CLASS_REFERENCE: A }, illegal: /#(?![$_A-z])/, contains: [n.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), { label: "use_strict", className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, n.APOS_STRING_MODE, n.QUOTE_STRING_MODE, f, E, T, N, L, { match: /\$\d+/ }, p, A, { className: "attr", begin: a + e.lookahead(":"), relevance: 0 }, Mn, { begin: "(" + n.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", keywords: "return throw case", relevance: 0, contains: [L, n.REGEXP_MODE, { className: "function", begin: U, returnBegin: !0, end: "\\s*=>", contains: [{ className: "params", variants: [{ begin: n.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: !0 }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: s, contains: g }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: o, end: t }, { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ }, { begin: l.begin, "on:begin": l.isTrulyOpeningTag, end: l.end }], subLanguage: "xml", contains: [{ begin: l.begin, end: l.end, skip: !0, contains: ["self"] }] }] }, R, { beginKeywords: "while if switch catch for" }, { begin: "\\b(?!function)" + n.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", returnBegin: !0, label: "func.def", contains: [y, n.inherit(n.TITLE_MODE, { begin: a, className: "title.function" })] }, { match: /\.\.\./, relevance: 0 }, H, { match: "\\$" + a, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [y] }, z, { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" }, d, D, { match: /\$[(.]/ }] };
}
function Hl(n) {
  const e = n.regex, a = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), o = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ }, t = { begin: /\s/, contains: [{ className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] }, l = n.inherit(t, { begin: /\(/, end: /\)/ }), s = n.inherit(n.APOS_STRING_MODE, { className: "string" }), r = n.inherit(n.QUOTE_STRING_MODE, { className: "string" }), i = { endsWithParent: !0, illegal: /</, relevance: 0, contains: [{ className: "attr", begin: /[\p{L}0-9._:-]+/u, relevance: 0 }, { begin: /=\s*/, relevance: 0, contains: [{ className: "string", endsParent: !0, variants: [{ begin: /"/, end: /"/, contains: [o] }, { begin: /'/, end: /'/, contains: [o] }, { begin: /[^\s"'=<>`]+/ }] }] }] };
  return { name: "HTML, XML", aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"], case_insensitive: !0, unicodeRegex: !0, contains: [{ className: "meta", begin: /<![a-z]/, end: />/, relevance: 10, contains: [t, r, s, l, { begin: /\[/, end: /\]/, contains: [{ className: "meta", begin: /<![a-z]/, end: />/, contains: [t, l, r, s] }] }] }, n.COMMENT(/<!--/, /-->/, { relevance: 10 }), { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 }, o, { className: "meta", end: /\?>/, variants: [{ begin: /<\?xml/, relevance: 10, contains: [r] }, { begin: /<\?[a-z][a-z0-9]+/ }] }, { className: "tag", begin: /<style(?=\s|>)/, end: />/, keywords: { name: "style" }, contains: [i], starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"] } }, { className: "tag", begin: /<script(?=\s|>)/, end: />/, keywords: { name: "script" }, contains: [i], starts: { end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars", "xml"] } }, { className: "tag", begin: /<>|<\/>/ }, { className: "tag", begin: e.concat(/</, e.lookahead(e.concat(a, e.either(/\/>/, />/, /\s/)))), end: /\/?>/, contains: [{ className: "name", begin: a, relevance: 0, starts: i }] }, { className: "tag", begin: e.concat(/<\//, e.lookahead(e.concat(a, />/))), contains: [{ className: "name", begin: a, relevance: 0 }, { begin: />/, relevance: 0, endsParent: !0 }] }] };
}
function Ul(n) {
  return { name: "Plain text", aliases: ["text", "txt"], disableAutodetect: !0 };
}
const Fl = { class: "v-code-block--button-copy" }, ql = { class: "v-code-block--button-run" }, Wl = { class: "v-code-block--code" }, Gl = ["textContent"], Zl = ["innerHTML"], Kl = Eo({ __name: "CodeBlock", props: function(n, e) {
  const a = Xe(n);
  for (const o in e) {
    if (o.startsWith("__skip"))
      continue;
    let t = a[o];
    t ? S(t) || P(t) ? t = a[o] = { type: t, default: e[o] } : t.default = e[o] : t === null ? t = a[o] = { default: e[o] } : process.env.NODE_ENV !== "production" && M(`props default key "${o}" has no corresponding declaration.`), t && e[`__skip_${o}`] && (t.skipFactory = !0);
  }
  return a;
}({ browserWindow: { type: Boolean }, code: {}, codeBlockRadius: {}, copyButton: { type: Boolean }, copyIcons: { type: Boolean }, copyTab: { type: Boolean }, copyFailedText: {}, copyText: {}, copySuccessText: {}, floatingTabs: { type: Boolean }, globalOptions: { type: Boolean }, height: {}, highlightjs: { type: Boolean }, indent: {}, label: {}, lang: {}, maxHeight: {}, persistentCopyButton: { type: Boolean }, prismjs: { type: Boolean }, prismPlugin: { type: Boolean }, runTab: { type: Boolean }, runText: {}, tabGap: {}, tabs: { type: Boolean }, theme: { type: [String, Boolean] } }, { browserWindow: !1, code: "", codeBlockRadius: "0.5rem", copyButton: !0, copyIcons: !0, copyTab: !0, copyFailedText: "Copy failed!", copyText: "Copy Code", copySuccessText: "Copied!", floatingTabs: !0, height: "auto", highlightjs: !1, indent: 2, label: "", lang: "javascript", maxHeight: "auto", persistentCopyButton: !1, prismjs: !1, prismPlugin: !1, runTab: !1, runText: "Run", tabGap: "0.25rem", tabs: !1, theme: "neon-bunny" }), emits: ["run", "update:copy-status"], setup(n, { emit: e }) {
  const a = n, o = Ht(), t = Oo("codeBlockGlobalOptions");
  let l;
  const s = ln(null), r = ln("copy"), i = ln(""), c = ln(!1), p = ln(!1), u = ln(!1), f = ln("https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles"), E = ln("https://cdn.jsdelivr.net/gh/PrismJS/prism@1.29.0/themes"), T = ln("https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@1.9.0/themes"), N = ln(""), L = ln(""), $ = ln(""), nn = jn(() => {
    let b = "";
    return a.highlightjs && (b = N.value), a.prismjs && a.prismPlugin && (b = s.value), b;
  }), g = jn(() => ((b) => {
    const { isMobile: h, isPrism: C } = b;
    return { [`${W}`]: !0, [`${W}-mb-5`]: !0, [`${W}--mobile`]: _(h), [`${W}--prismjs`]: _(C), [`${W}--highlightjs`]: !_(C) };
  })({ isMobile: u, isPrism: a.prismjs })), y = jn(() => ((b) => {
    const { copyStatus: h, isMobile: C, persistentCopyButton: m } = b;
    return { [`${W}--code-copy-button`]: !0, [`${W}--code-copy-button-mobile`]: _(C), [`${W}--code-copy-button-persist`]: _(m), [`${W}--code-copy-button-status-${_(h)}`]: !0 };
  })({ copyStatus: r, isMobile: u, persistentCopyButton: a.persistentCopyButton })), d = jn(() => ((b) => {
    const { copyStatus: h, highlightjs: C, useTheme: m } = b, k = Ia(_(C)), X = Da(_(m));
    return { [`${W}--button-copy-icon-status-${_(h)}`]: !0, [`${W}--me-1`]: !0, [`${W}--tab-${k}-${X}-icon-status-${_(h)}`]: !0, [`${W}--tab-${k}-${X}-icon`]: !0 };
  })({ copyStatus: r, highlightjs: a.highlightjs, useTheme: $ })), A = jn(() => ((b) => {
    const { isMobile: h } = b;
    return { [`${W}--label`]: !0, [`${W}--label-mobile`]: _(h) };
  })({ isMobile: u })), R = jn(() => ((b) => {
    const { highlightjs: h, useTheme: C } = b, m = Ia(_(h)), k = Da(_(C));
    return { [`${W}--tab-${k}`]: !0, [`${W}--tab-${m}-${k}`]: !0 };
  })({ highlightjs: a.highlightjs, useTheme: $ })), z = jn(() => ((b) => {
    const { isLoading: h, useTheme: C } = b;
    return { width: _(C) === "coy" && h === !1 ? "100%" : "" };
  })({ isLoading: p, useTheme: $ })), B = jn(() => ((b) => {
    const { floatingTabs: h, tabGap: C } = b;
    return { bottom: h ? "1px" : "0", gap: _e(_(C)) };
  })({ floatingTabs: a.floatingTabs, tabGap: a.tabGap })), H = jn(() => ((b) => {
    const { copyTab: h, height: C, maxHeight: m, radius: k, runTab: X, tabs: an, useTheme: mn } = b;
    let on = `${k} 0 ${k} ${k} !important`;
    return _(an) && (_(h) || _(X)) || (on = k), { borderRadius: on, display: _(mn) !== "funky" ? "flex" : "block", height: _e(_(C)), maxHeight: _e(_(m)), overflow: "auto" };
  })({ copyTab: a.copyTab, height: a.height, maxHeight: a.maxHeight, radius: a.codeBlockRadius, runTab: a.runTab, tabs: a.tabs, useTheme: $ })), D = jn(() => ((b) => {
    const { tabGap: h } = b;
    return { gap: _e(_(h)) };
  })({ tabGap: a.tabGap }));
  function U() {
    if (!a.prismjs && !a.highlightjs)
      throw new Error("[vue3-code-block]: You must set either the prismjs or highlightjs props.");
    if (a.prismjs && a.highlightjs)
      throw new Error("[vue3-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");
    a.highlightjs && a.prismPlugin && console.warn("[vue3-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue3-code-block component.");
  }
  function Mn() {
    c.value || (c.value = !0, navigator.clipboard.writeText(s.value).then(() => {
      i.value = a.copySuccessText, r.value = "success", e("update:copy-status", r.value);
    }, (b) => {
      i.value = a.copyFailedText, r.value = "failed", e("update:copy-status", r.value), console.error("Copy to clipboard failed: ", b);
    }), setTimeout(() => {
      i.value = a.copyText, r.value = "copy", e("update:copy-status", r.value), c.value = !1;
    }, 3e3));
  }
  function bn() {
    let b = "";
    const h = a.highlightjs ? "highlightjs" : "prism", C = document.getElementsByTagName("head")[0], m = document.createElement("style"), k = document.body.getAttribute("data-v-code-block-theme");
    let X = `v-code-block--theme-${$.value}-${h}`, an = !0, mn = !0, on = "", j = "";
    if (X = gn(h, X), k === $.value || k === X || typeof $.value == "boolean")
      return;
    switch (document.body.setAttribute("data-v-code-block-theme", X), m.setAttribute("type", "text/css"), m.setAttribute("data-theme-id", X), m.setAttribute("data-theme", "v-code-block--theme-sheet"), $.value) {
      case "neon-bunny":
        b = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow: #fef611;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-blue-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-green-neon);--neon-bunny-important: var(--neon-bunny-red);--neon-bunny-inserted: var(--neon-bunny-lime-lighter);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-pink);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-url: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-html-attr-name: var(--neon-bunny-green);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-lime);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-js-keyword: var(--neon-bunny-blue);--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-php-boolean: var(--neon-bunny-blue);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);--neon-bunny-php-class-name: var(--neon-bunny-teal);--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);--neon-bunny-php-function: var(--neon-bunny-green-neon);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);--neon-bunny-php-keyword: var(--neon-bunny-blue);--neon-bunny-php-operator: var(--neon-bunny-purple);--neon-bunny-php-package: var(--neon-bunny-peach);--neon-bunny-php-property: var(--neon-bunny-purple-light);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);--neon-bunny-php-variable: var(--neon-bunny-purple-light)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.constant{color:var(--neon-bunny-constant)}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token.attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value .token.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string .token.string,.language-js .token.template-string .token.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name.return-type{color:var(--neon-bunny-php-class-name-return-type);font-style:italic}.language-php .token.function{color:var(--neon-bunny-php-function)}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint);font-style:italic}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`, mn = !1, an = !1, h === "highlightjs" && (b = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-darker: #276AFF;--neon-bunny-blue-light-faded: #a5a8ff;--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta-neon: #FF25D9;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #fef611;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-literal: var(--neon-bunny-blue-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-green-darker);--neon-bunny-property: var(--neon-bunny-blue-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-peach-darker);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);--neon-bunny-title-function: var(--neon-bunny-green-neon);--neon-bunny-title: var(--neon-bunny-green-darker);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-blue-light);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-green);--neon-bunny-meta-prompt: var(--neon-bunny-blue-light);--neon-bunny-meta-string: var(--neon-bunny-blue-light);--neon-bunny-meta: var(--neon-bunny-blue-light);--neon-bunny-attr: var(--neon-bunny-green);--neon-bunny-attribute: var(--neon-bunny-green);--neon-bunny-name: var(--neon-bunny-blue-light);--neon-bunny-section: var(--neon-bunny-green);--neon-bunny-tag-attr: var(--neon-bunny-blue-light);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-class: var(--neon-bunny-lime);--neon-bunny-selector-id: var(--neon-bunny-lime);--neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-green);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-pink);--neon-bunny-php: var(--neon-bunny-blue-light);--neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-class-title: var(--neon-bunny-magenta);--neon-bunny-php-function-title: var(--neon-bunny-green-neon);--neon-bunny-php-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-gray-lighter);--neon-bunny-php-string: var(--neon-bunny-yellow);--neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);--neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);--neon-bunny-php-title: var(--neon-bunny-peach);--neon-bunny-php-variable: var(--neon-bunny-purple-light);--neon-bunny-php-meta: var(--neon-bunny-red)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params);font-style:italic}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class);font-style:italic}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`);
        break;
      case "neon-bunny-carrot":
        b = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow: #ffff00;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-purple-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-orange-light);--neon-bunny-important: var(--neon-bunny-pink);--neon-bunny-inserted: var(--neon-bunny-lime);--neon-bunny-keyword: var(--neon-bunny-purple-light);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-orange);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-orange-light);--neon-bunny-punctuation: var(--neon-bunny-orange);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-light);--neon-bunny-symbol: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-url: var(--neon-bunny-orange-darker);--neon-bunny-variable: var(--neon-bunny-orange);--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);--neon-bunny-html-attr-value: var(--neon-bunny-green);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange-darker);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-yellow);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-js-keyword: var(--neon-bunny-magenta);--neon-bunny-js-literal-property: var(--neon-bunny-orange);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-php-boolean: var(--neon-bunny-purple-light);--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);--neon-bunny-php-class-name: var(--neon-bunny-yellow);--neon-bunny-php-double-quote-string: var(--neon-bunny-green);--neon-bunny-php-function: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);--neon-bunny-php-operator: var(--neon-bunny-yellow-light);--neon-bunny-php-package: var(--neon-bunny-yellow);--neon-bunny-php-property: var(--neon-bunny-orange);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);--neon-bunny-php-variable: var(--neon-bunny-orange)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.constant{color:var(--neon-bunny-constant)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token .attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string.string,.language-js .token.template-string.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name .return-type{color:var(--neon-bunny-php-class-name-return-type)}.language-php .token.function{color:var(--neon-bunny-php-function);text-decoration:underline}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint)}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`, mn = !1, an = !1, h === "highlightjs" && (b = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #ffff00;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-magenta);--neon-bunny-literal: var(--neon-bunny-purple-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-orange);--neon-bunny-property: var(--neon-bunny-yellow-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-orange);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-orange);--neon-bunny-title-function: var(--neon-bunny-orange-light);--neon-bunny-title: var(--neon-bunny-orange);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-purple-light);--neon-bunny-meta-prompt: var(--neon-bunny-orange);--neon-bunny-meta-string: var(--neon-bunny-orange);--neon-bunny-meta: var(--neon-bunny-orange);--neon-bunny-attr: var(--neon-bunny-orange);--neon-bunny-attribute: var(---neon-bunny-orange);--neon-bunny-name: var(--neon-bunny-orange);--neon-bunny-section: var(--neon-bunny-orange);--neon-bunny-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-orange);--neon-bunny-selector-class: var(--neon-bunny-yellow);--neon-bunny-selector-id: var(--neon-bunny-selector);--neon-bunny-selector-pseudo: var(--neon-bunny-orange);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-js-params-variable-language: var(--neon-bunny-orange);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-yellow);--neon-bunny-php: var(--neon-bunny-white);--neon-bunny-php-class-keyword: var(--neon-bunny-pink);--neon-bunny-php-class-title: var(--neon-bunny-yellow);--neon-bunny-php-function-title: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-yellow);--neon-bunny-php-string: var(--neon-bunny-green-light);--neon-bunny-php-title-class: var(--neon-bunny-yellow);--neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);--neon-bunny-php-title: var(--neon-bunny-white);--neon-bunny-php-variable: var(--neon-bunny-orange);--neon-bunny-php-meta: var(--neon-bunny-pink)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params)}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function);text-decoration:underline}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language);font-style:italic}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params)}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class)}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`);
    }
    if (!mn && !an)
      return fn(), m.appendChild(document.createTextNode(b)), void C.appendChild(m);
    const v = gn(h, $.value);
    switch (h) {
      case "highlightjs":
        on = `${v}.min.css`, j = `${f.value}/${on}`;
        break;
      case "prism":
        on = `${v}.css`, j = $.value === "default" ? `${E.value}/prism.css` : $.value.includes("themes-") ? `${T.value}/${on}` : `${E.value}/prism-${on}`;
        break;
      default:
        on = "";
    }
    p.value = !0, fetch(j).then((x) => x.text()).then((x) => {
      fn(), m.appendChild(document.createTextNode(x)), C.appendChild(m), p.value = !1;
    }).catch((x) => {
      const O = a.highlightjs ? "Highlight.js" : "PrismJS";
      console.error(`${O} CDN Error:`, x);
    });
  }
  function kn() {
    const b = Xo().device;
    u.value = b.type === "mobile";
  }
  function gn(b, h, C = !1) {
    let m = h;
    return b === "prism" && (m = m.replace("themes-", "prism-"), m = m.replace("prism-prism-", "prism-"), m = m.replace("theme-prism-", "theme-"), C && (m = m.replace("prism-prism-", ""), m = m.replace("prism-", ""))), b === "highlightjs" && (m = m.replace("base16-", "base16/")), m;
  }
  function fn() {
    const b = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');
    b.length > 0 && b.forEach((h) => {
      h.remove();
    });
  }
  function F() {
    (function() {
      if (a.lang !== "json")
        s.value = a.code;
      else {
        const b = a.code.toString();
        s.value = JSON.stringify(JSON.parse(b), null, a.indent);
      }
    })(), a.highlightjs && (Qn.registerLanguage("javascript", Ll), Qn.registerLanguage("css", Il), Qn.registerLanguage("html", Hl), Qn.registerLanguage("plain", Ul), N.value = Qn.highlight(s.value, { language: a.lang }).value), a.prismjs && import("prismjs").then((b) => {
      l = b.default, N.value = l.highlight(s.value, l.languages[a.lang], a.lang);
    }).catch((b) => {
      console.error("PrismJS import:", { err: b });
    });
  }
  function Ln() {
    e("run");
  }
  return function(b, h, C) {
    process.env.NODE_ENV === "production" || P(h) || M("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), wo(b, h, C);
  }(a, () => {
    a.code && F(), (a.theme || a.prismjs || a.highlightjs) && (U(), $.value = a.theme, bn()), a.copyText && (i.value = a.copyText), a.runText && (L.value = a.runText);
  }), Bt(() => {
    i.value = a.copyText, L.value = a.runText, U();
  }), Pt(() => {
    $.value = (t == null ? void 0 : t.theme) || a.theme, bn(), kn(), F();
  }), window.addEventListener("orientationchange", () => {
    kn();
  }), (b, h) => (Z(), rn("div", { class: sn(_(g)) }, [b.label || b.tabs || _(o).label || _(o).tabs ? (Z(), rn("div", { key: 0, class: "v-code-block--header", style: Cn(_(B)) }, [un("div", { class: sn(["v-code-block--label v-code-block--pb-1", _(A)]) }, [_(o).label ? Pe(b.$slots, "label", { key: 0 }, void 0, !0) : (Z(), rn(Pn, { key: 1 }, [ne(he(a.label), 1)], 64))], 2), un("div", { class: "v-code-block--tabs", style: Cn(_(D)) }, [_(o).tabs ? Pe(b.$slots, "tabs", { key: 0 }, void 0, !0) : (Z(), rn(Pn, { key: 1 }, [b.copyTab && b.tabs ? (Z(), rn("div", { key: 0, class: sn(["v-code-block--tab", _(R)]), onClick: Mn }, [un("div", Fl, [b.copyIcons ? (Z(), $e(za, { key: 0, class: sn(["v-code-block--button-copy-icon", _(d)]), icon: _(r) }, null, 8, ["class", "icon"])) : Fn("", !0), ne(" " + he(_(i)), 1)])], 2)) : Fn("", !0), b.runTab && b.tabs && !_(u) ? (Z(), rn("div", { key: 1, class: sn(["v-code-block--tab", _(R)]), onClick: Ln }, [un("div", ql, he(_(L)), 1)], 2)) : Fn("", !0)], 64))], 4)], 4)) : Fn("", !0), un("div", Wl, [un("div", { class: sn(["v-code-block--code-copy-button", _(y)]), onClick: Mn }, [_(o).copyButton ? Pe(b.$slots, "copyButton", { key: 0 }, void 0, !0) : (Z(), rn(Pn, { key: 1 }, [b.copyButton ? (Z(), $e(za, { key: 0, class: sn(["v-code-block--button-copy-icon", _(d)]), icon: _(r) }, null, 8, ["class", "icon"])) : Fn("", !0)], 64))], 2), un("pre", te(b.$attrs, { class: `language-${a.lang}`, style: _(H) }), [ne("												"), b.prismPlugin ? (Z(), rn("code", { key: 0, class: sn(`language-${a.lang} ${b.browserWindow ? "v-code-block--code-browser" : ""} ${b.highlightjs ? "hljs" : ""}`), style: Cn(_(z)), textContent: he(_(nn)) }, null, 14, Gl)) : (Z(), rn("code", { key: 1, class: sn(`language-${a.lang} ${b.browserWindow ? "v-code-block--code-browser" : ""} ${b.highlightjs ? "hljs" : ""}`), style: Cn(_(z)), innerHTML: _(N) }, null, 14, Zl)), ne(`
															`)], 16)])], 2));
} }), Ga = ((n, e) => {
  const a = n.__vccOpts || n;
  for (const [o, t] of e)
    a[o] = t;
  return a;
})(Kl, [["__scopeId", "data-v-125b062e"]]);
Ga.install = (n, e) => {
  const a = { globalOptions: !0, ...e };
  n.provide("codeBlockGlobalOptions", a), n.component("CodeBlock", Ga);
};
export {
  Ga as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(`.v-code-block--tab-prism-funky{background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.v-code-block---label-mobile input,.v-code-block---label-mobile select,.v-code-block---label-mobile textarea{display:none}.v-code-block[data-v-125b062e]{display:block;max-width:100%}.v-code-block--header[data-v-125b062e]{align-items:end;display:flex;justify-content:space-between;overflow:visible;position:relative;width:100%}.v-code-block--label[data-v-125b062e]{overflow:auto}.v-code-block--tabs[data-v-125b062e]{align-items:end;display:flex;justify-content:flex-end}.v-code-block--tab[data-v-125b062e]{align-items:center;border-radius:5px 5px 0 0;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;padding:5px 15px;text-align:center;transition:background-color .35s ease;white-space:nowrap;width:fit-content}.v-code-block--tab svg[data-v-125b062e]{height:.85rem;width:.85rem}.v-code-block--code[data-v-125b062e]{position:relative;z-index:1}.v-code-block--code pre[data-v-125b062e],.v-code-block--code pre[class*=language-][data-v-125b062e]{margin-top:0}.v-code-block--code pre[class*=language-][data-v-125b062e]:before,.v-code-block--code pre[class*=language-][data-v-125b062e]:after{bottom:.95em}.v-code-block--code pre code[data-v-125b062e]{width:100%}.v-code-block--code-browser[data-v-125b062e]:before{background-image:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');background-position:.5em .5em;background-repeat:no-repeat;content:"";display:block;padding-right:10em;padding-top:3rem;width:100%}.v-code-block--code:hover .v-code-block--code-copy-button[data-v-125b062e]{opacity:1}.v-code-block--code-copy-button[data-v-125b062e]{align-items:center;color:#ccc;cursor:pointer;display:flex;fill:#ccc;height:1.5em;justify-content:center;opacity:0;position:absolute;right:.9rem;top:.7rem;transition:opacity .2s ease-in-out;width:auto;z-index:2}.v-code-block--code-copy-button[data-v-125b062e]:hover{opacity:1}.v-code-block--code-copy-button-persist[data-v-125b062e]{opacity:.5}.v-code-block--code-copy-button svg[data-v-125b062e]{height:1rem;width:1rem}:root{--v-cb-blue: 206 80% 39%;--v-cb-blue-hex: #146eb4;--v-cb-blue-rgb: 20, 110, 180;--v-cb-primary: var(--v-cb-blue);--v-cb-primary-hex: var(--v-cb-blue-hex);--v-cb-primary-rgb: var(--v-cb-blue-rgb);--v-cb-green: 120 61% 34%;--v-cb-green-hex: #228b22;--v-cb-green-rgb: 34, 139, 34;--v-cb-success: var(--v-cb-green);--v-cb-success-hex: var(--v-cb-green-hex);--v-cb-success-rgb: var(--v-cb-green-rgb);--v-cb-red: 0 68% 42%;--v-cb-red-hex: #b22222;--v-cb-red-rgb: 178, 34, 34;--v-cb-danger: var(--v-cb-red);--v-cb-danger-hex: var(--v-cb-red-hex);--v-cb-danger-rgb: var(--v-cb-red-rgb);--v-cb-tab-neon-bunny-bkg: 0 0% 0%;--v-cb-tab-neon-bunny-text: 0 0% 100%;--v-cb-tab-neon-bunny-icon: 207 100% 52%;--v-cb-tab-neon-bunny-icon-success: 119 100% 51%;--v-cb-tab-neon-bunny-icon-failed: 3 100% 58%;--v-cb-tab-neon-bunny-carrot-bkg: 0 0% 0%;--v-cb-tab-neon-bunny-carrot-text: 0 0% 100%;--v-cb-tab-neon-bunny-carrot-icon: 292 100% 50%;--v-cb-tab-neon-bunny-carrot-icon-success: 119 100% 51%;--v-cb-tab-neon-bunny-carrot-icon-failed: 3 100% 58%;--v-cb-tab-prism-coy-bkg: 205 59% 50%;--v-cb-tab-prism-coy-text: 0 0% 0%;--v-cb-tab-prism-coy-icon: 195 76% 41%;--v-cb-tab-prism-coy-icon-success: 80 100% 30%;--v-cb-tab-prism-coy-icon-failed: 0 64% 48%;--v-cb-tab-prism-dark-bkg: 30 20% 25%;--v-cb-tab-prism-dark-text: 0 0% 100%;--v-cb-tab-prism-dark-border: 30 20% 40%;--v-cb-tab-prism-dark-icon: 40 90% 60%;--v-cb-tab-prism-dark-icon-success: 75 70% 60%;--v-cb-tab-prism-dark-icon-failed: 0 100% 50%;--v-cb-tab-prism-default-bkg: 24 20% 95%;--v-cb-tab-prism-default-text: 0 0% 0%;--v-cb-tab-prism-default-icon: 198 100% 33%;--v-cb-tab-prism-default-icon-success: 80 100% 30%;--v-cb-tab-prism-default-icon-failed: 348 68% 58%;--v-cb-tab-prism-funky-bkg: 0 0% 80%;--v-cb-tab-prism-funky-text: 0 0% 100%;--v-cb-tab-prism-funky-dark: 0 0% 0%;--v-cb-tab-prism-funky-icon: 328 100% 54%;--v-cb-tab-prism-funky-icon-success: 80 61% 50%;--v-cb-tab-prism-funky-icon-failed: 0 100% 50%;--v-cb-tab-prism-okaidia-bkg: 70 8% 15%;--v-cb-tab-prism-okaidia-text: 0 0% 100%;--v-cb-tab-prism-okaidia-icon: 190 81% 67%;--v-cb-tab-prism-okaidia-icon-success: 80 76% 53%;--v-cb-tab-prism-okaidia-icon-failed: 338 95% 56%;--v-cb-tab-prism-solarizedlight-bkg: 44 87% 94%;--v-cb-tab-prism-solarizedlight-text: 196 13% 45%;--v-cb-tab-prism-solarizedlight-icon: 175 59% 40%;--v-cb-tab-prism-solarizedlight-icon-success: 68 100% 30%;--v-cb-tab-prism-solarizedlight-icon-failed: 18 80% 44%;--v-cb-tab-prism-tomorrow-bkg: 0 0% 18%;--v-cb-tab-prism-tomorrow-text: 0 0% 80%;--v-cb-tab-prism-tomorrow-icon: 299 34% 70%;--v-cb-tab-prism-tomorrow-icon-success: 143 39% 64%;--v-cb-tab-prism-tomorrow-icon-failed: 358 65% 68%;--v-cb-tab-prism-twilight-bkg: 0 0% 8%;--v-cb-tab-prism-twilight-text: 0 0% 80%;--v-cb-tab-prism-twilight-border: 0 0% 33%;--v-cb-tab-prism-twilight-icon: 53 89% 79%;--v-cb-tab-prism-twilight-icon-success: 76 21% 52%;--v-cb-tab-prism-twilight-icon-failed: 14 58% 55%;--v-cb-tab-prism-themes-night-owl: 207 95% 8%;--v-cb-tab-prism-themes-night-owl-text: 217 34% 88%;--v-cb-tab-prism-themes-night-owl-icon: 169 56% 68%;--v-cb-tab-prism-themes-night-owl-icon-success: 84 62% 63%;--v-cb-tab-prism-themes-night-owl-icon-failed: 350 100% 67%;--v-cb-tab-highlightjs-a11y-dark-bkg: 0 0% 17%;--v-cb-tab-highlightjs-a11y-dark-text: 60 30% 96%;--v-cb-tab-highlightjs-a11y-dark-icon: 180 100% 44%;--v-cb-tab-highlightjs-a11y-dark-icon-success: 80 75% 55%;--v-cb-tab-highlightjs-a11y-dark-icon-failed: 17 100% 74%;--v-cb-tab-highlightjs-a11y-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-a11y-light-text: 0 0% 33%;--v-cb-tab-highlightjs-a11y-light-icon: 280 60% 39%;--v-cb-tab-highlightjs-a11y-light-icon-success: 120 100% 25%;--v-cb-tab-highlightjs-a11y-light-icon-failed: 2 80% 47%;--v-cb-tab-highlightjs-agate-bkg: 0 0% 20%;--v-cb-tab-highlightjs-agate-text: 0 0% 100%;--v-cb-tab-highlightjs-agate-icon: 197 93% 83%;--v-cb-tab-highlightjs-agate-icon-success: 136 53% 66%;--v-cb-tab-highlightjs-agate-icon-failed: 0 56% 61%;--v-cb-tab-highlightjs-an-old-hope-bkg: 228 8% 12%;--v-cb-tab-highlightjs-an-old-hope-text: 219 13% 78%;--v-cb-tab-highlightjs-an-old-hope-icon: 195 63% 58%;--v-cb-tab-highlightjs-an-old-hope-icon-success: 116 75% 62%;--v-cb-tab-highlightjs-an-old-hope-icon-failed: 352 81% 58%;--v-cb-tab-highlightjs-androidstudio-bkg: 210 7% 17%;--v-cb-tab-highlightjs-androidstudio-text: 211 20% 72%;--v-cb-tab-highlightjs-androidstudio-icon: 206 38% 57%;--v-cb-tab-highlightjs-androidstudio-icon-success: 108 28% 46%;--v-cb-tab-highlightjs-androidstudio-icon-failed: 27 61% 50%;--v-cb-tab-highlightjs-arduino-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-arduino-light-text: 198 11% 30%;--v-cb-tab-highlightjs-arduino-light-icon: 182 100% 31%;--v-cb-tab-highlightjs-arduino-light-icon-success: 182 100% 19%;--v-cb-tab-highlightjs-arduino-light-icon-failed: 24 100% 41%;--v-cb-tab-highlightjs-arta-bkg: 0 0% 13%;--v-cb-tab-highlightjs-arta-text: 0 0% 67%;--v-cb-tab-highlightjs-arta-icon: 202 85% 56%;--v-cb-tab-highlightjs-arta-icon-success: 150 100% 40%;--v-cb-tab-highlightjs-arta-icon-failed: 330 83% 40%;--v-cb-tab-highlightjs-ascetic-bkg: 0 0% 100%;--v-cb-tab-highlightjs-ascetic-text: 0 0% 0%;--v-cb-tab-highlightjs-ascetic-icon: 0 0% 53%;--v-cb-tab-highlightjs-ascetic-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-ascetic-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg: 220 13% 18%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-text: 219 14% 71%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon: 29 54% 61%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-atom-one-dark-bkg: 220 13% 18%;--v-cb-tab-highlightjs-atom-one-dark-text: 219 14% 71%;--v-cb-tab-highlightjs-atom-one-dark-icon: 29 54% 61%;--v-cb-tab-highlightjs-atom-one-dark-icon-success: 95 38% 62%;--v-cb-tab-highlightjs-atom-one-dark-icon-failed: 355 65% 65%;--v-cb-tab-highlightjs-atom-one-light-bkg: 0 0% 98%;--v-cb-tab-highlightjs-atom-one-light-text: 228 8% 24%;--v-cb-tab-highlightjs-atom-one-light-icon: 41 99% 30%;--v-cb-tab-highlightjs-atom-one-light-icon-success: 119 34% 47%;--v-cb-tab-highlightjs-atom-one-light-icon-failed: 5 74% 59%;--v-cb-tab-highlightjs-base16-onedark-bkg: 220 13% 18%;--v-cb-tab-highlightjs-base16-onedark-text: 219 14% 71%;--v-cb-tab-highlightjs-base16-onedark-icon: 207 82% 66%;--v-cb-tab-highlightjs-base16-onedark-icon-success: 95 38% 62%;--v-cb-tab-highlightjs-base16-onedark-icon-failed: 5 48% 51%;--v-cb-tab-highlightjs-brown-paper-bkg: 35 22% 64%;--v-cb-tab-highlightjs-brown-paper-bkg-img: url(brown-papersq.png);--v-cb-tab-highlightjs-brown-paper-text: 233 32% 31%;--v-cb-tab-highlightjs-brown-paper-icon: 207 100% 30%;--v-cb-tab-highlightjs-brown-paper-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-brown-paper-icon-failed: 359 60% 31%;--v-cb-tab-highlightjs-codepen-embed-bkg: 0 0% 13%;--v-cb-tab-highlightjs-codepen-embed-text: 0 0% 100%;--v-cb-tab-highlightjs-codepen-embed-icon: 300 10% 57%;--v-cb-tab-highlightjs-codepen-embed-icon-success: 76 20% 52%;--v-cb-tab-highlightjs-codepen-embed-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-color-brewer-bkg: 0 0% 100%;--v-cb-tab-highlightjs-color-brewer-text: 0 0% 0%;--v-cb-tab-highlightjs-color-brewer-icon: 205 59% 47%;--v-cb-tab-highlightjs-color-brewer-icon-success: 138 54% 42%;--v-cb-tab-highlightjs-color-brewer-icon-failed: 20 89% 48%;--v-cb-tab-highlightjs-dark-bkg: 0 0% 19%;--v-cb-tab-highlightjs-dark-text: 0 0% 87%;--v-cb-tab-highlightjs-dark-icon: 0 56% 70%;--v-cb-tab-highlightjs-dark-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-dark-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-default-bkg: 0 0% 95%;--v-cb-tab-highlightjs-default-text: 0 0% 27%;--v-cb-tab-highlightjs-default-icon: 0 0% 27%;--v-cb-tab-highlightjs-default-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-default-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-devibeans-bkg: 0 0% 0%;--v-cb-tab-highlightjs-devibeans-text: 23 4% 62%;--v-cb-tab-highlightjs-devibeans-icon: 207 89% 68%;--v-cb-tab-highlightjs-devibeans-icon-success: 95 49% 36%;--v-cb-tab-highlightjs-devibeans-icon-failed: 1 83% 63%;--v-cb-tab-highlightjs-docco-bkg: 240 100% 99%;--v-cb-tab-highlightjs-docco-text: 0 0% 0%;--v-cb-tab-highlightjs-docco-icon: 195 100% 35%;--v-cb-tab-highlightjs-docco-icon-success: 150 43% 44%;--v-cb-tab-highlightjs-docco-icon-failed: 17 64% 36%;--v-cb-tab-highlightjs-far-bkg: 240 100% 25%;--v-cb-tab-highlightjs-far-text: 180 100% 50%;--v-cb-tab-highlightjs-far-icon: 60 100% 50%;--v-cb-tab-highlightjs-far-icon-success: 120 100% 50%;--v-cb-tab-highlightjs-far-icon-failed: 0 100% 50%;--v-cb-tab-highlightjs-felipec-bkg: 240 6% 13%;--v-cb-tab-highlightjs-felipec-text: 240 6% 87%;--v-cb-tab-highlightjs-felipec-icon: 210 75% 75%;--v-cb-tab-highlightjs-felipec-icon-success: 120 75% 75%;--v-cb-tab-highlightjs-felipec-icon-failed: 0 75% 75%;--v-cb-tab-highlightjs-foundation-bkg: 0 0% 93%;--v-cb-tab-highlightjs-foundation-text: 0 0% 0%;--v-cb-tab-highlightjs-foundation-icon: 180 100% 30%;--v-cb-tab-highlightjs-foundation-icon-success: 345 86% 47%;--v-cb-tab-highlightjs-foundation-icon-failed: 120 100% 23%;--v-cb-tab-highlightjs-github-dark-dimmed-bkg: 215 15% 16%;--v-cb-tab-highlightjs-github-dark-dimmed-text: 210 19% 73%;--v-cb-tab-highlightjs-github-dark-dimmed-icon: 207 100% 79%;--v-cb-tab-highlightjs-github-dark-dimmed-icon-success: 119 52% 70%;--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed: 359 66% 28%;--v-cb-tab-highlightjs-github-dark-bkg: 216 28% 7%;--v-cb-tab-highlightjs-github-dark-text: 210 17% 82%;--v-cb-tab-highlightjs-github-dark-icon: 208 100% 74%;--v-cb-tab-highlightjs-github-dark-icon-success: 125 69% 70%;--v-cb-tab-highlightjs-github-dark-icon-failed: 4 100% 72%;--v-cb-tab-highlightjs-github-bkg: 0 0% 100%;--v-cb-tab-highlightjs-github-text: 210 12% 16%;--v-cb-tab-highlightjs-github-icon: 212 100% 39%;--v-cb-tab-highlightjs-github-icon-success: 134 60% 33%;--v-cb-tab-highlightjs-github-icon-failed: 354 66% 54%;--v-cb-tab-highlightjs-gml-bkg: 0 0% 13%;--v-cb-tab-highlightjs-gml-text: 0 0% 75%;--v-cb-tab-highlightjs-gml-icon: 60 100% 50%;--v-cb-tab-highlightjs-gml-icon-success: 121 73% 62%;--v-cb-tab-highlightjs-gml-icon-failed: 0 100% 75%;--v-cb-tab-highlightjs-googlecode-bkg: 0 0% 100%;--v-cb-tab-highlightjs-googlecode-text: 0 0% 0%;--v-cb-tab-highlightjs-googlecode-icon: 180 100% 20%;--v-cb-tab-highlightjs-googlecode-icon-success: 120 100% 27%;--v-cb-tab-highlightjs-googlecode-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-gradient-dark-bkg: 279 58% 34%;--v-cb-tab-highlightjs-gradient-dark-bkg-gradient: linear-gradient(160deg, #652487 0, #443ac3 35%, #0174b7 68%, #04988e 100%);--v-cb-tab-highlightjs-gradient-dark-text: 266 15% 91%;--v-cb-tab-highlightjs-gradient-dark-icon: 199 100% 61%;--v-cb-tab-highlightjs-gradient-dark-icon-success: 75 100% 81%;--v-cb-tab-highlightjs-gradient-dark-icon-failed: 29 100% 63%;--v-cb-tab-highlightjs-gradient-light-bkg: 293 100% 90%;--v-cb-tab-highlightjs-gradient-light-bkg-gradient: linear-gradient(295deg, #f9ccff 0, #e6bbf9 11%, #9ec6f9 32%, #55e6ee 60%, #91f5d1 74%, #f9ffbf 98%);--v-cb-tab-highlightjs-gradient-light-text: 256 94% 26%;--v-cb-tab-highlightjs-gradient-light-icon: 199 64% 41%;--v-cb-tab-highlightjs-gradient-light-icon-success: 149 93% 38%;--v-cb-tab-highlightjs-gradient-light-icon-failed: 19 98% 25%;--v-cb-tab-highlightjs-grayscale-bkg: 0 0% 100%;--v-cb-tab-highlightjs-grayscale-text: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon-success: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon-failed: 0 0% 20%;--v-cb-tab-highlightjs-hybrid-bkg: 210 6% 12%;--v-cb-tab-highlightjs-hybrid-text: 140 3% 78%;--v-cb-tab-highlightjs-hybrid-icon: 208 32% 63%;--v-cb-tab-highlightjs-hybrid-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-hybrid-icon-failed: 0 50% 60%;--v-cb-tab-highlightjs-idea-bkg: 0 0% 100%;--v-cb-tab-highlightjs-idea-text: 0 0% 0%;--v-cb-tab-highlightjs-idea-icon: 240 100% 25%;--v-cb-tab-highlightjs-idea-icon-success: 120 60% 83%;--v-cb-tab-highlightjs-idea-icon-failed: 10 100% 87%;--v-cb-tab-highlightjs-intellij-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-intellij-light-text: 223 100% 35%;--v-cb-tab-highlightjs-intellij-light-icon: 294 80% 32%;--v-cb-tab-highlightjs-intellij-light-icon-success: 129 91% 26%;--v-cb-tab-highlightjs-intellij-light-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-ir-black-bkg: 0 0% 0%;--v-cb-tab-highlightjs-ir-black-text: 0 0% 97%;--v-cb-tab-highlightjs-ir-black-icon: 209 98% 79%;--v-cb-tab-highlightjs-ir-black-icon-success: 93 100% 69%;--v-cb-tab-highlightjs-ir-black-icon-failed: 301 100% 73%;--v-cb-tab-highlightjs-isbl-editor-dark-bkg: 0 0% 25%;--v-cb-tab-highlightjs-isbl-editor-dark-text: 0 0% 94%;--v-cb-tab-highlightjs-isbl-editor-dark-icon: 0 0% 94%;--v-cb-tab-highlightjs-isbl-editor-dark-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed: 13 76% 50%;--v-cb-tab-highlightjs-isbl-editor-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-isbl-editor-light-text: 0 0% 0%;--v-cb-tab-highlightjs-isbl-editor-light-icon: 240 100% 25%;--v-cb-tab-highlightjs-isbl-editor-light-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-isbl-editor-light-icon-failed: 11 100% 49%;--v-cb-tab-highlightjs-kimbie-dark-bkg: 35 39% 10%;--v-cb-tab-highlightjs-kimbie-dark-text: 32 47% 68%;--v-cb-tab-highlightjs-kimbie-dark-icon: 356 19% 50%;--v-cb-tab-highlightjs-kimbie-dark-icon-success: 74 35% 45%;--v-cb-tab-highlightjs-kimbie-dark-icon-failed: 349 70% 54%;--v-cb-tab-highlightjs-kimbie-light-bkg: 35 83% 91%;--v-cb-tab-highlightjs-kimbie-light-text: 30 37% 38%;--v-cb-tab-highlightjs-kimbie-light-icon: 32 92% 58%;--v-cb-tab-highlightjs-kimbie-light-icon-success: 74 35% 45%;--v-cb-tab-highlightjs-kimbie-light-icon-failed: 349 70% 54%;--v-cb-tab-highlightjs-lightfair-bkg: 0 0% 100%;--v-cb-tab-highlightjs-lightfair-text: 0 0% 27%;--v-cb-tab-highlightjs-lightfair-icon: 217 89% 61%;--v-cb-tab-highlightjs-lightfair-icon-success: 180 69% 46%;--v-cb-tab-highlightjs-lightfair-icon-failed: 0 41% 56%;--v-cb-tab-highlightjs-lioshi-bkg: 0 0% 19%;--v-cb-tab-highlightjs-lioshi-text: 140 3% 78%;--v-cb-tab-highlightjs-lioshi-icon: 304 24% 66%;--v-cb-tab-highlightjs-lioshi-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-lioshi-icon-failed: 0 50% 60%;--v-cb-tab-highlightjs-magula-bkg: 0 0% 96%;--v-cb-tab-highlightjs-magula-text: 0 0% 0%;--v-cb-tab-highlightjs-magula-icon: 240 100% 25%;--v-cb-tab-highlightjs-magula-icon-success: 120 100% 17%;--v-cb-tab-highlightjs-magula-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-mono-blue-bkg: 213 27% 94%;--v-cb-tab-highlightjs-mono-blue-text: 214 100% 11%;--v-cb-tab-highlightjs-mono-blue-icon: 215 100% 34%;--v-cb-tab-highlightjs-mono-blue-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-mono-blue-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-monokai-sublime-bkg: 72 7% 13%;--v-cb-tab-highlightjs-monokai-sublime-text: 60 30% 96%;--v-cb-tab-highlightjs-monokai-sublime-icon: 54 70% 68%;--v-cb-tab-highlightjs-monokai-sublime-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-monokai-sublime-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-monokai-bkg: 70 8% 15%;--v-cb-tab-highlightjs-monokai-text: 0 0% 87%;--v-cb-tab-highlightjs-monokai-icon: 0 0% 87%;--v-cb-tab-highlightjs-monokai-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-monokai-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-night-owl-bkg: 207 95% 8%;--v-cb-tab-highlightjs-night-owl-text: 217 34% 88%;--v-cb-tab-highlightjs-night-owl-icon: 276 68% 75%;--v-cb-tab-highlightjs-night-owl-icon-success: 84 62% 63%;--v-cb-tab-highlightjs-night-owl-icon-failed: 350 100% 67%;--v-cb-tab-highlightjs-nnfx-dark-bkg: 0 0% 20%;--v-cb-tab-highlightjs-nnfx-dark-text: 0 0% 100%;--v-cb-tab-highlightjs-nnfx-dark-icon: 270 50% 60%;--v-cb-tab-highlightjs-nnfx-dark-icon-success: 90 50% 60%;--v-cb-tab-highlightjs-nnfx-dark-icon-failed: 18 100% 43%;--v-cb-tab-highlightjs-nnfx-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-nnfx-light-text: 0 0% 0%;--v-cb-tab-highlightjs-nnfx-light-icon: 240 100% 50%;--v-cb-tab-highlightjs-nnfx-light-icon-success: 120 100% 23%;--v-cb-tab-highlightjs-nnfx-light-icon-failed: 120 100% 48%;--v-cb-tab-highlightjs-nord-bkg: 220 16% 22%;--v-cb-tab-highlightjs-nord-text: 210 34% 63%;--v-cb-tab-highlightjs-nord-icon: 179 25% 65%;--v-cb-tab-highlightjs-nord-icon-success: 92 28% 65%;--v-cb-tab-highlightjs-nord-icon-failed: 14 51% 63%;--v-cb-tab-highlightjs-obsidian-bkg: 210 7% 17%;--v-cb-tab-highlightjs-obsidian-text: 210 7% 89%;--v-cb-tab-highlightjs-obsidian-icon: 210 32% 55%;--v-cb-tab-highlightjs-obsidian-icon-success: 162 26% 64%;--v-cb-tab-highlightjs-obsidian-icon-failed: 30 100% 46%;--v-cb-tab-highlightjs-panda-syntax-dark-bkg: 200 3% 17%;--v-cb-tab-highlightjs-panda-syntax-dark-text: 0 0% 90%;--v-cb-tab-highlightjs-panda-syntax-dark-icon: 207 94% 62%;--v-cb-tab-highlightjs-panda-syntax-dark-icon-success: 171 95% 54%;--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed: 342 100% 65%;--v-cb-tab-highlightjs-panda-syntax-light-bkg: 0 0% 90%;--v-cb-tab-highlightjs-panda-syntax-light-text: 200 3% 17%;--v-cb-tab-highlightjs-panda-syntax-light-icon: 207 57% 50%;--v-cb-tab-highlightjs-panda-syntax-light-icon-success: 171 81% 27%;--v-cb-tab-highlightjs-panda-syntax-light-icon-failed: 324 70% 50%;--v-cb-tab-highlightjs-paraiso-dark-bkg: 304 22% 15%;--v-cb-tab-highlightjs-paraiso-dark-text: 23 4% 62%;--v-cb-tab-highlightjs-paraiso-dark-icon: 45 99% 55%;--v-cb-tab-highlightjs-paraiso-dark-icon-success: 153 43% 50%;--v-cb-tab-highlightjs-paraiso-dark-icon-failed: 5 83% 64%;--v-cb-tab-highlightjs-paraiso-light-bkg: 69 24% 89%;--v-cb-tab-highlightjs-paraiso-light-text: 314 9% 28%;--v-cb-tab-highlightjs-paraiso-light-icon: 45 99% 55%;--v-cb-tab-highlightjs-paraiso-light-icon-success: 153 43% 50%;--v-cb-tab-highlightjs-paraiso-light-icon-failed: 5 83% 64%;--v-cb-tab-highlightjs-pojoaque-bkg: 72 11% 9%;--v-cb-tab-highlightjs-pojoaque-bkg-img: url(pojoaque.jpg) left top;--v-cb-tab-highlightjs-pojoaque-text: 50 52% 71%;--v-cb-tab-highlightjs-pojoaque-icon: 36 100% 62%;--v-cb-tab-highlightjs-pojoaque-icon-success: 149 32% 41%;--v-cb-tab-highlightjs-pojoaque-icon-failed: 1 71% 52%;--v-cb-tab-highlightjs-purebasic-bkg: 60 100% 94%;--v-cb-tab-highlightjs-purebasic-text: 0 0% 0%;--v-cb-tab-highlightjs-purebasic-icon: 210 100% 50%;--v-cb-tab-highlightjs-purebasic-icon-success: 180 100% 33%;--v-cb-tab-highlightjs-purebasic-icon-failed: 327 32% 43%;--v-cb-tab-highlightjs-qtcreator-dark-bkg: 0 0% 0%;--v-cb-tab-highlightjs-qtcreator-dark-text: 0 0% 67%;--v-cb-tab-highlightjs-qtcreator-dark-icon: 240 100% 77%;--v-cb-tab-highlightjs-qtcreator-dark-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-qtcreator-dark-icon-failed: 0 100% 67%;--v-cb-tab-highlightjs-qtcreator-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-qtcreator-light-text: 0 0% 0%;--v-cb-tab-highlightjs-qtcreator-light-icon: 240 100% 25%;--v-cb-tab-highlightjs-qtcreator-light-icon-success: 60 100% 25%;--v-cb-tab-highlightjs-qtcreator-light-icon-failed: 0 100% 25%;--v-cb-tab-highlightjs-rainbow-bkg: 180 1% 28%;--v-cb-tab-highlightjs-rainbow-text: 210 21% 85%;--v-cb-tab-highlightjs-rainbow-icon: 208 32% 63%;--v-cb-tab-highlightjs-rainbow-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-rainbow-icon-failed: 1 71% 52%;--v-cb-tab-highlightjs-routeros-bkg: 0 0% 94%;--v-cb-tab-highlightjs-routeros-text: 0 0% 27%;--v-cb-tab-highlightjs-routeros-icon: 200 66% 36%;--v-cb-tab-highlightjs-routeros-icon-success: 115 100% 30%;--v-cb-tab-highlightjs-routeros-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-school-book-bkg: 59 79% 83%;--v-cb-tab-highlightjs-school-book-text: 84 62% 22%;--v-cb-tab-highlightjs-school-book-icon: 207 100% 30%;--v-cb-tab-highlightjs-school-book-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-school-book-icon-failed: 355 97% 46%;--v-cb-tab-highlightjs-shades-of-purple-bkg: 243 34% 25%;--v-cb-tab-highlightjs-shades-of-purple-text: 248 100% 94%;--v-cb-tab-highlightjs-shades-of-purple-icon: 38 100% 49%;--v-cb-tab-highlightjs-shades-of-purple-icon-success: 102 83% 45%;--v-cb-tab-highlightjs-shades-of-purple-icon-failed: 344 94% 69%;--v-cb-tab-highlightjs-srcery-bkg: 40 6% 10%;--v-cb-tab-highlightjs-srcery-text: 39 90% 88%;--v-cb-tab-highlightjs-srcery-icon: 41 96% 57%;--v-cb-tab-highlightjs-srcery-icon-success: 76 55% 48%;--v-cb-tab-highlightjs-srcery-icon-failed: 2 86% 55%;--v-cb-tab-highlightjs-stackoverflow-dark-bkg: 0 2% 11%;--v-cb-tab-highlightjs-stackoverflow-dark-text: 0 0% 100%;--v-cb-tab-highlightjs-stackoverflow-dark-icon: 207 42% 67%;--v-cb-tab-highlightjs-stackoverflow-dark-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed: 357 62% 66%;--v-cb-tab-highlightjs-stackoverflow-light-bkg: 0 0% 96%;--v-cb-tab-highlightjs-stackoverflow-light-text: 210 8% 20%;--v-cb-tab-highlightjs-stackoverflow-light-icon: 205 99% 29%;--v-cb-tab-highlightjs-stackoverflow-light-icon-success: 140 41% 31%;--v-cb-tab-highlightjs-stackoverflow-light-icon-failed: 360 62% 46%;--v-cb-tab-highlightjs-sunburst-bkg: 0 0% 0%;--v-cb-tab-highlightjs-sunburst-text: 0 0% 97%;--v-cb-tab-highlightjs-sunburst-icon: 214 100% 77%;--v-cb-tab-highlightjs-sunburst-icon-success: 101 45% 47%;--v-cb-tab-highlightjs-sunburst-icon-failed: 18 68% 64%;--v-cb-tab-highlightjs-tokyo-night-dark-bkg: 235 19% 13%;--v-cb-tab-highlightjs-tokyo-night-dark-text: 227 35% 71%;--v-cb-tab-highlightjs-tokyo-night-dark-icon: 261 85% 79%;--v-cb-tab-highlightjs-tokyo-night-dark-icon-success: 89 51% 61%;--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed: 349 89% 72%;--v-cb-tab-highlightjs-tokyo-night-light-bkg: 230 8% 85%;--v-cb-tab-highlightjs-tokyo-night-light-text: 230 12% 38%;--v-cb-tab-highlightjs-tokyo-night-light-icon: 218 45% 37%;--v-cb-tab-highlightjs-tokyo-night-light-icon-success: 89 32% 28%;--v-cb-tab-highlightjs-tokyo-night-light-icon-failed: 348 35% 41%;--v-cb-tab-highlightjs-tomorrow-night-blue-bkg: 213 100% 16%;--v-cb-tab-highlightjs-tomorrow-night-blue-text: 0 0% 100%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon: 282 100% 87%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success: 87 72% 80%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed: 356 100% 81%;--v-cb-tab-highlightjs-tomorrow-night-bright-bkg: 0 0% 0%;--v-cb-tab-highlightjs-tomorrow-night-bright-text: 0 0% 92%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon: 281 45% 72%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success: 68 55% 54%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed: 358 62% 57%;--v-cb-tab-highlightjs-vs-bkg: 0 0% 100%;--v-cb-tab-highlightjs-vs-text: 0 0% 0%;--v-cb-tab-highlightjs-vs-icon: 240 100% 50%;--v-cb-tab-highlightjs-vs-icon-success: 120 100% 25%;--v-cb-tab-highlightjs-vs-icon-failed: 0 100% 50%;--v-cb-tab-highlightjs-vs2015-bkg: 0 0% 12%;--v-cb-tab-highlightjs-vs2015-text: 0 0% 86%;--v-cb-tab-highlightjs-vs2015-icon: 207 61% 59%;--v-cb-tab-highlightjs-vs2015-icon-success: 112 38% 47%;--v-cb-tab-highlightjs-vs2015-icon-failed: 0 0% 0%;--v-cb-tab-highlightjs-xcode-bkg: 0 0% 100%;--v-cb-tab-highlightjs-xcode-text: 0 0% 0%;--v-cb-tab-highlightjs-xcode-icon: 240 100% 53%;--v-cb-tab-highlightjs-xcode-icon-success: 120 100% 23%;--v-cb-tab-highlightjs-xcode-icon-failed: 1 80% 43%;--v-cb-tab-highlightjs-xt256-bkg: 0 0% 0%;--v-cb-tab-highlightjs-xt256-text: 0 0% 92%;--v-cb-tab-highlightjs-xt256-icon: 240 100% 50%;--v-cb-tab-highlightjs-xt256-icon-success: 120 100% 50%;--v-cb-tab-highlightjs-xt256-icon-failed: 0 100% 50%}.v-code-block--mt-1{margin-top:.25rem!important}.v-code-block--me-1{margin-right:.25rem!important}.v-code-block--mb-1{margin-bottom:.25rem!important}.v-code-block--ms-1{margin-left:.25rem!important}.v-code-block--pt-1{padding-top:.25rem!important}.v-code-block--pe-1{padding-right:.25rem!important}.v-code-block--pb-1{padding-bottom:.25rem!important}.v-code-block--ps-1{padding-left:.25rem!important}.v-code-block--mt-2{margin-top:.5rem!important}.v-code-block--me-2{margin-right:.5rem!important}.v-code-block--mb-2{margin-bottom:.5rem!important}.v-code-block--ms-2{margin-left:.5rem!important}.v-code-block--pt-2{padding-top:.5rem!important}.v-code-block--pe-2{padding-right:.5rem!important}.v-code-block--pb-2{padding-bottom:.5rem!important}.v-code-block--ps-2{padding-left:.5rem!important}.v-code-block--mt-3{margin-top:.75rem!important}.v-code-block--me-3{margin-right:.75rem!important}.v-code-block--mb-3{margin-bottom:.75rem!important}.v-code-block--ms-3{margin-left:.75rem!important}.v-code-block--pt-3{padding-top:.75rem!important}.v-code-block--pe-3{padding-right:.75rem!important}.v-code-block--pb-3{padding-bottom:.75rem!important}.v-code-block--ps-3{padding-left:.75rem!important}.v-code-block--mt-4{margin-top:1rem!important}.v-code-block--me-4{margin-right:1rem!important}.v-code-block--mb-4{margin-bottom:1rem!important}.v-code-block--ms-4{margin-left:1rem!important}.v-code-block--pt-4{padding-top:1rem!important}.v-code-block--pe-4{padding-right:1rem!important}.v-code-block--pb-4{padding-bottom:1rem!important}.v-code-block--ps-4{padding-left:1rem!important}.v-code-block--mt-5{margin-top:1.25rem!important}.v-code-block--me-5{margin-right:1.25rem!important}.v-code-block--mb-5{margin-bottom:1.25rem!important}.v-code-block--ms-5{margin-left:1.25rem!important}.v-code-block--pt-5{padding-top:1.25rem!important}.v-code-block--pe-5{padding-right:1.25rem!important}.v-code-block--pb-5{padding-bottom:1.25rem!important}.v-code-block--ps-5{padding-left:1.25rem!important}.v-code-block{display:block;max-width:100%}.v-code-block--header{align-items:end;display:flex;justify-content:space-between;overflow:visible;position:relative;width:100%}.v-code-block--label{overflow:auto}.v-code-block--tabs{align-items:end;display:flex;justify-content:flex-end}.v-code-block--tab{align-items:center;border-radius:5px 5px 0 0;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;padding:5px 15px;text-align:center;transition:background-color .35s ease;white-space:nowrap;width:fit-content}.v-code-block--tab svg{height:.85rem;width:.85rem}.v-code-block--code{position:relative;z-index:1}.v-code-block--code pre,.v-code-block--code pre[class*=language-]{margin-top:0}.v-code-block--code pre[class*=language-]:before,.v-code-block--code pre[class*=language-]:after{bottom:.95em}.v-code-block--code pre code{width:100%}.v-code-block--code-browser:before{background-image:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');background-position:.5em .5em;background-repeat:no-repeat;content:"";display:block;padding-right:10em;padding-top:3rem;width:100%}.v-code-block--code:hover .v-code-block--code-copy-button{opacity:1}.v-code-block--code-copy-button{align-items:center;color:#ccc;cursor:pointer;display:flex;fill:#ccc;height:1.5em;justify-content:center;opacity:0;position:absolute;right:.9rem;top:.7rem;transition:opacity .2s ease-in-out;width:auto;z-index:2}.v-code-block--code-copy-button:hover{opacity:1}.v-code-block--code-copy-button-persist{opacity:.5}.v-code-block--code-copy-button svg{height:1rem;width:1rem}.v-code-block--tab-prism-neon-bunny,.v-code-block--tab-highlightjs-neon-bunny{background-color:hsl(var(--v-cb-tab-neon-bunny-bkg)/100%)!important;color:hsl(var(--v-cb-tab-neon-bunny-text))!important}.v-code-block--tab-prism-neon-bunny:hover,.v-code-block--tab-highlightjs-neon-bunny:hover{background-color:hsl(var(--v-cb-tab-neon-bunny-bkg)/50%)!important}.v-code-block--tab-prism-neon-bunny-icon,.v-code-block--tab-highlightjs-neon-bunny-icon{color:hsl(var(--v-cb-tab-neon-bunny-icon))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon))!important}.v-code-block--tab-prism-neon-bunny-icon-status-success,.v-code-block--tab-highlightjs-neon-bunny-icon-status-success{color:hsl(var(--v-cb-tab-neon-bunny-icon-success))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon-success))!important}.v-code-block--tab-prism-neon-bunny-icon-status-failed,.v-code-block--tab-highlightjs-neon-bunny-icon-status-failed{color:hsl(var(--v-cb-tab-neon-bunny-icon-failed))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon-failed))!important}.v-code-block--tab-prism-neon-bunny>div,.v-code-block--tab-highlightjs-neon-bunny>div{color:hsl(var(--v-cb-tab-neon-bunny-text))}.v-code-block--tab-prism-neon-bunny-carrot,.v-code-block--tab-highlightjs-neon-bunny-carrot{background-color:hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/100%)!important;color:hsl(var(--v-cb-tab-neon-bunny-carrot-text))!important}.v-code-block--tab-prism-neon-bunny-carrot:hover,.v-code-block--tab-highlightjs-neon-bunny-carrot:hover{background-color:hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/50%)!important}.v-code-block--tab-prism-neon-bunny-carrot-icon,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon))!important}.v-code-block--tab-prism-neon-bunny-carrot-icon-status-success,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon-status-success{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success))!important}.v-code-block--tab-prism-neon-bunny-carrot-icon-status-failed,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon-status-failed{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed))!important}.v-code-block--tab-prism-neon-bunny-carrot>div,.v-code-block--tab-highlightjs-neon-bunny-carrot>div{color:hsl(var(--v-cb-tab-neon-bunny-carrot-text))}.v-code-block--tab-prism-coy{background-color:hsl(var(--v-cb-tab-prism-coy-bkg)/10%)!important;border-left:5px solid hsl(var(--v-cb-tab-prism-coy-bkg));border-radius:0}.v-code-block--tab-prism-coy:hover{background-color:hsl(var(--v-cb-tab-prism-coy-bkg)/20%)!important}.v-code-block--tab-prism-coy-icon{color:hsl(var(--v-cb-tab-prism-coy-icon))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon))!important}.v-code-block--tab-prism-coy-icon-status-success{color:hsl(var(--v-cb-tab-prism-coy-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon-success))!important}.v-code-block--tab-prism-coy-icon-status-failed{color:hsl(var(--v-cb-tab-prism-coy-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon-failed))!important}.v-code-block--tab-prism-coy>div{color:hsl(var(--v-cb-tab-prism-coy-text))}.v-code-block--tab-prism-dark{background-color:hsl(var(--v-cb-tab-prism-dark-bkg)/100%)!important;border-color:hsl(var(--v-cb-tab-prism-dark-border));border-style:solid;border-width:.3em .3em 0}.v-code-block--tab-prism-dark:hover{background-color:hsl(var(--v-cb-tab-prism-dark-border)/50%)!important}.v-code-block--tab-prism-dark-icon{color:hsl(var(--v-cb-tab-prism-dark-icon))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon))!important}.v-code-block--tab-prism-dark-icon-status-success{color:hsl(var(--v-cb-tab-prism-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon-success))!important}.v-code-block--tab-prism-dark-icon-status-failed{color:hsl(var(--v-cb-tab-prism-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon-failed))!important}.v-code-block--tab-prism-dark>div{color:hsl(var(--v-cb-tab-prism-dark-text))}.v-code-block--tab-prism-default{background-color:hsl(var(--v-cb-tab-prism-default-bkg)/100%)!important}.v-code-block--tab-prism-default:hover{background-color:hsl(var(--v-cb-tab-prism-default-bkg)/50%)!important}.v-code-block--tab-prism-default-icon{color:hsl(var(--v-cb-tab-prism-default-icon))!important;fill:hsl(var(--v-cb-tab-prism-default-icon))!important}.v-code-block--tab-prism-default-icon-status-success{color:hsl(var(--v-cb-tab-prism-default-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-default-icon-success))!important}.v-code-block--tab-prism-default-icon-status-failed{color:hsl(var(--v-cb-tab-prism-default-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-default-icon-failed))!important}.v-code-block--tab-prism-default>div{color:hsl(var(--v-cb-tab-prism-default-text))}.v-code-block--tab-prism-funky{background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.v-code-block--tab-prism-funky:hover{background-color:hsl(var(--v-cb-tab-prism-funky-bkg))!important}.v-code-block--tab-prism-funky-icon{color:hsl(var(--v-cb-tab-prism-funky-icon))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon))!important}.v-code-block--tab-prism-funky-icon-status-success{color:hsl(var(--v-cb-tab-prism-funky-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon-success))!important}.v-code-block--tab-prism-funky-icon-status-failed{color:hsl(var(--v-cb-tab-prism-funky-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon-failed))!important}.v-code-block--tab-prism-funky>div{background-color:hsl(var(--v-cb-tab-prism-funky-dark))!important;color:hsl(var(--v-cb-tab-prism-funky-text))}.v-code-block--tab-prism-okaidia{background-color:hsl(var(--v-cb-tab-prism-okaidia-bkg)/100%)!important}.v-code-block--tab-prism-okaidia:hover{background-color:hsl(var(--v-cb-tab-prism-okaidia-bkg)/50%)!important}.v-code-block--tab-prism-okaidia-icon{color:hsl(var(--v-cb-tab-prism-okaidia-icon))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon))!important}.v-code-block--tab-prism-okaidia-icon-status-success{color:hsl(var(--v-cb-tab-prism-okaidia-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon-success))!important}.v-code-block--tab-prism-okaidia-icon-status-failed{color:hsl(var(--v-cb-tab-prism-okaidia-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon-failed))!important}.v-code-block--tab-prism-okaidia>div{color:hsl(var(--v-cb-tab-prism-okaidia-text))}.v-code-block--tab-prism-solarizedlight{background-color:hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/100%)!important}.v-code-block--tab-prism-solarizedlight:hover{background-color:hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/50%)!important}.v-code-block--tab-prism-solarizedlight-icon{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon))!important}.v-code-block--tab-prism-solarizedlight-icon-status-success{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon-success))!important}.v-code-block--tab-prism-solarizedlight-icon-status-failed{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed))!important}.v-code-block--tab-prism-solarizedlight>div{color:hsl(var(--v-cb-tab-prism-solarizedlight-text))}.v-code-block--tab-prism-tomorrow{background-color:hsl(var(--v-cb-tab-prism-tomorrow-bkg)/100%)!important}.v-code-block--tab-prism-tomorrow:hover{background-color:hsl(var(--v-cb-tab-prism-tomorrow-bkg)/50%)!important}.v-code-block--tab-prism-tomorrow-icon{color:hsl(var(--v-cb-tab-prism-tomorrow-icon))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon))!important}.v-code-block--tab-prism-tomorrow-icon-status-success{color:hsl(var(--v-cb-tab-prism-tomorrow-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon-success))!important}.v-code-block--tab-prism-tomorrow-icon-status-failed{color:hsl(var(--v-cb-tab-prism-tomorrow-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon-failed))!important}.v-code-block--tab-prism-tomorrow>div{color:hsl(var(--v-cb-tab-prism-tomorrow-text))}.v-code-block--tab-prism-twilight{background-color:hsl(var(--v-cb-tab-prism-twilight-bkg)/100%)!important;border-color:hsl(var(--v-cb-tab-prism-twilight-border));border-style:solid;border-width:.3em .3em 0}.v-code-block--tab-prism-twilight:hover{background-color:hsl(var(--v-cb-tab-prism-twilight-bkg)/50%)!important}.v-code-block--tab-prism-twilight-icon{color:hsl(var(--v-cb-tab-prism-twilight-icon))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon))!important}.v-code-block--tab-prism-twilight-icon-status-success{color:hsl(var(--v-cb-tab-prism-twilight-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon-success))!important}.v-code-block--tab-prism-twilight-icon-status-failed{color:hsl(var(--v-cb-tab-prism-twilight-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon-failed))!important}.v-code-block--tab-prism-twilight>div{color:hsl(var(--v-cb-tab-prism-twilight-text))}.v-code-block--tab-prism-themes-night-owl{background-color:hsl(var(--v-cb-tab-prism-themes-night-owl)/100%)!important}.v-code-block--tab-prism-themes-night-owl:hover{background-color:hsl(var(--v-cb-tab-prism-themes-night-owl)/50%)!important}.v-code-block--tab-prism-themes-night-owl-icon{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon))!important}.v-code-block--tab-prism-themes-night-owl-icon-status-success{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-success))!important}.v-code-block--tab-prism-themes-night-owl-icon-status-failed{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-failed))!important}.v-code-block--tab-prism-themes-night-owl>div{color:hsl(var(--v-cb-tab-prism-themes-night-owl-text))}.v-code-block--tab-highlightjs-brown-paper{background-color:var(--v-cb-tab-highlightjs-brown-paper-bkg);background-image:var(--v-cb-tab-highlightjs-brown-paper-bkg-img)}.v-code-block--tab-highlightjs-brown-paper:hover{background-color:hsl(var(--v-cb-tab-highlightjs-brown-paper-bkg))!important}.v-code-block--tab-highlightjs-brown-paper-icon{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon))!important}.v-code-block--tab-highlightjs-brown-paper-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-success))!important}.v-code-block--tab-highlightjs-brown-paper-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-failed))!important}.v-code-block--tab-highlightjs-brown-paper>div{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-text))}.v-code-block--tab-highlightjs-gradient-dark{background:var(--v-cb-tab-highlightjs-gradient-dark-bkg-gradient);background-color:var(--v-cb-tab-highlightjs-gradient-dark-bkg)}.v-code-block--tab-highlightjs-gradient-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-bkg))!important}.v-code-block--tab-highlightjs-gradient-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon))!important}.v-code-block--tab-highlightjs-gradient-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-success))!important}.v-code-block--tab-highlightjs-gradient-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-failed))!important}.v-code-block--tab-highlightjs-gradient-dark>div{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-text))}.v-code-block--tab-highlightjs-gradient-light{background:var(--v-cb-tab-highlightjs-gradient-light-bkg-gradient);background-color:var(--v-cb-tab-highlightjs-gradient-light-bkg)}.v-code-block--tab-highlightjs-gradient-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gradient-light-bkg))!important}.v-code-block--tab-highlightjs-gradient-light-icon{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon))!important}.v-code-block--tab-highlightjs-gradient-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-success))!important}.v-code-block--tab-highlightjs-gradient-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-failed))!important}.v-code-block--tab-highlightjs-gradient-light>div{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-text))}.v-code-block--tab-highlightjs-pojoaque{background:var(--v-cb-tab-highlightjs-pojoaque-bkg-img);background-color:var(--v-cb-tab-highlightjs-pojoaque-bkg)}.v-code-block--tab-highlightjs-pojoaque:hover{background-color:hsl(var(--v-cb-tab-highlightjs-pojoaque-bkg))!important}.v-code-block--tab-highlightjs-pojoaque-icon{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon))!important}.v-code-block--tab-highlightjs-pojoaque-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-v-icon-success))!important}.v-code-block--tab-highlightjs-pojoaque-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-failed))!important}.v-code-block--tab-highlightjs-pojoaque>div{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-text))}.v-code-block--tab-highlightjs-default{background-color:hsl(var(--v-cb-tab-highlightjs-default-bkg)/100%)!important}.v-code-block--tab-highlightjs-default:hover{background-color:hsl(var(--v-cb-tab-highlightjs-default-bkg)/50%)!important}.v-code-block--tab-highlightjs-default-icon{color:hsl(var(--v-cb-tab-highlightjs-default-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon))!important}.v-code-block--tab-highlightjs-default-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-default-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon-success))!important}.v-code-block--tab-highlightjs-default-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-default-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon-failed))!important}.v-code-block--tab-highlightjs-default>div{color:hsl(var(--v-cb-tab-highlightjs-default-text))}.v-code-block--tab-highlightjs-a11y-dark{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-a11y-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-a11y-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon))!important}.v-code-block--tab-highlightjs-a11y-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-success))!important}.v-code-block--tab-highlightjs-a11y-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-failed))!important}.v-code-block--tab-highlightjs-a11y-dark>div{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-text))}.v-code-block--tab-highlightjs-a11y-light{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-a11y-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-a11y-light-icon{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon))!important}.v-code-block--tab-highlightjs-a11y-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-success))!important}.v-code-block--tab-highlightjs-a11y-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-failed))!important}.v-code-block--tab-highlightjs-a11y-light>div{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-text))}.v-code-block--tab-highlightjs-agate{background-color:hsl(var(--v-cb-tab-highlightjs-agate-bkg)/100%)!important}.v-code-block--tab-highlightjs-agate:hover{background-color:hsl(var(--v-cb-tab-highlightjs-agate-bkg)/50%)!important}.v-code-block--tab-highlightjs-agate-icon{color:hsl(var(--v-cb-tab-highlightjs-agate-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon))!important}.v-code-block--tab-highlightjs-agate-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-agate-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon-success))!important}.v-code-block--tab-highlightjs-agate-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-agate-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon-failed))!important}.v-code-block--tab-highlightjs-agate>div{color:hsl(var(--v-cb-tab-highlightjs-agate-text))}.v-code-block--tab-highlightjs-an-old-hope{background-color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-bkg)/100%)!important}.v-code-block--tab-highlightjs-an-old-hope:hover{background-color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-bkg)/50%)!important}.v-code-block--tab-highlightjs-an-old-hope-icon{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon))!important}.v-code-block--tab-highlightjs-an-old-hope-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-success))!important}.v-code-block--tab-highlightjs-an-old-hope-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-failed))!important}.v-code-block--tab-highlightjs-an-old-hope>div{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-text))}.v-code-block--tab-highlightjs-androidstudio{background-color:hsl(var(--v-cb-tab-highlightjs-androidstudio-bkg)/100%)!important}.v-code-block--tab-highlightjs-androidstudio:hover{background-color:hsl(var(--v-cb-tab-highlightjs-androidstudio-bkg)/50%)!important}.v-code-block--tab-highlightjs-androidstudio-icon{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon))!important}.v-code-block--tab-highlightjs-androidstudio-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-success))!important}.v-code-block--tab-highlightjs-androidstudio-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-failed))!important}.v-code-block--tab-highlightjs-androidstudio>div{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-text))}.v-code-block--tab-highlightjs-arduino-light{background-color:hsl(var(--v-cb-tab-highlightjs-arduino-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-arduino-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-arduino-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-arduino-light-icon{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon))!important}.v-code-block--tab-highlightjs-arduino-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-success))!important}.v-code-block--tab-highlightjs-arduino-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-failed))!important}.v-code-block--tab-highlightjs-arduino-light>div{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-text))}.v-code-block--tab-highlightjs-arta{background-color:hsl(var(--v-cb-tab-highlightjs-arta-bkg)/100%)!important}.v-code-block--tab-highlightjs-arta:hover{background-color:hsl(var(--v-cb-tab-highlightjs-arta-bkg)/50%)!important}.v-code-block--tab-highlightjs-arta-icon{color:hsl(var(--v-cb-tab-highlightjs-arta-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon))!important}.v-code-block--tab-highlightjs-arta-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-arta-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon-success))!important}.v-code-block--tab-highlightjs-arta-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-arta-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon-failed))!important}.v-code-block--tab-highlightjs-arta>div{color:hsl(var(--v-cb-tab-highlightjs-arta-text))}.v-code-block--tab-highlightjs-ascetic{background-color:hsl(var(--v-cb-tab-highlightjs-ascetic-bkg)/100%)!important}.v-code-block--tab-highlightjs-ascetic:hover{background-color:hsl(var(--v-cb-tab-highlightjs-ascetic-bkg)/50%)!important}.v-code-block--tab-highlightjs-ascetic-icon{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon))!important}.v-code-block--tab-highlightjs-ascetic-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-success))!important}.v-code-block--tab-highlightjs-ascetic-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-failed))!important}.v-code-block--tab-highlightjs-ascetic>div{color:hsl(var(--v-cb-tab-highlightjs-ascetic-text))}.v-code-block--tab-highlightjs-atom-one-dark-reasonable{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-text))}.v-code-block--tab-highlightjs-atom-one-dark{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon))!important}.v-code-block--tab-highlightjs-atom-one-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-dark>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-text))}.v-code-block--tab-highlightjs-atom-one-light{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-light-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon))!important}.v-code-block--tab-highlightjs-atom-one-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-light>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-text))}.v-code-block--tab-highlightjs-codepen-embed{background-color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-bkg)/100%)!important}.v-code-block--tab-highlightjs-codepen-embed:hover{background-color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-bkg)/50%)!important}.v-code-block--tab-highlightjs-codepen-embed-icon{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon))!important}.v-code-block--tab-highlightjs-codepen-embed-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-success))!important}.v-code-block--tab-highlightjs-codepen-embed-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-failed))!important}.v-code-block--tab-highlightjs-codepen-embed>div{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-text))}.v-code-block--tab-highlightjs-color-brewer{background-color:hsl(var(--v-cb-tab-highlightjs-color-brewer-bkg)/100%)!important}.v-code-block--tab-highlightjs-color-brewer:hover{background-color:hsl(var(--v-cb-tab-highlightjs-color-brewer-bkg)/50%)!important}.v-code-block--tab-highlightjs-color-brewer-icon{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon))!important}.v-code-block--tab-highlightjs-color-brewer-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-success))!important}.v-code-block--tab-highlightjs-color-brewer-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-failed))!important}.v-code-block--tab-highlightjs-color-brewer>div{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-text))}.v-code-block--tab-highlightjs-dark{background-color:hsl(var(--v-cb-tab-highlightjs-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon))!important}.v-code-block--tab-highlightjs-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon-success))!important}.v-code-block--tab-highlightjs-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon-failed))!important}.v-code-block--tab-highlightjs-dark>div{color:hsl(var(--v-cb-tab-highlightjs-dark-text))}.v-code-block--tab-highlightjs-devibeans{background-color:hsl(var(--v-cb-tab-highlightjs-devibeans-bkg)/100%)!important}.v-code-block--tab-highlightjs-devibeans:hover{background-color:hsl(var(--v-cb-tab-highlightjs-devibeans-bkg)/50%)!important}.v-code-block--tab-highlightjs-devibeans-icon{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon))!important}.v-code-block--tab-highlightjs-devibeans-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-success))!important}.v-code-block--tab-highlightjs-devibeans-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-failed))!important}.v-code-block--tab-highlightjs-devibeans>div{color:hsl(var(--v-cb-tab-highlightjs-devibeans-text))}.v-code-block--tab-highlightjs-docco{background-color:hsl(var(--v-cb-tab-highlightjs-docco-bkg)/100%)!important}.v-code-block--tab-highlightjs-docco:hover{background-color:hsl(var(--v-cb-tab-highlightjs-docco-bkg)/50%)!important}.v-code-block--tab-highlightjs-docco-icon{color:hsl(var(--v-cb-tab-highlightjs-docco-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon))!important}.v-code-block--tab-highlightjs-docco-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-docco-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon-success))!important}.v-code-block--tab-highlightjs-docco-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-docco-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon-failed))!important}.v-code-block--tab-highlightjs-docco>div{color:hsl(var(--v-cb-tab-highlightjs-docco-text))}.v-code-block--tab-highlightjs-far{background-color:hsl(var(--v-cb-tab-highlightjs-far-bkg)/100%)!important}.v-code-block--tab-highlightjs-far:hover{background-color:hsl(var(--v-cb-tab-highlightjs-far-bkg)/50%)!important}.v-code-block--tab-highlightjs-far-icon{color:hsl(var(--v-cb-tab-highlightjs-far-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon))!important}.v-code-block--tab-highlightjs-far-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-far-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon-success))!important}.v-code-block--tab-highlightjs-far-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-far-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon-failed))!important}.v-code-block--tab-highlightjs-far>div{color:hsl(var(--v-cb-tab-highlightjs-far-text))}.v-code-block--tab-highlightjs-felipec{background-color:hsl(var(--v-cb-tab-highlightjs-felipec-bkg)/100%)!important}.v-code-block--tab-highlightjs-felipec:hover{background-color:hsl(var(--v-cb-tab-highlightjs-felipec-bkg)/50%)!important}.v-code-block--tab-highlightjs-felipec-icon{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon))!important}.v-code-block--tab-highlightjs-felipec-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon-success))!important}.v-code-block--tab-highlightjs-felipec-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon-failed))!important}.v-code-block--tab-highlightjs-felipec>div{color:hsl(var(--v-cb-tab-highlightjs-felipec-text))}.v-code-block--tab-highlightjs-foundation{background-color:hsl(var(--v-cb-tab-highlightjs-foundation-bkg)/100%)!important}.v-code-block--tab-highlightjs-foundation:hover{background-color:hsl(var(--v-cb-tab-highlightjs-foundation-bkg)/50%)!important}.v-code-block--tab-highlightjs-foundation-icon{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon))!important}.v-code-block--tab-highlightjs-foundation-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon-success))!important}.v-code-block--tab-highlightjs-foundation-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon-failed))!important}.v-code-block--tab-highlightjs-foundation>div{color:hsl(var(--v-cb-tab-highlightjs-foundation-text))}.v-code-block--tab-highlightjs-github-dark-dimmed{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-bkg)/100%)!important}.v-code-block--tab-highlightjs-github-dark-dimmed:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon))!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-success))!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed))!important}.v-code-block--tab-highlightjs-github-dark-dimmed>div{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-text))}.v-code-block--tab-highlightjs-github-dark{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-github-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon))!important}.v-code-block--tab-highlightjs-github-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-success))!important}.v-code-block--tab-highlightjs-github-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-failed))!important}.v-code-block--tab-highlightjs-github-dark>div{color:hsl(var(--v-cb-tab-highlightjs-github-dark-text))}.v-code-block--tab-highlightjs-github{background-color:hsl(var(--v-cb-tab-highlightjs-github-bkg)/100%)!important}.v-code-block--tab-highlightjs-github:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-icon{color:hsl(var(--v-cb-tab-highlightjs-github-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon))!important}.v-code-block--tab-highlightjs-github-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon-success))!important}.v-code-block--tab-highlightjs-github-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon-failed))!important}.v-code-block--tab-highlightjs-github>div{color:hsl(var(--v-cb-tab-highlightjs-github-text))}.v-code-block--tab-highlightjs-gml{background-color:hsl(var(--v-cb-tab-highlightjs-gml-bkg)/100%)!important}.v-code-block--tab-highlightjs-gml:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gml-bkg)/50%)!important}.v-code-block--tab-highlightjs-gml-icon{color:hsl(var(--v-cb-tab-highlightjs-gml-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon))!important}.v-code-block--tab-highlightjs-gml-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gml-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon-success))!important}.v-code-block--tab-highlightjs-gml-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gml-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon-failed))!important}.v-code-block--tab-highlightjs-gml>div{color:hsl(var(--v-cb-tab-highlightjs-gml-text))}.v-code-block--tab-highlightjs-googlecode{background-color:hsl(var(--v-cb-tab-highlightjs-googlecode-bkg)/100%)!important}.v-code-block--tab-highlightjs-googlecode:hover{background-color:hsl(var(--v-cb-tab-highlightjs-googlecode-bkg)/50%)!important}.v-code-block--tab-highlightjs-googlecode-icon{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon))!important}.v-code-block--tab-highlightjs-googlecode-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-success))!important}.v-code-block--tab-highlightjs-googlecode-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-failed))!important}.v-code-block--tab-highlightjs-googlecode>div{color:hsl(var(--v-cb-tab-highlightjs-googlecode-text))}.v-code-block--tab-highlightjs-grayscale{background-color:hsl(var(--v-cb-tab-highlightjs-grayscale-bkg)/100%)!important}.v-code-block--tab-highlightjs-grayscale:hover{background-color:hsl(var(--v-cb-tab-highlightjs-grayscale-bkg)/50%)!important}.v-code-block--tab-highlightjs-grayscale-icon{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon))!important}.v-code-block--tab-highlightjs-grayscale-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-success))!important}.v-code-block--tab-highlightjs-grayscale-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-failed))!important}.v-code-block--tab-highlightjs-grayscale>div{color:hsl(var(--v-cb-tab-highlightjs-grayscale-text))}.v-code-block--tab-highlightjs-hybrid{background-color:hsl(var(--v-cb-tab-highlightjs-hybrid-bkg)/100%)!important}.v-code-block--tab-highlightjs-hybrid:hover{background-color:hsl(var(--v-cb-tab-highlightjs-hybrid-bkg)/50%)!important}.v-code-block--tab-highlightjs-hybrid-icon{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon))!important}.v-code-block--tab-highlightjs-hybrid-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-success))!important}.v-code-block--tab-highlightjs-hybrid-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-failed))!important}.v-code-block--tab-highlightjs-hybrid>div{color:hsl(var(--v-cb-tab-highlightjs-hybrid-text))}.v-code-block--tab-highlightjs-idea{background-color:hsl(var(--v-cb-tab-highlightjs-idea-bkg)/100%)!important}.v-code-block--tab-highlightjs-idea:hover{background-color:hsl(var(--v-cb-tab-highlightjs-idea-bkg)/50%)!important}.v-code-block--tab-highlightjs-idea-icon{color:hsl(var(--v-cb-tab-highlightjs-idea-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon))!important}.v-code-block--tab-highlightjs-idea-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-idea-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon-success))!important}.v-code-block--tab-highlightjs-idea-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-idea-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon-failed))!important}.v-code-block--tab-highlightjs-idea>div{color:hsl(var(--v-cb-tab-highlightjs-idea-text))}.v-code-block--tab-highlightjs-intellij-light{background-color:hsl(var(--v-cb-tab-highlightjs-intellij-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-intellij-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-intellij-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-intellij-light-icon{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon))!important}.v-code-block--tab-highlightjs-intellij-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-success))!important}.v-code-block--tab-highlightjs-intellij-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-failed))!important}.v-code-block--tab-highlightjs-intellij-light>div{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-text))}.v-code-block--tab-highlightjs-ir-black{background-color:hsl(var(--v-cb-tab-highlightjs-ir-black-bkg)/100%)!important}.v-code-block--tab-highlightjs-ir-black:hover{background-color:hsl(var(--v-cb-tab-highlightjs-ir-black-bkg)/50%)!important}.v-code-block--tab-highlightjs-ir-black-icon{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon))!important}.v-code-block--tab-highlightjs-ir-black-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-success))!important}.v-code-block--tab-highlightjs-ir-black-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-failed))!important}.v-code-block--tab-highlightjs-ir-black>div{color:hsl(var(--v-cb-tab-highlightjs-ir-black-text))}.v-code-block--tab-highlightjs-isbl-editor-dark{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-isbl-editor-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon))!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-success))!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed))!important}.v-code-block--tab-highlightjs-isbl-editor-dark>div{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-text))}.v-code-block--tab-highlightjs-isbl-editor-light{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-isbl-editor-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon))!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-success))!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-failed))!important}.v-code-block--tab-highlightjs-isbl-editor-light>div{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-text))}.v-code-block--tab-highlightjs-kimbie-dark{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-kimbie-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-kimbie-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon))!important}.v-code-block--tab-highlightjs-kimbie-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-success))!important}.v-code-block--tab-highlightjs-kimbie-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-failed))!important}.v-code-block--tab-highlightjs-kimbie-dark>div{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-text))}.v-code-block--tab-highlightjs-kimbie-light{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-kimbie-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-kimbie-light-icon{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon))!important}.v-code-block--tab-highlightjs-kimbie-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-success))!important}.v-code-block--tab-highlightjs-kimbie-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-failed))!important}.v-code-block--tab-highlightjs-kimbie-light>div{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-text))}.v-code-block--tab-highlightjs-lightfair{background-color:hsl(var(--v-cb-tab-highlightjs-lightfair-bkg)/100%)!important}.v-code-block--tab-highlightjs-lightfair:hover{background-color:hsl(var(--v-cb-tab-highlightjs-lightfair-bkg)/50%)!important}.v-code-block--tab-highlightjs-lightfair-icon{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon))!important}.v-code-block--tab-highlightjs-lightfair-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-success))!important}.v-code-block--tab-highlightjs-lightfair-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-failed))!important}.v-code-block--tab-highlightjs-lightfair>div{color:hsl(var(--v-cb-tab-highlightjs-lightfair-text))}.v-code-block--tab-highlightjs-lioshi{background-color:hsl(var(--v-cb-tab-highlightjs-lioshi-bkg)/100%)!important}.v-code-block--tab-highlightjs-lioshi:hover{background-color:hsl(var(--v-cb-tab-highlightjs-lioshi-bkg)/50%)!important}.v-code-block--tab-highlightjs-lioshi-icon{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon))!important}.v-code-block--tab-highlightjs-lioshi-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-success))!important}.v-code-block--tab-highlightjs-lioshi-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-failed))!important}.v-code-block--tab-highlightjs-lioshi>div{color:hsl(var(--v-cb-tab-highlightjs-lioshi-text))}.v-code-block--tab-highlightjs-magula{background-color:hsl(var(--v-cb-tab-highlightjs-magula-bkg)/100%)!important}.v-code-block--tab-highlightjs-magula:hover{background-color:hsl(var(--v-cb-tab-highlightjs-magula-bkg)/50%)!important}.v-code-block--tab-highlightjs-magula-icon{color:hsl(var(--v-cb-tab-highlightjs-magula-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon))!important}.v-code-block--tab-highlightjs-magula-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-magula-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon-success))!important}.v-code-block--tab-highlightjs-magula-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-magula-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon-failed))!important}.v-code-block--tab-highlightjs-magula>div{color:hsl(var(--v-cb-tab-highlightjs-magula-text))}.v-code-block--tab-highlightjs-mono-blue{background-color:hsl(var(--v-cb-tab-highlightjs-mono-blue-bkg)/100%)!important}.v-code-block--tab-highlightjs-mono-blue:hover{background-color:hsl(var(--v-cb-tab-highlightjs-mono-blue-bkg)/50%)!important}.v-code-block--tab-highlightjs-mono-blue-icon{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon))!important}.v-code-block--tab-highlightjs-mono-blue-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-success))!important}.v-code-block--tab-highlightjs-mono-blue-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-failed))!important}.v-code-block--tab-highlightjs-mono-blue>div{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-text))}.v-code-block--tab-highlightjs-monokai-sublime{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-bkg)/100%)!important}.v-code-block--tab-highlightjs-monokai-sublime:hover{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-bkg)/50%)!important}.v-code-block--tab-highlightjs-monokai-sublime-icon{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon))!important}.v-code-block--tab-highlightjs-monokai-sublime-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-success))!important}.v-code-block--tab-highlightjs-monokai-sublime-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-failed))!important}.v-code-block--tab-highlightjs-monokai-sublime>div{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-text))}.v-code-block--tab-highlightjs-monokai{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-bkg)/100%)!important}.v-code-block--tab-highlightjs-monokai:hover{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-bkg)/50%)!important}.v-code-block--tab-highlightjs-monokai-icon{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon))!important}.v-code-block--tab-highlightjs-monokai-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon-success))!important}.v-code-block--tab-highlightjs-monokai-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon-failed))!important}.v-code-block--tab-highlightjs-monokai>div{color:hsl(var(--v-cb-tab-highlightjs-monokai-text))}.v-code-block--tab-highlightjs-night-owl{background-color:hsl(var(--v-cb-tab-highlightjs-night-owl-bkg)/100%)!important}.v-code-block--tab-highlightjs-night-owl:hover{background-color:hsl(var(--v-cb-tab-highlightjs-night-owl-bkg)/50%)!important}.v-code-block--tab-highlightjs-night-owl-icon{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon))!important}.v-code-block--tab-highlightjs-night-owl-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-success))!important}.v-code-block--tab-highlightjs-night-owl-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-failed))!important}.v-code-block--tab-highlightjs-night-owl>div{color:hsl(var(--v-cb-tab-highlightjs-night-owl-text))}.v-code-block--tab-highlightjs-nnfx-dark{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-nnfx-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-nnfx-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon))!important}.v-code-block--tab-highlightjs-nnfx-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-success))!important}.v-code-block--tab-highlightjs-nnfx-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-failed))!important}.v-code-block--tab-highlightjs-nnfx-dark>div{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-text))}.v-code-block--tab-highlightjs-nnfx-light{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-nnfx-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-nnfx-light-icon{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon))!important}.v-code-block--tab-highlightjs-nnfx-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-success))!important}.v-code-block--tab-highlightjs-nnfx-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-failed))!important}.v-code-block--tab-highlightjs-nnfx-light>div{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-text))}.v-code-block--tab-highlightjs-nord{background-color:hsl(var(--v-cb-tab-highlightjs-nord-bkg)/100%)!important}.v-code-block--tab-highlightjs-nord:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nord-bkg)/50%)!important}.v-code-block--tab-highlightjs-nord-icon{color:hsl(var(--v-cb-tab-highlightjs-nord-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon))!important}.v-code-block--tab-highlightjs-nord-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nord-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon-success))!important}.v-code-block--tab-highlightjs-nord-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nord-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon-failed))!important}.v-code-block--tab-highlightjs-nord>div{color:hsl(var(--v-cb-tab-highlightjs-nord-text))}.v-code-block--tab-highlightjs-obsidian{background-color:hsl(var(--v-cb-tab-highlightjs-obsidian-bkg)/100%)!important}.v-code-block--tab-highlightjs-obsidian:hover{background-color:hsl(var(--v-cb-tab-highlightjs-obsidian-bkg)/50%)!important}.v-code-block--tab-highlightjs-obsidian-icon{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon))!important}.v-code-block--tab-highlightjs-obsidian-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-success))!important}.v-code-block--tab-highlightjs-obsidian-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-failed))!important}.v-code-block--tab-highlightjs-obsidian>div{color:hsl(var(--v-cb-tab-highlightjs-obsidian-text))}.v-code-block--tab-highlightjs-panda-syntax-dark{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-panda-syntax-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon))!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-success))!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed))!important}.v-code-block--tab-highlightjs-panda-syntax-dark>div{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-text))}.v-code-block--tab-highlightjs-panda-syntax-light{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-panda-syntax-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon))!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-success))!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-failed))!important}.v-code-block--tab-highlightjs-panda-syntax-light>div{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-text))}.v-code-block--tab-highlightjs-paraiso-dark{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-paraiso-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-paraiso-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon))!important}.v-code-block--tab-highlightjs-paraiso-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-success))!important}.v-code-block--tab-highlightjs-paraiso-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-failed))!important}.v-code-block--tab-highlightjs-paraiso-dark>div{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-text))}.v-code-block--tab-highlightjs-paraiso-light{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-paraiso-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-paraiso-light-icon{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon))!important}.v-code-block--tab-highlightjs-paraiso-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-success))!important}.v-code-block--tab-highlightjs-paraiso-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-failed))!important}.v-code-block--tab-highlightjs-paraiso-light>div{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-text))}.v-code-block--tab-highlightjs-purebasic{background-color:hsl(var(--v-cb-tab-highlightjs-purebasic-bkg)/100%)!important}.v-code-block--tab-highlightjs-purebasic:hover{background-color:hsl(var(--v-cb-tab-highlightjs-purebasic-bkg)/50%)!important}.v-code-block--tab-highlightjs-purebasic-icon{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon))!important}.v-code-block--tab-highlightjs-purebasic-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-success))!important}.v-code-block--tab-highlightjs-purebasic-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-failed))!important}.v-code-block--tab-highlightjs-purebasic>div{color:hsl(var(--v-cb-tab-highlightjs-purebasic-text))}.v-code-block--tab-highlightjs-qtcreator-dark{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-qtcreator-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon))!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-success))!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-failed))!important}.v-code-block--tab-highlightjs-qtcreator-dark>div{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-text))}.v-code-block--tab-highlightjs-qtcreator-light{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-qtcreator-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-qtcreator-light-icon{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon))!important}.v-code-block--tab-highlightjs-qtcreator-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-success))!important}.v-code-block--tab-highlightjs-qtcreator-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-failed))!important}.v-code-block--tab-highlightjs-qtcreator-light>div{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-text))}.v-code-block--tab-highlightjs-rainbow{background-color:hsl(var(--v-cb-tab-highlightjs-rainbow-bkg)/100%)!important}.v-code-block--tab-highlightjs-rainbow:hover{background-color:hsl(var(--v-cb-tab-highlightjs-rainbow-bkg)/50%)!important}.v-code-block--tab-highlightjs-rainbow-icon{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon))!important}.v-code-block--tab-highlightjs-rainbow-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-success))!important}.v-code-block--tab-highlightjs-rainbow-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-failed))!important}.v-code-block--tab-highlightjs-rainbow>div{color:hsl(var(--v-cb-tab-highlightjs-rainbow-text))}.v-code-block--tab-highlightjs-routeros{background-color:hsl(var(--v-cb-tab-highlightjs-routeros-bkg)/100%)!important}.v-code-block--tab-highlightjs-routeros:hover{background-color:hsl(var(--v-cb-tab-highlightjs-routeros-bkg)/50%)!important}.v-code-block--tab-highlightjs-routeros-icon{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon))!important}.v-code-block--tab-highlightjs-routeros-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon-success))!important}.v-code-block--tab-highlightjs-routeros-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon-failed))!important}.v-code-block--tab-highlightjs-routeros>div{color:hsl(var(--v-cb-tab-highlightjs-routeros-text))}.v-code-block--tab-highlightjs-school-book{background-color:hsl(var(--v-cb-tab-highlightjs-school-book-bkg)/100%)!important}.v-code-block--tab-highlightjs-school-book:hover{background-color:hsl(var(--v-cb-tab-highlightjs-school-book-bkg)/50%)!important}.v-code-block--tab-highlightjs-school-book-icon{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon))!important}.v-code-block--tab-highlightjs-school-book-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon-success))!important}.v-code-block--tab-highlightjs-school-book-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon-failed))!important}.v-code-block--tab-highlightjs-school-book>div{color:hsl(var(--v-cb-tab-highlightjs-school-book-text))}.v-code-block--tab-highlightjs-shades-of-purple{background-color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-bkg)/100%)!important}.v-code-block--tab-highlightjs-shades-of-purple:hover{background-color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-bkg)/50%)!important}.v-code-block--tab-highlightjs-shades-of-purple-icon{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon))!important}.v-code-block--tab-highlightjs-shades-of-purple-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-success))!important}.v-code-block--tab-highlightjs-shades-of-purple-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-failed))!important}.v-code-block--tab-highlightjs-shades-of-purple>div{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-text))}.v-code-block--tab-highlightjs-srcery{background-color:hsl(var(--v-cb-tab-highlightjs-srcery-bkg)/100%)!important}.v-code-block--tab-highlightjs-srcery:hover{background-color:hsl(var(--v-cb-tab-highlightjs-srcery-bkg)/50%)!important}.v-code-block--tab-highlightjs-srcery-icon{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon))!important}.v-code-block--tab-highlightjs-srcery-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon-success))!important}.v-code-block--tab-highlightjs-srcery-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon-failed))!important}.v-code-block--tab-highlightjs-srcery>div{color:hsl(var(--v-cb-tab-highlightjs-srcery-text))}.v-code-block--tab-highlightjs-stackoverflow-dark{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-stackoverflow-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon))!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-success))!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed))!important}.v-code-block--tab-highlightjs-stackoverflow-dark>div{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-text))}.v-code-block--tab-highlightjs-stackoverflow-light{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-stackoverflow-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon))!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-success))!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-failed))!important}.v-code-block--tab-highlightjs-stackoverflow-light>div{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-text))}.v-code-block--tab-highlightjs-sunburst{background-color:hsl(var(--v-cb-tab-highlightjs-sunburst-bkg)/100%)!important}.v-code-block--tab-highlightjs-sunburst:hover{background-color:hsl(var(--v-cb-tab-highlightjs-sunburst-bkg)/50%)!important}.v-code-block--tab-highlightjs-sunburst-icon{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon))!important}.v-code-block--tab-highlightjs-sunburst-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-success))!important}.v-code-block--tab-highlightjs-sunburst-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-failed))!important}.v-code-block--tab-highlightjs-sunburst>div{color:hsl(var(--v-cb-tab-highlightjs-sunburst-text))}.v-code-block--tab-highlightjs-tokyo-night-dark{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-tokyo-night-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon))!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-success))!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed))!important}.v-code-block--tab-highlightjs-tokyo-night-dark>div{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-text))}.v-code-block--tab-highlightjs-tokyo-night-light{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-tokyo-night-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon))!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-success))!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-failed))!important}.v-code-block--tab-highlightjs-tokyo-night-light>div{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-text))}.v-code-block--tab-highlightjs-tomorrow-night-blue{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-bkg)/100%)!important}.v-code-block--tab-highlightjs-tomorrow-night-blue:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-bkg)/50%)!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue>div{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-text))}.v-code-block--tab-highlightjs-tomorrow-night-bright{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-bkg)/100%)!important}.v-code-block--tab-highlightjs-tomorrow-night-bright:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-bkg)/50%)!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright>div{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-text))}.v-code-block--tab-highlightjs-vs{background-color:hsl(var(--v-cb-tab-highlightjs-vs-bkg)/100%)!important}.v-code-block--tab-highlightjs-vs:hover{background-color:hsl(var(--v-cb-tab-highlightjs-vs-bkg)/50%)!important}.v-code-block--tab-highlightjs-vs-icon{color:hsl(var(--v-cb-tab-highlightjs-vs-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon))!important}.v-code-block--tab-highlightjs-vs-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-vs-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon-success))!important}.v-code-block--tab-highlightjs-vs-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-vs-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon-failed))!important}.v-code-block--tab-highlightjs-vs>div{color:hsl(var(--v-cb-tab-highlightjs-vs-text))}.v-code-block--tab-highlightjs-vs2015{background-color:hsl(var(--v-cb-tab-highlightjs-vs2015-bkg)/100%)!important}.v-code-block--tab-highlightjs-vs2015:hover{background-color:hsl(var(--v-cb-tab-highlightjs-vs2015-bkg)/50%)!important}.v-code-block--tab-highlightjs-vs2015-icon{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon))!important}.v-code-block--tab-highlightjs-vs2015-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-success))!important}.v-code-block--tab-highlightjs-vs2015-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-failed))!important}.v-code-block--tab-highlightjs-vs2015>div{color:hsl(var(--v-cb-tab-highlightjs-vs2015-text))}.v-code-block--tab-highlightjs-xcode{background-color:hsl(var(--v-cb-tab-highlightjs-xcode-bkg)/100%)!important}.v-code-block--tab-highlightjs-xcode:hover{background-color:hsl(var(--v-cb-tab-highlightjs-xcode-bkg)/50%)!important}.v-code-block--tab-highlightjs-xcode-icon{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon))!important}.v-code-block--tab-highlightjs-xcode-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon-success))!important}.v-code-block--tab-highlightjs-xcode-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon-failed))!important}.v-code-block--tab-highlightjs-xcode>div{color:hsl(var(--v-cb-tab-highlightjs-xcode-text))}.v-code-block--tab-highlightjs-xt256{background-color:hsl(var(--v-cb-tab-highlightjs-xt256-bkg)/100%)!important}.v-code-block--tab-highlightjs-xt256:hover{background-color:hsl(var(--v-cb-tab-highlightjs-xt256-bkg)/50%)!important}.v-code-block--tab-highlightjs-xt256-icon{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon))!important}.v-code-block--tab-highlightjs-xt256-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon-success))!important}.v-code-block--tab-highlightjs-xt256-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon-failed))!important}.v-code-block--tab-highlightjs-xt256>div{color:hsl(var(--v-cb-tab-highlightjs-xt256-text))}.v-code-block--tab-highlightjs-base16-onedark{background-color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-bkg)/100%)!important}.v-code-block--tab-highlightjs-base16-onedark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-bkg)/50%)!important}.v-code-block--tab-highlightjs-base16-onedark-icon{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon))!important}.v-code-block--tab-highlightjs-base16-onedark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-success))!important}.v-code-block--tab-highlightjs-base16-onedark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-failed))!important}.v-code-block--tab-highlightjs-base16-onedark>div{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-text))}`)),document.head.appendChild(i)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
