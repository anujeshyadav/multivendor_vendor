(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [242],
  {
    2163: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "AddBrand", function () {
          return N;
        });
      var n = a(45),
        l = a(10),
        c = a(11),
        r = a(13),
        s = a(12),
        o = a(0),
        m = a.n(o),
        u = a(821),
        i = a(819),
        d = a(820),
        p = a(195),
        h = a(844),
        E = a(1027),
        b = a(833),
        f = a(837),
        y = a(20),
        g = a(831),
        k = a(878),
        S = (a(901), a(895), a(860), a(866)),
        v = a.n(S),
        N = (function (e) {
          Object(r.a)(a, e);
          var t = Object(s.a)(a);
          function a(e) {
            var c;
            return (
              Object(l.a)(this, a),
              ((c = t.call(this, e)).onChangeHandler = function (e) {
                c.setState({ selectedFile: e.target.files[0] }),
                  c.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (c.SizeData = function () {
                console.log("object");
              }),
              (c.changeHandler1 = function (e) {
                c.setState({ status: e.target.value });
              }),
              (c.changeHandler = function (e) {
                c.setState(Object(n.a)({}, e.target.name, e.target.value));
              }),
              (c.onEditorStateChange = function (e) {
                c.setState({
                  editorState: e,
                  desc: v()(Object(k.convertToRaw)(e.getCurrentContent())),
                });
              }),
              (c.submitHandler = function (e) {
                e.preventDefault();
                var t = new FormData();
                t.append("name", c.state.name),
                  t.append("sortorder", c.state.sortorder),
                  t.append("desc", c.state.desc),
                  t.append("status", c.state.status),
                  null !== c.state.selectedFile &&
                    t.append(
                      "brand_img",
                      c.state.selectedFile,
                      c.state.selectedName
                    ),
                  g.a
                    .post("/addbrand", t)
                    .then(function (e) {
                      console.log(e),
                        c.props.history.push(
                          "/app/freshlist/house/HouseProductList"
                        );
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (c.state = {
                name: "",
                selectedFile: null,
                selectedName: "",
                sortorder: "",
                desc: "",
                brand_img: "",
                status: "",
                buying_price: "",
                buying_price1: "",
              }),
              c
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return m.a.createElement(
                    "div",
                    null,
                    m.a.createElement(
                      u.a,
                      null,
                      m.a.createElement(
                        i.a,
                        { className: "m-2" },
                        m.a.createElement(
                          d.a,
                          null,
                          m.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Assign to Brand"
                          )
                        ),
                        m.a.createElement(
                          d.a,
                          null,
                          m.a.createElement(
                            p.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return y.a.push(
                                  "/app/freshlist/hub/assigntohub"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      m.a.createElement(
                        i.a,
                        null,
                        m.a.createElement(
                          d.a,
                          { md: "6", className: "mt-3 ml-5" },
                          m.a.createElement(
                            h.a,
                            { check: !0, inline: !0 },
                            m.a.createElement(
                              E.a,
                              { type: "unstyled" },
                              m.a.createElement(
                                "li",
                                null,
                                m.a.createElement(b.a, { type: "checkbox" }),
                                m.a.createElement(f.a, { check: !0 }, "Brand"),
                                m.a.createElement(
                                  "ul",
                                  null,
                                  m.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    m.a.createElement(b.a, {
                                      type: "checkbox",
                                    }),
                                    m.a.createElement(
                                      f.a,
                                      { check: !0 },
                                      " Sub Brand"
                                    )
                                  ),
                                  m.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    m.a.createElement(b.a, {
                                      type: "checkbox",
                                    }),
                                    m.a.createElement(
                                      f.a,
                                      { check: !0 },
                                      " Sub Brand"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        m.a.createElement(
                          d.a,
                          { md: "6", className: "mt-3 ml-5" },
                          m.a.createElement(
                            h.a,
                            { check: !0, inline: !0 },
                            m.a.createElement(
                              E.a,
                              { type: "unstyled" },
                              m.a.createElement(
                                "li",
                                null,
                                m.a.createElement(b.a, { type: "checkbox" }),
                                m.a.createElement(f.a, { check: !0 }, "Brand"),
                                m.a.createElement(
                                  "ul",
                                  null,
                                  m.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    m.a.createElement(b.a, {
                                      type: "checkbox",
                                    }),
                                    m.a.createElement(
                                      f.a,
                                      { check: !0 },
                                      " Sub Brand"
                                    )
                                  ),
                                  m.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    m.a.createElement(b.a, {
                                      type: "checkbox",
                                    }),
                                    m.a.createElement(
                                      f.a,
                                      { check: !0 },
                                      " Sub Brand"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      m.a.createElement(
                        i.a,
                        null,
                        m.a.createElement(d.a, { md: "4" }),
                        m.a.createElement(
                          d.a,
                          { md: "4", className: "" },
                          m.a.createElement(
                            p.a,
                            {
                              className: " btn btn-info mb-2",
                              onClick: function () {
                                return y.a.push(
                                  "/app/freshlist/hub/assigntobatch"
                                );
                              },
                            },
                            "Save"
                          )
                        ),
                        m.a.createElement(d.a, { md: "4" })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      t.default = N;
    },
    831: function (e, t, a) {
      "use strict";
      var n = a(44),
        l = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = l;
    },
    860: function (e, t, a) {},
  },
]);
//# sourceMappingURL=242.67754187.chunk.js.map
