<template>
  <div class="library">
    <AddBook @childBook="addToCollection"/>
    <div class="container book-collection">
      <div v-for="(book, index) in myLibrary" :key="index" class="card blue-grey center-align">
        <div class="card-content white-text">
          <h2>{{ book.title }}</h2>
          <h3>{{ book.author }}</h3>
          <p>Pages - {{ book.pages }}</p>
          <p>{{ book.read }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "@/constructors/book.js";
import AddBook from "./AddBook";
export default {
  name: "Library",
  components: {
    AddBook
  },
  data() {
    return {
      myLibrary: [
        {
          title: "Harry Potter",
          author: "J.K. Rowling",
          pages: 345,
          read: true
        },
        {
          title: "Lord of the Rings",
          author: "J.R.R. Tolkein",
          pages: 795,
          read: true
        }
      ],
      recieveChild: null
    };
  },
  methods: {
    addToCollection(payload) {
      this.myLibrary.push(payload);
      this.recieveChild = null;
    }
  }
};
</script>

<style>
.addBook {
  width: 390px;
  height: 400px;
}

form button {
  display: inline-block;
  margin: 15px auto;
}
h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.45rem;
}

h3 {
  font-size: 1.4rem;
}

.book-collection {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.book-collection .card {
  width: 250px;
  height: 250px;
}
</style>
