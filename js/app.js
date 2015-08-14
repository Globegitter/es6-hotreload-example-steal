import React from 'react';
// import moment from 'moment';

// import AppRouter from './appRouter.js';
// import AppAnalytics from './common/services/AppAnalytics/AppAnalytics';
//
// import AuthService from '/common/js/auth/AuthService';
// import PlatformDetection from '/common/js/PlatformDetection/PlatformDetection';
// import startListening from '/common/js/OrientationDetection/OrientationDetection';
// import Env from './env/Env';
// import {
//   getTransactions,
//   getAllTransactions,
//   getAllWatchedItems,
//   getLoginState,
//   getSsoState,
//   login,
//   changeAppOrientation,
//   getAccountDetails,
//   startHockeyApp
//   } from './common/actions/Actions';
// import StatementStore from './common/stores/StatementStore/StatementStore';
// import {DisplayMessageStore} from './displayMessage/DisplayMessageModule';
// import ApplicationState from './common/stores/AppState/AppState';
// import {LOGGED_IN_STATES, SSO_STATES} from './common/stores/AppState/AppState';
// import HeaderView from './header/HeaderView';
import OffCanvasMenu from './components/OffCanvasMenu/OffCanvasMenu';
// import Balance from './components/Balance/Balance';
// import Brain from './components/Brain/Brain';
// import UserFeedback from './components/LoadingFeedback/LoadingFeedback';

// import WatchStore from './common/stores/watch/WatchStore';
// import {NotificationsStore, NotificationsPage} from './notifications/NotificationsModule';
// import {HomePage} from './home/HomeModule';
// import {OnboardingPage} from './onboarding/OnboardingModule';
// import {TransactionsPage} from './transactions/TransactionsModule';
// import {TransactionEditPage} from './transactionEdit/TransactionEditModule';
// import {SummaryPage} from './summary/SummaryModule';
// import {WatchPage} from './watch/WatchModule';

const CHILD_CONTEXT_TYPES = {
  // watchStore: React.PropTypes.object.isRequired,
  // statementStore: React.PropTypes.object.isRequired,
  // notificationsStore: React.PropTypes.object.isRequired,
  // applicationState: React.PropTypes.object.isRequired,
  // displayMessageStore: React.PropTypes.object.isRequired
};

class App extends React.Component {

  state = {
    // watchStore: WatchStore.getStore(),
    // statementStore: StatementStore.getStore(),
    // applicationState: ApplicationState.getStore(),
    // notificationsStore: NotificationsStore.getStore(),
    // displayMessageStore: DisplayMessageStore.getStore()
  };

  componentWillUpdate(nextProps, nextState) {
    // const {date: nextDate} = nextState.applicationState.urlParams;
    // const {date: currentDate} = this.state.applicationState.urlParams;
    // const nextDateMinusMonth = moment(nextDate, 'YYYY-MM').subtract(1, 'month').format('YYYY-MM');
    // // If there is a new date in the URL and we don't have the statements
    // // for that date we then fetch those statements
    // if (nextDate !== currentDate &&
    //     typeof nextDate !== 'undefined' &&
    //     typeof nextState.statementStore.transactions[nextDateMinusMonth] === 'undefined') {
    //   getTransactions(nextDateMinusMonth);
    // }
  }

  componentDidMount() {
    // this.storeListeners = [];
    // this.storeListeners.push(WatchStore.listen(this.updateState.bind(this, 'watchStore')));
    // this.storeListeners.push(StatementStore.listen(this.updateState.bind(this, 'statementStore')));
    // this.storeListeners.push(NotificationsStore.listen(this.updateState.bind(this, 'notificationsStore')));
    // this.storeListeners.push(ApplicationState.listen(this.updateState.bind(this, 'applicationState')));
    // this.storeListeners.push(DisplayMessageStore.listen(this.updateState.bind(this, 'displayMessageStore')));
    //
    // login.completed.listen(this.onLogin.bind(this));
    // getLoginState.completed.listen(this.onLogin.bind(this));
    // getLoginState.failed.listen(this.hideSplashScreen.bind(this));
    // getLoginState.failed.listen(getSsoState);
    //
    // AppAnalytics.start();
    // AppRouter.startRouter();
    // startHockeyApp();
    // startListening(changeAppOrientation, window);
    //
    // getLoginState();
  }

  componentWillUnmount() {
    // this.storeListeners.forEach(unlistener => unlistener());
  }

  hideSplashScreen() {
    // if (PlatformDetection.isCordova && navigator.splashscreen) {
    //   navigator.splashscreen.hide();
    // }
  }

  getChildContext() {
    // const {
      // watchStore,
      // statementStore,
      // notificationsStore,
      // applicationState // ,
      // displayMessageStore
      // } = this.state;
    // return {
    //   watchStore,
    //   statementStore,
    //   notificationsStore,
      // applicationState
    //   displayMessageStore
    // };
  }

  onLogin() {
    // getTransactions(moment().format('YYYY-MM'));
    // getTransactions(moment().subtract(1, 'month').format('YYYY-MM'));
    // getAccountDetails();
    // getAllTransactions();
    // getAllWatchedItems();
    // this.hideSplashScreen();
  }

  updateState(stateToUpdate, newState) {
    // this.setState({
    //   [stateToUpdate]: newState
    // });
  }

  supportsWebgl() {
    // TODO(matt): Move this to a common location
    // try {
    //   let canvas = document.createElement('canvas');
    //   return !!(window.WebGLRenderingContext && (
    //       canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    // } catch (e) {
    //   return false;
    // }
  }

  renderApp() {
    // <SummaryPage />
    // <UserFeedback />
    // <Balance />
    // <NotificationsPage />
    // <WatchPage />
    // <TransactionsPage />
    // <TransactionEditPage />
    // <HeaderView />
    // <OffCanvasMenu />
    return (
      <div className='wrapper'>
        <OffCanvasMenu />
      </div>
    );
  }

  render() {
    // const {applicationState} = this.state;
    // const userLoggedIn = applicationState.loggedInState === LOGGED_IN_STATES.LOGGED_IN;
    // const ssoLoggedIn = applicationState.ssoState === SSO_STATES.LOGGED_IN;
    return (
      <div className="exedra-app">
        {this.renderApp()}
      </div>
    );
  }
}

// App.childContextTypes = CHILD_CONTEXT_TYPES;

const startApp = () => {
  React.render(React.createElement(App, null), document.getElementById('main'));
};

const bootstrapApp = () => {
//   // TODO(benh): We should use envify to do this instead of checks
//   if (PlatformDetection.isCordova && window.hockeyapp && window.cordova.getAppVersion) {
//     // Start the hockey feedback
//     window.cordova.getAppVersion.getPackageName((packageName) => {
//       Env.setPackageName(packageName);
//       AuthService.setHost(Env.host);
//       startApp();
//     });
//   } else {
    startApp();
//   }
};

// if (PlatformDetection.isCordova) {
//   document.addEventListener('deviceready', bootstrapApp, false);
// } else {
  bootstrapApp();
// }
//
// window.logout = AuthService.logoutUser;
