(self.webpackChunk = self.webpackChunk || []).push([
  ["136"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new F.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            Y.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          H.debug && window && window.console.warn(e);
        }
        var l,
          c,
          d,
          s = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(l, c) {
              function d() {
                var e = new s();
                return (i(e.init) && e.init.apply(e, arguments), e);
              }
              function s() {}
              (c === n && ((c = l), (l = Object)), (d.Bare = s));
              var u,
                f = (o[e] = l[e]),
                p = (s[e] = d[e] = new o());
              return (
                (p.constructor = d),
                (d.mixin = function (t) {
                  return ((s[e] = d[e] = r(d, t)[e]), d);
                }),
                (d.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(d, p, f, d, l)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return (i(p.init) || (p.init = l), d);
                }),
                d.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                    ? t + n
                    : (e /= a / 2) < 1
                      ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          y = /[A-Z]/,
          I = "number",
          T = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          h = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          R = document.createElement("a"),
          N = ["Webkit", "Moz", "O", "ms"],
          A = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((n = N[t] + a) in R.style) return { dom: n, css: A[t] + e };
          },
          S = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (S.transition) {
          var C = S.timing.dom;
          if (((R.style[C] = u["ease-in-back"][0]), !R.style[C]))
            for (var M in f) u[M][0] = f[M];
        }
        var w = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && S.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          P = (t.now =
            (d =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && S.bind
              ? d.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          U = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = Q[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  l = this.props[a];
                return (
                  l || (l = this.props[a] = new o.Bare()),
                  l.init(this.$el, n, i, t),
                  l
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      d.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  (u.call(
                    this,
                    e,
                    function (e, t) {
                      (e.span > f && (f = e.span), e.stop(), e.animate(t));
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    },
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i)));
                  var p = this,
                    E = !1,
                    g = {};
                  w(function () {
                    (u.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g));
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              (this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this));
            }
            function c() {
              (l.call(this), (this.el.style.display = "none"));
            }
            function d() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              ((n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[S.transition.dom] = n)));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                l,
                c = t !== f,
                d = {};
              for (i in e)
                ((r = e[i]),
                  i in $
                    ? (d.transform || (d.transform = {}), (d.transform[i] = r))
                    : (y.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in Q ? (d[i] = r) : (l || (l = {}), (l[i] = r))));
              for (i in d) {
                if (((r = d[i]), !(o = this.props[i]))) {
                  if (!c) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && l && a.call(this, l);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function I(e, n) {
              t[e] = function () {
                return this.children
                  ? T.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function T(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            ((t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                H.keepInherited && !H.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !h.test(n) && (this.upstream = n);
              }
              S.backface &&
                H.hideBackface &&
                j(this.el, S.backface.css, "hidden");
            }),
              I("add", n),
              I("start", a),
              I("wait", function (e) {
                ((e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0)));
              }),
              I("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then().",
                    );
              }),
              I("next", i),
              I("stop", l),
              I("set", function (e) {
                (l.call(this, e), u.call(this, e, p, g));
              }),
              I("show", function (e) {
                ("string" != typeof e && (e = "block"),
                  (this.el.style.display = e));
              }),
              I("hide", c),
              I("redraw", d),
              I("destroy", function () {
                (l.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null));
              }));
          }),
          F = s(U, function (t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new U.Bare());
              return (a.el || a.init(t), n ? a.start(n) : a);
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          x = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return (this.update(e), t);
            }
            ((e.init = function (e, t, n, a) {
              ((this.$el = e), (this.el = e[0]));
              var i,
                r,
                l,
                c = t[0];
              (n[2] && (c = n[2]),
                W[c] && (c = W[c]),
                (this.name = c),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (l = "ease"),
                  void 0 !== r && (l = r),
                  i in u ? i : l)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = a.unit || this.unit || H.defaultUnit),
                (this.angle = a.angle || this.angle || H.defaultAngle),
                H.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : ""))));
            }),
              (e.set = function (e) {
                ((e = this.convert(e, this.type)),
                  this.update(e),
                  this.redraw());
              }),
              (e.transition = function (e) {
                ((this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e));
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                ((e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new G({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  })));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                j(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  j(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case I:
                    if (o) return e;
                    if (l && "" === e.replace(g, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case T:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (l && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (l && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (l && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (l && b.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e,
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              }));
          }),
          V = s(x, function (e, t) {
            e.init = function () {
              (t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), T)));
            };
          }),
          k = s(x, function (e, t) {
            ((e.init = function () {
              (t.init.apply(this, arguments), (this.animate = this.fallback));
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              }));
          }),
          D = s(x, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                ((i = (o = $[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i));
            }
            ((e.init = function () {
              (t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  $.perspective &&
                    H.perspective &&
                    ((this.current.perspective = H.perspective),
                    j(this.el, this.name, this.style(this.current)),
                    this.redraw())));
            }),
              (e.set = function (e) {
                (n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  j(this.el, this.name, this.style(this.current)),
                  this.redraw());
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                ((this.active = !0), (this.nextStyle = this.style(a)));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                j(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    ((a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i))));
                  }),
                  a
                );
              }));
          }),
          G = s(function (t) {
            function o() {
              var e,
                t,
                n,
                a = c.length;
              if (a)
                for (w(o), t = P(), e = a; e--; ) (n = c[e]) && n.render(t);
            }
            var l = { ease: u.ease[1], from: 0, to: 1 };
            ((t.init = function (e) {
              ((this.duration = e.duration || 0), (this.delay = e.delay || 0));
              var t = e.ease || l.ease;
              (u[t] && (t = u[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name));
              var n = e.from,
                a = e.to;
              (void 0 === n && (n = l.from),
                void 0 === a && (a = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = P()),
                !1 !== e.autoplay && this.play());
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = P()),
                  (this.active = !0),
                  1 === c.push(this) && w(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(n + 1)),
                    (c.length = n),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2]),
                        ))
                      : Math.round((this.begin + r * this.change) * d) / d),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                ((t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy());
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(g, "");
                  (a !== e.replace(g, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a));
                }
                ((t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t));
              }),
              (t.destroy = function () {
                (this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i));
              }));
            var c = [],
              d = 1e3;
          }),
          X = s(G, function (e) {
            ((e.init = function (e) {
              ((this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play());
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              }));
          }),
          B = s(G, function (e, t) {
            ((e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                ((n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new G({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      }),
                    ));
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  ((this.tweens = null), (this.current = null));
                }
              }));
          }),
          H = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: [],
          });
        ((t.fallback = function (e) {
          if (!S.transition) return (H.fallback = !0);
          H.agentTests.push("(" + e + ")");
          var t = RegExp(H.agentTests.join("|"), "i");
          H.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new G(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          }));
        var j = e.style,
          z = e.css,
          W = { transform: S.transform && S.transform.css },
          Q = {
            color: [V, T],
            background: [V, T, "background-color"],
            "outline-color": [V, T],
            "border-color": [V, T],
            "border-top-color": [V, T],
            "border-right-color": [V, T],
            "border-bottom-color": [V, T],
            "border-left-color": [V, T],
            "border-width": [x, m],
            "border-top-width": [x, m],
            "border-right-width": [x, m],
            "border-bottom-width": [x, m],
            "border-left-width": [x, m],
            "border-spacing": [x, m],
            "letter-spacing": [x, m],
            margin: [x, m],
            "margin-top": [x, m],
            "margin-right": [x, m],
            "margin-bottom": [x, m],
            "margin-left": [x, m],
            padding: [x, m],
            "padding-top": [x, m],
            "padding-right": [x, m],
            "padding-bottom": [x, m],
            "padding-left": [x, m],
            "outline-width": [x, m],
            opacity: [x, I],
            top: [x, b],
            right: [x, b],
            bottom: [x, b],
            left: [x, b],
            "font-size": [x, b],
            "text-indent": [x, b],
            "word-spacing": [x, b],
            width: [x, b],
            "min-width": [x, b],
            "max-width": [x, b],
            height: [x, b],
            "min-height": [x, b],
            "max-height": [x, b],
            "line-height": [x, v],
            "scroll-top": [k, I, "scrollTop"],
            "scroll-left": [k, I, "scrollLeft"],
          },
          $ = {};
        (S.transform &&
          ((Q.transform = [D]),
          ($ = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [I],
            scaleX: [I],
            scaleY: [I],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          S.transform &&
            S.backface &&
            (($.z = [b, "translateZ"]),
            ($.rotateZ = [O]),
            ($.scaleZ = [I]),
            ($.perspective = [m])));
        var Y = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        l,
        c,
        d,
        s,
        u,
        f,
        p,
        E,
        g,
        y,
        I,
        T,
        m,
        b,
        O,
        v,
        h = window.$,
        _ = n(5487) && h.tram;
      (((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (l = Function.prototype),
        o.push,
        (c = o.slice),
        o.concat,
        r.toString,
        (d = r.hasOwnProperty),
        (s = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (p = o.some),
        (E = o.indexOf),
        o.lastIndexOf,
        (g = Object.keys),
        l.bind,
        (y =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var l = a.keys(e), o = 0, r = l.length; o < r; o++)
                  if (t.call(n, e[l[o]], l[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
                ? e.map(t, n)
                : (y(e, function (e, i, o) {
                    a.push(t.call(n, e, i, o));
                  }),
                  a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              I(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return ((a = e), !0);
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
                ? e.filter(t, n)
                : (y(e, function (e, i, o) {
                    t.call(n, e, i, o) && a.push(e);
                  }),
                  a);
          }),
        (I =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                  ? e.some(t, n)
                  : (y(e, function (e, a, r) {
                      if (o || (o = t.call(n, e, a, r))) return i;
                    }),
                    !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : I(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(c.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              _.frame(function () {
                ((t = !1), e.apply(a, n));
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            l,
            c,
            d = function () {
              var s = a.now() - l;
              s < t
                ? (i = setTimeout(d, t - s))
                : ((i = null), n || ((c = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            ((r = this), (o = arguments), (l = a.now()));
            var s = n && !i;
            return (
              i || (i = setTimeout(d, t)),
              s && ((c = e.apply(r, o)), (r = o = null)),
              c
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return d.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (T = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + m[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || T)
                  .source,
                (t.interpolate || T).source,
                (t.evaluate || T).source,
              ].join("|") + "|$",
              "g",
            ),
            r = 0,
            l = "__p+='";
          (e.replace(o, function (t, n, a, i, o) {
            return (
              (l += e.slice(r, o).replace(b, O)),
              (r = o + t.length),
              n
                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                  ? (l += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                  : i && (l += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (l += "';\n"));
          var c = t.variable;
          if (c) {
            if (!v.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else ((l = "with(obj||{}){\n" + l + "}\n"), (c = "obj"));
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var d = function (e) {
            return i.call(this, e, a);
          };
          return ((d.source = "function(" + c + "){\n" + l + "}"), d);
        }),
        (e.exports = a));
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("brand", (e.exports = function () {}), function (e) {
        var t,
          n = {},
          i = document,
          o = e("html"),
          r = e("body"),
          l = window.location,
          c = /PhantomJS/i.test(navigator.userAgent),
          d =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function s() {
          var n =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            !!i.webkitFullscreenElement;
          e(t).attr("style", n ? "display: none !important;" : "");
        }
        function u() {
          var e = r.children(".w-webflow-badge"),
            n = e.length && e.get(0) === t,
            i = a.env("editor");
          if (n) {
            i && e.remove();
            return;
          }
          (e.length && e.remove(), i || r.append(t));
        }
        return (
          (n.ready = function () {
            var n,
              a,
              r,
              f = o.attr("data-wf-status"),
              p = o.attr("data-wf-domain") || "";
            (/\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
              f &&
                !c &&
                ((t =
                  t ||
                  ((n = e('<a class="w-webflow-badge"></a>').attr(
                    "href",
                    "https://webflow.com?utm_campaign=brandjs",
                  )),
                  (a = e("<img>")
                    .attr(
                      "src",
                      "../images/webflow-badge-icon-d2.89e12c322e.svg",
                    )
                    .attr("alt", "")
                    .css({ marginRight: "4px", width: "26px" })),
                  (r = e("<img>")
                    .attr(
                      "src",
                      "../images/webflow-badge-text-d2.c82cec3b78.svg",
                    )
                    .attr("alt", "Made in Webflow")),
                  n.append(a, r),
                  n[0])),
                u(),
                setTimeout(u, 500),
                e(i).off(d, s).on(d, s)));
          }),
          n
        );
      });
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            l = document.location,
            c = "hashchange",
            d =
              n.load ||
              function () {
                var t, n, a;
                ((i = !0),
                  (window.WebflowEditor = !0),
                  o.off(c, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data",
                            );
                          ((t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f));
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    (E(n, a), t(!1));
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n));
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(l.hash) && d();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            (window.removeEventListener("message", t, !1), e.remove());
          }
          return (
            s
              ? d()
              : l.search
                ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                    /\?edit$/.test(l.href)) &&
                  d()
                : o.on(c, u).triggerHandler(c),
            {}
          );
        }),
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function c() {
                      (document.addEventListener("mousemove", d),
                        document.addEventListener("mousedown", d),
                        document.addEventListener("mouseup", d),
                        document.addEventListener("pointermove", d),
                        document.addEventListener("pointerdown", d),
                        document.addEventListener("pointerup", d),
                        document.addEventListener("touchmove", d),
                        document.addEventListener("touchstart", d),
                        document.addEventListener("touchend", d));
                    }
                    function d(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", d),
                        document.removeEventListener("mousedown", d),
                        document.removeEventListener("mouseup", d),
                        document.removeEventListener("pointermove", d),
                        document.removeEventListener("pointerdown", d),
                        document.removeEventListener("pointerup", d),
                        document.removeEventListener("touchmove", d),
                        document.removeEventListener("touchstart", d),
                        document.removeEventListener("touchend", d));
                    }
                    (document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0,
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), c());
                        },
                        !0,
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, l;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (l = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === l && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0,
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            ((n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible",
                              ) && t.removeAttribute("data-wf-focus-visible"));
                          }
                        },
                        !0,
                      ));
                  })(document);
                }
            },
          };
        }),
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            ((i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0)));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        }),
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          ((a = []), t.extend(n.triggers, o));
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        (n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n));
      }
      var o = window.jQuery,
        r = {},
        l = ".w-ix";
      ((r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE"));
          },
        }),
        (e.exports = r));
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      (i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          }),
        ));
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        l = [],
        c = window.Webflow || [],
        d = window.jQuery,
        s = d(window),
        u = d(document),
        f = d.isFunction,
        p = (o._ = n(5756)),
        E = (o.tram = n(5487) && d.tram),
        g = !1,
        y = !1;
      function I(e) {
        (o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e));
      }
      function T(e) {
        var t;
        (f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            }))));
      }
      ((E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && T(r[e]);
          var a = (r[e] = t(d, p, n) || {});
          return (I(a), a);
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          c.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
                ? n && !t
                : "slug" === e
                  ? n && window.__wf_slug
                  : "editor" === e
                    ? window.WebflowEditor
                    : "test" === e
                      ? window.__wf_test
                      : "frame" === e
                        ? window !== window.top
                        : void 0
            : n;
        }));
      var m = navigator.userAgent.toLowerCase(),
        b = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(m));
      ((o.env.safari = /safari/.test(m) && !O && !v),
        b &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = b
          ? function (e) {
              return e === a || d.contains(e, a);
            }
          : function () {
              return !0;
            }));
      var h = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + h;
      function R(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function N(e) {
        f(e) && e();
      }
      function A() {
        (i && (i.reject(), s.off("load", i.resolve)),
          (i = new d.Deferred()),
          s.on("load", i.resolve));
      }
      ((o.resize = R(s, h)),
        (o.scroll = R(s, _)),
        (o.redraw = R()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          ((g = !0),
            y ? ((y = !1), p.each(r, I)) : p.each(l, N),
            p.each(c, N),
            o.resize.up());
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          ((e = e || {}),
            (y = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(r, T),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (l = []),
            (c = []),
            "pending" === i.state() && A());
        }),
        d(o.ready),
        A(),
        (e.exports = window.Webflow = o));
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            l = e(window),
            c = a.env(),
            d = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = l.scrollTop(),
              n = l.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  l = 0.5 * n,
                  c = i.is(":visible") && o + r - l >= e && o + l <= e + n;
                t.active !== c && ((t.active = c), g(a, u, c));
              }
            });
          }
          function g(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  ((n = c && a.env("design")),
                    (o = a.env("slug") || d.pathname || ""),
                    a.scroll.off(E),
                    (i = []));
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === d.host + d.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var l = e(s.hash);
                            l.length && i.push({ link: r, sec: l, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            g(
                              r,
                              u,
                              s.href === d.href ||
                                a === o ||
                                (f.test(a) && p.test(o)),
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(E), E());
                }),
            r
          );
        }),
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            l = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            d = a.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              d +
              " > .header, " +
              d +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
            ),
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function I(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var d =
                E.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== d) {
                var u,
                  f = e(d);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = d),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(s),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              l = t.outerHeight();
                            l < r && (i -= Math.round((r - l) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion",
                                ) ||
                              g.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time"),
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          d = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              l,
                              s,
                              f = Date.now() - d;
                            (window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (l = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = o / l) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1)),
                            ),
                              f <= r ? c(u) : "function" == typeof n && n());
                          };
                        c(u);
                      }
                    })(f, function () {
                      (y(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        y(f, "remove"));
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              (r.on(n, f, I),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild));
            },
          };
        }),
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function d(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  (t.preventDefault(), t.stopPropagation());
                  return;
                }
                var a,
                  c,
                  d,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - i;
                ((i = p),
                  Math.abs(E) > l &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (c = t),
                    (d = { direction: E > 0 ? "right" : "left" }),
                    (s = e.Event(a, { originalEvent: c })),
                    e(c.target).trigger(s, d),
                    u()));
              }
            }
            function s(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                (e.preventDefault(), e.stopPropagation(), (r = !1));
                return;
              }
            }
            function u() {
              o = !1;
            }
            (t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", d, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", d, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                (t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", d, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", d, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null));
              }));
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        }),
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, a, i, o, r, l, c, d, s, u, f) {
        return function (p) {
          e(p);
          var E = p.form,
            g = {
              name: E.attr("data-name") || E.attr("name") || "Untitled Form",
              pageId: E.attr("data-wf-page-id") || "",
              elementId: E.attr("data-wf-element-id") || "",
              domain: u("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                E.html(),
              ),
              trackingCookies: a(),
            };
          let y = E.attr("data-wf-flow");
          y && (g.wfFlow = y);
          let I = E.attr("data-wf-locale-id");
          (I && (g.localeId = I), i(p));
          var T = o(E, g.fields);
          return T
            ? r(T)
            : ((g.fileUploads = l(E)), c(p), d)
              ? void u
                  .ajax({
                    url: f,
                    type: "POST",
                    data: g,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (e) {
                    (e && 200 === e.code && (p.success = !0), s(p));
                  })
                  .fail(function () {
                    s(p);
                  })
              : void s(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var a = n(3949);
      let i = (e, t, n, a) => {
        let i = document.createElement("div");
        (t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              a();
            },
          }));
      };
      a.define(
        "forms",
        (e.exports = function (e, t) {
          let o,
            r = "TURNSTILE_LOADED";
          var l,
            c,
            d,
            s,
            u,
            f = {},
            p = e(document),
            E = window.location,
            g = window.XDomainRequest && !window.atob,
            y = ".w-form",
            I = /e(-)?mail/i,
            T = /^\S+@\S+$/,
            m = window.alert,
            b = a.env();
          let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            h = t.debounce(function () {
              console.warn(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.",
              );
            }, 100);
          function _(t, o) {
            var l = e(o),
              d = e.data(o, y);
            (d || (d = e.data(o, y, { form: l })), R(d));
            var f = l.closest("div.w-form");
            ((d.done = f.find("> .w-form-done")),
              (d.fail = f.find("> .w-form-fail")),
              (d.fileUploads = f.find(".w-file-upload")),
              d.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var a,
                      i = e(n.fileUploads[t]),
                      o = i.find("> .w-file-upload-default"),
                      r = i.find("> .w-file-upload-uploading"),
                      l = i.find("> .w-file-upload-success"),
                      c = i.find("> .w-file-upload-error"),
                      d = o.find(".w-file-upload-input"),
                      s = o.find(".w-file-upload-label"),
                      f = s.children(),
                      p = c.find(".w-file-upload-error-msg"),
                      E = l.find(".w-file-upload-file"),
                      g = l.find(".w-file-remove-link"),
                      y = E.find(".w-file-upload-file-name"),
                      I = p.attr("data-w-size-error"),
                      T = p.attr("data-w-type-error"),
                      m = p.attr("data-w-generic-error");
                    if (
                      (b ||
                        s.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), d.click());
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      g
                        .find(".w-icon-file-upload-remove")
                        .attr("aria-hidden", "true"),
                      b)
                    )
                      (d.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        }));
                    else {
                      (g.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        (d.removeAttr("data-value"),
                          d.val(""),
                          y.html(""),
                          o.toggle(!0),
                          l.toggle(!1),
                          s.focus());
                      }),
                        d.on("change", function (i) {
                          var l, d, s;
                          (a =
                            i.target && i.target.files && i.target.files[0]) &&
                            (o.toggle(!1),
                            c.toggle(!1),
                            r.toggle(!0),
                            r.focus(),
                            y.text(a.name),
                            A() || N(n),
                            (n.fileUploads[t].uploading = !0),
                            (l = a),
                            (d = h),
                            (s = new URLSearchParams({
                              name: l.name,
                              size: l.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${u}?${s}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                d(null, e);
                              })
                              .fail(function (e) {
                                d(e);
                              }));
                        }));
                      var O = s.outerHeight();
                      (d.height(O), d.width(1));
                    }
                  }
                  function v(e) {
                    var a = e.responseJSON && e.responseJSON.msg,
                      i = m;
                    ("string" == typeof a &&
                    0 === a.indexOf("InvalidFileTypeError")
                      ? (i = T)
                      : "string" == typeof a &&
                        0 === a.indexOf("MaxFileSizeError") &&
                        (i = I),
                      p.text(i),
                      d.removeAttr("data-value"),
                      d.val(""),
                      r.toggle(!1),
                      o.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      A() || R(n));
                  }
                  function h(t, n) {
                    if (t) return v(t);
                    var i = n.fileName,
                      o = n.postData,
                      r = n.fileId,
                      l = n.s3Url;
                    (d.attr("data-value", r),
                      (function (t, n, a, i, o) {
                        var r = new FormData();
                        for (var l in n) r.append(l, n[l]);
                        (r.append("file", a, i),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: r,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              o(null);
                            })
                            .fail(function (e) {
                              o(e);
                            }));
                      })(l, o, a, i, _));
                  }
                  function _(e) {
                    if (e) return v(e);
                    (r.toggle(!1),
                      l.css("display", "inline-block"),
                      l.focus(),
                      (n.fileUploads[t].uploading = !1),
                      A() || R(n));
                  }
                  function A() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, d);
              }),
              O &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  (e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading"));
                })(d),
                A(l, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : r,
                  function () {
                    i(
                      O,
                      o,
                      (e) => {
                        ((d.turnstileToken = e), R(d), A(l, !1));
                      },
                      () => {
                        (R(d), d.btn && d.btn.prop("disabled", !0), A(l, !1));
                      },
                    );
                  },
                )));
            var g =
              d.form.attr("aria-label") || d.form.attr("data-name") || "Form";
            (d.done.attr("aria-label") || d.form.attr("aria-label", g),
              d.done.attr("tabindex", "-1"),
              d.done.attr("role", "region"),
              d.done.attr("aria-label") ||
                d.done.attr("aria-label", g + " success"),
              d.fail.attr("tabindex", "-1"),
              d.fail.attr("role", "region"),
              d.fail.attr("aria-label") ||
                d.fail.attr("aria-label", g + " failure"));
            var I = (d.action = l.attr("action"));
            if (
              ((d.handler = null),
              (d.redirect = l.attr("data-redirect")),
              v.test(I))
            ) {
              d.handler = w;
              return;
            }
            if (!I) {
              if (c) {
                d.handler = (0, n(6524).default)(
                  R,
                  E,
                  a,
                  M,
                  U,
                  L,
                  m,
                  S,
                  N,
                  c,
                  P,
                  e,
                  s,
                );
                return;
              }
              h();
            }
          }
          function R(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            ((e.wait = e.btn.attr("data-wait") || null), (e.success = !1));
            let n = !!(O && !e.turnstileToken);
            (t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label));
          }
          function N(e) {
            var t = e.btn,
              n = e.wait;
            (t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n)));
          }
          function A(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function L(t, n) {
            var a = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])',
                )
                .each(function (i, o) {
                  var r,
                    l,
                    c,
                    d,
                    s,
                    u = e(o),
                    f = u.attr("type"),
                    p =
                      u.attr("data-name") ||
                      u.attr("name") ||
                      "Field " + (i + 1);
                  p = encodeURIComponent(p);
                  var E = u.val();
                  if ("checkbox" === f) E = u.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    E =
                      t
                        .find('input[name="' + u.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  ("string" == typeof E && (E = e.trim(E)),
                    (n[p] = E),
                    (a =
                      a ||
                      ((r = u),
                      (l = f),
                      (c = p),
                      (d = E),
                      (s = null),
                      "password" === l
                        ? (s = "Passwords cannot be submitted.")
                        : r.attr("required")
                          ? d
                            ? I.test(r.attr("type")) &&
                              !T.test(d) &&
                              (s =
                                "Please enter a valid email address for: " + c)
                            : (s = "Please fill out the required field: " + c)
                          : "g-recaptcha-response" !== c ||
                            d ||
                            (s = "Please confirm you're not a robot."),
                      s)));
                }),
              a
            );
          }
          function S(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, a) {
                var i = e(a),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  r = i.attr("data-value");
                ("string" == typeof r && (r = e.trim(r)), (n[o] = r));
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                (O &&
                  (((o = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(o),
                  (o.onload = () => {
                    p.trigger(r);
                  })),
                  (s =
                    "https://webflow.com/api/v1/form/" +
                    (c = e("html").attr("data-wf-site"))),
                  g &&
                    s.indexOf("https://webflow.com") >= 0 &&
                    (s = s.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com",
                    )),
                  (u = `${s}/signFile`),
                  (l = e(y + " form")).length && l.each(_),
                  (!b || a.env("preview")) &&
                    !d &&
                    (function () {
                      ((d = !0),
                        p.on("submit", y + " form", function (t) {
                          var n = e.data(this, y);
                          n.handler && ((n.evt = t), n.handler(n));
                        }));
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        a = "w--redirected-checked",
                        i = "w--redirected-focus",
                        o = "w--redirected-focus-visible",
                        r = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      (p.on(
                        "change",
                        y + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(a);
                        },
                      ),
                        p.on("change", y + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(n).removeClass(a),
                          );
                          let o = e(i.target);
                          o.hasClass("w-radio-input") ||
                            o.siblings(n).addClass(a);
                        }),
                        r.forEach(([t, n]) => {
                          (p.on(
                            "focus",
                            y + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              (e(t.target).siblings(n).addClass(i),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]",
                                  )
                                  .siblings(n)
                                  .addClass(o));
                            },
                          ),
                            p.on(
                              "blur",
                              y + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${i} ${o}`);
                              },
                            ));
                        }));
                    })());
              };
          let C = { _mkto_trk: "marketo" };
          function M() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                a = n[0];
              if (a in C) {
                let t = C[a],
                  i = n.slice(1).join("=");
                e[t] = i;
              }
              return e;
            }, {});
          }
          function w(n) {
            R(n);
            var a,
              i = n.form,
              o = {};
            if (/^https/.test(E.href) && !/^https/.test(n.action))
              return void i.attr("method", "post");
            U(n);
            var r = L(i, o);
            if (r) return m(r);
            (N(n),
              t.each(o, function (e, t) {
                (I.test(t) && (o.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (a = e),
                  /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e));
              }),
              a &&
                !o.FNAME &&
                ((o.FNAME = (a = a.split(" "))[0]),
                (o.LNAME = o.LNAME || a[1])));
            var l = n.action.replace("/post?", "/post-json?") + "&c=?",
              c = l.indexOf("u=") + 2;
            c = l.substring(c, l.indexOf("&", c));
            var d = l.indexOf("id=") + 3;
            ((o["b_" + c + "_" + (d = l.substring(d, l.indexOf("&", d)))] = ""),
              e
                .ajax({ url: l, data: o, dataType: "jsonp" })
                .done(function (e) {
                  ((n.success =
                    "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    P(n));
                })
                .fail(function () {
                  P(n);
                }));
          }
          function P(e) {
            var t = e.form,
              n = e.redirect,
              i = e.success;
            if (i && n) return void a.location(n);
            (e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              R(e));
          }
          function U(e) {
            (e.evt && e.evt.preventDefault(), (e.evt = null));
          }
          return f;
        }),
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            r,
            l,
            c,
            d = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            E = a.env(),
            g = ".w-nav",
            y = "w--open",
            I = "w--nav-dropdown-open",
            T = "w--nav-dropdown-toggle-open",
            m = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            O = i.triggers,
            v = e();
          function h() {
            a.resize.off(_);
          }
          function _() {
            r.each(U);
          }
          function R(n, a) {
            var i,
              r,
              d,
              s,
              p,
              E = e(a),
              y = e.data(a, g);
            (y ||
              (y = e.data(a, g, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (y.menu = E.find(".w-nav-menu")),
              (y.links = y.menu.find(".w-nav-link")),
              (y.dropdowns = y.menu.find(".w-dropdown")),
              (y.dropdownToggle = y.menu.find(".w-dropdown-toggle")),
              (y.dropdownList = y.menu.find(".w-dropdown-list")),
              (y.button = E.find(".w-nav-button")),
              (y.container = E.find(".w-container")),
              (y.overlayContainerId = "w-nav-overlay-" + n),
              (y.outside =
                ((i = y).outside && f.off("click" + g, i.outside),
                function (t) {
                  var n = e(t.target);
                  (c && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    P(i, n);
                })));
            var I = E.find(".w-nav-brand");
            (I &&
              "/" === I.attr("href") &&
              null == I.attr("aria-label") &&
              I.attr("aria-label", "home"),
              y.button.attr("style", "-webkit-user-select: text;"),
              null == y.button.attr("aria-label") &&
                y.button.attr("aria-label", "menu"),
              y.button.attr("role", "button"),
              y.button.attr("tabindex", "0"),
              y.button.attr("aria-controls", y.overlayContainerId),
              y.button.attr("aria-haspopup", "menu"),
              y.button.attr("aria-expanded", "false"),
              y.el.off(g),
              y.button.off(g),
              y.menu.off(g),
              L(y),
              l
                ? (A(y),
                  y.el.on(
                    "setting" + g,
                    ((r = y),
                    function (e, n) {
                      n = n || {};
                      var a = u.width();
                      (L(r),
                        !0 === n.open && k(r, !0),
                        !1 === n.open && G(r, !0),
                        r.open &&
                          t.defer(function () {
                            a !== u.width() && C(r);
                          }));
                    }),
                  ))
                : ((d = y).overlay ||
                    ((d.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />',
                    ).appendTo(d.el)),
                    d.overlay.attr("id", d.overlayContainerId),
                    (d.parent = d.menu.parent()),
                    G(d, !0)),
                  y.button.on("click" + g, M(y)),
                  y.menu.on("click" + g, "a", w(y)),
                  y.button.on(
                    "keydown" + g,
                    ((s = y),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            M(s)(),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return (
                            G(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!s.open)
                            return (e.preventDefault(), e.stopPropagation());
                          return (
                            e.keyCode === o.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            S(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    }),
                  ),
                  y.el.on(
                    "keydown" + g,
                    ((p = y),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement,
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              G(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1,
                              )),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    }),
                  )),
              U(n, a));
          }
          function N(t, n) {
            var a = e.data(n, g);
            a && (A(a), e.removeData(n, g));
          }
          function A(e) {
            e.overlay && (G(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function L(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            ((n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease"));
            var o = e.el.attr("data-duration");
            ((n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n));
          }
          function S(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              (t.focus(), w(t));
            }
          }
          function C(e) {
            e.open && (G(e, !0), k(e, !0));
          }
          function M(e) {
            return p(function () {
              e.open ? G(e) : k(e);
            });
          }
          function w(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && G(t);
            };
          }
          ((d.ready =
            d.design =
            d.preview =
              function () {
                ((l = E && a.env("design")),
                  (c = a.env("editor")),
                  (n = e(document.body)),
                  (r = f.find(g)).length && (r.each(R), h(), a.resize.on(_)));
              }),
            (d.destroy = function () {
              ((v = e()), h(), r && r.length && r.each(N));
            }));
          var P = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || G(e);
            }
          });
          function U(t, n) {
            var a = e.data(n, g),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || l || G(a, !0), a.container.length)) {
              var o,
                r =
                  ("none" === (o = a.container.css(F)) && (o = ""),
                  function (t, n) {
                    ((n = e(n)).css(F, ""), "none" === n.css(F) && n.css(F, o));
                  });
              (a.links.each(r), a.dropdowns.each(r));
            }
            a.open && D(a);
          }
          var F = "max-width";
          function x(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function V(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function k(e, t) {
            if (!e.open) {
              ((e.open = !0),
                e.menu.each(x),
                e.links.addClass(b),
                e.dropdowns.addClass(I),
                e.dropdownToggle.addClass(T),
                e.dropdownList.addClass(m),
                e.button.addClass(y));
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = D(e),
                o = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                c = e.el.height(),
                d = e.el[0];
              if (
                (U(0, d),
                O.intro(0, d),
                a.redraw.up(),
                l || f.on("click" + g, e.outside),
                t)
              )
                return void p();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                (s(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * r, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(r));
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(c + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function D(e) {
            var t = e.config,
              a = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function G(e, t) {
            if (e.open) {
              ((e.open = !1), e.button.removeClass(y));
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + g, e.outside),
                t)
              ) {
                (s(e.menu).stop(), l());
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                r = e.el.height();
              if (n.animOver)
                return void s(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(l);
              s(e.menu)
                .add(a)
                .start({ y: -(r + i) })
                .then(l);
            }
            function l() {
              (e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(V),
                e.links.removeClass(b),
                e.dropdowns.removeClass(I),
                e.dropdownToggle.removeClass(T),
                e.dropdownList.removeClass(m),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false"));
            }
          }
          return d;
        }),
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return z;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return F;
        },
        elementStateChanged: function () {
          return j;
        },
        eventListenerAdded: function () {
          return x;
        },
        eventStateChanged: function () {
          return k;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return H;
        },
        instanceStarted: function () {
          return B;
        },
        mediaQueriesDefined: function () {
          return Q;
        },
        parameterChanged: function () {
          return G;
        },
        playbackRequested: function () {
          return P;
        },
        previewRequested: function () {
          return w;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return S;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return M;
        },
        stopRequested: function () {
          return U;
        },
        testFrameRendered: function () {
          return V;
        },
        viewportWidthChanged: function () {
          return W;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: d,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: y,
          IX2_EVENT_STATE_CHANGED: I,
          IX2_ANIMATION_FRAME_CHANGED: T,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: h,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: N,
        } = o.IX2EngineActionTypes,
        { reifyState: A } = r.IX2VanillaUtils,
        L = (e) => ({ type: l, payload: { ...A(e) } }),
        S = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: d }),
        M = () => ({ type: s }),
        w = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        P = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: l,
          verbose: c,
          rawData: d,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: l,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: c,
            rawData: d,
          },
        }),
        U = (e) => ({ type: p, payload: { actionListId: e } }),
        F = () => ({ type: E }),
        x = (e, t) => ({ type: g, payload: { target: e, listenerParams: t } }),
        V = (e = 1) => ({ type: y, payload: { step: e } }),
        k = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
        D = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
        G = (e, t) => ({ type: m, payload: { key: e, value: t } }),
        X = (e) => ({ type: b, payload: { ...e } }),
        B = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        H = (e) => ({ type: v, payload: { instanceId: e } }),
        j = (e, t, n, a) => ({
          type: h,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        z = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        W = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        Q = () => ({ type: N });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return d;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        l = (a = n(7243)) && a.__esModule ? a : { default: a },
        c = n(1970),
        d = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, r.createStore)(l.default);
      function f(e) {
        e() && (0, c.observeRequests)(u);
      }
      function p(e) {
        (E(), (0, c.startEngine)({ store: u, rawData: e, allowEvents: !0 }));
      }
      function E() {
        (0, c.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return m;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return h;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return y;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return I;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return T;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: l } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: d,
          PLAIN_OBJECT: s,
          WF_PAGE: u,
        } = r.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[l](e);
      }
      function y({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function I(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function T(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function m(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            (-1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling));
        }
        return t;
      }
      let h = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[l] && n[l](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? d
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = T(n(9777)),
        r = T(n(4738)),
        l = T(n(4659)),
        c = T(n(3452)),
        d = T(n(6633)),
        s = T(n(3729)),
        u = T(n(2397)),
        f = T(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        y = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = m(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(5012)),
        I = T(n(8955));
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (m = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: h,
          HTML_ELEMENT: _,
          RENDER_GENERAL: R,
          W_MOD_IX: N,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: A,
          getElementId: L,
          getDestinationValues: S,
          observeStore: C,
          getInstanceId: M,
          renderHTMLElement: w,
          clearAllStyles: P,
          getMaxDurationItemIndex: U,
          getComputedStyle: F,
          getInstanceOrigin: x,
          reduceListToGroup: V,
          shouldNamespaceEventParameter: k,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: G,
          cleanupHTMLElement: X,
          clearObjectCache: B,
          stringifyTarget: H,
          mediaQueriesEqual: j,
          shallowEqual: z,
        } = E.IX2VanillaUtils,
        {
          isPluginType: W,
          createPluginInstance: Q,
          getPluginDuration: $,
        } = E.IX2VanillaPlugins,
        Y = navigator.userAgent,
        q = Y.match(/iPad/i) || Y.match(/iPhone/);
      function K(e) {
        (C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en }));
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          (ea({ store: n, rawData: e, allowEvents: !0 }), J());
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: l,
            testManual: c,
            verbose: d = !0,
          } = e,
          { rawData: s } = e;
        if (a && i && s && l) {
          let e = s.actionLists[a];
          e && (s = V({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (ea({ store: t, rawData: s, allowEvents: r, testManual: c }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          (ep({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o }));
          let e = eE({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: l,
            verbose: d,
          });
          d &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !l,
              }),
            );
        }
      }
      function et({ actionListId: e }, t) {
        (e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t));
      }
      function en(e, t) {
        (ei(t), P({ store: t, elementApi: y }));
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(h),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (el(e),
                (0, u.default)(n, (t, n) => {
                  let a = I.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = y.getQuerySelector(o);
                        t[r] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: d } = c,
                      s = ec(n, es);
                    if (!(0, l.default)(s)) return;
                    (0, u.default)(s, (e, a) => {
                      let i = n[a],
                        {
                          action: l,
                          id: s,
                          mediaQueries: u = c.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = l.config;
                      (j(u, c.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                d,
                                `${f}.continuousParameterGroups`,
                                [],
                              ),
                              l = (0, o.default)(i, ({ id: e }) => e === a),
                              c = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            l &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: d,
                                }) {
                                  let { ixData: s, ixSession: u } =
                                      e.getState(),
                                    { events: f } = s,
                                    E = f[a],
                                    { eventTypeId: g } = E,
                                    I = {},
                                    T = {},
                                    m = [],
                                    { continuousActionGroups: b } = l,
                                    { id: O } = l;
                                  k(g, i) && (O = D(t, O));
                                  let _ =
                                    u.hasBoundaryNodes && n
                                      ? y.getClosestElement(n, h)
                                      : null;
                                  (b.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? _ : null,
                                        r = H(i) + v + a;
                                      if (
                                        ((T[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0),
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(T[r], t, e)),
                                        !I[r])
                                      ) {
                                        I[r] = !0;
                                        let { config: t } = e;
                                        A({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: y,
                                        }).forEach((e) => {
                                          m.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    m.forEach(({ element: t, key: n }) => {
                                      let i = T[n],
                                        l = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: s } = l,
                                        u = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : W(s)
                                        )
                                          ? Q(s)?.(t, l)
                                          : null,
                                        f = S(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: y,
                                          },
                                          u,
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: c,
                                        restingValue: d,
                                        pluginInstance: u,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: s + v + a,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: u,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(l.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: s }));
                    });
                    let E = (e) => {
                        let { ixSession: a } = t.getState();
                        ed(s, (o, r, l) => {
                          let d = n[r],
                            s = a.eventState[l],
                            { action: u, mediaQueries: f = c.mediaQueryKeys } =
                              d;
                          if (!G(f, a.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: d,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              s,
                            );
                            z(a, s) ||
                              t.dispatch((0, g.eventStateChanged)(l, a));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(d.config)
                                ? d.config
                                : [d.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      I = (0, f.default)(E, 12),
                      T = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? I : E;
                            (e.addEventListener(n, i),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, i])));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(T)
                      : "string" == typeof a && T(e);
                  })({ logic: a, store: e, events: t });
                }));
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  (er.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (ei(e),
                    P({ store: e, elementApi: y }),
                    ea({ store: e, allowEvents: !0 }),
                    J());
                },
              }));
          (e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(a, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a));
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(eo), B(), e.dispatch((0, g.sessionStopped)()));
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({ width: a, mediaQueries: t }),
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, s.default)(e, t), d.default),
        ed = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        es = (e) =>
          A({
            config: { target: e.target, targets: e.targets },
            elementApi: y,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: l } = a,
          c = l[n],
          d = o[t];
        if (d && d.useFirstGroupAsInitialState) {
          let o = (0, r.default)(d, "actionItemGroups[0].actionItems", []);
          if (
            !G(
              (0, r.default)(c, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey,
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = A({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : i,
                event: c,
                elementApi: y,
              }),
              l = W(o);
            r.forEach((i) => {
              let r = l ? Q(o)?.(i, a) : null;
              eg({
                destination: S({ element: i, actionItem: a, elementApi: y }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            (ey(t, e),
              a &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: l } = e.getState(),
          c = l.hasBoundaryNodes && n ? y.getClosestElement(n, h) : null;
        (0, u.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            l = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && l) {
            if (c && o && !y.elementContains(c, n.element)) return;
            (ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: l,
        verbose: c,
      }) {
        let { ixData: d, ixSession: s } = e.getState(),
          { events: u } = d,
          f = u[t] || {},
          { mediaQueries: p = d.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          r.default)(d, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        (o >= E.length && (0, r.default)(f, "config.loop") && (o = 0),
          0 === o && g && o++);
        let I =
            (0 === o || (1 === o && g)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          T = (0, r.default)(E, [o, "actionItems"], []);
        if (!T.length || !G(p, s.mediaQueryKey)) return !1;
        let m = s.hasBoundaryNodes && n ? y.getClosestElement(n, h) : null,
          b = U(T),
          v = !1;
        return (
          T.forEach((r, d) => {
            let { config: s, actionTypeId: u } = r,
              p = W(u),
              { target: E } = s;
            E &&
              A({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: y,
              }).forEach((s, f) => {
                let E = p ? Q(u)?.(s, r) : null,
                  g = p ? $(u)(s, r) : null;
                v = !0;
                let T = F({ element: s, actionItem: r }),
                  m = S({ element: s, actionItem: r, elementApi: y }, E);
                eg({
                  store: e,
                  element: s,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: b === d && 0 === f,
                  computedStyle: T,
                  destination: m,
                  immediate: l,
                  verbose: c,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: I,
                });
              });
          }),
          v
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: l,
            pluginInstance: c,
            continuous: d,
            restingValue: s,
            eventId: u,
          } = i,
          f = M(),
          { ixElements: E, ixSession: I, ixData: T } = n.getState(),
          m = L(E, o),
          { refState: b } = E[m] || {},
          O = y.getRefType(o),
          v = I.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
        if (v && d)
          switch (T.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let h = x(o, b, a, r, y, c);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: h,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            }),
          ),
          eI(document.body, "ix2-animation-started", f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: a } = e.getState();
            eT(a[t], e);
          })(n, f);
        (C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eT }),
          d || n.dispatch((0, g.instanceStarted)(f, I.tick)));
      }
      function ey(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        (r === _ && X(o, a, y), t.dispatch((0, g.instanceRemoved)(e.id)));
      }
      function eI(e, t, n) {
        let a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a));
      }
      function eT(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: l,
            renderType: c,
            current: d,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: I,
            styleProp: T,
            verbose: m,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: h } = O,
          { mediaQueries: N = O.mediaQueryKeys } = h && h[u] ? h[u] : {};
        if (G(N, v.mediaQueryKey) && (a || n || i)) {
          if (d || (c === R && i)) {
            t.dispatch((0, g.elementStateChanged)(o, l, d, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              s = i && i[l];
            (a === _ || W(l)) && w(n, i, s, u, r, T, y, c, b);
          }
          if (i) {
            if (I) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: m,
              });
              m &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  }),
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        }));
      let i = u(n(5801)),
        o = u(n(4738)),
        r = u(n(3789)),
        l = n(7087),
        c = n(1970),
        d = n(3946),
        s = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: y,
          MOUSE_OUT: I,
          DROPDOWN_CLOSE: T,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: h,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: A,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: S,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: M,
          PAGE_FINISH: w,
          ECOMMERCE_CART_CLOSE: P,
          ECOMMERCE_CART_OPEN: U,
          PAGE_START: F,
          PAGE_SCROLL: x,
        } = l.EventTypeConsts,
        V = "COMPONENT_ACTIVE",
        k = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = l.IX2EngineConstants,
        { getNamespacedParameterId: G } = s.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        B = X(({ element: e, nativeEvent: t }) => e === t.target),
        H = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        j = (0, i.default)([B, H]),
        z = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        W = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!z(e, a);
        },
        Q = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: l } = t,
            { actionListId: d, autoStopEventId: s } = r.config,
            u = z(e, s);
          return (
            u &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + D + a.split(D)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: a,
              actionListId: d,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: a,
              actionListId: d,
            }),
            i
          );
        },
        $ = (e, t) => (n, a) => (!0 === e(n, a) ? t(n, a) : a),
        Y = { handler: $(j, Q) },
        q = { ...Y, types: [V, k].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: F, PAGE_FINISH: w },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [V, k].indexOf(a) ? a === V : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: l } = et(),
              {
                event: { config: c, eventTypeId: d },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = c,
              f = r - l,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === u ? s : (l * (s || 0)) / 100) / f,
              g = 0;
            n &&
              ((a = p > n.percentTop),
              (g = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let y = d === A ? p >= g + E : p <= g - E,
              I = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: g,
                scrollingDown: a,
              };
            return (n && y && (i || I.inBounds !== n.inBounds) && e(t, I)) || I;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ed =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        es = (e = !0) => ({
          ...q,
          handler: $(
            e ? j : B,
            eo((e, t) => (t.isActive ? Y.handler(e, t) : t)),
          ),
        }),
        eu = (e = !0) => ({
          ...q,
          handler: $(
            e ? j : B,
            eo((e, t) => (t.isActive ? t : Y.handler(e, t))),
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === L) === n
                  ? (Q(e), { ...t, triggered: !0 })
                  : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: es(),
          [O]: eu(),
          [m]: es(),
          [T]: eu(),
          [R]: es(!1),
          [_]: eu(!1),
          [v]: es(),
          [h]: eu(),
          [U]: { types: "ecommerce-cart-open", handler: $(j, Q) },
          [P]: { types: "ecommerce-cart-close", handler: $(j, Q) },
          [f]: {
            types: "click",
            handler: $(
              j,
              ed((e, { clickCount: t }) => {
                W(e) ? 1 === t && Q(e) : Q(e);
              }),
            ),
          },
          [p]: {
            types: "click",
            handler: $(
              j,
              ed((e, { clickCount: t }) => {
                2 === t && Q(e);
              }),
            ),
          },
          [E]: { ...Y, types: "mousedown" },
          [g]: { ...Y, types: "mouseup" },
          [y]: {
            types: Z,
            handler: $(
              j,
              er((e, t) => {
                t.elementHovered && Q(e);
              }),
            ),
          },
          [I]: {
            types: Z,
            handler: $(
              j,
              er((e, t) => {
                t.elementHovered || Q(e);
              }),
            ),
          },
          [N]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: c,
                  continuousParameterGroupId: s,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: g = o.pageX,
                  pageY: y = o.pageY,
                } = a,
                I = "X_AXIS" === c,
                T = "mouseout" === a.type,
                m = f / 100,
                b = s,
                O = !1;
              switch (r) {
                case l.EventBasedOn.VIEWPORT:
                  m = I
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  m = I ? Math.min(e + g, n) / n : Math.min(t + y, a) / a;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  b = G(i, s);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== j({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: l, height: c } = n;
                  if (!e && !ec({ left: p, top: E }, n)) break;
                  ((O = !0), (m = I ? (p - o) / l : (E - r) / c));
                }
              }
              return (
                T && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (r !== l.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((m = u ? 1 - m : m),
                  e.dispatch((0, d.parameterChanged)(b, m))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: y,
                }
              );
            },
          },
          [x]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                l = i / (o - r);
              ((l = a ? 1 - l : l), e.dispatch((0, d.parameterChanged)(n, l)));
            },
          },
          [M]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: c,
                  scrollHeight: s,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: y,
                  addEndOffset: I,
                  addStartOffset: T,
                  addOffsetValue: m = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / c : r / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, d.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = G(a, E),
                  o = e.getBoundingClientRect(),
                  r = (T ? m : 0) / 100,
                  l = (I ? b : 0) / 100;
                ((r = g ? r : 1 - r), (l = y ? l : 1 - l));
                let c = o.top + Math.min(o.height * r, u),
                  f = Math.min(u + (o.top + o.height * l - c), s),
                  p = Math.min(Math.max(0, u - c), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, d.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [L]: ef,
          [S]: ef,
          [A]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && Q(e);
            }),
          },
          [C]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || Q(e);
            }),
          },
          [w]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(B, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return (n.finished && !(t && t.finshed) && Q(e), n);
            }),
          },
          [F]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(B, (e, t) => (t || Q(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        }));
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: d,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: g } = a.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: I,
          getStyleProp: T,
        } = i.IX2VanillaUtils,
        m = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: l,
              parameterId: c,
              actionGroups: d,
              destinationKeys: s,
              smoothing: u,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: I,
              skipMotion: T,
              skipToValue: m,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = b[c];
          null == v && ((O = 1), (v = E));
          let h = f((Math.max(v, 0) || 0) - l),
            _ = T ? m : f(l + h * O),
            R = 100 * _;
          if (_ === l && e.current) return e;
          for (let e = 0, { length: t } = d; e < t; e++) {
            let { keyframe: t, actionItems: o } = d[e];
            if ((0 === e && (n = o[0]), R >= t)) {
              n = o[0];
              let l = d[e + 1],
                c = l && R !== t;
              ((a = c ? l.actionItems[0] : null),
                c && ((i = t / 100), (r = (l.keyframe - t) / 100)));
            }
          }
          let N = {};
          if (n && !a)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              N[t] = y(g, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (_ - i) / r,
              t = p(n.config.easing, e, I);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = y(g, i, n.config),
                r = (y(g, i, a.config) - o) * t + o;
              N[i] = r;
            }
          }
          return (0, o.merge)(e, { position: _, current: N });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: l,
              verbose: c,
              actionItem: d,
              destination: s,
              destinationKeys: u,
              pluginDuration: E,
              instanceDelay: y,
              customEasingFn: I,
              skipMotion: T,
            } = e,
            m = d.config.easing,
            { duration: b, delay: O } = d.config;
          (null != E && (b = E),
            (O = null != y ? y : O),
            l === g ? (b = 0) : (r || T) && (b = O = 0));
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (c) {
              let t = b + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              r = p(m, n, I),
              l = {},
              d = null;
            return (
              u.length &&
                (d = u.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return ((e[t] = o * r + i), e);
                }, {})),
              (l.current = d),
              (l.position = n),
              1 === n && ((l.active = !1), (l.complete = !0)),
              (0, o.merge)(e, l)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: d,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: y,
                  continuous: m,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: h,
                  pluginInstance: _,
                  pluginDuration: R,
                  instanceDelay: N,
                  skipMotion: A,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: S } = i,
                C = I(S),
                M = T(C, S),
                w = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e],
                ),
                { easing: P } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: w,
                immediate: g,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: S,
                eventId: r,
                eventTarget: l,
                eventStateKey: c,
                actionListId: d,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: M,
                continuous: m,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: h,
                pluginInstance: _,
                pluginDuration: R,
                instanceDelay: N,
                skipMotion: A,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(P) && 4 === P.length ? E(P) : void 0,
              });
            }
            case d: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  l = e[i],
                  c = l.continuous ? m : b;
                n = (0, o.set)(n, i, c(l, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return ((e[n] = a), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        l = n(9468),
        c = n(7718),
        d = n(1540),
        { ixElements: s } = l.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: s,
          ixInstances: c.ixInstances,
          ixParameters: d.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: c,
        } = a.IX2EngineActionTypes,
        d = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [l]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        u = (e = d, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: d,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = a.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = g, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case c:
              return g;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case d: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return d;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        l = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        d = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        d = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = l();
          if (!a) return;
          let r = a.getInstance(e),
            c = a.rive.StateMachineInputType,
            { name: d, inputs: s = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(d);
              if (null != n) {
                if ((e.isPlaying || e.play(d, !1), i in s || o in s)) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    a = s[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in s) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case c.Boolean:
                        null != s[e] && (a.value = !!s[e]);
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case c.Trigger:
                        s[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        c = () => null,
        d = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = d[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = d[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              (null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ));
            };
          i ? l(i.spline) : a.setLoadHandler(e, l);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        l = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(i) }
              : null != n.red && null != n.green && null != n.blue
                ? (0, o.normalizeColor)(i)
                : void 0;
        },
        d = (e) => e.value,
        s = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(u).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let a = n(7087),
        i = d(n(7377)),
        o = d(n(2866)),
        r = d(n(2570)),
        l = d(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return y;
        },
        IX2_INSTANCE_REMOVED: function () {
          return T;
        },
        IX2_INSTANCE_STARTED: function () {
          return I;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return d;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return h;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        d = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        y = "IX2_INSTANCE_ADDED",
        I = "IX2_INSTANCE_STARTED",
        T = "IX2_INSTANCE_REMOVED",
        m = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        h = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return j;
        },
        BACKGROUND: function () {
          return k;
        },
        BACKGROUND_COLOR: function () {
          return V;
        },
        BAR_DELIMITER: function () {
          return Q;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return $;
        },
        COLON_DELIMITER: function () {
          return W;
        },
        COLOR: function () {
          return G;
        },
        COMMA_DELIMITER: function () {
          return z;
        },
        CONFIG_UNIT: function () {
          return y;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return d;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return P;
        },
        FLEX: function () {
          return B;
        },
        FONT_VARIATION_SETTINGS: function () {
          return U;
        },
        HEIGHT: function () {
          return x;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return Y;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return w;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return N;
        },
        ROTATE_Y: function () {
          return A;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return h;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return S;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return M;
        },
        TRANSFORM: function () {
          return I;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return T;
        },
        TRANSLATE_Y: function () {
          return m;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return F;
        },
        WILL_CHANGE: function () {
          return H;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        r = "w-mod-js",
        l = "w-mod-ix",
        c = ".w-dyn-item",
        d = "xValue",
        s = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        y = "unit",
        I = "transform",
        T = "translateX",
        m = "translateY",
        b = "translateZ",
        O = "translate3d",
        v = "scaleX",
        h = "scaleY",
        _ = "scaleZ",
        R = "scale3d",
        N = "rotateX",
        A = "rotateY",
        L = "rotateZ",
        S = "skew",
        C = "skewX",
        M = "skewY",
        w = "opacity",
        P = "filter",
        U = "font-variation-settings",
        F = "width",
        x = "height",
        V = "backgroundColor",
        k = "background",
        D = "borderColor",
        G = "color",
        X = "display",
        B = "flex",
        H = "willChange",
        j = "AUTO",
        z = ",",
        W = ":",
        Q = "|",
        $ = "CHILDREN",
        Y = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = d(n(1833), t),
        r = d(n(262), t);
      (d(n(8704), t), d(n(3213), t));
      let l = u(n(8023)),
        c = u(n(2686));
      function d(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: l,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: d,
        } = n(262).ActionTypeConsts,
        s = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [l]: !0, [c]: !0, [d]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return d;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        d = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3])));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)));
        } else if (l.startsWith("hsla")) {
          let e,
            n,
            r,
            c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            d = parseFloat(c[0]),
            s = parseFloat(c[1].replace("%", "")) / 100,
            u = parseFloat(c[2].replace("%", "")) / 100;
          o = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((d / 60) % 2) - 1)),
            E = u - f / 2;
          (d >= 0 && d < 60
            ? ((e = f), (n = p), (r = 0))
            : d >= 60 && d < 120
              ? ((e = p), (n = f), (r = 0))
              : d >= 120 && d < 180
                ? ((e = 0), (n = f), (r = p))
                : d >= 180 && d < 240
                  ? ((e = 0), (n = p), (r = f))
                  : d >= 240 && d < 300
                    ? ((e = p), (n = 0), (r = f))
                    : ((e = f), (n = 0), (r = p)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((r + E) * 255)));
        } else if (l.startsWith("hsl")) {
          let e,
            n,
            o,
            r = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(r[0]),
            d = parseFloat(r[1].replace("%", "")) / 100,
            s = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * d,
            f = u * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = s - u / 2;
          (c >= 0 && c < 60
            ? ((e = u), (n = f), (o = 0))
            : c >= 60 && c < 120
              ? ((e = f), (n = u), (o = 0))
              : c >= 120 && c < 180
                ? ((e = 0), (n = u), (o = f))
                : c >= 180 && c < 240
                  ? ((e = 0), (n = f), (o = u))
                  : c >= 240 && c < 300
                    ? ((e = f), (n = 0), (o = u))
                    : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return d;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        r = f(n(8686)),
        l = f(n(3767)),
        c = f(n(5861)),
        d = f(n(1799)),
        s = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return d;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        l = "undefined" != typeof window,
        c = (e, t) => (l ? e() : t),
        d = c(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        s = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return d;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(8686)),
        l = (a = n(1361)) && a.__esModule ? a : { default: a };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, l.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? d(t > 0 ? n(t) : t)
              : d(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return B;
          },
          bouncePast: function () {
            return H;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return d;
          },
          inBack: function () {
            return P;
          },
          inCirc: function () {
            return S;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return x;
          },
          inExpo: function () {
            return N;
          },
          inOutBack: function () {
            return F;
          },
          inOutCirc: function () {
            return M;
          },
          inOutCubic: function () {
            return y;
          },
          inOutElastic: function () {
            return k;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return m;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return I;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return h;
          },
          outBack: function () {
            return U;
          },
          outBounce: function () {
            return w;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return V;
          },
          outExpo: function () {
            return A;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return T;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return G;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        l = (0, r.default)(0.25, 0.1, 0.25, 1),
        c = (0, r.default)(0.42, 0, 1, 1),
        d = (0, r.default)(0, 0, 0.58, 1),
        s = (0, r.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function I(e) {
        return Math.pow(e, 4);
      }
      function T(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function h(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function N(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function A(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function S(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function M(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function w(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function P(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function U(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function F(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                a < 1
                  ? ((a = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                e < 1)
              ? -0.5 *
                (a *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : a *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function B(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function H(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function l(e) {
        return r.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        d = c("getPluginConfig"),
        s = c("getPluginOrigin"),
        u = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        E = c("renderPlugin"),
        g = c("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return ez;
        },
        clearAllStyles: function () {
          return eB;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return eY;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eS;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return e$;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return eM;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return ew;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = g(n(4075)),
        r = g(n(1455)),
        l = g(n(5720)),
        c = n(1185),
        d = n(7087),
        s = g(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: y,
          TRANSFORM: I,
          TRANSLATE_3D: T,
          SCALE_3D: m,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: h,
          PRESERVE_3D: _,
          FLEX: R,
          OPACITY: N,
          FILTER: A,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: S,
          HEIGHT: C,
          BACKGROUND_COLOR: M,
          BORDER_COLOR: w,
          COLOR: P,
          CHILDREN: U,
          IMMEDIATE_CHILDREN: F,
          SIBLINGS: x,
          PARENT: V,
          DISPLAY: k,
          WILL_CHANGE: D,
          AUTO: G,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: B,
          BAR_DELIMITER: H,
          RENDER_TRANSFORM: j,
          RENDER_GENERAL: z,
          RENDER_STYLE: W,
          RENDER_PLUGIN: Q,
        } = d.IX2EngineConstants,
        {
          TRANSFORM_MOVE: $,
          TRANSFORM_SCALE: Y,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = d.ActionTypeConsts,
        el = (e) => e.trim(),
        ec = Object.freeze({ [en]: M, [ea]: w, [ei]: P }),
        ed = Object.freeze({
          [E.TRANSFORM_PREFIXED]: I,
          [M]: y,
          [N]: N,
          [A]: A,
          [S]: S,
          [C]: C,
          [L]: L,
        }),
        es = new Map();
      function eu() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eE++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eI = (e, t) => e === t;
      function eT({ store: e, select: t, onChange: n, comparator: a = eI }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, l) || n((l = o), e);
          }),
          l = t(i());
        return r;
      }
      function em(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, l;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, o) =>
              e.concat(
                eb({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                }),
              ),
            [],
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: y,
            elementContains: I,
            isSiblingNode: T,
          } = i,
          { target: m } = e;
        if (!m) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: h,
          appliesTo: _,
          useEventTarget: R,
        } = em(m);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (_ === d.EventAppliesTo.PAGE) {
          let e = s(b);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          A = !!(N.id || N.selector),
          L = t && u(em(t.target));
        if (
          (A
            ? ((o = N.limitAffectedElements), (r = L), (l = u(N)))
            : (r = l = u({ id: b, selector: v, selectorGuids: h })),
          t && R)
        ) {
          let e = n && (l || !0 === R) ? [n] : f(L);
          if (l) {
            if (R === V) return f(l).filter((t) => e.some((e) => I(t, e)));
            if (R === U) return f(l).filter((t) => e.some((e) => I(e, t)));
            if (R === x) return f(l).filter((t) => e.some((e) => T(e, t)));
          }
          return e;
        }
        return null == r || null == l
          ? []
          : E.IS_BROWSER_ENV && a
            ? f(l).filter((e) => a.contains(e))
            : o === U
              ? f(r, l)
              : o === F
                ? p(f(r)).filter(y(l))
                : o === x
                  ? g(f(r)).filter(y(l))
                  : f(l);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eh = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eU[t.type]), e),
            e || {},
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eF[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function eR(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: l } = a;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], a);
        switch (a.actionTypeId) {
          case $:
          case Y:
          case q:
          case K:
            return t[a.actionTypeId] || eP[a.actionTypeId];
          case J:
            return eh(t[a.actionTypeId], a.config.filters);
          case ee:
            return e_(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(r(e, N)), 1) };
          case et: {
            let t,
              i = r(e, S),
              l = r(e, C);
            return {
              widthValue:
                a.config.widthUnit === G
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === G
                  ? ev.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(l), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = ec[t],
                r = a(e, i),
                l = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, ek.test(r) ? r : n[i]).split(X);
              return {
                rValue: (0, o.default)(parseInt(l[0], 10), 255),
                gValue: (0, o.default)(parseInt(l[1], 10), 255),
                bValue: (0, o.default)(parseInt(l[2], 10), 255),
                aValue: (0, o.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, k), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, l.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eS({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case $:
          case Y:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: l } = t.config,
              { widthValue: c, heightValue: d } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: c, heightValue: d };
            if (r === G) {
              let t = a(e, S);
              (i(e, S, ""), (c = o(e, "offsetWidth")), i(e, S, t));
            }
            if (l === G) {
              let t = a(e, C);
              (i(e, C, ""), (d = o(e, "offsetHeight")), i(e, C, t));
            }
            return { widthValue: c, heightValue: d };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, l),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eN, {});
          case ee:
            return t.config.fontVariations.reduce(eA, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? j
          : /^STYLE_/.test(e)
            ? W
            : /^GENERAL_/.test(e)
              ? z
              : /^PLUGIN_/.test(e)
                ? Q
                : void 0;
      }
      function eM(e, t) {
        return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function ew(e, t, n, a, i, o, l, c, d) {
        switch (c) {
          case j:
            var s = e,
              u = t,
              f = n,
              g = i,
              y = l;
            let I = eV
                .map((e) => {
                  let t = eP[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: l = "",
                    } = u[e] || {};
                  switch (e) {
                    case $:
                      return `${T}(${n}${o}, ${a}${r}, ${i}${l})`;
                    case Y:
                      return `${m}(${n}${o}, ${a}${r}, ${i}${l})`;
                    case q:
                      return `${b}(${n}${o}) ${O}(${a}${r}) ${v}(${i}${l})`;
                    case K:
                      return `${h}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: N } = y;
            (eG(s, E.TRANSFORM_PREFIXED, y),
              N(s, E.TRANSFORM_PREFIXED, I),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a },
              ) {
                return (
                  (e === $ && void 0 !== a) ||
                  (e === Y && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && N(s, E.TRANSFORM_STYLE_PREFIXED, _));
            return;
          case W:
            return (function (e, t, n, a, i, o) {
              let { setStyle: l } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: c } = n;
                  (void 0 !== r &&
                    (t === G && (t = "px"), eG(e, S, o), l(e, S, r + t)),
                    void 0 !== c &&
                      (i === G && (i = "px"), eG(e, C, o), l(e, C, c + i)));
                  break;
                }
                case J:
                  var c = a.config;
                  let d = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ex(n, c)})`,
                      "",
                    ),
                    { setStyle: s } = o;
                  (eG(e, A, o), s(e, A, d));
                  break;
                case ee:
                  a.config;
                  let u = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: f } = o;
                  (eG(e, L, o), f(e, L, u));
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ec[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    d = n.aValue;
                  (eG(e, t, o),
                    l(
                      e,
                      t,
                      d >= 1
                        ? `rgb(${i},${r},${c})`
                        : `rgba(${i},${r},${c},${d})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  (eG(e, i, o), l(e, i, n.value + t));
                }
              }
            })(e, 0, n, i, o, l);
          case z:
            var M = e,
              w = i,
              P = l;
            let { setStyle: U } = P;
            if (w.actionTypeId === eo) {
              let { value: e } = w.config;
              U(M, k, e === R && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(d, t, i);
          }
        }
      }
      let eP = {
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Y]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eU = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ex = (e, t) => {
          let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eV = Object.keys(eP),
        ek = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function eG(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = ed[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        if (!r) return void o(e, D, a);
        let l = r.split(X).map(el);
        -1 === l.indexOf(a) && o(e, D, l.concat(a).join(X));
      }
      function eX(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = ed[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            D,
            r
              .split(X)
              .map(el)
              .filter((e) => e !== a)
              .join(X),
          );
      }
      function eB({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        (Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            l = i[r];
          l && eH({ actionList: l, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eH({ actionList: i[e], elementApi: t });
          }));
      }
      function eH({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        (a &&
          a.forEach((e) => {
            ej({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                ej({ actionGroup: e, event: t, elementApi: n });
              });
            }));
      }
      function ej({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          ((a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eW({ effect: eQ, actionTypeId: i, elementApi: n })),
            eb({ config: o, event: t, elementApi: n }).forEach(a));
        });
      }
      function ez(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          (n.widthUnit === G && a(e, S, ""), n.heightUnit === G && a(e, C, ""));
        }
        i(e, D) && eW({ effect: eX, actionTypeId: o, elementApi: n })(e);
      }
      let eW =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case $:
            case Y:
            case q:
            case K:
              e(a, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, A, n);
              break;
            case ee:
              e(a, L, n);
              break;
            case Z:
              e(a, N, n);
              break;
            case et:
              (e(a, S, n), e(a, C, n));
              break;
            case en:
            case ea:
            case ei:
              e(a, ec[t], n);
              break;
            case eo:
              e(a, k, n);
          }
        };
      function eQ(e, t, n) {
        let { setStyle: a } = n;
        (eX(e, t, n),
          a(e, t, ""),
          t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function e$(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function eY(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          l = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              c = n[e$(n)],
              { config: d, actionTypeId: s } = c;
            i.id === c.id && (l = r + o);
            let u = eC(s) === z ? 0 : d.duration;
            r += d.delay + u;
          }),
          r > 0 ? (0, u.optimizeFloat)(l / r) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, c.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === d.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === d.EventBasedOn.ELEMENT || null == t)) ||
          (e === d.EventTypeConsts.MOUSE_MOVE && t === d.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + B + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + H + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + H + n + H + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return h;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: d,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: y,
          CONFIG_UNIT: I,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: T,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = r.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case T:
              return O;
            case m: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: l,
                } = t.payload,
                { actionTypeId: c } = r,
                d = e;
              return (
                (0, o.getIn)(d, [n, a]) !== a && (d = h(d, a, l, n, r)),
                _(d, n, c, i, r)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return _(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function h(e, t, n, a, i) {
        let r =
          n === c ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function _(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return R.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return (null != o && null != r && (e[i] = r), e);
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let R = [
        [s, E],
        [u, g],
        [f, y],
        [p, I],
      ];
    },
    5808: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "df5d5074-5044-d5d8-5387-740d52f4b702",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "df5d5074-5044-d5d8-5387-740d52f4b702",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198b8cb20ba,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "df5d5074-5044-d5d8-5387-740d52f4b702",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "df5d5074-5044-d5d8-5387-740d52f4b702",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198b8cb20bb,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d9b74960-f8c0-e9a6-8ff6-ba10fb4d3250",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d9b74960-f8c0-e9a6-8ff6-ba10fb4d3250",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198b8e6881b,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d9b74960-f8c0-e9a6-8ff6-ba10fb4d3250",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d9b74960-f8c0-e9a6-8ff6-ba10fb4d3250",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198b8e6881c,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|6174bde7-80e8-87f7-1be7-032759ea9279",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|6174bde7-80e8-87f7-1be7-032759ea9279",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c178e55a,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|61fb0a5c-7077-e141-0659-e00330a1884d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|61fb0a5c-7077-e141-0659-e00330a1884d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c1d8ef5d,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|61fb0a5c-7077-e141-0659-e00330a1884d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|61fb0a5c-7077-e141-0659-e00330a1884d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c1d8ef5e,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|712cb0cd-edd1-048d-b2ae-5242084154f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|712cb0cd-edd1-048d-b2ae-5242084154f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c2719f91,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|712cb0cd-edd1-048d-b2ae-5242084154f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|712cb0cd-edd1-048d-b2ae-5242084154f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c2719f91,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".work-process-card",
              originalId: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-process-card",
                originalId: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-10-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x198c2bb93c7,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|1dfaf0c3-c92a-73de-76d1-367aa370100e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|1dfaf0c3-c92a-73de-76d1-367aa370100e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c6ab9ccd,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|1dfaf0c3-c92a-73de-76d1-367aa370100e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|1dfaf0c3-c92a-73de-76d1-367aa370100e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c6abbace,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ef122ec5-e9a2-560d-dc59-c0deb278bf58",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ef122ec5-e9a2-560d-dc59-c0deb278bf58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c71990ed,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ef122ec5-e9a2-560d-dc59-c0deb278bf58",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ef122ec5-e9a2-560d-dc59-c0deb278bf58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c71990ed,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|c534cbb5-e04c-236d-ec60-bd8bfe6a97f0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|c534cbb5-e04c-236d-ec60-bd8bfe6a97f0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c888dcf3,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|c534cbb5-e04c-236d-ec60-bd8bfe6a97f0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|c534cbb5-e04c-236d-ec60-bd8bfe6a97f0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198c888dcf3,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f43c6272-a1ee-d88d-793b-b514c0416ec8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f43c6272-a1ee-d88d-793b-b514c0416ec8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198cb9282bc,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f43c6272-a1ee-d88d-793b-b514c0416ec8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f43c6272-a1ee-d88d-793b-b514c0416ec8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198cb9282bc,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-19",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "fde925a0-a739-3824-5343-8ea911d323f6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "fde925a0-a739-3824-5343-8ea911d323f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-19-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198cbae0e4a,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "8103538b-8dc4-b3b3-3e94-d118890ddf9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "8103538b-8dc4-b3b3-3e94-d118890ddf9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d16b963b,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "8103538b-8dc4-b3b3-3e94-d118890ddf9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "8103538b-8dc4-b3b3-3e94-d118890ddf9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d16b963c,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-22",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68a6e1d4632d0816ac9ca912",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-22-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-22-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x198d1719e3e,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d19acd97,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d19acd97,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a85a5970bc1d5403f7b76b|523410b6-1642-c8c1-d675-2c7e8f82e1f4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a85a5970bc1d5403f7b76b|523410b6-1642-c8c1-d675-2c7e8f82e1f4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d1a5881e,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a85a5970bc1d5403f7b76b|523410b6-1642-c8c1-d675-2c7e8f82e1f4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a85a5970bc1d5403f7b76b|523410b6-1642-c8c1-d675-2c7e8f82e1f4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d1a5881e,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a85ed14d0bbe365d496162|96719bf2-c265-a826-70b8-c23bb43785c3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a85ed14d0bbe365d496162|96719bf2-c265-a826-70b8-c23bb43785c3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d1b6e323,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a85ed14d0bbe365d496162|96719bf2-c265-a826-70b8-c23bb43785c3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a85ed14d0bbe365d496162|96719bf2-c265-a826-70b8-c23bb43785c3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d1b6e323,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-109",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6017a94734d86bb014103|14630314-f491-7e05-fd31-6a49b8b2acba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6017a94734d86bb014103|14630314-f491-7e05-fd31-6a49b8b2acba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d6b3d40f,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-108",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6017a94734d86bb014103|14630314-f491-7e05-fd31-6a49b8b2acba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6017a94734d86bb014103|14630314-f491-7e05-fd31-6a49b8b2acba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d6b3d40f,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-115",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".navbar",
              originalId: "a0bb02b7-a349-4ae7-301e-59d2616fd036",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".navbar",
                originalId: "a0bb02b7-a349-4ae7-301e-59d2616fd036",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d71dfdbc,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".navbar",
              originalId: "a0bb02b7-a349-4ae7-301e-59d2616fd036",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".navbar",
                originalId: "a0bb02b7-a349-4ae7-301e-59d2616fd036",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198d71dfdbc,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-26",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|49829020-ef72-6b3f-0d83-79c23bdeea52",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|49829020-ef72-6b3f-0d83-79c23bdeea52",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-26-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198dfac2ac0,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-27",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "17bc44f6-6d32-4e07-5011-49d6e93c3f1b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17bc44f6-6d32-4e07-5011-49d6e93c3f1b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-27-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198dfbf84a6,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-111",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfd9206f,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|61fb0a5c-7077-e141-0659-e00330a1884d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|61fb0a5c-7077-e141-0659-e00330a1884d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfdba496,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|0f8655a4-1ed9-2e86-a10f-c3f26fd412e6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|0f8655a4-1ed9-2e86-a10f-c3f26fd412e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfdf20ac,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-process-card",
              originalId: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-process-card",
                originalId: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfdf61b3,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ef122ec5-e9a2-560d-dc59-c0deb278bf58",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ef122ec5-e9a2-560d-dc59-c0deb278bf58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfe1971b,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-53",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6d73ed24-cb64-3d94-0c4f-de387a0dd7c9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6d73ed24-cb64-3d94-0c4f-de387a0dd7c9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfee4776,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|ac70c346-be19-e2d7-a745-2c8f17624943",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|ac70c346-be19-e2d7-a745-2c8f17624943",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfee6d7b,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|f59df2db-35f7-e28d-8ae0-18ea5527e04a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|f59df2db-35f7-e28d-8ae0-18ea5527e04a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dff36c0f,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|996e637a-5b74-afaf-355a-c5ea90b15842",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|996e637a-5b74-afaf-355a-c5ea90b15842",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dff3963e,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e013602b,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-65",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|89ad8577-5b74-5cb9-c684-fa68404db1cf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|89ad8577-5b74-5cb9-c684-fa68404db1cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0609c82,
          },
          "e-66": {
            id: "e-66",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-67",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|3a199d5b-75e8-a77b-3808-d5d5ab9852c3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|3a199d5b-75e8-a77b-3808-d5d5ab9852c3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e060f901,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-69",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|1ccae564-0f1b-5352-1848-48785c9b9576",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|1ccae564-0f1b-5352-1848-48785c9b9576",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0611b58,
          },
          "e-70": {
            id: "e-70",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-71",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team-item",
              originalId:
                "68a6e1d4632d0816ac9ca912|e2e83b9b-cae6-6abe-8156-593fa1a6209d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team-item",
                originalId:
                  "68a6e1d4632d0816ac9ca912|e2e83b9b-cae6-6abe-8156-593fa1a6209d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0613b58,
          },
          "e-72": {
            id: "e-72",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-73",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0617808,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-75",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6d5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6e1d4632d0816ac9ca912|cd36ef01-5e55-672a-e213-74eabbbad6d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0619c22,
          },
          "e-76": {
            id: "e-76",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-77",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".page-title-content-wrapper",
              originalId:
                "68a85a5970bc1d5403f7b76b|244e7687-179a-173d-9b3b-d1135db36b38",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".page-title-content-wrapper",
                originalId:
                  "68a85a5970bc1d5403f7b76b|244e7687-179a-173d-9b3b-d1135db36b38",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0620bd1,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-link",
              originalId:
                "68a85a5970bc1d5403f7b76b|523410b6-1642-c8c1-d675-2c7e8f82e1f4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-link",
                originalId:
                  "68a85a5970bc1d5403f7b76b|523410b6-1642-c8c1-d675-2c7e8f82e1f4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0625222,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-link-block",
              originalId:
                "68a85ed14d0bbe365d496162|96719bf2-c265-a826-70b8-c23bb43785c3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-link-block",
                originalId:
                  "68a85ed14d0bbe365d496162|96719bf2-c265-a826-70b8-c23bb43785c3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e062d799,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e324aae8-4fe5-8927-2f95-389f596eedf4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e324aae8-4fe5-8927-2f95-389f596eedf4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0632ad9,
          },
          "e-84": {
            id: "e-84",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-85",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|be6142e3-a961-ce85-1829-57aae576ec62",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|be6142e3-a961-ce85-1829-57aae576ec62",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e063548f,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".licenses-content-block",
              originalId:
                "68ab27d71a3c7447dfe9b42d|28311979-4e04-51c8-0313-1afacf6fe346",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".licenses-content-block",
                originalId:
                  "68ab27d71a3c7447dfe9b42d|28311979-4e04-51c8-0313-1afacf6fe346",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e063cbe1,
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-89",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ab2cc30fd4378c770c4da3|0f64a741-bc0d-1375-6a62-4c2f6cf676b3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ab2cc30fd4378c770c4da3|0f64a741-bc0d-1375-6a62-4c2f6cf676b3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0642100,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a4451b4b114fb151a9a7a1|25dfb465-75c8-0984-dd2b-9c6405e3ab30",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a4451b4b114fb151a9a7a1|25dfb465-75c8-0984-dd2b-9c6405e3ab30",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e064a448,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a4451b4b114fb151a9a7a1|3c1d3a7d-cfae-b413-7615-7541296688c9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a4451b4b114fb151a9a7a1|3c1d3a7d-cfae-b413-7615-7541296688c9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e064ca81,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-overview-content-wrapper",
              originalId:
                "68a4451b4b114fb151a9a7a1|3981e374-8eee-b42d-2f34-cf82c154272b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-overview-content-wrapper",
                originalId:
                  "68a4451b4b114fb151a9a7a1|3981e374-8eee-b42d-2f34-cf82c154272b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e0672dc8,
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-overview-image",
              originalId:
                "68a4451b4b114fb151a9a7a1|888b4230-22db-779b-02d1-24c15ceec790",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-overview-image",
                originalId:
                  "68a4451b4b114fb151a9a7a1|888b4230-22db-779b-02d1-24c15ceec790",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e07f2138,
          },
          "e-102": {
            id: "e-102",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a6017a94734d86bb014103|14630314-f491-7e05-fd31-6a49b8b2acaf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a6017a94734d86bb014103|14630314-f491-7e05-fd31-6a49b8b2acaf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e09075f0,
          },
          "e-104": {
            id: "e-104",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-105",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|3e131dd1-fdb8-1728-53e2-37b2897016ff",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|3e131dd1-fdb8-1728-53e2-37b2897016ff",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946c482d3,
          },
          "e-105": {
            id: "e-105",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|3e131dd1-fdb8-1728-53e2-37b2897016ff",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|3e131dd1-fdb8-1728-53e2-37b2897016ff",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946c482d3,
          },
          "e-106": {
            id: "e-106",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-107",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|4a78933e-7605-3e61-a65d-1c305c842d0f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|4a78933e-7605-3e61-a65d-1c305c842d0f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946c48565,
          },
          "e-107": {
            id: "e-107",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-106",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a06b0de6c84c259653481b|4a78933e-7605-3e61-a65d-1c305c842d0f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a06b0de6c84c259653481b|4a78933e-7605-3e61-a65d-1c305c842d0f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946c48565,
          },
          "e-108": {
            id: "e-108",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-109",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d299",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d299",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199388d5e39,
          },
          "e-109": {
            id: "e-109",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-108",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d299",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d299",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199388d5e39,
          },
          "e-110": {
            id: "e-110",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-111",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2a3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19938934426,
          },
          "e-111": {
            id: "e-111",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-110",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2a3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19938934426,
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1993893424b,
          },
          "e-113": {
            id: "e-113",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-112",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1993893424b,
          },
          "e-114": {
            id: "e-114",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-115",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2b7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2b7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19938932990,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2b7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a86536deb2c8ceed9af374|e97ad690-861a-4dd4-85fe-cc6713b3d2b7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19938932990,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Navbar link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["6b2cfe86-2792-5b86-50b2-72e8b4c03239"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text.hover-text",
                        selectorGuids: [
                          "6b2cfe86-2792-5b86-50b2-72e8b4c03239",
                          "01543bc8-f75a-8b26-00ec-b7a38db1f9fb",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["6b2cfe86-2792-5b86-50b2-72e8b4c03239"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text.hover-text",
                        selectorGuids: [
                          "6b2cfe86-2792-5b86-50b2-72e8b4c03239",
                          "01543bc8-f75a-8b26-00ec-b7a38db1f9fb",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198b8cb6ee1,
          },
          "a-2": {
            id: "a-2",
            title: "Navbar link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text",
                        selectorGuids: ["6b2cfe86-2792-5b86-50b2-72e8b4c03239"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-link-text.hover-text",
                        selectorGuids: [
                          "6b2cfe86-2792-5b86-50b2-72e8b4c03239",
                          "01543bc8-f75a-8b26-00ec-b7a38db1f9fb",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198b8cb6ee1,
          },
          "a-3": {
            id: "a-3",
            title: "Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["59bf12ae-26f2-53f0-04f6-0efa11f035b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.hover-text",
                        selectorGuids: [
                          "59bf12ae-26f2-53f0-04f6-0efa11f035b7",
                          "ed87edff-e5a9-895c-1031-351bfce683ec",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-dot",
                        selectorGuids: ["9848c398-a212-9e0e-4704-4c42aa055531"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["59bf12ae-26f2-53f0-04f6-0efa11f035b7"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.hover-text",
                        selectorGuids: [
                          "59bf12ae-26f2-53f0-04f6-0efa11f035b7",
                          "ed87edff-e5a9-895c-1031-351bfce683ec",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-dot",
                        selectorGuids: ["9848c398-a212-9e0e-4704-4c42aa055531"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198b8e691c3,
          },
          "a-4": {
            id: "a-4",
            title: "Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["59bf12ae-26f2-53f0-04f6-0efa11f035b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-4-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.hover-text",
                        selectorGuids: [
                          "59bf12ae-26f2-53f0-04f6-0efa11f035b7",
                          "ed87edff-e5a9-895c-1031-351bfce683ec",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-4-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-dot",
                        selectorGuids: ["9848c398-a212-9e0e-4704-4c42aa055531"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198b8e691c3,
          },
          "a-5": {
            id: "a-5",
            title: "Brands Marquee",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brands-content",
                        selectorGuids: ["e2bc5a57-aeb3-94ed-ead3-e98d46306a8e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 38e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brands-content",
                        selectorGuids: ["e2bc5a57-aeb3-94ed-ead3-e98d46306a8e"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".brands-content",
                        selectorGuids: ["e2bc5a57-aeb3-94ed-ead3-e98d46306a8e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198c178edc1,
          },
          "a-6": {
            id: "a-6",
            title: "Work Item Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-category",
                        selectorGuids: ["9d66da1a-8b7c-fb22-af65-c9ece8a3bae5"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-category.hover",
                        selectorGuids: [
                          "9d66da1a-8b7c-fb22-af65-c9ece8a3bae5",
                          "31b86a7a-1115-8cbd-3416-951ea6683f0c",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-thumbnail-image",
                        selectorGuids: ["c7459053-55be-56b4-8694-e49997f8af44"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-category",
                        selectorGuids: ["9d66da1a-8b7c-fb22-af65-c9ece8a3bae5"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-category.hover",
                        selectorGuids: [
                          "9d66da1a-8b7c-fb22-af65-c9ece8a3bae5",
                          "31b86a7a-1115-8cbd-3416-951ea6683f0c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-thumbnail-image",
                        selectorGuids: ["c7459053-55be-56b4-8694-e49997f8af44"],
                      },
                      xValue: 1.08,
                      yValue: 1.08,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198c1d8fc4c,
          },
          "a-7": {
            id: "a-7",
            title: "Work Item Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-category",
                        selectorGuids: ["9d66da1a-8b7c-fb22-af65-c9ece8a3bae5"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-category.hover",
                        selectorGuids: [
                          "9d66da1a-8b7c-fb22-af65-c9ece8a3bae5",
                          "31b86a7a-1115-8cbd-3416-951ea6683f0c",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-thumbnail-image",
                        selectorGuids: ["c7459053-55be-56b4-8694-e49997f8af44"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198c1d8fc4c,
          },
          "a-8": {
            id: "a-8",
            title: "Button Hover In 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["59bf12ae-26f2-53f0-04f6-0efa11f035b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.hover-text",
                        selectorGuids: [
                          "59bf12ae-26f2-53f0-04f6-0efa11f035b7",
                          "ed87edff-e5a9-895c-1031-351bfce683ec",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-dot",
                        selectorGuids: ["9848c398-a212-9e0e-4704-4c42aa055531"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["59bf12ae-26f2-53f0-04f6-0efa11f035b7"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.hover-text",
                        selectorGuids: [
                          "59bf12ae-26f2-53f0-04f6-0efa11f035b7",
                          "ed87edff-e5a9-895c-1031-351bfce683ec",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-dot",
                        selectorGuids: ["9848c398-a212-9e0e-4704-4c42aa055531"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198b8e691c3,
          },
          "a-9": {
            id: "a-9",
            title: "Button Hover Out 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text",
                        selectorGuids: ["59bf12ae-26f2-53f0-04f6-0efa11f035b7"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.hover-text",
                        selectorGuids: [
                          "59bf12ae-26f2-53f0-04f6-0efa11f035b7",
                          "ed87edff-e5a9-895c-1031-351bfce683ec",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-dot",
                        selectorGuids: ["9848c398-a212-9e0e-4704-4c42aa055531"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198b8e691c3,
          },
          "a-10": {
            id: "a-10",
            title: "Work Process Card Hover",
            continuousParameterGroups: [
              {
                id: "a-10-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-10-n",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
                          },
                          xValue: null,
                          yValue: -8,
                          xUnit: "deg",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-10-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-process-card-blaur",
                            selectorGuids: [
                              "15acb1db-fb21-8b0e-03c9-8ee3fd3a70fa",
                            ],
                          },
                          xValue: -111,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-10-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
                          },
                          xValue: null,
                          yValue: 8,
                          xUnit: "deg",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-10-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-process-card-blaur",
                            selectorGuids: [
                              "15acb1db-fb21-8b0e-03c9-8ee3fd3a70fa",
                            ],
                          },
                          xValue: 42,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-10-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-10-n-3",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
                          },
                          xValue: 8,
                          yValue: null,
                          xUnit: "deg",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-10-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-process-card-blaur",
                            selectorGuids: [
                              "15acb1db-fb21-8b0e-03c9-8ee3fd3a70fa",
                            ],
                          },
                          yValue: -149,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-10-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6d73ed24-cb64-3d94-0c4f-de387a0dd7d2",
                          },
                          xValue: -8,
                          yValue: null,
                          xUnit: "deg",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-10-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-process-card-blaur",
                            selectorGuids: [
                              "15acb1db-fb21-8b0e-03c9-8ee3fd3a70fa",
                            ],
                          },
                          yValue: -19,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198c2bb9f46,
          },
          "a-11": {
            id: "a-11",
            title: "Testimonial Card Move Top",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".t-card-container.top",
                        selectorGuids: [
                          "26ed3420-5c90-d134-24e1-1e9617cf30d3",
                          "9ccefa26-887a-7592-9612-4175852586c4",
                        ],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 26e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".t-card-container.top",
                        selectorGuids: [
                          "26ed3420-5c90-d134-24e1-1e9617cf30d3",
                          "9ccefa26-887a-7592-9612-4175852586c4",
                        ],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".t-card-container.top",
                        selectorGuids: [
                          "26ed3420-5c90-d134-24e1-1e9617cf30d3",
                          "9ccefa26-887a-7592-9612-4175852586c4",
                        ],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198c6a31956,
          },
          "a-12": {
            id: "a-12",
            title: "Testimonial Card Move Bottom",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".t-card-container.bottom",
                        selectorGuids: [
                          "26ed3420-5c90-d134-24e1-1e9617cf30d3",
                          "3a631ed5-fc3d-9e67-6c96-ed8f3824f68d",
                        ],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 26e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".t-card-container.bottom",
                        selectorGuids: [
                          "26ed3420-5c90-d134-24e1-1e9617cf30d3",
                          "3a631ed5-fc3d-9e67-6c96-ed8f3824f68d",
                        ],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".t-card-container.bottom",
                        selectorGuids: [
                          "26ed3420-5c90-d134-24e1-1e9617cf30d3",
                          "3a631ed5-fc3d-9e67-6c96-ed8f3824f68d",
                        ],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198c6a31956,
          },
          "a-13": {
            id: "a-13",
            title: "FAQ Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["811d87e7-f0ac-ac04-76f8-ad8f5bebd73a"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-button-line._2",
                        selectorGuids: [
                          "15c7355d-ae64-7e37-7117-a98fe8de7c28",
                          "26c3c123-e650-9bab-85d2-d398e5e1907f",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["811d87e7-f0ac-ac04-76f8-ad8f5bebd73a"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-button-line._2",
                        selectorGuids: [
                          "15c7355d-ae64-7e37-7117-a98fe8de7c28",
                          "26c3c123-e650-9bab-85d2-d398e5e1907f",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198c7199e1c,
          },
          "a-14": {
            id: "a-14",
            title: "FAQ Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["811d87e7-f0ac-ac04-76f8-ad8f5bebd73a"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-button-line._2",
                        selectorGuids: [
                          "15c7355d-ae64-7e37-7117-a98fe8de7c28",
                          "26c3c123-e650-9bab-85d2-d398e5e1907f",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198c7199e1c,
          },
          "a-15": {
            id: "a-15",
            title: "Blog Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumbnail-image",
                        selectorGuids: ["c3700885-ac7b-704d-b2c3-33deb9906de0"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumbnail-image",
                        selectorGuids: ["c3700885-ac7b-704d-b2c3-33deb9906de0"],
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198c888e616,
          },
          "a-16": {
            id: "a-16",
            title: "Blog Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumbnail-image",
                        selectorGuids: ["c3700885-ac7b-704d-b2c3-33deb9906de0"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198c888e616,
          },
          "a-17": {
            id: "a-17",
            title: "Footer Link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-text",
                        selectorGuids: ["54438ff4-abbd-9532-7726-a622bdd94335"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-text.hover",
                        selectorGuids: [
                          "54438ff4-abbd-9532-7726-a622bdd94335",
                          "97f9ddbd-4538-7908-e898-ac02eabd355b",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-text",
                        selectorGuids: ["54438ff4-abbd-9532-7726-a622bdd94335"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-text.hover",
                        selectorGuids: [
                          "54438ff4-abbd-9532-7726-a622bdd94335",
                          "97f9ddbd-4538-7908-e898-ac02eabd355b",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198cb928ad1,
          },
          "a-18": {
            id: "a-18",
            title: "Footer Link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-text",
                        selectorGuids: ["54438ff4-abbd-9532-7726-a622bdd94335"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-18-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer-link-text.hover",
                        selectorGuids: [
                          "54438ff4-abbd-9532-7726-a622bdd94335",
                          "97f9ddbd-4538-7908-e898-ac02eabd355b",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198cb928ad1,
          },
          "a-19": {
            id: "a-19",
            title: "Footer Scale",
            continuousParameterGroups: [
              {
                id: "a-19-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-19-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "fde925a0-a739-3824-5343-8ea911d323f6",
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 44,
                    actionItems: [
                      {
                        id: "a-19-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "fde925a0-a739-3824-5343-8ea911d323f6",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198cbae19ea,
          },
          "a-20": {
            id: "a-20",
            title: "Awards Row Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-bubble",
                        selectorGuids: ["2ece2988-e4b5-5105-6158-bdc261445e05"],
                      },
                      yValue: 0,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-10",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".awards-info",
                        selectorGuids: ["adc12e33-994c-35cf-1fbf-dd767b63946b"],
                      },
                      globalSwatchId: "--text-colors--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-20-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "8103538b-8dc4-b3b3-3e94-d118890ddf9e",
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-20-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "8103538b-8dc4-b3b3-3e94-d118890ddfa4",
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-bubble",
                        selectorGuids: ["2ece2988-e4b5-5105-6158-bdc261445e05"],
                      },
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-11",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".awards-info",
                        selectorGuids: ["adc12e33-994c-35cf-1fbf-dd767b63946b"],
                      },
                      globalSwatchId: "--text-colors--black",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-20-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "8103538b-8dc4-b3b3-3e94-d118890ddf9e",
                      },
                      xValue: 15,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-20-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "8103538b-8dc4-b3b3-3e94-d118890ddfa4",
                      },
                      xValue: -15,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198d16ba097,
          },
          "a-23": {
            id: "a-23",
            title: "Awards Row Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-bubble",
                        selectorGuids: ["2ece2988-e4b5-5105-6158-bdc261445e05"],
                      },
                      yValue: 0,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-23-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".awards-info",
                        selectorGuids: ["adc12e33-994c-35cf-1fbf-dd767b63946b"],
                      },
                      globalSwatchId: "--text-colors--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-23-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "8103538b-8dc4-b3b3-3e94-d118890ddf9e",
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-23-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "8103538b-8dc4-b3b3-3e94-d118890ddfa4",
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198d16ba097,
          },
          "a-22": {
            id: "a-22",
            title: "Award Bubble Move",
            continuousParameterGroups: [
              {
                id: "a-22-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 8,
                    actionItems: [
                      {
                        id: "a-22-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-22-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 71,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-22-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [],
              },
            ],
            createdOn: 0x198d171c164,
          },
          "a-24": {
            id: "a-24",
            title: "Nav Menu Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-24-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163d"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-24-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163e"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-24-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163f"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-24-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163f"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198d71e4c53,
          },
          "a-25": {
            id: "a-25",
            title: "Nav Menu Open Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163d"],
                      },
                      yValue: -7,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-25-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-top",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-25-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-middle",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-25-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163f"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-25-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-bottom",
                        selectorGuids: ["64d31eb3-458a-a738-8d6a-22ff5525163f"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198d71e4c53,
          },
          "a-26": {
            id: "a-26",
            title: "Header Sticky Scroll Animation",
            continuousParameterGroups: [
              {
                id: "a-26-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-26-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".header-sticky-wrapper",
                            selectorGuids: [
                              "2211f27c-011b-2626-6cc8-ba34d3f5085f",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-26-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".header-sticky-wrapper",
                            selectorGuids: [
                              "2211f27c-011b-2626-6cc8-ba34d3f5085f",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 9,
                    actionItems: [
                      {
                        id: "a-26-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".header-sticky-wrapper",
                            selectorGuids: [
                              "2211f27c-011b-2626-6cc8-ba34d3f5085f",
                            ],
                          },
                          yValue: 8,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-26-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".header-sticky-wrapper",
                            selectorGuids: [
                              "2211f27c-011b-2626-6cc8-ba34d3f5085f",
                            ],
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198dfac7a09,
          },
          "a-27": {
            id: "a-27",
            title: "About Text Animation",
            continuousParameterGroups: [
              {
                id: "a-27-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 26,
                    actionItems: [
                      {
                        id: "a-27-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "d99ef7c8-484f-ec1a-d991-eca747cbedbd",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 44,
                    actionItems: [
                      {
                        id: "a-27-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "d99ef7c8-484f-ec1a-d991-eca747cbedbd",
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-27-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "b432c0e3-66e8-fdd6-e31e-dfdb10a74f59",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 56,
                    actionItems: [
                      {
                        id: "a-27-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "b432c0e3-66e8-fdd6-e31e-dfdb10a74f59",
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-27-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "69a70297-fd5f-e38c-7f7e-f839ce2aee63",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 68,
                    actionItems: [
                      {
                        id: "a-27-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "69a70297-fd5f-e38c-7f7e-f839ce2aee63",
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-27-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "7ad92ee5-2081-5c60-4193-41859c322a74",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-27-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "7ad92ee5-2081-5c60-4193-41859c322a74",
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198dfbf989f,
          },
          "a-28": {
            id: "a-28",
            title: "Fade in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "c9df",
                          value: 2,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "bc1e",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68a06b0de6c84c259653481b|4fd7eb72-4560-9194-4322-88393366c71b",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198dfd92b0e,
          },
          "a-29": {
            id: "a-29",
            title: "Page Loder",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf1" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf6" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf5" },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf0" },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2400,
                      easing: "outQuad",
                      duration: 1400,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf5" },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf1" },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf6" },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf2" },
                      yValue: -80,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: { id: "0d6ebb54-0e67-fa54-4799-f066bf79edf7" },
                      yValue: 80,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198e01f45c1,
          },
          "a-30": {
            id: "a-30",
            title: "Contact Link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-text",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a8"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-text-hover",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a9"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-30-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-line-hover",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a7"],
                      },
                      xValue: -105,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-text",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a8"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-30-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-text-hover",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a9"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-30-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-line-hover",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a7"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199388d6a22,
          },
          "a-31": {
            id: "a-31",
            title: "Contact Link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-text",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a8"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-text-hover",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a9"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact-link-line-hover",
                        selectorGuids: ["72154948-cb36-943e-0b8c-72aabec0a7a7"],
                      },
                      xValue: -105,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199388d6a22,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
