import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Ganesh Sabbani </span>
        from <span className={s.purple}> Mumbai,India.</span>
        <br />
          Basically, I'm a Civil Engineer who loves to build Web Applications
        <br /> University Of Mumbai, Maharashtra.  
        <br />
         Skilled Frontend Developer and Learning MERN Stack.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Sports
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Learning new technologies from Online Platform
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Swimming
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
