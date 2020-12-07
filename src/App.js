import React from "react";
import { Card } from "./Card";
import "./styles.css";

export default function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1>Client Reviews</h1>
          <div className="underline"></div>
        </div>
        <Card />
      </section>
    </main>
  );
}
