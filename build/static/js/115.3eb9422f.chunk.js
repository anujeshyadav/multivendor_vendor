(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [115],
  {
    2228: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "AddCategory", function () {
          return N;
        });
      var n = a(839),
        r = a(45),
        s = a(10),
        o = a(11),
        l = a(13),
        c = a(12),
        i = a(0),
        u = a.n(i),
        d = a(821),
        f = a(819),
        m = a(820),
        p = a(195),
        b = a(824),
        g = a(836),
        h = a(844),
        y = a(837),
        v = a(833),
        O = a(811),
        j = a(20),
        E = a(831),
        N = (function (e) {
          Object(l.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var o;
            return (
              Object(s.a)(this, a),
              ((o = t.call(this, e)).onChangeHandler = function (e) {
                o.setState({ selectedFile: e.target.files[0] }),
                  o.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (o.changeHandler1 = function (e) {
                o.setState({ status: e.target.value });
              }),
              (o.changeHandler = function (e) {
                o.setState(Object(r.a)({}, e.target.name, e.target.value));
              }),
              (o.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("category_name", o.state.category_name),
                  t.append("desc", o.state.desc),
                  t.append("status", o.state.status),
                  null !== o.state.selectedFile &&
                    t.append(
                      "image",
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
                } catch (l) {
                  r.e(l);
                } finally {
                  r.f();
                }
                E.a
                  .post("/admin/addcategory", t)
                  .then(function (e) {
                    console.log(e),
                      o.props.history.push(
                        "/app/freshlist/category/categoryList"
                      );
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (o.state = {
                category_name: "",
                selectedFile: null,
                selectedName: "",
                desc: "",
                image: "",
                status: "",
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
                      d.a,
                      null,
                      u.a.createElement(
                        f.a,
                        { className: "m-2" },
                        u.a.createElement(
                          m.a,
                          null,
                          u.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add Category"
                          )
                        ),
                        u.a.createElement(
                          m.a,
                          null,
                          u.a.createElement(
                            p.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return j.a.push(
                                  "/app/freshlist/category/categoryList"
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
                          g.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            f.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              u.a.createElement(
                                h.a,
                                null,
                                u.a.createElement(y.a, null, "Category Name"),
                                u.a.createElement(v.a, {
                                  type: "text",
                                  placeholder: "Customer Name",
                                  name: "category_name",
                                  value: this.state.category_name,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            u.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              u.a.createElement(
                                h.a,
                                null,
                                u.a.createElement(y.a, null, "Description"),
                                u.a.createElement(v.a, {
                                  type: "text",
                                  placeholder: "Enter Here",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            u.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              u.a.createElement(
                                h.a,
                                null,
                                u.a.createElement(y.a, null, "Category Image "),
                                u.a.createElement(O.a, {
                                  type: "file",
                                  name: "image",
                                  value: this.state.image,
                                  onChange: this.onChangeHandler,
                                })
                              )
                            )
                          ),
                          u.a.createElement(
                            f.a,
                            null,
                            u.a.createElement(
                              p.a.Ripple,
                              {
                                color: "danger",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Add Category"
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
        })(i.Component);
      t.default = N;
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
        l = a(0),
        c = a.n(l),
        i = a(1),
        u = a.n(i),
        d = a(5),
        f = a.n(d),
        m = a(4),
        p = [
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
          tag: m.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        g = (function (e) {
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
                l = e.valid,
                i = e.invalid,
                u = e.tag,
                d = e.addon,
                b = e.plaintext,
                g = e.innerRef,
                h = Object(r.a)(e, p),
                y = ["radio", "checkbox"].indexOf(s) > -1,
                v = new RegExp("\\D", "g"),
                O = u || ("select" === s || "textarea" === s ? s : "input"),
                j = "form-control";
              b
                ? ((j += "-plaintext"), (O = u || "input"))
                : "file" === s
                ? (j += "-file")
                : "range" === s
                ? (j += "-range")
                : y && (j = d ? null : "form-check-input"),
                h.size &&
                  v.test(h.size) &&
                  (Object(m.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (o = h.size),
                  delete h.size);
              var E = Object(m.mapToCssModules)(
                f()(
                  t,
                  i && "is-invalid",
                  l && "is-valid",
                  !!o && "form-control-" + o,
                  j
                ),
                a
              );
              return (
                ("input" === O || (u && "function" === typeof u)) &&
                  (h.type = s),
                h.children &&
                  !b &&
                  "select" !== s &&
                  "string" === typeof O &&
                  "select" !== O &&
                  (Object(m.warnOnce)(
                    'Input with a type of "' +
                      s +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete h.children),
                c.a.createElement(
                  O,
                  Object(n.a)({}, h, {
                    ref: g,
                    className: E,
                    "aria-invalid": i,
                  })
                )
              );
            }),
            t
          );
        })(c.a.Component);
      (g.propTypes = b), (g.defaultProps = { type: "text" }), (t.a = g);
    },
    836: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(16),
        o = a(18),
        l = a(0),
        c = a.n(l),
        i = a(1),
        u = a.n(i),
        d = a(5),
        f = a.n(d),
        m = a(4),
        p = ["className", "cssModule", "inline", "tag", "innerRef"],
        b = {
          children: u.a.node,
          inline: u.a.bool,
          tag: m.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        g = (function (e) {
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
                l = e.innerRef,
                i = Object(r.a)(e, p),
                u = Object(m.mapToCssModules)(f()(t, !!s && "form-inline"), a);
              return c.a.createElement(
                o,
                Object(n.a)({}, i, { ref: l, className: u })
              );
            }),
            t
          );
        })(l.Component);
      (g.propTypes = b), (g.defaultProps = { tag: "form" }), (t.a = g);
    },
    837: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(0),
        o = a.n(s),
        l = a(1),
        c = a.n(l),
        i = a(5),
        u = a.n(i),
        d = a(4),
        f = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        m = c.a.oneOfType([c.a.number, c.a.string]),
        p = c.a.oneOfType([
          c.a.bool,
          c.a.string,
          c.a.number,
          c.a.shape({ size: m, order: m, offset: m }),
        ]),
        b = {
          children: c.a.node,
          hidden: c.a.bool,
          check: c.a.bool,
          size: c.a.string,
          for: c.a.string,
          tag: d.tagPropType,
          className: c.a.string,
          cssModule: c.a.object,
          xs: p,
          sm: p,
          md: p,
          lg: p,
          xl: p,
          widths: c.a.array,
        },
        g = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        h = function (e, t, a) {
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
        y = function (e) {
          var t = e.className,
            a = e.cssModule,
            s = e.hidden,
            l = e.widths,
            c = e.tag,
            i = e.check,
            m = e.size,
            p = e.for,
            b = Object(r.a)(e, f),
            g = [];
          l.forEach(function (t, n) {
            var r = e[t];
            if ((delete b[t], r || "" === r)) {
              var s,
                o = !n;
              if (Object(d.isObject)(r)) {
                var l,
                  c = o ? "-" : "-" + t + "-";
                (s = h(o, t, r.size)),
                  g.push(
                    Object(d.mapToCssModules)(
                      u()(
                        (((l = {})[s] = r.size || "" === r.size),
                        (l["order" + c + r.order] = r.order || 0 === r.order),
                        (l["offset" + c + r.offset] =
                          r.offset || 0 === r.offset),
                        l)
                      )
                    ),
                    a
                  );
              } else (s = h(o, t, r)), g.push(s);
            }
          });
          var y = Object(d.mapToCssModules)(
            u()(
              t,
              !!s && "sr-only",
              !!i && "form-check-label",
              !!m && "col-form-label-" + m,
              g,
              !!g.length && "col-form-label"
            ),
            a
          );
          return o.a.createElement(
            c,
            Object(n.a)({ htmlFor: p }, b, { className: y })
          );
        };
      (y.propTypes = b), (y.defaultProps = g), (t.a = y);
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
          l = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (l = !0), (s = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (l) throw s;
            }
          },
        };
      }
    },
    844: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(0),
        o = a.n(s),
        l = a(1),
        c = a.n(l),
        i = a(5),
        u = a.n(i),
        d = a(4),
        f = [
          "className",
          "cssModule",
          "row",
          "disabled",
          "check",
          "inline",
          "tag",
        ],
        m = {
          children: c.a.node,
          row: c.a.bool,
          check: c.a.bool,
          inline: c.a.bool,
          disabled: c.a.bool,
          tag: d.tagPropType,
          className: c.a.string,
          cssModule: c.a.object,
        },
        p = function (e) {
          var t = e.className,
            a = e.cssModule,
            s = e.row,
            l = e.disabled,
            c = e.check,
            i = e.inline,
            m = e.tag,
            p = Object(r.a)(e, f),
            b = Object(d.mapToCssModules)(
              u()(
                t,
                !!s && "row",
                c ? "form-check" : "form-group",
                !(!c || !i) && "form-check-inline",
                !(!c || !l) && "disabled"
              ),
              a
            );
          return (
            "fieldset" === m && (p.disabled = l),
            o.a.createElement(m, Object(n.a)({}, p, { className: b }))
          );
        };
      (p.propTypes = m), (p.defaultProps = { tag: "div" }), (t.a = p);
    },
  },
]);
//# sourceMappingURL=115.3eb9422f.chunk.js.map
