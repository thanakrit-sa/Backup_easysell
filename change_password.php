<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
  <div class="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
    <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">เปลี่ยนรหัสผ่าน</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="change_password.php" class="text-white text-hover-white opacity-75 hover-opacity-100">เปลี่ยนรหัสผ่าน</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex flex-column-fluid">
    <div class=" container ">
      <div class="d-flex flex-row">

        <?php include('include/inc-profile.php'); ?>

        <div class="flex-row-fluid ml-lg-8">
          <div class="card card-custom card-stretch">
            <div class="card-header py-3">
              <div class="card-title">
                <h4 class="card-label">เปลี่ยนรหัสผ่าน</h4>
              </div>
            </div>

            <form class="form">
              <div class="card-body">
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">รหัสผ่านเก่า</label>
                  <div class="col-lg-10 col-xl-6">
                    <input type="password" class="form-control" placeholder="รหัสผ่านเก่า" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">รหัสผ่านใหม่</label>
                  <div class="col-lg-10 col-xl-6">
                    <input type="password" class="form-control" placeholder="รหัสผ่านใหม่" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">ยืนยันรหัสผ่านใหม่</label>
                  <div class="col-lg-10 col-xl-6">
                    <input type="password" class="form-control" placeholder="ยืนยันรหัสผ่านใหม่" />
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary mr-2">บันทึกข้อมูล</button>
                <button type="reset" class="btn btn-light-danger">ยกเลิก</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php
include('include/inc-footer.php');
?>

