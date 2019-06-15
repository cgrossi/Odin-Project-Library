<template>
  <div class="library">
    <button
      v-if="!showForm"
      @click="showForm = !showForm"
      class="btn waves-effect waves-light indigo darken-2 add-book"
    >New Book</button>
    <AddBook v-if="showForm" @formShowEmit="showForm = false" @childBook="addToCollection"/>
    <div class="container book-collection">
      <div
        v-for="(book, index) in myLibrary"
        :key="index"
        class="card indigo darken-2 center-align"
      >
        <div class="card-content white-text">
          <i class="material-icons delete" @click="removeBook(index)">delete</i>
          <p class="title">Title:</p>
          <h2>{{ book.title }}</h2>
          <p class="author">Author:</p>
          <h3>{{ book.author }}</h3>
          <p>Pages - {{ book.pages }}</p>
          <p v-if="book.read">I've read this book.</p>
          <p v-else>I haven't read this book.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      recieveChild: null,
      showForm: false
    };
  },
  methods: {
    addToCollection(payload) {
      this.myLibrary.push(payload);
      this.recieveChild = null;
    },
    removeBook(index) {
      this.myLibrary.splice(index, 1);
    }
  }
};
</script>

<style>
.addBook {
  width: 390px;
  height: 390px;
}

form button {
  display: inline-block;
  margin: 15px auto;
}
h1 {
  font-size: 1.5rem;
  margin-top: 10px;
}

h2 {
  font-size: 1.45rem;
  margin: 5px;
}

h3 {
  font-size: 1.4rem;
  margin: 5px;
}

.add-book {
  display: block;
  margin: 5px auto;
}

.card-content {
  position: relative;
}

.card i {
  position: absolute;
  font-size: 1.9rem;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.book-collection {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.book-collection .card {
  width: 250px;
  height: 250px;
}

.card .card-content p {
  margin-bottom: 10px;
  margin-top: 13px;
}

.card .card-content .title {
  margin-top: 0;
  margin-bottom: 1px;
}

.card .card-content .author {
  margin-top: 20px;
  margin-bottom: 4px;
}
</style>
