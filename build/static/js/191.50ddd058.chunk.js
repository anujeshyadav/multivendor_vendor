(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [191],
  {
    2235: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "EditBrand", function () {
          return j;
        });
      var n = a(45),
        s = a(10),
        r = a(11),
        l = a(13),
        i = a(12),
        o = a(0),
        c = a.n(o),
        d = a(821),
        u = a(819),
        f = a(820),
        p = a(195),
        m = a(824),
        b = a(836),
        h = a(837),
        g = a(833),
        v = a(811),
        y = a(20),
        O = a(831),
        j = (function (e) {
          Object(l.a)(a, e);
          var t = Object(i.a)(a);
          function a(e) {
            var r;
            return (
              Object(s.a)(this, a),
              ((r = t.call(this, e)).onChangeHandler = function (e) {
                r.setState({ selectedFile: e.target.files[0] }),
                  r.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (r.changeHandler1 = function (e) {
                r.setState({ status: e.target.value });
              }),
              (r.changeHandler = function (e) {
                r.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (r.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", r.state.name),
                  t.append("sortorder", r.state.sortorder),
                  t.append("desc", r.state.desc),
                  t.append("status", r.state.status),
                  null !== r.state.selectedFile &&
                    t.append(
                      "brand_img",
                      r.state.selectedFile,
                      r.state.selectedName
                    ),
                  O.a
                    .post("/addbrand", t)
                    .then(function (e) {
                      console.log(e),
                        r.props.history.push("/app/freshlist/brand/brandList");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (r.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                brand_img: "",
                status: "",
              }),
              r
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      d.a,
                      null,
                      c.a.createElement(
                        u.a,
                        { className: "m-2" },
                        c.a.createElement(
                          f.a,
                          null,
                          c.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Update Brand"
                          )
                        ),
                        c.a.createElement(
                          f.a,
                          null,
                          c.a.createElement(
                            p.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return y.a.push(
                                  "/app/freshlist/brand/brandList"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      c.a.createElement(
                        m.a,
                        null,
                        c.a.createElement(
                          b.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          c.a.createElement(
                            u.a,
                            { className: "mb-2" },
                            c.a.createElement(
                              f.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              c.a.createElement(h.a, null, "Name"),
                              c.a.createElement(g.a, {
                                type: "text",
                                placeholder: "Customer Name",
                                name: "name",
                                value: this.state.name,
                                onChange: this.changeHandler,
                              })
                            ),
                            c.a.createElement(
                              f.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              c.a.createElement(h.a, null, "Brand Image"),
                              c.a.createElement(v.a, {
                                type: "file",
                                name: "type",
                                value: this.state.type,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          c.a.createElement(
                            u.a,
                            null,
                            c.a.createElement(
                              p.a.Ripple,
                              {
                                color: "primary",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Update Brand"
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
        })(o.Component);
      t.default = j;
    },
    831: function (e, t, a) {
      "use strict";
      var n = a(44),
        s = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = s;
    },
    833: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(16),
        l = a(18),
        i = a(0),
        o = a.n(i),
        c = a(1),
        d = a.n(c),
        u = a(5),
        f = a.n(u),
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
          children: d.a.node,
          type: d.a.string,
          size: d.a.oneOfType([d.a.number, d.a.string]),
          bsSize: d.a.string,
          valid: d.a.bool,
          invalid: d.a.bool,
          tag: p.tagPropType,
          innerRef: d.a.oneOfType([d.a.object, d.a.func, d.a.string]),
          plaintext: d.a.bool,
          addon: d.a.bool,
          className: d.a.string,
          cssModule: d.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(r.a)(a)
              )),
              (a.focus = a.focus.bind(Object(r.a)(a))),
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
                r = e.type,
                l = e.bsSize,
                i = e.valid,
                c = e.invalid,
                d = e.tag,
                u = e.addon,
                b = e.plaintext,
                h = e.innerRef,
                g = Object(s.a)(e, m),
                v = ["radio", "checkbox"].indexOf(r) > -1,
                y = new RegExp("\\D", "g"),
                O = d || ("select" === r || "textarea" === r ? r : "input"),
                j = "form-control";
              b
                ? ((j += "-plaintext"), (O = d || "input"))
                : "file" === r
                ? (j += "-file")
                : "range" === r
                ? (j += "-range")
                : v && (j = u ? null : "form-check-input"),
                g.size &&
                  y.test(g.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = g.size),
                  delete g.size);
              var N = Object(p.mapToCssModules)(
                f()(
                  t,
                  c && "is-invalid",
                  i && "is-valid",
                  !!l && "form-control-" + l,
                  j
                ),
                a
              );
              return (
                ("input" === O || (d && "function" === typeof d)) &&
                  (g.type = r),
                g.children &&
                  !b &&
                  "select" !== r &&
                  "string" === typeof O &&
                  "select" !== O &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      r +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                o.a.createElement(
                  O,
                  Object(n.a)({}, g, {
                    ref: h,
                    className: N,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            t
          );
        })(o.a.Component);
      (h.propTypes = b), (h.defaultProps = { type: "text" }), (t.a = h);
    },
    836: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(16),
        l = a(18),
        i = a(0),
        o = a.n(i),
        c = a(1),
        d = a.n(c),
        u = a(5),
        f = a.n(u),
        p = a(4),
        m = ["className", "cssModule", "inline", "tag", "innerRef"],
        b = {
          children: d.a.node,
          inline: d.a.bool,
          tag: p.tagPropType,
          innerRef: d.a.oneOfType([d.a.object, d.a.func, d.a.string]),
          className: d.a.string,
          cssModule: d.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(r.a)(a)
              )),
              (a.submit = a.submit.bind(Object(r.a)(a))),
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
                r = e.inline,
                l = e.tag,
                i = e.innerRef,
                c = Object(s.a)(e, m),
                d = Object(p.mapToCssModules)(f()(t, !!r && "form-inline"), a);
              return o.a.createElement(
                l,
                Object(n.a)({}, c, { ref: i, className: d })
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
        s = a(7),
        r = a(0),
        l = a.n(r),
        i = a(1),
        o = a.n(i),
        c = a(5),
        d = a.n(c),
        u = a(4),
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
        p = o.a.oneOfType([o.a.number, o.a.string]),
        m = o.a.oneOfType([
          o.a.bool,
          o.a.string,
          o.a.number,
          o.a.shape({ size: p, order: p, offset: p }),
        ]),
        b = {
          children: o.a.node,
          hidden: o.a.bool,
          check: o.a.bool,
          size: o.a.string,
          for: o.a.string,
          tag: u.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
          xs: m,
          sm: m,
          md: m,
          lg: m,
          xl: m,
          widths: o.a.array,
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
            r = e.hidden,
            i = e.widths,
            o = e.tag,
            c = e.check,
            p = e.size,
            m = e.for,
            b = Object(s.a)(e, f),
            h = [];
          i.forEach(function (t, n) {
            var s = e[t];
            if ((delete b[t], s || "" === s)) {
              var r,
                l = !n;
              if (Object(u.isObject)(s)) {
                var i,
                  o = l ? "-" : "-" + t + "-";
                (r = g(l, t, s.size)),
                  h.push(
                    Object(u.mapToCssModules)(
                      d()(
                        (((i = {})[r] = s.size || "" === s.size),
                        (i["order" + o + s.order] = s.order || 0 === s.order),
                        (i["offset" + o + s.offset] =
                          s.offset || 0 === s.offset),
                        i)
                      )
                    ),
                    a
                  );
              } else (r = g(l, t, s)), h.push(r);
            }
          });
          var v = Object(u.mapToCssModules)(
            d()(
              t,
              !!r && "sr-only",
              !!c && "form-check-label",
              !!p && "col-form-label-" + p,
              h,
              !!h.length && "col-form-label"
            ),
            a
          );
          return l.a.createElement(
            o,
            Object(n.a)({ htmlFor: m }, b, { className: v })
          );
        };
      (v.propTypes = b), (v.defaultProps = h), (t.a = v);
    },
  },
]);
//# sourceMappingURL=191.50ddd058.chunk.js.map
