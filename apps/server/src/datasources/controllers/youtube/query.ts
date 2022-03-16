import * as moment from 'moment';
import { youtube } from 'scrape-youtube';

export const listSong = async (req, res, next) => {
  try {
    const { search } = req.body;

    const { videos } = await youtube.search(search, { type: 'video' });

    return res.status(200).json({
      isSuccess: true,
      listYoutube: videos.map(video => {
        const { id, title, thumbnail, description, duration, uploaded, channel } = video;
        return {
          youtubeId: id,
          title,
          thumbnail,
          description,
          duration: moment.utc(duration * 1000).format('HH:mm:ss'),
          createdAt: uploaded,
          channel: channel.name,
        };
      }),
    });
  } catch (error) {
    next(error);
  }
};
