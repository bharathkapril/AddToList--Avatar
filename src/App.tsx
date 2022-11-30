import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ang",
      url: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nickelodeon.com.au/aangs-journey-season-2-576.jpg?quality=0.80",
      age: 112,
      note: "The Last Air Bender",
    },
  ]);
  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
