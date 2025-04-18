import { useEffect, useState } from "react";
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

  useEffect(
    function () {
      if (activeTab === "all") {
        setExtentions(extentionsData);
      }
      if (activeTab === "active") {
        setExtentions(extentionsData.filter((e) => e.isActive));
      }

      if (activeTab === "inactive") {
        setExtentions(extentionsData.filter((e) => !e.isActive));
      }
    },
    [activeTab]
  );

  return (
    <div className="App">
      <div className="container py-5">
        <ExtentionHeader />
        <ExtententionTab currentActive={activeTab} onActive={handleSetActive} />
        <ExtentionList extentions={extentions} currentActive={activeTab} />
      </div>
    </div>
  );
}

export default App;
