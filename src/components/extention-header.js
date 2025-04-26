// import logo from "../assets/images/logo.svg";
// import logoTheme from "../assets/images/icon-sun.svg";
import ButtonIcon from "./icon-Button";
export default function ExtentionHeader({ theme, switchTheme }) {
  return (
    <>
      <div className={`extention-header ${theme}`}>
        <img src="./assets/images/logo.svg" alt="logo" />
        <ButtonIcon
          btnClass={`button--icon ${theme}`}
          src={
            theme === "dark"
              ? "./assets/images/icon-sun.svg"
              : "./assets/images/icon-moon.svg"
          }
          alt="logo"
          theme={theme}
          switchTheme={switchTheme}
        />
      </div>
    </>
  );
}
