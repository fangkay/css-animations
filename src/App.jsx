import React, { useState } from "react";
import cx from "classnames";
import { FullScreenMenu } from "./components/FullScreenMenu";

export default App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FullScreenMenu></FullScreenMenu>
      <div
        className={cx("searchbar", {
          "is-open": open,
        })}
      >
        <input
          placeholder="Search"
          onFocus={(e) => setOpen(true)}
          onBlur={(e) => setOpen(false)}
        />
        <div className="dropdown_positioner">
          <div className="dropdown">
            <ul>
              <li>
                <strong>re</strong>al life CSS transition
              </li>
              <li>
                <strong>Re</strong>act hooks
              </li>
              <li>
                pa<strong>re</strong>ntheses
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>Use the searchbar above</p>
    </div>
  );
};
