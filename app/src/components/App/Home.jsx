import React from "react";
import { Link } from 'react-router-dom';

import CommitteeInfo from "./CommitteeInfo";

import Button from 'components/Button';
import committees from 'common/committees';
import _s from "assets/css/Home.css";

function Home() {
  return (
    <div className={_s.container}>
      <p className={_s.text}>
        Komitémedlemmene våre arbeider for at Online fungerer, og at alle informatikkstudenter har en flott studiehverdag.
        Her kan du søke om å bli en av oss!
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
