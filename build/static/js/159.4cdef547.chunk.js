(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [159],
  {
    2258: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "AddSimpleProduct", function () {
          return O;
        });
      var n = t(45),
        s = t(10),
        r = t(11),
        l = t(13),
        c = t(12),
        o = t(0),
        i = t.n(o),
        d = t(821),
        u = t(819),
        m = t(820),
        p = t(195),
        f = t(824),
        h = t(836),
        g = t(844),
        b = t(837),
        v = t(833),
        E = t(20),
        y = t(831),
        O = (function (e) {
          Object(l.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var r;
            return (
              Object(s.a)(this, t),
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
                          "/app/productManagement/simpleProduct/simpleProductList"
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
                  var e = this;
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      d.a,
                      null,
                      i.a.createElement(
                        u.a,
                        { className: "m-2" },
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add Simple Product"
                          )
                        ),
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(
                            p.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return E.a.push(
                                  "/app/productManagement/simpleProduct/simpleProductList"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      i.a.createElement(
                        f.a,
                        null,
                        i.a.createElement(
                          h.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          i.a.createElement(
                            u.a,
                            { className: "mb-2" },
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              i.a.createElement(
                                g.a,
                                null,
                                i.a.createElement(b.a, null, "Units Name"),
                                i.a.createElement(v.a, {
                                  type: "text",
                                  placeholder: "Customer Name",
                                  name: "name",
                                  value: this.state.name,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              i.a.createElement(
                                g.a,
                                null,
                                i.a.createElement(b.a, null, "Sort Order"),
                                i.a.createElement(v.a, {
                                  type: "number",
                                  placeholder: "Sort Order",
                                  name: "sortorder",
                                  value: this.state.sortorder,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              i.a.createElement(
                                g.a,
                                null,
                                i.a.createElement(b.a, null, "Description"),
                                i.a.createElement(v.a, {
                                  type: "textarea",
                                  placeholder: "Description",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6" },
                              i.a.createElement(
                                g.a,
                                null,
                                i.a.createElement(
                                  b.a,
                                  { class: "switch" },
                                  "Customer Image / Logo"
                                ),
                                i.a.createElement(v.a, {
                                  type: "file",
                                  onChange: this.onChangeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              m.a,
                              {
                                lg: "6",
                                md: "6",
                                sm: "6",
                                className: "mb-2 mt-1",
                              },
                              i.a.createElement(
                                g.a,
                                null,
                                i.a.createElement(
                                  b.a,
                                  { className: "mb-1" },
                                  "Status"
                                ),
                                i.a.createElement(
                                  "div",
                                  {
                                    className: "form-label-group",
                                    onChange: function (a) {
                                      return e.changeHandler1(a);
                                    },
                                  },
                                  i.a.createElement("input", {
                                    style: { marginRight: "3px" },
                                    type: "radio",
                                    name: "status",
                                    value: "Active",
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { style: { marginRight: "20px" } },
                                    "Active"
                                  ),
                                  i.a.createElement("input", {
                                    style: { marginRight: "3px" },
                                    type: "radio",
                                    name: "status",
                                    value: "Inactive",
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { style: { marginRight: "3px" } },
                                    "Inactive"
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(
                            u.a,
                            null,
                            i.a.createElement(
                              p.a.Ripple,
                              {
                                color: "danger",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Add Simple Product"
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
      a.default = O;
    },
    831: function (e, a, t) {
      "use strict";
      var n = t(44),
        s = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = s;
    },
    833: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        r = t(16),
        l = t(18),
        c = t(0),
        o = t.n(c),
        i = t(1),
        d = t.n(i),
        u = t(5),
        m = t.n(u),
        p = t(4),
        f = [
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
        h = {
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
          Object(l.a)(a, e);
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
                l = e.bsSize,
                c = e.valid,
                i = e.invalid,
                d = e.tag,
                u = e.addon,
                h = e.plaintext,
                g = e.innerRef,
                b = Object(s.a)(e, f),
                v = ["radio", "checkbox"].indexOf(r) > -1,
                E = new RegExp("\\D", "g"),
                y = d || ("select" === r || "textarea" === r ? r : "input"),
                O = "form-control";
              h
                ? ((O += "-plaintext"), (y = d || "input"))
                : "file" === r
                ? (O += "-file")
                : "range" === r
                ? (O += "-range")
                : v && (O = u ? null : "form-check-input"),
                b.size &&
                  E.test(b.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = b.size),
                  delete b.size);
              var j = Object(p.mapToCssModules)(
                m()(
                  a,
                  i && "is-invalid",
                  c && "is-valid",
                  !!l && "form-control-" + l,
                  O
                ),
                t
              );
              return (
                ("input" === y || (d && "function" === typeof d)) &&
                  (b.type = r),
                b.children &&
                  !h &&
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
                    className: j,
                    "aria-invalid": i,
                  })
                )
              );
            }),
            a
          );
        })(o.a.Component);
      (g.propTypes = h), (g.defaultProps = { type: "text" }), (a.a = g);
    },
    836: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        r = t(16),
        l = t(18),
        c = t(0),
        o = t.n(c),
        i = t(1),
        d = t.n(i),
        u = t(5),
        m = t.n(u),
        p = t(4),
        f = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: d.a.node,
          inline: d.a.bool,
          tag: p.tagPropType,
          innerRef: d.a.oneOfType([d.a.object, d.a.func, d.a.string]),
          className: d.a.string,
          cssModule: d.a.object,
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
          Object(l.a)(a, e);
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
                l = e.tag,
                c = e.innerRef,
                i = Object(s.a)(e, f),
                d = Object(p.mapToCssModules)(m()(a, !!r && "form-inline"), t);
              return o.a.createElement(
                l,
                Object(n.a)({}, i, { ref: c, className: d })
              );
            }),
            a
          );
        })(c.Component);
      (g.propTypes = h), (g.defaultProps = { tag: "form" }), (a.a = g);
    },
    837: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        r = t(0),
        l = t.n(r),
        c = t(1),
        o = t.n(c),
        i = t(5),
        d = t.n(i),
        u = t(4),
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
        p = o.a.oneOfType([o.a.number, o.a.string]),
        f = o.a.oneOfType([
          o.a.bool,
          o.a.string,
          o.a.number,
          o.a.shape({ size: p, order: p, offset: p }),
        ]),
        h = {
          children: o.a.node,
          hidden: o.a.bool,
          check: o.a.bool,
          size: o.a.string,
          for: o.a.string,
          tag: u.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
          xs: f,
          sm: f,
          md: f,
          lg: f,
          xl: f,
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
        v = function (e) {
          var a = e.className,
            t = e.cssModule,
            r = e.hidden,
            c = e.widths,
            o = e.tag,
            i = e.check,
            p = e.size,
            f = e.for,
            h = Object(s.a)(e, m),
            g = [];
          c.forEach(function (a, n) {
            var s = e[a];
            if ((delete h[a], s || "" === s)) {
              var r,
                l = !n;
              if (Object(u.isObject)(s)) {
                var c,
                  o = l ? "-" : "-" + a + "-";
                (r = b(l, a, s.size)),
                  g.push(
                    Object(u.mapToCssModules)(
                      d()(
                        (((c = {})[r] = s.size || "" === s.size),
                        (c["order" + o + s.order] = s.order || 0 === s.order),
                        (c["offset" + o + s.offset] =
                          s.offset || 0 === s.offset),
                        c)
                      )
                    ),
                    t
                  );
              } else (r = b(l, a, s)), g.push(r);
            }
          });
          var v = Object(u.mapToCssModules)(
            d()(
              a,
              !!r && "sr-only",
              !!i && "form-check-label",
              !!p && "col-form-label-" + p,
              g,
              !!g.length && "col-form-label"
            ),
            t
          );
          return l.a.createElement(
            o,
            Object(n.a)({ htmlFor: f }, h, { className: v })
          );
        };
      (v.propTypes = h), (v.defaultProps = g), (a.a = v);
    },
    844: function (e, a, t) {
      "use strict";
      var n = t(6),
        s = t(7),
        r = t(0),
        l = t.n(r),
        c = t(1),
        o = t.n(c),
        i = t(5),
        d = t.n(i),
        u = t(4),
        m = [
          "className",
          "cssModule",
          "row",
          "disabled",
          "check",
          "inline",
          "tag",
        ],
        p = {
          children: o.a.node,
          row: o.a.bool,
          check: o.a.bool,
          inline: o.a.bool,
          disabled: o.a.bool,
          tag: u.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
        },
        f = function (e) {
          var a = e.className,
            t = e.cssModule,
            r = e.row,
            c = e.disabled,
            o = e.check,
            i = e.inline,
            p = e.tag,
            f = Object(s.a)(e, m),
            h = Object(u.mapToCssModules)(
              d()(
                a,
                !!r && "row",
                o ? "form-check" : "form-group",
                !(!o || !i) && "form-check-inline",
                !(!o || !c) && "disabled"
              ),
              t
            );
          return (
            "fieldset" === p && (f.disabled = c),
            l.a.createElement(p, Object(n.a)({}, f, { className: h }))
          );
        };
      (f.propTypes = p), (f.defaultProps = { tag: "div" }), (a.a = f);
    },
  },
]);
//# sourceMappingURL=159.4cdef547.chunk.js.map
