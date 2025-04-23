import React from 'react';
import {
  InfoCircleOutlined,
  CheckSquareOutlined,
  GlobalOutlined,
  UserOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import './headerOfCard.scss';

export const HeaderOfCard: React.FC = () => {
  return (
    <div className="card-block">
      {/* Верхний блок с датой, охватом и трафиком */}
      <div className="card-block__header">
        <div className="card-block__info">
          <span className="card-block__date">18 Jun 2024</span>
          <span className="card-block__reach">211K Reach</span>
          <span className="card-block__traffic">
            Top Traffic: Austria 38% USA 12% Italian 8%
          </span>
        </div>
        <div className="card-block__actions">
          <span className="card-block__badge card-block__badge--positive">
            Positive
          </span>
          <InfoCircleOutlined className="card-block__icon" />
          <CheckSquareOutlined className="card-block__icon" />
        </div>
      </div>

      {/* Заголовок карточки */}
      <h3 className="card-block__title">Заголовок новости или аналитики</h3>

      {/* Нижний блок с мета-информацией */}
      <div className="card-block__footer">
        <div className="card-block__meta">
          <span className="card-block__meta-item">
            <GlobalOutlined className="card-block__meta-icon" />
            <a href="#" className="card-block__link">
              Punto-info.it
            </a>
          </span>
          <span className="card-block__meta-item">
            <img
              src="/flags/austria.svg"
              alt="Austria"
              className="card-block__flag"
            />
            Austria
          </span>
          <span className="card-block__meta-item">
            <ReadOutlined className="card-block__meta-icon" />
            En
          </span>
          <span className="card-block__meta-item">
            <UserOutlined className="card-block__meta-icon" />
            Emily C., Taormina A., et al.
          </span>
        </div>
      </div>
    </div>
  );
};
