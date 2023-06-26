(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [237],
  {
    2278: function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(10),
        n = t(11),
        c = t(13),
        r = t(12),
        s = t(0),
        m = t.n(s),
        u = t(821),
        o = t(819),
        h = t(820),
        i = t(195),
        d = t(824),
        E = t(20),
        p = (t(867), t(831)),
        v = (function (e) {
          Object(c.a)(t, e);
          var a = Object(r.a)(t);
          function t(e) {
            var n;
            return (
              Object(l.a)(this, t),
              ((n = a.call(this, e)).state = { data: {} }),
              n
            );
          }
          return (
            Object(n.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    a = this.props.match.params.id;
                  p.a
                    .get("/viewoneproduct/".concat(a))
                    .then(function (a) {
                      console.log(a.data.data),
                        e.setState({ data: a.data.data }),
                        console.log(a.data.data.rate[0].rate);
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e, a, t, l;
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      u.a,
                      { className: "overflow-hidden app-ecommerce-details" },
                      m.a.createElement(
                        o.a,
                        { className: "m-2" },
                        m.a.createElement(
                          h.a,
                          null,
                          m.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Activity Logs Detail"
                          )
                        ),
                        m.a.createElement(
                          h.a,
                          null,
                          m.a.createElement(
                            i.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return E.a.push("/app/activity/activityLogs");
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      m.a.createElement(
                        d.a,
                        { className: "pb-0" },
                        m.a.createElement(
                          o.a,
                          { className: "mb-5 mt-2" },
                          m.a.createElement(
                            h.a,
                            {
                              className:
                                "d-flex align-items-start justify-content-center mb-2 mb-md-0",
                              sm: "12",
                              md: "5",
                            },
                            m.a.createElement("img", {
                              src: this.state.data.product_img,
                              alt: "Google Home",
                              height: "250",
                              width: "250",
                            })
                          ),
                          m.a.createElement(
                            h.a,
                            { md: "7", sm: "12" },
                            m.a.createElement(
                              "h3",
                              null,
                              this.state.data.item_name
                            ),
                            m.a.createElement(
                              "h6",
                              { className: "" },
                              "by ",
                              null === (e = this.state.data.brand) ||
                                void 0 === e
                                ? void 0
                                : e.name
                            ),
                            m.a.createElement(
                              "div",
                              { className: "d-flex flex-wrap" },
                              m.a.createElement("h3", {
                                className: "text-primary",
                              })
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Short Description "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.short_desc
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement(
                              "h4",
                              null,
                              "Product Description "
                            ),
                            m.a.createElement("h6", null, this.state.data.desc),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Product Code"),
                            m.a.createElement("h6", null, this.state.data.code),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "HSN Code"),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.hsn_code
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Brand"),
                            m.a.createElement(
                              "h6",
                              null,
                              null === (a = this.state.data.brand) ||
                                void 0 === a
                                ? void 0
                                : a.name
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Product Category"),
                            m.a.createElement(
                              "h6",
                              null,
                              null === (t = this.state.data.productcategory) ||
                                void 0 === t
                                ? void 0
                                : t.name
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement(
                              "h4",
                              null,
                              "Product Sub Category "
                            ),
                            m.a.createElement(
                              "h6",
                              null,
                              null ===
                                (l = this.state.data.productsubcategory) ||
                                void 0 === l
                                ? void 0
                                : l.name
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Stock Quantity "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.stock_qty
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Size"),
                            m.a.createElement("h6", null, this.state.data.size),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Color "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.colour
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Material "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.material
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "BarCode "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.barcode
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement(
                              "h6",
                              { className: "my-50" },
                              m.a.createElement("span", null, "Available"),
                              m.a.createElement(
                                "span",
                                { className: "mx-50" },
                                "-"
                              ),
                              m.a.createElement(
                                "span",
                                { className: "text-success" },
                                "In Stock"
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
            t
          );
        })(m.a.Component);
      a.default = v;
    },
    831: function (e, a, t) {
      "use strict";
      var l = t(44),
        n = t.n(l).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = n;
    },
    867: function (e, a, t) {},
  },
]);
//# sourceMappingURL=237.b8a014da.chunk.js.map
