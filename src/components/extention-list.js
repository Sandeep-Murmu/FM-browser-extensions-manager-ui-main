import { useEffect, useState } from "react";
import Extention from "./extention";

export default function ExtentionList({
  extentions,
  currentActive,
  updateExtention,
  removeExtention,
  theme,
}) {
  const [renderExtentions, setRenderExtention] = useState([]);
  const [extentionUpdate, setExtentionUpdate] = useState(false);

  // let renderExtentions;

  function updateExtentionList() {
    setExtentionUpdate((e) => !e);
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
    [currentActive, extentionUpdate]
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
              removeExtention={removeExtention}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </>
  );
}
