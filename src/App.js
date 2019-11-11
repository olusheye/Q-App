import React, { Component, Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import Questions from "./Questions/Questions";
import { Route } from "react-router";
import { Switch, Redirect } from "react-router-dom";
import Callback from "./Callback";
import SecuredRoute from "./SecuredRoute/SecuredRoute";
import { asyncComponent } from "react-async-component";

const Question = asyncComponent({
  resolve: () => import("./Question/Question"),
});
const NewQuestion = asyncComponent({
  resolve: () => import("./NewQuestion/NewQuestion"),
});
// const Question = React.lazy(() => import('./Question/Question'));
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Suspense fallback={<div>Loading…</div>}>
          <Switch>
            <Route exact path="/" component={Questions} />
            <Route exact path="/question/:questionId" component={Question} />
            <Route exact path="/callback" component={Callback} />
            <SecuredRoute path="/new-question" component={NewQuestion} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
