type offer = {
  description: string;
  discount: number;
  offerDays: { day: number; time: string }[];
};

interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string[];
    offer: offer;
    idRestaurant: number;
  }

  
  