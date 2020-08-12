<?php include('include/inc-header.php'); ?>

<link href="assets/css/pages/wizard/wizard-1.css?v=7.0.6" rel="stylesheet" type="text/css"/>

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
  <div class="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
    <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">แจ้งปัญหาใช้งาน</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="feedback.php" class="text-white text-hover-white opacity-75 hover-opacity-100">แจ้งปัญหาใช้งาน</a>
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
                        <i class="wizard-icon flaticon-list"></i>
                        <h3 class="wizard-title">1. แจ้งปัญหาใช้งาน</h3>
                      </div>
                      <span class="svg-icon svg-icon-xl wizard-arrow">
                        <i class="flaticon2-right-arrow"></i>
                      </span>
                    </div>

                    <div class="wizard-step" data-wizard-type="step">
                      <div class="wizard-label">
                        <i class="wizard-icon flaticon-globe"></i>
                        <h3 class="wizard-title">2. ยืนยันความถูกต้อง</h3>
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
                        <h3 class="mb-10 font-weight-bold text-dark">แจ้งปัญหาใช้งาน</h3>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-12 col-md-6">
                              <label>ชื่อผู้ติดต่อ</label>
                              <input type="text" class="form-control" name="address1" placeholder="ชื่อผู้ติดต่อ" />
                            </div>
                            <div class="col-12 col-md-6">
                              <label>เบอร์โทร</label>
                              <input type="text" class="form-control" name="address1" placeholder="เบอร์โทรศัพท์" />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-12">
                            <label>อีเมล</label>
                            <input type="text" class="form-control" name="address1" placeholder="อีเมล" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <label>ข้อความ</label>
                            <textarea class="form-control" rows="5" name="message" placeholder="ข้อความ"></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="pb-5" data-wizard-type="step-content">
                        <h4 class="mb-10 font-weight-bold text-dark">ยืนยันความถูกต้อง</h4>
                        <h6 class="font-weight-bolder mb-3">
                          แจ้งปัญหาใช้งาน
                        </h6>
                        <div class="text-dark-50 line-height-lg">
                          <div>ชื่อผู้ติดต่อ : </div>
                          <div>เบอร์โทร : </div>
                          <div>อีเมล : </div>
                          <div>ข้อความ :</div>
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
                          <button type="button" class="btn btn-primary font-weight-bold" data-wizard-type="action-submit">
                            <i class="far fa-save"></i>
                            บันทึกข้อมูล
                          </button>
                          <button type="button" class="btn btn-primary font-weight-bold" data-wizard-type="action-next">
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

<script src="assets/js/pages/custom/wizard/wizard-1.js?v=7.0.6"></script>
<script src="assets/js/pages/crud/ktdatatable/base/data-ajax.js?v=7.0.6"></script>