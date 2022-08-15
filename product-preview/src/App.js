import './App.css';
import { BsFillCartPlusFill } from "react-icons/bs";

function App() {
  return (
    <div className="card">

      <img className="card__img" src="./image-product-mobile.jpg" alt="product.jpg" />

      <div className="product">
        <small>perfume</small>
        <h2 className="product__name">Gabrielle Essence Eau De Perfume</h2>
        <p className="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi natus voluptatem quos fugit, iure rem consectetur aperiam, repellat culpa accusamus quia excepturi eius corporis! Fuga assumenda tempora dolor praesentium repudiandae.</p>
        <div className="product__price">
          <h3 className="new-price">$149.99</h3>
          <small className="old-price">$169.99</small>
        </div>
        <button className="product__button">
          <BsFillCartPlusFill className="cart-icon"/>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
