import React, {Fragment} from 'react';
import './App.css';
import InputPost from './components/InputPost';
//import ListId from './components/ListId';
function App() {
  return (
<Fragment>
<h1>Pastebin</h1>
{/* <ListId /> */}
<div className="container">
<InputPost />
</div>

</Fragment>
  )
}

export default App;
