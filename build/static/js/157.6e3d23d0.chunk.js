(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [157],
  {
    2422: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "AddVendor", function () {
          return v;
        });
      var l = t(10),
        n = t(11),
        r = t(13),
        c = t(12),
        m = t(0),
        s = t.n(m),
        u = t(819),
        i = t(820),
        o = t(821),
        d = t(195),
        E = t(824),
        f = t(20),
        h =
          (t(867),
          t(832),
          t(44),
          (function (e) {
            Object(r.a)(t, e);
            var a = Object(c.a)(t);
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
                  key: "render",
                  value: function () {
                    return s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement(
                        "div",
                        null,
                        s.a.createElement(
                          u.a,
                          null,
                          s.a.createElement(i.a, { sm: "12" })
                        ),
                        s.a.createElement(
                          o.a,
                          {
                            className: "overflow-hidden app-ecommerce-details",
                          },
                          s.a.createElement(
                            u.a,
                            { className: "m-2" },
                            s.a.createElement(
                              i.a,
                              null,
                              s.a.createElement(
                                "h1",
                                { "col-sm-6": !0, className: "float-left" },
                                "Vendor WithDraws Information"
                              )
                            ),
                            s.a.createElement(
                              i.a,
                              null,
                              s.a.createElement(
                                d.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return f.a.push(
                                      "/app/freshlist/vendor/VendorList"
                                    );
                                  },
                                },
                                "Back"
                              )
                            )
                          ),
                          s.a.createElement(
                            E.a,
                            { className: "pb-0" },
                            s.a.createElement(
                              u.a,
                              { className: "ml-4" },
                              s.a.createElement(
                                i.a,
                                { sm: "9", md: "12", lg: "12" },
                                s.a.createElement(
                                  "div",
                                  { className: "users-page-view-table" },
                                  s.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Amount"
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "text-truncate" },
                                      s.a.createElement(
                                        "span",
                                        null,
                                        this.state.data.customerId
                                      )
                                    )
                                  ),
                                  s.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Request Time"
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "text-truncate" },
                                      s.a.createElement(
                                        "span",
                                        null,
                                        this.state.data.firstname
                                      )
                                    )
                                  ),
                                  s.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Note"
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "text-truncate" },
                                      s.a.createElement(
                                        "span",
                                        null,
                                        this.state.data.lastname
                                      )
                                    )
                                  )
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
          })(s.a.Component)),
        v =
          (t(831),
          (function (e) {
            Object(r.a)(t, e);
            var a = Object(c.a)(t);
            function t(e) {
              var n;
              return (
                Object(l.a)(this, t),
                ((n = a.call(this, e)).state = {
                  name: "",
                  selectedFile: null,
                  selectedName: "",
                  sortorder: "",
                  desc: "",
                  product_img: "",
                  status: "",
                }),
                n
              );
            }
            return (
              Object(n.a)(t, [
                {
                  key: "render",
                  value: function () {
                    return s.a.createElement(
                      u.a,
                      null,
                      s.a.createElement(
                        i.a,
                        { md: "12" },
                        s.a.createElement(
                          "h1",
                          { sm: "12" },
                          s.a.createElement(h, null)
                        )
                      ),
                      s.a.createElement(
                        i.a,
                        { md: "4" },
                        s.a.createElement(
                          o.a,
                          null,
                          s.a.createElement(
                            "h3",
                            { className: "m-2" },
                            "My Bank Info"
                          ),
                          s.a.createElement(
                            "ul",
                            null,
                            s.a.createElement(
                              "li",
                              null,
                              "Bank name :City Bank"
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              "Branch : Mirpur- 12"
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              "Holder name : Fatema"
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              "Account no : 12345678"
                            )
                          )
                        )
                      ),
                      s.a.createElement(
                        i.a,
                        { md: "4" },
                        s.a.createElement(
                          o.a,
                          null,
                          s.a.createElement(
                            "h3",
                            { className: "m-2" },
                            "Shop Info"
                          ),
                          s.a.createElement(
                            "ul",
                            null,
                            s.a.createElement(
                              "li",
                              null,
                              "Seller b : Mart Morning"
                            ),
                            s.a.createElement("li", null, "Phone :01632381820"),
                            s.a.createElement(
                              "li",
                              null,
                              "Address :House-09, Road-02, Section-15, Block-D, Mirpur-13"
                            )
                          )
                        )
                      ),
                      s.a.createElement(
                        i.a,
                        { md: "4" },
                        s.a.createElement(
                          o.a,
                          null,
                          s.a.createElement(
                            "h3",
                            { className: "m-2" },
                            "Seller Info"
                          ),
                          s.a.createElement(
                            "ul",
                            null,
                            s.a.createElement(
                              "li",
                              null,
                              "Name :kamrujjaman joy"
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              "Email :test.seller@gmail.com"
                            ),
                            s.a.createElement("li", null, "Phone :01632381820")
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(m.Component));
      a.default = v;
    },
    831: function (e, a, t) {
      "use strict";
      var l = t(44),
        n = t.n(l).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = n;
    },
    832: function (e, a, t) {},
    867: function (e, a, t) {},
  },
]);
//# sourceMappingURL=157.6e3d23d0.chunk.js.map
