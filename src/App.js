import React from 'react';
import { sendUserAction } from './requests/userActions';

function App() {
  return (
    <div className="App">
        <p>
          Press button to send a request to back-end
        </p>
        <input type="button" onClick={() => sendUserAction("hello")}/>
    </div>
  );
}

export default App;
