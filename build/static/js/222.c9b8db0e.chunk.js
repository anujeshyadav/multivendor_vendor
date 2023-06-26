(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [222],
  {
    2292: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(10),
        n = t(11),
        i = t(13),
        l = t(12),
        c = t(0),
        s = t.n(c),
        d = t(819),
        o = t(820),
        m = t(821),
        u = t(824),
        f = t(817),
        p = t(594),
        g = t(590),
        h = t(180),
        w = t(833),
        E = t(195),
        v = (t(831), t(102)),
        b = t(838),
        N = t(320),
        k = t(452),
        y = t(273),
        R = t(20),
        S =
          (t(834),
          t(832),
          (function (e) {
            Object(i.a)(t, e);
            var a = Object(l.a)(t);
            function t() {
              var e;
              Object(r.a)(this, t);
              for (
                var n = arguments.length, i = new Array(n), l = 0;
                l < n;
                l++
              )
                i[l] = arguments[l];
              return (
                ((e = a.call.apply(a, [this].concat(i))).state = {
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
                      width: 100,
                      filter: !0,
                    },
                    {
                      headerName: "Logo ",
                      field: "shoplogo_img",
                      filter: !0,
                      width: 120,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          s.a.createElement("img", {
                            className: "rounded-circle",
                            src: e.data.shoplogo_img,
                            alt: "user",
                            height: "45",
                            width: "45",
                          })
                        );
                      },
                    },
                    {
                      headerName: "Image",
                      field: "storeImg",
                      filter: !1,
                      width: 200,
                      setColumnVisible: !1,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          e.data.storeImg.map(function (e) {
                            return s.a.createElement("img", {
                              className: " rounded-circle border-black m-0",
                              src: e,
                              alt: "user avatar",
                              height: "40",
                              width: "40",
                            });
                          })
                        );
                      },
                    },
                    {
                      headerName: "Store Name ",
                      field: "store_name\t",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.store_name)
                        );
                      },
                    },
                    {
                      headerName: "Store Description",
                      field: " store_desc",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.store_desc)
                        );
                      },
                    },
                    {
                      headerName: "Website",
                      field: "websiteUrl\t",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.websiteUrl)
                        );
                      },
                    },
                    {
                      headerName: "Email",
                      field: "store_email\t",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.store_email)
                        );
                      },
                    },
                    {
                      headerName: "Phone No",
                      field: "altphone_no\t",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement(
                            "span",
                            null,
                            e.data.phone_no,
                            ",",
                            e.data.altphone_no,
                            ","
                          )
                        );
                      },
                    },
                    {
                      headerName: "Open Days",
                      field: "day",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.day)
                        );
                      },
                    },
                    {
                      headerName: "Time",
                      field: "openingTym-closingTym",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement(
                            "span",
                            null,
                            e.data.openingTym,
                            "-",
                            e.data.closingTym
                          )
                        );
                      },
                    },
                    {
                      headerName: "Address",
                      field: "address_line1,address_line2",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement(
                            "span",
                            null,
                            e.data.address_line1,
                            " ",
                            e.data.address_line2
                          )
                        );
                      },
                    },
                    {
                      headerName: "LandMark",
                      field: "landmark",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.landmark)
                        );
                      },
                    },
                    {
                      headerName: "City",
                      field: "city",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.city)
                        );
                      },
                    },
                    {
                      headerName: "State",
                      field: "state",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.state)
                        );
                      },
                    },
                    {
                      headerName: "PinCode",
                      field: "pincode",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.pincode)
                        );
                      },
                    },
                    {
                      headerName: "GST No.",
                      field: "gst_no",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.gst_no)
                        );
                      },
                    },
                    {
                      headerName: "Business Type",
                      field: "business_type",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.business_type)
                        );
                      },
                    },
                    {
                      headerName: "PAN No.",
                      field: "pan_no",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.pan_no)
                        );
                      },
                    },
                    {
                      headerName: "Comapny PAN no.",
                      field: "company_panno",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.company_panno)
                        );
                      },
                    },
                    {
                      headerName: "Address Proof",
                      field: "address_proof",
                      filter: !0,
                      width: 200,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("span", null, e.data.address_proof)
                        );
                      },
                    },
                    {
                      headerName: "GST Image",
                      field: "gstImg",
                      filter: !1,
                      width: 200,
                      setColumnVisible: !1,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          e.data.gstImg.map(function (e) {
                            return s.a.createElement("img", {
                              className: " rounded-circle border-black m-0",
                              src: e,
                              alt: "user avatar",
                              height: "40",
                              width: "40",
                            });
                          })
                        );
                      },
                    },
                    {
                      headerName: "PAN Img",
                      field: "storepan_img",
                      filter: !1,
                      width: 200,
                      setColumnVisible: !1,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          e.data.storepan_img.map(function (e) {
                            return s.a.createElement("img", {
                              className: " rounded-circle border-black m-0",
                              src: e,
                              alt: "user avatar",
                              height: "40",
                              width: "40",
                            });
                          })
                        );
                      },
                    },
                    {
                      headerName: "Trade Licence",
                      field: "tradelicence_img",
                      filter: !1,
                      width: 200,
                      setColumnVisible: !1,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          e.data.tradelicence_img.map(function (e) {
                            return s.a.createElement("img", {
                              className: " rounded-circle border-black m-0",
                              src: e,
                              alt: "user avatar",
                              height: "40",
                              width: "40",
                            });
                          })
                        );
                      },
                    },
                    {
                      headerName: "Comp.PAN Img",
                      field: "companypan_img",
                      filter: !1,
                      width: 200,
                      setColumnVisible: !1,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          e.data.companypan_img.map(function (e) {
                            return s.a.createElement("img", {
                              className: " rounded-circle border-black m-0",
                              src: e,
                              alt: "user avatar",
                              height: "40",
                              width: "40",
                            });
                          })
                        );
                      },
                    },
                    {
                      headerName: "Address Proof",
                      field: "address_proof_img",
                      filter: !1,
                      width: 200,
                      setColumnVisible: !1,
                      cellRendererFramework: function (e) {
                        return s.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex align-items-center cursor-pointer",
                          },
                          e.data.address_proof_img.map(function (e) {
                            return s.a.createElement("img", {
                              className: " rounded-circle border-black m-0",
                              src: e,
                              alt: "user avatar",
                              height: "40",
                              width: "40",
                            });
                          })
                        );
                      },
                    },
                    {
                      headerName: "Status",
                      field: "status",
                      filter: !0,
                      width: 150,
                      cellRendererFramework: function (e) {
                        return "Active" === e.value
                          ? s.a.createElement(
                              "div",
                              { className: "badge badge-pill badge-success" },
                              e.data.status
                            )
                          : "Inactive" === e.value
                          ? s.a.createElement(
                              "div",
                              { className: "badge badge-pill badge-warning" },
                              e.data.status
                            )
                          : null;
                      },
                    },
                    {
                      headerName: "Actions",
                      field: "transactions",
                      width: 150,
                      cellRendererFramework: function (a) {
                        return s.a.createElement(
                          "div",
                          { className: "actions cursor-pointer" },
                          s.a.createElement(N.a, {
                            className: "mr-50",
                            size: 20,
                            onClick: function () {
                              return R.a.push(
                                "/app/store/stores/viewStore/".concat(
                                  a.data._id
                                )
                              );
                            },
                          }),
                          s.a.createElement(k.a, {
                            size: 20,
                            onClick: function () {
                              var t = e.gridApi.getSelectedRows();
                              e.runthisfunction(a.data._id),
                                e.gridApi.updateRowData({ remove: t });
                            },
                          })
                        );
                      },
                    },
                  ],
                }),
                (e.onGridReady = function (a) {
                  (e.gridApi = a.api),
                    (e.gridColumnApi = a.columnApi),
                    e.setState({
                      currenPageSize: e.gridApi.paginationGetCurrentPage() + 1,
                      getPageSize: e.gridApi.paginationGetPageSize(),
                      totalPages: e.gridApi.paginationGetTotalPages(),
                    });
                }),
                (e.updateSearchQuery = function (a) {
                  e.gridApi.setQuickFilter(a);
                }),
                (e.filterSize = function (a) {
                  e.gridApi &&
                    (e.gridApi.paginationSetPageSize(Number(a)),
                    e.setState({ currenPageSize: a, getPageSize: a }));
                }),
                e
              );
            }
            return (
              Object(n.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      a = this.state,
                      t = a.rowData,
                      r = a.columnDefs,
                      n = a.defaultColDef;
                    return (
                      console.log(t),
                      s.a.createElement(
                        d.a,
                        { className: "app-user-list" },
                        s.a.createElement(o.a, { sm: "12" }),
                        s.a.createElement(
                          o.a,
                          { sm: "12" },
                          s.a.createElement(
                            m.a,
                            null,
                            s.a.createElement(
                              d.a,
                              { className: "m-2" },
                              s.a.createElement(
                                o.a,
                                null,
                                s.a.createElement(
                                  "h1",
                                  { sm: "6", className: "float-left" },
                                  "Store List"
                                )
                              )
                            ),
                            s.a.createElement(
                              u.a,
                              null,
                              null === this.state.rowData
                                ? null
                                : s.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "ag-theme-material w-100 my-2 ag-grid-table",
                                    },
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex flex-wrap justify-content-between align-items-center",
                                      },
                                      s.a.createElement(
                                        "div",
                                        { className: "mb-1" },
                                        s.a.createElement(
                                          f.a,
                                          { className: "p-1 ag-dropdown" },
                                          s.a.createElement(
                                            p.a,
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
                                            s.a.createElement(y.a, {
                                              className: "ml-50",
                                              size: 15,
                                            })
                                          ),
                                          s.a.createElement(
                                            g.a,
                                            { right: !0 },
                                            s.a.createElement(
                                              h.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(20);
                                                },
                                              },
                                              "20"
                                            ),
                                            s.a.createElement(
                                              h.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(50);
                                                },
                                              },
                                              "50"
                                            ),
                                            s.a.createElement(
                                              h.a,
                                              {
                                                tag: "div",
                                                onClick: function () {
                                                  return e.filterSize(100);
                                                },
                                              },
                                              "100"
                                            ),
                                            s.a.createElement(
                                              h.a,
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
                                      s.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "d-flex flex-wrap justify-content-between mb-1",
                                        },
                                        s.a.createElement(
                                          "div",
                                          { className: "table-input mr-1" },
                                          s.a.createElement(w.a, {
                                            placeholder: "search...",
                                            onChange: function (a) {
                                              return e.updateSearchQuery(
                                                a.target.value
                                              );
                                            },
                                            value: this.state.value,
                                          })
                                        ),
                                        s.a.createElement(
                                          "div",
                                          { className: "export-btn" },
                                          s.a.createElement(
                                            E.a.Ripple,
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
                                    s.a.createElement(
                                      v.a.Consumer,
                                      null,
                                      function (a) {
                                        return s.a.createElement(
                                          b.AgGridReact,
                                          {
                                            gridOptions: {},
                                            rowSelection: "multiple",
                                            defaultColDef: n,
                                            columnDefs: r,
                                            rowData: t,
                                            onGridReady: e.onGridReady,
                                            colResizeDefault: "shift",
                                            animateRows: !0,
                                            floatingFilter: !1,
                                            pagination: !0,
                                            paginationPageSize:
                                              e.state.paginationPageSize,
                                            pivotPanelShow: "always",
                                            enableRtl:
                                              "rtl" === a.state.direction,
                                          }
                                        );
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
              t
            );
          })(s.a.Component));
      a.default = S;
    },
    831: function (e, a, t) {
      "use strict";
      var r = t(44),
        n = t.n(r).a.create({ baseURL: "http://35.154.225.110:5000" });
      a.a = n;
    },
    832: function (e, a, t) {},
    833: function (e, a, t) {
      "use strict";
      var r = t(6),
        n = t(7),
        i = t(16),
        l = t(18),
        c = t(0),
        s = t.n(c),
        d = t(1),
        o = t.n(d),
        m = t(5),
        u = t.n(m),
        f = t(4),
        p = [
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
          children: o.a.node,
          type: o.a.string,
          size: o.a.oneOfType([o.a.number, o.a.string]),
          bsSize: o.a.string,
          valid: o.a.bool,
          invalid: o.a.bool,
          tag: f.tagPropType,
          innerRef: o.a.oneOfType([o.a.object, o.a.func, o.a.string]),
          plaintext: o.a.bool,
          addon: o.a.bool,
          className: o.a.string,
          cssModule: o.a.object,
        },
        h = (function (e) {
          function a(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).getRef = t.getRef.bind(
                Object(i.a)(t)
              )),
              (t.focus = t.focus.bind(Object(i.a)(t))),
              t
            );
          }
          Object(l.a)(a, e);
          var t = a.prototype;
          return (
            (t.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (t.focus = function () {
              this.ref && this.ref.focus();
            }),
            (t.render = function () {
              var e = this.props,
                a = e.className,
                t = e.cssModule,
                i = e.type,
                l = e.bsSize,
                c = e.valid,
                d = e.invalid,
                o = e.tag,
                m = e.addon,
                g = e.plaintext,
                h = e.innerRef,
                w = Object(n.a)(e, p),
                E = ["radio", "checkbox"].indexOf(i) > -1,
                v = new RegExp("\\D", "g"),
                b = o || ("select" === i || "textarea" === i ? i : "input"),
                N = "form-control";
              g
                ? ((N += "-plaintext"), (b = o || "input"))
                : "file" === i
                ? (N += "-file")
                : "range" === i
                ? (N += "-range")
                : E && (N = m ? null : "form-check-input"),
                w.size &&
                  v.test(w.size) &&
                  (Object(f.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (l = w.size),
                  delete w.size);
              var k = Object(f.mapToCssModules)(
                u()(
                  a,
                  d && "is-invalid",
                  c && "is-valid",
                  !!l && "form-control-" + l,
                  N
                ),
                t
              );
              return (
                ("input" === b || (o && "function" === typeof o)) &&
                  (w.type = i),
                w.children &&
                  !g &&
                  "select" !== i &&
                  "string" === typeof b &&
                  "select" !== b &&
                  (Object(f.warnOnce)(
                    'Input with a type of "' +
                      i +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete w.children),
                s.a.createElement(
                  b,
                  Object(r.a)({}, w, {
                    ref: h,
                    className: k,
                    "aria-invalid": d,
                  })
                )
              );
            }),
            a
          );
        })(s.a.Component);
      (h.propTypes = g), (h.defaultProps = { type: "text" }), (a.a = h);
    },
  },
]);
//# sourceMappingURL=222.c9b8db0e.chunk.js.map
