<?php include('include/inc-header.php'); ?>

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
  <div class="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
    <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div class="d-flex align-items-center flex-wrap mr-1">
        <div class="d-flex flex-column">
          <h2 class="text-white font-weight-bold my-2 mr-5">รายการแชทรวม</h2>
          <div class="d-flex align-items-center font-weight-bold my-2">
            <a href="dashboard.php" class="opacity-75 hover-opacity-100"><i class="flaticon2-shelter text-white icon-1x"></i></a>
            <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
            <a href="live_chat.php" class="text-white text-hover-white opacity-75 hover-opacity-100">รายการแชทรวม</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="d-flex flex-column-fluid">
    <div class="container">
      <div class="d-flex flex-row">
        <div class="flex-row-auto offcanvas-mobile w-350px w-xl-400px" id="kt_chat_aside">
          <div class="card card-custom">
            <div class="card-body">
              <div class="input-group input-group-solid">
                <div class="input-group-prepend">
                  <span class="input-group-text" >
                   <i class="fas fa-search"></i>
                 </span>
               </div>
               <input type="text" class="form-control py-4 h-auto" placeholder="Email" />
             </div>

             <div class="mt-7 scroll scroll-pull">
              <div class="d-flex align-items-center justify-content-between mb-5">
                <div class="d-flex align-items-center">
                  <div class="symbol symbol-circle symbol-50 mr-3">
                    <img alt="Pic" src="assets/media/users/300_12.jpg"/>
                  </div>
                  <div class="d-flex flex-column">
                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Matt Pears</a>
                    <span class="text-muted font-weight-bold font-size-sm">Head of Development</span>
                  </div>
                </div>

                <div class="d-flex flex-column align-items-end">
                  <span class="text-muted font-weight-bold font-size-sm">35 mins</span>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-5">
                <div class="d-flex align-items-center">
                  <div class="symbol symbol-circle symbol-50 mr-3">
                    <img alt="Pic" src="assets/media/users/300_11.jpg"/>
                  </div>
                  <div class="d-flex flex-column">
                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Charlie Stone</a>
                    <span class="text-muted font-weight-bold font-size-sm">Art Director</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-end">
                  <span class="text-muted font-weight-bold font-size-sm">7 hrs</span>
                  <span class="label label-sm label-success">4</span>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-5">
                <div class="d-flex align-items-center">
                  <div class="symbol symbol-circle symbol-50 mr-3">
                    <img alt="Pic" src="assets/media/users/300_10.jpg"/>
                  </div>
                  <div class="d-flex flex-column">
                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Teresa Fox</a>
                    <span class="text-muted font-weight-bold font-size-sm">Web Designer</span>
                  </div>
                </div>

                <div class="d-flex flex-column align-items-end">
                  <span class="text-muted font-weight-bold font-size-sm">3 hrs</span>
                  <span class="label label-sm label-danger">5</span>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-5">
                <div class="d-flex align-items-center">
                  <div class="symbol symbol-circle symbol-50 mr-3">
                    <img alt="Pic" src="assets/media/users/300_13.jpg"/>
                  </div>
                  <div class="d-flex flex-column">
                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Giannis Nelson</a>
                    <span class="text-muted font-weight-bold font-size-sm">IT Consultant</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-end">
                  <span class="text-muted font-weight-bold font-size-sm">2 days</span>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-5">
                <div class="d-flex align-items-center">
                  <div class="symbol symbol-circle symbol-50 mr-3">
                    <img alt="Pic" src="assets/media/users/300_15.jpg"/>
                  </div>
                  <div class="d-flex flex-column">
                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Carles Puyol</a>
                    <span class="text-muted font-weight-bold font-size-sm">Operator</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-end">
                  <span class="text-muted font-weight-bold font-size-sm">5 mins</span>
                  <span class="label label-sm label-success">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-row-fluid ml-lg-8" id="kt_chat_content">
        <div class="card card-custom">
          <div class="card-header align-items-center px-4 py-3">
            <div class="text-left flex-grow-1">
              <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md d-lg-none" id="kt_app_chat_toggle">
                <i class="fas fa-address-book icon-lg"></i>
              </button>
            </div>
            <div class="text-center flex-grow-1">
              <div class="text-dark-75 font-weight-bold font-size-h5">Matt Pears</div>
              <div>
                <span class="label label-sm label-dot label-success"></span>
                <span class="font-weight-bold text-muted font-size-sm">Active</span>
              </div>
            </div>
            <div class="text-right flex-grow-1">&nbsp;</div>
          </div>

          <div class="card-body">
            <div class="scroll scroll-pull" data-mobile-height="350">
              <div class="messages">
                <div class="d-flex flex-column mb-5 align-items-start">
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-circle symbol-40 mr-3">
                      <img alt="Pic" src="assets/media/users/300_12.jpg"/>
                    </div>
                    <div>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                      <span class="text-muted font-size-sm">2 Hours</span>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                    How likely are you to recommend our company
                    to your friends and family?
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-end">
                  <div class="d-flex align-items-center">
                    <div>
                      <span class="text-muted font-size-sm">3 minutes</span>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                    </div>
                    <div class="symbol symbol-circle symbol-40 ml-3">
                      <img alt="Pic" src="assets/media/users/300_21.jpg"/>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                    Hey there, we’re just writing to let you know
                    that you’ve been subscribed to a repository on GitHub.
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-start">
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-circle symbol-40 mr-3">
                      <img alt="Pic" src="assets/media/users/300_21.jpg"/>
                    </div>
                    <div>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                      <span class="text-muted font-size-sm">40 seconds</span>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                    Ok, Understood!
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-end">
                  <div class="d-flex align-items-center">
                    <div>
                      <span class="text-muted font-size-sm">Just now</span>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                    </div>
                    <div class="symbol symbol-circle symbol-40 ml-3">
                      <img alt="Pic" src="assets/media/users/300_21.jpg"/>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                    You’ll receive notifications for all issues, pull requests!
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-start">
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-circle symbol-40 mr-3">
                      <img alt="Pic" src="assets/media/users/300_12.jpg"/>
                    </div>
                    <div>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                      <span class="text-muted font-size-sm">40 seconds</span>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                    You can unwatch this repository immediately by clicking here: <a href="#">https://github.com</a>
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-end">
                  <div class="d-flex align-items-center">
                    <div>
                      <span class="text-muted font-size-sm">Just now</span>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                    </div>
                    <div class="symbol symbol-circle symbol-40 ml-3">
                      <img alt="Pic" src="assets/media/users/300_21.jpg"/>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                    Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-start">
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-circle symbol-40 mr-3">
                      <img alt="Pic" src="assets/media/users/300_12.jpg"/>
                    </div>
                    <div>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                      <span class="text-muted font-size-sm">40 seconds</span>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                    Most purchased Business courses during this sale!
                  </div>
                </div>

                <div class="d-flex flex-column mb-5 align-items-end">
                  <div class="d-flex align-items-center">
                    <div>
                      <span class="text-muted font-size-sm">Just now</span>
                      <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                    </div>
                    <div class="symbol symbol-circle symbol-40 ml-3">
                      <img alt="Pic" src="assets/media/users/300_21.jpg"/>
                    </div>
                  </div>
                  <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                    Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer align-items-center">
            <textarea class="form-control border-0 p-0" rows="2" placeholder="Type a message"></textarea>
            <div class="d-flex align-items-center justify-content-between mt-5">
              <div class="mr-3">
                <a href="#" class="btn btn-clean btn-icon btn-md mr-1"><i class="flaticon2-photograph icon-lg"></i></a>
                <a href="#" class="btn btn-clean btn-icon btn-md"><i class="flaticon2-photo-camera  icon-lg"></i></a>
              </div>
              <div>
                <button type="button" class="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
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

<script src="assets/js/pages/custom/chat/chat.js?v=7.0.6"></script>
