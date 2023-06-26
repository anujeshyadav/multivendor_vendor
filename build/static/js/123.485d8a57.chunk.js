(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [123],
  {
    1219: function (e, t, a) {},
    2260: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a(10),
        n = a(11),
        r = a(13),
        c = a(12),
        u = a(0),
        m = a.n(u),
        o = a(821),
        s = a(819),
        i = a(820),
        h = a(195),
        d = a(824),
        E = a(20),
        v = a(970),
        p = a.n(v),
        f = (a(867), a(831)),
        b = (a(864), a(1218), a(1219), a(1529)),
        g = (function (e) {
          Object(r.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { data: {} }),
              n
            );
          }
          return (
            Object(n.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.match.params.id;
                  f.a
                    .get("/getoneproduct/".concat(t))
                    .then(function (t) {
                      console.log(t.data.data),
                        e.setState({ data: t.data.data });
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e, t, a, l, n, r, c, u, v;
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      o.a,
                      { className: "overflow-hidden app-ecommerce-details" },
                      m.a.createElement(
                        s.a,
                        { className: "m-2" },
                        m.a.createElement(
                          i.a,
                          null,
                          m.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Product Detail"
                          )
                        ),
                        m.a.createElement(
                          i.a,
                          null,
                          m.a.createElement(
                            h.a,
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
                      m.a.createElement(
                        d.a,
                        { className: "pb-0" },
                        m.a.createElement(
                          o.a,
                          null,
                          m.a.createElement(
                            "div",
                            null,
                            m.a.createElement(
                              b.a,
                              null,
                              null === (e = this.state.data) ||
                                void 0 === e ||
                                null === (t = e.product_img) ||
                                void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    return m.a.createElement("img", {
                                      className: "border-black m-0",
                                      src: e,
                                      alt: "user avatar",
                                      height: "400",
                                    });
                                  })
                            )
                          )
                        ),
                        m.a.createElement(
                          s.a,
                          { className: "mb-5 mt-2" },
                          m.a.createElement(
                            i.a,
                            { md: "7", sm: "12" },
                            m.a.createElement("h4", null, "Product Name"),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.product_name
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Cost Price"),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.cost_price
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Selling Price "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.sell_price
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "GSt Rate "),
                            m.a.createElement("h6", null, this.state.data.gst),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "SKU No."),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.sku_no
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "HSN/SAC"),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.hsn_sac_no
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
                            m.a.createElement(
                              "h6",
                              null,
                              p()(this.state.data.long_desc)
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
                              null === (l = this.state.data.productcategory) ||
                                void 0 === l
                                ? void 0
                                : l.name
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
                                (n = this.state.data.productsubcategory) ||
                                void 0 === n
                                ? void 0
                                : n.name
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Size"),
                            m.a.createElement(
                              "h6",
                              null,
                              null === (r = this.state.data) ||
                                void 0 === r ||
                                null === (c = r.size) ||
                                void 0 === c
                                ? void 0
                                : c.map(function (e) {
                                    return m.a.createElement(
                                      "span",
                                      null,
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.sizeName
                                    );
                                  })
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Colour "),
                            m.a.createElement(
                              "h6",
                              null,
                              null === (u = this.state.data) ||
                                void 0 === u ||
                                null === (v = u.color) ||
                                void 0 === v
                                ? void 0
                                : v.map(function (e) {
                                    return m.a.createElement(
                                      "span",
                                      {
                                        style: {
                                          color:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.colorName,
                                        },
                                      },
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.colorName
                                    );
                                  })
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Material "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.material
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Stock Quantity "),
                            m.a.createElement("h6", null, this.state.data.qty),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Re-Order Level"),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.reorder_level
                            ),
                            m.a.createElement("hr", null),
                            m.a.createElement("h4", null, "Stock Available "),
                            m.a.createElement(
                              "h6",
                              null,
                              this.state.data.stock
                            ),
                            m.a.createElement("hr", null)
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
        })(m.a.Component);
      t.default = g;
    },
    831: function (e, t, a) {
      "use strict";
      var l = a(44),
        n = a.n(l).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = n;
    },
    867: function (e, t, a) {},
    971: function (e, t) {},
  },
]);
//# sourceMappingURL=123.485d8a57.chunk.js.map
