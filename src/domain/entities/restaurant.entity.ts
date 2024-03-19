type IAddress = {
  postalCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
};

type data = {
  id: number;
  photo: string;
  name: string;
  adress: IAddress;
  openingHours: { [index: number]: string };
};

export class RestaurantEntity {
  id: number;
  photo: string;
  name: string;
  adress: IAddress;
  openingHours: { [index: number]: string };
  constructor(data: data) {
    this.id = data.id;
    this.photo = data.photo;
    this.adress = data.adress;
    this.name = data.name;
    this.openingHours = data.openingHours;
  }
}
