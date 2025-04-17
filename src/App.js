import ExtentionHeader from "./components/extention-header";
import ExtentionList from "./components/extention-list";
import ExtententionTab from "./components/extention-tab";
import extentionsData from "./data.json";

function App() {

  return (
    <div className="App">
      <div className="container py-5">
        <ExtentionHeader />
        <ExtententionTab />
        <ExtentionList extentions={extentionsData} />
      </div>
    </div>
  );
}

export default App;
