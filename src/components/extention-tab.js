import ButtonText from "./text-button";

export default function ExtentionTab() {
  return (
    <>
      <div className="extention-tab">
        <h1 className="extention-tab__heading">Extention List</h1>
        <div className="extention-tab__tabs">
          <ButtonText btnClass="button--text" btnContent="All" />
          <ButtonText btnClass="button--text" btnContent="Active" />
          <ButtonText btnClass="button--text" btnContent="Inactive" />
        </div>
      </div>
    </>
  );
}
