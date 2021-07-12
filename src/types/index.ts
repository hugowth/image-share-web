export type LoginPayload = {
  username: string;
  password: string;
};

export type User = {
  id: string;
  username: string;
};

export type Post = {
  id: string;
  created_by: User;
  create_date: string;
  description: string;
  image: string;
  update_date: string;
};

export type PostPayload = {
  description: string;
  image: File | undefined;
};
