import React, { Component } from 'react'
import { isThisQuarter } from 'date-fns';
import { Link } from "react-router-dom";
import { object } from 'prop-types';
import Warehouse from './Warehouse'
import Data from './Data'

export default class AddWarehouse extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            moreChoiceCate: true,
            moreChoiceTrans: true,
            transpot: true,
            moreTranspotCOD: true,
            moreTranspotDefault: true,
            moreTranspotWeight: true,
            moreTranspotCount: true,
            minWeight: '',
            maxWeight: '',
            price: '',
            arr: [],

        };
    }

    submitAddList = (event) => {
        event.preventDefault()
        console.log(this.state);
        let data = [
            {
                minWeight: this.state.minWeight,
                maxWeight: this.state.maxWeight,
                price: this.state.price
            }
        ]
        // minWeight.push(this.state.minWeight)
        // maxWeight.push(this.state.maxWeight)
        // price.push(this.state.price)
        console.log(data.length);
        if (data.length === 0) {
            console.log("error");
        } else {
            this.state.arr.push(data)
            console.log(this.state);
        }

        // this.state.arr.map(data => {
        //     console.log(data.length);
        // })

        this.state.arr.map((data) => {
            console.log(data.length);
            console.log(data);

            return (
                <>
                    {console.log("aaa")}
                </>
            )
        })

    }

    render() {
        return (
            <>
                <div class="card card-custom card-stretch shadow" id="kt_page_stretched_card">
                    <div class="card-header">
                        <div class="card-title">
                            <h3 class="card-label">เพิ่มคลังสินค้า</h3>
                        </div>
                    </div>
                    <div class="card-body">

                        <form>
                            <div class="form-group">
                                <label>ชื่อคลังสินค้า</label>
                                <input type="email" class="form-control" placeholder="กรุณากรอกชื่อคลังสินค้า" />
                            </div>
                            <div class="form-group">
                                <label for="exampleSelectl">หมวดหมู่สินค้า</label>
                                <select class="form-control form-control-lg" id="exampleSelectl"
                                    onChange={(e) => {
                                        e.target.value === '000' ?
                                            this.setState({ moreChoiceCate: false }) :
                                            this.setState({ moreChoiceCate: true })
                                    }}>
                                    <option value="1" selected>กรุณาเลือกหมวดหมู่สินค้า</option>
                                    <option value="2">1</option>
                                    <option value="000">2</option>
                                </select>
                            </div>
                            <div class="form-group" hidden={this.state.moreChoiceCate}>
                                <label>หมวดหมู่เพิ่มเติม</label>
                                <input type="email" class="form-control" placeholder="กรุณากรอกหมวดหมู่สินค้าเพิ่มเติม" />
                            </div>
                            <div class="form-group">
                                <label for="exampleSelectl">การจัดส่ง</label>
                                <select class="form-control form-control-lg" id="exampleSelectl"
                                    onChange={(e) => {
                                        if (e.target.value === '000') {
                                            this.setState({ moreChoiceTrans: false, transpot: true })
                                        } else if (e.target.value === '0') {
                                            this.setState({ moreChoiceTrans: true, transpot: true })
                                        } else {
                                            this.setState({ moreChoiceTrans: true, transpot: false })
                                        }




                                    }}>
                                    <option value="0" selected>กรุณาเลือกการจัดส่ง</option>
                                    <option value="1">Kerry</option>
                                    <option value="2">Flash</option>
                                    <option value="3">Ninja Van</option>
                                    <option value="000">Orther...</option>
                                </select>
                            </div>
                            <div class="form-group" hidden={this.state.moreChoiceTrans}>
                                <label>การจัดส่งเพิ่มเติม</label>
                                <input type="email" class="form-control" placeholder="กรุณากรอกการจัดส่งเพิ่มเติม" />
                            </div>

                            <div class="form-group row" hidden={this.state.transpot}>
                                <div class="col-9 col-form-label">
                                    <div class="radio-inline">
                                        <label class="radio">
                                            <input type="radio" name="radios5" onChange={(e) => {
                                                this.setState({
                                                    moreTranspotDefault: false,
                                                    moreTranspotWeight: true,
                                                    moreTranspotCount: true,
                                                    moreTranspotCOD: true
                                                })
                                            }} />
                                            <span></span>
                                                ค่ามาตรฐาน
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="radios5" onChange={(e) => {
                                                this.setState({
                                                    moreTranspotDefault: true,
                                                    moreTranspotWeight: false,
                                                    moreTranspotCount: true,
                                                    moreTranspotCOD: true
                                                })
                                            }} />
                                            <span></span>
                                                ราคาตามน้ำหนัก
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="radios5" onChange={(e) => {
                                                this.setState({
                                                    moreTranspotDefault: true,
                                                    moreTranspotWeight: true,
                                                    moreTranspotCount: false,
                                                    moreTranspotCOD: true
                                                })
                                            }} />
                                            <span></span>
                                                ราคาตามจำนวน
                                        </label>
                                        <label class="radio">
                                            <input type="radio" name="radios5" onChange={(e) => {
                                                this.setState({
                                                    moreTranspotDefault: true,
                                                    moreTranspotWeight: true,
                                                    moreTranspotCount: true,
                                                    moreTranspotCOD: false
                                                })
                                            }} />
                                            <span></span>
                                                เก็บเงินปลายทาง
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div hidden={this.state.moreTranspotDefault}>
                                <div class="form-group shadow">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary" type="button">ราคาการจัดส่ง</button>
                                        </div>
                                        <input type="text" class="form-control" placeholder=" 0.00" />
                                    </div>
                                </div>
                            </div>

                            <div hidden={this.state.moreTranspotWeight}>


                                <div class="row">
                                    <div class="col-3">
                                        <div class="form-group shadow-sm">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="กรุณากรอกน้ำหนักขั้นต่ำ"
                                                    onChange={(e) => { this.setState({ minWeight: e.target.value }) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group shadow-sm">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="กรุณากรอกน้ำหนักสูงสุด"
                                                    onChange={(e) => { this.setState({ maxWeight: e.target.value }) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group shadow-sm">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="กรุณากรอกค่าจัดส่ง"
                                                    onChange={(e) => { this.setState({ price: e.target.value }) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <button class="btn btn-light-success btn-block shadow-sm" onClick={this.submitAddList}>เพิ่มรายการ</button>
                                    </div>
                                </div>

                                <div class="row mb-10">
                                    <div class="col-12">
                                        <div class="card card-custom shadow">

                                            <table class="table table-sm">
                                                <thead align="center">
                                                    <tr>
                                                        <th scope="col-1">#</th>
                                                        <th scope="col-3">น้ำหนักขั้นต่ำ</th>
                                                        <th scope="col-3">น้ำหนักสูงสุด</th>
                                                        <th scope="col-2">ค่าจัดส่ง</th>
                                                        <th scope="col-2">แก้ไขล่าสุด</th>
                                                        <th scope="col-1"></th>
                                                    </tr>
                                                </thead>
                                                <tbody align="center">
                                        
                                                        <Data />
                                      
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div hidden={this.state.moreTranspotCount}>
                                <div class="row mb-10">
                                    <div class="col-8">
                                        <div class="card card-custom shadow">
                                            <table class="table table-sm">
                                                <thead align="center">
                                                    <tr>
                                                        <th scope="col-1">#</th>
                                                        <th scope="col-3">จำนวนขั้นต่ำ</th>
                                                        <th scope="col-3">จำนนวนสูงสุด</th>
                                                        <th scope="col-2">ค่าจัดส่ง</th>
                                                        <th scope="col-3">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody align="center">
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>1 รายการ</td>
                                                        <td>10 รายการ</td>
                                                        <td>$ 100</td>
                                                        <td>
                                                            <button class="btn btn-sm btn-primary mx-1"></button>
                                                            <button class="btn btn-sm btn-danger mx-1"></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>11 รายการ</td>
                                                        <td>20 รายการ</td>
                                                        <td>$ 200</td>
                                                        <td>
                                                            <button class="btn btn-sm btn-primary mx-1"></button>
                                                            <button class="btn btn-sm btn-danger mx-1"></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="card card-body shadow">
                                            <form>
                                                <div class="form-group">
                                                    <label>จำนวนขั้นต่ำ</label>
                                                    <input type="text" class="form-control form-control-sm" placeholder="กรุณากรอกน้ำหนัก" />
                                                </div>
                                                <div class="form-group">
                                                    <label>จำนวนสูงสุด</label>
                                                    <input type="text" class="form-control form-control-sm" placeholder="กรุณากรอกน้ำหนัก" />
                                                </div>
                                                <div class="form-group">
                                                    <label>ค่าจัดส่ง</label>
                                                    <input type="text" class="form-control form-control-sm" placeholder="กรุณากรอกค่าจัดส่ง" />
                                                </div>
                                                <button class="btn btn-md btn-light-success btn-block font-weight-bold ">เพิ่มรายการ</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div hidden={this.state.moreTranspotCOD}>
                                <div class="form-group shadow">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-primary" type="button">ราคาการจัดส่ง</button>
                                        </div>
                                        <input type="text" class="form-control" placeholder=" 0.00" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer" align="center">
                                <button type="reset" class="btn btn-lg btn-primary mr-2">ยืนยันการทำรายการ</button>
                                <Link to="/warehouse"><button type="reset" class="btn btn-lg btn-secondary">ยกเลิก</button></Link>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
