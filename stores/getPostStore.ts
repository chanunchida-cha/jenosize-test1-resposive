import { Comment, Post } from "./../models/post";
import { makeAutoObservable } from "mobx";
import axios from "axios";
class GetPostStore {
  posts: Post[] = [];
  post: Post[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  url = process.env.NEXT_PUBLIC_URL

  async getPosts() {
    try {
      const response = await axios.get(`${this.url}/api/post`);
      this.posts = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getPostById(id: string | string[]) {
    try {
      const response = await axios.get(`${this.url}/api/post/${id}`);
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
