/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";
import { Link } from "react-router-dom";

export function QuickUserToggler() {
  const { user } = useSelector(state => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas: objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);

  return (<>

    <div className="topbar-item bg-white">
      


        <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">สวัสดี,</span>
        <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
          {user.fullname}
        </span>

        <Link to="/logout" className="btn btn-light-primary font-weight-bold">
          Sign Out
        </Link>

      </div>
   


    {/* {!layoutProps.offcanvas && (<UserProfileDropdown/>)} */}
  </>
  );
}
