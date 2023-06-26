(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [155],
  {
    2243: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(10),
        i = a(11),
        r = a(13),
        l = a(12),
        s = a(0),
        o = a.n(s),
        c = a(819),
        u = a(820),
        d = a(821),
        f = a(195),
        p = a(824),
        m = a(817),
        g = a(594),
        h = a(590),
        b = a(180),
        v = a(833),
        z = (a(831), a(102)),
        E = a(838),
        S = a(317),
        w = a(452),
        N = a(273),
        y = a(20),
        P = (a(834), a(832), a(970)),
        R = a.n(P),
        x = (function (e) {
          Object(r.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
              r[l] = arguments[l];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                rowData: [],
                paginationPageSize: 20,
                currenPageSize: "",
                getPageSize: "",
                defaultColDef: {
                  sortable: !0,
                  editable: !0,
                  resizable: !0,
                  suppressMenu: !0,
                },
                columnDefs: [
                  {
                    headerName: "S.No",
                    valueGetter: "node.rowIndex + 1",
                    field: "node.rowIndex + 1",
                    width: 150,
                    filter: !0,
                  },
                  {
                    headerName: "Title",
                    field: "title",
                    width: 400,
                    cellRendererFramework: function (e) {
                      return o.a.createElement(
                        "div",
                        {
                          className: "d-flex align-items-center cursor-pointer",
                        },
                        o.a.createElement("span", null, e.data.title)
                      );
                    },
                  },
                  {
                    headerName: "Description",
                    field: "banner_title",
                    filter: !0,
                    width: 200,
                    cellRendererFramework: function (e) {
                      return o.a.createElement(
                        "div",
                        {
                          className: "d-flex align-items-center cursor-pointer",
                        },
                        o.a.createElement("span", null, R()(e.data.desc))
                      );
                    },
                  },
                  {
                    headerName: "Actions",
                    field: "sortorder",
                    width: 150,
                    cellRendererFramework: function (t) {
                      return o.a.createElement(
                        "div",
                        { className: "actions cursor-pointer" },
                        o.a.createElement(S.a, {
                          className: "mr-50",
                          size: 20,
                          onClick: function () {
                            return y.a.push(
                              "/app/freshlist/notif/editNotification"
                            );
                          },
                        }),
                        o.a.createElement(w.a, {
                          size: 20,
                          onClick: function () {
                            var a = e.gridApi.getSelectedRows();
                            e.runthisfunction(t.data._id),
                              e.gridApi.updateRowData({ remove: a });
                          },
                        })
                      );
                    },
                  },
                ],
              }),
              (e.onGridReady = function (t) {
                (e.gridApi = t.api),
                  (e.gridColumnApi = t.columnApi),
                  e.setState({
                    currenPageSize: e.gridApi.paginationGetCurrentPage() + 1,
                    getPageSize: e.gridApi.paginationGetPageSize(),
                    totalPages: e.gridApi.paginationGetTotalPages(),
                  });
              }),
              (e.updateSearchQuery = function (t) {
                e.gridApi.setQuickFilter(t);
              }),
              (e.filterSize = function (t) {
                e.gridApi &&
                  (e.gridApi.paginationSetPageSize(Number(t)),
                  e.setState({ currenPageSize: t, getPageSize: t }));
              }),
              e
            );
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.rowData,
                    n = t.columnDefs,
                    i = t.defaultColDef;
                  return (
                    console.log(a),
                    o.a.createElement(
                      c.a,
                      { className: "app-user-list" },
                      o.a.createElement(u.a, { sm: "12" }),
                      o.a.createElement(
                        u.a,
                        { sm: "12" },
                        o.a.createElement(
                          d.a,
                          null,
                          o.a.createElement(
                            c.a,
                            { className: "m-2" },
                            o.a.createElement(
                              u.a,
                              null,
                              o.a.createElement(
                                "h1",
                                { sm: "6", className: "float-left" },
                                "Notification List"
                              )
                            ),
                            o.a.createElement(
                              u.a,
                              null,
                              o.a.createElement(
                                f.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return y.a.push(
                                      "/app/freshlist/notif/addNotification"
                                    );
                                  },
                                },
                                "Add Notification"
                              )
                            )
                          ),
                          o.a.createElement(
                            p.a,
                            null,
                            null === this.state.rowData
                              ? null
                              : o.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "ag-theme-material w-100 my-2 ag-grid-table",
                                  },
                                  o.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "d-flex flex-wrap justify-content-between align-items-center",
                                    },
                                    o.a.createElement(
                                      "div",
                                      { className: "mb-1" },
                                      o.a.createElement(
                                        m.a,
                                        { className: "p-1 ag-dropdown" },
                                        o.a.createElement(
                                          g.a,
                                          { tag: "div" },
                                          this.gridApi
                                            ? this.state.currenPageSize
                                            : "" * this.state.getPageSize -
                                                (this.state.getPageSize - 1),
                                          " ",
                                          "-",
                                          " ",
                                          this.state.rowData.length -
                                            this.state.currenPageSize *
                                              this.state.getPageSize >
                                            0
                                            ? this.state.currenPageSize *
                                                this.state.getPageSize
                                            : this.state.rowData.length,
                                          " ",
                                          "of ",
                                          this.state.rowData.length,
                                          o.a.createElement(N.a, {
                                            className: "ml-50",
                                            size: 15,
                                          })
                                        ),
                                        o.a.createElement(
                                          h.a,
                                          { right: !0 },
                                          o.a.createElement(
                                            b.a,
                                            {
                                              tag: "div",
                                              onClick: function () {
                                                return e.filterSize(20);
                                              },
                                            },
                                            "20"
                                          ),
                                          o.a.createElement(
                                            b.a,
                                            {
                                              tag: "div",
                                              onClick: function () {
                                                return e.filterSize(50);
                                              },
                                            },
                                            "50"
                                          ),
                                          o.a.createElement(
                                            b.a,
                                            {
                                              tag: "div",
                                              onClick: function () {
                                                return e.filterSize(100);
                                              },
                                            },
                                            "100"
                                          ),
                                          o.a.createElement(
                                            b.a,
                                            {
                                              tag: "div",
                                              onClick: function () {
                                                return e.filterSize(134);
                                              },
                                            },
                                            "134"
                                          )
                                        )
                                      )
                                    ),
                                    o.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex flex-wrap justify-content-between mb-1",
                                      },
                                      o.a.createElement(
                                        "div",
                                        { className: "table-input mr-1" },
                                        o.a.createElement(v.a, {
                                          placeholder: "search...",
                                          onChange: function (t) {
                                            return e.updateSearchQuery(
                                              t.target.value
                                            );
                                          },
                                          value: this.state.value,
                                        })
                                      ),
                                      o.a.createElement(
                                        "div",
                                        { className: "export-btn" },
                                        o.a.createElement(
                                          f.a.Ripple,
                                          {
                                            color: "primary",
                                            onClick: function () {
                                              return e.gridApi.exportDataAsCsv();
                                            },
                                          },
                                          "Export as CSV"
                                        )
                                      )
                                    )
                                  ),
                                  o.a.createElement(
                                    z.a.Consumer,
                                    null,
                                    function (t) {
                                      return o.a.createElement(E.AgGridReact, {
                                        gridOptions: {},
                                        rowSelection: "multiple",
                                        defaultColDef: i,
                                        columnDefs: n,
                                        rowData: a,
                                        onGridReady: e.onGridReady,
                                        colResizeDefault: "shift",
                                        animateRows: !0,
                                        floatingFilter: !1,
                                        pagination: !0,
                                        paginationPageSize:
                                          e.state.paginationPageSize,
                                        pivotPanelShow: "always",
                                        enableRtl: "rtl" === t.state.direction,
                                      });
                                    }
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
            a
          );
        })(o.a.Component);
      t.default = x;
    },
    831: function (e, t, a) {
      "use strict";
      var n = a(44),
        i = a.n(n).a.create({ baseURL: "http://35.154.225.110:5000" });
      t.a = i;
    },
    832: function (e, t, a) {},
    833: function (e, t, a) {
      "use strict";
      var n = a(6),
        i = a(7),
        r = a(16),
        l = a(18),
        s = a(0),
        o = a.n(s),
        c = a(1),
        u = a.n(c),
        d = a(5),
        f = a.n(d),
        p = a(4),
        m = [
          "className",
          "cssModule",
          "type",
          "bsSize",
          "valid",
          "invalid",
          "tag",
          "addon",
          "plaintext",
          "innerRef",
        ],
        g = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: p.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        h = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(r.a)(a)
              )),
              (a.focus = a.focus.bind(Object(r.a)(a))),
              a
            );
          }
          Object(l.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.focus = function () {
              this.ref && this.ref.focus();
            }),
            (a.render = function () {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                r = e.type,
                l = e.bsSize,
                s = e.valid,
                c = e.invalid,
                u = e.tag,
                d = e.addon,
                g = e.plaintext,
                h = e.innerRef,
                b = Object(i.a)(e, m),
                v = ["radio", "checkbox"].indexOf(r) > -1,
                z = new RegExp("\\D", "g"),
                E = u || ("select" === r || "textarea" === r ? r : "input"),
                S = "form-control";
              g
                ? ((S += "-plaintext"), (E = u || "input"))
                : "file" === r
                ? (S += "-file")
                : "range" === r
                ? (S += "-range")
                : v && (S = d ? null : "form-check-input"),
                b.size &&
                  z.test(b.size) &&
                  (Object(p.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = b.size),
                  delete b.size);
              var w = Object(p.mapToCssModules)(
                f()(
                  t,
                  c && "is-invalid",
                  s && "is-valid",
                  !!l && "form-control-" + l,
                  S
                ),
                a
              );
              return (
                ("input" === E || (u && "function" === typeof u)) &&
                  (b.type = r),
                b.children &&
                  !g &&
                  "select" !== r &&
                  "string" === typeof E &&
                  "select" !== E &&
                  (Object(p.warnOnce)(
                    'Input with a type of "' +
                      r +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete b.children),
                o.a.createElement(
                  E,
                  Object(n.a)({}, b, {
                    ref: h,
                    className: w,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            t
          );
        })(o.a.Component);
      (h.propTypes = g), (h.defaultProps = { type: "text" }), (t.a = h);
    },
    971: function (e, t) {},
  },
]);
//# sourceMappingURL=155.8525d768.chunk.js.map
