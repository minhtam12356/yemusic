/* eslint-disable no-prototype-builtins */
import { Video } from '../../../../interface';
import getVideoDate from '../getVideoDate';
import getDateFromText from './getDateFromText';

export default async function formatVideo(video, speedDate = false): Promise<Video> {
  try {
    video = video.compactVideoRenderer || video.gridVideoRenderer || video.videoRenderer || video.playlistVideoRenderer;

    if (video) {
      // Get id
      const youtubeId: string = video.videoId;

      // Get thumbnail
      const lastThumbnailIdx: number = video.thumbnail?.thumbnails?.length - 1 || 0;
      const thumbnail: object = video.thumbnail?.thumbnails[lastThumbnailIdx] || {};

      // Get duration
      const duration: string = video.lengthText?.simpleText || video.lengthText?.runs[0].text;

      // Get title
      const title: string = video.title.simpleText || video.title.runs[0].text;

      // Get channel
      const channel = video.longBylineText?.runs[0].text || video.shortBylineText?.runs[0].text;

      // Get view
      const view = video.viewCountText.simpleText || video.viewCountText.runs[0].text;

      // publishedAt formatting

      let publishedAt: Date = new Date(Date.now());
      if (speedDate && video.publishedTimeText) {
        if (video.publishedTimeText.hasOwnProperty('simpleText')) {
          publishedAt = getDateFromText(video.publishedTimeText.simpleText);
        } else if (video.publishedTimeText.hasOwnProperty('runs')) {
          publishedAt = getDateFromText(video.publishedTimeText.runs[0].text);
        }
      } else {
        publishedAt = await getVideoDate(youtubeId);
      }

      return {
        youtubeId,
        title: title.trim(),
        duration,
        publishedAt,
        thumbnail,
        channel,
        view,
      };
    }

    return {
      youtubeId: 'didyoumean',
      title: '',
      duration: '',
      publishedAt: new Date(Date.now()),
      thumbnail: {},
      channel: '',
      view: '',
    };
  } catch (e) {
    console.log('format video failed');
  }
}
