import ExtentionHeader from "./components/extention-header";
import ExtententionTab from "./components/extention-tab";
import extentionsData from "./data.json";

function App() {
  extentionsData.forEach((extention) => {
    console.log(extention.name);
  });

  return (
    <div className="App">
      <div className="container py-5">
        <ExtentionHeader />
        <ExtententionTab />
      </div>
    </div>
  );
}

export default App;
