import React, { useState } from "react";
import "./App.css"
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Picture from "./component/Picture/Picture";
import PersonalCabinetContainer from "./component/myCabinet/PersonalCabinetContainer";
import CreateCompanyContainer from "./component/CreateCompany/CreateCompanyContainer";
import LookCompanyContainer from "./component/myCabinet/LookCompany/LookCompanyContainer";
import DescriptionContainer from './component/Description/DescriptionContainer';
import ScreenSaved from "./component/screenSaved/screenSaved";
import Advertising from "./component/Advertising/Advertising";
import CardsCampaignContainer from "./component/CardsCampaign/CardsCampaignContainer";
import LoginContainer from "./component/Login/LoginContainer";
import RegisterContainer from "./component/Register/RegisterContainer";
import { locales, localeMessages } from "./component/shared/locales";
import storageKeys from "./component/shared/storageKeys";
import { IntlProvider } from 'react-intl';


const App = (props) => {
  const [locale, setLocale] = useState(localStorage.getItem(storageKeys.LOCALE) || locales.EN);
  return (
    <IntlProvider locale={locale} defaultLocale={locales.EN} messages={localeMessages[locale]}>
    <div className="app-wrapper">
      <Header locale={locale} setLocale={setLocale}/>
      <Route path="/createCompany"
        render={() => <ScreenSaved />} />
      <Route path="/description"
        render={() => <ScreenSaved />} />
      <Route path="/lookCompany/"
        render={() => <ScreenSaved />} />
      <Route path="/myCabinet"
        render={() => <Advertising />} />
      <Route exact path="/"
        render={() => <Picture />} />
      <div className="appWrapperCompany">
        <Route path="/lookCompany/:id"
          render={() => <LookCompanyContainer locale={locale} setLocale={setLocale}/>} />
        <Route exact path="/login"
          render={() => <LoginContainer locale={locale} setLocale={setLocale}/>} />
        <Route exact path="/register"
          render={() => <RegisterContainer locale={locale} setLocale={setLocale}/>} />
      </div>
      <div className="appWrapperContent">
        <Route path="/description/:id"
          render={() => <DescriptionContainer />} />
        <Route path="/myCabinet"
          render={() => <PersonalCabinetContainer locale={locale} setLocale={setLocale}/>} />
        <Route path="/createCompany/"
          render={() => <CreateCompanyContainer locale={locale} setLocale={setLocale}/>} />
        <Route exact path="/"
          render={() => <CardsCampaignContainer locale={locale} setLocale={setLocale} />} />
      </div>
      <div className="appWrapperFooter">
        <Footer locale={locale} setLocale={setLocale}/>
      </div>
    </div>
    </IntlProvider>
  );
}
export default App;
