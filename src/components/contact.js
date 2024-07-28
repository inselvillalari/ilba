import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ContactInfo from "./section-components/contact-info";
import ContactInfo2 from "./section-components/contact-info2";
import ContactForm from "./section-components/contact-form";
import MapOffice from "./section-components/mapOffice";
import MapConstruction from "./section-components/mapConstruction";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import { Grid, Container, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#ff5a3c",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: "var(--ltn__heading-font)",
    "&:hover": {
      color: "#000",
      opacity: 2,
    },
    "&.Mui-selected": {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: "#ff5a3c",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const ContactV1 = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact Us" subheader="Contact" />
      <Container>
        <Grid container>
          <Grid xs={12} md={6}>
            <ContactInfo />
          </Grid>
          <Grid xs={12} md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
      <ContactForm />
      <Box sx={{ width: "100%" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="MERKEZ OFİS" value={1}/>
          <AntTab label="MERKEZ ŞANTİYE" value={2}/>
        </AntTabs>
      </Box>
      {value == 1 && <MapOffice />}
      {value == 2 && <MapConstruction />}
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ContactV1;
