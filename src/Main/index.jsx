import React from "react";
import css from "./Main.module.css";
import sportImg from "../img/sport.svg";
import youShouldKnow from "../img/youShouldKnow.svg";
import manSmiling from "../img/manSmiling.svg";
import womanSmiling from "../img/smilingWoman.svg";

export const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <section className={css.container}>
        <div className={css.wrapper}>
          <nav className={css.navigator}>
            <span className={css.logo}>Thrivetalk</span>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
            <button className={css.contactUs}>CONTACT US</button>
          </nav>
          <div className={css.MainBlock}>
            <div>
              <p className={css.logo}>Thrivetalk</p>
              <h1 className={css.mainText}>
                HELPING YOU THRIVE IN ALL AREAS OF LIFE
              </h1>
              <p className={css.infoText}>
                Our highly talented therapists can help you with a range of
                issues including relationships, sex, PTSD, depression, social
                anxiety, or even just caring for yourself more.
              </p>
              <button className={css.who}>WHO AM I</button>
              <button className={css.what}>WHAT DO I DO</button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- */}

      <section className={css.container}>
        <div className={css.sport}>
          <div className={css.sportBluePart}>
            <h2 className={css.sportMainText}>Why Thrive?</h2>
            <p className={css.sportInfoText}>
              <span>
                Want to improve your well-being from the comfort of your own
                couch? Are you having trouble finding the right therapist?
              </span>{" "}
              Here at ThriveTalk, our licensed therapists provide the same
              quality care you would get in office from anywhere you can access
              your laptop or mobile phone. Become your best self with
              ThriveTalk. Start therapy now with a licensed therapist!
            </p>
          </div>
          <div>
            <img src={sportImg} />
          </div>
        </div>
      </section>

      {/* ------------------------------------- */}

      <section className={css.container}>
        <div className={css.aboutUsWrapper}>
          <span className={css.aboutMainText}>ABOUT US</span>
          <p className={css.aboutInfoText}>
            We want to help you thrive! Whether you are just looking for someone
            to talk to, or are struggling with a mental wellness issue we’re
            here to help. Our highly talented therapists can help you with a
            range of issues including relationships, sex, PTSD, depression,
            social anxiety, or even just caring for yourself more.
          </p>
        </div>
        <p className={css.aboutLastText}>WE CAN HELP YOU WITH</p>
      </section>

      {/* ------------------------------------ */}

      <section className={css.container}>
        <div className={css.cards}>
          <div className={css.cardPink}>
            <div className={css.colorCardTitle}>Weight Lifting</div>
          </div>
          <div className={css.cardGreen}>
            <div className={css.colorCardTitle}>Running & Spinning</div>
          </div>
          <div className={css.cardBlue}>
            <div className={css.colorCardTitle}>Pumping Iron</div>
          </div>
          <div className={css.cardDark}>
            <div className={css.colorCardTitle}>Pumping Iron</div>
          </div>
          {/* <HelpCard bg="rgb(224, 185, 179)" title="Weight Lifting" />
          <HelpCard bg="#C4E769" title="Running  & Spinning"/>
          <HelpCard bg="#62D0DF" title="Pumping Iron"/>
          <HelpCard bg="#0052C1" title="Pumping Iron"/> */}
        </div>
      </section>
      {/* ------------------------------------------------------ */}
      <section className={css.container}>
        <div className={css.bigCards}>
          <div className={css.firstBigCard}>
            <p className={css.bigCardTitle}>Physical Health</p>
          </div>
          <div className={css.secondBigCard}>
            <p className={css.bigCardTitle}>Mental Health</p>
          </div>
          <div className={css.thirdBigCard}>
            <p className={css.bigCardTitle}>Nutrition</p>
          </div>
          <div className={css.fourthBigCard}>
            <p className={css.bigCardTitle}>Gymnastics</p>
          </div>
          <div className={css.fifthBigCard}>
            <p className={css.bigCardTitle}>Crossfit</p>
          </div>
          <div className={css.sixthBigCard}>
            <p className={css.bigCardTitle}>Aerobics</p>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------- */}

      <section className={css.container}>
        <div className={css.infoCards}>
          <div className={css.infoCard}>
            <p className={css.infoMainText}>Nutritional Plans</p>
            <span className={css.infoMinorText}>
              Nutritional Facts on some shitty things that you don’t care about
              and even we don’t , I need to replace this copy.
            </span>
          </div>
          <div className={css.infoCard}>
            <p className={css.infoMainText}>Weight Loss</p>
            <span className={css.infoMinorText}>
              Nutritional Facts on some shitty things that you don’t care about
              and even we don’t , I need to replace this copy.
            </span>
          </div>
          <div className={css.infoCard}>
            <p className={css.infoMainText}>Mental Peace</p>
            <span className={css.infoMinorText}>
              Nutritional Facts on some shitty things that you don’t care about
              and even we don’t , I need to replace this copy.
            </span>
          </div>
          <div className={css.infoCard}>
            <p className={css.infoMainText}>Home Training</p>
            <span className={css.infoMinorText}>
              Nutritional Facts on some shitty things that you don’t care about
              and even we don’t , I need to replace this copy.
            </span>
          </div>
          <div className={css.infoCard}>
            <p className={css.infoMainText}>Work/Life Balance</p>
            <span className={css.infoMinorText}>
              Nutritional Facts on some shitty things that you don’t care about
              and even we don’t , I need to replace this copy.
            </span>
          </div>
          <div className={css.infoCard}>
            <p className={css.infoMainText}>Cardio</p>
            <span className={css.infoMinorText}>
              Nutritional Facts on some shitty things that you don’t care about
              and even we don’t , I need to replace this copy.
            </span>
          </div>
        </div>
      </section>
      {/* -------------------------------------------------------- */}
      <section className={css.container}>
        <div className={css.shouldKnow}>
          <img src={youShouldKnow} alt="shouldKnow" />
          <div className={css.shouldKnowInfo}>
            <span className={css.shouldKnowHeadText}>YOU SHOULD ALSO KNOW</span>
            <h2 className={css.shouldKnowInfoText}>
              MDD affects more than 16.1 million American adults, or about
              6.7%of the U.S. population age 18 and older in a given year. We at
              <span> ThriveTalk</span> can help you.
            </h2>
            <span className={css.shouldKnowFootText}>GET HELP NOW</span>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------- */}

      <section className={css.containerSmile}>
        <div className={css.contactUsSmile}>
          <span className={css.contSmileTitle}>CONTACT US</span>
          <h1 className={css.contSmileMainText}>Ready. Set. Smile</h1>
          <p className={css.contSmileInfoText}>
            Take the free online assessment to see if you are a candidate and
            get started on your journey.
          </p>
          <span className={css.contSmileFootText}>GET HELP NOW</span>
        </div>
        <img src={manSmiling} alt="" className={css.smilingMan} />
      </section>
      {/* ------------------------------------------------------------- */}

      <section className={css.container}>
        <div className={css.footer}>
          <img src={womanSmiling} alt="" />
          <div className={css.footerInfo}>
            <div className={css.someInfo}>
              <p className={css.footerMainTitle}>SOME INFO</p>
              <p className={css.someInfoText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula.
              </p>
            </div>
            <div className={css.health}>
              <p className={css.footerMainTitle}>ENFOLD HEALTH</p>
              <p className={css.someInfoText}>
                Main Street 1, Olcott Buffalo, United States
                <br />
                +555 283 784 333
                <br />
                <a href="!#">office@enfold-health.com</a>
              </p>
            </div>
            <div className={css.officeHours}>
              <p className={css.footerMainTitle}>OFFICE HOURS</p>
              <p className={css.someInfoText}>
                Mo-Fr: 8:00-19:00
                <br />
                Sa: 8:00-14:00
                <br />
                Su: closed
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------- */}
      <section className={css.adress}>
        <p className={css.adressText}>© Copyright - ThriveTalk 2017</p>
      </section>
    </div>
  );
};
