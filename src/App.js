import React from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Picture from './component/Picture/Picture';
import TagCloud from './component/TagCloud/TagCloud';
import PersonalCabinetContainer from './component/myCabinet/PersonalCabinetContainer';
import CreateCompanyContainer from './component/myCabinet/CreateCompanyContainer';
import LookCompanyContainer from './component/myCabinet/LookCompany/LookCompanyContainer';
import DescriptionContainer from './component/Description/DescriptionContainer';
import ScreenSaved from './component/screenSaved/screenSaved';
import Advertising from './component/Advertising/Advertising';
import CardsCampaignContainer from './component/CardsCampaign/CardsCampaignContainer';
import Counter from './component/counter/Counter';


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Route path='/createCompany' 
        render={() => <ScreenSaved/>} />
        <Route path='/description' 
        render={() => <ScreenSaved/>} />
         <Route path='/myCabinet' 
        render={() => <Advertising />} />
         <Route path='/home'
        render={() => <Picture />} />
      <div className='appWrapperContent'>
        <Route path='/description'
          render={() => <DescriptionContainer />} />
        <Route path='/myCabinet'
          render={() => <PersonalCabinetContainer />} />
        <Route path='/createCompany/'
          render={() => <CreateCompanyContainer />} />
        <Route path='/home'
          render={() => <CardsCampaignContainer />} />
        <Route path='/home'
          render={() => <TagCloud />} />
        <Route path='/lookCompany/'
          render={() => <LookCompanyContainer />} />
          <Route path='/counter'
          render={() => <Counter />} />
      </div>
      <div className='appWrapperFooter'>
        <Footer />
      </div>


    </div>
  );
}

export default App;
