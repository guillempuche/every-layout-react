var Hs = Object.defineProperty;
var Xs = (e, t, n) => t in e ? Hs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Et = (e, t, n) => (Xs(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as wt from "react";
import We, { useEffect as Tt, useLayoutEffect as ko, createContext as tr, useMemo as Tn, useContext as nn, useRef as rn, useSyncExternalStore as Io, useInsertionEffect as Ks, useState as Rn, useReducer as Us, useId as Wo, forwardRef as on, Children as Rt, cloneElement as En, isValidElement as Lo, useCallback as Bo, createElement as Gs, memo as Xr, Fragment as qs } from "react";
import Zs, { createPortal as Js } from "react-dom";
function Qs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nr = { exports: {} }, Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function ti() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = We, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E = Symbol.iterator, S = "@@iterator";
    function h(a) {
      if (a === null || typeof a != "object")
        return null;
      var b = E && a[E] || a[S];
      return typeof b == "function" ? b : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(a) {
      {
        for (var b = arguments.length, N = new Array(b > 1 ? b - 1 : 0), D = 1; D < b; D++)
          N[D - 1] = arguments[D];
        R("error", a, N);
      }
    }
    function R(a, b, N) {
      {
        var D = x.ReactDebugCurrentFrame, W = D.getStackAddendum();
        W !== "" && (b += "%s", N = N.concat([W]));
        var q = N.map(function(L) {
          return String(L);
        });
        q.unshift("Warning: " + b), Function.prototype.apply.call(console[a], console, q);
      }
    }
    var v = !1, $ = !1, O = !1, C = !1, w = !1, M;
    M = Symbol.for("react.module.reference");
    function k(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === s || w || a === o || a === l || a === f || C || a === p || v || $ || O || typeof a == "object" && a !== null && (a.$$typeof === m || a.$$typeof === d || a.$$typeof === i || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === M || a.getModuleId !== void 0));
    }
    function J(a, b, N) {
      var D = a.displayName;
      if (D)
        return D;
      var W = b.displayName || b.name || "";
      return W !== "" ? N + "(" + W + ")" : N;
    }
    function F(a) {
      return a.displayName || "Context";
    }
    function X(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var b = a;
            return F(b) + ".Consumer";
          case i:
            var N = a;
            return F(N._context) + ".Provider";
          case u:
            return J(a, a.render, "ForwardRef");
          case d:
            var D = a.displayName || null;
            return D !== null ? D : X(a.type) || "Memo";
          case m: {
            var W = a, q = W._payload, L = W._init;
            try {
              return X(L(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, pe = 0, Ce, K, se, Ue, Y, ft, dt;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function tt() {
      {
        if (pe === 0) {
          Ce = console.log, K = console.info, se = console.warn, Ue = console.error, Y = console.group, ft = console.groupCollapsed, dt = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        pe++;
      }
    }
    function te() {
      {
        if (pe--, pe === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, a, {
              value: Ce
            }),
            info: z({}, a, {
              value: K
            }),
            warn: z({}, a, {
              value: se
            }),
            error: z({}, a, {
              value: Ue
            }),
            group: z({}, a, {
              value: Y
            }),
            groupCollapsed: z({}, a, {
              value: ft
            }),
            groupEnd: z({}, a, {
              value: dt
            })
          });
        }
        pe < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qe = x.ReactCurrentDispatcher, P;
    function g(a, b, N) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (W) {
            var D = W.stack.trim().match(/\n( *(at )?)/);
            P = D && D[1] || "";
          }
        return `
` + P + a;
      }
    }
    var T = !1, ee;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new ce();
    }
    function me(a, b) {
      if (!a || T)
        return "";
      {
        var N = ee.get(a);
        if (N !== void 0)
          return N;
      }
      var D;
      T = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = qe.current, qe.current = null, tt();
      try {
        if (b) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (ke) {
              D = ke;
            }
            Reflect.construct(a, [], L);
          } else {
            try {
              L.call();
            } catch (ke) {
              D = ke;
            }
            a.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            D = ke;
          }
          a();
        }
      } catch (ke) {
        if (ke && D && typeof ke.stack == "string") {
          for (var I = ke.stack.split(`
`), de = D.stack.split(`
`), oe = I.length - 1, fe = de.length - 1; oe >= 1 && fe >= 0 && I[oe] !== de[fe]; )
            fe--;
          for (; oe >= 1 && fe >= 0; oe--, fe--)
            if (I[oe] !== de[fe]) {
              if (oe !== 1 || fe !== 1)
                do
                  if (oe--, fe--, fe < 0 || I[oe] !== de[fe]) {
                    var he = `
` + I[oe].replace(" at new ", " at ");
                    return a.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", a.displayName)), typeof a == "function" && ee.set(a, he), he;
                  }
                while (oe >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        T = !1, qe.current = q, te(), Error.prepareStackTrace = W;
      }
      var Ye = a ? a.displayName || a.name : "", Z = Ye ? g(Ye) : "";
      return typeof a == "function" && ee.set(a, Z), Z;
    }
    function le(a, b, N) {
      return me(a, !1);
    }
    function Ae(a) {
      var b = a.prototype;
      return !!(b && b.isReactComponent);
    }
    function _e(a, b, N) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return me(a, Ae(a));
      if (typeof a == "string")
        return g(a);
      switch (a) {
        case l:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return le(a.render);
          case d:
            return _e(a.type, b, N);
          case m: {
            var D = a, W = D._payload, q = D._init;
            try {
              return _e(q(W), b, N);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, re = {}, nt = x.ReactDebugCurrentFrame;
    function xe(a) {
      if (a) {
        var b = a._owner, N = _e(a.type, a._source, b ? b.type : null);
        nt.setExtraStackFrame(N);
      } else
        nt.setExtraStackFrame(null);
    }
    function Ot(a, b, N, D, W) {
      {
        var q = Function.call.bind(ye);
        for (var L in a)
          if (q(a, L)) {
            var I = void 0;
            try {
              if (typeof a[L] != "function") {
                var de = Error((D || "React class") + ": " + N + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              I = a[L](b, L, D, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              I = oe;
            }
            I && !(I instanceof Error) && (xe(W), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", N, L, typeof I), xe(null)), I instanceof Error && !(I.message in re) && (re[I.message] = !0, xe(W), y("Failed %s type: %s", N, I.message), xe(null));
          }
      }
    }
    var rt = Array.isArray;
    function Me(a) {
      return rt(a);
    }
    function Be(a) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, N = b && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return N;
      }
    }
    function Ct(a) {
      try {
        return A(a), !1;
      } catch {
        return !0;
      }
    }
    function A(a) {
      return "" + a;
    }
    function ne(a) {
      if (Ct(a))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(a)), A(a);
    }
    var U = x.ReactCurrentOwner, ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Se, we;
    we = {};
    function ue(a) {
      if (ye.call(a, "ref")) {
        var b = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Q(a) {
      if (ye.call(a, "key")) {
        var b = Object.getOwnPropertyDescriptor(a, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function G(a, b) {
      if (typeof a.ref == "string" && U.current && b && U.current.stateNode !== b) {
        var N = X(U.current.type);
        we[N] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(U.current.type), a.ref), we[N] = !0);
      }
    }
    function ae(a, b) {
      {
        var N = function() {
          Fe || (Fe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Te(a, b) {
      {
        var N = function() {
          Se || (Se = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var $e = function(a, b, N, D, W, q, L) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: b,
        ref: N,
        props: L,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function De(a, b, N, D, W) {
      {
        var q, L = {}, I = null, de = null;
        N !== void 0 && (ne(N), I = "" + N), Q(b) && (ne(b.key), I = "" + b.key), ue(b) && (de = b.ref, G(b, W));
        for (q in b)
          ye.call(b, q) && !ie.hasOwnProperty(q) && (L[q] = b[q]);
        if (a && a.defaultProps) {
          var oe = a.defaultProps;
          for (q in oe)
            L[q] === void 0 && (L[q] = oe[q]);
        }
        if (I || de) {
          var fe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          I && ae(L, fe), de && Te(L, fe);
        }
        return $e(a, I, de, W, D, U.current, L);
      }
    }
    var ze = x.ReactCurrentOwner, Ee = x.ReactDebugCurrentFrame;
    function Ze(a) {
      if (a) {
        var b = a._owner, N = _e(a.type, a._source, b ? b.type : null);
        Ee.setExtraStackFrame(N);
      } else
        Ee.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function Bt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function fn() {
      {
        if (ze.current) {
          var a = X(ze.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function zt(a) {
      {
        if (a !== void 0) {
          var b = a.fileName.replace(/^.*[\\\/]/, ""), N = a.lineNumber;
          return `

Check your code at ` + b + ":" + N + ".";
        }
        return "";
      }
    }
    var ot = {};
    function Yt(a) {
      {
        var b = fn();
        if (!b) {
          var N = typeof a == "string" ? a : a.displayName || a.name;
          N && (b = `

Check the top-level render call using <` + N + ">.");
        }
        return b;
      }
    }
    function Pn(a, b) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var N = Yt(b);
        if (ot[N])
          return;
        ot[N] = !0;
        var D = "";
        a && a._owner && a._owner !== ze.current && (D = " It was passed a child from " + X(a._owner.type) + "."), Ze(a), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, D), Ze(null);
      }
    }
    function An(a, b) {
      {
        if (typeof a != "object")
          return;
        if (Me(a))
          for (var N = 0; N < a.length; N++) {
            var D = a[N];
            Bt(D) && Pn(D, b);
          }
        else if (Bt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var W = h(a);
          if (typeof W == "function" && W !== a.entries)
            for (var q = W.call(a), L; !(L = q.next()).done; )
              Bt(L.value) && Pn(L.value, b);
        }
      }
    }
    function Rr(a) {
      {
        var b = a.type;
        if (b == null || typeof b == "string")
          return;
        var N;
        if (typeof b == "function")
          N = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === d))
          N = b.propTypes;
        else
          return;
        if (N) {
          var D = X(b);
          Ot(N, a.props, "prop", D, a);
        } else if (b.PropTypes !== void 0 && !pt) {
          pt = !0;
          var W = X(b);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(a) {
      {
        for (var b = Object.keys(a.props), N = 0; N < b.length; N++) {
          var D = b[N];
          if (D !== "children" && D !== "key") {
            Ze(a), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ze(null);
            break;
          }
        }
        a.ref !== null && (Ze(a), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    function st(a, b, N, D, W, q) {
      {
        var L = k(a);
        if (!L) {
          var I = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = zt(W);
          de ? I += de : I += fn();
          var oe;
          a === null ? oe = "null" : Me(a) ? oe = "array" : a !== void 0 && a.$$typeof === t ? (oe = "<" + (X(a.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof a, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, I);
        }
        var fe = De(a, b, N, W, q);
        if (fe == null)
          return fe;
        if (L) {
          var he = b.children;
          if (he !== void 0)
            if (D)
              if (Me(he)) {
                for (var Ye = 0; Ye < he.length; Ye++)
                  An(he[Ye], a);
                Object.freeze && Object.freeze(he);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              An(he, a);
        }
        return a === r ? mt(fe) : Rr(fe), fe;
      }
    }
    function ht(a, b, N) {
      return st(a, b, N, !0);
    }
    function gt(a, b, N) {
      return st(a, b, N, !1);
    }
    var bt = gt, vt = ht;
    Xt.Fragment = r, Xt.jsx = bt, Xt.jsxs = vt;
  }()), Xt;
}
var Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function ni() {
  if (Ur)
    return Kt;
  Ur = 1;
  var e = We, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, u, l) {
    var f, d = {}, m = null, p = null;
    l !== void 0 && (m = "" + l), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (f in u)
      r.call(u, f) && !s.hasOwnProperty(f) && (d[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: t, type: c, key: m, ref: p, props: d, _owner: o.current };
  }
  return Kt.Fragment = n, Kt.jsx = i, Kt.jsxs = i, Kt;
}
process.env.NODE_ENV === "production" ? nr.exports = ni() : nr.exports = ti();
var B = nr.exports;
const zo = "__reactResponderId", ri = !!(typeof window < "u" && window.document && window.document.createElement), Gr = (e) => {
  if (e && e.nodeType === 1 && e.getBoundingClientRect)
    return e.getBoundingClientRect();
};
function oi(e) {
  var t;
  if (e.type === "selectionchange") {
    const n = (t = window.getSelection()) == null ? void 0 : t.anchorNode;
    return qr(n);
  } else
    return e.composedPath != null ? e.composedPath() : qr(e.target);
}
function qr(e) {
  const t = [];
  for (; e != null && e !== document.body; )
    t.push(e), e = e.parentNode;
  return t;
}
function si(e) {
  return e != null ? e[zo] : null;
}
function ii(e, t) {
  e != null && (e[zo] = t);
}
function ai(e) {
  const t = [], n = [], r = oi(e);
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = si(s);
    i != null && (t.push(i), n.push(s));
  }
  return { idPath: t, nodePath: n };
}
function ci(e, t) {
  let n = e.length, r = t.length;
  if (
    // If either path is empty
    n === 0 || r === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    e[n - 1] !== t[r - 1]
  )
    return null;
  let o = e[0], s = 0, i = t[0], c = 0;
  n - r > 0 && (s = n - r, o = e[s], n = r), r - n > 0 && (c = r - n, i = t[c], r = n);
  let u = n;
  for (; u--; ) {
    if (o === i)
      return o;
    o = e[s++], i = t[c++];
  }
  return null;
}
function li(e, t) {
  if (!t || t.length === 0)
    return !1;
  for (let n = 0; n < t.length; n++) {
    const r = t[n].target;
    if (r != null && e.contains(r))
      return !0;
  }
  return !1;
}
function ui(e) {
  return e.type === "selectionchange" ? di() : e.type === "select";
}
function fi(e) {
  const { altKey: t, button: n, buttons: r, ctrlKey: o, type: s } = e, i = s === "touchstart" || s === "touchmove", c = s === "mousedown" && (n === 0 || r === 1), u = s === "mousemove" && r === 1, l = t === !1 && o === !1;
  return !!(i || c && l || u && l);
}
function di() {
  const e = window.getSelection();
  if (!e)
    return !1;
  const t = e.toString(), n = e.anchorNode, r = e.focusNode, o = n && n.nodeType === window.Node.TEXT_NODE || r && r.nodeType === window.Node.TEXT_NODE;
  return t.length >= 1 && t !== `
` && !!o;
}
const Zr = () => {
}, pi = {}, mi = [];
function Jr(e) {
  return e > 20 ? e % 20 : e;
}
function Yo(e, t) {
  let n, r = !1, o, s;
  const i = e.changedTouches, c = e.type, u = e.metaKey === !0, l = e.shiftKey === !0, f = (i == null ? void 0 : i[0].force) || 0, d = Jr((i == null ? void 0 : i[0].identifier) || 0), m = (i == null ? void 0 : i[0].clientX) || e.clientX, p = (i == null ? void 0 : i[0].clientY) || e.clientY, E = (i == null ? void 0 : i[0].pageX) || e.pageX, S = (i == null ? void 0 : i[0].pageY) || e.pageY, h = typeof e.preventDefault == "function" ? e.preventDefault.bind(e) : Zr, x = e.timeStamp;
  function y(O) {
    return Array.prototype.slice.call(O).map((C) => ({
      force: C.force,
      identifier: Jr(C.identifier),
      get locationX() {
        return v(C.clientX);
      },
      get locationY() {
        return $(C.clientY);
      },
      pageX: C.pageX,
      pageY: C.pageY,
      target: C.target,
      timestamp: x
    }));
  }
  if (i != null)
    o = y(i), s = y(e.touches);
  else {
    const O = [
      {
        force: f,
        identifier: d,
        get locationX() {
          return v(m);
        },
        get locationY() {
          return $(p);
        },
        pageX: E,
        pageY: S,
        target: e.target,
        timestamp: x
      }
    ];
    o = O, s = c === "mouseup" || c === "dragstart" ? mi : O;
  }
  const R = {
    bubbles: !0,
    cancelable: !0,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: e.defaultPrevented,
    dispatchConfig: pi,
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
      metaKey: u,
      shiftKey: l,
      changedTouches: o,
      force: f,
      identifier: d,
      get locationX() {
        return v(m);
      },
      get locationY() {
        return $(p);
      },
      pageX: E,
      pageY: S,
      target: e.target,
      timestamp: x,
      touches: s,
      type: c
    },
    persist: Zr,
    preventDefault: h,
    stopPropagation() {
      r = !0;
    },
    target: e.target,
    timeStamp: x,
    touchHistory: t.touchHistory
  };
  function v(O) {
    if (n = n || Gr(R.currentTarget), n)
      return O - n.left;
  }
  function $(O) {
    if (n = n || Gr(R.currentTarget), n)
      return O - n.top;
  }
  return R;
}
const hi = "mousedown", gi = "mousemove", bi = "mouseup", vi = "dragstart", yi = "touchstart", xi = "touchmove", Si = "touchend", Ei = "touchcancel", Ni = "scroll", wi = "select", _i = "selectionchange";
function Ho(e) {
  return e === yi || e === hi;
}
function Xo(e) {
  return e === xi || e === gi;
}
function Ko(e) {
  return e === Si || e === bi || Uo(e);
}
function Uo(e) {
  return e === Ei || e === vi;
}
function Ti(e) {
  return e === Ni;
}
function Ri(e) {
  return e === wi || e === _i;
}
const Nn = 20;
function je(e) {
  return e.timeStamp || e.timestamp;
}
function Oi(e) {
  return {
    touchActive: !0,
    startPageX: e.pageX,
    startPageY: e.pageY,
    startTimeStamp: je(e),
    currentPageX: e.pageX,
    currentPageY: e.pageY,
    currentTimeStamp: je(e),
    previousPageX: e.pageX,
    previousPageY: e.pageY,
    previousTimeStamp: je(e)
  };
}
function Ci(e, t) {
  e.touchActive = !0, e.startPageX = t.pageX, e.startPageY = t.pageY, e.startTimeStamp = je(t), e.currentPageX = t.pageX, e.currentPageY = t.pageY, e.currentTimeStamp = je(t), e.previousPageX = t.pageX, e.previousPageY = t.pageY, e.previousTimeStamp = je(t);
}
function gr({ identifier: e }) {
  return e == null && console.error("Touch object is missing identifier."), process.env.NODE_ENV === "development" && e > Nn && console.error(
    "Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.",
    e,
    Nn
  ), e;
}
function $i(e, t) {
  const n = gr(e), r = t.touchBank[n];
  r ? Ci(r, e) : t.touchBank[n] = Oi(e), t.mostRecentTimeStamp = je(e);
}
function Pi(e, t) {
  const n = t.touchBank[gr(e)];
  n ? (n.touchActive = !0, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = je(e), t.mostRecentTimeStamp = je(e)) : console.warn(
    `Cannot record touch move without a touch start.
`,
    `Touch Move: ${Go(e)}
`,
    `Touch Bank: ${qo(t)}`
  );
}
function Ai(e, t) {
  const n = t.touchBank[gr(e)];
  n ? (n.touchActive = !1, n.previousPageX = n.currentPageX, n.previousPageY = n.currentPageY, n.previousTimeStamp = n.currentTimeStamp, n.currentPageX = e.pageX, n.currentPageY = e.pageY, n.currentTimeStamp = je(e), t.mostRecentTimeStamp = je(e)) : console.warn(
    `Cannot record touch end without a touch start.
`,
    `Touch End: ${Go(e)}
`,
    `Touch Bank: ${qo(t)}`
  );
}
function Go(e) {
  return JSON.stringify({
    identifier: e.identifier,
    pageX: e.pageX,
    pageY: e.pageY,
    timestamp: je(e)
  });
}
function qo(e) {
  const { touchBank: t } = e;
  let n = JSON.stringify(t.slice(0, Nn));
  return t.length > Nn && (n += ` (original size: ${t.length})`), n;
}
class Di {
  constructor() {
    Et(this, "_touchHistory", {
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
    var o, s;
    const r = this._touchHistory;
    if (Xo(t))
      n.changedTouches.forEach((i) => Pi(i, r));
    else if (Ho(t))
      n.changedTouches.forEach((i) => $i(i, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1 && (r.indexOfSingleActiveTouch = n.touches[0].identifier);
    else if (Ko(t) && (n.changedTouches.forEach((i) => Ai(i, r)), r.numberActiveTouches = n.touches.length, r.numberActiveTouches === 1)) {
      const { touchBank: i } = r;
      for (let c = 0; c < i.length; c++)
        if ((o = i[c]) != null && o.touchActive) {
          r.indexOfSingleActiveTouch = c;
          break;
        }
      process.env.NODE_ENV === "development" && ((s = i[r.indexOfSingleActiveTouch]) != null && s.touchActive || console.error("Cannot find single active touch."));
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}
const Vi = {}, Qr = [
  "onStartShouldSetResponderCapture",
  "onStartShouldSetResponder",
  { bubbles: !0 }
], eo = [
  "onMoveShouldSetResponderCapture",
  "onMoveShouldSetResponder",
  { bubbles: !0 }
], Mi = [
  "onScrollShouldSetResponderCapture",
  "onScrollShouldSetResponder",
  { bubbles: !1 }
], ji = {
  touchstart: Qr,
  mousedown: Qr,
  touchmove: eo,
  mousemove: eo,
  scroll: Mi
}, rr = { id: null, idPath: null, node: null }, wn = /* @__PURE__ */ new Map();
let lt = !1, He = 0, Xe = {
  id: null,
  node: null,
  idPath: null
};
const or = new Di();
function sn(e) {
  Xe = e;
}
function an(e) {
  return wn.get(e) ?? Vi;
}
function jn(e) {
  const t = e.type, n = e.target;
  if (t === "touchstart" && (lt = !0), (t === "touchmove" || He > 1) && (lt = !1), // Ignore browser emulated mouse events
  t === "mousedown" && lt || t === "mousemove" && lt || // Ignore mousemove if a mousedown didn't occur first
  t === "mousemove" && He < 1)
    return;
  if (lt && t === "mouseup") {
    He === 0 && (lt = !1);
    return;
  }
  const r = Ho(t) && fi(e), o = Xo(t), s = Ko(t), i = Ti(t), c = Ri(t), u = Yo(e, or);
  (r || o || s) && (e.touches ? He = e.touches.length : r ? He = 1 : s && (He = 0), or.recordTouchTrack(
    t,
    u.nativeEvent
  ));
  let l = ai(e), f = !1, d;
  if (r || o || i && He > 0) {
    const m = Xe.idPath, p = l.idPath;
    if (m != null && p != null) {
      const E = ci(
        m,
        p
      );
      if (E != null) {
        const S = p.indexOf(E) + (E === Xe.id ? 1 : 0);
        l = {
          idPath: p.slice(S),
          nodePath: l.nodePath.slice(S)
        };
      } else
        l = null;
    }
    l != null && (d = Fi(l, e, u), d != null && (ki(u, d), f = !0));
  }
  if (Xe.id != null && Xe.node != null) {
    const { id: m, node: p } = Xe, {
      onResponderStart: E,
      onResponderMove: S,
      onResponderEnd: h,
      onResponderRelease: x,
      onResponderTerminate: y,
      onResponderTerminationRequest: R
    } = an(m);
    if (u.bubbles = !1, u.cancelable = !1, u.currentTarget = p, r)
      E != null && (u.dispatchConfig.registrationName = "onResponderStart", E(u));
    else if (o)
      S != null && (u.dispatchConfig.registrationName = "onResponderMove", S(u));
    else {
      const v = Uo(t) || // native context menu
      t === "contextmenu" || // window blur
      t === "blur" && n === window || // responder (or ancestors) blur
      t === "blur" && n.contains(p) && e.relatedTarget !== p || // native scroll without using a pointer
      i && He === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      i && n.contains(p) && n !== p || // native select/selectionchange on node
      c && ui(e), $ = s && !v && !li(p, e.touches);
      if (s && h != null && (u.dispatchConfig.registrationName = "onResponderEnd", h(u)), $ && (x != null && (u.dispatchConfig.registrationName = "onResponderRelease", x(u)), sn(rr)), v) {
        let O = !0;
        (t === "contextmenu" || t === "scroll" || t === "selectionchange") && (f ? O = !1 : R != null && (u.dispatchConfig.registrationName = "onResponderTerminationRequest", R(u) === !1 && (O = !1))), O && (y != null && (u.dispatchConfig.registrationName = "onResponderTerminate", y(u)), sn(rr), lt = !1, He = 0);
      }
    }
  }
}
function Fi(e, t, n) {
  const r = ji[t.type];
  if (r != null) {
    const { idPath: o, nodePath: s } = e, i = r[0], c = r[1], { bubbles: u } = r[2], l = function(f, d, m) {
      const p = an(f)[m];
      if (p != null && (n.currentTarget = d, p(n) === !0)) {
        const E = o.slice(o.indexOf(f));
        return { id: f, node: d, idPath: E };
      }
    };
    for (let f = o.length - 1; f >= 0; f--) {
      const d = o[f], m = s[f], p = l(d, m, i);
      if (p != null)
        return p;
      if (n.isPropagationStopped() === !0)
        return;
    }
    if (u)
      for (let f = 0; f < o.length; f++) {
        const d = o[f], m = s[f], p = l(d, m, c);
        if (p != null)
          return p;
        if (n.isPropagationStopped() === !0)
          return;
      }
    else {
      const f = o[0], d = s[0];
      if (t.target === d)
        return l(f, d, c);
    }
  }
}
function ki(e, t) {
  const { id: n, node: r } = Xe, { id: o, node: s } = t, { onResponderGrant: i, onResponderReject: c } = an(o);
  if (e.bubbles = !1, e.cancelable = !1, e.currentTarget = s, n == null)
    i != null && (e.currentTarget = s, e.dispatchConfig.registrationName = "onResponderGrant", i(e)), sn(t);
  else {
    const { onResponderTerminate: u, onResponderTerminationRequest: l } = an(n);
    let f = !0;
    l != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminationRequest", l(e) === !1 && (f = !1)), f ? (u != null && (e.currentTarget = r, e.dispatchConfig.registrationName = "onResponderTerminate", u(e)), i != null && (e.currentTarget = s, e.dispatchConfig.registrationName = "onResponderGrant", i(e)), sn(t)) : c != null && (e.currentTarget = s, e.dispatchConfig.registrationName = "onResponderReject", c(e));
  }
}
const Ii = ["blur", "scroll"], Wi = [
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
], to = Symbol();
function Li() {
  ri && !window[to] && (window.addEventListener("blur", jn), Wi.forEach((e) => {
    document.addEventListener(e, jn);
  }), Ii.forEach((e) => {
    document.addEventListener(e, jn, !0);
  }), window[to] = !0);
}
function Bi(e, t, n) {
  ii(t, e), wn.set(e, n);
}
function no(e) {
  Xe.id === e && zi(), wn.has(e) && wn.delete(e);
}
function zi() {
  const { id: e, node: t } = Xe;
  if (e != null && t != null) {
    const { onResponderTerminate: n } = an(e);
    if (n != null) {
      const r = Yo({}, or);
      r.currentTarget = t, n(r);
    }
    sn(rr);
  }
  lt = !1, He = 0;
}
function Yi() {
  return Xe.node;
}
const Hi = {};
function Xi(e, t = Hi) {
  const n = wt.useId(), r = wt.useRef(!1);
  wt.useEffect(() => (Li(), () => {
    no(n);
  }), [n]), wt.useEffect(() => {
    const {
      onMoveShouldSetResponder: o,
      onMoveShouldSetResponderCapture: s,
      onScrollShouldSetResponder: i,
      onScrollShouldSetResponderCapture: c,
      onSelectionChangeShouldSetResponder: u,
      onSelectionChangeShouldSetResponderCapture: l,
      onStartShouldSetResponder: f,
      onStartShouldSetResponderCapture: d
    } = t, m = o != null || s != null || i != null || c != null || u != null || l != null || f != null || d != null, p = e.current;
    m ? (Bi(n, p, t), r.current = !0) : r.current && (no(n), r.current = !1);
  }, [t, e, n]), process.env.NODE_ENV === "development" && (wt.useDebugValue({
    isResponder: e.current === Yi()
  }), wt.useDebugValue(t));
}
function Zo(e, t, { checkDefaultPrevented: n = !0 } = {}) {
  return !e || !t ? t || e || void 0 : function(r) {
    if (e == null || e(r), !r || !(n && "defaultPrevented" in r) || // @ts-ignore
    "defaultPrevented" in r && !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
const cn = !0, Jo = typeof window < "u", _t = !Jo, Le = Jo, br = _t ? Tt : ko, Ki = "web", Qo = {
  placeholderTextColor: !0
}, es = {
  ...Qo
}, ts = {
  color: !0,
  ...Qo,
  textDecorationColor: !0,
  textShadowColor: !0
}, jt = {
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
    ...ts,
    outlineColor: !0
  }
}, vr = {
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
}, yr = {
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
}, ns = {
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
  ...jt.color,
  ...jt.radius,
  ...jt.size,
  ...jt.radius,
  ...es,
  ...yr,
  ...vr,
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
}, Ui = {
  fontFamily: !0,
  fontSize: !0,
  fontStyle: !0,
  fontWeight: !0,
  letterSpacing: !0,
  lineHeight: !0,
  textTransform: !0
}, rs = {
  ...Ui,
  textAlign: !0,
  textDecorationLine: !0,
  textDecorationStyle: !0,
  ...ts,
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
}, os = {
  ...ns,
  ...rs
}, Gi = os, sr = {
  enterStyle: !0,
  exitStyle: !0,
  hoverStyle: !0,
  pressStyle: !0,
  focusStyle: !0
}, It = {
  ...sr,
  ...ns
}, Ut = /* @__PURE__ */ new Map(), xr = (e, t = 10) => {
  if (Ut.has(e))
    return Ut.get(e);
  let n = 0, r = "";
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const c = e.charCodeAt(i);
    if (t !== "strict" && (c === 46 && (r += "d0t"), Zi(c) && o <= t)) {
      r += e[i];
      continue;
    }
    n = qi(n, e[i]);
  }
  const s = r + (n ? Math.abs(n) : "");
  return Ut.size > 1e4 && Ut.clear(), Ut.set(e, s), s;
}, qi = (e, t) => Math.imul(31, e) + t.charCodeAt(0) | 0;
function Zi(e) {
  return (
    // A-Z
    e >= 65 && e <= 90 || // a-z
    e >= 97 && e <= 122 || // _
    e === 95 || // -
    e === 45 || // 0-9
    e >= 48 && e <= 57
  );
}
let ln;
const Ke = () => {
  if (!ln)
    throw new Error(
      process.env.NODE_ENV !== "production" ? "Missing tamagui config, you either have a duplicate config, or haven't set it up. Be sure createTamagui is called before rendering. Also, make sure all of your tamagui dependencies are on the same version (`tamagui`, `@tamagui/package-name`, etc.)" : "Err0"
    );
  return ln;
}, Ji = () => ln.themes, Qi = /* @__PURE__ */ new Set(), ea = (e) => {
  ln ? e(ln) : Qi.add(e);
}, ss = "isVar", ta = (e, t = !1) => {
  if (!t && et(e))
    return e;
  const { key: n, name: r, val: o } = e;
  return {
    [ss]: !0,
    key: n,
    name: t ? "" : xr(r, 40),
    val: o,
    variable: t ? `var(--${r})` : oa(r)
  };
};
function ir(e, t = !1) {
  return et(e) ? !t && cn && e.variable ? e.variable : `${e.val}` : `${e || ""}`;
}
function et(e) {
  return e && typeof e == "object" && ss in e;
}
function na(e) {
  if (Sr(!0), et(e))
    return ir(e);
  const t = Ke().tokensParsed;
  return ir(t[e] ?? e);
}
let is = !1;
const Sr = (e) => is = e, ra = () => is;
function as(e) {
  return et(e) ? (Sr(!0), e.val) : e;
}
const oa = (e, t = !0) => {
  if (process.env.NODE_ENV === "development" && (!e || typeof e != "string"))
    throw new Error(`createCSSVariable expected string, got: ${e}`);
  const n = xr(e, 60);
  return t ? `var(--${n})` : n;
}, ro = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new Map(), Qt = {}, oo = {}, un = {}, sa = () => Qt;
function cs(e, t, n) {
  const r = t.indexOf("transform:");
  if (r === -1) {
    process.env.NODE_ENV === "development" && console.error(`❌ Invalid transform, likely used deg/% improperly ${e}`);
    return;
  }
  const o = r + 10, s = t.indexOf(";"), i = t.slice(o, s);
  if (!un[e])
    return un[e] = i, !0;
}
let so = null;
function ia(e = !1, t) {
  if (process.env.NODE_ENV === "test" || !Le)
    return;
  let n;
  const r = document.styleSheets || [], o = so, s = new Set(r);
  if (document.styleSheets) {
    for (const i of s)
      if (i) {
        const c = ao(i, !1, e, t);
        c && (n = c);
      }
    so = s;
  }
  if (o)
    for (const i of o)
      i && !s.has(i) && ao(i, !0);
  return n;
}
function ls(e, t = !1) {
  const n = (_n.get(e) || 0) + (t ? -1 : 1);
  return _n.set(e, n), n;
}
const io = process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES, aa = io ? +io : 250;
function ao(e, t = !1, n = !1, r) {
  var m, p;
  let o;
  try {
    if (o = e.cssRules, !o)
      return;
  } catch {
    return;
  }
  const s = (m = yn(o[0], n)) == null ? void 0 : m[0], i = (p = yn(o[o.length - 1], n)) == null ? void 0 : p[0], c = `${o.length}${s}${i}`, u = ro.get(e);
  if (!t && u === c)
    return;
  const l = o.length;
  let f = 0, d;
  for (let E = 0; E < l; E++) {
    const S = o[E];
    if (!(S instanceof CSSStyleRule))
      continue;
    const h = yn(S, n);
    if (h)
      f = 0;
    else {
      if (f++, f > aa)
        return;
      continue;
    }
    const [x, y, R] = h;
    if (R) {
      const $ = ca(y, r);
      $ && (d || (d = []), d.push($));
      continue;
    }
    const v = ls(x, t);
    t ? v === 0 && delete Qt[x] : x in Qt || (!x.startsWith("_transform") || cs(x, y.cssText)) && (Qt[x] = y.cssText);
  }
  return ro.set(e, c), d;
}
let pn, co = null;
function ca(e, t) {
  const n = e.selectorText.split(",");
  if (!n.length)
    return;
  if (t && !pn) {
    pn = {};
    for (const i in t.color) {
      const c = t.color[i];
      pn[c.name] = c.val;
    }
  }
  const r = (e.cssText || "").slice(e.selectorText.length + 2, -1).trim().split(";"), o = {};
  for (const i of r) {
    const c = i.indexOf(":");
    if (c === -1)
      continue;
    const u = i.slice(i.indexOf("--") + 2, c), l = i.slice(c + 2);
    let f;
    if (l[3] === "(") {
      const d = l.slice(6, -1), m = pn[d];
      m ? f = m : (co || (co = getComputedStyle(document.body)), f = co.getPropertyValue("--" + d));
    } else
      f = l;
    o[u] = ta(
      {
        key: u,
        name: u,
        val: f
      },
      !0
    );
  }
  const s = {
    names: [],
    theme: o
  };
  for (const i of n) {
    let c = i.includes("t_dark") ? "dark" : i.includes("t_light") ? "light" : "", u = i.slice(i.lastIndexOf(".t_") + 3);
    u.startsWith(c) && (u = u.slice(c.length + 1)), c === u && (c = "");
    const l = `${c}${c && u ? "_" : ""}${u}`;
    s.names.includes(l) || s.names.push(l);
  }
  return s;
}
function yn(e, t = !1) {
  if (e instanceof CSSStyleRule) {
    const n = e.selectorText;
    if (n[0] === ":" && n[1] === "r") {
      if (n.startsWith(":root ._"))
        return [la(n), e];
      if (t && (n.startsWith(":root.t_") || n.startsWith(":root .t_")))
        return [
          n.slice(0, 20),
          // just used as uid
          e,
          !0
        ];
    }
  } else if (e instanceof CSSMediaRule)
    return e.cssRules.length > 1 ? void 0 : yn(e.cssRules[0]);
}
const la = (e) => {
  let t = e.slice(7);
  return e.includes(":") ? t.replace(/:[a-z]+$/, "") : t;
}, Gt = Le ? document.head.appendChild(document.createElement("style")).sheet : null;
function us(e, t) {
  return e in oo ? !1 : (oo[e] = t.join(" "), e.startsWith("_transform") ? cs(e, t[0]) : !0);
}
function ua(e) {
  if (!(!e.length || !Gt)) {
    for (const { identifier: t, rules: n } of e)
      if (fs(t)) {
        Qt[t] = n.join(`
`), ls(t), us(t, n);
        for (const r of n)
          if (process.env.NODE_ENV === "production")
            Gt.insertRule(r, Gt.cssRules.length);
          else
            try {
              Gt.insertRule(r, Gt.cssRules.length);
            } catch (o) {
              console.groupCollapsed(
                `Error inserting rule into CSSStyleSheet: ${String(o)}`
              ), console.info({ rule: r, rulesToInsert: e }), console.trace(), console.groupEnd();
            }
      }
  }
}
function fs(e) {
  if (process.env.IS_STATIC === "is_static")
    return !0;
  const t = _n.get(e);
  return process.env.NODE_ENV === "development" && _n.size > +(process.env.TAMAGUI_STYLE_INSERTION_WARNING_LIMIT || 5e4) && console.warn(
    'Warning: inserting many CSS rules, you may be animating something and generating many CSS insertions, which can degrade performance. Instead, try using the "disableClassName" property on elements that change styles often. To disable this warning set TAMAGUI_STYLE_INSERTION_WARNING_LIMIT from 50000 to something higher'
  ), t === void 0 || t < 2;
}
function On(e, t) {
  return process.env.NODE_ENV === "development" && (typeof e != "object" || !e) && console.warn(
    "Invalid object given for proxy:",
    e,
    `
  
  This can be due to a missing theme or configuration given to Tamagui.`,
    new Error().stack
  ), new Proxy(e || {}, t);
}
const ar = {
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
}, fa = {
  hover: 1,
  press: 2,
  focus: 3
}, ut = {
  ...ar,
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
function da(e) {
  let t = "";
  for (const n in e) {
    t += n;
    const r = e[n];
    let o = typeof r;
    if (!r || o !== "object")
      t += o + r;
    else if (Fn.has(r))
      t += Fn.get(r);
    else {
      let s = Math.random();
      Fn.set(r, s), t += s;
    }
  }
  return t;
}
const Fn = /* @__PURE__ */ new WeakMap();
function pa(e) {
  const t = tr(e), n = t.Provider, r = t, o = /* @__PURE__ */ new Map(), s = ({
    children: c,
    scope: u,
    ...l
  }) => {
    const f = Tn(() => ({
      // this ! is a workaround for ts error
      ...e,
      ...l
    }), [da(l)]);
    let d = n;
    if (u) {
      let m = o.get(u);
      m || (m = tr(e), o.set(u, m)), d = m.Provider;
    }
    return /* @__PURE__ */ B.jsx(d, { value: f, children: c });
  }, i = (c) => {
    const u = c ? o.get(c) : t;
    return nn(u);
  };
  return r.Provider = s, r.props = e, r.context = t, r.useStyledContext = i, r;
}
const kn = /* @__PURE__ */ new Set(), cr = pa({
  disableSSR: void 0,
  inText: !1,
  language: null,
  animationDriver: null,
  groups: {
    emit: (e, t) => {
      kn.forEach((n) => n(e, t));
    },
    subscribe(e) {
      return kn.add(e), () => {
        kn.delete(e);
      };
    },
    state: {}
  }
});
function ma() {
  const e = nn(cr);
  return ds(e);
}
function ds(e) {
  return e.disableSSR ?? Ke().disableSSR;
}
let Ft = (
  // development only safeguard
  process.env.NODE_ENV === "development" ? On(
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
const ps = {}, ha = () => Ft, ga = /* @__PURE__ */ new Set(), lo = (e) => {
  if (ga.has(e))
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
let ba;
const ms = Object.keys(ut).length;
let va;
const ya = (e) => {
  if (process.env.NODE_ENV === "development" && e[0] === "$")
    throw new Error("use short key");
  return Ke().settings.mediaPropOrder ? ms : va.indexOf(e) + 100;
}, uo = /* @__PURE__ */ new Set(), hs = /* @__PURE__ */ new WeakMap();
function xa(e, t) {
  return hs.set(e, t);
}
function Sa(e) {
  return uo.add(e), () => uo.delete(e);
}
function Ea(e, t) {
  const n = rn(), r = ((t ? ds(t) : ma()) ? Ft : ba) || {}, o = Io(
    Sa,
    () => {
      if (!n.current)
        return r;
      const { touched: s, prev: i } = n.current, c = e ? hs.get(e) : void 0;
      if (c && c.enabled === !1)
        return i;
      const u = (c == null ? void 0 : c.keys) ?? ((!c || c.enabled) && s ? [...s] : null);
      return !u || u != null && u.every((l) => Ft[l] === i[l]) ? i : (n.current.prev = Ft, Ft);
    },
    () => r
  );
  return new Proxy(o, {
    get(s, i) {
      var c;
      return typeof i == "string" && (n.current || (n.current = { prev: r }), (c = n.current).touched || (c.touched = /* @__PURE__ */ new Set()), n.current.touched.add(i)), Reflect.get(o, i);
    }
  });
}
const gs = (e, t, n, r) => {
  const o = Ke(), s = r && !o.settings.mediaPropOrder ? ya(e) : ms;
  return !n[t] || s > n[t] ? s : null;
};
function Na(e, t, n, r, o, s, i) {
  let c = gs(
    t,
    n,
    o,
    s
  );
  return i && (c = (c || 0) + i), c === null ? !1 : (o[n] = c, e[n] = r, !0);
}
function wa(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`).toLowerCase();
}
const In = /* @__PURE__ */ new WeakMap();
function _a(e, t) {
  if (typeof e == "string")
    return e;
  if (In.has(e))
    return In.get(e);
  const n = Object.entries(e).map(([r, o]) => (r = wa(r), typeof o == "string" ? `(${r}: ${o})` : (typeof o == "number" && /[height|width]$/.test(r) && (o = `${o}px`), `(${r}: ${o})`))).join(" and ");
  return In.set(e, n), n;
}
function bs(e, t) {
  const n = ps[e];
  return Object.keys(n).every((r) => {
    const o = +n[r], s = r.startsWith("max"), i = r.endsWith("Width"), c = t[i ? "width" : "height"];
    return s ? c < o : c > o;
  });
}
var Wn, fo;
function Ta() {
  if (fo)
    return Wn;
  fo = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, o = (l, f) => {
    for (var d in f)
      e(l, d, { get: f[d], enumerable: !0 });
  }, s = (l, f, d, m) => {
    if (f && typeof f == "object" || typeof f == "function")
      for (let p of n(f))
        !r.call(l, p) && p !== d && e(l, p, { get: () => f[p], enumerable: !(m = t(f, p)) || m.enumerable });
    return l;
  }, i = (l) => s(e({}, "__esModule", { value: !0 }), l), c = {};
  o(c, {
    timer: () => u
  }), Wn = i(c);
  function u() {
    let l = 0;
    const f = /* @__PURE__ */ new Set(), d = {};
    function m() {
      const p = l / f.size;
      let E = 0;
      const S = [
        `Ran ${p} per-type, ${l} total`,
        ...[...f].map((h) => {
          const x = `avg ${`${d[h] / p}`.slice(0, 9).padEnd(9)}ms`, y = d[h];
          return E += y, `${h.slice(0, 30).padStart(31)} | ${x} | total ${y}ms`;
        }),
        `                                    total ${E}ms`
      ].join(`
`);
      return console.info(S), S;
    }
    return {
      start(p) {
        const E = (p == null ? void 0 : p.quiet) ?? !0;
        function S(x, ...y) {
          const R = performance.now() - h;
          h = performance.now();
          const v = x[0];
          if (f.add(v), l++, d[v] ?? (d[v] = 0), d[v] += R, !E) {
            let $ = "";
            x.forEach((O, C) => {
              $ += `${O}${C === x.length - 1 ? "" : y[C]}`;
            }), console.info(`${`${R}ms`.slice(0, 6).padStart(7)} |`, $);
          }
        }
        let h = performance.now();
        return S.print = m, S;
      },
      profile() {
        return {
          timings: d,
          runs: l
        };
      },
      print: m
    };
  }
  return Wn;
}
function Ra(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function vs(...e) {
  return (t) => e.forEach((n) => Ra(n, t));
}
function Oa(...e) {
  return wt.useCallback(vs(...e), e);
}
const Ca = () => {
}, $a = () => Ca;
function Pa(e) {
  return Io(
    $a,
    () => e ?? !0,
    () => !1
  );
}
const mn = "_", Aa = "t_", Cn = {
  alignItems: "stretch"
};
Object.assign(Cn, {
  display: "flex",
  flexDirection: "column",
  flexBasis: "auto",
  boxSizing: "border-box",
  position: "relative",
  minHeight: 0,
  minWidth: 0,
  flexShrink: 0
});
const Er = {
  hover: !1,
  press: !1,
  pressIn: !1,
  focus: !1,
  unmounted: !0
}, Da = {
  ...Er,
  unmounted: !1
}, Va = {
  ...Er,
  unmounted: "should-enter"
};
function Ma(e) {
  return (t) => e((n) => ys(n, t));
}
function ys(e, t) {
  return lr(e, t) ? e : { ...e, ...t };
}
function lr(e, t) {
  for (const n in t)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const xn = {};
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
    n === !0 && (n = t.toLowerCase()), xn[`accessibility${t}`] = `aria-${n}`;
  }
}
const ur = (() => {
  if (process.env.NODE_ENV === "development")
    try {
      return new Function("try {return this===window;}catch(e){ return false;}")();
    } catch {
    }
  return !1;
})();
function xs(e) {
  const t = ha(), [n, r, o, s] = e.split("-");
  let i;
  const c = o in t ? o : void 0;
  return c ? i = s : i = o, { name: r, pseudo: i, media: c };
}
const po = "_";
let mo = null, Ln = null;
const ja = {
  press: "active"
}, Fa = (e, t, n, r, o, s) => {
  const { property: i, identifier: c, rules: u } = e, l = Ke();
  l.settings.mediaPropOrder;
  const f = r === "theme", d = r === "platform", m = r === "group", p = f || d || m, E = o ? "0" : "", S = c.slice(0, c.indexOf("-") + 1), h = `${S}${po}${t.replace("-", "")}${E}${po}`;
  let x = "", y, R, v = c.replace(S, h), $ = u.map((O) => O.replace(c, v)).join(";");
  if (p) {
    const O = new Array((s || 0) + (m ? 1 : 0)).fill(":root").join("");
    if (f || m) {
      const C = xs(t), w = C == null ? void 0 : C.name;
      y = C == null ? void 0 : C.media, m && (R = w);
      const M = (m ? "group_" : "") + w, k = $.indexOf(":root"), J = $.lastIndexOf("{"), F = $.slice(k, J), X = l.themeClassNameOnRoot ? "" : " ", z = C.pseudo ? ja[C.pseudo] || C.pseudo : void 0, pe = z ? `:${z}` : "", Ce = `:root${O}${X}`, K = `.t_${M}${pe}`, se = `${Ce}${K} ${F.replace(
        ":root",
        ""
      )}`;
      x = $.replace(F, se);
    } else
      x = `${O}${$}`;
  }
  if (!p || y) {
    if (!Ln) {
      const J = Object.keys(n);
      Ln = Object.fromEntries(
        J.map((F) => [F, _a(n[F])])
      ), mo = Object.fromEntries(
        J.map((F, X) => [F, new Array(X + 1).fill(":root").join("")])
      );
    }
    const O = y || t, C = Ln[O], w = `${o ? "not all and " : ""}${C}`, M = y ? "" : (
      // @ts-ignore
      mo[O]
    ), k = y ? `@container ${R}` : "@media";
    y && ($ = x), $.includes(k) ? x = $.replace("{", ` and ${w} {`) : x = `${k} ${w}{${M}${$}}`, y && (x = `@supports (contain: ${l.settings.webContainerType || "inline-size"}) {${x}}`);
  }
  return {
    property: i,
    rules: [x],
    identifier: v
  };
}, fr = { height: 0, width: 0 };
function ka(e) {
  if (typeof e == "number")
    return e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null;
  if (typeof e != "string")
    return null;
  const t = Wa();
  let n;
  if (n = t.hex6.exec(e))
    return parseInt(n[1] + "ff", 16) >>> 0;
  const r = La(e);
  return r ?? ((n = t.rgb.exec(e)) ? (Je(n[1]) << 24 | // r
  Je(n[2]) << 16 | // g
  Je(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = t.rgba.exec(e)) ? n[6] !== void 0 ? (Je(n[6]) << 24 | // r
  Je(n[7]) << 16 | // g
  Je(n[8]) << 8 | // b
  gn(n[9])) >>> // a
  0 : (Je(n[2]) << 24 | // r
  Je(n[3]) << 16 | // g
  Je(n[4]) << 8 | // b
  gn(n[5])) >>> // a
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
  ) >>> 0 : (n = t.hsl.exec(e)) ? (Bn(
    hn(n[1]),
    // h
    ct(n[2]),
    // s
    ct(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = t.hsla.exec(e)) ? n[6] !== void 0 ? (Bn(
    hn(n[6]),
    // h
    ct(n[7]),
    // s
    ct(n[8])
    // l
  ) | gn(n[9])) >>> // a
  0 : (Bn(
    hn(n[2]),
    // h
    ct(n[3]),
    // s
    ct(n[4])
    // l
  ) | gn(n[5])) >>> // a
  0 : (n = t.hwb.exec(e)) ? (Ia(
    hn(n[1]),
    // h
    ct(n[2]),
    // w
    ct(n[3])
    // b
  ) | 255) >>> // a
  0 : null);
}
function Wt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Bn(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, s = Wt(o, r, e + 1 / 3), i = Wt(o, r, e), c = Wt(o, r, e - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(i * 255) << 16 | Math.round(c * 255) << 8;
}
function Ia(e, t, n) {
  if (t + n >= 1) {
    const i = Math.round(t * 255 / (t + n));
    return i << 24 | i << 16 | i << 8;
  }
  const r = Wt(0, 1, e + 1 / 3) * (1 - t - n) + t, o = Wt(0, 1, e) * (1 - t - n) + t, s = Wt(0, 1, e - 1 / 3) * (1 - t - n) + t;
  return Math.round(r * 255) << 24 | Math.round(o * 255) << 16 | Math.round(s * 255) << 8;
}
const ve = "[-+]?\\d*\\.?\\d+", at = ve + "%";
function zn(...e) {
  return "\\(\\s*(" + e.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function ho(...e) {
  return "\\(\\s*(" + e.slice(0, e.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + e[e.length - 1] + ")\\s*\\)";
}
function go(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
let Yn;
function Wa() {
  return Yn === void 0 && (Yn = {
    rgb: new RegExp("rgb" + zn(ve, ve, ve)),
    rgba: new RegExp(
      "rgba(" + go(ve, ve, ve, ve) + "|" + ho(ve, ve, ve, ve) + ")"
    ),
    hsl: new RegExp("hsl" + zn(ve, at, at)),
    hsla: new RegExp(
      "hsla(" + go(ve, at, at, ve) + "|" + ho(ve, at, at, ve) + ")"
    ),
    hwb: new RegExp("hwb" + zn(ve, at, at)),
    hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#([0-9a-fA-F]{6})$/,
    hex8: /^#([0-9a-fA-F]{8})$/
  }), Yn;
}
function Je(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function hn(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function gn(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ct(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function La(e) {
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
var Ss = ka;
const Es = /* @__PURE__ */ ei(Ss), Ba = /* @__PURE__ */ Qs({
  __proto__: null,
  default: Es
}, [Ss]), za = Es || Ba, Ya = za;
function Ha(e) {
  var t = Math.round((e & 4278190080) >>> 24), n = Math.round((e & 16711680) >>> 16), r = Math.round((e & 65280) >>> 8), o = ((e & 255) >>> 0) / 255;
  return {
    r: t,
    g: n,
    b: r,
    a: o
  };
}
const Xa = (e, t) => {
  if (!e)
    return;
  if (e[0] === "$" || e[0] === "v" && e.startsWith("var(") || t === 1)
    return e;
  const n = Ya(e);
  if (n != null) {
    const { r, g: o, b: s, a: i } = Ha(n), c = (t ?? i ?? 1).toFixed(2);
    return `rgba(${r},${o},${s},${c})`;
  }
  return process.env.NODE_ENV === "development" && console.warn(`Unknown color value: ${e}`), e;
}, Ka = {
  ...Gi,
  translateX: !0,
  translateY: !0
};
function Oe(e, t) {
  if (typeof e == "boolean" || t && t in vr || t && !(t in Ka))
    return e;
  let n = e;
  return e && typeof e == "object" ? e : (typeof e == "number" ? n = `${e}px` : t && (n = `${n}`), n);
}
const Hn = {};
function bo(e, t) {
  const n = sa()[t];
  if (Hn[n])
    return Hn[n];
  if (!n) {
    process.env.NODE_ENV === "development" && console.warn(
      `No CSS rule found for ${e} looking for selector ".${t}", you may not be injecting extracted CSS`
    );
    return;
  }
  const r = n.replace(/.*:/, "").replace(/;.*/, "").trim();
  let o;
  return r.startsWith("var(") ? o = r : vr[e] ? o = +r : r.endsWith("px") ? o = +r.replace("px", "") : o = r, Hn[n] = o, process.env.NODE_ENV === "development" && typeof o == "number" && isNaN(o) && console.info("Tamagui invalid parsed value, NaN:", {
    res: o,
    cssVal: r,
    cssRule: n,
    key: e,
    className: t
  }), o;
}
function Ua({
  shadowColor: e,
  shadowOffset: t,
  shadowOpacity: n = 1,
  shadowRadius: r
}) {
  const { height: o, width: s } = t || fr;
  return {
    shadowOffset: {
      width: Oe(s || 0),
      height: Oe(o || 0)
    },
    shadowRadius: Oe(r || 0),
    shadowColor: Xa(e, n)
  };
}
function Nr(e) {
  (e.shadowRadius || e.shadowColor || e.shadowOpacity || e.shadowOffset) && Object.assign(e, Ua(e));
  for (const t in Xn)
    t in e && !e[Xn[t]] && (e[Xn[t]] = "solid");
}
const Xn = {
  borderWidth: "borderStyle",
  borderBottomWidth: "borderBottomStyle",
  borderTopWidth: "borderTopStyle",
  borderLeftWidth: "borderLeftStyle",
  borderRightWidth: "borderRightStyle"
};
function vo(e, t) {
  let n = [];
  for (const r in ar) {
    const o = e[r];
    o && (n = [
      ...n,
      ...dr(o, ar[r])
    ]);
  }
  return n = [...n, ...dr(e)], process.env.NODE_ENV === "development" && t === "verbose" && console.info(" 🪮 getStylesAtomic", { stylesIn: e, res: n }), n;
}
let Kn;
function Ns(e) {
  return e.map(
    // { scale: 2 } => 'scale(2)'
    // { translateX: 20 } => 'translateX(20px)'
    // { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
    (t) => {
      const n = Object.keys(t)[0], r = t[n];
      return n === "matrix" || n === "matrix3d" ? `${n}(${r.join(",")})` : `${n}(${Oe(r, n)})`;
    }
  ).join(" ");
}
const dr = (e, t) => {
  if (!e)
    return [];
  Kn = Kn || Ke(), ws(e);
  const n = [];
  for (const r in e) {
    if (r in ut)
      continue;
    let o = e[r];
    if (o == null)
      continue;
    r === "transform" && Array.isArray(e.transform) && (o = Ns(o));
    const s = Oe(o, r), i = xr(`${s}`), c = t ? `0${t.name}-` : "", u = `_${Kn.inverseShorthands[r] || r}-${c}${i}`, l = Ja(u, r, s, t), f = {
      property: r,
      pseudo: t == null ? void 0 : t.name,
      identifier: u,
      rules: l,
      value: s
    };
    n.push(f);
  }
  return n;
};
function ws(e) {
  const { shadowOffset: t, shadowRadius: n, shadowColor: r } = e;
  if (e.shadowRadius) {
    const c = t || fr, u = Oe(c.width), l = Oe(c.height), f = Oe(n), d = `${u} ${l} ${f} ${r}`;
    e.boxShadow = e.boxShadow ? `${e.boxShadow}, ${d}` : d, delete e.shadowOffset, delete e.shadowRadius, delete e.shadowColor, delete e.shadowOpacity;
  }
  const { textShadowColor: o, textShadowOffset: s, textShadowRadius: i } = e;
  if (o || s || i) {
    const { height: c, width: u } = s || fr, l = i || 0, f = Oe(o, "textShadowColor");
    if (f && (c !== 0 || u !== 0 || l !== 0)) {
      const d = Oe(l), m = Oe(u), p = Oe(c);
      e.textShadow = `${m} ${p} ${d} ${f}`;
    }
    delete e.textShadowColor, delete e.textShadowOffset, delete e.textShadowRadius;
  }
}
function kt(e, t = !1) {
  let n = "";
  for (const [r, o] of e)
    n += `${qa(r)}:${o}${t ? " !important" : ""};`;
  return `{${n}}`;
}
const Un = {}, Ga = (e) => `-${e.toLowerCase()}`, qa = (e) => {
  if (e in Un)
    return Un[e];
  const t = e.replace(/[A-Z]/g, Ga);
  return Un[e] = t, t;
}, Za = (() => {
  const e = {};
  for (const t in ut) {
    const n = ut[t];
    e[n.name] = `${[...Array(n.priority)].map(() => ":root").join("")} `;
  }
  return e;
})();
function Ja(e, t, n, r) {
  const o = r ? (
    // adding one more :root so we always override react native web styles :/
    `${Za[r.name]} .${e}:${r.name}`
  ) : `:root .${e}`, s = !!r;
  let i = [];
  switch (t) {
    case "placeholderTextColor": {
      const c = kt(
        [
          ["color", n],
          ["opacity", 1]
        ],
        s
      );
      i.push(`${o}::placeholder${c}`);
      break;
    }
    case "backgroundClip":
    case "userSelect": {
      const c = `Webkit${`${t[0].toUpperCase()}${t.slice(1)}`}`, u = kt(
        [
          [t, n],
          [c, n]
        ],
        s
      );
      i.push(`${o}${u}`);
      break;
    }
    case "pointerEvents": {
      let c = n;
      n === "auto" || n === "box-only" ? (c = "auto", n === "box-only" && i.push(`${o}>*${ec}`)) : (n === "none" || n === "box-none") && (c = "none", n === "box-none" && i.push(`${o}>*${Qa}`));
      const u = kt([["pointerEvents", c]], !0);
      i.push(`${o}${u}`);
      break;
    }
    default: {
      const c = kt([[t, n]], s);
      i.push(`${o}${c}`);
      break;
    }
  }
  return (r == null ? void 0 : r.name) === "hover" && (i = i.map((c) => `@media not all and (hover: none) { ${c} }`)), i;
}
const Qa = kt([["pointerEvents", "auto"]], !0), ec = kt([["pointerEvents", "none"]], !0);
function H(...e) {
  if (process.env.NODE_ENV !== "production")
    return console.info(...e);
}
function _s(e, t) {
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
  if (e in en)
    return en[e].map((n) => [n, t]);
}
const yo = ["Top", "Right", "Bottom", "Left"], xo = ["Right", "Left"], So = ["Top", "Bottom"], Eo = ["X", "Y"], en = {
  borderColor: ["TopColor", "RightColor", "BottomColor", "LeftColor"],
  borderRadius: [
    "TopLeftRadius",
    "TopRightRadius",
    "BottomRightRadius",
    "BottomLeftRadius"
  ],
  borderWidth: ["TopWidth", "RightWidth", "BottomWidth", "LeftWidth"],
  margin: yo,
  marginHorizontal: xo,
  marginVertical: So,
  overscrollBehavior: Eo,
  padding: yo,
  paddingHorizontal: xo,
  paddingVertical: So,
  // react-native only supports borderStyle
  borderStyle: ["TopStyle", "RightStyle", "BottomStyle", "LeftStyle"],
  // react-native doesn't support X / Y
  overflow: Eo
};
var Fo;
for (const e in en) {
  const t = e.slice(0, ((Fo = /[A-Z]/.exec(e)) == null ? void 0 : Fo.index) ?? e.length);
  en[e] = en[e].map((n) => `${t}${n}`);
}
function Ts(e, t = !1) {
  const n = {};
  for (let r in e) {
    const o = e[r];
    if (o == null)
      continue;
    if (r in ut) {
      n[r] = Ts(o, t);
      continue;
    }
    const s = t ? o : Oe(o, r), i = _s(r, s);
    i ? Object.assign(n, Object.fromEntries(i)) : n[r] = s;
  }
  return Nr(n), n;
}
function tc(e) {
  const { curProps: t, conf: n, context: r, theme: o } = e;
  let s = n.fontsParsed;
  r != null && r.language && (s = pr(n.fontsParsed, r.language));
  const i = as(
    e.fontFamily || e.curProps.fontFamily || e.conf.defaultFont
  );
  return {
    fonts: s,
    tokens: n.tokensParsed,
    theme: o,
    fontFamily: i,
    font: s[i] || s[e.conf.defaultFont],
    // TODO do this in splitstlye
    // we avoid passing in default props for media queries because that would confuse things like SizableText.size:
    props: On(t, {
      // handles shorthands
      get(c, u) {
        const l = n.inverseShorthands[u];
        if (l && Reflect.has(c, l))
          return Reflect.get(c, l);
        if (Reflect.has(c, u))
          return Reflect.get(c, u);
      }
    })
  };
}
const Gn = /* @__PURE__ */ new WeakMap();
function pr(e, t) {
  if (Gn.has(t))
    return Gn.get(t);
  const n = {
    ...e,
    ...Object.fromEntries(
      Object.entries(t).map(([r, o]) => {
        if (o === "default")
          return [];
        const s = `$${r}_${o}`;
        return [`$${r}`, e[s]];
      })
    )
  };
  return Gn.set(t, n), n;
}
const Rs = (e) => e && !Array.isArray(e) && typeof e == "object", Os = (e, t, n, r) => {
  var m;
  if (e === "elevationAndroid")
    return;
  if (t === "unset") {
    const p = (m = n.conf.unset) == null ? void 0 : m[e];
    p != null && (t = p);
  }
  const o = n.styleProps.fallbackProps || r, s = o ? new Proxy(n, {
    get(p, E) {
      return E === "curProps" ? o : Reflect.get(p, E);
    }
  }) : n, { conf: i, styleProps: c, fontFamily: u, staticConfig: l } = s, { variants: f } = l;
  if (process.env.NODE_ENV === "development" && u && u[0] === "$" && !(u in i.fontsParsed) && console.warn(
    `Warning: no fontFamily "${u}" found in config: ${Object.keys(i.fontsParsed).join(
      ", "
    )}`
  ), !c.noExpand && f && e in f) {
    s.curProps[e] = t;
    const p = Cs(e, t, c, s, "");
    if (p)
      return p;
  }
  let d = !1;
  if (c.disableExpandShorthands || e in i.shorthands && (d = !0, e = i.shorthands[e]), t && (t[0] === "$" ? t = mr(e, t, c.resolveValues, s) : et(t) && (t = _r(e, t, c.resolveValues))), d || t != null) {
    const p = (c.noExpand ? null : _s(e, t)) || [
      [e, t]
    ];
    return e === "fontFamily" && wr.set(p, Ps), p;
  }
}, Cs = (e, t, n, r, o) => {
  const { staticConfig: s, conf: i, debug: c } = r, { variants: u } = s;
  if (!u)
    return;
  let l = sc(u[e], t, i);
  if (process.env.NODE_ENV === "development" && c === "verbose" && (console.groupCollapsed(`♦️♦️♦️ resolve variant ${e}`), console.info({
    key: e,
    value: t,
    variantValue: l,
    variants: u,
    curProps: { ...r.curProps }
  }), console.groupEnd()), !l) {
    if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof t != "boolean") {
      const d = s.componentName || "[UnnamedComponent]";
      console.warn(
        `No variant found: ${d} has variant "${e}", but no matching value "${t}"`
      );
    }
    return;
  }
  if (typeof l == "function") {
    const d = l, m = tc(r);
    l = d(t, m), process.env.NODE_ENV === "development" && c === "verbose" && (console.groupCollapsed("   expanded functional variant", e), console.info({ fn: d, variantValue: l, extras: m }), console.groupEnd());
  }
  let f;
  if (Rs(l)) {
    const d = l.fontFamily || l[i.inverseShorthands.fontFamily];
    d && (f = nc(d, i), r.fontFamily = f, process.env.NODE_ENV === "development" && c === "verbose" && console.info("   updating font family", f)), l = $s(
      e,
      l,
      n,
      r,
      o
    );
  }
  if (l) {
    const d = Ts(
      l,
      !!n.noNormalize
    ), m = Object.entries(d);
    return f && f[0] === "$" && wr.set(m, as(f)), m;
  }
};
function nc(e, t) {
  if (et(e)) {
    const n = No.get(e);
    if (n)
      return n;
    for (const r in t.fontsParsed) {
      const o = t.fontsParsed[r].family;
      if (et(o) && (No.set(o, r), o === e))
        return r;
    }
  } else if (typeof e == "string" && e[0] === "$")
    return e;
}
const No = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), rc = (e) => e && wr.get(e), $s = (e, t, n, r, o) => {
  var d;
  const { conf: s, staticConfig: i, debug: c, theme: u } = r, { variants: l } = i, f = {};
  process.env.NODE_ENV === "development" && c === "verbose" && console.info("   - resolveTokensAndVariants", e, t);
  for (const m in t) {
    const p = s.shorthands[m] || m, E = t[m];
    if (n.noExpand)
      f[p] = E;
    else if (l && p in l) {
      if (r.curProps[p] = E, o && o === e)
        f[p] = // SYNC WITH *1
        E[0] === "$" ? mr(p, E, n.resolveValues, r) : E;
      else {
        const S = Cs(p, E, n, r, e);
        if (S)
          for (const [h, x] of S)
            x != null && (h in ut ? (f[h] ?? (f[h] = {}), Object.assign(f[h], x)) : f[h] = x);
      }
      continue;
    }
    if (et(E)) {
      f[p] = _r(p, E, n.resolveValues);
      continue;
    }
    if (typeof E == "string") {
      const S = (
        // SYNC WITH *1
        E[0] === "$" ? mr(p, E, n.resolveValues, r) : E
      );
      f[p] = S;
      continue;
    }
    if (Rs(E)) {
      const S = $s(p, E, n, r, e);
      process.env.NODE_ENV === "development" && c === "verbose" && console.info("object", p, S), f[p] ?? (f[p] = {}), Object.assign(f[p], S);
    } else
      f[p] = E;
    process.env.NODE_ENV === "development" && c && ((d = f[p]) == null ? void 0 : d[0]) === "$" && console.warn(
      `⚠️ Missing token in theme ${u.name}:`,
      p,
      f[p],
      u
    );
  }
  return f;
}, oc = ["size", "color", "radius", "space", "zIndex"].map((e) => ({
  name: e,
  spreadName: `...${e}`
}));
function sc(e, t, n) {
  if (typeof e == "function")
    return e;
  const r = e[t];
  if (r)
    return r;
  if (t != null) {
    const { tokensParsed: o } = n;
    for (const { name: i, spreadName: c } of oc)
      if (c in e && t in o[i])
        return e[c];
    const s = e["...fontSize"];
    if (s && n.fontSizeTokens.has(t))
      return s;
  }
  return e[`:${typeof t}`] || e["..."];
}
const ic = {
  fontSize: "size",
  fontWeight: "weight"
};
let Ps = null;
const mr = (e, t, n = "none", r) => {
  var d, m, p, E;
  if (n === "none")
    return t;
  const { theme: o, conf: s = Ke(), context: i, fontFamily: c } = r, u = s.tokensParsed;
  let l, f = !1;
  if (o && t in o)
    l = o[t], process.env.NODE_ENV === "development" && r.debug === "verbose" && console.info(` - resolving ${e} to theme value ${t}: ${(d = l == null ? void 0 : l.get) == null ? void 0 : d.call(l)}`), f = !0;
  else if (t in s.specificTokens)
    f = !0, l = s.specificTokens[t];
  else {
    switch (e) {
      case "fontFamily": {
        l = ((m = (i != null && i.language ? pr(s.fontsParsed, i.language) : s.fontsParsed)[t]) == null ? void 0 : m.family) || t, Ps = t, f = !0;
        break;
      }
      case "fontSize":
      case "lineHeight":
      case "letterSpacing":
      case "fontWeight": {
        const S = s.defaultFont || "$body", h = c || S;
        if (h) {
          const x = i != null && i.language ? pr(s.fontsParsed, i.language) : s.fontsParsed;
          l = ((E = (p = x[h] || x[S]) == null ? void 0 : p[ic[e] || e]) == null ? void 0 : E[t]) || t, f = !0;
        }
        break;
      }
    }
    for (const S in jt)
      if (e in jt[S]) {
        const h = u[S][t];
        h != null && (l = h, f = !0);
      }
    if (!f) {
      const S = u.space[t];
      S != null && (l = S, f = !0);
    }
  }
  if (f) {
    const S = _r(e, l, n);
    return process.env.NODE_ENV === "development" && r.debug === "verbose" && console.info("resolved", n, l, S), S;
  }
  return process.env.NODE_ENV === "development" && ur && r.debug === "verbose" && (console.groupCollapsed("  ﹒ propMap (val)", e, t), console.info({ valOrVar: l, theme: o, hasSet: f }, o ? o[e] : ""), console.groupEnd()), t;
};
function _r(e, t, n) {
  if (n === "none")
    return t;
  if (et(t)) {
    if (n === "value")
      return t.val;
    const r = t == null ? void 0 : t.get;
    return typeof r == "function" ? r(n === "web" ? "web" : void 0) : t.variable;
  }
  return t;
}
const bn = process.env.IS_STATIC === "is_static";
let Nt;
const Vt = "-", ac = (e, t, n, r, o, s, i, c, u, l) => {
  var dt, Ge, tt, te, qe;
  Nt = Nt || Ke(), s.isAnimated && Nt.animations.isReactNative && !s.noNormalize && (s.noNormalize = "values");
  const { shorthands: f } = Nt, {
    isHOC: d,
    isText: m,
    variants: p,
    isReactNative: E,
    inlineProps: S,
    inlineWhenUnflattened: h,
    parentStaticConfig: x,
    acceptsClassName: y
  } = t, R = m ? os : It, v = {}, $ = s.mediaState || Ft, O = {}, C = y && cn && !s.noClassNames, w = [], M = {}, k = {};
  let J = null, F = e.space, X = !1, z, pe, Ce, K = {}, se = "", Ue = 0;
  const Y = {
    curProps: { ...e },
    classNames: M,
    conf: Nt,
    props: e,
    styleProps: s,
    componentState: o,
    staticConfig: t,
    style: K,
    theme: n,
    usedKeys: O,
    viewProps: v,
    context: c,
    debug: l
  };
  if (process.env.NODE_ENV === "development" && l && l !== "profile" && Le && (console.groupCollapsed("getSplitStyles (collapsed)"), H({
    props: e,
    staticConfig: t,
    shouldDoClasses: C,
    styleProps: s,
    componentState: o,
    styleState: Y,
    theme: { ...n }
  }), console.groupEnd()), typeof e.className == "string")
    for (const P of e.className.split(" "))
      if (P[0] === "_") {
        const [g, T] = P.slice(1).split("-"), ee = T[0] === "_", ce = T[0] === "0", me = ee || ce;
        let le = f[g];
        if (ee) {
          let Ae = T.slice(1);
          Ae = Ae.slice(0, Ae.indexOf("_")), le += `${Vt}${Ae}`;
        } else if (ce) {
          const Ae = T.slice(1);
          le += `${Vt}${Ae}`;
        }
        O[le] = 1, qt(k, M, le, P, me);
      } else
        P && (se += ` ${P}`);
  for (const P in e) {
    let g = P, T = e[P];
    if (s.disableExpandShorthands || g in f && (g = f[g]), g === "className" || g in O)
      continue;
    if (g in Lt && !d) {
      if (g === "group") {
        const A = `t_group_${T}`, ne = Nt.settings.webContainerType || "inline-size", U = {
          identifier: A,
          property: "container",
          rules: [
            `.${A} { container-name: ${T}; container-type: ${ne}; }`
          ]
        };
        Zt(w, U);
      }
      continue;
    }
    const ee = typeof T;
    if (Y.curProps[g] = T, ee === "string" && T[0] === "_" && (g in R || g.includes("-"))) {
      process.env.NODE_ENV === "development" && l && H(`Adding compiled style ${g}: ${T}`), C ? (M[g] = T, delete K[g]) : (K[g] = bo(g, T), delete se[g]);
      continue;
    }
    if (g === "dataSet") {
      for (const A in T)
        v[`data-${dc(A)}`] = T[A];
      continue;
    }
    if (g[0] === "_" && g.startsWith("_style")) {
      _o(Y, T);
      continue;
    }
    if (!s.noExpand) {
      if (g === "disabled" && T === !0 && (v["aria-disabled"] = !0, (u === "button" || u === "form" || u === "input" || u === "select" || u === "textarea") && (v.disabled = !0), !(p != null && p.disabled)))
        continue;
      if (g === "testID") {
        v[E ? g : "data-testid"] = T;
        continue;
      }
      if (g === "id" || g === "nativeID") {
        E ? v.nativeID = T : v.id = T;
        continue;
      }
      let A = !1;
      if (E) {
        if (g in xn || g.startsWith("accessibility")) {
          v[g] = T;
          continue;
        }
      } else if (A = !0, g in xn) {
        v[xn[g]] = T;
        continue;
      } else
        switch (g) {
          case "accessibilityRole": {
            T === "none" ? v.role = "presentation" : v.role = mc[T] || T;
            continue;
          }
          case "accessibilityLabelledBy":
          case "accessibilityFlowTo":
          case "accessibilityControls":
          case "accessibilityDescribedBy": {
            v[`aria-${g.replace("accessibility", "").toLowerCase()}`] = uc(T);
            continue;
          }
          case "accessibilityKeyShortcuts": {
            Array.isArray(T) && (v["aria-keyshortcuts"] = T.join(" "));
            continue;
          }
          case "accessibilityLiveRegion": {
            v["aria-live"] = T === "none" ? "off" : T;
            continue;
          }
          case "accessibilityReadOnly": {
            v["aria-readonly"] = T, (u === "input" || u === "select" || u === "textarea") && (v.readOnly = !0);
            continue;
          }
          case "accessibilityRequired": {
            v["aria-required"] = T, (u === "input" || u === "select" || u === "textarea") && (v.required = T);
            continue;
          }
          default:
            A = !1;
        }
      if (A)
        continue;
      if (T && T[0] === "_") {
        const ne = g in It, U = !ne && g.includes(Vt) && It[g.split(Vt)[0]];
        if (ne || U) {
          process.env.NODE_ENV === "development" && l && H("tamagui classname prop", g, T), C ? (qt(k, M, g, T, U), delete K[g]) : (K[g] = bo(g, T), delete se[g]);
          continue;
        }
      }
    }
    const ce = g in R, me = g in f;
    let le = !ce && p && g in p;
    const Ae = me || ce || le;
    let _e = g in sr, ye = !Ae && !_e && lo(g), re = !!(ye || _e);
    const nt = re || le && !s.noExpand || ce || me;
    if (nt && (e.asChild === "except-style" || e.asChild === "except-style-web"))
      continue;
    const xe = !nt || // is in parent variants
    d && (x == null ? void 0 : x.variants) && g in x.variants || (S == null ? void 0 : S.has(g)), Ot = (dt = x == null ? void 0 : x.variants) == null ? void 0 : dt[g], rt = !!(d && (me || ce || re || Ot || g in Lt)), Me = xe || rt;
    if (process.env.NODE_ENV === "development" && l === "verbose" && (console.groupCollapsed(
      `🔹🔹🔹🔹 ${P}${g !== P ? ` (shorthand for ${g})` : ""} ${Me ? "(pass)" : ""} 🔹🔹🔹🔹`
    ), H({ isVariant: le, valInit: T, shouldPassProp: xe }), Le && H({
      variants: p,
      variant: p == null ? void 0 : p[g],
      isVariant: le,
      isHOCShouldPassThrough: rt,
      curProps: { ...Y.curProps },
      parentStaticConfig: x
    }), console.groupEnd()), Me && (Ro(v, g, T, re), !le) || !s.noSkip && g in Lt)
      continue;
    m && T && (g === "fontFamily" || g === f.fontFamily) && T in Nt.fontsParsed && (Y.fontFamily = T);
    const Be = re || !le && !ce ? [[g, T]] : Os(g, T, Y), Ct = rc(Be);
    if (Ct && (Y.fontFamily = Ct), process.env.NODE_ENV === "development" && l === "verbose") {
      console.groupCollapsed("  💠 expanded", g, T);
      try {
        !_t && ur && (H({
          expanded: Be,
          styleProps: s,
          componentState: o,
          isVariant: le,
          variant: p == null ? void 0 : p[g],
          shouldPassProp: xe,
          isHOCShouldPassThrough: rt,
          theme: n,
          usedKeys: { ...O },
          curProps: { ...Y.curProps }
        }), H("expanded", Be, `
usedKeys`, { ...O }, `
current`, {
          ...K
        }));
      } catch {
      }
      console.groupEnd();
    }
    if (Be) {
      for (const [A, ne] of Be)
        if (!(ne == null || A in O)) {
          if (_e = A in sr, ye = !_e && !ce && lo(A), re = !!(ye || _e), le = p && A in p, (S != null && S.has(A) || bn && (h != null && h.has(A))) && (v[A] = e[A] ?? ne), s.noExpand && _e || d && (re || ((Ge = x == null ? void 0 : x.variants) == null ? void 0 : Ge[g]))) {
            Ro(v, A, ne, re), process.env.NODE_ENV === "development" && l === "verbose" && (console.groupCollapsed(` - passing down prop ${A}`), H({ val: ne, after: { ...v[A] } }), console.groupEnd());
            continue;
          }
          if (_e) {
            if (!ne)
              continue;
            const U = wo(
              Y,
              A,
              ne,
              s.noClassNames
            ), ie = ut[A], Fe = A === "enterStyle", Se = A === "exitStyle";
            if (process.env.NODE_ENV === "development" && !s.isAnimated && !o.unmounted && (Fe || Se) && console.warn(
              `No animation prop given to component ${t.componentName || ""} ${e["data-at"] || ""} with enterStyle / exitStyle, these styles will be ignored`,
              { props: e }
            ), !ie || Se && !s.isExiting)
              continue;
            if ((!C || bn) && (J || (J = {}), J[A] || (J[A] = {}), bn)) {
              Object.assign(J[A], U);
              continue;
            }
            if (C && !Fe && !Se) {
              const we = dr(U, ie);
              process.env.NODE_ENV === "development" && l === "verbose" && (console.groupCollapsed("pseudo (classes)", A), H({ pseudoStyleObject: U, pseudoStyles: we }), console.groupEnd());
              for (const ue of we) {
                const Q = `${ue.property}${Vt}${ie.name}`;
                Q in O || (Zt(w, ue), qt(
                  k,
                  M,
                  Q,
                  ue.identifier,
                  re,
                  !0
                ));
              }
            } else {
              const we = ie.stateKey || ie.name, ue = o[we];
              let Q = Se ? !s.isExiting : !ue;
              !Le && Fe && (Q = !1), process.env.NODE_ENV === "development" && l === "verbose" && (console.groupCollapsed("pseudo", A, { isDisabled: Q }), H(U, {
                isDisabled: Q,
                descriptorKey: we,
                descriptor: ie,
                pseudoState: ue,
                state: { ...o }
              }), console.groupEnd());
              const G = ie.priority;
              for (const ae in U) {
                const Te = U[ae];
                if (Q) {
                  if (ae in To && !(ae in O)) {
                    const $e = To[ae];
                    qn(Y, ae, $e);
                  }
                } else {
                  const $e = O[ae] || 0, De = G >= $e;
                  De && (J || (J = {}), J[A] || (J[A] = {}), J[A][ae] = Te, qn(Y, ae, Te)), process.env.NODE_ENV === "development" && l === "verbose" && H("    subKey", ae, De, {
                    importance: G,
                    curImportance: $e,
                    pkey: ae,
                    val: Te,
                    transforms: { ...Y.transforms }
                  });
                }
              }
              if (!Q)
                for (const ae in ne) {
                  const Te = f[ae] || ae;
                  O[Te] = Math.max(G, O[Te] || 0);
                }
            }
            continue;
          } else if (ye) {
            if (!ne)
              continue;
            if (ye === "platform") {
              const Se = A.slice(10);
              if (
                // supports web, ios, android
                Se !== Ki && // supports web, native
                Se !== "web"
              )
                continue;
            }
            X || (X = !0);
            const U = wo(
              Y,
              A,
              ne,
              // TODO try true like pseudo
              !1
            ), ie = A.slice(1);
            process.env.NODE_ENV === "development" && l === "verbose" && H(`  📺 ${A}`, {
              key: A,
              val: ne,
              mediaStyle: U,
              props: e,
              shouldDoClasses: C,
              componentState: o
            });
            const Fe = ne.space;
            if ((Fe || !C) && (Array.isArray(X) || (X = []), X.push(ie)), C) {
              if (Fe && (delete U.space, $[ie])) {
                const ue = gs(
                  ie,
                  "space",
                  O,
                  !0
                );
                ue && (F = ne.space, O.space = ue, process.env.NODE_ENV === "development" && l === "verbose" && H(
                  `Found more important space for current media ${ie}: ${ne} (importance: ${ue})`
                ));
              }
              const Se = vo(U, l), we = Ue;
              Ue += 1;
              for (const ue of Se) {
                const Q = Fa(
                  ue,
                  ie,
                  ps,
                  ye,
                  !1,
                  we
                );
                process.env.NODE_ENV === "development" && l === "verbose" && H("📺 media style:", Q);
                const G = `${ue.property}${Vt}${ie}`;
                G in O || (Zt(w, Q), qt(k, M, G, Q.identifier, !0, !0));
              }
            } else {
              const Se = ye === "theme", we = ye === "group";
              if (!Se && ye !== "platform" && !we && !$[ie])
                continue;
              let ue = 0;
              if (Se) {
                z = !0;
                const Q = ie.slice(6);
                if (!(r === Q || r.startsWith(Q)))
                  continue;
              } else if (we) {
                const Q = xs(ie), G = Q.name, ae = c == null ? void 0 : c.groups.state[G];
                if (!ae) {
                  process.env.NODE_ENV === "development" && l && console.warn(`No parent with group prop, skipping styles: ${G}`);
                  continue;
                }
                const Te = Q.pseudo, $e = Q.media, De = (tt = o.group) == null ? void 0 : tt[G];
                if ($e) {
                  Ce || (Ce = /* @__PURE__ */ new Set()), Ce.add($e);
                  const ze = De == null ? void 0 : De.media;
                  let Ee = ze == null ? void 0 : ze[$e];
                  if (!ze && ae.layout && (Ee = bs($e, ae.layout)), !Ee)
                    continue;
                  ue = 2;
                }
                if (Te) {
                  if (pe || (pe = /* @__PURE__ */ new Set()), pe.add(G), !((te = (De || // fallback to context initially
                  c.groups.state[G]).pseudo) != null && te[Te]))
                    continue;
                  ue = fa[Te];
                }
              }
              for (const Q in U) {
                if (Q === "space") {
                  F = T.space;
                  continue;
                }
                Na(
                  K,
                  ie,
                  Q,
                  U[Q],
                  O,
                  $[ie],
                  ue
                ), A === "fontFamily" && (Y.fontFamily = U.fontFamily);
              }
            }
            continue;
          }
          if (
            // is HOC we can just pass through the styles as props
            // this fixes issues where style prop got merged with wrong priority
            !d && A in R
          ) {
            qn(Y, A, ne);
            continue;
          }
          le || (v[A] = ne);
        }
      if (process.env.NODE_ENV === "development" && l === "verbose") {
        console.groupCollapsed(" ✔️ expand complete", g);
        try {
          H("style", { ...K }), H("transforms", { ...k }), H("viewProps", { ...v });
        } catch {
        }
        console.groupEnd();
      }
    }
  }
  if (e.style && _o(Y, e.style), s.noNormalize !== !1 && (Nr(K), !t.isReactNative && ws(K), Y.transforms && (Object.entries(Y.transforms).sort(([P], [g]) => P.localeCompare(g)).forEach(([P, g]) => {
    As(K, P, g, !0);
  }), !t.isReactNative && !s.isAnimated && Array.isArray(K.transform) && (K.transform = Ns(K.transform))), i)) {
    if (C)
      for (const P in i.classNames) {
        const g = i.classNames[P];
        P in K || P in M || (M[P] = g);
      }
    if (!C)
      for (const P in i.style)
        P in M || P in K || (K[P] = i.style[P]);
  }
  if (C) {
    let P, g = !1;
    if (!K.$$css) {
      const T = vo(K);
      for (const ee of T) {
        const ce = ee.property, me = s.isAnimated && s.noClassNames && (!e.animateOnly || e.animateOnly.includes(ce)), le = !me && !s.isAnimated && ((qe = e.animateOnly) == null ? void 0 : qe.includes(ce));
        me ? (P || (P = {}), P[ce] = K[ce]) : le ? (P || (P = {}), P[ce] = ee.value, g = !0) : (Zt(w, ee), qt(
          k,
          M,
          ce,
          ee.identifier,
          !1,
          !0
        ));
      }
      (g || !bn && !s.keepStyleSSR) && (K = P || {});
    }
    if (k)
      for (const T in k) {
        if (!k[T]) {
          process.env.NODE_ENV === "development" && console.warn("Error no transform", k, T);
          continue;
        }
        const [ee, ce] = k[T], me = `_transform${ee}`;
        if (Le && !un[me]) {
          const le = `.${me} { transform: ${ce}; }`;
          Zt(w, {
            identifier: me,
            rules: [le],
            property: T
          });
        }
        M[T] = me;
      }
  }
  if (!E && v.tabIndex == null) {
    const P = v.focusable ?? v.accessible;
    v.focusable && delete v.focusable;
    const g = v.role;
    P === !1 && (v.tabIndex = "-1"), // These native elements are focusable by default
    u === "a" || u === "button" || u === "input" || u === "select" || u === "textarea" ? (P === !1 || e.accessibilityDisabled === !0) && (v.tabIndex = "-1") : (
      // These roles are made focusable by default
      (g === "button" || g === "checkbox" || g === "link" || g === "radio" || // @ts-expect-error (consistent with RNW)
      g === "textbox" || g === "switch") && P !== !1 && (v.tabIndex = "0")
    ), P && (v.tabIndex = "0", delete v.focusable);
  }
  const ft = {
    space: F,
    hasMedia: X,
    fontFamily: Y.fontFamily,
    viewProps: v,
    // @ts-expect-error
    style: K,
    pseudos: J,
    classNames: M,
    rulesToInsert: w,
    dynamicThemeAccess: z,
    pseudoGroups: pe,
    mediaGroups: Ce
  };
  if (se && (M.className = se), process.env.NODE_ENV === "development" && l === "verbose" && ur) {
    console.groupCollapsed("  🔹 ===>");
    try {
      const P = {
        ...ft,
        className: se,
        componentState: o,
        transforms: k,
        viewProps: v,
        viewPropsOrder: Object.keys(v),
        rulesToInsert: w,
        parentSplitStyles: i
      };
      for (const g in P)
        H(g, P[g]);
    } catch {
    }
    console.groupEnd();
  }
  return ft;
};
function qt(e, t, n, r, o = !1, s = !1) {
  if (r)
    if (!s && r[0] === "_" && r.startsWith("_transform-")) {
      const i = o ? n : "transform";
      let c = un[r];
      Le && !c && (ia(), c = un[r], !c && cn && r[0] !== "_" && (c = r)), e[i] || (e[i] = ["", ""]), e[i][0] += r.replace("_transform", ""), c && (e[i][1] += c);
    } else
      t[n] = r;
}
function qn(e, t, n, r = !1) {
  const { classNames: o, viewProps: s, style: i, usedKeys: c, styleProps: u } = e;
  if ((n == null ? void 0 : n[0]) === "_")
    o[t] = n, c[t] || (c[t] = 1);
  else if (t in yr)
    e.transforms || (e.transforms = {}), e.transforms[t] = n;
  else {
    const l = !r && !u.noNormalize ? Oe(n, t) : n;
    t in es ? s[t] = l : i[t] = l;
  }
}
const wo = (e, t, n, r) => {
  const { staticConfig: o, props: s, conf: i, styleProps: c } = e, u = {};
  for (let l in n) {
    const f = n[l];
    l = i.shorthands[l] || l;
    const d = Os(l, f, e, { ...s, ...s[t] });
    if (!(!d || !o.isHOC && l in Lt && !c.noSkip))
      for (const [m, p] of d)
        !r && m in yr ? As(u, m, p) : u[m] = c.noNormalize ? p : Oe(p, l);
  }
  return c.noNormalize || Nr(u), u;
};
function _o(e, t) {
  if (!t)
    return;
  const n = Array.isArray(t) ? t : [t];
  for (const r of n) {
    if (!r)
      continue;
    const o = r.$$css;
    Object.assign(o ? e.classNames : e.style, r);
  }
}
const cc = Ks || br, lc = (...e) => {
  const t = ac(...e);
  return cc(() => {
    ua(t.rulesToInsert);
  }, [t.rulesToInsert]), t;
};
function Zt(e, t) {
  fs(t.identifier) && (us(t.identifier, t.rules), e.push(t));
}
function uc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const To = {
  opacity: 1,
  scale: 1,
  rotate: "0deg",
  rotateY: "0deg",
  rotateX: "0deg",
  x: 0,
  y: 0
}, fc = (e) => `-${e.toLowerCase()}`, dc = (e) => e.replace(/[A-Z]/g, fc), As = (e, t, n, r = !1) => {
  typeof e.transform != "string" && (e.transform || (e.transform = []), e.transform[r ? "unshift" : "push"]({
    [pc[t] || t]: n
  }));
}, pc = {
  x: "translateX",
  y: "translateY"
}, Lt = {
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
process.env.NODE_ENV === "test" && (Lt["data-test-renders"] = 1);
Object.assign(Lt, {
  elevationAndroid: 1,
  allowFontScaling: !0,
  adjustsFontSizeToFit: !0
});
const mc = {
  adjustable: "slider",
  header: "heading",
  image: "img",
  link: "link",
  none: "presentation",
  summary: "region"
};
function Ro(e, t, n, r = !1) {
  if (r) {
    const o = {
      ...e[t],
      ...n
    };
    delete e[t], e[t] = o;
  } else
    e[t] = n;
}
const hc = (e, t, n) => {
  const r = {};
  for (const o in e)
    Oo(r, e, t, o, n);
  if (t)
    for (const o in t)
      Oo(r, t, void 0, o, n);
  return r;
};
function Oo(e, t, n, r, o) {
  const s = (o == null ? void 0 : o[r]) || null;
  if (n && (r in n || s && s in n))
    return;
  const i = t[r];
  if (r in ut) {
    e[r] = {
      ...e[r],
      ...i
    };
    return;
  }
  e[s || r] = i;
}
function gc(e) {
  return On(e || {}, {
    has(t, n) {
      return Reflect.has(t, Co(n));
    },
    get(t, n) {
      return Reflect.get(t, Co(n));
    }
  });
}
const Co = (e) => typeof e == "string" && e[0] === "$" ? e.slice(1) : e, Ds = tr(null), $o = { name: "" };
function Vs(e) {
  return e.name || e.componentName || e.inverse || e.reset;
}
let bc = 0;
class vc {
  constructor(t = {}, n) {
    Et(this, "id", bc++);
    Et(this, "themeListeners", /* @__PURE__ */ new Set());
    Et(this, "parentManager", null);
    Et(this, "state", $o);
    Et(this, "_allKeys", null);
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
    const o = this.getState(t, r);
    if (n && n !== $o && !o)
      return r == null ? void 0 : r.state;
    if (this.getStateShouldChange(o, n))
      return o;
  }
  getStateShouldChange(t, n = this.state) {
    return !(!(t != null && t.theme) || t.theme === (n == null ? void 0 : n.theme));
  }
  getState(t = this.props, n = this.parentManager) {
    return yc(t, n) || null;
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
function yc(e, t) {
  var x, y;
  if (e.name && e.reset)
    throw new Error(
      process.env.NODE_ENV === "production" ? "❌004" : "Cannot reset and set a new name at the same time."
    );
  if (!Vs(e))
    return null;
  const n = Ji(), [r, o] = Sc(t), s = !!(t != null && t.state.isComponent), i = e.reset && !s ? 1 : 0;
  let c = r[i], u = r[i + 1];
  if (!c && e.reset)
    return process.env.NODE_ENV !== "production" && console.warn("Cannot reset, no parent theme exists"), null;
  const { componentName: l } = e;
  let f = null, d = (c == null ? void 0 : c.state.name) || "";
  c != null && c.state.isComponent && (d = d.replace(/_[A-Z][A-Za-z]+/, ""));
  const m = e.reset ? d : e.name || "", p = o.map((R) => (R == null ? void 0 : R.state.name) || "");
  s && p.shift();
  const E = d.split(mn), S = E.length, h = e.componentName && !m ? S : 0;
  process.env.NODE_ENV !== "production" && typeof e.debug == "string" && typeof window < "u" && (console.groupCollapsed("ThemeManager.getState()"), console.info({ props: e, baseName: d, base: E, min: h, max: S }));
  for (let R = S; R >= h; R--) {
    let v = E.slice(0, R).join(mn);
    e.inverse && (v = xc(v));
    let $ = [];
    if (v && v !== d && $.push(v), m && $.unshift(v ? `${v}_${m}` : m), R === 1) {
      const C = $.findIndex((w) => !w.includes("_"));
      C > 0 && $.splice(C, 0, m);
    }
    if (l && !e.reset) {
      let C = [];
      if (m) {
        const w = v.slice(0, v.indexOf(mn));
        C.push(`${w}_${m}_${l}`);
      }
      if (C.push(`${v}_${l}`), m) {
        const w = E.slice(0, R - 1).join(mn);
        if (w) {
          const k = `${w}_${m}_${l}`;
          C.unshift(k);
        }
        const M = `${v}_${m}_${l}`;
        C.unshift(M);
      }
      $ = [...C, ...$, ...p];
    }
    const O = $.find((C) => C in n);
    if (process.env.NODE_ENV !== "production" && typeof e.debug == "string" && console.info(" - ", { found: O, potentials: $, baseManager: c, nextName: m, baseName: d, prefix: v }), O) {
      const C = O.split("_"), [w, ...M] = C, k = C[C.length - 1], J = k[0] === k[0].toUpperCase(), F = w === "light" ? "light" : w === "dark" ? "dark" : void 0, X = Aa, z = `${X}sub_theme ${X}${!F || !M.length ? w : M.join("_")}`, pe = (y = (x = c || u) == null ? void 0 : x.state) == null ? void 0 : y.name;
      f = {
        name: O,
        parentName: pe,
        theme: n[O],
        className: z,
        isComponent: J,
        scheme: F
      };
      break;
    }
  }
  return process.env.NODE_ENV !== "production" && typeof e.debug == "string" && typeof window < "u" && (console.warn("ThemeManager.getState():", { result: f }), console.trace(), console.groupEnd()), f;
}
const xc = (e) => e.startsWith("light") ? e.replace(/^light/, "dark") : e.replace(/^dark/, "light");
function Sc(e) {
  const t = [], n = [];
  let r = e;
  for (; r; )
    n.push(r), r.state.isComponent && t.push(r), r = r.parentManager;
  return [n, t];
}
const Ec = Symbol(), Nc = (e) => {
  const t = rn([]), n = Ms(
    e,
    !1,
    t.current,
    _t ? void 0 : () => {
      var c, u;
      const i = ((c = e.shouldUpdate) == null ? void 0 : c.call(e)) ?? (t.current.length > 0 ? !0 : void 0);
      return process.env.NODE_ENV === "development" && e.debug && e.debug !== "profile" && console.info("  🎨 useTheme() shouldUpdate?", i, {
        shouldUpdateProp: (u = e.shouldUpdate) == null ? void 0 : u.call(e),
        keys: [...t.current]
      }), i;
    }
  ), { themeManager: r, state: o } = n;
  o != null && o.theme || process.env.NODE_ENV === "development" && process.env.TAMAGUI_DISABLE_NO_THEME_WARNING !== "1" && console.warn(
    `[tamagui] No theme found, this could be due to an invalid theme name (given theme props ${JSON.stringify(
      e
    )}).

If this is intended and you are using Tamagui without any themes, you can disable this warning by setting the environment variable TAMAGUI_DISABLE_NO_THEME_WARNING=1`
  );
  const s = Tn(() => !r || !(o != null && o.theme) ? {} : wc(o, e.deopt, r, t.current, e.debug), [o == null ? void 0 : o.theme, r, e.deopt, e.debug]);
  return process.env.NODE_ENV === "development" && e.debug === "verbose" && (console.groupCollapsed("  🔹 useTheme =>", o == null ? void 0 : o.name), console.info("returning state", n, "from props", e), console.groupEnd()), [n, s];
};
function wc({ theme: e, name: t, scheme: n }, r = !1, o, s, i) {
  if (!e)
    return {};
  Ke();
  function c(u) {
    s && !s.includes(u) && (s.push(u), process.env.NODE_ENV === "development" && i && console.info(` 🎨 useTheme() tracking new key: ${u}`));
  }
  return On(e, {
    has(u, l) {
      if (Reflect.has(e, l))
        return !0;
      if (typeof l == "string")
        return l[0] === "$" && (l = l.slice(1)), o == null ? void 0 : o.allKeys.has(l);
    },
    get(u, l) {
      if (l === Ec)
        return e;
      if (
        // dont ask me, idk why but on hermes you can see that useTheme()[undefined] passes in STRING undefined to proxy
        // if someone is crazy enough to use "undefined" as a theme key then this not working is on them
        l !== "undefined" && typeof l == "string"
      ) {
        const f = l[0] === "$" ? l.slice(1) : l, d = e[f];
        if (d && typeof d == "object")
          return new Proxy(d, {
            // when they touch the actual value we only track it
            // if its a variable (web), its ignored!
            get(m, p) {
              if (p === "val")
                c(f);
              else if (p === "get")
                return (E) => na(d);
              return Reflect.get(d, p);
            }
          });
        if (process.env.NODE_ENV === "development" && process.env.TAMAGUI_FEAT_THROW_ON_MISSING_THEME_VALUE === "1")
          throw new Error(
            `[tamagui] No theme key "${l}" found in theme ${t}. 
  Keys in theme: ${Object.keys(
              e
            ).join(", ")}`
          );
      }
      return Reflect.get(u, l);
    }
  });
}
const Po = /* @__PURE__ */ new Set(), Ms = (e, t = !1, n, r) => {
  const { disable: o } = e, s = nn(Ds);
  if (!t && !s || o)
    return {
      isNewTheme: !1,
      state: s == null ? void 0 : s.state,
      themeManager: s
    };
  const [i, c] = Rn(S), { state: u, mounted: l, isNewTheme: f, themeManager: d, inversed: m } = i, p = !!(!i.mounted && e.inverse);
  function E(h = d, x, y = u, R = !1) {
    const v = r == null ? void 0 : r();
    if (!h || !R && v === !1)
      return;
    const $ = x || h.getState(e, s);
    if (R || $ && !(v !== !0 && !h.getStateShouldChange($, y)))
      return $;
  }
  if (_t || (ko(() => {
    if (!d)
      return;
    if (e.inverse && !l) {
      c((y) => S({
        ...y,
        mounted: !0
      }));
      return;
    }
    f && d && Po.add(d), (f || E(d)) && c(S);
    const h = d.onChangeTheme((y, R, v) => {
      v && c(($) => S($, !0));
    }), x = s == null ? void 0 : s.onChangeTheme(
      (y, R, v) => {
        const $ = v || (r == null ? void 0 : r()) || e.deopt || void 0, O = $ ?? !!(n != null && n.length || f);
        process.env.NODE_ENV === "development" && e.debug === "verbose" && console.info(" 🔸 onChange", d.id, { force: $, shouldTryUpdate: O, props: e, name: y, manager: R, keys: n }), O && c(S);
      },
      d.id
    );
    return () => {
      h(), x == null || x(), Po.delete(d);
    };
  }, [
    d,
    s,
    f,
    e.componentName,
    e.inverse,
    e.name,
    e.reset,
    l
  ]), process.env.NODE_ENV === "development" && e.debug !== "profile" && Tt(() => (globalThis.TamaguiThemeManagers ?? (globalThis.TamaguiThemeManagers = /* @__PURE__ */ new Set()), globalThis.TamaguiThemeManagers.add(d), () => {
    globalThis.TamaguiThemeManagers.delete(d);
  }), [d])), p)
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
    state: u,
    isNewTheme: f,
    inversed: m,
    themeManager: d
  };
  function S(h, x = !1) {
    if (h && (r == null ? void 0 : r()) === !1 && !x)
      return h;
    let y = s, R;
    if (Vs(e)) {
      const k = () => new vc(e, t ? "root" : s);
      if (h != null && h.themeManager) {
        y = h.themeManager;
        const J = x || !!(n != null && n.length), F = y.getState(e, s), X = E(
          y,
          F,
          h.state,
          J
        );
        X ? (R = X, h.isNewTheme ? y.updateState(X) : y = k()) : h.isNewTheme && s && !F && (y = s);
      } else
        y = k(), R = { ...y.state };
    }
    const v = !!(y !== s || e.inverse), $ = e.inverse ? t || (h == null ? void 0 : h.mounted) : !0;
    R || (v ? R = y.state : (R = s.state, y = s));
    const O = h == null ? void 0 : h.inversed, C = v && R.scheme !== (s == null ? void 0 : s.state.scheme) ? !0 : O ? !1 : null, w = {
      themeManager: y,
      isNewTheme: v,
      mounted: $,
      inversed: C
    }, M = !x && h && // isEqualShallow uses the second arg as the keys so this should compare without state first...
    lr(h, w) && // ... and then compare just the state, because we make a new state obj but is likely the same
    lr(h.state, R);
    if (h && M)
      return h;
    if (w.state = R, process.env.NODE_ENV === "development" && e.debug && Le) {
      console.groupCollapsed(` 🔷 ${y.id} useChangeThemeEffect createState`);
      const k = { ...s == null ? void 0 : s.state }, J = s == null ? void 0 : s.id, F = { ...y.state };
      console.info({
        props: e,
        parentState: k,
        parentId: J,
        themeManager: y,
        prev: h,
        response: w,
        themeManagerState: F
      }), console.groupEnd();
    }
    return w;
  }
}, _c = typeof window > "u", Tc = () => {
};
function Rc() {
  return _c ? Tc : Us((e) => Math.random(), 0)[1];
}
let Re;
function js({
  themeState: e,
  themeProps: t,
  children: n
}) {
  var r, o, s, i, c, u, l, f;
  if (t["disable-child-theme"])
    return n;
  if (process.env.NODE_ENV === "development") {
    const [d, m] = Rn(0), p = Rc(), E = Wo();
    return process.env.NODE_ENV === "development" && typeof document < "u" && (Re || (Re = document.createElement("div"), Re.style.height = "200px", Re.style.overflowY = "scroll", Re.style.position = "fixed", Re.style.zIndex = 1e7, Re.style.bottom = "30px", Re.style.left = "30px", Re.style.right = "30px", Re.style.display = "flex", Re.style.border = "1px solid #888", Re.style.flexDirection = "row", Re.style.background = "var(--background)", document.body.appendChild(Re))), Tt(() => {
      var S, h;
      (h = (S = e.themeManager) == null ? void 0 : S.parentManager) == null || h.onChangeTheme((x, y) => {
        var R, v, $;
        m((O) => ++O), console.warn(
          `theme changed for ${(R = e.themeManager) == null ? void 0 : R.id} from parent ${($ = (v = e.themeManager) == null ? void 0 : v.parentManager) == null ? void 0 : $.id} to new name`,
          x
        );
      });
    }, [e.themeManager]), Tt(() => {
      const S = setInterval(p, 1e3);
      return () => clearTimeout(S);
    }, []), /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      Js(
        /* @__PURE__ */ B.jsxs(
          "code",
          {
            style: {
              whiteSpace: "pre"
            },
            children: [
              "<Theme ",
              E,
              " /> ",
              JSON.stringify(
                {
                  name: (r = e == null ? void 0 : e.state) == null ? void 0 : r.name,
                  className: (o = e == null ? void 0 : e.state) == null ? void 0 : o.className,
                  inverse: t.inverse,
                  forceClassName: t.forceClassName,
                  parent: (s = e.themeManager) == null ? void 0 : s.state.parentName,
                  id: (i = e.themeManager) == null ? void 0 : i.id,
                  parentId: (u = (c = e.themeManager) == null ? void 0 : c.parentManager) == null ? void 0 : u.id,
                  isNew: e.isNewTheme,
                  onChangeCount: d,
                  listening: [...((l = e.themeManager) == null ? void 0 : l._listeningIds) || []].join(
                    ","
                  ),
                  _numChangeEventsSent: (f = e.themeManager) == null ? void 0 : f._numChangeEventsSent
                },
                null,
                2
              )
            ]
          }
        ),
        Re
      ),
      /* @__PURE__ */ B.jsx("div", { style: { color: "red" }, children: E }),
      n
    ] });
  }
  return n;
}
const Tr = on(function(e, t) {
  if (e.disable)
    return e.children;
  const n = !!e._isRoot, r = e["disable-child-theme"], o = Ms(e, n), s = Tn(() => {
    let i = r ? Rt.map(
      e.children,
      (c) => En(c, { "data-disable-theme": !0 })
    ) : e.children;
    if (t)
      try {
        We.Children.only(i), i = En(i, { ref: t });
      } catch {
      }
    return process.env.NODE_ENV === "development" && e.debug === "visualize" && (i = /* @__PURE__ */ B.jsx(js, { themeState: o, themeProps: e, children: i })), i;
  }, [e.children, r]);
  return Fs(o, s, e, n);
});
Tr.avoidForwardRef = !0;
function Fs(e, t, n, r = !1, o = !1) {
  const { themeManager: s, isNewTheme: i } = e, { shallow: c, forceClassName: u } = n, l = rn(!1);
  if (i && (l.current = !0), !(i || n.inverse || l.current || u || r))
    return t;
  let f = t;
  c && s && (f = Rt.toArray(t).map((m) => Lo(m) ? En(
    m,
    void 0,
    /* @__PURE__ */ B.jsx(Tr, { name: s.state.parentName, children: m.props.children })
  ) : m));
  const d = s ? /* @__PURE__ */ B.jsx(Ds.Provider, { value: s, children: f }) : f;
  return u === !1 || o ? d : Oc({
    children: d,
    themeState: e,
    forceClassName: u,
    isRoot: r
  });
}
function Oc({
  children: e,
  themeState: t,
  forceClassName: n,
  isRoot: r
}) {
  var l;
  if (r && n === !1)
    return e;
  const o = t.inversed, s = o != null || n;
  if (!t.isNewTheme && !s)
    return /* @__PURE__ */ B.jsx("span", { className: "_dsp_contents is_Theme", children: e });
  const { className: i, style: c } = Cc(t, r);
  let u = /* @__PURE__ */ B.jsx("span", { className: `${i} _dsp_contents is_Theme`, style: c, children: e });
  if (s) {
    const f = ((l = t.state) == null ? void 0 : l.name) || "", d = f.startsWith("light") ? "t_light is_inversed" : f.startsWith("dark") ? "t_dark is_inversed" : "";
    u = /* @__PURE__ */ B.jsx("span", { className: `${o ? d : ""} _dsp_contents`, children: u });
  }
  return u;
}
function Cc(e, t = !1) {
  var s, i;
  const n = (s = e.state) != null && s.theme && e.isNewTheme ? ir(e.state.theme.color) : "", r = n ? {
    color: n
  } : void 0;
  let o = ((i = e.state) == null ? void 0 : i.className) || "";
  return t && (o = o.replace("t_sub_theme", "")), { style: r, className: o };
}
function $c(e, t) {
  const n = on(function(r, o) {
    const { themeInverse: s, theme: i, componentName: c, themeReset: u, ...l } = r, f = /* @__PURE__ */ B.jsx(e, { ref: o, ...l, "data-disable-theme": !0 });
    return /* @__PURE__ */ B.jsx(
      Tr,
      {
        componentName: c || (t == null ? void 0 : t.componentName),
        name: i,
        "disable-child-theme": !0,
        debug: r.debug,
        inverse: s,
        reset: u,
        children: f
      }
    );
  });
  return n.displayName = `Themed(${(e == null ? void 0 : e.displayName) || (e == null ? void 0 : e.name) || "Anonymous"})`, n;
}
const Qe = {};
function Pc(e) {
  Object.assign(Qe, e);
}
const Ac = on(function(e, t) {
  const { children: n, ...r } = e;
  if (Lo(n)) {
    const o = Dc(n, r);
    return En(
      n,
      n.type.avoidForwardRef ? o : {
        ...o,
        ref: vs(t, n.ref)
      }
    );
  }
  return Rt.count(n) > 1 ? Rt.only(null) : null;
}), vn = {
  onPress: "onClick",
  onPressOut: "onMouseUp",
  onPressIn: "onMouseDown"
};
function Dc(e, t) {
  const n = e.props, r = { ...n }, o = typeof e.type == "string";
  if (o)
    for (const s in vn)
      s in t && (t[vn[s]] = t[s], delete t[s]);
  for (let s in n) {
    const i = t[s], c = n[s];
    o && s in vn && (s = vn[s], delete r[s]), Vc.test(s) ? r[s] = Zo(c, i) : s === "style" ? r[s] = { ...i, ...c } : s === "className" && (r[s] = [i, c].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
const Vc = /^on[A-Z]/;
let Zn, Ao, Do, Jn, j, Jt, Sn;
const tn = /* @__PURE__ */ new Set();
if (typeof document < "u") {
  const e = () => {
    tn.forEach((t) => t()), tn.clear();
  };
  addEventListener("mouseup", e), addEventListener("touchend", e), addEventListener("touchcancel", e), process.env.NODE_ENV === "development" && (Sn = () => {
  });
}
function $n(e) {
  var S;
  let t = null;
  ea((h) => {
    if (t = h, !Zn && (Zn = h, !Jn)) {
      const x = h.themes[Object.keys(h.themes)[0]];
      Jn = gc(x), process.env.NODE_ENV === "development" && (Jn || H("Warning: Missing theme"));
    }
  });
  const {
    Component: n,
    isText: r,
    isZStack: o,
    isHOC: s,
    validStyles: i = {},
    variants: c = {}
  } = e, u = `is_${e.componentName}`, l = e.defaultProps;
  process.env.NODE_ENV === "development" && ((S = e.defaultProps) != null && S.debug) && process.env.IS_STATIC !== "is_static" && H(`🐛 [${e.componentName || "Component"}]`, {
    staticConfig: e,
    defaultProps: l,
    defaultPropsKeyOrder: l ? Object.keys(l) : []
  });
  const f = on((h, x) => {
    var Mr, jr, Fr, kr, Ir, Wr, Lr, Br, zr, Yr;
    process.env.NODE_ENV === "development" && Sn && (Sn(), Sn = void 0), process.env.NODE_ENV === "test" && h["data-test-renders"] && ((Mr = h["data-test-renders"]).current ?? (Mr.current = 0), h["data-test-renders"].current += 1);
    const y = nn(cr);
    let R, v, $;
    const { context: O } = e;
    if (O) {
      $ = nn(O);
      const { inverseShorthands: _ } = Ke();
      for (const V in O.props) {
        const be = (
          // because its after default props but before props this annoying amount of checks
          h[V] ?? h[_[V]] ?? (l == null ? void 0 : l[V]) ?? (l == null ? void 0 : l[_[V]])
        );
        be === void 0 ? $ && (V in i || V in c) && (R || (R = {}), R[V] = $[V]) : (v || (v = {}), v[V] = be);
      }
    }
    const C = R ? { ...l, ...R } : l;
    let w = h;
    C && (w = hc(C, h));
    const M = w.debug, k = w.componentName || e.componentName;
    process.env.NODE_ENV === "development" && Le && Tt(() => {
      let _ = null;
      const V = (be = !1) => {
        const Ne = X.current;
        if (Ne)
          if (be) {
            _ = document.createElement("span"), _.style.inset = "0px", _.style.zIndex = "1000000", _.style.position = "absolute", _.style.borderColor = "red", _.style.borderWidth = "1px", _.style.borderStyle = "dotted";
            const Ie = Ne.getAttribute("data-at") || "", St = Ne.getAttribute("data-in") || "", Pe = document.createElement("span");
            Pe.style.position = "absolute", Pe.style.top = "0px", Pe.style.left = "0px", Pe.style.padding = "3px", Pe.style.background = "rgba(0,0,0,0.75)", Pe.style.color = "rgba(255,255,255,1)", Pe.style.fontSize = "12px", Pe.style.lineHeight = "12px", Pe.style.fontFamily = "monospace", Pe.style.webkitFontSmoothing = "none", Pe.innerText = `${k || ""} ${Ie} ${St}`.trim(), _.appendChild(Pe), Ne.appendChild(_);
          } else
            _ && Ne.removeChild(_);
      };
      return Jt || (Jt = /* @__PURE__ */ new Set()), Jt.add(V), () => {
        Jt == null || Jt.delete(V);
      };
    }, [k]), !process.env.TAMAGUI_IS_CORE_NODE && process.env.NODE_ENV === "development" && M === "profile" && !j && (j = Ta().timer().start()), process.env.NODE_ENV === "development" && j && j`start (ignore)`;
    const J = t != null && t.disableSSR ? !0 : Pa();
    process.env.NODE_ENV === "development" && j && j`did-finish-ssr`;
    const F = rn(
      void 0
    );
    F.current || (F.current = {}), process.env.NODE_ENV === "development" && j && j`stateref`;
    const X = rn(null), z = y.animationDriver, pe = z == null ? void 0 : z.useAnimations, Ce = !!(w.animation || w.style && Ic(w.style)), K = z == null ? void 0 : z.supportsCSSVars, se = (() => {
      if (_t && !K)
        return !1;
      const _ = F.current;
      return !!(Ce && !s && pe || _.hasAnimated);
    })(), Ue = z == null ? void 0 : z.usePresence, Y = se && (Ue == null ? void 0 : Ue()) || null, ft = !!w.enterStyle, dt = !!(Le && se);
    process.env.NODE_ENV === "development" && j && j`pre-use-state`;
    const Ge = se ? K ? Va : Er : Da, tt = Rn(Ge), te = h.forceStyle ? { ...tt[0], [h.forceStyle]: !0 } : tt[0], qe = tt[1];
    let P = Ma(qe);
    const g = w.group, T = g ? `t_group_${w.group}` : "";
    if (g) {
      const _ = y.groups.state, V = P;
      P = (be) => {
        V(be), y.groups.emit(g, {
          pseudo: be
        });
        const Ne = {
          ..._[g],
          ...be
        };
        _[g] = Ne;
      };
    }
    process.env.NODE_ENV === "development" && j && j`use-state`;
    let ee = se;
    se && !K && !Y && J && (_t || te.unmounted === !0) && (ee = !1), se && !F.current.hasAnimated && (F.current.hasAnimated = !0);
    const ce = w.asChild ? "" : w.componentName ? `is_${w.componentName}` : u, me = !!(r && y.inText), le = w.disabled ?? ((jr = w.accessibilityState) == null ? void 0 : jr.disabled);
    process.env.NODE_ENV === "development" && j && j`use-context`;
    const Ae = (!n || typeof n == "string") && w.tag || n, _e = Ae || "span", ye = Ae || (me ? "span" : "div");
    Ao = z ? z.Text : _e, Do = z ? z.View : ye;
    let re = r ? (ee ? Ao : null) || _e : (ee ? Do : null) || ye;
    if (ee && Y) {
      const _ = Y[2];
      if (_) {
        const V = te.unmounted, be = !_.isPresent, Ne = _.enterExitVariant, Ie = Ne ?? _.enterVariant, St = Ne ?? _.exitVariant;
        V && Ie ? (process.env.NODE_ENV === "development" && M === "verbose" && console.warn(`Animating presence ENTER "${Ie}"`), w[Ie] = !0) : be && St && (process.env.NODE_ENV === "development" && M === "verbose" && console.warn(`Animating presence EXIT "${Ie}"`), w[St] = !Ne);
      }
    }
    const nt = Ce && (z == null ? void 0 : z.isReactNative), xe = !!(e.isReactNative || nt), Ot = !!(ee || !e.acceptsClassName || h.disableClassName), rt = !!h.forceStyle, Me = Ot || rt, Be = w["data-disable-theme"], Ct = Be && !se || s;
    process.env.NODE_ENV === "development" && j && j`theme-props`, w.themeShallow && (F.current.themeShallow = !0);
    const A = {
      name: w.theme,
      componentName: k,
      disable: Ct,
      shallow: F.current.themeShallow,
      inverse: w.themeInverse,
      debug: M
    };
    typeof F.current.isListeningToTheme == "boolean" && (A.shouldUpdate = () => F.current.isListeningToTheme);
    const ne = !te.unmounted && (Y == null ? void 0 : Y[0]) === !1;
    if (process.env.NODE_ENV === "development") {
      const _ = Wo();
      if (M && M !== "profile") {
        const V = `${k || (n == null ? void 0 : n.displayName) || (n == null ? void 0 : n.name) || "[Unnamed Component]"}`, be = nt ? "(animated)" : xe ? "(rnw)" : "", Ne = h["data-is"] || "", Ie = `${V}${Ne ? ` ${Ne}` : ""} ${be} id ${_}`;
        console.group(
          `%c ${Ie} (unmounted: ${te.unmounted})${Y ? ` (presence: ${Y[0]})` : ""} ${J ? "💦" : "🏜️"}`,
          "background: green; color: white;"
        ), _t || (console.groupCollapsed(
          `Info (collapsed): ${te.press || te.pressIn ? "PRESSED " : ""}${te.hover ? "HOVERED " : ""}${te.focus ? "FOCUSED" : " "}`
        ), H({
          propsIn: h,
          props: w,
          state: te,
          staticConfig: e,
          elementType: re,
          themeStateProps: A,
          styledContext: { contextProps: R, overriddenContextProps: v },
          presence: Y,
          isAnimated: ee,
          isHOC: s,
          hasAnimationProp: Ce,
          useAnimations: pe,
          propsInOrder: Object.keys(h),
          propsOrder: Object.keys(w)
        }), console.groupEnd());
      }
    }
    process.env.NODE_ENV === "development" && j && j`pre-theme-media`;
    const [U, ie] = Nc(A);
    re = n || re;
    const Fe = typeof re == "string";
    process.env.NODE_ENV === "development" && j && j`theme`;
    const Se = Ea(F, y);
    process.env.NODE_ENV === "development" && j && j`media`, Sr(!1);
    const we = (
      // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
      ee && !K || s && te.unmounted == !1 && Ce ? "value" : "auto"
    ), ue = se && (z == null ? void 0 : z.keepStyleSSR), Q = {
      mediaState: Se,
      noClassNames: Me,
      resolveValues: we,
      isExiting: ne,
      isAnimated: ee,
      keepStyleSSR: ue
    }, G = lc(
      w,
      e,
      ie,
      ((Fr = U == null ? void 0 : U.state) == null ? void 0 : Fr.name) || "",
      te,
      Q,
      null,
      y,
      re,
      M
    );
    w.group && w.untilMeasured === "hide" && !F.current.hasMeasured && (G.style.opacity = 0), process.env.NODE_ENV === "development" && j && j`split-styles`, F.current.isListeningToTheme = G.dynamicThemeAccess;
    const ae = G.hasMedia && Array.isArray(G.hasMedia), Te = ra() || ae || Me && G.hasMedia === !0, $e = ae ? G.hasMedia : null;
    xa(F, {
      enabled: Te,
      keys: $e
    });
    const De = Ce && xe;
    if (process.env.NODE_ENV === "development" && M && M !== "profile" && (console.groupCollapsed(">>>"), H("props in", h, "mapped to", w, "in order", Object.keys(w)), H("splitStyles", G), H("media", { shouldListenForMedia: Te, isMediaArray: ae, mediaListeningKeys: $e }), H("className", Object.values(G.classNames)), Le && H("ref", X, "(click to view)"), console.groupEnd(), M === "break"))
      debugger;
    const {
      viewProps: ze,
      pseudos: Ee,
      style: Ze,
      classNames: pt,
      space: Bt
    } = G, fn = w;
    let zt;
    if (se && pe && !s) {
      const _ = pe({
        props: fn,
        // if hydrating, send empty style
        style: Ze,
        // style: splitStylesStyle,
        presence: Y,
        componentState: te,
        styleProps: Q,
        theme: (kr = U.state) == null ? void 0 : kr.theme,
        pseudos: Ee || null,
        hostRef: X,
        staticConfig: e
      });
      ee && _ && (zt = _.style), process.env.NODE_ENV === "development" && j && j`animations`;
    }
    const {
      asChild: ot,
      children: Yt,
      themeShallow: Pn,
      spaceDirection: An,
      disabled: Rr,
      onPress: mt,
      onLongPress: st,
      onPressIn: ht,
      onPressOut: gt,
      onHoverIn: bt,
      onHoverOut: vt,
      onMouseUp: a,
      onMouseDown: b,
      onMouseEnter: N,
      onMouseLeave: D,
      onFocus: W,
      onBlur: q,
      separator: L,
      // ignore from here on out
      forceStyle: I,
      // @ts-ignore  for next/link compat etc
      onClick: de,
      theme: oe,
      // @ts-ignore
      defaultVariants: fe,
      ...he
    } = ze;
    process.env.NODE_ENV === "development" && w.untilMeasured && !w.group && console.warn(
      `You set the untilMeasured prop without setting group. This doesn't work, be sure to set untilMeasured on the parent that sets group, not the children that use the $group- prop.

If you meant to do this, you can disable this warning - either change untilMeasured and group at the same time, or do group={conditional ? 'name' : undefined}`
    ), process.env.NODE_ENV === "development" && j && j`destructure`;
    const Ye = ((Ir = w.accessibilityState) == null ? void 0 : Ir.disabled) || // @ts-expect-error (comes from core)
    w.accessibilityDisabled;
    let Z = he;
    s && oe && (Z.theme = oe), g && (he.onLayout = Zo(
      he.onLayout,
      (_) => {
        y.groups.emit(g, {
          layout: _.nativeEvent.layout
        }), !F.current.hasMeasured && w.untilMeasured === "hide" && qe((V) => ({ ...V })), F.current.hasMeasured = !0;
      }
    )), !xe && !se && !ot ? Z = (Wr = Qe.usePropsTransform) == null ? void 0 : Wr.call(Qe, re, he, X) : Z = he;
    const ke = Oa(X, x);
    Z.ref = ke, process.env.NODE_ENV === "development" && !xe && !r && cn && !s && Rt.toArray(w.children).forEach((_) => {
      typeof _ == "string" && _ !== `
` && console.error(
        `Unexpected text node: ${_}. A text node cannot be a child of a <View>.`
      );
    }), process.env.NODE_ENV === "development" && j && j`events-hooks`;
    let yt = () => P({
      press: !1,
      pressIn: !1
    });
    yt = Bo(yt, []);
    const Or = dt && te.unmounted, { pseudoGroups: $t, mediaGroups: Ht } = G;
    Tt(() => {
      if (Or) {
        const V = te.unmounted === !0 && ft ? "should-enter" : !1;
        P({
          unmounted: V
        });
        return;
      }
      let _;
      if ($t || Ht) {
        const V = {
          pseudo: {},
          media: {}
        };
        _ = y.groups.subscribe(
          (be, { layout: Ne, pseudo: Ie }) => {
            if (Ie && ($t != null && $t.has(be)))
              Object.assign(V.pseudo, Ie), St();
            else if (Ne && Ht) {
              const Pe = Wc(Ht, Ne), Hr = ys(V.media, Pe);
              Hr !== V.media && (Object.assign(V.media, Hr), St());
            }
            function St() {
              P({
                // force it to be referentially different so it always updates
                group: {
                  ...te.group,
                  [be]: V
                }
              });
            }
          }
        );
      }
      return () => {
        _ == null || _(), tn.delete(yt);
      };
    }, [
      Or,
      te.unmounted,
      $t ? Object.keys([...$t]).join("") : 0,
      Ht ? Object.keys([...Ht]).join("") : 0
    ]);
    const Cr = ue && te.unmounted === !0;
    let Pt = r ? G.fontFamily || ((Lr = e.defaultProps) == null ? void 0 : Lr.fontFamily) : null;
    Pt && Pt[0] === "$" && (Pt = Pt.slice(1));
    const $r = Pt ? `font_${Pt}` : "", xt = Cr ? G.style : zt || G.style;
    let dn;
    {
      let _ = [];
      if (k && _.push(ce), $r && _.push($r), pt && _.push(Object.values(pt).join(" ")), T && _.push(T), dn = _.join(" "), De && !Cr)
        Z.style = xt;
      else if (xe) {
        const V = { $$css: !0 };
        for (const be of dn.split(" "))
          V[be] = be;
        Z.style = [...Array.isArray(xt) ? xt : [xt], V];
      } else
        Z.className = dn, Z.style = xt;
      xe && process.env.NODE_ENV === "development" && Object.keys(Z).forEach((V) => {
        V.startsWith("data-") && (Z.dataSet ?? (Z.dataSet = {}), Z.dataSet[V.replace("data-", "")] = Z[V], delete Z[V]);
      });
    }
    const At = !Ye && Me && (Ee == null ? void 0 : Ee.pressStyle), Bs = !Ye && Me && (Ee == null ? void 0 : Ee.focusStyle), Pr = !!(At || W || q), Dt = !!(g || At || mt || gt || ht || st || de), Ar = !Ye && Me && (Ee == null ? void 0 : Ee.hoverStyle), Dn = Ar || bt || vt, Vn = !!(g || Dn || N || D), zs = !cn, Dr = !!(Pr || Dt || Vn || At || Ar || Bs);
    process.env.NODE_ENV === "development" && j && j`events-setup`;
    const it = Dr && !le && !w.asChild ? {
      onPressOut: Dt ? (_) => {
        yt(), gt == null || gt(_), a == null || a(_);
      } : void 0,
      ...(Vn || Dt) && {
        onMouseEnter: (_) => {
          const V = {};
          Dn && (V.hover = !0), At && te.pressIn && (V.press = !0), P(V), bt == null || bt(_), N == null || N(_);
        },
        onMouseLeave: (_) => {
          const V = {};
          tn.add(yt), Dn && (V.hover = !1), At && te.pressIn && (V.press = !1, V.pressIn = !1), P(V), vt == null || vt(_), D == null || D(_);
        }
      },
      onPressIn: Dt ? (_) => {
        At && P({
          press: !0,
          pressIn: !0
        }), ht == null || ht(_), b == null || b(_), tn.add(yt);
      } : void 0,
      onPress: Dt ? (_) => {
        yt(), de == null || de(_), mt == null || mt(_), st == null || st(_);
      } : void 0,
      ...Pr && {
        onFocus: (_) => {
          P({
            focus: !0
          }), W == null || W(_);
        },
        onBlur: (_) => {
          P({
            focus: !1
          }), q == null || q(_);
        }
      }
    } : null;
    it && !xe && Object.assign(Z, Qn(it)), process.env.NODE_ENV === "development" && j && j`events`, process.env.NODE_ENV === "development" && M === "verbose" && H("events", { events: it, isHoverable: Vn, attachPress: Dt }), (Br = Qe.useEvents) == null || Br.call(Qe, Z, it, G, P, e);
    const Ys = w.spaceDirection || "both";
    process.env.NODE_ENV === "development" && j && j`hooks`;
    let ge = !Yt || ot ? Yt : Fc({
      separator: L,
      children: Yt,
      space: Bt,
      direction: Ys,
      isZStack: o,
      debug: M
    });
    if (ot) {
      re = Ac;
      {
        const _ = Qn(
          {
            onPress: mt,
            onLongPress: st,
            onPressIn: ht,
            onPressOut: gt,
            onHoverIn: bt,
            onHoverOut: vt,
            onMouseUp: a,
            onMouseDown: b,
            onMouseEnter: N,
            onMouseLeave: D
          },
          ot === "web" || ot === "except-style-web"
        );
        Object.assign(Z, _);
      }
    }
    process.env.NODE_ENV === "development" && j && j`spaced-as-child`;
    let Mn;
    Qe.useChildren && (Mn = Qe.useChildren(
      re,
      ge,
      Z,
      it,
      e
    )), Mn ? ge = Mn : ge = Gs(re, Z, ge), process.env.NODE_ENV === "development" && j && j`create-element`;
    const Vr = Tn(() => {
      if (g)
        return {
          ...y.groups,
          // change reference so as we mutate it doesn't affect siblings etc
          state: {
            ...y.groups.state,
            [g]: {
              pseudo: Ge,
              // capture just initial width and height if they exist
              // will have top, left, width, height (not x, y)
              layout: {
                width: Mo(G.style.width),
                height: Mo(G.style.height)
              }
            }
          }
        };
    }, [g]);
    if (g && Vr && (ge = /* @__PURE__ */ B.jsx(cr.Provider, { groups: Vr, children: ge })), process.env.NODE_ENV === "development" && j && j`group-context`, ge = Be ? ge : Fs(U, ge, A, !1), process.env.NODE_ENV === "development" && j && j`themed-children`, process.env.NODE_ENV === "development" && w.debug === "visualize" && (ge = /* @__PURE__ */ B.jsx(js, { themeState: U, themeProps: w, children: ge })), xe && (ge = /* @__PURE__ */ B.jsx(
      "span",
      {
        className: `${De ? dn : ""} _dsp_contents`,
        ...it && Qn(it),
        children: ge
      }
    )), e.context) {
      const _ = e.context.props;
      for (const V in _)
        (V in xt || V in Z) && (v || (v = {}), v[V] = xt[V] ?? Z[V]);
    }
    if (v) {
      const _ = e.context.Provider;
      ge = /* @__PURE__ */ B.jsx(_, { ...$, ...v, children: ge });
    }
    if (process.env.NODE_ENV === "development" && M && M !== "profile") {
      console.groupCollapsed(`render <${typeof re == "string" ? re : "Component"} /> with props`);
      try {
        H("viewProps", Z), H("viewPropsOrder", Object.keys(Z));
        for (const _ in Z)
          H(" - ", _, Z[_]);
        H("children", ge), typeof window < "u" && H({
          viewProps: Z,
          state: te,
          styleProps: Q,
          themeState: U,
          isAnimated: ee,
          isAnimatedReactNativeWeb: De,
          defaultProps: l,
          splitStyles: G,
          animationStyles: zt,
          handlesPressEvents: zs,
          willBeAnimated: se,
          isStringElement: Fe,
          classNamesIn: (zr = w.className) == null ? void 0 : zr.split(" "),
          classNamesOut: (Yr = Z.className) == null ? void 0 : Yr.split(" "),
          events: it,
          shouldAttach: Dr,
          pseudos: Ee,
          content: ge,
          shouldAvoidClasses: Ot,
          animation: w.animation,
          splitStylesStyle: Ze,
          staticConfig: e,
          tamaguiConfig: Zn,
          shouldForcePseudo: rt,
          elementType: re,
          initialState: Ge,
          classNames: pt
        });
      } catch {
      }
      console.groupEnd(), console.groupEnd();
    }
    return process.env.NODE_ENV === "development" && j && (j`rest`, globalThis.willPrint || (globalThis.willPrint = !0, setTimeout(() => {
      delete globalThis.willPrint, j.print(), j = null;
    }, 50))), ge;
  });
  e.componentName && (f.displayName = e.componentName);
  let d = f;
  (process.env.TAMAGUI_FORCE_MEMO || e.memo) && (d = Xr(d)), d.staticConfig = e;
  function m(h) {
    return {
      ...e,
      ...h,
      neverFlatten: !0,
      isHOC: !0,
      isStyledHOC: !1
    };
  }
  function p(h, x) {
    return h.staticConfig = m(x), h.styleable = E, h;
  }
  function E(h, x) {
    var v;
    let y = ((v = h.render) == null ? void 0 : v.length) === 2 ? h : on(h);
    const R = m(x == null ? void 0 : x.staticConfig);
    return y = x != null && x.disableTheme ? y : $c(y, R), process.env.TAMAGUI_MEMOIZE_STYLEABLE && (y = Xr(y)), y.staticConfig = R, y.styleable = E, y;
  }
  return d.extractable = p, d.styleable = E, d;
}
function Qn(e, t = !0) {
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
const Mc = (e, { tokens: t }) => {
  e = e === !0 ? "$true" : e;
  const n = t.space[e] ?? e;
  return {
    width: n,
    height: n,
    minWidth: n,
    minHeight: n
  };
}, jc = $n({
  acceptsClassName: !0,
  memo: !0,
  componentName: "Spacer",
  validStyles: It,
  defaultProps: {
    ...Cn,
    // avoid nesting issues
    tag: "span",
    size: !0,
    pointerEvents: "none"
  },
  variants: {
    size: {
      "...": Mc
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
function Fc(e) {
  var d, m, p;
  const { isZStack: t, children: n, space: r, direction: o, spaceFlex: s, separator: i } = e, c = !!(r || s), u = i != null;
  if (!(c || u || t))
    return n;
  const l = Rt.toArray(n);
  if (l.length <= 1 && !t && !((m = (d = l[0]) == null ? void 0 : d.type) != null && m.shouldForwardSpace))
    return l;
  const f = [];
  for (let [E, S] of l.entries()) {
    const h = S == null || Array.isArray(S) && S.length === 0;
    if (!h && We.isValidElement(S) && ((p = S.type) != null && p.shouldForwardSpace) && (S = We.cloneElement(S, {
      space: r,
      spaceFlex: s,
      separator: i,
      key: S.key
    })), h || !S || S.key && !t ? f.push(S) : f.push(
      /* @__PURE__ */ B.jsx(qs, { children: t ? /* @__PURE__ */ B.jsx(kc, { children: S }) : S }, E)
    ), Vo(S) && E === 0 || t)
      continue;
    const x = l[E + 1];
    x && !Vo(x) && (i ? (c && f.push(
      er({
        key: `_${E}_00tmgui`,
        direction: o,
        space: r,
        spaceFlex: s
      })
    ), f.push(
      We.isValidElement(i) ? We.cloneElement(i, { key: `sep_${E}` }) : i
    ), c && f.push(
      er({
        key: `_${E}01tmgui`,
        direction: o,
        space: r,
        spaceFlex: s
      })
    )) : f.push(
      er({
        key: `_${E}02tmgui`,
        direction: o,
        space: r,
        spaceFlex: s
      })
    ));
  }
  return process.env.NODE_ENV === "development" && e.debug && H("  Spaced children", f, e), f;
}
function er({ key: e, direction: t, space: n, spaceFlex: r }) {
  return /* @__PURE__ */ B.jsx(
    jc,
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
function Vo(e) {
  const t = e == null ? void 0 : e.type;
  return (t == null ? void 0 : t.isVisuallyHidden) || (t == null ? void 0 : t.isUnspaced);
}
const kc = $n({
  defaultProps: {
    ...Cn,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "box-none"
  }
});
function Ic(e) {
  return Object.keys(e).some((t) => {
    const n = e[t];
    return n && typeof n == "object" && "_animation" in n;
  });
}
function Wc(e, t) {
  return Object.fromEntries(
    [...e].map((n) => [n, bs(n, t)])
  );
}
const Mo = (e) => typeof e != "string" ? e : +e.replace("px", ""), Lc = $n({
  acceptsClassName: !0,
  defaultProps: Cn,
  validStyles: It
}), jo = {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, Bc = {
  display: "inline",
  boxSizing: "border-box",
  wordWrap: "break-word",
  margin: 0
}, zc = $n({
  acceptsClassName: !0,
  isText: !0,
  defaultProps: {
    fontFamily: "unset",
    ...Bc
  },
  inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"]),
  variants: {
    numberOfLines: {
      1: jo,
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
      true: jo
    }
  },
  deoptProps: /* @__PURE__ */ new Set([]),
  validStyles: {
    ...It,
    ...rs
  }
});
function Yc() {
  return null;
}
const ks = (e) => {
  var t;
  if (!(!e || e.nodeType !== 1))
    return (t = e.getBoundingClientRect) == null ? void 0 : t.call(e);
}, Is = (e) => {
  const t = ks(e);
  if (!t)
    return;
  const { x: n, y: r, top: o, left: s } = t;
  return { x: n, y: r, width: e.offsetWidth, height: e.offsetHeight, top: o, left: s };
}, Ws = /* @__PURE__ */ new WeakMap();
let Mt = null;
typeof window < "u" && "ResizeObserver" in window && (Mt = new ResizeObserver((e) => {
  for (const { target: t } of e) {
    const n = Ws.get(t);
    if (typeof n != "function")
      return;
    hr(t, null, (r, o, s, i, c, u) => {
      n({
        nativeEvent: {
          layout: { x: r, y: o, width: s, height: i, left: c, top: u },
          target: t
        },
        timeStamp: Date.now()
      });
    });
  }
}));
const hr = (e, t, n) => {
  const r = t || (e == null ? void 0 : e.parentNode);
  r instanceof HTMLElement && setTimeout(() => {
    const o = ks(r), { height: s, left: i, top: c, width: u } = Is(e), l = i - o.left, f = c - o.top;
    n(l, f, u, s, i, c);
  }, 0);
};
function Hc(e, t) {
  br(() => {
    if (!Mt || !t)
      return;
    const n = e.current;
    if (n)
      return Ws.set(n, t), Mt.observe(n), () => {
        Mt == null || Mt.unobserve(n);
      };
  }, [e, t]);
}
function Xc(e) {
  br(() => {
    const t = e.current;
    t && (t.measure = (n) => hr(t, null, n), t.measureLayout = (n, r) => hr(t, n, r), t.measureInWindow = (n) => {
      t && setTimeout(() => {
        const { height: r, left: o, top: s, width: i } = Is(t);
        n(o, s, i, r);
      }, 0);
    });
  }, [e]);
}
const Ve = Lc, Ls = zc;
Pc({
  getBaseViews: Yc,
  usePropsTransform(e, t, n) {
    const {
      // event props
      onMoveShouldSetResponder: r,
      onMoveShouldSetResponderCapture: o,
      onResponderEnd: s,
      onResponderGrant: i,
      onResponderMove: c,
      onResponderReject: u,
      onResponderRelease: l,
      onResponderStart: f,
      onResponderTerminate: d,
      onResponderTerminationRequest: m,
      onScrollShouldSetResponder: p,
      onScrollShouldSetResponderCapture: E,
      onSelectionChangeShouldSetResponder: S,
      onSelectionChangeShouldSetResponderCapture: h,
      onStartShouldSetResponder: x,
      onStartShouldSetResponderCapture: y,
      // android
      collapsable: R,
      focusable: v,
      // deprecated,
      accessible: $,
      accessibilityDisabled: O,
      onLayout: C,
      hrefAttrs: w,
      ...M
    } = t;
    if (Xc(n), Hc(n, C), Xi(n, {
      onMoveShouldSetResponder: r,
      onMoveShouldSetResponderCapture: o,
      onResponderEnd: s,
      onResponderGrant: i,
      onResponderMove: c,
      onResponderReject: u,
      onResponderRelease: l,
      onResponderStart: f,
      onResponderTerminate: d,
      onResponderTerminationRequest: m,
      onScrollShouldSetResponder: p,
      onScrollShouldSetResponderCapture: E,
      onSelectionChangeShouldSetResponder: S,
      onSelectionChangeShouldSetResponderCapture: h,
      onStartShouldSetResponder: x,
      onStartShouldSetResponderCapture: y
    }), M.href !== void 0 && w !== void 0) {
      const { download: k, rel: J, target: F } = w;
      k != null && (M.download = k), J != null && (M.rel = J), typeof F == "string" && (M.target = F.charAt(0) !== "_" ? `_${F}` : F);
    }
    return M;
  },
  useEvents(e, t, { pseudos: n }, r, o) {
  }
});
const qc = ({
  children: e,
  padding: t,
  // var(--s1)
  borderWidth: n,
  //  var(--border-thin)
  invert: r = !1,
  ...o
}) => /* @__PURE__ */ B.jsx(
  Ve,
  {
    padding: t,
    borderWidth: n,
    borderColor: "black",
    backgroundColor: r ? "var(--color-light)" : "inherit",
    ...o,
    children: e
  }
), Zc = ({
  children: e,
  maxWidth: t,
  centerText: n = !1,
  gutters: r,
  intrinsic: o = !1,
  ...s
}) => /* @__PURE__ */ B.jsx(
  Ve,
  {
    maxWidth: t,
    marginHorizontal: "auto",
    paddingHorizontal: r,
    alignItems: o ? "center" : void 0,
    flexDirection: o ? "column" : void 0,
    ...s,
    children: n ? /* @__PURE__ */ B.jsx(Ls, { textAlign: "center", children: e }) : e
  }
), Jc = ({
  children: e,
  justify: t = "flex-start",
  align: n = "flex-start",
  space: r
  // 'var(--s1)'
}) => /* @__PURE__ */ B.jsx(
  Ve,
  {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: t,
    alignItems: n,
    space: r,
    children: e
  }
), Qc = ({
  children: e,
  centered: t,
  space: n,
  // Default: 'var(--s1)'
  minHeight: r = "100vh",
  noPad: o = !1
}) => {
  const s = We.Children.toArray(e), i = t ? s.findIndex(
    (c) => c.type === t || c.props.className === t
  ) : -1;
  return /* @__PURE__ */ B.jsx(
    Ve,
    {
      flexDirection: "column",
      minHeight: r,
      padding: o ? 0 : n,
      children: s.map((c, u) => /* @__PURE__ */ B.jsx(
        Ve,
        {
          marginVertical: n,
          style: i !== -1 && u === i ? { marginVertical: "auto" } : {},
          children: c
        },
        u
      ))
    }
  );
}, el = ({
  child: e,
  fallback: t,
  aspectRatio: n = "16:9"
}) => {
  const r = (s) => We.isValidElement(s) ? s : null, o = () => {
    const s = r(e);
    return s ? We.cloneElement(s, {
      ...s.props,
      style: { width: "100%", height: "100%", ...s.props.style }
    }) : t;
  };
  return /* @__PURE__ */ B.jsx(
    Ve,
    {
      style: {
        width: "100%",
        aspectRatio: n,
        overflow: "hidden"
      },
      children: o()
    }
  );
}, tl = ({
  icon: e,
  text: t,
  space: n = 0,
  label: r
  // baseFontSize = 16,
}) => /* @__PURE__ */ B.jsx(
  Ve,
  {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
    accessible: !!r,
    accessibilityLabel: r,
    children: /* @__PURE__ */ B.jsx(Ls, { marginStart: n, children: t })
  }
), nl = ({
  children: e,
  visible: t,
  margin: n = 0,
  // targetRef,
  onClose: r,
  ...o
}) => {
  const [s, i] = Rn({ width: 0, height: 0 }), c = Bo(() => {
    let d = 0, m = 0;
    if (typeof n == "number")
      d = m = n;
    else if (typeof n == "string") {
      const p = n.split(" ").map((E) => parseFloat(E));
      [d, m] = p.length === 2 ? p : [p[0], p[0]];
    }
    return { horizontal: d, vertical: m };
  }, [n]), { horizontal: u, vertical: l } = c();
  Tt(() => {
    const d = () => {
      const m = window.innerWidth - 2 * u, p = window.innerHeight - 2 * l;
      i({ width: m, height: p });
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [u, l]);
  const f = t && /* @__PURE__ */ B.jsx(
    "div",
    {
      onClick: r,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        display: "flex"
      },
      ...o,
      children: e
    }
  );
  return Zs.createPortal(f, document.body);
}, rl = ({
  children: e,
  itemWidth: t = "auto",
  space: n,
  height: r = "auto",
  noBar: o = !1
}) => /* @__PURE__ */ B.jsx(
  Ve,
  {
    flexDirection: "row",
    overflow: o ? "hidden" : void 0,
    flexWrap: "wrap",
    space: n,
    height: r,
    children: We.Children.map(e, (s) => /* @__PURE__ */ B.jsx(Ve, { width: t, children: s }))
  }
), ol = ({
  side: e = "start",
  sideWidth: t,
  contentMin: n = "50%",
  space: r = "var(--s1)",
  noStretch: o = !1,
  children: s
}) => {
  const i = e === "start", c = i ? {} : { flexBasis: "0", flexGrow: 999, minWidth: n }, u = i ? { flexBasis: "0", flexGrow: 999, minWidth: n } : {}, l = Rt.toArray(s);
  return /* @__PURE__ */ B.jsxs(
    Ve,
    {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: r,
      alignItems: o ? "flex-start" : "stretch",
      children: [
        /* @__PURE__ */ B.jsx(Ve, { style: c, children: l[0] }),
        /* @__PURE__ */ B.jsx(Ve, { style: u, children: l[1] })
      ]
    }
  );
}, sl = ({
  children: e,
  space: t
  // recursive = false,
}) => /* @__PURE__ */ B.jsx(Ve, { flexDirection: "column", justifyContent: "flex-start", space: t, children: e });
export {
  qc as Box,
  Zc as Center,
  Jc as Cluster,
  Qc as Cover,
  el as Frame,
  tl as Icon,
  nl as Imposter,
  rl as Reel,
  ol as Sidebar,
  sl as Stack
};
