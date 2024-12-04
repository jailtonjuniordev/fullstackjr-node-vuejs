export default class Product {
    id?: string;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number, id?: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        if (id) {
            this.id = id;
        }
    }
    
}
