import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class cardShop extends Component {
    render() {
        return (
            <>
                <div class="card card-custom gutter-b card-stretch shadow">
                    <div class="card-body text-center pt-4">
                        <div class="d-flex justify-content-end">

                            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="" data-placement="left" data-original-title="Quick actions">
                                <a href="#" class="btn btn-icon btn-sm btn-light-danger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-list-alt"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    <ul class="navi navi-hover">
                                        <li class="navi-item">
                                            <Link to="/configFeed">
                                            <div class="navi-link">
                                                <span class="navi-text">ตั้งค่าตอบตามโพส</span>
                                            </div>
                                            </Link>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-text">ตั้งค่าแชทบอท</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-text">ตั้งค่าไลฟ์สด</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-text">ลบร้านค้า</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mt-7">
                            <div class="symbol symbol-circle symbol-lg-90">
                                <img src="https://i.pinimg.com/236x/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" alt="image" />
                            </div>
                        </div>
                        <div class="my-4">
                            <a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4">ร้านค้าที่ 1</a>
                        </div>
                        <span class="btn btn-text btn-light-success btn-sm font-weight-bold">ดำเนินการ</span>
                        <div class="mt-9">
                            <Link to="/ShopFacebook"><button class="btn btn-lg btn-light-primary font-weight-bolder py-3 px-6 text-uppercase">จัดการรเพจ</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
