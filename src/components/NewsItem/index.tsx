import * as React from 'react';
import { INews } from "../../models/news";

interface IProps {
  item: INews
}

const NewsItem: React.FunctionComponent<IProps> = ({item: {title, body}}) => (
  <div>
    <h3>{title}</h3>
    <div>{body}</div>
  </div>
);

export default NewsItem;
