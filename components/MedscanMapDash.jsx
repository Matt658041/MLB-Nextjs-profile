import React, { useState, useEffect, useRef, useMemo } from "react";
import Modal from "@mui/material/Modal";
import {
  TextField,
  MenuItem,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import HighlightOff from "@mui/icons-material/HighlightOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import MedscanMap from "../public/assets/projects/Medscan Map screen shot.png";



const ModalStyleTheme = createTheme({
  palette: {
    primary: {
      main: "#0f172a",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#0f172a",
        },
      },
    },
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
 
  border: "1px solid #0f172a",
  padding: "15px",
  width: "75vw", // 75% of the viewport width
  height: "75vh", // 75% of the viewport height
  maxWidth: "100%", // Ensure it doesn't exceed the viewport width
  maxHeight: "100%", // Ensure it doesn't exceed the viewport height
  overflow: "auto", // Add scroll if content overflows
};


function MedscanMapDash ({ modalOpen, setModalOpen }) {

  return (
    <ThemeProvider theme={ModalStyleTheme}>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        hideBackdrop={true}
        disableAutoFocus={true}
      >
        <Box sx={style}>
          <HighlightOff
            onClick={() => setModalOpen(false)}
            style={{ position: "absolute", top: "15", right: "15" }}
          />
          <Typography variant="h4" sx={{ textAlign: "center", py: 2 }}>
            Medscan Dash Test History Page
          </Typography>
          <Image
            src={MedscanMap}
            alt="Medscan Mobile App"
            width={950}
            height={600}
          
          />
          <Typography variant="body1" sx={{ py: 2 }}>
            Designed and developed an interactive map for real-time
            visualization of study results. Enhanced project oversight with
            features tailored for administrators, project managers, and
            sponsors. Incorporated a dynamic map to track disease prevalence
            in Kenyan schools, complete with search, filters, editable pop-ups,
            and carousels. Streamlined user experience with dedicated pages
            for detailed school information and testing history. Implemented
            full resource and staff audit histories to improve data interaction
            and accessibility.
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
export default MedscanMapDash;
