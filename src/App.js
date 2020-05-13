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
import Count from "./component/counter/Count";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Route path="/createCompany"
        render={() => <ScreenSaved />} />
      <Route path="/description"
        render={() => <ScreenSaved />} />
      <Route path="/myCabinet"
        render={() => <Advertising />} />
      <Route exact path="/"
        render={() => <Picture />} />
      <div className="appWrapperContent">
        <Route path="/description"
          render={() => <DescriptionContainer />} />
        <Route path="/myCabinet"
          render={() => <PersonalCabinetContainer />} />
        <Route path="/createCompany/"
          render={() => <CreateCompanyContainer />} />
        <Route exact path="/"
          render={() => <CardsCampaignContainer />} />
        <Route path="/lookCompany/:id"
          render={() => <LookCompanyContainer />} />
        <Route path="/counter"
          render={() => <Count />} />
      </div>
      <div className="appWrapperFooter">
        <Footer />
      </div>
    </div>
  );
}
export default App;
