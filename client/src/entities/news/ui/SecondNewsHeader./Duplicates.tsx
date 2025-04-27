import React from 'react';
import styles from './Duplicates.module.scss';
import { Button } from 'antd';
import {
  CheckSquareOutlined,
  DownOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useAppSelector } from '../../../../shared/lib/hooks';

export default function Duplicates(): React.JSX.Element {
  const news = useAppSelector((store) => store.news.data);

  if (!news) {
    return <div>Loading news...</div>;
  }

  const formatAuthors = () => {
    if (!news.AU || news.AU.length === 0) {
      return 'Anonimous';
    }
    return news.AU.join(', ');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.DublicateCount}>Duplicates: 3</h4>
        <div className={styles.sortToggle}>
          <DownOutlined /> By Relevance
        </div>
      </div>
      <div className={styles.content}>
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
            </div>
            <div className={styles.cardBlock__actions}>
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
                <UserOutlined className={styles.cardBlock__metaIcon} />{' '}
                {formatAuthors()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button className={styles.showMoreButton}>
        <DownOutlined />
        Show More
      </Button>
    </div>
  );
}
