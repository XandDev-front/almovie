import {ReactComponent as GithubIcon} from 'assets/images/github.svg';
import './styles.css';

export function Navbar() {
  return (
    <header>
      <nav className='container'>
        <div className='almovie-nav-content'>
          <h1>ALMovie</h1>
          <a href="https://github.com/Xannd" >
            <div className='almovie-contact-container'>
              <GithubIcon />
              <p className='almovie-contact-link'>/Xannd</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
