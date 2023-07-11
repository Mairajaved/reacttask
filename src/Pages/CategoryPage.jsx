import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { BsHeart, BsCartPlus } from "react-icons/bs";
import axios from "axios";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="container">
      <div className="my-12 text-center">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero
          in unde, molestias illo veniam, dolore veritatis eaque ipsum.
          Molestiae, nam architecto!
        </p>
      </div>
      <hr />

      <div className="row">
        {products ? (
          products.map((val) => (
            <div className="col-md-6 my-4" key={val.id}>
              <Link className="text-decoration-none" to={`/products/${val.id}`}>
                <Card>
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={val.thumbnail}
                      alt="Product thumbnail"
                    />
                    <div className="card-icons">
                      <span className="icon icon-favorite mx-3">
                        <BsHeart size={24} />
                      </span>
                      <span className="icon icon-add-to-cart mx-3">
                        <BsCartPlus size={24} />
                      </span>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      {val.title} - {val.price}$
                    </Card.Title>
                    <Card.Text>{val.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
