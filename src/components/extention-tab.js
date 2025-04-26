import ButtonText from "./text-button";

export default function ExtentionTab({ currentActive, onActive }) {

  return (
    <>
      <div className="extention-tab">
        <h1 className="extention-tab__heading">Extention List</h1>
        <div className="extention-tab__tabs">
          <ButtonText
            key="all"
            btnValue="all"
            // btnClass="button--text "
            btnClass={`button--text ${currentActive === "all" ? "active" : ""}`}
            btnContent="All"
            onClick={onActive}
          />
          <ButtonText
            key="active"
            btnValue="active"
            // btnClass="button--text"
            btnClass={`button--text ${
              currentActive === "active" ? "active" : ""
            }`}
            btnContent="Active"
            onClick={onActive}
          />
          <ButtonText
            key="inactive"
            btnValue="inactive"
            // btnClass="button--text"
            btnClass={`button--text ${
              currentActive === "inactive" ? "active" : ""
            }`}
            btnContent="Inactive"
            onClick={onActive}
          />
        </div>
      </div>
    </>
  );
}
