import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ContactInfo from "./section-components/contact-info";
import ContactInfo2 from "./section-components/contact-info2";
import ContactForm from "./section-components/contact-form";
import Map from "./section-components/map";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import { Grid } from "@mui/material";

const ContactV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact Us" subheader="Contact" />
      <Grid container>
        <Grid xs="6">
          <ContactInfo />
        </Grid>
        <Grid xs="6">
          <ContactInfo2 />
        </Grid>
      </Grid>
      <ContactForm />
      <Map />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ContactV1;
