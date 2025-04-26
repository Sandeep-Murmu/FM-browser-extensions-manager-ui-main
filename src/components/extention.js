import {  useState } from "react";
import ButtonText from "./text-button";

export default function Extention({
  extention,
  updateExtention,
  updateExtentionList,
  removeExtention,
  theme,
}) {
  const [isActive, setIsActive] = useState(extention.isActive);

  function handleActive() {
    setIsActive((a) => !a);
    updateExtention(extention, isActive);
    updateExtentionList();
  }

  return (
    <>
      <div
        className={`extention-box d-flex flex-column justify-content-between p-4 ${theme}`}
      >
        <div className="extention-box--top d-flex align-items-start gap-4">
          <img
            className="extention-box--image"
            src={extention.logo}
            alt={extention.name}
          />
          <div className="extention-box--text">
            <h2 className={`extention-box--name ${theme}`}>{extention.name}</h2>
            <p className={`extention-box--para ${theme}`}>
              {extention.description}
            </p>
          </div>
        </div>
        <div className="extention-bot--bottom d-flex justify-content-between align-items-center">
          <ButtonText
            btnClass={`button--remove ${theme}`}
            btnContent="Remove"
            onClick={() => {
              removeExtention(extention);
              updateExtentionList();
            }}
          />
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="extentionToggleActive"
              checked={extention.isActive}
              value={isActive}
              onChange={(e) => {
                handleActive();
              }}
            />
            {/* <label className="form-check-label" htmlFor="extentionToggleActive">
              Default switch checkbox input
            </label> */}
          </div>
        </div>
      </div>
    </>
  );
}
