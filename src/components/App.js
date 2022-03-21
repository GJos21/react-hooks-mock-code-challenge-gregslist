import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="app">
      <Header onSearch={setFilter} searchTerm={filter} />
      <ListingsContainer filter={filter} />
    </div>
  );
}

export default App;
