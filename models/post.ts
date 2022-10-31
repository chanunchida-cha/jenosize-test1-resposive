export interface Comment {
  id: string;
  idPost: string;
  author: string;
  comment: string;
}

export interface Post {
  id: string;
  author: string;
  topic: string;
  post: string;
  like: number;
  point: number;
  diamont: number;
  date: string;
  comment: Comment[];
}
