import React from "react";

import CommitteeInfo from "./CommitteeInfo.jsx";
import SelectContainer from "./SelectContainer.jsx";
import NavigationButton from "../NavigationButton.jsx";
import Login from "../Login.jsx";

import _s from "assets/css/Home.css";

const committees = [
  {
    name: "Dotkom",
    info: `Drifts- og utviklingskomiteen har ansvaret for alle linjeforeningens
    datasystemer. Vi leverer tjenester som nettside, intraweb og wiki,
    e-postsystemer, filområder og mye annet spennende. I en stor
    linjeforening er informasjonsflyt og kvalitet viktig. Drifts- og
    utviklingskomiteen prøver hele tiden å lage smarte løsninger som
    holder en høy standard, slik som i en bedrift. Er du interessert i
    programmering, drifting eller teknologi generelt? Vi kan tilby et
    unikt verv i en meget sosial gjeng som driver med IT på høyt nivå.
    Ingen forkunnskaper er påkrevd annet enn stor lærevilje!`,
    icon: "/static/dotkom-square.png",
  }, {
    name: "Trikom",
    info: `Trivselelskomiteen har ansvaret for trivsel blant informatikkstudentene.
    Dette inkluderer å arrangere små arrangementer i skoletiden,
    for eksempel vaffeldager eller andre ting som skaper trivsel.
    Vi er også ansvarlig for drift av kontoret som vil si å sette opp
    kontorvakter, møter, administrere tilganger og passe på at det er tilstrekkelig med mat, drikke, rekvisitter og lignende.
    Så hvis du har en gledesspreder i deg og liker å spre trivsel til dine medelever er trikom komiteen for deg.`,
    icon: "/static/trikom-square.png",
  }, {
    name: "Prokom",
    info: `Profil- og aviskomiteen sørger for at Onlines ansikt utad er
    profesjonelt og konsistent. Alt profileringsmateriale som klær,
    annonser, brev og brosjyrer, plakater, medaljer og andre effekter
    lages av oss. Vi har også en redaksjon som er ansvarlig for
    linjeforeningens tidsskrift, Offline. Har du en designerspire eller en
    skribent i magen? Vi leter etter deg som er interessert i design,
    markedsføring, journalisme eller skriving!`,
    icon: "/static/prokom-square.png",
  }, {
    name: "Fagkom",
    info: `Fag- og kurskomiteen tilbyr kunnskap om ny og spennende teknologi,
    gjennom blant annet kurs og foredrag. Vår jobb er å stimulere
    studentenes faglige interesser. Vi oppsøker kompetansen i
    næringslivet, og samarbeider tett med bedriftskomiteen for å komme i
    kontakt med de aktuelle bedriftene. Som medlem av Fag- og kurskomiteen
    vil du få god innsikt i emner utenfor skolen, og samtidig knytte
    tettere bånd til din fremtidige arbeidsgiver.`,
    icon: "/static/fagkom-square.png",
  }, {
    name: "Bedkom",
    info: `Bedriftskomiteens oppgave er å knytte studentene og næringslivet
    sammen. Som medlem vil du være med å arrangere bedriftspresentasjoner
    hvor bedriftene får fortelle om arbeidsmetoder, miljø og prosjekter
    mm. På denne måten vil du opprette en tidlig kontakt med næringslivet
    og potensielle arbeidstakere under studietiden, samtidig som du får et
    innblikk i hvordan bedrifter rekrutterer studenter. Etter en
    bedriftspresentasjon tar gjerne bedriften studentene ut for å mingle
    og bli kjent under et godt måltid. Bedriftskomiteen er også
    knutepunktet til våre samarbeidspartnere i næringslivet ellers.`,
    icon: "/static/bedkom-square.png",
  }, {
    name: "Arrkom",
    info: `Arrangementskomitéen jobber for at informatikkstudentene skal ha sosiale
    tilbud gjennom hele året. Vi arrangerer velkjente arrangement som
    immatrikuleringsball, blåtur, Åre-tur, kryssfest, filmkvelder og mye
    mer! Liker du at andre skal ha det kult? Er du en sosial og sprudlende
    person selv? Da er kanskje Arrangementskomitéen stedet for deg!`,
    icon: "/static/arrkom-square.png",
  }
]



function Home({ user, serviceProvider }) {
  console.log(user,serviceProvider);
  return(
    <div className={_s.background}>
      <div className={_s.main}>
        <NavigationButton link="/info">
          <img src="/static/arrow-blue.png" />
          Tilbake
        </NavigationButton>
      </div>
      <div className={_s.main}>
        <Login serviceProvider={serviceProvider} loggedIn={!!user}/>
      </div>
      <div className={_s.main}>
        { committees.map((committee) => (
          <CommitteeInfo key={committee.name} committee={committee} />
        ))}
      </div>
      <div className={_s.main}>
        <SelectContainer committees={committees} />
      </div>
    </div>
  )
} 

Home.defaultProps = {
  loggedIn: false
}

export default Home;