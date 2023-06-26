(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [150],
  {
    2177: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(10),
        s = t(11),
        l = t(13),
        c = t(12),
        r = t(0),
        m = t.n(r),
        i = t(819),
        o = t(820),
        u = t(592),
        d = t(99),
        f = t(821),
        E = t(195),
        h = t(824),
        v = (t(20), t(867), t(832), t(831)),
        p = t(62),
        b = (function (e) {
          Object(l.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var s;
            return (
              Object(n.a)(this, t),
              ((s = a.call(this, e)).state = { data: {} }),
              s
            );
          }
          return (
            Object(s.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    a = this.props.match.params.id;
                  v.a
                    .get("/user/getviewone/".concat(a))
                    .then(function (a) {
                      console.log(a.data.data),
                        e.setState({ data: a.data.data });
                    })
                    .catch(function (e) {
                      console.log(e.response);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      "div",
                      null,
                      m.a.createElement(
                        i.a,
                        null,
                        m.a.createElement(
                          o.a,
                          { sm: "12" },
                          m.a.createElement(
                            "div",
                            null,
                            m.a.createElement(
                              u.a,
                              { listTag: "div" },
                              m.a.createElement(
                                d.a,
                                { href: "/analyticsDashboard", tag: "a" },
                                "Home"
                              ),
                              m.a.createElement(
                                d.a,
                                {
                                  href: "/app/freshlist/customer/customerList",
                                  tag: "a",
                                },
                                "Customer List"
                              ),
                              m.a.createElement(
                                d.a,
                                { active: !0 },
                                " View CustomerList"
                              )
                            )
                          )
                        )
                      ),
                      m.a.createElement(
                        f.a,
                        { className: "overflow-hidden app-ecommerce-details" },
                        m.a.createElement(
                          i.a,
                          { className: "m-2" },
                          m.a.createElement(
                            o.a,
                            null,
                            m.a.createElement(
                              "h1",
                              { "col-sm-6": !0, className: "float-left" },
                              "View CustomerList"
                            )
                          ),
                          m.a.createElement(
                            o.a,
                            null,
                            m.a.createElement(p.b, {
                              render: function (e) {
                                var a = e.history;
                                return m.a.createElement(
                                  E.a,
                                  {
                                    className: " btn btn-danger float-right",
                                    onClick: function () {
                                      return a.push(
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
                        m.a.createElement(
                          h.a,
                          { className: "pb-0" },
                          m.a.createElement(
                            i.a,
                            { className: "ml-4" },
                            m.a.createElement(
                              o.a,
                              { sm: "9", md: "12", lg: "12" },
                              m.a.createElement(
                                "div",
                                { className: "users-page-view-table" },
                                m.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  m.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Customer Name :"
                                  ),
                                  m.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    m.a.createElement(
                                      "span",
                                      null,
                                      this.state.data.username
                                    )
                                  )
                                ),
                                m.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  m.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Email :"
                                  ),
                                  m.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    m.a.createElement(
                                      "span",
                                      null,
                                      this.state.data.email
                                    )
                                  )
                                ),
                                m.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  m.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Mobile No. :"
                                  ),
                                  m.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    m.a.createElement(
                                      "span",
                                      null,
                                      this.state.data.mobile
                                    )
                                  )
                                ),
                                m.a.createElement(
                                  "div",
                                  { className: "d-flex user-info" },
                                  m.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-info-title font-weight-bold",
                                    },
                                    "Status :"
                                  ),
                                  m.a.createElement(
                                    "div",
                                    { className: "text-truncate" },
                                    m.a.createElement(
                                      "span",
                                      null,
                                      this.state.data.status
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
        })(m.a.Component);
      a.default = b;
    },
    831: function (e, a, t) {
      "use strict";
      var n = t(44),
        s = t.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = s;
    },
    832: function (e, a, t) {},
    867: function (e, a, t) {},
  },
]);
//# sourceMappingURL=150.73d1a9fe.chunk.js.map
