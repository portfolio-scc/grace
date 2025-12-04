export interface Note {
  id: string;
  title: string;
  content: string;
  creatorId: string;
  creatorEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  uid: string;
  email: string | null;
}
