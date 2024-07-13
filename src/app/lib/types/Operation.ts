enum Type {
  "BUY",
  "SELL",
}

export type Operation = {
  customerId: number;
  stock: string;
  amount: number;
  price: number;
  type: Type;
  date: Date;
};
