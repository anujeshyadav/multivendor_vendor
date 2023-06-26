(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [152],
  {
    2162: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return N;
        });
      var n = a(839),
        r = a(45),
        s = a(10),
        l = a(11),
        c = a(13),
        o = a(12),
        i = a(0),
        u = a.n(i),
        f = a(821),
        m = a(819),
        d = a(820),
        h = a(195),
        p = a(824),
        b = a(836),
        g = a(837),
        y = a(833),
        v = a(831),
        E = a(20),
        O = a(846),
        j = a.n(O),
        N = (function (e) {
          Object(c.a)(a, e);
          var t = Object(o.a)(a);
          function a(e) {
            var l;
            return (
              Object(s.a)(this, a),
              ((l = t.call(this, e)).onChangeHandler = function (e) {
                l.setState({ selectedFile: e.target.files[0] }),
                  l.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (l.onChangeHandler = function (e) {
                l.setState({ selectedFile: e.target.files }),
                  l.setState({ selectedName: e.target.files.name }),
                  console.log(e.target.files);
              }),
              (l.changeHandler1 = function (e) {
                l.setState({ status: e.target.value });
              }),
              (l.changeHandler = function (e) {
                l.setState(Object(r.a)({}, e.target.name, e.target.value));
              }),
              (l.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("batch_title", l.state.batch_title),
                  t.append("batchtype", l.state.batchtype);
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
                var c,
                  o = Object(n.a)(t.keys());
                try {
                  for (o.s(); !(c = o.n()).done; ) {
                    var i = c.value;
                    console.log(i);
                  }
                } catch (u) {
                  o.e(u);
                } finally {
                  o.f();
                }
                v.a
                  .post("/addbatch", t)
                  .then(function (e) {
                    console.log(e),
                      j()("Successful!", "You clicked the button!", "success"),
                      l.props.history.push("/app/freshlist/batch/batchList");
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (l.state = {
                batch_title: "",
                selectedFile: void 0,
                selectedName: "",
              }),
              l
            );
          }
          return (
            Object(l.a)(a, [
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
                        m.a,
                        { className: "m-2" },
                        u.a.createElement(
                          d.a,
                          null,
                          u.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Assign to Batch"
                          )
                        ),
                        u.a.createElement(
                          d.a,
                          null,
                          u.a.createElement(
                            h.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return E.a.push(
                                  "/app/freshlist/hub/createbatch"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      u.a.createElement(
                        p.a,
                        null,
                        u.a.createElement(
                          b.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            m.a,
                            null,
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(g.a, null, "Batch"),
                              u.a.createElement(y.a, {
                                required: !0,
                                type: "text",
                                name: "batch_number",
                                placeholder: "Enter Batch Number",
                                value: this.state.batch_number,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(g.a, null, "Rack Number"),
                              u.a.createElement(y.a, {
                                required: !0,
                                type: "number",
                                name: "rack_number",
                                placeholder: "Enter Rack Number",
                                value: this.state.rack_number,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(g.a, null, "Shelf Life"),
                              u.a.createElement(y.a, {
                                required: !0,
                                type: "text",
                                name: "shelf_life",
                                placeholder: "Shelf Life",
                                value: this.state.shelf_life,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(g.a, null, "Expiry Date"),
                              u.a.createElement(y.a, {
                                required: !0,
                                type: "date",
                                name: "expiry_date",
                                placeholder: "Expiry Date",
                                value: this.state.expiry_date,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(g.a, null, "Stock"),
                              u.a.createElement(y.a, {
                                required: !0,
                                type: "text",
                                name: "stock",
                                placeholder: "Stock",
                                value: this.state.stock,
                                onChange: this.changeHandler,
                              })
                            ),
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(g.a, null, "Notify"),
                              u.a.createElement(y.a, {
                                required: !0,
                                type: "text",
                                name: "notify",
                                placeholder: "Notify",
                                value: this.state.notify,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          u.a.createElement(
                            m.a,
                            null,
                            u.a.createElement(
                              d.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              u.a.createElement(
                                h.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-1 mb-1",
                                },
                                "Add Batch"
                              )
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
        l = a(18),
        c = a(0),
        o = a.n(c),
        i = a(1),
        u = a.n(i),
        f = a(5),
        m = a.n(f),
        d = a(4),
        h = [
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
        p = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: d.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        b = (function (e) {
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
          Object(l.a)(t, e);
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
                l = e.bsSize,
                c = e.valid,
                i = e.invalid,
                u = e.tag,
                f = e.addon,
                p = e.plaintext,
                b = e.innerRef,
                g = Object(r.a)(e, h),
                y = ["radio", "checkbox"].indexOf(s) > -1,
                v = new RegExp("\\D", "g"),
                E = u || ("select" === s || "textarea" === s ? s : "input"),
                O = "form-control";
              p
                ? ((O += "-plaintext"), (E = u || "input"))
                : "file" === s
                ? (O += "-file")
                : "range" === s
                ? (O += "-range")
                : y && (O = f ? null : "form-check-input"),
                g.size &&
                  v.test(g.size) &&
                  (Object(d.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = g.size),
                  delete g.size);
              var j = Object(d.mapToCssModules)(
                m()(
                  t,
                  i && "is-invalid",
                  c && "is-valid",
                  !!l && "form-control-" + l,
                  O
                ),
                a
              );
              return (
                ("input" === E || (u && "function" === typeof u)) &&
                  (g.type = s),
                g.children &&
                  !p &&
                  "select" !== s &&
                  "string" === typeof E &&
                  "select" !== E &&
                  (Object(d.warnOnce)(
                    'Input with a type of "' +
                      s +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                o.a.createElement(
                  E,
                  Object(n.a)({}, g, {
                    ref: b,
                    className: j,
                    "aria-invalid": i,
                  })
                )
              );
            }),
            t
          );
        })(o.a.Component);
      (b.propTypes = p), (b.defaultProps = { type: "text" }), (t.a = b);
    },
    836: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(16),
        l = a(18),
        c = a(0),
        o = a.n(c),
        i = a(1),
        u = a.n(i),
        f = a(5),
        m = a.n(f),
        d = a(4),
        h = ["className", "cssModule", "inline", "tag", "innerRef"],
        p = {
          children: u.a.node,
          inline: u.a.bool,
          tag: d.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        b = (function (e) {
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
          Object(l.a)(t, e);
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
                l = e.tag,
                c = e.innerRef,
                i = Object(r.a)(e, h),
                u = Object(d.mapToCssModules)(m()(t, !!s && "form-inline"), a);
              return o.a.createElement(
                l,
                Object(n.a)({}, i, { ref: c, className: u })
              );
            }),
            t
          );
        })(c.Component);
      (b.propTypes = p), (b.defaultProps = { tag: "form" }), (t.a = b);
    },
    837: function (e, t, a) {
      "use strict";
      var n = a(6),
        r = a(7),
        s = a(0),
        l = a.n(s),
        c = a(1),
        o = a.n(c),
        i = a(5),
        u = a.n(i),
        f = a(4),
        m = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        d = o.a.oneOfType([o.a.number, o.a.string]),
        h = o.a.oneOfType([
          o.a.bool,
          o.a.string,
          o.a.number,
          o.a.shape({ size: d, order: d, offset: d }),
        ]),
        p = {
          children: o.a.node,
          hidden: o.a.bool,
          check: o.a.bool,
          size: o.a.string,
          for: o.a.string,
          tag: f.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
          xs: h,
          sm: h,
          md: h,
          lg: h,
          xl: h,
          widths: o.a.array,
        },
        b = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
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
        y = function (e) {
          var t = e.className,
            a = e.cssModule,
            s = e.hidden,
            c = e.widths,
            o = e.tag,
            i = e.check,
            d = e.size,
            h = e.for,
            p = Object(r.a)(e, m),
            b = [];
          c.forEach(function (t, n) {
            var r = e[t];
            if ((delete p[t], r || "" === r)) {
              var s,
                l = !n;
              if (Object(f.isObject)(r)) {
                var c,
                  o = l ? "-" : "-" + t + "-";
                (s = g(l, t, r.size)),
                  b.push(
                    Object(f.mapToCssModules)(
                      u()(
                        (((c = {})[s] = r.size || "" === r.size),
                        (c["order" + o + r.order] = r.order || 0 === r.order),
                        (c["offset" + o + r.offset] =
                          r.offset || 0 === r.offset),
                        c)
                      )
                    ),
                    a
                  );
              } else (s = g(l, t, r)), b.push(s);
            }
          });
          var y = Object(f.mapToCssModules)(
            u()(
              t,
              !!s && "sr-only",
              !!i && "form-check-label",
              !!d && "col-form-label-" + d,
              b,
              !!b.length && "col-form-label"
            ),
            a
          );
          return l.a.createElement(
            o,
            Object(n.a)({ htmlFor: h }, p, { className: y })
          );
        };
      (y.propTypes = p), (y.defaultProps = b), (t.a = y);
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
          l = !0,
          c = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (s = e);
          },
          f: function () {
            try {
              l || null == r.return || r.return();
            } finally {
              if (c) throw s;
            }
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=152.6209e811.chunk.js.map
