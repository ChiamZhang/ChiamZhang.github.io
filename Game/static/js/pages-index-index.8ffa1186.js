(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-index-index"],
  {
    "001b": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return n;
      }),
        i.d(t, "c", function () {
          return r;
        }),
        i.d(t, "a", function () {
          return a;
        });
      var a = {
          uNavbar: i("86c4").default,
          uIcon: i("a6a2").default,
          uPopup: i("6c36").default,
          uSwitch: i("f3b1").default,
          uModal: i("1dfe").default,
          uCodeInput: i("851d").default,
          akiParticles: i("d79a").default,
        },
        n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "v-uni-view",
            { staticClass: "body" },
            [
              i(
                "u-navbar",
                {
                  staticClass: "navbar",
                  attrs: {
                    placeholder: !0,
                    title: "情侣飞行棋 " + e.v,
                    titleStyle: { color: "#fff" },
                  },
                  on: {
                    rightClick: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.rightClick.apply(void 0, arguments);
                    },
                  },
                  scopedSlots: e._u([
                    {
                      key: "left",
                      fn: function () {
                        return [i("v-uni-view")];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                [
                  i("u-icon", {
                    attrs: {
                      slot: "right",
                      name: "setting",
                      size: "20",
                      color: "#fff",
                    },
                    slot: "right",
                  }),
                ],
                1
              ),
              i("v-uni-view", { staticClass: "bottom-bg" }),
              i(
                "v-uni-view",
                { staticClass: "main" },
                e._l(e.list, function (t) {
                  return i(
                    "v-uni-view",
                    {
                      key: t.id,
                      staticClass: "btn",
                      class: { active: t.goFlag },
                      attrs: { "hover-class": "hover-class" },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = e.$handleEvent(i)), e.weGo(t);
                        },
                      },
                    },
                    [
                      i("v-uni-view", { staticClass: "my-text" }, [
                        e._v(e._s(t.text)),
                      ]),
                      t.hot
                        ? i("v-uni-view", { staticClass: "hot" }, [e._v("HOT")])
                        : e._e(),
                      t.lockFlag && !e.lockVip
                        ? i("u-icon", {
                            attrs: {
                              name: "lock",
                              color: "#919398",
                              size: "16",
                            },
                          })
                        : e._e(),
                    ],
                    1
                  );
                }),
                1
              ),
              i(
                "v-uni-view",
                { staticStyle: { position: "fixed", "z-index": "9999" } },
                [
                  i(
                    "u-popup",
                    {
                      attrs: {
                        show: e.setShow,
                        mode: "center",
                        customStyle: "backgroundColor:transparent",
                      },
                      on: {
                        close: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            (e.setShow = !1);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "tip-box" },
                            [
                              i("v-uni-view", { staticClass: "tip-text" }, [
                                e._v("语音提示"),
                              ]),
                              i("u-switch", {
                                attrs: {
                                  value: e.voiceOpen,
                                  activeColor: "#e47470",
                                },
                                on: {
                                  change: function (t) {
                                    (arguments[0] = t = e.$handleEvent(t)),
                                      e.voiceOpenChange.apply(
                                        void 0,
                                        arguments
                                      );
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                           
                          i(
                            "v-uni-view",
                            {
                              staticClass: "tip-box",
                              attrs: { "hover-class": "hover-class" },
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.goVersion.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              i("v-uni-view", { staticClass: "tip-text" }, [
                                e._v("版本"),
                              ]),
                              i("u-icon", {
                                attrs: {
                                  name: "arrow-right",
                                  label: e.v,
                                  labelPos: "left",
                                  labelColor: "#fff",
                                  color: "#fff",
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
              i(
                "v-uni-view",
                { staticStyle: { position: "fixed", "z-index": "9999" } },
                [
                  i(
                    "u-modal",
                    {
                      attrs: {
                        show: e.pswShow,
                        confirmText: "关闭",
                        title: "内容过于** 请输入识别码",
                      },
                      on: {
                        confirm: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            (e.pswShow = !1);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        [
                          i("u-code-input", {
                            attrs: { focus: !0, bold: !0, dot: !0 },
                            on: {
                              finish: function (t) {
                                (arguments[0] = t = e.$handleEvent(t)),
                                  e.finish.apply(void 0, arguments);
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
              i(
                "v-uni-view",
                { staticStyle: { position: "fixed", "z-index": "9999" } },
                [
                  i(
                    "u-popup",
                    {
                      attrs: {
                        show: e.customShow,
                        mode: "center",
                        customStyle: "backgroundColor:transparent",
                      },
                      on: {
                        close: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            (e.customShow = !1);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        [
                          e._l(e.userCustomList, function (t) {
                            return i(
                              "v-uni-view",
                              {
                                key: t.id,
                                staticClass: "tip-box",
                                on: {
                                  click: function (i) {
                                    (arguments[0] = i = e.$handleEvent(i)),
                                      e.goChess(t.id);
                                  },
                                },
                              },
                              [
                                i("v-uni-view", { staticClass: "tip-text" }, [
                                  e._v(e._s(t.title)),
                                ]),
                                i("u-icon", {
                                  attrs: { name: "arrow-right", color: "#fff" },
                                }),
                              ],
                              1
                            );
                          }),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "tip-box",
                              staticStyle: { "justify-content": "center" },
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.onNew.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "tip-text" },
                                [
                                  i("u-icon", {
                                    attrs: {
                                      color: "#fff",
                                      labelColor: "#fff",
                                      name: "plus",
                                      label: "新建",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              i("aki-particles", {
                staticClass: "particles",
                attrs: { particlestyle: e.particlestyle },
              }),
            ],
            1
          );
        },
        r = [];
    },
    "00c1": function (e, t, i) {
      var a = i("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-53a9fd8a], uni-scroll-view[data-v-53a9fd8a], uni-swiper-item[data-v-53a9fd8a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-code-input[data-v-53a9fd8a]{display:flex;flex-direction:row;position:relative;overflow:hidden}.u-code-input__item[data-v-53a9fd8a]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative}.u-code-input__item__text[data-v-53a9fd8a]{font-size:15px;color:#606266}.u-code-input__item__dot[data-v-53a9fd8a]{width:7px;height:7px;border-radius:100px;background-color:#606266}.u-code-input__item__line[data-v-53a9fd8a]{position:absolute;bottom:0;height:4px;border-radius:100px;width:40px;background-color:#606266}.u-code-input__item__cursor[data-v-53a9fd8a]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:1px;height:40%;-webkit-animation:1s u-cursor-flicker-data-v-53a9fd8a infinite;animation:1s u-cursor-flicker-data-v-53a9fd8a infinite}.u-code-input__input[data-v-53a9fd8a]{position:absolute;left:%?-750?%;width:%?1500?%;top:0;background-color:initial;text-align:left}@-webkit-keyframes u-cursor-flicker-data-v-53a9fd8a{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes u-cursor-flicker-data-v-53a9fd8a{0%{opacity:0}50%{opacity:1}100%{opacity:0}}',
          "",
        ]),
        (e.exports = t);
    },
    "066c": function (e, t, i) {
      (function (e) {
        var t = i("7037").default;
        i("cb29"),
          i("14d9"),
          i("a434"),
          i("ac1f"),
          i("5319"),
          i("d3b7"),
          i("3ca3"),
          i("ddb0"),
          i("2b3d"),
          i("9861"),
          i("e25e"),
          i("c975");
        var a = function (i, a) {
          var o = document.querySelector(
            "#" + i + " > .particles-js-canvas-el"
          );
          this.pJS = {
            canvas: { el: o, w: o.offsetWidth, h: o.offsetHeight },
            particles: {
              number: { value: 400, density: { enable: !0, value_area: 800 } },
              color: { value: "#fff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#ff0000" },
                polygon: { nb_sides: 5 },
                image: { src: "", width: 100, height: 100 },
              },
              opacity: {
                value: 1,
                random: !1,
                anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
              },
              size: {
                value: 20,
                random: !1,
                anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
              },
              line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1,
              },
              move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
              },
              array: [],
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: !0, mode: "grab" },
                onclick: { enable: !0, mode: "push" },
                resize: !0,
              },
              modes: {
                grab: { distance: 100, line_linked: { opacity: 1 } },
                bubble: { distance: 200, size: 80, duration: 0.4 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
              mouse: {},
            },
            retina_detect: !1,
            fn: { interact: {}, modes: {}, vendors: {} },
            tmp: {},
          };
          var s = this.pJS;
          a && Object.deepExtend(s, a),
            (s.tmp.obj = {
              size_value: s.particles.size.value,
              size_anim_speed: s.particles.size.anim.speed,
              move_speed: s.particles.move.speed,
              line_linked_distance: s.particles.line_linked.distance,
              line_linked_width: s.particles.line_linked.width,
              mode_grab_distance: s.interactivity.modes.grab.distance,
              mode_bubble_distance: s.interactivity.modes.bubble.distance,
              mode_bubble_size: s.interactivity.modes.bubble.size,
              mode_repulse_distance: s.interactivity.modes.repulse.distance,
            }),
            (s.fn.retinaInit = function () {
              s.retina_detect && window.devicePixelRatio > 1
                ? ((s.canvas.pxratio = window.devicePixelRatio),
                  (s.tmp.retina = !0))
                : ((s.canvas.pxratio = 1), (s.tmp.retina = !1)),
                (s.canvas.w = s.canvas.el.offsetWidth * s.canvas.pxratio),
                (s.canvas.h = s.canvas.el.offsetHeight * s.canvas.pxratio),
                (s.particles.size.value =
                  s.tmp.obj.size_value * s.canvas.pxratio),
                (s.particles.size.anim.speed =
                  s.tmp.obj.size_anim_speed * s.canvas.pxratio),
                (s.particles.move.speed =
                  s.tmp.obj.move_speed * s.canvas.pxratio),
                (s.particles.line_linked.distance =
                  s.tmp.obj.line_linked_distance * s.canvas.pxratio),
                (s.interactivity.modes.grab.distance =
                  s.tmp.obj.mode_grab_distance * s.canvas.pxratio),
                (s.interactivity.modes.bubble.distance =
                  s.tmp.obj.mode_bubble_distance * s.canvas.pxratio),
                (s.particles.line_linked.width =
                  s.tmp.obj.line_linked_width * s.canvas.pxratio),
                (s.interactivity.modes.bubble.size =
                  s.tmp.obj.mode_bubble_size * s.canvas.pxratio),
                (s.interactivity.modes.repulse.distance =
                  s.tmp.obj.mode_repulse_distance * s.canvas.pxratio);
            }),
            (s.fn.canvasInit = function () {
              s.canvas.ctx = s.canvas.el.getContext("2d");
            }),
            (s.fn.canvasSize = function () {
              (s.canvas.el.width = s.canvas.w),
                (s.canvas.el.height = s.canvas.h),
                s &&
                  s.interactivity.events.resize &&
                  window.addEventListener("resize", function () {
                    (s.canvas.w = s.canvas.el.offsetWidth),
                      (s.canvas.h = s.canvas.el.offsetHeight),
                      s.tmp.retina &&
                        ((s.canvas.w *= s.canvas.pxratio),
                        (s.canvas.h *= s.canvas.pxratio)),
                      (s.canvas.el.width = s.canvas.w),
                      (s.canvas.el.height = s.canvas.h),
                      s.particles.move.enable ||
                        (s.fn.particlesEmpty(),
                        s.fn.particlesCreate(),
                        s.fn.particlesDraw(),
                        s.fn.vendors.densityAutoParticles()),
                      s.fn.vendors.densityAutoParticles();
                  });
            }),
            (s.fn.canvasPaint = function () {
              s.canvas.ctx.fillRect(0, 0, s.canvas.w, s.canvas.h);
            }),
            (s.fn.canvasClear = function () {
              s.canvas.ctx.clearRect(0, 0, s.canvas.w, s.canvas.h);
            }),
            (s.fn.particle = function (e, i, a) {
              if (
                ((this.radius =
                  (s.particles.size.random ? Math.random() : 1) *
                  s.particles.size.value),
                s.particles.size.anim.enable &&
                  ((this.size_status = !1),
                  (this.vs = s.particles.size.anim.speed / 100),
                  s.particles.size.anim.sync ||
                    (this.vs = this.vs * Math.random())),
                (this.x = a ? a.x : Math.random() * s.canvas.w),
                (this.y = a ? a.y : Math.random() * s.canvas.h),
                this.x > s.canvas.w - 2 * this.radius
                  ? (this.x = this.x - this.radius)
                  : this.x < 2 * this.radius && (this.x = this.x + this.radius),
                this.y > s.canvas.h - 2 * this.radius
                  ? (this.y = this.y - this.radius)
                  : this.y < 2 * this.radius && (this.y = this.y + this.radius),
                s.particles.move.bounce && s.fn.vendors.checkOverlap(this, a),
                (this.color = {}),
                "object" == t(e.value))
              )
                if (e.value instanceof Array) {
                  var r =
                    e.value[
                      Math.floor(Math.random() * s.particles.color.value.length)
                    ];
                  this.color.rgb = n(r);
                } else
                  void 0 != e.value.r &&
                    void 0 != e.value.g &&
                    void 0 != e.value.b &&
                    (this.color.rgb = {
                      r: e.value.r,
                      g: e.value.g,
                      b: e.value.b,
                    }),
                    void 0 != e.value.h &&
                      void 0 != e.value.s &&
                      void 0 != e.value.l &&
                      (this.color.hsl = {
                        h: e.value.h,
                        s: e.value.s,
                        l: e.value.l,
                      });
              else
                "random" == e.value
                  ? (this.color.rgb = {
                      r: Math.floor(256 * Math.random()) + 0,
                      g: Math.floor(256 * Math.random()) + 0,
                      b: Math.floor(256 * Math.random()) + 0,
                    })
                  : "string" == typeof e.value &&
                    ((this.color = e), (this.color.rgb = n(this.color.value)));
              (this.opacity =
                (s.particles.opacity.random ? Math.random() : 1) *
                s.particles.opacity.value),
                s.particles.opacity.anim.enable &&
                  ((this.opacity_status = !1),
                  (this.vo = s.particles.opacity.anim.speed / 100),
                  s.particles.opacity.anim.sync ||
                    (this.vo = this.vo * Math.random()));
              var o = {};
              switch (s.particles.move.direction) {
                case "top":
                  o = { x: 0, y: -1 };
                  break;
                case "top-right":
                  o = { x: 0.5, y: -0.5 };
                  break;
                case "right":
                  o = { x: 1, y: -0 };
                  break;
                case "bottom-right":
                  o = { x: 0.5, y: 0.5 };
                  break;
                case "bottom":
                  o = { x: 0, y: 1 };
                  break;
                case "bottom-left":
                  o = { x: -0.5, y: 1 };
                  break;
                case "left":
                  o = { x: -1, y: 0 };
                  break;
                case "top-left":
                  o = { x: -0.5, y: -0.5 };
                  break;
                default:
                  o = { x: 0, y: 0 };
                  break;
              }
              s.particles.move.straight
                ? ((this.vx = o.x),
                  (this.vy = o.y),
                  s.particles.move.random &&
                    ((this.vx = this.vx * Math.random()),
                    (this.vy = this.vy * Math.random())))
                : ((this.vx = o.x + Math.random() - 0.5),
                  (this.vy = o.y + Math.random() - 0.5)),
                (this.vx_i = this.vx),
                (this.vy_i = this.vy);
              var c = s.particles.shape.type;
              if ("object" == t(c)) {
                if (c instanceof Array) {
                  var l = c[Math.floor(Math.random() * c.length)];
                  this.shape = l;
                }
              } else this.shape = c;
              if ("image" == this.shape) {
                var u = s.particles.shape;
                (this.img = {
                  src: u.image.src,
                  ratio: u.image.width / u.image.height,
                }),
                  this.img.ratio || (this.img.ratio = 1),
                  "svg" == s.tmp.img_type &&
                    void 0 != s.tmp.source_svg &&
                    (s.fn.vendors.createSvgImg(this),
                    s.tmp.pushing && (this.img.loaded = !1));
              }
            }),
            (s.fn.particle.prototype.draw = function () {
              var e = this;
              if (void 0 != e.radius_bubble) var t = e.radius_bubble;
              else t = e.radius;
              if (void 0 != e.opacity_bubble) var i = e.opacity_bubble;
              else i = e.opacity;
              if (e.color.rgb)
                var a =
                  "rgba(" +
                  e.color.rgb.r +
                  "," +
                  e.color.rgb.g +
                  "," +
                  e.color.rgb.b +
                  "," +
                  i +
                  ")";
              else
                a =
                  "hsla(" +
                  e.color.hsl.h +
                  "," +
                  e.color.hsl.s +
                  "%," +
                  e.color.hsl.l +
                  "%," +
                  i +
                  ")";
              switch (
                ((s.canvas.ctx.fillStyle = a),
                s.canvas.ctx.beginPath(),
                e.shape)
              ) {
                case "circle":
                  s.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                  break;
                case "edge":
                  s.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                  break;
                case "triangle":
                  s.fn.vendors.drawShape(
                    s.canvas.ctx,
                    e.x - t,
                    e.y + t / 1.66,
                    2 * t,
                    3,
                    2
                  );
                  break;
                case "polygon":
                  s.fn.vendors.drawShape(
                    s.canvas.ctx,
                    e.x - t / (s.particles.shape.polygon.nb_sides / 3.5),
                    e.y - t / 0.76,
                    (2.66 * t) / (s.particles.shape.polygon.nb_sides / 3),
                    s.particles.shape.polygon.nb_sides,
                    1
                  );
                  break;
                case "star":
                  s.fn.vendors.drawShape(
                    s.canvas.ctx,
                    e.x - (2 * t) / (s.particles.shape.polygon.nb_sides / 4),
                    e.y - t / 1.52,
                    (2 * t * 2.66) / (s.particles.shape.polygon.nb_sides / 3),
                    s.particles.shape.polygon.nb_sides,
                    2
                  );
                  break;
                case "image":
                  if ("svg" == s.tmp.img_type) var n = e.img.obj;
                  else n = s.tmp.img_obj;
                  n &&
                    (function () {
                      s.canvas.ctx.drawImage(
                        n,
                        e.x - t,
                        e.y - t,
                        2 * t,
                        (2 * t) / e.img.ratio
                      );
                    })();
                  break;
              }
              s.canvas.ctx.closePath(),
                s.particles.shape.stroke.width > 0 &&
                  ((s.canvas.ctx.strokeStyle = s.particles.shape.stroke.color),
                  (s.canvas.ctx.lineWidth = s.particles.shape.stroke.width),
                  s.canvas.ctx.stroke()),
                s.canvas.ctx.fill();
            }),
            (s.fn.particlesCreate = function () {
              for (var e = 0; e < s.particles.number.value; e++)
                s.particles.array.push(
                  new s.fn.particle(
                    s.particles.color,
                    s.particles.opacity.value
                  )
                );
            }),
            (s.fn.particlesUpdate = function () {
              for (var e = 0; e < s.particles.array.length; e++) {
                var t = s.particles.array[e];
                if (s.particles.move.enable) {
                  var i = s.particles.move.speed / 2;
                  (t.x += t.vx * i), (t.y += t.vy * i);
                }
                if (
                  (s.particles.opacity.anim.enable &&
                    (1 == t.opacity_status
                      ? (t.opacity >= s.particles.opacity.value &&
                          (t.opacity_status = !1),
                        (t.opacity += t.vo))
                      : (t.opacity <= s.particles.opacity.anim.opacity_min &&
                          (t.opacity_status = !0),
                        (t.opacity -= t.vo)),
                    t.opacity < 0 && (t.opacity = 0)),
                  s.particles.size.anim.enable &&
                    (1 == t.size_status
                      ? (t.radius >= s.particles.size.value &&
                          (t.size_status = !1),
                        (t.radius += t.vs))
                      : (t.radius <= s.particles.size.anim.size_min &&
                          (t.size_status = !0),
                        (t.radius -= t.vs)),
                    t.radius < 0 && (t.radius = 0)),
                  "bounce" == s.particles.move.out_mode)
                )
                  var a = {
                    x_left: t.radius,
                    x_right: s.canvas.w,
                    y_top: t.radius,
                    y_bottom: s.canvas.h,
                  };
                else
                  a = {
                    x_left: -t.radius,
                    x_right: s.canvas.w + t.radius,
                    y_top: -t.radius,
                    y_bottom: s.canvas.h + t.radius,
                  };
                switch (
                  (t.x - t.radius > s.canvas.w
                    ? ((t.x = a.x_left), (t.y = Math.random() * s.canvas.h))
                    : t.x + t.radius < 0 &&
                      ((t.x = a.x_right), (t.y = Math.random() * s.canvas.h)),
                  t.y - t.radius > s.canvas.h
                    ? ((t.y = a.y_top), (t.x = Math.random() * s.canvas.w))
                    : t.y + t.radius < 0 &&
                      ((t.y = a.y_bottom), (t.x = Math.random() * s.canvas.w)),
                  s.particles.move.out_mode)
                ) {
                  case "bounce":
                    (t.x + t.radius > s.canvas.w || t.x - t.radius < 0) &&
                      (t.vx = -t.vx),
                      (t.y + t.radius > s.canvas.h || t.y - t.radius < 0) &&
                        (t.vy = -t.vy);
                    break;
                }
                if (
                  (r("grab", s.interactivity.events.onhover.mode) &&
                    s.fn.modes.grabParticle(t),
                  (r("bubble", s.interactivity.events.onhover.mode) ||
                    r("bubble", s.interactivity.events.onclick.mode)) &&
                    s.fn.modes.bubbleParticle(t),
                  (r("repulse", s.interactivity.events.onhover.mode) ||
                    r("repulse", s.interactivity.events.onclick.mode)) &&
                    s.fn.modes.repulseParticle(t),
                  s.particles.line_linked.enable ||
                    s.particles.move.attract.enable)
                )
                  for (var n = e + 1; n < s.particles.array.length; n++) {
                    var o = s.particles.array[n];
                    s.particles.line_linked.enable &&
                      s.fn.interact.linkParticles(t, o),
                      s.particles.move.attract.enable &&
                        s.fn.interact.attractParticles(t, o),
                      s.particles.move.bounce &&
                        s.fn.interact.bounceParticles(t, o);
                  }
              }
            }),
            (s.fn.particlesDraw = function () {
              s.canvas.ctx.clearRect(0, 0, s.canvas.w, s.canvas.h),
                s.fn.particlesUpdate();
              for (var e = 0; e < s.particles.array.length; e++) {
                var t = s.particles.array[e];
                t.draw();
              }
            }),
            (s.fn.particlesEmpty = function () {
              s.particles.array = [];
            }),
            (s.fn.particlesRefresh = function () {
              cancelRequestAnimFrame(s.fn.checkAnimFrame),
                cancelRequestAnimFrame(s.fn.drawAnimFrame),
                (s.tmp.source_svg = void 0),
                (s.tmp.img_obj = void 0),
                (s.tmp.count_svg = 0),
                s.fn.particlesEmpty(),
                s.fn.canvasClear(),
                s.fn.vendors.start();
            }),
            (s.fn.interact.linkParticles = function (e, t) {
              var i = e.x - t.x,
                a = e.y - t.y,
                n = Math.sqrt(i * i + a * a);
              if (n <= s.particles.line_linked.distance) {
                var r =
                  s.particles.line_linked.opacity -
                  n /
                    (1 / s.particles.line_linked.opacity) /
                    s.particles.line_linked.distance;
                if (r > 0) {
                  var o = s.particles.line_linked.color_rgb_line;
                  (s.canvas.ctx.strokeStyle =
                    "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")"),
                    (s.canvas.ctx.lineWidth = s.particles.line_linked.width),
                    s.canvas.ctx.beginPath(),
                    s.canvas.ctx.moveTo(e.x, e.y),
                    s.canvas.ctx.lineTo(t.x, t.y),
                    s.canvas.ctx.stroke(),
                    s.canvas.ctx.closePath();
                }
              }
            }),
            (s.fn.interact.attractParticles = function (e, t) {
              var i = e.x - t.x,
                a = e.y - t.y,
                n = Math.sqrt(i * i + a * a);
              if (n <= s.particles.line_linked.distance) {
                var r = i / (1e3 * s.particles.move.attract.rotateX),
                  o = a / (1e3 * s.particles.move.attract.rotateY);
                (e.vx -= r), (e.vy -= o), (t.vx += r), (t.vy += o);
              }
            }),
            (s.fn.interact.bounceParticles = function (e, t) {
              var i = e.x - t.x,
                a = e.y - t.y,
                n = Math.sqrt(i * i + a * a),
                r = e.radius + t.radius;
              n <= r &&
                ((e.vx = -e.vx),
                (e.vy = -e.vy),
                (t.vx = -t.vx),
                (t.vy = -t.vy));
            }),
            (s.fn.modes.pushParticles = function (e, t) {
              s.tmp.pushing = !0;
              for (var i = 0; i < e; i++)
                s.particles.array.push(
                  new s.fn.particle(
                    s.particles.color,
                    s.particles.opacity.value,
                    {
                      x: t ? t.pos_x : Math.random() * s.canvas.w,
                      y: t ? t.pos_y : Math.random() * s.canvas.h,
                    }
                  )
                ),
                  i == e - 1 &&
                    (s.particles.move.enable || s.fn.particlesDraw(),
                    (s.tmp.pushing = !1));
            }),
            (s.fn.modes.removeParticles = function (e) {
              s.particles.array.splice(0, e),
                s.particles.move.enable || s.fn.particlesDraw();
            }),
            (s.fn.modes.bubbleParticle = function (e) {
              if (
                s.interactivity.events.onhover.enable &&
                r("bubble", s.interactivity.events.onhover.mode)
              ) {
                var t = function () {
                    (e.opacity_bubble = e.opacity),
                      (e.radius_bubble = e.radius);
                  },
                  i = e.x - s.interactivity.mouse.pos_x,
                  a = e.y - s.interactivity.mouse.pos_y,
                  n = Math.sqrt(i * i + a * a),
                  o = 1 - n / s.interactivity.modes.bubble.distance;
                if (n <= s.interactivity.modes.bubble.distance) {
                  if (o >= 0 && "mousemove" == s.interactivity.status) {
                    if (
                      s.interactivity.modes.bubble.size !=
                      s.particles.size.value
                    )
                      if (
                        s.interactivity.modes.bubble.size >
                        s.particles.size.value
                      ) {
                        var c =
                          e.radius + s.interactivity.modes.bubble.size * o;
                        c >= 0 && (e.radius_bubble = c);
                      } else {
                        var l = e.radius - s.interactivity.modes.bubble.size;
                        c = e.radius - l * o;
                        e.radius_bubble = c > 0 ? c : 0;
                      }
                    if (
                      s.interactivity.modes.bubble.opacity !=
                      s.particles.opacity.value
                    )
                      if (
                        s.interactivity.modes.bubble.opacity >
                        s.particles.opacity.value
                      ) {
                        var u = s.interactivity.modes.bubble.opacity * o;
                        u > e.opacity &&
                          u <= s.interactivity.modes.bubble.opacity &&
                          (e.opacity_bubble = u);
                      } else {
                        u =
                          e.opacity -
                          (s.particles.opacity.value -
                            s.interactivity.modes.bubble.opacity) *
                            o;
                        u < e.opacity &&
                          u >= s.interactivity.modes.bubble.opacity &&
                          (e.opacity_bubble = u);
                      }
                  }
                } else t();
                "mouseleave" == s.interactivity.status && t();
              } else if (
                s.interactivity.events.onclick.enable &&
                r("bubble", s.interactivity.events.onclick.mode)
              ) {
                var d = function (t, i, a, r, o) {
                  if (t != i)
                    if (s.tmp.bubble_duration_end) {
                      if (void 0 != a) {
                        var c =
                            r -
                            (p * (r - t)) /
                              s.interactivity.modes.bubble.duration,
                          l = t - c;
                        (d = t + l),
                          "size" == o && (e.radius_bubble = d),
                          "opacity" == o && (e.opacity_bubble = d);
                      }
                    } else if (n <= s.interactivity.modes.bubble.distance) {
                      if (void 0 != a) var u = a;
                      else u = r;
                      if (u != t) {
                        var d =
                          r -
                          (p * (r - t)) / s.interactivity.modes.bubble.duration;
                        "size" == o && (e.radius_bubble = d),
                          "opacity" == o && (e.opacity_bubble = d);
                      }
                    } else
                      "size" == o && (e.radius_bubble = void 0),
                        "opacity" == o && (e.opacity_bubble = void 0);
                };
                if (s.tmp.bubble_clicking) {
                  (i = e.x - s.interactivity.mouse.click_pos_x),
                    (a = e.y - s.interactivity.mouse.click_pos_y),
                    (n = Math.sqrt(i * i + a * a));
                  var p =
                    (new Date().getTime() - s.interactivity.mouse.click_time) /
                    1e3;
                  p > s.interactivity.modes.bubble.duration &&
                    (s.tmp.bubble_duration_end = !0),
                    p > 2 * s.interactivity.modes.bubble.duration &&
                      ((s.tmp.bubble_clicking = !1),
                      (s.tmp.bubble_duration_end = !1));
                }
                s.tmp.bubble_clicking &&
                  (d(
                    s.interactivity.modes.bubble.size,
                    s.particles.size.value,
                    e.radius_bubble,
                    e.radius,
                    "size"
                  ),
                  d(
                    s.interactivity.modes.bubble.opacity,
                    s.particles.opacity.value,
                    e.opacity_bubble,
                    e.opacity,
                    "opacity"
                  ));
              }
            }),
            (s.fn.modes.repulseParticle = function (e) {
              if (
                s.interactivity.events.onhover.enable &&
                r("repulse", s.interactivity.events.onhover.mode) &&
                "mousemove" == s.interactivity.status
              ) {
                var t = e.x - s.interactivity.mouse.pos_x,
                  i = e.y - s.interactivity.mouse.pos_y,
                  a = Math.sqrt(t * t + i * i),
                  n = { x: t / a, y: i / a },
                  o = s.interactivity.modes.repulse.distance,
                  c = (function (e, t, i) {
                    return Math.min(Math.max(e, t), i);
                  })((1 / o) * (-1 * Math.pow(a / o, 2) + 1) * o * 100, 0, 50),
                  l = { x: e.x + n.x * c, y: e.y + n.y * c };
                "bounce" == s.particles.move.out_mode
                  ? (l.x - e.radius > 0 &&
                      l.x + e.radius < s.canvas.w &&
                      (e.x = l.x),
                    l.y - e.radius > 0 &&
                      l.y + e.radius < s.canvas.h &&
                      (e.y = l.y))
                  : ((e.x = l.x), (e.y = l.y));
              } else if (
                s.interactivity.events.onclick.enable &&
                r("repulse", s.interactivity.events.onclick.mode)
              )
                if (
                  (s.tmp.repulse_finish ||
                    (s.tmp.repulse_count++,
                    s.tmp.repulse_count == s.particles.array.length &&
                      (s.tmp.repulse_finish = !0)),
                  s.tmp.repulse_clicking)
                ) {
                  o = Math.pow(s.interactivity.modes.repulse.distance / 6, 3);
                  var u = s.interactivity.mouse.click_pos_x - e.x,
                    d = s.interactivity.mouse.click_pos_y - e.y,
                    p = u * u + d * d,
                    f = (-o / p) * 1;
                  p <= o &&
                    (function () {
                      var t = Math.atan2(d, u);
                      if (
                        ((e.vx = f * Math.cos(t)),
                        (e.vy = f * Math.sin(t)),
                        "bounce" == s.particles.move.out_mode)
                      ) {
                        var i = { x: e.x + e.vx, y: e.y + e.vy };
                        (i.x + e.radius > s.canvas.w || i.x - e.radius < 0) &&
                          (e.vx = -e.vx),
                          (i.y + e.radius > s.canvas.h || i.y - e.radius < 0) &&
                            (e.vy = -e.vy);
                      }
                    })();
                } else
                  0 == s.tmp.repulse_clicking &&
                    ((e.vx = e.vx_i), (e.vy = e.vy_i));
            }),
            (s.fn.modes.grabParticle = function (e) {
              if (
                s.interactivity.events.onhover.enable &&
                "mousemove" == s.interactivity.status
              ) {
                var t = e.x - s.interactivity.mouse.pos_x,
                  i = e.y - s.interactivity.mouse.pos_y,
                  a = Math.sqrt(t * t + i * i);
                if (a <= s.interactivity.modes.grab.distance) {
                  var n =
                    s.interactivity.modes.grab.line_linked.opacity -
                    a /
                      (1 / s.interactivity.modes.grab.line_linked.opacity) /
                      s.interactivity.modes.grab.distance;
                  if (n > 0) {
                    var r = s.particles.line_linked.color_rgb_line;
                    (s.canvas.ctx.strokeStyle =
                      "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")"),
                      (s.canvas.ctx.lineWidth = s.particles.line_linked.width),
                      s.canvas.ctx.beginPath(),
                      s.canvas.ctx.moveTo(e.x, e.y),
                      s.canvas.ctx.lineTo(
                        s.interactivity.mouse.pos_x,
                        s.interactivity.mouse.pos_y
                      ),
                      s.canvas.ctx.stroke(),
                      s.canvas.ctx.closePath();
                  }
                }
              }
            }),
            (s.fn.vendors.eventsListeners = function () {
              "window" == s.interactivity.detect_on
                ? (s.interactivity.el = window)
                : (s.interactivity.el = s.canvas.el),
                (s.interactivity.events.onhover.enable ||
                  s.interactivity.events.onclick.enable) &&
                  (s.interactivity.el.addEventListener(
                    "mousemove",
                    function (e) {
                      if (s.interactivity.el == window)
                        var t = e.clientX,
                          i = e.clientY;
                      else
                        (t = e.offsetX || e.clientX),
                          (i = e.offsetY || e.clientY);
                      (s.interactivity.mouse.pos_x = t),
                        (s.interactivity.mouse.pos_y = i),
                        s.tmp.retina &&
                          ((s.interactivity.mouse.pos_x *= s.canvas.pxratio),
                          (s.interactivity.mouse.pos_y *= s.canvas.pxratio)),
                        (s.interactivity.status = "mousemove");
                    }
                  ),
                  s.interactivity.el.addEventListener(
                    "mouseleave",
                    function (e) {
                      (s.interactivity.mouse.pos_x = null),
                        (s.interactivity.mouse.pos_y = null),
                        (s.interactivity.status = "mouseleave");
                    }
                  )),
                s.interactivity.events.onclick.enable &&
                  s.interactivity.el.addEventListener("click", function () {
                    if (
                      ((s.interactivity.mouse.click_pos_x =
                        s.interactivity.mouse.pos_x),
                      (s.interactivity.mouse.click_pos_y =
                        s.interactivity.mouse.pos_y),
                      (s.interactivity.mouse.click_time = new Date().getTime()),
                      s.interactivity.events.onclick.enable)
                    )
                      switch (s.interactivity.events.onclick.mode) {
                        case "push":
                          s.particles.move.enable ||
                          1 == s.interactivity.modes.push.particles_nb
                            ? s.fn.modes.pushParticles(
                                s.interactivity.modes.push.particles_nb,
                                s.interactivity.mouse
                              )
                            : s.interactivity.modes.push.particles_nb > 1 &&
                              s.fn.modes.pushParticles(
                                s.interactivity.modes.push.particles_nb
                              );
                          break;
                        case "remove":
                          s.fn.modes.removeParticles(
                            s.interactivity.modes.remove.particles_nb
                          );
                          break;
                        case "bubble":
                          s.tmp.bubble_clicking = !0;
                          break;
                        case "repulse":
                          (s.tmp.repulse_clicking = !0),
                            (s.tmp.repulse_count = 0),
                            (s.tmp.repulse_finish = !1),
                            setTimeout(function () {
                              s.tmp.repulse_clicking = !1;
                            }, 1e3 * s.interactivity.modes.repulse.duration);
                          break;
                      }
                  });
            }),
            (s.fn.vendors.densityAutoParticles = function () {
              if (s.particles.number.density.enable) {
                var e = (s.canvas.el.width * s.canvas.el.height) / 1e3;
                s.tmp.retina && (e /= 2 * s.canvas.pxratio);
                var t =
                    (e * s.particles.number.value) /
                    s.particles.number.density.value_area,
                  i = s.particles.array.length - t;
                i < 0
                  ? s.fn.modes.pushParticles(Math.abs(i))
                  : s.fn.modes.removeParticles(i);
              }
            }),
            (s.fn.vendors.checkOverlap = function (e, t) {
              for (var i = 0; i < s.particles.array.length; i++) {
                var a = s.particles.array[i],
                  n = e.x - a.x,
                  r = e.y - a.y,
                  o = Math.sqrt(n * n + r * r);
                o <= e.radius + a.radius &&
                  ((e.x = t ? t.x : Math.random() * s.canvas.w),
                  (e.y = t ? t.y : Math.random() * s.canvas.h),
                  s.fn.vendors.checkOverlap(e));
              }
            }),
            (s.fn.vendors.createSvgImg = function (e) {
              var t = s.tmp.source_svg,
                i = t.replace(/#([0-9A-F]{3,6})/gi, function (t, i, a, n) {
                  if (e.color.rgb)
                    var r =
                      "rgba(" +
                      e.color.rgb.r +
                      "," +
                      e.color.rgb.g +
                      "," +
                      e.color.rgb.b +
                      "," +
                      e.opacity +
                      ")";
                  else
                    r =
                      "hsla(" +
                      e.color.hsl.h +
                      "," +
                      e.color.hsl.s +
                      "%," +
                      e.color.hsl.l +
                      "%," +
                      e.opacity +
                      ")";
                  return r;
                }),
                a = new Blob([i], { type: "image/svg+xml;charset=utf-8" }),
                n = window.URL || window.webkitURL || window,
                r = n.createObjectURL(a),
                o = new Image();
              o.addEventListener("load", function () {
                (e.img.obj = o),
                  (e.img.loaded = !0),
                  n.revokeObjectURL(r),
                  s.tmp.count_svg++;
              }),
                (o.src = r);
            }),
            (s.fn.vendors.destroypJS = function () {
              cancelAnimationFrame(s.fn.drawAnimFrame),
                o.remove(),
                (pJSDom = null);
            }),
            (s.fn.vendors.drawShape = function (e, t, i, a, n, r) {
              var o = n * r,
                s = n / r,
                c = (180 * (s - 2)) / s,
                l = Math.PI - (Math.PI * c) / 180;
              e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
              for (var u = 0; u < o; u++)
                e.lineTo(a, 0), e.translate(a, 0), e.rotate(l);
              e.fill(), e.restore();
            }),
            (s.fn.vendors.exportImg = function () {
              window.open(s.canvas.el.toDataURL("image/png"), "_blank");
            }),
            (s.fn.vendors.loadImg = function (t) {
              if (
                ((s.tmp.img_error = void 0), "" != s.particles.shape.image.src)
              )
                if ("svg" == t) {
                  var i = new XMLHttpRequest();
                  i.open("GET", s.particles.shape.image.src),
                    (i.onreadystatechange = function (t) {
                      4 == i.readyState &&
                        (200 == i.status
                          ? ((s.tmp.source_svg = t.currentTarget.response),
                            s.fn.vendors.checkBeforeDraw())
                          : (e.log("Error pJS - Image not found"),
                            (s.tmp.img_error = !0)));
                    }),
                    i.send();
                } else {
                  var a = new Image();
                  a.addEventListener("load", function () {
                    (s.tmp.img_obj = a), s.fn.vendors.checkBeforeDraw();
                  }),
                    (a.src = s.particles.shape.image.src);
                }
              else e.log("Error pJS - No image.src"), (s.tmp.img_error = !0);
            }),
            (s.fn.vendors.draw = function () {
              "image" == s.particles.shape.type
                ? "svg" == s.tmp.img_type
                  ? s.tmp.count_svg >= s.particles.number.value
                    ? (s.fn.particlesDraw(),
                      s.particles.move.enable
                        ? (s.fn.drawAnimFrame = requestAnimFrame(
                            s.fn.vendors.draw
                          ))
                        : cancelRequestAnimFrame(s.fn.drawAnimFrame))
                    : s.tmp.img_error ||
                      (s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw))
                  : void 0 != s.tmp.img_obj
                  ? (s.fn.particlesDraw(),
                    s.particles.move.enable
                      ? (s.fn.drawAnimFrame = requestAnimFrame(
                          s.fn.vendors.draw
                        ))
                      : cancelRequestAnimFrame(s.fn.drawAnimFrame))
                  : s.tmp.img_error ||
                    (s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw))
                : (s.fn.particlesDraw(),
                  s.particles.move.enable
                    ? (s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw))
                    : cancelRequestAnimFrame(s.fn.drawAnimFrame));
            }),
            (s.fn.vendors.checkBeforeDraw = function () {
              "image" == s.particles.shape.type
                ? "svg" == s.tmp.img_type && void 0 == s.tmp.source_svg
                  ? (s.tmp.checkAnimFrame = requestAnimFrame(check))
                  : (cancelRequestAnimFrame(s.tmp.checkAnimFrame),
                    s.tmp.img_error ||
                      (s.fn.vendors.init(), s.fn.vendors.draw()))
                : (s.fn.vendors.init(), s.fn.vendors.draw());
            }),
            (s.fn.vendors.init = function () {
              s.fn.retinaInit(),
                s.fn.canvasInit(),
                s.fn.canvasSize(),
                s.fn.canvasPaint(),
                s.fn.particlesCreate(),
                s.fn.vendors.densityAutoParticles(),
                (s.particles.line_linked.color_rgb_line = n(
                  s.particles.line_linked.color
                ));
            }),
            (s.fn.vendors.start = function () {
              r("image", s.particles.shape.type)
                ? ((s.tmp.img_type = s.particles.shape.image.src.substr(
                    s.particles.shape.image.src.length - 3
                  )),
                  s.fn.vendors.loadImg(s.tmp.img_type))
                : s.fn.vendors.checkBeforeDraw();
            }),
            s.fn.vendors.eventsListeners(),
            s.fn.vendors.start();
        };
        function n(e) {
          e = e.replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            function (e, t, i, a) {
              return t + t + i + i + a + a;
            }
          );
          var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return t
            ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16),
              }
            : null;
        }
        function r(e, t) {
          return t.indexOf(e) > -1;
        }
        (Object.deepExtend = function (e, t) {
          for (var i in t)
            t[i] && t[i].constructor && t[i].constructor === Object
              ? ((e[i] = e[i] || {}), arguments.callee(e[i], t[i]))
              : (e[i] = t[i]);
          return e;
        }),
          (window.requestAnimFrame = (function () {
            return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 1e3 / 60);
              }
            );
          })()),
          (window.cancelRequestAnimFrame = (function () {
            return (
              window.cancelAnimationFrame ||
              window.webkitCancelRequestAnimationFrame ||
              window.mozCancelRequestAnimationFrame ||
              window.oCancelRequestAnimationFrame ||
              window.msCancelRequestAnimationFrame ||
              clearTimeout
            );
          })()),
          (window.pJSDom = []),
          (window.particlesJS = function (e, t) {
            "string" != typeof e && ((t = e), (e = "particles-js")),
              e || (e = "particles-js");
            var i = document.getElementById(e),
              n = i.getElementsByClassName("particles-js-canvas-el");
            if (n.length) while (n.length > 0) i.removeChild(n[0]);
            var r = document.createElement("canvas");
            (r.className = "particles-js-canvas-el"),
              (r.style.width = "100%"),
              (r.style.height = "100%");
            var o = document.getElementById(e).appendChild(r);
            null != o && pJSDom.push(new a(e, t));
          });
        var o = {
          particles: {
            number: { value: 400, density: { enable: !0, value_area: 800 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: !0,
              anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
            },
            size: {
              value: 10,
              random: !0,
              anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
            },
            line_linked: {
              enable: !1,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: !0,
              speed: 6,
              direction: "bottom",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !0, mode: "bubble" },
              onclick: { enable: !0, mode: "repulse" },
              resize: !0,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 0.5 } },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: !0,
        };
        window.particlesJS.load = function (e, t, i) {
          window.particlesJS(e, o);
        };
      }).call(this, i("5a52")["default"]);
    },
    "0821": function (e, t, i) {
      var a = i("00c1");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var n = i("4f06").default;
      n("fc8c3396", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "113c": function (e, t, i) {
      var a = i("b869");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var n = i("4f06").default;
      n("caad3602", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1b56": function (e, t, i) {
      "use strict";
      var a = i("0821"),
        n = i.n(a);
      n.a;
    },
    "1dfe": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("5de6"),
        n = i("27a0");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return n[e];
            });
          })(r);
      i("c945");
      var o = i("f0c5"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "3f114883",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    "27a0": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("7bcf"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = n.a;
    },
    "36cd": function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (
            null === e ||
            ("object" !== (0, a.default)(e) && "function" !== typeof e)
          )
            return { default: e };
          var i = n(t);
          if (i && i.has(e)) return i.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in e)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
              var c = o ? Object.getOwnPropertyDescriptor(e, s) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(r, s, c)
                : (r[s] = e[s]);
            }
          (r["default"] = e), i && i.set(e, r);
          return r;
        }),
        i("d3b7"),
        i("3ca3"),
        i("10d1"),
        i("ddb0"),
        i("7a82"),
        i("e439");
      var a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i("53ca"));
      function n(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          i = new WeakMap();
        return (n = function (e) {
          return e ? i : t;
        })(e);
      }
    },
    "3b1d": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("5d26"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = n.a;
    },
    4346: function (e, t, i) {
      "use strict";
      var a = i("e267"),
        n = i.n(a);
      n.a;
    },
    "4a77": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return a;
      }),
        i.d(t, "c", function () {
          return n;
        }),
        i.d(t, "a", function () {});
      var a = function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t(
            "v-uni-view",
            [
              t("v-uni-view", {
                style:
                  "background-color: " +
                  this.particlestyle.bgcolor +
                  ";z-index: " +
                  this.particlestyle.zindex,
                attrs: { id: "particles" },
              }),
            ],
            1
          );
        },
        n = [];
    },
    "4ad7": function (e, t, i) {
      var a = i("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */#particles[data-v-6ac0b7df]{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:50% 50%}',
          "",
        ]),
        (e.exports = t);
    },
    "4be7": function (e, t, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i("a9e3");
      var a = {
        props: {
          show: { type: Boolean, default: uni.$u.props.modal.show },
          title: { type: [String], default: uni.$u.props.modal.title },
          content: { type: String, default: uni.$u.props.modal.content },
          confirmText: {
            type: String,
            default: uni.$u.props.modal.confirmText,
          },
          cancelText: { type: String, default: uni.$u.props.modal.cancelText },
          showConfirmButton: {
            type: Boolean,
            default: uni.$u.props.modal.showConfirmButton,
          },
          showCancelButton: {
            type: Boolean,
            default: uni.$u.props.modal.showCancelButton,
          },
          confirmColor: {
            type: String,
            default: uni.$u.props.modal.confirmColor,
          },
          cancelColor: {
            type: String,
            default: uni.$u.props.modal.cancelColor,
          },
          buttonReverse: {
            type: Boolean,
            default: uni.$u.props.modal.buttonReverse,
          },
          zoom: { type: Boolean, default: uni.$u.props.modal.zoom },
          asyncClose: { type: Boolean, default: uni.$u.props.modal.asyncClose },
          closeOnClickOverlay: {
            type: Boolean,
            default: uni.$u.props.modal.closeOnClickOverlay,
          },
          negativeTop: {
            type: [String, Number],
            default: uni.$u.props.modal.negativeTop,
          },
          width: { type: [String, Number], default: uni.$u.props.modal.width },
          confirmButtonShape: {
            type: String,
            default: uni.$u.props.modal.confirmButtonShape,
          },
        },
      };
      t.default = a;
    },
    "50ff": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return a;
      }),
        i.d(t, "c", function () {
          return n;
        }),
        i.d(t, "a", function () {});
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "v-uni-view",
            { staticClass: "u-code-input" },
            [
              e._l(e.codeLength, function (t, a) {
                return i(
                  "v-uni-view",
                  {
                    key: a,
                    staticClass: "u-code-input__item",
                    style: [e.itemStyle(a)],
                  },
                  [
                    e.dot && e.codeArray.length > a
                      ? i("v-uni-view", {
                          staticClass: "u-code-input__item__dot",
                        })
                      : i(
                          "v-uni-text",
                          {
                            style: {
                              fontSize: e.$u.addUnit(e.fontSize),
                              fontWeight: e.bold ? "bold" : "normal",
                              color: e.color,
                            },
                          },
                          [e._v(e._s(e.codeArray[a]))]
                        ),
                    "line" === e.mode
                      ? i("v-uni-view", {
                          staticClass: "u-code-input__item__line",
                          style: [e.lineStyle],
                        })
                      : e._e(),
                    e.isFocus && e.codeArray.length === a
                      ? i("v-uni-view", {
                          staticClass: "u-code-input__item__cursor",
                          style: { backgroundColor: e.color },
                        })
                      : e._e(),
                  ],
                  1
                );
              }),
              i("v-uni-input", {
                staticClass: "u-code-input__input",
                style: { height: e.$u.addUnit(e.size) },
                attrs: {
                  disabled: e.disabledKeyboard,
                  type: "number",
                  focus: e.focus,
                  value: e.inputValue,
                  maxlength: e.maxlength,
                  adjustPosition: e.adjustPosition,
                },
                on: {
                  input: function (t) {
                    (arguments[0] = t = e.$handleEvent(t)),
                      e.inputHandler.apply(void 0, arguments);
                  },
                  focus: function (t) {
                    (arguments[0] = t = e.$handleEvent(t)), (e.isFocus = !0);
                  },
                  blur: function (t) {
                    (arguments[0] = t = e.$handleEvent(t)), (e.isFocus = !1);
                  },
                },
              }),
            ],
            2
          );
        },
        n = [];
    },
    "5d26": function (e, t, i) {
      "use strict";
      i("7a82");
      var a = i("4ea4").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i("a9e3"),
        i("99af"),
        i("ac1f"),
        i("5319");
      var n = a(i("ea24")),
        r = {
          name: "u-code-input",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, n.default],
          data: function () {
            return { inputValue: "", isFocus: this.focus };
          },
          watch: {
            value: {
              immediate: !0,
              handler: function (e) {
                this.inputValue = String(e).substring(0, this.maxlength);
              },
            },
          },
          computed: {
            codeLength: function () {
              return new Array(Number(this.maxlength));
            },
            itemStyle: function () {
              var e = this;
              return function (t) {
                var i = uni.$u.addUnit,
                  a = { width: i(e.size), height: i(e.size) };
                return (
                  "box" === e.mode &&
                    ((a.border = ""
                      .concat(e.hairline ? 0.5 : 1, "px solid ")
                      .concat(e.borderColor)),
                    0 === uni.$u.getPx(e.space) &&
                      (0 === t &&
                        ((a.borderTopLeftRadius = "3px"),
                        (a.borderBottomLeftRadius = "3px")),
                      t === e.codeLength.length - 1 &&
                        ((a.borderTopRightRadius = "3px"),
                        (a.borderBottomRightRadius = "3px")),
                      t !== e.codeLength.length - 1 &&
                        (a.borderRight = "none"))),
                  t !== e.codeLength.length - 1
                    ? (a.marginRight = i(e.space))
                    : (a.marginRight = 0),
                  a
                );
              };
            },
            codeArray: function () {
              return String(this.inputValue).split("");
            },
            lineStyle: function () {
              var e = {};
              return (
                (e.height = this.hairline ? "2px" : "4px"),
                (e.width = uni.$u.addUnit(this.size)),
                (e.backgroundColor = this.borderColor),
                e
              );
            },
          },
          methods: {
            inputHandler: function (e) {
              var t = this,
                i = e.detail.value;
              (this.inputValue = i),
                this.disabledDot &&
                  this.$nextTick(function () {
                    t.inputValue = i.replace(".", "");
                  }),
                this.$emit("change", i),
                this.$emit("input", i),
                String(i).length >= Number(this.maxlength) &&
                  this.$emit("finish", i);
            },
          },
        };
      t.default = r;
    },
    "5de6": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return n;
      }),
        i.d(t, "c", function () {
          return r;
        }),
        i.d(t, "a", function () {
          return a;
        });
      var a = {
          uPopup: i("6c36").default,
          uLine: i("985f").default,
          uLoadingIcon: i("cf6a").default,
        },
        n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "u-popup",
            {
              attrs: {
                mode: "center",
                zoom: e.zoom,
                show: e.show,
                customStyle: {
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginTop: "-" + e.$u.addUnit(e.negativeTop),
                },
                closeOnClickOverlay: e.closeOnClickOverlay,
                safeAreaInsetBottom: !1,
                duration: 400,
              },
              on: {
                click: function (t) {
                  (arguments[0] = t = e.$handleEvent(t)),
                    e.clickHandler.apply(void 0, arguments);
                },
              },
            },
            [
              i(
                "v-uni-view",
                {
                  staticClass: "u-modal",
                  style: { width: e.$u.addUnit(e.width) },
                },
                [
                  e.title
                    ? i("v-uni-text", { staticClass: "u-modal__title" }, [
                        e._v(e._s(e.title)),
                      ])
                    : e._e(),
                  i(
                    "v-uni-view",
                    {
                      staticClass: "u-modal__content",
                      style: { paddingTop: (e.title ? 12 : 25) + "px" },
                    },
                    [
                      e._t("default", [
                        i(
                          "v-uni-text",
                          { staticClass: "u-modal__content__text" },
                          [e._v(e._s(e.content))]
                        ),
                      ]),
                    ],
                    2
                  ),
                  e.$slots.confirmButton
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "u-modal__button-group--confirm-button",
                        },
                        [e._t("confirmButton")],
                        2
                      )
                    : [
                        i("u-line"),
                        i(
                          "v-uni-view",
                          {
                            staticClass: "u-modal__button-group",
                            style: {
                              flexDirection: e.buttonReverse
                                ? "row-reverse"
                                : "row",
                            },
                          },
                          [
                            e.showCancelButton
                              ? i(
                                  "v-uni-view",
                                  {
                                    staticClass:
                                      "u-modal__button-group__wrapper u-modal__button-group__wrapper--cancel",
                                    class: [
                                      e.showCancelButton &&
                                        !e.showConfirmButton &&
                                        "u-modal__button-group__wrapper--only-cancel",
                                    ],
                                    attrs: {
                                      "hover-stay-time": 150,
                                      "hover-class":
                                        "u-modal__button-group__wrapper--hover",
                                    },
                                    on: {
                                      click: function (t) {
                                        (arguments[0] = t = e.$handleEvent(t)),
                                          e.cancelHandler.apply(
                                            void 0,
                                            arguments
                                          );
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "v-uni-text",
                                      {
                                        staticClass:
                                          "u-modal__button-group__wrapper__text",
                                        style: { color: e.cancelColor },
                                      },
                                      [e._v(e._s(e.cancelText))]
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            e.showConfirmButton && e.showCancelButton
                              ? i("u-line", { attrs: { direction: "column" } })
                              : e._e(),
                            e.showConfirmButton
                              ? i(
                                  "v-uni-view",
                                  {
                                    staticClass:
                                      "u-modal__button-group__wrapper u-modal__button-group__wrapper--confirm",
                                    class: [
                                      !e.showCancelButton &&
                                        e.showConfirmButton &&
                                        "u-modal__button-group__wrapper--only-confirm",
                                    ],
                                    attrs: {
                                      "hover-stay-time": 150,
                                      "hover-class":
                                        "u-modal__button-group__wrapper--hover",
                                    },
                                    on: {
                                      click: function (t) {
                                        (arguments[0] = t = e.$handleEvent(t)),
                                          e.confirmHandler.apply(
                                            void 0,
                                            arguments
                                          );
                                      },
                                    },
                                  },
                                  [
                                    e.loading
                                      ? i("u-loading-icon")
                                      : i(
                                          "v-uni-text",
                                          {
                                            staticClass:
                                              "u-modal__button-group__wrapper__text",
                                            style: { color: e.confirmColor },
                                          },
                                          [e._v(e._s(e.confirmText))]
                                        ),
                                  ],
                                  1
                                )
                              : e._e(),
                          ],
                          1
                        ),
                      ],
                ],
                2
              ),
            ],
            1
          );
        },
        r = [];
    },
    "6b46": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("d5a0"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = n.a;
    },
    "6ec0": function (e, t, i) {
      var a = i("4ad7");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var n = i("4f06").default;
      n("f4173818", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7260: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("001b"),
        n = i("be51");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return n[e];
            });
          })(r);
      i("e791");
      var o = i("f0c5"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "4cff2aef",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    "7bcf": function (e, t, i) {
      "use strict";
      i("7a82");
      var a = i("4ea4").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = a(i("4be7")),
        r = {
          name: "u-modal",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, n.default],
          data: function () {
            return { loading: !1 };
          },
          watch: {
            show: function (e) {
              e && this.loading && (this.loading = !1);
            },
          },
          methods: {
            confirmHandler: function () {
              this.asyncClose && (this.loading = !0), this.$emit("confirm");
            },
            cancelHandler: function () {
              this.$emit("cancel");
            },
            clickHandler: function () {
              this.closeOnClickOverlay && this.$emit("close");
            },
          },
        };
      t.default = r;
    },
    "7d17": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("a997"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = n.a;
    },
    "851d": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("50ff"),
        n = i("3b1d");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return n[e];
            });
          })(r);
      i("1b56");
      var o = i("f0c5"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "53a9fd8a",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    "901e": function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return n;
      }),
        i.d(t, "c", function () {
          return r;
        }),
        i.d(t, "a", function () {
          return a;
        });
      var a = { uLoadingIcon: i("cf6a").default },
        n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "v-uni-view",
            {
              staticClass: "u-switch",
              class: [e.disabled && "u-switch--disabled"],
              style: [e.switchStyle, e.$u.addStyle(e.customStyle)],
              on: {
                click: function (t) {
                  (arguments[0] = t = e.$handleEvent(t)),
                    e.clickHandler.apply(void 0, arguments);
                },
              },
            },
            [
              i("v-uni-view", {
                staticClass: "u-switch__bg",
                style: [e.bgStyle],
              }),
              i(
                "v-uni-view",
                {
                  ref: "u-switch__node",
                  staticClass: "u-switch__node",
                  class: [e.value && "u-switch__node--on"],
                  style: [e.nodeStyle],
                },
                [
                  i("u-loading-icon", {
                    attrs: {
                      show: e.loading,
                      mode: "circle",
                      timingFunction: "linear",
                      color: e.value ? e.activeColor : "#AAABAD",
                      size: 0.6 * e.size,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [];
    },
    9215: function (e, t, i) {
      var a = i("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-12709030], uni-scroll-view[data-v-12709030], uni-swiper-item[data-v-12709030]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-switch[data-v-12709030]{display:flex;flex-direction:row;box-sizing:border-box;position:relative;background-color:#fff;border-width:1px;border-radius:100px;transition:background-color .4s;border-color:rgba(0,0,0,.12);border-style:solid;justify-content:flex-end;align-items:center;overflow:hidden}.u-switch__node[data-v-12709030]{display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:100px;background-color:#fff;border-radius:100px;box-shadow:1px 1px 1px 0 rgba(0,0,0,.25);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;transition-timing-function:cubic-bezier(.3,1.05,.4,1.05)}.u-switch__bg[data-v-12709030]{position:absolute;border-radius:100px;background-color:#fff;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;border-top-left-radius:0;border-bottom-left-radius:0;transition-timing-function:ease}.u-switch--disabled[data-v-12709030]{opacity:.6}',
          "",
        ]),
        (e.exports = t);
    },
    a997: function (e, t, i) {
      "use strict";
      i("7a82");
      var a = i("4ea4").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i("a9e3");
      var n = a(i("d50e")),
        r = {
          name: "u-switch",
          mixins: [uni.$u.mpMixin, uni.$u.mixin, n.default],
          watch: {
            value: {
              immediate: !0,
              handler: function (e) {
                e !== this.inactiveValue &&
                  e !== this.activeValue &&
                  uni.$u.error(
                    "v-model绑定的值必须为inactiveValue、activeValue二者之一"
                  );
              },
            },
          },
          data: function () {
            return { bgColor: "#ffffff" };
          },
          computed: {
            isActive: function () {
              return this.value === this.activeValue;
            },
            switchStyle: function () {
              var e = {};
              return (
                (e.width = uni.$u.addUnit(2 * this.size + 2)),
                (e.height = uni.$u.addUnit(Number(this.size) + 2)),
                this.customInactiveColor &&
                  (e.borderColor = "rgba(0, 0, 0, 0)"),
                (e.backgroundColor = this.isActive
                  ? this.activeColor
                  : this.inactiveColor),
                e
              );
            },
            nodeStyle: function () {
              var e = {};
              (e.width = uni.$u.addUnit(this.size - this.space)),
                (e.height = uni.$u.addUnit(this.size - this.space));
              var t = this.isActive
                ? uni.$u.addUnit(this.space)
                : uni.$u.addUnit(this.size);
              return (e.transform = "translateX(-".concat(t, ")")), e;
            },
            bgStyle: function () {
              var e = {};
              return (
                (e.width = uni.$u.addUnit(
                  2 * Number(this.size) - this.size / 2
                )),
                (e.height = uni.$u.addUnit(this.size)),
                (e.backgroundColor = this.inactiveColor),
                (e.transform = "scale(".concat(this.isActive ? 0 : 1, ")")),
                e
              );
            },
            customInactiveColor: function () {
              return (
                "#fff" !== this.inactiveColor &&
                "#ffffff" !== this.inactiveColor
              );
            },
          },
          methods: {
            clickHandler: function () {
              var e = this;
              if (!this.disabled && !this.loading) {
                var t = this.isActive ? this.inactiveValue : this.activeValue;
                this.asyncChange || this.$emit("input", t),
                  this.$nextTick(function () {
                    e.$emit("change", t);
                  });
              }
            },
          },
        };
      t.default = r;
    },
    b616: function (e, t, i) {
      "use strict";
      var a = i("6ec0"),
        n = i.n(a);
      n.a;
    },
    b869: function (e, t, i) {
      var a = i("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3f114883], uni-scroll-view[data-v-3f114883], uni-swiper-item[data-v-3f114883]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-modal[data-v-3f114883]{width:%?650?%;border-radius:6px;overflow:hidden}.u-modal__title[data-v-3f114883]{font-size:16px;font-weight:700;color:#606266;text-align:center;padding-top:25px}.u-modal__content[data-v-3f114883]{padding:12px 25px 25px 25px;display:flex;flex-direction:row;justify-content:center}.u-modal__content__text[data-v-3f114883]{font-size:15px;color:#606266;flex:1}.u-modal__button-group[data-v-3f114883]{display:flex;flex-direction:row}.u-modal__button-group--confirm-button[data-v-3f114883]{flex-direction:column;padding:0 25px 15px 25px}.u-modal__button-group__wrapper[data-v-3f114883]{flex:1;display:flex;flex-direction:row;justify-content:center;align-items:center;height:48px}.u-modal__button-group__wrapper--confirm[data-v-3f114883], .u-modal__button-group__wrapper--only-cancel[data-v-3f114883]{border-bottom-right-radius:6px}.u-modal__button-group__wrapper--cancel[data-v-3f114883], .u-modal__button-group__wrapper--only-confirm[data-v-3f114883]{border-bottom-left-radius:6px}.u-modal__button-group__wrapper--hover[data-v-3f114883]{background-color:#f3f4f6}.u-modal__button-group__wrapper__text[data-v-3f114883]{color:#606266;font-size:16px;text-align:center}',
          "",
        ]),
        (e.exports = t);
    },
    be51: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("c397"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = n.a;
    },
    c397: function (e, t, i) {
      "use strict";
      i("7a82");
      var a = i("4ea4").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i("d3b7"),
        i("c740");
      var n = a(i("5530")),
        r = a(i("36cd")),
        o = i("26cb"),
        s = {
          components: {
            "aki-particles": function () {
              return Promise.resolve().then(function () {
                return (0, r.default)(i("d79a"));
              });
            },
          },
          data: function () {
            return {
              v: "竖屏版 V1.0",
              particlestyle: { style: "snow", zindex: 1 },
              title: "Hello",
              list: [
                {
                  id: 1,
                  text: "基础模式",
                  url: "/pagesA/chess/chess?mode=1",
                  goFlag: !1,
                  lockFlag: !1,
                  hot: !1,
                },
                {
                  id: 2,
                  text: "恋爱版",
                  url: "/pagesA/chess/chess?mode=2",
                  goFlag: !1,
                  lockFlag: !1,
                  hot: !1,
                },
                {
                  id: 3,
                  text: "情侣版",
                  url: "/pagesA/chess/chess?mode=3",
                  goFlag: !1,
                  lockFlag: !1,
                  hot: !1,
                },
                {
                  id: 4,
                  text: "高级版",
                  url: "/pagesA/chess/chess?mode=4",
                  goFlag: !1,
                  lockFlag: !1,
                  hot: !1,
                },
                {
                  id: 5,
                  text: "私密版",
                  url: "/pagesA/chess/chess?mode=5",
                  goFlag: !1,
                  lockFlag: !1,
                  hot: !1,
                },
                {
                  id: 6,
                  text: "组合模式",
                  url: "/pagesA/chess/chess?mode=6",
                  goFlag: !1,
                  lockFlag: !1,
                  hot: !1,
                },
                { id: 7, text: "自定义", goFlag: !1, lockFlag: !1, hot: !1 },
              ],
              flag: !1,
              setShow: !1,
              customShow: !1,
              stop: !1,
              pswShow: !1,
            };
          },
          computed: (0, n.default)(
            {},
            (0, o.mapState)([
              "voiceOpen",
              "userCustomList",
              "soundFlag",
              "identificationCode",
              "lockVip",
            ])
          ),
          methods: (0, n.default)(
            (0, n.default)(
              {},
              (0, o.mapMutations)([
                "setVoiceOpen",
                "setSoundFlag",
                "setLockVip",
              ])
            ),
            {},
            {
              lockVipClick: function () {
                this.lockVip
                  ? uni.showToast({ title: "您已永久激活", icon: "none" })
                  : (this.pswShow = !0);
              },
              finish: function (e) {
                var t = this;
                uni.showLoading({ title: "识别中" });
                var i = setTimeout(function () {
                  clearTimeout(i);
                  var a = t.identificationCode.some(function (t) {
                    alert(t);
                    alert(e);
                    return t === e;

                  });
                  a
                    ? (uni.hideLoading(),
                      (t.pswShow = !1),
                      (t.setShow = !1),
                      uni.showModal({
                        content: "激活成功！",
                        showCancel: !1,
                        success: function (e) {
                          e.confirm && t.setLockVip(!0);
                        },
                      }))
                    : (uni.hideLoading(),
                      uni.showToast({
                        title: "验证失败,请在公众号发送：我要识别码!",
                        icon: "none",
                      }));
                }, 1e3);
              },
              weGo: function (e) {
                if (this.lockVip || !e.lockFlag) {
                  if (!this.stop)
                    if (
                      ((this.stop = !0),
                      e.id != this.list[this.list.length - 1].id)
                    ) {
                      var t = this.list.findIndex(function (t) {
                        return t.id == e.id;
                      });
                      if (-1 != t) {
                        this.list[t].goFlag = !0;
                        var i = setTimeout(function () {
                          clearTimeout(i), uni.reLaunch({ url: e.url });
                        }, 500);
                      }
                    } else this.onCustom();
                } else this.pswShow = !0;
              },
              goVersion: function () {
                uni.reLaunch({ url: "/pagesA/version/version" });
              },
              goChess: function (e) {
                uni.reLaunch({
                  url: "/pagesA/chess/chess?customId=".concat(e),
                });
              },
              onNew: function () {
                uni.reLaunch({ url: "/pagesA/custom/custom" });
              },
              onCustom: function () {
                this.userCustomList.length
                  ? ((this.customShow = !0), (this.stop = !1))
                  : ((this.list[this.list.length - 1].goFlag = !0),
                    setTimeout(function () {
                      uni.reLaunch({ url: "/pagesA/custom/custom" });
                    }, 500));
              },
              soundFlagChange: function (e) {
                this.setSoundFlag(e);
              },
              voiceOpenChange: function (e) {
                this.setVoiceOpen(e);
              },
              rightClick: function () {
                this.setShow = !0;
              },
            }
          ),
        };
      t.default = s;
    },
    c945: function (e, t, i) {
      "use strict";
      var a = i("113c"),
        n = i.n(a);
      n.a;
    },
    d50e: function (e, t, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i("a9e3");
      var a = {
        props: {
          loading: { type: Boolean, default: uni.$u.props.switch.loading },
          disabled: { type: Boolean, default: uni.$u.props.switch.disabled },
          size: { type: [String, Number], default: uni.$u.props.switch.size },
          activeColor: {
            type: String,
            default: uni.$u.props.switch.activeColor,
          },
          inactiveColor: {
            type: String,
            default: uni.$u.props.switch.inactiveColor,
          },
          value: {
            type: [Boolean, String, Number],
            default: uni.$u.props.switch.value,
          },
          activeValue: {
            type: [String, Number, Boolean],
            default: uni.$u.props.switch.activeValue,
          },
          inactiveValue: {
            type: [String, Number, Boolean],
            default: uni.$u.props.switch.inactiveValue,
          },
          asyncChange: {
            type: Boolean,
            default: uni.$u.props.switch.asyncChange,
          },
          space: { type: [String, Number], default: uni.$u.props.switch.space },
        },
      };
      t.default = a;
    },
    d5a0: function (e, t, i) {
      "use strict";
      i("7a82");
      var a = i("4ea4").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      a(i("066c"));
      var n = {
        name: "akira-particles",
        props: ["particlestyle"],
        mounted: function () {
          particlesJS.load(
            "particles",
            "/uni_modules/aki-particles/static/aki-particles/particles-" +
              this.particlestyle.style +
              ".json"
          );
        },
        data: function () {
          return {};
        },
      };
      t.default = n;
    },
    d79a: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("4a77"),
        n = i("6b46");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return n[e];
            });
          })(r);
      i("b616");
      var o = i("f0c5"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "6ac0b7df",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    e1c7: function (e, t, i) {
      var a = i("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.hot[data-v-4cff2aef]{line-height:%?33?%;width:%?220?%;text-align:center;font-size:10px;font-weight:700;background-color:#dd001b;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);position:absolute;left:-20px}.bottom-bg[data-v-4cff2aef]{position:fixed;z-index:999;bottom:0;left:0;right:0;height:44px;background-color:initial!important;background-image:radial-gradient(transparent 1px,rgba(0,0,0,.396078431372549) 0);-webkit-backdrop-filter:saturate(50%) blur(4px);backdrop-filter:saturate(50%) blur(4px);background-size:4px 4px;border-bottom:%?1?% solid #000}.navbar[data-v-4cff2aef] .u-navbar__content{background-color:initial!important;background-image:radial-gradient(transparent 1px,rgba(0,0,0,.396078431372549) 0);-webkit-backdrop-filter:saturate(50%) blur(4px);backdrop-filter:saturate(50%) blur(4px);background-size:4px 4px;border-bottom:%?1?% solid #000}.particles[data-v-4cff2aef]{position:fixed;width:100%;height:100vh}.btn[data-v-4cff2aef]{overflow:hidden;min-height:%?110?%;position:relative;display:flex;flex-direction:row-reverse;align-items:center;margin-bottom:%?30?%;z-index:1;position:relative;font-size:16px;color:#fff;padding:%?35?% %?20?%;outline:none;border:%?1?% solid hsla(0,0%,100%,.1);border-radius:4px;background-color:#2d3058}.my-text[data-v-4cff2aef]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.active[data-v-4cff2aef]{transition:all .75s ease-in-out;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(1.75);transform:scale(1.75);opacity:0}.body[data-v-4cff2aef]{position:fixed;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.main[data-v-4cff2aef]{width:%?500?%}.tip-box[data-v-4cff2aef]{margin-bottom:%?15?%;color:#333;width:70vw;border-radius:%?20?%;display:flex;justify-content:space-between;align-items:center;padding:%?20?%;background-color:hsla(0,0%,100%,.5);-webkit-backdrop-filter:blur(%?18?%);backdrop-filter:blur(%?18?%);box-shadow:0 %?2?% %?24?% 0 hsla(0,0%,100%,.3)}.tip-box .tip-text[data-v-4cff2aef]{font-weight:700;color:#fff}',
          "",
        ]),
        (e.exports = t);
    },
    e267: function (e, t, i) {
      var a = i("9215");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var n = i("4f06").default;
      n("37468cae", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e791: function (e, t, i) {
      "use strict";
      var a = i("fe73"),
        n = i.n(a);
      n.a;
    },
    ea24: function (e, t, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        i("a9e3");
      var a = {
        props: {
          adjustPosition: {
            type: Boolean,
            default: uni.$u.props.codeInput.adjustPosition,
          },
          maxlength: {
            type: [String, Number],
            default: uni.$u.props.codeInput.maxlength,
          },
          dot: { type: Boolean, default: uni.$u.props.codeInput.dot },
          mode: { type: String, default: uni.$u.props.codeInput.mode },
          hairline: { type: Boolean, default: uni.$u.props.codeInput.hairline },
          space: {
            type: [String, Number],
            default: uni.$u.props.codeInput.space,
          },
          value: {
            type: [String, Number],
            default: uni.$u.props.codeInput.value,
          },
          focus: { type: Boolean, default: uni.$u.props.codeInput.focus },
          bold: { type: Boolean, default: uni.$u.props.codeInput.bold },
          color: { type: String, default: uni.$u.props.codeInput.color },
          fontSize: {
            type: [String, Number],
            default: uni.$u.props.codeInput.fontSize,
          },
          size: {
            type: [String, Number],
            default: uni.$u.props.codeInput.size,
          },
          disabledKeyboard: {
            type: Boolean,
            default: uni.$u.props.codeInput.disabledKeyboard,
          },
          borderColor: {
            type: String,
            default: uni.$u.props.codeInput.borderColor,
          },
          disabledDot: {
            type: Boolean,
            default: uni.$u.props.codeInput.disabledDot,
          },
        },
      };
      t.default = a;
    },
    f3b1: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("901e"),
        n = i("7d17");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return n[e];
            });
          })(r);
      i("4346");
      var o = i("f0c5"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "12709030",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    fe73: function (e, t, i) {
      var a = i("e1c7");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var n = i("4f06").default;
      n("12aa74e6", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
