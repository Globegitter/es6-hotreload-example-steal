// import PlatformDetection from '/common/js/PlatformDetection/PlatformDetection';

import React from 'react';
import ClassNames from 'classnames';
// import ListItem from './ListItem/ListItem.jsx!';

/**
 * Off canvas menu and hamburger button
 * A list of links that provide non-linear access to all main elements of the application
 */

const CONTEXT_TYPES = {
  // applicationState: React.PropTypes.object.isRequired
};

// Defines the order and labels of the menu
const MENU_LABELS = {
  about: {label: 'About123', active: false},
  settings: {label: 'Settings', active: false},
  terms: {label: 'Terms and Conditions', active: false},
  policy: {label: 'Privacy Policy', active: false},
  jsoncsv: {label: 'Export To CSV', active: false, hideOnMobile: true},
  feedback: {label: 'Feedback', active: true},
  logout: {label: 'Logout', active: true}
};

class OffCanvasMenu extends React.Component {

  state = {
    isActive: false
  }

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  shouldhideOnMobile(hideOnMobile) {
    return hideOnMobile;
  }

  clickHandler(event) {
    event.preventDefault();
    const active = !this.state.isActive;
    this.setState({
      isActive: active
    })
  }

  getList() {
    return Object.keys(MENU_LABELS).map((id, index) => {
      let label = MENU_LABELS[id].label;
      let active = MENU_LABELS[id].active;
      return (
        <div>
          <li>
            <a href="#" onClick={this.clickHandler.bind(this)}>{label}</a>
          </li>
        </div>
      );
    });
  }

  render() {
    // const {applicationState} = this.context;
    console.log('current state is', this.state.isActive)
    const applicationState = {};
    let cn = ClassNames('off-canvas-menu', {active: applicationState.menuActive === true});
    return (
      <div className={cn}>
        <div className='offscreen-menu-content'>
          <div className='offscreen-menu-title'>Menu</div>
          <ul className='list-items'>
            {this.getList()}
          </ul>
        </div>
      </div>
    );
  }
}

// OffCanvasMenu.contextTypes = CONTEXT_TYPES;

export default OffCanvasMenu;
