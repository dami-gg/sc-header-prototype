import React, {Component} from 'react';

class HelpSection extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink">
          <div id="helpWidget"
               className="dc-btn-dropdown">

            <div className="toggle" href> { /* TODO Add onClick event to toggle widget */ }
              <i className="dc-icon dc-icon--help dc-icon--interactive"></i>
            </div>
            <div aria-live="polite"
                 id="nanoRepEmbedContainer"
                 className="dc-btn-dropdown__list dc-btn-dropdown__list--down help-widget">
              <i className="dc-icon dc-icon--close dc-icon--interactive"> { /* TODO Add onClick event to close widget */ }
              </i>
            </div>
          </div>
        </div>
    );
  }
}

export default HelpSection;
