import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import ReviewList from "./components/ReviewList";
import { uuid } from "uuidv4";

function App() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ restaurant: "", review: "", id: uuid() });
  const [editing, setEditing] = useState(false);

  return (
    <div className="app">
      <h1>Restaurant Reviews</h1>
      <Form
        editing={editing}
        form={form}
        reviews={reviews}
        setEditing={setEditing}
        setForm={setForm}
        setReviews={setReviews}
      />
      <ReviewList
        reviews={reviews}
        setForm={setForm}
        setEditing={setEditing}
        setReviews={setReviews}
      />
    </div>
  );
}

export default App;
