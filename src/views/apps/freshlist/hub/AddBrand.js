import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
  List,
} from "reactstrap";

import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

// Editor
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";

export class AddBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      brand_img: "",
      status: "",
      buying_price: "",
      buying_price1: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  SizeData = () => {
    console.log("object");
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("sortorder", this.state.sortorder);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "brand_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    axiosConfig
      .post("/addbrand", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/house/HouseProductList");
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
                Assign to Brand
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/freshlist/hub/assigntohub")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="mt-3 ml-5">
              <FormGroup check inline>
                <List type="unstyled">
                  <li>
                    <Input type="checkbox" />
                    <Label check>Brand</Label>
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <Input type="checkbox" />
                        <Label check> Sub Brand</Label>
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <Input type="checkbox" />
                        <Label check> Sub Brand</Label>
                      </li>
                    </ul>
                  </li>
                </List>
              </FormGroup>
            </Col>
            <Col md="6" className="mt-3 ml-5">
              <FormGroup check inline>
                <List type="unstyled">
                  <li>
                    <Input type="checkbox" />
                    <Label check>Brand</Label>
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <Input type="checkbox" />
                        <Label check> Sub Brand</Label>
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <Input type="checkbox" />
                        <Label check> Sub Brand</Label>
                      </li>
                    </ul>
                  </li>
                </List>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4"></Col>
            <Col md="4" className="">
              <Button
                className=" btn btn-info mb-2"
                onClick={() => history.push("/app/freshlist/hub/assigntobatch")}
              >
                Save
              </Button>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default AddBrand;
