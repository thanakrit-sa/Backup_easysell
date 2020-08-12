<div id="kt_header_mobile" class="header-mobile">
  <a href="dashboard.php">
    <img alt="Logo" src="assets/media/logos/logo-letter-1.png" class="logo-default max-h-30px"/>
  </a>

  <div class="d-flex align-items-center">
    <button class="btn p-0 burger-icon burger-icon-left ml-4" id="kt_header_mobile_toggle"><span></span></button>
    <button class="btn btn-icon btn-hover-transparent-white p-0 ml-3" id="kt_header_mobile_topbar_toggle">
      <i class="fas fa-user-alt icon-xl"></i>
    </button>
  </div>
</div>

<div id="kt_header" class="header header-fixed">
  <div class="container d-flex align-items-stretch justify-content-between">
    <div class="d-flex align-items-stretch mr-3">
      <div class="header-logo">
        <a href="dashboard.php">
          <img alt="Logo" src="assets/media/logos/logo-letter-9.png" class="logo-default max-h-40px"/>
          <img alt="Logo" src="assets/media/logos/logo-letter-1.png" class="logo-sticky max-h-40px"/>
        </a>
      </div>

      <div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
        <div id="kt_header_menu" class="header-menu header-menu-left header-menu-mobile header-menu-layout-default" >
          <ul class="menu-nav">
            <li class="menu-item" aria-haspopup="true">
              <a href="dashboard.php" class="menu-link">
                <span class="menu-text">หน้าแรก</span>
              </a>
            </li>

            <li class="menu-item" aria-haspopup="true">
              <a href="warehouse.php" class="menu-link">
                <span class="menu-text">คลังสินค้า</span>
              </a>
            </li>

            <li class="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
              <a href="javascript:;" class="menu-link menu-toggle text-hover-primary">
                <span class="menu-text">ร้านค้า</span>
                <span class="menu-desc"></span>
                <i class="menu-arrow"></i>
              </a>
              <div class="menu-submenu menu-submenu-classic menu-submenu-left">
                <ul class="menu-subnav">
                  <li class="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                    <a href="javascript:;" class="menu-link menu-toggle text-hover-primary">
                      <span class="svg-icon menu-icon">
                        <i class="socicon-facebook mr-2"></i>
                      </span>
                      <span class="menu-text">Facebook</span><i class="menu-arrow"></i>
                    </a>
                    <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                      <ul class="menu-subnav">
                        <li class="menu-item" aria-haspopup="true">
                          <a href="facebook_pages.php" class="menu-link">
                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                            <span class="menu-text">Facebook Pages</span>
                          </a>
                        </li>
                        <li class="menu-item" aria-haspopup="true">
                          <a href="facebook_chatbot.php" class="menu-link">
                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                            <span class="menu-text">Chatbot (ใช้กับทุก Pages)</span>
                          </a>
                        </li>
                        <li class="menu-item" aria-haspopup="true">
                          <a href="facebook_comments.php" class="menu-link">
                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                            <span class="menu-text">Comments (ใช้กับทุก Pages)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                    <a href="javascript:;" class="menu-link menu-toggle text-hover-primary">
                      <span class="svg-icon menu-icon">
                        <i class="socicon-line mr-2"></i>
                      </span>
                      <span class="menu-text">Line</span><i class="menu-arrow"></i>
                    </a>
                    <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                      <ul class="menu-subnav">
                        <li class="menu-item" aria-haspopup="true">
                          <a href="features/bootstrap/typography.html" class="menu-link">
                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                            <span class="menu-text">Typography</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                    <a href="javascript:;" class="menu-link menu-toggle text-hover-primary">
                      <span class="svg-icon menu-icon">
                        <i class="socicon-instagram mr-2"></i>
                      </span>
                      <span class="menu-text">Instagram</span><i class="menu-arrow"></i>
                    </a>
                    <div class="menu-submenu menu-submenu-classic menu-submenu-right">
                      <ul class="menu-subnav">
                        <li class="menu-item" aria-haspopup="true">
                          <a href="features/bootstrap/typography.html" class="menu-link">
                            <i class="menu-bullet menu-bullet-dot"><span></span></i>
                            <span class="menu-text">Typography</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-item" aria-haspopup="true">
              <a href="broadcast.php" class="menu-link">
                <span class="menu-text">บรอดแคสต์</span>
              </a>
            </li>

            <li class="menu-item" aria-haspopup="true">
              <a href="package.php" class="menu-link">
                <span class="menu-text">แพ็คเกจ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="topbar">
      <div class="dropdown">
        <div class="topbar-item">
          <a href="live_chat.php" class="btn btn-icon btn-hover-transparent-white mr-2 pulse pulse-warning" data-toggle="tooltip" data-placement="bottom" title="รายการแชทรวม">
            <i class="fas fa-globe icon-lg"></i>
            <span class="pulse-ring"></span>
          </a>

          <a href="list_order.php" class="btn btn-icon btn-hover-transparent-white mr-6 pulse pulse-danger" data-toggle="tooltip" data-placement="bottom" title="รายการสั่งซื้อสินค้า">
            <i class="fas fa-clipboard-list icon-lg"></i>
            <span class="pulse-ring"></span>
          </a>
        </div>
      </div>

      <div class="dropdown">
        <a href="javascript:;" class="d-flex topbar-item" data-toggle="dropdown">
          <div class="d-flex flex-column text-right">
            <span class="text-muted font-weight-bold">Admin</span>
            <span class="text-white font-weight-bold">Nick Stone</span>
          </div>
          <div class="symbol symbol-circle symbol-50 ml-3">
            <img alt="Pic" src="assets/media/users/300_21.jpg">
          </div>
        </a>

        <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
          <div class="d-flex flex-column-fluid align-items-center px-5 py-7">
            <div class="col-8 p-0">
              <div class="d-flex flex-column-fluid align-items-center">
                <div class="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
                  <img src="assets/media/users/300_21.jpg" alt=""/>
                </div>
                <div class="d-flex flex-column">
                  <span class="text-muted font-weight-bold">Admin</span>
                  <span class="text-primary font-weight-bold">Nick Stone</span>
                </div>
              </div>
            </div>
            <div class="col-4 text-right p-0">
              <a href="index.php" class="btn btn-light-danger font-weight-bold font-size-sm mt-2">ออกจากระบบ</a>
            </div>
          </div>
          <div class="separator separator-solid"></div>
          <div class="row row-paddingless">
            <div class="col-6">
              <a href="#" class="d-block py-10 px-5 text-center text-dark-75 text-hover-white bg-hover-warning border-right border-bottom">
                <i class="fas fa-clock icon-2x"></i>
                <span class="d-block font-weight-bold font-size-h6 mt-4 mb-2">ระยะเวลาใช้งาน</span>
              </a>
            </div>
            <div class="col-6">
              <a href="profile.php" class="d-block py-10 px-5 text-center text-dark-75 text-hover-white bg-hover-success border-right border-bottom">
                <i class="fas fa-user-alt icon-2x"></i>
                <span class="d-block font-weight-bold font-size-h6 mt-4 mb-2">ข้อมูลส่วนตัว</span>
              </a>
            </div>
            <div class="col-6">
              <a href="recommend.php" class="d-block py-10 px-5 text-center text-dark-75 text-hover-white bg-hover-primary border-right border-bottom">
                <i class="fas fa-book icon-2x"></i>
                <span class="d-block font-weight-bold font-size-h6 mt-4 mb-2">แนะนำวิธีใช้งาน</span>
              </a>
            </div>
            <div class="col-6">
              <a href="feedback.php" class="d-block py-10 px-5 text-center text-dark-75 text-hover-white bg-hover-info border-right border-bottom">
                <i class="fas fa-info-circle icon-2x"></i>
                <span class="d-block font-weight-bold font-size-h6 mt-4 mb-2">แจ้งปัญหาใช้งาน</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>