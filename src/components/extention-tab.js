import ButtonText from "./text-button";

export default function ExtentionTab({ currentActive, onActive, theme }) {
  return (
    <>
      <div className="extention-tab">
        <h1 className={`extention-tab__heading ${theme}`}>Extention List</h1>
        <div className="extention-tab__tabs">
          <ButtonText
            key="all"
            btnValue="all"
            // btnClass="button--text "
            btnClass={`button--text ${
              currentActive === "all" ? "active" : ""
            } ${theme}`}
            btnContent="All"
            onClick={onActive}
          />
          <ButtonText
            key="active"
            btnValue="active"
            // btnClass="button--text"
            btnClass={`button--text ${
              currentActive === "active" ? "active" : ""
            } ${theme}`}
            btnContent="Active"
            onClick={onActive}
          />
          <ButtonText
            key="inactive"
            btnValue="inactive"
            // btnClass="button--text"
            btnClass={`button--text ${
              currentActive === "inactive" ? "active" : ""
            } ${theme}`}
            btnContent="Inactive"
            onClick={onActive}
          />
        </div>
      </div>
    </>
  );
}
