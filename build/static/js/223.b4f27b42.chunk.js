(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [223],
  {
    2295: function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(10),
        s = t(11),
        n = t(13),
        i = t(12),
        r = t(0),
        c = t.n(r),
        m = t(819),
        o = t(820),
        d = t(821),
        u = t(822),
        f = t(823),
        E = t(824),
        v = t(195),
        h = t(920),
        N = t(831),
        g = t(1529),
        p = (t(832), t(20)),
        b = (function (e) {
          Object(n.a)(t, e);
          var a = Object(i.a)(t);
          function t(e) {
            var s;
            return (
              Object(l.a)(this, t),
              ((s = a.call(this, e)).state = { data: {} }),
              s
            );
          }
          return (
            Object(s.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  console.log(this.props.match.params);
                  var a = this.props.match.params.id;
                  N.a
                    .get("/getonestore/".concat(a))
                    .then(function (a) {
                      console.log(a.data.data),
                        e.setState({ data: a.data.data });
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e, a, t, l, s, n, i, r, N, b, w, x, y, _;
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    c.a.createElement(
                      m.a,
                      null,
                      c.a.createElement(
                        o.a,
                        { sm: "12", md: "12" },
                        c.a.createElement(
                          d.a,
                          null,
                          c.a.createElement(
                            u.a,
                            null,
                            c.a.createElement(
                              f.a,
                              null,
                              c.a.createElement("h1", null, "Information")
                            )
                          ),
                          c.a.createElement(
                            E.a,
                            null,
                            c.a.createElement(
                              m.a,
                              { className: "ml-4" },
                              c.a.createElement(
                                o.a,
                                { sm: "9", md: "12", lg: "12" },
                                c.a.createElement(
                                  "div",
                                  { className: "users-page-view-table" },
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Store Name"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      { className: "text-truncate" },
                                      c.a.createElement(
                                        "span",
                                        null,
                                        this.state.data.store_name
                                      )
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Store Email"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      { className: "text-truncate" },
                                      c.a.createElement(
                                        "span",
                                        null,
                                        this.state.data.store_email
                                      )
                                    )
                                  )
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "users-page-view-table" },
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Status"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.status
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Business Type"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.business_type
                                    )
                                  )
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "users-page-view-table" },
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Store Name"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.store_name
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Address"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.address_line1,
                                      ",",
                                      this.state.data.address_line2
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Store Description"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.store_desc
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "LandMark"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.landmark
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Website"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.websiteUrl
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Phone No"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.altphone_no
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Open Days"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.day
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Time"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.openingTym,
                                      "-",
                                      this.state.data.closingTym
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "City"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.city
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "State"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.state
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Pin Code"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.pincode
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "GST No."
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.gst_no
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Business Type"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.business_type
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "PAN No."
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.pan_no
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Company PAN No."
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.company_panno
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "Address Proof"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.address_proof
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "d-flex user-info" },
                                    c.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "user-info-title font-weight-bold",
                                      },
                                      "short Order"
                                    ),
                                    c.a.createElement(
                                      "div",
                                      null,
                                      this.state.data.sortorder
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        o.a,
                        { sm: "12" },
                        c.a.createElement(
                          d.a,
                          null,
                          c.a.createElement(
                            m.a,
                            { className: "m-2" },
                            c.a.createElement(
                              o.a,
                              null,
                              c.a.createElement(
                                "h1",
                                { "col-sm-6": !0, className: "float-left" },
                                "Store Detail"
                              )
                            ),
                            c.a.createElement(
                              o.a,
                              null,
                              c.a.createElement(
                                v.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return p.a.push(
                                      "/app/store/stores/storesList"
                                    );
                                  },
                                },
                                "Back"
                              )
                            )
                          ),
                          c.a.createElement(
                            h.a,
                            null,
                            c.a.createElement(
                              g.a,
                              null,
                              null === (e = this.state.data) ||
                                void 0 === e ||
                                null === (a = e.storeImg) ||
                                void 0 === a
                                ? void 0
                                : a.map(function (e) {
                                    return c.a.createElement("img", {
                                      className: "border-black m-0",
                                      src: e,
                                      alt: "user avatar",
                                      height: "400",
                                    });
                                  })
                            )
                          ),
                          c.a.createElement(
                            E.a,
                            null,
                            c.a.createElement(
                              m.a,
                              { className: "mx-0", col: "12" },
                              c.a.createElement(
                                o.a,
                                { className: "pl-0", sm: "12", lg: "6" },
                                c.a.createElement(
                                  o.a,
                                  { className: "mt-1 pl-0", sm: "12" },
                                  c.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "Shop Logo"
                                  )
                                ),
                                c.a.createElement(
                                  h.a,
                                  null,
                                  c.a.createElement(
                                    g.a,
                                    null,
                                    null === (t = this.state.data) ||
                                      void 0 === t ||
                                      null === (l = t.shoplogo_img) ||
                                      void 0 === l
                                      ? void 0
                                      : l.map(function (e) {
                                          return c.a.createElement("img", {
                                            className: "rounded mr-2",
                                            object: !0,
                                            src: e,
                                            alt: "Generic placeholder image",
                                            height: "400",
                                          });
                                        })
                                  )
                                ),
                                c.a.createElement(
                                  o.a,
                                  { className: "mt-1 pl-0", sm: "12" },
                                  c.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "GST Image"
                                  )
                                ),
                                c.a.createElement(
                                  h.a,
                                  null,
                                  c.a.createElement(
                                    g.a,
                                    null,
                                    null === (s = this.state.data) ||
                                      void 0 === s ||
                                      null === (n = s.gstImg) ||
                                      void 0 === n
                                      ? void 0
                                      : n.map(function (e) {
                                          return c.a.createElement("img", {
                                            className: "rounded mr-2",
                                            object: !0,
                                            src: e,
                                            alt: "Generic placeholder image",
                                            height: "400",
                                          });
                                        })
                                  )
                                ),
                                c.a.createElement(
                                  o.a,
                                  { className: "mt-1 pl-0", sm: "12" },
                                  c.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "Store PAN Image"
                                  )
                                ),
                                c.a.createElement(
                                  h.a,
                                  null,
                                  c.a.createElement(
                                    g.a,
                                    null,
                                    null === (i = this.state.data) ||
                                      void 0 === i ||
                                      null === (r = i.storepan_img) ||
                                      void 0 === r
                                      ? void 0
                                      : r.map(function (e) {
                                          return c.a.createElement("img", {
                                            className: "rounded mr-2",
                                            object: !0,
                                            src: e,
                                            alt: "Generic placeholder image",
                                            height: "400",
                                          });
                                        })
                                  )
                                ),
                                c.a.createElement(
                                  o.a,
                                  { className: "mt-1 pl-0", sm: "12" },
                                  c.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "Tradelicence Image"
                                  )
                                ),
                                c.a.createElement(
                                  h.a,
                                  null,
                                  c.a.createElement(
                                    g.a,
                                    null,
                                    null === (N = this.state.data) ||
                                      void 0 === N ||
                                      null === (b = N.tradelicence_img) ||
                                      void 0 === b
                                      ? void 0
                                      : b.map(function (e) {
                                          return c.a.createElement("img", {
                                            className: "rounded mr-2",
                                            object: !0,
                                            src: e,
                                            alt: "Generic placeholder image",
                                            height: "400",
                                          });
                                        })
                                  )
                                ),
                                c.a.createElement(
                                  o.a,
                                  { className: "mt-1 pl-0", sm: "12" },
                                  c.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "Company PAN Image"
                                  )
                                ),
                                c.a.createElement(
                                  h.a,
                                  null,
                                  c.a.createElement(
                                    g.a,
                                    null,
                                    null === (w = this.state.data) ||
                                      void 0 === w ||
                                      null === (x = w.companypan_img) ||
                                      void 0 === x
                                      ? void 0
                                      : x.map(function (e) {
                                          return c.a.createElement("img", {
                                            className: "rounded mr-2",
                                            object: !0,
                                            src: e,
                                            alt: "Generic placeholder image",
                                            height: "400",
                                          });
                                        })
                                  )
                                ),
                                c.a.createElement(
                                  o.a,
                                  { className: "mt-1 pl-0", sm: "12" },
                                  c.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "Adress Proof Image"
                                  )
                                ),
                                c.a.createElement(
                                  h.a,
                                  null,
                                  c.a.createElement(
                                    g.a,
                                    null,
                                    null === (y = this.state.data) ||
                                      void 0 === y ||
                                      null === (_ = y.address_proof_img) ||
                                      void 0 === _
                                      ? void 0
                                      : _.map(function (e) {
                                          return c.a.createElement("img", {
                                            className: "rounded mr-2",
                                            object: !0,
                                            src: e,
                                            alt: "Generic placeholder image",
                                            height: "400",
                                          });
                                        })
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
        })(c.a.Component);
      a.default = b;
    },
    831: function (e, a, t) {
      "use strict";
      var l = t(44),
        s = t.n(l).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = s;
    },
    832: function (e, a, t) {},
    920: function (e, a, t) {
      "use strict";
      var l = t(6),
        s = t(7),
        n = t(0),
        i = t.n(n),
        r = t(1),
        c = t.n(r),
        m = t(5),
        o = t.n(m),
        d = t(4),
        u = ["className", "cssModule", "fluid", "tag"],
        f = {
          tag: d.tagPropType,
          fluid: c.a.oneOfType([c.a.bool, c.a.string]),
          className: c.a.string,
          cssModule: c.a.object,
        },
        E = function (e) {
          var a = e.className,
            t = e.cssModule,
            n = e.fluid,
            r = e.tag,
            c = Object(s.a)(e, u),
            m = "container";
          !0 === n ? (m = "container-fluid") : n && (m = "container-" + n);
          var f = Object(d.mapToCssModules)(o()(a, m), t);
          return i.a.createElement(r, Object(l.a)({}, c, { className: f }));
        };
      (E.propTypes = f), (E.defaultProps = { tag: "div" }), (a.a = E);
    },
  },
]);
//# sourceMappingURL=223.b4f27b42.chunk.js.map
