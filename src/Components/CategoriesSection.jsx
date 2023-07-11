import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { motion } from "framer-motion";

function CategoriesSection() {
  const { categoryName } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, [categoryName]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h2 className="mt-3 text-center">Products</h2>
        <hr />
      </div>

      <div className="container">
        <motion.div
          className="row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((val, key) => (
            <motion.div
              className="col-md-4 col-sm-6 my-3"
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.2 }}
            >
              <Card className="m-3" style={{ width: "18rem" }}>
                <Card.Body className="p-5">
                  <Card.Title>{val}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                  <Link
                    to={`/products/category/${val}`}
                    className="btn btn-dark rounded-pill"
                  >
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default CategoriesSection;
