/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import {useSelector} from "react-redux";
import objectPath from "object-path";
import {useHtmlClassService} from "../../../_core/MetronicLayout";
import {toAbsoluteUrl} from "../../../../_helpers";
import {DropdownTopbarItemToggler} from "../../../../_partials/dropdowns";

export function UserProfileDropdown() {
  const {user} = useSelector(state => state.auth);

  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light: objectPath.get(uiService.config, "extras.user.dropdown.style") === "light",
    };
  }, [uiService]);

  return (
      <Dropdown drop="down" alignRight>
      
        <Dropdown.Menu
            className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        

          <div className="navi navi-spacer-x-0 pt-5">
            

            

            <div className="navi-footer  px-8 py-5">
              <Link to="/logout" className="btn btn-light-primary font-weight-bold">
                Sign Out
              </Link>
              <a href="#" className="btn btn-clean font-weight-bold">
                Upgrade Plan
              </a>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
  );
}
