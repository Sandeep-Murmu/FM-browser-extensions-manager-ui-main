import { useState } from "react";
import Extention from "./extention";

export default function ExtentionList({ extentions, currentActive }) {
  let renderExtentions;
  if (currentActive === "all") {
    renderExtentions = extentions;
  }
  if (currentActive === "active") {
    renderExtentions = extentions.filter((e) => e.isActive);
    console.log("activeExtentionList: ", renderExtentions);
  }

  if (currentActive === "inactive") {
    renderExtentions = extentions.filter((e) => !e.isActive);

    console.log("activeExtentionList: ", renderExtentions);
  }

  // console.log("extentionList: ", extentions);
  // console.log(currentActive);
  return (
    <>
      {/* <div className="extention-list container text-left"> */}
      <div className="extention-list container text-left  ">
        <div className="extention-grid d-grid gap-3">
          {renderExtentions.map((ext, i) => (
            <Extention key={i} extention={ext} />
          ))}
        </div>
      </div>
    </>
  );
}
