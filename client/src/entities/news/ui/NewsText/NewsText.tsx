import React, { useState } from 'react';
import { useAppSelector } from '../../../../shared/lib/hooks';
import { Button } from 'antd';
import styles from './NewsText.module.scss';

export default function NewsText(): React.JSX.Element {
  const text = useAppSelector((store) => store.news.data);
  const [showAll, setShowAll] = useState(false);

  const randomIndex = Math.floor(
    Math.random() * (text?.HIGHLIGHTS.length || 1)
  );

  const parseTextWithKW = (text: string) => {
    const parts = text.split(/(<kw>|<\/kw>)/g);

    return parts.map((part, index) => {
      if (part === '<kw>' || part === '</kw>') return null;
      if (parts[index - 1] === '<kw>') {
        return (
          <span key={index} className={styles.keyword}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  if (!text || text.HIGHLIGHTS.length === 0) {
    return <div>Loading news...</div>;
  }

  return (
    <div className={styles.container}>
      {showAll ? (
        <p className={styles.newsText}>{text.AB}</p>
      ) : (
        <p className={styles.newsText}>
          {parseTextWithKW(text.HIGHLIGHTS[randomIndex])}
        </p>
      )}

      <Button
        className={styles.showMoreButton}
        type="link"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show less' : 'Show more'}
        <span className={`${styles.triangle} ${showAll ? styles.rotated : ''}`}>
          ▼
        </span>
      </Button>
    </div>
  );
}
