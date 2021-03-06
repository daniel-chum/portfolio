import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div
        className={this.props.scrolled === 1 ? "intro moveup" : "intro"}
        onWheel={this.props.scrollDown}
        onTouchStart={this.props.scrollDown}
        onTouchMove={this.props.scrollDown}
      >
        <div className="catch-phrase">
          <h1 className="catch-1">Full.</h1>
          <h1 className="catch-2">Stack.</h1>
          <h1 className="catch-3">Developer.</h1>
        </div>
        <h2>I bring ideas to life through code.</h2>
        <a onClick={this.props.scrollDown}>
          <svg width="30" height="30" fill="#fff">
            <path
              d="M27.95233 13.19964l-12.9598 14.1915-12.9598-14.1915c-.24177-.25574-.62712-.24836-.86067.01636-.2278.2583-.2278.66773 0 .92596L14.5628 28.804c.23766.26017.62295.26017.86067 0L28.8142 14.14196c.23356-.26473.22683-.68666-.01494-.9424-.236-.24948-.60984-.24948-.84573 0l-.0012.00007zm0-11.9962l-12.9598 14.1915-12.9598-14.1915C1.79096.9477 1.4056.95508 1.17206 1.2198c-.2278.2583-.2278.66772 0 .926L14.5628 16.80786c.23766.26017.62295.26017.86067 0L28.8142 2.14582c.24178-.25573.24846-.6776.01495-.94238s-.61884-.27204-.86067-.01637l-.01495.01637h-.0012z"
              fill="#607d8b"
              fill-rule="nonzero"
            />
            <path
              d="M14.99254 29c-.16155.0003-.3166-.06967-.43094-.19463L1.17087 14.14333c-.23356-.26473-.22683-.68666.01495-.9424.236-.24942.60983-.24942.84567 0l12.96 14.1902 12.9598-14.1915c.24178-.25573.62712-.24836.86068.01637.22785.2583.22785.66772 0 .92602l-13.3907 14.66204c-.114.12502-.26842.1955-.42973.19594zm0-11.9962c-.16155.0003-.3166-.06966-.43094-.19463L1.17087 2.14714c-.23356-.26473-.22683-.68666.01495-.9424.236-.24942.60983-.24942.84572 0l12.96 14.1902 12.9598-14.1915c.23356-.26473.61884-.27204.86068-.01637s.24845.6776.01495.94238l-.01495.01637-13.39074 14.66204c-.114.12503-.26842.1955-.42973.19594z"
              fill-rule="nonzero"
              fill="#000"
            />
          </svg>
        </a>
      </div>
    );
  }
}
