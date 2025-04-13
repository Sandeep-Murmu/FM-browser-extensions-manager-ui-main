import logo from "../assets/images/logo.svg";
import logoTheme from "../assets/images/icon-sun.svg";
import ButtonIcon from "./icon-Button";
import ButtonText from "./text-button";
export default function ExtentionHeader() {
  return (
    <>
      <div className="extention-header p-4">
        <img src={logo} alt="logo" />
        <ButtonIcon
          btnClass="button--icon"
          src={logoTheme}
          alt="logo"
        />

        <ButtonText btnContent="Active" btnClass="button--text" />
      </div>
    </>
  );
}
