import logo from "../assets/images/logo.svg";
import logoTheme from "../assets/images/icon-sun.svg";

export default function ExtentionHeader() {
  return (
    <>
      <div className="extention-header p-4">
        <img src={logo} alt="logo" />
        <button className="extention-header__btn">
          <img src={logoTheme} alt="logo" />
        </button>
      </div>
    </>
  );
}
