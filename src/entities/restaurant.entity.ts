type IAddress = {
  postalCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
};

export class RestaurantEntity {
  id: number;
  photo: string;
  name: string;
  adress: IAddress;
  openingHours: { [index: number]: string };
  constructor(
    id: number,
    photo: string,
    name: string,
    adress: IAddress,
    openingHours: { [index: number]: string }
  ) {
    this.id = id;
    this.photo = photo;
    this.adress = adress;
    this.name = name;
    this.openingHours = openingHours;
  }
}
