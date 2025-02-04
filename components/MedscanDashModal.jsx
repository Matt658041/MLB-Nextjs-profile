import React from "react";
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
import MedscanTest from "../public/assets/projects/Medscan test history screen shot.png";

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
  borderRadius: "3px",
  border: "1px solid #0f172a",
  padding: "15px",
  width: "75vw", // 75% of the viewport width
  height: "75vh", // 75% of the viewport height
  maxWidth: "100%", // Ensure it doesn't exceed the viewport width
  maxHeight: "100%", // Ensure it doesn't exceed the viewport height
  overflow: "auto", // Add scroll if content overflows
};


function MedscanDashModal({ modalOpen, setModalOpen }) {
  return (
    <ThemeProvider theme={ModalStyleTheme}>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        hideBackdrop={false}
        disableAutoFocus={true}
      >
        <Box sx={{ height: "500px", overflowY: "auto", position: "relative" }}>

      
          <HighlightOff
            onClick={() => setModalOpen(false)}
            style={{ position: "absolute", top: "15", right: "15" }}
          />
          <Typography variant="h4" sx={{ textAlign: "center", py: 2 }}>
            Medscan Dash Test History Page
          </Typography>
          <Image
            src={MedscanTest}
            alt="Medscan Mobile App"
            width={950}
            height={600}
          />
          <Typography variant="body1" sx={{ py: 2 }}>
            Designed and developed an interactive web dashboard for real-time
            visualization and sorting of study results. Enhanced project so that
            when the user clicked on the map it navigated to and selected the
            corresponing card. Incorporated mulitple filtering items to sort and
            select information. Also, connected to a database to store and
            retrieve information.
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default MedscanDashModal;
