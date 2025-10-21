import React, { useState, useEffect } from "react";
import "./Task1.css";

function Task1() {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: "",
  });
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");

  // Cleanup previous image URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (formData.image) {
        URL.revokeObjectURL(formData.image);
      }
    };
  }, [formData.image]);

  const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "image" && files[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(files[0]);
  } else {
    setFormData({ ...formData, [name]: value });
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.price) {
      setMessage("⚠ Please fill all required fields!");
      return;
    }

    const newCard = { ...formData, id: Date.now() };
    setCards([...cards, newCard]);
    setMessage("✅ Data added successfully!");

    setFormData({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: "",
    });
  };

  const handleClear = () => {
    if (formData.image) {
      URL.revokeObjectURL(formData.image);
    }
    setFormData({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: "",
    });
    setMessage("");
  };

  return (
    <div className="page-container">
      <header className="header">
        <button
          className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
          onClick={() => setActiveTab("add")}
        >
          Add Card
        </button>
        <button
          className={`tab-btn ${activeTab === "visit" ? "active" : ""}`}
          onClick={() => setActiveTab("visit")}
        >
          Visit Card
        </button>
      </header>

      <main className="main-section">
        {activeTab === "add" ? (
          <div className="form-container">
            <h2>Add Product Details</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />

              <div className="form-buttons">
                <button
                  type="button"
                  onClick={handleClear}
                  className="clear-btn"
                >
                  Clear
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        ) : (
          <div className="cards-section">
            <h2>Submitted Product Cards</h2>
            {cards.length === 0 ? (
              <p className="no-cards">No cards added yet.</p>
            ) : (
              <div className="cards-grid">
                {cards.map((card) => (
                  <div key={card.id} className="card">
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.name}
                        className="card-img"
                      />
                    )}
                    <div className="card-content">
                      <h3>{card.brand}</h3>
                      <p className="price">₹{card.price}</p>
                      <p className="name">{card.name}</p>
                      <p className="desc">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Task1;
