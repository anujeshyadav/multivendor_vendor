(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [245],
  {
    2246: function (e, a, t) {
      "use strict";
      t.r(a);
      var o = t(10),
        n = t(11),
        r = t(13),
        c = t(12),
        s = t(0),
        i = t.n(s),
        l = t(821),
        d = t(819),
        m = t(820),
        p = t(195),
        u = t(824),
        b = t(836),
        h = (t(911), t(878)),
        y = t(901),
        f = t(866),
        E = t.n(f),
        N = (t(895), t(860), t(831)),
        v = t(20),
        S = t(846),
        g = t.n(S),
        k = (function (e) {
          Object(r.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = a.call(this, e)).onEditorStateChange = function (e) {
                n.setState({
                  editorState: e,
                  description: E()(
                    Object(h.convertToRaw)(e.getCurrentContent())
                  ),
                });
              }),
              (n.submitHandler = function (e) {
                e.preventDefault(),
                  N.a
                    .post("/addprivacy_policy", n.state)
                    .then(function (e) {
                      console.log(e),
                        n.props.history.push(
                          "/app/privacyPolicy/privacyPolicy"
                        ),
                        g()("Good job!", "You clicked the button!", "success");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (n.state = {
                description: "",
                editorState: h.EditorState.createEmpty(),
              }),
              n
            );
          }
          return (
            Object(n.a)(t, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    l.a,
                    null,
                    i.a.createElement(
                      d.a,
                      { className: "m-2" },
                      i.a.createElement(
                        m.a,
                        null,
                        i.a.createElement(
                          "h1",
                          { "col-sm-6": !0, className: "float-left" },
                          "Add New Privacy Policy"
                        )
                      ),
                      i.a.createElement(
                        m.a,
                        null,
                        i.a.createElement(
                          p.a,
                          {
                            className: " btn btn-danger float-right",
                            onClick: function () {
                              return v.a.push(
                                "/app/privacyPolicy/privacyPolicy"
                              );
                            },
                          },
                          "Back"
                        )
                      )
                    ),
                    i.a.createElement(
                      u.a,
                      null,
                      i.a.createElement(
                        b.a,
                        { onSubmit: this.submitHandler },
                        i.a.createElement(y.Editor, {
                          toolbarClassName: "demo-toolbar-absolute",
                          wrapperClassName: "demo-wrapper",
                          editorClassName: "demo-editor",
                          editorState: this.state.editorState,
                          onEditorStateChange: this.onEditorStateChange,
                          toolbar: {
                            options: [
                              "inline",
                              "blockType",
                              "fontSize",
                              "fontFamily",
                            ],
                            inline: {
                              options: [
                                "bold",
                                "italic",
                                "underline",
                                "strikethrough",
                                "monospace",
                              ],
                              bold: { className: "bordered-option-classname" },
                              italic: {
                                className: "bordered-option-classname",
                              },
                              underline: {
                                className: "bordered-option-classname",
                              },
                              strikethrough: {
                                className: "bordered-option-classname",
                              },
                              code: { className: "bordered-option-classname" },
                            },
                            blockType: {
                              className: "bordered-option-classname",
                            },
                            fontSize: {
                              className: "bordered-option-classname",
                            },
                            fontFamily: {
                              className: "bordered-option-classname",
                            },
                          },
                        }),
                        i.a.createElement("br", null),
                        i.a.createElement(
                          p.a,
                          { color: "primary" },
                          "Add New Policy"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.a.Component);
      a.default = k;
    },
    831: function (e, a, t) {
      "use strict";
      var o = t(44),
        n = t.n(o).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = n;
    },
    860: function (e, a, t) {},
  },
]);
//# sourceMappingURL=245.7de75812.chunk.js.map
