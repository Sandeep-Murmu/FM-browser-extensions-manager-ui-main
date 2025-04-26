import { useEffect, useState } from "react";
import Extention from "./extention";

export default function ExtentionList({
  extentions,
  currentActive,
  updateExtention,
}) {
  const [renderExtentions, setRenderExtention] = useState([]);
  const [extentionStatusChanged, setExtentionStatusChanged] = useState(false);

  // let renderExtentions;

  function updateExtentionList() {
    setExtentionStatusChanged((e) => !e);
  }

  useEffect(
    function () {
      if (currentActive === "all") {
        setRenderExtention(extentions);
      }
      if (currentActive === "active") {
        setRenderExtention(extentions.filter((e) => e.isActive));
      }

      if (currentActive === "inactive") {
        setRenderExtention(extentions.filter((e) => !e.isActive));
      }
    },
    [currentActive, extentionStatusChanged]
  );

  // console.log("extentionList: ", extentions);
  // console.log(currentActive);
  return (
    <>
      {/* <div className="extention-list container text-left"> */}
      <div className="extention-list container text-left  ">
        <div className="extention-grid d-grid gap-3">
          {renderExtentions.map((ext, i) => (
            <Extention
              key={i}
              extention={ext}
              updateExtention={updateExtention}
              updateExtentionList={updateExtentionList}
            />
          ))}
        </div>
      </div>
    </>
  );
}
