"use client";

import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export function PreviewCard() {
  const { theme, language } = useSettings();
  const isThai = language === "th";

  return (
    <Paper
      component="section"
      variant="outlined"
      aria-labelledby="preview-heading"
      sx={{ p: { xs: 3, sm: 4 } }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
          {isThai ? "ตัวอย่าง" : "Preview"}
        </Typography>
        <Chip label={isThai ? "สด" : "Live"} color="primary" size="small" />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography id="preview-heading" variant="h4" component="h3" gutterBottom>
        {isThai ? "ยินดีต้อนรับ" : "Welcome"}
      </Typography>
      <Typography color="text.secondary">
        {isThai
          ? "นี่คือหน้าตัวอย่างการตั้งค่า"
          : "This is your preference preview."}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          mt: 4,
        }}
      >
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            {isThai ? "ธีมปัจจุบัน" : "Current Theme"}
          </Typography>
          <Typography sx={{ mt: 0.5, fontWeight: 700 }}>
            {theme === "light"
              ? isThai
                ? "สว่าง"
                : "Light"
              : isThai
                ? "มืด"
                : "Dark"}
          </Typography>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            {isThai ? "ภาษาปัจจุบัน" : "Current Language"}
          </Typography>
          <Typography sx={{ mt: 0.5, fontWeight: 700 }}>
            {language.toUpperCase()}
          </Typography>
        </Paper>
      </Box>
    </Paper>
  );
}
