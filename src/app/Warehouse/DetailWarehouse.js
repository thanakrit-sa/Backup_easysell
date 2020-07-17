import React, { Component } from 'react'
import DetailCard from './Detail/DetailCard'
import ListCard from './ListProduct/ListCard'
import AddProd from './AddProduct/AddProd'
import ConfigCard from './ConfigWarehouse/ConfigCard'

export default class DetailWarehouse extends Component {
    render() {
        return (
            <>
                {/* begin::Card*/}
                <div class="card card-custom">
                    <div class="card-header flex-wrap border-0 pt-6 pb-0">
                        <div class="card-title">
                            <h3 class="card-label">Remote Datasource
											<span class="d-block text-muted pt-2 font-size-sm">Sorting &amp; pagination remote datasource</span></h3>
                        </div>
                        <div class="card-toolbar">
                            {/*begin::Dropdown*/}
                            <div class="dropdown dropdown-inline mr-2">
                                <button type="button" class="btn btn-light-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    Export</button>
                                {/*begin::Dropdown Menu*/}
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    {/*begin::Navigation*/}
                                    <ul class="navi flex-column navi-hover py-2">
                                        <li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">Choose an option:</li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-icon">
                                                    <i class="la la-print"></i>
                                                </span>
                                                <span class="navi-text">Print</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-icon">
                                                    <i class="la la-copy"></i>
                                                </span>
                                                <span class="navi-text">Copy</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-icon">
                                                    <i class="la la-file-excel-o"></i>
                                                </span>
                                                <span class="navi-text">Excel</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-icon">
                                                    <i class="la la-file-text-o"></i>
                                                </span>
                                                <span class="navi-text">CSV</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a href="#" class="navi-link">
                                                <span class="navi-icon">
                                                    <i class="la la-file-pdf-o"></i>
                                                </span>
                                                <span class="navi-text">PDF</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end::Navigation*/}
                                </div>
                                {/*end::Dropdown Menu*/}
                            </div>
                            {/*end::Dropdown*/}
                            {/*begin::Button*/}
                            <a href="#" class="btn btn-primary font-weight-bolder">
                                New Record</a>
                            {/*end::Button*/}
                        </div>
                    </div>
                    <div class="card-body">
                        {/*begin: Search Form*/}
                        {/*begin::Search Form*/}
                        <div class="mb-7">
                            <div class="row align-items-center">
                                <div class="col-lg-9 col-xl-8">
                                    <div class="row align-items-center">
                                        <div class="col-md-4 my-2 my-md-0">
                                            <div class="input-icon">
                                                <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                                                <span>
                                                    <i class="flaticon2-search-1 text-muted"></i>
                                                </span>
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
                                    <a href="#" class="btn btn-light-primary px-6 font-weight-bold">Search</a>
                                </div>
                            </div>
                        </div>
                        {/*end::Search Form*/}
                        {/*end: Search Form*/}
                        {/*begin: Datatable*/}
                        <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable"></div>
                        {/*end: Datatable*/}
                    </div>
                </div>

                <div class="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
                    {/*begin::Container*/}
                    <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                        {/*begin::Copyright*/}
                        <div class="text-dark order-2 order-md-1">
                            <span class="text-muted font-weight-bold mr-2">2020©</span>
                            <a href="http://keenthemes.com/metronic" target="_blank" class="text-dark-75 text-hover-primary">Keenthemes</a>
                        </div>
                        {/*end::Copyright*/}
                        {/*begin::Nav*/}
                        <div class="nav nav-dark">
                            <a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-0 pr-5">About</a>
                            <a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-0 pr-5">Team</a>
                            <a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-0 pr-0">Contact</a>
                        </div>
                        {/*end::Nav*/}
                    </div>
                    {/*end::Container*/}
                </div>

                <div id="kt_quick_user" class="offcanvas offcanvas-right p-10">
                    {/*begin::Header*/}
                    <div class="offcanvas-header d-flex align-items-center justify-content-between pb-5">
                        <h3 class="font-weight-bold m-0">User Profile
				<small class="text-muted font-size-sm ml-2">12 messages</small></h3>
                        <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
                            <i class="ki ki-close icon-xs text-muted"></i>
                        </a>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Content*/}
                    <div class="offcanvas-content pr-5 mr-n5">
                        {/*begin::Header*/}
                        <div class="d-flex align-items-center mt-5">
                            <div class="symbol symbol-100 mr-5">
                                <div class="symbol-label" style="background-image:url('assets/media/users/300_21.jpg')"></div>
                                <i class="symbol-badge bg-success"></i>
                            </div>
                            <div class="d-flex flex-column">
                                <a href="#" class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
                                <div class="text-muted mt-1">Application Developer</div>
                                <div class="navi mt-2">
                                    <a href="#" class="navi-item">
                                        <span class="navi-link p-0 pb-2">
                                            <span class="navi-icon mr-1">
                                                <span class="svg-icon svg-icon-lg svg-icon-primary">
                                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg*/}

                                                </span>
                                            </span>
                                            <span class="navi-text text-muted text-hover-primary">jm@softplus.com</span>
                                        </span>
                                    </a>
                                    <a href="#" class="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign Out</a>
                                </div>
                            </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Separator*/}
                        <div class="separator separator-dashed mt-8 mb-5"></div>
                        {/*end::Separator*/}
                        {/*begin::Nav*/}
                        <div class="navi navi-spacer-x-0 p-0">
                            {/*begin::Item*/}
                            <a href="custom/apps/user/profile-1/personal-information.html" class="navi-item">
                                <div class="navi-link">
                                    <div class="symbol symbol-40 bg-light mr-3">
                                        <div class="symbol-label">

                                        </div>
                                    </div>
                                    <div class="navi-text">
                                        <div class="font-weight-bold">My Profile</div>
                                        <div class="text-muted">Account settings and more
								<span class="label label-light-danger label-inline font-weight-bold">update</span></div>
                                    </div>
                                </div>
                            </a>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <a href="custom/apps/user/profile-3.html" class="navi-item">
                                <div class="navi-link">
                                    <div class="symbol symbol-40 bg-light mr-3">
                                        <div class="symbol-label">

                                        </div>
                                    </div>
                                    <div class="navi-text">
                                        <div class="font-weight-bold">My Messages</div>
                                        <div class="text-muted">Inbox and tasks</div>
                                    </div>
                                </div>
                            </a>
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <a href="custom/apps/user/profile-2.html" class="navi-item">
                                <div class="navi-link">
                                    <div class="symbol symbol-40 bg-light mr-3">
                                        <div class="symbol-label">

                                        </div>
                                    </div>
                                    <div class="navi-text">
                                        <div class="font-weight-bold">My Activities</div>
                                        <div class="text-muted">Logs and notifications</div>
                                    </div>
                                </div>
                            </a >
                            {/*end:Item*/}
                            {/*begin::Item*/}
                            <a href="custom/apps/userprofile-1/overview.html" class="navi-item">
                                <div class="navi-link">
                                    <div class="symbol symbol-40 bg-light mr-3">
                                        <div class="symbol-label">

                                        </div>
                                    </div>
                                    <div class="navi-text">
                                        <div class="font-weight-bold">My Tasks</div>
                                        <div class="text-muted">latest tasks and projects</div>
                                    </div>
                                </div>
                            </a >
                            {/*end:Item*/}
                        </div >
                        {/*end::Nav*/}
                        {/*begin::Separator*/}
                        <div class="separator separator-dashed my-7"></div>
                        {/*end::Separator*/}
                        {/*begin::Notifications*/}
                        <div>
                            {/*begin:Heading*/}
                            <h5 class="mb-5">Recent Notifications</h5>
                            {/*end:Heading*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">


                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Another purpose persuade</a>
                                    <span class="text-muted font-size-sm">Due in 2 Days</span>
                                </div>
                                <span class="font-weight-bolder text-warning py-1 font-size-lg">+28%</span>
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center bg-light-success rounded p-5 gutter-b">

                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Would be to people</a>
                                    <span class="text-muted font-size-sm">Due in 2 Days</span>
                                </div>
                                <span class="font-weight-bolder text-success py-1 font-size-lg">+50%</span>
                            </div >
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">

                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" class="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">Purpose would be to persuade</a>
                                    <span class="text-muted font-size-sm">Due in 2 Days</span>
                                </div>
                                <span class="font-weight-bolder text-danger py-1 font-size-lg">-27%</span>
                            </div >
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center bg-light-info rounded p-5">

                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <a href="#" class="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">The best product</a>
                                    <span class="text-muted font-size-sm">Due in 2 Days</span>
                                </div>
                                <span class="font-weight-bolder text-info py-1 font-size-lg">+8%</span>
                            </div >
                            {/*end::Item*/}
                        </div >
                        {/*end::Notifications*/}
                    </div >
                    {/*end::Content*/}
                </div >
                {/* end::User Panel*/}
                {/*begin::Quick Cart*/}
                <div id="kt_quick_cart" class="offcanvas offcanvas-right p-10">
                    {/*begin::Header*/}
                    <div class="offcanvas-header d-flex align-items-center justify-content-between pb-7">
                        <h4 class="font-weight-bold m-0">Shopping Cart</h4>
                        <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_cart_close">
                            <i class="ki ki-close icon-xs text-muted"></i>
                        </a>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Content*/}
                    <div class="offcanvas-content">
                        {/*begin::Wrapper*/}
                        <div class="offcanvas-wrapper mb-5 scroll-pull">
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center justify-content-between py-8">
                                <div class="d-flex flex-column mr-2">
                                    <a href="#" class="font-weight-bold text-dark-75 font-size-lg text-hover-primary">iBlender</a>
                                    <span class="text-muted">The best kitchen gadget in 2020</span>
                                    <div class="d-flex align-items-center mt-2">
                                        <span class="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 350</span>
                                        <span class="text-muted mr-1">for</span>
                                        <span class="font-weight-bold mr-2 text-dark-75 font-size-lg">5</span>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon mr-2">
                                            <i class="ki ki-minus icon-xs"></i>
                                        </a>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon">
                                            <i class="ki ki-plus icon-xs"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="symbol symbol-70 flex-shrink-0">
                                    <img src="assets/media/stock-600x400/img-1.jpg" title="" alt="" />
                                </a>
                            </div>
                            {/*end::Item*/}
                            {/*begin::Separator*/}
                            <div class="separator separator-solid"></div>
                            {/*end::Separator*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center justify-content-between py-8">
                                <div class="d-flex flex-column mr-2">
                                    <a href="#" class="font-weight-bold text-dark-75 font-size-lg text-hover-primary">SmartCleaner</a>
                                    <span class="text-muted">Smart tool for cooking</span>
                                    <div class="d-flex align-items-center mt-2">
                                        <span class="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                                        <span class="text-muted mr-1">for</span>
                                        <span class="font-weight-bold mr-2 text-dark-75 font-size-lg">4</span>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon mr-2">
                                            <i class="ki ki-minus icon-xs"></i>
                                        </a>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon">
                                            <i class="ki ki-plus icon-xs"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="symbol symbol-70 flex-shrink-0">
                                    <img src="assets/media/stock-600x400/img-2.jpg" title="" alt="" />
                                </a>
                            </div>
                            {/*end::Item*/}
                            {/*begin::Separator*/}
                            <div class="separator separator-solid"></div>
                            {/*end::Separator*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center justify-content-between py-8">
                                <div class="d-flex flex-column mr-2">
                                    <a href="#" class="font-weight-bold text-dark-75 font-size-lg text-hover-primary">CameraMax</a>
                                    <span class="text-muted">Professional camera for edge cutting shots</span>
                                    <div class="d-flex align-items-center mt-2">
                                        <span class="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 150</span>
                                        <span class="text-muted mr-1">for</span>
                                        <span class="font-weight-bold mr-2 text-dark-75 font-size-lg">3</span>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon mr-2">
                                            <i class="ki ki-minus icon-xs"></i>
                                        </a>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon">
                                            <i class="ki ki-plus icon-xs"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="symbol symbol-70 flex-shrink-0">
                                    <img src="assets/media/stock-600x400/img-3.jpg" title="" alt="" />
                                </a>
                            </div>
                            {/*end::Item*/}
                            {/*begin::Separator*/}
                            <div class="separator separator-solid"></div>
                            {/*end::Separator*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center justify-content-between py-8">
                                <div class="d-flex flex-column mr-2">
                                    <a href="#" class="font-weight-bold text-dark text-hover-primary">4D Printer</a>
                                    <span class="text-muted">Manufactoring unique objects</span>
                                    <div class="d-flex align-items-center mt-2">
                                        <span class="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 1450</span>
                                        <span class="text-muted mr-1">for</span>
                                        <span class="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon mr-2">
                                            <i class="ki ki-minus icon-xs"></i>
                                        </a>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon">
                                            <i class="ki ki-plus icon-xs"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="symbol symbol-70 flex-shrink-0">
                                    <img src="assets/media/stock-600x400/img-4.jpg" title="" alt="" />
                                </a>
                            </div>
                            {/*end::Item*/}
                            {/*begin::Separator*/}
                            <div class="separator separator-solid"></div>
                            {/*end::Separator*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center justify-content-between py-8">
                                <div class="d-flex flex-column mr-2">
                                    <a href="#" class="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                                    <span class="text-muted">Perfect animation tool</span>
                                    <div class="d-flex align-items-center mt-2">
                                        <span class="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                                        <span class="text-muted mr-1">for</span>
                                        <span class="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon mr-2">
                                            <i class="ki ki-minus icon-xs"></i>
                                        </a>
                                        <a href="#" class="btn btn-xs btn-light-success btn-icon">
                                            <i class="ki ki-plus icon-xs"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="symbol symbol-70 flex-shrink-0">
                                    <img src="assets/media/stock-600x400/img-8.jpg" title="" alt="" />
                                </a>
                            </div>
                            {/*end::Item*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Purchase*/}
                        <div class="offcanvas-footer">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <span class="font-weight-bold text-muted font-size-sm mr-2">Total</span>
                                <span class="font-weight-bolder text-dark-50 text-right">$1840.00</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-7">
                                <span class="font-weight-bold text-muted font-size-sm mr-2">Sub total</span>
                                <span class="font-weight-bolder text-primary text-right">$5640.00</span>
                            </div>
                            <div class="text-right">
                                <button type="button" class="btn btn-primary text-weight-bold">Place Order</button>
                            </div>
                        </div>
                        {/*end::Purchase*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/*end::Quick Cart*/}
                {/*begin::Quick Panel*/}
                <div id="kt_quick_panel" class="offcanvas offcanvas-right pt-5 pb-10">
                    {/*begin::Header*/}
                    <div class="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
                        <ul class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#kt_quick_panel_logs">Audit Logs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#kt_quick_panel_notifications">Notifications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#kt_quick_panel_settings">Settings</a>
                            </li>
                        </ul>
                        <div class="offcanvas-close mt-n1 pr-5">
                            <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_panel_close">
                                <i class="ki ki-close icon-xs text-muted"></i>
                            </a>
                        </div>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Content*/}
                    <div class="offcanvas-content px-10">
                        <div class="tab-content">
                            {/*begin::Tabpane*/}
                            <div class="tab-pane fade show pt-3 pr-5 mr-n5 active" id="kt_quick_panel_logs" role="tabpanel">
                                {/*begin::Section*/}
                                <div class="mb-15">
                                    <h5 class="font-weight-bold mb-5">System Messages</h5>
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center flex-wrap mb-5">
                                        <div class="symbol symbol-50 symbol-light mr-5">
                                            <span class="symbol-label">
                                                <img src="assets/media/svg/misc/006-plurk.svg" class="h-50 align-self-center" alt="" />
                                            </span>
                                        </div>
                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Top Authors</a>
                                            <span class="text-muted font-weight-bold">Most Successful Fellas</span>
                                        </div>
                                        <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">+82$</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center flex-wrap mb-5">
                                        <div class="symbol symbol-50 symbol-light mr-5">
                                            <span class="symbol-label">
                                                <img src="assets/media/svg/misc/015-telegram.svg" class="h-50 align-self-center" alt="" />
                                            </span>
                                        </div>
                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Popular Authors</a>
                                            <span class="text-muted font-weight-bold">Most Successful Fellas</span>
                                        </div>
                                        <span class="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+280$</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center flex-wrap mb-5">
                                        <div class="symbol symbol-50 symbol-light mr-5">
                                            <span class="symbol-label">
                                                <img src="assets/media/svg/misc/003-puzzle.svg" class="h-50 align-self-center" alt="" />
                                            </span>
                                        </div>
                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">New Users</a>
                                            <span class="text-muted font-weight-bold">Most Successful Fellas</span>
                                        </div>
                                        <span class="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center flex-wrap mb-5">
                                        <div class="symbol symbol-50 symbol-light mr-5">
                                            <span class="symbol-label">
                                                <img src="assets/media/svg/misc/005-bebo.svg" class="h-50 align-self-center" alt="" />
                                            </span>
                                        </div>
                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Active Customers</a>
                                            <span class="text-muted font-weight-bold">Most Successful Fellas</span>
                                        </div>
                                        <span class="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center flex-wrap">
                                        <div class="symbol symbol-50 symbol-light mr-5">
                                            <span class="symbol-label">
                                                <img src="assets/media/svg/misc/014-kickstarter.svg" class="h-50 align-self-center" alt="" />
                                            </span>
                                        </div>
                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1">Bestseller Theme</a>
                                            <span class="text-muted font-weight-bold">Most Successful Fellas</span>
                                        </div>
                                        <span class="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">+4500$</span>
                                    </div>
                                    {/*end: Item*/}
                                </div>
                                {/*end::Section*/}
                                {/*begin::Section*/}
                                <div class="mb-5">
                                    <h5 class="font-weight-bold mb-5">Notifications</h5>
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center bg-light-warning rounded p-5 mb-5">

                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Another purpose persuade</a>
                                            <span class="text-muted font-size-sm">Due in 2 Days</span>
                                        </div>
                                        <span class="font-weight-bolder text-warning py-1 font-size-lg">+28%</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center bg-light-success rounded p-5 mb-5">

                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">Would be to people</a>
                                            <span class="text-muted font-size-sm">Due in 2 Days</span>
                                        </div>
                                        <span class="font-weight-bolder text-success py-1 font-size-lg">+50%</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center bg-light-danger rounded p-5 mb-5">

                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">Purpose would be to persuade</a>
                                            <span class="text-muted font-size-sm">Due in 2 Days</span>
                                        </div>
                                        <span class="font-weight-bolder text-danger py-1 font-size-lg">-27%</span>
                                    </div>
                                    {/*end: Item*/}
                                    {/*begin: Item*/}
                                    <div class="d-flex align-items-center bg-light-info rounded p-5">

                                        <div class="d-flex flex-column flex-grow-1 mr-2">
                                            <a href="#" class="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1">The best product</a>
                                            <span class="text-muted font-size-sm">Due in 2 Days</span>
                                        </div>
                                        <span class="font-weight-bolder text-info py-1 font-size-lg">+8%</span>
                                    </div>
                                    {/*end: Item*/}
                                </div>
                                {/*end::Section*/}
                            </div >
                            {/*end::Tabpane*/}
                            {/*begin::Tabpane*/}
                            <div class="tab-pane fade pt-2 pr-5 mr-n5" id="kt_quick_panel_notifications" role="tabpanel">
                                {/*begin::Nav*/}
                                <div class="navi navi-icon-circle navi-spacer-x-0">
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-bell text-success icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">5 new user generated report</div>
                                                <div class="text-muted">Reports based on sales</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon2-box text-danger icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">2 new items submited</div>
                                                <div class="text-muted">by Grog John</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-psd text-primary icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">79 PSD files generated</div>
                                                <div class="text-muted">Reports based on sales</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon2-supermarket text-warning icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">$2900 worth producucts sold</div>
                                                <div class="text-muted">Total 234 items</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-paper-plane-1 text-success icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">4.5h-avarage response time</div>
                                                <div class="text-muted">Fostest is Barry</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-safe-shield-protection text-danger icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">3 Defence alerts</div>
                                                <div class="text-muted">40% less alerts thar last week</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-notepad text-primary icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">Avarage 4 blog posts per author</div>
                                                <div class="text-muted">Most posted 12 time</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-users-1 text-warning icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">16 authors joined last week</div>
                                                <div class="text-muted">9 photodrapehrs, 7 designer</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon2-box text-info icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">2 new items have been submited</div>
                                                <div class="text-muted">by Grog John</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon2-download text-success icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">2.8 GB-total downloads size</div>
                                                <div class="text-muted">Mostly PSD end AL concepts</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon2-supermarket text-danger icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">$2900 worth producucts sold</div>
                                                <div class="text-muted">Total 234 items</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-bell text-primary icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">7 new user generated report</div>
                                                <div class="text-muted">Reports based on sales</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <a href="#" class="navi-item">
                                        <div class="navi-link rounded">
                                            <div class="symbol symbol-50 mr-3">
                                                <div class="symbol-label">
                                                    <i class="flaticon-paper-plane-1 text-success icon-lg"></i>
                                                </div>
                                            </div>
                                            <div class="navi-text">
                                                <div class="font-weight-bold font-size-lg">4.5h-avarage response time</div>
                                                <div class="text-muted">Fostest is Barry</div>
                                            </div>
                                        </div>
                                    </a>
                                    {/*end::Item*/}
                                </div>
                                {/*end::Nav*/}
                            </div>
                            {/*end::Tabpane*/}
                            {/*begin::Tabpane*/}
                            <div class="tab-pane fade pt-3 pr-5 mr-n5" id="kt_quick_panel_settings" role="tabpanel">
                                <form class="form">
                                    {/*begin::Section*/}
                                    <div>
                                        <h5 class="font-weight-bold mb-3">Customer Care</h5>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Enable Notifications:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-success switch-sm">
                                                    <label>
                                                        <input type="checkbox" checked="checked" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Enable Case Tracking:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-success switch-sm">
                                                    <label>
                                                        <input type="checkbox" name="quick_panel_notifications_2" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Support Portal:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-success switch-sm">
                                                    <label>
                                                        <input type="checkbox" checked="checked" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Section*/}
                                    <div class="separator separator-dashed my-6"></div>
                                    {/*begin::Section*/}
                                    <div class="pt-2">
                                        <h5 class="font-weight-bold mb-3">Reports</h5>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Generate Reports:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-sm switch-danger">
                                                    <label>
                                                        <input type="checkbox" checked="checked" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Enable Report Export:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-sm switch-danger">
                                                    <label>
                                                        <input type="checkbox" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Allow Data Collection:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-sm switch-danger">
                                                    <label>
                                                        <input type="checkbox" checked="checked" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Section*/}
                                    <div class="separator separator-dashed my-6"></div>
                                    {/*begin::Section*/}
                                    <div class="pt-2">
                                        <h5 class="font-weight-bold mb-3">Memebers</h5>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Enable Member singup:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-sm switch-primary">
                                                    <label>
                                                        <input type="checkbox" checked="checked" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Allow User Feedbacks:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-sm switch-primary">
                                                    <label>
                                                        <input type="checkbox" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row align-items-center">
                                            <label class="col-8 col-form-label">Enable Customer Portal:</label>
                                            <div class="col-4 d-flex justify-content-end">
                                                <span class="switch switch-sm switch-primary">
                                                    <label>
                                                        <input type="checkbox" checked="checked" name="select" />
                                                        <span></span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Section*/}
                                </form>
                            </div>
                            {/*end::Tabpane*/}

                            {/*end::Quick Panel*/}
                            {/*begin::Chat Panel*/}
                            <div class="modal modal-sticky modal-sticky-bottom-right" id="kt_chat_modal" role="dialog" data-backdrop="false">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        {/*begin::Card*/}
                                        <div class="card card-custom">
                                            {/*begin::Header*/}
                                            <div class="card-header align-items-center px-4 py-3">
                                                <div class="text-left flex-grow-1">
                                                    {/*begin::Dropdown Menu*/}
                                                    <div class="dropdown dropdown-inline">
                                                        <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                        </button>
                                                        <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                                                            {/*begin::Navigation*/}
                                                            <ul class="navi navi-hover py-5">
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-drop"></i>
                                                                        </span>
                                                                        <span class="navi-text">New Group</span>
                                                                    </a>
                                                                </li>
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-list-3"></i>
                                                                        </span>
                                                                        <span class="navi-text">Contacts</span>
                                                                    </a>
                                                                </li>
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-rocket-1"></i>
                                                                        </span>
                                                                        <span class="navi-text">Groups</span>
                                                                        <span class="navi-link-badge">
                                                                            <span class="label label-light-primary label-inline font-weight-bold">new</span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-bell-2"></i>
                                                                        </span>
                                                                        <span class="navi-text">Calls</span>
                                                                    </a>
                                                                </li>
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-gear"></i>
                                                                        </span>
                                                                        <span class="navi-text">Settings</span>
                                                                    </a>
                                                                </li>
                                                                <li class="navi-separator my-3"></li>
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-magnifier-tool"></i>
                                                                        </span>
                                                                        <span class="navi-text">Help</span>
                                                                    </a>
                                                                </li>
                                                                <li class="navi-item">
                                                                    <a href="#" class="navi-link">
                                                                        <span class="navi-icon">
                                                                            <i class="flaticon2-bell-2"></i>
                                                                        </span>
                                                                        <span class="navi-text">Privacy</span>
                                                                        <span class="navi-link-badge">
                                                                            <span class="label label-light-danger label-rounded font-weight-bold">5</span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            {/*end::Navigation*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Dropdown Menu*/}
                                                </div>
                                                <div class="text-center flex-grow-1">
                                                    <div class="text-dark-75 font-weight-bold font-size-h5">Matt Pears</div>
                                                    <div>
                                                        <span class="label label-dot label-success"></span>
                                                        <span class="font-weight-bold text-muted font-size-sm">Active</span>
                                                    </div>
                                                </div>
                                                <div class="text-right flex-grow-1">
                                                    <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-dismiss="modal">
                                                        <i class="ki ki-close icon-1x"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div class="card-body">
                                                {/*begin::Scroll*/}
                                                <div class="scroll scroll-pull" data-height="375" data-mobile-height="300">
                                                    {/*begin::Messages*/}
                                                    <div class="messages">
                                                        {/*begin::Message In*/}
                                                        <div class="d-flex flex-column mb-5 align-items-start">
                                                            <div class="d-flex align-items-center">
                                                                <div class="symbol symbol-circle symbol-40 mr-3">
                                                                    <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                                                </div>
                                                                <div>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                                    <span class="text-muted font-size-sm">2 Hours</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">How likely are you to recommend our company to your friends and family?</div>
                                                        </div>
                                                        {/*end::Message In*/}
                                                        {/*begin::Message Out*/}
                                                        <div class="d-flex flex-column mb-5 align-items-end">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <span class="text-muted font-size-sm">3 minutes</span>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                                </div>
                                                                <div class="symbol symbol-circle symbol-40 ml-3">
                                                                    <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                                        </div>
                                                        {/*end::Message Out*/}
                                                        {/*begin::Message In*/}
                                                        <div class="d-flex flex-column mb-5 align-items-start">
                                                            <div class="d-flex align-items-center">
                                                                <div class="symbol symbol-circle symbol-40 mr-3">
                                                                    <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                                </div>
                                                                <div>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                                    <span class="text-muted font-size-sm">40 seconds</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Ok, Understood!</div>
                                                        </div>
                                                        {/*end::Message In*/}
                                                        {/*begin::Message Out*/}
                                                        <div class="d-flex flex-column mb-5 align-items-end">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <span class="text-muted font-size-sm">Just now</span>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                                </div>
                                                                <div class="symbol symbol-circle symbol-40 ml-3">
                                                                    <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">You’ll receive notifications for all issues, pull requests!</div>
                                                        </div>
                                                        {/*end::Message Out*/}
                                                        {/*begin::Message In*/}
                                                        <div class="d-flex flex-column mb-5 align-items-start">
                                                            <div class="d-flex align-items-center">
                                                                <div class="symbol symbol-circle symbol-40 mr-3">
                                                                    <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                                                </div>
                                                                <div>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                                    <span class="text-muted font-size-sm">40 seconds</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">You can unwatch this repository immediately by clicking here:
										<a href="#">https://github.com</a></div>
                                                        </div>
                                                        {/*end::Message In*/}
                                                        {/*begin::Message Out*/}
                                                        <div class="d-flex flex-column mb-5 align-items-end">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <span class="text-muted font-size-sm">Just now</span>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                                </div>
                                                                <div class="symbol symbol-circle symbol-40 ml-3">
                                                                    <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed</div>
                                                        </div>
                                                        {/*end::Message Out*/}
                                                        {/*begin::Message In*/}
                                                        <div class="d-flex flex-column mb-5 align-items-start">
                                                            <div class="d-flex align-items-center">
                                                                <div class="symbol symbol-circle symbol-40 mr-3">
                                                                    <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                                                </div>
                                                                <div>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                                                    <span class="text-muted font-size-sm">40 seconds</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Most purchased Business courses during this sale!</div>
                                                        </div>
                                                        {/*end::Message In*/}
                                                        {/*begin::Message Out*/}
                                                        <div class="d-flex flex-column mb-5 align-items-end">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <span class="text-muted font-size-sm">Just now</span>
                                                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                                                </div>
                                                                <div class="symbol symbol-circle symbol-40 ml-3">
                                                                    <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                                                </div>
                                                            </div>
                                                            <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                                                        </div>
                                                        {/*end::Message Out*/}
                                                    </div>
                                                    {/*end::Messages*/}
                                                </div>
                                                {/*end::Scroll*/}
                                            </div>
                                            {/*end::Body*/}
                                            {/*begin::Footer*/}
                                            <div class="card-footer align-items-center">
                                                {/*begin::Compose*/}
                                                <textarea class="form-control border-0 p-0" rows="2" placeholder="Type a message"></textarea>
                                                <div class="d-flex align-items-center justify-content-between mt-5">
                                                    <div class="mr-3">
                                                        <a href="#" class="btn btn-clean btn-icon btn-md mr-1">
                                                            <i class="flaticon2-photograph icon-lg"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-clean btn-icon btn-md">
                                                            <i class="flaticon2-photo-camera icon-lg"></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
                                                    </div>
                                                </div>
                                                {/*begin::Compose*/}
                                            </div>
                                            {/*end::Footer*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end::Card */}
            </>
        )
    }
}
