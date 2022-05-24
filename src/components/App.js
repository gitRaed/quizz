import { useState } from 'react';
import '../styles/App.css';

import { RenderContent } from './renderContent';

function App() {

  const [display, setDisplay] = useState(1);

  return (
    <div className="App">
      <div className="bg-img"></div>
      <header>
        <nav>
          <ul>
            <li onClick={() => {setDisplay(1)}}>Quizz1</li>
            <li onClick={() => {setDisplay(2)}}>Quizz2</li>
          </ul>
        </nav>
      </header>
      <RenderContent className="content" display={display}/>
    </div>
  );
}

export default App;
