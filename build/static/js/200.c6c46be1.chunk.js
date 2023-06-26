(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [200],
  {
    2241: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "EditHouseProduct", function () {
          return N;
        });
      var n = t(45),
        l = t(10),
        r = t(11),
        s = t(13),
        c = t(12),
        o = t(0),
        i = t.n(o),
        m = t(821),
        u = t(819),
        d = t(820),
        p = t(195),
        h = t(824),
        f = t(836),
        g = t(837),
        b = t(833),
        E = t(811),
        v = t(20),
        y = t(831),
        N = (function (e) {
          Object(s.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var r;
            return (
              Object(l.a)(this, t),
              ((r = a.call(this, e)).onChangeHandler = function (e) {
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
                var a = new FormData();
                a.append("name", r.state.name),
                  a.append("sortorder", r.state.sortorder),
                  a.append("desc", r.state.desc),
                  a.append("status", r.state.status),
                  null !== r.state.selectedFile &&
                    a.append(
                      "brand_img",
                      r.state.selectedFile,
                      r.state.selectedName
                    ),
                  y.a
                    .post("/addbrand", a)
                    .then(function (e) {
                      console.log(e),
                        r.props.history.push(
                          "/app/freshlist/house/HouseProductList"
                        );
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
            Object(r.a)(t, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      m.a,
                      null,
                      i.a.createElement(
                        u.a,
                        { className: "m-2" },
                        i.a.createElement(
                          d.a,
                          null,
                          i.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Update New Product"
                          )
                        ),
                        i.a.createElement(
                          d.a,
                          null,
                          i.a.createElement(
                            p.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return v.a.push(
                                  "/app/freshlist/house/houseProductList"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      i.a.createElement(
                        h.a,
                        null,
                        i.a.createElement(
                          f.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          i.a.createElement(
                            u.a,
                            { className: "mb-2" },
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-2" },
                              i.a.createElement(g.a, null, "Name"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "Product Name",
                                name: "name",
                                value: this.state.name,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-2" },
                              i.a.createElement(g.a, null, "Description"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "name",
                                value: this.state.name,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-2" },
                              i.a.createElement(g.a, null, "Category"),
                              i.a.createElement(
                                E.a,
                                {
                                  type: "select",
                                  placeholder: "CategoryName",
                                  name: "type",
                                  value: this.state.name,
                                  onChange: this.changeHandler,
                                },
                                i.a.createElement(
                                  "option",
                                  null,
                                  "---Select---"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "1" },
                                  "1"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "2" },
                                  "2"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "3" },
                                  "3"
                                ),
                                i.a.createElement("option", { value: "4" }, "4")
                              )
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-2" },
                              i.a.createElement(g.a, null, "Subcategory"),
                              i.a.createElement(
                                E.a,
                                {
                                  type: "select",
                                  placeholder: "Subcategory Name",
                                  name: "type",
                                  value: this.state.name,
                                  onChange: this.changeHandler,
                                },
                                i.a.createElement(
                                  "option",
                                  null,
                                  "---Select---"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "1" },
                                  "1"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "2" },
                                  "2"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "3" },
                                  "3"
                                ),
                                i.a.createElement("option", { value: "4" }, "4")
                              )
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Product Code"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "name",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Brand"),
                              i.a.createElement(
                                E.a,
                                {
                                  type: "select",
                                  placeholder: "",
                                  name: "type",
                                  value: this.state.sortorder,
                                  onChange: this.changeHandler,
                                },
                                i.a.createElement(
                                  "option",
                                  null,
                                  "---Select---"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "1" },
                                  "1"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "2" },
                                  "2"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "3" },
                                  "3"
                                ),
                                i.a.createElement("option", { value: "4" }, "4")
                              )
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Units"),
                              i.a.createElement(
                                E.a,
                                {
                                  type: "select",
                                  placeholder: "",
                                  name: "type",
                                  value: this.state.sortorder,
                                  onChange: this.changeHandler,
                                },
                                i.a.createElement(
                                  "option",
                                  null,
                                  "---Select Units---"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "Kg" },
                                  "Kg"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "gms" },
                                  "gms"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "pc" },
                                  "pc"
                                ),
                                i.a.createElement(
                                  "option",
                                  { value: "ltr" },
                                  "ltr"
                                )
                              )
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Attributes"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "type",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Tax"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "type",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Discount"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "type",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Total Quantity"),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "type",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(
                                g.a,
                                null,
                                "Minimum Order Quantity"
                              ),
                              i.a.createElement(b.a, {
                                type: "text",
                                placeholder: "",
                                name: "type",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(g.a, null, "Shipping Cost"),
                              i.a.createElement(b.a, {
                                type: "number",
                                placeholder: "",
                                name: "type",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            ),
                            i.a.createElement(
                              d.a,
                              { lg: "6", md: "6", className: "mb-1" },
                              i.a.createElement(
                                g.a,
                                null,
                                "Upload Product Images"
                              ),
                              i.a.createElement(E.a, {
                                type: "file",
                                placeholder: "",
                                name: "",
                                value: this.state.sortorder,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          i.a.createElement(
                            u.a,
                            null,
                            i.a.createElement(
                              p.a.Ripple,
                              {
                                color: "primary",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Update"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
      a.default = N;
    },
    831: function (e, a, t) {
      "use strict";
      var n = t(44),
        l = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = l;
    },
    833: function (e, a, t) {
      "use strict";
      var n = t(6),
        l = t(7),
        r = t(16),
        s = t(18),
        c = t(0),
        o = t.n(c),
        i = t(1),
        m = t.n(i),
        u = t(5),
        d = t.n(u),
        p = t(4),
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
        f = {
          children: m.a.node,
          type: m.a.string,
          size: m.a.oneOfType([m.a.number, m.a.string]),
          bsSize: m.a.string,
          valid: m.a.bool,
          invalid: m.a.bool,
          tag: p.tagPropType,
          innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
          plaintext: m.a.bool,
          addon: m.a.bool,
          className: m.a.string,
          cssModule: m.a.object,
        },
        g = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(r.a)(t)
              )),
              (t.focus = t.focus.bind(Object(r.a)(t))),
              t
            );
          }
          Object(s.a)(a, e);
          var t = a.prototype;
          return (
            (t.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (t.focus = function () {
              this.ref && this.ref.focus();
            }),
            (t.render = function () {
              var e = this.props,
                a = e.className,
                t = e.cssModule,
                r = e.type,
                s = e.bsSize,
                c = e.valid,
                i = e.invalid,
                m = e.tag,
                u = e.addon,
                f = e.plaintext,
                g = e.innerRef,
                b = Object(l.a)(e, h),
                E = ["radio", "checkbox"].indexOf(r) > -1,
                v = new RegExp("\\D", "g"),
                y = m || ("select" === r || "textarea" === r ? r : "input"),
                N = "form-control";
              f
                ? ((N += "-plaintext"), (y = m || "input"))
                : "file" === r
                ? (N += "-file")
                : "range" === r
                ? (N += "-range")
                : E && (N = u ? null : "form-check-input"),
                b.size &&
                  v.test(b.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (s = b.size),
                  delete b.size);
              var O = Object(p.mapToCssModules)(
                d()(
                  a,
                  i && "is-invalid",
                  c && "is-valid",
                  !!s && "form-control-" + s,
                  N
                ),
                t
              );
              return (
                ("input" === y || (m && "function" === typeof m)) &&
                  (b.type = r),
                b.children &&
                  !f &&
                  "select" !== r &&
                  "string" === typeof y &&
                  "select" !== y &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      r +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete b.children),
                o.a.createElement(
                  y,
                  Object(n.a)({}, b, {
                    ref: g,
                    className: O,
                    "aria-invalid": i,
                  })
                )
              );
            }),
            a
          );
        })(o.a.Component);
      (g.propTypes = f), (g.defaultProps = { type: "text" }), (a.a = g);
    },
    836: function (e, a, t) {
      "use strict";
      var n = t(6),
        l = t(7),
        r = t(16),
        s = t(18),
        c = t(0),
        o = t.n(c),
        i = t(1),
        m = t.n(i),
        u = t(5),
        d = t.n(u),
        p = t(4),
        h = ["className", "cssModule", "inline", "tag", "innerRef"],
        f = {
          children: m.a.node,
          inline: m.a.bool,
          tag: p.tagPropType,
          innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
          className: m.a.string,
          cssModule: m.a.object,
        },
        g = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(r.a)(t)
              )),
              (t.submit = t.submit.bind(Object(r.a)(t))),
              t
            );
          }
          Object(s.a)(a, e);
          var t = a.prototype;
          return (
            (t.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (t.submit = function () {
              this.ref && this.ref.submit();
            }),
            (t.render = function () {
              var e = this.props,
                a = e.className,
                t = e.cssModule,
                r = e.inline,
                s = e.tag,
                c = e.innerRef,
                i = Object(l.a)(e, h),
                m = Object(p.mapToCssModules)(d()(a, !!r && "form-inline"), t);
              return o.a.createElement(
                s,
                Object(n.a)({}, i, { ref: c, className: m })
              );
            }),
            a
          );
        })(c.Component);
      (g.propTypes = f), (g.defaultProps = { tag: "form" }), (a.a = g);
    },
    837: function (e, a, t) {
      "use strict";
      var n = t(6),
        l = t(7),
        r = t(0),
        s = t.n(r),
        c = t(1),
        o = t.n(c),
        i = t(5),
        m = t.n(i),
        u = t(4),
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
        p = o.a.oneOfType([o.a.number, o.a.string]),
        h = o.a.oneOfType([
          o.a.bool,
          o.a.string,
          o.a.number,
          o.a.shape({ size: p, order: p, offset: p }),
        ]),
        f = {
          children: o.a.node,
          hidden: o.a.bool,
          check: o.a.bool,
          size: o.a.string,
          for: o.a.string,
          tag: u.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
          xs: h,
          sm: h,
          md: h,
          lg: h,
          xl: h,
          widths: o.a.array,
        },
        g = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        b = function (e, a, t) {
          return !0 === t || "" === t
            ? e
              ? "col"
              : "col-" + a
            : "auto" === t
            ? e
              ? "col-auto"
              : "col-" + a + "-auto"
            : e
            ? "col-" + t
            : "col-" + a + "-" + t;
        },
        E = function (e) {
          var a = e.className,
            t = e.cssModule,
            r = e.hidden,
            c = e.widths,
            o = e.tag,
            i = e.check,
            p = e.size,
            h = e.for,
            f = Object(l.a)(e, d),
            g = [];
          c.forEach(function (a, n) {
            var l = e[a];
            if ((delete f[a], l || "" === l)) {
              var r,
                s = !n;
              if (Object(u.isObject)(l)) {
                var c,
                  o = s ? "-" : "-" + a + "-";
                (r = b(s, a, l.size)),
                  g.push(
                    Object(u.mapToCssModules)(
                      m()(
                        (((c = {})[r] = l.size || "" === l.size),
                        (c["order" + o + l.order] = l.order || 0 === l.order),
                        (c["offset" + o + l.offset] =
                          l.offset || 0 === l.offset),
                        c)
                      )
                    ),
                    t
                  );
              } else (r = b(s, a, l)), g.push(r);
            }
          });
          var E = Object(u.mapToCssModules)(
            m()(
              a,
              !!r && "sr-only",
              !!i && "form-check-label",
              !!p && "col-form-label-" + p,
              g,
              !!g.length && "col-form-label"
            ),
            t
          );
          return s.a.createElement(
            o,
            Object(n.a)({ htmlFor: h }, f, { className: E })
          );
        };
      (E.propTypes = f), (E.defaultProps = g), (a.a = E);
    },
  },
]);
//# sourceMappingURL=200.c6c46be1.chunk.js.map
