import axios from 'axios';

const url = 'https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

class PostService {
   getAllPosts(){
       return axios.get(`${url}/posts`);
   }

   getPosts(num){
       return axios.get(`${url}/posts/${num}`);
   }

   writePost(post){
       if(post.id){
           return axios.put(`${url}/post/${post.id}`, post); 
       }

       return axios.post(`${url}/post`, post);
    }

    deletePost(id){
        return axios.delete(`${url}/post/${id}`);
    }
};

export default PostService;