<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
  <div class="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
    <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">ข้อมูลส่วนตัว</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="profile.php" class="text-white text-hover-white opacity-75 hover-opacity-100">ข้อมูลส่วนตัว</a>
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
                <h4 class="card-label">ข้อมูลส่วนตัว</h4>
              </div>
            </div>

            <form class="form">
              <div class="card-body">
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">รูปภาพ</label>
                  <div class="col-lg-10 col-xl-6">
                    <div class="image-input image-input-outline" id="kt_profile_avatar" style="background-image: url(assets/media/users/blank.png)">
                      <div class="image-input-wrapper" style="background-image: url(assets/media/users/300_21.jpg)"></div>

                      <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                        <i class="fa fa-pen icon-sm text-muted"></i>
                        <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg"/>
                        <input type="hidden" name="profile_avatar_remove"/>
                      </label>

                      <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                        <i class="ki ki-bold-close icon-xs text-muted"></i>
                      </span>

                      <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                        <i class="ki ki-bold-close icon-xs text-muted"></i>
                      </span>
                    </div>
                    <span class="form-text text-muted">Allowed file types:  png, jpg, jpeg.</span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">ชื่อ</label>
                  <div class="col-lg-10 col-xl-6">
                    <input class="form-control" type="text" value="Nick"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">นามสกุล</label>
                  <div class="col-lg-10 col-xl-6">
                    <input class="form-control" type="text" value="Bold"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">เบอร์โทรศัพท์</label>
                  <div class="col-lg-10 col-xl-6">
                    <input class="form-control" type="text" value="Loop Inc."/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-2 col-xl-2 col-form-label">อีเมล</label>
                  <div class="col-lg-10 col-xl-6">
                    <input class="form-control" type="text" value="Loop Inc."/>
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

