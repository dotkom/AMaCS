import arrkomIcon from 'assets/images/arrkom-square.svg';
import bedkomIcon from 'assets/images/bedkom-square.svg';
import dotkomIcon from 'assets/images/dotkom-square.svg';
import fagkomIcon from 'assets/images/fagkom-square.svg';
import prokomIcon from 'assets/images/prokom-square.svg';
import trikomIcon from 'assets/images/trikom-square.svg';

const committees = new Map([
  ['arrkom', {
    key: 'arrkom',
    name: "Arrkom",
    info: `Arrangementskomiteen jobber for at informatikkstudentene skal ha sosiale
    tilbud gjennom hele året. Vi arrangerer velkjente arrangement som
    immatrikuleringsball, blåtur, Åre-tur, kryssfest, filmkvelder og mye
    mer! Liker du at andre skal ha det kult? Er du en sosial og sprudlende
    person selv? Da er kanskje Arrangementskomitéen stedet for deg!`,
    id: 1,
    icon: arrkomIcon,
  }],
  ['bedkom', {
    key: 'bedkom',
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
    id: 3,
    icon: bedkomIcon,
  }],
  ['dotkom', {
    key: 'dotkom',
    name: "Dotkom",
    info: `Drifts- og utviklingskomiteen har ansvaret for alle linjeforeningens
    datasystemer. Vi leverer tjenester som nettside, wiki,
    e-postsystemer, filområder og mye annet spennende. I en stor
    linjeforening er informasjonsflyt og kvalitet viktig. Drifts- og
    utviklingskomiteen prøver hele tiden å lage smarte løsninger som
    holder en høy standard, slik som i en bedrift. Er du interessert i
    programmering, drifting eller teknologi generelt? Vi kan tilby et
    unikt verv i en meget sosial gjeng som driver med IT på høyt nivå.
    Ingen forkunnskaper er påkrevd annet enn stor lærevilje!`,
    id: 4,
    icon: dotkomIcon,
  }],
  ['fagkom', {
    key: "fagkom",
    name: "Fagkom",
    info: `Fag- og kurskomiteen tilbyr kunnskap om ny og spennende teknologi,
    gjennom blant annet kurs og foredrag. Vår jobb er å stimulere
    studentenes faglige interesser. Vi oppsøker kompetansen i
    næringslivet, og samarbeider tett med bedriftskomiteen for å komme i
    kontakt med de aktuelle bedriftene. Som medlem av Fag- og kurskomiteen
    vil du få god innsikt i emner utenfor skolen, og samtidig knytte
    tettere bånd til din fremtidige arbeidsgiver.`,
    id: 6,
    icon: fagkomIcon,
  }],
  ['prokom', {
    key: "prokom",
    name: "Prokom",
    info: `Profil- og aviskomiteen sørger for at Onlines ansikt utad er
    profesjonelt og konsistent. Alt profileringsmateriale som klær,
    annonser, brev og brosjyrer, plakater, medaljer og andre effekter
    lages av oss. Vi har også en redaksjon som er ansvarlig for
    linjeforeningens tidsskrift, Offline. Har du en designerspire eller en
    skribent i magen? Vi leter etter deg som er interessert i design,
    markedsføring, journalisme eller skriving!`,
    id: 7,
    icon: prokomIcon,
  }],
  ['trikom', {
    key: "trikom",
    name: "Trikom",
    info: `Trivselskomiteen har ansvaret for trivsel blant informatikkstudentene.
    Dette inkluderer å arrangere flere små arrangementer og hyggelige sammenkomster i løpet av året, og drift av kontoret.
    Vi arrangerer frokoster og serievisninger på kontoret, teltturer, juleverksted og andre ting som skaper trivsel.
    Vi er også ansvarlig for drift av kontoret, som vil si å sette opp kontorvakter, møter, administrere tilganger og passe på at det er tilstrekkelig med mat, drikke, rekvisitter og lignende.
    Så hvis du har en gledesspreder i deg og liker å spre trivsel til dine medstudenter, er trikom komiteen for deg!`,
    id: 8,
    icon: trikomIcon,
  }],
]);

export default committees;
