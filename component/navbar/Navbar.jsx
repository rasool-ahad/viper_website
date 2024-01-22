import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { CssBaseline } from "@mui/material";
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    minWidth: 280,
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));


export const Navbar = (props) => {

  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [device, setDevice] = useState("desktop");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResize = (e) => {
    const width = e ? e.target.innerWidth : window?.innerWidth;

    if (width > 992) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className="appHeader">
            <Toolbar>
              <div
                className={`${menu ? "cover-body active" : "cover-body"}`}
                onClick={() => setMenu(false)}
              ></div>

              <nav>
                <div className="content">
                  <div
                    className="btn-menu-responcive"
                    onClick={() => setMenu(true)}
                  >
                    <Image
                      src={
                        process.env.PUBLIC_URL +
                        "/image/icons/icon/menuIcon.svg"
                      }
                      alt="خرید و فروش ارز دیجیتال"
                      width={20}
                      height={20}
                    />
                  </div>
                  <Link href="/">
                    <a className="logo" aria-label="شرکت وایپر">
                 
                      <Image
                        src={process.env.PUBLIC_URL + "/image/logoFa.png"}
                        alt="شرکت وایپر"
                        layout="fill"
                      />
                    </a>
                  </Link>
                  <div className={`${menu ? "links active" : "links"}`}>
                    <Box className="borderbottom boldfont-dialog dialog-title-container">
                      <div className="logo-responsive">
                        <Link href="/">
                          <a aria-label="شرکت وایپر">
                         
                            <Image
                              src={process.env.PUBLIC_URL + "/image/logoFa.png"}
                              alt="شرکت وایپر"
                              height={22}
                              width={110}
                            />
                          </a>
                        </Link>
                      </div>
                      <IconButton
                        aria-label="close"
                        onClick={() => setMenu(false)}
                        className="closBtnIcon"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <div className="auth notActive">
                      <ul className="btn-group">
                        <a href="https://app.digiex24.com/login">
                          <li className="login_responsive">ورود</li>
                        </a>
                        <a href="https://app.digiex24.com/login">
                          <li className="register_responsive">ثبت نام</li>
                        </a>
                      </ul>
                    </div>
                    <div>
                    <ul className="navbarItems">
                      <li>
                        <Link href="/trade">
                          <a className="NavLiItem">
                            <Image
                              src={
                                process.env.PUBLIC_URL +
                                "/image/icons/icon/tradehelp.svg"
                              }
                              className="navLiImage"
                              alt="دوره های اموزشی"
                              width={22}
                              height={22}
                            />
                            دوره های اموزشی
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/invite-friends">
                          <a className="NavLiItem">
                            <Image
                              src={
                                process.env.PUBLIC_URL +
                                "/image/icons/icon/ref.svg"
                              }
                              className="navLiImage"
                              alt="پروژه های ما"
                              width={22}
                              height={22}
                            />
                            پروژه های ما
                            
                          </a>
                        </Link>
                      </li>
                    
                      <li>
                        <Link href="https://blog.digiex24.com">
                          <a target="_blank" className="NavLiItem">
                            <Image
                              src={
                                process.env.PUBLIC_URL +
                                "/image/icons/icon/blog.svg"
                              }
                              className="navLiImage"
                              alt="مجله وایپر"
                              width={22}
                              height={22}
                            />
                            بلاگ وایپر
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/aboutus">
                          <a className="NavLiItem">
                            <Image
                              src={
                                process.env.PUBLIC_URL +
                                "/image/icons/icon/about.svg"
                              }
                              className="navLiImage"
                              alt="درباره وایپر"
                              width={22}
                              height={22}
                            />
                            درباره ما
                          </a>
                        </Link>
                      </li>
                    </ul>
                    </div>
                  </div>
                  <div className="auth">
                    <ul className="btn-group">
                      <Button
                        id="support-button"
                        className="supportBtn"
                        aria-controls={open ? "support-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        // endIcon={<KeyboardArrowDownIcon />}
                        startIcon={
                          <Image
                            src={`${process.env.PUBLIC_URL}/image/icons/icon/support.svg`}
                            className="navLiImage"
                            alt="پشتیبانی وایپر"
                            width={20}
                            height={20}
                          />
                        }
                      >
                        <span className="desc">پشتیبانی</span>
                      </Button>
                      <StyledMenu
                        id="support-menu"
                        MenuListProps={{
                          "aria-labelledby": "support-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <a href="tel:+982191035474">
                          <MenuItem onClick={handleClose} disableRipple>
                            <Box className="callUsImage">
                              <Image
                                src={
                                  process.env.PUBLIC_URL +
                                  "/image/icons/icon/callus.svg"
                                }
                                className="navLiImage"
                                alt="تماس با پشتیبانی دیجیکس ۲۴"
                                layout="fill"
                              />
                            </Box>
                            <div className="phoneNumber">
                              <span className="number">۰۲۱-۹۱۰۳۵۴۷۴</span>
                              <span className="desc">۲۴ ساعته، ۷ روز هفته</span>
                            </div>
                          </MenuItem>
                        </a>
                      </StyledMenu>
                    </ul>
                  </div>
                </div>
              </nav>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    </>
  );
};
