export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity: number;
  favorite: boolean;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 8;
    this.url = '';
    this.description = '';
    this.quantity = 0;
    this.favorite = false;
  }
}
