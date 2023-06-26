// import React from "react";
// import {
//   Card,
//   CardBody,
//   Input,
//   Row,
//   Col,
//   Label,
//   CustomInput,
//   Button,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
// } from "reactstrap";
// // import axiosConfig from "../../../axiosConfig";
// import axios from "axios";
// import { ContextLayout } from "../../../../utility/context/Layout";
// import { AgGridReact } from "ag-grid-react";
// import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
// import { history } from "../../../../history";
// import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import "../../../../assets/scss/pages/users.scss";
// import { Route, Link } from "react-router-dom";

// class CreateBatch extends React.Component {
//   state = {
//     rowData: [],
//     paginationPageSize: 20,
//     currenPageSize: "",
//     getPageSize: "",
//     defaultColDef: {
//       sortable: true,
//       editable: true,
//       resizable: true,
//       suppressMenu: true,
//     },
//     columnDefs: [
//       {
//         headerName: "S.No",
//         valueGetter: "node.rowIndex + 1",
//         field: "node.rowIndex + 1",
//         width: 150,
//         filter: true,
//       },

//       {
//         headerName: "Batch Number",
//         field: "batch_num",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>{params.data.batch_num}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Product Name",
//         field: "product_name",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <CustomInput
//               type="select"
//               placeholder="Select Type"
//               name="type"
//               value={this.state.name}
//               onChange={this.changeHandler}
//             >
//               <option>---Select---</option>
//               <option value="veg">{params.data.product_name}</option>
//               <option value="nonveg">{params.data.product_name}</option>
//               <option value="egg">{params.data.product_name}</option>
//             </CustomInput>
//           );
//         },
//       },

//       {
//         headerName: "Quantity",
//         field: "quantity",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>{params.data.quantity}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Actions",
//         field: "sortorder",
//         field: "transactions",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="actions cursor-pointer">
//               <Eye
//                 className="mr-50"
//                 size="25px"
//                 color="green"
//                 onClick={() =>
//                   history.push(
//                     `/app/freshlist/house/viewHouseProduct/${params.data._id}`
//                   )
//                 }
//               />
//               <Edit
//                 className="mr-50"
//                 size="25px"
//                 color="blue"
//                 onClick={() =>
//                   history.push("/app/freshlist/house/editHouseProduct")
//                 }
//               />
//               <Trash2
//                 className="mr-50"
//                 size="25px"
//                 color="red"
//                 onClick={() => {
//                   let selectedData = this.gridApi.getSelectedRows();
//                   this.runthisfunction(params.data._id);
//                   this.gridApi.updateRowData({ remove: selectedData });
//                 }}
//               />
//             </div>
//           );
//         },
//       },
//     ],
//   };

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;
//     this.setState({
//       currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//       getPageSize: this.gridApi.paginationGetPageSize(),
//       totalPages: this.gridApi.paginationGetTotalPages(),
//     });
//   };
//   updateSearchQuery = (val) => {
//     this.gridApi.setQuickFilter(val);
//   };
//   filterSize = (val) => {
//     if (this.gridApi) {
//       this.gridApi.paginationSetPageSize(Number(val));
//       this.setState({
//         currenPageSize: val,
//         getPageSize: val,
//       });
//     }
//   };
//   render() {
//     const { rowData, columnDefs, defaultColDef } = this.state;
//     return (
//       console.log(rowData),
//       (
//         <Row className="app-user-list">
//           <Col sm="12"></Col>
//           <Col sm="12">
//             <Card>
//               <Row className="m-2">
//                 <Col>
//                   <h1 sm="6" className="float-left">
//                     Create Batch
//                   </h1>
//                 </Col>
//                 <Col>
//                   <Route
//                     render={({ history }) => (
//                       <Button
//                         className="btn btn-info float-right"
//                         onClick={() =>
//                           history.push("/app/freshlist/hub/addbatch")
//                         }
//                       >
//                         Add Batch
//                       </Button>
//                     )}
//                   />
//                 </Col>
//               </Row>
//               <CardBody>
//                 {this.state.rowData === null ? null : (
//                   <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                     <div className="d-flex flex-wrap justify-content-between align-items-center">
//                       <div className="mb-1">
//                         <UncontrolledDropdown className="p-1 ag-dropdown">
//                           <DropdownToggle tag="div">
//                             {this.gridApi
//                               ? this.state.currenPageSize
//                               : "" * this.state.getPageSize -
//                                 (this.state.getPageSize - 1)}{" "}
//                             -{" "}
//                             {this.state.rowData.length -
//                               this.state.currenPageSize *
//                                 this.state.getPageSize >
//                             0
//                               ? this.state.currenPageSize *
//                                 this.state.getPageSize
//                               : this.state.rowData.length}{" "}
//                             of {this.state.rowData.length}
//                             <ChevronDown className="ml-50" size={15} />
//                           </DropdownToggle>
//                           <DropdownMenu right>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(20)}
//                             >
//                               20
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(50)}
//                             >
//                               50
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(100)}
//                             >
//                               100
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(134)}
//                             >
//                               134
//                             </DropdownItem>
//                           </DropdownMenu>
//                         </UncontrolledDropdown>
//                       </div>
//                       <div className="d-flex flex-wrap justify-content-between mb-1">
//                         <div className="table-input mr-1">
//                           <Input
//                             placeholder="search..."
//                             onChange={(e) =>
//                               this.updateSearchQuery(e.target.value)
//                             }
//                             value={this.state.value}
//                           />
//                         </div>
//                         <div className="export-btn">
//                           <Button.Ripple
//                             color="primary"
//                             onClick={() => this.gridApi.exportDataAsCsv()}
//                           >
//                             Export as CSV
//                           </Button.Ripple>
//                         </div>
//                       </div>
//                     </div>
//                     <ContextLayout.Consumer>
//                       {(context) => (
//                         <AgGridReact
//                           gridOptions={{}}
//                           rowSelection="multiple"
//                           defaultColDef={defaultColDef}
//                           columnDefs={columnDefs}
//                           rowData={rowData}
//                           onGridReady={this.onGridReady}
//                           colResizeDefault={"shift"}
//                           animateRows={true}
//                           floatingFilter={false}
//                           pagination={true}
//                           paginationPageSize={this.state.paginationPageSize}
//                           pivotPanelShow="always"
//                           enableRtl={context.state.direction === "rtl"}
//                         />
//                       )}
//                     </ContextLayout.Consumer>
//                   </div>
//                 )}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       )
//     );
//   }
// }
// export default CreateBatch;
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
export default class AddBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batch_title: "",
      selectedFile: undefined,
      selectedName: "",
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("batch_title", this.state.batch_title);
    data.append("batchtype", this.state.batchtype);

    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("/addbatch", data)
      .then((response) => {
        console.log(response);
        swal("Successful!", "You clicked the button!", "success");
        this.props.history.push("/app/freshlist/batch/batchList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Create Batch
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/freshlist/hub/createbatch")}
              >
                Back
              </Button>
            </Col>
          </Row>
          {/* <CardHeader>
            <CardTitle>New Batch</CardTitle>
          </CardHeader> */}
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Batch</Label>
                  <Input
                    required
                    type="text"
                    name="batch_number"
                    placeholder="Enter Batch Number"
                    value={this.state.batch_number}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Rack Number</Label>
                  <Input
                    required
                    type="number"
                    name="rack_number"
                    placeholder="Enter Rack Number"
                    value={this.state.rack_number}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Shelf Life</Label>
                  <Input
                    required
                    type="text"
                    name="shelf_life"
                    placeholder="Shelf Life"
                    value={this.state.shelf_life}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    required
                    type="date"
                    name="expiry_date"
                    placeholder="Expiry Date"
                    value={this.state.expiry_date}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Stock</Label>
                  <Input
                    required
                    type="text"
                    name="stock"
                    placeholder="Stock"
                    value={this.state.stock}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Notify</Label>
                  <Input
                    required
                    type="text"
                    name="notify"
                    placeholder="Notify"
                    value={this.state.notify}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Create Batch
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
