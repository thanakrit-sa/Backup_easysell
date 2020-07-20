<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid">
  <div class="subheader py-2 py-lg-12 subheader-transparent">
    <div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">Facebook Chatbot</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="javascript:;" class="text-white text-hover-white opacity-75 hover-opacity-100">ฟังก์ชั่นการทำงาน</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="javascript:;" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook</a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="facebook_chatbot.php" class="text-white text-hover-white opacity-75 hover-opacity-100">Facebook Chatbot</a>
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
            <h4 class="card-label">Chatbot (ใช้กับทุก Pages)</h4>
          </div>
        </div>
        <form class="form">
          <div class="card-body">
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