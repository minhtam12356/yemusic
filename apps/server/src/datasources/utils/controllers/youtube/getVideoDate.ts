import getData from './helpers/getData';

export default async function getVideoDate(youtubeId: string) {
  try {
    let publishText: string = await getData('https://m.youtube.com/watch?v=' + youtubeId + '&type=date');
    publishText.replace('-', '/');
    publishText +=
      ' ' +
      Math.floor(Math.random() * 24) +
      ':' +
      Math.floor(Math.random() * 60) +
      ':' +
      Math.floor(Math.random() * 60);
    return new Date(Date.parse(publishText));
  } catch (e) {
    console.log('cannot get date for ' + youtubeId + ', try again');
  }
}
