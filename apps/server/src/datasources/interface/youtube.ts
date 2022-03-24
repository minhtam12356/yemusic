export type SearchResult = {
  songs: Video[];
  token: string; // key to get more data (next/prev page result)
  apikey: string; // api key to get more data (next/prev page result)
};

export type Video = {
  youtubeId: string;
  title: string;
  duration: string;
  publishedAt: Date;
  thumbnail: object;
  channel: string;
  view: string;
};

export type getAudioResponse = {
  isSuccess: boolean;
  message?: string;
  audioUrl: string;
};
