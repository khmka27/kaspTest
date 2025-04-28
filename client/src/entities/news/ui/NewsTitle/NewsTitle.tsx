import React from 'react';
import {
  InfoCircleOutlined,
  CheckSquareOutlined,
  GlobalOutlined,
  UserOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import styles from './NewsTitle.module.scss';
import { useAppSelector } from '../../../../shared/lib/hooks';

interface HeaderOfCardProps {
  hideTraffic?: boolean;
  hideBadge?: boolean;
  hideLanguage?: boolean;
  hideAuthors?: boolean;
  hideReach?: boolean;
  hideDate?: boolean;
  hideDomain?: boolean;
  hideCountry?: boolean;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const SentimentBadge: React.FC<{ sentiment?: string }> = ({
  sentiment = 'neutral',
}) => {
  return (
    <span
      className={`${styles.cardBlock__badge} ${
        styles[`cardBlock__badge--${sentiment.toLowerCase()}`]
      }`}
    >
      {sentiment || 'Neutral'}
    </span>
  );
};

const formatAuthors = (authors?: string[]): string => {
  if (!authors || authors.length === 0) return 'Anonymous';
  return authors.join(', ');
};

const formatTraffic = (
  traffic?: Array<{ value: string; count: number }>
): string => {
  if (!traffic || traffic.length === 0) return 'No traffic data';
  return traffic
    .map((country) => `${country.value} ${Math.floor(country.count * 100)}%`)
    .join(' ');
};

export default function NewsTitle({
  hideTraffic = false,
  hideBadge = false,
  hideLanguage = false,
  hideAuthors = false,
  hideReach = false,
  hideDate = false,
  hideDomain = false,
  hideCountry = false,
}: HeaderOfCardProps): React.JSX.Element {
  const news = useAppSelector((state) => state.news.data);

  if (!news) return <div>Loading news...</div>;

  return (
    <div className={styles.cardBlock}>
      {/* Верхний блок */}
      <div className={styles.cardBlock__header}>
        <div className={styles.cardBlock__info}>
          {!hideDate && (
            <span className={styles.cardBlock__date}>
              {formatDate(news.DP)}
            </span>
          )}
          {!hideReach && (
            <span className={styles.cardBlock__reach}>
              {news.REACH?.toLocaleString() || 'N/A'} Reach
            </span>
          )}
          {!hideTraffic && (
            <span className={styles.cardBlock__traffic}>
              Top Traffic: {formatTraffic(news.TRAFFIC)}
            </span>
          )}
        </div>
        <div className={styles.cardBlock__actions}>
          {!hideBadge && <SentimentBadge sentiment={news.SENT} />}
          <InfoCircleOutlined className={styles.cardBlock__icon} />
          <CheckSquareOutlined className={styles.cardBlock__icon} />
        </div>
      </div>

      <h3 className={styles.cardBlock__title}>{news.TI || 'No title'}</h3>

      <div className={styles.cardBlock__footer}>
        <div className={styles.cardBlock__meta}>
          {!hideDomain && (
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
          )}
          {!hideCountry && (
            <span className={styles.cardBlock__metaItem}>
              <img
                src={'icons8-france-48.png'}
                className={styles.cardBlock__flag}
                alt="Country flag"
              />
              {news.CNTR || 'No country'}
            </span>
          )}
          {!hideLanguage && (
            <span className={styles.cardBlock__metaItem}>
              <ReadOutlined className={styles.cardBlock__metaIcon} />{' '}
              {news.LANG || 'No language'}
            </span>
          )}
          {!hideAuthors && (
            <span className={styles.cardBlock__metaItem}>
              <UserOutlined className={styles.cardBlock__metaIcon} />{' '}
              {formatAuthors(news.AU)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
