(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [163],
  {
    2306: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "AddProImg", function () {
          return E;
        });
      var n = a(839),
        r = a(45),
        s = a(10),
        o = a(11),
        i = a(13),
        l = a(12),
        c = a(0),
        u = a.n(c),
        f = a(821),
        d = a(819),
        p = a(820),
        m = a(195),
        b = a(824),
        h = a(836),
        g = a(837),
        v = a(833),
        y = a(811),
        O = a(20),
        j = a(831),
        E = (function (e) {
          Object(i.a)(a, e);
          var t = Object(l.a)(a);
          function a(e) {
            var o;
            return (
              Object(s.a)(this, a),
              ((o = t.call(this, e)).onChangeHandler = function (e) {
                o.setState({ selectedFile: e.target.files[0] }),
                  o.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (o.changeHandler = function (e) {
                o.setState(Object(r.a)({}, e.target.name, e.target.value));
              }),
              (o.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("product_title", o.state.product_title),
                  null !== o.state.selectedFile &&
                    t.append(
                      "product_img",
                      o.state.selectedFile,
                      o.state.selectedName
                    );
                var a,
                  r = Object(n.a)(t.values());
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var s = a.value;
                    console.log(s);
                  }
                } catch (u) {
                  r.e(u);
                } finally {
                  r.f();
                }
                var i,
                  l = Object(n.a)(t.keys());
                try {
                  for (l.s(); !(i = l.n()).done; ) {
                    var c = i.value;
                    console.log(c);
                  }
                } catch (u) {
                  l.e(u);
                } finally {
                  l.f();
                }
                j.a
                  .post("/add_Img", t)
                  .then(function (e) {
                    console.log(e),
                      o.props.history.push(
                        "/app/website/websiteProduct/websiteProImg"
                      );
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (o.state = {
                product_title: "",
                product_img: "",
                selectedFile: null,
                selectedName: "",
              }),
              o
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      f.a,
                      null,
                      u.a.createElement(
                        d.a,
                        { className: "m-2" },
                        u.a.createElement(
                          p.a,
                          null,
                          u.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add Product Image"
                          )
                        ),
                        u.a.createElement(
                          p.a,
                          null,
                          u.a.createElement(
                            m.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return O.a.push(
                                  "/app/website/websiteProduct/websiteProImg"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      u.a.createElement(
                        b.a,
                        null,
                        u.a.createElement(
                          h.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            d.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              p.a,
                              { lg: "6", md: "6" },
                              u.a.createElement(g.a, null, "Image Title"),
                              u.a.createElement(v.a, {
                                type: "text",
                                name: "product_title",
                                value: this.state.product_title,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              p.a,
                              { lg: "6", md: "6" },
                              u.a.createElement(g.a, null, "Product Image "),
                              u.a.createElement(y.a, {
                                type: "file",
                                onChange: this.onChangeHandler,
                              }),
                              u.a.createElement(
                                "span",
                                { className: "" },
                                "(Enter image with 240px X 220px with PNG format)"
                              )
                            )
                          ),
                          u.a.createElement(
                            d.a,
                            null,
                            u.a.createElement(
                              m.a.Ripple,
                              {
                                color: "primary",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Add Product Image"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(c.Component);
      t.default = E;
    },
    831: function (e, t, a) {
      "use strict";
      var n = a(44),
        r = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = r;
    },
    833: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(16),
        o = a(18),
        i = a(0),
        l = a.n(i),
        c = a(1),
        u = a.n(c),
        f = a(5),
        d = a.n(f),
        p = a(4),
        m = [
          "className",
          "cssModule",
          "type",
          "bsSize",
          "valid",
          "invalid",
          "tag",
          "addon",
          "plaintext",
          "innerRef",
        ],
        b = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: p.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(s.a)(a)
              )),
              (a.focus = a.focus.bind(Object(s.a)(a))),
              a
            );
          }
          Object(o.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.focus = function () {
              this.ref && this.ref.focus();
            }),
            (a.render = function () {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                s = e.type,
                o = e.bsSize,
                i = e.valid,
                c = e.invalid,
                u = e.tag,
                f = e.addon,
                b = e.plaintext,
                h = e.innerRef,
                g = Object(r.a)(e, m),
                v = ["radio", "checkbox"].indexOf(s) > -1,
                y = new RegExp("\\D", "g"),
                O = u || ("select" === s || "textarea" === s ? s : "input"),
                j = "form-control";
              b
                ? ((j += "-plaintext"), (O = u || "input"))
                : "file" === s
                ? (j += "-file")
                : "range" === s
                ? (j += "-range")
                : v && (j = f ? null : "form-check-input"),
                g.size &&
                  y.test(g.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (o = g.size),
                  delete g.size);
              var E = Object(p.mapToCssModules)(
                d()(
                  t,
                  c && "is-invalid",
                  i && "is-valid",
                  !!o && "form-control-" + o,
                  j
                ),
                a
              );
              return (
                ("input" === O || (u && "function" === typeof u)) &&
                  (g.type = s),
                g.children &&
                  !b &&
                  "select" !== s &&
                  "string" === typeof O &&
                  "select" !== O &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      s +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                l.a.createElement(
                  O,
                  Object(n.a)({}, g, {
                    ref: h,
                    className: E,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            t
          );
        })(l.a.Component);
      (h.propTypes = b), (h.defaultProps = { type: "text" }), (t.a = h);
    },
    836: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(16),
        o = a(18),
        i = a(0),
        l = a.n(i),
        c = a(1),
        u = a.n(c),
        f = a(5),
        d = a.n(f),
        p = a(4),
        m = ["className", "cssModule", "inline", "tag", "innerRef"],
        b = {
          children: u.a.node,
          inline: u.a.bool,
          tag: p.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(s.a)(a)
              )),
              (a.submit = a.submit.bind(Object(s.a)(a))),
              a
            );
          }
          Object(o.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.submit = function () {
              this.ref && this.ref.submit();
            }),
            (a.render = function () {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                s = e.inline,
                o = e.tag,
                i = e.innerRef,
                c = Object(r.a)(e, m),
                u = Object(p.mapToCssModules)(d()(t, !!s && "form-inline"), a);
              return l.a.createElement(
                o,
                Object(n.a)({}, c, { ref: i, className: u })
              );
            }),
            t
          );
        })(i.Component);
      (h.propTypes = b), (h.defaultProps = { tag: "form" }), (t.a = h);
    },
    837: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(0),
        o = a.n(s),
        i = a(1),
        l = a.n(i),
        c = a(5),
        u = a.n(c),
        f = a(4),
        d = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        p = l.a.oneOfType([l.a.number, l.a.string]),
        m = l.a.oneOfType([
          l.a.bool,
          l.a.string,
          l.a.number,
          l.a.shape({ size: p, order: p, offset: p }),
        ]),
        b = {
          children: l.a.node,
          hidden: l.a.bool,
          check: l.a.bool,
          size: l.a.string,
          for: l.a.string,
          tag: f.tagPropType,
          className: l.a.string,
          cssModule: l.a.object,
          xs: m,
          sm: m,
          md: m,
          lg: m,
          xl: m,
          widths: l.a.array,
        },
        h = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function (e, t, a) {
          return !0 === a || "" === a
            ? e
              ? "col"
              : "col-" + t
            : "auto" === a
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + a
            : "col-" + t + "-" + a;
        },
        v = function (e) {
          var t = e.className,
            a = e.cssModule,
            s = e.hidden,
            i = e.widths,
            l = e.tag,
            c = e.check,
            p = e.size,
            m = e.for,
            b = Object(r.a)(e, d),
            h = [];
          i.forEach(function (t, n) {
            var r = e[t];
            if ((delete b[t], r || "" === r)) {
              var s,
                o = !n;
              if (Object(f.isObject)(r)) {
                var i,
                  l = o ? "-" : "-" + t + "-";
                (s = g(o, t, r.size)),
                  h.push(
                    Object(f.mapToCssModules)(
                      u()(
                        (((i = {})[s] = r.size || "" === r.size),
                        (i["order" + l + r.order] = r.order || 0 === r.order),
                        (i["offset" + l + r.offset] =
                          r.offset || 0 === r.offset),
                        i)
                      )
                    ),
                    a
                  );
              } else (s = g(o, t, r)), h.push(s);
            }
          });
          var v = Object(f.mapToCssModules)(
            u()(
              t,
              !!s && "sr-only",
              !!c && "form-check-label",
              !!p && "col-form-label-" + p,
              h,
              !!h.length && "col-form-label"
            ),
            a
          );
          return o.a.createElement(
            l,
            Object(n.a)({ htmlFor: m }, b, { className: v })
          );
        };
      (v.propTypes = b), (v.defaultProps = h), (t.a = v);
    },
    839: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var n = a(104);
      function r(e) {
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = Object(n.a)(e))) {
            var t = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          s,
          o = !0,
          i = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (i = !0), (s = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (i) throw s;
            }
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=163.6b7728fb.chunk.js.map
