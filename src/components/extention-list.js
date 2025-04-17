import Extention from "./extention";

export default function ExtentionList({ extentions }) {
  return (
    <>
      {/* <div className="extention-list container text-left"> */}
      <div className="extention-list container text-left  ">
        <div className="extention-grid d-grid gap-3">
          {extentions.map((ext, i) => (
            <Extention key={i} extention={ext} />
          ))}
        </div>
      </div>
    </>
  );
}
