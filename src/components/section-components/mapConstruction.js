import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class MapConstruction extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.719228832231!2d30.559082977245296!3d38.74720477175656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf17b27b198601%3A0xc4a5b97a6385d481!2sG%C3%BCvenevler%2C%20Kocatepe%20Cd.%20No%3A45%2C%2003030%20Afyonkarahisar%20Merkez%2FAfyonkarahisar!5e0!3m2!1str!2str!4v1722176825220!5m2!1str!2str"
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

export default MapConstruction;
