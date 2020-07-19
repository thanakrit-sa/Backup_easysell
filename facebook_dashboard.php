<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid">
  <div class="subheader py-2 py-lg-12 subheader-transparent">
    <div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">Facebook Dashboard</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="javascript:;" class="text-white text-hover-white opacity-75 hover-opacity-100">ฟังก์ชั่นการทำงาน</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="javascript:;" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="facebook_pages.php" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook Pages</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="facebook_dashboard.php" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex flex-column-fluid">
    <div class="container">
      <div class="card card-custom gutter-b">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-shrink-0 mr-7">
              <div class="symbol symbol-50 symbol-lg-120">
                <img alt="Pic" src="assets/media//users/300_1.jpg"/>
              </div>
            </div>

            <div class="flex-grow-1">
              <div class="d-flex align-items-center justify-content-between flex-wrap mt-2">
                <div class="mr-3">
                  <p class="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                    ชื่อเพจ
                  </p>
                  <div class="d-flex flex-wrap my-2">
                    <p class="text-muted text-hover-info font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                      <i class="flaticon-like mr-2"></i>
                      1,000 Like
                    </p>
                    <p class="text-muted text-hover-info font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                      <i class="flaticon-bell mr-2"></i>
                      20,000 คน
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between flex-wrap mt-2">
                <div class="mr-3">
                  <p class="font-weight-bold mr-4">เปอร์เซ็นต์การตั้งค่า</p>
                  <div class="d-flex flex-wrap my-2">
                    <div class="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 63%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="font-weight-bolder text-dark ml-4">78%</span>
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
                <span class="font-weight-bolder font-size-sm">ยอดรวมทั้งหมด</span>
                <span class="font-weight-bolder font-size-h5">249,500</span>
              </div>
            </div>

            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
              <span class="mr-4">
                <i class="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column text-dark-75">
                <span class="font-weight-bolder font-size-sm">สั่งซื้อทั้งหมด</span>
                <span class="font-weight-bolder font-size-h5">1,700</span>
              </div>
            </div>

            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
              <span class="mr-4">
                <i class="flaticon-file-2 icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column flex-lg-fill">
                <span class="text-dark-75 font-weight-bolder font-size-sm">73 Tasks</span>
                <a href="#" class="text-primary font-weight-bolder">View</a>
              </div>
            </div>

            <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
              <span class="mr-4">
                <i class="flaticon-chat-1 icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column">
                <span class="text-dark-75 font-weight-bolder font-size-sm">648 Comments</span>
                <a href="#" class="text-primary font-weight-bolder">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion accordion-solid accordion-panel accordion-svg-toggle mb-10" id="faq">
        <div class="card p-6">
          <div class="card-header" id="faqHeading1">
            <div class="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1" role="button">
              <div class="card-label">เชื่อมต่อคลังสินค้า <i class="far fa-check-circle text-success"></i><i class="far fa-times-circle text-danger"></i></div>
              <span class="svg-icon">
                <i class="fas fa-angle-double-right text-primary"></i>
              </span>
            </div>
          </div>

          <div id="faq1" class="collapse" aria-labelledby="faqHeading1" data-parent="#faq">
            <div class="card-body pt-3">
              <div class="table-responsive">
                <div class="text-right mb-5">
                  <a href="javascript:;" class="btn btn-success font-weight-bolder" data-toggle="modal" data-target="#setting_warehouse">
                    <i class="fas fa-plus mr-2"></i>เลือกคลังสินค้า
                  </a>
                </div>
                <table class="table table-bordered">
                  <tr>
                    <th>#</th>
                    <th>ชื่อคลังสินค้า</th>
                    <th>ประเภทคลังสินค้า</th>
                    <th>สินค้า</th>
                    <th>การจัดส่ง</th>
                    <th>แก้ไขล่าสุด</th>
                    <th>ยกเลิกการเชื่อมต่อ</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>ชื่อคลังสินค้า</td>
                    <td>ประเภทคลังสินค้า</td>
                    <td>20 รายการ</td>
                    <td>Kerry (COD)</td>
                    <td>15-07-2020</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-icon btn-light-danger">
                        <i class="flaticon-delete"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>ชื่อคลังสินค้า</td>
                    <td>ประเภทคลังสินค้า</td>
                    <td>20 รายการ</td>
                    <td>Kerry (COD)</td>
                    <td>15-07-2020</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-icon btn-light-danger">
                        <i class="flaticon-delete"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>ชื่อคลังสินค้า</td>
                    <td>ประเภทคลังสินค้า</td>
                    <td>20 รายการ</td>
                    <td>Kerry (COD)</td>
                    <td>15-07-2020</td>
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

        <div class="card p-6">
          <div class="card-header" id="faqHeading2">
            <div class="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="false" aria-controls="faq2" role="button">
              <div class="card-label">Do I need a designer to use Metronic?</div>
              <span class="svg-icon">
                <i class="fas fa-angle-double-right text-primary"></i>
              </span>
            </div>
          </div>
          <div id="faq2" class="collapse" aria-labelledby="faqHeading2" data-parent="#faq">
            <div class="card-body pt-3 font-size-h6 font-weight-normal text-dark-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</div>


<div class="modal fade" id="setting_warehouse" tabindex="-1" role="dialog" aria-labelledby="setting_warehouse" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">เลือกคลังสินค้า</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <i aria-hidden="true" class="ki ki-close"></i>
        </button>
      </div>
      <div class="modal-body">
        <form class="form" id="kt_form">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <div class="checkbox-inline">
                    <label class="checkbox">
                      <input name="" type="checkbox" class="mr-2">
                      <span></span>ชื่อคลังสินค้า
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <div class="checkbox-inline">
                    <label class="checkbox">
                      <input name="" type="checkbox" class="mr-2">
                      <span></span>ชื่อคลังสินค้า
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <div class="checkbox-inline">
                    <label class="checkbox">
                      <input name="" type="checkbox" class="mr-2">
                      <span></span>ชื่อคลังสินค้า
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <div class="checkbox-inline">
                    <label class="checkbox">
                      <input name="" type="checkbox" class="mr-2">
                      <span></span>ชื่อคลังสินค้า
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light-danger font-weight-bold" data-dismiss="modal">ยกเลิก</button>
        <button type="button" class="btn btn-primary font-weight-bold">บันทึกข้อมูล</button>
      </div>
    </div>
  </div>
</div>

<?php
include('include/inc-footer.php');
?>

