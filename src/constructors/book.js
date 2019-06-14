export default function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author} is ${this.pages} pages, ${this.read ? 'read' : 'not read'}`
}