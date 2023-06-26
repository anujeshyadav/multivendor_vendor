(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [117],
  {
    1215: function (e, t, a) {
      "use strict";
      var n = a(45),
        s = a(10),
        l = a(11),
        r = a(13),
        c = a(12),
        o = a(0),
        i = a.n(o),
        m = a(810),
        d = a(821),
        u = a(819),
        p = a(820),
        f = a(824),
        h = a(836),
        g = a(837),
        b = a(833),
        v = a(811),
        E = (a(20), a(831)),
        y = (function (e) {
          Object(r.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var l;
            return (
              Object(s.a)(this, a),
              ((l = t.call(this, e)).onChangeHandler = function (e) {
                l.setState({ selectedFile: e.target.files[0] }),
                  l.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (l.changeHandler1 = function (e) {
                l.setState({ status: e.target.value });
              }),
              (l.changeHandler = function (e) {
                l.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (l.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", l.state.name),
                  t.append("sortorder", l.state.sortorder),
                  t.append("desc", l.state.desc),
                  t.append("status", l.state.status),
                  t.append(
                    "product_img",
                    l.state.selectedFile,
                    l.state.selectedName
                  ),
                  E.a
                    .post(" /addproductcategory", t)
                    .then(function (e) {
                      console.log(e),
                        l.props.history.push("/app/category/category");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (l.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                product_img: "",
                status: "",
              }),
              l
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        d.a,
                        null,
                        i.a.createElement(
                          u.a,
                          { className: "m-1" },
                          i.a.createElement(
                            p.a,
                            null,
                            i.a.createElement(
                              "h3",
                              { "col-sm-6": !0, className: "float-left" },
                              i.a.createElement(m.b, null),
                              " General Information"
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
                                p.a,
                                { lg: "6", md: "6", className: "mb-2" },
                                i.a.createElement(g.a, null, "First Name"),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "type",
                                  value: this.state.type,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(g.a, null, "Last Name"),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(g.a, null, "Identity Type"),
                                i.a.createElement(
                                  b.a,
                                  {
                                    required: !0,
                                    type: "select",
                                    name: "bannertype",
                                    placeholder: "Enter Identity Type",
                                    value: this.state.bannertype,
                                    onChange: this.changeHandler,
                                  },
                                  i.a.createElement(
                                    "option",
                                    { value: "select" },
                                    "--Select--"
                                  ),
                                  i.a.createElement(
                                    "option",
                                    { value: "Passport" },
                                    "Passport"
                                  ),
                                  i.a.createElement(
                                    "option",
                                    { value: "Driving License" },
                                    "Driving License"
                                  ),
                                  i.a.createElement(
                                    "option",
                                    { value: "Nid" },
                                    "Nid"
                                  ),
                                  i.a.createElement(
                                    "option",
                                    { value: "Company id" },
                                    "Company id"
                                  )
                                )
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(g.a, null, "Identity No."),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(g.a, null, "Phone No."),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(g.a, null, "Address"),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(
                                  g.a,
                                  null,
                                  "Deliveryman Image"
                                ),
                                i.a.createElement(v.a, {
                                  required: !0,
                                  type: "file",
                                  name: "date",
                                  value: this.state.date,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "6", md: "6", className: "mb-1" },
                                i.a.createElement(g.a, null, "Identify Image"),
                                i.a.createElement(v.a, {
                                  required: !0,
                                  type: "file",
                                  name: "date",
                                  value: this.state.date,
                                  onChange: this.changeHandler,
                                })
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
        })(o.Component);
      t.a = y;
    },
    1216: function (e, t, a) {
      "use strict";
      var n = a(45),
        s = a(10),
        l = a(11),
        r = a(13),
        c = a(12),
        o = a(0),
        i = a.n(o),
        m = a(810),
        d = a(821),
        u = a(819),
        p = a(820),
        f = a(824),
        h = a(836),
        g = a(837),
        b = a(833),
        v = a(195),
        E = (a(20), a(831)),
        y = (function (e) {
          Object(r.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var l;
            return (
              Object(s.a)(this, a),
              ((l = t.call(this, e)).onChangeHandler = function (e) {
                l.setState({ selectedFile: e.target.files[0] }),
                  l.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (l.changeHandler1 = function (e) {
                l.setState({ status: e.target.value });
              }),
              (l.changeHandler = function (e) {
                l.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (l.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", l.state.name),
                  t.append("sortorder", l.state.sortorder),
                  t.append("desc", l.state.desc),
                  t.append("status", l.state.status),
                  t.append(
                    "product_img",
                    l.state.selectedFile,
                    l.state.selectedName
                  ),
                  E.a
                    .post(" /addproductcategory", t)
                    .then(function (e) {
                      console.log(e),
                        l.props.history.push("/app/category/category");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (l.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                product_img: "",
                status: "",
              }),
              l
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        d.a,
                        null,
                        i.a.createElement(
                          u.a,
                          { className: "m-1" },
                          i.a.createElement(
                            p.a,
                            null,
                            i.a.createElement(
                              "h3",
                              { "col-sm-6": !0, className: "float-left" },
                              i.a.createElement(m.b, null),
                              " Account Information"
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
                                p.a,
                                { lg: "4", md: "4", className: "mb-2" },
                                i.a.createElement(g.a, null, "Email"),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "type",
                                  value: this.state.type,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "4", md: "4", className: "mb-1" },
                                i.a.createElement(g.a, null, "Password"),
                                i.a.createElement(b.a, {
                                  type: "text",
                                  name: "Password",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              ),
                              i.a.createElement(
                                p.a,
                                { lg: "4", md: "4", className: "mb-1" },
                                i.a.createElement(
                                  g.a,
                                  null,
                                  " confirm Password"
                                ),
                                i.a.createElement(b.a, {
                                  required: !0,
                                  type: "text",
                                  name: "Enter Password",
                                  placeholder: "Enter Password.",
                                  value: this.state.date,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              u.a,
                              { style: { float: "right" } },
                              i.a.createElement(
                                v.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-1 mb-1 ",
                                },
                                "Submit"
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
        })(o.Component);
      t.a = y;
    },
    2184: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "AddDeliveryMan", function () {
          return f;
        });
      var n = a(45),
        s = a(10),
        l = a(11),
        r = a(13),
        c = a(12),
        o = a(0),
        i = a.n(o),
        m = a(1215),
        d = a(1216),
        u = a(820),
        p = (a(20), a(831)),
        f = (function (e) {
          Object(r.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var l;
            return (
              Object(s.a)(this, a),
              ((l = t.call(this, e)).onChangeHandler = function (e) {
                l.setState({ selectedFile: e.target.files[0] }),
                  l.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (l.changeHandler1 = function (e) {
                l.setState({ status: e.target.value });
              }),
              (l.changeHandler = function (e) {
                l.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (l.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", l.state.name),
                  t.append("sortorder", l.state.sortorder),
                  t.append("desc", l.state.desc),
                  t.append("status", l.state.status),
                  t.append(
                    "product_img",
                    l.state.selectedFile,
                    l.state.selectedName
                  ),
                  p.a
                    .post(" /addproductcategory", t)
                    .then(function (e) {
                      console.log(e),
                        l.props.history.push("/app/category/category");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (l.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                product_img: "",
                status: "",
              }),
              l
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("h1", null, "Add New Delivery Man"),
                    i.a.createElement(
                      u.a,
                      { sm: "12" },
                      i.a.createElement(
                        u.a,
                        null,
                        i.a.createElement(
                          "h1",
                          { sm: "12" },
                          i.a.createElement(m.a, null)
                        )
                      )
                    ),
                    i.a.createElement(
                      u.a,
                      { sm: "12" },
                      i.a.createElement(
                        u.a,
                        null,
                        i.a.createElement(
                          "h1",
                          { sm: "12" },
                          i.a.createElement(d.a, null)
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
      t.default = f;
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
        l = a(16),
        r = a(18),
        c = a(0),
        o = a.n(c),
        i = a(1),
        m = a.n(i),
        d = a(5),
        u = a.n(d),
        p = a(4),
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
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(l.a)(a)
              )),
              (a.focus = a.focus.bind(Object(l.a)(a))),
              a
            );
          }
          Object(r.a)(t, e);
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
                l = e.type,
                r = e.bsSize,
                c = e.valid,
                i = e.invalid,
                m = e.tag,
                d = e.addon,
                h = e.plaintext,
                g = e.innerRef,
                b = Object(s.a)(e, f),
                v = ["radio", "checkbox"].indexOf(l) > -1,
                E = new RegExp("\\D", "g"),
                y = m || ("select" === l || "textarea" === l ? l : "input"),
                N = "form-control";
              h
                ? ((N += "-plaintext"), (y = m || "input"))
                : "file" === l
                ? (N += "-file")
                : "range" === l
                ? (N += "-range")
                : v && (N = d ? null : "form-check-input"),
                b.size &&
                  E.test(b.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (r = b.size),
                  delete b.size);
              var O = Object(p.mapToCssModules)(
                u()(
                  t,
                  i && "is-invalid",
                  c && "is-valid",
                  !!r && "form-control-" + r,
                  N
                ),
                a
              );
              return (
                ("input" === y || (m && "function" === typeof m)) &&
                  (b.type = l),
                b.children &&
                  !h &&
                  "select" !== l &&
                  "string" === typeof y &&
                  "select" !== y &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      l +
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
            t
          );
        })(o.a.Component);
      (g.propTypes = h), (g.defaultProps = { type: "text" }), (t.a = g);
    },
    836: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        l = a(16),
        r = a(18),
        c = a(0),
        o = a.n(c),
        i = a(1),
        m = a.n(i),
        d = a(5),
        u = a.n(d),
        p = a(4),
        f = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: m.a.node,
          inline: m.a.bool,
          tag: p.tagPropType,
          innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
          className: m.a.string,
          cssModule: m.a.object,
        },
        g = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(l.a)(a)
              )),
              (a.submit = a.submit.bind(Object(l.a)(a))),
              a
            );
          }
          Object(r.a)(t, e);
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
                l = e.inline,
                r = e.tag,
                c = e.innerRef,
                i = Object(s.a)(e, f),
                m = Object(p.mapToCssModules)(u()(t, !!l && "form-inline"), a);
              return o.a.createElement(
                r,
                Object(n.a)({}, i, { ref: c, className: m })
              );
            }),
            t
          );
        })(c.Component);
      (g.propTypes = h), (g.defaultProps = { tag: "form" }), (t.a = g);
    },
    837: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        l = a(0),
        r = a.n(l),
        c = a(1),
        o = a.n(c),
        i = a(5),
        m = a.n(i),
        d = a(4),
        u = [
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
          tag: d.tagPropType,
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
        b = function (e, t, a) {
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
            l = e.hidden,
            c = e.widths,
            o = e.tag,
            i = e.check,
            p = e.size,
            f = e.for,
            h = Object(s.a)(e, u),
            g = [];
          c.forEach(function (t, n) {
            var s = e[t];
            if ((delete h[t], s || "" === s)) {
              var l,
                r = !n;
              if (Object(d.isObject)(s)) {
                var c,
                  o = r ? "-" : "-" + t + "-";
                (l = b(r, t, s.size)),
                  g.push(
                    Object(d.mapToCssModules)(
                      m()(
                        (((c = {})[l] = s.size || "" === s.size),
                        (c["order" + o + s.order] = s.order || 0 === s.order),
                        (c["offset" + o + s.offset] =
                          s.offset || 0 === s.offset),
                        c)
                      )
                    ),
                    a
                  );
              } else (l = b(r, t, s)), g.push(l);
            }
          });
          var v = Object(d.mapToCssModules)(
            m()(
              t,
              !!l && "sr-only",
              !!i && "form-check-label",
              !!p && "col-form-label-" + p,
              g,
              !!g.length && "col-form-label"
            ),
            a
          );
          return r.a.createElement(
            o,
            Object(n.a)({ htmlFor: f }, h, { className: v })
          );
        };
      (v.propTypes = h), (v.defaultProps = g), (t.a = v);
    },
  },
]);
//# sourceMappingURL=117.22acf789.chunk.js.map
