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
  name: string;
  avatar: string;
}
