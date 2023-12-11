var Is = Object.defineProperty;
var Fs = (e, t, n) => t in e ? Is(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var He = (e, t, n) => (Fs(e, typeof t != "symbol" ? t + "" : t, n), n);
import { jsx as I, jsxs as zn, Fragment as ks } from "react/jsx-runtime";
import * as Ye from "react";
import Pe, { useEffect as Ge, useLayoutEffect as To, createContext as Hn, useMemo as fn, useContext as Vt, useRef as Mt, useSyncExternalStore as _o, useInsertionEffect as Ws, useState as mn, useReducer as js, useId as $o, forwardRef as It, Children as Ue, cloneElement as cn, isValidElement as Oo, useCallback as Co, createElement as Ls, memo as Mr, Fragment as Bs } from "react";
import zs, { createPortal as Hs } from "react-dom";
function Xs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o && Object.defineProperty(e, s, o.get ? o : {
            enumerable: !0,
            get: () => r[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const Ro = "__reactResponderId", Ys = !!(typeof window < "u" && window.document && window.document.createElement), Ir = (e) => {
  if (e && e.nodeType === 1 && e.getBoundingClientRect)
    return e.getBoundingClientRect();
};
function Ks(e) {
  var t;
  if (e.type === "selectionchange") {
    const n = (t = window.getSelection()) == null ? void 0 : t.anchorNode;
    return Fr(n);
  } else
    return e.composedPath != null ? e.composedPath() : Fr(e.target);
}
function Fr(e) {
  const t = [];
  for (; e != null && e !== document.body; )
    t.push(e), e = e.parentNode;
  return t;
}
function Gs(e) {
  return e != null ? e[Ro] : null;
}
function Us(e, t) {
  e != null && (e[Ro] = t);
}
function qs(e) {
  const t = [], n = [], r = Ks(e);
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = Gs(o);
    i != null && (t.push(i), n.push(o));
  }
  return { idPath: t, nodePath: n };
}
function Zs(e, t) {
  let n = e.length, r = t.length;
  if (
    // If either path is empty
    n === 0 || r === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    e[n - 1] !== t[r - 1]
  )
    return null;
  let s = e[0], o = 0, i = t[0], a = 0;
  n - r > 0 && (o = n - r, s = e[o], n = r), r - n > 0 && (a = r - n, i = t[a], r = n);
  let l = n;
  for (; l--; ) {
    if (s === i)
      return s;
    s = e[o++], i = t[a++];
  }
  return null;
}
function Js(e, t) {
  if (!t || t.length === 0)
    return !1;
  for (let n = 0; n < t.length; n++) {
    const r = t[n].target;
    if (r != null && e.contains(r))
      return !0;
  }
  return !1;
}
function Qs(e) {
  return e.type === "selectionchange" ? ti() : e.type === "select";
}
function ei(e) {
  const { altKey: t, button: n, buttons: r, ctrlKey: s, type: o } = e, i = o === "touchstart" || o === "touchmove", a = o === "mousedown" && (n === 0 || r === 1), l = o === "mousemove" && r === 1, c = t === !1 && s === !1;
  return !!(i || a && c || l && c);
}
function ti() {
  const e = window.getSelection();
  if (!e)
    return !1;
  const t = e.toString(), n = e.anchorNode, r = e.focusNode, s = n && n.nodeType === window.Node.TEXT_NODE || r && r.nodeType === window.Node.TEXT_NODE;
  return t.length >= 1 && t !== `
` && !!s;
}
const kr = () => {
}, ni = {}, ri = [];
function Wr(e) {
  return e > 20 ? e % 20 : e;
}
function Po(e, t) {
  let n, r = !1, s, o;
  const i = e.changedTouches, a = e.type, l = e.metaKey === !0, c = e.shiftKey === !0, u = (i == null ? void 0 : i[0].force) || 0, d = Wr((i == null ? void 0 : i[0].identifier) || 0), p = (i == null ? void 0 : i[0].clientX) || e.clientX, f = (i == null ? void 0 : i[0].clientY) || e.clientY, y = (i == null ? void 0 : i[0].pageX) || e.pageX, b = (i == null ? void 0 : i[0].pageY) || e.pageY, m = typeof e.preventDefault == "function" ? e.preventDefault.bind(e) : kr, S = e.timeStamp;
  function N(T) {
    return Array.prototype.slice.call(T).map((_) => ({
      force: _.force,
      identifier: Wr(_.identifier),
      get locationX() {
        return g(_.clientX);
      },
      get locationY() {
        return $(_.clientY);
      },
      pageX: _.pageX,
      pageY: _.pageY,
      target: _.target,
      timestamp: S
    }));
  }
  if (i != null)
    s = N(i), o = N(e.touches);
  else {
    const T = [
      {
        force: u,
        identifier: d,
        get locationX() {
          return g(p);
        },
        get locationY() {
          return $(f);
        },
        pageX: y,
        pageY: b,
        target: e.target,
        timestamp: S
      }
    ];
    s = T, o = a === "mouseup" || a === "dragstart" ? ri : T;
  }
  const w = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: e.defaultPrevented,
    dispatchConfig: ni,
    eventPhase: e.eventPhase,
    isDefaultPrevented() {
      return e.defaultPrevented;
    },
    isPropagationStopped() {
      return r;
    },
    isTrusted: e.isTrusted,
    nativeEvent: {
      altKey: !1,
      ctrlKey: !1,
      metaKey: l,
      shiftKey: c,
      changedTouches: s,
      force: u,
      identifier: d,
      get locationX() {
        return g(p);
      },
      get locationY() {
        return $(f);
      },
      pageX: y,
      pageY: b,
      target: e.target,
      timestamp: S,
      touches: o,
      type: a
    },
    persist: kr,
    preventDefault: m,
    stopPropagation() {
      r = !0;
    },
    target: e.target,
    timeStamp: S,
    touchHistory: t.touchHistory
  };
  function g(T) {
    if (n = n || Ir(w.currentTarget), n)
      return T - n.left;
  }
  function $(T) {
    if (n = n || Ir(w.currentTarget), n)
      return T - n.top;
  }
  return w;
}
const oi = "mousedown", si = "mousemove", ii = "mouseup", ai = "dragstart", ci = "touchstart", li = "touchmove", ui = "touchend", di = "touchcancel", fi = "scroll", mi = "select", pi = "selectionchange";
function Ao(e) {
  return e === ci || e === oi;
}
function Do(e) {
  return e === li || e === si;
}
function Vo(e) {
  return e === ui || e === ii || Mo(e);
}
function Mo(e) {
  return e === di || e === ai;
}
function hi(e) {
  return e === fi;
}
function gi(e) {
  return e === mi || e === pi;
}
const ln = 20;
function ye(e) {
  return e.timeStamp || e.timestamp;
}
function bi(e) {
  return {
    touchActive: !0,
    startPageX: e.pageX,
    startPageY: e.pageY,
    startTimeStamp: ye(e),
    currentPageX: e.pageX,
    currentPageY: e.pageY,
    currentTimeStamp: ye(e),
    previousPageX: e.pageX,
    previousPageY: e.pageY,
    previousTimeStamp: ye(e)
  };
}
function Si(e, t) {
  e.touchActive = !0, e.startPageX = t.pageX, e.startPageY = t.pageY, e.startTimeStamp = ye(t), e.currentPageX = t.pageX, e.currentPageY = t.pageY, e.currentTimeStamp = ye(t), e.previousPageX = t.pageX, e.previousPageY = t.pageY, e.previousTimeStamp = ye(t);
}
function or({ identifier: e }) {
  return e == null && console.error("Touch object is missing identifier."), process.env.NODE_ENV === "development" && e > ln && console.error(
    "Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.",
    e,
    ln
  ), e;
}
function yi(e, t) {
  const n = or(e), r = t.touchBank[n];
  r ? Si(r, e) : t.touchBank[n] = bi(e), t.mostRecentTimeStamp = ye(e);
}
function xi(e, t) {
  const n = t.touchBank[or(e)];
  n ? (n.touchActive = !0, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = ye(e), t.mostRecentTimeStamp = ye(e)) : console.warn(
    `Cannot record touch move without a touch start.
`,
    `Touch Move: ${Io(e)}
`,
    `Touch Bank: ${Fo(t)}`
  );
}
function vi(e, t) {
  const n = t.touchBank[or(e)];
  n ? (n.touchActive = !1, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = ye(e), t.mostRecentTimeStamp = ye(e)) : console.warn(
    `Cannot record touch end without a touch start.
`,
    `Touch End: ${Io(e)}
`,
    `Touch Bank: ${Fo(t)}`
  );
}
function Io(e) {
  return JSON.stringify({
    identifier: e.identifier,
    pageX: e.pageX,
    pageY: e.pageY,
    timestamp: ye(e)
  });
}
function Fo(e) {
  const { touchBank: t } = e;
  let n = JSON.stringify(t.slice(0, ln));
  return t.length > ln && (n += ` (original size: ${t.length})`), n;
}
class Ni {
  constructor() {
    He(this, "_touchHistory", {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    });
  }
  recordTouchTrack(t, n) {
    var s, o;
    const r = this._touchHistory;
    if (Do(t))
      n.changedTouches.forEach((i) => xi(i, r));
    else if (Ao(t))
      n.changedTouches.forEach((i) => yi(i, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1 && (r.indexOfSingleActiveTouch = n.touches[0].identifier);
    else if (Vo(t) && (n.changedTouches.forEach((i) => vi(i, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1)) {
      const { touchBank: i } = r;
      for (let a = 0; a < i.length; a++)
        if ((s = i[a]) != null && s.touchActive) {
          r.indexOfSingleActiveTouch = a;
          break;
        }
      process.env.NODE_ENV === "development" && ((o = i[r.indexOfSingleActiveTouch]) != null && o.touchActive || console.error("Cannot find single active touch."));
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}
const Ei = {}, jr = [
  "onStartShouldSetResponderCapture",
  "onStartShouldSetResponder",
  { bubbles: !0 }
], Lr = [
  "onMoveShouldSetResponderCapture",
  "onMoveShouldSetResponder",
  { bubbles: !0 }
], wi = [
  "onScrollShouldSetResponderCapture",
  "onScrollShouldSetResponder",
  { bubbles: !1 }
], Ti = {
  touchstart: jr,
  mousedown: jr,
  touchmove: Lr,
  mousemove: Lr,
  scroll: wi
}, Xn = { id: null, idPath: null, node: null }, un = /* @__PURE__ */ new Map();
let We = !1, _e = 0, $e = {
  id: null,
  node: null,
  idPath: null
};
const Yn = new Ni();
function Ft(e) {
  $e = e;
}
function kt(e) {
  return un.get(e) ?? Ei;
}
function wn(e) {
  const t = e.type, n = e.target;
  if (t === "touchstart" && (We = !0), (t === "touchmove" || _e > 1) && (We = !1), // Ignore browser emulated mouse events
  t === "mousedown" && We || t === "mousemove" && We || // Ignore mousemove if a mousedown didn't occur first
  t === "mousemove" && _e < 1)
    return;
  if (We && t === "mouseup") {
    _e === 0 && (We = !1);
    return;
  }
  const r = Ao(t) && ei(e), s = Do(t), o = Vo(t), i = hi(t), a = gi(t), l = Po(e, Yn);
  (r || s || o) && (e.touches ? _e = e.touches.length : r ? _e = 1 : o && (_e = 0), Yn.recordTouchTrack(
    t,
    l.nativeEvent
  ));
  let c = qs(e), u = !1, d;
  if (r || s || i && _e > 0) {
    const p = $e.idPath, f = c.idPath;
    if (p != null && f != null) {
      const y = Zs(
        p,
        f
      );
      if (y != null) {
        const b = f.indexOf(y) + (y === $e.id ? 1 : 0);
        c = {
          idPath: f.slice(b),
          nodePath: c.nodePath.slice(b)
        };
      } else
        c = null;
    }
    c != null && (d = _i(c, e, l), d != null && ($i(l, d), u = !0));
  }
  if ($e.id != null && $e.node != null) {
    const { id: p, node: f } = $e, {
      onResponderStart: y,
      onResponderMove: b,
      onResponderEnd: m,
      onResponderRelease: S,
      onResponderTerminate: N,
      onResponderTerminationRequest: w
    } = kt(p);
    if (l.bubbles = !1, l.cancelable = !1, l.currentTarget = f, r)
      y != null && (l.dispatchConfig.registrationName = "onResponderStart", y(l));
    else if (s)
      b != null && (l.dispatchConfig.registrationName = "onResponderMove", b(l));
    else {
      const g = Mo(t) || // native context menu
      t === "contextmenu" || // window blur
      t === "blur" && n === window || // responder (or ancestors) blur
      t === "blur" && n.contains(f) && e.relatedTarget !== f || // native scroll without using a pointer
      i && _e === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      i && n.contains(f) && n !== f || // native select/selectionchange on node
      a && Qs(e), $ = o && !g && !Js(f, e.touches);
      if (o && m != null && (l.dispatchConfig.registrationName = "onResponderEnd", m(l)), $ && (S != null && (l.dispatchConfig.registrationName = "onResponderRelease", S(l)), Ft(Xn)), g) {
        let T = !0;
        (t === "contextmenu" || t === "scroll" || t === "selectionchange") && (u ? T = !1 : w != null && (l.dispatchConfig.registrationName = "onResponderTerminationRequest", w(l) === !1 && (T = !1))), T && (N != null && (l.dispatchConfig.registrationName = "onResponderTerminate", N(l)), Ft(Xn), We = !1, _e = 0);
      }
    }
  }
}
function _i(e, t, n) {
  const r = Ti[t.type];
  if (r != null) {
    const { idPath: s, nodePath: o } = e, i = r[0], a = r[1], { bubbles: l } = r[2], c = function(u, d, p) {
      const f = kt(u)[p];
      if (f != null && (n.currentTarget = d, f(n) === !0)) {
        const y = s.slice(s.indexOf(u));
        return { id: u, node: d, idPath: y };
      }
    };
    for (let u = s.length - 1; u >= 0; u--) {
      const d = s[u], p = o[u], f = c(d, p, i);
      if (f != null)
        return f;
      if (n.isPropagationStopped() === !0)
        return;
    }
    if (l)
      for (let u = 0; u < s.length; u++) {
        const d = s[u], p = o[u], f = c(d, p, a);
        if (f != null)
          return f;
        if (n.isPropagationStopped() === !0)
          return;
      }
    else {
      const u = s[0], d = o[0];
      if (t.target === d)
        return c(u, d, a);
    }
  }
}
function $i(e, t) {
  const { id: n, node: r } = $e, { id: s, node: o } = t, { onResponderGrant: i, onResponderReject: a } = kt(s);
  if (e.bubbles = !1, e.cancelable = !1, e.currentTarget = o, n == null)
    i != null && (e.currentTarget = o, e.dispatchConfig.registrationName = "onResponderGrant", i(e)), Ft(t);
  else {
    const { onResponderTerminate: l, onResponderTerminationRequest: c } = kt(n);
    let u = !0;
    c != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminationRequest", c(e) === !1 && (u = !1)), u ? (l != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminate", l(e)), i != null && (e.currentTarget = o, e.dispatchConfig.registrationName = "onResponderGrant", i(e)), Ft(t)) : a != null && (e.currentTarget = o, e.dispatchConfig.registrationName = "onResponderReject", a(e));
  }
}
const Oi = ["blur", "scroll"], Ci = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
], Br = Symbol();
function Ri() {
  Ys && !window[Br] && (window.addEventListener("blur", wn), Ci.forEach((e) => {
    document.addEventListener(e, wn);
  }), Oi.forEach((e) => {
    document.addEventListener(e, wn, !0);
  }), window[Br] = !0);
}
function Pi(e, t, n) {
  Us(t, e), un.set(e, n);
}
function zr(e) {
  $e.id === e && Ai(), un.has(e) && un.delete(e);
}
function Ai() {
  const { id: e, node: t } = $e;
  if (e != null && t != null) {
    const { onResponderTerminate: n } = kt(e);
    if (n != null) {
      const r = Po({}, Yn);
      r.currentTarget = t, n(r);
    }
    Ft(Xn);
  }
  We = !1, _e = 0;
}
function Di() {
  return $e.node;
}
const Vi = {};
function Mi(e, t = Vi) {
  const n = Ye.useId(), r = Ye.useRef(!1);
  Ye.useEffect(() => (Ri(), () => {
    zr(n);
  }), [n]), Ye.useEffect(() => {
    const {
      onMoveShouldSetResponder: s,
      onMoveShouldSetResponderCapture: o,
      onScrollShouldSetResponder: i,
      onScrollShouldSetResponderCapture: a,
      onSelectionChangeShouldSetResponder: l,
      onSelectionChangeShouldSetResponderCapture: c,
      onStartShouldSetResponder: u,
      onStartShouldSetResponderCapture: d
    } = t, p = s != null || o != null || i != null || a != null || l != null || c != null || u != null || d != null, f = e.current;
    p ? (Pi(n, f, t), r.current = !0) : r.current && (zr(n), r.current = !1);
  }, [t, e, n]), process.env.NODE_ENV === "development" && (Ye.useDebugValue({
    isResponder: e.current === Di()
  }), Ye.useDebugValue(t));
}
function ko(e, t, { checkDefaultPrevented: n = !0 } = {}) {
  return !e || !t ? t || e || void 0 : function(r) {
    if (e == null || e(r), !r || !(n && "defaultPrevented" in r) || // @ts-ignore
    "defaultPrevented" in r && !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
const Wt = !0, Wo = typeof window < "u", Ke = !Wo, we = Wo, sr = Ke ? Ge : To, Ii = "web", jo = {
  placeholderTextColor: !0
}, Lo = {
  ...jo
}, Bo = {
  color: !0,
  ...jo,
  textDecorationColor: !0,
  textShadowColor: !0
}, at = {
  radius: {
    borderRadius: !0,
    borderTopLeftRadius: !0,
    borderTopRightRadius: !0,
    borderBottomLeftRadius: !0,
    borderBottomRightRadius: !0,
    // logical
    borderStartStartRadius: !0,
    borderStartEndRadius: !0,
    borderEndStartRadius: !0,
    borderEndEndRadius: !0
  },
  size: {
    width: !0,
    height: !0,
    minWidth: !0,
    minHeight: !0,
    maxWidth: !0,
    maxHeight: !0
  },
  zIndex: {
    zIndex: !0
  },
  color: {
    backgroundColor: !0,
    borderColor: !0,
    borderBlockStartColor: !0,
    borderBlockEndColor: !0,
    borderBlockColor: !0,
    borderBottomColor: !0,
    borderTopColor: !0,
    borderLeftColor: !0,
    borderRightColor: !0,
    borderEndColor: !0,
    borderStartColor: !0,
    shadowColor: !0,
    ...Bo,
    outlineColor: !0
  }
}, ir = {
  WebkitLineClamp: !0,
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  columnCount: !0,
  flex: !0,
  flexGrow: !0,
  flexOrder: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  fontWeight: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowGap: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnGap: !0,
  gridColumnStart: !0,
  lineClamp: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  scale: !0,
  scaleX: !0,
  scaleY: !0,
  scaleZ: !0,
  shadowOpacity: !0
}, ar = {
  x: !0,
  y: !0,
  scale: !0,
  perspective: !0,
  scaleX: !0,
  scaleY: !0,
  skewX: !0,
  skewY: !0,
  matrix: !0,
  rotate: !0,
  rotateY: !0,
  rotateX: !0,
  rotateZ: !0
}, zo = {
  backfaceVisibility: !0,
  borderBottomEndRadius: !0,
  borderBottomStartRadius: !0,
  borderBottomWidth: !0,
  borderLeftWidth: !0,
  borderRightWidth: !0,
  borderStyle: !0,
  borderTopEndRadius: !0,
  borderTopStartRadius: !0,
  borderTopWidth: !0,
  borderWidth: !0,
  transform: !0,
  alignContent: !0,
  alignItems: !0,
  alignSelf: !0,
  borderEndWidth: !0,
  borderStartWidth: !0,
  bottom: !0,
  display: !0,
  end: !0,
  flexBasis: !0,
  flexDirection: !0,
  flexWrap: !0,
  gap: !0,
  columnGap: !0,
  rowGap: !0,
  justifyContent: !0,
  left: !0,
  margin: !0,
  marginBlockEnd: !0,
  marginBlockStart: !0,
  marginInlineEnd: !0,
  marginInline: !0,
  marginInlineStart: !0,
  marginBottom: !0,
  marginEnd: !0,
  marginHorizontal: !0,
  marginLeft: !0,
  marginRight: !0,
  marginStart: !0,
  marginTop: !0,
  marginVertical: !0,
  overflow: !0,
  padding: !0,
  paddingBottom: !0,
  paddingInline: !0,
  paddingBlock: !0,
  paddingBlockStart: !0,
  paddingInlineEnd: !0,
  paddingInlineStart: !0,
  paddingEnd: !0,
  paddingHorizontal: !0,
  paddingLeft: !0,
  paddingRight: !0,
  paddingStart: !0,
  paddingTop: !0,
  paddingVertical: !0,
  position: !0,
  right: !0,
  start: !0,
  top: !0,
  direction: !0,
  shadowOffset: !0,
  shadowRadius: !0,
  ...at.color,
  ...at.radius,
  ...at.size,
  ...at.radius,
  ...Lo,
  ...ar,
  ...ir,
  // RN doesn't support specific border styles per-edge
  borderBottomStyle: !0,
  borderTopStyle: !0,
  borderLeftStyle: !0,
  borderRightStyle: !0,
  overflowX: !0,
  overflowY: !0,
  userSelect: !0,
  cursor: !0,
  contain: !0,
  pointerEvents: !0,
  boxSizing: !0,
  boxShadow: !0,
  outlineStyle: !0,
  outlineOffset: !0,
  outlineWidth: !0
}, Fi = {
  fontFamily: !0,
  fontSize: !0,
  fontStyle: !0,
  fontWeight: !0,
  letterSpacing: !0,
  lineHeight: !0,
  textTransform: !0
}, Ho = {
  ...Fi,
  textAlign: !0,
  textDecorationLine: !0,
  textDecorationStyle: !0,
  ...Bo,
  textShadowOffset: !0,
  textShadowRadius: !0,
  whiteSpace: !0,
  wordWrap: !0,
  textOverflow: !0,
  textDecorationDistance: !0,
  userSelect: !0,
  selectable: !0,
  cursor: !0,
  WebkitLineClamp: !0,
  WebkitBoxOrient: !0
}, Xo = {
  ...zo,
  ...Ho
}, ki = Xo, Kn = {
  enterStyle: !0,
  exitStyle: !0,
  hoverStyle: !0,
  pressStyle: !0,
  focusStyle: !0
}, ut = {
  ...Kn,
  ...zo
}, _t = /* @__PURE__ */ new Map(), cr = (e, t = 10) => {
  if (_t.has(e))
    return _t.get(e);
  let n = 0, r = "";
  const s = e.length;
  for (let i = 0; i < s; i++) {
    const a = e.charCodeAt(i);
    if (t !== "strict" && (a === 46 && (r += "d0t"), ji(a) && s <= t)) {
      r += e[i];
      continue;
    }
    n = Wi(n, e[i]);
  }
  const o = r + (n ? Math.abs(n) : "");
  return _t.size > 1e4 && _t.clear(), _t.set(e, o), o;
}, Wi = (e, t) => Math.imul(31, e) + t.charCodeAt(0) | 0;
function ji(e) {
  return (
    // A-Z
    e >= 65 && e <= 90 || // a-z
    e >= 97 && e <= 122 || // _
    e === 95 || // -
    e === 45 || // 0-9
    e >= 48 && e <= 57
  );
}
let jt;
const Oe = () => {
  if (!jt)
    throw new Error(
      process.env.NODE_ENV !== "production" ? "Missing tamagui config, you either have a duplicate config, or haven't set it up. Be sure createTamagui is called before rendering. Also, make sure all of your tamagui dependencies are on the same version (`tamagui`, `@tamagui/package-name`, etc.)" : "Err0"
    );
  return jt;
}, Li = () => jt.themes, Bi = /* @__PURE__ */ new Set(), zi = (e) => {
  jt ? e(jt) : Bi.add(e);
}, Yo = "isVar", Hi = (e, t = !1) => {
  if (!t && Ae(e))
    return e;
  const { key: n, name: r, val: s } = e;
  return {
    [Yo]: !0,
    key: n,
    name: t ? "" : cr(r, 40),
    val: s,
    variable: t ? `var(--${r})` : Ki(r)
  };
};
function Gn(e, t = !1) {
  return Ae(e) ? !t && Wt && e.variable ? e.variable : `${e.val}` : `${e || ""}`;
}
function Ae(e) {
  return e && typeof e == "object" && Yo in e;
}
function Xi(e) {
  if (lr(!0), Ae(e))
    return Gn(e);
  const t = Oe().tokensParsed;
  return Gn(t[e] ?? e);
}
let Ko = !1;
const lr = (e) => Ko = e, Yi = () => Ko;
function Go(e) {
  return Ae(e) ? (lr(!0), e.val) : e;
}
const Ki = (e, t = !0) => {
  if (process.env.NODE_ENV === "development" && (!e || typeof e != "string"))
    throw new Error(`createCSSVariable expected string, got: ${e}`);
  const n = cr(e, 60);
  return t ? `var(--${n})` : n;
}, Hr = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new Map(), Pt = {}, Xr = {}, Lt = {}, Gi = () => Pt;
function Uo(e, t, n) {
  const r = t.indexOf("transform:");
  if (r === -1) {
    process.env.NODE_ENV === "development" && console.error(`❌ Invalid transform, likely used deg/% improperly ${e}`);
    return;
  }
  const s = r + 10, o = t.indexOf(";"), i = t.slice(s, o);
  if (!Lt[e])
    return Lt[e] = i, !0;
}
let Yr = null;
function Ui(e = !1, t) {
  if (process.env.NODE_ENV === "test" || !we)
    return;
  let n;
  const r = document.styleSheets || [], s = Yr, o = new Set(r);
  if (document.styleSheets) {
    for (const i of o)
      if (i) {
        const a = Gr(i, !1, e, t);
        a && (n = a);
      }
    Yr = o;
  }
  if (s)
    for (const i of s)
      i && !o.has(i) && Gr(i, !0);
  return n;
}
function qo(e, t = !1) {
  const n = (dn.get(e) || 0) + (t ? -1 : 1);
  return dn.set(e, n), n;
}
const Kr = process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES, qi = Kr ? +Kr : 250;
function Gr(e, t = !1, n = !1, r) {
  var p, f;
  let s;
  try {
    if (s = e.cssRules, !s)
      return;
  } catch {
    return;
  }
  const o = (p = on(s[0], n)) == null ? void 0 : p[0], i = (f = on(s[s.length - 1], n)) == null ? void 0 : f[0], a = `${s.length}${o}${i}`, l = Hr.get(e);
  if (!t && l === a)
    return;
  const c = s.length;
  let u = 0, d;
  for (let y = 0; y < c; y++) {
    const b = s[y];
    if (!(b instanceof CSSStyleRule))
      continue;
    const m = on(b, n);
    if (m)
      u = 0;
    else {
      if (u++, u > qi)
        return;
      continue;
    }
    const [S, N, w] = m;
    if (w) {
      const $ = Zi(N, r);
      $ && (d || (d = []), d.push($));
      continue;
    }
    const g = qo(S, t);
    t ? g === 0 && delete Pt[S] : S in Pt || (!S.startsWith("_transform") || Uo(S, N.cssText)) && (Pt[S] = N.cssText);
  }
  return Hr.set(e, a), d;
}
let Jt, Ur = null;
function Zi(e, t) {
  const n = e.selectorText.split(",");
  if (!n.length)
    return;
  if (t && !Jt) {
    Jt = {};
    for (const i in t.color) {
      const a = t.color[i];
      Jt[a.name] = a.val;
    }
  }
  const r = (e.cssText || "").slice(e.selectorText.length + 2, -1).trim().split(";"), s = {};
  for (const i of r) {
    const a = i.indexOf(":");
    if (a === -1)
      continue;
    const l = i.slice(i.indexOf("--") + 2, a), c = i.slice(a + 2);
    let u;
    if (c[3] === "(") {
      const d = c.slice(6, -1), p = Jt[d];
      p ? u = p : (Ur || (Ur = getComputedStyle(document.body)), u = Ur.getPropertyValue("--" + d));
    } else
      u = c;
    s[l] = Hi(
      {
        key: l,
        name: l,
        val: u
      },
      !0
    );
  }
  const o = {
    names: [],
    theme: s
  };
  for (const i of n) {
    let a = i.includes("t_dark") ? "dark" : i.includes("t_light") ? "light" : "", l = i.slice(i.lastIndexOf(".t_") + 3);
    l.startsWith(a) && (l = l.slice(a.length + 1)), a === l && (a = "");
    const c = `${a}${a && l ? "_" : ""}${l}`;
    o.names.includes(c) || o.names.push(c);
  }
  return o;
}
function on(e, t = !1) {
  if (e instanceof CSSStyleRule) {
    const n = e.selectorText;
    if (n[0] === ":" && n[1] === "r") {
      if (n.startsWith(":root ._"))
        return [Ji(n), e];
      if (t && (n.startsWith(":root.t_") || n.startsWith(":root .t_")))
        return [
          n.slice(0, 20),
          // just used as uid
          e,
          !0
        ];
    }
  } else if (e instanceof CSSMediaRule)
    return e.cssRules.length > 1 ? void 0 : on(e.cssRules[0]);
}
const Ji = (e) => {
  let t = e.slice(7);
  return e.includes(":") ? t.replace(/:[a-z]+$/, "") : t;
}, $t = we ? document.head.appendChild(document.createElement("style")).sheet : null;
function Zo(e, t) {
  return e in Xr ? !1 : (Xr[e] = t.join(" "), e.startsWith("_transform") ? Uo(e, t[0]) : !0);
}
function Qi(e) {
  if (!(!e.length || !$t)) {
    for (const { identifier: t, rules: n } of e)
      if (Jo(t)) {
        Pt[t] = n.join(`
`), qo(t), Zo(t, n);
        for (const r of n)
          if (process.env.NODE_ENV === "production")
            $t.insertRule(r, $t.cssRules.length);
          else
            try {
              $t.insertRule(r, $t.cssRules.length);
            } catch (s) {
              console.groupCollapsed(
                `Error inserting rule into CSSStyleSheet: ${String(s)}`
              ), console.info({ rule: r, rulesToInsert: e }), console.trace(), console.groupEnd();
            }
      }
  }
}
function Jo(e) {
  if (process.env.IS_STATIC === "is_static")
    return !0;
  const t = dn.get(e);
  return process.env.NODE_ENV === "development" && dn.size > +(process.env.TAMAGUI_STYLE_INSERTION_WARNING_LIMIT || 5e4) && console.warn(
    'Warning: inserting many CSS rules, you may be animating something and generating many CSS insertions, which can degrade performance. Instead, try using the "disableClassName" property on elements that change styles often. To disable this warning set TAMAGUI_STYLE_INSERTION_WARNING_LIMIT from 50000 to something higher'
  ), t === void 0 || t < 2;
}
function pn(e, t) {
  return process.env.NODE_ENV === "development" && (typeof e != "object" || !e) && console.warn(
    "Invalid object given for proxy:",
    e,
    `
  
  This can be due to a missing theme or configuration given to Tamagui.`,
    new Error().stack
  ), new Proxy(e || {}, t);
}
const Un = {
  // order of keys here important! in priority order
  hoverStyle: {
    name: "hover",
    priority: 1
  },
  pressStyle: {
    name: "active",
    stateKey: "press",
    priority: 2
  },
  focusStyle: {
    name: "focus",
    priority: 3
  }
}, ea = {
  hover: 1,
  press: 2,
  focus: 3
}, je = {
  ...Un,
  enterStyle: {
    name: "enter",
    stateKey: "unmounted",
    priority: 4
  },
  exitStyle: {
    name: "exit",
    priority: 5
  }
};
function ta(e) {
  let t = "";
  for (const n in e) {
    t += n;
    const r = e[n];
    let s = typeof r;
    if (!r || s !== "object")
      t += s + r;
    else if (Tn.has(r))
      t += Tn.get(r);
    else {
      let o = Math.random();
      Tn.set(r, o), t += o;
    }
  }
  return t;
}
const Tn = /* @__PURE__ */ new WeakMap();
function na(e) {
  const t = Hn(e), n = t.Provider, r = t, s = /* @__PURE__ */ new Map(), o = ({
    children: a,
    scope: l,
    ...c
  }) => {
    const u = fn(() => ({
      // this ! is a workaround for ts error
      ...e,
      ...c
    }), [ta(c)]);
    let d = n;
    if (l) {
      let p = s.get(l);
      p || (p = Hn(e), s.set(l, p)), d = p.Provider;
    }
    return /* @__PURE__ */ I(d, { value: u, children: a });
  }, i = (a) => {
    const l = a ? s.get(a) : t;
    return Vt(l);
  };
  return r.Provider = o, r.props = e, r.context = t, r.useStyledContext = i, r;
}
const _n = /* @__PURE__ */ new Set(), qn = na({
  disableSSR: void 0,
  inText: !1,
  language: null,
  animationDriver: null,
  groups: {
    emit: (e, t) => {
      _n.forEach((n) => n(e, t));
    },
    subscribe(e) {
      return _n.add(e), () => {
        _n.delete(e);
      };
    },
    state: {}
  }
});
function ra() {
  const e = Vt(qn);
  return Qo(e);
}
function Qo(e) {
  return e.disableSSR ?? Oe().disableSSR;
}
let ct = (
  // development only safeguard
  process.env.NODE_ENV === "development" ? pn(
    {},
    {
      get(e, t) {
        if (typeof t == "string" && t[0] === "$" && // dont error on $$typeof
        t[1] !== "$")
          throw new Error(`Access mediaState should not use "$": ${t}`);
        return Reflect.get(e, t);
      }
    }
  ) : {}
);
const es = {}, oa = () => ct, sa = /* @__PURE__ */ new Set(), qr = (e) => {
  if (sa.has(e))
    return !0;
  if (e[0] === "$") {
    if (e.startsWith("$platform-"))
      return "platform";
    if (e.startsWith("$theme-"))
      return "theme";
    if (e.startsWith("$group-"))
      return "group";
  }
  return !1;
};
let ia;
const ts = Object.keys(je).length;
let aa;
const ca = (e) => {
  if (process.env.NODE_ENV === "development" && e[0] === "$")
    throw new Error("use short key");
  return Oe().settings.mediaPropOrder ? ts : aa.indexOf(e) + 100;
}, Zr = /* @__PURE__ */ new Set(), ns = /* @__PURE__ */ new WeakMap();
function la(e, t) {
  return ns.set(e, t);
}
function ua(e) {
  return Zr.add(e), () => Zr.delete(e);
}
function da(e, t) {
  const n = Mt(), r = ((t ? Qo(t) : ra()) ? ct : ia) || {}, s = _o(
    ua,
    () => {
      if (!n.current)
        return r;
      const { touched: o, prev: i } = n.current, a = e ? ns.get(e) : void 0;
      if (a && a.enabled === !1)
        return i;
      const l = (a == null ? void 0 : a.keys) ?? ((!a || a.enabled) && o ? [...o] : null);
      return !l || l != null && l.every((c) => ct[c] === i[c]) ? i : (n.current.prev = ct, ct);
    },
    () => r
  );
  return new Proxy(s, {
    get(o, i) {
      var a;
      return typeof i == "string" && (n.current || (n.current = { prev: r }), (a = n.current).touched || (a.touched = /* @__PURE__ */ new Set()), n.current.touched.add(i)), Reflect.get(s, i);
    }
  });
}
const rs = (e, t, n, r) => {
  const s = Oe(), o = r && !s.settings.mediaPropOrder ? ca(e) : ts;
  return !n[t] || o > n[t] ? o : null;
};
function fa(e, t, n, r, s, o, i) {
  let a = rs(
    t,
    n,
    s,
    o
  );
  return i && (a = (a || 0) + i), a === null ? !1 : (s[n] = a, e[n] = r, !0);
}
function ma(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`).toLowerCase();
}
const $n = /* @__PURE__ */ new WeakMap();
function pa(e, t) {
  if (typeof e == "string")
    return e;
  if ($n.has(e))
    return $n.get(e);
  const n = Object.entries(e).map(([r, s]) => (r = ma(r), typeof s == "string" ? `(${r}: ${s})` : (typeof s == "number" && /[height|width]$/.test(r) && (s = `${s}px`), `(${r}: ${s})`))).join(" and ");
  return $n.set(e, n), n;
}
function os(e, t) {
  const n = es[e];
  return Object.keys(n).every((r) => {
    const s = +n[r], o = r.startsWith("max"), i = r.endsWith("Width"), a = t[i ? "width" : "height"];
    return o ? a < s : a > s;
  });
}
function ha(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var On, Jr;
function ga() {
  if (Jr)
    return On;
  Jr = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, s = (c, u) => {
    for (var d in u)
      e(c, d, { get: u[d], enumerable: !0 });
  }, o = (c, u, d, p) => {
    if (u && typeof u == "object" || typeof u == "function")
      for (let f of n(u))
        !r.call(c, f) && f !== d && e(c, f, { get: () => u[f], enumerable: !(p = t(u, f)) || p.enumerable });
    return c;
  }, i = (c) => o(e({}, "__esModule", { value: !0 }), c), a = {};
  s(a, {
    timer: () => l
  }), On = i(a);
  function l() {
    let c = 0;
    const u = /* @__PURE__ */ new Set(), d = {};
    function p() {
      const f = c / u.size;
      let y = 0;
      const b = [
        `Ran ${f} per-type, ${c} total`,
        ...[...u].map((m) => {
          const S = `avg ${`${d[m] / f}`.slice(0, 9).padEnd(9)}ms`, N = d[m];
          return y += N, `${m.slice(0, 30).padStart(31)} | ${S} | total ${N}ms`;
        }),
        `                                    total ${y}ms`
      ].join(`
`);
      return console.info(b), b;
    }
    return {
      start(f) {
        const y = (f == null ? void 0 : f.quiet) ?? !0;
        function b(S, ...N) {
          const w = performance.now() - m;
          m = performance.now();
          const g = S[0];
          if (u.add(g), c++, d[g] ?? (d[g] = 0), d[g] += w, !y) {
            let $ = "";
            S.forEach((T, _) => {
              $ += `${T}${_ === S.length - 1 ? "" : N[_]}`;
            }), console.info(`${`${w}ms`.slice(0, 6).padStart(7)} |`, $);
          }
        }
        let m = performance.now();
        return b.print = p, b;
      },
      profile() {
        return {
          timings: d,
          runs: c
        };
      },
      print: p
    };
  }
  return On;
}
function ba(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ss(...e) {
  return (t) => e.forEach((n) => ba(n, t));
}
function Sa(...e) {
  return Ye.useCallback(ss(...e), e);
}
const ya = () => {
}, xa = () => ya;
function va(e) {
  return _o(
    xa,
    () => e ?? !0,
    () => !1
  );
}
const Qt = "_", Na = "t_", hn = {
  alignItems: "stretch"
};
Object.assign(hn, {
  display: "flex",
  flexDirection: "column",
  flexBasis: "auto",
  boxSizing: "border-box",
  position: "relative",
  minHeight: 0,
  minWidth: 0,
  flexShrink: 0
});
const ur = {
  hover: !1,
  press: !1,
  pressIn: !1,
  focus: !1,
  unmounted: !0
}, Ea = {
  ...ur,
  unmounted: !1
}, wa = {
  ...ur,
  unmounted: "should-enter"
};
function Ta(e) {
  return (t) => e((n) => is(n, t));
}
function is(e, t) {
  return Zn(e, t) ? e : { ...e, ...t };
}
function Zn(e, t) {
  for (const n in t)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const sn = {};
{
  const e = {
    Hidden: !0,
    ActiveDescendant: !0,
    Atomic: !0,
    AutoComplete: !0,
    Busy: !0,
    Checked: !0,
    ColumnCount: "colcount",
    ColumnIndex: "colindex",
    ColumnSpan: "colspan",
    Current: !0,
    Details: !0,
    ErrorMessage: !0,
    Expanded: !0,
    HasPopup: !0,
    Invalid: !0,
    Label: !0,
    Level: !0,
    Modal: !0,
    Multiline: !0,
    MultiSelectable: !0,
    Orientation: !0,
    Owns: !0,
    Placeholder: !0,
    PosInSet: !0,
    Pressed: !0,
    RoleDescription: !0,
    RowCount: !0,
    RowIndex: !0,
    RowSpan: !0,
    Selected: !0,
    SetSize: !0,
    Sort: !0,
    ValueMax: !0,
    ValueMin: !0,
    ValueNow: !0,
    ValueText: !0
  };
  for (const t in e) {
    let n = e[t];
    n === !0 && (n = t.toLowerCase()), sn[`accessibility${t}`] = `aria-${n}`;
  }
}
const Jn = (() => {
  if (process.env.NODE_ENV === "development")
    try {
      return new Function("try {return this===window;}catch(e){ return false;}")();
    } catch {
    }
  return !1;
})();
function as(e) {
  const t = oa(), [n, r, s, o] = e.split("-");
  let i;
  const a = s in t ? s : void 0;
  return a ? i = o : i = s, { name: r, pseudo: i, media: a };
}
const Qr = "_";
let eo = null, Cn = null;
const _a = {
  press: "active"
}, $a = (e, t, n, r, s, o) => {
  const { property: i, identifier: a, rules: l } = e, c = Oe();
  c.settings.mediaPropOrder;
  const u = r === "theme", d = r === "platform", p = r === "group", f = u || d || p, y = s ? "0" : "", b = a.slice(0, a.indexOf("-") + 1), m = `${b}${Qr}${t.replace("-", "")}${y}${Qr}`;
  let S = "", N, w, g = a.replace(b, m), $ = l.map((T) => T.replace(a, g)).join(";");
  if (f) {
    const T = new Array((o || 0) + (p ? 1 : 0)).fill(":root").join("");
    if (u || p) {
      const _ = as(t), v = _ == null ? void 0 : _.name;
      N = _ == null ? void 0 : _.media, p && (w = v);
      const A = (p ? "group_" : "") + v, V = $.indexOf(":root"), j = $.lastIndexOf("{"), D = $.slice(V, j), Y = c.themeClassNameOnRoot ? "" : " ", B = _.pseudo ? _a[_.pseudo] || _.pseudo : void 0, pe = B ? `:${B}` : "", xe = `:root${T}${Y}`, W = `.t_${A}${pe}`, J = `${xe}${W} ${D.replace(
        ":root",
        ""
      )}`;
      S = $.replace(D, J);
    } else
      S = `${T}${$}`;
  }
  if (!f || N) {
    if (!Cn) {
      const j = Object.keys(n);
      Cn = Object.fromEntries(
        j.map((D) => [D, pa(n[D])])
      ), eo = Object.fromEntries(
        j.map((D, Y) => [D, new Array(Y + 1).fill(":root").join("")])
      );
    }
    const T = N || t, _ = Cn[T], v = `${s ? "not all and " : ""}${_}`, A = N ? "" : (
      // @ts-ignore
      eo[T]
    ), V = N ? `@container ${w}` : "@media";
    N && ($ = S), $.includes(V) ? S = $.replace("{", ` and ${v} {`) : S = `${V} ${v}{${A}${$}}`, N && (S = `@supports (contain: ${c.settings.webContainerType || "inline-size"}) {${S}}`);
  }
  return {
    property: i,
    rules: [S],
    identifier: g
  };
}, Qn = { height: 0, width: 0 };
function Oa(e) {
  if (typeof e == "number")
    return e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null;
  if (typeof e != "string")
    return null;
  const t = Ra();
  let n;
  if (n = t.hex6.exec(e))
    return parseInt(n[1] + "ff", 16) >>> 0;
  const r = Pa(e);
  return r ?? ((n = t.rgb.exec(e)) ? (Ce(n[1]) << 24 | // r
  Ce(n[2]) << 16 | // g
  Ce(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = t.rgba.exec(e)) ? n[6] !== void 0 ? (Ce(n[6]) << 24 | // r
  Ce(n[7]) << 16 | // g
  Ce(n[8]) << 8 | // b
  tn(n[9])) >>> // a
  0 : (Ce(n[2]) << 24 | // r
  Ce(n[3]) << 16 | // g
  Ce(n[4]) << 8 | // b
  tn(n[5])) >>> // a
  0 : (n = t.hex3.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = t.hex8.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = t.hex4.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = t.hsl.exec(e)) ? (Rn(
    en(n[1]),
    // h
    ke(n[2]),
    // s
    ke(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = t.hsla.exec(e)) ? n[6] !== void 0 ? (Rn(
    en(n[6]),
    // h
    ke(n[7]),
    // s
    ke(n[8])
    // l
  ) | tn(n[9])) >>> // a
  0 : (Rn(
    en(n[2]),
    // h
    ke(n[3]),
    // s
    ke(n[4])
    // l
  ) | tn(n[5])) >>> // a
  0 : (n = t.hwb.exec(e)) ? (Ca(
    en(n[1]),
    // h
    ke(n[2]),
    // w
    ke(n[3])
    // b
  ) | 255) >>> // a
  0 : null);
}
function dt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Rn(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r, o = dt(s, r, e + 1 / 3), i = dt(s, r, e), a = dt(s, r, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(i * 255) << 16 | Math.round(a * 255) << 8;
}
function Ca(e, t, n) {
  if (t + n >= 1) {
    const i = Math.round(t * 255 / (t + n));
    return i << 24 | i << 16 | i << 8;
  }
  const r = dt(0, 1, e + 1 / 3) * (1 - t - n) + t, s = dt(0, 1, e) * (1 - t - n) + t, o = dt(0, 1, e - 1 / 3) * (1 - t - n) + t;
  return Math.round(r * 255) << 24 | Math.round(s * 255) << 16 | Math.round(o * 255) << 8;
}
const oe = "[-+]?\\d*\\.?\\d+", Fe = oe + "%";
function Pn(...e) {
  return "\\(\\s*(" + e.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function to(...e) {
  return "\\(\\s*(" + e.slice(0, e.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + e[e.length - 1] + ")\\s*\\)";
}
function no(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
let An;
function Ra() {
  return An === void 0 && (An = {
    rgb: new RegExp("rgb" + Pn(oe, oe, oe)),
    rgba: new RegExp(
      "rgba(" + no(oe, oe, oe, oe) + "|" + to(oe, oe, oe, oe) + ")"
    ),
    hsl: new RegExp("hsl" + Pn(oe, Fe, Fe)),
    hsla: new RegExp(
      "hsla(" + no(oe, Fe, Fe, oe) + "|" + to(oe, Fe, Fe, oe) + ")"
    ),
    hwb: new RegExp("hwb" + Pn(oe, Fe, Fe)),
    hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#([0-9a-fA-F]{6})$/,
    hex8: /^#([0-9a-fA-F]{8})$/
  }), An;
}
function Ce(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function en(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function tn(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ke(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Pa(e) {
  switch (e) {
    case "transparent":
      return 0;
    case "aliceblue":
      return 4042850303;
    case "antiquewhite":
      return 4209760255;
    case "aqua":
      return 16777215;
    case "aquamarine":
      return 2147472639;
    case "azure":
      return 4043309055;
    case "beige":
      return 4126530815;
    case "bisque":
      return 4293182719;
    case "black":
      return 255;
    case "blanchedalmond":
      return 4293643775;
    case "blue":
      return 65535;
    case "blueviolet":
      return 2318131967;
    case "brown":
      return 2771004159;
    case "burlywood":
      return 3736635391;
    case "burntsienna":
      return 3934150143;
    case "cadetblue":
      return 1604231423;
    case "chartreuse":
      return 2147418367;
    case "chocolate":
      return 3530104575;
    case "coral":
      return 4286533887;
    case "cornflowerblue":
      return 1687547391;
    case "cornsilk":
      return 4294499583;
    case "crimson":
      return 3692313855;
    case "cyan":
      return 16777215;
    case "darkblue":
      return 35839;
    case "darkcyan":
      return 9145343;
    case "darkgoldenrod":
      return 3095792639;
    case "darkgray":
      return 2846468607;
    case "darkgreen":
      return 6553855;
    case "darkgrey":
      return 2846468607;
    case "darkkhaki":
      return 3182914559;
    case "darkmagenta":
      return 2332068863;
    case "darkolivegreen":
      return 1433087999;
    case "darkorange":
      return 4287365375;
    case "darkorchid":
      return 2570243327;
    case "darkred":
      return 2332033279;
    case "darksalmon":
      return 3918953215;
    case "darkseagreen":
      return 2411499519;
    case "darkslateblue":
      return 1211993087;
    case "darkslategray":
      return 793726975;
    case "darkslategrey":
      return 793726975;
    case "darkturquoise":
      return 13554175;
    case "darkviolet":
      return 2483082239;
    case "deeppink":
      return 4279538687;
    case "deepskyblue":
      return 12582911;
    case "dimgray":
      return 1768516095;
    case "dimgrey":
      return 1768516095;
    case "dodgerblue":
      return 512819199;
    case "firebrick":
      return 2988581631;
    case "floralwhite":
      return 4294635775;
    case "forestgreen":
      return 579543807;
    case "fuchsia":
      return 4278255615;
    case "gainsboro":
      return 3705462015;
    case "ghostwhite":
      return 4177068031;
    case "gold":
      return 4292280575;
    case "goldenrod":
      return 3668254975;
    case "gray":
      return 2155905279;
    case "green":
      return 8388863;
    case "greenyellow":
      return 2919182335;
    case "grey":
      return 2155905279;
    case "honeydew":
      return 4043305215;
    case "hotpink":
      return 4285117695;
    case "indianred":
      return 3445382399;
    case "indigo":
      return 1258324735;
    case "ivory":
      return 4294963455;
    case "khaki":
      return 4041641215;
    case "lavender":
      return 3873897215;
    case "lavenderblush":
      return 4293981695;
    case "lawngreen":
      return 2096890111;
    case "lemonchiffon":
      return 4294626815;
    case "lightblue":
      return 2916673279;
    case "lightcoral":
      return 4034953471;
    case "lightcyan":
      return 3774873599;
    case "lightgoldenrodyellow":
      return 4210742015;
    case "lightgray":
      return 3553874943;
    case "lightgreen":
      return 2431553791;
    case "lightgrey":
      return 3553874943;
    case "lightpink":
      return 4290167295;
    case "lightsalmon":
      return 4288707327;
    case "lightseagreen":
      return 548580095;
    case "lightskyblue":
      return 2278488831;
    case "lightslategray":
      return 2005441023;
    case "lightslategrey":
      return 2005441023;
    case "lightsteelblue":
      return 2965692159;
    case "lightyellow":
      return 4294959359;
    case "lime":
      return 16711935;
    case "limegreen":
      return 852308735;
    case "linen":
      return 4210091775;
    case "magenta":
      return 4278255615;
    case "maroon":
      return 2147483903;
    case "mediumaquamarine":
      return 1724754687;
    case "mediumblue":
      return 52735;
    case "mediumorchid":
      return 3126187007;
    case "mediumpurple":
      return 2473647103;
    case "mediumseagreen":
      return 1018393087;
    case "mediumslateblue":
      return 2070474495;
    case "mediumspringgreen":
      return 16423679;
    case "mediumturquoise":
      return 1221709055;
    case "mediumvioletred":
      return 3340076543;
    case "midnightblue":
      return 421097727;
    case "mintcream":
      return 4127193855;
    case "mistyrose":
      return 4293190143;
    case "moccasin":
      return 4293178879;
    case "navajowhite":
      return 4292783615;
    case "navy":
      return 33023;
    case "oldlace":
      return 4260751103;
    case "olive":
      return 2155872511;
    case "olivedrab":
      return 1804477439;
    case "orange":
      return 4289003775;
    case "orangered":
      return 4282712319;
    case "orchid":
      return 3664828159;
    case "palegoldenrod":
      return 4008225535;
    case "palegreen":
      return 2566625535;
    case "paleturquoise":
      return 2951671551;
    case "palevioletred":
      return 3681588223;
    case "papayawhip":
      return 4293907967;
    case "peachpuff":
      return 4292524543;
    case "peru":
      return 3448061951;
    case "pink":
      return 4290825215;
    case "plum":
      return 3718307327;
    case "powderblue":
      return 2967529215;
    case "purple":
      return 2147516671;
    case "rebeccapurple":
      return 1714657791;
    case "red":
      return 4278190335;
    case "rosybrown":
      return 3163525119;
    case "royalblue":
      return 1097458175;
    case "saddlebrown":
      return 2336560127;
    case "salmon":
      return 4202722047;
    case "sandybrown":
      return 4104413439;
    case "seagreen":
      return 780883967;
    case "seashell":
      return 4294307583;
    case "sienna":
      return 2689740287;
    case "silver":
      return 3233857791;
    case "skyblue":
      return 2278484991;
    case "slateblue":
      return 1784335871;
    case "slategray":
      return 1887473919;
    case "slategrey":
      return 1887473919;
    case "snow":
      return 4294638335;
    case "springgreen":
      return 16744447;
    case "steelblue":
      return 1182971135;
    case "tan":
      return 3535047935;
    case "teal":
      return 8421631;
    case "thistle":
      return 3636451583;
    case "tomato":
      return 4284696575;
    case "turquoise":
      return 1088475391;
    case "violet":
      return 4001558271;
    case "wheat":
      return 4125012991;
    case "white":
      return 4294967295;
    case "whitesmoke":
      return 4126537215;
    case "yellow":
      return 4294902015;
    case "yellowgreen":
      return 2597139199;
  }
  return null;
}
var cs = Oa;
const ls = /* @__PURE__ */ ha(cs), Aa = /* @__PURE__ */ Xs({
  __proto__: null,
  default: ls
}, [cs]), Da = ls || Aa, Va = Da;
function Ma(e) {
  var t = Math.round((e & 4278190080) >>> 24), n = Math.round((e & 16711680) >>> 16), r = Math.round((e & 65280) >>> 8), s = ((e & 255) >>> 0) / 255;
  return {
    r: t,
    g: n,
    b: r,
    a: s
  };
}
const Ia = (e, t) => {
  if (!e)
    return;
  if (e[0] === "$" || e[0] === "v" && e.startsWith("var(") || t === 1)
    return e;
  const n = Va(e);
  if (n != null) {
    const { r, g: s, b: o, a: i } = Ma(n), a = (t ?? i ?? 1).toFixed(2);
    return `rgba(${r},${s},${o},${a})`;
  }
  return process.env.NODE_ENV === "development" && console.warn(`Unknown color value: ${e}`), e;
}, Fa = {
  ...ki,
  translateX: !0,
  translateY: !0
};
function ce(e, t) {
  if (typeof e == "boolean" || t && t in ir || t && !(t in Fa))
    return e;
  let n = e;
  return e && typeof e == "object" ? e : (typeof e == "number" ? n = `${e}px` : t && (n = `${n}`), n);
}
const Dn = {};
function ro(e, t) {
  const n = Gi()[t];
  if (Dn[n])
    return Dn[n];
  if (!n) {
    process.env.NODE_ENV === "development" && console.warn(
      `No CSS rule found for ${e} looking for selector ".${t}", you may not be injecting extracted CSS`
    );
    return;
  }
  const r = n.replace(/.*:/, "").replace(/;.*/, "").trim();
  let s;
  return r.startsWith("var(") ? s = r : ir[e] ? s = +r : r.endsWith("px") ? s = +r.replace("px", "") : s = r, Dn[n] = s, process.env.NODE_ENV === "development" && typeof s == "number" && isNaN(s) && console.info("Tamagui invalid parsed value, NaN:", {
    res: s,
    cssVal: r,
    cssRule: n,
    key: e,
    className: t
  }), s;
}
function ka({
  shadowColor: e,
  shadowOffset: t,
  shadowOpacity: n = 1,
  shadowRadius: r
}) {
  const { height: s, width: o } = t || Qn;
  return {
    shadowOffset: {
      width: ce(o || 0),
      height: ce(s || 0)
    },
    shadowRadius: ce(r || 0),
    shadowColor: Ia(e, n)
  };
}
function dr(e) {
  (e.shadowRadius || e.shadowColor || e.shadowOpacity || e.shadowOffset) && Object.assign(e, ka(e));
  for (const t in Vn)
    t in e && !e[Vn[t]] && (e[Vn[t]] = "solid");
}
const Vn = {
  borderWidth: "borderStyle",
  borderBottomWidth: "borderBottomStyle",
  borderTopWidth: "borderTopStyle",
  borderLeftWidth: "borderLeftStyle",
  borderRightWidth: "borderRightStyle"
};
function oo(e, t) {
  let n = [];
  for (const r in Un) {
    const s = e[r];
    s && (n = [
      ...n,
      ...er(s, Un[r])
    ]);
  }
  return n = [...n, ...er(e)], process.env.NODE_ENV === "development" && t === "verbose" && console.info(" 🪮 getStylesAtomic", { stylesIn: e, res: n }), n;
}
let Mn;
function us(e) {
  return e.map(
    // { scale: 2 } => 'scale(2)'
    // { translateX: 20 } => 'translateX(20px)'
    // { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
    (t) => {
      const n = Object.keys(t)[0], r = t[n];
      return n === "matrix" || n === "matrix3d" ? `${n}(${r.join(",")})` : `${n}(${ce(r, n)})`;
    }
  ).join(" ");
}
const er = (e, t) => {
  if (!e)
    return [];
  Mn = Mn || Oe(), ds(e);
  const n = [];
  for (const r in e) {
    if (r in je)
      continue;
    let s = e[r];
    if (s == null)
      continue;
    r === "transform" && Array.isArray(e.transform) && (s = us(s));
    const o = ce(s, r), i = cr(`${o}`), a = t ? `0${t.name}-` : "", l = `_${Mn.inverseShorthands[r] || r}-${a}${i}`, c = Ba(l, r, o, t), u = {
      property: r,
      pseudo: t == null ? void 0 : t.name,
      identifier: l,
      rules: c,
      value: o
    };
    n.push(u);
  }
  return n;
};
function ds(e) {
  const { shadowOffset: t, shadowRadius: n, shadowColor: r } = e;
  if (e.shadowRadius) {
    const a = t || Qn, l = ce(a.width), c = ce(a.height), u = ce(n), d = `${l} ${c} ${u} ${r}`;
    e.boxShadow = e.boxShadow ? `${e.boxShadow}, ${d}` : d, delete e.shadowOffset, delete e.shadowRadius, delete e.shadowColor, delete e.shadowOpacity;
  }
  const { textShadowColor: s, textShadowOffset: o, textShadowRadius: i } = e;
  if (s || o || i) {
    const { height: a, width: l } = o || Qn, c = i || 0, u = ce(s, "textShadowColor");
    if (u && (a !== 0 || l !== 0 || c !== 0)) {
      const d = ce(c), p = ce(l), f = ce(a);
      e.textShadow = `${p} ${f} ${d} ${u}`;
    }
    delete e.textShadowColor, delete e.textShadowOffset, delete e.textShadowRadius;
  }
}
function lt(e, t = !1) {
  let n = "";
  for (const [r, s] of e)
    n += `${ja(r)}:${s}${t ? " !important" : ""};`;
  return `{${n}}`;
}
const In = {}, Wa = (e) => `-${e.toLowerCase()}`, ja = (e) => {
  if (e in In)
    return In[e];
  const t = e.replace(/[A-Z]/g, Wa);
  return In[e] = t, t;
}, La = (() => {
  const e = {};
  for (const t in je) {
    const n = je[t];
    e[n.name] = `${[...Array(n.priority)].map(() => ":root").join("")} `;
  }
  return e;
})();
function Ba(e, t, n, r) {
  const s = r ? (
    // adding one more :root so we always override react native web styles :/
    `${La[r.name]} .${e}:${r.name}`
  ) : `:root .${e}`, o = !!r;
  let i = [];
  switch (t) {
    case "placeholderTextColor": {
      const a = lt(
        [
          ["color", n],
          ["opacity", 1]
        ],
        o
      );
      i.push(`${s}::placeholder${a}`);
      break;
    }
    case "backgroundClip":
    case "userSelect": {
      const a = `Webkit${`${t[0].toUpperCase()}${t.slice(1)}`}`, l = lt(
        [
          [t, n],
          [a, n]
        ],
        o
      );
      i.push(`${s}${l}`);
      break;
    }
    case "pointerEvents": {
      let a = n;
      n === "auto" || n === "box-only" ? (a = "auto", n === "box-only" && i.push(`${s}>*${Ha}`)) : (n === "none" || n === "box-none") && (a = "none", n === "box-none" && i.push(`${s}>*${za}`));
      const l = lt([["pointerEvents", a]], !0);
      i.push(`${s}${l}`);
      break;
    }
    default: {
      const a = lt([[t, n]], o);
      i.push(`${s}${a}`);
      break;
    }
  }
  return (r == null ? void 0 : r.name) === "hover" && (i = i.map((a) => `@media not all and (hover: none) { ${a} }`)), i;
}
const za = lt([["pointerEvents", "auto"]], !0), Ha = lt([["pointerEvents", "none"]], !0);
function M(...e) {
  if (process.env.NODE_ENV !== "production")
    return console.info(...e);
}
function fs(e, t) {
  if (e === "flex")
    return [
      ["flexGrow", t],
      ["flexShrink", 1],
      ["flexBasis", "auto"]
    ];
  switch (e) {
    case "textAlignVertical":
      return [["verticalAlign", t === "center" ? "middle" : t]];
    case "writingDirection":
      return [["direction", t]];
  }
  if (e in At)
    return At[e].map((n) => [n, t]);
}
const so = ["Top", "Right", "Bottom", "Left"], io = ["Right", "Left"], ao = ["Top", "Bottom"], co = ["X", "Y"], At = {
  borderColor: ["TopColor", "RightColor", "BottomColor", "LeftColor"],
  borderRadius: [
    "TopLeftRadius",
    "TopRightRadius",
    "BottomRightRadius",
    "BottomLeftRadius"
  ],
  borderWidth: ["TopWidth", "RightWidth", "BottomWidth", "LeftWidth"],
  margin: so,
  marginHorizontal: io,
  marginVertical: ao,
  overscrollBehavior: co,
  padding: so,
  paddingHorizontal: io,
  paddingVertical: ao,
  // react-native only supports borderStyle
  borderStyle: ["TopStyle", "RightStyle", "BottomStyle", "LeftStyle"],
  // react-native doesn't support X / Y
  overflow: co
};
var wo;
for (const e in At) {
  const t = e.slice(0, ((wo = /[A-Z]/.exec(e)) == null ? void 0 : wo.index) ?? e.length);
  At[e] = At[e].map((n) => `${t}${n}`);
}
function ms(e, t = !1) {
  const n = {};
  for (let r in e) {
    const s = e[r];
    if (s == null)
      continue;
    if (r in je) {
      n[r] = ms(s, t);
      continue;
    }
    const o = t ? s : ce(s, r), i = fs(r, o);
    i ? Object.assign(n, Object.fromEntries(i)) : n[r] = o;
  }
  return dr(n), n;
}
function Xa(e) {
  const { curProps: t, conf: n, context: r, theme: s } = e;
  let o = n.fontsParsed;
  r != null && r.language && (o = tr(n.fontsParsed, r.language));
  const i = Go(
    e.fontFamily || e.curProps.fontFamily || e.conf.defaultFont
  );
  return {
    fonts: o,
    tokens: n.tokensParsed,
    theme: s,
    fontFamily: i,
    font: o[i] || o[e.conf.defaultFont],
    // TODO do this in splitstlye
    // we avoid passing in default props for media queries because that would confuse things like SizableText.size:
    props: pn(t, {
      // handles shorthands
      get(a, l) {
        const c = n.inverseShorthands[l];
        if (c && Reflect.has(a, c))
          return Reflect.get(a, c);
        if (Reflect.has(a, l))
          return Reflect.get(a, l);
      }
    })
  };
}
const Fn = /* @__PURE__ */ new WeakMap();
function tr(e, t) {
  if (Fn.has(t))
    return Fn.get(t);
  const n = {
    ...e,
    ...Object.fromEntries(
      Object.entries(t).map(([r, s]) => {
        if (s === "default")
          return [];
        const o = `$${r}_${s}`;
        return [`$${r}`, e[o]];
      })
    )
  };
  return Fn.set(t, n), n;
}
const ps = (e) => e && !Array.isArray(e) && typeof e == "object", hs = (e, t, n, r) => {
  var p;
  if (e === "elevationAndroid")
    return;
  if (t === "unset") {
    const f = (p = n.conf.unset) == null ? void 0 : p[e];
    f != null && (t = f);
  }
  const s = n.styleProps.fallbackProps || r, o = s ? new Proxy(n, {
    get(f, y) {
      return y === "curProps" ? s : Reflect.get(f, y);
    }
  }) : n, { conf: i, styleProps: a, fontFamily: l, staticConfig: c } = o, { variants: u } = c;
  if (process.env.NODE_ENV === "development" && l && l[0] === "$" && !(l in i.fontsParsed) && console.warn(
    `Warning: no fontFamily "${l}" found in config: ${Object.keys(i.fontsParsed).join(
      ", "
    )}`
  ), !a.noExpand && u && e in u) {
    o.curProps[e] = t;
    const f = gs(e, t, a, o, "");
    if (f)
      return f;
  }
  let d = !1;
  if (a.disableExpandShorthands || e in i.shorthands && (d = !0, e = i.shorthands[e]), t && (t[0] === "$" ? t = nr(e, t, a.resolveValues, o) : Ae(t) && (t = mr(e, t, a.resolveValues))), d || t != null) {
    const f = (a.noExpand ? null : fs(e, t)) || [
      [e, t]
    ];
    return e === "fontFamily" && fr.set(f, Ss), f;
  }
}, gs = (e, t, n, r, s) => {
  const { staticConfig: o, conf: i, debug: a } = r, { variants: l } = o;
  if (!l)
    return;
  let c = Ua(l[e], t, i);
  if (process.env.NODE_ENV === "development" && a === "verbose" && (console.groupCollapsed(`♦️♦️♦️ resolve variant ${e}`), console.info({
    key: e,
    value: t,
    variantValue: c,
    variants: l,
    curProps: { ...r.curProps }
  }), console.groupEnd()), !c) {
    if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof t != "boolean") {
      const d = o.componentName || "[UnnamedComponent]";
      console.warn(
        `No variant found: ${d} has variant "${e}", but no matching value "${t}"`
      );
    }
    return;
  }
  if (typeof c == "function") {
    const d = c, p = Xa(r);
    c = d(t, p), process.env.NODE_ENV === "development" && a === "verbose" && (console.groupCollapsed("   expanded functional variant", e), console.info({ fn: d, variantValue: c, extras: p }), console.groupEnd());
  }
  let u;
  if (ps(c)) {
    const d = c.fontFamily || c[i.inverseShorthands.fontFamily];
    d && (u = Ya(d, i), r.fontFamily = u, process.env.NODE_ENV === "development" && a === "verbose" && console.info("   updating font family", u)), c = bs(
      e,
      c,
      n,
      r,
      s
    );
  }
  if (c) {
    const d = ms(
      c,
      !!n.noNormalize
    ), p = Object.entries(d);
    return u && u[0] === "$" && fr.set(p, Go(u)), p;
  }
};
function Ya(e, t) {
  if (Ae(e)) {
    const n = lo.get(e);
    if (n)
      return n;
    for (const r in t.fontsParsed) {
      const s = t.fontsParsed[r].family;
      if (Ae(s) && (lo.set(s, r), s === e))
        return r;
    }
  } else if (typeof e == "string" && e[0] === "$")
    return e;
}
const lo = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), Ka = (e) => e && fr.get(e), bs = (e, t, n, r, s) => {
  var d;
  const { conf: o, staticConfig: i, debug: a, theme: l } = r, { variants: c } = i, u = {};
  process.env.NODE_ENV === "development" && a === "verbose" && console.info("   - resolveTokensAndVariants", e, t);
  for (const p in t) {
    const f = o.shorthands[p] || p, y = t[p];
    if (n.noExpand)
      u[f] = y;
    else if (c && f in c) {
      if (r.curProps[f] = y, s && s === e)
        u[f] = // SYNC WITH *1
        y[0] === "$" ? nr(f, y, n.resolveValues, r) : y;
      else {
        const b = gs(f, y, n, r, e);
        if (b)
          for (const [m, S] of b)
            S != null && (m in je ? (u[m] ?? (u[m] = {}), Object.assign(u[m], S)) : u[m] = S);
      }
      continue;
    }
    if (Ae(y)) {
      u[f] = mr(f, y, n.resolveValues);
      continue;
    }
    if (typeof y == "string") {
      const b = (
        // SYNC WITH *1
        y[0] === "$" ? nr(f, y, n.resolveValues, r) : y
      );
      u[f] = b;
      continue;
    }
    if (ps(y)) {
      const b = bs(f, y, n, r, e);
      process.env.NODE_ENV === "development" && a === "verbose" && console.info("object", f, b), u[f] ?? (u[f] = {}), Object.assign(u[f], b);
    } else
      u[f] = y;
    process.env.NODE_ENV === "development" && a && ((d = u[f]) == null ? void 0 : d[0]) === "$" && console.warn(
      `⚠️ Missing token in theme ${l.name}:`,
      f,
      u[f],
      l
    );
  }
  return u;
}, Ga = ["size", "color", "radius", "space", "zIndex"].map((e) => ({
  name: e,
  spreadName: `...${e}`
}));
function Ua(e, t, n) {
  if (typeof e == "function")
    return e;
  const r = e[t];
  if (r)
    return r;
  if (t != null) {
    const { tokensParsed: s } = n;
    for (const { name: i, spreadName: a } of Ga)
      if (a in e && t in s[i])
        return e[a];
    const o = e["...fontSize"];
    if (o && n.fontSizeTokens.has(t))
      return o;
  }
  return e[`:${typeof t}`] || e["..."];
}
const qa = {
  fontSize: "size",
  fontWeight: "weight"
};
let Ss = null;
const nr = (e, t, n = "none", r) => {
  var d, p, f, y;
  if (n === "none")
    return t;
  const { theme: s, conf: o = Oe(), context: i, fontFamily: a } = r, l = o.tokensParsed;
  let c, u = !1;
  if (s && t in s)
    c = s[t], process.env.NODE_ENV === "development" && r.debug === "verbose" && console.info(` - resolving ${e} to theme value ${t}: ${(d = c == null ? void 0 : c.get) == null ? void 0 : d.call(c)}`), u = !0;
  else if (t in o.specificTokens)
    u = !0, c = o.specificTokens[t];
  else {
    switch (e) {
      case "fontFamily": {
        c = ((p = (i != null && i.language ? tr(o.fontsParsed, i.language) : o.fontsParsed)[t]) == null ? void 0 : p.family) || t, Ss = t, u = !0;
        break;
      }
      case "fontSize":
      case "lineHeight":
      case "letterSpacing":
      case "fontWeight": {
        const b = o.defaultFont || "$body", m = a || b;
        if (m) {
          const S = i != null && i.language ? tr(o.fontsParsed, i.language) : o.fontsParsed;
          c = ((y = (f = S[m] || S[b]) == null ? void 0 : f[qa[e] || e]) == null ? void 0 : y[t]) || t, u = !0;
        }
        break;
      }
    }
    for (const b in at)
      if (e in at[b]) {
        const m = l[b][t];
        m != null && (c = m, u = !0);
      }
    if (!u) {
      const b = l.space[t];
      b != null && (c = b, u = !0);
    }
  }
  if (u) {
    const b = mr(e, c, n);
    return process.env.NODE_ENV === "development" && r.debug === "verbose" && console.info("resolved", n, c, b), b;
  }
  return process.env.NODE_ENV === "development" && Jn && r.debug === "verbose" && (console.groupCollapsed("  ﹒ propMap (val)", e, t), console.info({ valOrVar: c, theme: s, hasSet: u }, s ? s[e] : ""), console.groupEnd()), t;
};
function mr(e, t, n) {
  if (n === "none")
    return t;
  if (Ae(t)) {
    if (n === "value")
      return t.val;
    const r = t == null ? void 0 : t.get;
    return typeof r == "function" ? r(n === "web" ? "web" : void 0) : t.variable;
  }
  return t;
}
const nn = process.env.IS_STATIC === "is_static";
let Xe;
const st = "-", Za = (e, t, n, r, s, o, i, a, l, c) => {
  var zt, Ze, Je, X, mt;
  Xe = Xe || Oe(), o.isAnimated && Xe.animations.isReactNative && !o.noNormalize && (o.noNormalize = "values");
  const { shorthands: u } = Xe, {
    isHOC: d,
    isText: p,
    variants: f,
    isReactNative: y,
    inlineProps: b,
    inlineWhenUnflattened: m,
    parentStaticConfig: S,
    acceptsClassName: N
  } = t, w = p ? Xo : ut, g = {}, $ = o.mediaState || ct, T = {}, _ = N && Wt && !o.noClassNames, v = [], A = {}, V = {};
  let j = null, D = e.space, Y = !1, B, pe, xe, W = {}, J = "", qe = 0;
  const F = {
    curProps: { ...e },
    classNames: A,
    conf: Xe,
    props: e,
    styleProps: o,
    componentState: s,
    staticConfig: t,
    style: W,
    theme: n,
    usedKeys: T,
    viewProps: g,
    context: a,
    debug: c
  };
  if (process.env.NODE_ENV === "development" && c && c !== "profile" && we && (console.groupCollapsed("getSplitStyles (collapsed)"), M({
    props: e,
    staticConfig: t,
    shouldDoClasses: _,
    styleProps: o,
    componentState: s,
    styleState: F,
    theme: { ...n }
  }), console.groupEnd()), typeof e.className == "string")
    for (const C of e.className.split(" "))
      if (C[0] === "_") {
        const [h, E] = C.slice(1).split("-"), K = E[0] === "_", Q = E[0] === "0", ie = K || Q;
        let ee = u[h];
        if (K) {
          let ve = E.slice(1);
          ve = ve.slice(0, ve.indexOf("_")), ee += `${st}${ve}`;
        } else if (Q) {
          const ve = E.slice(1);
          ee += `${st}${ve}`;
        }
        T[ee] = 1, Ot(V, A, ee, C, ie);
      } else
        C && (J += ` ${C}`);
  for (const C in e) {
    let h = C, E = e[C];
    if (o.disableExpandShorthands || h in u && (h = u[h]), h === "className" || h in T)
      continue;
    if (h in ft && !d) {
      if (h === "group") {
        const R = `t_group_${E}`, G = Xe.settings.webContainerType || "inline-size", H = {
          identifier: R,
          property: "container",
          rules: [
            `.${R} { container-name: ${E}; container-type: ${G}; }`
          ]
        };
        Ct(v, H);
      }
      continue;
    }
    const K = typeof E;
    if (F.curProps[h] = E, K === "string" && E[0] === "_" && (h in w || h.includes("-"))) {
      process.env.NODE_ENV === "development" && c && M(`Adding compiled style ${h}: ${E}`), _ ? (A[h] = E, delete W[h]) : (W[h] = ro(h, E), delete J[h]);
      continue;
    }
    if (h === "dataSet") {
      for (const R in E)
        g[`data-${nc(R)}`] = E[R];
      continue;
    }
    if (h[0] === "_" && h.startsWith("_style")) {
      fo(F, E);
      continue;
    }
    if (!o.noExpand) {
      if (h === "disabled" && E === !0 && (g["aria-disabled"] = !0, (l === "button" || l === "form" || l === "input" || l === "select" || l === "textarea") && (g.disabled = !0), !(f != null && f.disabled)))
        continue;
      if (h === "testID") {
        g[y ? h : "data-testid"] = E;
        continue;
      }
      if (h === "id" || h === "nativeID") {
        y ? g.nativeID = E : g.id = E;
        continue;
      }
      let R = !1;
      if (y) {
        if (h in sn || h.startsWith("accessibility")) {
          g[h] = E;
          continue;
        }
      } else if (R = !0, h in sn) {
        g[sn[h]] = E;
        continue;
      } else
        switch (h) {
          case "accessibilityRole": {
            E === "none" ? g.role = "presentation" : g.role = oc[E] || E;
            continue;
          }
          case "accessibilityLabelledBy":
          case "accessibilityFlowTo":
          case "accessibilityControls":
          case "accessibilityDescribedBy": {
            g[`aria-${h.replace("accessibility", "").toLowerCase()}`] = ec(E);
            continue;
          }
          case "accessibilityKeyShortcuts": {
            Array.isArray(E) && (g["aria-keyshortcuts"] = E.join(" "));
            continue;
          }
          case "accessibilityLiveRegion": {
            g["aria-live"] = E === "none" ? "off" : E;
            continue;
          }
          case "accessibilityReadOnly": {
            g["aria-readonly"] = E, (l === "input" || l === "select" || l === "textarea") && (g.readOnly = !0);
            continue;
          }
          case "accessibilityRequired": {
            g["aria-required"] = E, (l === "input" || l === "select" || l === "textarea") && (g.required = E);
            continue;
          }
          default:
            R = !1;
        }
      if (R)
        continue;
      if (E && E[0] === "_") {
        const G = h in ut, H = !G && h.includes(st) && ut[h.split(st)[0]];
        if (G || H) {
          process.env.NODE_ENV === "development" && c && M("tamagui classname prop", h, E), _ ? (Ot(V, A, h, E, H), delete W[h]) : (W[h] = ro(h, E), delete J[h]);
          continue;
        }
      }
    }
    const Q = h in w, ie = h in u;
    let ee = !Q && f && h in f;
    const ve = ie || Q || ee;
    let Te = h in Kn, he = !ve && !Te && qr(h), U = !!(he || Te);
    const pt = U || ee && !o.noExpand || Q || ie;
    if (pt && (e.asChild === "except-style" || e.asChild === "except-style-web"))
      continue;
    const ge = !pt || // is in parent variants
    d && (S == null ? void 0 : S.variants) && h in S.variants || (b == null ? void 0 : b.has(h)), Ht = (zt = S == null ? void 0 : S.variants) == null ? void 0 : zt[h], Qe = !!(d && (ie || Q || U || Ht || h in ft)), De = ge || Qe;
    if (process.env.NODE_ENV === "development" && c === "verbose" && (console.groupCollapsed(
      `🔹🔹🔹🔹 ${C}${h !== C ? ` (shorthand for ${h})` : ""} ${De ? "(pass)" : ""} 🔹🔹🔹🔹`
    ), M({ isVariant: ee, valInit: E, shouldPassProp: ge }), we && M({
      variants: f,
      variant: f == null ? void 0 : f[h],
      isVariant: ee,
      isHOCShouldPassThrough: Qe,
      curProps: { ...F.curProps },
      parentStaticConfig: S
    }), console.groupEnd()), De && (po(g, h, E, U), !ee) || !o.noSkip && h in ft)
      continue;
    p && E && (h === "fontFamily" || h === u.fontFamily) && E in Xe.fontsParsed && (F.fontFamily = E);
    const Ve = U || !ee && !Q ? [[h, E]] : hs(h, E, F), Xt = Ka(Ve);
    if (Xt && (F.fontFamily = Xt), process.env.NODE_ENV === "development" && c === "verbose") {
      console.groupCollapsed("  💠 expanded", h, E);
      try {
        !Ke && Jn && (M({
          expanded: Ve,
          styleProps: o,
          componentState: s,
          isVariant: ee,
          variant: f == null ? void 0 : f[h],
          shouldPassProp: ge,
          isHOCShouldPassThrough: Qe,
          theme: n,
          usedKeys: { ...T },
          curProps: { ...F.curProps }
        }), M("expanded", Ve, `
usedKeys`, { ...T }, `
current`, {
          ...W
        }));
      } catch {
      }
      console.groupEnd();
    }
    if (Ve) {
      for (const [R, G] of Ve)
        if (!(G == null || R in T)) {
          if (Te = R in Kn, he = !Te && !Q && qr(R), U = !!(he || Te), ee = f && R in f, (b != null && b.has(R) || nn && (m != null && m.has(R))) && (g[R] = e[R] ?? G), o.noExpand && Te || d && (U || ((Ze = S == null ? void 0 : S.variants) == null ? void 0 : Ze[h]))) {
            po(g, R, G, U), process.env.NODE_ENV === "development" && c === "verbose" && (console.groupCollapsed(` - passing down prop ${R}`), M({ val: G, after: { ...g[R] } }), console.groupEnd());
            continue;
          }
          if (Te) {
            if (!G)
              continue;
            const H = uo(
              F,
              R,
              G,
              o.noClassNames
            ), q = je[R], Me = R === "enterStyle", le = R === "exitStyle";
            if (process.env.NODE_ENV === "development" && !o.isAnimated && !s.unmounted && (Me || le) && console.warn(
              `No animation prop given to component ${t.componentName || ""} ${e["data-at"] || ""} with enterStyle / exitStyle, these styles will be ignored`,
              { props: e }
            ), !q || le && !o.isExiting)
              continue;
            if ((!_ || nn) && (j || (j = {}), j[R] || (j[R] = {}), nn)) {
              Object.assign(j[R], H);
              continue;
            }
            if (_ && !Me && !le) {
              const be = er(H, q);
              process.env.NODE_ENV === "development" && c === "verbose" && (console.groupCollapsed("pseudo (classes)", R), M({ pseudoStyleObject: H, pseudoStyles: be }), console.groupEnd());
              for (const te of be) {
                const z = `${te.property}${st}${q.name}`;
                z in T || (Ct(v, te), Ot(
                  V,
                  A,
                  z,
                  te.identifier,
                  U,
                  !0
                ));
              }
            } else {
              const be = q.stateKey || q.name, te = s[be];
              let z = le ? !o.isExiting : !te;
              !we && Me && (z = !1), process.env.NODE_ENV === "development" && c === "verbose" && (console.groupCollapsed("pseudo", R, { isDisabled: z }), M(H, {
                isDisabled: z,
                descriptorKey: be,
                descriptor: q,
                pseudoState: te,
                state: { ...s }
              }), console.groupEnd());
              const k = q.priority;
              for (const Z in H) {
                const fe = H[Z];
                if (z) {
                  if (Z in mo && !(Z in T)) {
                    const Se = mo[Z];
                    kn(F, Z, Se);
                  }
                } else {
                  const Se = T[Z] || 0, Ne = k >= Se;
                  Ne && (j || (j = {}), j[R] || (j[R] = {}), j[R][Z] = fe, kn(F, Z, fe)), process.env.NODE_ENV === "development" && c === "verbose" && M("    subKey", Z, Ne, {
                    importance: k,
                    curImportance: Se,
                    pkey: Z,
                    val: fe,
                    transforms: { ...F.transforms }
                  });
                }
              }
              if (!z)
                for (const Z in G) {
                  const fe = u[Z] || Z;
                  T[fe] = Math.max(k, T[fe] || 0);
                }
            }
            continue;
          } else if (he) {
            if (!G)
              continue;
            if (he === "platform") {
              const le = R.slice(10);
              if (
                // supports web, ios, android
                le !== Ii && // supports web, native
                le !== "web"
              )
                continue;
            }
            Y || (Y = !0);
            const H = uo(
              F,
              R,
              G,
              // TODO try true like pseudo
              !1
            ), q = R.slice(1);
            process.env.NODE_ENV === "development" && c === "verbose" && M(`  📺 ${R}`, {
              key: R,
              val: G,
              mediaStyle: H,
              props: e,
              shouldDoClasses: _,
              componentState: s
            });
            const Me = G.space;
            if ((Me || !_) && (Array.isArray(Y) || (Y = []), Y.push(q)), _) {
              if (Me && (delete H.space, $[q])) {
                const te = rs(
                  q,
                  "space",
                  T,
                  !0
                );
                te && (D = G.space, T.space = te, process.env.NODE_ENV === "development" && c === "verbose" && M(
                  `Found more important space for current media ${q}: ${G} (importance: ${te})`
                ));
              }
              const le = oo(H, c), be = qe;
              qe += 1;
              for (const te of le) {
                const z = $a(
                  te,
                  q,
                  es,
                  he,
                  !1,
                  be
                );
                process.env.NODE_ENV === "development" && c === "verbose" && M("📺 media style:", z);
                const k = `${te.property}${st}${q}`;
                k in T || (Ct(v, z), Ot(V, A, k, z.identifier, !0, !0));
              }
            } else {
              const le = he === "theme", be = he === "group";
              if (!le && he !== "platform" && !be && !$[q])
                continue;
              let te = 0;
              if (le) {
                B = !0;
                const z = q.slice(6);
                if (!(r === z || r.startsWith(z)))
                  continue;
              } else if (be) {
                const z = as(q), k = z.name, Z = a == null ? void 0 : a.groups.state[k];
                if (!Z) {
                  process.env.NODE_ENV === "development" && c && console.warn(`No parent with group prop, skipping styles: ${k}`);
                  continue;
                }
                const fe = z.pseudo, Se = z.media, Ne = (Je = s.group) == null ? void 0 : Je[k];
                if (Se) {
                  xe || (xe = /* @__PURE__ */ new Set()), xe.add(Se);
                  const et = Ne == null ? void 0 : Ne.media;
                  let ue = et == null ? void 0 : et[Se];
                  if (!et && Z.layout && (ue = os(Se, Z.layout)), !ue)
                    continue;
                  te = 2;
                }
                if (fe) {
                  if (pe || (pe = /* @__PURE__ */ new Set()), pe.add(k), !((X = (Ne || // fallback to context initially
                  a.groups.state[k]).pseudo) != null && X[fe]))
                    continue;
                  te = ea[fe];
                }
              }
              for (const z in H) {
                if (z === "space") {
                  D = E.space;
                  continue;
                }
                fa(
                  W,
                  q,
                  z,
                  H[z],
                  T,
                  $[q],
                  te
                ), R === "fontFamily" && (F.fontFamily = H.fontFamily);
              }
            }
            continue;
          }
          if (
            // is HOC we can just pass through the styles as props
            // this fixes issues where style prop got merged with wrong priority
            !d && R in w
          ) {
            kn(F, R, G);
            continue;
          }
          ee || (g[R] = G);
        }
      if (process.env.NODE_ENV === "development" && c === "verbose") {
        console.groupCollapsed(" ✔️ expand complete", h);
        try {
          M("style", { ...W }), M("transforms", { ...V }), M("viewProps", { ...g });
        } catch {
        }
        console.groupEnd();
      }
    }
  }
  if (e.style && fo(F, e.style), o.noNormalize !== !1 && (dr(W), !t.isReactNative && ds(W), F.transforms && (Object.entries(F.transforms).sort(([C], [h]) => C.localeCompare(h)).forEach(([C, h]) => {
    ys(W, C, h, !0);
  }), !t.isReactNative && !o.isAnimated && Array.isArray(W.transform) && (W.transform = us(W.transform))), i)) {
    if (_)
      for (const C in i.classNames) {
        const h = i.classNames[C];
        C in W || C in A || (A[C] = h);
      }
    if (!_)
      for (const C in i.style)
        C in A || C in W || (W[C] = i.style[C]);
  }
  if (_) {
    let C, h = !1;
    if (!W.$$css) {
      const E = oo(W);
      for (const K of E) {
        const Q = K.property, ie = o.isAnimated && o.noClassNames && (!e.animateOnly || e.animateOnly.includes(Q)), ee = !ie && !o.isAnimated && ((mt = e.animateOnly) == null ? void 0 : mt.includes(Q));
        ie ? (C || (C = {}), C[Q] = W[Q]) : ee ? (C || (C = {}), C[Q] = K.value, h = !0) : (Ct(v, K), Ot(
          V,
          A,
          Q,
          K.identifier,
          !1,
          !0
        ));
      }
      (h || !nn && !o.keepStyleSSR) && (W = C || {});
    }
    if (V)
      for (const E in V) {
        if (!V[E]) {
          process.env.NODE_ENV === "development" && console.warn("Error no transform", V, E);
          continue;
        }
        const [K, Q] = V[E], ie = `_transform${K}`;
        if (we && !Lt[ie]) {
          const ee = `.${ie} { transform: ${Q}; }`;
          Ct(v, {
            identifier: ie,
            rules: [ee],
            property: E
          });
        }
        A[E] = ie;
      }
  }
  if (!y && g.tabIndex == null) {
    const C = g.focusable ?? g.accessible;
    g.focusable && delete g.focusable;
    const h = g.role;
    C === !1 && (g.tabIndex = "-1"), // These native elements are focusable by default
    l === "a" || l === "button" || l === "input" || l === "select" || l === "textarea" ? (C === !1 || e.accessibilityDisabled === !0) && (g.tabIndex = "-1") : (
      // These roles are made focusable by default
      (h === "button" || h === "checkbox" || h === "link" || h === "radio" || // @ts-expect-error (consistent with RNW)
      h === "textbox" || h === "switch") && C !== !1 && (g.tabIndex = "0")
    ), C && (g.tabIndex = "0", delete g.focusable);
  }
  const Bt = {
    space: D,
    hasMedia: Y,
    fontFamily: F.fontFamily,
    viewProps: g,
    // @ts-expect-error
    style: W,
    pseudos: j,
    classNames: A,
    rulesToInsert: v,
    dynamicThemeAccess: B,
    pseudoGroups: pe,
    mediaGroups: xe
  };
  if (J && (A.className = J), process.env.NODE_ENV === "development" && c === "verbose" && Jn) {
    console.groupCollapsed("  🔹 ===>");
    try {
      const C = {
        ...Bt,
        className: J,
        componentState: s,
        transforms: V,
        viewProps: g,
        viewPropsOrder: Object.keys(g),
        rulesToInsert: v,
        parentSplitStyles: i
      };
      for (const h in C)
        M(h, C[h]);
    } catch {
    }
    console.groupEnd();
  }
  return Bt;
};
function Ot(e, t, n, r, s = !1, o = !1) {
  if (r)
    if (!o && r[0] === "_" && r.startsWith("_transform-")) {
      const i = s ? n : "transform";
      let a = Lt[r];
      we && !a && (Ui(), a = Lt[r], !a && Wt && r[0] !== "_" && (a = r)), e[i] || (e[i] = ["", ""]), e[i][0] += r.replace("_transform", ""), a && (e[i][1] += a);
    } else
      t[n] = r;
}
function kn(e, t, n, r = !1) {
  const { classNames: s, viewProps: o, style: i, usedKeys: a, styleProps: l } = e;
  if ((n == null ? void 0 : n[0]) === "_")
    s[t] = n, a[t] || (a[t] = 1);
  else if (t in ar)
    e.transforms || (e.transforms = {}), e.transforms[t] = n;
  else {
    const c = !r && !l.noNormalize ? ce(n, t) : n;
    t in Lo ? o[t] = c : i[t] = c;
  }
}
const uo = (e, t, n, r) => {
  const { staticConfig: s, props: o, conf: i, styleProps: a } = e, l = {};
  for (let c in n) {
    const u = n[c];
    c = i.shorthands[c] || c;
    const d = hs(c, u, e, { ...o, ...o[t] });
    if (!(!d || !s.isHOC && c in ft && !a.noSkip))
      for (const [p, f] of d)
        !r && p in ar ? ys(l, p, f) : l[p] = a.noNormalize ? f : ce(f, c);
  }
  return a.noNormalize || dr(l), l;
};
function fo(e, t) {
  if (!t)
    return;
  const n = Array.isArray(t) ? t : [t];
  for (const r of n) {
    if (!r)
      continue;
    const s = r.$$css;
    Object.assign(s ? e.classNames : e.style, r);
  }
}
const Ja = Ws || sr, Qa = (...e) => {
  const t = Za(...e);
  return Ja(() => {
    Qi(t.rulesToInsert);
  }, [t.rulesToInsert]), t;
};
function Ct(e, t) {
  Jo(t.identifier) && (Zo(t.identifier, t.rules), e.push(t));
}
function ec(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const mo = {
  opacity: 1,
  scale: 1,
  rotate: "0deg",
  rotateY: "0deg",
  rotateX: "0deg",
  x: 0,
  y: 0
}, tc = (e) => `-${e.toLowerCase()}`, nc = (e) => e.replace(/[A-Z]/g, tc), ys = (e, t, n, r = !1) => {
  typeof e.transform != "string" && (e.transform || (e.transform = []), e.transform[r ? "unshift" : "push"]({
    [rc[t] || t]: n
  }));
}, rc = {
  x: "translateX",
  y: "translateY"
}, ft = {
  untilMeasured: 1,
  animation: 1,
  space: 1,
  animateOnly: 1,
  disableClassName: 1,
  debug: 1,
  componentName: 1,
  disableOptimization: 1,
  tag: 1,
  style: 1,
  // handled after loop so pseudos set usedKeys and override it if necessary
  group: 1
};
process.env.NODE_ENV === "test" && (ft["data-test-renders"] = 1);
Object.assign(ft, {
  elevationAndroid: 1,
  allowFontScaling: !0,
  adjustsFontSizeToFit: !0
});
const oc = {
  adjustable: "slider",
  header: "heading",
  image: "img",
  link: "link",
  none: "presentation",
  summary: "region"
};
function po(e, t, n, r = !1) {
  if (r) {
    const s = {
      ...e[t],
      ...n
    };
    delete e[t], e[t] = s;
  } else
    e[t] = n;
}
const sc = (e, t, n) => {
  const r = {};
  for (const s in e)
    ho(r, e, t, s, n);
  if (t)
    for (const s in t)
      ho(r, t, void 0, s, n);
  return r;
};
function ho(e, t, n, r, s) {
  const o = (s == null ? void 0 : s[r]) || null;
  if (n && (r in n || o && o in n))
    return;
  const i = t[r];
  if (r in je) {
    e[r] = {
      ...e[r],
      ...i
    };
    return;
  }
  e[o || r] = i;
}
function ic(e) {
  return pn(e || {}, {
    has(t, n) {
      return Reflect.has(t, go(n));
    },
    get(t, n) {
      return Reflect.get(t, go(n));
    }
  });
}
const go = (e) => typeof e == "string" && e[0] === "$" ? e.slice(1) : e, xs = Hn(null), bo = { name: "" };
function vs(e) {
  return e.name || e.componentName || e.inverse || e.reset;
}
let ac = 0;
class cc {
  constructor(t = {}, n) {
    He(this, "id", ac++);
    He(this, "themeListeners", /* @__PURE__ */ new Set());
    He(this, "parentManager", null);
    He(this, "state", bo);
    He(this, "_allKeys", null);
    if (this.props = t, n === "root") {
      this.updateStateFromProps(t, !1);
      return;
    }
    if (!n)
      throw process.env.NODE_ENV !== "production" ? new Error(
        "No parent manager given, this is likely due to duplicated Tamagui dependencies. Check your lockfile for mis-matched versions. It could also be from an error somewhere else in your stack causing Tamagui to recieve undefined context, you can try putting some ErrorBoundary components around other areas of your app, or a Suspense boundary."
      ) : "❌ 0";
    if (this.parentManager = n, !this.updateStateFromProps(t, !1))
      return n;
  }
  updateStateFromProps(t = this.props || {}, n = !0) {
    if (this.props = t, t.forceTheme)
      return this.state.theme = t.forceTheme, this.state.name = t.name || "", this.updateState(this.state, !0), this.state;
    const r = this.getStateIfChanged(t);
    if (r)
      return this.updateState(r, n), r;
  }
  updateState(t, n = !0) {
    this.state = t, this._allKeys = null, process.env.NODE_ENV !== "production" && (this._numChangeEventsSent ?? (this._numChangeEventsSent = 0), this._numChangeEventsSent++), n && queueMicrotask(() => {
      this.notify();
    });
  }
  getStateIfChanged(t = this.props, n = this.state, r = this.parentManager) {
    const s = this.getState(t, r);
    if (n && n !== bo && !s)
      return r == null ? void 0 : r.state;
    if (this.getStateShouldChange(s, n))
      return s;
  }
  getStateShouldChange(t, n = this.state) {
    return !(!(t != null && t.theme) || t.theme === (n == null ? void 0 : n.theme));
  }
  getState(t = this.props, n = this.parentManager) {
    return lc(t, n) || null;
  }
  get allKeys() {
    var t;
    return this._allKeys || (this._allKeys = /* @__PURE__ */ new Set([
      ...((t = this.parentManager) == null ? void 0 : t.allKeys) || [],
      ...Object.keys(this.state.theme || {})
    ])), this._allKeys;
  }
  notify(t = !1) {
    this.themeListeners.forEach((n) => n(this.state.name, this, t));
  }
  onChangeTheme(t, n) {
    return process.env.NODE_ENV !== "production" && n && (this._listeningIds ?? (this._listeningIds = /* @__PURE__ */ new Set()), this._listeningIds.add(n)), this.themeListeners.add(t), () => {
      this.themeListeners.delete(t);
    };
  }
}
function lc(e, t) {
  var S, N;
  if (e.name && e.reset)
    throw new Error(
      process.env.NODE_ENV === "production" ? "❌004" : "Cannot reset and set a new name at the same time."
    );
  if (!vs(e))
    return null;
  const n = Li(), [r, s] = dc(t), o = !!(t != null && t.state.isComponent), i = e.reset && !o ? 1 : 0;
  let a = r[i], l = r[i + 1];
  if (!a && e.reset)
    return process.env.NODE_ENV !== "production" && console.warn("Cannot reset, no parent theme exists"), null;
  const { componentName: c } = e;
  let u = null, d = (a == null ? void 0 : a.state.name) || "";
  a != null && a.state.isComponent && (d = d.replace(/_[A-Z][A-Za-z]+/, ""));
  const p = e.reset ? d : e.name || "", f = s.map((w) => (w == null ? void 0 : w.state.name) || "");
  o && f.shift();
  const y = d.split(Qt), b = y.length, m = e.componentName && !p ? b : 0;
  process.env.NODE_ENV !== "production" && typeof e.debug == "string" && typeof window < "u" && (console.groupCollapsed("ThemeManager.getState()"), console.info({ props: e, baseName: d, base: y, min: m, max: b }));
  for (let w = b; w >= m; w--) {
    let g = y.slice(0, w).join(Qt);
    e.inverse && (g = uc(g));
    let $ = [];
    if (g && g !== d && $.push(g), p && $.unshift(g ? `${g}_${p}` : p), w === 1) {
      const _ = $.findIndex((v) => !v.includes("_"));
      _ > 0 && $.splice(_, 0, p);
    }
    if (c && !e.reset) {
      let _ = [];
      if (p) {
        const v = g.slice(0, g.indexOf(Qt));
        _.push(`${v}_${p}_${c}`);
      }
      if (_.push(`${g}_${c}`), p) {
        const v = y.slice(0, w - 1).join(Qt);
        if (v) {
          const V = `${v}_${p}_${c}`;
          _.unshift(V);
        }
        const A = `${g}_${p}_${c}`;
        _.unshift(A);
      }
      $ = [..._, ...$, ...f];
    }
    const T = $.find((_) => _ in n);
    if (process.env.NODE_ENV !== "production" && typeof e.debug == "string" && console.info(" - ", { found: T, potentials: $, baseManager: a, nextName: p, baseName: d, prefix: g }), T) {
      const _ = T.split("_"), [v, ...A] = _, V = _[_.length - 1], j = V[0] === V[0].toUpperCase(), D = v === "light" ? "light" : v === "dark" ? "dark" : void 0, Y = Na, B = `${Y}sub_theme ${Y}${!D || !A.length ? v : A.join("_")}`, pe = (N = (S = a || l) == null ? void 0 : S.state) == null ? void 0 : N.name;
      u = {
        name: T,
        parentName: pe,
        theme: n[T],
        className: B,
        isComponent: j,
        scheme: D
      };
      break;
    }
  }
  return process.env.NODE_ENV !== "production" && typeof e.debug == "string" && typeof window < "u" && (console.warn("ThemeManager.getState():", { result: u }), console.trace(), console.groupEnd()), u;
}
const uc = (e) => e.startsWith("light") ? e.replace(/^light/, "dark") : e.replace(/^dark/, "light");
function dc(e) {
  const t = [], n = [];
  let r = e;
  for (; r; )
    n.push(r), r.state.isComponent && t.push(r), r = r.parentManager;
  return [n, t];
}
const fc = Symbol(), mc = (e) => {
  const t = Mt([]), n = Ns(
    e,
    !1,
    t.current,
    Ke ? void 0 : () => {
      var a, l;
      const i = ((a = e.shouldUpdate) == null ? void 0 : a.call(e)) ?? (t.current.length > 0 ? !0 : void 0);
      return process.env.NODE_ENV === "development" && e.debug && e.debug !== "profile" && console.info("  🎨 useTheme() shouldUpdate?", i, {
        shouldUpdateProp: (l = e.shouldUpdate) == null ? void 0 : l.call(e),
        keys: [...t.current]
      }), i;
    }
  ), { themeManager: r, state: s } = n;
  s != null && s.theme || process.env.NODE_ENV === "development" && process.env.TAMAGUI_DISABLE_NO_THEME_WARNING !== "1" && console.warn(
    `[tamagui] No theme found, this could be due to an invalid theme name (given theme props ${JSON.stringify(
      e
    )}).

If this is intended and you are using Tamagui without any themes, you can disable this warning by setting the environment variable TAMAGUI_DISABLE_NO_THEME_WARNING=1`
  );
  const o = fn(() => !r || !(s != null && s.theme) ? {} : pc(s, e.deopt, r, t.current, e.debug), [s == null ? void 0 : s.theme, r, e.deopt, e.debug]);
  return process.env.NODE_ENV === "development" && e.debug === "verbose" && (console.groupCollapsed("  🔹 useTheme =>", s == null ? void 0 : s.name), console.info("returning state", n, "from props", e), console.groupEnd()), [n, o];
};
function pc({ theme: e, name: t, scheme: n }, r = !1, s, o, i) {
  if (!e)
    return {};
  Oe();
  function a(l) {
    o && !o.includes(l) && (o.push(l), process.env.NODE_ENV === "development" && i && console.info(` 🎨 useTheme() tracking new key: ${l}`));
  }
  return pn(e, {
    has(l, c) {
      if (Reflect.has(e, c))
        return !0;
      if (typeof c == "string")
        return c[0] === "$" && (c = c.slice(1)), s == null ? void 0 : s.allKeys.has(c);
    },
    get(l, c) {
      if (c === fc)
        return e;
      if (
        // dont ask me, idk why but on hermes you can see that useTheme()[undefined] passes in STRING undefined to proxy
        // if someone is crazy enough to use "undefined" as a theme key then this not working is on them
        c !== "undefined" && typeof c == "string"
      ) {
        const u = c[0] === "$" ? c.slice(1) : c, d = e[u];
        if (d && typeof d == "object")
          return new Proxy(d, {
            // when they touch the actual value we only track it
            // if its a variable (web), its ignored!
            get(p, f) {
              if (f === "val")
                a(u);
              else if (f === "get")
                return (y) => Xi(d);
              return Reflect.get(d, f);
            }
          });
        if (process.env.NODE_ENV === "development" && process.env.TAMAGUI_FEAT_THROW_ON_MISSING_THEME_VALUE === "1")
          throw new Error(
            `[tamagui] No theme key "${c}" found in theme ${t}. 
  Keys in theme: ${Object.keys(
              e
            ).join(", ")}`
          );
      }
      return Reflect.get(l, c);
    }
  });
}
const So = /* @__PURE__ */ new Set(), Ns = (e, t = !1, n, r) => {
  const { disable: s } = e, o = Vt(xs);
  if (!t && !o || s)
    return {
      isNewTheme: !1,
      state: o == null ? void 0 : o.state,
      themeManager: o
    };
  const [i, a] = mn(b), { state: l, mounted: c, isNewTheme: u, themeManager: d, inversed: p } = i, f = !!(!i.mounted && e.inverse);
  function y(m = d, S, N = l, w = !1) {
    const g = r == null ? void 0 : r();
    if (!m || !w && g === !1)
      return;
    const $ = S || m.getState(e, o);
    if (w || $ && !(g !== !0 && !m.getStateShouldChange($, N)))
      return $;
  }
  if (Ke || (To(() => {
    if (!d)
      return;
    if (e.inverse && !c) {
      a((N) => b({
        ...N,
        mounted: !0
      }));
      return;
    }
    u && d && So.add(d), (u || y(d)) && a(b);
    const m = d.onChangeTheme((N, w, g) => {
      g && a(($) => b($, !0));
    }), S = o == null ? void 0 : o.onChangeTheme(
      (N, w, g) => {
        const $ = g || (r == null ? void 0 : r()) || e.deopt || void 0, T = $ ?? !!(n != null && n.length || u);
        process.env.NODE_ENV === "development" && e.debug === "verbose" && console.info(" 🔸 onChange", d.id, { force: $, shouldTryUpdate: T, props: e, name: N, manager: w, keys: n }), T && a(b);
      },
      d.id
    );
    return () => {
      m(), S == null || S(), So.delete(d);
    };
  }, [
    d,
    o,
    u,
    e.componentName,
    e.inverse,
    e.name,
    e.reset,
    c
  ]), process.env.NODE_ENV === "development" && e.debug !== "profile" && Ge(() => (globalThis.TamaguiThemeManagers ?? (globalThis.TamaguiThemeManagers = /* @__PURE__ */ new Set()), globalThis.TamaguiThemeManagers.add(d), () => {
    globalThis.TamaguiThemeManagers.delete(d);
  }), [d])), f)
    return {
      isNewTheme: !1,
      inversed: !1,
      themeManager: o,
      state: {
        name: "",
        ...o == null ? void 0 : o.state,
        className: ""
      }
    };
  return {
    state: l,
    isNewTheme: u,
    inversed: p,
    themeManager: d
  };
  function b(m, S = !1) {
    if (m && (r == null ? void 0 : r()) === !1 && !S)
      return m;
    let N = o, w;
    if (vs(e)) {
      const V = () => new cc(e, t ? "root" : o);
      if (m != null && m.themeManager) {
        N = m.themeManager;
        const j = S || !!(n != null && n.length), D = N.getState(e, o), Y = y(
          N,
          D,
          m.state,
          j
        );
        Y ? (w = Y, m.isNewTheme ? N.updateState(Y) : N = V()) : m.isNewTheme && o && !D && (N = o);
      } else
        N = V(), w = { ...N.state };
    }
    const g = !!(N !== o || e.inverse), $ = e.inverse ? t || (m == null ? void 0 : m.mounted) : !0;
    w || (g ? w = N.state : (w = o.state, N = o));
    const T = m == null ? void 0 : m.inversed, _ = g && w.scheme !== (o == null ? void 0 : o.state.scheme) ? !0 : T ? !1 : null, v = {
      themeManager: N,
      isNewTheme: g,
      mounted: $,
      inversed: _
    }, A = !S && m && // isEqualShallow uses the second arg as the keys so this should compare without state first...
    Zn(m, v) && // ... and then compare just the state, because we make a new state obj but is likely the same
    Zn(m.state, w);
    if (m && A)
      return m;
    if (v.state = w, process.env.NODE_ENV === "development" && e.debug && we) {
      console.groupCollapsed(` 🔷 ${N.id} useChangeThemeEffect createState`);
      const V = { ...o == null ? void 0 : o.state }, j = o == null ? void 0 : o.id, D = { ...N.state };
      console.info({
        props: e,
        parentState: V,
        parentId: j,
        themeManager: N,
        prev: m,
        response: v,
        themeManagerState: D
      }), console.groupEnd();
    }
    return v;
  }
}, hc = typeof window > "u", gc = () => {
};
function bc() {
  return hc ? gc : js((e) => Math.random(), 0)[1];
}
let ae;
function Es({
  themeState: e,
  themeProps: t,
  children: n
}) {
  var r, s, o, i, a, l, c, u;
  if (t["disable-child-theme"])
    return n;
  if (process.env.NODE_ENV === "development") {
    const [d, p] = mn(0), f = bc(), y = $o();
    return process.env.NODE_ENV === "development" && typeof document < "u" && (ae || (ae = document.createElement("div"), ae.style.height = "200px", ae.style.overflowY = "scroll", ae.style.position = "fixed", ae.style.zIndex = 1e7, ae.style.bottom = "30px", ae.style.left = "30px", ae.style.right = "30px", ae.style.display = "flex", ae.style.border = "1px solid #888", ae.style.flexDirection = "row", ae.style.background = "var(--background)", document.body.appendChild(ae))), Ge(() => {
      var b, m;
      (m = (b = e.themeManager) == null ? void 0 : b.parentManager) == null || m.onChangeTheme((S, N) => {
        var w, g, $;
        p((T) => ++T), console.warn(
          `theme changed for ${(w = e.themeManager) == null ? void 0 : w.id} from parent ${($ = (g = e.themeManager) == null ? void 0 : g.parentManager) == null ? void 0 : $.id} to new name`,
          S
        );
      });
    }, [e.themeManager]), Ge(() => {
      const b = setInterval(f, 1e3);
      return () => clearTimeout(b);
    }, []), /* @__PURE__ */ zn(ks, { children: [
      Hs(
        /* @__PURE__ */ zn(
          "code",
          {
            style: {
              whiteSpace: "pre"
            },
            children: [
              "<Theme ",
              y,
              " /> ",
              JSON.stringify(
                {
                  name: (r = e == null ? void 0 : e.state) == null ? void 0 : r.name,
                  className: (s = e == null ? void 0 : e.state) == null ? void 0 : s.className,
                  inverse: t.inverse,
                  forceClassName: t.forceClassName,
                  parent: (o = e.themeManager) == null ? void 0 : o.state.parentName,
                  id: (i = e.themeManager) == null ? void 0 : i.id,
                  parentId: (l = (a = e.themeManager) == null ? void 0 : a.parentManager) == null ? void 0 : l.id,
                  isNew: e.isNewTheme,
                  onChangeCount: d,
                  listening: [...((c = e.themeManager) == null ? void 0 : c._listeningIds) || []].join(
                    ","
                  ),
                  _numChangeEventsSent: (u = e.themeManager) == null ? void 0 : u._numChangeEventsSent
                },
                null,
                2
              )
            ]
          }
        ),
        ae
      ),
      /* @__PURE__ */ I("div", { style: { color: "red" }, children: y }),
      n
    ] });
  }
  return n;
}
const pr = It(function(e, t) {
  if (e.disable)
    return e.children;
  const n = !!e._isRoot, r = e["disable-child-theme"], s = Ns(e, n), o = fn(() => {
    let i = r ? Ue.map(
      e.children,
      (a) => cn(a, { "data-disable-theme": !0 })
    ) : e.children;
    if (t)
      try {
        Pe.Children.only(i), i = cn(i, { ref: t });
      } catch {
      }
    return process.env.NODE_ENV === "development" && e.debug === "visualize" && (i = /* @__PURE__ */ I(Es, { themeState: s, themeProps: e, children: i })), i;
  }, [e.children, r]);
  return ws(s, o, e, n);
});
pr.avoidForwardRef = !0;
function ws(e, t, n, r = !1, s = !1) {
  const { themeManager: o, isNewTheme: i } = e, { shallow: a, forceClassName: l } = n, c = Mt(!1);
  if (i && (c.current = !0), !(i || n.inverse || c.current || l || r))
    return t;
  let u = t;
  a && o && (u = Ue.toArray(t).map((p) => Oo(p) ? cn(
    p,
    void 0,
    /* @__PURE__ */ I(pr, { name: o.state.parentName, children: p.props.children })
  ) : p));
  const d = o ? /* @__PURE__ */ I(xs.Provider, { value: o, children: u }) : u;
  return l === !1 || s ? d : Sc({
    children: d,
    themeState: e,
    forceClassName: l,
    isRoot: r
  });
}
function Sc({
  children: e,
  themeState: t,
  forceClassName: n,
  isRoot: r
}) {
  var c;
  if (r && n === !1)
    return e;
  const s = t.inversed, o = s != null || n;
  if (!t.isNewTheme && !o)
    return /* @__PURE__ */ I("span", { className: "_dsp_contents is_Theme", children: e });
  const { className: i, style: a } = yc(t, r);
  let l = /* @__PURE__ */ I("span", { className: `${i} _dsp_contents is_Theme`, style: a, children: e });
  if (o) {
    const u = ((c = t.state) == null ? void 0 : c.name) || "", d = u.startsWith("light") ? "t_light is_inversed" : u.startsWith("dark") ? "t_dark is_inversed" : "";
    l = /* @__PURE__ */ I("span", { className: `${s ? d : ""} _dsp_contents`, children: l });
  }
  return l;
}
function yc(e, t = !1) {
  var o, i;
  const n = (o = e.state) != null && o.theme && e.isNewTheme ? Gn(e.state.theme.color) : "", r = n ? {
    color: n
  } : void 0;
  let s = ((i = e.state) == null ? void 0 : i.className) || "";
  return t && (s = s.replace("t_sub_theme", "")), { style: r, className: s };
}
function xc(e, t) {
  const n = It(function(r, s) {
    const { themeInverse: o, theme: i, componentName: a, themeReset: l, ...c } = r, u = /* @__PURE__ */ I(e, { ref: s, ...c, "data-disable-theme": !0 });
    return /* @__PURE__ */ I(
      pr,
      {
        componentName: a || (t == null ? void 0 : t.componentName),
        name: i,
        "disable-child-theme": !0,
        debug: r.debug,
        inverse: o,
        reset: l,
        children: u
      }
    );
  });
  return n.displayName = `Themed(${(e == null ? void 0 : e.displayName) || (e == null ? void 0 : e.name) || "Anonymous"})`, n;
}
const Re = {};
function vc(e) {
  Object.assign(Re, e);
}
const Nc = It(function(e, t) {
  const { children: n, ...r } = e;
  if (Oo(n)) {
    const s = Ec(n, r);
    return cn(
      n,
      n.type.avoidForwardRef ? s : {
        ...s,
        ref: ss(t, n.ref)
      }
    );
  }
  return Ue.count(n) > 1 ? Ue.only(null) : null;
}), rn = {
  onPress: "onClick",
  onPressOut: "onMouseUp",
  onPressIn: "onMouseDown"
};
function Ec(e, t) {
  const n = e.props, r = { ...n }, s = typeof e.type == "string";
  if (s)
    for (const o in rn)
      o in t && (t[rn[o]] = t[o], delete t[o]);
  for (let o in n) {
    const i = t[o], a = n[o];
    s && o in rn && (o = rn[o], delete r[o]), wc.test(o) ? r[o] = ko(a, i) : o === "style" ? r[o] = { ...i, ...a } : o === "className" && (r[o] = [i, a].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
const wc = /^on[A-Z]/;
let Wn, yo, xo, jn, P, Rt, an;
const Dt = /* @__PURE__ */ new Set();
if (typeof document < "u") {
  const e = () => {
    Dt.forEach((t) => t()), Dt.clear();
  };
  addEventListener("mouseup", e), addEventListener("touchend", e), addEventListener("touchcancel", e), process.env.NODE_ENV === "development" && (an = () => {
  });
}
function gn(e) {
  var b;
  let t = null;
  zi((m) => {
    if (t = m, !Wn && (Wn = m, !jn)) {
      const S = m.themes[Object.keys(m.themes)[0]];
      jn = ic(S), process.env.NODE_ENV === "development" && (jn || M("Warning: Missing theme"));
    }
  });
  const {
    Component: n,
    isText: r,
    isZStack: s,
    isHOC: o,
    validStyles: i = {},
    variants: a = {}
  } = e, l = `is_${e.componentName}`, c = e.defaultProps;
  process.env.NODE_ENV === "development" && ((b = e.defaultProps) != null && b.debug) && process.env.IS_STATIC !== "is_static" && M(`🐛 [${e.componentName || "Component"}]`, {
    staticConfig: e,
    defaultProps: c,
    defaultPropsKeyOrder: c ? Object.keys(c) : []
  });
  const u = It((m, S) => {
    var wr, Tr, _r, $r, Or, Cr, Rr, Pr, Ar, Dr;
    process.env.NODE_ENV === "development" && an && (an(), an = void 0), process.env.NODE_ENV === "test" && m["data-test-renders"] && ((wr = m["data-test-renders"]).current ?? (wr.current = 0), m["data-test-renders"].current += 1);
    const N = Vt(qn);
    let w, g, $;
    const { context: T } = e;
    if (T) {
      $ = Vt(T);
      const { inverseShorthands: x } = Oe();
      for (const O in T.props) {
        const re = (
          // because its after default props but before props this annoying amount of checks
          m[O] ?? m[x[O]] ?? (c == null ? void 0 : c[O]) ?? (c == null ? void 0 : c[x[O]])
        );
        re === void 0 ? $ && (O in i || O in a) && (w || (w = {}), w[O] = $[O]) : (g || (g = {}), g[O] = re);
      }
    }
    const _ = w ? { ...c, ...w } : c;
    let v = m;
    _ && (v = sc(_, m));
    const A = v.debug, V = v.componentName || e.componentName;
    process.env.NODE_ENV === "development" && we && Ge(() => {
      let x = null;
      const O = (re = !1) => {
        const se = Y.current;
        if (se)
          if (re) {
            x = document.createElement("span"), x.style.inset = "0px", x.style.zIndex = "1000000", x.style.position = "absolute", x.style.borderColor = "red", x.style.borderWidth = "1px", x.style.borderStyle = "dotted";
            const Ee = se.getAttribute("data-at") || "", ze = se.getAttribute("data-in") || "", de = document.createElement("span");
            de.style.position = "absolute", de.style.top = "0px", de.style.left = "0px", de.style.padding = "3px", de.style.background = "rgba(0,0,0,0.75)", de.style.color = "rgba(255,255,255,1)", de.style.fontSize = "12px", de.style.lineHeight = "12px", de.style.fontFamily = "monospace", de.style.webkitFontSmoothing = "none", de.innerText = `${V || ""} ${Ee} ${ze}`.trim(), x.appendChild(de), se.appendChild(x);
          } else
            x && se.removeChild(x);
      };
      return Rt || (Rt = /* @__PURE__ */ new Set()), Rt.add(O), () => {
        Rt == null || Rt.delete(O);
      };
    }, [V]), !process.env.TAMAGUI_IS_CORE_NODE && process.env.NODE_ENV === "development" && A === "profile" && !P && (P = ga().timer().start()), process.env.NODE_ENV === "development" && P && P`start (ignore)`;
    const j = t != null && t.disableSSR ? !0 : va();
    process.env.NODE_ENV === "development" && P && P`did-finish-ssr`;
    const D = Mt(
      void 0
    );
    D.current || (D.current = {}), process.env.NODE_ENV === "development" && P && P`stateref`;
    const Y = Mt(null), B = N.animationDriver, pe = B == null ? void 0 : B.useAnimations, xe = !!(v.animation || v.style && Cc(v.style)), W = B == null ? void 0 : B.supportsCSSVars, J = (() => {
      if (Ke && !W)
        return !1;
      const x = D.current;
      return !!(xe && !o && pe || x.hasAnimated);
    })(), qe = B == null ? void 0 : B.usePresence, F = J && (qe == null ? void 0 : qe()) || null, Bt = !!v.enterStyle, zt = !!(we && J);
    process.env.NODE_ENV === "development" && P && P`pre-use-state`;
    const Ze = J ? W ? wa : ur : Ea, Je = mn(Ze), X = m.forceStyle ? { ...Je[0], [m.forceStyle]: !0 } : Je[0], mt = Je[1];
    let C = Ta(mt);
    const h = v.group, E = h ? `t_group_${v.group}` : "";
    if (h) {
      const x = N.groups.state, O = C;
      C = (re) => {
        O(re), N.groups.emit(h, {
          pseudo: re
        });
        const se = {
          ...x[h],
          ...re
        };
        x[h] = se;
      };
    }
    process.env.NODE_ENV === "development" && P && P`use-state`;
    let K = J;
    J && !W && !F && j && (Ke || X.unmounted === !0) && (K = !1), J && !D.current.hasAnimated && (D.current.hasAnimated = !0);
    const Q = v.asChild ? "" : v.componentName ? `is_${v.componentName}` : l, ie = !!(r && N.inText), ee = v.disabled ?? ((Tr = v.accessibilityState) == null ? void 0 : Tr.disabled);
    process.env.NODE_ENV === "development" && P && P`use-context`;
    const ve = (!n || typeof n == "string") && v.tag || n, Te = ve || "span", he = ve || (ie ? "span" : "div");
    yo = B ? B.Text : Te, xo = B ? B.View : he;
    let U = r ? (K ? yo : null) || Te : (K ? xo : null) || he;
    if (K && F) {
      const x = F[2];
      if (x) {
        const O = X.unmounted, re = !x.isPresent, se = x.enterExitVariant, Ee = se ?? x.enterVariant, ze = se ?? x.exitVariant;
        O && Ee ? (process.env.NODE_ENV === "development" && A === "verbose" && console.warn(`Animating presence ENTER "${Ee}"`), v[Ee] = !0) : re && ze && (process.env.NODE_ENV === "development" && A === "verbose" && console.warn(`Animating presence EXIT "${Ee}"`), v[ze] = !se);
      }
    }
    const pt = xe && (B == null ? void 0 : B.isReactNative), ge = !!(e.isReactNative || pt), Ht = !!(K || !e.acceptsClassName || m.disableClassName), Qe = !!m.forceStyle, De = Ht || Qe, Ve = v["data-disable-theme"], Xt = Ve && !J || o;
    process.env.NODE_ENV === "development" && P && P`theme-props`, v.themeShallow && (D.current.themeShallow = !0);
    const R = {
      name: v.theme,
      componentName: V,
      disable: Xt,
      shallow: D.current.themeShallow,
      inverse: v.themeInverse,
      debug: A
    };
    typeof D.current.isListeningToTheme == "boolean" && (R.shouldUpdate = () => D.current.isListeningToTheme);
    const G = !X.unmounted && (F == null ? void 0 : F[0]) === !1;
    if (process.env.NODE_ENV === "development") {
      const x = $o();
      if (A && A !== "profile") {
        const O = `${V || (n == null ? void 0 : n.displayName) || (n == null ? void 0 : n.name) || "[Unnamed Component]"}`, re = pt ? "(animated)" : ge ? "(rnw)" : "", se = m["data-is"] || "", Ee = `${O}${se ? ` ${se}` : ""} ${re} id ${x}`;
        console.group(
          `%c ${Ee} (unmounted: ${X.unmounted})${F ? ` (presence: ${F[0]})` : ""} ${j ? "💦" : "🏜️"}`,
          "background: green; color: white;"
        ), Ke || (console.groupCollapsed(
          `Info (collapsed): ${X.press || X.pressIn ? "PRESSED " : ""}${X.hover ? "HOVERED " : ""}${X.focus ? "FOCUSED" : " "}`
        ), M({
          propsIn: m,
          props: v,
          state: X,
          staticConfig: e,
          elementType: U,
          themeStateProps: R,
          styledContext: { contextProps: w, overriddenContextProps: g },
          presence: F,
          isAnimated: K,
          isHOC: o,
          hasAnimationProp: xe,
          useAnimations: pe,
          propsInOrder: Object.keys(m),
          propsOrder: Object.keys(v)
        }), console.groupEnd());
      }
    }
    process.env.NODE_ENV === "development" && P && P`pre-theme-media`;
    const [H, q] = mc(R);
    U = n || U;
    const Me = typeof U == "string";
    process.env.NODE_ENV === "development" && P && P`theme`;
    const le = da(D, N);
    process.env.NODE_ENV === "development" && P && P`media`, lr(!1);
    const be = (
      // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
      K && !W || o && X.unmounted == !1 && xe ? "value" : "auto"
    ), te = J && (B == null ? void 0 : B.keepStyleSSR), z = {
      mediaState: le,
      noClassNames: De,
      resolveValues: be,
      isExiting: G,
      isAnimated: K,
      keepStyleSSR: te
    }, k = Qa(
      v,
      e,
      q,
      ((_r = H == null ? void 0 : H.state) == null ? void 0 : _r.name) || "",
      X,
      z,
      null,
      N,
      U,
      A
    );
    v.group && v.untilMeasured === "hide" && !D.current.hasMeasured && (k.style.opacity = 0), process.env.NODE_ENV === "development" && P && P`split-styles`, D.current.isListeningToTheme = k.dynamicThemeAccess;
    const Z = k.hasMedia && Array.isArray(k.hasMedia), fe = Yi() || Z || De && k.hasMedia === !0, Se = Z ? k.hasMedia : null;
    la(D, {
      enabled: fe,
      keys: Se
    });
    const Ne = xe && ge;
    if (process.env.NODE_ENV === "development" && A && A !== "profile" && (console.groupCollapsed(">>>"), M("props in", m, "mapped to", v, "in order", Object.keys(v)), M("splitStyles", k), M("media", { shouldListenForMedia: fe, isMediaArray: Z, mediaListeningKeys: Se }), M("className", Object.values(k.classNames)), we && M("ref", Y, "(click to view)"), console.groupEnd(), A === "break"))
      debugger;
    const {
      viewProps: et,
      pseudos: ue,
      style: hr,
      classNames: bn,
      space: Cs
    } = k, Rs = v;
    let Sn;
    if (J && pe && !o) {
      const x = pe({
        props: Rs,
        // if hydrating, send empty style
        style: hr,
        // style: splitStylesStyle,
        presence: F,
        componentState: X,
        styleProps: z,
        theme: ($r = H.state) == null ? void 0 : $r.theme,
        pseudos: ue || null,
        hostRef: Y,
        staticConfig: e
      });
      K && x && (Sn = x.style), process.env.NODE_ENV === "development" && P && P`animations`;
    }
    const {
      asChild: ht,
      children: yn,
      themeShallow: Fc,
      spaceDirection: kc,
      disabled: Wc,
      onPress: gt,
      onLongPress: bt,
      onPressIn: St,
      onPressOut: yt,
      onHoverIn: xt,
      onHoverOut: vt,
      onMouseUp: Yt,
      onMouseDown: Kt,
      onMouseEnter: Nt,
      onMouseLeave: Et,
      onFocus: Gt,
      onBlur: Ut,
      separator: Ps,
      // ignore from here on out
      forceStyle: jc,
      // @ts-ignore  for next/link compat etc
      onClick: qt,
      theme: gr,
      // @ts-ignore
      defaultVariants: Lc,
      ...wt
    } = et;
    process.env.NODE_ENV === "development" && v.untilMeasured && !v.group && console.warn(
      `You set the untilMeasured prop without setting group. This doesn't work, be sure to set untilMeasured on the parent that sets group, not the children that use the $group- prop.

If you meant to do this, you can disable this warning - either change untilMeasured and group at the same time, or do group={conditional ? 'name' : undefined}`
    ), process.env.NODE_ENV === "development" && P && P`destructure`;
    const xn = ((Or = v.accessibilityState) == null ? void 0 : Or.disabled) || // @ts-expect-error (comes from core)
    v.accessibilityDisabled;
    let L = wt;
    o && gr && (L.theme = gr), h && (wt.onLayout = ko(
      wt.onLayout,
      (x) => {
        N.groups.emit(h, {
          layout: x.nativeEvent.layout
        }), !D.current.hasMeasured && v.untilMeasured === "hide" && mt((O) => ({ ...O })), D.current.hasMeasured = !0;
      }
    )), !ge && !J && !ht ? L = (Cr = Re.usePropsTransform) == null ? void 0 : Cr.call(Re, U, wt, Y) : L = wt;
    const As = Sa(Y, S);
    L.ref = As, process.env.NODE_ENV === "development" && !ge && !r && Wt && !o && Ue.toArray(v.children).forEach((x) => {
      typeof x == "string" && x !== `
` && console.error(
        `Unexpected text node: ${x}. A text node cannot be a child of a <View>.`
      );
    }), process.env.NODE_ENV === "development" && P && P`events-hooks`;
    let Le = () => C({
      press: !1,
      pressIn: !1
    });
    Le = Co(Le, []);
    const br = zt && X.unmounted, { pseudoGroups: tt, mediaGroups: Tt } = k;
    Ge(() => {
      if (br) {
        const O = X.unmounted === !0 && Bt ? "should-enter" : !1;
        C({
          unmounted: O
        });
        return;
      }
      let x;
      if (tt || Tt) {
        const O = {
          pseudo: {},
          media: {}
        };
        x = N.groups.subscribe(
          (re, { layout: se, pseudo: Ee }) => {
            if (Ee && (tt != null && tt.has(re)))
              Object.assign(O.pseudo, Ee), ze();
            else if (se && Tt) {
              const de = Rc(Tt, se), Vr = is(O.media, de);
              Vr !== O.media && (Object.assign(O.media, Vr), ze());
            }
            function ze() {
              C({
                // force it to be referentially different so it always updates
                group: {
                  ...X.group,
                  [re]: O
                }
              });
            }
          }
        );
      }
      return () => {
        x == null || x(), Dt.delete(Le);
      };
    }, [
      br,
      X.unmounted,
      tt ? Object.keys([...tt]).join("") : 0,
      Tt ? Object.keys([...Tt]).join("") : 0
    ]);
    const Sr = te && X.unmounted === !0;
    let nt = r ? k.fontFamily || ((Rr = e.defaultProps) == null ? void 0 : Rr.fontFamily) : null;
    nt && nt[0] === "$" && (nt = nt.slice(1));
    const yr = nt ? `font_${nt}` : "", Be = Sr ? k.style : Sn || k.style;
    let Zt;
    {
      let x = [];
      if (V && x.push(Q), yr && x.push(yr), bn && x.push(Object.values(bn).join(" ")), E && x.push(E), Zt = x.join(" "), Ne && !Sr)
        L.style = Be;
      else if (ge) {
        const O = { $$css: !0 };
        for (const re of Zt.split(" "))
          O[re] = re;
        L.style = [...Array.isArray(Be) ? Be : [Be], O];
      } else
        L.className = Zt, L.style = Be;
      ge && process.env.NODE_ENV === "development" && Object.keys(L).forEach((O) => {
        O.startsWith("data-") && (L.dataSet ?? (L.dataSet = {}), L.dataSet[O.replace("data-", "")] = L[O], delete L[O]);
      });
    }
    const rt = !xn && De && (ue == null ? void 0 : ue.pressStyle), Ds = !xn && De && (ue == null ? void 0 : ue.focusStyle), xr = !!(rt || Gt || Ut), ot = !!(h || rt || gt || yt || St || bt || qt), vr = !xn && De && (ue == null ? void 0 : ue.hoverStyle), vn = vr || xt || vt, Nn = !!(h || vn || Nt || Et), Vs = !Wt, Nr = !!(xr || ot || Nn || rt || vr || Ds);
    process.env.NODE_ENV === "development" && P && P`events-setup`;
    const Ie = Nr && !ee && !v.asChild ? {
      onPressOut: ot ? (x) => {
        Le(), yt == null || yt(x), Yt == null || Yt(x);
      } : void 0,
      ...(Nn || ot) && {
        onMouseEnter: (x) => {
          const O = {};
          vn && (O.hover = !0), rt && X.pressIn && (O.press = !0), C(O), xt == null || xt(x), Nt == null || Nt(x);
        },
        onMouseLeave: (x) => {
          const O = {};
          Dt.add(Le), vn && (O.hover = !1), rt && X.pressIn && (O.press = !1, O.pressIn = !1), C(O), vt == null || vt(x), Et == null || Et(x);
        }
      },
      onPressIn: ot ? (x) => {
        rt && C({
          press: !0,
          pressIn: !0
        }), St == null || St(x), Kt == null || Kt(x), Dt.add(Le);
      } : void 0,
      onPress: ot ? (x) => {
        Le(), qt == null || qt(x), gt == null || gt(x), bt == null || bt(x);
      } : void 0,
      ...xr && {
        onFocus: (x) => {
          C({
            focus: !0
          }), Gt == null || Gt(x);
        },
        onBlur: (x) => {
          C({
            focus: !1
          }), Ut == null || Ut(x);
        }
      }
    } : null;
    Ie && !ge && Object.assign(L, Ln(Ie)), process.env.NODE_ENV === "development" && P && P`events`, process.env.NODE_ENV === "development" && A === "verbose" && M("events", { events: Ie, isHoverable: Nn, attachPress: ot }), (Pr = Re.useEvents) == null || Pr.call(Re, L, Ie, k, C, e);
    const Ms = v.spaceDirection || "both";
    process.env.NODE_ENV === "development" && P && P`hooks`;
    let ne = !yn || ht ? yn : $c({
      separator: Ps,
      children: yn,
      space: Cs,
      direction: Ms,
      isZStack: s,
      debug: A
    });
    if (ht) {
      U = Nc;
      {
        const x = Ln(
          {
            onPress: gt,
            onLongPress: bt,
            onPressIn: St,
            onPressOut: yt,
            onHoverIn: xt,
            onHoverOut: vt,
            onMouseUp: Yt,
            onMouseDown: Kt,
            onMouseEnter: Nt,
            onMouseLeave: Et
          },
          ht === "web" || ht === "except-style-web"
        );
        Object.assign(L, x);
      }
    }
    process.env.NODE_ENV === "development" && P && P`spaced-as-child`;
    let En;
    Re.useChildren && (En = Re.useChildren(
      U,
      ne,
      L,
      Ie,
      e
    )), En ? ne = En : ne = Ls(U, L, ne), process.env.NODE_ENV === "development" && P && P`create-element`;
    const Er = fn(() => {
      if (h)
        return {
          ...N.groups,
          // change reference so as we mutate it doesn't affect siblings etc
          state: {
            ...N.groups.state,
            [h]: {
              pseudo: Ze,
              // capture just initial width and height if they exist
              // will have top, left, width, height (not x, y)
              layout: {
                width: No(k.style.width),
                height: No(k.style.height)
              }
            }
          }
        };
    }, [h]);
    if (h && Er && (ne = /* @__PURE__ */ I(qn.Provider, { groups: Er, children: ne })), process.env.NODE_ENV === "development" && P && P`group-context`, ne = Ve ? ne : ws(H, ne, R, !1), process.env.NODE_ENV === "development" && P && P`themed-children`, process.env.NODE_ENV === "development" && v.debug === "visualize" && (ne = /* @__PURE__ */ I(Es, { themeState: H, themeProps: v, children: ne })), ge && (ne = /* @__PURE__ */ I(
      "span",
      {
        className: `${Ne ? Zt : ""} _dsp_contents`,
        ...Ie && Ln(Ie),
        children: ne
      }
    )), e.context) {
      const x = e.context.props;
      for (const O in x)
        (O in Be || O in L) && (g || (g = {}), g[O] = Be[O] ?? L[O]);
    }
    if (g) {
      const x = e.context.Provider;
      ne = /* @__PURE__ */ I(x, { ...$, ...g, children: ne });
    }
    if (process.env.NODE_ENV === "development" && A && A !== "profile") {
      console.groupCollapsed(`render <${typeof U == "string" ? U : "Component"} /> with props`);
      try {
        M("viewProps", L), M("viewPropsOrder", Object.keys(L));
        for (const x in L)
          M(" - ", x, L[x]);
        M("children", ne), typeof window < "u" && M({
          viewProps: L,
          state: X,
          styleProps: z,
          themeState: H,
          isAnimated: K,
          isAnimatedReactNativeWeb: Ne,
          defaultProps: c,
          splitStyles: k,
          animationStyles: Sn,
          handlesPressEvents: Vs,
          willBeAnimated: J,
          isStringElement: Me,
          classNamesIn: (Ar = v.className) == null ? void 0 : Ar.split(" "),
          classNamesOut: (Dr = L.className) == null ? void 0 : Dr.split(" "),
          events: Ie,
          shouldAttach: Nr,
          pseudos: ue,
          content: ne,
          shouldAvoidClasses: Ht,
          animation: v.animation,
          splitStylesStyle: hr,
          staticConfig: e,
          tamaguiConfig: Wn,
          shouldForcePseudo: Qe,
          elementType: U,
          initialState: Ze,
          classNames: bn
        });
      } catch {
      }
      console.groupEnd(), console.groupEnd();
    }
    return process.env.NODE_ENV === "development" && P && (P`rest`, globalThis.willPrint || (globalThis.willPrint = !0, setTimeout(() => {
      delete globalThis.willPrint, P.print(), P = null;
    }, 50))), ne;
  });
  e.componentName && (u.displayName = e.componentName);
  let d = u;
  (process.env.TAMAGUI_FORCE_MEMO || e.memo) && (d = Mr(d)), d.staticConfig = e;
  function p(m) {
    return {
      ...e,
      ...m,
      neverFlatten: !0,
      isHOC: !0,
      isStyledHOC: !1
    };
  }
  function f(m, S) {
    return m.staticConfig = p(S), m.styleable = y, m;
  }
  function y(m, S) {
    var g;
    let N = ((g = m.render) == null ? void 0 : g.length) === 2 ? m : It(m);
    const w = p(S == null ? void 0 : S.staticConfig);
    return N = S != null && S.disableTheme ? N : xc(N, w), process.env.TAMAGUI_MEMOIZE_STYLEABLE && (N = Mr(N)), N.staticConfig = w, N.styleable = y, N;
  }
  return d.extractable = f, d.styleable = y, d;
}
function Ln(e, t = !0) {
  return {
    onMouseEnter: e.onHoverIn ?? e.onMouseEnter,
    onMouseLeave: e.onHoverOut ?? e.onMouseLeave,
    [t ? "onClick" : "onPress"]: e.onPress,
    onMouseDown: e.onPressIn,
    onMouseUp: e.onPressOut,
    onTouchStart: e.onPressIn,
    onTouchEnd: e.onPressOut,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  };
}
const Tc = (e, { tokens: t }) => {
  e = e === !0 ? "$true" : e;
  const n = t.space[e] ?? e;
  return {
    width: n,
    height: n,
    minWidth: n,
    minHeight: n
  };
}, _c = gn({
  acceptsClassName: !0,
  memo: !0,
  componentName: "Spacer",
  validStyles: ut,
  defaultProps: {
    ...hn,
    // avoid nesting issues
    tag: "span",
    size: !0,
    pointerEvents: "none"
  },
  variants: {
    size: {
      "...": Tc
    },
    flex: {
      true: {
        flexGrow: 1
      }
    },
    direction: {
      horizontal: {
        height: 0,
        minHeight: 0
      },
      vertical: {
        width: 0,
        minWidth: 0
      },
      both: {}
    }
  }
});
function $c(e) {
  var d, p, f;
  const { isZStack: t, children: n, space: r, direction: s, spaceFlex: o, separator: i } = e, a = !!(r || o), l = i != null;
  if (!(a || l || t))
    return n;
  const c = Ue.toArray(n);
  if (c.length <= 1 && !t && !((p = (d = c[0]) == null ? void 0 : d.type) != null && p.shouldForwardSpace))
    return c;
  const u = [];
  for (let [y, b] of c.entries()) {
    const m = b == null || Array.isArray(b) && b.length === 0;
    if (!m && Pe.isValidElement(b) && ((f = b.type) != null && f.shouldForwardSpace) && (b = Pe.cloneElement(b, {
      space: r,
      spaceFlex: o,
      separator: i,
      key: b.key
    })), m || !b || b.key && !t ? u.push(b) : u.push(
      /* @__PURE__ */ I(Bs, { children: t ? /* @__PURE__ */ I(Oc, { children: b }) : b }, y)
    ), vo(b) && y === 0 || t)
      continue;
    const S = c[y + 1];
    S && !vo(S) && (i ? (a && u.push(
      Bn({
        key: `_${y}_00tmgui`,
        direction: s,
        space: r,
        spaceFlex: o
      })
    ), u.push(
      Pe.isValidElement(i) ? Pe.cloneElement(i, { key: `sep_${y}` }) : i
    ), a && u.push(
      Bn({
        key: `_${y}01tmgui`,
        direction: s,
        space: r,
        spaceFlex: o
      })
    )) : u.push(
      Bn({
        key: `_${y}02tmgui`,
        direction: s,
        space: r,
        spaceFlex: o
      })
    ));
  }
  return process.env.NODE_ENV === "development" && e.debug && M("  Spaced children", u, e), u;
}
function Bn({ key: e, direction: t, space: n, spaceFlex: r }) {
  return /* @__PURE__ */ I(
    _c,
    {
      size: n,
      direction: t,
      ...typeof r < "u" && {
        flex: r === !0 ? 1 : r === !1 ? 0 : r
      }
    },
    e
  );
}
function vo(e) {
  const t = e == null ? void 0 : e.type;
  return (t == null ? void 0 : t.isVisuallyHidden) || (t == null ? void 0 : t.isUnspaced);
}
const Oc = gn({
  defaultProps: {
    ...hn,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "box-none"
  }
});
function Cc(e) {
  return Object.keys(e).some((t) => {
    const n = e[t];
    return n && typeof n == "object" && "_animation" in n;
  });
}
function Rc(e, t) {
  return Object.fromEntries(
    [...e].map((n) => [n, os(n, t)])
  );
}
const No = (e) => typeof e != "string" ? e : +e.replace("px", ""), Pc = gn({
  acceptsClassName: !0,
  defaultProps: hn,
  validStyles: ut
}), Eo = {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, Ac = {
  display: "inline",
  boxSizing: "border-box",
  wordWrap: "break-word",
  margin: 0
}, Dc = gn({
  acceptsClassName: !0,
  isText: !0,
  defaultProps: {
    fontFamily: "unset",
    ...Ac
  },
  inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"]),
  variants: {
    numberOfLines: {
      1: Eo,
      ":number": (e) => e >= 1 ? {
        WebkitLineClamp: e,
        WebkitBoxOrient: "vertical",
        display: "-webkit-box",
        overflow: "hidden"
      } : null
    },
    // ??
    ellipsizeMode: {
      "...": () => null
    },
    selectable: {
      true: {
        userSelect: "text",
        cursor: "text"
      },
      false: {
        userSelect: "none",
        cursor: "default"
      }
    },
    ellipse: {
      true: Eo
    }
  },
  deoptProps: /* @__PURE__ */ new Set([]),
  validStyles: {
    ...ut,
    ...Ho
  }
});
function Vc() {
  return null;
}
const Ts = (e) => {
  var t;
  if (!(!e || e.nodeType !== 1))
    return (t = e.getBoundingClientRect) == null ? void 0 : t.call(e);
}, _s = (e) => {
  const t = Ts(e);
  if (!t)
    return;
  const { x: n, y: r, top: s, left: o } = t;
  return { x: n, y: r, width: e.offsetWidth, height: e.offsetHeight, top: s, left: o };
}, $s = /* @__PURE__ */ new WeakMap();
let it = null;
typeof window < "u" && "ResizeObserver" in window && (it = new ResizeObserver((e) => {
  for (const { target: t } of e) {
    const n = $s.get(t);
    if (typeof n != "function")
      return;
    rr(t, null, (r, s, o, i, a, l) => {
      n({
        nativeEvent: {
          layout: { x: r, y: s, width: o, height: i, left: a, top: l },
          target: t
        },
        timeStamp: Date.now()
      });
    });
  }
}));
const rr = (e, t, n) => {
  const r = t || (e == null ? void 0 : e.parentNode);
  r instanceof HTMLElement && setTimeout(() => {
    const s = Ts(r), { height: o, left: i, top: a, width: l } = _s(e), c = i - s.left, u = a - s.top;
    n(c, u, l, o, i, a);
  }, 0);
};
function Mc(e, t) {
  sr(() => {
    if (!it || !t)
      return;
    const n = e.current;
    if (n)
      return $s.set(n, t), it.observe(n), () => {
        it == null || it.unobserve(n);
      };
  }, [e, t]);
}
function Ic(e) {
  sr(() => {
    const t = e.current;
    t && (t.measure = (n) => rr(t, null, n), t.measureLayout = (n, r) => rr(t, n, r), t.measureInWindow = (n) => {
      t && setTimeout(() => {
        const { height: r, left: s, top: o, width: i } = _s(t);
        n(s, o, i, r);
      }, 0);
    });
  }, [e]);
}
const me = Pc, Os = Dc;
vc({
  getBaseViews: Vc,
  usePropsTransform(e, t, n) {
    const {
      // event props
      onMoveShouldSetResponder: r,
      onMoveShouldSetResponderCapture: s,
      onResponderEnd: o,
      onResponderGrant: i,
      onResponderMove: a,
      onResponderReject: l,
      onResponderRelease: c,
      onResponderStart: u,
      onResponderTerminate: d,
      onResponderTerminationRequest: p,
      onScrollShouldSetResponder: f,
      onScrollShouldSetResponderCapture: y,
      onSelectionChangeShouldSetResponder: b,
      onSelectionChangeShouldSetResponderCapture: m,
      onStartShouldSetResponder: S,
      onStartShouldSetResponderCapture: N,
      // android
      collapsable: w,
      focusable: g,
      // deprecated,
      accessible: $,
      accessibilityDisabled: T,
      onLayout: _,
      hrefAttrs: v,
      ...A
    } = t;
    if (Ic(n), Mc(n, _), Mi(n, {
      onMoveShouldSetResponder: r,
      onMoveShouldSetResponderCapture: s,
      onResponderEnd: o,
      onResponderGrant: i,
      onResponderMove: a,
      onResponderReject: l,
      onResponderRelease: c,
      onResponderStart: u,
      onResponderTerminate: d,
      onResponderTerminationRequest: p,
      onScrollShouldSetResponder: f,
      onScrollShouldSetResponderCapture: y,
      onSelectionChangeShouldSetResponder: b,
      onSelectionChangeShouldSetResponderCapture: m,
      onStartShouldSetResponder: S,
      onStartShouldSetResponderCapture: N
    }), A.href !== void 0 && v !== void 0) {
      const { download: V, rel: j, target: D } = v;
      V != null && (A.download = V), j != null && (A.rel = j), typeof D == "string" && (A.target = D.charAt(0) !== "_" ? `_${D}` : D);
    }
    return A;
  },
  useEvents(e, t, { pseudos: n }, r, s) {
  }
});
const Yc = ({
  children: e,
  padding: t,
  // var(--s1)
  borderWidth: n,
  //  var(--border-thin)
  invert: r = !1,
  ...s
}) => /* @__PURE__ */ I(
  me,
  {
    padding: t,
    borderWidth: n,
    borderColor: "black",
    backgroundColor: r ? "var(--color-light)" : "inherit",
    ...s,
    children: e
  }
), Kc = ({
  children: e,
  maxWidth: t,
  centerText: n = !1,
  gutters: r,
  intrinsic: s = !1,
  ...o
}) => /* @__PURE__ */ I(
  me,
  {
    maxWidth: t,
    marginHorizontal: "auto",
    paddingHorizontal: r,
    alignItems: s ? "center" : void 0,
    flexDirection: s ? "column" : void 0,
    ...o,
    children: n ? /* @__PURE__ */ I(Os, { textAlign: "center", children: e }) : e
  }
), Gc = ({
  children: e,
  justify: t = "flex-start",
  align: n = "flex-start",
  space: r
  // 'var(--s1)'
}) => /* @__PURE__ */ I(
  me,
  {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: t,
    alignItems: n,
    space: r,
    children: e
  }
), Uc = ({
  children: e,
  centered: t,
  space: n,
  // Default: 'var(--s1)'
  minHeight: r = "100vh",
  noPad: s = !1
}) => {
  const o = Pe.Children.toArray(e), i = t ? o.findIndex(
    (a) => a.type === t || a.props.className === t
  ) : -1;
  return /* @__PURE__ */ I(
    me,
    {
      flexDirection: "column",
      minHeight: r,
      padding: s ? 0 : n,
      children: o.map((a, l) => /* @__PURE__ */ I(
        me,
        {
          marginVertical: n,
          style: i !== -1 && l === i ? { marginVertical: "auto" } : {},
          children: a
        },
        l
      ))
    }
  );
}, qc = ({
  child: e,
  aspectRatio: t = "16:9",
  fallback: n
}) => {
  const r = (o) => Pe.isValidElement(o) ? o : null;
  return /* @__PURE__ */ I(
    me,
    {
      style: {
        width: "100%",
        aspectRatio: t,
        overflow: "hidden"
      },
      children: (() => {
        const o = r(e);
        return o ? Pe.cloneElement(o, {
          ...o.props,
          style: { width: "100%", height: "100%", ...o.props.style }
        }) : n;
      })()
    }
  );
}, Zc = ({
  icon: e,
  text: t,
  space: n = 0,
  label: r
  // baseFontSize = 16,
}) => /* @__PURE__ */ I(
  me,
  {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
    accessible: !!r,
    accessibilityLabel: r,
    children: /* @__PURE__ */ I(Os, { marginStart: n, children: t })
  }
), Jc = ({
  children: e,
  visible: t,
  margin: n = 0,
  // targetRef,
  onClose: r,
  ...s
}) => {
  const [o, i] = mn({ width: 0, height: 0 }), a = Co(() => {
    let d = 0, p = 0;
    if (typeof n == "number")
      d = p = n;
    else if (typeof n == "string") {
      const f = n.split(" ").map((y) => parseFloat(y));
      [d, p] = f.length === 2 ? f : [f[0], f[0]];
    }
    return { horizontal: d, vertical: p };
  }, [n]), { horizontal: l, vertical: c } = a();
  Ge(() => {
    const d = () => {
      const p = window.innerWidth - 2 * l, f = window.innerHeight - 2 * c;
      i({ width: p, height: f });
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [l, c]);
  const u = t && /* @__PURE__ */ I(
    "div",
    {
      onClick: r,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: o.width,
        height: o.height,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        display: "flex"
      },
      ...s,
      children: e
    }
  );
  return zs.createPortal(u, document.body);
}, Qc = ({
  children: e,
  itemWidth: t = "auto",
  space: n,
  height: r = "auto",
  noBar: s = !1
}) => /* @__PURE__ */ I(
  me,
  {
    flexDirection: "row",
    overflow: s ? "hidden" : void 0,
    flexWrap: "wrap",
    space: n,
    height: r,
    children: Pe.Children.map(e, (o) => /* @__PURE__ */ I(me, { width: t, children: o }))
  }
), el = ({
  side: e = "left",
  sideWidth: t,
  contentMin: n = "50%",
  space: r = "var(--s1)",
  noStretch: s = !1,
  children: o
}) => {
  const i = e === "left", a = i ? {} : { flexBasis: "0", flexGrow: 999, minWidth: n }, l = i ? { flexBasis: "0", flexGrow: 999, minWidth: n } : {}, c = Ue.toArray(o);
  return /* @__PURE__ */ zn(
    me,
    {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: r,
      alignItems: s ? "flex-start" : "stretch",
      children: [
        /* @__PURE__ */ I(me, { style: a, children: c[0] }),
        /* @__PURE__ */ I(me, { style: l, children: c[1] })
      ]
    }
  );
}, tl = ({
  children: e,
  space: t
  // recursive = false,
}) => /* @__PURE__ */ I(me, { flexDirection: "column", justifyContent: "flex-start", space: t, children: e });
export {
  Yc as Box,
  Kc as Center,
  Gc as Cluster,
  Uc as Cover,
  qc as Frame,
  Zc as Icon,
  Jc as Imposter,
  Qc as Reel,
  el as Sidebar,
  tl as Stack
};
