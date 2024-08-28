import React from "react";
import Image from "next/image";
import nyImage from "../public/assets/projects/github-profile.jpg";
import { Box, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

const About = () => {
  return (
    <Box
      id="about"
      sx={{ width: "100%", py: 16, display: "flex", alignItems: "center" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "widest",
                color: "#12113a",
              }}
            >
              About
            </Typography>
            <Typography variant="h2" sx={{ py: 4 }}>
              Who I Am
            </Typography>
            <Typography variant="body1" sx={{ py: 2, color: "text.primary" }}>
              My journey into software development was driven by a desire to
              create better, more functional websites than what I was
              encountering. This passion motivated me to complete a Full Stack
              Web Development Bootcamp at Vanderbilt University, where I built a
              strong foundation in modern web technologies. From there, I
              pursued self-guided learning, consistently pushing myself to
              master new skills and technologies. This commitment to growth
              quickly led to securing an entry-level developer position, which I
              rapidly outgrew by consistently exceeding expectations. In my
              current role as a developer for the Mobile Health for Global
              Health (MHGH) research group at Vanderbilt University, I have led
              the frontend development of several impactful projects, including
              Medscan and mLab+. Medscan is a web dashboard and mobile health
              application that supports large-scale epidemiology studies in
              Kenya, while mLab+, developed in collaboration with Columbia
              University, is a mobile application facilitating HIV and Syphilis
              testing. My software is directly used by research participants and
              public health officials, ensuring that these projects have
              real-world impact and consequences. My responsibilities included
              building interactive, user-friendly interfaces, optimizing data
              visualization, and ensuring seamless integration with backend
              services. These projects required close collaboration with
              interdisciplinary teams, rapid learning of new technologies, and
              the application of best practices in Agile development.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                width: "100%",
                height: "auto",
                margin: "auto",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                className="rounded-xl"
                src={nyImage}
                alt="GitHub Profile"
                width={380}
                height={380}
                style={{ borderRadius: "8px" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
