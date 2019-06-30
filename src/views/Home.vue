<template>
  <div>
    <h1>Our Posts</h1>
    <PostForm @craetedPost="addPost"/>
    <div class="row">
      <div class="col s6" v-for="(post, index) in posts" :item="post" :index="index" :key="post.id">
        <div class="card">
          <div class="card-content">
            <h4 class="card-title">{{ post.title }}</h4>
            <p class="timestamp">{{post.createdAt}}</p>
            <p>{{post.body}}</p>
          </div>
          <div class="card-action">
            <a href="#" class="btn edit-btn" @click="editPost(post)">Edit</a>
            <a href="#" class="btn delete-btn" @click="deletePost(post.is)">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h1:before {
    content: '';
    border-left: 2px solid
}

h1{
    margin: 1.7em 0;
    color: #f2395a
}

.btn {
  padding: 5px 10px;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 5px;
}

.delete-btn {
  background-color: red;
}
.edit-btn {
  background-color: wheat;
  color: black;
}
</style>

<script>
import PostService from "../PostService";
import PostForm from "../components/UI/PostForm";

const postService = new PostService();

export default {
  name: "posts",
  components: {
    PostForm
  },
  data() {
    return {
      posts: []
    };
  },
  methods:{
     addPost(post){
       this.posts.unshift(post);
     },
     editPost(post){
         postService.editPost(post)
         .then(res => console.log(res.data))
         .catch(err => console.log(err));
     },
     deletePost(id){
        postService.deletePost(id).then(() => {
          this.posts.filter(p => p.id !== id)
        }).catch(err => console.log(err));
     }
  },
  created() {
    postService
      .getAllPosts()
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => console.error(err));
  }
};
</script>
