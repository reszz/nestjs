import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
    id: 1,
    title: 'Laskar Pelangi',
    isbn: '9789793062792',
    publishedDate: new Date('2005-09-01'),
    price: 85000,
    author: { id: 1, name: 'Andrea Hirata' },
    publisher: { id: 1, name: 'Bentang Pustaka' },
    genre: ['Novel', 'Fiksi'],
  },
  {
    id: 2,
    title: 'Bumi Manusia',
    isbn: '9789799731234',
    publishedDate: new Date('1980-08-25'),
    price: 120000,
    author: { id: 2, name: 'Pramoedya Ananta Toer' },
    publisher: { id: 2, name: 'Hasta Mitra' },
    genre: ['Novel', 'Sejarah'],
  },
  {
    id: 3,
    title: 'Negeri 5 Menara',
    isbn: '9789792248616',
    publishedDate: new Date('2009-07-01'),
    price: 95000,
    author: { id: 3, name: 'Ahmad Fuadi' },
    publisher: { id: 3, name: 'Gramedia Pustaka Utama' },
    genre: ['Novel', 'Inspiratif'],
  },
  ];
  private nextId = Math.max(0, ...this.books.map((b) => b.id)) + 1;

  create(data: Omit<Book, 'id'>): Book {
    if (this.books.some((b) => b.isbn === data.isbn)) {
      throw new ConflictException(`ISBN ${data.isbn} sudah terdaftar`);
    }

    const book: Book = {
      id: this.nextId++,
      ...data,
      publishedDate: new Date(data.publishedDate),
    };
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Buku dengan id ${id} tidak ditemukan`);
    }
    return book;
  }

  update(id: number, data: Partial<Omit<Book, 'id'>>): Book {
    const book = this.findOne(id);

    if (data.isbn && this.books.some((b) => b.isbn === data.isbn && b.id !== id)) {
      throw new ConflictException(`ISBN ${data.isbn} sudah terdaftar`);
    }

    if (data.publishedDate) {
      data.publishedDate = new Date(data.publishedDate);
    }

    Object.assign(book, data);
    return book;
  }

  remove(id: number): { message: string } {
    const book = this.findOne(id);
    this.books = this.books.filter((b) => b.id !== book.id);
    return { message: `Buku dengan id ${id} berhasil dihapus` };
  }
}