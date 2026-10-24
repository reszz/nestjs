"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            { id: 1, name: 'Laptop', price: 12500000 },
            { id: 2, name: 'Keyboard', price: 350000 },
            { id: 3, name: 'Mouse', price: 150000 },
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const prod = this.products.find(x => x.id == id);
        if (!prod) {
            throw new common_1.NotFoundException('Product not found');
        }
        return prod;
    }
    create(data) {
        const nextId = this.products.length
            ? Math.max(...this.products.map((product) => product.id)) + 1
            : 1;
        const newProduct = {
            id: nextId,
            ...data,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, data) {
        const product = this.findOne(id);
        product.name = data.name;
        product.price = data.price;
        return product;
    }
    patch(id, data) {
        const product = this.findOne(id);
        Object.assign(product, data);
        return product;
    }
    remove(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Product not found');
        }
        const [removedProduct] = this.products.splice(index, 1);
        return removedProduct;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map