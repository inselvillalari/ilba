import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class MapOffice extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.7676227960937!2d30.674276972264753!3d36.895907012955846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390292600f491%3A0x3c48177113e007d9!2sSo%C4%9Fuksu%2C%20308.%20Sk.%20No%3A42%20Blok%2011%2C%2007030%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1722176730452!5m2!1str!2str"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    );
  }
}

export default MapOffice;
