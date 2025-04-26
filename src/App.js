import { useEffect, useRef, useState } from "react";
import ExtentionHeader from "./components/extention-header";
import ExtentionList from "./components/extention-list";
import ExtententionTab from "./components/extention-tab";
import extentionsData from "./data.json";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [extentions, setExtentions] = useState(extentionsData);

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
    <div className="App">
      <div className="container py-5">
        <ExtentionHeader />
        <ExtententionTab currentActive={activeTab} onActive={handleSetActive} />
        <ExtentionList
          extentions={extentions}
          currentActive={activeTab}
          updateExtention={updateExtention}
          removeExtention={handleExtentionRemove}
        />
      </div>
    </div>
  );
}

export default App;
