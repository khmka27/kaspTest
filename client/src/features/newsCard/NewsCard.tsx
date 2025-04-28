import React, { useEffect } from 'react';
import styles from './NewsCard.module.scss';
import { Button } from 'antd';
import NewsText from '../../entities/news/ui/NewsText/NewsText';
import NewsKeyWords from '../../entities/news/ui/NewsKeyWords/NewsKeyWords';
import NewsTitle from '../../entities/news/ui/NewsTitle/NewsTitle';
import { useAppDispatch } from '../../shared/lib/hooks';
import { fetchNews } from '../../entities/news/model/newsSlice';
import NewsDuplicates from '../../entities/news/ui/NewsDuplicates/NewsDuplicates';

export default function NewsCard(): React.JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className={styles.mainContainer}>
      <NewsTitle />
      <NewsText />
      {<br />}
      <NewsKeyWords />
      <Button className={styles.buttonOrigSrc} color="default">
        Original Source
      </Button>
      <NewsDuplicates />
    </div>
  );
}
