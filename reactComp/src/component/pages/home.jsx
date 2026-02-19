import { Products } from "../../data/products";
import Btn from "../common/btn";
import "./home.css";

function Home() {
  return (
    <section className="productSection">
      <h1>Product Session</h1>
      <div className="productName">
        {Products.map((obj, Index) => (
          <Product data={obj} />
        ))}
      </div>
    </section>
  );
}

function Product({ data }) {
  return (
    <div className="productPicture">
      <img src={data.images} alt="product" />
      <h3>{data.title}</h3>
      <Btn value="Shop Now" colore="red" />
    </div>
  );
}

export default Home;
