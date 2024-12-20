import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Icon } from "@iconify/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Headerimg from "../../Images/box.jpeg";
import Logo from "../../Images/log.jpeg";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Top Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#c21760" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: 64, px: 2 }}
        >
          <Grid item>
            <img style={{ width: "40px" }} src={Headerimg} alt="Header Icon" />
          </Grid>
          <Grid item xs>
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: isMobile ? "14px" : "18px",
              }}
            >
              Do you need a business account?
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: "#e21b70",
                color: "#fff",
                fontSize: isMobile ? "12px" : "14px",
                padding: isMobile ? "6px 12px" : "8px 16px",
                "&:hover": {
                  backgroundColor: "#c2185b",
                },
              }}
              variant="contained"
            >
              SIGN UP NOW
            </Button>
          </Grid>
        </Grid>
      </AppBar>

      {/* Main Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: isMobile ? 2 : 8, height: 64 }}
        >
          <Grid item display="flex" alignItems="center">
            <img
              style={{ width: isMobile ? "30px" : "35px" }}
              src={Logo}
              alt="Logo"
            />
            <Typography
              variant="h6"
              sx={{
                color: "#e21b70",
                ml: 1,
                fontWeight: "bold",
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              foodpanda
            </Typography>
          </Grid>

          <Grid item>
            <Grid container spacing={isMobile ? 1 : 2} alignItems="center">
              <Grid item>
                <Button
                  sx={{
                    color: "#000",
                    fontSize: isMobile ? "12px" : "14px",
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  Log In
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: "#e21b70",
                    color: "#fff",
                    fontSize: isMobile ? "12px" : "14px",
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#c2185b" },
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleOpen}
                  sx={{ color: "#000", fontSize: isMobile ? "12px" : "14px" }}
                >
                  <LanguageIcon />
                  <Typography variant="body2" sx={{ mx: 1 }}>
                    EN
                  </Typography>
                  {open ? (
                    <KeyboardArrowUpIcon sx={{ color: "#e21b70" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ color: "#e21b70" }} />
                  )}
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="language-selector"
                  aria-describedby="language-selector-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 200,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      English
                    </Typography>
                    <CheckCircleOutlineIcon sx={{ color: "#e21b70" }} />
                  </Box>
                </Modal>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Icon
                    icon="iconamoon:shopping-bag-thin"
                    fontSize={isMobile ? 20 : 24}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}

export default Navbar;
