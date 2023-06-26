(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [239],
  {
    2176: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return N;
        });
      var s = a(45),
        n = a(10),
        r = a(11),
        c = a(13),
        l = a(12),
        o = a(0),
        i = a.n(o),
        u = a(819),
        m = a(820),
        f = a(592),
        p = a(99),
        d = a(821),
        h = a(195),
        b = a(824),
        g = a(836),
        E = a(837),
        v = a(831),
        y = a(62),
        j = a(846),
        O = a.n(j),
        N = (function (e) {
          Object(c.a)(a, e);
          var t = Object(l.a)(a);
          function a(e) {
            var r;
            return (
              Object(n.a)(this, a),
              ((r = t.call(this, e)).changeHandler1 = function (e) {
                r.setState({ status: e.target.value });
              }),
              (r.changeHandler = function (e) {
                r.setState(Object(s.a)({}, e.target.name, e.target.value));
              }),
              (r.submitHandler = function (e) {
                e.preventDefault();
                var t = r.props.match.params.id;
                v.a
                  .post("/user/user_true_false/".concat(t), r.state)
                  .then(function (e) {
                    console.log(e),
                      O()("Success!", "Submitted SuccessFull!", "success"),
                      r.props.history.push(
                        "/app/freshlist/customer/customerList"
                      );
                  })
                  .catch(function (e) {
                    console.log(e.response);
                  });
              }),
              (r.state = { status: "" }),
              r
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.match.params.id;
                  v.a
                    .get("/user/getviewone/".concat(t), {})
                    .then(function (t) {
                      console.log(t),
                        e.setState({ status: t.data.data.status });
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      u.a,
                      null,
                      i.a.createElement(
                        m.a,
                        { sm: "12" },
                        i.a.createElement(
                          "div",
                          null,
                          i.a.createElement(
                            f.a,
                            { listTag: "div" },
                            i.a.createElement(
                              p.a,
                              { href: "/analyticsDashboard", tag: "a" },
                              "Home"
                            ),
                            i.a.createElement(
                              p.a,
                              {
                                href: "/app/freshlist/customer/customerList",
                                tag: "a",
                              },
                              "Customer List"
                            ),
                            i.a.createElement(
                              p.a,
                              { active: !0 },
                              "Edit Customer List"
                            )
                          )
                        )
                      )
                    ),
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
                            "Edit Resource List"
                          )
                        ),
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(y.b, {
                            render: function (e) {
                              var t = e.history;
                              return i.a.createElement(
                                h.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return t.push(
                                      "/app/freshlist/customer/customerList"
                                    );
                                  },
                                },
                                "Back"
                              );
                            },
                          })
                        )
                      ),
                      i.a.createElement(
                        b.a,
                        null,
                        i.a.createElement(
                          g.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          i.a.createElement(
                            u.a,
                            null,
                            i.a.createElement(
                              m.a,
                              {
                                lg: "6",
                                md: "6",
                                sm: "6",
                                className: "mb-2 mt-1",
                              },
                              i.a.createElement(
                                m.a,
                                {
                                  lg: "6",
                                  md: "6",
                                  sm: "6",
                                  className: "mb-2 mt-1",
                                },
                                i.a.createElement(
                                  E.a,
                                  { className: "mb-1" },
                                  i.a.createElement("h4", null, "Status")
                                ),
                                i.a.createElement(
                                  "div",
                                  {
                                    className: "form-label-group",
                                    onChange: this.changeHandler1,
                                  },
                                  i.a.createElement("input", {
                                    style: { marginRight: "3px" },
                                    type: "radio",
                                    name: "status",
                                    value: "true",
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
                                    value: "false",
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { style: { marginRight: "3px" } },
                                    "Deactive"
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(
                            u.a,
                            null,
                            i.a.createElement(
                              m.a,
                              { lg: "6", md: "6", sm: "6", className: "mb-2" },
                              i.a.createElement(
                                h.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-2 mb-1",
                                },
                                "Update"
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
    },
    831: function (e, t, a) {
      "use strict";
      var s = a(44),
        n = a.n(s).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = n;
    },
    836: function (e, t, a) {
      "use strict";
      var s = a(6),
        n = a(7),
        r = a(16),
        c = a(18),
        l = a(0),
        o = a.n(l),
        i = a(1),
        u = a.n(i),
        m = a(5),
        f = a.n(m),
        p = a(4),
        d = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: u.a.node,
          inline: u.a.bool,
          tag: p.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        b = (function (e) {
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
          Object(c.a)(t, e);
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
                c = e.tag,
                l = e.innerRef,
                i = Object(n.a)(e, d),
                u = Object(p.mapToCssModules)(f()(t, !!r && "form-inline"), a);
              return o.a.createElement(
                c,
                Object(s.a)({}, i, { ref: l, className: u })
              );
            }),
            t
          );
        })(l.Component);
      (b.propTypes = h), (b.defaultProps = { tag: "form" }), (t.a = b);
    },
    837: function (e, t, a) {
      "use strict";
      var s = a(6),
        n = a(7),
        r = a(0),
        c = a.n(r),
        l = a(1),
        o = a.n(l),
        i = a(5),
        u = a.n(i),
        m = a(4),
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
        d = o.a.oneOfType([
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
          tag: m.tagPropType,
          className: o.a.string,
          cssModule: o.a.object,
          xs: d,
          sm: d,
          md: d,
          lg: d,
          xl: d,
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
        E = function (e) {
          var t = e.className,
            a = e.cssModule,
            r = e.hidden,
            l = e.widths,
            o = e.tag,
            i = e.check,
            p = e.size,
            d = e.for,
            h = Object(n.a)(e, f),
            b = [];
          l.forEach(function (t, s) {
            var n = e[t];
            if ((delete h[t], n || "" === n)) {
              var r,
                c = !s;
              if (Object(m.isObject)(n)) {
                var l,
                  o = c ? "-" : "-" + t + "-";
                (r = g(c, t, n.size)),
                  b.push(
                    Object(m.mapToCssModules)(
                      u()(
                        (((l = {})[r] = n.size || "" === n.size),
                        (l["order" + o + n.order] = n.order || 0 === n.order),
                        (l["offset" + o + n.offset] =
                          n.offset || 0 === n.offset),
                        l)
                      )
                    ),
                    a
                  );
              } else (r = g(c, t, n)), b.push(r);
            }
          });
          var E = Object(m.mapToCssModules)(
            u()(
              t,
              !!r && "sr-only",
              !!i && "form-check-label",
              !!p && "col-form-label-" + p,
              b,
              !!b.length && "col-form-label"
            ),
            a
          );
          return c.a.createElement(
            o,
            Object(s.a)({ htmlFor: d }, h, { className: E })
          );
        };
      (E.propTypes = h), (E.defaultProps = b), (t.a = E);
    },
  },
]);
//# sourceMappingURL=239.9cb3711c.chunk.js.map
