import Header from "./components/Header/Header";
import "./App.scss";
import Item from "./components/Item/Item";
// import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Item />
        {/* <Sidebar /> */}

      </main>
    </div>
  );
};

export default App;
