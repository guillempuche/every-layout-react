import { jsx as He } from "react/jsx-runtime";
import Pe, { useRef as St, useDebugValue as We, useContext as ze, createElement as bt } from "react";
function wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = { exports: {} }, D = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Et() {
  if (Xe)
    return D;
  Xe = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.server_context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function w(s) {
    if (typeof s == "object" && s !== null) {
      var x = s.$$typeof;
      switch (x) {
        case e:
          switch (s = s.type, s) {
            case t:
            case a:
            case n:
            case g:
            case S:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case p:
                case l:
                case m:
                case O:
                case b:
                case u:
                  return s;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  return D.ContextConsumer = l, D.ContextProvider = u, D.Element = e, D.ForwardRef = m, D.Fragment = t, D.Lazy = O, D.Memo = b, D.Portal = r, D.Profiler = a, D.StrictMode = n, D.Suspense = g, D.SuspenseList = S, D.isAsyncMode = function() {
    return !1;
  }, D.isConcurrentMode = function() {
    return !1;
  }, D.isContextConsumer = function(s) {
    return w(s) === l;
  }, D.isContextProvider = function(s) {
    return w(s) === u;
  }, D.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, D.isForwardRef = function(s) {
    return w(s) === m;
  }, D.isFragment = function(s) {
    return w(s) === t;
  }, D.isLazy = function(s) {
    return w(s) === O;
  }, D.isMemo = function(s) {
    return w(s) === b;
  }, D.isPortal = function(s) {
    return w(s) === r;
  }, D.isProfiler = function(s) {
    return w(s) === a;
  }, D.isStrictMode = function(s) {
    return w(s) === n;
  }, D.isSuspense = function(s) {
    return w(s) === g;
  }, D.isSuspenseList = function(s) {
    return w(s) === S;
  }, D.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === t || s === a || s === n || s === g || s === S || s === M || typeof s == "object" && s !== null && (s.$$typeof === O || s.$$typeof === b || s.$$typeof === u || s.$$typeof === l || s.$$typeof === m || s.$$typeof === E || s.getModuleId !== void 0);
  }, D.typeOf = w, D;
}
var F = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ct() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.server_context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), E = !1, w = !1, s = !1, x = !1, R = !1, P;
    P = Symbol.for("react.module.reference");
    function C(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === t || d === a || R || d === n || d === g || d === S || x || d === M || E || w || s || typeof d == "object" && d !== null && (d.$$typeof === O || d.$$typeof === b || d.$$typeof === u || d.$$typeof === l || d.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === P || d.getModuleId !== void 0));
    }
    function i(d) {
      if (typeof d == "object" && d !== null) {
        var T = d.$$typeof;
        switch (T) {
          case e:
            var V = d.type;
            switch (V) {
              case t:
              case a:
              case n:
              case g:
              case S:
                return V;
              default:
                var I = V && V.$$typeof;
                switch (I) {
                  case p:
                  case l:
                  case m:
                  case O:
                  case b:
                  case u:
                    return I;
                  default:
                    return T;
                }
            }
          case r:
            return T;
        }
      }
    }
    var U = l, te = u, Z = e, J = m, re = t, ae = O, W = b, K = r, ee = a, G = n, ie = g, Q = S, H = !1, se = !1;
    function ne(d) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce(d) {
      return se || (se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function v(d) {
      return i(d) === l;
    }
    function h(d) {
      return i(d) === u;
    }
    function y(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function A(d) {
      return i(d) === m;
    }
    function o(d) {
      return i(d) === t;
    }
    function N(d) {
      return i(d) === O;
    }
    function f(d) {
      return i(d) === b;
    }
    function z(d) {
      return i(d) === r;
    }
    function $(d) {
      return i(d) === a;
    }
    function k(d) {
      return i(d) === n;
    }
    function c(d) {
      return i(d) === g;
    }
    function Y(d) {
      return i(d) === S;
    }
    F.ContextConsumer = U, F.ContextProvider = te, F.Element = Z, F.ForwardRef = J, F.Fragment = re, F.Lazy = ae, F.Memo = W, F.Portal = K, F.Profiler = ee, F.StrictMode = G, F.Suspense = ie, F.SuspenseList = Q, F.isAsyncMode = ne, F.isConcurrentMode = ce, F.isContextConsumer = v, F.isContextProvider = h, F.isElement = y, F.isForwardRef = A, F.isFragment = o, F.isLazy = N, F.isMemo = f, F.isPortal = z, F.isProfiler = $, F.isStrictMode = k, F.isSuspense = c, F.isSuspenseList = Y, F.isValidElementType = C, F.typeOf = i;
  }()), F;
}
process.env.NODE_ENV === "production" ? Ne.exports = Et() : Ne.exports = Ct();
var Ye = Ne.exports;
function At(e) {
  function r(v, h, y, A, o) {
    for (var N = 0, f = 0, z = 0, $ = 0, k, c, Y = 0, d = 0, T, V = T = k = 0, I = 0, X = 0, ye = 0, q = 0, be = y.length, ve = be - 1, oe, _ = "", B = "", Te = "", xe = "", ue; I < be; ) {
      if (c = y.charCodeAt(I), I === ve && f + $ + z + N !== 0 && (f !== 0 && (c = f === 47 ? 10 : 47), $ = z = N = 0, be++, ve++), f + $ + z + N === 0) {
        if (I === ve && (0 < X && (_ = _.replace(O, "")), 0 < _.trim().length)) {
          switch (c) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              _ += y.charAt(I);
          }
          c = 59;
        }
        switch (c) {
          case 123:
            for (_ = _.trim(), k = _.charCodeAt(0), T = 1, q = ++I; I < be; ) {
              switch (c = y.charCodeAt(I)) {
                case 123:
                  T++;
                  break;
                case 125:
                  T--;
                  break;
                case 47:
                  switch (c = y.charCodeAt(I + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (V = I + 1; V < ve; ++V)
                          switch (y.charCodeAt(V)) {
                            case 47:
                              if (c === 42 && y.charCodeAt(V - 1) === 42 && I + 2 !== V) {
                                I = V + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (c === 47) {
                                I = V + 1;
                                break e;
                              }
                          }
                        I = V;
                      }
                  }
                  break;
                case 91:
                  c++;
                case 40:
                  c++;
                case 34:
                case 39:
                  for (; I++ < ve && y.charCodeAt(I) !== c; )
                    ;
              }
              if (T === 0)
                break;
              I++;
            }
            switch (T = y.substring(q, I), k === 0 && (k = (_ = _.replace(b, "").trim()).charCodeAt(0)), k) {
              case 64:
                switch (0 < X && (_ = _.replace(O, "")), c = _.charCodeAt(1), c) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    X = h;
                    break;
                  default:
                    X = ie;
                }
                if (T = r(h, X, T, c, o + 1), q = T.length, 0 < H && (X = t(ie, _, ye), ue = p(3, T, X, h, K, W, q, c, o, A), _ = X.join(""), ue !== void 0 && (q = (T = ue.trim()).length) === 0 && (c = 0, T = "")), 0 < q)
                  switch (c) {
                    case 115:
                      _ = _.replace(U, l);
                    case 100:
                    case 109:
                    case 45:
                      T = _ + "{" + T + "}";
                      break;
                    case 107:
                      _ = _.replace(R, "$1 $2"), T = _ + "{" + T + "}", T = G === 1 || G === 2 && u("@" + T, 3) ? "@-webkit-" + T + "@" + T : "@" + T;
                      break;
                    default:
                      T = _ + T, A === 112 && (T = (B += T, ""));
                  }
                else
                  T = "";
                break;
              default:
                T = r(h, t(h, _, ye), T, A, o + 1);
            }
            Te += T, T = ye = X = V = k = 0, _ = "", c = y.charCodeAt(++I);
            break;
          case 125:
          case 59:
            if (_ = (0 < X ? _.replace(O, "") : _).trim(), 1 < (q = _.length))
              switch (V === 0 && (k = _.charCodeAt(0), k === 45 || 96 < k && 123 > k) && (q = (_ = _.replace(" ", ":")).length), 0 < H && (ue = p(1, _, h, v, K, W, B.length, A, o, A)) !== void 0 && (q = (_ = ue.trim()).length) === 0 && (_ = "\0\0"), k = _.charCodeAt(0), c = _.charCodeAt(1), k) {
                case 0:
                  break;
                case 64:
                  if (c === 105 || c === 99) {
                    xe += _ + y.charAt(I);
                    break;
                  }
                default:
                  _.charCodeAt(q - 1) !== 58 && (B += a(_, k, c, _.charCodeAt(2)));
              }
            ye = X = V = k = 0, _ = "", c = y.charCodeAt(++I);
        }
      }
      switch (c) {
        case 13:
        case 10:
          f === 47 ? f = 0 : 1 + k === 0 && A !== 107 && 0 < _.length && (X = 1, _ += "\0"), 0 < H * ne && p(0, _, h, v, K, W, B.length, A, o, A), W = 1, K++;
          break;
        case 59:
        case 125:
          if (f + $ + z + N === 0) {
            W++;
            break;
          }
        default:
          switch (W++, oe = y.charAt(I), c) {
            case 9:
            case 32:
              if ($ + N + f === 0)
                switch (Y) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    oe = "";
                    break;
                  default:
                    c !== 32 && (oe = " ");
                }
              break;
            case 0:
              oe = "\\0";
              break;
            case 12:
              oe = "\\f";
              break;
            case 11:
              oe = "\\v";
              break;
            case 38:
              $ + f + N === 0 && (X = ye = 1, oe = "\f" + oe);
              break;
            case 108:
              if ($ + f + N + ee === 0 && 0 < V)
                switch (I - V) {
                  case 2:
                    Y === 112 && y.charCodeAt(I - 3) === 58 && (ee = Y);
                  case 8:
                    d === 111 && (ee = d);
                }
              break;
            case 58:
              $ + f + N === 0 && (V = I);
              break;
            case 44:
              f + z + $ + N === 0 && (X = 1, oe += "\r");
              break;
            case 34:
            case 39:
              f === 0 && ($ = $ === c ? 0 : $ === 0 ? c : $);
              break;
            case 91:
              $ + f + z === 0 && N++;
              break;
            case 93:
              $ + f + z === 0 && N--;
              break;
            case 41:
              $ + f + N === 0 && z--;
              break;
            case 40:
              if ($ + f + N === 0) {
                if (k === 0)
                  switch (2 * Y + 3 * d) {
                    case 533:
                      break;
                    default:
                      k = 1;
                  }
                z++;
              }
              break;
            case 64:
              f + z + $ + N + V + T === 0 && (T = 1);
              break;
            case 42:
            case 47:
              if (!(0 < $ + N + z))
                switch (f) {
                  case 0:
                    switch (2 * c + 3 * y.charCodeAt(I + 1)) {
                      case 235:
                        f = 47;
                        break;
                      case 220:
                        q = I, f = 42;
                    }
                    break;
                  case 42:
                    c === 47 && Y === 42 && q + 2 !== I && (y.charCodeAt(q + 2) === 33 && (B += y.substring(q, I + 1)), oe = "", f = 0);
                }
          }
          f === 0 && (_ += oe);
      }
      d = Y, Y = c, I++;
    }
    if (q = B.length, 0 < q) {
      if (X = h, 0 < H && (ue = p(2, B, X, v, K, W, q, A, o, A), ue !== void 0 && (B = ue).length === 0))
        return xe + B + Te;
      if (B = X.join(",") + "{" + B + "}", G * ee !== 0) {
        switch (G !== 2 || u(B, 2) || (ee = 0), ee) {
          case 111:
            B = B.replace(C, ":-moz-$1") + B;
            break;
          case 112:
            B = B.replace(P, "::-webkit-input-$1") + B.replace(P, "::-moz-$1") + B.replace(P, ":-ms-input-$1") + B;
        }
        ee = 0;
      }
    }
    return xe + B + Te;
  }
  function t(v, h, y) {
    var A = h.trim().split(s);
    h = A;
    var o = A.length, N = v.length;
    switch (N) {
      case 0:
      case 1:
        var f = 0;
        for (v = N === 0 ? "" : v[0] + " "; f < o; ++f)
          h[f] = n(v, h[f], y).trim();
        break;
      default:
        var z = f = 0;
        for (h = []; f < o; ++f)
          for (var $ = 0; $ < N; ++$)
            h[z++] = n(v[$] + " ", A[f], y).trim();
    }
    return h;
  }
  function n(v, h, y) {
    var A = h.charCodeAt(0);
    switch (33 > A && (A = (h = h.trim()).charCodeAt(0)), A) {
      case 38:
        return h.replace(x, "$1" + v.trim());
      case 58:
        return v.trim() + h.replace(x, "$1" + v.trim());
      default:
        if (0 < 1 * y && 0 < h.indexOf("\f"))
          return h.replace(x, (v.charCodeAt(0) === 58 ? "" : "$1") + v.trim());
    }
    return v + h;
  }
  function a(v, h, y, A) {
    var o = v + ";", N = 2 * h + 3 * y + 4 * A;
    if (N === 944) {
      v = o.indexOf(":", 9) + 1;
      var f = o.substring(v, o.length - 1).trim();
      return f = o.substring(0, v).trim() + f + ";", G === 1 || G === 2 && u(f, 1) ? "-webkit-" + f + f : f;
    }
    if (G === 0 || G === 2 && !u(o, 1))
      return o;
    switch (N) {
      case 1015:
        return o.charCodeAt(10) === 97 ? "-webkit-" + o + o : o;
      case 951:
        return o.charCodeAt(3) === 116 ? "-webkit-" + o + o : o;
      case 963:
        return o.charCodeAt(5) === 110 ? "-webkit-" + o + o : o;
      case 1009:
        if (o.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + o + o;
      case 978:
        return "-webkit-" + o + "-moz-" + o + o;
      case 1019:
      case 983:
        return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
      case 883:
        if (o.charCodeAt(8) === 45)
          return "-webkit-" + o + o;
        if (0 < o.indexOf("image-set(", 11))
          return o.replace(ae, "$1-webkit-$2") + o;
        break;
      case 932:
        if (o.charCodeAt(4) === 45)
          switch (o.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
            case 115:
              return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
            case 98:
              return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o;
          }
        return "-webkit-" + o + "-ms-" + o + o;
      case 964:
        return "-webkit-" + o + "-ms-flex-" + o + o;
      case 1023:
        if (o.charCodeAt(8) !== 99)
          break;
        return f = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + f + "-webkit-" + o + "-ms-flex-pack" + f + o;
      case 1005:
        return E.test(o) ? o.replace(M, ":-webkit-") + o.replace(M, ":-moz-") + o : o;
      case 1e3:
        switch (f = o.substring(13).trim(), h = f.indexOf("-") + 1, f.charCodeAt(0) + f.charCodeAt(h)) {
          case 226:
            f = o.replace(i, "tb");
            break;
          case 232:
            f = o.replace(i, "tb-rl");
            break;
          case 220:
            f = o.replace(i, "lr");
            break;
          default:
            return o;
        }
        return "-webkit-" + o + "-ms-" + f + o;
      case 1017:
        if (o.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (h = (o = v).length - 10, f = (o.charCodeAt(h) === 33 ? o.substring(0, h) : o).substring(v.indexOf(":", 7) + 1).trim(), N = f.charCodeAt(0) + (f.charCodeAt(7) | 0)) {
          case 203:
            if (111 > f.charCodeAt(8))
              break;
          case 115:
            o = o.replace(f, "-webkit-" + f) + ";" + o;
            break;
          case 207:
          case 102:
            o = o.replace(f, "-webkit-" + (102 < N ? "inline-" : "") + "box") + ";" + o.replace(f, "-webkit-" + f) + ";" + o.replace(f, "-ms-" + f + "box") + ";" + o;
        }
        return o + ";";
      case 938:
        if (o.charCodeAt(5) === 45)
          switch (o.charCodeAt(6)) {
            case 105:
              return f = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + f + "-ms-flex-" + f + o;
            case 115:
              return "-webkit-" + o + "-ms-flex-item-" + o.replace(Z, "") + o;
            default:
              return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(Z, "") + o;
          }
        break;
      case 973:
      case 989:
        if (o.charCodeAt(3) !== 45 || o.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (re.test(v) === !0)
          return (f = v.substring(v.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(v.replace("stretch", "fill-available"), h, y, A).replace(":fill-available", ":stretch") : o.replace(f, "-webkit-" + f) + o.replace(f, "-moz-" + f.replace("fill-", "")) + o;
        break;
      case 962:
        if (o = "-webkit-" + o + (o.charCodeAt(5) === 102 ? "-ms-" + o : "") + o, y + A === 211 && o.charCodeAt(13) === 105 && 0 < o.indexOf("transform", 10))
          return o.substring(0, o.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + o;
    }
    return o;
  }
  function u(v, h) {
    var y = v.indexOf(h === 1 ? ":" : "{"), A = v.substring(0, h !== 3 ? y : 10);
    return y = v.substring(y + 1, v.length - 1), se(h !== 2 ? A : A.replace(J, "$1"), y, h);
  }
  function l(v, h) {
    var y = a(h, h.charCodeAt(0), h.charCodeAt(1), h.charCodeAt(2));
    return y !== h + ";" ? y.replace(te, " or ($1)").substring(4) : "(" + h + ")";
  }
  function p(v, h, y, A, o, N, f, z, $, k) {
    for (var c = 0, Y = h, d; c < H; ++c)
      switch (d = Q[c].call(S, v, Y, y, A, o, N, f, z, $, k)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Y = d;
      }
    if (Y !== h)
      return Y;
  }
  function m(v) {
    switch (v) {
      case void 0:
      case null:
        H = Q.length = 0;
        break;
      default:
        if (typeof v == "function")
          Q[H++] = v;
        else if (typeof v == "object")
          for (var h = 0, y = v.length; h < y; ++h)
            m(v[h]);
        else
          ne = !!v | 0;
    }
    return m;
  }
  function g(v) {
    return v = v.prefix, v !== void 0 && (se = null, v ? typeof v != "function" ? G = 1 : (G = 2, se = v) : G = 0), g;
  }
  function S(v, h) {
    var y = v;
    if (33 > y.charCodeAt(0) && (y = y.trim()), ce = y, y = [ce], 0 < H) {
      var A = p(-1, h, y, y, K, W, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (h = A);
    }
    var o = r(ie, y, h, 0, 0);
    return 0 < H && (A = p(-2, o, y, y, K, W, o.length, 0, 0, 0), A !== void 0 && (o = A)), ce = "", ee = 0, W = K = 1, o;
  }
  var b = /^\0+/g, O = /[\0\r\f]/g, M = /: */g, E = /zoo|gra/, w = /([,: ])(transform)/g, s = /,\r+?/g, x = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, P = /::(place)/g, C = /:(read-only)/g, i = /[svh]\w+-[tblr]{2}/, U = /\(\s*(.*)\s*\)/g, te = /([\s\S]*?);/g, Z = /-self|flex-/g, J = /[^]*?(:[rp][el]a[\w-]+)[^]*/, re = /stretch|:\s*\w+\-(?:conte|avail)/, ae = /([^-])(image-set\()/, W = 1, K = 1, ee = 0, G = 1, ie = [], Q = [], H = 0, se = null, ne = 0, ce = "";
  return S.use = m, S.set = g, e !== void 0 && g(e), S;
}
var _t = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Rt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Pt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ze = /* @__PURE__ */ Rt(
  function(e) {
    return Pt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $e = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Tt() {
  if (Ke)
    return L;
  Ke = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, s = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function P(i) {
    if (typeof i == "object" && i !== null) {
      var U = i.$$typeof;
      switch (U) {
        case r:
          switch (i = i.type, i) {
            case m:
            case g:
            case n:
            case u:
            case a:
            case b:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case p:
                case S:
                case E:
                case M:
                case l:
                  return i;
                default:
                  return U;
              }
          }
        case t:
          return U;
      }
    }
  }
  function C(i) {
    return P(i) === g;
  }
  return L.AsyncMode = m, L.ConcurrentMode = g, L.ContextConsumer = p, L.ContextProvider = l, L.Element = r, L.ForwardRef = S, L.Fragment = n, L.Lazy = E, L.Memo = M, L.Portal = t, L.Profiler = u, L.StrictMode = a, L.Suspense = b, L.isAsyncMode = function(i) {
    return C(i) || P(i) === m;
  }, L.isConcurrentMode = C, L.isContextConsumer = function(i) {
    return P(i) === p;
  }, L.isContextProvider = function(i) {
    return P(i) === l;
  }, L.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === r;
  }, L.isForwardRef = function(i) {
    return P(i) === S;
  }, L.isFragment = function(i) {
    return P(i) === n;
  }, L.isLazy = function(i) {
    return P(i) === E;
  }, L.isMemo = function(i) {
    return P(i) === M;
  }, L.isPortal = function(i) {
    return P(i) === t;
  }, L.isProfiler = function(i) {
    return P(i) === u;
  }, L.isStrictMode = function(i) {
    return P(i) === a;
  }, L.isSuspense = function(i) {
    return P(i) === b;
  }, L.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === g || i === u || i === a || i === b || i === O || typeof i == "object" && i !== null && (i.$$typeof === E || i.$$typeof === M || i.$$typeof === l || i.$$typeof === p || i.$$typeof === S || i.$$typeof === s || i.$$typeof === x || i.$$typeof === R || i.$$typeof === w);
  }, L.typeOf = P, L;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function xt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, s = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function P(c) {
      return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      c === n || c === g || c === u || c === a || c === b || c === O || typeof c == "object" && c !== null && (c.$$typeof === E || c.$$typeof === M || c.$$typeof === l || c.$$typeof === p || c.$$typeof === S || c.$$typeof === s || c.$$typeof === x || c.$$typeof === R || c.$$typeof === w);
    }
    function C(c) {
      if (typeof c == "object" && c !== null) {
        var Y = c.$$typeof;
        switch (Y) {
          case r:
            var d = c.type;
            switch (d) {
              case m:
              case g:
              case n:
              case u:
              case a:
              case b:
                return d;
              default:
                var T = d && d.$$typeof;
                switch (T) {
                  case p:
                  case S:
                  case E:
                  case M:
                  case l:
                    return T;
                  default:
                    return Y;
                }
            }
          case t:
            return Y;
        }
      }
    }
    var i = m, U = g, te = p, Z = l, J = r, re = S, ae = n, W = E, K = M, ee = t, G = u, ie = a, Q = b, H = !1;
    function se(c) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(c) || C(c) === m;
    }
    function ne(c) {
      return C(c) === g;
    }
    function ce(c) {
      return C(c) === p;
    }
    function v(c) {
      return C(c) === l;
    }
    function h(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function y(c) {
      return C(c) === S;
    }
    function A(c) {
      return C(c) === n;
    }
    function o(c) {
      return C(c) === E;
    }
    function N(c) {
      return C(c) === M;
    }
    function f(c) {
      return C(c) === t;
    }
    function z(c) {
      return C(c) === u;
    }
    function $(c) {
      return C(c) === a;
    }
    function k(c) {
      return C(c) === b;
    }
    j.AsyncMode = i, j.ConcurrentMode = U, j.ContextConsumer = te, j.ContextProvider = Z, j.Element = J, j.ForwardRef = re, j.Fragment = ae, j.Lazy = W, j.Memo = K, j.Portal = ee, j.Profiler = G, j.StrictMode = ie, j.Suspense = Q, j.isAsyncMode = se, j.isConcurrentMode = ne, j.isContextConsumer = ce, j.isContextProvider = v, j.isElement = h, j.isForwardRef = y, j.isFragment = A, j.isLazy = o, j.isMemo = N, j.isPortal = f, j.isProfiler = z, j.isStrictMode = $, j.isSuspense = k, j.isValidElementType = P, j.typeOf = C;
  }()), j;
}
process.env.NODE_ENV === "production" ? $e.exports = Tt() : $e.exports = xt();
var kt = $e.exports, Ve = kt, Ot = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Nt = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, $t = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Be = {};
Be[Ve.ForwardRef] = $t;
Be[Ve.Memo] = lt;
function Je(e) {
  return Ve.isMemo(e) ? lt : Be[e.$$typeof] || Ot;
}
var It = Object.defineProperty, Mt = Object.getOwnPropertyNames, et = Object.getOwnPropertySymbols, Dt = Object.getOwnPropertyDescriptor, Ft = Object.getPrototypeOf, tt = Object.prototype;
function ut(e, r, t) {
  if (typeof r != "string") {
    if (tt) {
      var n = Ft(r);
      n && n !== tt && ut(e, n, t);
    }
    var a = Mt(r);
    et && (a = a.concat(et(r)));
    for (var u = Je(e), l = Je(r), p = 0; p < a.length; ++p) {
      var m = a[p];
      if (!Nt[m] && !(t && t[m]) && !(l && l[m]) && !(u && u[m])) {
        var g = Dt(r, m);
        try {
          It(e, m, g);
        } catch {
        }
      }
    }
  }
  return e;
}
var Lt = ut;
const jt = /* @__PURE__ */ wt(Lt);
function le() {
  return (le = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var rt = function(e, r) {
  for (var t = [e[0]], n = 0, a = r.length; n < a; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, Ie = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ye.typeOf(e);
}, _e = Object.freeze([]), fe = Object.freeze({});
function Se(e) {
  return typeof e == "function";
}
function Me(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ue(e) {
  return e && typeof e.styledComponentId == "string";
}
var pe = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ge = typeof window < "u" && "HTMLElement" in window, zt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Yt = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Vt() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function me(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Vt.apply(void 0, [Yt[e]].concat(t)).trim());
}
var Bt = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, a = 0; a < t; a++)
      n += this.groupSizes[a];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, u = a.length, l = u; t >= l; )
        (l <<= 1) < 0 && me(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var p = u; p < l; p++)
        this.groupSizes[p] = 0;
    }
    for (var m = this.indexOfGroup(t + 1), g = 0, S = n.length; g < S; g++)
      this.tag.insertRule(m, n[g]) && (this.groupSizes[t]++, m++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], a = this.indexOfGroup(t), u = a + n;
      this.groupSizes[t] = 0;
      for (var l = a; l < u; l++)
        this.tag.deleteRule(a);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var a = this.groupSizes[t], u = this.indexOfGroup(t), l = u + a, p = u; p < l; p++)
      n += this.tag.getRule(p) + `/*!sc*/
`;
    return n;
  }, e;
}(), Ae = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), ge = 1, we = function(e) {
  if (Ae.has(e))
    return Ae.get(e);
  for (; Re.has(ge); )
    ge++;
  var r = ge++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && me(16, "" + r), Ae.set(e, r), Re.set(r, e), r;
}, Ut = function(e) {
  return Re.get(e);
}, Gt = function(e, r) {
  r >= ge && (ge = r + 1), Ae.set(e, r), Re.set(r, e);
}, Ht = "style[" + pe + '][data-styled-version="5.3.6"]', Wt = new RegExp("^" + pe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Xt = function(e, r, t) {
  for (var n, a = t.split(","), u = 0, l = a.length; u < l; u++)
    (n = a[u]) && e.registerName(r, n);
}, qt = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], a = 0, u = t.length; a < u; a++) {
    var l = t[a].trim();
    if (l) {
      var p = l.match(Wt);
      if (p) {
        var m = 0 | parseInt(p[1], 10), g = p[2];
        m !== 0 && (Gt(g, m), Xt(e, g, p[3]), e.getTag().insertRules(m, n)), n.length = 0;
      } else
        n.push(l);
    }
  }
}, Zt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ft = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), a = function(p) {
    for (var m = p.childNodes, g = m.length; g >= 0; g--) {
      var S = m[g];
      if (S && S.nodeType === 1 && S.hasAttribute(pe))
        return S;
    }
  }(t), u = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(pe, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var l = Zt();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, u), n;
}, Kt = function() {
  function e(t) {
    var n = this.element = ft(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var u = document.styleSheets, l = 0, p = u.length; l < p; l++) {
        var m = u[l];
        if (m.ownerNode === a)
          return m;
      }
      me(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Qt = function() {
  function e(t) {
    var n = this.element = ft(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(n), u = this.nodes[t];
      return this.element.insertBefore(a, u || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Jt = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), nt = Ge, er = { isServer: !Ge, useCSSOMInjection: !zt }, dt = function() {
  function e(t, n, a) {
    t === void 0 && (t = fe), n === void 0 && (n = {}), this.options = le({}, er, {}, t), this.gs = n, this.names = new Map(a), this.server = !!t.isServer, !this.server && Ge && nt && (nt = !1, function(u) {
      for (var l = document.querySelectorAll(Ht), p = 0, m = l.length; p < m; p++) {
        var g = l[p];
        g && g.getAttribute(pe) !== "active" && (qt(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(t) {
    return we(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(le({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, u = n.useCSSOMInjection, l = n.target, t = a ? new Jt(l) : u ? new Kt(l) : new Qt(l), new Bt(t)));
    var t, n, a, u, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (we(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(t, a);
    }
  }, r.insertRules = function(t, n, a) {
    this.registerName(t, n), this.getTag().insertRules(we(t), a);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(we(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), a = n.length, u = "", l = 0; l < a; l++) {
        var p = Ut(l);
        if (p !== void 0) {
          var m = t.names.get(p), g = n.getGroup(l);
          if (m && g && m.size) {
            var S = pe + ".g" + l + '[id="' + p + '"]', b = "";
            m !== void 0 && m.forEach(function(O) {
              O.length > 0 && (b += O + ",");
            }), u += "" + g + S + '{content:"' + b + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), tr = /(a)(d)/gi, ot = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function De(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = ot(r % 52) + t;
  return (ot(r % 52) + t).replace(tr, "$1-$2");
}
var de = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, pt = function(e) {
  return de(5381, e);
};
function rr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Se(t) && !Ue(t))
      return !1;
  }
  return !0;
}
var nr = pt("5.3.6"), or = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && rr(r), this.componentId = t, this.baseHash = de(nr, t), this.baseStyle = n, dt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var a = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(a, this.staticRulesId))
        u.push(this.staticRulesId);
      else {
        var l = he(this.rules, r, t, n).join(""), p = De(de(this.baseHash, l) >>> 0);
        if (!t.hasNameForId(a, p)) {
          var m = n(l, "." + p, void 0, a);
          t.insertRules(a, p, m);
        }
        u.push(p), this.staticRulesId = p;
      }
    else {
      for (var g = this.rules.length, S = de(this.baseHash, n.hash), b = "", O = 0; O < g; O++) {
        var M = this.rules[O];
        if (typeof M == "string")
          b += M, process.env.NODE_ENV !== "production" && (S = de(S, M + O));
        else if (M) {
          var E = he(M, r, t, n), w = Array.isArray(E) ? E.join("") : E;
          S = de(S, w + O), b += w;
        }
      }
      if (b) {
        var s = De(S >>> 0);
        if (!t.hasNameForId(a, s)) {
          var x = n(b, "." + s, void 0, a);
          t.insertRules(a, s, x);
        }
        u.push(s);
      }
    }
    return u.join(" ");
  }, e;
}(), ar = /^\s*\/\/.*$/gm, sr = [":", "[", ".", "#"];
function ir(e) {
  var r, t, n, a, u = e === void 0 ? fe : e, l = u.options, p = l === void 0 ? fe : l, m = u.plugins, g = m === void 0 ? _e : m, S = new At(p), b = [], O = function(w) {
    function s(x) {
      if (x)
        try {
          w(x + "}");
        } catch {
        }
    }
    return function(x, R, P, C, i, U, te, Z, J, re) {
      switch (x) {
        case 1:
          if (J === 0 && R.charCodeAt(0) === 64)
            return w(R + ";"), "";
          break;
        case 2:
          if (Z === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (Z) {
            case 102:
            case 112:
              return w(P[0] + R), "";
            default:
              return R + (re === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(s);
      }
    };
  }(function(w) {
    b.push(w);
  }), M = function(w, s, x) {
    return s === 0 && sr.indexOf(x[t.length]) !== -1 || x.match(a) ? w : "." + r;
  };
  function E(w, s, x, R) {
    R === void 0 && (R = "&");
    var P = w.replace(ar, ""), C = s && x ? x + " " + s + " { " + P + " }" : P;
    return r = R, t = s, n = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), S(x || !s ? "" : s, C);
  }
  return S.use([].concat(g, [function(w, s, x) {
    w === 2 && x.length && x[0].lastIndexOf(t) > 0 && (x[0] = x[0].replace(n, M));
  }, O, function(w) {
    if (w === -2) {
      var s = b;
      return b = [], s;
    }
  }])), E.hash = g.length ? g.reduce(function(w, s) {
    return s.name || me(15), de(w, s.name);
  }, 5381).toString() : "", E;
}
var ht = Pe.createContext();
ht.Consumer;
var mt = Pe.createContext(), cr = (mt.Consumer, new dt()), Fe = ir();
function lr() {
  return ze(ht) || cr;
}
function ur() {
  return ze(mt) || Fe;
}
var fr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(a, u) {
      u === void 0 && (u = Fe);
      var l = n.name + u.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, u(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return me(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Fe), this.name + r.hash;
  }, e;
}(), dr = /([A-Z])/, pr = /([A-Z])/g, hr = /^ms-/, mr = function(e) {
  return "-" + e.toLowerCase();
};
function at(e) {
  return dr.test(e) ? e.replace(pr, mr).replace(hr, "-ms-") : e;
}
var st = function(e) {
  return e == null || e === !1 || e === "";
};
function he(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var a, u = [], l = 0, p = e.length; l < p; l += 1)
      (a = he(e[l], r, t, n)) !== "" && (Array.isArray(a) ? u.push.apply(u, a) : u.push(a));
    return u;
  }
  if (st(e))
    return "";
  if (Ue(e))
    return "." + e.styledComponentId;
  if (Se(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !r)
      return e;
    var m = e(r);
    return process.env.NODE_ENV !== "production" && Ye.isElement(m) && console.warn(Me(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), he(m, r, t, n);
  }
  var g;
  return e instanceof fr ? t ? (e.inject(t, n), e.getName(n)) : e : Ie(e) ? function S(b, O) {
    var M, E, w = [];
    for (var s in b)
      b.hasOwnProperty(s) && !st(b[s]) && (Array.isArray(b[s]) && b[s].isCss || Se(b[s]) ? w.push(at(s) + ":", b[s], ";") : Ie(b[s]) ? w.push.apply(w, S(b[s], s)) : w.push(at(s) + ": " + (M = s, (E = b[s]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || M in _t ? String(E).trim() : E + "px") + ";"));
    return O ? [O + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var it = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function yr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Se(e) || Ie(e) ? it(he(rt(_e, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : it(he(rt(e, t)));
}
var ct = /invalid hook call/i, Ee = /* @__PURE__ */ new Set(), vr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(u) {
        if (ct.test(u))
          a = !1, Ee.delete(t);
        else {
          for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), m = 1; m < l; m++)
            p[m - 1] = arguments[m];
          n.apply(void 0, [u].concat(p));
        }
      }, St(), a && !Ee.has(t) && (console.warn(t), Ee.add(t));
    } catch (u) {
      ct.test(u.message) && Ee.delete(t);
    } finally {
      console.error = n;
    }
  }
}, gr = function(e, r, t) {
  return t === void 0 && (t = fe), e.theme !== t.theme && e.theme || r || t.theme;
}, Sr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, br = /(^-|-$)/g;
function ke(e) {
  return e.replace(Sr, "-").replace(br, "");
}
var wr = function(e) {
  return De(pt(e) >>> 0);
};
function Ce(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Le = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Er = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Cr(e, r, t) {
  var n = e[t];
  Le(r) && Le(n) ? yt(n, r) : e[t] = r;
}
function yt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var a = 0, u = t; a < u.length; a++) {
    var l = u[a];
    if (Le(l))
      for (var p in l)
        Er(p) && Cr(e, l[p], p);
  }
  return e;
}
var vt = Pe.createContext();
vt.Consumer;
var Oe = {};
function gt(e, r, t) {
  var n = Ue(e), a = !Ce(e), u = r.attrs, l = u === void 0 ? _e : u, p = r.componentId, m = p === void 0 ? function(R, P) {
    var C = typeof R != "string" ? "sc" : ke(R);
    Oe[C] = (Oe[C] || 0) + 1;
    var i = C + "-" + wr("5.3.6" + C + Oe[C]);
    return P ? P + "-" + i : i;
  }(r.displayName, r.parentComponentId) : p, g = r.displayName, S = g === void 0 ? function(R) {
    return Ce(R) ? "styled." + R : "Styled(" + Me(R) + ")";
  }(e) : g, b = r.displayName && r.componentId ? ke(r.displayName) + "-" + r.componentId : r.componentId || m, O = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, M = r.shouldForwardProp;
  n && e.shouldForwardProp && (M = r.shouldForwardProp ? function(R, P, C) {
    return e.shouldForwardProp(R, P, C) && r.shouldForwardProp(R, P, C);
  } : e.shouldForwardProp);
  var E, w = new or(t, b, n ? e.componentStyle : void 0), s = w.isStatic && l.length === 0, x = function(R, P) {
    return function(C, i, U, te) {
      var Z = C.attrs, J = C.componentStyle, re = C.defaultProps, ae = C.foldedComponentIds, W = C.shouldForwardProp, K = C.styledComponentId, ee = C.target;
      process.env.NODE_ENV !== "production" && We(K);
      var G = function(A, o, N) {
        A === void 0 && (A = fe);
        var f = le({}, o, { theme: A }), z = {};
        return N.forEach(function($) {
          var k, c, Y, d = $;
          for (k in Se(d) && (d = d(f)), d)
            f[k] = z[k] = k === "className" ? (c = z[k], Y = d[k], c && Y ? c + " " + Y : c || Y) : d[k];
        }), [f, z];
      }(gr(i, ze(vt), re) || fe, i, Z), ie = G[0], Q = G[1], H = function(A, o, N, f) {
        var z = lr(), $ = ur(), k = o ? A.generateAndInjectStyles(fe, z, $) : A.generateAndInjectStyles(N, z, $);
        return process.env.NODE_ENV !== "production" && We(k), process.env.NODE_ENV !== "production" && !o && f && f(k), k;
      }(J, te, ie, process.env.NODE_ENV !== "production" ? C.warnTooManyClasses : void 0), se = U, ne = Q.$as || i.$as || Q.as || i.as || ee, ce = Ce(ne), v = Q !== i ? le({}, i, {}, Q) : i, h = {};
      for (var y in v)
        y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? h.as = v[y] : (W ? W(y, Ze, ne) : !ce || Ze(y)) && (h[y] = v[y]));
      return i.style && Q.style !== i.style && (h.style = le({}, i.style, {}, Q.style)), h.className = Array.prototype.concat(ae, K, H !== K ? H : null, i.className, Q.className).filter(Boolean).join(" "), h.ref = se, bt(ne, h);
    }(E, R, P, s);
  };
  return x.displayName = S, (E = Pe.forwardRef(x)).attrs = O, E.componentStyle = w, E.displayName = S, E.shouldForwardProp = M, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _e, E.styledComponentId = b, E.target = n ? e.target : e, E.withComponent = function(R) {
    var P = r.componentId, C = function(U, te) {
      if (U == null)
        return {};
      var Z, J, re = {}, ae = Object.keys(U);
      for (J = 0; J < ae.length; J++)
        Z = ae[J], te.indexOf(Z) >= 0 || (re[Z] = U[Z]);
      return re;
    }(r, ["componentId"]), i = P && P + "-" + (Ce(R) ? R : ke(Me(R)));
    return gt(R, le({}, C, { attrs: O, componentId: i }), t);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? yt({}, e.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (vr(S, b), E.warnTooManyClasses = function(R, P) {
    var C = {}, i = !1;
    return function(U) {
      if (!i && (C[U] = !0, Object.keys(C).length >= 200)) {
        var te = P ? ' with the id of "' + P + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + te + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), i = !0, C = {};
      }
    };
  }(S, b)), E.toString = function() {
    return "." + E.styledComponentId;
  }, a && jt(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var je = function(e) {
  return function r(t, n, a) {
    if (a === void 0 && (a = fe), !Ye.isValidElementType(n))
      return me(1, String(n));
    var u = function() {
      return t(n, a, yr.apply(void 0, arguments));
    };
    return u.withConfig = function(l) {
      return r(t, n, le({}, a, {}, l));
    }, u.attrs = function(l) {
      return r(t, n, le({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, u;
  }(gt, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  je[e] = je(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ar = je, _r = Ar.div`
  color: pink;
`;
function Tr(e) {
  return /* @__PURE__ */ He(_r, { children: /* @__PURE__ */ He("h1", { children: "Welcome to React!" }) });
}
export {
  Tr as React
};
