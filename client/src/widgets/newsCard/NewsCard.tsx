import React from 'react';
import './newsCrad.scss';
import { HeaderOfCard } from '../../entities/HeaderOfCard/HeaderOfCard';

export default function NewsCard(): React.JSX.Element {
  return (
    <div className="main_container">
      <HeaderOfCard />
    </div>
  );
}
