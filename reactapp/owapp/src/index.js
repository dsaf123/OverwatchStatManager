import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CenteredTabs from './CenteredTabs.js';

function App() {
  return (
    <div>
    <div>
      <CenteredTabs />
    </div>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
