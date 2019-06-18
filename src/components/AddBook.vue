<template>
  <div class="add-book">
    <div class="addBook container">
      <h1 class="center-align">Add A Book To The Collection</h1>
      <form @submit.prevent="addBook">
        <div class="input-field">
          <label for="title">Title</label>
          <input type="text" class="validate" v-model="title">
        </div>
        <div class="input-field">
          <label for="author">Author</label>
          <input type="text" class="validate" v-model="author">
        </div>
        <div class="input-field">
          <label for="pages">Pages</label>
          <input type="number" class="validate" v-model="pages">
        </div>

        <div class="switch center-align">
          <label>
            Have Not Read
            <input type="checkbox" v-model="read">
            <span class="lever"></span>
            Have Read
          </label>
        </div>

        <div id="submit">
          <button class="btn waves-effect waves-light indigo darken-2">
            Submit
            <i class="material-icons right">library_add</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Book from "@/constructors/book.js";
import db from "@/firebase/init";
export default {
  name: "Addbook",
  data() {
    return {
      title: null,
      author: null,
      pages: null,
      read: false,
      book: null,
      showForm: true
    };
  },
  methods: {
    addBook() {
      // use a constructor function to create book object
      const thisBook = new Book(this.title, this.author, this.pages, this.read);
      this.book = thisBook;
      // add book to database on firestore
      db.collection("library")
        .add({
          title: thisBook.title,
          author: thisBook.author,
          pages: thisBook.pages,
          read: thisBook.read
        })
        .then(() => {
          this.showForm = false;
          this.$emit("formShowEmit", this.book);
          this.clearFields();
        });
    },
    clearFields() {
      this.title = "";
      this.author = "";
      this.pages = null;
      this.read = false;
      this.book = null;
    }
  }
};
</script>

<style>
form button {
  display: block !important;
  margin-top: 30px !important;
}

.switch label input[type="checkbox"]:checked + .lever::after {
  background-color: #303f9f;
}

.switch label input[type="checkbox"]:checked + .lever {
  background-color: hsl(232, 54%, 85%);
}

input[type="checkbox"]:checked:not(:disabled) ~ .lever:active::before,
input[type="checkbox"]:checked:not(:disabled).tabbed:focus ~ .lever::before {
  background-color: hsla(232, 63%, 40%, 0.15);
}

input:focus {
  border-bottom: 1px solid hsl(232, 63%, 40%) !important;
  -webkit-box-shadow: 0 1px 0 0 hsl(232, 63%, 40%) !important;
  box-shadow: 0 1px 0 0 hsl(232, 63%, 40%) !important;
}
</style>
