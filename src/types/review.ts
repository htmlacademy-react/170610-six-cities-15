type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Comment = {
  id: string;
  date: Date;
  user: User;
  comment: string;
  rating: number;
}
