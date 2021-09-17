! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat ? function(e) {
      return n.flat.call(e)
    } : function(e) {
      return n.concat.apply([], e)
    },
    s = n.push,
    a = n.indexOf,
    u = {},
    l = u.toString,
    c = u.hasOwnProperty,
    f = c.toString,
    h = f.call(Object),
    d = {},
    p = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    },
    g = function(e) {
      return null != e && e === e.window
    },
    v = e.document,
    m = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

  function y(e, t, n) {
    var i, r, o = (n = n || v).createElement("script");
    if (o.text = e, t)
      for (i in m)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function b(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
  }
  var _ = "3.6.0",
    k = function(e, t) {
      return new k.fn.init(e, t)
    };

  function w(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  k.fn = k.prototype = {
    jquery: _,
    constructor: k,
    length: 0,
    toArray: function() {
      return r.call(this)
    },
    get: function(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return k.each(this, e)
    },
    map: function(e) {
      return this.pushStack(k.map(this, (function(t, n) {
        return e.call(t, n, t)
      })))
    },
    slice: function() {
      return this.pushStack(r.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    even: function() {
      return this.pushStack(k.grep(this, (function(e, t) {
        return (t + 1) % 2
      })))
    },
    odd: function() {
      return this.pushStack(k.grep(this, (function(e, t) {
        return t % 2
      })))
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, k.extend = k.fn.extend = function() {
    var e, t, n, i, r, o, s = arguments[0] || {},
      a = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || p(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
      if (null != (e = arguments[a]))
        for (t in e) i = e[t], "__proto__" !== t && s !== i && (l && i && (k.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || k.isPlainObject(n) ? n : {}, r = !1, s[t] = k.extend(l, o, i)) : void 0 !== i && (s[t] = i));
    return s
  }, k.extend({
    expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isPlainObject: function(e) {
      var t, n;
      return !(!e || "[object Object]" !== l.call(e)) && (!(t = i(e)) || "function" == typeof(n = c.call(t, "constructor") && t.constructor) && f.call(n) === h)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function(e, t, n) {
      y(e, {
        nonce: t && t.nonce
      }, n)
    },
    each: function(e, t) {
      var n, i = 0;
      if (w(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (w(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : a.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
      return e.length = r, e
    },
    grep: function(e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
      return i
    },
    map: function(e, t, n) {
      var i, r, s = 0,
        a = [];
      if (w(e))
        for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
      else
        for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
      return o(a)
    },
    guid: 1,
    support: d
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = n[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
    u["[object " + t + "]"] = t.toLowerCase()
  }));
  var E = function(e) {
    var t, n, i, r, o, s, a, u, l, c, f, h, d, p, g, v, m, y, b, _ = "sizzle" + 1 * new Date,
      k = e.document,
      w = 0,
      E = 0,
      x = ue(),
      A = ue(),
      C = ue(),
      T = ue(),
      S = function(e, t) {
        return e === t && (f = !0), 0
      },
      D = {}.hasOwnProperty,
      L = [],
      O = L.pop,
      F = L.push,
      j = L.push,
      N = L.slice,
      P = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          if (e[n] === t) return n;
        return -1
      },
      B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      R = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      H = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
      q = new RegExp(M + "+", "g"),
      V = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
      W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
      z = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
      U = new RegExp(M + "|>"),
      $ = new RegExp(H),
      Y = new RegExp("^" + I + "$"),
      X = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
        bool: new RegExp("^(?:" + B + ")$", "i"),
        needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
      },
      K = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
      ne = function(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      oe = function() {
        h()
      },
      se = _e((function(e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }), {
        dir: "parentNode",
        next: "legend"
      });
    try {
      j.apply(L = N.call(k.childNodes), k.childNodes), L[k.childNodes.length].nodeType
    } catch (e) {
      j = {
        apply: L.length ? function(e, t) {
          F.apply(e, N.call(t))
        } : function(e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }

    function ae(e, t, i, r) {
      var o, a, l, c, f, p, m, y = t && t.ownerDocument,
        k = t ? t.nodeType : 9;
      if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
      if (!r && (h(t), t = t || d, g)) {
        if (11 !== k && (f = J.exec(e)))
          if (o = f[1]) {
            if (9 === k) {
              if (!(l = t.getElementById(o))) return i;
              if (l.id === o) return i.push(l), i
            } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return i.push(l), i
          } else {
            if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
          } if (n.qsa && !T[e + " "] && (!v || !v.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
          if (m = e, y = t, 1 === k && (U.test(e) || z.test(e))) {
            for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = _)), a = (p = s(e)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + be(p[a]);
            m = p.join(",")
          }
          try {
            return j.apply(i, y.querySelectorAll(m)), i
          } catch (t) {
            T(e, !0)
          } finally {
            c === _ && t.removeAttribute("id")
          }
        }
      }
      return u(e.replace(V, "$1"), t, i, r)
    }

    function ue() {
      var e = [];
      return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
      }
    }

    function le(e) {
      return e[_] = !0, e
    }

    function ce(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
    }

    function he(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function pe(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function ge(e) {
      return function(t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function ve(e) {
      return le((function(t) {
        return t = +t, le((function(n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
        }))
      }))
    }

    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (t in n = ae.support = {}, o = ae.isXML = function(e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !K.test(t || n && n.nodeName || "HTML")
      }, h = ae.setDocument = function(e) {
        var t, r, s = e ? e.ownerDocument || e : k;
        return s != d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), k != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ce((function(e) {
          return p.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
        })), n.attributes = ce((function(e) {
          return e.className = "i", !e.getAttribute("className")
        })), n.getElementsByTagName = ce((function(e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
        })), n.getElementsByClassName = Z.test(d.getElementsByClassName), n.getById = ce((function(e) {
          return p.appendChild(e).id = _, !d.getElementsByName || !d.getElementsByName(_).length
        })), n.getById ? (i.filter.ID = function(e) {
          var t = e.replace(te, ne);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }, i.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (i.filter.ID = function(e) {
          var t = e.replace(te, ne);
          return function(e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }, i.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && g) {
            var n, i, r, o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
            }
            return []
          }
        }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, i = [],
            r = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return o
        }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
        }, m = [], v = [], (n.qsa = Z.test(d.querySelectorAll)) && (ce((function(e) {
          var t;
          p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
        })), ce((function(e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = d.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
        }))), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", H)
        })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, S = t ? function(e, t) {
          if (e === t) return f = !0, 0;
          var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == d || e.ownerDocument == k && b(k, e) ? -1 : t == d || t.ownerDocument == k && b(k, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & i ? -1 : 1)
        } : function(e, t) {
          if (e === t) return f = !0, 0;
          var n, i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];
          if (!r || !o) return e == d ? -1 : t == d ? 1 : r ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
          if (r === o) return he(e, t);
          for (n = e; n = n.parentNode;) s.unshift(n);
          for (n = t; n = n.parentNode;) a.unshift(n);
          for (; s[i] === a[i];) i++;
          return i ? he(s[i], a[i]) : s[i] == k ? -1 : a[i] == k ? 1 : 0
        }, d) : d
      }, ae.matches = function(e, t) {
        return ae(e, null, null, t)
      }, ae.matchesSelector = function(e, t) {
        if (h(e), n.matchesSelector && g && !T[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
          var i = y.call(e, t);
          if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {
          T(t, !0)
        }
        return ae(t, d, null, [e]).length > 0
      }, ae.contains = function(e, t) {
        return (e.ownerDocument || e) != d && h(e), b(e, t)
      }, ae.attr = function(e, t) {
        (e.ownerDocument || e) != d && h(e);
        var r = i.attrHandle[t.toLowerCase()],
          o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }, ae.escape = function(e) {
        return (e + "").replace(ie, re)
      }, ae.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, ae.uniqueSort = function(e) {
        var t, i = [],
          r = 0,
          o = 0;
        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
          for (; t = e[o++];) t === e[o] && (r = i.push(o));
          for (; r--;) e.splice(i[r], 1)
        }
        return c = null, e
      }, r = ae.getText = function(e) {
        var t, n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
          } else if (3 === o || 4 === o) return e.nodeValue
        } else
          for (; t = e[i++];) n += r(t);
        return n
      }, (i = ae.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = x[e + " "];
            return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + M + "|$)")) && x(e, (function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            }))
          },
          ATTR: function(e, t, n) {
            return function(i) {
              var r = ae.attr(i, e);
              return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
            }
          },
          CHILD: function(e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r ? function(e) {
              return !!e.parentNode
            } : function(t, n, u) {
              var l, c, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                v = t.parentNode,
                m = a && t.nodeName.toLowerCase(),
                y = !u && !a,
                b = !1;
              if (v) {
                if (o) {
                  for (; g;) {
                    for (h = t; h = h[g];)
                      if (a ? h.nodeName.toLowerCase() === m : 1 === h.nodeType) return !1;
                    p = g = "only" === e && !p && "nextSibling"
                  }
                  return !0
                }
                if (p = [s ? v.firstChild : v.lastChild], s && y) {
                  for (b = (d = (l = (c = (f = (h = v)[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2], h = d && v.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();)
                    if (1 === h.nodeType && ++b && h === t) {
                      c[e] = [w, d, b];
                      break
                    }
                } else if (y && (b = d = (l = (c = (f = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === w && l[1]), !1 === b)
                  for (;
                    (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++b || (y && ((c = (f = h[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [w, b]), h !== t)););
                return (b -= r) === i || b % i == 0 && b / i >= 0
              }
            }
          },
          PSEUDO: function(e, t) {
            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
              for (var i, o = r(e, t), s = o.length; s--;) e[i = P(e, o[s])] = !(n[i] = o[s])
            })) : function(e) {
              return r(e, 0, n)
            }) : r
          }
        },
        pseudos: {
          not: le((function(e) {
            var t = [],
              n = [],
              i = a(e.replace(V, "$1"));
            return i[_] ? le((function(e, t, n, r) {
              for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
            })) : function(e, r, o) {
              return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
            }
          })),
          has: le((function(e) {
            return function(t) {
              return ae(e, t).length > 0
            }
          })),
          contains: le((function(e) {
            return e = e.replace(te, ne),
              function(t) {
                return (t.textContent || r(t)).indexOf(e) > -1
              }
          })),
          lang: le((function(e) {
            return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          })),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === p
          },
          focus: function(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !i.pseudos.empty(e)
          },
          header: function(e) {
            return G.test(e.nodeName)
          },
          input: function(e) {
            return Q.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: ve((function() {
            return [0]
          })),
          last: ve((function(e, t) {
            return [t - 1]
          })),
          eq: ve((function(e, t, n) {
            return [n < 0 ? n + t : n]
          })),
          even: ve((function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          })),
          odd: ve((function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          })),
          lt: ve((function(e, t, n) {
            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
            return e
          })),
          gt: ve((function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          }))
        }
      }).pseudos.nth = i.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) i.pseudos[t] = de(t);
    for (t in {
        submit: !0,
        reset: !0
      }) i.pseudos[t] = pe(t);

    function ye() {}

    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function _e(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = E++;
      return t.first ? function(t, n, r) {
        for (; t = t[i];)
          if (1 === t.nodeType || s) return e(t, n, r);
        return !1
      } : function(t, n, u) {
        var l, c, f, h = [w, a];
        if (u) {
          for (; t = t[i];)
            if ((1 === t.nodeType || s) && e(t, n, u)) return !0
        } else
          for (; t = t[i];)
            if (1 === t.nodeType || s)
              if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
              else {
                if ((l = c[o]) && l[0] === w && l[1] === a) return h[2] = l[2];
                if (c[o] = h, h[2] = e(t, n, u)) return !0
              } return !1
      }
    }

    function ke(e) {
      return e.length > 1 ? function(t, n, i) {
        for (var r = e.length; r--;)
          if (!e[r](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function we(e, t, n, i, r) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), l && t.push(a)));
      return s
    }

    function Ee(e, t, n, i, r, o) {
      return i && !i[_] && (i = Ee(i)), r && !r[_] && (r = Ee(r, o)), le((function(o, s, a, u) {
        var l, c, f, h = [],
          d = [],
          p = s.length,
          g = o || function(e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
            return n
          }(t || "*", a.nodeType ? [a] : a, []),
          v = !e || !o && t ? g : we(g, h, e, a, u),
          m = n ? r || (o ? e : p || i) ? [] : s : v;
        if (n && n(v, m, a, u), i)
          for (l = we(m, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
        if (o) {
          if (r || e) {
            if (r) {
              for (l = [], c = m.length; c--;)(f = m[c]) && l.push(v[c] = f);
              r(null, m = [], l, u)
            }
            for (c = m.length; c--;)(f = m[c]) && (l = r ? P(o, f) : h[c]) > -1 && (o[l] = !(s[l] = f))
          }
        } else m = we(m === s ? m.splice(p, m.length) : m), r ? r(null, s, m, u) : j.apply(s, m)
      }))
    }

    function xe(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], u = s ? 1 : 0, c = _e((function(e) {
          return e === t
        }), a, !0), f = _e((function(e) {
          return P(t, e) > -1
        }), a, !0), h = [function(e, n, i) {
          var r = !s && (i || n !== l) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
          return t = null, r
        }]; u < o; u++)
        if (n = i.relative[e[u].type]) h = [_e(ke(h), n)];
        else {
          if ((n = i.filter[e[u].type].apply(null, e[u].matches))[_]) {
            for (r = ++u; r < o && !i.relative[e[r].type]; r++);
            return Ee(u > 1 && ke(h), u > 1 && be(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(V, "$1"), n, u < r && xe(e.slice(u, r)), r < o && xe(e = e.slice(r)), r < o && be(e))
          }
          h.push(n)
        } return ke(h)
    }
    return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
      var n, r, o, s, a, u, l, c = A[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (a = e, u = [], l = i.preFilter; a;) {
        for (s in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), o.push({
            value: n,
            type: r[0].replace(V, " ")
          }), a = a.slice(n.length)), i.filter) !(r = X[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
          value: n,
          type: s,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? ae.error(e) : A(e, u).slice(0)
    }, a = ae.compile = function(e, t) {
      var n, r = [],
        o = [],
        a = C[e + " "];
      if (!a) {
        for (t || (t = s(e)), n = t.length; n--;)(a = xe(t[n]))[_] ? r.push(a) : o.push(a);
        (a = C(e, function(e, t) {
          var n = t.length > 0,
            r = e.length > 0,
            o = function(o, s, a, u, c) {
              var f, p, v, m = 0,
                y = "0",
                b = o && [],
                _ = [],
                k = l,
                E = o || r && i.find.TAG("*", c),
                x = w += null == k ? 1 : Math.random() || .1,
                A = E.length;
              for (c && (l = s == d || s || c); y !== A && null != (f = E[y]); y++) {
                if (r && f) {
                  for (p = 0, s || f.ownerDocument == d || (h(f), a = !g); v = e[p++];)
                    if (v(f, s || d, a)) {
                      u.push(f);
                      break
                    } c && (w = x)
                }
                n && ((f = !v && f) && m--, o && b.push(f))
              }
              if (m += y, n && y !== m) {
                for (p = 0; v = t[p++];) v(b, _, s, a);
                if (o) {
                  if (m > 0)
                    for (; y--;) b[y] || _[y] || (_[y] = O.call(u));
                  _ = we(_)
                }
                j.apply(u, _), c && !o && _.length > 0 && m + t.length > 1 && ae.uniqueSort(u)
              }
              return c && (w = x, l = k), b
            };
          return n ? le(o) : o
        }(o, r))).selector = e
      }
      return a
    }, u = ae.select = function(e, t, n, r) {
      var o, u, l, c, f, h = "function" == typeof e && e,
        d = !r && s(e = h.selector || e);
      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && i.relative[u[1].type]) {
          if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
          h && (t = t.parentNode), e = e.slice(u.shift().value.length)
        }
        for (o = X.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !i.relative[c = l.type]);)
          if ((f = i.find[c]) && (r = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = r.length && be(u))) return j.apply(n, r), n;
            break
          }
      }
      return (h || a(e, d))(r, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n
    }, n.sortStable = _.split("").sort(S).join("") === _, n.detectDuplicates = !!f, h(), n.sortDetached = ce((function(e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
    })), ce((function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    })) || fe("type|href|height|width", (function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    })), n.attributes && ce((function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    })) || fe("value", (function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    })), ce((function(e) {
      return null == e.getAttribute("disabled")
    })) || fe(B, (function(e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    })), ae
  }(e);
  k.find = E, k.expr = E.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = E.uniqueSort, k.text = E.getText, k.isXMLDoc = E.isXML, k.contains = E.contains, k.escapeSelector = E.escape;
  var x = function(e, t, n) {
      for (var i = [], r = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (r && k(e).is(n)) break;
          i.push(e)
        } return i
    },
    A = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    C = k.expr.match.needsContext;

  function T(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, t, n) {
    return p(t) ? k.grep(e, (function(e, i) {
      return !!t.call(e, i, e) !== n
    })) : t.nodeType ? k.grep(e, (function(e) {
      return e === t !== n
    })) : "string" != typeof t ? k.grep(e, (function(e) {
      return a.call(t, e) > -1 !== n
    })) : k.filter(t, e, n)
  }
  k.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? k.find.matchesSelector(i, e) ? [i] : [] : k.find.matches(e, k.grep(t, (function(e) {
      return 1 === e.nodeType
    })))
  }, k.fn.extend({
    find: function(e) {
      var t, n, i = this.length,
        r = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter((function() {
        for (t = 0; t < i; t++)
          if (k.contains(r[t], this)) return !0
      })));
      for (n = this.pushStack([]), t = 0; t < i; t++) k.find(e, r[t], n);
      return i > 1 ? k.uniqueSort(n) : n
    },
    filter: function(e) {
      return this.pushStack(D(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(D(this, e || [], !0))
    },
    is: function(e) {
      return !!D(this, "string" == typeof e && C.test(e) ? k(e) : e || [], !1).length
    }
  });
  var L, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function(e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || L, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), S.test(i[1]) && k.isPlainObject(t))
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (r = v.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
  }).prototype = k.fn, L = k(v);
  var F = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function N(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  k.fn.extend({
    has: function(e) {
      var t = k(e, this),
        n = t.length;
      return this.filter((function() {
        for (var e = 0; e < n; e++)
          if (k.contains(this, t[e])) return !0
      }))
    },
    closest: function(e, t) {
      var n, i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && k(e);
      if (!C.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? a.call(k(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), k.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return x(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return x(e, "parentNode", n)
    },
    next: function(e) {
      return N(e, "nextSibling")
    },
    prev: function(e) {
      return N(e, "previousSibling")
    },
    nextAll: function(e) {
      return x(e, "nextSibling")
    },
    prevAll: function(e) {
      return x(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return x(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return x(e, "previousSibling", n)
    },
    siblings: function(e) {
      return A((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return A(e.firstChild)
    },
    contents: function(e) {
      return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (T(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
    }
  }, (function(e, t) {
    k.fn[e] = function(n, i) {
      var r = k.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = k.filter(i, r)), this.length > 1 && (j[e] || k.uniqueSort(r), F.test(e) && r.reverse()), this.pushStack(r)
    }
  }));
  var P = /[^\x20\t\r\n\f]+/g;

  function B(e) {
    return e
  }

  function M(e) {
    throw e
  }

  function I(e, t, n, i) {
    var r;
    try {
      e && p(r = e.promise) ? r.call(e).done(t).fail(n) : e && p(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  k.Callbacks = function(e) {
    e = "string" == typeof e ? function(e) {
      var t = {};
      return k.each(e.match(P) || [], (function(e, n) {
        t[n] = !0
      })), t
    }(e) : k.extend({}, e);
    var t, n, i, r, o = [],
      s = [],
      a = -1,
      u = function() {
        for (r = r || e.once, i = t = !0; s.length; a = -1)
          for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
        e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
      },
      l = {
        add: function() {
          return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
            k.each(n, (function(n, i) {
              p(i) ? e.unique && l.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
            }))
          }(arguments), n && !t && u()), this
        },
        remove: function() {
          return k.each(arguments, (function(e, t) {
            for (var n;
              (n = k.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
          })), this
        },
        has: function(e) {
          return e ? k.inArray(e, o) > -1 : o.length > 0
        },
        empty: function() {
          return o && (o = []), this
        },
        disable: function() {
          return r = s = [], o = n = "", this
        },
        disabled: function() {
          return !o
        },
        lock: function() {
          return r = s = [], n || t || (o = n = ""), this
        },
        locked: function() {
          return !!r
        },
        fireWith: function(e, n) {
          return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
        },
        fire: function() {
          return l.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return l
  }, k.extend({
    Deferred: function(t) {
      var n = [
          ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
          ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        r = {
          state: function() {
            return i
          },
          always: function() {
            return o.done(arguments).fail(arguments), this
          },
          catch: function(e) {
            return r.then(null, e)
          },
          pipe: function() {
            var e = arguments;
            return k.Deferred((function(t) {
              k.each(n, (function(n, i) {
                var r = p(e[i[4]]) && e[i[4]];
                o[i[1]]((function() {
                  var e = r && r.apply(this, arguments);
                  e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                }))
              })), e = null
            })).promise()
          },
          then: function(t, i, r) {
            var o = 0;

            function s(t, n, i, r) {
              return function() {
                var a = this,
                  u = arguments,
                  l = function() {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      l = e && ("object" == typeof e || "function" == typeof e) && e.then, p(l) ? r ? l.call(e, s(o, n, B, r), s(o, n, M, r)) : (o++, l.call(e, s(o, n, B, r), s(o, n, M, r), s(o, n, B, n.notifyWith))) : (i !== B && (a = void 0, u = [e]), (r || n.resolveWith)(a, u))
                    }
                  },
                  c = r ? l : function() {
                    try {
                      l()
                    } catch (e) {
                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== M && (a = void 0, u = [e]), n.rejectWith(a, u))
                    }
                  };
                t ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), e.setTimeout(c))
              }
            }
            return k.Deferred((function(e) {
              n[0][3].add(s(0, e, p(r) ? r : B, e.notifyWith)), n[1][3].add(s(0, e, p(t) ? t : B)), n[2][3].add(s(0, e, p(i) ? i : M))
            })).promise()
          },
          promise: function(e) {
            return null != e ? k.extend(e, r) : r
          }
        },
        o = {};
      return k.each(n, (function(e, t) {
        var s = t[2],
          a = t[5];
        r[t[1]] = s.add, a && s.add((function() {
          i = a
        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = s.fireWith
      })), r.promise(o), t && t.call(o, o), o
    },
    when: function(e) {
      var t = arguments.length,
        n = t,
        i = Array(n),
        o = r.call(arguments),
        s = k.Deferred(),
        a = function(e) {
          return function(n) {
            i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || s.resolveWith(i, o)
          }
        };
      if (t <= 1 && (I(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();
      for (; n--;) I(o[n], a(n), s.reject);
      return s.promise()
    }
  });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function(t, n) {
    e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, k.readyException = function(t) {
    e.setTimeout((function() {
      throw t
    }))
  };
  var H = k.Deferred();

  function q() {
    v.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), k.ready()
  }
  k.fn.ready = function(e) {
    return H.then(e).catch((function(e) {
      k.readyException(e)
    })), this
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || H.resolveWith(v, [k]))
    }
  }), k.ready.then = H.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(k.ready) : (v.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
  var V = function(e, t, n, i, r, o, s) {
      var a = 0,
        u = e.length,
        l = null == n;
      if ("object" === b(n))
        for (a in r = !0, n) V(e, t, a, n[a], !0, o, s);
      else if (void 0 !== i && (r = !0, p(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
          return l.call(k(e), n)
        })), t))
        for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    W = /^-ms-/,
    z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase()
  }

  function $(e) {
    return e.replace(W, "ms-").replace(z, U)
  }
  var Y = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function X() {
    this.expando = k.expando + X.uid++
  }
  X.uid = 1, X.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var i, r = this.cache(e);
      if ("string" == typeof t) r[$(t)] = n;
      else
        for (i in t) r[$(i)] = t[i];
      return r
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
    },
    access: function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in i ? [t] : t.match(P) || []).length;
          for (; n--;) delete i[t[n]]
        }(void 0 === t || k.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t)
    }
  };
  var K = new X,
    Q = new X,
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;

  function J(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
        try {
          n = function(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
          }(n)
        } catch (e) {}
        Q.set(e, t, n)
      } else n = void 0;
    return n
  }
  k.extend({
    hasData: function(e) {
      return Q.hasData(e) || K.hasData(e)
    },
    data: function(e, t, n) {
      return Q.access(e, t, n)
    },
    removeData: function(e, t) {
      Q.remove(e, t)
    },
    _data: function(e, t, n) {
      return K.access(e, t, n)
    },
    _removeData: function(e, t) {
      K.remove(e, t)
    }
  }), k.fn.extend({
    data: function(e, t) {
      var n, i, r, o = this[0],
        s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = Q.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = $(i.slice(5)), J(o, i, r[i]));
          K.set(o, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each((function() {
        Q.set(this, e)
      })) : V(this, (function(t) {
        var n;
        if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = J(o, e)) ? n : void 0;
        this.each((function() {
          Q.set(this, e, t)
        }))
      }), null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each((function() {
        Q.remove(this, e)
      }))
    }
  }), k.extend({
    queue: function(e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, k.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = k.queue(e, t),
        i = n.length,
        r = n.shift(),
        o = k._queueHooks(e, t);
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function() {
        k.dequeue(e, t)
      }), o)), !i && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return K.get(e, n) || K.access(e, n, {
        empty: k.Callbacks("once memory").add((function() {
          K.remove(e, [t + "queue", n])
        }))
      })
    }
  }), k.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this : this.each((function() {
        var n = k.queue(this, e, t);
        k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
      }))
    },
    dequeue: function(e) {
      return this.each((function() {
        k.dequeue(this, e)
      }))
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, i = 1,
        r = k.Deferred(),
        o = this,
        s = this.length,
        a = function() {
          --i || r.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      return a(), r.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = v.documentElement,
    re = function(e) {
      return k.contains(e.ownerDocument, e)
    },
    oe = {
      composed: !0
    };
  ie.getRootNode && (re = function(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var se = function(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === k.css(e, "display")
  };

  function ae(e, t, n, i) {
    var r, o, s = 20,
      a = i ? function() {
        return i.cur()
      } : function() {
        return k.css(e, t, "")
      },
      u = a(),
      l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && te.exec(k.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; s--;) k.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
      c *= 2, k.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
  }
  var ue = {};

  function le(e) {
    var t, n = e.ownerDocument,
      i = e.nodeName,
      r = ue[i];
    return r || (t = n.body.appendChild(n.createElement(i)), r = k.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ue[i] = r, r)
  }

  function ce(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && se(i) && (r[o] = le(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
    return e
  }
  k.fn.extend({
    show: function() {
      return ce(this, !0)
    },
    hide: function() {
      return ce(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
        se(this) ? k(this).show() : k(this).hide()
      }))
    }
  });
  var fe, he, de = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    ge = /^$|^module$|\/(?:java|ecma)script/i;
  fe = v.createDocumentFragment().appendChild(v.createElement("div")), (he = v.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), d.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", d.option = !!fe.lastChild;
  var ve = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function me(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && T(e, t) ? k.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
  }
  ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, d.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
  var be = /<|&#?\w+;/;

  function _e(e, t, n, i, r) {
    for (var o, s, a, u, l, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === b(o)) k.merge(h, o.nodeType ? [o] : o);
        else if (be.test(o)) {
      for (s = s || f.appendChild(t.createElement("div")), a = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = ve[a] || ve._default, s.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
      k.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
    } else h.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; o = h[d++];)
      if (i && k.inArray(o, i) > -1) r && r.push(o);
      else if (l = re(o), s = me(f.appendChild(o), "script"), l && ye(s), n)
      for (c = 0; o = s[c++];) ge.test(o.type || "") && n.push(o);
    return f
  }
  var ke = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0
  }

  function Ee() {
    return !1
  }

  function xe(e, t) {
    return e === function() {
      try {
        return v.activeElement
      } catch (e) {}
    }() == ("focus" === t)
  }

  function Ae(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, a, n, i, t[a], o);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee;
    else if (!r) return e;
    return 1 === o && (s = r, (r = function(e) {
      return k().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = k.guid++)), e.each((function() {
      k.event.add(this, t, r, i, n)
    }))
  }

  function Ce(e, t, n) {
    n ? (K.set(e, t, !1), k.event.add(e, t, {
      namespace: !1,
      handler: function(e) {
        var i, o, s = K.get(this, t);
        if (1 & e.isTrigger && this[t]) {
          if (s.length)(k.event.special[t] || {}).delegateType && e.stopPropagation();
          else if (s = r.call(arguments), K.set(this, t, s), i = n(this, t), this[t](), s !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
        } else s.length && (K.set(this, t, {
          value: k.event.trigger(k.extend(s[0], k.Event.prototype), s.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    })) : void 0 === K.get(e, t) && k.event.add(e, t, we)
  }
  k.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o, s, a, u, l, c, f, h, d, p, g, v = K.get(e);
      if (Y(e))
        for (n.handler && (n = (o = n).handler, r = o.selector), r && k.find.matchesSelector(ie, r), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = Object.create(null)), (s = v.handle) || (s = v.handle = function(t) {
            return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
          }), l = (t = (t || "").match(P) || [""]).length; l--;) d = g = (a = ke.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
          type: d,
          origType: g,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && k.expr.match.needsContext.test(r),
          namespace: p.join(".")
        }, o), (h = u[d]) || ((h = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), k.event.global[d] = !0)
    },
    remove: function(e, t, n, i, r) {
      var o, s, a, u, l, c, f, h, d, p, g, v = K.hasData(e) && K.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(P) || [""]).length; l--;)
          if (d = g = (a = ke.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
            for (f = k.event.special[d] || {}, h = u[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
            s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
          } else
            for (d in u) k.event.remove(e, d + t[l], n, i, !0);
        k.isEmptyObject(u) && K.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t, n, i, r, o, s, a = new Array(arguments.length),
        u = k.event.fix(e),
        l = (K.get(this, "events") || Object.create(null))[u.type] || [],
        c = k.event.special[u.type] || {};
      for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        for (s = k.event.handlers.call(this, u, l), t = 0;
          (r = s[t++]) && !u.isPropagationStopped();)
          for (u.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (i = ((k.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (u.result = i) && (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function(e, t) {
      var n, i, r, o, s, a = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? k(r, this).index(l) > -1 : k.find(r, this, null, [l]).length), s[r] && o.push(i);
            o.length && a.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && a.push({
        elem: l,
        handlers: t.slice(u)
      }), a
    },
    addProp: function(e, t) {
      Object.defineProperty(k.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t) ? function() {
          if (this.originalEvent) return t(this.originalEvent)
        } : function() {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function(e) {
      return e[k.expando] ? e : new k.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function(e) {
          var t = this || e;
          return de.test(t.type) && t.click && T(t, "input") && Ce(t, "click", we), !1
        },
        trigger: function(e) {
          var t = this || e;
          return de.test(t.type) && t.click && T(t, "input") && Ce(t, "click"), !0
        },
        _default: function(e) {
          var t = e.target;
          return de.test(t.type) && t.click && T(t, "input") && K.get(t, "click") || T(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, k.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, k.Event = function(e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, (function(e, t) {
    k.event.special[e] = {
      setup: function() {
        return Ce(this, e, xe), !1
      },
      trigger: function() {
        return Ce(this, e), !0
      },
      _default: function() {
        return !0
      },
      delegateType: t
    }
  })), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, (function(e, t) {
    k.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = this,
          r = e.relatedTarget,
          o = e.handleObj;
        return r && (r === i || k.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  })), k.fn.extend({
    on: function(e, t, n, i) {
      return Ae(this, e, t, n, i)
    },
    one: function(e, t, n, i) {
      return Ae(this, e, t, n, i, 1)
    },
    off: function(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, k(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() {
        k.event.remove(this, e, n, t)
      }))
    }
  });
  var Te = /<script|<style|<link/i,
    Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
  }

  function Oe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Fe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function je(e, t) {
    var n, i, r, o, s, a;
    if (1 === t.nodeType) {
      if (K.hasData(e) && (a = K.get(e).events))
        for (r in K.remove(t, "handle events"), a)
          for (n = 0, i = a[r].length; n < i; n++) k.event.add(t, r, a[r][n]);
      Q.hasData(e) && (o = Q.access(e), s = k.extend({}, o), Q.set(t, s))
    }
  }

  function Ne(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function Pe(e, t, n, i) {
    t = o(t);
    var r, s, a, u, l, c, f = 0,
      h = e.length,
      g = h - 1,
      v = t[0],
      m = p(v);
    if (m || h > 1 && "string" == typeof v && !d.checkClone && Se.test(v)) return e.each((function(r) {
      var o = e.eq(r);
      m && (t[0] = v.call(this, r, o.html())), Pe(o, t, n, i)
    }));
    if (h && (s = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
      for (u = (a = k.map(me(r, "script"), Oe)).length; f < h; f++) l = r, f !== g && (l = k.clone(l, !0, !0), u && k.merge(a, me(l, "script"))), n.call(e[f], l, f);
      if (u)
        for (c = a[a.length - 1].ownerDocument, k.map(a, Fe), f = 0; f < u; f++) l = a[f], ge.test(l.type || "") && !K.access(l, "globalEval") && k.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && !l.noModule && k._evalUrl(l.src, {
          nonce: l.nonce || l.getAttribute("nonce")
        }, c) : y(l.textContent.replace(De, ""), l, c))
    }
    return e
  }

  function Be(e, t, n) {
    for (var i, r = t ? k.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || k.cleanData(me(i)), i.parentNode && (n && re(i) && ye(me(i, "script")), i.parentNode.removeChild(i));
    return e
  }
  k.extend({
    htmlPrefilter: function(e) {
      return e
    },
    clone: function(e, t, n) {
      var i, r, o, s, a = e.cloneNode(!0),
        u = re(e);
      if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
        for (s = me(a), i = 0, r = (o = me(e)).length; i < r; i++) Ne(o[i], s[i]);
      if (t)
        if (n)
          for (o = o || me(e), s = s || me(a), i = 0, r = o.length; i < r; i++) je(o[i], s[i]);
        else je(e, a);
      return (s = me(a, "script")).length > 0 && ye(s, !u && me(e, "script")), a
    },
    cleanData: function(e) {
      for (var t, n, i, r = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if (t = n[K.expando]) {
            if (t.events)
              for (i in t.events) r[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
            n[K.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    }
  }), k.fn.extend({
    detach: function(e) {
      return Be(this, e, !0)
    },
    remove: function(e) {
      return Be(this, e)
    },
    text: function(e) {
      return V(this, (function(e) {
        return void 0 === e ? k.text(this) : this.empty().each((function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        }))
      }), null, e, arguments.length)
    },
    append: function() {
      return Pe(this, arguments, (function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
      }))
    },
    prepend: function() {
      return Pe(this, arguments, (function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild)
        }
      }))
    },
    before: function() {
      return Pe(this, arguments, (function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      }))
    },
    after: function() {
      return Pe(this, arguments, (function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      }))
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(me(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map((function() {
        return k.clone(this, e, t)
      }))
    },
    html: function(e) {
      return V(this, (function(e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Te.test(e) && !ve[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(me(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }), null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return Pe(this, arguments, (function(t) {
        var n = this.parentNode;
        k.inArray(this, e) < 0 && (k.cleanData(me(this)), n && n.replaceChild(t, this))
      }), e)
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, (function(e, t) {
    k.fn[e] = function(e) {
      for (var n, i = [], r = k(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), k(r[a])[t](n), s.apply(i, n.get());
      return this.pushStack(i)
    }
  }));
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    },
    Re = function(e, t, n) {
      var i, r, o = {};
      for (r in t) o[r] = e.style[r], e.style[r] = t[r];
      for (r in i = n.call(e), t) e.style[r] = o[r];
      return i
    },
    He = new RegExp(ne.join("|"), "i");

  function qe(e, t, n) {
    var i, r, o, s, a = e.style;
    return (n = n || Ie(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = k.style(e, t)), !d.pixelBoxStyles() && Me.test(s) && He.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function Ve(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function() {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ie.removeChild(l), c = null
      }
    }

    function n(e) {
      return Math.round(parseFloat(e))
    }
    var i, r, o, s, a, u, l = v.createElement("div"),
      c = v.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(d, {
      boxSizingReliable: function() {
        return t(), r
      },
      pixelBoxStyles: function() {
        return t(), s
      },
      pixelPosition: function() {
        return t(), i
      },
      reliableMarginLeft: function() {
        return t(), u
      },
      scrollboxSize: function() {
        return t(), o
      },
      reliableTrDimensions: function() {
        var t, n, i, r;
        return null == a && (t = v.createElement("table"), n = v.createElement("tr"), i = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), a
      }
    }))
  }();
  var We = ["Webkit", "Moz", "ms"],
    ze = v.createElement("div").style,
    Ue = {};

  function $e(e) {
    var t = k.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
        if ((e = We[n] + t) in ze) return e
    }(e) || e)
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ke = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Qe = {
      letterSpacing: "0",
      fontWeight: "400"
    };

  function Ge(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Ze(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      u = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2) "margin" === n && (u += k.css(e, n + ne[s], !0, r)), i ? ("content" === n && (u -= k.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (u -= k.css(e, "border" + ne[s] + "Width", !0, r))) : (u += k.css(e, "padding" + ne[s], !0, r), "padding" !== n ? u += k.css(e, "border" + ne[s] + "Width", !0, r) : a += k.css(e, "border" + ne[s] + "Width", !0, r));
    return !i && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0), u
  }

  function Je(e, t, n) {
    var i = Ie(e),
      r = (!d.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, i),
      o = r,
      s = qe(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(s)) {
      if (!n) return s;
      s = "auto"
    }
    return (!d.boxSizingReliable() && r || !d.reliableTrDimensions() && T(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === k.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Ze(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
  }

  function et(e, t, n, i, r) {
    return new et.prototype.init(e, t, n, i, r)
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = qe(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, s, a = $(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = $e(a)), s = k.cssHooks[t] || k.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
        "string" === (o = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r), o = "number"), null != n && n == n && ("number" !== o || u || (n += r && r[3] || (k.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function(e, t, n, i) {
      var r, o, s, a = $(t);
      return Xe.test(t) || (t = $e(a)), (s = k.cssHooks[t] || k.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = qe(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
    }
  }), k.each(["height", "width"], (function(e, t) {
    k.cssHooks[t] = {
      get: function(e, n, i) {
        if (n) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, i) : Re(e, Ke, (function() {
          return Je(e, t, i)
        }))
      },
      set: function(e, n, i) {
        var r, o = Ie(e),
          s = !d.scrollboxSize() && "absolute" === o.position,
          a = (s || i) && "border-box" === k.css(e, "boxSizing", !1, o),
          u = i ? Ze(e, t, i, a, o) : 0;
        return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), u && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = k.css(e, t)), Ge(0, n, u)
      }
    }
  })), k.cssHooks.marginLeft = Ve(d.reliableMarginLeft, (function(e, t) {
    if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
      marginLeft: 0
    }, (function() {
      return e.getBoundingClientRect().left
    }))) + "px"
  })), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, (function(e, t) {
    k.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
        return r
      }
    }, "margin" !== e && (k.cssHooks[e + t].set = Ge)
  })), k.fn.extend({
    css: function(e, t) {
      return V(this, (function(e, t, n) {
        var i, r, o = {},
          s = 0;
        if (Array.isArray(t)) {
          for (i = Ie(e), r = t.length; s < r; s++) o[t[s]] = k.css(e, t[s], !1, i);
          return o
        }
        return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
      }), e, t, arguments.length > 1)
    }
  }), k.Tween = et, et.prototype = {
    constructor: et,
    init: function(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (k.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
    }
  }, et.prototype.init.prototype = et.prototype, et.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, k.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, k.fx = et.prototype.init, k.fx.step = {};
  var tt, nt, it = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;

  function ot() {
    nt && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, k.fx.interval), k.fx.tick())
  }

  function st() {
    return e.setTimeout((function() {
      tt = void 0
    })), tt = Date.now()
  }

  function at(e, t) {
    var n, i = 0,
      r = {
        height: e
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function ut(e, t, n) {
    for (var i, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
      if (i = r[o].call(n, t, e)) return i
  }

  function lt(e, t, n) {
    var i, r, o = 0,
      s = lt.prefilters.length,
      a = k.Deferred().always((function() {
        delete u.elem
      })),
      u = function() {
        if (r) return !1;
        for (var t = tt || st(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(i);
        return a.notifyWith(e, [l, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: k.extend({}, t),
        opts: k.extend(!0, {
          specialEasing: {},
          easing: k.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = k.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(i), i
        },
        stop: function(t) {
          var n = 0,
            i = t ? l.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) l.tweens[n].run(1);
          return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (! function(e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (r = t[i = $(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = k.cssHooks[i]) && "expand" in s)
            for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
          else t[i] = r
      }(c, l.opts.specialEasing); o < s; o++)
      if (i = lt.prefilters[o].call(l, e, c, l.opts)) return p(i.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
    return k.map(c, ut, l), p(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  k.Animation = k.extend(lt, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, te.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        p(e) ? (t = e, e = ["*"]) : e = e.match(P);
        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
      },
      prefilters: [function(e, t, n) {
        var i, r, o, s, a, u, l, c, f = "width" in t || "height" in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && se(e),
          v = K.get(e, "fxshow");
        for (i in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
          }), s.unqueued++, h.always((function() {
            h.always((function() {
              s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
            }))
          }))), t)
          if (r = t[i], it.test(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
              if ("show" !== r || !v || void 0 === v[i]) continue;
              g = !0
            }
            d[i] = v && v[i] || k.style(e, i)
          } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = v && v.display) && (l = K.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = k.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (h.done((function() {
              p.display = l
            })), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function() {
              p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", {
            display: l
          }), o && (v.hidden = !g), g && ce([e], !0), h.done((function() {
            for (i in g || ce([e]), K.remove(e, "fxshow"), d) k.style(e, i, d[i])
          }))), u = ut(g ? v[i] : 0, i, h), i in v || (v[i] = u.start, g && (u.end = u.start, u.start = 0))
      }],
      prefilter: function(e, t) {
        t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
      }
    }), k.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? k.extend({}, e) : {
        complete: n || !n && t || p(e) && e,
        duration: e,
        easing: n && t || t && !p(t) && t
      };
      return k.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in k.fx.speeds ? i.duration = k.fx.speeds[i.duration] : i.duration = k.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        p(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue)
      }, i
    }, k.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(se).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function(e, t, n, i) {
        var r = k.isEmptyObject(e),
          o = k.speed(t, n, i),
          s = function() {
            var t = lt(this, k.extend({}, e), o);
            (r || K.get(this, "finish")) && t.stop(!0)
          };
        return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
          var t = !0,
            r = null != e && e + "queueHooks",
            o = k.timers,
            s = K.get(this);
          if (r) s[r] && s[r].stop && i(s[r]);
          else
            for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
          for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
          !t && n || k.dequeue(this, e)
        }))
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each((function() {
          var t, n = K.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = k.timers,
            s = i ? i.length : 0;
          for (n.finish = !0, k.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        }))
      }
    }), k.each(["toggle", "show", "hide"], (function(e, t) {
      var n = k.fn[t];
      k.fn[t] = function(e, i, r) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, r)
      }
    })), k.each({
      slideDown: at("show"),
      slideUp: at("hide"),
      slideToggle: at("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, (function(e, t) {
      k.fn[e] = function(e, n, i) {
        return this.animate(t, e, n, i)
      }
    })), k.timers = [], k.fx.tick = function() {
      var e, t = 0,
        n = k.timers;
      for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), tt = void 0
    }, k.fx.timer = function(e) {
      k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
      nt || (nt = !0, ot())
    }, k.fx.stop = function() {
      nt = null
    }, k.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, k.fn.delay = function(t, n) {
      return t = k.fx && k.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
        var r = e.setTimeout(n, t);
        i.stop = function() {
          e.clearTimeout(r)
        }
      }))
    },
    function() {
      var e = v.createElement("input"),
        t = v.createElement("select").appendChild(v.createElement("option"));
      e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = t.selected, (e = v.createElement("input")).value = "t", e.type = "radio", d.radioValue = "t" === e.value
    }();
  var ct, ft = k.expr.attrHandle;
  k.fn.extend({
    attr: function(e, t) {
      return V(this, k.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each((function() {
        k.removeAttr(this, e)
      }))
    }
  }), k.extend({
    attr: function(e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (r = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = k.find.attr(e, t)) ? void 0 : i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!d.radioValue && "radio" === t && T(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, i = 0,
        r = t && t.match(P);
      if (r && 1 === e.nodeType)
        for (; n = r[i++];) e.removeAttribute(n)
    }
  }), ct = {
    set: function(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), (function(e, t) {
    var n = ft[t] || k.find.attr;
    ft[t] = function(e, t, i) {
      var r, o, s = t.toLowerCase();
      return i || (o = ft[s], ft[s] = r, r = null != n(e, t, i) ? s : null, ft[s] = o), r
    }
  }));
  var ht = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;

  function pt(e) {
    return (e.match(P) || []).join(" ")
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
  }
  k.fn.extend({
    prop: function(e, t) {
      return V(this, k.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each((function() {
        delete this[k.propFix[e] || e]
      }))
    }
  }), k.extend({
    prop: function(e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, r = k.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), d.optSelected || (k.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
    k.propFix[this.toLowerCase()] = this
  })), k.fn.extend({
    addClass: function(e) {
      var t, n, i, r, o, s, a, u = 0;
      if (p(e)) return this.each((function(t) {
        k(this).addClass(e.call(this, t, gt(this)))
      }));
      if ((t = vt(e)).length)
        for (; n = this[u++];)
          if (r = gt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
            for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            r !== (a = pt(i)) && n.setAttribute("class", a)
          } return this
    },
    removeClass: function(e) {
      var t, n, i, r, o, s, a, u = 0;
      if (p(e)) return this.each((function(t) {
        k(this).removeClass(e.call(this, t, gt(this)))
      }));
      if (!arguments.length) return this.attr("class", "");
      if ((t = vt(e)).length)
        for (; n = this[u++];)
          if (r = gt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
            for (s = 0; o = t[s++];)
              for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
            r !== (a = pt(i)) && n.setAttribute("class", a)
          } return this
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        i = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each((function(n) {
        k(this).toggleClass(e.call(this, n, gt(this), t), t)
      })) : this.each((function() {
        var t, r, o, s;
        if (i)
          for (r = 0, o = k(this), s = vt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        else void 0 !== e && "boolean" !== n || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
      }))
    },
    hasClass: function(e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)
        if (1 === n.nodeType && (" " + pt(gt(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var mt = /\r/g;
  k.fn.extend({
    val: function(e) {
      var t, n, i, r = this[0];
      return arguments.length ? (i = p(e), this.each((function(n) {
        var r;
        1 === this.nodeType && (null == (r = i ? e.call(this, n, k(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = k.map(r, (function(e) {
          return null == e ? "" : e + ""
        }))), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
      }))) : r ? (t = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(mt, "") : null == n ? "" : n : void 0
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : pt(k.text(e))
        }
      },
      select: {
        get: function(e) {
          var t, n, i, r = e.options,
            o = e.selectedIndex,
            s = "select-one" === e.type,
            a = s ? null : [],
            u = s ? o + 1 : r.length;
          for (i = o < 0 ? u : s ? o : 0; i < u; i++)
            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), s) return t;
              a.push(t)
            } return a
        },
        set: function(e, t) {
          for (var n, i, r = e.options, o = k.makeArray(t), s = r.length; s--;)((i = r[s]).selected = k.inArray(k.valHooks.option.get(i), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), k.each(["radio", "checkbox"], (function() {
    k.valHooks[this] = {
      set: function(e, t) {
        if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
      }
    }, d.checkOn || (k.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  })), d.focusin = "onfocusin" in e;
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function(e) {
      e.stopPropagation()
    };
  k.extend(k.event, {
    trigger: function(t, n, i, r) {
      var o, s, a, u, l, f, h, d, m = [i || v],
        y = c.call(t, "type") ? t.type : t,
        b = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = d = a = i = i || v, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + k.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), l = y.indexOf(":") < 0 && "on" + y, (t = t[k.expando] ? t : new k.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : k.makeArray(n, [t]), h = k.event.special[y] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, n))) {
        if (!r && !h.noBubble && !g(i)) {
          for (u = h.delegateType || y, yt.test(u + y) || (s = s.parentNode); s; s = s.parentNode) m.push(s), a = s;
          a === (i.ownerDocument || v) && m.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0;
          (s = m[o++]) && !t.isPropagationStopped();) d = s, t.type = o > 1 ? u : h.bindType || y, (f = (K.get(s, "events") || Object.create(null))[t.type] && K.get(s, "handle")) && f.apply(s, n), (f = l && s[l]) && f.apply && Y(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
        return t.type = y, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(m.pop(), n) || !Y(i) || l && p(i[y]) && !g(i) && ((a = i[l]) && (i[l] = null), k.event.triggered = y, t.isPropagationStopped() && d.addEventListener(y, bt), i[y](), t.isPropagationStopped() && d.removeEventListener(y, bt), k.event.triggered = void 0, a && (i[l] = a)), t.result
      }
    },
    simulate: function(e, t, n) {
      var i = k.extend(new k.Event, n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(i, null, t)
    }
  }), k.fn.extend({
    trigger: function(e, t) {
      return this.each((function() {
        k.event.trigger(e, t, this)
      }))
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0)
    }
  }), d.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, (function(e, t) {
    var n = function(e) {
      k.event.simulate(t, e.target, k.event.fix(e))
    };
    k.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this.document || this,
          r = K.access(i, t);
        r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this.document || this,
          r = K.access(i, t) - 1;
        r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
      }
    }
  }));
  var _t = e.location,
    kt = {
      guid: Date.now()
    },
    wt = /\?/;
  k.parseXML = function(t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {}
    return i = n && n.getElementsByTagName("parsererror")[0], n && !i || k.error("Invalid XML: " + (i ? k.map(i.childNodes, (function(e) {
      return e.textContent
    })).join("\n") : t)), n
  };
  var Et = /\[\]$/,
    xt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Ct = /^(?:input|select|textarea|keygen)/i;

  function Tt(e, t, n, i) {
    var r;
    if (Array.isArray(t)) k.each(t, (function(t, r) {
      n || Et.test(e) ? i(e, r) : Tt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
    }));
    else if (n || "object" !== b(t)) i(e, t);
    else
      for (r in t) Tt(e + "[" + r + "]", t[r], n, i)
  }
  k.param = function(e, t) {
    var n, i = [],
      r = function(e, t) {
        var n = p(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, (function() {
      r(this.name, this.value)
    }));
    else
      for (n in e) Tt(n, e[n], t, r);
    return i.join("&")
  }, k.fn.extend({
    serialize: function() {
      return k.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map((function() {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this
      })).filter((function() {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && Ct.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
      })).map((function(e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, (function(e) {
          return {
            name: t.name,
            value: e.replace(xt, "\r\n")
          }
        })) : {
          name: t.name,
          value: n.replace(xt, "\r\n")
        }
      })).get()
    }
  });
  var St = /%20/g,
    Dt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    jt = /^\/\//,
    Nt = {},
    Pt = {},
    Bt = "*/".concat("*"),
    Mt = v.createElement("a");

  function It(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0,
        o = t.toLowerCase().match(P) || [];
      if (p(n))
        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function Rt(e, t, n, i) {
    var r = {},
      o = e === Pt;

    function s(a) {
      var u;
      return r[a] = !0, k.each(e[a] || [], (function(e, a) {
        var l = a(t, n, i);
        return "string" != typeof l || o || r[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
      })), u
    }
    return s(t.dataTypes[0]) || !r["*"] && s("*")
  }

  function Ht(e, t) {
    var n, i, r = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && k.extend(!0, e, i), e
  }
  Mt.href = _t.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: _t.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Bt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? Ht(Ht(e, k.ajaxSettings), t) : Ht(k.ajaxSettings, e)
    },
    ajaxPrefilter: It(Nt),
    ajaxTransport: It(Pt),
    ajax: function(t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var i, r, o, s, a, u, l, c, f, h, d = k.ajaxSetup({}, n),
        p = d.context || d,
        g = d.context && (p.nodeType || p.jquery) ? k(p) : k.event,
        m = k.Deferred(),
        y = k.Callbacks("once memory"),
        b = d.statusCode || {},
        _ = {},
        w = {},
        E = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (l) {
              if (!s)
                for (s = {}; t = Ot.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
              t = s[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          },
          getAllResponseHeaders: function() {
            return l ? o : null
          },
          setRequestHeader: function(e, t) {
            return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
          },
          overrideMimeType: function(e) {
            return null == l && (d.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (l) x.always(e[x.status]);
              else
                for (t in e) b[t] = [b[t], e[t]];
            return this
          },
          abort: function(e) {
            var t = e || E;
            return i && i.abort(t), A(0, t), this
          }
        };
      if (m.promise(x), d.url = ((t || d.url || _t.href) + "").replace(jt, _t.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""], null == d.crossDomain) {
        u = v.createElement("a");
        try {
          u.href = d.url, u.href = u.href, d.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host
        } catch (e) {
          d.crossDomain = !0
        }
      }
      if (d.data && d.processData && "string" != typeof d.data && (d.data = k.param(d.data, d.traditional)), Rt(Nt, d, n, x), l) return x;
      for (f in (c = k.event && d.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ft.test(d.type), r = d.url.replace(Dt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(St, "+")) : (h = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (wt.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(Lt, "$1"), h = (wt.test(r) ? "&" : "?") + "_=" + kt.guid++ + h), d.url = r + h), d.ifModified && (k.lastModified[r] && x.setRequestHeader("If-Modified-Since", k.lastModified[r]), k.etag[r] && x.setRequestHeader("If-None-Match", k.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(f, d.headers[f]);
      if (d.beforeSend && (!1 === d.beforeSend.call(p, x, d) || l)) return x.abort();
      if (E = "abort", y.add(d.complete), x.done(d.success), x.fail(d.error), i = Rt(Pt, d, n, x)) {
        if (x.readyState = 1, c && g.trigger("ajaxSend", [x, d]), l) return x;
        d.async && d.timeout > 0 && (a = e.setTimeout((function() {
          x.abort("timeout")
        }), d.timeout));
        try {
          l = !1, i.send(_, A)
        } catch (e) {
          if (l) throw e;
          A(-1, e)
        }
      } else A(-1, "No Transport");

      function A(t, n, s, u) {
        var f, h, v, _, w, E = n;
        l || (l = !0, a && e.clearTimeout(a), i = void 0, o = u || "", x.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, s && (_ = function(e, t, n) {
          for (var i, r, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (r in a)
              if (a[r] && a[r].test(i)) {
                u.unshift(r);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (r in n) {
              if (!u[0] || e.converters[r + " " + u[0]]) {
                o = r;
                break
              }
              s || (s = r)
            }
            o = o || s
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(d, x, s)), !f && k.inArray("script", d.dataTypes) > -1 && k.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), _ = function(e, t, n, i) {
          var r, o, s, a, u, l = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
          for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o]))
              for (r in l)
                if ((a = r.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                  !0 === s ? s = l[r] : !0 !== l[r] && (o = a[0], c.unshift(a[1]));
                  break
                } if (!0 !== s)
              if (s && e.throws) t = s(t);
              else try {
                t = s(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + u + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(d, _, x, f), f ? (d.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (k.lastModified[r] = w), (w = x.getResponseHeader("etag")) && (k.etag[r] = w)), 204 === t || "HEAD" === d.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = _.state, h = _.data, f = !(v = _.error))) : (v = E, !t && E || (E = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || E) + "", f ? m.resolveWith(p, [h, E, x]) : m.rejectWith(p, [x, E, v]), x.statusCode(b), b = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [x, d, f ? h : v]), y.fireWith(p, [x, E]), c && (g.trigger("ajaxComplete", [x, d]), --k.active || k.event.trigger("ajaxStop")))
      }
      return x
    },
    getJSON: function(e, t, n) {
      return k.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return k.get(e, void 0, t, "script")
    }
  }), k.each(["get", "post"], (function(e, t) {
    k[t] = function(e, n, i, r) {
      return p(n) && (r = r || i, i = n, n = void 0), k.ajax(k.extend({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      }, k.isPlainObject(e) && e))
    }
  })), k.ajaxPrefilter((function(e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  })), k._evalUrl = function(e, t, n) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function() {}
      },
      dataFilter: function(e) {
        k.globalEval(e, t, n)
      }
    })
  }, k.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] && (p(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      })).append(this)), this
    },
    wrapInner: function(e) {
      return p(e) ? this.each((function(t) {
        k(this).wrapInner(e.call(this, t))
      })) : this.each((function() {
        var t = k(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      }))
    },
    wrap: function(e) {
      var t = p(e);
      return this.each((function(n) {
        k(this).wrapAll(t ? e.call(this, n) : e)
      }))
    },
    unwrap: function(e) {
      return this.parent(e).not("body").each((function() {
        k(this).replaceWith(this.childNodes)
      })), this
    }
  }), k.expr.pseudos.hidden = function(e) {
    return !k.expr.pseudos.visible(e)
  }, k.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, k.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var qt = {
      0: 200,
      1223: 204
    },
    Vt = k.ajaxSettings.xhr();
  d.cors = !!Vt && "withCredentials" in Vt, d.ajax = Vt = !!Vt, k.ajaxTransport((function(t) {
    var n, i;
    if (d.cors || Vt && !t.crossDomain) return {
      send: function(r, o) {
        var s, a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (s in t.xhrFields) a[s] = t.xhrFields[s];
        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
        n = function(e) {
          return function() {
            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()))
          }
        }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
          4 === a.readyState && e.setTimeout((function() {
            n && i()
          }))
        }, n = n("abort");
        try {
          a.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function() {
        n && n()
      }
    }
  })), k.ajaxPrefilter((function(e) {
    e.crossDomain && (e.contents.script = !1)
  })), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return k.globalEval(e), e
      }
    }
  }), k.ajaxPrefilter("script", (function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  })), k.ajaxTransport("script", (function(e) {
    var t, n;
    if (e.crossDomain || e.scriptAttrs) return {
      send: function(i, r) {
        t = k("<script>").attr(e.scriptAttrs || {}).prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function(e) {
          t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
        }), v.head.appendChild(t[0])
      },
      abort: function() {
        n && n()
      }
    }
  }));
  var Wt, zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = zt.pop() || k.expando + "_" + kt.guid++;
      return this[e] = !0, e
    }
  }), k.ajaxPrefilter("json jsonp", (function(t, n, i) {
    var r, o, s, a = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
    if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
      return s || k.error(r + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
      s = arguments
    }, i.always((function() {
      void 0 === o ? k(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), s && p(o) && o(s[0]), s = o = void 0
    })), "script"
  })), d.createHTMLDocument = ((Wt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), k.parseHTML = function(e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (d.createHTMLDocument ? ((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(i)) : t = v), o = !n && [], (r = S.exec(e)) ? [t.createElement(r[1])] : (r = _e([e], t, o), o && o.length && k(o).remove(), k.merge([], r.childNodes)));
    var i, r, o
  }, k.fn.load = function(e, t, n) {
    var i, r, o, s = this,
      a = e.indexOf(" ");
    return a > -1 && (i = pt(e.slice(a)), e = e.slice(0, a)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && k.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done((function(e) {
      o = arguments, s.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e)
    })).always(n && function(e, t) {
      s.each((function() {
        n.apply(this, o || [e.responseText, t, e])
      }))
    }), this
  }, k.expr.pseudos.animated = function(e) {
    return k.grep(k.timers, (function(t) {
      return e === t.elem
    })).length
  }, k.offset = {
    setOffset: function(e, t, n) {
      var i, r, o, s, a, u, l = k.css(e, "position"),
        c = k(e),
        f = {};
      "static" === l && (e.style.position = "relative"), a = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), p(t) && (t = t.call(e, n, k.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, k.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each((function(t) {
        k.offset.setOffset(this, e, t)
      }));
      var t, n, i = this[0];
      return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n, i = this[0],
          r = {
            top: 0,
            left: 0
          };
        if ("fixed" === k.css(i, "position")) t = i.getBoundingClientRect();
        else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((r = k(e).offset()).top += k.css(e, "borderTopWidth", !0), r.left += k.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - r.top - k.css(i, "marginTop", !0),
          left: t.left - r.left - k.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map((function() {
        for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
        return e || ie
      }))
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, (function(e, t) {
    var n = "pageYOffset" === t;
    k.fn[e] = function(i) {
      return V(this, (function(e, i, r) {
        var o;
        if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
      }), e, i, arguments.length)
    }
  })), k.each(["top", "left"], (function(e, t) {
    k.cssHooks[t] = Ve(d.pixelPosition, (function(e, n) {
      if (n) return n = qe(e, t), Me.test(n) ? k(e).position()[t] + "px" : n
    }))
  })), k.each({
    Height: "height",
    Width: "width"
  }, (function(e, t) {
    k.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, (function(n, i) {
      k.fn[i] = function(r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
          a = n || (!0 === r || !0 === o ? "margin" : "border");
        return V(this, (function(t, n, r) {
          var o;
          return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? k.css(t, n, a) : k.style(t, n, r, a)
        }), t, s ? r : void 0, s)
      }
    }))
  })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
    k.fn[t] = function(e) {
      return this.on(t, e)
    }
  })), k.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
    k.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }));
  var $t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  k.proxy = function(e, t) {
    var n, i, o;
    if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = r.call(arguments, 2), (o = function() {
      return e.apply(t || this, i.concat(r.call(arguments)))
    }).guid = e.guid = e.guid || k.guid++, o
  }, k.holdReady = function(e) {
    e ? k.readyWait++ : k.ready(!0)
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = T, k.isFunction = p, k.isWindow = g, k.camelCase = $, k.type = b, k.now = Date.now, k.isNumeric = function(e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, k.trim = function(e) {
    return null == e ? "" : (e + "").replace($t, "")
  }, "function" == typeof define && define.amd && define("jquery", [], (function() {
    return k
  }));
  var Yt = e.jQuery,
    Xt = e.$;
  return k.noConflict = function(t) {
    return e.$ === k && (e.$ = Xt), t && e.jQuery === k && (e.jQuery = Yt), k
  }, void 0 === t && (e.jQuery = e.$ = k), k
})),
function(e) {
  "function" == typeof define && define.amd ? define(e) : e()
}((function() {
  "use strict";
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var e = function(e) {
      var t = {
        exports: {}
      };
      return e(t, t.exports), t.exports
    }((function(e, t) {
      ! function(e, t) {
        var n, i, r = "function" == typeof Map ? new Map : (n = [], i = [], {
            has: function(e) {
              return n.indexOf(e) > -1
            },
            get: function(e) {
              return i[n.indexOf(e)]
            },
            set: function(e, t) {
              -1 === n.indexOf(e) && (n.push(e), i.push(t))
            },
            delete: function(e) {
              var t = n.indexOf(e);
              t > -1 && (n.splice(t, 1), i.splice(t, 1))
            }
          }),
          o = function(e) {
            return new Event(e, {
              bubbles: !0
            })
          };
        try {
          new Event("test")
        } catch (e) {
          o = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t
          }
        }

        function s(e) {
          if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
            var t = null,
              n = null,
              i = null,
              s = function() {
                e.clientWidth !== n && h()
              },
              a = function(t) {
                window.removeEventListener("resize", s, !1), e.removeEventListener("input", h, !1), e.removeEventListener("keyup", h, !1), e.removeEventListener("autosize:destroy", a, !1), e.removeEventListener("autosize:update", h, !1), Object.keys(t).forEach((function(n) {
                  e.style[n] = t[n]
                })), r.delete(e)
              }.bind(e, {
                height: e.style.height,
                resize: e.style.resize,
                overflowY: e.style.overflowY,
                overflowX: e.style.overflowX,
                wordWrap: e.style.wordWrap
              });
            e.addEventListener("autosize:destroy", a, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", h, !1), window.addEventListener("resize", s, !1), e.addEventListener("input", h, !1), e.addEventListener("autosize:update", h, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
              destroy: a,
              update: h
            }), u()
          }

          function u() {
            var n = window.getComputedStyle(e, null);
            "vertical" === n.resize ? e.style.resize = "none" : "both" === n.resize && (e.style.resize = "horizontal"), t = "content-box" === n.boxSizing ? -(parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), isNaN(t) && (t = 0), h()
          }

          function l(t) {
            var n = e.style.width;
            e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
          }

          function c(e) {
            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
              node: e.parentNode,
              scrollTop: e.parentNode.scrollTop
            }), e = e.parentNode;
            return t
          }

          function f() {
            if (0 !== e.scrollHeight) {
              var i = c(e),
                r = document.documentElement && document.documentElement.scrollTop;
              e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, i.forEach((function(e) {
                e.node.scrollTop = e.scrollTop
              })), r && (document.documentElement.scrollTop = r)
            }
          }

          function h() {
            f();
            var t = Math.round(parseFloat(e.style.height)),
              n = window.getComputedStyle(e, null),
              r = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
            if (r < t ? "hidden" === n.overflowY && (l("scroll"), f(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), f(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== r) {
              i = r;
              var s = o("autosize:resized");
              try {
                e.dispatchEvent(s)
              } catch (e) {}
            }
          }
        }

        function a(e) {
          var t = r.get(e);
          t && t.destroy()
        }

        function u(e) {
          var t = r.get(e);
          t && t.update()
        }
        var l = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e) {
          return e
        }).destroy = function(e) {
          return e
        }, l.update = function(e) {
          return e
        }) : ((l = function(e, t) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
            return s(e)
          })), e
        }).destroy = function(e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
        }, l.update = function(e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], u), e
        }), t.default = l, e.exports = t.default
      }(e, t)
    })),
    t = document.querySelectorAll('[data-bs-toggle="autosize"]');

  function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  function o(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e
  }

  function s(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && u(e, t)
  }

  function a(e) {
    return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function u(e, t) {
    return (u = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function l(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        o = Object.keys(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }

  function c(e, t) {
    return !t || "object" != typeof t && "function" != typeof t ? function(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }(e) : t
  }

  function f(e) {
    var t = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (e) {
        return !1
      }
    }();
    return function() {
      var n, i = a(e);
      if (t) {
        var r = a(this).constructor;
        n = Reflect.construct(i, arguments, r)
      } else n = i.apply(this, arguments);
      return c(this, n)
    }
  }

  function h(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = a(e)););
    return e
  }

  function d(e, t, n) {
    return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
      var i = h(e, t);
      if (i) {
        var r = Object.getOwnPropertyDescriptor(i, t);
        return r.get ? r.get.call(n) : r.value
      }
    })(e, t, n || e)
  }

  function p(e, t, n, i) {
    return (p = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, t, n, i) {
      var r, o = h(e, t);
      if (o) {
        if ((r = Object.getOwnPropertyDescriptor(o, t)).set) return r.set.call(i, n), !0;
        if (!r.writable) return !1
      }
      if (r = Object.getOwnPropertyDescriptor(i, t)) {
        if (!r.writable) return !1;
        r.value = n, Object.defineProperty(i, t, r)
      } else ! function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      }(i, t, n);
      return !0
    })(e, t, n, i)
  }

  function g(e, t, n, i, r) {
    if (!p(e, t, n, i || e) && r) throw new Error("failed to set property");
    return n
  }

  function v(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
        i = !0,
        r = !1,
        o = void 0;
      try {
        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
      } catch (e) {
        r = !0, o = e
      } finally {
        try {
          i || null == a.return || a.return()
        } finally {
          if (r) throw o
        }
      }
      return n
    }(e, t) || function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return m(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i
  }

  function y(e) {
    return "string" == typeof e || e instanceof String
  }
  t.length && t.forEach((function(t) {
    e(t)
  }));
  var b = "NONE",
    _ = "LEFT",
    k = "FORCE_LEFT",
    w = "RIGHT",
    E = "FORCE_RIGHT";

  function x(e) {
    switch (e) {
      case _:
        return k;
      case w:
        return E;
      default:
        return e
    }
  }

  function A(e) {
    return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
  }

  function C(e, t) {
    if (t === e) return !0;
    var i, r = Array.isArray(t),
      o = Array.isArray(e);
    if (r && o) {
      if (t.length != e.length) return !1;
      for (i = 0; i < t.length; i++)
        if (!C(t[i], e[i])) return !1;
      return !0
    }
    if (r != o) return !1;
    if (t && e && "object" === n(t) && "object" === n(e)) {
      var s = t instanceof Date,
        a = e instanceof Date;
      if (s && a) return t.getTime() == e.getTime();
      if (s != a) return !1;
      var u = t instanceof RegExp,
        l = e instanceof RegExp;
      if (u && l) return t.toString() == e.toString();
      if (u != l) return !1;
      var c = Object.keys(t);
      for (i = 0; i < c.length; i++)
        if (!Object.prototype.hasOwnProperty.call(e, c[i])) return !1;
      for (i = 0; i < c.length; i++)
        if (!C(e[c[i]], t[c[i]])) return !1;
      return !0
    }
    return !(!t || !e || "function" != typeof t || "function" != typeof e) && t.toString() === e.toString()
  }
  var T = function() {
      function e(t, n, r, o) {
        for (i(this, e), this.value = t, this.cursorPos = n, this.oldValue = r, this.oldSelection = o; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
      }
      return o(e, [{
        key: "startChangePos",
        get: function() {
          return Math.min(this.cursorPos, this.oldSelection.start)
        }
      }, {
        key: "insertedCount",
        get: function() {
          return this.cursorPos - this.startChangePos
        }
      }, {
        key: "inserted",
        get: function() {
          return this.value.substr(this.startChangePos, this.insertedCount)
        }
      }, {
        key: "removedCount",
        get: function() {
          return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
        }
      }, {
        key: "removed",
        get: function() {
          return this.oldValue.substr(this.startChangePos, this.removedCount)
        }
      }, {
        key: "head",
        get: function() {
          return this.value.substring(0, this.startChangePos)
        }
      }, {
        key: "tail",
        get: function() {
          return this.value.substring(this.startChangePos + this.insertedCount)
        }
      }, {
        key: "removeDirection",
        get: function() {
          return !this.removedCount || this.insertedCount ? b : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? w : _
        }
      }]), e
    }(),
    S = function() {
      function e(t) {
        i(this, e), Object.assign(this, {
          inserted: "",
          rawInserted: "",
          skip: !1,
          tailShift: 0
        }, t)
      }
      return o(e, [{
        key: "aggregate",
        value: function(e) {
          return this.rawInserted += e.rawInserted, this.skip = this.skip || e.skip, this.inserted += e.inserted, this.tailShift += e.tailShift, this
        }
      }, {
        key: "offset",
        get: function() {
          return this.tailShift + this.inserted.length
        }
      }]), e
    }(),
    D = function() {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments.length > 2 ? arguments[2] : void 0;
        i(this, e), this.value = t, this.from = n, this.stop = r
      }
      return o(e, [{
        key: "toString",
        value: function() {
          return this.value
        }
      }, {
        key: "extend",
        value: function(e) {
          this.value += String(e)
        }
      }, {
        key: "appendTo",
        value: function(e) {
          return e.append(this.toString(), {
            tail: !0
          }).aggregate(e._appendPlaceholder())
        }
      }, {
        key: "state",
        get: function() {
          return {
            value: this.value,
            from: this.from,
            stop: this.stop
          }
        },
        set: function(e) {
          Object.assign(this, e)
        }
      }, {
        key: "shiftBefore",
        value: function(e) {
          if (this.from >= e || !this.value.length) return "";
          var t = this.value[0];
          return this.value = this.value.slice(1), t
        }
      }]), e
    }();

  function L(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return new L.InputMask(e, t)
  }
  var O = function() {
    function e(t) {
      i(this, e), this._value = "", this._update(Object.assign({}, e.DEFAULTS, t)), this.isInitialized = !0
    }
    return o(e, [{
      key: "updateOptions",
      value: function(e) {
        Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e))
      }
    }, {
      key: "_update",
      value: function(e) {
        Object.assign(this, e)
      }
    }, {
      key: "state",
      get: function() {
        return {
          _value: this.value
        }
      },
      set: function(e) {
        this._value = e._value
      }
    }, {
      key: "reset",
      value: function() {
        this._value = ""
      }
    }, {
      key: "value",
      get: function() {
        return this._value
      },
      set: function(e) {
        this.resolve(e)
      }
    }, {
      key: "resolve",
      value: function(e) {
        return this.reset(), this.append(e, {
          input: !0
        }, ""), this.doCommit(), this.value
      }
    }, {
      key: "unmaskedValue",
      get: function() {
        return this.value
      },
      set: function(e) {
        this.reset(), this.append(e, {}, ""), this.doCommit()
      }
    }, {
      key: "typedValue",
      get: function() {
        return this.doParse(this.value)
      },
      set: function(e) {
        this.value = this.doFormat(e)
      }
    }, {
      key: "rawInputValue",
      get: function() {
        return this.extractInput(0, this.value.length, {
          raw: !0
        })
      },
      set: function(e) {
        this.reset(), this.append(e, {
          raw: !0
        }, ""), this.doCommit()
      }
    }, {
      key: "isComplete",
      get: function() {
        return !0
      }
    }, {
      key: "nearestInputPos",
      value: function(e, t) {
        return e
      }
    }, {
      key: "extractInput",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this.value.slice(e, t)
      }
    }, {
      key: "extractTail",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return new D(this.extractInput(e, t), e)
      }
    }, {
      key: "appendTail",
      value: function(e) {
        return y(e) && (e = new D(String(e))), e.appendTo(this)
      }
    }, {
      key: "_appendCharRaw",
      value: function(e) {
        return e ? (this._value += e, new S({
          inserted: e,
          rawInserted: e
        })) : new S
      }
    }, {
      key: "_appendChar",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = this.state,
          r = this._appendCharRaw(this.doPrepare(e, t), t);
        if (r.inserted) {
          var o, s = !1 !== this.doValidate(t);
          if (s && null != n) {
            var a = this.state;
            this.overwrite && (o = n.state, n.shiftBefore(this.value.length));
            var u = this.appendTail(n);
            (s = u.rawInserted === n.toString()) && u.inserted && (this.state = a)
          }
          s || (r = new S, this.state = i, n && o && (n.state = o))
        }
        return r
      }
    }, {
      key: "_appendPlaceholder",
      value: function() {
        return new S
      }
    }, {
      key: "append",
      value: function(e, t, n) {
        if (!y(e)) throw new Error("value should be string");
        var i = new S,
          r = y(n) ? new D(String(n)) : n;
        t && t.tail && (t._beforeTailState = this.state);
        for (var o = 0; o < e.length; ++o) i.aggregate(this._appendChar(e[o], t, r));
        return null != r && (i.tailShift += this.appendTail(r).tailShift), i
      }
    }, {
      key: "remove",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this._value = this.value.slice(0, e) + this.value.slice(t), new S
      }
    }, {
      key: "withValueRefresh",
      value: function(e) {
        if (this._refreshing || !this.isInitialized) return e();
        this._refreshing = !0;
        var t = this.rawInputValue,
          n = this.value,
          i = e();
        return this.rawInputValue = t, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, i
      }
    }, {
      key: "runIsolated",
      value: function(e) {
        if (this._isolated || !this.isInitialized) return e(this);
        this._isolated = !0;
        var t = this.state,
          n = e(this);
        return this.state = t, delete this._isolated, n
      }
    }, {
      key: "doPrepare",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.prepare ? this.prepare(e, this, t) : e
      }
    }, {
      key: "doValidate",
      value: function(e) {
        return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
      }
    }, {
      key: "doCommit",
      value: function() {
        this.commit && this.commit(this.value, this)
      }
    }, {
      key: "doFormat",
      value: function(e) {
        return this.format ? this.format(e, this) : e
      }
    }, {
      key: "doParse",
      value: function(e) {
        return this.parse ? this.parse(e, this) : e
      }
    }, {
      key: "splice",
      value: function(e, t, n, i) {
        var r = e + t,
          o = this.extractTail(r),
          s = this.nearestInputPos(e, i);
        return new S({
          tailShift: s - e
        }).aggregate(this.remove(s)).aggregate(this.append(n, {
          input: !0
        }, o))
      }
    }]), e
  }();

  function F(e) {
    if (null == e) throw new Error("mask property should be defined");
    return e instanceof RegExp ? L.MaskedRegExp : y(e) ? L.MaskedPattern : e instanceof Date || e === Date ? L.MaskedDate : e instanceof Number || "number" == typeof e || e === Number ? L.MaskedNumber : Array.isArray(e) || e === Array ? L.MaskedDynamic : L.Masked && e.prototype instanceof L.Masked ? e : e instanceof Function ? L.MaskedFunction : e instanceof L.Masked ? e.constructor : (console.warn("Mask not found for mask", e), L.Masked)
  }

  function j(e) {
    if (L.Masked && e instanceof L.Masked) return e;
    var t = (e = Object.assign({}, e)).mask;
    if (L.Masked && t instanceof L.Masked) return t;
    var n = F(t);
    if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new n(e)
  }
  O.DEFAULTS = {
    format: function(e) {
      return e
    },
    parse: function(e) {
      return e
    }
  }, L.Masked = O, L.createMask = j;
  var N = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      "*": /./
    },
    P = function() {
      function e(t) {
        i(this, e);
        var n = t.mask,
          r = l(t, ["mask"]);
        this.masked = j({
          mask: n
        }), Object.assign(this, r)
      }
      return o(e, [{
        key: "reset",
        value: function() {
          this._isFilled = !1, this.masked.reset()
        }
      }, {
        key: "remove",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return 0 === e && t >= 1 ? (this._isFilled = !1, this.masked.remove(e, t)) : new S
        }
      }, {
        key: "value",
        get: function() {
          return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "")
        }
      }, {
        key: "unmaskedValue",
        get: function() {
          return this.masked.unmaskedValue
        }
      }, {
        key: "isComplete",
        get: function() {
          return Boolean(this.masked.value) || this.isOptional
        }
      }, {
        key: "_appendChar",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._isFilled) return new S;
          var n = this.masked.state,
            i = this.masked._appendChar(e, t);
          return i.inserted && !1 === this.doValidate(t) && (i.inserted = i.rawInserted = "", this.masked.state = n), i.inserted || this.isOptional || this.lazy || t.input || (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this._isFilled = Boolean(i.inserted), i
        }
      }, {
        key: "append",
        value: function() {
          var e;
          return (e = this.masked).append.apply(e, arguments)
        }
      }, {
        key: "_appendPlaceholder",
        value: function() {
          var e = new S;
          return this._isFilled || this.isOptional || (this._isFilled = !0, e.inserted = this.placeholderChar), e
        }
      }, {
        key: "extractTail",
        value: function() {
          var e;
          return (e = this.masked).extractTail.apply(e, arguments)
        }
      }, {
        key: "appendTail",
        value: function() {
          var e;
          return (e = this.masked).appendTail.apply(e, arguments)
        }
      }, {
        key: "extractInput",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this.masked.extractInput(e, t, n)
        }
      }, {
        key: "nearestInputPos",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
            n = 0,
            i = this.value.length,
            r = Math.min(Math.max(e, n), i);
          switch (t) {
            case _:
            case k:
              return this.isComplete ? r : n;
            case w:
            case E:
              return this.isComplete ? r : i;
            case b:
            default:
              return r
          }
        }
      }, {
        key: "doValidate",
        value: function() {
          var e, t;
          return (e = this.masked).doValidate.apply(e, arguments) && (!this.parent || (t = this.parent).doValidate.apply(t, arguments))
        }
      }, {
        key: "doCommit",
        value: function() {
          this.masked.doCommit()
        }
      }, {
        key: "state",
        get: function() {
          return {
            masked: this.masked.state,
            _isFilled: this._isFilled
          }
        },
        set: function(e) {
          this.masked.state = e.masked, this._isFilled = e._isFilled
        }
      }]), e
    }(),
    B = function() {
      function e(t) {
        i(this, e), Object.assign(this, t), this._value = ""
      }
      return o(e, [{
        key: "value",
        get: function() {
          return this._value
        }
      }, {
        key: "unmaskedValue",
        get: function() {
          return this.isUnmasking ? this.value : ""
        }
      }, {
        key: "reset",
        value: function() {
          this._isRawInput = !1, this._value = ""
        }
      }, {
        key: "remove",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
          return this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new S
        }
      }, {
        key: "nearestInputPos",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
            n = 0,
            i = this._value.length;
          switch (t) {
            case _:
            case k:
              return n;
            case b:
            case w:
            case E:
            default:
              return i
          }
        }
      }, {
        key: "extractInput",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return n.raw && this._isRawInput && this._value.slice(e, t) || ""
        }
      }, {
        key: "isComplete",
        get: function() {
          return !0
        }
      }, {
        key: "_appendChar",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = new S;
          if (this._value) return n;
          var i = this.char === e[0],
            r = i && (this.isUnmasking || t.input || t.raw) && !t.tail;
          return r && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = r && (t.raw || t.input), n
        }
      }, {
        key: "_appendPlaceholder",
        value: function() {
          var e = new S;
          return this._value || (this._value = e.inserted = this.char), e
        }
      }, {
        key: "extractTail",
        value: function() {
          return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new D("")
        }
      }, {
        key: "appendTail",
        value: function(e) {
          return y(e) && (e = new D(String(e))), e.appendTo(this)
        }
      }, {
        key: "append",
        value: function(e, t, n) {
          var i = this._appendChar(e, t);
          return null != n && (i.tailShift += this.appendTail(n).tailShift), i
        }
      }, {
        key: "doCommit",
        value: function() {}
      }, {
        key: "state",
        get: function() {
          return {
            _value: this._value,
            _isRawInput: this._isRawInput
          }
        },
        set: function(e) {
          Object.assign(this, e)
        }
      }]), e
    }(),
    M = function() {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        i(this, e), this.chunks = t, this.from = n
      }
      return o(e, [{
        key: "toString",
        value: function() {
          return this.chunks.map(String).join("")
        }
      }, {
        key: "extend",
        value: function(t) {
          if (String(t)) {
            y(t) && (t = new D(String(t)));
            var n = this.chunks[this.chunks.length - 1],
              i = n && (n.stop === t.stop || null == t.stop) && t.from === n.from + n.toString().length;
            if (t instanceof D) i ? n.extend(t.toString()) : this.chunks.push(t);
            else if (t instanceof e) {
              if (null == t.stop)
                for (var r; t.chunks.length && null == t.chunks[0].stop;)(r = t.chunks.shift()).from += t.from, this.extend(r);
              t.toString() && (t.stop = t.blockIndex, this.chunks.push(t))
            }
          }
        }
      }, {
        key: "appendTo",
        value: function(t) {
          if (!(t instanceof L.MaskedPattern)) return new D(this.toString()).appendTo(t);
          for (var n = new S, i = 0; i < this.chunks.length && !n.skip; ++i) {
            var r = this.chunks[i],
              o = t._mapPosToBlock(t.value.length),
              s = r.stop,
              a = void 0;
            if (null != s && (!o || o.index <= s) && ((r instanceof e || t._stops.indexOf(s) >= 0) && n.aggregate(t._appendPlaceholder(s)), a = r instanceof e && t._blocks[s]), a) {
              var u = a.appendTail(r);
              u.skip = !1, n.aggregate(u), t._value += u.inserted;
              var l = r.toString().slice(u.rawInserted.length);
              l && n.aggregate(t.append(l, {
                tail: !0
              }))
            } else n.aggregate(t.append(r.toString(), {
              tail: !0
            }))
          }
          return n
        }
      }, {
        key: "state",
        get: function() {
          return {
            chunks: this.chunks.map((function(e) {
              return e.state
            })),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
          }
        },
        set: function(t) {
          var n = t.chunks,
            i = l(t, ["chunks"]);
          Object.assign(this, i), this.chunks = n.map((function(t) {
            var n = "chunks" in t ? new e : new D;
            return n.state = t, n
          }))
        }
      }, {
        key: "shiftBefore",
        value: function(e) {
          if (this.from >= e || !this.chunks.length) return "";
          for (var t = e - this.from, n = 0; n < this.chunks.length;) {
            var i = this.chunks[n],
              r = i.shiftBefore(t);
            if (i.toString()) {
              if (!r) break;
              ++n
            } else this.chunks.splice(n, 1);
            if (r) return r
          }
          return ""
        }
      }]), e
    }(),
    I = function(e) {
      s(n, e);
      var t = f(n);

      function n() {
        return i(this, n), t.apply(this, arguments)
      }
      return o(n, [{
        key: "_update",
        value: function(e) {
          e.mask && (e.validate = function(t) {
            return t.search(e.mask) >= 0
          }), d(a(n.prototype), "_update", this).call(this, e)
        }
      }]), n
    }(O);
  L.MaskedRegExp = I;
  var R = function(e) {
    s(n, e);
    var t = f(n);

    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return i(this, n), e.definitions = Object.assign({}, N, e.definitions), t.call(this, Object.assign({}, n.DEFAULTS, e))
    }
    return o(n, [{
      key: "_update",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.definitions = Object.assign({}, this.definitions, e.definitions), d(a(n.prototype), "_update", this).call(this, e), this._rebuildMask()
      }
    }, {
      key: "_rebuildMask",
      value: function() {
        var e = this,
          t = this.definitions;
        this._blocks = [], this._stops = [], this._maskedBlocks = {};
        var i = this.mask;
        if (i && t)
          for (var r = !1, o = !1, s = 0; s < i.length; ++s) {
            if (this.blocks)
              if ("continue" === function() {
                  var t = i.slice(s),
                    n = Object.keys(e.blocks).filter((function(e) {
                      return 0 === t.indexOf(e)
                    }));
                  n.sort((function(e, t) {
                    return t.length - e.length
                  }));
                  var r = n[0];
                  if (r) {
                    var o = j(Object.assign({
                      parent: e,
                      lazy: e.lazy,
                      placeholderChar: e.placeholderChar,
                      overwrite: e.overwrite
                    }, e.blocks[r]));
                    return o && (e._blocks.push(o), e._maskedBlocks[r] || (e._maskedBlocks[r] = []), e._maskedBlocks[r].push(e._blocks.length - 1)), s += r.length - 1, "continue"
                  }
                }()) continue;
            var a = i[s],
              u = a in t;
            if (a !== n.STOP_CHAR)
              if ("{" !== a && "}" !== a)
                if ("[" !== a && "]" !== a) {
                  if (a === n.ESCAPE_CHAR) {
                    if (++s, !(a = i[s])) break;
                    u = !1
                  }
                  var l = u ? new P({
                    parent: this,
                    lazy: this.lazy,
                    placeholderChar: this.placeholderChar,
                    mask: t[a],
                    isOptional: o
                  }) : new B({
                    char: a,
                    isUnmasking: r
                  });
                  this._blocks.push(l)
                } else o = !o;
            else r = !r;
            else this._stops.push(this._blocks.length)
          }
      }
    }, {
      key: "state",
      get: function() {
        return Object.assign({}, d(a(n.prototype), "state", this), {
          _blocks: this._blocks.map((function(e) {
            return e.state
          }))
        })
      },
      set: function(e) {
        var t = e._blocks,
          i = l(e, ["_blocks"]);
        this._blocks.forEach((function(e, n) {
          return e.state = t[n]
        })), g(a(n.prototype), "state", i, this, !0)
      }
    }, {
      key: "reset",
      value: function() {
        d(a(n.prototype), "reset", this).call(this), this._blocks.forEach((function(e) {
          return e.reset()
        }))
      }
    }, {
      key: "isComplete",
      get: function() {
        return this._blocks.every((function(e) {
          return e.isComplete
        }))
      }
    }, {
      key: "doCommit",
      value: function() {
        this._blocks.forEach((function(e) {
          return e.doCommit()
        })), d(a(n.prototype), "doCommit", this).call(this)
      }
    }, {
      key: "unmaskedValue",
      get: function() {
        return this._blocks.reduce((function(e, t) {
          return e + t.unmaskedValue
        }), "")
      },
      set: function(e) {
        g(a(n.prototype), "unmaskedValue", e, this, !0)
      }
    }, {
      key: "value",
      get: function() {
        return this._blocks.reduce((function(e, t) {
          return e + t.value
        }), "")
      },
      set: function(e) {
        g(a(n.prototype), "value", e, this, !0)
      }
    }, {
      key: "appendTail",
      value: function(e) {
        return d(a(n.prototype), "appendTail", this).call(this, e).aggregate(this._appendPlaceholder())
      }
    }, {
      key: "_appendCharRaw",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this._mapPosToBlock(this.value.length),
          i = new S;
        if (!n) return i;
        for (var r = n.index;; ++r) {
          var o = this._blocks[r];
          if (!o) break;
          var s = o._appendChar(e, t),
            a = s.skip;
          if (i.aggregate(s), a || s.rawInserted) break
        }
        return i
      }
    }, {
      key: "extractTail",
      value: function() {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          i = new M;
        return t === n || this._forEachBlocksInRange(t, n, (function(t, n, r, o) {
          var s = t.extractTail(r, o);
          s.stop = e._findStopBefore(n), s.from = e._blockStartPos(n), s instanceof M && (s.blockIndex = n), i.extend(s)
        })), i
      }
    }, {
      key: "extractInput",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (e === t) return "";
        var i = "";
        return this._forEachBlocksInRange(e, t, (function(e, t, r, o) {
          i += e.extractInput(r, o, n)
        })), i
      }
    }, {
      key: "_findStopBefore",
      value: function(e) {
        for (var t, n = 0; n < this._stops.length; ++n) {
          var i = this._stops[n];
          if (!(i <= e)) break;
          t = i
        }
        return t
      }
    }, {
      key: "_appendPlaceholder",
      value: function(e) {
        var t = this,
          n = new S;
        if (this.lazy && null == e) return n;
        var i = this._mapPosToBlock(this.value.length);
        if (!i) return n;
        var r = i.index,
          o = null != e ? e : this._blocks.length;
        return this._blocks.slice(r, o).forEach((function(i) {
          if (!i.lazy || null != e) {
            var r = null != i._blocks ? [i._blocks.length] : [],
              o = i._appendPlaceholder.apply(i, r);
            t._value += o.inserted, n.aggregate(o)
          }
        })), n
      }
    }, {
      key: "_mapPosToBlock",
      value: function(e) {
        for (var t = "", n = 0; n < this._blocks.length; ++n) {
          var i = this._blocks[n],
            r = t.length;
          if (e <= (t += i.value).length) return {
            index: n,
            offset: e - r
          }
        }
      }
    }, {
      key: "_blockStartPos",
      value: function(e) {
        return this._blocks.slice(0, e).reduce((function(e, t) {
          return e + t.value.length
        }), 0)
      }
    }, {
      key: "_forEachBlocksInRange",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = this._mapPosToBlock(e);
        if (i) {
          var r = this._mapPosToBlock(t),
            o = r && i.index === r.index,
            s = i.offset,
            a = r && o ? r.offset : this._blocks[i.index].value.length;
          if (n(this._blocks[i.index], i.index, s, a), r && !o) {
            for (var u = i.index + 1; u < r.index; ++u) n(this._blocks[u], u, 0, this._blocks[u].value.length);
            n(this._blocks[r.index], r.index, 0, r.offset)
          }
        }
      }
    }, {
      key: "remove",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          i = d(a(n.prototype), "remove", this).call(this, e, t);
        return this._forEachBlocksInRange(e, t, (function(e, t, n, r) {
          i.aggregate(e.remove(n, r))
        })), i
      }
    }, {
      key: "nearestInputPos",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
          n = this._mapPosToBlock(e) || {
            index: 0,
            offset: 0
          },
          i = n.offset,
          r = n.index,
          o = this._blocks[r];
        if (!o) return e;
        var s = i;
        0 !== s && s < o.value.length && (s = o.nearestInputPos(i, x(t)));
        var a = s === o.value.length,
          u = 0 === s;
        if (!u && !a) return this._blockStartPos(r) + s;
        var l = a ? r + 1 : r;
        if (t === b) {
          if (l > 0) {
            var c = l - 1,
              f = this._blocks[c],
              h = f.nearestInputPos(0, b);
            if (!f.value.length || h !== f.value.length) return this._blockStartPos(l)
          }
          for (var d = l, p = d; p < this._blocks.length; ++p) {
            var g = this._blocks[p],
              v = g.nearestInputPos(0, b);
            if (!g.value.length || v !== g.value.length) return this._blockStartPos(p) + v
          }
          for (var m = l - 1; m >= 0; --m) {
            var y = this._blocks[m],
              A = y.nearestInputPos(0, b);
            if (!y.value.length || A !== y.value.length) return this._blockStartPos(m) + y.value.length
          }
          return e
        }
        if (t === _ || t === k) {
          for (var C, T = l; T < this._blocks.length; ++T)
            if (this._blocks[T].value) {
              C = T;
              break
            } if (null != C) {
            var S = this._blocks[C],
              D = S.nearestInputPos(0, w);
            if (0 === D && S.unmaskedValue.length) return this._blockStartPos(C) + D
          }
          for (var L, O = -1, F = l - 1; F >= 0; --F) {
            var j = this._blocks[F],
              N = j.nearestInputPos(j.value.length, k);
            if (j.value && 0 === N || (L = F), 0 !== N) {
              if (N !== j.value.length) return this._blockStartPos(F) + N;
              O = F;
              break
            }
          }
          if (t === _)
            for (var P = O + 1; P <= Math.min(l, this._blocks.length - 1); ++P) {
              var B = this._blocks[P],
                M = B.nearestInputPos(0, b),
                I = this._blockStartPos(P) + M;
              if (I > e) break;
              if (M !== B.value.length) return I
            }
          if (O >= 0) return this._blockStartPos(O) + this._blocks[O].value.length;
          if (t === k || this.lazy && !this.extractInput() && !H(this._blocks[l])) return 0;
          if (null != L) return this._blockStartPos(L);
          for (var R = l; R < this._blocks.length; ++R) {
            var q = this._blocks[R],
              V = q.nearestInputPos(0, b);
            if (!q.value.length || V !== q.value.length) return this._blockStartPos(R) + V
          }
          return 0
        }
        if (t === w || t === E) {
          for (var W, z, U = l; U < this._blocks.length; ++U) {
            var $ = this._blocks[U],
              Y = $.nearestInputPos(0, b);
            if (Y !== $.value.length) {
              z = this._blockStartPos(U) + Y, W = U;
              break
            }
          }
          if (null != W && null != z) {
            for (var X = W; X < this._blocks.length; ++X) {
              var K = this._blocks[X],
                Q = K.nearestInputPos(0, E);
              if (Q !== K.value.length) return this._blockStartPos(X) + Q
            }
            return t === E ? this.value.length : z
          }
          for (var G = Math.min(l, this._blocks.length - 1); G >= 0; --G) {
            var Z = this._blocks[G],
              J = Z.nearestInputPos(Z.value.length, _);
            if (0 !== J) {
              var ee = this._blockStartPos(G) + J;
              if (ee >= e) return ee;
              break
            }
          }
        }
        return e
      }
    }, {
      key: "maskedBlock",
      value: function(e) {
        return this.maskedBlocks(e)[0]
      }
    }, {
      key: "maskedBlocks",
      value: function(e) {
        var t = this,
          n = this._maskedBlocks[e];
        return n ? n.map((function(e) {
          return t._blocks[e]
        })) : []
      }
    }]), n
  }(O);

  function H(e) {
    if (!e) return !1;
    var t = e.value;
    return !t || e.nearestInputPos(0, b) !== t.length
  }
  R.DEFAULTS = {
    lazy: !0,
    placeholderChar: "_"
  }, R.STOP_CHAR = "`", R.ESCAPE_CHAR = "\\", R.InputDefinition = P, R.FixedDefinition = B, L.MaskedPattern = R;
  var q = function(e) {
    s(n, e);
    var t = f(n);

    function n() {
      return i(this, n), t.apply(this, arguments)
    }
    return o(n, [{
      key: "_matchFrom",
      get: function() {
        return this.maxLength - String(this.from).length
      }
    }, {
      key: "_update",
      value: function(e) {
        e = Object.assign({
          to: this.to || 0,
          from: this.from || 0
        }, e);
        var t = String(e.to).length;
        null != e.maxLength && (t = Math.max(t, e.maxLength)), e.maxLength = t;
        for (var i = String(e.from).padStart(t, "0"), r = String(e.to).padStart(t, "0"), o = 0; o < r.length && r[o] === i[o];) ++o;
        e.mask = r.slice(0, o).replace(/0/g, "\\0") + "0".repeat(t - o), d(a(n.prototype), "_update", this).call(this, e)
      }
    }, {
      key: "isComplete",
      get: function() {
        return d(a(n.prototype), "isComplete", this) && Boolean(this.value)
      }
    }, {
      key: "boundaries",
      value: function(e) {
        var t = "",
          n = "",
          i = v(e.match(/^(\D*)(\d*)(\D*)/) || [], 3),
          r = i[1],
          o = i[2];
        return o && (t = "0".repeat(r.length) + o, n = "9".repeat(r.length) + o), [t = t.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
      }
    }, {
      key: "doPrepare",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e = d(a(n.prototype), "doPrepare", this).call(this, e, t).replace(/\D/g, ""), !this.autofix) return e;
        for (var i = String(this.from).padStart(this.maxLength, "0"), r = String(this.to).padStart(this.maxLength, "0"), o = this.value, s = "", u = 0; u < e.length; ++u) {
          var l = o + s + e[u],
            c = this.boundaries(l),
            f = v(c, 2),
            h = f[0],
            p = f[1];
          Number(p) < this.from ? s += i[l.length - 1] : Number(h) > this.to ? s += r[l.length - 1] : s += e[u]
        }
        return s
      }
    }, {
      key: "doValidate",
      value: function() {
        var e, t = this.value,
          i = t.search(/[^0]/);
        if (-1 === i && t.length <= this._matchFrom) return !0;
        for (var r = this.boundaries(t), o = v(r, 2), s = o[0], u = o[1], l = arguments.length, c = new Array(l), f = 0; f < l; f++) c[f] = arguments[f];
        return this.from <= Number(u) && Number(s) <= this.to && (e = d(a(n.prototype), "doValidate", this)).call.apply(e, [this].concat(c))
      }
    }]), n
  }(R);
  L.MaskedRange = q;
  var V = function(e) {
    s(n, e);
    var t = f(n);

    function n(e) {
      return i(this, n), t.call(this, Object.assign({}, n.DEFAULTS, e))
    }
    return o(n, [{
      key: "_update",
      value: function(e) {
        e.mask === Date && delete e.mask, e.pattern && (e.mask = e.pattern);
        var t = e.blocks;
        e.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), e.min && (e.blocks.Y.from = e.min.getFullYear()), e.max && (e.blocks.Y.to = e.max.getFullYear()), e.min && e.max && e.blocks.Y.from === e.blocks.Y.to && (e.blocks.m.from = e.min.getMonth() + 1, e.blocks.m.to = e.max.getMonth() + 1, e.blocks.m.from === e.blocks.m.to && (e.blocks.d.from = e.min.getDate(), e.blocks.d.to = e.max.getDate())), Object.assign(e.blocks, t), Object.keys(e.blocks).forEach((function(t) {
          var n = e.blocks[t];
          "autofix" in n || (n.autofix = e.autofix)
        })), d(a(n.prototype), "_update", this).call(this, e)
      }
    }, {
      key: "doValidate",
      value: function() {
        for (var e, t = this.date, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return (e = d(a(n.prototype), "doValidate", this)).call.apply(e, [this].concat(r)) && (!this.isComplete || this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max))
      }
    }, {
      key: "isDateExist",
      value: function(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0
      }
    }, {
      key: "date",
      get: function() {
        return this.typedValue
      },
      set: function(e) {
        this.typedValue = e
      }
    }, {
      key: "typedValue",
      get: function() {
        return this.isComplete ? d(a(n.prototype), "typedValue", this) : null
      },
      set: function(e) {
        g(a(n.prototype), "typedValue", e, this, !0)
      }
    }]), n
  }(R);
  V.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: function(e) {
      return [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".")
    },
    parse: function(e) {
      var t = v(e.split("."), 3),
        n = t[0],
        i = t[1],
        r = t[2];
      return new Date(r, i - 1, n)
    }
  }, V.GET_DEFAULT_BLOCKS = function() {
    return {
      d: {
        mask: q,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: q,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: q,
        from: 1900,
        to: 9999
      }
    }
  }, L.MaskedDate = V;
  var W = function() {
    function e() {
      i(this, e)
    }
    return o(e, [{
      key: "selectionStart",
      get: function() {
        var e;
        try {
          e = this._unsafeSelectionStart
        } catch (e) {}
        return null != e ? e : this.value.length
      }
    }, {
      key: "selectionEnd",
      get: function() {
        var e;
        try {
          e = this._unsafeSelectionEnd
        } catch (e) {}
        return null != e ? e : this.value.length
      }
    }, {
      key: "select",
      value: function(e, t) {
        if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd)) try {
          this._unsafeSelect(e, t)
        } catch (e) {}
      }
    }, {
      key: "_unsafeSelect",
      value: function(e, t) {}
    }, {
      key: "isActive",
      get: function() {
        return !1
      }
    }, {
      key: "bindEvents",
      value: function(e) {}
    }, {
      key: "unbindEvents",
      value: function() {}
    }]), e
  }();
  L.MaskElement = W;
  var z = function(e) {
    s(n, e);
    var t = f(n);

    function n(e) {
      var r;
      return i(this, n), (r = t.call(this)).input = e, r._handlers = {}, r
    }
    return o(n, [{
      key: "rootElement",
      get: function() {
        return this.input.getRootNode ? this.input.getRootNode() : document
      }
    }, {
      key: "isActive",
      get: function() {
        return this.input === this.rootElement.activeElement
      }
    }, {
      key: "_unsafeSelectionStart",
      get: function() {
        return this.input.selectionStart
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function() {
        return this.input.selectionEnd
      }
    }, {
      key: "_unsafeSelect",
      value: function(e, t) {
        this.input.setSelectionRange(e, t)
      }
    }, {
      key: "value",
      get: function() {
        return this.input.value
      },
      set: function(e) {
        this.input.value = e
      }
    }, {
      key: "bindEvents",
      value: function(e) {
        var t = this;
        Object.keys(e).forEach((function(i) {
          return t._toggleEventHandler(n.EVENTS_MAP[i], e[i])
        }))
      }
    }, {
      key: "unbindEvents",
      value: function() {
        var e = this;
        Object.keys(this._handlers).forEach((function(t) {
          return e._toggleEventHandler(t)
        }))
      }
    }, {
      key: "_toggleEventHandler",
      value: function(e, t) {
        this._handlers[e] && (this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]), t && (this.input.addEventListener(e, t), this._handlers[e] = t)
      }
    }]), n
  }(W);
  z.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
  }, L.HTMLMaskElement = z;
  var U = function(e) {
    s(n, e);
    var t = f(n);

    function n() {
      return i(this, n), t.apply(this, arguments)
    }
    return o(n, [{
      key: "_unsafeSelectionStart",
      get: function() {
        var e = this.rootElement,
          t = e.getSelection && e.getSelection();
        return t && t.anchorOffset
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function() {
        var e = this.rootElement,
          t = e.getSelection && e.getSelection();
        return t && this._unsafeSelectionStart + String(t).length
      }
    }, {
      key: "_unsafeSelect",
      value: function(e, t) {
        if (this.rootElement.createRange) {
          var n = this.rootElement.createRange();
          n.setStart(this.input.firstChild || this.input, e), n.setEnd(this.input.lastChild || this.input, t);
          var i = this.rootElement,
            r = i.getSelection && i.getSelection();
          r && (r.removeAllRanges(), r.addRange(n))
        }
      }
    }, {
      key: "value",
      get: function() {
        return this.input.textContent
      },
      set: function(e) {
        this.input.textContent = e
      }
    }]), n
  }(z);
  L.HTMLContenteditableMaskElement = U;
  var $ = function() {
    function e(t, n) {
      i(this, e), this.el = t instanceof W ? t : t.isContentEditable && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? new U(t) : new z(t), this.masked = j(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
    }
    return o(e, [{
      key: "mask",
      get: function() {
        return this.masked.mask
      },
      set: function(e) {
        if (!this.maskEquals(e))
          if (e instanceof L.Masked || this.masked.constructor !== F(e)) {
            var t = j({
              mask: e
            });
            t.unmaskedValue = this.masked.unmaskedValue, this.masked = t
          } else this.masked.updateOptions({
            mask: e
          })
      }
    }, {
      key: "maskEquals",
      value: function(e) {
        return null == e || e === this.masked.mask || e === Date && this.masked instanceof V
      }
    }, {
      key: "value",
      get: function() {
        return this._value
      },
      set: function(e) {
        this.masked.value = e, this.updateControl(), this.alignCursor()
      }
    }, {
      key: "unmaskedValue",
      get: function() {
        return this._unmaskedValue
      },
      set: function(e) {
        this.masked.unmaskedValue = e, this.updateControl(), this.alignCursor()
      }
    }, {
      key: "typedValue",
      get: function() {
        return this.masked.typedValue
      },
      set: function(e) {
        this.masked.typedValue = e, this.updateControl(), this.alignCursor()
      }
    }, {
      key: "_bindEvents",
      value: function() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        })
      }
    }, {
      key: "_unbindEvents",
      value: function() {
        this.el && this.el.unbindEvents()
      }
    }, {
      key: "_fireEvent",
      value: function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        var r = this._listeners[e];
        r && r.forEach((function(e) {
          return e.apply(void 0, n)
        }))
      }
    }, {
      key: "selectionStart",
      get: function() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
      }
    }, {
      key: "cursorPos",
      get: function() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
      },
      set: function(e) {
        this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection())
      }
    }, {
      key: "_saveSelection",
      value: function() {
        this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        }
      }
    }, {
      key: "updateValue",
      value: function() {
        this.masked.value = this.el.value, this._value = this.masked.value
      }
    }, {
      key: "updateControl",
      value: function() {
        var e = this.masked.unmaskedValue,
          t = this.masked.value,
          n = this.unmaskedValue !== e || this.value !== t;
        this._unmaskedValue = e, this._value = t, this.el.value !== t && (this.el.value = t), n && this._fireChangeEvents()
      }
    }, {
      key: "updateOptions",
      value: function(e) {
        var t = e.mask,
          n = l(e, ["mask"]),
          i = !this.maskEquals(t),
          r = !C(this.masked, n);
        i && (this.mask = t), r && this.masked.updateOptions(n), (i || r) && this.updateControl()
      }
    }, {
      key: "updateCursor",
      value: function(e) {
        null != e && (this.cursorPos = e, this._delayUpdateCursor(e))
      }
    }, {
      key: "_delayUpdateCursor",
      value: function(e) {
        var t = this;
        this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout((function() {
          t.el && (t.cursorPos = t._changingCursorPos, t._abortUpdateCursor())
        }), 10)
      }
    }, {
      key: "_fireChangeEvents",
      value: function() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
      }
    }, {
      key: "_abortUpdateCursor",
      value: function() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
      }
    }, {
      key: "alignCursor",
      value: function() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, _)
      }
    }, {
      key: "alignCursorFriendly",
      value: function() {
        this.selectionStart === this.cursorPos && this.alignCursor()
      }
    }, {
      key: "on",
      value: function(e, t) {
        return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
      }
    }, {
      key: "off",
      value: function(e, t) {
        if (!this._listeners[e]) return this;
        if (!t) return delete this._listeners[e], this;
        var n = this._listeners[e].indexOf(t);
        return n >= 0 && this._listeners[e].splice(n, 1), this
      }
    }, {
      key: "_onInput",
      value: function(e) {
        if (this._inputEvent = e, this._abortUpdateCursor(), !this._selection) return this.updateValue();
        var t = new T(this.el.value, this.cursorPos, this.value, this._selection),
          n = this.masked.rawInputValue,
          i = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection).offset,
          r = n === this.masked.rawInputValue ? t.removeDirection : b,
          o = this.masked.nearestInputPos(t.startChangePos + i, r);
        this.updateControl(), this.updateCursor(o), delete this._inputEvent
      }
    }, {
      key: "_onChange",
      value: function() {
        this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
      }
    }, {
      key: "_onDrop",
      value: function(e) {
        e.preventDefault(), e.stopPropagation()
      }
    }, {
      key: "_onFocus",
      value: function(e) {
        this.alignCursorFriendly()
      }
    }, {
      key: "_onClick",
      value: function(e) {
        this.alignCursorFriendly()
      }
    }, {
      key: "destroy",
      value: function() {
        this._unbindEvents(), this._listeners.length = 0, delete this.el
      }
    }]), e
  }();
  L.InputMask = $;
  var Y = function(e) {
    s(n, e);
    var t = f(n);

    function n() {
      return i(this, n), t.apply(this, arguments)
    }
    return o(n, [{
      key: "_update",
      value: function(e) {
        e.enum && (e.mask = "*".repeat(e.enum[0].length)), d(a(n.prototype), "_update", this).call(this, e)
      }
    }, {
      key: "doValidate",
      value: function() {
        for (var e, t = this, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return this.enum.some((function(e) {
          return e.indexOf(t.unmaskedValue) >= 0
        })) && (e = d(a(n.prototype), "doValidate", this)).call.apply(e, [this].concat(r))
      }
    }]), n
  }(R);
  L.MaskedEnum = Y;
  var X = function(e) {
    s(n, e);
    var t = f(n);

    function n(e) {
      return i(this, n), t.call(this, Object.assign({}, n.DEFAULTS, e))
    }
    return o(n, [{
      key: "_update",
      value: function(e) {
        d(a(n.prototype), "_update", this).call(this, e), this._updateRegExps()
      }
    }, {
      key: "_updateRegExps",
      value: function() {
        var e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
          t = (this.scale ? "(" + A(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExpInput = new RegExp(e + "(0|([1-9]+\\d*))?" + t), this._numberRegExp = new RegExp(e + "\\d*" + t), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(A).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(A(this.thousandsSeparator), "g")
      }
    }, {
      key: "_removeThousandsSeparators",
      value: function(e) {
        return e.replace(this._thousandsSeparatorRegExp, "")
      }
    }, {
      key: "_insertThousandsSeparators",
      value: function(e) {
        var t = e.split(this.radix);
        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix)
      }
    }, {
      key: "doPrepare",
      value: function(e) {
        for (var t, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) r[o - 1] = arguments[o];
        return (t = d(a(n.prototype), "doPrepare", this)).call.apply(t, [this, this._removeThousandsSeparators(e.replace(this._mapToRadixRegExp, this.radix))].concat(r))
      }
    }, {
      key: "_separatorsCount",
      value: function(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = 0; i < e; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++n, t && (e += this.thousandsSeparator.length));
        return n
      }
    }, {
      key: "_separatorsCountFromSlice",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
      }
    }, {
      key: "extractInput",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          i = arguments.length > 2 ? arguments[2] : void 0,
          r = this._adjustRangeWithSeparators(e, t),
          o = v(r, 2);
        return e = o[0], t = o[1], this._removeThousandsSeparators(d(a(n.prototype), "extractInput", this).call(this, e, t, i))
      }
    }, {
      key: "_appendCharRaw",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.thousandsSeparator) return d(a(n.prototype), "_appendCharRaw", this).call(this, e, t);
        var i = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          r = this._separatorsCountFromSlice(i);
        this._value = this._removeThousandsSeparators(this.value);
        var o = d(a(n.prototype), "_appendCharRaw", this).call(this, e, t);
        this._value = this._insertThousandsSeparators(this._value);
        var s = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          u = this._separatorsCountFromSlice(s);
        return o.tailShift += (u - r) * this.thousandsSeparator.length, o.skip = !o.rawInserted && e === this.thousandsSeparator, o
      }
    }, {
      key: "_findSeparatorAround",
      value: function(e) {
        if (this.thousandsSeparator) {
          var t = e - this.thousandsSeparator.length + 1,
            n = this.value.indexOf(this.thousandsSeparator, t);
          if (n <= e) return n
        }
        return -1
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function(e, t) {
        var n = this._findSeparatorAround(e);
        n >= 0 && (e = n);
        var i = this._findSeparatorAround(t);
        return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t]
      }
    }, {
      key: "remove",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = this._adjustRangeWithSeparators(e, t),
          i = v(n, 2);
        e = i[0], t = i[1];
        var r = this.value.slice(0, e),
          o = this.value.slice(t),
          s = this._separatorsCount(r.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(r + o));
        var a = this._separatorsCountFromSlice(r);
        return new S({
          tailShift: (a - s) * this.thousandsSeparator.length
        })
      }
    }, {
      key: "nearestInputPos",
      value: function(e, t) {
        if (!this.thousandsSeparator) return e;
        switch (t) {
          case b:
          case _:
          case k:
            var n = this._findSeparatorAround(e - 1);
            if (n >= 0) {
              var i = n + this.thousandsSeparator.length;
              if (e < i || this.value.length <= i || t === k) return n
            }
            break;
          case w:
          case E:
            var r = this._findSeparatorAround(e);
            if (r >= 0) return r + this.thousandsSeparator.length
        }
        return e
      }
    }, {
      key: "doValidate",
      value: function(e) {
        var t = (e.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
        if (t) {
          var i = this.number;
          t = t && !isNaN(i) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
        }
        return t && d(a(n.prototype), "doValidate", this).call(this, e)
      }
    }, {
      key: "doCommit",
      value: function() {
        if (this.value) {
          var e = this.number,
            t = e;
          null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = String(t));
          var i = this.value;
          this.normalizeZeros && (i = this._normalizeZeros(i)), this.padFractionalZeros && (i = this._padFractionalZeros(i)), this._value = i
        }
        d(a(n.prototype), "doCommit", this).call(this)
      }
    }, {
      key: "_normalizeZeros",
      value: function(e) {
        var t = this._removeThousandsSeparators(e).split(this.radix);
        return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (function(e, t, n, i) {
          return t + i
        })), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
      }
    }, {
      key: "_padFractionalZeros",
      value: function(e) {
        if (!e) return e;
        var t = e.split(this.radix);
        return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix)
      }
    }, {
      key: "unmaskedValue",
      get: function() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
      },
      set: function(e) {
        g(a(n.prototype), "unmaskedValue", e.replace(".", this.radix), this, !0)
      }
    }, {
      key: "typedValue",
      get: function() {
        return Number(this.unmaskedValue)
      },
      set: function(e) {
        g(a(n.prototype), "unmaskedValue", String(e), this, !0)
      }
    }, {
      key: "number",
      get: function() {
        return this.typedValue
      },
      set: function(e) {
        this.typedValue = e
      }
    }, {
      key: "allowNegative",
      get: function() {
        return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
      }
    }]), n
  }(O);
  X.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: ["."],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1
  }, L.MaskedNumber = X;
  var K = function(e) {
    s(n, e);
    var t = f(n);

    function n() {
      return i(this, n), t.apply(this, arguments)
    }
    return o(n, [{
      key: "_update",
      value: function(e) {
        e.mask && (e.validate = e.mask), d(a(n.prototype), "_update", this).call(this, e)
      }
    }]), n
  }(O);
  L.MaskedFunction = K;
  var Q = function(e) {
    s(n, e);
    var t = f(n);

    function n(e) {
      var r;
      return i(this, n), (r = t.call(this, Object.assign({}, n.DEFAULTS, e))).currentMask = null, r
    }
    return o(n, [{
      key: "_update",
      value: function(e) {
        d(a(n.prototype), "_update", this).call(this, e), "mask" in e && (this.compiledMasks = Array.isArray(e.mask) ? e.mask.map((function(e) {
          return j(e)
        })) : [])
      }
    }, {
      key: "_appendCharRaw",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this._applyDispatch(e, t);
        return this.currentMask && n.aggregate(this.currentMask._appendChar(e, t)), n
      }
    }, {
      key: "_applyDispatch",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
          i = this.rawInputValue,
          r = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : i,
          o = i.slice(r.length),
          s = this.currentMask,
          a = new S,
          u = s && s.state;
        if (this.currentMask = this.doDispatch(e, Object.assign({}, t)), this.currentMask)
          if (this.currentMask !== s) {
            if (this.currentMask.reset(), r) {
              var l = this.currentMask.append(r, {
                raw: !0
              });
              a.tailShift = l.inserted.length - n.length
            }
            o && (a.tailShift += this.currentMask.append(o, {
              raw: !0,
              tail: !0
            }).tailShift)
          } else this.currentMask.state = u;
        return a
      }
    }, {
      key: "_appendPlaceholder",
      value: function() {
        var e = this._applyDispatch.apply(this, arguments);
        return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e
      }
    }, {
      key: "doDispatch",
      value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.dispatch(e, this, t)
      }
    }, {
      key: "doValidate",
      value: function() {
        for (var e, t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return (e = d(a(n.prototype), "doValidate", this)).call.apply(e, [this].concat(r)) && (!this.currentMask || (t = this.currentMask).doValidate.apply(t, r))
      }
    }, {
      key: "reset",
      value: function() {
        this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach((function(e) {
          return e.reset()
        }))
      }
    }, {
      key: "value",
      get: function() {
        return this.currentMask ? this.currentMask.value : ""
      },
      set: function(e) {
        g(a(n.prototype), "value", e, this, !0)
      }
    }, {
      key: "unmaskedValue",
      get: function() {
        return this.currentMask ? this.currentMask.unmaskedValue : ""
      },
      set: function(e) {
        g(a(n.prototype), "unmaskedValue", e, this, !0)
      }
    }, {
      key: "typedValue",
      get: function() {
        return this.currentMask ? this.currentMask.typedValue : ""
      },
      set: function(e) {
        var t = String(e);
        this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t
      }
    }, {
      key: "isComplete",
      get: function() {
        return !!this.currentMask && this.currentMask.isComplete
      }
    }, {
      key: "remove",
      value: function() {
        var e, t = new S;
        this.currentMask && t.aggregate((e = this.currentMask).remove.apply(e, arguments)).aggregate(this._applyDispatch());
        return t
      }
    }, {
      key: "state",
      get: function() {
        return Object.assign({}, d(a(n.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map((function(e) {
            return e.state
          })),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        })
      },
      set: function(e) {
        var t = e.compiledMasks,
          i = e.currentMaskRef,
          r = e.currentMask,
          o = l(e, ["compiledMasks", "currentMaskRef", "currentMask"]);
        this.compiledMasks.forEach((function(e, n) {
          return e.state = t[n]
        })), null != i && (this.currentMask = i, this.currentMask.state = r), g(a(n.prototype), "state", o, this, !0)
      }
    }, {
      key: "extractInput",
      value: function() {
        var e;
        return this.currentMask ? (e = this.currentMask).extractInput.apply(e, arguments) : ""
      }
    }, {
      key: "extractTail",
      value: function() {
        for (var e, t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return this.currentMask ? (e = this.currentMask).extractTail.apply(e, r) : (t = d(a(n.prototype), "extractTail", this)).call.apply(t, [this].concat(r))
      }
    }, {
      key: "doCommit",
      value: function() {
        this.currentMask && this.currentMask.doCommit(), d(a(n.prototype), "doCommit", this).call(this)
      }
    }, {
      key: "nearestInputPos",
      value: function() {
        for (var e, t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return this.currentMask ? (e = this.currentMask).nearestInputPos.apply(e, r) : (t = d(a(n.prototype), "nearestInputPos", this)).call.apply(t, [this].concat(r))
      }
    }, {
      key: "overwrite",
      get: function() {
        return this.currentMask ? this.currentMask.overwrite : d(a(n.prototype), "overwrite", this)
      },
      set: function(e) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
      }
    }]), n
  }(O);
  Q.DEFAULTS = {
    dispatch: function(e, t, n) {
      if (t.compiledMasks.length) {
        var i = t.rawInputValue,
          r = t.compiledMasks.map((function(t, r) {
            return t.reset(), t.append(i, {
              raw: !0
            }), t.append(e, n), {
              weight: t.rawInputValue.length,
              index: r
            }
          }));
        return r.sort((function(e, t) {
          return t.weight - e.weight
        })), t.compiledMasks[r[0].index]
      }
    }
  }, L.MaskedDynamic = Q;
  var G = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
  };

  function Z(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.MASKED,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G.MASKED,
      i = j(e);
    return function(e) {
      return i.runIsolated((function(i) {
        return i[t] = e, i[n]
      }))
    }
  }
  L.PIPE_TYPE = G, L.createPipe = Z, L.pipe = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return Z.apply(void 0, n)(e)
  };
  try {
    globalThis.IMask = L
  } catch (e) {} [].slice.call(document.querySelectorAll("[data-mask]")).map((function(e) {
    return new L(e, {
      mask: e.dataset.mask,
      lazy: "true" === e.dataset["mask-visible"]
    })
  }));
  var J = "top",
    ee = "bottom",
    te = "right",
    ne = "left",
    ie = "auto",
    re = [J, ee, te, ne],
    oe = "start",
    se = "end",
    ae = "clippingParents",
    ue = "viewport",
    le = "popper",
    ce = "reference",
    fe = re.reduce((function(e, t) {
      return e.concat([t + "-" + oe, t + "-" + se])
    }), []),
    he = [].concat(re, [ie]).reduce((function(e, t) {
      return e.concat([t, t + "-" + oe, t + "-" + se])
    }), []),
    de = "beforeRead",
    pe = "read",
    ge = "afterRead",
    ve = "beforeMain",
    me = "main",
    ye = "afterMain",
    be = "beforeWrite",
    _e = "write",
    ke = "afterWrite",
    we = [de, pe, ge, ve, me, ye, be, _e, ke];

  function Ee(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
  }

  function xe(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return t && t.defaultView || window
    }
    return e
  }

  function Ae(e) {
    return e instanceof xe(e).Element || e instanceof Element
  }

  function Ce(e) {
    return e instanceof xe(e).HTMLElement || e instanceof HTMLElement
  }

  function Te(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof xe(e).ShadowRoot || e instanceof ShadowRoot)
  }
  var Se = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function(e) {
      var t = e.state;
      Object.keys(t.elements).forEach((function(e) {
        var n = t.styles[e] || {},
          i = t.attributes[e] || {},
          r = t.elements[e];
        Ce(r) && Ee(r) && (Object.assign(r.style, n), Object.keys(i).forEach((function(e) {
          var t = i[e];
          !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
        })))
      }))
    },
    effect: function(e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
          Object.keys(t.elements).forEach((function(e) {
            var i = t.elements[e],
              r = t.attributes[e] || {},
              o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                return e[t] = "", e
              }), {});
            Ce(i) && Ee(i) && (Object.assign(i.style, o), Object.keys(r).forEach((function(e) {
              i.removeAttribute(e)
            })))
          }))
        }
    },
    requires: ["computeStyles"]
  };

  function De(e) {
    return e.split("-")[0]
  }

  function Le(e) {
    var t = e.getBoundingClientRect();
    return {
      width: t.width,
      height: t.height,
      top: t.top,
      right: t.right,
      bottom: t.bottom,
      left: t.left,
      x: t.left,
      y: t.top
    }
  }

  function Oe(e) {
    var t = Le(e),
      n = e.offsetWidth,
      i = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: i
    }
  }

  function Fe(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Te(n)) {
      var i = t;
      do {
        if (i && e.isSameNode(i)) return !0;
        i = i.parentNode || i.host
      } while (i)
    }
    return !1
  }

  function je(e) {
    return xe(e).getComputedStyle(e)
  }

  function Ne(e) {
    return ["table", "td", "th"].indexOf(Ee(e)) >= 0
  }

  function Pe(e) {
    return ((Ae(e) ? e.ownerDocument : e.document) || window.document).documentElement
  }

  function Be(e) {
    return "html" === Ee(e) ? e : e.assignedSlot || e.parentNode || (Te(e) ? e.host : null) || Pe(e)
  }

  function Me(e) {
    return Ce(e) && "fixed" !== je(e).position ? e.offsetParent : null
  }

  function Ie(e) {
    for (var t = xe(e), n = Me(e); n && Ne(n) && "static" === je(n).position;) n = Me(n);
    return n && ("html" === Ee(n) || "body" === Ee(n) && "static" === je(n).position) ? t : n || function(e) {
      for (var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), n = Be(e); Ce(n) && ["html", "body"].indexOf(Ee(n)) < 0;) {
        var i = je(n);
        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
        n = n.parentNode
      }
      return null
    }(e) || t
  }

  function Re(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
  }
  var He = Math.max,
    qe = Math.min,
    Ve = Math.round;

  function We(e, t, n) {
    return He(e, qe(t, n))
  }

  function ze(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e)
  }

  function Ue(e, t) {
    return t.reduce((function(t, n) {
      return t[n] = e, t
    }), {})
  }
  var $e = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function(e) {
        var t, n = e.state,
          i = e.name,
          r = e.options,
          o = n.elements.arrow,
          s = n.modifiersData.popperOffsets,
          a = De(n.placement),
          u = Re(a),
          l = [ne, te].indexOf(a) >= 0 ? "height" : "width";
        if (o && s) {
          var c = function(e, t) {
              return ze("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                placement: t.placement
              })) : e) ? e : Ue(e, re))
            }(r.padding, n),
            f = Oe(o),
            h = "y" === u ? J : ne,
            d = "y" === u ? ee : te,
            p = n.rects.reference[l] + n.rects.reference[u] - s[u] - n.rects.popper[l],
            g = s[u] - n.rects.reference[u],
            v = Ie(o),
            m = v ? "y" === u ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
            y = p / 2 - g / 2,
            b = c[h],
            _ = m - f[l] - c[d],
            k = m / 2 - f[l] / 2 + y,
            w = We(b, k, _),
            E = u;
          n.modifiersData[i] = ((t = {})[E] = w, t.centerOffset = w - k, t)
        }
      },
      effect: function(e) {
        var t = e.state,
          n = e.options.element,
          i = void 0 === n ? "[data-popper-arrow]" : n;
        null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && Fe(t.elements.popper, i) && (t.elements.arrow = i)
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    },
    Ye = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };

  function Xe(e) {
    var t, n = e.popper,
      i = e.popperRect,
      r = e.placement,
      o = e.offsets,
      s = e.position,
      a = e.gpuAcceleration,
      u = e.adaptive,
      l = e.roundOffsets,
      c = !0 === l ? function(e) {
        var t = e.x,
          n = e.y,
          i = window.devicePixelRatio || 1;
        return {
          x: Ve(Ve(t * i) / i) || 0,
          y: Ve(Ve(n * i) / i) || 0
        }
      }(o) : "function" == typeof l ? l(o) : o,
      f = c.x,
      h = void 0 === f ? 0 : f,
      d = c.y,
      p = void 0 === d ? 0 : d,
      g = o.hasOwnProperty("x"),
      v = o.hasOwnProperty("y"),
      m = ne,
      y = J,
      b = window;
    if (u) {
      var _ = Ie(n),
        k = "clientHeight",
        w = "clientWidth";
      _ === xe(n) && "static" !== je(_ = Pe(n)).position && (k = "scrollHeight", w = "scrollWidth"), _ = _, r === J && (y = ee, p -= _[k] - i.height, p *= a ? 1 : -1), r === ne && (m = te, h -= _[w] - i.width, h *= a ? 1 : -1)
    }
    var E, x = Object.assign({
      position: s
    }, u && Ye);
    return a ? Object.assign({}, x, ((E = {})[y] = v ? "0" : "", E[m] = g ? "0" : "", E.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)", E)) : Object.assign({}, x, ((t = {})[y] = v ? p + "px" : "", t[m] = g ? h + "px" : "", t.transform = "", t))
  }
  var Ke = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function(e) {
        var t = e.state,
          n = e.options,
          i = n.gpuAcceleration,
          r = void 0 === i || i,
          o = n.adaptive,
          s = void 0 === o || o,
          a = n.roundOffsets,
          u = void 0 === a || a,
          l = {
            placement: De(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: r
          };
        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Xe(Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: u
        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xe(Object.assign({}, l, {
          offsets: t.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: u
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement
        })
      },
      data: {}
    },
    Qe = {
      passive: !0
    };
  var Ge = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function() {},
      effect: function(e) {
        var t = e.state,
          n = e.instance,
          i = e.options,
          r = i.scroll,
          o = void 0 === r || r,
          s = i.resize,
          a = void 0 === s || s,
          u = xe(t.elements.popper),
          l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return o && l.forEach((function(e) {
            e.addEventListener("scroll", n.update, Qe)
          })), a && u.addEventListener("resize", n.update, Qe),
          function() {
            o && l.forEach((function(e) {
              e.removeEventListener("scroll", n.update, Qe)
            })), a && u.removeEventListener("resize", n.update, Qe)
          }
      },
      data: {}
    },
    Ze = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };

  function Je(e) {
    return e.replace(/left|right|bottom|top/g, (function(e) {
      return Ze[e]
    }))
  }
  var et = {
    start: "end",
    end: "start"
  };

  function tt(e) {
    return e.replace(/start|end/g, (function(e) {
      return et[e]
    }))
  }

  function nt(e) {
    var t = xe(e);
    return {
      scrollLeft: t.pageXOffset,
      scrollTop: t.pageYOffset
    }
  }

  function it(e) {
    return Le(Pe(e)).left + nt(e).scrollLeft
  }

  function rt(e) {
    var t = je(e),
      n = t.overflow,
      i = t.overflowX,
      r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + i)
  }

  function ot(e) {
    return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : Ce(e) && rt(e) ? e : ot(Be(e))
  }

  function st(e, t) {
    var n;
    void 0 === t && (t = []);
    var i = ot(e),
      r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
      o = xe(i),
      s = r ? [o].concat(o.visualViewport || [], rt(i) ? i : []) : i,
      a = t.concat(s);
    return r ? a : a.concat(st(Be(s)))
  }

  function at(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    })
  }

  function ut(e, t) {
    return t === ue ? at(function(e) {
      var t = xe(e),
        n = Pe(e),
        i = t.visualViewport,
        r = n.clientWidth,
        o = n.clientHeight,
        s = 0,
        a = 0;
      return i && (r = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
        width: r,
        height: o,
        x: s + it(e),
        y: a
      }
    }(e)) : Ce(t) ? function(e) {
      var t = Le(e);
      return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
    }(t) : at(function(e) {
      var t, n = Pe(e),
        i = nt(e),
        r = null == (t = e.ownerDocument) ? void 0 : t.body,
        o = He(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
        s = He(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
        a = -i.scrollLeft + it(e),
        u = -i.scrollTop;
      return "rtl" === je(r || n).direction && (a += He(n.clientWidth, r ? r.clientWidth : 0) - o), {
        width: o,
        height: s,
        x: a,
        y: u
      }
    }(Pe(e)))
  }

  function lt(e, t, n) {
    var i = "clippingParents" === t ? function(e) {
        var t = st(Be(e)),
          n = ["absolute", "fixed"].indexOf(je(e).position) >= 0 && Ce(e) ? Ie(e) : e;
        return Ae(n) ? t.filter((function(e) {
          return Ae(e) && Fe(e, n) && "body" !== Ee(e)
        })) : []
      }(e) : [].concat(t),
      r = [].concat(i, [n]),
      o = r[0],
      s = r.reduce((function(t, n) {
        var i = ut(e, n);
        return t.top = He(i.top, t.top), t.right = qe(i.right, t.right), t.bottom = qe(i.bottom, t.bottom), t.left = He(i.left, t.left), t
      }), ut(e, o));
    return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
  }

  function ct(e) {
    return e.split("-")[1]
  }

  function ft(e) {
    var t, n = e.reference,
      i = e.element,
      r = e.placement,
      o = r ? De(r) : null,
      s = r ? ct(r) : null,
      a = n.x + n.width / 2 - i.width / 2,
      u = n.y + n.height / 2 - i.height / 2;
    switch (o) {
      case J:
        t = {
          x: a,
          y: n.y - i.height
        };
        break;
      case ee:
        t = {
          x: a,
          y: n.y + n.height
        };
        break;
      case te:
        t = {
          x: n.x + n.width,
          y: u
        };
        break;
      case ne:
        t = {
          x: n.x - i.width,
          y: u
        };
        break;
      default:
        t = {
          x: n.x,
          y: n.y
        }
    }
    var l = o ? Re(o) : null;
    if (null != l) {
      var c = "y" === l ? "height" : "width";
      switch (s) {
        case oe:
          t[l] = t[l] - (n[c] / 2 - i[c] / 2);
          break;
        case se:
          t[l] = t[l] + (n[c] / 2 - i[c] / 2)
      }
    }
    return t
  }

  function ht(e, t) {
    void 0 === t && (t = {});
    var n = t,
      i = n.placement,
      r = void 0 === i ? e.placement : i,
      o = n.boundary,
      s = void 0 === o ? ae : o,
      a = n.rootBoundary,
      u = void 0 === a ? ue : a,
      l = n.elementContext,
      c = void 0 === l ? le : l,
      f = n.altBoundary,
      h = void 0 !== f && f,
      d = n.padding,
      p = void 0 === d ? 0 : d,
      g = ze("number" != typeof p ? p : Ue(p, re)),
      v = c === le ? ce : le,
      m = e.elements.reference,
      y = e.rects.popper,
      b = e.elements[h ? v : c],
      _ = lt(Ae(b) ? b : b.contextElement || Pe(e.elements.popper), s, u),
      k = Le(m),
      w = ft({
        reference: k,
        element: y,
        strategy: "absolute",
        placement: r
      }),
      E = at(Object.assign({}, y, w)),
      x = c === le ? E : k,
      A = {
        top: _.top - x.top + g.top,
        bottom: x.bottom - _.bottom + g.bottom,
        left: _.left - x.left + g.left,
        right: x.right - _.right + g.right
      },
      C = e.modifiersData.offset;
    if (c === le && C) {
      var T = C[r];
      Object.keys(A).forEach((function(e) {
        var t = [te, ee].indexOf(e) >= 0 ? 1 : -1,
          n = [J, ee].indexOf(e) >= 0 ? "y" : "x";
        A[e] += T[n] * t
      }))
    }
    return A
  }

  function dt(e, t) {
    void 0 === t && (t = {});
    var n = t,
      i = n.placement,
      r = n.boundary,
      o = n.rootBoundary,
      s = n.padding,
      a = n.flipVariations,
      u = n.allowedAutoPlacements,
      l = void 0 === u ? he : u,
      c = ct(i),
      f = c ? a ? fe : fe.filter((function(e) {
        return ct(e) === c
      })) : re,
      h = f.filter((function(e) {
        return l.indexOf(e) >= 0
      }));
    0 === h.length && (h = f);
    var d = h.reduce((function(t, n) {
      return t[n] = ht(e, {
        placement: n,
        boundary: r,
        rootBoundary: o,
        padding: s
      })[De(n)], t
    }), {});
    return Object.keys(d).sort((function(e, t) {
      return d[e] - d[t]
    }))
  }
  var pt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function(e) {
      var t = e.state,
        n = e.options,
        i = e.name;
      if (!t.modifiersData[i]._skip) {
        for (var r = n.mainAxis, o = void 0 === r || r, s = n.altAxis, a = void 0 === s || s, u = n.fallbackPlacements, l = n.padding, c = n.boundary, f = n.rootBoundary, h = n.altBoundary, d = n.flipVariations, p = void 0 === d || d, g = n.allowedAutoPlacements, v = t.options.placement, m = De(v), y = u || (m === v || !p ? [Je(v)] : function(e) {
            if (De(e) === ie) return [];
            var t = Je(e);
            return [tt(e), t, tt(t)]
          }(v)), b = [v].concat(y).reduce((function(e, n) {
            return e.concat(De(n) === ie ? dt(t, {
              placement: n,
              boundary: c,
              rootBoundary: f,
              padding: l,
              flipVariations: p,
              allowedAutoPlacements: g
            }) : n)
          }), []), _ = t.rects.reference, k = t.rects.popper, w = new Map, E = !0, x = b[0], A = 0; A < b.length; A++) {
          var C = b[A],
            T = De(C),
            S = ct(C) === oe,
            D = [J, ee].indexOf(T) >= 0,
            L = D ? "width" : "height",
            O = ht(t, {
              placement: C,
              boundary: c,
              rootBoundary: f,
              altBoundary: h,
              padding: l
            }),
            F = D ? S ? te : ne : S ? ee : J;
          _[L] > k[L] && (F = Je(F));
          var j = Je(F),
            N = [];
          if (o && N.push(O[T] <= 0), a && N.push(O[F] <= 0, O[j] <= 0), N.every((function(e) {
              return e
            }))) {
            x = C, E = !1;
            break
          }
          w.set(C, N)
        }
        if (E)
          for (var P = function(e) {
              var t = b.find((function(t) {
                var n = w.get(t);
                if (n) return n.slice(0, e).every((function(e) {
                  return e
                }))
              }));
              if (t) return x = t, "break"
            }, B = p ? 3 : 1; B > 0; B--) {
            if ("break" === P(B)) break
          }
        t.placement !== x && (t.modifiersData[i]._skip = !0, t.placement = x, t.reset = !0)
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function gt(e, t, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  }

  function vt(e) {
    return [J, te, ee, ne].some((function(t) {
      return e[t] >= 0
    }))
  }
  var mt = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function(e) {
      var t = e.state,
        n = e.name,
        i = t.rects.reference,
        r = t.rects.popper,
        o = t.modifiersData.preventOverflow,
        s = ht(t, {
          elementContext: "reference"
        }),
        a = ht(t, {
          altBoundary: !0
        }),
        u = gt(s, i),
        l = gt(a, r, o),
        c = vt(u),
        f = vt(l);
      t.modifiersData[n] = {
        referenceClippingOffsets: u,
        popperEscapeOffsets: l,
        isReferenceHidden: c,
        hasPopperEscaped: f
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f
      })
    }
  };
  var yt = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function(e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        r = n.offset,
        o = void 0 === r ? [0, 0] : r,
        s = he.reduce((function(e, n) {
          return e[n] = function(e, t, n) {
            var i = De(e),
              r = [ne, J].indexOf(i) >= 0 ? -1 : 1,
              o = "function" == typeof n ? n(Object.assign({}, t, {
                placement: e
              })) : n,
              s = o[0],
              a = o[1];
            return s = s || 0, a = (a || 0) * r, [ne, te].indexOf(i) >= 0 ? {
              x: a,
              y: s
            } : {
              x: s,
              y: a
            }
          }(n, t.rects, o), e
        }), {}),
        a = s[t.placement],
        u = a.x,
        l = a.y;
      null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += l), t.modifiersData[i] = s
    }
  };
  var bt = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function(e) {
      var t = e.state,
        n = e.name;
      t.modifiersData[n] = ft({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      })
    },
    data: {}
  };
  var _t = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        r = n.mainAxis,
        o = void 0 === r || r,
        s = n.altAxis,
        a = void 0 !== s && s,
        u = n.boundary,
        l = n.rootBoundary,
        c = n.altBoundary,
        f = n.padding,
        h = n.tether,
        d = void 0 === h || h,
        p = n.tetherOffset,
        g = void 0 === p ? 0 : p,
        v = ht(t, {
          boundary: u,
          rootBoundary: l,
          padding: f,
          altBoundary: c
        }),
        m = De(t.placement),
        y = ct(t.placement),
        b = !y,
        _ = Re(m),
        k = "x" === _ ? "y" : "x",
        w = t.modifiersData.popperOffsets,
        E = t.rects.reference,
        x = t.rects.popper,
        A = "function" == typeof g ? g(Object.assign({}, t.rects, {
          placement: t.placement
        })) : g,
        C = {
          x: 0,
          y: 0
        };
      if (w) {
        if (o || a) {
          var T = "y" === _ ? J : ne,
            S = "y" === _ ? ee : te,
            D = "y" === _ ? "height" : "width",
            L = w[_],
            O = w[_] + v[T],
            F = w[_] - v[S],
            j = d ? -x[D] / 2 : 0,
            N = y === oe ? E[D] : x[D],
            P = y === oe ? -x[D] : -E[D],
            B = t.elements.arrow,
            M = d && B ? Oe(B) : {
              width: 0,
              height: 0
            },
            I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            R = I[T],
            H = I[S],
            q = We(0, E[D], M[D]),
            V = b ? E[D] / 2 - j - q - R - A : N - q - R - A,
            W = b ? -E[D] / 2 + j + q + H + A : P + q + H + A,
            z = t.elements.arrow && Ie(t.elements.arrow),
            U = z ? "y" === _ ? z.clientTop || 0 : z.clientLeft || 0 : 0,
            $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
            Y = w[_] + V - $ - U,
            X = w[_] + W - $;
          if (o) {
            var K = We(d ? qe(O, Y) : O, L, d ? He(F, X) : F);
            w[_] = K, C[_] = K - L
          }
          if (a) {
            var Q = "x" === _ ? J : ne,
              G = "x" === _ ? ee : te,
              Z = w[k],
              ie = Z + v[Q],
              re = Z - v[G],
              se = We(d ? qe(ie, Y) : ie, Z, d ? He(re, X) : re);
            w[k] = se, C[k] = se - Z
          }
        }
        t.modifiersData[i] = C
      }
    },
    requiresIfExists: ["offset"]
  };

  function kt(e, t, n) {
    void 0 === n && (n = !1);
    var i, r, o = Pe(t),
      s = Le(e),
      a = Ce(t),
      u = {
        scrollLeft: 0,
        scrollTop: 0
      },
      l = {
        x: 0,
        y: 0
      };
    return (a || !a && !n) && (("body" !== Ee(t) || rt(o)) && (u = (i = t) !== xe(i) && Ce(i) ? {
      scrollLeft: (r = i).scrollLeft,
      scrollTop: r.scrollTop
    } : nt(i)), Ce(t) ? ((l = Le(t)).x += t.clientLeft, l.y += t.clientTop) : o && (l.x = it(o))), {
      x: s.left + u.scrollLeft - l.x,
      y: s.top + u.scrollTop - l.y,
      width: s.width,
      height: s.height
    }
  }

  function wt(e) {
    var t = new Map,
      n = new Set,
      i = [];

    function r(e) {
      n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
        if (!n.has(e)) {
          var i = t.get(e);
          i && r(i)
        }
      })), i.push(e)
    }
    return e.forEach((function(e) {
      t.set(e.name, e)
    })), e.forEach((function(e) {
      n.has(e.name) || r(e)
    })), i
  }
  var Et = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function xt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some((function(e) {
      return !(e && "function" == typeof e.getBoundingClientRect)
    }))
  }

  function At(e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      i = void 0 === n ? [] : n,
      r = t.defaultOptions,
      o = void 0 === r ? Et : r;
    return function(e, t, n) {
      void 0 === n && (n = o);
      var r, s, a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Et, o),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        },
        u = [],
        l = !1,
        c = {
          state: a,
          setOptions: function(n) {
            f(), a.options = Object.assign({}, o, a.options, n), a.scrollParents = {
              reference: Ae(e) ? st(e) : e.contextElement ? st(e.contextElement) : [],
              popper: st(t)
            };
            var r, s, l = function(e) {
              var t = wt(e);
              return we.reduce((function(e, n) {
                return e.concat(t.filter((function(e) {
                  return e.phase === n
                })))
              }), [])
            }((r = [].concat(i, a.options.modifiers), s = r.reduce((function(e, t) {
              var n = e[t.name];
              return e[t.name] = n ? Object.assign({}, n, t, {
                options: Object.assign({}, n.options, t.options),
                data: Object.assign({}, n.data, t.data)
              }) : t, e
            }), {}), Object.keys(s).map((function(e) {
              return s[e]
            }))));
            return a.orderedModifiers = l.filter((function(e) {
              return e.enabled
            })), a.orderedModifiers.forEach((function(e) {
              var t = e.name,
                n = e.options,
                i = void 0 === n ? {} : n,
                r = e.effect;
              if ("function" == typeof r) {
                var o = r({
                    state: a,
                    name: t,
                    instance: c,
                    options: i
                  }),
                  s = function() {};
                u.push(o || s)
              }
            })), c.update()
          },
          forceUpdate: function() {
            if (!l) {
              var e = a.elements,
                t = e.reference,
                n = e.popper;
              if (xt(t, n)) {
                a.rects = {
                  reference: kt(t, Ie(n), "fixed" === a.options.strategy),
                  popper: Oe(n)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                  return a.modifiersData[e.name] = Object.assign({}, e.data)
                }));
                for (var i = 0; i < a.orderedModifiers.length; i++)
                  if (!0 !== a.reset) {
                    var r = a.orderedModifiers[i],
                      o = r.fn,
                      s = r.options,
                      u = void 0 === s ? {} : s,
                      f = r.name;
                    "function" == typeof o && (a = o({
                      state: a,
                      options: u,
                      name: f,
                      instance: c
                    }) || a)
                  } else a.reset = !1, i = -1
              }
            }
          },
          update: (r = function() {
            return new Promise((function(e) {
              c.forceUpdate(), e(a)
            }))
          }, function() {
            return s || (s = new Promise((function(e) {
              Promise.resolve().then((function() {
                s = void 0, e(r())
              }))
            }))), s
          }),
          destroy: function() {
            f(), l = !0
          }
        };
      if (!xt(e, t)) return c;

      function f() {
        u.forEach((function(e) {
          return e()
        })), u = []
      }
      return c.setOptions(n).then((function(e) {
        !l && n.onFirstUpdate && n.onFirstUpdate(e)
      })), c
    }
  }
  var Ct = At(),
    Tt = At({
      defaultModifiers: [Ge, bt, Ke, Se]
    }),
    St = At({
      defaultModifiers: [Ge, bt, Ke, Se, yt, pt, _t, $e, mt]
    }),
    Dt = Object.freeze({
      __proto__: null,
      popperGenerator: At,
      detectOverflow: ht,
      createPopperBase: Ct,
      createPopper: St,
      createPopperLite: Tt,
      top: J,
      bottom: ee,
      right: te,
      left: ne,
      auto: ie,
      basePlacements: re,
      start: oe,
      end: se,
      clippingParents: ae,
      viewport: ue,
      popper: le,
      reference: ce,
      variationPlacements: fe,
      placements: he,
      beforeRead: de,
      read: pe,
      afterRead: ge,
      beforeMain: ve,
      main: me,
      afterMain: ye,
      beforeWrite: be,
      write: _e,
      afterWrite: ke,
      modifierPhases: we,
      applyStyles: Se,
      arrow: $e,
      computeStyles: Ke,
      eventListeners: Ge,
      flip: pt,
      hide: mt,
      offset: yt,
      popperOffsets: bt,
      preventOverflow: _t
    });

  function Lt(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  function Ot(e, t, n) {
    return t && Lt(e.prototype, t), n && Lt(e, n), e
  }

  function Ft() {
    return (Ft = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
      }
      return e
    }).apply(this, arguments)
  }

  function jt(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nt(e, t)
  }

  function Nt(e, t) {
    return (Nt = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var Pt, Bt, Mt = "transitionend",
    It = function(e) {
      do {
        e += Math.floor(1e6 * Math.random())
      } while (document.getElementById(e));
      return e
    },
    Rt = function(e) {
      var t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
        n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null
      }
      return t
    },
    Ht = function(e) {
      var t = Rt(e);
      return t && document.querySelector(t) ? t : null
    },
    qt = function(e) {
      var t = Rt(e);
      return t ? document.querySelector(t) : null
    },
    Vt = function(e) {
      if (!e) return 0;
      var t = window.getComputedStyle(e),
        n = t.transitionDuration,
        i = t.transitionDelay,
        r = Number.parseFloat(n),
        o = Number.parseFloat(i);
      return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
    },
    Wt = function(e) {
      e.dispatchEvent(new Event(Mt))
    },
    zt = function(e) {
      return (e[0] || e).nodeType
    },
    Ut = function(e, t) {
      var n = !1,
        i = t + 5;
      e.addEventListener(Mt, (function t() {
        n = !0, e.removeEventListener(Mt, t)
      })), setTimeout((function() {
        n || Wt(e)
      }), i)
    },
    $t = function(e, t, n) {
      Object.keys(n).forEach((function(i) {
        var r, o = n[i],
          s = t[i],
          a = s && zt(s) ? "element" : null == (r = s) ? "" + r : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(o).test(a)) throw new TypeError(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
      }))
    },
    Yt = function(e) {
      if (!e) return !1;
      if (e.style && e.parentNode && e.parentNode.style) {
        var t = getComputedStyle(e),
          n = getComputedStyle(e.parentNode);
        return "none" !== t.display && "none" !== n.display && "hidden" !== t.visibility
      }
      return !1
    },
    Xt = function e(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var n = t.getRootNode();
        return n instanceof ShadowRoot ? n : null
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null
    },
    Kt = function() {
      return function() {}
    },
    Qt = function(e) {
      return e.offsetHeight
    },
    Gt = function() {
      var e = window.jQuery;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
    },
    Zt = "rtl" === document.documentElement.dir,
    Jt = function(e, t) {
      var n;
      n = function() {
        var n = Gt();
        if (n) {
          var i = n.fn[e];
          n.fn[e] = t.jQueryInterface, n.fn[e].Constructor = t, n.fn[e].noConflict = function() {
            return n.fn[e] = i, t.jQueryInterface
          }
        }
      }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n()
    },
    en = (Pt = {}, Bt = 1, {
      set: function(e, t, n) {
        void 0 === e.bsKey && (e.bsKey = {
          key: t,
          id: Bt
        }, Bt++), Pt[e.bsKey.id] = n
      },
      get: function(e, t) {
        if (!e || void 0 === e.bsKey) return null;
        var n = e.bsKey;
        return n.key === t ? Pt[n.id] : null
      },
      delete: function(e, t) {
        if (void 0 !== e.bsKey) {
          var n = e.bsKey;
          n.key === t && (delete Pt[n.id], delete e.bsKey)
        }
      }
    }),
    tn = function(e, t, n) {
      en.set(e, t, n)
    },
    nn = function(e, t) {
      return en.get(e, t)
    },
    rn = function(e, t) {
      en.delete(e, t)
    },
    on = /[^.]*(?=\..*)\.|.*/,
    sn = /\..*/,
    an = /::\d+$/,
    un = {},
    ln = 1,
    cn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    fn = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function hn(e, t) {
    return t && t + "::" + ln++ || e.uidEvent || ln++
  }

  function dn(e) {
    var t = hn(e);
    return e.uidEvent = t, un[t] = un[t] || {}, un[t]
  }

  function pn(e, t, n) {
    void 0 === n && (n = null);
    for (var i = Object.keys(e), r = 0, o = i.length; r < o; r++) {
      var s = e[i[r]];
      if (s.originalHandler === t && s.delegationSelector === n) return s
    }
    return null
  }

  function gn(e, t, n) {
    var i = "string" == typeof t,
      r = i ? n : t,
      o = e.replace(sn, ""),
      s = cn[o];
    return s && (o = s), fn.has(o) || (o = e), [i, r, o]
  }

  function vn(e, t, n, i, r) {
    if ("string" == typeof t && e) {
      n || (n = i, i = null);
      var o = gn(t, n, i),
        s = o[0],
        a = o[1],
        u = o[2],
        l = dn(e),
        c = l[u] || (l[u] = {}),
        f = pn(c, a, s ? n : null);
      if (f) f.oneOff = f.oneOff && r;
      else {
        var h = hn(a, t.replace(on, "")),
          d = s ? function(e, t, n) {
            return function i(r) {
              for (var o = e.querySelectorAll(t), s = r.target; s && s !== this; s = s.parentNode)
                for (var a = o.length; a--;)
                  if (o[a] === s) return r.delegateTarget = s, i.oneOff && yn.off(e, r.type, n), n.apply(s, [r]);
              return null
            }
          }(e, n, i) : function(e, t) {
            return function n(i) {
              return i.delegateTarget = e, n.oneOff && yn.off(e, i.type, t), t.apply(e, [i])
            }
          }(e, n);
        d.delegationSelector = s ? n : null, d.originalHandler = a, d.oneOff = r, d.uidEvent = h, c[h] = d, e.addEventListener(u, d, s)
      }
    }
  }

  function mn(e, t, n, i, r) {
    var o = pn(t[n], i, r);
    o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent])
  }
  var yn = {
      on: function(e, t, n, i) {
        vn(e, t, n, i, !1)
      },
      one: function(e, t, n, i) {
        vn(e, t, n, i, !0)
      },
      off: function(e, t, n, i) {
        if ("string" == typeof t && e) {
          var r = gn(t, n, i),
            o = r[0],
            s = r[1],
            a = r[2],
            u = a !== t,
            l = dn(e),
            c = t.startsWith(".");
          if (void 0 === s) {
            c && Object.keys(l).forEach((function(n) {
              ! function(e, t, n, i) {
                var r = t[n] || {};
                Object.keys(r).forEach((function(o) {
                  if (o.includes(i)) {
                    var s = r[o];
                    mn(e, t, n, s.originalHandler, s.delegationSelector)
                  }
                }))
              }(e, l, n, t.slice(1))
            }));
            var f = l[a] || {};
            Object.keys(f).forEach((function(n) {
              var i = n.replace(an, "");
              if (!u || t.includes(i)) {
                var r = f[n];
                mn(e, l, a, r.originalHandler, r.delegationSelector)
              }
            }))
          } else {
            if (!l || !l[a]) return;
            mn(e, l, a, s, o ? n : null)
          }
        }
      },
      trigger: function(e, t, n) {
        if ("string" != typeof t || !e) return null;
        var i, r = Gt(),
          o = t.replace(sn, ""),
          s = t !== o,
          a = fn.has(o),
          u = !0,
          l = !0,
          c = !1,
          f = null;
        return s && r && (i = r.Event(t, n), r(e).trigger(i), u = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents")).initEvent(o, u, !0) : f = new CustomEvent(t, {
          bubbles: u,
          cancelable: !0
        }), void 0 !== n && Object.keys(n).forEach((function(e) {
          Object.defineProperty(f, e, {
            get: function() {
              return n[e]
            }
          })
        })), c && f.preventDefault(), l && e.dispatchEvent(f), f.defaultPrevented && void 0 !== i && i.preventDefault(), f
      }
    },
    bn = function() {
      function e(e) {
        e && (this._element = e, tn(e, this.constructor.DATA_KEY, this))
      }
      return e.prototype.dispose = function() {
        rn(this._element, this.constructor.DATA_KEY), this._element = null
      }, e.getInstance = function(e) {
        return nn(e, this.DATA_KEY)
      }, Ot(e, null, [{
        key: "VERSION",
        get: function() {
          return "5.0.0-beta2"
        }
      }]), e
    }(),
    _n = "bs.alert",
    kn = function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      jt(t, e);
      var n = t.prototype;
      return n.close = function(e) {
        var t = e ? this._getRootElement(e) : this._element,
          n = this._triggerCloseEvent(t);
        null === n || n.defaultPrevented || this._removeElement(t)
      }, n._getRootElement = function(e) {
        return qt(e) || e.closest(".alert")
      }, n._triggerCloseEvent = function(e) {
        return yn.trigger(e, "close.bs.alert")
      }, n._removeElement = function(e) {
        var t = this;
        if (e.classList.remove("show"), e.classList.contains("fade")) {
          var n = Vt(e);
          yn.one(e, "transitionend", (function() {
            return t._destroyElement(e)
          })), Ut(e, n)
        } else this._destroyElement(e)
      }, n._destroyElement = function(e) {
        e.parentNode && e.parentNode.removeChild(e), yn.trigger(e, "closed.bs.alert")
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, _n);
          n || (n = new t(this)), "close" === e && n[e](this)
        }))
      }, t.handleDismiss = function(e) {
        return function(t) {
          t && t.preventDefault(), e.close(this)
        }
      }, Ot(t, null, [{
        key: "DATA_KEY",
        get: function() {
          return _n
        }
      }]), t
    }(bn);
  yn.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', kn.handleDismiss(new kn)), Jt("alert", kn);
  var wn = "bs.button",
    En = '[data-bs-toggle="button"]',
    xn = function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return jt(t, e), t.prototype.toggle = function() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, wn);
          n || (n = new t(this)), "toggle" === e && n[e]()
        }))
      }, Ot(t, null, [{
        key: "DATA_KEY",
        get: function() {
          return wn
        }
      }]), t
    }(bn);

  function An(e) {
    return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
  }

  function Cn(e) {
    return e.replace(/[A-Z]/g, (function(e) {
      return "-" + e.toLowerCase()
    }))
  }
  yn.on(document, "click.bs.button.data-api", En, (function(e) {
    e.preventDefault();
    var t = e.target.closest(En),
      n = nn(t, wn);
    n || (n = new xn(t)), n.toggle()
  })), Jt("button", xn);
  var Tn = {
      setDataAttribute: function(e, t, n) {
        e.setAttribute("data-bs-" + Cn(t), n)
      },
      removeDataAttribute: function(e, t) {
        e.removeAttribute("data-bs-" + Cn(t))
      },
      getDataAttributes: function(e) {
        if (!e) return {};
        var t = {};
        return Object.keys(e.dataset).filter((function(e) {
          return e.startsWith("bs")
        })).forEach((function(n) {
          var i = n.replace(/^bs/, "");
          i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = An(e.dataset[n])
        })), t
      },
      getDataAttribute: function(e, t) {
        return An(e.getAttribute("data-bs-" + Cn(t)))
      },
      offset: function(e) {
        var t = e.getBoundingClientRect();
        return {
          top: t.top + document.body.scrollTop,
          left: t.left + document.body.scrollLeft
        }
      },
      position: function(e) {
        return {
          top: e.offsetTop,
          left: e.offsetLeft
        }
      }
    },
    Sn = function(e, t) {
      var n;
      return void 0 === t && (t = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(t, e))
    },
    Dn = function(e, t) {
      return void 0 === t && (t = document.documentElement), Element.prototype.querySelector.call(t, e)
    },
    Ln = function(e, t) {
      var n;
      return (n = []).concat.apply(n, e.children).filter((function(e) {
        return e.matches(t)
      }))
    },
    On = function(e, t) {
      for (var n = [], i = e.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(t) && n.push(i), i = i.parentNode;
      return n
    },
    Fn = function(e, t) {
      for (var n = e.previousElementSibling; n;) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling
      }
      return []
    },
    jn = function(e, t) {
      for (var n = e.nextElementSibling; n;) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling
      }
      return []
    },
    Nn = "carousel",
    Pn = "bs.carousel",
    Bn = ".bs.carousel",
    Mn = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    In = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    Rn = "next",
    Hn = "prev",
    qn = "slid.bs.carousel",
    Vn = "active",
    Wn = ".active.carousel-item",
    zn = "touch",
    Un = function(e) {
      function t(t, n) {
        var i;
        return (i = e.call(this, t) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = Dn(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i
      }
      jt(t, e);
      var n = t.prototype;
      return n.next = function() {
        this._isSliding || this._slide(Rn)
      }, n.nextWhenVisible = function() {
        !document.hidden && Yt(this._element) && this.next()
      }, n.prev = function() {
        this._isSliding || this._slide(Hn)
      }, n.pause = function(e) {
        e || (this._isPaused = !0), Dn(".carousel-item-next, .carousel-item-prev", this._element) && (Wt(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, n.cycle = function(e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, n.to = function(e) {
        var t = this;
        this._activeElement = Dn(Wn, this._element);
        var n = this._getItemIndex(this._activeElement);
        if (!(e > this._items.length - 1 || e < 0))
          if (this._isSliding) yn.one(this._element, qn, (function() {
            return t.to(e)
          }));
          else {
            if (n === e) return this.pause(), void this.cycle();
            var i = e > n ? Rn : Hn;
            this._slide(i, this._items[e])
          }
      }, n.dispose = function() {
        e.prototype.dispose.call(this), yn.off(this._element, Bn), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, n._getConfig = function(e) {
        return e = Ft({}, Mn, e), $t(Nn, e, In), e
      }, n._handleSwipe = function() {
        var e = Math.abs(this.touchDeltaX);
        if (!(e <= 40)) {
          var t = e / this.touchDeltaX;
          this.touchDeltaX = 0, t > 0 && (Zt ? this.next() : this.prev()), t < 0 && (Zt ? this.prev() : this.next())
        }
      }, n._addEventListeners = function() {
        var e = this;
        this._config.keyboard && yn.on(this._element, "keydown.bs.carousel", (function(t) {
          return e._keydown(t)
        })), "hover" === this._config.pause && (yn.on(this._element, "mouseenter.bs.carousel", (function(t) {
          return e.pause(t)
        })), yn.on(this._element, "mouseleave.bs.carousel", (function(t) {
          return e.cycle(t)
        }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
      }, n._addTouchEventListeners = function() {
        var e = this,
          t = function(t) {
            !e._pointerEvent || "pen" !== t.pointerType && t.pointerType !== zn ? e._pointerEvent || (e.touchStartX = t.touches[0].clientX) : e.touchStartX = t.clientX
          },
          n = function(t) {
            !e._pointerEvent || "pen" !== t.pointerType && t.pointerType !== zn || (e.touchDeltaX = t.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
              return e.cycle(t)
            }), 500 + e._config.interval))
          };
        Sn(".carousel-item img", this._element).forEach((function(e) {
          yn.on(e, "dragstart.bs.carousel", (function(e) {
            return e.preventDefault()
          }))
        })), this._pointerEvent ? (yn.on(this._element, "pointerdown.bs.carousel", (function(e) {
          return t(e)
        })), yn.on(this._element, "pointerup.bs.carousel", (function(e) {
          return n(e)
        })), this._element.classList.add("pointer-event")) : (yn.on(this._element, "touchstart.bs.carousel", (function(e) {
          return t(e)
        })), yn.on(this._element, "touchmove.bs.carousel", (function(t) {
          return function(t) {
            t.touches && t.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.touches[0].clientX - e.touchStartX
          }(t)
        })), yn.on(this._element, "touchend.bs.carousel", (function(e) {
          return n(e)
        })))
      }, n._keydown = function(e) {
        /input|textarea/i.test(e.target.tagName) || ("ArrowLeft" === e.key ? (e.preventDefault(), Zt ? this.next() : this.prev()) : "ArrowRight" === e.key && (e.preventDefault(), Zt ? this.prev() : this.next()))
      }, n._getItemIndex = function(e) {
        return this._items = e && e.parentNode ? Sn(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
      }, n._getItemByDirection = function(e, t) {
        var n = e === Rn,
          i = e === Hn,
          r = this._getItemIndex(t),
          o = this._items.length - 1;
        if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
        var s = (r + (e === Hn ? -1 : 1)) % this._items.length;
        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
      }, n._triggerSlideEvent = function(e, t) {
        var n = this._getItemIndex(e),
          i = this._getItemIndex(Dn(Wn, this._element));
        return yn.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: t,
          from: i,
          to: n
        })
      }, n._setActiveIndicatorElement = function(e) {
        if (this._indicatorsElement) {
          var t = Dn(".active", this._indicatorsElement);
          t.classList.remove(Vn), t.removeAttribute("aria-current");
          for (var n = Sn("[data-bs-target]", this._indicatorsElement), i = 0; i < n.length; i++)
            if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
              n[i].classList.add(Vn), n[i].setAttribute("aria-current", "true");
              break
            }
        }
      }, n._updateInterval = function() {
        var e = this._activeElement || Dn(Wn, this._element);
        if (e) {
          var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
      }, n._slide = function(e, t) {
        var n = this,
          i = Dn(Wn, this._element),
          r = this._getItemIndex(i),
          o = t || i && this._getItemByDirection(e, i),
          s = this._getItemIndex(o),
          a = Boolean(this._interval),
          u = e === Rn ? "carousel-item-start" : "carousel-item-end",
          l = e === Rn ? "carousel-item-next" : "carousel-item-prev",
          c = e === Rn ? "left" : "right";
        if (o && o.classList.contains(Vn)) this._isSliding = !1;
        else if (!this._triggerSlideEvent(o, c).defaultPrevented && i && o) {
          if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o, this._element.classList.contains("slide")) {
            o.classList.add(l), Qt(o), i.classList.add(u), o.classList.add(u);
            var f = Vt(i);
            yn.one(i, "transitionend", (function() {
              o.classList.remove(u, l), o.classList.add(Vn), i.classList.remove(Vn, l, u), n._isSliding = !1, setTimeout((function() {
                yn.trigger(n._element, qn, {
                  relatedTarget: o,
                  direction: c,
                  from: r,
                  to: s
                })
              }), 0)
            })), Ut(i, f)
          } else i.classList.remove(Vn), o.classList.add(Vn), this._isSliding = !1, yn.trigger(this._element, qn, {
            relatedTarget: o,
            direction: c,
            from: r,
            to: s
          });
          a && this.cycle()
        }
      }, t.carouselInterface = function(e, n) {
        var i = nn(e, Pn),
          r = Ft({}, Mn, Tn.getDataAttributes(e));
        "object" == typeof n && (r = Ft({}, r, n));
        var o = "string" == typeof n ? n : r.slide;
        if (i || (i = new t(e, r)), "number" == typeof n) i.to(n);
        else if ("string" == typeof o) {
          if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
          i[o]()
        } else r.interval && r.ride && (i.pause(), i.cycle())
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          t.carouselInterface(this, e)
        }))
      }, t.dataApiClickHandler = function(e) {
        var n = qt(this);
        if (n && n.classList.contains("carousel")) {
          var i = Ft({}, Tn.getDataAttributes(n), Tn.getDataAttributes(this)),
            r = this.getAttribute("data-bs-slide-to");
          r && (i.interval = !1), t.carouselInterface(n, i), r && nn(n, Pn).to(r), e.preventDefault()
        }
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return Mn
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return Pn
        }
      }]), t
    }(bn);
  yn.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Un.dataApiClickHandler), yn.on(window, "load.bs.carousel.data-api", (function() {
    for (var e = Sn('[data-bs-ride="carousel"]'), t = 0, n = e.length; t < n; t++) Un.carouselInterface(e[t], nn(e[t], Pn))
  })), Jt(Nn, Un);
  var $n = "collapse",
    Yn = "bs.collapse",
    Xn = {
      toggle: !0,
      parent: ""
    },
    Kn = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    Qn = "show",
    Gn = "collapse",
    Zn = "collapsing",
    Jn = "collapsed",
    ei = "width",
    ti = '[data-bs-toggle="collapse"]',
    ni = function(e) {
      function t(t, n) {
        var i;
        (i = e.call(this, t) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = Sn(ti + '[href="#' + t.id + '"],' + ti + '[data-bs-target="#' + t.id + '"]');
        for (var r = Sn(ti), o = 0, s = r.length; o < s; o++) {
          var a = r[o],
            u = Ht(a),
            l = Sn(u).filter((function(e) {
              return e === t
            }));
          null !== u && l.length && (i._selector = u, i._triggerArray.push(a))
        }
        return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i
      }
      jt(t, e);
      var n = t.prototype;
      return n.toggle = function() {
        this._element.classList.contains(Qn) ? this.hide() : this.show()
      }, n.show = function() {
        var e = this;
        if (!this._isTransitioning && !this._element.classList.contains(Qn)) {
          var n, i;
          this._parent && 0 === (n = Sn(".show, .collapsing", this._parent).filter((function(t) {
            return "string" == typeof e._config.parent ? t.getAttribute("data-bs-parent") === e._config.parent : t.classList.contains(Gn)
          }))).length && (n = null);
          var r = Dn(this._selector);
          if (n) {
            var o = n.find((function(e) {
              return r !== e
            }));
            if ((i = o ? nn(o, Yn) : null) && i._isTransitioning) return
          }
          if (!yn.trigger(this._element, "show.bs.collapse").defaultPrevented) {
            n && n.forEach((function(e) {
              r !== e && t.collapseInterface(e, "hide"), i || tn(e, Yn, null)
            }));
            var s = this._getDimension();
            this._element.classList.remove(Gn), this._element.classList.add(Zn), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function(e) {
              e.classList.remove(Jn), e.setAttribute("aria-expanded", !0)
            })), this.setTransitioning(!0);
            var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              u = Vt(this._element);
            yn.one(this._element, "transitionend", (function() {
              e._element.classList.remove(Zn), e._element.classList.add(Gn, Qn), e._element.style[s] = "", e.setTransitioning(!1), yn.trigger(e._element, "shown.bs.collapse")
            })), Ut(this._element, u), this._element.style[s] = this._element[a] + "px"
          }
        }
      }, n.hide = function() {
        var e = this;
        if (!this._isTransitioning && this._element.classList.contains(Qn) && !yn.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
          var t = this._getDimension();
          this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", Qt(this._element), this._element.classList.add(Zn), this._element.classList.remove(Gn, Qn);
          var n = this._triggerArray.length;
          if (n > 0)
            for (var i = 0; i < n; i++) {
              var r = this._triggerArray[i],
                o = qt(r);
              o && !o.classList.contains(Qn) && (r.classList.add(Jn), r.setAttribute("aria-expanded", !1))
            }
          this.setTransitioning(!0);
          this._element.style[t] = "";
          var s = Vt(this._element);
          yn.one(this._element, "transitionend", (function() {
            e.setTransitioning(!1), e._element.classList.remove(Zn), e._element.classList.add(Gn), yn.trigger(e._element, "hidden.bs.collapse")
          })), Ut(this._element, s)
        }
      }, n.setTransitioning = function(e) {
        this._isTransitioning = e
      }, n.dispose = function() {
        e.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
      }, n._getConfig = function(e) {
        return (e = Ft({}, Xn, e)).toggle = Boolean(e.toggle), $t($n, e, Kn), e
      }, n._getDimension = function() {
        return this._element.classList.contains(ei) ? ei : "height"
      }, n._getParent = function() {
        var e = this,
          t = this._config.parent;
        return zt(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = Dn(t), Sn(ti + '[data-bs-parent="' + t + '"]', t).forEach((function(t) {
          var n = qt(t);
          e._addAriaAndCollapsedClass(n, [t])
        })), t
      }, n._addAriaAndCollapsedClass = function(e, t) {
        if (e && t.length) {
          var n = e.classList.contains(Qn);
          t.forEach((function(e) {
            n ? e.classList.remove(Jn) : e.classList.add(Jn), e.setAttribute("aria-expanded", n)
          }))
        }
      }, t.collapseInterface = function(e, n) {
        var i = nn(e, Yn),
          r = Ft({}, Xn, Tn.getDataAttributes(e), "object" == typeof n && n ? n : {});
        if (!i && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), i || (i = new t(e, r)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]()
        }
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          t.collapseInterface(this, e)
        }))
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return Xn
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return Yn
        }
      }]), t
    }(bn);
  yn.on(document, "click.bs.collapse.data-api", ti, (function(e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    var t = Tn.getDataAttributes(this),
      n = Ht(this);
    Sn(n).forEach((function(e) {
      var n, i = nn(e, Yn);
      i ? (null === i._parent && "string" == typeof t.parent && (i._config.parent = t.parent, i._parent = i._getParent()), n = "toggle") : n = t, ni.collapseInterface(e, n)
    }))
  })), Jt($n, ni);
  var ii = "dropdown",
    ri = "bs.dropdown",
    oi = ".bs.dropdown",
    si = "Escape",
    ai = "Space",
    ui = "ArrowUp",
    li = "ArrowDown",
    ci = new RegExp("ArrowUp|ArrowDown|Escape"),
    fi = "hide.bs.dropdown",
    hi = "hidden.bs.dropdown",
    di = "click.bs.dropdown.data-api",
    pi = "keydown.bs.dropdown.data-api",
    gi = "disabled",
    vi = "show",
    mi = '[data-bs-toggle="dropdown"]',
    yi = ".dropdown-menu",
    bi = Zt ? "top-end" : "top-start",
    _i = Zt ? "top-start" : "top-end",
    ki = Zt ? "bottom-end" : "bottom-start",
    wi = Zt ? "bottom-start" : "bottom-end",
    Ei = Zt ? "left-start" : "right-start",
    xi = Zt ? "right-start" : "left-start",
    Ai = {
      offset: [0, 2],
      flip: !0,
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    },
    Ci = {
      offset: "(array|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)"
    },
    Ti = function(e) {
      function t(t, n) {
        var i;
        return (i = e.call(this, t) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i
      }
      jt(t, e);
      var n = t.prototype;
      return n.toggle = function() {
        if (!this._element.disabled && !this._element.classList.contains(gi)) {
          var e = this._element.classList.contains(vi);
          t.clearMenus(), e || this.show()
        }
      }, n.show = function() {
        if (!(this._element.disabled || this._element.classList.contains(gi) || this._menu.classList.contains(vi))) {
          var e = t.getParentFromElement(this._element),
            n = {
              relatedTarget: this._element
            };
          if (!yn.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
            if (this._inNavbar) Tn.setDataAttribute(this._menu, "popper", "none");
            else {
              if (void 0 === Dt) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              var i = this._element;
              "parent" === this._config.reference ? i = e : zt(this._config.reference) ? (i = this._config.reference, void 0 !== this._config.reference.jquery && (i = this._config.reference[0])) : "object" == typeof this._config.reference && (i = this._config.reference);
              var r = this._getPopperConfig(),
                o = r.modifiers.find((function(e) {
                  return "applyStyles" === e.name && !1 === e.enabled
                }));
              this._popper = St(i, this._menu, r), o && Tn.setDataAttribute(this._menu, "popper", "static")
            }
            var s;
            if ("ontouchstart" in document.documentElement && !e.closest(".navbar-nav"))(s = []).concat.apply(s, document.body.children).forEach((function(e) {
              return yn.on(e, "mouseover", null, (function() {}))
            }));
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle(vi), this._element.classList.toggle(vi), yn.trigger(this._element, "shown.bs.dropdown", n)
          }
        }
      }, n.hide = function() {
        if (!this._element.disabled && !this._element.classList.contains(gi) && this._menu.classList.contains(vi)) {
          var e = {
            relatedTarget: this._element
          };
          yn.trigger(this._element, fi, e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle(vi), this._element.classList.toggle(vi), Tn.removeDataAttribute(this._menu, "popper"), yn.trigger(this._element, hi, e))
        }
      }, n.dispose = function() {
        e.prototype.dispose.call(this), yn.off(this._element, oi), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
      }, n.update = function() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
      }, n._addEventListeners = function() {
        var e = this;
        yn.on(this._element, "click.bs.dropdown", (function(t) {
          t.preventDefault(), t.stopPropagation(), e.toggle()
        }))
      }, n._getConfig = function(e) {
        if (e = Ft({}, this.constructor.Default, Tn.getDataAttributes(this._element), e), $t(ii, e, this.constructor.DefaultType), "object" == typeof e.reference && !zt(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(ii.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return e
      }, n._getMenuElement = function() {
        return jn(this._element, yi)[0]
      }, n._getPlacement = function() {
        var e = this._element.parentNode;
        if (e.classList.contains("dropend")) return Ei;
        if (e.classList.contains("dropstart")) return xi;
        var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return e.classList.contains("dropup") ? t ? _i : bi : t ? wi : ki
      }, n._detectNavbar = function() {
        return null !== this._element.closest(".navbar")
      }, n._getOffset = function() {
        var e = this,
          t = this._config.offset;
        return "string" == typeof t ? t.split(",").map((function(e) {
          return Number.parseInt(e, 10)
        })) : "function" == typeof t ? function(n) {
          return t(n, e._element)
        } : t
      }, n._getPopperConfig = function() {
        var e = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              altBoundary: this._config.flip,
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (e.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), Ft({}, e, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig)
      }, t.dropdownInterface = function(e, n) {
        var i = nn(e, ri);
        if (i || (i = new t(e, "object" == typeof n ? n : null)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]()
        }
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          t.dropdownInterface(this, e)
        }))
      }, t.clearMenus = function(e) {
        if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
          for (var t = Sn(mi), n = 0, i = t.length; n < i; n++) {
            var r = nn(t[n], ri),
              o = {
                relatedTarget: t[n]
              };
            if (e && "click" === e.type && (o.clickEvent = e), r) {
              var s = r._menu;
              if (t[n].classList.contains(vi))
                if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && "Tab" === e.key) && s.contains(e.target)))
                  if (!yn.trigger(t[n], fi, o).defaultPrevented) {
                    var a;
                    if ("ontouchstart" in document.documentElement)(a = []).concat.apply(a, document.body.children).forEach((function(e) {
                      return yn.off(e, "mouseover", null, (function() {}))
                    }));
                    t[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), s.classList.remove(vi), t[n].classList.remove(vi), Tn.removeDataAttribute(s, "popper"), yn.trigger(t[n], hi, o)
                  }
            }
          }
      }, t.getParentFromElement = function(e) {
        return qt(e) || e.parentNode
      }, t.dataApiKeydownHandler = function(e) {
        if (!(/input|textarea/i.test(e.target.tagName) ? e.key === ai || e.key !== si && (e.key !== li && e.key !== ui || e.target.closest(yi)) : !ci.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains(gi))) {
          var n = t.getParentFromElement(this),
            i = this.classList.contains(vi);
          if (e.key === si) return (this.matches(mi) ? this : Fn(this, mi)[0]).focus(), void t.clearMenus();
          if (i || e.key !== ui && e.key !== li)
            if (i && e.key !== ai) {
              var r = Sn(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(Yt);
              if (r.length) {
                var o = r.indexOf(e.target);
                e.key === ui && o > 0 && o--, e.key === li && o < r.length - 1 && o++, r[o = -1 === o ? 0 : o].focus()
              }
            } else t.clearMenus();
          else(this.matches(mi) ? this : Fn(this, mi)[0]).click()
        }
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return Ai
        }
      }, {
        key: "DefaultType",
        get: function() {
          return Ci
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return ri
        }
      }]), t
    }(bn);
  yn.on(document, pi, mi, Ti.dataApiKeydownHandler), yn.on(document, pi, yi, Ti.dataApiKeydownHandler), yn.on(document, di, Ti.clearMenus), yn.on(document, "keyup.bs.dropdown.data-api", Ti.clearMenus), yn.on(document, di, mi, (function(e) {
    e.preventDefault(), e.stopPropagation(), Ti.dropdownInterface(this, "toggle")
  })), yn.on(document, di, ".dropdown form", (function(e) {
    return e.stopPropagation()
  })), Jt(ii, Ti);
  var Si = "modal",
    Di = "bs.modal",
    Li = ".bs.modal",
    Oi = "Escape",
    Fi = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
    },
    ji = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    },
    Ni = "hidden.bs.modal",
    Pi = "show.bs.modal",
    Bi = "focusin.bs.modal",
    Mi = "resize.bs.modal",
    Ii = "click.dismiss.bs.modal",
    Ri = "keydown.dismiss.bs.modal",
    Hi = "mousedown.dismiss.bs.modal",
    qi = "modal-open",
    Vi = "fade",
    Wi = "show",
    zi = "modal-static",
    Ui = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    $i = ".sticky-top",
    Yi = function(e) {
      function t(t, n) {
        var i;
        return (i = e.call(this, t) || this)._config = i._getConfig(n), i._dialog = Dn(".modal-dialog", t), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i
      }
      jt(t, e);
      var n = t.prototype;
      return n.toggle = function(e) {
        return this._isShown ? this.hide() : this.show(e)
      }, n.show = function(e) {
        var t = this;
        if (!this._isShown && !this._isTransitioning) {
          this._element.classList.contains(Vi) && (this._isTransitioning = !0);
          var n = yn.trigger(this._element, Pi, {
            relatedTarget: e
          });
          this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), yn.on(this._element, Ii, '[data-bs-dismiss="modal"]', (function(e) {
            return t.hide(e)
          })), yn.on(this._dialog, Hi, (function() {
            yn.one(t._element, "mouseup.dismiss.bs.modal", (function(e) {
              e.target === t._element && (t._ignoreBackdropClick = !0)
            }))
          })), this._showBackdrop((function() {
            return t._showElement(e)
          })))
        }
      }, n.hide = function(e) {
        var t = this;
        if ((e && e.preventDefault(), this._isShown && !this._isTransitioning) && !yn.trigger(this._element, "hide.bs.modal").defaultPrevented) {
          this._isShown = !1;
          var n = this._element.classList.contains(Vi);
          if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), yn.off(document, Bi), this._element.classList.remove(Wi), yn.off(this._element, Ii), yn.off(this._dialog, Hi), n) {
            var i = Vt(this._element);
            yn.one(this._element, "transitionend", (function(e) {
              return t._hideModal(e)
            })), Ut(this._element, i)
          } else this._hideModal()
        }
      }, n.dispose = function() {
        [window, this._element, this._dialog].forEach((function(e) {
          return yn.off(e, Li)
        })), e.prototype.dispose.call(this), yn.off(document, Bi), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
      }, n.handleUpdate = function() {
        this._adjustDialog()
      }, n._getConfig = function(e) {
        return e = Ft({}, Fi, e), $t(Si, e, ji), e
      }, n._showElement = function(e) {
        var t = this,
          n = this._element.classList.contains(Vi),
          i = Dn(".modal-body", this._dialog);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && Qt(this._element), this._element.classList.add(Wi), this._config.focus && this._enforceFocus();
        var r = function() {
          t._config.focus && t._element.focus(), t._isTransitioning = !1, yn.trigger(t._element, "shown.bs.modal", {
            relatedTarget: e
          })
        };
        if (n) {
          var o = Vt(this._dialog);
          yn.one(this._dialog, "transitionend", r), Ut(this._dialog, o)
        } else r()
      }, n._enforceFocus = function() {
        var e = this;
        yn.off(document, Bi), yn.on(document, Bi, (function(t) {
          document === t.target || e._element === t.target || e._element.contains(t.target) || e._element.focus()
        }))
      }, n._setEscapeEvent = function() {
        var e = this;
        this._isShown ? yn.on(this._element, Ri, (function(t) {
          e._config.keyboard && t.key === Oi ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.key !== Oi || e._triggerBackdropTransition()
        })) : yn.off(this._element, Ri)
      }, n._setResizeEvent = function() {
        var e = this;
        this._isShown ? yn.on(window, Mi, (function() {
          return e._adjustDialog()
        })) : yn.off(window, Mi)
      }, n._hideModal = function() {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
          document.body.classList.remove(qi), e._resetAdjustments(), e._resetScrollbar(), yn.trigger(e._element, Ni)
        }))
      }, n._removeBackdrop = function() {
        this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
      }, n._showBackdrop = function(e) {
        var t = this,
          n = this._element.classList.contains(Vi) ? Vi : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), yn.on(this._element, Ii, (function(e) {
              t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
            })), n && Qt(this._backdrop), this._backdrop.classList.add(Wi), !n) return void e();
          var i = Vt(this._backdrop);
          yn.one(this._backdrop, "transitionend", e), Ut(this._backdrop, i)
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove(Wi);
          var r = function() {
            t._removeBackdrop(), e()
          };
          if (this._element.classList.contains(Vi)) {
            var o = Vt(this._backdrop);
            yn.one(this._backdrop, "transitionend", r), Ut(this._backdrop, o)
          } else r()
        } else e()
      }, n._triggerBackdropTransition = function() {
        var e = this;
        if (!yn.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
          var t = this._element.scrollHeight > document.documentElement.clientHeight;
          t || (this._element.style.overflowY = "hidden"), this._element.classList.add(zi);
          var n = Vt(this._dialog);
          yn.off(this._element, "transitionend"), yn.one(this._element, "transitionend", (function() {
            e._element.classList.remove(zi), t || (yn.one(e._element, "transitionend", (function() {
              e._element.style.overflowY = ""
            })), Ut(e._element, n))
          })), Ut(this._element, n), this._element.focus()
        }
      }, n._adjustDialog = function() {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        (!this._isBodyOverflowing && e && !Zt || this._isBodyOverflowing && !e && Zt) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !e && !Zt || !this._isBodyOverflowing && e && Zt) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, n._resetAdjustments = function() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, n._checkScrollbar = function() {
        var e = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, n._setScrollbar = function() {
        var e = this;
        this._isBodyOverflowing && (this._setElementAttributes(Ui, "paddingRight", (function(t) {
          return t + e._scrollbarWidth
        })), this._setElementAttributes($i, "marginRight", (function(t) {
          return t - e._scrollbarWidth
        })), this._setElementAttributes("body", "paddingRight", (function(t) {
          return t + e._scrollbarWidth
        }))), document.body.classList.add(qi)
      }, n._setElementAttributes = function(e, t, n) {
        Sn(e).forEach((function(e) {
          var i = e.style[t],
            r = window.getComputedStyle(e)[t];
          Tn.setDataAttribute(e, t, i), e.style[t] = n(Number.parseFloat(r)) + "px"
        }))
      }, n._resetScrollbar = function() {
        this._resetElementAttributes(Ui, "paddingRight"), this._resetElementAttributes($i, "marginRight"), this._resetElementAttributes("body", "paddingRight")
      }, n._resetElementAttributes = function(e, t) {
        Sn(e).forEach((function(e) {
          var n = Tn.getDataAttribute(e, t);
          void 0 === n && e === document.body ? e.style[t] = "" : (Tn.removeDataAttribute(e, t), e.style[t] = n)
        }))
      }, n._getScrollbarWidth = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
        var t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), t
      }, t.jQueryInterface = function(e, n) {
        return this.each((function() {
          var i = nn(this, Di),
            r = Ft({}, Fi, Tn.getDataAttributes(this), "object" == typeof e && e ? e : {});
          if (i || (i = new t(this, r)), "string" == typeof e) {
            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
            i[e](n)
          }
        }))
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return Fi
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return Di
        }
      }]), t
    }(bn);
  yn.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(e) {
    var t = this,
      n = qt(this);
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(), yn.one(n, Pi, (function(e) {
      e.defaultPrevented || yn.one(n, Ni, (function() {
        Yt(t) && t.focus()
      }))
    }));
    var i = nn(n, Di);
    if (!i) {
      var r = Ft({}, Tn.getDataAttributes(n), Tn.getDataAttributes(this));
      i = new Yi(n, r)
    }
    i.toggle(this)
  })), Jt(Si, Yi);
  var Xi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Ki = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Qi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Gi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };

  function Zi(e, t, n) {
    var i;
    if (!e.length) return e;
    if (n && "function" == typeof n) return n(e);
    for (var r = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), s = (i = []).concat.apply(i, r.body.querySelectorAll("*")), a = function(e, n) {
        var i, r = s[e],
          a = r.nodeName.toLowerCase();
        if (!o.includes(a)) return r.parentNode.removeChild(r), "continue";
        var u = (i = []).concat.apply(i, r.attributes),
          l = [].concat(t["*"] || [], t[a] || []);
        u.forEach((function(e) {
          (function(e, t) {
            var n = e.nodeName.toLowerCase();
            if (t.includes(n)) return !Xi.has(n) || Boolean(Ki.test(e.nodeValue) || Qi.test(e.nodeValue));
            for (var i = t.filter((function(e) {
                return e instanceof RegExp
              })), r = 0, o = i.length; r < o; r++)
              if (i[r].test(n)) return !0;
            return !1
          })(e, l) || r.removeAttribute(e.nodeName)
        }))
      }, u = 0, l = s.length; u < l; u++) a(u);
    return r.body.innerHTML
  }
  var Ji = "tooltip",
    er = "bs.tooltip",
    tr = ".bs.tooltip",
    nr = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    ir = new Set(["sanitize", "allowList", "sanitizeFn"]),
    rr = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    },
    or = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: Zt ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: Zt ? "right" : "left"
    },
    sr = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: Gi,
      popperConfig: null
    },
    ar = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    ur = "fade",
    lr = "show",
    cr = "show",
    fr = "out",
    hr = "hover",
    dr = "focus",
    pr = function(e) {
      function t(t, n) {
        var i;
        if (void 0 === Dt) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        return (i = e.call(this, t) || this)._isEnabled = !0, i._timeout = 0, i._hoverState = "", i._activeTrigger = {}, i._popper = null, i.config = i._getConfig(n), i.tip = null, i._setListeners(), i
      }
      jt(t, e);
      var n = t.prototype;
      return n.enable = function() {
        this._isEnabled = !0
      }, n.disable = function() {
        this._isEnabled = !1
      }, n.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled
      }, n.toggle = function(e) {
        if (this._isEnabled)
          if (e) {
            var t = this._initializeOnDelegatedTarget(e);
            t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
          } else {
            if (this.getTipElement().classList.contains(lr)) return void this._leave(null, this);
            this._enter(null, this)
          }
      }, n.dispose = function() {
        clearTimeout(this._timeout), yn.off(this._element, this.constructor.EVENT_KEY), yn.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, e.prototype.dispose.call(this)
      }, n.show = function() {
        var e = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (this.isWithContent() && this._isEnabled) {
          var t = yn.trigger(this._element, this.constructor.Event.SHOW),
            n = Xt(this._element),
            i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
          if (!t.defaultPrevented && i) {
            var r = this.getTipElement(),
              o = It(this.constructor.NAME);
            r.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && r.classList.add(ur);
            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this._element) : this.config.placement,
              a = this._getAttachment(s);
            this._addAttachmentClass(a);
            var u = this._getContainer();
            tn(r, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(r), yn.trigger(this._element, this.constructor.Event.INSERTED), this._popper = St(this._element, r, this._getPopperConfig(a)), r.classList.add(lr);
            var l, c, f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            if (f)(l = r.classList).add.apply(l, f.split(" "));
            if ("ontouchstart" in document.documentElement)(c = []).concat.apply(c, document.body.children).forEach((function(e) {
              yn.on(e, "mouseover", (function() {}))
            }));
            var h = function() {
              var t = e._hoverState;
              e._hoverState = null, yn.trigger(e._element, e.constructor.Event.SHOWN), t === fr && e._leave(null, e)
            };
            if (this.tip.classList.contains(ur)) {
              var d = Vt(this.tip);
              yn.one(this.tip, "transitionend", h), Ut(this.tip, d)
            } else h()
          }
        }
      }, n.hide = function() {
        var e = this;
        if (this._popper) {
          var t = this.getTipElement(),
            n = function() {
              e._hoverState !== cr && t.parentNode && t.parentNode.removeChild(t), e._cleanTipClass(), e._element.removeAttribute("aria-describedby"), yn.trigger(e._element, e.constructor.Event.HIDDEN), e._popper && (e._popper.destroy(), e._popper = null)
            };
          if (!yn.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
            var i;
            if (t.classList.remove(lr), "ontouchstart" in document.documentElement)(i = []).concat.apply(i, document.body.children).forEach((function(e) {
              return yn.off(e, "mouseover", Kt)
            }));
            if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains(ur)) {
              var r = Vt(t);
              yn.one(t, "transitionend", n), Ut(t, r)
            } else n();
            this._hoverState = ""
          }
        }
      }, n.update = function() {
        null !== this._popper && this._popper.update()
      }, n.isWithContent = function() {
        return Boolean(this.getTitle())
      }, n.getTipElement = function() {
        if (this.tip) return this.tip;
        var e = document.createElement("div");
        return e.innerHTML = this.config.template, this.tip = e.children[0], this.tip
      }, n.setContent = function() {
        var e = this.getTipElement();
        this.setElementContent(Dn(".tooltip-inner", e), this.getTitle()), e.classList.remove(ur, lr)
      }, n.setElementContent = function(e, t) {
        if (null !== e) return "object" == typeof t && zt(t) ? (t.jquery && (t = t[0]), void(this.config.html ? t.parentNode !== e && (e.innerHTML = "", e.appendChild(t)) : e.textContent = t.textContent)) : void(this.config.html ? (this.config.sanitize && (t = Zi(t, this.config.allowList, this.config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
      }, n.getTitle = function() {
        var e = this._element.getAttribute("data-bs-original-title");
        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), e
      }, n.updateAttachment = function(e) {
        return "right" === e ? "end" : "left" === e ? "start" : e
      }, n._initializeOnDelegatedTarget = function(e, t) {
        var n = this.constructor.DATA_KEY;
        return (t = t || nn(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), tn(e.delegateTarget, n, t)), t
      }, n._getOffset = function() {
        var e = this,
          t = this.config.offset;
        return "string" == typeof t ? t.split(",").map((function(e) {
          return Number.parseInt(e, 10)
        })) : "function" == typeof t ? function(n) {
          return t(n, e._element)
        } : t
      }, n._getPopperConfig = function(e) {
        var t = this,
          n = {
            placement: e,
            modifiers: [{
              name: "flip",
              options: {
                altBoundary: !0,
                fallbackPlacements: this.config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this.config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: "." + this.constructor.NAME + "-arrow"
              }
            }, {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: function(e) {
                return t._handlePopperPlacementChange(e)
              }
            }],
            onFirstUpdate: function(e) {
              e.options.placement !== e.placement && t._handlePopperPlacementChange(e)
            }
          };
        return Ft({}, n, "function" == typeof this.config.popperConfig ? this.config.popperConfig(n) : this.config.popperConfig)
      }, n._addAttachmentClass = function(e) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(e))
      }, n._getContainer = function() {
        return !1 === this.config.container ? document.body : zt(this.config.container) ? this.config.container : Dn(this.config.container)
      }, n._getAttachment = function(e) {
        return or[e.toUpperCase()]
      }, n._setListeners = function() {
        var e = this;
        this.config.trigger.split(" ").forEach((function(t) {
          if ("click" === t) yn.on(e._element, e.constructor.Event.CLICK, e.config.selector, (function(t) {
            return e.toggle(t)
          }));
          else if ("manual" !== t) {
            var n = t === hr ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
              i = t === hr ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            yn.on(e._element, n, e.config.selector, (function(t) {
              return e._enter(t)
            })), yn.on(e._element, i, e.config.selector, (function(t) {
              return e._leave(t)
            }))
          }
        })), this._hideModalHandler = function() {
          e._element && e.hide()
        }, yn.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = Ft({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, n._fixTitle = function() {
        var e = this._element.getAttribute("title"),
          t = typeof this._element.getAttribute("data-bs-original-title");
        (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
      }, n._enter = function(e, t) {
        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? dr : hr] = !0), t.getTipElement().classList.contains(lr) || t._hoverState === cr ? t._hoverState = cr : (clearTimeout(t._timeout), t._hoverState = cr, t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
          t._hoverState === cr && t.show()
        }), t.config.delay.show) : t.show())
      }, n._leave = function(e, t) {
        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? dr : hr] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = fr, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
          t._hoverState === fr && t.hide()
        }), t.config.delay.hide) : t.hide())
      }, n._isWithActiveTrigger = function() {
        for (var e in this._activeTrigger)
          if (this._activeTrigger[e]) return !0;
        return !1
      }, n._getConfig = function(e) {
        var t = Tn.getDataAttributes(this._element);
        return Object.keys(t).forEach((function(e) {
          ir.has(e) && delete t[e]
        })), e && "object" == typeof e.container && e.container.jquery && (e.container = e.container[0]), "number" == typeof(e = Ft({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
          show: e.delay,
          hide: e.delay
        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), $t(Ji, e, this.constructor.DefaultType), e.sanitize && (e.template = Zi(e.template, e.allowList, e.sanitizeFn)), e
      }, n._getDelegateConfig = function() {
        var e = {};
        if (this.config)
          for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        return e
      }, n._cleanTipClass = function() {
        var e = this.getTipElement(),
          t = e.getAttribute("class").match(nr);
        null !== t && t.length > 0 && t.map((function(e) {
          return e.trim()
        })).forEach((function(t) {
          return e.classList.remove(t)
        }))
      }, n._handlePopperPlacementChange = function(e) {
        var t = e.state;
        t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, er),
            i = "object" == typeof e && e;
          if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]()
          }
        }))
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return sr
        }
      }, {
        key: "NAME",
        get: function() {
          return Ji
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return er
        }
      }, {
        key: "Event",
        get: function() {
          return ar
        }
      }, {
        key: "EVENT_KEY",
        get: function() {
          return tr
        }
      }, {
        key: "DefaultType",
        get: function() {
          return rr
        }
      }]), t
    }(bn);
  Jt(Ji, pr);
  var gr = "popover",
    vr = "bs.popover",
    mr = ".bs.popover",
    yr = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    br = Ft({}, pr.Default, {
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    _r = Ft({}, pr.DefaultType, {
      content: "(string|element|function)"
    }),
    kr = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    },
    wr = function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      jt(t, e);
      var n = t.prototype;
      return n.isWithContent = function() {
        return this.getTitle() || this._getContent()
      }, n.setContent = function() {
        var e = this.getTipElement();
        this.setElementContent(Dn(".popover-header", e), this.getTitle());
        var t = this._getContent();
        "function" == typeof t && (t = t.call(this._element)), this.setElementContent(Dn(".popover-body", e), t), e.classList.remove("fade", "show")
      }, n._addAttachmentClass = function(e) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(e))
      }, n._getContent = function() {
        return this._element.getAttribute("data-bs-content") || this.config.content
      }, n._cleanTipClass = function() {
        var e = this.getTipElement(),
          t = e.getAttribute("class").match(yr);
        null !== t && t.length > 0 && t.map((function(e) {
          return e.trim()
        })).forEach((function(t) {
          return e.classList.remove(t)
        }))
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, vr),
            i = "object" == typeof e ? e : null;
          if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), tn(this, vr, n)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]()
          }
        }))
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return br
        }
      }, {
        key: "NAME",
        get: function() {
          return gr
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return vr
        }
      }, {
        key: "Event",
        get: function() {
          return kr
        }
      }, {
        key: "EVENT_KEY",
        get: function() {
          return mr
        }
      }, {
        key: "DefaultType",
        get: function() {
          return _r
        }
      }]), t
    }(pr);
  Jt(gr, wr);
  var Er = "scrollspy",
    xr = "bs.scrollspy",
    Ar = "." + xr,
    Cr = {
      offset: 10,
      method: "auto",
      target: ""
    },
    Tr = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    Sr = "dropdown-item",
    Dr = "active",
    Lr = ".nav-link",
    Or = "position",
    Fr = function(e) {
      function t(t, n) {
        var i;
        return (i = e.call(this, t) || this)._scrollElement = "BODY" === t.tagName ? window : t, i._config = i._getConfig(n), i._selector = i._config.target + " " + ".nav-link, " + i._config.target + " " + ".list-group-item, " + i._config.target + " ." + Sr, i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, yn.on(i._scrollElement, "scroll.bs.scrollspy", (function() {
          return i._process()
        })), i.refresh(), i._process(), i
      }
      jt(t, e);
      var n = t.prototype;
      return n.refresh = function() {
        var e = this,
          t = this._scrollElement === this._scrollElement.window ? "offset" : Or,
          n = "auto" === this._config.method ? t : this._config.method,
          i = n === Or ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Sn(this._selector).map((function(e) {
          var t = Ht(e),
            r = t ? Dn(t) : null;
          if (r) {
            var o = r.getBoundingClientRect();
            if (o.width || o.height) return [Tn[n](r).top + i, t]
          }
          return null
        })).filter((function(e) {
          return e
        })).sort((function(e, t) {
          return e[0] - t[0]
        })).forEach((function(t) {
          e._offsets.push(t[0]), e._targets.push(t[1])
        }))
      }, n.dispose = function() {
        e.prototype.dispose.call(this), yn.off(this._scrollElement, Ar), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, n._getConfig = function(e) {
        if ("string" != typeof(e = Ft({}, Cr, "object" == typeof e && e ? e : {})).target && zt(e.target)) {
          var t = e.target.id;
          t || (t = It(Er), e.target.id = t), e.target = "#" + t
        }
        return $t(Er, e, Tr), e
      }, n._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, n._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, n._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, n._process = function() {
        var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();
        if (this._scrollHeight !== t && this.refresh(), e >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i)
        } else {
          if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
          for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
          }
        }
      }, n._activate = function(e) {
        this._activeTarget = e, this._clear();
        var t = this._selector.split(",").map((function(t) {
            return t + '[data-bs-target="' + e + '"],' + t + '[href="' + e + '"]'
          })),
          n = Dn(t.join(","));
        n.classList.contains(Sr) ? (Dn(".dropdown-toggle", n.closest(".dropdown")).classList.add(Dr), n.classList.add(Dr)) : (n.classList.add(Dr), On(n, ".nav, .list-group").forEach((function(e) {
          Fn(e, ".nav-link, .list-group-item").forEach((function(e) {
            return e.classList.add(Dr)
          })), Fn(e, ".nav-item").forEach((function(e) {
            Ln(e, Lr).forEach((function(e) {
              return e.classList.add(Dr)
            }))
          }))
        }))), yn.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e
        })
      }, n._clear = function() {
        Sn(this._selector).filter((function(e) {
          return e.classList.contains(Dr)
        })).forEach((function(e) {
          return e.classList.remove(Dr)
        }))
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, xr);
          if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]()
          }
        }))
      }, Ot(t, null, [{
        key: "Default",
        get: function() {
          return Cr
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return xr
        }
      }]), t
    }(bn);
  yn.on(window, "load.bs.scrollspy.data-api", (function() {
    Sn('[data-bs-spy="scroll"]').forEach((function(e) {
      return new Fr(e, Tn.getDataAttributes(e))
    }))
  })), Jt(Er, Fr);
  var jr = "bs.tab",
    Nr = "active",
    Pr = "fade",
    Br = "show",
    Mr = ".active",
    Ir = ":scope > li > .active",
    Rr = function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      jt(t, e);
      var n = t.prototype;
      return n.show = function() {
        var e = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Nr) || this._element.classList.contains("disabled"))) {
          var t, n = qt(this._element),
            i = this._element.closest(".nav, .list-group");
          if (i) {
            var r = "UL" === i.nodeName || "OL" === i.nodeName ? Ir : Mr;
            t = (t = Sn(r, i))[t.length - 1]
          }
          var o = t ? yn.trigger(t, "hide.bs.tab", {
            relatedTarget: this._element
          }) : null;
          if (!(yn.trigger(this._element, "show.bs.tab", {
              relatedTarget: t
            }).defaultPrevented || null !== o && o.defaultPrevented)) {
            this._activate(this._element, i);
            var s = function() {
              yn.trigger(t, "hidden.bs.tab", {
                relatedTarget: e._element
              }), yn.trigger(e._element, "shown.bs.tab", {
                relatedTarget: t
              })
            };
            n ? this._activate(n, n.parentNode, s) : s()
          }
        }
      }, n._activate = function(e, t, n) {
        var i = this,
          r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? Ln(t, Mr) : Sn(Ir, t))[0],
          o = n && r && r.classList.contains(Pr),
          s = function() {
            return i._transitionComplete(e, r, n)
          };
        if (r && o) {
          var a = Vt(r);
          r.classList.remove(Br), yn.one(r, "transitionend", s), Ut(r, a)
        } else s()
      }, n._transitionComplete = function(e, t, n) {
        if (t) {
          t.classList.remove(Nr);
          var i = Dn(":scope > .dropdown-menu .active", t.parentNode);
          i && i.classList.remove(Nr), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
        }(e.classList.add(Nr), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Qt(e), e.classList.contains(Pr) && e.classList.add(Br), e.parentNode && e.parentNode.classList.contains("dropdown-menu")) && (e.closest(".dropdown") && Sn(".dropdown-toggle").forEach((function(e) {
          return e.classList.add(Nr)
        })), e.setAttribute("aria-expanded", !0));
        n && n()
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, jr) || new t(this);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]()
          }
        }))
      }, Ot(t, null, [{
        key: "DATA_KEY",
        get: function() {
          return jr
        }
      }]), t
    }(bn);
  yn.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(e) {
    e.preventDefault(), (nn(this, jr) || new Rr(this)).show()
  })), Jt("tab", Rr);
  var Hr = "toast",
    qr = "bs.toast",
    Vr = "click.dismiss.bs.toast",
    Wr = "hide",
    zr = "show",
    Ur = "showing",
    $r = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    Yr = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    },
    Xr = function(e) {
      function t(t, n) {
        var i;
        return (i = e.call(this, t) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i
      }
      jt(t, e);
      var n = t.prototype;
      return n.show = function() {
        var e = this;
        if (!yn.trigger(this._element, "show.bs.toast").defaultPrevented) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
          var t = function() {
            e._element.classList.remove(Ur), e._element.classList.add(zr), yn.trigger(e._element, "shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
              e.hide()
            }), e._config.delay))
          };
          if (this._element.classList.remove(Wr), Qt(this._element), this._element.classList.add(Ur), this._config.animation) {
            var n = Vt(this._element);
            yn.one(this._element, "transitionend", t), Ut(this._element, n)
          } else t()
        }
      }, n.hide = function() {
        var e = this;
        if (this._element.classList.contains(zr) && !yn.trigger(this._element, "hide.bs.toast").defaultPrevented) {
          var t = function() {
            e._element.classList.add(Wr), yn.trigger(e._element, "hidden.bs.toast")
          };
          if (this._element.classList.remove(zr), this._config.animation) {
            var n = Vt(this._element);
            yn.one(this._element, "transitionend", t), Ut(this._element, n)
          } else t()
        }
      }, n.dispose = function() {
        this._clearTimeout(), this._element.classList.contains(zr) && this._element.classList.remove(zr), yn.off(this._element, Vr), e.prototype.dispose.call(this), this._config = null
      }, n._getConfig = function(e) {
        return e = Ft({}, Yr, Tn.getDataAttributes(this._element), "object" == typeof e && e ? e : {}), $t(Hr, e, this.constructor.DefaultType), e
      }, n._setListeners = function() {
        var e = this;
        yn.on(this._element, Vr, '[data-bs-dismiss="toast"]', (function() {
          return e.hide()
        }))
      }, n._clearTimeout = function() {
        clearTimeout(this._timeout), this._timeout = null
      }, t.jQueryInterface = function(e) {
        return this.each((function() {
          var n = nn(this, qr);
          if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
            n[e](this)
          }
        }))
      }, Ot(t, null, [{
        key: "DefaultType",
        get: function() {
          return $r
        }
      }, {
        key: "Default",
        get: function() {
          return Yr
        }
      }, {
        key: "DATA_KEY",
        get: function() {
          return qr
        }
      }]), t
    }(bn);
  Jt(Hr, Xr), [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]')).map((function(e) {
    return new Ti(e)
  }));
  var Kr = ".dropdown, .dropup, .dropend, .dropstart",
    Qr = document.querySelectorAll(Kr),
    Gr = void 0;
  Qr.forEach((function(e) {
    e.addEventListener("mousedown", (function(e) {
      e.stopPropagation(), e.target.dataset.bsToggle && "dropdown" === e.target.dataset.bsToggle && (Gr = e.currentTarget)
    })), e.addEventListener("hide.bs.dropdown", (function(t) {
      t.stopPropagation();
      var n = Gr ? Gr.parentElement.closest(Kr) : void 0;
      n && n === e && t.preventDefault(), Gr = void 0
    }))
  })), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e) {
    var t, n, i = {
      delay: {
        show: 50,
        hide: 50
      },
      html: null !== (t = "true" === e.getAttribute("data-bs-html")) && void 0 !== t && t,
      placement: null !== (n = e.getAttribute("data-bs-placement")) && void 0 !== n ? n : "auto"
    };
    return new pr(e, i)
  })), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(e) {
    var t, n, i = {
      delay: {
        show: 50,
        hide: 50
      },
      html: null !== (t = "true" === e.getAttribute("data-bs-html")) && void 0 !== t && t,
      placement: null !== (n = e.getAttribute("data-bs-placement")) && void 0 !== n ? n : "auto"
    };
    return new wr(e, i)
  })), [].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]')).map((function(e) {
    e.addEventListener("click", (function(t) {
      t.stopPropagation(), e.classList.toggle("active")
    }))
  })), [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]')).map((function(e) {
    return new Xr(e)
  }))
})), $(document).ready((function() {
  setTimeout((function() {
    document.getElementById("InfinityKF1Qy1b5czgOp002") || $(".fundingNotice").show()
  }), 500)
}));