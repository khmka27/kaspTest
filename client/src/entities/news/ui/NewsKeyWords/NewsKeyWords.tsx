import React from 'react';
import { useAppSelector } from '../../../../shared/lib/hooks';
import { Button } from 'antd';
import styles from './NewsKeyWords.module.scss';

export default function NewsKeyWords(): React.JSX.Element {
  const tags = useAppSelector((store) => store.news.data?.KW);

  return (
    <div className={styles.container}>
      {tags?.map((tag) => (
        <Button key={tag.value} className={styles.tagButton}>
          {tag.value}
          {'  '}
          {tag.count}
        </Button>
      ))}
    </div>
  );
}
