export interface Buzz {
  id?: string;
  body: string;
  author: Author;
  createdAt: string;
  likes: number;
  shares: number;
  comments: Comment[];
  whoLiked: { userId: string }[];
}
export interface Comment {
  id: string;
  body: string;
  createdAt: string;
  likes: number;
  author: Author;
  buzzId: string;
  whoLiked: { userId: string }[];
}

export interface Author {
  id?: string;
  username: string;
  avatar: string;
}

export interface User {
  username: string;
  id: string;
}

export interface Token {
  iat: number;
  userId: string;
}
