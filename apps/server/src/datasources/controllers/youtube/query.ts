import { Request, Response, NextFunction } from 'express';

import { ytb } from '../../utils/controllers';

export const listSong = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const { search, token, apikey } = req.body;

    const results = await ytb.searchVideo(search, token, apikey);

    return res.status(200).json({
      isSuccess: true,
      results,
    });
  } catch (error) {
    next(error);
  }
};

export const song = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const { youtubeId } = req.params;

    const result = await ytb.getAudio(youtubeId);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
