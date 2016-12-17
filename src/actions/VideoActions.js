import {getVideos} from '../api/video';

export function loadVideos() {
  return {
    type: 'PROMISE',
    actions: ['VIDEOS_LOADING', 'VIDEOS_LOADED', 'VIDEOS_LOAD_FAILURE'],
    promise: getVideos(),
  };
}