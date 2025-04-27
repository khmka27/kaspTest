import React, { useState } from 'react';
import { useAppSelector } from '../../../../shared/lib/hooks';
import { Button } from 'antd';
import styles from './NewsText.module.scss';

export default function NewsText(): React.JSX.Element {
  const text = useAppSelector((store) => store.news.data?.HIGHLIGHTS);
  const [showAll, setShowAll] = useState(false);

  // Выбираем случайный индекс только при первом рендере
  const randomIndex = Math.floor(Math.random() * (text?.length || 1));

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

  if (!text || text.length === 0) {
    return <div>Loading news...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Отображаем либо случайный элемент, либо все элементы */}
      {showAll ? (
        text.map((item, index) => (
          <p key={index} className={styles.newsText}>
            {parseTextWithKW(item)}
          </p>
        ))
      ) : (
        <p className={styles.newsText}>{parseTextWithKW(text[randomIndex])}</p>
      )}

      {/* Кнопка для переключения режима */}
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
