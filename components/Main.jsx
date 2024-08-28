import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Box, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const Main = () => {
  return (
    <Box
      id="home"
      sx={{
        marginTop: 5,
        width: "100%",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1240px",
          width: "100%",
          height: "100%",
          mx: "auto",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Center the content horizontally
              alignItems: "center",
              gap: "1rem", // Add gap between typography and image
            }}
          >
            <Typography variant="h1" sx={{ color: "red", py: 0.5 }}>
              Hi, <span style={{ color: "green" }}>I am </span>
              <span style={{ color: "purple" }}> Matt </span>
            </Typography>
            <Image
              src="/assets/projects/github-profile.jpg"
              alt="GitHub Profile"
              width={72}
              height={72}
              style={{ borderRadius: "30%", flexShrink: 0 }}
              sx={{ boxShadow: 3 }}
            />
          </Box>
          <Typography variant="h1" sx={{ py: 2, color: "gray" }}>
            A Full-Stack Web and Mobile Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              py: 4,
              fontSize: "1.125rem",
              color: "gray",
              maxWidth: "70%",
              mx: "auto",
            }}
          >
            Experienced developer of web and mobile applications for the Mobile
            Health for Global Health (MHGH) research group at Vanderbilt
            University, which is an interdisciplinary group of scientists
            dedicated to the control and elimination of infectious disease in
            low-resource settings through implementation of cutting-edge mobile
            health technology. I am a self-starter able to think both creatively
            and analytically, with a mind for patterns, spatial awareness, data
            crunching and puzzle solving.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <Grid container spacing={2} sx={{ maxWidth: "330px" }}>
              <Grid item>
                <Link href="mailto:matthewboisse@gmail.com">
                  <IconButton
                    sx={{
                      boxShadow: 3,
                      p: 2,
                      "&:hover": {
                        transform: "scale(1.1)",
                        transition: "ease-in 0.3s",
                      },
                    }}
                  >
                    <AiOutlineMail />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.linkedin.com/in/matthew-boisse-b3a296224/">
                  <IconButton
                    sx={{
                      boxShadow: 3,
                      p: 2,
                      "&:hover": {
                        transform: "scale(1.1)",
                        transition: "ease-in 0.3s",
                      },
                    }}
                  >
                    <FaLinkedinIn />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
