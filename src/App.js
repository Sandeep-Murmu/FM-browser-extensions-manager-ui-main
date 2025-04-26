import { useState } from "react";
import ExtentionHeader from "./components/extention-header";
import ExtentionList from "./components/extention-list";
import ExtententionTab from "./components/extention-tab";
import extentionsData from "./data.json";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [extentions, setExtentions] = useState(extentionsData);
  const [theme, setTheme] = useState("dark");

  const handleTheme = function () {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    console.log("theme: ", theme);
  };

  const handleSetActive = function (e) {
    setActiveTab(e.target.dataset.active);
  };

  const updateExtention = function (extention, value) {
    const index = extentionsData.findIndex((el) => el.name === extention.name);
    // console.log("extention : ", extentionsData[index]);
    // console.log("extention index: ", index);
    // console.log(!value);

    extentionsData[index].isActive = !value;
    setExtentions((ext) => {
      return extentionsData;
    });
  };

  const handleExtentionRemove = function (extention) {
    const removeIndex = extentionsData.findIndex(
      (el) => el.name === extention.name
    );

    extentionsData.splice(removeIndex, 1);
    setExtentions((ext) => {
      return extentionsData;
    });
  };

  return (
    <div className={`App ${theme}`}>
      <div className="container py-5">
        <ExtentionHeader theme={theme} switchTheme={handleTheme} />
        <ExtententionTab
          currentActive={activeTab}
          onActive={handleSetActive}
          theme={theme}
        />
        <ExtentionList
          extentions={extentions}
          currentActive={activeTab}
          updateExtention={updateExtention}
          removeExtention={handleExtentionRemove}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;
