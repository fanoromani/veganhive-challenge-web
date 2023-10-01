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
  likes: number;
  author: Author;
}

export interface Author {
  id?: string;
  username: string;
  avatar: string;
}

export interface User {
  username: string;
  password: string;
}

export interface Token {
  iat: number;
  userId: string;
}
