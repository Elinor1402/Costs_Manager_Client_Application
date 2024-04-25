import React, { useEffect, useState } from "react";
import "./app.css";
import CostList from "./components/CostsList";
import Form from "./components/Form";

function App() {
  const [costItems, setCostItems] = useState([]);

  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="card__title">Cost Manager App</h1>
        <Form setCostItems={setCostItems} />
        <CostList data={costItems} />
      </div>
    </div>
  );
}

export default App;
