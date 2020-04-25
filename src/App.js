import React from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Picture from './component/Picture/Picture';
import TagCloud from './component/TagCloud/TagCloud';
import Company from './component/Сompany/Company';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Picture />

      <div className='appWrapperContent'>
        <Route path='/admin/'
          render={() => <ProfileContainer />} />
        <Route path='/profile'
          render={() => <Company />} />
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
