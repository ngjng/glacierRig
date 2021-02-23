import "./App.scss";
import data from "./data";
import Card from "./component/Card";
import { useEffect, useState, Fragment } from "react";

function App() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    try {
      setCardData(data(1));
    } catch (e) {
      console.log(e, "e");
    }
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        {cardData.map((item, index) => (
          <Fragment key={index}>
            <Card data={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
