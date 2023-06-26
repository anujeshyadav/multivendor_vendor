(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [241],
  {
    2240: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "AddHouseProduct", function () {
          return P;
        });
      var l = t(45),
        n = t(10),
        r = t(11),
        c = t(13),
        m = t(12),
        s = t(0),
        o = t.n(s),
        i = t(821),
        d = t(819),
        u = t(820),
        h = t(195),
        g = t(824),
        E = t(836),
        p = t(837),
        y = t(833),
        b = t(811),
        v = t(844),
        C = t(1027),
        N = t(20),
        H = t(831),
        f = t(878),
        x = t(901),
        S = (t(895), t(860), t(866)),
        k = t.n(S),
        P = (function (e) {
          Object(c.a)(t, e);
          var a = Object(m.a)(t);
          function t(e) {
            var r;
            return (
              Object(n.a)(this, t),
              ((r = a.call(this, e)).onChangeHandler = function (e) {
                r.setState({ selectedFile: e.target.files[0] }),
                  r.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (r.SizeData = function () {
                console.log("object");
              }),
              (r.changeHandler1 = function (e) {
                r.setState({ status: e.target.value });
              }),
              (r.changeHandler = function (e) {
                r.setState(Object(l.a)({}, e.target.name, e.target.value));
              }),
              (r.onEditorStateChange = function (e) {
                r.setState({
                  editorState: e,
                  desc: k()(Object(f.convertToRaw)(e.getCurrentContent())),
                });
              }),
              (r.submitHandler = function (e) {
                e.preventDefault();
                var a = new FormData();
                a.append("name", r.state.name),
                  a.append("sortorder", r.state.sortorder),
                  a.append("desc", r.state.desc),
                  a.append("status", r.state.status),
                  null !== r.state.selectedFile &&
                    a.append(
                      "brand_img",
                      r.state.selectedFile,
                      r.state.selectedName
                    ),
                  H.a
                    .post("/addbrand", a)
                    .then(function (e) {
                      console.log(e),
                        r.props.history.push(
                          "/app/freshlist/house/HouseProductList"
                        );
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (r.state = {
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
              r
            );
          }
          return (
            Object(r.a)(t, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      i.a,
                      null,
                      o.a.createElement(
                        d.a,
                        { className: "m-2" },
                        o.a.createElement(
                          u.a,
                          null,
                          o.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add Product"
                          )
                        ),
                        o.a.createElement(
                          u.a,
                          null,
                          o.a.createElement(
                            h.a,
                            {
                              className: " btn btn-danger float-right",
                              onClick: function () {
                                return N.a.push(
                                  "/app/freshlist/house/houseProductList"
                                );
                              },
                            },
                            "Back"
                          )
                        )
                      ),
                      o.a.createElement(
                        d.a,
                        null,
                        o.a.createElement(
                          u.a,
                          { md: "9" },
                          o.a.createElement(
                            g.a,
                            { className: "d-flex" },
                            o.a.createElement(
                              E.a,
                              {
                                className: "mx-2 ",
                                onSubmit: this.submitHandler,
                              },
                              o.a.createElement(
                                d.a,
                                { className: "mb-2" },
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-2" },
                                  o.a.createElement(p.a, null, " Product Name"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Product Name",
                                    name: "name",
                                    value: this.state.name,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-2" },
                                  o.a.createElement(p.a, null, "Type"),
                                  o.a.createElement(
                                    b.a,
                                    {
                                      type: "select",
                                      placeholder: "Select Type",
                                      name: "type",
                                      value: this.state.name,
                                      onChange: this.changeHandler,
                                    },
                                    o.a.createElement(
                                      "option",
                                      null,
                                      "---Select---"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "veg" },
                                      "Veg"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "nonveg" },
                                      "Non-Veg"
                                    ),
                                    o.a.createElement(
                                      "option",
                                      { value: "egg" },
                                      "Egg only"
                                    )
                                  )
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(p.a, null, "Brand"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Enter brand",
                                    name: "name",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(p.a, null, "Color"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Color",
                                    name: "name",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-2" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Size (Attribute)"
                                  ),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Enter value",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(p.a, null, "Model"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Enter Model",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(p.a, null, "GST Class"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "GST Class",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Minimum Selling Quatity"
                                  ),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Maximum Selling Quantity"
                                  ),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(p.a, null, "Reward Points"),
                                  o.a.createElement(y.a, {
                                    type: "number",
                                    placeholder: "",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Upload Product Images"
                                  ),
                                  o.a.createElement(b.a, {
                                    type: "file",
                                    placeholder: "",
                                    name: "",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Upload Product Images"
                                  ),
                                  o.a.createElement(b.a, {
                                    type: "file",
                                    placeholder: "",
                                    name: "",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Upload Product Images"
                                  ),
                                  o.a.createElement(b.a, {
                                    type: "file",
                                    placeholder: "",
                                    name: "",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "6", md: "6", className: "mb-1" },
                                  o.a.createElement(p.a, null, "Video Url"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                )
                              ),
                              o.a.createElement(
                                d.a,
                                { className: "my-1" },
                                o.a.createElement(
                                  u.a,
                                  { lg: "12", md: "12" },
                                  o.a.createElement(
                                    "h1",
                                    { "col-sm-6": !0, className: "float-left" },
                                    "SEO"
                                  )
                                )
                              ),
                              o.a.createElement(
                                d.a,
                                null,
                                o.a.createElement(
                                  u.a,
                                  { lg: "4", md: "4", className: "mb-1" },
                                  o.a.createElement(p.a, null, "MetaData"),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "MetaData",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "4", md: "4", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "MetaData Description "
                                  ),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Description",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "4", md: "4", className: "mb-1" },
                                  o.a.createElement(
                                    p.a,
                                    null,
                                    "Product Search Tags"
                                  ),
                                  o.a.createElement(y.a, {
                                    type: "text",
                                    placeholder: "Product Search Tags",
                                    name: "type",
                                    value: this.state.sortorder,
                                    onChange: this.changeHandler,
                                  })
                                )
                              ),
                              o.a.createElement(
                                d.a,
                                { className: "" },
                                o.a.createElement(
                                  u.a,
                                  {
                                    lg: "12",
                                    md: "12",
                                    className: "mb-2 mt-1",
                                  },
                                  o.a.createElement(
                                    v.a,
                                    null,
                                    o.a.createElement(
                                      p.a,
                                      { className: "mb-1" },
                                      o.a.createElement("h3", null, "Price")
                                    ),
                                    o.a.createElement(
                                      "div",
                                      null,
                                      o.a.createElement("input", {
                                        style: { marginRight: "3px" },
                                        type: "radio",
                                        name: "status",
                                        value: "MRP",
                                      }),
                                      o.a.createElement(
                                        "span",
                                        { style: { marginRight: "80px" } },
                                        "MRP"
                                      ),
                                      "" === this.state.buying_price1
                                        ? o.a.createElement(
                                            d.a,
                                            { className: "mb-2 mt-1" },
                                            o.a.createElement(
                                              u.a,
                                              { lg: "6", md: "6" },
                                              o.a.createElement(
                                                v.a,
                                                null,
                                                o.a.createElement(
                                                  p.a,
                                                  null,
                                                  "Buying Price"
                                                ),
                                                o.a.createElement(y.a, {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter title Here",
                                                  name: "buying_price",
                                                  value:
                                                    this.state.buying_price,
                                                  onChange: this.changeHandler,
                                                })
                                              )
                                            ),
                                            o.a.createElement(
                                              u.a,
                                              { lg: "6", md: "6" },
                                              o.a.createElement(
                                                v.a,
                                                null,
                                                o.a.createElement(
                                                  p.a,
                                                  null,
                                                  "M Margin (%)"
                                                ),
                                                o.a.createElement(y.a, {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter title Here",
                                                  name: "m_margin",
                                                  value: this.state.m_margin,
                                                  onChange: this.changeHandler,
                                                })
                                              )
                                            )
                                          )
                                        : null,
                                      o.a.createElement("input", {
                                        style: { marginRight: "3px" },
                                        type: "radio",
                                        name: "status",
                                        value: "NO MRP",
                                      }),
                                      o.a.createElement(
                                        "span",
                                        { style: { marginRight: "3px" } },
                                        "NO MRP"
                                      ),
                                      "" === this.state.buying_price
                                        ? o.a.createElement(
                                            d.a,
                                            { className: "mb-2 mt-1" },
                                            o.a.createElement(
                                              u.a,
                                              { lg: "4", md: "4" },
                                              o.a.createElement(
                                                v.a,
                                                null,
                                                o.a.createElement(
                                                  p.a,
                                                  null,
                                                  "Buying Price"
                                                ),
                                                o.a.createElement(y.a, {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter title Here",
                                                  name: "buying_price1",
                                                  value:
                                                    this.state.buying_price,
                                                  onChange: this.changeHandler,
                                                })
                                              )
                                            ),
                                            o.a.createElement(
                                              u.a,
                                              { lg: "4", md: "4" },
                                              o.a.createElement(
                                                v.a,
                                                null,
                                                o.a.createElement(
                                                  p.a,
                                                  null,
                                                  "M Margin (%)"
                                                ),
                                                o.a.createElement(y.a, {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter title Here",
                                                  name: "m_margin",
                                                  value: this.state.m_margin,
                                                  onChange: this.changeHandler,
                                                })
                                              )
                                            ),
                                            o.a.createElement(
                                              u.a,
                                              { lg: "4", md: "4" },
                                              o.a.createElement(
                                                v.a,
                                                null,
                                                o.a.createElement(
                                                  p.a,
                                                  null,
                                                  "Selling Price"
                                                ),
                                                o.a.createElement(y.a, {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter title Here",
                                                  name: "selling_price",
                                                  value:
                                                    this.state.selling_price,
                                                  onChange: this.changeHandler,
                                                })
                                              )
                                            )
                                          )
                                        : null
                                    )
                                  )
                                ),
                                o.a.createElement(
                                  u.a,
                                  { lg: "12", md: "12" },
                                  o.a.createElement(
                                    v.a,
                                    null,
                                    o.a.createElement(p.a, null, "Description"),
                                    o.a.createElement(x.Editor, {
                                      toolbarClassName: "demo-toolbar-absolute",
                                      wrapperClassName: "demo-wrapper",
                                      editorClassName: "demo-editor",
                                      editorState: this.state.editorState,
                                      onEditorStateChange:
                                        this.onEditorStateChange,
                                      toolbar: {
                                        image: {
                                          uploadCallback:
                                            this.uploadImageCallBack,
                                          previewImage: !0,
                                          alt: { present: !1, mandatory: !1 },
                                          uploadEnabled: !0,
                                          inputAccept:
                                            "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                                        },
                                      },
                                    })
                                  )
                                )
                              ),
                              o.a.createElement(
                                d.a,
                                null,
                                o.a.createElement(
                                  h.a.Ripple,
                                  {
                                    color: "primary",
                                    type: "submit",
                                    className: "mr-1 mb-1",
                                  },
                                  "Add"
                                )
                              )
                            )
                          )
                        ),
                        o.a.createElement(
                          u.a,
                          { md: "3", className: "mt-3" },
                          o.a.createElement(
                            v.a,
                            { check: !0, inline: !0 },
                            o.a.createElement(
                              C.a,
                              { type: "unstyled" },
                              o.a.createElement(
                                "li",
                                null,
                                o.a.createElement(y.a, { type: "checkbox" }),
                                o.a.createElement(
                                  p.a,
                                  { check: !0 },
                                  "Category"
                                ),
                                o.a.createElement(
                                  "ul",
                                  null,
                                  o.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    o.a.createElement(y.a, {
                                      type: "checkbox",
                                    }),
                                    o.a.createElement(
                                      p.a,
                                      { check: !0 },
                                      " Sub Category"
                                    )
                                  ),
                                  o.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    o.a.createElement(y.a, {
                                      type: "checkbox",
                                    }),
                                    o.a.createElement(
                                      p.a,
                                      { check: !0 },
                                      " Sub Category"
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          o.a.createElement(
                            v.a,
                            { check: !0, inline: !0 },
                            o.a.createElement(
                              C.a,
                              { type: "unstyled" },
                              o.a.createElement(
                                "li",
                                null,
                                o.a.createElement(y.a, { type: "checkbox" }),
                                o.a.createElement(
                                  p.a,
                                  { check: !0 },
                                  "Category"
                                ),
                                o.a.createElement(
                                  "ul",
                                  null,
                                  o.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    o.a.createElement(y.a, {
                                      type: "checkbox",
                                    }),
                                    o.a.createElement(
                                      p.a,
                                      { check: !0 },
                                      " Sub Category"
                                    )
                                  ),
                                  o.a.createElement(
                                    "li",
                                    { style: { listStyleType: "none" } },
                                    o.a.createElement(y.a, {
                                      type: "checkbox",
                                    }),
                                    o.a.createElement(
                                      p.a,
                                      { check: !0 },
                                      " Sub Category"
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
        })(s.Component);
      a.default = P;
    },
    831: function (e, a, t) {
      "use strict";
      var l = t(44),
        n = t.n(l).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = n;
    },
    860: function (e, a, t) {},
  },
]);
//# sourceMappingURL=241.ac853208.chunk.js.map
