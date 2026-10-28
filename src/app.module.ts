import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MahasiswaModule } from './mahasiswas/mahasiswa.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule, ProductsModule, MahasiswaModule],
})
export class AppModule {}
