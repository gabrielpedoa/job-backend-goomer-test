export class ProductEntity {
  id?: number;
  name: string;
  price: number;
  category: string[];
  offer: {
    description: string;
    discount: number;
    offerDays: { day: number; time: string }[];
  };
  constructor(
    name: string,
    price: number,
    category: string[],
    offer: {
      description: string;
      discount: number;
      offerDays: { day: number; time: string }[];
    },
    id?: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.offer = offer;
  }
}
