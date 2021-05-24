import logo from './logo.svg';
import './App.css';
import * as openpgp from 'openpgp';


	(async () => {
    const message = await openpgp.createMessage({ binary: new Uint8Array([0x01, 0x02, 0x03]) }); // or createMessage({ text: 'string' })
    const encrypted = await openpgp.encrypt({
        message,
        passwords: ['secret stuff'], // multiple passwords possible
        config: { preferredCompressionAlgorithm: openpgp.enums.compression.zlib } // compress the data with zlib
    });
    console.log(encrypted);
})();
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;
