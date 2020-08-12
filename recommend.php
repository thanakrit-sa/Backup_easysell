<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
  <div class="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
    <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">แนะนำวิธีใช้งาน</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="recommend.php" class="text-white text-hover-white opacity-75 hover-opacity-100">แนะนำวิธีใช้งาน</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex flex-column-fluid">
    <div class="container">
      <div class="card card-custom gutter-b">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-3">
              <ul class="navi navi-link-rounded navi-accent navi-hover navi-active nav flex-column mb-8 mb-lg-0" role="tablist">
                <li class="navi-item mb-2">
                  <a class="navi-link" data-toggle="tab" href="#" >
                    <span class="navi-text text-dark-50 font-size-h5 font-weight-bold">Buying</span>
                  </a>
                </li>
                <li class="navi-item mb-2">
                  <a class="navi-link active" data-toggle="tab" href="#" >
                    <span class="navi-text text-dark font-size-h5 font-weight-bold">Product Support</span>
                  </a>
                </li>
                <li class="navi-item mb-2">
                  <a class="navi-link" data-toggle="tab" href="#" >
                    <span class="navi-text text-dark-50 font-size-h5 font-weight-bold">Account Management</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-9">
              <div class="tab-content">
                <div class="accordion accordion-light accordion-light-borderless accordion-svg-toggle" id="faq">
                  <div class="card">
                    <div class="card-header" id="faqHeading1">
                      <a class="card-title text-dark" data-toggle="collapse" href="#faq1" aria-expanded="true" aria-controls="faq1"  role="button">
                        <span class="svg-icon"><i class="fas fa-angle-double-right text-primary"></i></span>
                        <div class="card-label text-dark pl-4">How does it work?</div>
                      </a>
                    </div>
                    <div id="faq1" class="collapse show" aria-labelledby="faqHeading1" data-parent="#faq">
                      <div class="card-body text-dark-50 font-size-lg pl-12">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>

                  <div class="card border-top-0">
                    <div class="card-header" id="faqHeading2">
                      <a class="card-title collapsed text-dark" data-toggle="collapse" href="#faq2" aria-expanded="false" aria-controls="faq2" role="button">
                        <span class="svg-icon"><i class="fas fa-angle-double-right text-primary"></i></span>
                        <div class="card-label text-dark pl-4">Do I need a designer to use Metronic?</div>
                      </a>
                    </div>
                    <div id="faq2" class="collapse" aria-labelledby="faqHeading2" data-parent="#faq">
                      <div class="card-body text-dark-50 font-size-lg pl-12">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>

                  <div class="card border-top-0">
                    <div class="card-header" id="faqHeading3">
                      <div class="card-title collapsed text-dark" data-toggle="collapse" data-target="#faq3" aria-expanded="false" aria-controls="faq3" role="button">
                        <span class="svg-icon"><i class="fas fa-angle-double-right text-primary"></i></span>
                        <div class="card-label text-dark pl-4">What do I need to do to start selling?</div>
                      </div>
                    </div>
                    <div id="faq3" class="collapse" aria-labelledby="faqHeading3" data-parent="#faq">
                      <div class="card-body text-dark-50 font-size-lg pl-12">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
  </div>
</div>

<?php
include('include/inc-footer.php');
?>
