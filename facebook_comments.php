<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid">
  <div class="subheader py-2 py-lg-12 subheader-transparent">
    <div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">Facebook Comments</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="javascript:;" class="text-white text-hover-white opacity-75 hover-opacity-100">ฟังก์ชั่นการทำงาน</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="javascript:;" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="facebook_comments.php" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook Comments</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex flex-column-fluid">
    <div class="container">
      <div class="card card-custom gutter-b">
        <div class="card-header">
          <div class="card-title">
            <h4 class="card-label">Comments (ใช้กับทุก Pages)</h4>
          </div>
        </div>
        <form class="form">
          <div class="card-body">
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
          </div>
          <div class="card-footer">
            <button type="reset" class="btn btn-primary mr-2">บันทึกข้อมูล</button>
            <button type="reset" class="btn btn-light-danger">ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<?php
include('include/inc-footer.php');
?>

<script src="assets/js/pages/crud/forms/widgets/tagify.js?v=7.0.6"></script>