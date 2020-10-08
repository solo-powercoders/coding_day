var bookList= new Array();

bookStore();

function bookStore(){
    for(i=0, i<3, i++){
        var book= prompt("Enter Title of Book.");
        var status= prompt("Sold or Available");
        var price= prompt("Enter the price of the Book.")
        var newBook= new bookItem(book,status,price);
        bookList.push(newBook);
    }
}

function bookItem(book,status,price){
    this.book= book;
    this.status= status;
    this.price= price;
}

for (const property of bookList) {
  
    for (const output in property){
      document.write(`${output}: ${property[output]}`);
    }
  }