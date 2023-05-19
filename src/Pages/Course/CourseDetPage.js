import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Jupiter from "../../Components/Coursess/CourseDet/Jupiter";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navs from "../../Components/NavBar/Navs";
import CourseDet from "../../Components/Coursess/CourseDet/CourseDet";

const CustomTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.status.default,
  color: theme.status.font,
  height: "50px",
}));

const theme1 = createTheme({
  status: {
    default: "#000",
    font: "#29b6f6",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Content() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navs />
      <ThemeProvider theme={theme1}>
        <Box sx={{ width: "100%" }}>
          <AppBar position="static">
            <CustomTabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "white",
                },
              }}
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab
                label="Tutorials"
                {...a11yProps(0)}
                sx={{ fontWeight: "bold", color: "white" }}
              />
              <Tab
                label="Jupiter"
                {...a11yProps(1)}
                sx={{ fontWeight: "bold", color: "white" }}
              />
            </CustomTabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <CourseDet />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Jupiter />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </>
  );
}
