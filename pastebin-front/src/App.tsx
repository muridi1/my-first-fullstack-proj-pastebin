import React, {Fragment} from 'react';
import './App.css';
import InputPost from './components/InputPost';
import ListId from './components/ListId.js';

function App() {
  return (
<Fragment>
<h1>Pastebin</h1>

<div className="container">
<InputPost />
<ListId />
</div>

</Fragment>
  )
}

export default App;
