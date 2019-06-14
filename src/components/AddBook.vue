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

        <p>
          <label>
            <input id="true" value="true" v-model="read" name="group1" type="radio">
            <span>True</span>
          </label>
        </p>
        <p>
          <label>
            <input id="False" value="false" v-model="read" name="group1" type="radio">
            <span>False</span>
          </label>
        </p>
        <button class="btn waves-effect waves-light">
          Submit
          <i class="material-icons right">library_add</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Book from "@/constructors/book.js";
export default {
  name: "Addbook",
  data() {
    return {
      title: null,
      author: null,
      pages: null,
      read: false,
      book: null
    };
  },
  methods: {
    addBook() {
      const thisBook = new Book(this.title, this.author, this.pages, this.read);
      this.book = thisBook;
      this.$emit("childBook", this.book);
      this.clearFields();
    },
    clearFields() {
      this.title = "";
      this.author = "";
      this.pages = null;
      this.read = false;
    }
  }
};
</script>

