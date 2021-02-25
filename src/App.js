import "./App.scss";
import product from "./data/product-info";
import Card from "./component/Card";
import { Fragment } from "react";

function App() {
  return (
    <div className="product">
      <div className="product-card-container">
        {product.map((item, index) => (
          <Fragment key={index}>
            <Card data={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
