import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
class LanguagesList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "SL",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 200,
        filter: true,
      },
      {
        headerName: "Id",
        field: "_id",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data._id}</span>
            </div>
          );
        },
      },
      {
        headerName: "Name",
        field: "language_name",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.language_name}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Code",
      //   field: "code",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.code}</span>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "Status",
      //   field: "status",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.shelf_life}</span>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Default Status",
        field: "status",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.status}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.status}
            </div>
          ) : null;
        },
      },

      // {
      //   headerName: "Action",
      //   field: "action",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.action}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Actions",
      //   field: "sortorder",
      //   field: "transactions",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Eye
      //           className="mr-50"
      //           size="25px"
      //           color="green"
      //           onClick={() =>
      //             history.push(`/app/customer/viewCustomer/${params.data._id}`)
      //           }
      //         />
      //         <Edit
      //           className="mr-50"
      //           size="25px"
      //           color="blue"
      //           onClick={() =>
      //             history.push("/app/freshlist/category/editCategory")
      //           }
      //         />
      //         <Trash2
      //           className="mr-50"
      //           size="25px"
      //           color="red"
      //           onClick={() => {
      //             let selectedData = this.gridApi.getSelectedRows();
      //             this.runthisfunction(params.data._id);
      //             this.gridApi.updateRowData({ remove: selectedData });
      //           }}
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };
  async componentDidMount() {
    await axiosConfig.get("/admin/viewone_language").then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }
  async componentDidMount() {
    await axiosConfig.get("/admin/language_list").then((response) => {
      const rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/admin/del_language/${id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Language Table
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/freshlist/language/AddLanguage")
                    }
                  >
                    Add Language
                  </Button>
                </Col>
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    );
  }
}
export default LanguagesList;
