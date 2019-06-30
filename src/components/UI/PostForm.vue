<template>
  <div>
    <form v-if="!loading" class="form" @submit.prevent="onSubmit">
      <div class="input-field">
        <label for="title">Title:</label>
        <input 
            name="title" 
            type="text" 
            v-model="title" 
            :class="[errors.title ? 'invalid' : 'validate']"
        >
        <span class="hepler-text" data-error="Title must not be empty"></span>
      </div>

      <div class="input-field">
        <label for="body">Body:</label>
        <input 
            name="body" 
            type="text" 
            v-model="body" 
            :class="[errors.body ? 'invalid' : 'validate']">
        <span class="hepler-text" data-error="body must not be empty"></span>
      </div>

      <button type="submit" class="waves-effect waves-light btn">Add Post</button>
    </form>

    <div class="progress" v-else-if="loading">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
// import post service
import PostService from "../../PostService";
const postService = new PostService();

export default {
  name: "PostForm",
  data() {
    return {
      loading: false,
      title: "",
      body: "",
      errors: {}
    };
  },
  methods: {

    onSubmit() {
        if(!this.validate()){
            this.loading = false;
            return;
        }

       this.loading = true;
       this.title = "";
       this.body = "";
       const post = {
        title: this.title,
        body: this.body
       };
       postService
        .writePost(post)
        .then(res => {
          this.loading = false;
          this.title = '';
          this.body = '';
          this.$emit('PostCreated', res.data);
        })
        .catch(err => console.log(err));
    },

    validate(){
        this.errors={};
        if(this.title.trim() === ''){
            this.errors.title = 'Title is required';
        }

        if(this.body.trim() === ''){
            this.errors.body = 'body'
        }

        if(Object.keys(this.errors).length > 0){
            return false;
        } else return true;
    }
  }
};
</script>
<style>
.form {
  background-color: rgb(14, 10, 10);
  padding: 10px;
  margin: 1.5em 0;
}
input {
  color: wheat;
}
</style>
