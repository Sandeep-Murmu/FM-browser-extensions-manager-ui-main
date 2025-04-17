import ButtonText from "./text-button";

export default function Extention({ extention }) {
  return (
    <>
      <div className="extention-box d-flex flex-column justify-content-between p-4">
        <div className="extention-box--top d-flex align-items-start gap-4">
          <img
            className="extention-box--image"
            src={extention.logo}
            alt={extention.name}
          />
          <div className="extention-box--text">
            <h2 className="extention-box--name">{extention.name}</h2>
            <p className="extention-box--para">{extention.description}</p>
          </div>
        </div>
        <div className="extention-bot--bottom d-flex justify-content-between align-items-center">
          <ButtonText btnClass="button--remove" btnContent="Remove" />
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="extentionToggleActive"
              onChange={(e) => {
                console.log(e.target.checked);
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
