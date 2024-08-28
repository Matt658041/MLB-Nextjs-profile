import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <>
      <Container maxWidth="xxl" sx={{ marginTop: 5, marginBottom: 5 }}>
        <Grid
          container
          spacing={1} // Reduced spacing
          sx={{
            overflowY: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }} // Centering components
        >
          <Grid item xs={12} sm={8} md={8} lg={9} xl={9}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
            <About />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Skills />
          </Grid>
          <Projects />

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}></Grid>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}></Grid>

          {/* This is where I will render the Selected Session or Lot Card and their details */}
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}></Grid>
        </Grid>
      </Container>
    </>
  );
}
