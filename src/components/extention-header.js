// import logo from "../assets/images/logo.svg";
// import logoTheme from "../assets/images/icon-sun.svg";
import ButtonIcon from "./icon-Button";
export default function ExtentionHeader() {
  return (
    <>
      <div className="extention-header p-4">
        <img src="./assets/images/logo.svg" alt="logo" />
        <ButtonIcon
          btnClass="button--icon"
          src="./assets/images/icon-sun.svg"
          alt="logo"
        />
      </div>
    </>
  );
}
