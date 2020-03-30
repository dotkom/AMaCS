import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import _s from 'assets/css/CommitteeInfo.module.scss';
import { selectOnlineGroupById } from 'common/features/onlineGroup';
import { API_SETTINGS } from 'common/constants';

const CommitteeInfo = ({ committeeId }) => {
  const [showInfo, setShowInfo] = useState(false);
  const committee = useSelector(selectOnlineGroupById(committeeId));

  const handleClick = () => {
    setShowInfo((current) => !current);
  };

  if (!committee) {
    return 'Laster...';
  }

  return (
    <section className={classNames(_s.component, { [_s.open]: showInfo })}>
      <header onClick={handleClick} className={_s.header}>
        <img className={_s.img} src={`${API_SETTINGS.host}${committee.image.lg}`} alt={committee.name_long} />
        <h2 className={_s.name}>{committee.name_short}</h2>
      </header>
      <div className={_s.info}>{committee.application_description}</div>
    </section>
  );
};

export default CommitteeInfo;
