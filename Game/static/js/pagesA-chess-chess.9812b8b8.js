(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-chess-chess"],
  {
    "0381": function (t, e, n) {
      "use strict";
      var i = n("871d"),
        r = n.n(i);
      r.a;
    },
    "03d7": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("fc8a"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    "0538": function (t, e, n) {
      "use strict";
      var i = n("e330"),
        r = n("59ed"),
        a = n("861d"),
        o = n("1a2d"),
        s = n("f36a"),
        c = n("40d5"),
        u = Function,
        l = i([].concat),
        f = i([].join),
        d = {},
        p = function (t, e, n) {
          if (!o(d, e)) {
            for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
            d[e] = u("C,a", "return new C(" + f(i, ",") + ")");
          }
          return d[e](t, n);
        };
      t.exports = c
        ? u.bind
        : function (t) {
            var e = r(this),
              n = e.prototype,
              i = s(arguments, 1),
              o = function () {
                var n = l(i, s(arguments));
                return this instanceof o ? p(e, n.length, n) : e.apply(t, n);
              };
            return a(n) && (o.prototype = n), o;
          };
    },
    "0676": function (t, e, n) {
      n("d9e2"),
        n("d401"),
        (t.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "0ba4": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ef37"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    "11b0": function (t, e, n) {
      n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0"),
        n("a630"),
        (t.exports = function (t) {
          if (
            ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    1799: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(n("7f2c5")),
        a = {
          name: "u-gap",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, r.default],
          computed: {
            gapStyle: function () {
              var t = {
                backgroundColor: this.bgColor,
                height: uni.$u.addUnit(this.height),
                marginTop: uni.$u.addUnit(this.marginTop),
                marginBottom: uni.$u.addUnit(this.marginBottom),
              };
              return uni.$u.deepMerge(t, uni.$u.addStyle(this.customStyle));
            },
          },
        };
      e.default = a;
    },
    "18f3": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = {
          uPopup: n("6c36").default,
          uIcon: n("a6a2").default,
          uLine: n("985f").default,
          uLoadingIcon: n("cf6a").default,
          uGap: n("863a").default,
        },
        r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "u-popup",
            {
              attrs: {
                show: t.show,
                mode: "bottom",
                safeAreaInsetBottom: t.safeAreaInsetBottom,
                round: t.round,
              },
              on: {
                close: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.closeHandler.apply(void 0, arguments);
                },
              },
            },
            [
              n(
                "v-uni-view",
                { staticClass: "u-action-sheet" },
                [
                  t.title
                    ? n(
                        "v-uni-view",
                        { staticClass: "u-action-sheet__header" },
                        [
                          n(
                            "v-uni-text",
                            {
                              staticClass:
                                "u-action-sheet__header__title u-line-1",
                            },
                            [t._v(t._s(t.title))]
                          ),
                          n(
                            "v-uni-view",
                            {
                              staticClass: "u-action-sheet__header__icon-wrap",
                              on: {
                                click: function (e) {
                                  e.stopPropagation(),
                                    (arguments[0] = e = t.$handleEvent(e)),
                                    t.cancel.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              n("u-icon", {
                                attrs: {
                                  name: "close",
                                  size: "17",
                                  color: "#c8c9cc",
                                  bold: !0,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t.description
                    ? n(
                        "v-uni-text",
                        {
                          staticClass: "u-action-sheet__description",
                          style: [
                            {
                              marginTop:
                                "" + (t.title && t.description ? 0 : "18px"),
                            },
                          ],
                        },
                        [t._v(t._s(t.description))]
                      )
                    : t._e(),
                  t._t("default", [
                    t.description ? n("u-line") : t._e(),
                    n(
                      "v-uni-view",
                      { staticClass: "u-action-sheet__item-wrap" },
                      [
                        t._l(t.actions, function (e, i) {
                          return [
                            n(
                              "v-uni-view",
                              {
                                staticClass: "u-action-sheet__item-wrap__item",
                                attrs: {
                                  "hover-class":
                                    e.disabled || e.loading
                                      ? ""
                                      : "u-action-sheet--hover",
                                  "hover-stay-time": 150,
                                },
                                on: {
                                  click: function (e) {
                                    e.stopPropagation(),
                                      (arguments[0] = e = t.$handleEvent(e)),
                                      t.selectHandler(i);
                                  },
                                },
                              },
                              [
                                e.loading
                                  ? n("u-loading-icon", {
                                      attrs: {
                                        "custom-class":
                                          "van-action-sheet__loading",
                                        size: "18",
                                        mode: "circle",
                                      },
                                    })
                                  : [
                                      n(
                                        "v-uni-text",
                                        {
                                          staticClass:
                                            "u-action-sheet__item-wrap__item__name",
                                          style: [t.itemStyle(i)],
                                        },
                                        [t._v(t._s(e.name))]
                                      ),
                                      e.subname
                                        ? n(
                                            "v-uni-text",
                                            {
                                              staticClass:
                                                "u-action-sheet__item-wrap__item__subname",
                                            },
                                            [t._v(t._s(e.subname))]
                                          )
                                        : t._e(),
                                    ],
                              ],
                              2
                            ),
                            i !== t.actions.length - 1 ? n("u-line") : t._e(),
                          ];
                        }),
                      ],
                      2
                    ),
                  ]),
                  t.cancelText
                    ? n("u-gap", { attrs: { bgColor: "#eaeaec", height: "6" } })
                    : t._e(),
                  n(
                    "v-uni-view",
                    { attrs: { "hover-class": "u-action-sheet--hover" } },
                    [
                      t.cancelText
                        ? n(
                            "v-uni-text",
                            {
                              staticClass: "u-action-sheet__cancel-text",
                              attrs: { "hover-stay-time": 150 },
                              on: {
                                touchmove: function (e) {
                                  e.stopPropagation(),
                                    e.preventDefault(),
                                    (arguments[0] = e = t.$handleEvent(e));
                                },
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.cancel.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v(t._s(t.cancelText))]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          );
        },
        a = [];
    },
    1951: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("1799"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    "1d23": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',
          "",
        ]),
        (t.exports = e);
    },
    2236: function (t, e, n) {
      var i = n("5a43");
      (t.exports = function (t) {
        if (Array.isArray(t)) return i(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "278c": function (t, e, n) {
      var i = n("c135"),
        r = n("9b42"),
        a = n("6613"),
        o = n("c240");
      (t.exports = function (t, e) {
        return i(t) || r(t, e) || a(t, e) || o();
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "2d0d": function (t, e, n) {
      n("4ae1"), n("d3b7"), n("f8c9");
      var i = n("36c6"),
        r = n("6f8f"),
        a = n("6b58");
      (t.exports = function (t) {
        var e = r();
        return function () {
          var n,
            r = i(t);
          if (e) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "36c6": function (t, e, n) {
      function i(e) {
        return (
          (t.exports = i =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          (t.exports.__esModule = !0),
          (t.exports["default"] = t.exports),
          i(e)
        );
      }
      n("131a"),
        n("3410"),
        (t.exports = i),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "3c96": function (t, e, n) {
      n("d9e2"),
        n("d401"),
        (t.exports = function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "431a": function (t, e, n) {
      var i = n("c0fa");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("4b9391fe", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "448a": function (t, e, n) {
      var i = n("2236"),
        r = n("11b0"),
        a = n("6613"),
        o = n("0676");
      (t.exports = function (t) {
        return i(t) || r(t) || a(t) || o();
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "4a4b": function (t, e, n) {
      function i(e, n) {
        return (
          (t.exports = i =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
          (t.exports.__esModule = !0),
          (t.exports["default"] = t.exports),
          i(e, n)
        );
      }
      n("131a"),
        (t.exports = i),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "4ae1": function (t, e, n) {
      var i = n("23e7"),
        r = n("d066"),
        a = n("2ba4"),
        o = n("0538"),
        s = n("5087"),
        c = n("825a"),
        u = n("861d"),
        l = n("7c73"),
        f = n("d039"),
        d = r("Reflect", "construct"),
        p = Object.prototype,
        h = [].push,
        v = f(function () {
          function t() {}
          return !(d(function () {}, [], t) instanceof t);
        }),
        A = !f(function () {
          d(function () {});
        }),
        m = v || A;
      i(
        { target: "Reflect", stat: !0, forced: m, sham: m },
        {
          construct: function (t, e) {
            s(t), c(e);
            var n = arguments.length < 3 ? t : s(arguments[2]);
            if (A && !v) return d(t, e, n);
            if (t == n) {
              switch (e.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
              }
              var i = [null];
              return a(h, i, e), new (a(o, t, i))();
            }
            var r = n.prototype,
              f = l(u(r) ? r : p),
              m = a(t, f, e);
            return u(m) ? m : f;
          },
        }
      );
    },
    "4fce": function (t, e, n) {
      "use strict";
      var i = n("9680"),
        r = n.n(i);
      r.a;
    },
    "5a43": function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "5bc3": function (t, e, n) {
      n("7a82");
      var i = n("a395");
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, i(r.key), r);
        }
      }
      (t.exports = function (t, e, n) {
        return (
          e && r(t.prototype, e),
          n && r(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "5bed": function (t, e, n) {
      "use strict";
      n("7a82"),
        n("498a"),
        n("4de4"),
        n("d3b7"),
        n("d81d"),
        n("ac1f"),
        n("5319"),
        n("00b4"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.trim =
          e.isObject =
          e.isNil =
          e.isNan =
          e.size =
          e.isString =
          e.validateLocale =
          e.splitSentences =
            void 0);
      e.splitSentences = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t
          .replace(/\.+/g, ".|")
          .replace(/\?/g, "?|")
          .replace(/\!/g, "!|")
          .split("|")
          .map(function (t) {
            return a(t);
          })
          .filter(Boolean);
      };
      var i =
        /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
      e.validateLocale = function (t) {
        return "string" === typeof t && i.test(t);
      };
      var r = function (t) {
        return "string" === typeof t || t instanceof String;
      };
      e.isString = r;
      e.size = function (t) {
        return t && Array.isArray(t) && t.length ? t.length : 0;
      };
      e.isNan = function (t) {
        return "number" === typeof t && isNaN(t);
      };
      e.isNil = function (t) {
        return null === t || void 0 === t;
      };
      e.isObject = function (t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      };
      var a = function (t) {
        return r(t) ? t.trim() : "";
      };
      e.trim = a;
    },
    "655b": function (t, e, n) {
      var i = n("8701");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("e805a92a", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    6613: function (t, e, n) {
      n("fb6a"), n("d3b7"), n("a630"), n("3ca3"), n("ac1f"), n("00b4");
      var i = n("5a43");
      (t.exports = function (t, e) {
        if (t) {
          if ("string" === typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(t, e)
              : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "66ac": function (t, e, n) {
      "use strict";
      var i = n("431a"),
        r = n.n(i);
      r.a;
    },
    "6b58": function (t, e, n) {
      n("d9e2"), n("d401");
      var i = n("7037")["default"],
        r = n("3c96");
      (t.exports = function (t, e) {
        if (e && ("object" === i(e) || "function" === typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return r(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "6c09": function (t, e, n) {
      var i = n("a906");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("57b39a22", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6e13": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getRandomIntInclusive = function (t, e) {
          return (
            (t = Math.ceil(t)),
            (e = Math.floor(e)),
            Math.floor(Math.random() * (e - t + 1)) + t
          );
        }),
        (e.timer = function (t, e, n) {
          return new Promise(function (i) {
            var r = 0,
              a = setInterval(function () {
                r++, r >= n && (clearInterval(a), i("执行完毕")), t(r);
              }, e);
          });
        }),
        n("d3b7");
    },
    "6f8f": function (t, e, n) {
      n("d3b7"),
        n("f8c9"),
        n("4ae1"),
        (t.exports = function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "7ec2": function (t, e, n) {
      n("7a82"),
        n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0"),
        n("b636"),
        n("944a"),
        n("0c47"),
        n("23dc"),
        n("3410"),
        n("d9e2"),
        n("d401"),
        n("14d9"),
        n("159b"),
        n("131a"),
        n("26e9"),
        n("fb6a");
      var i = n("7037")["default"];
      function r() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (t.exports =
          r =
            function () {
              return e;
            }),
          (t.exports.__esModule = !0),
          (t.exports["default"] = t.exports);
        var e = {},
          n = Object.prototype,
          a = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          c = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          l = s.toStringTag || "@@toStringTag";
        function f(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          f({}, "");
        } catch (E) {
          f = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function d(t, e, n, i) {
          var r = e && e.prototype instanceof v ? e : v,
            a = Object.create(r.prototype),
            s = new O(i || []);
          return o(a, "_invoke", { value: k(t, n, s) }), a;
        }
        function p(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = d;
        var h = {};
        function v() {}
        function A() {}
        function m() {}
        var y = {};
        f(y, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          x = g && g(g(I([])));
        x && x !== n && a.call(x, c) && (y = x);
        var b = (m.prototype = v.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            f(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          var n;
          o(this, "_invoke", {
            value: function (r, o) {
              function s() {
                return new e(function (n, s) {
                  (function n(r, o, s, c) {
                    var u = p(t[r], t, o);
                    if ("throw" !== u.type) {
                      var l = u.arg,
                        f = l.value;
                      return f && "object" == i(f) && a.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, s, c);
                            },
                            function (t) {
                              n("throw", t, s, c);
                            }
                          )
                        : e.resolve(f).then(
                            function (t) {
                              (l.value = t), s(l);
                            },
                            function (t) {
                              return n("throw", t, s, c);
                            }
                          );
                    }
                    c(u.arg);
                  })(r, o, n, s);
                });
              }
              return (n = n ? n.then(s, s) : s());
            },
          });
        }
        function k(t, e, n) {
          var i = "suspendedStart";
          return function (r, a) {
            if ("executing" === i)
              throw new Error("Generator is already running");
            if ("completed" === i) {
              if ("throw" === r) throw a;
              return T();
            }
            for (n.method = r, n.arg = a; ; ) {
              var o = n.delegate;
              if (o) {
                var s = S(o, n);
                if (s) {
                  if (s === h) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === i) throw ((i = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              i = "executing";
              var c = p(t, e, n);
              if ("normal" === c.type) {
                if (
                  ((i = n.done ? "completed" : "suspendedYield"), c.arg === h)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((i = "completed"), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function S(t, e) {
          var n = e.method,
            i = t.iterator[n];
          if (void 0 === i)
            return (
              (e.delegate = null),
              ("throw" === n &&
                t.iterator["return"] &&
                ((e.method = "return"),
                (e.arg = void 0),
                S(t, e),
                "throw" === e.method)) ||
                ("return" !== n &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              h
            );
          var r = p(i, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), h
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              h);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function M(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function I(t) {
          if (t) {
            var e = t[c];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (a.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: void 0, done: !0 };
        }
        return (
          (A.prototype = m),
          o(b, "constructor", { value: m, configurable: !0 }),
          o(m, "constructor", { value: A, configurable: !0 }),
          (A.displayName = f(m, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === A || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), f(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          w(_.prototype),
          f(_.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = _),
          (e.async = function (t, n, i, r, a) {
            void 0 === a && (a = Promise);
            var o = new _(d(t, n, i, r), a);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          w(b),
          f(b, l, "Generator"),
          f(b, c, function () {
            return this;
          }),
          f(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var i in e) n.push(i);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var i = n.pop();
                  if (i in e) return (t.value = i), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = I),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(M),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    a.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(n, i) {
                return (
                  (o.type = "throw"),
                  (o.arg = t),
                  (e.next = n),
                  i && ((e.method = "next"), (e.arg = void 0)),
                  !!i
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var r = this.tryEntries[i],
                  o = r.completion;
                if ("root" === r.tryLoc) return n("end");
                if (r.tryLoc <= this.prev) {
                  var s = a.call(r, "catchLoc"),
                    c = a.call(r, "finallyLoc");
                  if (s && c) {
                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                  } else if (s) {
                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  a.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var r = i;
                  break;
                }
              }
              r &&
                ("break" === t || "continue" === t) &&
                r.tryLoc <= e &&
                e <= r.finallyLoc &&
                (r = null);
              var o = r ? r.completion : {};
              return (
                (o.type = t),
                (o.arg = e),
                r
                  ? ((this.method = "next"), (this.next = r.finallyLoc), h)
                  : this.complete(o)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), M(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var r = i.arg;
                    M(n);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: I(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      (t.exports = r),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "7f2c5": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          bgColor: { type: String, default: uni.$u.props.gap.bgColor },
          height: { type: [String, Number], default: uni.$u.props.gap.height },
          marginTop: {
            type: [String, Number],
            default: uni.$u.props.gap.marginTop,
          },
          marginBottom: {
            type: [String, Number],
            default: uni.$u.props.gap.marginBottom,
          },
        },
      };
      e.default = i;
    },
    "81a8": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("c4a5"),
        r = n("d8a9");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("4fce");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3fa5722e",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "82de": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("v-uni-view", {
            staticClass: "u-gap",
            style: [this.gapStyle],
          });
        },
        r = [];
    },
    "82f2": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("980e"),
        r = n("0ba4");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("e8b8");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "c0705a46",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    8427: function (t, e, n) {
      var i = n("1d23");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("72ce9180", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "863a": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("82de"),
        r = n("1951");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("b342");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3927d88e",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    8701: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4b87d063], uni-scroll-view[data-v-4b87d063], uni-swiper-item[data-v-4b87d063]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-avatar[data-v-4b87d063]{display:flex;flex-direction:row;align-items:center;justify-content:center}.u-avatar--circle[data-v-4b87d063]{border-radius:100px}.u-avatar--square[data-v-4b87d063]{border-radius:4px}.u-avatar__image--circle[data-v-4b87d063]{border-radius:100px}.u-avatar__image--square[data-v-4b87d063]{border-radius:4px}',
          "",
        ]),
        (t.exports = e);
    },
    "871d": function (t, e, n) {
      var i = n("8c89");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("63de702a", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "8c89": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4762c2a8], uni-scroll-view[data-v-4762c2a8], uni-swiper-item[data-v-4762c2a8]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-reset-button[data-v-4762c2a8]{width:100%}.u-action-sheet[data-v-4762c2a8]{text-align:center}.u-action-sheet__header[data-v-4762c2a8]{position:relative;padding:12px 30px}.u-action-sheet__header__title[data-v-4762c2a8]{font-size:16px;color:#303133;font-weight:700;text-align:center}.u-action-sheet__header__icon-wrap[data-v-4762c2a8]{position:absolute;right:15px;top:15px}.u-action-sheet__description[data-v-4762c2a8]{font-size:13px;color:#909193;margin:18px 15px;text-align:center}.u-action-sheet__item-wrap__item[data-v-4762c2a8]{padding:15px;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-direction:column}.u-action-sheet__item-wrap__item__name[data-v-4762c2a8]{font-size:16px;color:#303133;text-align:center}.u-action-sheet__item-wrap__item__subname[data-v-4762c2a8]{font-size:13px;color:#c0c4cc;margin-top:10px;text-align:center}.u-action-sheet__cancel-text[data-v-4762c2a8]{font-size:16px;color:#606266;text-align:center;padding:16px}.u-action-sheet--hover[data-v-4762c2a8]{background-color:#f2f3f5}',
          "",
        ]),
        (t.exports = e);
    },
    "8dd1": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.opo[data-v-c0705a46]{width:50vw;height:100%;padding:0 %?50?%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff}.opo-btn[data-v-c0705a46]{margin-bottom:10px}.refsst[data-v-c0705a46]{width:100%;height:100%}#canvas[data-v-c0705a46]{position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none;z-index:999999}.redflag[data-v-c0705a46]{width:%?50?%;height:%?50?%}.top-text[data-v-c0705a46]{color:#333!important}.sifter-img-active[data-v-c0705a46]{-webkit-transform:scale(1.2);transform:scale(1.2)}.avatar[data-v-c0705a46]{position:fixed;z-index:999;transition:all .4s cubic-bezier(.25,1,.3,1);pointer-events:none}.tip-box[data-v-c0705a46]{color:#fff;height:%?450?%;width:70vw;border-radius:%?20?%;display:flex;flex-direction:column;align-items:center;padding:%?30?% %?40?%;background-color:rgba(44,44,49,.5019607843137255);-webkit-backdrop-filter:blur(%?20?%);backdrop-filter:blur(%?20?%);box-shadow:0 %?2?% %?24?% 0 #2c2c31}.tip-box .tip-top[data-v-c0705a46]{display:flex;align-items:center;font-size:%?35?%;font-weight:700}.tip-box .tip-text[data-v-c0705a46]{text-align:center;line-height:1.5em;font-size:%?32?%;display:flex;flex-direction:column;align-items:center;margin-top:%?60?%;color:#fff}.container[data-v-c0705a46]{position:fixed;left:0;top:0;bottom:0;right:0;display:flex;flex-direction:column}.container .body[data-v-c0705a46]{position:relative;overflow:hidden;flex:1;padding:%?35?% %?60?% 0;padding-bottom:calc(%?50?% + constant(safe-area-inset-bottom));padding-bottom:calc(%?50?% + env(safe-area-inset-bottom))}.container .body .sifter-box[data-v-c0705a46]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:hsla(0,0%,100%,.21176470588235294);width:%?350?%;height:%?450?%;border-radius:%?20?%;padding:%?50?% %?20?% %?10?%}.container .body .sifter-box .sifter-top-tip[data-v-c0705a46]{width:%?200?%;height:%?65?%;border-radius:%?15?%;font-weight:700;display:flex;align-items:center;justify-content:center;position:absolute;top:%?-35?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background-color:#e9854b;color:#fff}.container .body .sifter-box .sifter-body[data-v-c0705a46]{font-size:%?27?%;color:#fff}.container .body .sifter-box .sifter-body .img-body[data-v-c0705a46]{display:flex;align-items:center;justify-content:center}.container .body .sifter-box .sifter-body .img-body .sifter-img[data-v-c0705a46]{width:%?150?%;height:%?150?%;transition:all .4s cubic-bezier(.25,1,.3,1)}.container .body .sifter-box .sifter-body .sifter-text[data-v-c0705a46]{line-height:1.4em}',
          "",
        ]),
        (t.exports = e);
    },
    "8e83": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("d4e0"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    9680: function (t, e, n) {
      var i = n("aad8");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("7e4ed67a", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "970b": function (t, e, n) {
      n("d9e2"),
        n("d401"),
        (t.exports = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    "97cf": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("983c"),
        r = n("8e83");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("bb27");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "4b87d063",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "980e": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = {
          uNavbar: n("86c4").default,
          uIcon: n("a6a2").default,
          uRow: n("81a8").default,
          uCol: n("d2ea").default,
          ChessboardBlock: n("a183").default,
          uAvatar: n("97cf").default,
          uPopup: n("6c36").default,
          uActionSheet: n("c87c").default,
          uButton: n("e741").default,
        },
        r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticClass: "container" },
            [
              n(
                "u-navbar",
                {
                  attrs: {
                    title: t.title,
                    placeholder: !0,
                    bgColor: "#1f1f27",
                    titleStyle: { color: "#fff" },
                    leftIconColor: "#fff",
                  },
                  on: {
                    leftClick: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.goBack.apply(void 0, arguments);
                    },
                  },
                },
                [
                  n(
                    "v-uni-view",
                    {
                      staticStyle: { display: "flex" },
                      attrs: { slot: "right" },
                      slot: "right",
                    },
                    [
                      t.customId
                        ? n("u-icon", {
                            attrs: {
                              name: "setting",
                              size: "25",
                              color: "#fff",
                            },
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.rightClick.apply(void 0, arguments);
                              },
                            },
                          })
                        : [
                            n("u-icon", {
                              attrs: {
                                name: "reload",
                                size: "25",
                                color: "#fff",
                              },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.rightClick.apply(void 0, arguments);
                                },
                              },
                            }),
                            n("u-icon", {
                              staticStyle: { "margin-left": "10rpx" },
                              attrs: {
                                name: "list",
                                size: "25",
                                color: "#fff",
                              },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.onMenu.apply(void 0, arguments);
                                },
                              },
                            }),
                          ],
                    ],
                    2
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "body" },
                [
                  n(
                    "u-row",
                    {
                      attrs: {
                        gutter: "10rpx",
                        customStyle:
                          "margin-bottom: 15rpx;flex-direction: row-reverse",
                      },
                    },
                    t._l(t.filterDataList.topArr, function (e, i) {
                      return n(
                        "u-col",
                        {
                          key: i,
                          attrs: { span: "2" },
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.clickTip(e);
                            },
                          },
                        },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "topArr refsst" },
                            [
                              n(
                                "ChessboardBlock",
                                {
                                  ref: "topRef",
                                  refInFor: !0,
                                  attrs: {
                                    item: e,
                                    filletDirection: 1 == e.id ? 6 : "",
                                    activeManID: t.walkInfo,
                                    mode: t.mode,
                                  },
                                },
                                [
                                  1 == e.id
                                    ? n("u-icon", {
                                        attrs: {
                                          "custom-style": {
                                            fontWeight: "bold",
                                          },
                                          name: "rewind-left-fill",
                                          color: "#fff",
                                          size: "20",
                                        },
                                      })
                                    : n("v-uni-text", [t._v(t._s(e.id))]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  n(
                    "u-row",
                    { attrs: { justify: "space-between" } },
                    [
                      n(
                        "u-col",
                        { attrs: { span: "2" } },
                        t._l(t.filterDataList.leftArr, function (e, i) {
                          return n(
                            "u-row",
                            {
                              key: i,
                              attrs: {
                                gutter: "10rpx",
                                customStyle: "margin-bottom: 15rpx;",
                              },
                            },
                            [
                              n(
                                "u-col",
                                {
                                  attrs: { span: "12" },
                                  on: {
                                    click: function (n) {
                                      (arguments[0] = n = t.$handleEvent(n)),
                                        t.clickTip(e);
                                    },
                                  },
                                },
                                [
                                  n(
                                    "v-uni-view",
                                    { staticClass: "leftArr refsst" },
                                    [
                                      n(
                                        "ChessboardBlock",
                                        {
                                          ref: "leftArr",
                                          refInFor: !0,
                                          attrs: {
                                            item: e,
                                            activeManID: t.walkInfo,
                                            mode: t.mode,
                                          },
                                        },
                                        [t._v(t._s(e.id))]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                      n(
                        "u-col",
                        { attrs: { span: "2" } },
                        t._l(t.filterDataList.rightArr, function (e, i) {
                          return n(
                            "u-row",
                            {
                              key: i,
                              attrs: {
                                gutter: "10rpx",
                                customStyle: "margin-bottom: 15rpx;",
                              },
                            },
                            [
                              n(
                                "u-col",
                                {
                                  attrs: { span: "12" },
                                  on: {
                                    click: function (n) {
                                      (arguments[0] = n = t.$handleEvent(n)),
                                        t.clickTip(e);
                                    },
                                  },
                                },
                                [
                                  n(
                                    "v-uni-view",
                                    { staticClass: "rightArr refsst" },
                                    [
                                      n(
                                        "ChessboardBlock",
                                        {
                                          ref: "rightArr",
                                          refInFor: !0,
                                          attrs: {
                                            item: e,
                                            filletDirection:
                                              28 == e.id ? 7 : "",
                                            activeManID: t.walkInfo,
                                            mode: t.mode,
                                          },
                                        },
                                        [
                                          28 == e.id
                                            ? n("v-uni-image", {
                                                staticClass: "redflag",
                                                attrs: {
                                                  src: "/static/images/redflag.png",
                                                },
                                              })
                                            : n("v-uni-text", [
                                                t._v(t._s(e.id)),
                                              ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "u-row",
                    {
                      attrs: {
                        gutter: "10rpx",
                        customStyle: "margin-bottom: 15rpx;",
                      },
                    },
                    t._l(t.filterDataList.bottomArr, function (e, i) {
                      return n(
                        "u-col",
                        {
                          key: i,
                          attrs: { span: "2" },
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.clickTip(e);
                            },
                          },
                        },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "bottomArr refsst" },
                            [
                              n(
                                "ChessboardBlock",
                                {
                                  ref: "bottomArr",
                                  refInFor: !0,
                                  attrs: {
                                    item: e,
                                    activeManID: t.walkInfo,
                                    mode: t.mode,
                                  },
                                },
                                [t._v(t._s(e.id))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "sifter-box" },
                    [
                      n("v-uni-view", { staticClass: "sifter-top-tip" }, [
                        t._v("游戏规则"),
                      ]),
                      n(
                        "v-uni-view",
                        { staticClass: "sifter-body" },
                        [
                          n("v-uni-view", { staticClass: "sifter-text" }, [
                            t._v("1.摇骰子自动走棋"),
                          ]),
                          n("v-uni-view", { staticClass: "sifter-text" }, [
                            t._v(
                              "2.每个格子都有任务，也可以自行商量执行其他任务"
                            ),
                          ]),
                          n("v-uni-view", { staticClass: "sifter-text" }, [
                            t._v("3.率先走到终点的一方，获得胜利"),
                          ]),
                          n(
                            "v-uni-view",
                            { staticClass: "img-body" },
                            [
                              n("v-uni-image", {
                                staticClass: "sifter-img",
                                class: { "sifter-img-active": t.sifterActive },
                                attrs: { src: t.sifterImg, mode: "aspectFill" },
                                on: {
                                  click: function (e) {
                                    (arguments[0] = e = t.$handleEvent(e)),
                                      t.rotatingScreen.apply(void 0, arguments);
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n("u-avatar", {
                staticClass: "avatar",
                style: {
                  left: t.positionMan.left + "px",
                  top: t.positionMan.top + "px",
                },
                attrs: { size: t.avaSize, shape: "square", src: t.manAvatar },
              }),
              n("u-avatar", {
                staticClass: "avatar",
                style: {
                  left: t.positionWoman.left + "px",
                  top: t.positionWoman.top + "px",
                },
                attrs: { size: t.avaSize, shape: "square", src: t.woManAvatar },
              }),
              n(
                "v-uni-view",
                { staticStyle: { position: "fixed", "z-index": "9999" } },
                [
                  n(
                    "u-popup",
                    {
                      attrs: {
                        show: t.showTip,
                        mode: "center",
                        customStyle: "backgroundColor:transparent",
                      },
                      on: {
                        close: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.close.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "tip-box" },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "tip-top" },
                            [n("v-uni-text", [t._v("任务")])],
                            1
                          ),
                          n("v-uni-view", {
                            staticClass: "tip-text",
                            domProps: { innerHTML: t._s(t.descriptiveText) },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticStyle: { position: "fixed", "z-index": "9999" } },
                [
                  n("u-action-sheet", {
                    attrs: {
                      show: t.setShow,
                      description: "名称:" + t.title,
                      actions: t.actions,
                      round: 10,
                      cancelText: "取消",
                    },
                    on: {
                      close: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          (t.setShow = !1);
                      },
                      select: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.select.apply(void 0, arguments);
                      },
                    },
                  }),
                ],
                1
              ),
              t.displayCanvas
                ? n("v-uni-canvas", {
                    ref: "canvas",
                    attrs: { id: "canvas", type: "2d", "canvas-id": "canvas" },
                  })
                : t._e(),
              n(
                "v-uni-view",
                { staticStyle: { position: "fixed", "z-index": "9999" } },
                [
                  n(
                    "u-popup",
                    {
                      attrs: {
                        bgColor: "#0000007F",
                        overlayStyle: "background-color:transparent",
                        show: t.show,
                        mode: "right",
                      },
                      on: {
                        close: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), (t.show = !1);
                        },
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "opo" },
                        t._l(t.list, function (e, i) {
                          return n("u-button", {
                            key: e.id,
                            staticClass: "opo-btn",
                            attrs: {
                              disabled: t.mode == e.id,
                              color: e.color,
                              size: "normal",
                              text: e.text,
                            },
                            on: {
                              click: function (n) {
                                (arguments[0] = n = t.$handleEvent(n)),
                                  t.onBtnClick(e);
                              },
                            },
                          });
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [];
    },
    "983c": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { uIcon: n("a6a2").default, "u-Text": n("4dd3").default },
        r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            {
              staticClass: "u-avatar",
              class: ["u-avatar--" + t.shape],
              style: [
                {
                  backgroundColor:
                    t.text || t.icon
                      ? t.randomBgColor
                        ? t.colors[
                            "" !== t.colorIndex
                              ? t.colorIndex
                              : t.$u.random(0, 19)
                          ]
                        : t.bgColor
                      : "transparent",
                  width: t.$u.addUnit(t.size),
                  height: t.$u.addUnit(t.size),
                },
                t.$u.addStyle(t.customStyle),
              ],
              on: {
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.clickHandler.apply(void 0, arguments);
                },
              },
            },
            [
              t._t("default", [
                t.mpAvatar && t.allowMp
                  ? void 0
                  : t.icon
                  ? n("u-icon", {
                      attrs: { name: t.icon, size: t.fontSize, color: t.color },
                    })
                  : t.text
                  ? n("u--text", {
                      attrs: {
                        text: t.text,
                        size: t.fontSize,
                        color: t.color,
                        align: "center",
                        customStyle: "justify-content: center",
                      },
                    })
                  : n("v-uni-image", {
                      staticClass: "u-avatar__image",
                      class: ["u-avatar__image--" + t.shape],
                      style: [
                        {
                          width: t.$u.addUnit(t.size),
                          height: t.$u.addUnit(t.size),
                        },
                      ],
                      attrs: { src: t.avatarUrl || t.defaultUrl, mode: t.mode },
                      on: {
                        error: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.errorHandler.apply(void 0, arguments);
                        },
                      },
                    }),
              ]),
            ],
            2
          );
        },
        a = [];
    },
    "9b42": function (t, e, n) {
      n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0"),
        n("14d9"),
        (t.exports = function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null != n) {
            var i,
              r,
              a,
              o,
              s = [],
              c = !0,
              u = !1;
            try {
              if (((a = (n = n.call(t)).next), 0 === e)) {
                if (Object(n) !== n) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (i = a.call(n)).done) &&
                  (s.push(i.value), s.length !== e);
                  c = !0
                );
            } catch (l) {
              (u = !0), (r = l);
            } finally {
              try {
                if (
                  !c &&
                  null != n["return"] &&
                  ((o = n["return"]()), Object(o) !== o)
                )
                  return;
              } finally {
                if (u) throw r;
              }
            }
            return s;
          }
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    a182: function (t, e, n) {
      "use strict";
      var i = n("6c09"),
        r = n.n(i);
      r.a;
    },
    a183: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e62b"),
        r = n("03d7");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("a182");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "47e17ef2",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    a395: function (t, e, n) {
      var i = n("7037")["default"],
        r = n("e50d");
      (t.exports = function (t) {
        var e = r(t, "string");
        return "symbol" === i(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    a484: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          gutter: { type: [String, Number], default: uni.$u.props.row.gutter },
          justify: { type: String, default: uni.$u.props.row.justify },
          align: { type: String, default: uni.$u.props.row.align },
        },
      };
      e.default = i;
    },
    a576: function (t, e, n) {
      (function (i) {
        var r,
          a,
          o = n("7037").default,
          s = n("ed6d").default,
          c = n("2d0d").default,
          u = n("278c").default,
          l = n("448a").default,
          f = n("7ec2").default,
          d = n("970b").default,
          p = n("5bc3").default;
        n("d3b7"),
          n("cb29"),
          n("159b"),
          n("4de4"),
          n("14d9"),
          n("d9e2"),
          n("d401"),
          n("99af"),
          n("e25e"),
          (r = [e]),
          (a = function (t) {
            "use strict";
            function e(t, e, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(t) {
                  try {
                    c(i.next(t));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(t) {
                  try {
                    c(i["throw"](t));
                  } catch (e) {
                    a(e);
                  }
                }
                function c(t) {
                  t.done
                    ? r(t.value)
                    : (function (t) {
                        return t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            });
                      })(t.value).then(o, s);
                }
                c((i = i.apply(t, e || [])).next());
              });
            }
            var n,
              r = (function () {
                function t(e) {
                  d(this, t), (this.paint = null), (this.paint = e);
                }
                return (
                  p(t, [
                    {
                      key: "fillStyle",
                      set: function (t) {
                        this.paint.fillStyle = t;
                      },
                    },
                    {
                      key: "lineWidth",
                      set: function (t) {
                        this.paint.lineWidth = t;
                      },
                    },
                    {
                      key: "strokeStyle",
                      set: function (t) {
                        this.paint.strokeStyle = t;
                      },
                    },
                    {
                      key: "draw",
                      value: function () {
                        this.paint.draw();
                      },
                    },
                    {
                      key: "strokeRect",
                      value: function (t, e, n, i) {
                        this.paint.strokeRect(t, e, n, i);
                      },
                    },
                    {
                      key: "fillRect",
                      value: function (t, e, n, i) {
                        this.paint.fillRect(t, e, n, i);
                      },
                    },
                    {
                      key: "stroke",
                      value: function () {
                        this.paint.stroke();
                      },
                    },
                    {
                      key: "clearRect",
                      value: function (t, e, n, i) {
                        "undefined" != typeof uni && this.paint.draw
                          ? this.draw()
                          : this.paint.clearRect(t, e, n, i);
                      },
                    },
                    {
                      key: "save",
                      value: function () {
                        this.paint.save();
                      },
                    },
                    {
                      key: "rotate",
                      value: function (t) {
                        this.paint.rotate(t);
                      },
                    },
                    {
                      key: "beginPath",
                      value: function () {
                        this.paint.beginPath();
                      },
                    },
                    {
                      key: "closePath",
                      value: function () {
                        this.paint.closePath();
                      },
                    },
                    {
                      key: "restore",
                      value: function () {
                        this.paint.restore();
                      },
                    },
                    {
                      key: "translate",
                      value: function (t, e) {
                        this.paint.translate(t, e);
                      },
                    },
                    {
                      key: "fill",
                      value: function () {
                        this.paint.fill();
                      },
                    },
                    {
                      key: "arc",
                      value: function (t, e, n, i, r) {
                        this.paint.arc(t, e, n, i, r);
                      },
                    },
                    {
                      key: "scale",
                      value: function (t, e) {
                        this.paint.scale(t, e);
                      },
                    },
                    {
                      key: "moveTo",
                      value: function (t, e) {
                        this.paint.moveTo(t, e);
                      },
                    },
                    {
                      key: "lineTo",
                      value: function (t, e) {
                        this.paint.lineTo(t, e);
                      },
                    },
                    {
                      key: "fillText",
                      value: function (t, e, n, i) {
                        this.paint.fillText(t, e, n, i);
                      },
                    },
                    { key: "update", value: function () {} },
                  ]),
                  t
                );
              })(),
              a = (function () {
                function t() {
                  d(this, t),
                    (this.sampleSize = 60),
                    (this.value = 0),
                    (this._sample_ = []),
                    (this._index_ = 0),
                    (this._lastTick_ = 0);
                }
                return (
                  p(t, [
                    {
                      key: "tick",
                      value: function () {
                        var t = Date;
                        if (
                          ("undefined" != typeof performance &&
                            (t = performance),
                          !this._lastTick_)
                        )
                          return (this._lastTick_ = t.now()), 0;
                        var e = t.now(),
                          n = 0.001 * (e - this._lastTick_),
                          i = 1 / n;
                        this._sample_[this._index_] = i >> 0;
                        for (var r = 0, a = 0; a < this._sample_.length; a++)
                          r += this._sample_[a];
                        return (
                          (r = Math.round(r / this._sample_.length)),
                          (this.value = r),
                          (this._lastTick_ = e),
                          this._index_++,
                          this._index_ === this.sampleSize &&
                            (this._index_ = 0),
                          this.value
                        );
                      },
                    },
                  ]),
                  t
                );
              })(),
              h = (function () {
                function t(e, n) {
                  d(this, t),
                    (this.width = 0),
                    (this.height = 0),
                    (this.width = e),
                    (this.height = n);
                }
                return (
                  p(t, [
                    {
                      key: "toJson",
                      value: function () {
                        return { width: this.width, height: this.height };
                      },
                    },
                    {
                      key: "toArray",
                      value: function () {
                        return [this.width, this.height];
                      },
                    },
                  ]),
                  t
                );
              })();
            (function (t) {
              (t[(t["running"] = 0)] = "running"),
                (t[(t["stop"] = 1)] = "stop");
            })(n || (n = {})),
              (t.CanvasSize = new h(0, 0));
            var v = { grivity: 0.98 },
              A = (function () {
                function o() {
                  d(this, o),
                    (this.canvasSize = new h(300, 300)),
                    (this.animationState = n.stop),
                    (this.onFinished = function () {}),
                    (this.shapeList = []),
                    (this.hasBeenDispose = !1),
                    (this.revoveryShape = []),
                    (this.fpsUtil = new a()),
                    (this.displayFPS = !1);
                }
                return (
                  p(o, [
                    {
                      key: "init",
                      value: function (e, n, i) {
                        e && (this.paint = new r(e)),
                          n &&
                            ((this.canvasSize.width = n.width),
                            (this.canvasSize.height = n.height),
                            (t.CanvasSize = this.canvasSize)),
                          i &&
                            (i.onFinished && (this.onFinished = i.onFinished),
                            i.displayFps && (this.displayFPS = i.displayFps),
                            (v.grivity = i.gravity || 0.3));
                      },
                    },
                    {
                      key: "update",
                      value: function (t) {
                        var e = this;
                        if (this.animationState !== n.stop) {
                          if (
                            (this.paint.clearRect(
                              0,
                              0,
                              this.canvasSize.width,
                              this.canvasSize.height
                            ),
                            0 == this.shapeList.length)
                          )
                            return this.animationFinished();
                          var i = this.canvasSize.width >> 1,
                            r = this.canvasSize.height >> 1;
                          if (
                            (this.shapeList.forEach(function (t, n) {
                              (t.position.x < i &&
                                t.position.x > ~i &&
                                t.position.y < r) ||
                                t.disable(),
                                t.update(e.paint);
                            }),
                            this.recovery(),
                            this.displayFPS)
                          ) {
                            var a = this.fpsUtil.tick();
                            (this.paint.fillStyle = "black"),
                              this.paint.fillText("FPS:" + a, 10, 20);
                          }
                          t(function () {
                            e.update(t);
                          });
                        }
                      },
                    },
                    {
                      key: "animationFinished",
                      value: function () {
                        var t;
                        (this.animationState = n.stop),
                          null === (t = this.onFinished) ||
                            void 0 === t ||
                            t.call(this);
                      },
                    },
                    {
                      key: "recovery",
                      value: function () {
                        var t = this;
                        this.shapeList = this.shapeList.filter(function (e, n) {
                          return e.alive || t.revoveryShape.push(e), e.alive;
                        });
                      },
                    },
                    {
                      key: "recover",
                      value: function (t) {
                        return e(
                          this,
                          void 0,
                          void 0,
                          f().mark(function e() {
                            var n, i, r, a, o;
                            return f().wrap(
                              function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!this.hasBeenDispose) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new Error(
                                        "This CanvasRender has been destroyed!"
                                      );
                                    case 2:
                                      if (
                                        ((n = this.revoveryShape.length),
                                        !(t > n))
                                      ) {
                                        e.next = 9;
                                        break;
                                      }
                                      for (i = [], r = 0; r < n; r++)
                                        i.push(this.revoveryShape.pop());
                                      return e.abrupt(
                                        "return",
                                        Promise.resolve(i)
                                      );
                                    case 9:
                                      for (a = [], o = 0; o < t; o++)
                                        a.push(this.revoveryShape.pop());
                                      return e.abrupt(
                                        "return",
                                        Promise.resolve(a)
                                      );
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this.hasBeenDispose ||
                          ((this.hasBeenDispose = !0),
                          (this.animationState = n.stop),
                          this.paint.clearRect(
                            0,
                            0,
                            this.canvasSize.width,
                            this.canvasSize.height
                          ),
                          (this.paint =
                            this.shapeList =
                            this.revoveryShape =
                            this.fpsUtil =
                              null));
                      },
                    },
                    {
                      key: "run",
                      value: function () {
                        var t = this;
                        if (this.hasBeenDispose)
                          return i.error("CanvasRender has been destroyed!");
                        var e = function (t) {
                          setTimeout(t, 1e3 / 60);
                        };
                        "undefined" != typeof requestIdleCallback &&
                          (e = requestAnimationFrame),
                          e(function () {
                            0 != t.shapeList.length && t.update(e);
                          });
                      },
                    },
                    {
                      key: "add",
                      value: function (t) {
                        var e;
                        this.animationState == n.stop &&
                          ((this.animationState = n.running), this.run()),
                          (e = this.shapeList).push.apply(e, l(t));
                      },
                    },
                  ]),
                  o
                );
              })(),
              m = (function () {
                function e() {
                  d(this, e);
                }
                return (
                  p(e, null, [
                    {
                      key: "transformTo2D",
                      value: function (e, n, i) {
                        return {
                          x: 0.5 * t.CanvasSize.width + i.x + e.x,
                          y: 0.5 * t.CanvasSize.height + i.y + e.y,
                        };
                      },
                    },
                    {
                      key: "rotateX",
                      value: function (t, e) {
                        var n = Math.cos(e),
                          i = Math.sin(e),
                          r = t.y * n - t.z * i,
                          a = t.z * n + t.y * i,
                          o = [t.x, r, a];
                        return o;
                      },
                    },
                    {
                      key: "rotateZ",
                      value: function (t, e) {
                        var n = Math.cos(e),
                          i = Math.sin(e),
                          r = t.x * n - t.y * i,
                          a = t.x * i + t.y * n;
                        return [r, a, t.z];
                      },
                    },
                    {
                      key: "rotateY",
                      value: function (t, e) {
                        var n = Math.cos(e),
                          i = Math.sin(e),
                          r = t.x * n - t.z * i,
                          a = t.z * n + t.x * i;
                        return [r, t.y, a];
                      },
                    },
                  ]),
                  e
                );
              })(),
              y = (function () {
                function t() {
                  d(this, t);
                }
                return (
                  p(t, null, [
                    {
                      key: "rotateX",
                      value: function (e, n) {
                        e.points.forEach(function (e) {
                          var i = m.rotateX(e, t.PI * n);
                          e.setPoint(i);
                        });
                      },
                    },
                    {
                      key: "rotateY",
                      value: function (e, n) {
                        e.points.forEach(function (e) {
                          var i = m.rotateY(e, t.PI * n);
                          e.setPoint(i);
                        });
                      },
                    },
                    {
                      key: "rotateZ",
                      value: function (e, n) {
                        e.points.forEach(function (e) {
                          var i = m.rotateZ(e, t.PI * n);
                          e.setPoint(i);
                        });
                      },
                    },
                  ]),
                  t
                );
              })();
            y.PI = Math.PI / 180;
            var g = (function () {
                function t(e, n) {
                  d(this, t),
                    (this.x = 0),
                    (this.y = 0),
                    (this.x = e),
                    (this.y = n);
                }
                return (
                  p(
                    t,
                    [
                      {
                        key: "add",
                        value: function (t) {
                          (this.x += t.x), (this.y += t.y);
                        },
                      },
                      {
                        key: "sub",
                        value: function (t) {
                          return (this.x -= t.x), (this.y -= t.y), this;
                        },
                      },
                      {
                        key: "mult",
                        value: function (t) {
                          return (this.x *= t.x), (this.y *= t.y), this;
                        },
                      },
                      {
                        key: "div",
                        value: function (t) {
                          return (this.x /= t.x), (this.y /= t.y), this;
                        },
                      },
                      {
                        key: "mag",
                        value: function () {
                          return Math.sqrt(this.x * this.x + this.y * this.y);
                        },
                      },
                      {
                        key: "dist",
                        value: function (t) {
                          var e = this.x - t.x,
                            n = this.y - t.y;
                          return Math.sqrt(e * e + n * n);
                        },
                      },
                      {
                        key: "normalize",
                        value: function () {
                          var t = this.mag();
                          return (this.x /= t), (this.y /= t), this;
                        },
                      },
                      {
                        key: "clamp",
                        value: function (t) {
                          var e = u(t, 2),
                            n = e[0],
                            i = e[1];
                          (this.x = Math.min(Math.max(this.x, i), n)),
                            (this.y = Math.min(Math.max(this.y, i), n));
                        },
                      },
                      {
                        key: "copy",
                        value: function () {
                          return new t(this.x, this.y);
                        },
                      },
                      {
                        key: "set",
                        value: function (t) {
                          (this.x = t.x), (this.y = t.y);
                        },
                      },
                      {
                        key: "setXY",
                        value: function (t, e) {
                          (this.x = t), (this.y = e);
                        },
                      },
                      {
                        key: "toJson",
                        value: function () {
                          return { x: this.x, y: this.y };
                        },
                      },
                      {
                        key: "toArray",
                        value: function () {
                          return [this.x, this.y];
                        },
                      },
                    ],
                    [
                      {
                        key: "dist",
                        value: function (e, n) {
                          var i = t.sub(e, n);
                          return t.mag(i);
                        },
                      },
                      {
                        key: "mag",
                        value: function (t) {
                          return Math.sqrt(t.x * t.x + t.y * t.y);
                        },
                      },
                      {
                        key: "sub",
                        value: function (e, n) {
                          return new t(e.x - n.x, e.y - n.y);
                        },
                      },
                    ]
                  ),
                  t
                );
              })(),
              x = (function (t) {
                s(n, t);
                var e = c(n);
                function n(t, i) {
                  var r;
                  return (
                    d(this, n),
                    (r = e.call(this, t, i)),
                    (r.x = 0),
                    (r.y = 0),
                    (r.z = 0),
                    (r.x = t),
                    (r.y = i),
                    r
                  );
                }
                return (
                  p(n, [
                    {
                      key: "setPoint",
                      value: function (t) {
                        var e = u(t, 3),
                          n = e[0],
                          i = e[1],
                          r = e[2];
                        (this.x = n), (this.y = i), (this.z = r);
                      },
                    },
                    {
                      key: "toArray",
                      value: function () {
                        return [this.x, this.y];
                      },
                    },
                  ]),
                  n
                );
              })(g),
              b = (function () {
                function t() {
                  d(this, t),
                    (this.points = []),
                    (this.position = new g(0, 0)),
                    (this.vector = new g(0, 0)),
                    (this._alive = !0),
                    (this.gravity = v.grivity);
                }
                return (
                  p(t, [
                    {
                      key: "alive",
                      get: function () {
                        return this._alive;
                      },
                    },
                    {
                      key: "relive",
                      value: function () {
                        this._alive = !0;
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        this._alive = !1;
                      },
                    },
                    {
                      key: "update",
                      value: function (t) {
                        this.move(),
                          this.material.update(t, this.position, this);
                        var e = function () {
                          return 20 * Math.random();
                        };
                        y.rotateX(this, e() - this.vector.y),
                          y.rotateY(this, e() - this.vector.x),
                          y.rotateZ(this, e() - this.vector.y);
                      },
                    },
                    {
                      key: "move",
                      value: function () {
                        Math.abs(this.vector.x) > 0.2 && (this.vector.x *= 0.9),
                          Math.abs(this.vector.y) > 1 && (this.vector.y *= 0.9),
                          (this.vector.y += this.gravity),
                          (this.vector.x += Math.random() > 0.5 ? -0.2 : 0.2),
                          this.position.add(this.vector);
                      },
                    },
                    {
                      key: "reset",
                      value: function (t) {
                        this.relive(),
                          (this.material.opacity = 1),
                          this.position.setXY(t.position.x, t.position.y),
                          this.vector.setXY(t.vector.x, t.vector.y);
                      },
                    },
                  ]),
                  t
                );
              })(),
              w = (function () {
                function t(e) {
                  d(this, t),
                    (this.A = new x(0, 0)),
                    (this.points = []),
                    (this.opacity = 1),
                    (this.points = e);
                  var n = _.RandomColor;
                  (this._color = n.color), (this._color_key = n.key);
                }
                return (
                  p(t, [
                    {
                      key: "update",
                      value: function (t, e, n) {
                        if (this.opacity <= 0.05) return n.disable();
                        (this.opacity -= 0.004), this.draw(t, e);
                      },
                    },
                    {
                      key: "draw",
                      value: function (t, e) {
                        var n = this;
                        t.beginPath(),
                          (this._color[3] = this.opacity),
                          (t.fillStyle = _.rgba(this._color)),
                          this.points.forEach(function (i) {
                            var r = m.transformTo2D(i, n.A, e);
                            t.lineTo(r.x, r.y);
                          }),
                          t.closePath(),
                          t.fill();
                      },
                    },
                  ]),
                  t
                );
              })(),
              _ = (function () {
                function t() {
                  d(this, t);
                }
                return (
                  p(t, null, [
                    {
                      key: "setColors",
                      value: function (e) {
                        0 != e.length &&
                          ((t._colors = []),
                          e.forEach(function (e) {
                            e instanceof Array
                              ? t._colors.push(e)
                              : "string" === typeof e &&
                                t._colors.push(k.transformHexToRGB(e));
                          }));
                      },
                    },
                    {
                      key: "RandomColor",
                      get: function () {
                        var e = t._colors,
                          n = (Math.random() * e.length) >> 0,
                          i = e[n];
                        return { key: n, color: l(i) };
                      },
                    },
                    {
                      key: "rgba",
                      value: function (t) {
                        var e = u(t, 4),
                          n = e[0],
                          i = e[1],
                          r = e[2],
                          a = e[3];
                        return "rgba("
                          .concat(n, ",")
                          .concat(i, ",")
                          .concat(r, ",")
                          .concat(a, ")");
                      },
                    },
                  ]),
                  t
                );
              })();
            _._colors = [
              [253, 101, 255],
              [163, 253, 130],
              [183, 128, 253],
              [89, 214, 255],
              [253, 186, 96],
              [251, 253, 113],
            ];
            var k = (function () {
                function t() {
                  d(this, t);
                }
                return (
                  p(t, null, [
                    {
                      key: "transformHexToRGB",
                      value: function (t) {
                        var e = t.length,
                          n = t;
                        if (e < 6) for (var i = 0; i < 6 - e; i++) n += "0";
                        for (var r = [], a = 0; a <= 2; a++) {
                          var o = n.substr(2 * a, 2);
                          r[a] = parseInt(o, 16);
                        }
                        return r;
                      },
                    },
                  ]),
                  t
                );
              })(),
              S = (function (t) {
                s(n, t);
                var e = c(n);
                function n(t) {
                  var i;
                  return (
                    d(this, n),
                    (i = e.call(this)),
                    (i._originPoints = []),
                    (i.scale = 1),
                    (i._originPoints = t.points),
                    (i.scale = t.scale || 1),
                    i.createPosints(t.points),
                    (i.material = new w(i.points)),
                    t.position && (i.position = t.position),
                    t.vector && (i.vector = t.vector),
                    i
                  );
                }
                return (
                  p(n, [
                    {
                      key: "originPoints",
                      get: function () {
                        return this._originPoints;
                      },
                    },
                    {
                      key: "createPosints",
                      value: function () {
                        for (
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            e = t.length,
                            n = 0;
                          n < e;
                          n++
                        ) {
                          var i = u(t[n], 2),
                            r = i[0],
                            a = i[1];
                          1 != this.scale &&
                            ((r *= this.scale), (a *= this.scale)),
                            this.points.push(new x(r, a));
                        }
                      },
                    },
                  ]),
                  n
                );
              })(b),
              C = (function (t) {
                s(n, t);
                var e = c(n);
                function n(t) {
                  var i;
                  return (
                    d(this, n),
                    (i = e.call(this)),
                    (i.size = t.size),
                    i.createPosints(t.count),
                    (i.material = new w(i.points)),
                    (i.vector = t.vector),
                    (i.position = t.position),
                    i
                  );
                }
                return (
                  p(n, [
                    {
                      key: "createPosints",
                      value: function (t) {
                        for (
                          var e = 2 * Math.PI,
                            n = this.size.width >> 1,
                            i = e / t,
                            r = 0;
                          r < t;
                          r++
                        ) {
                          var a = new x(
                            Math.cos(r * i) * n,
                            Math.sin(r * i) * n
                          );
                          this.points.push(a);
                        }
                      },
                    },
                  ]),
                  n
                );
              })(b),
              M = (function () {
                function t() {
                  d(this, t);
                }
                return (
                  p(t, null, [
                    {
                      key: "constructorIs",
                      value: function (t, e) {
                        return "object" == o(t) && t.constructor.name === e;
                      },
                    },
                  ]),
                  t
                );
              })(),
              O = p(function t() {
                d(this, t);
              });
            (O.POLYGON = "Polygon"), (O.CUSTOM = "CustomShape");
            var I = (function () {
                function t(e, n) {
                  d(this, t),
                    (this.shapeTypes = [3, 4, 15]),
                    (this.PI = Math.PI / 180),
                    (this.count = 30),
                    (this.limitAngle = [90, 270]);
                  var r = n || {},
                    a = r.limitAngle,
                    o = r.count,
                    s = r.shapeTypes,
                    c = r.colors;
                  void 0 != e
                    ? ((this.canvasRender = e),
                      (this.limitAngle = a || [0, 360]),
                      (this.count = o || 30),
                      (this.shapeTypes = s || [3, 4, 5, 6, 15]),
                      c && _.setColors(c))
                    : i.error("CanvasRender不能为空");
                }
                return (
                  p(t, [
                    {
                      key: "getRandomClamp",
                      value: function (t) {
                        var e = u(t, 2),
                          n = e[0],
                          i = e[1],
                          r = Math.random() * (i - n + 1) + n;
                        return r;
                      },
                    },
                    {
                      key: "create",
                      value: function (t) {
                        return e(
                          this,
                          void 0,
                          void 0,
                          f().mark(function e() {
                            var n,
                              i,
                              r,
                              a,
                              o,
                              s,
                              c,
                              u,
                              d,
                              p,
                              v,
                              A,
                              m,
                              y,
                              x,
                              b,
                              w,
                              _,
                              k,
                              I,
                              T,
                              E,
                              P,
                              z,
                              j,
                              L;
                            return f().wrap(
                              function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (n = t.x),
                                        (i = t.y),
                                        (r = t.clampforce),
                                        (a = t.radius),
                                        (o = r || [20, 40]),
                                        (s = []),
                                        (e.next = 5),
                                        this.canvasRender.recover(this.count)
                                      );
                                    case 5:
                                      for (
                                        c = e.sent, u = c.length, d = 0;
                                        d < u;
                                        d++
                                      )
                                        (p = c[d]),
                                          (v =
                                            this.getRandomClamp(
                                              this.limitAngle
                                            ) * this.PI),
                                          (A = this.getRandomClamp(o)),
                                          (m = Math.cos(v) * A),
                                          (y = Math.sin(v) * A),
                                          p.reset({
                                            position: new g(n, i),
                                            vector: new g(m, y),
                                          });
                                      s.push.apply(s, l(c)), (x = 0);
                                    case 10:
                                      if (!(x < this.count - u)) {
                                        e.next = 29;
                                        break;
                                      }
                                      if (
                                        ((b =
                                          this.shapeTypes[
                                            (Math.random() *
                                              this.shapeTypes.length) >>
                                              0
                                          ]),
                                        (w =
                                          this.getRandomClamp(this.limitAngle) *
                                          this.PI),
                                        (_ = this.getRandomClamp(o)),
                                        (k = Math.cos(w) * _),
                                        (I = Math.sin(w) * _),
                                        !M.constructorIs(b, O.CUSTOM))
                                      ) {
                                        e.next = 22;
                                        break;
                                      }
                                      return (
                                        (T = b),
                                        (E = T),
                                        (P = new S({
                                          points: E.originPoints,
                                          position: new g(n, i),
                                          vector: new g(k, I),
                                          scale: E.scale,
                                        })),
                                        s.push(P),
                                        e.abrupt("continue", 26)
                                      );
                                    case 22:
                                      (z = b),
                                        (j = z),
                                        (L = new C({
                                          size: new h(a, a),
                                          count: j,
                                          position: new g(n, i),
                                          vector: new g(k, I),
                                        })),
                                        s.push(L);
                                    case 26:
                                      x++, (e.next = 10);
                                      break;
                                    case 29:
                                      return e.abrupt(
                                        "return",
                                        Promise.resolve(s)
                                      );
                                    case 30:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "fire",
                      value: function (t) {
                        return e(
                          this,
                          void 0,
                          void 0,
                          f().mark(function e() {
                            var n;
                            return f().wrap(
                              function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), t;
                                    case 2:
                                      (n = e.sent), this.canvasRender.add(n);
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                      },
                    },
                  ]),
                  t
                );
              })(),
              T = (function () {
                function t(e) {
                  var n = this;
                  d(this, t), (this.render = new A());
                  var i = e.paint,
                    r = e.canvasWidth,
                    a = e.canvasHeight,
                    o = e.displayFps,
                    s = void 0 !== o && o;
                  this.render.init(
                    i,
                    { width: r, height: a },
                    {
                      displayFps: s,
                      onFinished: function () {
                        n.render.dispose();
                      },
                    }
                  );
                }
                return (
                  p(t, [
                    {
                      key: "run",
                      value: function (t) {
                        var e = null !== t && void 0 !== t ? t : {},
                          n = e.shapeTypes,
                          i = void 0 === n ? [3, 4, 5, 10] : n,
                          r = e.x,
                          a = void 0 === r ? 0 : r,
                          o = e.y,
                          s = void 0 === o ? 0 : o,
                          c = e.radius,
                          u = void 0 === c ? 10 : c,
                          l = e.clampforce,
                          f = void 0 === l ? [30, 90] : l,
                          d = e.count,
                          p = void 0 === d ? 90 : d,
                          h = new I(this.render, {
                            count: p,
                            limitAngle: [225, 310],
                            shapeTypes: i,
                          }),
                          v = h.create({
                            x: a,
                            y: s,
                            radius: u,
                            clampforce: f,
                          });
                        h.fire(v);
                      },
                    },
                  ]),
                  t
                );
              })();
            (t.CanvasRender = A),
              (t.Confetti = T),
              (t.ConfettiEjector = I),
              (t.CustomShape = S),
              (t.Polygon = C);
          }.apply(e, r)),
          void 0 === a || (t.exports = a);
      }).call(this, n("5a52")["default"]);
    },
    a877: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            {
              ref: "u-col",
              staticClass: "u-col",
              class: ["u-col-" + t.span],
              style: [t.colStyle],
              on: {
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.clickHandler.apply(void 0, arguments);
                },
              },
            },
            [t._t("default")],
            2
          );
        },
        r = [];
    },
    a906: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.end[data-v-47e17ef2]{background-color:initial!important;background-color:hsla(0,0%,100%,.2)!important;box-shadow:0 %?2?% %?12?% 0 hsla(0,0%,100%,.1)}.myColorInit2[data-v-47e17ef2]{background-color:#ed809f!important}.myColorInit3[data-v-47e17ef2]{background-color:#98d5f6!important}.myColorInit4[data-v-47e17ef2]{background-color:#395b84!important}.myColorInit5[data-v-47e17ef2]{background-color:#b83032!important}.myColorInit6[data-v-47e17ef2]{background-color:salmon!important}.myColorOne2[data-v-47e17ef2]{background-color:#7ebbf1!important}.myColorOne3[data-v-47e17ef2]{background-color:#e9854b!important}.myColorOne4[data-v-47e17ef2]{background-color:#8aa0aa!important}.myColorOne5[data-v-47e17ef2]{background-color:#d2902e!important}.myColorOne6[data-v-47e17ef2]{background-color:#00ced1!important}.myColorTwo2[data-v-47e17ef2]{background-color:#f8db73!important}.myColorTwo3[data-v-47e17ef2]{background-color:#6f91eb!important}.myColorTwo4[data-v-47e17ef2]{background-color:#a3c1ad!important}.myColorTwo5[data-v-47e17ef2]{background-color:#c95c28!important}.myColorTwo6[data-v-47e17ef2]{background-color:gold!important}.round1[data-v-47e17ef2]{border-top-left-radius:%?50?%!important}.round2[data-v-47e17ef2]{border-top-right-radius:%?50?%!important}.round3[data-v-47e17ef2]{border-bottom-right-radius:%?50?%!important}.round4[data-v-47e17ef2]{border-bottom-left-radius:%?50?%!important}.round5[data-v-47e17ef2]{border-top-left-radius:%?50?%!important;border-bottom-left-radius:%?50?%!important}.round6[data-v-47e17ef2]{border-top-right-radius:%?50?%!important;border-bottom-right-radius:%?50?%!important}.round7[data-v-47e17ef2]{border-top-right-radius:%?50?%!important;border-top-left-radius:%?50?%!important}.square[data-v-47e17ef2]{overflow:hidden;border-radius:%?10?%;width:100%;padding-top:100%;\r\n  /* 或者使用 padding-bottom: 100%; */position:relative;transition:.3s all ease-in-out}.square .character[data-v-47e17ef2]{display:flex;align-items:center;justify-content:center;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;height:80%;border-radius:50%;transition:all 1s}.square .square-children[data-v-47e17ef2]{color:#fff;font-weight:700;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}',
          "",
        ]),
        (t.exports = e);
    },
    aad8: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3fa5722e], uni-scroll-view[data-v-3fa5722e], uni-swiper-item[data-v-3fa5722e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-row[data-v-3fa5722e]{display:flex;flex-direction:row}',
          "",
        ]),
        (t.exports = e);
    },
    b342: function (t, e, n) {
      "use strict";
      var i = n("8427"),
        r = n.n(i);
      r.a;
    },
    b977: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(n("c7eb")),
        a = i(n("1da1")),
        o = i(n("fc2f")),
        s = {
          name: "u-col",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, o.default],
          data: function () {
            return { width: 0, parentData: { gutter: 0 }, gridNum: 12 };
          },
          computed: {
            uJustify: function () {
              return "end" == this.justify || "start" == this.justify
                ? "flex-" + this.justify
                : "around" == this.justify || "between" == this.justify
                ? "space-" + this.justify
                : this.justify;
            },
            uAlignItem: function () {
              return "top" == this.align
                ? "flex-start"
                : "bottom" == this.align
                ? "flex-end"
                : this.align;
            },
            colStyle: function () {
              var t = {
                paddingLeft: uni.$u.addUnit(
                  uni.$u.getPx(this.parentData.gutter) / 2
                ),
                paddingRight: uni.$u.addUnit(
                  uni.$u.getPx(this.parentData.gutter) / 2
                ),
                alignItems: this.uAlignItem,
                justifyContent: this.uJustify,
                textAlign: this.textAlign,
                flex: "0 0 ".concat((100 / this.gridNum) * this.span, "%"),
                marginLeft: (100 / 12) * this.offset + "%",
              };
              return uni.$u.deepMerge(t, uni.$u.addStyle(this.customStyle));
            },
          },
          mounted: function () {
            this.init();
          },
          methods: {
            init: function () {
              var t = this;
              return (0, a.default)(
                (0, r.default)().mark(function e() {
                  return (0, r.default)().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.updateParentData(),
                            (e.next = 3),
                            t.parent.getComponentWidth()
                          );
                        case 3:
                          t.width = e.sent;
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            updateParentData: function () {
              this.getParentData("u-row");
            },
            clickHandler: function (t) {
              this.$emit("click");
            },
          },
        };
      e.default = s;
    },
    bb27: function (t, e, n) {
      "use strict";
      var i = n("655b"),
        r = n.n(i);
      r.a;
    },
    be6b: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(n("cd4c")),
        a = i(n("09bd")),
        o = i(n("c500")),
        s = {
          name: "u-action-sheet",
          mixins: [r.default, a.default, uni.$u.mixin, o.default],
          data: function () {
            return {};
          },
          computed: {
            itemStyle: function () {
              var t = this;
              return function (e) {
                var n = {};
                return (
                  t.actions[e].color && (n.color = t.actions[e].color),
                  t.actions[e].fontSize &&
                    (n.fontSize = uni.$u.addUnit(t.actions[e].fontSize)),
                  t.actions[e].disabled && (n.color = "#c0c4cc"),
                  n
                );
              };
            },
          },
          methods: {
            closeHandler: function () {
              this.closeOnClickOverlay && this.$emit("close");
            },
            cancel: function () {
              this.$emit("close");
            },
            selectHandler: function (t) {
              var e = this.actions[t];
              !e ||
                e.disabled ||
                e.loading ||
                (this.$emit("select", e),
                this.closeOnClickAction && this.$emit("close"));
            },
          },
        };
      e.default = s;
    },
    c0fa: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-91d5fe04], uni-scroll-view[data-v-91d5fe04], uni-swiper-item[data-v-91d5fe04]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-col[data-v-91d5fe04]{padding:0;box-sizing:border-box}.u-col-0[data-v-91d5fe04]{width:0}.u-col-1[data-v-91d5fe04]{width:calc(100%/12)}.u-col-2[data-v-91d5fe04]{width:calc(100%/12 * 2)}.u-col-3[data-v-91d5fe04]{width:calc(100%/12 * 3)}.u-col-4[data-v-91d5fe04]{width:calc(100%/12 * 4)}.u-col-5[data-v-91d5fe04]{width:calc(100%/12 * 5)}.u-col-6[data-v-91d5fe04]{width:calc(100%/12 * 6)}.u-col-7[data-v-91d5fe04]{width:calc(100%/12 * 7)}.u-col-8[data-v-91d5fe04]{width:calc(100%/12 * 8)}.u-col-9[data-v-91d5fe04]{width:calc(100%/12 * 9)}.u-col-10[data-v-91d5fe04]{width:calc(100%/12 * 10)}.u-col-11[data-v-91d5fe04]{width:calc(100%/12 * 11)}.u-col-12[data-v-91d5fe04]{width:calc(100%/12 * 12)}',
          "",
        ]),
        (t.exports = e);
    },
    c135: function (t, e) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    c240: function (t, e, n) {
      n("d9e2"),
        n("d401"),
        (t.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    c4a5: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            {
              ref: "u-row",
              staticClass: "u-row",
              style: [t.rowStyle],
              on: {
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.clickHandler.apply(void 0, arguments);
                },
              },
            },
            [t._t("default")],
            2
          );
        },
        r = [];
    },
    c500: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a4d3"),
        n("e01a"),
        n("a9e3");
      var i = {
        props: {
          show: { type: Boolean, default: uni.$u.props.actionSheet.show },
          title: { type: String, default: uni.$u.props.actionSheet.title },
          description: {
            type: String,
            default: uni.$u.props.actionSheet.description,
          },
          actions: { type: Array, default: uni.$u.props.actionSheet.actions },
          cancelText: {
            type: String,
            default: uni.$u.props.actionSheet.cancelText,
          },
          closeOnClickAction: {
            type: Boolean,
            default: uni.$u.props.actionSheet.closeOnClickAction,
          },
          safeAreaInsetBottom: {
            type: Boolean,
            default: uni.$u.props.actionSheet.safeAreaInsetBottom,
          },
          openType: {
            type: String,
            default: uni.$u.props.actionSheet.openType,
          },
          closeOnClickOverlay: {
            type: Boolean,
            default: uni.$u.props.actionSheet.closeOnClickOverlay,
          },
          round: {
            type: [Boolean, String, Number],
            default: uni.$u.props.actionSheet.round,
          },
        },
      };
      e.default = i;
    },
    c87c: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("18f3"),
        r = n("cf2e");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("0381");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "4762c2a8",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    c8c7: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("b977"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    cf2e: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("be6b"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    d2ea: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("a877"),
        r = n("c8c7");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("66ac");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "91d5fe04",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    d4e0: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("c975");
      var r = i(n("e9c6")),
        a = {
          name: "u-avatar",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, r.default],
          data: function () {
            return {
              colors: [
                "#ffb34b",
                "#f2bba9",
                "#f7a196",
                "#f18080",
                "#88a867",
                "#bfbf39",
                "#89c152",
                "#94d554",
                "#f19ec2",
                "#afaae4",
                "#e1b0df",
                "#c38cc1",
                "#72dcdc",
                "#9acdcb",
                "#77b1cc",
                "#448aca",
                "#86cefa",
                "#98d1ee",
                "#73d1f1",
                "#80a7dc",
              ],
              avatarUrl: this.src,
              allowMp: !1,
            };
          },
          watch: {
            src: {
              immediate: !0,
              handler: function (t) {
                (this.avatarUrl = t), t || this.errorHandler();
              },
            },
          },
          computed: {
            imageStyle: function () {
              return {};
            },
          },
          created: function () {
            this.init();
          },
          methods: {
            init: function () {},
            isImg: function () {
              return -1 !== this.src.indexOf("/");
            },
            errorHandler: function () {
              this.avatarUrl =
                this.defaultUrl ||
                "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAcQABAQEAAwEBAAAAAAAAAAAAAAUEAQMGAgcBAQAAAAAAAAAAAAAAAAAAAAAQAAIBAwICBgkDBQAAAAAAAAABAhEDBCEFMVFBYXGREiKBscHRMkJSEyOh4XLxYjNDFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbHFyZ/Dam+yLA+Z2L0Pjtyj2poD4AAAAAAAAAAAAAAAAAAAAAAAAKWFs9y6lcvvwQeqj8z9wFaziY1n/HbUX9XF97A7QAGXI23EvJ1goyfzR0YEfN269jeZ+a03pNe0DIAAAAAAAAAAAAAAAAAAAACvtO3RcVkXlWutuL9YFYAAAAAOJRjKLjJVi9GmB5/csH/mu1h/in8PU+QGMAAAAAAAAAAAAAAAAAAaMDG/6MmMH8C80+xAelSSVFolwQAAAAAAAHVlWI37ErUulaPk+hgeYnCUJuElSUXRrrQHAAAAAAAAAAAAAAAAABa2Oz4bM7r4zdF2ICmAAAAAAAAAg7zZ8GX41wuJP0rRgYAAAAAAAAAAAAAAAAAD0m2R8ODaXU33tsDSAAAAAAAAAlb9HyWZcnJd9PcBHAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmyPt5Ltv4bui/kuAF0AAAAAAADiUlGLlJ0SVW+oDzOXfd/Ind6JPRdS0QHSAAAAAAAAAAAAAAAAAE2nVaNcGB6Lbs6OTao9LsF51z60BrAAAAAABJ3jOVHjW3r/sa9QEgAAAAAAAAAAAAAAAAAAAPu1duWriuW34ZR4MC9hbnZyEoy8l36XwfYBsAAADaSq9EuLAlZ+7xSdrGdW9Hc5dgEdtt1erfFgAAAAAAAAAAAAAAAAADVjbblX6NR8MH80tEBRs7HYivyzlN8lovaBPzduvY0m6eK10TXtAyAarO55lpJK54orolr+4GqO/Xaea1FvqbXvA+Z77kNeW3GPbV+4DJfzcm/pcm3H6Vou5AdAFLC2ed2Pjv1txa8sV8T6wOL+yZEKu1JXFy4MDBOE4ScZxcZLinoB8gAAAAAAAAAAAB242LeyJ+C3GvN9C7QLmJtePYpKS+5c+p8F2IDYAANJqj1T4oCfk7Nj3G5Wn9qXJax7gJ93Z82D8sVNc4v30A6Xg5i42Z+iLfqARwcyT0sz9MWvWBps7LlTf5Grce9/oBTxdtxseklHxT+uWr9AGoAB138ezfj4bsFJdD6V2MCPm7RdtJzs1uW1xXzL3gTgAAAAAAAAADRhYc8q74I6RWs5ckB6GxYtWLat21SK731sDsAAAAAAAAAAAAAAAASt021NO/YjrxuQXT1oCOAAAAAAABzGLlJRSq26JAelwsWONYjbXxcZvmwO8AAAAAAAAAAAAAAAAAAef3TEWPkVivx3NY9T6UBiAAAAAABo2+VmGXblddIJ8eivRUD0oAAAAAAAAAAAAAAAAAAAYt4tKeFKVNYNSXfRgefAAAAAAAAr7VuSSWPedKaW5v1MCsAAAAAAAAAAAAAAAAAAIe6bj96Ts2n+JPzSXzP3ATgAAAAAAAAFbbt1UUrOQ9FpC4/UwK6aaqtU+DAAAAAAAAAAAAAAA4lKMIuUmoxWrb4ARNx3R3q2rLpa4Sl0y/YCcAAAAAAAAAAANmFud7G8r89r6X0dgFvGzLGRGtuWvTF6NAdwAAAAAAAAAAAy5W442PVN+K59EePp5ARMvOv5MvO6QXCC4AZwAAAAAAAAAAAAAcxlKLUotprg1owN+PvORborq+7Hnwl3gUbO74VzRydt8pKn68ANcJwmqwkpLmnUDkAAAAfNy9atqtyagut0AxXt5xIV8Fbj6lRd7Am5G65V6qUvtwfyx94GMAAAAAAAAAAAAAAAAAAAOU2nVOj5gdsc3LiqRvTpyqwOxbnnrhdfpSfrQB7pnv/AGvuS9gHXPMy5/Fem1yq0v0A6W29XqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z";
            },
            clickHandler: function () {
              this.$emit("click", this.name);
            },
          },
        };
      e.default = a;
    },
    d8a9: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e416"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    e416: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("4ea4").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(n("c7eb")),
        a = i(n("1da1"));
      n("a9e3"), n("d3b7");
      var o = i(n("a484")),
        s = {
          name: "u-row",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, o.default],
          data: function () {
            return {};
          },
          computed: {
            uJustify: function () {
              return "end" == this.justify || "start" == this.justify
                ? "flex-" + this.justify
                : "around" == this.justify || "between" == this.justify
                ? "space-" + this.justify
                : this.justify;
            },
            uAlignItem: function () {
              return "top" == this.align
                ? "flex-start"
                : "bottom" == this.align
                ? "flex-end"
                : this.align;
            },
            rowStyle: function () {
              var t = {
                alignItems: this.uAlignItem,
                justifyContent: this.uJustify,
              };
              return (
                this.gutter &&
                  ((t.marginLeft = uni.$u.addUnit(-Number(this.gutter) / 2)),
                  (t.marginRight = uni.$u.addUnit(-Number(this.gutter) / 2))),
                uni.$u.deepMerge(t, uni.$u.addStyle(this.customStyle))
              );
            },
          },
          methods: {
            clickHandler: function (t) {
              this.$emit("click");
            },
            getComponentWidth: function () {
              var t = this;
              return (0, a.default)(
                (0, r.default)().mark(function e() {
                  return (0, r.default)().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), uni.$u.sleep();
                        case 2:
                          return e.abrupt(
                            "return",
                            new Promise(function (e) {
                              t.$uGetRect(".u-row").then(function (t) {
                                e(t.width);
                              });
                            })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        };
      e.default = s;
    },
    e50d: function (t, e, n) {
      n("8172"),
        n("efec"),
        n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d9e2"),
        n("d401"),
        n("a9e3");
      var i = n("7037")["default"];
      (t.exports = function (t, e) {
        if ("object" !== i(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, e || "default");
          if ("object" !== i(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    e62b: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            {
              ref: "square",
              staticClass: "square",
              class: [
                "round0",
                6 == t.item.id ? "round1" : "",
                1 == t.item.id ? "round6" : "",
                15 == t.item.id ? "round4" : "",
                20 == t.item.id ? "round3" : "",
                28 == t.item.id ? "round7" : "",
                t.item.id == t.activeManID ? "animationEffect" : "",
                "end",
                t.myColorOne,
                t.myColorTwo,
                t.myColorInit,
              ],
            },
            [
              n(
                "v-uni-view",
                { staticClass: "square-children" },
                [t._t("default")],
                2
              ),
            ],
            1
          );
        },
        r = [];
    },
    e8b8: function (t, e, n) {
      "use strict";
      var i = n("f44c"),
        r = n.n(i);
      r.a;
    },
    e9c6: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3"),
        n("ac1f"),
        n("00b4");
      var i = {
        props: {
          src: { type: String, default: uni.$u.props.avatar.src },
          shape: { type: String, default: uni.$u.props.avatar.shape },
          size: { type: [String, Number], default: uni.$u.props.avatar.size },
          mode: { type: String, default: uni.$u.props.avatar.mode },
          text: { type: String, default: uni.$u.props.avatar.text },
          bgColor: { type: String, default: uni.$u.props.avatar.bgColor },
          color: { type: String, default: uni.$u.props.avatar.color },
          fontSize: {
            type: [String, Number],
            default: uni.$u.props.avatar.fontSize,
          },
          icon: { type: String, default: uni.$u.props.avatar.icon },
          mpAvatar: { type: Boolean, default: uni.$u.props.avatar.mpAvatar },
          randomBgColor: {
            type: Boolean,
            default: uni.$u.props.avatar.randomBgColor,
          },
          defaultUrl: { type: String, default: uni.$u.props.avatar.defaultUrl },
          colorIndex: {
            type: [String, Number],
            validator: function (t) {
              return uni.$u.test.range(t, [0, 19]) || "" === t;
            },
            default: uni.$u.props.avatar.colorIndex,
          },
          name: { type: String, default: uni.$u.props.avatar.name },
        },
      };
      e.default = i;
    },
    e9d3: function (t, e, n) {
      "use strict";
      n("7a82"),
        n("d9e2"),
        n("d401"),
        n("d3b7"),
        n("159b"),
        n("b64b"),
        n("7db0"),
        n("ac1f"),
        n("5319"),
        n("acd8"),
        n("498a"),
        n("14d9"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = n("5bed");
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var a = (function () {
          function t() {
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.browserSupport =
                "speechSynthesis" in window &&
                "SpeechSynthesisUtterance" in window),
              (this.synthesisVoice = null);
          }
          return (
            (function (t, e, n) {
              e && r(t.prototype, e), n && r(t, n);
            })(t, [
              {
                key: "init",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return new Promise(function (n, r) {
                    t.browserSupport ||
                      r("Your browser does not support Speech Synthesis");
                    var a = (0, i.isNil)(e.listeners) ? {} : e.listeners,
                      o = !!(0, i.isNil)(e.splitSentences) || e.splitSentences,
                      s = (0, i.isNil)(e.lang) ? void 0 : e.lang,
                      c = (0, i.isNil)(e.volume) ? 1 : e.volume,
                      u = (0, i.isNil)(e.rate) ? 1 : e.rate,
                      l = (0, i.isNil)(e.pitch) ? 1 : e.pitch,
                      f = (0, i.isNil)(e.voice) ? void 0 : e.voice;
                    Object.keys(a).forEach(function (t) {
                      var e = a[t];
                      "onvoiceschanged" !== t &&
                        (speechSynthesis[t] = function (t) {
                          e && e(t);
                        });
                    }),
                      t
                        ._loadVoices()
                        .then(function (e) {
                          a["onvoiceschanged"] && a["onvoiceschanged"](e),
                            !(0, i.isNil)(s) && t.setLanguage(s),
                            !(0, i.isNil)(f) && t.setVoice(f),
                            !(0, i.isNil)(c) && t.setVolume(c),
                            !(0, i.isNil)(u) && t.setRate(u),
                            !(0, i.isNil)(l) && t.setPitch(l),
                            !(0, i.isNil)(o) && t.setSplitSentences(o),
                            n({
                              voices: e,
                              lang: t.lang,
                              voice: t.voice,
                              volume: t.volume,
                              rate: t.rate,
                              pitch: t.pitch,
                              splitSentences: t.splitSentences,
                              browserSupport: t.browserSupport,
                            });
                        })
                        .catch(function (t) {
                          r(t);
                        });
                  });
                },
              },
              {
                key: "_fetchVoices",
                value: function () {
                  return new Promise(function (t, e) {
                    setTimeout(function () {
                      var n = speechSynthesis.getVoices();
                      return (0, i.size)(n) > 0
                        ? t(n)
                        : e("Could not fetch voices");
                    }, 100);
                  });
                },
              },
              {
                key: "_loadVoices",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 10;
                  return this._fetchVoices().catch(function (n) {
                    if (0 === e) throw n;
                    return t._loadVoices(e - 1);
                  });
                },
              },
              {
                key: "hasBrowserSupport",
                value: function () {
                  return this.browserSupport;
                },
              },
              {
                key: "setVoice",
                value: function (t) {
                  var e,
                    n = speechSynthesis.getVoices();
                  if (
                    ((0, i.isString)(t) &&
                      (e = n.find(function (e) {
                        return e.name === t;
                      })),
                    (0, i.isObject)(t) && (e = t),
                    !e)
                  )
                    throw "Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.";
                  this.synthesisVoice = e;
                },
              },
              {
                key: "setLanguage",
                value: function (t) {
                  if (((t = t.replace("_", "-")), !(0, i.validateLocale)(t)))
                    throw "Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)";
                  this.lang = t;
                },
              },
              {
                key: "setVolume",
                value: function (t) {
                  if (
                    ((t = parseFloat(t)),
                    !(!(0, i.isNan)(t) && t >= 0 && t <= 1))
                  )
                    throw "Error setting volume. Please verify your volume value is a number between 0 and 1.";
                  this.volume = t;
                },
              },
              {
                key: "setRate",
                value: function (t) {
                  if (
                    ((t = parseFloat(t)),
                    !(!(0, i.isNan)(t) && t >= 0 && t <= 10))
                  )
                    throw "Error setting rate. Please verify your volume value is a number between 0 and 10.";
                  this.rate = t;
                },
              },
              {
                key: "setPitch",
                value: function (t) {
                  if (
                    ((t = parseFloat(t)),
                    !(!(0, i.isNan)(t) && t >= 0 && t <= 2))
                  )
                    throw "Error setting pitch. Please verify your pitch value is a number between 0 and 2.";
                  this.pitch = t;
                },
              },
              {
                key: "setSplitSentences",
                value: function (t) {
                  this.splitSentences = t;
                },
              },
              {
                key: "speak",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, r) {
                    var a = t.text,
                      o = t.listeners,
                      s = void 0 === o ? {} : o,
                      c = t.queue,
                      u = void 0 === c || c,
                      l = (0, i.trim)(a);
                    (0, i.isNil)(l) && n(), !u && e.cancel();
                    var f = [],
                      d = e.splitSentences ? (0, i.splitSentences)(l) : [l];
                    d.forEach(function (t, a) {
                      var o = a === (0, i.size)(d) - 1,
                        c = new SpeechSynthesisUtterance();
                      e.synthesisVoice && (c.voice = e.synthesisVoice),
                        e.lang && (c.lang = e.lang),
                        e.volume && (c.volume = e.volume),
                        e.rate && (c.rate = e.rate),
                        e.pitch && (c.pitch = e.pitch),
                        (c.text = t),
                        Object.keys(s).forEach(function (t) {
                          var e = s[t];
                          c[t] = function (i) {
                            e && e(i),
                              "onerror" === t &&
                                r({
                                  utterances: f,
                                  lastUtterance: c,
                                  error: i,
                                }),
                              "onend" === t &&
                                o &&
                                n({ utterances: f, lastUtterance: c });
                          };
                        }),
                        f.push(c),
                        speechSynthesis.speak(c);
                    });
                  });
                },
              },
              {
                key: "pending",
                value: function () {
                  return speechSynthesis.pending;
                },
              },
              {
                key: "paused",
                value: function () {
                  return speechSynthesis.paused;
                },
              },
              {
                key: "speaking",
                value: function () {
                  return speechSynthesis.speaking;
                },
              },
              {
                key: "pause",
                value: function () {
                  speechSynthesis.pause();
                },
              },
              {
                key: "resume",
                value: function () {
                  speechSynthesis.resume();
                },
              },
              {
                key: "cancel",
                value: function () {
                  speechSynthesis.cancel();
                },
              },
            ]),
            t
          );
        })(),
        o = a;
      e.default = o;
    },
    ed6d: function (t, e, n) {
      n("d9e2"), n("d401"), n("7a82");
      var i = n("4a4b");
      (t.exports = function (t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && i(t, e);
      }),
        (t.exports.__esModule = !0),
        (t.exports["default"] = t.exports);
    },
    ef37: function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("d3b7"),
          n("159b"),
          n("b64b"),
          n("14d9"),
          n("4e82"),
          n("ac1f"),
          n("4de4"),
          n("7db0"),
          n("99af");
        var r = i(n("c7eb")),
          a = i(n("1da1")),
          o = i(n("5530")),
          s = n("aaec"),
          c = n("6e13"),
          u = n("26cb"),
          l = i(n("e9d3")),
          f = n("a576"),
          d = new f.CanvasRender(),
          p = new f.CanvasRender(),
          h = [
            "/static/chess/sifter1.gif",
            "/static/chess/sifter2.gif",
            "/static/chess/sifter3.gif",
            "/static/chess/sifter4.gif",
            "/static/chess/sifter5.gif",
            "/static/chess/sifter6.gif",
          ],
          v = {
            data: function () {
              return {
                list: [],
                show: !1,
                manAvatar: "/static/avatar/man.png",
                woManAvatar: "/static/avatar/woman.png",
                filterDataList: [],
                walkInfo: 0,
                showTip: !1,
                sifterImg: h[0],
                location: { man: 1, woman: 1 },
                party: 1,
                positionMan: { top: 0, left: 375 },
                positionWoman: { top: 0, left: 0 },
                flag: !1,
                sifterActive: !1,
                descriptiveText: "",
                avaSize: 0,
                customId: "",
                title: "基础模式",
                setShow: !1,
                actions: [
                  { id: 1, name: "重玩" },
                  { id: 2, name: "编辑规则" },
                  { id: 3, name: "删除", subname: "注意，删除后不可恢复" },
                ],
                speech: null,
                speechFlag: !0,
                speechInitFlag: !1,
                mp3: null,
                mode: 1,
                displayCanvas: !0,
                canvasSize: { width: 0, height: 0 },
                canvas: null,
                loading: !0,
              };
            },
            computed: (0, o.default)(
              (0, o.default)(
                {},
                (0, u.mapState)([
                  "voiceOpen",
                  "userCustomList",
                  "soundFlag",
                  "lockVip",
                ])
              ),
              {},
              {
                mapFilterDataList: function () {
                  var t = this,
                    e = [];
                  return (
                    Object.keys(this.filterDataList).forEach(function (n) {
                      t.filterDataList[n].forEach(function (t) {
                        e.push(t);
                      });
                    }),
                    (e = e.sort(function (t, e) {
                      return t.id - e.id;
                    })),
                    e
                  );
                },
              }
            ),
            onReady: function () {
              this.initRenders();
            },
            beforeDestroy: function () {
              this.voiceOpen && (this.speech.cancel(), (this.speech = null)),
                this.soundFlag && (this.mp3.pause(), (this.mp3 = null)),
                this.dispose_anvasRender();
            },
            onLoad: function (t) {
              this.initVip(),
                this.voiceOpen && this.initSpeechInit(),
                this.soundFlag && this.initAudio(),
                (this.mode = t.mode),
                (this.customId = t.customId),
                this.initLocal();
            },
            methods: (0, o.default)(
              (0, o.default)({}, (0, u.mapMutations)(["setUserCustomList"])),
              {},
              {
                onBtnClick: function (t) {
                  t.id &&
                    uni.redirectTo({
                      url: "/pagesA/chess/chess?mode=".concat(t.id),
                    });
                },
                initVip: function () {
                  var t = [
                    { id: 1, text: "基础模式", color: "#3498DB" },
                    { id: 2, text: "恋爱版", color: "#F39C12" },
                    
                  ];
                  this.lockVip &&
                    t.push(
                      { id: 3, text: "情侣版", color: "#9B59B6" },
                      { id: 4, text: "高级版", color: "rgb(10, 185, 156)" },
                      { id: 5, text: "私密版", color: "#FF00FF" },
                      { id: 6, text: "组合模式", color: "#E67E22" }
                    ),
                    (this.list = t);
                },
                onMenu: function () {
                  this.show = !this.show;
                },
                getPainter: function () {
                  var t = this;
                  return (0, a.default)(
                    (0, r.default)().mark(function e() {
                      return (0, r.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(
                                  (function () {
                                    var e = (0, a.default)(
                                      (0, r.default)().mark(function e(n) {
                                        var i;
                                        return (0, r.default)().wrap(function (
                                          e
                                        ) {
                                          while (1)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (i = uni.createSelectorQuery()),
                                                  i
                                                    .select("#canvas")
                                                    .fields({
                                                      node: !0,
                                                      size: !0,
                                                    })
                                                    .exec(
                                                      (function () {
                                                        var e = (0, a.default)(
                                                          (0, r.default)().mark(
                                                            function e(i) {
                                                              var a;
                                                              return (0,
                                                              r.default)().wrap(
                                                                function (e) {
                                                                  while (1)
                                                                    switch (
                                                                      (e.prev =
                                                                        e.next)
                                                                    ) {
                                                                      case 0:
                                                                        if (
                                                                          ((a =
                                                                            i[0]
                                                                              .node),
                                                                          a &&
                                                                            n(
                                                                              a.getContext(
                                                                                "2d"
                                                                              )
                                                                            ),
                                                                          !(
                                                                            (null !==
                                                                              a &&
                                                                              void 0 !==
                                                                                a &&
                                                                              a.width) ||
                                                                            (null !==
                                                                              a &&
                                                                              void 0 !==
                                                                                a &&
                                                                              a.height)
                                                                          ))
                                                                        ) {
                                                                          e.next = 8;
                                                                          break;
                                                                        }
                                                                        return (
                                                                          (e.next = 5),
                                                                          uni.getSystemInfo()
                                                                        );
                                                                      case 5:
                                                                        e
                                                                          .sent[1]
                                                                          .pixelRatio,
                                                                          (a.width =
                                                                            i[0].width),
                                                                          (a.height =
                                                                            i[0].height);
                                                                      case 8:
                                                                        (t.canvas =
                                                                          a),
                                                                          n(
                                                                            uni.createCanvasContext(
                                                                              "canvas",
                                                                              t
                                                                            )
                                                                          );
                                                                      case 10:
                                                                      case "end":
                                                                        return e.stop();
                                                                    }
                                                                },
                                                                e
                                                              );
                                                            }
                                                          )
                                                        );
                                                        return function (t) {
                                                          return e.apply(
                                                            this,
                                                            arguments
                                                          );
                                                        };
                                                      })()
                                                    );
                                              case 2:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                dispose_anvasRender: function () {
                  d.dispose(), p.dispose(), (this.displayCanvas = !1);
                },
                initRenders: function () {
                  var e = this;
                  return (0, a.default)(
                    (0, r.default)().mark(function n() {
                      var i, a, o, s;
                      return (0, r.default)().wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), e.getPainter();
                            case 2:
                              return (
                                (i = n.sent), (n.next = 5), e.getCanvasSize()
                              );
                            case 5:
                              (a = n.sent),
                                uni.createCanvasContext("canvas"),
                                (o = a.width),
                                (s = a.height),
                                (e.canvasSize.width = o),
                                (e.canvasSize.height = s),
                                d.init(
                                  i,
                                  { width: a.width, height: a.height },
                                  { onFinished: function () {}, grivaty: 0.5 }
                                ),
                                p.init(
                                  i,
                                  { width: a.width, height: a.height },
                                  {
                                    onFinished: function () {
                                      t.log("完成");
                                    },
                                    grivaty: 0.5,
                                  }
                                );
                            case 12:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                getCanvasSize: function () {
                  return new Promise(function (t, e) {
                    uni
                      .createSelectorQuery()
                      .select("#canvas")
                      .boundingClientRect(function (e) {
                        t(e);
                      })
                      .exec();
                  });
                },
                easy: function () {
                  var t = this;
                  return (0, a.default)(
                    (0, r.default)().mark(function e() {
                      var n, i, a, o;
                      return (0, r.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), t.getPainter();
                            case 2:
                              return (
                                (n = e.sent), (e.next = 5), t.getCanvasSize()
                              );
                            case 5:
                              (i = e.sent),
                                (a = i.width),
                                (o = i.height),
                                (t.canvasSize.width = a),
                                (t.canvasSize.height = o),
                                new f.Confetti({
                                  paint: n,
                                  canvasWidth: i.width,
                                  canvasHeight: i.height,
                                }).run({});
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                sides: function () {
                  var t = new f.ConfettiEjector(d, {
                      limitAngle: [-90, 0],
                      count: 60,
                    }),
                    e = new f.ConfettiEjector(d, {
                      limitAngle: [180, 270],
                      count: 60,
                    }),
                    n = t.create({
                      x: -this.canvasSize.width / 2 + 20,
                      y: -200,
                      clampforce: [10, 60],
                      radius: 10,
                    }),
                    i = e.create({
                      x: this.canvasSize.width / 2 - 20,
                      y: -200,
                      clampforce: [10, 60],
                      radius: 10,
                    });
                  t.fire(n), e.fire(i);
                },
                initAudio: function () {
                  this.mp3 = new Audio("/static/audio/shaizi.mp3");
                },
                initSpeechInit: function () {
                  var t = this;
                  (this.speech = new l.default()),
                    this.speech
                      .init({ volume: 1, lang: "zh-CN", rate: 1.2, pitch: 1.3 })
                      .then(function () {
                        t.speechFlag = t.speech.hasBrowserSupport();
                      });
                },
                select: function (t) {
                  var e = this;
                  1 != t.id
                    ? 2 != t.id
                      ? 3 != t.id ||
                        uni.showModal({
                          content: "确定要删除吗?",
                          success: function (t) {
                            if (t.confirm) {
                              var n = e.userCustomList.filter(function (t) {
                                return t.id != e.customId;
                              });
                              e.setUserCustomList(n),
                                uni.showToast({
                                  title: "".concat(e.title, " 删除成功!"),
                                  icon: "none",
                                }),
                                setTimeout(function () {
                                  uni.reLaunch({ url: "/" });
                                }, 1e3);
                            }
                          },
                        })
                      : uni.reLaunch({
                          url: "/pagesA/custom/custom?editId=".concat(
                            this.customId
                          ),
                        })
                    : this.initLocal();
                },
                rightClick: function () {
                  var t = this;
                  this.customId
                    ? (this.setShow = !0)
                    : uni.showModal({
                        content: "是否确定重新开始？",
                        success: function (e) {
                          e.confirm && t.initLocal();
                        },
                      });
                },
                goBack: function () {
                  uni.reLaunch({ url: "/" });
                },
                close: function () {
                  (this.location.woman >= 28 || this.location.man >= 28) &&
                    this.initLocal(),
                    (this.showTip = !1);
                },
                clickTip: function (t) {
                  1 != t.id &&
                    ((this.descriptiveText = t.text), (this.showTip = !0));
                },
                initLocal: function () {
                  var t = this;
                  if (this.customId && this.userCustomList.length) {
                    var e = this.userCustomList.find(function (e) {
                      return e.id == t.customId;
                    });
                    if (e)
                      (this.title = e.title),
                        uni.setNavigationBarTitle({ title: e.title }),
                        (this.filterDataList = this.$_.cloneDeep(
                          (0, s.filterCustomList)(e.arr)
                        ));
                    else {
                      var n = this.$_.cloneDeep(
                        (0, s.filterDataList)(this.mode)
                      );
                      (this.title = n.title), (this.filterDataList = n.arr);
                    }
                  } else {
                    var i = this.$_.cloneDeep((0, s.filterDataList)(this.mode));
                    (this.title = i.title), (this.filterDataList = i.arr);
                  }
                  (this.party = (0, c.getRandomIntInclusive)(0, 1)),
                    (this.location.man = 1),
                    (this.location.woman = 1);
                  setTimeout(
                    (0, a.default)(
                      (0, r.default)().mark(function e() {
                        return (0, r.default)().wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  t.getPosition(
                                    ".topArr",
                                    t.filterDataList.topArr
                                  )
                                );
                              case 2:
                                return (
                                  (t.filterDataList.topArr = e.sent),
                                  (e.next = 5),
                                  t.getPosition(
                                    ".leftArr",
                                    t.filterDataList.leftArr
                                  )
                                );
                              case 5:
                                return (
                                  (t.filterDataList.leftArr = e.sent),
                                  (e.next = 8),
                                  t.getPosition(
                                    ".rightArr",
                                    t.filterDataList.rightArr
                                  )
                                );
                              case 8:
                                return (
                                  (t.filterDataList.rightArr = e.sent),
                                  (e.next = 11),
                                  t.getPosition(
                                    ".bottomArr",
                                    t.filterDataList.bottomArr
                                  )
                                );
                              case 11:
                                (t.filterDataList.bottomArr = e.sent),
                                  (t.avaSize = 40),
                                  t.changeLocal(1),
                                  t.changeLocal(1, 1);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    200
                  );
                },
                getPosition: function (t, e) {
                  var n = this;
                  return new Promise(function (i, r) {
                    var a = [],
                      s = uni.createSelectorQuery().in(n).selectAll(t);
                    s.boundingClientRect(function (t) {
                      e.forEach(function (e, n) {
                        var i = (t[n].width - 40) / 2;
                        a.push(
                          (0, o.default)(
                            (0, o.default)({}, e),
                            {},
                            { left: t[n].left + i, top: t[n].top + i }
                          )
                        );
                      }),
                        i(a);
                    }).exec();
                  });
                },
                changeLocal: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n = this.mapFilterDataList.find(function (e) {
                      return e.id == t;
                    });
                  n &&
                    (1 == e
                      ? ((this.positionWoman.top = n.top),
                        (this.positionWoman.left = n.left))
                      : ((this.positionMan.top = n.top),
                        (this.positionMan.left = n.left)));
                },
                playVoice: function (t) {
                  this.voiceOpen &&
                    this.speechFlag &&
                    this.speech.speak({ text: t });
                },
                rotatingScreen: function () {
                  var t = this;
                  this.voiceOpen || (this.speechInitFlag = !0),
                    this.speechInitFlag &&
                      this.soundFlag &&
                      ((this.mp3.loop = !1), this.mp3.play()),
                    !this.speechInitFlag &&
                      this.voiceOpen &&
                      (this.speech.speak({ text: "游戏开始" }),
                      (this.speechInitFlag = !0));
                  var e = this;
                  if (!this.flag) {
                    this.flag = !0;
                    var n = (0, c.getRandomIntInclusive)(1, 6);
                    (this.sifterImg = ""
                      .concat(h[n - 1], "?")
                      .concat(new Date().getTime())),
                      1 === this.party
                        ? this.location.woman + n >= 28 &&
                          (n = 28 - this.location.woman)
                        : this.location.man + n >= 28 &&
                          (n = 28 - this.location.man),
                      (this.sifterActive = !0);
                    var i = setTimeout(function () {
                        clearTimeout(i), (t.sifterActive = !1);
                      }, 900),
                      r = setTimeout(function () {
                        clearTimeout(r),
                          1 === t.party
                            ? (0, c.timer)(
                                function (t) {
                                  if (
                                    (e.location.woman++,
                                    (e.walkInfo = e.location.woman),
                                    e.changeLocal(e.location.woman, 1),
                                    e.location.woman >= 28)
                                  )
                                    return (
                                      (e.descriptiveText =
                                        "<view>女方胜利</view><view>可要求对方做任何事情</view>"),
                                      (e.showTip = !0),
                                      void setTimeout(function () {
                                        e.sides();
                                      }, 400)
                                    );
                                },
                                400,
                                n
                              ).then(function (e) {
                                (t.walkInfo = 0),
                                  (t.party = 0),
                                  (t.flag = !1),
                                  t.location.woman >= 28 ||
                                    ((t.descriptiveText =
                                      t.mapFilterDataList[
                                        t.location.woman - 1
                                      ].text),
                                    (t.showTip = !0),
                                    t.playVoice(t.descriptiveText));
                              })
                            : (0, c.timer)(
                                function (t) {
                                  if (
                                    (e.location.man++,
                                    (e.walkInfo = e.location.man),
                                    e.changeLocal(e.location.man, 0),
                                    e.location.man >= 28)
                                  )
                                    return (
                                      (e.descriptiveText =
                                        "<view>男方胜利</view><view>可要求对方做任何事情</view>"),
                                      (e.showTip = !0),
                                      void setTimeout(function () {
                                        e.sides();
                                      }, 400)
                                    );
                                },
                                400,
                                n
                              ).then(function (e) {
                                (t.walkInfo = 0),
                                  (t.party = 1),
                                  (t.flag = !1),
                                  t.location.man >= 28 ||
                                    ((t.descriptiveText =
                                      t.mapFilterDataList[
                                        t.location.man - 1
                                      ].text),
                                    (t.showTip = !0),
                                    t.playVoice(t.descriptiveText));
                              });
                      }, 1600);
                  }
                },
              }
            ),
          };
        e.default = v;
      }).call(this, n("5a52")["default"]);
    },
    f44c: function (t, e, n) {
      var i = n("8dd1");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("910bb2cc", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f8c9: function (t, e, n) {
      var i = n("23e7"),
        r = n("da84"),
        a = n("d44e");
      i({ global: !0 }, { Reflect: {} }), a(r.Reflect, "Reflect", !0);
    },
    fc2f: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          span: { type: [String, Number], default: uni.$u.props.col.span },
          offset: { type: [String, Number], default: uni.$u.props.col.offset },
          justify: { type: String, default: uni.$u.props.col.justify },
          align: { type: String, default: uni.$u.props.col.align },
          textAlign: { type: String, default: uni.$u.props.col.textAlign },
        },
      };
      e.default = i;
    },
    fc8a: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3");
      var i = {
        props: {
          filletDirection: { type: [String, Number], default: 0 },
          item: { type: Object, default: {} },
          activeManID: { type: [String, Number], default: 0 },
          mode: { type: [String, Number], defalut: "" },
        },
        data: function () {
          return { myColorOne: "", myColorTwo: "", myColorInit: "" };
        },
        created: function () {
          this.classFilter();
        },
        methods: {
          classFilter: function () {
            var t = this;
            if (this.mode > 1)
              if (this.item.id % 2 === 0)
                var e = setTimeout(function () {
                  clearTimeout(e), (t.myColorOne = "myColorOne".concat(t.mode));
                }, 200);
              else if (this.item.id % 3 === 0)
                var n = setTimeout(function () {
                  clearTimeout(n), (t.myColorTwo = "myColorTwo".concat(t.mode));
                }, 400);
              else
                var i = setTimeout(function () {
                  clearTimeout(i),
                    (t.myColorInit = "myColorInit".concat(t.mode));
                }, 600);
          },
        },
      };
      e.default = i;
    },
  },
]);
