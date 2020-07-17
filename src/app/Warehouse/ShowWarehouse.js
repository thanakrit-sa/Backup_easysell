import React, { Component } from 'react'
import AddWarehouse from "./AddWarehouse"
import Warehouse from "./Warehouse"
import { Link } from "react-router-dom";

export function ShowWarehouse() {

    return (
        <>
            <br />
            <div class="row text-right">
                <div class="col-12 text-right">
                    <div class="d-flex align-items-end flex-wrap mr-2 mb-5">
                        {/* <a href="#" class="btn btn-light-danger font-weight-bolder btn-lg mr-2">Reports</a> */}
                        <Link to="/addWearhouse"><button class="btn btn-light-success font-weight-bolder btn-lg mr-2">เพิ่มคลังสินค้า</button></Link>
                        <div class="input-group input-group-lg input-group-solid max-w-175px">
                            <input type="text" class="form-control pl-4" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-4">
                    <Warehouse />
                </div>
                <div className="col-4">
                    <Warehouse />
                </div>
                <div className="col-4">
                    <Warehouse />
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-4">
                    <Warehouse />
                </div>
                <div className="col-4">
                    <Warehouse />
                </div>
                <div className="col-4">
                    <Warehouse />
                </div>
            </div>
        </>

    )
}

