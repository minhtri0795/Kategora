/*! For license information please see app.js.LICENSE.txt */
!function(t) {
    function e(e) {
        for (var i, n, o = e[0], s = e[1], a = 0, h = []; a < o.length; a++)
            n = o[a],
            Object.prototype.hasOwnProperty.call(r, n) && r[n] && h.push(r[n][0]),
            r[n] = 0;
        for (i in s)
            Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        for (l && l(e); h.length; )
            h.shift()()
    }
    var i = {}
      , r = {
        0: 0
    };
    function n(e) {
        if (i[e])
            return i[e].exports;
        var r = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.e = function(t) {
        var e = []
          , i = r[t];
        if (0 !== i)
            if (i)
                e.push(i[2]);
            else {
                var o = new Promise((function(e, n) {
                    i = r[t] = [e, n]
                }
                ));
                e.push(i[2] = o);
                var s, a = document.createElement("script");
                a.charset = "utf-8",
                a.timeout = 120,
                n.nc && a.setAttribute("nonce", n.nc),
                a.src = function(t) {
                    return n.p + "js/" + ({}[t] || t) + ".js"
                }(t);
                var l = new Error;
                s = function(e) {
                    a.onerror = a.onload = null,
                    clearTimeout(h);
                    var i = r[t];
                    if (0 !== i) {
                        if (i) {
                            var n = e && ("load" === e.type ? "missing" : e.type)
                              , o = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")",
                            l.name = "ChunkLoadError",
                            l.type = n,
                            l.request = o,
                            i[1](l)
                        }
                        r[t] = void 0
                    }
                }
                ;
                var h = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: a
                    })
                }
                ), 12e4);
                a.onerror = a.onload = s,
                document.head.appendChild(a)
            }
        return Promise.all(e)
    }
    ,
    n.m = t,
    n.c = i,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "/wp-content/themes/Kategora/public/",
    n.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var o = window.webpackJsonp = window.webpackJsonp || []
      , s = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var a = 0; a < o.length; a++)
        e(o[a]);
    var l = s;
    n(n.s = 55)
}([function(t, e, i) {
    "use strict";
    i.r(e),
    i.d(e, "gsap", (function() {
        return mt
    }
    )),
    i.d(e, "default", (function() {
        return mt
    }
    )),
    i.d(e, "CSSPlugin", (function() {
        return dt
    }
    )),
    i.d(e, "TweenMax", (function() {
        return yt
    }
    )),
    i.d(e, "TweenLite", (function() {
        return u.w
    }
    )),
    i.d(e, "TimelineMax", (function() {
        return u.v
    }
    )),
    i.d(e, "TimelineLite", (function() {
        return u.u
    }
    )),
    i.d(e, "Power0", (function() {
        return u.i
    }
    )),
    i.d(e, "Power1", (function() {
        return u.j
    }
    )),
    i.d(e, "Power2", (function() {
        return u.k
    }
    )),
    i.d(e, "Power3", (function() {
        return u.l
    }
    )),
    i.d(e, "Power4", (function() {
        return u.m
    }
    )),
    i.d(e, "Linear", (function() {
        return u.h
    }
    )),
    i.d(e, "Quad", (function() {
        return u.o
    }
    )),
    i.d(e, "Cubic", (function() {
        return u.d
    }
    )),
    i.d(e, "Quart", (function() {
        return u.p
    }
    )),
    i.d(e, "Quint", (function() {
        return u.q
    }
    )),
    i.d(e, "Strong", (function() {
        return u.t
    }
    )),
    i.d(e, "Elastic", (function() {
        return u.e
    }
    )),
    i.d(e, "Back", (function() {
        return u.a
    }
    )),
    i.d(e, "SteppedEase", (function() {
        return u.s
    }
    )),
    i.d(e, "Bounce", (function() {
        return u.b
    }
    )),
    i.d(e, "Sine", (function() {
        return u.r
    }
    )),
    i.d(e, "Expo", (function() {
        return u.f
    }
    )),
    i.d(e, "Circ", (function() {
        return u.c
    }
    ));
    var r, n, o, s, a, l, h, c, u = i(1), p = {}, f = 180 / Math.PI, d = Math.PI / 180, m = Math.atan2, y = /([A-Z])/g, g = /(?:left|right|width|margin|padding|x)/i, v = /[\s,\(]\S/, b = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, w = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, S = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, x = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, _ = function(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    }, E = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, k = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, P = function(t, e, i) {
        return t.style[e] = i
    }, A = function(t, e, i) {
        return t.style.setProperty(e, i)
    }, T = function(t, e, i) {
        return t._gsap[e] = i
    }, C = function(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    }, M = function(t, e, i, r, n) {
        var o = t._gsap;
        o.scaleX = o.scaleY = i,
        o.renderTransform(n, o)
    }, D = function(t, e, i, r, n) {
        var o = t._gsap;
        o[e] = i,
        o.renderTransform(n, o)
    }, L = "transform", O = L + "Origin", F = function(t, e) {
        var i = n.createElementNS ? n.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : n.createElement(t);
        return i.style ? i : n.createElement(t)
    }, I = function t(e, i, r) {
        var n = getComputedStyle(e);
        return n[i] || n.getPropertyValue(i.replace(y, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && t(e, B(i) || i, 1) || ""
    }, R = "O,Moz,ms,Ms,Webkit".split(","), B = function(t, e, i) {
        var r = (e || a).style
          , n = 5;
        if (t in r && !i)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(R[n] + t in r); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? R[n] : "") + t
    }, V = function() {
        "undefined" != typeof window && window.document && (r = window,
        n = r.document,
        o = n.documentElement,
        a = F("div") || {
            style: {}
        },
        l = F("div"),
        L = B(L),
        O = L + "Origin",
        a.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        c = !!B("perspective"),
        s = 1)
    }, j = function t(e) {
        var i, r = F("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, a = this.style.cssText;
        if (o.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        e)
            try {
                i = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (i = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        o.removeChild(r),
        this.style.cssText = a,
        i
    }, q = function(t, e) {
        for (var i = e.length; i--; )
            if (t.hasAttribute(e[i]))
                return t.getAttribute(e[i])
    }, z = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (i) {
            e = j.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === j || (e = j.call(t, !0)),
        !e || e.width || e.x || e.y ? e : {
            x: +q(t, ["x", "cx", "x1"]) || 0,
            y: +q(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, N = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !z(t))
    }, H = function(t, e) {
        if (e) {
            var i = t.style;
            e in p && e !== O && (e = L),
            i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            i.removeProperty(e.replace(y, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }, G = function(t, e, i, r, n, o) {
        var s = new u.n(t._pt,e,i,0,1,o ? k : E);
        return t._pt = s,
        s.b = r,
        s.e = n,
        t._props.push(i),
        s
    }, W = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Y = function t(e, i, r, o) {
        var s, l, h, c, f = parseFloat(r) || 0, d = (r + "").trim().substr((f + "").length) || "px", m = a.style, y = g.test(i), v = "svg" === e.tagName.toLowerCase(), b = (v ? "client" : "offset") + (y ? "Width" : "Height"), w = "px" === o, S = "%" === o;
        return o === d || !f || W[o] || W[d] ? f : ("px" !== d && !w && (f = t(e, i, r, "px")),
        c = e.getCTM && N(e),
        S && (p[i] || ~i.indexOf("adius")) ? Object(u.N)(f / (c ? e.getBBox()[y ? "width" : "height"] : e[b]) * 100) : (m[y ? "width" : "height"] = 100 + (w ? d : o),
        l = ~i.indexOf("adius") || "em" === o && e.appendChild && !v ? e : e.parentNode,
        c && (l = (e.ownerSVGElement || {}).parentNode),
        l && l !== n && l.appendChild || (l = n.body),
        (h = l._gsap) && S && h.width && y && h.time === u.P.time ? Object(u.N)(f / h.width * 100) : ((S || "%" === d) && (m.position = I(e, "position")),
        l === e && (m.position = "static"),
        l.appendChild(a),
        s = a[b],
        l.removeChild(a),
        m.position = "absolute",
        y && S && ((h = Object(u.B)(l)).time = u.P.time,
        h.width = l[b]),
        Object(u.N)(w ? s * f / 100 : s && f ? 100 / s * f : 0))))
    }, X = function(t, e, i, r) {
        var n;
        return s || V(),
        e in b && "transform" !== e && ~(e = b[e]).indexOf(",") && (e = e.split(",")[0]),
        p[e] && "transform" !== e ? (n = nt(t, r),
        n = "transformOrigin" !== e ? n[e] : ot(I(t, O)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = Q[e] && Q[e](t, e, i) || I(t, e) || Object(u.C)(t, e) || ("opacity" === e ? 1 : 0)),
        i && !~(n + "").indexOf(" ") ? Y(t, e, n, i) + i : n
    }, U = function(t, e, i, r) {
        if (!i || "none" === i) {
            var n = B(e, t, 1)
              , o = n && I(t, n, 1);
            o && o !== i ? (e = n,
            i = o) : "borderColor" === e && (i = I(t, "borderTopColor"))
        }
        var s, a, l, h, c, p, f, d, m, y, g, v, b = new u.n(this._pt,t.style,e,0,1,u.L), w = 0, S = 0;
        if (b.b = i,
        b.e = r,
        i += "",
        "auto" === (r += "") && (t.style[e] = r,
        r = I(t, e) || r,
        t.style[e] = i),
        s = [i, r],
        Object(u.y)(s),
        r = s[1],
        l = (i = s[0]).match(u.I) || [],
        (r.match(u.I) || []).length) {
            for (; a = u.I.exec(r); )
                f = a[0],
                m = r.substring(w, a.index),
                c ? c = (c + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (c = 1),
                f !== (p = l[S++] || "") && (h = parseFloat(p) || 0,
                g = p.substr((h + "").length),
                (v = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)),
                d = parseFloat(f),
                y = f.substr((d + "").length),
                w = u.I.lastIndex - y.length,
                y || (y = y || u.z.units[e] || g,
                w === r.length && (r += y,
                b.e += y)),
                g !== y && (h = Y(t, e, p, y) || 0),
                b._pt = {
                    _next: b._pt,
                    p: m || 1 === S ? m : ",",
                    s: h,
                    c: v ? v * d : d - h,
                    m: c && c < 4 ? Math.round : 0
                });
            b.c = w < r.length ? r.substring(w, r.length) : ""
        } else
            b.r = "display" === e && "none" === r ? k : E;
        return u.K.test(r) && (b.e = 0),
        this._pt = b,
        b
    }, K = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, $ = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, r, n, o = e.t, s = o.style, a = e.u, l = o._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                r = 1;
            else
                for (n = (a = a.split(",")).length; --n > -1; )
                    i = a[n],
                    p[i] && (r = 1,
                    i = "transformOrigin" === i ? O : L),
                    H(o, i);
            r && (H(o, L),
            l && (l.svg && o.removeAttribute("transform"),
            nt(o, 1),
            l.uncache = 1))
        }
    }, Q = {
        clearProps: function(t, e, i, r, n) {
            if ("isFromStart" !== n.data) {
                var o = t._pt = new u.n(t._pt,e,i,0,0,$);
                return o.u = r,
                o.pr = -10,
                o.tween = n,
                t._props.push(i),
                1
            }
        }
    }, Z = [1, 0, 0, 1, 0, 0], J = {}, tt = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, et = function(t) {
        var e = I(t, L);
        return tt(e) ? Z : e.substr(7).match(u.H).map(u.N)
    }, it = function(t, e) {
        var i, r, n, s, a = t._gsap || Object(u.B)(t), l = t.style, h = et(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Z : h : (h !== Z || t.offsetParent || t === o || a.svg || (n = l.display,
        l.display = "block",
        (i = t.parentNode) && t.offsetParent || (s = 1,
        r = t.nextSibling,
        o.appendChild(t)),
        h = et(t),
        n ? l.display = n : H(t, "display"),
        s && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : o.removeChild(t))),
        e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
    }, rt = function(t, e, i, r, n, o) {
        var s, a, l, h = t._gsap, c = n || it(t, !0), u = h.xOrigin || 0, p = h.yOrigin || 0, f = h.xOffset || 0, d = h.yOffset || 0, m = c[0], y = c[1], g = c[2], v = c[3], b = c[4], w = c[5], S = e.split(" "), x = parseFloat(S[0]) || 0, _ = parseFloat(S[1]) || 0;
        i ? c !== Z && (a = m * v - y * g) && (l = x * (-y / a) + _ * (m / a) - (m * w - y * b) / a,
        x = x * (v / a) + _ * (-g / a) + (g * w - v * b) / a,
        _ = l) : (x = (s = z(t)).x + (~S[0].indexOf("%") ? x / 100 * s.width : x),
        _ = s.y + (~(S[1] || S[0]).indexOf("%") ? _ / 100 * s.height : _)),
        r || !1 !== r && h.smooth ? (b = x - u,
        w = _ - p,
        h.xOffset = f + (b * m + w * g) - b,
        h.yOffset = d + (b * y + w * v) - w) : h.xOffset = h.yOffset = 0,
        h.xOrigin = x,
        h.yOrigin = _,
        h.smooth = !!r,
        h.origin = e,
        h.originIsAbsolute = !!i,
        t.style[O] = "0px 0px",
        o && (G(o, h, "xOrigin", u, x),
        G(o, h, "yOrigin", p, _),
        G(o, h, "xOffset", f, h.xOffset),
        G(o, h, "yOffset", d, h.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + _)
    }, nt = function(t, e) {
        var i = t._gsap || new u.g(t);
        if ("x"in i && !e && !i.uncache)
            return i;
        var r, n, o, s, a, l, h, p, y, g, v, b, w, S, x, _, E, k, P, A, T, C, M, D, F, R, B, V, j, q, z, H, G = t.style, W = i.scaleX < 0, Y = I(t, O) || "0";
        return r = n = o = l = h = p = y = g = v = 0,
        s = a = 1,
        i.svg = !(!t.getCTM || !N(t)),
        S = it(t, i.svg),
        i.svg && (D = !i.uncache && t.getAttribute("data-svg-origin"),
        rt(t, D || Y, !!D || i.originIsAbsolute, !1 !== i.smooth, S)),
        b = i.xOrigin || 0,
        w = i.yOrigin || 0,
        S !== Z && (k = S[0],
        P = S[1],
        A = S[2],
        T = S[3],
        r = C = S[4],
        n = M = S[5],
        6 === S.length ? (s = Math.sqrt(k * k + P * P),
        a = Math.sqrt(T * T + A * A),
        l = k || P ? m(P, k) * f : 0,
        (y = A || T ? m(A, T) * f + l : 0) && (a *= Math.cos(y * d)),
        i.svg && (r -= b - (b * k + w * A),
        n -= w - (b * P + w * T))) : (H = S[6],
        q = S[7],
        B = S[8],
        V = S[9],
        j = S[10],
        z = S[11],
        r = S[12],
        n = S[13],
        o = S[14],
        h = (x = m(H, j)) * f,
        x && (D = C * (_ = Math.cos(-x)) + B * (E = Math.sin(-x)),
        F = M * _ + V * E,
        R = H * _ + j * E,
        B = C * -E + B * _,
        V = M * -E + V * _,
        j = H * -E + j * _,
        z = q * -E + z * _,
        C = D,
        M = F,
        H = R),
        p = (x = m(-A, j)) * f,
        x && (_ = Math.cos(-x),
        z = T * (E = Math.sin(-x)) + z * _,
        k = D = k * _ - B * E,
        P = F = P * _ - V * E,
        A = R = A * _ - j * E),
        l = (x = m(P, k)) * f,
        x && (D = k * (_ = Math.cos(x)) + P * (E = Math.sin(x)),
        F = C * _ + M * E,
        P = P * _ - k * E,
        M = M * _ - C * E,
        k = D,
        C = F),
        h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0,
        p = 180 - p),
        s = Object(u.N)(Math.sqrt(k * k + P * P + A * A)),
        a = Object(u.N)(Math.sqrt(M * M + H * H)),
        x = m(C, M),
        y = Math.abs(x) > 2e-4 ? x * f : 0,
        v = z ? 1 / (z < 0 ? -z : z) : 0),
        i.svg && (D = t.getAttribute("transform"),
        i.forceCSS = t.setAttribute("transform", "") || !tt(I(t, L)),
        D && t.setAttribute("transform", D))),
        Math.abs(y) > 90 && Math.abs(y) < 270 && (W ? (s *= -1,
        y += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (a *= -1,
        y += y <= 0 ? 180 : -180)),
        i.x = ((i.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px",
        i.y = ((i.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px",
        i.z = o + "px",
        i.scaleX = Object(u.N)(s),
        i.scaleY = Object(u.N)(a),
        i.rotation = Object(u.N)(l) + "deg",
        i.rotationX = Object(u.N)(h) + "deg",
        i.rotationY = Object(u.N)(p) + "deg",
        i.skewX = y + "deg",
        i.skewY = g + "deg",
        i.transformPerspective = v + "px",
        (i.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (G[O] = ot(Y)),
        i.xOffset = i.yOffset = 0,
        i.force3D = u.z.force3D,
        i.renderTransform = i.svg ? ht : c ? lt : at,
        i.uncache = 0,
        i
    }, ot = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, st = function(t, e, i) {
        var r = Object(u.R)(e);
        return Object(u.N)(parseFloat(e) + parseFloat(Y(t, "x", i + "px", r))) + r
    }, at = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        lt(t, e)
    }, lt = function(t, e) {
        var i = e || this
          , r = i.xPercent
          , n = i.yPercent
          , o = i.x
          , s = i.y
          , a = i.z
          , l = i.rotation
          , h = i.rotationY
          , c = i.rotationX
          , u = i.skewX
          , p = i.skewY
          , f = i.scaleX
          , m = i.scaleY
          , y = i.transformPerspective
          , g = i.force3D
          , v = i.target
          , b = i.zOrigin
          , w = ""
          , S = "auto" === g && t && 1 !== t || !0 === g;
        if (b && ("0deg" !== c || "0deg" !== h)) {
            var x, _ = parseFloat(h) * d, E = Math.sin(_), k = Math.cos(_);
            _ = parseFloat(c) * d,
            x = Math.cos(_),
            o = st(v, o, E * x * -b),
            s = st(v, s, -Math.sin(_) * -b),
            a = st(v, a, k * x * -b + b)
        }
        "0px" !== y && (w += "perspective(" + y + ") "),
        (r || n) && (w += "translate(" + r + "%, " + n + "%) "),
        (S || "0px" !== o || "0px" !== s || "0px" !== a) && (w += "0px" !== a || S ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "),
        "0deg" !== l && (w += "rotate(" + l + ") "),
        "0deg" !== h && (w += "rotateY(" + h + ") "),
        "0deg" !== c && (w += "rotateX(" + c + ") "),
        "0deg" === u && "0deg" === p || (w += "skew(" + u + ", " + p + ") "),
        1 === f && 1 === m || (w += "scale(" + f + ", " + m + ") "),
        v.style[L] = w || "translate(0, 0)"
    }, ht = function(t, e) {
        var i, r, n, o, s, a = e || this, l = a.xPercent, h = a.yPercent, c = a.x, p = a.y, f = a.rotation, m = a.skewX, y = a.skewY, g = a.scaleX, v = a.scaleY, b = a.target, w = a.xOrigin, S = a.yOrigin, x = a.xOffset, _ = a.yOffset, E = a.forceCSS, k = parseFloat(c), P = parseFloat(p);
        f = parseFloat(f),
        m = parseFloat(m),
        (y = parseFloat(y)) && (m += y = parseFloat(y),
        f += y),
        f || m ? (f *= d,
        m *= d,
        i = Math.cos(f) * g,
        r = Math.sin(f) * g,
        n = Math.sin(f - m) * -v,
        o = Math.cos(f - m) * v,
        m && (y *= d,
        s = Math.tan(m - y),
        n *= s = Math.sqrt(1 + s * s),
        o *= s,
        y && (s = Math.tan(y),
        i *= s = Math.sqrt(1 + s * s),
        r *= s)),
        i = Object(u.N)(i),
        r = Object(u.N)(r),
        n = Object(u.N)(n),
        o = Object(u.N)(o)) : (i = g,
        o = v,
        r = n = 0),
        (k && !~(c + "").indexOf("px") || P && !~(p + "").indexOf("px")) && (k = Y(b, "x", c, "px"),
        P = Y(b, "y", p, "px")),
        (w || S || x || _) && (k = Object(u.N)(k + w - (w * i + S * n) + x),
        P = Object(u.N)(P + S - (w * r + S * o) + _)),
        (l || h) && (s = b.getBBox(),
        k = Object(u.N)(k + l / 100 * s.width),
        P = Object(u.N)(P + h / 100 * s.height)),
        s = "matrix(" + i + "," + r + "," + n + "," + o + "," + k + "," + P + ")",
        b.setAttribute("transform", s),
        E && (b.style[L] = s)
    }, ct = function(t, e, i, r, n, o) {
        var s, a, l = Object(u.E)(n), h = parseFloat(n) * (l && ~n.indexOf("rad") ? f : 1), c = o ? h * o : h - r, p = r + c + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360),
        "cw" === s && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === s && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))),
        t._pt = a = new u.n(t._pt,e,i,r,c,S),
        a.e = p,
        a.u = "deg",
        t._props.push(i),
        a
    }, ut = function(t, e, i) {
        var r, o, s, a, h, c, f, d = l.style, m = i._gsap;
        for (o in d.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;",
        d[L] = e,
        n.body.appendChild(l),
        r = nt(l, 1),
        p)
            (s = m[o]) !== (a = r[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (h = Object(u.R)(s) !== (f = Object(u.R)(a)) ? Y(i, o, s, f) : parseFloat(s),
            c = parseFloat(a),
            t._pt = new u.n(t._pt,m,o,h,c - h,w),
            t._pt.u = f || 0,
            t._props.push(o));
        n.body.removeChild(l)
    };
    Object(u.A)("padding,margin,Width,Radius", (function(t, e) {
        var i = "Top"
          , r = "Right"
          , n = "Bottom"
          , o = "Left"
          , s = (e < 3 ? [i, r, n, o] : [i + o, i + r, n + r, n + o]).map((function(i) {
            return e < 2 ? t + i : "border" + i + t
        }
        ));
        Q[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
            var o, a;
            if (arguments.length < 4)
                return o = s.map((function(e) {
                    return X(t, e, i)
                }
                )),
                5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (r + "").split(" "),
            a = {},
            s.forEach((function(t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }
            )),
            t.init(e, a, n)
        }
    }
    ));
    var pt, ft, dt = {
        name: "css",
        register: V,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, i, r, n) {
            var o, a, l, h, c, f, d, m, y, g, S, E, k, P, A, T, C, M, D, O = this._props, F = t.style;
            for (d in s || V(),
            e)
                if ("autoRound" !== d && (a = e[d],
                !u.J[d] || !Object(u.x)(d, e, i, r, t, n)))
                    if (c = typeof a,
                    f = Q[d],
                    "function" === c && (c = typeof (a = a.call(i, r, t, n))),
                    "string" === c && ~a.indexOf("random(") && (a = Object(u.M)(a)),
                    f)
                        f(this, t, d, a, i) && (A = 1);
                    else if ("--" === d.substr(0, 2))
                        this.add(F, "setProperty", getComputedStyle(t).getPropertyValue(d) + "", a + "", r, n, 0, 0, d);
                    else if ("undefined" !== c) {
                        if (o = X(t, d),
                        h = parseFloat(o),
                        (g = "string" === c && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                        l = parseFloat(a),
                        d in b && ("autoAlpha" === d && (1 === h && "hidden" === X(t, "visibility") && l && (h = 0),
                        G(this, F, "visibility", h ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)),
                        "scale" !== d && "transform" !== d && ~(d = b[d]).indexOf(",") && (d = d.split(",")[0])),
                        S = d in p)
                            if (E || ((k = t._gsap).renderTransform || nt(t),
                            P = !1 !== e.smoothOrigin && k.smooth,
                            (E = this._pt = new u.n(this._pt,F,L,0,1,k.renderTransform,k,0,-1)).dep = 1),
                            "scale" === d)
                                this._pt = new u.n(this._pt,k,"scaleY",k.scaleY,g ? g * l : l - k.scaleY),
                                O.push("scaleY", d),
                                d += "X";
                            else {
                                if ("transformOrigin" === d) {
                                    C = void 0,
                                    M = void 0,
                                    D = void 0,
                                    C = (T = a).split(" "),
                                    M = C[0],
                                    D = C[1] || "50%",
                                    "top" !== M && "bottom" !== M && "left" !== D && "right" !== D || (T = M,
                                    M = D,
                                    D = T),
                                    C[0] = K[M] || M,
                                    C[1] = K[D] || D,
                                    a = C.join(" "),
                                    k.svg ? rt(t, a, 0, P, 0, this) : ((y = parseFloat(a.split(" ")[2]) || 0) !== k.zOrigin && G(this, k, "zOrigin", k.zOrigin, y),
                                    G(this, F, d, ot(o), ot(a)));
                                    continue
                                }
                                if ("svgOrigin" === d) {
                                    rt(t, a, 1, P, 0, this);
                                    continue
                                }
                                if (d in J) {
                                    ct(this, k, d, h, a, g);
                                    continue
                                }
                                if ("smoothOrigin" === d) {
                                    G(this, k, "smooth", k.smooth, a);
                                    continue
                                }
                                if ("force3D" === d) {
                                    k[d] = a;
                                    continue
                                }
                                if ("transform" === d) {
                                    ut(this, a, t);
                                    continue
                                }
                            }
                        else
                            d in F || (d = B(d) || d);
                        if (S || (l || 0 === l) && (h || 0 === h) && !v.test(a) && d in F)
                            l || (l = 0),
                            (m = (o + "").substr((h + "").length)) !== (y = Object(u.R)(a) || (d in u.z.units ? u.z.units[d] : m)) && (h = Y(t, d, o, y)),
                            this._pt = new u.n(this._pt,S ? k : F,d,h,g ? g * l : l - h,"px" !== y || !1 === e.autoRound || S ? w : _),
                            this._pt.u = y || 0,
                            m !== y && (this._pt.b = o,
                            this._pt.r = x);
                        else if (d in F)
                            U.call(this, t, d, o, a);
                        else {
                            if (!(d in t)) {
                                Object(u.G)(d, a);
                                continue
                            }
                            this.add(t, d, t[d], a, r, n)
                        }
                        O.push(d)
                    }
            A && Object(u.O)(this)
        },
        get: X,
        aliases: b,
        getSetter: function(t, e, i) {
            var r = b[e];
            return r && r.indexOf(",") < 0 && (e = r),
            e in p && e !== O && (t._gsap.x || X(t, "x")) ? i && h === i ? "scale" === e ? C : T : (h = i || {}) && ("scale" === e ? M : D) : t.style && !Object(u.F)(t.style[e]) ? P : ~e.indexOf("-") ? A : Object(u.D)(t, e)
        },
        core: {
            _removeProperty: H,
            _getMatrix: it
        }
    };
    u.S.utils.checkPrefix = B,
    pt = "rotation,rotationX,rotationY,skewX,skewY",
    ft = Object(u.A)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + pt + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        p[t] = 1
    }
    )),
    Object(u.A)(pt, (function(t) {
        u.z.units[t] = "deg",
        J[t] = 1
    }
    )),
    b[ft[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + pt,
    Object(u.A)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        b[e[1]] = ft[e[0]]
    }
    )),
    Object(u.A)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        u.z.units[t] = "px"
    }
    )),
    u.S.registerPlugin(dt);
    var mt = u.S.registerPlugin(dt) || u.S
      , yt = mt.core.Tween
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function n(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    i.d(e, "g", (function() {
        return _e
    }
    )),
    i.d(e, "n", (function() {
        return Ue
    }
    )),
    i.d(e, "S", (function() {
        return Ze
    }
    )),
    i.d(e, "i", (function() {
        return Je
    }
    )),
    i.d(e, "j", (function() {
        return ti
    }
    )),
    i.d(e, "k", (function() {
        return ei
    }
    )),
    i.d(e, "l", (function() {
        return ii
    }
    )),
    i.d(e, "m", (function() {
        return ri
    }
    )),
    i.d(e, "h", (function() {
        return ni
    }
    )),
    i.d(e, "o", (function() {
        return oi
    }
    )),
    i.d(e, "d", (function() {
        return si
    }
    )),
    i.d(e, "p", (function() {
        return ai
    }
    )),
    i.d(e, "q", (function() {
        return li
    }
    )),
    i.d(e, "t", (function() {
        return hi
    }
    )),
    i.d(e, "e", (function() {
        return ci
    }
    )),
    i.d(e, "a", (function() {
        return ui
    }
    )),
    i.d(e, "s", (function() {
        return pi
    }
    )),
    i.d(e, "b", (function() {
        return fi
    }
    )),
    i.d(e, "r", (function() {
        return di
    }
    )),
    i.d(e, "f", (function() {
        return mi
    }
    )),
    i.d(e, "c", (function() {
        return yi
    }
    )),
    i.d(e, "w", (function() {
        return Fe
    }
    )),
    i.d(e, "v", (function() {
        return ke
    }
    )),
    i.d(e, "u", (function() {
        return ke
    }
    )),
    i.d(e, "Q", (function() {
        return Ze
    }
    )),
    i.d(e, "R", (function() {
        return jt
    }
    )),
    i.d(e, "C", (function() {
        return ot
    }
    )),
    i.d(e, "H", (function() {
        return B
    }
    )),
    i.d(e, "I", (function() {
        return V
    }
    )),
    i.d(e, "E", (function() {
        return P
    }
    )),
    i.d(e, "F", (function() {
        return C
    }
    )),
    i.d(e, "L", (function() {
        return Ne
    }
    )),
    i.d(e, "K", (function() {
        return q
    }
    )),
    i.d(e, "A", (function() {
        return st
    }
    )),
    i.d(e, "O", (function() {
        return Xe
    }
    )),
    i.d(e, "y", (function() {
        return he
    }
    )),
    i.d(e, "M", (function() {
        return $t
    }
    )),
    i.d(e, "x", (function() {
        return Ce
    }
    )),
    i.d(e, "J", (function() {
        return Z
    }
    )),
    i.d(e, "P", (function() {
        return ce
    }
    )),
    i.d(e, "z", (function() {
        return g
    }
    )),
    i.d(e, "N", (function() {
        return at
    }
    )),
    i.d(e, "G", (function() {
        return W
    }
    )),
    i.d(e, "D", (function() {
        return je
    }
    )),
    i.d(e, "B", (function() {
        return nt
    }
    ));
    var o, s, a, l, h, c, u, p, f, d, m, y, g = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, v = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, b = 1e8, w = 2 * Math.PI, S = w / 4, x = 0, _ = Math.sqrt, E = Math.cos, k = Math.sin, P = function(t) {
        return "string" == typeof t
    }, A = function(t) {
        return "function" == typeof t
    }, T = function(t) {
        return "number" == typeof t
    }, C = function(t) {
        return void 0 === t
    }, M = function(t) {
        return "object" == typeof t
    }, D = function(t) {
        return !1 !== t
    }, L = function() {
        return "undefined" != typeof window
    }, O = function(t) {
        return A(t) || P(t)
    }, F = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , I = Array.isArray, R = /(?:-?\.?\d|\.)+/gi, B = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, j = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, q = /[+-]=-?[\.\d]+/, z = /[#\-+.]*\b[a-z\d-=+%.]+/gi, N = {}, H = {}, G = function(t) {
        return (H = yt(t, N)) && Ze
    }, W = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, Y = function(t, e) {
        return !e && console.warn(t)
    }, X = function(t, e) {
        return t && (N[t] = e) && H && (H[t] = e) || N
    }, U = function() {
        return 0
    }, K = {}, $ = [], Q = {}, Z = {}, J = {}, tt = 30, et = [], it = "", rt = function(t) {
        var e, i, r = t[0];
        if (M(r) || A(r) || (t = [t]),
        !(e = (r._gsap || {}).harness)) {
            for (i = et.length; i-- && !et[i].targetTest(r); )
                ;
            e = et[i]
        }
        for (i = t.length; i--; )
            t[i] && (t[i]._gsap || (t[i]._gsap = new _e(t[i],e))) || t.splice(i, 1);
        return t
    }, nt = function(t) {
        return t._gsap || rt(Ht(t))[0]._gsap
    }, ot = function(t, e, i) {
        return (i = t[e]) && A(i) ? t[e]() : C(i) && t.getAttribute && t.getAttribute(e) || i
    }, st = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, at = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, lt = function(t, e) {
        for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
            ;
        return r < i
    }, ht = function(t, e, i) {
        var r, n = T(t[1]), o = (n ? 2 : 1) + (e < 2 ? 0 : 1), s = t[o];
        if (n && (s.duration = t[1]),
        s.parent = i,
        e) {
            for (r = s; i && !("immediateRender"in r); )
                r = i.vars.defaults || {},
                i = D(i.vars.inherit) && i.parent;
            s.immediateRender = D(r.immediateRender),
            e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1]
        }
        return s
    }, ct = function() {
        var t, e, i = $.length, r = $.slice(0);
        for (Q = {},
        $.length = 0,
        t = 0; t < i; t++)
            (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, ut = function(t, e, i, r) {
        $.length && ct(),
        t.render(e, i, r),
        $.length && ct()
    }, pt = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(z).length < 2 ? e : P(t) ? t.trim() : t
    }, ft = function(t) {
        return t
    }, dt = function(t, e) {
        for (var i in e)
            i in t || (t[i] = e[i]);
        return t
    }, mt = function(t, e) {
        for (var i in e)
            i in t || "duration" === i || "ease" === i || (t[i] = e[i])
    }, yt = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }, gt = function t(e, i) {
        for (var r in i)
            e[r] = M(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r];
        return e
    }, vt = function(t, e) {
        var i, r = {};
        for (i in t)
            i in e || (r[i] = t[i]);
        return r
    }, bt = function(t) {
        var e = t.parent || o
          , i = t.keyframes ? mt : dt;
        if (D(t.inherit))
            for (; e; )
                i(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }, wt = function(t, e, i, r) {
        void 0 === i && (i = "_first"),
        void 0 === r && (r = "_last");
        var n = e._prev
          , o = e._next;
        n ? n._next = o : t[i] === e && (t[i] = o),
        o ? o._prev = n : t[r] === e && (t[r] = n),
        e._next = e._prev = e.parent = null
    }, St = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, xt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i; )
                i._dirty = 1,
                i = i.parent;
        return t
    }, _t = function(t) {
        for (var e = t.parent; e && e.parent; )
            e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
        return t
    }, Et = function(t) {
        return t._repeat ? kt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, kt = function(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    }, Pt = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, At = function(t) {
        return t._end = at(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
    }, Tt = function(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = at(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        At(t),
        i._dirty || xt(i, t)),
        t
    }, Ct = function(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = Pt(t.rawTime(), e),
        (!e._dur || Vt(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)),
        xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp; )
                    i.rawTime() >= 0 && i.totalTime(i._tTime),
                    i = i._dp;
            t._zTime = -1e-8
        }
    }, Mt = function(t, e, i, r) {
        return e.parent && St(e),
        e._start = at(i + e._delay),
        e._end = at(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, i, r, n) {
            void 0 === i && (i = "_first"),
            void 0 === r && (r = "_last");
            var o, s = t[r];
            if (n)
                for (o = e[n]; s && s[n] > o; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[i],
            t[i] = e),
            e._next ? e._next._prev = e : t[r] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t._recent = e,
        r || Ct(t, e),
        t
    }, Dt = function(t, e) {
        return (N.ScrollTrigger || W("scrollTrigger", e)) && N.ScrollTrigger.create(e, t)
    }, Lt = function(t, e, i, r) {
        return Me(t, e),
        t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && c !== ce.frame ? ($.push(t),
        t._lazy = [e, r],
        1) : void 0 : 1
    }, Ot = function(t, e, i, r) {
        var n = t._repeat
          , o = at(e) || 0
          , s = t._tTime / t._tDur;
        return s && !r && (t._time *= o / t._dur),
        t._dur = o,
        t._tDur = n ? n < 0 ? 1e10 : at(o * (n + 1) + t._rDelay * n) : o,
        s && !r ? Tt(t, t._tTime = t._tDur * s) : t.parent && At(t),
        i || xt(t.parent, t),
        t
    }, Ft = function(t) {
        return t instanceof ke ? xt(t) : Ot(t, t._dur)
    }, It = {
        _start: 0,
        endTime: U
    }, Rt = function t(e, i) {
        var r, n, o = e.labels, s = e._recent || It, a = e.duration() >= b ? s.endTime(!1) : e._dur;
        return P(i) && (isNaN(i) || i in o) ? "<" === (r = i.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (r = i.indexOf("=")) < 0 ? (i in o || (o[i] = a),
        o[i]) : (n = +(i.charAt(r - 1) + i.substr(r + 1)),
        r > 1 ? t(e, i.substr(0, r - 1)) + n : a + n) : null == i ? a : +i
    }, Bt = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, Vt = function(t, e, i) {
        return i < t ? t : i > e ? e : i
    }, jt = function(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
    }, qt = [].slice, zt = function(t, e) {
        return t && M(t) && "length"in t && (!e && !t.length || t.length - 1 in t && M(t[0])) && !t.nodeType && t !== s
    }, Nt = function(t, e, i) {
        return void 0 === i && (i = []),
        t.forEach((function(t) {
            var r;
            return P(t) && !e || zt(t, 1) ? (r = i).push.apply(r, Ht(t)) : i.push(t)
        }
        )) || i
    }, Ht = function(t, e) {
        return !P(t) || e || !a && ue() ? I(t) ? Nt(t, e) : zt(t) ? qt.call(t, 0) : t ? [t] : [] : qt.call(l.querySelectorAll(t), 0)
    }, Gt = function(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }
        ))
    }, Wt = function(t) {
        if (A(t))
            return t;
        var e = M(t) ? t : {
            each: t
        }
          , i = ve(e.ease)
          , r = e.from || 0
          , n = parseFloat(e.base) || 0
          , o = {}
          , s = r > 0 && r < 1
          , a = isNaN(r) || s
          , l = e.axis
          , h = r
          , c = r;
        return P(r) ? h = c = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !s && a && (h = r[0],
        c = r[1]),
        function(t, s, u) {
            var p, f, d, m, y, g, v, w, S, x = (u || e).length, E = o[x];
            if (!E) {
                if (!(S = "auto" === e.grid ? 0 : (e.grid || [1, b])[1])) {
                    for (v = -b; v < (v = u[S++].getBoundingClientRect().left) && S < x; )
                        ;
                    S--
                }
                for (E = o[x] = [],
                p = a ? Math.min(S, x) * h - .5 : r % S,
                f = a ? x * c / S - .5 : r / S | 0,
                v = 0,
                w = b,
                g = 0; g < x; g++)
                    d = g % S - p,
                    m = f - (g / S | 0),
                    E[g] = y = l ? Math.abs("y" === l ? m : d) : _(d * d + m * m),
                    y > v && (v = y),
                    y < w && (w = y);
                "random" === r && Gt(E),
                E.max = v - w,
                E.min = w,
                E.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (S > x ? x - 1 : l ? "y" === l ? x / S : S : Math.max(S, x / S)) || 0) * ("edges" === r ? -1 : 1),
                E.b = x < 0 ? n - x : n,
                E.u = jt(e.amount || e.each) || 0,
                i = i && x < 0 ? ye(i) : i
            }
            return x = (E[t] - E.min) / E.max || 0,
            at(E.b + (i ? i(x) : x) * E.v) + E.u
        }
    }, Yt = function(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function(i) {
            return Math.floor(Math.round(parseFloat(i) / t) * t * e) / e + (T(i) ? 0 : jt(i))
        }
    }, Xt = function(t, e) {
        var i, r, n = I(t);
        return !n && M(t) && (i = n = t.radius || b,
        t.values ? (t = Ht(t.values),
        (r = !T(t[0])) && (i *= i)) : t = Yt(t.increment)),
        Bt(e, n ? A(t) ? function(e) {
            return r = t(e),
            Math.abs(r - e) <= i ? r : e
        }
        : function(e) {
            for (var n, o, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), l = b, h = 0, c = t.length; c--; )
                (n = r ? (n = t[c].x - s) * n + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && (l = n,
                h = c);
            return h = !i || l <= i ? t[h] : e,
            r || h === e || T(e) ? h : h + jt(e)
        }
        : Yt(t))
    }, Ut = function(t, e, i, r) {
        return Bt(I(t) ? !e : !0 === i ? !!(i = 0) : !r, (function() {
            return I(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / i) * i * r) / r
        }
        ))
    }, Kt = function(t, e, i) {
        return Bt(i, (function(i) {
            return t[~~e(i)]
        }
        ))
    }, $t = function(t) {
        for (var e, i, r, n, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            r = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            i = t.substr(e + 7, r - e - 7).match(n ? z : R),
            s += t.substr(o, e - o) + Ut(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5),
            o = r + 1;
        return s + t.substr(o, t.length - o)
    }, Qt = function(t, e, i, r, n) {
        var o = e - t
          , s = r - i;
        return Bt(n, (function(e) {
            return i + ((e - t) / o * s || 0)
        }
        ))
    }, Zt = function(t, e, i) {
        var r, n, o, s = t.labels, a = b;
        for (r in s)
            (n = s[r] - e) < 0 == !!i && n && a > (n = Math.abs(n)) && (o = r,
            a = n);
        return o
    }, Jt = function(t, e, i) {
        var r, n, o = t.vars, s = o[e];
        if (s)
            return r = o[e + "Params"],
            n = o.callbackScope || t,
            i && $.length && ct(),
            r ? s.apply(n, r) : s.call(n)
    }, te = function(t) {
        return St(t),
        t.progress() < 1 && Jt(t, "onInterrupt"),
        t
    }, ee = function(t) {
        var e = (t = !t.name && t.default || t).name
          , i = A(t)
          , r = e && !i && t.init ? function() {
            this._props = []
        }
        : t
          , n = {
            init: U,
            render: He,
            add: Te,
            kill: We,
            modifier: Ge,
            rawVars: 0
        }
          , o = {
            targetTest: 0,
            get: 0,
            getSetter: je,
            aliases: {},
            register: 0
        };
        if (ue(),
        t !== r) {
            if (Z[e])
                return;
            dt(r, dt(vt(t, n), o)),
            yt(r.prototype, yt(n, vt(t, o))),
            Z[r.prop = e] = r,
            t.targetTest && (et.push(r),
            K[e] = 1),
            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        X(e, r),
        t.register && t.register(Ze, r, Ue)
    }, ie = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, re = function(t, e, i) {
        return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
    }, ne = function(t, e, i) {
        var r, n, o, s, a, l, h, c, u, p, f = t ? T(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ie.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            ie[t])
                f = ie[t];
            else if ("#" === t.charAt(0))
                4 === t.length && (r = t.charAt(1),
                n = t.charAt(2),
                o = t.charAt(3),
                t = "#" + r + r + n + n + o + o),
                f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
            else if ("hsl" === t.substr(0, 3))
                if (f = p = t.match(R),
                e) {
                    if (~t.indexOf("="))
                        return f = t.match(B),
                        i && f.length < 4 && (f[3] = 1),
                        f
                } else
                    s = +f[0] % 360 / 360,
                    a = +f[1] / 100,
                    r = 2 * (l = +f[2] / 100) - (n = l <= .5 ? l * (a + 1) : l + a - l * a),
                    f.length > 3 && (f[3] *= 1),
                    f[0] = re(s + 1 / 3, r, n),
                    f[1] = re(s, r, n),
                    f[2] = re(s - 1 / 3, r, n);
            else
                f = t.match(R) || ie.transparent;
            f = f.map(Number)
        }
        return e && !p && (r = f[0] / 255,
        n = f[1] / 255,
        o = f[2] / 255,
        l = ((h = Math.max(r, n, o)) + (c = Math.min(r, n, o))) / 2,
        h === c ? s = a = 0 : (u = h - c,
        a = l > .5 ? u / (2 - h - c) : u / (h + c),
        s = h === r ? (n - o) / u + (n < o ? 6 : 0) : h === n ? (o - r) / u + 2 : (r - n) / u + 4,
        s *= 60),
        f[0] = ~~(s + .5),
        f[1] = ~~(100 * a + .5),
        f[2] = ~~(100 * l + .5)),
        i && f.length < 4 && (f[3] = 1),
        f
    }, oe = function(t) {
        var e = []
          , i = []
          , r = -1;
        return t.split(ae).forEach((function(t) {
            var n = t.match(V) || [];
            e.push.apply(e, n),
            i.push(r += n.length + 1)
        }
        )),
        e.c = i,
        e
    }, se = function(t, e, i) {
        var r, n, o, s, a = "", l = (t + a).match(ae), h = e ? "hsla(" : "rgba(", c = 0;
        if (!l)
            return t;
        if (l = l.map((function(t) {
            return (t = ne(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }
        )),
        i && (o = oe(t),
        (r = i.c).join(a) !== o.c.join(a)))
            for (s = (n = t.replace(ae, "1").split(V)).length - 1; c < s; c++)
                a += n[c] + (~r.indexOf(c) ? l.shift() || h + "0,0,0,0)" : (o.length ? o : l.length ? l : i).shift());
        if (!n)
            for (s = (n = t.split(ae)).length - 1; c < s; c++)
                a += n[c] + l[c];
        return a + n[s]
    }, ae = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in ie)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), le = /hsl[a]?\(/, he = function(t) {
        var e, i = t.join(" ");
        if (ae.lastIndex = 0,
        ae.test(i))
            return e = le.test(i),
            t[1] = se(t[1], e),
            t[0] = se(t[0], e, oe(t[1])),
            !0
    }, ce = function() {
        var t, e, i, r, n, o, c = Date.now, u = 500, f = 33, d = c(), m = d, y = 1e3 / 240, g = y, v = [], b = function i(s) {
            var a, l, h, p, b = c() - m, w = !0 === s;
            if (b > u && (d += b - f),
            ((a = (h = (m += b) - d) - g) > 0 || w) && (p = ++r.frame,
            n = h - 1e3 * r.time,
            r.time = h /= 1e3,
            g += a + (a >= y ? 4 : y - a),
            l = 1),
            w || (t = e(i)),
            l)
                for (o = 0; o < v.length; o++)
                    v[o](h, n, p, s)
        };
        return r = {
            time: 0,
            frame: 0,
            tick: function() {
                b(!0)
            },
            deltaRatio: function(t) {
                return n / (1e3 / (t || 60))
            },
            wake: function() {
                h && (!a && L() && (s = a = window,
                l = s.document || {},
                N.gsap = Ze,
                (s.gsapVersions || (s.gsapVersions = [])).push(Ze.version),
                G(H || s.GreenSockGlobals || !s.gsap && s || {}),
                i = s.requestAnimationFrame),
                t && r.sleep(),
                e = i || function(t) {
                    return setTimeout(t, g - 1e3 * r.time + 1 | 0)
                }
                ,
                p = 1,
                b(2))
            },
            sleep: function() {
                (i ? s.cancelAnimationFrame : clearTimeout)(t),
                p = 0,
                e = U
            },
            lagSmoothing: function(t, e) {
                u = t || 1 / 1e-8,
                f = Math.min(e, u, 0)
            },
            fps: function(t) {
                y = 1e3 / (t || 240),
                g = 1e3 * r.time + y
            },
            add: function(t) {
                v.indexOf(t) < 0 && v.push(t),
                ue()
            },
            remove: function(t) {
                var e;
                ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--
            },
            _listeners: v
        }
    }(), ue = function() {
        return !p && ce.wake()
    }, pe = {}, fe = /^[\d.\-M][\d.\-,\s]/, de = /["']/g, me = function(t) {
        for (var e, i, r, n = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++)
            i = o[a],
            e = a !== l - 1 ? i.lastIndexOf(",") : i.length,
            r = i.substr(0, e),
            n[s] = isNaN(r) ? r.replace(de, "").trim() : +r,
            s = i.substr(e + 1).trim();
        return n
    }, ye = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, ge = function t(e, i) {
        for (var r, n = e._first; n; )
            n instanceof ke ? t(n, i) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === i || (n.timeline ? t(n.timeline, i) : (r = n._ease,
            n._ease = n._yEase,
            n._yEase = r,
            n._yoyo = i)),
            n = n._next
    }, ve = function(t, e) {
        return t && (A(t) ? t : pe[t] || function(t) {
            var e, i, r, n, o = (t + "").split("("), s = pe[o[0]];
            return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [me(o[1])] : (e = t,
            i = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            n = e.indexOf("(", i),
            e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r)).split(",").map(pt)) : pe._CE && fe.test(t) ? pe._CE("", t) : s
        }(t)) || e
    }, be = function(t, e, i, r) {
        void 0 === i && (i = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === r && (r = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, o = {
            easeIn: e,
            easeOut: i,
            easeInOut: r
        };
        return st(t, (function(t) {
            for (var e in pe[t] = N[t] = o,
            pe[n = t.toLowerCase()] = i,
            o)
                pe[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = pe[t + "." + e] = o[e]
        }
        )),
        o
    }, we = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }, Se = function t(e, i, r) {
        var n = i >= 1 ? i : 1
          , o = (r || (e ? .3 : .45)) / (i < 1 ? i : 1)
          , s = o / w * (Math.asin(1 / n) || 0)
          , a = function(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * k((t - s) * o) + 1
        }
          , l = "out" === e ? a : "in" === e ? function(t) {
            return 1 - a(1 - t)
        }
        : we(a);
        return o = w / o,
        l.config = function(i, r) {
            return t(e, i, r)
        }
        ,
        l
    }, xe = function t(e, i) {
        void 0 === i && (i = 1.70158);
        var r = function(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
          , n = "out" === e ? r : "in" === e ? function(t) {
            return 1 - r(1 - t)
        }
        : we(r);
        return n.config = function(i) {
            return t(e, i)
        }
        ,
        n
    };
    st("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var i = e < 5 ? e + 1 : e;
        be(t + ",Power" + (i - 1), e ? function(t) {
            return Math.pow(t, i)
        }
        : function(t) {
            return t
        }
        , (function(t) {
            return 1 - Math.pow(1 - t, i)
        }
        ), (function(t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        }
        ))
    }
    )),
    pe.Linear.easeNone = pe.none = pe.Linear.easeIn,
    be("Elastic", Se("in"), Se("out"), Se()),
    f = 7.5625,
    m = 1 / (d = 2.75),
    be("Bounce", (function(t) {
        return 1 - y(1 - t)
    }
    ), y = function(t) {
        return t < m ? f * t * t : t < .7272727272727273 ? f * Math.pow(t - 1.5 / d, 2) + .75 : t < .9090909090909092 ? f * (t -= 2.25 / d) * t + .9375 : f * Math.pow(t - 2.625 / d, 2) + .984375
    }
    ),
    be("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }
    )),
    be("Circ", (function(t) {
        return -(_(1 - t * t) - 1)
    }
    )),
    be("Sine", (function(t) {
        return 1 === t ? 1 : 1 - E(t * S)
    }
    )),
    be("Back", xe("in"), xe("out"), xe()),
    pe.SteppedEase = pe.steps = N.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t
              , r = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((r * Vt(0, 1 - 1e-8, t) | 0) + n) * i
            }
        }
    },
    v.ease = pe["quad.out"],
    st("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return it += t + "," + t + "Params,"
    }
    ));
    var _e = function(t, e) {
        this.id = x++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : ot,
        this.set = e ? e.getSetter : je
    }
      , Ee = function() {
        function t(t, e) {
            var i = t.parent || o;
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Ot(this, +t.duration, 1, 1),
            this.data = t.data,
            p || ce.wake(),
            i && Mt(i, this, e || 0 === e ? e : i._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0)
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            Ot(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (ue(),
            !arguments.length)
                return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (Tt(this, t); i.parent; )
                    i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                    i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Mt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            ut(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Et(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Et(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? kt(this._tTime, i) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? Pt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
            _t(this.totalTime(Vt(-this._delay, this._tDur, e), !0))
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (ue(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Mt(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (D(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Pt(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                i = e._start + i / (e._ts || 1),
                e = e._dp;
            return i
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            Ft(this)) : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            return arguments.length ? (this._rDelay = t,
            Ft(this)) : this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(Rt(this, t), D(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, D(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = 0,
            this._zTime = -1e-8,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, i = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8))
        }
        ,
        e.eventCallback = function(t, e, i) {
            var r = this.vars;
            return arguments.length > 1 ? (e ? (r[t] = e,
            i && (r[t + "Params"] = i),
            "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
            this) : r[t]
        }
        ,
        e.then = function(t) {
            var e = this;
            return new Promise((function(i) {
                var r = A(t) ? t : ft
                  , n = function() {
                    var t = e.then;
                    e.then = null,
                    A(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                    i(r),
                    e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
            }
            ))
        }
        ,
        e.kill = function() {
            te(this)
        }
        ,
        t
    }();
    dt(Ee.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var ke = function(t) {
        function e(e, i) {
            var n;
            return void 0 === e && (e = {}),
            (n = t.call(this, e, i) || this).labels = {},
            n.smoothChildTiming = !!e.smoothChildTiming,
            n.autoRemoveChildren = !!e.autoRemoveChildren,
            n._sort = D(e.sortChildren),
            n.parent && Ct(n.parent, r(n)),
            e.scrollTrigger && Dt(r(n), e.scrollTrigger),
            n
        }
        n(e, t);
        var i = e.prototype;
        return i.to = function(t, e, i) {
            return new Fe(t,ht(arguments, 0, this),Rt(this, T(e) ? arguments[3] : i)),
            this
        }
        ,
        i.from = function(t, e, i) {
            return new Fe(t,ht(arguments, 1, this),Rt(this, T(e) ? arguments[3] : i)),
            this
        }
        ,
        i.fromTo = function(t, e, i, r) {
            return new Fe(t,ht(arguments, 2, this),Rt(this, T(e) ? arguments[4] : r)),
            this
        }
        ,
        i.set = function(t, e, i) {
            return e.duration = 0,
            e.parent = this,
            bt(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Fe(t,e,Rt(this, i),1),
            this
        }
        ,
        i.call = function(t, e, i) {
            return Mt(this, Fe.delayedCall(0, t, e), Rt(this, i))
        }
        ,
        i.staggerTo = function(t, e, i, r, n, o, s) {
            return i.duration = e,
            i.stagger = i.stagger || r,
            i.onComplete = o,
            i.onCompleteParams = s,
            i.parent = this,
            new Fe(t,i,Rt(this, n)),
            this
        }
        ,
        i.staggerFrom = function(t, e, i, r, n, o, s) {
            return i.runBackwards = 1,
            bt(i).immediateRender = D(i.immediateRender),
            this.staggerTo(t, e, i, r, n, o, s)
        }
        ,
        i.staggerFromTo = function(t, e, i, r, n, o, s, a) {
            return r.startAt = i,
            bt(r).immediateRender = D(r.immediateRender),
            this.staggerTo(t, e, r, n, o, s, a)
        }
        ,
        i.render = function(t, e, i) {
            var r, n, s, a, l, h, c, u, p, f, d, m, y = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, b = this !== o && t > g - 1e-8 && t >= 0 ? g : t < 1e-8 ? 0 : t, w = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (b !== this._tTime || i || w) {
                if (y !== this._time && v && (b += this._time - y,
                t += this._time - y),
                r = b,
                p = this._start,
                h = !(u = this._ts),
                w && (v || (y = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat && (d = this._yoyo,
                l = v + this._rDelay,
                r = at(b % l),
                b === g ? (a = this._repeat,
                r = v) : ((a = ~~(b / l)) && a === b / l && (r = v,
                a--),
                r > v && (r = v)),
                f = kt(this._tTime, l),
                !y && this._tTime && f !== a && (f = a),
                d && 1 & a && (r = v - r,
                m = 1),
                a !== f && !this._lock)) {
                    var S = d && 1 & f
                      , x = S === (d && 1 & a);
                    if (a < f && (S = !S),
                    y = S ? 0 : v,
                    this._lock = 1,
                    this.render(y || (m ? 0 : at(a * l)), e, !v)._lock = 0,
                    !e && this.parent && Jt(this, "onRepeat"),
                    this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                    y !== this._time || h !== !this._ts)
                        return this;
                    if (v = this._dur,
                    g = this._tDur,
                    x && (this._lock = 2,
                    y = S ? v : -1e-4,
                    this.render(y, !0),
                    this.vars.repeatRefresh && !m && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !h)
                        return this;
                    ge(this, m)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, i) {
                    var r;
                    if (i > e)
                        for (r = t._first; r && r._start <= i; ) {
                            if (!r._dur && "isPause" === r.data && r._start > e)
                                return r;
                            r = r._next
                        }
                    else
                        for (r = t._last; r && r._start >= i; ) {
                            if (!r._dur && "isPause" === r.data && r._start < e)
                                return r;
                            r = r._prev
                        }
                }(this, at(y), at(r))) && (b -= r - (r = c._start)),
                this._tTime = b,
                this._time = r,
                this._act = !u,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t),
                !y && r && !e && Jt(this, "onStart"),
                r >= y && t >= 0)
                    for (n = this._first; n; ) {
                        if (s = n._next,
                        (n._act || r >= n._start) && n._ts && c !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, i);
                            if (n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i),
                            r !== this._time || !this._ts && !h) {
                                c = 0,
                                s && (b += this._zTime = -1e-8);
                                break
                            }
                        }
                        n = s
                    }
                else {
                    n = this._last;
                    for (var _ = t < 0 ? t : r; n; ) {
                        if (s = n._prev,
                        (n._act || _ <= n._end) && n._ts && c !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, i);
                            if (n.render(n._ts > 0 ? (_ - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (_ - n._start) * n._ts, e, i),
                            r !== this._time || !this._ts && !h) {
                                c = 0,
                                s && (b += this._zTime = _ ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        n = s
                    }
                }
                if (c && !e && (this.pause(),
                c.render(r >= y ? 0 : -1e-8)._zTime = r >= y ? 1 : -1,
                this._ts))
                    return this._start = p,
                    At(this),
                    this.render(t, e, i);
                this._onUpdate && !e && Jt(this, "onUpdate", !0),
                (b === g && g >= this.totalDuration() || !b && y) && (p !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !v) && (b === g && this._ts > 0 || !b && this._ts < 0) && St(this, 1),
                e || t < 0 && !y || !b && !y || (Jt(this, b === g ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(b < g && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        i.add = function(t, e) {
            var i = this;
            if (T(e) || (e = Rt(this, e)),
            !(t instanceof Ee)) {
                if (I(t))
                    return t.forEach((function(t) {
                        return i.add(t, e)
                    }
                    )),
                    this;
                if (P(t))
                    return this.addLabel(t, e);
                if (!A(t))
                    return this;
                t = Fe.delayedCall(0, t)
            }
            return this !== t ? Mt(this, t, e) : this
        }
        ,
        i.getChildren = function(t, e, i, r) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === i && (i = !0),
            void 0 === r && (r = -b);
            for (var n = [], o = this._first; o; )
                o._start >= r && (o instanceof Fe ? e && n.push(o) : (i && n.push(o),
                t && n.push.apply(n, o.getChildren(!0, e, i)))),
                o = o._next;
            return n
        }
        ,
        i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                if (e[i].vars.id === t)
                    return e[i]
        }
        ,
        i.remove = function(t) {
            return P(t) ? this.removeLabel(t) : A(t) ? this.killTweensOf(t) : (wt(this, t),
            t === this._recent && (this._recent = this._last),
            xt(this))
        }
        ,
        i.totalTime = function(e, i) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = at(ce.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
            t.prototype.totalTime.call(this, e, i),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        i.addLabel = function(t, e) {
            return this.labels[t] = Rt(this, e),
            this
        }
        ,
        i.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        i.addPause = function(t, e, i) {
            var r = Fe.delayedCall(0, e || U, i);
            return r.data = "isPause",
            this._hasPause = 1,
            Mt(this, r, Rt(this, t))
        }
        ,
        i.removePause = function(t) {
            var e = this._first;
            for (t = Rt(this, t); e; )
                e._start === t && "isPause" === e.data && St(e),
                e = e._next
        }
        ,
        i.killTweensOf = function(t, e, i) {
            for (var r = this.getTweensOf(t, i), n = r.length; n--; )
                Pe !== r[n] && r[n].kill(t, e);
            return this
        }
        ,
        i.getTweensOf = function(t, e) {
            for (var i, r = [], n = Ht(t), o = this._first, s = T(e); o; )
                o instanceof Fe ? lt(o._targets, n) && (s ? (!Pe || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (i = o.getTweensOf(n, e)).length && r.push.apply(r, i),
                o = o._next;
            return r
        }
        ,
        i.tweenTo = function(t, e) {
            e = e || {};
            var i = this
              , r = Rt(i, t)
              , n = e
              , o = n.startAt
              , s = n.onStart
              , a = n.onStartParams
              , l = Fe.to(i, dt(e, {
                ease: "none",
                lazy: !1,
                time: r,
                overwrite: "auto",
                duration: e.duration || Math.abs((r - (o && "time"in o ? o.time : i._time)) / i.timeScale()) || 1e-8,
                onStart: function() {
                    i.pause();
                    var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                    l._dur !== t && Ot(l, t, 0, 1).render(l._time, !0, !0),
                    s && s.apply(l, a || [])
                }
            }));
            return l
        }
        ,
        i.tweenFromTo = function(t, e, i) {
            return this.tweenTo(e, dt({
                startAt: {
                    time: Rt(this, t)
                }
            }, i))
        }
        ,
        i.recent = function() {
            return this._recent
        }
        ,
        i.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            Zt(this, Rt(this, t))
        }
        ,
        i.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            Zt(this, Rt(this, t), 1)
        }
        ,
        i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }
        ,
        i.shiftChildren = function(t, e, i) {
            void 0 === i && (i = 0);
            for (var r, n = this._first, o = this.labels; n; )
                n._start >= i && (n._start += t,
                n._end += t),
                n = n._next;
            if (e)
                for (r in o)
                    o[r] >= i && (o[r] += t);
            return xt(this)
        }
        ,
        i.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i; )
                e = i._next,
                this.remove(i),
                i = e;
            return this._time = this._tTime = this._pTime = 0,
            t && (this.labels = {}),
            xt(this)
        }
        ,
        i.totalDuration = function(t) {
            var e, i, r, n = 0, s = this, a = s._last, l = b;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (r = s.parent; a; )
                    e = a._prev,
                    a._dirty && a.totalDuration(),
                    (i = a._start) > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                    Mt(s, a, i - a._delay, 1)._lock = 0) : l = i,
                    i < 0 && a._ts && (n -= i,
                    (!r && !s._dp || r && r.smoothChildTiming) && (s._start += i / s._ts,
                    s._time -= i,
                    s._tTime -= i),
                    s.shiftChildren(-i, !1, -Infinity),
                    l = 0),
                    a._end > n && a._ts && (n = a._end),
                    a = e;
                Ot(s, s === o && s._time > n ? s._time : n, 1, 1),
                s._dirty = 0
            }
            return s._tDur
        }
        ,
        e.updateRoot = function(t) {
            if (o._ts && (ut(o, Pt(t, o)),
            c = ce.frame),
            ce.frame >= tt) {
                tt += g.autoSleep || 120;
                var e = o._first;
                if ((!e || !e._ts) && g.autoSleep && ce._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || ce.sleep()
                }
            }
        }
        ,
        e
    }(Ee);
    dt(ke.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Pe, Ae = function(t, e, i, r, n, o, s) {
        var a, l, h, c, u, p, f, d, m = new Ue(this._pt,t,e,0,1,Ne,null,n), y = 0, g = 0;
        for (m.b = i,
        m.e = r,
        i += "",
        (f = ~(r += "").indexOf("random(")) && (r = $t(r)),
        o && (o(d = [i, r], t, e),
        i = d[0],
        r = d[1]),
        l = i.match(j) || []; a = j.exec(r); )
            c = a[0],
            u = r.substring(y, a.index),
            h ? h = (h + 1) % 5 : "rgba(" === u.substr(-5) && (h = 1),
            c !== l[g++] && (p = parseFloat(l[g - 1]) || 0,
            m._pt = {
                _next: m._pt,
                p: u || 1 === g ? u : ",",
                s: p,
                c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - p,
                m: h && h < 4 ? Math.round : 0
            },
            y = j.lastIndex);
        return m.c = y < r.length ? r.substring(y, r.length) : "",
        m.fp = s,
        (q.test(r) || f) && (m.e = 0),
        this._pt = m,
        m
    }, Te = function(t, e, i, r, n, o, s, a, l) {
        A(r) && (r = r(n || 0, t, o));
        var h, c = t[e], u = "get" !== i ? i : A(c) ? l ? t[e.indexOf("set") || !A(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c, p = A(c) ? l ? Be : Re : Ie;
        if (P(r) && (~r.indexOf("random(") && (r = $t(r)),
        "=" === r.charAt(1) && (r = parseFloat(u) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (jt(u) || 0))),
        u !== r)
            return isNaN(u * r) ? (!c && !(e in t) && W(e, r),
            Ae.call(this, t, e, u, r, p, a || g.stringFilter, l)) : (h = new Ue(this._pt,t,e,+u || 0,r - (u || 0),"boolean" == typeof c ? ze : qe,0,p),
            l && (h.fp = l),
            s && h.modifier(s, this, t),
            this._pt = h)
    }, Ce = function(t, e, i, r, n, o) {
        var s, a, l, h;
        if (Z[t] && !1 !== (s = new Z[t]).init(n, s.rawVars ? e[t] : function(t, e, i, r, n) {
            if (A(t) && (t = De(t, n, e, i, r)),
            !M(t) || t.style && t.nodeType || I(t) || F(t))
                return P(t) ? De(t, n, e, i, r) : t;
            var o, s = {};
            for (o in t)
                s[o] = De(t[o], n, e, i, r);
            return s
        }(e[t], r, n, o, i), i, r, o) && (i._pt = a = new Ue(i._pt,n,t,0,1,s.render,s,0,s.priority),
        i !== u))
            for (l = i._ptLookup[i._targets.indexOf(n)],
            h = s._props.length; h--; )
                l[s._props[h]] = a;
        return s
    }, Me = function t(e, i) {
        var r, n, s, a, l, h, c, u, p, f, d, m, y, g = e.vars, b = g.ease, w = g.startAt, S = g.immediateRender, x = g.lazy, _ = g.onUpdate, E = g.onUpdateParams, k = g.callbackScope, P = g.runBackwards, A = g.yoyoEase, T = g.keyframes, C = g.autoRevert, M = e._dur, L = e._startAt, O = e._targets, F = e.parent, I = F && "nested" === F.data ? F.parent._targets : O, R = "auto" === e._overwrite, B = e.timeline;
        if (B && (!T || !b) && (b = "none"),
        e._ease = ve(b, v.ease),
        e._yEase = A ? ye(ve(!0 === A ? b : A, v.ease)) : 0,
        A && e._yoyo && !e._repeat && (A = e._yEase,
        e._yEase = e._ease,
        e._ease = A),
        !B) {
            if (m = (u = O[0] ? nt(O[0]).harness : 0) && g[u.prop],
            r = vt(g, K),
            L && L.render(-1, !0).kill(),
            w) {
                if (St(e._startAt = Fe.set(O, dt({
                    data: "isStart",
                    overwrite: !1,
                    parent: F,
                    immediateRender: !0,
                    lazy: D(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: _,
                    onUpdateParams: E,
                    callbackScope: k,
                    stagger: 0
                }, w))),
                S)
                    if (i > 0)
                        C || (e._startAt = 0);
                    else if (M && !(i < 0 && L))
                        return void (i && (e._zTime = i))
            } else if (P && M)
                if (L)
                    !C && (e._startAt = 0);
                else if (i && (S = !1),
                s = dt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: S && D(x),
                    immediateRender: S,
                    stagger: 0,
                    parent: F
                }, r),
                m && (s[u.prop] = m),
                St(e._startAt = Fe.set(O, s)),
                S) {
                    if (!i)
                        return
                } else
                    t(e._startAt, 1e-8);
            for (e._pt = 0,
            x = M && D(x) || x && !M,
            n = 0; n < O.length; n++) {
                if (c = (l = O[n])._gsap || rt(O)[n]._gsap,
                e._ptLookup[n] = f = {},
                Q[c.id] && $.length && ct(),
                d = I === O ? n : I.indexOf(l),
                u && !1 !== (p = new u).init(l, m || r, e, d, I) && (e._pt = a = new Ue(e._pt,l,p.name,0,1,p.render,p,0,p.priority),
                p._props.forEach((function(t) {
                    f[t] = a
                }
                )),
                p.priority && (h = 1)),
                !u || m)
                    for (s in r)
                        Z[s] && (p = Ce(s, r, e, d, l, I)) ? p.priority && (h = 1) : f[s] = a = Te.call(e, l, s, "get", r[s], d, I, 0, g.stringFilter);
                e._op && e._op[n] && e.kill(l, e._op[n]),
                R && e._pt && (Pe = e,
                o.killTweensOf(l, f, e.globalTime(0)),
                y = !e.parent,
                Pe = 0),
                e._pt && x && (Q[c.id] = 1)
            }
            h && Xe(e),
            e._onInit && e._onInit(e)
        }
        e._from = !B && !!g.runBackwards,
        e._onUpdate = _,
        e._initted = (!e._op || e._pt) && !y
    }, De = function(t, e, i, r, n) {
        return A(t) ? t.call(e, i, r, n) : P(t) && ~t.indexOf("random(") ? $t(t) : t
    }, Le = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Oe = (Le + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Fe = function(t) {
        function e(e, i, n, s) {
            var a;
            "number" == typeof i && (n.duration = i,
            i = n,
            n = null);
            var l, h, c, u, p, f, d, m, y = (a = t.call(this, s ? i : bt(i), n) || this).vars, v = y.duration, b = y.delay, w = y.immediateRender, S = y.stagger, x = y.overwrite, _ = y.keyframes, E = y.defaults, k = y.scrollTrigger, P = y.yoyoEase, A = a.parent, C = (I(e) || F(e) ? T(e[0]) : "length"in i) ? [e] : Ht(e);
            if (a._targets = C.length ? rt(C) : Y("GSAP target " + e + " not found. https://greensock.com", !g.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = x,
            _ || S || O(v) || O(b)) {
                if (i = a.vars,
                (l = a.timeline = new ke({
                    data: "nested",
                    defaults: E || {}
                })).kill(),
                l.parent = r(a),
                _)
                    dt(l.vars.defaults, {
                        ease: "none"
                    }),
                    _.forEach((function(t) {
                        return l.to(C, t, ">")
                    }
                    ));
                else {
                    if (u = C.length,
                    d = S ? Wt(S) : U,
                    M(S))
                        for (p in S)
                            ~Le.indexOf(p) && (m || (m = {}),
                            m[p] = S[p]);
                    for (h = 0; h < u; h++) {
                        for (p in c = {},
                        i)
                            Oe.indexOf(p) < 0 && (c[p] = i[p]);
                        c.stagger = 0,
                        P && (c.yoyoEase = P),
                        m && yt(c, m),
                        f = C[h],
                        c.duration = +De(v, r(a), h, f, C),
                        c.delay = (+De(b, r(a), h, f, C) || 0) - a._delay,
                        !S && 1 === u && c.delay && (a._delay = b = c.delay,
                        a._start += b,
                        c.delay = 0),
                        l.to(f, c, d(h, f, C))
                    }
                    l.duration() ? v = b = 0 : a.timeline = 0
                }
                v || a.duration(v = l.duration())
            } else
                a.timeline = 0;
            return !0 === x && (Pe = r(a),
            o.killTweensOf(C),
            Pe = 0),
            A && Ct(A, r(a)),
            (w || !v && !_ && a._start === at(A._time) && D(w) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(r(a)) && "nested" !== A.data) && (a._tTime = -1e-8,
            a.render(Math.max(0, -b))),
            k && Dt(r(a), k),
            a
        }
        n(e, t);
        var i = e.prototype;
        return i.render = function(t, e, i) {
            var r, n, o, s, a, l, h, c, u, p = this._time, f = this._tDur, d = this._dur, m = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;
            if (d) {
                if (m !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                    if (r = m,
                    c = this.timeline,
                    this._repeat) {
                        if (s = d + this._rDelay,
                        r = at(m % s),
                        m === f ? (o = this._repeat,
                        r = d) : ((o = ~~(m / s)) && o === m / s && (r = d,
                        o--),
                        r > d && (r = d)),
                        (l = this._yoyo && 1 & o) && (u = this._yEase,
                        r = d - r),
                        a = kt(this._tTime, s),
                        r === p && !i && this._initted)
                            return this;
                        o !== a && (c && this._yEase && ge(c, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1,
                        this.render(at(s * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Lt(this, t < 0 ? t : r, i, e))
                            return this._tTime = 0,
                            this;
                        if (d !== this._dur)
                            return this.render(t, e, i)
                    }
                    for (this._tTime = m,
                    this._time = r,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (u || this._ease)(r / d),
                    this._from && (this.ratio = h = 1 - h),
                    r && !p && !e && Jt(this, "onStart"),
                    n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    c && c.render(t < 0 ? t : !r && l ? -1e-8 : c._dur * h, e, i) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                    Jt(this, "onUpdate")),
                    this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && Jt(this, "onRepeat"),
                    m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && St(this, 1),
                    e || t < 0 && !p || !m && !p || (Jt(this, m === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                }
            } else
                !function(t, e, i, r) {
                    var n, o, s = t.ratio, a = e < 0 || !e && s && !t._start && t._zTime > 1e-8 && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1, l = t._rDelay, h = 0;
                    if (l && t._repeat && (h = Vt(0, t._tDur, e),
                    kt(h, l) !== (o = kt(t._tTime, l)) && (s = 1 - a,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    a !== s || r || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && Lt(t, e, r, i))
                            return;
                        for (o = t._zTime,
                        t._zTime = e || (i ? 1e-8 : 0),
                        i || (i = e && !o),
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = h,
                        i || Jt(t, "onStart"),
                        n = t._pt; n; )
                            n.r(a, n.d),
                            n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !i && Jt(t, "onUpdate"),
                        h && t._repeat && !i && t.parent && Jt(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === a && (a && St(t, 1),
                        i || (Jt(t, a ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, i);
            return this
        }
        ,
        i.targets = function() {
            return this._targets
        }
        ,
        i.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
        }
        ,
        i.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e) && (this._lazy = 0,
            this.parent))
                return te(this);
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Pe && !0 !== Pe.vars.overwrite)._first || te(this),
                this.parent && i !== this.timeline.totalDuration() && Ot(this, this._dur * this.timeline._tDur / i, 0, 1),
                this
            }
            var r, n, o, s, a, l, h, c = this._targets, u = t ? Ht(t) : c, p = this._ptLookup, f = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
                    ;
                return i < 0
            }(c, u))
                return "all" === e && (this._pt = 0),
                te(this);
            for (r = this._op = this._op || [],
            "all" !== e && (P(e) && (a = {},
            st(e, (function(t) {
                return a[t] = 1
            }
            )),
            e = a),
            e = function(t, e) {
                var i, r, n, o, s = t[0] ? nt(t[0]).harness : 0, a = s && s.aliases;
                if (!a)
                    return e;
                for (r in i = yt({}, e),
                a)
                    if (r in i)
                        for (n = (o = a[r].split(",")).length; n--; )
                            i[o[n]] = i[r];
                return i
            }(c, e)),
            h = c.length; h--; )
                if (~u.indexOf(c[h]))
                    for (a in n = p[h],
                    "all" === e ? (r[h] = e,
                    s = n,
                    o = {}) : (o = r[h] = r[h] || {},
                    s = e),
                    s)
                        (l = n && n[a]) && ("kill"in l.d && !0 !== l.d.kill(a) || wt(this, l, "_pt"),
                        delete n[a]),
                        "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && f && te(this),
            this
        }
        ,
        e.to = function(t, i) {
            return new e(t,i,arguments[2])
        }
        ,
        e.from = function(t, i) {
            return new e(t,ht(arguments, 1))
        }
        ,
        e.delayedCall = function(t, i, r, n) {
            return new e(i,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: n
            })
        }
        ,
        e.fromTo = function(t, i, r) {
            return new e(t,ht(arguments, 2))
        }
        ,
        e.set = function(t, i) {
            return i.duration = 0,
            i.repeatDelay || (i.repeat = 0),
            new e(t,i)
        }
        ,
        e.killTweensOf = function(t, e, i) {
            return o.killTweensOf(t, e, i)
        }
        ,
        e
    }(Ee);
    dt(Fe.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    st("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Fe[t] = function() {
            var e = new ke
              , i = qt.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, i)
        }
    }
    ));
    var Ie = function(t, e, i) {
        return t[e] = i
    }
      , Re = function(t, e, i) {
        return t[e](i)
    }
      , Be = function(t, e, i, r) {
        return t[e](r.fp, i)
    }
      , Ve = function(t, e, i) {
        return t.setAttribute(e, i)
    }
      , je = function(t, e) {
        return A(t[e]) ? Re : C(t[e]) && t.setAttribute ? Ve : Ie
    }
      , qe = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    }
      , ze = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , Ne = function(t, e) {
        var i = e._pt
          , r = "";
        if (!t && e.b)
            r = e.b;
        else if (1 === t && e.e)
            r = e.e;
        else {
            for (; i; )
                r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r,
                i = i._next;
            r += e.c
        }
        e.set(e.t, e.p, r, e)
    }
      , He = function(t, e) {
        for (var i = e._pt; i; )
            i.r(t, i.d),
            i = i._next
    }
      , Ge = function(t, e, i, r) {
        for (var n, o = this._pt; o; )
            n = o._next,
            o.p === r && o.modifier(t, e, i),
            o = n
    }
      , We = function(t) {
        for (var e, i, r = this._pt; r; )
            i = r._next,
            r.p === t && !r.op || r.op === t ? wt(this, r, "_pt") : r.dep || (e = 1),
            r = i;
        return !e
    }
      , Ye = function(t, e, i, r) {
        r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
    }
      , Xe = function(t) {
        for (var e, i, r, n, o = t._pt; o; ) {
            for (e = o._next,
            i = r; i && i.pr > o.pr; )
                i = i._next;
            (o._prev = i ? i._prev : n) ? o._prev._next = o : r = o,
            (o._next = i) ? i._prev = o : n = o,
            o = e
        }
        t._pt = r
    }
      , Ue = function() {
        function t(t, e, i, r, n, o, s, a, l) {
            this.t = e,
            this.s = r,
            this.c = n,
            this.p = i,
            this.r = o || qe,
            this.d = s || this,
            this.set = a || Ie,
            this.pr = l || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, i) {
            this.mSet = this.mSet || this.set,
            this.set = Ye,
            this.m = t,
            this.mt = i,
            this.tween = e
        }
        ,
        t
    }();
    st(it + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return K[t] = 1
    }
    )),
    N.TweenMax = N.TweenLite = Fe,
    N.TimelineLite = N.TimelineMax = ke,
    o = new ke({
        sortChildren: !1,
        defaults: v,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    g.stringFilter = he;
    var Ke = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            e.forEach((function(t) {
                return ee(t)
            }
            ))
        },
        timeline: function(t) {
            return new ke(t)
        },
        getTweensOf: function(t, e) {
            return o.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, r) {
            P(t) && (t = Ht(t)[0]);
            var n = nt(t || {}).get
              , o = i ? ft : pt;
            return "native" === i && (i = ""),
            t ? e ? o((Z[e] && Z[e].get || n)(t, e, i, r)) : function(e, i, r) {
                return o((Z[e] && Z[e].get || n)(t, e, i, r))
            }
            : t
        },
        quickSetter: function(t, e, i) {
            if ((t = Ht(t)).length > 1) {
                var r = t.map((function(t) {
                    return Ze.quickSetter(t, e, i)
                }
                ))
                  , n = r.length;
                return function(t) {
                    for (var e = n; e--; )
                        r[e](t)
                }
            }
            t = t[0] || {};
            var o = Z[e]
              , s = nt(t)
              , a = s.harness && (s.harness.aliases || {})[e] || e
              , l = o ? function(e) {
                var r = new o;
                u._pt = 0,
                r.init(t, i ? e + i : e, u, 0, [t]),
                r.render(1, r),
                u._pt && He(1, u)
            }
            : s.set(t, a);
            return o ? l : function(e) {
                return l(t, a, i ? e + i : e, s, 1)
            }
        },
        isTweening: function(t) {
            return o.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = ve(t.ease, v.ease)),
            gt(v, t || {})
        },
        config: function(t) {
            return gt(g, t || {})
        },
        registerEffect: function(t) {
            var e = t.name
              , i = t.effect
              , r = t.plugins
              , n = t.defaults
              , o = t.extendTimeline;
            (r || "").split(",").forEach((function(t) {
                return t && !Z[t] && !N[t] && Y(e + " effect requires " + t + " plugin.")
            }
            )),
            J[e] = function(t, e, r) {
                return i(Ht(t), dt(e || {}, n), r)
            }
            ,
            o && (ke.prototype[e] = function(t, i, r) {
                return this.add(J[e](t, M(i) ? i : (r = i) && {}, this), r)
            }
            )
        },
        registerEase: function(t, e) {
            pe[t] = ve(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? ve(t, e) : pe
        },
        getById: function(t) {
            return o.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var i, r, n = new ke(t);
            for (n.smoothChildTiming = D(t.smoothChildTiming),
            o.remove(n),
            n._dp = 0,
            n._time = n._tTime = o._time,
            i = o._first; i; )
                r = i._next,
                !e && !i._dur && i instanceof Fe && i.vars.onComplete === i._targets[0] || Mt(n, i, i._start - i._delay),
                i = r;
            return Mt(o, n, 0),
            n
        },
        utils: {
            wrap: function t(e, i, r) {
                var n = i - e;
                return I(e) ? Kt(e, t(0, e.length), i) : Bt(r, (function(t) {
                    return (n + (t - e) % n) % n + e
                }
                ))
            },
            wrapYoyo: function t(e, i, r) {
                var n = i - e
                  , o = 2 * n;
                return I(e) ? Kt(e, t(0, e.length - 1), i) : Bt(r, (function(t) {
                    return e + ((t = (o + (t - e) % o) % o || 0) > n ? o - t : t)
                }
                ))
            },
            distribute: Wt,
            random: Ut,
            snap: Xt,
            normalize: function(t, e, i) {
                return Qt(t, e, 0, 1, i)
            },
            getUnit: jt,
            clamp: function(t, e, i) {
                return Bt(i, (function(i) {
                    return Vt(t, e, i)
                }
                ))
            },
            splitColor: ne,
            toArray: Ht,
            mapRange: Qt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }
                    ), t)
                }
            },
            unitize: function(t, e) {
                return function(i) {
                    return t(parseFloat(i)) + (e || jt(i))
                }
            },
            interpolate: function t(e, i, r, n) {
                var o = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                }
                ;
                if (!o) {
                    var s, a, l, h, c, u = P(e), p = {};
                    if (!0 === r && (n = 1) && (r = null),
                    u)
                        e = {
                            p: e
                        },
                        i = {
                            p: i
                        };
                    else if (I(e) && !I(i)) {
                        for (l = [],
                        h = e.length,
                        c = h - 2,
                        a = 1; a < h; a++)
                            l.push(t(e[a - 1], e[a]));
                        h--,
                        o = function(t) {
                            t *= h;
                            var e = Math.min(c, ~~t);
                            return l[e](t - e)
                        }
                        ,
                        r = i
                    } else
                        n || (e = yt(I(e) ? [] : {}, e));
                    if (!l) {
                        for (s in i)
                            Te.call(p, e, s, "get", i[s]);
                        o = function(t) {
                            return He(t, p) || (u ? e.p : e)
                        }
                    }
                }
                return Bt(r, o)
            },
            shuffle: Gt
        },
        install: G,
        effects: J,
        ticker: ce,
        updateRoot: ke.updateRoot,
        plugins: Z,
        globalTimeline: o,
        core: {
            PropTween: Ue,
            globals: X,
            Tween: Fe,
            Timeline: ke,
            Animation: Ee,
            getCache: nt,
            _removeLinkedListItem: wt
        }
    };
    st("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return Ke[t] = Fe[t]
    }
    )),
    ce.add(ke.updateRoot),
    u = Ke.to({}, {
        duration: 0
    });
    var $e = function(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
            i = i._next;
        return i
    }
      , Qe = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, i, r) {
                r._onInit = function(t) {
                    var r, n;
                    if (P(i) && (r = {},
                    st(i, (function(t) {
                        return r[t] = 1
                    }
                    )),
                    i = r),
                    e) {
                        for (n in r = {},
                        i)
                            r[n] = e(i[n]);
                        i = r
                    }
                    !function(t, e) {
                        var i, r, n, o = t._targets;
                        for (i in e)
                            for (r = o.length; r--; )
                                (n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = $e(n, i)),
                                n && n.modifier && n.modifier(e[i], t, o[r], i))
                    }(t, i)
                }
            }
        }
    }
      , Ze = Ke.registerPlugin({
        name: "attr",
        init: function(t, e, i, r, n) {
            var o, s;
            for (o in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, n, 0, 0, o)) && (s.op = o),
                this._props.push(o)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var i = e.length; i--; )
                this.add(t, i, t[i] || 0, e[i])
        }
    }, Qe("roundProps", Yt), Qe("modifiers"), Qe("snap", Xt)) || Ke;
    Fe.version = ke.version = Ze.version = "3.5.1",
    h = 1,
    L() && ue();
    var Je = pe.Power0
      , ti = pe.Power1
      , ei = pe.Power2
      , ii = pe.Power3
      , ri = pe.Power4
      , ni = pe.Linear
      , oi = pe.Quad
      , si = pe.Cubic
      , ai = pe.Quart
      , li = pe.Quint
      , hi = pe.Strong
      , ci = pe.Elastic
      , ui = pe.Back
      , pi = pe.SteppedEase
      , fi = pe.Bounce
      , di = pe.Sine
      , mi = pe.Expo
      , yi = pe.Circ
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return s
    }
    ));
    var r = i(12)
      , n = i(29)
      , o = i.n(n)
      , s = {
        currentView: null,
        browserObj: Object(r.a)(),
        vhCheckObj: o()("vh-check"),
        buroScroll: null,
        scrollVal: 0,
        highway: null
    }
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(0)
      , n = i(13)
      , o = i(2)
      , s = i(8)
      , a = {
        dom: {
            wrapper: document.querySelector(".audio-btn-wrapper"),
            icon: document.querySelector(".audio-btn-wrapper svg"),
            line: document.querySelector(".audio-btn-wrapper .line"),
            soundIcon: document.querySelector(".audio-btn-wrapper svg .sound-icon"),
            mainIcon: document.querySelector(".audio-btn-wrapper svg .icon"),
            background: document.querySelector(".audio-btn-wrapper .background")
        },
        plugins: {
            intersectObjects: null
        },
        values: {
            loopID: -1,
            state: !1,
            canPlayAudio: !1,
            currentVolume: {
                header: 0,
                transversal: 0,
                transition: 0
            },
            generalVolume: {
                header: 1,
                transversal: 1,
                transition: 1
            },
            viewportH: window.innerHeight
        },
        audio: {
            header: null,
            transversal: null,
            transition: null,
            pages: ["home", "about", "projects", "expertise"]
        },
        currentPage: null,
        persistentAudio: !1,
        init: function(t) {
            this.updateState(t),
            "home" !== this.currrentPage && this.enterAnimation(),
            this.initIntersection(),
            this.addListeners(),
            s.a.init(t.dataset.routerView)
        },
        addListeners: function() {
            this.dom.wrapper.addEventListener("click", this.onClick.bind(this)),
            o.a.browserObj.isMobile || (this.dom.wrapper.addEventListener("mouseenter", this.onMouseEnter.bind(this)),
            this.dom.wrapper.addEventListener("mouseleave", this.onMouseLeave.bind(this)))
        },
        onClick: function() {
            this.changeState(),
            this.onMouseLeave(),
            this.values.state ? ga("send", {
                hitType: "event",
                eventCategory: "User actions",
                eventAction: "Turn audio on/off",
                eventLabel: "On"
            }) : ga("send", {
                hitType: "event",
                eventCategory: "User actions",
                eventAction: "Turn audio on/off",
                eventLabel: "Off"
            })
        },
        onMouseEnter: function() {
            var t = 1;
            this.values.state || (t = 0);
            var e = 0;
            this.values.state || (e = 1),
            r.default.killTweensOf([this.dom.line, this.dom.background, this.dom.soundIcon]),
            r.default.to(this.dom.soundIcon, {
                duration: 1,
                opacity: e,
                x: 5 * t,
                ease: "power4.out"
            }),
            r.default.to(this.dom.line, {
                duration: 1,
                scale: t,
                transformOrigin: "top",
                ease: "power4.out"
            }),
            r.default.to([this.dom.background, this.dom.icon], {
                duration: 1,
                scale: 1.2,
                ease: "power4.out"
            })
        },
        onMouseLeave: function() {
            var t = 0;
            this.values.state || (t = 1);
            var e = 1;
            this.values.state || (e = 0),
            r.default.killTweensOf([this.dom.line, this.dom.background, this.dom.soundIcon]),
            r.default.to(this.dom.soundIcon, {
                duration: 1,
                opacity: e,
                x: -5 * t,
                ease: "power4.out"
            }),
            r.default.to(this.dom.line, {
                duration: 1,
                scale: t,
                transformOrigin: "bottom",
                ease: "power4.out"
            }),
            r.default.to([this.dom.background, this.dom.icon], {
                duration: 1,
                scale: 1,
                ease: "power4.out"
            })
        },
        setPlay: function(t) {
            t ? (s.a.setPlay(!0),
            s.a.setState(!0),
            this.values.state = !0,
            this.onMouseEnter()) : (s.a.setPlay(!1),
            this.values.state = !1),
            this.values.state ? this.dom.wrapper.classList.add("active") : this.dom.wrapper.classList.remove("active"),
            this.onMouseLeave()
        },
        initIntersection: function() {
            var t = this;
            setTimeout((function() {
                t.plugins.intersectObjects = new n.a({
                    target: t.dom.wrapper,
                    objects: document.querySelectorAll("[data-intersect]"),
                    debug: !1
                },(function() {
                    t.loop()
                }
                ))
            }
            ), 600)
        },
        killIntersection: function() {
            cancelAnimationFrame(this.values.loopID),
            this.plugins.intersectObjects && this.plugins.intersectObjects.kill(),
            this.plugins.intersectObjects = null,
            this.dom.wrapper.classList.remove("change-color")
        },
        changeState: function() {
            this.values.state = !this.values.state,
            this.values.state ? this.dom.wrapper.classList.add("active") : this.dom.wrapper.classList.remove("active"),
            this.values.state ? s.a.fadeIn("header") : s.a.fadeOut("header"),
            this.values.state ? s.a.fadeIn("transversal") : s.a.fadeOut("transversal"),
            s.a.setState(this.values.state)
        },
        getState: function() {
            return this.values.state
        },
        changeColor: function(t) {
            this.dom.background.style.backgroundColor = "",
            this.dom.line.style.backgroundColor = "",
            this.dom.line.style.borderColor = "",
            this.dom.mainIcon.style.fill = "",
            this.dom.soundIcon.style.stroke = "",
            t ? this.dom.wrapper.classList.add("change-color") : this.dom.wrapper.classList.remove("change-color")
        },
        dynamicColorChange: function(t) {
            this.dom.background.style.backgroundColor = "rgb(".concat(t, ",").concat(t, ",").concat(t, ")"),
            this.dom.line.style.backgroundColor = "rgb(".concat(t, ",").concat(t, ",").concat(t, ")"),
            this.dom.line.style.borderColor = "rgb(".concat(290 - t, ",").concat(290 - t, ",").concat(290 - t, ")"),
            this.dom.mainIcon.style.fill = "rgb(".concat(290 - t, ",").concat(290 - t, ",").concat(290 - t, ")"),
            this.dom.soundIcon.style.stroke = "rgb(".concat(290 - t, ",").concat(290 - t, ",").concat(290 - t, ")")
        },
        menuOpen: function(t) {
            t ? this.dom.wrapper.classList.contains("change-color") ? this.dom.wrapper.classList.add("dark-btn") : this.dom.wrapper.classList.add("light-btn") : this.dom.wrapper.classList.contains("change-color") ? this.dom.wrapper.classList.remove("dark-btn") : this.dom.wrapper.classList.remove("light-btn")
        },
        hide: function() {
            r.default.set(this.dom.wrapper, {
                autoAlpha: 0
            })
        },
        show: function() {
            r.default.set(this.dom.wrapper, {
                autoAlpha: 1
            })
        },
        loop: function() {
            var t = this;
            if (this.plugins.intersectObjects && this.plugins.intersectObjects.canUpdate && (this.plugins.intersectObjects.update() ? this.dom.wrapper.classList.add("change-color") : this.dom.wrapper.classList.remove("change-color")),
            "home" === this.currentPage) {
                var e = r.default.utils.clamp(0, 1, r.default.utils.mapRange(0, .8 * this.values.viewportH, .1, 1, o.a.scrollVal))
                  , i = r.default.utils.clamp(0, 1, r.default.utils.mapRange(0, .8 * this.values.viewportH, .1, 1, o.a.scrollVal));
                o.a.scrollVal > .8 * this.values.viewportH && (e = r.default.utils.clamp(0, 1, r.default.utils.mapRange(.8 * this.values.viewportH, 1.5 * this.values.viewportH, 1, 0, o.a.scrollVal))),
                s.a.setVolume(e, "header"),
                s.a.setVolume(i, "transversal")
            } else {
                var n = r.default.utils.clamp(0, 1, r.default.utils.mapRange(0, this.values.viewportH, 1, 0, o.a.scrollVal));
                s.a.setVolume(n, "header")
            }
            this.values.loopID = requestAnimationFrame((function() {
                return t.loop()
            }
            ))
        },
        enterAnimation: function() {
            var t = this;
            r.default.fromTo(this.dom.wrapper, {
                y: -10,
                x: 20,
                opacity: 0
            }, {
                duration: 2,
                y: 0,
                x: 0,
                opacity: 1,
                delay: 1,
                ease: "power4.out"
            }),
            setTimeout((function() {
                t.dom.wrapper.style.pointerEvents = "visible"
            }
            ), 2e3)
        },
        exitAnimation: function() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .25;
            r.default.to(this.dom.wrapper, {
                duration: e,
                y: -10,
                x: 20,
                opacity: 0,
                ease: "power4.out",
                onComplete: function() {
                    t.dom.wrapper.style.pointerEvents = "none"
                }
            })
        },
        updateState: function(t) {
            this.currentPage && s.a.crossFade(t.dataset.routerView);
            switch (this.currrentPage = t.dataset.routerView,
            this.dom.background.style.backgroundColor = "",
            this.dom.line.style.backgroundColor = "",
            this.dom.line.style.borderColor = "",
            t.dataset.routerView) {
            case "home":
                0,
                this.dom.wrapper.classList.remove("change-color");
                break;
            case "about":
                1,
                this.dom.wrapper.classList.add("change-color");
                break;
            case "projects":
                2,
                this.dom.wrapper.classList.add("change-color");
                break;
            case "project":
                2,
                t.querySelector(".page-toload").classList.contains("ura") ? this.dom.wrapper.classList.add("change-color") : this.dom.wrapper.classList.remove("change-color");
                break;
            case "expertise":
                3,
                this.dom.wrapper.classList.add("change-color");
                break;
            case "insights":
                4,
                this.dom.wrapper.classList.remove("change-color");
                break;
            case "insightsSingle":
                4,
                this.dom.wrapper.classList.add("change-color")
            }
            this.dom.background.style.backgroundColor = "",
            this.dom.line.style.backgroundColor = "",
            this.dom.line.style.borderColor = "",
            this.dom.mainIcon.style.fill = "",
            this.dom.soundIcon.style.stroke = "",
            this.currentPage = t.dataset.routerView
        },
        kill: function() {}
    };
    e.default = a
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(0)
      , n = i(13)
      , o = i(2)
      , s = {
        dom: {
            wrapper: document.querySelector(".main-header-wrapper"),
            paths: document.querySelectorAll(".main-header-wrapper svg path")
        },
        plugins: {
            intersectObjects: null
        },
        values: {
            loopID: -1,
            viewportH: window.innerHeight,
            homeHeaderOffset: null
        },
        currentPage: null,
        init: function(t) {
            this.updateState(t),
            this.enterAnimation(),
            this.initIntersection(),
            this.addListeners()
        },
        addListeners: function() {
            o.a.browserObj.isMobile || window.addEventListener("resize", this.initValues.bind(this))
        },
        initValues: function() {
            "home" == this.currentPage && (this.values.homeHeaderOffset = document.querySelector(".page-header").getBoundingClientRect().bottom - this.dom.wrapper.getBoundingClientRect().height / 2)
        },
        initIntersection: function() {
            var t = this;
            setTimeout((function() {
                t.plugins.intersectObjects = new n.a({
                    target: t.dom.wrapper,
                    objects: document.querySelectorAll("[data-intersect]")
                },(function() {
                    t.loop()
                }
                ))
            }
            ), 600)
        },
        killIntersection: function() {
            cancelAnimationFrame(this.values.loopID),
            this.plugins.intersectObjects && this.plugins.intersectObjects.kill(),
            this.plugins.intersectObjects = null,
            this.dom.wrapper.classList.remove("change-color"),
            this.dom.wrapper.classList.remove("hide-all")
        },
        changeColor: function(t) {
            t ? this.dom.wrapper.classList.add("change-color") : this.dom.wrapper.classList.remove("change-color")
        },
        loop: function() {
            var t = this;
            if (this.plugins.intersectObjects && this.plugins.intersectObjects.canUpdate && (this.plugins.intersectObjects.update() ? this.dom.wrapper.classList.add("change-color") : this.dom.wrapper.classList.remove("change-color")),
            o.a.scrollVal > 50 ? this.dom.wrapper.classList.add("hide-type") : this.dom.wrapper.classList.remove("hide-type"),
            "home" == this.currentPage) {
                var e = r.default.utils.mapRange(0, this.values.viewportH / 1.5, 35, 255, o.a.scrollVal);
                o.a.scrollVal < this.values.homeHeaderOffset ? this.dom.paths.forEach((function(t) {
                    t.style.fill = "rgb(".concat(e, ",").concat(e, ",").concat(e, ")")
                }
                )) : this.dom.paths.forEach((function(t) {
                    t.style.fill = ""
                }
                ))
            }
            this.values.loopID = requestAnimationFrame((function() {
                return t.loop()
            }
            ))
        },
        hide: function(t) {
            t ? (this.dom.wrapper.querySelector("a").style.pointerEvents = "none",
            r.default.to(this.dom.wrapper, {
                scale: .5,
                autoAlpha: 0,
                transformOrigin: "top",
                ease: "power2.inOut"
            })) : (this.dom.wrapper.querySelector("a").style.pointerEvents = "visible",
            r.default.to(this.dom.wrapper, {
                scale: 1,
                autoAlpha: 1,
                transformOrigin: "top",
                ease: "power2.inOut"
            }))
        },
        reallyHide: function(t) {
            t ? this.dom.wrapper.classList.add("hide-all") : this.dom.wrapper.classList.remove("hide-all")
        },
        enterAnimation: function() {
            document.querySelector(".page-toload").classList.contains("ura") && this.changeColor(!0),
            r.default.fromTo(this.dom.wrapper, {
                opacity: 0,
                y: 20
            }, {
                duration: 4,
                y: 0,
                opacity: 1,
                delay: 1.2,
                ease: "power4.out"
            })
        },
        exitAnimation: function() {
            r.default.to(this.dom.wrapper, {
                duration: .25,
                opacity: 0,
                ease: "power4.out"
            })
        },
        updateState: function(t) {
            switch (this.currentPage = t.dataset.routerView,
            this.dom.paths.forEach((function(t) {
                t.style.fill = ""
            }
            )),
            t.dataset.routerView) {
            case "home":
                this.dom.wrapper.classList.remove("change-color");
                break;
            case "about":
            case "projects":
                this.dom.wrapper.classList.add("change-color");
                break;
            case "project":
                t.querySelector(".page-toload").classList.contains("ura") ? this.dom.wrapper.classList.add("change-color") : this.dom.wrapper.classList.remove("change-color");
                break;
            case "expertise":
                this.dom.wrapper.classList.add("change-color");
                break;
            case "insights":
            case "insightsSingle":
                this.dom.wrapper.classList.remove("change-color");
                break;
            case "four04":
                this.dom.wrapper.classList.add("change-color")
            }
            this.initValues()
        },
        kill: function() {}
    };
    e.default = s
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r, n, o, s, a, l, h, c = i(0), u = i(14), p = i(17), f = i.n(p), d = i(16), m = i.n(d), y = i(6), g = function() {
        return "undefined" != typeof window
    }, v = function() {
        return r || g() && (r = window.gsap) && r.registerPlugin && r
    }, b = function(t) {
        return "string" == typeof t
    }, w = function(t, e) {
        var i = "x" === e ? "Width" : "Height"
          , r = "scroll" + i
          , n = "client" + i;
        return t === o || t === s || t === a ? Math.max(s[r], a[r]) - (o["inner" + i] || s[n] || a[n]) : t[r] - t["offset" + i]
    }, S = function(t, e) {
        var i = "scroll" + ("x" === e ? "Left" : "Top");
        return t === o && (null != t.pageXOffset ? i = "page" + e.toUpperCase() + "Offset" : t = null != s[i] ? s : a),
        function() {
            return t[i]
        }
    }, x = function(t, e) {
        var i = l(t)[0].getBoundingClientRect()
          , r = !e || e === o || e === a
          , n = r ? {
            top: s.clientTop - (o.pageYOffset || s.scrollTop || a.scrollTop || 0),
            left: s.clientLeft - (o.pageXOffset || s.scrollLeft || a.scrollLeft || 0)
        } : e.getBoundingClientRect()
          , h = {
            x: i.left - n.left,
            y: i.top - n.top
        };
        return !r && e && (h.x += S(e, "x")(),
        h.y += S(e, "y")()),
        h
    }, _ = function(t, e, i, r, n) {
        return isNaN(t) || "object" == typeof t ? b(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - n : "max" === t ? w(e, i) - n : Math.min(w(e, i), x(t, e)[i] - n) : parseFloat(t) - n
    }, E = function() {
        r = v(),
        g() && r && document.body && (o = window,
        a = document.body,
        s = document.documentElement,
        l = r.utils.toArray,
        r.config({
            autoKillThreshold: 7
        }),
        h = r.config(),
        n = 1)
    }, k = {
        version: "3.5.1",
        name: "scrollTo",
        rawVars: 1,
        register: function(t) {
            r = t,
            E()
        },
        init: function(t, e, i, r, s) {
            n || E();
            this.isWin = t === o,
            this.target = t,
            this.tween = i,
            "object" != typeof e ? b((e = {
                y: e
            }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                y: e,
                x: e
            }),
            this.vars = e,
            this.autoKill = !!e.autoKill,
            this.getX = S(t, "x"),
            this.getY = S(t, "y"),
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != e.x ? (this.add(this, "x", this.x, _(e.x, t, "x", this.x, e.offsetX || 0), r, s, Math.round),
            this._props.push("scrollTo_x")) : this.skipX = 1,
            null != e.y ? (this.add(this, "y", this.y, _(e.y, t, "y", this.y, e.offsetY || 0), r, s, Math.round),
            this._props.push("scrollTo_y")) : this.skipY = 1
        },
        render: function(t, e) {
            for (var i, r, n, s, a, l = e._pt, c = e.target, u = e.tween, p = e.autoKill, f = e.xPrev, d = e.yPrev, m = e.isWin; l; )
                l.r(t, l.d),
                l = l._next;
            i = m || !e.skipX ? e.getX() : f,
            n = (r = m || !e.skipY ? e.getY() : d) - d,
            s = i - f,
            a = h.autoKillThreshold,
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            p && (!e.skipX && (s > a || s < -a) && i < w(c, "x") && (e.skipX = 1),
            !e.skipY && (n > a || n < -a) && r < w(c, "y") && (e.skipY = 1),
            e.skipX && e.skipY && (u.kill(),
            e.vars.onAutoKill && e.vars.onAutoKill.apply(u, e.vars.onAutoKillParams || []))),
            m ? o.scrollTo(e.skipX ? i : e.x, e.skipY ? r : e.y) : (e.skipY || (c.scrollTop = e.y),
            e.skipX || (c.scrollLeft = e.x)),
            e.xPrev = e.x,
            e.yPrev = e.y
        },
        kill: function(t) {
            var e = "scrollTo" === t;
            (e || "scrollTo_x" === t) && (this.skipX = 1),
            (e || "scrollTo_y" === t) && (this.skipY = 1)
        }
    };
    k.max = w,
    k.getOffset = x,
    k.buildGetter = S,
    v() && r.registerPlugin(k);
    var P = i(2)
      , A = i(13)
      , T = function(t) {
        var e = c.default.timeline({
            paused: !0
        });
        return e.to(t.openBtn.querySelector(".background"), {
            duration: 1,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)"
        }),
        e.to(t.background, {
            duration: 1,
            autoAlpha: 1,
            ease: "power4.out"
        }, 0),
        e.fromTo(t.openBtn.querySelector(".close-btn"), {
            autoAlpha: 0,
            scale: .8
        }, {
            duration: 1,
            autoAlpha: 1,
            scale: 1,
            ease: "power2.out"
        }, 0),
        e.fromTo(t.wrapper, {
            autoAlpha: 0,
            scale: 1.1,
            x: 20,
            y: 20,
            transformOrigin: "center"
        }, {
            duration: 1,
            scale: 1,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "power2.out"
        }, 0),
        e
    }
      , C = function(t) {
        var e = c.default.timeline({
            paused: !0
        })
          , i = (t.inner.getBoundingClientRect().height,
        t.inner.getBoundingClientRect().height + t.form.getBoundingClientRect().height)
          , r = t.innerContainer.getBoundingClientRect().height + t.form.getBoundingClientRect().height;
        return document.querySelector("html").classList.contains("has-scroll-smooth") && (e.set(t.inner, {
            position: "absolute",
            top: t.inner.getBoundingClientRect().top,
            left: 0
        }, .25),
        e.set(t.innerContainer, {
            height: r
        }, .25)),
        e.to(t.inner, {
            duration: 1,
            height: i,
            ease: "power4.inOut"
        }, .25),
        e.fromTo(t.form, {
            y: 20
        }, {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: "power4.inOut"
        }, .25),
        e
    };
    c.default.registerPlugin(k);
    var M = {
        dom: {
            wrapper: document.querySelector(".contact-modal-wrapper"),
            innerContainer: document.querySelector(".contact-modal-wrapper .inner-container"),
            inner: document.querySelector(".contact-modal-wrapper .inner"),
            background: document.querySelector(".contact-modal-wrapper-background"),
            openBtn: document.querySelector(".contact-modal-btn"),
            audioBackground: document.querySelector(".contact-modal-btn .background"),
            audioIcon: document.querySelector(".contact-modal-btn .audio-icon path"),
            closeHitzone: document.querySelector(".contact-modal-wrapper .close-hitzone"),
            rgpdBtns: document.querySelectorAll(".contact-modal-wrapper .checkbox-btn"),
            form: document.querySelector(".contact-modal-wrapper form"),
            formInputs: document.querySelectorAll(".contact-modal-wrapper input"),
            formSubmit: document.querySelector(".contact-modal-wrapper .send"),
            contactBtn: document.querySelector(".contact-modal-wrapper .contact-btn")
        },
        formContent: {
            name: "",
            email: "",
            phone: ""
        },
        plugins: {
            intersectObjects: null
        },
        scrollLimit: 0,
        scroll: null,
        animation: null,
        formAnimation: null,
        isOpen: !1,
        loopID: -1,
        currentPage: document.querySelector(".page-current").dataset.routerView,
        formValidation: null,
        iconAnimation: null,
        canHoverSend: !0,
        init: function() {
            this.onResize = this.onResize.bind(this),
            this.animation = T(this.dom),
            this.formAnimation = C(this.dom),
            this.setupIconAnimation(),
            this.scroll = new u.a({
                el: this.dom.innerContainer,
                smooth: !0,
                getDirection: !0,
                scrollbarClass: "contact-scrollbar"
            }),
            this.formValidation = new f.a(".contact-modal-wrapper form",{
                disableSubmit: !0,
                messages: {}
            }),
            document.querySelector(".contact-scrollbar") && (document.querySelector(".contact-scrollbar").style.opacity = 0),
            "home" !== this.currentPage && this.showBtn(),
            this.initIntersection(),
            this.addListeners(),
            this.onResize()
        },
        onResize: function() {
            this.scrollLimit = document.querySelector("html").classList.contains("has-scroll-smooth") ? P.a.buroScrollObj.scroll.instance.limit.y - window.innerHeight / 2 : P.a.buroScrollObj.scroll.instance.limit.y - 2 * window.innerHeight
        },
        initIntersection: function() {
            var t = this;
            setTimeout((function() {
                t.plugins.intersectObjects = new A.a({
                    target: t.dom.openBtn,
                    objects: document.querySelectorAll("[data-intersect]")
                },(function() {
                    t.loop()
                }
                ))
            }
            ), 600)
        },
        killIntersection: function() {
            cancelAnimationFrame(this.loopID),
            this.plugins.intersectObjects.kill(),
            this.plugins.intersectObjects = null,
            this.dom.openBtn.classList.remove("dark-btn")
        },
        addListeners: function() {
            var t = this;
            this.dom.openBtn.addEventListener("click", this.onClick.bind(this)),
            this.dom.closeHitzone.addEventListener("click", this.onClose.bind(this)),
            this.dom.contactBtn.addEventListener("click", this.onContactClick.bind(this)),
            this.dom.rgpdBtns.forEach((function(e) {
                return e.addEventListener("click", t.onRgpdClick.bind(t))
            }
            )),
            this.dom.formInputs.forEach((function(e) {
                e.addEventListener("focus", t.onFocus.bind(t)),
                e.addEventListener("blur", t.onBlur.bind(t))
            }
            )),
            P.a.browserObj.isMobile || (this.dom.formSubmit.addEventListener("mouseenter", this.onSendEnter.bind(this)),
            this.dom.formSubmit.addEventListener("mouseleave", this.onSendLeave.bind(this)),
            document.addEventListener("keyup", this.onKeyUp.bind(this)),
            window.addEventListener("resize", this.onResize)),
            this.dom.form.addEventListener("bouncerFormValid", this.onSubmit.bind(this), !1),
            this.dom.form.addEventListener("bouncerShowError", this.onError.bind(this), !1),
            this.dom.form.addEventListener("bouncerRemoveError", this.onRemoveError.bind(this), !1)
        },
        onSendEnter: function() {
            this.canHoverSend && (this.iconAnimation.setDirection(1),
            this.iconAnimation.playSegments([0, 20], !0))
        },
        onSendLeave: function() {
            this.canHoverSend && (this.iconAnimation.setDirection(-1),
            this.iconAnimation.playSegments([20, 0], !0))
        },
        onRemoveError: function(t) {
            t.target.closest(".input-wrapper").classList.remove("error")
        },
        onError: function(t) {
            t.target.closest(".input-wrapper").classList.add("error")
        },
        onFocus: function(t) {
            c.default.to(t.target.closest(".input-wrapper").querySelector("label"), {
                duration: .5,
                scale: .5,
                yPercent: -25,
                transformOrigin: "top left",
                ease: "expo.inOut"
            })
        },
        onBlur: function(t) {
            t.target.value.length || c.default.to(t.target.closest(".input-wrapper").querySelector("label"), {
                duration: .5,
                scale: 1,
                yPercent: 0,
                ease: "expo.inOut"
            })
        },
        onSubmit: function() {
            var t = this;
            return this.dom.formSubmit.style.pointerEvents = "none",
            this.formContent.name = this.dom.form.querySelector(".name").value,
            this.formContent.email = this.dom.form.querySelector(".email").value,
            this.formContent.phone = this.dom.form.querySelector(".phone").value,
            this.iconAnimation.playSegments([20, 39], !0),
            this.canHoverSend = !1,
            setTimeout((function() {
                t.loadingAnimation().then((function() {
                    t.onClose(),
                    t.dom.formSubmit.style.pointerEvents = ""
                }
                ))
            }
            ), 400),
            !1
        },
        onClose: function() {
            var t = this;
            Object(y.enablePageScroll)(this.dom.wrapper),
            this.dom.wrapper.classList.remove("native-scroll"),
            this.exitAnimation().then((function() {
                t.formAnimation.timeScale(10),
                t.formAnimation.reverse()
            }
            ))
        },
        onKeyUp: function(t) {
            var e = t.key || t.keyCode;
            this.isOpen && "Escape" === e && this.onClose()
        },
        onClick: function() {
            this.isOpen ? this.onClose() : (Object(y.disablePageScroll)(this.dom.wrapper),
            this.enterAnimation(),
            ga("send", {
                hitType: "event",
                eventCategory: "User actions",
                eventAction: "Open contacts form",
                eventLabel: "Open contacts form"
            }))
        },
        onRgpdClick: function(t) {
            var e;
            t.target.classList.contains("active") ? (t.target.classList.remove("active"),
            t.target.querySelector("input").checked = !1,
            t.target.querySelector("input").value = "") : (t.target.classList.add("active"),
            t.target.querySelector("input").checked = !0,
            t.target.querySelector("input").value = "Sí",
            null === (e = t.target.querySelector(".error-message")) || void 0 === e || e.remove())
        },
        onContactClick: function() {
            var t = this;
            this.dom.contactBtn.classList.contains("active") ? (document.querySelector(".contact-scrollbar") && (document.querySelector(".contact-scrollbar").style.opacity = 0),
            this.formAnimation.timeScale(1),
            this.formAnimation.reverse(),
            this.dom.contactBtn.classList.remove("active"),
            document.querySelector("html").classList.contains("has-scroll-smooth") ? setTimeout((function() {
                t.scroll.scrollTo("top", {
                    duration: 2e3,
                    easing: [.15, .86, .31, 1],
                    disableLerp: !0,
                    callback: function() {
                        t.scroll.update()
                    }
                })
            }
            ), 100) : this.dom.wrapper.classList.remove("native-scroll")) : (document.querySelector(".contact-scrollbar") && (document.querySelector(".contact-scrollbar").style.opacity = 1),
            this.formAnimation.timeScale(1),
            this.formAnimation.play(),
            this.dom.contactBtn.classList.add("active"),
            document.querySelector("html").classList.contains("has-scroll-smooth") ? setTimeout((function() {
                t.scroll.update(),
                t.scroll.scrollTo("bottom", {
                    duration: 1500,
                    easing: [.15, .86, .31, 1],
                    disableLerp: !0
                })
            }
            ), 750) : this.formAnimation.eventCallback("onComplete", (function() {
                t.dom.wrapper.classList.add("native-scroll"),
                c.default.set(t.dom.wrapper, {
                    scrollTo: {
                        y: t.dom.wrapper.scrollHeight,
                        autoKill: !1
                    }
                })
            }
            )))
        },
        setupIconAnimation: function() {
            var t = this;
            this.iconAnimation = m.a.loadAnimation({
                container: this.dom.formSubmit.querySelector(".icon"),
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                path: "/wp-content/themes/Kategora/public/pictos/send.json"
            }),
            this.iconAnimation.addEventListener("DOMLoaded", (function() {
                Object.assign(t.dom.formSubmit.querySelector("svg").style, {
                    width: "",
                    height: ""
                })
            }
            ))
        },
        showBtn: function() {
            c.default.fromTo(this.dom.openBtn, {
                y: 20,
                autoAlpha: 0
            }, {
                duration: 2,
                y: 0,
                autoAlpha: 1,
                delay: 1,
                ease: "power4.out"
            })
        },
        hideBtn: function() {
            c.default.fromTo(this.dom.openBtn, {
                y: 0,
                autoAlpha: 1
            }, {
                duration: 2,
                y: 20,
                autoAlpha: 0,
                ease: "power4.out"
            })
        },
        changeColor: function(t) {
            this.dom.audioBackground.style.backgroundColor = "",
            this.dom.audioIcon.style.fill = "",
            t ? this.dom.openBtn.classList.add("dark-btn") : this.dom.openBtn.classList.remove("dark-btn")
        },
        dynamicColorChange: function(t) {
            this.dom.audioBackground.style.backgroundColor = "rgb(".concat(t, ",").concat(t, ",").concat(t, ")"),
            this.dom.audioIcon.style.fill = "rgb(".concat(290 - t, ",").concat(290 - t, ",").concat(290 - t, ")")
        },
        loop: function() {
            var t = this;
            this.plugins.intersectObjects && this.plugins.intersectObjects.canUpdate && (this.plugins.intersectObjects.update() ? this.dom.openBtn.classList.remove("dark-btn") : this.dom.openBtn.classList.add("dark-btn")),
            P.a.scrollVal > this.scrollLimit ? this.dom.openBtn.classList.add("hide") : this.dom.openBtn.classList.remove("hide"),
            this.loopID = requestAnimationFrame((function() {
                return t.loop()
            }
            ))
        },
        resetForm: function() {
            var t = this;
            this.dom.rgpdBtns.forEach((function(t) {
                t.classList.remove("active"),
                t.querySelector("input").checked = !1
            }
            )),
            this.dom.formInputs.forEach((function(e) {
                var i;
                (e.value = "",
                e.classList.remove("error"),
                t.iconAnimation.goToAndStop(0),
                t.canHoverSend = !0,
                t.iconAnimation.loop = !1,
                e.closest(".input-wrapper")) && (e.closest(".input-wrapper").classList.remove("error"),
                null === (i = e.closest(".input-wrapper").querySelector(".error-message")) || void 0 === i || i.remove(),
                e.closest(".input-wrapper").querySelector("label") && c.default.set(e.closest(".input-wrapper").querySelector("label"), {
                    scale: 1,
                    yPercent: 0
                }))
            }
            ))
        },
        loadingAnimation: function() {
            var t = this;
            return new Promise((function(e, i) {
                t.iconAnimation.loop = !0,
                t.iconAnimation.playSegments([0, 39], !0),
                c.default.to(t.dom.formSubmit.querySelector(".send-label"), {
                    duration: 1,
                    delay: 2,
                    yPercent: -101,
                    ease: "power4.inOut"
                }),
                c.default.fromTo(t.dom.formSubmit.querySelector(".sent-label"), {
                    opacity: 1,
                    yPercent: 101
                }, {
                    duration: 1,
                    delay: 2,
                    yPercent: 0,
                    ease: "power4.inOut"
                }),
                setTimeout((function() {
                    e()
                }
                ), 4e3)
            }
            ))
        },
        enterAnimation: function() {
            var t = this;
            return new Promise((function(e, i) {
                cancelAnimationFrame(t.loopID),
                t.changeColor(!1),
                t.animation.timeScale(1.5),
                t.animation.play(),
                document.querySelector(".contact-scrollbar") && (document.querySelector(".contact-scrollbar").style.opacity = 1),
                document.querySelector(".c-scrollbar") && (document.querySelector(".c-scrollbar").style.opacity = 0),
                setTimeout((function() {
                    document.querySelector("html").classList.contains("has-scroll-smooth") && t.scroll.update(),
                    t.isOpen = !0,
                    e()
                }
                ), 1e3)
            }
            ))
        },
        exitAnimation: function() {
            var t = this;
            return new Promise((function(e, i) {
                t.loop(),
                t.isOpen = !1,
                t.animation.timeScale(5),
                t.animation.reverse(),
                document.querySelector(".contact-scrollbar") && (document.querySelector(".contact-scrollbar").style.opacity = 0),
                t.dom.contactBtn.classList.remove("active"),
                setTimeout((function() {
                    document.querySelector(".c-scrollbar") && (document.querySelector(".c-scrollbar").style.opacity = 1),
                    document.querySelector("html").classList.contains("has-scroll-smooth") && t.scroll.scrollTo(0),
                    Object(y.enablePageScroll)(t.dom.wrapper),
                    t.resetForm(),
                    e()
                }
                ), 750)
            }
            ))
        },
        updateState: function(t) {
            this.onResize()
        },
        kill: function() {
            cancelAnimationFrame(this.loopID)
        }
    };
    e.default = M
}
, function(t, e, i) {
    var r;
    r = function() {
        return function(t) {
            var e = {};
            function i(r) {
                if (e[r])
                    return e[r].exports;
                var n = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(n.exports, n, n.exports, i),
                n.l = !0,
                n.exports
            }
            return i.m = t,
            i.c = e,
            i.d = function(t, e, r) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (i.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var n in t)
                        i.d(r, n, function(e) {
                            return t[e]
                        }
                        .bind(null, n));
                return r
            }
            ,
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "",
            i(i.s = 0)
        }([function(t, e, i) {
            "use strict";
            i.r(e);
            var r = function(t) {
                return Array.isArray(t) ? t : [t]
            }
              , n = function(t) {
                return t instanceof Node
            }
              , o = function(t, e) {
                if (t && e) {
                    t = function(t) {
                        return t instanceof NodeList
                    }(t) ? t : [t];
                    for (var i = 0; i < t.length && !0 !== e(t[i], i, t.length); i++)
                        ;
                }
            }
              , s = function(t) {
                return console.error("[scroll-lock] ".concat(t))
            }
              , a = function(t) {
                if (Array.isArray(t))
                    return t.join(", ")
            }
              , l = function(t) {
                var e = [];
                return o(t, (function(t) {
                    return e.push(t)
                }
                )),
                e
            }
              , h = function(t, e) {
                var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document;
                if (i && -1 !== l(r.querySelectorAll(e)).indexOf(t))
                    return t;
                for (; (t = t.parentElement) && -1 === l(r.querySelectorAll(e)).indexOf(t); )
                    ;
                return t
            }
              , c = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document
                  , r = -1 !== l(i.querySelectorAll(e)).indexOf(t);
                return r
            }
              , u = function(t) {
                if (t)
                    return "hidden" === getComputedStyle(t).overflow
            }
              , p = function(t) {
                if (t)
                    return !!u(t) || t.scrollTop <= 0
            }
              , f = function(t) {
                if (t) {
                    if (u(t))
                        return !0;
                    var e = t.scrollTop
                      , i = t.scrollHeight;
                    return e + t.offsetHeight >= i
                }
            }
              , d = function(t) {
                if (t)
                    return !!u(t) || t.scrollLeft <= 0
            }
              , m = function(t) {
                if (t) {
                    if (u(t))
                        return !0;
                    var e = t.scrollLeft
                      , i = t.scrollWidth;
                    return e + t.offsetWidth >= i
                }
            }
              , y = function(t) {
                return c(t, 'textarea, [contenteditable="true"]')
            }
              , g = function(t) {
                return c(t, 'input[type="range"]')
            };
            function v(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i,
                t
            }
            i.d(e, "disablePageScroll", (function() {
                return S
            }
            )),
            i.d(e, "enablePageScroll", (function() {
                return x
            }
            )),
            i.d(e, "getScrollState", (function() {
                return _
            }
            )),
            i.d(e, "clearQueueScrollLocks", (function() {
                return E
            }
            )),
            i.d(e, "getTargetScrollBarWidth", (function() {
                return k
            }
            )),
            i.d(e, "getCurrentTargetScrollBarWidth", (function() {
                return P
            }
            )),
            i.d(e, "getPageScrollBarWidth", (function() {
                return A
            }
            )),
            i.d(e, "getCurrentPageScrollBarWidth", (function() {
                return T
            }
            )),
            i.d(e, "addScrollableTarget", (function() {
                return C
            }
            )),
            i.d(e, "removeScrollableTarget", (function() {
                return M
            }
            )),
            i.d(e, "addScrollableSelector", (function() {
                return D
            }
            )),
            i.d(e, "removeScrollableSelector", (function() {
                return L
            }
            )),
            i.d(e, "addLockableTarget", (function() {
                return O
            }
            )),
            i.d(e, "addLockableSelector", (function() {
                return F
            }
            )),
            i.d(e, "setFillGapMethod", (function() {
                return I
            }
            )),
            i.d(e, "addFillGapTarget", (function() {
                return R
            }
            )),
            i.d(e, "removeFillGapTarget", (function() {
                return B
            }
            )),
            i.d(e, "addFillGapSelector", (function() {
                return V
            }
            )),
            i.d(e, "removeFillGapSelector", (function() {
                return j
            }
            )),
            i.d(e, "refillGaps", (function() {
                return q
            }
            ));
            var b = ["padding", "margin", "width", "max-width", "none"]
              , w = {
                scroll: !0,
                queue: 0,
                scrollableSelectors: ["[data-scroll-lock-scrollable]"],
                lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
                fillGapSelectors: ["body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]"],
                fillGapMethod: b[0],
                startTouchY: 0,
                startTouchX: 0
            }
              , S = function(t) {
                w.queue <= 0 && (w.scroll = !1,
                z(),
                X()),
                C(t),
                w.queue++
            }
              , x = function(t) {
                w.queue > 0 && w.queue--,
                w.queue <= 0 && (w.scroll = !0,
                N(),
                U()),
                M(t)
            }
              , _ = function() {
                return w.scroll
            }
              , E = function() {
                w.queue = 0
            }
              , k = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (n(t)) {
                    var i = t.style.overflowY;
                    e ? _() || (t.style.overflowY = t.getAttribute("data-scroll-lock-saved-overflow-y-property")) : t.style.overflowY = "scroll";
                    var r = P(t);
                    return t.style.overflowY = i,
                    r
                }
                return 0
            }
              , P = function(t) {
                if (n(t)) {
                    if (t === document.body) {
                        var e = document.documentElement.clientWidth;
                        return window.innerWidth - e
                    }
                    var i = t.style.borderLeftWidth
                      , r = t.style.borderRightWidth;
                    t.style.borderLeftWidth = "0px",
                    t.style.borderRightWidth = "0px";
                    var o = t.offsetWidth - t.clientWidth;
                    return t.style.borderLeftWidth = i,
                    t.style.borderRightWidth = r,
                    o
                }
                return 0
            }
              , A = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return k(document.body, t)
            }
              , T = function() {
                return P(document.body)
            }
              , C = function(t) {
                t && r(t).map((function(t) {
                    o(t, (function(t) {
                        n(t) ? t.setAttribute("data-scroll-lock-scrollable", "") : s('"'.concat(t, '" is not a Element.'))
                    }
                    ))
                }
                ))
            }
              , M = function(t) {
                t && r(t).map((function(t) {
                    o(t, (function(t) {
                        n(t) ? t.removeAttribute("data-scroll-lock-scrollable") : s('"'.concat(t, '" is not a Element.'))
                    }
                    ))
                }
                ))
            }
              , D = function(t) {
                t && r(t).map((function(t) {
                    w.scrollableSelectors.push(t)
                }
                ))
            }
              , L = function(t) {
                t && r(t).map((function(t) {
                    w.scrollableSelectors = w.scrollableSelectors.filter((function(e) {
                        return e !== t
                    }
                    ))
                }
                ))
            }
              , O = function(t) {
                t && (r(t).map((function(t) {
                    o(t, (function(t) {
                        n(t) ? t.setAttribute("data-scroll-lock-lockable", "") : s('"'.concat(t, '" is not a Element.'))
                    }
                    ))
                }
                )),
                _() || z())
            }
              , F = function(t) {
                t && (r(t).map((function(t) {
                    w.lockableSelectors.push(t)
                }
                )),
                _() || z(),
                V(t))
            }
              , I = function(t) {
                if (t)
                    if (-1 !== b.indexOf(t))
                        w.fillGapMethod = t,
                        q();
                    else {
                        var e = b.join(", ");
                        s('"'.concat(t, '" method is not available!\nAvailable fill gap methods: ').concat(e, "."))
                    }
            }
              , R = function(t) {
                t && r(t).map((function(t) {
                    o(t, (function(t) {
                        n(t) ? (t.setAttribute("data-scroll-lock-fill-gap", ""),
                        w.scroll || $(t)) : s('"'.concat(t, '" is not a Element.'))
                    }
                    ))
                }
                ))
            }
              , B = function(t) {
                t && r(t).map((function(t) {
                    o(t, (function(t) {
                        n(t) ? (t.removeAttribute("data-scroll-lock-fill-gap"),
                        w.scroll || Z(t)) : s('"'.concat(t, '" is not a Element.'))
                    }
                    ))
                }
                ))
            }
              , V = function(t) {
                t && r(t).map((function(t) {
                    -1 === w.fillGapSelectors.indexOf(t) && (w.fillGapSelectors.push(t),
                    w.scroll || K(t))
                }
                ))
            }
              , j = function(t) {
                t && r(t).map((function(t) {
                    w.fillGapSelectors = w.fillGapSelectors.filter((function(e) {
                        return e !== t
                    }
                    )),
                    w.scroll || Q(t)
                }
                ))
            }
              , q = function() {
                w.scroll || X()
            }
              , z = function() {
                var t = a(w.lockableSelectors);
                H(t)
            }
              , N = function() {
                var t = a(w.lockableSelectors);
                G(t)
            }
              , H = function(t) {
                var e = document.querySelectorAll(t);
                o(e, (function(t) {
                    W(t)
                }
                ))
            }
              , G = function(t) {
                var e = document.querySelectorAll(t);
                o(e, (function(t) {
                    Y(t)
                }
                ))
            }
              , W = function(t) {
                if (n(t) && "true" !== t.getAttribute("data-scroll-lock-locked")) {
                    var e = window.getComputedStyle(t);
                    t.setAttribute("data-scroll-lock-saved-overflow-y-property", e.overflowY),
                    t.setAttribute("data-scroll-lock-saved-inline-overflow-property", t.style.overflow),
                    t.setAttribute("data-scroll-lock-saved-inline-overflow-y-property", t.style.overflowY),
                    t.style.overflow = "hidden",
                    t.setAttribute("data-scroll-lock-locked", "true")
                }
            }
              , Y = function(t) {
                n(t) && "true" === t.getAttribute("data-scroll-lock-locked") && (t.style.overflow = t.getAttribute("data-scroll-lock-saved-inline-overflow-property"),
                t.style.overflowY = t.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),
                t.removeAttribute("data-scroll-lock-saved-overflow-property"),
                t.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),
                t.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),
                t.removeAttribute("data-scroll-lock-locked"))
            }
              , X = function() {
                w.fillGapSelectors.map((function(t) {
                    K(t)
                }
                ))
            }
              , U = function() {
                w.fillGapSelectors.map((function(t) {
                    Q(t)
                }
                ))
            }
              , K = function(t) {
                var e = document.querySelectorAll(t)
                  , i = -1 !== w.lockableSelectors.indexOf(t);
                o(e, (function(t) {
                    $(t, i)
                }
                ))
            }
              , $ = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (n(t)) {
                    var i;
                    if ("" === t.getAttribute("data-scroll-lock-lockable") || e)
                        i = k(t, !0);
                    else {
                        var r = h(t, a(w.lockableSelectors));
                        i = k(r, !0)
                    }
                    "true" === t.getAttribute("data-scroll-lock-filled-gap") && Z(t);
                    var o = window.getComputedStyle(t);
                    if (t.setAttribute("data-scroll-lock-filled-gap", "true"),
                    t.setAttribute("data-scroll-lock-current-fill-gap-method", w.fillGapMethod),
                    "margin" === w.fillGapMethod) {
                        var s = parseFloat(o.marginRight);
                        t.style.marginRight = "".concat(s + i, "px")
                    } else if ("width" === w.fillGapMethod)
                        t.style.width = "calc(100% - ".concat(i, "px)");
                    else if ("max-width" === w.fillGapMethod)
                        t.style.maxWidth = "calc(100% - ".concat(i, "px)");
                    else if ("padding" === w.fillGapMethod) {
                        var l = parseFloat(o.paddingRight);
                        t.style.paddingRight = "".concat(l + i, "px")
                    }
                }
            }
              , Q = function(t) {
                var e = document.querySelectorAll(t);
                o(e, (function(t) {
                    Z(t)
                }
                ))
            }
              , Z = function(t) {
                if (n(t) && "true" === t.getAttribute("data-scroll-lock-filled-gap")) {
                    var e = t.getAttribute("data-scroll-lock-current-fill-gap-method");
                    t.removeAttribute("data-scroll-lock-filled-gap"),
                    t.removeAttribute("data-scroll-lock-current-fill-gap-method"),
                    "margin" === e ? t.style.marginRight = "" : "width" === e ? t.style.width = "" : "max-width" === e ? t.style.maxWidth = "" : "padding" === e && (t.style.paddingRight = "")
                }
            };
            "undefined" != typeof window && window.addEventListener("resize", (function(t) {
                q()
            }
            )),
            "undefined" != typeof document && (document.addEventListener("touchstart", (function(t) {
                w.scroll || (w.startTouchY = t.touches[0].clientY,
                w.startTouchX = t.touches[0].clientX)
            }
            )),
            document.addEventListener("touchmove", (function(t) {
                if (!w.scroll) {
                    var e = w.startTouchY
                      , i = w.startTouchX
                      , r = t.touches[0].clientY
                      , n = t.touches[0].clientX;
                    if (t.touches.length < 2) {
                        var o = a(w.scrollableSelectors)
                          , s = {
                            up: e < r,
                            down: e > r,
                            left: i < n,
                            right: i > n
                        }
                          , l = {
                            up: e + 3 < r,
                            down: e - 3 > r,
                            left: i + 3 < n,
                            right: i - 3 > n
                        };
                        !function e(i) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (i) {
                                var n = h(i, o, !1);
                                if (g(i))
                                    return !1;
                                if (r || y(i) && h(i, o) || c(i, o)) {
                                    var a = !1;
                                    d(i) && m(i) ? (s.up && p(i) || s.down && f(i)) && (a = !0) : p(i) && f(i) ? (s.left && d(i) || s.right && m(i)) && (a = !0) : (l.up && p(i) || l.down && f(i) || l.left && d(i) || l.right && m(i)) && (a = !0),
                                    a && (n ? e(n, !0) : t.preventDefault())
                                } else
                                    e(n)
                            } else
                                t.preventDefault()
                        }(t.target)
                    }
                }
            }
            ), {
                passive: !1
            }),
            document.addEventListener("touchend", (function(t) {
                w.scroll || (w.startTouchY = 0,
                w.startTouchX = 0)
            }
            )));
            var J = {
                hide: function(t) {
                    s('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),
                    S(t)
                },
                show: function(t) {
                    s('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),
                    x(t)
                },
                toggle: function(t) {
                    s('"toggle" is deprecated! Do not use it.'),
                    _() ? S() : x(t)
                },
                getState: function() {
                    return s('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),
                    _()
                },
                getWidth: function() {
                    return s('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),
                    A()
                },
                getCurrentWidth: function() {
                    return s('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),
                    T()
                },
                setScrollableTargets: function(t) {
                    s('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),
                    C(t)
                },
                setFillGapSelectors: function(t) {
                    s('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),
                    V(t)
                },
                setFillGapTargets: function(t) {
                    s('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),
                    R(t)
                },
                clearQueue: function() {
                    s('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),
                    E()
                }
            }
              , tt = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {}
                      , r = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }
                    )))),
                    r.forEach((function(e) {
                        v(t, e, i[e])
                    }
                    ))
                }
                return t
            }({
                disablePageScroll: S,
                enablePageScroll: x,
                getScrollState: _,
                clearQueueScrollLocks: E,
                getTargetScrollBarWidth: k,
                getCurrentTargetScrollBarWidth: P,
                getPageScrollBarWidth: A,
                getCurrentPageScrollBarWidth: T,
                addScrollableSelector: D,
                removeScrollableSelector: L,
                addScrollableTarget: C,
                removeScrollableTarget: M,
                addLockableSelector: F,
                addLockableTarget: O,
                addFillGapSelector: V,
                removeFillGapSelector: j,
                addFillGapTarget: R,
                removeFillGapTarget: B,
                setFillGapMethod: I,
                refillGaps: q,
                _state: w
            }, J);
            e.default = tt
        }
        ]).default
    }
    ,
    t.exports = r()
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(15)
      , n = i.n(r)
      , o = i(0)
      , s = i(2)
      , a = i(13)
      , l = i(11)
      , h = i(3);
    function c(t) {
        return function(t) {
            if (Array.isArray(t))
                return u(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || function(t, e) {
            if (!t)
                return;
            if ("string" == typeof t)
                return u(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === i && t.constructor && (i = t.constructor.name);
            if ("Map" === i || "Set" === i)
                return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                return u(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++)
            r[i] = t[i];
        return r
    }
    var p = {
        dom: {
            wrapper: document.querySelector(".menu-wrapper"),
            languageWrapper: document.querySelector(".menu-wrapper .language-wrapper"),
            mainLinks: document.querySelector(".menu-wrapper .main-links"),
            secondaryLinksContainer: document.querySelectorAll(".menu-wrapper .secondary-links-container"),
            secondaryLinks: document.querySelectorAll(".menu-wrapper .secondary-links li"),
            menuBtn: document.querySelector(".menu-wrapper .menu-btn"),
            menuBtnBurguer: document.querySelectorAll(".menu-wrapper .menu-btn .burguer span"),
            menuBtnHitzone: document.querySelector(".menu-wrapper .menu-btn-hitzone"),
            innerSections: null,
            activeMenu: null
        },
        controllers: {
            isActive: !1,
            canInteract: !0,
            activeInnerIndex: 0,
            isMenuOpen: !0,
            isMenuOpenMobile: !1,
            canClose: !1,
            isOnTop: !0,
            canChangeHomeHeaderColor: !0
        },
        plugins: {
            intersectObjects: null
        },
        animations: {
            triggerSection: null
        },
        values: {
            loopID: -1,
            viewportH: window.innerHeight,
            homeHeaderOffset: null
        },
        currrentPage: null,
        init: function(t) {
            this.addListeners(),
            this.updateState(t),
            "home" !== this.currrentPage && this.enterAnimation(),
            this.initIntersection()
        },
        createAnimations: function() {
            var t = this;
            if (this.dom.innerSections.length && (this.animations.triggerSection = new l.a({
                targets: this.dom.innerSections,
                triggerOnce: !0,
                persistent: !0,
                rootMargin: "0px",
                threshold: 0
            }),
            this.animations.triggerSection.init((function(e) {
                t.controllers.activeInnerIndex !== Number(e.dataset.menuIndex) && t.goTo(Number(e.dataset.menuIndex))
            }
            )),
            this.goTo(0)),
            document.querySelector("body").classList.contains("project")) {
                var e = 0;
                this.dom.wrapper.querySelector(".main-link .active .secondary-links .active") && (e = Number(this.dom.wrapper.querySelector(".main-link .active .secondary-links .active").dataset.index)),
                this.goTo(e)
            }
            setTimeout((function() {
                t.controllers.canClose = !0
            }
            ), 1e3)
        },
        addListeners: function() {
            var t = this;
            this.dom.wrapper.addEventListener("mouseleave", this.onMouseLeaveMenu.bind(this)),
            s.a.browserObj.isMobile ? this.dom.menuBtnHitzone.addEventListener("click", this.toggleMenuMobile.bind(this)) : (this.dom.menuBtnHitzone.addEventListener("mouseenter", this.onMouseEnterMenu.bind(this)),
            window.addEventListener("resize", this.initValues.bind(this))),
            this.dom.secondaryLinks.forEach((function(e) {
                e.addEventListener("click", t.onSecClick.bind(t))
            }
            )),
            this.dom.languageWrapper.querySelectorAll("li").forEach((function(e) {
                return e.addEventListener("click", (function() {
                    t.dom.languageWrapper.querySelector(".active").classList.remove("active"),
                    e.classList.add("active")
                }
                ))
            }
            )),
            this.dom.mainLinks.querySelectorAll("a").forEach((function(e) {
                return e.addEventListener("click", t.onMainLinksClick.bind(t))
            }
            )),
            s.a.buroScrollObj.on("scroll", (function() {
                s.a.scrollVal < t.values.homeHeaderOffset && (t.controllers.canChangeHomeHeaderColor = !0)
            }
            ))
        },
        initValues: function() {
            "home" == this.currentPage && (this.values.homeHeaderOffset = document.querySelector(".page-header").getBoundingClientRect().bottom - this.dom.menuBtn.getBoundingClientRect().height / 2 - window.innerHeight / 2)
        },
        toggleMenuMobile: function() {
            this.controllers.isMenuOpenMobile = !this.controllers.isMenuOpenMobile,
            this.controllers.isMenuOpenMobile ? this.animateIn() : this.animateOut()
        },
        animationBurguer: function(t) {
            switch (t) {
            case "open":
                o.default.killTweensOf([this.dom.menuBtn, this.dom.menuBtn.querySelector(".burguer .top"), this.dom.menuBtn.querySelector(".burguer .bottom")]),
                o.default.to(this.dom.menuBtn, {
                    duration: .25,
                    scale: 1.15,
                    ease: "power4.out"
                }),
                o.default.to(this.dom.menuBtn, {
                    duration: .25,
                    scale: 1,
                    clearProps: "all",
                    delay: .2,
                    ease: "power4.out"
                }),
                o.default.to(this.dom.menuBtn.querySelector(".burguer .top"), {
                    duration: .65,
                    y: 4,
                    rotate: 225,
                    ease: "power4.inOut"
                }),
                o.default.to(this.dom.menuBtn.querySelector(".burguer .bottom"), {
                    duration: .65,
                    y: -3,
                    rotate: -45,
                    ease: "power4.inOut"
                });
                break;
            case "close":
                o.default.killTweensOf([this.dom.menuBtn.querySelector(".burguer .top"), this.dom.menuBtn.querySelector(".burguer .bottom")]),
                o.default.to(this.dom.menuBtn.querySelector(".burguer .top"), {
                    duration: .5,
                    y: 0,
                    rotate: 0,
                    ease: "power4.out"
                }),
                o.default.to(this.dom.menuBtn.querySelector(".burguer .bottom"), {
                    duration: .5,
                    y: 0,
                    rotate: 0,
                    ease: "power4.out"
                })
            }
        },
        onMouseEnterMenu: function() {
            this.animateIn()
        },
        onMouseLeaveMenu: function() {
            this.animateOut()
        },
        onMainLinksClick: function() {
            var t = this;
            this.dom.mainLinks.querySelectorAll("a").forEach((function(t) {
                return t.style.pointerEvents = "none"
            }
            )),
            setTimeout((function() {
                t.dom.mainLinks.querySelectorAll("a").forEach((function(t) {
                    return t.style.pointerEvents = ""
                }
                ))
            }
            ), 2500)
        },
        onSecClick: function(t) {
            if (this.dom.mainLinks.querySelector(".secondary-links-container.active .secondary-links .active") && this.dom.mainLinks.querySelector(".secondary-links-container.active .secondary-links .active").classList.remove("active"),
            t.target.closest("li").classList.add("active"),
            "project" != this.currrentPage) {
                var e = c(t.target.parentElement.children).indexOf(t.target)
                  , i = this.dom.innerSections[e].getBoundingClientRect().top + s.a.scrollVal;
                s.a.buroScrollObj.scrollTo(i)
            }
        },
        goTo: function(t) {
            if (this.dom.activeMenu) {
                var e = this.dom.activeMenu.querySelector(".position-container");
                if (e) {
                    var i = e.getBoundingClientRect().height * (100 / this.dom.activeMenu.querySelectorAll("li").length) / 100
                      , r = t;
                    this.controllers.activeInnerIndex = t,
                    o.default.to(e.querySelector("span"), {
                        duration: .5,
                        y: i * r,
                        ease: "power4.inOut"
                    }),
                    o.default.to(e.querySelector("span"), {
                        duration: .25,
                        scaleY: 1.2,
                        ease: "power4.in",
                        onComplete: function() {
                            o.default.to(e.querySelector("span"), {
                                duration: .25,
                                scaleY: 1,
                                ease: "power4.out"
                            })
                        }
                    })
                }
            }
        },
        closeMenuBtn: function() {
            this.controllers.isMenuOpen && (this.controllers.isActive || this.controllers.canClose && (this.controllers.isOnTop || (this.controllers.isMenuOpen = !1,
            window.innerWidth > 800 && (o.default.killTweensOf(this.dom.menuBtn.querySelector(".label")),
            o.default.to(this.dom.menuBtn.querySelector(".label"), {
                duration: .1,
                opacity: 0,
                y: 10,
                ease: "power4.out"
            }),
            o.default.to(this.dom.menuBtn, {
                duration: .25,
                width: 4,
                ease: "power4.out"
            })))))
        },
        openMenuBtn: function() {
            this.controllers.isMenuOpen || (this.controllers.isMenuOpen = !0,
            window.innerWidth > 800 && (o.default.to(this.dom.menuBtn.querySelector(".label"), {
                duration: .25,
                opacity: 1,
                y: 0,
                ease: "power4.out"
            }),
            o.default.to(this.dom.menuBtn, {
                duration: .25,
                width: 24,
                ease: "power4.out"
            })))
        },
        animateIn: function() {
            this.controllers.isActive || (this.controllers.isActive = !0,
            this.dom.wrapper.classList.add("active"),
            this.openMenuBtn(),
            window.innerWidth <= 800 && this.animationBurguer("open"),
            this.dom.wrapper.classList.contains("dark-menu") ? this.dom.menuBtn.classList.add("light-btn") : this.dom.menuBtn.classList.add("dark-btn"),
            o.default.set([this.dom.mainLinks, this.dom.languageWrapper], {
                autoAlpha: 1
            }),
            o.default.fromTo([this.dom.languageWrapper.querySelectorAll(".item"), this.dom.mainLinks.querySelectorAll(".main-link")], {
                y: 20,
                autoAlpha: 0
            }, {
                duration: .5,
                y: 0,
                autoAlpha: 1,
                delay: .15,
                stagger: .05,
                ease: "power4.out"
            }),
            h.default.menuOpen(!0))
        },
        animateOut: function() {
            this.controllers.isMenuOpenMobile = !1,
            this.controllers.isActive = !1,
            this.dom.wrapper.classList.remove("active"),
            this.dom.menuBtn.classList.remove("light-btn"),
            this.dom.menuBtn.classList.remove("dark-btn"),
            o.default.killTweensOf(this.dom.mainLinks.querySelectorAll(".main-link")),
            this.closeMenuBtn(),
            window.innerWidth <= 800 && this.animationBurguer("close"),
            this.dom.wrapper.classList.remove("active"),
            o.default.set([this.dom.mainLinks, this.dom.languageWrapper], {
                autoAlpha: 0
            }),
            o.default.to([this.dom.languageWrapper.querySelectorAll(".item"), this.dom.mainLinks.querySelectorAll(".main-link")], {
                duration: .25,
                y: 10,
                autoAlpha: 0,
                ease: "power4.out"
            }),
            h.default.menuOpen(!1)
        },
        initIntersection: function() {
            var t = this;
            setTimeout((function() {
                t.plugins.intersectObjects = new a.a({
                    target: t.dom.menuBtn,
                    objects: document.querySelectorAll("[data-intersect]")
                },(function() {
                    t.loop()
                }
                ))
            }
            ), 600)
        },
        killIntersection: function() {
            cancelAnimationFrame(this.values.loopID),
            this.plugins.intersectObjects.kill(),
            this.plugins.intersectObjects = null,
            this.dom.wrapper.classList.remove("dark-menu")
        },
        changeColor: function(t) {
            t ? this.dom.wrapper.classList.add("dark-menu") : this.dom.wrapper.classList.remove("dark-menu")
        },
        loop: function() {
            var t = this;
            this.plugins.intersectObjects && this.plugins.intersectObjects.canUpdate && (this.plugins.intersectObjects.update() ? this.dom.wrapper.classList.remove("dark-menu") : this.dom.wrapper.classList.add("dark-menu")),
            this.values.loopID = requestAnimationFrame((function() {
                return t.loop()
            }
            ))
        },
        enterAnimation: function() {
            var t = this;
            o.default.fromTo(this.dom.wrapper, {
                x: 20,
                opacity: 0
            }, {
                duration: 2,
                x: 0,
                opacity: 1,
                delay: 1,
                ease: "power4.out",
                onComplete: function() {
                    t.dom.menuBtnHitzone.style.pointerEvents = "visible"
                }
            })
        },
        exitAnimation: function() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .25;
            o.default.to(this.dom.wrapper, {
                duration: e,
                x: 20,
                opacity: 0,
                ease: "power4.out",
                onComplete: function() {
                    t.dom.menuBtnHitzone.style.pointerEvents = "none"
                }
            })
        },
        updateState: function(t) {
            var e = -1;
            switch (this.currrentPage = t.dataset.routerView,
            this.animations.triggerSection && this.animations.triggerSection.kill(),
            this.dom.secondaryLinks.forEach((function(t) {
                o.default.set(t, {
                    clearProps: "all"
                }),
                t.querySelector("a") && o.default.set(t.querySelector("a"), {
                    clearProps: "all"
                })
            }
            )),
            this.dom.menuBtn.style.backgroundColor = "",
            this.dom.menuBtn.querySelector(".label").style.color = "",
            n.a.get(window.location.href).then((function(t) {
                var e = document.createElement("template");
                e.innerHTML = t.data,
                document.querySelector(".language-links").innerHTML = e.content.querySelector(".language-links").innerHTML
            }
            )),
            t.dataset.routerView) {
            case "home":
                e = 0,
                this.dom.wrapper.classList.add("dark-menu");
                break;
            case "about":
                e = 1,
                this.dom.wrapper.classList.remove("dark-menu");
                break;
            case "projects":
                e = 2,
                this.dom.wrapper.classList.remove("dark-menu"),
                this.dom.secondaryLinks.forEach((function(t) {
                    t.classList.contains("active-project") && o.default.set(t.querySelector("a"), {
                        pointerEvents: "none"
                    })
                }
                ));
                break;
            case "project":
                e = 2,
                t.querySelector(".page-toload").classList.contains("ura") ? this.dom.wrapper.classList.remove("dark-menu") : this.dom.wrapper.classList.add("dark-menu"),
                this.dom.secondaryLinks.forEach((function(t) {
                    t.classList.contains("inactive-project") && o.default.set(t, {
                        opacity: .7,
                        pointerEvents: "none"
                    })
                }
                ));
                break;
            case "expertise":
                e = 3,
                this.dom.wrapper.classList.remove("dark-menu");
                break;
            case "insights":
                e = 4,
                this.dom.wrapper.classList.add("dark-menu");
                break;
            case "insightsSingle":
                e = 4,
                this.dom.wrapper.classList.remove("dark-menu");
                break;
            case "four04":
                e = 5,
                this.dom.wrapper.classList.remove("dark-menu"),
                this.dom.secondaryLinks.forEach((function(t) {
                    t.classList.contains("active-project") && o.default.set(t.querySelector("a"), {
                        pointerEvents: "none"
                    })
                }
                ))
            }
            this.dom.mainLinks.querySelectorAll(".main-link").forEach((function(i, r) {
                r == e ? (i.classList.add("active"),
                i.querySelector(".secondary-links-container") && "projects" !== t.dataset.routerView ? i.querySelector(".secondary-links-container").classList.add("active") : i.querySelector(".secondary-links-container") && i.querySelector(".secondary-links-container").classList.remove("active")) : (i.classList.remove("active"),
                i.querySelector(".secondary-links-container") && i.querySelector(".secondary-links-container").classList.remove("active"))
            }
            )),
            this.dom.innerSections = document.querySelectorAll("[data-inner-section]"),
            this.dom.activeMenu = document.querySelector(".menu-wrapper .main-link.active"),
            this.controllers.activeInnerIndex = 0,
            this.controllers.isOnTop = !0,
            this.currentPage = t.dataset.routerView,
            this.dom.menuBtn.style.backgroundColor = "",
            this.dom.menuBtn.querySelector(".label").style.color = "",
            this.openMenuBtn(),
            this.createAnimations(),
            this.initValues()
        },
        kill: function() {
            cancelAnimationFrame(this.values.loopID)
        }
    };
    e.default = p
}
, function(t, e, i) {
    "use strict";
    var r = i(0)
      , n = {
        audio: {
            header: new Audio,
            transversal: new Audio,
            transitionHeader: new Audio,
            transitionTransversal: new Audio
        },
        volume: {
            header: {
                currentVolume: 1,
                generalVolume: 1
            },
            transversal: {
                currentVolume: 1,
                generalVolume: 1
            }
        },
        canChangeVolume: !0,
        isMuted: !0,
        currentPage: null,
        state: !1,
        audioOnEvent: new CustomEvent("audioOn"),
        audioOffEvent: new CustomEvent("audioOff"),
        crossfadeInterval: -1,
        auxInHeader: {
            x: 0
        },
        auxInTransversal: {
            x: 0
        },
        auxOutHeader: {
            x: 0
        },
        auxOutTransversal: {
            x: 0
        },
        init: function(t) {
            this.currentPage = t,
            document.querySelector("body").classList.contains("mobile") || (this.loadAudio(t, "header"),
            this.loadAudio(t, "transversal"))
        },
        loadAudio: function(t, e) {
            var i = this;
            return new Promise((function(r, n) {
                if ("header" === e && ("project" !== t && "insights" !== t && "insightsSingle" !== t && "privacy" !== t && (i.audio.header.src = "/wp-content/themes/Kategora/public/audio/".concat(t, "/header.mp3")),
                i.audio.header.loop = !0,
                i.audio.header.volume = 0,
                i.audio.header.load()),
                "transversal" === e && ("insights" !== t && "insightsSingle" !== t && "privacy" !== t && (i.audio.transversal.src = "/wp-content/themes/Kategora/public/audio/".concat(t, "/transversal.mp3")),
                i.audio.transversal.loop = !0,
                i.audio.transversal.volume = 0,
                i.audio.transversal.load()),
                "transition" === e) {
                    i.audio.transitionHeader = new Audio,
                    i.audio.transitionTransversal = new Audio,
                    "project" !== t && "insights" !== t && "insightsSingle" !== t && "privacy" !== t && (i.audio.transitionHeader.src = "/wp-content/themes/Kategora/public/audio/".concat(t, "/header.mp3")),
                    i.audio.transitionHeader.loop = !0,
                    i.audio.transitionHeader.volume = 0,
                    i.audio.transitionHeader.load(),
                    "insights" !== t && "insightsSingle" !== t && "privacy" !== t && (i.audio.transitionTransversal.src = "/wp-content/themes/Kategora/public/audio/".concat(t, "/transversal.mp3")),
                    i.audio.transitionTransversal.loop = !0,
                    i.audio.transitionTransversal.volume = 0,
                    i.audio.transitionTransversal.load();
                    var o = "project" === t || "insights" === t || "insightsSingle" === t || "privacy" === t
                      , s = "insights" === t || "insightsSingle" === t
                      , a = !1;
                    i.audio.transitionHeader.addEventListener("canplay", (function() {
                        o = !0
                    }
                    )),
                    i.audio.transitionTransversal.addEventListener("canplay", (function() {
                        s = !0
                    }
                    )),
                    a = setInterval((function() {
                        if (o && s)
                            return window.clearInterval(a),
                            r(),
                            !1
                    }
                    ), 100)
                }
            }
            ))
        },
        fadeIn: function(t) {
            var e = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            this.canChangeVolume = !1;
            var n = "header" === t ? this.audio.header : this.audio.transversal
              , o = "header" === t ? this.volume.header : this.volume.transversal
              , s = {
                x: n.volume
            };
            window.dispatchEvent(this.audioOnEvent),
            n.play(),
            r.default.to(s, {
                duration: i,
                x: o.currentVolume,
                onUpdate: function() {
                    return n.volume = s.x
                },
                onComplete: function() {
                    e.canChangeVolume = !0,
                    e.isMuted = !1
                }
            })
        },
        fadeOut: function(t) {
            var e = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            this.canChangeVolume = !1;
            var n = "header" === t ? this.audio.header : this.audio.transversal
              , o = {
                x: n.volume
            };
            r.default.to(o, {
                duration: i,
                x: 0,
                onUpdate: function() {
                    return n.volume = o.x
                },
                onComplete: function() {
                    n.pause(),
                    e.isMuted = !0,
                    e.canChangeVolume = !0,
                    window.dispatchEvent(e.audioOffEvent)
                }
            })
        },
        crossFade: function(t) {
            var e = this;
            document.querySelector("body").classList.contains("mobile") || (this.crossfadeInterval = setInterval((function() {
                if (e.canChangeVolume)
                    return e.canChangeVolume = !1,
                    e.loadAudio(t, "transition").then((function() {
                        e.auxInHeader = {
                            x: 0
                        },
                        e.auxInTransversal = {
                            x: 0
                        };
                        var i = "home" === t ? .2 : 1;
                        e.auxOutHeader = {
                            x: e.audio.header.volume
                        },
                        e.auxOutTransversal = {
                            x: e.audio.transversal.volume
                        };
                        var n = !1;
                        "projects" != e.currentPage && "project" != e.currentPage || "project" != t && "projects" != t || (n = !0),
                        e.state && (e.audio.transitionHeader.play(),
                        n || e.audio.transitionTransversal.play(),
                        r.default.to(e.auxInHeader, {
                            duration: 3,
                            x: i,
                            onUpdate: function() {
                                e.audio.transitionHeader && (e.audio.transitionHeader.volume = e.auxInHeader.x),
                                e.audio.transitionTransversal && (e.audio.transitionTransversal.volume = e.auxInHeader.x)
                            }
                        }),
                        n || r.default.to(e.auxInTransversal, {
                            duration: 3,
                            x: i,
                            onUpdate: function() {
                                e.audio.transitionHeader && (e.audio.transitionHeader.volume = e.auxInTransversal.x),
                                e.audio.transitionTransversal && (e.audio.transitionTransversal.volume = e.auxInTransversal.x)
                            }
                        }),
                        r.default.to(e.auxOutHeader, {
                            duration: 3,
                            x: 0,
                            onUpdate: function() {
                                return e.audio.header.volume = e.auxOutHeader.x
                            }
                        }),
                        n || r.default.to(e.auxOutTransversal, {
                            duration: 3,
                            x: 0,
                            onUpdate: function() {
                                return e.audio.transversal.volume = e.auxOutTransversal.x
                            }
                        })),
                        setTimeout((function() {
                            n || (e.audio.transversal = e.audio.transitionTransversal),
                            e.audio.header = e.audio.transitionHeader,
                            e.canChangeVolume = !0,
                            e.currentPage = t,
                            n && (e.audio.transitionHeader = null,
                            e.audio.transitionTransversal = null)
                        }
                        ), 3100)
                    }
                    )),
                    clearInterval(e.crossfadeInterval),
                    !1
            }
            ), 100))
        },
        setVolume: function(t, e) {
            if (this.canChangeVolume && !this.isMuted) {
                var i = "header" === e ? this.audio.header : this.audio.transversal
                  , r = "header" === e ? this.volume.header : this.volume.transversal;
                i.volume = t,
                r.currentVolume = t
            }
        },
        setState: function(t) {
            this.state = t
        },
        setPlay: function(t) {
            t ? (this.audio.header.play(),
            this.audio.transversal.play(),
            this.isMuted = !1) : (this.audio.header.pause(),
            this.audio.transversal.pause(),
            this.isMuted = !0)
        }
    };
    e.a = n
}
, function(t, e, i) {
    "use strict";
    var r = i(21)
      , n = Object.prototype.toString;
    function o(t) {
        return "[object Array]" === n.call(t)
    }
    function s(t) {
        return void 0 === t
    }
    function a(t) {
        return null !== t && "object" == typeof t
    }
    function l(t) {
        return "[object Function]" === n.call(t)
    }
    function h(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
            o(t))
                for (var i = 0, r = t.length; i < r; i++)
                    e.call(null, t[i], i, t);
            else
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e.call(null, t[n], n, t)
    }
    t.exports = {
        isArray: o,
        isArrayBuffer: function(t) {
            return "[object ArrayBuffer]" === n.call(t)
        },
        isBuffer: function(t) {
            return null !== t && !s(t) && null !== t.constructor && !s(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function(t) {
            return "string" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isObject: a,
        isUndefined: s,
        isDate: function(t) {
            return "[object Date]" === n.call(t)
        },
        isFile: function(t) {
            return "[object File]" === n.call(t)
        },
        isBlob: function(t) {
            return "[object Blob]" === n.call(t)
        },
        isFunction: l,
        isStream: function(t) {
            return a(t) && l(t.pipe)
        },
        isURLSearchParams: function(t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: h,
        merge: function t() {
            var e = {};
            function i(i, r) {
                "object" == typeof e[r] && "object" == typeof i ? e[r] = t(e[r], i) : e[r] = i
            }
            for (var r = 0, n = arguments.length; r < n; r++)
                h(arguments[r], i);
            return e
        },
        deepMerge: function t() {
            var e = {};
            function i(i, r) {
                "object" == typeof e[r] && "object" == typeof i ? e[r] = t(e[r], i) : e[r] = "object" == typeof i ? t({}, i) : i
            }
            for (var r = 0, n = arguments.length; r < n; r++)
                h(arguments[r], i);
            return e
        },
        extend: function(t, e, i) {
            return h(e, (function(e, n) {
                t[n] = i && "function" == typeof e ? r(e, i) : e
            }
            )),
            t
        },
        trim: function(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var o = i(18)
      , s = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            r(this, t),
            this.images = document.querySelectorAll("img"),
            this.inViewport = [],
            this.config = {
                rootMargin: "0px",
                threshold: .01
            },
            this.container = e,
            this.observer = null,
            this.imagesLoaded = null,
            this.resolvePromise = null,
            this.onAlways = this.onAlways.bind(this)
        }
        var e, i, s;
        return e = t,
        (i = [{
            key: "init",
            value: function(t) {
                var e = this;
                return new Promise((function(t, i) {
                    if (e.resolvePromise = t,
                    e.container)
                        e.imagesLoaded = o(e.container),
                        e.imagesLoaded.on("always", e.onAlways);
                    else {
                        e.images.length <= 0 && t(0);
                        var r = new IntersectionObserver((function(t, i) {
                            t.forEach((function(t) {
                                t.intersectionRatio > 0 && (i.unobserve(t.target),
                                e.inViewport.push(t.target))
                            }
                            )),
                            i.disconnect(),
                            e.imagesLoaded = o(e.inViewport),
                            e.imagesLoaded.on("always", e.onAlways)
                        }
                        ),e.config);
                        e.images.forEach((function(t) {
                            r.observe(t)
                        }
                        ))
                    }
                }
                ))
            }
        }, {
            key: "onAlways",
            value: function(t) {
                this.resolvePromise(t)
            }
        }, {
            key: "kill",
            value: function() {
                this.imagesLoaded.off("always", this.onAlways)
            }
        }]) && n(e.prototype, i),
        s && n(e, s),
        t
    }();
    e.a = s
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return a
    }
    ));
    var r = i(2)
      , n = i(0)
      , o = i(10);
    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var a = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.targets = e.targets,
            this.triggerOnce = e.triggerOnce || !1,
            this.persistent = e.persistent || !1,
            this.debug = e.debug || !1,
            this.triggeredTargets = 0,
            this.inViewport = [],
            this.observer = null,
            this.callbackFunction = null,
            this.callbackVisibleFunction = null,
            this.viewportHeight = window.innerHeight,
            this.offset = .3,
            this.config = {
                rootMargin: e.rootMargin || "0px",
                threshold: e.threshold || 0
            },
            this.loopID = null,
            this.onResize = this.onResize.bind(this)
        }
        var e, i, a;
        return e = t,
        (i = [{
            key: "init",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = this
                  , s = new o.a(document.querySelector("body"));
                if (s.init().then((function() {
                    e.onResize()
                }
                )),
                window.addEventListener("resize", n.onResize),
                window.addEventListener("scrollResize", this.onResize),
                n.callbackFunction = t,
                n.callbackVisibleFunction = i,
                n.observer = new IntersectionObserver(l,n.config),
                void 0 === n.targets.length) {
                    var a = n.targets;
                    n.targets = [],
                    n.targets.push(a)
                }
                function l(t, e) {
                    t.forEach((function(t) {
                        if (t.isIntersecting) {
                            if (n.triggerOnce)
                                n.persistent || (e.unobserve(t.target),
                                n.triggeredTargets += 1),
                                n.debug && console.log("BuroInsideViewport(Intersecting): ", t.target),
                                n.callbackFunction(t.target);
                            else {
                                var i = {};
                                i.element = t.target,
                                i.distance = -1,
                                n.inViewport.push(i)
                            }
                            n.callbackVisibleFunction && n.callbackVisibleFunction(t.target, !0)
                        } else
                            n.inViewport = n.inViewport.filter((function(e) {
                                return e.element !== t.target
                            }
                            )),
                            n.callbackVisibleFunction && n.callbackVisibleFunction(t.target, !1)
                    }
                    )),
                    n.triggerOnce && n.triggeredTargets == n.targets.length && (e.disconnect(),
                    n.kill())
                }
                n.targets.forEach((function(t) {
                    t.offsetY = t.getBoundingClientRect().top + r.a.scrollVal,
                    t.boundings = t.getBoundingClientRect(),
                    t.hasTriggered = !1,
                    n.observer.observe(t),
                    t.bounding = {
                        top: 0,
                        bottom: 0
                    },
                    t.bounding.top = t.boundings.top + r.a.scrollVal,
                    t.bounding.bottom = t.boundings.bottom + r.a.scrollVal
                }
                )),
                n.loop()
            }
        }, {
            key: "checkVisible",
            value: function(t) {
                _self.callbackVisibleFunction = t
            }
        }, {
            key: "prepare",
            value: function(t) {
                t(this.targets)
            }
        }, {
            key: "loop",
            value: function() {
                var t = this;
                this.loopID = requestAnimationFrame((function() {
                    return t.loop()
                }
                ));
                var e = 0;
                this.inViewport.length && (e = r.a.buroScrollObj ? r.a.scrollVal : window.scrollY,
                this.inViewport.forEach((function(i) {
                    i.distance = 1 - (i.element.offsetY - e) / t.viewportHeight,
                    i.visibleVal = (i.element.offsetY - e - t.viewportHeight) / i.element.boundings.height * -1;
                    var r = e + t.viewportHeight - i.element.offsetY
                      , o = t.viewportHeight + i.element.boundings.height;
                    i.insideVal = n.default.utils.mapRange(0, o, 0, 1, r);
                    var s = i.element.bounding.bottom + t.viewportHeight / 2 - i.element.boundings.height;
                    i.insideValAlt = n.default.utils.mapRange(i.element.bounding.top, s, 0, 1, e + t.viewportHeight)
                }
                )),
                this.callbackFunction(this.inViewport))
            }
        }, {
            key: "onResize",
            value: function() {
                var t = 0;
                t = r.a.buroScrollObj ? r.a.scrollVal : window.scrollY,
                this.viewportHeight = window.innerHeight,
                this.targets.forEach((function(e) {
                    e.offsetY = e.getBoundingClientRect().top + t,
                    e.boundings = e.getBoundingClientRect(),
                    e.bounding.top = e.boundings.top + r.a.scrollVal,
                    e.bounding.bottom = e.boundings.bottom + r.a.scrollVal
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                window.removeEventListener("resize", this.onResize),
                this.observer && this.observer.disconnect(),
                cancelAnimationFrame(this.loopID)
            }
        }]) && s(e.prototype, i),
        a && s(e, a),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return r
    }
    )),
    i.d(e, "a", (function() {
        return n
    }
    )),
    i.d(e, "c", (function() {
        return o
    }
    ));
    var r = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        e && (document.querySelector("body").classList.remove(e.getAttribute("data-bodyClass")),
        document.querySelector("body").classList.remove("js-byrefresh"),
        document.querySelector("body").classList.remove("js-no-ajax")),
        document.querySelector("body").classList.add(t.getAttribute("data-bodyClass"))
    }
      , n = function() {
        var t = {
            isMobile: !1,
            isTablet: !1,
            isPhone: !1,
            isDesktop: !1,
            isPortrait: !1,
            isLandscape: !1,
            isSafari: !1,
            isIE: !1,
            isEdge: !1,
            isChrome: !1,
            isFirefox: !1,
            isRetina: !1,
            pixelRatio: 1,
            isWindows: !1,
            type: "",
            browser: "",
            isTouch: "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            isMouse: !1
        };
        return window.addEventListener("mousemove", (function e() {
            t.isMouse = !0,
            window.removeEventListener("mousemove", e)
        }
        )),
        document.querySelector("body").classList.contains("mobile") ? (t.isMobile = !0,
        document.querySelector("body").classList.contains("phone") ? (t.isPhone = !0,
        t.type = "phone") : (t.type = "tablet",
        t.isTablet = !0),
        document.querySelector("html").classList.contains("firefox") ? (t.browser = "firefox",
        t.isFirefox = !0) : document.querySelector("html").classList.contains("chrome") ? (t.browser = "chrome",
        t.isChrome = !0) : document.querySelector("html").classList.contains("safari") ? (t.browser = "safari",
        t.isSafari = !0) : t.browser = "unknown") : (t.type = "desktop",
        t.isDesktop = !0,
        document.querySelector("html").classList.contains("win") && (t.isWindows = !0),
        document.querySelector("html").classList.contains("firefox") ? (t.browser = "firefox",
        t.isFirefox = !0) : document.querySelector("html").classList.contains("chrome") ? (t.browser = "chrome",
        t.isChrome = !0) : document.querySelector("html").classList.contains("safari") ? (t.browser = "safari",
        t.isSafari = !0) : document.querySelector("html").classList.contains("ie") ? (t.browser = "ie",
        t.isIE = !0) : document.querySelector("html").classList.contains("edge") ? (t.browser = "edge",
        t.isEdge = !0) : t.browser = "unknown"),
        document.querySelector("html").classList.contains("orientation_landscape") && (t.isLandscape = !0),
        document.querySelector("html").classList.contains("orientation_portrait") && (t.isPortrait = !0),
        t.pixelRatio = window.devicePixelRatio,
        t.pixelRatio >= 2 && (t.isRetina = !0),
        t
    }
      , o = {
        clamp: function(t, e, i) {
            return t <= e ? e : t >= i ? i : t
        },
        lerp: function(t, e, i) {
            return (1 - i) * t + i * e
        },
        scaleBetween: function(t, e, i, r, n) {
            return (i - e) * (t - r) / (n - r) + e
        },
        normalize: function(t, e, i) {
            return (t - e) / (i - e)
        },
        cover: function(t, e, i, r, n) {
            var o = {};
            if (n) {
                var s = Math.min(i / t, r / e);
                o.width = t * s,
                o.height = e * s
            } else
                o.width = i,
                o.height = e * i / t,
                o.height < r && (o.width = t * r / e,
                o.height = r);
            return o.left = Math.round((i - o.width) / 2),
            o.top = Math.round((r - o.height) / 2),
            o
        }
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(2)
      , n = i(10);
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var a = function() {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            o(this, t),
            this.target = e.target,
            this.targetBoundings = this.target.getBoundingClientRect(),
            this.objs = e.objects,
            this.objsBoundings = [],
            this.overlap = !1,
            this.canUpdate = !1,
            this.lastScroll = -1,
            this.debug = e.debug || !1,
            this.resize = this.resize.bind(this),
            this.init(i)
        }
        var e, i, a;
        return e = t,
        (i = [{
            key: "init",
            value: function(t) {
                var e = this;
                window.addEventListener("resize", this.resize),
                new n.a(document.querySelector("body")).init().then((function() {
                    e.resize().then((function() {
                        t && t()
                    }
                    ))
                }
                ))
            }
        }, {
            key: "update",
            value: function() {
                if (this.canUpdate) {
                    var t = {};
                    r.a.buroScrollObj ? t.scrollVal = r.a.scrollVal : (t = {
                        scrollVal: window.pageYOffset
                    },
                    this.lastScroll - t.scrollVal < 0 ? t.direction = "down" : this.lastScroll - t.scrollVal > 0 && (t.direction = "up"),
                    this.lastScroll = t.scrollVal <= 0 ? 0 : t.scrollVal),
                    this.overlap = !1;
                    for (var e = 0, i = this.objsBoundings.length; e < i; e++)
                        if (this.target.getBoundingClientRect().bottom + t.scrollVal > this.objsBoundings[e].boundingTop && this.target.getBoundingClientRect().top + t.scrollVal < this.objsBoundings[e].boundingBottom && (this.overlap = !0,
                        this.objsBoundings[e].main)) {
                            this.overlap = !1;
                            break
                        }
                    return this.overlap
                }
            }
        }, {
            key: "resize",
            value: function() {
                var t = this;
                return new Promise((function(e, i) {
                    t.canUpdate = !1,
                    t.objsBoundings = [],
                    t.targetBoundings = t.target.getBoundingClientRect();
                    for (var n = 0, o = t.objs.length; n < o; n++) {
                        var s = {};
                        s.element = t.objs[n],
                        s.boundings = t.objs[n].getBoundingClientRect(),
                        s.boundingTop = s.boundings.top + r.a.scrollVal,
                        s.boundingBottom = s.boundings.bottom + r.a.scrollVal,
                        s.main = !1,
                        "" == t.objs[n].dataset.intersectmain && (s.main = !0),
                        t.objsBoundings.push(s)
                    }
                    t.canUpdate = !0,
                    e()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                window.removeEventListener("resize", this.resize)
            }
        }]) && s(e.prototype, i),
        a && s(e, a),
        t
    }();
    e.a = a
}
, function(t, e, i) {
    "use strict";
    (function(t) {
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function n(t, e, i) {
            return e && r(t.prototype, e),
            i && r(t, i),
            t
        }
        function o(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function s(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, r)
            }
            return i
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(i), !0).forEach((function(e) {
                    o(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        function l(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && c(t, e)
        }
        function h(t) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function c(t, e) {
            return (c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function u(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function p(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
        }
        function f(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, r = h(t);
                if (e) {
                    var n = h(this).constructor;
                    i = Reflect.construct(r, arguments, n)
                } else
                    i = r.apply(this, arguments);
                return p(this, i)
            }
        }
        function d(t, e, i) {
            return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var r = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)); )
                        ;
                    return t
                }(t, e);
                if (r) {
                    var n = Object.getOwnPropertyDescriptor(r, e);
                    return n.get ? n.get.call(i) : n.value
                }
            }
            )(t, e, i || t)
        }
        function m(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                    return;
                var i = []
                  , r = !0
                  , n = !1
                  , o = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (i.push(s.value),
                    !e || i.length !== e); r = !0)
                        ;
                } catch (t) {
                    n = !0,
                    o = t
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw o
                    }
                }
                return i
            }(t, e) || g(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(t) {
            return function(t) {
                if (Array.isArray(t))
                    return v(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                    return Array.from(t)
            }(t) || g(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return v(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
            }
        }
        function v(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++)
                r[i] = t[i];
            return r
        }
        var b = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: .1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical",
                breakpoint: 1024
            },
            smartphone: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical"
            }
        }
          , w = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t),
                Object.assign(this, b, e),
                this.smartphone = b.smartphone,
                e.smartphone && Object.assign(this.smartphone, e.smartphone),
                this.tablet = b.tablet,
                e.tablet && Object.assign(this.tablet, e.tablet),
                this.namespace = "locomotive",
                this.html = document.documentElement,
                this.windowHeight = window.innerHeight,
                this.windowWidth = window.innerWidth,
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                },
                this.els = {},
                this.currentElements = {},
                this.listeners = {},
                this.hasScrollTicking = !1,
                this.hasCallEventSet = !1,
                this.checkScroll = this.checkScroll.bind(this),
                this.checkResize = this.checkResize.bind(this),
                this.checkEvent = this.checkEvent.bind(this),
                this.instance = {
                    scroll: {
                        x: 0,
                        y: 0
                    },
                    limit: {
                        x: this.html.offsetHeight,
                        y: this.html.offsetHeight
                    },
                    currentElements: this.currentElements
                },
                this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                this.isMobile && (this.direction = this[this.context].direction),
                "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
                this.getDirection && (this.instance.direction = null),
                this.getDirection && (this.instance.speed = 0),
                this.html.classList.add(this.initClass),
                window.addEventListener("resize", this.checkResize, !1)
            }
            return n(t, [{
                key: "init",
                value: function() {
                    this.initEvents()
                }
            }, {
                key: "checkScroll",
                value: function() {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0,
                    requestAnimationFrame((function() {
                        t.resize(),
                        t.resizeTick = !1
                    }
                    )))
                }
            }, {
                key: "resize",
                value: function() {}
            }, {
                key: "checkContext",
                value: function() {
                    if (this.reloadOnContextChange) {
                        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint,
                        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                        var t = this.context;
                        if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                        t != this.context)
                            ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                    }
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                    this.setScrollTo = this.setScrollTo.bind(this),
                    this.scrollToEls.forEach((function(e) {
                        e.addEventListener("click", t.setScrollTo, !1)
                    }
                    ))
                }
            }, {
                key: "setScrollTo",
                value: function(t) {
                    t.preventDefault(),
                    this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                        offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    })
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(t) {
                    var e = this
                      , i = this.instance.scroll.y
                      , r = i + this.windowHeight
                      , n = this.instance.scroll.x
                      , o = n + this.windowWidth;
                    Object.entries(this.els).forEach((function(s) {
                        var a = m(s, 2)
                          , l = a[0]
                          , h = a[1];
                        if (!h || h.inView && !t || ("horizontal" === e.direction ? o >= h.left && n < h.right && e.setInView(h, l) : r >= h.top && i < h.bottom && e.setInView(h, l)),
                        h && h.inView)
                            if ("horizontal" === e.direction) {
                                var c = h.right - h.left;
                                h.progress = (e.instance.scroll.x - (h.left - e.windowWidth)) / (c + e.windowWidth),
                                (o < h.left || n > h.right) && e.setOutOfView(h, l)
                            } else {
                                var u = h.bottom - h.top;
                                h.progress = (e.instance.scroll.y - (h.top - e.windowHeight)) / (u + e.windowHeight),
                                (r < h.top || i > h.bottom) && e.setOutOfView(h, l)
                            }
                    }
                    )),
                    this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(t, e) {
                    this.els[e].inView = !0,
                    t.el.classList.add(t.class),
                    this.currentElements[e] = t,
                    t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                    t.repeat || (this.els[e].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function(t, e) {
                    var i = this;
                    this.els[e].inView = !1,
                    Object.keys(this.currentElements).forEach((function(t) {
                        t === e && delete i.currentElements[t]
                    }
                    )),
                    t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                    t.repeat && t.el.classList.remove(t.class)
                }
            }, {
                key: "dispatchCall",
                value: function(t, e) {
                    this.callWay = e,
                    this.callValue = t.call.split(",").map((function(t) {
                        return t.trim()
                    }
                    )),
                    this.callObj = t,
                    1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    var i = new Event(this.namespace + "call");
                    this.el.dispatchEvent(i)
                }
            }, {
                key: "dispatchScroll",
                value: function() {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t)
                }
            }, {
                key: "setEvents",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e),
                    1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                    "call" === t && (this.hasCallEventSet = !0,
                    this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(t, e) {
                    if (this.listeners[t]) {
                        var i = this.listeners[t]
                          , r = i.indexOf(e);
                        r < 0 || (i.splice(r, 1),
                        0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                    }
                }
            }, {
                key: "checkEvent",
                value: function(t) {
                    var e = this
                      , i = t.type.replace(this.namespace, "")
                      , r = this.listeners[i];
                    r && 0 !== r.length && r.forEach((function(t) {
                        switch (i) {
                        case "scroll":
                            return t(e.instance);
                        case "call":
                            return t(e.callValue, e.callWay, e.callObj);
                        default:
                            return t()
                        }
                    }
                    ))
                }
            }, {
                key: "startScroll",
                value: function() {}
            }, {
                key: "stopScroll",
                value: function() {}
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1),
                    Object.keys(this.listeners).forEach((function(e) {
                        t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                    }
                    )),
                    this.listeners = {},
                    this.scrollToEls.forEach((function(e) {
                        e.removeEventListener("click", t.setScrollTo, !1)
                    }
                    )),
                    this.html.classList.remove(this.initClass)
                }
            }]),
            t
        }()
          , S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        function x(t, e) {
            return t(e = {
                exports: {}
            }, e.exports),
            e.exports
        }
        var _ = x((function(t, e) {
            t.exports = {
                polyfill: function() {
                    var t = window
                      , e = document;
                    if (!("scrollBehavior"in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                        var i, r = t.HTMLElement || t.Element, n = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: r.prototype.scroll || a,
                            scrollIntoView: r.prototype.scrollIntoView
                        }, o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, s = (i = t.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                        t.scroll = t.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? d.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                        }
                        ,
                        t.scrollBy = function() {
                            void 0 !== arguments[0] && (l(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : d.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }
                        ,
                        r.prototype.scroll = r.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== l(arguments[0])) {
                                    var t = arguments[0].left
                                      , e = arguments[0].top;
                                    d.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        r.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        r.prototype.scrollIntoView = function() {
                            if (!0 !== l(arguments[0])) {
                                var i = p(this)
                                  , r = i.getBoundingClientRect()
                                  , o = this.getBoundingClientRect();
                                i !== e.body ? (d.call(this, i, i.scrollLeft + o.left - r.left, i.scrollTop + o.top - r.top),
                                "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                    left: r.left,
                                    top: r.top,
                                    behavior: "smooth"
                                })) : t.scrollBy({
                                    left: o.left,
                                    top: o.top,
                                    behavior: "smooth"
                                })
                            } else
                                n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }
                    function a(t, e) {
                        this.scrollLeft = t,
                        this.scrollTop = e
                    }
                    function l(t) {
                        if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                            return !0;
                        if ("object" == typeof t && "smooth" === t.behavior)
                            return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }
                    function h(t, e) {
                        return "Y" === e ? t.clientHeight + s < t.scrollHeight : "X" === e ? t.clientWidth + s < t.scrollWidth : void 0
                    }
                    function c(e, i) {
                        var r = t.getComputedStyle(e, null)["overflow" + i];
                        return "auto" === r || "scroll" === r
                    }
                    function u(t) {
                        var e = h(t, "Y") && c(t, "Y")
                          , i = h(t, "X") && c(t, "X");
                        return e || i
                    }
                    function p(t) {
                        for (; t !== e.body && !1 === u(t); )
                            t = t.parentNode || t.host;
                        return t
                    }
                    function f(e) {
                        var i, r, n, s, a = (o() - e.startTime) / 468;
                        s = a = a > 1 ? 1 : a,
                        i = .5 * (1 - Math.cos(Math.PI * s)),
                        r = e.startX + (e.x - e.startX) * i,
                        n = e.startY + (e.y - e.startY) * i,
                        e.method.call(e.scrollable, r, n),
                        r === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                    }
                    function d(i, r, s) {
                        var l, h, c, u, p = o();
                        i === e.body ? (l = t,
                        h = t.scrollX || t.pageXOffset,
                        c = t.scrollY || t.pageYOffset,
                        u = n.scroll) : (l = i,
                        h = i.scrollLeft,
                        c = i.scrollTop,
                        u = a),
                        f({
                            scrollable: l,
                            method: u,
                            startTime: p,
                            startX: h,
                            startY: c,
                            x: r,
                            y: s
                        })
                    }
                }
            }
        }
        ))
          , E = (_.polyfill,
        function(t) {
            l(r, t);
            var e = f(r);
            function r() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return i(this, r),
                (t = e.call(this, n)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0)),
                window.addEventListener("scroll", t.checkScroll, !1),
                void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = _,
                window.smoothscrollPolyfill.polyfill()),
                t
            }
            return n(r, [{
                key: "init",
                value: function() {
                    this.instance.scroll.y = window.pageYOffset,
                    this.addElements(),
                    this.detectElements(),
                    d(h(r.prototype), "init", this).call(this)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this;
                    d(h(r.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.speedTs = Date.now()),
                    this.instance.scroll.y = window.pageYOffset,
                    Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                        t.detectElements()
                    }
                    )),
                    this.hasScrollTicking = !0))
                }
            }, {
                key: "addDirection",
                value: function() {
                    window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "resize",
                value: function() {
                    Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                    this.updateElements())
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {},
                    this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                        e.getBoundingClientRect();
                        var r, n, o, s = e.dataset[t.name + "Class"] || t.class, a = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i, l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, h = e.dataset[t.name + "Repeat"], c = e.dataset[t.name + "Call"], u = e.dataset[t.name + "Target"], p = (o = void 0 !== u ? document.querySelector("".concat(u)) : e).getBoundingClientRect();
                        r = p.top + t.instance.scroll.y,
                        n = p.left + t.instance.scroll.x;
                        var f = r + o.offsetHeight
                          , d = n + o.offsetWidth;
                        "#header" === u && console.log(r, f),
                        h = "false" != h && (null != h || t.repeat);
                        var m = t.getRelativeOffset(l)
                          , y = {
                            el: e,
                            targetEl: o,
                            id: a,
                            class: s,
                            top: r += m[0],
                            bottom: f -= m[1],
                            left: n,
                            right: d,
                            offset: l,
                            progress: 0,
                            repeat: h,
                            inView: !1,
                            call: c
                        };
                        t.els[a] = y,
                        e.classList.contains(s) && t.setInView(t.els[a], a)
                    }
                    ))
                }
            }, {
                key: "updateElements",
                value: function() {
                    var t = this;
                    Object.entries(this.els).forEach((function(e) {
                        var i = m(e, 2)
                          , r = i[0]
                          , n = i[1]
                          , o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y
                          , s = o + n.targetEl.offsetHeight
                          , a = t.getRelativeOffset(n.offset);
                        t.els[r].top = o + a[0],
                        t.els[r].bottom = s - a[1]
                    }
                    )),
                    this.hasScrollTicking = !1
                }
            }, {
                key: "getRelativeOffset",
                value: function(t) {
                    var e = [0, 0];
                    if (t)
                        for (var i = 0; i < t.length; i++)
                            "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                    return e
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = parseInt(e.offset) || 0
                      , r = !!e.callback && e.callback;
                    if ("string" == typeof t) {
                        if ("top" === t)
                            t = this.html;
                        else if ("bottom" === t)
                            t = this.html.offsetHeight - window.innerHeight;
                        else if (!(t = document.querySelector(t)))
                            return
                    } else if ("number" == typeof t)
                        t = parseInt(t);
                    else if (!t || !t.tagName)
                        return void console.warn("`target` parameter is not valid");
                    if (i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i,
                    r) {
                        i = i.toFixed();
                        var n = function t() {
                            window.pageYOffset.toFixed() === i && (window.removeEventListener("scroll", t),
                            r())
                        };
                        window.addEventListener("scroll", n)
                    }
                    window.scrollTo({
                        top: i,
                        behavior: "smooth"
                    })
                }
            }, {
                key: "update",
                value: function() {
                    this.addElements(),
                    this.detectElements()
                }
            }, {
                key: "destroy",
                value: function() {
                    d(h(r.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1)
                }
            }]),
            r
        }(w))
          , k = Object.getOwnPropertySymbols
          , P = Object.prototype.hasOwnProperty
          , A = Object.prototype.propertyIsEnumerable;
        function T(t) {
            if (null == t)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var C = function() {
            try {
                if (!Object.assign)
                    return !1;
                var t = new String("abc");
                if (t[5] = "de",
                "5" === Object.getOwnPropertyNames(t)[0])
                    return !1;
                for (var e = {}, i = 0; i < 10; i++)
                    e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                    return e[t]
                }
                )).join(""))
                    return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                    r[t] = t
                }
                )),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var i, r, n = T(t), o = 1; o < arguments.length; o++) {
                for (var s in i = Object(arguments[o]))
                    P.call(i, s) && (n[s] = i[s]);
                if (k) {
                    r = k(i);
                    for (var a = 0; a < r.length; a++)
                        A.call(i, r[a]) && (n[r[a]] = i[r[a]])
                }
            }
            return n
        }
        ;
        function M() {}
        M.prototype = {
            on: function(t, e, i) {
                var r = this.e || (this.e = {});
                return (r[t] || (r[t] = [])).push({
                    fn: e,
                    ctx: i
                }),
                this
            },
            once: function(t, e, i) {
                var r = this;
                function n() {
                    r.off(t, n),
                    e.apply(i, arguments)
                }
                return n._ = e,
                this.on(t, n, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, n = i.length; r < n; r++)
                    i[r].fn.apply(i[r].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {})
                  , r = i[t]
                  , n = [];
                if (r && e)
                    for (var o = 0, s = r.length; o < s; o++)
                        r[o].fn !== e && r[o].fn._ !== e && n.push(r[o]);
                return n.length ? i[t] = n : delete i[t],
                this
            }
        };
        var D = M
          , L = x((function(t, e) {
            (function() {
                (null !== e ? e : this).Lethargy = function() {
                    function t(t, e, i, r) {
                        this.stability = null != t ? Math.abs(t) : 8,
                        this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                        this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
                        this.delay = null != r ? r : 150,
                        this.lastUpDeltas = function() {
                            var t, e, i;
                            for (i = [],
                            t = 1,
                            e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                i.push(null);
                            return i
                        }
                        .call(this),
                        this.lastDownDeltas = function() {
                            var t, e, i;
                            for (i = [],
                            t = 1,
                            e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                i.push(null);
                            return i
                        }
                        .call(this),
                        this.deltasTimestamp = function() {
                            var t, e, i;
                            for (i = [],
                            t = 1,
                            e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                i.push(null);
                            return i
                        }
                        .call(this)
                    }
                    return t.prototype.check = function(t) {
                        var e;
                        return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                        this.deltasTimestamp.push(Date.now()),
                        this.deltasTimestamp.shift(),
                        e > 0 ? (this.lastUpDeltas.push(e),
                        this.lastUpDeltas.shift(),
                        this.isInertia(1)) : (this.lastDownDeltas.push(e),
                        this.lastDownDeltas.shift(),
                        this.isInertia(-1))
                    }
                    ,
                    t.prototype.isInertia = function(t) {
                        var e, i, r, n, o, s, a;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (r = e.slice(0, this.stability),
                        i = e.slice(this.stability, 2 * this.stability),
                        a = r.reduce((function(t, e) {
                            return t + e
                        }
                        )),
                        o = i.reduce((function(t, e) {
                            return t + e
                        }
                        )),
                        s = a / r.length,
                        n = o / i.length,
                        Math.abs(s) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                    }
                    ,
                    t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }
                    ,
                    t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }
                    ,
                    t
                }()
            }
            ).call(S)
        }
        ))
          , O = {
            hasWheelEvent: "onwheel"in document,
            hasMouseWheelEvent: "onmousewheel"in document,
            hasTouch: "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown"in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
        }
          , F = Object.prototype.toString
          , I = Object.prototype.hasOwnProperty;
        function R(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var B = L.Lethargy
          , V = "virtualscroll"
          , j = W
          , q = 37
          , z = 38
          , N = 39
          , H = 40
          , G = 32;
        function W(t) {
            !function(t) {
                if (!t)
                    return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var i in t)
                        I.call(t, i) && "function" == typeof t[i] && "[object Function]" == F.call(t[i]) && e.push(i);
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    t[n] = R(t[n], t)
                }
            }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
            this.el = window,
            t && t.el && (this.el = t.el,
            delete t.el),
            this.options = C({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t),
            this.options.limitInertia && (this._lethargy = new B),
            this._emitter = new D,
            this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            },
            this.touchStartX = null,
            this.touchStartY = null,
            this.bodyTouchAction = null,
            void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }
        function Y(t, e, i) {
            return (1 - i) * t + i * e
        }
        function X(t) {
            var e = {};
            if (window.getComputedStyle) {
                var i = getComputedStyle(t)
                  , r = i.transform || i.webkitTransform || i.mozTransform
                  , n = r.match(/^matrix3d\((.+)\)$/);
                return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0,
                e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = r.match(/^matrix\((.+)\)$/),
                e.x = n ? parseFloat(n[1].split(", ")[4]) : 0,
                e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
                e
            }
        }
        function U(t) {
            for (var e = []; t && t !== document; t = t.parentNode)
                e.push(t);
            return e
        }
        W.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX,
            e.y += e.deltaY,
            this._emitter.emit(V, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }
        ,
        W.prototype._onWheel = function(t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var i = this._event;
                i.deltaX = t.wheelDeltaX || -1 * t.deltaX,
                i.deltaY = t.wheelDeltaY || -1 * t.deltaY,
                O.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier,
                i.deltaY *= e.firefoxMultiplier),
                i.deltaX *= e.mouseMultiplier,
                i.deltaY *= e.mouseMultiplier,
                this._notify(t)
            }
        }
        ,
        W.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
                e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
                this._notify(t)
            }
        }
        ,
        W.prototype._onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX,
            this.touchStartY = e.pageY
        }
        ,
        W.prototype._onTouchMove = function(t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var i = this._event
              , r = t.targetTouches ? t.targetTouches[0] : t;
            i.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier,
            i.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier,
            this.touchStartX = r.pageX,
            this.touchStartY = r.pageY,
            this._notify(t)
        }
        ,
        W.prototype._onKeyDown = function(t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (t.keyCode) {
            case q:
            case z:
                e.deltaY = this.options.keyStep;
                break;
            case N:
            case H:
                e.deltaY = -this.options.keyStep;
                break;
            case t.shiftKey:
                e.deltaY = i;
                break;
            case G:
                e.deltaY = -i;
                break;
            default:
                return
            }
            this._notify(t)
        }
        ,
        W.prototype._bind = function() {
            O.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
            O.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
            O.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
            this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
            O.hasPointer && O.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
            document.body.style.msTouchAction = "none",
            this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
            O.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }
        ,
        W.prototype._unbind = function() {
            O.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
            O.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
            O.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
            this.el.removeEventListener("touchmove", this._onTouchMove)),
            O.hasPointer && O.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
            this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
            O.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }
        ,
        W.prototype.on = function(t, e) {
            this._emitter.on(V, t, e);
            var i = this._emitter.e;
            i && i[V] && 1 === i[V].length && this._bind()
        }
        ,
        W.prototype.off = function(t, e) {
            this._emitter.off(V, t, e);
            var i = this._emitter.e;
            (!i[V] || i[V].length <= 0) && this._unbind()
        }
        ,
        W.prototype.reset = function() {
            var t = this._event;
            t.x = 0,
            t.y = 0
        }
        ,
        W.prototype.destroy = function() {
            this._emitter.off(),
            this._unbind()
        }
        ;
        var K = "function" == typeof Float32Array;
        function $(t, e) {
            return 1 - 3 * e + 3 * t
        }
        function Q(t, e) {
            return 3 * e - 6 * t
        }
        function Z(t) {
            return 3 * t
        }
        function J(t, e, i) {
            return (($(e, i) * t + Q(e, i)) * t + Z(e)) * t
        }
        function tt(t, e, i) {
            return 3 * $(e, i) * t * t + 2 * Q(e, i) * t + Z(e)
        }
        function et(t) {
            return t
        }
        var it = function(t, e, i, r) {
            if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && i === r)
                return et;
            for (var n = K ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o)
                n[o] = J(.1 * o, t, i);
            function s(e) {
                for (var r = 0, o = 1; 10 !== o && n[o] <= e; ++o)
                    r += .1;
                --o;
                var s = r + .1 * ((e - n[o]) / (n[o + 1] - n[o]))
                  , a = tt(s, t, i);
                return a >= .001 ? function(t, e, i, r) {
                    for (var n = 0; n < 4; ++n) {
                        var o = tt(e, i, r);
                        if (0 === o)
                            return e;
                        e -= (J(e, i, r) - t) / o
                    }
                    return e
                }(e, s, t, i) : 0 === a ? s : function(t, e, i, r, n) {
                    var o, s, a = 0;
                    do {
                        (o = J(s = e + (i - e) / 2, r, n) - t) > 0 ? i = s : e = s
                    } while (Math.abs(o) > 1e-7 && ++a < 10);
                    return s
                }(e, r, r + .1, t, i)
            }
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : J(s(t), e, r)
            }
        }
          , rt = 38
          , nt = 40
          , ot = 32
          , st = 9
          , at = 33
          , lt = 34
          , ht = 36
          , ct = 35
          , ut = function(t) {
            l(r, t);
            var e = f(r);
            function r() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return i(this, r),
                history.scrollRestoration && (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0),
                (t = e.call(this, n)).inertia && (t.lerp = .1 * t.inertia),
                t.isScrolling = !1,
                t.isDraggingScrollbar = !1,
                t.isTicking = !1,
                t.hasScrollTicking = !1,
                t.parallaxElements = {},
                t.stop = !1,
                t.scrollbarContainer = n.scrollbarContainer,
                t.checkKey = t.checkKey.bind(u(t)),
                window.addEventListener("keydown", t.checkKey, !1),
                t
            }
            return n(r, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.html.classList.add(this.smoothClass),
                    this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                    this.instance = a({
                        delta: {
                            x: 0,
                            y: 0
                        }
                    }, this.instance),
                    this.vs = new j({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0
                    }),
                    this.vs.on((function(e) {
                        t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                            t.updateDelta(e),
                            t.isScrolling || t.startScrolling()
                        }
                        ))
                    }
                    )),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.checkScroll(!0),
                    this.transformElements(!0, !0),
                    d(h(r.prototype), "init", this).call(this)
                }
            }, {
                key: "setScrollLimit",
                value: function() {
                    if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                    "horizontal" === this.direction) {
                        for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                            t += e[i].offsetWidth;
                        this.instance.limit.x = t - this.windowWidth
                    }
                }
            }, {
                key: "startScrolling",
                value: function() {
                    this.startScrollTs = Date.now(),
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }, {
                key: "stopScrolling",
                value: function() {
                    cancelAnimationFrame(this.checkScrollRaf),
                    this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                    this.scrollToRaf = null),
                    this.isScrolling = !1,
                    this.instance.scroll.y = Math.round(this.instance.scroll.y),
                    this.html.classList.remove(this.scrollingClass)
                }
            }, {
                key: "checkKey",
                value: function(t) {
                    var e = this;
                    if (this.stop)
                        t.keyCode == st && requestAnimationFrame((function() {
                            e.html.scrollTop = 0,
                            document.body.scrollTop = 0,
                            e.html.scrollLeft = 0,
                            document.body.scrollLeft = 0
                        }
                        ));
                    else {
                        switch (t.keyCode) {
                        case st:
                            requestAnimationFrame((function() {
                                e.html.scrollTop = 0,
                                document.body.scrollTop = 0,
                                e.html.scrollLeft = 0,
                                document.body.scrollLeft = 0,
                                e.scrollTo(document.activeElement, {
                                    offset: -window.innerHeight / 2
                                })
                            }
                            ));
                            break;
                        case rt:
                            this.instance.delta[this.directionAxis] -= 240;
                            break;
                        case nt:
                            this.instance.delta[this.directionAxis] += 240;
                            break;
                        case at:
                            this.instance.delta[this.directionAxis] -= window.innerHeight;
                            break;
                        case lt:
                            this.instance.delta[this.directionAxis] += window.innerHeight;
                            break;
                        case ht:
                            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                            break;
                        case ct:
                            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                            break;
                        case ot:
                            document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                            break;
                        default:
                            return
                        }
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                        this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                        this.stopScrolling(),
                        this.isScrolling = !0,
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass)
                    }
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e || this.isScrolling || this.isDraggingScrollbar) {
                        this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                            return t.checkScroll()
                        }
                        )),
                        this.hasScrollTicking = !0),
                        this.updateScroll();
                        var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                          , n = Date.now() - this.startScrollTs;
                        if (!this.animatingScroll && n > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                        Object.entries(this.sections).forEach((function(e) {
                            var i = m(e, 2)
                              , r = (i[0],
                            i[1]);
                            r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]),
                            r.inView || (r.inView = !0,
                            r.el.style.opacity = 1,
                            r.el.style.pointerEvents = "all",
                            r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : (r.inView && (r.inView = !1,
                            r.el.style.opacity = 0,
                            r.el.style.pointerEvents = "none",
                            r.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                            t.transform(r.el, 0, 0))
                        }
                        )),
                        this.getDirection && this.addDirection(),
                        this.getSpeed && (this.addSpeed(),
                        this.speedTs = Date.now()),
                        this.detectElements(),
                        this.transformElements(),
                        this.hasScrollbar) {
                            var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                            "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                        }
                        d(h(r.prototype), "checkScroll", this).call(this),
                        this.hasScrollTicking = !1
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    this.windowHeight = window.innerHeight,
                    this.windowWidth = window.innerWidth,
                    this.checkContext(),
                    this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    },
                    this.update()
                }
            }, {
                key: "updateDelta",
                value: function(t) {
                    var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                    e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY,
                    this.instance.delta[this.directionAxis] -= e * this.multiplier,
                    this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                }
            }, {
                key: "updateScroll",
                value: function(t) {
                    this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = Y(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                }
            }, {
                key: "addDirection",
                value: function() {
                    this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                    this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "initScrollBar",
                value: function() {
                    if (this.scrollbar = document.createElement("span"),
                    this.scrollbarThumb = document.createElement("span"),
                    this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                    this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                    this.scrollbar.append(this.scrollbarThumb),
                    this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                    this.getScrollBar = this.getScrollBar.bind(this),
                    this.releaseScrollBar = this.releaseScrollBar.bind(this),
                    this.moveScrollBar = this.moveScrollBar.bind(this),
                    this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                    window.addEventListener("mouseup", this.releaseScrollBar),
                    window.addEventListener("mousemove", this.moveScrollBar),
                    this.hasScrollbar = !1,
                    "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                            return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                        return;
                    this.hasScrollbar = !0,
                    this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                    this.scrollbarHeight = this.scrollbarBCR.height,
                    this.scrollbarWidth = this.scrollbarBCR.width,
                    "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                    this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                    this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    }
                }
            }, {
                key: "reinitScrollBar",
                value: function() {
                    if (this.hasScrollbar = !1,
                    "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                            return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                        return;
                    this.hasScrollbar = !0,
                    this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                    this.scrollbarHeight = this.scrollbarBCR.height,
                    this.scrollbarWidth = this.scrollbarBCR.width,
                    "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                    this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                    this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    }
                }
            }, {
                key: "destroyScrollBar",
                value: function() {
                    this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                    window.removeEventListener("mouseup", this.releaseScrollBar),
                    window.removeEventListener("mousemove", this.moveScrollBar),
                    this.scrollbar.remove()
                }
            }, {
                key: "getScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !0,
                    this.checkScroll(),
                    this.html.classList.remove(this.scrollingClass),
                    this.html.classList.add(this.draggingClass)
                }
            }, {
                key: "releaseScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !1,
                    this.html.classList.add(this.scrollingClass),
                    this.html.classList.remove(this.draggingClass)
                }
            }, {
                key: "moveScrollBar",
                value: function(t) {
                    var e = this;
                    this.isDraggingScrollbar && requestAnimationFrame((function() {
                        var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100
                          , r = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                        r > 0 && r < e.instance.limit.y && (e.instance.delta.y = r),
                        i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                    }
                    ))
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {},
                    this.parallaxElements = {},
                    this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                        var r, n, o, s = U(e), a = Object.entries(t.sections).map((function(t) {
                            var e = m(t, 2);
                            e[0];
                            return e[1]
                        }
                        )).find((function(t) {
                            return s.includes(t.el)
                        }
                        )), l = e.dataset[t.name + "Class"] || t.class, h = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i, c = e.dataset[t.name + "Repeat"], u = e.dataset[t.name + "Call"], p = e.dataset[t.name + "Position"], f = e.dataset[t.name + "Delay"], d = e.dataset[t.name + "Direction"], y = "string" == typeof e.dataset[t.name + "Sticky"], g = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10, v = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, b = e.dataset[t.name + "Target"], w = (o = void 0 !== b ? document.querySelector("".concat(b)) : e).getBoundingClientRect();
                        null === a || a.inView ? (r = w.top + t.instance.scroll.y - X(o).y,
                        n = w.left + t.instance.scroll.x - X(o).x) : (r = w.top - X(a.el).y - X(o).y,
                        n = w.left - X(a.el).x - X(o).x);
                        var S = r + o.offsetHeight
                          , x = n + o.offsetWidth
                          , _ = {
                            x: (x - n) / 2 + n,
                            y: (S - r) / 2 + r
                        };
                        if (y) {
                            var E = e.getBoundingClientRect()
                              , k = E.top
                              , P = E.left
                              , A = {
                                x: P - n,
                                y: k - r
                            };
                            r += window.innerHeight,
                            n += window.innerWidth,
                            S = k + o.offsetHeight - e.offsetHeight - A[t.directionAxis],
                            _ = {
                                x: ((x = P + o.offsetWidth - e.offsetWidth - A[t.directionAxis]) - n) / 2 + n,
                                y: (S - r) / 2 + r
                            }
                        }
                        c = "false" != c && (null != c || t.repeat);
                        var T = [0, 0];
                        if (v)
                            if ("horizontal" === t.direction) {
                                for (var C = 0; C < v.length; C++)
                                    "string" == typeof v[C] ? v[C].includes("%") ? T[C] = parseInt(v[C].replace("%", "") * t.windowWidth / 100) : T[C] = parseInt(v[C]) : T[C] = v[C];
                                n += T[0],
                                x -= T[1]
                            } else {
                                for (C = 0; C < v.length; C++)
                                    "string" == typeof v[C] ? v[C].includes("%") ? T[C] = parseInt(v[C].replace("%", "") * t.windowHeight / 100) : T[C] = parseInt(v[C]) : T[C] = v[C];
                                r += T[0],
                                S -= T[1]
                            }
                        var M = {
                            el: e,
                            id: h,
                            class: l,
                            section: a,
                            top: r,
                            middle: _,
                            bottom: S,
                            left: n,
                            right: x,
                            offset: v,
                            progress: 0,
                            repeat: c,
                            inView: !1,
                            call: u,
                            speed: g,
                            delay: f,
                            position: p,
                            target: o,
                            direction: d,
                            sticky: y
                        };
                        t.els[h] = M,
                        e.classList.contains(l) && t.setInView(t.els[h], h),
                        (!1 !== g || y) && (t.parallaxElements[h] = M)
                    }
                    ))
                }
            }, {
                key: "addSections",
                value: function() {
                    var t = this;
                    this.sections = {};
                    var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                    0 === e.length && (e = [this.el]),
                    e.forEach((function(e, i) {
                        var r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i
                          , n = e.getBoundingClientRect()
                          , o = {
                            x: n.left - 1.5 * window.innerWidth - X(e).x,
                            y: n.top - 1.5 * window.innerHeight - X(e).y
                        }
                          , s = {
                            x: o.x + n.width + 2 * window.innerWidth,
                            y: o.y + n.height + 2 * window.innerHeight
                        }
                          , a = "string" == typeof e.dataset[t.name + "Persistent"];
                        e.setAttribute("data-scroll-section-id", r);
                        var l = {
                            el: e,
                            offset: o,
                            limit: s,
                            inView: !1,
                            persistent: a,
                            id: r
                        };
                        t.sections[r] = l
                    }
                    ))
                }
            }, {
                key: "transform",
                value: function(t, e, i, r) {
                    var n;
                    if (r) {
                        var o = X(t)
                          , s = Y(o.x, e, r)
                          , a = Y(o.y, i, r);
                        n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s, ",").concat(a, ",0,1)")
                    } else
                        n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                    t.style.webkitTransform = n,
                    t.style.msTransform = n,
                    t.style.transform = n
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = this.instance.scroll.x + this.windowWidth
                      , n = this.instance.scroll.y + this.windowHeight
                      , o = {
                        x: this.instance.scroll.x + this.windowMiddle.x,
                        y: this.instance.scroll.y + this.windowMiddle.y
                    };
                    Object.entries(this.parallaxElements).forEach((function(s) {
                        var a = m(s, 2)
                          , l = (a[0],
                        a[1])
                          , h = !1;
                        if (t && (h = 0),
                        l.inView || i)
                            switch (l.position) {
                            case "top":
                                h = e.instance.scroll[e.directionAxis] * -l.speed;
                                break;
                            case "elementTop":
                                h = (n - l.top) * -l.speed;
                                break;
                            case "bottom":
                                h = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
                                break;
                            case "left":
                                h = e.instance.scroll[e.directionAxis] * -l.speed;
                                break;
                            case "elementLeft":
                                h = (r - l.left) * -l.speed;
                                break;
                            case "right":
                                h = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
                                break;
                            default:
                                h = (o[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                            }
                        l.sticky && (h = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight),
                        !1 !== h && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, h, 0, !t && l.delay) : e.transform(l.el, 0, h, !t && l.delay))
                    }
                    ))
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = parseInt(i.offset) || 0
                      , n = i.duration || 1e3
                      , o = i.easing || [.25, 0, .35, 1]
                      , s = !!i.disableLerp
                      , a = !!i.callback && i.callback;
                    if (o = it.apply(void 0, y(o)),
                    "string" == typeof t) {
                        if ("top" === t)
                            t = 0;
                        else if ("bottom" === t)
                            t = this.instance.limit.y;
                        else if ("left" === t)
                            t = 0;
                        else if ("right" === t)
                            t = this.instance.limit.x;
                        else if (!(t = document.querySelector(t)))
                            return
                    } else if ("number" == typeof t)
                        t = parseInt(t);
                    else if (!t || !t.tagName)
                        return void console.warn("`target` parameter is not valid");
                    if ("number" != typeof t) {
                        var l = U(t).includes(this.el);
                        if (!l)
                            return;
                        var h = t.getBoundingClientRect()
                          , c = h.top
                          , u = h.left
                          , p = U(t)
                          , f = p.find((function(t) {
                            return Object.entries(e.sections).map((function(t) {
                                var e = m(t, 2);
                                e[0];
                                return e[1]
                            }
                            )).find((function(e) {
                                return e.el == t
                            }
                            ))
                        }
                        ))
                          , d = 0;
                        d = f ? X(f)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                        r = "horizontal" === this.direction ? u + r - d : c + r - d
                    } else
                        r = t + r;
                    var g = parseFloat(this.instance.delta[this.directionAxis])
                      , v = Math.max(0, Math.min(r, this.instance.limit[this.directionAxis]))
                      , b = v - g
                      , w = function(t) {
                        s ? "horizontal" === e.direction ? e.setScroll(g + b * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, g + b * t) : e.instance.delta[e.directionAxis] = g + b * t
                    };
                    this.animatingScroll = !0,
                    this.stopScrolling(),
                    this.startScrolling();
                    var S = Date.now()
                      , x = function t() {
                        var i = (Date.now() - S) / n;
                        i > 1 ? (w(1),
                        e.animatingScroll = !1,
                        0 == n && e.update(),
                        a && a()) : (e.scrollToRaf = requestAnimationFrame(t),
                        w(o(i)))
                    };
                    x()
                }
            }, {
                key: "update",
                value: function() {
                    this.setScrollLimit(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.updateScroll(),
                    this.transformElements(!0),
                    this.reinitScrollBar(),
                    this.checkScroll(!0)
                }
            }, {
                key: "startScroll",
                value: function() {
                    this.stop = !1
                }
            }, {
                key: "stopScroll",
                value: function() {
                    this.stop = !0
                }
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.instance = a(a({}, this.instance), {}, {
                        scroll: {
                            x: t,
                            y: e
                        },
                        delta: {
                            x: t,
                            y: e
                        },
                        speed: 0
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    d(h(r.prototype), "destroy", this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener("keydown", this.checkKey, !1)
                }
            }]),
            r
        }(w)
          , pt = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t),
                this.options = e,
                Object.assign(this, b, e),
                this.smartphone = b.smartphone,
                e.smartphone && Object.assign(this.smartphone, e.smartphone),
                this.tablet = b.tablet,
                e.tablet && Object.assign(this.tablet, e.tablet),
                this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
                this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                this.init()
            }
            return n(t, [{
                key: "init",
                value: function() {
                    if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint,
                    this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                    this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ut(this.options) : this.scroll = new E(this.options),
                    this.scroll.init(),
                    window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length)
                          , e = document.getElementById(t);
                        e && this.scroll.scrollTo(e)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function() {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function(t, e) {
                    this.scroll.scrollTo(t, e)
                }
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.scroll.setScroll(t, e)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    this.scroll.setEvents(t, e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    this.scroll.unsetEvents(t, e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.scroll.destroy()
                }
            }]),
            t
        }();
        e.a = pt
    }
    ).call(this, i(19))
}
, function(t, e, i) {
    t.exports = i(37)
}
, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "undefined" != typeof navigator && function(t, e) {
        void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return e(t)
        }
        .call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window || {}, (function(window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bmRnd, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
        function ProjectInterface() {
            return {}
        }
        !function() {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
            for (t = 0; t < i; t += 1)
                BMMath[e[t]] = Math[e[t]]
        }(),
        BMMath.random = Math.random,
        BMMath.abs = function(t) {
            if ("object" === typeof t && t.length) {
                var e, i = createSizedArray(t.length), r = t.length;
                for (e = 0; e < r; e += 1)
                    i[e] = Math.abs(t[e]);
                return i
            }
            return Math.abs(t)
        }
        ;
        var defaultCurveSegments = 150
          , degToRads = Math.PI / 180
          , roundCorner = .5519;
        function roundValues(t) {
            bmRnd = t ? Math.round : function(t) {
                return t
            }
        }
        function styleDiv(t) {
            t.style.position = "absolute",
            t.style.top = 0,
            t.style.left = 0,
            t.style.display = "block",
            t.style.transformOrigin = "0 0",
            t.style.webkitTransformOrigin = "0 0",
            t.style.backfaceVisibility = "visible",
            t.style.webkitBackfaceVisibility = "visible",
            t.style.transformStyle = "preserve-3d",
            t.style.webkitTransformStyle = "preserve-3d",
            t.style.mozTransformStyle = "preserve-3d"
        }
        function BMEnterFrameEvent(t, e, i, r) {
            this.type = t,
            this.currentTime = e,
            this.totalTime = i,
            this.direction = r < 0 ? -1 : 1
        }
        function BMCompleteEvent(t, e) {
            this.type = t,
            this.direction = e < 0 ? -1 : 1
        }
        function BMCompleteLoopEvent(t, e, i, r) {
            this.type = t,
            this.currentLoop = i,
            this.totalLoops = e,
            this.direction = r < 0 ? -1 : 1
        }
        function BMSegmentStartEvent(t, e, i) {
            this.type = t,
            this.firstFrame = e,
            this.totalFrames = i
        }
        function BMDestroyEvent(t, e) {
            this.type = t,
            this.target = e
        }
        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError",
            this.nativeError = t,
            this.currentTime = e
        }
        function BMConfigErrorEvent(t) {
            this.type = "configError",
            this.nativeError = t
        }
        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t,
            this.nativeError = e
        }
        roundValues(!1);
        var createElementID = (_count = 0,
        function() {
            return "__lottie_element_" + (_count += 1)
        }
        ), _count;
        function HSVtoRGB(t, e, i) {
            var r, n, o, s, a, l, h, c;
            switch (l = i * (1 - e),
            h = i * (1 - (a = 6 * t - (s = Math.floor(6 * t))) * e),
            c = i * (1 - (1 - a) * e),
            s % 6) {
            case 0:
                r = i,
                n = c,
                o = l;
                break;
            case 1:
                r = h,
                n = i,
                o = l;
                break;
            case 2:
                r = l,
                n = i,
                o = c;
                break;
            case 3:
                r = l,
                n = h,
                o = i;
                break;
            case 4:
                r = c,
                n = l,
                o = i;
                break;
            case 5:
                r = i,
                n = l,
                o = h
            }
            return [r, n, o]
        }
        function RGBtoHSV(t, e, i) {
            var r, n = Math.max(t, e, i), o = Math.min(t, e, i), s = n - o, a = 0 === n ? 0 : s / n, l = n / 255;
            switch (n) {
            case o:
                r = 0;
                break;
            case t:
                r = e - i + s * (e < i ? 6 : 0),
                r /= 6 * s;
                break;
            case e:
                r = i - t + 2 * s,
                r /= 6 * s;
                break;
            case i:
                r = t - e + 4 * s,
                r /= 6 * s
            }
            return [r, a, l]
        }
        function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[1] += e,
            i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0),
            HSVtoRGB(i[0], i[1], i[2])
        }
        function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[2] += e,
            i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0),
            HSVtoRGB(i[0], i[1], i[2])
        }
        function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[0] += e / 360,
            i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1),
            HSVtoRGB(i[0], i[1], i[2])
        }
        var rgbToHex = function() {
            var t, e, i = [];
            for (t = 0; t < 256; t += 1)
                e = t.toString(16),
                i[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, r) {
                return t < 0 && (t = 0),
                e < 0 && (e = 0),
                r < 0 && (r = 0),
                "#" + i[t] + i[e] + i[r]
            }
        }();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t])
                    for (var i = this._cbs[t].length, r = 0; r < i; r += 1)
                        this._cbs[t][r](e)
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []),
                this._cbs[t].push(e),
                function() {
                    this.removeEventListener(t, e)
                }
                .bind(this)
            },
            removeEventListener: function(t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var i = 0, r = this._cbs[t].length; i < r; )
                            this._cbs[t][i] === e && (this._cbs[t].splice(i, 1),
                            i -= 1,
                            r -= 1),
                            i += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else
                    this._cbs[t] = null
            }
        };
        var createTypedArray = function() {
            function t(t, e) {
                var i, r = 0, n = [];
                switch (t) {
                case "int16":
                case "uint8c":
                    i = 1;
                    break;
                default:
                    i = 1.1
                }
                for (r = 0; r < e; r += 1)
                    n.push(i);
                return n
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
            }
            : t
        }();
        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }
        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }
        function createTag(t) {
            return document.createElement(t)
        }
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t),
                this.container.addDynamicProperty(this),
                this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue(),
                    this.dynamicProperties[t]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t,
                this.dynamicProperties = [],
                this._mdf = !1,
                this._isAnimated = !1
            }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
        },
        function(t) {
            return blendModeEnums[t] || ""
        }
        ), blendModeEnums, Matrix = function() {
            var t = Math.cos
              , e = Math.sin
              , i = Math.tan
              , r = Math.round;
            function n() {
                return this.props[0] = 1,
                this.props[1] = 0,
                this.props[2] = 0,
                this.props[3] = 0,
                this.props[4] = 0,
                this.props[5] = 1,
                this.props[6] = 0,
                this.props[7] = 0,
                this.props[8] = 0,
                this.props[9] = 0,
                this.props[10] = 1,
                this.props[11] = 0,
                this.props[12] = 0,
                this.props[13] = 0,
                this.props[14] = 0,
                this.props[15] = 1,
                this
            }
            function o(i) {
                if (0 === i)
                    return this;
                var r = t(i)
                  , n = e(i);
                return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function s(i) {
                if (0 === i)
                    return this;
                var r = t(i)
                  , n = e(i);
                return this._t(1, 0, 0, 0, 0, r, -n, 0, 0, n, r, 0, 0, 0, 0, 1)
            }
            function a(i) {
                if (0 === i)
                    return this;
                var r = t(i)
                  , n = e(i);
                return this._t(r, 0, n, 0, 0, 1, 0, 0, -n, 0, r, 0, 0, 0, 0, 1)
            }
            function l(i) {
                if (0 === i)
                    return this;
                var r = t(i)
                  , n = e(i);
                return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function h(t, e) {
                return this._t(1, e, t, 1, 0, 0)
            }
            function c(t, e) {
                return this.shear(i(t), i(e))
            }
            function u(r, n) {
                var o = t(n)
                  , s = e(n);
                return this._t(o, s, 0, 0, -s, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(o, -s, 0, 0, s, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function p(t, e, i) {
                return i || 0 === i || (i = 1),
                1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
            }
            function f(t, e, i, r, n, o, s, a, l, h, c, u, p, f, d, m) {
                return this.props[0] = t,
                this.props[1] = e,
                this.props[2] = i,
                this.props[3] = r,
                this.props[4] = n,
                this.props[5] = o,
                this.props[6] = s,
                this.props[7] = a,
                this.props[8] = l,
                this.props[9] = h,
                this.props[10] = c,
                this.props[11] = u,
                this.props[12] = p,
                this.props[13] = f,
                this.props[14] = d,
                this.props[15] = m,
                this
            }
            function d(t, e, i) {
                return i = i || 0,
                0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
            }
            function m(t, e, i, r, n, o, s, a, l, h, c, u, p, f, d, m) {
                var y = this.props;
                if (1 === t && 0 === e && 0 === i && 0 === r && 0 === n && 1 === o && 0 === s && 0 === a && 0 === l && 0 === h && 1 === c && 0 === u)
                    return y[12] = y[12] * t + y[15] * p,
                    y[13] = y[13] * o + y[15] * f,
                    y[14] = y[14] * c + y[15] * d,
                    y[15] *= m,
                    this._identityCalculated = !1,
                    this;
                var g = y[0]
                  , v = y[1]
                  , b = y[2]
                  , w = y[3]
                  , S = y[4]
                  , x = y[5]
                  , _ = y[6]
                  , E = y[7]
                  , k = y[8]
                  , P = y[9]
                  , A = y[10]
                  , T = y[11]
                  , C = y[12]
                  , M = y[13]
                  , D = y[14]
                  , L = y[15];
                return y[0] = g * t + v * n + b * l + w * p,
                y[1] = g * e + v * o + b * h + w * f,
                y[2] = g * i + v * s + b * c + w * d,
                y[3] = g * r + v * a + b * u + w * m,
                y[4] = S * t + x * n + _ * l + E * p,
                y[5] = S * e + x * o + _ * h + E * f,
                y[6] = S * i + x * s + _ * c + E * d,
                y[7] = S * r + x * a + _ * u + E * m,
                y[8] = k * t + P * n + A * l + T * p,
                y[9] = k * e + P * o + A * h + T * f,
                y[10] = k * i + P * s + A * c + T * d,
                y[11] = k * r + P * a + A * u + T * m,
                y[12] = C * t + M * n + D * l + L * p,
                y[13] = C * e + M * o + D * h + L * f,
                y[14] = C * i + M * s + D * c + L * d,
                y[15] = C * r + M * a + D * u + L * m,
                this._identityCalculated = !1,
                this
            }
            function y() {
                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]),
                this._identityCalculated = !0),
                this._identity
            }
            function g(t) {
                for (var e = 0; e < 16; ) {
                    if (t.props[e] !== this.props[e])
                        return !1;
                    e += 1
                }
                return !0
            }
            function v(t) {
                var e;
                for (e = 0; e < 16; e += 1)
                    t.props[e] = this.props[e];
                return t
            }
            function b(t) {
                var e;
                for (e = 0; e < 16; e += 1)
                    this.props[e] = t[e]
            }
            function w(t, e, i) {
                return {
                    x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                    y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                    z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                }
            }
            function S(t, e, i) {
                return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
            }
            function x(t, e, i) {
                return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
            }
            function _(t, e, i) {
                return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
            }
            function E() {
                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                  , e = this.props[5] / t
                  , i = -this.props[1] / t
                  , r = -this.props[4] / t
                  , n = this.props[0] / t
                  , o = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t
                  , s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t
                  , a = new Matrix;
                return a.props[0] = e,
                a.props[1] = i,
                a.props[4] = r,
                a.props[5] = n,
                a.props[12] = o,
                a.props[13] = s,
                a
            }
            function k(t) {
                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }
            function P(t) {
                var e, i = t.length, r = [];
                for (e = 0; e < i; e += 1)
                    r[e] = k(t[e]);
                return r
            }
            function A(t, e, i) {
                var r = createTypedArray("float32", 6);
                if (this.isIdentity())
                    r[0] = t[0],
                    r[1] = t[1],
                    r[2] = e[0],
                    r[3] = e[1],
                    r[4] = i[0],
                    r[5] = i[1];
                else {
                    var n = this.props[0]
                      , o = this.props[1]
                      , s = this.props[4]
                      , a = this.props[5]
                      , l = this.props[12]
                      , h = this.props[13];
                    r[0] = t[0] * n + t[1] * s + l,
                    r[1] = t[0] * o + t[1] * a + h,
                    r[2] = e[0] * n + e[1] * s + l,
                    r[3] = e[0] * o + e[1] * a + h,
                    r[4] = i[0] * n + i[1] * s + l,
                    r[5] = i[0] * o + i[1] * a + h
                }
                return r
            }
            function T(t, e, i) {
                return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
            }
            function C(t, e) {
                if (this.isIdentity())
                    return t + "," + e;
                var i = this.props;
                return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
            }
            function M() {
                for (var t = 0, e = this.props, i = "matrix3d("; t < 16; )
                    i += r(1e4 * e[t]) / 1e4,
                    i += 15 === t ? ")" : ",",
                    t += 1;
                return i
            }
            function D(t) {
                return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
            }
            function L() {
                var t = this.props;
                return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
            }
            return function() {
                this.reset = n,
                this.rotate = o,
                this.rotateX = s,
                this.rotateY = a,
                this.rotateZ = l,
                this.skew = c,
                this.skewFromAxis = u,
                this.shear = h,
                this.scale = p,
                this.setTransform = f,
                this.translate = d,
                this.transform = m,
                this.applyToPoint = w,
                this.applyToX = S,
                this.applyToY = x,
                this.applyToZ = _,
                this.applyToPointArray = T,
                this.applyToTriplePoints = A,
                this.applyToPointStringified = C,
                this.toCSS = M,
                this.to2dCSS = L,
                this.clone = v,
                this.cloneFromProps = b,
                this.equals = g,
                this.inversePoints = P,
                this.inversePoint = k,
                this.getInverseMatrix = E,
                this._t = this.transform,
                this.isIdentity = y,
                this._identity = !0,
                this._identityCalculated = !1,
                this.props = createTypedArray("float32", 16),
                this.reset()
            }
        }();
        !function(t, e) {
            var i = this
              , r = e.pow(256, 6)
              , n = e.pow(2, 52)
              , o = 2 * n;
            function s(t) {
                var e, i = t.length, r = this, n = 0, o = r.i = r.j = 0, s = r.S = [];
                for (i || (t = [i++]); n < 256; )
                    s[n] = n++;
                for (n = 0; n < 256; n++)
                    s[n] = s[o = 255 & o + t[n % i] + (e = s[n])],
                    s[o] = e;
                r.g = function(t) {
                    for (var e, i = 0, n = r.i, o = r.j, s = r.S; t--; )
                        e = s[n = 255 & n + 1],
                        i = 256 * i + s[255 & (s[n] = s[o = 255 & o + e]) + (s[o] = e)];
                    return r.i = n,
                    r.j = o,
                    i
                }
            }
            function a(t, e) {
                return e.i = t.i,
                e.j = t.j,
                e.S = t.S.slice(),
                e
            }
            function l(t, e) {
                for (var i, r = t + "", n = 0; n < r.length; )
                    e[255 & n] = 255 & (i ^= 19 * e[255 & n]) + r.charCodeAt(n++);
                return h(e)
            }
            function h(t) {
                return String.fromCharCode.apply(0, t)
            }
            e.seedrandom = function(c, u, p) {
                var f = []
                  , d = l(function t(e, i) {
                    var r, n = [], o = typeof e;
                    if (i && "object" == o)
                        for (r in e)
                            try {
                                n.push(t(e[r], i - 1))
                            } catch (t) {}
                    return n.length ? n : "string" == o ? e : e + "\0"
                }((u = !0 === u ? {
                    entropy: !0
                } : u || {}).entropy ? [c, h(t)] : null === c ? function() {
                    try {
                        void 0;
                        var e = new Uint8Array(256);
                        return (i.crypto || i.msCrypto).getRandomValues(e),
                        h(e)
                    } catch (e) {
                        var r = i.navigator
                          , n = r && r.plugins;
                        return [+new Date, i, n, i.screen, h(t)]
                    }
                }() : c, 3), f)
                  , m = new s(f)
                  , y = function() {
                    for (var t = m.g(6), e = r, i = 0; t < n; )
                        t = 256 * (t + i),
                        e *= 256,
                        i = m.g(1);
                    for (; t >= o; )
                        t /= 2,
                        e /= 2,
                        i >>>= 1;
                    return (t + i) / e
                };
                return y.int32 = function() {
                    return 0 | m.g(4)
                }
                ,
                y.quick = function() {
                    return m.g(4) / 4294967296
                }
                ,
                y.double = y,
                l(h(m.S), t),
                (u.pass || p || function(t, i, r, n) {
                    return n && (n.S && a(n, m),
                    t.state = function() {
                        return a(m, {})
                    }
                    ),
                    r ? (e.random = t,
                    i) : t
                }
                )(y, d, "global"in u ? u.global : this == e, u.state)
            }
            ,
            l(e.random(), t)
        }([], BMMath);
        var BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, i, r, n, o) {
                    var s = o || ("bez_" + t + "_" + i + "_" + r + "_" + n).replace(/\./g, "p");
                    if (e[s])
                        return e[s];
                    var a = new l([t, i, r, n]);
                    return e[s] = a,
                    a
                }
            }
              , e = {};
            var i = "function" == typeof Float32Array;
            function r(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function n(t, e) {
                return 3 * e - 6 * t
            }
            function o(t) {
                return 3 * t
            }
            function s(t, e, i) {
                return ((r(e, i) * t + n(e, i)) * t + o(e)) * t
            }
            function a(t, e, i) {
                return 3 * r(e, i) * t * t + 2 * n(e, i) * t + o(e)
            }
            function l(t) {
                this._p = t,
                this._mSampleValues = i ? new Float32Array(11) : new Array(11),
                this._precomputed = !1,
                this.get = this.get.bind(this)
            }
            return l.prototype = {
                get: function(t) {
                    var e = this._p[0]
                      , i = this._p[1]
                      , r = this._p[2]
                      , n = this._p[3];
                    return this._precomputed || this._precompute(),
                    e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : s(this._getTForX(t), i, n)
                },
                _precompute: function() {
                    var t = this._p[0]
                      , e = this._p[1]
                      , i = this._p[2]
                      , r = this._p[3];
                    this._precomputed = !0,
                    t === e && i === r || this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i)
                        this._mSampleValues[i] = s(.1 * i, t, e)
                },
                _getTForX: function(t) {
                    for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, n = 0, o = 1; 10 !== o && r[o] <= t; ++o)
                        n += .1;
                    var l = n + .1 * ((t - r[--o]) / (r[o + 1] - r[o]))
                      , h = a(l, e, i);
                    return h >= .001 ? function(t, e, i, r) {
                        for (var n = 0; n < 4; ++n) {
                            var o = a(e, i, r);
                            if (0 === o)
                                return e;
                            e -= (s(e, i, r) - t) / o
                        }
                        return e
                    }(t, l, e, i) : 0 === h ? l : function(t, e, i, r, n) {
                        var o, a, l = 0;
                        do {
                            (o = s(a = e + (i - e) / 2, r, n) - t) > 0 ? i = a : e = a
                        } while (Math.abs(o) > 1e-7 && ++l < 10);
                        return a
                    }(t, n, n + .1, e, i)
                }
            },
            t
        }();
        function extendPrototype(t, e) {
            var i, r, n = t.length;
            for (i = 0; i < n; i += 1)
                for (var o in r = t[i].prototype)
                    Object.prototype.hasOwnProperty.call(r, o) && (e.prototype[o] = r[o])
        }
        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }
        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t,
            e
        }
        function bezFunction() {
            var t = Math;
            function e(t, e, i, r, n, o) {
                var s = t * r + e * n + i * o - n * r - o * t - i * e;
                return s > -.001 && s < .001
            }
            var i = function(t, e, i, r) {
                var n, o, s, a, l, h, c = defaultCurveSegments, u = 0, p = [], f = [], d = bezierLengthPool.newElement();
                for (s = i.length,
                n = 0; n < c; n += 1) {
                    for (l = n / (c - 1),
                    h = 0,
                    o = 0; o < s; o += 1)
                        a = bmPow(1 - l, 3) * t[o] + 3 * bmPow(1 - l, 2) * l * i[o] + 3 * (1 - l) * bmPow(l, 2) * r[o] + bmPow(l, 3) * e[o],
                        p[o] = a,
                        null !== f[o] && (h += bmPow(p[o] - f[o], 2)),
                        f[o] = p[o];
                    h && (u += h = bmSqrt(h)),
                    d.percents[n] = l,
                    d.lengths[n] = u
                }
                return d.addedLength = u,
                d
            };
            function r(t) {
                this.segmentLength = 0,
                this.points = new Array(t)
            }
            function n(t, e) {
                this.partialLength = t,
                this.point = e
            }
            var o, s = (o = {},
            function(t, i, s, a) {
                var l = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1]).replace(/\./g, "p");
                if (!o[l]) {
                    var h, c, u, p, f, d, m, y = defaultCurveSegments, g = 0, v = null;
                    2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], i[0], i[1], i[0] + a[0], i[1] + a[1]) && (y = 2);
                    var b = new r(y);
                    for (u = s.length,
                    h = 0; h < y; h += 1) {
                        for (m = createSizedArray(u),
                        f = h / (y - 1),
                        d = 0,
                        c = 0; c < u; c += 1)
                            p = bmPow(1 - f, 3) * t[c] + 3 * bmPow(1 - f, 2) * f * (t[c] + s[c]) + 3 * (1 - f) * bmPow(f, 2) * (i[c] + a[c]) + bmPow(f, 3) * i[c],
                            m[c] = p,
                            null !== v && (d += bmPow(m[c] - v[c], 2));
                        g += d = bmSqrt(d),
                        b.points[h] = new n(d,m),
                        v = m
                    }
                    b.segmentLength = g,
                    o[l] = b
                }
                return o[l]
            }
            );
            function a(t, e) {
                var i = e.percents
                  , r = e.lengths
                  , n = i.length
                  , o = bmFloor((n - 1) * t)
                  , s = t * e.addedLength
                  , a = 0;
                if (o === n - 1 || 0 === o || s === r[o])
                    return i[o];
                for (var l = r[o] > s ? -1 : 1, h = !0; h; )
                    if (r[o] <= s && r[o + 1] > s ? (a = (s - r[o]) / (r[o + 1] - r[o]),
                    h = !1) : o += l,
                    o < 0 || o >= n - 1) {
                        if (o === n - 1)
                            return i[o];
                        h = !1
                    }
                return i[o] + (i[o + 1] - i[o]) * a
            }
            var l = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var e, r = segmentsLengthPool.newElement(), n = t.c, o = t.v, s = t.o, a = t.i, l = t._length, h = r.lengths, c = 0;
                    for (e = 0; e < l - 1; e += 1)
                        h[e] = i(o[e], o[e + 1], s[e], a[e + 1]),
                        c += h[e].addedLength;
                    return n && l && (h[e] = i(o[e], o[0], s[e], a[0]),
                    c += h[e].addedLength),
                    r.totalLength = c,
                    r
                },
                getNewSegment: function(e, i, r, n, o, s, h) {
                    o < 0 ? o = 0 : o > 1 && (o = 1);
                    var c, u = a(o, h), p = a(s = s > 1 ? 1 : s, h), f = e.length, d = 1 - u, m = 1 - p, y = d * d * d, g = u * d * d * 3, v = u * u * d * 3, b = u * u * u, w = d * d * m, S = u * d * m + d * u * m + d * d * p, x = u * u * m + d * u * p + u * d * p, _ = u * u * p, E = d * m * m, k = u * m * m + d * p * m + d * m * p, P = u * p * m + d * p * p + u * m * p, A = u * p * p, T = m * m * m, C = p * m * m + m * p * m + m * m * p, M = p * p * m + m * p * p + p * m * p, D = p * p * p;
                    for (c = 0; c < f; c += 1)
                        l[4 * c] = t.round(1e3 * (y * e[c] + g * r[c] + v * n[c] + b * i[c])) / 1e3,
                        l[4 * c + 1] = t.round(1e3 * (w * e[c] + S * r[c] + x * n[c] + _ * i[c])) / 1e3,
                        l[4 * c + 2] = t.round(1e3 * (E * e[c] + k * r[c] + P * n[c] + A * i[c])) / 1e3,
                        l[4 * c + 3] = t.round(1e3 * (T * e[c] + C * r[c] + M * n[c] + D * i[c])) / 1e3;
                    return l
                },
                getPointInSegment: function(e, i, r, n, o, s) {
                    var l = a(o, s)
                      , h = 1 - l;
                    return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * r[0] + (l * l * h + h * l * l + l * h * l) * n[0] + l * l * l * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * r[1] + (l * l * h + h * l * l + l * h * l) * n[1] + l * l * l * i[1])) / 1e3]
                },
                buildBezierData: s,
                pointOnLine2D: e,
                pointOnLine3D: function(i, r, n, o, s, a, l, h, c) {
                    if (0 === n && 0 === a && 0 === c)
                        return e(i, r, o, s, l, h);
                    var u, p = t.sqrt(t.pow(o - i, 2) + t.pow(s - r, 2) + t.pow(a - n, 2)), f = t.sqrt(t.pow(l - i, 2) + t.pow(h - r, 2) + t.pow(c - n, 2)), d = t.sqrt(t.pow(l - o, 2) + t.pow(h - s, 2) + t.pow(c - a, 2));
                    return (u = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && u < 1e-4
                }
            }
        }
        !function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
                window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                var i = (new Date).getTime()
                  , r = Math.max(0, 16 - (i - t))
                  , n = setTimeout((function() {
                    e(i + r)
                }
                ), r);
                return t = i + r,
                n
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
            )
        }();
        var bez = bezFunction();
        function dataFunctionManager() {
            function t(n, o, s) {
                var a, l, h, u, p, f, d = n.length;
                for (l = 0; l < d; l += 1)
                    if ("ks"in (a = n[l]) && !a.completed) {
                        if (a.completed = !0,
                        a.tt && (n[l - 1].td = a.tt),
                        a.hasMask) {
                            var m = a.masksProperties;
                            for (u = m.length,
                            h = 0; h < u; h += 1)
                                if (m[h].pt.k.i)
                                    r(m[h].pt.k);
                                else
                                    for (f = m[h].pt.k.length,
                                    p = 0; p < f; p += 1)
                                        m[h].pt.k[p].s && r(m[h].pt.k[p].s[0]),
                                        m[h].pt.k[p].e && r(m[h].pt.k[p].e[0])
                        }
                        0 === a.ty ? (a.layers = e(a.refId, o),
                        t(a.layers, o, s)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && c(a)
                    }
            }
            function e(t, e) {
                for (var i = 0, r = e.length; i < r; ) {
                    if (e[i].id === t)
                        return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0,
                        e[i].layers);
                    i += 1
                }
                return null
            }
            function i(t) {
                var e, n, o;
                for (e = t.length - 1; e >= 0; e -= 1)
                    if ("sh" === t[e].ty)
                        if (t[e].ks.k.i)
                            r(t[e].ks.k);
                        else
                            for (o = t[e].ks.k.length,
                            n = 0; n < o; n += 1)
                                t[e].ks.k[n].s && r(t[e].ks.k[n].s[0]),
                                t[e].ks.k[n].e && r(t[e].ks.k[n].e[0]);
                    else
                        "gr" === t[e].ty && i(t[e].it)
            }
            function r(t) {
                var e, i = t.i.length;
                for (e = 0; e < i; e += 1)
                    t.i[e][0] += t.v[e][0],
                    t.i[e][1] += t.v[e][1],
                    t.o[e][0] += t.v[e][0],
                    t.o[e][1] += t.v[e][1]
            }
            function n(t, e) {
                var i = e ? e.split(".") : [100, 100, 100];
                return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
            }
            var o, s = function() {
                var t = [4, 4, 14];
                function e(t) {
                    var e, i, r, n = t.length;
                    for (e = 0; e < n; e += 1)
                        5 === t[e].ty && (i = t[e],
                        r = void 0,
                        r = i.t.d,
                        i.t.d = {
                            k: [{
                                s: r,
                                t: 0
                            }]
                        })
                }
                return function(i) {
                    if (n(t, i.v) && (e(i.layers),
                    i.assets)) {
                        var r, o = i.assets.length;
                        for (r = 0; r < o; r += 1)
                            i.assets[r].layers && e(i.assets[r].layers)
                    }
                }
            }(), a = (o = [4, 7, 99],
            function(t) {
                if (t.chars && !n(o, t.v)) {
                    var e, i, s, a, l, h = t.chars.length;
                    for (e = 0; e < h; e += 1)
                        if (t.chars[e].data && t.chars[e].data.shapes)
                            for (s = (l = t.chars[e].data.shapes[0].it).length,
                            i = 0; i < s; i += 1)
                                (a = l[i].ks.k).__converted || (r(l[i].ks.k),
                                a.__converted = !0)
                }
            }
            ), l = function() {
                var t = [4, 1, 9];
                function e(t) {
                    var i, r, n, o = t.length;
                    for (i = 0; i < o; i += 1)
                        if ("gr" === t[i].ty)
                            e(t[i].it);
                        else if ("fl" === t[i].ty || "st" === t[i].ty)
                            if (t[i].c.k && t[i].c.k[0].i)
                                for (n = t[i].c.k.length,
                                r = 0; r < n; r += 1)
                                    t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255,
                                    t[i].c.k[r].s[1] /= 255,
                                    t[i].c.k[r].s[2] /= 255,
                                    t[i].c.k[r].s[3] /= 255),
                                    t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255,
                                    t[i].c.k[r].e[1] /= 255,
                                    t[i].c.k[r].e[2] /= 255,
                                    t[i].c.k[r].e[3] /= 255);
                            else
                                t[i].c.k[0] /= 255,
                                t[i].c.k[1] /= 255,
                                t[i].c.k[2] /= 255,
                                t[i].c.k[3] /= 255
                }
                function i(t) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1)
                        4 === t[i].ty && e(t[i].shapes)
                }
                return function(e) {
                    if (n(t, e.v) && (i(e.layers),
                    e.assets)) {
                        var r, o = e.assets.length;
                        for (r = 0; r < o; r += 1)
                            e.assets[r].layers && i(e.assets[r].layers)
                    }
                }
            }(), h = function() {
                var t = [4, 4, 18];
                function e(t) {
                    var i, r, n;
                    for (i = t.length - 1; i >= 0; i -= 1)
                        if ("sh" === t[i].ty)
                            if (t[i].ks.k.i)
                                t[i].ks.k.c = t[i].closed;
                            else
                                for (n = t[i].ks.k.length,
                                r = 0; r < n; r += 1)
                                    t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed),
                                    t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                        else
                            "gr" === t[i].ty && e(t[i].it)
                }
                function i(t) {
                    var i, r, n, o, s, a, l = t.length;
                    for (r = 0; r < l; r += 1) {
                        if ((i = t[r]).hasMask) {
                            var h = i.masksProperties;
                            for (o = h.length,
                            n = 0; n < o; n += 1)
                                if (h[n].pt.k.i)
                                    h[n].pt.k.c = h[n].cl;
                                else
                                    for (a = h[n].pt.k.length,
                                    s = 0; s < a; s += 1)
                                        h[n].pt.k[s].s && (h[n].pt.k[s].s[0].c = h[n].cl),
                                        h[n].pt.k[s].e && (h[n].pt.k[s].e[0].c = h[n].cl)
                        }
                        4 === i.ty && e(i.shapes)
                    }
                }
                return function(e) {
                    if (n(t, e.v) && (i(e.layers),
                    e.assets)) {
                        var r, o = e.assets.length;
                        for (r = 0; r < o; r += 1)
                            e.assets[r].layers && i(e.assets[r].layers)
                    }
                }
            }();
            function c(t) {
                0 !== t.t.a.length || "m"in t.t.p || (t.singleShape = !0)
            }
            var u = {
                completeData: function(e, i) {
                    e.__complete || (l(e),
                    s(e),
                    a(e),
                    h(e),
                    t(e.layers, e.assets, i),
                    e.__complete = !0)
                }
            };
            return u.checkColors = l,
            u.checkChars = a,
            u.checkShapes = h,
            u.completeLayers = t,
            u
        }
        var dataManager = dataFunctionManager();
        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", n = e.length, o = 0; o < n; o += 1)
                switch (e[o].toLowerCase()) {
                case "italic":
                    r = "italic";
                    break;
                case "bold":
                    i = "700";
                    break;
                case "black":
                    i = "900";
                    break;
                case "medium":
                    i = "500";
                    break;
                case "regular":
                case "normal":
                    i = "400";
                    break;
                case "light":
                case "thin":
                    i = "200"
                }
            return {
                style: r,
                weight: t.fWeight || i
            }
        }
        var FontManager = function() {
            var t = {
                w: 0,
                size: 0,
                shapes: []
            }
              , e = [];
            function i(t, e) {
                var i = createTag("span");
                i.style.fontFamily = e;
                var r = createTag("span");
                r.innerText = "giItT1WQy@!-/#",
                i.style.position = "absolute",
                i.style.left = "-10000px",
                i.style.top = "-10000px",
                i.style.fontSize = "300px",
                i.style.fontVariant = "normal",
                i.style.fontStyle = "normal",
                i.style.fontWeight = "normal",
                i.style.letterSpacing = "0",
                i.appendChild(r),
                document.body.appendChild(i);
                var n = r.offsetWidth;
                return r.style.fontFamily = function(t) {
                    var e, i = t.split(","), r = i.length, n = [];
                    for (e = 0; e < r; e += 1)
                        "sans-serif" !== i[e] && "monospace" !== i[e] && n.push(i[e]);
                    return n.join(",")
                }(t) + ", " + e,
                {
                    node: r,
                    w: n,
                    parent: i
                }
            }
            function r(t, e) {
                var i = createNS("text");
                i.style.fontSize = "100px";
                var r = getFontProperties(e);
                return i.setAttribute("font-family", e.fFamily),
                i.setAttribute("font-style", r.style),
                i.setAttribute("font-weight", r.weight),
                i.textContent = "1",
                e.fClass ? (i.style.fontFamily = "inherit",
                i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily,
                t.appendChild(i),
                createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily,
                i
            }
            e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var n = function() {
                this.fonts = [],
                this.chars = null,
                this.typekitLoaded = 0,
                this.isLoaded = !1,
                this._warned = !1,
                this.initTime = Date.now(),
                this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            return n.getCombinedCharacterCodes = function() {
                return e
            }
            ,
            n.prototype = {
                addChars: function(t) {
                    if (t) {
                        var e;
                        this.chars || (this.chars = []);
                        var i, r, n = t.length, o = this.chars.length;
                        for (e = 0; e < n; e += 1) {
                            for (i = 0,
                            r = !1; i < o; )
                                this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0),
                                i += 1;
                            r || (this.chars.push(t[e]),
                            o += 1)
                        }
                    }
                },
                addFonts: function(t, e) {
                    if (t) {
                        if (this.chars)
                            return this.isLoaded = !0,
                            void (this.fonts = t.list);
                        var n, o = t.list, s = o.length, a = s;
                        for (n = 0; n < s; n += 1) {
                            var l, h, c = !0;
                            if (o[n].loaded = !1,
                            o[n].monoCase = i(o[n].fFamily, "monospace"),
                            o[n].sansCase = i(o[n].fFamily, "sans-serif"),
                            o[n].fPath) {
                                if ("p" === o[n].fOrigin || 3 === o[n].origin) {
                                    if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + o[n].fFamily + '"], style[f-origin="3"][f-family="' + o[n].fFamily + '"]')).length > 0 && (c = !1),
                                    c) {
                                        var u = createTag("style");
                                        u.setAttribute("f-forigin", o[n].fOrigin),
                                        u.setAttribute("f-origin", o[n].origin),
                                        u.setAttribute("f-family", o[n].fFamily),
                                        u.type = "text/css",
                                        u.innerText = "@font-face {font-family: " + o[n].fFamily + "; font-style: normal; src: url('" + o[n].fPath + "');}",
                                        e.appendChild(u)
                                    }
                                } else if ("g" === o[n].fOrigin || 1 === o[n].origin) {
                                    for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                                    h = 0; h < l.length; h += 1)
                                        -1 !== l[h].href.indexOf(o[n].fPath) && (c = !1);
                                    if (c) {
                                        var p = createTag("link");
                                        p.setAttribute("f-forigin", o[n].fOrigin),
                                        p.setAttribute("f-origin", o[n].origin),
                                        p.type = "text/css",
                                        p.rel = "stylesheet",
                                        p.href = o[n].fPath,
                                        document.body.appendChild(p)
                                    }
                                } else if ("t" === o[n].fOrigin || 2 === o[n].origin) {
                                    for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                                    h = 0; h < l.length; h += 1)
                                        o[n].fPath === l[h].src && (c = !1);
                                    if (c) {
                                        var f = createTag("link");
                                        f.setAttribute("f-forigin", o[n].fOrigin),
                                        f.setAttribute("f-origin", o[n].origin),
                                        f.setAttribute("rel", "stylesheet"),
                                        f.setAttribute("href", o[n].fPath),
                                        e.appendChild(f)
                                    }
                                }
                            } else
                                o[n].loaded = !0,
                                a -= 1;
                            o[n].helper = r(e, o[n]),
                            o[n].cache = {},
                            this.fonts.push(o[n])
                        }
                        0 === a ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else
                        this.isLoaded = !0
                },
                getCharData: function(e, i, r) {
                    for (var n = 0, o = this.chars.length; n < o; ) {
                        if (this.chars[n].ch === e && this.chars[n].style === i && this.chars[n].fFamily === r)
                            return this.chars[n];
                        n += 1
                    }
                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0,
                    console.warn("Missing character from exported characters list: ", e, i, r)),
                    t
                },
                getFontByName: function(t) {
                    for (var e = 0, i = this.fonts.length; e < i; ) {
                        if (this.fonts[e].fName === t)
                            return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                },
                measureText: function(t, e, i) {
                    var r = this.getFontByName(e)
                      , n = t.charCodeAt(0);
                    if (!r.cache[n + 1]) {
                        var o = r.helper;
                        if (" " === t) {
                            o.textContent = "|" + t + "|";
                            var s = o.getComputedTextLength();
                            o.textContent = "||";
                            var a = o.getComputedTextLength();
                            r.cache[n + 1] = (s - a) / 100
                        } else
                            o.textContent = t,
                            r.cache[n + 1] = o.getComputedTextLength() / 100
                    }
                    return r.cache[n + 1] * i
                },
                checkLoadedFonts: function() {
                    var t, e, i, r = this.fonts.length, n = r;
                    for (t = 0; t < r; t += 1)
                        this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node,
                        i = this.fonts[t].monoCase.w,
                        e.offsetWidth !== i ? (n -= 1,
                        this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node,
                        i = this.fonts[t].sansCase.w,
                        e.offsetWidth !== i && (n -= 1,
                        this.fonts[t].loaded = !0)),
                        this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),
                        this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                    0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                },
                setIsLoaded: function() {
                    this.isLoaded = !0
                }
            },
            n
        }()
          , PropertyFactory = function() {
            var t = initialDefaultFrame
              , e = Math.abs;
            function i(t, e) {
                var i, n = this.offsetTime;
                "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                for (var o, s, a, l, h, c, u, p, f = e.lastIndex, d = f, m = this.keyframes.length - 1, y = !0; y; ) {
                    if (o = this.keyframes[d],
                    s = this.keyframes[d + 1],
                    d === m - 1 && t >= s.t - n) {
                        o.h && (o = s),
                        f = 0;
                        break
                    }
                    if (s.t - n > t) {
                        f = d;
                        break
                    }
                    d < m - 1 ? d += 1 : (f = 0,
                    y = !1)
                }
                var g, v = s.t - n, b = o.t - n;
                if (o.to) {
                    o.bezierData || (o.bezierData = bez.buildBezierData(o.s, s.s || o.e, o.to, o.ti));
                    var w = o.bezierData;
                    if (t >= v || t < b) {
                        var S = t >= v ? w.points.length - 1 : 0;
                        for (l = w.points[S].point.length,
                        a = 0; a < l; a += 1)
                            i[a] = w.points[S].point[a]
                    } else {
                        o.__fnct ? p = o.__fnct : (p = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get,
                        o.__fnct = p),
                        h = p((t - b) / (v - b));
                        var x, _ = w.segmentLength * h, E = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                        for (u = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0,
                        y = !0,
                        c = w.points.length; y; ) {
                            if (E += w.points[u].partialLength,
                            0 === _ || 0 === h || u === w.points.length - 1) {
                                for (l = w.points[u].point.length,
                                a = 0; a < l; a += 1)
                                    i[a] = w.points[u].point[a];
                                break
                            }
                            if (_ >= E && _ < E + w.points[u + 1].partialLength) {
                                for (x = (_ - E) / w.points[u + 1].partialLength,
                                l = w.points[u].point.length,
                                a = 0; a < l; a += 1)
                                    i[a] = w.points[u].point[a] + (w.points[u + 1].point[a] - w.points[u].point[a]) * x;
                                break
                            }
                            u < c - 1 ? u += 1 : y = !1
                        }
                        e._lastPoint = u,
                        e._lastAddedLength = E - w.points[u].partialLength,
                        e._lastKeyframeIndex = d
                    }
                } else {
                    var k, P, A, T, C;
                    if (m = o.s.length,
                    g = s.s || o.e,
                    this.sh && 1 !== o.h)
                        if (t >= v)
                            i[0] = g[0],
                            i[1] = g[1],
                            i[2] = g[2];
                        else if (t <= b)
                            i[0] = o.s[0],
                            i[1] = o.s[1],
                            i[2] = o.s[2];
                        else {
                            !function(t, e) {
                                var i = e[0]
                                  , r = e[1]
                                  , n = e[2]
                                  , o = e[3]
                                  , s = Math.atan2(2 * r * o - 2 * i * n, 1 - 2 * r * r - 2 * n * n)
                                  , a = Math.asin(2 * i * r + 2 * n * o)
                                  , l = Math.atan2(2 * i * o - 2 * r * n, 1 - 2 * i * i - 2 * n * n);
                                t[0] = s / degToRads,
                                t[1] = a / degToRads,
                                t[2] = l / degToRads
                            }(i, function(t, e, i) {
                                var r, n, o, s, a, l = [], h = t[0], c = t[1], u = t[2], p = t[3], f = e[0], d = e[1], m = e[2], y = e[3];
                                (n = h * f + c * d + u * m + p * y) < 0 && (n = -n,
                                f = -f,
                                d = -d,
                                m = -m,
                                y = -y);
                                1 - n > 1e-6 ? (r = Math.acos(n),
                                o = Math.sin(r),
                                s = Math.sin((1 - i) * r) / o,
                                a = Math.sin(i * r) / o) : (s = 1 - i,
                                a = i);
                                return l[0] = s * h + a * f,
                                l[1] = s * c + a * d,
                                l[2] = s * u + a * m,
                                l[3] = s * p + a * y,
                                l
                            }(r(o.s), r(g), (t - b) / (v - b)))
                        }
                    else
                        for (d = 0; d < m; d += 1)
                            1 !== o.h && (t >= v ? h = 1 : t < b ? h = 0 : (o.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []),
                            o.__fnct[d] ? p = o.__fnct[d] : (k = void 0 === o.o.x[d] ? o.o.x[0] : o.o.x[d],
                            P = void 0 === o.o.y[d] ? o.o.y[0] : o.o.y[d],
                            A = void 0 === o.i.x[d] ? o.i.x[0] : o.i.x[d],
                            T = void 0 === o.i.y[d] ? o.i.y[0] : o.i.y[d],
                            p = BezierFactory.getBezierEasing(k, P, A, T).get,
                            o.__fnct[d] = p)) : o.__fnct ? p = o.__fnct : (k = o.o.x,
                            P = o.o.y,
                            A = o.i.x,
                            T = o.i.y,
                            p = BezierFactory.getBezierEasing(k, P, A, T).get,
                            o.__fnct = p),
                            h = p((t - b) / (v - b)))),
                            g = s.s || o.e,
                            C = 1 === o.h ? o.s[d] : o.s[d] + (g[d] - o.s[d]) * h,
                            "multidimensional" === this.propType ? i[d] = C : i = C
                }
                return e.lastIndex = f,
                i
            }
            function r(t) {
                var e = t[0] * degToRads
                  , i = t[1] * degToRads
                  , r = t[2] * degToRads
                  , n = Math.cos(e / 2)
                  , o = Math.cos(i / 2)
                  , s = Math.cos(r / 2)
                  , a = Math.sin(e / 2)
                  , l = Math.sin(i / 2)
                  , h = Math.sin(r / 2);
                return [a * l * s + n * o * h, a * o * s + n * l * h, n * l * s - a * o * h, n * o * s - a * l * h]
            }
            function n() {
                var e = this.comp.renderedFrame - this.offsetTime
                  , i = this.keyframes[0].t - this.offsetTime
                  , r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < i && e < i))) {
                    this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1,
                    this._caching.lastIndex = 0);
                    var n = this.interpolateValue(e, this._caching);
                    this.pv = n
                }
                return this._caching.lastFrame = e,
                this.pv
            }
            function o(t) {
                var i;
                if ("unidimensional" === this.propType)
                    i = t * this.mult,
                    e(this.v - i) > 1e-5 && (this.v = i,
                    this._mdf = !0);
                else
                    for (var r = 0, n = this.v.length; r < n; )
                        i = t[r] * this.mult,
                        e(this.v[r] - i) > 1e-5 && (this.v[r] = i,
                        this._mdf = !0),
                        r += 1
            }
            function s() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock)
                        this.setVValue(this.pv);
                    else {
                        var t;
                        this.lock = !0,
                        this._mdf = this._isFirstFrame;
                        var e = this.effectsSequence.length
                          , i = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1)
                            i = this.effectsSequence[t](i);
                        this.setVValue(i),
                        this._isFirstFrame = !1,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
            }
            function a(t) {
                this.effectsSequence.push(t),
                this.container.addDynamicProperty(this)
            }
            function l(t, e, i, r) {
                this.propType = "unidimensional",
                this.mult = i || 1,
                this.data = e,
                this.v = i ? e.k * i : e.k,
                this.pv = e.k,
                this._mdf = !1,
                this.elem = t,
                this.container = r,
                this.comp = t.comp,
                this.k = !1,
                this.kf = !1,
                this.vel = 0,
                this.effectsSequence = [],
                this._isFirstFrame = !0,
                this.getValue = s,
                this.setVValue = o,
                this.addEffect = a
            }
            function h(t, e, i, r) {
                var n;
                this.propType = "multidimensional",
                this.mult = i || 1,
                this.data = e,
                this._mdf = !1,
                this.elem = t,
                this.container = r,
                this.comp = t.comp,
                this.k = !1,
                this.kf = !1,
                this.frameId = -1;
                var l = e.k.length;
                for (this.v = createTypedArray("float32", l),
                this.pv = createTypedArray("float32", l),
                this.vel = createTypedArray("float32", l),
                n = 0; n < l; n += 1)
                    this.v[n] = e.k[n] * this.mult,
                    this.pv[n] = e.k[n];
                this._isFirstFrame = !0,
                this.effectsSequence = [],
                this.getValue = s,
                this.setVValue = o,
                this.addEffect = a
            }
            function c(e, r, l, h) {
                this.propType = "unidimensional",
                this.keyframes = r.k,
                this.offsetTime = e.data.st,
                this.frameId = -1,
                this._caching = {
                    lastFrame: t,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                },
                this.k = !0,
                this.kf = !0,
                this.data = r,
                this.mult = l || 1,
                this.elem = e,
                this.container = h,
                this.comp = e.comp,
                this.v = t,
                this.pv = t,
                this._isFirstFrame = !0,
                this.getValue = s,
                this.setVValue = o,
                this.interpolateValue = i,
                this.effectsSequence = [n.bind(this)],
                this.addEffect = a
            }
            function u(e, r, l, h) {
                var c;
                this.propType = "multidimensional";
                var u, p, f, d, m = r.k.length;
                for (c = 0; c < m - 1; c += 1)
                    r.k[c].to && r.k[c].s && r.k[c + 1] && r.k[c + 1].s && (u = r.k[c].s,
                    p = r.k[c + 1].s,
                    f = r.k[c].to,
                    d = r.k[c].ti,
                    (2 === u.length && (u[0] !== p[0] || u[1] !== p[1]) && bez.pointOnLine2D(u[0], u[1], p[0], p[1], u[0] + f[0], u[1] + f[1]) && bez.pointOnLine2D(u[0], u[1], p[0], p[1], p[0] + d[0], p[1] + d[1]) || 3 === u.length && (u[0] !== p[0] || u[1] !== p[1] || u[2] !== p[2]) && bez.pointOnLine3D(u[0], u[1], u[2], p[0], p[1], p[2], u[0] + f[0], u[1] + f[1], u[2] + f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], p[0], p[1], p[2], p[0] + d[0], p[1] + d[1], p[2] + d[2])) && (r.k[c].to = null,
                    r.k[c].ti = null),
                    u[0] === p[0] && u[1] === p[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === p[2] && 0 === f[2] && 0 === d[2]) && (r.k[c].to = null,
                    r.k[c].ti = null));
                this.effectsSequence = [n.bind(this)],
                this.data = r,
                this.keyframes = r.k,
                this.offsetTime = e.data.st,
                this.k = !0,
                this.kf = !0,
                this._isFirstFrame = !0,
                this.mult = l || 1,
                this.elem = e,
                this.container = h,
                this.comp = e.comp,
                this.getValue = s,
                this.setVValue = o,
                this.interpolateValue = i,
                this.frameId = -1;
                var y = r.k[0].s.length;
                for (this.v = createTypedArray("float32", y),
                this.pv = createTypedArray("float32", y),
                c = 0; c < y; c += 1)
                    this.v[c] = t,
                    this.pv[c] = t;
                this._caching = {
                    lastFrame: t,
                    lastIndex: 0,
                    value: createTypedArray("float32", y)
                },
                this.addEffect = a
            }
            return {
                getProp: function(t, e, i, r, n) {
                    var o;
                    if (e.k.length)
                        if ("number" == typeof e.k[0])
                            o = new h(t,e,r,n);
                        else
                            switch (i) {
                            case 0:
                                o = new c(t,e,r,n);
                                break;
                            case 1:
                                o = new u(t,e,r,n)
                            }
                    else
                        o = new l(t,e,r,n);
                    return o.effectsSequence.length && n.addDynamicProperty(o),
                    o
                }
            }
        }()
          , TransformPropertyFactory = function() {
            var t = [0, 0];
            function e(t, e, i) {
                if (this.elem = t,
                this.frameId = -1,
                this.propType = "transform",
                this.data = e,
                this.v = new Matrix,
                this.pre = new Matrix,
                this.appliedTransformations = 0,
                this.initDynamicPropertyContainer(i || t),
                e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this),
                this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this),
                e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                    k: [0, 0, 0]
                }, 1, 0, this),
                e.rx) {
                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this),
                    this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this),
                    this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this),
                    e.or.k[0].ti) {
                        var r, n = e.or.k.length;
                        for (r = 0; r < n; r += 1)
                            e.or.k[r].to = null,
                            e.or.k[r].ti = null
                    }
                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                    this.or.sh = !0
                } else
                    this.r = PropertyFactory.getProp(t, e.r || {
                        k: 0
                    }, 0, degToRads, this);
                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this),
                this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
                this.a = PropertyFactory.getProp(t, e.a || {
                    k: [0, 0, 0]
                }, 1, 0, this),
                this.s = PropertyFactory.getProp(t, e.s || {
                    k: [100, 100, 100]
                }, 1, .01, this),
                e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                    _mdf: !1,
                    v: 1
                },
                this._isDirty = !0,
                this.dynamicProperties.length || this.getValue(!0)
            }
            return e.prototype = {
                applyToMatrix: function(t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(),
                    this._mdf = this._mdf || e,
                    this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                    this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                },
                getValue: function(e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(),
                        this._isDirty = !1),
                        this.iterateDynamicProperties(),
                        this._mdf || e) {
                            var i;
                            if (this.v.cloneFromProps(this.pre.props),
                            this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                            this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                            this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                            this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                            this.autoOriented) {
                                var r, n;
                                if (i = this.elem.globalData.frameRate,
                                this.p && this.p.keyframes && this.p.getValueAtTime)
                                    this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0),
                                    n = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0),
                                    n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv,
                                    n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                    r = [],
                                    n = [];
                                    var o = this.px
                                      , s = this.py;
                                    o._caching.lastFrame + o.offsetTime <= o.keyframes[0].t ? (r[0] = o.getValueAtTime((o.keyframes[0].t + .01) / i, 0),
                                    r[1] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0),
                                    n[0] = o.getValueAtTime(o.keyframes[0].t / i, 0),
                                    n[1] = s.getValueAtTime(s.keyframes[0].t / i, 0)) : o._caching.lastFrame + o.offsetTime >= o.keyframes[o.keyframes.length - 1].t ? (r[0] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / i, 0),
                                    r[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0),
                                    n[0] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / i, 0),
                                    n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0)) : (r = [o.pv, s.pv],
                                    n[0] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / i, o.offsetTime),
                                    n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime))
                                } else
                                    r = n = t;
                                this.v.rotate(-Math.atan2(r[1] - n[1], r[0] - n[0]))
                            }
                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }
                        this.frameId = this.elem.globalData.frameId
                    }
                },
                precalculateMatrix: function() {
                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.appliedTransformations = 1,
                    !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.appliedTransformations = 2,
                        this.sk) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                                return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                            this.appliedTransformations = 3
                        }
                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v),
                        this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.appliedTransformations = 4)
                    }
                },
                autoOrient: function() {}
            },
            extendPrototype([DynamicPropertyContainer], e),
            e.prototype.addDynamicProperty = function(t) {
                this._addDynamicProperty(t),
                this.elem.addDynamicProperty(t),
                this._isDirty = !0
            }
            ,
            e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty,
            {
                getTransformProperty: function(t, i, r) {
                    return new e(t,i,r)
                }
            }
        }();
        function ShapePath() {
            this.c = !1,
            this._length = 0,
            this._maxLength = 8,
            this.v = createSizedArray(this._maxLength),
            this.o = createSizedArray(this._maxLength),
            this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t,
            this.setLength(e);
            for (var i = 0; i < e; )
                this.v[i] = pointPool.newElement(),
                this.o[i] = pointPool.newElement(),
                this.i[i] = pointPool.newElement(),
                i += 1
        }
        ,
        ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t; )
                this.doubleArrayLength();
            this._length = t
        }
        ,
        ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)),
            this.i = this.i.concat(createSizedArray(this._maxLength)),
            this.o = this.o.concat(createSizedArray(this._maxLength)),
            this._maxLength *= 2
        }
        ,
        ShapePath.prototype.setXYAt = function(t, e, i, r, n) {
            var o;
            switch (this._length = Math.max(this._length, r + 1),
            this._length >= this._maxLength && this.doubleArrayLength(),
            i) {
            case "v":
                o = this.v;
                break;
            case "i":
                o = this.i;
                break;
            case "o":
                o = this.o;
                break;
            default:
                o = []
            }
            (!o[r] || o[r] && !n) && (o[r] = pointPool.newElement()),
            o[r][0] = t,
            o[r][1] = e
        }
        ,
        ShapePath.prototype.setTripleAt = function(t, e, i, r, n, o, s, a) {
            this.setXYAt(t, e, "v", s, a),
            this.setXYAt(i, r, "o", s, a),
            this.setXYAt(n, o, "i", s, a)
        }
        ,
        ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v
              , i = this.o
              , r = this.i
              , n = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1),
            n = 1);
            var o, s = this._length - 1, a = this._length;
            for (o = n; o < a; o += 1)
                t.setTripleAt(e[s][0], e[s][1], r[s][0], r[s][1], i[s][0], i[s][1], o, !1),
                s -= 1;
            return t
        }
        ;
        var ShapePropertyFactory = function() {
            function t(t, e, i) {
                var r, n, o, s, a, l, h, c, u, p = i.lastIndex, f = this.keyframes;
                if (t < f[0].t - this.offsetTime)
                    r = f[0].s[0],
                    o = !0,
                    p = 0;
                else if (t >= f[f.length - 1].t - this.offsetTime)
                    r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0],
                    o = !0;
                else {
                    for (var d, m, y = p, g = f.length - 1, v = !0; v && (d = f[y],
                    !((m = f[y + 1]).t - this.offsetTime > t)); )
                        y < g - 1 ? y += 1 : v = !1;
                    if (p = y,
                    !(o = 1 === d.h)) {
                        if (t >= m.t - this.offsetTime)
                            c = 1;
                        else if (t < d.t - this.offsetTime)
                            c = 0;
                        else {
                            var b;
                            d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get,
                            d.__fnct = b),
                            c = b((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                        }
                        n = m.s ? m.s[0] : d.e[0]
                    }
                    r = d.s[0]
                }
                for (l = e._length,
                h = r.i[0].length,
                i.lastIndex = p,
                s = 0; s < l; s += 1)
                    for (a = 0; a < h; a += 1)
                        u = o ? r.i[s][a] : r.i[s][a] + (n.i[s][a] - r.i[s][a]) * c,
                        e.i[s][a] = u,
                        u = o ? r.o[s][a] : r.o[s][a] + (n.o[s][a] - r.o[s][a]) * c,
                        e.o[s][a] = u,
                        u = o ? r.v[s][a] : r.v[s][a] + (n.v[s][a] - r.v[s][a]) * c,
                        e.v[s][a] = u
            }
            function e() {
                var t = this.comp.renderedFrame - this.offsetTime
                  , e = this.keyframes[0].t - this.offsetTime
                  , i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                  , r = this._caching.lastFrame;
                return -999999 !== r && (r < e && t < e || r > i && t > i) || (this._caching.lastIndex = r < t ? this._caching.lastIndex : 0,
                this.interpolateShape(t, this.pv, this._caching)),
                this._caching.lastFrame = t,
                this.pv
            }
            function i() {
                this.paths = this.localShapeCollection
            }
            function r(t) {
                (function(t, e) {
                    if (t._length !== e._length || t.c !== e.c)
                        return !1;
                    var i, r = t._length;
                    for (i = 0; i < r; i += 1)
                        if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1])
                            return !1;
                    return !0
                }
                )(this.v, t) || (this.v = shapePool.clone(t),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                this._mdf = !0,
                this.paths = this.localShapeCollection)
            }
            function n() {
                if (this.elem.globalData.frameId !== this.frameId)
                    if (this.effectsSequence.length)
                        if (this.lock)
                            this.setVValue(this.pv);
                        else {
                            var t, e;
                            this.lock = !0,
                            this._mdf = !1,
                            t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                            var i = this.effectsSequence.length;
                            for (e = 0; e < i; e += 1)
                                t = this.effectsSequence[e](t);
                            this.setVValue(t),
                            this.lock = !1,
                            this.frameId = this.elem.globalData.frameId
                        }
                    else
                        this._mdf = !1
            }
            function o(t, e, r) {
                this.propType = "shape",
                this.comp = t.comp,
                this.container = t,
                this.elem = t,
                this.data = e,
                this.k = !1,
                this.kf = !1,
                this._mdf = !1;
                var n = 3 === r ? e.pt.k : e.ks.k;
                this.v = shapePool.clone(n),
                this.pv = shapePool.clone(this.v),
                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.paths.addShape(this.v),
                this.reset = i,
                this.effectsSequence = []
            }
            function s(t) {
                this.effectsSequence.push(t),
                this.container.addDynamicProperty(this)
            }
            function a(t, r, n) {
                this.propType = "shape",
                this.comp = t.comp,
                this.elem = t,
                this.container = t,
                this.offsetTime = t.data.st,
                this.keyframes = 3 === n ? r.pt.k : r.ks.k,
                this.k = !0,
                this.kf = !0;
                var o = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(),
                this.v.setPathData(this.keyframes[0].s[0].c, o),
                this.pv = shapePool.clone(this.v),
                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.paths.addShape(this.v),
                this.lastFrame = -999999,
                this.reset = i,
                this._caching = {
                    lastFrame: -999999,
                    lastIndex: 0
                },
                this.effectsSequence = [e.bind(this)]
            }
            o.prototype.interpolateShape = t,
            o.prototype.getValue = n,
            o.prototype.setVValue = r,
            o.prototype.addEffect = s,
            a.prototype.getValue = n,
            a.prototype.interpolateShape = t,
            a.prototype.setVValue = r,
            a.prototype.addEffect = s;
            var l = function() {
                var t = roundCorner;
                function e(t, e) {
                    this.v = shapePool.newElement(),
                    this.v.setPathData(!0, 4),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.localShapeCollection.addShape(this.v),
                    this.d = e.d,
                    this.elem = t,
                    this.comp = t.comp,
                    this.frameId = -1,
                    this.initDynamicPropertyContainer(t),
                    this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                    this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertEllToPath())
                }
                return e.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath())
                    },
                    convertEllToPath: function() {
                        var e = this.p.v[0]
                          , i = this.p.v[1]
                          , r = this.s.v[0] / 2
                          , n = this.s.v[1] / 2
                          , o = 3 !== this.d
                          , s = this.v;
                        s.v[0][0] = e,
                        s.v[0][1] = i - n,
                        s.v[1][0] = o ? e + r : e - r,
                        s.v[1][1] = i,
                        s.v[2][0] = e,
                        s.v[2][1] = i + n,
                        s.v[3][0] = o ? e - r : e + r,
                        s.v[3][1] = i,
                        s.i[0][0] = o ? e - r * t : e + r * t,
                        s.i[0][1] = i - n,
                        s.i[1][0] = o ? e + r : e - r,
                        s.i[1][1] = i - n * t,
                        s.i[2][0] = o ? e + r * t : e - r * t,
                        s.i[2][1] = i + n,
                        s.i[3][0] = o ? e - r : e + r,
                        s.i[3][1] = i + n * t,
                        s.o[0][0] = o ? e + r * t : e - r * t,
                        s.o[0][1] = i - n,
                        s.o[1][0] = o ? e + r : e - r,
                        s.o[1][1] = i + n * t,
                        s.o[2][0] = o ? e - r * t : e + r * t,
                        s.o[2][1] = i + n,
                        s.o[3][0] = o ? e - r : e + r,
                        s.o[3][1] = i - n * t
                    }
                },
                extendPrototype([DynamicPropertyContainer], e),
                e
            }()
              , h = function() {
                function t(t, e) {
                    this.v = shapePool.newElement(),
                    this.v.setPathData(!0, 0),
                    this.elem = t,
                    this.comp = t.comp,
                    this.data = e,
                    this.frameId = -1,
                    this.d = e.d,
                    this.initDynamicPropertyContainer(t),
                    1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this),
                    this.is = PropertyFactory.getProp(t, e.is, 0, .01, this),
                    this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                    this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                    this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                    this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                    this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                    this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.localShapeCollection.addShape(this.v),
                    this.paths = this.localShapeCollection,
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertToPath())
                }
                return t.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath())
                    },
                    convertStarToPath: function() {
                        var t, e, i, r, n = 2 * Math.floor(this.pt.v), o = 2 * Math.PI / n, s = !0, a = this.or.v, l = this.ir.v, h = this.os.v, c = this.is.v, u = 2 * Math.PI * a / (2 * n), p = 2 * Math.PI * l / (2 * n), f = -Math.PI / 2;
                        f += this.r.v;
                        var d = 3 === this.data.d ? -1 : 1;
                        for (this.v._length = 0,
                        t = 0; t < n; t += 1) {
                            i = s ? h : c,
                            r = s ? u : p;
                            var m = (e = s ? a : l) * Math.cos(f)
                              , y = e * Math.sin(f)
                              , g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y)
                              , v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                            m += +this.p.v[0],
                            y += +this.p.v[1],
                            this.v.setTripleAt(m, y, m - g * r * i * d, y - v * r * i * d, m + g * r * i * d, y + v * r * i * d, t, !0),
                            s = !s,
                            f += o * d
                        }
                    },
                    convertPolygonToPath: function() {
                        var t, e = Math.floor(this.pt.v), i = 2 * Math.PI / e, r = this.or.v, n = this.os.v, o = 2 * Math.PI * r / (4 * e), s = .5 * -Math.PI, a = 3 === this.data.d ? -1 : 1;
                        for (s += this.r.v,
                        this.v._length = 0,
                        t = 0; t < e; t += 1) {
                            var l = r * Math.cos(s)
                              , h = r * Math.sin(s)
                              , c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h)
                              , u = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                            l += +this.p.v[0],
                            h += +this.p.v[1],
                            this.v.setTripleAt(l, h, l - c * o * n * a, h - u * o * n * a, l + c * o * n * a, h + u * o * n * a, t, !0),
                            s += i * a
                        }
                        this.paths.length = 0,
                        this.paths[0] = this.v
                    }
                },
                extendPrototype([DynamicPropertyContainer], t),
                t
            }()
              , c = function() {
                function t(t, e) {
                    this.v = shapePool.newElement(),
                    this.v.c = !0,
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.localShapeCollection.addShape(this.v),
                    this.paths = this.localShapeCollection,
                    this.elem = t,
                    this.comp = t.comp,
                    this.frameId = -1,
                    this.d = e.d,
                    this.initDynamicPropertyContainer(t),
                    this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                    this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                    this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertRectToPath())
                }
                return t.prototype = {
                    convertRectToPath: function() {
                        var t = this.p.v[0]
                          , e = this.p.v[1]
                          , i = this.s.v[0] / 2
                          , r = this.s.v[1] / 2
                          , n = bmMin(i, r, this.r.v)
                          , o = n * (1 - roundCorner);
                        this.v._length = 0,
                        2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + n, t + i, e - r + o, 0, !0),
                        this.v.setTripleAt(t + i, e + r - n, t + i, e + r - o, t + i, e + r - n, 1, !0),
                        0 !== n ? (this.v.setTripleAt(t + i - n, e + r, t + i - n, e + r, t + i - o, e + r, 2, !0),
                        this.v.setTripleAt(t - i + n, e + r, t - i + o, e + r, t - i + n, e + r, 3, !0),
                        this.v.setTripleAt(t - i, e + r - n, t - i, e + r - n, t - i, e + r - o, 4, !0),
                        this.v.setTripleAt(t - i, e - r + n, t - i, e - r + o, t - i, e - r + n, 5, !0),
                        this.v.setTripleAt(t - i + n, e - r, t - i + n, e - r, t - i + o, e - r, 6, !0),
                        this.v.setTripleAt(t + i - n, e - r, t + i - o, e - r, t + i - n, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + o, e + r, t - i, e + r, 2),
                        this.v.setTripleAt(t - i, e - r, t - i, e - r + o, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + o, t + i, e - r + n, 0, !0),
                        0 !== n ? (this.v.setTripleAt(t + i - n, e - r, t + i - n, e - r, t + i - o, e - r, 1, !0),
                        this.v.setTripleAt(t - i + n, e - r, t - i + o, e - r, t - i + n, e - r, 2, !0),
                        this.v.setTripleAt(t - i, e - r + n, t - i, e - r + n, t - i, e - r + o, 3, !0),
                        this.v.setTripleAt(t - i, e + r - n, t - i, e + r - o, t - i, e + r - n, 4, !0),
                        this.v.setTripleAt(t - i + n, e + r, t - i + n, e + r, t - i + o, e + r, 5, !0),
                        this.v.setTripleAt(t + i - n, e + r, t + i - o, e + r, t + i - n, e + r, 6, !0),
                        this.v.setTripleAt(t + i, e + r - n, t + i, e + r - n, t + i, e + r - o, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + o, e - r, t - i, e - r, 1, !0),
                        this.v.setTripleAt(t - i, e + r, t - i, e + r - o, t - i, e + r, 2, !0),
                        this.v.setTripleAt(t + i, e + r, t + i - o, e + r, t + i, e + r, 3, !0)))
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath())
                    },
                    reset: i
                },
                extendPrototype([DynamicPropertyContainer], t),
                t
            }();
            var u = {
                getShapeProp: function(t, e, i) {
                    var r;
                    return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new a(t,e,i) : new o(t,e,i) : 5 === i ? r = new c(t,e) : 6 === i ? r = new l(t,e) : 7 === i && (r = new h(t,e)),
                    r.k && t.addDynamicProperty(r),
                    r
                },
                getConstructorFunction: function() {
                    return o
                },
                getKeyframedConstructorFunction: function() {
                    return a
                }
            };
            return u
        }(), ShapeModifiers = (ob = {},
        modifiers = {},
        ob.registerModifier = function(t, e) {
            modifiers[t] || (modifiers[t] = e)
        }
        ,
        ob.getModifier = function(t, e, i) {
            return new modifiers[t](e,i)
        }
        ,
        ob), ob, modifiers;
        function ShapeModifier() {}
        function TrimModifier() {}
        function RoundCornersModifier() {}
        function PuckerAndBloatModifier() {}
        function RepeaterModifier() {}
        function ShapeCollection() {
            this._length = 0,
            this._maxLength = 4,
            this.shapes = createSizedArray(this._maxLength)
        }
        function DashProperty(t, e, i, r) {
            var n;
            this.elem = t,
            this.frameId = -1,
            this.dataProps = createSizedArray(e.length),
            this.renderer = i,
            this.k = !1,
            this.dashStr = "",
            this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
            this.dashoffset = createTypedArray("float32", 1),
            this.initDynamicPropertyContainer(r);
            var o, s = e.length || 0;
            for (n = 0; n < s; n += 1)
                o = PropertyFactory.getProp(t, e[n].v, 0, 0, this),
                this.k = o.k || this.k,
                this.dataProps[n] = {
                    n: e[n].n,
                    p: o
                };
            this.k || this.getValue(!0),
            this._isAnimated = this.k
        }
        function GradientProperty(t, e, i) {
            this.data = e,
            this.c = createTypedArray("uint8c", 4 * e.p);
            var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", r),
            this._cmdf = !1,
            this._omdf = !1,
            this._collapsable = this.checkCollapsable(),
            this._hasOpacity = r,
            this.initDynamicPropertyContainer(i),
            this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
            this.k = this.prop.k,
            this.getValue(!0)
        }
        ShapeModifier.prototype.initModifierProperties = function() {}
        ,
        ShapeModifier.prototype.addShapeToModifier = function() {}
        ,
        ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated()
            }
        }
        ,
        ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [],
            this.elem = t,
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e),
            this.frameId = initialDefaultFrame,
            this.closed = !1,
            this.k = !1,
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }
        ,
        ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
            this.iterateDynamicProperties())
        }
        ,
        extendPrototype([DynamicPropertyContainer], ShapeModifier),
        extendPrototype([ShapeModifier], TrimModifier),
        TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
            this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
            this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
            this.sValue = 0,
            this.eValue = 0,
            this.getValue = this.processKeys,
            this.m = e.m,
            this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }
        ,
        TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }
        ,
        TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, n) {
            var o = [];
            e <= 1 ? o.push({
                s: t,
                e: e
            }) : t >= 1 ? o.push({
                s: t - 1,
                e: e - 1
            }) : (o.push({
                s: t,
                e: 1
            }),
            o.push({
                s: 0,
                e: e - 1
            }));
            var s, a, l = [], h = o.length;
            for (s = 0; s < h; s += 1) {
                var c, u;
                if (!((a = o[s]).e * n < r || a.s * n > r + i))
                    c = a.s * n <= r ? 0 : (a.s * n - r) / i,
                    u = a.e * n >= r + i ? 1 : (a.e * n - r) / i,
                    l.push([c, u])
            }
            return l.length || l.push([0, 0]),
            l
        }
        ,
        TrimModifier.prototype.releasePathsData = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                segmentsLengthPool.release(t[e]);
            return t.length = 0,
            t
        }
        ,
        TrimModifier.prototype.processShapes = function(t) {
            var e, i, r, n;
            if (this._mdf || t) {
                var o = this.o.v % 360 / 360;
                if (o < 0 && (o += 1),
                (e = this.s.v > 1 ? 1 + o : this.s.v < 0 ? 0 + o : this.s.v + o) > (i = this.e.v > 1 ? 1 + o : this.e.v < 0 ? 0 + o : this.e.v + o)) {
                    var s = e;
                    e = i,
                    i = s
                }
                e = 1e-4 * Math.round(1e4 * e),
                i = 1e-4 * Math.round(1e4 * i),
                this.sValue = e,
                this.eValue = i
            } else
                e = this.sValue,
                i = this.eValue;
            var a, l, h, c, u, p = this.shapes.length, f = 0;
            if (i === e)
                for (n = 0; n < p; n += 1)
                    this.shapes[n].localShapeCollection.releaseShapes(),
                    this.shapes[n].shape._mdf = !0,
                    this.shapes[n].shape.paths = this.shapes[n].localShapeCollection,
                    this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (1 === i && 0 === e || 0 === i && 1 === e) {
                if (this._mdf)
                    for (n = 0; n < p; n += 1)
                        this.shapes[n].pathsData.length = 0,
                        this.shapes[n].shape._mdf = !0
            } else {
                var d, m, y = [];
                for (n = 0; n < p; n += 1)
                    if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (l = (r = d.shape.paths)._length,
                        u = 0,
                        !d.shape._mdf && d.pathsData.length)
                            u = d.totalShapeLength;
                        else {
                            for (h = this.releasePathsData(d.pathsData),
                            a = 0; a < l; a += 1)
                                c = bez.getSegmentsLength(r.shapes[a]),
                                h.push(c),
                                u += c.totalLength;
                            d.totalShapeLength = u,
                            d.pathsData = h
                        }
                        f += u,
                        d.shape._mdf = !0
                    } else
                        d.shape.paths = d.localShapeCollection;
                var g, v = e, b = i, w = 0;
                for (n = p - 1; n >= 0; n -= 1)
                    if ((d = this.shapes[n]).shape._mdf) {
                        for ((m = d.localShapeCollection).releaseShapes(),
                        2 === this.m && p > 1 ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, w, f),
                        w += d.totalShapeLength) : g = [[v, b]],
                        l = g.length,
                        a = 0; a < l; a += 1) {
                            v = g[a][0],
                            b = g[a][1],
                            y.length = 0,
                            b <= 1 ? y.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength * b
                            }) : v >= 1 ? y.push({
                                s: d.totalShapeLength * (v - 1),
                                e: d.totalShapeLength * (b - 1)
                            }) : (y.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength
                            }),
                            y.push({
                                s: 0,
                                e: d.totalShapeLength * (b - 1)
                            }));
                            var S = this.addShapes(d, y[0]);
                            if (y[0].s !== y[0].e) {
                                if (y.length > 1)
                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                        var x = S.pop();
                                        this.addPaths(S, m),
                                        S = this.addShapes(d, y[1], x)
                                    } else
                                        this.addPaths(S, m),
                                        S = this.addShapes(d, y[1]);
                                this.addPaths(S, m)
                            }
                        }
                        d.shape.paths = m
                    }
            }
        }
        ,
        TrimModifier.prototype.addPaths = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1)
                e.addShape(t[i])
        }
        ,
        TrimModifier.prototype.addSegment = function(t, e, i, r, n, o, s) {
            n.setXYAt(e[0], e[1], "o", o),
            n.setXYAt(i[0], i[1], "i", o + 1),
            s && n.setXYAt(t[0], t[1], "v", o),
            n.setXYAt(r[0], r[1], "v", o + 1)
        }
        ,
        TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
            e.setXYAt(t[1], t[5], "o", i),
            e.setXYAt(t[2], t[6], "i", i + 1),
            r && e.setXYAt(t[0], t[4], "v", i),
            e.setXYAt(t[3], t[7], "v", i + 1)
        }
        ,
        TrimModifier.prototype.addShapes = function(t, e, i) {
            var r, n, o, s, a, l, h, c, u = t.pathsData, p = t.shape.paths.shapes, f = t.shape.paths._length, d = 0, m = [], y = !0;
            for (i ? (a = i._length,
            c = i._length) : (i = shapePool.newElement(),
            a = 0,
            c = 0),
            m.push(i),
            r = 0; r < f; r += 1) {
                for (l = u[r].lengths,
                i.c = p[r].c,
                o = p[r].c ? l.length : l.length + 1,
                n = 1; n < o; n += 1)
                    if (d + (s = l[n - 1]).addedLength < e.s)
                        d += s.addedLength,
                        i.c = !1;
                    else {
                        if (d > e.e) {
                            i.c = !1;
                            break
                        }
                        e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(p[r].v[n - 1], p[r].o[n - 1], p[r].i[n], p[r].v[n], i, a, y),
                        y = !1) : (h = bez.getNewSegment(p[r].v[n - 1], p[r].v[n], p[r].o[n - 1], p[r].i[n], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[n - 1]),
                        this.addSegmentFromArray(h, i, a, y),
                        y = !1,
                        i.c = !1),
                        d += s.addedLength,
                        a += 1
                    }
                if (p[r].c && l.length) {
                    if (s = l[n - 1],
                    d <= e.e) {
                        var g = l[n - 1].addedLength;
                        e.s <= d && e.e >= d + g ? (this.addSegment(p[r].v[n - 1], p[r].o[n - 1], p[r].i[0], p[r].v[0], i, a, y),
                        y = !1) : (h = bez.getNewSegment(p[r].v[n - 1], p[r].v[0], p[r].o[n - 1], p[r].i[0], (e.s - d) / g, (e.e - d) / g, l[n - 1]),
                        this.addSegmentFromArray(h, i, a, y),
                        y = !1,
                        i.c = !1)
                    } else
                        i.c = !1;
                    d += s.addedLength,
                    a += 1
                }
                if (i._length && (i.setXYAt(i.v[c][0], i.v[c][1], "i", c),
                i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)),
                d > e.e)
                    break;
                r < f - 1 && (i = shapePool.newElement(),
                y = !0,
                m.push(i),
                a = 0)
            }
            return m
        }
        ,
        ShapeModifiers.registerModifier("tm", TrimModifier),
        extendPrototype([ShapeModifier], RoundCornersModifier),
        RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
            this._isAnimated = !!this.rd.effectsSequence.length
        }
        ,
        RoundCornersModifier.prototype.processPath = function(t, e) {
            var i, r = shapePool.newElement();
            r.c = t.c;
            var n, o, s, a, l, h, c, u, p, f, d, m, y = t._length, g = 0;
            for (i = 0; i < y; i += 1)
                n = t.v[i],
                s = t.o[i],
                o = t.i[i],
                n[0] === s[0] && n[1] === s[1] && n[0] === o[0] && n[1] === o[1] ? 0 !== i && i !== y - 1 || t.c ? (a = 0 === i ? t.v[y - 1] : t.v[i - 1],
                h = (l = Math.sqrt(Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2))) ? Math.min(l / 2, e) / l : 0,
                c = d = n[0] + (a[0] - n[0]) * h,
                u = m = n[1] - (n[1] - a[1]) * h,
                p = c - (c - n[0]) * roundCorner,
                f = u - (u - n[1]) * roundCorner,
                r.setTripleAt(c, u, p, f, d, m, g),
                g += 1,
                a = i === y - 1 ? t.v[0] : t.v[i + 1],
                h = (l = Math.sqrt(Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2))) ? Math.min(l / 2, e) / l : 0,
                c = p = n[0] + (a[0] - n[0]) * h,
                u = f = n[1] + (a[1] - n[1]) * h,
                d = c - (c - n[0]) * roundCorner,
                m = u - (u - n[1]) * roundCorner,
                r.setTripleAt(c, u, p, f, d, m, g),
                g += 1) : (r.setTripleAt(n[0], n[1], s[0], s[1], o[0], o[1], g),
                g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g),
                g += 1);
            return r
        }
        ,
        RoundCornersModifier.prototype.processShapes = function(t) {
            var e, i, r, n, o, s, a = this.shapes.length, l = this.rd.v;
            if (0 !== l)
                for (i = 0; i < a; i += 1) {
                    if (s = (o = this.shapes[i]).localShapeCollection,
                    o.shape._mdf || this._mdf || t)
                        for (s.releaseShapes(),
                        o.shape._mdf = !0,
                        e = o.shape.paths.shapes,
                        n = o.shape.paths._length,
                        r = 0; r < n; r += 1)
                            s.addShape(this.processPath(e[r], l));
                    o.shape.paths = o.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ,
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
            this._isAnimated = !!this.amount.effectsSequence.length
        }
        ,
        PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var i = e / 100
              , r = [0, 0]
              , n = t._length
              , o = 0;
            for (o = 0; o < n; o += 1)
                r[0] += t.v[o][0],
                r[1] += t.v[o][1];
            r[0] /= n,
            r[1] /= n;
            var s, a, l, h, c, u, p = shapePool.newElement();
            for (p.c = t.c,
            o = 0; o < n; o += 1)
                s = t.v[o][0] + (r[0] - t.v[o][0]) * i,
                a = t.v[o][1] + (r[1] - t.v[o][1]) * i,
                l = t.o[o][0] + (r[0] - t.o[o][0]) * -i,
                h = t.o[o][1] + (r[1] - t.o[o][1]) * -i,
                c = t.i[o][0] + (r[0] - t.i[o][0]) * -i,
                u = t.i[o][1] + (r[1] - t.i[o][1]) * -i,
                p.setTripleAt(s, a, l, h, c, u, o);
            return p
        }
        ,
        PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, i, r, n, o, s, a = this.shapes.length, l = this.amount.v;
            if (0 !== l)
                for (i = 0; i < a; i += 1) {
                    if (s = (o = this.shapes[i]).localShapeCollection,
                    o.shape._mdf || this._mdf || t)
                        for (s.releaseShapes(),
                        o.shape._mdf = !0,
                        e = o.shape.paths.shapes,
                        n = o.shape.paths._length,
                        r = 0; r < n; r += 1)
                            s.addShape(this.processPath(e[r], l));
                    o.shape.paths = o.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ,
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
        extendPrototype([ShapeModifier], RepeaterModifier),
        RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys,
            this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
            this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
            this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
            this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
            this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
            this.data = e,
            this.dynamicProperties.length || this.getValue(!0),
            this._isAnimated = !!this.dynamicProperties.length,
            this.pMatrix = new Matrix,
            this.rMatrix = new Matrix,
            this.sMatrix = new Matrix,
            this.tMatrix = new Matrix,
            this.matrix = new Matrix
        }
        ,
        RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, n, o) {
            var s = o ? -1 : 1
              , a = r.s.v[0] + (1 - r.s.v[0]) * (1 - n)
              , l = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
            t.translate(r.p.v[0] * s * n, r.p.v[1] * s * n, r.p.v[2]),
            e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
            e.rotate(-r.r.v * s * n),
            e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
            i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
            i.scale(o ? 1 / a : a, o ? 1 / l : l),
            i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
        }
        ,
        RepeaterModifier.prototype.init = function(t, e, i, r) {
            for (this.elem = t,
            this.arr = e,
            this.pos = i,
            this.elemsData = r,
            this._currentCopies = 0,
            this._elements = [],
            this._groups = [],
            this.frameId = -1,
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e[i]); i > 0; )
                i -= 1,
                this._elements.unshift(e[i]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }
        ,
        RepeaterModifier.prototype.resetElements = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                t[e]._processed = !1,
                "gr" === t[e].ty && this.resetElements(t[e].it)
        }
        ,
        RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e),
            e
        }
        ,
        RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1)
                t[i]._render = e,
                "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
        }
        ,
        RepeaterModifier.prototype.processShapes = function(t) {
            var e, i, r, n, o;
            if (this._mdf || t) {
                var s, a = Math.ceil(this.c.v);
                if (this._groups.length < a) {
                    for (; this._groups.length < a; ) {
                        var l = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        l.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }),
                        this.arr.splice(0, 0, l),
                        this._groups.splice(0, 0, l),
                        this._currentCopies += 1
                    }
                    this.elem.reloadShapes()
                }
                for (o = 0,
                r = 0; r <= this._groups.length - 1; r += 1)
                    s = o < a,
                    this._groups[r]._render = s,
                    this.changeGroupRender(this._groups[r].it, s),
                    o += 1;
                this._currentCopies = a;
                var h = this.o.v
                  , c = h % 1
                  , u = h > 0 ? Math.floor(h) : Math.ceil(h)
                  , p = this.pMatrix.props
                  , f = this.rMatrix.props
                  , d = this.sMatrix.props;
                this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset();
                var m, y, g = 0;
                if (h > 0) {
                    for (; g < u; )
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        g += 1;
                    c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1),
                    g += c)
                } else if (h < 0) {
                    for (; g > u; )
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                        g -= 1;
                    c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0),
                    g -= c)
                }
                for (r = 1 === this.data.m ? 0 : this._currentCopies - 1,
                n = 1 === this.data.m ? 1 : -1,
                o = this._currentCopies; o; ) {
                    if (y = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length,
                    e[e.length - 1].transform.mProps._mdf = !0,
                    e[e.length - 1].transform.op._mdf = !0,
                    e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)),
                    0 !== g) {
                        for ((0 !== r && 1 === n || r !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]),
                        this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
                        this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]),
                        m = 0; m < y; m += 1)
                            i[m] = this.matrix.props[m];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(),
                        m = 0; m < y; m += 1)
                            i[m] = this.matrix.props[m];
                    g += 1,
                    o -= 1,
                    r += n
                }
            } else
                for (o = this._currentCopies,
                r = 0,
                n = 1; o; )
                    i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props,
                    e[e.length - 1].transform.mProps._mdf = !1,
                    e[e.length - 1].transform.op._mdf = !1,
                    o -= 1,
                    r += n
        }
        ,
        RepeaterModifier.prototype.addShape = function() {}
        ,
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
            this._maxLength *= 2),
            this.shapes[this._length] = t,
            this._length += 1
        }
        ,
        ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1)
                shapePool.release(this.shapes[t]);
            this._length = 0
        }
        ,
        DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId,
            this.iterateDynamicProperties(),
            this._mdf = this._mdf || t,
            this._mdf)) {
                var e = 0
                  , i = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""),
                e = 0; e < i; e += 1)
                    "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], DashProperty),
        GradientProperty.prototype.comparePoints = function(t, e) {
            for (var i = 0, r = this.o.length / 2; i < r; ) {
                if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01)
                    return !1;
                i += 1
            }
            return !0
        }
        ,
        GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4)
                return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                        return !1;
                    t += 1
                }
            else if (!this.comparePoints(this.data.k.k, this.data.p))
                return !1;
            return !0
        }
        ,
        GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(),
            this._mdf = !1,
            this._cmdf = !1,
            this._omdf = !1,
            this.prop._mdf || t) {
                var e, i, r, n = 4 * this.data.p;
                for (e = 0; e < n; e += 1)
                    i = e % 4 == 0 ? 100 : 255,
                    r = Math.round(this.prop.v[e] * i),
                    this.c[e] !== r && (this.c[e] = r,
                    this._cmdf = !t);
                if (this.o.length)
                    for (n = this.prop.v.length,
                    e = 4 * this.data.p; e < n; e += 1)
                        i = e % 2 == 0 ? 100 : 1,
                        r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                        this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r,
                        this._omdf = !t);
                this._mdf = !t
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function(t, e, i, r) {
            if (0 === e)
                return "";
            var n, o = t.o, s = t.i, a = t.v, l = " M" + r.applyToPointStringified(a[0][0], a[0][1]);
            for (n = 1; n < e; n += 1)
                l += " C" + r.applyToPointStringified(o[n - 1][0], o[n - 1][1]) + " " + r.applyToPointStringified(s[n][0], s[n][1]) + " " + r.applyToPointStringified(a[n][0], a[n][1]);
            return i && e && (l += " C" + r.applyToPointStringified(o[n - 1][0], o[n - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]),
            l += "z"),
            l
        }
          , audioControllerFactory = function() {
            function t(t) {
                this.audios = [],
                this.audioFactory = t,
                this._volume = 1,
                this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                    this.audios.push(t)
                },
                pause: function() {
                    var t, e = this.audios.length;
                    for (t = 0; t < e; t += 1)
                        this.audios[t].pause()
                },
                resume: function() {
                    var t, e = this.audios.length;
                    for (t = 0; t < e; t += 1)
                        this.audios[t].resume()
                },
                setRate: function(t) {
                    var e, i = this.audios.length;
                    for (e = 0; e < i; e += 1)
                        this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                    return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                        src: [t]
                    }) : {
                        isPlaying: !1,
                        play: function() {
                            this.isPlaying = !0
                        },
                        seek: function() {
                            this.isPlaying = !1
                        },
                        playing: function() {},
                        rate: function() {},
                        setVolume: function() {}
                    }
                },
                setAudioFactory: function(t) {
                    this.audioFactory = t
                },
                setVolume: function(t) {
                    this._volume = t,
                    this._updateVolume()
                },
                mute: function() {
                    this._isMuted = !0,
                    this._updateVolume()
                },
                unmute: function() {
                    this._isMuted = !1,
                    this._updateVolume()
                },
                getVolume: function() {
                    return this._volume
                },
                _updateVolume: function() {
                    var t, e = this.audios.length;
                    for (t = 0; t < e; t += 1)
                        this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
            },
            function() {
                return new t
            }
        }()
          , ImagePreloader = function() {
            var t = function() {
                var t = createTag("canvas");
                t.width = 1,
                t.height = 1;
                var e = t.getContext("2d");
                return e.fillStyle = "rgba(0,0,0,0)",
                e.fillRect(0, 0, 1, 1),
                t
            }();
            function e() {
                this.loadedAssets += 1,
                this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }
            function i(t, e, i) {
                var r = "";
                if (t.e)
                    r = t.p;
                else if (e) {
                    var n = t.p;
                    -1 !== n.indexOf("images/") && (n = n.split("/")[1]),
                    r = e + n
                } else
                    r = i,
                    r += t.u ? t.u : "",
                    r += t.p;
                return r
            }
            function r(t) {
                var e = 0
                  , i = setInterval(function() {
                    (t.getBBox().width || e > 500) && (this._imageLoaded(),
                    clearInterval(i)),
                    e += 1
                }
                .bind(this), 50)
            }
            function n() {
                this._imageLoaded = e.bind(this),
                this.testImageLoaded = r.bind(this),
                this.assetsPath = "",
                this.path = "",
                this.totalImages = 0,
                this.loadedAssets = 0,
                this.imagesLoadedCb = null,
                this.images = []
            }
            return n.prototype = {
                loadAssets: function(t, e) {
                    var i;
                    this.imagesLoadedCb = e;
                    var r = t.length;
                    for (i = 0; i < r; i += 1)
                        t[i].layers || (this.totalImages += 1,
                        this.images.push(this._createImageData(t[i])))
                },
                setAssetsPath: function(t) {
                    this.assetsPath = t || ""
                },
                setPath: function(t) {
                    this.path = t || ""
                },
                loaded: function() {
                    return this.totalImages === this.loadedAssets
                },
                destroy: function() {
                    this.imagesLoadedCb = null,
                    this.images.length = 0
                },
                getImage: function(t) {
                    for (var e = 0, i = this.images.length; e < i; ) {
                        if (this.images[e].assetData === t)
                            return this.images[e].img;
                        e += 1
                    }
                    return null
                },
                createImgData: function(e) {
                    var r = i(e, this.assetsPath, this.path)
                      , n = createTag("img");
                    n.crossOrigin = "anonymous",
                    n.addEventListener("load", this._imageLoaded, !1),
                    n.addEventListener("error", function() {
                        o.img = t,
                        this._imageLoaded()
                    }
                    .bind(this), !1),
                    n.src = r;
                    var o = {
                        img: n,
                        assetData: e
                    };
                    return o
                },
                createImageData: function(e) {
                    var r = i(e, this.assetsPath, this.path)
                      , n = createNS("image");
                    isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1),
                    n.addEventListener("error", function() {
                        o.img = t,
                        this._imageLoaded()
                    }
                    .bind(this), !1),
                    n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                    this._elementHelper.append(n);
                    var o = {
                        img: n,
                        assetData: e
                    };
                    return o
                },
                imageLoaded: e,
                setCacheType: function(t, e) {
                    "svg" === t ? (this._elementHelper = e,
                    this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                }
            },
            n
        }()
          , featureSupport = function() {
            var t = {
                maskType: !0
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
            t
        }()
          , filtersFactory = function() {
            var t = {};
            return t.createFilter = function(t) {
                var e = createNS("filter");
                return e.setAttribute("id", t),
                e.setAttribute("filterUnits", "objectBoundingBox"),
                e.setAttribute("x", "0%"),
                e.setAttribute("y", "0%"),
                e.setAttribute("width", "100%"),
                e.setAttribute("height", "100%"),
                e
            }
            ,
            t.createAlphaToLuminanceFilter = function() {
                var t = createNS("feColorMatrix");
                return t.setAttribute("type", "matrix"),
                t.setAttribute("color-interpolation-filters", "sRGB"),
                t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                t
            }
            ,
            t
        }()
          , assetLoader = function() {
            function t(t) {
                return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
            }
            return {
                load: function(e, i, r) {
                    var n, o = new XMLHttpRequest;
                    o.open("GET", e, !0);
                    try {
                        o.responseType = "json"
                    } catch (t) {}
                    o.send(),
                    o.onreadystatechange = function() {
                        if (4 === o.readyState)
                            if (200 === o.status)
                                n = t(o),
                                i(n);
                            else
                                try {
                                    n = t(o),
                                    i(n)
                                } catch (t) {
                                    r && r(t)
                                }
                    }
                }
            }
        }();
        function TextAnimatorProperty(t, e, i) {
            this._isFirstFrame = !0,
            this._hasMaskedPath = !1,
            this._frameId = -1,
            this._textData = t,
            this._renderType = e,
            this._elem = i,
            this._animatorsData = createSizedArray(this._textData.a.length),
            this._pathData = {},
            this._moreOptions = {
                alignment: {}
            },
            this.renderedLetters = [],
            this.lettersChangedFlag = !1,
            this.initDynamicPropertyContainer(i)
        }
        function TextAnimatorDataProperty(t, e, i) {
            var r = {
                propType: !1
            }
              , n = PropertyFactory.getProp
              , o = e.a;
            this.a = {
                r: o.r ? n(t, o.r, 0, degToRads, i) : r,
                rx: o.rx ? n(t, o.rx, 0, degToRads, i) : r,
                ry: o.ry ? n(t, o.ry, 0, degToRads, i) : r,
                sk: o.sk ? n(t, o.sk, 0, degToRads, i) : r,
                sa: o.sa ? n(t, o.sa, 0, degToRads, i) : r,
                s: o.s ? n(t, o.s, 1, .01, i) : r,
                a: o.a ? n(t, o.a, 1, 0, i) : r,
                o: o.o ? n(t, o.o, 0, .01, i) : r,
                p: o.p ? n(t, o.p, 1, 0, i) : r,
                sw: o.sw ? n(t, o.sw, 0, 0, i) : r,
                sc: o.sc ? n(t, o.sc, 1, 0, i) : r,
                fc: o.fc ? n(t, o.fc, 1, 0, i) : r,
                fh: o.fh ? n(t, o.fh, 0, 0, i) : r,
                fs: o.fs ? n(t, o.fs, 0, .01, i) : r,
                fb: o.fb ? n(t, o.fb, 0, .01, i) : r,
                t: o.t ? n(t, o.t, 0, 0, i) : r
            },
            this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i),
            this.s.t = e.s.t
        }
        function LetterProps(t, e, i, r, n, o) {
            this.o = t,
            this.sw = e,
            this.sc = i,
            this.fc = r,
            this.m = n,
            this.p = o,
            this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!i,
                fc: !!r,
                m: !0,
                p: !0
            }
        }
        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame,
            this.pv = "",
            this.v = "",
            this.kf = !1,
            this._isFirstFrame = !0,
            this._mdf = !1,
            this.data = e,
            this.elem = t,
            this.comp = this.elem.comp,
            this.keysIndex = 0,
            this.canResize = !1,
            this.minimumFontSize = 1,
            this.effectsSequence = [],
            this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            },
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, i = this._textData.a.length, r = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1)
                e = this._textData.a[t],
                this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,e,this);
            this._textData.p && "m"in this._textData.p ? (this._pathData = {
                f: r(this._elem, this._textData.p.f, 0, 0, this),
                l: r(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            },
            this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
            this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
        }
        ,
        TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e,
            this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var i, r, n, o, s, a, l, h, c, u, p, f, d, m, y, g, v, b, w, S = this._moreOptions.alignment.v, x = this._animatorsData, _ = this._textData, E = this.mHelper, k = this._renderType, P = this.renderedLetters.length, A = t.l;
                if (this._hasMaskedPath) {
                    if (w = this._pathData.m,
                    !this._pathData.n || this._pathData._mdf) {
                        var T, C = w.v;
                        for (this._pathData.r && (C = C.reverse()),
                        s = {
                            tLength: 0,
                            segments: []
                        },
                        o = C._length - 1,
                        g = 0,
                        n = 0; n < o; n += 1)
                            T = bez.buildBezierData(C.v[n], C.v[n + 1], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[n + 1][0] - C.v[n + 1][0], C.i[n + 1][1] - C.v[n + 1][1]]),
                            s.tLength += T.segmentLength,
                            s.segments.push(T),
                            g += T.segmentLength;
                        n = o,
                        w.v.c && (T = bez.buildBezierData(C.v[n], C.v[0], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]),
                        s.tLength += T.segmentLength,
                        s.segments.push(T),
                        g += T.segmentLength),
                        this._pathData.pi = s
                    }
                    if (s = this._pathData.pi,
                    a = this._pathData.f.v,
                    p = 0,
                    u = 1,
                    h = 0,
                    c = !0,
                    m = s.segments,
                    a < 0 && w.v.c)
                        for (s.tLength < Math.abs(a) && (a = -Math.abs(a) % s.tLength),
                        u = (d = m[p = m.length - 1].points).length - 1; a < 0; )
                            a += d[u].partialLength,
                            (u -= 1) < 0 && (u = (d = m[p -= 1].points).length - 1);
                    f = (d = m[p].points)[u - 1],
                    y = (l = d[u]).partialLength
                }
                o = A.length,
                i = 0,
                r = 0;
                var M, D, L, O, F, I = 1.2 * t.finalSize * .714, R = !0;
                L = x.length;
                var B, V, j, q, z, N, H, G, W, Y, X, U, K = -1, $ = a, Q = p, Z = u, J = -1, tt = "", et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var it = 0
                      , rt = 0
                      , nt = 2 === t.j ? -.5 : -1
                      , ot = 0
                      , st = !0;
                    for (n = 0; n < o; n += 1)
                        if (A[n].n) {
                            for (it && (it += rt); ot < n; )
                                A[ot].animatorJustifyOffset = it,
                                ot += 1;
                            it = 0,
                            st = !0
                        } else {
                            for (D = 0; D < L; D += 1)
                                (M = x[D].a).t.propType && (st && 2 === t.j && (rt += M.t.v * nt),
                                (F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars)).length ? it += M.t.v * F[0] * nt : it += M.t.v * F * nt);
                            st = !1
                        }
                    for (it && (it += rt); ot < n; )
                        A[ot].animatorJustifyOffset = it,
                        ot += 1
                }
                for (n = 0; n < o; n += 1) {
                    if (E.reset(),
                    q = 1,
                    A[n].n)
                        i = 0,
                        r += t.yOffset,
                        r += R ? 1 : 0,
                        a = $,
                        R = !1,
                        this._hasMaskedPath && (u = Z,
                        f = (d = m[p = Q].points)[u - 1],
                        y = (l = d[u]).partialLength,
                        h = 0),
                        tt = "",
                        X = "",
                        W = "",
                        U = "",
                        et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (J !== A[n].line) {
                                switch (t.j) {
                                case 1:
                                    a += g - t.lineWidths[A[n].line];
                                    break;
                                case 2:
                                    a += (g - t.lineWidths[A[n].line]) / 2
                                }
                                J = A[n].line
                            }
                            K !== A[n].ind && (A[K] && (a += A[K].extra),
                            a += A[n].an / 2,
                            K = A[n].ind),
                            a += S[0] * A[n].an * .005;
                            var at = 0;
                            for (D = 0; D < L; D += 1)
                                (M = x[D].a).p.propType && ((F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars)).length ? at += M.p.v[0] * F[0] : at += M.p.v[0] * F),
                                M.a.propType && ((F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars)).length ? at += M.a.v[0] * F[0] : at += M.a.v[0] * F);
                            for (c = !0; c; )
                                h + y >= a + at || !d ? (v = (a + at - h) / l.partialLength,
                                V = f.point[0] + (l.point[0] - f.point[0]) * v,
                                j = f.point[1] + (l.point[1] - f.point[1]) * v,
                                E.translate(-S[0] * A[n].an * .005, -S[1] * I * .01),
                                c = !1) : d && (h += l.partialLength,
                                (u += 1) >= d.length && (u = 0,
                                m[p += 1] ? d = m[p].points : w.v.c ? (u = 0,
                                d = m[p = 0].points) : (h -= l.partialLength,
                                d = null)),
                                d && (f = l,
                                y = (l = d[u]).partialLength));
                            B = A[n].an / 2 - A[n].add,
                            E.translate(-B, 0, 0)
                        } else
                            B = A[n].an / 2 - A[n].add,
                            E.translate(-B, 0, 0),
                            E.translate(-S[0] * A[n].an * .005, -S[1] * I * .01, 0);
                        for (D = 0; D < L; D += 1)
                            (M = x[D].a).t.propType && (F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars),
                            0 === i && 0 === t.j || (this._hasMaskedPath ? F.length ? a += M.t.v * F[0] : a += M.t.v * F : F.length ? i += M.t.v * F[0] : i += M.t.v * F));
                        for (t.strokeWidthAnim && (N = t.sw || 0),
                        t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                        t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]),
                        D = 0; D < L; D += 1)
                            (M = x[D].a).a.propType && ((F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars)).length ? E.translate(-M.a.v[0] * F[0], -M.a.v[1] * F[1], M.a.v[2] * F[2]) : E.translate(-M.a.v[0] * F, -M.a.v[1] * F, M.a.v[2] * F));
                        for (D = 0; D < L; D += 1)
                            (M = x[D].a).s.propType && ((F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars)).length ? E.scale(1 + (M.s.v[0] - 1) * F[0], 1 + (M.s.v[1] - 1) * F[1], 1) : E.scale(1 + (M.s.v[0] - 1) * F, 1 + (M.s.v[1] - 1) * F, 1));
                        for (D = 0; D < L; D += 1) {
                            if (M = x[D].a,
                            F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars),
                            M.sk.propType && (F.length ? E.skewFromAxis(-M.sk.v * F[0], M.sa.v * F[1]) : E.skewFromAxis(-M.sk.v * F, M.sa.v * F)),
                            M.r.propType && (F.length ? E.rotateZ(-M.r.v * F[2]) : E.rotateZ(-M.r.v * F)),
                            M.ry.propType && (F.length ? E.rotateY(M.ry.v * F[1]) : E.rotateY(M.ry.v * F)),
                            M.rx.propType && (F.length ? E.rotateX(M.rx.v * F[0]) : E.rotateX(M.rx.v * F)),
                            M.o.propType && (F.length ? q += (M.o.v * F[0] - q) * F[0] : q += (M.o.v * F - q) * F),
                            t.strokeWidthAnim && M.sw.propType && (F.length ? N += M.sw.v * F[0] : N += M.sw.v * F),
                            t.strokeColorAnim && M.sc.propType)
                                for (G = 0; G < 3; G += 1)
                                    F.length ? z[G] += (M.sc.v[G] - z[G]) * F[0] : z[G] += (M.sc.v[G] - z[G]) * F;
                            if (t.fillColorAnim && t.fc) {
                                if (M.fc.propType)
                                    for (G = 0; G < 3; G += 1)
                                        F.length ? H[G] += (M.fc.v[G] - H[G]) * F[0] : H[G] += (M.fc.v[G] - H[G]) * F;
                                M.fh.propType && (H = F.length ? addHueToRGB(H, M.fh.v * F[0]) : addHueToRGB(H, M.fh.v * F)),
                                M.fs.propType && (H = F.length ? addSaturationToRGB(H, M.fs.v * F[0]) : addSaturationToRGB(H, M.fs.v * F)),
                                M.fb.propType && (H = F.length ? addBrightnessToRGB(H, M.fb.v * F[0]) : addBrightnessToRGB(H, M.fb.v * F))
                            }
                        }
                        for (D = 0; D < L; D += 1)
                            (M = x[D].a).p.propType && (F = x[D].s.getMult(A[n].anIndexes[D], _.a[D].s.totalChars),
                            this._hasMaskedPath ? F.length ? E.translate(0, M.p.v[1] * F[0], -M.p.v[2] * F[1]) : E.translate(0, M.p.v[1] * F, -M.p.v[2] * F) : F.length ? E.translate(M.p.v[0] * F[0], M.p.v[1] * F[1], -M.p.v[2] * F[2]) : E.translate(M.p.v[0] * F, M.p.v[1] * F, -M.p.v[2] * F));
                        if (t.strokeWidthAnim && (W = N < 0 ? 0 : N),
                        t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"),
                        t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"),
                        this._hasMaskedPath) {
                            if (E.translate(0, -t.ls),
                            E.translate(0, S[1] * I * .01 + r, 0),
                            _.p.p) {
                                b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                                var lt = 180 * Math.atan(b) / Math.PI;
                                l.point[0] < f.point[0] && (lt += 180),
                                E.rotate(-lt * Math.PI / 180)
                            }
                            E.translate(V, j, 0),
                            a -= S[0] * A[n].an * .005,
                            A[n + 1] && K !== A[n + 1].ind && (a += A[n].an / 2,
                            a += .001 * t.tr * t.finalSize)
                        } else {
                            switch (E.translate(i, r, 0),
                            t.ps && E.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                            t.j) {
                            case 1:
                                E.translate(A[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[n].line]), 0, 0);
                                break;
                            case 2:
                                E.translate(A[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[n].line]) / 2, 0, 0)
                            }
                            E.translate(0, -t.ls),
                            E.translate(B, 0, 0),
                            E.translate(S[0] * A[n].an * .005, S[1] * I * .01, 0),
                            i += A[n].l + .001 * t.tr * t.finalSize
                        }
                        "html" === k ? tt = E.toCSS() : "svg" === k ? tt = E.to2dCSS() : et = [E.props[0], E.props[1], E.props[2], E.props[3], E.props[4], E.props[5], E.props[6], E.props[7], E.props[8], E.props[9], E.props[10], E.props[11], E.props[12], E.props[13], E.props[14], E.props[15]],
                        U = q
                    }
                    P <= n ? (O = new LetterProps(U,W,Y,X,tt,et),
                    this.renderedLetters.push(O),
                    P += 1,
                    this.lettersChangedFlag = !0) : (O = this.renderedLetters[n],
                    this.lettersChangedFlag = O.update(U, W, Y, X, tt, et) || this.lettersChangedFlag)
                }
            }
        }
        ,
        TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
            this.iterateDynamicProperties())
        }
        ,
        TextAnimatorProperty.prototype.mHelper = new Matrix,
        TextAnimatorProperty.prototype.defaultPropsArray = [],
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
        LetterProps.prototype.update = function(t, e, i, r, n, o) {
            this._mdf.o = !1,
            this._mdf.sw = !1,
            this._mdf.sc = !1,
            this._mdf.fc = !1,
            this._mdf.m = !1,
            this._mdf.p = !1;
            var s = !1;
            return this.o !== t && (this.o = t,
            this._mdf.o = !0,
            s = !0),
            this.sw !== e && (this.sw = e,
            this._mdf.sw = !0,
            s = !0),
            this.sc !== i && (this.sc = i,
            this._mdf.sc = !0,
            s = !0),
            this.fc !== r && (this.fc = r,
            this._mdf.fc = !0,
            s = !0),
            this.m !== n && (this.m = n,
            this._mdf.m = !0,
            s = !0),
            !o.length || this.p[0] === o[0] && this.p[1] === o[1] && this.p[4] === o[4] && this.p[5] === o[5] && this.p[12] === o[12] && this.p[13] === o[13] || (this.p = o,
            this._mdf.p = !0,
            s = !0),
            s
        }
        ,
        TextProperty.prototype.defaultBoxWidth = [0, 0],
        TextProperty.prototype.copyData = function(t, e) {
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        ,
        TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t),
            this.currentData = t,
            this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
            this._mdf = !0
        }
        ,
        TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }
        ,
        TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1,
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
        }
        ,
        TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData
                  , i = this.keysIndex;
                if (this.lock)
                    this.setCurrentData(this.currentData);
                else {
                    var r;
                    this.lock = !0,
                    this._mdf = !1;
                    var n = this.effectsSequence.length
                      , o = t || this.data.d.k[this.keysIndex].s;
                    for (r = 0; r < n; r += 1)
                        o = i !== this.keysIndex ? this.effectsSequence[r](o, o.t) : this.effectsSequence[r](this.currentData, o.t);
                    e !== o && this.setCurrentData(o),
                    this.v = this.currentData,
                    this.pv = this.v,
                    this.lock = !1,
                    this.frameId = this.elem.globalData.frameId
                }
            }
        }
        ,
        TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e); )
                i += 1;
            return this.keysIndex !== i && (this.keysIndex = i),
            this.data.d.k[this.keysIndex].s
        }
        ,
        TextProperty.prototype.buildFinalText = function(t) {
            for (var e, i = FontManager.getCombinedCharacterCodes(), r = [], n = 0, o = t.length; n < o; )
                e = t.charCodeAt(n),
                -1 !== i.indexOf(e) ? r[r.length - 1] += t.charAt(n) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(n + 1)) >= 56320 && e <= 57343 ? (r.push(t.substr(n, 2)),
                n += 1) : r.push(t.charAt(n)),
                n += 1;
            return r
        }
        ,
        TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e, i, r, n, o, s, a, l = this.elem.globalData.fontManager, h = this.data, c = [], u = 0, p = h.m.g, f = 0, d = 0, m = 0, y = [], g = 0, v = 0, b = l.getFontByName(t.f), w = 0, S = getFontProperties(b);
            t.fWeight = S.weight,
            t.fStyle = S.style,
            t.finalSize = t.s,
            t.finalText = this.buildFinalText(t.t),
            i = t.finalText.length,
            t.finalLineHeight = t.lh;
            var x, _ = t.tr / 1e3 * t.finalSize;
            if (t.sz)
                for (var E, k, P = !0, A = t.sz[0], T = t.sz[1]; P; ) {
                    E = 0,
                    g = 0,
                    i = (k = this.buildFinalText(t.t)).length,
                    _ = t.tr / 1e3 * t.finalSize;
                    var C = -1;
                    for (e = 0; e < i; e += 1)
                        x = k[e].charCodeAt(0),
                        r = !1,
                        " " === k[e] ? C = e : 13 !== x && 3 !== x || (g = 0,
                        r = !0,
                        E += t.finalLineHeight || 1.2 * t.finalSize),
                        l.chars ? (a = l.getCharData(k[e], b.fStyle, b.fFamily),
                        w = r ? 0 : a.w * t.finalSize / 100) : w = l.measureText(k[e], t.f, t.finalSize),
                        g + w > A && " " !== k[e] ? (-1 === C ? i += 1 : e = C,
                        E += t.finalLineHeight || 1.2 * t.finalSize,
                        k.splice(e, C === e ? 1 : 0, "\r"),
                        C = -1,
                        g = 0) : (g += w,
                        g += _);
                    E += b.ascent * t.finalSize / 100,
                    this.canResize && t.finalSize > this.minimumFontSize && T < E ? (t.finalSize -= 1,
                    t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = k,
                    i = t.finalText.length,
                    P = !1)
                }
            g = -_,
            w = 0;
            var M, D = 0;
            for (e = 0; e < i; e += 1)
                if (r = !1,
                13 === (x = (M = t.finalText[e]).charCodeAt(0)) || 3 === x ? (D = 0,
                y.push(g),
                v = g > v ? g : v,
                g = -2 * _,
                n = "",
                r = !0,
                m += 1) : n = M,
                l.chars ? (a = l.getCharData(M, b.fStyle, l.getFontByName(t.f).fFamily),
                w = r ? 0 : a.w * t.finalSize / 100) : w = l.measureText(n, t.f, t.finalSize),
                " " === M ? D += w + _ : (g += w + _ + D,
                D = 0),
                c.push({
                    l: w,
                    an: w,
                    add: f,
                    n: r,
                    anIndexes: [],
                    val: n,
                    line: m,
                    animatorJustifyOffset: 0
                }),
                2 == p) {
                    if (f += w,
                    "" === n || " " === n || e === i - 1) {
                        for ("" !== n && " " !== n || (f -= w); d <= e; )
                            c[d].an = f,
                            c[d].ind = u,
                            c[d].extra = w,
                            d += 1;
                        u += 1,
                        f = 0
                    }
                } else if (3 == p) {
                    if (f += w,
                    "" === n || e === i - 1) {
                        for ("" === n && (f -= w); d <= e; )
                            c[d].an = f,
                            c[d].ind = u,
                            c[d].extra = w,
                            d += 1;
                        f = 0,
                        u += 1
                    }
                } else
                    c[u].ind = u,
                    c[u].extra = 0,
                    u += 1;
            if (t.l = c,
            v = g > v ? g : v,
            y.push(g),
            t.sz)
                t.boxWidth = t.sz[0],
                t.justifyOffset = 0;
            else
                switch (t.boxWidth = v,
                t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
                }
            t.lineWidths = y;
            var L, O, F, I, R = h.a;
            s = R.length;
            var B = [];
            for (o = 0; o < s; o += 1) {
                for ((L = R[o]).a.sc && (t.strokeColorAnim = !0),
                L.a.sw && (t.strokeWidthAnim = !0),
                (L.a.fc || L.a.fh || L.a.fs || L.a.fb) && (t.fillColorAnim = !0),
                I = 0,
                F = L.s.b,
                e = 0; e < i; e += 1)
                    (O = c[e]).anIndexes[o] = I,
                    (1 == F && "" !== O.val || 2 == F && "" !== O.val && " " !== O.val || 3 == F && (O.n || " " == O.val || e == i - 1) || 4 == F && (O.n || e == i - 1)) && (1 === L.s.rn && B.push(I),
                    I += 1);
                h.a[o].s.totalChars = I;
                var V, j = -1;
                if (1 === L.s.rn)
                    for (e = 0; e < i; e += 1)
                        j != (O = c[e]).anIndexes[o] && (j = O.anIndexes[o],
                        V = B.splice(Math.floor(Math.random() * B.length), 1)[0]),
                        O.anIndexes[o] = V
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
            t.ls = t.ls || 0,
            t.ascent = b.ascent * t.finalSize / 100
        }
        ,
        TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s);
            i = this.copyData(i, t),
            this.data.d.k[e].s = i,
            this.recalculate(e),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1,
            this.keysIndex = 0,
            this._isFirstFrame = !0,
            this.getValue(e)
        }
        ,
        TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t,
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1,
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this)
        }
        ;
        var TextSelectorProp = function() {
            var t = Math.max
              , e = Math.min
              , i = Math.floor;
            function r(t, e) {
                this._currentTextLength = -1,
                this.k = !1,
                this.data = e,
                this.elem = t,
                this.comp = t.comp,
                this.finalS = 0,
                this.finalE = 0,
                this.initDynamicPropertyContainer(t),
                this.s = PropertyFactory.getProp(t, e.s || {
                    k: 0
                }, 0, 0, this),
                this.e = "e"in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                    v: 100
                },
                this.o = PropertyFactory.getProp(t, e.o || {
                    k: 0
                }, 0, 0, this),
                this.xe = PropertyFactory.getProp(t, e.xe || {
                    k: 0
                }, 0, 0, this),
                this.ne = PropertyFactory.getProp(t, e.ne || {
                    k: 0
                }, 0, 0, this),
                this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
                this.dynamicProperties.length || this.getValue()
            }
            return r.prototype = {
                getMult: function(r) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0
                      , o = 0
                      , s = 1
                      , a = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : o = -this.ne.v / 100,
                    this.xe.v > 0 ? s = 1 - this.xe.v / 100 : a = 1 + this.xe.v / 100;
                    var l = BezierFactory.getBezierEasing(n, o, s, a).get
                      , h = 0
                      , c = this.finalS
                      , u = this.finalE
                      , p = this.data.sh;
                    if (2 === p)
                        h = l(h = u === c ? r >= u ? 1 : 0 : t(0, e(.5 / (u - c) + (r - c) / (u - c), 1)));
                    else if (3 === p)
                        h = l(h = u === c ? r >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - c) + (r - c) / (u - c), 1)));
                    else if (4 === p)
                        u === c ? h = 0 : (h = t(0, e(.5 / (u - c) + (r - c) / (u - c), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5),
                        h = l(h);
                    else if (5 === p) {
                        if (u === c)
                            h = 0;
                        else {
                            var f = u - c
                              , d = -f / 2 + (r = e(t(0, r + .5 - c), u - c))
                              , m = f / 2;
                            h = Math.sqrt(1 - d * d / (m * m))
                        }
                        h = l(h)
                    } else
                        6 === p ? (u === c ? h = 0 : (r = e(t(0, r + .5 - c), u - c),
                        h = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (u - c))) / 2),
                        h = l(h)) : (r >= i(c) && (h = t(0, e(r - c < 0 ? e(u, 1) - (c - r) : u - r, 1))),
                        h = l(h));
                    return h * this.a.v
                },
                getValue: function(t) {
                    this.iterateDynamicProperties(),
                    this._mdf = t || this._mdf,
                    this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                    t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars
                      , i = this.o.v / e
                      , r = this.s.v / e + i
                      , n = this.e.v / e + i;
                    if (r > n) {
                        var o = r;
                        r = n,
                        n = o
                    }
                    this.finalS = r,
                    this.finalE = n
                }
            },
            extendPrototype([DynamicPropertyContainer], r),
            {
                getTextSelectorProp: function(t, e, i) {
                    return new r(t,e,i)
                }
            }
        }(), poolFactory = function(t, e, i) {
            var r = 0
              , n = t
              , o = createSizedArray(n);
            return {
                newElement: function() {
                    return r ? o[r -= 1] : e()
                },
                release: function(t) {
                    r === n && (o = pooling.double(o),
                    n *= 2),
                    i && i(t),
                    o[r] = t,
                    r += 1
                }
            }
        }, pooling = {
            double: function(t) {
                return t.concat(createSizedArray(t.length))
            }
        }, pointPool = poolFactory(8, (function() {
            return createTypedArray("float32", 2)
        }
        )), shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
        }
        ), (function(t) {
            var e, i = t._length;
            for (e = 0; e < i; e += 1)
                pointPool.release(t.v[e]),
                pointPool.release(t.i[e]),
                pointPool.release(t.o[e]),
                t.v[e] = null,
                t.i[e] = null,
                t.o[e] = null;
            t._length = 0,
            t.c = !1
        }
        )),
        factory.clone = function(t) {
            var e, i = factory.newElement(), r = void 0 === t._length ? t.v.length : t._length;
            for (i.setLength(r),
            i.c = t.c,
            e = 0; e < r; e += 1)
                i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return i
        }
        ,
        factory), factory, shapeCollectionPool = function() {
            var t = {
                newShapeCollection: function() {
                    var t;
                    t = e ? r[e -= 1] : new ShapeCollection;
                    return t
                },
                release: function(t) {
                    var n, o = t._length;
                    for (n = 0; n < o; n += 1)
                        shapePool.release(t.shapes[n]);
                    t._length = 0,
                    e === i && (r = pooling.double(r),
                    i *= 2);
                    r[e] = t,
                    e += 1
                }
            }
              , e = 0
              , i = 4
              , r = createSizedArray(i);
            return t
        }(), segmentsLengthPool = poolFactory(8, (function() {
            return {
                lengths: [],
                totalLength: 0
            }
        }
        ), (function(t) {
            var e, i = t.lengths.length;
            for (e = 0; e < i; e += 1)
                bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
        }
        )), bezierLengthPool = poolFactory(8, (function() {
            return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments)
            }
        }
        ));
        function BaseRenderer() {}
        function SVGRenderer(t, e) {
            this.animationItem = t,
            this.layers = null,
            this.renderedFrame = -1,
            this.svgElement = createNS("svg");
            var i = "";
            if (e && e.title) {
                var r = createNS("title")
                  , n = createElementID();
                r.setAttribute("id", n),
                r.textContent = e.title,
                this.svgElement.appendChild(r),
                i += n
            }
            if (e && e.description) {
                var o = createNS("desc")
                  , s = createElementID();
                o.setAttribute("id", s),
                o.textContent = e.description,
                this.svgElement.appendChild(o),
                i += " " + s
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var a = createNS("defs");
            this.svgElement.appendChild(a);
            var l = createNS("g");
            this.svgElement.appendChild(l),
            this.layerElement = l,
            this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                }
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: a,
                renderConfig: this.renderConfig
            },
            this.elements = [],
            this.pendingElements = [],
            this.destroyed = !1,
            this.rendererType = "svg"
        }
        function CanvasRenderer(t, e) {
            this.animationItem = t,
            this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                className: e && e.className || "",
                id: e && e.id || ""
            },
            this.renderConfig.dpr = e && e.dpr || 1,
            this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
            this.renderedFrame = -1,
            this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            },
            this.contextData = new CVContextData,
            this.elements = [],
            this.pendingElements = [],
            this.transformMat = new Matrix,
            this.completeLayers = !1,
            this.rendererType = "canvas"
        }
        function HybridRenderer(t, e) {
            this.animationItem = t,
            this.layers = null,
            this.renderedFrame = -1,
            this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            },
            this.pendingElements = [],
            this.elements = [],
            this.threeDElements = [],
            this.destroyed = !1,
            this.camera = null,
            this.supports3d = !0,
            this.rendererType = "html"
        }
        function MaskElement(t, e, i) {
            this.data = t,
            this.element = e,
            this.globalData = i,
            this.storedData = [],
            this.masksProperties = this.data.masksProperties || [],
            this.maskElement = null;
            var r, n, o = this.globalData.defs, s = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(s),
            this.solidPath = "";
            var a, l, h, c, u, p, f = this.masksProperties, d = 0, m = [], y = createElementID(), g = "clipPath", v = "clip-path";
            for (r = 0; r < s; r += 1)
                if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (g = "mask",
                v = "mask"),
                "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"),
                h.setAttribute("width", this.element.comp.data.w || 0),
                h.setAttribute("height", this.element.comp.data.h || 0),
                m.push(h)),
                n = createNS("path"),
                "n" === f[r].mode)
                    this.viewData[r] = {
                        op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                        elem: n,
                        lastPath: ""
                    },
                    o.appendChild(n);
                else {
                    var b;
                    if (d += 1,
                    n.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"),
                    n.setAttribute("clip-rule", "nonzero"),
                    0 !== f[r].x.k ? (g = "mask",
                    v = "mask",
                    p = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element),
                    b = createElementID(),
                    (c = createNS("filter")).setAttribute("id", b),
                    (u = createNS("feMorphology")).setAttribute("operator", "erode"),
                    u.setAttribute("in", "SourceGraphic"),
                    u.setAttribute("radius", "0"),
                    c.appendChild(u),
                    o.appendChild(c),
                    n.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (u = null,
                    p = null),
                    this.storedData[r] = {
                        elem: n,
                        x: p,
                        expan: u,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                    },
                    "i" === f[r].mode) {
                        l = m.length;
                        var w = createNS("g");
                        for (a = 0; a < l; a += 1)
                            w.appendChild(m[a]);
                        var S = createNS("mask");
                        S.setAttribute("mask-type", "alpha"),
                        S.setAttribute("id", y + "_" + d),
                        S.appendChild(n),
                        o.appendChild(S),
                        w.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"),
                        m.length = 0,
                        m.push(w)
                    } else
                        m.push(n);
                    f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                    this.viewData[r] = {
                        elem: n,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                        invRect: h
                    },
                    this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
                }
            for (this.maskElement = createNS(g),
            s = m.length,
            r = 0; r < s; r += 1)
                this.maskElement.appendChild(m[r]);
            d > 0 && (this.maskElement.setAttribute("id", y),
            this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"),
            o.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this)
        }
        function HierarchyElement() {}
        function FrameElement() {}
        function TransformElement() {}
        function RenderableElement() {}
        function RenderableDOMElement() {}
        function ProcessedElement(t, e) {
            this.elem = t,
            this.pos = e
        }
        function SVGStyleData(t, e) {
            this.data = t,
            this.type = t.ty,
            this.d = "",
            this.lvl = e,
            this._mdf = !1,
            this.closed = !0 === t.hd,
            this.pElem = createNS("path"),
            this.msElem = null
        }
        function SVGShapeData(t, e, i) {
            this.caches = [],
            this.styles = [],
            this.transformers = t,
            this.lStr = "",
            this.sh = i,
            this.lvl = e,
            this._isAnimated = !!i.k;
            for (var r = 0, n = t.length; r < n; ) {
                if (t[r].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                r += 1
            }
        }
        function SVGTransformData(t, e, i) {
            this.transform = {
                mProps: t,
                op: e,
                container: i
            },
            this.elements = [],
            this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
            this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
            this.d = new DashProperty(t,e.d || {},"svg",this),
            this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
            this.style = i,
            this._isAnimated = !!this._isAnimated
        }
        function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
            this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
            this.style = i
        }
        function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.initGradientData(t, e, i)
        }
        function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
            this.getValue = this.iterateDynamicProperties,
            this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
            this.d = new DashProperty(t,e.d || {},"svg",this),
            this.initGradientData(t, e, i),
            this._isAnimated = !!this._isAnimated
        }
        function ShapeGroupData() {
            this.it = [],
            this.prevViewData = [],
            this.gr = createNS("g")
        }
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, i, r = this.layers.length;
            for (this.completeLayers = !0,
            e = r - 1; e >= 0; e -= 1)
                this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e),
                this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }
        ,
        BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
            case 2:
                return this.createImage(t);
            case 0:
                return this.createComp(t);
            case 1:
                return this.createSolid(t);
            case 3:
                return this.createNull(t);
            case 4:
                return this.createShape(t);
            case 5:
                return this.createText(t);
            case 6:
                return this.createAudio(t);
            case 13:
                return this.createCamera(t);
            default:
                return this.createNull(t)
            }
        }
        ,
        BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }
        ,
        BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t,this.globalData,this)
        }
        ,
        BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
                this.buildItem(t);
            this.checkPendingElements()
        }
        ,
        BaseRenderer.prototype.includeLayers = function(t) {
            var e;
            this.completeLayers = !1;
            var i, r = t.length, n = this.layers.length;
            for (e = 0; e < r; e += 1)
                for (i = 0; i < n; ) {
                    if (this.layers[i].id === t[e].id) {
                        this.layers[i] = t[e];
                        break
                    }
                    i += 1
                }
        }
        ,
        BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }
        ,
        BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }
        ,
        BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
            for (var r = this.elements, n = this.layers, o = 0, s = n.length; o < s; )
                n[o].ind == e && (r[o] && !0 !== r[o] ? (i.push(r[o]),
                r[o].setAsParent(),
                void 0 !== n[o].parent ? this.buildElementParenting(t, n[o].parent, i) : t.setHierarchy(i)) : (this.buildItem(o),
                this.addPendingElement(t))),
                o += 1
        }
        ,
        BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }
        ,
        BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var r = this.createComp(t[e]);
                    r.initExpressions(),
                    this.globalData.projectInterface.registerComposition(r)
                }
        }
        ,
        BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager,
            this.globalData.fontManager.addChars(t.chars),
            this.globalData.fontManager.addFonts(t.fonts, e),
            this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
            this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
            this.globalData.imageLoader = this.animationItem.imagePreloader,
            this.globalData.audioController = this.animationItem.audioController,
            this.globalData.frameId = 0,
            this.globalData.frameRate = t.fr,
            this.globalData.nm = t.nm,
            this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        }
        ,
        extendPrototype([BaseRenderer], SVGRenderer),
        SVGRenderer.prototype.createNull = function(t) {
            return new NullElement(t,this.globalData,this)
        }
        ,
        SVGRenderer.prototype.createShape = function(t) {
            return new SVGShapeElement(t,this.globalData,this)
        }
        ,
        SVGRenderer.prototype.createText = function(t) {
            return new SVGTextLottieElement(t,this.globalData,this)
        }
        ,
        SVGRenderer.prototype.createImage = function(t) {
            return new IImageElement(t,this.globalData,this)
        }
        ,
        SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t,this.globalData,this)
        }
        ,
        SVGRenderer.prototype.createSolid = function(t) {
            return new ISolidElement(t,this.globalData,this)
        }
        ,
        SVGRenderer.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
            this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
            this.svgElement.setAttribute("height", t.h),
            this.svgElement.style.width = "100%",
            this.svgElement.style.height = "100%",
            this.svgElement.style.transform = "translate3d(0,0,0)"),
            this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
            this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
            void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
            this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
            this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e),
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
            this.data = t;
            var i = createNS("clipPath")
              , r = createNS("rect");
            r.setAttribute("width", t.w),
            r.setAttribute("height", t.h),
            r.setAttribute("x", 0),
            r.setAttribute("y", 0);
            var n = createElementID();
            i.setAttribute("id", n),
            i.appendChild(r),
            this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + n + ")"),
            e.appendChild(i),
            this.layers = t.layers,
            this.elements = createSizedArray(t.layers.length)
        }
        ,
        SVGRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            this.layerElement = null,
            this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0,
            this.destroyed = !0,
            this.animationItem = null
        }
        ,
        SVGRenderer.prototype.updateContainerSize = function() {}
        ,
        SVGRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                e[t] = i,
                expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i),
                i.initExpressions()),
                this.appendElementInPos(i, t),
                this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1),
                this.addPendingElement(i)))
            }
        }
        ,
        SVGRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(),
                t.data.tt)
                    for (var e = 0, i = this.elements.length; e < i; ) {
                        if (this.elements[e] === t) {
                            t.setMatte(this.elements[e - 1].layerId);
                            break
                        }
                        e += 1
                    }
            }
        }
        ,
        SVGRenderer.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t,
                this.globalData.frameNum = t,
                this.globalData.frameId += 1,
                this.globalData.projectInterface.currentFrame = t,
                this.globalData._mdf = !1;
                var i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t),
                e = i - 1; e >= 0; e -= 1)
                    (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < i; e += 1)
                        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }
        ,
        SVGRenderer.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                for (var r, n = 0; n < e; )
                    this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (r = this.elements[n].getBaseElement()),
                    n += 1;
                r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
            }
        }
        ,
        SVGRenderer.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }
        ,
        SVGRenderer.prototype.show = function() {
            this.layerElement.style.display = "block"
        }
        ,
        extendPrototype([BaseRenderer], CanvasRenderer),
        CanvasRenderer.prototype.createShape = function(t) {
            return new CVShapeElement(t,this.globalData,this)
        }
        ,
        CanvasRenderer.prototype.createText = function(t) {
            return new CVTextElement(t,this.globalData,this)
        }
        ,
        CanvasRenderer.prototype.createImage = function(t) {
            return new CVImageElement(t,this.globalData,this)
        }
        ,
        CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t,this.globalData,this)
        }
        ,
        CanvasRenderer.prototype.createSolid = function(t) {
            return new CVSolidElement(t,this.globalData,this)
        }
        ,
        CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
        CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                    this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var i = this.contextData.cTr.props;
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                } else
                    this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }
        ,
        CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas)
                return this.canvasContext.globalAlpha *= t < 0 ? 0 : t,
                void (this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t,
            this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO,
            this.globalData.currentGlobalAlpha = this.contextData.cO)
        }
        ,
        CanvasRenderer.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }
        ,
        CanvasRenderer.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e, i = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var r = this.contextData.saved[this.contextData.cArrPos];
                for (e = 0; e < 16; e += 1)
                    r[e] = i[e];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
                this.contextData.cArrPos += 1
            } else
                this.canvasContext.save()
        }
        ,
        CanvasRenderer.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(),
                this.globalData.blendMode = "source-over"),
                this.contextData.cArrPos -= 1;
                var e, i = this.contextData.saved[this.contextData.cArrPos], r = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1)
                    r[e] = i[e];
                this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]),
                i = this.contextData.savedOp[this.contextData.cArrPos],
                this.contextData.cO = i,
                this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i,
                this.globalData.currentGlobalAlpha = i)
            } else
                this.canvasContext.restore()
        }
        ,
        CanvasRenderer.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%",
                e.height = "100%";
                var i = "0px 0px 0px";
                e.transformOrigin = i,
                e.mozTransformOrigin = i,
                e.webkitTransformOrigin = i,
                e["-webkit-transform"] = i,
                this.animationItem.wrapper.appendChild(this.animationItem.container),
                this.canvasContext = this.animationItem.container.getContext("2d"),
                this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else
                this.canvasContext = this.renderConfig.context;
            this.data = t,
            this.layers = t.layers,
            this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            },
            this.setupGlobalData(t, document.body),
            this.globalData.canvasContext = this.canvasContext,
            this.globalData.renderer = this,
            this.globalData.isDashed = !1,
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
            this.globalData.transformCanvas = this.transformCanvas,
            this.elements = createSizedArray(t.layers.length),
            this.updateContainerSize()
        }
        ,
        CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e, i, r;
            if (this.reset(),
            this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth,
            e = this.animationItem.wrapper.offsetHeight,
            this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr),
            this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr,
            e = this.canvasContext.canvas.height * this.renderConfig.dpr),
            -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var n = this.renderConfig.preserveAspectRatio.split(" ")
                  , o = n[1] || "meet"
                  , s = n[0] || "xMidYMid"
                  , a = s.substr(0, 4)
                  , l = s.substr(4);
                i = t / e,
                (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || r < i && "slice" === o ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr),
                this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                this.transformCanvas.tx = "xMid" === a && (r < i && "meet" === o || r > i && "slice" === o) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === a && (r < i && "meet" === o || r > i && "slice" === o) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
                this.transformCanvas.ty = "YMid" === l && (r > i && "meet" === o || r < i && "slice" === o) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (r > i && "meet" === o || r < i && "slice" === o) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else
                "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr),
                this.transformCanvas.tx = 0,
                this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr,
                this.transformCanvas.sy = this.renderConfig.dpr,
                this.transformCanvas.tx = 0,
                this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0)
        }
        ,
        CanvasRenderer.prototype.destroy = function() {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0,
            this.globalData.canvasContext = null,
            this.animationItem.container = null,
            this.destroyed = !0
        }
        ,
        CanvasRenderer.prototype.renderFrame = function(t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var i;
                this.renderedFrame = t,
                this.globalData.frameNum = t - this.animationItem._isFirstFrame,
                this.globalData.frameId += 1,
                this.globalData._mdf = !this.renderConfig.clearCanvas || e,
                this.globalData.projectInterface.currentFrame = t;
                var r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t),
                i = 0; i < r; i += 1)
                    (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                    i = r - 1; i >= 0; i -= 1)
                        (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }
        ,
        CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                e[t] = i,
                i.initExpressions()
            }
        }
        ,
        CanvasRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                this.pendingElements.pop().checkParenting()
            }
        }
        ,
        CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }
        ,
        CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }
        ,
        extendPrototype([BaseRenderer], HybridRenderer),
        HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem,
        HybridRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                this.pendingElements.pop().checkParenting()
            }
        }
        ,
        HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                var r = this.layers[e];
                if (r.ddd && this.supports3d)
                    this.addTo3dContainer(i, e);
                else if (this.threeDElements)
                    this.addTo3dContainer(i, e);
                else {
                    for (var n, o, s = 0; s < e; )
                        this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (o = this.elements[s],
                        n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : o.getBaseElement()) || n),
                        s += 1;
                    n ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, n) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                }
            }
        }
        ,
        HybridRenderer.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t,this.globalData,this) : new SVGShapeElement(t,this.globalData,this)
        }
        ,
        HybridRenderer.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t,this.globalData,this) : new SVGTextLottieElement(t,this.globalData,this)
        }
        ,
        HybridRenderer.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t,this.globalData,this),
            this.camera
        }
        ,
        HybridRenderer.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t,this.globalData,this) : new IImageElement(t,this.globalData,this)
        }
        ,
        HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
        }
        ,
        HybridRenderer.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t,this.globalData,this) : new ISolidElement(t,this.globalData,this)
        }
        ,
        HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
        HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, i = this.threeDElements.length; e < i; ) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                    return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }
        ,
        HybridRenderer.prototype.createThreeDContainer = function(t, e) {
            var i, r, n = createTag("div");
            styleDiv(n);
            var o = createTag("div");
            if (styleDiv(o),
            "3d" === e) {
                (i = n.style).width = this.globalData.compSize.w + "px",
                i.height = this.globalData.compSize.h + "px";
                i.webkitTransformOrigin = "50% 50%",
                i.mozTransformOrigin = "50% 50%",
                i.transformOrigin = "50% 50%";
                var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (r = o.style).transform = s,
                r.webkitTransform = s
            }
            n.appendChild(o);
            var a = {
                container: o,
                perspectiveElem: n,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(a),
            a
        }
        ,
        HybridRenderer.prototype.build3dContainers = function() {
            var t, e, i = this.layers.length, r = "";
            for (t = 0; t < i; t += 1)
                this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d",
                e = this.createThreeDContainer(t, "3d")),
                e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d",
                e = this.createThreeDContainer(t, "2d")),
                e.endPos = Math.max(e.endPos, t));
            for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1)
                this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }
        ,
        HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for (var i = 0, r = this.threeDElements.length; i < r; ) {
                if (e <= this.threeDElements[i].endPos) {
                    for (var n, o = this.threeDElements[i].startPos; o < e; )
                        this.elements[o] && this.elements[o].getBaseElement && (n = this.elements[o].getBaseElement()),
                        o += 1;
                    n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
                    break
                }
                i += 1
            }
        }
        ,
        HybridRenderer.prototype.configAnimation = function(t) {
            var e = createTag("div")
              , i = this.animationItem.wrapper
              , r = e.style;
            r.width = t.w + "px",
            r.height = t.h + "px",
            this.resizerElem = e,
            styleDiv(e),
            r.transformStyle = "flat",
            r.mozTransformStyle = "flat",
            r.webkitTransformStyle = "flat",
            this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
            i.appendChild(e),
            r.overflow = "hidden";
            var n = createNS("svg");
            n.setAttribute("width", "1"),
            n.setAttribute("height", "1"),
            styleDiv(n),
            this.resizerElem.appendChild(n);
            var o = createNS("defs");
            n.appendChild(o),
            this.data = t,
            this.setupGlobalData(t, n),
            this.globalData.defs = o,
            this.layers = t.layers,
            this.layerElement = this.resizerElem,
            this.build3dContainers(),
            this.updateContainerSize()
        }
        ,
        HybridRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            this.animationItem.container = null,
            this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
                this.elements[t].destroy();
            this.elements.length = 0,
            this.destroyed = !0,
            this.animationItem = null
        }
        ,
        HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, i, r, n = this.animationItem.wrapper.offsetWidth, o = this.animationItem.wrapper.offsetHeight, s = n / o;
            this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = n / this.globalData.compSize.w,
            e = n / this.globalData.compSize.w,
            i = 0,
            r = (o - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = o / this.globalData.compSize.h,
            e = o / this.globalData.compSize.h,
            i = (n - this.globalData.compSize.w * (o / this.globalData.compSize.h)) / 2,
            r = 0);
            var a = this.resizerElem.style;
            a.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)",
            a.transform = a.webkitTransform
        }
        ,
        HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
        HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }
        ,
        HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }
        ,
        HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(),
            this.camera)
                this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w, i = this.globalData.compSize.h, r = this.threeDElements.length;
                for (t = 0; t < r; t += 1) {
                    var n = this.threeDElements[t].perspectiveElem.style;
                    n.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px",
                    n.perspective = n.webkitPerspective
                }
            }
        }
        ,
        HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length, r = createTag("div");
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var n = this.createComp(t[e], r, this.globalData.comp, null);
                    n.initExpressions(),
                    this.globalData.projectInterface.registerComposition(n)
                }
        }
        ,
        MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }
        ,
        MaskElement.prototype.renderFrame = function(t) {
            var e, i = this.element.finalTransform.mat, r = this.masksProperties.length;
            for (e = 0; e < r; e += 1)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v),
                "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()),
                this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var n = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode",
                    this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")),
                    n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate",
                    this.storedData[e].elem.setAttribute("filter", null)),
                    this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                }
        }
        ,
        MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }
        ,
        MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w,
            t += " v" + this.globalData.compSize.h,
            t += " h-" + this.globalData.compSize.w,
            t += " v-" + this.globalData.compSize.h + " "
        }
        ,
        MaskElement.prototype.drawPath = function(t, e, i) {
            var r, n, o = " M" + e.v[0][0] + "," + e.v[0][1];
            for (n = e._length,
            r = 1; r < n; r += 1)
                o += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
            if (e.c && n > 1 && (o += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
            i.lastPath !== o) {
                var s = "";
                i.elem && (e.c && (s = t.inv ? this.solidPath + o : o),
                i.elem.setAttribute("d", s)),
                i.lastPath = o
            }
        }
        ,
        MaskElement.prototype.destroy = function() {
            this.element = null,
            this.globalData = null,
            this.maskElement = null,
            this.data = null,
            this.masksProperties = null
        }
        ,
        HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [],
                this._isParent = !1,
                this.checkParenting()
            },
            setHierarchy: function(t) {
                this.hierarchy = t
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        },
        FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1,
                this.dynamicProperties = [],
                this._mdf = !1
            },
            prepareProperties: function(t, e) {
                var i, r = this.dynamicProperties.length;
                for (i = 0; i < r; i += 1)
                    (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(),
                    this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0,
                    this._mdf = !0))
            },
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
            }
        },
        TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                },
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                this.hierarchy) {
                    var t, e = this.finalTransform.mat, i = 0, r = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; i < r; ) {
                            if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            i += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props,
                        e.cloneFromProps(t),
                        i = 0; i < r; i += 1)
                            t = this.hierarchy[i].finalTransform.mProp.v.props,
                            e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i, r = !0, n = this.comp; r; )
                    n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform),
                    n = n.comp) : r = !1;
                var o, s = e.length;
                for (i = 0; i < s; i += 1)
                    o = e[i].mat.applyToPointArray(0, 0, 0),
                    t = [t[0] - o[0], t[1] - o[1], 0];
                return t
            },
            mHelper: new Matrix
        },
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1,
                this.hidden = !1,
                this.isTransparent = !1,
                this.renderableComponents = []
            },
            addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
            },
            removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                this.hide()) : this.isTransparent && (this.isTransparent = !1,
                this.show())
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0,
                this._mdf = !0,
                this.isInRange = !0,
                this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0,
                this.isInRange = !1,
                this.hide())
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1)
                    this.renderableComponents[t].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        },
        extendPrototype([RenderableElement, createProxyFunction({
            initElement: function(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide()
            },
            hide: function() {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none",
                this.hidden = !0)
            },
            show: function() {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"),
                this.hidden = !1,
                this._isFirstFrame = !0)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1))
            },
            renderInnerContent: function() {},
            prepareFrame: function(t) {
                this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.checkTransparency()
            },
            destroy: function() {
                this.innerElem = null,
                this.destroyBaseElement()
            }
        })], RenderableDOMElement),
        SVGStyleData.prototype.reset = function() {
            this.d = "",
            this._mdf = !1
        }
        ,
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }
        ,
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
        SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
            this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
            this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
            this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this),
            this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this),
            this.g = new GradientProperty(t,e.g,this),
            this.style = i,
            this.stops = [],
            this.setGradientData(i.pElem, e),
            this.setGradientOpacity(e, i),
            this._isAnimated = !!this._isAnimated
        }
        ,
        SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var i = createElementID()
              , r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            r.setAttribute("id", i),
            r.setAttribute("spreadMethod", "pad"),
            r.setAttribute("gradientUnits", "userSpaceOnUse");
            var n, o, s, a = [];
            for (s = 4 * e.g.p,
            o = 0; o < s; o += 4)
                n = createNS("stop"),
                r.appendChild(n),
                a.push(n);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"),
            this.gf = r,
            this.cst = a
        }
        ,
        SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, r, n, o = createNS("mask"), s = createNS("path");
                o.appendChild(s);
                var a = createElementID()
                  , l = createElementID();
                o.setAttribute("id", l);
                var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                h.setAttribute("id", a),
                h.setAttribute("spreadMethod", "pad"),
                h.setAttribute("gradientUnits", "userSpaceOnUse"),
                n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var c = this.stops;
                for (r = 4 * t.g.p; r < n; r += 2)
                    (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                    h.appendChild(i),
                    c.push(i);
                s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + a + ")"),
                this.of = h,
                this.ms = o,
                this.ost = c,
                this.maskId = l,
                e.msElem = s
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function() {
            var t = new Matrix
              , e = new Matrix;
            function i(t, e, i) {
                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
                (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }
            function r(i, r, n) {
                var o, s, a, l, h, c, u, p, f, d, m, y = r.styles.length, g = r.lvl;
                for (c = 0; c < y; c += 1) {
                    if (l = r.sh._mdf || n,
                    r.styles[c].lvl < g) {
                        for (p = e.reset(),
                        d = g - r.styles[c].lvl,
                        m = r.transformers.length - 1; !l && d > 0; )
                            l = r.transformers[m].mProps._mdf || l,
                            d -= 1,
                            m -= 1;
                        if (l)
                            for (d = g - r.styles[c].lvl,
                            m = r.transformers.length - 1; d > 0; )
                                f = r.transformers[m].mProps.v.props,
                                p.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]),
                                d -= 1,
                                m -= 1
                    } else
                        p = t;
                    if (s = (u = r.sh.paths)._length,
                    l) {
                        for (a = "",
                        o = 0; o < s; o += 1)
                            (h = u.shapes[o]) && h._length && (a += buildShapeString(h, h._length, h.c, p));
                        r.caches[c] = a
                    } else
                        a = r.caches[c];
                    r.styles[c].d += !0 === i.hd ? "" : a,
                    r.styles[c]._mdf = l || r.styles[c]._mdf
                }
            }
            function n(t, e, i) {
                var r = e.style;
                (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
            }
            function o(t, e, i) {
                s(t, e, i),
                a(t, e, i)
            }
            function s(t, e, i) {
                var r, n, o, s, a, l = e.gf, h = e.g._hasOpacity, c = e.s.v, u = e.e.v;
                if (e.o._mdf || i) {
                    var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(p, e.o.v)
                }
                if (e.s._mdf || i) {
                    var f = 1 === t.t ? "x1" : "cx"
                      , d = "x1" === f ? "y1" : "cy";
                    l.setAttribute(f, c[0]),
                    l.setAttribute(d, c[1]),
                    h && !e.g._collapsable && (e.of.setAttribute(f, c[0]),
                    e.of.setAttribute(d, c[1]))
                }
                if (e.g._cmdf || i) {
                    r = e.cst;
                    var m = e.g.c;
                    for (o = r.length,
                    n = 0; n < o; n += 1)
                        (s = r[n]).setAttribute("offset", m[4 * n] + "%"),
                        s.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
                }
                if (h && (e.g._omdf || i)) {
                    var y = e.g.o;
                    for (o = (r = e.g._collapsable ? e.cst : e.ost).length,
                    n = 0; n < o; n += 1)
                        s = r[n],
                        e.g._collapsable || s.setAttribute("offset", y[2 * n] + "%"),
                        s.setAttribute("stop-opacity", y[2 * n + 1])
                }
                if (1 === t.t)
                    (e.e._mdf || i) && (l.setAttribute("x2", u[0]),
                    l.setAttribute("y2", u[1]),
                    h && !e.g._collapsable && (e.of.setAttribute("x2", u[0]),
                    e.of.setAttribute("y2", u[1])));
                else if ((e.s._mdf || e.e._mdf || i) && (a = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)),
                l.setAttribute("r", a),
                h && !e.g._collapsable && e.of.setAttribute("r", a)),
                e.e._mdf || e.h._mdf || e.a._mdf || i) {
                    a || (a = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)));
                    var g = Math.atan2(u[1] - c[1], u[0] - c[0])
                      , v = e.h.v;
                    v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                    var b = a * v
                      , w = Math.cos(g + e.a.v) * b + c[0]
                      , S = Math.sin(g + e.a.v) * b + c[1];
                    l.setAttribute("fx", w),
                    l.setAttribute("fy", S),
                    h && !e.g._collapsable && (e.of.setAttribute("fx", w),
                    e.of.setAttribute("fy", S))
                }
            }
            function a(t, e, i) {
                var r = e.style
                  , n = e.d;
                n && (n._mdf || i) && n.dashStr && (r.pElem.setAttribute("stroke-dasharray", n.dashStr),
                r.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])),
                e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v),
                (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v),
                r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
                createRenderFunction: function(t) {
                    switch (t.ty) {
                    case "fl":
                        return n;
                    case "gf":
                        return s;
                    case "gs":
                        return o;
                    case "st":
                        return a;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return r;
                    case "tr":
                        return i;
                    default:
                        return null
                    }
                }
            }
        }();
        function ShapeTransformManager() {
            this.sequences = {},
            this.sequenceList = [],
            this.transform_key_count = 0
        }
        function CVShapeData(t, e, i, r) {
            this.styledShapes = [],
            this.tr = [0, 0, 0, 0, 0, 0];
            var n, o = 4;
            "rc" === e.ty ? o = 5 : "el" === e.ty ? o = 6 : "sr" === e.ty && (o = 7),
            this.sh = ShapePropertyFactory.getShapeProp(t, e, o, t);
            var s, a = i.length;
            for (n = 0; n < a; n += 1)
                i[n].closed || (s = {
                    transforms: r.addTransformSequence(i[n].transforms),
                    trNodes: []
                },
                this.styledShapes.push(s),
                i[n].elements.push(s))
        }
        function BaseElement() {}
        function NullElement(t, e, i) {
            this.initFrame(),
            this.initBaseData(t, e, i),
            this.initFrame(),
            this.initTransform(t, e, i),
            this.initHierarchy()
        }
        function SVGBaseElement() {}
        function IShapeElement() {}
        function ITextElement() {}
        function ICompElement() {}
        function IImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId),
            this.initElement(t, e, i),
            this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }
        function ISolidElement(t, e, i) {
            this.initElement(t, e, i)
        }
        function AudioElement(t, e, i) {
            this.initFrame(),
            this.initRenderable(),
            this.assetData = e.getAssetData(t.refId),
            this.initBaseData(t, e, i),
            this._isPlaying = !1,
            this._canPlay = !1;
            var r = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(r),
            this._currentTime = 0,
            this.globalData.audioController.addAudio(this),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        function SVGCompElement(t, e, i) {
            this.layers = t.layers,
            this.supports3d = !0,
            this.completeLayers = !1,
            this.pendingElements = [],
            this.elements = this.layers ? createSizedArray(this.layers.length) : [],
            this.initElement(t, e, i),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        function SVGTextLottieElement(t, e, i) {
            this.textSpans = [],
            this.renderType = "svg",
            this.initElement(t, e, i)
        }
        function SVGShapeElement(t, e, i) {
            this.shapes = [],
            this.shapesData = t.shapes,
            this.stylesList = [],
            this.shapeModifiers = [],
            this.itemsData = [],
            this.processedElements = [],
            this.animatedContents = [],
            this.initElement(t, e, i),
            this.prevViewData = []
        }
        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            if (i.setAttribute("type", "matrix"),
            i.setAttribute("color-interpolation-filters", "linearRGB"),
            i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
            i.setAttribute("result", "f1"),
            t.appendChild(i),
            (i = createNS("feColorMatrix")).setAttribute("type", "matrix"),
            i.setAttribute("color-interpolation-filters", "sRGB"),
            i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            i.setAttribute("result", "f2"),
            t.appendChild(i),
            this.matrixFilter = i,
            100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var r, n = createNS("feMerge");
                t.appendChild(n),
                (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
                n.appendChild(r),
                (r = createNS("feMergeNode")).setAttribute("in", "f2"),
                n.appendChild(r)
            }
        }
        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
            i.setAttribute("color-interpolation-filters", "sRGB"),
            i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            t.appendChild(i),
            this.matrixFilter = i
        }
        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"),
            t.setAttribute("y", "-100%"),
            t.setAttribute("width", "300%"),
            t.setAttribute("height", "300%"),
            this.filterManager = e;
            var i = createNS("feGaussianBlur");
            t.appendChild(i),
            this.feGaussianBlur = i
        }
        function SVGStrokeEffect(t, e) {
            this.initialized = !1,
            this.filterManager = e,
            this.elem = t,
            this.paths = []
        }
        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
            i.setAttribute("color-interpolation-filters", "linearRGB"),
            i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
            i.setAttribute("result", "f1"),
            t.appendChild(i);
            var r = createNS("feComponentTransfer");
            r.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(r),
            this.matrixFilter = r;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"),
            r.appendChild(n),
            this.feFuncR = n;
            var o = createNS("feFuncG");
            o.setAttribute("type", "table"),
            r.appendChild(o),
            this.feFuncG = o;
            var s = createNS("feFuncB");
            s.setAttribute("type", "table"),
            r.appendChild(s),
            this.feFuncB = s
        }
        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var i = this.filterManager.effectElements
              , r = createNS("feComponentTransfer");
            (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)),
            (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)),
            (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)),
            (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(r),
            r = createNS("feComponentTransfer")),
            (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(r),
            this.feFuncRComposed = this.createFeFunc("feFuncR", r),
            this.feFuncGComposed = this.createFeFunc("feFuncG", r),
            this.feFuncBComposed = this.createFeFunc("feFuncB", r))
        }
        function SVGDropShadowEffect(t, e) {
            var i = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", i.x),
            t.setAttribute("y", i.y),
            t.setAttribute("width", i.width),
            t.setAttribute("height", i.height),
            this.filterManager = e;
            var r = createNS("feGaussianBlur");
            r.setAttribute("in", "SourceAlpha"),
            r.setAttribute("result", "drop_shadow_1"),
            r.setAttribute("stdDeviation", "0"),
            this.feGaussianBlur = r,
            t.appendChild(r);
            var n = createNS("feOffset");
            n.setAttribute("dx", "25"),
            n.setAttribute("dy", "0"),
            n.setAttribute("in", "drop_shadow_1"),
            n.setAttribute("result", "drop_shadow_2"),
            this.feOffset = n,
            t.appendChild(n);
            var o = createNS("feFlood");
            o.setAttribute("flood-color", "#00ff00"),
            o.setAttribute("flood-opacity", "1"),
            o.setAttribute("result", "drop_shadow_3"),
            this.feFlood = o,
            t.appendChild(o);
            var s = createNS("feComposite");
            s.setAttribute("in", "drop_shadow_3"),
            s.setAttribute("in2", "drop_shadow_2"),
            s.setAttribute("operator", "in"),
            s.setAttribute("result", "drop_shadow_4"),
            t.appendChild(s);
            var a, l = createNS("feMerge");
            t.appendChild(l),
            a = createNS("feMergeNode"),
            l.appendChild(a),
            (a = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
            this.feMergeNode = a,
            this.feMerge = l,
            this.originalNodeAdded = !1,
            l.appendChild(a)
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
                var e, i = t.length, r = "_";
                for (e = 0; e < i; e += 1)
                    r += t[e].transform.key + "_";
                var n = this.sequences[r];
                return n || (n = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                },
                this.sequences[r] = n,
                this.sequenceList.push(n)),
                n
            },
            processSequence: function(t, e) {
                for (var i, r = 0, n = t.transforms.length, o = e; r < n && !e; ) {
                    if (t.transforms[r].transform.mProps._mdf) {
                        o = !0;
                        break
                    }
                    r += 1
                }
                if (o)
                    for (t.finalTransform.reset(),
                    r = n - 1; r >= 0; r -= 1)
                        i = t.transforms[r].transform.mProps.v.props,
                        t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                t._mdf = o
            },
            processSequences: function(t) {
                var e, i = this.sequenceList.length;
                for (e = 0; e < i; e += 1)
                    this.processSequence(this.sequenceList[e], t)
            },
            getNewKey: function() {
                return this.transform_key_count += 1,
                "_" + this.transform_key_count
            }
        },
        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
        BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask)
                    return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                        return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this),
                this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t),
                0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface),
                this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this),
                this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            },
            initBaseData: function(t, e, i) {
                this.globalData = e,
                this.comp = i,
                this.data = t,
                this.layerId = createElementID(),
                this.data.sr || (this.data.sr = 1),
                this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        },
        NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }
        ,
        NullElement.prototype.renderFrame = function() {}
        ,
        NullElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        NullElement.prototype.destroy = function() {}
        ,
        NullElement.prototype.sourceRectAtTime = function() {}
        ,
        NullElement.prototype.hide = function() {}
        ,
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
        SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"),
                this.transformedElement = this.layerElement,
                this.maskedElement = this.layerElement,
                this._sizeChanged = !1;
                var t, e, i, r = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var n = createNS("mask");
                        n.setAttribute("id", this.layerId),
                        n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"),
                        n.appendChild(this.layerElement),
                        r = n,
                        this.globalData.defs.appendChild(n),
                        featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"),
                        t = createElementID(),
                        e = filtersFactory.createFilter(t),
                        this.globalData.defs.appendChild(e),
                        e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        (i = createNS("g")).appendChild(this.layerElement),
                        r = i,
                        n.appendChild(i),
                        i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                    } else if (2 == this.data.td) {
                        var o = createNS("mask");
                        o.setAttribute("id", this.layerId),
                        o.setAttribute("mask-type", "alpha");
                        var s = createNS("g");
                        o.appendChild(s),
                        t = createElementID(),
                        e = filtersFactory.createFilter(t);
                        var a = createNS("feComponentTransfer");
                        a.setAttribute("in", "SourceGraphic"),
                        e.appendChild(a);
                        var l = createNS("feFuncA");
                        l.setAttribute("type", "table"),
                        l.setAttribute("tableValues", "1.0 0.0"),
                        a.appendChild(l),
                        this.globalData.defs.appendChild(e);
                        var h = createNS("rect");
                        h.setAttribute("width", this.comp.data.w),
                        h.setAttribute("height", this.comp.data.h),
                        h.setAttribute("x", "0"),
                        h.setAttribute("y", "0"),
                        h.setAttribute("fill", "#ffffff"),
                        h.setAttribute("opacity", "0"),
                        s.setAttribute("filter", "url(" + locationHref + "#" + t + ")"),
                        s.appendChild(h),
                        s.appendChild(this.layerElement),
                        r = s,
                        featureSupport.maskType || (o.setAttribute("mask-type", "luminance"),
                        e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        i = createNS("g"),
                        s.appendChild(h),
                        i.appendChild(this.layerElement),
                        r = i,
                        s.appendChild(i)),
                        this.globalData.defs.appendChild(o)
                    }
                } else
                    this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                    r = this.matteElement,
                    this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                0 === this.data.ty && !this.data.hd) {
                    var c = createNS("clipPath")
                      , u = createNS("path");
                    u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var p = createElementID();
                    if (c.setAttribute("id", p),
                    c.appendChild(u),
                    this.globalData.defs.appendChild(c),
                    this.checkMasks()) {
                        var f = createNS("g");
                        f.setAttribute("clip-path", "url(" + locationHref + "#" + p + ")"),
                        f.appendChild(this.layerElement),
                        this.transformedElement = f,
                        r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else
                        this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + p + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
                this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null,
                this.matteElement = null,
                this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data,this,this.globalData),
                this.renderableEffectsManager = new SVGEffects(this)
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
            }
        },
        IShapeElement.prototype = {
            addShapeToModifiers: function(t) {
                var e, i = this.shapeModifiers.length;
                for (e = 0; e < i; e += 1)
                    this.shapeModifiers[e].addShape(t)
            },
            isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e; )
                    if (this.shapeModifiers[0].isAnimatedWithShape(t))
                        return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1)
                        this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1)
                        this.shapeModifiers[t].processShapes(this._isFirstFrame)
                }
            },
            lcEnum: {
                1: "butt",
                2: "round",
                3: "square"
            },
            ljEnum: {
                1: "miter",
                2: "round",
                3: "bevel"
            },
            searchProcessedElement: function(t) {
                for (var e = this.processedElements, i = 0, r = e.length; i < r; ) {
                    if (e[i].elem === t)
                        return e[i].pos;
                    i += 1
                }
                return 0
            },
            addProcessedElement: function(t, e) {
                for (var i = this.processedElements, r = i.length; r; )
                    if (i[r -= 1].elem === t)
                        return void (i[r].pos = e);
                i.push(new ProcessedElement(t,e))
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange)
            }
        },
        ITextElement.prototype.initElement = function(t, e, i) {
            this.lettersChangedFlag = !0,
            this.initFrame(),
            this.initBaseData(t, e, i),
            this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
            this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
            this.initTransform(t, e, i),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties)
        }
        ,
        ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1,
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
            this.textProperty._isFirstFrame = !1,
            this.textProperty._mdf = !1)
        }
        ,
        ITextElement.prototype.createPathShape = function(t, e) {
            var i, r, n = e.length, o = "";
            for (i = 0; i < n; i += 1)
                r = e[i].ks.k,
                o += buildShapeString(r, r.i.length, !0, t);
            return o
        }
        ,
        ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }
        ,
        ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }
        ,
        ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }
        ,
        ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, n) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
            e.translate(0, -t.ls, 0),
            t.j) {
            case 1:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                break;
            case 2:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
            }
            e.translate(r, n, 0)
        }
        ,
        ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }
        ,
        ITextElement.prototype.emptyProp = new LetterProps,
        ITextElement.prototype.destroy = function() {}
        ,
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
        ICompElement.prototype.initElement = function(t, e, i) {
            this.initFrame(),
            this.initBaseData(t, e, i),
            this.initTransform(t, e, i),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            !this.data.xt && e.progressiveLoad || this.buildAllItems(),
            this.hide()
        }
        ,
        ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1,
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            this.isInRange || this.data.xt) {
                if (this.tm._placeholder)
                    this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1),
                    this.renderedFrame = e
                }
                var i, r = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame),
                i = r - 1; i >= 0; i -= 1)
                    (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st),
                    this.elements[i]._mdf && (this._mdf = !0))
            }
        }
        ,
        ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
        ,
        ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }
        ,
        ICompElement.prototype.getElements = function() {
            return this.elements
        }
        ,
        ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy()
        }
        ,
        ICompElement.prototype.destroy = function() {
            this.destroyElements(),
            this.destroyBaseElement()
        }
        ,
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
        IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
            this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
            this.layerElement.appendChild(this.innerElem)
        }
        ,
        IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }
        ,
        extendPrototype([IImageElement], ISolidElement),
        ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(t)
        }
        ,
        AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0),
            this.prepareProperties(t, !0),
            this.tm._placeholder)
                this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
        }
        ,
        extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
        AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(),
            this.audio.seek(this._currentTime / this.globalData.frameRate),
            this._isPlaying = !0))
        }
        ,
        AudioElement.prototype.show = function() {}
        ,
        AudioElement.prototype.hide = function() {
            this.audio.pause(),
            this._isPlaying = !1
        }
        ,
        AudioElement.prototype.pause = function() {
            this.audio.pause(),
            this._isPlaying = !1,
            this._canPlay = !1
        }
        ,
        AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }
        ,
        AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }
        ,
        AudioElement.prototype.volume = function(t) {
            this.audio.volume(t)
        }
        ,
        AudioElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        AudioElement.prototype.destroy = function() {}
        ,
        AudioElement.prototype.sourceRectAtTime = function() {}
        ,
        AudioElement.prototype.initExpressions = function() {}
        ,
        extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement),
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
        SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }
        ,
        SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, i = t.length, r = [], n = ""; e < i; )
                t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(n),
                n = "") : n += t[e],
                e += 1;
            return r.push(n),
            r
        }
        ,
        SVGTextLottieElement.prototype.buildNewText = function() {
            var t, e, i = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i ? i.l.length : 0),
            i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)),
            this.layerElement.setAttribute("stroke-width", i.sw)),
            this.layerElement.setAttribute("font-size", i.finalSize);
            var r = this.globalData.fontManager.getFontByName(i.f);
            if (r.fClass)
                this.layerElement.setAttribute("class", r.fClass);
            else {
                this.layerElement.setAttribute("font-family", r.fFamily);
                var n = i.fWeight
                  , o = i.fStyle;
                this.layerElement.setAttribute("font-style", o),
                this.layerElement.setAttribute("font-weight", n)
            }
            this.layerElement.setAttribute("aria-label", i.t);
            var s, a = i.l || [], l = !!this.globalData.fontManager.chars;
            e = a.length;
            var h, c = this.mHelper, u = "", p = this.data.singleShape, f = 0, d = 0, m = !0, y = .001 * i.tr * i.finalSize;
            if (!p || l || i.sz) {
                var g, v, b = this.textSpans.length;
                for (t = 0; t < e; t += 1)
                    l && p && 0 !== t || (s = b > t ? this.textSpans[t] : createNS(l ? "path" : "text"),
                    b <= t && (s.setAttribute("stroke-linecap", "butt"),
                    s.setAttribute("stroke-linejoin", "round"),
                    s.setAttribute("stroke-miterlimit", "4"),
                    this.textSpans[t] = s,
                    this.layerElement.appendChild(s)),
                    s.style.display = "inherit"),
                    c.reset(),
                    c.scale(i.finalSize / 100, i.finalSize / 100),
                    p && (a[t].n && (f = -y,
                    d += i.yOffset,
                    d += m ? 1 : 0,
                    m = !1),
                    this.applyTextPropertiesToMatrix(i, c, a[t].line, f, d),
                    f += a[t].l || 0,
                    f += y),
                    l ? (h = (g = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [],
                    p ? u += this.createPathShape(c, h) : s.setAttribute("d", this.createPathShape(c, h))) : (p && s.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"),
                    s.textContent = a[t].val,
                    s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                p && s && s.setAttribute("d", u)
            } else {
                var w = this.textContainer
                  , S = "start";
                switch (i.j) {
                case 1:
                    S = "end";
                    break;
                case 2:
                    S = "middle";
                    break;
                default:
                    S = "start"
                }
                w.setAttribute("text-anchor", S),
                w.setAttribute("letter-spacing", y);
                var x = this.buildTextContents(i.finalText);
                for (e = x.length,
                d = i.ps ? i.ps[1] + i.ascent : 0,
                t = 0; t < e; t += 1)
                    (s = this.textSpans[t] || createNS("tspan")).textContent = x[t],
                    s.setAttribute("x", 0),
                    s.setAttribute("y", d),
                    s.style.display = "inherit",
                    w.appendChild(s),
                    this.textSpans[t] = s,
                    d += i.finalLineHeight;
                this.layerElement.appendChild(w)
            }
            for (; t < this.textSpans.length; )
                this.textSpans[t].style.display = "none",
                t += 1;
            this._sizeChanged = !0
        }
        ,
        SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }
        ,
        SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var i, r, n = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
                for (e = o.length,
                t = 0; t < e; t += 1)
                    o[t].n || (i = n[t],
                    r = this.textSpans[t],
                    i._mdf.m && r.setAttribute("transform", i.m),
                    i._mdf.o && r.setAttribute("opacity", i.o),
                    i._mdf.sw && r.setAttribute("stroke-width", i.sw),
                    i._mdf.sc && r.setAttribute("stroke", i.sc),
                    i._mdf.fc && r.setAttribute("fill", i.fc))
            }
        }
        ,
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
        SVGShapeElement.prototype.initSecondaryElement = function() {}
        ,
        SVGShapeElement.prototype.identityMatrix = new Matrix,
        SVGShapeElement.prototype.buildExpressionInterface = function() {}
        ,
        SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
            this.filterUniqueShapes()
        }
        ,
        SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, i, r, n = this.shapes.length, o = this.stylesList.length, s = [], a = !1;
            for (i = 0; i < o; i += 1) {
                for (r = this.stylesList[i],
                a = !1,
                s.length = 0,
                t = 0; t < n; t += 1)
                    -1 !== (e = this.shapes[t]).styles.indexOf(r) && (s.push(e),
                    a = e._isAnimated || a);
                s.length > 1 && a && this.setShapesAsAnimated(s)
            }
        }
        ,
        SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                t[e].setAsAnimated()
        }
        ,
        SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var i, r = new SVGStyleData(t,e), n = r.pElem;
            if ("st" === t.ty)
                i = new SVGStrokeStyleData(this,t,r);
            else if ("fl" === t.ty)
                i = new SVGFillStyleData(this,t,r);
            else if ("gf" === t.ty || "gs" === t.ty) {
                i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this,t,r),
                this.globalData.defs.appendChild(i.gf),
                i.maskId && (this.globalData.defs.appendChild(i.ms),
                this.globalData.defs.appendChild(i.of),
                n.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))
            }
            return "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"),
            n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"),
            n.setAttribute("fill-opacity", "0"),
            1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
            2 === t.r && n.setAttribute("fill-rule", "evenodd"),
            t.ln && n.setAttribute("id", t.ln),
            t.cl && n.setAttribute("class", t.cl),
            t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)),
            this.stylesList.push(r),
            this.addToAnimatedContents(t, i),
            i
        }
        ,
        SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln),
            t.cl && e.gr.setAttribute("class", t.cl),
            t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
            e
        }
        ,
        SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this)
              , r = new SVGTransformData(i,i.o,e);
            return this.addToAnimatedContents(t, r),
            r
        }
        ,
        SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
            var r = 4;
            "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
            var n = new SVGShapeData(e,i,ShapePropertyFactory.getShapeProp(this, t, r, this));
            return this.shapes.push(n),
            this.addShapeToModifiers(n),
            this.addToAnimatedContents(t, n),
            n
        }
        ,
        SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var i = 0, r = this.animatedContents.length; i < r; ) {
                if (this.animatedContents[i].element === e)
                    return;
                i += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }
        ,
        SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, i = t.styles, r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
                this.stylesList[e].closed || i.push(this.stylesList[e])
        }
        ,
        SVGShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
            this.filterUniqueShapes(),
            e = this.dynamicProperties.length,
            t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }
        ,
        SVGShapeElement.prototype.searchShapes = function(t, e, i, r, n, o, s) {
            var a, l, h, c, u, p, f = [].concat(o), d = t.length - 1, m = [], y = [];
            for (a = d; a >= 0; a -= 1) {
                if ((p = this.searchProcessedElement(t[a])) ? e[a] = i[p - 1] : t[a]._render = s,
                "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty)
                    p ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], n),
                    t[a]._render && r.appendChild(e[a].style.pElem),
                    m.push(e[a].style);
                else if ("gr" === t[a].ty) {
                    if (p)
                        for (h = e[a].it.length,
                        l = 0; l < h; l += 1)
                            e[a].prevViewData[l] = e[a].it[l];
                    else
                        e[a] = this.createGroupElement(t[a]);
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, e[a].gr, n + 1, f, s),
                    t[a]._render && r.appendChild(e[a].gr)
                } else
                    "tr" === t[a].ty ? (p || (e[a] = this.createTransformElement(t[a], r)),
                    c = e[a].transform,
                    f.push(c)) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? (p || (e[a] = this.createShapeElement(t[a], f, n)),
                    this.setElementStyles(e[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "ms" === t[a].ty || "pb" === t[a].ty ? (p ? (u = e[a]).closed = !1 : ((u = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]),
                    e[a] = u,
                    this.shapeModifiers.push(u)),
                    y.push(u)) : "rp" === t[a].ty && (p ? (u = e[a]).closed = !0 : (u = ShapeModifiers.getModifier(t[a].ty),
                    e[a] = u,
                    u.init(this, t, a, e),
                    this.shapeModifiers.push(u),
                    s = !1),
                    y.push(u));
                this.addProcessedElement(t[a], a + 1)
            }
            for (d = m.length,
            a = 0; a < d; a += 1)
                m[a].closed = !0;
            for (d = y.length,
            a = 0; a < d; a += 1)
                y[a].closed = !0
        }
        ,
        SVGShapeElement.prototype.renderInnerContent = function() {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
                this.stylesList[t].reset();
            for (this.renderShape(),
            t = 0; t < e; t += 1)
                (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
                this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
                this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }
        ,
        SVGShapeElement.prototype.renderShape = function() {
            var t, e, i = this.animatedContents.length;
            for (t = 0; t < i; t += 1)
                e = this.animatedContents[t],
                (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }
        ,
        SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(),
            this.shapesData = null,
            this.itemsData = null
        }
        ,
        SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v
                  , i = this.filterManager.effectElements[1].p.v
                  , r = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        }
        ,
        SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v
                  , i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
            }
        }
        ,
        SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v
                  , i = this.filterManager.effectElements[1].p.v
                  , r = 3 == i ? 0 : e
                  , n = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", r + " " + n);
                var o = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", o)
            }
        }
        ,
        SVGStrokeEffect.prototype.initialize = function() {
            var t, e, i, r, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length,
            i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1,
            (e = createNS("g")).setAttribute("fill", "none"),
            e.setAttribute("stroke-linecap", "round"),
            e.setAttribute("stroke-dashoffset", 1); i < r; i += 1)
                t = createNS("path"),
                e.appendChild(t),
                this.paths.push({
                    p: t,
                    m: i
                });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var o = createNS("mask")
                  , s = createElementID();
                o.setAttribute("id", s),
                o.setAttribute("mask-type", "alpha"),
                o.appendChild(e),
                this.elem.globalData.defs.appendChild(o);
                var a = createNS("g");
                for (a.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); n[0]; )
                    a.appendChild(n[0]);
                this.elem.layerElement.appendChild(a),
                this.masker = o,
                e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length; )
                        this.elem.layerElement.removeChild(n[0]);
                this.elem.layerElement.appendChild(e),
                this.elem.layerElement.removeAttribute("mask"),
                e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0,
            this.pathMasker = e
        }
        ,
        SVGStrokeEffect.prototype.renderFrame = function(t) {
            var e;
            this.initialized || this.initialize();
            var i, r, n = this.paths.length;
            for (e = 0; e < n; e += 1)
                if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m],
                r = this.paths[e].p,
                (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath),
                t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var o;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                          , a = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                          , l = r.getTotalLength();
                        o = "0 0 0 " + l * s + " ";
                        var h, c = l * (a - s), u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01, p = Math.floor(c / u);
                        for (h = 0; h < p; h += 1)
                            o += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        o += "0 " + 10 * l + " 0 0"
                    } else
                        o = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    r.setAttribute("stroke-dasharray", o)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
            (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
            (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var f = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
            }
        }
        ,
        SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v
                  , i = this.filterManager.effectElements[1].p.v
                  , r = this.filterManager.effectElements[2].p.v
                  , n = r[0] + " " + i[0] + " " + e[0]
                  , o = r[1] + " " + i[1] + " " + e[1]
                  , s = r[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", n),
                this.feFuncG.setAttribute("tableValues", o),
                this.feFuncB.setAttribute("tableValues", s)
            }
        }
        ,
        SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var i = createNS(t);
            return i.setAttribute("type", "table"),
            e.appendChild(i),
            i
        }
        ,
        SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, n) {
            for (var o, s, a = 0, l = Math.min(t, e), h = Math.max(t, e), c = Array.call(null, {
                length: 256
            }), u = 0, p = n - r, f = e - t; a <= 256; )
                s = (o = a / 256) <= l ? f < 0 ? n : r : o >= h ? f < 0 ? r : n : r + p * Math.pow((o - t) / f, 1 / i),
                c[u] = s,
                u += 1,
                a += 256 / 255;
            return c.join(" ")
        }
        ,
        SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, i = this.filterManager.effectElements;
                this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v),
                this.feFuncRComposed.setAttribute("tableValues", e),
                this.feFuncGComposed.setAttribute("tableValues", e),
                this.feFuncBComposed.setAttribute("tableValues", e)),
                this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v),
                this.feFuncR.setAttribute("tableValues", e)),
                this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v),
                this.feFuncG.setAttribute("tableValues", e)),
                this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v),
                this.feFuncB.setAttribute("tableValues", e)),
                this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v),
                this.feFuncA.setAttribute("tableValues", e))
            }
        }
        ,
        SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var i = this.filterManager.effectElements[3].p.v
                      , r = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                      , n = i * Math.cos(r)
                      , o = i * Math.sin(r);
                    this.feOffset.setAttribute("dx", n),
                    this.feOffset.setAttribute("dy", o)
                }
            }
        }
        ;
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, i) {
            this.initialized = !1,
            this.filterManager = e,
            this.filterElem = t,
            this.elem = i,
            i.matteElement = createNS("g"),
            i.matteElement.appendChild(i.layerElement),
            i.matteElement.appendChild(i.transformedElement),
            i.baseElement = i.matteElement
        }
        function SVGEffects(t) {
            var e, i, r = t.data.ef ? t.data.ef.length : 0, n = createElementID(), o = filtersFactory.createFilter(n), s = 0;
            for (this.filters = [],
            e = 0; e < r; e += 1)
                i = null,
                20 === t.data.ef[e].ty ? (s += 1,
                i = new SVGTintFilter(o,t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (s += 1,
                i = new SVGFillFilter(o,t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t,t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (s += 1,
                i = new SVGTritoneFilter(o,t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (s += 1,
                i = new SVGProLevelsFilter(o,t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (s += 1,
                i = new SVGDropShadowEffect(o,t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(o,t.effectsManager.effectElements[e],t) : 29 === t.data.ef[e].ty && (s += 1,
                i = new SVGGaussianBlurEffect(o,t.effectsManager.effectElements[e])),
                i && this.filters.push(i);
            s && (t.globalData.defs.appendChild(o),
            t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + n + ")")),
            this.filters.length && t.addRenderableComponent(this)
        }
        function CVContextData() {
            var t;
            this.saved = [],
            this.cArrPos = 0,
            this.cTr = new Matrix,
            this.cO = 1;
            for (this.savedOp = createTypedArray("float32", 15),
            t = 0; t < 15; t += 1)
                this.saved[t] = createTypedArray("float32", 16);
            this._length = 15
        }
        function CVBaseElement() {}
        function CVImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId),
            this.img = e.imageLoader.getImage(this.assetData),
            this.initElement(t, e, i)
        }
        function CVCompElement(t, e, i) {
            this.completeLayers = !1,
            this.layers = t.layers,
            this.pendingElements = [],
            this.elements = createSizedArray(this.layers.length),
            this.initElement(t, e, i),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        function CVMaskElement(t, e) {
            var i;
            this.data = t,
            this.element = e,
            this.masksProperties = this.data.masksProperties || [],
            this.viewData = createSizedArray(this.masksProperties.length);
            var r = this.masksProperties.length
              , n = !1;
            for (i = 0; i < r; i += 1)
                "n" !== this.masksProperties[i].mode && (n = !0),
                this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
            this.hasMasks = n,
            n && this.element.addRenderableComponent(this)
        }
        function CVShapeElement(t, e, i) {
            this.shapes = [],
            this.shapesData = t.shapes,
            this.stylesList = [],
            this.itemsData = [],
            this.prevViewData = [],
            this.shapeModifiers = [],
            this.processedElements = [],
            this.transformsManager = new ShapeTransformManager,
            this.initElement(t, e, i)
        }
        function CVSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }
        function CVTextElement(t, e, i) {
            this.textSpans = [],
            this.yOffset = 0,
            this.fillColorAnim = !1,
            this.strokeColorAnim = !1,
            this.strokeWidthAnim = !1,
            this.stroke = !1,
            this.fill = !1,
            this.justifyOffset = 0,
            this.currentRender = null,
            this.renderType = "canvas",
            this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            },
            this.initElement(t, e, i)
        }
        function CVEffects() {}
        function HBaseElement() {}
        function HSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }
        function HCompElement(t, e, i) {
            this.layers = t.layers,
            this.supports3d = !t.hasMask,
            this.completeLayers = !1,
            this.pendingElements = [],
            this.elements = this.layers ? createSizedArray(this.layers.length) : [],
            this.initElement(t, e, i),
            this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        function HShapeElement(t, e, i) {
            this.shapes = [],
            this.shapesData = t.shapes,
            this.stylesList = [],
            this.shapeModifiers = [],
            this.itemsData = [],
            this.processedElements = [],
            this.animatedContents = [],
            this.shapesContainer = createNS("g"),
            this.initElement(t, e, i),
            this.prevViewData = [],
            this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }
        function HTextElement(t, e, i) {
            this.textSpans = [],
            this.textPaths = [],
            this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            },
            this.renderType = "svg",
            this.isMasked = !1,
            this.initElement(t, e, i)
        }
        function HImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId),
            this.initElement(t, e, i)
        }
        function HCameraElement(t, e, i) {
            this.initFrame(),
            this.initBaseData(t, e, i),
            this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (this.pe = r(this, t.pe, 0, 0, this),
            t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this),
            this.py = r(this, t.ks.p.y, 1, 0, this),
            this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this),
            t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to) {
                var n, o = t.ks.or.k.length;
                for (n = 0; n < o; n += 1)
                    t.ks.or.k[n].to = null,
                    t.ks.or.k[n].ti = null
            }
            this.or = r(this, t.ks.or, 1, degToRads, this),
            this.or.sh = !0,
            this.rx = r(this, t.ks.rx, 0, degToRads, this),
            this.ry = r(this, t.ks.ry, 0, degToRads, this),
            this.rz = r(this, t.ks.rz, 0, degToRads, this),
            this.mat = new Matrix,
            this._prevMat = new Matrix,
            this._isFirstFrame = !0,
            this.finalTransform = {
                mProp: this
            }
        }
        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
                if (_svgMatteSymbols[e] === t)
                    return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }
        ,
        SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var i = t.layerElement.parentNode;
            if (i) {
                for (var r, n = i.children, o = 0, s = n.length; o < s && n[o] !== t.layerElement; )
                    o += 1;
                o <= s - 2 && (r = n[o + 1]);
                var a = createNS("use");
                a.setAttribute("href", "#" + e),
                r ? i.insertBefore(a, r) : i.appendChild(a)
            }
        }
        ,
        SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var i = createElementID()
                  , r = createNS("mask");
                r.setAttribute("id", e.layerId),
                r.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(e);
                var n = t.globalData.defs;
                n.appendChild(r);
                var o = createNS("symbol");
                o.setAttribute("id", i),
                this.replaceInParent(e, i),
                o.appendChild(e.layerElement),
                n.appendChild(o);
                var s = createNS("use");
                s.setAttribute("href", "#" + i),
                r.appendChild(s),
                e.data.hd = !1,
                e.show()
            }
            t.setMatte(e.layerId)
        }
        ,
        SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r; )
                e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]),
                i += 1;
            this.initialized = !0
        }
        ,
        SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }
        ,
        SVGEffects.prototype.renderFrame = function(t) {
            var e, i = this.filters.length;
            for (e = 0; e < i; e += 1)
                this.filters[e].renderFrame(t)
        }
        ,
        CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length
              , e = this.savedOp;
            this.savedOp = createTypedArray("float32", t),
            this.savedOp.set(e);
            var i = 0;
            for (i = this._length; i < t; i += 1)
                this.saved[i] = createTypedArray("float32", 16);
            this._length = t
        }
        ,
        CVContextData.prototype.reset = function() {
            this.cArrPos = 0,
            this.cTr.reset(),
            this.cO = 1
        }
        ,
        CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                this.canvasContext = this.globalData.canvasContext,
                this.renderableEffectsManager = new CVEffects(this)
            },
            createContent: function() {},
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data,this)
            },
            hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1,
                this._isFirstFrame = !0,
                this.maskManager._isFirstFrame = !0)
            },
            renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(),
                    this.renderRenderable(),
                    this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t),
                    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                    this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                    this.renderInnerContent(),
                    this.globalData.renderer.restore(t),
                    this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                    this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null,
                this.data = null,
                this.globalData = null,
                this.maskManager.destroy()
            },
            mHelper: new Matrix
        },
        CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
        CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
        CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
        CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
        CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w,
                t.height = this.assetData.h;
                var e, i, r = t.getContext("2d"), n = this.img.width, o = this.img.height, s = n / o, a = this.assetData.w / this.assetData.h, l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s > a && "xMidYMid slice" === l || s < a && "xMidYMid slice" !== l ? e = (i = o) * a : i = (e = n) / a,
                r.drawImage(this.img, (n - e) / 2, (o - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h),
                this.img = t
            }
        }
        ,
        CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }
        ,
        CVImageElement.prototype.destroy = function() {
            this.img = null
        }
        ,
        extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),
        CVCompElement.prototype.renderInnerContent = function() {
            var t, e = this.canvasContext;
            for (e.beginPath(),
            e.moveTo(0, 0),
            e.lineTo(this.data.w, 0),
            e.lineTo(this.data.w, this.data.h),
            e.lineTo(0, this.data.h),
            e.lineTo(0, 0),
            e.clip(),
            t = this.layers.length - 1; t >= 0; t -= 1)
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
        ,
        CVCompElement.prototype.destroy = function() {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy();
            this.layers = null,
            this.elements = null
        }
        ,
        CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t, e, i, r, n = this.element.finalTransform.mat, o = this.element.canvasContext, s = this.masksProperties.length;
                for (o.beginPath(),
                t = 0; t < s; t += 1)
                    if ("n" !== this.masksProperties[t].mode) {
                        var a;
                        this.masksProperties[t].inv && (o.moveTo(0, 0),
                        o.lineTo(this.element.globalData.compSize.w, 0),
                        o.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                        o.lineTo(0, this.element.globalData.compSize.h),
                        o.lineTo(0, 0)),
                        r = this.viewData[t].v,
                        e = n.applyToPointArray(r.v[0][0], r.v[0][1], 0),
                        o.moveTo(e[0], e[1]);
                        var l = r._length;
                        for (a = 1; a < l; a += 1)
                            i = n.applyToTriplePoints(r.o[a - 1], r.i[a], r.v[a]),
                            o.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                        i = n.applyToTriplePoints(r.o[a - 1], r.i[0], r.v[0]),
                        o.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                this.element.globalData.renderer.save(!0),
                o.clip()
            }
        }
        ,
        CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
        CVMaskElement.prototype.destroy = function() {
            this.element = null
        }
        ,
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
        CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
        CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        },
        CVShapeElement.prototype.dashResetter = [],
        CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }
        ,
        CVShapeElement.prototype.createStyleElement = function(t, e) {
            var i = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd
            }
              , r = {};
            if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this),
            r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this),
            r.e = PropertyFactory.getProp(this, t.e, 1, null, this),
            r.h = PropertyFactory.getProp(this, t.h || {
                k: 0
            }, 0, .01, this),
            r.a = PropertyFactory.getProp(this, t.a || {
                k: 0
            }, 0, degToRads, this),
            r.g = new GradientProperty(this,t.g,this)),
            r.o = PropertyFactory.getProp(this, t.o, 0, .01, this),
            "st" === t.ty || "gs" === t.ty) {
                if (i.lc = this.lcEnum[t.lc] || "round",
                i.lj = this.ljEnum[t.lj] || "round",
                1 == t.lj && (i.ml = t.ml),
                r.w = PropertyFactory.getProp(this, t.w, 0, null, this),
                r.w.k || (i.wi = r.w.v),
                t.d) {
                    var n = new DashProperty(this,t.d,"canvas",this);
                    r.d = n,
                    r.d.k || (i.da = r.d.dashArray,
                    i.do = r.d.dashoffset[0])
                }
            } else
                i.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(i),
            r.style = i,
            r
        }
        ,
        CVShapeElement.prototype.createGroupElement = function() {
            return {
                it: [],
                prevViewData: []
            }
        }
        ,
        CVShapeElement.prototype.createTransformElement = function(t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            }
        }
        ,
        CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this,t,this.stylesList,this.transformsManager);
            return this.shapes.push(e),
            this.addShapeToModifiers(e),
            e
        }
        ,
        CVShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
            e = this.dynamicProperties.length,
            t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue();
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame)
        }
        ,
        CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, i = this.stylesList.length;
            for (e = 0; e < i; e += 1)
                this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }
        ,
        CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
                this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }
        ,
        CVShapeElement.prototype.closeStyles = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                t[e].closed = !0
        }
        ,
        CVShapeElement.prototype.searchShapes = function(t, e, i, r, n) {
            var o, s, a, l, h, c, u = t.length - 1, p = [], f = [], d = [].concat(n);
            for (o = u; o >= 0; o -= 1) {
                if ((l = this.searchProcessedElement(t[o])) ? e[o] = i[l - 1] : t[o]._shouldRender = r,
                "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty)
                    l ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], d),
                    p.push(e[o].style);
                else if ("gr" === t[o].ty) {
                    if (l)
                        for (a = e[o].it.length,
                        s = 0; s < a; s += 1)
                            e[o].prevViewData[s] = e[o].it[s];
                    else
                        e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, r, d)
                } else
                    "tr" === t[o].ty ? (l || (c = this.createTransformElement(t[o]),
                    e[o] = c),
                    d.push(e[o]),
                    this.addTransformToStyleList(e[o])) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? l || (e[o] = this.createShapeElement(t[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "pb" === t[o].ty ? (l ? (h = e[o]).closed = !1 : ((h = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                    e[o] = h,
                    this.shapeModifiers.push(h)),
                    f.push(h)) : "rp" === t[o].ty && (l ? (h = e[o]).closed = !0 : (h = ShapeModifiers.getModifier(t[o].ty),
                    e[o] = h,
                    h.init(this, t, o, e),
                    this.shapeModifiers.push(h),
                    r = !1),
                    f.push(h));
                this.addProcessedElement(t[o], o + 1)
            }
            for (this.removeTransformFromStyleList(),
            this.closeStyles(p),
            u = f.length,
            o = 0; o < u; o += 1)
                f[o].closed = !0
        }
        ,
        CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1,
            this.transformHelper._opMdf = !1,
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }
        ,
        CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity,
            e.opacity *= e.op.v,
            e._opMdf = !0)
        }
        ,
        CVShapeElement.prototype.drawLayer = function() {
            var t, e, i, r, n, o, s, a, l, h = this.stylesList.length, c = this.globalData.renderer, u = this.globalData.canvasContext;
            for (t = 0; t < h; t += 1)
                if (("st" !== (a = (l = this.stylesList[t]).type) && "gs" !== a || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (c.save(),
                    o = l.elements,
                    "st" === a || "gs" === a ? (u.strokeStyle = "st" === a ? l.co : l.grd,
                    u.lineWidth = l.wi,
                    u.lineCap = l.lc,
                    u.lineJoin = l.lj,
                    u.miterLimit = l.ml || 0) : u.fillStyle = "fl" === a ? l.co : l.grd,
                    c.ctxOpacity(l.coOp),
                    "st" !== a && "gs" !== a && u.beginPath(),
                    c.ctxTransform(l.preTransforms.finalTransform.props),
                    i = o.length,
                    e = 0; e < i; e += 1) {
                        for ("st" !== a && "gs" !== a || (u.beginPath(),
                        l.da && (u.setLineDash(l.da),
                        u.lineDashOffset = l.do)),
                        n = (s = o[e].trNodes).length,
                        r = 0; r < n; r += 1)
                            "m" === s[r].t ? u.moveTo(s[r].p[0], s[r].p[1]) : "c" === s[r].t ? u.bezierCurveTo(s[r].pts[0], s[r].pts[1], s[r].pts[2], s[r].pts[3], s[r].pts[4], s[r].pts[5]) : u.closePath();
                        "st" !== a && "gs" !== a || (u.stroke(),
                        l.da && u.setLineDash(this.dashResetter))
                    }
                    "st" !== a && "gs" !== a && u.fill(l.r),
                    c.restore()
                }
        }
        ,
        CVShapeElement.prototype.renderShape = function(t, e, i, r) {
            var n, o;
            for (o = t,
            n = e.length - 1; n >= 0; n -= 1)
                "tr" === e[n].ty ? (o = i[n].transform,
                this.renderShapeTransform(t, o)) : "sh" === e[n].ty || "el" === e[n].ty || "rc" === e[n].ty || "sr" === e[n].ty ? this.renderPath(e[n], i[n]) : "fl" === e[n].ty ? this.renderFill(e[n], i[n], o) : "st" === e[n].ty ? this.renderStroke(e[n], i[n], o) : "gf" === e[n].ty || "gs" === e[n].ty ? this.renderGradientFill(e[n], i[n], o) : "gr" === e[n].ty ? this.renderShape(o, e[n].it, i[n].it) : e[n].ty;
            r && this.drawLayer()
        }
        ,
        CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i, r, n, o = t.trNodes, s = e.paths, a = s._length;
                o.length = 0;
                var l = t.transforms.finalTransform;
                for (n = 0; n < a; n += 1) {
                    var h = s.shapes[n];
                    if (h && h.v) {
                        for (r = h._length,
                        i = 1; i < r; i += 1)
                            1 === i && o.push({
                                t: "m",
                                p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                            }),
                            o.push({
                                t: "c",
                                pts: l.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i])
                            });
                        1 === r && o.push({
                            t: "m",
                            p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }),
                        h.c && r && (o.push({
                            t: "c",
                            pts: l.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0])
                        }),
                        o.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = o
            }
        }
        ,
        CVShapeElement.prototype.renderPath = function(t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var i, r = e.styledShapes.length;
                for (i = 0; i < r; i += 1)
                    this.renderStyledShape(e.styledShapes[i], e.sh)
            }
        }
        ,
        CVShapeElement.prototype.renderFill = function(t, e, i) {
            var r = e.style;
            (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
            (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
        }
        ,
        CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
            var r, n = e.style;
            if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var o, s = this.globalData.canvasContext, a = e.s.v, l = e.e.v;
                if (1 === t.t)
                    r = s.createLinearGradient(a[0], a[1], l[0], l[1]);
                else {
                    var h = Math.sqrt(Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2))
                      , c = Math.atan2(l[1] - a[1], l[0] - a[0])
                      , u = e.h.v;
                    u >= 1 ? u = .99 : u <= -1 && (u = -.99);
                    var p = h * u
                      , f = Math.cos(c + e.a.v) * p + a[0]
                      , d = Math.sin(c + e.a.v) * p + a[1];
                    r = s.createRadialGradient(f, d, 0, a[0], a[1], h)
                }
                var m = t.g.p
                  , y = e.g.c
                  , g = 1;
                for (o = 0; o < m; o += 1)
                    e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * o + 1]),
                    r.addColorStop(y[4 * o] / 100, "rgba(" + y[4 * o + 1] + "," + y[4 * o + 2] + "," + y[4 * o + 3] + "," + g + ")");
                n.grd = r
            }
            n.coOp = e.o.v * i.opacity
        }
        ,
        CVShapeElement.prototype.renderStroke = function(t, e, i) {
            var r = e.style
              , n = e.d;
            n && (n._mdf || this._isFirstFrame) && (r.da = n.dashArray,
            r.do = n.dashoffset[0]),
            (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
            (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity),
            (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
        }
        ,
        CVShapeElement.prototype.destroy = function() {
            this.shapesData = null,
            this.globalData = null,
            this.canvasContext = null,
            this.stylesList.length = 0,
            this.itemsData.length = 0
        }
        ,
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
        CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
        CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
        CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc,
            t.fillRect(0, 0, this.data.sw, this.data.sh)
        }
        ,
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
        CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
        CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0,
            this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
            this.fill = e;
            var i = !1;
            t.sc && (i = !0,
            this.values.stroke = this.buildColor(t.sc),
            this.values.sWidth = t.sw);
            var r, n, o, s, a, l, h, c, u, p, f, d, m = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
            this.stroke = i,
            this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
            n = t.finalText.length;
            var v = this.data.singleShape
              , b = .001 * t.tr * t.finalSize
              , w = 0
              , S = 0
              , x = !0
              , _ = 0;
            for (r = 0; r < n; r += 1) {
                for (s = (o = this.globalData.fontManager.getCharData(t.finalText[r], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && o.data || {},
                g.reset(),
                v && y[r].n && (w = -b,
                S += t.yOffset,
                S += x ? 1 : 0,
                x = !1),
                u = (h = s.shapes ? s.shapes[0].it : []).length,
                g.scale(t.finalSize / 100, t.finalSize / 100),
                v && this.applyTextPropertiesToMatrix(t, g, y[r].line, w, S),
                f = createSizedArray(u),
                c = 0; c < u; c += 1) {
                    for (l = h[c].ks.k.i.length,
                    p = h[c].ks.k,
                    d = [],
                    a = 1; a < l; a += 1)
                        1 === a && d.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)),
                        d.push(g.applyToX(p.o[a - 1][0], p.o[a - 1][1], 0), g.applyToY(p.o[a - 1][0], p.o[a - 1][1], 0), g.applyToX(p.i[a][0], p.i[a][1], 0), g.applyToY(p.i[a][0], p.i[a][1], 0), g.applyToX(p.v[a][0], p.v[a][1], 0), g.applyToY(p.v[a][0], p.v[a][1], 0));
                    d.push(g.applyToX(p.o[a - 1][0], p.o[a - 1][1], 0), g.applyToY(p.o[a - 1][0], p.o[a - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)),
                    f[c] = d
                }
                v && (w += y[r].l,
                w += b),
                this.textSpans[_] ? this.textSpans[_].elem = f : this.textSpans[_] = {
                    elem: f
                },
                _ += 1
            }
        }
        ,
        CVTextElement.prototype.renderInnerContent = function() {
            var t, e, i, r, n, o, s = this.canvasContext;
            s.font = this.values.fValue,
            s.lineCap = "butt",
            s.lineJoin = "miter",
            s.miterLimit = 4,
            this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var a, l = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
            e = h.length;
            var c, u, p = null, f = null, d = null;
            for (t = 0; t < e; t += 1)
                if (!h[t].n) {
                    if ((a = l[t]) && (this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(a.p),
                    this.globalData.renderer.ctxOpacity(a.o)),
                    this.fill) {
                        for (a && a.fc ? p !== a.fc && (p = a.fc,
                        s.fillStyle = a.fc) : p !== this.values.fill && (p = this.values.fill,
                        s.fillStyle = this.values.fill),
                        r = (c = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0; i < r; i += 1)
                            for (o = (u = c[i]).length,
                            this.globalData.canvasContext.moveTo(u[0], u[1]),
                            n = 2; n < o; n += 6)
                                this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
                        this.globalData.canvasContext.closePath(),
                        this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (a && a.sw ? d !== a.sw && (d = a.sw,
                        s.lineWidth = a.sw) : d !== this.values.sWidth && (d = this.values.sWidth,
                        s.lineWidth = this.values.sWidth),
                        a && a.sc ? f !== a.sc && (f = a.sc,
                        s.strokeStyle = a.sc) : f !== this.values.stroke && (f = this.values.stroke,
                        s.strokeStyle = this.values.stroke),
                        r = (c = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0; i < r; i += 1)
                            for (o = (u = c[i]).length,
                            this.globalData.canvasContext.moveTo(u[0], u[1]),
                            n = 2; n < o; n += 6)
                                this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
                        this.globalData.canvasContext.closePath(),
                        this.globalData.canvasContext.stroke()
                    }
                    a && this.globalData.renderer.restore()
                }
        }
        ,
        CVEffects.prototype.renderFrame = function() {}
        ,
        HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"),
                this.data.hasMask ? (this.svgElement = createNS("svg"),
                this.layerElement = createNS("g"),
                this.maskedElement = this.layerElement,
                this.svgElement.appendChild(this.layerElement),
                this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this),
                this.transformedElement = this.baseElement,
                this.maskedElement = this.layerElement,
                this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e,
                    t.webkitTransform = e
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null,
                this.transformedElement = null,
                this.matteElement && (this.matteElement = null),
                this.maskManager && (this.maskManager.destroy(),
                this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data,this,this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        },
        HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
        HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
        HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting,
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
        HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.svgElement.setAttribute("width", this.data.sw),
            this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px",
            t.style.height = this.data.sh + "px",
            t.style.backgroundColor = this.data.sc),
            this.layerElement.appendChild(t)
        }
        ,
        extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
        HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
        HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(),
            this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
            this.svgElement.setAttribute("height", this.data.h),
            this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }
        ,
        HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var i, r = 0; r < e; )
                this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()),
                r += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }
        ,
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
        HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
        HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0,
            this.data.hasMask)
                this.layerElement.appendChild(this.shapesContainer),
                t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w),
                t.setAttribute("height", e.h),
                t.appendChild(this.shapesContainer),
                this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
            this.filterUniqueShapes(),
            this.shapeCont = t
        }
        ,
        HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1)
                e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }
        ,
        HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var i, r, n, o, s, a = t.sh.v, l = t.transformers, h = a._length;
            if (!(h <= 1)) {
                for (i = 0; i < h - 1; i += 1)
                    r = this.getTransformedPoint(l, a.v[i]),
                    n = this.getTransformedPoint(l, a.o[i]),
                    o = this.getTransformedPoint(l, a.i[i + 1]),
                    s = this.getTransformedPoint(l, a.v[i + 1]),
                    this.checkBounds(r, n, o, s, e);
                a.c && (r = this.getTransformedPoint(l, a.v[i]),
                n = this.getTransformedPoint(l, a.o[i]),
                o = this.getTransformedPoint(l, a.i[0]),
                s = this.getTransformedPoint(l, a.v[0]),
                this.checkBounds(r, n, o, s, e))
            }
        }
        ,
        HShapeElement.prototype.checkBounds = function(t, e, i, r, n) {
            this.getBoundsOfCurve(t, e, i, r);
            var o = this.shapeBoundingBox;
            n.x = bmMin(o.left, n.x),
            n.xMax = bmMax(o.right, n.xMax),
            n.y = bmMin(o.top, n.y),
            n.yMax = bmMax(o.bottom, n.yMax)
        }
        ,
        HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        },
        HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
            for (var n, o, s, a, l, h, c, u = [[t[0], r[0]], [t[1], r[1]]], p = 0; p < 2; ++p)
                o = 6 * t[p] - 12 * e[p] + 6 * i[p],
                n = -3 * t[p] + 9 * e[p] - 9 * i[p] + 3 * r[p],
                s = 3 * e[p] - 3 * t[p],
                o |= 0,
                s |= 0,
                0 === (n |= 0) && 0 === o || (0 === n ? (a = -s / o) > 0 && a < 1 && u[p].push(this.calculateF(a, t, e, i, r, p)) : (l = o * o - 4 * s * n) >= 0 && ((h = (-o + bmSqrt(l)) / (2 * n)) > 0 && h < 1 && u[p].push(this.calculateF(h, t, e, i, r, p)),
                (c = (-o - bmSqrt(l)) / (2 * n)) > 0 && c < 1 && u[p].push(this.calculateF(c, t, e, i, r, p))));
            this.shapeBoundingBox.left = bmMin.apply(null, u[0]),
            this.shapeBoundingBox.top = bmMin.apply(null, u[1]),
            this.shapeBoundingBox.right = bmMax.apply(null, u[0]),
            this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
        }
        ,
        HShapeElement.prototype.calculateF = function(t, e, i, r, n, o) {
            return bmPow(1 - t, 3) * e[o] + 3 * bmPow(1 - t, 2) * t * i[o] + 3 * (1 - t) * bmPow(t, 2) * r[o] + bmPow(t, 3) * n[o]
        }
        ,
        HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1)
                t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
        }
        ,
        HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }
        ,
        HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox
                  , e = 999999;
                if (t.x = e,
                t.xMax = -e,
                t.y = e,
                t.yMax = -e,
                this.calculateBoundingBox(this.itemsData, t),
                t.width = t.xMax < t.x ? 0 : t.xMax - t.x,
                t.height = t.yMax < t.y ? 0 : t.yMax - t.y,
                this.currentBoxContains(t))
                    return;
                var i = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width,
                this.shapeCont.setAttribute("width", t.width),
                i = !0),
                this.currentBBox.h !== t.height && (this.currentBBox.h = t.height,
                this.shapeCont.setAttribute("height", t.height),
                i = !0),
                i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width,
                    this.currentBBox.h = t.height,
                    this.currentBBox.x = t.x,
                    this.currentBBox.y = t.y,
                    this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var r = this.shapeCont.style
                      , n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    r.transform = n,
                    r.webkitTransform = n
                }
            }
        }
        ,
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
        HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(),
            this.isMasked) {
                this.renderType = "svg",
                this.compW = this.comp.data.w,
                this.compH = this.comp.data.h,
                this.svgElement.setAttribute("width", this.compW),
                this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t),
                this.innerElem = t
            } else
                this.renderType = "html",
                this.innerElem = this.layerElement;
            this.checkParenting()
        }
        ,
        HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style
              , i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = i,
            e.color = i,
            t.sc && (e.stroke = this.buildColor(t.sc),
            e.strokeWidth = t.sw + "px");
            var r, n, o = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px",
                e.lineHeight = t.finalSize + "px",
                o.fClass)
                    this.innerElem.className = o.fClass;
                else {
                    e.fontFamily = o.fFamily;
                    var s = t.fWeight
                      , a = t.fStyle;
                    e.fontStyle = a,
                    e.fontWeight = s
                }
            var l, h, c, u = t.l;
            n = u.length;
            var p, f = this.mHelper, d = "", m = 0;
            for (r = 0; r < n; r += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", "butt"),
                l.setAttribute("stroke-linejoin", "round"),
                l.setAttribute("stroke-miterlimit", "4")),
                this.isMasked || (this.textSpans[m] ? c = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0,
                (c = createNS("svg")).appendChild(l),
                styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m],
                l = this.textPaths[m]) : (styleDiv(h = createTag("span")),
                styleDiv(l = createTag("span")),
                h.appendChild(l)),
                this.globalData.fontManager.chars) {
                    var y, g = this.globalData.fontManager.getCharData(t.finalText[r], o.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (y = g ? g.data : null,
                    f.reset(),
                    y && y.shapes && (p = y.shapes[0].it,
                    f.scale(t.finalSize / 100, t.finalSize / 100),
                    d = this.createPathShape(f, p),
                    l.setAttribute("d", d)),
                    this.isMasked)
                        this.innerElem.appendChild(l);
                    else {
                        if (this.innerElem.appendChild(h),
                        y && y.shapes) {
                            document.body.appendChild(c);
                            var v = c.getBBox();
                            c.setAttribute("width", v.width + 2),
                            c.setAttribute("height", v.height + 2),
                            c.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                            var b = c.style
                              , w = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                            b.transform = w,
                            b.webkitTransform = w,
                            u[r].yOffset = v.y - 1
                        } else
                            c.setAttribute("width", 1),
                            c.setAttribute("height", 1);
                        h.appendChild(c)
                    }
                } else if (l.textContent = u[r].val,
                l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                this.isMasked)
                    this.innerElem.appendChild(l);
                else {
                    this.innerElem.appendChild(h);
                    var S = l.style
                      , x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    S.transform = x,
                    S.webkitTransform = x
                }
                this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h,
                this.textSpans[m].style.display = "block",
                this.textPaths[m] = l,
                m += 1
            }
            for (; m < this.textSpans.length; )
                this.textSpans[m].style.display = "none",
                m += 1
        }
        ,
        HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag)
                    return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                    t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e,
                    t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var i, r, n, o, s, a = 0, l = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
                for (r = h.length,
                i = 0; i < r; i += 1)
                    h[i].n ? a += 1 : (o = this.textSpans[i],
                    s = this.textPaths[i],
                    n = l[a],
                    a += 1,
                    n._mdf.m && (this.isMasked ? o.setAttribute("transform", n.m) : (o.style.webkitTransform = n.m,
                    o.style.transform = n.m)),
                    o.style.opacity = n.o,
                    n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw),
                    n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc),
                    n.fc && n._mdf.fc && (s.setAttribute("fill", n.fc),
                    s.style.color = n.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var c = this.innerElem.getBBox();
                    this.currentBBox.w !== c.width && (this.currentBBox.w = c.width,
                    this.svgElement.setAttribute("width", c.width)),
                    this.currentBBox.h !== c.height && (this.currentBBox.h = c.height,
                    this.svgElement.setAttribute("height", c.height));
                    if (this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                        this.currentBBox.w = c.width + 2,
                        this.currentBBox.h = c.height + 2,
                        this.currentBBox.x = c.x - 1,
                        this.currentBBox.y = c.y - 1,
                        this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                        t = this.svgElement.style;
                        var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = u,
                        t.webkitTransform = u
                    }
                }
            }
        }
        ,
        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
        HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData)
              , e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"),
            this.imageElem.setAttribute("width", this.assetData.w + "px"),
            this.imageElem.setAttribute("height", this.assetData.h + "px"),
            this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
            this.layerElement.appendChild(this.imageElem),
            this.baseElement.setAttribute("width", this.assetData.w),
            this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
            e.crossOrigin = "anonymous",
            e.src = t,
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }
        ,
        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
        HCameraElement.prototype.setup = function() {
            var t, e, i, r, n = this.comp.threeDElements.length;
            for (t = 0; t < n; t += 1)
                if ("3d" === (e = this.comp.threeDElements[t]).type) {
                    i = e.perspectiveElem.style,
                    r = e.container.style;
                    var o = this.pe.v + "px"
                      , s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    i.perspective = o,
                    i.webkitPerspective = o,
                    r.transformOrigin = "0px 0px 0px",
                    r.mozTransformOrigin = "0px 0px 0px",
                    r.webkitTransformOrigin = "0px 0px 0px",
                    i.transform = s,
                    i.webkitTransform = s
                }
        }
        ,
        HCameraElement.prototype.createElements = function() {}
        ,
        HCameraElement.prototype.hide = function() {}
        ,
        HCameraElement.prototype.renderFrame = function() {
            var t, e, i = this._isFirstFrame;
            if (this.hierarchy)
                for (e = this.hierarchy.length,
                t = 0; t < e; t += 1)
                    i = this.hierarchy[t].finalTransform.mProp._mdf || i;
            if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(),
                this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                        var r = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
                        this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]),
                        this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v),
                        this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]),
                        this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a) {
                    var n;
                    n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var o = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2))
                      , s = [n[0] / o, n[1] / o, n[2] / o]
                      , a = Math.sqrt(s[2] * s[2] + s[0] * s[0])
                      , l = Math.atan2(s[1], a)
                      , h = Math.atan2(s[0], -s[2]);
                    this.mat.rotateY(h).rotateX(-l)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                this.mat.translate(0, 0, this.pe.v);
                var c = !this._prevMat.equals(this.mat);
                if ((c || this.pe._mdf) && this.comp.threeDElements) {
                    var u, p, f;
                    for (e = this.comp.threeDElements.length,
                    t = 0; t < e; t += 1)
                        if ("3d" === (u = this.comp.threeDElements[t]).type) {
                            if (c) {
                                var d = this.mat.toCSS();
                                (f = u.container.style).transform = d,
                                f.webkitTransform = d
                            }
                            this.pe._mdf && ((p = u.perspectiveElem.style).perspective = this.pe.v + "px",
                            p.webkitPerspective = this.pe.v + "px")
                        }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }
        ,
        HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }
        ,
        HCameraElement.prototype.destroy = function() {}
        ,
        HCameraElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        HEffects.prototype.renderFrame = function() {}
        ;
        var animationManager = function() {
            var t = {}
              , e = []
              , i = 0
              , r = 0
              , n = 0
              , o = !0
              , s = !1;
            function a(t) {
                for (var i = 0, n = t.target; i < r; )
                    e[i].animation === n && (e.splice(i, 1),
                    i -= 1,
                    r -= 1,
                    n.isPaused || c()),
                    i += 1
            }
            function l(t, i) {
                if (!t)
                    return null;
                for (var n = 0; n < r; ) {
                    if (e[n].elem === t && null !== e[n].elem)
                        return e[n].animation;
                    n += 1
                }
                var o = new AnimationItem;
                return u(o, t),
                o.setData(t, i),
                o
            }
            function h() {
                n += 1,
                d()
            }
            function c() {
                n -= 1
            }
            function u(t, i) {
                t.addEventListener("destroy", a),
                t.addEventListener("_active", h),
                t.addEventListener("_idle", c),
                e.push({
                    elem: i,
                    animation: t
                }),
                r += 1
            }
            function p(t) {
                var a, l = t - i;
                for (a = 0; a < r; a += 1)
                    e[a].animation.advanceTime(l);
                i = t,
                n && !s ? window.requestAnimationFrame(p) : o = !0
            }
            function f(t) {
                i = t,
                window.requestAnimationFrame(p)
            }
            function d() {
                !s && n && o && (window.requestAnimationFrame(f),
                o = !1)
            }
            return t.registerAnimation = l,
            t.loadAnimation = function(t) {
                var e = new AnimationItem;
                return u(e, null),
                e.setParams(t),
                e
            }
            ,
            t.setSpeed = function(t, i) {
                var n;
                for (n = 0; n < r; n += 1)
                    e[n].animation.setSpeed(t, i)
            }
            ,
            t.setDirection = function(t, i) {
                var n;
                for (n = 0; n < r; n += 1)
                    e[n].animation.setDirection(t, i)
            }
            ,
            t.play = function(t) {
                var i;
                for (i = 0; i < r; i += 1)
                    e[i].animation.play(t)
            }
            ,
            t.pause = function(t) {
                var i;
                for (i = 0; i < r; i += 1)
                    e[i].animation.pause(t)
            }
            ,
            t.stop = function(t) {
                var i;
                for (i = 0; i < r; i += 1)
                    e[i].animation.stop(t)
            }
            ,
            t.togglePause = function(t) {
                var i;
                for (i = 0; i < r; i += 1)
                    e[i].animation.togglePause(t)
            }
            ,
            t.searchAnimations = function(t, e, i) {
                var r, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), o = n.length;
                for (r = 0; r < o; r += 1)
                    i && n[r].setAttribute("data-bm-type", i),
                    l(n[r], t);
                if (e && 0 === o) {
                    i || (i = "svg");
                    var s = document.getElementsByTagName("body")[0];
                    s.innerText = "";
                    var a = createTag("div");
                    a.style.width = "100%",
                    a.style.height = "100%",
                    a.setAttribute("data-bm-type", i),
                    s.appendChild(a),
                    l(a, t)
                }
            }
            ,
            t.resize = function() {
                var t;
                for (t = 0; t < r; t += 1)
                    e[t].animation.resize()
            }
            ,
            t.goToAndStop = function(t, i, n) {
                var o;
                for (o = 0; o < r; o += 1)
                    e[o].animation.goToAndStop(t, i, n)
            }
            ,
            t.destroy = function(t) {
                var i;
                for (i = r - 1; i >= 0; i -= 1)
                    e[i].animation.destroy(t)
            }
            ,
            t.freeze = function() {
                s = !0
            }
            ,
            t.unfreeze = function() {
                s = !1,
                d()
            }
            ,
            t.setVolume = function(t, i) {
                var n;
                for (n = 0; n < r; n += 1)
                    e[n].animation.setVolume(t, i)
            }
            ,
            t.mute = function(t) {
                var i;
                for (i = 0; i < r; i += 1)
                    e[i].animation.mute(t)
            }
            ,
            t.unmute = function(t) {
                var i;
                for (i = 0; i < r; i += 1)
                    e[i].animation.unmute(t)
            }
            ,
            t.getRegisteredAnimations = function() {
                var t, i = e.length, r = [];
                for (t = 0; t < i; t += 1)
                    r.push(e[t].animation);
                return r
            }
            ,
            t
        }()
          , AnimationItem = function() {
            this._cbs = [],
            this.name = "",
            this.path = "",
            this.isLoaded = !1,
            this.currentFrame = 0,
            this.currentRawFrame = 0,
            this.firstFrame = 0,
            this.totalFrames = 0,
            this.frameRate = 0,
            this.frameMult = 0,
            this.playSpeed = 1,
            this.playDirection = 1,
            this.playCount = 0,
            this.animationData = {},
            this.assets = [],
            this.isPaused = !0,
            this.autoplay = !1,
            this.loop = !0,
            this.renderer = null,
            this.animationID = createElementID(),
            this.assetsPath = "",
            this.timeCompleted = 0,
            this.segmentPos = 0,
            this.isSubframeEnabled = subframeEnabled,
            this.segments = [],
            this._idle = !0,
            this._completedLoop = !1,
            this.projectInterface = ProjectInterface(),
            this.imagePreloader = new ImagePreloader,
            this.audioController = audioControllerFactory()
        };
        extendPrototype([BaseEvent], AnimationItem),
        AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer),
            e) {
            case "canvas":
                this.renderer = new CanvasRenderer(this,t.rendererSettings);
                break;
            case "svg":
                this.renderer = new SVGRenderer(this,t.rendererSettings);
                break;
            default:
                this.renderer = new HybridRenderer(this,t.rendererSettings)
            }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            this.animType = e,
            "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
            this.autoplay = !("autoplay"in t) || t.autoplay,
            this.name = t.name ? t.name : "",
            this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments,
            this.assetsPath = t.assetsPath,
            this.initialSegment = t.initialSegment,
            t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
            t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
            this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
            assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                this.trigger("data_failed")
            }
            .bind(this)))
        }
        ,
        AnimationItem.prototype.setData = function(t, e) {
            e && "object" != typeof e && (e = JSON.parse(e));
            var i = {
                wrapper: t,
                animationData: e
            }
              , r = t.attributes;
            i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "",
            i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
            var n = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
            "false" === n ? i.loop = !1 : "true" === n ? i.loop = !0 : "" !== n && (i.loop = parseInt(n, 10));
            var o = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
            i.autoplay = "false" !== o,
            i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "",
            "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1),
            this.setParams(i)
        }
        ,
        AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op,
            this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, i, r = this.animationData.layers, n = r.length, o = t.layers, s = o.length;
            for (i = 0; i < s; i += 1)
                for (e = 0; e < n; ) {
                    if (r[e].id === o[i].id) {
                        r[e] = o[i];
                        break
                    }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
            this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
            t.assets)
                for (n = t.assets.length,
                e = 0; e < n; e += 1)
                    this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1,
            dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
            this.renderer.includeLayers(t.layers),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.loadNextSegment()
        }
        ,
        AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments)
                return this.trigger("data_ready"),
                void (this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1,
            assetLoader.load(i, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }
            .bind(this))
        }
        ,
        AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames),
            this.loadNextSegment()
        }
        ,
        AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"),
            this.checkLoaded()
        }
        ,
        AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }
        ,
        AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer)
                try {
                    this.animationData = t,
                    this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                    this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                    this.firstFrame = Math.round(this.animationData.ip)),
                    this.renderer.configAnimation(t),
                    t.assets || (t.assets = []),
                    this.assets = this.animationData.assets,
                    this.frameRate = this.animationData.fr,
                    this.frameMult = this.animationData.fr / 1e3,
                    this.renderer.searchExtraCompositions(t.assets),
                    this.trigger("config_ready"),
                    this.preloadImages(),
                    this.loadSegments(),
                    this.updaFrameModifier(),
                    this.waitForFontsLoaded(),
                    this.isPaused && this.audioController.pause()
                } catch (t) {
                    this.triggerConfigError(t)
                }
        }
        ,
        AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }
        ,
        AnimationItem.prototype.checkLoaded = function() {
            this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0,
            dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.renderer.initItems(),
            setTimeout(function() {
                this.trigger("DOMLoaded")
            }
            .bind(this), 0),
            this.gotoFrame(),
            this.autoplay && this.play())
        }
        ,
        AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize()
        }
        ,
        AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }
        ,
        AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
            this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame()
        }
        ,
        AnimationItem.prototype.renderFrame = function() {
            if (!1 !== this.isLoaded)
                try {
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                    this.triggerRenderFrameError(t)
                }
        }
        ,
        AnimationItem.prototype.play = function(t) {
            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1,
            this.audioController.resume(),
            this._idle && (this._idle = !1,
            this.trigger("_active")))
        }
        ,
        AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0,
            this._idle = !0,
            this.trigger("_idle"),
            this.audioController.pause())
        }
        ,
        AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }
        ,
        AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(),
            this.playCount = 0,
            this._completedLoop = !1,
            this.setCurrentRawFrameValue(0))
        }
        ,
        AnimationItem.prototype.goToAndStop = function(t, e, i) {
            i && this.name !== i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier),
            this.pause())
        }
        ,
        AnimationItem.prototype.goToAndPlay = function(t, e, i) {
            this.goToAndStop(t, e, i),
            this.play()
        }
        ,
        AnimationItem.prototype.advanceTime = function(t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier
                  , i = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1,
                this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
                this._completedLoop = !0,
                this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0,
                e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0,
                e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
                this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
                i && (this.setCurrentRawFrameValue(e),
                this.pause(),
                this.trigger("complete"))
            }
        }
        ,
        AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0,
            t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
            this.totalFrames = t[0] - t[1],
            this.timeCompleted = this.totalFrames,
            this.firstFrame = t[1],
            this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
            this.totalFrames = t[1] - t[0],
            this.timeCompleted = this.totalFrames,
            this.firstFrame = t[0],
            this.setCurrentRawFrameValue(.001 + e)),
            this.trigger("segmentStart")
        }
        ,
        AnimationItem.prototype.setSegment = function(t, e) {
            var i = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
            this.firstFrame = t,
            this.totalFrames = e - t,
            this.timeCompleted = this.totalFrames,
            -1 !== i && this.goToAndStop(i, !0)
        }
        ,
        AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0),
            "object" == typeof t[0]) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1)
                    this.segments.push(t[i])
            } else
                this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play()
        }
        ,
        AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0,
            this.segments.push([this.animationData.ip, this.animationData.op]),
            t && this.checkSegments(0)
        }
        ,
        AnimationItem.prototype.checkSegments = function(t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t),
            !0)
        }
        ,
        AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            this._cbs = null,
            this.onEnterFrame = null,
            this.onLoopComplete = null,
            this.onComplete = null,
            this.onSegmentStart = null,
            this.onDestroy = null,
            this.renderer = null,
            this.renderer = null,
            this.imagePreloader = null,
            this.projectInterface = null)
        }
        ,
        AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t,
            this.gotoFrame()
        }
        ,
        AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t,
            this.updaFrameModifier()
        }
        ,
        AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1,
            this.updaFrameModifier()
        }
        ,
        AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }
        ,
        AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }
        ,
        AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }
        ,
        AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }
        ,
        AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
            this.audioController.setRate(this.playSpeed * this.playDirection)
        }
        ,
        AnimationItem.prototype.getPath = function() {
            return this.path
        }
        ,
        AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e)
                e = t.p;
            else if (this.assetsPath) {
                var i = t.p;
                -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                e = this.assetsPath + i
            } else
                e = this.path,
                e += t.u ? t.u : "",
                e += t.p;
            return e
        }
        ,
        AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, i = this.assets.length; e < i; ) {
                if (t === this.assets[e].id)
                    return this.assets[e];
                e += 1
            }
            return null
        }
        ,
        AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }
        ,
        AnimationItem.prototype.show = function() {
            this.renderer.show()
        }
        ,
        AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }
        ,
        AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t])
                switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t,this));
                    break;
                default:
                    this.triggerEvent(t)
                }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
            "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
            "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
            "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
            "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
        }
        ,
        AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
            this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e)
        }
        ,
        AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t,this.currentFrame);
            this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e)
        }
        ;
        var Expressions = function() {
            var t = {};
            return t.initExpressions = function(t) {
                var e = 0
                  , i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer),
                t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                t.renderer.globalData.pushExpression = function() {
                    e += 1
                }
                ,
                t.renderer.globalData.popExpression = function() {
                    0 === (e -= 1) && function() {
                        var t, e = i.length;
                        for (t = 0; t < e; t += 1)
                            i[t].release();
                        i.length = 0
                    }()
                }
                ,
                t.renderer.globalData.registerExpressionProperty = function(t) {
                    -1 === i.indexOf(t) && i.push(t)
                }
            }
            ,
            t
        }();
        expressionsPlugin = Expressions;
        var ExpressionManager = function() {
            var ob = {}
              , Math = BMMath
              , window = null
              , document = null;
            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array
            }
            function isNumerable(t, e) {
                return "number" === t || "boolean" === t || "string" === t || e instanceof Number
            }
            function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e || t instanceof Number)
                    return -t;
                if ($bm_isInstanceOfArray(t)) {
                    var i, r = t.length, n = [];
                    for (i = 0; i < r; i += 1)
                        n[i] = -t[i];
                    return n
                }
                return t.propType ? t.v : -t
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
              , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
              , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
            function sum(t, e) {
                var i = typeof t
                  , r = typeof e;
                if ("string" === i || "string" === r)
                    return t + e;
                if (isNumerable(i, t) && isNumerable(r, e))
                    return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                    return (t = t.slice(0))[0] += e,
                    t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                    return (e = e.slice(0))[0] = t + e[0],
                    e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var n = 0, o = t.length, s = e.length, a = []; n < o || n < s; )
                        ("number" == typeof t[n] || t[n]instanceof Number) && ("number" == typeof e[n] || e[n]instanceof Number) ? a[n] = t[n] + e[n] : a[n] = void 0 === e[n] ? t[n] : t[n] || e[n],
                        n += 1;
                    return a
                }
                return 0
            }
            var add = sum;
            function sub(t, e) {
                var i = typeof t
                  , r = typeof e;
                if (isNumerable(i, t) && isNumerable(r, e))
                    return "string" === i && (t = parseInt(t, 10)),
                    "string" === r && (e = parseInt(e, 10)),
                    t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                    return (t = t.slice(0))[0] -= e,
                    t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                    return (e = e.slice(0))[0] = t - e[0],
                    e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var n = 0, o = t.length, s = e.length, a = []; n < o || n < s; )
                        ("number" == typeof t[n] || t[n]instanceof Number) && ("number" == typeof e[n] || e[n]instanceof Number) ? a[n] = t[n] - e[n] : a[n] = void 0 === e[n] ? t[n] : t[n] || e[n],
                        n += 1;
                    return a
                }
                return 0
            }
            function mul(t, e) {
                var i, r, n, o = typeof t, s = typeof e;
                if (isNumerable(o, t) && isNumerable(s, e))
                    return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                    for (n = t.length,
                    i = createTypedArray("float32", n),
                    r = 0; r < n; r += 1)
                        i[r] = t[r] * e;
                    return i
                }
                if (isNumerable(o, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length,
                    i = createTypedArray("float32", n),
                    r = 0; r < n; r += 1)
                        i[r] = t * e[r];
                    return i
                }
                return 0
            }
            function div(t, e) {
                var i, r, n, o = typeof t, s = typeof e;
                if (isNumerable(o, t) && isNumerable(s, e))
                    return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                    for (n = t.length,
                    i = createTypedArray("float32", n),
                    r = 0; r < n; r += 1)
                        i[r] = t[r] / e;
                    return i
                }
                if (isNumerable(o, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length,
                    i = createTypedArray("float32", n),
                    r = 0; r < n; r += 1)
                        i[r] = t / e[r];
                    return i
                }
                return 0
            }
            function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t, 10)),
                "string" == typeof e && (e = parseInt(e, 10)),
                t % e
            }
            var $bm_sum = sum
              , $bm_sub = sub
              , $bm_mul = mul
              , $bm_div = div
              , $bm_mod = mod;
            function clamp(t, e, i) {
                if (e > i) {
                    var r = i;
                    i = e,
                    e = r
                }
                return Math.min(Math.max(t, e), i)
            }
            function radiansToDegrees(t) {
                return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
                return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees
              , helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
                if ("number" == typeof t || t instanceof Number)
                    return e = e || 0,
                    Math.abs(t - e);
                var i;
                e || (e = helperLengthArray);
                var r = Math.min(t.length, e.length)
                  , n = 0;
                for (i = 0; i < r; i += 1)
                    n += Math.pow(e[i] - t[i], 2);
                return Math.sqrt(n)
            }
            function normalize(t) {
                return div(t, length(t))
            }
            function rgbToHsl(t) {
                var e, i, r = t[0], n = t[1], o = t[2], s = Math.max(r, n, o), a = Math.min(r, n, o), l = (s + a) / 2;
                if (s === a)
                    e = 0,
                    i = 0;
                else {
                    var h = s - a;
                    switch (i = l > .5 ? h / (2 - s - a) : h / (s + a),
                    s) {
                    case r:
                        e = (n - o) / h + (n < o ? 6 : 0);
                        break;
                    case n:
                        e = (o - r) / h + 2;
                        break;
                    case o:
                        e = (r - n) / h + 4
                    }
                    e /= 6
                }
                return [e, i, l, t[3]]
            }
            function hue2rgb(t, e, i) {
                return i < 0 && (i += 1),
                i > 1 && (i -= 1),
                i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            function hslToRgb(t) {
                var e, i, r, n = t[0], o = t[1], s = t[2];
                if (0 === o)
                    e = s,
                    r = s,
                    i = s;
                else {
                    var a = s < .5 ? s * (1 + o) : s + o - s * o
                      , l = 2 * s - a;
                    e = hue2rgb(l, a, n + 1 / 3),
                    i = hue2rgb(l, a, n),
                    r = hue2rgb(l, a, n - 1 / 3)
                }
                return [e, i, r, t[3]]
            }
            function linear(t, e, i, r, n) {
                if (void 0 !== r && void 0 !== n || (r = e,
                n = i,
                e = 0,
                i = 1),
                i < e) {
                    var o = i;
                    i = e,
                    e = o
                }
                if (t <= e)
                    return r;
                if (t >= i)
                    return n;
                var s, a = i === e ? 0 : (t - e) / (i - e);
                if (!r.length)
                    return r + (n - r) * a;
                var l = r.length
                  , h = createTypedArray("float32", l);
                for (s = 0; s < l; s += 1)
                    h[s] = r[s] + (n[s] - r[s]) * a;
                return h
            }
            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0,
                e = 1) : (e = t,
                t = void 0)),
                e.length) {
                    var i, r = e.length;
                    t || (t = createTypedArray("float32", r));
                    var n = createTypedArray("float32", r)
                      , o = BMMath.random();
                    for (i = 0; i < r; i += 1)
                        n[i] = t[i] + o * (e[i] - t[i]);
                    return n
                }
                return void 0 === t && (t = 0),
                t + BMMath.random() * (e - t)
            }
            function createPath(t, e, i, r) {
                var n, o = t.length, s = shapePool.newElement();
                s.setPathData(!!r, o);
                var a, l, h = [0, 0];
                for (n = 0; n < o; n += 1)
                    a = e && e[n] ? e[n] : h,
                    l = i && i[n] ? i[n] : h,
                    s.setTripleAt(t[n][0], t[n][1], l[0] + t[n][0], l[1] + t[n][1], a[0] + t[n][0], a[1] + t[n][1], n, !0);
                return s
            }
            function initiateExpression(elem, data, property) {
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime,
                Object.defineProperty(thisProperty, "value", {
                    get: function() {
                        return thisProperty.v
                    }
                }),
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = function(t, e) {
                    var i, r, n = this.pv.length ? this.pv.length : 1, o = createTypedArray("float32", n);
                    var s = Math.floor(5 * time);
                    for (i = 0,
                    r = 0; i < s; ) {
                        for (r = 0; r < n; r += 1)
                            o[r] += -e + 2 * e * BMMath.random();
                        i += 1
                    }
                    var a = 5 * time
                      , l = a - Math.floor(a)
                      , h = createTypedArray("float32", n);
                    if (n > 1) {
                        for (r = 0; r < n; r += 1)
                            h[r] = this.pv[r] + o[r] + (-e + 2 * e * BMMath.random()) * l;
                        return h
                    }
                    return this.pv + o[0] + (-e + 2 * e * BMMath.random()) * l
                }
                .bind(this);
                function loopInDuration(t, e) {
                    return loopIn(t, e, !0)
                }
                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0)
                }
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                loop_in = loopIn),
                thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                loop_out = loopOut),
                thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                function lookAt(t, e) {
                    var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                      , r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                    return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                }
                function easeOut(t, e, i, r, n) {
                    return applyEase(easeOutBez, t, e, i, r, n)
                }
                function easeIn(t, e, i, r, n) {
                    return applyEase(easeInBez, t, e, i, r, n)
                }
                function ease(t, e, i, r, n) {
                    return applyEase(easeInOutBez, t, e, i, r, n)
                }
                function applyEase(t, e, i, r, n, o) {
                    void 0 === n ? (n = i,
                    o = r) : e = (e - i) / (r - i),
                    e > 1 ? e = 1 : e < 0 && (e = 0);
                    var s = t(e);
                    if ($bm_isInstanceOfArray(n)) {
                        var a, l = n.length, h = createTypedArray("float32", l);
                        for (a = 0; a < l; a += 1)
                            h[a] = (o[a] - n[a]) * s + n[a];
                        return h
                    }
                    return (o - n) * s + n
                }
                function nearestKey(t) {
                    var e, i, r, n = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0])
                        if (i = -1,
                        (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                            i = 1,
                            r = data.k[0].t;
                        else {
                            for (e = 0; e < n - 1; e += 1) {
                                if (t === data.k[e].t) {
                                    i = e + 1,
                                    r = data.k[e].t;
                                    break
                                }
                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                    t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2,
                                    r = data.k[e + 1].t) : (i = e + 1,
                                    r = data.k[e].t);
                                    break
                                }
                            }
                            -1 === i && (i = e + 1,
                            r = data.k[e].t)
                        }
                    else
                        i = 0,
                        r = 0;
                    var o = {};
                    return o.index = i,
                    o.time = r / elem.comp.globalData.frameRate,
                    o
                }
                function key(t) {
                    var e, i, r;
                    if (!data.k.length || "number" == typeof data.k[0])
                        throw new Error("The property has no keyframe at index " + t);
                    t -= 1,
                    e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for (r = n.length,
                    i = 0; i < r; i += 1)
                        e[i] = n[i],
                        e.value[i] = n[i];
                    return e
                }
                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate),
                    t / e
                }
                function timeToFrames(t, e) {
                    return t || 0 === t || (t = time),
                    e || (e = elem.comp.globalData.frameRate),
                    t * e
                }
                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }
                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }
                function substring(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                }
                function substr(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                }
                function posterizeTime(t) {
                    time = 0 === t ? 0 : Math.floor(time * t) / t,
                    value = valueAtTime(time)
                }
                var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                function executeExpression(t) {
                    return value = t,
                    _needsRandom && seedRandom(randSeed),
                    this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex,
                    textTotal = this.textTotal,
                    selectorValue = this.selectorValue),
                    thisLayer || (text = elem.layerInterface.text,
                    thisLayer = elem.layerInterface,
                    thisComp = elem.comp.compInterface,
                    toWorld = thisLayer.toWorld.bind(thisLayer),
                    fromWorld = thisLayer.fromWorld.bind(thisLayer),
                    fromComp = thisLayer.fromComp.bind(thisLayer),
                    toComp = thisLayer.toComp.bind(thisLayer),
                    mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                    fromCompToSurface = fromComp),
                    transform || (transform = elem.layerInterface("ADBE Transform Group"),
                    $bm_transform = transform,
                    transform && (anchorPoint = transform.anchorPoint)),
                    4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                    effect || (effect = thisLayer(4)),
                    (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface),
                    time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    this.frameExpressionId = elem.globalData.frameId,
                    "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v),
                    scoped_bm_rt)
                }
                return executeExpression
            }
            return ob.initiateExpression = initiateExpression,
            ob
        }()
          , expressionHelpers = {
            searchExpressions: function(t, e, i) {
                e.x && (i.k = !0,
                i.x = !0,
                i.initiateExpression = ExpressionManager.initiateExpression,
                i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
            },
            getSpeedAtTime: function(t) {
                var e = this.getValueAtTime(t)
                  , i = this.getValueAtTime(t + -.01)
                  , r = 0;
                if (e.length) {
                    var n;
                    for (n = 0; n < e.length; n += 1)
                        r += Math.pow(i[n] - e[n], 2);
                    r = 100 * Math.sqrt(r)
                } else
                    r = 0;
                return r
            },
            getVelocityAtTime: function(t) {
                if (void 0 !== this.vel)
                    return this.vel;
                var e, i, r = this.getValueAtTime(t), n = this.getValueAtTime(t + -.001);
                if (r.length)
                    for (e = createTypedArray("float32", r.length),
                    i = 0; i < r.length; i += 1)
                        e[i] = (n[i] - r[i]) / -.001;
                else
                    e = (n - r) / -.001;
                return e
            },
            getValueAtTime: function(t) {
                return t *= this.elem.globalData.frameRate,
                (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0,
                this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime),
                this._cachingAtTime.lastFrame = t),
                this._cachingAtTime.value
            },
            getStaticValueAtTime: function() {
                return this.pv
            },
            setGroupProperty: function(t) {
                this.propertyGroup = t
            }
        };
        !function() {
            function t(t, e, i) {
                if (!this.k || !this.keyframes)
                    return this.pv;
                t = t ? t.toLowerCase() : "";
                var r, n, o, s, a, l = this.comp.renderedFrame, h = this.keyframes, c = h[h.length - 1].t;
                if (l <= c)
                    return this.pv;
                if (i ? n = c - (r = e ? Math.abs(c - this.elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1),
                r = c - (n = h[h.length - 1 - e].t)),
                "pingpong" === t) {
                    if (Math.floor((l - n) / r) % 2 != 0)
                        return this.getValueAtTime((r - (l - n) % r + n) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0)
                          , p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                          , f = this.getValueAtTime(((l - n) % r + n) / this.comp.globalData.frameRate, 0)
                          , d = Math.floor((l - n) / r);
                        if (this.pv.length) {
                            for (s = (a = new Array(u.length)).length,
                            o = 0; o < s; o += 1)
                                a[o] = (p[o] - u[o]) * d + f[o];
                            return a
                        }
                        return (p - u) * d + f
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                          , y = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (s = (a = new Array(m.length)).length,
                            o = 0; o < s; o += 1)
                                a[o] = m[o] + (m[o] - y[o]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
                            return a
                        }
                        return m + (l - c) / .001 * (m - y)
                    }
                }
                return this.getValueAtTime(((l - n) % r + n) / this.comp.globalData.frameRate, 0)
            }
            function e(t, e, i) {
                if (!this.k)
                    return this.pv;
                t = t ? t.toLowerCase() : "";
                var r, n, o, s, a, l = this.comp.renderedFrame, h = this.keyframes, c = h[0].t;
                if (l >= c)
                    return this.pv;
                if (i ? n = c + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > h.length - 1) && (e = h.length - 1),
                r = (n = h[e].t) - c),
                "pingpong" === t) {
                    if (Math.floor((c - l) / r) % 2 == 0)
                        return this.getValueAtTime(((c - l) % r + c) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                          , p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0)
                          , f = this.getValueAtTime((r - (c - l) % r + c) / this.comp.globalData.frameRate, 0)
                          , d = Math.floor((c - l) / r) + 1;
                        if (this.pv.length) {
                            for (s = (a = new Array(u.length)).length,
                            o = 0; o < s; o += 1)
                                a[o] = f[o] - (p[o] - u[o]) * d;
                            return a
                        }
                        return f - (p - u) * d
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0)
                          , y = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (s = (a = new Array(m.length)).length,
                            o = 0; o < s; o += 1)
                                a[o] = m[o] + (m[o] - y[o]) * (c - l) / .001;
                            return a
                        }
                        return m + (m - y) * (c - l) / .001
                    }
                }
                return this.getValueAtTime((r - ((c - l) % r + c)) / this.comp.globalData.frameRate, 0)
            }
            function i(t, e) {
                if (!this.k)
                    return this.pv;
                if (t = .5 * (t || .4),
                (e = Math.floor(e || 5)) <= 1)
                    return this.pv;
                var i, r, n = this.comp.renderedFrame / this.comp.globalData.frameRate, o = n - t, s = e > 1 ? (n + t - o) / (e - 1) : 1, a = 0, l = 0;
                for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; a < e; ) {
                    if (r = this.getValueAtTime(o + a * s),
                    this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1)
                            i[l] += r[l];
                    else
                        i += r;
                    a += 1
                }
                if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1)
                        i[l] /= e;
                else
                    i /= e;
                return i
            }
            function r(t) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var e = this._transformCachingAtTime.v;
                if (e.cloneFromProps(this.pre.props),
                this.appliedTransformations < 1) {
                    var i = this.a.getValueAtTime(t);
                    e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var r = this.s.getValueAtTime(t);
                    e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var n = this.sk.getValueAtTime(t)
                      , o = this.sa.getValueAtTime(t);
                    e.skewFromAxis(-n * this.sk.mult, o * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var s = this.r.getValueAtTime(t);
                    e.rotate(-s * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var a = this.rz.getValueAtTime(t)
                      , l = this.ry.getValueAtTime(t)
                      , h = this.rx.getValueAtTime(t)
                      , c = this.or.getValueAtTime(t);
                    e.rotateZ(-a * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var u = this.px.getValueAtTime(t)
                      , p = this.py.getValueAtTime(t);
                    if (this.data.p.z) {
                        var f = this.pz.getValueAtTime(t);
                        e.translate(u * this.px.mult, p * this.py.mult, -f * this.pz.mult)
                    } else
                        e.translate(u * this.px.mult, p * this.py.mult, 0)
                } else {
                    var d = this.p.getValueAtTime(t);
                    e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                }
                return e
            }
            function n() {
                return this.v.clone(new Matrix)
            }
            var o = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                var s = o(t, e, i);
                return s.dynamicProperties.length ? s.getValueAtTime = r.bind(s) : s.getValueAtTime = n.bind(s),
                s.setGroupProperty = expressionHelpers.setGroupProperty,
                s
            }
            ;
            var s = PropertyFactory.getProp;
            PropertyFactory.getProp = function(r, n, o, a, l) {
                var h = s(r, n, o, a, l);
                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h),
                h.setGroupProperty = expressionHelpers.setGroupProperty,
                h.loopOut = t,
                h.loopIn = e,
                h.smooth = i,
                h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h),
                h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h),
                h.numKeys = 1 === n.a ? n.k.length : 0,
                h.propertyIndex = n.ix;
                var c = 0;
                return 0 !== o && (c = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)),
                h._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: c
                },
                expressionHelpers.searchExpressions(r, n, h),
                h.k && l.addDynamicProperty(h),
                h
            }
            ;
            var a = ShapePropertyFactory.getConstructorFunction()
              , l = ShapePropertyFactory.getKeyframedConstructorFunction();
            function h() {}
            h.prototype = {
                vertices: function(t, e) {
                    this.k && this.getValue();
                    var i, r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0));
                    var n = r._length
                      , o = r[t]
                      , s = r.v
                      , a = createSizedArray(n);
                    for (i = 0; i < n; i += 1)
                        a[i] = "i" === t || "o" === t ? [o[i][0] - s[i][0], o[i][1] - s[i][1]] : [o[i][0], o[i][1]];
                    return a
                },
                points: function(t) {
                    return this.vertices("v", t)
                },
                inTangents: function(t) {
                    return this.vertices("i", t)
                },
                outTangents: function(t) {
                    return this.vertices("o", t)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(t, e) {
                    var i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0)),
                    this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var r, n = this._segmentsLength, o = n.lengths, s = n.totalLength * t, a = 0, l = o.length, h = 0; a < l; ) {
                        if (h + o[a].addedLength > s) {
                            var c = a
                              , u = i.c && a === l - 1 ? 0 : a + 1
                              , p = (s - h) / o[a].addedLength;
                            r = bez.getPointInSegment(i.v[c], i.v[u], i.o[c], i.i[u], p, o[a]);
                            break
                        }
                        h += o[a].addedLength,
                        a += 1
                    }
                    return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                    r
                },
                vectorOnPath: function(t, e, i) {
                    1 == t ? t = this.v.c : 0 == t && (t = .999);
                    var r = this.pointOnPath(t, e)
                      , n = this.pointOnPath(t + .001, e)
                      , o = n[0] - r[0]
                      , s = n[1] - r[1]
                      , a = Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
                    return 0 === a ? [0, 0] : "tangent" === i ? [o / a, s / a] : [-s / a, o / a]
                },
                tangentOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "tangent")
                },
                normalOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            },
            extendPrototype([h], a),
            extendPrototype([h], l),
            l.prototype.getValueAtTime = function(t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }),
                t *= this.elem.globalData.frameRate,
                (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0,
                this._cachingAtTime.lastTime = t,
                this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                this._cachingAtTime.shapeValue
            }
            ,
            l.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var c = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, i, r, n) {
                var o = c(t, e, i, r, n);
                return o.propertyIndex = e.ix,
                o.lock = !1,
                3 === i ? expressionHelpers.searchExpressions(t, e.pt, o) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, o),
                o.k && t.addDynamicProperty(o),
                o
            }
        }(),
        TextProperty.prototype.getExpressionValue = function(t, e) {
            var i = this.calculateExpression(e);
            if (t.t !== i) {
                var r = {};
                return this.copyData(r, t),
                r.t = i.toString(),
                r.__complete = !1,
                r
            }
            return t
        }
        ,
        TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes()
              , e = this.searchExpressions();
            return this.kf = t || e,
            this.kf
        }
        ,
        TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
            this.addEffect(this.getExpressionValue.bind(this)),
            !0) : null
        }
        ;
        var ShapePathInterface = function(t, e, i) {
            var r = e.sh;
            function n(t) {
                return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null
            }
            var o = propertyGroupFactory(n, i);
            return r.setGroupProperty(PropertyInterface("Path", o)),
            Object.defineProperties(n, {
                path: {
                    get: function() {
                        return r.k && r.getValue(),
                        r
                    }
                },
                shape: {
                    get: function() {
                        return r.k && r.getValue(),
                        r
                    }
                },
                _name: {
                    value: t.nm
                },
                ix: {
                    value: t.ix
                },
                propertyIndex: {
                    value: t.ix
                },
                mn: {
                    value: t.mn
                },
                propertyGroup: {
                    value: i
                }
            }),
            n
        }
          , propertyGroupFactory = function(t, e) {
            return function(i) {
                return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
            }
        }
          , PropertyInterface = function(t, e) {
            var i = {
                _name: t
            };
            return function(t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
            }
        }
          , ShapeExpressionInterface = function() {
            function t(t, o, u) {
                var p, f = [], d = t ? t.length : 0;
                for (p = 0; p < d; p += 1)
                    "gr" === t[p].ty ? f.push(e(t[p], o[p], u)) : "fl" === t[p].ty ? f.push(i(t[p], o[p], u)) : "st" === t[p].ty ? f.push(r(t[p], o[p], u)) : "tm" === t[p].ty ? f.push(n(t[p], o[p], u)) : "tr" === t[p].ty || ("el" === t[p].ty ? f.push(s(t[p], o[p], u)) : "sr" === t[p].ty ? f.push(a(t[p], o[p], u)) : "sh" === t[p].ty ? f.push(ShapePathInterface(t[p], o[p], u)) : "rc" === t[p].ty ? f.push(l(t[p], o[p], u)) : "rd" === t[p].ty ? f.push(h(t[p], o[p], u)) : "rp" === t[p].ty && f.push(c(t[p], o[p], u)));
                return f
            }
            function e(e, i, r) {
                var n = function(t) {
                    switch (t) {
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                        return n.content;
                    default:
                        return n.transform
                    }
                };
                n.propertyGroup = propertyGroupFactory(n, r);
                var s = function(e, i, r) {
                    var n, s = function(t) {
                        for (var e = 0, i = n.length; e < i; ) {
                            if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t)
                                return n[e];
                            e += 1
                        }
                        return "number" == typeof t ? n[t - 1] : null
                    };
                    s.propertyGroup = propertyGroupFactory(s, r),
                    n = t(e.it, i.it, s.propertyGroup),
                    s.numProperties = n.length;
                    var a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                    return s.transform = a,
                    s.propertyIndex = e.cix,
                    s._name = e.nm,
                    s
                }(e, i, n.propertyGroup)
                  , a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                return n.content = s,
                n.transform = a,
                Object.defineProperty(n, "_name", {
                    get: function() {
                        return e.nm
                    }
                }),
                n.numProperties = e.np,
                n.propertyIndex = e.ix,
                n.nm = e.nm,
                n.mn = e.mn,
                n
            }
            function i(t, e, i) {
                function r(t) {
                    return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                }
                return Object.defineProperties(r, {
                    color: {
                        get: ExpressionPropertyInterface(e.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    _name: {
                        value: t.nm
                    },
                    mn: {
                        value: t.mn
                    }
                }),
                e.c.setGroupProperty(PropertyInterface("Color", i)),
                e.o.setGroupProperty(PropertyInterface("Opacity", i)),
                r
            }
            function r(t, e, i) {
                var r, n = propertyGroupFactory(h, i), o = propertyGroupFactory(l, n);
                function s(i) {
                    Object.defineProperty(l, t.d[i].nm, {
                        get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                    })
                }
                var a = t.d ? t.d.length : 0
                  , l = {};
                for (r = 0; r < a; r += 1)
                    s(r),
                    e.d.dataProps[r].p.setGroupProperty(o);
                function h(t) {
                    return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
                }
                return Object.defineProperties(h, {
                    color: {
                        get: ExpressionPropertyInterface(e.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(e.w)
                    },
                    dash: {
                        get: function() {
                            return l
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    mn: {
                        value: t.mn
                    }
                }),
                e.c.setGroupProperty(PropertyInterface("Color", n)),
                e.o.setGroupProperty(PropertyInterface("Opacity", n)),
                e.w.setGroupProperty(PropertyInterface("Stroke Width", n)),
                h
            }
            function n(t, e, i) {
                function r(e) {
                    return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                }
                var n = propertyGroupFactory(r, i);
                return r.propertyIndex = t.ix,
                e.s.setGroupProperty(PropertyInterface("Start", n)),
                e.e.setGroupProperty(PropertyInterface("End", n)),
                e.o.setGroupProperty(PropertyInterface("Offset", n)),
                r.propertyIndex = t.ix,
                r.propertyGroup = i,
                Object.defineProperties(r, {
                    start: {
                        get: ExpressionPropertyInterface(e.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(e.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.mn = t.mn,
                r
            }
            function o(t, e, i) {
                function r(e) {
                    return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                }
                var n = propertyGroupFactory(r, i);
                return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)),
                e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)),
                e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)),
                e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)),
                e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)),
                e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)),
                e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))),
                e.transform.op.setGroupProperty(PropertyInterface("Opacity", n)),
                Object.defineProperties(r, {
                    opacity: {
                        get: ExpressionPropertyInterface(e.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(e.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(e.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(e.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(e.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(e.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(e.transform.mProps.sa)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.ty = "tr",
                r.mn = t.mn,
                r.propertyGroup = i,
                r
            }
            function s(t, e, i) {
                function r(e) {
                    return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                }
                var n = propertyGroupFactory(r, i);
                r.propertyIndex = t.ix;
                var o = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return o.s.setGroupProperty(PropertyInterface("Size", n)),
                o.p.setGroupProperty(PropertyInterface("Position", n)),
                Object.defineProperties(r, {
                    size: {
                        get: ExpressionPropertyInterface(o.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(o.p)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.mn = t.mn,
                r
            }
            function a(t, e, i) {
                function r(e) {
                    return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                }
                var n = propertyGroupFactory(r, i)
                  , o = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return r.propertyIndex = t.ix,
                o.or.setGroupProperty(PropertyInterface("Outer Radius", n)),
                o.os.setGroupProperty(PropertyInterface("Outer Roundness", n)),
                o.pt.setGroupProperty(PropertyInterface("Points", n)),
                o.p.setGroupProperty(PropertyInterface("Position", n)),
                o.r.setGroupProperty(PropertyInterface("Rotation", n)),
                t.ir && (o.ir.setGroupProperty(PropertyInterface("Inner Radius", n)),
                o.is.setGroupProperty(PropertyInterface("Inner Roundness", n))),
                Object.defineProperties(r, {
                    position: {
                        get: ExpressionPropertyInterface(o.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(o.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(o.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(o.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(o.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(o.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(o.is)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.mn = t.mn,
                r
            }
            function l(t, e, i) {
                function r(e) {
                    return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                }
                var n = propertyGroupFactory(r, i)
                  , o = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return r.propertyIndex = t.ix,
                o.p.setGroupProperty(PropertyInterface("Position", n)),
                o.s.setGroupProperty(PropertyInterface("Size", n)),
                o.r.setGroupProperty(PropertyInterface("Rotation", n)),
                Object.defineProperties(r, {
                    position: {
                        get: ExpressionPropertyInterface(o.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(o.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(o.s)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.mn = t.mn,
                r
            }
            function h(t, e, i) {
                function r(e) {
                    return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                }
                var n = propertyGroupFactory(r, i)
                  , o = e;
                return r.propertyIndex = t.ix,
                o.rd.setGroupProperty(PropertyInterface("Radius", n)),
                Object.defineProperties(r, {
                    radius: {
                        get: ExpressionPropertyInterface(o.rd)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.mn = t.mn,
                r
            }
            function c(t, e, i) {
                function r(e) {
                    return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                }
                var n = propertyGroupFactory(r, i)
                  , o = e;
                return r.propertyIndex = t.ix,
                o.c.setGroupProperty(PropertyInterface("Copies", n)),
                o.o.setGroupProperty(PropertyInterface("Offset", n)),
                Object.defineProperties(r, {
                    copies: {
                        get: ExpressionPropertyInterface(o.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(o.o)
                    },
                    _name: {
                        value: t.nm
                    }
                }),
                r.mn = t.mn,
                r
            }
            return function(e, i, r) {
                var n;
                function o(t) {
                    if ("number" == typeof t)
                        return 0 === (t = void 0 === t ? 1 : t) ? r : n[t - 1];
                    for (var e = 0, i = n.length; e < i; ) {
                        if (n[e]._name === t)
                            return n[e];
                        e += 1
                    }
                    return null
                }
                return o.propertyGroup = propertyGroupFactory(o, (function() {
                    return r
                }
                )),
                n = t(e, i, o.propertyGroup),
                o.numProperties = n.length,
                o._name = "Contents",
                o
            }
        }()
          , TextExpressionInterface = function(t) {
            var e;
            function i(t) {
                switch (t) {
                case "ADBE Text Document":
                    return i.sourceText;
                default:
                    return null
                }
            }
            return Object.defineProperty(i, "sourceText", {
                get: function() {
                    t.textProperty.getValue();
                    var i = t.textProperty.currentData.t;
                    return void 0 !== i && (t.textProperty.currentData.t = void 0,
                    (e = new String(i)).value = i || new String(i)),
                    e
                }
            }),
            i
        }
          , LayerExpressionInterface = function() {
            function t(t) {
                var e = new Matrix;
                void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                return e
            }
            function e(t, e) {
                var i = this.getMatrix(e);
                return i.props[12] = 0,
                i.props[13] = 0,
                i.props[14] = 0,
                this.applyPoint(i, t)
            }
            function i(t, e) {
                var i = this.getMatrix(e);
                return this.applyPoint(i, t)
            }
            function r(t, e) {
                var i = this.getMatrix(e);
                return i.props[12] = 0,
                i.props[13] = 0,
                i.props[14] = 0,
                this.invertPoint(i, t)
            }
            function n(t, e) {
                var i = this.getMatrix(e);
                return this.invertPoint(i, t)
            }
            function o(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, r = this._elem.hierarchy.length;
                    for (i = 0; i < r; i += 1)
                        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                }
                return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }
            function s(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, r = this._elem.hierarchy.length;
                    for (i = 0; i < r; i += 1)
                        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                }
                return t.inversePoint(e)
            }
            function a(t) {
                var e = new Matrix;
                if (e.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(e),
                this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, r = this._elem.hierarchy.length;
                    for (i = 0; i < r; i += 1)
                        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t)
                }
                return e.inversePoint(t)
            }
            function l() {
                return [1, 1, 1, 1]
            }
            return function(h) {
                var c;
                function u(t) {
                    switch (t) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                        return u.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                        return c;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                        return u.effect;
                    case "ADBE Text Properties":
                        return u.textInterface;
                    default:
                        return null
                    }
                }
                u.getMatrix = t,
                u.invertPoint = s,
                u.applyPoint = o,
                u.toWorld = i,
                u.toWorldVec = e,
                u.fromWorld = n,
                u.fromWorldVec = r,
                u.toComp = i,
                u.fromComp = a,
                u.sampleImage = l,
                u.sourceRectAtTime = h.sourceRectAtTime.bind(h),
                u._elem = h;
                var p = getDescriptor(c = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                return Object.defineProperties(u, {
                    hasParent: {
                        get: function() {
                            return h.hierarchy.length
                        }
                    },
                    parent: {
                        get: function() {
                            return h.hierarchy[0].layerInterface
                        }
                    },
                    rotation: getDescriptor(c, "rotation"),
                    scale: getDescriptor(c, "scale"),
                    position: getDescriptor(c, "position"),
                    opacity: getDescriptor(c, "opacity"),
                    anchorPoint: p,
                    anchor_point: p,
                    transform: {
                        get: function() {
                            return c
                        }
                    },
                    active: {
                        get: function() {
                            return h.isInRange
                        }
                    }
                }),
                u.startTime = h.data.st,
                u.index = h.data.ind,
                u.source = h.data.refId,
                u.height = 0 === h.data.ty ? h.data.h : 100,
                u.width = 0 === h.data.ty ? h.data.w : 100,
                u.inPoint = h.data.ip / h.comp.globalData.frameRate,
                u.outPoint = h.data.op / h.comp.globalData.frameRate,
                u._name = h.data.nm,
                u.registerMaskInterface = function(t) {
                    u.mask = new MaskManagerInterface(t,h)
                }
                ,
                u.registerEffectsInterface = function(t) {
                    u.effect = t
                }
                ,
                u
            }
        }()
          , CompExpressionInterface = function(t) {
            function e(e) {
                for (var i = 0, r = t.layers.length; i < r; ) {
                    if (t.layers[i].nm === e || t.layers[i].ind === e)
                        return t.elements[i].layerInterface;
                    i += 1
                }
                return null
            }
            return Object.defineProperty(e, "_name", {
                value: t.data.nm
            }),
            e.layer = e,
            e.pixelAspect = 1,
            e.height = t.data.h || t.globalData.compSize.h,
            e.width = t.data.w || t.globalData.compSize.w,
            e.pixelAspect = 1,
            e.frameDuration = 1 / t.globalData.frameRate,
            e.displayStartTime = 0,
            e.numLayers = t.layers.length,
            e
        }
          , TransformExpressionInterface = function(t) {
            function e(t) {
                switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                    return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                    return e.rotation;
                case "ADBE Rotate X":
                    return e.xRotation;
                case "ADBE Rotate Y":
                    return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                    return e.position;
                case "ADBE Position_0":
                    return e.xPosition;
                case "ADBE Position_1":
                    return e.yPosition;
                case "ADBE Position_2":
                    return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                    return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                    return e.opacity;
                default:
                    return null
                }
            }
            var i, r, n, o;
            return Object.defineProperty(e, "rotation", {
                get: ExpressionPropertyInterface(t.r || t.rz)
            }),
            Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r)
            }),
            Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t.rx)
            }),
            Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t.ry)
            }),
            Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t.s)
            }),
            t.p ? o = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px),
            r = ExpressionPropertyInterface(t.py),
            t.pz && (n = ExpressionPropertyInterface(t.pz))),
            Object.defineProperty(e, "position", {
                get: function() {
                    return t.p ? o() : [i(), r(), n ? n() : 0]
                }
            }),
            Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px)
            }),
            Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py)
            }),
            Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz)
            }),
            Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a)
            }),
            Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o)
            }),
            Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk)
            }),
            Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa)
            }),
            Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or)
            }),
            e
        }
          , ProjectInterface = function() {
            function t(t) {
                this.compositions.push(t)
            }
            return function() {
                function e(t) {
                    for (var e = 0, i = this.compositions.length; e < i; ) {
                        if (this.compositions[e].data && this.compositions[e].data.nm === t)
                            return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame),
                            this.compositions[e].compInterface;
                        e += 1
                    }
                    return null
                }
                return e.compositions = [],
                e.currentFrame = 0,
                e.registerComposition = t,
                e
            }
        }()
          , EffectsExpressionInterface = function() {
            function t(i, r, n, o) {
                function s(t) {
                    for (var e = i.ef, r = 0, n = e.length; r < n; ) {
                        if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                            return 5 === e[r].ty ? h[r] : h[r]();
                        r += 1
                    }
                    throw new Error
                }
                var a, l = propertyGroupFactory(s, n), h = [], c = i.ef.length;
                for (a = 0; a < c; a += 1)
                    5 === i.ef[a].ty ? h.push(t(i.ef[a], r.effectElements[a], r.effectElements[a].propertyGroup, o)) : h.push(e(r.effectElements[a], i.ef[a].ty, o, l));
                return "ADBE Color Control" === i.mn && Object.defineProperty(s, "color", {
                    get: function() {
                        return h[0]()
                    }
                }),
                Object.defineProperties(s, {
                    numProperties: {
                        get: function() {
                            return i.np
                        }
                    },
                    _name: {
                        value: i.nm
                    },
                    propertyGroup: {
                        value: l
                    }
                }),
                s.enabled = 0 !== i.en,
                s.active = s.enabled,
                s
            }
            function e(t, e, i, r) {
                var n = ExpressionPropertyInterface(t.p);
                return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                function() {
                    return 10 === e ? i.comp.compInterface(t.p.v) : n()
                }
            }
            return {
                createEffectsInterface: function(e, i) {
                    if (e.effectsManager) {
                        var r, n = [], o = e.data.ef, s = e.effectsManager.effectElements.length;
                        for (r = 0; r < s; r += 1)
                            n.push(t(o[r], e.effectsManager.effectElements[r], i, e));
                        var a = e.data.ef || []
                          , l = function(t) {
                            for (r = 0,
                            s = a.length; r < s; ) {
                                if (t === a[r].nm || t === a[r].mn || t === a[r].ix)
                                    return n[r];
                                r += 1
                            }
                            return null
                        };
                        return Object.defineProperty(l, "numProperties", {
                            get: function() {
                                return a.length
                            }
                        }),
                        l
                    }
                    return null
                }
            }
        }()
          , MaskManagerInterface = function() {
            function t(t, e) {
                this._mask = t,
                this._data = e
            }
            Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(),
                    this._mask.prop
                }
            }),
            Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                    return this._mask.op.k && this._mask.op.getValue(),
                    100 * this._mask.op.v
                }
            });
            return function(e) {
                var i, r = createSizedArray(e.viewData.length), n = e.viewData.length;
                for (i = 0; i < n; i += 1)
                    r[i] = new t(e.viewData[i],e.masksProperties[i]);
                return function(t) {
                    for (i = 0; i < n; ) {
                        if (e.masksProperties[i].nm === t)
                            return r[i];
                        i += 1
                    }
                    return null
                }
            }
        }()
          , ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
            }
              , e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
            };
            function i(t, e, i) {
                Object.defineProperty(t, "velocity", {
                    get: function() {
                        return e.getVelocityAtTime(e.comp.currentFrame)
                    }
                }),
                t.numKeys = e.keyframes ? e.keyframes.length : 0,
                t.key = function(r) {
                    if (!t.numKeys)
                        return 0;
                    var n = "";
                    n = "s"in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e"in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                    var o = "unidimensional" === i ? new Number(n) : Object.assign({}, n);
                    return o.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate,
                    o.value = "unidimensional" === i ? n[0] : n,
                    o
                }
                ,
                t.valueAtTime = e.getValueAtTime,
                t.speedAtTime = e.getSpeedAtTime,
                t.velocityAtTime = e.getVelocityAtTime,
                t.propertyGroup = e.propertyGroup
            }
            function r() {
                return t
            }
            return function(n) {
                return n ? "unidimensional" === n.propType ? function(e) {
                    e && "pv"in e || (e = t);
                    var r = 1 / e.mult
                      , n = e.pv * r
                      , o = new Number(n);
                    return o.value = n,
                    i(o, e, "unidimensional"),
                    function() {
                        return e.k && e.getValue(),
                        n = e.v * r,
                        o.value !== n && ((o = new Number(n)).value = n,
                        i(o, e, "unidimensional")),
                        o
                    }
                }(n) : function(t) {
                    t && "pv"in t || (t = e);
                    var r = 1 / t.mult
                      , n = t.data && t.data.l || t.pv.length
                      , o = createTypedArray("float32", n)
                      , s = createTypedArray("float32", n);
                    return o.value = s,
                    i(o, t, "multidimensional"),
                    function() {
                        t.k && t.getValue();
                        for (var e = 0; e < n; e += 1)
                            s[e] = t.v[e] * r,
                            o[e] = s[e];
                        return o
                    }
                }(n) : r
            }
        }();
        function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }
        function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }
        function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }
        function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }
        function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }
        function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }
        function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }
        function NoValueEffect() {
            this.p = {}
        }
        function EffectsManager(t, e) {
            var i, r = t.ef || [];
            this.effectElements = [];
            var n, o = r.length;
            for (i = 0; i < o; i += 1)
                n = new GroupEffect(r[i],e),
                this.effectElements.push(n)
        }
        function GroupEffect(t, e) {
            this.init(t, e)
        }
        !function() {
            !function() {
                function t(t, e) {
                    return this.textIndex = t + 1,
                    this.textTotal = e,
                    this.v = this.getValue() * this.mult,
                    this.v
                }
            }();
            var t = TextSelectorProp.getTextSelectorProp;
            TextSelectorProp.getTextSelectorProp = function(e, i, r) {
                return 1 === i.t ? new TextExpressionSelectorPropFactory(e,i,r) : t(e, i, r)
            }
        }(),
        extendPrototype([DynamicPropertyContainer], GroupEffect),
        GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
        GroupEffect.prototype.init = function(t, e) {
            var i;
            this.data = t,
            this.effectElements = [],
            this.initDynamicPropertyContainer(e);
            var r, n = this.data.ef.length, o = this.data.ef;
            for (i = 0; i < n; i += 1) {
                switch (r = null,
                o[i].ty) {
                case 0:
                    r = new SliderEffect(o[i],e,this);
                    break;
                case 1:
                    r = new AngleEffect(o[i],e,this);
                    break;
                case 2:
                    r = new ColorEffect(o[i],e,this);
                    break;
                case 3:
                    r = new PointEffect(o[i],e,this);
                    break;
                case 4:
                case 7:
                    r = new CheckboxEffect(o[i],e,this);
                    break;
                case 10:
                    r = new LayerIndexEffect(o[i],e,this);
                    break;
                case 11:
                    r = new MaskIndexEffect(o[i],e,this);
                    break;
                case 5:
                    r = new EffectsManager(o[i],e,this);
                    break;
                default:
                    r = new NoValueEffect(o[i],e,this)
                }
                r && this.effectElements.push(r)
            }
        }
        ;
        var lottie = {};
        function setLocationHref(t) {
            locationHref = t
        }
        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }
        function setSubframeRendering(t) {
            subframeEnabled = t
        }
        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)),
            animationManager.loadAnimation(t)
        }
        function setQuality(t) {
            if ("string" == typeof t)
                switch (t) {
                case "high":
                    defaultCurveSegments = 200;
                    break;
                default:
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10
                }
            else
                !isNaN(t) && t > 1 && (defaultCurveSegments = t);
            roundValues(!(defaultCurveSegments >= 50))
        }
        function inBrowser() {
            return "undefined" != typeof navigator
        }
        function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e)
        }
        function getFactory(t) {
            switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
            default:
                return null
            }
        }
        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval),
            searchAnimations())
        }
        function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                var r = e[i].split("=");
                if (decodeURIComponent(r[0]) == t)
                    return decodeURIComponent(r[1])
            }
            return null
        }
        lottie.play = animationManager.play,
        lottie.pause = animationManager.pause,
        lottie.setLocationHref = setLocationHref,
        lottie.togglePause = animationManager.togglePause,
        lottie.setSpeed = animationManager.setSpeed,
        lottie.setDirection = animationManager.setDirection,
        lottie.stop = animationManager.stop,
        lottie.searchAnimations = searchAnimations,
        lottie.registerAnimation = animationManager.registerAnimation,
        lottie.loadAnimation = loadAnimation,
        lottie.setSubframeRendering = setSubframeRendering,
        lottie.resize = animationManager.resize,
        lottie.goToAndStop = animationManager.goToAndStop,
        lottie.destroy = animationManager.destroy,
        lottie.setQuality = setQuality,
        lottie.inBrowser = inBrowser,
        lottie.installPlugin = installPlugin,
        lottie.freeze = animationManager.freeze,
        lottie.unfreeze = animationManager.unfreeze,
        lottie.setVolume = animationManager.setVolume,
        lottie.mute = animationManager.mute,
        lottie.unmute = animationManager.unmute,
        lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
        lottie.__getFactory = getFactory,
        lottie.version = "5.7.6";
        var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "", queryString;
        if (standalone) {
            var scripts = document.getElementsByTagName("script")
              , index = scripts.length - 1
              , myScript = scripts[index] || {
                src: ""
            };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""),
            renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie
    }
    ))
}
, function(t, e, i) {
    (function(i) {
        var r, n;
        n = void 0 !== i ? i : "undefined" != typeof window ? window : this,
        void 0 === (r = function() {
            return function(t) {
                "use strict";
                var e = {
                    fieldClass: "error",
                    errorClass: "error-message",
                    fieldPrefix: "bouncer-field_",
                    errorPrefix: "bouncer-error_",
                    patterns: {
                        email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
                        url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
                        number: /^(?:[-+]?[0-9]*[.,]?[0-9]+)$/,
                        color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
                        date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
                        time: /^(?:(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]))$/,
                        month: /^(?:(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])))$/
                    },
                    customValidations: {},
                    messageAfterField: !0,
                    messageCustom: "data-bouncer-message",
                    messageTarget: "data-bouncer-target",
                    messages: {
                        missingValue: {
                            checkbox: "This field is required.",
                            radio: "Please select a value.",
                            select: "Please select a value.",
                            "select-multiple": "Please select at least one value.",
                            default: "Please fill out this field."
                        },
                        patternMismatch: {
                            email: "Please enter a valid email address.",
                            url: "Please enter a URL.",
                            number: "Please enter a number",
                            color: "Please match the following format: #rrggbb",
                            date: "Please use the YYYY-MM-DD format",
                            time: "Please use the 24-hour time format. Ex. 23:00",
                            month: "Please use the YYYY-MM format",
                            default: "Please match the requested format."
                        },
                        outOfRange: {
                            over: "Please select a value that is no more than {max}.",
                            under: "Please select a value that is no less than {min}."
                        },
                        wrongLength: {
                            over: "Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.",
                            under: "Please lengthen this text to {minLength} characters or more. You are currently using {length} characters."
                        },
                        fallback: "There was an error with this field."
                    },
                    disableSubmit: !1,
                    emitEvents: !0
                }
                  , i = function(t, e) {
                    Array.prototype.forEach.call(t, e)
                }
                  , r = function() {
                    var t = {};
                    return i(arguments, (function(e) {
                        for (var i in e) {
                            if (!e.hasOwnProperty(i))
                                return;
                            "[object Object]" === Object.prototype.toString.call(e[i]) ? t[i] = r(t[i], e[i]) : t[i] = e[i]
                        }
                    }
                    )),
                    t
                }
                  , n = function(e, i, r) {
                    if ("function" == typeof t.CustomEvent) {
                        var n = new CustomEvent(i,{
                            bubbles: !0,
                            detail: r || {}
                        });
                        e.dispatchEvent(n)
                    }
                }
                  , o = function(t) {
                    if (!t.hasAttribute("required"))
                        return !1;
                    if ("checkbox" === t.type)
                        return !t.checked;
                    var e = t.value.length;
                    return "radio" === t.type && (e = Array.prototype.filter.call(t.form.querySelectorAll('[name="' + u(t.name) + '"]'), (function(t) {
                        return t.checked
                    }
                    )).length),
                    e < 1
                }
                  , s = function(t, e) {
                    var i = t.getAttribute("pattern");
                    return !(!(i = i ? new RegExp("^(?:" + i + ")$") : e.patterns[t.type]) || !t.value || t.value.length < 1 || t.value.match(i))
                }
                  , a = function(t) {
                    if (!t.value || t.value.length < 1)
                        return !1;
                    var e = t.getAttribute("max")
                      , i = t.getAttribute("min")
                      , r = parseFloat(t.value);
                    return e && r > e ? "over" : !!(i && r < i) && "under"
                }
                  , l = function(t) {
                    if (!t.value || t.value.length < 1)
                        return !1;
                    var e = t.getAttribute("maxlength")
                      , i = t.getAttribute("minlength")
                      , r = t.value.length;
                    return e && r > e ? "over" : !!(i && r < i) && "under"
                }
                  , h = function(t) {
                    for (var e in t)
                        if (t[e])
                            return !0;
                    return !1
                }
                  , c = function(t, e) {
                    var i = function(t, e) {
                        return {
                            missingValue: o(t),
                            patternMismatch: s(t, e),
                            outOfRange: a(t),
                            wrongLength: l(t)
                        }
                    }(t, e);
                    return i = function(t, e, i, r) {
                        for (var n in i)
                            i.hasOwnProperty(n) && (e[n] = i[n](t, r));
                        return e
                    }(t, i, e.customValidations, e),
                    {
                        valid: !h(i),
                        errors: i
                    }
                }
                  , u = function(t) {
                    for (var e, i = String(t), r = i.length, n = -1, o = "", s = i.charCodeAt(0); ++n < r; ) {
                        if (0 === (e = i.charCodeAt(n)))
                            throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        o += e >= 1 && e <= 31 || 127 == e || 0 === n && e >= 48 && e <= 57 || 1 === n && e >= 48 && e <= 57 && 45 === s ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? i.charAt(n) : "\\" + i.charAt(n)
                    }
                    return o
                }
                  , p = function(t, e, i) {
                    var r = t.name ? t.name : t.id;
                    return !r && i && (r = e.fieldPrefix + Math.floor(999 * Math.random()),
                    t.id = r),
                    "checkbox" === t.type && (r += "_" + (t.value || t.id)),
                    r
                }
                  , f = function(t, e) {
                    var i = document.createElement("div");
                    i.className = e.errorClass,
                    i.id = e.errorPrefix + p(t, e, !0);
                    var r = function(t) {
                        if ("radio" === t.type && t.name) {
                            var e = t.form.querySelectorAll('[name="' + u(t.name) + '"]');
                            t = e[e.length - 1]
                        }
                        if ("radio" === t.type || "checkbox" === t.type) {
                            var i = t.closest("label") || t.form.querySelector('[for="' + t.id + '"]');
                            t = i || t
                        }
                        return t
                    }(t)
                      , n = function(t, e, i) {
                        var r = t.getAttribute(i.messageTarget);
                        if (r) {
                            var n = t.form.querySelector(r);
                            if (n)
                                return n.firstChild || n.appendChild(document.createTextNode(""))
                        }
                        return i.messageAfterField ? (e.nextSibling || e.parentNode.appendChild(document.createTextNode("")),
                        e.nextSibling) : e
                    }(t, r, e);
                    return n.parentNode.insertBefore(i, n),
                    i
                }
                  , d = function(t, e, i) {
                    t.classList.add(i.fieldClass),
                    t.setAttribute("aria-describedby", e.id),
                    t.setAttribute("aria-invalid", !0)
                }
                  , m = function(t, e, i) {
                    var r = t.form.querySelector("#" + u(i.errorPrefix + p(t, i))) || f(t, i)
                      , o = function(t, e, i) {
                        var r = i.messages;
                        if (e.missingValue)
                            return r.missingValue[t.type] || r.missingValue.default;
                        if (e.outOfRange)
                            return r.outOfRange[e.outOfRange].replace("{max}", t.getAttribute("max")).replace("{min}", t.getAttribute("min")).replace("{length}", t.value.length);
                        if (e.wrongLength)
                            return r.wrongLength[e.wrongLength].replace("{maxLength}", t.getAttribute("maxlength")).replace("{minLength}", t.getAttribute("minlength")).replace("{length}", t.value.length);
                        if (e.patternMismatch) {
                            var n = t.getAttribute(i.messageCustom);
                            return n || r.patternMismatch[t.type] || r.patternMismatch.default
                        }
                        for (var o in i.customValidations)
                            if (i.customValidations.hasOwnProperty(o) && e[o] && r[o])
                                return r[o];
                        return r.fallback
                    }(t, e, i);
                    r.textContent = "function" == typeof o ? o(t, i) : o,
                    function(t, e, i) {
                        "radio" === t.type && t.name && Array.prototype.forEach.call(document.querySelectorAll('[name="' + t.name + '"]'), (function(t) {
                            d(t, e, i)
                        }
                        )),
                        d(t, e, i)
                    }(t, r, i),
                    i.emitEvents && n(t, "bouncerShowError", {
                        errors: e
                    })
                }
                  , y = function(t, e) {
                    t.classList.remove(e.fieldClass),
                    t.removeAttribute("aria-describedby"),
                    t.removeAttribute("aria-invalid")
                }
                  , g = function(t, e) {
                    var i = t.form.querySelector("#" + u(e.errorPrefix + p(t, e)));
                    i && (i.parentNode.removeChild(i),
                    function(t, e) {
                        "radio" === t.type && t.name ? Array.prototype.forEach.call(document.querySelectorAll('[name="' + t.name + '"]'), (function(t) {
                            y(t, e)
                        }
                        )) : y(t, e)
                    }(t, e),
                    e.emitEvents && n(t, "bouncerRemoveError"))
                };
                return function(t, o) {
                    var s, a = {
                        validate: function(t, e) {
                            if (!t.disabled && !t.readOnly && "reset" !== t.type && "submit" !== t.type && "button" !== t.type) {
                                var i = r(s, e || {})
                                  , n = c(t, i);
                                if (!n.valid)
                                    return m(t, n.errors, i),
                                    n;
                                g(t, i)
                            }
                        },
                        validateAll: function(t) {
                            return Array.prototype.filter.call(t.querySelectorAll("input, select, textarea"), (function(t) {
                                var e = a.validate(t);
                                return e && !e.valid
                            }
                            ))
                        }
                    }, l = function(e) {
                        e.target.form && e.target.form.matches(t) && a.validate(e.target)
                    }, h = function(e) {
                        e.target.form && e.target.form.matches(t) && e.target.classList.contains(s.fieldClass) && a.validate(e.target)
                    }, u = function(e) {
                        if (e.target.matches(t)) {
                            e.preventDefault();
                            var i = a.validateAll(e.target);
                            if (i.length > 0)
                                return i[0].focus(),
                                void n(e.target, "bouncerFormInvalid", {
                                    errors: i
                                });
                            s.disableSubmit || e.target.submit(),
                            s.emitEvents && n(e.target, "bouncerFormValid")
                        }
                    };
                    return a.destroy = function() {
                        document.removeEventListener("blur", l, !0),
                        document.removeEventListener("input", h, !1),
                        document.removeEventListener("click", h, !1),
                        document.removeEventListener("submit", u, !1),
                        function(t, e) {
                            i(document.querySelectorAll(t), (function(t) {
                                i(t.querySelectorAll("input, select, textarea"), (function(t) {
                                    g(t, e)
                                }
                                ))
                            }
                            ))
                        }(t, s),
                        function(t) {
                            i(document.querySelectorAll(t), (function(t) {
                                t.removeAttribute("novalidate")
                            }
                            ))
                        }(t),
                        s.emitEvents && n(document, "bouncerDestroyed", {
                            settings: s
                        }),
                        s = null
                    }
                    ,
                    s = r(e, o || {}),
                    function(t) {
                        i(document.querySelectorAll(t), (function(t) {
                            t.setAttribute("novalidate", !0)
                        }
                        ))
                    }(t),
                    document.addEventListener("blur", l, !0),
                    document.addEventListener("input", h, !1),
                    document.addEventListener("click", h, !1),
                    document.addEventListener("submit", u, !1),
                    s.emitEvents && n(document, "bouncerInitialized", {
                        settings: s
                    }),
                    a
                }
            }(n)
        }
        .apply(e, [])) || (t.exports = r)
    }
    ).call(this, i(19))
}
, function(t, e, i) {
    var r, n;
    !function(o, s) {
        "use strict";
        r = [i(36)],
        void 0 === (n = function(t) {
            return function(t, e) {
                var i = t.jQuery
                  , r = t.console;
                function n(t, e) {
                    for (var i in e)
                        t[i] = e[i];
                    return t
                }
                var o = Array.prototype.slice;
                function s(t, e, a) {
                    if (!(this instanceof s))
                        return new s(t,e,a);
                    var l, h = t;
                    ("string" == typeof t && (h = document.querySelectorAll(t)),
                    h) ? (this.elements = (l = h,
                    Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? o.call(l) : [l]),
                    this.options = n({}, this.options),
                    "function" == typeof e ? a = e : n(this.options, e),
                    a && this.on("always", a),
                    this.getImages(),
                    i && (this.jqDeferred = new i.Deferred),
                    setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (h || t))
                }
                s.prototype = Object.create(e.prototype),
                s.prototype.options = {},
                s.prototype.getImages = function() {
                    this.images = [],
                    this.elements.forEach(this.addElementImages, this)
                }
                ,
                s.prototype.addElementImages = function(t) {
                    "IMG" == t.nodeName && this.addImage(t),
                    !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && a[e]) {
                        for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
                            var n = i[r];
                            this.addImage(n)
                        }
                        if ("string" == typeof this.options.background) {
                            var o = t.querySelectorAll(this.options.background);
                            for (r = 0; r < o.length; r++) {
                                var s = o[r];
                                this.addElementBackgroundImages(s)
                            }
                        }
                    }
                }
                ;
                var a = {
                    1: !0,
                    9: !0,
                    11: !0
                };
                function l(t) {
                    this.img = t
                }
                function h(t, e) {
                    this.url = t,
                    this.element = e,
                    this.img = new Image
                }
                return s.prototype.addElementBackgroundImages = function(t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage); null !== r; ) {
                            var n = r && r[2];
                            n && this.addBackground(n, t),
                            r = i.exec(e.backgroundImage)
                        }
                }
                ,
                s.prototype.addImage = function(t) {
                    var e = new l(t);
                    this.images.push(e)
                }
                ,
                s.prototype.addBackground = function(t, e) {
                    var i = new h(t,e);
                    this.images.push(i)
                }
                ,
                s.prototype.check = function() {
                    var t = this;
                    function e(e, i, r) {
                        setTimeout((function() {
                            t.progress(e, i, r)
                        }
                        ))
                    }
                    this.progressedCount = 0,
                    this.hasAnyBroken = !1,
                    this.images.length ? this.images.forEach((function(t) {
                        t.once("progress", e),
                        t.check()
                    }
                    )) : this.complete()
                }
                ,
                s.prototype.progress = function(t, e, i) {
                    this.progressedCount++,
                    this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && r && r.log("progress: " + i, t, e)
                }
                ,
                s.prototype.complete = function() {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0,
                    this.emitEvent(t, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this)
                    }
                }
                ,
                l.prototype = Object.create(e.prototype),
                l.prototype.check = function() {
                    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
                    this.proxyImage.addEventListener("load", this),
                    this.proxyImage.addEventListener("error", this),
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    this.proxyImage.src = this.img.src)
                }
                ,
                l.prototype.getIsImageComplete = function() {
                    return this.img.complete && this.img.naturalWidth
                }
                ,
                l.prototype.confirm = function(t, e) {
                    this.isLoaded = t,
                    this.emitEvent("progress", [this, this.img, e])
                }
                ,
                l.prototype.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }
                ,
                l.prototype.onload = function() {
                    this.confirm(!0, "onload"),
                    this.unbindEvents()
                }
                ,
                l.prototype.onerror = function() {
                    this.confirm(!1, "onerror"),
                    this.unbindEvents()
                }
                ,
                l.prototype.unbindEvents = function() {
                    this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this)
                }
                ,
                h.prototype = Object.create(l.prototype),
                h.prototype.check = function() {
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    this.img.src = this.url,
                    this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                    this.unbindEvents())
                }
                ,
                h.prototype.unbindEvents = function() {
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this)
                }
                ,
                h.prototype.confirm = function(t, e) {
                    this.isLoaded = t,
                    this.emitEvent("progress", [this, this.element, e])
                }
                ,
                s.makeJQueryPlugin = function(e) {
                    (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                        return new s(this,t,e).jqDeferred.promise(i(this))
                    }
                    )
                }
                ,
                s.makeJQueryPlugin(),
                s
            }(o, t)
        }
        .apply(e, r)) || (t.exports = n)
    }("undefined" != typeof window ? window : this)
}
, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    i.d(e, "a", (function() {
        return o
    }
    ));
    var o = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                target: null,
                desktop: null
            };
            r(this, t),
            this.xDown = null,
            this.yDown = null,
            this.element = "string" == typeof e.target ? document.querySelector(e.target) : e.target,
            this.desktop = e.desktop,
            this.isMouseDown = !1,
            this.mouseX = 0,
            this.lastMouseX = 0,
            this.isMobile = !document.querySelector("html").classList.contains("has-scroll-smooth")
        }
        var e, i, o;
        return e = t,
        (i = [{
            key: "onLeft",
            value: function(t) {
                return this.onLeft = t,
                this
            }
        }, {
            key: "onRight",
            value: function(t) {
                return this.onRight = t,
                this
            }
        }, {
            key: "onUp",
            value: function(t) {
                return this.onUp = t,
                this
            }
        }, {
            key: "onDown",
            value: function(t) {
                return this.onDown = t,
                this
            }
        }, {
            key: "handleTouchMove",
            value: function(t) {
                if (this.xDown && this.yDown) {
                    if (this.desktop && !this.isMobile)
                        var e = t.clientX
                          , i = t.clientY;
                    else
                        e = t.touches[0].clientX,
                        i = t.touches[0].clientY;
                    this.xDiff = this.xDown - e,
                    this.yDiff = this.yDown - i,
                    Math.abs(this.xDiff) > Math.abs(this.yDiff) ? this.xDiff > 0 ? this.onLeft && this.onLeft() : this.onRight && this.onRight() : this.yDiff > 0 ? this.onUp && this.onUp() : this.onDown && this.onDown(),
                    this.xDown = null,
                    this.yDown = null
                }
            }
        }, {
            key: "onTouchStart",
            value: function(t) {
                this.desktop && !this.isMobile ? (this.xDown = t.clientX,
                this.yDown = t.clientY) : (this.xDown = t.touches[0].clientX,
                this.yDown = t.touches[0].clientY)
            }
        }, {
            key: "onMouseMove",
            value: function(t) {
                this.isMouseDown && (this.mouseX = t.clientX,
                Math.abs(this.mouseX - this.lastMouseX) > 4 && (this.mouseX > this.lastMouseX ? this.onLeft && this.onLeft() : this.onRight && this.onRight(),
                this.isMouseDown = !1,
                this.mouseX = 0,
                this.lastMouseX = 0))
            }
        }, {
            key: "onMouseDown",
            value: function(t) {
                this.lastMouseX = t.clientX,
                this.isMouseDown = !0,
                this.element.style.cursor = "grabbing"
            }
        }, {
            key: "onMouseUp",
            value: function() {
                this.isMouseDown = !1,
                this.mouseX = 0,
                this.lastMouseX = 0,
                this.element.style.cursor = "grab"
            }
        }, {
            key: "run",
            value: function() {
                this.element.addEventListener("touchmove", this.handleTouchMove.bind(this), {
                    passive: !0
                }),
                this.element.addEventListener("touchstart", this.onTouchStart.bind(this), {
                    passive: !0
                }),
                this.desktop && !this.isMobile && (this.element.addEventListener("mousemove", this.onMouseMove.bind(this)),
                this.element.addEventListener("mousedown", this.onMouseDown.bind(this)),
                this.element.addEventListener("mouseup", this.onMouseUp.bind(this)),
                this.element.style.cursor = "grab")
            }
        }]) && n(e.prototype, i),
        o && n(e, o),
        t
    }()
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var i = new Array(arguments.length), r = 0; r < i.length; r++)
                i[r] = arguments[r];
            return t.apply(e, i)
        }
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    function n(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    t.exports = function(t, e, i) {
        if (!e)
            return t;
        var o;
        if (i)
            o = i(e);
        else if (r.isURLSearchParams(e))
            o = e.toString();
        else {
            var s = [];
            r.forEach(e, (function(t, e) {
                null != t && (r.isArray(t) ? e += "[]" : t = [t],
                r.forEach(t, (function(t) {
                    r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)),
                    s.push(n(e) + "=" + n(t))
                }
                )))
            }
            )),
            o = s.join("&")
        }
        if (o) {
            var a = t.indexOf("#");
            -1 !== a && (t = t.slice(0, a)),
            t += (-1 === t.indexOf("?") ? "?" : "&") + o
        }
        return t
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}
, function(t, e, i) {
    "use strict";
    (function(e) {
        var r = i(9)
          , n = i(43)
          , o = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function s(t, e) {
            !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }
        var a, l = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (a = i(25)),
            a),
            transformRequest: [function(t, e) {
                return n(e, "Accept"),
                n(e, "Content-Type"),
                r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"),
                t.toString()) : r.isObject(t) ? (s(e, "application/json;charset=utf-8"),
                JSON.stringify(t)) : t
            }
            ],
            transformResponse: [function(t) {
                if ("string" == typeof t)
                    try {
                        t = JSON.parse(t)
                    } catch (t) {}
                return t
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
                return t >= 200 && t < 300
            }
        };
        l.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        r.forEach(["delete", "get", "head"], (function(t) {
            l.headers[t] = {}
        }
        )),
        r.forEach(["post", "put", "patch"], (function(t) {
            l.headers[t] = r.merge(o)
        }
        )),
        t.exports = l
    }
    ).call(this, i(42))
}
, function(t, e, i) {
    "use strict";
    var r = i(9)
      , n = i(44)
      , o = i(22)
      , s = i(46)
      , a = i(49)
      , l = i(50)
      , h = i(26);
    t.exports = function(t) {
        return new Promise((function(e, c) {
            var u = t.data
              , p = t.headers;
            r.isFormData(u) && delete p["Content-Type"];
            var f = new XMLHttpRequest;
            if (t.auth) {
                var d = t.auth.username || ""
                  , m = t.auth.password || "";
                p.Authorization = "Basic " + btoa(d + ":" + m)
            }
            var y = s(t.baseURL, t.url);
            if (f.open(t.method.toUpperCase(), o(y, t.params, t.paramsSerializer), !0),
            f.timeout = t.timeout,
            f.onreadystatechange = function() {
                if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                    var i = "getAllResponseHeaders"in f ? a(f.getAllResponseHeaders()) : null
                      , r = {
                        data: t.responseType && "text" !== t.responseType ? f.response : f.responseText,
                        status: f.status,
                        statusText: f.statusText,
                        headers: i,
                        config: t,
                        request: f
                    };
                    n(e, c, r),
                    f = null
                }
            }
            ,
            f.onabort = function() {
                f && (c(h("Request aborted", t, "ECONNABORTED", f)),
                f = null)
            }
            ,
            f.onerror = function() {
                c(h("Network Error", t, null, f)),
                f = null
            }
            ,
            f.ontimeout = function() {
                var e = "timeout of " + t.timeout + "ms exceeded";
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                c(h(e, t, "ECONNABORTED", f)),
                f = null
            }
            ,
            r.isStandardBrowserEnv()) {
                var g = i(51)
                  , v = (t.withCredentials || l(y)) && t.xsrfCookieName ? g.read(t.xsrfCookieName) : void 0;
                v && (p[t.xsrfHeaderName] = v)
            }
            if ("setRequestHeader"in f && r.forEach(p, (function(t, e) {
                void 0 === u && "content-type" === e.toLowerCase() ? delete p[e] : f.setRequestHeader(e, t)
            }
            )),
            r.isUndefined(t.withCredentials) || (f.withCredentials = !!t.withCredentials),
            t.responseType)
                try {
                    f.responseType = t.responseType
                } catch (e) {
                    if ("json" !== t.responseType)
                        throw e
                }
            "function" == typeof t.onDownloadProgress && f.addEventListener("progress", t.onDownloadProgress),
            "function" == typeof t.onUploadProgress && f.upload && f.upload.addEventListener("progress", t.onUploadProgress),
            t.cancelToken && t.cancelToken.promise.then((function(t) {
                f && (f.abort(),
                c(t),
                f = null)
            }
            )),
            void 0 === u && (u = null),
            f.send(u)
        }
        ))
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(45);
    t.exports = function(t, e, i, n, o) {
        var s = new Error(t);
        return r(s, e, i, n, o)
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    t.exports = function(t, e) {
        e = e || {};
        var i = {}
          , n = ["url", "method", "params", "data"]
          , o = ["headers", "auth", "proxy"]
          , s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        r.forEach(n, (function(t) {
            void 0 !== e[t] && (i[t] = e[t])
        }
        )),
        r.forEach(o, (function(n) {
            r.isObject(e[n]) ? i[n] = r.deepMerge(t[n], e[n]) : void 0 !== e[n] ? i[n] = e[n] : r.isObject(t[n]) ? i[n] = r.deepMerge(t[n]) : void 0 !== t[n] && (i[n] = t[n])
        }
        )),
        r.forEach(s, (function(r) {
            void 0 !== e[r] ? i[r] = e[r] : void 0 !== t[r] && (i[r] = t[r])
        }
        ));
        var a = n.concat(o).concat(s)
          , l = Object.keys(e).filter((function(t) {
            return -1 === a.indexOf(t)
        }
        ));
        return r.forEach(l, (function(r) {
            void 0 !== e[r] ? i[r] = e[r] : void 0 !== t[r] && (i[r] = t[r])
        }
        )),
        i
    }
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        this.message = t
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    r.prototype.__CANCEL__ = !0,
    t.exports = r
}
, function(t, e, i) {
    t.exports = function() {
        "use strict";
        var t = function() {
            return (t = Object.assign || function(t) {
                for (var e, i = 1, r = arguments.length; i < r; i++)
                    for (var n in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
            ).apply(this, arguments)
        };
        function e() {
            var t, e, i = ((t = document.createElement("div")).style.cssText = "position: fixed; top: 0; height: 100vh; pointer-events: none;",
            document.documentElement.insertBefore(t, document.documentElement.firstChild),
            t), r = window.innerHeight, n = i.offsetHeight, o = n - r;
            return e = i,
            document.documentElement.removeChild(e),
            {
                vh: n,
                windowHeight: r,
                offset: o,
                isNeeded: 0 !== o,
                value: 0
            }
        }
        function i() {}
        function r() {
            var t = e();
            return t.value = t.offset,
            t
        }
        var n = Object.freeze({
            noop: i,
            computeDifference: r,
            redefineVhUnit: function() {
                var t = e();
                return t.value = .01 * t.windowHeight,
                t
            }
        });
        function o(t) {
            return "string" == typeof t && t.length > 0
        }
        var s = Object.freeze({
            cssVarName: "vh-offset",
            redefineVh: !1,
            method: r,
            force: !1,
            bind: !0,
            updateOnTouch: !1,
            onUpdate: i
        })
          , a = !1
          , l = [];
        try {
            var h = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", h, h),
            window.removeEventListener("test", h, h)
        } catch (t) {
            a = !1
        }
        function c(t, e) {
            l.push({
                eventName: t,
                callback: e
            }),
            window.addEventListener(t, e, !!a && {
                passive: !0
            })
        }
        function u() {
            l.forEach((function(t) {
                window.removeEventListener(t.eventName, t.callback)
            }
            )),
            l = []
        }
        function p(t, e) {
            document.documentElement.style.setProperty("--" + t, e.value + "px")
        }
        function f(e, i) {
            return t({}, e, {
                unbind: u,
                recompute: i.method
            })
        }
        return function(e) {
            var r = Object.freeze(function(e) {
                if (o(e))
                    return t({}, s, {
                        cssVarName: e
                    });
                if ("object" != typeof e)
                    return s;
                var r, a = {
                    force: !0 === e.force,
                    bind: !1 !== e.bind,
                    updateOnTouch: !0 === e.updateOnTouch,
                    onUpdate: (r = e.onUpdate,
                    "function" == typeof r ? e.onUpdate : i)
                }, l = !0 === e.redefineVh;
                return a.method = n[l ? "redefineVhUnit" : "computeDifference"],
                a.cssVarName = o(e.cssVarName) ? e.cssVarName : l ? "vh" : s.cssVarName,
                a
            }(e))
              , a = f(r.method(), r);
            if (!a.isNeeded && !r.force)
                return a;
            if (p(r.cssVarName, a),
            r.onUpdate(a),
            !r.bind)
                return a;
            function l() {
                window.requestAnimationFrame((function() {
                    var t = r.method();
                    p(r.cssVarName, t),
                    r.onUpdate(f(t, r))
                }
                ))
            }
            return a.unbind(),
            c("orientationchange", l),
            r.updateOnTouch && c("touchmove", l),
            a
        }
    }()
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(0)
      , n = i(14)
      , o = i(17)
      , s = i.n(o)
      , a = i(15)
      , l = i.n(a)
      , h = i(16)
      , c = i.n(h)
      , u = i(6)
      , p = i(2)
      , f = {
        dom: {
            wrapper: document.querySelector(".form-modal-wrapper"),
            header: document.querySelector(".form-modal-wrapper .header"),
            content: document.querySelector(".form-modal-wrapper .content"),
            background: document.querySelector(".form-modal-wrapper-background"),
            openBtns: document.querySelectorAll("[data-open-form]"),
            closeBtn: document.querySelector(".form-modal-wrapper .close-btn"),
            closeHitzone: document.querySelector(".form-modal-wrapper .close-hitzone"),
            form: document.querySelector(".form-modal-wrapper form"),
            formInputs: document.querySelectorAll(".form-modal-wrapper input"),
            rgpdBtns: document.querySelectorAll(".form-modal-wrapper .checkbox-btn"),
            formSubmit: document.querySelector(".form-modal-wrapper .send")
        },
        content: {
            channel: document.querySelector(".form-modal-wrapper .hub-channel"),
            channelDescription: document.querySelector(".form-modal-wrapper .hub-channel-description"),
            header: document.querySelector(".form-modal-wrapper .form-title"),
            title: document.querySelector(".form-modal-wrapper .doc-title"),
            description: document.querySelector(".form-modal-wrapper .doc-description"),
            img: document.querySelector(".form-modal-wrapper .doc-img")
        },
        formContent: {
            name: "",
            email: "",
            phone: ""
        },
        scroll: null,
        animation: null,
        isOpen: !1,
        formValidation: null,
        currentPage: document.querySelector(".page-current").dataset.routerView,
        currentID: -1,
        iconAnimation: null,
        canHoverSend: !0,
        init: function() {
            this.createAnimation(),
            this.setupIconAnimation(),
            this.scroll = new n.a({
                el: document.querySelector(".form-modal-wrapper .inner-container"),
                smooth: !0,
                getDirection: !0,
                scrollbarClass: "form-scrollbar"
            }),
            this.formValidation = new s.a(".form-modal-wrapper form",{
                disableSubmit: !0,
                messages: {}
            }),
            document.querySelector(".form-scrollbar") && (document.querySelector(".form-scrollbar").style.opacity = 0),
            this.addListeners()
        },
        setupIconAnimation: function() {
            var t = this;
            this.iconAnimation = c.a.loadAnimation({
                container: this.dom.formSubmit.querySelector(".icon"),
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                path: "/wp-content/themes/Kategora/public/pictos/send.json"
            }),
            this.iconAnimation.addEventListener("DOMLoaded", (function() {
                Object.assign(t.dom.formSubmit.querySelector("svg").style, {
                    width: "",
                    height: ""
                })
            }
            ))
        },
        addListeners: function() {
            var t = this;
            this.dom.openBtns.forEach((function(e) {
                return e.addEventListener("click", t.onClick.bind(t))
            }
            )),
            this.dom.closeBtn.addEventListener("click", this.onClose.bind(this)),
            this.dom.closeHitzone.addEventListener("click", this.onClose.bind(this)),
            this.dom.rgpdBtns.forEach((function(e) {
                return e.addEventListener("click", t.onRgpdClick.bind(t))
            }
            )),
            this.dom.formInputs.forEach((function(e) {
                e.addEventListener("focus", t.onFocus.bind(t)),
                e.addEventListener("blur", t.onBlur.bind(t))
            }
            )),
            p.a.browserObj.isMobile || (this.dom.formSubmit.addEventListener("mouseenter", this.onSendEnter.bind(this)),
            this.dom.formSubmit.addEventListener("mouseleave", this.onSendLeave.bind(this)),
            document.addEventListener("keyup", this.onKeyUp.bind(this))),
            this.dom.form.addEventListener("bouncerFormValid", this.onSubmit.bind(this), !1),
            this.dom.form.addEventListener("bouncerShowError", this.onError.bind(this), !1),
            this.dom.form.addEventListener("bouncerRemoveError", this.onRemoveError.bind(this), !1)
        },
        onSendEnter: function() {
            this.canHoverSend && (this.iconAnimation.setDirection(1),
            this.iconAnimation.playSegments([0, 20], !0))
        },
        onSendLeave: function() {
            this.canHoverSend && (this.iconAnimation.setDirection(-1),
            this.iconAnimation.playSegments([20, 0], !0))
        },
        onRemoveError: function(t) {
            t.target.closest(".input-wrapper").classList.remove("error")
        },
        onError: function(t) {
            t.target.closest(".input-wrapper").classList.add("error")
        },
        onFocus: function(t) {
            r.default.to(t.target.closest(".input-wrapper").querySelector("label"), {
                duration: .5,
                scale: .5,
                yPercent: -25,
                transformOrigin: "top left",
                ease: "expo.inOut"
            })
        },
        onBlur: function(t) {
            t.target.value.length || r.default.to(t.target.closest(".input-wrapper").querySelector("label"), {
                duration: .5,
                scale: 1,
                yPercent: 0,
                ease: "expo.inOut"
            })
        },
        onRgpdClick: function(t) {
            var e;
            t.target.classList.contains("active") ? (t.target.classList.remove("active"),
            t.target.querySelector("input").checked = !1,
            t.target.querySelector("input").value = "") : (t.target.classList.add("active"),
            t.target.querySelector("input").checked = !0,
            t.target.querySelector("input").value = "Sí",
            null === (e = t.target.querySelector(".error-message")) || void 0 === e || e.remove())
        },
        onSubmit: function() {
            var t = this;
            return this.dom.formSubmit.style.pointerEvents = "none",
            this.formContent.name = this.dom.form.querySelector(".name").value,
            this.formContent.email = this.dom.form.querySelector(".email").value,
            this.formContent.phone = this.dom.form.querySelector(".phone").value,
            this.iconAnimation.playSegments([20, 39], !0),
            this.canHoverSend = !1,
            setTimeout((function() {
                "insights" === t.currentPage || "project" === t.currentPage ? t.loadingAnimation().then((function() {
                    t.exitAnimation().then((function() {
                        t.showLink()
                    }
                    ))
                }
                )) : t.loadingAnimation().then((function() {
                    t.exitAnimation()
                }
                ))
            }
            ), 400),
            !1
        },
        onClose: function() {
            Object(u.enablePageScroll)(this.dom.wrapper),
            this.exitAnimation()
        },
        onKeyUp: function(t) {
            var e = t.key || t.keyCode;
            this.isOpen && "Escape" === e && this.exitAnimation()
        },
        onClick: function(t) {
            var e, i = t.target.dataset.formTitle, r = t.target.dataset.docTitle, n = t.target.dataset.docDescription, o = t.target.dataset.docImg, s = t.target.dataset.channel, a = t.target.dataset.channelDescription;
            "Newsletter" === a && (this.dom.wrapper.querySelector(".doc-content").style.display = "none"),
            Object(u.disablePageScroll)(this.dom.wrapper),
            document.querySelector("html").classList.contains("has-scroll-smooth") || this.dom.wrapper.classList.add("native-scroll"),
            this.insertContent({
                formTitle: i,
                title: r,
                description: n,
                imgUrl: o,
                channel: s,
                channelDescription: a
            }),
            this.currentID = null === (e = t.target.dataset) || void 0 === e ? void 0 : e.id,
            ga("send", {
                hitType: "event",
                eventCategory: "User actions",
                eventAction: "Open brochure/newsletter form",
                eventLabel: a
            }),
            this.enterAnimation()
        },
        insertContent: function(t) {
            this.content.header.innerHTML = t.formTitle,
            this.content.title.innerHTML = t.title,
            this.content.description.innerHTML = t.description,
            t.imgUrl && this.content.img.setAttribute("src", t.imgUrl),
            this.content.channelDescription.setAttribute("value", t.channelDescription)
        },
        createAnimation: function() {
            this.animation = r.default.timeline({
                paused: !0
            }),
            this.animation.to(this.dom.background, {
                duration: 1,
                autoAlpha: 1,
                ease: "power4.out"
            }, 0),
            this.animation.fromTo(this.dom.wrapper.querySelector(".close-btn"), {
                autoAlpha: 0,
                scale: .8
            }, {
                duration: 1,
                delay: 1,
                autoAlpha: 1,
                scale: 1,
                ease: "power2.out"
            }, 0),
            this.animation.fromTo(this.dom.wrapper, {
                autoAlpha: 0,
                scale: 1.1,
                x: 20,
                y: 20,
                transformOrigin: "center"
            }, {
                duration: 1,
                scale: 1,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "power2.out"
            }, 0)
        },
        showLink: function() {
            var t = this;
            return new Promise((function(e, i) {
                var r = "project" === t.currentPage ? "getBrochure" : "getInsight";
                l.a.get("/wp-json/general/" + r, {
                    params: {
                        id: Number(t.currentID)
                    }
                }).then((function(i) {
                    t.dom.formSubmit.style.pointerEvents = "",
                    window.open(i.data, "_blank").focus(),
                    e()
                }
                ))
            }
            ))
        },
        resetForm: function() {
            var t = this;
            this.dom.wrapper.querySelector(".doc-content").style.display = "",
            this.dom.rgpdBtns.forEach((function(t) {
                return t.classList.remove("active")
            }
            )),
            this.dom.rgpdBtns.forEach((function(t) {
                return t.querySelector("input").checked = !1
            }
            )),
            r.default.set(this.dom.formSubmit.querySelector(".send-label"), {
                yPercent: 0
            }),
            r.default.to(this.dom.formSubmit.querySelector(".sent-label"), {
                yPercent: 100,
                opacity: 0
            }),
            this.dom.formInputs.forEach((function(e) {
                var i;
                (e.value = "",
                e.classList.remove("error"),
                t.iconAnimation.goToAndStop(0),
                t.canHoverSend = !0,
                t.iconAnimation.loop = !1,
                e.closest(".input-wrapper")) && (e.closest(".input-wrapper").classList.remove("error"),
                null === (i = e.closest(".input-wrapper").querySelector(".error-message")) || void 0 === i || i.remove(),
                e.closest(".input-wrapper").querySelector("label") && r.default.set(e.closest(".input-wrapper").querySelector("label"), {
                    scale: 1,
                    yPercent: 0
                }))
            }
            ))
        },
        loadingAnimation: function() {
            var t = this;
            return new Promise((function(e, i) {
                t.iconAnimation.loop = !0,
                t.iconAnimation.playSegments([0, 39], !0),
                r.default.to(t.dom.formSubmit.querySelector(".send-label"), {
                    duration: 1,
                    delay: 2,
                    yPercent: -101,
                    ease: "power4.inOut"
                }),
                r.default.fromTo(t.dom.formSubmit.querySelector(".sent-label"), {
                    opacity: 1,
                    yPercent: 101
                }, {
                    duration: 1,
                    delay: 2,
                    yPercent: 0,
                    ease: "power4.inOut"
                }),
                setTimeout((function() {
                    e()
                }
                ), 4e3)
            }
            ))
        },
        enterAnimation: function() {
            var t = this;
            return new Promise((function(e, i) {
                t.animation.timeScale(1.5),
                t.animation.play(),
                document.querySelector(".form-scrollbar") && (document.querySelector(".form-scrollbar").style.opacity = 1),
                document.querySelector(".c-scrollbar") && (document.querySelector(".c-scrollbar").style.opacity = 0),
                setTimeout((function() {
                    document.querySelector("html").classList.contains("has-scroll-smooth") && t.scroll.update(),
                    t.isOpen = !0,
                    e()
                }
                ), 1e3)
            }
            ))
        },
        exitAnimation: function() {
            var t = this;
            return new Promise((function(e, i) {
                t.isOpen = !1,
                t.animation.timeScale(5),
                t.animation.reverse(),
                setTimeout((function() {
                    document.querySelector(".form-scrollbar") && (document.querySelector(".form-scrollbar").style.opacity = 0),
                    document.querySelector(".c-scrollbar") && (document.querySelector(".c-scrollbar").style.opacity = 1),
                    document.querySelector("html").classList.contains("has-scroll-smooth") && t.scroll.scrollTo(0),
                    t.resetForm(),
                    Object(u.enablePageScroll)(t.dom.wrapper),
                    e()
                }
                ), 250)
            }
            ))
        },
        updateState: function(t) {
            var e = this;
            this.dom.openBtns = document.querySelectorAll("[data-open-form]"),
            this.dom.openBtns.forEach((function(t) {
                return t.addEventListener("click", e.onClick.bind(e))
            }
            )),
            this.currentPage = t.dataset.routerView
        },
        kill: function() {}
    };
    e.default = f
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(0)
      , n = i(2);
    function o(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var s = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.dom = {
                wrapper: document.querySelector(".cta-footer-wrapper"),
                link: document.querySelector(".cta-footer-wrapper a"),
                imageContainer: document.querySelector(".cta-footer-wrapper .image-container")
            },
            this.values = {
                loopID: -1,
                mouseY: 0,
                scaleVal: 1,
                isLooping: !1,
                imageHeight: document.querySelector(".cta-footer-wrapper img").getBoundingClientRect().height
            },
            this.onResize = this.onResize.bind(this)
        }
        var e, i, s;
        return e = t,
        (i = [{
            key: "init",
            value: function() {
                this.onResize(),
                this.addListeners()
            }
        }, {
            key: "addListeners",
            value: function() {
                n.a.browserObj.isMobile || (window.addEventListener("resize", this.onResize),
                this.dom.link.addEventListener("mousemove", this.onMouseMove.bind(this)),
                this.dom.link.addEventListener("mouseleave", this.onMouseLeave.bind(this)))
            }
        }, {
            key: "onResize",
            value: function() {
                this.values.imageHeight = document.querySelector(".cta-footer-wrapper img").getBoundingClientRect().height
            }
        }, {
            key: "onMouseMove",
            value: function(t) {
                this.values.mouseY = Math.floor(t.clientY - this.dom.link.getBoundingClientRect().top),
                this.values.isLooping || this.loop()
            }
        }, {
            key: "onMouseLeave",
            value: function() {
                window.cancelAnimationFrame(this.values.loopID),
                this.values.isLooping = !1,
                this.values.scaleVal = 1,
                r.default.to(this.dom.imageContainer, {
                    duration: 1,
                    scale: this.values.scaleVal
                })
            }
        }, {
            key: "loop",
            value: function() {
                var t = this;
                this.values.isLooping = !0,
                this.values.scaleVal = r.default.utils.mapRange(0, this.values.imageHeight, 1, 1.05, this.values.mouseY),
                r.default.to(this.dom.imageContainer, {
                    duration: 1,
                    scale: this.values.scaleVal
                }),
                this.values.loopID = requestAnimationFrame((function() {
                    return t.loop()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                cancelAnimationFrame(this.values.loopID),
                n.a.browserObj.isMobile || window.removeEventListener("resize", this.onResize)
            }
        }]) && o(e.prototype, i),
        s && o(e, s),
        t
    }();
    e.default = s
}
, function(t, e) {
    showLog = !1,
    function(t) {
        var e, i = {}, r = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560], n = r.length, o = t.toLowerCase(), s = function(t) {
            return RegExp(t, "i").test(o)
        }, a = "gecko", l = "webkit", h = "chrome", c = "firefox", u = "safari", p = "opera", f = "android", d = "blackberry", m = document.documentElement, y = [!/opera|webtv/i.test(o) && /msie\s(\d+)/.test(o) || /trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.test(o) ? "ie ie" + (/trident\/4\.0/.test(o) ? "8" : "11.0" == RegExp.$1 ? "11" : RegExp.$1) : s("firefox/") ? a + " " + c + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + c + RegExp.$2 + " " + c + RegExp.$2 + "_" + RegExp.$4 : "") : s("gecko/") ? a : s("opera") ? p + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + p + RegExp.$2 + " " + p + RegExp.$2 + "_" + RegExp.$4 : /opera(\s|\/)(\d+)\.(\d+)/.test(o) ? " " + p + RegExp.$2 + " " + p + RegExp.$2 + "_" + RegExp.$3 : "") : s("konqueror") ? "konqueror" : s("blackberry") ? d + (/Version\/(\d+)(\.(\d+)+)/i.test(o) ? " " + d + RegExp.$1 + " " + d + RegExp.$1 + RegExp.$2.replace(".", "_") : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(o) ? " " + d + RegExp.$2 + (RegExp.$3 ? " " + d + RegExp.$2 + RegExp.$3 : "") : "") : s("android") ? f + (/Version\/(\d+)(\.(\d+))+/i.test(o) ? " " + f + RegExp.$1 + " " + f + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android (.+); (.+) Build/i.test(o) ? " device_" + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_") : "") : s("chrome") ? l + " " + h + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + h + RegExp.$2 + (RegExp.$4 > 0 ? " " + h + RegExp.$2 + "_" + RegExp.$4 : "") : "") : s("iron") ? l + " iron" : s("applewebkit/") ? l + " " + u + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + u + RegExp.$2 + " " + u + RegExp.$2 + RegExp.$3.replace(".", "_") : / Safari\/(\d+)/i.test(o) ? "419" == RegExp.$1 || "417" == RegExp.$1 || "416" == RegExp.$1 || "412" == RegExp.$1 ? " safari2_0" : "312" == RegExp.$1 ? " safari1_3" : "125" == RegExp.$1 ? " safari1_2" : "85" == RegExp.$1 ? " safari1_0" : "" : "") : s("mozilla/") ? a : "", s("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? "mobile" : "", s("j2me") ? "j2me" : s("ipad|ipod|iphone") ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(o) ? "ios" + function(t, e) {
            for (var i = (e = e.replace(".", "_")).indexOf("_"), r = ""; i > 0; )
                r += " " + t + e.substring(0, i),
                i = e.indexOf("_", i + 1);
            return r += " " + t + e
        }("ios", RegExp.$2) : "") + " " + (/(ip(ad|od|hone))/gi.test(o) ? RegExp.$1 : "") : s("playbook") ? "playbook" : s("kindle|silk") ? "kindle" : s("playbook") ? "playbook" : s("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(o) ? " mac" + RegExp.$2 + " mac" + RegExp.$1.replace(".", "_") : "") : s("win") ? "win" + (s("windows nt 6.2") ? " win8" : s("windows nt 6.1") ? " win7" : s("windows nt 6.0") ? " vista" : s("windows nt 5.2") || s("windows nt 5.1") ? " win_xp" : s("windows nt 5.0") ? " win_2k" : s("windows nt 4.0") || s("WinNT4.0") ? " win_nt" : "") : s("freebsd") ? "freebsd" : s("x11|linux") ? "linux" : "", /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(o) ? ("lang_" + RegExp.$2).replace("-", "_") + ("" != RegExp.$3 ? (" lang_" + RegExp.$1).replace("-", "_") : "") : "", s("ipad|iphone|ipod") && !s("safari") ? "ipad_app" : ""];
        function g() {
            var t = window.outerWidth || m.clientWidth
              , e = window.outerHeight || m.clientHeight;
            i.orientation = t < e ? "portrait" : "landscape",
            m.className = m.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
            for (var o = n - 1; o >= 0; o--)
                if (t >= r[o]) {
                    i.maxw = r[o];
                    break
                }
            for (var s in widthClasses = "",
            i)
                widthClasses += " " + s + "_" + i[s];
            return m.className = m.className + widthClasses,
            widthClasses
        }
        window.onresize = g,
        g(),
        e = window.devicePixelRatio > 1,
        m.className += e ? " retina" : " non-retina";
        var v = y.join(" ") + " js ";
        m.className = (v + m.className.replace(/\b(no[-|_]?)?js\b/g, "")).replace(/^ /, "").replace(/ +/g, " ")
    }(navigator.userAgent)
}
, function(t, e, i) {
    var r = i(34)
      , n = i(35);
    "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[t.i, n, ""]]);
    var o = {
        insert: "head",
        singleton: !1
    };
    r(n, o);
    t.exports = n.locals || {}
}
, function(t, e, i) {
    "use strict";
    var r, n = function() {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
        r
    }, o = function() {
        var t = {};
        return function(e) {
            if (void 0 === t[e]) {
                var i = document.querySelector(e);
                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                    try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                t[e] = i
            }
            return t[e]
        }
    }(), s = [];
    function a(t) {
        for (var e = -1, i = 0; i < s.length; i++)
            if (s[i].identifier === t) {
                e = i;
                break
            }
        return e
    }
    function l(t, e) {
        for (var i = {}, r = [], n = 0; n < t.length; n++) {
            var o = t[n]
              , l = e.base ? o[0] + e.base : o[0]
              , h = i[l] || 0
              , c = "".concat(l, " ").concat(h);
            i[l] = h + 1;
            var u = a(c)
              , p = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            -1 !== u ? (s[u].references++,
            s[u].updater(p)) : s.push({
                identifier: c,
                updater: y(p, e),
                references: 1
            }),
            r.push(c)
        }
        return r
    }
    function h(t) {
        var e = document.createElement("style")
          , r = t.attributes || {};
        if (void 0 === r.nonce) {
            var n = i.nc;
            n && (r.nonce = n)
        }
        if (Object.keys(r).forEach((function(t) {
            e.setAttribute(t, r[t])
        }
        )),
        "function" == typeof t.insert)
            t.insert(e);
        else {
            var s = o(t.insert || "head");
            if (!s)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            s.appendChild(e)
        }
        return e
    }
    var c, u = (c = [],
    function(t, e) {
        return c[t] = e,
        c.filter(Boolean).join("\n")
    }
    );
    function p(t, e, i, r) {
        var n = i ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (t.styleSheet)
            t.styleSheet.cssText = u(e, n);
        else {
            var o = document.createTextNode(n)
              , s = t.childNodes;
            s[e] && t.removeChild(s[e]),
            s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
        }
    }
    function f(t, e, i) {
        var r = i.css
          , n = i.media
          , o = i.sourceMap;
        if (n ? t.setAttribute("media", n) : t.removeAttribute("media"),
        o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
        t.styleSheet)
            t.styleSheet.cssText = r;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r))
        }
    }
    var d = null
      , m = 0;
    function y(t, e) {
        var i, r, n;
        if (e.singleton) {
            var o = m++;
            i = d || (d = h(e)),
            r = p.bind(null, i, o, !1),
            n = p.bind(null, i, o, !0)
        } else
            i = h(e),
            r = f.bind(null, i, e),
            n = function() {
                !function(t) {
                    if (null === t.parentNode)
                        return !1;
                    t.parentNode.removeChild(t)
                }(i)
            }
            ;
        return r(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                r(t = e)
            } else
                n()
        }
    }
    t.exports = function(t, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = n());
        var i = l(t = t || [], e);
        return function(t) {
            if (t = t || [],
            "[object Array]" === Object.prototype.toString.call(t)) {
                for (var r = 0; r < i.length; r++) {
                    var n = a(i[r]);
                    s[n].references--
                }
                for (var o = l(t, e), h = 0; h < i.length; h++) {
                    var c = a(i[h]);
                    0 === s[c].references && (s[c].updater(),
                    s.splice(c, 1))
                }
                i = o
            }
        }
    }
}
, function(t, e, i) {}
, function(t, e, i) {
    var r, n;
    "undefined" != typeof window && window,
    void 0 === (n = "function" == typeof (r = function() {
        "use strict";
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                  , r = i[t] = i[t] || [];
                return -1 == r.indexOf(e) && r.push(e),
                this
            }
        }
        ,
        e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0,
                this
            }
        }
        ,
        e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var r = i.indexOf(e);
                return -1 != r && i.splice(r, 1),
                this
            }
        }
        ,
        e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0),
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var o = i[n];
                    r && r[o] && (this.off(t, o),
                    delete r[o]),
                    o.apply(this, e)
                }
                return this
            }
        }
        ,
        e.allOff = function() {
            delete this._events,
            delete this._onceEvents
        }
        ,
        t
    }
    ) ? r.call(e, i, e, t) : r) || (t.exports = n)
}
, function(t, e, i) {
    "use strict";
    var r = i(9)
      , n = i(21)
      , o = i(38)
      , s = i(27);
    function a(t) {
        var e = new o(t)
          , i = n(o.prototype.request, e);
        return r.extend(i, o.prototype, e),
        r.extend(i, e),
        i
    }
    var l = a(i(24));
    l.Axios = o,
    l.create = function(t) {
        return a(s(l.defaults, t))
    }
    ,
    l.Cancel = i(28),
    l.CancelToken = i(52),
    l.isCancel = i(23),
    l.all = function(t) {
        return Promise.all(t)
    }
    ,
    l.spread = i(53),
    t.exports = l,
    t.exports.default = l
}
, function(t, e, i) {
    "use strict";
    var r = i(9)
      , n = i(22)
      , o = i(39)
      , s = i(40)
      , a = i(27);
    function l(t) {
        this.defaults = t,
        this.interceptors = {
            request: new o,
            response: new o
        }
    }
    l.prototype.request = function(t) {
        "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {},
        (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
        var e = [s, void 0]
          , i = Promise.resolve(t);
        for (this.interceptors.request.forEach((function(t) {
            e.unshift(t.fulfilled, t.rejected)
        }
        )),
        this.interceptors.response.forEach((function(t) {
            e.push(t.fulfilled, t.rejected)
        }
        )); e.length; )
            i = i.then(e.shift(), e.shift());
        return i
    }
    ,
    l.prototype.getUri = function(t) {
        return t = a(this.defaults, t),
        n(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }
    ,
    r.forEach(["delete", "get", "head", "options"], (function(t) {
        l.prototype[t] = function(e, i) {
            return this.request(r.merge(i || {}, {
                method: t,
                url: e
            }))
        }
    }
    )),
    r.forEach(["post", "put", "patch"], (function(t) {
        l.prototype[t] = function(e, i, n) {
            return this.request(r.merge(n || {}, {
                method: t,
                url: e,
                data: i
            }))
        }
    }
    )),
    t.exports = l
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    function n() {
        this.handlers = []
    }
    n.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }),
        this.handlers.length - 1
    }
    ,
    n.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    ,
    n.prototype.forEach = function(t) {
        r.forEach(this.handlers, (function(e) {
            null !== e && t(e)
        }
        ))
    }
    ,
    t.exports = n
}
, function(t, e, i) {
    "use strict";
    var r = i(9)
      , n = i(41)
      , o = i(23)
      , s = i(24);
    function a(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function(t) {
        return a(t),
        t.headers = t.headers || {},
        t.data = n(t.data, t.headers, t.transformRequest),
        t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers),
        r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
            delete t.headers[e]
        }
        )),
        (t.adapter || s.adapter)(t).then((function(e) {
            return a(t),
            e.data = n(e.data, e.headers, t.transformResponse),
            e
        }
        ), (function(e) {
            return o(e) || (a(t),
            e && e.response && (e.response.data = n(e.response.data, e.response.headers, t.transformResponse))),
            Promise.reject(e)
        }
        ))
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    t.exports = function(t, e, i) {
        return r.forEach(i, (function(i) {
            t = i(t, e)
        }
        )),
        t
    }
}
, function(t, e) {
    var i, r, n = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
        if (i === setTimeout)
            return setTimeout(t, 0);
        if ((i === o || !i) && setTimeout)
            return i = setTimeout,
            setTimeout(t, 0);
        try {
            return i(t, 0)
        } catch (e) {
            try {
                return i.call(null, t, 0)
            } catch (e) {
                return i.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            i = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var l, h = [], c = !1, u = -1;
    function p() {
        c && l && (c = !1,
        l.length ? h = l.concat(h) : u = -1,
        h.length && f())
    }
    function f() {
        if (!c) {
            var t = a(p);
            c = !0;
            for (var e = h.length; e; ) {
                for (l = h,
                h = []; ++u < e; )
                    l && l[u].run();
                u = -1,
                e = h.length
            }
            l = null,
            c = !1,
            function(t) {
                if (r === clearTimeout)
                    return clearTimeout(t);
                if ((r === s || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }
    function d(t, e) {
        this.fun = t,
        this.array = e
    }
    function m() {}
    n.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
        h.push(new d(t,e)),
        1 !== h.length || c || a(f)
    }
    ,
    d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    n.title = "browser",
    n.browser = !0,
    n.env = {},
    n.argv = [],
    n.version = "",
    n.versions = {},
    n.on = m,
    n.addListener = m,
    n.once = m,
    n.off = m,
    n.removeListener = m,
    n.removeAllListeners = m,
    n.emit = m,
    n.prependListener = m,
    n.prependOnceListener = m,
    n.listeners = function(t) {
        return []
    }
    ,
    n.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    n.cwd = function() {
        return "/"
    }
    ,
    n.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    n.umask = function() {
        return 0
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    t.exports = function(t, e) {
        r.forEach(t, (function(i, r) {
            r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = i,
            delete t[r])
        }
        ))
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(26);
    t.exports = function(t, e, i) {
        var n = i.config.validateStatus;
        !n || n(i.status) ? t(i) : e(r("Request failed with status code " + i.status, i.config, null, i.request, i))
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t, e, i, r, n) {
        return t.config = e,
        i && (t.code = i),
        t.request = r,
        t.response = n,
        t.isAxiosError = !0,
        t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }
        ,
        t
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(47)
      , n = i(48);
    t.exports = function(t, e) {
        return t && !r(e) ? n(t, e) : e
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9)
      , n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function(t) {
        var e, i, o, s = {};
        return t ? (r.forEach(t.split("\n"), (function(t) {
            if (o = t.indexOf(":"),
            e = r.trim(t.substr(0, o)).toLowerCase(),
            i = r.trim(t.substr(o + 1)),
            e) {
                if (s[e] && n.indexOf(e) >= 0)
                    return;
                s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([i]) : s[e] ? s[e] + ", " + i : i
            }
        }
        )),
        s) : s
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    t.exports = r.isStandardBrowserEnv() ? function() {
        var t, e = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
        function n(t) {
            var r = t;
            return e && (i.setAttribute("href", r),
            r = i.href),
            i.setAttribute("href", r),
            {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        return t = n(window.location.href),
        function(e) {
            var i = r.isString(e) ? n(e) : e;
            return i.protocol === t.protocol && i.host === t.host
        }
    }() : function() {
        return !0
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(9);
    t.exports = r.isStandardBrowserEnv() ? {
        write: function(t, e, i, n, o, s) {
            var a = [];
            a.push(t + "=" + encodeURIComponent(e)),
            r.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
            r.isString(n) && a.push("path=" + n),
            r.isString(o) && a.push("domain=" + o),
            !0 === s && a.push("secure"),
            document.cookie = a.join("; ")
        },
        read: function(t) {
            var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}
, function(t, e, i) {
    "use strict";
    var r = i(28);
    function n(t) {
        if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise((function(t) {
            e = t
        }
        ));
        var i = this;
        t((function(t) {
            i.reason || (i.reason = new r(t),
            e(i.reason))
        }
        ))
    }
    n.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    n.source = function() {
        var t;
        return {
            token: new n((function(e) {
                t = e
            }
            )),
            cancel: t
        }
    }
    ,
    t.exports = n
}
, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
}
, function(t, e) {
    function i(t, e, i) {
        var r, n, o, s, a;
        function l() {
            var h = Date.now() - s;
            h < e && h >= 0 ? r = setTimeout(l, e - h) : (r = null,
            i || (a = t.apply(o, n),
            o = n = null))
        }
        null == e && (e = 100);
        var h = function() {
            o = this,
            n = arguments,
            s = Date.now();
            var h = i && !r;
            return r || (r = setTimeout(l, e)),
            h && (a = t.apply(o, n),
            o = n = null),
            a
        };
        return h.clear = function() {
            r && (clearTimeout(r),
            r = null)
        }
        ,
        h.flush = function() {
            r && (a = t.apply(o, n),
            o = n = null,
            clearTimeout(r),
            r = null)
        }
        ,
        h
    }
    i.debounce = i,
    t.exports = i
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    i(32),
    i(33);
    var r = i(2)
      , n = {};
    function o(t) {
        return new Promise((function(e, i) {
            var r = new XMLHttpRequest;
            r.open("GET", t, r.withCredentials = !0),
            r.onload = function() {
                200 === r.status ? e() : i()
            }
            ,
            r.send()
        }
        ))
    }
    var s, a = ("prefetch",
    (s = document.createElement("link")).relList && s.relList.supports && s.relList.supports("prefetch") ? function(t) {
        return new Promise((function(e, i) {
            var r = document.createElement("link");
            r.rel = "prefetch",
            r.href = t,
            r.onload = e,
            r.onerror = i,
            document.head.appendChild(r)
        }
        ))
    }
    : o);
    function l(t, e, i) {
        if (!(n[t] || (i = navigator.connection) && ((i.effectiveType || "").includes("2g") || i.saveData)))
            return (e ? function(t) {
                return null == self.fetch ? o(t) : fetch(t, {
                    credentials: "include"
                })
            }
            : a)(t).then((function() {
                n[t] = !0
            }
            ))
    }
    window.requestIdleCallback;
    var h = new Set
      , c = window.IntersectionObserver && new IntersectionObserver((function(t) {
        t.forEach((function(t) {
            if (t.isIntersecting) {
                var e = t.target;
                h.has(e.href) && (c.unobserve(e),
                u(e.href))
            }
        }
        ))
    }
    ));
    function u(t) {
        h.delete(t),
        l(new URL(t,location.href).toString(), c.priority)
    }
    function p() {}
    p.prototype = {
        on: function(t, e, i) {
            var r = this.e || (this.e = {});
            return (r[t] || (r[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            var r = this;
            function n() {
                r.off(t, n),
                e.apply(i, arguments)
            }
            return n._ = e,
            this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, n = i.length; r < n; r++)
                i[r].fn.apply(i[r].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , r = i[t]
              , n = [];
            if (r && e)
                for (var o = 0, s = r.length; o < s; o++)
                    r[o].fn !== e && r[o].fn._ !== e && n.push(r[o]);
            return n.length ? i[t] = n : delete i[t],
            this
        }
    };
    var f = p;
    f.TinyEmitter = p;
    var d = function(t) {
        this.wrap = document.querySelector("[data-router-wrapper]"),
        this.properties = t,
        this.Transition = t.transition ? new t.transition.class(this.wrap,t.transition.name) : null
    };
    d.prototype.setup = function() {
        this.onEnter && this.onEnter(),
        this.onEnterCompleted && this.onEnterCompleted()
    }
    ,
    d.prototype.add = function() {
        this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
    }
    ,
    d.prototype.update = function() {
        document.title = this.properties.page.title
    }
    ,
    d.prototype.show = function(t) {
        var e = this;
        return new Promise((function(i) {
            try {
                function r(t) {
                    e.onEnterCompleted && e.onEnterCompleted(),
                    i()
                }
                return e.update(),
                e.onEnter && e.onEnter(),
                Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(r) : r())
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ))
    }
    ,
    d.prototype.hide = function(t) {
        var e = this;
        return new Promise((function(i) {
            try {
                function r(t) {
                    e.onLeaveCompleted && e.onLeaveCompleted(),
                    i()
                }
                return e.onLeave && e.onLeave(),
                Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(r) : r())
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ))
    }
    ;
    var m = new window.DOMParser
      , y = function(t, e) {
        this.renderers = t,
        this.transitions = e
    };
    y.prototype.getOrigin = function(t) {
        var e = t.match(/(https?:\/\/[\w\-.]+)/);
        return e ? e[1].replace(/https?:\/\//, "") : null
    }
    ,
    y.prototype.getPathname = function(t) {
        var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
        return e ? e[1] : "/"
    }
    ,
    y.prototype.getAnchor = function(t) {
        var e = t.match(/(#.*)$/);
        return e ? e[1] : null
    }
    ,
    y.prototype.getParams = function(t) {
        var e = t.match(/\?([\w_\-.=&]+)/);
        if (!e)
            return null;
        for (var i = e[1].split("&"), r = {}, n = 0; n < i.length; n++) {
            var o = i[n].split("=");
            r[o[0]] = o[1]
        }
        return r
    }
    ,
    y.prototype.getDOM = function(t) {
        return "string" == typeof t ? m.parseFromString(t, "text/html") : t
    }
    ,
    y.prototype.getView = function(t) {
        return t.querySelector("[data-router-view]")
    }
    ,
    y.prototype.getSlug = function(t) {
        return t.getAttribute("data-router-view")
    }
    ,
    y.prototype.getRenderer = function(t) {
        if (!this.renderers)
            return Promise.resolve(d);
        if (t in this.renderers) {
            var e = this.renderers[t];
            return "function" != typeof e || d.isPrototypeOf(e) ? "function" == typeof e.then ? Promise.resolve(e).then((function(t) {
                return t.default
            }
            )) : Promise.resolve(e) : Promise.resolve(e()).then((function(t) {
                return t.default
            }
            ))
        }
        return Promise.resolve(d)
    }
    ,
    y.prototype.getTransition = function(t) {
        return this.transitions ? t in this.transitions ? {
            class: this.transitions[t],
            name: t
        } : "default"in this.transitions ? {
            class: this.transitions.default,
            name: "default"
        } : null : null
    }
    ,
    y.prototype.getProperties = function(t) {
        var e = this.getDOM(t)
          , i = this.getView(e)
          , r = this.getSlug(i);
        return {
            page: e,
            view: i,
            slug: r,
            renderer: this.getRenderer(r, this.renderers),
            transition: this.getTransition(r, this.transitions)
        }
    }
    ,
    y.prototype.getLocation = function(t) {
        return {
            href: t,
            anchor: this.getAnchor(t),
            origin: this.getOrigin(t),
            params: this.getParams(t),
            pathname: this.getPathname(t)
        }
    }
    ;
    var g = function(t) {
        function e(e) {
            var i = this;
            void 0 === e && (e = {});
            var r = e.renderers
              , n = e.transitions;
            t.call(this),
            this.Helpers = new y(r,n),
            this.Transitions = n,
            this.Contextual = !1,
            this.location = this.Helpers.getLocation(window.location.href),
            this.properties = this.Helpers.getProperties(document.cloneNode(!0)),
            this.popping = !1,
            this.running = !1,
            this.trigger = null,
            this.cache = new Map,
            this.cache.set(this.location.href, this.properties),
            this.properties.renderer.then((function(t) {
                i.From = new t(i.properties),
                i.From.setup()
            }
            )),
            this._navigate = this.navigate.bind(this),
            window.addEventListener("popstate", this.popState.bind(this)),
            this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"),
            this.attach(this.links)
        }
        return t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)).constructor = e,
        e.prototype.attach = function(t) {
            for (var e = 0, i = t; e < i.length; e += 1)
                i[e].addEventListener("click", this._navigate)
        }
        ,
        e.prototype.detach = function(t) {
            for (var e = 0, i = t; e < i.length; e += 1)
                i[e].removeEventListener("click", this._navigate)
        }
        ,
        e.prototype.navigate = function(t) {
            if (!t.metaKey && !t.ctrlKey) {
                t.preventDefault();
                var e = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
                this.redirect(t.currentTarget.href, e, t.currentTarget)
            }
        }
        ,
        e.prototype.redirect = function(t, e, i) {
            if (void 0 === e && (e = !1),
            void 0 === i && (i = "script"),
            this.trigger = i,
            !this.running && t !== this.location.href) {
                var r = this.Helpers.getLocation(t);
                this.Contextual = !1,
                e && (this.Contextual = this.Transitions.contextual[e].prototype,
                this.Contextual.name = e),
                r.origin !== this.location.origin || r.anchor && r.pathname === this.location.pathname ? window.location.href = t : (this.location = r,
                this.beforeFetch())
            }
        }
        ,
        e.prototype.popState = function() {
            this.trigger = "popstate",
            this.Contextual = !1;
            var t = this.Helpers.getLocation(window.location.href);
            this.location.pathname !== t.pathname || !this.location.anchor && !t.anchor ? (this.popping = !0,
            this.location = t,
            this.beforeFetch()) : this.location = t
        }
        ,
        e.prototype.pushState = function() {
            this.popping || window.history.pushState(this.location, "", this.location.href)
        }
        ,
        e.prototype.fetch = function() {
            try {
                var t = this;
                return Promise.resolve(fetch(t.location.href, {
                    mode: "same-origin",
                    method: "GET",
                    headers: {
                        "X-Requested-With": "Highway"
                    },
                    credentials: "same-origin"
                })).then((function(e) {
                    if (e.status >= 200 && e.status < 300)
                        return e.text();
                    window.location.href = t.location.href
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        e.prototype.beforeFetch = function() {
            try {
                var t = this;
                function e() {
                    t.afterFetch()
                }
                t.pushState(),
                t.running = !0,
                t.emit("NAVIGATE_OUT", {
                    from: {
                        page: t.From.properties.page,
                        view: t.From.properties.view
                    },
                    trigger: t.trigger,
                    location: t.location
                });
                var i = {
                    trigger: t.trigger,
                    contextual: t.Contextual
                }
                  , r = t.cache.has(t.location.href) ? Promise.resolve(t.From.hide(i)).then((function() {
                    t.properties = t.cache.get(t.location.href)
                }
                )) : Promise.resolve(Promise.all([t.fetch(), t.From.hide(i)])).then((function(e) {
                    t.properties = t.Helpers.getProperties(e[0]),
                    t.cache.set(t.location.href, t.properties)
                }
                ));
                return Promise.resolve(r && r.then ? r.then(e) : e())
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        e.prototype.afterFetch = function() {
            try {
                var t = this;
                return Promise.resolve(t.properties.renderer).then((function(e) {
                    return t.To = new e(t.properties),
                    t.To.add(),
                    t.emit("NAVIGATE_IN", {
                        to: {
                            page: t.To.properties.page,
                            view: t.To.wrap.lastElementChild
                        },
                        trigger: t.trigger,
                        location: t.location
                    }),
                    Promise.resolve(t.To.show({
                        trigger: t.trigger,
                        contextual: t.Contextual
                    })).then((function() {
                        t.popping = !1,
                        t.running = !1,
                        t.detach(t.links),
                        t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"),
                        t.attach(t.links),
                        t.emit("NAVIGATE_END", {
                            to: {
                                page: t.To.properties.page,
                                view: t.To.wrap.lastElementChild
                            },
                            from: {
                                page: t.From.properties.page,
                                view: t.From.properties.view
                            },
                            trigger: t.trigger,
                            location: t.location
                        }),
                        t.From = t.To,
                        t.trigger = null
                    }
                    ))
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        e
    }(f)
      , v = function(t, e) {
        this.wrap = t,
        this.name = e
    };
    v.prototype.show = function(t) {
        var e = this
          , i = t.trigger
          , r = t.contextual
          , n = this.wrap.lastElementChild
          , o = this.wrap.firstElementChild;
        return new Promise((function(t) {
            r ? (n.setAttribute("data-transition-in", r.name),
            n.removeAttribute("data-transition-out", r.name),
            r.in && r.in({
                to: n,
                from: o,
                trigger: i,
                done: t
            })) : (n.setAttribute("data-transition-in", e.name),
            n.removeAttribute("data-transition-out", e.name),
            e.in && e.in({
                to: n,
                from: o,
                trigger: i,
                done: t
            }))
        }
        ))
    }
    ,
    v.prototype.hide = function(t) {
        var e = this
          , i = t.trigger
          , r = t.contextual
          , n = this.wrap.firstElementChild;
        return new Promise((function(t) {
            r ? (n.setAttribute("data-transition-out", r.name),
            n.removeAttribute("data-transition-in", r.name),
            r.out && r.out({
                from: n,
                trigger: i,
                done: t
            })) : (n.setAttribute("data-transition-out", e.name),
            n.removeAttribute("data-transition-in", e.name),
            e.out && e.out({
                from: n,
                trigger: i,
                done: t
            }))
        }
        ))
    }
    ,
    console.log("Highway v2.2.0");
    var b = {
        Core: g,
        Helpers: y,
        Renderer: d,
        Transition: v
    }
      , w = i(12)
      , S = i(10)
      , x = i(0)
      , _ = i(7)
      , E = i(4)
      , k = i(30)
      , P = i(3)
      , A = i(5);
    function T(t) {
        return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function C(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function M(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function D(t, e) {
        return (D = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function L(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = F(t);
            if (e) {
                var n = F(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return O(this, i)
        }
    }
    function O(t, e) {
        return !e || "object" !== T(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function F(t) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var I = function(t) {
        !function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && D(t, e)
        }(s, t);
        var e, i, n, o = L(s);
        function s() {
            return C(this, s),
            o.apply(this, arguments)
        }
        return e = s,
        (i = [{
            key: "out",
            value: function(t) {
                t.from;
                var e = t.done;
                _.default.animateOut(),
                e()
            }
        }, {
            key: "in",
            value: function(t) {
                var e = t.from
                  , i = t.to
                  , n = t.done;
                x.default.set(i, {
                    opacity: 0
                });
                var o = new Date;
                switch (document.querySelector(".c-scrollbar") && x.default.to(document.querySelector(".c-scrollbar"), {
                    duration: 1,
                    opacity: 0
                }),
                E.default.killIntersection(),
                _.default.killIntersection(),
                P.default.killIntersection(),
                A.default.killIntersection(),
                i.dataset.routerView) {
                case "home":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#fffcf8"
                    }),
                    E.default.changeColor(!1),
                    _.default.changeColor(!0),
                    P.default.changeColor(!1),
                    A.default.changeColor(!0);
                    break;
                case "about":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#1e1e1e"
                    }),
                    E.default.changeColor(!0),
                    P.default.changeColor(!0),
                    _.default.changeColor(!1),
                    A.default.changeColor(!1);
                    break;
                case "projects":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#131d18"
                    }),
                    E.default.changeColor(!0),
                    P.default.changeColor(!0),
                    _.default.changeColor(!1),
                    A.default.changeColor(!1);
                    break;
                case "project":
                    i.querySelector(".page-toload").classList.contains("ura") ? (x.default.set(document.querySelector("body"), {
                        backgroundColor: "#dceceb"
                    }),
                    E.default.changeColor(!0),
                    P.default.changeColor(!0),
                    _.default.changeColor(!1),
                    A.default.changeColor(!1)) : (x.default.set(document.querySelector("body"), {
                        backgroundColor: "#ffffff"
                    }),
                    E.default.changeColor(!1),
                    _.default.changeColor(!0),
                    P.default.changeColor(!1),
                    A.default.changeColor(!0));
                    break;
                case "expertise":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#193243"
                    }),
                    E.default.changeColor(!0),
                    P.default.changeColor(!0),
                    _.default.changeColor(!1),
                    A.default.changeColor(!1);
                    break;
                case "insights":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#ffffff"
                    }),
                    E.default.changeColor(!1),
                    _.default.changeColor(!0),
                    P.default.changeColor(!1),
                    A.default.changeColor(!0);
                    break;
                case "insightsSingle":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#ffffff"
                    }),
                    E.default.changeColor(!0),
                    P.default.changeColor(!0),
                    _.default.changeColor(!1),
                    A.default.changeColor(!1);
                    break;
                case "privacy":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#ffffff"
                    }),
                    E.default.changeColor(!1),
                    _.default.changeColor(!0),
                    P.default.changeColor(!1),
                    A.default.changeColor(!0);
                    break;
                case "four04":
                    x.default.set(document.querySelector("body"), {
                        backgroundColor: "#131d18"
                    }),
                    E.default.changeColor(!0),
                    P.default.changeColor(!0),
                    _.default.changeColor(!1),
                    A.default.changeColor(!1)
                }
                r.a.currentView.exitAnimation().then((function() {
                    x.default.fromTo(e, {
                        opacity: 1
                    }, {
                        duration: .5,
                        opacity: 0,
                        ease: "power4.out",
                        onComplete: function() {
                            r.a.buroScrollObj && r.a.buroScrollObj.destroy(),
                            Object(w.b)(i.querySelector("body .page-toload"), e.querySelector("body .page-toload")),
                            e.remove(),
                            E.default.updateState(i),
                            _.default.updateState(i),
                            P.default.updateState(i),
                            A.default.updateState(i),
                            k.default.updateState(i),
                            x.default.fromTo(i, {
                                opacity: 0
                            }, {
                                duration: 0,
                                opacity: 1,
                                onComplete: function() {
                                    n(),
                                    (new Date).getTime(),
                                    o.getTime(),
                                    setTimeout((function() {}
                                    ), 500),
                                    E.default.initIntersection(),
                                    _.default.initIntersection(),
                                    P.default.initIntersection(),
                                    A.default.initIntersection(),
                                    x.default.set(document.querySelector("body"), {
                                        clearProps: "backgroundColor"
                                    })
                                }
                            })
                        }
                    })
                }
                ))
            }
        }]) && M(e.prototype, i),
        n && M(e, n),
        s
    }(b.Transition)
      , R = i(6)
      , B = (i(18),
    i(14));
    function V(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var j = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.targets = e.targets,
            this.observer = null,
            this.debug = e.debug || !1,
            this.config = {
                rootMargin: e.rootMargin || "2000px",
                threshold: e.threshold || 0
            }
        }
        var e, i, r;
        return e = t,
        (i = [{
            key: "init",
            value: function() {
                var t = this;
                this.targets.length && (this.observer = new IntersectionObserver((function(e, i) {
                    e.forEach((function(e) {
                        e.isIntersecting && (t.debug && console.log(e.target.nodeName, e.target),
                        "PICTURE" === e.target.nodeName ? e.target.querySelectorAll("source").forEach((function(t) {
                            t.setAttribute("srcset", t.dataset.srcset)
                        }
                        )) : "IMG" === e.target.nodeName ? e.target.setAttribute("src", e.target.dataset.src) : "VIDEO" === e.target.nodeName && (e.target.querySelector("source").setAttribute("src", e.target.querySelector("source").dataset.src),
                        e.target.load()),
                        e.target.classList.add("lazy-loaded"),
                        i.unobserve(e.target))
                    }
                    ))
                }
                ),this.config),
                this.targets.forEach((function(e) {
                    return t.observer.observe(e)
                }
                )))
            }
        }, {
            key: "loadAll",
            value: function() {
                var t = this;
                return new Promise((function(e, i) {
                    t.targets.forEach((function(t) {
                        "PICTURE" === t.nodeName ? t.querySelectorAll("source").forEach((function(t) {
                            return t.setAttribute("srcset", t.dataset.srcset)
                        }
                        )) : "IMG" === t.nodeName ? t.setAttribute("src", t.dataset.src) : "VIDEO" === t.nodeName && (t.querySelector("source").setAttribute("src", t.querySelector("source").dataset.src),
                        t.load())
                    }
                    )),
                    e()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                this.observer && this.observer.disconnect()
            }
        }]) && V(e.prototype, i),
        r && V(e, r),
        t
    }()
      , q = function(t) {
        var e = 1;
        "true" === t.dataset.slideLeft && (e = -1),
        x.default.fromTo(t, {
            position: "relative",
            display: "block",
            xPercent: 100 * e
        }, {
            duration: 1,
            xPercent: 0,
            ease: "power2.inOut"
        })
    }
      , z = function(t) {
        x.default.fromTo(t, {
            y: 20,
            opacity: 0
        }, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.inOut"
        })
    }
      , N = function(t) {
        x.default.fromTo(t.querySelectorAll(".stagger-item"), {
            y: 60,
            opacity: 0
        }, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: {
                each: .1,
                onStart: function() {
                    this._targets[0].classList.add("enter-viewport")
                }
            },
            onComplete: function() {
                t.removeAttribute("data-scroll"),
                t.removeAttribute("data-scroll-call")
            }
        })
    }
      , H = function(t) {
        x.default.fromTo(t, {
            yPercent: 10,
            scale: 1.1
        }, {
            duration: 1,
            yPercent: 0,
            scale: 1,
            ease: "power2.out"
        })
    };
    function G(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var W = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.name = e,
            this.globalComponents = {
                pageHeader: null,
                ctaBtns: []
            },
            this.animations = {
                scrollSlideType: null,
                scrollSlideTypeInfinite: null,
                scaleDownType: null,
                revealType: null,
                splitRevealType: null,
                staggerUp: null,
                scrollMask: null,
                parallax: null
            },
            this.isMobile = !1,
            this.onPageLoaded = this.onPageLoaded.bind(this),
            this.lazyload = null,
            this.delay = document.querySelector("body").classList.contains("mobile") ? 3e3 : 0
        }
        var e, n, o;
        return e = t,
        (n = [{
            key: "dynamicImports",
            value: function() {
                var t = this;
                Promise.all([i.e(31), i.e(1)]).then(i.bind(null, 87)).then((function(e) {
                    t.globalComponents.pageHeader = new e.default,
                    t.globalComponents.pageHeader.init()
                }
                )),
                i.e(9).then(i.bind(null, 60)).then((function(e) {
                    document.querySelectorAll(".cta-btn-wrapper").forEach((function(i) {
                        t.globalComponents.ctaBtns.push(new e.default(i))
                    }
                    ))
                }
                )),
                i.e(28).then(i.bind(null, 61)).then((function(e) {
                    t.animations.scrollSlideType = new e.default
                }
                )),
                i.e(29).then(i.bind(null, 62)).then((function(e) {
                    t.animations.scrollSlideTypeInfinite = new e.default
                }
                )),
                i.e(25).then(i.bind(null, 63)).then((function(e) {
                    t.animations.revealType = new e.default
                }
                )),
                i.e(2).then(i.bind(null, 64)).then((function(e) {
                    t.animations.splitRevealType = new e.default
                }
                )),
                i.e(30).then(i.bind(null, 65)).then((function(e) {
                    t.animations.staggerUp = new e.default
                }
                )),
                i.e(27).then(i.bind(null, 66)).then((function(e) {
                    t.animations.scrollMask = new e.default
                }
                )),
                i.e(24).then(i.bind(null, 67)).then((function(e) {
                    t.animations.parallax = new e.default
                }
                )),
                this.isMobile || i.e(26).then(i.bind(null, 68)).then((function(e) {
                    t.animations.scaleDownType = new e.default
                }
                ))
            }
        }, {
            key: "init",
            value: function() {
                var t = this;
                document.fonts,
                document.querySelector("body").classList.contains("js-byrefresh") ? window.addEventListener("pageLoaded", this.onPageLoaded) : this.onPageLoaded(),
                this.lazyload = new j({
                    targets: document.querySelectorAll("[data-lazyload]"),
                    rootMargin: "1000px",
                    threshold: 0,
                    debug: !1
                }),
                this.lazyload.init(),
                setTimeout((function() {
                    t.lazyload.loadAll().then((function() {
                        new S.a(document.querySelector("body")).init().then((function() {
                            setTimeout((function() {
                                r.a.buroScrollObj.update(),
                                A.default.onResize(),
                                t.importHubSpot()
                            }
                            ), 500)
                        }
                        ))
                    }
                    ))
                }
                ), this.delay),
                setTimeout((function() {
                    t.isMobile = !document.querySelector("html").classList.contains("has-scroll-smooth"),
                    t.dynamicImports()
                }
                ), 500),
                document.querySelector(".c-scrollbar") && x.default.to(document.querySelector(".c-scrollbar"), {
                    duration: 1,
                    opacity: 1,
                    delay: .5
                }),
                r.a.scrollVal = 0;
                var e = document.querySelector("html").classList.contains("mac") && document.querySelector("html").classList.contains("firefox") ? 2.5 : 1;
                r.a.buroScrollObj = new B.a({
                    el: document.querySelector("[data-scroll-container]"),
                    smooth: !0,
                    multiplier: e,
                    getDirection: !0
                }),
                r.a.buroScrollObj.on("scroll", (function(t) {
                    r.a.scrollVal = t.scroll.y,
                    "down" == t.direction && t.scroll.y > 1e3 ? E.default.reallyHide(!0) : E.default.reallyHide(!1)
                }
                )),
                r.a.buroScrollObj.on("call", (function(t, e, i) {
                    switch (t) {
                    case "fade_in":
                        z(i.el);
                        break;
                    case "stagger_in":
                        N(i.el);
                        break;
                    case "slide_image":
                        q(i.el);
                        break;
                    case "scale_enter":
                        H(i.el)
                    }
                }
                )),
                document.fonts.ready.then((function() {}
                )),
                window.addEventListener("resize", this.fixVH),
                this.fixVH()
            }
        }, {
            key: "importHubSpot",
            value: function() {
                var t = document.createElement("script");
                t.src = "//js.hs-scripts.com/2875686.js",
                document.querySelector("body").appendChild(t)
            }
        }, {
            key: "fixVH",
            value: function() {
                var t = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(t, "px"))
            }
        }, {
            key: "onPageLoaded",
            value: function() {}
        }, {
            key: "animateIn",
            value: function() {}
        }, {
            key: "animateOut",
            value: function() {}
        }, {
            key: "kill",
            value: function() {
                var t, e, i, r, n, o, s = new CustomEvent("currentPageKilled");
                window.dispatchEvent(s),
                window.removeEventListener("pageLoaded", this.onPageLoaded),
                window.removeEventListener("resize", this.fixVH),
                null === (t = this.globalComponents) || void 0 === t || t.pageHeader.kill(),
                this.globalComponents.ctaBtns.forEach((function(t) {
                    return t.kill()
                }
                )),
                this.isMobile || null === (e = this.animations.scaleDownType) || void 0 === e || e.kill(),
                null === (i = this.animations) || void 0 === i || i.scrollSlideType.kill(),
                null === (r = this.animations) || void 0 === r || r.revealType.kill(),
                null === (n = this.animations) || void 0 === n || n.staggerUp.kill(),
                null === (o = this.animations) || void 0 === o || o.scrollMask.kill()
            }
        }]) && G(e.prototype, n),
        o && G(e, o),
        t
    }();
    function Y(t) {
        return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function X(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function U(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function K(t, e, i) {
        return e && U(t.prototype, e),
        i && U(t, i),
        t
    }
    function $(t, e, i) {
        return ($ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = et(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function Q(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && Z(t, e)
    }
    function Z(t, e) {
        return (Z = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function J(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = et(t);
            if (e) {
                var n = et(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return tt(this, i)
        }
    }
    function tt(t, e) {
        return !e || "object" !== Y(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function et(t) {
        return (et = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var it = function(t) {
        Q(r, t);
        var e = J(r);
        function r() {
            var t;
            return X(this, r),
            (t = e.call(this, "home")).dom = {},
            t.components = {
                sustainabilityBlock: null
            },
            t.init(),
            t
        }
        return K(r, [{
            key: "init",
            value: function() {
                var t = this;
                $(et(r.prototype), "init", this).call(this),
                i.e(11).then(i.bind(null, 59)).then((function(e) {
                    t.components.sustainabilityBlock = new e.default
                }
                ))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                var t;
                null === (t = this.components.sustainabilityBlock) || void 0 === t || t.kill(),
                $(et(r.prototype), "kill", this).call(this)
            }
        }]),
        r
    }(W)
      , rt = function(t) {
        Q(i, t);
        var e = J(i);
        function i() {
            return X(this, i),
            e.apply(this, arguments)
        }
        return K(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new it
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer)
      , nt = i(11);
    function ot(t) {
        return (ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function st(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function at(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function lt(t, e, i) {
        return e && at(t.prototype, e),
        i && at(t, i),
        t
    }
    function ht(t, e, i) {
        return (ht = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = dt(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function ct(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && ut(t, e)
    }
    function ut(t, e) {
        return (ut = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function pt(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = dt(t);
            if (e) {
                var n = dt(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return ft(this, i)
        }
    }
    function ft(t, e) {
        return !e || "object" !== ot(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function dt(t) {
        return (dt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var mt = function(t) {
        ct(r, t);
        var e = pt(r);
        function r() {
            var t;
            return st(this, r),
            (t = e.call(this, "About")).data = {},
            t.components = {
                teamGallery: null,
                contactsGallery: null,
                theHistory: null,
                investorsBlock: null
            },
            t.init(),
            t
        }
        return lt(r, [{
            key: "init",
            value: function() {
                var t = this;
                ht(dt(r.prototype), "init", this).call(this),
                i.e(5).then(i.bind(null, 69)).then((function(e) {
                    t.components.teamGallery = new e.default
                }
                )),
                i.e(3).then(i.bind(null, 70)).then((function(e) {
                    t.components.contactsGallery = new e.default
                }
                )),
                i.e(6).then(i.bind(null, 71)).then((function(e) {
                    t.components.theHistory = new e.default
                }
                )),
                i.e(4).then(i.bind(null, 72)).then((function(e) {
                    t.components.investorsBlock = new e.default
                }
                ))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                ht(dt(r.prototype), "kill", this).call(this),
                this.components.teamGallery.kill(),
                this.components.contactsGallery.kill(),
                this.components.theHistory.kill()
            }
        }]),
        r
    }(W)
      , yt = function(t) {
        ct(i, t);
        var e = pt(i);
        function i() {
            return st(this, i),
            e.apply(this, arguments)
        }
        return lt(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new mt
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    function gt(t) {
        return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function vt(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function bt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function wt(t, e, i) {
        return e && bt(t.prototype, e),
        i && bt(t, i),
        t
    }
    function St(t, e, i) {
        return (St = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Pt(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function xt(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && _t(t, e)
    }
    function _t(t, e) {
        return (_t = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Et(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = Pt(t);
            if (e) {
                var n = Pt(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return kt(this, i)
        }
    }
    function kt(t, e) {
        return !e || "object" !== gt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function Pt(t) {
        return (Pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var At = function(t) {
        xt(r, t);
        var e = Et(r);
        function r() {
            var t;
            return vt(this, r),
            (t = e.call(this, "Project")).data = {},
            t.components = {
                gallerySlider: null,
                cityBlock: null,
                apartmentsBlock: null,
                integratedArchitecture: null,
                floorsBlocks: null,
                homes: null,
                secondaryMenu: null,
                investmentBlock: null,
                soldLabel: null,
                projectLocation: null,
                ctaFooter: null
            },
            t.init(),
            t
        }
        return wt(r, [{
            key: "init",
            value: function() {
                var t = this;
                St(Pt(r.prototype), "init", this).call(this),
                i.e(20).then(i.bind(null, 73)).then((function(e) {
                    t.components.gallerySlider = new e.default(document.querySelector(".gallery-slider-container-wrapper"))
                }
                )),
                i.e(10).then(i.bind(null, 74)).then((function(e) {
                    t.components.secondaryMenu = new e.default
                }
                )),
                i.e(21).then(i.bind(null, 75)).then((function(e) {
                    t.components.investmentBlock = new e.default
                }
                )),
                i.e(23).then(i.bind(null, 76)).then((function(e) {
                    t.components.soldLabel = new e.default
                }
                )),
                i.e(22).then(i.bind(null, 77)).then((function(e) {
                    t.components.projectLocation = new e.default
                }
                )),
                Promise.resolve().then(i.bind(null, 31)).then((function(e) {
                    t.components.ctaFooter = new e.default,
                    t.components.ctaFooter.init()
                }
                )),
                document.querySelector(".page-toload").classList.contains("ura") && (i.e(18).then(i.bind(null, 78)).then((function(e) {
                    t.components.cityBlock = new e.default
                }
                )),
                i.e(17).then(i.bind(null, 79)).then((function(e) {
                    t.components.apartmentsBlock = new e.default
                }
                )),
                i.e(19).then(i.bind(null, 80)).then((function(e) {
                    t.components.floorsBlock = new e.default
                }
                ))),
                document.querySelector(".page-toload").classList.contains("nivaria") && (i.e(16).then(i.bind(null, 81)).then((function(e) {
                    t.components.integratedArchitecture = new e.default
                }
                )),
                i.e(15).then(i.bind(null, 82)).then((function(e) {
                    t.components.homes = new e.default
                }
                )))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                var t, e, i, n, o, s;
                St(Pt(r.prototype), "kill", this).call(this),
                null === (t = this.components.cityBlock) || void 0 === t || t.kill(),
                null === (e = this.components.secondaryMenu) || void 0 === e || e.kill(),
                null === (i = this.components.gallerySlider) || void 0 === i || i.kill(),
                null === (n = this.components.soldLabel) || void 0 === n || n.kill(),
                null === (o = this.components.projectLocation) || void 0 === o || o.kill(),
                null === (s = this.components.ctaFooter) || void 0 === s || s.kill()
            }
        }]),
        r
    }(W)
      , Tt = function(t) {
        xt(i, t);
        var e = Et(i);
        function i() {
            return vt(this, i),
            e.apply(this, arguments)
        }
        return wt(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new At
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer)
      , Ct = (i(54),
    i(1))
      , Mt = i(20);
    function Dt(t) {
        return function(t) {
            if (Array.isArray(t))
                return Lt(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || function(t, e) {
            if (!t)
                return;
            if ("string" == typeof t)
                return Lt(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === i && t.constructor && (i = t.constructor.name);
            if ("Map" === i || "Set" === i)
                return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                return Lt(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Lt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++)
            r[i] = t[i];
        return r
    }
    function Ot(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var Ft = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.dom = {
                wrapper: document.querySelector(".kategora-timeline-wrapper"),
                timelineWrapper: document.querySelector(".kategora-timeline-wrapper .timeline-wrapper"),
                container: document.querySelector(".kategora-timeline-wrapper .timeline-container"),
                titleContainer: document.querySelector(".kategora-timeline-wrapper .title-container"),
                imagesContainer: document.querySelector(".kategora-timeline-wrapper .images-container"),
                labels: document.querySelector(".kategora-timeline-wrapper .timeline-labels"),
                dots: document.querySelector(".kategora-timeline-wrapper .timeline-dots"),
                images: document.querySelectorAll(".kategora-timeline-wrapper .images-container img"),
                controllersWrapper: document.querySelector(".kategora-timeline-wrapper .controllers-wrapper")
            },
            this.values = {
                currentPosition: 0,
                targetPosition: 0,
                lastScrollVal: 0,
                initialMouse: 0,
                scrollEase: .05,
                windowWidth: window.innerWidth,
                scrollLimit: document.querySelector(".kategora-timeline-wrapper .timeline-container").offsetWidth - .95 * window.innerWidth,
                imagesLength: this.dom.imagesContainer.querySelectorAll("img").length
            },
            this.controllers = {
                isMouseDown: !1,
                isDragging: !1,
                isMouseEnter: !1,
                isMobile: !1,
                isTouch: "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            },
            this.buroSwipe = null,
            this.animation = null,
            this.animationLabels = null,
            this.stillAnimation = null,
            this.loopId = -1
        }
        var e, i, n;
        return e = t,
        (i = [{
            key: "bindAll",
            value: function() {
                var t = this;
                ["onFocus", "onBlur", "onInfoMouseLeave", "onInfoMouseEnter", "onInfoClick", "onClick", "onKeyUp", "onResize", "onMouseDown", "onMouseMove", "onMouseUp"].forEach((function(e) {
                    return t[e] = t[e].bind(t)
                }
                ))
            }
        }, {
            key: "init",
            value: function() {
                this.bindAll(),
                this.setupTimeline(),
                this.addListeners(),
                this.setupStillAnimation(),
                this.onResize(),
                this.enterAnimation()
            }
        }, {
            key: "addListeners",
            value: function() {
                var t = this;
                window.addEventListener("resize", this.onResize),
                window.addEventListener("blur", this.onBlur),
                window.addEventListener("focus", this.onFocus),
                this.dom.imagesContainer.addEventListener("mousedown", this.onMouseDown),
                this.dom.imagesContainer.addEventListener("mousemove", this.onMouseMove),
                this.dom.imagesContainer.addEventListener("mouseup", this.onMouseUp),
                this.dom.imagesContainer.addEventListener("mouseleave", this.onMouseUp),
                this.dom.dots.querySelectorAll(".info").forEach((function(e) {
                    e.addEventListener("mouseenter", t.onInfoMouseEnter),
                    e.addEventListener("mouseleave", t.onInfoMouseLeave)
                }
                )),
                r.a.browserObj.isTouch && (this.dom.dots.querySelectorAll(".info").forEach((function(e) {
                    e.addEventListener("click", t.onInfoClick)
                }
                )),
                this.dom.imagesContainer.addEventListener("touchstart", this.onMouseDown),
                this.dom.imagesContainer.addEventListener("touchmove", this.onMouseMove),
                this.dom.imagesContainer.addEventListener("touchend", this.onMouseUp),
                this.buroSwipe = new Mt.a({
                    target: this.dom.imagesContainer,
                    desktop: !1
                }),
                this.buroSwipe.onLeft((function(t) {
                    Object(R.disablePageScroll)()
                }
                )),
                this.buroSwipe.onRight((function(t) {
                    Object(R.disablePageScroll)()
                }
                )),
                this.buroSwipe.run()),
                this.dom.controllersWrapper.querySelectorAll("button .hitzone").forEach((function(e) {
                    return e.addEventListener("click", t.onClick)
                }
                ))
            }
        }, {
            key: "onResize",
            value: function() {
                this.dom.imagesContainer.style.width = 1.2 * this.dom.labels.getBoundingClientRect().width + "px",
                this.values.windowWidth = window.innerWidth,
                this.values.scrollLimit = document.querySelector(".kategora-timeline-wrapper .timeline-container").offsetWidth - .95 * window.innerWidth
            }
        }, {
            key: "setupTimeline",
            value: function() {
                var t = this;
                this.dom.labels.querySelectorAll(".inner").forEach((function(e, i) {
                    t.dom.dots.querySelectorAll(".inner")[i].style.width = e.getBoundingClientRect().width + "px"
                }
                )),
                this.controllers.isMobile = !document.querySelector("html").classList.contains("has-scroll-smooth")
            }
        }, {
            key: "onInfoClick",
            value: function(t) {
                if (!(window.innerWidth >= 768)) {
                    this.controllers.isMouseEnter = !0;
                    var e = t.target.closest("li").querySelector(".tooltip").cloneNode(!0)
                      , i = document.createElement("button");
                    i.innerHTML = ' <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.906 0H16.7622C16.7622 3.86564 14.8164 6.38219 11.2621 7.49778C10.8198 7.63287 10.2006 7.99323 11.2621 8.35392C14.8164 9.46951 16.7622 11.9861 16.7622 15.8517H15.906C15.906 11.5619 13.2662 8.92725 8.38197 8.43719C3.49659 8.92678 0.856149 11.5616 0.856149 15.8519H0C0 11.9862 1.94579 9.46969 5.5001 8.3541C6.56158 7.99341 5.94238 7.63305 5.5001 7.49796C1.94579 6.38237 0 3.86582 0 0.000179369H0.856149C0.856149 4.28997 3.49595 6.92464 8.38018 7.41469C13.2656 6.9251 15.906 4.29031 15.906 0Z" fill="white"/>\n                      </svg>',
                    i.classList.add("close-btn"),
                    i.setAttribute("aria-label", "Close tooltip"),
                    e.querySelector(".tooltip-inner").appendChild(i),
                    document.querySelector("html").style.overflow = "hidden",
                    Object(R.disablePageScroll)(),
                    document.querySelector("body").appendChild(e),
                    e.classList.add("timeline-tooltip-clone"),
                    e.classList.add("active"),
                    e.style.top = r.a.scrollVal + "px",
                    e.querySelector(".close-btn").addEventListener("click", this.onMobileCloseClick.bind(this)),
                    Ct.Q.fromTo(e.querySelector(".tooltip .background"), {
                        autoAlpha: 1,
                        scaleY: 0,
                        transformOrigin: "bottom"
                    }, {
                        duration: .75,
                        scaleY: 1,
                        ease: "power4.inOut"
                    }),
                    Ct.Q.fromTo([e.querySelector(".tooltip .text"), e.querySelector(".tooltip .close-btn"), e.querySelector(".tooltip .title"), e.querySelector(".tooltip img"), e.querySelector(".tooltip .number")], {
                        autoAlpha: 0,
                        y: 20
                    }, {
                        duration: .75,
                        autoAlpha: 1,
                        y: 0,
                        delay: .35,
                        stagger: .05,
                        ease: "power4.out"
                    })
                }
            }
        }, {
            key: "onMobileCloseClick",
            value: function() {
                this.controllers.isMouseEnter = !1,
                Object(R.enablePageScroll)(),
                document.querySelector("html").style.overflow = "",
                document.querySelector(".timeline-tooltip-clone").remove()
            }
        }, {
            key: "onInfoMouseEnter",
            value: function(t) {
                if (!(window.innerWidth < 768)) {
                    this.controllers.isMouseEnter = !0;
                    var e = t.target.closest("li");
                    e.classList.add("active"),
                    Ct.Q.fromTo(e.querySelector(".tooltip .background"), {
                        autoAlpha: 1,
                        scaleY: 0,
                        transformOrigin: "bottom"
                    }, {
                        duration: .75,
                        scaleY: 1,
                        ease: "power4.inOut"
                    }),
                    Ct.Q.fromTo([e.querySelector(".tooltip .text"), e.querySelector(".tooltip .title"), e.querySelector(".tooltip img"), e.querySelector(".tooltip .number")], {
                        autoAlpha: 0,
                        y: 20
                    }, {
                        duration: .75,
                        autoAlpha: 1,
                        y: 0,
                        delay: .35,
                        stagger: .05,
                        ease: "power4.out"
                    })
                }
            }
        }, {
            key: "onInfoMouseLeave",
            value: function(t) {
                if (!(window.innerWidth < 768)) {
                    this.controllers.isMouseEnter = !1;
                    var e = this.dom.dots.querySelectorAll("li.active");
                    e && e.forEach((function(t) {
                        t.classList.remove("active"),
                        Ct.Q.killTweensOf([t.querySelector(".tooltip .background"), t.querySelector(".tooltip img"), t.querySelector(".tooltip .text"), t.querySelector(".tooltip .title"), t.querySelector(".tooltip .number")]),
                        Ct.Q.set([t.querySelector(".tooltip .background"), t.querySelector(".tooltip img"), t.querySelector(".tooltip .text"), t.querySelector(".tooltip .title"), t.querySelector(".tooltip .number")], {
                            clearProps: "all"
                        })
                    }
                    ))
                }
            }
        }, {
            key: "onClick",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , i = -window.innerWidth / 2;
                null === e ? t.target.closest("button").classList.contains("left-btn") && (i *= -1) : i *= e;
                var r = Ct.Q.utils.clamp(-this.values.scrollLimit, 0, this.values.currentPosition + i);
                this.values.targetPosition = r,
                this.values.targetPosition < 0 ? this.dom.controllersWrapper.querySelector(".left-btn").classList.remove("inactive") : this.dom.controllersWrapper.querySelector(".left-btn").classList.add("inactive"),
                this.values.targetPosition <= -this.values.scrollLimit ? this.dom.controllersWrapper.querySelector(".right-btn").classList.add("inactive") : this.dom.controllersWrapper.querySelector(".right-btn").classList.remove("inactive")
            }
        }, {
            key: "onMouseDown",
            value: function(t) {
                this.dom.imagesContainer.style.cursor = "grabbing",
                this.controllers.isMouseDown = !0,
                this.values.initialMouse = t.clientX,
                r.a.browserObj.isTouch && (this.onInfoMouseLeave(),
                this.values.initialMouse = t.touches[0].clientX),
                this.values.lastScrollVal = this.values.currentPosition
            }
        }, {
            key: "onBlur",
            value: function() {
                this.controllers.isMouseEnter = !0,
                this.onMouseUp()
            }
        }, {
            key: "onFocus",
            value: function() {
                this.controllers.isMouseEnter = !1
            }
        }, {
            key: "onMouseUp",
            value: function() {
                var t = this;
                this.dom.imagesContainer.style.cursor = "grab",
                this.controllers.isMouseDown = !1,
                r.a.browserObj.isTouch && Object(R.enablePageScroll)(),
                setTimeout((function() {
                    t.controllers.isDragging = !1,
                    t.values.initialMouse = 0
                }
                ), 100)
            }
        }, {
            key: "onKeyUp",
            value: function(t) {
                var e = t.key || t.keyCode;
                "ArrowLeft" === e && this.onClick(null, -1),
                "ArrowRight" === e && this.onClick(null, 1)
            }
        }, {
            key: "onMouseMove",
            value: function(t) {
                if (this.controllers.isMouseDown) {
                    this.controllers.isDragging = !0;
                    var e = t.clientX;
                    r.a.browserObj.isTouch && (e = t.touches[0].clientX),
                    this.values.scrollVal = e - this.values.initialMouse + this.values.lastScrollVal,
                    this.values.scrollVal = Math.max(-1 * this.values.scrollLimit, this.values.scrollVal),
                    this.values.scrollVal = Math.min(0, this.values.scrollVal),
                    this.values.targetPosition = this.values.scrollVal
                }
            }
        }, {
            key: "setupStillAnimation",
            value: function() {
                var t = this;
                this.stillAnimation = new nt.a({
                    targets: this.dom.container,
                    triggerOnce: !1,
                    rootMargin: "0px",
                    threshold: 0
                }),
                this.stillAnimation.prepare((function(t) {
                    t.idleMovement = .25
                }
                )),
                this.stillAnimation.init((function(e) {
                    t.controllers.isMouseEnter || e.forEach((function(e) {
                        -1 * t.values.targetPosition <= t.values.scrollLimit && (t.values.targetPosition -= e.element.idleMovement)
                    }
                    ))
                }
                ), (function(t, e) {
                    e || (t.idleMov = 0)
                }
                ))
            }
        }, {
            key: "loop",
            value: function() {
                var t = this;
                this.values.targetPosition < 0 ? this.dom.controllersWrapper.querySelector(".left-btn").classList.remove("inactive") : this.dom.controllersWrapper.querySelector(".left-btn").classList.add("inactive"),
                this.values.targetPosition <= -this.values.scrollLimit ? this.dom.controllersWrapper.querySelector(".right-btn").classList.add("inactive") : this.dom.controllersWrapper.querySelector(".right-btn").classList.remove("inactive"),
                this.values.currentPosition = w.c.lerp(this.values.currentPosition, this.values.targetPosition, this.values.scrollEase),
                this.values.currentPosition = Math.floor(100 * this.values.currentPosition) / 100,
                this.values.targetPosition,
                this.values.currentPosition,
                this.values.windowWidth,
                this.dom.container.style.transform = "translate3d(".concat(this.values.currentPosition, "px, 0, 0)"),
                this.dom.titleContainer.querySelector(".middle-title").style.transform = "translate3d(".concat(.15 * this.values.currentPosition, "px, 0, 0)"),
                this.dom.imagesContainer.querySelectorAll("img").forEach((function(e, i) {
                    e.style.transform = "translate3d(".concat(t.values.currentPosition * (1 + .25 * e.friction), "px, 0, 0)")
                }
                )),
                this.loopId = requestAnimationFrame((function() {
                    return t.loop()
                }
                ))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                var t = this;
                this.animation = new nt.a({
                    targets: Dt(document.querySelectorAll(".kategora-timeline-wrapper .timeline-wrapper")),
                    triggerOnce: !0,
                    persistent: !0
                }),
                this.animation.prepare((function(t) {
                    t.forEach((function(t) {
                        Ct.Q.set(t.querySelectorAll("img"), {
                            opacity: 0,
                            scale: 1.1,
                            transformOrigin: "center",
                            willChange: "transform"
                        }),
                        t.querySelectorAll("img").forEach((function(t) {
                            return t.friction = Math.floor(1.5 * Math.random()) + 1
                        }
                        )),
                        t.querySelectorAll("img")[t.querySelectorAll("img").length - 1].friction = 1
                    }
                    ))
                }
                )),
                this.animation.init((function(t) {
                    Ct.Q.to(t.querySelectorAll("img"), {
                        duration: 1,
                        opacity: 1,
                        scale: 1,
                        stagger: .1,
                        ease: "power2.inOut"
                    })
                }
                ), (function(e, i) {
                    i ? t.loop() : cancelAnimationFrame(t.loopId),
                    i ? document.addEventListener("keyup", t.onKeyUp) : document.removeEventListener("keyup", t.onKeyUp)
                }
                )),
                this.animationLabels = new nt.a({
                    targets: Dt(document.querySelectorAll(".kategora-timeline-wrapper .timeline-container li")),
                    triggerOnce: !0,
                    persistent: !1,
                    threshold: .25
                }),
                this.animationLabels.prepare((function(t) {
                    t.forEach((function(t) {
                        Ct.Q.set(t.querySelectorAll("span"), {
                            opacity: 0,
                            y: 10,
                            willChange: "transform"
                        })
                    }
                    ))
                }
                )),
                this.animationLabels.init((function(t) {
                    Ct.Q.to(t.querySelectorAll("span"), {
                        duration: 1,
                        opacity: 1,
                        y: 0,
                        stagger: .1,
                        delay: .25,
                        ease: "power2.out"
                    })
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                window.removeEventListener("blur", this.onBlur),
                window.removeEventListener("focus", this.onFocus),
                document.removeEventListener("keyup", this.onKeyUp),
                window.removeEventListener("resize", this.onResize)
            }
        }]) && Ot(e.prototype, i),
        n && Ot(e, n),
        t
    }()
      , It = i(31);
    function Rt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var Bt = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.dom = {
                wrapper: e
            },
            this.insideViewportAnimation = null,
            this.audioFile = e.dataset.audio,
            this.audio = null,
            this.currentVolume = 0,
            this.canAnimateAudio = !0,
            this.onBlur = this.onBlur.bind(this),
            this.onFocus = this.onFocus.bind(this),
            this.onAudioOn = this.onAudioOn.bind(this),
            this.onAudioOff = this.onAudioOff.bind(this),
            this.audioCtx = null,
            this.source = null,
            this.panNode = null,
            this.panDirection = null,
            this.isSafari = document.querySelector("html").classList.contains("safari"),
            this.init()
        }
        var e, i, r;
        return e = t,
        (i = [{
            key: "init",
            value: function() {
                this.dom.wrapper.querySelector("video") && (this.setupAudio(),
                this.addListeners(),
                P.default.getState() && this.onAudioOn()),
                window.innerWidth > 800 && this.videoLazySrc()
            }
        }, {
            key: "addListeners",
            value: function() {
                window.addEventListener("audioOn", this.onAudioOn),
                window.addEventListener("audioOff", this.onAudioOff)
            }
        }, {
            key: "videoLazySrc",
            value: function() {
                for (var t = document.querySelectorAll(".video-lazy-src"), e = document.querySelectorAll(".video-lazy-src source"), i = 0; i < e.length; i++)
                    e[i].setAttribute("src", e[i].getAttribute("data-src"));
                t.forEach((function(t) {
                    t.load()
                }
                ))
            }
        }, {
            key: "onBlur",
            value: function() {
                this.canAnimateAudio = !1,
                this.audio.volume = 0,
                this.currentVolume = 0
            }
        }, {
            key: "onFocus",
            value: function() {
                this.canAnimateAudio = !0,
                this.audio.volume = this.currentVolume
            }
        }, {
            key: "onAudioOn",
            value: function() {
                this.createAudioContext(),
                this.audio.muted = !1,
                this.audio.play()
            }
        }, {
            key: "onAudioOff",
            value: function() {
                this.audio.muted = !0
            }
        }, {
            key: "setupAudio",
            value: function() {
                var t = this;
                this.audioFile && (this.insideViewportAnimation = new nt.a({
                    targets: this.dom.wrapper.querySelector("video"),
                    triggerOnce: !1,
                    persintent: !0,
                    rootMargin: "0px",
                    threshold: 0
                }),
                this.insideViewportAnimation.prepare((function(t) {}
                )),
                this.insideViewportAnimation.init((function(e) {
                    P.default.getState() && t.canAnimateAudio && (t.audio.play(),
                    t.audio.muted = !1,
                    e.forEach((function(e) {
                        t.currentVolume = x.default.utils.clamp(0, 1, Math.sin(e.insideValAlt)),
                        t.audio.volume = t.currentVolume,
                        t.isSafari || (t.panNode.pan.value = t.currentVolume * t.panDirection)
                    }
                    )))
                }
                ), (function(e, i) {
                    if (!i) {
                        if (!P.default.getState() || !t.canAnimateAudio)
                            return;
                        var r = {
                            x: t.audio.volume
                        };
                        x.default.to(r, {
                            duration: .25,
                            x: 0,
                            onUpdate: function() {
                                t.audio.volume = r.x
                            }
                        })
                    }
                }
                )))
            }
        }, {
            key: "createAudioContext",
            value: function() {
                this.audio || (this.audio = new Audio(this.audioFile),
                this.audio.loop = !0,
                this.audio.volume = 0,
                this.audio.muted = !0,
                this.isSafari || (this.audioCtx = new (window.AudioContext || window.webkitAudioContext),
                this.source = this.audioCtx.createMediaElementSource(this.audio),
                this.panNode = this.audioCtx.createStereoPanner(),
                this.panNode.pan.value = 0,
                this.source.connect(this.panNode),
                this.panNode.connect(this.audioCtx.destination)),
                this.panDirection = -1,
                this.dom.wrapper.querySelector(".inner-container").classList.contains("left-layout") && (this.panDirection = 1))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                var t, e;
                window.removeEventListener("audioOn", this.onAudioOn),
                window.removeEventListener("audioOff", this.onAudioOff),
                null === (t = this.insideViewportAnimation) || void 0 === t || t.kill(),
                this.audio && (this.audio.src = "",
                this.audio.load(),
                this.audio = null),
                this.isSafari || null === (e = this.audioCtx) || void 0 === e || e.close()
            }
        }]) && Rt(e.prototype, i),
        r && Rt(e, r),
        t
    }();
    function Vt(t) {
        return (Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function jt(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function qt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function zt(t, e, i) {
        return e && qt(t.prototype, e),
        i && qt(t, i),
        t
    }
    function Nt(t, e, i) {
        return (Nt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Xt(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function Ht(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && Gt(t, e)
    }
    function Gt(t, e) {
        return (Gt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Wt(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = Xt(t);
            if (e) {
                var n = Xt(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return Yt(this, i)
        }
    }
    function Yt(t, e) {
        return !e || "object" !== Vt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function Xt(t) {
        return (Xt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var Ut = function(t) {
        Ht(i, t);
        var e = Wt(i);
        function i() {
            var t;
            return jt(this, i),
            (t = e.call(this, "Projects")).dom = {
                projectsGridWrapper: document.querySelectorAll(".project-grid-wrapper")
            },
            t.components = {
                kategoraTimeline: new Ft,
                ctaFooter: new It.default,
                projectsGrid: []
            },
            t.init(),
            t
        }
        return zt(i, [{
            key: "init",
            value: function() {
                var t = this;
                Nt(Xt(i.prototype), "init", this).call(this),
                this.components.kategoraTimeline.init(),
                this.components.ctaFooter.init(),
                this.dom.projectsGridWrapper.forEach((function(e) {
                    return t.components.projectsGrid.push(new Bt(e))
                }
                ))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                this.components.kategoraTimeline.kill(),
                this.components.ctaFooter.kill(),
                this.components.projectsGrid.forEach((function(t) {
                    return t.kill()
                }
                )),
                Nt(Xt(i.prototype), "kill", this).call(this)
            }
        }]),
        i
    }(W)
      , Kt = function(t) {
        Ht(i, t);
        var e = Wt(i);
        function i() {
            return jt(this, i),
            e.apply(this, arguments)
        }
        return zt(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new Ut
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    function $t(t) {
        return ($t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Qt(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Zt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function Jt(t, e, i) {
        return e && Zt(t.prototype, e),
        i && Zt(t, i),
        t
    }
    function te(t, e, i) {
        return (te = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = oe(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function ee(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && ie(t, e)
    }
    function ie(t, e) {
        return (ie = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function re(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = oe(t);
            if (e) {
                var n = oe(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return ne(this, i)
        }
    }
    function ne(t, e) {
        return !e || "object" !== $t(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function oe(t) {
        return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var se = function(t) {
        ee(r, t);
        var e = re(r);
        function r() {
            var t;
            return Qt(this, r),
            (t = e.call(this, "Expertise")).data = {},
            t.components = {
                expertiseList: null,
                ctaFooter: null
            },
            t.init(),
            t
        }
        return Jt(r, [{
            key: "init",
            value: function() {
                var t = this;
                te(oe(r.prototype), "init", this).call(this),
                i.e(7).then(i.bind(null, 83)).then((function(e) {
                    t.components.expertiseList = new e.default,
                    t.components.expertiseList.init()
                }
                )),
                Promise.resolve().then(i.bind(null, 31)).then((function(e) {
                    t.components.ctaFooter = new e.default,
                    t.components.ctaFooter.init()
                }
                ))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                this.components.expertiseList.kill(),
                this.components.ctaFooter.kill(),
                te(oe(r.prototype), "kill", this).call(this)
            }
        }]),
        r
    }(W)
      , ae = function(t) {
        ee(i, t);
        var e = re(i);
        function i() {
            return Qt(this, i),
            e.apply(this, arguments)
        }
        return Jt(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new se
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    function le(t) {
        return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function he(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function ce(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function ue(t, e, i) {
        return e && ce(t.prototype, e),
        i && ce(t, i),
        t
    }
    function pe(t, e, i) {
        return (pe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ge(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function fe(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && de(t, e)
    }
    function de(t, e) {
        return (de = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function me(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = ge(t);
            if (e) {
                var n = ge(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return ye(this, i)
        }
    }
    function ye(t, e) {
        return !e || "object" !== le(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function ge(t) {
        return (ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var ve = function(t) {
        fe(r, t);
        var e = me(r);
        function r() {
            var t;
            return he(this, r),
            (t = e.call(this, "Insights")).dom = {
                insightThumbs: document.querySelectorAll(".insights-grid .insight-thumb-wrapper")
            },
            t.components = {
                pagination: null,
                filters: null,
                insightThumbsArray: []
            },
            t.init(),
            t
        }
        return ue(r, [{
            key: "init",
            value: function() {
                var t = this;
                pe(ge(r.prototype), "init", this).call(this),
                i.e(13).then(i.bind(null, 84)).then((function(e) {
                    t.dom.insightThumbs.forEach((function(i, r) {
                        new e.default(i).init(r),
                        t.components.insightThumbsArray.push(i)
                    }
                    ))
                }
                )),
                i.e(14).then(i.bind(null, 85)).then((function(e) {
                    t.components.pagination = new e.default,
                    t.components.pagination.init(),
                    i.e(12).then(i.bind(null, 86)).then((function(e) {
                        t.components.filters = new e.default,
                        t.components.filters.init(t.components.pagination)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                pe(ge(r.prototype), "kill", this).call(this),
                this.components.filters.kill()
            }
        }]),
        r
    }(W)
      , be = function(t) {
        fe(i, t);
        var e = me(i);
        function i() {
            return he(this, i),
            e.apply(this, arguments)
        }
        return ue(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new ve
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    function we(t) {
        return (we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Se(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function xe(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function _e(t, e, i) {
        return e && xe(t.prototype, e),
        i && xe(t, i),
        t
    }
    function Ee(t, e, i) {
        return (Ee = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ce(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function ke(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && Pe(t, e)
    }
    function Pe(t, e) {
        return (Pe = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Ae(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = Ce(t);
            if (e) {
                var n = Ce(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return Te(this, i)
        }
    }
    function Te(t, e) {
        return !e || "object" !== we(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function Ce(t) {
        return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var Me = function(t) {
        ke(i, t);
        var e = Ae(i);
        function i() {
            var t;
            return Se(this, i),
            (t = e.call(this, "InsightsSingle")).dom = {},
            t.init(),
            t
        }
        return _e(i, [{
            key: "init",
            value: function() {
                Ee(Ce(i.prototype), "init", this).call(this)
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                Ee(Ce(i.prototype), "kill", this).call(this)
            }
        }]),
        i
    }(W)
      , De = function(t) {
        ke(i, t);
        var e = Ae(i);
        function i() {
            return Se(this, i),
            e.apply(this, arguments)
        }
        return _e(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new Me
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    function Le(t) {
        return (Le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Oe(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Fe(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function Ie(t, e, i) {
        return e && Fe(t.prototype, e),
        i && Fe(t, i),
        t
    }
    function Re(t, e, i) {
        return (Re = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ze(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function Be(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && Ve(t, e)
    }
    function Ve(t, e) {
        return (Ve = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function je(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = ze(t);
            if (e) {
                var n = ze(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return qe(this, i)
        }
    }
    function qe(t, e) {
        return !e || "object" !== Le(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function ze(t) {
        return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var Ne = function(t) {
        Be(i, t);
        var e = je(i);
        function i() {
            var t;
            return Oe(this, i),
            (t = e.call(this, "Privacy")).data = {},
            t.init(),
            t
        }
        return Ie(i, [{
            key: "init",
            value: function() {
                Re(ze(i.prototype), "init", this).call(this)
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                Re(ze(i.prototype), "kill", this).call(this)
            }
        }]),
        i
    }(W)
      , He = function(t) {
        Be(i, t);
        var e = je(i);
        function i() {
            return Oe(this, i),
            e.apply(this, arguments)
        }
        return Ie(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new Ne
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    function Ge(t) {
        return (Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function We(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Ye(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function Xe(t, e, i) {
        return e && Ye(t.prototype, e),
        i && Ye(t, i),
        t
    }
    function Ue(t, e, i) {
        return (Ue = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Je(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var n = Object.getOwnPropertyDescriptor(r, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function Ke(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && $e(t, e)
    }
    function $e(t, e) {
        return ($e = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Qe(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, r = Je(t);
            if (e) {
                var n = Je(this).constructor;
                i = Reflect.construct(r, arguments, n)
            } else
                i = r.apply(this, arguments);
            return Ze(this, i)
        }
    }
    function Ze(t, e) {
        return !e || "object" !== Ge(e) && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function Je(t) {
        return (Je = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var ti = function(t) {
        Ke(i, t);
        var e = Qe(i);
        function i() {
            var t;
            return We(this, i),
            (t = e.call(this, "404")).data = {},
            t.init(),
            t
        }
        return Xe(i, [{
            key: "init",
            value: function() {
                Ue(Je(i.prototype), "init", this).call(this)
            }
        }, {
            key: "enterAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "exitAnimation",
            value: function() {
                return new Promise((function(t, e) {
                    t()
                }
                ))
            }
        }, {
            key: "kill",
            value: function() {
                Ue(Je(i.prototype), "kill", this).call(this)
            }
        }]),
        i
    }(W)
      , ei = function(t) {
        Ke(i, t);
        var e = Qe(i);
        function i() {
            return We(this, i),
            e.apply(this, arguments)
        }
        return Xe(i, [{
            key: "onEnter",
            value: function() {}
        }, {
            key: "onLeave",
            value: function() {
                r.a.currentView.kill()
            }
        }, {
            key: "onEnterCompleted",
            value: function() {
                r.a.currentView = new ti
            }
        }, {
            key: "onLeaveCompleted",
            value: function() {}
        }]),
        i
    }(b.Renderer);
    Promise.resolve().then(i.bind(null, 0)).then((function(t) {
        t = t.gsap;
        var e = new CustomEvent("pageLoaded");
        window.dispatchEvent(e),
        (new S.a).init().then((function() {
            t.set("#loading-page", {
                duration: .25,
                autoAlpha: 0,
                onComplete: function() {
                    document.querySelector("#loading-page").remove(),
                    Promise.resolve().then(i.bind(null, 7)).then((function(t) {
                        t.default.init(document.querySelector(".page-current"))
                    }
                    )),
                    Promise.resolve().then(i.bind(null, 4)).then((function(t) {
                        t.default.init(document.querySelector(".page-current"))
                    }
                    )),
                    Promise.resolve().then(i.bind(null, 3)).then((function(t) {
                        t.default.init(document.querySelector(".page-current"))
                    }
                    )),
                    i.e(8).then(i.bind(null, 56)).then((function(t) {
                        t.default.init()
                    }
                    )),
                    Promise.resolve().then(i.bind(null, 30)).then((function(t) {
                        t.default.init()
                    }
                    )),
                    Promise.resolve().then(i.bind(null, 5)).then((function(t) {
                        t.default.init()
                    }
                    ));
                    var t = new CustomEvent("pageLoaded");
                    window.dispatchEvent(t)
                }
            })
        }
        ))
    }
    )),
    Object(w.b)(document.querySelector("body .page-toload")),
    r.a.highway = new b.Core({
        renderers: {
            home: rt,
            about: yt,
            project: Tt,
            projects: Kt,
            expertise: ae,
            insights: be,
            insightsSingle: De,
            privacy: He,
            four04: ei
        },
        transitions: {
            default: I
        }
    }),
    r.a.highway.on("NAVIGATE_END", (function(t) {
        t.to,
        t.trigger,
        t.location;
        -1 === window.location.href.indexOf("local") && ga("send", "pageview", window.location.pathname)
    }
    )),
    window.addEventListener("load", (function() {}
    ))
}
]);
