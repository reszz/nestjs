import { Product } from './product.interface';
export declare class ProductsService {
    private readonly products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(data: Omit<Product, 'id'>): Product;
    update(id: number, data: Omit<Product, 'id'>): Product;
    patch(id: number, data: Partial<Omit<Product, 'id'>>): Product;
    remove(id: number): Product;
}
