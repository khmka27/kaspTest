import React from 'react';
import styles from './NewsCard.module.scss';

import { Button } from 'antd';
import { HeaderOfCard } from '../../entities/news/ui/HeaderOfCard/HeaderOfCard';
import NewsText from '../../entities/news/ui/NewsText/NewsText';
import NewsKeyWords from '../../entities/news/ui/NewsKeyWords/NewsKeyWords';
import Duplicates from '../../entities/news/ui/SecondNewsHeader./Duplicates';

export default function NewsCard(): React.JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <HeaderOfCard />
      <NewsText />
      {<br />}
      <NewsKeyWords />
      <Button className={styles.buttonOrigSrc} color="default">
        Original Source
      </Button>
      <Duplicates />
    </div>
  );
}
