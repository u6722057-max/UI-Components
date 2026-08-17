"use client";

import {
  Button,
  Divider,
  FormLabel,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } =
    useSettings();
  const isThai = language === "th";

  return (
    <Paper
      component="section"
      variant="outlined"
      aria-labelledby="settings-heading"
      sx={{ p: { xs: 3, sm: 4 } }}
    >
      <Typography
        id="settings-heading"
        variant="h5"
        component="h2"
        sx={{ fontWeight: 700 }}
      >
        {isThai ? "การตั้งค่า" : "Settings"}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {isThai ? "การเปลี่ยนแปลงจะถูกบันทึกทันที" : "Changes are saved instantly."}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Stack spacing={3}>
        <Stack spacing={1}>
          <FormLabel>{isThai ? "ธีม" : "Theme"}</FormLabel>
          <ToggleButtonGroup
            value={theme}
            exclusive
            fullWidth
            onChange={(_, value) => value && setTheme(value)}
            aria-label={isThai ? "เลือกธีม" : "Choose theme"}
          >
            <ToggleButton value="light">☀ {isThai ? "สว่าง" : "Light"}</ToggleButton>
            <ToggleButton value="dark">☾ {isThai ? "มืด" : "Dark"}</ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack spacing={1}>
          <FormLabel>{isThai ? "ภาษา" : "Language"}</FormLabel>
          <ToggleButtonGroup
            value={language}
            exclusive
            fullWidth
            onChange={(_, value) => value && setLanguage(value)}
            aria-label={isThai ? "เลือกภาษา" : "Choose language"}
          >
            <ToggleButton value="en">EN - English</ToggleButton>
            <ToggleButton value="th">TH - ภาษาไทย</ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Button variant="outlined" onClick={resetSettings}>
          {isThai ? "คืนค่าเริ่มต้น" : "Reset Settings"}
        </Button>
      </Stack>
    </Paper>
  );
}
