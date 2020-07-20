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
            <a href="facebook_dashboard.php" class="text-white text-hover-white opacity-75 hover-opacity-100">ชื่อเพจ</a>
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
              <div class="symbol symbol-50 symbol-lg-130">
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
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 63%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="font-weight-bolder text-dark ml-4">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="separator separator-solid my-7"></div>

          <div class="d-flex align-items-center flex-wrap">
            <div class="col-6 col-md-3 d-flex align-items-center mb-2">
              <span class="mr-4">
                <i class="fab fa-bitcoin icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column text-dark-75">
                <span class="font-weight-bolder font-size-sm">ยอดรวมทั้งหมด</span>
                <span class="font-weight-bolder font-size-h5">249,500</span>
              </div>
            </div>

            <div class="col-6 col-md-3 d-flex align-items-center mb-2">
              <span class="mr-4">
                <i class="fab fa-shopify icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column text-dark-75">
                <span class="font-weight-bolder font-size-sm">ยอดสั่งซื้อทั้งหมด</span>
                <span class="font-weight-bolder font-size-h5">1,700</span>
              </div>
            </div>

            <div class="col-6 col-md-3 d-flex align-items-center mb-2">
              <span class="mr-4">
                <i class="far fa-address-card icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column">
                <span class="text-dark-75 font-weight-bolder font-size-sm">ข้อมูลติดต่อ</span>
                <a href="javascript:;" class="text-primary font-weight-bolder" data-toggle="modal" data-target="#modal_address">
                  Setting
                </a>
              </div>
            </div>

            <div class="col-6 col-md-3 d-flex align-items-center mb-2">
              <span class="mr-4">
                <i class="fab fa-cc-visa icon-2x text-muted font-weight-bold"></i>
              </span>
              <div class="d-flex flex-column flex-lg-fill">
                <span class="text-dark-75 font-weight-bolder font-size-sm">ข้อมูลธนาคาร</span>
                <a href="javascript:;" class="text-primary font-weight-bolder" data-toggle="modal" data-target="#modal_bank">
                  Setting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion accordion-solid accordion-panel accordion-svg-toggle mb-10" id="setting_all">
        <div class="card p-6">
          <div class="card-header" id="setting_warehouse">
            <div class="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_warehouse" aria-expanded="true" aria-controls="detail_setting_warehouse" role="button">
              <div class="card-label">เชื่อมต่อคลังสินค้า <i class="far fa-check-circle text-success"></i><i class="far fa-times-circle text-danger"></i></div>
              <span class="svg-icon">
                <i class="fas fa-angle-double-right text-primary"></i>
              </span>
            </div>
          </div>

          <div id="detail_setting_warehouse" class="collapse" aria-labelledby="setting_warehouse" data-parent="#setting_all">
            <div class="card-body pt-3">
              <div class="table-responsive">
                <div class="text-right mb-5">
                  <a href="javascript:;" class="btn btn-success font-weight-bolder" data-toggle="modal" data-target="#modal_warehouse">
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
          <div class="card-header" id="setting_chatbot">
            <div class="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_chatbot" aria-expanded="false" aria-controls="detail_setting_chatbot" role="button">
              <div class="card-label">ตั้งค่า Chatbot <i class="far fa-check-circle text-success"></i><i class="far fa-times-circle text-danger"></i></div>
              <span class="svg-icon">
                <i class="fas fa-angle-double-right text-primary"></i>
              </span>
            </div>
          </div>
          <div id="detail_setting_chatbot" class="collapse" aria-labelledby="setting_chatbot" data-parent="#setting_all">
            <div class="card-body pt-3">
              <div class="form-group row reply_to_all">
                <div class="col-12">
                  <div class="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                    <form class="form col-12">
                      <div class="form-group row">
                        <div class="col-12 col-md-6">
                          <label>The Persistent Menu</label>
                          <input type="text" class="form-control"  placeholder="Enter email"/>
                        </div>
                        <div class="col-12 col-md-6">
                          <label>ข้อความเริ่มต้นใช้งาน</label>
                          <input type="text" class="form-control"  placeholder="Enter email"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-12 col-md-6">
                          <label>ข้อความต้อนรับ</label>
                          <input type="text" class="form-control"  placeholder="Enter email"/>
                        </div>
                        <div class="col-12 col-md-6">
                          <label>Ice Breakers</label>
                          <input type="text" class="form-control"  placeholder="Enter email"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-12 col-md-6">
                          <label>ตอบตามคีย์เวิร์ด</label>
                          <input id="keyword_tag" class="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                        </div>
                        <div class="col-12 col-md-6">
                          <label>&nbsp;</label>
                          <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-right">
                          <div class="separator separator-solid mb-5"></div>
                          <button type="reset" class="btn btn-primary">บันทึกข้อมูล</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="card-header" id="setting_comments">
            <div class="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_comments" aria-expanded="false" aria-controls="detail_setting_comments" role="button">
              <div class="card-label">ตั้งค่า Comments <i class="far fa-check-circle text-success"></i><i class="far fa-times-circle text-danger"></i></div>
              <span class="svg-icon">
                <i class="fas fa-angle-double-right text-primary"></i>
              </span>
            </div>
          </div>
          <div id="detail_setting_comments" class="collapse" aria-labelledby="setting_comments" data-parent="#setting_all">
            <div class="card-body pt-3">
              <div class="form-group row">
                <div class="col-12 col-md-6 col-lg-4">
                  <span class="switch switch-sm switch-outline switch-icon switch-success">
                    <label class="col-12 p-0">
                      <input type="radio" name="select">
                      <span class="mr-5"></span>
                      <p class="mt-1">ตั้งค่าเหมือนกันทุกโพสต์</p>
                    </label>
                  </span>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <span class="switch switch-sm switch-outline switch-icon switch-success">
                    <label class="col-12 p-0">
                      <input type="radio" name="select">
                      <span class="mr-5"></span>
                      <p class="mt-1">ตั้งค่าเลือกเฉพาะบางโพสต์</p>
                    </label>
                  </span>
                </div>
              </div>

              <div class="form-group row reply_to_all">
                <div class="col-12">
                  <div class="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                    <form class="form col-12">
                      <div class="form-group row">
                        <div class="col-12 col-md-6 col-lg-4">
                          <span class="switch switch-sm switch-outline switch-icon switch-success">
                            <label class="col-12 p-0">
                              <input type="radio" name="comment">
                              <span class="mr-5"></span>
                              <p class="mt-1">ตอบตามคีย์เวิร์ด</p>
                            </label>
                          </span>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                          <span class="switch switch-sm switch-outline switch-icon switch-success">
                            <label class="col-12 p-0">
                              <input type="radio" name="comment">
                              <span class="mr-5"></span>
                              <p class="mt-1">ตอบทุกคอมเมนต์</p>
                            </label>
                          </span>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                          <span class="switch switch-sm switch-outline switch-icon switch-success">
                            <label class="col-12 p-0">
                              <input type="radio" name="comment">
                              <span class="mr-5"></span>
                              <p class="mt-1">ตอบทุกคอมเมนต์ + ดึงเข้าอินบ็อกซ์</p>
                            </label>
                          </span>
                        </div>
                      </div>

                      <div class="form-group row comments_keyword">
                        <div class="col-12 col-md-6">
                          <input id="keyword_tag1" class="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                        </div>
                        <div class="col-12 col-md-6">
                          <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                        </div>
                      </div>
                      <div class="form-group row comments_all">
                        <div class="col-12 col-md-6">
                          <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-right">
                          <div class="separator separator-solid mb-5"></div>
                          <button type="reset" class="btn btn-primary">บันทึกข้อมูล</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="form-group row reply_by_comments">
                <div class="col-12">
                  <div class="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                    <form class="form col-12">
                      <div class="form-group row">
                        <div class="col-12 col-md-6">
                          <div class="form-group row">
                            <div class="col-12">
                              <textarea class="form-control bg-secondary" rows="5" readonly="readonly">A simple secondary alert—check it out!</textarea>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="row">
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment1" checked="checked">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ปิดการใช้งาน</p>
                                </label>
                              </span>
                            </div>
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment1">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ตอบตามคีย์เวิร์ด</p>
                                </label>
                              </span>
                            </div>
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment1">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ตอบทุกคอมเมนต์</p>
                                </label>
                              </span>
                            </div>
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment1">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ตอบทุกคอมเมนต์ + ดึงเข้าอินบ็อกซ์</p>
                                </label>
                              </span>
                            </div>
                          </div>
                          <div class="row mt-5">
                            <div class="col-12 comments_keyword">
                              <div class="form-group">
                                <input id="keyword_tag2" class="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                              </div>
                              <div class="form-group">
                                <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                              </div>
                            </div>
                            <div class="col-12 comments_all">
                              <div class="form-group">
                                <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-right">
                          <div class="separator separator-solid mb-5"></div>
                          <button type="reset" class="btn btn-primary">บันทึกข้อมูล</button>
                        </div>
                      </div>

                      <div class="separator separator-dashed separator-border-2 separator-danger mb-8 mt-5"></div>

                      <div class="form-group row">
                        <div class="col-12 col-md-6">
                          <div class="form-group row">
                            <div class="col-12">
                              <textarea class="form-control bg-secondary" rows="5" readonly="readonly">A simple secondary alert—check it out!</textarea>
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col-12">
                              <img src="assets/media/users/300_25.jpg" />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="row">
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment2" checked="checked">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ปิดการใช้งาน</p>
                                </label>
                              </span>
                            </div>
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment2">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ตอบตามคีย์เวิร์ด</p>
                                </label>
                              </span>
                            </div>
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment2">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ตอบทุกคอมเมนต์</p>
                                </label>
                              </span>
                            </div>
                            <div class="col-12 col-md-6">
                              <span class="switch switch-sm switch-outline switch-icon switch-success">
                                <label class="col-12 p-0">
                                  <input type="radio" name="comment2">
                                  <span class="mr-5"></span>
                                  <p class="mt-1">ตอบทุกคอมเมนต์ + ดึงเข้าอินบ็อกซ์</p>
                                </label>
                              </span>
                            </div>
                          </div>
                          <div class="row mt-5">
                            <div class="col-12 comments_keyword">
                              <div class="form-group">
                                <input id="keyword_tag3" class="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                              </div>
                              <div class="form-group">
                                <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                              </div>
                            </div>
                            <div class="col-12 comments_all">
                              <div class="form-group">
                                <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-right">
                          <div class="separator separator-solid mb-5"></div>
                          <button type="reset" class="btn btn-primary">บันทึกข้อมูล</button>
                        </div>
                      </div>

                      <div class="separator separator-dashed separator-border-2 separator-danger mb-8 mt-5"></div>

                      <div class="form-group row">
                        <a href="javascript:;" class="btn btn-block btn-light-primary btn-pill">โหลดข้อมูลเพิ่ม</a>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="card-header" id="setting_live">
            <div class="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_live" aria-expanded="false" aria-controls="detail_setting_live" role="button">
              <div class="card-label">ตั้งค่า Live <i class="far fa-check-circle text-success"></i><i class="far fa-times-circle text-danger"></i></div>
              <span class="svg-icon">
                <i class="fas fa-angle-double-right text-primary"></i>
              </span>
            </div>
          </div>
          <div id="detail_setting_live" class="collapse" aria-labelledby="setting_live" data-parent="#setting_all">
            <div class="card-body pt-3">
              <div class="form-group row reply_to_all">
                <div class="col-12">
                  <div class="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                    <form class="form col-12">
                      <div class="form-group row">
                        <div class="col-12 col-md-6">
                          <label>ตอบตามคีย์เวิร์ด</label>
                          <input id="keyword_tag4" class="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                        </div>
                        <div class="col-12 col-md-6">
                          <label>&nbsp;</label>
                          <textarea class="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 text-right">
                          <div class="separator separator-solid mb-5"></div>
                          <button type="reset" class="btn btn-primary">บันทึกข้อมูล</button>
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

<div class="modal fade" id="modal_address" tabindex="-1" role="dialog" aria-labelledby="modal_address" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ข้อมูลติดต่อ</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <i aria-hidden="true" class="ki ki-close"></i>
        </button>
      </div>
      <div class="modal-body">
        <form class="form">
          <div class="form-group row">
            <div class="col-12">
              <label>ข้อมูลติดต่อ</label>
              <textarea class="form-control" rows="5" placeholder="ข้อมูลติดต่อ"></textarea>
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

<div class="modal fade" id="modal_bank" tabindex="-1" role="dialog" aria-labelledby="modal_bank" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ข้อมูลธนาคาร</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <i aria-hidden="true" class="ki ki-close"></i>
        </button>
      </div>
      <div class="modal-body">
        <form class="form">
          <div class="row">
            <div class="col-12 col-md-4 mb-5">
              <label>ชื่อธนาคาร</label>
              <input type="text" class="form-control"  placeholder="Enter email"/>
            </div>
            <div class="col-12 col-md-4 mb-5">
              <label>ชื่อเจ้าของบัญชี</label>
              <input type="text" class="form-control"  placeholder="ชื่อเจ้าของบัญชี"/>
            </div>
            <div class="col-12 col-md-4 mb-5">
              <label>เลขที่บัญชี</label>
              <input type="text" class="form-control"  placeholder="เลขที่บัญชี"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <a href="javascript:;" class="btn btn-success font-weight-bolder">
                <i class="fas fa-plus mr-2"></i>เพิ่มจำนวนธนาคาร
              </a>
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

<div class="modal fade" id="modal_warehouse" tabindex="-1" role="dialog" aria-labelledby="modal_warehouse" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">เลือกคลังสินค้า</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <i aria-hidden="true" class="ki ki-close"></i>
        </button>
      </div>
      <div class="modal-body">
        <form class="form">
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

<script src="assets/js/pages/crud/forms/widgets/tagify.js?v=7.0.6"></script>