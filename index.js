const books = [];
let newBook;
const bookStore = document.getElementById('bookstore');
let counter = 0;

let idCreator = function () {
  counter = ++counter;
  id = 'Book' + counter.toString();
  return id;
}
const Library = class {
_books;
  constructor(books) {
    this._books = books;
  }
  updateLibrary() {
    this._books.forEach(book => {
      console.log(book)
    //show on display
    // with bookname, pages, hasread, writer
    let bookRender = document.createElement('div');
    bookRender.setAttribute('id', book._bookID)
    bookRender.setAttribute('class', 'book');
    let textNode = document.createTextNode('whatever');
    bookRender.appendChild(textNode);
    bookStore.appendChild(bookRender); 
    })
  }

  removeFromLibrary(id) {
    bookStore.removeChild(document.getElementById(id));
  }
}

const Book = class {
  _bookID
  _bookName
  _bookPages
  _hasRead
  _writer
  constructor ( bookID, bookName, bookPages, hasRead, writer ) {
    this._bookID = bookID;
    this._bookName = bookName;
    this._bookPages = bookPages;
    this._hasRead = hasRead;
    this._writer = writer }

    deleteBook() {
      this.Book = {};
    }
  }

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => { newBook = new Book( idCreator(), 'a','b','c','d')
books.push(newBook);
let library = new Library(books.slice(-1));
library.updateLibrary()})
const deleteBook = document.addEventListener('click', (e) => { if (e.target.id.toString().includes('Book')) { new Library().removeFromLibrary(e.target.id)}});
