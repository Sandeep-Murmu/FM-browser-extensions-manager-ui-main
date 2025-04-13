import Extention from "./extention";

export default function ExtentionList({ extentions }) {
  return (
    <>
      <div className="extention-list container text-center">
        <div className="row row-cols-3">
          {extentions.map((ext, i) => (
            <Extention key={i} extention={ext} />
          ))}
        </div>
      </div>
    </>
  );
}
