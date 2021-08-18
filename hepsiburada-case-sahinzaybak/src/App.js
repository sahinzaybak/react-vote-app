import {Route} from 'react-router-dom';
import index from './pages/index'
import newLinkPage from './pages/new-link'

import './assets/global.scss'
import './assets/scss/layout/header.scss'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={index}></Route>
      <Route exact path='/add-link' component={newLinkPage}></Route>
    </div>
  );
}

export default App;
