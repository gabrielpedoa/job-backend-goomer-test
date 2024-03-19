import { randomUUID } from "node:crypto";

type data = {
  name: string;
  price: number;
  category: string[];
  offer: offer;
  idRestaurant: number;
  id?: string;
};

export class ProductEntity {
  id: string;
  name: string;
  price: number;
  category: string[];
  offer: offer;
  idRestaurant: number;
  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.price = data.price;
    if (data.price < 0) throw new Error("Preço precisa ser maior que zero");
    this.category = data.category;
    this.offer = data.offer;
    this.idRestaurant = data.idRestaurant;
  }

  get getProduct(): Omit<IProduct, "id"> {
    return {
      category: this.category,
      idRestaurant: this.idRestaurant,
      name: this.name,
      offer: this.offer,
      price: this.price,
    };
  }
}
