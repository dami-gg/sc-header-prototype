import React, {Component} from 'react';
import {connect} from 'react-redux';

import './HelpSection.scss';
import {setHelpWidgetAsLoaded, hideHelpWidget, toggleHelpWidget} from '../../actions';

class HelpSection extends Component {
  constructor(props) {
    super(props);
    this.loadHelpWidget();
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__help-section">
          {
            this.props.helpWidgetLoaded &&
            <div className="dc-btn-dropdown">

              <div className="toggle"
                   onClick={this.props.toggleHelpWidget}
                   href
              >
                <i className="dc-icon dc-icon--help dc-icon--interactive"></i>
              </div>
              <div aria-live="polite"
                   id="nanoRepEmbedContainer"
                   className={'dc-btn-dropdown__list dc-btn-dropdown__list--down help-widget' +
                   (this.props.helpWidgetShown ? ' visible' : '')}
              >
                <i
                    className="dc-icon dc-icon--close dc-icon--interactive"
                    onClick={this.props.hideHelpWidget}
                >
                </i>
              </div>

            </div>
          }
        </div>
    );
  }

  loadHelpWidget() {
    // NANOREP EMBEDDED WIDGET
    // Generated at my.nanorep.com > Guided Journeys > Touchpoints > Embedded Widget > get the code

    let _nRepData = window._nRepData || [];
    _nRepData['kb'] = '70732382';
    _nRepData['customParams'] = {
      product: this.getHelpSections()
    };
    _nRepData['embed'] = {
      account: 'zalandobrands',
      container: 'nanoRepEmbedContainer',
      width: 400,
      maxHeight: 500,
      dynamicSize: true,
      cdcFrame: '',
      cdcVersion: 3,
      scriptVersion: '2.74.7.3'
    };

    (() => {
      let windowLoadFunc = () => {
        let _nRepData = window._nRepData || [];
        _nRepData['windowLoaded'] = true;
        if (typeof(_nRepData['windowOnload']) === 'function') {
          _nRepData['windowOnload']();
        }
      };

      if (window.attachEvent) {
        window.attachEvent('onload', windowLoadFunc);
      }
      else if (window.addEventListener) {
        window.addEventListener('load', windowLoadFunc, false);
      }

      let sc = document.createElement('script');
      sc.type = 'text/javascript';
      sc.async = true;
      sc.defer = true;
      sc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') +
          'my.nanorep.com/widget/scripts/embed.js?account=zalandobrands';

      let _head = document.getElementsByTagName('head')[0];
      _head.appendChild(sc);
    })();

    // added this to generate code so we can run this outside the global scope
    window._nRepData = _nRepData;

    this.props.setHelpWidgetAsLoaded();
  }

  getHelpSections() {
    return ['General'].concat(this.getUserApplications());
  }

  getUserApplications() {
    // TODO This will be fetched from a backend endpoint
    let userApplications = [];
    this.props.products.forEach(product => {
      userApplications.push(...product.applications.map(application => application.name));
    });
    return userApplications;
  }
}

HelpSection.propTypes = {
  products: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  helpWidgetLoaded: state.visibility.helpWidgetLoaded,
  helpWidgetShown: state.visibility.helpWidgetShown
});

const mapDispatchToProps = (dispatch) => {
  return {
    setHelpWidgetAsLoaded: () => {
      dispatch(setHelpWidgetAsLoaded());
    },

    hideHelpWidget: () => {
      dispatch(hideHelpWidget());
    },

    toggleHelpWidget: () => {
      dispatch(toggleHelpWidget());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelpSection);
