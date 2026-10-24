import { Product } from './product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Product[];
    findOne(id: number): Product;
    create(body: Omit<Product, 'id'>): Product;
    update(id: number, body: Omit<Product, 'id'>): Product;
    patch(id: number, body: Partial<Omit<Product, 'id'>>): Product;
    remove(id: number): Product;
}
