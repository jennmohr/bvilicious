import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Events from "./components/Events";
import EventPage from "./components/EventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
  },
});

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/cbv1ymt.css" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Events />
                </>
              }
            />
            <Route path="/event/:eventName" element={<EventPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
