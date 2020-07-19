<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
  <div class="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
    <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">จัดการสินค้า</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="#" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="" class="text-white text-hover-white opacity-75 hover-opacity-100">คลังสินค้า</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="" class="text-white text-hover-white opacity-75 hover-opacity-100">จัดการสินค้า</a>
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
            <div class="card-header flex-wrap border-1 pt-6 pb-3">
              <div class="card-title">
                <h3 class="card-label">
                  ชื่อคลังสินค้า
                  <span class="d-block text-muted pt-2 font-size-sm">ประเภทคลังสินค้า</span>
                </h3>
              </div>
              <div class="card-toolbar">
                <a href="stock_add.php" class="btn btn-success font-weight-bolder">
                  <i class="fas fa-plus mr-2"></i>เพิ่มสินค้า
                </a>
              </div>
            </div>
            <div class="card-body">
              <div class="mb-7">
                <div class="row align-items-center">
                  <div class="col-lg-9 col-xl-8">
                    <div class="row align-items-center">
                      <div class="col-md-4 my-2 my-md-0">
                        <div class="input-icon">
                          <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                          <span><i class="flaticon2-search-1 text-muted"></i></span>
                        </div>
                      </div>

                      <div class="col-md-4 my-2 my-md-0">
                        <div class="d-flex align-items-center">
                          <label class="mr-3 mb-0 d-none d-md-block">Status:</label>
                          <select class="form-control" id="kt_datatable_search_status">
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
                          <label class="mr-3 mb-0 d-none d-md-block">Type:</label>
                          <select class="form-control" id="kt_datatable_search_type">
                            <option value="">All</option>
                            <option value="1">Online</option>
                            <option value="2">Retail</option>
                            <option value="3">Direct</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                    <a href="#" class="btn btn-light-primary px-6 font-weight-bold">
                      Search
                    </a>
                  </div>
                </div>
              </div>
              <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable"></div>
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

<script src="assets/js/pages/custom/user/list-datatable.js?v=7.0.6"></script>

