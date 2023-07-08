function kp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var xp =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Cp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Yu = { exports: {} },
  mo = {},
  Gu = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for("react.element"),
  Tp = Symbol.for("react.portal"),
  _p = Symbol.for("react.fragment"),
  Pp = Symbol.for("react.strict_mode"),
  Np = Symbol.for("react.profiler"),
  Op = Symbol.for("react.provider"),
  Lp = Symbol.for("react.context"),
  Ip = Symbol.for("react.forward_ref"),
  Rp = Symbol.for("react.suspense"),
  Mp = Symbol.for("react.memo"),
  zp = Symbol.for("react.lazy"),
  xs = Symbol.iterator;
function jp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xs && e[xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qu = Object.assign,
  Zu = {};
function qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Xu);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = qn.prototype;
function va(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Xu);
}
var ga = (va.prototype = new Ju());
ga.constructor = va;
qu(ga, qn.prototype);
ga.isPureReactComponent = !0;
var Cs = Array.isArray,
  ec = Object.prototype.hasOwnProperty,
  ya = { current: null },
  tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ec.call(t, r) && !tc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: ya.current,
  };
}
function Fp(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function Dp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ts = /\/+/g;
function Uo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dp("" + e.key)
    : t.toString(36);
}
function Ci(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gr:
          case Tp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Uo(l, 0) : r),
      Cs(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ts, "$&/") + "/"),
          Ci(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (wa(i) &&
            (i = Fp(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ts, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Cs(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + Uo(o, a);
      l += Ci(o, t, n, s, i);
    }
  else if (((s = jp(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Uo(o, a++)), (l += Ci(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function oi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ci(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Up(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Ti = { transition: null },
  Ap = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Ti,
    ReactCurrentOwner: ya,
  };
D.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = qn;
D.Fragment = _p;
D.Profiler = Np;
D.PureComponent = va;
D.StrictMode = Pp;
D.Suspense = Rp;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ap;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = qu({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = ya.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ec.call(t, s) &&
        !tc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Gr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Op, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = nc;
D.createFactory = function (e) {
  var t = nc.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Ip, render: e };
};
D.isValidElement = wa;
D.lazy = function (e) {
  return { $$typeof: zp, _payload: { _status: -1, _result: e }, _init: Up };
};
D.memo = function (e, t) {
  return { $$typeof: Mp, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Ti.transition;
  Ti.transition = {};
  try {
    e();
  } finally {
    Ti.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return Oe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
D.useId = function () {
  return Oe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return Oe.current.useRef(e);
};
D.useState = function (e) {
  return Oe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return Oe.current.useTransition();
};
D.version = "18.2.0";
Gu.exports = D;
var x = Gu.exports;
const b = Cp(x),
  Bp = kp({ __proto__: null, default: b }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp = x,
  Wp = Symbol.for("react.element"),
  $p = Symbol.for("react.fragment"),
  bp = Object.prototype.hasOwnProperty,
  Hp = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qp = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) bp.call(t, r) && !Qp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Wp,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Hp.current,
  };
}
mo.Fragment = $p;
mo.jsx = rc;
mo.jsxs = rc;
Yu.exports = mo;
var C = Yu.exports,
  ml = {},
  ic = { exports: {} },
  We = {},
  oc = { exports: {} },
  lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var j = T.length;
    T.push(I);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        J = T[q];
      if (0 < i(J, I)) (T[q] = I), (T[j] = J), (j = q);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      j = T.pop();
    if (j !== I) {
      T[0] = j;
      e: for (var q = 0, J = T.length, Ot = J >>> 1; q < Ot; ) {
        var ut = 2 * (q + 1) - 1,
          Lt = T[ut],
          et = ut + 1,
          It = T[et];
        if (0 > i(Lt, j))
          et < J && 0 > i(It, Lt)
            ? ((T[q] = It), (T[et] = j), (q = et))
            : ((T[q] = Lt), (T[ut] = j), (q = ut));
        else if (et < J && 0 > i(It, j)) (T[q] = It), (T[et] = j), (q = et);
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var j = T.sortIndex - I.sortIndex;
    return j !== 0 ? j : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    g = 1,
    y = null,
    c = 3,
    v = !1,
    p = !1,
    h = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= T)
        r(u), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = n(u);
    }
  }
  function w(T) {
    if (((h = !1), m(T), !p))
      if (n(s) !== null) (p = !0), oe(S);
      else {
        var I = n(u);
        I !== null && me(w, I.startTime - T);
      }
  }
  function S(T, I) {
    (p = !1), h && ((h = !1), f(_), (_ = -1)), (v = !0);
    var j = c;
    try {
      for (
        m(I), y = n(s);
        y !== null && (!(y.expirationTime > I) || (T && !re()));

      ) {
        var q = y.callback;
        if (typeof q == "function") {
          (y.callback = null), (c = y.priorityLevel);
          var J = q(y.expirationTime <= I);
          (I = e.unstable_now()),
            typeof J == "function" ? (y.callback = J) : y === n(s) && r(s),
            m(I);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var Ot = !0;
      else {
        var ut = n(u);
        ut !== null && me(w, ut.startTime - I), (Ot = !1);
      }
      return Ot;
    } finally {
      (y = null), (c = j), (v = !1);
    }
  }
  var P = !1,
    N = null,
    _ = -1,
    A = 5,
    R = -1;
  function re() {
    return !(e.unstable_now() - R < A);
  }
  function ae() {
    if (N !== null) {
      var T = e.unstable_now();
      R = T;
      var I = !0;
      try {
        I = N(!0, T);
      } finally {
        I ? ie() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var ie;
  if (typeof d == "function")
    ie = function () {
      d(ae);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      Je = se.port2;
    (se.port1.onmessage = ae),
      (ie = function () {
        Je.postMessage(null);
      });
  } else
    ie = function () {
      E(ae, 0);
    };
  function oe(T) {
    (N = T), P || ((P = !0), ie());
  }
  function me(T, I) {
    _ = E(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || v || ((p = !0), oe(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = c;
      }
      var j = c;
      c = I;
      try {
        return T();
      } finally {
        c = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var j = c;
      c = T;
      try {
        return I();
      } finally {
        c = j;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, j) {
      var q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? q + j : q))
          : (j = q),
        T)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (T = {
          id: g++,
          callback: I,
          priorityLevel: T,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > q
          ? ((T.sortIndex = j),
            t(u, T),
            n(s) === null &&
              T === n(u) &&
              (h ? (f(_), (_ = -1)) : (h = !0), me(w, j - q)))
          : ((T.sortIndex = J), t(s, T), p || v || ((p = !0), oe(S))),
        T
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (T) {
      var I = c;
      return function () {
        var j = c;
        c = I;
        try {
          return T.apply(this, arguments);
        } finally {
          c = j;
        }
      };
    });
})(lc);
oc.exports = lc;
var Kp = oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac = x,
  Ve = Kp;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sc = new Set(),
  Lr = {};
function wn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) sc.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hl = Object.prototype.hasOwnProperty,
  Yp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _s = {},
  Ps = {};
function Gp(e) {
  return hl.call(Ps, e)
    ? !0
    : hl.call(_s, e)
    ? !1
    : Yp.test(e)
    ? (Ps[e] = !0)
    : ((_s[e] = !0), !1);
}
function Xp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qp(e, t, n, r) {
  if (t === null || typeof t > "u" || Xp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Le(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ea = /[\-:]([a-z])/g;
function Sa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ea, Sa);
    we[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ea, Sa);
    we[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ea, Sa);
  we[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ka(e, t, n, r) {
  var i = we.hasOwnProperty(t) ? we[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qp(t, n, i, r) && (n = null),
    r || i === null
      ? Gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  li = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  _n = Symbol.for("react.fragment"),
  xa = Symbol.for("react.strict_mode"),
  vl = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  Ca = Symbol.for("react.forward_ref"),
  gl = Symbol.for("react.suspense"),
  yl = Symbol.for("react.suspense_list"),
  Ta = Symbol.for("react.memo"),
  zt = Symbol.for("react.lazy"),
  dc = Symbol.for("react.offscreen"),
  Ns = Symbol.iterator;
function or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ns && e[Ns]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Ao;
function pr(e) {
  if (Ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ao = (t && t[1]) || "";
    }
  return (
    `
` +
    Ao +
    e
  );
}
var Bo = !1;
function Vo(e, t) {
  if (!e || Bo) return "";
  Bo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Bo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? pr(e) : "";
}
function Zp(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr("Lazy");
    case 13:
      return pr("Suspense");
    case 19:
      return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vo(e.type, !1)), e;
    case 11:
      return (e = Vo(e.type.render, !1)), e;
    case 1:
      return (e = Vo(e.type, !0)), e;
    default:
      return "";
  }
}
function wl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _n:
      return "Fragment";
    case Tn:
      return "Portal";
    case vl:
      return "Profiler";
    case xa:
      return "StrictMode";
    case gl:
      return "Suspense";
    case yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cc:
        return (e.displayName || "Context") + ".Consumer";
      case uc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ca:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ta:
        return (
          (t = e.displayName || null), t !== null ? t : wl(e.type) || "Memo"
        );
      case zt:
        (t = e._payload), (e = e._init);
        try {
          return wl(e(t));
        } catch {}
    }
  return null;
}
function Jp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wl(t);
    case 8:
      return t === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function em(e) {
  var t = fc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ai(e) {
  e._valueTracker || (e._valueTracker = em(e));
}
function pc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ui(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function El(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Os(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function mc(e, t) {
  (t = t.checked), t != null && ka(e, "checked", t, !1);
}
function Sl(e, t) {
  mc(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kl(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ls(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function kl(e, t, n) {
  (t !== "number" || Ui(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Is(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function hc(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Rs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var si,
  gc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
  tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
  });
});
function yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yr.hasOwnProperty(e) && yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function wc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = yc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var nm = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Tl(e, t) {
  if (t) {
    if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function _l(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pl = null;
function _a(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nl = null,
  Un = null,
  An = null;
function Ms(e) {
  if ((e = Zr(e))) {
    if (typeof Nl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = wo(t)), Nl(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  Un ? (An ? An.push(e) : (An = [e])) : (Un = e);
}
function Sc() {
  if (Un) {
    var e = Un,
      t = An;
    if (((An = Un = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
  }
}
function kc(e, t) {
  return e(t);
}
function xc() {}
var Wo = !1;
function Cc(e, t, n) {
  if (Wo) return e(t, n);
  Wo = !0;
  try {
    return kc(e, t, n);
  } finally {
    (Wo = !1), (Un !== null || An !== null) && (xc(), Sc());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ol = !1;
if (Ct)
  try {
    var lr = {};
    Object.defineProperty(lr, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", lr, lr),
      window.removeEventListener("test", lr, lr);
  } catch {
    Ol = !1;
  }
function rm(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (g) {
    this.onError(g);
  }
}
var wr = !1,
  Ai = null,
  Bi = !1,
  Ll = null,
  im = {
    onError: function (e) {
      (wr = !0), (Ai = e);
    },
  };
function om(e, t, n, r, i, o, l, a, s) {
  (wr = !1), (Ai = null), rm.apply(im, arguments);
}
function lm(e, t, n, r, i, o, l, a, s) {
  if ((om.apply(this, arguments), wr)) {
    if (wr) {
      var u = Ai;
      (wr = !1), (Ai = null);
    } else throw Error(k(198));
    Bi || ((Bi = !0), (Ll = u));
  }
}
function En(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zs(e) {
  if (En(e) !== e) throw Error(k(188));
}
function am(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = En(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return zs(i), e;
        if (o === r) return zs(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function _c(e) {
  return (e = am(e)), e !== null ? Pc(e) : null;
}
function Pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nc = Ve.unstable_scheduleCallback,
  js = Ve.unstable_cancelCallback,
  sm = Ve.unstable_shouldYield,
  um = Ve.unstable_requestPaint,
  ue = Ve.unstable_now,
  cm = Ve.unstable_getCurrentPriorityLevel,
  Pa = Ve.unstable_ImmediatePriority,
  Oc = Ve.unstable_UserBlockingPriority,
  Vi = Ve.unstable_NormalPriority,
  dm = Ve.unstable_LowPriority,
  Lc = Ve.unstable_IdlePriority,
  ho = null,
  vt = null;
function fm(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : hm,
  pm = Math.log,
  mm = Math.LN2;
function hm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pm(e) / mm) | 0)) | 0;
}
var ui = 64,
  ci = 4194304;
function hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = hr(a)) : ((o &= l), o !== 0 && (r = hr(o)));
  } else (l = n & ~i), l !== 0 ? (r = hr(l)) : o !== 0 && (r = hr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - lt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function vm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - lt(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = vm(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Il(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ic() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function $o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n);
}
function ym(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - lt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Na(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function Rc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mc,
  Oa,
  zc,
  jc,
  Fc,
  Rl = !1,
  di = [],
  Wt = null,
  $t = null,
  bt = null,
  Mr = new Map(),
  zr = new Map(),
  Ft = [],
  wm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Zr(t)), t !== null && Oa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Em(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Wt = ar(Wt, e, t, n, r, i)), !0;
    case "dragenter":
      return ($t = ar($t, e, t, n, r, i)), !0;
    case "mouseover":
      return (bt = ar(bt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mr.set(o, ar(Mr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), zr.set(o, ar(zr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Dc(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = En(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tc(n)), t !== null)) {
          (e.blockedOn = t),
            Fc(e.priority, function () {
              zc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pl = r), n.target.dispatchEvent(r), (Pl = null);
    } else return (t = Zr(n)), t !== null && Oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ds(e, t, n) {
  _i(e) && n.delete(t);
}
function Sm() {
  (Rl = !1),
    Wt !== null && _i(Wt) && (Wt = null),
    $t !== null && _i($t) && ($t = null),
    bt !== null && _i(bt) && (bt = null),
    Mr.forEach(Ds),
    zr.forEach(Ds);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rl ||
      ((Rl = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Sm)));
}
function jr(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < di.length) {
    sr(di[0], e);
    for (var n = 1; n < di.length; n++) {
      var r = di[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && sr(Wt, e),
      $t !== null && sr($t, e),
      bt !== null && sr(bt, e),
      Mr.forEach(t),
      zr.forEach(t),
      n = 0;
    n < Ft.length;
    n++
  )
    (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
    Dc(n), n.blockedOn === null && Ft.shift();
}
var Bn = Nt.ReactCurrentBatchConfig,
  $i = !0;
function km(e, t, n, r) {
  var i = $,
    o = Bn.transition;
  Bn.transition = null;
  try {
    ($ = 1), La(e, t, n, r);
  } finally {
    ($ = i), (Bn.transition = o);
  }
}
function xm(e, t, n, r) {
  var i = $,
    o = Bn.transition;
  Bn.transition = null;
  try {
    ($ = 4), La(e, t, n, r);
  } finally {
    ($ = i), (Bn.transition = o);
  }
}
function La(e, t, n, r) {
  if ($i) {
    var i = Ml(e, t, n, r);
    if (i === null) Jo(e, t, r, bi, n), Fs(e, r);
    else if (Em(i, e, t, n, r)) r.stopPropagation();
    else if ((Fs(e, r), t & 4 && -1 < wm.indexOf(e))) {
      for (; i !== null; ) {
        var o = Zr(i);
        if (
          (o !== null && Mc(o),
          (o = Ml(e, t, n, r)),
          o === null && Jo(e, t, r, bi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Jo(e, t, r, null, n);
  }
}
var bi = null;
function Ml(e, t, n, r) {
  if (((bi = null), (e = _a(r)), (e = sn(e)), e !== null))
    if (((t = En(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bi = e), null;
}
function Uc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cm()) {
        case Pa:
          return 1;
        case Oc:
          return 4;
        case Vi:
        case dm:
          return 16;
        case Lc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  Ia = null,
  Pi = null;
function Ac() {
  if (Pi) return Pi;
  var e,
    t = Ia,
    n = t.length,
    r,
    i = "value" in Ut ? Ut.value : Ut.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Pi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fi() {
  return !0;
}
function Us() {
  return !1;
}
function $e(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fi
        : Us),
      (this.isPropagationStopped = Us),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi));
      },
      persist: function () {},
      isPersistent: fi,
    }),
    t
  );
}
var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ra = $e(Zn),
  qr = ne({}, Zn, { view: 0, detail: 0 }),
  Cm = $e(qr),
  bo,
  Ho,
  ur,
  vo = ne({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((bo = e.screenX - ur.screenX), (Ho = e.screenY - ur.screenY))
              : (Ho = bo = 0),
            (ur = e)),
          bo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ho;
    },
  }),
  As = $e(vo),
  Tm = ne({}, vo, { dataTransfer: 0 }),
  _m = $e(Tm),
  Pm = ne({}, qr, { relatedTarget: 0 }),
  Qo = $e(Pm),
  Nm = ne({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Om = $e(Nm),
  Lm = ne({}, Zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Im = $e(Lm),
  Rm = ne({}, Zn, { data: 0 }),
  Bs = $e(Rm),
  Mm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jm[e]) ? !!t[e] : !1;
}
function Ma() {
  return Fm;
}
var Dm = ne({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = Mm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ma,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Um = $e(Dm),
  Am = ne({}, vo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vs = $e(Am),
  Bm = ne({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ma,
  }),
  Vm = $e(Bm),
  Wm = ne({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $m = $e(Wm),
  bm = ne({}, vo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hm = $e(bm),
  Qm = [9, 13, 27, 32],
  za = Ct && "CompositionEvent" in window,
  Er = null;
Ct && "documentMode" in document && (Er = document.documentMode);
var Km = Ct && "TextEvent" in window && !Er,
  Bc = Ct && (!za || (Er && 8 < Er && 11 >= Er)),
  Ws = String.fromCharCode(32),
  $s = !1;
function Vc(e, t) {
  switch (e) {
    case "keyup":
      return Qm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function Ym(e, t) {
  switch (e) {
    case "compositionend":
      return Wc(t);
    case "keypress":
      return t.which !== 32 ? null : (($s = !0), Ws);
    case "textInput":
      return (e = t.data), e === Ws && $s ? null : e;
    default:
      return null;
  }
}
function Gm(e, t) {
  if (Pn)
    return e === "compositionend" || (!za && Vc(e, t))
      ? ((e = Ac()), (Pi = Ia = Ut = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xm[e.type] : t === "textarea";
}
function $c(e, t, n, r) {
  Ec(r),
    (t = Hi(t, "onChange")),
    0 < t.length &&
      ((n = new Ra("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Sr = null,
  Fr = null;
function qm(e) {
  ed(e, 0);
}
function go(e) {
  var t = Ln(e);
  if (pc(t)) return e;
}
function Zm(e, t) {
  if (e === "change") return t;
}
var bc = !1;
if (Ct) {
  var Ko;
  if (Ct) {
    var Yo = "oninput" in document;
    if (!Yo) {
      var Hs = document.createElement("div");
      Hs.setAttribute("oninput", "return;"),
        (Yo = typeof Hs.oninput == "function");
    }
    Ko = Yo;
  } else Ko = !1;
  bc = Ko && (!document.documentMode || 9 < document.documentMode);
}
function Qs() {
  Sr && (Sr.detachEvent("onpropertychange", Hc), (Fr = Sr = null));
}
function Hc(e) {
  if (e.propertyName === "value" && go(Fr)) {
    var t = [];
    $c(t, Fr, e, _a(e)), Cc(qm, t);
  }
}
function Jm(e, t, n) {
  e === "focusin"
    ? (Qs(), (Sr = t), (Fr = n), Sr.attachEvent("onpropertychange", Hc))
    : e === "focusout" && Qs();
}
function eh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return go(Fr);
}
function th(e, t) {
  if (e === "click") return go(t);
}
function nh(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function rh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : rh;
function Dr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!hl.call(t, i) || !st(e[i], t[i])) return !1;
  }
  return !0;
}
function Ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n = Ks(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ks(n);
  }
}
function Qc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Kc() {
  for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ui(e.document);
  }
  return t;
}
function ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ih(e) {
  var t = Kc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ja(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ys(n, o));
        var l = Ys(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var oh = Ct && "documentMode" in document && 11 >= document.documentMode,
  Nn = null,
  zl = null,
  kr = null,
  jl = !1;
function Gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jl ||
    Nn == null ||
    Nn !== Ui(r) ||
    ((r = Nn),
    "selectionStart" in r && ja(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (kr && Dr(kr, r)) ||
      ((kr = r),
      (r = Hi(zl, "onSelect")),
      0 < r.length &&
        ((t = new Ra("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))));
}
function pi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var On = {
    animationend: pi("Animation", "AnimationEnd"),
    animationiteration: pi("Animation", "AnimationIteration"),
    animationstart: pi("Animation", "AnimationStart"),
    transitionend: pi("Transition", "TransitionEnd"),
  },
  Go = {},
  Yc = {};
Ct &&
  ((Yc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete On.animationend.animation,
    delete On.animationiteration.animation,
    delete On.animationstart.animation),
  "TransitionEvent" in window || delete On.transitionend.transition);
function yo(e) {
  if (Go[e]) return Go[e];
  if (!On[e]) return e;
  var t = On[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yc) return (Go[e] = t[n]);
  return e;
}
var Gc = yo("animationend"),
  Xc = yo("animationiteration"),
  qc = yo("animationstart"),
  Zc = yo("transitionend"),
  Jc = new Map(),
  Xs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  Jc.set(e, t), wn(t, [e]);
}
for (var Xo = 0; Xo < Xs.length; Xo++) {
  var qo = Xs[Xo],
    lh = qo.toLowerCase(),
    ah = qo[0].toUpperCase() + qo.slice(1);
  Jt(lh, "on" + ah);
}
Jt(Gc, "onAnimationEnd");
Jt(Xc, "onAnimationIteration");
Jt(qc, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Zc, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sh = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function qs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lm(r, t, void 0, e), (e.currentTarget = null);
}
function ed(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          qs(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          qs(i, a, u), (o = s);
        }
    }
  }
  if (Bi) throw ((e = Ll), (Bi = !1), (Ll = null), e);
}
function G(e, t) {
  var n = t[Bl];
  n === void 0 && (n = t[Bl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (td(t, e, 2, !1), n.add(r));
}
function Zo(e, t, n) {
  var r = 0;
  t && (r |= 4), td(n, e, r, t);
}
var mi = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
  if (!e[mi]) {
    (e[mi] = !0),
      sc.forEach(function (n) {
        n !== "selectionchange" && (sh.has(n) || Zo(n, !1, e), Zo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mi] || ((t[mi] = !0), Zo("selectionchange", !1, t));
  }
}
function td(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var i = km;
      break;
    case 4:
      i = xm;
      break;
    default:
      i = La;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Jo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = sn(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Cc(function () {
    var u = o,
      g = _a(n),
      y = [];
    e: {
      var c = Jc.get(e);
      if (c !== void 0) {
        var v = Ra,
          p = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Um;
            break;
          case "focusin":
            (p = "focus"), (v = Qo);
            break;
          case "focusout":
            (p = "blur"), (v = Qo);
            break;
          case "beforeblur":
          case "afterblur":
            v = Qo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = As;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = _m;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Vm;
            break;
          case Gc:
          case Xc:
          case qc:
            v = Om;
            break;
          case Zc:
            v = $m;
            break;
          case "scroll":
            v = Cm;
            break;
          case "wheel":
            v = Hm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Im;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Vs;
        }
        var h = (t & 4) !== 0,
          E = !h && e === "scroll",
          f = h ? (c !== null ? c + "Capture" : null) : c;
        h = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              f !== null && ((w = Rr(d, f)), w != null && h.push(Ar(d, w, m)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < h.length &&
          ((c = new v(c, p, null, n, g)), y.push({ event: c, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          c &&
            n !== Pl &&
            (p = n.relatedTarget || n.fromElement) &&
            (sn(p) || p[Tt]))
        )
          break e;
        if (
          (v || c) &&
          ((c =
            g.window === g
              ? g
              : (c = g.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          v
            ? ((p = n.relatedTarget || n.toElement),
              (v = u),
              (p = p ? sn(p) : null),
              p !== null &&
                ((E = En(p)), p !== E || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((v = null), (p = u)),
          v !== p)
        ) {
          if (
            ((h = As),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = Vs),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (E = v == null ? c : Ln(v)),
            (m = p == null ? c : Ln(p)),
            (c = new h(w, d + "leave", v, n, g)),
            (c.target = E),
            (c.relatedTarget = m),
            (w = null),
            sn(g) === u &&
              ((h = new h(f, d + "enter", p, n, g)),
              (h.target = m),
              (h.relatedTarget = E),
              (w = h)),
            (E = w),
            v && p)
          )
            t: {
              for (h = v, f = p, d = 0, m = h; m; m = xn(m)) d++;
              for (m = 0, w = f; w; w = xn(w)) m++;
              for (; 0 < d - m; ) (h = xn(h)), d--;
              for (; 0 < m - d; ) (f = xn(f)), m--;
              for (; d--; ) {
                if (h === f || (f !== null && h === f.alternate)) break t;
                (h = xn(h)), (f = xn(f));
              }
              h = null;
            }
          else h = null;
          v !== null && Zs(y, c, v, h, !1),
            p !== null && E !== null && Zs(y, E, p, h, !0);
        }
      }
      e: {
        if (
          ((c = u ? Ln(u) : window),
          (v = c.nodeName && c.nodeName.toLowerCase()),
          v === "select" || (v === "input" && c.type === "file"))
        )
          var S = Zm;
        else if (bs(c))
          if (bc) S = nh;
          else {
            S = eh;
            var P = Jm;
          }
        else
          (v = c.nodeName) &&
            v.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (S = th);
        if (S && (S = S(e, u))) {
          $c(y, S, n, g);
          break e;
        }
        P && P(e, c, u),
          e === "focusout" &&
            (P = c._wrapperState) &&
            P.controlled &&
            c.type === "number" &&
            kl(c, "number", c.value);
      }
      switch (((P = u ? Ln(u) : window), e)) {
        case "focusin":
          (bs(P) || P.contentEditable === "true") &&
            ((Nn = P), (zl = u), (kr = null));
          break;
        case "focusout":
          kr = zl = Nn = null;
          break;
        case "mousedown":
          jl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (jl = !1), Gs(y, n, g);
          break;
        case "selectionchange":
          if (oh) break;
        case "keydown":
        case "keyup":
          Gs(y, n, g);
      }
      var N;
      if (za)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Pn
          ? Vc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Bc &&
          n.locale !== "ko" &&
          (Pn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Pn && (N = Ac())
            : ((Ut = g),
              (Ia = "value" in Ut ? Ut.value : Ut.textContent),
              (Pn = !0))),
        (P = Hi(u, _)),
        0 < P.length &&
          ((_ = new Bs(_, e, null, n, g)),
          y.push({ event: _, listeners: P }),
          N ? (_.data = N) : ((N = Wc(n)), N !== null && (_.data = N)))),
        (N = Km ? Ym(e, n) : Gm(e, n)) &&
          ((u = Hi(u, "onBeforeInput")),
          0 < u.length &&
            ((g = new Bs("onBeforeInput", "beforeinput", null, n, g)),
            y.push({ event: g, listeners: u }),
            (g.data = N)));
    }
    ed(y, t);
  });
}
function Ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Rr(e, n)),
      o != null && r.unshift(Ar(e, o, i)),
      (o = Rr(e, t)),
      o != null && r.push(Ar(e, o, i))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zs(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = Rr(n, o)), s != null && l.unshift(Ar(n, s, a)))
        : i || ((s = Rr(n, o)), s != null && l.push(Ar(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var uh = /\r\n?/g,
  ch = /\u0000|\uFFFD/g;
function Js(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uh,
      `
`
    )
    .replace(ch, "");
}
function hi(e, t, n) {
  if (((t = Js(t)), Js(e) !== t && n)) throw Error(k(425));
}
function Qi() {}
var Fl = null,
  Dl = null;
function Ul(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Al = typeof setTimeout == "function" ? setTimeout : void 0,
  dh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  eu = typeof Promise == "function" ? Promise : void 0,
  fh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof eu < "u"
      ? function (e) {
          return eu.resolve(null).then(e).catch(ph);
        }
      : Al;
function ph(e) {
  setTimeout(function () {
    throw e;
  });
}
function el(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  jr(t);
}
function Ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function tu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Jn = Math.random().toString(36).slice(2),
  mt = "__reactFiber$" + Jn,
  Br = "__reactProps$" + Jn,
  Tt = "__reactContainer$" + Jn,
  Bl = "__reactEvents$" + Jn,
  mh = "__reactListeners$" + Jn,
  hh = "__reactHandles$" + Jn;
function sn(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[mt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = tu(e); e !== null; ) {
          if ((n = e[mt])) return n;
          e = tu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[mt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function wo(e) {
  return e[Br] || null;
}
var Vl = [],
  In = -1;
function en(e) {
  return { current: e };
}
function X(e) {
  0 > In || ((e.current = Vl[In]), (Vl[In] = null), In--);
}
function K(e, t) {
  In++, (Vl[In] = e.current), (e.current = t);
}
var Zt = {},
  Te = en(Zt),
  ze = en(!1),
  pn = Zt;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function je(e) {
  return (e = e.childContextTypes), e != null;
}
function Ki() {
  X(ze), X(Te);
}
function nu(e, t, n) {
  if (Te.current !== Zt) throw Error(k(168));
  K(Te, t), K(ze, n);
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Jp(e) || "Unknown", i));
  return ne({}, n, r);
}
function Yi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (pn = Te.current),
    K(Te, e),
    K(ze, ze.current),
    !0
  );
}
function ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = nd(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(ze),
      X(Te),
      K(Te, e))
    : X(ze),
    K(ze, n);
}
var wt = null,
  Eo = !1,
  tl = !1;
function rd(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function vh(e) {
  (Eo = !0), rd(e);
}
function tn() {
  if (!tl && wt !== null) {
    tl = !0;
    var e = 0,
      t = $;
    try {
      var n = wt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (Eo = !1);
    } catch (i) {
      throw (wt !== null && (wt = wt.slice(e + 1)), Nc(Pa, tn), i);
    } finally {
      ($ = t), (tl = !1);
    }
  }
  return null;
}
var Rn = [],
  Mn = 0,
  Gi = null,
  Xi = 0,
  Qe = [],
  Ke = 0,
  mn = null,
  St = 1,
  kt = "";
function on(e, t) {
  (Rn[Mn++] = Xi), (Rn[Mn++] = Gi), (Gi = e), (Xi = t);
}
function id(e, t, n) {
  (Qe[Ke++] = St), (Qe[Ke++] = kt), (Qe[Ke++] = mn), (mn = e);
  var r = St;
  e = kt;
  var i = 32 - lt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - lt(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (St = (1 << (32 - lt(t) + i)) | (n << i) | r),
      (kt = o + e);
  } else (St = (1 << o) | (n << i) | r), (kt = e);
}
function Fa(e) {
  e.return !== null && (on(e, 1), id(e, 1, 0));
}
function Da(e) {
  for (; e === Gi; )
    (Gi = Rn[--Mn]), (Rn[Mn] = null), (Xi = Rn[--Mn]), (Rn[Mn] = null);
  for (; e === mn; )
    (mn = Qe[--Ke]),
      (Qe[Ke] = null),
      (kt = Qe[--Ke]),
      (Qe[Ke] = null),
      (St = Qe[--Ke]),
      (Qe[Ke] = null);
}
var Be = null,
  Ae = null,
  Z = !1,
  ot = null;
function od(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Ae = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $l(e) {
  if (Z) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!iu(e, t)) {
        if (Wl(e)) throw Error(k(418));
        t = Ht(n.nextSibling);
        var r = Be;
        t && iu(e, t)
          ? od(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Be = e));
      }
    } else {
      if (Wl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Be = e);
    }
  }
}
function ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function vi(e) {
  if (e !== Be) return !1;
  if (!Z) return ou(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ul(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Wl(e)) throw (ld(), Error(k(418)));
    for (; t; ) od(e, t), (t = Ht(t.nextSibling));
  }
  if ((ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Be ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ld() {
  for (var e = Ae; e; ) e = Ht(e.nextSibling);
}
function Qn() {
  (Ae = Be = null), (Z = !1);
}
function Ua(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var gh = Nt.ReactCurrentBatchConfig;
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var qi = en(null),
  Zi = null,
  zn = null,
  Aa = null;
function Ba() {
  Aa = zn = Zi = null;
}
function Va(e) {
  var t = qi.current;
  X(qi), (e._currentValue = t);
}
function bl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vn(e, t) {
  (Zi = e),
    (Aa = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Aa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (Zi === null) throw Error(k(308));
      (zn = e), (Zi.dependencies = { lanes: 0, firstContext: e });
    } else zn = zn.next = e;
  return t;
}
var un = null;
function Wa(e) {
  un === null ? (un = [e]) : un.push(e);
}
function ad(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jt = !1;
function $a(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Oi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Na(e, n);
  }
}
function lu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ji(e, t, n, r) {
  var i = e.updateQueue;
  jt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (a = g.lastBaseUpdate),
      a !== l &&
        (a === null ? (g.firstBaseUpdate = u) : (a.next = u),
        (g.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var y = i.baseState;
    (l = 0), (g = u = s = null), (a = o);
    do {
      var c = a.lane,
        v = a.eventTime;
      if ((r & c) === c) {
        g !== null &&
          (g = g.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            h = a;
          switch (((c = t), (v = n), h.tag)) {
            case 1:
              if (((p = h.payload), typeof p == "function")) {
                y = p.call(v, y, c);
                break e;
              }
              y = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = h.payload),
                (c = typeof p == "function" ? p.call(v, y, c) : p),
                c == null)
              )
                break e;
              y = ne({}, y, c);
              break e;
            case 2:
              jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = i.effects),
          c === null ? (i.effects = [a]) : c.push(a));
      } else
        (v = {
          eventTime: v,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          g === null ? ((u = g = v), (s = y)) : (g = g.next = v),
          (l |= c);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (i.lastBaseUpdate = c),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (g === null && (s = y),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = g),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (vn |= l), (e.lanes = l), (e.memoizedState = y);
  }
}
function au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var ud = new ac.Component().refs;
function Hl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var So = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = Yt(e),
      o = xt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Qt(e, o, i)),
      t !== null && (at(t, e, i, r), Oi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = Yt(e),
      o = xt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Qt(e, o, i)),
      t !== null && (at(t, e, i, r), Oi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = Yt(e),
      i = xt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Qt(e, i, r)),
      t !== null && (at(t, e, r, n), Oi(t, e, r));
  },
};
function su(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(i, o)
      : !0
  );
}
function cd(e, t, n) {
  var r = !1,
    i = Zt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Xe(o))
      : ((i = je(t) ? pn : Te.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Hn(e, i) : Zt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = So),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && So.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = ud), $a(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Xe(o))
    : ((o = je(t) ? pn : Te.current), (i.context = Hn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Hl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && So.enqueueReplaceState(i, i.state, null),
      Ji(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === ud && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function cu(e) {
  var t = e._init;
  return t(e._payload);
}
function dd(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [d]), (f.flags |= 16)) : m.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function i(f, d) {
    return (f = Gt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, d, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((f.flags |= 2), d) : m)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, m, w) {
    return d === null || d.tag !== 6
      ? ((d = sl(m, f.mode, w)), (d.return = f), d)
      : ((d = i(d, m)), (d.return = f), d);
  }
  function s(f, d, m, w) {
    var S = m.type;
    return S === _n
      ? g(f, d, m.props.children, w, m.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === zt &&
            cu(S) === d.type))
      ? ((w = i(d, m.props)), (w.ref = cr(f, d, m)), (w.return = f), w)
      : ((w = ji(m.type, m.key, m.props, null, f.mode, w)),
        (w.ref = cr(f, d, m)),
        (w.return = f),
        w);
  }
  function u(f, d, m, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = ul(m, f.mode, w)), (d.return = f), d)
      : ((d = i(d, m.children || [])), (d.return = f), d);
  }
  function g(f, d, m, w, S) {
    return d === null || d.tag !== 7
      ? ((d = fn(m, f.mode, w, S)), (d.return = f), d)
      : ((d = i(d, m)), (d.return = f), d);
  }
  function y(f, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = sl("" + d, f.mode, m)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case li:
          return (
            (m = ji(d.type, d.key, d.props, null, f.mode, m)),
            (m.ref = cr(f, null, d)),
            (m.return = f),
            m
          );
        case Tn:
          return (d = ul(d, f.mode, m)), (d.return = f), d;
        case zt:
          var w = d._init;
          return y(f, w(d._payload), m);
      }
      if (mr(d) || or(d))
        return (d = fn(d, f.mode, m, null)), (d.return = f), d;
      gi(f, d);
    }
    return null;
  }
  function c(f, d, m, w) {
    var S = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(f, d, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case li:
          return m.key === S ? s(f, d, m, w) : null;
        case Tn:
          return m.key === S ? u(f, d, m, w) : null;
        case zt:
          return (S = m._init), c(f, d, S(m._payload), w);
      }
      if (mr(m) || or(m)) return S !== null ? null : g(f, d, m, w, null);
      gi(f, m);
    }
    return null;
  }
  function v(f, d, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(m) || null), a(d, f, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case li:
          return (f = f.get(w.key === null ? m : w.key) || null), s(d, f, w, S);
        case Tn:
          return (f = f.get(w.key === null ? m : w.key) || null), u(d, f, w, S);
        case zt:
          var P = w._init;
          return v(f, d, m, P(w._payload), S);
      }
      if (mr(w) || or(w)) return (f = f.get(m) || null), g(d, f, w, S, null);
      gi(d, w);
    }
    return null;
  }
  function p(f, d, m, w) {
    for (
      var S = null, P = null, N = d, _ = (d = 0), A = null;
      N !== null && _ < m.length;
      _++
    ) {
      N.index > _ ? ((A = N), (N = null)) : (A = N.sibling);
      var R = c(f, N, m[_], w);
      if (R === null) {
        N === null && (N = A);
        break;
      }
      e && N && R.alternate === null && t(f, N),
        (d = o(R, d, _)),
        P === null ? (S = R) : (P.sibling = R),
        (P = R),
        (N = A);
    }
    if (_ === m.length) return n(f, N), Z && on(f, _), S;
    if (N === null) {
      for (; _ < m.length; _++)
        (N = y(f, m[_], w)),
          N !== null &&
            ((d = o(N, d, _)), P === null ? (S = N) : (P.sibling = N), (P = N));
      return Z && on(f, _), S;
    }
    for (N = r(f, N); _ < m.length; _++)
      (A = v(N, f, _, m[_], w)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? _ : A.key),
          (d = o(A, d, _)),
          P === null ? (S = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        N.forEach(function (re) {
          return t(f, re);
        }),
      Z && on(f, _),
      S
    );
  }
  function h(f, d, m, w) {
    var S = or(m);
    if (typeof S != "function") throw Error(k(150));
    if (((m = S.call(m)), m == null)) throw Error(k(151));
    for (
      var P = (S = null), N = d, _ = (d = 0), A = null, R = m.next();
      N !== null && !R.done;
      _++, R = m.next()
    ) {
      N.index > _ ? ((A = N), (N = null)) : (A = N.sibling);
      var re = c(f, N, R.value, w);
      if (re === null) {
        N === null && (N = A);
        break;
      }
      e && N && re.alternate === null && t(f, N),
        (d = o(re, d, _)),
        P === null ? (S = re) : (P.sibling = re),
        (P = re),
        (N = A);
    }
    if (R.done) return n(f, N), Z && on(f, _), S;
    if (N === null) {
      for (; !R.done; _++, R = m.next())
        (R = y(f, R.value, w)),
          R !== null &&
            ((d = o(R, d, _)), P === null ? (S = R) : (P.sibling = R), (P = R));
      return Z && on(f, _), S;
    }
    for (N = r(f, N); !R.done; _++, R = m.next())
      (R = v(N, f, _, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? _ : R.key),
          (d = o(R, d, _)),
          P === null ? (S = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        N.forEach(function (ae) {
          return t(f, ae);
        }),
      Z && on(f, _),
      S
    );
  }
  function E(f, d, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === _n &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case li:
          e: {
            for (var S = m.key, P = d; P !== null; ) {
              if (P.key === S) {
                if (((S = m.type), S === _n)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (d = i(P, m.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === zt &&
                    cu(S) === P.type)
                ) {
                  n(f, P.sibling),
                    (d = i(P, m.props)),
                    (d.ref = cr(f, P, m)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            m.type === _n
              ? ((d = fn(m.props.children, f.mode, w, m.key)),
                (d.return = f),
                (f = d))
              : ((w = ji(m.type, m.key, m.props, null, f.mode, w)),
                (w.ref = cr(f, d, m)),
                (w.return = f),
                (f = w));
          }
          return l(f);
        case Tn:
          e: {
            for (P = m.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(f, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = ul(m, f.mode, w)), (d.return = f), (f = d);
          }
          return l(f);
        case zt:
          return (P = m._init), E(f, d, P(m._payload), w);
      }
      if (mr(m)) return p(f, d, m, w);
      if (or(m)) return h(f, d, m, w);
      gi(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = i(d, m)), (d.return = f), (f = d))
          : (n(f, d), (d = sl(m, f.mode, w)), (d.return = f), (f = d)),
        l(f))
      : n(f, d);
  }
  return E;
}
var Kn = dd(!0),
  fd = dd(!1),
  Jr = {},
  gt = en(Jr),
  Vr = en(Jr),
  Wr = en(Jr);
function cn(e) {
  if (e === Jr) throw Error(k(174));
  return e;
}
function ba(e, t) {
  switch ((K(Wr, t), K(Vr, e), K(gt, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cl(t, e));
  }
  X(gt), K(gt, t);
}
function Yn() {
  X(gt), X(Vr), X(Wr);
}
function pd(e) {
  cn(Wr.current);
  var t = cn(gt.current),
    n = Cl(t, e.type);
  t !== n && (K(Vr, e), K(gt, n));
}
function Ha(e) {
  Vr.current === e && (X(gt), X(Vr));
}
var ee = en(0);
function eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var nl = [];
function Qa() {
  for (var e = 0; e < nl.length; e++)
    nl[e]._workInProgressVersionPrimary = null;
  nl.length = 0;
}
var Li = Nt.ReactCurrentDispatcher,
  rl = Nt.ReactCurrentBatchConfig,
  hn = 0,
  te = null,
  fe = null,
  he = null,
  to = !1,
  xr = !1,
  $r = 0,
  yh = 0;
function Ee() {
  throw Error(k(321));
}
function Ka(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Ya(e, t, n, r, i, o) {
  if (
    ((hn = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Li.current = e === null || e.memoizedState === null ? kh : xh),
    (e = n(r, i)),
    xr)
  ) {
    o = 0;
    do {
      if (((xr = !1), ($r = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (he = fe = null),
        (t.updateQueue = null),
        (Li.current = Ch),
        (e = n(r, i));
    } while (xr);
  }
  if (
    ((Li.current = no),
    (t = fe !== null && fe.next !== null),
    (hn = 0),
    (he = fe = te = null),
    (to = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ga() {
  var e = $r !== 0;
  return ($r = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (te.memoizedState = he = e) : (he = he.next = e), he;
}
function qe() {
  if (fe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = he === null ? te.memoizedState : he.next;
  if (t !== null) (he = t), (fe = e);
  else {
    if (e === null) throw Error(k(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      he === null ? (te.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function il(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = fe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var g = u.lane;
      if ((hn & g) === g)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var y = {
          lane: g,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = y), (l = r)) : (s = s.next = y),
          (te.lanes |= g),
          (vn |= g);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      st(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (te.lanes |= o), (vn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ol(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    st(o, t.memoizedState) || (Re = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function md() {}
function hd(e, t) {
  var n = te,
    r = qe(),
    i = t(),
    o = !st(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Re = !0)),
    (r = r.queue),
    Xa(yd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Hr(9, gd.bind(null, n, r, i, t), void 0, null),
      ve === null)
    )
      throw Error(k(349));
    hn & 30 || vd(n, t, i);
  }
  return i;
}
function vd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wd(t) && Ed(e);
}
function yd(e, t, n) {
  return n(function () {
    wd(t) && Ed(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function Ed(e) {
  var t = _t(e, 1);
  t !== null && at(t, e, 1, -1);
}
function du(e) {
  var t = pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sh.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Hr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sd() {
  return qe().memoizedState;
}
function Ii(e, t, n, r) {
  var i = pt();
  (te.flags |= e),
    (i.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ko(e, t, n, r) {
  var i = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var l = fe.memoizedState;
    if (((o = l.destroy), r !== null && Ka(r, l.deps))) {
      i.memoizedState = Hr(t, n, o, r);
      return;
    }
  }
  (te.flags |= e), (i.memoizedState = Hr(1 | t, n, o, r));
}
function fu(e, t) {
  return Ii(8390656, 8, e, t);
}
function Xa(e, t) {
  return ko(2048, 8, e, t);
}
function kd(e, t) {
  return ko(4, 2, e, t);
}
function xd(e, t) {
  return ko(4, 4, e, t);
}
function Cd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Td(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, Cd.bind(null, t, e), n)
  );
}
function qa() {}
function _d(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ka(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pd(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ka(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nd(e, t, n) {
  return hn & 21
    ? (st(n, t) || ((n = Ic()), (te.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function wh(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = rl.transition;
  rl.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (rl.transition = r);
  }
}
function Od() {
  return qe().memoizedState;
}
function Eh(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ld(e))
  )
    Id(t, n);
  else if (((n = ad(e, t, n, r)), n !== null)) {
    var i = Ne();
    at(n, e, r, i), Rd(n, t, r);
  }
}
function Sh(e, t, n) {
  var r = Yt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ld(e)) Id(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), st(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Wa(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ad(e, t, i, r)),
      n !== null && ((i = Ne()), at(n, e, r, i), Rd(n, t, r));
  }
}
function Ld(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Id(e, t) {
  xr = to = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Na(e, n);
  }
}
var no = {
    readContext: Xe,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  kh = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ii(4194308, 4, Cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Eh.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: du,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = du(!1),
        t = e[0];
      return (e = wh.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        i = pt();
      if (Z) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(k(349));
        hn & 30 || vd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        fu(yd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Hr(9, gd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = ve.identifierPrefix;
      if (Z) {
        var n = kt,
          r = St;
        (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = yh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xh = {
    readContext: Xe,
    useCallback: _d,
    useContext: Xe,
    useEffect: Xa,
    useImperativeHandle: Td,
    useInsertionEffect: kd,
    useLayoutEffect: xd,
    useMemo: Pd,
    useReducer: il,
    useRef: Sd,
    useState: function () {
      return il(br);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = qe();
      return Nd(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = il(br)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: md,
    useSyncExternalStore: hd,
    useId: Od,
    unstable_isNewReconciler: !1,
  },
  Ch = {
    readContext: Xe,
    useCallback: _d,
    useContext: Xe,
    useEffect: Xa,
    useImperativeHandle: Td,
    useInsertionEffect: kd,
    useLayoutEffect: xd,
    useMemo: Pd,
    useReducer: ol,
    useRef: Sd,
    useState: function () {
      return ol(br);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = qe();
      return fe === null ? (t.memoizedState = e) : Nd(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ol(br)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: md,
    useSyncExternalStore: hd,
    useId: Od,
    unstable_isNewReconciler: !1,
  };
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Zp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Th = typeof WeakMap == "function" ? WeakMap : Map;
function Md(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      io || ((io = !0), (ra = r)), Kl(e, t);
    }),
    n
  );
}
function zd(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Kl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Kl(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Th();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ah.bind(null, e, t, n)), t.then(e, e));
}
function mu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _h = Nt.ReactCurrentOwner,
  Re = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? fd(t, null, n, r) : Kn(t, e.child, n, r);
}
function vu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Vn(t, i),
    (r = Ya(e, t, n, r, o, i)),
    (n = Ga()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pt(e, t, i))
      : (Z && n && Fa(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function gu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !os(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jd(e, t, o, r, i))
      : ((e = ji(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(l, r) && e.ref === t.ref)
    )
      return Pt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Gt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Dr(o, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), Pt(e, t, i);
  }
  return Yl(e, t, n, r, i);
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Fn, Ue),
        (Ue |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(Fn, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(Fn, Ue),
        (Ue |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Fn, Ue),
      (Ue |= r);
  return Pe(e, t, i, n), t.child;
}
function Dd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yl(e, t, n, r, i) {
  var o = je(n) ? pn : Te.current;
  return (
    (o = Hn(t, o)),
    Vn(t, i),
    (n = Ya(e, t, n, r, o, i)),
    (r = Ga()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pt(e, t, i))
      : (Z && r && Fa(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function yu(e, t, n, r, i) {
  if (je(n)) {
    var o = !0;
    Yi(t);
  } else o = !1;
  if ((Vn(t, i), t.stateNode === null))
    Ri(e, t), cd(t, n, r), Ql(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xe(u))
      : ((u = je(n) ? pn : Te.current), (u = Hn(t, u)));
    var g = n.getDerivedStateFromProps,
      y =
        typeof g == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && uu(t, l, r, u)),
      (jt = !1);
    var c = t.memoizedState;
    (l.state = c),
      Ji(t, r, l, i),
      (s = t.memoizedState),
      a !== r || c !== s || ze.current || jt
        ? (typeof g == "function" && (Hl(t, n, g, r), (s = t.memoizedState)),
          (a = jt || su(t, n, a, r, c, s, u))
            ? (y ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      sd(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : rt(t.type, a)),
      (l.props = u),
      (y = t.pendingProps),
      (c = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Xe(s))
        : ((s = je(n) ? pn : Te.current), (s = Hn(t, s)));
    var v = n.getDerivedStateFromProps;
    (g =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== y || c !== s) && uu(t, l, r, s)),
      (jt = !1),
      (c = t.memoizedState),
      (l.state = c),
      Ji(t, r, l, i);
    var p = t.memoizedState;
    a !== y || c !== p || ze.current || jt
      ? (typeof v == "function" && (Hl(t, n, v, r), (p = t.memoizedState)),
        (u = jt || su(t, n, u, r, c, p, s) || !1)
          ? (g ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, p, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, p, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (l.props = r),
        (l.state = p),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gl(e, t, n, r, o, i);
}
function Gl(e, t, n, r, i, o) {
  Dd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ru(t, n, !1), Pt(e, t, o);
  (r = t.stateNode), (_h.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Kn(t, e.child, null, o)), (t.child = Kn(t, null, a, o)))
      : Pe(e, t, a, o),
    (t.memoizedState = r.state),
    i && ru(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nu(e, t.context, !1),
    ba(e, t.containerInfo);
}
function wu(e, t, n, r, i) {
  return Qn(), Ua(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ql(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    i = ee.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    K(ee, i & 1),
    e === null)
  )
    return (
      $l(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = To(l, r, 0, null)),
              (e = fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ql(n)),
              (t.memoizedState = Xl),
              e)
            : Za(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ph(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Gt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Gt(a, o)) : ((o = fn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ql(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Gt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Za(e, t) {
  return (
    (t = To({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yi(e, t, n, r) {
  return (
    r !== null && Ua(r),
    Kn(t, e.child, null, n),
    (e = Za(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ph(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ll(Error(k(422)))), yi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = To({ mode: "visible", children: r.children }, i, 0, null)),
        (o = fn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Kn(t, e.child, null, l),
        (t.child.memoizedState = ql(l)),
        (t.memoizedState = Xl),
        o);
  if (!(t.mode & 1)) return yi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(k(419))), (r = ll(o, r, void 0)), yi(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Re || a)) {
    if (((r = ve), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), _t(e, i), at(r, e, i, -1));
    }
    return is(), (r = ll(Error(k(421)))), yi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = Ht(i.nextSibling)),
      (Be = t),
      (Z = !0),
      (ot = null),
      e !== null &&
        ((Qe[Ke++] = St),
        (Qe[Ke++] = kt),
        (Qe[Ke++] = mn),
        (St = e.id),
        (kt = e.overflow),
        (mn = t)),
      (t = Za(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Eu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bl(e.return, t, n);
}
function al(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Eu(e, n, t);
        else if (e.tag === 19) Eu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && eo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          al(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && eo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        al(t, !0, n, null, o);
        break;
      case "together":
        al(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ri(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nh(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), Qn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      je(t.type) && Yi(t);
      break;
    case 4:
      ba(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      K(qi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ad(e, t, n)
          : (K(ee, ee.current & 1),
            (e = Pt(e, t, n)),
            e !== null ? e.sibling : null);
      K(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Fd(e, t, n);
  }
  return Pt(e, t, n);
}
var Vd, Zl, Wd, $d;
Vd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zl = function () {};
Wd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), cn(gt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = El(e, i)), (r = El(e, r)), (o = []);
        break;
      case "select":
        (i = ne({}, i, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = xl(e, i)), (r = xl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qi);
    }
    Tl(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Lr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && G("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Oh(e, t, n) {
  var r = t.pendingProps;
  switch ((Da(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return je(t.type) && Ki(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        X(ze),
        X(Te),
        Qa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (la(ot), (ot = null)))),
        Zl(e, t),
        Se(t),
        null
      );
    case 5:
      Ha(t);
      var i = cn(Wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Se(t), null;
        }
        if (((e = cn(gt.current)), vi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[mt] = t), (r[Br] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < vr.length; i++) G(vr[i], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              Os(r, o), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Is(r, o), G("invalid", r);
          }
          Tl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Lr.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              ai(r), Ls(r, o, !0);
              break;
            case "textarea":
              ai(r), Rs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Qi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[mt] = t),
            (e[Br] = r),
            Vd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = _l(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < vr.length; i++) G(vr[i], e);
                i = r;
                break;
              case "source":
                G("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (i = r);
                break;
              case "details":
                G("toggle", e), (i = r);
                break;
              case "input":
                Os(e, r), (i = El(e, r)), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ne({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Is(e, r), (i = xl(e, r)), G("invalid", e);
                break;
              default:
                i = r;
            }
            Tl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? wc(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && gc(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Ir(e, s)
                    : typeof s == "number" && Ir(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Lr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && G("scroll", e)
                      : s != null && ka(e, o, s, l));
              }
            switch (n) {
              case "input":
                ai(e), Ls(e, r, !1);
                break;
              case "textarea":
                ai(e), Rs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Dn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Qi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) $d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = cn(Wr.current)), cn(gt.current), vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mt] = t),
            (o = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mt] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (X(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128))
          ld(), Qn(), (t.flags |= 98560), (o = !1);
        else if (((o = vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[mt] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (o = !1);
        } else ot !== null && (la(ot), (ot = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? pe === 0 && (pe = 3) : is())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        Yn(), Zl(e, t), e === null && Ur(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return Va(t.type._context), Se(t), null;
    case 17:
      return je(t.type) && Ki(), Se(t), null;
    case 19:
      if ((X(ee), (o = t.memoizedState), o === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) dr(o, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = eo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    dr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ue() > Xn &&
            ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = eo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Z)
            )
              return Se(t), null;
          } else
            2 * ue() - o.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ee.current),
          K(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        rs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Lh(e, t) {
  switch ((Da(t), t.tag)) {
    case 1:
      return (
        je(t.type) && Ki(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yn(),
        X(ze),
        X(Te),
        Qa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ha(t), null;
    case 13:
      if ((X(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(ee), null;
    case 4:
      return Yn(), null;
    case 10:
      return Va(t.type._context), null;
    case 22:
    case 23:
      return rs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wi = !1,
  xe = !1,
  Ih = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Jl(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Su = !1;
function Rh(e, t) {
  if (((Fl = $i), (e = Kc()), ja(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            g = 0,
            y = e,
            c = null;
          t: for (;;) {
            for (
              var v;
              y !== n || (i !== 0 && y.nodeType !== 3) || (a = l + i),
                y !== o || (r !== 0 && y.nodeType !== 3) || (s = l + r),
                y.nodeType === 3 && (l += y.nodeValue.length),
                (v = y.firstChild) !== null;

            )
              (c = y), (y = v);
            for (;;) {
              if (y === e) break t;
              if (
                (c === n && ++u === i && (a = l),
                c === o && ++g === r && (s = l),
                (v = y.nextSibling) !== null)
              )
                break;
              (y = c), (c = y.parentNode);
            }
            y = v;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Dl = { focusedElem: e, selectionRange: n }, $i = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var h = p.memoizedProps,
                    E = p.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : rt(t.type, h),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          le(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (p = Su), (Su = !1), p;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Jl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function xo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ea(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mt], delete t[Br], delete t[Bl], delete t[mh], delete t[hh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ta(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ta(e, t, n), e = e.sibling; e !== null; ) ta(e, t, n), (e = e.sibling);
}
function na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (na(e, t, n), e = e.sibling; e !== null; ) na(e, t, n), (e = e.sibling);
}
var ge = null,
  it = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Qd(e, t, n), (n = n.sibling);
}
function Qd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(ho, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || jn(n, t);
    case 6:
      var r = ge,
        i = it;
      (ge = null),
        Mt(e, t, n),
        (ge = r),
        (it = i),
        ge !== null &&
          (it
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (it
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? el(e.parentNode, n)
              : e.nodeType === 1 && el(e, n),
            jr(e))
          : el(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = it),
        (ge = n.stateNode.containerInfo),
        (it = !0),
        Mt(e, t, n),
        (ge = r),
        (it = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Jl(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          le(n, t, a);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Mt(e, t, n), (xe = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ih()),
      t.forEach(function (r) {
        var i = Vh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (it = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (it = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (it = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(k(160));
        Qd(o, l, i), (ge = null), (it = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        le(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Kd(t, e), (t = t.sibling);
}
function Kd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nt(t, e), ft(e), r & 4)) {
        try {
          Cr(3, e, e.return), xo(3, e);
        } catch (h) {
          le(e, e.return, h);
        }
        try {
          Cr(5, e, e.return);
        } catch (h) {
          le(e, e.return, h);
        }
      }
      break;
    case 1:
      nt(t, e), ft(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (nt(t, e),
        ft(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ir(i, "");
        } catch (h) {
          le(e, e.return, h);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && mc(i, o),
              _l(a, l);
            var u = _l(a, o);
            for (l = 0; l < s.length; l += 2) {
              var g = s[l],
                y = s[l + 1];
              g === "style"
                ? wc(i, y)
                : g === "dangerouslySetInnerHTML"
                ? gc(i, y)
                : g === "children"
                ? Ir(i, y)
                : ka(i, g, y, u);
            }
            switch (a) {
              case "input":
                Sl(i, o);
                break;
              case "textarea":
                hc(i, o);
                break;
              case "select":
                var c = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Dn(i, !!o.multiple, v, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Dn(i, !!o.multiple, o.defaultValue, !0)
                      : Dn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Br] = o;
          } catch (h) {
            le(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((nt(t, e), ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (h) {
          le(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (nt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jr(t.containerInfo);
        } catch (h) {
          le(e, e.return, h);
        }
      break;
    case 4:
      nt(t, e), ft(e);
      break;
    case 13:
      nt(t, e),
        ft(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ts = ue())),
        r & 4 && xu(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || g), nt(t, e), (xe = u)) : nt(t, e),
        ft(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !g && e.mode & 1)
        )
          for (O = e, g = e.child; g !== null; ) {
            for (y = O = g; O !== null; ) {
              switch (((c = O), (v = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cr(4, c, c.return);
                  break;
                case 1:
                  jn(c, c.return);
                  var p = c.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (h) {
                      le(r, n, h);
                    }
                  }
                  break;
                case 5:
                  jn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Tu(y);
                    continue;
                  }
              }
              v !== null ? ((v.return = c), (O = v)) : Tu(y);
            }
            g = g.sibling;
          }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                (i = y.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = y.stateNode),
                      (s = y.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = yc("display", l)));
              } catch (h) {
                le(e, e.return, h);
              }
            }
          } else if (y.tag === 6) {
            if (g === null)
              try {
                y.stateNode.nodeValue = u ? "" : y.memoizedProps;
              } catch (h) {
                le(e, e.return, h);
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) ||
              y.memoizedState === null ||
              y === e) &&
            y.child !== null
          ) {
            (y.child.return = y), (y = y.child);
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            g === y && (g = null), (y = y.return);
          }
          g === y && (g = null), (y.sibling.return = y.return), (y = y.sibling);
        }
      }
      break;
    case 19:
      nt(t, e), ft(e), r & 4 && xu(e);
      break;
    case 21:
      break;
    default:
      nt(t, e), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ir(i, ""), (r.flags &= -33));
          var o = ku(e);
          na(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = ku(e);
          ta(e, a, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      le(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mh(e, t, n) {
  (O = e), Yd(e);
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || wi;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || xe;
        a = wi;
        var u = xe;
        if (((wi = l), (xe = s) && !u))
          for (O = i; O !== null; )
            (l = O),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? _u(i)
                : s !== null
                ? ((s.return = l), (O = s))
                : _u(i);
        for (; o !== null; ) (O = o), Yd(o), (o = o.sibling);
        (O = i), (wi = a), (xe = u);
      }
      Cu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : Cu(e);
  }
}
function Cu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || xo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && au(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                au(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var g = u.memoizedState;
                  if (g !== null) {
                    var y = g.dehydrated;
                    y !== null && jr(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        xe || (t.flags & 512 && ea(t));
      } catch (c) {
        le(t, t.return, c);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Tu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function _u(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xo(4, t);
          } catch (s) {
            le(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              le(t, i, s);
            }
          }
          var o = t.return;
          try {
            ea(t);
          } catch (s) {
            le(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ea(t);
          } catch (s) {
            le(t, l, s);
          }
      }
    } catch (s) {
      le(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var zh = Math.ceil,
  ro = Nt.ReactCurrentDispatcher,
  Ja = Nt.ReactCurrentOwner,
  Ge = Nt.ReactCurrentBatchConfig,
  B = 0,
  ve = null,
  ce = null,
  ye = 0,
  Ue = 0,
  Fn = en(0),
  pe = 0,
  Qr = null,
  vn = 0,
  Co = 0,
  es = 0,
  Tr = null,
  Ie = null,
  ts = 0,
  Xn = 1 / 0,
  yt = null,
  io = !1,
  ra = null,
  Kt = null,
  Ei = !1,
  At = null,
  oo = 0,
  _r = 0,
  ia = null,
  Mi = -1,
  zi = 0;
function Ne() {
  return B & 6 ? ue() : Mi !== -1 ? Mi : (Mi = ue());
}
function Yt(e) {
  return e.mode & 1
    ? B & 2 && ye !== 0
      ? ye & -ye
      : gh.transition !== null
      ? (zi === 0 && (zi = Ic()), zi)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uc(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (ia = null), Error(k(185)));
  Xr(e, n, r),
    (!(B & 2) || e !== ve) &&
      (e === ve && (!(B & 2) && (Co |= n), pe === 4 && Dt(e, ye)),
      Fe(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Xn = ue() + 500), Eo && tn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  gm(e, t);
  var r = Wi(e, e === ve ? ye : 0);
  if (r === 0)
    n !== null && js(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && js(n), t === 1))
      e.tag === 0 ? vh(Pu.bind(null, e)) : rd(Pu.bind(null, e)),
        fh(function () {
          !(B & 6) && tn();
        }),
        (n = null);
    else {
      switch (Rc(r)) {
        case 1:
          n = Pa;
          break;
        case 4:
          n = Oc;
          break;
        case 16:
          n = Vi;
          break;
        case 536870912:
          n = Lc;
          break;
        default:
          n = Vi;
      }
      n = nf(n, Gd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gd(e, t) {
  if (((Mi = -1), (zi = 0), B & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = Wi(e, e === ve ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = lo(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var o = qd();
    (ve !== e || ye !== t) && ((yt = null), (Xn = ue() + 500), dn(e, t));
    do
      try {
        Dh();
        break;
      } catch (a) {
        Xd(e, a);
      }
    while (1);
    Ba(),
      (ro.current = o),
      (B = i),
      ce !== null ? (t = 0) : ((ve = null), (ye = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Il(e)), i !== 0 && ((r = i), (t = oa(e, i)))), t === 1)
    )
      throw ((n = Qr), dn(e, 0), Dt(e, r), Fe(e, ue()), n);
    if (t === 6) Dt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !jh(i) &&
          ((t = lo(e, r)),
          t === 2 && ((o = Il(e)), o !== 0 && ((r = o), (t = oa(e, o)))),
          t === 1))
      )
        throw ((n = Qr), dn(e, 0), Dt(e, r), Fe(e, ue()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          ln(e, Ie, yt);
          break;
        case 3:
          if (
            (Dt(e, r), (r & 130023424) === r && ((t = ts + 500 - ue()), 10 < t))
          ) {
            if (Wi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Al(ln.bind(null, e, Ie, yt), t);
            break;
          }
          ln(e, Ie, yt);
          break;
        case 4:
          if ((Dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - lt(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Al(ln.bind(null, e, Ie, yt), r);
            break;
          }
          ln(e, Ie, yt);
          break;
        case 5:
          ln(e, Ie, yt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Fe(e, ue()), e.callbackNode === n ? Gd.bind(null, e) : null;
}
function oa(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = lo(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && la(t)),
    e
  );
}
function la(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function jh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!st(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Dt(e, t) {
  for (
    t &= ~es,
      t &= ~Co,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pu(e) {
  if (B & 6) throw Error(k(327));
  Wn();
  var t = Wi(e, 0);
  if (!(t & 1)) return Fe(e, ue()), null;
  var n = lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Il(e);
    r !== 0 && ((t = r), (n = oa(e, r)));
  }
  if (n === 1) throw ((n = Qr), dn(e, 0), Dt(e, t), Fe(e, ue()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, Ie, yt),
    Fe(e, ue()),
    null
  );
}
function ns(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Xn = ue() + 500), Eo && tn());
  }
}
function gn(e) {
  At !== null && At.tag === 0 && !(B & 6) && Wn();
  var t = B;
  B |= 1;
  var n = Ge.transition,
    r = $;
  try {
    if (((Ge.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Ge.transition = n), (B = t), !(B & 6) && tn();
  }
}
function rs() {
  (Ue = Fn.current), X(Fn);
}
function dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dh(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((Da(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ki();
          break;
        case 3:
          Yn(), X(ze), X(Te), Qa();
          break;
        case 5:
          Ha(r);
          break;
        case 4:
          Yn();
          break;
        case 13:
          X(ee);
          break;
        case 19:
          X(ee);
          break;
        case 10:
          Va(r.type._context);
          break;
        case 22:
        case 23:
          rs();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (ce = e = Gt(e.current, null)),
    (ye = Ue = t),
    (pe = 0),
    (Qr = null),
    (es = Co = vn = 0),
    (Ie = Tr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = ce;
    try {
      if ((Ba(), (Li.current = no), to)) {
        for (var r = te.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        to = !1;
      }
      if (
        ((hn = 0),
        (he = fe = te = null),
        (xr = !1),
        ($r = 0),
        (Ja.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (Qr = t), (ce = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = ye),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            g = a,
            y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var c = g.alternate;
            c
              ? ((g.updateQueue = c.updateQueue),
                (g.memoizedState = c.memoizedState),
                (g.lanes = c.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var v = mu(l);
          if (v !== null) {
            (v.flags &= -257),
              hu(v, l, a, o, t),
              v.mode & 1 && pu(o, u, t),
              (t = v),
              (s = u);
            var p = t.updateQueue;
            if (p === null) {
              var h = new Set();
              h.add(s), (t.updateQueue = h);
            } else p.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              pu(o, u, t), is();
              break e;
            }
            s = Error(k(426));
          }
        } else if (Z && a.mode & 1) {
          var E = mu(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              hu(E, l, a, o, t),
              Ua(Gn(s, a));
            break e;
          }
        }
        (o = s = Gn(s, a)),
          pe !== 4 && (pe = 2),
          Tr === null ? (Tr = [o]) : Tr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Md(o, s, t);
              lu(o, f);
              break e;
            case 1:
              a = s;
              var d = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = zd(o, a, t);
                lu(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Jd(n);
    } catch (S) {
      (t = S), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qd() {
  var e = ro.current;
  return (ro.current = no), e === null ? no : e;
}
function is() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ve === null || (!(vn & 268435455) && !(Co & 268435455)) || Dt(ve, ye);
}
function lo(e, t) {
  var n = B;
  B |= 2;
  var r = qd();
  (ve !== e || ye !== t) && ((yt = null), dn(e, t));
  do
    try {
      Fh();
      break;
    } catch (i) {
      Xd(e, i);
    }
  while (1);
  if ((Ba(), (B = n), (ro.current = r), ce !== null)) throw Error(k(261));
  return (ve = null), (ye = 0), pe;
}
function Fh() {
  for (; ce !== null; ) Zd(ce);
}
function Dh() {
  for (; ce !== null && !sm(); ) Zd(ce);
}
function Zd(e) {
  var t = tf(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jd(e) : (ce = t),
    (Ja.current = null);
}
function Jd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lh(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (ce = null);
        return;
      }
    } else if (((n = Oh(n, t, Ue)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function ln(e, t, n) {
  var r = $,
    i = Ge.transition;
  try {
    (Ge.transition = null), ($ = 1), Uh(e, t, n, r);
  } finally {
    (Ge.transition = i), ($ = r);
  }
  return null;
}
function Uh(e, t, n, r) {
  do Wn();
  while (At !== null);
  if (B & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ym(e, o),
    e === ve && ((ce = ve = null), (ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ei ||
      ((Ei = !0),
      nf(Vi, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ge.transition), (Ge.transition = null);
    var l = $;
    $ = 1;
    var a = B;
    (B |= 4),
      (Ja.current = null),
      Rh(e, n),
      Kd(n, e),
      ih(Dl),
      ($i = !!Fl),
      (Dl = Fl = null),
      (e.current = n),
      Mh(n),
      um(),
      (B = a),
      ($ = l),
      (Ge.transition = o);
  } else e.current = n;
  if (
    (Ei && ((Ei = !1), (At = e), (oo = i)),
    (o = e.pendingLanes),
    o === 0 && (Kt = null),
    fm(n.stateNode),
    Fe(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (io) throw ((io = !1), (e = ra), (ra = null), e);
  return (
    oo & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ia ? _r++ : ((_r = 0), (ia = e))) : (_r = 0),
    tn(),
    null
  );
}
function Wn() {
  if (At !== null) {
    var e = Rc(oo),
      t = Ge.transition,
      n = $;
    try {
      if (((Ge.transition = null), ($ = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (oo = 0), B & 6)) throw Error(k(331));
        var i = B;
        for (B |= 4, O = e.current; O !== null; ) {
          var o = O,
            l = o.child;
          if (O.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (O = u; O !== null; ) {
                  var g = O;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, g, o);
                  }
                  var y = g.child;
                  if (y !== null) (y.return = g), (O = y);
                  else
                    for (; O !== null; ) {
                      g = O;
                      var c = g.sibling,
                        v = g.return;
                      if ((bd(g), g === u)) {
                        O = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = v), (O = c);
                        break;
                      }
                      O = v;
                    }
                }
              }
              var p = o.alternate;
              if (p !== null) {
                var h = p.child;
                if (h !== null) {
                  p.child = null;
                  do {
                    var E = h.sibling;
                    (h.sibling = null), (h = E);
                  } while (h !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (O = l);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (O = f);
                break e;
              }
              O = o.return;
            }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          l = O;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (O = m);
          else
            e: for (l = d; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xo(9, a);
                  }
                } catch (S) {
                  le(a, a.return, S);
                }
              if (a === l) {
                O = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (O = w);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((B = i), tn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(ho, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Nu(e, t, n) {
  (t = Gn(n, t)),
    (t = Md(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Ne()),
    e !== null && (Xr(e, 1, t), Fe(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Nu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = Gn(n, e)),
            (e = zd(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Ne()),
            t !== null && (Xr(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ah(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (ye & n) === n &&
      (pe === 4 || (pe === 3 && (ye & 130023424) === ye && 500 > ue() - ts)
        ? dn(e, 0)
        : (es |= n)),
    Fe(e, t);
}
function ef(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = Ne();
  (e = _t(e, t)), e !== null && (Xr(e, t, n), Fe(e, n));
}
function Bh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ef(e, n);
}
function Vh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), ef(e, n);
}
var tf;
tf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), Nh(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), Z && t.flags & 1048576 && id(t, Xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ri(e, t), (e = t.pendingProps);
      var i = Hn(t, Te.current);
      Vn(t, n), (i = Ya(null, t, r, e, i, n));
      var o = Ga();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((o = !0), Yi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            $a(t),
            (i.updater = So),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ql(t, r, e, n),
            (t = Gl(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && Fa(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ri(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = $h(r)),
          (e = rt(r, e)),
          i)
        ) {
          case 0:
            t = Yl(null, t, r, e, n);
            break e;
          case 1:
            t = yu(null, t, r, e, n);
            break e;
          case 11:
            t = vu(null, t, r, e, n);
            break e;
          case 14:
            t = gu(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        Yl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        yu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          sd(e, t),
          Ji(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Gn(Error(k(423)), t)), (t = wu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Gn(Error(k(424)), t)), (t = wu(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Ht(t.stateNode.containerInfo.firstChild),
                Be = t,
                Z = !0,
                ot = null,
                n = fd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === i)) {
            t = Pt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pd(t),
        e === null && $l(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ul(r, i) ? (l = null) : o !== null && Ul(r, o) && (t.flags |= 32),
        Dd(e, t),
        Pe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && $l(t), null;
    case 13:
      return Ad(e, t, n);
    case 4:
      return (
        ba(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        vu(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          K(qi, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (st(o.value, l)) {
            if (o.children === i.children && !ze.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = xt(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var g = u.pending;
                        g === null
                          ? (s.next = s)
                          : ((s.next = g.next), (g.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      bl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(k(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  bl(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vn(t, n),
        (i = Xe(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = rt(r, t.pendingProps)),
        (i = rt(r.type, i)),
        gu(e, t, r, i, n)
      );
    case 15:
      return jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        Ri(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), Yi(t)) : (e = !1),
        Vn(t, n),
        cd(t, r, i),
        Ql(t, r, i, n),
        Gl(null, t, r, !0, e, n)
      );
    case 19:
      return Bd(e, t, n);
    case 22:
      return Fd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function nf(e, t) {
  return Nc(e, t);
}
function Wh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ye(e, t, n, r) {
  return new Wh(e, t, n, r);
}
function os(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $h(e) {
  if (typeof e == "function") return os(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ca)) return 11;
    if (e === Ta) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ji(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) os(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case _n:
        return fn(n.children, i, o, t);
      case xa:
        (l = 8), (i |= 8);
        break;
      case vl:
        return (
          (e = Ye(12, n, t, i | 2)), (e.elementType = vl), (e.lanes = o), e
        );
      case gl:
        return (e = Ye(13, n, t, i)), (e.elementType = gl), (e.lanes = o), e;
      case yl:
        return (e = Ye(19, n, t, i)), (e.elementType = yl), (e.lanes = o), e;
      case dc:
        return To(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case uc:
              l = 10;
              break e;
            case cc:
              l = 9;
              break e;
            case Ca:
              l = 11;
              break e;
            case Ta:
              l = 14;
              break e;
            case zt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function fn(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function To(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = dc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function sl(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function ul(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $o(0)),
    (this.expirationTimes = $o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $o(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ls(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new bh(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ye(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $a(o),
    e
  );
}
function Hh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rf(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (En(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return nd(e, n, t);
  }
  return t;
}
function of(e, t, n, r, i, o, l, a, s) {
  return (
    (e = ls(n, r, !0, e, i, o, l, a, s)),
    (e.context = rf(null)),
    (n = e.current),
    (r = Ne()),
    (i = Yt(n)),
    (o = xt(r, i)),
    (o.callback = t ?? null),
    Qt(n, o, i),
    (e.current.lanes = i),
    Xr(e, i, r),
    Fe(e, r),
    e
  );
}
function _o(e, t, n, r) {
  var i = t.current,
    o = Ne(),
    l = Yt(i);
  return (
    (n = rf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(i, t, l)),
    e !== null && (at(e, i, l, o), Oi(e, i, l)),
    l
  );
}
function ao(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ou(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function as(e, t) {
  Ou(e, t), (e = e.alternate) && Ou(e, t);
}
function Qh() {
  return null;
}
var lf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ss(e) {
  this._internalRoot = e;
}
Po.prototype.render = ss.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  _o(e, t, null, null);
};
Po.prototype.unmount = ss.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      _o(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function Po(e) {
  this._internalRoot = e;
}
Po.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
    Ft.splice(n, 0, e), n === 0 && Dc(e);
  }
};
function us(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function No(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Lu() {}
function Kh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ao(l);
        o.call(u);
      };
    }
    var l = of(t, r, e, 0, null, !1, !1, "", Lu);
    return (
      (e._reactRootContainer = l),
      (e[Tt] = l.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ao(s);
      a.call(u);
    };
  }
  var s = ls(e, 0, !1, null, null, !1, !1, "", Lu);
  return (
    (e._reactRootContainer = s),
    (e[Tt] = s.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      _o(t, s, n, r);
    }),
    s
  );
}
function Oo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = ao(l);
        a.call(s);
      };
    }
    _o(t, l, e, i);
  } else l = Kh(n, t, e, i, r);
  return ao(l);
}
Mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes);
        n !== 0 &&
          (Na(t, n | 1), Fe(t, ue()), !(B & 6) && ((Xn = ue() + 500), tn()));
      }
      break;
    case 13:
      gn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var i = Ne();
          at(r, e, 1, i);
        }
      }),
        as(e, 1);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ne();
      at(t, e, 134217728, n);
    }
    as(e, 134217728);
  }
};
zc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Ne();
      at(n, e, t, r);
    }
    as(e, t);
  }
};
jc = function () {
  return $;
};
Fc = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Nl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = wo(r);
            if (!i) throw Error(k(90));
            pc(r), Sl(r, i);
          }
        }
      }
      break;
    case "textarea":
      hc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
kc = ns;
xc = gn;
var Yh = { usingClientEntryPoint: !1, Events: [Zr, Ln, wo, Ec, Sc, ns] },
  fr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Gh = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _c(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || Qh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (ho = Si.inject(Gh)), (vt = Si);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!us(t)) throw Error(k(200));
  return Hh(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!us(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = lf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ls(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tt] = t.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    new ss(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = _c(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return gn(e);
};
We.hydrate = function (e, t, n) {
  if (!No(t)) throw Error(k(200));
  return Oo(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!us(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = lf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = of(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Tt] = t.current),
    Ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Po(t);
};
We.render = function (e, t, n) {
  if (!No(t)) throw Error(k(200));
  return Oo(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!No(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (gn(function () {
        Oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = ns;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!No(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Oo(e, t, n, !1, r);
};
We.version = "18.2.0-next-9e3b772b8-20220608";
function af() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(af);
    } catch (e) {
      console.error(e);
    }
}
af(), (ic.exports = We);
var Xh = ic.exports,
  Iu = Xh;
(ml.createRoot = Iu.createRoot), (ml.hydrateRoot = Iu.hydrateRoot);
/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kr() {
  return (
    (Kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kr.apply(this, arguments)
  );
}
var Bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const Ru = "popstate";
function qh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return aa(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : so(i);
  }
  return Jh(t, n, null, e);
}
function de(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function cs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Zh() {
  return Math.random().toString(36).substr(2, 8);
}
function Mu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function aa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Kr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? er(t) : t,
      { state: n, key: (t && t.key) || r || Zh() }
    )
  );
}
function so(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function er(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Jh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Bt.Pop,
    s = null,
    u = g();
  u == null && ((u = 0), l.replaceState(Kr({}, l.state, { idx: u }), ""));
  function g() {
    return (l.state || { idx: null }).idx;
  }
  function y() {
    a = Bt.Pop;
    let E = g(),
      f = E == null ? null : E - u;
    (u = E), s && s({ action: a, location: h.location, delta: f });
  }
  function c(E, f) {
    a = Bt.Push;
    let d = aa(h.location, E, f);
    n && n(d, E), (u = g() + 1);
    let m = Mu(d, u),
      w = h.createHref(d);
    try {
      l.pushState(m, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(w);
    }
    o && s && s({ action: a, location: h.location, delta: 1 });
  }
  function v(E, f) {
    a = Bt.Replace;
    let d = aa(h.location, E, f);
    n && n(d, E), (u = g());
    let m = Mu(d, u),
      w = h.createHref(d);
    l.replaceState(m, "", w),
      o && s && s({ action: a, location: h.location, delta: 0 });
  }
  function p(E) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof E == "string" ? E : so(E);
    return (
      de(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let h = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(E) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Ru, y),
        (s = E),
        () => {
          i.removeEventListener(Ru, y), (s = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: p,
    encodeLocation(E) {
      let f = p(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: c,
    replace: v,
    go(E) {
      return l.go(E);
    },
  };
  return h;
}
var zu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(zu || (zu = {}));
function ev(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? er(t) : t,
    i = ds(r.pathname || "/", n);
  if (i == null) return null;
  let o = sf(e);
  tv(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) l = cv(o[a], pv(i));
  return l;
}
function sf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (de(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Xt([r, s.relativePath]),
      g = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (de(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      sf(o.children, t, g, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: sv(u, o.index), routesMeta: g });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of uf(o.path)) i(o, l, s);
    }),
    t
  );
}
function uf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = uf(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function tv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : uv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const nv = /^:\w+$/,
  rv = 3,
  iv = 2,
  ov = 1,
  lv = 10,
  av = -2,
  ju = (e) => e === "*";
function sv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ju) && (r += av),
    t && (r += iv),
    n
      .filter((i) => !ju(i))
      .reduce((i, o) => i + (nv.test(o) ? rv : o === "" ? ov : lv), r)
  );
}
function uv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function cv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      g = dv(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!g) return null;
    Object.assign(r, g.params);
    let y = a.route;
    o.push({
      params: r,
      pathname: Xt([i, g.pathname]),
      pathnameBase: gv(Xt([i, g.pathnameBase])),
      route: y,
    }),
      g.pathnameBase !== "/" && (i = Xt([i, g.pathnameBase]));
  }
  return o;
}
function dv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, g, y) => {
      if (g === "*") {
        let c = a[y] || "";
        l = o.slice(0, o.length - c.length).replace(/(.)\/+$/, "$1");
      }
      return (u[g] = mv(a[y] || "", g)), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function fv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cs(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function pv(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      cs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function mv(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      cs(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function ds(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? er(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : vv(n, t)) : t,
    search: yv(r),
    hash: wv(i),
  };
}
function vv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function cl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function cf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function df(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = er(e))
    : ((i = Kr({}, e)),
      de(
        !i.pathname || !i.pathname.includes("?"),
        cl("?", "pathname", "search", i)
      ),
      de(
        !i.pathname || !i.pathname.includes("#"),
        cl("#", "pathname", "hash", i)
      ),
      de(!i.search || !i.search.includes("#"), cl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (r || l == null) a = n;
  else {
    let y = t.length - 1;
    if (l.startsWith("..")) {
      let c = l.split("/");
      for (; c[0] === ".."; ) c.shift(), (y -= 1);
      i.pathname = c.join("/");
    }
    a = y >= 0 ? t[y] : "/";
  }
  let s = hv(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    g = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || g) && (s.pathname += "/"), s;
}
const Xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  gv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  yv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  wv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Ev(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ff = ["post", "put", "patch", "delete"];
new Set(ff);
const Sv = ["get", ...ff];
new Set(Sv);
/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uo() {
  return (
    (uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uo.apply(this, arguments)
  );
}
const fs = x.createContext(null),
  kv = x.createContext(null),
  tr = x.createContext(null),
  Lo = x.createContext(null),
  Sn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pf = x.createContext(null);
function xv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ei() || de(!1);
  let { basename: r, navigator: i } = x.useContext(tr),
    { hash: o, pathname: l, search: a } = vf(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Xt([r, l])),
    i.createHref({ pathname: s, search: a, hash: o })
  );
}
function ei() {
  return x.useContext(Lo) != null;
}
function Io() {
  return ei() || de(!1), x.useContext(Lo).location;
}
function mf(e) {
  x.useContext(tr).static || x.useLayoutEffect(e);
}
function hf() {
  let { isDataRoute: e } = x.useContext(Sn);
  return e ? Fv() : Cv();
}
function Cv() {
  ei() || de(!1);
  let e = x.useContext(fs),
    { basename: t, navigator: n } = x.useContext(tr),
    { matches: r } = x.useContext(Sn),
    { pathname: i } = Io(),
    o = JSON.stringify(cf(r).map((s) => s.pathnameBase)),
    l = x.useRef(!1);
  return (
    mf(() => {
      l.current = !0;
    }),
    x.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let g = df(s, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : Xt([t, g.pathname])),
          (u.replace ? n.replace : n.push)(g, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
function vf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(Sn),
    { pathname: i } = Io(),
    o = JSON.stringify(cf(r).map((l) => l.pathnameBase));
  return x.useMemo(() => df(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Tv(e, t) {
  return _v(e, t);
}
function _v(e, t, n) {
  ei() || de(!1);
  let { navigator: r } = x.useContext(tr),
    { matches: i } = x.useContext(Sn),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Io(),
    u;
  if (t) {
    var g;
    let h = typeof t == "string" ? er(t) : t;
    a === "/" || ((g = h.pathname) != null && g.startsWith(a)) || de(!1),
      (u = h);
  } else u = s;
  let y = u.pathname || "/",
    c = a === "/" ? y : y.slice(a.length) || "/",
    v = ev(e, { pathname: c }),
    p = Iv(
      v &&
        v.map((h) =>
          Object.assign({}, h, {
            params: Object.assign({}, l, h.params),
            pathname: Xt([
              a,
              r.encodeLocation
                ? r.encodeLocation(h.pathname).pathname
                : h.pathname,
            ]),
            pathnameBase:
              h.pathnameBase === "/"
                ? a
                : Xt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(h.pathnameBase).pathname
                      : h.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && p
    ? x.createElement(
        Lo.Provider,
        {
          value: {
            location: uo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Bt.Pop,
          },
        },
        p
      )
    : p;
}
function Pv() {
  let e = jv(),
    t = Ev(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Nv = x.createElement(Pv, null);
class Ov extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          Sn.Provider,
          { value: this.props.routeContext },
          x.createElement(pf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(fs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Sn.Provider, { value: t }, r)
  );
}
function Iv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let a = o.findIndex(
      (s) => s.route.id && (l == null ? void 0 : l[s.route.id])
    );
    a >= 0 || de(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, s, u) => {
    let g = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      y = null;
    n && (y = s.route.errorElement || Nv);
    let c = t.concat(o.slice(0, u + 1)),
      v = () => {
        let p;
        return (
          g
            ? (p = y)
            : s.route.Component
            ? (p = x.createElement(s.route.Component, null))
            : s.route.element
            ? (p = s.route.element)
            : (p = a),
          x.createElement(Lv, {
            match: s,
            routeContext: { outlet: a, matches: c, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? x.createElement(Ov, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: g,
          children: v(),
          routeContext: { outlet: null, matches: c, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var sa;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(sa || (sa = {}));
var Yr;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Yr || (Yr = {}));
function Rv(e) {
  let t = x.useContext(fs);
  return t || de(!1), t;
}
function Mv(e) {
  let t = x.useContext(kv);
  return t || de(!1), t;
}
function zv(e) {
  let t = x.useContext(Sn);
  return t || de(!1), t;
}
function gf(e) {
  let t = zv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || de(!1), n.route.id;
}
function jv() {
  var e;
  let t = x.useContext(pf),
    n = Mv(Yr.UseRouteError),
    r = gf(Yr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Fv() {
  let { router: e } = Rv(sa.UseNavigateStable),
    t = gf(Yr.UseNavigateStable),
    n = x.useRef(!1);
  return (
    mf(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, uo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Cn(e) {
  de(!1);
}
function Dv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Bt.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  ei() && de(!1);
  let a = t.replace(/^\/*/, "/"),
    s = x.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
  typeof r == "string" && (r = er(r));
  let {
      pathname: u = "/",
      search: g = "",
      hash: y = "",
      state: c = null,
      key: v = "default",
    } = r,
    p = x.useMemo(() => {
      let h = ds(u, a);
      return h == null
        ? null
        : {
            location: { pathname: h, search: g, hash: y, state: c, key: v },
            navigationType: i,
          };
    }, [a, u, g, y, c, v, i]);
  return p == null
    ? null
    : x.createElement(
        tr.Provider,
        { value: s },
        x.createElement(Lo.Provider, { children: n, value: p })
      );
}
function Uv(e) {
  let { children: t, location: n } = e;
  return Tv(ua(t), n);
}
var Fu;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Fu || (Fu = {}));
new Promise(() => {});
function ua(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, ua(r.props.children, o));
        return;
      }
      r.type !== Cn && de(!1), !r.props.index || !r.props.children || de(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = ua(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ca() {
  return (
    (ca = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ca.apply(this, arguments)
  );
}
function Av(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Bv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Bv(e);
}
const Wv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  $v = "startTransition",
  Du = Bp[$v];
function bv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef();
  o.current == null && (o.current = qh({ window: i, v5Compat: !0 }));
  let l = o.current,
    [a, s] = x.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    g = x.useCallback(
      (y) => {
        u && Du ? Du(() => s(y)) : s(y);
      },
      [s, u]
    );
  return (
    x.useLayoutEffect(() => l.listen(g), [l, g]),
    x.createElement(Dv, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
    })
  );
}
const Hv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Et = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: g,
      } = t,
      y = Av(t, Wv),
      { basename: c } = x.useContext(tr),
      v,
      p = !1;
    if (typeof u == "string" && Qv.test(u) && ((v = u), Hv))
      try {
        let d = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(d.protocol + u) : new URL(u),
          w = ds(m.pathname, c);
        m.origin === d.origin && w != null
          ? (u = w + m.search + m.hash)
          : (p = !0);
      } catch {}
    let h = xv(u, { relative: i }),
      E = Kv(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: g,
        relative: i,
      });
    function f(d) {
      r && r(d), d.defaultPrevented || E(d);
    }
    return x.createElement(
      "a",
      ca({}, y, { href: v || h, onClick: p || o ? r : f, ref: n, target: s })
    );
  });
var Uu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Uu || (Uu = {}));
var Au;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Au || (Au = {}));
function Kv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
    } = t === void 0 ? {} : t,
    a = hf(),
    s = Io(),
    u = vf(e, { relative: l });
  return x.useCallback(
    (g) => {
      if (Vv(g, n)) {
        g.preventDefault();
        let y = r !== void 0 ? r : so(s) === so(u);
        a(e, { replace: y, state: i, preventScrollReset: o, relative: l });
      }
    },
    [s, a, u, r, i, n, e, o, l]
  );
}
const Yv = "/assets/github-0d0b8af0.svg";
function Gv() {
  return C.jsxs("footer", {
    children: [
      C.jsx("a", {
        href: "https://github.com/fewatts/tcc-cloud-school",
        target: "blank",
        children: C.jsx("abbr", {
          title: "repositório no github",
          children: C.jsx("img", {
            src: Yv,
            alt: "Repositório",
            className: "git",
          }),
        }),
      }),
      C.jsx("p", { children: "Copyright FCLEB ©" }),
    ],
  });
}
const Xv = "/assets/cloud-c7d17862.svg";
function qv() {
  return C.jsxs("nav", {
    className: "navbar",
    children: [
      C.jsx("div", {
        className: "logo-container",
        children: C.jsx(Et, {
          to: "/",
          children: C.jsx("img", { src: Xv, alt: "logo", className: "logo" }),
        }),
      }),
      C.jsx("div", {
        id: "itens",
        children: C.jsxs("ul", {
          id: "itens2",
          children: [
            C.jsx("li", { children: C.jsx(Et, { to: "/", children: "Home" }) }),
            C.jsx("li", { children: C.jsx(Et, { to: "/cv", children: "Cv" }) }),
            C.jsx("li", {
              children: C.jsx(Et, { to: "/about", children: "Saiba mais" }),
            }),
          ],
        }),
      }),
      C.jsx(Et, {
        to: "/menu",
        children: C.jsx("span", {
          id: "burguer",
          className: "material-symbols-outlined",
          children: "menu",
        }),
      }),
    ],
  });
}
const Zv = "/assets/home-1bf2df8c.png";
function Jv() {
  return C.jsxs("main", {
    children: [
      C.jsxs("div", {
        className: "container",
        children: [
          C.jsx("h1", { className: "h1home", children: "Bem-vindo!" }),
          C.jsx("br", {}),
          C.jsx("h3", {
            className: "text1",
            children: "Este é o nosso web site de divulgação de currículos!",
          }),
          C.jsx("br", {}),
          C.jsx("p", {
            className: "text1",
            children:
              "Somos um grupo de estudantes em transição de carreira que estão focados no aprendizado da AWS (Amazon Web Services). Nosso objetivo é construir habilidades técnicas e interpessoais, essenciais para enfrentar desafios no setor de tecnologia. Nós desenvolvemos um projeto empolgante: um site estático usando serviços da AWS. Esse projeto nos ajudou a aprimorar nossas habilidades técnicas, incluindo desenvolvimento web e gerenciamento de serviços em nuvem. Nós estamos entusiasmados em compartilhar nosso trabalho com recrutadores e convidamos as pessoas a entrar em contato conosco para saber mais sobre nossas experiências.",
          }),
        ],
      }),
      C.jsx("div", {
        className: "homepic",
        children: C.jsx("img", {
          src: Zv,
          alt: "pic home",
          className: "Homepic",
        }),
      }),
    ],
  });
}
function eg() {
  return C.jsx("main", {
    className: "about",
    children: C.jsxs("div", {
      id: "sh",
      children: [
        C.jsx("h1", { id: "h1about", children: "Sobre nós" }),
        C.jsx("p", {
          className: "para",
          children:
            "Somos um grupo de estudantes em transição de carreira focados no aprendizado da AWS (Amazon Web Services). Estamos  dedicados a expandir nossos conhecimentos e habilidades nessa plataforma líder de computação em nuvem. Nosso objetivo é construir uma base sólida de competências técnicas e habilidades interpessoais, conhecidas como hard e soft skills, respectivamente. Acreditamos que essa combinação é fundamental para enfrentar os desafios do setor de tecnologia.",
        }),
        C.jsx("br", {}),
        C.jsx("p", {
          className: "para",
          children:
            "Durante nossa jornada de aprendizado, desenvolvemos um projeto empolgante: a criação de um site estático. Utilizamos serviços poderosos da AWS, como o Amazon S3 para hospedar o site, o Amazon Route 53 para gerenciar o registro de domínio e o Amazon CloudFront para fornecer conteúdo de maneira rápida e segura aos visitantes. Nossa experiência na criação desse projeto nos permitiu aprimorar nossas habilidades técnicas, como desenvolvimento web, gerenciamento de serviços em nuvem e configuração de infraestrutura escalável.",
        }),
        C.jsx("br", {}),
        C.jsx("p", {
          className: "para",
          children:
            "Estamos entusiasmados em compartilhar nosso trabalho com recrutadores e outros profissionais da área. Este site é uma vitrine do nosso aprendizado e um reflexo do nosso compromisso em evoluir como profissionais de tecnologia. Agradecemos por visitar nosso site e esperamos que você aprecie o que criamos. Se você deseja entrar em contato conosco ou saber mais sobre nossas experiências, não hesite em nos contatar.",
        }),
      ],
    }),
  });
}
function yf(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = yf(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Vt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = yf(e)) && (r && (r += " "), (r += t));
  return r;
}
const Pr = (e) => typeof e == "number" && !isNaN(e),
  yn = (e) => typeof e == "string",
  Me = (e) => typeof e == "function",
  Fi = (e) => (yn(e) || Me(e) ? e : null),
  dl = (e) => x.isValidElement(e) || yn(e) || Me(e) || Pr(e);
function tg(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function Ro(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: o = 300,
  } = e;
  return function (l) {
    let {
      children: a,
      position: s,
      preventExitTransition: u,
      done: g,
      nodeRef: y,
      isIn: c,
    } = l;
    const v = r ? `${t}--${s}` : t,
      p = r ? `${n}--${s}` : n,
      h = x.useRef(0);
    return (
      x.useLayoutEffect(() => {
        const E = y.current,
          f = v.split(" "),
          d = (m) => {
            m.target === y.current &&
              (E.dispatchEvent(new Event("d")),
              E.removeEventListener("animationend", d),
              E.removeEventListener("animationcancel", d),
              h.current === 0 &&
                m.type !== "animationcancel" &&
                E.classList.remove(...f));
          };
        E.classList.add(...f),
          E.addEventListener("animationend", d),
          E.addEventListener("animationcancel", d);
      }, []),
      x.useEffect(() => {
        const E = y.current,
          f = () => {
            E.removeEventListener("animationend", f), i ? tg(E, g, o) : g();
          };
        c ||
          (u
            ? f()
            : ((h.current = 1),
              (E.className += ` ${p}`),
              E.addEventListener("animationend", f)));
      }, [c]),
      b.createElement(b.Fragment, null, a)
    );
  };
}
function Bu(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const He = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  ki = (e) => {
    let { theme: t, type: n, ...r } = e;
    return b.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  fl = {
    info: function (e) {
      return b.createElement(
        ki,
        { ...e },
        b.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return b.createElement(
        ki,
        { ...e },
        b.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return b.createElement(
        ki,
        { ...e },
        b.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return b.createElement(
        ki,
        { ...e },
        b.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return b.createElement("div", { className: "Toastify__spinner" });
    },
  };
function ng(e) {
  const [, t] = x.useReducer((v) => v + 1, 0),
    [n, r] = x.useState([]),
    i = x.useRef(null),
    o = x.useRef(new Map()).current,
    l = (v) => n.indexOf(v) !== -1,
    a = x.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: l,
      getToast: (v) => o.get(v),
    }).current;
  function s(v) {
    let { containerId: p } = v;
    const { limit: h } = a.props;
    !h ||
      (p && a.containerId !== p) ||
      ((a.count -= a.queue.length), (a.queue = []));
  }
  function u(v) {
    r((p) => (v == null ? [] : p.filter((h) => h !== v)));
  }
  function g() {
    const { toastContent: v, toastProps: p, staleId: h } = a.queue.shift();
    c(v, p, h);
  }
  function y(v, p) {
    let { delay: h, staleId: E, ...f } = p;
    if (
      !dl(v) ||
      (function (ae) {
        return (
          !i.current ||
          (a.props.enableMultiContainer &&
            ae.containerId !== a.props.containerId) ||
          (o.has(ae.toastId) && ae.updateId == null)
        );
      })(f)
    )
      return;
    const { toastId: d, updateId: m, data: w } = f,
      { props: S } = a,
      P = () => u(d),
      N = m == null;
    N && a.count++;
    const _ = {
      ...S,
      style: S.toastStyle,
      key: a.toastKey++,
      ...Object.fromEntries(
        Object.entries(f).filter((ae) => {
          let [ie, se] = ae;
          return se != null;
        })
      ),
      toastId: d,
      updateId: m,
      data: w,
      closeToast: P,
      isIn: !1,
      className: Fi(f.className || S.toastClassName),
      bodyClassName: Fi(f.bodyClassName || S.bodyClassName),
      progressClassName: Fi(f.progressClassName || S.progressClassName),
      autoClose:
        !f.isLoading &&
        ((A = f.autoClose),
        (R = S.autoClose),
        A === !1 || (Pr(A) && A > 0) ? A : R),
      deleteToast() {
        const ae = Bu(o.get(d), "removed");
        o.delete(d), He.emit(4, ae);
        const ie = a.queue.length;
        if (
          ((a.count = d == null ? a.count - a.displayedToast : a.count - 1),
          a.count < 0 && (a.count = 0),
          ie > 0)
        ) {
          const se = d == null ? a.props.limit : 1;
          if (ie === 1 || se === 1) a.displayedToast++, g();
          else {
            const Je = se > ie ? ie : se;
            a.displayedToast = Je;
            for (let oe = 0; oe < Je; oe++) g();
          }
        } else t();
      },
    };
    var A, R;
    (_.iconOut = (function (ae) {
      let { theme: ie, type: se, isLoading: Je, icon: oe } = ae,
        me = null;
      const T = { theme: ie, type: se };
      return (
        oe === !1 ||
          (Me(oe)
            ? (me = oe(T))
            : x.isValidElement(oe)
            ? (me = x.cloneElement(oe, T))
            : yn(oe) || Pr(oe)
            ? (me = oe)
            : Je
            ? (me = fl.spinner())
            : ((I) => I in fl)(se) && (me = fl[se](T))),
        me
      );
    })(_)),
      Me(f.onOpen) && (_.onOpen = f.onOpen),
      Me(f.onClose) && (_.onClose = f.onClose),
      (_.closeButton = S.closeButton),
      f.closeButton === !1 || dl(f.closeButton)
        ? (_.closeButton = f.closeButton)
        : f.closeButton === !0 &&
          (_.closeButton = !dl(S.closeButton) || S.closeButton);
    let re = v;
    x.isValidElement(v) && !yn(v.type)
      ? (re = x.cloneElement(v, { closeToast: P, toastProps: _, data: w }))
      : Me(v) && (re = v({ closeToast: P, toastProps: _, data: w })),
      S.limit && S.limit > 0 && a.count > S.limit && N
        ? a.queue.push({ toastContent: re, toastProps: _, staleId: E })
        : Pr(h)
        ? setTimeout(() => {
            c(re, _, E);
          }, h)
        : c(re, _, E);
  }
  function c(v, p, h) {
    const { toastId: E } = p;
    h && o.delete(h);
    const f = { content: v, props: p };
    o.set(E, f),
      r((d) => [...d, E].filter((m) => m !== h)),
      He.emit(4, Bu(f, f.props.updateId == null ? "added" : "updated"));
  }
  return (
    x.useEffect(
      () => (
        (a.containerId = e.containerId),
        He.cancelEmit(3)
          .on(0, y)
          .on(1, (v) => i.current && u(v))
          .on(5, s)
          .emit(2, a),
        () => {
          o.clear(), He.emit(3, a);
        }
      ),
      []
    ),
    x.useEffect(() => {
      (a.props = e), (a.isToastActive = l), (a.displayedToast = n.length);
    }),
    {
      getToastToRender: function (v) {
        const p = new Map(),
          h = Array.from(o.values());
        return (
          e.newestOnTop && h.reverse(),
          h.forEach((E) => {
            const { position: f } = E.props;
            p.has(f) || p.set(f, []), p.get(f).push(E);
          }),
          Array.from(p, (E) => v(E[0], E[1]))
        );
      },
      containerRef: i,
      isToastActive: l,
    }
  );
}
function Vu(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function Wu(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function rg(e) {
  const [t, n] = x.useState(!1),
    [r, i] = x.useState(!1),
    o = x.useRef(null),
    l = x.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    a = x.useRef(e),
    {
      autoClose: s,
      pauseOnHover: u,
      closeToast: g,
      onClick: y,
      closeOnClick: c,
    } = e;
  function v(w) {
    if (e.draggable) {
      w.nativeEvent.type === "touchstart" && w.nativeEvent.preventDefault(),
        (l.didMove = !1),
        document.addEventListener("mousemove", f),
        document.addEventListener("mouseup", d),
        document.addEventListener("touchmove", f),
        document.addEventListener("touchend", d);
      const S = o.current;
      (l.canCloseOnClick = !0),
        (l.canDrag = !0),
        (l.boundingRect = S.getBoundingClientRect()),
        (S.style.transition = ""),
        (l.x = Vu(w.nativeEvent)),
        (l.y = Wu(w.nativeEvent)),
        e.draggableDirection === "x"
          ? ((l.start = l.x),
            (l.removalDistance = S.offsetWidth * (e.draggablePercent / 100)))
          : ((l.start = l.y),
            (l.removalDistance =
              S.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function p(w) {
    if (l.boundingRect) {
      const { top: S, bottom: P, left: N, right: _ } = l.boundingRect;
      w.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      l.x >= N &&
      l.x <= _ &&
      l.y >= S &&
      l.y <= P
        ? E()
        : h();
    }
  }
  function h() {
    n(!0);
  }
  function E() {
    n(!1);
  }
  function f(w) {
    const S = o.current;
    l.canDrag &&
      S &&
      ((l.didMove = !0),
      t && E(),
      (l.x = Vu(w)),
      (l.y = Wu(w)),
      (l.delta = e.draggableDirection === "x" ? l.x - l.start : l.y - l.start),
      l.start !== l.x && (l.canCloseOnClick = !1),
      (S.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
      (S.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance))));
  }
  function d() {
    document.removeEventListener("mousemove", f),
      document.removeEventListener("mouseup", d),
      document.removeEventListener("touchmove", f),
      document.removeEventListener("touchend", d);
    const w = o.current;
    if (l.canDrag && l.didMove && w) {
      if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
        return i(!0), void e.closeToast();
      (w.style.transition = "transform 0.2s, opacity 0.2s"),
        (w.style.transform = `translate${e.draggableDirection}(0)`),
        (w.style.opacity = "1");
    }
  }
  x.useEffect(() => {
    a.current = e;
  }),
    x.useEffect(
      () => (
        o.current && o.current.addEventListener("d", h, { once: !0 }),
        Me(e.onOpen) &&
          e.onOpen(x.isValidElement(e.children) && e.children.props),
        () => {
          const w = a.current;
          Me(w.onClose) &&
            w.onClose(x.isValidElement(w.children) && w.children.props);
        }
      ),
      []
    ),
    x.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || E(),
          window.addEventListener("focus", h),
          window.addEventListener("blur", E)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener("focus", h),
            window.removeEventListener("blur", E));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const m = { onMouseDown: v, onTouchStart: v, onMouseUp: p, onTouchEnd: p };
  return (
    s && u && ((m.onMouseEnter = E), (m.onMouseLeave = h)),
    c &&
      (m.onClick = (w) => {
        y && y(w), l.canCloseOnClick && g();
      }),
    {
      playToast: h,
      pauseToast: E,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: m,
    }
  );
}
function wf(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return b.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (i) => {
        i.stopPropagation(), t(i);
      },
      "aria-label": r,
    },
    b.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      b.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function ig(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: o,
    className: l,
    style: a,
    controlledProgress: s,
    progress: u,
    rtl: g,
    isIn: y,
    theme: c,
  } = e;
  const v = o || (s && u === 0),
    p = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: v ? 0 : 1,
    };
  s && (p.transform = `scaleX(${u})`);
  const h = Vt(
      "Toastify__progress-bar",
      s
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${c}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": g }
    ),
    E = Me(l) ? l({ rtl: g, type: i, defaultClassName: h }) : Vt(h, l);
  return b.createElement("div", {
    role: "progressbar",
    "aria-hidden": v ? "true" : "false",
    "aria-label": "notification timer",
    className: E,
    style: p,
    [s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      s && u < 1
        ? null
        : () => {
            y && r();
          },
  });
}
const og = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
      } = rg(e),
      {
        closeButton: o,
        children: l,
        autoClose: a,
        onClick: s,
        type: u,
        hideProgressBar: g,
        closeToast: y,
        transition: c,
        position: v,
        className: p,
        style: h,
        bodyClassName: E,
        bodyStyle: f,
        progressClassName: d,
        progressStyle: m,
        updateId: w,
        role: S,
        progress: P,
        rtl: N,
        toastId: _,
        deleteToast: A,
        isIn: R,
        isLoading: re,
        iconOut: ae,
        closeOnClick: ie,
        theme: se,
      } = e,
      Je = Vt(
        "Toastify__toast",
        `Toastify__toast-theme--${se}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": N },
        { "Toastify__toast--close-on-click": ie }
      ),
      oe = Me(p)
        ? p({ rtl: N, position: v, type: u, defaultClassName: Je })
        : Vt(Je, p),
      me = !!P || !a,
      T = { closeToast: y, type: u, theme: se };
    let I = null;
    return (
      o === !1 ||
        (I = Me(o) ? o(T) : x.isValidElement(o) ? x.cloneElement(o, T) : wf(T)),
      b.createElement(
        c,
        { isIn: R, done: A, position: v, preventExitTransition: n, nodeRef: r },
        b.createElement(
          "div",
          { id: _, onClick: s, className: oe, ...i, style: h, ref: r },
          b.createElement(
            "div",
            {
              ...(R && { role: S }),
              className: Me(E) ? E({ type: u }) : Vt("Toastify__toast-body", E),
              style: f,
            },
            ae != null &&
              b.createElement(
                "div",
                {
                  className: Vt("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !re,
                  }),
                },
                ae
              ),
            b.createElement("div", null, l)
          ),
          I,
          b.createElement(ig, {
            ...(w && !me ? { key: `pb-${w}` } : {}),
            rtl: N,
            theme: se,
            delay: a,
            isRunning: t,
            isIn: R,
            closeToast: y,
            hide: g,
            type: u,
            style: m,
            className: d,
            controlledProgress: me,
            progress: P || 0,
          })
        )
      )
    );
  },
  Mo = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  lg = Ro(Mo("bounce", !0));
Ro(Mo("slide", !0));
Ro(Mo("zoom"));
Ro(Mo("flip"));
const da = x.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = ng(e),
    { className: o, style: l, rtl: a, containerId: s } = e;
  function u(g) {
    const y = Vt(
      "Toastify__toast-container",
      `Toastify__toast-container--${g}`,
      { "Toastify__toast-container--rtl": a }
    );
    return Me(o)
      ? o({ position: g, rtl: a, defaultClassName: y })
      : Vt(y, Fi(o));
  }
  return (
    x.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    b.createElement(
      "div",
      { ref: r, className: "Toastify", id: s },
      n((g, y) => {
        const c = y.length ? { ...l } : { ...l, pointerEvents: "none" };
        return b.createElement(
          "div",
          { className: u(g), style: c, key: `container-${g}` },
          y.map((v, p) => {
            let { content: h, props: E } = v;
            return b.createElement(
              og,
              {
                ...E,
                isIn: i(E.toastId),
                style: { ...E.style, "--nth": p + 1, "--len": y.length },
                key: `toast-${E.key}`,
              },
              h
            );
          })
        );
      })
    )
  );
});
(da.displayName = "ToastContainer"),
  (da.defaultProps = {
    position: "top-right",
    transition: lg,
    autoClose: 5e3,
    closeButton: wf,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let pl,
  an = new Map(),
  gr = [],
  ag = 1;
function Ef() {
  return "" + ag++;
}
function sg(e) {
  return e && (yn(e.toastId) || Pr(e.toastId)) ? e.toastId : Ef();
}
function Nr(e, t) {
  return (
    an.size > 0 ? He.emit(0, e, t) : gr.push({ content: e, options: t }),
    t.toastId
  );
}
function co(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: sg(t) };
}
function xi(e) {
  return (t, n) => Nr(t, co(e, n));
}
function Q(e, t) {
  return Nr(e, co("default", t));
}
(Q.loading = (e, t) =>
  Nr(
    e,
    co("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (Q.promise = function (e, t, n) {
    let r,
      { pending: i, error: o, success: l } = t;
    i && (r = yn(i) ? Q.loading(i, n) : Q.loading(i.render, { ...n, ...i }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      s = (g, y, c) => {
        if (y == null) return void Q.dismiss(r);
        const v = { type: g, ...a, ...n, data: c },
          p = yn(y) ? { render: y } : y;
        return r ? Q.update(r, { ...v, ...p }) : Q(p.render, { ...v, ...p }), c;
      },
      u = Me(e) ? e() : e;
    return u.then((g) => s("success", l, g)).catch((g) => s("error", o, g)), u;
  }),
  (Q.success = xi("success")),
  (Q.info = xi("info")),
  (Q.error = xi("error")),
  (Q.warning = xi("warning")),
  (Q.warn = Q.warning),
  (Q.dark = (e, t) => Nr(e, co("default", { theme: "dark", ...t }))),
  (Q.dismiss = (e) => {
    an.size > 0
      ? He.emit(1, e)
      : (gr = gr.filter((t) => e != null && t.options.toastId !== e));
  }),
  (Q.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), He.emit(5, e);
  }),
  (Q.isActive = (e) => {
    let t = !1;
    return (
      an.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (Q.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, i) {
          let { containerId: o } = i;
          const l = an.get(o || pl);
          return l && l.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: i } = n,
            o = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: Ef(),
            };
          o.toastId !== e && (o.staleId = e);
          const l = o.render || i;
          delete o.render, Nr(l, o);
        }
      }, 0);
  }),
  (Q.done = (e) => {
    Q.update(e, { progress: 1 });
  }),
  (Q.onChange = (e) => (
    He.on(4, e),
    () => {
      He.off(4, e);
    }
  )),
  (Q.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (Q.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  He.on(2, (e) => {
    (pl = e.containerId || e),
      an.set(pl, e),
      gr.forEach((t) => {
        He.emit(0, t.content, t.options);
      }),
      (gr = []);
  }).on(3, (e) => {
    an.delete(e.containerId || e), an.size === 0 && He.off(0).off(1).off(5);
  });
var L = {},
  fa = { exports: {} };
(function (e, t) {
  (function (n, r) {
    var i = "1.0.35",
      o = "",
      l = "?",
      a = "function",
      s = "undefined",
      u = "object",
      g = "string",
      y = "major",
      c = "model",
      v = "name",
      p = "type",
      h = "vendor",
      E = "version",
      f = "architecture",
      d = "console",
      m = "mobile",
      w = "tablet",
      S = "smarttv",
      P = "wearable",
      N = "embedded",
      _ = 350,
      A = "Amazon",
      R = "Apple",
      re = "ASUS",
      ae = "BlackBerry",
      ie = "Browser",
      se = "Chrome",
      Je = "Edge",
      oe = "Firefox",
      me = "Google",
      T = "Huawei",
      I = "LG",
      j = "Microsoft",
      q = "Motorola",
      J = "Opera",
      Ot = "Samsung",
      ut = "Sharp",
      Lt = "Sony",
      et = "Xiaomi",
      It = "Zebra",
      vs = "Facebook",
      gs = "Chromium OS",
      ys = "Mac OS",
      wp = function (U, W) {
        var F = {};
        for (var H in U)
          W[H] && W[H].length % 2 === 0
            ? (F[H] = W[H].concat(U[H]))
            : (F[H] = U[H]);
        return F;
      },
      ri = function (U) {
        for (var W = {}, F = 0; F < U.length; F++) W[U[F].toUpperCase()] = U[F];
        return W;
      },
      ws = function (U, W) {
        return typeof U === g ? rr(W).indexOf(rr(U)) !== -1 : !1;
      },
      rr = function (U) {
        return U.toLowerCase();
      },
      Ep = function (U) {
        return typeof U === g ? U.replace(/[^\d\.]/g, o).split(".")[0] : r;
      },
      jo = function (U, W) {
        if (typeof U === g)
          return (
            (U = U.replace(/^\s\s*/, o)), typeof W === s ? U : U.substring(0, _)
          );
      },
      ir = function (U, W) {
        for (var F = 0, H, Rt, ct, V, z, dt; F < W.length && !z; ) {
          var Do = W[F],
            ks = W[F + 1];
          for (H = Rt = 0; H < Do.length && !z && Do[H]; )
            if (((z = Do[H++].exec(U)), z))
              for (ct = 0; ct < ks.length; ct++)
                (dt = z[++Rt]),
                  (V = ks[ct]),
                  typeof V === u && V.length > 0
                    ? V.length === 2
                      ? typeof V[1] == a
                        ? (this[V[0]] = V[1].call(this, dt))
                        : (this[V[0]] = V[1])
                      : V.length === 3
                      ? typeof V[1] === a && !(V[1].exec && V[1].test)
                        ? (this[V[0]] = dt ? V[1].call(this, dt, V[2]) : r)
                        : (this[V[0]] = dt ? dt.replace(V[1], V[2]) : r)
                      : V.length === 4 &&
                        (this[V[0]] = dt
                          ? V[3].call(this, dt.replace(V[1], V[2]))
                          : r)
                    : (this[V] = dt || r);
          F += 2;
        }
      },
      Fo = function (U, W) {
        for (var F in W)
          if (typeof W[F] === u && W[F].length > 0) {
            for (var H = 0; H < W[F].length; H++)
              if (ws(W[F][H], U)) return F === l ? r : F;
          } else if (ws(W[F], U)) return F === l ? r : F;
        return U;
      },
      Sp = {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/",
      },
      Es = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM",
      },
      Ss = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [E, [v, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [E, [v, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [v, E],
          [/opios[\/ ]+([\w\.]+)/i],
          [E, [v, J + " Mini"]],
          [/\bopr\/([\w\.]+)/i],
          [E, [v, J]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            /(heytap|ovi)browser\/([\d\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [v, E],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [E, [v, "UC" + ie]],
          [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
          [E, [v, "WeChat(Win) Desktop"]],
          [/micromessenger\/([\w\.]+)/i],
          [E, [v, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [E, [v, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [E, [v, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [E, [v, "Yandex"]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[v, /(.+)/, "$1 Secure " + ie], E],
          [/\bfocus\/([\w\.]+)/i],
          [E, [v, oe + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [E, [v, J + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [E, [v, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [E, [v, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [E, [v, J + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [E, [v, "MIUI " + ie]],
          [/fxios\/([-\w\.]+)/i],
          [E, [v, oe]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[v, "360 " + ie]],
          [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
          [[v, /(.+)/, "$1 " + ie], E],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[v, /_/g, " "], E],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [v, E],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
          [v],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[v, vs], E],
          [
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
          ],
          [v, E],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [E, [v, "GSA"]],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [E, [v, "TikTok"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [E, [v, se + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[v, se + " WebView"], E],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [E, [v, "Android " + ie]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [v, E],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [E, [v, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [E, v],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [v, [E, Fo, Sp]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [v, E],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[v, "Netscape"], E],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [E, [v, oe + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
            /panasonic;(viera)/i,
          ],
          [v, E],
          [/(cobalt)\/([\w\.]+)/i],
          [v, [E, /master.|lts./, ""]],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[f, "amd64"]],
          [/(ia32(?=;))/i],
          [[f, rr]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[f, "ia32"]],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[f, "arm64"]],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[f, "armhf"]],
          [/windows (ce|mobile); ppc;/i],
          [[f, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[f, /ower/, o, rr]],
          [/(sun4\w)[;\)]/i],
          [[f, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[f, rr]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [c, [h, Ot], [p, w]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [c, [h, Ot], [p, m]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [c, [h, R], [p, m]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [c, [h, R], [p, w]],
          [/(macintosh);/i],
          [c, [h, R]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [c, [h, ut], [p, m]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [c, [h, T], [p, w]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
          ],
          [c, [h, T], [p, m]],
          [
            /\b(poco[\w ]+)(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [c, /_/g, " "],
            [h, et],
            [p, m],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [c, /_/g, " "],
            [h, et],
            [p, w],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [c, [h, "OPPO"], [p, m]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [c, [h, "Vivo"], [p, m]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [c, [h, "Realme"], [p, m]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [c, [h, q], [p, m]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [c, [h, q], [p, w]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [c, [h, I], [p, w]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [c, [h, I], [p, m]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [c, [h, "Lenovo"], [p, w]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [c, /_/g, " "],
            [h, "Nokia"],
            [p, m],
          ],
          [/(pixel c)\b/i],
          [c, [h, me], [p, w]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [c, [h, me], [p, m]],
          [
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [c, [h, Lt], [p, m]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [c, "Xperia Tablet"],
            [h, Lt],
            [p, w],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [c, [h, "OnePlus"], [p, m]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [c, [h, A], [p, w]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [c, /(.+)/g, "Fire Phone $1"],
            [h, A],
            [p, m],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [c, h, [p, w]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [c, [h, ae], [p, m]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [c, [h, re], [p, w]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [c, [h, re], [p, m]],
          [/(nexus 9)/i],
          [c, [h, "HTC"], [p, w]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [h, [c, /_/g, " "], [p, m]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [c, [h, "Acer"], [p, w]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [c, [h, "Meizu"], [p, m]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [h, c, [p, m]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [h, c, [p, w]],
          [/(surface duo)/i],
          [c, [h, j], [p, w]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [c, [h, "Fairphone"], [p, m]],
          [/(u304aa)/i],
          [c, [h, "AT&T"], [p, m]],
          [/\bsie-(\w*)/i],
          [c, [h, "Siemens"], [p, m]],
          [/\b(rct\w+) b/i],
          [c, [h, "RCA"], [p, w]],
          [/\b(venue[\d ]{2,7}) b/i],
          [c, [h, "Dell"], [p, w]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [c, [h, "Verizon"], [p, w]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [c, [h, "Barnes & Noble"], [p, w]],
          [/\b(tm\d{3}\w+) b/i],
          [c, [h, "NuVision"], [p, w]],
          [/\b(k88) b/i],
          [c, [h, "ZTE"], [p, w]],
          [/\b(nx\d{3}j) b/i],
          [c, [h, "ZTE"], [p, m]],
          [/\b(gen\d{3}) b.+49h/i],
          [c, [h, "Swiss"], [p, m]],
          [/\b(zur\d{3}) b/i],
          [c, [h, "Swiss"], [p, w]],
          [/\b((zeki)?tb.*\b) b/i],
          [c, [h, "Zeki"], [p, w]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[h, "Dragon Touch"], c, [p, w]],
          [/\b(ns-?\w{0,9}) b/i],
          [c, [h, "Insignia"], [p, w]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [c, [h, "NextBook"], [p, w]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[h, "Voice"], c, [p, m]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[h, "LvTel"], c, [p, m]],
          [/\b(ph-1) /i],
          [c, [h, "Essential"], [p, m]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [c, [h, "Envizen"], [p, w]],
          [/\b(trio[-\w\. ]+) b/i],
          [c, [h, "MachSpeed"], [p, w]],
          [/\btu_(1491) b/i],
          [c, [h, "Rotor"], [p, w]],
          [/(shield[\w ]+) b/i],
          [c, [h, "Nvidia"], [p, w]],
          [/(sprint) (\w+)/i],
          [h, c, [p, m]],
          [/(kin\.[onetw]{3})/i],
          [
            [c, /\./g, " "],
            [h, j],
            [p, m],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [c, [h, It], [p, w]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [c, [h, It], [p, m]],
          [/smart-tv.+(samsung)/i],
          [h, [p, S]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [c, /^/, "SmartTV"],
            [h, Ot],
            [p, S],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [h, I],
            [p, S],
          ],
          [/(apple) ?tv/i],
          [h, [c, R + " TV"], [p, S]],
          [/crkey/i],
          [
            [c, se + "cast"],
            [h, me],
            [p, S],
          ],
          [/droid.+aft(\w)( bui|\))/i],
          [c, [h, A], [p, S]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [c, [h, ut], [p, S]],
          [/(bravia[\w ]+)( bui|\))/i],
          [c, [h, Lt], [p, S]],
          [/(mitv-\w{5}) bui/i],
          [c, [h, et], [p, S]],
          [/Hbbtv.*(technisat) (.*);/i],
          [h, c, [p, S]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
          ],
          [
            [h, jo],
            [c, jo],
            [p, S],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[p, S]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [h, c, [p, d]],
          [/droid.+; (shield) bui/i],
          [c, [h, "Nvidia"], [p, d]],
          [/(playstation [345portablevi]+)/i],
          [c, [h, Lt], [p, d]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [c, [h, j], [p, d]],
          [/((pebble))app/i],
          [h, c, [p, P]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [c, [h, R], [p, P]],
          [/droid.+; (glass) \d/i],
          [c, [h, me], [p, P]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [c, [h, It], [p, P]],
          [/(quest( 2| pro)?)/i],
          [c, [h, vs], [p, P]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [h, [p, N]],
          [/(aeobc)\b/i],
          [c, [h, A], [p, N]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [c, [p, m]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [c, [p, w]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[p, w]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[p, m]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [c, [h, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [E, [v, Je + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [E, [v, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [v, E],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [E, v],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [v, E],
          [
            /(windows) nt 6\.2; (arm)/i,
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          ],
          [v, [E, Fo, Es]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [v, "Windows"],
            [E, Fo, Es],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /ios;fbsv\/([\d\.]+)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [E, /_/g, "."],
            [v, "iOS"],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [v, ys],
            [E, /_/g, "."],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [E, v],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [v, E],
          [/\(bb(10);/i],
          [E, [v, ae]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [E, [v, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [E, [v, oe + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [E, [v, "webOS"]],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [E, [v, "watchOS"]],
          [/crkey\/([\d\.]+)/i],
          [E, [v, se + "cast"]],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [[v, gs], E],
          [
            /panasonic;(viera)/i,
            /(netrange)mmh/i,
            /(nettv)\/(\d+\.[\w\.]+)/i,
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [v, E],
          [/(sunos) ?([\w\.\d]*)/i],
          [[v, "Solaris"], E],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [v, E],
        ],
      },
      tt = function (U, W) {
        if ((typeof U === u && ((W = U), (U = r)), !(this instanceof tt)))
          return new tt(U, W).getResult();
        var F = typeof n !== s && n.navigator ? n.navigator : r,
          H = U || (F && F.userAgent ? F.userAgent : o),
          Rt = F && F.userAgentData ? F.userAgentData : r,
          ct = W ? wp(Ss, W) : Ss,
          V = F && F.userAgent == H;
        return (
          (this.getBrowser = function () {
            var z = {};
            return (
              (z[v] = r),
              (z[E] = r),
              ir.call(z, H, ct.browser),
              (z[y] = Ep(z[E])),
              V &&
                F &&
                F.brave &&
                typeof F.brave.isBrave == a &&
                (z[v] = "Brave"),
              z
            );
          }),
          (this.getCPU = function () {
            var z = {};
            return (z[f] = r), ir.call(z, H, ct.cpu), z;
          }),
          (this.getDevice = function () {
            var z = {};
            return (
              (z[h] = r),
              (z[c] = r),
              (z[p] = r),
              ir.call(z, H, ct.device),
              V && !z[p] && Rt && Rt.mobile && (z[p] = m),
              V &&
                z[c] == "Macintosh" &&
                F &&
                typeof F.standalone !== s &&
                F.maxTouchPoints &&
                F.maxTouchPoints > 2 &&
                ((z[c] = "iPad"), (z[p] = w)),
              z
            );
          }),
          (this.getEngine = function () {
            var z = {};
            return (z[v] = r), (z[E] = r), ir.call(z, H, ct.engine), z;
          }),
          (this.getOS = function () {
            var z = {};
            return (
              (z[v] = r),
              (z[E] = r),
              ir.call(z, H, ct.os),
              V &&
                !z[v] &&
                Rt &&
                Rt.platform != "Unknown" &&
                (z[v] = Rt.platform
                  .replace(/chrome os/i, gs)
                  .replace(/macos/i, ys)),
              z
            );
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return H;
          }),
          (this.setUA = function (z) {
            return (H = typeof z === g && z.length > _ ? jo(z, _) : z), this;
          }),
          this.setUA(H),
          this
        );
      };
    (tt.VERSION = i),
      (tt.BROWSER = ri([v, E, y])),
      (tt.CPU = ri([f])),
      (tt.DEVICE = ri([c, h, p, d, m, S, w, P, N])),
      (tt.ENGINE = tt.OS = ri([v, E])),
      e.exports && (t = e.exports = tt),
      (t.UAParser = tt);
    var kn = typeof n !== s && (n.jQuery || n.Zepto);
    if (kn && !kn.ua) {
      var ii = new tt();
      (kn.ua = ii.getResult()),
        (kn.ua.get = function () {
          return ii.getUA();
        }),
        (kn.ua.set = function (U) {
          ii.setUA(U);
          var W = ii.getResult();
          for (var F in W) kn.ua[F] = W[F];
        });
    }
  })(typeof window == "object" ? window : xp);
})(fa, fa.exports);
var ug = fa.exports;
Object.defineProperty(L, "__esModule", { value: !0 });
function cg(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var Ce = x,
  Y = cg(Ce),
  Sf = ug,
  nn = new Sf(),
  _e = nn.getBrowser(),
  dg = nn.getCPU(),
  be = nn.getDevice(),
  ps = nn.getEngine(),
  rn = nn.getOS(),
  ti = nn.getUA(),
  kf = function (t) {
    return nn.setUA(t);
  },
  ni = function (t) {
    if (!t) {
      console.error("No userAgent string was provided");
      return;
    }
    var n = new Sf(t);
    return {
      UA: n,
      browser: n.getBrowser(),
      cpu: n.getCPU(),
      device: n.getDevice(),
      engine: n.getEngine(),
      os: n.getOS(),
      ua: n.getUA(),
      setUserAgent: function (i) {
        return n.setUA(i);
      },
    };
  },
  xf = Object.freeze({
    ClientUAInstance: nn,
    browser: _e,
    cpu: dg,
    device: be,
    engine: ps,
    os: rn,
    ua: ti,
    setUa: kf,
    parseUserAgent: ni,
  });
function $u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function fg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $u(Object(n), !0).forEach(function (r) {
          hg(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $u(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Or(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Or = function (t) {
          return typeof t;
        })
      : (Or = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Or(e)
  );
}
function pg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bu(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function mg(e, t, n) {
  return t && bu(e.prototype, t), n && bu(e, n), e;
}
function hg(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function pa() {
  return (
    (pa =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    pa.apply(this, arguments)
  );
}
function vg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ha(e, t);
}
function ma(e) {
  return (
    (ma = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ma(e)
  );
}
function ha(e, t) {
  return (
    (ha =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ha(e, t)
  );
}
function gg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ze(e, t) {
  if (e == null) return {};
  var n = gg(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Di(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function yg(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Di(e);
}
function wg(e, t) {
  return Eg(e) || Sg(e, t) || kg(e, t) || xg();
}
function Eg(e) {
  if (Array.isArray(e)) return e;
}
function Sg(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      l,
      a;
    try {
      for (
        n = n.call(e);
        !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      (o = !0), (a = s);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw a;
      }
    }
    return r;
  }
}
function kg(e, t) {
  if (e) {
    if (typeof e == "string") return Hu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Hu(e, t);
  }
}
function Hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ke = {
    Mobile: "mobile",
    Tablet: "tablet",
    SmartTv: "smarttv",
    Console: "console",
    Wearable: "wearable",
    Embedded: "embedded",
    Browser: void 0,
  },
  De = {
    Chrome: "Chrome",
    Firefox: "Firefox",
    Opera: "Opera",
    Yandex: "Yandex",
    Safari: "Safari",
    InternetExplorer: "Internet Explorer",
    Edge: "Edge",
    Chromium: "Chromium",
    Ie: "IE",
    MobileSafari: "Mobile Safari",
    EdgeChromium: "Edge Chromium",
    MIUI: "MIUI Browser",
    SamsungBrowser: "Samsung Browser",
  },
  nr = {
    IOS: "iOS",
    Android: "Android",
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MAC_OS: "Mac OS",
  },
  Cg = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1,
  },
  Tg = function (t) {
    switch (t) {
      case ke.Mobile:
        return { isMobile: !0 };
      case ke.Tablet:
        return { isTablet: !0 };
      case ke.SmartTv:
        return { isSmartTV: !0 };
      case ke.Console:
        return { isConsole: !0 };
      case ke.Wearable:
        return { isWearable: !0 };
      case ke.Browser:
        return { isBrowser: !0 };
      case ke.Embedded:
        return { isEmbedded: !0 };
      default:
        return Cg;
    }
  },
  _g = function (t) {
    return kf(t);
  },
  M = function (t) {
    var n =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
    return t || n;
  },
  ms = function () {
    return typeof window < "u" && (window.navigator || navigator)
      ? window.navigator || navigator
      : !1;
  },
  hs = function (t) {
    var n = ms();
    return (
      n &&
      n.platform &&
      (n.platform.indexOf(t) !== -1 ||
        (n.platform === "MacIntel" && n.maxTouchPoints > 1 && !window.MSStream))
    );
  },
  Pg = function (t, n, r, i, o) {
    return {
      isBrowser: t,
      browserMajorVersion: M(n.major),
      browserFullVersion: M(n.version),
      browserName: M(n.name),
      engineName: M(r.name),
      engineVersion: M(r.version),
      osName: M(i.name),
      osVersion: M(i.version),
      userAgent: M(o),
    };
  },
  Qu = function (t, n, r, i) {
    return fg({}, t, {
      vendor: M(n.vendor),
      model: M(n.model),
      os: M(r.name),
      osVersion: M(r.version),
      ua: M(i),
    });
  },
  Ng = function (t, n, r, i) {
    return {
      isSmartTV: t,
      engineName: M(n.name),
      engineVersion: M(n.version),
      osName: M(r.name),
      osVersion: M(r.version),
      userAgent: M(i),
    };
  },
  Og = function (t, n, r, i) {
    return {
      isConsole: t,
      engineName: M(n.name),
      engineVersion: M(n.version),
      osName: M(r.name),
      osVersion: M(r.version),
      userAgent: M(i),
    };
  },
  Lg = function (t, n, r, i) {
    return {
      isWearable: t,
      engineName: M(n.name),
      engineVersion: M(n.version),
      osName: M(r.name),
      osVersion: M(r.version),
      userAgent: M(i),
    };
  },
  Ig = function (t, n, r, i, o) {
    return {
      isEmbedded: t,
      vendor: M(n.vendor),
      model: M(n.model),
      engineName: M(r.name),
      engineVersion: M(r.version),
      osName: M(i.name),
      osVersion: M(i.version),
      userAgent: M(o),
    };
  };
function Rg(e) {
  var t = e ? ni(e) : xf,
    n = t.device,
    r = t.browser,
    i = t.engine,
    o = t.os,
    l = t.ua,
    a = Tg(n.type),
    s = a.isBrowser,
    u = a.isMobile,
    g = a.isTablet,
    y = a.isSmartTV,
    c = a.isConsole,
    v = a.isWearable,
    p = a.isEmbedded;
  if (s) return Pg(s, r, i, o, l);
  if (y) return Ng(y, i, o, l);
  if (c) return Og(c, i, o, l);
  if (u || g) return Qu(a, n, o, l);
  if (v) return Lg(v, i, o, l);
  if (p) return Ig(p, n, i, o, l);
}
var Cf = function (t) {
    var n = t.type;
    return n === ke.Mobile;
  },
  Tf = function (t) {
    var n = t.type;
    return n === ke.Tablet;
  },
  _f = function (t) {
    var n = t.type;
    return n === ke.Mobile || n === ke.Tablet;
  },
  Pf = function (t) {
    var n = t.type;
    return n === ke.SmartTv;
  },
  fo = function (t) {
    var n = t.type;
    return n === ke.Browser;
  },
  Nf = function (t) {
    var n = t.type;
    return n === ke.Wearable;
  },
  Of = function (t) {
    var n = t.type;
    return n === ke.Console;
  },
  Lf = function (t) {
    var n = t.type;
    return n === ke.Embedded;
  },
  If = function (t) {
    var n = t.vendor;
    return M(n);
  },
  Rf = function (t) {
    var n = t.model;
    return M(n);
  },
  Mf = function (t) {
    var n = t.type;
    return M(n, "browser");
  },
  zf = function (t) {
    var n = t.name;
    return n === nr.Android;
  },
  jf = function (t) {
    var n = t.name;
    return n === nr.Windows;
  },
  Ff = function (t) {
    var n = t.name;
    return n === nr.MAC_OS;
  },
  Df = function (t) {
    var n = t.name;
    return n === nr.WindowsPhone;
  },
  Uf = function (t) {
    var n = t.name;
    return n === nr.IOS;
  },
  Af = function (t) {
    var n = t.version;
    return M(n);
  },
  Bf = function (t) {
    var n = t.name;
    return M(n);
  },
  Vf = function (t) {
    var n = t.name;
    return n === De.Chrome;
  },
  Wf = function (t) {
    var n = t.name;
    return n === De.Firefox;
  },
  $f = function (t) {
    var n = t.name;
    return n === De.Chromium;
  },
  po = function (t) {
    var n = t.name;
    return n === De.Edge;
  },
  bf = function (t) {
    var n = t.name;
    return n === De.Yandex;
  },
  Hf = function (t) {
    var n = t.name;
    return n === De.Safari || n === De.MobileSafari;
  },
  Qf = function (t) {
    var n = t.name;
    return n === De.MobileSafari;
  },
  Kf = function (t) {
    var n = t.name;
    return n === De.Opera;
  },
  Yf = function (t) {
    var n = t.name;
    return n === De.InternetExplorer || n === De.Ie;
  },
  Gf = function (t) {
    var n = t.name;
    return n === De.MIUI;
  },
  Xf = function (t) {
    var n = t.name;
    return n === De.SamsungBrowser;
  },
  qf = function (t) {
    var n = t.version;
    return M(n);
  },
  Zf = function (t) {
    var n = t.major;
    return M(n);
  },
  Jf = function (t) {
    var n = t.name;
    return M(n);
  },
  ep = function (t) {
    var n = t.name;
    return M(n);
  },
  tp = function (t) {
    var n = t.version;
    return M(n);
  },
  np = function () {
    var t = ms(),
      n = t && t.userAgent && t.userAgent.toLowerCase();
    return typeof n == "string" ? /electron/.test(n) : !1;
  },
  $n = function (t) {
    return typeof t == "string" && t.indexOf("Edg/") !== -1;
  },
  rp = function () {
    var t = ms();
    return (
      t &&
      (/iPad|iPhone|iPod/.test(t.platform) ||
        (t.platform === "MacIntel" && t.maxTouchPoints > 1)) &&
      !window.MSStream
    );
  },
  ht = function () {
    return hs("iPad");
  },
  ip = function () {
    return hs("iPhone");
  },
  op = function () {
    return hs("iPod");
  },
  lp = function (t) {
    return M(t);
  };
function ap(e) {
  var t = e || xf,
    n = t.device,
    r = t.browser,
    i = t.os,
    o = t.engine,
    l = t.ua;
  return {
    isSmartTV: Pf(n),
    isConsole: Of(n),
    isWearable: Nf(n),
    isEmbedded: Lf(n),
    isMobileSafari: Qf(r) || ht(),
    isChromium: $f(r),
    isMobile: _f(n) || ht(),
    isMobileOnly: Cf(n),
    isTablet: Tf(n) || ht(),
    isBrowser: fo(n),
    isDesktop: fo(n),
    isAndroid: zf(i),
    isWinPhone: Df(i),
    isIOS: Uf(i) || ht(),
    isChrome: Vf(r),
    isFirefox: Wf(r),
    isSafari: Hf(r),
    isOpera: Kf(r),
    isIE: Yf(r),
    osVersion: Af(i),
    osName: Bf(i),
    fullBrowserVersion: qf(r),
    browserVersion: Zf(r),
    browserName: Jf(r),
    mobileVendor: If(n),
    mobileModel: Rf(n),
    engineName: ep(o),
    engineVersion: tp(o),
    getUA: lp(l),
    isEdge: po(r) || $n(l),
    isYandex: bf(r),
    deviceType: Mf(n),
    isIOS13: rp(),
    isIPad13: ht(),
    isIPhone13: ip(),
    isIPod13: op(),
    isElectron: np(),
    isEdgeChromium: $n(l),
    isLegacyEdge: po(r) && !$n(l),
    isWindows: jf(i),
    isMacOs: Ff(i),
    isMIUI: Gf(r),
    isSamsungBrowser: Xf(r),
  };
}
var sp = Pf(be),
  up = Of(be),
  cp = Nf(be),
  Mg = Lf(be),
  zg = Qf(_e) || ht(),
  jg = $f(_e),
  zo = _f(be) || ht(),
  dp = Cf(be),
  fp = Tf(be) || ht(),
  pp = fo(be),
  Fg = fo(be),
  mp = zf(rn),
  hp = Df(rn),
  vp = Uf(rn) || ht(),
  Dg = Vf(_e),
  Ug = Wf(_e),
  Ag = Hf(_e),
  Bg = Kf(_e),
  gp = Yf(_e),
  Vg = Af(rn),
  Wg = Bf(rn),
  $g = qf(_e),
  bg = Zf(_e),
  Hg = Jf(_e),
  Qg = If(be),
  Kg = Rf(be),
  Yg = ep(ps),
  Gg = tp(ps),
  Xg = lp(ti),
  qg = po(_e) || $n(ti),
  Zg = bf(_e),
  Jg = Mf(be),
  e0 = rp(),
  t0 = ht(),
  n0 = ip(),
  r0 = op(),
  i0 = np(),
  o0 = $n(ti),
  l0 = po(_e) && !$n(ti),
  a0 = jf(rn),
  s0 = Ff(rn),
  u0 = Gf(_e),
  c0 = Xf(_e),
  d0 = function (t) {
    if (!t || typeof t != "string") {
      console.error("No valid user agent string was provided");
      return;
    }
    var n = ni(t),
      r = n.device,
      i = n.browser,
      o = n.os,
      l = n.engine,
      a = n.ua;
    return ap({ device: r, browser: i, os: o, engine: l, ua: a });
  },
  f0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return mp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  p0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return pp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  m0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return gp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  h0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return vp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  v0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return zo
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  g0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return fp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  y0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return hp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  w0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children;
    t.viewClassName, t.style;
    var i = Ze(t, ["renderWithFragment", "children", "viewClassName", "style"]);
    return dp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  E0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return sp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  S0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return up
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  k0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children,
      i = Ze(t, ["renderWithFragment", "children"]);
    return cp
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", i, r)
      : null;
  },
  x0 = function (t) {
    var n = t.renderWithFragment,
      r = t.children;
    t.viewClassName, t.style;
    var i = t.condition,
      o = Ze(t, [
        "renderWithFragment",
        "children",
        "viewClassName",
        "style",
        "condition",
      ]);
    return i
      ? n
        ? Y.createElement(Ce.Fragment, null, r)
        : Y.createElement("div", o, r)
      : null;
  };
function C0(e) {
  return (function (t) {
    vg(n, t);
    function n(r) {
      var i;
      return (
        pg(this, n),
        (i = yg(this, ma(n).call(this, r))),
        (i.isEventListenerAdded = !1),
        (i.handleOrientationChange = i.handleOrientationChange.bind(Di(i))),
        (i.onOrientationChange = i.onOrientationChange.bind(Di(i))),
        (i.onPageLoad = i.onPageLoad.bind(Di(i))),
        (i.state = { isLandscape: !1, isPortrait: !1 }),
        i
      );
    }
    return (
      mg(n, [
        {
          key: "handleOrientationChange",
          value: function () {
            this.isEventListenerAdded || (this.isEventListenerAdded = !0);
            var i = window.innerWidth > window.innerHeight ? 90 : 0;
            this.setState({ isPortrait: i === 0, isLandscape: i === 90 });
          },
        },
        {
          key: "onOrientationChange",
          value: function () {
            this.handleOrientationChange();
          },
        },
        {
          key: "onPageLoad",
          value: function () {
            this.handleOrientationChange();
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (typeof window > "u" ? "undefined" : Or(window)) !== void 0 &&
              zo &&
              (this.isEventListenerAdded
                ? window.removeEventListener("load", this.onPageLoad, !1)
                : (this.handleOrientationChange(),
                  window.addEventListener("load", this.onPageLoad, !1)),
              window.addEventListener("resize", this.onOrientationChange, !1));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            window.removeEventListener("resize", this.onOrientationChange, !1);
          },
        },
        {
          key: "render",
          value: function () {
            return Y.createElement(
              e,
              pa({}, this.props, {
                isLandscape: this.state.isLandscape,
                isPortrait: this.state.isPortrait,
              })
            );
          },
        },
      ]),
      n
    );
  })(Y.Component);
}
function T0() {
  var e = Ce.useState(function () {
      var o = window.innerWidth > window.innerHeight ? 90 : 0;
      return {
        isPortrait: o === 0,
        isLandscape: o === 90,
        orientation: o === 0 ? "portrait" : "landscape",
      };
    }),
    t = wg(e, 2),
    n = t[0],
    r = t[1],
    i = Ce.useCallback(
      function () {
        var o = window.innerWidth > window.innerHeight ? 90 : 0,
          l = {
            isPortrait: o === 0,
            isLandscape: o === 90,
            orientation: o === 0 ? "portrait" : "landscape",
          };
        n.orientation !== l.orientation && r(l);
      },
      [n.orientation]
    );
  return (
    Ce.useEffect(
      function () {
        return (
          (typeof window > "u" ? "undefined" : Or(window)) !== void 0 &&
            zo &&
            (i(),
            window.addEventListener("load", i, !1),
            window.addEventListener("resize", i, !1)),
          function () {
            window.removeEventListener("resize", i, !1),
              window.removeEventListener("load", i, !1);
          }
        );
      },
      [i]
    ),
    n
  );
}
function yp(e) {
  var t = e || window.navigator.userAgent;
  return ni(t);
}
function _0(e) {
  var t = e || window.navigator.userAgent,
    n = yp(t),
    r = ap(n);
  return [r, n];
}
L.AndroidView = f0;
L.BrowserTypes = De;
L.BrowserView = p0;
L.ConsoleView = S0;
L.CustomView = x0;
L.IEView = m0;
L.IOSView = h0;
L.MobileOnlyView = w0;
L.MobileView = v0;
L.OsTypes = nr;
L.SmartTVView = E0;
L.TabletView = g0;
L.WearableView = k0;
L.WinPhoneView = y0;
L.browserName = Hg;
L.browserVersion = bg;
L.deviceDetect = Rg;
L.deviceType = Jg;
L.engineName = Yg;
L.engineVersion = Gg;
L.fullBrowserVersion = $g;
L.getSelectorsByUserAgent = d0;
L.getUA = Xg;
L.isAndroid = mp;
L.isBrowser = pp;
L.isChrome = Dg;
L.isChromium = jg;
L.isConsole = up;
L.isDesktop = Fg;
L.isEdge = qg;
L.isEdgeChromium = o0;
L.isElectron = i0;
L.isEmbedded = Mg;
L.isFirefox = Ug;
L.isIE = gp;
var P0 = (L.isIOS = vp);
L.isIOS13 = e0;
L.isIPad13 = t0;
L.isIPhone13 = n0;
L.isIPod13 = r0;
L.isLegacyEdge = l0;
L.isMIUI = u0;
var N0 = (L.isMacOs = s0);
L.isMobile = zo;
L.isMobileOnly = dp;
L.isMobileSafari = zg;
L.isOpera = Bg;
var Ku = (L.isSafari = Ag);
L.isSamsungBrowser = c0;
L.isSmartTV = sp;
L.isTablet = fp;
L.isWearable = cp;
L.isWinPhone = hp;
L.isWindows = a0;
L.isYandex = Zg;
L.mobileModel = Kg;
L.mobileVendor = Qg;
L.osName = Wg;
L.osVersion = Vg;
L.parseUserAgent = ni;
L.setUserAgent = _g;
L.useDeviceData = yp;
L.useDeviceSelectors = _0;
L.useMobileOrientation = T0;
L.withOrientationChange = C0;
const O0 = "/assets/CV-FernandoAlves-fb9c1d91.pdf",
  L0 = "/assets/Fernando-5e6e7e78.jpeg",
  I0 = "/assets/CV-CamillaCarvalho-8c20821b.pdf",
  R0 = "/assets/Camila-20ce09b9.jpeg",
  M0 = "/assets/CV-BRUNATULIK-fd0d3692.pdf",
  z0 = "/assets/picbruna-092093b4.jpeg",
  j0 = "/assets/CV-LuisPaulo-ccc7fc6e.pdf",
  F0 = "/assets/picluis-cd7ee688.jpeg",
  D0 = "/assets/Cv-ErikaSantos-ac52bae8.pdf",
  U0 = "/assets/picerika-ee85db24.jpeg",
  A0 = [
    { name: "Bruna Tulik", cvlink: M0, cvname: "Cv-Bruna", pic: z0 },
    { name: "Camila Carvalho", cvlink: I0, cvname: "Cv-Camilla", pic: R0 },
    { name: "Erika Santos", cvlink: D0, cvname: "Cv-Erika", pic: U0 },
    { name: "Fernando Alves", cvlink: O0, cvname: "Cv-Fernando", pic: L0 },
    { name: "Luis Paulo", cvlink: j0, cvname: "Cv-Luis", pic: F0 },
  ];
function B0() {
  const e = hf(),
    t = (n, r, i) => {
      n.preventDefault();
      const o = document.createElement("a");
      if (
        ((o.href = r),
        o.setAttribute("download", i),
        document.body.appendChild(o),
        Ku)
      )
        Q.warning(
          "Seu navegador não permite download direto da página, acesse o arquivo para baixá-lo",
          {
            position: "top-center",
            autoClose: 4e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "colored",
          }
        );
      else {
        try {
          const l = new MouseEvent("click", {
            view: window,
            bubbles: !0,
            cancelable: !0,
          });
          o.dispatchEvent(l),
            Q.success("Download realizado!", {
              position: "top-center",
              autoClose: 4e3,
              hideProgressBar: !1,
              closeOnClick: !0,
              pauseOnHover: !0,
              draggable: !0,
              progress: void 0,
              theme: "colored",
            });
        } catch (l) {
          Q.error("Erro no download: " + l, {
            position: "top-center",
            autoClose: 4e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "colored",
          }),
            e("*");
        }
        document.body.removeChild(o);
      }
    };
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx("h1", { className: "h1cv", children: "Currículos da Equipe:" }),
      C.jsx("main", {
        className: "cv",
        children: A0.map((n) =>
          C.jsx("div", {
            className: "cvbox",
            children: C.jsxs("div", {
              className: "card",
              children: [
                C.jsx("img", {
                  src: n.pic,
                  alt: n.name,
                  className: "profilepic",
                }),
                C.jsx("h2", { className: "h1but", children: n.name }),
                C.jsx("button", {
                  className: "butGetCv",
                  children: C.jsx("a", {
                    href: n.cvlink,
                    target: "blank",
                    children: "Visualizar CV",
                  }),
                }),
                !Ku &&
                  !P0 &&
                  !N0 &&
                  C.jsx("button", {
                    className: "butGetCv",
                    onClick: (r) => t(r, n.cvlink, n.cvname),
                    children: "Download CV",
                  }),
              ],
            }),
          })
        ),
      }),
    ],
  });
}
const V0 = "/assets/404 Error-63c66085.svg";
function W0() {
  return C.jsx("main", {
    className: "error",
    children: C.jsxs("div", {
      className: "error",
      children: [
        C.jsx("h1", { className: "h1error", children: "Ops..." }),
        C.jsx("img", { src: V0, alt: "404", className: "imgerror" }),
      ],
    }),
  });
}
function $0() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx("h5", {
        className: "h5menu",
        children: C.jsx(Et, { to: "/", children: "❌" }),
      }),
      C.jsx("div", {
        className: "menu-ham",
        children: C.jsxs("ul", {
          className: "list-menu",
          children: [
            C.jsx("li", {
              children: C.jsx(Et, {
                to: "/",
                children: C.jsx("h1", {
                  className: "h1menu",
                  children: "Home",
                }),
              }),
            }),
            C.jsx("li", {
              children: C.jsx(Et, {
                to: "/cv",
                children: C.jsx("h1", {
                  className: "h1menu",
                  children: "Currículos",
                }),
              }),
            }),
            C.jsx("li", {
              children: C.jsx(Et, {
                to: "/about",
                children: C.jsx("h1", {
                  className: "h1menu",
                  id: "h1menul",
                  children: "Saiba mais",
                }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function b0() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(da, {}),
      C.jsxs(bv, {
        children: [
          C.jsx(qv, {}),
          C.jsx("div", {
            className: "app",
            children: C.jsxs(Uv, {
              children: [
                C.jsx(Cn, { path: "/", element: C.jsx(Jv, {}) }),
                C.jsx(Cn, { path: "/cv", element: C.jsx(B0, {}) }),
                C.jsx(Cn, { path: "/about", element: C.jsx(eg, {}) }),
                C.jsx(Cn, { path: "/Menu", element: C.jsx($0, {}) }),
                C.jsx(Cn, { path: "*", element: C.jsx(W0, {}) }),
              ],
            }),
          }),
          C.jsx(Gv, {}),
        ],
      }),
    ],
  });
}
ml.createRoot(document.getElementById("root")).render(
  C.jsx(b.StrictMode, { children: C.jsx(b0, {}) })
);
