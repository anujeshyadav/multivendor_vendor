(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [250],
  {
    1545: function (e, a, t) {},
    2421: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(10),
        l = t(11),
        c = t(13),
        o = t(12),
        s = t(0),
        r = t.n(s),
        m = t(819),
        d = t(820),
        u = t(821),
        g = t(823),
        i = t(831),
        b = t(44),
        h = t.n(b),
        E = t(822),
        y = t(885),
        f = t(815),
        v = t(935),
        p = t(188),
        N = t.n(p),
        k = t(191),
        S = t.n(k),
        C = t(137),
        O = t.n(C),
        j = t(135),
        w = t.n(j),
        _ = t(105),
        x = t.n(_),
        D = t(71),
        F = t.n(D),
        J = t(63),
        P = t.n(J),
        R = t(82),
        L = t.n(R),
        M = (r.a.Component, t(1545), t(1351)),
        U = t(810),
        q = t(827),
        z = t(828),
        A = (function (e) {
          Object(c.a)(t, e);
          var a = Object(o.a)(t);
          function t(e) {
            var l;
            return (
              Object(n.a)(this, t),
              ((l = a.call(this, e)).state = {
                product: {},
                customer: {},
                store: {},
                seller: {},
                order: {},
                banner: {},
                brand: {},
                total_sub: {},
                Coupon: {},
              }),
              l
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  i.a
                    .get("/totalproduct")
                    .then(function (a) {
                      console.log(a.data), e.setState({ product: a.data });
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                    h.a
                      .get("http://35.154.86.59/api/user/totalcustomer")
                      .then(function (a) {
                        console.log(a.data), e.setState({ customer: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/totalstore")
                      .then(function (a) {
                        console.log(a.data), e.setState({ store: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/totalsale")
                      .then(function (a) {
                        console.log(a.data), e.setState({ sale: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/totalorder")
                      .then(function (a) {
                        console.log(a.data),
                          console.log(a.data.data),
                          e.setState({ order: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/totalbrand")
                      .then(function (a) {
                        console.log(a.data), e.setState({ brand: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/totalbanner")
                      .then(function (a) {
                        console.log(a.data), e.setState({ banner: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/gettotalcoupon")
                      .then(function (a) {
                        console.log(a.data), e.setState({ Coupon: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                    i.a
                      .get("/total_sub")
                      .then(function (a) {
                        console.log(a.data), e.setState({ total_sub: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      m.a,
                      { className: "match-height" },
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(M.c, null),
                            "\xa0\xa0 Pending"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(M.d, null),
                            "\xa0\xa0 Confirmed"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(U.a, {
                              style: { color: "cornflowerblue" },
                            }),
                            "\xa0\xa0 Packaging"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(M.f, null),
                            "\xa0\xa0 Out for delivery"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(q.a, null),
                            "\xa0\xa0 Delivered"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(M.a, null),
                            "\xa0\xa0 Cancelled"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(M.e, null),
                            "\xa0\xa0 Returned"
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { lg: "3", md: "12" },
                        r.a.createElement(
                          u.a,
                          { className: "bg-secondary", body: !0, inverse: !0 },
                          r.a.createElement(
                            g.a,
                            {
                              className: "mb-1",
                              tag: "h4",
                              style: { color: "black" },
                            },
                            r.a.createElement(z.a, null),
                            "\xa0\xa0 Failed to delivery"
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
        })(r.a.Component);
      a.default = A;
    },
    831: function (e, a, t) {
      "use strict";
      var n = t(44),
        l = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = l;
    },
  },
]);
//# sourceMappingURL=250.b9dc9192.chunk.js.map
