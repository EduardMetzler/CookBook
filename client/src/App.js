
import { Route, Routes } from 'react-router';
import {LoginPage} from '../src/pages/Login.page'
import {HomePage} from '../src/pages/Home.page'
import {RegisterPage} from '../src/pages/Register.page'
import {RequireAuth} from '../src/components/hoc/requireAuth'
import {NoAuth} from '../src/components/hoc/noAuth'
import {ErrorPage} from '../src/pages/Error.page'
import {DashboardPage} from '../src/pages/Dashboard.page'
import {CreateRecipePage} from '../src/pages/CreateRecipe.page'



import {Layout} from './components/layout/layout'
import { Provider } from 'react-redux';
import { store } from './store/rootStore';





import './App.css';


function App() {
  return (


<Provider store={store}>
<Routes >

<Route path="/" element={<Layout/>}>
 <Route index element={

   <HomePage/>
  }/>

   <Route path="dashboard" element={<RequireAuth>
   <DashboardPage/>
   </RequireAuth>
   }/>
      <Route path="create-recipe" element={<RequireAuth>
   <CreateRecipePage/>
   </RequireAuth>
   }/>

 <Route path="login" element={ <NoAuth>
   <LoginPage/>   </NoAuth>
   }/>

 <Route path="register" element={
 <NoAuth>
   <RegisterPage/>
   </NoAuth>
   }/>

</Route>
<Route path="*" element={<ErrorPage/>}/>
 </Routes>
</Provider>



  );
}

export default App;
