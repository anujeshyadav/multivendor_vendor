(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [249],
  {
    2220: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(10),
        o = a(11),
        r = a(13),
        s = a(12),
        i = a(0),
        c = a.n(i),
        l = a(821),
        d = a(819),
        m = a(820),
        u = a(195),
        p = a(824),
        b = a(836),
        h = (a(911), a(878)),
        f = a(901),
        E = a(866),
        C = a.n(E),
        N = (a(895), a(860), a(831)),
        S = a(20),
        g = a(846),
        k = a.n(g),
        y = (function (e) {
          Object(r.a)(a, e);
          var t = Object(s.a)(a);
          function a(e) {
            var o;
            return (
              Object(n.a)(this, a),
              ((o = t.call(this, e)).onEditorStateChange = function (e) {
                o.setState({
                  editorState: e,
                  description: C()(
                    Object(h.convertToRaw)(e.getCurrentContent())
                  ),
                });
              }),
              (o.submitHandler = function (e) {
                e.preventDefault(),
                  N.a
                    .post("/addTermscondition", o.state)
                    .then(function (e) {
                      console.log(e),
                        o.props.history.push(
                          "/app/termsAndCondition/tAndCList"
                        ),
                        k()("Good job!", "You clicked the button!", "success");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (o.state = {
                description: "",
                editorState: h.EditorState.createEmpty(),
              }),
              o
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    l.a,
                    null,
                    c.a.createElement(
                      d.a,
                      { className: "m-2" },
                      c.a.createElement(
                        m.a,
                        null,
                        c.a.createElement(
                          "h1",
                          { "col-sm-6": !0, className: "float-left" },
                          "Add New Term And Condition"
                        )
                      ),
                      c.a.createElement(
                        m.a,
                        null,
                        c.a.createElement(
                          u.a,
                          {
                            className: " btn btn-danger float-right",
                            onClick: function () {
                              return S.a.push(
                                "/app/termsAndCondition/tAndCList"
                              );
                            },
                          },
                          "Back"
                        )
                      )
                    ),
                    c.a.createElement(
                      p.a,
                      null,
                      c.a.createElement(
                        b.a,
                        { onSubmit: this.submitHandler },
                        c.a.createElement(f.Editor, {
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
                        c.a.createElement("br", null),
                        c.a.createElement(
                          u.a,
                          { color: "primary" },
                          "Add New T&C"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(c.a.Component);
      t.default = y;
    },
    831: function (e, t, a) {
      "use strict";
      var n = a(44),
        o = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = o;
    },
    860: function (e, t, a) {},
  },
]);
//# sourceMappingURL=249.5b4ad8d3.chunk.js.map
