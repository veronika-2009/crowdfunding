import React from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Picture from './component/Picture/Picture';
import TagCloud from './component/TagCloud/TagCloud';
import Company from './component/Сompany/Company';
import PersonalCabinetContainer from './component/myCabinet/PersonalCabinetContainer';
import EditCompanyContainer from './component/myCabinet/EditCompanyContainer';



const App = (props) => {
 
  return (
    <div className='app-wrapper'>
      <Header />
      <Route path='/profile'
          render={() => <Picture /> } />
      <div className='appWrapperContent'>
        <Route path='/newCompany'
          render={() => <Company />} />
           <Route path='/myCabinet'
          render={() => <PersonalCabinetContainer />} />
          <Route path='/editCompany/'
          render={() => <EditCompanyContainer />} />
        <Route path='/profile'
          render={() => <TagCloud />} />
      </div>
      <div className='appWrapperFooter'>
        <Footer />
      </div>


    </div>
  );
}

export default App;
