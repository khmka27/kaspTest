import React from 'react';
import './newsCard.scss';

import { Button } from 'antd';
import { HeaderOfCard } from '../../entities/news/ui/HeaderOfCard/HeaderOfCard';

export default function NewsCard(): React.JSX.Element {
  return (
    <div className="main_container">
      <HeaderOfCard />
      {/* <NewsKeyWords /> */}
      <Button className="button-orig-src" color="default">
        Original Source
      </Button>
    </div>
  );
}
