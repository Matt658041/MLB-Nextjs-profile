import React, { useState } from "react";
import {
  Box,
  Button,
  MobileStepper,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import Image from "next/image";
import MedscanMapDash from "./MedscanMapDash";
import MedscanAppModal from "./MedscanAppModal";
import MlabApp from "./MlabApp";
import MedscanDashModal from "./MedscanDashModal";
import MedscanMap from "../public/assets/projects/Medscan Map screen shot.png";
import Mlab from "../public/assets/projects/mlab screen shot.png";
import MobileImage from "../public/assets/projects/Screenshot 2023-05-12 104708.png";
import MedscanTest from "../public/assets/projects/Medscan test history screen shot.png";
import Grid from "@mui/material/Grid2";

const steps = [
  {
    label: "Medscan Map",
    component: (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Image src={MedscanMap} alt="Medscan Map" width={400} height={400} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          Click to expand
        </Box>
      </Box>
    ),
    modal: MedscanMapDash,
  },
  {
    label: "Medscan Mobile App",
    component: (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Image
          src={MobileImage}
          alt="Medscan Mobile App"
          width={400}
          height={400}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          Click to expand
        </Box>
      </Box>
    ),
    modal: MedscanAppModal,
  },
  {
    label: "Mlab App",
    component: (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Image src={Mlab} alt="Mlab App" width={400} height={400} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          Click to expand
        </Box>
      </Box>
    ),
    modal: MlabApp,
  },
  {
    label: "Medscan Dash",
    component: (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Image src={MedscanTest} alt="Medscan Dash" width={400} height={400} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          Click to expand
        </Box>
      </Box>
    ),
    modal: MedscanDashModal,
  },
];

function Projects() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [ModalComponent, setModalComponent] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleImageClick = (ModalComponent) => {
    setModalComponent(() => ModalComponent);
    setModalOpen(true);
  };

  return (
    <Box sx={{ width: "100%", py: 16 }}>
      <Container maxWidth="xxl">
        <Typography variant="h2" sx={{ py: 2 }}>
          Projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            onClick={() => handleImageClick(steps[activeStep].modal)}
            sx={{ mb: 2 }}
          >
            {steps[activeStep].component}
          </Box>
          <MobileStepper
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
            sx={{ backgroundColor: "transparent", mt: 2 }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
            }
          />
        </Box>
        {ModalComponent && (
          <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </Container>
    </Box>
  );
}

export default Projects;
