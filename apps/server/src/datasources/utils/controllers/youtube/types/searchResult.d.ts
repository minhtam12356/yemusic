import Video from './video';

export default interface SearchResult {
  videos: Video[];
  token: string; // key to get more data (next/prev page result)
  apikey: string; // api key to get more data (next/prev page result)
}

