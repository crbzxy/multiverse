import logo from './logo.svg';
import './Scss/index.scss';

function RandomTerm() {
  return (
    <div className="RandomTerm">
      <header className="RandomTerm-header">
<h1>Hola Mundo</h1>        
<img src={logo} className="RandomTerm-logo" alt="logo" />
        <p>
          Edit <code>src/RandomTerm.js</code> and save to reload.
        </p>
        <a
          className="RandomTerm-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default RandomTerm;
