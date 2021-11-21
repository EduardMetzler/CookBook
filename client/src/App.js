
import { Route, Routes } from 'react-router';
import {LoginPage} from '../src/pages/Login.page'
import {HomePage} from '../src/pages/Home.page'

import {Layout} from '../src/components/layout'
import { Provider } from 'react-redux';
import { configureStore } from './store/store';



import './App.css';

function App() {
  return (


<Provider store={configureStore()}>
<Routes >

<Route path="/" element={<Layout/>}>
 <Route index element={<HomePage/>}/>

 <Route path="login" element={<LoginPage/>}/>

</Route>



  
 </Routes>
</Provider>



  );
}

export default App;
