import React, { useEffect } from 'react';
import {
  InfoCircleOutlined,
  CheckSquareOutlined,
  GlobalOutlined,
  UserOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import './headerOfCard.scss';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks';
import { fetchNews } from '../../model/newsSlice';

export const HeaderOfCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.data);
  console.log(news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Проверка на наличие данных
  if (!news) {
    return <div>Loading news...</div>;
  }

  // Форматирование трафика
  const formatTraffic = () => {
    if (!news.TRAFFIC || news.TRAFFIC.length === 0) {
      return 'No traffic data';
    }
    return news.TRAFFIC.map(
      (country) => `${country.value} ${Math.floor(country.count * 100)}%`
    ).join(' ');
  };

  // Форматирование авторов
  const formatAuthors = () => {
    if (!news.AU || news.AU.length === 0) {
      return 'No author data';
    }
    return news.AU.join(', ');
  };

  return (
    <div className="card-block">
      {/* Верхний блок с датой, охватом и трафиком */}
      <div className="card-block__header">
        <div className="card-block__info">
          <span className="card-block__date">
            {new Date(news.DP).toLocaleDateString()}
          </span>
          <span className="card-block__reach">
            {news.REACH?.toLocaleString() || 'N/A'} Reach
          </span>
          <span className="card-block__traffic">
            Top Traffic: {formatTraffic()}
          </span>
        </div>
        <div className="card-block__actions">
          <span
            className={`card-block__badge card-block__badge--${
              news.SENT?.toLowerCase() || 'neutral'
            }`}
          >
            {news.SENT || 'Neutral'}
          </span>
          <InfoCircleOutlined className="card-block__icon" />
          <CheckSquareOutlined className="card-block__icon" />
        </div>
      </div>

      {/* Заголовок карточки */}
      <h3 className="card-block__title">{news.TI || 'No title'}</h3>

      {/* Нижний блок с мета-информацией */}
      <div className="card-block__footer">
        <div className="card-block__meta">
          <span className="card-block__meta-item">
            <GlobalOutlined className="card-block__meta-icon" />
            <a
              href={news.URL}
              className="card-block__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {news.DOM || 'No domain'}
            </a>
          </span>
          <span className="card-block__meta-item">
            <img
              src={`/flags/${news.CNTR_CODE?.toLowerCase() || 'unknown'}.svg`}
              alt={news.CNTR}
              className="card-block__flag"
            />
            {news.CNTR || 'No country'}
          </span>
          <span className="card-block__meta-item">
            <ReadOutlined className="card-block__meta-icon" />
            {news.LANG || 'No language'}
          </span>
          <span className="card-block__meta-item">
            <UserOutlined className="card-block__meta-icon" />
            {formatAuthors()}
          </span>
        </div>
      </div>
    </div>
  );
};
