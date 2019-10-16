import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
books = [
{name : 'Lolita',author : ' by Vladimir Nabokov'},
{name : 'The Great Gatsby', author : ' by F. Scott Fitzgerald'},
{name : 'In Search of Lost Time',author : 'by Marcel Proust'},
{name : 'Ulysses',author : 'James Joyce'},
{name : 'Dubliners',author : 'James Joyce'},
{name : 'One Hundred Years of Solitude',author : 'Gabriel Garcia Marquez'},
{name : 'The Sound and the Fury',author : 'William Faulkner'},
{name : 'To The Lighthouse',author : 'Virginia Woolf'},
{name : 'The complete stories of Flannery O’Connor',author : 'john'},
{name : 'Pale Fire',author : 'Vladimir Nabokov'}
];
  constructor() { }

  getAllBooks()
  {
    return this.books;
  }
  addBook(name,author)
  {
    this.books.push({name:name,author:author});
  }
  deleteBook(name) {
    this.books = this.books.filter(e => {
      return e.name !== name;
    });
  }
}
