import { Comment, Post } from "./../models/post";
import { makeAutoObservable } from "mobx";
import axios from "axios";
class GetPostStore {
  posts: Post[] = [];
  post: Post[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getPosts() {
    try {
      const response = await axios.get("http://localhost:3000/api/post");
      this.posts = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getPostById(id: string | string[]) {
    try {
      const response = await axios.get(`http://localhost:3000/api/post/${id}`);
      this.post = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async addComment(postId: string|string[], comment: Comment) {
    
    this.post[0].comment.push(comment);
    console.log(this.post);
    
  }
}
export const getPostStore = new GetPostStore();
