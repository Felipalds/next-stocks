"use client";

import { useState } from "react";

export default function StockForm() {
  const [stock, setStock] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  return (
    <form
      className="bg-dark-900 text-white p-4 rounded"
      onSubmit={() => handleSubmit}
    >
      <input
        className="bg-dark-800 border-dark-600 text-black p-2 mb-3 rounded"
        type="text"
        placeholder="AÇÃO"
        name="stock"
        value={stock}
        onChange={(v) => setStock(v.target.value)}
      />
      <input
        className="bg-dark-800 border-dark-600 text-black p-2 mb-3 rounded"
        type="number"
        placeholder="PREÇO"
        name="price"
        value={price}
        onChange={(v) => setPrice(Number(v.target.value))}
      />
      <input
        className="bg-dark-800 border-dark-600 text-black p-2 mb-3 rounded"
        type="number"
        placeholder="QUANTIDADE"
        name="amount"
        value={amount}
        onChange={(v) => setAmount(Number(v.target.value))}
      />
      <input
        className="bg-dark-800 border-dark-600 text-white p-2 mb-3 rounded"
        type="date"
        placeholder="DATA"
        name="date"
        value={date.toISOString().substring(0, 10)}
        onChange={(v) => setDate(new Date(v.target.value))}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
      >
        ENVIAR
      </button>
    </form>
  );
}
