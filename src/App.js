import React from "react";
import "./App.css"
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Picture from "./component/Picture/Picture";
import PersonalCabinetContainer from "./component/myCabinet/PersonalCabinetContainer";
import CreateCompanyContainer from "./component/myCabinet/CreateCompanyContainer";
import LookCompanyContainer from "./component/myCabinet/LookCompany/LookCompanyContainer";
import DescriptionContainer from './component/Description/DescriptionContainer';
import ScreenSaved from "./component/screenSaved/screenSaved";
import Advertising from "./component/Advertising/Advertising";
import CardsCampaignContainer from "./component/CardsCampaign/CardsCampaignContainer";
import LoginContainer from "./component/Login/LoginContainer";
import RegisterContainer from "./component/Register/RegisterContainer";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
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
          render={() => <LookCompanyContainer />} />
        <Route exact path="/login"
          render={() => <LoginContainer />} />
        <Route exact path="/register"
          render={() => <RegisterContainer />} />
      </div>
      <div className="appWrapperContent">
        <Route path="/description/:id"
          render={() => <DescriptionContainer />} />
        <Route path="/myCabinet"
          render={() => <PersonalCabinetContainer />} />
        <Route path="/createCompany/"
          render={() => <CreateCompanyContainer />} />
        <Route exact path="/"
          render={() => <CardsCampaignContainer />} />


      </div>
      <div className="appWrapperFooter">
        <Footer />
      </div>
    </div>
  );
}
export default App;
