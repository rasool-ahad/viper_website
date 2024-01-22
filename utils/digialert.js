import React from "react";
import { Snackbar, Box, Typography, IconButton } from "@mui/material";
import { Close, Info, Warning } from "@mui/icons-material";

export default function DigiAlert({ open, close, message, type }) {
  const [widthsize, setWidthsize] = React.useState("444px");
  React.useEffect(() => {
    if (window.innerWidth < 550) {
      setWidthsize("95%");
    } else {
      setWidthsize("444px");
    }
  });

  const ErrorStyle = {
    direction:"rtl",
    width: widthsize,
    height: "72px",
    pb: "40px",
    border: "2px solid #ecc39d ",
    borderRadius: "8px",
    backgroundColor: "#fff8f0",
  };
  const ErrorBox = {
    display:"flex",
    justifyContent:"center",
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "rgba(252, 139, 71, 1)",
    mt: "38px",
    pt: "10px",
  };

  const InfoStyle = {
    width: widthsize,
    height: "72px",
    pb: "40px",
    border: "2px solid #22bbe5 ",
    borderRadius: "8px",
    backgroundColor: "#cbe4eb",
  };
  const InfoBox = {
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#22bbe5",
    mt: "38px",
    pt: "10px",
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={30000}
      onClose={close}
      sx={type === "error" ? ErrorStyle : InfoStyle}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Box
        className="d-flex justify-content-between"
        sx={{ width: "100%", px: "10px", textAlign: "left" }}
      >
        <Box sx={type === "error" ? ErrorBox : InfoBox} className="text-center">
          {type == "error" ? (
            <Warning color="whiteNo" />
          ) : (
            <Info color="whiteNo" />
          )}
        </Box>
        <Typography variant="p" component="div" sx={{ pt: "50px" }}>
          {message}
        </Typography>
        <IconButton onClick={close} sx={{ mt: "40px" }}>
          <Close />
        </IconButton>
      </Box>
    </Snackbar>
  );
}
