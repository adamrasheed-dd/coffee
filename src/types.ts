export type CoffeePot = {
  id: number;
  created_at: string;
  name: string;
};

export type Brew = {
  id: number;
  created_at: string;
  pot: number;
};
