import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CardShop extends Component {
    render() {
        return (
            <>
                <div class="card card-custom gutter-b card-stretch shadow">
                    <div class="card-body text-center pt-4">
                        <div class="d-flex justify-content-end">
                            <div class="card-toolbar">
                                {/* <a href="#" class="btn btn-icon btn-sm btn-light-warning mr-1" data-card-tool="reload">
                                    <i class="ki ki-reload icon-nm"></i>
                                </a> */}
                                <a href="#" class="btn btn-icon btn-sm btn-light-danger" data-card-tool="remove">
                                    <i class="ki ki-close icon-nm"></i>
                                </a>
                            </div>
                        </div>
                        <div class="mt-7">
                            <div class="symbol symbol-circle symbol-lg-90">
                                <img src="https://png.pngtree.com/png-vector/20190511/ourmid/pngtree-blue-assassin-esports-logo-for-gaming-mascot-png-image_1038929.jpg" alt="image" />
                            </div>
                        </div>
                        <div class="my-4">
                            <a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4">ร้านค้าที่ 1</a>
                        </div>
                        <span class="btn btn-text btn-light-success btn-sm font-weight-bold">ดำเนินการ</span>
                        <div class="mt-9">
                            <Link to="/ShopLine"><button class="btn btn-lg btn-light-primary font-weight-bolder py-3 px-6 text-uppercase">จัดการร้านค้า</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
