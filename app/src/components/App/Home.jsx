import React from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import CommitteeInfo from "./CommitteeInfo";

import Button from 'components/Button';
import committees from 'common/committees';
import _s from "assets/css/Home.css";

function Home() {
  return (
    <div className={_s.container}>
      <p className={_s.text}>
        Online består av komiteer som sammen arbeider for at informatikkstudenter skal få en bedre hverdag.
        Her kan du lese mer om hva hver enkelt komité gjør samt å sende inn en søknad om intervju.
      </p>
      <div className={_s.content}>
        { Array.from(committees).map(([key, committee]) => (
          <CommitteeInfo key={key} committee={committee} />
        )) }
      </div>
      <div className={_s.nextLink}>
        <Link to="/application">
          <Button text="Gå til søknad" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
