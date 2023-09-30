export interface Buzz {
  id?: string;
  body: string;
  author: Author;
  createdAt: string;
  likes: number;
  shares: number;
  comments: Comment[];
}
export interface Comment {
  id?: string;
  body: string;
  createdAt: string;
  likes: string;
  author: Author;
}

export interface Author {
  id?: string;
  name: string;
  avatar: string;
}

export interface User {
  username: string;
  password: string;
}
