export type Tweet = {
  id: string;
  user: { profile_image_url: string; name: string; screen_name: string };
  text: string;
  retweet_count: number;
  favorite_count: number;
};

export type Action = {
  type: string;
  payload: any;
};
