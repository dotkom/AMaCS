import React from "react";

import CommitteeInfo from "./CommitteeInfo";

import committees from 'common/committees';
import _s from "assets/css/Home.css";

function Home() {
  return (
    <div>
      <p>
        Komitémedlemmene våre arbeider for at Online fungerer, og at alle informatikkstudenter har en flott studiehverdag.
        Her kan du søke om å bli en av oss!
      </p>
      <div className={_s.main}>
        <div className={_s.content}>
          { Object.keys(committees).map((key) => (
            <CommitteeInfo key={key} committee={committees[key]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
