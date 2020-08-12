<?php include('include/inc-header.php'); ?>

<link href="assets/css/pages/wizard/wizard-1.css?v=7.0.6" rel="stylesheet" type="text/css"/>

<div class="content d-flex flex-column flex-column-fluid">
  <div class="subheader py-2 py-lg-12 subheader-transparent">
    <div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">เพิ่มบรอดแคสต์</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="broadcast.php" class="text-white text-hover-white opacity-75 hover-opacity-100">บรอดแคสต์</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="broadcast_add.php" class="text-white text-hover-white opacity-75 hover-opacity-100">เพิ่มบรอดแคสต์</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex flex-column-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card card-custom">
            <div class="card-body p-0">
              <div class="wizard wizard-1" id="kt_wizard_v1" data-wizard-state="step-first" data-wizard-clickable="false">
                <div class="wizard-nav border-bottom">
                  <div class="wizard-steps p-8 p-lg-10">
                    <div class="wizard-step" data-wizard-type="step" data-wizard-state="current">
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-open-box"></i>
                        <h3 class="wizard-title">1. ตั้งค่าคลังสินค้า</h3>
                      </div>
                      <span class="svg-icon svg-icon-xl wizard-arrow">
                        <i class="flaticon2-right-arrow"></i>
                      </span>
                    </div>

                    <div class="wizard-step" data-wizard-type="step">
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-truck"></i>
                        <h3 class="wizard-title">2. ตั้งค่าการจัดส่ง</h3>
                      </div>
                      <span class="svg-icon svg-icon-xl wizard-arrow">
                        <i class="flaticon2-right-arrow"></i>
                      </span>
                    </div>

                    <div class="wizard-step" data-wizard-type="step">
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-globe"></i>
                        <h3 class="wizard-title">3. ยืนยันความถูกต้อง</h3>
                      </div>
                      <span class="svg-icon svg-icon-xl wizard-arrow last">
                        <i class="flaticon2-right-arrow"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
                  <div class="col-xl-12 col-xxl-7">
                    <form class="form" id="kt_form">
                      <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                        <h3 class="mb-10 font-weight-bold text-dark">ตั้งค่าคลังสินค้า</h3>
                        <div class="form-group row">
                          <div class="col-12 col-md-6">
                            <label>ชื่อคลังสินค้า</label>
                            <input type="text" class="form-control" name="name_warehouse" placeholder="ชื่อคลังสินค้า" />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-12 col-md-6">
                              <label>ประเภทคลังสินค้า</label>
                              <select name="type_warehouse" class="form-control type_warehouse">
                                <option value="">-- Select --</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="อื่นๆ">อื่นๆ</option>
                              </select>
                            </div>
                            <div class="col-12 col-md-6 div_warehouse_text" style="display: none;">
                              <label>&nbsp;</label>
                              <input type="text" class="form-control" name="type_warehouse_text" placeholder="อื่นๆ"/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="pb-5" data-wizard-type="step-content">
                        <h4 class="mb-10 font-weight-bold text-dark">ตั้งค่าการจัดส่ง</h4>

                        <div class="form-group row">
                          <div class="col-12 col-md-6">
                            <label>ชื่อบริษัทขนส่ง</label>
                            <select name="company_shipping" class="form-control">
                              <option value="">-- Select --</option>
                              <option value="เคอรี่" selected>เคอรี่</option>
                              <option value="ไปรษณีย์ไทย">ไปรษณีย์ไทย</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-12 col-md-6">
                            <label>ค่าจัดส่ง</label>
                            <select name="type_shipping" class="form-control type_shipping">
                              <option value="">-- Select --</option>
                              <option value="ฟรีทุกการสั่งซื้อ" selected>ฟรีทุกการสั่งซื้อ</option>
                              <option value="ค่าจัดส่งคงที่">ค่าจัดส่งคงที่</option>
                              <option value="ค่าจัดส่งตามน้ำหนัก">ค่าจัดส่งตามน้ำหนัก</option>
                              <option value="ค่าจัดส่งตามจำนวน">ค่าจัดส่งตามจำนวน</option>
                              <option value="เก็บเงินปลายทาง">เก็บเงินปลายทาง</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row div_delivery_1" style="display: none;">
                          <div class="col-12 col-md-6">
                            <input type="text" class="form-control" name="shipping_1" placeholder="ค่าจัดส่ง"/>
                          </div>
                        </div>

                        <div class="div_delivery_2" style="display: none;">
                          <div class="row">
                            <div class="col-6 col-md-3 mb-5">
                              <input type="text" class="form-control" name="shipping_2" placeholder="น้ำหนักต่ำสุด"/>
                            </div>
                            <div class="col-6 col-md-3 mb-5">
                              <input type="text" class="form-control" name="shipping_3" placeholder="น้ำหนักสูงสุด"/>
                            </div>
                            <div class="col-6 col-md-3 mb-5">
                              <input type="text" class="form-control" name="shipping_4" placeholder="ค่าจัดส่ง"/>
                            </div>
                            <div class="col-6 col-md-3 mb-5">
                              <a href="#" class="btn btn-success btn-block font-weight-bolder">
                                <i class="fas fa-plus mr-2"></i>เพิ่มการจัดส่ง
                              </a>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="table-responsive">
                                <table class="table table-bordered">
                                  <tr>
                                    <th>#</th>
                                    <th>น้ำหนักต่ำสุด</th>
                                    <th>น้ำหนักสูงสุด</th>
                                    <th>ค่าจัดส่ง</th>
                                    <th>แก้ไขล่าสุด</th>
                                    <th>ลบข้อมูล</th>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>
                                      <a href="#" class="btn btn-xs btn-icon btn-light-danger">
                                        <i class="flaticon-delete"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>
                                      <a href="#" class="btn btn-xs btn-icon btn-light-danger">
                                        <i class="flaticon-delete"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>
                                      <a href="#" class="btn btn-xs btn-icon btn-light-danger">
                                        <i class="flaticon-delete"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="div_delivery_3" style="display: none;">
                          <div class="row">
                            <div class="col-6 col-md-3 mb-5">
                              <input type="text" class="form-control" name="" placeholder="น้ำหนักต่ำสุด"/>
                            </div>
                            <div class="col-6 col-md-3 mb-5">
                              <input type="text" class="form-control" name="" placeholder="น้ำหนักสูงสุด"/>
                            </div>
                            <div class="col-6 col-md-3 mb-5">
                              <input type="text" class="form-control" name="" placeholder="ค่าจัดส่ง"/>
                            </div>
                            <div class="col-6 col-md-3 mb-5">
                              <a href="#" class="btn btn-success btn-block font-weight-bolder">
                                <i class="fas fa-plus mr-2"></i>เพิ่มการจัดส่ง
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="row div_delivery_4" style="display: none;">
                          <div class="col-12 col-md-6">
                            <input type="text" class="form-control" name="" placeholder="ค่าจัดส่ง"/>
                          </div>
                        </div>
                      </div>

                      <div class="pb-5" data-wizard-type="step-content">
                        <h4 class="mb-10 font-weight-bold text-dark">ยืนยันความถูกต้อง</h4>
                        <h6 class="font-weight-bolder mb-3">
                          ตั้งค่าคลังสินค้า
                        </h6>
                        <div class="text-dark-50 line-height-lg">
                          <div>ชื่อคลังสินค้า : </div>
                          <div>ประเภทคลังสินค้า : </div>
                          <div>อื่นๆ</div>
                        </div>
                        <div class="separator separator-dashed my-5"></div>
                        <h6 class="font-weight-bolder mb-3">
                          ตั้งค่าขนส่ง
                        </h6>
                        <div class="text-dark-50 line-height-lg">
                          <div>ชื่อบริษัทขนส่ง : </div>
                          <div>ประเภทการจัดส่ง : </div>
                          <div class="table-responsive mt-5">
                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>น้ำหนักต่ำสุด</th>
                                  <th>น้ำหนักสูงสุด</th>
                                  <th>ค่าจัดส่ง</th>
                                  <th>แก้ไขล่าสุด</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                  <td>Cell</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-between border-top mt-5 pt-10">
                        <div class="mr-2">
                          <button type="button" class="btn btn-light-primary font-weight-bold" data-wizard-type="action-prev">
                            <i class="fas fa-chevron-left"></i>
                            ขั้นตอนก่อนหน้า
                          </button>
                        </div>
                        <div>
                          <button type="button" class="btn btn-light-primary font-weight-bold" data-wizard-type="action-submit">
                            <i class="far fa-save"></i>
                            บันทึกข้อมูล
                          </button>
                          <button type="button" class="btn btn-light-primary font-weight-bold" data-wizard-type="action-next">
                            ขั้นตอนต่อไป
                            <i class="fas fa-chevron-right ml-2"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php
include('include/inc-footer.php');
?>

<script src="assets/js/pages/custom/wizard/warehouse.js"></script>
<script type="text/javascript">
  $('.type_warehouse').change(function(){
    var value_type_warehouse = $(this).val();
    if(value_type_warehouse == 'อื่นๆ')
    {
      $('.div_warehouse_text').show();
    }
    else
    {
      $('.div_warehouse_text').hide();
    }
  });
  

  $('.type_shipping').change(function(){
    var value_shipping = $(this).val();
    if(value_shipping == 'ค่าจัดส่งคงที่')
    {
      $('.div_delivery_1').show();
      $('.div_delivery_2').hide();
      $('.div_delivery_3').hide();
      $('.div_delivery_4').hide();
    }
    else if(value_shipping == 'ค่าจัดส่งตามน้ำหนัก')
    {
      $('.div_delivery_1').hide();
      $('.div_delivery_2').show();
      $('.div_delivery_3').hide();
      $('.div_delivery_4').hide();
    }
    else if(value_shipping == 'ค่าจัดส่งตามจำนวน')
    {
      $('.div_delivery_1').hide();
      $('.div_delivery_2').hide();
      $('.div_delivery_3').show();
      $('.div_delivery_4').hide();
    }
    else if(value_shipping == 'เก็บเงินปลายทาง')
    {
      $('.div_delivery_1').hide();
      $('.div_delivery_2').hide();
      $('.div_delivery_3').hide();
      $('.div_delivery_4').show();
    }
  });
</script>
