import StockForm from "../ui/forms/StockForm";

export default async function Stocks() {
  const res = await fetch("http://localhost:8080/stocks/operation?userId=1");
  const operations = await res.json();

  return (
    <div>
      <h1>Stocks</h1>
      {operations.map((o: any) => (
        <p key={o.id}>
          {o.stock} - {o.price} - {o.amount} - {o.type}{" "}
        </p>
      ))}

      <StockForm />
    </div>
  );
}
