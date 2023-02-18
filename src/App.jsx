import { useState } from "react";
import "./App.css";
// import Surround from "./components/Surround";
// import Slots from "./components/Slots";
// import Intervene from "./components/Intervene";
// import MyComponent from "./components/MyComponent";
// import List from "./components/List";
import EventButtons from "./components/EventButtons";

function App() {
  // const itms = [{ name: "Charlotte", email:'charlotte@test.com' }, { name: "Will", email:'will@test.com' }, { name: "Joel", email:'joel@test.com' }];
  return (
    <div className="App">
    <EventButtons />
      {/* <List items={itms} /> */}
    </div>
  );
}

export default App;
