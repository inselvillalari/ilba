import React, { Component } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

class ContactInfo2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="column">
            <div>
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="container">
                  <div>
                    <div className="ltn__contact-address-icon">
                      <EmailIcon fontSize="large" />
                      {/* <img
                 src={publicUrl + "assets/img/icons/10.png"}
                 alt="Icon Image"
               /> */}
                    </div>
                    <p>
                      info@ilba.com.tr
                      <br />
                      info@in-sel.com.tr
                    </p>
                  </div>
                  <div>
                    <div className="ltn__contact-address-icon">
                      <ContactPhoneIcon fontSize="large" />
                      {/* <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="Icon Image"
                  />  */}
                    </div>
                    <p>
                      +90 272 216 94 53 <br /> +90 272 216 94 53
                    </p>
                  </div>
                  <div>
                    <div className="ltn__contact-address-icon">
                      <LocationOnIcon fontSize="large" />
                      {/* <img
                        src={publicUrl + "assets/img/icons/12.png"}
                        alt="Icon Image"
                      /> */}
                    </div>
                    <p>
                      Güvenevler Mahallesi Kocatepe Caddesi No:45
                      <br />
                      Merkez, AFYONKARAHİSAR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo2;
