(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [240],
  {
    2192: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "AddGallery", function () {
          return y;
        });
      var n = a(45),
        s = a(10),
        r = a(11),
        l = a(13),
        o = a(12),
        c = a(0),
        i = a.n(c),
        u = a(821),
        d = a(819),
        m = a(820),
        f = a(824),
        p = a(836),
        h = a(837),
        b = a(811),
        g = a(195),
        v = (a(20), a(831)),
        y = (function (e) {
          Object(l.a)(a, e);
          var t = Object(o.a)(a);
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
                  t.append(
                    "product_img",
                    r.state.selectedFile,
                    r.state.selectedName
                  ),
                  v.a
                    .post(" /addproductcategory", t)
                    .then(function (e) {
                      console.log(e),
                        r.props.history.push("/app/freshlist/gallery/gallery");
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
                product_img: "",
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
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("h1", null, "Add New Product"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        u.a,
                        null,
                        i.a.createElement(
                          d.a,
                          { className: "m-1" },
                          i.a.createElement(
                            m.a,
                            null,
                            i.a.createElement("h2", null, "Upload File")
                          )
                        ),
                        i.a.createElement(
                          f.a,
                          null,
                          i.a.createElement(
                            p.a,
                            { onSubmit: this.submitHandler },
                            i.a.createElement(
                              d.a,
                              { className: "mb-1" },
                              i.a.createElement(
                                m.a,
                                { lg: "12" },
                                i.a.createElement(h.a, null, "Image"),
                                i.a.createElement(b.a, {
                                  required: !0,
                                  type: "file",
                                  name: "bannertype",
                                  placeholder: "Upload image",
                                  value: this.state.bannertype,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            i.a.createElement(
                              d.a,
                              { style: { float: "right" } },
                              i.a.createElement(
                                g.a.Ripple,
                                {
                                  color: "primary",
                                  type: "submit",
                                  className: "mr-1 mb-1 ",
                                },
                                "Upload"
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
        })(c.Component);
      t.default = y;
    },
    831: function (e, t, a) {
      "use strict";
      var n = a(44),
        s = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = s;
    },
    836: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(16),
        l = a(18),
        o = a(0),
        c = a.n(o),
        i = a(1),
        u = a.n(i),
        d = a(5),
        m = a.n(d),
        f = a(4),
        p = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: u.a.node,
          inline: u.a.bool,
          tag: f.tagPropType,
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
                o = e.innerRef,
                i = Object(s.a)(e, p),
                u = Object(f.mapToCssModules)(m()(t, !!r && "form-inline"), a);
              return c.a.createElement(
                l,
                Object(n.a)({}, i, { ref: o, className: u })
              );
            }),
            t
          );
        })(o.Component);
      (b.propTypes = h), (b.defaultProps = { tag: "form" }), (t.a = b);
    },
    837: function (e, t, a) {
      "use strict";
      var n = a(6),
        s = a(7),
        r = a(0),
        l = a.n(r),
        o = a(1),
        c = a.n(o),
        i = a(5),
        u = a.n(i),
        d = a(4),
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
        f = c.a.oneOfType([c.a.number, c.a.string]),
        p = c.a.oneOfType([
          c.a.bool,
          c.a.string,
          c.a.number,
          c.a.shape({ size: f, order: f, offset: f }),
        ]),
        h = {
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
        v = function (e) {
          var t = e.className,
            a = e.cssModule,
            r = e.hidden,
            o = e.widths,
            c = e.tag,
            i = e.check,
            f = e.size,
            p = e.for,
            h = Object(s.a)(e, m),
            b = [];
          o.forEach(function (t, n) {
            var s = e[t];
            if ((delete h[t], s || "" === s)) {
              var r,
                l = !n;
              if (Object(d.isObject)(s)) {
                var o,
                  c = l ? "-" : "-" + t + "-";
                (r = g(l, t, s.size)),
                  b.push(
                    Object(d.mapToCssModules)(
                      u()(
                        (((o = {})[r] = s.size || "" === s.size),
                        (o["order" + c + s.order] = s.order || 0 === s.order),
                        (o["offset" + c + s.offset] =
                          s.offset || 0 === s.offset),
                        o)
                      )
                    ),
                    a
                  );
              } else (r = g(l, t, s)), b.push(r);
            }
          });
          var v = Object(d.mapToCssModules)(
            u()(
              t,
              !!r && "sr-only",
              !!i && "form-check-label",
              !!f && "col-form-label-" + f,
              b,
              !!b.length && "col-form-label"
            ),
            a
          );
          return l.a.createElement(
            c,
            Object(n.a)({ htmlFor: p }, h, { className: v })
          );
        };
      (v.propTypes = h), (v.defaultProps = b), (t.a = v);
    },
  },
]);
//# sourceMappingURL=240.aa6d3988.chunk.js.map
