var Wi = Object.defineProperty;
var Li = (e, t, n) => t in e ? Wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var St = (e, t, n) => (Li(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as Ve from "react";
import Ie, { useReducer as ps, useEffect as rt, useLayoutEffect as Yi, forwardRef as Kt, createElement as Pr, useRef as bn, useCallback as Bt, useSyncExternalStore as Cr, createContext as Gt, useMemo as Zt, useContext as Tt, useState as Ln, useInsertionEffect as Hi, useId as $r, Children as Mt, cloneElement as Vn, isValidElement as ms, memo as un, Fragment as Bi, startTransition as Xi } from "react";
import zi, { createPortal as hs } from "react-dom";
import { Dimensions as Ui } from "react-native-web";
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = { exports: {} }, en = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function qi() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ie, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, x = "@@iterator";
    function O(l) {
      if (l === null || typeof l != "object")
        return null;
      var b = v && l[v] || l[x];
      return typeof b == "function" ? b : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(l) {
      {
        for (var b = arguments.length, E = new Array(b > 1 ? b - 1 : 0), D = 1; D < b; D++)
          E[D - 1] = arguments[D];
        N("error", l, E);
      }
    }
    function N(l, b, E) {
      {
        var D = h.ReactDebugCurrentFrame, G = D.getStackAddendum();
        G !== "" && (b += "%s", E = E.concat([G]));
        var re = E.map(function(B) {
          return String(B);
        });
        re.unshift("Warning: " + b), Function.prototype.apply.call(console[l], console, re);
      }
    }
    var g = !1, C = !1, w = !1, P = !1, U = !1, Y;
    Y = Symbol.for("react.module.reference");
    function R(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || U || l === o || l === f || l === u || P || l === m || g || C || w || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === d || l.$$typeof === s || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Y || l.getModuleId !== void 0));
    }
    function A(l, b, E) {
      var D = l.displayName;
      if (D)
        return D;
      var G = b.displayName || b.name || "";
      return G !== "" ? E + "(" + G + ")" : E;
    }
    function L(l) {
      return l.displayName || "Context";
    }
    function I(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case a:
            var b = l;
            return L(b) + ".Consumer";
          case s:
            var E = l;
            return L(E._context) + ".Provider";
          case c:
            return A(l, l.render, "ForwardRef");
          case d:
            var D = l.displayName || null;
            return D !== null ? D : I(l.type) || "Memo";
          case p: {
            var G = l, re = G._payload, B = G._init;
            try {
              return I(B(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, ye = 0, ke, Be, Z, _, Pe, je, Ke;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function _t() {
      {
        if (ye === 0) {
          ke = console.log, Be = console.info, Z = console.warn, _ = console.error, Pe = console.group, je = console.groupCollapsed, Ke = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ye++;
      }
    }
    function It() {
      {
        if (ye--, ye === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, l, {
              value: ke
            }),
            info: j({}, l, {
              value: Be
            }),
            warn: j({}, l, {
              value: Z
            }),
            error: j({}, l, {
              value: _
            }),
            group: j({}, l, {
              value: Pe
            }),
            groupCollapsed: j({}, l, {
              value: je
            }),
            groupEnd: j({}, l, {
              value: Ke
            })
          });
        }
        ye < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = h.ReactCurrentDispatcher, pt;
    function Fe(l, b, E) {
      {
        if (pt === void 0)
          try {
            throw Error();
          } catch (G) {
            var D = G.stack.trim().match(/\n( *(at )?)/);
            pt = D && D[1] || "";
          }
        return `
` + pt + l;
      }
    }
    var Se = !1, M;
    {
      var S = typeof WeakMap == "function" ? WeakMap : Map;
      M = new S();
    }
    function $(l, b) {
      if (!l || Se)
        return "";
      {
        var E = M.get(l);
        if (E !== void 0)
          return E;
      }
      var D;
      Se = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = Ge.current, Ge.current = null, _t();
      try {
        if (b) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (Ae) {
              D = Ae;
            }
            Reflect.construct(l, [], B);
          } else {
            try {
              B.call();
            } catch (Ae) {
              D = Ae;
            }
            l.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            D = Ae;
          }
          l();
        }
      } catch (Ae) {
        if (Ae && D && typeof Ae.stack == "string") {
          for (var X = Ae.stack.split(`
`), Ce = D.stack.split(`
`), ie = X.length - 1, z = Ce.length - 1; ie >= 1 && z >= 0 && X[ie] !== Ce[z]; )
            z--;
          for (; ie >= 1 && z >= 0; ie--, z--)
            if (X[ie] !== Ce[z]) {
              if (ie !== 1 || z !== 1)
                do
                  if (ie--, z--, z < 0 || X[ie] !== Ce[z]) {
                    var $e = `
` + X[ie].replace(" at new ", " at ");
                    return l.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", l.displayName)), typeof l == "function" && M.set(l, $e), $e;
                  }
                while (ie >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Ge.current = re, It(), Error.prepareStackTrace = G;
      }
      var Le = l ? l.displayName || l.name : "", vt = Le ? Fe(Le) : "";
      return typeof l == "function" && M.set(l, vt), vt;
    }
    function q(l, b, E) {
      return $(l, !1);
    }
    function le(l) {
      var b = l.prototype;
      return !!(b && b.isReactComponent);
    }
    function H(l, b, E) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return $(l, le(l));
      if (typeof l == "string")
        return Fe(l);
      switch (l) {
        case f:
          return Fe("Suspense");
        case u:
          return Fe("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return q(l.render);
          case d:
            return H(l.type, b, E);
          case p: {
            var D = l, G = D._payload, re = D._init;
            try {
              return H(re(G), b, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, ue = {}, Te = h.ReactDebugCurrentFrame;
    function he(l) {
      if (l) {
        var b = l._owner, E = H(l.type, l._source, b ? b.type : null);
        Te.setExtraStackFrame(E);
      } else
        Te.setExtraStackFrame(null);
    }
    function xe(l, b, E, D, G) {
      {
        var re = Function.call.bind(Q);
        for (var B in l)
          if (re(l, B)) {
            var X = void 0;
            try {
              if (typeof l[B] != "function") {
                var Ce = Error((D || "React class") + ": " + E + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              X = l[B](b, B, D, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              X = ie;
            }
            X && !(X instanceof Error) && (he(G), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", E, B, typeof X), he(null)), X instanceof Error && !(X.message in ue) && (ue[X.message] = !0, he(G), y("Failed %s type: %s", E, X.message), he(null));
          }
      }
    }
    var ge = Array.isArray;
    function it(l) {
      return ge(l);
    }
    function Qt(l) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return E;
      }
    }
    function mt(l) {
      try {
        return ht(l), !1;
      } catch {
        return !0;
      }
    }
    function ht(l) {
      return "" + l;
    }
    function de(l) {
      if (mt(l))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qt(l)), ht(l);
    }
    var Re = h.ReactCurrentOwner, F = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, te, kt, oe;
    oe = {};
    function ee(l) {
      if (Q.call(l, "ref")) {
        var b = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function we(l) {
      if (Q.call(l, "key")) {
        var b = Object.getOwnPropertyDescriptor(l, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Ne(l, b) {
      if (typeof l.ref == "string" && Re.current && b && Re.current.stateNode !== b) {
        var E = I(Re.current.type);
        oe[E] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Re.current.type), l.ref), oe[E] = !0);
      }
    }
    function ae(l, b) {
      {
        var E = function() {
          te || (te = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Oe(l, b) {
      {
        var E = function() {
          kt || (kt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var se = function(l, b, E, D, G, re, B) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: b,
        ref: E,
        props: B,
        // Record the component responsible for creating this element.
        _owner: re
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function ce(l, b, E, D, G) {
      {
        var re, B = {}, X = null, Ce = null;
        E !== void 0 && (de(E), X = "" + E), we(b) && (de(b.key), X = "" + b.key), ee(b) && (Ce = b.ref, Ne(b, G));
        for (re in b)
          Q.call(b, re) && !F.hasOwnProperty(re) && (B[re] = b[re]);
        if (l && l.defaultProps) {
          var ie = l.defaultProps;
          for (re in ie)
            B[re] === void 0 && (B[re] = ie[re]);
        }
        if (X || Ce) {
          var z = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          X && ae(B, z), Ce && Oe(B, z);
        }
        return se(l, X, Ce, G, D, Re.current, B);
      }
    }
    var ne = h.ReactCurrentOwner, K = h.ReactDebugCurrentFrame;
    function ve(l) {
      if (l) {
        var b = l._owner, E = H(l.type, l._source, b ? b.type : null);
        K.setExtraStackFrame(E);
      } else
        K.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function qe(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function at() {
      {
        if (ne.current) {
          var l = I(ne.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Ze(l) {
      {
        if (l !== void 0) {
          var b = l.fileName.replace(/^.*[\\\/]/, ""), E = l.lineNumber;
          return `

Check your code at ` + b + ":" + E + ".";
        }
        return "";
      }
    }
    var jt = {};
    function Xr(l) {
      {
        var b = at();
        if (!b) {
          var E = typeof l == "string" ? l : l.displayName || l.name;
          E && (b = `

Check the top-level render call using <` + E + ">.");
        }
        return b;
      }
    }
    function Un(l, b) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var E = Xr(b);
        if (jt[E])
          return;
        jt[E] = !0;
        var D = "";
        l && l._owner && l._owner !== ne.current && (D = " It was passed a child from " + I(l._owner.type) + "."), ve(l), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, D), ve(null);
      }
    }
    function gt(l, b) {
      {
        if (typeof l != "object")
          return;
        if (it(l))
          for (var E = 0; E < l.length; E++) {
            var D = l[E];
            qe(D) && Un(D, b);
          }
        else if (qe(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var G = O(l);
          if (typeof G == "function" && G !== l.entries)
            for (var re = G.call(l), B; !(B = re.next()).done; )
              qe(B.value) && Un(B.value, b);
        }
      }
    }
    function Pt(l) {
      {
        var b = l.type;
        if (b == null || typeof b == "string")
          return;
        var E;
        if (typeof b == "function")
          E = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === d))
          E = b.propTypes;
        else
          return;
        if (E) {
          var D = I(b);
          xe(E, l.props, "prop", D, l);
        } else if (b.PropTypes !== void 0 && !We) {
          We = !0;
          var G = I(b);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(l) {
      {
        for (var b = Object.keys(l.props), E = 0; E < b.length; E++) {
          var D = b[E];
          if (D !== "children" && D !== "key") {
            ve(l), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), ve(null);
            break;
          }
        }
        l.ref !== null && (ve(l), y("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function bt(l, b, E, D, G, re) {
      {
        var B = R(l);
        if (!B) {
          var X = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Ze(G);
          Ce ? X += Ce : X += at();
          var ie;
          l === null ? ie = "null" : it(l) ? ie = "array" : l !== void 0 && l.$$typeof === t ? (ie = "<" + (I(l.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof l, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, X);
        }
        var z = ce(l, b, E, G, re);
        if (z == null)
          return z;
        if (B) {
          var $e = b.children;
          if ($e !== void 0)
            if (D)
              if (it($e)) {
                for (var Le = 0; Le < $e.length; Le++)
                  gt($e[Le], l);
                Object.freeze && Object.freeze($e);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt($e, l);
        }
        return l === r ? Ct(z) : Pt(z), z;
      }
    }
    function Ft(l, b, E) {
      return bt(l, b, E, !0);
    }
    function Wt(l, b, E) {
      return bt(l, b, E, !1);
    }
    var $t = Wt, Ot = Ft;
    en.Fragment = r, en.jsx = $t, en.jsxs = Ot;
  }()), en;
}
var tn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function Zi() {
  if (uo)
    return tn;
  uo = 1;
  var e = Ie, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, f) {
    var u, d = {}, p = null, m = null;
    f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps)
      for (u in c = a.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: a, key: p, ref: m, props: d, _owner: o.current };
  }
  return tn.Fragment = n, tn.jsx = s, tn.jsxs = s, tn;
}
process.env.NODE_ENV === "production" ? mr.exports = Zi() : mr.exports = qi();
var W = mr.exports;
typeof globalThis.__DEV__ > "u" && (globalThis.__DEV__ = process.env.NODE_ENV === "development");
const Ji = typeof window > "u", Qi = () => {
};
function ea() {
  return Ji ? Qi : ps((e) => Math.random(), 0)[1];
}
const nn = /* @__PURE__ */ new Map(), Or = (e, t = 10) => {
  if (nn.has(e))
    return nn.get(e);
  let n = 0, r = "";
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e.charCodeAt(s);
    if (t !== "strict" && (a === 46 && (r += "d0t"), na(a) && o <= t)) {
      r += e[s];
      continue;
    }
    n = ta(n, e[s]);
  }
  const i = r + (n ? Math.abs(n) : "");
  return nn.size > 1e4 && nn.clear(), nn.set(e, i), i;
}, ta = (e, t) => Math.imul(31, e) + t.charCodeAt(0) | 0;
function na(e) {
  return (
    // A-Z
    e >= 65 && e <= 90 || // a-z
    e >= 97 && e <= 122 || // _
    e === 95 || // -
    e === 45 || // 0-9
    e >= 48 && e <= 57
  );
}
function gs(e, t, {
  checkDefaultPrevented: n = !0
} = {}) {
  return !e || !t ? t || e || void 0 : (r) => {
    if (e == null || e(r), !r || !(n && "defaultPrevented" in r) || // @ts-ignore
    "defaultPrevented" in r && !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
const Rt = !0, bs = typeof window < "u", qt = !bs, Xe = bs, dt = qt ? rt : Yi, ra = Xe && ("ontouchstart" in window || navigator.maxTouchPoints > 0), oa = ra, sa = "web", vs = {
  color: !0,
  textDecorationColor: !0,
  textShadowColor: !0
}, At = {
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
    ...vs,
    outlineColor: !0
  }
}, Ar = {
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
}, Yn = {
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
}, ys = {
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
  transformOrigin: !0,
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
  ...At.color,
  ...At.radius,
  ...At.size,
  ...At.radius,
  ...Yn,
  ...Ar,
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
  outlineWidth: !0,
  touchAction: !0
}, ia = {
  fontFamily: !0,
  fontSize: !0,
  fontStyle: !0,
  fontWeight: !0,
  letterSpacing: !0,
  lineHeight: !0,
  textTransform: !0
}, Ss = {
  ...ia,
  textAlign: !0,
  textDecorationLine: !0,
  textDecorationStyle: !0,
  ...vs,
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
}, xs = {
  ...ys,
  ...Ss
}, aa = xs, hr = {
  enterStyle: !0,
  exitStyle: !0,
  hoverStyle: !0,
  pressStyle: !0,
  focusStyle: !0,
  disabledStyle: !0,
  focusVisibleStyle: !0
}, Vt = {
  ...hr,
  ...ys
}, fo = Symbol(), ca = (e, t) => {
  const n = (() => {
    if (e[fo]) {
      const r = Kt((o, i) => Pr(e, {
        ...o,
        ref: i
      }));
      for (const o in e) {
        const i = e[o];
        r[o] = i && typeof i == "object" ? {
          ...i
        } : i;
      }
    }
    return e;
  })();
  return Object.assign(n, t), n[fo] = !0, n;
};
function la(e, t, n) {
  const r = bn(t ?? e);
  return dt(() => {
    r.current = e;
  }), Bt(n ? (...o) => {
    var i;
    return (i = r.current) == null ? void 0 : i.apply(null, o);
  } : () => r.current, []);
}
function Jn(e) {
  return la(e, ua, !0);
}
const ua = () => {
  throw new Error("Cannot call an event handler while rendering.");
};
let fn;
const st = () => {
  if (!fn)
    throw new Error(process.env.NODE_ENV !== "production" ? "Missing tamagui config, you either have a duplicate config, or haven't set it up. Be sure createTamagui is called before rendering. Also, make sure all of your tamagui dependencies are on the same version (`tamagui`, `@tamagui/package-name`, etc.) not just in your package.json, but in your lockfile." : "Err0");
  return fn;
}, fa = () => fn.themes, da = /* @__PURE__ */ new Set(), pa = (e) => {
  fn ? e(fn) : da.add(e);
}, ws = "isVar", ma = (e, t = !1) => {
  if (!t && ot(e))
    return e;
  const {
    key: n,
    name: r,
    val: o
  } = e;
  return {
    [ws]: !0,
    key: n,
    name: t ? "" : Or(r, 40),
    val: o,
    variable: t ? `var(--${r})` : ba(r)
  };
};
function gr(e, t = !1) {
  return ot(e) ? !t && Rt && e.variable ? e.variable : `${e.val}` : `${e || ""}`;
}
function ot(e) {
  return e && typeof e == "object" && ws in e;
}
function ha(e) {
  if (Dr(!0), ot(e))
    return gr(e);
  const t = st().tokensParsed;
  return gr(t[e] ?? e);
}
let Ns = !1;
const Dr = (e) => Ns = e, ga = () => Ns;
function Mr(e) {
  return ot(e) ? (Dr(!0), e.val) : e;
}
const ba = (e, t = !0) => {
  if (process.env.NODE_ENV === "development" && (!e || typeof e != "string"))
    throw new Error(`createCSSVariable expected string, got: ${e}`);
  const n = Or(e, 60);
  return t ? `var(--${n})` : n;
}, po = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new Map(), an = {}, mo = {}, dn = {}, va = () => an;
function Es(e, t, n) {
  const r = t.indexOf("transform:");
  if (r === -1) {
    process.env.NODE_ENV === "development" && console.error(`❌ Invalid transform, likely used deg/% improperly ${e}`);
    return;
  }
  const o = r + 10, i = t.indexOf(";"), s = t.slice(o, i);
  if (!dn[e])
    return dn[e] = s, !0;
}
let ho = null;
function ya(e = !1, t) {
  if (process.env.NODE_ENV === "test" || !Xe)
    return;
  let n;
  const r = document.styleSheets || [], o = ho, i = new Set(r);
  if (document.styleSheets) {
    for (const s of i)
      if (s) {
        const a = bo(s, !1, e, t);
        a && (n = a);
      }
    ho = i;
  }
  if (o)
    for (const s of o)
      s && !i.has(s) && bo(s, !0);
  return n;
}
function Ts(e, t = !1) {
  const n = (In.get(e) || 0) + (t ? -1 : 1);
  return In.set(e, n), n;
}
const go = process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES, Sa = go ? +go : 250;
function bo(e, t = !1, n = !1, r) {
  var p, m;
  let o;
  try {
    if (o = e.cssRules, !o)
      return;
  } catch {
    return;
  }
  const i = (p = $n(o[0], n)) == null ? void 0 : p[0], s = (m = $n(o[o.length - 1], n)) == null ? void 0 : m[0], a = `${o.length}${i}${s}`, c = po.get(e);
  if (!t && c === a)
    return;
  const f = o.length;
  let u = 0, d;
  for (let v = 0; v < f; v++) {
    const x = o[v];
    if (!(x instanceof CSSStyleRule))
      continue;
    const O = $n(x, n);
    if (O)
      u = 0;
    else {
      if (u++, u > Sa)
        return;
      continue;
    }
    const [h, y, N] = O;
    if (N) {
      const C = xa(y, r);
      C && (d || (d = []), d.push(C));
      continue;
    }
    const g = Ts(h, t);
    t ? g === 0 && delete an[h] : h in an || (!h.startsWith("_transform-") || Es(h, y.cssText)) && (an[h] = y.cssText);
  }
  return po.set(e, a), d;
}
let xn, vo = null;
function xa(e, t) {
  const n = e.selectorText.split(",");
  if (!n.length)
    return;
  if (t && !xn) {
    xn = {};
    for (const s in t.color) {
      const a = t.color[s];
      xn[a.name] = a.val;
    }
  }
  const r = (e.cssText || "").slice(e.selectorText.length + 2, -1).trim().split(";"), o = {};
  for (const s of r) {
    const a = s.indexOf(":");
    if (a === -1)
      continue;
    const c = s.indexOf("--"), f = s.slice(c === -1 ? 0 : c + 2, a), u = s.slice(a + 2);
    let d;
    if (u.startsWith("var(")) {
      const p = u.slice(6, -1), m = xn[p];
      m ? d = m : (vo || (vo = getComputedStyle(document.body)), d = vo.getPropertyValue("--" + p));
    } else
      d = u;
    o[f] = ma({
      key: f,
      name: f,
      val: d
    }, !0);
  }
  const i = {
    names: [],
    theme: o
  };
  for (const s of n) {
    const a = s.match(/(.t_(light|dark))?[\s]?(.t_([a-z0-9_]+))[\s]*$/i) || [], [c, f, u, d, p] = a, m = p && u && u !== p ? `${u}_${p}` : p || u;
    !m || i.names.includes(m) || m === "light_dark" || m === "dark_light" || i.names.push(m);
  }
  return i;
}
function $n(e, t = !1) {
  if (e instanceof CSSStyleRule) {
    const n = e.selectorText;
    if (n[0] === ":" && n[1] === "r") {
      if (n.startsWith(":root ._"))
        return [wa(n), e];
      if (t && (n.startsWith(":root.t_") || n.startsWith(":root .t_")))
        return [
          n.slice(0, 20),
          // just used as uid
          e,
          !0
        ];
    }
  } else if (e instanceof CSSMediaRule)
    return e.cssRules.length > 1 ? void 0 : $n(e.cssRules[0]);
}
const wa = (e) => {
  let t = e.slice(7);
  return e.includes(":") ? t.replace(/:[a-z]+$/, "") : t;
}, rn = Xe ? document.head.appendChild(document.createElement("style")).sheet : null;
function Rs(e, t) {
  return e in mo ? !1 : (mo[e] = t.join(" "), e.startsWith("_transform-") ? Es(e, t[0]) : !0);
}
function Na(e) {
  if (!(!e.length || !rn)) {
    for (const {
      identifier: t,
      rules: n
    } of e)
      if (_s(t)) {
        an[t] = n.join(`
`), Ts(t), Rs(t, n);
        for (const r of n)
          if (process.env.NODE_ENV === "production")
            rn.insertRule(r, rn.cssRules.length);
          else
            try {
              rn.insertRule(r, rn.cssRules.length);
            } catch (o) {
              console.groupCollapsed(`Error inserting rule into CSSStyleSheet: ${String(o)}`), console.info({
                rule: r,
                rulesToInsert: e
              }), console.trace(), console.groupEnd();
            }
      }
  }
}
const Ea = process.env.TAMAGUI_INSERT_SELECTOR_TRIES ? +process.env.TAMAGUI_INSERT_SELECTOR_TRIES : 2;
function _s(e) {
  if (process.env.IS_STATIC === "is_static")
    return !0;
  const t = In.get(e);
  return process.env.NODE_ENV === "development" && In.size > +(process.env.TAMAGUI_STYLE_INSERTION_WARNING_LIMIT || 1e4) && console.warn('Warning: inserting many CSS rules, you may be animating something and generating many CSS insertions, which can degrade performance. Instead, try using the "disableClassName" property on elements that change styles often. To disable this warning set TAMAGUI_STYLE_INSERTION_WARNING_LIMIT from 50000 to something higher'), t === void 0 || t < Ea;
}
const Ta = {
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
  focusVisibleStyle: {
    name: "focus-visible",
    priority: 3,
    stateKey: "focusVisible"
  },
  focusStyle: {
    name: "focus",
    priority: 3
  },
  disabledStyle: {
    name: "disabled",
    priority: 4,
    stateKey: "disabled"
  }
}, Ra = {
  hover: 1,
  press: 2,
  focus: 3,
  focusVisible: 3,
  disabled: 4
}, ft = {
  ...Ta,
  enterStyle: {
    name: "enter",
    selector: ".t_unmounted",
    priority: 4
  },
  exitStyle: {
    name: "exit",
    priority: 5
  }
};
function _a(e) {
  return (e == null ? void 0 : e.disableSSR) ?? st().disableSSR;
}
let Xt = (
  // development only safeguard
  process.env.NODE_ENV === "development" ? new Proxy({}, {
    get(e, t) {
      if (typeof t == "string" && t[0] === "$" && // dont error on $$typeof
      t[1] !== "$")
        throw new Error(`Access mediaState should not use "$": ${t}`);
      return Reflect.get(e, t);
    }
  }) : {}
);
const Ps = {}, Pa = () => Xt, Cs = /* @__PURE__ */ new Set(), yo = (e) => {
  if (Cs.has(e))
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
let Ca;
const $s = Object.keys(ft).length;
let $a;
const Oa = (e) => {
  if (process.env.NODE_ENV === "development" && e[0] === "$")
    throw new Error("use short key");
  return st().settings.mediaPropOrder ? $s : $a.indexOf(e) + 100;
}, So = /* @__PURE__ */ new Set(), Os = /* @__PURE__ */ new WeakMap();
function Aa(e, t) {
  return Os.set(e, t);
}
function Da(e) {
  return So.add(e), () => So.delete(e);
}
function As(e, t) {
  const n = bn(), r = (_a(t) || !Rt ? Xt : Ca) || {}, o = Cr(Da, () => {
    if (!n.current)
      return r;
    const {
      touched: i,
      prev: s
    } = n.current, a = e ? Os.get(e) : void 0;
    if (a && a.enabled === !1)
      return s;
    const c = (a == null ? void 0 : a.keys) ?? ((!a || a.enabled) && i ? [...i] : null);
    return !c || c != null && c.every((f) => Xt[f] === s[f]) ? s : (n.current.prev = Xt, Xt);
  }, () => r);
  return new Proxy(o, {
    get(i, s) {
      var a;
      return typeof s == "string" && (n.current || (n.current = {
        prev: r
      }), (a = n.current).touched || (a.touched = /* @__PURE__ */ new Set()), n.current.touched.add(s)), Reflect.get(o, s);
    }
  });
}
const Ds = (e, t, n, r) => {
  const o = st(), i = r && !o.settings.mediaPropOrder ? Oa(e) : $s;
  return !n[t] || i > n[t] ? i : null;
};
function Ma(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`).toLowerCase();
}
const Qn = /* @__PURE__ */ new WeakMap();
function Va(e, t) {
  if (typeof e == "string")
    return e;
  if (Qn.has(e))
    return Qn.get(e);
  const n = Object.entries(e).map(([r, o]) => (r = Ma(r), typeof o == "string" ? `(${r}: ${o})` : (typeof o == "number" && /[height|width]$/.test(r) && (o = `${o}px`), `(${r}: ${o})`))).join(" and ");
  return Qn.set(e, n), n;
}
function Ms(e, t) {
  const n = Ps[e];
  return Object.keys(n).every((r) => {
    const o = +n[r], i = r.startsWith("max"), s = r.endsWith("Width"), a = t[s ? "width" : "height"];
    return i ? a < o : a > o;
  });
}
const er = "_", Ia = "t_", vn = {}, Vs = {
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  flexBasis: "auto",
  boxSizing: "border-box",
  position: "relative",
  minHeight: 0,
  minWidth: 0,
  flexShrink: 0
};
Object.assign(vn, Vs);
const xo = {
  name: ""
};
function Is(e) {
  return !!(e.name || e.componentName || e.inverse || e.reset);
}
let tr = 0;
class ka {
  constructor(t = {}, n) {
    St(this, "id", 0);
    St(this, "themeListeners", /* @__PURE__ */ new Set());
    St(this, "parentManager", null);
    St(this, "state", xo);
    St(this, "_allKeys", null);
    if (this.props = t, tr = (tr + 1) % Number.MAX_VALUE, this.id = tr, n === "root") {
      this.updateStateFromProps(t, !1);
      return;
    }
    if (!n)
      throw process.env.NODE_ENV !== "production" ? new Error("No parent manager given, this is likely due to duplicated Tamagui dependencies. Check your lockfile for mis-matched versions. It could also be from an error somewhere else in your stack causing Tamagui to recieve undefined context, you can try putting some ErrorBoundary components around other areas of your app, or a Suspense boundary.") : "❌ 000";
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
    this.state = t, this._allKeys = null, n && queueMicrotask(() => {
      this.notify();
    });
  }
  getStateIfChanged(t = this.props, n = this.state, r = this.parentManager) {
    const o = this.getState(t, r);
    if (n && n !== xo && !o)
      return r == null ? void 0 : r.state;
    if (this.getStateShouldChange(o, n))
      return o;
  }
  getStateShouldChange(t, n = this.state) {
    return !(!(t != null && t.theme) || t.theme === (n == null ? void 0 : n.theme));
  }
  getState(t = this.props, n = this.parentManager) {
    return ja(t, n) || null;
  }
  get allKeys() {
    var t;
    return this._allKeys || (this._allKeys = /* @__PURE__ */ new Set([...((t = this.parentManager) == null ? void 0 : t.allKeys) || [], ...Object.keys(this.state.theme || {})])), this._allKeys;
  }
  notify(t = !1) {
    this.themeListeners.forEach((n) => n(this.state.name, this, t)), process.env.NODE_ENV !== "production" && (this._numChangeEventsSent ?? (this._numChangeEventsSent = 0), this._numChangeEventsSent++);
  }
  onChangeTheme(t, n) {
    return process.env.NODE_ENV !== "production" && n && (this._listeningIds ?? (this._listeningIds = /* @__PURE__ */ new Set()), this._listeningIds.add(n)), this.themeListeners.add(t), () => {
      this.themeListeners.delete(t);
    };
  }
}
function ja(e, t) {
  var h, y;
  if (e.name && e.reset)
    throw new Error(process.env.NODE_ENV === "production" ? "❌004" : "Cannot reset and set a new name at the same time.");
  if (!Is(e))
    return null;
  const n = fa(), [r, o] = Wa(t), i = !!(t != null && t.state.isComponent), s = e.reset && !i ? 1 : 0;
  let a = r[s], c = r[s + 1];
  if (!a && e.reset)
    return process.env.NODE_ENV !== "production" && console.warn("Cannot reset, no parent theme exists"), null;
  const {
    componentName: f
  } = e;
  let u = null, d = (a == null ? void 0 : a.state.name) || "";
  a != null && a.state.isComponent && (d = d.replace(/_[A-Z][A-Za-z]+/, ""));
  const p = e.reset ? d : e.name || "", m = o.map((N) => (N == null ? void 0 : N.state.name) || "");
  i && m.shift();
  const v = d.split(er), x = v.length, O = e.componentName && !p ? x : 0;
  for (let N = x; N >= O; N--) {
    let g = v.slice(0, N).join(er);
    e.inverse && (g = Fa(g));
    let C = [];
    if (g && g !== d && g.includes(p) && C.push(g), p && C.unshift(g ? `${g}_${p}` : p), N === 1) {
      const P = C.findIndex((U) => !U.includes("_"));
      P > 0 && C.splice(P, 0, p);
    }
    if (f && !e.reset) {
      const P = v.length;
      let U = [];
      if (p && P > 1) {
        const Y = v[0];
        U.push(`${Y}_${p}_${f}`);
      }
      if (U.push(`${g}_${f}`), p) {
        if (N > P) {
          const R = v.slice(0, N - 1).join(er);
          if (R) {
            const A = `${R}_${p}_${f}`;
            U.unshift(A);
          }
        }
        const Y = `${g}_${p}_${f}`;
        U.unshift(Y);
      }
      C = [...U, ...C, ...m];
    }
    const w = C.find((P) => P in n);
    if (process.env.NODE_ENV !== "production" && typeof e.debug == "string" && Xe && console.info(` 🔷 [${t == null ? void 0 : t.id}] getState`, {
      props: e,
      found: w,
      potentials: C,
      baseManager: a,
      nextName: p,
      baseName: d,
      prefix: g
    }), w) {
      const P = w.split("_"), [U, ...Y] = P, R = P[P.length - 1], A = R[0] === R[0].toUpperCase(), L = U === "light" ? "light" : U === "dark" ? "dark" : void 0, I = Ia, j = `${I}sub_theme ${I}${!L || !Y.length ? U : Y.join("_")}`, ye = (y = (h = a || c) == null ? void 0 : h.state) == null ? void 0 : y.name;
      u = {
        name: w,
        parentName: ye,
        theme: n[w],
        className: j,
        isComponent: A,
        scheme: L
      };
      break;
    }
  }
  return process.env.NODE_ENV !== "production" && e.debug === "verbose" && Xe && (console.groupCollapsed("ThemeManager.getState()"), console.info({
    props: e,
    baseName: d,
    base: v,
    min: O,
    max: x
  }), console.warn("result", {
    result: u
  }), console.trace(), console.groupEnd()), u;
}
const Fa = (e) => e.startsWith("light") ? e.replace(/^light/, "dark") : e.replace(/^dark/, "light");
function Wa(e) {
  const t = [], n = [];
  let r = e;
  for (; r; )
    n.push(r), r.state.isComponent && t.push(r), r = r.parentManager;
  return [n, t];
}
const ks = Gt(1);
function La(e, t, n) {
  return (r) => e((o) => js(o, r, t, n));
}
function js(e, t, n, r) {
  if (n || !e || !t || br(e, t))
    return e || t;
  if (process.env.NODE_ENV === "development" && r && (console.warn("setStateShallow CHANGE", {
    prev: e,
    next: t
  }), r === "break"))
    debugger;
  return {
    ...e,
    ...t
  };
}
function br(e, t) {
  for (const n in t)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const Ya = (e) => {
  const t = bn([]), n = Ws(e, !1, t.current, qt ? void 0 : () => {
    var a, c;
    const s = ((a = e.shouldUpdate) == null ? void 0 : a.call(e)) ?? (t.current.length > 0 ? !0 : void 0);
    return process.env.NODE_ENV === "development" && typeof e.debug == "string" && e.debug !== "profile" && console.info("  🎨 useTheme() shouldUpdate?", s, Xe ? {
      shouldUpdateProp: (c = e.shouldUpdate) == null ? void 0 : c.call(e),
      keys: [...t.current]
    } : ""), s;
  }), {
    themeManager: r,
    state: o
  } = n;
  process.env.NODE_ENV === "development" && (o != null && o.theme || process.env.TAMAGUI_DISABLE_NO_THEME_WARNING !== "1" && console.warn(`[tamagui] No theme found, this could be due to an invalid theme name (given theme props ${JSON.stringify(e)}).

If this is intended and you are using Tamagui without any themes, you can disable this warning by setting the environment variable TAMAGUI_DISABLE_NO_THEME_WARNING=1`));
  const i = Zt(() => !r || !(o != null && o.theme) ? {} : Ha(o, e.deopt, r, t.current, e.debug), [o == null ? void 0 : o.theme, r, e.deopt, e.debug]);
  return process.env.NODE_ENV === "development" && e.debug === "verbose" && (console.groupCollapsed(`  🔹 [${r == null ? void 0 : r.id}] useTheme =>`, o == null ? void 0 : o.name), console.info("returning state", n, "from props", e), console.groupEnd()), [n, i];
};
function Ha({
  theme: e,
  name: t,
  scheme: n
}, r = !1, o, i, s) {
  if (!e)
    return {};
  st();
  function a(c) {
    i && !i.includes(c) && (i.push(c), process.env.NODE_ENV === "development" && s && console.info(` 🎨 useTheme() tracking new key: ${c}`));
  }
  return new Proxy(e, {
    has(c, f) {
      if (Reflect.has(e, f))
        return !0;
      if (typeof f == "string")
        return f[0] === "$" && (f = f.slice(1)), o == null ? void 0 : o.allKeys.has(f);
    },
    get(c, f) {
      if (
        // dont ask me, idk why but on hermes you can see that useTheme()[undefined] passes in STRING undefined to proxy
        // if someone is crazy enough to use "undefined" as a theme key then this not working is on them
        f !== "undefined" && typeof f == "string"
      ) {
        const u = f[0] === "$" ? f.slice(1) : f, d = e[u];
        if (d && typeof d == "object")
          return new Proxy(d, {
            // when they touch the actual value we only track it
            // if its a variable (web), its ignored!
            get(p, m) {
              if (m === "val")
                a(u);
              else if (m === "get")
                return (v) => ha(d);
              return Reflect.get(d, m);
            }
          });
        if (process.env.NODE_ENV === "development" && process.env.TAMAGUI_FEAT_THROW_ON_MISSING_THEME_VALUE === "1")
          throw new Error(`[tamagui] No theme key "${f}" found in theme ${t}. 
  Keys in theme: ${Object.keys(e).join(", ")}`);
      }
      return Reflect.get(c, f);
    }
  });
}
const wo = /* @__PURE__ */ new Set(), Fs = /* @__PURE__ */ new WeakMap(), vr = {}, Ba = (e) => vr[e], Xa = (e) => Fs.get(Ba(e)), za = (e) => {
  if (!vr[e.id]) {
    const t = vr[e.id] = {};
    Fs.set(t, e);
  }
}, Ws = (e, t = !1, n, r) => {
  const {
    disable: o
  } = e, i = Tt(ks), s = Xa(i);
  if (!t && !s || o)
    return {
      isNewTheme: !1,
      state: s == null ? void 0 : s.state,
      themeManager: s
    };
  const [a, c] = Ln(O), {
    state: f,
    mounted: u,
    isNewTheme: d,
    themeManager: p,
    inversed: m
  } = a, v = !!(!a.mounted && e.inverse);
  function x(h = p, y, N = f, g = !1) {
    const C = r == null ? void 0 : r();
    if (!h || !g && C === !1)
      return;
    const w = y || h.getState(e, s);
    if (g || w && !(C !== !0 && !h.getStateShouldChange(w, N)))
      return w;
  }
  if (qt || (rt(() => {
    if (!p)
      return;
    if (e.inverse && !u) {
      c((N) => O({
        ...N,
        mounted: !0
      }));
      return;
    }
    (d || x(p)) && (wo.add(p), c(O));
    const h = p.onChangeTheme((N, g, C) => {
      C && c((w) => O(w, !0));
    }), y = s == null ? void 0 : s.onChangeTheme((N, g, C) => {
      const w = C || (r == null ? void 0 : r()) || e.deopt || void 0, P = w ?? !!(n != null && n.length || d);
      process.env.NODE_ENV === "development" && e.debug === "verbose" && console.info(" 🔸 onChange", p.id, {
        force: w,
        shouldTryUpdate: P,
        props: e,
        name: N,
        manager: g,
        keys: n
      }), P && c((U) => O(U, w));
    }, p.id);
    return () => {
      h(), y == null || y(), d && wo.delete(p);
    };
  }, [p, s, d, e.componentName, e.inverse, e.name, e.reset, u]), process.env.NODE_ENV === "development" && e.debug !== "profile" && rt(() => (globalThis.TamaguiThemeManagers ?? (globalThis.TamaguiThemeManagers = /* @__PURE__ */ new Set()), globalThis.TamaguiThemeManagers.add(p), () => {
    globalThis.TamaguiThemeManagers.delete(p);
  }), [p])), v)
    return {
      isNewTheme: !1,
      inversed: !1,
      themeManager: s,
      state: {
        name: "",
        ...s == null ? void 0 : s.state,
        className: ""
      }
    };
  return {
    state: f,
    isNewTheme: d,
    inversed: m,
    themeManager: p
  };
  function O(h, y = !1) {
    if (h && (r == null ? void 0 : r()) === !1 && !y)
      return h;
    let N = s, g;
    if (Is(e)) {
      const A = () => new ka(e, t ? "root" : s);
      if (h != null && h.themeManager) {
        N = h.themeManager;
        const L = y || !!(n != null && n.length), I = N.getState(e, s), j = x(N, I, h.state, L);
        j ? (g = j, !h.isNewTheme && !t ? N = A() : N.updateState(j)) : h.isNewTheme && s && !I && (N = s);
      } else
        N = A(), g = {
          ...N.state
        };
    }
    const C = !!(N !== s || e.inverse);
    C && za(N);
    const w = e.inverse ? t || (h == null ? void 0 : h.mounted) : !0;
    g || (C ? g = N.state : (g = s.state, N = s));
    const P = h == null ? void 0 : h.inversed, U = C && g.scheme !== (s == null ? void 0 : s.state.scheme) ? !0 : P != null ? !1 : null, Y = {
      themeManager: N,
      isNewTheme: C,
      mounted: w,
      inversed: U
    }, R = h && !y && // isEqualShallow uses the second arg as the keys so this should compare without state first...
    br(h, Y) && // ... and then compare just the state, because we make a new state obj but is likely the same
    br(h.state, g);
    if (h && R)
      return h;
    if (Y.state = g, process.env.NODE_ENV === "development" && e.debug && Xe) {
      console.groupCollapsed(`🔷 [${N.id}] useChangeThemeEffect createState`);
      const A = {
        ...s == null ? void 0 : s.state
      }, L = s == null ? void 0 : s.id, I = {
        ...N.state
      };
      console.info({
        props: e,
        parentState: A,
        parentId: L,
        themeManager: N,
        prev: h,
        response: Y,
        themeManagerState: I
      }), console.groupEnd();
    }
    return Y;
  }
};
function Ua(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ls(...e) {
  return (t) => e.forEach((n) => Ua(n, t));
}
const Ka = () => {
}, Ga = () => Ka;
function Ys(e) {
  return Cr(
    Ga,
    () => e ?? !0,
    () => !1
  );
}
function qa(e) {
  let t = "";
  for (const n in e) {
    t += n;
    const r = e[n];
    let o = typeof r;
    if (!r || o !== "object" && o !== "function")
      t += o + r;
    else if (nr.has(r))
      t += nr.get(r);
    else {
      let i = Math.random();
      nr.set(r, i), t += i;
    }
  }
  return t;
}
const nr = /* @__PURE__ */ new WeakMap();
function Za(e) {
  const t = Gt(e), n = t.Provider, r = t, o = /* @__PURE__ */ new Map(), i = ({
    children: a,
    scope: c,
    ...f
  }) => {
    const u = Zt(() => ({
      // this ! is a workaround for ts error
      ...e,
      ...f
    }), [qa(f)]);
    let d = n;
    if (c) {
      let p = o.get(c);
      p || (p = Gt(e), o.set(c, p)), d = p.Provider;
    }
    return /* @__PURE__ */ W.jsx(d, {
      value: u,
      children: a
    });
  }, s = (a) => {
    const c = a ? o.get(a) : t;
    return Tt(c);
  };
  return r.Provider = i, r.props = e, r.context = t, r.useStyledContext = s, r;
}
const No = Za({
  disableSSR: void 0,
  inText: !1,
  language: null,
  animationDriver: null,
  groups: {
    emit: null,
    subscribe: null,
    state: {}
  }
}), Vr = {
  hover: !1,
  press: !1,
  pressIn: !1,
  focus: !1,
  focusVisible: !1,
  unmounted: !0,
  disabled: !1
}, Eo = {
  ...Vr,
  unmounted: !1
}, Ja = {
  ...Vr,
  unmounted: "should-enter"
}, On = {};
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
    n === !0 && (n = t.toLowerCase()), On[`accessibility${t}`] = `aria-${n}`;
  }
}
const To = (() => {
  if (process.env.NODE_ENV === "development")
    try {
      return new Function("try {return this===window;}catch(e){ return false;}")();
    } catch {
    }
  return !1;
})();
function Hs(e) {
  const t = Pa(), [n, r, o, i] = e.split("-");
  let s;
  const a = o in t ? o : void 0;
  return a ? s = i : s = o, {
    name: r,
    pseudo: s,
    media: a
  };
}
const Ro = "_";
let _o = null, rr = null;
const Qa = {
  press: "active"
}, ec = (e, t, n, r, o, i) => {
  const {
    property: s,
    identifier: a,
    rules: c
  } = e, f = st();
  f.settings.mediaPropOrder;
  const u = r === "theme", d = r === "platform", p = r === "group", m = u || d || p, v = o ? "0" : "", x = a.slice(0, a.indexOf("-") + 1), O = `${x}${Ro}${t.replace("-", "")}${v}${Ro}`;
  let h = "", y, N, g = a.replace(x, O), C = c.map((w) => w.replace(a, g)).join(";");
  if (m) {
    const w = new Array((i || 0) + (p ? 1 : 0)).fill(":root").join("");
    if (u || p) {
      const P = Hs(t), U = P == null ? void 0 : P.name;
      y = P == null ? void 0 : P.media, p && (N = U);
      const Y = (p ? "group_" : "") + U, R = C.indexOf(":root"), A = C.lastIndexOf("{"), L = C.slice(R, A), I = f.themeClassNameOnRoot ? "" : " ", j = P.pseudo ? Qa[P.pseudo] || P.pseudo : void 0, ye = j ? `:${j}` : "", ke = `:root${w}${I}`, Be = `.t_${Y}${ye}`, Z = `${ke}${Be} ${L.replace(":root", "")}`;
      h = C.replace(L, Z);
    } else
      h = `${w}${C}`;
  }
  if (!m || y) {
    if (!rr) {
      const A = Object.keys(n);
      rr = Object.fromEntries(A.map((L) => [L, Va(n[L])])), _o = Object.fromEntries(A.map((L, I) => [L, new Array(I + 1).fill(":root").join("")]));
    }
    const w = y || t, P = rr[w], U = `${o ? "not all and " : ""}${P}`, Y = y ? "" : (
      // @ts-ignore
      _o[w]
    ), R = y ? `@container ${N}` : "@media";
    y && (C = h), C.includes(R) ? h = C.replace("{", ` and ${U} {`).replace("and screen and", "and") : h = `${R} ${U}{${Y}${C}}`, y && (h = `@supports (contain: ${f.settings.webContainerType || "inline-size"}) {${h}}`);
  }
  return {
    property: s,
    rules: [h],
    identifier: g
  };
}, yr = {
  height: 0,
  width: 0
};
function tc(e) {
  if (typeof e == "number")
    return e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null;
  if (typeof e != "string")
    return null;
  const t = rc();
  let n;
  if (n = t.hex6.exec(e))
    return parseInt(n[1] + "ff", 16) >>> 0;
  const r = oc(e);
  return r ?? ((n = t.rgb.exec(e)) ? (ct(n[1]) << 24 | // r
  ct(n[2]) << 16 | // g
  ct(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = t.rgba.exec(e)) ? n[6] !== void 0 ? (ct(n[6]) << 24 | // r
  ct(n[7]) << 16 | // g
  ct(n[8]) << 8 | // b
  Nn(n[9])) >>> // a
  0 : (ct(n[2]) << 24 | // r
  ct(n[3]) << 16 | // g
  ct(n[4]) << 8 | // b
  Nn(n[5])) >>> // a
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
  ) >>> 0 : (n = t.hsl.exec(e)) ? (or(
    wn(n[1]),
    // h
    wt(n[2]),
    // s
    wt(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = t.hsla.exec(e)) ? n[6] !== void 0 ? (or(
    wn(n[6]),
    // h
    wt(n[7]),
    // s
    wt(n[8])
    // l
  ) | Nn(n[9])) >>> // a
  0 : (or(
    wn(n[2]),
    // h
    wt(n[3]),
    // s
    wt(n[4])
    // l
  ) | Nn(n[5])) >>> // a
  0 : (n = t.hwb.exec(e)) ? (nc(
    wn(n[1]),
    // h
    wt(n[2]),
    // w
    wt(n[3])
    // b
  ) | 255) >>> // a
  0 : null);
}
function Ut(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function or(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Ut(o, r, e + 1 / 3), s = Ut(o, r, e), a = Ut(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8;
}
function nc(e, t, n) {
  if (t + n >= 1) {
    const s = Math.round(t * 255 / (t + n));
    return s << 24 | s << 16 | s << 8;
  }
  const r = Ut(0, 1, e + 1 / 3) * (1 - t - n) + t, o = Ut(0, 1, e) * (1 - t - n) + t, i = Ut(0, 1, e - 1 / 3) * (1 - t - n) + t;
  return Math.round(r * 255) << 24 | Math.round(o * 255) << 16 | Math.round(i * 255) << 8;
}
const Ee = "[-+]?\\d*\\.?\\d+", xt = Ee + "%";
function sr(...e) {
  return "\\(\\s*(" + e.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function Po(...e) {
  return "\\(\\s*(" + e.slice(0, e.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + e[e.length - 1] + ")\\s*\\)";
}
function Co(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
let ir;
function rc() {
  return ir === void 0 && (ir = {
    rgb: new RegExp("rgb" + sr(Ee, Ee, Ee)),
    rgba: new RegExp(
      "rgba(" + Co(Ee, Ee, Ee, Ee) + "|" + Po(Ee, Ee, Ee, Ee) + ")"
    ),
    hsl: new RegExp("hsl" + sr(Ee, xt, xt)),
    hsla: new RegExp(
      "hsla(" + Co(Ee, xt, xt, Ee) + "|" + Po(Ee, xt, xt, Ee) + ")"
    ),
    hwb: new RegExp("hwb" + sr(Ee, xt, xt)),
    hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#([0-9a-fA-F]{6})$/,
    hex8: /^#([0-9a-fA-F]{8})$/
  }), ir;
}
function ct(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function wn(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Nn(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function wt(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function oc(e) {
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
var Bs = tc;
const Xs = /* @__PURE__ */ Gi(Bs), sc = /* @__PURE__ */ Ki({
  __proto__: null,
  default: Xs
}, [Bs]), ic = Xs || sc, ac = ic;
function cc(e) {
  const t = Math.round((e & 4278190080) >>> 24), n = Math.round((e & 16711680) >>> 16), r = Math.round((e & 65280) >>> 8), o = ((e & 255) >>> 0) / 255;
  return {
    r: t,
    g: n,
    b: r,
    a: o
  };
}
const zs = (e, t) => {
  if (!e)
    return;
  if (e[0] === "$" || e.startsWith("var("))
    return e;
  const n = Us(e);
  if (n) {
    const r = `${n.r},${n.g},${n.b}`;
    return t === 1 ? `rgb(${r})` : `rgba(${r},${t ?? n.a ?? 1})`;
  }
  return e;
}, Us = (e) => {
  const t = ac(e);
  if (t != null)
    return cc(t);
};
function lc({
  shadowColor: e,
  shadowOffset: t,
  shadowOpacity: n,
  shadowRadius: r
}) {
  var s;
  const {
    height: o,
    width: i
  } = t || yr;
  return {
    shadowOffset: {
      width: i || 0,
      height: o || 0
    },
    shadowRadius: r || 0,
    shadowColor: zs(e, 1),
    shadowOpacity: n ?? (e ? (s = Us(e)) == null ? void 0 : s.a : 1)
  };
}
function Hn(e) {
  var t;
  (e.shadowRadius || e.shadowColor || e.shadowOpacity || e.shadowOffset) && Object.assign(e, lc(e));
  for (const n in $o)
    n in e && (e[t = $o[n]] || (e[t] = "solid"));
}
const $o = {
  borderWidth: "borderStyle",
  borderBottomWidth: "borderBottomStyle",
  borderTopWidth: "borderTopStyle",
  borderLeftWidth: "borderLeftStyle",
  borderRightWidth: "borderRightStyle"
}, uc = {
  ...aa,
  translateX: !0,
  translateY: !0
};
function Ye(e, t = "") {
  if (Ar[t] || t && !uc[t] || typeof e == "boolean")
    return e;
  let n = e;
  return e && typeof e == "object" ? e : (typeof e == "number" ? n = `${e}px` : t && (n = `${n}`), n);
}
const ar = {};
function fc(e, t) {
  const n = va()[t];
  if (ar[n])
    return ar[n];
  if (!n) {
    process.env.NODE_ENV === "development" && console.warn(`No CSS rule found for ${e} looking for selector ".${t}", you may not be injecting extracted CSS`);
    return;
  }
  const r = n.replace(/.*:/, "").replace(/;.*/, "").trim();
  let o;
  return r.startsWith("var(") ? o = r : Ar[e] ? o = +r : r.endsWith("px") ? o = +r.replace("px", "") : o = r, ar[n] = o, process.env.NODE_ENV === "development" && typeof o == "number" && Number.isNaN(o) && console.info("Tamagui invalid parsed value, NaN:", {
    res: o,
    cssVal: r,
    cssRule: n,
    key: e,
    className: t
  }), o;
}
function Ir(e) {
  return e.map(
    // { scale: 2 } => 'scale(2)'
    // { translateX: 20 } => 'translateX(20px)'
    // { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
    (t) => {
      const n = Object.keys(t)[0], r = t[n];
      return n === "matrix" || n === "matrix3d" ? `${n}(${r.join(",")})` : `${n}(${Ye(r, n)})`;
    }
  ).join(" ");
}
function Oo(e) {
  kr(e);
  const t = [];
  for (const n in e) {
    const r = e[n];
    if (n in ft)
      r && t.push(...Ks(r, ft[n]));
    else {
      const o = Gs(e, n);
      o && t.push(o);
    }
  }
  return t;
}
const Ks = (e, t) => {
  kr(e);
  const n = [];
  for (const r in e) {
    const o = Gs(e, r, t);
    o && n.push(o);
  }
  return n;
};
let Ao;
const Gs = (e, t, n) => {
  let r = e[t];
  if (r == null)
    return;
  t === "transform" && Array.isArray(e.transform) && (r = Ir(r));
  const o = Ye(r, t), i = Or(`${o}`), s = n ? `0${n.name}-` : "";
  Ao || (Ao = st());
  const a = `_${Ao.inverseShorthands[t] || t}-${s}${i}`, c = hc(a, t, o, n);
  return {
    property: t,
    pseudo: n == null ? void 0 : n.name,
    identifier: a,
    rules: c,
    value: o
  };
};
function kr(e) {
  const {
    shadowOffset: t,
    shadowRadius: n,
    shadowColor: r,
    shadowOpacity: o
  } = e;
  if (n || r) {
    const c = t || yr, f = Ye(c.width), u = Ye(c.height), d = Ye(n), p = zs(r, o), m = `${f} ${u} ${d} ${p}`;
    e.boxShadow = e.boxShadow ? `${e.boxShadow}, ${m}` : m, delete e.shadowOffset, delete e.shadowRadius, delete e.shadowColor, delete e.shadowOpacity;
  }
  const {
    textShadowColor: i,
    textShadowOffset: s,
    textShadowRadius: a
  } = e;
  if (i || s || a) {
    const {
      height: c,
      width: f
    } = s || yr, u = a || 0, d = Ye(i, "textShadowColor");
    if (d && (c !== 0 || f !== 0 || u !== 0)) {
      const p = Ye(u), m = Ye(f), v = Ye(c);
      e.textShadow = `${m} ${v} ${p} ${d}`;
    }
    delete e.textShadowColor, delete e.textShadowOffset, delete e.textShadowRadius;
  }
}
function zt(e, t = !1) {
  let n = "";
  for (const [r, o] of e)
    n += `${pc(r)}:${o}${t ? " !important" : ""};`;
  return `{${n}}`;
}
const cr = {}, dc = (e) => `-${e.toLowerCase()}`, pc = (e) => {
  if (e in cr)
    return cr[e];
  const t = e.replace(/[A-Z]/g, dc);
  return cr[e] = t, t;
}, mc = (() => {
  const e = {};
  for (const t in ft) {
    const n = ft[t];
    e[n.name] = `${[...Array(n.priority)].map(() => ":root").join("")} `;
  }
  return e;
})();
function hc(e, t, n, r) {
  const o = r ? r.name === "disabled" ? "[aria-disabled]" : `:${r.name}` : "", i = r ? r != null && r.selector ? `${r == null ? void 0 : r.selector} .${e}` : `${mc[r.name]} .${e}${o}` : `:root .${e}`, s = !!r;
  let a = [];
  switch (t) {
    case "placeholderTextColor": {
      const c = zt([["color", n], ["opacity", 1]], s);
      a.push(`${i}::placeholder${c}`);
      break;
    }
    case "backgroundClip":
    case "userSelect": {
      const c = `Webkit${`${t[0].toUpperCase()}${t.slice(1)}`}`, f = zt([[t, n], [c, n]], s);
      a.push(`${i}${f}`);
      break;
    }
    case "pointerEvents": {
      let c = n;
      n === "auto" || n === "box-only" ? (c = "auto", n === "box-only" && a.push(`${i}>*${bc}`)) : (n === "none" || n === "box-none") && (c = "none", n === "box-none" && a.push(`${i}>*${gc}`));
      const f = zt([["pointerEvents", c]], !0);
      a.push(`${i}${f}`);
      break;
    }
    default: {
      const c = zt([[t, n]], s);
      a.push(`${i}${c}`);
      break;
    }
  }
  return (r == null ? void 0 : r.name) === "hover" && (a = a.map((c) => `@media (hover) {${c}}`)), a;
}
const gc = zt([["pointerEvents", "auto"]], !0), bc = zt([["pointerEvents", "none"]], !0);
function J(...e) {
  if (process.env.NODE_ENV !== "production")
    return console.info(...e);
}
function qs(e, t) {
  if (e === "flex")
    return [["flexGrow", t], ["flexShrink", 1], ["flexBasis", "auto"]];
  switch (e) {
    case "textAlignVertical":
      return [["verticalAlign", t === "center" ? "middle" : t]];
    case "writingDirection":
      return [["direction", t]];
  }
  if (e in cn)
    return cn[e].map((n) => [n, t]);
}
const Do = ["Top", "Right", "Bottom", "Left"], Mo = ["Right", "Left"], Vo = ["Top", "Bottom"], Io = ["X", "Y"], cn = {
  borderColor: ["TopColor", "RightColor", "BottomColor", "LeftColor"],
  borderRadius: ["TopLeftRadius", "TopRightRadius", "BottomRightRadius", "BottomLeftRadius"],
  borderWidth: ["TopWidth", "RightWidth", "BottomWidth", "LeftWidth"],
  margin: Do,
  marginHorizontal: Mo,
  marginVertical: Vo,
  overscrollBehavior: Io,
  padding: Do,
  paddingHorizontal: Mo,
  paddingVertical: Vo,
  // react-native only supports borderStyle
  borderStyle: ["TopStyle", "RightStyle", "BottomStyle", "LeftStyle"],
  // react-native doesn't support X / Y
  overflow: Io
};
var ds;
for (const e in cn) {
  const t = e.slice(0, ((ds = /[A-Z]/.exec(e)) == null ? void 0 : ds.index) ?? e.length);
  cn[e] = cn[e].map((n) => `${t}${n}`);
}
const Bn = (e) => e && !Array.isArray(e) && typeof e == "object";
function Zs(e, t = !1) {
  const n = {};
  for (let r in e) {
    const o = e[r];
    if (o == null)
      continue;
    if (r in ft || // this should capture all parent-based styles like media, group, etc
    r[0] === "$" && Bn(o)) {
      n[r] = Zs(o, t);
      continue;
    }
    const i = t ? o : Ye(o, r), s = qs(r, i);
    s ? Object.assign(n, Object.fromEntries(s)) : n[r] = i;
  }
  return Hn(n), n;
}
function vc(e) {
  const {
    curProps: t,
    props: n,
    conf: r,
    context: o,
    theme: i
  } = e;
  let s = r.fontsParsed;
  o != null && o.language && (s = Sr(r.fontsParsed, o.language));
  const a = Mr(e.fontFamily || e.curProps.fontFamily || e.conf.defaultFont), c = s[a] || s[e.conf.defaultFont];
  return {
    fonts: s,
    tokens: r.tokensParsed,
    theme: i,
    fontFamily: a,
    font: c,
    // TODO do this in splitstlye
    // we avoid passing in default props for media queries because that would confuse things like SizableText.size:
    props: new Proxy(n, {
      // handles shorthands
      get(f, u) {
        for (const d of [u, r.inverseShorthands[u]])
          if (d)
            return Reflect.has(t, d) ? Reflect.get(t, d) : Reflect.get(f, d);
      }
    })
  };
}
const lr = /* @__PURE__ */ new WeakMap();
function Sr(e, t) {
  if (lr.has(t))
    return lr.get(t);
  const n = {
    ...e,
    ...Object.fromEntries(Object.entries(t).map(([r, o]) => {
      if (o === "default")
        return [];
      const i = `$${r}_${o}`;
      return [`$${r}`, e[i]];
    }))
  };
  return lr.set(t, n), n;
}
const Dt = {
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
  group: 1,
  themeInverse: 1,
  animatePresence: 1
};
process.env.NODE_ENV === "test" && (Dt["data-test-renders"] = 1);
process.env.NODE_ENV !== "production" && Object.assign(Dt, {
  ellipsizeMode: 1,
  accessibilityElementsHidden: 1,
  accessibilityIgnoresInvertColors: 1,
  accessibilityLanguage: 1,
  adjustsFontSizeToFit: 1,
  allowFontScaling: 1,
  dataDetectorType: 1,
  dynamicTypeRamp: 1,
  elevationAndroid: 1,
  hapticFeedback: 1,
  hapticStyle: 1,
  importantForAccessibility: 1,
  lineBreakStrategyIOS: 1,
  maxFontSizeMultiplier: 1,
  minimumFontScale: 1,
  needsOffscreenAlphaCompositing: 1,
  nextFocusDown: 1,
  nextFocusForward: 1,
  nextFocusLeft: 1,
  nextFocusRight: 1,
  nextFocusUp: 1,
  onMagicTap: 1,
  selectionColor: 1,
  shouldRasterizeIOS: 1,
  suppressHighlighting: 1,
  textBreakStrategy: 1
});
const Js = (e, t, n, r) => {
  var d;
  if (An = null, e === "elevationAndroid")
    return;
  if (t === "unset") {
    const p = (d = n.conf.unset) == null ? void 0 : d[e];
    if (p != null)
      t = p;
    else
      return;
  }
  const o = n.styleProps.fallbackProps || r, i = o ? new Proxy(n, {
    get(p, m) {
      return m === "curProps" ? o : Reflect.get(p, m);
    }
  }) : n, {
    conf: s,
    styleProps: a,
    fontFamily: c,
    staticConfig: f
  } = i, {
    variants: u
  } = f;
  if (process.env.NODE_ENV === "development" && c && c[0] === "$" && !(c in s.fontsParsed) && console.warn(`Warning: no fontFamily "${c}" found in config: ${Object.keys(s.fontsParsed).join(", ")}`), !a.noExpand && u && e in u) {
    i.curProps[e] = t;
    const p = Qs(e, t, a, i, "");
    if (p)
      return p;
  }
  if (a.disableExpandShorthands || e in s.shorthands && (e = s.shorthands[e]), t && (t[0] === "$" ? t = xr(e, t, a.resolveValues, i) : ot(t) && (t = Fr(e, t, a.resolveValues))), t != null) {
    const p = (a.noExpand ? null : qs(e, t)) || [[e, t]];
    return e === "fontFamily" && An && jr.set(p, An), p;
  }
}, Qs = (e, t, n, r, o) => {
  const {
    staticConfig: i,
    conf: s,
    debug: a
  } = r, {
    variants: c
  } = i;
  if (!c)
    return;
  let f = wc(c[e], t, s);
  if (process.env.NODE_ENV === "development" && a === "verbose" && (console.groupCollapsed(`♦️♦️♦️ resolve variant ${e}`), console.info({
    key: e,
    value: t,
    variantValue: f,
    variants: c,
    curProps: {
      ...r.curProps
    }
  }), console.groupEnd()), !f) {
    if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof t != "boolean") {
      const d = i.componentName || "[UnnamedComponent]";
      console.warn(`No variant found: ${d} has variant "${e}", but no matching value "${t}"`);
    }
    return;
  }
  if (typeof f == "function") {
    const d = f, p = vc(r);
    f = d(t, p), process.env.NODE_ENV === "development" && a === "verbose" && (console.groupCollapsed("   expanded functional variant", e), console.info({
      fn: d,
      variantValue: f,
      extras: p
    }), console.groupEnd());
  }
  let u;
  if (Bn(f)) {
    const d = f.fontFamily || f[s.inverseShorthands.fontFamily];
    d && (u = yc(d, s), r.fontFamily = u, process.env.NODE_ENV === "development" && a === "verbose" && console.info("   updating font family", u)), f = ei(e, f, n, r, o);
  }
  if (f) {
    const d = Zs(f, !!n.noNormalize);
    process.env.NODE_ENV === "development" && a === "verbose" && console.info("   expanding styles from ", f, "to", d);
    const p = Object.entries(d);
    return u && u[0] === "$" && jr.set(p, Mr(u)), p;
  }
};
function yc(e, t) {
  if (ot(e)) {
    const n = ko.get(e);
    if (n)
      return n;
    for (const r in t.fontsParsed) {
      const o = t.fontsParsed[r].family;
      if (ot(o) && (ko.set(o, r), o === e))
        return r;
    }
  } else if (typeof e == "string" && e[0] === "$")
    return e;
}
const ko = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Sc = (e) => e && jr.get(e), ei = (e, t, n, r, o) => {
  var d;
  const {
    conf: i,
    staticConfig: s,
    debug: a,
    theme: c
  } = r, {
    variants: f
  } = s, u = {};
  process.env.NODE_ENV === "development" && a === "verbose" && console.info("   - resolveTokensAndVariants", e, t);
  for (const p in t) {
    const m = i.shorthands[p] || p, v = t[p];
    if (!(!n.noSkip && m in Dt)) {
      if (n.noExpand)
        u[m] = v;
      else if (f && m in f) {
        if (r.curProps[m] = v, o && o === e)
          u[m] = // SYNC WITH *1
          v[0] === "$" ? xr(m, v, n.resolveValues, r) : v;
        else {
          const x = Qs(m, v, n, r, e);
          if (x)
            for (const [O, h] of x)
              h != null && (O in ft ? (u[O] ?? (u[O] = {}), Object.assign(u[O], h)) : u[O] = h);
        }
        continue;
      }
      if (ot(v)) {
        u[m] = Fr(m, v, n.resolveValues), process.env.NODE_ENV === "development" && a === "verbose" && console.info("variable", m, u[m]);
        continue;
      }
      if (typeof v == "string") {
        const x = (
          // SYNC WITH *1
          v[0] === "$" ? xr(m, v, n.resolveValues, r) : v
        );
        u[m] = x;
        continue;
      }
      if (Bn(v)) {
        const x = ei(m, v, n, r, e);
        process.env.NODE_ENV === "development" && a === "verbose" && console.info("object", m, x), u[m] ?? (u[m] = {}), Object.assign(u[m], x);
      } else
        u[m] = v;
      process.env.NODE_ENV === "development" && a && ((d = u[m]) == null ? void 0 : d[0]) === "$" && console.warn(`⚠️ Missing token in theme ${c.name}:`, m, u[m], c);
    }
  }
  return u;
}, xc = ["size", "color", "radius", "space", "zIndex"].map((e) => ({
  name: e,
  spreadName: `...${e}`
}));
function wc(e, t, n) {
  if (typeof e == "function")
    return e;
  const r = e[t];
  if (r)
    return r;
  if (t != null) {
    const {
      tokensParsed: o
    } = n;
    for (const {
      name: s,
      spreadName: a
    } of xc)
      if (a in e && t in o[s])
        return e[a];
    const i = e["...fontSize"];
    if (i && n.fontSizeTokens.has(t))
      return i;
  }
  return e[`:${typeof t}`] || e["..."];
}
const Nc = {
  fontSize: "size",
  fontWeight: "weight"
};
let An = null;
const xr = (e, t, n = "none", r) => {
  var m, v, x, O;
  if (n === "none")
    return t;
  const {
    theme: o,
    conf: i = st(),
    context: s,
    fontFamily: a,
    staticConfig: c
  } = r, f = i.tokensParsed;
  let u, d = !1;
  const p = (m = c == null ? void 0 : c.accept) == null ? void 0 : m[e];
  if (p) {
    const h = (o == null ? void 0 : o[t]) ?? f[p][t];
    h != null && (n = "value", u = h, d = !0);
  }
  if (o && t in o)
    u = o[t], process.env.NODE_ENV === "development" && r.debug === "verbose" && console.info(` - resolving ${e} to theme value ${t}: ${u == null ? void 0 : u.val}`), d = !0;
  else {
    if (t in i.specificTokens)
      d = !0, u = i.specificTokens[t];
    else {
      switch (e) {
        case "fontFamily": {
          u = ((v = (s != null && s.language ? Sr(i.fontsParsed, s.language) : i.fontsParsed)[t]) == null ? void 0 : v.family) || t, An = t, d = !0;
          break;
        }
        case "fontSize":
        case "lineHeight":
        case "letterSpacing":
        case "fontWeight": {
          const h = i.defaultFont || "$body", y = a || h;
          if (y) {
            const N = s != null && s.language ? Sr(i.fontsParsed, s.language) : i.fontsParsed;
            u = ((O = (x = N[y] || N[h]) == null ? void 0 : x[Nc[e] || e]) == null ? void 0 : O[t]) || t, d = !0;
          }
          break;
        }
      }
      for (const h in At)
        if (e in At[h]) {
          const y = f[h][t];
          y != null && (u = y, d = !0);
        }
    }
    if (!d) {
      const h = f.space[t];
      h != null && (u = h, d = !0);
    }
  }
  if (d) {
    const h = Fr(e, u, n);
    return process.env.NODE_ENV === "development" && r.debug === "verbose" && console.info("resolved", n, u, h), h;
  }
  process.env.NODE_ENV === "development" && r.debug === "verbose" && console.warn(`Warning: no token found for ${e}, omitting`);
};
function Fr(e, t, n) {
  if (n === "none")
    return t;
  if (ot(t)) {
    if (n === "value")
      return t.val;
    const r = t == null ? void 0 : t.get;
    return typeof r == "function" ? r(n === "web" ? "web" : void 0) : t.variable;
  }
  return t;
}
const En = process.env.IS_STATIC === "is_static";
let lt;
const Tn = "-";
function jo(e, t) {
  var n;
  return (t.validStyles || (t.isText || t.isInput ? xs : Vt))[e] || ((n = t.accept) == null ? void 0 : n[e]);
}
const Ec = (e, t, n, r, o, i, s, a, c, f) => {
  var me, _t, It, Ge, pt, Fe, Se;
  lt = lt || st(), i.isAnimated && lt.animations.isReactNative && !i.noNormalize && (i.noNormalize = "values");
  const {
    shorthands: u
  } = lt, {
    isHOC: d,
    isText: p,
    isInput: m,
    variants: v,
    isReactNative: x,
    inlineProps: O,
    inlineWhenUnflattened: h,
    parentStaticConfig: y,
    acceptsClassName: N
  } = t, g = {}, C = i.mediaState || Xt, w = {}, P = N && Rt && !i.noClassNames, U = [], Y = {}, R = {};
  let A = null, L = e.space, I = !1, j, ye, ke, Be = e.className || "", Z = 0;
  const _ = {
    curProps: {},
    classNames: Y,
    conf: lt,
    props: e,
    styleProps: i,
    componentState: o,
    staticConfig: t,
    style: null,
    theme: n,
    usedKeys: w,
    viewProps: g,
    context: a,
    debug: f
  };
  process.env.NODE_ENV === "development" && f && f !== "profile" && Xe && (console.groupCollapsed("getSplitStyles (collapsed)"), J({
    props: e,
    staticConfig: t,
    shouldDoClasses: P,
    styleProps: i,
    componentState: o,
    styleState: _,
    theme: {
      ...n
    }
  }), console.groupEnd());
  for (const M in e) {
    let S = M, $ = e[M];
    if (t.accept && (t.accept[S] === "style" || t.accept[S] === "textStyle") && typeof $ == "object") {
      const oe = _n(_, S, $, i.noClassNames);
      g[S] = oe;
      continue;
    }
    if (process.env.NODE_ENV === "development" && f === "verbose" && console.groupEnd(), i.disableExpandShorthands || S in u && (S = u[S]), S === "className" || S in w || e.asChild && Vs[S] === $)
      continue;
    if (S in Dt && !i.noSkip && !d) {
      if (S === "group") {
        const oe = `t_group_${$}`, ee = lt.settings.webContainerType || "inline-size", we = {
          identifier: oe,
          property: "container",
          rules: [`.${oe} { container-name: ${$}; container-type: ${ee}; }`]
        };
        on(U, we);
      }
      continue;
    }
    const q = typeof $, le = jo(S, t);
    if (le && q === "string" && $[0] === "_") {
      const oe = S in Vt, ee = !oe && // media are flattened for some reason to color-hover keys,
      // we should probably just leave them in place to avoid extra complexity
      S.includes(Tn) && Vt[S.split(Tn)[0]];
      if (oe || ee) {
        P ? (Rn(R, Y, S, $, ee), _.style && delete _.style[S]) : (_.style || (_.style = {}), _.style[S] = fc(S, $), delete Y[S]);
        continue;
      }
    }
    if ($ !== e[S] && (_.curProps[S] = $), S === "dataSet") {
      for (const oe in $)
        g[`data-${Oc(oe)}`] = $[oe];
      continue;
    }
    if (!i.noExpand) {
      if (S === "disabled" && $ === !0 && (g["aria-disabled"] = !0, (c === "button" || c === "form" || c === "input" || c === "select" || c === "textarea") && (g.disabled = !0), !(v != null && v.disabled)))
        continue;
      if (S === "testID") {
        g[x ? S : "data-testid"] = $;
        continue;
      }
      if (S === "id" || S === "nativeID") {
        g.id = $;
        continue;
      }
      let oe = !1;
      if (x) {
        if (S in On || S.startsWith("accessibility")) {
          g[S] = $;
          continue;
        }
      } else {
        if (oe = !0, S in On) {
          g[On[S]] = $;
          continue;
        }
        switch (S) {
          case "accessibilityRole": {
            $ === "none" ? g.role = "presentation" : g.role = Dc[$] || $;
            continue;
          }
          case "accessibilityLabelledBy":
          case "accessibilityFlowTo":
          case "accessibilityControls":
          case "accessibilityDescribedBy": {
            g[`aria-${S.replace("accessibility", "").toLowerCase()}`] = _c($);
            continue;
          }
          case "accessibilityKeyShortcuts": {
            Array.isArray($) && (g["aria-keyshortcuts"] = $.join(" "));
            continue;
          }
          case "accessibilityLiveRegion": {
            g["aria-live"] = $ === "none" ? "off" : $;
            continue;
          }
          case "accessibilityReadOnly": {
            g["aria-readonly"] = $, (c === "input" || c === "select" || c === "textarea") && (g.readOnly = !0);
            continue;
          }
          case "accessibilityRequired": {
            g["aria-required"] = $, (c === "input" || c === "select" || c === "textarea") && (g.required = $);
            continue;
          }
          default:
            oe = !1;
        }
      }
      if (oe)
        continue;
    }
    const H = S in u;
    let Q = !le && v && S in v;
    const ue = H || le || Q;
    let Te = S in hr, he = !ue && !Te && yo(S), xe = !!(he || Te);
    const ge = le || xe || Q && !i.noExpand || H;
    if (ge && (e.asChild === "except-style" || e.asChild === "except-style-web"))
      continue;
    const it = !ge || // is in parent variants
    d && (y == null ? void 0 : y.variants) && S in y.variants || (O == null ? void 0 : O.has(S)), Qt = (me = y == null ? void 0 : y.variants) == null ? void 0 : me[S], mt = !!(d && (H || le || xe || Qt || S in Dt)), ht = it || mt;
    if (process.env.NODE_ENV === "development" && f === "verbose" && (console.groupCollapsed(`  🔑 ${M}${S !== M ? ` (shorthand for ${S})` : ""} ${ht ? "(pass)" : ""}`), J({
      isVariant: Q,
      valInit: $,
      shouldPassProp: it
    }), Xe && J({
      variants: v,
      variant: v == null ? void 0 : v[S],
      isVariant: Q,
      isHOCShouldPassThrough: mt,
      curProps: {
        ..._.curProps
      },
      parentStaticConfig: y
    })), ht && (Fo(g, S, $, xe), !Q)) {
      process.env.NODE_ENV === "development" && f === "verbose" && console.groupEnd();
      continue;
    }
    if (!i.noSkip && S in Dt) {
      process.env.NODE_ENV === "development" && f === "verbose" && console.groupEnd();
      continue;
    }
    (p || m) && $ && (S === "fontFamily" || S === u.fontFamily) && $ in lt.fontsParsed && (_.fontFamily = $);
    const de = xe || !Q && !le, Re = de ? null : Js(S, $, _);
    if (!de) {
      if (!Re)
        continue;
      const oe = Sc(Re);
      oe && (_.fontFamily = oe);
    }
    if (process.env.NODE_ENV === "development" && f === "verbose") {
      console.groupCollapsed("  💠 expanded", S, $);
      try {
        !qt && To && (J({
          expanded: Re,
          styleProps: i,
          componentState: o,
          isVariant: Q,
          variant: v == null ? void 0 : v[S],
          shouldPassProp: it,
          isHOCShouldPassThrough: mt,
          theme: n,
          usedKeys: {
            ...w
          },
          curProps: {
            ..._.curProps
          }
        }), J("expanded", Re, `
usedKeys`, {
          ...w
        }, `
current`, {
          ..._.style
        }));
      } catch {
      }
      console.groupEnd();
    }
    let F = S, te = $;
    const kt = Re ? Re.length : 1;
    for (let oe = 0; oe < kt; oe++) {
      if (Re) {
        const [ee, we] = Re[oe];
        F = ee, te = we;
      }
      if (!(te == null || F in w)) {
        if (Te = F in hr, he = !Te && !le && yo(F), xe = !!(he || Te), Q = v && F in v, (O != null && O.has(F) || En && (h != null && h.has(F))) && (g[F] = e[F] ?? te), i.noExpand && Te || d && (xe || ((_t = y == null ? void 0 : y.variants) == null ? void 0 : _t[S]))) {
          Fo(g, F, te, xe), process.env.NODE_ENV === "development" && f === "verbose" && (console.groupCollapsed(` - passing down prop ${F}`), J({
            val: te,
            after: {
              ...g[F]
            }
          }), console.groupEnd());
          continue;
        }
        if (Te) {
          if (!te)
            continue;
          const ee = _n(_, F, te, i.noClassNames), we = ft[F], Ne = F === "enterStyle", ae = F === "exitStyle";
          if (!we)
            continue;
          if ((!P || En) && (A || (A = {}), A[F] || (A[F] = {}), En)) {
            Object.assign(A[F], ee);
            continue;
          }
          if (P && !ae) {
            const Oe = Ks(ee, we);
            process.env.NODE_ENV === "development" && f === "verbose" && (console.groupCollapsed("pseudo (classes)", F), J({
              pseudoStyleObject: ee,
              pseudoStyles: Oe
            }), console.groupEnd());
            for (const se of Oe) {
              const ce = `${se.property}${Tn}${we.name}`;
              ce in w || (on(U, se), Rn(R, Y, ce, se.identifier, xe, !0));
            }
          }
          if (!P || ae || Ne) {
            const Oe = we.stateKey || we.name;
            let se = o[Oe] === !1;
            ae && (se = !i.isExiting), Ne && (se = o.unmounted === "should-enter" ? !0 : !o.unmounted), process.env.NODE_ENV === "development" && f === "verbose" && (console.groupCollapsed("pseudo", F, {
              isDisabled: se
            }), J({
              pseudoStyleObject: ee,
              isDisabled: se,
              descriptor: we,
              componentState: o
            }), console.groupEnd());
            const ce = we.priority;
            for (const ne in ee) {
              const K = ee[ne];
              if (se) {
                const ve = Cc[ne];
                ve != null && !(ne in w) && (!_.style || !(ne in _.style)) && Dn(_, ne, ve);
              } else {
                const ve = w[ne] || 0, We = ce >= ve;
                We && (A || (A = {}), A[F] || (A[F] = {}), A[F][ne] = K, Dn(_, ne, K)), process.env.NODE_ENV === "development" && f === "verbose" && J("    subKey", ne, We, {
                  importance: ce,
                  curImportance: ve,
                  pkey: ne,
                  val: K
                });
              }
            }
            if (!se)
              for (const ne in te) {
                const K = u[ne] || ne;
                w[K] = Math.max(ce, w[K] || 0);
              }
          }
          continue;
        }
        if (he) {
          if (!te)
            continue;
          if (he === "platform") {
            const Ne = F.slice(10);
            if (
              // supports web, ios, android
              Ne !== sa && // supports web, native
              Ne !== "web"
            )
              continue;
          }
          I || (I = !0);
          const ee = F.slice(1);
          process.env.NODE_ENV === "development" && f === "verbose" && J(`  📺 ${F}`, {
            key: F,
            val: te,
            props: e,
            shouldDoClasses: P,
            acceptsClassName: N,
            componentState: o
          });
          const we = te.space;
          if ((we || !P) && (Array.isArray(I) || (I = []), I.push(ee)), P) {
            const Ne = _n(_, F, te, !1);
            if (we && (delete Ne.space, C[ee])) {
              const se = Ds(ee, "space", w, !0);
              se && (L = te.space, w.space = se, process.env.NODE_ENV === "development" && f === "verbose" && J(`Found more important space for current media ${ee}: ${te} (importance: ${se})`));
            }
            const ae = Oo(Ne), Oe = Z;
            Z += 1;
            for (const se of ae) {
              const ce = ec(se, ee, Ps, he, !1, Oe);
              process.env.NODE_ENV === "development" && f === "verbose" && J("📺 media style:", ce);
              const ne = `${se.property}${Tn}${ee}${se.pseudo || ""}`;
              ne in w || (on(U, ce), Rn(R, Y, ne, ce.identifier, !0, !0));
            }
          } else {
            const Ne = _n(_, F, te, !0), ae = he === "theme", Oe = he === "group";
            if (!ae && he !== "platform" && !Oe && !C[ee])
              continue;
            let se = 0;
            if (ae) {
              j = !0;
              const ce = ee.slice(6);
              if (!(r === ce || r.startsWith(ce)))
                continue;
            } else if (Oe) {
              const ce = Hs(ee), ne = ce.name, K = a == null ? void 0 : a.groups.state[ne];
              if (!K) {
                process.env.NODE_ENV === "development" && f && console.warn(`No parent with group prop, skipping styles: ${ne}`);
                continue;
              }
              const ve = ce.pseudo, We = ce.media, qe = (It = o.group) == null ? void 0 : It[ne];
              if (We) {
                ke || (ke = /* @__PURE__ */ new Set()), ke.add(We);
                const at = qe == null ? void 0 : qe.media;
                let Ze = at == null ? void 0 : at[We];
                if (!at && K.layout && (Ze = Ms(We, K.layout)), !Ze)
                  continue;
                se = 2;
              }
              if (ve) {
                if (ye || (ye = /* @__PURE__ */ new Set()), ye.add(ne), !((Ge = (qe || // fallback to context initially
                a.groups.state[ne]).pseudo) != null && Ge[ve]))
                  continue;
                se = Ra[ve];
              }
            }
            for (const ce in Ne) {
              if (ce === "space") {
                L = $.space;
                continue;
              }
              _.style || (_.style = {}), Mc(_, ee, ce, Ne[ce], w, C[ee], se), F === "fontFamily" && (_.fontFamily = Ne.fontFamily);
            }
          }
          continue;
        }
        if (
          // is HOC we can just pass through the styles as props
          // this fixes issues where style prop got merged with wrong priority
          !d && jo(F, t)
        ) {
          Dn(_, F, te);
          continue;
        }
        Q || (g[F] = te);
      }
    }
    if (process.env.NODE_ENV === "development" && f === "verbose") {
      try {
        J(" ✔️ expand complete", S), J("style", {
          ..._.style
        }), J("transforms", {
          ...R
        }), J("viewProps", {
          ...g
        });
      } catch {
      }
      console.groupEnd();
    }
  }
  if (i.noNormalize !== !1 && (_.style && (Hn(_.style), !t.isReactNative && kr(_.style)), _.flatTransforms && (_.style || (_.style = {}), Object.entries(_.flatTransforms).sort(([M], [S]) => M.localeCompare(S)).forEach(([M, S]) => {
    Wr(_.style, M, S, !0);
  })), s)) {
    if (P)
      for (const M in s.classNames) {
        const S = s.classNames[M];
        _.style && M in _.style || M in Y || (Y[M] = S);
      }
    if (!P)
      for (const M in s.style)
        M in Y || _.style && M in _.style || (_.style || (_.style = {}), _.style[M] = s.style[M]);
  }
  if (!t.isReactNative && !t.isHOC && (!i.isAnimated || lt.animations.supportsCSSVars) && Array.isArray((pt = _.style) == null ? void 0 : pt.transform) && (_.style.transform = Ir(_.style.transform)), _.style && P) {
    let M, S = !1;
    if (!_.style.$$css) {
      const $ = Oo(_.style);
      for (const q of $) {
        const le = q.property, H = i.isAnimated && i.noClassNames && (!e.animateOnly || e.animateOnly.includes(le)), Q = !H && !i.isAnimated && ((Fe = e.animateOnly) == null ? void 0 : Fe.includes(le));
        H ? (M || (M = {}), M[le] = _.style[le]) : Q ? (M || (M = {}), M[le] = q.value, S = !0) : (on(U, q), Rn(R, Y, le, q.identifier, !1, !0));
      }
      process.env.NODE_ENV === "development" && e.debug === "verbose" && (console.groupEnd(), console.groupCollapsed("🔹 getSplitStyles final style object"), console.info(_.style), console.groupEnd()), (S || !En) && (_.style = M || {});
    }
    if (R)
      for (const $ in R) {
        if (!R[$]) {
          process.env.NODE_ENV === "development" && console.warn("Error no transform", R, $);
          continue;
        }
        const [q, le] = R[$], H = `_transform${q}`;
        if (Xe && !dn[H]) {
          const Q = `.${H} { transform: ${le}; }`;
          on(U, {
            identifier: H,
            rules: [Q],
            property: $
          });
        }
        Y[$] = H;
      }
  }
  if (!x && g.tabIndex == null) {
    const M = g.focusable ?? g.accessible;
    g.focusable && delete g.focusable;
    const S = g.role;
    M === !1 && (g.tabIndex = "-1"), // These native elements are focusable by default
    c === "a" || c === "button" || c === "input" || c === "select" || c === "textarea" ? (M === !1 || e.accessibilityDisabled === !0) && (g.tabIndex = "-1") : (
      // These roles are made focusable by default
      (S === "button" || S === "checkbox" || S === "link" || S === "radio" || // @ts-expect-error (consistent with RNW)
      S === "textbox" || S === "switch") && M !== !1 && (g.tabIndex = "0")
    ), M && (g.tabIndex = "0", delete g.focusable);
  }
  const Pe = e.style;
  if (Pe)
    if (d)
      g.style = Wo(Pe);
    else {
      const M = Array.isArray(Pe), S = M ? Pe.length : 1;
      for (let $ = 0; $ < S; $++) {
        const q = M ? Pe[$] : Pe;
        q && (q.$$css ? Object.assign(_.classNames, q) : (_.style || (_.style = {}), Object.assign(_.style, Wo(q))));
      }
    }
  const je = {
    space: L,
    hasMedia: I,
    fontFamily: _.fontFamily,
    viewProps: g,
    style: _.style,
    pseudos: A,
    classNames: Y,
    rulesToInsert: U,
    dynamicThemeAccess: j,
    pseudoGroups: ye,
    mediaGroups: ke
  }, Ke = e.asChild;
  if (!(Ke === "except-style" || Ke === "except-style-web")) {
    const M = _.style;
    {
      let S = p || m ? _.fontFamily || ((Se = t.defaultProps) == null ? void 0 : Se.fontFamily) : null;
      S && S[0] === "$" && (S = S.slice(1));
      const $ = S ? `font_${S}` : "", q = e.group ? `t_group_${e.group}` : "", le = e.componentName || t.componentName, H = e.asChild || !le ? "" : `is_${le}`;
      let Q = [];
      H && Q.push(H), $ && Q.push($), Y && Q.push(Object.values(Y).join(" ")), q && Q.push(q), e.className && Q.push(e.className);
      const ue = Q.join(" ");
      if (i.noMergeStyle)
        ue && (g.className = ue);
      else if (i.isAnimated && !lt.animations.supportsCSSVars && x)
        M && (g.style = M);
      else if (x) {
        const Te = {
          $$css: !0
        };
        for (const he of ue.split(" "))
          Te[he] = he;
        g.style = [...Array.isArray(M) ? M : [M], Te];
      } else
        ue && (g.className = ue), M && (g.style = M);
    }
  }
  if (process.env.NODE_ENV === "development" && f === "verbose" && To) {
    console.groupCollapsed("🔹 getSplitStyles ===>");
    try {
      const M = {
        ...je,
        className: Be,
        componentState: o,
        transforms: R,
        viewProps: g,
        rulesToInsert: U,
        parentSplitStyles: s
      };
      for (const S in M)
        J(S, M[S]);
    } catch {
    }
    console.groupEnd();
  }
  return je;
};
function Rn(e, t, n, r, o = !1, i = !1) {
  if (r)
    if (!i && r[0] === "_" && r.startsWith("_transform-")) {
      const s = o ? n : "transform";
      let a = dn[r];
      Xe && !a && (ya(), a = dn[r], !a && Rt && r[0] !== "_" && (a = r)), e[s] || (e[s] = ["", ""]), e[s][0] += r.replace("_transform", ""), a && (e[s][1] += a);
    } else
      t[n] = r;
}
function Dn(e, t, n, r = !1) {
  const {
    classNames: o,
    viewProps: i,
    usedKeys: s,
    styleProps: a,
    staticConfig: c
  } = e;
  if ((n == null ? void 0 : n[0]) === "_")
    o[t] = n, s[t] || (s[t] = 1);
  else if (t in Yn)
    e.flatTransforms || (e.flatTransforms = {}), e.flatTransforms[t] = n;
  else {
    const f = !r && !a.noNormalize ? Ye(n, t) : n;
    c.accept && t in c.accept ? i[t] = f : (e.style || (e.style = {}), e.style[t] = f);
  }
}
const _n = (e, t, n, r) => {
  const {
    staticConfig: o,
    props: i,
    conf: s,
    styleProps: a
  } = e, c = {};
  for (let f in n) {
    const u = n[f];
    f = s.shorthands[f] || f;
    const d = Js(f, u, e, {
      ...i,
      ...i[t]
    });
    if (!(!d || !o.isHOC && f in Dt && !a.noSkip))
      for (const [p, m] of d)
        !r && p in Yn ? Wr(c, p, m) : c[p] = a.noNormalize ? m : Ye(m, f);
  }
  return a.noNormalize || Hn(c), c;
}, Tc = Hi || dt, Rc = (e, t, n, r, o, i, s, a, c, f) => {
  const u = Ec(e, t, n, r, o, i, s, a, c, f);
  return Tc(() => {
    Na(u.rulesToInsert);
  }, [u.rulesToInsert]), u;
};
function on(e, t) {
  _s(t.identifier) && (Rs(t.identifier, t.rules), e.push(t));
}
function _c(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Pc = process.env.TAMAGUI_DEFAULT_COLOR || "rgba(0,0,0,0)", Cc = {
  ...Object.fromEntries(Object.entries(At.color).map(([e, t]) => [e, Pc])),
  opacity: 1,
  scale: 1,
  rotate: "0deg",
  rotateY: "0deg",
  rotateX: "0deg",
  x: 0,
  y: 0,
  borderRadius: 0
}, $c = (e) => `-${e.toLowerCase()}`, Oc = (e) => e.replace(/[A-Z]/g, $c), Wr = (e, t, n, r = !1) => {
  typeof e.transform != "string" && (e.transform || (e.transform = []), e.transform[r ? "unshift" : "push"]({
    [Ac[t] || t]: n
  }));
}, Ac = {
  x: "translateX",
  y: "translateY"
}, Dc = {
  adjustable: "slider",
  header: "heading",
  image: "img",
  link: "link",
  none: "presentation",
  summary: "region"
};
function Fo(e, t, n, r = !1) {
  if (r) {
    const o = {
      ...e[t],
      ...n
    };
    delete e[t], e[t] = o;
  } else
    e[t] = n;
}
function Mc(e, t, n, r, o, i, s) {
  let a = Ds(t, n, o, i);
  return s && (a = (a || 0) + s), a === null ? !1 : (o[n] = a, Dn(e, n, r), !0);
}
function Wo(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    n in Yn ? Wr(t, n, r) : t[n] = Ye(r, n);
  }
  return Array.isArray(t.transform) && (t.transform = Ir(t.transform)), Hn(t), t;
}
const Vc = (e, t, n) => {
  const r = {};
  for (const o in e)
    Lo(r, e, t, o, n);
  if (t)
    for (const o in t)
      Lo(r, t, void 0, o, n);
  return r;
};
function Lo(e, t, n, r, o) {
  const i = (o == null ? void 0 : o[r]) || null, s = t[r];
  if (r in ft || Cs.has(r)) {
    e[r] = {
      ...e[r],
      ...s
    };
    return;
  }
  n && (r in n || i && i in n) || (e[i || r] = s);
}
let De;
function Lr({
  themeState: e,
  themeProps: t,
  children: n
}) {
  var r, o, i, s, a, c, f, u;
  if (process.env.NODE_ENV === "development") {
    const d = Ys(), [p, m] = Ln(0), v = ea(), x = $r();
    return process.env.NODE_ENV === "development" && typeof document < "u" && (De || (De = document.createElement("div"), De.style.height = "200px", De.style.overflowY = "scroll", De.style.position = "fixed", De.style.zIndex = 1e7, De.style.bottom = "30px", De.style.left = "30px", De.style.right = "30px", De.style.display = "flex", De.style.border = "1px solid #888", De.style.flexDirection = "row", De.style.background = "var(--background)", document.body.appendChild(De))), rt(() => {
      var O, h;
      (h = (O = e.themeManager) == null ? void 0 : O.parentManager) == null || h.onChangeTheme((y, N) => {
        var g, C, w;
        m((P) => ++P), console.warn(`theme changed for ${(g = e.themeManager) == null ? void 0 : g.id} from parent ${(w = (C = e.themeManager) == null ? void 0 : C.parentManager) == null ? void 0 : w.id} to new name`, y);
      });
    }, [e.themeManager]), rt(() => {
      const O = setInterval(v, 1e3);
      return () => clearTimeout(O);
    }, []), t["disable-child-theme"] || !d ? n : /* @__PURE__ */ W.jsxs(W.Fragment, {
      children: [hs(/* @__PURE__ */ W.jsxs("code", {
        style: {
          whiteSpace: "pre",
          maxWidth: 250,
          overflow: "auto",
          padding: 5
        },
        children: ["<Theme ", x, " /> ", JSON.stringify({
          propsName: t.name,
          name: (r = e == null ? void 0 : e.state) == null ? void 0 : r.name,
          className: (o = e == null ? void 0 : e.state) == null ? void 0 : o.className,
          inverse: t.inverse,
          forceClassName: t.forceClassName,
          parent: (i = e.themeManager) == null ? void 0 : i.state.parentName,
          id: (s = e.themeManager) == null ? void 0 : s.id,
          parentId: (c = (a = e.themeManager) == null ? void 0 : a.parentManager) == null ? void 0 : c.id,
          isNew: e.isNewTheme,
          onChangeCount: p,
          listening: [...((f = e.themeManager) == null ? void 0 : f._listeningIds) || []].join(","),
          _numChangeEventsSent: (u = e.themeManager) == null ? void 0 : u._numChangeEventsSent
        }, null, 2)]
      }), De), /* @__PURE__ */ W.jsx("div", {
        style: {
          color: "red"
        },
        children: x
      }), n]
    });
  }
  return n;
}
Lr.displayName = "ThemeDebug";
const Xn = Kt(function({
  children: e,
  ...t
}, n) {
  if (t.disable)
    return e;
  const r = !!t._isRoot, o = Ws(t, r);
  let i = t["disable-child-theme"] ? Mt.map(e, (s) => Vn(s, {
    "data-disable-theme": !0
  })) : e;
  if (n)
    try {
      Ie.Children.only(i), i = Vn(i, {
        ref: n
      });
    } catch {
    }
  return process.env.NODE_ENV === "development" && t.debug === "visualize" && (i = /* @__PURE__ */ W.jsx(Lr, {
    themeState: o,
    themeProps: t,
    children: i
  })), ti(o, i, t, r);
});
Xn.displayName = "Theme";
Xn.avoidForwardRef = !0;
function ti(e, t, n, r = !1) {
  const {
    themeManager: o,
    isNewTheme: i
  } = e;
  if (!o)
    throw new Error(process.env.NODE_ENV === "development" ? "❌ No theme found, either incorrect name, potential duplicate tamagui deps, or TamaguiProvider not providing themes." : "❌ 005");
  const {
    shallow: s,
    forceClassName: a
  } = n, c = bn(!1), f = i || n.inverse || c.current || a || r;
  if (f && (c.current = !0), !f)
    return t;
  let u = t;
  s && (u = Mt.toArray(t).map((p) => ms(p) ? Vn(p, void 0, /* @__PURE__ */ W.jsx(Xn, {
    name: o.state.parentName,
    children: p.props.children
  })) : p));
  const d = /* @__PURE__ */ W.jsx(ks.Provider, {
    value: o.id,
    children: u
  });
  return a === !1 ? d : Ic({
    children: d,
    themeState: e,
    forceClassName: a,
    isRoot: r
  });
}
function Ic({
  children: e,
  themeState: t,
  forceClassName: n,
  isRoot: r
}) {
  var f;
  if (r && n === !1)
    return e;
  const o = t.inversed, i = o != null || n, {
    className: s,
    style: a
  } = jc(t, r);
  let c = /* @__PURE__ */ W.jsx("span", {
    className: `${s} _dsp_contents is_Theme`,
    style: a,
    children: e
  });
  if (i) {
    const u = ((f = t.state) == null ? void 0 : f.name) || "", d = u.startsWith("light") ? "t_light is_inversed" : u.startsWith("dark") ? "t_dark is_inversed" : "";
    c = /* @__PURE__ */ W.jsx("span", {
      className: `${o ? d : ""} _dsp_contents`,
      children: c
    });
  }
  return c;
}
const kc = {};
function jc(e, t = !1) {
  var i, s;
  if (!e.isNewTheme)
    return {
      className: "",
      style: kc
    };
  const n = (i = e.state) != null && i.theme && e.isNewTheme ? gr(e.state.theme.color) : "", r = n ? {
    color: n
  } : void 0;
  let o = ((s = e.state) == null ? void 0 : s.className) || "";
  return t && (o = o.replace("t_sub_theme", "")), {
    style: r,
    className: o
  };
}
function Fc(e, t) {
  const n = Kt(function(r, o) {
    const {
      themeInverse: i,
      theme: s,
      componentName: a,
      themeReset: c,
      ...f
    } = r, u = (
      // @ts-expect-error its ok
      /* @__PURE__ */ W.jsx(e, {
        ref: o,
        ...f,
        "data-disable-theme": !0
      })
    );
    return /* @__PURE__ */ W.jsx(Xn, {
      componentName: a || (t == null ? void 0 : t.componentName),
      name: s,
      "disable-child-theme": !0,
      debug: r.debug,
      inverse: i,
      reset: c,
      children: u
    });
  });
  return n.displayName = `Themed(${(e == null ? void 0 : e.displayName) || (e == null ? void 0 : e.name) || "Anonymous"})`, n;
}
const ut = {};
function ni(e) {
  Object.assign(ut, e);
}
const ri = Kt(function(e, t) {
  const {
    children: n,
    ...r
  } = e;
  if (ms(n)) {
    const o = Wc(n, r);
    return Vn(n, n.type.avoidForwardRef ? o : {
      ...o,
      ref: Ls(t, n.ref)
    });
  }
  return Mt.count(n) > 1 ? Mt.only(null) : null;
});
ri.displayName = "Slot";
const Pn = {
  onPress: "onClick",
  onPressOut: "onMouseUp",
  onPressIn: "onMouseDown"
};
function Wc(e, t) {
  const n = e.props, r = {
    ...n
  }, o = typeof e.type == "string";
  if (o)
    for (const i in Pn)
      i in t && (t[Pn[i]] = t[i], delete t[i]);
  for (let i in n) {
    const s = t[i], a = n[i];
    o && i in Pn && (i = Pn[i], delete r[i]), Lc.test(i) ? r[i] = gs(a, s) : i === "style" ? r[i] = {
      ...s,
      ...a
    } : i === "className" && (r[i] = [s, a].filter(Boolean).join(" "));
  }
  return {
    ...t,
    ...r
  };
}
const Lc = /^on[A-Z]/;
let Yc, k, sn, Mn;
const ln = /* @__PURE__ */ new Set();
if (typeof document < "u") {
  const e = () => {
    ln.forEach((t) => t()), ln.clear();
  };
  addEventListener("mouseup", e), addEventListener("touchend", e), addEventListener("touchcancel", e), process.env.NODE_ENV === "development" && (Mn = () => {
  });
}
function Jt(e) {
  var O;
  const {
    componentName: t
  } = e;
  let n = null, r = e.defaultProps;
  pa((h) => {
    var y;
    if (n = h, t) {
      const N = (y = h.defaultProps) == null ? void 0 : y[t];
      N && (r = {
        ...N,
        ...r
      });
    }
  });
  const {
    Component: o,
    isText: i,
    isInput: s,
    isZStack: a,
    isHOC: c,
    validStyles: f = {},
    variants: u = {}
  } = e;
  process.env.NODE_ENV === "development" && ((O = e.defaultProps) != null && O.debug) && process.env.IS_STATIC !== "is_static" && J(`🐛 [${t || "Component"}]`, {
    staticConfig: e,
    defaultProps: r,
    defaultPropsKeyOrder: r ? Object.keys(r) : []
  });
  const d = Kt((h, y) => {
    var Qr, eo, to, no, ro, oo, so, io, ao;
    const N = process.env.NODE_ENV === "development" ? $r() : "";
    process.env.NODE_ENV === "development" && Mn && (Mn(), Mn = void 0), process.env.NODE_ENV === "test" && h["data-test-renders"] && ((Qr = h["data-test-renders"]).current ?? (Qr.current = 0), h["data-test-renders"].current += 1);
    const g = Tt(No);
    let C, w, P;
    const {
      context: U
    } = e;
    if (U) {
      P = Tt(U);
      const {
        inverseShorthands: T
      } = st();
      for (const V in U.props) {
        const be = (
          // because its after default props but before props this annoying amount of checks
          h[V] ?? h[T[V]] ?? (r == null ? void 0 : r[V]) ?? (r == null ? void 0 : r[T[V]])
        );
        be === void 0 ? P && (V in f || V in u) && (C || (C = {}), C[V] = P[V]) : (w || (w = {}), w[V] = be);
      }
    }
    const Y = C ? {
      ...r,
      ...C
    } : r;
    let R = h;
    Y && (R = Vc(Y, h));
    const A = R.debug, L = R.componentName || e.componentName;
    process.env.NODE_ENV === "development" && Xe && rt(() => {
      let T = null;
      const V = (be = !1) => {
        const _e = Z.host;
        if (_e)
          if (be) {
            T = document.createElement("span"), T.style.inset = "0px", T.style.zIndex = "1000000", T.style.position = "absolute", T.style.borderColor = "red", T.style.borderWidth = "1px", T.style.borderStyle = "dotted";
            const Je = _e.getAttribute("data-at") || "", Me = _e.getAttribute("data-in") || "", pe = document.createElement("span");
            pe.style.position = "absolute", pe.style.top = "0px", pe.style.left = "0px", pe.style.padding = "3px", pe.style.background = "rgba(0,0,0,0.75)", pe.style.color = "rgba(255,255,255,1)", pe.style.fontSize = "12px", pe.style.lineHeight = "12px", pe.style.fontFamily = "monospace", pe.style.webkitFontSmoothing = "none", pe.innerText = `${L || ""} ${Je} ${Me}`.trim(), T.appendChild(pe), _e.appendChild(T);
          } else
            T && _e.removeChild(T);
      };
      return sn || (sn = /* @__PURE__ */ new Set()), sn.add(V), () => {
        sn == null || sn.delete(V);
      };
    }, [L]), !process.env.TAMAGUI_IS_CORE_NODE && process.env.NODE_ENV === "development" && A === "profile" && !k && (k = require("@tamagui/timer").timer().start()), process.env.NODE_ENV === "development" && k && k`start (ignore)`, process.env.NODE_ENV === "development" && k && k`did-finish-ssr`;
    const I = bn({
      handleFocusVisible: !0
    });
    process.env.NODE_ENV === "development" && k && k`stateref`;
    const j = g.animationDriver, ye = j == null ? void 0 : j.useAnimations, ke = !!("animation" in R || R.style && Uc(R.style)), Be = j == null ? void 0 : j.supportsCSSVars, Z = I.current, _ = !!(ke && !c && ye || Z.hasAnimated), Pe = !qt && _;
    Pe && !Z.hasAnimated && (Z.hasAnimated = !0);
    const je = n != null && n.disableSSR ? !0 : Ys(), Ke = Pe && R.animatePresence !== !1 && ((eo = j == null ? void 0 : j.usePresence) == null ? void 0 : eo.call(j)) || null, me = Ke == null ? void 0 : Ke[2], _t = (me == null ? void 0 : me.isPresent) === !1, It = (me == null ? void 0 : me.isPresent) === !0 && me.initial !== !1, Ge = !!R.enterStyle, pt = ke && (j == null ? void 0 : j.isReactNative), Fe = e.isReactNative;
    let Se = Pe;
    !Fe && pt && !c && !je && (Se = !1, Z.willHydrate = !0), process.env.NODE_ENV === "development" && k && k`pre-use-state`;
    const M = Ge || It, S = !je || !Z.host, $ = M ? S ? Ja : Vr : Eo, q = R.disabled || ((to = R.accessibilityState) == null ? void 0 : to.disabled) || R["aria-disabled"] || // @ts-expect-error (comes from core)
    R.accessibilityDisabled || !1;
    q != null && ($.disabled = q);
    const le = Ln($), H = R.forceStyle ? {
      ...le[0],
      [R.forceStyle]: !0
    } : le[0], Q = le[1];
    q !== H.disabled && Q({
      ...H,
      disabled: q
    });
    let ue = La(Q, q, A);
    if (je && H.unmounted === "should-enter" && (H.unmounted = !0), me && Se && je && e.variants) {
      process.env.NODE_ENV === "development" && A === "verbose" && console.warn(`has presenceState ${JSON.stringify(me)}`);
      const {
        enterVariant: T,
        exitVariant: V,
        enterExitVariant: be,
        custom: _e
      } = me;
      Bn(_e) && Object.assign(R, _e);
      const Je = V ?? be, Me = T ?? be;
      H.unmounted && Me && e.variants[Me] ? (process.env.NODE_ENV === "development" && A === "verbose" && console.warn(`Animating presence ENTER "${Me}"`), R[Me] = !0) : _t && Je && (process.env.NODE_ENV === "development" && A === "verbose" && console.warn(`Animating presence EXIT "${Je}"`), R[Je] = V !== be);
    }
    const Te = !!(Se && !Be || !e.acceptsClassName || // on server for SSR and animation compat added the && isHydrated but perhaps we want
    // disableClassName="until-hydrated" to be more straightforward
    // see issue if not, Button sets disableClassName to true <Button animation="" /> with
    // the react-native driver errors because it tries to animate var(--color) to rbga(..)
    h.disableClassName && je), he = !!h.forceStyle, xe = Te || he, ge = R.group;
    if (ge && !Z.group) {
      const T = /* @__PURE__ */ new Set();
      Z.group = {
        listeners: T,
        emit(V, be) {
          T.forEach((_e) => _e(V, be));
        },
        subscribe(V) {
          return T.add(V), () => {
            T.delete(V);
          };
        }
      };
    }
    if (ge) {
      const T = g.groups.state, V = ue;
      ue = (be) => {
        V(be), Z.group.emit(ge, {
          pseudo: be
        });
        const _e = {
          ...T[ge],
          ...be
        };
        T[ge] = _e;
      };
    }
    process.env.NODE_ENV === "development" && k && k`use-state`;
    const it = !!(i && g.inText);
    process.env.NODE_ENV === "development" && k && k`use-context`;
    const Qt = !o || typeof o == "string", mt = R.tag, ht = Qt && mt || o;
    let de = i ? ht || "span" : ht || (it ? "span" : "div");
    j && Se && (de = j[i ? "Text" : "View"] || de);
    const Re = R["data-disable-theme"] || c;
    process.env.NODE_ENV === "development" && k && k`theme-props`, R.themeShallow && (Z.themeShallow = !0);
    const F = {
      name: R.theme,
      componentName: L,
      disable: Re,
      shallow: Z.themeShallow,
      inverse: R.themeInverse,
      debug: A
    };
    if (typeof Z.isListeningToTheme == "boolean" && (F.shouldUpdate = () => I.current.isListeningToTheme), process.env.NODE_ENV === "development" && A && A !== "profile") {
      const T = `${L || (o == null ? void 0 : o.displayName) || (o == null ? void 0 : o.name) || "[Unnamed Component]"}`, V = (Ge ? "(hasEnter)" : "") + (Se ? "(animated)" : "") + (Fe ? "(rnw)" : "") + ((me == null ? void 0 : me.isPresent) === !1 ? "(EXIT)" : ""), be = h["data-is"] || "", _e = `${N} ${T}${be ? ` ${be}` : ""} ${V}`;
      if (console.info(`%c ${_e} (hydrated: ${je}) (unmounted: ${H.unmounted})`, "background: green; color: white;"), qt)
        J({
          noClassNames: xe,
          isAnimated: Se,
          shouldAvoidClasses: Te,
          isWeb: Rt,
          supportsCSSVars: Be
        });
      else {
        console.groupEnd();
        const Je = `${`${H.press || H.pressIn ? " PRESS " : ""}`}${H.hover ? " HOVER " : ""}${H.focus ? " FOCUS" : " "}`, Me = h.children;
        let pe = typeof Me == "string" ? Me.length > 4 ? Me.slice(0, 4) + "..." : Me : "";
        pe.length && (pe = `(children: ${pe})`), console.groupCollapsed(`${pe}${Je}Props:`), J("props in:", h), J("final props:", R), J({
          state: H,
          staticConfig: e,
          elementType: de,
          themeStateProps: F
        }), J({
          contextProps: C,
          overriddenContextProps: w
        }), J({
          presence: Ke,
          isAnimated: Se,
          isHOC: c,
          hasAnimationProp: ke,
          useAnimations: ye
        }), console.groupEnd();
      }
    }
    process.env.NODE_ENV === "development" && k && k`pre-theme-media`;
    const [te, kt] = Ya(F);
    de = o || de;
    const oe = typeof de == "string";
    process.env.NODE_ENV === "development" && k && k`theme`;
    const ee = As(I, g);
    Dr(!1), process.env.NODE_ENV === "development" && k && k`media`;
    const we = (
      // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
      Se && !Be || c && H.unmounted == !1 && ke ? "value" : "auto"
    ), Ne = {
      mediaState: ee,
      noClassNames: xe,
      resolveValues: we,
      isExiting: _t,
      isAnimated: Se
    }, ae = Rc(R, e, kt, ((no = te == null ? void 0 : te.state) == null ? void 0 : no.name) || "", H, Ne, null, g, de, A);
    R.group && R.untilMeasured === "hide" && !Z.hasMeasured && (ae.style || (ae.style = {}), ae.style.opacity = 0), process.env.NODE_ENV === "development" && k && k`split-styles`, Z.isListeningToTheme = ae.dynamicThemeAccess;
    const Oe = ae.hasMedia && Array.isArray(ae.hasMedia), se = ga() || Oe || xe && ae.hasMedia === !0, ce = Oe ? ae.hasMedia : null;
    Aa(I, {
      enabled: se,
      keys: ce
    });
    const {
      viewProps: ne,
      pseudos: K,
      style: ve,
      classNames: We,
      space: qe
    } = ae, at = R, {
      asChild: Ze,
      children: jt,
      themeShallow: Xr,
      spaceDirection: Un,
      onPress: gt,
      onLongPress: Pt,
      onPressIn: Ct,
      onPressOut: bt,
      onHoverIn: Ft,
      onHoverOut: Wt,
      onMouseUp: $t,
      onMouseDown: Ot,
      onMouseEnter: l,
      onMouseLeave: b,
      onFocus: E,
      onBlur: D,
      separator: G,
      // ignore from here on out
      forceStyle: re,
      // @ts-ignore  for next/link compat etc
      onClick: B,
      theme: X,
      // @ts-ignore
      defaultVariants: Ce,
      ...ie
    } = ne;
    let z = ie;
    c && X && (z.theme = X), de.acceptTagProp && (z.tag = mt);
    let $e;
    if (
      // if it supports css vars we run it on server too to get matching initial style
      (Be ? _ : Pe) && ye && !c
    ) {
      const T = ye({
        props: at,
        // if hydrating, send empty style
        style: ve || {},
        presence: Ke,
        componentState: H,
        styleProps: Ne,
        theme: (ro = te.state) == null ? void 0 : ro.theme,
        pseudos: K || null,
        staticConfig: e,
        stateRef: I
      });
      (Se || Be) && T && ($e = T.style, z.style = $e), process.env.NODE_ENV === "development" && k && k`animations`;
    }
    process.env.NODE_ENV === "development" && R.untilMeasured && !R.group && console.warn(`You set the untilMeasured prop without setting group. This doesn't work, be sure to set untilMeasured on the parent that sets group, not the children that use the $group- prop.

If you meant to do this, you can disable this warning - either change untilMeasured and group at the same time, or do group={conditional ? 'name' : undefined}`), process.env.NODE_ENV === "development" && k && k`destructure`, ge && (ie.onLayout = gs(ie.onLayout, (T) => {
      I.current.group.emit(ge, {
        layout: T.nativeEvent.layout
      }), !I.current.hasMeasured && R.untilMeasured === "hide" && Q((V) => ({
        ...V
      })), I.current.hasMeasured = !0;
    })), z = ((oo = ut.usePropsTransform) == null ? void 0 : oo.call(ut, de, ie, I, Z.willHydrate)) || ie, Z.composedRef || (Z.composedRef = Ls((T) => I.current.host = T, y)), z.ref = Z.composedRef, process.env.NODE_ENV === "development" && !Fe && !i && Rt && !c && Mt.toArray(R.children).forEach((T) => {
      typeof T == "string" && T !== `
` && console.error(`Unexpected text node: ${T}. A text node cannot be a child of a <View>.`);
    }), process.env.NODE_ENV === "development" && k && k`events-hooks`;
    const {
      pseudoGroups: Le,
      mediaGroups: vt
    } = ae;
    Z.unPress || (Z.unPress = () => ue({
      press: !1,
      pressIn: !1
    }));
    const Ae = Z.unPress, zr = H.unmounted;
    rt(() => {
      if (q)
        return;
      if (zr) {
        ue({
          unmounted: !1
        });
        return;
      }
      let T;
      if (Le || vt) {
        const V = {
          pseudo: {},
          media: {}
        };
        T = g.groups.subscribe((be, {
          layout: _e,
          pseudo: Je
        }) => {
          if (Je && (Le != null && Le.has(be)))
            Object.assign(V.pseudo, Je), Me();
          else if (_e && vt) {
            const pe = Kc(vt, _e), co = js(V.media, pe);
            co !== V.media && (Object.assign(V.media, co), Me());
          }
          function Me() {
            const pe = {
              ...H.group,
              [be]: V
            };
            ue({
              group: pe
            });
          }
        });
      }
      return () => {
        T == null || T(), ln.delete(Ae);
      };
    }, [q, zr, Le ? Object.keys([...Le]).join("") : 0, vt ? Object.keys([...vt]).join("") : 0]);
    const yn = !q && xe && (K == null ? void 0 : K.pressStyle), Ur = !q && xe && (K == null ? void 0 : K.focusStyle), ji = !q && xe && (K == null ? void 0 : K.focusVisibleStyle), Kr = !!(yn || Ur || ji || E || D), Lt = !!(ge || yn || gt || bt || Ct || Ot || $t || Pt || B || K != null && K.focusVisibleStyle), Kn = !q && xe && (K == null ? void 0 : K.hoverStyle), Gn = !!(ge || Kn || Ft || Wt), qn = !!(ge || Gn || l || b), Gr = !q && !R.asChild && !!(Kr || Lt || qn || yn || Kn || Ur), qr = !!(ge || Kn);
    process.env.NODE_ENV === "development" && k && k`events-setup`;
    const yt = Gr ? {
      onPressOut: Lt ? (T) => {
        I.current.handleFocusVisible = !0, Ae(), bt == null || bt(T), $t == null || $t(T);
      } : void 0,
      ...(qn || Lt) && {
        onMouseEnter: (T) => {
          const V = {};
          Gn && (V.hover = !0), qr && H.pressIn && (V.press = !0), ue(V), Ft == null || Ft(T), l == null || l(T);
        },
        onMouseLeave: (T) => {
          const V = {};
          ln.add(Ae), Gn && (V.hover = !1), qr && H.pressIn && (V.press = !1, V.pressIn = !1), ue(V), Wt == null || Wt(T), b == null || b(T);
        }
      },
      onPressIn: Lt ? (T) => {
        I.current.handleFocusVisible = !1, yn && ue({
          press: !0,
          pressIn: !0
        }), Ct == null || Ct(T), Ot == null || Ot(T), ln.add(Ae);
      } : void 0,
      onPress: Lt ? (T) => {
        Ae(), B == null || B(T), gt == null || gt(T), Pt == null || Pt(T);
      } : void 0,
      ...Kr && {
        onFocus: (T) => {
          K != null && K.focusVisibleStyle ? setTimeout(() => {
            ue({
              focus: !0,
              focusVisible: !!I.current.handleFocusVisible
            });
          }, 0) : ue({
            focus: !0,
            focusVisible: !1
          }), E == null || E(T);
        },
        onBlur: (T) => {
          I.current.handleFocusVisible = !0, ue({
            focus: !1,
            focusVisible: !1
          }), D == null || D(T);
        }
      }
    } : null;
    yt && !Fe && Object.assign(z, ur(yt)), process.env.NODE_ENV === "development" && k && k`events`, process.env.NODE_ENV === "development" && A === "verbose" && J("events", {
      events: yt,
      attachHover: qn,
      attachPress: Lt
    }), (so = ut.useEvents) == null || so.call(ut, z, yt, ae, ue, e);
    const Fi = R.spaceDirection || "both";
    process.env.NODE_ENV === "development" && k && k`hooks`;
    let fe = !jt || Ze ? jt : Xc({
      separator: G,
      children: jt,
      space: qe,
      direction: Fi,
      isZStack: a,
      debug: A
    });
    if (Ze) {
      de = ri;
      {
        const T = ur({
          onPress: gt,
          onLongPress: Pt,
          onPressIn: Ct,
          onPressOut: bt,
          onMouseUp: $t,
          onMouseDown: Ot,
          onMouseEnter: l,
          onMouseLeave: b
        }, Ze === "web" || Ze === "except-style-web");
        Object.assign(z, T);
      }
    }
    process.env.NODE_ENV === "development" && k && k`spaced-as-child`;
    let Zn;
    ut.useChildren && (Zn = ut.useChildren(de, fe, z, yt, e)), Zn ? fe = Zn : fe = Pr(de, z, fe);
    const Zr = (io = n == null ? void 0 : n.animations) == null ? void 0 : io.ResetPresence;
    Zr && Pe && (Ge || me) && fe && typeof fe != "string" && (fe = /* @__PURE__ */ W.jsx(Zr, {
      children: fe
    })), process.env.NODE_ENV === "development" && k && k`create-element`;
    const Sn = Z.group, Jr = Zt(() => {
      var T, V;
      if (!(!Sn || !ge))
        return Sn.listeners.clear(), {
          ...g.groups,
          // change reference so as we mutate it doesn't affect siblings etc
          state: {
            ...g.groups.state,
            [ge]: {
              pseudo: Eo,
              // capture just initial width and height if they exist
              // will have top, left, width, height (not x, y)
              layout: {
                width: Ho((T = ae.style) == null ? void 0 : T.width),
                height: Ho((V = ae.style) == null ? void 0 : V.height)
              }
            }
          },
          emit: Sn.emit,
          subscribe: Sn.subscribe
        };
    }, [ge]);
    if (ge && Jr && (fe = /* @__PURE__ */ W.jsx(No.Provider, {
      ...g,
      groups: Jr,
      children: fe
    })), process.env.NODE_ENV === "development" && k && k`group-context`, fe = Re ? fe : ti(te, fe, F, !1), process.env.NODE_ENV === "development" && k && k`themed-children`, process.env.NODE_ENV === "development" && R.debug === "visualize" && (fe = /* @__PURE__ */ W.jsx(Lr, {
      themeState: te,
      themeProps: R,
      children: fe
    })), Fe && !Ze && (fe = /* @__PURE__ */ W.jsx("span", {
      className: "_dsp_contents",
      ...je && yt && ur(yt),
      children: fe
    })), e.context) {
      const T = e.context.props;
      for (const V in T)
        (z.style && V in z.style || V in z) && (w || (w = {}), w[V] = ((ao = z.style) == null ? void 0 : ao[V]) ?? z[V]);
    }
    if (w) {
      const T = e.context.Provider;
      fe = /* @__PURE__ */ W.jsx(T, {
        ...P,
        ...w,
        children: fe
      });
    }
    if (process.env.NODE_ENV === "development" && A && A !== "profile") {
      const T = `render <${typeof de == "string" ? de : "Component"} /> (${N}) with props`;
      {
        console.groupCollapsed(T);
        try {
          J("viewProps", z), J("children", fe), typeof window < "u" && (J("props in", h, "mapped to", R, "in order", Object.keys(R)), J({
            animationStyles: $e,
            classNames: We,
            content: fe,
            defaultProps: r,
            elementType: de,
            events: yt,
            initialState: $,
            isAnimated: Se,
            isMediaArray: Oe,
            isStringElement: oe,
            mediaListeningKeys: ce,
            pseudos: K,
            shouldAttach: Gr,
            shouldAvoidClasses: Te,
            shouldForcePseudo: he,
            shouldListenForMedia: se,
            splitStyles: ae,
            splitStylesStyle: ve,
            state: H,
            stateRef: I,
            staticConfig: e,
            styleProps: Ne,
            tamaguiConfig: Yc,
            themeState: te,
            viewProps: z,
            willBeAnimated: Pe
          }));
        } catch {
        } finally {
          console.groupEnd();
        }
      }
      if (A === "break")
        debugger;
    }
    return process.env.NODE_ENV === "development" && k && (k`rest`, globalThis.willPrint || (globalThis.willPrint = !0, setTimeout(() => {
      delete globalThis.willPrint, k.print(), k = null;
    }, 50))), fe;
  });
  e.componentName && (d.displayName = e.componentName);
  let p = d;
  (process.env.TAMAGUI_FORCE_MEMO || e.memo) && (p = un(p)), p.staticConfig = e;
  function m(h) {
    return {
      ...e,
      ...h,
      neverFlatten: !0,
      isHOC: !0,
      isStyledHOC: !1
    };
  }
  function v(h, y) {
    return h.staticConfig = m(y), h.styleable = x, h;
  }
  function x(h, y) {
    var C;
    let N = ((C = h.render) == null ? void 0 : C.length) === 2 ? h : Kt(h);
    const g = m(y == null ? void 0 : y.staticConfig);
    return N = y != null && y.disableTheme ? N : Fc(N, g), process.env.TAMAGUI_MEMOIZE_STYLEABLE && (N = un(N)), N.staticConfig = g, N.styleable = x, N;
  }
  return p.extractable = v, p.styleable = x, p;
}
function ur(e, t = !0) {
  return {
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    [t ? "onClick" : "onPress"]: e.onPress,
    onMouseDown: e.onPressIn,
    onMouseUp: e.onPressOut,
    onTouchStart: e.onPressIn,
    onTouchEnd: e.onPressOut,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  };
}
const Hc = (e, {
  tokens: t
}) => {
  e = e === !0 ? "$true" : e;
  const n = t.space[e] ?? e;
  return {
    width: n,
    height: n,
    minWidth: n,
    minHeight: n
  };
}, Bc = Jt({
  acceptsClassName: !0,
  memo: !0,
  componentName: "Spacer",
  validStyles: Vt,
  defaultProps: {
    ...vn,
    // avoid nesting issues
    tag: "span",
    size: !0,
    pointerEvents: "none"
  },
  variants: {
    size: {
      "...": Hc
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
function Xc(e) {
  var d, p, m;
  const {
    isZStack: t,
    children: n,
    space: r,
    direction: o,
    spaceFlex: i,
    separator: s
  } = e, a = !!(r || i), c = s != null;
  if (!(a || c || t))
    return n;
  const f = Mt.toArray(n);
  if (f.length <= 1 && !t && !((p = (d = f[0]) == null ? void 0 : d.type) != null && p.shouldForwardSpace))
    return f;
  const u = [];
  for (let [v, x] of f.entries()) {
    const O = x == null || Array.isArray(x) && x.length === 0;
    if (!O && Ie.isValidElement(x) && ((m = x.type) != null && m.shouldForwardSpace) && (x = Ie.cloneElement(x, {
      space: r,
      spaceFlex: i,
      separator: s,
      key: x.key
    })), O || !x || x.key && !t ? u.push(x) : u.push(/* @__PURE__ */ W.jsx(Bi, {
      children: t ? /* @__PURE__ */ W.jsx(zc, {
        children: x
      }) : x
    }, v)), Yo(x) && v === 0 || t)
      continue;
    const h = f[v + 1];
    h && !Yo(h) && (s ? (a && u.push(fr({
      key: `_${v}_00tmgui`,
      direction: o,
      space: r,
      spaceFlex: i
    })), u.push(Ie.isValidElement(s) ? Ie.cloneElement(s, {
      key: `sep_${v}`
    }) : s), a && u.push(fr({
      key: `_${v}01tmgui`,
      direction: o,
      space: r,
      spaceFlex: i
    }))) : u.push(fr({
      key: `_${v}02tmgui`,
      direction: o,
      space: r,
      spaceFlex: i
    })));
  }
  return process.env.NODE_ENV === "development" && e.debug && J("  Spaced children", u, e), u;
}
function fr({
  key: e,
  direction: t,
  space: n,
  spaceFlex: r
}) {
  return /* @__PURE__ */ W.jsx(Bc, {
    size: n,
    direction: t,
    ...typeof r < "u" && {
      flex: r === !0 ? 1 : r === !1 ? 0 : r
    }
  }, e);
}
function Yo(e) {
  const t = e == null ? void 0 : e.type;
  return (t == null ? void 0 : t.isVisuallyHidden) || (t == null ? void 0 : t.isUnspaced);
}
const zc = Jt({
  defaultProps: {
    ...vn,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "box-none"
  }
});
function Uc(e) {
  return Object.keys(e).some((t) => {
    const n = e[t];
    return n && typeof n == "object" && "_animation" in n;
  });
}
function Kc(e, t) {
  return Object.fromEntries([...e].map((n) => [n, Ms(n, t)]));
}
const Ho = (e) => typeof e != "string" ? e : +e.replace("px", ""), oi = (e, t, n = 0) => {
  const r = {};
  for (const o in t) {
    const i = e == null ? void 0 : e[o], s = t[o];
    !i || typeof s == "function" ? r[o] = s : i && !s ? r[o] = i[o] : n === 0 ? r[o] = oi(i, s, n + 1) : r[o] = {
      ...i,
      ...s
    };
  }
  return {
    ...e,
    ...r
  };
}, Gc = /* @__PURE__ */ new WeakMap();
function qc(e) {
  var t;
  if (e)
    return e.getSize && e.prefetch ? Cn.Image : e.displayName === "Text" && e.render ? Cn.Text : e.render && (e.displayName === "ScrollView" || e.displayName === "View") ? Cn.default : (t = e.State) != null && t.blurTextInput ? Cn.TextInput : Gc.get(e);
}
const Cn = {
  Image: {
    isReactNative: !0,
    inlineProps: /* @__PURE__ */ new Set(["src", "width", "height"])
  },
  Text: {
    isReactNative: !0,
    isText: !0
  },
  TextInput: {
    isReactNative: !0,
    isInput: !0,
    isText: !0
  },
  default: {
    isReactNative: !0
  }
};
function zn(e, t, n) {
  if (process.env.NODE_ENV !== "production" && !e)
    throw new Error("No component given to styled()");
  const r = e.staticConfig, o = !!r && !(r.isReactNative || r.isHOC);
  let i = r != null && r.isHOC && !(r != null && r.isStyledHOC) || o ? e : (r == null ? void 0 : r.Component) || e;
  const s = r ? void 0 : qc(i), a = !!(s || n != null && n.isReactNative || r != null && r.isReactNative), c = (() => {
    if (t) {
      let {
        variants: u,
        name: d,
        defaultVariants: p,
        acceptsClassName: m,
        context: v,
        ...x
      } = t;
      p && (x = {
        ...p,
        ...x
      }), r && (r.isHOC && !r.isStyledHOC || (x = {
        ...r.defaultProps,
        ...x
      }, r.variants && (u = oi(r.variants, u)))), r != null && r.isHOC && d && (x.componentName = d);
      const O = !!(n != null && n.isText || r != null && r.isText), h = m ?? (o || a || (r == null ? void 0 : r.isHOC) && (r == null ? void 0 : r.acceptsClassName)), y = {
        ...r,
        ...n,
        ...!o && {
          Component: i
        },
        // @ts-expect-error
        variants: u,
        defaultProps: x,
        defaultVariants: p,
        componentName: d || (r == null ? void 0 : r.componentName),
        isReactNative: a,
        isText: O,
        acceptsClassName: h,
        context: v,
        ...s,
        isStyledHOC: !!(r != null && r.isHOC),
        parentStaticConfig: r
      };
      return (x.children || !h || v) && (y.neverFlatten = !0), y;
    }
  })(), f = Jt(c || {});
  for (const u in e)
    u !== "propTypes" && (u in f || (f[u] = e[u]));
  return f;
}
const si = Jt({
  acceptsClassName: !0,
  defaultProps: vn,
  validStyles: Vt
});
si.displayName = "Stack";
const Zc = Jt({
  acceptsClassName: !0,
  defaultProps: vn,
  validStyles: Vt
}), ii = {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, Jc = {
  display: "inline",
  boxSizing: "border-box",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  margin: 0
}, Bo = ii, ai = Jt({
  acceptsClassName: !0,
  isText: !0,
  defaultProps: {
    fontFamily: "unset",
    ...Jc
  },
  inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"]),
  variants: {
    numberOfLines: {
      1: ii,
      ":number": (e) => e >= 1 ? {
        WebkitLineClamp: e,
        WebkitBoxOrient: "vertical",
        display: "-webkit-box",
        overflow: "hidden"
      } : null
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
    /**
     * @deprecated Use ellipsis instead
     */
    ellipse: {
      true: Bo
    },
    ellipsis: {
      true: Bo
    }
  },
  validStyles: {
    ...Vt,
    ...Ss
  }
});
ai.displayName = "Text";
const ci = "__reactResponderId", Qc = !!(typeof window < "u" && window.document && window.document.createElement), Xo = (e) => {
  if (e && e.nodeType === 1 && e.getBoundingClientRect)
    return e.getBoundingClientRect();
};
function el(e) {
  var t;
  if (e.type === "selectionchange") {
    const n = (t = window.getSelection()) == null ? void 0 : t.anchorNode;
    return zo(n);
  }
  return e.composedPath != null ? e.composedPath() : zo(e.target);
}
function zo(e) {
  const t = [];
  for (; e != null && e !== document.body; )
    t.push(e), e = e.parentNode;
  return t;
}
function tl(e) {
  return e != null ? e[ci] : null;
}
function nl(e, t) {
  e != null && (e[ci] = t);
}
function rl(e) {
  const t = [], n = [], r = el(e);
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = tl(i);
    s != null && (t.push(s), n.push(i));
  }
  return {
    idPath: t,
    nodePath: n
  };
}
function ol(e, t) {
  let n = e.length, r = t.length;
  if (
    // If either path is empty
    n === 0 || r === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    e[n - 1] !== t[r - 1]
  )
    return null;
  let o = e[0], i = 0, s = t[0], a = 0;
  n - r > 0 && (i = n - r, o = e[i], n = r), r - n > 0 && (a = r - n, s = t[a], r = n);
  let c = n;
  for (; c--; ) {
    if (o === s)
      return o;
    o = e[i++], s = t[a++];
  }
  return null;
}
function sl(e, t) {
  if (!t || t.length === 0)
    return !1;
  for (let n = 0; n < t.length; n++) {
    const r = t[n].target;
    if (r != null && e.contains(r))
      return !0;
  }
  return !1;
}
function il(e) {
  return e.type === "selectionchange" ? cl() : e.type === "select";
}
function al(e) {
  const {
    altKey: t,
    button: n,
    buttons: r,
    ctrlKey: o,
    type: i
  } = e, s = i === "touchstart" || i === "touchmove", a = i === "mousedown" && (n === 0 || r === 1), c = i === "mousemove" && r === 1, f = t === !1 && o === !1;
  return !!(s || a && f || c && f);
}
function cl() {
  const e = window.getSelection();
  if (!e)
    return !1;
  const t = e.toString(), n = e.anchorNode, r = e.focusNode, o = n && n.nodeType === window.Node.TEXT_NODE || r && r.nodeType === window.Node.TEXT_NODE;
  return t.length >= 1 && t !== `
` && !!o;
}
const Uo = () => {
}, ll = {}, ul = [];
function Ko(e) {
  return e > 20 ? e % 20 : e;
}
function li(e, t) {
  let n, r = !1, o, i;
  const s = e.changedTouches, a = e.type, c = e.metaKey === !0, f = e.shiftKey === !0, u = (s == null ? void 0 : s[0].force) || 0, d = Ko((s == null ? void 0 : s[0].identifier) || 0), p = (s == null ? void 0 : s[0].clientX) || e.clientX, m = (s == null ? void 0 : s[0].clientY) || e.clientY, v = (s == null ? void 0 : s[0].pageX) || e.pageX, x = (s == null ? void 0 : s[0].pageY) || e.pageY, O = typeof e.preventDefault == "function" ? e.preventDefault.bind(e) : Uo, h = e.timeStamp;
  function y(w) {
    return Array.prototype.slice.call(w).map((P) => ({
      force: P.force,
      identifier: Ko(P.identifier),
      get locationX() {
        return g(P.clientX);
      },
      get locationY() {
        return C(P.clientY);
      },
      pageX: P.pageX,
      pageY: P.pageY,
      target: P.target,
      timestamp: h
    }));
  }
  if (s != null)
    o = y(s), i = y(e.touches);
  else {
    const w = [{
      force: u,
      identifier: d,
      get locationX() {
        return g(p);
      },
      get locationY() {
        return C(m);
      },
      pageX: v,
      pageY: x,
      target: e.target,
      timestamp: h
    }];
    o = w, i = a === "mouseup" || a === "dragstart" ? ul : w;
  }
  const N = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: e.defaultPrevented,
    dispatchConfig: ll,
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
      metaKey: c,
      shiftKey: f,
      changedTouches: o,
      force: u,
      identifier: d,
      get locationX() {
        return g(p);
      },
      get locationY() {
        return C(m);
      },
      pageX: v,
      pageY: x,
      target: e.target,
      timestamp: h,
      touches: i,
      type: a
    },
    persist: Uo,
    preventDefault: O,
    stopPropagation() {
      r = !0;
    },
    target: e.target,
    timeStamp: h,
    touchHistory: t.touchHistory
  };
  function g(w) {
    if (n = n || Xo(N.currentTarget), n)
      return w - n.left;
  }
  function C(w) {
    if (n = n || Xo(N.currentTarget), n)
      return w - n.top;
  }
  return N;
}
const fl = "mousedown", dl = "mousemove", pl = "mouseup", ml = "dragstart", hl = "touchstart", gl = "touchmove", bl = "touchend", vl = "touchcancel", yl = "scroll", Sl = "select", xl = "selectionchange";
function ui(e) {
  return e === hl || e === fl;
}
function fi(e) {
  return e === gl || e === dl;
}
function di(e) {
  return e === bl || e === pl || pi(e);
}
function pi(e) {
  return e === vl || e === ml;
}
function wl(e) {
  return e === yl;
}
function Nl(e) {
  return e === Sl || e === xl;
}
let El = class {
  constructor() {
    St(this, "_touchHistory", {
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
    var o, i;
    const r = this._touchHistory;
    if (fi(t))
      n.changedTouches.forEach((s) => Pl(s, r));
    else if (ui(t))
      n.changedTouches.forEach((s) => _l(s, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1 && (r.indexOfSingleActiveTouch = n.touches[0].identifier);
    else if (di(t) && (n.changedTouches.forEach((s) => Cl(s, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1)) {
      const {
        touchBank: s
      } = r;
      for (let a = 0; a < s.length; a++)
        if ((o = s[a]) != null && o.touchActive) {
          r.indexOfSingleActiveTouch = a;
          break;
        }
      process.env.NODE_ENV === "development" && ((i = s[r.indexOfSingleActiveTouch]) != null && i.touchActive || console.error("Cannot find single active touch."));
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
};
const kn = 20;
function ze(e) {
  return e.timeStamp || e.timestamp;
}
function Tl(e) {
  return {
    touchActive: !0,
    startPageX: e.pageX,
    startPageY: e.pageY,
    startTimeStamp: ze(e),
    currentPageX: e.pageX,
    currentPageY: e.pageY,
    currentTimeStamp: ze(e),
    previousPageX: e.pageX,
    previousPageY: e.pageY,
    previousTimeStamp: ze(e)
  };
}
function Rl(e, t) {
  e.touchActive = !0, e.startPageX = t.pageX, e.startPageY = t.pageY, e.startTimeStamp = ze(t), e.currentPageX = t.pageX, e.currentPageY = t.pageY, e.currentTimeStamp = ze(t), e.previousPageX = t.pageX, e.previousPageY = t.pageY, e.previousTimeStamp = ze(t);
}
function Yr({
  identifier: e
}) {
  return e == null && console.error("Touch object is missing identifier."), process.env.NODE_ENV === "development" && e > kn && console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.", e, kn), e;
}
function _l(e, t) {
  const n = Yr(e), r = t.touchBank[n];
  r ? Rl(r, e) : t.touchBank[n] = Tl(e), t.mostRecentTimeStamp = ze(e);
}
function Pl(e, t) {
  const n = t.touchBank[Yr(e)];
  n ? (n.touchActive = !0, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = ze(e), t.mostRecentTimeStamp = ze(e)) : console.warn(`Cannot record touch move without a touch start.
`, `Touch Move: ${mi(e)}
`, `Touch Bank: ${hi(t)}`);
}
function Cl(e, t) {
  const n = t.touchBank[Yr(e)];
  n ? (n.touchActive = !1, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = ze(e), t.mostRecentTimeStamp = ze(e)) : console.warn(`Cannot record touch end without a touch start.
`, `Touch End: ${mi(e)}
`, `Touch Bank: ${hi(t)}`);
}
function mi(e) {
  return JSON.stringify({
    identifier: e.identifier,
    pageX: e.pageX,
    pageY: e.pageY,
    timestamp: ze(e)
  });
}
function hi(e) {
  const {
    touchBank: t
  } = e;
  let n = JSON.stringify(t.slice(0, kn));
  return t.length > kn && (n += ` (original size: ${t.length})`), n;
}
const $l = {}, Go = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: !0
}], qo = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: !0
}], Ol = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: !1
}], Al = {
  touchstart: Go,
  mousedown: Go,
  touchmove: qo,
  mousemove: qo,
  scroll: Ol
}, wr = {
  id: null,
  idPath: null,
  node: null
}, jn = /* @__PURE__ */ new Map();
let Nt = !1, Qe = 0, tt = {
  id: null,
  node: null,
  idPath: null
};
const Nr = new El();
function pn(e) {
  tt = e;
}
function mn(e) {
  return jn.get(e) ?? $l;
}
function dr(e) {
  const t = e.type, n = e.target;
  if (t === "touchstart" && (Nt = !0), (t === "touchmove" || Qe > 1) && (Nt = !1), // Ignore browser emulated mouse events
  t === "mousedown" && Nt || t === "mousemove" && Nt || // Ignore mousemove if a mousedown didn't occur first
  t === "mousemove" && Qe < 1)
    return;
  if (Nt && t === "mouseup") {
    Qe === 0 && (Nt = !1);
    return;
  }
  const r = ui(t) && al(e), o = fi(t), i = di(t), s = wl(t), a = Nl(t), c = li(e, Nr);
  (r || o || i) && (e.touches ? Qe = e.touches.length : r ? Qe = 1 : i && (Qe = 0), Nr.recordTouchTrack(t, c.nativeEvent));
  let f = rl(e), u = !1, d;
  if (r || o || s && Qe > 0) {
    const p = tt.idPath, m = f.idPath;
    if (p != null && m != null) {
      const v = ol(p, m);
      if (v != null) {
        const x = m.indexOf(v) + (v === tt.id ? 1 : 0);
        f = {
          idPath: m.slice(x),
          nodePath: f.nodePath.slice(x)
        };
      } else
        f = null;
    }
    f != null && (d = Dl(f, e, c), d != null && (Ml(c, d), u = !0));
  }
  if (tt.id != null && tt.node != null) {
    const {
      id: p,
      node: m
    } = tt, {
      onResponderStart: v,
      onResponderMove: x,
      onResponderEnd: O,
      onResponderRelease: h,
      onResponderTerminate: y,
      onResponderTerminationRequest: N
    } = mn(p);
    if (c.bubbles = !1, c.cancelable = !1, c.currentTarget = m, r)
      v != null && (c.dispatchConfig.registrationName = "onResponderStart", v(c));
    else if (o)
      x != null && (c.dispatchConfig.registrationName = "onResponderMove", x(c));
    else {
      const g = pi(t) || // native context menu
      t === "contextmenu" || // window blur
      t === "blur" && n === window || // responder (or ancestors) blur
      t === "blur" && n.contains(m) && e.relatedTarget !== m || // native scroll without using a pointer
      s && Qe === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      s && n.contains(m) && n !== m || // native select/selectionchange on node
      a && il(e), C = i && !g && !sl(m, e.touches);
      if (i && O != null && (c.dispatchConfig.registrationName = "onResponderEnd", O(c)), C && (h != null && (c.dispatchConfig.registrationName = "onResponderRelease", h(c)), pn(wr)), g) {
        let w = !0;
        (t === "contextmenu" || t === "scroll" || t === "selectionchange") && (u ? w = !1 : N != null && (c.dispatchConfig.registrationName = "onResponderTerminationRequest", N(c) === !1 && (w = !1))), w && (y != null && (c.dispatchConfig.registrationName = "onResponderTerminate", y(c)), pn(wr), Nt = !1, Qe = 0);
      }
    }
  }
}
function Dl(e, t, n) {
  const r = Al[t.type];
  if (r != null) {
    const {
      idPath: o,
      nodePath: i
    } = e, s = r[0], a = r[1], {
      bubbles: c
    } = r[2], f = (u, d, p) => {
      const m = mn(u)[p];
      if (m != null && (n.currentTarget = d, m(n) === !0)) {
        const v = o.slice(o.indexOf(u));
        return {
          id: u,
          node: d,
          idPath: v
        };
      }
    };
    for (let u = o.length - 1; u >= 0; u--) {
      const d = o[u], p = i[u], m = f(d, p, s);
      if (m != null)
        return m;
      if (n.isPropagationStopped() === !0)
        return;
    }
    if (c)
      for (let u = 0; u < o.length; u++) {
        const d = o[u], p = i[u], m = f(d, p, a);
        if (m != null)
          return m;
        if (n.isPropagationStopped() === !0)
          return;
      }
    else {
      const u = o[0], d = i[0];
      if (t.target === d)
        return f(u, d, a);
    }
  }
}
function Ml(e, t) {
  const {
    id: n,
    node: r
  } = tt, {
    id: o,
    node: i
  } = t, {
    onResponderGrant: s,
    onResponderReject: a
  } = mn(o);
  if (e.bubbles = !1, e.cancelable = !1, e.currentTarget = i, n == null)
    s != null && (e.currentTarget = i, e.dispatchConfig.registrationName = "onResponderGrant", s(e)), pn(t);
  else {
    const {
      onResponderTerminate: c,
      onResponderTerminationRequest: f
    } = mn(n);
    let u = !0;
    f != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminationRequest", f(e) === !1 && (u = !1)), u ? (c != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminate", c(e)), s != null && (e.currentTarget = i, e.dispatchConfig.registrationName = "onResponderGrant", s(e)), pn(t)) : a != null && (e.currentTarget = i, e.dispatchConfig.registrationName = "onResponderReject", a(e));
  }
}
const Vl = ["blur", "scroll"], Il = [
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
], Zo = Symbol();
function kl() {
  Qc && !window[Zo] && (window.addEventListener("blur", dr), Il.forEach((e) => {
    document.addEventListener(e, dr);
  }), Vl.forEach((e) => {
    document.addEventListener(e, dr, !0);
  }), window[Zo] = !0);
}
function jl(e, t, n) {
  nl(t, e), jn.set(e, n);
}
function Jo(e) {
  tt.id === e && Fl(), jn.has(e) && jn.delete(e);
}
function Fl() {
  const {
    id: e,
    node: t
  } = tt;
  if (e != null && t != null) {
    const {
      onResponderTerminate: n
    } = mn(e);
    if (n != null) {
      const r = li({}, Nr);
      r.currentTarget = t, n(r);
    }
    pn(wr);
  }
  Nt = !1, Qe = 0;
}
function Wl() {
  return tt.node;
}
const Ll = {};
function Yl(e, t = Ll) {
  const n = Ve.useId(), r = Ve.useRef(!1);
  Ve.useEffect(() => (kl(), () => {
    Jo(n);
  }), [n]), Ve.useEffect(() => {
    const {
      onMoveShouldSetResponder: o,
      onMoveShouldSetResponderCapture: i,
      onScrollShouldSetResponder: s,
      onScrollShouldSetResponderCapture: a,
      onSelectionChangeShouldSetResponder: c,
      onSelectionChangeShouldSetResponderCapture: f,
      onStartShouldSetResponder: u,
      onStartShouldSetResponderCapture: d
    } = t, p = o != null || i != null || s != null || a != null || c != null || f != null || u != null || d != null, m = e.current;
    p ? (jl(n, m, t), r.current = !0) : r.current && (Jo(n), r.current = !1);
  }, [t, e, n]), process.env.NODE_ENV === "development" && (Ve.useDebugValue({
    isResponder: e.current === Wl()
  }), Ve.useDebugValue(t));
}
function Hl() {
  return null;
}
const gi = (e) => {
  var t;
  if (!(!e || e.nodeType !== 1))
    return (t = e.getBoundingClientRect) == null ? void 0 : t.call(e);
}, bi = /* @__PURE__ */ new WeakMap();
let Yt = null;
typeof window < "u" && "ResizeObserver" in window && (Yt = new ResizeObserver((e) => {
  for (const {
    target: t
  } of e) {
    const n = bi.get(t);
    if (typeof n != "function")
      return;
    Er(t, null, (r, o, i, s, a, c) => {
      n({
        nativeEvent: {
          layout: {
            x: r,
            y: o,
            width: i,
            height: s,
            left: a,
            top: c
          },
          target: t
        },
        timeStamp: Date.now()
      });
    });
  }
}));
const Qo = /* @__PURE__ */ new WeakMap(), Er = (e, t, n) => {
  const r = t || (e == null ? void 0 : e.parentNode);
  if (r instanceof HTMLElement) {
    const o = Date.now();
    Qo.set(e, o), Promise.all([es(e), es(r)]).then(([i, s]) => {
      if (s && i && Qo.get(e) === o) {
        const {
          x: a,
          y: c,
          width: f,
          height: u,
          left: d,
          top: p
        } = Bl(i, s);
        n(a, c, f, u, d, p);
      }
    });
  }
}, Bl = (e, t) => {
  const {
    height: n,
    left: r,
    top: o,
    width: i
  } = e, s = r - t.left, a = o - t.top;
  return {
    x: s,
    y: a,
    width: i,
    height: n,
    left: r,
    top: o
  };
}, es = (e) => new Promise((t) => {
  function n() {
    t(gi(e));
  }
  const r = setTimeout(n, 10);
  new IntersectionObserver((o, i) => {
    var s;
    clearTimeout(r), i.disconnect(), t((s = o[0]) == null ? void 0 : s.boundingClientRect);
  }, {
    threshold: 1e-4
  }).observe(e);
});
function Xl(e, t) {
  dt(() => {
    if (!Yt || !t)
      return;
    const n = e.current;
    if (n)
      return bi.set(n, t), Yt.observe(n), () => {
        Yt == null || Yt.unobserve(n);
      };
  }, [e, t]);
}
const zl = (e) => {
  const t = gi(e);
  if (!t)
    return;
  const {
    x: n,
    y: r,
    top: o,
    left: i
  } = t;
  return {
    x: n,
    y: r,
    width: e.offsetWidth,
    height: e.offsetHeight,
    top: o,
    left: i
  };
};
function Ul(e) {
  dt(() => {
    const t = e.current;
    t && (t.measure || (t.measure = (n) => Er(t, null, n)), t.measureLayout || (t.measureLayout = (n, r) => Er(t, n, r)), t.measureInWindow || (t.measureInWindow = (n) => {
      t && setTimeout(() => {
        const {
          height: r,
          left: o,
          top: i,
          width: s
        } = zl(t);
        n(o, i, s, r);
      }, 0);
    }));
  }, [e]);
}
ni({
  getBaseViews: Hl,
  usePropsTransform(e, t, n, r) {
    {
      const o = typeof e == "string", {
        // event props
        onMoveShouldSetResponder: i,
        onMoveShouldSetResponderCapture: s,
        onResponderEnd: a,
        onResponderGrant: c,
        onResponderMove: f,
        onResponderReject: u,
        onResponderRelease: d,
        onResponderStart: p,
        onResponderTerminate: m,
        onResponderTerminationRequest: v,
        onScrollShouldSetResponder: x,
        onScrollShouldSetResponderCapture: O,
        onSelectionChangeShouldSetResponder: h,
        onSelectionChangeShouldSetResponderCapture: y,
        onStartShouldSetResponder: N,
        onStartShouldSetResponderCapture: g,
        // android
        collapsable: C,
        focusable: w,
        // deprecated,
        accessible: P,
        accessibilityDisabled: U,
        onLayout: Y,
        hrefAttrs: R,
        ...A
      } = t;
      if (r || o) {
        const L = Zt(
          () => ({
            get current() {
              return n.current.host;
            }
          }),
          [n]
        );
        Ul(L), Xl(L, o ? Y : void 0), Yl(
          L,
          o ? {
            onMoveShouldSetResponder: i,
            onMoveShouldSetResponderCapture: s,
            onResponderEnd: a,
            onResponderGrant: c,
            onResponderMove: f,
            onResponderReject: u,
            onResponderRelease: d,
            onResponderStart: p,
            onResponderTerminate: m,
            onResponderTerminationRequest: v,
            onScrollShouldSetResponder: x,
            onScrollShouldSetResponderCapture: O,
            onSelectionChangeShouldSetResponder: h,
            onSelectionChangeShouldSetResponderCapture: y,
            onStartShouldSetResponder: N,
            onStartShouldSetResponderCapture: g
          } : void 0
        );
      }
      if (o) {
        if (A.href && R) {
          const { download: L, rel: I, target: j } = R;
          L != null && (A.download = L), I && (A.rel = I), typeof j == "string" && (A.target = j.charAt(0) !== "_" ? `_${j}` : j);
        }
        return A;
      }
    }
  },
  useEvents(e, t, { pseudos: n }, r, o) {
  }
});
const vi = Zc, ts = (e, t) => {
  if (!e)
    return;
  const {
    tokens: n
  } = t, r = n.size[e], o = ot(r) ? +r.val : e;
  return Kl(o, t);
}, Kl = (e, {
  theme: t,
  tokens: n
}) => {
  let r = 0;
  if (e === !0) {
    const s = Mr(n.size.true);
    typeof s == "number" ? r = s : r = 10;
  } else
    r = +e;
  if (r === 0)
    return;
  const [o, i] = [Math.round(r / 4 + 1), Math.round(r / 2 + 2)];
  return {
    shadowColor: t.shadowColor,
    shadowRadius: i,
    shadowOffset: {
      height: o,
      width: 0
    }
  };
}, Gl = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}, ql = (e) => e && typeof e == "object" ? e : {
  top: e,
  left: e,
  bottom: e,
  right: e
}, yi = {
  fullscreen: {
    true: Gl
  },
  elevation: {
    "...size": ts,
    ":number": ts
  },
  inset: ql
}, Hr = zn(vi, {
  flexDirection: "column",
  variants: yi
});
Hr.displayName = "YStack";
const Zl = zn(vi, {
  flexDirection: "row",
  variants: yi
});
Zl.displayName = "XStack";
const Jl = zn(Hr, {
  position: "relative"
}, {
  neverFlatten: !0,
  isZStack: !0
});
Jl.displayName = "ZStack";
const Si = Gt(null), xi = (e) => {
  const t = Tt(Si);
  if (!(t != null && t.Contents))
    throw new Error("Adapt not supported by this component");
  return Pr(t.Contents, e);
};
xi.shouldForwardSpace = !0;
ca(function({
  platform: e,
  when: t,
  children: n
}) {
  const r = Tt(Si), o = As();
  let i = !e;
  return e === "touch" && (i = oa), e === "native" && (i = !Rt), e === "web" && (i = Rt), t && !o[t] && (i = !1), dt(() => {
    i && (r == null || r.setWhen(t || i));
  }, [t, r, i]), i ? n : null;
}, {
  Contents: xi
});
Ve.memo(({
  host: e = ((n) => (n = globalThis.document) == null ? void 0 : n.body)(),
  ...t
}) => {
  const r = /* @__PURE__ */ W.jsx(Hr, {
    contain: "strict",
    fullscreen: !0,
    position: "fixed",
    maxWidth: "100vw",
    maxHeight: "100vh",
    pointerEvents: "none",
    ...t
  }), [o, i] = Ve.useState(null);
  return dt(() => {
    i(e);
  }, [e]), o && t.children ? hs(r, o) : null;
});
const Ql = () => {
}, eu = () => Ql;
function tu(e) {
  return Cr(
    eu,
    () => e ?? !0,
    () => !1
  );
}
const nu = {}, wi = (e, t) => (t in e || (e[t] = []), e), ru = (e, t) => (delete e[t], e), ou = (e, t, n, r) => {
  t in e || (e = wi(e, t));
  const o = e[t].findIndex((i) => i.name === n);
  return o !== -1 ? e[t][o].node = r : e[t].push({
    name: n,
    node: r
  }), e;
}, su = (e, t, n) => {
  if (!(t in e))
    return console.info(`Failed to remove portal '${n}', '${t}' was not registered!`), e;
  const r = e[t].findIndex((o) => o.name === n);
  return r !== -1 && e[t].splice(r, 1), e;
}, iu = (e, t) => {
  const {
    type: n
  } = t;
  switch (n) {
    case 0:
      return wi({
        ...e
      }, t.hostName);
    case 1:
      return ru({
        ...e
      }, t.hostName);
    case 2:
      return ou({
        ...e
      }, t.hostName, t.portalName, t.node);
    case 3:
      return su({
        ...e
      }, t.hostName, t.portalName);
    default:
      return e;
  }
}, Ni = Gt(null), Ei = Gt(null), au = (e) => {
  const t = Tt(Ni);
  if (t === null)
    throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
  return t[e] || [];
}, Ti = (e = "root") => {
  const t = Tt(Ei);
  if (t === null)
    throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
  const n = Bt(() => {
    t({
      type: 0,
      hostName: e
    });
  }, []), r = Bt(() => {
    t({
      type: 1,
      hostName: e
    });
  }, []), o = Bt((s, a) => {
    t({
      type: 2,
      hostName: e,
      portalName: s,
      node: a
    });
  }, []), i = Bt((s) => {
    t({
      type: 3,
      hostName: e,
      portalName: s
    });
  }, []);
  return {
    registerHost: n,
    deregisterHost: r,
    addPortal: o,
    updatePortal: o,
    removePortal: i
  };
}, cu = ({
  rootHostName: e = "root",
  shouldAddRootHost: t = !0,
  children: n
}) => {
  const [r, o] = ps(iu, nu), i = Zt(() => (s) => {
    Xi(() => {
      o(s);
    });
  }, [o]);
  return /* @__PURE__ */ W.jsx(Ei.Provider, {
    value: i,
    children: /* @__PURE__ */ W.jsxs(Ni.Provider, {
      value: r,
      children: [n, t && /* @__PURE__ */ W.jsx(Ri, {
        name: e
      })]
    })
  });
}, lu = un(cu);
lu.displayName = "PortalProvider";
const uu = (e) => /* @__PURE__ */ W.jsx(W.Fragment, {
  children: e
}), fu = (e) => {
  const {
    name: t,
    forwardProps: n,
    render: r = uu
  } = e, o = !tu(), i = au(t), {
    registerHost: s,
    deregisterHost: a
  } = Ti(e.name);
  return rt(() => {
    if (!o)
      return s(), () => {
        a();
      };
  }, [o]), r(n ? i.map((c) => {
    let f = c.node;
    return n ? Ie.Children.map(f, (u) => Ie.isValidElement(u) ? Ie.cloneElement(u, {
      key: u.key,
      ...n
    }) : u) : f;
  }) : i.map((c) => c.node));
}, Ri = un(fu);
Ri.displayName = "PortalHost";
const du = (e) => {
  const {
    name: t,
    hostName: n,
    handleOnMount: r,
    handleOnUnmount: o,
    handleOnUpdate: i,
    children: s
  } = e, {
    addPortal: a,
    removePortal: c
  } = Ti(n), f = $r(), u = t || f, d = Jn(() => {
    r ? r(() => a(u, s)) : a(u, s);
  }), p = Jn(() => {
    o ? o(() => c(u)) : c(u);
  }), m = Jn(() => {
    i ? i(() => a(u, s)) : a(u, s);
  });
  return dt(() => (d(), () => {
    p();
  }), []), rt(() => {
    m();
  }, [s]), null;
}, pu = un(du);
pu.displayName = "Portal";
Ui.addEventListener("change", () => {
  mu.forEach((e) => e(window));
});
const mu = /* @__PURE__ */ new Set(), _i = "__reactResponderId", hu = !!(typeof window < "u" && window.document && window.document.createElement), ns = (e) => {
  if (e && e.nodeType === 1 && e.getBoundingClientRect)
    return e.getBoundingClientRect();
};
function gu(e) {
  var t;
  if (e.type === "selectionchange") {
    const n = (t = window.getSelection()) == null ? void 0 : t.anchorNode;
    return rs(n);
  }
  return e.composedPath != null ? e.composedPath() : rs(e.target);
}
function rs(e) {
  const t = [];
  for (; e != null && e !== document.body; )
    t.push(e), e = e.parentNode;
  return t;
}
function bu(e) {
  return e != null ? e[_i] : null;
}
function vu(e, t) {
  e != null && (e[_i] = t);
}
function yu(e) {
  const t = [], n = [], r = gu(e);
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = bu(i);
    s != null && (t.push(s), n.push(i));
  }
  return {
    idPath: t,
    nodePath: n
  };
}
function Su(e, t) {
  let n = e.length, r = t.length;
  if (
    // If either path is empty
    n === 0 || r === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    e[n - 1] !== t[r - 1]
  )
    return null;
  let o = e[0], i = 0, s = t[0], a = 0;
  n - r > 0 && (i = n - r, o = e[i], n = r), r - n > 0 && (a = r - n, s = t[a], r = n);
  let c = n;
  for (; c--; ) {
    if (o === s)
      return o;
    o = e[i++], s = t[a++];
  }
  return null;
}
function xu(e, t) {
  if (!t || t.length === 0)
    return !1;
  for (let n = 0; n < t.length; n++) {
    const r = t[n].target;
    if (r != null && e.contains(r))
      return !0;
  }
  return !1;
}
function wu(e) {
  return e.type === "selectionchange" ? Eu() : e.type === "select";
}
function Nu(e) {
  const {
    altKey: t,
    button: n,
    buttons: r,
    ctrlKey: o,
    type: i
  } = e, s = i === "touchstart" || i === "touchmove", a = i === "mousedown" && (n === 0 || r === 1), c = i === "mousemove" && r === 1, f = t === !1 && o === !1;
  return !!(s || a && f || c && f);
}
function Eu() {
  const e = window.getSelection();
  if (!e)
    return !1;
  const t = e.toString(), n = e.anchorNode, r = e.focusNode, o = n && n.nodeType === window.Node.TEXT_NODE || r && r.nodeType === window.Node.TEXT_NODE;
  return t.length >= 1 && t !== `
` && !!o;
}
const os = () => {
}, Tu = {}, Ru = [];
function ss(e) {
  return e > 20 ? e % 20 : e;
}
function Pi(e, t) {
  let n, r = !1, o, i;
  const s = e.changedTouches, a = e.type, c = e.metaKey === !0, f = e.shiftKey === !0, u = (s == null ? void 0 : s[0].force) || 0, d = ss((s == null ? void 0 : s[0].identifier) || 0), p = (s == null ? void 0 : s[0].clientX) || e.clientX, m = (s == null ? void 0 : s[0].clientY) || e.clientY, v = (s == null ? void 0 : s[0].pageX) || e.pageX, x = (s == null ? void 0 : s[0].pageY) || e.pageY, O = typeof e.preventDefault == "function" ? e.preventDefault.bind(e) : os, h = e.timeStamp;
  function y(w) {
    return Array.prototype.slice.call(w).map((P) => ({
      force: P.force,
      identifier: ss(P.identifier),
      get locationX() {
        return g(P.clientX);
      },
      get locationY() {
        return C(P.clientY);
      },
      pageX: P.pageX,
      pageY: P.pageY,
      target: P.target,
      timestamp: h
    }));
  }
  if (s != null)
    o = y(s), i = y(e.touches);
  else {
    const w = [{
      force: u,
      identifier: d,
      get locationX() {
        return g(p);
      },
      get locationY() {
        return C(m);
      },
      pageX: v,
      pageY: x,
      target: e.target,
      timestamp: h
    }];
    o = w, i = a === "mouseup" || a === "dragstart" ? Ru : w;
  }
  const N = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: e.defaultPrevented,
    dispatchConfig: Tu,
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
      metaKey: c,
      shiftKey: f,
      changedTouches: o,
      force: u,
      identifier: d,
      get locationX() {
        return g(p);
      },
      get locationY() {
        return C(m);
      },
      pageX: v,
      pageY: x,
      target: e.target,
      timestamp: h,
      touches: i,
      type: a
    },
    persist: os,
    preventDefault: O,
    stopPropagation() {
      r = !0;
    },
    target: e.target,
    timeStamp: h,
    touchHistory: t.touchHistory
  };
  function g(w) {
    if (n = n || ns(N.currentTarget), n)
      return w - n.left;
  }
  function C(w) {
    if (n = n || ns(N.currentTarget), n)
      return w - n.top;
  }
  return N;
}
const _u = "mousedown", Pu = "mousemove", Cu = "mouseup", $u = "dragstart", Ou = "touchstart", Au = "touchmove", Du = "touchend", Mu = "touchcancel", Vu = "scroll", Iu = "select", ku = "selectionchange";
function Ci(e) {
  return e === Ou || e === _u;
}
function $i(e) {
  return e === Au || e === Pu;
}
function Oi(e) {
  return e === Du || e === Cu || Ai(e);
}
function Ai(e) {
  return e === Mu || e === $u;
}
function ju(e) {
  return e === Vu;
}
function Fu(e) {
  return e === Iu || e === ku;
}
class Wu {
  constructor() {
    St(this, "_touchHistory", {
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
    var o, i;
    const r = this._touchHistory;
    if ($i(t))
      n.changedTouches.forEach((s) => Bu(s, r));
    else if (Ci(t))
      n.changedTouches.forEach((s) => Hu(s, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1 && (r.indexOfSingleActiveTouch = n.touches[0].identifier);
    else if (Oi(t) && (n.changedTouches.forEach((s) => Xu(s, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1)) {
      const {
        touchBank: s
      } = r;
      for (let a = 0; a < s.length; a++)
        if ((o = s[a]) != null && o.touchActive) {
          r.indexOfSingleActiveTouch = a;
          break;
        }
      process.env.NODE_ENV === "development" && ((i = s[r.indexOfSingleActiveTouch]) != null && i.touchActive || console.error("Cannot find single active touch."));
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}
const Fn = 20;
function Ue(e) {
  return e.timeStamp || e.timestamp;
}
function Lu(e) {
  return {
    touchActive: !0,
    startPageX: e.pageX,
    startPageY: e.pageY,
    startTimeStamp: Ue(e),
    currentPageX: e.pageX,
    currentPageY: e.pageY,
    currentTimeStamp: Ue(e),
    previousPageX: e.pageX,
    previousPageY: e.pageY,
    previousTimeStamp: Ue(e)
  };
}
function Yu(e, t) {
  e.touchActive = !0, e.startPageX = t.pageX, e.startPageY = t.pageY, e.startTimeStamp = Ue(t), e.currentPageX = t.pageX, e.currentPageY = t.pageY, e.currentTimeStamp = Ue(t), e.previousPageX = t.pageX, e.previousPageY = t.pageY, e.previousTimeStamp = Ue(t);
}
function Br({
  identifier: e
}) {
  return e == null && console.error("Touch object is missing identifier."), process.env.NODE_ENV === "development" && e > Fn && console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.", e, Fn), e;
}
function Hu(e, t) {
  const n = Br(e), r = t.touchBank[n];
  r ? Yu(r, e) : t.touchBank[n] = Lu(e), t.mostRecentTimeStamp = Ue(e);
}
function Bu(e, t) {
  const n = t.touchBank[Br(e)];
  n ? (n.touchActive = !0, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = Ue(e), t.mostRecentTimeStamp = Ue(e)) : console.warn(`Cannot record touch move without a touch start.
`, `Touch Move: ${Di(e)}
`, `Touch Bank: ${Mi(t)}`);
}
function Xu(e, t) {
  const n = t.touchBank[Br(e)];
  n ? (n.touchActive = !1, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = Ue(e), t.mostRecentTimeStamp = Ue(e)) : console.warn(`Cannot record touch end without a touch start.
`, `Touch End: ${Di(e)}
`, `Touch Bank: ${Mi(t)}`);
}
function Di(e) {
  return JSON.stringify({
    identifier: e.identifier,
    pageX: e.pageX,
    pageY: e.pageY,
    timestamp: Ue(e)
  });
}
function Mi(e) {
  const {
    touchBank: t
  } = e;
  let n = JSON.stringify(t.slice(0, Fn));
  return t.length > Fn && (n += ` (original size: ${t.length})`), n;
}
const zu = {}, is = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: !0
}], as = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: !0
}], Uu = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: !1
}], Ku = {
  touchstart: is,
  mousedown: is,
  touchmove: as,
  mousemove: as,
  scroll: Uu
}, Tr = {
  id: null,
  idPath: null,
  node: null
}, Wn = /* @__PURE__ */ new Map();
let Et = !1, et = 0, nt = {
  id: null,
  node: null,
  idPath: null
};
const Rr = new Wu();
function hn(e) {
  nt = e;
}
function gn(e) {
  return Wn.get(e) ?? zu;
}
function pr(e) {
  const t = e.type, n = e.target;
  if (t === "touchstart" && (Et = !0), (t === "touchmove" || et > 1) && (Et = !1), // Ignore browser emulated mouse events
  t === "mousedown" && Et || t === "mousemove" && Et || // Ignore mousemove if a mousedown didn't occur first
  t === "mousemove" && et < 1)
    return;
  if (Et && t === "mouseup") {
    et === 0 && (Et = !1);
    return;
  }
  const r = Ci(t) && Nu(e), o = $i(t), i = Oi(t), s = ju(t), a = Fu(t), c = Pi(e, Rr);
  (r || o || i) && (e.touches ? et = e.touches.length : r ? et = 1 : i && (et = 0), Rr.recordTouchTrack(t, c.nativeEvent));
  let f = yu(e), u = !1, d;
  if (r || o || s && et > 0) {
    const p = nt.idPath, m = f.idPath;
    if (p != null && m != null) {
      const v = Su(p, m);
      if (v != null) {
        const x = m.indexOf(v) + (v === nt.id ? 1 : 0);
        f = {
          idPath: m.slice(x),
          nodePath: f.nodePath.slice(x)
        };
      } else
        f = null;
    }
    f != null && (d = Gu(f, e, c), d != null && (qu(c, d), u = !0));
  }
  if (nt.id != null && nt.node != null) {
    const {
      id: p,
      node: m
    } = nt, {
      onResponderStart: v,
      onResponderMove: x,
      onResponderEnd: O,
      onResponderRelease: h,
      onResponderTerminate: y,
      onResponderTerminationRequest: N
    } = gn(p);
    if (c.bubbles = !1, c.cancelable = !1, c.currentTarget = m, r)
      v != null && (c.dispatchConfig.registrationName = "onResponderStart", v(c));
    else if (o)
      x != null && (c.dispatchConfig.registrationName = "onResponderMove", x(c));
    else {
      const g = Ai(t) || // native context menu
      t === "contextmenu" || // window blur
      t === "blur" && n === window || // responder (or ancestors) blur
      t === "blur" && n.contains(m) && e.relatedTarget !== m || // native scroll without using a pointer
      s && et === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      s && n.contains(m) && n !== m || // native select/selectionchange on node
      a && wu(e), C = i && !g && !xu(m, e.touches);
      if (i && O != null && (c.dispatchConfig.registrationName = "onResponderEnd", O(c)), C && (h != null && (c.dispatchConfig.registrationName = "onResponderRelease", h(c)), hn(Tr)), g) {
        let w = !0;
        (t === "contextmenu" || t === "scroll" || t === "selectionchange") && (u ? w = !1 : N != null && (c.dispatchConfig.registrationName = "onResponderTerminationRequest", N(c) === !1 && (w = !1))), w && (y != null && (c.dispatchConfig.registrationName = "onResponderTerminate", y(c)), hn(Tr), Et = !1, et = 0);
      }
    }
  }
}
function Gu(e, t, n) {
  const r = Ku[t.type];
  if (r != null) {
    const {
      idPath: o,
      nodePath: i
    } = e, s = r[0], a = r[1], {
      bubbles: c
    } = r[2], f = (u, d, p) => {
      const m = gn(u)[p];
      if (m != null && (n.currentTarget = d, m(n) === !0)) {
        const v = o.slice(o.indexOf(u));
        return {
          id: u,
          node: d,
          idPath: v
        };
      }
    };
    for (let u = o.length - 1; u >= 0; u--) {
      const d = o[u], p = i[u], m = f(d, p, s);
      if (m != null)
        return m;
      if (n.isPropagationStopped() === !0)
        return;
    }
    if (c)
      for (let u = 0; u < o.length; u++) {
        const d = o[u], p = i[u], m = f(d, p, a);
        if (m != null)
          return m;
        if (n.isPropagationStopped() === !0)
          return;
      }
    else {
      const u = o[0], d = i[0];
      if (t.target === d)
        return f(u, d, a);
    }
  }
}
function qu(e, t) {
  const {
    id: n,
    node: r
  } = nt, {
    id: o,
    node: i
  } = t, {
    onResponderGrant: s,
    onResponderReject: a
  } = gn(o);
  if (e.bubbles = !1, e.cancelable = !1, e.currentTarget = i, n == null)
    s != null && (e.currentTarget = i, e.dispatchConfig.registrationName = "onResponderGrant", s(e)), hn(t);
  else {
    const {
      onResponderTerminate: c,
      onResponderTerminationRequest: f
    } = gn(n);
    let u = !0;
    f != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminationRequest", f(e) === !1 && (u = !1)), u ? (c != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminate", c(e)), s != null && (e.currentTarget = i, e.dispatchConfig.registrationName = "onResponderGrant", s(e)), hn(t)) : a != null && (e.currentTarget = i, e.dispatchConfig.registrationName = "onResponderReject", a(e));
  }
}
const Zu = ["blur", "scroll"], Ju = [
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
], cs = Symbol();
function Qu() {
  hu && !window[cs] && (window.addEventListener("blur", pr), Ju.forEach((e) => {
    document.addEventListener(e, pr);
  }), Zu.forEach((e) => {
    document.addEventListener(e, pr, !0);
  }), window[cs] = !0);
}
function ef(e, t, n) {
  vu(t, e), Wn.set(e, n);
}
function ls(e) {
  nt.id === e && tf(), Wn.has(e) && Wn.delete(e);
}
function tf() {
  const {
    id: e,
    node: t
  } = nt;
  if (e != null && t != null) {
    const {
      onResponderTerminate: n
    } = gn(e);
    if (n != null) {
      const r = Pi({}, Rr);
      r.currentTarget = t, n(r);
    }
    hn(Tr);
  }
  Et = !1, et = 0;
}
function nf() {
  return nt.node;
}
const rf = {};
function of(e, t = rf) {
  const n = Ve.useId(), r = Ve.useRef(!1);
  Ve.useEffect(() => (Qu(), () => {
    ls(n);
  }), [n]), Ve.useEffect(() => {
    const {
      onMoveShouldSetResponder: o,
      onMoveShouldSetResponderCapture: i,
      onScrollShouldSetResponder: s,
      onScrollShouldSetResponderCapture: a,
      onSelectionChangeShouldSetResponder: c,
      onSelectionChangeShouldSetResponderCapture: f,
      onStartShouldSetResponder: u,
      onStartShouldSetResponderCapture: d
    } = t, p = o != null || i != null || s != null || a != null || c != null || f != null || u != null || d != null, m = e.current;
    p ? (ef(n, m, t), r.current = !0) : r.current && (ls(n), r.current = !1);
  }, [t, e, n]), process.env.NODE_ENV === "development" && (Ve.useDebugValue({
    isResponder: e.current === nf()
  }), Ve.useDebugValue(t));
}
function sf() {
  return null;
}
const Vi = (e) => {
  var t;
  if (!(!e || e.nodeType !== 1))
    return (t = e.getBoundingClientRect) == null ? void 0 : t.call(e);
}, Ii = /* @__PURE__ */ new WeakMap();
let Ht = null;
typeof window < "u" && "ResizeObserver" in window && (Ht = new ResizeObserver((e) => {
  for (const {
    target: t
  } of e) {
    const n = Ii.get(t);
    if (typeof n != "function")
      return;
    _r(t, null, (r, o, i, s, a, c) => {
      n({
        nativeEvent: {
          layout: {
            x: r,
            y: o,
            width: i,
            height: s,
            left: a,
            top: c
          },
          target: t
        },
        timeStamp: Date.now()
      });
    });
  }
}));
const us = /* @__PURE__ */ new WeakMap(), _r = (e, t, n) => {
  const r = t || (e == null ? void 0 : e.parentNode);
  if (r instanceof HTMLElement) {
    const o = Date.now();
    us.set(e, o), Promise.all([fs(e), fs(r)]).then(([i, s]) => {
      if (s && i && us.get(e) === o) {
        const {
          x: a,
          y: c,
          width: f,
          height: u,
          left: d,
          top: p
        } = af(i, s);
        n(a, c, f, u, d, p);
      }
    });
  }
}, af = (e, t) => {
  const {
    height: n,
    left: r,
    top: o,
    width: i
  } = e, s = r - t.left, a = o - t.top;
  return {
    x: s,
    y: a,
    width: i,
    height: n,
    left: r,
    top: o
  };
}, fs = (e) => new Promise((t) => {
  function n() {
    t(Vi(e));
  }
  const r = setTimeout(n, 10);
  new IntersectionObserver((o, i) => {
    var s;
    clearTimeout(r), i.disconnect(), t((s = o[0]) == null ? void 0 : s.boundingClientRect);
  }, {
    threshold: 1e-4
  }).observe(e);
});
function cf(e, t) {
  dt(() => {
    if (!Ht || !t)
      return;
    const n = e.current;
    if (n)
      return Ii.set(n, t), Ht.observe(n), () => {
        Ht == null || Ht.unobserve(n);
      };
  }, [e, t]);
}
const lf = (e) => {
  const t = Vi(e);
  if (!t)
    return;
  const {
    x: n,
    y: r,
    top: o,
    left: i
  } = t;
  return {
    x: n,
    y: r,
    width: e.offsetWidth,
    height: e.offsetHeight,
    top: o,
    left: i
  };
};
function uf(e) {
  dt(() => {
    const t = e.current;
    t && (t.measure || (t.measure = (n) => _r(t, null, n)), t.measureLayout || (t.measureLayout = (n, r) => _r(t, n, r)), t.measureInWindow || (t.measureInWindow = (n) => {
      t && setTimeout(() => {
        const {
          height: r,
          left: o,
          top: i,
          width: s
        } = lf(t);
        n(o, i, s, r);
      }, 0);
    }));
  }, [e]);
}
ni({
  getBaseViews: sf,
  usePropsTransform(e, t, n, r) {
    {
      const o = typeof e == "string", {
        // event props
        onMoveShouldSetResponder: i,
        onMoveShouldSetResponderCapture: s,
        onResponderEnd: a,
        onResponderGrant: c,
        onResponderMove: f,
        onResponderReject: u,
        onResponderRelease: d,
        onResponderStart: p,
        onResponderTerminate: m,
        onResponderTerminationRequest: v,
        onScrollShouldSetResponder: x,
        onScrollShouldSetResponderCapture: O,
        onSelectionChangeShouldSetResponder: h,
        onSelectionChangeShouldSetResponderCapture: y,
        onStartShouldSetResponder: N,
        onStartShouldSetResponderCapture: g,
        // android
        collapsable: C,
        focusable: w,
        // deprecated,
        accessible: P,
        accessibilityDisabled: U,
        onLayout: Y,
        hrefAttrs: R,
        ...A
      } = t;
      if (r || o) {
        const L = Zt(
          () => ({
            get current() {
              return n.current.host;
            }
          }),
          [n]
        );
        uf(L), cf(L, o ? Y : void 0), of(
          L,
          o ? {
            onMoveShouldSetResponder: i,
            onMoveShouldSetResponderCapture: s,
            onResponderEnd: a,
            onResponderGrant: c,
            onResponderMove: f,
            onResponderReject: u,
            onResponderRelease: d,
            onResponderStart: p,
            onResponderTerminate: m,
            onResponderTerminationRequest: v,
            onScrollShouldSetResponder: x,
            onScrollShouldSetResponderCapture: O,
            onSelectionChangeShouldSetResponder: h,
            onSelectionChangeShouldSetResponderCapture: y,
            onStartShouldSetResponder: N,
            onStartShouldSetResponderCapture: g
          } : void 0
        );
      }
      if (o) {
        if (A.href && R) {
          const { download: L, rel: I, target: j } = R;
          L != null && (A.download = L), I && (A.rel = I), typeof j == "string" && (A.target = j.charAt(0) !== "_" ? `_${j}` : j);
        }
        return A;
      }
    }
  },
  useEvents(e, t, { pseudos: n }, r, o) {
  }
});
const He = si, ff = ai, ki = zn(ff, {
  variants: {
    unstyled: {
      false: {
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}), bf = ({
  children: e,
  padding: t,
  // var(--s1)
  borderWidth: n,
  //  var(--border-thin)
  invert: r = !1,
  ...o
}) => /* @__PURE__ */ W.jsx(
  He,
  {
    padding: t,
    borderWidth: n,
    borderColor: "black",
    backgroundColor: r ? "var(--color-light)" : "inherit",
    ...o,
    children: e
  }
), vf = ({
  children: e,
  maxWidth: t,
  centerText: n = !1,
  gutters: r,
  intrinsic: o = !1,
  ...i
}) => /* @__PURE__ */ W.jsx(
  He,
  {
    maxWidth: t,
    marginHorizontal: "auto",
    paddingHorizontal: r,
    alignItems: o ? "center" : void 0,
    flexDirection: o ? "column" : void 0,
    ...i,
    children: n ? /* @__PURE__ */ W.jsx(ki, { textAlign: "center", children: e }) : e
  }
), yf = ({
  children: e,
  justify: t = "flex-start",
  align: n = "flex-start",
  space: r
  // 'var(--s1)'
}) => /* @__PURE__ */ W.jsx(
  He,
  {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: t,
    alignItems: n,
    space: r,
    children: e
  }
), Sf = ({
  children: e,
  centered: t,
  space: n,
  // Default: 'var(--s1)'
  minHeight: r = "100vh",
  noPad: o = !1
}) => {
  const i = Ie.Children.toArray(e), s = t ? i.findIndex(
    (a) => a.type === t || a.props.className === t
  ) : -1;
  return /* @__PURE__ */ W.jsx(
    He,
    {
      flexDirection: "column",
      minHeight: r,
      padding: o ? 0 : n,
      children: i.map((a, c) => /* @__PURE__ */ W.jsx(
        He,
        {
          marginVertical: n,
          style: s !== -1 && c === s ? { marginVertical: "auto" } : {},
          children: a
        },
        c
      ))
    }
  );
}, xf = ({
  child: e,
  fallback: t,
  aspectRatio: n = "16:9"
}) => {
  const r = (i) => Ie.isValidElement(i) ? i : null, o = () => {
    const i = r(e);
    return i ? Ie.cloneElement(i, {
      ...i.props,
      style: { width: "100%", height: "100%", ...i.props.style }
    }) : t;
  };
  return /* @__PURE__ */ W.jsx(
    He,
    {
      style: {
        width: "100%",
        aspectRatio: n,
        overflow: "hidden"
      },
      children: o()
    }
  );
}, wf = ({
  icon: e,
  text: t,
  space: n = 0,
  label: r
  // baseFontSize = 16,
}) => /* @__PURE__ */ W.jsx(
  He,
  {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
    accessible: !!r,
    accessibilityLabel: r,
    children: /* @__PURE__ */ W.jsx(ki, { marginStart: n, children: t })
  }
), Nf = ({
  children: e,
  visible: t,
  margin: n = 0,
  // targetRef,
  onClose: r,
  ...o
}) => {
  const [i, s] = Ln({ width: 0, height: 0 }), a = Bt(() => {
    let d = 0, p = 0;
    if (typeof n == "number")
      d = p = n;
    else if (typeof n == "string") {
      const m = n.split(" ").map((v) => parseFloat(v));
      [d, p] = m.length === 2 ? m : [m[0], m[0]];
    }
    return { horizontal: d, vertical: p };
  }, [n]), { horizontal: c, vertical: f } = a();
  rt(() => {
    const d = () => {
      const p = window.innerWidth - 2 * c, m = window.innerHeight - 2 * f;
      s({ width: p, height: m });
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [c, f]);
  const u = t && /* @__PURE__ */ W.jsx(
    "div",
    {
      onClick: r,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: i.width,
        height: i.height,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        display: "flex"
      },
      ...o,
      children: e
    }
  );
  return zi.createPortal(u, document.body);
}, Ef = ({
  children: e,
  itemWidth: t = "auto",
  space: n,
  height: r = "auto",
  noBar: o = !1
}) => /* @__PURE__ */ W.jsx(
  He,
  {
    flexDirection: "row",
    overflow: o ? "hidden" : void 0,
    flexWrap: "wrap",
    space: n,
    height: r,
    children: Ie.Children.map(e, (i) => /* @__PURE__ */ W.jsx(He, { width: t, children: i }))
  }
), Tf = ({
  side: e = "start",
  sideWidth: t,
  contentMin: n = "50%",
  space: r = "var(--s1)",
  noStretch: o = !1,
  children: i
}) => {
  const s = e === "start", a = s ? {} : { flexBasis: "0", flexGrow: 999, minWidth: n }, c = s ? { flexBasis: "0", flexGrow: 999, minWidth: n } : {}, f = Mt.toArray(i);
  return /* @__PURE__ */ W.jsxs(
    He,
    {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: r,
      alignItems: o ? "flex-start" : "stretch",
      children: [
        /* @__PURE__ */ W.jsx(He, { style: a, children: f[0] }),
        /* @__PURE__ */ W.jsx(He, { style: c, children: f[1] })
      ]
    }
  );
}, Rf = ({
  children: e,
  space: t
  // recursive = false,
}) => /* @__PURE__ */ W.jsx(He, { flexDirection: "column", justifyContent: "flex-start", space: t, children: e });
export {
  bf as Box,
  vf as Center,
  yf as Cluster,
  Sf as Cover,
  xf as Frame,
  wf as Icon,
  Nf as Imposter,
  Ef as Reel,
  Tf as Sidebar,
  Rf as Stack
};
