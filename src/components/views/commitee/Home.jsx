import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CommitteeInfo from 'components/misc/CommitteeInfo';

import Button from 'components/misc/Button';
import _s from 'assets/css/Home.module.scss';
import { getApplicationUrl } from 'common/urls';
import { selectCurrentOrLatestApplicationPeriod } from 'common/features/applicationPeriods';

const Home = () => {
  const applicationPeriod = useSelector(selectCurrentOrLatestApplicationPeriod);

  return (
    <div className={_s.container}>
      <p className={_s.text}>
        Online består av komiteer som sammen arbeider for at informatikkstudenter skal få en bedre hverdag. Her kan du
        lese mer om hva hver enkelt komité gjør samt å sende inn en søknad om intervju.
      </p>
      <div className={_s.content}>
        {applicationPeriod
          ? applicationPeriod.committees.map((committeeId) => (
              <CommitteeInfo key={committeeId} committeeId={committeeId} />
            ))
          : 'Laster...'}
      </div>
      <div className={_s.nextLink}>
        <Link to={getApplicationUrl()}>
          <Button text="Gå til søknad" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
