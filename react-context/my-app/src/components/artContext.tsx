import { Product } from '../lib/data';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};
