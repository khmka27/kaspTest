import React, { useEffect } from 'react';
import {
  InfoCircleOutlined,
  CheckSquareOutlined,
  GlobalOutlined,
  UserOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks';
import { fetchNews } from '../../model/newsSlice';
import styles from './HeaderOfCard.module.scss';

export const HeaderOfCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.data);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (!news) {
    return <div>Loading news...</div>;
  }

  const formatTraffic = () => {
    if (!news.TRAFFIC || news.TRAFFIC.length === 0) {
      return 'No traffic data';
    }
    return news.TRAFFIC.map(
      (country) => `${country.value} ${Math.floor(country.count * 100)}%`
    ).join(' ');
  };

  const formatAuthors = () => {
    if (!news.AU || news.AU.length === 0) {
      return 'Anonimous';
    }
    return news.AU.join(', ');
  };

  return (
    <div className={styles.cardBlock}>
      {/* Верхний блок */}
      <div className={styles.cardBlock__header}>
        <div className={styles.cardBlock__info}>
          <span className={styles.cardBlock__date}>
            {new Date(news.DP).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className={styles.cardBlock__reach}>
            {news.REACH?.toLocaleString() || 'N/A'} Reach
          </span>
          <span className={styles.cardBlock__traffic}>
            Top Traffic: {formatTraffic()}
          </span>
        </div>
        <div className={styles.cardBlock__actions}>
          <span
            className={`${styles.cardBlock__badge} ${
              styles[
                `cardBlock__badge--${news.SENT?.toLowerCase() || 'neutral'}`
              ]
            }`}
          >
            {news.SENT || 'Neutral'}
          </span>
          <InfoCircleOutlined className={styles.cardBlock__icon} />
          <CheckSquareOutlined className={styles.cardBlock__icon} />
        </div>
      </div>

      {/* Заголовок */}
      <h3 className={styles.cardBlock__title}>{news.TI || 'No title'}</h3>

      {/* Футер */}
      <div className={styles.cardBlock__footer}>
        <div className={styles.cardBlock__meta}>
          <span className={styles.cardBlock__metaItem}>
            <GlobalOutlined className={styles.cardBlock__metaIcon} />{' '}
            <a
              href={news.URL}
              className={styles.cardBlock__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {news.DOM || 'No domain'}
            </a>
          </span>
          <span className={styles.cardBlock__metaItem}>
            <img
              src={'icons8-france-48.png'}
              className={styles.cardBlock__flag}
            />
            {news.CNTR || 'No country'}
          </span>
          <span className={styles.cardBlock__metaItem}>
            <ReadOutlined className={styles.cardBlock__metaIcon} />{' '}
            {news.LANG || 'No language'}
          </span>
          <span className={styles.cardBlock__metaItem}>
            <UserOutlined className={styles.cardBlock__metaIcon} />{' '}
            {formatAuthors()}
          </span>
        </div>
      </div>
    </div>
  );
};
