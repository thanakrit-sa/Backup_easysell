import React, { Component } from 'react'
import {
    Button,
    Modal,
    Card,
    Form,
    ListGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Warehouse extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            moreChoice: true
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    moreChoice = (keyword) => {
        console.log(keyword);
        keyword === '000' ?
            this.setState({ moreChoice: false }) : this.setState({ moreChoice: true })
    }
    render() {
        return (
            <>
                {/* <Card className="shadow-sm" style={{ width: '18rem', height: '21rem' }}>
                    <Card.Header align="center"><b>Warehouse 1</b></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>ชื่อ : </b>คลังสินค้าที่ 1</ListGroup.Item>
                        <ListGroup.Item><b>หมวดหมู่ : </b>เครื่องแต่งกาย</ListGroup.Item>
                        <ListGroup.Item><b>สต๊อก : </b>จำนวน 20 รายการ</ListGroup.Item>
                        <ListGroup.Item><b>วันที่สร้าง : </b></ListGroup.Item>
                        <ListGroup.Item className="p-0 m-0">
                            <Link to="/detailWarehouse"><button onClick={this.handleShow} className="btn btn-lg btn-primary btn-block m-0">รายละเอียด</button></Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>แก้ไขคลังสินค้า</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label><b>Warehouse 1</b></Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>ชื่อคลังสินค้า</Form.Label>
                                <Form.Control type="text" value="คลังสินค้าที่ 1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>หมวดหมู่สินค้า</Form.Label>
                                <Form.Control as="select" onChange={(event) => this.moreChoice(event.target.value)}>
                                    <option value="0">กรุณาเลือกหมวดหมู่สินค้า</option>
                                    <option value="1" selected>เครื่องแต่งกาย</option>
                                    <option value="000">อื่นๆ...</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group hidden={this.state.moreChoice} controlId="formGroupName">
                                <Form.Label>หมวดหมู่เพิ่มเติม</Form.Label>
                                <Form.Control type="text" placeholder="กรุณากรอกชื่อหมวดหมู่" />
                            </Form.Group>
                            <Form.Group controlId="formGroupStock">
                                <Form.Label>จำนวนสินค้าในคลังสินค้า</Form.Label>
                                <Form.Control type="text" value="20" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>ปิดหน้าต่าง</Button>
                        <Button variant="primary" onClick={this.handleClose}>ยืนยันการแก้ไขคลังสินค้า</Button>
                    </Modal.Footer>
                </Modal> */}
                
            <div class="card card-custom gutter-b card-stretch shadow">

                <div class="card-body pt-4">

                    <div class="d-flex justify-content-end">
                        <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                            <a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ki ki-bold-more-hor"></i>
                            </a>
                            <div aria-labelledby="dropdownMenuButton" class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                <ul class="navi navi-hover">
                                    <li class="navi-item">
                                        <a href="#" class="navi-link">
                                            <span class="navi-icon">
                                                <i class="flaticon2-shopping-cart-1"></i>
                                            </span>
                                            <span class="navi-text">แก้ไขคลังสินค้า</span>
                                        </a>
                                    </li>
                                    <li class="navi-item">
                                        <a href="#" class="navi-link">
                                            <span class="navi-icon">
                                                <i class="flaticon2-calendar-8"></i>
                                            </span>
                                            <span class="navi-text">ลบคลังสินค้า</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>


                    <div class=" row d-flex align-items-center mb-7">

                        <div class=" col flex-shrink-0 mr-4">
                            <div class="d-flex flex-column" align="center">
                                <div class="symbol symbol-circle symbol-lg-100">
                                    <img src="https://cdn.dribbble.com/users/1346218/screenshots/7052728/media/94e326fde0b421f13c95938a3e270797.png" alt="image" />
                                </div>
                                <a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mt-5 mb-0">คลังสินค้าที่ 1</a>
                                <span class="text-muted font-weight-bold">เสื้อยืดคละสี</span>
                            </div>
                        </div>



                    </div>

                    <div class="mb-7">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-dark-75 font-weight-bolder mr-2">สินค้า :</span>
                            <a href="#" class="text-muted text-hover-primary">จำนวน 20 รายการ</a>
                        </div>
                        <div class="d-flex justify-content-between align-items-cente my-1">
                            <span class="text-dark-75 font-weight-bolder mr-2">การจัดส่ง :</span>
                            <a href="#" class="text-muted text-hover-primary">COD, ค่าคงที่, ตามจำนวน</a>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-dark-75 font-weight-bolder mr-2">แก้ไขล่าสุด :</span>
                            <span class="text-muted font-weight-bold">21.05.2016</span>
                        </div>
                    </div>

                    <Link to="/detailWarehouse"><button class="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4">ดูสินค้า</button></Link>
                </div>

            </div>

            </>
        )
    }
}
