import React, { Component } from 'react'
import swal from 'sweetalert';
import ConnectLine from './ConnectLine'

export default class ShopLine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showConnectWarehouse: true
        }
    }

    onConnect = () => {

        swal("คุณต้องการเชื่อมต่อคลังสินค้านี้ใช่หรือไม่ ?", {
            buttons: {
                cancel: "ไม่ต้องการ !",
                catch: {
                    text: "ต้องการ",
                    value: "true",
                },
            },
        })
            .then((value) => {
                switch (value) {

                    case "true":
                        swal("เสร็จสิ้น!", "ทำการเชื่อมต่อคลังสินค้าเรียบร้อยแล้ว !", "success");
                        break;

                    default:
                        swal("ทำการเชื่อมต่อคลังสินค้าไม่สำเร็จ !");
                }
            });

    }

    onDisConnect = () => {

        swal("คุณต้องการยกเลิกการเชื่อมต่อคลังสินค้านี้ใช่หรือไม่ ?", {
            buttons: {
                cancel: "ไม่ต้องการ !",
                catch: {
                    text: "ต้องการ",
                    value: "true",
                },
            },
        })
            .then((value) => {
                switch (value) {

                    case "true":
                        swal("เสร็จสิ้น!", "ทำการยกเลิกการเชื่อมต่อคลังสินค้าเรียบร้อยแล้ว !", "success");
                        break;

                    default:
                        swal("ทำการยกเลิกการเชื่อมต่อคลังสินค้าไม่สำเร็จ !");
                }
            });

    }

    render() {
        return (
            <>
                <div class="card card-custom gutter-b shadow-sm">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                <div class="symbol symbol-50 symbol-lg-120">
                                    <img alt="Pic" src="https://png.pngtree.com/png-vector/20190511/ourmid/pngtree-blue-assassin-esports-logo-for-gaming-mascot-png-image_1038929.jpg" />
                                </div>
                                <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                                    <span class="font-size-h3 symbol-label font-weight-boldest">JM</span>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <div class="mr-3">
                                        <a href="#" class="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">Nexa - Next generation SAAS</a>
                                        <div class="d-flex flex-wrap my-2">
                                            <a href="#" class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                </span>app@easysell.app</a>
                                        </div>
                                    </div>
                                    {/* <div class="my-lg-0 my-1">
                                        <a href="#" class="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3">Reports</a>
                                        <a href="#" class="btn btn-sm btn-info font-weight-bolder text-uppercase">New Task</a>
                                    </div> */}
                                </div>
                                <div class="d-flex align-items-center flex-wrap justify-content-between">
                                    {/* <div class="flex-grow-1 font-weight-bold text-dark-50 py-5 py-lg-2 mr-5">I distinguish three main text objectives could be merely to inform people.
													<br />A second could be persuade people. You want people to bay objective.</div> */}
                                    <div class="d-flex flex-wrap align-items-center py-2">
                                        <div class="d-flex align-items-center mr-10">
                                            <div class="mr-6">
                                                <div class="font-weight-bold mb-2">วันที่สร้าง</div>
                                                <span class="btn btn-sm btn-text btn-primary text-uppercase font-weight-bold">07 May, 2020</span>
                                            </div>
                                            <div class="">
                                                <div class="font-weight-bold mb-2">แก้ไขล่าสุด</div>
                                                <span class="btn btn-sm btn-text btn-danger text-uppercase font-weight-bold">10 June, 2021</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="separator separator-solid my-7"></div>
                        <div class="d-flex align-items-center flex-wrap">
                            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                <span class="mr-4">
                                    <i class="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                                </span>
                                <div class="d-flex flex-column text-dark-75">
                                    <span class="font-weight-bolder font-size-sm">รายรับทั้งหมด</span>
                                    <span class="font-weight-bolder font-size-h5">
                                        <span class="text-dark-50 font-weight-bold">$</span>249,500</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                <span class="mr-4">
                                    <i class="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                                </span>
                                <div class="d-flex flex-column text-dark-75">
                                    <span class="font-weight-bolder font-size-sm">รายจ่ายทั้งหมด</span>
                                    <span class="font-weight-bolder font-size-h5">
                                        <span class="text-dark-50 font-weight-bold">$</span>164,700</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                <span class="mr-4">
                                    <i class="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                </span>
                                <div class="d-flex flex-column text-dark-75">
                                    <span class="font-weight-bolder font-size-sm">กำไรทั้งหมด</span>
                                    <span class="font-weight-bolder font-size-h5">
                                        <span class="text-dark-50 font-weight-bold">$</span>782,300</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                <span class="mr-4">
                                    <i class="flaticon-file-2 icon-2x text-muted font-weight-bold"></i>
                                </span>
                                <div class="d-flex flex-column flex-lg-fill">
                                    <span class="text-dark-75 font-weight-bolder font-size-sm">73 รายการสินค้า</span>
                                    <a href="#" class="text-primary font-weight-bolder">View</a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
                                <span class="mr-4">
                                    <i class="flaticon-chat-1 icon-2x text-muted font-weight-bold"></i>
                                </span>
                                <div class="d-flex flex-column">
                                    <span class="text-dark-75 font-weight-bolder font-size-sm">648 รายการสั่งซื้อ</span>
                                    <a href="#" class="text-primary font-weight-bolder">View</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card card-custom gutter-bs shadow-sm">
                    <div class="card-header card-header-tabs-line">
                        <div class="card-toolbar">
                            <ul class="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x" role="tablist">
                                <li class="nav-item mr-3">
                                    <a class="nav-link active" data-toggle="tab" href="#kt_apps_projects_view_tab_2">

                                        <span class="nav-text font-weight-bold">เชื่อมต่อคลังสินค้า</span>
                                    </a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a class="nav-link" data-toggle="tab" href="#kt_apps_projects_view_tab_3">

                                        <span class="nav-text font-weight-bold">รายการสั่งซื้อ</span>
                                    </a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a class="nav-link" data-toggle="tab" href="#kt_apps_projects_view_tab_4">

                                        <span class="nav-text font-weight-bold">ตั้งค่าการเชื่อมต่อ</span>
                                    </a>
                                </li>
                            </ul>
                        </div >
                    </div >
                    <div class="card-body p-0 ">
                        <div class="tab-content">
                            <div class="tab-pane active p-0 m-0" id="kt_apps_projects_view_tab_2" role="tabpanel">
                                <div class="card card-custom m-0 p-0">
                                    <div class="card-body">

                                        <div class="row align-items-center">
                                            <div class="col-lg-9 col-xl-8">
                                                <div class="row align-items-center">
                                                    <div class="col-md-4 my-2 my-md-0">
                                                        <div class="input-icon">
                                                            <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                                                            <span>
                                                                <i class="flaticon2-search-1 text-muted"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 my-2 my-md-0">
                                                        <div class="d-flex align-items-center">
                                                            <label class="mr-3 mb-0 d-none d-md-block">สถานะ:</label>
                                                            <select class="form-control form-control-lg" id="kt_datatable_search_status">
                                                                <option value="">All</option>
                                                                <option value="1">Pending</option>
                                                                <option value="2">Delivered</option>
                                                                <option value="3">Canceled</option>
                                                                <option value="4">Success</option>
                                                                <option value="5">Info</option>
                                                                <option value="6">Danger</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 my-2 my-md-0">
                                                        <div class="d-flex align-items-center">
                                                            <label class="mr-3 mb-0 d-none d-md-block">ประเภท:</label>
                                                            <select class="form-control form-control-lg" id="kt_datatable_search_type">
                                                                <option value="">All</option>
                                                                <option value="1">Online</option>
                                                                <option value="2">Retail</option>
                                                                <option value="3">Direct</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-xl-2 mt-5 mt-lg-0">
                                                <a href="#" class="btn btn-light-primary px-6 font-weight-bold btn-block">ค้นหา</a>
                                            </div>
                                            {/* <div class="col-lg-3 col-xl-2 mt-5 mt-lg-0">
                                                <button align="right" data-toggle="modal" data-target="#exampleModal" class="btn btn-light-success btn-block">เพิ่มการเชื่อมต่อ</button>
                                            </div> */}

                                        </div>
                                        <br />
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <td align="center" scope="col-1">#</td>
                                                    <td align="center" scope="col-1">ชื่อคลังสินค้า</td>
                                                    <td align="center" scope="col-1">หมวดหมู่สินค้า</td>
                                                    <td align="center" scope="col-1">จำนวนสินค้า</td>
                                                    <td align="center" scope="col-1">สถานะการเชื่อมต่อ</td>
                                                    <td align="center" scope="col-7">Action</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td align="center">1</td>
                                                    <td align="center">คลังที่ 1</td>
                                                    <td align="center">เสื้อผ้า</td>
                                                    <td align="center">30 รายการ</td>
                                                    <td align="center"><b>ทำการเชื่อมต่อแล้ว</b></td>
                                                    <td align="center" class="p-0 m-0"><button onClick={this.onDisConnect} class="btn btn-light-danger font-weight-bold m-1">ยกเลิกการเชื่อมต่อ</button></td>
                                                </tr>
                                                <tr>
                                                    <td align="center">2</td>
                                                    <td align="center">คลังที่ 2</td>
                                                    <td align="center">เครื่องสำอาง</td>
                                                    <td align="center">20 รายการ</td>
                                                    <td align="center"><b>ทำการเชื่อมต่อแล้ว</b></td>
                                                    <td align="center" class="p-0 m-0"><button onClick={this.onDisConnect} class="btn btn-light-danger font-weight-bold m-1">ยกเลิกการเชื่อมต่อ</button></td>
                                                </tr>
                                                <tr>
                                                    <td align="center">3</td>
                                                    <td align="center">คลังที่ 3</td>
                                                    <td align="center">กิจกรรมกลางแจ้ง</td>
                                                    <td align="center">10 รายการ</td>
                                                    <td align="center"><b>ยังไม่ทำการเชื่อมต่อ</b></td>
                                                    <td align="center" class="p-0 m-0"><button onClick={this.onConnect} class="btn btn-light-success font-weight-bold m-1">เชื่อมต่อ</button></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <div align="center" class="justify-content-between align-items-center flex-wrap pt-5">
                                            <div class="flex-wrap py-2 mr-3">
                                                <button disabled class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-double-arrow-back icon-xs"></i></button>
                                                <button disabled class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-arrow-back icon-xs"></i></button>
                                                <button class="btn btn-icon btn-sm border-0 btn-light btn-hover-primary active mr-2 my-1">1</button>
                                                <button class="btn btn-icon btn-sm border-0 btn-light mr-2 my-1">2</button>
                                                <button class="btn btn-icon btn-sm border-0 btn-light mr-2 my-1">3</button>
                                                <button class="btn btn-icon btn-sm border-0 btn-light mr-2 my-1">...</button>
                                                <button class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-arrow-next icon-xs"></i></button>
                                                <button class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-double-arrow-next icon-xs"></i></button>
                                            </div>
                                        </div>
                                        <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable">

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane" id="kt_apps_projects_view_tab_3" role="tabpanel">
                                <div class="card card-custom m-0 p-0">
                                    <div class="card-body">

                                        <div class="row align-items-center">
                                            <div class="col-lg-9 col-xl-8">
                                                <div class="row align-items-center">
                                                    <div class="col-md-4 my-2 my-md-0">
                                                        <div class="input-icon">
                                                            <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                                                            <span>
                                                                <i class="flaticon2-search-1 text-muted"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 my-2 my-md-0">
                                                        <div class="d-flex align-items-center">
                                                            <label class="mr-3 mb-0 d-none d-md-block">สถานะ:</label>
                                                            <select class="form-control form-control-lg" id="kt_datatable_search_status">
                                                                <option value="">All</option>
                                                                <option value="1">Pending</option>
                                                                <option value="2">Delivered</option>
                                                                <option value="3">Canceled</option>
                                                                <option value="4">Success</option>
                                                                <option value="5">Info</option>
                                                                <option value="6">Danger</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 my-2 my-md-0">
                                                        <div class="d-flex align-items-center">
                                                            <label class="mr-3 mb-0 d-none d-md-block">ประเภท:</label>
                                                            <select class="form-control form-control-lg" id="kt_datatable_search_type">
                                                                <option value="">All</option>
                                                                <option value="1">Online</option>
                                                                <option value="2">Retail</option>
                                                                <option value="3">Direct</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-xl-2 mt-5 mt-lg-0">
                                                <a href="#" class="btn btn-light-primary px-6 font-weight-bold btn-block">ค้นหา</a>
                                            </div>
                                        </div>

                                        <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="kt_apps_projects_view_tab_4" role="tabpanel">
                                <div class="card card-custom m-0 p-0">
                                    <div class="card-body" align="center">
                                        <ConnectLine />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >


            </>
        )
    }
}
