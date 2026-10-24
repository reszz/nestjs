import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MahasiswaModule } from './mahasiswas/mahasiswa.module';

@Module({
  imports: [MahasiswaModule],
})
export class AppModule {}
