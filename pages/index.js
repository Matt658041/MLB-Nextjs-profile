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
      <Container maxWidth="xxl" sx={{ marginTop: 5, marginBottom: 1 }}>
        <Grid
          container
          spacing={1} // Reduced spacing
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }} // Centering components
        >
          <Grid item xs={12}>
            <Main />
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12}>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
