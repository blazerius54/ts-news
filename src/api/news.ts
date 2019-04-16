import { INews } from '../models/news';
import { data } from '../data/index.json';

export interface IApiAnswer {
  status: number,
  data?: INews[],
}

export const getNews = ():Promise<IApiAnswer> =>
  new Promise<IApiAnswer>(resolve => {
    resolve({
      status: 200,
      data,
    })
  });

