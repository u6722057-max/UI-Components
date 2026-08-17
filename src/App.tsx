"use client";

import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { useSettings } from "./context/SettingsContext";
import { Header } from "./components/Header";
import { PreviewCard } from "./components/PreviewCard";
import { SettingsPanel } from "./components/SettingsPanel";

export default function App() {
  const { theme, language } = useSettings();
  const isThai = language === "th";
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: { main: theme === "light" ? "#1976d2" : "#90caf9" },
          background: {
            default: theme === "light" ? "#f5f7fa" : "#121212",
            paper: theme === "light" ? "#ffffff" : "#1e1e1e",
          },
        },
        typography: {
          fontFamily: 'Arial, "Noto Sans Thai", sans-serif',
        },
        shape: { borderRadius: 10 },
      }),
    [theme],
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box
        component="main"
        id="top"
        sx={{ minHeight: "100vh", bgcolor: "background.default", py: 3 }}
      >
        <Container maxWidth="md">
          <Header />

          <Box component="section" sx={{ py: { xs: 4, sm: 6 } }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {isThai ? "การตั้งค่าแอป" : "App Settings"}
            </Typography>
            <Typography color="text.secondary">
              {isThai
                ? "เลือกธีมและภาษาที่คุณต้องการ"
                : "Choose your preferred theme and language."}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <SettingsPanel />
            <PreviewCard />
          </Box>

          <Typography
            component="footer"
            variant="body2"
            color="text.secondary"
            sx={{ pt: 4, textAlign: "center" }}
          >
            Preference Studio
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
