import React from "react";
// import { Start } from "../Store/";
import {Badge, Button} from "react-bootstrap";

export function DashboardPage() {
  return (
    <>

      <div className="card card-body mt-0 shadow-sm">
        <div class="row">
          <div class="col mb-7">
            <button className="btn btn-lg btn-primary text-color shadow mx-1">เพิ่มคลังสินค้า</button>
          </div>
        </div>
        <div>
          <ul class="list-group">
            <li class="list-group-item shadow">
              <div class="row" align="center">
                <div class="col-1"><b>ลำดับ</b></div>
                <div class="col-2"><b>ชื่อคลังสินค้า</b></div>
                <div class="col-2"><b>รายละเอียด</b></div>
                <div class="col-2"><b>ประเภทสินค้า</b></div>
                <div class="col-2"><b>จำนวนสินค้า</b></div>
                <div class="col-2"><b>วันที่สร้าง</b></div>
                <div class="col-1"><b>จัดการ</b></div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row" align="center">
                <div class="col-1">1</div>
                <div class="col-2">Warehouse 1</div>
                <div class="col-2">Descript</div>
                <div class="col-2">Fashion</div>
                <div class="col-2">20</div>
                <div class="col-2"></div>
                <div class="col-1"></div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  )
}
