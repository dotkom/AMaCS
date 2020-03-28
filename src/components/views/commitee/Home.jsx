import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import CommitteeInfo from 'components/misc/CommitteeInfo';

import Button from 'components/misc/Button';
import _s from 'assets/css/Home.module.scss';
import { getApplicationUrl } from 'common/urls';
import { selectApplicationPeriod } from 'common/features/applicationPeriods';

const Home = () => {
  const applicationPeriod = useSelector(selectApplicationPeriod, shallowEqual);

  return (
    <div className={_s.container}>
      <h2 className={_s.title}>
        {applicationPeriod.title} - {applicationPeriod.year}
      </h2>
      <p className={_s.text}>
        Online består av komiteer som sammen arbeider for at informatikkstudenter skal få en bedre hverdag. Her kan du
        lese mer om hva hver enkelt komité gjør samt å sende inn en søknad om intervju.
      </p>
      <div className={_s.content}>
        {applicationPeriod.committees.map((committeeId) => (
          <CommitteeInfo key={committeeId} committeeId={committeeId} />
        ))}
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
