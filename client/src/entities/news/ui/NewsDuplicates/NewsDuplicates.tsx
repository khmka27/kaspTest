import React from 'react';
import { Button } from 'antd';
import { useAppSelector } from '../../../../shared/lib/hooks';
import { DownOutlined } from '@ant-design/icons';
import NewsTitle from '../NewsTitle/NewsTitle';
import styles from './NewsDuplicates.module.scss';

export default function NewsDuplicates(): React.JSX.Element {
  const news = useAppSelector((store) => store.news.data);

  if (!news) {
    return <div>Loading news...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.DublicateCount}>Duplicates: 3</h4>
        <div className={styles.sortToggle}>
          <DownOutlined /> By Relevance
        </div>
      </div>
      <div className={styles.content}>
        <NewsTitle hideTraffic hideBadge hideLanguage />
      </div>
      <Button className={styles.ViewDuplicatesButton}>
        <DownOutlined />
        View Duplicates
      </Button>
    </div>
  );
}
