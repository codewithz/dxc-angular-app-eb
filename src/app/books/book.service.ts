import { Injectable } from '@angular/core';
import { Book } from './book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];

  populateBooks() {

    for (let i = 1; i < 5; i++) {
      let book = new Book(`Book ${i}`, `Author ${i}`);
      this.books.push(book);
    }
  }

  getBooks() {
    return this.books;
  }

  constructor() {
    this.populateBooks();
  }
}
