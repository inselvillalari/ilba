import React, { Component } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
class ContactInfo extends Component {
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
                    </div>
                    <p>
                      +90 242 238 40 75 <br /> +90 242 238 40 85
                    </p>
                  </div>
                  <div>
                    <div className="ltn__contact-address-icon">
                      <LocationOnIcon fontSize="large" />
                    </div>
                    <p>
                      Soğuksu Mahallesi 308 Sokak No:42 Adabel Sitesi B Blok
                      11/38
                      <br />
                      Muratpaşa, ANTALYA
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

export default ContactInfo;
