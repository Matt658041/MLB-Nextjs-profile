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
import MobileImage from "../public/assets/projects/Screenshot 2023-05-12 104708.png";

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


function MedscanAppModal({ modalOpen, setModalOpen }) {
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
              Medscan Mobile App
            </Typography>
            <Image
              src={MobileImage}
              alt="Medscan Mobile App"
              width={800}
              height={600}
           
            />
            <Typography variant="body1" sx={{ py: 2 }}>
              Developed a mobile app for iOS and Android to support healthcare
              workers in Kenya. Enabled point-of-care specimen collection and
              diagnostic test analysis for schistosomiasis. Integrated
              interactive maps and barcode scanning for streamlined data
              collection and analysis. Facilitated real-time data sharing with
              public health stakeholders.
            </Typography>
          </Box>
        </Modal>
      </ThemeProvider>
    );
}

export default MedscanAppModal