(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [289],
  {
    2229: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "AddCategory", function () {
          return w;
        });
      var l = t(839),
        n = t(45),
        r = t(10),
        m = t(11),
        c = t(13),
        s = t(12),
        o = t(0),
        d = t.n(o),
        i = t(821),
        u = t(819),
        E = t(820),
        h = t(195),
        p = t(824),
        g = t(836),
        f = t(844),
        y = t(837),
        b = t(833),
        v = t(811),
        C = t(1648),
        x = t(829),
        H = t(20),
        N = t(831),
        w = (function (e) {
          Object(c.a)(t, e);
          var a = Object(s.a)(t);
          function t(e) {
            var m;
            return (
              Object(r.a)(this, t),
              ((m = a.call(this, e)).onChangeHandler = function (e) {
                m.setState({ selectedFile: e.target.files[0] }),
                  m.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (m.changeHandler1 = function (e) {
                m.setState({ status: e.target.value });
              }),
              (m.changeHandler = function (e) {
                m.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (m.submitHandler = function (e) {
                e.preventDefault();
                var a = new FormData();
                a.append("customer_name", m.state.customer_name),
                  a.append("desc", m.state.desc),
                  a.append("status", m.state.status),
                  null !== m.state.selectedFile &&
                    a.append(
                      "image",
                      m.state.selectedFile,
                      m.state.selectedName
                    );
                var t,
                  n = Object(l.a)(a.values());
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value;
                    console.log(r);
                  }
                } catch (c) {
                  n.e(c);
                } finally {
                  n.f();
                }
                N.a
                  .post("/admin/addcategory", a)
                  .then(function (e) {
                    console.log(e),
                      m.props.history.push(
                        "/app/freshlist/category/categoryList"
                      );
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (m.state = {
                customer_name: "",
                selectedFile: null,
                selectedName: "",
                desc: "",
                image: "",
                status: "",
              }),
              m
            );
          }
          return (
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  return d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      i.a,
                      null,
                      d.a.createElement(
                        u.a,
                        { className: "m-2" },
                        d.a.createElement(
                          E.a,
                          null,
                          d.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add Customer"
                          )
                        ),
                        d.a.createElement(
                          E.a,
                          null,
                          d.a.createElement(
                            h.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return H.a.push(
                                  "/app/freshlist/customer/CustomerList"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      d.a.createElement(
                        p.a,
                        null,
                        d.a.createElement(
                          g.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          d.a.createElement(
                            u.a,
                            { className: "mb-2" },
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(y.a, null, "Customer Name"),
                                d.a.createElement(b.a, {
                                  type: "text",
                                  placeholder: "Customer Name",
                                  name: "customer_name",
                                  value: this.state.customer_name,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(
                                  y.a,
                                  { for: "exampleEmail" },
                                  "Email"
                                ),
                                d.a.createElement(b.a, {
                                  type: "email",
                                  name: "email",
                                  id: "exampleEmail",
                                  placeholder: "Email",
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(
                                  y.a,
                                  { for: "examplePassword" },
                                  "Password"
                                ),
                                d.a.createElement(b.a, {
                                  type: "password",
                                  name: "password",
                                  id: "examplePassword",
                                  placeholder: "password",
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(
                                  y.a,
                                  { for: "ConfirmPassword" },
                                  "Confirm Password"
                                ),
                                d.a.createElement(b.a, {
                                  type: "password",
                                  name: "password",
                                  id: "ConfirmPassword",
                                  placeholder: "Confirm password",
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(y.a, null, "Description"),
                                d.a.createElement(b.a, {
                                  type: "text",
                                  placeholder: "Enter Here",
                                  name: "desc",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(y.a, null, "Mobile Number"),
                                d.a.createElement(b.a, {
                                  type: "number",
                                  name: "desc",
                                  placeholder: "Enter Number",
                                  value: this.state.desc,
                                  onChange: this.changeHandler,
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(y.a, null, "Customer Image "),
                                d.a.createElement(v.a, {
                                  type: "file",
                                  name: "image",
                                  value: this.state.image,
                                  onChange: this.onChangeHandler,
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6" },
                              d.a.createElement(
                                f.a,
                                null,
                                d.a.createElement(y.a, null, "Shipping"),
                                d.a.createElement(b.a, {
                                  type: "text",
                                  placeholder: "shipping_address",
                                  name: "shipping_address",
                                })
                              )
                            ),
                            d.a.createElement(
                              E.a,
                              { lg: "6", md: "6", className: "mb-2" },
                              d.a.createElement(y.a, null, "Address"),
                              d.a.createElement(
                                C.a,
                                null,
                                d.a.createElement(
                                  C.b,
                                  null,
                                  d.a.createElement(
                                    E.a,
                                    { lg: "6", md: "6", className: "" },
                                    d.a.createElement(
                                      C.c,
                                      {
                                        style: {
                                          paddingLeft: "424px",
                                          paddingRight: "40px",
                                          margin: "3px 0 12px -13px",
                                          height: "36px",
                                          backgroundColor: "white",
                                          borderRadius: "0.5rem",
                                          border: "1px solid #d9d9d9",
                                        },
                                      },
                                      d.a.createElement(x.a, null)
                                    )
                                  ),
                                  d.a.createElement(
                                    C.d,
                                    null,
                                    d.a.createElement(
                                      g.a,
                                      { onSubmit: this.submitHandler },
                                      d.a.createElement(
                                        f.a,
                                        null,
                                        d.a.createElement(y.a, null, "Type"),
                                        d.a.createElement(
                                          b.a,
                                          {
                                            type: "select",
                                            name: "type",
                                            value: this.state.type,
                                            onChange: this.changeHandler,
                                          },
                                          d.a.createElement(
                                            "option",
                                            null,
                                            "---Select Address---"
                                          ),
                                          d.a.createElement(
                                            "option",
                                            { value: "1" },
                                            "Home"
                                          ),
                                          d.a.createElement(
                                            "option",
                                            { value: "2" },
                                            "Work"
                                          ),
                                          d.a.createElement(
                                            "option",
                                            { value: "3" },
                                            "Others"
                                          )
                                        )
                                      ),
                                      d.a.createElement(
                                        f.a,
                                        null,
                                        d.a.createElement(y.a, null, "Name"),
                                        d.a.createElement(b.a, {
                                          type: "text",
                                          name: "name",
                                          value: this.state.name,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      d.a.createElement(
                                        f.a,
                                        null,
                                        d.a.createElement(y.a, null, "Phone"),
                                        d.a.createElement(b.a, {
                                          type: "number",
                                          name: "number",
                                          value: this.state.phone,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      d.a.createElement(
                                        f.a,
                                        null,
                                        d.a.createElement(y.a, null, "Email"),
                                        d.a.createElement(b.a, {
                                          type: "email",
                                          name: "email",
                                          value: this.state.email,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      d.a.createElement(
                                        f.a,
                                        null,
                                        d.a.createElement(y.a, null, "Address"),
                                        d.a.createElement(b.a, {
                                          type: "address",
                                          name: "address",
                                          value: this.state.address,
                                          onChange: this.changeHandler,
                                        })
                                      ),
                                      d.a.createElement(
                                        f.a,
                                        null,
                                        d.a.createElement(y.a, null, "City"),
                                        d.a.createElement(b.a, {
                                          type: "city",
                                          name: "city",
                                          value: this.state.city,
                                          onChange: this.changeHandler,
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          d.a.createElement(
                            u.a,
                            { className: "ml-0" },
                            d.a.createElement(
                              f.a,
                              { check: !0 },
                              d.a.createElement(
                                y.a,
                                { check: !0 },
                                d.a.createElement(b.a, { type: "checkbox" }),
                                "Check me out"
                              )
                            )
                          ),
                          d.a.createElement(
                            u.a,
                            { className: "m-2" },
                            d.a.createElement(
                              h.a.Ripple,
                              {
                                color: "danger",
                                type: "submit",
                                className: "mr-1 mb-1",
                              },
                              "Add Customer"
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
      a.default = w;
    },
    831: function (e, a, t) {
      "use strict";
      var l = t(44),
        n = t.n(l).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = n;
    },
  },
]);
//# sourceMappingURL=289.ef366eec.chunk.js.map
