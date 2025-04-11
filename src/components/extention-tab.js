export default function ExtentionTab() {
  return (
    <>
      <div className="extention-tab">
        <h2 className="extention-tab__heading">Extention List</h2>
        <div className="extention-tab__tabs">
          <button className="extention-header__btn">All</button>
          <button className="extention-header__btn">Active</button>
          <button className="extention-header__btn">Inactive</button>
        </div>
      </div>
    </>
  );
}
