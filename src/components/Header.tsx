"use client";

import { Box, Chip, Typography } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export function Header() {
  const { language } = useSettings();
  const isThai = language === "th";

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pb: 2,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
        {isThai ? "ยินดีต้อนรับ" : "Welcome"}
      </Typography>

      <Chip
        label={isThai ? "บันทึกอัตโนมัติ" : ""}
        color="success"
        size="small"
        variant="outlined"
      />
    </Box>
  );
}
