import { useMemo, useRef, useState } from "react";
import "./styles/index.scss";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef=useRef()
  const handleSubmit = () => {
    setProducts([...products, { name, price: parseInt(price) }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products])  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
      <br />
      <input
        type="text"
        placeholder="Enter price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}: {product.price}
          </li>
        ))}
      </ul>

      <p>Total: {total}</p>
    </div>
  );
}

export default App;
