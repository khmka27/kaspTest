import React from 'react';
import styles from './NewsPage.module.scss';
import NewsCard from '../../../features/newsCard/NewsCard';

export default function NewsPage(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <NewsCard />
    </div>
  );
}
